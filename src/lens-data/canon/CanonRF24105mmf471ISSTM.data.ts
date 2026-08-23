import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — Canon RF 24-105mm f/4-7.1 IS STM                  ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Optical source: US 2021/0003831 A1, Example 1 / Numerical Example 1.  ║
 * ║  Production correlation: Canon RF 24-105mm F4-7.1 IS STM.              ║
 * ║  13 elements / 11 groups, 2 aspherical surfaces on one element.        ║
 * ║  Zoom: all six patent lens units move; B3B is the transverse IS unit.   ║
 * ║                                                                            ║
 * ║  FOCUS STATUS: NO_INTERNAL_RECONSTRUCTION.                               ║
 * ║    The patent identifies negative Unit B4 as the focus unit but gives    ║
 * ║    only infinity-focus zoom states. No finite-focus spacing is invented; ║
 * ║    all authored [infinity, close] pairs are therefore identical.         ║
 * ║                                                                            ║
 * ║  ZOOM MODEL:                                                               ║
 * ║    Variable gaps D2, D8, D19, D21, D23, and rear BF are transcribed at  ║
 * ║    the patent wide/middle/tele positions. D19 + D21 is nearly conserved ║
 * ║    because B4 is the translating focus unit, but no close-focus row is   ║
 * ║    reconstructed from that mechanism evidence.                            ║
 * ║                                                                            ║
 * ║  REAR REFERENCE-PLANE NORMALIZATION:                                      ║
 * ║    Patent surfaces 26-27 are GB, an optical filter/faceplate block, and  ║
 * ║    are excluded. Surface 25 d is replaced by d25 + 1.50/1.51633 + 1.12 ║
 * ║    so the omitted plate retains its first-order air-equivalent effect.    ║
 * ║                                                                            ║
 * ║  SCALE: none. Patent radii, thicknesses, and asphere coefficients remain ║
 * ║    at their native Example 1 scale. Patent k is the standard conic K.    ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: inferred, not patent-listed.                              ║
 * ║    SDs were derived from exact meridional on-axis pupil-edge rays and    ║
 * ║    the default 0.60-field off-axis bundle at all three zoom states, then ║
 * ║    constrained by edge thickness, actual rim slope, shared-gap intrusion,║
 * ║    the patent Figure 1 silhouette, and the production 67 mm filter size. ║
 * ║                                                                            ║
 * ║  GLASS: d-line nd/νd are patent data. Vendor identity is unresolved.      ║
 * ║    Generic coordinate/class labels are used; the 1.53110/55.9 aspheric  ║
 * ║    material remains Unmatched. nC/nF/ng/dPgF are omitted because the     ║
 * ║    patent does not publish them and no vendor melt is uniquely resolved. ║
 * ║                                                                            ║
 * ║  SOURCE CONFLICT: Table 1 condition (3) prints 0.975073 although the     ║
 * ║    stated f3A/|f2| evaluates to about 2.33746. The prescription is not   ║
 * ║    altered to force that conflicted conditional-expression row.          ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-24-105mm-f4-71-is-stm",
  maker: "Canon",
  name: "CANON RF 24-105mm f/4-7.1 IS STM",
  subtitle: "US 2021/0003831 A1 Example 1 — production correlation to Canon RF 24-105mm F4-7.1 IS STM",
  specs: [
    "13 ELEMENTS / 11 GROUPS",
    "24-105mm f/4-7.1 (MARKETED)",
    "PATENT f = 24.72-101.85 mm",
    "PATENT F/4.11-7.31",
    "2 ASPHERICAL SURFACES",
    "B3B OPTICAL IS",
  ],

  focalLengthMarketing: [24, 105],
  focalLengthDesign: [24.721164, 101.867735],
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2021/0003831 A1",
  patentAuthors: ["Yasuaki Hagiwara"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2021,
  elementCount: 13,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1 / B1",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.6,
      indexReference: "d",
      fl: 108.480453,
      glass: "603606 SK14-class (vendor unresolved)",
      apd: false,
      role: "Single positive element forming the first zoom unit B1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2 / B2",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      indexReference: "d",
      fl: -20.029324,
      glass: "904313 class (vendor unresolved)",
      apd: false,
      role: "Leading negative element of the net-negative second zoom unit B2.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3 / B2",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.6,
      indexReference: "d",
      fl: -37.156145,
      glass: "603606 SK14-class (vendor unresolved)",
      apd: false,
      role: "Second negative element of B2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4 / B2",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      indexReference: "d",
      fl: 34.151341,
      glass: "847239 class (vendor unresolved)",
      apd: false,
      role: "Positive rear element completing the net-negative B2 zoom unit.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5 / B3A",
      type: "Plano-Convex Positive",
      nd: 1.90366,
      vd: 31.3,
      indexReference: "d",
      fl: 28.275015,
      glass: "904313 class (vendor unresolved)",
      apd: false,
      role: "Front positive element of subunit B3A, immediately ahead of its cemented pair.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6 / B3A",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      indexReference: "d",
      fl: 20.158387,
      glass: "603606 SK14-class (vendor unresolved)",
      apd: false,
      cemented: "B3A-D1",
      role: "Positive component of the cemented B3A pair.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7 / B3A",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.3,
      indexReference: "d",
      fl: -11.913397,
      glass: "904313 class (vendor unresolved)",
      apd: false,
      cemented: "B3A-D1",
      role: "Negative component of the cemented B3A pair; the cemented pair is net negative.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8 / B3B IS",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.3,
      indexReference: "d",
      fl: -38.055897,
      glass: "911353 class (vendor unresolved)",
      apd: false,
      cemented: "B3B-IS",
      role: "Negative component of the cemented image-stabilizing subunit B3B.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9 / B3B IS",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      indexReference: "d",
      fl: 18.706681,
      glass: "603606 SK14-class (vendor unresolved)",
      apd: false,
      cemented: "B3B-IS",
      role: "Positive component that makes B3B net positive; B3B shifts transversely for optical IS.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10 / B3C",
      type: "Plano-Convex Positive",
      nd: 1.60311,
      vd: 60.6,
      indexReference: "d",
      fl: 51.123344,
      glass: "603606 SK14-class (vendor unresolved)",
      apd: false,
      role: "Single positive element forming subunit B3C.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11 / B4 FOCUS",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.3,
      indexReference: "d",
      fl: -31.637406,
      glass: "911353 class (vendor unresolved)",
      apd: false,
      role: "Single negative fourth unit; the patent identifies B4 as the axial focus unit.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12 / B5",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5311,
      vd: 55.9,
      indexReference: "d",
      fl: -103.73225,
      glass: "Unmatched (1.53110/55.9; no exact public catalog match)",
      apd: false,
      role: "Double-sided aspherical negative element forming the fifth zoom unit B5.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13 / B6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      indexReference: "d",
      fl: 76.673936,
      glass: "847239 class (vendor unresolved)",
      apd: false,
      role: "Single positive rear unit B6, immediately ahead of the normalized image-space gap.",
    },
  ],

  /* ── Surface prescription ──
   * Flat optical planes use the project infinity-radius convention R = 1e15.
   * Surface 25 d is the air-equivalent surface-25-to-image distance after GB omission.
   */
  surfaces: [
    { label: "1", R: 56.962, d: 6.4, nd: 1.60311, elemId: 1, sd: 17.5 },
    { label: "2", R: 421.715, d: 1.44, nd: 1, elemId: 0, sd: 17 },
    { label: "3", R: 142.374, d: 1.2, nd: 1.90366, elemId: 2, sd: 11.5 },
    { label: "4", R: 15.994, d: 8.29, nd: 1, elemId: 0, sd: 11 },
    { label: "5", R: -85.062, d: 1, nd: 1.60311, elemId: 3, sd: 9.5 },
    { label: "6", R: 30.559, d: 0.17, nd: 1, elemId: 0, sd: 9.5 },
    { label: "7", R: 24.88, d: 4.9, nd: 1.84666, elemId: 4, sd: 9.7 },
    { label: "8", R: 162.207, d: 24.94, nd: 1, elemId: 0, sd: 9.5 },
    { label: "9", R: 25.551, d: 2.3, nd: 1.90366, elemId: 5, sd: 7.5 },
    { label: "10", R: 1e15, d: 0.82, nd: 1, elemId: 0, sd: 7.3 },
    { label: "11", R: 16.661, d: 4.5, nd: 1.60311, elemId: 6, sd: 6.8 },
    { label: "12", R: -40.41, d: 0.7, nd: 1.90366, elemId: 7, sd: 6.6 },
    { label: "13", R: 14.796, d: 3.21, nd: 1, elemId: 0, sd: 6.2 },
    { label: "STO", R: 1e15, d: 1.82, nd: 1, elemId: 0, sd: 5.368444471 },
    { label: "15", R: 23.294, d: 0.7, nd: 1.91082, elemId: 8, sd: 6.1 },
    { label: "16", R: 13.732, d: 4, nd: 1.60311, elemId: 9, sd: 6.1 },
    { label: "17", R: -56.31, d: 0.8, nd: 1, elemId: 0, sd: 6 },
    { label: "18", R: 30.833, d: 1.9, nd: 1.60311, elemId: 10, sd: 5.8 },
    { label: "19", R: 1e15, d: 2.5, nd: 1, elemId: 0, sd: 5.6 },
    { label: "20", R: 42.206, d: 0.7, nd: 1.91082, elemId: 11, sd: 5.5 },
    { label: "21", R: 16.989, d: 15.04, nd: 1, elemId: 0, sd: 5.4 },
    { label: "22A", R: -51.498, d: 2, nd: 1.5311, elemId: 12, sd: 7.7 },
    { label: "23A", R: -800, d: 1.16, nd: 1, elemId: 0, sd: 8.3 },
    { label: "24", R: 144.43, d: 3.6, nd: 1.84666, elemId: 13, sd: 11.5 },
    { label: "25", R: -116.569, d: 13.229230576457631, nd: 1, elemId: 0, sd: 11.8 },
  ],

  /* ── Aspherical surfaces ──
   * Patent equation uses the standard conic denominator with (1 + K), so K is direct.
   */
  asph: {
    "22A": {
      K: 0,
      A4: -1.57463e-4,
      A6: 1.04871e-6,
      A8: -1.26019e-9,
      A10: -4.88195e-11,
      A12: 2.09933e-13,
      A14: 0,
    },
    "23A": {
      K: 0,
      A4: -1.4514e-4,
      A6: 1.09597e-6,
      A8: -5.39275e-9,
      A10: 6.43335e-12,
      A12: 1.24146e-14,
      A14: 0,
    },
  },

  /* ── Zoom / focus spacings ──
   * Every pair is [infinity, close]. Focus is intentionally not reconstructed,
   * so each pair contains identical values at a given zoom position.
   */
  var: {
    "2": [
      [1.44, 1.44],
      [19.55, 19.55],
      [32.15, 32.15],
    ],
    "8": [
      [24.94, 24.94],
      [4.11, 4.11],
      [0.7, 0.7],
    ],
    "19": [
      [2.5, 2.5],
      [3.87, 3.87],
      [4.03, 4.03],
    ],
    "21": [
      [15.04, 15.04],
      [13.66, 13.66],
      [13.5, 13.5],
    ],
    "23A": [
      [1.16, 1.16],
      [2.75, 2.75],
      [19.87, 19.87],
    ],
    "25": [
      [13.229230576457631, 13.229230576457631],
      [36.759230576457625, 36.759230576457625],
      [37.66923057645763, 37.66923057645763],
    ],
  },
  varLabels: [
    ["2", "D2 (ZOOM)"],
    ["8", "D8 (ZOOM)"],
    ["19", "D19 / PRE-FOCUS (ZOOM)"],
    ["21", "D21 / POST-FOCUS (ZOOM)"],
    ["23A", "D23 (ZOOM)"],
    ["25", "BF / AIR-EQUIVALENT (ZOOM)"],
  ],

  zoomPositions: [24.72, 66.67, 101.85],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "B1 (+)", fromSurface: "1", toSurface: "2" },
    { text: "B2 (-)", fromSurface: "3", toSurface: "8" },
    { text: "B3A (+)", fromSurface: "9", toSurface: "13" },
    { text: "B3B / IS (+)", fromSurface: "15", toSurface: "17" },
    { text: "B3C (+)", fromSurface: "18", toSurface: "19" },
    { text: "B4 / FOCUS (-)", fromSurface: "20", toSurface: "21" },
    { text: "B5 (-)", fromSurface: "22A", toSurface: "23A" },
    { text: "B6 (+)", fromSurface: "24", toSurface: "25" },
  ],
  doublets: [
    { text: "B3A-D1", fromSurface: "11", toSurface: "13" },
    { text: "B3B-IS", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.13,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: Example 1 publishes infinity-only zoom states. B4 is the negative axial focus unit, but no finite-focus spacings are authored. Canon's 0.13 m minimum manual-focus distance is metadata only.",

  /* ── Aperture configuration ──
   * Exact modeled/patent f-numbers control pupil and stop geometry at each published zoom state.
   */
  nominalFno: [4.11, 6.18, 7.31],
  fstopSeries: [4.11, 5.6, 6.18, 7.31, 8, 11, 16, 22, 32, 40],
  maxFstop: 40,
  apertureBlades: 7,

  /* ── Layout ── */
  scFill: 0.7,
  yScFill: 0.68,
} satisfies LensDataInput;

export default LENS_DATA;
