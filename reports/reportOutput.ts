/**
 * Output location for every report generator in `reports/`.
 *
 * `agent_docs/generated/` is written only by the post-merge refresh workflow
 * (`.github/workflows/refresh-reports.yml`, through `npm run refresh:reports`),
 * which sets `REPORTS_OUTPUT=tracked`. Every other run (a local
 * `npm run generate:reports`, or the pull-request preview job) writes the same
 * bytes under the gitignored `.reports/` tree, which mirrors repository paths,
 * so a branch can see its effect with `npm run reports:diff` but can never commit
 * report output. Pull requests that carried regenerated reports conflicted with
 * each other on every catalog-wide total; see agent_docs/decisions.md (2026-11-27).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { env } from "node:process";

/** Repository-relative directory that holds the committed reports. */
export const TRACKED_REPORT_DIR = "agent_docs/generated";

/** Gitignored root that receives preview output; it mirrors repository-relative paths. */
export const PREVIEW_ROOT = ".reports";

/**
 * Whether this run rewrites the committed reports. Read at call time, so the refresh script's
 * environment reaches Vitest workers without any configuration.
 *
 * @returns true only when `REPORTS_OUTPUT=tracked`
 */
export function writesTrackedReports(): boolean {
  return env.REPORTS_OUTPUT === "tracked";
}

/**
 * Where a report is written in this run.
 *
 * @param trackedPath - repository-relative path of the committed report, under `agent_docs/generated/`
 * @returns the path itself in tracked mode, otherwise the same path under `.reports/`
 */
export function reportOutputPath(trackedPath: string): string {
  return writesTrackedReports() ? trackedPath : join(PREVIEW_ROOT, trackedPath);
}

/**
 * The line each report prints under its title: who writes the committed file, and how a branch previews it.
 *
 * @param previewCommand - the npm command that previews this report, e.g. `npm run generate:reports -- catalogMismatchScan`
 * @returns one markdown line
 */
export function refreshNotice(previewCommand: string): string {
  return (
    "**Refreshed on `main` after every merge; do not edit or commit this file.** " +
    `Preview a branch's version with \`${previewCommand}\`, then \`npm run reports:diff\`.`
  );
}

/**
 * Writes one report file to this run's output location, creating parent directories as needed.
 *
 * @param trackedPath - repository-relative path of the committed report, under `agent_docs/generated/`
 * @param content - complete file content, written byte-for-byte
 */
export function writeReport(trackedPath: string, content: string): void {
  const path = reportOutputPath(trackedPath);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
}
