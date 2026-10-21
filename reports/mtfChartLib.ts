/**
 * Helpers of the MTF chart regression report (`mtfChartRegression.report.ts`), kept beside it so `npm test` checks
 * them between regenerations, as `glassScanLib.ts` is for the glass scans.
 */
import type { RuntimeLens } from "../src/types/optics.js";

/**
 * Whether a source erratum was corrected in the lens file, which the chart audit predates. Read from the built
 * lens's V2 data through canonical ingest (`source.errata`).
 *
 * @param L - the built lens
 * @returns true when any erratum has status `corrected`
 */
export function correctedSinceAudit(L: RuntimeLens): boolean {
  return (L.source.source.errata ?? []).some((erratum) => erratum.status === "corrected");
}
