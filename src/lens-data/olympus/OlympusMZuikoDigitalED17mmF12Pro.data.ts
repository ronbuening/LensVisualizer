import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * OLYMPUS M.ZUIKO DIGITAL ED 17mm f/1.2 PRO — US 10,073,255 B2, Example 4.
 * Inferred production correlation, not manufacturer confirmation of this
 * prescription. 15 lens elements / 11 groups; six aspherical surfaces on L2,
 * L11 and L12. Patent millimetres and d-line indices; scale 1. The patent's
 * sag equation uses (1 + k), so K and A4–A8 are used as printed.
 * PUBLISHED focus: the three tabulated states (INF, CL1, CL2) are kept with
 * their printed, rounded gaps; only G3 (L13–L14) moves.
 * The camera plate C is traced through rearPlates at the printed distances,
 * not folded into an air-equivalent gap.
 * SEMI-DIAMETERS: estimated from Figure 4 optical curve endpoints (300 dpi,
 * 12.27 px/mm), excluding flanges and flat annuli; floor-checked by real-ray
 * trace of the full published iris at INF, CL1 and CL2. S25 stops where the
 * drawn concave curve meets its flat rear annulus (9.5), because that rim
 * limits mid-field rays. S20A runs to L11's drawn outer cap (14.2) so the
 * element renders square as drawn; its drawn curve ends at 13.3 and no
 * transmitted ray reaches the zone above that. Square-cut L3, L6 and L13
 * carry their own drawn height on both faces.
 * STOP: the Example 4 Various data table prints a 28.98 mm iris diameter.
 * nominalFNumber is computed from the exact on-axis entrance pupil of that
 * source diameter, not from a fitted stop; the stop radius is derived from
 * this design f-number. The Gaussian pupil gives a different value (F/1.149).
 * GLASS: each element names the catalog glass at the patent's nd/νd, which
 * supplies its dispersion curve; supplier and melt are not identified.
 * SOURCE CONFLICTS: S17 νd = 95.10 versus 94.93 in the condition table; small
 * EFL, near-magnification and 0.01 mm gap-sum residuals are kept as printed.
 * The printed INF field / image-height pair is not reproduced together by
 * the chief ray through the stop centre; see sourceErrata. The 2ω in specs is
 * the patent's statement, not a field the model reproduces.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-mzuiko-digital-ed-17mm-f12-pro",
  maker: "Olympus",
  name: "OLYMPUS M.ZUIKO DIGITAL ED 17mm f/1.2 PRO",
  subtitle: "US 10,073,255 B2, Example 4 — production correlation inferred",

  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    specs: [
      "15 ELEMENTS / 11 GROUPS",
      "DESIGN f = 16.67 mm",
      "DESIGN F/1.24",
      "2ω = 67.55° (PATENT)",
      "6 ASPHERICAL SURFACES / 3 ELEMENTS",
    ],
    elementCount: 15,
    groupCount: 11,
    focalLengthMm: { marketing: 17, design: 16.671803331391207 },
    fNumber: { marketing: 1.2, design: 1.24 },
  },

  source: {
    patentNumber: "US 10,073,255 B2",
    patentYear: 2018,
    authors: ["Masaru Morooka", "Kenichi Nagasawa"],
    assignees: ["Olympus Corporation"],
    errata: [
      {
        status: "unresolved",
        note: "Example 4 prints νd 95.10 for surface 17, while the condition (4) table prints 94.93. The prescription value 95.10 is kept.",
      },
      {
        status: "unresolved",
        note: "The printed CL2 focal length (16.39 mm) and magnification (−0.15) differ slightly from the values computed from the prescription (16.397 mm, −0.1446). The printed gaps and object distances are kept; the CL2 sum d22 + d25 differs from the INF sum by 0.01 mm.",
      },
      {
        status: "unresolved",
        note: "The INF table's full field 67.55° and image height 10.81 mm are not reproduced together by a chief ray through the stop centre. Traced as printed, with the camera plate, the prescription gives an image height of 10.48949 mm at that field; 10.81 mm needs a full field of 69.35885°. Figure 8C shows barrel distortion of about 6 %, consistent with the traced prescription, and its axis is captioned by image height, so the printed 2ω is the value that does not fit. Example 3 prints the same relation (f·tan ω = 11.15 mm in both examples), which points to a table convention for 2ω rather than a misprint. The printed values are kept and nothing is corrected.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.23,
      indexReference: "d",
      focalLengthMm: -63.962025548855884,
      glass: "S-FSL5 (OHARA; coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: -49.8162919336221,
      glass: "FCD1 (HOYA; coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "νd 81.61 double-aspherical element, tagged by class: the maker lists one ED-DSA element and, in its Asia listing, one EDA element, and this prescription has two such elements (L2 and L12); which is which is not published.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      focalLengthMm: 20.94765689882782,
      glass: "TAFD55 (HOYA; coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L3",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.03,
      indexReference: "d",
      focalLengthMm: -22.96796906419371,
      glass: "S-TIM5 (OHARA; coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L4",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.673,
      vd: 38.15,
      indexReference: "d",
      focalLengthMm: -19.748448129842135,
      glass: "S-NBH52 (OHARA; coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L5",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      indexReference: "d",
      focalLengthMm: 44.016735191431515,
      glass: "FCD515 (HOYA; coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "νd 68.63 glass, tagged by class as one of the three ED elements the maker lists by count only; no maker construction diagram was viewed.",
      diagramLabel: "L6",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.762,
      vd: 40.1,
      indexReference: "d",
      focalLengthMm: 51.93287622728957,
      glass: "S-LAM55 (OHARA; coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L7",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      indexReference: "d",
      focalLengthMm: 42.19603375893545,
      glass: "FCD515 (HOYA; coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "νd 68.63 glass, tagged by class as one of the three ED elements the maker lists by count only; no maker construction diagram was viewed.",
      diagramLabel: "L8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      focalLengthMm: -136.4263349083704,
      glass: "S-TIH53 (OHARA; coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L9",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      indexReference: "d",
      focalLengthMm: 71.25593151185143,
      glass: "FCD100 (HOYA; coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "νd 95.10 glass, tagged by class as the single Super ED element the maker lists by count only; no maker construction diagram was viewed. The patent counts it, with L12, among the low-dispersion positive lenses of G2 that meet its condition (4), νd above 80.",
      diagramLabel: "L10",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.7432,
      vd: 49.34,
      indexReference: "d",
      focalLengthMm: -100.00028922185383,
      glass: "S-LAM60 (OHARA; coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L11",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 36.64205354736459,
      glass: "FCD1 (HOYA; coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "νd 81.61 double-aspherical element, tagged by class: the maker lists one ED-DSA element and, in its Asia listing, one EDA element, and this prescription has two such elements (L2 and L12); which is which is not published. The patent counts L12, with L10, among the low-dispersion positive lenses of G2 that meet its condition (4), νd above 80; it does not say which of the maker's two names applies.",
      diagramLabel: "L12",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.85025,
      vd: 30.05,
      indexReference: "d",
      focalLengthMm: 83.71451793183968,
      glass: "S-NBH57 (OHARA; coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L13",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.6668,
      vd: 33.05,
      indexReference: "d",
      focalLengthMm: -24.680803683799862,
      glass: "S-TIM39 (OHARA; coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L14",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      indexReference: "d",
      focalLengthMm: 33.10341374848685,
      glass: "FCD515 (HOYA; coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "νd 68.63 glass, tagged by class as one of the three ED elements the maker lists by count only; no maker construction diagram was viewed.",
      diagramLabel: "L15",
    },
  ],

  surfaces: [
    { label: "1", R: 34.06, d: 2.48, sd: 18.4, medium: 1 },
    { label: "2", R: 15.89, d: 6.27, sd: 14.3 },
    {
      label: "3A",
      R: 36.526,
      d: 2.5,
      sd: 14.3,
      medium: 2,
      asphere: { K: 0, A4: 6.39453e-6, A6: -5.82819e-8, A8: 1.46593e-10, A10: 0, A12: 0, A14: 0 },
    },
    {
      label: "4A",
      R: 14.421,
      d: 4.13,
      sd: 12.2,
      asphere: { K: -0.828, A4: 2.81137e-5, A6: -6.66953e-8, A8: 2.46322e-13, A10: 0, A12: 0, A14: 0 },
    },
    { label: "5", R: 40.489, d: 5.59, sd: 12.4, medium: 3 },
    { label: "6", R: -40.489, d: 1.3, sd: 12.4, medium: 4 },
    { label: "7", R: 21.327, d: 5.94, sd: 9.8 },
    { label: "8", R: -18.152, d: 1.5, sd: 9.8, medium: 5 },
    { label: "9", R: 51.277, d: 4.81, sd: 12.7, medium: 6 },
    { label: "10", R: -51.277, d: 0.24, sd: 12.7 },
    { label: "11", R: -86.319, d: 4.02, sd: 13.8, medium: 7 },
    { label: "12", R: -27.68, d: 1, sd: 13.8 },
    // Example 4 Various data table (PDF p. 30) prints a 28.98 mm iris diameter at the stop.
    { label: "STO", R: "flat", d: 1.5 },
    { label: "14", R: 48.618, d: 7.37, sd: 16.2, medium: 8 },
    { label: "15", R: -48.618, d: 0.2, sd: 16.2 },
    { label: "16", R: 76.695, d: 1.59, sd: 15.5, medium: 9 },
    { label: "17", R: 45.653, d: 5.54, sd: 15.1, medium: 10 },
    { label: "18", R: -94.33, d: 0.2, sd: 15.1 },
    {
      label: "19A",
      R: 81.029,
      d: 2.49,
      sd: 14.2,
      medium: 11,
      asphere: { K: 0, A4: -3.96187e-7, A6: 1.84354e-8, A8: -1.16042e-10, A10: 0, A12: 0, A14: 0 },
    },
    {
      label: "20A",
      R: 38.257,
      d: 2.66,
      sd: 14.2,
      asphere: { K: 0, A4: 1.87054e-5, A6: 8.61743e-8, A8: -4.73479e-11, A10: 0, A12: 0, A14: 0 },
    },
    {
      label: "21A",
      R: 51.308,
      d: 8.63,
      sd: 13.6,
      medium: 12,
      asphere: { K: 0, A4: 1.05728e-5, A6: 7.4274e-8, A8: -4.38814e-11, A10: 0, A12: 0, A14: 0 },
    },
    {
      label: "22A",
      R: -26.655,
      sd: 13.6,
      asphere: { K: 0, A4: 1.35526e-5, A6: -2.20924e-8, A8: -2.06785e-11, A10: 0, A12: 0, A14: 0 },
    },
    { label: "23", R: 247.923, d: 2.14, sd: 10.9, medium: 13 },
    { label: "24", R: -99.447, d: 1, sd: 10.9, medium: 14 },
    { label: "25", R: 19.8, sd: 9.5 },
    { label: "26", R: 29.883, d: 5.18, sd: 11.6, medium: 15 },
    { label: "27", R: -53.477, d: 11, sd: 11.6 },
  ],

  focus: {
    closeFocusM: 0.19999,
    keyframes: [0, 0.21777574510252307, 1],
    description:
      "PUBLISHED infinity, CL1 and CL2 states (patent Example 4, Various data). Inner focus: only the negative cemented group G3 (L13–L14) moves, 2.67 mm toward the image by the printed d22 (2.66 mm by d25, a rounding difference in the patent); G1, the stop, G2 and G4 stay fixed. CL1 and CL2 place the object 813.34 mm and 94.99 mm in front of the first surface; CL2 is 199.99 mm from the image, matching the marketed 0.2 m minimum focus distance. Positions between the three printed states are interpolated, so intermediate distance readings are estimates.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 813.34,
        distanceReference: "first-surface",
        source: "US 10,073,255 B2, Example 4, PDF page 30, Various data CL1 object distance d0 and d22/d25.",
      },
      {
        zoomStation: 0,
        keyframe: 2,
        objectDistanceMm: 94.99,
        distanceReference: "first-surface",
        source: "US 10,073,255 B2, Example 4, PDF page 30, Various data CL2 object distance d0 and d22/d25.",
      },
    ],
    published: [1, 2],
  },

  gaps: { "22A": { label: "d22", values: [[1.98, 2.34, 4.65]] }, "25": { label: "d25", values: [[7.57, 7.21, 4.91]] } },

  aperture: {
    nominalFNumber: 1.2399077975009851,
    fStops: [1.24, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
    blades: 9,
  },

  rearPlates: [
    {
      label: "C",
      thicknessMm: 4.11,
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7 (OHARA; coordinate equivalent; supplier unconfirmed)",
      indexReference: "d",
      gapAfterMm: 2.05,
      source: "US 10,073,255 B2, Example 4, PDF page 30, surfaces 28–29; Figure 4 camera-side cover plate C.",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "12" },
    { text: "G2", fromSurface: "14", toSurface: "22A" },
    { text: "G3", fromSurface: "23", toSurface: "25" },
    { text: "G4", fromSurface: "26", toSurface: "27" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
  ],

  layout: { yScFill: 0.3 },

  // The Figure 4 rims of surfaces 2 and 3A (14.3 mm) bring the two facing
  // surfaces to 0.960236 of the 6.27 mm axial gap, 0.249 mm apart at the rim.
  // 0.961 is the smallest 0.001-step allowance that admits the drawn rims.
  checks: { gapSagFrac: 0.961 },
} satisfies LensDataV2Input;

export default LENS_DATA;
