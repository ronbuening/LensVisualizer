import { allEntries, resolveGlass, type GlassEntry } from "../optics/glassCatalog.js";

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

/* Familiar crowns and flints for one-click picks. N-SF11 is not in the catalog today; the filter below drops any
   name the catalog lacks, so the row never offers a glass that would not resolve. */
const COMMON_GLASS_NAMES = ["N-BK7", "N-SK16", "N-BAF10", "N-LAK9", "N-FK51A", "F2", "N-SF5", "N-SF11", "N-SF6"];
const COMMON_LIMIT = 8;
let common: GlassEntry[] | undefined;

/** Up to eight well-known catalog glasses, crown to flint. */
export function commonGlasses(): GlassEntry[] {
  common ??= COMMON_GLASS_NAMES.flatMap((name) => {
    const entry = allEntries().find((e) => e.name === name);
    return entry ? [entry] : [];
  }).slice(0, COMMON_LIMIT);
  return common;
}

/**
 * The catalog entry for an authored glass name: an exact name (case-insensitive, preferring the vendor whose nd is
 * closest when several share it), else the engine's resolver, which knows legacy aliases such as N-F2 → F2 and
 * descriptive strings such as "583594 — BAL42 class". Undefined when neither finds one.
 */
export function findGlass(name: string | undefined, nd?: number): GlassEntry | undefined {
  const text = name?.trim().toLowerCase();
  if (!text) return undefined;
  const matches = allEntries().filter((e) => e.name.toLowerCase() === text);
  if (!matches.length) return resolveGlass(name) ?? undefined;
  if (nd === undefined || matches.length < 2) return matches[0];
  return [...matches].sort((a, b) => Math.abs(a.nd - nd) - Math.abs(b.nd - nd))[0];
}
