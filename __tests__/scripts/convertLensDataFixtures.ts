/**
 * Source-text fixtures for the lens-data converter: synthetic V1 and V2 files, kept as strings so `format:check`
 * never reaches them and each keeps the spelling it tests.
 */

const V1_IMPORT = 'import type { LensDataInput } from "../../types/optics.js";';

/** A V1 lens file around the given members, its object named `LENS_DATA`. */
export function v1LensFile(members: string, header = "/** A synthetic lens. */"): string {
  return `${V1_IMPORT}\n\n${header}\n\nconst LENS_DATA = {\n${members}\n} satisfies LensDataInput;\n\nexport default LENS_DATA;\n`;
}

/** The members of a minimal prime whose stop radius the engine derives. */
export const PRIME_MEMBERS = `  key: "fixture-prime",
  name: "Fixture 50mm f/2",
  closeFocusM: 0.5,
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  yScFill: 0.55,
  elements: [{ id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.5168, vd: 64.17 }],
  surfaces: [
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 12.5 },
    { label: "1", R: 50, d: 5, nd: 1.5168, elemId: 1, sd: 15 }, // L1 front
    { label: "2", R: -50, d: 80, nd: 1, elemId: 0, sd: 15 },
  ],`;

/**
 * Most literal and comment forms the catalog uses, in one V1 prime: quoted and unquoted numeric keys, `null`, a
 * single-quoted string and one with escaped quotes, `as` wrappers, a sign, a computed number and joined strings,
 * `undefined`, padded number tokens, a flat radius spelled out, empty containers, block and line comments in every
 * place, blank lines, and the `export default X satisfies T` frame.
 */
export const FORMS_FILE = `import type { LensDataInput } from "../../types/optics.js";

/**
 * Fixture header: kept byte for byte. The stop sd of 12.5 mm was traced at f/2.
 */

const lensData = {
  "key": "fixture-forms",
  maker: null,
  name: 'Fixture 50mm f/2',
  subtitle: "PATENT \\"EXAMPLE\\" 1",
  focalLengthMarketing: [10, 18] as [number, number],
  nominalFno: 2,
  closeFocusM: 1e15,
  // A comment separated from its entry by a blank line.

  fstopSeries: [2, 2.8, 4],
  yScFill: 0.55,
  focusDescription: "Unit focus " + "of the whole lens.",
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.49700,
      vd: 81.54,
      fl: +99.5,
      apd: false as const,
      apdNote: "ED glass, " + "inferred.",
      dPgF: 0.5375 - (0.6438 - 0.001682 * 81.54),
      cemented: undefined,
    },
    { id: 2, name: "L2", label: "Element 2", type: "Plate", nd: 1.5168, vd: 64.17, fl: 1e15 },
  ],
  surfaces: [
    /* Multi-line block comment
       above the stop. */
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 12.5 }, // stop; One-half of the 25.0 mm diameter

    { label: "1", R: 50.0, d: 5, nd: 1.497, elemId: 1, sd: 15 }, // L1 front
    { label: "2", R: 1000000000000000.0, d: 2.0010, nd: 1, elemId: 0, sd: 15 },
    { label: "3", R: 1000000000000000, d: 1, nd: 1.5168, elemId: 2, sd: 15 },
    { label: "4", R: 1e15, d: 70, nd: 1, elemId: 0, sd: 15 },
    // A comment after the last entry.
  ],
  // (moved from an older file) Aspheric terms, every one written as V1 requires.
  asph: {
    "1": { K: 0, A4: 2.05792E-05, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 },
    "3": { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 },
  },
  var: { 2: [2.001, 3.5] },
  groups: [],
};

export default lensData satisfies LensDataInput;
`;

/** A three-station zoom: station lists, labels, gaps out of key order, conjugates, and comments that move. */
export const ZOOM_FILE = v1LensFile(`  key: "fixture-zoom",
  name: "Fixture 24-100mm",
  closeFocusM: 0.5,
  nominalFno: [2, 2.4, 2.8],
  fstopSeries: [2, 2.8, 4],
  yScFill: 0.55,
  elements: [{ id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.5168, vd: 64.17 }],
  surfaces: [
    {
      label: "STO",
      R: 1e15,
      d: 1,
      nd: 1,
      elemId: 0,
      sd: 9.5, // calibrated by hand to the wide f-number
    },
    { label: "1", R: 50, d: 5, nd: 1.5168, elemId: 1, sd: 15 },
    { label: "2", R: -50, d: 80, nd: 1, elemId: 0, sd: 15 },
  ],
  /* ── Zoom ── */
  zoomPositions: [24, 50, 100],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "2": [
      [80, 81],
      [80, 82],
      [80, 83],
    ],
    // The stop gap is the zoom variable.
    STO: [
      [1, 1],
      [3, 3],
      [5, 5],
    ],
  },
  varLabels: [
    ["STO", "D0"], // before the second gap
    ["2", "BF"],
  ],
  finiteConjugates: [
    { focusT: 1, zoomT: 0.0, objectDistanceMm: 500, distanceReference: "image-plane", source: "Table 2" },
  ],
  publishedStations: { zoom: [0, 2], focus: [1] },`);

/**
 * Two element records under `// prettier-ignore`, column-aligned as the catalog's are, the first after a group
 * comment, a padded number in each, and one padded number outside them.
 */
export const PRETTIER_IGNORE_FILE = v1LensFile(`  key: "fixture-prettier-ignore",
  name: "Fixture 50mm f/2",
  closeFocusM: 0.5,
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4],
  yScFill: 0.55,
  elements: [
    // G1 — front group
    // prettier-ignore
    { id: 1,  name: "L1", label: "Element 1", type: "Biconvex Positive",  nd: 1.51680, vd: 64.17, role: "Front positive element of the fixture's only group, written on one line as its source does" },
    // prettier-ignore
    { id: 2,  name: "L2", label: "Element 2", type: "Negative Meniscus",  nd: 1.75520, vd: 27.53, role: "Rear negative meniscus of the fixture's only group, written on one line as its source does" },
  ],
  surfaces: [
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 12.5 },
    { label: "1", R: 50.00, d: 5, nd: 1.5168, elemId: 1, sd: 15 },
    { label: "2", R: -50, d: 1, nd: 1, elemId: 0, sd: 15 },
    { label: "3", R: -40, d: 2, nd: 1.7552, elemId: 2, sd: 15 },
    { label: "4", R: -200, d: 75, nd: 1, elemId: 0, sd: 15 },
  ],`);

/**
 * The layout rulings in one V1 prime: section banners over top-level fields, the file's first field among them, an
 * inner comment, an empty `var` whose comments say how the lens focuses, a run of comments moved from one path, and
 * comment lines that quote the stop radius as written and rounded.
 */
export const RULINGS_FILE = v1LensFile(`  /* ── Identity ── */
  key: "fixture-rulings",
  name: "Fixture 50mm f/2",

  /* ── Focus ── */
  closeFocusM: /* metres */ 0.5,
  // Said once, for the whole lens.
  focusDescription: "Unit focus.",

  /* ── Aperture ── */
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4],

  /* ── Layout ── */
  yScFill: 0.55,

  elements: [{ id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.5168, vd: 64.17 }],
  surfaces: [
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 12.4987 },
    { label: "1", R: 50, d: 5, nd: 1.5168, elemId: 1, sd: 15 },
    { label: "2", R: -50, d: 80, nd: 1, elemId: 0, sd: 15 },
  ],
  // Unit focus moves the whole lens, so no air gap varies.
  // The semi-diameter 12.50 mm was read off the drawing; 12.5 is the round figure.
  var: {},
  /* ── Aspheric terms ── */
  // Every term is written,
  // as V1 requires.
  asph: { "1": { K: 0, A4: 1.25e-6, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } },`);

/**
 * A V1 prime laid out in the lens template's sections, each under the template's banner, as a catalog file is: the
 * rear-plate and zoom sections a prime leaves out keep their banners and commented-out fields.
 */
export const BANNERED_V1_PRIME = v1LensFile(`  /* ── Identity ── */
  key: "fixture-bannered-prime",
  name: "FIXTURE 50mm f/2",
  subtitle: "US 1,234,567 B2 EXAMPLE 1 — FIXTURE",
  specs: ["1 ELEMENT / 1 GROUP", "f = 51.2 mm"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 51.2,
  apertureMarketing: 2,
  lensMounts: ["nikon-z"],
  imageFormat: "135-full-frame",
  patentNumber: "US 1,234,567 B2",
  patentYear: 2019,
  patentAuthors: ["Ada Lovelace"],
  patentAssignees: ["Fixture Optical Co., Ltd."],
  elementCount: 1,
  groupCount: 1,

  /* ── Elements ── */
  elements: [{ id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.5168, vd: 64.17 }],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 12.5 },
    { label: "1", R: 50, d: 5, nd: 1.5168, elemId: 1, sd: 15 }, // L1 front
    { label: "2", R: -50, d: 80, nd: 1, elemId: 0, sd: 15 },
  ],

  /* ── Rear plates ── only when the source lists cover glass behind the last lens. */
  // rearPlates: [
  //   { label: "CG", thicknessMm: 0.0, nd: 1.5168, vd: 64.2, gapAfterMm: 0.0, source: "..." },
  // ],

  /* ── Aspherical coefficients ── keyed by surface label. */
  asph: { "1": { K: 0, A4: 1.25e-6, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } },

  /* ── Variable air spacings (focus mechanism) ── */
  var: { "2": [80, 81] },

  /* ── Published stations (optional) ── */
  publishedStations: { focus: [1] },

  varLabels: [["2", "BF"]],

  /* ── Independent aberration control (optional) ── */
  // aberrationControl: { label: "SOFT", minLabel: "0", maxLabel: "3", step: 0.004, var: {} },

  /* ── Zoom lens fields (optional — omit entirely for prime lenses) ── */
  // zoomPositions: [24, 50, 70],

  /* ── Group and doublet annotations ── */
  groups: [{ text: "G1", fromSurface: "1", toSurface: "2" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription: "Unit focus.",

  /* ── Aperture configuration ── */
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.55,`);

/** The bannered prime, all-spherical as the template writes one: `asph: {}` under its banner. */
export const ALL_SPHERICAL_V1_PRIME = BANNERED_V1_PRIME.replace(
  '  asph: { "1": { K: 0, A4: 1.25e-6, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } },',
  "  asph: {},",
);

/**
 * A V1 zoom laid out in the template's sections, each under the template's banner: its zoom fields, per-station
 * f-numbers and published stations, all three lists the conversion to V2 folds into the stations, and the rear-plate
 * and aberration-control sections it leaves out, with their commented-out fields.
 */
export const BANNERED_V1_ZOOM = v1LensFile(`  /* ── Identity ── */
  key: "fixture-bannered-zoom",
  name: "FIXTURE 24-100mm f/2-2.8",

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: [24, 100],
  apertureMarketing: 2,
  lensMounts: ["nikon-z"],

  /* ── Elements ── */
  elements: [{ id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.5168, vd: 64.17 }],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 9.5 },
    { label: "1", R: 50, d: 5, nd: 1.5168, elemId: 1, sd: 15 },
    { label: "2", R: -50, d: 80, nd: 1, elemId: 0, sd: 15 },
  ],

  /* ── Rear plates ── only when the source lists cover glass behind the last lens. */
  // rearPlates: [
  //   { label: "CG", thicknessMm: 0.0, nd: 1.5168, vd: 64.2, gapAfterMm: 0.0, source: "..." },
  // ],

  /* ── Aspherical coefficients ── keyed by surface label. */
  asph: { "1": { K: 0, A4: 1.25e-6, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } },

  /* ── Variable air spacings (focus mechanism) ── */
  var: {
    STO: [
      [1, 1],
      [3, 3],
      [5, 5],
    ],
    "2": [
      [80, 81],
      [80, 82],
      [80, 83],
    ],
  },

  /* ── Published stations (optional) ── */
  // Other zoom stations are solved.
  publishedStations: { zoom: [0, 2] },

  /* ── Independent aberration control (optional) ── */
  // aberrationControl: { label: "SOFT", minLabel: "0", maxLabel: "3", step: 0.004, var: {} },

  /* ── Zoom lens fields ── presence of zoomPositions makes the lens a zoom. */
  zoomPositions: [24, 50, 100],
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [{ text: "G1", fromSurface: "1", toSurface: "2" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,

  /* ── Aperture configuration ── */
  nominalFno: [2, 2.4, 2.8],
  fstopSeries: [2, 2.8, 4],

  /* ── Layout tuning ── */
  yScFill: 0.55,`);

/**
 * A V2 file as a person writes one: named media out of first-use order, an explicit zero term, and comments, one on
 * `schema` and one on an item of a published list.
 */
export const V2_SOURCE_FILE = `import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2, // the lens-data version
  key: "fixture-v2-source",
  name: "Fixture 50mm f/2",

  elements: [
    { id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.5168, vd: 64.17 },
    { id: 2, name: "L2", label: "Element 2", type: "Negative Meniscus", nd: 1.7552, vd: 27.53 },
  ],

  media: [
    { id: "cement", name: "Cement layer", nd: 1.56732 },
    { id: "water", name: "Water", nd: 1.33306 },
  ],

  surfaces: [
    { label: "WTR", R: "flat", d: 0.001, sd: 20, medium: "water" }, // water ahead of the lens
    { label: "STO", R: "flat", d: 1 },
    { label: "1", R: 50, d: 5, sd: 15, medium: 1, asphere: { A4: 1.25e-6, A6: 0 } },
    { label: "2", R: -50, d: 0.01, sd: 15, medium: "cement" },
    { label: "3", R: -50, d: 2, sd: 15, medium: 2 },
    { label: "4", R: -200, d: 75, sd: 15 },
  ],

  focus: {
    closeFocusM: 0.5,
    published: [
      // the close keyframe
      1,
    ],
  },

  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4] },

  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
`;

/**
 * A V2 zoom whose comments sit on nodes V1 has no counterpart for, a station record and a medium, and on a surface V1
 * keeps. Its stop radius is derived, and its medium is named.
 */
export const COMMENTED_V2_ZOOM = `import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "fixture-v2-commented-zoom",
  name: "Fixture 24-100mm f/2",

  elements: [{ id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.5168, vd: 64.17 }],

  media: [
    // a cement layer between the elements
    { id: "cement", name: "Cement layer", nd: 1.56732 },
  ],

  surfaces: [
    { label: "STO", R: "flat" },
    { label: "1", R: 50, d: 5, sd: 15, medium: 1 }, // L1 front
    { label: "2", R: -50, d: 0.01, sd: 15, medium: "cement" },
    { label: "3", R: -60, sd: 15 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 24 },
      // the middle station, tabulated as Example 2
      { focalLengthMm: 50 },
      { focalLengthMm: 100 },
    ],
  },

  focus: { closeFocusM: 0.5 },

  gaps: {
    STO: {
      values: [
        [1, 1],
        [3, 3],
        [5, 5],
      ],
    },
    "3": {
      values: [
        [80, 81],
        [80, 82],
        [80, 83],
      ],
    },
  },

  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4] },

  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
`;

/** `V2_SOURCE_FILE` without its published close keyframe, so that it builds: what the V1 direction converts. */
export const BUILDABLE_V2 = V2_SOURCE_FILE.replace(
  "  focus: {\n    closeFocusM: 0.5,\n    published: [\n      // the close keyframe\n      1,\n    ],\n  },",
  "  focus: { closeFocusM: 0.5 },",
);

/** A V2 zoom whose comments sit on `schema` and on an item of a station's published keyframes. */
export const V2_ZOOM_SOURCE_FILE = `import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  // Written in V2.
  schema: 2,
  key: "fixture-v2-zoom",
  name: "Fixture 24-100mm",

  elements: [{ id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.5168, vd: 64.17 }],

  surfaces: [
    { label: "STO", R: "flat" },
    { label: "1", R: 50, d: 5, sd: 15, medium: 1 },
    { label: "2", R: -50, sd: 15 },
  ],

  zoom: {
    stations: [
      {
        focalLengthMm: 24,
        nominalFNumber: 2,
        published: true,
        publishedFocus: [
          1, // the close keyframe at the wide end
        ],
      },
      { focalLengthMm: 50, nominalFNumber: 2.4, published: false },
      { focalLengthMm: 100, nominalFNumber: 2.8, published: true },
    ],
  },

  focus: { closeFocusM: 0.5 },

  gaps: {
    STO: {
      values: [
        [1, 1],
        [3, 3],
        [5, 5],
      ],
    },
    "2": {
      values: [
        [80, 81],
        [80, 82],
        [80, 83],
      ],
    },
  },

  aperture: { fStops: [2, 2.8, 4] },

  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
`;

/** A V1 teleconverter file. */
export const TELECONVERTER_FILE = `import type { TeleconverterDataInput } from "../../types/teleconverter.js";

const TELECONVERTER_DATA = {
  key: "fixture-1-4x",
  name: "Fixture 1.4x",
  magnification: 1.4,
  lensMounts: ["nikon-z"],
  masterImageDistanceMm: 40,
  elements: [{ id: 1, name: "T1", label: "Element 1", type: "Biconcave Negative", nd: 1.7552, vd: 27.53 }],
  surfaces: [
    { label: "TC1", R: -60, d: 2, nd: 1.7552, elemId: 1, sd: 9 }, // T1 front
    { label: "TC2", R: 60, d: 30, nd: 1, elemId: 0, sd: 9 },
  ],
  asph: {},
} satisfies TeleconverterDataInput;

export default TELECONVERTER_DATA;
`;

/* ── Expected conversions, reviewed by hand ── */

/** `FORMS_FILE` converted. */
export const FORMS_V2 = `import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Fixture header: kept byte for byte. The stop sd of 12.5 mm was traced at f/2.
 */

const lensData = {
  schema: 2,
  key: "fixture-forms",
  maker: null,
  name: "Fixture 50mm f/2",
  subtitle: 'PATENT "EXAMPLE" 1',

  catalog: { focalLengthMm: { marketing: [10, 18] } },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.49700,
      vd: 81.54,
      focalLengthMm: +99.5,
      apd: false,
      apdNote: "ED glass, " + "inferred.",
      dPgF: 0.5375 - (0.6438 - 0.001682 * 81.54),
    },
    { id: 2, name: "L2", label: "Element 2", type: "Plate", nd: 1.5168, vd: 64.17, focalLengthMm: 1e15 },
  ],

  // (moved from an older file) Aspheric terms, every one written as V1 requires.
  surfaces: [
    /* Multi-line block comment
       above the stop. */
    { label: "STO", R: "flat", d: 1 }, // stop; One-half of the 25.0 mm diameter

    { label: "1", R: 50.0, d: 5, sd: 15, medium: 1, asphere: { A4: 2.05792E-05 } }, // L1 front
    { label: "2", R: "flat", sd: 15 },
    { label: "3", R: "flat", d: 1, sd: 15, medium: 2, asphere: {} },
    { label: "4", R: "flat", d: 70, sd: 15 },
    // A comment after the last entry.
  ],

  focus: { closeFocusM: 1e15, description: "Unit focus " + "of the whole lens." },

  gaps: { "2": { values: [[2.001, 3.5]] } },

  aperture: {
    nominalFNumber: 2,
    // A comment separated from its entry by a blank line.
    fStops: [2, 2.8, 4],
  },

  groups: [],

  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default lensData;
`;

/** The report of `FORMS_FILE`'s conversion. */
export const FORMS_REPORT = `src/lens-data/fixture/Fixture.data.ts
  moved comments:
    line 47: asph → surfaces: // (moved from an older file) Aspheric terms, every one written as V1 requires.
  stop radius dropped: surfaces[0].sd = 12.5
    engine radius: 25.151 mm
    comments on the stop entry:
      line 37: /* Multi-line block comment above the stop. */
      line 39 (radius): // stop; One-half of the 25.0 mm diameter
    elsewhere in the file:
      line 4: * Fixture header: kept byte for byte. The stop sd of 12.5 mm was traced at f/2.
  zero aspheric terms dropped:
    asph["1"]: K, A6, A8, A10, A12, A14
    asph["3"]: K, A4, A6, A8, A10, A12, A14
`;

/** `PRETTIER_IGNORE_FILE` converted. */
export const PRETTIER_IGNORE_V2 = `import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** A synthetic lens. */

const LENS_DATA = {
  schema: 2,
  key: "fixture-prettier-ignore",
  name: "Fixture 50mm f/2",

  elements: [
    // G1 — front group
    // prettier-ignore
    { id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.51680, vd: 64.17, role: "Front positive element of the fixture's only group, written on one line as its source does" },
    // prettier-ignore
    { id: 2, name: "L2", label: "Element 2", type: "Negative Meniscus", nd: 1.75520, vd: 27.53, role: "Rear negative meniscus of the fixture's only group, written on one line as its source does" },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 1 },
    { label: "1", R: 50.00, d: 5, sd: 15, medium: 1 },
    { label: "2", R: -50, d: 1, sd: 15 },
    { label: "3", R: -40, d: 2, sd: 15, medium: 2 },
    { label: "4", R: -200, d: 75, sd: 15 },
  ],

  focus: { closeFocusM: 0.5 },

  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4] },

  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
`;

/** `RULINGS_FILE` converted. */
export const RULINGS_V2 = `import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** A synthetic lens. */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "fixture-rulings",
  name: "Fixture 50mm f/2",

  elements: [{ id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.5168, vd: 64.17 }],

  /* (moved from asph) ── Aspheric terms ── */
  // Every term is written,
  // as V1 requires.
  surfaces: [
    { label: "STO", R: "flat", d: 1 },
    { label: "1", R: 50, d: 5, sd: 15, medium: 1, asphere: { A4: 1.25e-6 } },
    { label: "2", R: -50, d: 80, sd: 15 },
  ],

  /* ── Focus ── */
  // (moved from var) Unit focus moves the whole lens, so no air gap varies.
  // The semi-diameter 12.50 mm was read off the drawing; 12.5 is the round figure.
  focus: {
    /* metres */
    closeFocusM: 0.5,
    // Said once, for the whole lens.
    description: "Unit focus.",
  },

  /* ── Aperture ── */
  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4] },

  /* ── Layout ── */
  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
`;

/** The report of `RULINGS_FILE`'s conversion. */
export const RULINGS_REPORT = `src/lens-data/fixture/Fixture.data.ts
  moved comments:
    line 28: var → focus: // Unit focus moves the whole lens, so no air gap varies.
    line 29: var → focus: // The semi-diameter 12.50 mm was read off the drawing; 12.5 is the round figure.
    line 31: asph → surfaces: /* ── Aspheric terms ── */
    line 32: asph → surfaces: // Every term is written,
    line 33: asph → surfaces: // as V1 requires.
  stop radius dropped: surfaces[0].sd = 12.4987
    engine radius: 12.303 mm
    elsewhere in the file:
      line 29: // The semi-diameter 12.50 mm was read off the drawing; 12.5 is the round figure.
  zero aspheric terms dropped:
    asph["1"]: K, A6, A8, A10, A12, A14
`;

/** `ZOOM_FILE` converted. */
export const ZOOM_V2 = `import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** A synthetic lens. */

const LENS_DATA = {
  schema: 2,
  key: "fixture-zoom",
  name: "Fixture 24-100mm",

  elements: [{ id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.5168, vd: 64.17 }],

  surfaces: [
    // (moved from surfaces[0].sd) calibrated by hand to the wide f-number
    { label: "STO", R: "flat" },
    { label: "1", R: 50, d: 5, sd: 15, medium: 1 },
    { label: "2", R: -50, sd: 15 },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom ── */
    stations: [
      { focalLengthMm: 24, nominalFNumber: 2, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 50, nominalFNumber: 2.4, published: false },
      { focalLengthMm: 100, nominalFNumber: 2.8, label: "Tele", published: true, publishedFocus: [1] },
    ],
  },

  focus: {
    closeFocusM: 0.5,
    conjugates: [
      { zoomStation: 0, keyframe: 1, objectDistanceMm: 500, distanceReference: "image-plane", source: "Table 2" },
    ],
  },

  gaps: {
    // The stop gap is the zoom variable.
    // (moved from varLabels[0]) before the second gap
    STO: {
      label: "D0",
      values: [
        [1, 1],
        [3, 3],
        [5, 5],
      ],
    },
    "2": {
      label: "BF",
      values: [
        [80, 81],
        [80, 82],
        [80, 83],
      ],
    },
  },

  aperture: { fStops: [2, 2.8, 4] },

  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
`;

/** The report of `ZOOM_FILE`'s conversion. */
export const ZOOM_REPORT = `src/lens-data/fixture/Fixture.data.ts
  moved comments:
    line 20: surfaces[0].sd → surfaces[0]: // calibrated by hand to the wide f-number
    line 25: zoomPositions → zoom.stations: /* ── Zoom ── */
    line 42: varLabels[0] → gaps["STO"]: // before the second gap
  stop radius dropped: surfaces[0].sd = 9.5
    engine radius by station: 12.303, 10.253, 8.788 mm
    comments on the stop entry:
      line 20 (radius): // calibrated by hand to the wide f-number
`;

/** `TELECONVERTER_FILE` converted. */
export const TELECONVERTER_V2 = `import type { TeleconverterDataV2Input } from "../../types/lensDataV2.js";

const TELECONVERTER_DATA = {
  schema: 2,
  key: "fixture-1-4x",
  name: "Fixture 1.4x",

  catalog: { lensMounts: ["nikon-z"] },

  magnification: 1.4,
  masterImageDistanceMm: 40,

  elements: [{ id: 1, name: "T1", label: "Element 1", type: "Biconcave Negative", nd: 1.7552, vd: 27.53 }],

  surfaces: [
    { label: "TC1", R: -60, d: 2, sd: 9, medium: 1 }, // T1 front
    { label: "TC2", R: 60, d: 30, sd: 9 },
  ],
} satisfies TeleconverterDataV2Input;

export default TELECONVERTER_DATA;
`;
