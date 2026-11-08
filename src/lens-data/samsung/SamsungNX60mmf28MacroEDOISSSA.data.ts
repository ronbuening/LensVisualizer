import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * SAMSUNG 60mm f/2.8 Macro ED OIS SSA from US 8,203,795 B2, Embodiment 5 (Tables 10–12, Fig. 12); inventor
 * Jae-myung Ryu, assignee Samsung Electronics Co., Ltd. No scaling: the patent states f = 59.3 mm, F-number 2.86 and
 * 2ω = 27.0°, and the model traces EFL 59.265 mm over the printed 106.0 mm front-vertex-to-image track.
 * Printed: radii, thicknesses, nd/νd (d-line, 587.6 nm), the S4 asphere (K, A–D in the standard (1 + K) conic form),
 * the stop row between S14 and S16 (ST in Fig. 12), the variable gaps A–G at M = 0, −0.5 and −1.0 (Table 11), and
 * the S23–S24 plate (2.8 mm, 1.51680/64.2; the text places a filter closest to the image) with G = 1.0 mm to the
 * image, carried in rearPlates.
 * Derived: the patent prints no clear apertures. Semi-diameters are estimates from the axial entrance-pupil envelope
 * and Fig. 12 proportions; they sit 12–20 % inside the Fig. 12 drawing in G1, G4 and G5 and are kept as estimated, so
 * the full-field corner is heavily vignetted. The iris radius (8.48 mm) follows from F/2.86; Fig. 12 draws about
 * 8.5 mm.
 * Focus (published): G1, G3 (with the stop) and G5 are fixed; G2 (S6–S10) moves toward the image and G4 (S16–S20)
 * toward the object, keeping B + C = 12.94 mm and D + E = 33.72 mm. Table 11's gaps B, C, D and E are D5, D10, D15
 * and D20 here. The printed object distances A = 124.9239 and 79.4080 mm from S1 give 230.92 and 185.41 mm object to
 * image; the close-focus distance and the 0.5× keyframe come from them. Positions between printed states are
 * interpolated.
 * Source inconsistencies: Table 11 heads the 1:1 column "M = 1.0" without the minus sign (the text and Fig. 12 give
 * M = −1.0). The paraxial back focus behind the plate is 0.972 mm against the printed G = 1.0 mm; the 0.028 mm
 * residual is kept. At the printed 1:1 object distance the paraxial magnification is −1.003, and the 1:1 row focuses
 * paraxially 79.78 mm in front of S1.
 */
const LENS_DATA = {
  schema: 2,
  key: "samsung-60mm-f28-macro-ed-ois-ssa",
  maker: "Samsung",
  name: "SAMSUNG 60mm f/2.8 Macro ED OIS SSA",
  subtitle: "US 8,203,795 B2, Embodiment 5 — probable production design",
  visible: true,

  catalog: {
    lensMounts: ["samsung-nx"],
    imageFormat: "aps-c",
    specs: [
      "12 ELEMENTS / 9 GROUPS",
      "DESIGN f = 59.3 mm",
      "DESIGN F/2.86",
      "1 ASPHERICAL SURFACE / 1 ELEMENT",
      "1:1 MACRO",
    ],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: {
      marketing: 60,
      design: 59.3,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.86,
    },
    closeFocusM: {
      marketing: 0.187,
    },
  },
  source: {
    patentNumber: "US 8,203,795 B2",
    example: {
      label: "Embodiment 5",
      id: "5",
    },
    patentYear: 2012,
    authors: ["Jae Myung Ryu"],
    assignees: ["Samsung Electronics Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: -48.06,
      glass: "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint negative meniscus at the front of the G1 cemented doublet D1.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6178,
      vd: 63.4,
      indexReference: "d",
      focalLengthMm: 34.99,
      glass: "Unmatched (patent nd 1.61780, νd 63.4; no catalog row at these coordinates)",
      role: "Phosphate-crown-class positive member of D1; achromatizes the front doublet against L1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.73968,
      vd: 49,
      indexReference: "d",
      focalLengthMm: 40.44,
      glass: "Unmatched (patent nd 1.73968, νd 49.0; no catalog row at these coordinates)",
      role: "Nearly plano-convex positive element closing G1; its front face S4 is the design's only asphere.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave",
      nd: 1.56883,
      vd: 56,
      indexReference: "d",
      focalLengthMm: -31.81,
      glass: "BAC4 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Plano-concave negative element leading the G2 focus group, flat face to the object.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      focalLengthMm: -27.15,
      glass: "BSC7 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Crown biconcave front member of the G2 cemented doublet D2; the strongest negative element.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 43.48,
      glass: "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint positive meniscus completing D2; corrects the focus group's colour.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 160.61,
      glass: "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Weak dense-flint positive meniscus at the front of the fixed G3.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 135.39,
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Samsung lists one ED element; this 1.49700/81.6 fluorophosphate crown is the design's only ED-class glass and the G3 lens that Expression 3 (νd ≥ 60) sets for the OIS shift.",
      role: "Equi-biconvex ED element just ahead of the stop; the OIS lens that shifts across the axis.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: -38.27,
      glass: "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint biconcave front member of the G4 cemented doublet D3.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: 30.74,
      glass: "LAC14 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Lanthanum-crown biconvex rear member of D3; the strongest positive element.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: 60.24,
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Lanthanum-crown biconvex singlet closing the G4 focus group.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      focalLengthMm: -73.82,
      glass: "FC5 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Fixed equi-biconcave G5; the patent assigns it astigmatism and distortion correction.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 61.558,
      d: 1.1,
      sd: 12,
      medium: 1,
    },
    {
      label: "2",
      R: 24.298,
      d: 6,
      sd: 12,
      medium: 2,
    },
    {
      label: "3",
      R: -177.589,
      d: 0.1,
      sd: 12,
    },
    {
      label: "4A",
      R: 29.064,
      d: 3.85,
      sd: 10.7,
      medium: 3,
      asphere: {
        K: 0,
        A4: -1.4452e-6,
        A6: -2.54447e-9,
        A8: 0,
        A10: 0,
      },
    },
    {
      label: "5",
      R: 965.867,
      sd: 10.7,
    },
    {
      label: "6",
      R: "flat",
      d: 1,
      sd: 8.8,
      medium: 4,
    },
    {
      label: "7",
      R: 18.094,
      d: 3.22,
      sd: 8.8,
    },
    {
      label: "8",
      R: -70.118,
      d: 1,
      sd: 8.8,
      medium: 5,
    },
    {
      label: "9",
      R: 17.623,
      d: 2.9,
      sd: 8.8,
      medium: 6,
    },
    {
      label: "10",
      R: 31.254,
      sd: 8.8,
    },
    {
      label: "11",
      R: 45.769,
      d: 1.39,
      sd: 9.4,
      medium: 7,
    },
    {
      label: "12",
      R: 68.03,
      d: 0.98,
      sd: 9.4,
    },
    {
      label: "13",
      R: 134.285,
      d: 1.78,
      sd: 9.4,
      medium: 8,
    },
    {
      label: "14",
      R: -134.285,
      d: 1.5,
      sd: 9.4,
    },
    {
      label: "STO",
      R: "flat",
    },
    {
      label: "16",
      R: -244.231,
      d: 1,
      sd: 10.4,
      medium: 9,
    },
    {
      label: "17",
      R: 37.427,
      d: 5.22,
      sd: 10.4,
      medium: 10,
    },
    {
      label: "18",
      R: -47.2,
      d: 0.1,
      sd: 10.4,
    },
    {
      label: "19",
      R: 54.936,
      d: 3.6,
      sd: 10.2,
      medium: 11,
    },
    {
      label: "20",
      R: -295.683,
      sd: 10.2,
    },
    {
      label: "21",
      R: -72.217,
      d: 1.5,
      sd: 10.2,
      medium: 12,
    },
    // Last surface: printed gap F to the S23 plate
    {
      label: "22",
      R: 72.217,
      d: 19.3,
      sd: 10.2,
    },
  ],

  focus: {
    closeFocusM: 0.185408,
    keyframes: [0, 0.8029, 1],
    description:
      "PUBLISHED inner focus at fixed length: G1, G3 with the stop and G5 stay put while G2 moves toward the image and G4 toward the object. From infinity to 1:1, G2 travels 9.36 mm and G4 18.41 mm (4.30 and 10.46 mm at 0.5×). The patent prints object distances of 124.92 and 79.41 mm from the front vertex, 230.9 and 185.4 mm object to image; positions between these states are interpolated. Samsung's 0.187 m minimum focus is the production figure.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 124.9239,
        distanceReference: "first-surface",
        source: "US 8,203,795 B2, Embodiment 5, Table 11: object distance A and gaps B–E in the M = −0.5 column.",
      },
      {
        zoomStation: 0,
        keyframe: 2,
        objectDistanceMm: 79.408,
        distanceReference: "first-surface",
        source:
          "US 8,203,795 B2, Embodiment 5, Table 11: object distance A and gaps B–E in the 1:1 column, printed as M = 1.0 without its minus sign.",
      },
    ],
    published: [1, 2],
  },
  gaps: {
    "5": { label: "D5", values: [[2.0, 6.2983, 11.3642]] },
    "10": { label: "D10", values: [[10.94, 6.6417, 1.5758]] },
    STO: { label: "D15", values: [[22.0052, 11.5409, 3.5925]] },
    "20": { label: "D20", values: [[11.7148, 22.1791, 30.1275]] },
  },
  aperture: {
    nominalFNumber: 2.86,
    maxFNumber: 32,
    fStops: [2.86, 4, 5.6, 8, 11, 16, 22, 32],
    blades: 7,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 27,
    maxTraceFieldDeg: 13.5,
  },
  rearPlates: [
    {
      label: "FL",
      thicknessMm: 2.8,
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      gapAfterMm: 1,
      source: "US 8,203,795 B2, Embodiment 5, Table 10 surfaces S23–S24 and Table 11 gap G",
    },
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−) FOCUS", fromSurface: "6", toSurface: "10" },
    { text: "G3 (+) OIS", fromSurface: "11", toSurface: "14" },
    { text: "G4 (+) FOCUS", fromSurface: "16", toSurface: "20" },
    { text: "G5 (−)", fromSurface: "21", toSurface: "22" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
  ],

  layout: {
    yScFill: 0.78,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
