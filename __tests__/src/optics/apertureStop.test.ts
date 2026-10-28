/**
 * The stop rule (paraxial EPD = F/N, the stop fixed across focus), its exceptions, and the three f-numbers the
 * Summary reports under OpticStudio's names. Closed forms are derived here from first-order optics.
 */
import { describe, expect, it } from "vitest";
import {
  fNumberRuleStopSemiDiameter,
  stopRuleGeometry,
  stopSemiDiameterForFNumber,
  wideOpenStopAtZoom,
} from "../../../src/optics/state/apertureStop.js";
import { fNumberAtStopdown } from "../../../src/optics/state/aperture.js";
import { fopenAtZoomClamped } from "../../../src/optics/state/runtimeAdapters.js";
import { prepareRuntimeState } from "../../../src/optics/state/runtimeAdapters.js";
import { compiledLensFromRuntime } from "../../../src/optics/prescription/identity.js";
import { imageSpaceFNumber, paraxialWorkingFNumber } from "../../../src/optics/first-order/fNumber.js";
import { paraxialObjectVergence } from "../../../src/optics/field/geometry.js";
import { computeWorkingFNumber } from "../../../src/optics/analysis/summary/fNumbers.js";
import { createAnalysisRequest } from "../../../src/optics/analysis/request.js";
import { entrancePupilAtState } from "../../../src/optics/state/fieldAdapters.js";
import { traceParaxialSurfaces } from "../../../src/optics/math/paraxial.js";
import { fisheyeProjectionFocalLengthAtZoom } from "../../../src/optics/field/projection.js";
import { lensChromaticReference } from "../../../src/optics/chromatic/channels.js";
import { buildFixtureLens } from "./constructionFixtures.js";
import { CATALOG_CONSTRUCTION_FIXTURES } from "./constructionFixtures.js";
import {
  buildSimplePositiveElementLens,
  buildVariableStopGapLens,
  REAR_PLATE_FIXTURE,
  catalogLensData,
  sharedNikkorZ50f18,
  sharedNikkorZ70200,
  teleconverterZoomHostData,
} from "./testLensFixtures.js";
import ReferenceNewtonianSideFocusRaw from "../../../src/lens-data/reference/ReferenceNewtonianSideFocus.data.js";
import type { LensData, RuntimeLens, SurfaceData } from "../../../src/types/optics.js";

/** Relative tolerance of "a few units in the last place". */
const FEW_ULP = 8 * Number.EPSILON;
const SLIDER_POSITIONS = Array.from({ length: 11 }, (_, i) => i / 10);
const PLATE_INDEX = 1.5168;
/** Power of the diffractive thin lens below: the phase is −(φ/2)·r² of optical path, so φ = 0.01 /mm, f = 100 mm. */
const PHASE_POWER = 0.01;
const PHASE = {
  kind: "radial-polynomial" as const,
  referenceWavelengthNm: 587.5618,
  diffractionOrder: 1,
  terms: [{ radialPower: 2, coefficient: -PHASE_POWER / 2 }],
};

/**
 * A stop, a flat glass plate and a quadratic phase on its rear face: a thin lens of power φ at one plane.
 *
 * The phase adds ∂OPL/∂r = −φr to n′ sin θ′, so a collimated ray at height r leaves with sin θ′ = φr exactly: the
 * lens obeys the sine condition at infinity, and its EFL is 1/φ.
 */
function phaseLensData(surfaces: SurfaceData[], overrides: Partial<LensData> = {}): LensData {
  return catalogLensData({
    key: "test-phase-thin-lens",
    name: "Phase thin lens",
    closeFocusM: 0.5,
    yScFill: 0.55,
    nominalFno: 2,
    fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
    elements: [{ id: 1, name: "Plate", label: "L1", type: "positive", nd: PLATE_INDEX, vd: 64.17 }],
    surfaces,
    ...overrides,
  });
}

/** Stop 1 mm ahead of the plate (2 mm thick), the phase on its rear face, the image plane at its focus. */
function stopAtLens(imageGap: number | [number, number] = 1 / PHASE_POWER): RuntimeLens {
  const infinityGap = Array.isArray(imageGap) ? imageGap[0] : imageGap;
  return buildFixtureLens(
    phaseLensData(
      [
        { label: "STO", R: 1e15, nd: 1.0, sd: 30, d: 1, elemId: 0 },
        { label: "1", R: 1e15, nd: PLATE_INDEX, sd: 40, d: 2, elemId: 1 },
        { label: "2", R: 1e15, nd: 1.0, sd: 40, d: infinityGap, elemId: 0, diffractive: PHASE },
      ],
      Array.isArray(imageGap) ? { var: { "2": imageGap }, varLabels: [["2", "BF"]] } : {},
    ),
  );
}

/** The same thin lens with the stop a distance D behind it. */
function stopBehindLens(distance: number): RuntimeLens {
  return buildFixtureLens(
    phaseLensData([
      { label: "1", R: 1e15, nd: PLATE_INDEX, sd: 40, d: 2, elemId: 1 },
      { label: "2", R: 1e15, nd: 1.0, sd: 40, d: distance, elemId: 0, diffractive: PHASE },
      { label: "STO", R: 1e15, nd: 1.0, sd: 30, d: 1 / PHASE_POWER - distance, elemId: 0 },
    ]),
  );
}

function expectFewUlp(actual: number | null, expected: number) {
  expect(actual).not.toBeNull();
  expect(Math.abs(actual! - expected)).toBeLessThanOrEqual(FEW_ULP * Math.abs(expected));
}

function requestAt(L: RuntimeLens, fNumber: number, focusT = 0, zoomT = 0) {
  const stop = stopSemiDiameterForFNumber(fNumber, zoomT, L);
  return createAnalysisRequest({
    preparedState: prepareRuntimeState(L, focusT, zoomT),
    dynamicEFL: L.EFL,
    currentEPSD: entrancePupilAtState(stop, focusT, zoomT, L).epSD,
    currentPhysStopSD: stop,
  });
}

describe("stop rule", () => {
  it("gives a thin lens with the stop at the lens F/2N at every slider f-number", () => {
    const L = stopAtLens();
    for (const stopdownT of SLIDER_POSITIONS) {
      const N = fNumberAtStopdown(stopdownT, 0, L);
      // The collimated marginal ray meets the stop at its entrance height: the stop is the entrance pupil.
      expectFewUlp(stopSemiDiameterForFNumber(N, 0, L), 1 / PHASE_POWER / (2 * N));
    }
  });

  it("scales the stop behind a lens of power φ by the paraxial height ratio 1 − φD", () => {
    const distance = 20;
    const L = stopBehindLens(distance);
    // y = 1, u = 0 leaves the thin lens with u′ = −φ and reaches the stop at 1 − φD; F is 1/φ.
    const ratio = 1 - PHASE_POWER * distance;
    expectFewUlp(stopRuleGeometry(compiledLensFromRuntime(L), 0).stopHeightRatio, ratio);
    // The public barrel takes the RuntimeLens itself, as its sibling stop functions do.
    expect(stopRuleGeometry(L, 0)).toEqual(stopRuleGeometry(compiledLensFromRuntime(L), 0));
    for (const N of [2, 5.6, 8, 11]) {
      expectFewUlp(stopSemiDiameterForFNumber(N, 0, L), (1 / PHASE_POWER / (2 * N)) * ratio);
    }
  });

  it.each([
    ["prime", sharedNikkorZ50f18, [0]],
    ["zoom, at and between stations", sharedNikkorZ70200, [0, 0.37, 0.5, 1]],
  ] as const)("makes EPD = F/N to a few ulp on a %s at every slider f-number and f/8", (_kind, lens, zooms) => {
    const L = lens();
    for (const zoomT of zooms) {
      const state = prepareRuntimeState(L, 0, zoomT);
      const fNumbers = [...SLIDER_POSITIONS.map((t) => fNumberAtStopdown(t, zoomT, L)), 8];
      for (const N of fNumbers) {
        expectFewUlp(imageSpaceFNumber(state, stopSemiDiameterForFNumber(N, zoomT, L)), N);
      }
    }
  });

  it("holds the stop fixed across focus", () => {
    const L = sharedNikkorZ70200();
    for (const zoomT of [0, 0.37, 1]) {
      const iris = wideOpenStopAtZoom(zoomT, L);
      for (const focusT of [0, 0.5, 1]) {
        expect(prepareRuntimeState(L, focusT, zoomT).surfaces[L.stopIdx].sd).toBe(iris);
      }
    }
  });

  it("evaluates the rule between zoom stations instead of interpolating station radii", () => {
    const L = sharedNikkorZ70200();
    const zoomT = 0.37;
    const open = fopenAtZoomClamped(zoomT, L);
    expect(wideOpenStopAtZoom(zoomT, L)).toBe(fNumberRuleStopSemiDiameter(open, zoomT, L));
    L.zoomStopSDs!.forEach((radius, station) => {
      const stationT = station / (L.zoomStopSDs!.length - 1);
      expectFewUlp(wideOpenStopAtZoom(stationT, L), radius);
    });
  });
});

describe("f-numbers", () => {
  it("reads working f/# = image-space f/# on a lens obeying the sine condition at infinity", () => {
    const L = stopAtLens();
    for (const N of [2, 5.6, 11]) {
      const request = requestAt(L, N);
      const working = computeWorkingFNumber(request);
      expect(working.status).toBe("traced");
      const imageSpace = imageSpaceFNumber(request.preparedGeometry, request.aperture.stopSemiDiameterMm)!;
      expectFewUlp(imageSpace, N);
      expect(working.status === "traced" && working.value).toBeCloseTo(imageSpace, 9);
      // At infinity the paraxial working f-number is the image-space one.
      expectFewUlp(paraxialWorkingFNumber(request.preparedGeometry, request.aperture.stopSemiDiameterMm), imageSpace);
    }
  });

  it("reads the paraxial working f/# at a finite conjugate in closed form", () => {
    const imageDistance = 125;
    const L = stopAtLens([1 / PHASE_POWER, imageDistance]);
    const N = 4;
    const R = stopSemiDiameterForFNumber(N, 0, L);
    const state = prepareRuntimeState(L, 1, 0);
    // Gauss at the thin lens, with the reduced distance 1 + 2/n from the stop: 1/s′ + 1/v = φ.
    const reducedToLens = 1 + 2 / PLATE_INDEX;
    const objectToLens = 1 / (PHASE_POWER - 1 / imageDistance);
    const objectToStop = objectToLens - reducedToLens;
    expect(1 / paraxialObjectVergence(state)).toBeCloseTo(objectToStop, 9);
    // The marginal ray leaves the axial object through the stop rim, meets the lens at R·s′/s, and converges on v.
    const heightAtLens = (R * objectToLens) / objectToStop;
    expect(paraxialWorkingFNumber(state, R)).toBeCloseTo(imageDistance / (2 * heightAtLens), 10);
    // The real ray agrees with the paraxial one only as the aperture closes; both exceed the image-space value.
    expect(paraxialWorkingFNumber(state, R)!).toBeGreaterThan(imageSpaceFNumber(state, R)!);
  });

  it("reads the paraxial working f/# as 1 / (2n′|u′|) in an immersed image space", () => {
    // The phase surface exits into a medium of index n′ with the image plane at its focus n′/φ.
    const immersion = 1.33;
    const L = buildFixtureLens(
      phaseLensData(
        [
          { label: "STO", R: 1e15, nd: 1.0, sd: 30, d: 1, elemId: 0 },
          { label: "1", R: 1e15, nd: PLATE_INDEX, sd: 40, d: 2, elemId: 1 },
          { label: "2", R: 1e15, nd: immersion, sd: 40, d: immersion / PHASE_POWER, elemId: 2, diffractive: PHASE },
        ],
        {
          elements: [
            { id: 1, name: "Plate", label: "L1", type: "positive", nd: PLATE_INDEX, vd: 64.17 },
            { id: 2, name: "Immersion", label: "L2", type: "Immersion", nd: immersion, vd: 55 },
          ],
        },
      ),
    );
    const state = prepareRuntimeState(L, 0, 0);
    expect(state.surfaces.at(-1)!.nd).toBe(immersion);
    // The phase gives n′u′ = −φh to a collimated ray of height h; the stop is at the lens, so h is its radius R.
    const R = 10;
    expect(paraxialWorkingFNumber(state, R)).toBeCloseTo(1 / (2 * PHASE_POWER * R), 10);
    // EFL / EPD carries the image-space slope u′ = −φR / n′ itself: n′ times the paraxial working f-number.
    expect(imageSpaceFNumber(state, R)).toBeCloseTo(immersion / (2 * PHASE_POWER * R), 10);
  });

  it("shows a marginal ray that cannot reach the stop rim as unaimed, not a number", () => {
    // A plano-convex lens, flat face forward: a collimated ray at height h meets the rear sphere (radius r) at
    // incidence sin i = h / r and is totally reflected past h = r / n. The transmitted rays converge, so none reaches
    // the stop behind the vertex above r / n; a stop rim at 16 mm is out of reach while no clear aperture (17 mm)
    // stops a ray, so the aim cannot place the marginal ray and no clear aperture is to blame.
    const n = 1.5;
    const r = 20;
    const L = buildFixtureLens(
      phaseLensData(
        [
          { label: "1", R: 1e15, nd: n, sd: 17, d: 14, elemId: 1 },
          { label: "2", R: -r, nd: 1.0, sd: 17, d: 2, elemId: 0 },
          { label: "STO", R: 1e15, nd: 1.0, sd: 18, d: r / (n - 1) - 2, elemId: 0 },
        ],
        { elements: [{ id: 1, name: "Plano-convex", label: "L1", type: "positive", nd: n, vd: 64.17 }] },
      ),
    );
    expect(r / n).toBeLessThan(16);
    const request = createAnalysisRequest({
      preparedState: prepareRuntimeState(L, 0, 0),
      dynamicEFL: L.EFL,
      currentEPSD: 16,
      currentPhysStopSD: 16,
    });
    expect(computeWorkingFNumber(request)).toEqual({ status: "unaimed", reason: "stop-unreachable" });
  });

  it("names the line of the authored indices it traces at, as the chromatic tab does", () => {
    const d = computeWorkingFNumber(requestAt(stopAtLens(), 4));
    expect(d).toMatchObject({ status: "traced", indexLine: "d" });
    const eLine = (overrides: Partial<LensData> = {}) =>
      buildFixtureLens(
        phaseLensData(
          [
            { label: "STO", R: 1e15, nd: 1.0, sd: 30, d: 1, elemId: 0 },
            { label: "1", R: 1e15, nd: PLATE_INDEX, sd: 40, d: 2, elemId: 1 },
            { label: "2", R: 1e15, nd: 1.0, sd: 40, d: 1 / PHASE_POWER, elemId: 0, diffractive: PHASE },
          ],
          {
            elements: [
              { id: 1, name: "Plate", label: "L1", type: "positive", nd: PLATE_INDEX, vd: 64.17, indexReference: "e" },
            ],
            ...overrides,
          },
        ),
      );
    expect(computeWorkingFNumber(requestAt(eLine(), 4))).toMatchObject({ status: "traced", indexLine: "e" });
    // A d-line cover glass is a synthetic rear plate, which the chromatic tab's reference leaves out.
    const withPlate = eLine({ rearPlates: [REAR_PLATE_FIXTURE] });
    expect(lensChromaticReference(withPlate.elements)).toBe("e");
    expect(computeWorkingFNumber(requestAt(withPlate, 4))).toMatchObject({ status: "traced", indexLine: "e" });
  });

  it("shows a vignetted marginal ray as its state, not a number", () => {
    const L = buildSimplePositiveElementLens("test-vignetted-marginal", { elementSd: 5 });
    const working = computeWorkingFNumber(requestAt(L, L.FOPEN));
    expect(working).toEqual({ status: "vignetted", surfaceLabel: "1", beforeStop: false });
  });
});

describe("stop rule exceptions", () => {
  it("keeps a published schedule wide open and applies the rule, capped, when stopped down", () => {
    const L = buildVariableStopGapLens(
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      "test-stop-schedule",
      undefined,
      { zoomStopSemiDiameters: [6, 8, 12] },
    );
    expect(L.stopRule).toBe("schedule");
    expect(wideOpenStopAtZoom(0.25, L)).toBe(7);
    expect(stopSemiDiameterForFNumber(fopenAtZoomClamped(0.25, L), 0.25, L)).toBe(7);
    for (const N of [2.8, 8]) {
      expect(stopSemiDiameterForFNumber(N, 0.25, L)).toBe(Math.min(7, fNumberRuleStopSemiDiameter(N, 0.25, L)));
    }
  });

  it("gives a fixed iris the rule's first-station radius at every zoom, and the rule when stopped down", () => {
    const L = buildFixtureLens(teleconverterZoomHostData({ zoomApertureModel: "fixed-iris" }));
    expect(L.stopRule).toBe("fixed-iris");
    expect(L.stopPhysSD).toBe(fNumberRuleStopSemiDiameter(4, 0, L));
    expect(wideOpenStopAtZoom(1, L)).toBe(L.stopPhysSD);
    expect(stopSemiDiameterForFNumber(8, 1, L)).toBe(Math.min(L.stopPhysSD, fNumberRuleStopSemiDiameter(8, 1, L)));
  });

  it("keeps an authored stop inside glass wide open and applies the rule when stopped down", () => {
    const L = buildFixtureLens(
      catalogLensData({
        key: "test-stop-inside-glass",
        name: "Stop inside glass",
        closeFocusM: 0.5,
        yScFill: 0.55,
        nominalFno: 2,
        fstopSeries: [2, 2.8, 4, 5.6, 8],
        elements: [{ id: 1, name: "L1", label: "E1", type: "test", nd: 1.5, vd: 50, fromSurface: "1", toSurface: "2" }],
        surfaces: [
          { label: "1", R: 80, d: 4, nd: 1.5, elemId: 1, sd: 8 },
          { label: "STO", R: 1e15, d: 4, nd: 1.5, elemId: 1, sd: 3, stopPlacement: "inside-element" },
          { label: "2", R: -80, d: 40, nd: 1.0, elemId: 0, sd: 8 },
        ],
      }),
    );
    expect(L.stopRule).toBe("authored");
    expect(wideOpenStopAtZoom(0, L)).toBe(3);
    expect(stopSemiDiameterForFNumber(L.FOPEN, 0, L)).toBe(3);
    expect(stopSemiDiameterForFNumber(16, 0, L)).toBe(Math.min(3, fNumberRuleStopSemiDiameter(16, 0, L)));
    // The authored stop gives its own image-space f-number, not the marked one.
    const imageSpace = imageSpaceFNumber(prepareRuntimeState(L, 0, 0), 3)!;
    expect(Math.abs(imageSpace - L.FOPEN)).toBeGreaterThan(0.01);
  });

  it("sizes a fisheye's stop with its projection focal length", () => {
    const L = buildFixtureLens(CATALOG_CONSTRUCTION_FIXTURES["nikon-fisheye-nikkor-6mm-f28"]);
    const projectionFocalLength = fisheyeProjectionFocalLengthAtZoom(L.projection, 0)!;
    expect(Math.abs(projectionFocalLength - L.EFL)).toBeGreaterThan(0.01);
    const state = prepareRuntimeState(L, 0, 0);
    const ratio = traceParaxialSurfaces(state.surfaces, 1, 0, { stopAt: L.stopIdx }).y;
    for (const N of [L.FOPEN, 8]) {
      // EPD = 2 × stop / ratio = F_projection / N.
      expectFewUlp((2 * stopSemiDiameterForFNumber(N, 0, L)) / ratio, projectionFocalLength / N);
    }
  });

  it("keeps a folded path's authored stop and stops it down with its near-axis stop ratio", () => {
    const L = buildFixtureLens(catalogLensData(ReferenceNewtonianSideFocusRaw));
    expect(L.stopRule).toBe("authored");
    expect(wideOpenStopAtZoom(0, L)).toBe(L.stopPhysSD);
    const N = 2 * L.FOPEN;
    const rule = (L.apertureReferenceFocalLength / (2 * N)) * Math.abs(L.EP.yRatio);
    expect(fNumberRuleStopSemiDiameter(N, 0, L)).toBe(rule);
    expect(stopRuleGeometry(L, 0)).toEqual({
      referenceFocalLengthMm: L.apertureReferenceFocalLength,
      stopHeightRatio: L.EP.yRatio,
    });
    expect(stopSemiDiameterForFNumber(N, 0, L)).toBe(Math.min(L.stopPhysSD, rule));
    expect(paraxialWorkingFNumber(prepareRuntimeState(L, 0, 0), L.stopPhysSD)).toBeNull();
  });
});
