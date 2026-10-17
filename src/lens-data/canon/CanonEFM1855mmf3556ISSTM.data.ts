import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  Patent effective diameters are used as clear diameters (sd = diameter/2) for    ║
 * ║  refracting surfaces. The Numerical Embodiment 1 patent surface table prints     ║
 * ║  9.86 mm (4.93 mm radius) at stop surface 17. nominalFno stores the patent       ║
 * ║  F-numbers 3.60 / 4.27 / 5.69. The iris is one fixed opening sized from the wide ║
 * ║  value: a real marginal ray at f/3.60 meets the stop at 4.928 mm, a 9.856 mm     ║
 * ║  diameter. Through the published clear apertures the axial beam traces           ║
 * ║  f/3.6003 / 4.2709 / 5.6856. The rim of surface 13 (9.67 mm) limits the middle   ║
 * ║  and telephoto states, where the iris alone passes about f/4.25 and f/5.65.      ║
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
  schema: 2,
  key: "canon-ef-m-18-55-f35-56-is-stm",
  maker: "Canon",
  name: "CANON EF-M 18-55mm f/3.5-5.6 IS STM",
  subtitle: "US 2013/0335830 A1 · Numerical Embodiment 1 · production correlation inferred",

  catalog: {
    lensMounts: ["canon-ef-m"],
    imageFormat: "aps-c",
    specs: [
      "13 ELEMENTS / 11 GROUPS",
      "18.58-53.36 mm DESIGN",
      "f/3.60-5.69 MODELED",
      "4 ASPHERICAL SURFACES / 3 ASPHERICAL ELEMENTS",
      "INNER FOCUS / OPTICAL IS",
      "0.25 m MFD / 0.25× MAX MAG (MARKETING)",
    ],
    elementCount: 13,
    groupCount: 11,
    focalLengthMm: { marketing: [18, 55], design: [18.58, 53.36] },
    fNumber: {
      marketing: 3.5, // scalar schema field stores the marketed wide-end maximum; the name preserves f/3.5-5.6
    },
  },

  source: {
    patentNumber: "US 2013/0335830 A1",
    patentYear: 2013,
    authors: ["Yoshihisa Tashiro", "Yasuaki Hagiwara"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -188.91,
      glass: "847239 — vendor unresolved",
      apd: false,
      role: "Negative member of the cemented positive first zoom unit L1.",
      cemented: "L1",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 61.0,
      glass: "697555 — vendor unresolved",
      apd: false,
      role: "Positive member that completes the cemented positive first zoom unit L1.",
      cemented: "L1",
    },
    {
      id: 3,
      name: "L2a",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -18.94,
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
      focalLengthMm: -27.21,
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
      focalLengthMm: 31.47,
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
      focalLengthMm: 38.79,
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
      focalLengthMm: -26.43,
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
      focalLengthMm: 10.7,
      glass: "697555 — vendor unresolved",
      apd: false,
      role: "Positive member of the cemented pair in rear positive subunit LRa.",
      cemented: "LRa-D1",
    },
    {
      id: 9,
      name: "LRa2",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -40.21,
      glass: "847239 — vendor unresolved",
      apd: false,
      role: "Negative cemented partner in rear positive subunit LRa.",
      cemented: "LRa-D1",
    },
    {
      id: 10,
      name: "LRa3",
      label: "Element 10",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: 57.25,
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
      focalLengthMm: -18.26,
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
      focalLengthMm: 998.48,
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
      focalLengthMm: 64.55,
      glass: "847239 — vendor unresolved",
      apd: false,
      role: "Final positive element completing rear positive subunit LRc.",
    },
  ],

  /* ── Surface prescription ──
   * Patent effective diameters are halved for sd on refracting surfaces. The Numerical Embodiment 1
   * surface table prints 9.86 mm at stop surface 17; its radius is derived from the design f-number.
   * Patent surfaces 26-29 (optical block G) are omitted; their air-equivalent path is folded into d25.
   */
  /* (moved from asph) ── Aspherical coefficients ──
   * Patent equation is the standard conic form with standard K; no κ-to-K conversion.
   */
  surfaces: [
    { label: "1", R: 46.669, d: 1.7, sd: 17.475, medium: 1 },
    { label: "2", R: 35.524, d: 4.6, sd: 16.4, medium: 2 },
    { label: "3", R: 204.82, sd: 16.035 },
    { label: "4", R: 34.378, d: 1.2, sd: 12.115, medium: 3 },
    { label: "5", R: 10.658, d: 6.37, sd: 8.985 },
    {
      label: "6A",
      R: -54.819,
      d: 1.0,
      sd: 8.735,
      medium: 4,
      asphere: { K: 20.3284, A4: 1.34534e-5, A6: 9.74836e-8, A8: -5.46269e-10, A10: 7.4862e-12 },
    },
    { label: "7", R: 40.459, d: 0.15, sd: 8.49 },
    { label: "8", R: 21.274, d: 2.6, sd: 8.5, medium: 5 },
    { label: "9", R: 74.846, sd: 8.24 },
    { label: "10", R: 16.794, d: 1.4, sd: 4.825, medium: 6 },
    { label: "11", R: 36.819, sd: 4.735 },
    { label: "12", R: -16.363, d: 0.55, sd: 4.7, medium: 7 },
    { label: "13", R: -55.623, sd: 4.835 },
    { label: "14", R: 14.081, d: 3.8, sd: 5.475, medium: 8 },
    { label: "15", R: -14.081, d: 0.8, sd: 5.35, medium: 9 },
    { label: "16", R: -24.638, d: 0.8, sd: 5.305 },
    // US 2013/0335830 A1, Numerical Embodiment 1 surface table, surface 17: printed
    // effective diameter 9.86 mm at the stop.
    { label: "STO", R: "flat", d: 2.0 },
    {
      label: "18A",
      R: 23.987,
      d: 2.0,
      sd: 4.545,
      medium: 10,
      asphere: { K: -4.0286, A4: -1.06804e-4, A6: -4.99512e-6, A8: -1.13675e-8, A10: -3.18466e-9, A12: 6.43346e-11 },
    },
    {
      label: "19A",
      R: 82.591,
      sd: 4.68,
      asphere: { K: 0, A4: 1.4082e-4, A6: -3.17915e-6, A8: -8.57069e-8, A10: 1.14883e-9, A12: -1.17453e-12 },
    },
    { label: "20", R: -42.91, d: 0.6, sd: 5.025, medium: 11 },
    { label: "21", R: 26.991, sd: 5.215 },
    { label: "22", R: 25.069, d: 2.0, sd: 8.75, medium: 12 },
    {
      label: "23A",
      R: 25.588,
      d: 1.99,
      sd: 9.025,
      asphere: { K: -0.967257, A4: -2.37994e-5, A6: 1.12104e-7, A8: 5.00265e-11 },
    },
    { label: "24", R: -201.896, d: 2.0, sd: 9.155, medium: 13 },
    { label: "25", R: -43.203, sd: 9.45 },
  ],

  zoom: {
    /* (moved from nominalFno) ── Aperture configuration ──
     * nominalFno is the patent's F-number row. The fixed iris is sized from the wide value: 4.928 mm radius, 9.856 mm
     * diameter, against the 9.86 mm effective diameter the patent prints for the stop. The patent offers zoom-dependent
     * aperture control only as a possible modification (¶0093).
     */
    stations: [
      { focalLengthMm: 18.58, nominalFNumber: 3.6, label: "Wide" },
      { focalLengthMm: 27.82, nominalFNumber: 4.27 },
      { focalLengthMm: 53.36, nominalFNumber: 5.69, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.2494177228571617,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent states that only L4 moves objectward for finite focus but publishes no " +
      "finite-distance spacing rows. Close-focus d11/d13 pairs are code-solved from Canon's 0.25 m MFD while conserving " +
      "d11+d13. Because patent optical block G is omitted and replaced by an air-equivalent rear spacing, the same physical " +
      "object position is 0.249417722857 m from the normalized image plane; the tele state gives |m| ≈ 0.246777 versus the " +
      "marketed 0.25× maximum magnification.",
  },

  /* (moved from var) ── Zoom and focus spacings ──
   * All pairs are [infinity, close]. Only d11 and d13 change with focus.
   * d25 values already include the omitted G block's 2.7277228571617 mm air-equivalent path.
   */
  gaps: {
    "3": {
      label: "D3",
      values: [
        [0.6, 0.6],
        [8.07, 8.07],
        [20.2, 20.2],
      ],
    },
    "9": {
      label: "D9",
      values: [
        [12.88, 12.88],
        [7.33, 7.33],
        [0.54, 0.54],
      ],
    },
    "11": {
      label: "D11 / L4 FRONT",
      values: [
        [3.21, 2.0548670354945218],
        [3.97, 2.4685956155435917],
        [4.67, 2.2615529248096395],
      ],
    },
    "13": {
      label: "D13 / L4 REAR",
      values: [
        [2.48, 3.635132964505478],
        [1.71, 3.2114043844564084],
        [1.02, 3.4284470751903604],
      ],
    },
    "19A": {
      label: "D19",
      values: [
        [2.8, 2.8],
        [2.8, 2.8],
        [2.8, 2.8],
      ],
    },
    "21": {
      label: "D21",
      values: [
        [6.0, 6.0],
        [6.0, 6.0],
        [6.0, 6.0],
      ],
    },
    "25": {
      label: "IMAGE GAP (G-OMITTED)",
      values: [
        [14.1077228571617, 14.1077228571617],
        [20.2077228571617, 20.2077228571617],
        [33.4177228571617, 33.4177228571617],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

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

  /* ── Layout ── */
  layout: { yScFill: 0.38 },
} satisfies LensDataV2Input;

export default LENS_DATA;
