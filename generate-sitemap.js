// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { categories } from './src/data/sitemapData.js';

// Handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Use your blog subdomain
const SITE_URL = 'https://blog.setustore.com';

// Create a writable stream for the sitemap file
const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
const writeStream = createWriteStream(sitemapPath);

// Initialize sitemap stream with your hostname
const sitemap = new SitemapStream({ hostname: SITE_URL });

// Pipe to file
sitemap.pipe(writeStream);

// Add category and blog URLs
categories.forEach((category) => {
  sitemap.write({
    url: `/category/${category.slug}`,
    changefreq: 'weekly',
    priority: 0.7,
  });

  category.blogs.forEach((blog) => {
    sitemap.write({
      url: `/blog/${blog.slug}`,
      changefreq: 'daily',
      priority: 0.8,
    });
  });
});

// Finalize the sitemap
sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log('✅ Sitemap generated successfully at public/sitemap.xml'))
  .catch((err) => console.error('❌ Error generating sitemap:', err));
