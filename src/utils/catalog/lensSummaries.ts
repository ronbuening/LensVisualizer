/**
 * Lens summaries — lightweight catalog metadata for non-viewer pages.
 *
 * Generated at build time by scripts/generate-build-metadata.mjs into
 * src/generated/lens-summaries.json by evaluating every `*.data.ts` module
 * and keeping only summary fields (name, maker, specs, marketing numbers,
 * mounts, format). Index-style pages (lens index, maker/mount/format pages,
 * updates, homepage cards) consume this instead of the full catalog, so they
 * do not ship the multi-megabyte prescription chunk.
 *
 * The interactive viewer keeps using `lensCatalog.ts` (full prescriptions).
 * A parity test asserts the two stay consistent.
 */

import summariesJson from "../../generated/lens-summaries.json";
import buildMeta from "../../generated/build-metadata.json";
import type { LensMountId, ImageFormatId } from "./lensTaxonomy.js";

export interface LensSummary {
  key: string;
  name: string;
  maker?: string;
  specs?: string[];
  focalLengthMarketing?: number | [number, number];
  apertureMarketing?: number;
  apertureDesign?: number;
  nominalFno?: number | number[];
  patentYear?: number;
  lensMounts?: LensMountId[];
  imageFormat?: ImageFormatId;
  visible: boolean;
}

/* The generated JSON is already sorted by display name. */
const LENS_SUMMARY_LIST = summariesJson as unknown as LensSummary[];

const LENS_SUMMARIES: Record<string, LensSummary> = Object.fromEntries(
  LENS_SUMMARY_LIST.map((summary) => [summary.key, summary]),
);

/* All lenses sorted alphabetically by display name, including hidden fixtures. */
const ALL_SUMMARY_KEYS: string[] = LENS_SUMMARY_LIST.map((summary) => summary.key);

/* Visible lenses sorted alphabetically by display name */
const SUMMARY_KEYS: string[] = LENS_SUMMARY_LIST.filter((summary) => summary.visible).map((summary) => summary.key);

/* Mirrors isDebugLensKey in lensCatalog.ts */
function isDebugSummaryKey(key: string): boolean {
  const summary = LENS_SUMMARIES[key];
  return (
    !summary.visible ||
    key.startsWith("reference-") ||
    summary.maker === "Reference" ||
    summary.name.startsWith("REFERENCE ")
  );
}

/* Debug/reference lenses sorted alphabetically by display name. */
const DEBUG_SUMMARY_KEYS: string[] = ALL_SUMMARY_KEYS.filter(isDebugSummaryKey);

/* ── Recent lenses (derived from build-time git dates) ─────────────── */

interface RecentLensEntry {
  key: string;
  date: string;
}

/** All visible lenses sorted newest-first by publication date. */
const ALL_LENSES_BY_DATE: RecentLensEntry[] = Object.entries(
  buildMeta.lensFreshness as Record<string, { publishedOn: string; lastModified: string }>,
)
  .filter(([key]) => LENS_SUMMARIES[key]?.visible)
  .sort(([, a], [, b]) => b.publishedOn.localeCompare(a.publishedOn))
  .map(([key, freshness]) => ({ key, date: freshness.publishedOn }));

/** Up to 7 most recently added lenses, newest-first. */
const RECENT_LENS_KEYS: RecentLensEntry[] = ALL_LENSES_BY_DATE.slice(0, 7);

export {
  LENS_SUMMARIES,
  ALL_SUMMARY_KEYS,
  SUMMARY_KEYS,
  DEBUG_SUMMARY_KEYS,
  isDebugSummaryKey,
  ALL_LENSES_BY_DATE,
  RECENT_LENS_KEYS,
};
export type { RecentLensEntry };
