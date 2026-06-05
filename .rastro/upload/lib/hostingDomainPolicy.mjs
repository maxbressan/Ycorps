/** Política: pacote Rastro Digital só em domínios próprios; clientes recebem só headers. */

export const RASTRO_CONTENT_DOMAINS = new Set(['rastro.digital', 'www.rastro.digital']);

const RASTRO_SITE_MARKERS = [
  'Rastro Digital',
  'main-CKZY0p_6.js',
  'RastroDigital_Favicone_-removebg-preview.png',
  '/app/index.html',
];

export function normalizeHostingDomain(domain) {
  return String(domain || '')
    .replace(/^https?:\/\//, '')
    .split('/')[0]
    .toLowerCase();
}

export function isRastroContentDomain(domain) {
  return RASTRO_CONTENT_DOMAINS.has(normalizeHostingDomain(domain));
}

/** Bloqueia deploy do pacote hosting-upload em domínio de cliente. */
export function assertClientContentDeployAllowed(domain, { force = false } = {}) {
  if (isRastroContentDomain(domain)) return;
  if (force) return;
  throw new Error(
    `Pacote Rastro Digital (hosting-upload) não pode ir para ${normalizeHostingDomain(domain)}. ` +
      'Use o backup/dist do cliente. Em rastro.digital use --domain=rastro.digital ou --with-content apenas com --force explícito.',
  );
}

export function htmlLooksLikeRastroSite(html) {
  const lower = String(html || '').toLowerCase();
  return RASTRO_SITE_MARKERS.some((m) => lower.includes(m.toLowerCase()));
}

export function parseIndexAssetRefs(html) {
  const js = html.match(/src="\/assets\/([^"]+\.js)"/i)?.[1] ?? null;
  const css = html.match(/href="\/assets\/([^"]+\.css)"/i)?.[1] ?? null;
  return { js, css };
}
