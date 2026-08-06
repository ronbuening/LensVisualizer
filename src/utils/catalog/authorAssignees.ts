/** Derived assignee/company strata for the patent-author directory. */

import { ASSIGNEES, getAssigneeByName, type AssigneeMetadata } from "./assigneeCatalog.js";
import { AUTHORS, patentsForAuthor, type AuthorMetadata } from "./authorCatalog.js";
import { catalogCollator } from "./collation.js";

export const ALL_AUTHOR_ASSIGNEES = "all";
export const UNASSIGNED_AUTHORS = "unassigned";

export interface AuthorDirectoryEntry {
  author: AuthorMetadata;
  assignees: AssigneeMetadata[];
}

export interface AuthorAssigneeStratum extends AssigneeMetadata {
  authorCount: number;
}

export const AUTHOR_DIRECTORY_ENTRIES: AuthorDirectoryEntry[] = AUTHORS.map((author) => {
  const assigneeNames = new Set(patentsForAuthor(author.name).flatMap((patent) => patent.assignees));
  const assignees = [...assigneeNames]
    .map((name) => getAssigneeByName(name))
    .filter((assignee): assignee is AssigneeMetadata => assignee !== undefined)
    .sort((left, right) => catalogCollator.compare(left.name, right.name));

  return { author, assignees };
});

const authorCountByAssignee = new Map<string, number>();
for (const entry of AUTHOR_DIRECTORY_ENTRIES) {
  for (const assignee of entry.assignees) {
    authorCountByAssignee.set(assignee.slug, (authorCountByAssignee.get(assignee.slug) ?? 0) + 1);
  }
}

export const AUTHOR_ASSIGNEE_STRATA: AuthorAssigneeStratum[] = ASSIGNEES.map((assignee) => ({
  ...assignee,
  authorCount: authorCountByAssignee.get(assignee.slug) ?? 0,
}))
  .filter((assignee) => assignee.authorCount > 0)
  .sort((left, right) => catalogCollator.compare(left.name, right.name));

export const UNASSIGNED_AUTHOR_COUNT = AUTHOR_DIRECTORY_ENTRIES.filter((entry) => entry.assignees.length === 0).length;

/** Filter directory entries by a stable assignee slug or the unassigned bucket. */
export function filterAuthorsByAssignee(
  entries: AuthorDirectoryEntry[],
  assigneeFilter: string,
): AuthorDirectoryEntry[] {
  if (assigneeFilter === ALL_AUTHOR_ASSIGNEES) return entries;
  if (assigneeFilter === UNASSIGNED_AUTHORS) return entries.filter((entry) => entry.assignees.length === 0);
  return entries.filter((entry) => entry.assignees.some((assignee) => assignee.slug === assigneeFilter));
}
