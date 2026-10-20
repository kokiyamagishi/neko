export interface LeaderboardEntry {
  id: string;
  name: string;
  timeSeconds: number;
  coat: string;
  date: string;
}

const STORAGE_KEY = 'nekolao_leaderboard_v3';
const PLAYER_NAME_KEY = 'nekolao_player_name_v1';

const DEFAULT_SEED_ENTRIES: LeaderboardEntry[] = [
  { id: 'seed-1', name: 'Tadashi', timeSeconds: 58.0, coat: 'siamese', date: '2026-10-20' },
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

export class LeaderboardService {
  private entries: LeaderboardEntry[] = [];

  constructor() {
    this.entries = this.loadLocalEntries();
  }

  private normalizeAndSort(list: LeaderboardEntry[]): LeaderboardEntry[] {
    const byId = new Map<string, LeaderboardEntry>();
    for (const item of list) {
      if (!item || typeof item.timeSeconds !== 'number' || item.timeSeconds <= 0) continue;
      const id = String(item.id || `${item.name}-${item.timeSeconds}`);
      const name =
        id === 'seed-1' ? 'Tadashi' : String(item.name || 'ແມວລາວ').trim().slice(0, 24) || 'ແມວລາວ';
      const timeSeconds = id === 'seed-1' ? 58.0 : Number(item.timeSeconds.toFixed(2));
      byId.set(id, {
        id,
        name,
        timeSeconds,
        coat: String(item.coat || 'siamese'),
        date: String(item.date || new Date().toISOString().slice(0, 10))
      });
    }
    return Array.from(byId.values())
      .sort((a, b) => a.timeSeconds - b.timeSeconds)
      .slice(0, 10);
  }

  private loadLocalEntries(): LeaderboardEntry[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return this.normalizeAndSort([...DEFAULT_SEED_ENTRIES, ...parsed]);
        }
      }
    } catch {
      // Ignore storage errors
    }
    return this.normalizeAndSort(DEFAULT_SEED_ENTRIES);
  }

  private saveLocalEntries(list: LeaderboardEntry[]): void {
    this.entries = this.normalizeAndSort(list);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.entries));
    } catch {
      // Ignore storage errors
    }
  }

  public getEntries(): LeaderboardEntry[] {
    return [...this.entries];
  }

  public getSavedPlayerName(): string {
    try {
      return localStorage.getItem(PLAYER_NAME_KEY) || '';
    } catch {
      return '';
    }
  }

  public savePlayerName(name: string): void {
    try {
      localStorage.setItem(PLAYER_NAME_KEY, name.trim().slice(0, 24));
    } catch {
      // Ignore storage errors
    }
  }

  /**
   * Fetches the latest Top 10 from the Cloudflare Pages Edge API (/api/leaderboard)
   * and merges it with any local entries.
   */
  public async fetchTop10(): Promise<LeaderboardEntry[]> {
    try {
      const res = await fetch('/api/leaderboard', { method: 'GET' });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.entries)) {
          this.saveLocalEntries([...this.entries, ...data.entries]);
        }
      }
    } catch {
      // Fallback to local entries when offline or on dev server
    }
    return this.getEntries();
  }

  /**
   * Computes what rank (1..10) a given clear time in seconds would achieve
   * in the current Top 10 leaderboard. Returns null if slower than #10.
   */
  public computeProvisionalRank(timeSeconds: number): number | null {
    if (typeof timeSeconds !== 'number' || timeSeconds <= 0) return null;
    const rounded = Number(timeSeconds.toFixed(2));
    const current = this.getEntries();
    let rank = 1;
    for (const entry of current) {
      if (rounded > entry.timeSeconds) {
        rank += 1;
      }
    }
    return rank <= 10 ? rank : null;
  }

  /**
   * Registers the player's clear time and name into the Top 10 ranking
   * (both local and Cloudflare Edge API).
   */
  public async submitScore(
    rawName: string,
    timeSeconds: number,
    coat: string
  ): Promise<{ entries: LeaderboardEntry[]; rank: number | null; entry: LeaderboardEntry }> {
    const cleanName = rawName.trim().slice(0, 24) || 'ແມວລາວ (Issarapon)';
    this.savePlayerName(cleanName);

    const newEntry: LeaderboardEntry = {
      id: `run-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      name: cleanName,
      timeSeconds: Number(timeSeconds.toFixed(2)),
      coat: coat || 'siamese',
      date: new Date().toISOString().slice(0, 10)
    };

    // Immediately update local Top 10
    this.saveLocalEntries([...this.entries, newEntry]);

    // Sync with Cloudflare Edge API
    try {
      const res = await fetch('/api/leaderboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.entries)) {
          this.saveLocalEntries([...this.entries, ...data.entries]);
        }
      }
    } catch {
      // Keep local update if offline
    }

    const finalEntries = this.getEntries();
    const idx = finalEntries.findIndex((e) => e.id === newEntry.id);
    return {
      entries: finalEntries,
      rank: idx >= 0 ? idx + 1 : null,
      entry: newEntry
    };
  }
}
