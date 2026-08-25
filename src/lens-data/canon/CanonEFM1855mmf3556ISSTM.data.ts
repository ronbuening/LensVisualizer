import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON EF-M 18-55mm f/3.5-5.6 IS STM                               ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 2013/0335830 A1, Numerical Embodiment 1 (Canon Kabushiki Kaisha).   ║
 * ║  Correlation to the production EF-M 18-55mm f/3.5-5.6 IS STM is an inference,   ║
 * ║  supported by the 13-element / 11-group construction, three aspherical elements, ║
 * ║  18.58-53.36 mm design range, L4 inner focus, and one-element LRb IS unit.       ║
 * ║                                                                                  ║
 * ║  Zoom variable gaps: patent d3, d9, d11, d13, d19, d21, d25.                    ║
 * ║  d19 and d21 are numerically constant in all three published states but remain   ║
 * ║  explicit var keys because the source table designates them variable spacings.    ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes only infinity    ║
 * ║  spacings but states that L4 alone moves objectward for finite focus. Close-focus ║
 * ║  d11/d13 pairs were solved in code from Canon's 0.25 m MFD while conserving      ║
 * ║  d11+d13. After omitting optical block G, the equivalent model MFD is            ║
 * ║  249.417722857 mm from the normalized image plane.                               ║
 * ║                                                                                  ║
 * ║  Optical block G (patent surfaces 26-29) is omitted because it represents a      ║
 * ║  filter / sensor faceplate. Its fixed 3.31 mm physical path is replaced by a     ║
 * ║  2.727722857 mm air-equivalent path, added to the published d25 at every zoom    ║
 * ║  state. No uniform prescription scaling is applied.                              ║
 * ║                                                                                  ║
 * ║  Patent effective diameters are used as clear diameters (sd = diameter/2),       ║
 * ║  except the aperture stop: the published 9.86 mm effective diameter is retained  ║
 * ║  as a source fact in the audit, while a 9.44 mm physical iris diameter           ║
 * ║  (sd = 4.72 mm) is modeled because it reproduces the published F-numbers.         ║
 * ║  nominalFno therefore stores the independently modeled values for that iris.      ║
 * ║                                                                                  ║
 * ║  Patent movement-sign contradiction: ¶0055 defines image-side motion positive,   ║
 * ║  while ¶0078 says object-side positive. The spacing table and Table 2 agree with  ║
 * ║  ¶0055. No patent value is silently altered to reconcile the prose.               ║
 * ║                                                                                  ║
 * ║  The patent publishes d-line nd/νd only. It does not publish per-element nC, nF,  ║
 * ║  ng, PgF, or dPgF, so those optional spectral fields are intentionally omitted.   ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-m-18-55-f35-56-is-stm",
  maker: "Canon",
  name: "CANON EF-M 18-55mm f/3.5-5.6 IS STM",
  subtitle: "US 2013/0335830 A1 · Numerical Embodiment 1 · production correlation inferred",
  specs: [
    "13 ELEMENTS / 11 GROUPS",
    "18.58-53.36 mm DESIGN",
    "f/3.60-5.69 MODELED",
    "4 ASPHERICAL SURFACES / 3 ASPHERICAL ELEMENTS",
    "INNER FOCUS / OPTICAL IS",
    "0.25 m MFD / 0.25× MAX MAG (MARKETING)",
  ],

  focalLengthMarketing: [18, 55],
  focalLengthDesign: [18.58, 53.36],
  apertureMarketing: 3.5, // scalar schema field stores the marketed wide-end maximum; the name preserves f/3.5-5.6
  lensMounts: ["canon-ef-m"],
  imageFormat: "aps-c",
  patentNumber: "US 2013/0335830 A1",
  patentAuthors: ["Yoshihisa Tashiro", "Yasuaki Hagiwara"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2013,
  elementCount: 13,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -188.91,
      glass: "847239 — vendor unresolved",
      apd: false,
      cemented: "L1",
      role: "Negative member of the cemented positive first zoom unit L1.",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: 61.0,
      glass: "697555 — vendor unresolved",
      apd: false,
      cemented: "L1",
      role: "Positive member that completes the cemented positive first zoom unit L1.",
    },
    {
      id: 3,
      name: "L2a",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -18.94,
      glass: "835427 — vendor unresolved",
      apd: false,
      role: "Front negative member of zoom unit L2.",
    },
    {
      id: 4,
      name: "L2b",
      label: "Element 4",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.85135,
      vd: 40.1,
      fl: -27.21,
      glass: "851401 — vendor unresolved",
      apd: false,
      role: "Aspherical negative member of zoom unit L2; patent surface 6 is aspherical.",
    },
    {
      id: 5,
      name: "L2c",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 18.9,
      fl: 31.47,
      glass: "923189 — vendor unresolved",
      apd: false,
      role: "Positive member completing the negative zoom unit L2.",
    },
    {
      id: 6,
      name: "L3",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 38.79,
      glass: "773496 — vendor unresolved",
      apd: false,
      role: "Single positive element forming zoom unit L3.",
    },
    {
      id: 7,
      name: "L4",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: -26.43,
      glass: "883408 — vendor unresolved",
      apd: false,
      role: "Single negative inner-focus element; moves objectward from infinity to finite focus.",
    },
    {
      id: 8,
      name: "LRa1",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 10.7,
      glass: "697555 — vendor unresolved",
      apd: false,
      cemented: "LRa-D1",
      role: "Positive member of the cemented pair in rear positive subunit LRa.",
    },
    {
      id: 9,
      name: "LRa2",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -40.21,
      glass: "847239 — vendor unresolved",
      apd: false,
      cemented: "LRa-D1",
      role: "Negative cemented partner in rear positive subunit LRa.",
    },
    {
      id: 10,
      name: "LRa3",
      label: "Element 10",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 57.25,
      glass: "583594 — vendor unresolved",
      apd: false,
      role: "Dual-aspherical positive element in LRa, immediately behind the aperture stop.",
    },
    {
      id: 11,
      name: "LRb",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.3,
      fl: -18.26,
      glass: "904313 — vendor unresolved",
      apd: false,
      role: "One-element negative image-stabilization subunit LRb; decentered transversely for IS.",
    },
    {
      id: 12,
      name: "LRc1",
      label: "Element 12",
      type: "Weak Positive Meniscus (1× Asph)",
      nd: 1.52996,
      vd: 55.8,
      fl: 998.48,
      glass: "Unmatched (nd=1.52996, nu_d=55.8; code 530558)",
      apd: false,
      role: "Weak positive aspherical element at the front of rear positive subunit LRc.",
    },
    {
      id: 13,
      name: "LRc2",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: 64.55,
      glass: "847239 — vendor unresolved",
      apd: false,
      role: "Final positive element completing rear positive subunit LRc.",
    },
  ],

  /* ── Surface prescription ──
   * Patent effective diameters are halved for sd, except STO as documented above.
   * Patent surfaces 26-29 (optical block G) are omitted; their air-equivalent path is folded into d25.
   */
  surfaces: [
    { label: "1", R: 46.669, d: 1.7, nd: 1.84666, elemId: 1, sd: 17.475 },
    { label: "2", R: 35.524, d: 4.6, nd: 1.6968, elemId: 2, sd: 16.4 },
    { label: "3", R: 204.82, d: 0.6, nd: 1.0, elemId: 0, sd: 16.035 },
    { label: "4", R: 34.378, d: 1.2, nd: 1.83481, elemId: 3, sd: 12.115 },
    { label: "5", R: 10.658, d: 6.37, nd: 1.0, elemId: 0, sd: 8.985 },
    { label: "6A", R: -54.819, d: 1.0, nd: 1.85135, elemId: 4, sd: 8.735 },
    { label: "7", R: 40.459, d: 0.15, nd: 1.0, elemId: 0, sd: 8.49 },
    { label: "8", R: 21.274, d: 2.6, nd: 1.92286, elemId: 5, sd: 8.5 },
    { label: "9", R: 74.846, d: 12.88, nd: 1.0, elemId: 0, sd: 8.24 },
    { label: "10", R: 16.794, d: 1.4, nd: 1.7725, elemId: 6, sd: 4.825 },
    { label: "11", R: 36.819, d: 3.21, nd: 1.0, elemId: 0, sd: 4.735 },
    { label: "12", R: -16.363, d: 0.55, nd: 1.883, elemId: 7, sd: 4.7 },
    { label: "13", R: -55.623, d: 2.48, nd: 1.0, elemId: 0, sd: 4.835 },
    { label: "14", R: 14.081, d: 3.8, nd: 1.6968, elemId: 8, sd: 5.475 },
    { label: "15", R: -14.081, d: 0.8, nd: 1.84666, elemId: 9, sd: 5.35 },
    { label: "16", R: -24.638, d: 0.8, nd: 1.0, elemId: 0, sd: 5.305 },
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 4.72 },
    { label: "18A", R: 23.987, d: 2.0, nd: 1.58313, elemId: 10, sd: 4.545 },
    { label: "19A", R: 82.591, d: 2.8, nd: 1.0, elemId: 0, sd: 4.68 },
    { label: "20", R: -42.91, d: 0.6, nd: 1.90366, elemId: 11, sd: 5.025 },
    { label: "21", R: 26.991, d: 6.0, nd: 1.0, elemId: 0, sd: 5.215 },
    { label: "22", R: 25.069, d: 2.0, nd: 1.52996, elemId: 12, sd: 8.75 },
    { label: "23A", R: 25.588, d: 1.99, nd: 1.0, elemId: 0, sd: 9.025 },
    { label: "24", R: -201.896, d: 2.0, nd: 1.84666, elemId: 13, sd: 9.155 },
    { label: "25", R: -43.203, d: 14.1077228571617, nd: 1.0, elemId: 0, sd: 9.45 },
  ],

  /* ── Aspherical coefficients ──
   * Patent equation is the standard conic form with standard K; no κ-to-K conversion.
   */
  asph: {
    "6A": {
      K: 20.3284,
      A4: 1.34534e-5,
      A6: 9.74836e-8,
      A8: -5.46269e-10,
      A10: 7.4862e-12,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: -4.0286,
      A4: -1.06804e-4,
      A6: -4.99512e-6,
      A8: -1.13675e-8,
      A10: -3.18466e-9,
      A12: 6.43346e-11,
      A14: 0,
    },
    "19A": {
      K: 0,
      A4: 1.4082e-4,
      A6: -3.17915e-6,
      A8: -8.57069e-8,
      A10: 1.14883e-9,
      A12: -1.17453e-12,
      A14: 0,
    },
    "23A": {
      K: -0.967257,
      A4: -2.37994e-5,
      A6: 1.12104e-7,
      A8: 5.00265e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom and focus spacings ──
   * All pairs are [infinity, close]. Only d11 and d13 change with focus.
   * d25 values already include the omitted G block's 2.7277228571617 mm air-equivalent path.
   */
  var: {
    "3": [
      [0.6, 0.6],
      [8.07, 8.07],
      [20.2, 20.2],
    ],
    "9": [
      [12.88, 12.88],
      [7.33, 7.33],
      [0.54, 0.54],
    ],
    "11": [
      [3.21, 2.0548670354945218],
      [3.97, 2.4685956155435917],
      [4.67, 2.2615529248096395],
    ],
    "13": [
      [2.48, 3.635132964505478],
      [1.71, 3.2114043844564084],
      [1.02, 3.4284470751903604],
    ],
    "19A": [
      [2.8, 2.8],
      [2.8, 2.8],
      [2.8, 2.8],
    ],
    "21": [
      [6.0, 6.0],
      [6.0, 6.0],
      [6.0, 6.0],
    ],
    "25": [
      [14.1077228571617, 14.1077228571617],
      [20.2077228571617, 20.2077228571617],
      [33.4177228571617, 33.4177228571617],
    ],
  },
  varLabels: [
    ["3", "D3"],
    ["9", "D9"],
    ["11", "D11 / L4 FRONT"],
    ["13", "D13 / L4 REAR"],
    ["19A", "D19"],
    ["21", "D21"],
    ["25", "IMAGE GAP (G-OMITTED)"],
  ],

  zoomPositions: [18.58, 27.82, 53.36],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "L2 (-)", fromSurface: "4", toSurface: "9" },
    { text: "L3 (+)", fromSurface: "10", toSurface: "11" },
    { text: "L4 (- / FOCUS)", fromSurface: "12", toSurface: "13" },
    { text: "LRa (+)", fromSurface: "14", toSurface: "19A" },
    { text: "LRb (- / IS)", fromSurface: "20", toSurface: "21" },
    { text: "LRc (+)", fromSurface: "22", toSurface: "25" },
  ],
  doublets: [
    { text: "L1", fromSurface: "1", toSurface: "3" },
    { text: "LRa-D1", fromSurface: "14", toSurface: "16" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.2494177228571617,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent states that only L4 moves objectward for finite focus but publishes no " +
    "finite-distance spacing rows. Close-focus d11/d13 pairs are code-solved from Canon's 0.25 m MFD while conserving " +
    "d11+d13. Because patent optical block G is omitted and replaced by an air-equivalent rear spacing, the same physical " +
    "object position is 0.249417722857 m from the normalized image plane; the tele state gives |m| ≈ 0.246777 versus the " +
    "marketed 0.25× maximum magnification.",

  /* ── Aperture configuration ──
   * Constant physical STO diameter = 9.44 mm. The modeled wide/mid/tele f-numbers below are independently recomputed.
   */
  nominalFno: [3.604671087827174, 4.2649779005790345, 5.693923234962015],
  fstopSeries: [3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],
  apertureBlades: 7,
  maxFstop: 22,

  /* ── Layout ── */
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
