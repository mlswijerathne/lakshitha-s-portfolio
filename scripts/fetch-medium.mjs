import https from 'https';
import fs from 'fs';

const MEDIUM_USERNAME = 'lakshithaa';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function parseRSS(xml) {
  const items = [];
  for (const match of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
    const x = match[1];
    const title =
      x.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ||
      x.match(/<title>(.*?)<\/title>/)?.[1] || '';
    const pubDate = x.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || '';
    const link =
      x.match(/<link>(https?:\/\/[^\s<]+)<\/link>/)?.[1] ||
      x.match(/<guid[^>]*>(https?:\/\/[^\s<]+)<\/guid>/)?.[1] || '';
    const content =
      x.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/)?.[1] || '';
    const description =
      content.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 160) + '…';
    const thumbnail = content.match(/<img[^>]+src="([^"]+)"/)?.[1] || '';
    const categories = [...x.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g)]
      .map((m) => m[1])
      .slice(0, 3);
    if (title) items.push({ title, pubDate, link, thumbnail, description, categories });
    if (items.length >= 4) break;
  }
  return items;
}

const xml = await fetchUrl(`https://medium.com/feed/@${MEDIUM_USERNAME}`);
const articles = parseRSS(xml);
fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/medium-articles.json', JSON.stringify(articles, null, 2));
console.log(`Fetched ${articles.length} Medium articles`);
