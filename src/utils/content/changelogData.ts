/**
 * changelogData — the site changelog, newest first.
 *
 * Entries are authored one file each under src/content/changelog/ (see agent_docs/changelog.md);
 * scripts/generate-build-metadata.mjs validates and orders them into src/generated/changelog.json, which the
 * /updates page, RSS feed and SEO audit all read.
 */

import changelogJson from "../../generated/changelog.json";
import type { ChangelogEntry } from "./changelogHelpers.js";

/* The compiler admits only CHANGELOG_ENTRY_TYPES, so the JSON's plain-string `type` narrows safely here. */
export const CHANGELOG: readonly ChangelogEntry[] = changelogJson as readonly ChangelogEntry[];
