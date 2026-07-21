/**
 * Author metadata helpers for search and prerender route generation.
 *
 * Converts the inventor names embedded in lightweight lens summaries into a
 * stable, collision-safe author index. The browser consumes the generated
 * entries, so URL construction has one build-time source of truth.
 */

/** Return a deterministic unsigned FNV-1a hash encoded compactly for URLs. */
function stableHash(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index++) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

/** Convert a display name to a readable ASCII URL segment when possible. */
function authorSlugBase(name) {
  return (
    name
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replaceAll("ß", "ss")
      .replaceAll("æ", "ae")
      .replaceAll("ø", "o")
      .replaceAll("ł", "l")
      .replaceAll("đ", "d")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "author"
  );
}

/**
 * Build the author index emitted in build-metadata.json.
 *
 * Readable slugs remain unsuffixed when unique. Names that transliterate to
 * the same slug, or names without ASCII characters, receive a stable hash so
 * no author page can shadow another.
 *
 * @param {Array<{key: string, patentNumber?: string, patentAuthors?: string[], visible?: boolean}>} lensSummaries
 * @returns {Array<{name: string, slug: string, lensKeys: string[], patentCount: number}>}
 */
export function buildAuthorMetadata(lensSummaries) {
  const records = new Map();

  for (const lens of lensSummaries) {
    if (lens.visible === false) continue;
    for (const name of lens.patentAuthors ?? []) {
      const existing = records.get(name) ?? { lensKeys: new Set(), patentNumbers: new Set() };
      existing.lensKeys.add(lens.key);
      if (lens.patentNumber) existing.patentNumbers.add(lens.patentNumber);
      records.set(name, existing);
    }
  }

  const names = [...records.keys()].sort((a, b) => a.localeCompare(b));
  const baseCounts = new Map();
  for (const name of names) {
    const base = authorSlugBase(name);
    baseCounts.set(base, (baseCounts.get(base) ?? 0) + 1);
  }

  return names.map((name) => {
    const record = records.get(name);
    const base = authorSlugBase(name);
    const needsSuffix = base === "author" || (baseCounts.get(base) ?? 0) > 1;
    return {
      name,
      slug: needsSuffix ? `${base}-${stableHash(name)}` : base,
      lensKeys: [...record.lensKeys].sort(),
      patentCount: record.patentNumbers.size,
    };
  });
}
