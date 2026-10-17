import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PENTAX HD DA* 11-18mm f/2.8 ED DC AW                         ║
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
 * ║    nominalFNumber = 2.8 governs the runtime stop/pupil solve at each zoom  ║
 * ║    station: radius derived from the design f-number, not a patent          ║
 * ║    dimension.                                                              ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: No clear apertures are published. SDs are inferred from   ║
 * ║    exact Snell/asphere traces of the on-axis pupil, the 60%-field bundle,   ║
 * ║    and the full-field chief ray across all infinity and reconstructed      ║
 * ║    close-focus states, then constrained by edge thickness, actual rim      ║
 * ║    slope, conic domain, cross-gap intrusion, and render-trim policy. The    ║
 * ║    G2–G4 silhouette is tuned to the relative rim heights in patent Fig. 1. ║
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
  schema: 2,
  key: "pentax-da-11-18-f28",
  maker: "Pentax",
  name: "PENTAX HD DA* 11-18mm f/2.8 ED DC AW",
  subtitle: "US 2018/0164556 A1 Example 1 — probable production correlation",

  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    specs: [
      "16 ELEMENTS / 11 GROUPS",
      "11–18 mm MARKETING / 11.25–17.70 mm DESIGN",
      "F/2.8 CONSTANT",
      "2ω = 105.2–76.8° (PATENT)",
      "4 ASPHERICAL SURFACES",
      "CONSTRAINED INTERNAL-FOCUS RECONSTRUCTION",
    ],
    elementCount: 16,
    groupCount: 11,
    focalLengthMm: { marketing: [11, 18], design: [11.250414911, 17.69739414] },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 2018/0164556 A1",
    patentYear: 2018,
    authors: ["Takahiko Ohishi"],
    // A1 front page omits an organization; same-application assignment recorded 2017-11-29.
    // Source and reel/frame 044243/0469 are documented in the companion analysis.
    assignees: ["Ricoh Co., Ltd."],
  },

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
      focalLengthMm: -43.035,
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
      focalLengthMm: -34.56283,
      glass: "Unmatched (780509 class; no defensible current-catalog identity recovered)",
      apd: false,
      role: "Glass body of the negative hybrid lens in G1",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L12r",
      label: "Element 3 (resin layer)",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.52972,
      vd: 42.7,
      focalLengthMm: 369.757723,
      glass: "Synthetic resin layer (patent-defined hybrid asphere)",
      apd: false,
      role: "Thin bonded aspherical layer; the complete L12 hybrid remains a negative component",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L13",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.81,
      vd: 37.2,
      focalLengthMm: -38.062334,
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
      focalLengthMm: 21.259099,
      glass: "E-FEL1 (HOYA catalog equivalent; production supplier unspecified; patent 547460)",
      apd: false,
      role: "Positive member of the patent-defined positive cemented lens in G1",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L15",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.85,
      vd: 44,
      focalLengthMm: -27.467064,
      glass: "Unmatched (850440 class; no defensible current-catalog identity recovered)",
      apd: false,
      role: "Negative member closing the net-positive G1 cemented pair",
      cemented: "D1",
    },

    // ── G2: positive second group (f2 = +36.1492 mm) ──
    {
      id: 7,
      name: "L21",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.56732,
      vd: 42.8,
      focalLengthMm: 26.673027,
      glass: "567428 class (vendor unproven)",
      apd: false,
      role: "Positive front member of the G2 cemented doublet and focusing subgroup",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L22",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.6,
      focalLengthMm: -36.092608,
      glass: "816466 class (vendor unproven)",
      apd: false,
      role: "Negative partner in the G2 front doublet",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L23",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.56406,
      vd: 46.3,
      focalLengthMm: 93.208271,
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
      focalLengthMm: 118.54496,
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
      focalLengthMm: -18.958221,
      glass: "804466 class (vendor unproven)",
      apd: false,
      role: "Negative front member of the cemented third group",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L32",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 29.122124,
      glass: "847238 dense-flint class (vendor unproven)",
      apd: false,
      role: "Positive member completing the net-negative G3 doublet",
      cemented: "D3",
    },

    // ── G4: positive fourth group (f4 = +33.0347 mm) ──
    {
      id: 13,
      name: "L41",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 95,
      focalLengthMm: 32.182434,
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
      focalLengthMm: -27.823051,
      glass: "847238 dense-flint class (vendor unproven)",
      apd: false,
      role: "High-dispersion negative member of the weak net-negative G4 cemented pair",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L43",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 33.539367,
      glass: "497816 ED-crown class (vendor unproven)",
      apd: false,
      role: "Low-dispersion positive partner in the G4 cemented pair",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L44",
      label: "Element 16",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: 174.474776,
      glass: "516641 crown class (vendor unproven)",
      apd: false,
      role: "Double-asphere final element controlling the rear field and distortion balance",
    },
  ],

  /* ── Surface prescription ──
   * Base d values are the first published zoom position at infinity focus.
   * At cemented junctions, elemId identifies the downstream element.
   */
  /* (moved from asph) ── Aspherical coefficients ──
   * Patent equation: standard conic K in sqrt(1 - (1 + K)c²h²), plus even A4–A12 terms.
   * Sag and h are in millimeters; coefficients therefore use mm^(1-p). No scale transform is applied.
   */
  surfaces: [
    // ── G1 ──
    {
      label: "1A",
      R: 272.344,
      d: 2.8,
      sd: 23,
      medium: 1,
      asphere: { K: -11.636, A4: 4.186e-5, A6: -1.186e-7, A8: 3.434e-10, A10: -5.617e-13, A12: 4.229e-16 },
    },
    { label: "2", R: 26.784, d: 6.553, sd: 18.5 },
    { label: "3", R: 125.855, d: 1.746, sd: 16.5, medium: 2 },
    { label: "4", R: 22.068, d: 0.2, sd: 13.2, medium: 3 },
    {
      label: "5A",
      R: 24.792,
      d: 8.1,
      sd: 13,
      asphere: { K: 0.055, A4: 7.196e-5, A6: -3.796e-7, A8: 1.912e-9, A10: -8.408e-12, A12: 0 },
    },
    { label: "6", R: -35.314, d: 1.968, sd: 11.5, medium: 4 },
    { label: "7", R: 248.89, d: 1.512, sd: 11 },
    { label: "8", R: 58.206, d: 8.505, sd: 10.5, medium: 5 },
    { label: "9", R: -13.791, d: 1.919, sd: 10, medium: 6 },
    { label: "10", R: -35.848, sd: 10 },

    // ── G2 ──
    { label: "11", R: 93.549, d: 4.713, sd: 9.6, medium: 7 },
    { label: "12", R: -17.723, d: 1.3, sd: 9.6, medium: 8 },
    { label: "13", R: -45.971, d: 0.2, sd: 9.6 },
    { label: "14", R: 73.588, d: 2.38, sd: 9.5, medium: 9 },
    { label: "15", R: -181.972, sd: 9.5 },
    { label: "16", R: -211.824, d: 2.315, sd: 9.5, medium: 10 },
    { label: "17", R: -46.263, sd: 9.5 },

    // Runtime rebuilds the physical stop radius from aperture.nominalFNumber at every zoom position.
    { label: "STO", R: "flat", d: 2.508 },

    // ── G3 ──
    { label: "19", R: -40.99, d: 1.35, sd: 9.5, medium: 11 },
    { label: "20", R: 24.622, d: 3.39, sd: 9.5, medium: 12 },
    { label: "21", R: 16468.03, sd: 9.5 },

    // ── G4 ──
    { label: "22", R: 22.432, d: 5.634, sd: 11, medium: 13 },
    { label: "23", R: -35.188, d: 0.467, sd: 11 },
    { label: "24", R: -64.205, d: 1.35, sd: 10.8, medium: 14 },
    { label: "25", R: 37.567, d: 5.468, sd: 10.8, medium: 15 },
    { label: "26", R: -28.517, d: 0.15, sd: 10.8 },
    {
      label: "27A",
      R: -199.129,
      d: 2,
      sd: 11.7,
      medium: 16,
      asphere: { K: 0, A4: -9.87e-5, A6: -3.859e-7, A8: 1.285e-9, A10: 6.79e-12, A12: 2.725e-14 },
    },
    {
      label: "28A",
      R: -62.238,
      sd: 11.7,
      asphere: { K: 2.202, A4: -6.747e-5, A6: -3.336e-7, A8: 2.692e-9, A10: -5.199e-12, A12: 4.675e-14 },
    },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom and focus ── */
    stations: [{ focalLengthMm: 11.25, label: "Wide" }, { focalLengthMm: 14 }, { focalLengthMm: 17.7, label: "Tele" }],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.3,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent-published infinity zoom states are transcribed exactly. " +
      "The G2 front subgroup L21/L22/L23 (surfaces 11–15), identified as a permissible focusing group in patent " +
      "paragraph 0067, translates imageward while D10 + D15 remains constant at each zoom station. Close endpoints " +
      "are code-solved for a 0.30 m object distance referenced to the fixed image plane; the tele state gives 0.09791× " +
      "paraxial magnification, consistent with the rounded 0.10× production specification. No other floating " +
      "motion is inferred.",
  },

  gaps: {
    // G1→G2 and L23→L24 are coupled by the constrained internal-focus reconstruction.
    "10": {
      label: "D10 — G1 to focus subgroup",
      values: [
        [12.448, 13.483191992256],
        [7.614, 8.660369061548],
        [3.125, 4.220533480699],
      ],
    },
    "15": {
      label: "D15 — focus subgroup to L24",
      values: [
        [2.484, 1.448808007744],
        [2.484, 1.437630938452],
        [2.484, 1.388466519301],
      ],
    },
    // Zoom-only spacings retain identical infinity/close values.
    "17": {
      label: "D17 — G2 to stop/G3",
      values: [
        [4.429, 4.429],
        [11.146, 11.146],
        [16.949, 16.949],
      ],
    },
    "21": {
      label: "D21 — G3 to G4",
      values: [
        [10.392, 10.392],
        [5.652, 5.652],
        [1.162, 1.162],
      ],
    },
    "28A": {
      label: "BFD",
      values: [
        [38.14, 38.14],
        [42.13, 42.13],
        [48.88, 48.88],
      ],
    },
  },

  /* ── Aperture, focus range, and rendering ── */
  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], blades: 9 },

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

  layout: { yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
