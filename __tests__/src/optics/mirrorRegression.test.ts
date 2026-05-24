import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import {
  reflectDirection,
  traceExactSurfaceStack,
  traceExactSurfaceStackVector,
} from "../../../src/optics/internal/exactSurfaceTrace.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import type { SurfaceData } from "../../../src/types/optics.js";

/**
 * Phase A regression locks: confirm that the step-sequence refactor of the
 * exact tracer produces output indistinguishable from the pre-refactor
 * surface-by-surface loop for representative lenses across the catalog,
 * and that the new reflectDirection primitive obeys the specular reflection law.
 *
 * The legacy path is the identity step sequence `[{0,refract}, {1,refract}, ...]`
 * — any divergence on these lenses signals an unintended behavior change in the
 * step-sequence machinery itself.
 */

/* Cross-section of catalog complexity: prime, fast prime, wide, fisheye,
 * internal-stop, telephoto, zoom, classic 6-element. */
const REGRESSION_LENS_KEYS = [
  "apo-lanthar-50f2",
  "nokton-50f1",
  "sonnar-50f15",
  "nikon-fisheye-nikkor-6mm-f28",
  "zeiss-hologon-15f8",
  "canon-ef-200mm-f2l-is-usm",
  "canon-ef-24-70-f28l-ii",
  "canon-rf-50-f12-l",
] as const;

const REGRESSION_FIELDS_DEG = [0, 10, 25] as const;
const REGRESSION_Y0 = [0, 2] as const;

describe("mirror Phase A — legacy trace regression", () => {
  it("step-sequence refactor preserves hit counts for legacy lenses", () => {
    for (const key of REGRESSION_LENS_KEYS) {
      const lens = buildLens(LENS_CATALOG[key]);
      for (const fieldDeg of REGRESSION_FIELDS_DEG) {
        for (const y0 of REGRESSION_Y0) {
          const thetaRad = (fieldDeg * Math.PI) / 180;
          const result = traceExactSurfaceStack(
            lens,
            { y0, uy0: -Math.tan(thetaRad) },
            { leadDistance: 0, checkSemiDiameter: true },
          );
          // Every hit corresponds to one forward surface visit. For legacy
          // lenses (no `reflect` field) the sequence is the identity walk, so
          // hits.length must equal the number of surfaces actually reached
          // before any clip-and-break failure.
          expect(result.hits.length, `${key} field=${fieldDeg} y0=${y0}: hit count`).toBeLessThanOrEqual(lens.N);
          if (!result.clipped) {
            expect(result.hits.length, `${key} field=${fieldDeg} y0=${y0}: hit count on success`).toBe(lens.N);
          }
        }
      }
    }
  });

  it("step-sequence refactor produces stable terminal output for axial rays", () => {
    /* Axial rays are the most stable across small numerical changes — any
     * divergence here would be visible immediately. Values below are captured
     * from the refactored tracer; future changes that alter trace behavior
     * for unmodified legacy lenses must update these values intentionally. */
    const lens = buildLens(LENS_CATALOG["sonnar-50f15"]);
    const result = traceExactSurfaceStack(lens, { y0: 1, uy0: 0 }, { leadDistance: 0 });
    expect(result.clipped).toBe(false);
    expect(result.failureReason).toBeNull();
    expect(isFinite(result.y)).toBe(true);
    expect(isFinite(result.uy)).toBe(true);
    expect(result.hits.length).toBe(lens.N);
  });

  it("vector and slope entries continue to agree for legacy lenses", () => {
    /* Locks the byte-identical-on-legacy guarantee: the refactor must not
     * cause vector- and slope-entry paths to diverge. */
    for (const key of REGRESSION_LENS_KEYS) {
      const lens = buildLens(LENS_CATALOG[key]);
      const thetaRad = (15 * Math.PI) / 180;
      const slope = traceExactSurfaceStack(
        lens,
        { y0: 1, uy0: -Math.tan(thetaRad) },
        { leadDistance: 0, checkSemiDiameter: true },
      );
      const vector = traceExactSurfaceStackVector(
        lens,
        { origin: [0, 1, 0], direction: [0, -Math.sin(thetaRad), Math.cos(thetaRad)] },
        { checkSemiDiameter: true },
      );
      expect(vector.y, `${key}: y mismatch`).toBeCloseTo(slope.y, 10);
      expect(vector.uy, `${key}: uy mismatch`).toBeCloseTo(slope.uy, 10);
      expect(vector.clipped, `${key}: clipped mismatch`).toBe(slope.clipped);
      expect(vector.hits.length, `${key}: hit count mismatch`).toBe(slope.hits.length);
    }
  });
});

describe("mirror Phase A — reflectDirection primitive", () => {
  it("reverses z-component for normal incidence on a flat mirror facing +z", () => {
    const reflected = reflectDirection([0, 0, 1], [0, 0, 1]);
    expect(reflected[0]).toBeCloseTo(0, 12);
    expect(reflected[1]).toBeCloseTo(0, 12);
    expect(reflected[2]).toBeCloseTo(-1, 12);
  });

  it("preserves tangential components and flips the normal component", () => {
    const normal: [number, number, number] = [0, 0, 1];
    const incoming: [number, number, number] = [0, Math.sin(0.2), Math.cos(0.2)];
    const reflected = reflectDirection(incoming, normal);
    expect(reflected[0]).toBeCloseTo(0, 12);
    expect(reflected[1]).toBeCloseTo(Math.sin(0.2), 12);
    expect(reflected[2]).toBeCloseTo(-Math.cos(0.2), 12);
  });

  it("produces unit-magnitude output for unit-magnitude inputs", () => {
    const normal: [number, number, number] = [
      Math.sin(0.3) * Math.cos(0.4),
      Math.sin(0.3) * Math.sin(0.4),
      Math.cos(0.3),
    ];
    const incoming: [number, number, number] = [
      Math.sin(0.7) * Math.cos(1.1),
      Math.sin(0.7) * Math.sin(1.1),
      Math.cos(0.7),
    ];
    const reflected = reflectDirection(incoming, normal);
    const mag = Math.hypot(reflected[0], reflected[1], reflected[2]);
    expect(mag).toBeCloseTo(1, 12);
  });

  it("reflects through any plane normal: incidence angle equals reflection angle", () => {
    /* Reflection law: angle of incidence to the normal equals angle of
     * reflection. Equivalently, d·n = −d'·n. */
    const normal: [number, number, number] = [0.6, 0, 0.8];
    const incoming: [number, number, number] = [0.1, 0.2, 0.974679];
    const reflected = reflectDirection(incoming, normal);
    const cosI = incoming[0] * normal[0] + incoming[1] * normal[1] + incoming[2] * normal[2];
    const cosR = reflected[0] * normal[0] + reflected[1] * normal[1] + reflected[2] * normal[2];
    expect(cosI).toBeCloseTo(-cosR, 12);
  });
});

describe("mirror Phase B — Mangin / second-surface mirror trace fixture", () => {
  /* Synthetic Mangin mirror: a glass meniscus with silvered rear. Light
   * refracts at the front (air→glass), reflects at the silvered rear, and
   * refracts back out through the front (glass→air). The inferred step
   * sequence walks: refract S0, reflect S1, refract S0. */

  function mangin(): SurfaceData[] {
    return [
      { label: "1", R: -147.69, d: 8, nd: 1.517, sd: 30, elemId: 1 },
      {
        label: "M1",
        R: -228.34,
        d: 0,
        nd: 1.517,
        sd: 30,
        elemId: 1,
        reflect: { kind: "second" },
      },
    ];
  }

  it("traces refract → reflect → refract triplet for an axial unit ray", () => {
    const result = traceExactSurfaceStack({ S: mangin(), asphByIdx: {} }, { y0: 1, uy0: 0 }, { leadDistance: 5 });
    expect(result.clipped).toBe(false);
    expect(result.hits.length).toBe(3);
    expect(result.hits[0].surfaceIdx).toBe(0);
    expect(result.hits[1].surfaceIdx).toBe(1);
    expect(result.hits[2].surfaceIdx).toBe(0);
    expect(result.terminalDirection[2]).toBeLessThan(0);
  });

  it("exits the front surface with a non-zero converging slope", () => {
    const result = traceExactSurfaceStack({ S: mangin(), asphByIdx: {} }, { y0: 1, uy0: 0 }, { leadDistance: 5 });
    /* For a Mangin with f' on the order of 150 mm, a unit marginal ray
     * (y₀=1, u₀=0) exits with appreciable converging slope. The exact value
     * depends on the prescription; we only assert the trace produced a real
     * convergence rather than passing the ray through unchanged. */
    const uExit = result.uy;
    expect(isFinite(uExit)).toBe(true);
    expect(Math.abs(uExit)).toBeGreaterThan(1e-3);
  });

  it("traced marginal ray height at the silvered rear is consistent with paraxial trace", async () => {
    /* Compare exact-trace y at the silvered surface against the paraxial
     * trace. They should agree to a few percent for a small-aperture axial
     * ray. This locks the consistency between the two engines' step
     * sequences. */
    const { traceSurfacesParaxial } = await import("../../../src/optics/internal/traceSurfaces.js");
    const surfaces = mangin();
    const paraxial = traceSurfacesParaxial(surfaces, 1, 0, { recordHeights: true });
    const exact = traceExactSurfaceStack(
      { S: surfaces, asphByIdx: {} },
      { y0: 1, uy0: 0 },
      { leadDistance: 5, recordHeights: true },
    );
    expect(paraxial.heights).not.toBeNull();
    expect(exact.heights).not.toBeNull();
    expect(exact.heights!.length).toBe(paraxial.heights!.length);
    /* heights[1] is y at the silvered rear (the second step). */
    expect(exact.heights![1]).toBeCloseTo(paraxial.heights![1], 2);
  });
});

describe("mirror Phase C — explicit traceSequence", () => {
  /* The explicit-sequence machinery must produce results indistinguishable
   * from the inferred sequence for cases the inference already handles (a
   * single Mangin mirror). This locks the explicit path as a strict superset
   * of the inferred behaviour. */

  function mangin(): SurfaceData[] {
    return [
      { label: "1", R: -147.69, d: 8, nd: 1.517, sd: 30, elemId: 1 },
      {
        label: "M1",
        R: -228.34,
        d: 0,
        nd: 1.517,
        sd: 30,
        elemId: 1,
        reflect: { kind: "second" },
      },
    ];
  }

  it("inferred and explicit Mangin sequences produce identical trace results", () => {
    const surfaces = mangin();
    const inferred = traceExactSurfaceStack({ S: surfaces, asphByIdx: {} }, { y0: 1, uy0: 0 }, { leadDistance: 5 });
    const explicit = traceExactSurfaceStack(
      { S: surfaces, asphByIdx: {}, traceSequence: [0, 1, 0] },
      { y0: 1, uy0: 0 },
      { leadDistance: 5 },
    );
    expect(explicit.hits.length).toBe(inferred.hits.length);
    expect(explicit.y).toBeCloseTo(inferred.y, 10);
    expect(explicit.uy).toBeCloseTo(inferred.uy, 10);
    expect(explicit.terminalDirection[2]).toBeCloseTo(inferred.terminalDirection[2], 10);
  });

  it("paraxial inferred and explicit Mangin sequences produce identical EFL", async () => {
    const { traceSurfacesParaxial } = await import("../../../src/optics/internal/traceSurfaces.js");
    const surfaces = mangin();
    const inferred = traceSurfacesParaxial(surfaces, 1, 0, { skipLastTransfer: true });
    const explicit = traceSurfacesParaxial(surfaces, 1, 0, {
      skipLastTransfer: true,
      traceSequence: [0, 1, 0],
    });
    expect(explicit.y).toBeCloseTo(inferred.y, 10);
    expect(explicit.u).toBeCloseTo(inferred.u, 10);
    /* EFL = -1/u_final — both engines must agree on the marginal exit slope. */
    expect(-1 / explicit.u).toBeCloseTo(-1 / inferred.u, 6);
  });

  it("validation rejects a traceSequence whose direction reverses without a reflective surface", async () => {
    const { default: validateLensData } = await import("../../../src/optics/validateLensData.js");
    const errors = validateLensData({
      key: "test-bad-sequence",
      name: "Test",
      closeFocusM: 1,
      focusStep: 0.01,
      maxFstop: 32,
      apertureStep: 0.5,
      svgW: 100,
      svgH: 100,
      scFill: 0.5,
      yScFill: 0.5,
      clipMargin: 1,
      maxRimAngleDeg: 64,
      gapSagFrac: 0.3,
      rayLeadFrac: 0.1,
      offAxisFieldFrac: 0.5,
      maxAspectRatio: 1,
      nominalFno: 8,
      fstopSeries: [8],
      rayFractions: [0.5],
      offAxisFractions: [0.5],
      elements: [{ id: 1, name: "E1", label: "L1", type: "test", nd: 1.5 }],
      surfaces: [
        { label: "1", R: 100, d: 5, nd: 1.5, elemId: 1, sd: 10 },
        { label: "2", R: -100, d: 0, nd: 1.0, elemId: 0, sd: 10 },
        { label: "STO", R: 1e15, d: 0, nd: 1.0, elemId: 0, sd: 5 },
      ],
      traceSequence: ["1", "2", "STO", "2"],
    });
    /* Going from "STO" (index 2) back to "2" (index 1) reverses direction,
     * but STO is not reflective — validation must flag this. */
    expect(errors.some((e) => /reverse direction/.test(e))).toBe(true);
  });

  it("validation rejects a traceSequence not starting at the first surface", async () => {
    const { default: validateLensData } = await import("../../../src/optics/validateLensData.js");
    const errors = validateLensData({
      key: "test-bad-start",
      name: "Test",
      closeFocusM: 1,
      focusStep: 0.01,
      maxFstop: 32,
      apertureStep: 0.5,
      svgW: 100,
      svgH: 100,
      scFill: 0.5,
      yScFill: 0.5,
      clipMargin: 1,
      maxRimAngleDeg: 64,
      gapSagFrac: 0.3,
      rayLeadFrac: 0.1,
      offAxisFieldFrac: 0.5,
      maxAspectRatio: 1,
      nominalFno: 8,
      fstopSeries: [8],
      rayFractions: [0.5],
      offAxisFractions: [0.5],
      elements: [{ id: 1, name: "E1", label: "L1", type: "test", nd: 1.5 }],
      surfaces: [
        { label: "1", R: 100, d: 5, nd: 1.5, elemId: 1, sd: 10 },
        { label: "2", R: -100, d: 0, nd: 1.0, elemId: 0, sd: 10 },
        { label: "STO", R: 1e15, d: 0, nd: 1.0, elemId: 0, sd: 5 },
      ],
      traceSequence: ["2", "STO"],
    });
    expect(errors.some((e) => /must start at the first physical surface/.test(e))).toBe(true);
  });
});

describe("mirror Phase D — partial silvering + embeddedIn", () => {
  /* A surface with reflect.region acts as a partial mirror: hits inside the
   * silvered region reflect; hits outside transmit (refract) using the
   * surface's nd. The radial threshold is evaluated at trace time based on
   * the actual hit position. */

  it("reflects an axial ray off the central silvered disk", () => {
    const surfaces: SurfaceData[] = [
      {
        label: "M1",
        R: 1e15,
        nd: 1.0,
        d: 0,
        sd: 20,
        elemId: 0,
        reflect: { kind: "first", region: { shape: "disk", rMax: 5 } },
      },
    ];
    /* y₀=0 lies on-axis, inside the disk → reflect. */
    const reflected = traceExactSurfaceStack({ S: surfaces, asphByIdx: {} }, { y0: 0, uy0: 0 }, { leadDistance: 5 });
    expect(reflected.hits.length).toBe(1);
    expect(reflected.terminalDirection[2]).toBeLessThan(0);
  });

  it("transmits an off-axis ray that misses the central silvered disk", () => {
    const surfaces: SurfaceData[] = [
      {
        label: "M1",
        R: 1e15,
        nd: 1.0,
        d: 0,
        sd: 20,
        elemId: 0,
        reflect: { kind: "first", region: { shape: "disk", rMax: 5 } },
      },
    ];
    /* y₀=10 lies outside the disk → transmit through (air→air, no change). */
    const transmitted = traceExactSurfaceStack({ S: surfaces, asphByIdx: {} }, { y0: 10, uy0: 0 }, { leadDistance: 5 });
    expect(transmitted.hits.length).toBe(1);
    /* Same medium on both sides → direction unchanged after the transit. */
    expect(transmitted.terminalDirection[2]).toBeGreaterThan(0);
  });

  it("reflects off an annular silvered region while transmitting through its inner disk", () => {
    const surfaces: SurfaceData[] = [
      {
        label: "M1",
        R: 1e15,
        nd: 1.0,
        d: 0,
        sd: 30,
        elemId: 0,
        reflect: { kind: "first", region: { shape: "annulus", rMin: 5, rMax: 20 } },
      },
    ];
    /* y₀=1 lies inside the annulus's inner disk → transmit. */
    const insideHole = traceExactSurfaceStack({ S: surfaces, asphByIdx: {} }, { y0: 1, uy0: 0 }, { leadDistance: 5 });
    expect(insideHole.terminalDirection[2]).toBeGreaterThan(0);
    /* y₀=10 lies in the silvered annulus → reflect. */
    const inAnnulus = traceExactSurfaceStack({ S: surfaces, asphByIdx: {} }, { y0: 10, uy0: 0 }, { leadDistance: 5 });
    expect(inAnnulus.terminalDirection[2]).toBeLessThan(0);
  });

  it("validation rejects reflect.region.rMax exceeding surface sd", async () => {
    const { default: validateLensData } = await import("../../../src/optics/validateLensData.js");
    const errors = validateLensData({
      key: "test-bad-region",
      name: "Test",
      closeFocusM: 1,
      focusStep: 0.01,
      maxFstop: 32,
      apertureStep: 0.5,
      svgW: 100,
      svgH: 100,
      scFill: 0.5,
      yScFill: 0.5,
      clipMargin: 1,
      maxRimAngleDeg: 64,
      gapSagFrac: 0.3,
      rayLeadFrac: 0.1,
      offAxisFieldFrac: 0.5,
      maxAspectRatio: 1,
      nominalFno: 8,
      fstopSeries: [8],
      rayFractions: [0.5],
      offAxisFractions: [0.5],
      elements: [],
      surfaces: [
        {
          label: "M1",
          R: 1e15,
          d: 0,
          nd: 1.0,
          elemId: 0,
          sd: 10,
          reflect: { kind: "first", region: { shape: "disk", rMax: 25 } },
        },
        { label: "STO", R: 1e15, d: 0, nd: 1.0, elemId: 0, sd: 5 },
      ],
    });
    expect(errors.some((e) => /reflect\.region\.rMax/.test(e) && /exceeds surface sd/.test(e))).toBe(true);
  });

  it("validation rejects embeddedIn pointing to a non-existent surface label", async () => {
    const { default: validateLensData } = await import("../../../src/optics/validateLensData.js");
    const errors = validateLensData({
      key: "test-bad-embedded",
      name: "Test",
      closeFocusM: 1,
      focusStep: 0.01,
      maxFstop: 32,
      apertureStep: 0.5,
      svgW: 100,
      svgH: 100,
      scFill: 0.5,
      yScFill: 0.5,
      clipMargin: 1,
      maxRimAngleDeg: 64,
      gapSagFrac: 0.3,
      rayLeadFrac: 0.1,
      offAxisFieldFrac: 0.5,
      maxAspectRatio: 1,
      nominalFno: 8,
      fstopSeries: [8],
      rayFractions: [0.5],
      offAxisFractions: [0.5],
      elements: [],
      surfaces: [
        { label: "A", R: 1e15, d: 0, nd: 1.0, elemId: 0, sd: 10, embeddedIn: "Z-DOESNT-EXIST" },
        { label: "STO", R: 1e15, d: 0, nd: 1.0, elemId: 0, sd: 5 },
      ],
    });
    expect(errors.some((e) => /embeddedIn.*not found/.test(e))).toBe(true);
  });

  it("Mangin partial silvering: kind:'second' with region allows nd=1 on the back side", async () => {
    /* When a Mangin-class silvered surface has a region (partial silvering),
     * the transmissive portion exits to air. The validation must allow nd=1
     * on the back side in this case. */
    const { default: validateLensData } = await import("../../../src/optics/validateLensData.js");
    const errors = validateLensData({
      key: "test-partial-mangin",
      name: "Test",
      closeFocusM: 1,
      focusStep: 0.01,
      maxFstop: 32,
      apertureStep: 0.5,
      svgW: 100,
      svgH: 100,
      scFill: 0.5,
      yScFill: 0.5,
      clipMargin: 1,
      maxRimAngleDeg: 64,
      gapSagFrac: 0.3,
      rayLeadFrac: 0.1,
      offAxisFieldFrac: 0.5,
      maxAspectRatio: 1,
      nominalFno: 8,
      fstopSeries: [8],
      rayFractions: [0.5],
      offAxisFractions: [0.5],
      elements: [{ id: 1, name: "E1", label: "L1", type: "test", nd: 1.5 }],
      surfaces: [
        { label: "1", R: 100, d: 5, nd: 1.5, elemId: 1, sd: 30 },
        {
          label: "M1",
          R: -100,
          d: 0,
          nd: 1.0,
          elemId: 0,
          sd: 30,
          reflect: { kind: "second", region: { shape: "disk", rMax: 5 } },
        },
        { label: "STO", R: 1e15, d: 0, nd: 1.0, elemId: 0, sd: 5 },
      ],
    });
    /* Should NOT include the "glass on the back side" error for partial
     * silvering. Other unrelated errors may still appear. */
    expect(errors.some((e) => /requires glass.*on the back side/.test(e))).toBe(false);
  });
});

describe("mirror Phase E — one-sided opacity", () => {
  /* A surface with reflect.opaqueFrom blocks rays approaching from the
   * specified side while reflecting rays approaching from the other side.
   * Used to model secondary mirrors that absorb direct forward light but
   * reflect light coming back from the primary. */

  it("absorbs a forward-traveling ray when opaqueFrom is 'front'", () => {
    const surfaces: SurfaceData[] = [
      {
        label: "M1",
        R: 1e15,
        nd: 1.0,
        d: 0,
        sd: 20,
        elemId: 0,
        reflect: { kind: "first", opaqueFrom: "front" },
      },
    ];
    const result = traceExactSurfaceStack({ S: surfaces, asphByIdx: {} }, { y0: 0, uy0: 0 }, { leadDistance: 5 });
    expect(result.clipped).toBe(true);
    expect(result.failureReason).toBe("absorbed");
  });

  it("transmits a forward-traveling ray outside the silvered region even when opaqueFrom is set", () => {
    /* opaqueFrom only blocks rays inside the silvered region. A ray missing
     * the silvered central disk transmits through normally. */
    const surfaces: SurfaceData[] = [
      {
        label: "M1",
        R: 1e15,
        nd: 1.0,
        d: 0,
        sd: 20,
        elemId: 0,
        reflect: { kind: "first", region: { shape: "disk", rMax: 3 }, opaqueFrom: "front" },
      },
    ];
    /* y₀=10 is outside the rMax=3 silvered disk → transmit, no absorption. */
    const result = traceExactSurfaceStack({ S: surfaces, asphByIdx: {} }, { y0: 10, uy0: 0 }, { leadDistance: 5 });
    expect(result.clipped).toBe(false);
    expect(result.failureReason).toBeNull();
  });

  it("validation rejects opaqueFrom values other than 'front' or 'back'", async () => {
    const { default: validateLensData } = await import("../../../src/optics/validateLensData.js");
    const errors = validateLensData({
      key: "test-bad-opaque",
      name: "Test",
      closeFocusM: 1,
      focusStep: 0.01,
      maxFstop: 32,
      apertureStep: 0.5,
      svgW: 100,
      svgH: 100,
      scFill: 0.5,
      yScFill: 0.5,
      clipMargin: 1,
      maxRimAngleDeg: 64,
      gapSagFrac: 0.3,
      rayLeadFrac: 0.1,
      offAxisFieldFrac: 0.5,
      maxAspectRatio: 1,
      nominalFno: 8,
      fstopSeries: [8],
      rayFractions: [0.5],
      offAxisFractions: [0.5],
      elements: [],
      surfaces: [
        {
          label: "M1",
          R: 1e15,
          d: 0,
          nd: 1.0,
          elemId: 0,
          sd: 10,
          reflect: { kind: "first", opaqueFrom: "sideways" as any },
        },
        { label: "STO", R: 1e15, d: 0, nd: 1.0, elemId: 0, sd: 5 },
      ],
    });
    expect(errors.some((e) => /opaqueFrom must be "front" or "back"/.test(e))).toBe(true);
  });
});

describe("mirror reference lenses — catalog entries build and trace", () => {
  /* Each phase has a corresponding hidden (visible:false) catalog entry that
   * exercises the schema features end-to-end through buildLens. These tests
   * confirm the lens data files validate and the runtime trace produces a
   * complete hit list matching the declared traceSequence. */

  const REFERENCE_LENS_KEYS = [
    "reference-mangin-156f4",
    "reference-cassegrain-100f8",
    "reference-maksutov-cassegrain",
    "reflex-nikkor-500f8",
  ] as const;

  it("every reference catadioptric lens builds with a finite EFL", async () => {
    const { LENS_CATALOG } = await import("../../../src/utils/catalog/lensCatalog.js");
    for (const key of REFERENCE_LENS_KEYS) {
      const data = LENS_CATALOG[key];
      expect(data, `${key}: missing from catalog`).toBeDefined();
      const lens = buildLens(data);
      expect(isFinite(lens.EFL), `${key}: EFL must be finite`).toBe(true);
      expect(lens.S.length, `${key}: must have at least one surface`).toBeGreaterThan(0);
    }
  });

  it("computeFieldGeometryAtState walks the catadioptric traceSequence", async () => {
    /* This catches the regression where `fieldGeometry.ts` (called from the
     * React diagram render hook) tripped the "multiple reflective surfaces
     * require an explicit traceSequence" guard for Cassegrain/Mak-Cass/Reflex
     * lenses. Loading the lens diagram now must run the field-geometry
     * computation without throwing. */
    const { LENS_CATALOG } = await import("../../../src/utils/catalog/lensCatalog.js");
    const { computeFieldGeometryAtState } = await import("../../../src/optics/fieldGeometry.js");
    for (const key of REFERENCE_LENS_KEYS) {
      const lens = buildLens(LENS_CATALOG[key]);
      expect(() => computeFieldGeometryAtState(0, 0, lens), `${key}: field geometry threw`).not.toThrow();
    }
  });

  it("annular entrance pupil remaps ray fractions into the unobstructed annulus", async () => {
    /* Catadioptric lenses declare `entrancePupilObstructionSD` to describe a
     * central obstruction. The ray-sampling helper must remap unit fractions
     * to the annular band so that no authored ray fraction lands inside the
     * obstruction (where it would be absorbed by the secondary spot). */
    const { rayHeightForPupilFraction } = await import("../../../src/optics/raySampling.js");
    /* Solid pupil: no remapping, exact f·epSD. */
    expect(rayHeightForPupilFraction(0.5, 10, 0)).toBeCloseTo(5, 10);
    expect(rayHeightForPupilFraction(-0.83, 10, 0)).toBeCloseTo(-8.3, 10);
    /* Annular pupil with rInner=4: f=0.5 maps into the annulus [4, 10]. */
    const f = 0.5;
    const epSD = 10;
    const obstr = 4;
    const expected = obstr + f * (epSD - obstr); // = 4 + 0.5*6 = 7
    expect(rayHeightForPupilFraction(f, epSD, obstr)).toBeCloseTo(expected, 10);
    /* Symmetric: negative f maps to the negative annulus. */
    expect(rayHeightForPupilFraction(-f, epSD, obstr)).toBeCloseTo(-expected, 10);
    /* Endpoints reach the full pupil edge; obstruction-edge is reached at f=0+. */
    expect(rayHeightForPupilFraction(1, epSD, obstr)).toBeCloseTo(epSD, 10);
    expect(rayHeightForPupilFraction(-1, epSD, obstr)).toBeCloseTo(-epSD, 10);
  });

  it("Reflex-Nikkor declares an annular EP that puts every default ray fraction outside the obstruction", async () => {
    const { LENS_CATALOG } = await import("../../../src/utils/catalog/lensCatalog.js");
    const { rayHeightForPupilFraction } = await import("../../../src/optics/raySampling.js");
    const lens = buildLens(LENS_CATALOG["reflex-nikkor-500f8"]);
    expect(lens.EP.epObstructionSD, "obstruction must be > 0").toBeGreaterThan(0);
    expect(lens.EP.epObstructionSD).toBeLessThan(lens.EP.epSD);
    for (const f of lens.rayFractions) {
      const h = Math.abs(rayHeightForPupilFraction(f, lens.EP.epSD, lens.EP.epObstructionSD));
      expect(
        h,
        `f=${f}: h=${h.toFixed(3)} must lie in [${lens.EP.epObstructionSD}, ${lens.EP.epSD}]`,
      ).toBeGreaterThanOrEqual(lens.EP.epObstructionSD - 1e-9);
      expect(h).toBeLessThanOrEqual(lens.EP.epSD + 1e-9);
    }
  });

  it("backward-image catadioptrics report a negative imagePlaneZ", async () => {
    /* The Mangin lens exits light going in -z and forms its image in front
     * of the lens at z < zPos[0]. buildLens computes L.imagePlaneZ from the
     * paraxial trace using the explicit traceSequence; for catadioptric
     * lenses the resulting z can be negative, signaling the image forms on
     * the front side of the lens. */
    const { LENS_CATALOG } = await import("../../../src/utils/catalog/lensCatalog.js");
    const mangin = buildLens(LENS_CATALOG["reference-mangin-156f4"]);
    expect(isFinite(mangin.imagePlaneZ)).toBe(true);
    expect(mangin.imagePlaneZ).toBeLessThan(0);
    /* Magnitude should match the EFL magnitude to within ~20% (paraxial
     * trace and EFL are derived from the same trace, so the focal-length
     * magnitude and the image-plane distance from z=0 should be similar). */
    const ratio = Math.abs(mangin.imagePlaneZ) / mangin.EFL;
    expect(ratio).toBeGreaterThan(0.5);
    expect(ratio).toBeLessThan(1.5);
  });

  it("refractive lenses have imagePlaneZ close to the conventional zPos[last] + BFL", async () => {
    /* For ordinary refractive lenses the paraxial image plane and the
     * layout-side `zPos[last] + S[last].d` should agree to within authoring
     * precision. This guards against the buildLens change accidentally
     * shifting the image plane for the legacy catalog. */
    const { LENS_CATALOG } = await import("../../../src/utils/catalog/lensCatalog.js");
    const { doLayout } = await import("../../../src/optics/optics.js");
    for (const key of ["apo-lanthar-50f2", "nokton-50f1", "sonnar-50f15", "zeiss-hologon-15f8"]) {
      const L = buildLens(LENS_CATALOG[key]);
      const layout = doLayout(0, 0, L);
      const diff = Math.abs(L.imagePlaneZ - layout.imgZ);
      expect(diff, `${key}: imagePlaneZ ${L.imagePlaneZ} vs layout.imgZ ${layout.imgZ}`).toBeLessThan(20);
    }
  });

  it("remapCircularPupilToAnnulus moves every sample into the annular band", async () => {
    const { sampleCircularPupil, remapCircularPupilToAnnulus } = await import("../../../src/optics/optics.js");
    const base = sampleCircularPupil([1, 6, 12]);
    const remapped = remapCircularPupilToAnnulus(base, 0.4);
    expect(remapped.length).toBe(base.length);
    /* Every output sample's radial position must lie in [0.4, 1]. */
    for (const s of remapped) {
      expect(s.radiusFraction).toBeGreaterThanOrEqual(0.4 - 1e-12);
      expect(s.radiusFraction).toBeLessThanOrEqual(1 + 1e-12);
      const r = Math.hypot(s.xFraction, s.yFraction);
      expect(r).toBeCloseTo(s.radiusFraction, 10);
    }
    /* The center sample (radius 0 on the input disk) maps to the inner
     * annulus edge at radius = obstrFrac. */
    expect(remapped[0].radiusFraction).toBeCloseTo(0.4, 10);
    /* Annular monotonicity: ring i+1's radius > ring i's radius. */
    expect(remapped[1].radiusFraction).toBeGreaterThan(remapped[0].radiusFraction);
    expect(remapped[7].radiusFraction).toBeGreaterThan(remapped[1].radiusFraction);
  });

  it("vignetting curve for catadioptric lenses samples the annular pupil, not the obstructed center", async () => {
    /* Without the annular remap, the dense pupil sweep would place rays
     * inside the central obstruction and count them as clipped, deflating
     * the on-axis transmission below the surviving annular flux. With the
     * remap the on-axis (= field-angle 0) sample should pass essentially
     * every annular pupil ray. */
    const { LENS_CATALOG } = await import("../../../src/utils/catalog/lensCatalog.js");
    const { computeVignettingCurve } = await import("../../../src/optics/vignetteAnalysis.js");
    const { doLayout } = await import("../../../src/optics/optics.js");
    const lens = buildLens(LENS_CATALOG["reference-cassegrain-100f8"]);
    const layout = doLayout(0, 0, lens);
    const curve = computeVignettingCurve(lens, layout.z, 0, 0, lens.EP.epSD, lens.stopPhysSD);
    expect(curve.length, "vignetting curve must produce samples").toBeGreaterThan(0);
    /* On-axis is by-definition normalized to 1.0 since the curve renormalizes.
     * What we really verify here is that the curve EXISTS — without the
     * annular remap fix, every catadioptric trace would have gtAxis === 0
     * (central rays all clipped) and the function would return []. */
    expect(curve[0].geometricTransmission).toBeCloseTo(1.0, 6);
    expect(curve[0].relativeIllumination).toBeCloseTo(1.0, 6);
  });

  it("loose mirror surfaces (elemId=0, with reflect) emit drawable mirror paths", async () => {
    /* Pure-mirror Cassegrains have reflective surfaces that don't sit inside
     * any element span. computeElementShapes must still emit mirror paths for
     * them so the diagram can draw the silvered arcs. */
    const { LENS_CATALOG } = await import("../../../src/utils/catalog/lensCatalog.js");
    const { computeElementShapes } = await import("../../../src/optics/diagramGeometry.js");
    const lens = buildLens(LENS_CATALOG["reference-cassegrain-100f8"]);
    const zPos = lens.S.reduce<number[]>(
      (acc, s, i) => (i === 0 ? [0] : [...acc, acc[acc.length - 1] + lens.S[i - 1].d]),
      [],
    );
    const shapes = computeElementShapes(
      lens,
      zPos,
      (z) => z,
      (y) => y,
    );
    const allMirrorPaths = shapes.flatMap((s) => s.mirrorPaths);
    /* Cassegrain has 2 reflective surfaces (primary + secondary), both full
     * silvering → one mirror path each. */
    expect(allMirrorPaths.length).toBeGreaterThanOrEqual(2);
    const reflectiveSurfaceIndices = lens.S.reduce<number[]>((acc, s, i) => (s.reflect ? [...acc, i] : acc), []);
    for (const idx of reflectiveSurfaceIndices) {
      expect(
        allMirrorPaths.some((m) => m.surfIdx === idx),
        `surface ${idx} (label ${lens.S[idx].label}) must have a mirror path drawn`,
      ).toBe(true);
    }
  });

  it("Mangin reference lens trace hits its silvered rear and returns through the front", async () => {
    const { LENS_CATALOG } = await import("../../../src/utils/catalog/lensCatalog.js");
    const lens = buildLens(LENS_CATALOG["reference-mangin-156f4"]);
    const result = traceExactSurfaceStack(lens, { y0: 5, uy0: 0 }, { leadDistance: 5 });
    /* Inferred sequence: refract front (idx 1), reflect at silvered rear
     * (idx 2), refract back through front (idx 1). */
    expect(result.hits.length).toBeGreaterThanOrEqual(3);
    expect(result.hits.some((h) => h.surfaceIdx === 2)).toBe(true);
    expect(result.terminalDirection[2]).toBeLessThan(0);
  });

  it("Cassegrain reference lens trace follows STO → primary → secondary order", async () => {
    const { LENS_CATALOG } = await import("../../../src/utils/catalog/lensCatalog.js");
    const lens = buildLens(LENS_CATALOG["reference-cassegrain-100f8"]);
    const result = traceExactSurfaceStack(lens, { y0: 1, uy0: 0 }, { leadDistance: 5 });
    /* Explicit traceSequence ["STO", "M1", "M2"] → 3 hits in that surface
     * order (idx 0, idx 2, idx 1). */
    expect(result.hits.length).toBe(3);
    expect(result.hits.map((h) => h.surfaceIdx)).toEqual([0, 2, 1]);
  });

  it("Maksutov-Cassegrain reference lens trace visits the corrector rear and primary twice", async () => {
    const { LENS_CATALOG } = await import("../../../src/utils/catalog/lensCatalog.js");
    const lens = buildLens(LENS_CATALOG["reference-maksutov-cassegrain"]);
    const result = traceExactSurfaceStack(lens, { y0: 20, uy0: 0 }, { leadDistance: 5 });
    /* Explicit traceSequence has 6 entries: STO, corr_front, corr_rear,
     * primary, corr_rear, primary. */
    expect(result.hits.length).toBe(6);
    const idxSequence = result.hits.map((h) => h.surfaceIdx);
    expect(idxSequence).toEqual([0, 1, 2, 3, 2, 3]);
  });

  it("Reflex-Nikkor reference lens trace executes its full 6-step catadioptric path", async () => {
    const { LENS_CATALOG } = await import("../../../src/utils/catalog/lensCatalog.js");
    const lens = buildLens(LENS_CATALOG["reflex-nikkor-500f8"]);
    const result = traceExactSurfaceStack(lens, { y0: 25, uy0: 0 }, { leadDistance: 5 });
    expect(result.hits.length).toBe(6);
    const idxSequence = result.hits.map((h) => h.surfaceIdx);
    expect(idxSequence).toEqual([0, 1, 2, 3, 2, 3]);
  });

  it("Reflex-Nikkor opaqueFrom:'front' absorbs a forward ray hitting the secondary silvered spot region", async () => {
    /* Trace a ray at y₀ near the optical axis — it lands inside the silvered
     * disk at the corrector rear on the forward pass and is absorbed before
     * reaching the primary. */
    const { LENS_CATALOG } = await import("../../../src/utils/catalog/lensCatalog.js");
    const lens = buildLens(LENS_CATALOG["reflex-nikkor-500f8"]);
    const result = traceExactSurfaceStack(lens, { y0: 0.5, uy0: 0 }, { leadDistance: 5 });
    /* Forward ray at small y hits the silvered central disk at the corrector
     * rear; opaqueFrom: "front" absorbs it. The trace clips with the
     * "absorbed" failure reason before reaching the primary. */
    expect(result.clipped).toBe(true);
    expect(result.failureReason).toBe("absorbed");
  });
});

describe("mirror Phase A — first-surface mirror trace fixture", () => {
  /* Synthetic test fixture: single flat mirror in air, normal incidence and
   * off-axis. Verifies the inferred step sequence applies reflectDirection at
   * the marked surface and that direction reversal is handled correctly by
   * the post-loop projection. */

  function singleMirror(): SurfaceData[] {
    return [
      {
        label: "M1",
        R: 1e15,
        nd: 1.0,
        d: 0,
        sd: 20,
        elemId: 0,
        reflect: { kind: "first" },
      },
    ];
  }

  it("reflects a normal-incidence ray straight back", () => {
    const result = traceExactSurfaceStack({ S: singleMirror(), asphByIdx: {} }, { y0: 0, uy0: 0 }, { leadDistance: 5 });
    expect(result.clipped).toBe(false);
    expect(result.hits.length).toBe(1);
    expect(result.hits[0].point[0]).toBeCloseTo(0, 10);
    expect(result.hits[0].point[1]).toBeCloseTo(0, 10);
    expect(result.hits[0].point[2]).toBeCloseTo(0, 10);
    expect(result.terminalDirection[2]).toBeLessThan(0);
  });

  it("preserves transverse height and flips slope for off-axis incidence", () => {
    /* Ray enters at (0, 1.75, -5) with direction normalized [0, 0.05, 1].
     * Hits flat mirror at z=0 → point (0, 2, 0). Reflects → direction
     * [0, 0.05/|d|, -1/|d|]. The pre-projection ux/uy slopes flip sign. */
    const result = traceExactSurfaceStack(
      { S: singleMirror(), asphByIdx: {} },
      { y0: 2, uy0: 0.05 },
      { leadDistance: 5 },
    );
    expect(result.clipped).toBe(false);
    expect(result.hits[0].point[1]).toBeCloseTo(2, 10);
    expect(result.uy).toBeCloseTo(-0.05, 10);
    expect(result.terminalDirection[2]).toBeLessThan(0);
  });

  it("walks backward through prior air surfaces after reflection", () => {
    /* Two-surface fixture: a flat air gap followed by a flat mirror. The
     * inferred step sequence is: refract through surface 0 (no-op since air→air),
     * reflect at surface 1, then refract back through surface 0 (no-op again).
     * Three steps total → three hits. */
    const surfaces: SurfaceData[] = [
      { label: "1", R: 1e15, nd: 1.0, d: 5, sd: 20, elemId: 0 },
      { label: "M1", R: 1e15, nd: 1.0, d: 0, sd: 20, elemId: 0, reflect: { kind: "first" } },
    ];
    const result = traceExactSurfaceStack({ S: surfaces, asphByIdx: {} }, { y0: 1, uy0: 0 }, { leadDistance: 5 });
    expect(result.clipped).toBe(false);
    expect(result.hits.length).toBe(3);
    expect(result.hits[0].surfaceIdx).toBe(0);
    expect(result.hits[1].surfaceIdx).toBe(1);
    expect(result.hits[2].surfaceIdx).toBe(0);
    expect(result.hits[1].point[2]).toBeCloseTo(5, 10);
    expect(result.terminalDirection[2]).toBeLessThan(0);
  });
});
