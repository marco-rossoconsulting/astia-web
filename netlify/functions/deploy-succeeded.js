/**
 * Runs after every successful Netlify deploy. On production only, it tells
 * IndexNow (Bing, Yandex, Seznam, Naver; Bing also feeds ChatGPT search and
 * Copilot) that the pages in the sitemap have been updated, so they are
 * re-crawled within hours instead of weeks.
 *
 * The key is public by design: IndexNow verifies it at /8002eeb36e922237e75962bc4209652d.txt.
 */
const SITE = 'https://astiaweb.com';
const KEY = '8002eeb36e922237e75962bc4209652d';

export default async (req) => {
  let body = {};
  try {
    body = await req.json();
  } catch {
    /* no payload */
  }
  const deploy = body.payload || body;
  if (deploy.context && deploy.context !== 'production') {
    return new Response('Skipped: not a production deploy', { status: 200 });
  }

  try {
    const xml = await (await fetch(`${SITE}/sitemap-0.xml`)).text();
    const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    if (!urlList.length) return new Response('No URLs in sitemap', { status: 200 });

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: 'astiaweb.com', key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
    });
    console.log(`IndexNow: ${res.status} for ${urlList.length} URLs`);
    return new Response(`IndexNow ${res.status}`, { status: 200 });
  } catch (err) {
    console.error('IndexNow failed:', err);
    return new Response('IndexNow failed', { status: 200 });
  }
};
