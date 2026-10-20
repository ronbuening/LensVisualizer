/**
 * Unit tests for the MTF chart regression report's helpers. The report runs only through `npm run generate:reports`
 * with MTF_CHART_REPORT=1; these checks stay in `npm test`.
 */
import { describe, expect, it } from "vitest";
import { correctedSinceAudit } from "../../reports/mtfChartLib.js";
import { buildLens } from "../../src/optics/prescription/buildRuntimeLens.js";
import type { LensData, SourceErratum } from "../../src/types/optics.js";
import { FIXTURE_PAIRS } from "../src/optics/prescription/ingestV2Fixtures.js";

/** A corrected erratum on the prime fixture's surface "1", whose radius both twins carry as 50. */
const CORRECTED: SourceErratum = {
  status: "corrected",
  surface: "1",
  field: "R",
  printed: 5,
  applied: 50,
  evidence: ["source-summary", "claims"],
  note: "The table prints 5; the summary and the claims give 50.",
};

describe("MTF chart report helpers", () => {
  it("reads a corrected source erratum from a V2 file as from its V1 twin", () => {
    const prime = FIXTURE_PAIRS.find((pair) => pair.family === "prime");
    if (prime?.kind !== "lens") throw new Error("the prime fixture pair is missing");
    /* `buildLens` reads a file of either version; its type names the V1 shape. */
    const built = (file: object) => buildLens(file as LensData);
    expect(correctedSinceAudit(built(prime.v1))).toBe(false);
    expect(correctedSinceAudit(built(prime.v2))).toBe(false);
    expect(correctedSinceAudit(built({ ...prime.v1, sourceErrata: [CORRECTED] }))).toBe(true);
    expect(correctedSinceAudit(built({ ...prime.v2, source: { ...prime.v2.source, errata: [CORRECTED] } }))).toBe(true);
  });
});
