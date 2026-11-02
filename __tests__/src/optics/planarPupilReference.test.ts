import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import PlanarRaw from "../../../src/lens-data/carl-zeiss-oberkochen/CarlZeissPlanarT50mmf14.data.js";
import { traceFixtureSlope } from "./traceGeometryFixtures.js";

import { traceParaxialSurfaces as traceSurfacesParaxial } from "../../../src/optics/math/paraxial.js";
import {
  PLANAR_REFERENCE_PATH,
  decideChiefRay,
  renderPlanarPupilReference,
  type PlanarPupilReference,
} from "./fixtures/generatePlanarPupilReference.js";
import { build } from "./testLensFixtures.js";

/**
 * The five Planar build constants pinned in mirrorOptics.test.ts, against a re-derivation at 50 and 80 decimals
 * (fixtures/generatePlanarPupilReference.ts). The re-derivation was written after PR #774; it is not the evidence
 * that PR cites for those pins, which was never committed.
 */

const committedText = readFileSync(PLANAR_REFERENCE_PATH, "utf-8");
const reference = JSON.parse(committedText) as PlanarPupilReference;
const L = build(PlanarRaw);

const PUPIL_PINS = ["epZRelStop", "xpZRelLastSurf", "xpSD"] as const;
const FIELD_PINS = ["halfField", "tracingHalfField"] as const;

/**
 * Read one pin, `expect(L.<name>).toBeCloseTo(<value>, <decimals>)`, from mirrorOptics.test.ts, so this file checks
 * the expectation that test asserts rather than a copy of it.
 */
function pinned(name: (typeof PUPIL_PINS)[number] | (typeof FIELD_PINS)[number]): { value: number; decimals: number } {
  const source = readFileSync(fileURLToPath(new URL("./mirrorOptics.test.ts", import.meta.url)), "utf-8");
  const matches = [
    ...source.matchAll(new RegExp(`expect\\(L\\.${name}\\)\\.toBeCloseTo\\((-?[\\d.]+), (\\d+)\\)`, "g")),
  ];
  expect(matches, `pins of L.${name} in mirrorOptics.test.ts`).toHaveLength(1);
  return { value: Number(matches[0][1]), decimals: Number(matches[0][2]) };
}

/**
 * The half-field bisection as buildLens runs it (first-order/lensConstants.ts). buildLens keeps only its result, so its start
 * angle and its pass-or-clip test are rebuilt here from the same engine calls, in the same float64 operations. The
 * start goes through Math.atan and each launch through Math.tan, whose last bit can differ between machines; they
 * are computed here, on the machine the engine runs on, and never read from the committed file.
 */
function engineHalfFieldBisection(): { start: number; passes: (degrees: number) => boolean } {
  const lens = { S: L.S, asphByIdx: L.asphByIdx };
  const delta = 1e-4;
  const stopHeight = (y0: number, uy0: number): number => traceFixtureSlope(lens, { y0, uy0 }, { stopAt: L.stopIdx }).y;
  const epRatio = stopHeight(0, delta) / delta / (stopHeight(delta, 0) / delta);
  const passes = (degrees: number): boolean => {
    const slope = -Math.tan((degrees * Math.PI) / 180);
    const trace = traceFixtureSlope(
      lens,
      { y0: -epRatio * slope, uy0: slope },
      { skipLastTransfer: true, recordHeights: true, checkSemiDiameter: true },
    );
    return trace.failureReason === null && Number.isFinite(trace.y) && !(trace.status !== "ok");
  };

  const heights = (y0: number, u0: number): number[] =>
    traceSurfacesParaxial(L.S, y0, u0, { skipLastTransfer: true, recordHeights: true }).heights!;
  const marginal = heights(1, 0);
  const chief = heights(0, 1);
  const stopRatio = chief[L.stopIdx] / marginal[L.stopIdx];
  let smallestSlope = Infinity;
  L.S.forEach((surface, i) => {
    if (i === L.stopIdx || surface.clips === false) return;
    const reach = Math.abs(chief[i] - stopRatio * marginal[i]);
    if (reach > 1e-8) smallestSlope = Math.min(smallestSlope, surface.sd / reach);
  });
  return { start: (Math.atan(smallestSlope) * 180) / Math.PI, passes };
}

/** Forty halvings of [0, start], keeping the last angle that passes and the first that does not. */
function bisect(start: number, passes: (degrees: number) => boolean): { lower: number; upper: number } {
  let lower = 0;
  let upper = start;
  for (let step = 0; step < 40; step++) {
    const degrees = (lower + upper) / 2;
    if (passes(degrees)) lower = degrees;
    else upper = degrees;
  }
  return { lower, upper };
}

describe("Planar pupil re-derivation", () => {
  it("is what its generator writes", () => {
    expect(renderPlanarPupilReference()).toBe(committedText);
  });

  /* The bound is the pin's own: toBeCloseTo(value, 12) accepts the engine within 5e-13. The re-derived value has to
   * fall in the same window, and so does the engine measured from it, so the pin, the engine and the exact value
   * agree to the decimals the pin states. Reading the 70-decimal value with Number() moves it by at most one ulp,
   * under 4e-15 for these magnitudes. */
  it.each(PUPIL_PINS)("supports the pinned %s", (name) => {
    const pin = pinned(name);
    const exact = Number(reference.quantities[name].digits80);
    expect(exact).toBeCloseTo(pin.value, pin.decimals);
    expect(L[name]).toBeCloseTo(exact, pin.decimals);
  });

  /* A field pin is an endpoint of the bisection, not the grazing angle, which lies up to one last bracket above it.
   * What supports the pin is the same bisection run on the exact decisions alone: it has to end inside the pin's
   * window, with the engine. */
  it.each(FIELD_PINS)("supports the pinned %s", (name) => {
    const pin = pinned(name);
    const { start } = engineHalfFieldBisection();
    const exact = bisect(start, (degrees) => decideChiefRay(degrees).pass);
    expect(exact.lower).toBeCloseTo(pin.value, pin.decimals);
    expect(L[name]).toBeCloseTo(exact.lower, pin.decimals);
  });

  /* The exact decision is for the ideal chief ray at the angle the engine tested. The engine's float64 trace agrees
   * with the exact clearance to about 2e-13 mm, so nearer grazing than that the two may decide differently. The
   * smallest clearance over these steps is 5.5e-12 mm, and it is held above 1e-12 mm, so a decision that differs is
   * a tracing difference and not a rounding one. */
  it("decides all 40 half-field bisection steps as the exact arithmetic does", () => {
    const { start, passes } = engineHalfFieldBisection();
    expect(start).toBeCloseTo(Number(reference.halfField.paraxialDegrees.digits80), 12);
    // buildLens bisects only because the paraxial angle clips.
    expect(passes(start)).toBe(false);
    expect(decideChiefRay(start).pass).toBe(false);

    const insideRoundingZone =
      "a prescription change has brought this bisection step inside the zone where float64 and exact arithmetic may decide differently";
    const { lower, upper } = bisect(start, (degrees) => {
      const pass = passes(degrees);
      const exact = decideChiefRay(degrees);
      const detail = `${degrees} degrees: exact clearance ${exact.margin} mm at surface ${exact.limitingSurface}`;
      // Holding every step to the bound holds the smallest. Each is checked before its decision is compared, so a
      // step this near grazing fails as that and not as a tracing difference.
      expect(Math.abs(Number(exact.margin)), `${detail}; ${insideRoundingZone}`).toBeGreaterThan(1e-12);
      expect(pass, detail).toBe(exact.pass);
      return pass;
    });
    // Ending on L.halfField, bit for bit, shows this is the bisection buildLens ran.
    expect(lower).toBe(L.halfField);
    // The bracket it ends on holds the exact grazing angle. It is 2.8e-11 degrees wide; Number() moves the
    // reference by at most one ulp, 3.6e-15.
    const grazing = Number(reference.halfField.grazingDegrees.digits80);
    expect(lower).toBeLessThan(grazing);
    expect(upper).toBeGreaterThan(grazing);
    expect(reference.halfField.limitingSurface).toBe(decideChiefRay(lower).limitingSurface);
  });
});
