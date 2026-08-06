/**
 * Shared text normalization primitives for stable catalog URLs, anchors, and search.
 *
 * Build-time author metadata and browser-side catalog helpers consume the same
 * transliteration and hash implementations so public identifiers cannot drift.
 */

const TRANSLITERATION: Readonly<Record<string, string>> = {
  ß: "ss",
  ẞ: "SS",
  æ: "ae",
  Æ: "AE",
  ø: "o",
  Ø: "O",
  ł: "l",
  Ł: "L",
  đ: "d",
  Đ: "D",
};

const SPECIAL_CHARACTERS = /[ßẞæÆøØłŁđĐ]/g;

/** Transliterate the catalog's supported Latin characters while preserving case and separators. */
export function transliterateCatalogText(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(SPECIAL_CHARACTERS, (character) => TRANSLITERATION[character]);
}

/** Return a deterministic unsigned FNV-1a hash encoded compactly for public identifiers. */
export function stableHash(value: string): string {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index++) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}
