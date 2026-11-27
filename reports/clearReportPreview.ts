/**
 * Vitest global setup for the report generators (vitest.reports.config.js).
 *
 * A preview run starts from an empty `.reports/` tree, so `npm run reports:diff` compares only what this run
 * regenerated and never a stale file from an earlier run. The post-merge refresh writes the committed reports
 * (`REPORTS_OUTPUT=tracked`) and leaves the preview alone.
 */
import { rmSync } from "node:fs";
import { PREVIEW_ROOT, writesTrackedReports } from "./reportOutput.js";

export default function clearReportPreview(): void {
  if (!writesTrackedReports()) rmSync(PREVIEW_ROOT, { recursive: true, force: true });
}
