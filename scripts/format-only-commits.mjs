/**
 * Commits that change only how lens data is written, listed by id where their subject cannot say so: a conversion
 * batch merged under another title, a revert, a rollback with `--to-version 1`, a fix-up. A page's modified date skips
 * them (`isFormatOnlyCommit` in build-metadata-lib.mjs), as it skips a commit whose subject begins with a conversion
 * step's ID.
 *
 * Each entry is a full 40-character commit id, with a comment naming what the commit was.
 */
export const FORMAT_ONLY_COMMITS = new Set([]);
