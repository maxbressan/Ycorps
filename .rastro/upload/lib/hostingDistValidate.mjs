import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { parseIndexAssetRefs } from './hostingDomainPolicy.mjs';

/**
 * Valida pasta dist/ antes do upload (evita tela branca: index sem .js/.css).
 */
export function validateStaticDistFolder(distDir) {
  const errors = [];
  const warnings = [];

  if (!existsSync(distDir)) {
    return { ok: false, errors: [`Pasta não encontrada: ${distDir}`], warnings };
  }

  const indexPath = join(distDir, 'index.html');
  if (!existsSync(indexPath)) {
    errors.push('Falta index.html na raiz do dist.');
    return { ok: false, errors, warnings };
  }

  const indexHtml = readFileSync(indexPath, 'utf8');
  const { js, css } = parseIndexAssetRefs(indexHtml);

  if (!js) errors.push('index.html não referencia /assets/*.js — build Vite incompleto?');
  if (!css) errors.push('index.html não referencia /assets/*.css — build Vite incompleto?');

  if (js && !existsSync(join(distDir, 'assets', js))) {
    errors.push(`Falta assets/${js} (citado no index.html). Rode npm run build no projeto do cliente.`);
  }
  if (css && !existsSync(join(distDir, 'assets', css))) {
    errors.push(`Falta assets/${css} (citado no index.html). Rode npm run build no projeto do cliente.`);
  }

  const nestedDist = join(distDir, 'dist');
  if (existsSync(nestedDist) && statSync(nestedDist).isDirectory()) {
    warnings.push('Existe dist/dist/ — envie o CONTEÚDO de dist/, não a pasta dist inteira dentro de public_html.');
  }

  const assetsDir = join(distDir, 'assets');
  if (existsSync(assetsDir)) {
    const files = readdirSync(assetsDir);
    const hasJs = files.some((f) => f.endsWith('.js'));
    const hasCss = files.some((f) => f.endsWith('.css'));
    if (!hasJs) errors.push('assets/ não contém nenhum .js (upload incompleto).');
    if (!hasCss) errors.push('assets/ não contém nenhum .css (upload incompleto).');
  } else if (js || css) {
    errors.push('Pasta assets/ ausente no dist.');
  }

  return { ok: errors.length === 0, errors, warnings, js, css, indexHtml };
}

export function listDistFiles(distDir) {
  const out = [];
  function walk(dir, base) {
    for (const name of readdirSync(dir)) {
      if (name === '.DS_Store') continue;
      const full = join(dir, name);
      if (statSync(full).isDirectory()) walk(full, base);
      else out.push(relative(base, full).split(sep).join('/'));
    }
  }
  walk(distDir, distDir);
  return out.sort();
}
