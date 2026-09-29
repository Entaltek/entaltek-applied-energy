import { readFile, writeFile, mkdir } from 'node:fs/promises';
const routes = JSON.parse(await readFile(new URL('../src/lib/routeMetadata.json', import.meta.url), 'utf8'));

const original = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
for (const [route, meta] of Object.entries(routes)) {
  let html = original.replace(/<html lang="[^"]+"/, `<html lang="${meta.lang}"`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(meta.title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${escape(meta.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="https://entaltek.com${route}" />`);
  for (const [property, content] of Object.entries({ 'og:title': meta.title, 'og:description': meta.description, 'og:url': `https://entaltek.com${route}`, 'og:locale': meta.locale, 'og:image:alt': meta.title })) {
    html = html.replace(new RegExp(`<meta\\s+property="${property}"\\s+content="[^"]*"\\s*\\/>`), `<meta property="${property}" content="${escape(content)}" />`);
  }
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Entaltek', url: `https://entaltek.com${route}`, inLanguage: meta.lang, description: meta.description })}</script>`);
  const es = meta.lang === 'en' ? meta.alternate : route;
  const en = meta.lang === 'en' ? route : meta.alternate;
  const links = [['es-MX', es], ['en', en], ['x-default', es]].map(([lang, url]) => `<link rel="alternate" hreflang="${lang}" href="https://entaltek.com${url}" />`).join('\n    ');
  html = html.replace('</head>', `    ${links}\n  </head>`);
  const directory = new URL(`../dist${route === '/' ? '/' : route.replace(/\/$/, '') + '/'}`, import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), html);
}
console.log('Generated Spanish and English landing and privacy HTML metadata.');
