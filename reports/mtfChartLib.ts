/**
 * Helpers of the MTF chart regression report (`mtfChartRegression.report.ts`), kept beside it so `npm test` checks
 * them between regenerations, as `glassScanLib.ts` is for the glass scans.
 */
import type { RuntimeLens } from "../src/types/optics.js";

/**
 * Whether a source erratum was corrected in the lens file, which the chart audit predates. Read from the built
 * lens's data, canonical ingest's V1 view, so a V2 file's `source.errata` counts as a V1 file's `sourceErrata`.
 *
 * @param L - the built lens
 * @returns true when any erratum has status `corrected`
 */
export function correctedSinceAudit(L: RuntimeLens): boolean {
  return (L.data.sourceErrata ?? []).some((erratum) => erratum.status === "corrected");
}
