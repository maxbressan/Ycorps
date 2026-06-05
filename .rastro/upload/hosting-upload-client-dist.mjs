#!/usr/bin/env node
/**
 * Sobe dist/ completo do cliente para public_html no Hestia.
 *
 *   node scripts/hosting-upload-client-dist.mjs --user=rh_002 --domain=ycorps.com.br --from=/path/dist
 */
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHestiaClient, loadDotEnvSync } from './lib/hestiaClient.mjs';
import { normalizeHostingDomain } from './lib/hostingDomainPolicy.mjs';
import { uploadClientDistToHestia } from './lib/hostingClientDistUpload.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)=(.*)$/);
    return m ? [m[1], m[2]] : [a.replace(/^--/, ''), true];
  })
);

const user = String(args.user || '').trim();
const domain = normalizeHostingDomain(args.domain || '');
const from = args.from ? resolve(String(args.from)) : '';

if (!user || !domain || !from) {
  console.error('Uso: --user=rh_xxx --domain=site.com.br --from=/caminho/dist');
  process.exit(1);
}

loadDotEnvSync(root);

const client = createHestiaClient({
  url: process.env.HESTIA_URL || '',
  accessKey: process.env.HESTIA_ACCESS_KEY || '',
  secretKey: process.env.HESTIA_SECRET_KEY || '',
});

const result = await uploadClientDistToHestia(client, { user, domain, distDir: from, onFile: (rel) => console.log('ok', rel) });

if (!result.ok) {
  console.error(result.error || 'Upload falhou');
  process.exit(1);
}

if (result.skipped?.length) {
  console.warn('Arquivos ignorados (>4MB ou binário):', result.skipped.map((s) => s.rel).join(', '));
}

console.log(`\n${result.filesUploaded} arquivo(s) → ${result.url}`);
console.log('Recarregue com Cmd+Shift+R');
