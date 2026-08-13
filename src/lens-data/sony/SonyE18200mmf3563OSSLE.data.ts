import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SONY E 18-200mm f/3.5-6.3 OSS LE                                                    ║
 * ╠════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 8,553,339 B2, Embodiment / Example 1 (Yamanaka et al.; Tamron / Sony).          ║
 * ║ Five functional zoom groups with + / − / + / − / + power; G4 is the published focusing group.   ║
 * ║ G3 and G5 share the same axial zoom displacement; L10+L11 is the transverse anti-vibration set.  ║
 * ║                                                                                                  ║
 * ║ Physical count: 17 patent lens pieces. The `elements` array has 19 optical-media entries because ║
 * ║ the patent explicitly retains bonded resin layers on L4 and L15 as active media. elementCount    ║
 * ║ therefore remains 17. The numerical prescription's 13 air-spaced groups match the SEL18200LE.    ║
 * ║                                                                                                  ║
 * ║ Zoom-only variable gaps: D5, D14, BF. Zoom + focus gaps: D25, D29. Focus status: PUBLISHED.      ║
 * ║ The patent directly tabulates infinity and 0.5 m states at wide / intermediate / tele positions. ║
 * ║ The correlated SEL18200LE likewise specifies a 0.5 m minimum focus distance.                    ║
 * ║                                                                                                  ║
 * ║ No uniform scale is applied. Radii, thicknesses, indices, Abbe values, and asphere coefficients  ║
 * ║ preserve the patent values. The patent uses the standard conic K convention.                      ║
 * ║                                                                                                  ║
 * ║ Semi-diameters are inferred because the patent publishes none. They were set from paraxial       ║
 * ║ marginal/chief-ray envelopes using Y=14.2 mm, measured patent Fig. 1 proportions, and the 62 mm   ║
 * ║ SEL18200LE filter constraint. STO sd=7.31 mm is an inferred maximum clear stop radius consistent ║
 * ║ with the published infinity F-number plots.                                                     ║
 * ║                                                                                                  ║
 * ║ No sensor cover glass, filter, inactive dummy/flare-cutter plane, or mechanical part is modeled. ║
 * ╚════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-e-18-200mm-f35-63-oss-le",
  maker: "Sony",
  name: "SONY E 18-200mm f/3.5-6.3 OSS LE",
  subtitle: "US 8,553,339 B2 Example 1 — Tamron / Sony; closest production correlation to SEL18200LE",
  specs: [
    "17 PHYSICAL LENS PIECES / 13 PATENT AIR-SPACED GROUPS",
    "MARKETED 18-200mm f/3.5-6.3",
    "PATENT f = 18.4671 / 69.9995 / 193.7966 mm",
    "PATENT FNO = 3.57 / 5.60 / 6.47 AT INFINITY",
    "5 ASPHERICAL SURFACES ON 4 PHYSICAL LENS PIECES",
  ],

  focalLengthMarketing: [18, 200],
  focalLengthDesign: [18.466857655, 193.789739921],
  lensMounts: ["sony-fe"],
  imageFormat: "aps-c",
  patentNumber: "US 8,553,339 B2",
  patentAuthors: ["Hisayuki Yamanaka", "Makoto Kanai", "Masafumi Sueyoshi", "Masaharu Hosoi"],
  patentAssignees: ["Tamron Co., Ltd.", "Sony Corporation"],
  patentYear: 2013,
  elementCount: 17,
  groupCount: 13,

  /* ── Optical media / elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      fl: -168.6919,
      glass: "904313 — high-index lanthanum dense-flint class",
      cemented: "D1",
      role: "Front negative member of the positive G1 collector; cemented to L2.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 124.3212,
      glass: "497816 — ED fluorophosphate-crown class",
      cemented: "D1",
      role: "High-Abbe positive member of the front cemented pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.39,
      fl: 135.9941,
      glass: "618634 — phosphate dense-crown class",
      role: "Rear positive meniscus of G1.",
    },
    {
      id: 4,
      name: "L4r",
      label: "L4 Bonded Resin",
      type: "Hybrid Resin Layer (1× Asph)",
      nd: 1.5146,
      vd: 49.96,
      fl: -356.7079,
      glass: "Unmatched (optical resin layer; vendor not identified)",
      cemented: "H1",
      role: "Patent-described object-side resin layer forming the hybrid asphere on L4.",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus (Hybrid Asph)",
      nd: 1.90366,
      vd: 31.31,
      fl: -20.0544,
      glass: "904313 — high-index lanthanum dense-flint class",
      cemented: "H1",
      role: "Leading negative member of G2; substrate for the bonded front asphere.",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.72,
      fl: -23.8579,
      glass: "835427 — lanthanum dense-flint class",
      role: "Negative variator element in G2.",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 20.3635,
      glass: "923209 — very-dense flint class",
      role: "Strong positive correction element within the otherwise negative G2 variator.",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: -47.6566,
      glass: "835427 — lanthanum dense-flint class",
      role: "Rear negative meniscus of G2.",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.61881,
      vd: 63.85,
      fl: 22.1401,
      glass: "619639 — low-Tg molded phosphate-crown class",
      role: "Glass-molded bi-asphere at the front of positive G3.",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: -66.6362,
      glass: "773496 — lanthanum flint class",
      role: "Negative meniscus following L8 in G3.",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.59201,
      vd: 67.02,
      fl: 24.9228,
      glass: "592670 — low-Tg molded phosphate-crown class",
      cemented: "IS1",
      role: "Positive aspheric member of the L10+L11 transverse anti-vibration subset.",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -80.7274,
      glass: "847238 — dense-flint class",
      cemented: "IS1",
      role: "Negative member cemented to L10; moves with L10 orthogonally for stabilization.",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      fl: -17.339,
      glass: "904313 — high-index lanthanum dense-flint class",
      cemented: "D2",
      role: "Negative front member of the rear G3 cemented pair.",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.15,
      fl: 17.6091,
      glass: "517522 — crown-flint class",
      cemented: "D2",
      role: "Positive rear member of the L12+L13 cemented pair.",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.72825,
      vd: 28.32,
      fl: 28.1351,
      glass: "728283 — dense-flint class",
      cemented: "H2",
      role: "Positive front member of the negative G4 internal focusing group.",
    },
    {
      id: 16,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative (Hybrid Asph)",
      nd: 1.6968,
      vd: 55.46,
      fl: -13.1075,
      glass: "697555 — lanthanum-crown class",
      cemented: "H2",
      role: "Negative G4 member; carries the patent-described bonded rear aspheric resin layer.",
    },
    {
      id: 17,
      name: "L15r",
      label: "L15 Bonded Resin",
      type: "Hybrid Resin Layer (1× Asph)",
      nd: 1.5146,
      vd: 49.96,
      fl: 435.5657,
      glass: "Unmatched (optical resin layer; vendor not identified)",
      cemented: "H2",
      role: "Patent-described image-side resin layer forming the hybrid asphere on L15.",
    },
    {
      id: 18,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      fl: 30.3978,
      glass: "487704 — fluorine-crown class",
      role: "Positive front member of rear group G5.",
    },
    {
      id: 19,
      name: "L17",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: -34.694,
      glass: "835427 — lanthanum dense-flint class",
      role: "Rear negative meniscus of G5.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 140.6286, d: 1.5, nd: 1.90366, elemId: 1, sd: 27.5 },
    { label: "2", R: 72.7778, d: 7.2029, nd: 1.497, elemId: 2, sd: 27.5 },
    { label: "3", R: -395.7178, d: 0.2, nd: 1.0, elemId: 0, sd: 25.3 },
    { label: "4", R: 61.5306, d: 5.5571, nd: 1.618, elemId: 3, sd: 26.0 },
    { label: "5", R: 221.7716, d: 1.0, nd: 1.0, elemId: 0, sd: 25.1 },
    { label: "6A", R: 90.6266, d: 0.2, nd: 1.5146, elemId: 4, sd: 11.8 },
    { label: "7", R: 60.6266, d: 1.2, nd: 1.90366, elemId: 5, sd: 11.8 },
    { label: "8", R: 13.8208, d: 7.5749, nd: 1.0, elemId: 0, sd: 11.3 },
    { label: "9", R: -21.7485, d: 0.9, nd: 1.83481, elemId: 6, sd: 9.8 },
    { label: "10", R: 240.9339, d: 0.2, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "11", R: 52.229, d: 3.5618, nd: 1.92286, elemId: 7, sd: 9.8 },
    { label: "12", R: -28.3941, d: 1.5245, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "13", R: -17.839, d: 0.8, nd: 1.83481, elemId: 8, sd: 9.8 },
    { label: "14", R: -33.0, d: 25.4255, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 7.31 },
    { label: "16A", R: 18.4782, d: 4.0353, nd: 1.61881, elemId: 9, sd: 9.5 },
    { label: "17A", R: -48.5651, d: 0.7167, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "18", R: 41.8835, d: 0.9, nd: 1.7725, elemId: 10, sd: 9.2 },
    { label: "19", R: 22.8773, d: 2.9125, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "20A", R: 33.2873, d: 3.3, nd: 1.59201, elemId: 11, sd: 9.0 },
    { label: "21", R: -25.5242, d: 0.8, nd: 1.84666, elemId: 12, sd: 9.0 },
    { label: "22", R: -41.3225, d: 0.526, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "23", R: 265.5713, d: 0.8, nd: 1.90366, elemId: 13, sd: 8.8 },
    { label: "24", R: 14.7745, d: 4.4219, nd: 1.51742, elemId: 14, sd: 8.0 },
    { label: "25", R: -21.3443, d: 1.4, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "26", R: -1799.6857, d: 2.2, nd: 1.72825, elemId: 15, sd: 7.8 },
    { label: "27", R: -20.2692, d: 0.7, nd: 1.6968, elemId: 16, sd: 7.8 },
    { label: "28", R: 16.8599, d: 0.25, nd: 1.5146, elemId: 17, sd: 6.8 },
    { label: "29A", R: 18.1394, d: 9.5946, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "30", R: 24.6924, d: 4.7278, nd: 1.48749, elemId: 18, sd: 11.0 },
    { label: "31", R: -34.7332, d: 0.5818, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "32", R: -25.1727, d: 1.0, nd: 1.83481, elemId: 19, sd: 9.2 },
    { label: "33", R: -195.8334, d: 18.3076, nd: 1.0, elemId: 0, sd: 9.2 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "6A": {
      K: 0,
      A4: 2.00246e-5,
      A6: -4.07575e-8,
      A8: 1.35108e-10,
      A10: 2.54007e-13,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: -1.6765,
      A4: 1.73663e-5,
      A6: -1.78587e-9,
      A8: 1.55565e-9,
      A10: 5.28154e-12,
      A12: 0,
      A14: 0,
    },
    "17A": {
      K: 0,
      A4: 4.00586e-5,
      A6: -8.5783e-8,
      A8: 2.49011e-9,
      A10: -1.89872e-13,
      A12: 0,
      A14: 0,
    },
    "20A": {
      K: 0,
      A4: -1.59299e-5,
      A6: 4.84995e-8,
      A8: -1.30605e-9,
      A10: 9.03492e-12,
      A12: 0,
      A14: 0,
    },
    "29A": {
      K: 0,
      A4: -2.10416e-5,
      A6: 1.08897e-7,
      A8: -6.5254e-9,
      A10: 5.298e-11,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Published zoom and focus states ── */
  zoomPositions: [18.4671, 69.9995, 193.7966],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "5": [
      [1.0, 1.0],
      [34.0712, 34.0712],
      [64.3105, 64.3105],
    ],
    "14": [
      [25.4255, 25.4255],
      [6.345, 6.345],
      [1.7, 1.7],
    ],
    "25": [
      [1.4, 1.6487],
      [4.7187, 6.521],
      [1.4999, 9.1651],
    ],
    "29A": [
      [9.5946, 9.3459],
      [6.2759, 4.4736],
      [9.4947, 1.8296],
    ],
    "33": [
      [18.3076, 18.3076],
      [40.0562, 40.0562],
      [53.5093, 53.5093],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["14", "D14"],
    ["25", "D25"],
    ["29A", "D29"],
    ["33", "BF"],
  ],

  /* ── Functional-group annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6A", toSurface: "14" },
    { text: "G3 (+)", fromSurface: "16A", toSurface: "25" },
    { text: "G4 FOCUS (−)", fromSurface: "26", toSurface: "29A" },
    { text: "G5 (+)", fromSurface: "30", toSurface: "33" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "IS", fromSurface: "20A", toSurface: "22" },
    { text: "D2", fromSurface: "23", toSurface: "25" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription:
    "PUBLISHED 0.5 m focus states at all three zoom control points. G4 (L14+L15 with rear resin) translates toward the image plane; only D25 and D29 change with focus and their sum is conserved to patent-table rounding. The correlated SEL18200LE likewise specifies a 0.5 m minimum focus distance.",

  /* ── Aperture configuration ── */
  nominalFno: [3.57, 5.6, 6.47],
  fstopSeries: [3.5, 4, 5.6, 6.3, 8, 11, 16, 22, 32, 40],
  maxFstop: 40,
  apertureBlades: 7,

  /* ── Layout ── */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
