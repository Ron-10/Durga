const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/about',
  '/admissions',
  '/notices',
  '/gallery',
  '/contact',
  '/staff',
  '/events',
  '/results',
  '/facilities',
  '/academics',
  '/student-portal',
  '/parent-portal',
  '/admin'
];

const baseUrl = 'https://yourschoolwebsite.com'; // Replace with your actual domain

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  const publicPath = path.join(__dirname, '../public');
  fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap(); 