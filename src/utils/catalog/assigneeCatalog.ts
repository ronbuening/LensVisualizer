/**
 * Assignee catalog — runtime index for the patent relationship map.
 *
 * Mirrors the index portion of authorCatalog.ts, but for the assignee names
 * (`patentAssignees`) emitted in build-metadata.json. Assignees have no
 * dedicated pages; this index only supplies stable slugs and lookups for the
 * relationship map's focus targets and party nodes.
 */

import buildMeta from "../../generated/build-metadata.json";

export interface AssigneeMetadata {
  name: string;
  slug: string;
  lensKeys: string[];
  patentCount: number;
}

export const ASSIGNEES = buildMeta.assignees as AssigneeMetadata[];

const ASSIGNEES_BY_SLUG = new Map(ASSIGNEES.map((assignee) => [assignee.slug, assignee]));
const ASSIGNEES_BY_NAME = new Map(ASSIGNEES.map((assignee) => [assignee.name, assignee]));

/** Find build-generated assignee metadata by its stable URL slug. */
export function getAssigneeBySlug(slug: string): AssigneeMetadata | undefined {
  return ASSIGNEES_BY_SLUG.get(slug);
}

/** Find build-generated assignee metadata by its patent display name. */
export function getAssigneeByName(name: string): AssigneeMetadata | undefined {
  return ASSIGNEES_BY_NAME.get(name);
}
