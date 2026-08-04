/** Persistent sort preference for the patent-author directory. */

export type AuthorSort = "alphabetical" | "patents";

export const AUTHOR_SORT_PREFERENCE_KEY = "lensvis:authors:sort";
export const DEFAULT_AUTHOR_SORT: AuthorSort = "alphabetical";

function isAuthorSort(value: unknown): value is AuthorSort {
  return value === "alphabetical" || value === "patents";
}

/** Load the saved author sort, falling back safely during SSR or unavailable storage. */
export function loadAuthorSortPreference(): AuthorSort {
  try {
    const value = localStorage.getItem(AUTHOR_SORT_PREFERENCE_KEY);
    return isAuthorSort(value) ? value : DEFAULT_AUTHOR_SORT;
  } catch {
    return DEFAULT_AUTHOR_SORT;
  }
}

/** Save the author sort when browser storage is available. */
export function saveAuthorSortPreference(sort: AuthorSort): void {
  try {
    localStorage.setItem(AUTHOR_SORT_PREFERENCE_KEY, sort);
  } catch {
    /* private browsing or quota — keep the in-memory selection */
  }
}
