import buildLens, { paraxialTrace } from "../../../src/optics/buildLens.js";
import { epAtZoom, fopenAtZoom } from "../../../src/optics/optics.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import ApoLantharRaw from "../../../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.js";
import Nikkor105Raw from "../../../src/lens-data/nikon/NikonNikkor105f14E.data.js";
import NikkorRaw from "../../../src/lens-data/nikon/NikonNikkorZ50f18S.data.js";
import NikkorZ70200Raw from "../../../src/lens-data/nikon/NikonNikkorZ70200f28.data.js";
import NoktonRaw from "../../../src/lens-data/voigtlander/VoigtlanderNokton50f1.data.js";
import Sonnar50f15Raw from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import { rearPlateAirEquivalentMm } from "../../../src/optics/prescription/rearPlates.js";
import type { LensData, RearPlateData, RuntimeLens, SurfaceData, VarRange } from "../../../src/types/optics.js";
import type { TeleconverterData } from "../../../src/types/teleconverter.js";

/** Merge project defaults and build — the canonical test-side `buildLens` wrapper. */
export function build(raw: object): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

/**
 * Current physical stop and entrance-pupil semi-diameters at a zoom/stop-down
 * position — the slider math analysis helpers expect, shared by the analysis
 * test files.
 */
export function apertureAt(
  L: RuntimeLens,
  zoomT: number,
  stopdownT = 0,
): { currentPhysStopSD: number; currentEPSD: number } {
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  return {
    currentPhysStopSD: (L.stopPhysSD * L.FOPEN) / fNumber,
    currentEPSD: (epAtZoom(zoomT, L) * L.FOPEN) / fNumber,
  };
}

/* ── Shared pre-built production lenses ──────────────────────────────────
 *
 * buildLens returns a frozen RuntimeLens, and the prepared-state/chief-ray
 * helpers cache by lens object identity (src/optics/compat.ts), so sharing
 * one instance per file makes repeated analysis calls cheap — rebuilding the
 * same production lens per test was a dominant suite cost. Lazily memoized so
 * files only pay for the lenses they use. Never mutate a shared lens
 * (testing_recipes.md); call `build()` for a fresh instance when a test
 * modifies the prescription or exercises construction itself. */
function sharedBuild(raw: object): () => RuntimeLens {
  let L: RuntimeLens | null = null;
  return () => (L ??= build(raw));
}

export const sharedApoLanthar50f2 = sharedBuild(ApoLantharRaw);
export const sharedNikkor105f14 = sharedBuild(Nikkor105Raw);
export const sharedNikkorZ50f18 = sharedBuild(NikkorRaw);
export const sharedNikkorZ70200 = sharedBuild(NikkorZ70200Raw);
export const sharedNokton50f1 = sharedBuild(NoktonRaw);
export const sharedSonnar50f15 = sharedBuild(Sonnar50f15Raw);

const BASE_ELEMENT = {
  id: 1,
  name: "Fixture element",
  label: "L1",
  type: "positive",
  nd: 1.5168,
  vd: 64.17,
};

function buildFixture(overrides: Partial<LensData>): RuntimeLens {
  const data = {
    ...LENS_DEFAULTS,
    key: "test-optics-fixture",
    name: "Test optics fixture",
    closeFocusM: 0.5,
    yScFill: 0.55,
    nominalFno: 2,
    fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
    elements: [BASE_ELEMENT],
    surfaces: simplePositiveSurfaces(),
    ...overrides,
  } as LensData;
  return buildLens(data);
}

function simplePositiveSurfaces(stopGap = 1, frontGap = 5, imageGap = 80): SurfaceData[] {
  return [
    { label: "STO", R: 1e15, nd: 1.0, sd: 15, d: stopGap, elemId: 0 },
    { label: "1", R: 50, nd: 1.5168, sd: 15, d: frontGap, elemId: 1 },
    { label: "2", R: -50, nd: 1.0, sd: 15, d: imageGap, elemId: 1 },
  ];
}

export function buildSimplePositiveElementLens(key = "test-simple-positive-element"): RuntimeLens {
  return buildFixture({ key, surfaces: simplePositiveSurfaces() });
}

export function buildChromaticPositiveElementLens(key = "test-chromatic-positive-element"): RuntimeLens {
  return buildFixture({
    key,
    elements: [{ ...BASE_ELEMENT, glass: "N-BK7" }],
    surfaces: simplePositiveSurfaces(),
  });
}

export function buildVariableStopGapLens(
  range: VarRange,
  key = "test-variable-stop-gap",
  focusPositions?: number[],
  overrides: Partial<LensData> = {},
): RuntimeLens {
  const surfaces = simplePositiveSurfaces(Array.isArray(range[0]) ? (range[0] as [number, number])[0] : range[0]);
  return buildFixture({
    key,
    surfaces,
    var: { STO: range },
    focusPositions,
    zoomPositions: Array.isArray(range[0]) ? [24, 50, 100] : undefined,
    nominalFno: Array.isArray(range[0]) ? [2, 2, 2] : 2,
    ...overrides,
  });
}

export function buildLayoutLens(thicknesses: readonly [number, number, number]): RuntimeLens {
  return buildFixture({
    key: "test-layout-lens",
    surfaces: [
      { label: "STO", R: 1e15, nd: 1.0, sd: 15, d: thicknesses[0], elemId: 0 },
      { label: "1", R: 100, nd: 1.5168, sd: 15, d: thicknesses[1], elemId: 1 },
      { label: "2", R: -100, nd: 1.0, sd: 15, d: thicknesses[2], elemId: 1 },
    ],
  });
}

export function buildTirLens(key = "test-tir-lens"): RuntimeLens {
  return buildFixture({
    key,
    nominalFno: 4,
    elements: [{ ...BASE_ELEMENT, nd: 2.0, vd: 20 }],
    surfaces: [
      { label: "STO", R: 1e15, nd: 1.0, sd: 20, d: 1, elemId: 0 },
      { label: "1", R: 10, nd: 2.0, sd: 8, d: 5, elemId: 1 },
      { label: "2", R: 1e15, nd: 1.0, sd: 8, d: 10, elemId: 1 },
    ],
  });
}

/**
 * Folded Mangin-style TIR fixture: collimated light enters a flat n = 2 front (MG1), reflects from a steep silvered
 * rear (MG2, R = -40), and must exit back through MG1 from inside the glass. The reflected ray leaves at twice the
 * mirror normal's tilt, so axial-parallel inputs above |R|·sin(θc/2) ≈ 10.35 mm exceed the 30° critical angle at the
 * exit. The paraxial image (EFL 10) forms on the object side at z = 95; an explicit `surfaceOrder` is required because
 * auto mode would terminate incoming rays on that front image plane before they reach the glass.
 */
export function buildFoldedTirLens(key = "test-folded-tir-lens"): RuntimeLens {
  return buildFixture({
    key,
    nominalFno: 4,
    focalLengthDesign: 10,
    elements: [{ ...BASE_ELEMENT, name: "MG", label: "Mangin mirror", type: "Second-Surface Mirror", nd: 2.0, vd: 20 }],
    surfaces: [
      { label: "STO", R: 1e15, nd: 1.0, sd: 15, d: 100, elemId: 0 },
      { label: "MG1", R: 1e15, nd: 2.0, sd: 15, d: 10, elemId: 1 },
      {
        label: "MG2",
        R: -40,
        nd: 1.0,
        sd: 15,
        d: 0,
        elemId: 0,
        interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "second-surface" },
      },
    ],
    groups: [{ text: "MG", fromSurface: "MG1", toSurface: "MG2" }],
    opticalPath: {
      surfaceOrder: ["STO", "MG1", "MG2", "MG1"],
      imagePlane: { z: 95, label: "IMG" },
      maxInteractions: 5,
    },
  });
}

/**
 * Two flat first-surface mirrors facing each other 10 mm apart (MA at z = 5 reflects rays travelling -z, MB at
 * z = 15 reflects rays travelling +z) in auto path mode. Nothing ever leaves the cavity, so a ray launched between
 * them can only end through auto-path loop detection or the `maxInteractions` cap; the image plane behind MB is
 * never reachable.
 */
export function buildFacingFlatMirrorsLens(key = "test-facing-flat-mirrors"): RuntimeLens {
  return buildFixture({
    key,
    nominalFno: 4,
    focalLengthDesign: 100,
    elements: [
      { ...BASE_ELEMENT, id: 1, name: "MA", label: "Mirror A", type: "Flat First-Surface Mirror", nd: 1.0, vd: 0 },
      { ...BASE_ELEMENT, id: 2, name: "MB", label: "Mirror B", type: "Flat First-Surface Mirror", nd: 1.0, vd: 0 },
    ],
    surfaces: [
      { label: "STO", R: 1e15, nd: 1.0, sd: 20, d: 5, elemId: 0 },
      {
        label: "MA",
        R: 1e15,
        nd: 1.0,
        sd: 20,
        d: 10,
        elemId: 1,
        interaction: { type: "reflect", incidentSide: "rear", inactiveSide: "block", mirrorKind: "first-surface" },
      },
      {
        label: "MB",
        R: 1e15,
        nd: 1.0,
        sd: 20,
        d: 0,
        elemId: 2,
        interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
      },
    ],
    groups: [
      { text: "MA", fromSurface: "MA", toSurface: "MA" },
      { text: "MB", fromSurface: "MB", toSurface: "MB" },
    ],
    opticalPath: { mode: "auto", imagePlane: { z: 50, label: "IMG" }, maxInteractions: 8 },
  });
}

export function buildGhostClippingLens(key = "test-ghost-clipping-lens"): RuntimeLens {
  return buildFixture({
    key,
    nominalFno: 4,
    surfaces: [
      { label: "STO", R: 1e15, nd: 1.0, sd: 5, d: 1, elemId: 0 },
      { label: "1", R: 50, nd: 1.5, sd: 20, d: 10, elemId: 1 },
      { label: "2", R: -50, nd: 1.0, sd: 20, d: 50, elemId: 1 },
    ],
  });
}

export function buildMissAfterFirstHitLens(key = "test-miss-after-first-hit-lens"): RuntimeLens {
  return buildFixture({
    key,
    nominalFno: 4,
    surfaces: [
      { label: "STO", R: 1e15, nd: 1.0, sd: 100, d: 10, elemId: 0 },
      { label: "1", R: 20, nd: 1.5, sd: 10, d: 8, elemId: 1 },
      { label: "2", R: -20, nd: 1.0, sd: 10, d: 50, elemId: 1 },
    ],
  });
}

/** Source-style rear plate: 2 mm N-BK7 cover glass followed by 1 mm air to the image plane. */
export const REAR_PLATE_FIXTURE: RearPlateData = Object.freeze({
  label: "CG",
  thicknessMm: 2,
  nd: 1.5168,
  vd: 64.17,
  glass: "N-BK7",
  gapAfterMm: 1,
});

interface RearPlateLensOptions {
  plates?: RearPlateData[];
  /** Physical gap from the last lens surface to the first plate. */
  gapBefore?: number;
  /** Optional focus variation on the last lens gap (`var["2"]`), physical plate-model values. */
  lastGapRange?: VarRange;
  imageFormat?: LensData["imageFormat"];
  key?: string;
}

/**
 * Simple positive element followed by modeled `rearPlates` (physical patent gaps).
 *
 * Pair with `buildRearPlateAirEquivalentLens()` — the legacy t/n fold of the same stack — to check that the
 * expansion preserves paraxial focus while adding real plate behavior.
 */
export function buildRearPlateLens({
  plates = [REAR_PLATE_FIXTURE],
  gapBefore = 44,
  lastGapRange,
  imageFormat,
  key = "test-rear-plate",
}: RearPlateLensOptions = {}): RuntimeLens {
  return buildFixture({
    key,
    surfaces: simplePositiveSurfaces(1, 5, gapBefore),
    rearPlates: plates,
    ...(lastGapRange ? { var: { "2": lastGapRange } } : {}),
    ...(imageFormat ? { imageFormat } : {}),
  });
}

/** The same stack as `buildRearPlateLens()` with the plates folded into the last gap as Σ(t/n + gapAfter). */
export function buildRearPlateAirEquivalentLens({
  plates = [REAR_PLATE_FIXTURE],
  gapBefore = 44,
  lastGapRange,
  key = "test-rear-plate-air-equivalent",
}: RearPlateLensOptions = {}): RuntimeLens {
  const fold = rearPlateAirEquivalentMm(plates);
  const foldRange = lastGapRange?.map((value) => (value as number) + fold) as VarRange | undefined;
  return buildFixture({
    key,
    surfaces: simplePositiveSurfaces(1, 5, gapBefore + fold),
    ...(foldRange ? { var: { "2": foldRange } } : {}),
  });
}

/* ── Teleconverter fixtures ──────────────────────────────────────────────
 *
 * Hosts are built in exact paraxial focus (last gap = paraxial back focus), so a composed system's focus error
 * is attributable to the composition rather than to the fixture. */

/** Distance behind the last vertex where a paraxial ray launched at unit height with slope `u0` crosses the axis. */
function paraxialImageDistance(surfaces: SurfaceData[], u0 = 0): number {
  const { y, u } = paraxialTrace(surfaces, 1, u0, { skipLastTransfer: true });
  return -y / u;
}

/** Virtual-object distance the fixture converter is designed for, mm behind its first vertex. */
export const TELECONVERTER_FIXTURE_OBJECT_DISTANCE_MM = 30;

/**
 * Plano-concave 1.4x converter: one negative element whose authored back focus is its exact paraxial conjugate.
 *
 * @param overrides - fields replaced on the fixture
 * @returns teleconverter data that passes `validateTeleconverterData`
 */
export function teleconverterFixture(overrides: Partial<TeleconverterData> = {}): TeleconverterData {
  const surfaces: SurfaceData[] = [
    { label: "1", R: -54, d: 2, nd: 1.5168, elemId: 1, sd: 12 },
    { label: "2", R: 1e15, d: 0, nd: 1.0, elemId: 0, sd: 12 },
  ];
  surfaces[1].d = paraxialImageDistance(surfaces, -1 / TELECONVERTER_FIXTURE_OBJECT_DISTANCE_MM);
  return {
    key: "test-teleconverter",
    name: "Test 1.4x converter",
    magnification: 1.4,
    lensMounts: ["nikon-f"],
    elementCount: 1,
    groupCount: 1,
    elements: [{ ...BASE_ELEMENT, name: "TL1", label: "Converter element", type: "Plano-Concave Negative" }],
    surfaces,
    masterImageDistanceMm: TELECONVERTER_FIXTURE_OBJECT_DISTANCE_MM,
    ...overrides,
  };
}

interface TeleconverterHostOptions {
  /** Focus variation added to the infinity back focus, as offsets in mm (`[0, 5]` = unit focus by 5 mm). */
  lastGapFocusOffsets?: [number, number];
  /** Model this plate stack behind the lens; the last gap is shortened so paraxial focus is unchanged. */
  plates?: RearPlateData[];
  overrides?: Partial<LensData>;
}

/**
 * Prime host for converter tests: the simple positive element, in paraxial focus, declaring converter acceptance.
 *
 * @returns defaulted lens data (not built), so tests can compose before building
 */
export function teleconverterHostData({
  lastGapFocusOffsets,
  plates,
  overrides = {},
}: TeleconverterHostOptions = {}): LensData {
  const surfaces = simplePositiveSurfaces(1, 5, 0);
  const airBackFocus = paraxialImageDistance(surfaces);
  const lastGap = airBackFocus - (plates ? rearPlateAirEquivalentMm(plates) : 0);
  surfaces[2].d = lastGap;
  return {
    ...LENS_DEFAULTS,
    key: "test-teleconverter-host",
    name: "Test converter host",
    closeFocusM: 0.5,
    yScFill: 0.55,
    nominalFno: 2,
    fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
    lensMounts: ["nikon-f"],
    acceptsTeleconverters: true,
    elementCount: 1,
    groupCount: 1,
    elements: [BASE_ELEMENT],
    surfaces,
    ...(plates ? { rearPlates: plates } : {}),
    ...(lastGapFocusOffsets
      ? { var: { "2": [lastGap + lastGapFocusOffsets[0], lastGap + lastGapFocusOffsets[1]] }, varLabels: [["2", "BF"]] }
      : {}),
    ...overrides,
  } as LensData;
}

/**
 * Three-station zoom host: two positive elements whose separation is the zoom variable, in paraxial focus at
 * every station.
 *
 * @param overrides - fields replaced on the fixture (e.g. `zoomApertureModel`)
 * @returns defaulted zoom lens data (not built)
 */
export function teleconverterZoomHostData(overrides: Partial<LensData> = {}): LensData {
  const separations = [5, 12, 20];
  const stationSurfaces = (separation: number): SurfaceData[] => [
    { label: "STO", R: 1e15, nd: 1.0, sd: 15, d: 1, elemId: 0 },
    { label: "1", R: 80, nd: 1.5168, sd: 15, d: 4, elemId: 1 },
    { label: "2", R: -80, nd: 1.0, sd: 15, d: separation, elemId: 0 },
    { label: "3", R: 80, nd: 1.5168, sd: 15, d: 4, elemId: 2 },
    { label: "4", R: -80, nd: 1.0, sd: 15, d: 0, elemId: 0 },
  ];
  const backFocus = separations.map((separation) => paraxialImageDistance(stationSurfaces(separation)));
  const focalLengths = separations.map((separation, station) => {
    const surfaces = stationSurfaces(separation);
    surfaces[4].d = backFocus[station];
    return -1 / paraxialTrace(surfaces, 1, 0, { skipLastTransfer: true }).u;
  });
  const surfaces = stationSurfaces(separations[0]);
  surfaces[4].d = backFocus[0];
  return {
    ...LENS_DEFAULTS,
    key: "test-teleconverter-zoom-host",
    name: "Test converter zoom host",
    closeFocusM: 0.5,
    yScFill: 0.55,
    nominalFno: 4,
    fstopSeries: [4, 5.6, 8, 11, 16],
    lensMounts: ["nikon-f"],
    acceptsTeleconverters: true,
    elements: [BASE_ELEMENT, { ...BASE_ELEMENT, id: 2, name: "Fixture element 2", label: "L2" }],
    surfaces,
    zoomPositions: focalLengths.map((focalLength) => Math.round(focalLength * 100) / 100),
    var: {
      "2": separations.map((separation) => [separation, separation]),
      "4": backFocus.map((gap) => [gap, gap]),
    },
    varLabels: [
      ["2", "D2"],
      ["4", "BF"],
    ],
    ...overrides,
  } as LensData;
}
