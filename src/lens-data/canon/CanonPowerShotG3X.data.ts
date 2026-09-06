import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON 8.8-220mm f/2.8-5.6 (Canon PowerShot G3 X)                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Patent source: JP 2016-148731 A, Numerical Example 6 (Canon Inc.; Takashi Okada). ║
 * ║ Production correlation: Canon PowerShot G3 X, marketed June 2015.                  ║
 * ║ Patent design is retained UNscaled: published 9.06 / 24.18 / 213.40 mm and         ║
 * ║ f/2.88 / 4.41 / 5.77. Marketing values remain separate: 8.8–220 mm f/2.8–5.6.     ║
 * ║ 18 elements / 13 air-separated optical assemblies; 6 kinematic zoom groups B1–B6. ║
 * ║ Five aspherical surfaces: source S8, S13, S14, S21, S31.                           ║
 * ║                                                                                      ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION.                                           ║
 * ║ Example 6 publishes only infinity-focus W/M/T spacings. B6 is the focus group, but ║
 * ║ no finite-object spacing row is published; all focus vectors below therefore repeat ║
 * ║ the infinity value. closeFocusM stores Canon's marketed wide-end minimum only.      ║
 * ║ Canon markets 0.05 m at W and 0.85 m at T; these values do not define patent motion.║
 * ║                                                                                      ║
 * ║ Zoom variables: source d5, d11, d20, d23, d30, d33.                                ║
 * ║ S12 is an inactive air-to-air bookkeeping plane and is omitted; its 0.10 mm is      ║
 * ║ folded into d11. Source S20 is relabeled STO because patent ¶0019 and Fig. 11 place ║
 * ║ SP between B3 and B4 although the Example-6 table omits the stop tag.                ║
 * ║ GB (source S34–S35) is omitted; d33 is replaced by                                  ║
 * ║ d33 + 0.80/1.51633 + 0.80 to preserve the patent's air-equivalent back focus.       ║
 * ║                                                                                      ║
 * ║ The patent states that B6 reverses shortly before tele, but W/M/T do not bracket    ║
 * ║ that reversal. No synthetic keyframe is added; piecewise interpolation represents   ║
 * ║ only the three published numerical states.                                           ║
 * ║                                                                                      ║
 * ║ Semi-diameters are one-half of the patent's published effective diameters.           ║
 * ║ The S17→S18 shared-band sag intrusion is 0.939166936 of the 0.57 mm gap; physical  ║
 * ║ clearance remains +0.034675 mm. gapSagFrac is therefore set to 0.95 rather than     ║
 * ║ shrinking a published effective aperture.                                            ║
 * ║                                                                                      ║
 * ║ Glass labels intentionally stop at source-coordinate classes. The patent publishes  ║
 * ║ nd/νd only and does not establish vendor identities or nC/nF/ng/dPgF; those spectral║
 * ║ fields are not fabricated from ambiguous catalog candidates.                         ║
 * ║                                                                                      ║
 * ║ Manufacturer sources:                                           ║
 * ║ https://global.canon/en/c-museum/product/dcc831.html                                ║
 * ║ https://www.usa.canon.com/support/p/powershot-g3-x                                  ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-powershot-g3x",
  maker: "Canon",
  name: "CANON 8.8-220mm f/2.8-5.6 (Canon PowerShot G3 X)",
  subtitle: "JP 2016-148731 A — Numerical Example 6 — Canon PowerShot G3 X correlation",
  specs: [
    "18 ELEMENTS / 13 OPTICAL GROUPS",
    "6 KINEMATIC ZOOM GROUPS",
    "DESIGN 9.06–213.40mm",
    "DESIGN f/2.88–5.77",
    "5 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: [8.8, 220],
  focalLengthDesign: [9.062967, 213.29603],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "1-inch-type",
  patentNumber: "JP 2016-148731 A",
  patentAuthors: ["Takashi Okada"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2016,
  elementCount: 18,
  groupCount: 13,

  /* ── Elements ── */
  // nC, nF, ng, and dPgF are intentionally omitted: Example 6 does not publish them,
  // and the nd/νd coordinates do not uniquely identify a vendor glass family.
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.3,
      fl: -126.906825,
      glass: "911353 class (vendor unresolved)",
      role: "Front negative member of B1; cemented to L2.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.49700,
      vd: 81.5,
      fl: 93.598338,
      glass: "S-FPL51 (coordinate-compatible spectral proxy; production supplier unspecified)",
      role: "Positive member of the B1 front cemented pair.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.49700,
      vd: 81.5,
      fl: 106.805221,
      glass: "S-FPL51 (coordinate-compatible spectral proxy; production supplier unspecified)",
      role: "Rear positive singlet of B1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -13.755745,
      glass: "835427 class (vendor unresolved)",
      role: "Front negative singlet of B2.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: -19.835154,
      glass: "S-BAL42 (coordinate-compatible spectral proxy; production supplier unspecified)",
      role: "Second negative singlet of B2; object-side surface is aspherical.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.94595,
      vd: 18.0,
      fl: 30.242077,
      glass: "946180 high-dispersion-flint class (vendor unresolved)",
      role: "Rear positive singlet of B2.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.85135,
      vd: 40.1,
      fl: 24.080129,
      glass: "851401 class (vendor unresolved)",
      role: "Front positive singlet of B3; both surfaces are aspherical.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.69350,
      vd: 53.2,
      fl: 28.981050,
      glass: "S-LAL13 (coordinate-compatible spectral proxy; production supplier unspecified)",
      role: "Positive member of the B3 cemented pair.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 2.00100,
      vd: 29.1,
      fl: -15.499430,
      glass: "001291 high-index-lanthanum class (vendor unresolved)",
      role: "Negative member of the B3 cemented pair.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      fl: 28.712535,
      glass: "603606 crown class (vendor unresolved)",
      role: "Rear positive singlet of B3.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.85135,
      vd: 40.1,
      fl: -13.615048,
      glass: "851401 class (vendor unresolved)",
      role: "Negative member of B4; object-side surface is aspherical.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      fl: 26.969855,
      glass: "S-TIH6 (coordinate-compatible spectral proxy; production supplier unspecified)",
      role: "Positive member of the B4 cemented pair.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      fl: 40.655482,
      glass: "593686 low-dispersion-crown class (vendor unresolved)",
      role: "Front positive singlet of B5.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 2.00100,
      vd: 29.1,
      fl: -22.392014,
      glass: "001291 high-index-lanthanum class (vendor unresolved)",
      role: "Negative member of the B5 cemented pair.",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.4,
      fl: 22.503133,
      glass: "517524 crown class (vendor unresolved)",
      role: "Positive member of the B5 cemented pair.",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 31.216298,
      glass: "487702 low-dispersion-crown class (vendor unresolved)",
      role: "Rear positive singlet of B5.",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.85135,
      vd: 40.1,
      fl: -12.496889,
      glass: "851401 class (vendor unresolved)",
      role: "Negative member of the B6 focus-group cemented pair; object-side surface is aspherical.",
      cemented: "D5",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30.1,
      fl: 18.084611,
      glass: "699301 flint class (vendor unresolved)",
      role: "Positive member of the B6 focus-group cemented pair.",
      cemented: "D5",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 80.235, d: 1.43, nd: 1.91082, elemId: 1, sd: 19.90 },
    { label: "2", R: 46.958, d: 5.35, nd: 1.49700, elemId: 2, sd: 19.40 },
    { label: "3", R: -4780.848, d: 0.05, nd: 1.0, elemId: 0, sd: 19.30 },
    { label: "4", R: 48.100, d: 4.45, nd: 1.49700, elemId: 3, sd: 18.80 },
    { label: "5", R: 496.735, d: 0.96, nd: 1.0, elemId: 0, sd: 18.55 },
    { label: "6", R: 1544.553, d: 0.80, nd: 1.83481, elemId: 4, sd: 10.30 },
    { label: "7", R: 11.396, d: 5.60, nd: 1.0, elemId: 0, sd: 7.95 },
    { label: "8A", R: -16.601, d: 0.70, nd: 1.58313, elemId: 5, sd: 7.75 },
    { label: "9", R: 38.732, d: 0.20, nd: 1.0, elemId: 0, sd: 7.70 },
    { label: "10", R: 30.555, d: 1.90, nd: 1.94595, elemId: 6, sd: 7.75 },
    { label: "11", R: -435.264, d: 28.43, nd: 1.0, elemId: 0, sd: 7.70 }, // source d11 + omitted S12 0.10 mm
    { label: "13A", R: 21.856, d: 2.10, nd: 1.85135, elemId: 7, sd: 6.50 },
    { label: "14A", R: -315.973, d: 0.08, nd: 1.0, elemId: 0, sd: 6.50 },
    { label: "15", R: 25.200, d: 2.00, nd: 1.69350, elemId: 8, sd: 6.50 },
    { label: "16", R: -96.051, d: 0.50, nd: 2.00100, elemId: 9, sd: 6.50 },
    { label: "17", R: 18.552, d: 0.57, nd: 1.0, elemId: 0, sd: 6.40 },
    { label: "18", R: 34.234, d: 2.10, nd: 1.60311, elemId: 10, sd: 6.50 },
    { label: "19", R: -34.234, d: 0.25, nd: 1.0, elemId: 0, sd: 6.50 },
    { label: "STO", R: 1e15, d: 4.65, nd: 1.0, elemId: 0, sd: 5.10 }, // source S20; SP per patent ¶0019 and Fig. 11
    { label: "21A", R: -30.953, d: 0.50, nd: 1.85135, elemId: 11, sd: 6.30 },
    { label: "22", R: 18.668, d: 1.80, nd: 1.80518, elemId: 12, sd: 6.75 },
    { label: "23", R: 127.298, d: 9.53, nd: 1.0, elemId: 0, sd: 6.75 },
    { label: "24", R: 147.131, d: 2.00, nd: 1.59282, elemId: 13, sd: 7.05 },
    { label: "25", R: -28.677, d: 0.10, nd: 1.0, elemId: 0, sd: 7.25 },
    { label: "26", R: 39.035, d: 0.60, nd: 2.00100, elemId: 14, sd: 7.55 },
    { label: "27", R: 14.129, d: 4.05, nd: 1.51742, elemId: 15, sd: 7.50 },
    { label: "28", R: -59.721, d: 0.10, nd: 1.0, elemId: 0, sd: 7.75 },
    { label: "29", R: 16.974, d: 3.55, nd: 1.48749, elemId: 16, sd: 8.35 },
    { label: "30", R: -136.987, d: 5.16, nd: 1.0, elemId: 0, sd: 8.30 },
    { label: "31A", R: 587.265, d: 0.60, nd: 1.85135, elemId: 17, sd: 6.55 },
    { label: "32", R: 10.445, d: 3.45, nd: 1.69895, elemId: 18, sd: 7.00 },
    { label: "33", R: 51.970, d: 10.457589640777405, nd: 1.0, elemId: 0, sd: 7.00 }, // GB omitted; source d33 replaced by air-equivalent rear spacing
  ],

  /* ── Aspherical coefficients ── */
  // Patent ¶0085 uses the standard 1 + K conic convention; K maps directly.
  asph: {
    "8A": {
      K: -2.88261e-1,
      A4: 5.18781e-6,
      A6: 3.53315e-7,
      A8: -1.05067e-8,
      A10: 8.98958e-11,
      A12: -1.09215e-13,
      A14: -1.59647e-15,
    },
    "13A": {
      K: -1.48216,
      A4: 6.19282e-6,
      A6: 9.61653e-9,
      A8: 7.61929e-10,
      A10: -7.64441e-12,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: 8.37711e-6,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "21A": {
      K: 3.92664,
      A4: 2.64469e-5,
      A6: -2.16176e-8,
      A8: 4.35581e-9,
      A10: -5.19006e-11,
      A12: 0,
      A14: 0,
    },
    "31A": {
      K: 0,
      A4: 4.85523e-6,
      A6: 1.67665e-7,
      A8: -2.66552e-9,
      A10: 2.25666e-11,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Published infinity-focus zoom states only ── */
  zoomPositions: [9.06, 24.18, 213.4],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "5": [
      [0.96, 0.96],
      [17.07, 17.07],
      [59.01, 59.01],
    ],
    "11": [
      [28.43, 28.43],
      [15.98, 15.98],
      [0.45, 0.45],
    ],
    STO: [
      [4.65, 4.65],
      [10.13, 10.13],
      [13.3, 13.3],
    ],
    "23": [
      [9.53, 9.53],
      [4.05, 4.05],
      [0.88, 0.88],
    ],
    "30": [
      [5.16, 5.16],
      [1.4, 1.4],
      [1.4, 1.4],
    ],
    "33": [
      [10.457589640777405, 10.457589640777405],
      [25.487589640777404, 25.487589640777404],
      [35.2475896407774, 35.2475896407774],
    ],
  },
  varLabels: [
    ["5", "d5"],
    ["11", "d11 + S12"],
    ["STO", "d20"],
    ["23", "d23"],
    ["30", "d30"],
    ["33", "BF (air-equivalent)"],
  ],

  /* ── Group and cemented-pair annotations ── */
  groups: [
    { text: "B1", fromSurface: "1", toSurface: "5" },
    { text: "B2", fromSurface: "6", toSurface: "11" },
    { text: "B3", fromSurface: "13A", toSurface: "19" },
    { text: "B4", fromSurface: "21A", toSurface: "23" },
    { text: "B5", fromSurface: "24", toSurface: "30" },
    { text: "B6 (FOCUS)", fromSurface: "31A", toSurface: "33" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "21A", toSurface: "23" },
    { text: "D4", fromSurface: "26", toSurface: "28" },
    { text: "D5", fromSurface: "31A", toSurface: "33" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.05,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: JP 2016-148731 A Example 6 publishes B6 as the focus group but gives no finite-object spacing row. All focus vectors preserve the infinity-focus W/M/T states. Canon markets 0.05 m at wide and 0.85 m at tele; closeFocusM records the wide-end product minimum only and is not used to infer B6 travel.",

  /* ── Aperture configuration ── */
  nominalFno: [2.88, 4.41, 5.77],
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11],
  maxFstop: 11,

  /* ── Geometry/layout ── */
  gapSagFrac: 0.95,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
