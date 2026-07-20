import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2020/012638 A1, Example 8 (Table 8) (Nikon).     ║
 * ║  Negative-lead four-group zoom (−+−+), with VR via G2b decenter.  ║
 * ║  9 elements / 7 groups, 5 aspherical surfaces (4 asph elements).  ║
 * ║  Focus: inner focus via G3 (single biconcave, dual asph), moves   ║
 * ║         image-ward for close focus.                                ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D5, D14, D16.                                ║
 * ║  Focus variable gaps: D14, D16 (close values inferred).           ║
 * ║  G1 moves non-monotonically during zoom (image-ward then back).   ║
 * ║  G4 is fixed relative to the image plane.                         ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent data is at production scale — no scaling applied.        ║
 * ║    Design EFL range: 16.46–48.50 mm (marketing: 16–50 mm).       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Estimated via combined     ║
 * ║    marginal + chief ray paraxial trace at 60% off-axis field      ║
 * ║    fraction across all three zoom positions, with sd/|R| ≤ 0.88   ║
 * ║    constraint (spherical) and slope-based check (aspherical).     ║
 * ║    Front group constrained by 46 mm filter thread geometry.       ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS:                                                    ║
 * ║    Patent publishes infinity-focus zoom spacings only, but states ║
 * ║    that G3 moves image-ward for near focus. Close-focus D14/D16   ║
 * ║    values are paraxial conjugate solves at the tabulated zoom     ║
 * ║    stations using production MFDs: 0.25 m @ wide, 0.23 m @ 35 mm, ║
 * ║    0.30 m @ tele. The 0.20 m @ 24 mm minimum lies between patent  ║
 * ║    zoom stations; closeFocusM remains scalar for the current UI.  ║
 * ║                                                                    ║
 * ║  CONIC CONVENTION:                                                 ║
 * ║    Patent uses κ where κ = 1 + K (standard). Surface 3A has κ=0  ║
 * ║    → K = −1 (paraboloid). All others have κ=1 → K=0.             ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-z-dx-16-50-f3563-vr",
  maker: "Nikon",
  name: "NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
  subtitle: "WO 2020/012638 A1 EXAMPLE 8 — NIKON / KOMATSUBARA, UMEDA",
  specs: ["9 ELEMENTS / 7 GROUPS", "f = 16.46–48.50 mm", "F/3.56–6.36", "2ω ≈ 84.7–31.8°", "5 ASPHERICAL SURFACES"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: [16, 50],
  focalLengthDesign: [16.46, 48.5],
  apertureMarketing: 3.5,
  apertureDesign: 3.56,
  lensMounts: ["nikon-z"],
  imageFormat: "aps-c",
  patentNumber: "WO 2020/012638 A1",
  patentAuthors: ["Yoko Komatsubara", "Takeshi Umeda"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2020,
  elementCount: 9,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11b",
      label: "Element 1 (glass body)",
      type: "Neg. Meniscus (hybrid substrate)",
      nd: 1.83481,
      vd: 42.73,
      fl: -15.6,
      glass: "S-LAH55 (OHARA, 835427)",
      apd: false,
      role: "Wide-angle diverger glass substrate; hybrid composite with resin asphere on rear",
      cemented: "H1",
    },
    {
      id: 2,
      name: "L11r",
      label: "Element 1r (resin layer)",
      type: "Thin asph. resin layer (1× Asph)",
      nd: 1.56093,
      vd: 36.64,
      fl: -15.6,
      glass: "UV-curable optical resin",
      apd: false,
      role: "Aspherical correction layer bonded to L11b rear; paraboloidal base (K = −1) flattens field at wide end",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.88,
      fl: 46.8,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      role: "Ultra-high-index positive meniscus in G1; minimizes Petzval contribution while partially compensating L11 negative power",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 3",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.83441,
      vd: 37.28,
      fl: -32.8,
      glass: "834373 - dense lanthanum flint (M-NBFD10 code match; patent nd=1.83441, vd=37.28)",
      apd: false,
      role: "Flint partner in G2a achromatic doublet; aspherical front surface corrects zonal spherical aberration",
      cemented: "Ja",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.34,
      fl: 14.4,
      glass: "J-LASKH2 (Hikari, 755523)",
      apd: false,
      role: "Crown partner in G2a achromatic doublet; moderate chromatic contrast (Δνd ≈ 15) for secondary axial color correction near stop",
      cemented: "Ja",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.33,
      fl: -28.1,
      glass: "S-LAH98 (OHARA)",
      apd: false,
      role: "Ultra-high-index flint in G2b VR doublet; strong chromatic contrast with ED partner L24 (Δνd ≈ 49)",
      cemented: "Jb",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 6 (ED)",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 13.5,
      glass: "S-FPL51 / FCD1 class (ED fluorophosphate, νd = 81.6)",
      apd: "inferred",
      apdNote: "Anomalous positive ΔPgF from S-FPL51/FCD1 fluorophosphate; reduces secondary spectrum in G2b achromat",
      role: "Sole ED element; strongest positive element in system. Forms VR doublet with L23 for axial chromatic correction near stop",
      cemented: "Jb",
    },
    {
      id: 8,
      name: "L25",
      label: "Element 7",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.79526,
      vd: 45.25,
      fl: -42.1,
      glass: "Q-LASFPH3S (Hikari, 795453)",
      apd: false,
      role: "G2c: compensates decentering coma from G2b VR operation (¶0009); aspherical front surface controls coma in exit beam",
    },
    {
      id: 9,
      name: "L31",
      label: "Element 8",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.80139,
      vd: 45.46,
      fl: -24.1,
      glass: "801455 - dense lanthanum flint (M-TAF31 code match; patent nd=1.80139, vd=45.46)",
      apd: false,
      role: "Sole element of G3 focus group; dual aspherical surfaces maintain field curvature correction across focus range",
    },
    {
      id: 10,
      name: "L41",
      label: "Element 9",
      type: "Pos. Meniscus (concave to object)",
      nd: 1.95375,
      vd: 32.33,
      fl: 37.7,
      glass: "S-LAH98 (OHARA)",
      apd: false,
      role: "Fixed field-flattening rear group G4; ultra-high index minimizes Petzval contribution per unit of positive power",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Negative front group (f = −26.32 mm) ──
    // L11 hybrid composite: glass body + resin asphere
    { label: "1", R: 164.2409, d: 1.2, nd: 1.83481, elemId: 1, sd: 10.0 }, // L11b front
    { label: "2", R: 13.2012, d: 0.12, nd: 1.56093, elemId: 2, sd: 9.8 }, // L11b/r junction → resin
    { label: "3A", R: 11.5762, d: 4.97, nd: 1.0, elemId: 0, sd: 9.5 }, // L11r rear (asph, K=−1) → air
    // L12
    { label: "4", R: 19.9548, d: 2.43, nd: 1.92286, elemId: 3, sd: 10.0 }, // L12 front
    { label: "5", R: 34.9021, d: 23.92, nd: 1.0, elemId: 0, sd: 9.5 }, // L12 rear → air (d5 = zoom var)

    // ── G2: Positive variator/compensator (f = +18.31 mm) ──
    // G2a: cemented doublet L21 + L22 (f = +27.61 mm)
    { label: "6A", R: 14.5813, d: 0.9, nd: 1.83441, elemId: 4, sd: 6.3 }, // L21 front (asph) → glass
    { label: "7", R: 9.25, d: 3.36, nd: 1.755, elemId: 5, sd: 6.0 }, // L21/L22 junction → L22 glass
    { label: "8", R: 52.3705, d: 1.6, nd: 1.0, elemId: 0, sd: 5.2 }, // L22 rear → air

    // Aperture stop
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 5.0 },

    // G2b: cemented doublet L23 + L24 (f = +26.84 mm) — VR group
    { label: "10", R: 11.1735, d: 0.7, nd: 1.95375, elemId: 6, sd: 5.1 }, // L23 front → glass
    { label: "11", R: 7.6414, d: 4.0, nd: 1.497, elemId: 7, sd: 5.0 }, // L23/L24 junction → L24 glass (ED)
    { label: "12", R: -45.2316, d: 1.4, nd: 1.0, elemId: 0, sd: 5.0 }, // L24 rear → air

    // G2c: single negative meniscus L25 (f = −42.13 mm)
    { label: "13A", R: 19.2894, d: 0.9, nd: 1.79526, elemId: 8, sd: 5.0 }, // L25 front (asph) → glass
    { label: "14", R: 11.989, d: 5.34, nd: 1.0, elemId: 0, sd: 4.9 }, // L25 rear → air (d14 = zoom var)

    // ── G3: Negative focus group (f = −24.13 mm) ──
    { label: "15A", R: -29.6878, d: 1.0, nd: 1.80139, elemId: 9, sd: 5.5 }, // L31 front (asph) → glass
    { label: "16A", R: 56.3004, d: 3.66, nd: 1.0, elemId: 0, sd: 5.6 }, // L31 rear (asph) → air (d16 = zoom var)

    // ── G4: Positive field flattener (f = +37.73 mm) — fixed ──
    { label: "17", R: -345.3773, d: 4.2, nd: 1.95375, elemId: 10, sd: 8.0 }, // L41 front → glass
    { label: "18", R: -32.7802, d: 10.05, nd: 1.0, elemId: 0, sd: 8.6 }, // L41 rear → BFD to image
  ],

  /* ── Aspherical coefficients ──
   *  Patent conic convention: κ = 1 + K (standard).
   *  Surface 3A: κ = 0 → K = −1 (paraboloid).
   *  Surfaces 6A, 13A, 15A, 16A: κ = 1 → K = 0 (spherical base).
   *  Patent polynomial terms extend to C10 only (10th order).
   */
  asph: {
    "3A": {
      K: -1,
      A4: 3.80785e-5,
      A6: 3.24996e-8,
      A8: -7.75872e-11,
      A10: -1.57872e-12,
      A12: 0,
      A14: 0,
    },
    "6A": {
      K: 0,
      A4: -1.40463e-5,
      A6: -4.76006e-8,
      A8: 2.18077e-10,
      A10: -1.70904e-11,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: -8.28392e-5,
      A6: -8.50079e-7,
      A8: 1.22452e-8,
      A10: -3.42932e-11,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: -1.28382e-4,
      A6: 4.23515e-6,
      A8: -9.86336e-8,
      A10: 1.12907e-9,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: -8.33049e-5,
      A6: 3.48272e-6,
      A8: -6.94588e-8,
      A10: 6.14665e-10,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom + inferred focus) ──
   *  Patent Table 8 provides infinity-focus zoom spacings only. Paragraph
   *  0165 states that G3 (L31) moves image-ward for near focus, so D14
   *  increases and D16 decreases while D14 + D16 stays constant per zoom.
   *
   *  Close-focus G3 travel (D14 close − D14 inf):
   *    Wide: 1.174 mm  (0.25 m production MFD)
   *    Mid:  4.104 mm  (0.23 m production MFD at 35 mm)
   *    Tele: 4.428 mm  (0.30 m production MFD)
   *
   *  Wide-end solve cross-check: required image-plane extension / G3 travel
   *  = 1.251, matching patent condition (5), (−fγw) = 1.250.
   */
  var: {
    "5": [
      [23.92, 23.92],
      [6.4, 6.4],
      [2.0, 2.0],
    ],
    "14": [
      [5.34, 6.514],
      [10.17, 14.274],
      [13.02, 17.448],
    ],
    "16A": [
      [3.66, 2.486],
      [11.54, 7.436],
      [16.92, 12.492],
    ],
  },

  varLabels: [
    ["5", "D5 (G1↔G2)"],
    ["14", "D14 (G2↔G3)"],
    ["16A", "D16 (G3↔G4)"],
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [16.46, 35.04, 48.5],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (+)", fromSurface: "6A", toSurface: "14" },
    { text: "G3 (−)", fromSurface: "15A", toSurface: "16A" },
    { text: "G4 (+)", fromSurface: "17", toSurface: "18" },
  ],

  doublets: [
    { text: "H1", fromSurface: "1", toSurface: "3A" },
    { text: "Ja", fromSurface: "6A", toSurface: "8" },
    { text: "Jb", fromSurface: "10", toSurface: "12" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.2,
  focusDescription:
    "Inner focus via G3 (L31, single biconcave dual-asphere). G3 moves image-ward for close focus. " +
    "Close-focus gaps are inferred from paraxial conjugate solves because the patent publishes infinity zoom spacings only. " +
    "Production MFD: 0.25 m @ 16 mm, 0.20 m @ 24 mm, 0.23 m @ 35 mm, 0.30 m @ 50 mm. STM drive.",

  /* ── Aperture configuration ── */
  nominalFno: [3.5, 5.3, 6.3],
  fstopSeries: [3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],
  apertureBlades: 7,

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
