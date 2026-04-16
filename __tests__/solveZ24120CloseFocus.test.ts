/**
 * Close-focus solver for NIKKOR Z 24-120mm f/4 S.
 *
 * The patent (WO 2022/259649 A1) tabulates only infinity-focus spacings.
 * This script solves for close-focus group displacements (Δ5, Δ6) at each
 * zoom position, given the published spec (MFD = 0.35 m at all zooms).
 *
 * Unknowns:
 *   Δ5 — G5 displacement toward object (mm, positive = toward object)
 *   Δ6 — G6 displacement toward object (mm, positive = toward object)
 *
 * Gap changes:
 *   d21_close = d21_inf − Δ5       (G4 ↔ G5 gap)
 *   d25_close = d25_inf + Δ5 − Δ6  (G5 ↔ G6 gap)
 *   d27_close = d27_inf + Δ6       (G6 ↔ G7 gap)
 *
 * Single constraint + regularization (physical minimum-displacement):
 *   F1: paraxial axial ray from object @ 0.35 m focuses at image plane
 *   Reg: among all (Δ5, Δ6) satisfying F1 = 0, pick the minimum-norm solution
 *        (i.e. smallest combined group motion). This avoids unphysical
 *        cancellation (large Δ5 fighting large Δ6) when the two groups have
 *        similar focus sensitivity.
 *
 * Published spec: MFD = 0.35 m at all zoom positions; max MRR = 0.39× at
 * 120 mm. Zoom-ring marks: 24, 28, 35, 50, 70, 85, 120 mm.
 *
 * Run: npx vitest run __tests__/solveZ24120CloseFocus.test.ts --reporter=verbose
 */

import { describe, it, expect } from "vitest";
import buildLens from "../src/optics/buildLens.js";
import { traceSurfacesReal } from "../src/optics/internal/traceSurfaces.js";
import { buildStateSurfaces } from "../src/optics/internal/lensState.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import NikkorZ24120Raw from "../src/lens-data/NikonNikkorZ24120mmf4S.data.js";
import type { LensData, SurfaceData, AsphericCoefficients } from "../src/types/optics.js";

/* ── Configuration ── */
const IDX_D21 = 20; // gap "21" — between G4 and G5
const IDX_D25 = 24; // gap "25" — between G5 and G6
const IDX_D27 = 26; // gap "27A" — between G6 and G7
const IDX_LAST = 29; // gap "30" — back focal (image side of G7)

const MFD_MM = 350.0; // minimum focus distance (image plane to object)
const Y_PAR = 0.05; // mm — near-axis probe ray height (paraxial proxy)

/* Zoom positions to solve: focal lengths in mm (design values).
 * Chosen to span the zoom-ring marks (24, 28, 35, 50, 70, 85, 120 mm)
 * while using 24.7 and 116.5 as the endpoints matching the patent. */
const ZOOM_TARGETS = [24.7, 35.0, 50.0, 70.0, 85.0, 116.5];
const F_WIDE = 24.7;
const F_TELE = 116.5;

interface Residuals {
  f1: number;
}

interface SolveResult {
  fDesign: number;
  zoomT: number;
  delta5: number;
  delta6: number;
  d21_inf: number;
  d25_inf: number;
  d27_inf: number;
  d21_close: number;
  d25_close: number;
  d27_close: number;
  residuals: Residuals;
  magnification: number;
}

/**
 * Build a modified surface array with (Δ5, Δ6) applied.
 */
function modifiedSurfaces(
  S_inf: SurfaceData[],
  d21_inf: number,
  d25_inf: number,
  d27_inf: number,
  delta5: number,
  delta6: number,
): SurfaceData[] {
  const S = S_inf.map((s) => ({ ...s }));
  S[IDX_D21] = { ...S[IDX_D21], d: d21_inf - delta5 };
  S[IDX_D25] = { ...S[IDX_D25], d: d25_inf + delta5 - delta6 };
  S[IDX_D27] = { ...S[IDX_D27], d: d27_inf + delta6 };
  return S;
}

/**
 * Trace a ray from on-axis object point at (z = -objDistFromS1, y = 0),
 * passing through the first surface at height y0. Returns intercept at
 * the image plane (i.e., y at z = sum of all gaps).
 */
function rayInterceptAtImage(
  S: SurfaceData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  y0: number,
  objDistFromS1: number,
): number {
  const u0 = y0 / objDistFromS1; // slope from (-D, 0) to (0, y0)
  const tr = traceSurfacesReal(S, asphByIdx, y0, u0);
  if (!isFinite(tr.y) || !isFinite(tr.u)) return NaN;
  const dLast = S[IDX_LAST].d;
  return tr.y + dLast * tr.u;
}

/**
 * Single-scalar focus residual: on-axis paraxial ray should hit image plane at y=0.
 */
function focusResidual(
  S_inf: SurfaceData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  d21_inf: number,
  d25_inf: number,
  d27_inf: number,
  totalLensLength_inf: number,
  delta5: number,
  delta6: number,
): Residuals {
  const S = modifiedSurfaces(S_inf, d21_inf, d25_inf, d27_inf, delta5, delta6);
  const objDistFromS1 = MFD_MM - totalLensLength_inf;
  const f1 = rayInterceptAtImage(S, asphByIdx, Y_PAR, objDistFromS1);
  return { f1 };
}

const MIN_GAP = 0.5; // mm — mechanical clearance floor on any variable gap

/**
 * Constrained Newton solve with an additional equality constraint on the
 * G5↔G6 gap: d25_inf + Δ5 − Δ6 = dFixed  ⇒  Δ6 = Δ5 + (d25_inf − dFixed).
 * Reduces to a 1D Newton on Δ5 for focus.
 */
function solveDeltasWithD25Fixed(
  S_inf: SurfaceData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  d21_inf: number,
  d25_inf: number,
  d27_inf: number,
  d25Fixed: number,
): { delta5: number; delta6: number; residuals: Residuals } {
  const totalLensLength_inf = S_inf.reduce((acc, s) => acc + s.d, 0);
  const offset = d25_inf - d25Fixed; // Δ6 − Δ5 = offset
  const h = 1e-4;
  let delta5 = 0;
  const residAt = (d5: number) => {
    const d6 = d5 + offset;
    return focusResidual(S_inf, asphByIdx, d21_inf, d25_inf, d27_inf, totalLensLength_inf, d5, d6);
  };
  for (let iter = 0; iter < 80; iter++) {
    const F = residAt(delta5);
    if (!isFinite(F.f1)) throw new Error(`non-finite at iter=${iter}, d25Fixed`);
    if (Math.abs(F.f1) < 1e-9) break;
    const Fp = residAt(delta5 + h);
    const deriv = (Fp.f1 - F.f1) / h;
    if (Math.abs(deriv) < 1e-15) break;
    let alpha = 1.0;
    const step = F.f1 / deriv;
    for (let t = 0; t < 15; t++) {
      const d5try = delta5 - alpha * step;
      const Ftry = residAt(d5try);
      if (isFinite(Ftry.f1) && Math.abs(Ftry.f1) < Math.abs(F.f1)) {
        delta5 = d5try;
        break;
      }
      alpha *= 0.5;
    }
  }
  return { delta5, delta6: delta5 + offset, residuals: residAt(delta5) };
}

/**
 * Minimum-norm solver for (Δ5, Δ6) satisfying focus residual = 0.
 *
 * Method: steepest-descent/ascent along the gradient of f1, then project
 * back onto the f1=0 level curve each iteration. This traces the path of
 * minimum cumulative displacement, producing a physically plausible motion
 * (neither group moves more than necessary for focus).
 *
 * Mathematical justification: among all (Δ5, Δ6) with f1(Δ)=0, the solution
 * closest to origin is reached by moving purely along ∇f1 (the normal to the
 * f1=0 curve passes through origin only at that nearest point).
 */
function solveDeltas(
  S_inf: SurfaceData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  d21_inf: number,
  d25_inf: number,
  d27_inf: number,
): { delta5: number; delta6: number; residuals: Residuals } {
  const totalLensLength_inf = S_inf.reduce((acc, s) => acc + s.d, 0);
  const h = 1e-4;
  const maxIter = 200;
  const tol = 1e-9;
  let delta5 = 0;
  let delta6 = 0;

  // Compute gradient at origin (fixes the direction of minimum-norm solution)
  const F0 = focusResidual(S_inf, asphByIdx, d21_inf, d25_inf, d27_inf, totalLensLength_inf, 0, 0);
  const F0p5 = focusResidual(S_inf, asphByIdx, d21_inf, d25_inf, d27_inf, totalLensLength_inf, h, 0);
  const F0p6 = focusResidual(S_inf, asphByIdx, d21_inf, d25_inf, d27_inf, totalLensLength_inf, 0, h);
  const g5_init = (F0p5.f1 - F0.f1) / h;
  const g6_init = (F0p6.f1 - F0.f1) / h;
  const gNorm_init = Math.hypot(g5_init, g6_init);
  if (gNorm_init < 1e-12) throw new Error("zero gradient at origin — solver cannot proceed");

  // Initial step along −∇f1 / ||∇f1||²  (Newton step in 1D along gradient)
  const stepScale_init = -F0.f1 / (gNorm_init * gNorm_init);
  delta5 = stepScale_init * g5_init;
  delta6 = stepScale_init * g6_init;

  // Iterate: Newton corrections along current gradient direction, re-projecting
  // each step to stay on the minimum-norm manifold. For a smooth nonlinear f1,
  // this converges to the nearest point on f1=0.
  for (let iter = 0; iter < maxIter; iter++) {
    const F = focusResidual(S_inf, asphByIdx, d21_inf, d25_inf, d27_inf, totalLensLength_inf, delta5, delta6);
    if (!isFinite(F.f1)) throw new Error(`non-finite residual at iter=${iter}, Δ5=${delta5}, Δ6=${delta6}`);
    if (Math.abs(F.f1) < tol) break;

    const Fp5 = focusResidual(S_inf, asphByIdx, d21_inf, d25_inf, d27_inf, totalLensLength_inf, delta5 + h, delta6);
    const Fp6 = focusResidual(S_inf, asphByIdx, d21_inf, d25_inf, d27_inf, totalLensLength_inf, delta5, delta6 + h);
    const g5 = (Fp5.f1 - F.f1) / h;
    const g6 = (Fp6.f1 - F.f1) / h;
    const gNorm = Math.hypot(g5, g6);
    if (gNorm < 1e-12) break;

    // Pure gradient-direction Newton step (normal to f1=0)
    const t = -F.f1 / (gNorm * gNorm);
    const step5 = t * g5;
    const step6 = t * g6;

    // Damping
    let alpha = 1.0;
    const oldNorm = Math.abs(F.f1);
    for (let trial = 0; trial < 15; trial++) {
      const d5try = delta5 + alpha * step5;
      const d6try = delta6 + alpha * step6;
      const Ftry = focusResidual(S_inf, asphByIdx, d21_inf, d25_inf, d27_inf, totalLensLength_inf, d5try, d6try);
      if (isFinite(Ftry.f1) && Math.abs(Ftry.f1) < oldNorm) {
        delta5 = d5try;
        delta6 = d6try;
        break;
      }
      alpha *= 0.5;
    }
  }
  return {
    delta5,
    delta6,
    residuals: focusResidual(S_inf, asphByIdx, d21_inf, d25_inf, d27_inf, totalLensLength_inf, delta5, delta6),
  };
}

/**
 * Estimate lateral magnification using two real rays from off-axis object.
 * Not a constraint — diagnostic only.
 */
function estimateMagnification(
  S: SurfaceData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  objDistFromS1: number,
): number {
  const h_obj = 5.0; // object height in mm
  // Launch two rays from (y=h_obj, z=-D) that pass through S1 at different y
  // Chief-ray-like: passes through S1 at y=0 (near pupil center approximation)
  // Marginal-ish: passes through S1 at small height
  // From object point at (h_obj, -D), a ray going to (y_s1, 0) has slope:
  //   u = (y_s1 - h_obj) / D
  // At S1: y = y_s1, u as above
  const trace = (y_s1: number) => {
    const u0 = (y_s1 - h_obj) / objDistFromS1;
    const tr = traceSurfacesReal(S, asphByIdx, y_s1, u0);
    return tr.y + S[IDX_LAST].d * tr.u;
  };
  const y_image_lo = trace(0.3);
  const y_image_hi = trace(-0.3);
  const y_image_avg = (y_image_lo + y_image_hi) / 2;
  return y_image_avg / h_obj; // negative for real image (inverted)
}

describe("Nikkor Z 24-120 close-focus solver", () => {
  const lensData = { ...LENS_DEFAULTS, ...NikkorZ24120Raw } as LensData;
  const L = buildLens(lensData);

  it("solves (Δ5, Δ6) at each target zoom position", () => {
    const results: SolveResult[] = [];

    for (const fDesign of ZOOM_TARGETS) {
      // Map focal length → zoomT via linear interpolation between wide/tele
      const zoomT = (fDesign - F_WIDE) / (F_TELE - F_WIDE);

      // Base surfaces with infinity gaps at this zoomT (engine interpolates)
      const S_inf = buildStateSurfaces(L.S as unknown as SurfaceData[], L.varByIdx, true, 0, zoomT);
      const d21_inf = S_inf[IDX_D21].d;
      const d25_inf = S_inf[IDX_D25].d;
      const d27_inf = S_inf[IDX_D27].d;

      let { delta5, delta6, residuals: R } = solveDeltas(S_inf, L.asphByIdx, d21_inf, d25_inf, d27_inf);

      let d21_close = d21_inf - delta5;
      let d25_close = d25_inf + delta5 - delta6;
      let d27_close = d27_inf + delta6;

      // If any gap falls below the mechanical clearance, constrain and resolve.
      // The G5↔G6 gap (d25) is the binding constraint in this design at tele.
      if (d25_close < MIN_GAP) {
        ({
          delta5,
          delta6,
          residuals: R,
        } = solveDeltasWithD25Fixed(S_inf, L.asphByIdx, d21_inf, d25_inf, d27_inf, MIN_GAP));
        d21_close = d21_inf - delta5;
        d25_close = d25_inf + delta5 - delta6;
        d27_close = d27_inf + delta6;
      }

      // Diagnostic: magnification at close focus
      const S_close = modifiedSurfaces(S_inf, d21_inf, d25_inf, d27_inf, delta5, delta6);
      const totalLen = S_inf.reduce((a, s) => a + s.d, 0);
      const mag = estimateMagnification(S_close, L.asphByIdx, MFD_MM - totalLen);

      results.push({
        fDesign,
        zoomT,
        delta5,
        delta6,
        d21_inf,
        d25_inf,
        d27_inf,
        d21_close,
        d25_close,
        d27_close,
        residuals: R,
        magnification: mag,
      });
    }

    /* ── Pretty-print results table ── */
    console.log("\n=== NIKKOR Z 24-120 CLOSE-FOCUS SOLVE ===");
    console.log("(MFD = 0.35 m from image plane, all zoom positions)\n");
    console.log("f(mm)  zoomT  Δ5(mm)   Δ6(mm)   d21_inf  d21_cl   d25_inf  d25_cl   d27_inf  d27_cl   |F|        mag");
    for (const r of results) {
      const norm = Math.abs(r.residuals.f1);
      console.log(
        `${r.fDesign.toFixed(1).padStart(5)}  ` +
          `${r.zoomT.toFixed(3)}  ` +
          `${r.delta5.toFixed(3).padStart(7)}  ${r.delta6.toFixed(3).padStart(7)}  ` +
          `${r.d21_inf.toFixed(3).padStart(7)}  ${r.d21_close.toFixed(3).padStart(7)}  ` +
          `${r.d25_inf.toFixed(3).padStart(7)}  ${r.d25_close.toFixed(3).padStart(7)}  ` +
          `${r.d27_inf.toFixed(3).padStart(7)}  ${r.d27_close.toFixed(3).padStart(7)}  ` +
          `${norm.toExponential(2)}  ${r.magnification.toFixed(4)}`,
      );
    }

    /* ── Emit var-table snippets for pasting into the data file ── */
    console.log("\n=== VAR-TABLE VALUES (for lens data file) ===");
    const names = ["21", "25", "27A"];
    const arrs = [
      results.map((r) => [r.d21_inf, r.d21_close]),
      results.map((r) => [r.d25_inf, r.d25_close]),
      results.map((r) => [r.d27_inf, r.d27_close]),
    ];
    for (let i = 0; i < names.length; i++) {
      const rows = arrs[i].map(([inf, cl]) => `  [${inf.toFixed(3)}, ${cl.toFixed(3)}],`).join("\n");
      console.log(`"${names[i]}": [\n${rows}\n],`);
    }

    /* ── Assertions (sanity) ── */
    for (const r of results) {
      expect(Math.abs(r.residuals.f1), `f=${r.fDesign}mm`).toBeLessThan(1e-4);
      // All close-focus gaps must stay positive (mechanical clearance)
      expect(r.d21_close, `d21 at f=${r.fDesign}`).toBeGreaterThan(0.2);
      expect(r.d25_close, `d25 at f=${r.fDesign}`).toBeGreaterThan(0.2);
      expect(r.d27_close, `d27 at f=${r.fDesign}`).toBeGreaterThan(0.2);
    }
  });
});
