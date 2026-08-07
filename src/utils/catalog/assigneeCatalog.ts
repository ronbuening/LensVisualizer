/**
 * Assignee catalog — runtime index for the patent relationship map.
 *
 * Mirrors the index portion of authorCatalog.ts, but for the assignee names
 * (`patentAssignees`) emitted in build-metadata.json. It also exposes curated,
 * dated corporate history for future whole-catalog analysis. Assignees have no
 * dedicated pages, and the existing focus relationship map intentionally reads
 * only their stable names/slugs and patent attributions.
 */

import buildMeta from "../../generated/build-metadata.json";
import type { AssigneeMetadata } from "../../types/catalog.js";

export type { AssigneeMetadata } from "../../types/catalog.js";

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
