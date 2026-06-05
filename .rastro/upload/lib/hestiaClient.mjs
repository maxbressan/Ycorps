import https from 'node:https';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function loadDotEnvSync(rootDir) {
  try {
    const raw = readFileSync(resolve(rootDir, '.env'), 'utf8');
    for (const line of raw.split('\n')) {
      const t = line.trim();
      if (!t || t.startsWith('#')) continue;
      const i = t.indexOf('=');
      if (i < 0) continue;
      const k = t.slice(0, i).trim();
      const v = t.slice(i + 1).trim().replace(/^["']|["']$/g, '');
      if (!process.env[k]) process.env[k] = v;
    }
  } catch {
    /* optional */
  }
}

export function hestiaUserPath(user, relativePath) {
  return `/home/${user}/${relativePath.replace(/^\//, '')}`;
}

export function createHestiaClient({ url, accessKey, secretKey }) {
  const hestiaUrl = (url || '').replace(/\/$/, '');
  if (!hestiaUrl || !accessKey || !secretKey) {
    throw new Error('Defina HESTIA_URL, HESTIA_ACCESS_KEY e HESTIA_SECRET_KEY');
  }

  function hestiaPost(cmd, cmdArgs) {
    const params = new URLSearchParams();
    params.set('hash', `${accessKey}:${secretKey}`);
    params.set('cmd', cmd);
    params.set('returncode', 'yes');
    cmdArgs.forEach((v, i) => params.set(`arg${i + 1}`, v));
    const body = params.toString();
    const apiUrl = new URL(`${hestiaUrl}/api/`);

    return new Promise((resolvePromise, reject) => {
      const req = https.request(
        {
          hostname: apiUrl.hostname,
          port: apiUrl.port || 8083,
          path: apiUrl.pathname,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(body),
          },
          rejectUnauthorized: false,
        },
        (res) => {
          let data = '';
          res.on('data', (c) => (data += c));
          res.on('end', () => {
            const code = /^\d+$/.test(data.trim()) ? parseInt(data.trim(), 10) : res.statusCode === 200 ? 0 : 1;
            resolvePromise({ code, output: data.trim() });
          });
        }
      );
      req.on('error', reject);
      req.write(body);
      req.end();
    });
  }

  const IDEMPOTENT = new Set([0, 4]);

  async function uploadUserFile(user, destPath, content) {
    const payload =
      typeof content === 'string'
        ? content
        : Buffer.isBuffer(content)
          ? content.toString('utf8')
          : String(content);
    const tmp = `rastro-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const make = await hestiaPost('v-make-tmp-file', [payload, tmp]);
    if (make.code !== 0) {
      throw new Error(`v-make-tmp-file (${make.code}): ${make.output || 'falhou'}`);
    }
    const src = `/tmp/${tmp}`;
    const copy = await hestiaPost('v-copy-fs-file', [user, src, destPath]);
    if (!IDEMPOTENT.has(copy.code) && copy.code !== 0) {
      throw new Error(`v-copy-fs-file (${copy.code}): ${copy.output || 'falhou'} → ${destPath}`);
    }
    try {
      await hestiaPost('v-delete-fs-file', [user, src]);
    } catch {
      /* tmp cleanup optional */
    }
    return { ok: true, path: destPath };
  }

  async function openUserFile(user, filePath) {
    const params = new URLSearchParams();
    params.set('hash', `${accessKey}:${secretKey}`);
    params.set('cmd', 'v-open-fs-file');
    params.set('arg1', user);
    params.set('arg2', filePath);
    const apiUrl = new URL(`${hestiaUrl}/api/`);
    const body = params.toString();

    return new Promise((resolvePromise, reject) => {
      const req = https.request(
        {
          hostname: apiUrl.hostname,
          port: apiUrl.port || 8083,
          path: apiUrl.pathname,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(body),
          },
          rejectUnauthorized: false,
        },
        (res) => {
          let data = '';
          res.on('data', (c) => (data += c));
          res.on('end', () => {
            if (res.statusCode !== 200 || data.trim() === '0') {
              reject(new Error(`v-open-fs-file falhou (${res.statusCode})`));
              return;
            }
            resolvePromise(data);
          });
        }
      );
      req.on('error', reject);
      req.write(body);
      req.end();
    });
  }

  return { hestiaPost, uploadUserFile, openUserFile, IDEMPOTENT };
}
