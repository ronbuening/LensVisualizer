/**
 * V1/V2 fixture pairs — one small prescription per feature family, written once in each version.
 *
 * Each pair says the same thing, so the two ingest to one canonical prescription and compare equal canonically. The
 * V2 side omits what V2 drops: a derived or scheduled stop's `sd`, a variable gap's `d`, zero aspheric terms, and the
 * `elemId` + `nd` spelling of a surface's medium. The permanent converter keeps these pairs
 * as its regression suite, independent of app ingest.
 */

import { ASPHERIC_COEFFICIENT_SCHEMA } from "../../../../src/types/asphericSchema.js";
import type { LensDataV2Input, SurfaceV2Input, TeleconverterDataV2Input } from "../../../../src/types/lensDataV2.js";
import type { ElementData, LensDataInput, SurfaceData } from "../../../../src/types/optics.js";
import type { TeleconverterData } from "../../../../src/types/teleconverter.js";
import { teleconverterFixture, teleconverterHostData } from "../testLensFixtures.js";

export type FixturePair =
  | { family: string; kind: "lens"; v1: LensDataInput; v2: LensDataV2Input }
  | { family: string; kind: "teleconverter"; v1: TeleconverterData; v2: TeleconverterDataV2Input };

const ELEMENT: ElementData = {
  id: 1,
  name: "L1",
  label: "Element 1",
  type: "Biconvex Positive",
  nd: 1.5168,
  vd: 64.17,
};
const F_STOPS = [2, 2.8, 4, 5.6, 8, 11, 16];

/** STO, then one biconvex element: the simple positive lens of the engine fixtures. */
function v1Surfaces(stopGap = 1, imageGap = 80): SurfaceData[] {
  return [
    { label: "STO", R: 1e15, d: stopGap, nd: 1, elemId: 0, sd: 15 },
    { label: "1", R: 50, d: 5, nd: 1.5168, elemId: 1, sd: 15 },
    { label: "2", R: -50, d: imageGap, nd: 1, elemId: 0, sd: 15 },
  ];
}

/** The same surfaces in V2: the derived stop carries no `sd`, and a gap in `gaps` no `d`. */
function v2Surfaces({ stopGap = 1, imageGap = 80 }: { stopGap?: number | null; imageGap?: number | null } = {}) {
  const surfaces: SurfaceV2Input[] = [
    { label: "STO", R: "flat", d: stopGap ?? undefined },
    { label: "1", R: 50, d: 5, sd: 15, medium: 1 },
    { label: "2", R: -50, d: imageGap ?? undefined, sd: 15 },
  ];
  for (const surface of surfaces) if (surface.d === undefined) delete surface.d;
  return surfaces;
}

function v1Prime(key: string, overrides: Partial<LensDataInput> = {}): LensDataInput {
  return {
    key,
    name: `Fixture ${key}`,
    closeFocusM: 0.5,
    yScFill: 0.55,
    nominalFno: 2,
    fstopSeries: F_STOPS,
    elements: [ELEMENT],
    surfaces: v1Surfaces(),
    ...overrides,
  };
}

function v2Prime(key: string, overrides: Partial<LensDataV2Input> = {}): LensDataV2Input {
  return {
    schema: 2,
    key,
    name: `Fixture ${key}`,
    elements: [ELEMENT],
    surfaces: v2Surfaces(),
    focus: { closeFocusM: 0.5 },
    aperture: { nominalFNumber: 2, fStops: F_STOPS },
    layout: { yScFill: 0.55 },
    ...overrides,
  };
}

/** A three-station zoom whose stop gap is the zoom variable. */
const ZOOM_STOP_GAPS: [number, number][] = [
  [1, 1],
  [3, 3],
  [5, 5],
];

function v1Zoom(key: string, overrides: Partial<LensDataInput> = {}): LensDataInput {
  return v1Prime(key, {
    zoomPositions: [24, 50, 100],
    var: { STO: ZOOM_STOP_GAPS.map(([inf, close]): [number, number] => [inf, close]) },
    ...overrides,
  });
}

function v2Zoom(key: string, overrides: Partial<LensDataV2Input> = {}): LensDataV2Input {
  return v2Prime(key, {
    surfaces: v2Surfaces({ stopGap: null }),
    zoom: { stations: [{ focalLengthMm: 24 }, { focalLengthMm: 50 }, { focalLengthMm: 100 }] },
    gaps: { STO: { values: ZOOM_STOP_GAPS.map((row) => [...row]) } },
    ...overrides,
  });
}

/* ── Folded fixtures, as in `testLensFixtures.ts` ── */

const MANGIN_ELEMENT: ElementData = {
  id: 1,
  name: "MG",
  label: "Mangin mirror",
  type: "Second-Surface Mirror",
  nd: 2,
  vd: 20,
};

const MANGIN_REFLECTION = {
  type: "reflect",
  incidentSide: "front",
  inactiveSide: "block",
  mirrorKind: "second-surface",
} as const;

const MANGIN_PATH = {
  surfaceOrder: ["STO", "MG1", "MG2", "MG1"],
  imagePlane: { z: 95, label: "IMG" },
  maxInteractions: 5,
};

function v1Mangin(key: string, element: ElementData = MANGIN_ELEMENT): LensDataInput {
  return v1Prime(key, {
    nominalFno: 4,
    focalLengthDesign: 10,
    elements: [element],
    surfaces: [
      { label: "STO", R: 1e15, d: 100, nd: 1, elemId: 0, sd: 15 },
      { label: "MG1", R: 1e15, d: 10, nd: 2, elemId: 1, sd: 15 },
      { label: "MG2", R: -40, d: 0, nd: 1, elemId: 0, sd: 15, interaction: MANGIN_REFLECTION },
    ],
    groups: [{ text: "MG", fromSurface: "MG1", toSurface: "MG2" }],
    opticalPath: MANGIN_PATH,
  });
}

function v2Mangin(key: string, element: LensDataV2Input["elements"][number] = MANGIN_ELEMENT): LensDataV2Input {
  return v2Prime(key, {
    catalog: { focalLengthMm: { design: 10 } },
    elements: [element],
    surfaces: [
      /* A folded system keeps its stop's authored radius. */
      { label: "STO", R: "flat", d: 100, sd: 15 },
      { label: "MG1", R: "flat", d: 10, sd: 15, medium: 1 },
      { label: "MG2", R: -40, d: 0, sd: 15, interaction: MANGIN_REFLECTION },
    ],
    aperture: { nominalFNumber: 4, fStops: F_STOPS },
    groups: [{ text: "MG", fromSurface: "MG1", toSurface: "MG2" }],
    opticalPath: MANGIN_PATH,
  });
}

const FLAT_MIRROR = { type: "reflect", inactiveSide: "block", mirrorKind: "first-surface" } as const;
const MIRROR_ELEMENTS: ElementData[] = [
  { id: 1, name: "MA", label: "Mirror A", type: "Flat First-Surface Mirror", nd: 1, vd: 0 },
  { id: 2, name: "MB", label: "Mirror B", type: "Flat First-Surface Mirror", nd: 1, vd: 0 },
];
const AUTO_PATH = { mode: "auto", imagePlane: { z: 50, label: "IMG" }, maxInteractions: 8 } as const;
const MIRROR_GROUPS = [
  { text: "MA", fromSurface: "MA", toSurface: "MA" },
  { text: "MB", fromSurface: "MB", toSurface: "MB" },
];

/* ── Media ── */

const MEDIA_ELEMENTS: ElementData[] = [
  ELEMENT,
  { id: 2, name: "L2", label: "Element 2", type: "Negative Meniscus", nd: 1.7552, vd: 27.53 },
];

/* ── Pairs ── */

const TELECONVERTER_V1 = teleconverterFixture();

/** Back focus of the converter host: the simple positive lens in exact paraxial focus, which the converter fits. */
const HOST_BACK_FOCUS = teleconverterHostData().surfaces[2].d;

/** A three-station zoom with three focus keyframes: the stop gap zooms and the back focus focuses. */
const ZOOM_FOCUS_BACK_FOCUS: [number, number, number][] = [
  [80, 80.8, 82],
  [80, 80.9, 82.2],
  [80, 81, 82.4],
];

export const FIXTURE_PAIRS: readonly FixturePair[] = [
  {
    family: "prime",
    kind: "lens",
    v1: v1Prime("fixture-prime", {
      maker: "Fixture Optical",
      subtitle: "FIXTURE EXAMPLE 1",
      visible: true,
      specs: ["1 ELEMENT / 1 GROUP"],
      focalLengthMarketing: 50,
      focalLengthDesign: 48.4,
      apertureMarketing: 2,
      apertureDesign: 2.05,
      lensMounts: ["nikon-z"],
      imageFormat: "135-full-frame",
      patentNumber: "JP 2000-000001 A",
      patentYear: 2000,
      patentAuthors: ["Ada Lovelace"],
      patentAssignees: ["Fixture Optical Co., Ltd."],
      elementCount: 1,
      groupCount: 1,
      elements: [{ ...ELEMENT, fl: 48.4, glass: "N-BK7", apd: false, indexReference: "d", role: "The only element" }],
      asph: { "1": { K: -0.5, A4: 1.2e-6, A6: 0, A8: -3e-11, A10: 0, A12: 0, A14: 0 } },
      focusDescription: "Unit focus.",
      scFill: 0.5,
      apertureBlades: 9,
      apertureBladeRoundedness: 0.8,
      groups: [{ text: "G1", fromSurface: "1", toSurface: "2" }],
    }),
    v2: v2Prime("fixture-prime", {
      maker: "Fixture Optical",
      subtitle: "FIXTURE EXAMPLE 1",
      visible: true,
      catalog: {
        lensMounts: ["nikon-z"],
        imageFormat: "135-full-frame",
        specs: ["1 ELEMENT / 1 GROUP"],
        elementCount: 1,
        groupCount: 1,
        focalLengthMm: { marketing: 50, design: 48.4 },
        fNumber: { marketing: 2, design: 2.05 },
      },
      source: {
        patentNumber: "JP 2000-000001 A",
        patentYear: 2000,
        authors: ["Ada Lovelace"],
        assignees: ["Fixture Optical Co., Ltd."],
      },
      elements: [
        { ...ELEMENT, focalLengthMm: 48.4, glass: "N-BK7", apd: false, indexReference: "d", role: "The only element" },
      ],
      surfaces: [
        { label: "STO", R: "flat", d: 1 },
        { label: "1", R: 50, d: 5, sd: 15, medium: 1, asphere: { K: -0.5, A4: 1.2e-6, A8: -3e-11 } },
        { label: "2", R: -50, d: 80, sd: 15 },
      ],
      focus: { closeFocusM: 0.5, description: "Unit focus." },
      aperture: { nominalFNumber: 2, fStops: F_STOPS, blades: 9, bladeRoundedness: 0.8 },
      groups: [{ text: "G1", fromSurface: "1", toSurface: "2" }],
      layout: { scFill: 0.5, yScFill: 0.55 },
    }),
  },
  {
    family: "zoom",
    kind: "lens",
    v1: v1Zoom("fixture-zoom", {
      nominalFno: [2, 2.4, 2.8],
      zoomCloseFocusM: [0.4, 0.5, 0.6],
      zoomLabels: ["Wide", "Tele"],
      zoomStep: 0.002,
      zoomApertureModel: "from-nominal-fno",
      varLabels: [["STO", "D0"]],
    }),
    v2: v2Zoom("fixture-zoom", {
      zoom: {
        stations: [
          { focalLengthMm: 24, nominalFNumber: 2, closeFocusM: 0.4, label: "Wide" },
          { focalLengthMm: 50, nominalFNumber: 2.4, closeFocusM: 0.5 },
          { focalLengthMm: 100, nominalFNumber: 2.8, closeFocusM: 0.6, label: "Tele" },
        ],
        apertureModel: "from-nominal-fno",
        step: 0.002,
      },
      gaps: { STO: { label: "D0", values: ZOOM_STOP_GAPS.map((row) => [...row]) } },
      aperture: { fStops: F_STOPS },
    }),
  },
  {
    family: "fixed-iris zoom",
    kind: "lens",
    v1: v1Zoom("fixture-fixed-iris-zoom", { zoomApertureModel: "fixed-iris" }),
    v2: v2Zoom("fixture-fixed-iris-zoom", {
      zoom: {
        stations: [{ focalLengthMm: 24 }, { focalLengthMm: 50 }, { focalLengthMm: 100 }],
        apertureModel: "fixed-iris",
      },
    }),
  },
  {
    family: "focus keyframes",
    kind: "lens",
    v1: v1Prime("fixture-focus-keyframes", {
      focusPositions: [0, 0.4, 1],
      focusStep: 0.002,
      var: { "2": [80, 81, 82.5] },
      varLabels: [["2", "BF"]],
    }),
    v2: v2Prime("fixture-focus-keyframes", {
      surfaces: v2Surfaces({ imageGap: null }),
      focus: { closeFocusM: 0.5, keyframes: [0, 0.4, 1], step: 0.002 },
      gaps: { "2": { label: "BF", values: [[80, 81, 82.5]] } },
    }),
  },
  {
    family: "published stations",
    kind: "lens",
    v1: v1Zoom("fixture-published-stations", {
      nominalFno: 2,
      var: {
        STO: ZOOM_STOP_GAPS.map(([inf, close]): [number, number] => [inf, close]),
        "2": [80, 80, 80].map((inf): [number, number] => [inf, inf + 2]),
      },
      publishedStations: { zoom: [0, 2], focus: [1] },
    }),
    v2: v2Zoom("fixture-published-stations", {
      surfaces: v2Surfaces({ stopGap: null, imageGap: null }),
      zoom: {
        stations: [
          { focalLengthMm: 24, publishedFocus: [1] },
          { focalLengthMm: 50, published: false },
          { focalLengthMm: 100, publishedFocus: [1] },
        ],
      },
      gaps: {
        STO: { values: ZOOM_STOP_GAPS.map((row) => [...row]) },
        "2": { values: [80, 80, 80].map((inf) => [inf, inf + 2]) },
      },
    }),
  },
  {
    family: "published stations (prime)",
    kind: "lens",
    v1: v1Prime("fixture-published-prime", { var: { "2": [80, 82] }, publishedStations: { focus: [1] } }),
    v2: v2Prime("fixture-published-prime", {
      surfaces: v2Surfaces({ imageGap: null }),
      focus: { closeFocusM: 0.5, published: [1] },
      gaps: { "2": { values: [[80, 82]] } },
    }),
  },
  {
    family: "conjugates",
    kind: "lens",
    v1: v1Prime("fixture-conjugates", {
      var: { "2": [80, 82] },
      finiteConjugates: [
        {
          focusT: 1,
          zoomT: 0,
          objectDistanceMm: 500,
          distanceReference: "first-surface",
          source: "Fixture, Table 2",
        },
      ],
    }),
    v2: v2Prime("fixture-conjugates", {
      surfaces: v2Surfaces({ imageGap: null }),
      focus: {
        closeFocusM: 0.5,
        conjugates: [
          {
            zoomStation: 0,
            keyframe: 1,
            objectDistanceMm: 500,
            distanceReference: "first-surface",
            source: "Fixture, Table 2",
          },
        ],
      },
      gaps: { "2": { values: [[80, 82]] } },
    }),
  },
  {
    family: "aberration control",
    kind: "lens",
    v1: v1Prime("fixture-aberration-control", {
      aberrationControl: {
        label: "Softness",
        minLabel: "Sharp",
        maxLabel: "Soft",
        step: 0.01,
        var: { STO: [1, 1.5] },
        varLabels: [["STO", "D0"]],
      },
    }),
    v2: v2Prime("fixture-aberration-control", {
      aberrationControl: {
        label: "Softness",
        minLabel: "Sharp",
        maxLabel: "Soft",
        step: 0.01,
        gaps: { STO: { label: "D0", values: [1, 1.5] } },
      },
    }),
  },
  {
    family: "folded (explicit)",
    kind: "lens",
    v1: v1Mangin("fixture-folded-explicit"),
    v2: v2Mangin("fixture-folded-explicit"),
  },
  {
    family: "folded (auto)",
    kind: "lens",
    v1: v1Prime("fixture-folded-auto", {
      nominalFno: 4,
      focalLengthDesign: 100,
      elements: MIRROR_ELEMENTS,
      surfaces: [
        { label: "STO", R: 1e15, d: 5, nd: 1, elemId: 0, sd: 20 },
        {
          label: "MA",
          R: 1e15,
          d: 10,
          nd: 1,
          elemId: 1,
          sd: 20,
          interaction: { ...FLAT_MIRROR, incidentSide: "rear" },
        },
        {
          label: "MB",
          R: 1e15,
          d: 0,
          nd: 1,
          elemId: 2,
          sd: 20,
          interaction: { ...FLAT_MIRROR, incidentSide: "front" },
        },
      ],
      groups: MIRROR_GROUPS,
      opticalPath: AUTO_PATH,
    }),
    v2: v2Prime("fixture-folded-auto", {
      catalog: { focalLengthMm: { design: 100 } },
      elements: MIRROR_ELEMENTS,
      surfaces: [
        { label: "STO", R: "flat", d: 5, sd: 20 },
        { label: "MA", R: "flat", d: 10, sd: 20, medium: 1, interaction: { ...FLAT_MIRROR, incidentSide: "rear" } },
        { label: "MB", R: "flat", d: 0, sd: 20, medium: 2, interaction: { ...FLAT_MIRROR, incidentSide: "front" } },
      ],
      aperture: { nominalFNumber: 4, fStops: F_STOPS },
      groups: MIRROR_GROUPS,
      opticalPath: AUTO_PATH,
    }),
  },
  {
    family: "mirrors with spans",
    kind: "lens",
    v1: v1Mangin("fixture-mirror-span", { ...MANGIN_ELEMENT, fromSurface: "MG1", toSurface: "MG2" }),
    v2: v2Mangin("fixture-mirror-span", { ...MANGIN_ELEMENT, span: ["MG1", "MG2"] }),
  },
  {
    family: "diffractive",
    kind: "lens",
    v1: v1Prime("fixture-diffractive", {
      surfaces: v1Surfaces().map((surface) =>
        surface.label === "1"
          ? {
              ...surface,
              diffractive: {
                kind: "radial-polynomial",
                referenceWavelengthNm: 587.6,
                diffractionOrder: 1,
                terms: [{ radialPower: 2, coefficient: -1e-4 }],
              },
            }
          : surface,
      ),
    }),
    v2: v2Prime("fixture-diffractive", {
      surfaces: v2Surfaces().map((surface) =>
        surface.label === "1"
          ? {
              ...surface,
              diffractive: {
                kind: "radial-polynomial",
                referenceWavelengthNm: 587.6,
                diffractionOrder: 1,
                terms: [{ radialPower: 2, coefficient: -1e-4 }],
              },
            }
          : surface,
      ),
    }),
  },
  {
    family: "absorption",
    kind: "lens",
    v1: v1Prime("fixture-absorption", { elements: [{ ...ELEMENT, absorptionCoefficientPerMm: 0.01 }] }),
    v2: v2Prime("fixture-absorption", { elements: [{ ...ELEMENT, absorptionCoefficientPerMm: 0.01 }] }),
  },
  {
    family: "rear plates",
    kind: "lens",
    v1: v1Prime("fixture-rear-plates", {
      imageFormat: "135-full-frame",
      surfaces: v1Surfaces(1, 44),
      rearPlates: [
        {
          label: "CG",
          thicknessMm: 2,
          nd: 1.5168,
          vd: 64.17,
          glass: "N-BK7",
          indexReference: "d",
          gapAfterMm: 1,
          source: "Fixture, Table 1",
        },
      ],
    }),
    v2: v2Prime("fixture-rear-plates", {
      catalog: { imageFormat: "135-full-frame" },
      surfaces: v2Surfaces({ imageGap: 44 }),
      rearPlates: [
        {
          label: "CG",
          thicknessMm: 2,
          nd: 1.5168,
          vd: 64.17,
          glass: "N-BK7",
          indexReference: "d",
          gapAfterMm: 1,
          source: "Fixture, Table 1",
        },
      ],
    }),
  },
  {
    family: "media",
    kind: "lens",
    v1: v1Prime("fixture-media", {
      elements: MEDIA_ELEMENTS,
      surfaces: [
        { label: "WTR", R: 1e15, d: 0.001, nd: 1.33306, elemId: 0, sd: 20 },
        { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 15 },
        { label: "1", R: 50, d: 5, nd: 1.5168, elemId: 1, sd: 15 },
        { label: "2", R: -50, d: 0.01, nd: 1.56732, elemId: 0, sd: 15 },
        { label: "3", R: -50, d: 2, nd: 1.7552, elemId: 2, sd: 15 },
        { label: "4", R: -200, d: 75, nd: 1, elemId: 0, sd: 15 },
      ],
    }),
    /* Declared in another order and named as an author would: ingest numbers media by first use either way. */
    v2: v2Prime("fixture-media", {
      elements: MEDIA_ELEMENTS,
      media: [
        { id: "cement", name: "Cement layer", nd: 1.56732 },
        { id: "water", name: "Water", nd: 1.33306 },
      ],
      surfaces: [
        { label: "WTR", R: "flat", d: 0.001, sd: 20, medium: "water" },
        { label: "STO", R: "flat", d: 1 },
        { label: "1", R: 50, d: 5, sd: 15, medium: 1 },
        { label: "2", R: -50, d: 0.01, sd: 15, medium: "cement" },
        { label: "3", R: -50, d: 2, sd: 15, medium: 2 },
        { label: "4", R: -200, d: 75, sd: 15 },
      ],
    }),
  },
  {
    family: "perspective control",
    kind: "lens",
    v1: v1Prime("fixture-perspective-control", {
      imageFormat: "135-full-frame",
      perspectiveControl: {
        shiftRangeMm: [-11.5, 11.5],
        tiltRangeDeg: [-8.5, 8.5],
        tiltPivot: { frame: "camera", basis: "rear-vertex-fallback", zOffsetFromImagePlaneMm: -10 },
      },
    }),
    v2: v2Prime("fixture-perspective-control", {
      catalog: { imageFormat: "135-full-frame" },
      perspectiveControl: {
        shiftRangeMm: [-11.5, 11.5],
        tiltRangeDeg: [-8.5, 8.5],
        tiltPivot: { frame: "camera", basis: "rear-vertex-fallback", zOffsetFromImagePlaneMm: -10 },
      },
    }),
  },
  {
    family: "projection",
    kind: "lens",
    v1: v1Prime("fixture-projection", { projection: { kind: "rectilinear", fullFieldDeg: 70, maxTraceFieldDeg: 30 } }),
    v2: v2Prime("fixture-projection", { projection: { kind: "rectilinear", fullFieldDeg: 70, maxTraceFieldDeg: 30 } }),
  },
  {
    family: "stop schedule",
    kind: "lens",
    v1: v1Zoom("fixture-stop-schedule", { nominalFno: 2, zoomStopSemiDiameters: [5, 5.5, 6] }),
    v2: v2Zoom("fixture-stop-schedule", {
      zoom: {
        stations: [
          { focalLengthMm: 24, stopSemiDiameter: 5 },
          { focalLengthMm: 50, stopSemiDiameter: 5.5 },
          { focalLengthMm: 100, stopSemiDiameter: 6 },
        ],
      },
    }),
  },
  {
    family: "stop inside an element",
    kind: "lens",
    v1: v1Prime("fixture-embedded-stop", {
      elements: [{ ...ELEMENT, fromSurface: "1", toSurface: "2" }],
      surfaces: [
        { label: "1", R: 50, d: 2.5, nd: 1.5168, elemId: 1, sd: 15 },
        { label: "STO", R: 1e15, d: 2.5, nd: 1.5168, elemId: 1, sd: 10, stopPlacement: "inside-element" },
        { label: "2", R: -50, d: 80, nd: 1, elemId: 0, sd: 15 },
      ],
    }),
    v2: v2Prime("fixture-embedded-stop", {
      elements: [{ ...ELEMENT, span: ["1", "2"] }],
      surfaces: [
        { label: "1", R: 50, d: 2.5, sd: 15, medium: 1 },
        /* A stop inside glass keeps its authored radius. */
        { label: "STO", R: "flat", d: 2.5, sd: 10, medium: 1, stopPlacement: "inside-element" },
        { label: "2", R: -50, d: 80, sd: 15 },
      ],
    }),
  },
  {
    family: "zoom with focus keyframes",
    kind: "lens",
    v1: v1Zoom("fixture-zoom-focus-keyframes", {
      nominalFno: 2,
      focusPositions: [0, 0.5, 1],
      var: {
        STO: ZOOM_STOP_GAPS.map(([inf]): [number, number, number] => [inf, inf, inf]),
        "2": ZOOM_FOCUS_BACK_FOCUS.map((row): [number, number, number] => [...row]),
      },
    }),
    v2: v2Zoom("fixture-zoom-focus-keyframes", {
      surfaces: v2Surfaces({ stopGap: null, imageGap: null }),
      focus: { closeFocusM: 0.5, keyframes: [0, 0.5, 1] },
      gaps: {
        STO: { values: ZOOM_STOP_GAPS.map(([inf]) => [inf, inf, inf]) },
        "2": { values: ZOOM_FOCUS_BACK_FOCUS.map((row) => [...row]) },
      },
    }),
  },
  {
    family: "converter host",
    kind: "lens",
    v1: v1Prime("fixture-converter-host", {
      lensMounts: ["nikon-f"],
      acceptsTeleconverters: true,
      elementCount: 1,
      groupCount: 1,
      surfaces: v1Surfaces(1, HOST_BACK_FOCUS),
    }),
    v2: v2Prime("fixture-converter-host", {
      catalog: { lensMounts: ["nikon-f"], elementCount: 1, groupCount: 1, acceptsTeleconverters: true },
      surfaces: v2Surfaces({ imageGap: HOST_BACK_FOCUS }),
    }),
  },
  {
    family: "teleconverter",
    kind: "teleconverter",
    v1: TELECONVERTER_V1,
    v2: {
      schema: 2,
      key: TELECONVERTER_V1.key,
      name: TELECONVERTER_V1.name,
      catalog: { lensMounts: ["nikon-f"], elementCount: 1, groupCount: 1 },
      magnification: 1.4,
      masterImageDistanceMm: TELECONVERTER_V1.masterImageDistanceMm,
      elements: TELECONVERTER_V1.elements,
      surfaces: [
        { label: "1", R: -54, d: 2, sd: 12, medium: 1 },
        { label: "2", R: "flat", d: TELECONVERTER_V1.surfaces[1].d, sd: 12 },
      ],
    },
  },
];

/** A copy of a file with every record's members in reverse order, so a view that kept the source's order would fail. */
export function reversed<T>(value: T): T {
  if (Array.isArray(value)) return value.map(reversed) as T;
  if (value === null || typeof value !== "object") return value;
  return Object.fromEntries(
    Object.entries(value)
      .reverse()
      .map(([key, member]) => [key, reversed(member)]),
  ) as T;
}

/** A zoom that writes every V2 member a lens can hold, each record's members in the order of the V2 types. */
export const MAXIMAL_ZOOM: LensDataV2Input = {
  schema: 2,
  key: "fixture-maximal",
  maker: "Fixture Optical",
  name: "Fixture 24-100mm f/2-2.8",
  subtitle: "EVERY FIELD",
  visible: false,
  publishedAt: "2026-10-14",
  catalog: {
    lensMounts: ["nikon-z"],
    imageFormat: "135-full-frame",
    imageCircleMm: 43.3,
    specs: ["2 ELEMENTS / 2 GROUPS"],
    elementCount: 2,
    groupCount: 2,
    acceptsTeleconverters: true,
    opticalConfiguration: { groupKey: "fixture", label: "Every field", order: 1 },
    focalLengthMm: { marketing: [24, 100], design: [24.2, 98] },
    fNumber: { marketing: 2, design: 2.05 },
  },
  source: {
    patentNumber: "JP 2000-000001 A",
    patentYear: 2000,
    authors: ["Ada Lovelace"],
    assignees: ["Fixture Optical Co., Ltd."],
    errata: [{ status: "unresolved", note: "A sum the source does not close." }],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.17,
      indexReference: "e",
      indexReferenceNote: "Tabulated at e.",
      focalLengthMm: 48.4,
      glass: "N-BK7",
      apd: "patent",
      apdNote: "Named in the text.",
      role: "Front positive",
      diagramLabel: "L1",
      maxSdRatio: 0.95,
      absorptionCoefficientPerMm: 0.01,
      cemented: "D1",
      dPgF: 0.001,
      nC: 1.514,
      nF: 1.522,
      ng: 1.527,
      span: ["1", "2"],
    },
    { id: 2, name: "L2", label: "Element 2", type: "Negative Meniscus", nd: 1.7552, vd: 27.53, cemented: "D1" },
  ],
  media: [{ id: "cement", name: "Cement layer", nd: 1.56732 }],
  surfaces: [
    { label: "STO", R: "flat" },
    {
      label: "1",
      R: 50,
      d: 5,
      sd: 15,
      innerSd: 2,
      medium: 1,
      asphere: Object.fromEntries(ASPHERIC_COEFFICIENT_SCHEMA.map(({ key }, index) => [key, (index + 1) * 1e-9])),
      diffractive: {
        kind: "radial-polynomial",
        referenceWavelengthNm: 587.6,
        diffractionOrder: 1,
        terms: [{ radialPower: 2, coefficient: -1e-4 }],
      },
      interaction: { type: "refract" },
    },
    { label: "2", R: -50, d: 0.01, sd: 15, medium: "cement" },
    { label: "3", R: -50, d: 2, sd: 15, medium: 2 },
    { label: "4", R: -200, sd: 15 },
  ],
  zoom: {
    stations: [
      {
        focalLengthMm: 24,
        nominalFNumber: 2,
        stopSemiDiameter: 5,
        closeFocusM: 0.4,
        label: "Wide",
        published: true,
        publishedFocus: [2],
      },
      { focalLengthMm: 50, nominalFNumber: 2.4, stopSemiDiameter: 5.5, closeFocusM: 0.5, published: false },
      { focalLengthMm: 100, nominalFNumber: 2.8, stopSemiDiameter: 6, closeFocusM: 0.6, label: "Tele" },
    ],
    apertureModel: "from-nominal-fno",
    step: 0.002,
  },
  focus: {
    closeFocusM: 0.4,
    keyframes: [0, 0.5, 1],
    step: 0.004,
    description: "Rear focus.",
    conjugates: [
      { zoomStation: 2, keyframe: 2, objectDistanceMm: 600, distanceReference: "first-surface", source: "Table 3" },
    ],
  },
  gaps: {
    STO: { label: "D0", values: [1, 3, 5].map((gap) => [gap, gap, gap]) },
    "4": {
      label: "BF",
      values: [
        [75, 76, 77],
        [75, 76.2, 77.4],
        [75, 76.4, 77.8],
      ],
    },
  },
  aperture: { fStops: [2, 2.8, 4, 5.6, 8], maxFNumber: 16, step: 0.05, blades: 9, bladeRoundedness: 0.8 },
  aberrationControl: {
    label: "Softness",
    description: "Floating correction.",
    minLabel: "Sharp",
    centerLabel: "Normal",
    maxLabel: "Soft",
    step: 0.01,
    gaps: { "3": { label: "D3", values: [1.9, 2.1] } },
  },
  projection: { kind: "rectilinear", fullFieldDeg: 84, maxTraceFieldDeg: 42 },
  perspectiveControl: {
    shiftRangeMm: [-11.5, 11.5],
    tiltRangeDeg: [-8.5, 8.5],
    tiltPivot: { frame: "camera", basis: "rear-vertex-fallback", zOffsetFromImagePlaneMm: -10 },
  },
  rearPlates: [
    {
      label: "CG",
      thicknessMm: 2,
      nd: 1.5168,
      vd: 64.17,
      glass: "N-BK7",
      indexReference: "d",
      dPgF: 0.001,
      nC: 1.514,
      nF: 1.522,
      ng: 1.527,
      gapAfterMm: 1,
      sd: 20,
      source: "Table 1",
    },
  ],
  groups: [{ text: "G1", fromSurface: "1", toSurface: "4" }],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],
  layout: { svgW: 800, svgH: 400, scFill: 0.5, yScFill: 0.55, maxAspectRatio: 2.5, lensShiftFrac: 0.1 },
  rays: { rayFractions: [-1, 0, 1], rayLeadFrac: 0.2, offAxisFieldFrac: 0.65, offAxisFractions: [0.5, 1] },
  checks: { gapSagFrac: 0.4, maxRimAngleDeg: 70 },
};
