import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { validateStaticDistFolder, listDistFiles } from './hostingDistValidate.mjs';
import { normalizeHostingDomain } from './hostingDomainPolicy.mjs';
import { hestiaUserPath } from './hestiaClient.mjs';

const DEFAULT_MAX_BYTES = 4 * 1024 * 1024;

function isTextAsset(relPath) {
  if (relPath === '.htaccess' || relPath.endsWith('/.htaccess')) return true;
  return /\.(html?|css|js|mjs|json|svg|txt|xml|webmanifest|map|md)$/i.test(relPath);
}

function resolveDistFiles(distDir, { maxBytes = DEFAULT_MAX_BYTES } = {}) {
  const validation = validateStaticDistFolder(distDir);
  if (!validation.ok) {
    return { ok: false, validation, files: [], skipped: [] };
  }

  const files = [];
  const skipped = [];
  for (const rel of listDistFiles(distDir)) {
    const full = join(distDir, rel);
    const size = readFileSync(full).length;
    if (size > maxBytes) {
      skipped.push({ rel, size });
      continue;
    }
    if (!isTextAsset(rel)) {
      skipped.push({ rel, size, reason: 'binary' });
      continue;
    }
    files.push(rel);
  }

  return { ok: true, validation, files, skipped };
}

/**
 * Sobe dist/ completo do cliente para public_html via API Hestia.
 */
export async function uploadClientDistToHestia(client, { user, domain, distDir, onFile }) {
  const cleanDomain = normalizeHostingDomain(domain);
  const infraUser = String(user || '').trim();
  if (!cleanDomain || !infraUser) {
    return { ok: false, error: 'user/domain inválido.' };
  }
  if (!existsSync(distDir)) {
    return { ok: false, error: `Dist não encontrado: ${distDir}` };
  }

  const resolved = resolveDistFiles(distDir);
  if (!resolved.ok) {
    return {
      ok: false,
      error: resolved.validation.errors.join('; '),
      validation: resolved.validation,
    };
  }

  const publicBase = hestiaUserPath(infraUser, `web/${cleanDomain}/public_html`);
  const dirs = new Set(['']);
  for (const rel of resolved.files) {
    const parts = rel.split('/');
    parts.pop();
    for (let i = 0; i < parts.length; i++) {
      dirs.add(parts.slice(0, i + 1).join('/'));
    }
  }

  const steps = [];
  for (const dir of [...dirs].sort()) {
    const dirPath = dir ? `${publicBase}/${dir}` : publicBase;
    const mk = await client.hestiaPost('v-add-fs-directory', [infraUser, dirPath]);
    steps.push({ step: `mkdir_${dir || 'root'}`, code: mk.code });
  }

  for (const rel of resolved.files) {
    const content = readFileSync(join(distDir, rel), 'utf8');
    await client.uploadUserFile(user, `${publicBase}/${rel}`, content);
    onFile?.(rel);
    steps.push({ step: `upload_${rel}`, code: 0 });
  }

  await client.hestiaPost('v-delete-fs-directory', [infraUser, `${publicBase}/dist`]);
  const rebuild = await client.hestiaPost('v-rebuild-web-domain', [infraUser, cleanDomain, 'yes']);
  steps.push({ step: 'rebuild', code: rebuild.code });

  return {
    ok: true,
    domain: cleanDomain,
    filesUploaded: resolved.files.length,
    skipped: resolved.skipped,
    steps,
    url: `https://${cleanDomain}/`,
  };
}

export { resolveDistFiles, validateStaticDistFolder };
