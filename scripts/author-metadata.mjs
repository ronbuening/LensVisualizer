/**
 * Patent-party metadata helpers for search and prerender route generation.
 *
 * Converts the inventor (`patentAuthors`) and assignee (`patentAssignees`)
 * names embedded in lightweight lens summaries into stable, collision-safe
 * indexes. The browser consumes the generated entries, so URL construction has
 * one build-time source of truth. `buildAuthorMetadata` and
 * `buildAssigneeMetadata` are thin wrappers over the same parameterized scan.
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
 * Build a collision-safe party index (inventors or assignees) from summaries.
 *
 * Readable slugs remain unsuffixed when unique. Names that transliterate to
 * the same slug, or names without ASCII characters, receive a stable hash so
 * no party page or focus target can shadow another.
 *
 * @param {Array<{key: string, patentNumber?: string, patentAuthors?: string[], patentAssignees?: string[], visible?: boolean}>} lensSummaries
 * @param {"patentAuthors" | "patentAssignees"} field which name list to index
 * @returns {Array<{name: string, slug: string, lensKeys: string[], patentCount: number}>}
 */
function buildPatentPartyMetadata(lensSummaries, field) {
  const records = new Map();

  for (const lens of lensSummaries) {
    if (lens.visible === false) continue;
    for (const name of lens[field] ?? []) {
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

/** Build the inventor (`patentAuthors`) index emitted in build-metadata.json. */
export function buildAuthorMetadata(lensSummaries) {
  return buildPatentPartyMetadata(lensSummaries, "patentAuthors");
}

/** Build the assignee (`patentAssignees`) index emitted in build-metadata.json. */
export function buildAssigneeMetadata(lensSummaries) {
  return buildPatentPartyMetadata(lensSummaries, "patentAssignees");
}
