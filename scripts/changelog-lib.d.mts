import type { ChangelogEntry } from "../src/utils/content/changelogHelpers.js";

export const CHANGELOG_SUBJECT_MAX_LENGTH: number;

export function collectChangelog(options: { changelogDir: string }): ChangelogEntry[];
