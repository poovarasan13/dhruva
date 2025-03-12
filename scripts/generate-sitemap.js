import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://kcedhruva.in';

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/onstage', changefreq: 'daily', priority: 0.8 },
  { url: '/offstage', changefreq: 'daily', priority: 0.5 },
  { url: '/sports', changefreq: 'daily', priority: 0.5 },
  { url: '/ad', changefreq: 'daily', priority: 0.5 },
  { url: '/cse', changefreq: 'daily', priority: 0.5 },
  { url: '/cd', changefreq: 'daily', priority: 0.5 },
  { url: '/civil', changefreq: 'daily', priority: 0.5 },
  { url: '/ct', changefreq: 'daily', priority: 0.5 },
  { url: '/cyber', changefreq: 'daily', priority: 0.5 },
  { url: '/ece', changefreq: 'daily', priority: 0.5 },
  { url: '/eee', changefreq: 'daily', priority: 0.5 },
  { url: '/ete', changefreq: 'daily', priority: 0.5 },
  { url: '/it', changefreq: 'daily', priority: 0.5 },
  { url: '/mba', changefreq: 'daily', priority: 0.5 },
  { url: '/mca', changefreq: 'daily', priority: 0.5 },
  { url: '/mech', changefreq: 'daily', priority: 0.5 },
  { url: '/pass', changefreq: 'weekly', priority: 0.7 },
  { url: '/registration', changefreq: 'daily', priority: 1.0 },
];

const sitemapStream = new SitemapStream({ hostname: BASE_URL });

pages.forEach((page) => sitemapStream.write(page));
sitemapStream.end();

streamToPromise(sitemapStream).then((data) => {
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, data.toString());

  console.log('✅ Sitemap successfully generated! 🚀');
});
