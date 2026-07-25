// Build-time YouTube feed fetcher — the site auto-updates on each build.
import site from '../data/site.json';

export async function getLatestVideos(limit = 6) {
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${site.sosyal.youtube_kanal_id}`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => {
      const e = m[1];
      const id = e.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1];
      const title = e.match(/<title>([\s\S]*?)<\/title>/)?.[1]
        ?.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
      const published = e.match(/<published>(.*?)<\/published>/)?.[1];
      return { id, title, published };
    }).filter((v) => v.id);
    return entries.slice(0, limit);
  } catch (err) {
    console.warn('[youtube] feed fetch failed:', err.message);
    return [];
  }
}
