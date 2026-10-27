/**
 * The vignetting tab as OpticStudio shows it: one lattice on the real stop per field, the share of its rays that reach
 * the image, and Rimmer's relative illumination. Closed forms are derived in the tests themselves.
 */

import { describe, it, expect } from "vitest";
import { constructionFixtureData } from "../../constructionFixtures.js";
import {
  computeVignettingCurve,
  computeVignettingField,
  vignettingStopLattice,
} from "../../../../../src/optics/analysis/vignetting/vignetting.js";
import {
  prepareAimedPupilLaunch,
  prepareAimedPupilTrace,
} from "../../../../../src/optics/analysis/pupils/aimedPupil.js";
import { computeOffAxisFieldGeometry } from "../../../../../src/optics/analysis/aberration/offAxis.js";
import { computeAnalysisFieldGeometryAtState } from "../../../../../src/optics/state/fieldAdapters.js";
import { doLayoutForRuntimeLens as doLayout } from "../../../../../src/optics/state/runtimeAdapters.js";
import MinoltaSTFRaw from "../../../../../src/lens-data/minolta/MinoltaSTF135mmf28T45.data.js";
import CanonEF135Raw from "../../../../../src/lens-data/canon/CanonEF135mmf2LUSM.data.js";
import FisheyeRaw from "../../../../../src/lens-data/olympus/OlympusMZuiko8mmf18FisheyePRO.data.js";
import SonyFE20Raw from "../../../../../src/lens-data/sony/SonyFE20mmf18G.data.js";
import SonnarRaw from "../../../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import { CATALOG_CONSTRUCTION_FIXTURES } from "../../constructionFixtures.js";
import {
  analysisRequestAt,
  apertureAt,
  build,
  buildSimplePositiveElementLens,
  sharedNikkorZ70200,
  sharedSonnar50f15,
} from "../../testLensFixtures.js";
import type { LensData, RuntimeLens, SurfaceData } from "../../../../../src/types/optics.js";

/* ── Fixtures ── */

/** A fixture lens with the given surfaces, built on the simple singlet's catalog data. */
function lensWith(key: string, surfaces: SurfaceData[], extra: Partial<LensData> = {}): RuntimeLens {
  return build({ ...constructionFixtureData(buildSimplePositiveElementLens()), key, surfaces, ...extra });
}

/** A plano-convex singlet with the stop 20 mm behind it and rims far outside its beams. */
function stopBehindLens(): RuntimeLens {
  return lensWith("test-vignetting-stop-behind", [
    { label: "1", R: 50, nd: 1.5168, sd: 20, d: 5, elemId: 1 },
    { label: "2", R: 1e15, nd: 1, sd: 20, d: 20, elemId: 0 },
    { label: "STO", R: 1e15, nd: 1, sd: 5, d: 40, elemId: 0 },
  ]);
}

const radians = (deg: number) => (deg * Math.PI) / 180;

describe("vignettingStopLattice", () => {
  it("keeps the cells whose centre lies in the unit disc, with exact mirror columns", () => {
    for (const n of [4, 48, 64]) {
      const lattice = vignettingStopLattice(n);
      const all = Array.from({ length: n * n }, (_, i) => [
        (2 * (i % n) + 1 - n) / n,
        (2 * Math.floor(i / n) + 1 - n) / n,
      ]);
      expect(lattice).toHaveLength(all.filter(([x, y]) => x * x + y * y <= 1).length);
      for (const cell of lattice) {
        expect(cell.weight).toBe(1 / lattice.length);
        const mirror = lattice.find((other) => other.row === cell.row && other.column === n - 1 - cell.column)!;
        expect(mirror.xFraction).toBe(-cell.xFraction);
        expect(mirror.yFraction).toBe(cell.yFraction);
      }
    }
  });
});

describe("computeVignettingCurve", () => {
  it("reads exactly 1 at every field no aperture vignettes", () => {
    const L = stopBehindLens();
    const curve = computeVignettingCurve(analysisRequestAt(L, { currentEPSD: 3, currentPhysStopSD: 2 }));
    expect(curve.available).toBe(true);
    expect(curve.samples.at(-1)!.fieldAngleDeg).toBeGreaterThan(5);
    for (const sample of curve.samples) {
      expect(sample.unvignettedFraction).toBe(1);
      expect(sample.transmittedCount).toBe(sample.sampleCount);
    }
  });

  it("follows cos⁴θ with the stop at a thin, slow element, within the lattice's and the element's bounds", () => {
    // A 0.05 mm biconvex element of focal length D ≈ 97 mm, the stop 1 µm ahead of it at a = 0.25 mm: the exit pupil
    // is the stop, so the image point at field θ sees it at cos⁴θ. Two terms bound the difference:
    //   - the lattice: Rimmer's integrand varies across the pupil by about 2(a/D)tanθ, which the same symmetric cell
    //     set at every field weighs unevenly only within a cell width h of its rim: h · 2(a/D)tanθ;
    //   - the element: its thickness t moves the image-side chief by about t·tanθ/D, and cos⁴ moves with it by
    //     4 sinθ cos³θ · t·tanθ/D.
    const [a, t, D] = [0.25, 0.05, 96.7];
    const L = lensWith("test-vignetting-thin-element", [
      { label: "STO", R: 1e15, nd: 1, sd: 3, d: 0.001, elemId: 0 },
      { label: "1", R: 100, nd: 1.5168, sd: 1, d: t, elemId: 1 },
      { label: "2", R: -100, nd: 1, sd: 1, d: D, elemId: 0 },
    ]);
    const curve = computeVignettingCurve(analysisRequestAt(L, { currentEPSD: a, currentPhysStopSD: a }));
    const h = 2 / curve.cellsAcross;
    expect(curve.samples.at(-1)!.fieldAngleDeg).toBeGreaterThan(10);
    for (const sample of curve.samples) {
      const theta = radians(sample.fieldAngleDeg);
      const bound =
        h * 2 * (a / D) * Math.tan(theta) + 4 * Math.sin(theta) * Math.cos(theta) ** 3 * ((t * Math.tan(theta)) / D);
      expect(sample.unvignettedFraction).toBe(1);
      expect(Math.abs(sample.relativeIllumination! - Math.cos(theta) ** 4)).toBeLessThanOrEqual(bound + 1e-12);
    }
  });

  it("counts a two-aperture beam as the overlap of two discs", () => {
    // The stop (radius R) is the first surface and a second aperture of the same radius sits Δ behind it in air, so a
    // collimated field's beam reaches it as the stop disc shifted by s = Δ·tanθ. The share that passes is the lattice
    // cells inside both discs, exactly; the discs' overlap area, (2/π)(acos(σ/2) − (σ/2)√(1 − σ²/4)) at σ = s/R, is
    // that count's limit, within the cells a band of one cell's diagonal around the overlap's edge can hold.
    const [R, gap] = [2, 10];
    const L = lensWith("test-vignetting-two-apertures", [
      { label: "STO", R: 1e15, nd: 1, sd: R, d: gap, elemId: 0 },
      { label: "A", R: 1e15, nd: 1, sd: R, d: 1, elemId: 0 },
      { label: "1", R: 50, nd: 1.5168, sd: 12, d: 5, elemId: 1 },
      { label: "2", R: -50, nd: 1, sd: 12, d: 45, elemId: 0 },
    ]);
    const request = analysisRequestAt(L, { currentEPSD: R, currentPhysStopSD: R });
    const curve = computeVignettingCurve(request);
    const lattice = vignettingStopLattice(curve.cellsAcross);
    const h = 2 / curve.cellsAcross;
    let partial = 0;
    for (const sample of curve.samples) {
      const field = computeVignettingField(request, sample.fieldFraction);
      const direction = field.cells.find((cell) => cell.ray.status === "aimed")!.ray.direction!;
      const sigma = (gap * (direction[1] / direction[2])) / R;
      // Cells whose centre lies within 1e-9 of the second rim are the tracer's call; every other one is exact.
      const inside = lattice.filter((cell) => Math.hypot(cell.xFraction, cell.yFraction + sigma) < 1 - 1e-9).length;
      const edge = lattice.filter((cell) => Math.abs(Math.hypot(cell.xFraction, cell.yFraction + sigma) - 1) <= 1e-9);
      expect(sample.transmittedCount).toBeGreaterThanOrEqual(inside);
      expect(sample.transmittedCount).toBeLessThanOrEqual(inside + edge.length);
      const half = Math.min(Math.abs(sigma) / 2, 1);
      const overlap = (2 / Math.PI) * (Math.acos(half) - half * Math.sqrt(1 - half * half));
      const perimeter = 4 * Math.acos(half);
      expect(Math.abs(sample.unvignettedFraction! - overlap)).toBeLessThanOrEqual(
        (Math.SQRT2 * h * perimeter) / Math.PI,
      );
      if (overlap > 0.05 && overlap < 0.95) partial++;
    }
    expect(partial).toBeGreaterThan(1);
  });

  it("reports a field whose cell map folds in cosine space as unavailable, never a number", () => {
    // The stop near the front focal plane puts the exit pupil about 7.5 m away, so each ray's cosine is close to its own
    // exit direction. A4 = 2e-4 on the rear surface turns the exit slope back across the beam: cells there reverse
    // orientation (−6 times the median area), where A4 = 0 keeps every cell within 0.3 % of the median.
    const L = lensWith(
      "test-vignetting-folded-cosines",
      [
        { label: "STO", R: 1e15, nd: 1, sd: 4, d: 95, elemId: 0 },
        { label: "1", R: 100, nd: 1.5168, sd: 8, d: 3, elemId: 1 },
        { label: "2A", R: -100, nd: 1, sd: 8, d: 95, elemId: 0 },
      ],
      { asph: { "2A": { K: 0, A4: 2e-4, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } } } as Partial<LensData>,
    );
    const curve = computeVignettingCurve(analysisRequestAt(L, { currentEPSD: 4, currentPhysStopSD: 4 }));
    expect(curve.available).toBe(true);
    const axis = curve.samples[0];
    expect(axis.relativeIlluminationReason).toBe("cosine-map-folds");
    expect(axis.relativeIllumination).toBeNull();
    expect(axis.unvignettedFraction).toBe(1);
    // The same system without the A4 term has a figure.
    const plain = lensWith("test-vignetting-unfolded-cosines", [
      { label: "STO", R: 1e15, nd: 1, sd: 4, d: 95, elemId: 0 },
      { label: "1", R: 100, nd: 1.5168, sd: 8, d: 3, elemId: 1 },
      { label: "2", R: -100, nd: 1, sd: 8, d: 95, elemId: 0 },
    ]);
    const plainAxis = computeVignettingCurve(analysisRequestAt(plain, { currentEPSD: 4, currentPhysStopSD: 4 }))
      .samples[0];
    expect(plainAxis.relativeIlluminationReason).toBeNull();
    expect(plainAxis.relativeIllumination).toBe(1);
  });

  it("refers each ray to the image point when the exit pupil lies beyond the image plane", () => {
    // The stop 300 mm ahead of a 194 mm singlet images 354 mm past the image plane, so each ray's pupil-side crossing
    // of the reference sphere comes after the image point. Taken there and oriented along the ray, the referred
    // direction stays within the ray's tiny aberration of its own; the wrong crossing or orientation would point it
    // back, about 2 away.
    const L = lensWith("test-vignetting-pupil-beyond-image", [
      { label: "STO", R: 1e15, nd: 1, sd: 3, d: 300, elemId: 0 },
      { label: "1", R: 200, nd: 1.5168, sd: 40, d: 10, elemId: 1 },
      { label: "2", R: -200, nd: 1, sd: 40, d: 190, elemId: 0 },
    ]);
    const request = analysisRequestAt(L, { currentEPSD: 0.25, currentPhysStopSD: 0.25 });
    const curve = computeVignettingCurve(request);
    for (const sample of curve.samples) {
      expect(sample.relativeIlluminationReason).toBeNull();
      const field = computeVignettingField(request, sample.fieldFraction);
      expect(field.imagePoint![2] + field.referenceRadiusMm!).toBeLessThan(
        request.preparedGeometry.z[L.N - 1] + L.xpZRelLastSurf + 1,
      );
      for (const cell of field.cells.filter((entry) => entry.transmitted))
        expect(cell.referredDeviation!).toBeLessThan(1e-3);
    }
  });

  it("takes the exit pupil from the state itself where a zoom's pupil passes through infinity", () => {
    // Between the G9X's middle and long stations the exit pupil swings from metres behind the lens to metres in front:
    // the station table's straight line through −186 and +204 mm puts it beside the last surface instead. Traced at the
    // state, the reference sphere is metres across and the edge reads as the stations either side do.
    const L = build(CATALOG_CONSTRUCTION_FIXTURES["canon-powershot-g9x"]);
    const edgeAt = (zoomT: number) => {
      const request = analysisRequestAt(L, { zoomT, ...apertureAt(L, zoomT, 0) });
      const edge = computeVignettingCurve(request).samples.at(-1)!;
      return { edge, field: computeVignettingField(request, edge.fieldFraction) };
    };
    const [before, pole, after] = [edgeAt(0.735), edgeAt(0.74), edgeAt(0.745)];
    expect(pole.field.referenceRadiusMm!).toBeGreaterThan(1000);
    expect(pole.edge.relativeIlluminationReason).toBeNull();
    expect(Math.abs(pole.edge.relativeIllumination! - before.edge.relativeIllumination!)).toBeLessThan(0.01);
    expect(Math.abs(pole.edge.relativeIllumination! - after.edge.relativeIllumination!)).toBeLessThan(0.01);
  });

  it("gives no relative illumination where the rays do not localize at the image point", () => {
    // An f/1.1 biconvex singlet with the stop at its front: spherical aberration sends the marginal rays more than 5 %
    // of the exit-pupil distance from the paraxial image point, where Rimmer's referred directions no longer apply.
    // Stopped to f/1.4 the same lens's rays stay within 3 %.
    const L = lensWith("test-vignetting-unlocalized", [
      { label: "STO", R: 1e15, nd: 1, sd: 30, d: 0.5, elemId: 0 },
      { label: "1", R: 50, nd: 1.5168, sd: 30, d: 22, elemId: 1 },
      { label: "2", R: -50, nd: 1, sd: 30, d: 35, elemId: 0 },
    ]);
    const axisAt = (stop: number) =>
      computeVignettingCurve(analysisRequestAt(L, { currentEPSD: stop, currentPhysStopSD: stop })).samples[0];
    const fastCurve = computeVignettingCurve(analysisRequestAt(L, { currentEPSD: 22, currentPhysStopSD: 22 })).samples;
    const fast = fastCurve[0];
    expect(fast.relativeIlluminationReason).toBe("rays-not-localized");
    // Each off-axis field fails on its own, or for want of the axis's figure: none has a relative illumination.
    for (const sample of fastCurve.slice(1)) {
      expect(sample.relativeIllumination).toBeNull();
      expect(["rays-not-localized", "axis-unavailable"]).toContain(sample.relativeIlluminationReason);
    }
    expect(fast.relativeIllumination).toBeNull();
    expect(fast.unvignettedFraction).not.toBeNull();
    expect(axisAt(18).relativeIllumination).toBe(1);
  });

  it("reads 1 on the axis unless an aperture clips the axial beam, where it is that aperture's share", () => {
    // Clear: the Sony FE 20 mm wide open passes its whole axial beam.
    const sony = build(SonyFE20Raw);
    expect(computeVignettingCurve(analysisRequestAt(sony, apertureAt(sony, 0, 0))).samples[0].unvignettedFraction).toBe(
      1,
    );
    // Clipped: a 5 mm stop 1 mm ahead of a singlet whose front rim is 3 mm. Collimated axial rays reach the front
    // surface at their stop height, so only the cells within 3/5 of the stop pass, and the front rim (surface 1) is
    // what stops the others.
    const L = buildSimplePositiveElementLens("test-vignetting-axis-clipped", { elementSd: 3 });
    const request = analysisRequestAt(L, { currentEPSD: 5, currentPhysStopSD: 5 });
    const axis = computeVignettingField(request, 0);
    const lattice = vignettingStopLattice(axis.cellsAcross);
    expect(axis.transmittedCount).toBe(
      lattice.filter((cell) => Math.hypot(cell.xFraction, cell.yFraction) <= 0.6).length,
    );
    expect(axis.unvignettedFraction).toBeLessThan(1);
    const launch = prepareAimedPupilLaunch(
      request,
      lattice,
      computeOffAxisFieldGeometry(request.preparedGeometry, 0)!,
    )!;
    const trace = prepareAimedPupilTrace(request.preparedGeometry, launch);
    for (const cell of axis.cells.filter((entry) => !entry.transmitted)) {
      expect(
        trace.engine(launch.rays[cell.cell.index] as Parameters<typeof trace.engine>[0]).terminalSurfaceIndex,
      ).toBe(1);
    }
  });

  it("counts blocked samples as vignetted and leaves unaimed ones out of both counts", () => {
    // Blocked: the biconvex element's spheres meet 8.7 mm out, past its 5 mm rims, and the 8 mm stop's rim needs
    // about 10.8 mm there; the rays toward it leave the element's rim first.
    const blockedLens = lensWith("test-vignetting-blocked", [
      { label: "1", R: 20, nd: 1.5168, sd: 5, d: 4, elemId: 1 },
      { label: "2", R: -20, nd: 1, sd: 5, d: 5, elemId: 0 },
      { label: "STO", R: 1e15, nd: 1, sd: 8, d: 40, elemId: 0 },
    ]);
    const blocked = computeVignettingField(analysisRequestAt(blockedLens, { currentEPSD: 8, currentPhysStopSD: 8 }), 0);
    expect(blocked.blockedCount).toBeGreaterThan(0);
    for (const cell of blocked.cells.filter((entry) => entry.ray.status === "blocked"))
      expect(cell.transmitted).toBe(false);
    // Blocked samples stay in the denominator; the few unaimed ones at the rim leave it.
    expect(blocked.unaimedCount).toBeLessThanOrEqual(0.01 * blocked.sampleCount);
    expect(blocked.unvignettedFraction).toBe(blocked.transmittedCount / (blocked.sampleCount - blocked.unaimedCount));

    // Unaimed: in n = 1.9 glass, rays above 4.2 mm meet the 8 mm rear sphere past the critical angle, so no ray
    // reaches the stop's outer zone 2 mm behind it. A stop just past the reachable radius leaves a thin unaimed ring.
    const tir = lensWith(
      "test-vignetting-unaimed",
      [
        { label: "1", R: 1e15, nd: 1.9, sd: 7, d: 8, elemId: 1 },
        { label: "2", R: -8, nd: 1, sd: 7, d: 2, elemId: 0 },
        { label: "STO", R: 1e15, nd: 1, sd: 2, d: 40, elemId: 0 },
      ],
      { elements: [{ ...constructionFixtureData(buildSimplePositiveElementLens()).elements[0], nd: 1.9 }] },
    );
    const fieldAt = (stop: number) =>
      computeVignettingField(analysisRequestAt(tir, { currentEPSD: stop, currentPhysStopSD: stop }), 0);
    const reach = Math.max(
      ...fieldAt(2)
        .cells.filter((cell) => cell.ray.status === "aimed")
        .map((cell) => Math.hypot(cell.cell.xFraction, cell.cell.yFraction) * 2),
    );
    const few = fieldAt(reach / 0.997);
    expect(few.unaimedCount).toBeGreaterThan(0);
    expect(few.unaimedCount).toBeLessThanOrEqual(0.01 * few.sampleCount);
    expect(few.unvignettedFraction).toBe(few.transmittedCount / (few.sampleCount - few.unaimedCount));
    const many = fieldAt(2);
    expect(many.unaimedCount).toBeGreaterThan(0.01 * many.sampleCount);
    expect(many.unvignettedFraction).toBeNull();
    expect(many.unavailableReason).toBe("too-many-unaimed");
  });

  it("returns a field's rays and cells bit for bit, alone or in the curve, in any order", () => {
    const L = sharedSonnar50f15();
    const request = analysisRequestAt(L, apertureAt(L, 0, 0));
    const curve = computeVignettingCurve(request);
    const fractions = curve.samples.map((sample) => sample.fieldFraction);
    const forward = fractions.map((fraction) => computeVignettingField(request, fraction));
    const backward = [...fractions]
      .reverse()
      .map((fraction) => computeVignettingField(request, fraction))
      .reverse();
    expect(backward).toEqual(forward);
    // A fresh state gives the same figures: nothing rides on a cache beyond the launch's.
    const cold = computeVignettingCurve(analysisRequestAt(build(SonnarRaw), apertureAt(L, 0, 0)));
    expect(cold.samples).toEqual(curve.samples);
    forward.forEach((field, i) => {
      expect(field.unvignettedFraction).toBe(curve.samples[i].unvignettedFraction);
      expect(field.rimmerSum! / forward[0].rimmerSum!).toBe(curve.samples[i].relativeIllumination);
      // The launch a cross-checker makes from the exported lattice gives the same rays.
      const geometry = computeOffAxisFieldGeometry(
        request.preparedGeometry,
        field.fieldFraction,
        computeAnalysisFieldGeometryAtState(0, 0, L, 0),
      )!;
      const launch = prepareAimedPupilLaunch(request, vignettingStopLattice(field.cellsAcross), geometry)!;
      expect(field.cells.map((cell) => cell.ray)).toEqual(launch.rays);
    });
    // Each −px cell is its +px partner's mirror image: traced on its own, its ray does what the mirror says it does.
    const edge = forward.at(-1)!;
    expect(edge.mirrored).toBe(true);
    const geometry = computeOffAxisFieldGeometry(
      request.preparedGeometry,
      edge.fieldFraction,
      computeAnalysisFieldGeometryAtState(0, 0, L, 0),
    )!;
    const launch = prepareAimedPupilLaunch(request, vignettingStopLattice(edge.cellsAcross), geometry)!;
    const trace = prepareAimedPupilTrace(request.preparedGeometry, launch);
    let mirroredCells = 0;
    for (const cell of edge.cells.filter((entry) => entry.cell.xFraction < 0 && entry.ray.status === "aimed")) {
      const result = trace.engine(cell.ray as Parameters<typeof trace.engine>[0]);
      expect(result.status === "ok").toBe(cell.transmitted);
      if (!cell.transmitted) continue;
      mirroredCells++;
      expect(Math.abs(result.terminalDirection[0] - cell.exitDirectionCosines![0])).toBeLessThan(1e-12);
      expect(Math.abs(result.terminalDirection[1] - cell.exitDirectionCosines![1])).toBeLessThan(1e-12);
    }
    expect(mirroredCells).toBeGreaterThan(100);
  });

  it("reads exactly 1 where a wholly transmitted retrofocus beam's old launch-area figure exceeded 1", () => {
    // At f/8 the Sony FE 20 mm's 47° beam is wholly transmitted; the old launch-area figure read 1.33 there.
    const L = build(SonyFE20Raw);
    const curve = computeVignettingCurve(
      analysisRequestAt(L, { ...apertureAt(L, 0, 0.6), sampling: { vignettingFieldSampleCount: 3 } }),
    );
    expect(curve.samples.at(-1)!.fieldAngleDeg).toBeGreaterThan(45);
    for (const sample of curve.samples) expect(sample.unvignettedFraction).toBeLessThanOrEqual(1);
    expect(curve.samples.at(-1)!.unvignettedFraction).toBe(1);
  });

  it("applies the Minolta STF apodizer to relative illumination without changing the vignetting curve", () => {
    const stf = build(MinoltaSTFRaw);
    const transparent = build({
      ...MinoltaSTFRaw,
      elements: MinoltaSTFRaw.elements.map((element) =>
        element.id === 5 ? { ...element, absorptionCoefficientPerMm: undefined } : element,
      ),
    });
    const curveFor = (L: RuntimeLens) => computeVignettingCurve(analysisRequestAt(L, apertureAt(L, 0, 0))).samples;
    const [absorbed, clear] = [curveFor(stf), curveFor(transparent)];
    expect(absorbed).toHaveLength(clear.length);
    absorbed.forEach((sample, i) => expect(sample.unvignettedFraction).toBe(clear[i].unvignettedFraction));
    expect(
      Math.max(
        ...absorbed
          .slice(1)
          .map((sample, i) => Math.abs(sample.relativeIllumination! - clear[i + 1].relativeIllumination!)),
      ),
    ).toBeGreaterThan(1e-3);
  });

  it("moves no field by more than 0.01 when the lattice doubles", () => {
    const L = build(CanonEF135Raw);
    const at = (cells: number) =>
      computeVignettingCurve(analysisRequestAt(L, { sampling: { vignettingPupilSampleCount: cells } })).samples;
    const [coarse, fine] = [at(64), at(128)];
    expect(fine).toHaveLength(coarse.length);
    coarse.forEach((sample, i) => {
      expect(fine[i].fieldAngleDeg).toBe(sample.fieldAngleDeg);
      for (const value of [sample.unvignettedFraction, sample.relativeIllumination, fine[i].relativeIllumination])
        expect(value).not.toBeNull();
      expect(Math.abs(fine[i].unvignettedFraction! - sample.unvignettedFraction!)).toBeLessThan(0.01);
      expect(Math.abs(fine[i].relativeIllumination! - sample.relativeIllumination!)).toBeLessThan(0.01);
    });
  });

  it("samples the tab's fields: at least seven, from 0° to the analysis-limited edge", () => {
    const L = sharedSonnar50f15();
    const geometry = computeAnalysisFieldGeometryAtState(0, 0, L);
    const curve = computeVignettingCurve(analysisRequestAt(L, { ...apertureAt(L, 0, 0), fieldGeometry: geometry }));
    expect(curve.samples.length).toBeGreaterThanOrEqual(7);
    expect(curve.samples[0].fieldAngleDeg).toBe(0);
    expect(curve.samples.at(-1)!.fieldAngleDeg).toBeCloseTo(geometry.halfFieldDeg, 10);
    expect(curve.samples[0].relativeIllumination).toBe(1);
  });

  it("produces a curve for a zoom lens at its tele end", () => {
    const L = sharedNikkorZ70200();
    const { z } = doLayout(0, 1, L);
    const curve = computeVignettingCurve(analysisRequestAt(L, { zPos: z, zoomT: 1, ...apertureAt(L, 1, 0) }));
    expect(curve.samples.length).toBeGreaterThanOrEqual(7);
    expect(curve.samples[0].relativeIllumination).toBe(1);
  });

  it("gives the reason a state has no curve", () => {
    // A fisheye projection is outside the beam model.
    expect(computeVignettingCurve(analysisRequestAt(build(FisheyeRaw), {}))).toMatchObject({
      available: false,
      reason: "unsupported-path",
      samples: [],
    });
    const L = sharedSonnar50f15();
    expect(computeVignettingCurve(analysisRequestAt(L, { currentEPSD: 1, currentPhysStopSD: 0 })).reason).toBe(
      "invalid-state",
    );
  });
});
