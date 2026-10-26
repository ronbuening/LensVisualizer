import { allEntries, type GlassEntry } from "../optics/glassCatalog.js";

/** Exact names first, then names starting with the query, then other matches. */
function rank(name: string, text: string): number {
  const lower = name.toLowerCase();
  return lower === text ? 0 : lower.startsWith(text) ? 1 : 2;
}

export function searchGlass(query: string, limit = 8): GlassEntry[] {
  const text = query.trim().toLowerCase();
  if (!text) return [];
  return allEntries()
    .filter((e) => `${e.name} ${e.vendor}`.toLowerCase().includes(text))
    .sort((a, b) => rank(a.name, text) - rank(b.name, text) || a.name.localeCompare(b.name))
    .slice(0, limit);
}

export function nearestGlass(nd: number, vd: number, limit = 8): GlassEntry[] {
  if (!Number.isFinite(nd) || !Number.isFinite(vd)) return [];
  const distance = (e: GlassEntry) => Math.hypot(e.nd - nd, (e.vd - vd) / 100);
  return [...allEntries()].sort((a, b) => distance(a) - distance(b) || a.name.localeCompare(b.name)).slice(0, limit);
}
