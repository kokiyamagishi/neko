const CACHE_KEY_URL = 'https://nekolao-leaderboard.internal/top10-v1';

const DEFAULT_ENTRIES = [
  { id: 'seed-1', name: 'ນ້ອງມີນາ (Issarapon)', timeSeconds: 138.4, coat: 'siamese', date: '2026-10-15' },
  { id: 'seed-2', name: 'ທ້າວສົມສັກ (VTE)', timeSeconds: 154.8, coat: 'ginger_tabby', date: '2026-10-15' },
  { id: 'seed-3', name: 'Koki @ Issarapon', timeSeconds: 172.5, coat: 'korat', date: '2026-10-15' },
  { id: 'seed-4', name: 'ແມວຄຳ (Patuxay)', timeSeconds: 195.2, coat: 'calico', date: '2026-10-15' },
  { id: 'seed-5', name: 'ນ້ອງຟ້າ ມ.4', timeSeconds: 228.0, coat: 'siamese', date: '2026-10-15' },
  { id: 'seed-6', name: 'ອານຸສອນ', timeSeconds: 265.6, coat: 'ginger_tabby', date: '2026-10-15' },
  { id: 'seed-7', name: 'Champa Cat', timeSeconds: 314.3, coat: 'calico', date: '2026-10-15' },
  { id: 'seed-8', name: 'ວຽງຈັນ Speed', timeSeconds: 380.0, coat: 'korat', date: '2026-10-15' },
  { id: 'seed-9', name: 'ນ້ອງໃບເຕີຍ', timeSeconds: 465.5, coat: 'siamese', date: '2026-10-15' },
  { id: 'seed-10', name: 'ແມວນ້ອຍອິດສະຫຼະພອນ', timeSeconds: 590.0, coat: 'ginger_tabby', date: '2026-10-15' }
];

function normalizeAndSort(list) {
  const map = new Map();
  for (const item of list) {
    if (!item || typeof item.timeSeconds !== 'number' || item.timeSeconds <= 0) continue;
    const id = String(item.id || `${item.name}-${item.timeSeconds}`);
    map.set(id, {
      id,
      name: String(item.name || 'ແມວລາວ').slice(0, 24),
      timeSeconds: Number(item.timeSeconds.toFixed(2)),
      coat: String(item.coat || 'siamese'),
      date: String(item.date || new Date().toISOString().slice(0, 10))
    });
  }
  return Array.from(map.values())
    .sort((a, b) => a.timeSeconds - b.timeSeconds)
    .slice(0, 10);
}

async function loadEntries() {
  if (!globalThis.__NEKOLAO_LB__) {
    globalThis.__NEKOLAO_LB__ = [...DEFAULT_ENTRIES];
  }
  try {
    const cache = caches.default;
    const cachedRes = await cache.match(CACHE_KEY_URL);
    if (cachedRes) {
      const data = await cachedRes.json();
      if (Array.isArray(data)) {
        globalThis.__NEKOLAO_LB__ = normalizeAndSort([...globalThis.__NEKOLAO_LB__, ...data]);
      }
    }
  } catch {
    // Ignore cache read errors
  }
  return globalThis.__NEKOLAO_LB__;
}

async function saveEntries(entries) {
  const sorted = normalizeAndSort(entries);
  globalThis.__NEKOLAO_LB__ = sorted;
  try {
    const cache = caches.default;
    const res = new Response(JSON.stringify(sorted), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=31536000'
      }
    });
    await cache.put(CACHE_KEY_URL, res);
  } catch {
    // Ignore cache write errors
  }
  return sorted;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/leaderboard') {
      const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      };

      if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
      }

      if (request.method === 'GET') {
        const entries = await loadEntries();
        return new Response(JSON.stringify({ entries }), { headers: corsHeaders });
      }

      if (request.method === 'POST') {
        try {
          const body = await request.json();
          const current = await loadEntries();
          const newEntry = {
            id: String(body.id || `run-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`),
            name: String(body.name || 'ແມວລາວ').trim().slice(0, 24) || 'ແມວລາວ',
            timeSeconds: Number(body.timeSeconds),
            coat: String(body.coat || 'siamese'),
            date: new Date().toISOString().slice(0, 10)
          };
          const updated = await saveEntries([...current, newEntry]);
          const rankIndex = updated.findIndex((e) => e.id === newEntry.id);
          return new Response(
            JSON.stringify({
              entries: updated,
              rank: rankIndex >= 0 ? rankIndex + 1 : null,
              entry: newEntry
            }),
            { headers: corsHeaders }
          );
        } catch {
          return new Response(JSON.stringify({ error: 'Invalid payload' }), {
            status: 400,
            headers: corsHeaders
          });
        }
      }
    }

    return env.ASSETS.fetch(request);
  }
};
