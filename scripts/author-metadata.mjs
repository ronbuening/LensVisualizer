/**
 * Patent-party metadata helpers for search and prerender route generation.
 *
 * Converts the inventor (`patentAuthors`) and assignee (`patentAssignees`)
 * names embedded in lightweight lens summaries into stable, collision-safe
 * indexes. The browser consumes the generated entries, so URL construction has
 * one build-time source of truth. Authors use the shared patent-party shape;
 * assignees additionally receive curated, dated corporate history.
 */

import { corporateRelationshipsForAssignee } from "../src/utils/catalog/assigneeCorporateHistory.ts";
import { stableHash, transliterateCatalogText } from "../src/utils/catalog/slugText.ts";

/** Convert a display name to a readable ASCII URL segment when possible. */
function authorSlugBase(name) {
  return (
    transliterateCatalogText(name)
      .toLowerCase()
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
      /* Keep the count aligned with patentsForParty(): an attributed lens with
       * no explicit publication number still becomes its own fallback patent
       * record instead of silently contributing zero to the party's count. */
      const patentIdentity = lens.patentNumber?.trim() || `lens:${lens.key}`;
      existing.patentNumbers.add(patentIdentity);
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
  return buildPatentPartyMetadata(lensSummaries, "patentAssignees").map((assignee) => ({
    ...assignee,
    ...corporateRelationshipsForAssignee(assignee.name),
  }));
}
