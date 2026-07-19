/**
 * Stable DOM anchor ids for lens-library group sections.
 *
 * Shared by the results renderer (which sets the `id` on each group section) and the group-navigation
 * sidebar (which links to `#<id>`), so the two always agree. Ids are derived purely from the group's
 * stable key (maker slug, mount/format id, decade, focal section/sub-bucket label).
 */

/** Lowercase, hyphenate, and trim a free-text group label into an id-safe slug. */
export function slugifyGroupKey(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stableAnchorKey(value: string): string {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index++) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  const readable = slugifyGroupKey(value).slice(0, 48) || "party";
  return `${readable}-${(hash >>> 0).toString(36)}`;
}

export const makerGroupAnchorId = (slug: string): string => `group-maker-${slug}`;
export const patentPartyGroupAnchorId = (role: "inventor" | "assignee", id: string): string =>
  `group-${role}-${stableAnchorKey(id)}`;
export const mountGroupAnchorId = (id: string): string => `group-mount-${id}`;
export const formatGroupAnchorId = (id: string): string => `group-format-${id}`;
export const yearGroupAnchorId = (decade: string): string => `group-year-${slugifyGroupKey(decade)}`;
export const focalSectionAnchorId = (sectionLabel: string): string => `group-focal-${slugifyGroupKey(sectionLabel)}`;
export const focalSubGroupAnchorId = (sectionLabel: string, subLabel: string): string =>
  `group-focal-${slugifyGroupKey(sectionLabel)}-${slugifyGroupKey(subLabel)}`;
