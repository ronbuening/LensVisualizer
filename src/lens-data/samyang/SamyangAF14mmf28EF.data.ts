import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Samyang AF 14mm F2.8 EF; KR 10-1918210 B1, Example 3 (Tables 7-9, Figure 7).
 * The link to the production lens rests on its construction; Samyang has not confirmed
 * that these are the production radii, spacings or glasses.
 * 15 elements in 10 groups, plus the patent's 2.5 mm camera-side plate OD3, traced
 * through rearPlates. No scaling. Radii, thicknesses, air gaps, nd/Vd and all four
 * asphere columns are as printed (d line).
 *
 * ASPHERE CONVENTION: paragraph 0096 defines K as the conic constant, c = 1/R and
 * A-F as aspheric coefficients, but the Equation 6 area is blank in both the A and B
 * publications. The model assumes the standard conic form with A..F multiplying
 * Y^4..Y^14, which the same-day sibling KR 10-1933088 B1 prints as its Equation 5
 * under identical wording. Ray tracing confirms it: the on-axis RMS spot is 10.5 um
 * at f/2.851 and the 57.871 deg chief ray lands at 21.700 mm (Table 10 y = 21.7);
 * reading the printed K as 1+K instead gives 213 um and 32.2 mm.
 *
 * IMAGE PLANE: placed 0.5 mm behind the plate, the sum of the printed D4 and D5 at
 * every focus state (D4 0.495503/0.514995/0.572628, D5 +0.004497/-0.014995/-0.072628),
 * as in the sibling FE file. The plate does not move and no negative air gap is
 * modelled. The paraxial focus lies -0.019253/+0.003864/+0.075973 mm from that plane
 * at the three states.
 *
 * ELEMENT AND GROUP NAMES: name and diagramLabel carry the patent's reference signs
 * L13-L153 (the tens digits count elements front to rear and the trailing 3 marks
 * Example 3: L13 is the first element, L133 the thirteenth), and label carries the
 * ordinal. The brackets G13/G23/G33 are the group signs of Figure 7. The four
 * cemented components are bracketed C1-C4 because the patent uses D0-D5 for its
 * air distances and D1/D2 are the variable-gap labels.
 *
 * FOCUS: PUBLISHED. All three Table 9 states are retained and only G23 moves. Gaps
 * between the tabulated states are linear interpolation, not published values.
 * The iris radius is derived from the design f-number f/2.851 at infinity; the patent
 * publishes none. The printed finite-state Fno 2.853/2.938 are quoted in the analysis
 * and are not reproduced by this fixed iris. No changing diaphragm is modelled.
 *
 * SOURCE INCONSISTENCIES (kept as printed; see sourceErrata): G13 (S1-13) computes
 * to +25.11 mm although the text calls it negative; Table 10's f1st, fAF and fG3
 * differ from the Table 7 values by 0.7-2.7%; Table 10's D/y = 0.557 lies outside
 * Equation 5's 0.65-0.75.
 *
 * S7/S8 semi-diameters 15.06/12.31 are published (Table 7 H-Ape). Other SDs are
 * estimated from Figure 7 and floor-checked by exact real-ray trace. The sheet is
 * drawn about 5% tighter across the axis than along it, so rim heights are read
 * against the published S7 height. Every inferred rim agrees with the drawing
 * within 5%. The L53-L63 doublet is square at 13.0 mm as drawn (S9, S10, S11).
 * gapSagFrac 0.96: at the published 12.31 mm height of S8 the sags of S8 and S9
 * take 8.17 mm of the 8.555 mm gap (95.5%), past the default 0.90, which would
 * cap S9 at 11.8 mm; 0.96 is the smallest two-decimal value that admits the
 * drawn rim, and 0.381 mm of air remains there.
 * No absent aperture is called measured.
 *
 * GLASS: catalog-equivalent labels do not identify a supplier or melt. The L43 (S7)
 * and L133 (S22) glasses stay Unmatched at the printed precision and use the nd/Vd
 * approximation. nC/nF/ng for the other elements are evaluated from HOYA catalog
 * dispersion formulas; they are catalog values, not patent-published or measured
 * spectra.
 */
const LENS_DATA = {
  schema: 2,
  key: "samyang-af-14mm-f28-ef",
  maker: "Samyang",
  name: "SAMYANG AF 14mm f/2.8 EF",
  subtitle: "KR 10-1918210 B1, Example 3 — construction-based production correlation",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ELEMENTS / 10 GROUPS",
      "DESIGN f = 14.19 mm",
      "DESIGN F/2.85",
      "4 ASPHERICAL SURFACES / 2 ELEMENTS",
      "THREE PUBLISHED FOCUS STATES",
    ],
    elementCount: 15,
    groupCount: 10,
    focalLengthMm: { marketing: 14, design: 14.190782147128807 },
    fNumber: { marketing: 2.8, design: 2.851 },
  },

  source: {
    patentNumber: "KR 10-1918210 B1",
    patentYear: 2018,
    authors: ["Jae Myung Yu", "Hae Jin Lee", "Jung Du Lee"],
    assignees: ["Samyang Optics Co., Ltd."],
    errata: [
      {
        status: "unresolved",
        note: "The patent text calls the first group (surfaces 1–13) negative, but the Table 7 values give it a positive focal length of +25.1 mm; Example 2's first group computes positive as well. Table 10's focal lengths for the first element and for groups 2 and 3 (345.936, 99.513 and 118.196 mm) differ from the Table 7 values (348.46, 98.64 and 115.05 mm) by 0.7–2.7 %, as they do in all three examples; the printed prescription is used unchanged.",
      },
      {
        status: "unresolved",
        note: "Table 10 lists D/y = 12.08/21.7 = 0.557 for this example, outside Equation 5's range of 0.65–0.75, and its D matches neither aperture printed in Table 7 (15.06 and 12.31 mm). The Table 7 apertures are used.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L13",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: 348.460392178,
      glass: "NBFD15 (Hoya equivalent)",
      role: "Weak positive front meniscus of the fixed first group.",
      diagramLabel: "L13",
      nC: 1.79901539217,
      nF: 1.82324484337,
      ng: 1.83750210174,
    },
    {
      id: 2,
      name: "L23",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: -80.538759667,
      glass: "TAC8 (Hoya equivalent)",
      role: "First of the three negative menisci (L23–L43) behind the front element.",
      diagramLabel: "L23",
      nC: 1.7251025131,
      nF: 1.73843913675,
      ng: 1.74571184197,
    },
    {
      id: 3,
      name: "L33",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: -50.569262404,
      glass: "TAF3 (Hoya equivalent)",
      role: "Second negative meniscus of the front group, ahead of the aspherical L43.",
      diagramLabel: "L33",
      nC: 1.79900281344,
      nF: 1.81629648474,
      ng: 1.8259456919,
    },
    {
      id: 4,
      name: "L43",
      label: "Element 4",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.77271,
      vd: 49.7,
      focalLengthMm: -24.654384957,
      glass: "Unmatched (lanthanum crown class; source 1.77271 / 49.70)",
      role: "Double-sided aspherical negative meniscus; its two apertures are the only ones the patent prints.",
      diagramLabel: "L43",
    },
    {
      id: 5,
      name: "L53",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: -14.963818312,
      glass: "E-FDS1 (Hoya equivalent)",
      role: "High-index negative front member of the cemented L53–L63 pair.",
      diagramLabel: "L53",
      cemented: "C1",
      nC: 1.91037567834,
      nF: 1.95457312693,
      ng: 1.9828139743,
    },
    {
      id: 6,
      name: "L63",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.74077,
      vd: 27.76,
      focalLengthMm: 17.428485284,
      glass: "E-FD13 (Hoya equivalent)",
      role: "Positive rear member of the cemented L53–L63 pair.",
      diagramLabel: "L63",
      cemented: "C1",
      nC: 1.73307111041,
      nF: 1.75975543915,
      ng: 1.77597267238,
    },
    {
      id: 7,
      name: "L73",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 30.162235334,
      glass: "FDS90 (Hoya equivalent)",
      role: "Separated positive singlet that closes the fixed first group.",
      diagramLabel: "L73",
      nC: 1.83649191249,
      nF: 1.87208870412,
      ng: 1.89413034128,
    },
    {
      id: 8,
      name: "L83",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.46,
      focalLengthMm: -32.332801491,
      glass: "LAC14 (Hoya equivalent)",
      role: "Negative front member of the cemented focusing triplet L83–L103.",
      diagramLabel: "L83",
      cemented: "C2",
      nC: 1.69296898855,
      nF: 1.70553311024,
      ng: 1.71235007782,
    },
    {
      id: 9,
      name: "L93",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.96,
      focalLengthMm: 18.100766451,
      glass: "E-C3 (Hoya equivalent)",
      role: "Positive central member of the cemented focusing triplet.",
      diagramLabel: "L93",
      cemented: "C2",
      nC: 1.51555996027,
      nF: 1.52434934583,
      ng: 1.52913232824,
    },
    {
      id: 10,
      name: "L103",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: -58.155896338,
      glass: "E-FDS1 (Hoya equivalent)",
      role: "High-index negative rear member of the cemented focusing triplet.",
      diagramLabel: "L103",
      cemented: "C2",
      nC: 1.91037567834,
      nF: 1.95457312693,
      ng: 1.9828139743,
    },
    {
      id: 11,
      name: "L113",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.32,
      focalLengthMm: -8.449203165,
      glass: "TAFD45 (Hoya equivalent)",
      role: "High-index negative front member of the cemented pair behind the stop.",
      diagramLabel: "L113",
      cemented: "C3",
      nC: 1.94513502106,
      nF: 1.97464566421,
      ng: 1.99206047425,
    },
    {
      id: 12,
      name: "L123",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.78472,
      vd: 25.72,
      focalLengthMm: 13.962670232,
      glass: "FD110 (Hoya equivalent)",
      role: "Positive rear member of the cemented pair behind the stop.",
      diagramLabel: "L123",
      cemented: "C3",
      nC: 1.77597256577,
      nF: 1.80648168613,
      ng: 1.82526973243,
    },
    {
      id: 13,
      name: "L133",
      label: "Element 13",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.55352,
      vd: 71.5,
      focalLengthMm: 26.204915752,
      glass: "Unmatched (low-dispersion crown class; source 1.55352 / 71.5)",
      role: "Separated double-sided aspherical biconvex element of the rear group.",
      diagramLabel: "L133",
    },
    {
      id: 14,
      name: "L143",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.32,
      focalLengthMm: -19.797828826,
      glass: "TAFD45 (Hoya equivalent)",
      role: "High-index negative front member of the final cemented pair.",
      diagramLabel: "L143",
      cemented: "C4",
      nC: 1.94513502106,
      nF: 1.97464566421,
      ng: 1.99206047425,
    },
    {
      id: 15,
      name: "L153",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 19.443294063,
      glass: "FCD1 (Hoya equivalent)",
      apd: "inferred",
      apdNote:
        "Samyang marks this position ED; FCD1 (νd 81.61) is an extra-low-dispersion crown whose catalog lines give ΔPgF ≈ +0.032, and the tag is inferred from the patent/product correlation, not stated in the patent.",
      role: "Low-dispersion positive rear member of the final cemented pair; the position Samyang marks ED.",
      diagramLabel: "L153",
      cemented: "C4",
      nC: 1.49513747764,
      nF: 1.50122750457,
      ng: 1.50450912671,
    },
  ],

  surfaces: [
    { label: "1", R: 98.0, d: 5.21, sd: 39, medium: 1 },
    { label: "2", R: 146.94, d: 0.1, sd: 39 },
    { label: "3", R: 37.064, d: 1.5, sd: 24.5, medium: 2 },
    { label: "4", R: 22.335, d: 5.65, sd: 19.9 },
    { label: "5", R: 35.345, d: 1.3, sd: 18.8, medium: 3 },
    { label: "6", R: 18.6, d: 4.338, sd: 15.03 },
    {
      label: "7A",
      R: 24.34,
      d: 1.8,
      sd: 15.06,
      medium: 4,
      asphere: {
        K: -1.814675,
        A4: 4.38206e-5,
        A6: -6.238794e-7,
        A8: 2.964679e-9,
        A10: -7.736225e-12,
        A12: 1.016927e-14,
        A14: -4.412777e-18,
      },
    },
    {
      label: "8A",
      R: 10.342,
      d: 8.555,
      sd: 12.31,
      asphere: {
        K: -0.991237,
        A4: 8.027756e-5,
        A6: -6.824901e-7,
        A8: -2.553086e-9,
        A10: 4.533099e-11,
        A12: -2.113286e-13,
        A14: 3.515643e-16,
      },
    },
    { label: "9", R: -76.693, d: 0.9, sd: 13, medium: 5 },
    { label: "10", R: 16.937, d: 10.0, sd: 13, medium: 6 },
    { label: "11", R: -40.662, d: 11.263, sd: 13 },
    { label: "12", R: 44.031, d: 3.93, sd: 10.2, medium: 7 },
    { label: "13", R: -58.312, sd: 10.2 },
    { label: "14", R: 83.167, d: 0.7, sd: 9, medium: 8 },
    { label: "15", R: 17.666, d: 6.04, sd: 9, medium: 9 },
    { label: "16", R: -17.666, d: 0.7, sd: 9, medium: 10 },
    { label: "17", R: -26.835, sd: 9 },
    { label: "STO", R: "flat", d: 2.302 },
    { label: "19", R: -30.314, d: 0.7, sd: 7.8, medium: 11 },
    { label: "20", R: 11.1, d: 4.54, sd: 7.8, medium: 12 },
    { label: "21", R: -696.503, d: 0.1, sd: 7.8 },
    {
      label: "22A",
      R: 27.684,
      d: 4.18,
      sd: 7.8,
      medium: 13,
      asphere: {
        K: -0.944323,
        A4: 1.218699e-5,
        A6: -2.957337e-7,
        A8: 1.226961e-9,
        A10: -1.755245e-10,
        A12: 4.105461e-12,
        A14: -4.297231e-14,
      },
    },
    {
      label: "23A",
      R: -28.83,
      d: 0.7,
      sd: 7.8,
      asphere: {
        K: -0.379701,
        A4: 6.76568e-6,
        A6: -5.68199e-7,
        A8: 1.289974e-8,
        A10: -5.635791e-10,
        A12: 9.294879e-12,
        A14: -6.527433e-14,
      },
    },
    { label: "24", R: 107.7, d: 0.9, sd: 8.5, medium: 14 },
    { label: "25", R: 16.0, d: 7.9, sd: 8.5, medium: 15 },
    { label: "26", R: -20.4, d: 36.2, sd: 9.2 },
  ],

  focus: {
    closeFocusM: 0.2,
    keyframes: [0, 0.3734634946231042, 1],
    description:
      "PUBLISHED: the cemented triplet L83–L103 (group G23) moves 3.23 mm toward the object between the patent's three tabulated states — infinity, magnification 0.033, and magnification 0.157 at 0.20 m object-to-image, which is also Samyang's stated minimum focus distance. The D1/D2 gaps at those states are the printed values; gaps between them are interpolated. G13 and G33 stay fixed. The image plane is placed 0.5 mm behind the cover plate, the sum of the patent's printed D4 and D5 at each focus state. The iris is held at its infinity setting, so the model does not reproduce the patent's near-state F-number of 2.938.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 405.430516,
        distanceReference: "first-surface",
        source:
          "KR 10-1918210 B1, Example 3, Table 9, middle state (D0 with D1 and D2). The image plane stays at the fixed D4 + D5 position.",
      },
      {
        zoomStation: 0,
        keyframe: 2,
        objectDistanceMm: 69.90294,
        distanceReference: "first-surface",
        source:
          "KR 10-1918210 B1, Example 3, Table 9, 0.2 m state (D0 with D1 and D2). The image plane stays at the fixed D4 + D5 position, leaving a small focus residual.",
      },
    ],
    published: [1, 2],
  },

  gaps: {
    "13": { label: "D1", values: [[5.334159, 4.640341, 2.107898]] },
    "17": { label: "D2", values: [[2.254901, 2.948719, 5.481162]] },
  },

  aperture: { nominalFNumber: 2.851, fStops: [2.851, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  projection: { kind: "rectilinear", fullFieldDeg: 115.742 },

  rearPlates: [
    {
      label: "OD3",
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "BSC7 (Hoya equivalent)",
      gapAfterMm: 0.5,
      source:
        "KR 10-1918210 B1, Example 3, Table 7, surfaces 27–28. The 0.5 mm gap to the image is the sum of the patent's printed D4 and D5, which is the same at every focus state.",
    },
  ],

  groups: [
    { text: "G13 (FIXED)", fromSurface: "1", toSurface: "13" },
    { text: "G23 (FOCUS)", fromSurface: "14", toSurface: "17" },
    { text: "G33 (FIXED)", fromSurface: "19", toSurface: "26" },
  ],
  doublets: [
    { text: "C1", fromSurface: "9", toSurface: "11" },
    { text: "C2", fromSurface: "14", toSurface: "17" },
    { text: "C3", fromSurface: "19", toSurface: "21" },
    { text: "C4", fromSurface: "24", toSurface: "26" },
  ],

  layout: { scFill: 0.66, yScFill: 0.72 },

  checks: { gapSagFrac: 0.96 },
} satisfies LensDataV2Input;

export default LENS_DATA;
