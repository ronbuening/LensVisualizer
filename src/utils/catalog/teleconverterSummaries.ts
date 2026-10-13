/**
 * Teleconverter summaries — lightweight catalog metadata for the teleconverter pages and search.
 *
 * Generated at build time by scripts/generate-build-metadata.mjs into
 * src/generated/teleconverter-summaries.json. Each summary carries `compatibleLensKeys`, the visible lenses the
 * converter can mount on, resolved at build time with the same fit predicate the viewer runs — fit depends on each
 * host's back focus and rear plates, which lens summaries do not carry.
 *
 * The interactive viewer keeps using `teleconverterCatalog.ts` (full prescriptions). A parity test asserts the
 * generated host lists match the runtime predicate.
 *
 * Hidden converters (`visible: false`) are test models. They keep a summary so their page still resolves from a
 * hand-typed URL, but every list a visitor can reach holds published converters only.
 */

import summariesJson from "../../generated/teleconverter-summaries.json";
import { canonicalPagePath } from "../seo/siteUrls.js";
import type { LensMountId } from "./lensTaxonomy.js";

export interface TeleconverterSummary {
  key: string;
  name: string;
  /** null explicitly records an unconfirmed manufacturer. */
  maker?: string | null;
  /** false for a hidden test model; always written by the build script. */
  visible: boolean;
  subtitle?: string;
  specs?: string[];
  magnification: number;
  lensMounts: LensMountId[];
  universal?: boolean;
  minHostFno?: number;
  patentNumber?: string;
  patentAuthors?: string[];
  patentAssignees?: string[];
  patentYear?: number;
  elementCount?: number;
  groupCount?: number;
  /** Visible lens keys the converter can mount on, sorted by lens display name. */
  compatibleLensKeys: string[];
}

/* Every converter including hidden test models. The generated JSON is already ordered weakest converter first,
 * then by display name. */
const ALL_TELECONVERTER_SUMMARY_LIST = summariesJson as unknown as TeleconverterSummary[];

/* Keyed by converter key, hidden test models included, so a hand-typed page URL resolves. */
const TELECONVERTER_SUMMARIES: Record<string, TeleconverterSummary> = Object.fromEntries(
  ALL_TELECONVERTER_SUMMARY_LIST.map((summary) => [summary.key, summary]),
);

/* Published converters: the index, search and lens-page lists. */
const TELECONVERTER_SUMMARY_LIST = ALL_TELECONVERTER_SUMMARY_LIST.filter((summary) => summary.visible);

const TELECONVERTER_SUMMARY_KEYS: string[] = TELECONVERTER_SUMMARY_LIST.map((summary) => summary.key);

/**
 * Published converters that can be mounted on a visible catalog lens.
 *
 * @param lensKey - catalog lens key
 * @returns matching summaries, weakest converter first
 */
function teleconverterSummariesForLens(lensKey: string): TeleconverterSummary[] {
  return TELECONVERTER_SUMMARY_LIST.filter((summary) => summary.compatibleLensKeys.includes(lensKey));
}

/**
 * Viewer URL for a lens with a converter mounted.
 *
 * The converter travels in the query, not in router state, so the link still works when opened in a new tab.
 *
 * @param lensKey - host lens key
 * @param teleconverterKey - converter key
 * @returns canonical same-site path with the v1 `tc` query
 */
function teleconverterLensPath(lensKey: string, teleconverterKey: string): string {
  return canonicalPagePath(`/lens/${lensKey}?v=1&tc=${teleconverterKey}`);
}

export {
  ALL_TELECONVERTER_SUMMARY_LIST,
  TELECONVERTER_SUMMARIES,
  TELECONVERTER_SUMMARY_KEYS,
  TELECONVERTER_SUMMARY_LIST,
  teleconverterSummariesForLens,
  teleconverterLensPath,
};
