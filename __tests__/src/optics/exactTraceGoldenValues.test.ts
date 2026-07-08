import { describe, expect, it } from "vitest";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { solveChiefRay } from "../../../src/optics/fieldGeometry.js";
import { doLayout, traceRay, traceRayVector, traceSkewRay } from "../../../src/optics/optics.js";
import type { LensData, RuntimeLens } from "../../../src/types/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

/**
 * Golden-value trace regression suite.
 *
 * The catalog smoke test (exactTraceCatalog.test.ts) only asserts rays stay
 * finite and unclipped, so a systematic trace error — a flipped sign
 * convention, a wrong refraction law, a broken transfer — could stay green
 * across the whole catalog. This suite pins absolute numbers for a small set
 * of reference designs spanning design types: a double Gauss, a telephoto, a
 * projection-aware fisheye, and a folded mirror fixture.
 *
 * Values were captured from the verified exact-trace output (2026-07) and
 * sanity-checked against design nominals: each EFL sits at its patent value,
 * and the rectilinear marginal rays refocus within ~20 µm of the axis at the
 * paraxial image plane. If one of these assertions moves, the trace engine's
 * absolute behavior changed — do not simply re-pin without understanding why.
 */

interface GoldenLens {
  key: string;
  design: string;
  efl: number;
  epSD: number;
  stopPhysSD: number;
  imgZ: number;
  zLast: number;
  /** Meridional parallel ray launched at y0 = h from the first-surface plane. */
  marginal: { h: number; y: number; u: number };
  /** Axis-parallel skew ray launched at (x0, y0). */
  skew: { x0: number; y0: number; x: number; y: number; ux: number; uy: number };
}

const GOLDEN_LENSES: GoldenLens[] = [
  {
    key: "olympus-zuiko-auto-s-50f14",
    design: "double Gauss",
    efl: 49.994180757309714,
    epSD: 17.855064556182043,
    stopPhysSD: 11.813952547091576,
    imgZ: 81.345,
    zLast: 44.185,
    marginal: { h: 12.5, y: 9.58533019704501, u: -0.25841395919948856 },
    skew: {
      x0: 6,
      y0: 5,
      x: 4.512643107705916,
      y: 3.760535923088265,
      ux: -0.12164965741409134,
      uy: -0.10137471451174285,
    },
  },
  {
    key: "canon-fd-300mm-f4-ssc",
    design: "telephoto",
    efl: 299.5288015298516,
    epSD: 37.44110019123145,
    stopPhysSD: 16.852815472696278,
    imgZ: 242.48854,
    zLast: 126.21,
    marginal: { h: 26, y: 10.134889384645048, u: -0.08720040235172787 },
    skew: {
      x0: 12.48,
      y0: 10.4,
      x: 4.852659673068311,
      y: 4.043883060890261,
      ux: -0.041741593291062314,
      uy: -0.034784661075885154,
    },
  },
  {
    key: "nikon-fisheye-nikkor-6mm-f28",
    design: "fisheye (equidistant projection)",
    efl: 37.41323793170968,
    epSD: 1.125,
    stopPhysSD: 5.395191357117423,
    imgZ: 205.24259111597053,
    zLast: 167.58559111597054,
    marginal: { h: 0.75, y: 5.512901727374504, u: -0.017546482708249093 },
    skew: {
      x0: 0.36,
      y0: 0.3,
      x: 2.635146334408721,
      y: 2.1959552786739347,
      ux: -0.00920200349332682,
      uy: -0.0076683362444390545,
    },
  },
];

/**
 * Rectilinear designs where the parallel marginal ray must refocus close to
 * the axis at the paraxial image plane. The fisheye is excluded: its
 * projection-based geometry does not refocus a first-surface-parallel launch
 * at the data image plane, so it is pinned as a pure regression anchor only.
 */
const REFOCUS_BOUND_MM: Record<string, number> = {
  "olympus-zuiko-auto-s-50f14": 0.05,
  "canon-fd-300mm-f4-ssc": 0.05,
};

function buildCatalogLens(key: string): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...LENS_CATALOG[key] } as LensData);
}

describe("exact trace golden values — refractive designs", () => {
  it.each(GOLDEN_LENSES)("$key ($design) reproduces pinned first-order values", (g) => {
    const L = buildCatalogLens(g.key);
    const layout = doLayout(0, 0, L);

    expect(L.EFL).toBeCloseTo(g.efl, 6);
    expect(L.EP.epSD).toBeCloseTo(g.epSD, 6);
    expect(L.stopPhysSD).toBeCloseTo(g.stopPhysSD, 6);
    expect(layout.imgZ).toBeCloseTo(g.imgZ, 6);
    expect(layout.z[layout.z.length - 1]).toBeCloseTo(g.zLast, 6);
  });

  it.each(GOLDEN_LENSES)("$key ($design) reproduces the pinned marginal ray", (g) => {
    const L = buildCatalogLens(g.key);
    const layout = doLayout(0, 0, L);
    const trace = traceRay(g.marginal.h, 0, layout.z, 0, 0, L.stopPhysSD, true, L);

    expect(trace.clipped).toBe(false);
    // y and u are reported at the last-surface vertex plane.
    expect(trace.y).toBeCloseTo(g.marginal.y, 6);
    expect(trace.u).toBeCloseTo(g.marginal.u, 8);

    // Image-plane intercept: transfer the exit ray to the paraxial image.
    const yImg = trace.y + trace.u * (layout.imgZ - layout.z[layout.z.length - 1]);
    const expectedYImg = g.marginal.y + g.marginal.u * (g.imgZ - g.zLast);
    expect(yImg).toBeCloseTo(expectedYImg, 6);

    const refocusBound = REFOCUS_BOUND_MM[g.key];
    if (refocusBound !== undefined) {
      // A parallel axial ray must land near the axis at the image plane;
      // a sign-convention or refraction error would miss by millimeters.
      expect(Math.abs(yImg)).toBeLessThan(refocusBound);
    }
  });

  it.each(GOLDEN_LENSES)("$key ($design) reproduces the pinned skew ray", (g) => {
    const L = buildCatalogLens(g.key);
    const trace = traceSkewRay(g.skew.x0, g.skew.y0, 0, 0, 0, 0, L.stopPhysSD, true, L);

    expect(trace.clipped).toBe(false);
    expect(trace.x).toBeCloseTo(g.skew.x, 6);
    expect(trace.y).toBeCloseTo(g.skew.y, 6);
    expect(trace.ux).toBeCloseTo(g.skew.ux, 8);
    expect(trace.uy).toBeCloseTo(g.skew.uy, 8);

    // The launch is meridionally symmetric in x/y, so exit slopes must keep
    // the launch aspect ratio; a skew-axis mixup would break this exactly.
    expect(trace.ux / trace.uy).toBeCloseTo(g.skew.x0 / g.skew.y0, 8);
  });
});

describe("exact trace golden values — fisheye projection path", () => {
  const FISHEYE_KEY = "nikon-fisheye-nikkor-6mm-f28";

  it("solves bounding-sphere chief rays at pinned launch heights", () => {
    const L = buildCatalogLens(FISHEYE_KEY);

    const at30 = solveChiefRay(30, 0, 0, L);
    expect(at30.status).toBe("converged");
    expect(at30.launchSurface).toBe("bounding-sphere");
    expect(at30.yLaunch).toBeCloseTo(28.37371378565419, 6);

    const at60 = solveChiefRay(60, 0, 0, L);
    expect(at60.status).toBe("converged");
    expect(at60.launchSurface).toBe("bounding-sphere");
    expect(at60.yLaunch).toBeCloseTo(74.18746088976445, 6);
  });

  it("traces the solved 30° chief ray to a pinned image-plane intercept", () => {
    const L = buildCatalogLens(FISHEYE_KEY);
    const layout = doLayout(0, 0, L);
    const solve = solveChiefRay(30, 0, 0, L);
    expect(solve.vectorLaunch).toBeDefined();

    const launch = solve.vectorLaunch!;
    const trace = traceRayVector(
      { origin: launch.origin, direction: launch.direction, launchBoundT: launch.launchBoundT },
      layout.z,
      L.stopPhysSD,
      true,
      L,
      0,
      0,
    );

    expect(trace.clipped).toBe(false);
    expect(trace.y).toBeCloseTo(-4.518794533249658, 6);
    expect(trace.u).toBeCloseTo(-0.056031104436612474, 8);
    const yImg = trace.y + trace.u * (layout.imgZ - layout.z[layout.z.length - 1]);
    expect(yImg).toBeCloseTo(-6.628757833019174, 6);
  });
});

describe("exact trace golden values — folded mirror fixture", () => {
  const CASSEGRAIN_KEY = "reference-cassegrain-back-focus";

  it("reproduces pinned first-order values for the Cassegrain fixture", () => {
    const L = buildCatalogLens(CASSEGRAIN_KEY);
    const layout = doLayout(0, 0, L);

    // The fixture is an analytic design, so the EFL is exactly 100 mm.
    expect(L.EFL).toBeCloseTo(100, 9);
    expect(L.EP.epSD).toBeCloseTo(12.5, 9);
    expect(layout.imgZ).toBeCloseTo(135, 9);
  });

  it("reproduces the pinned folded marginal ray at the arbitrary image plane", () => {
    const L = buildCatalogLens(CASSEGRAIN_KEY);
    const layout = doLayout(0, 0, L);
    const trace = traceRay(12, 0, layout.z, 0, 0, L.stopPhysSD, true, L);

    expect(trace.clipped).toBe(false);
    expect(trace.reachedImagePlane).toBe(true);
    expect(trace.diagnostics?.hitSurfaceLabels).toEqual(["M1", "SEC"]);
    // For folded traces y is the terminal image-plane coordinate directly.
    expect(trace.y).toBeCloseTo(-7.864188976908572, 6);
    expect(trace.u).toBeCloseTo(-0.12065250327285527, 8);
  });

  it("reproduces the pinned folded skew ray", () => {
    const L = buildCatalogLens(CASSEGRAIN_KEY);
    const trace = traceSkewRay(7.2, 6, 0, 0, 0, 0, L.stopPhysSD, true, L);

    expect(trace.clipped).toBe(false);
    expect(trace.x).toBeCloseTo(-4.703425927404422, 6);
    expect(trace.y).toBeCloseTo(-3.91952160617035, 6);
    expect(trace.ux).toBeCloseTo(-0.07223817059579209, 8);
    expect(trace.uy).toBeCloseTo(-0.060198475496493396, 8);
    // Both mirrors invert the meridional coordinates but preserve the
    // launch aspect ratio between the skew planes.
    expect(trace.ux / trace.uy).toBeCloseTo(7.2 / 6, 8);
  });
});
