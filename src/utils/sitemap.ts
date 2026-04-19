import { LOCATIONS } from '../data/locations';

export function generateSitemap(baseUrl: string): string {
  const urls = [
    { loc: `${baseUrl}/`, lastmod: new Date().toISOString().split('T')[0], priority: '1.0' },
    { loc: `${baseUrl}/showroom`, lastmod: new Date().toISOString().split('T')[0], priority: '0.9' },
  ];

  // Add all location pages
  LOCATIONS.forEach(location => {
    urls.push({
      loc: `${baseUrl}/pool-remodeling/${location.slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      priority: '0.8'
    });
  });

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const entries = urls
    .map(url => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <priority>${url.priority}</priority>
  </url>`)
    .join('\n');

  return `${xmlHeader}\n${urlsetOpen}\n${entries}\n${urlsetClose}`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
