import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — HD PENTAX-DA* 11-18mm f/2.8 ED DC AW                         ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2018/0164556 A1, Numerical Example 1 (Takahiko Ohishi).   ║
 * ║  Probable production correlation; the patent does not identify the lens.   ║
 * ║  Unscaled APS-C retrofocus zoom: 16 material elements / 11 air groups,     ║
 * ║  four moving power groups (N–P–N–P), and four aspherical surfaces.         ║
 * ║                                                                            ║
 * ║  Zoom positions: 11.25 mm (W), 14.00 mm (M), 17.70 mm (T).                ║
 * ║  Zoom-only gaps: D17, D21, BFD. Zoom + focus gaps: D10 and D15.           ║
 * ║  G1 and G3 have non-monotonic continuous zoom paths in the patent; the     ║
 * ║  three published numerical stations preserve the tabulated endpoints.      ║
 * ║                                                                            ║
 * ║  FOCUS — CONSTRAINED_RECONSTRUCTION:                                      ║
 * ║    The patent publishes infinity states only. Paragraph 0067 identifies    ║
 * ║    the G2 front subgroup L21/L22/L23 (surfaces 11–15) as a permissible     ║
 * ║    focusing group. Close-focus values translate that rigid subgroup toward ║
 * ║    the image while conserving D10 + D15 at each zoom station. A coded      ║
 * ║    finite-conjugate solve uses the production 0.30 m image-plane-referenced║
 * ║    MFD and gives 0.09791× paraxial magnification at tele (published 0.10×).║
 * ║                                                                            ║
 * ║  APERTURE: The patent publishes constant F/2.8 but no stop diameter.       ║
 * ║    nominalFno = 2.8 therefore governs the runtime stop/pupil solve at each  ║
 * ║    zoom station. The authored STO sd provides a small allowance above the   ║
 * ║    largest verified wide-open requirement; it is not a patent dimension.    ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: No clear apertures are published. SDs are inferred from   ║
 * ║    exact Snell/asphere traces of the on-axis pupil, the 60%-field bundle,   ║
 * ║    and the full-field chief ray across all infinity and reconstructed      ║
 * ║    close-focus states, then constrained by edge thickness, actual rim      ║
 * ║    slope, conic domain, cross-gap intrusion, and render-trim policy.        ║
 * ║                                                                            ║
 * ║  GLASS: The patent supplies nd and νd only. Neutral six-digit classes are  ║
 * ║    used because catalog equality does not prove the melt vendor. nC, nF,   ║
 * ║    ng, and dPgF are intentionally omitted; no APO claim is encoded.        ║
 * ║                                                                            ║
 * ║  No scale factor, cover glass, filter, dummy surface, or mechanical plane  ║
 * ║  is included. Table 29 conditions (4) and (5) remain documented source     ║
 * ║  contradictions; the prescription itself governs this model.               ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-da-11-18-f28",
  maker: "Pentax",
  name: "PENTAX HD PENTAX-DA* 11-18mm f/2.8 ED DC AW",
  subtitle: "US 2018/0164556 A1 Example 1 — probable production correlation",
  specs: [
    "16 ELEMENTS / 11 GROUPS",
    "11–18 mm MARKETING / 11.25–17.70 mm DESIGN",
    "F/2.8 CONSTANT",
    "2ω = 105.2–76.8° (PATENT)",
    "4 ASPHERICAL SURFACES",
    "CONSTRAINED INTERNAL-FOCUS RECONSTRUCTION",
  ],

  focalLengthMarketing: [11, 18],
  focalLengthDesign: [11.250414911, 17.69739414],
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["pentax-k"],
  imageFormat: "aps-c",
  patentNumber: "US 2018/0164556 A1",
  patentAuthors: ["Takahiko Ohishi"],
  patentAssignees: ["Takahiko Ohishi"],
  patentYear: 2018,
  elementCount: 16,
  groupCount: 11,

  /* ── Elements ──
   * Element focal lengths are independently recomputed with each constituent
   * isolated in air. Cemented-set and in-situ group powers are separate results.
   */
  elements: [
    // ── G1: negative first group (f1 = -13.8791 mm) ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.6935,
      vd: 53.2,
      fl: -43.035,
      glass: "694532 class (vendor unproven)",
      apd: false,
      role: "Large front negative meniscus establishing the retrofocus wide-angle entrance geometry",
    },
    {
      id: 2,
      name: "L12g",
      label: "Element 2 (glass body)",
      type: "Negative Meniscus",
      nd: 1.78,
      vd: 50.9,
      fl: -34.56283,
      glass: "Unmatched (780509 class; no defensible current-catalog identity recovered)",
      apd: false,
      cemented: "H1",
      role: "Glass body of the negative hybrid lens in G1",
    },
    {
      id: 3,
      name: "L12r",
      label: "Element 3 (resin layer)",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.52972,
      vd: 42.7,
      fl: 369.757723,
      glass: "Synthetic resin layer (patent-defined hybrid asphere)",
      apd: false,
      cemented: "H1",
      role: "Thin bonded aspherical layer; the complete L12 hybrid remains a negative component",
    },
    {
      id: 4,
      name: "L13",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.81,
      vd: 37.2,
      fl: -38.062334,
      glass: "Unmatched (810372 class; no defensible current-catalog identity recovered)",
      apd: false,
      role: "Strong negative singlet distributing G1 divergence",
    },
    {
      id: 5,
      name: "L14",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.54732,
      vd: 46,
      fl: 21.259099,
      glass: "547460 class (soft catalog neighborhood only; vendor unproven)",
      apd: false,
      cemented: "D1",
      role: "Positive member of the patent-defined positive cemented lens in G1",
    },
    {
      id: 6,
      name: "L15",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.85,
      vd: 44,
      fl: -27.467064,
      glass: "Unmatched (850440 class; no defensible current-catalog identity recovered)",
      apd: false,
      cemented: "D1",
      role: "Negative member closing the net-positive G1 cemented pair",
    },

    // ── G2: positive second group (f2 = +36.1492 mm) ──
    {
      id: 7,
      name: "L21",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.56732,
      vd: 42.8,
      fl: 26.673027,
      glass: "567428 class (vendor unproven)",
      apd: false,
      cemented: "D2",
      role: "Positive front member of the G2 cemented doublet and focusing subgroup",
    },
    {
      id: 8,
      name: "L22",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.6,
      fl: -36.092608,
      glass: "816466 class (vendor unproven)",
      apd: false,
      cemented: "D2",
      role: "Negative partner in the G2 front doublet",
    },
    {
      id: 9,
      name: "L23",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.56406,
      vd: 46.3,
      fl: 93.208271,
      glass: "Unmatched (564463 class; no defensible current-catalog identity recovered)",
      apd: false,
      role: "Rear singlet of the translated G2 front focusing subgroup",
    },
    {
      id: 10,
      name: "L24",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 118.54496,
      glass: "497816 ED-crown class (vendor unproven)",
      apd: false,
      role: "Low-dispersion rear member of G2, held fixed in the constrained focus model",
    },

    // ── G3: negative third group (f3 = -55.8336 mm) ──
    {
      id: 11,
      name: "L31",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -18.958221,
      glass: "804466 class (vendor unproven)",
      apd: false,
      cemented: "D3",
      role: "Negative front member of the cemented third group",
    },
    {
      id: 12,
      name: "L32",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: 29.122124,
      glass: "847238 dense-flint class (vendor unproven)",
      apd: false,
      cemented: "D3",
      role: "Positive member completing the net-negative G3 doublet",
    },

    // ── G4: positive fourth group (f4 = +33.0347 mm) ──
    {
      id: 13,
      name: "L41",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 95,
      fl: 32.182434,
      glass: "439950 extreme-low-dispersion crown class (vendor unproven)",
      apd: false,
      role: "Strong low-dispersion positive element at the front of G4",
    },
    {
      id: 14,
      name: "L42",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      fl: -27.823051,
      glass: "847238 dense-flint class (vendor unproven)",
      apd: false,
      cemented: "D4",
      role: "High-dispersion negative member of the weak net-negative G4 cemented pair",
    },
    {
      id: 15,
      name: "L43",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 33.539367,
      glass: "497816 ED-crown class (vendor unproven)",
      apd: false,
      cemented: "D4",
      role: "Low-dispersion positive partner in the G4 cemented pair",
    },
    {
      id: 16,
      name: "L44",
      label: "Element 16",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.51633,
      vd: 64.1,
      fl: 174.474776,
      glass: "516641 crown class (vendor unproven)",
      apd: false,
      role: "Double-asphere final element controlling the rear field and distortion balance",
    },
  ],

  /* ── Surface prescription ──
   * Base d values are the first published zoom position at infinity focus.
   * At cemented junctions, elemId identifies the downstream element.
   */
  surfaces: [
    // ── G1 ──
    { label: "1A", R: 272.344, d: 2.8, nd: 1.6935, elemId: 1, sd: 23 },
    { label: "2", R: 26.784, d: 6.553, nd: 1, elemId: 0, sd: 18.5 },
    { label: "3", R: 125.855, d: 1.746, nd: 1.78, elemId: 2, sd: 16.5 },
    { label: "4", R: 22.068, d: 0.2, nd: 1.52972, elemId: 3, sd: 13.2 },
    { label: "5A", R: 24.792, d: 8.1, nd: 1, elemId: 0, sd: 13 },
    { label: "6", R: -35.314, d: 1.968, nd: 1.81, elemId: 4, sd: 11.5 },
    { label: "7", R: 248.89, d: 1.512, nd: 1, elemId: 0, sd: 11 },
    { label: "8", R: 58.206, d: 8.505, nd: 1.54732, elemId: 5, sd: 10.5 },
    { label: "9", R: -13.791, d: 1.919, nd: 1.85, elemId: 6, sd: 10 },
    { label: "10", R: -35.848, d: 12.448, nd: 1, elemId: 0, sd: 10 },

    // ── G2 ──
    { label: "11", R: 93.549, d: 4.713, nd: 1.56732, elemId: 7, sd: 10.5 },
    { label: "12", R: -17.723, d: 1.3, nd: 1.816, elemId: 8, sd: 10.5 },
    { label: "13", R: -45.971, d: 0.2, nd: 1, elemId: 0, sd: 10.5 },
    { label: "14", R: 73.588, d: 2.38, nd: 1.56406, elemId: 9, sd: 10.8 },
    { label: "15", R: -181.972, d: 2.484, nd: 1, elemId: 0, sd: 10.8 },
    { label: "16", R: -211.824, d: 2.315, nd: 1.497, elemId: 10, sd: 11 },
    { label: "17", R: -46.263, d: 4.429, nd: 1, elemId: 0, sd: 11 },

    // Runtime rebuilds the physical stop radius from nominalFno at every zoom position.
    { label: "STO", R: 1e15, d: 2.508, nd: 1, elemId: 0, sd: 9.2 },

    // ── G3 ──
    { label: "19", R: -40.99, d: 1.35, nd: 1.804, elemId: 11, sd: 10.5 },
    { label: "20", R: 24.622, d: 3.39, nd: 1.84666, elemId: 12, sd: 10.5 },
    { label: "21", R: 16468.03, d: 10.392, nd: 1, elemId: 0, sd: 10.5 },

    // ── G4 ──
    { label: "22", R: 22.432, d: 5.634, nd: 1.43875, elemId: 13, sd: 11.7 },
    { label: "23", R: -35.188, d: 0.467, nd: 1, elemId: 0, sd: 11.7 },
    { label: "24", R: -64.205, d: 1.35, nd: 1.84666, elemId: 14, sd: 11.5 },
    { label: "25", R: 37.567, d: 5.468, nd: 1.497, elemId: 15, sd: 11.5 },
    { label: "26", R: -28.517, d: 0.15, nd: 1, elemId: 0, sd: 11.5 },
    { label: "27A", R: -199.129, d: 2, nd: 1.51633, elemId: 16, sd: 11.7 },
    { label: "28A", R: -62.238, d: 38.14, nd: 1, elemId: 0, sd: 11.7 },
  ],

  /* ── Aspherical coefficients ──
   * Patent equation: standard conic K in sqrt(1 - (1 + K)c²h²), plus even A4–A12 terms.
   * Sag and h are in millimeters; coefficients therefore use mm^(1-p). No scale transform is applied.
   */
  asph: {
    "1A": {
      K: -11.636,
      A4: 4.186e-5,
      A6: -1.186e-7,
      A8: 3.434e-10,
      A10: -5.617e-13,
      A12: 4.229e-16,
      A14: 0,
    },
    "5A": {
      K: 0.055,
      A4: 7.196e-5,
      A6: -3.796e-7,
      A8: 1.912e-9,
      A10: -8.408e-12,
      A12: 0,
      A14: 0,
    },
    "27A": {
      K: 0,
      A4: -9.87e-5,
      A6: -3.859e-7,
      A8: 1.285e-9,
      A10: 6.79e-12,
      A12: 2.725e-14,
      A14: 0,
    },
    "28A": {
      K: 2.202,
      A4: -6.747e-5,
      A6: -3.336e-7,
      A8: 2.692e-9,
      A10: -5.199e-12,
      A12: 4.675e-14,
      A14: 0,
    },
  },

  /* ── Zoom and focus ── */
  zoomPositions: [11.25, 14, 17.7],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  var: {
    // G1→G2 and L23→L24 are coupled by the constrained internal-focus reconstruction.
    "10": [
      [12.448, 13.483191992256],
      [7.614, 8.660369061548],
      [3.125, 4.220533480699],
    ],
    "15": [
      [2.484, 1.448808007744],
      [2.484, 1.437630938452],
      [2.484, 1.388466519301],
    ],

    // Zoom-only spacings retain identical infinity/close values.
    "17": [
      [4.429, 4.429],
      [11.146, 11.146],
      [16.949, 16.949],
    ],
    "21": [
      [10.392, 10.392],
      [5.652, 5.652],
      [1.162, 1.162],
    ],
    "28A": [
      [38.14, 38.14],
      [42.13, 42.13],
      [48.88, 48.88],
    ],
  },
  varLabels: [
    ["10", "D10 — G1 to focus subgroup"],
    ["15", "D15 — focus subgroup to L24"],
    ["17", "D17 — G2 to stop/G3"],
    ["21", "D21 — G3 to G4"],
    ["28A", "BFD"],
  ],

  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent-published infinity zoom states are transcribed exactly. " +
    "The G2 front subgroup L21/L22/L23 (surfaces 11–15), identified as a permissible focusing group in patent " +
    "paragraph 0067, translates imageward while D10 + D15 remains constant at each zoom station. Close endpoints " +
    "are code-solved for a 0.30 m object distance referenced to the fixed image plane; the tele state gives 0.09791× " +
    "paraxial magnification, consistent with the rounded 0.10× production specification. No other floating " +
    "motion is inferred.",

  /* ── Group annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1A", toSurface: "10" },
    { text: "G2 (+)", fromSurface: "11", toSurface: "17" },
    { text: "G3 (−)", fromSurface: "19", toSurface: "21" },
    { text: "G4 (+)", fromSurface: "22", toSurface: "28A" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "5A" },
    { text: "D1", fromSurface: "8", toSurface: "10" },
    { text: "D2", fromSurface: "11", toSurface: "13" },
    { text: "D3", fromSurface: "19", toSurface: "21" },
    { text: "D4", fromSurface: "24", toSurface: "26" },
  ],

  /* ── Aperture, focus range, and rendering ── */
  nominalFno: 2.8,
  closeFocusM: 0.3,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
