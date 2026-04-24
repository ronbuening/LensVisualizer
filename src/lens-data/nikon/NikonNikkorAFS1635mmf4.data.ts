import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 16-35mm f/4G ED VR                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2010/0238560 A1 Example 1 (Fujimoto / Nikon).    ║
 * ║  Negative-positive-negative-positive four-group zoom with VR.     ║
 * ║  17 elements / 12 groups, 4 aspherical surfaces on 3 elements.    ║
 * ║  Focus: internal focusing via CL21 (G2) axial translation.        ║
 * ║  VR: G3 (L31+L32, L33, L34) shift perpendicular to optical axis. ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: d9 (G1-G2), d14 (G2-G3), d22 (G3-G4), BFD.  ║
 * ║  All gaps zoom-only — patent provides no close-focus data.        ║
 * ║                                                                    ║
 * ║  NOTE ON SURFACE 30 RADIUS:                                        ║
 * ║    Patent lists R30 = -724.48 mm — verified as a decimal-point    ║
 * ║    error.  Correct value is R30 = -72.448 mm.  With -724.48, the  ║
 * ║    computed G4 focal length is +77.3 (vs. patent-stated +50.02)   ║
 * ║    and wide-end EFL is 26.9 (vs. 16.48).  With -72.448, all      ║
 * ║    group and system EFLs match to four significant figures.       ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL CONVENTION:                                    ║
 * ║    Patent uses κ (kappa) where K = κ − 1.                        ║
 * ║    κ = 1 → K = 0 (sphere); κ = 0.017 → K = −0.983, etc.        ║
 * ║    Example 1 has odd-order coefficients all zero.                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent provides no SDs.  Estimated via paraxial marginal +     ║
 * ║    chief ray trace across all zoom positions with ~8% clearance.  ║
 * ║    Front elements constrained by 77 mm filter thread (~37 mm SD). ║
 * ║    L11 rear (R = 14.627 mm, K = −0.983) now uses slope-based     ║
 * ║    validation — the near-paraboloidal surface has a gentle actual ║
 * ║    rim slope, so SD is no longer artificially constrained to      ║
 * ║    sd/|R| < 0.90.  Front group SDs moderately increased to       ║
 * ║    better match production lens proportions.                      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-afs-16-35f4-vr",
  visible: true,
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 16-35mm f/4G ED VR",
  subtitle: "US 2010/0238560 A1 EXAMPLE 1 — NIKON / FUJIMOTO",
  specs: [
    "17 ELEMENTS / 12 GROUPS",
    "f = 16.48–33.94 mm",
    "F/4.1 CONSTANT",
    "2ω = 108°–63°",
    "4 ASPHERICAL SURFACES / 3 ELEMENTS",
    "2 ED GLASS ELEMENTS (S-FPL51)",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [16, 35] as [number, number],
  focalLengthDesign: [16.48, 33.94] as [number, number],
  apertureMarketing: 4,
  apertureDesign: 4.1,
  patentYear: 2010,
  elementCount: 17,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    // ── G1: Front negative group (f = −21.30 mm) ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.7669,
      vd: 46.85,
      fl: -25.3,
      glass: "LAM family (cf. HOYA E-FD5)",
      apd: false,
      role: "Front negative meniscus; both surfaces aspherical (PGM). Controls distortion and oblique SA at extreme field angles.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.76,
      fl: -92.4,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Supplementary negative power in G1.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.76,
      fl: -30.9,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Strong negative power; glass body of hybrid compound aspherical element.",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L13r",
      label: "Element 3r",
      type: "Asph. Resin Layer (1× Asph)",
      nd: 1.55389,
      vd: 38.09,
      fl: 209.9,
      glass: "UV-cure resin",
      apd: false,
      role: "Thin resin layer bonded to L13 rear; aspherical outer surface corrects higher-order field curvature and coma.",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L14",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.69895,
      vd: 30.13,
      fl: 37.7,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "Positive element in G1; high-dispersion flint provides lateral color correction paired with L12/L13.",
    },
    // ── G2: Positive focusing group (f = +34.14 mm) ──
    {
      id: 6,
      name: "L21",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -50.3,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Chromatic corrector in CL21 (focusing doublet).",
      cemented: "CL21",
    },
    {
      id: 7,
      name: "L22",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.01,
      fl: 28.0,
      glass: "S-TIM5 (OHARA)",
      apd: false,
      role: "Primary positive power in CL21; focusing element translates axially for IF.",
      cemented: "CL21",
    },
    {
      id: 8,
      name: "L23",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.93,
      fl: 63.5,
      glass: "S-NSL3 (OHARA)",
      apd: false,
      role: "Fixed positive singlet; supplementary converging power in G2.",
    },
    // ── G3: VR group (f = −46.90 mm) ──
    {
      id: 9,
      name: "L31",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.70154,
      vd: 41.17,
      fl: 58.5,
      glass: "S-LAM54 (OHARA)",
      apd: false,
      role: "Chromatic corrector in CL31 (G3a); concave surface faces object.",
      cemented: "CL31",
    },
    {
      id: 10,
      name: "L32",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.76,
      fl: -18.8,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Primary negative power in G3a; cemented surface concave toward stop for chromatic field curvature correction.",
      cemented: "CL31",
    },
    {
      id: 11,
      name: "L33",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.76,
      fl: -72.8,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "G3b: negative meniscus with concave surface facing G3a; biconvex air lens between L32 and L33 is key to wide-angle VR.",
    },
    {
      id: 12,
      name: "L34",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 40.2,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "G3c: biconvex positive; prevents G4 diameter from growing excessively.",
    },
    // ── G4: Rear positive group (f = +50.02 mm) ──
    {
      id: 13,
      name: "L41",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.51,
      fl: 36.8,
      glass: "S-FPL51 (OHARA) — ED",
      apd: "inferred",
      apdNote: "S-FPL51 fluorophosphate ED glass; dPgF ≈ +0.033 above normal line.",
      role: "ED glass in CL41 triplet; corrects secondary spectrum.",
      cemented: "CL41",
    },
    {
      id: 14,
      name: "L42",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.16,
      fl: -32.9,
      glass: "S-LAH60 (OHARA)",
      apd: false,
      role: "High-index negative element sandwiched between ED glass elements in CL41.",
      cemented: "CL41",
    },
    {
      id: 15,
      name: "L43",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.51,
      fl: 59.3,
      glass: "S-FPL51 (OHARA) — ED",
      apd: "inferred",
      apdNote: "S-FPL51 fluorophosphate ED glass; dPgF ≈ +0.033 above normal line.",
      role: "Second ED element in CL41; secondary spectrum correction.",
      cemented: "CL41",
    },
    {
      id: 16,
      name: "L44",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.76,
      fl: -49.2,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Front negative meniscus of CL42 triplet.",
      cemented: "CL42",
    },
    {
      id: 17,
      name: "L45",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.41,
      fl: 29.8,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Central positive element in CL42 field-flattening triplet.",
      cemented: "CL42",
    },
    {
      id: 18,
      name: "L46",
      label: "Element 17",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.8061,
      vd: 40.77,
      fl: -113.4,
      glass: "S-LAH53 family (OHARA)",
      apd: false,
      role: "Rear aspherical surface (oblate ellipsoid) for final field-flattening correction, especially at wide-angle end.",
      cemented: "CL42",
    },
  ],

  /* ── Surface prescription ──
   *  SDs estimated via paraxial marginal+chief ray trace across all zoom positions.
   *  Several SDs reduced from ray-trace values to satisfy renderer constraints:
   *  sd/|R| < 0.90, element SD ratio ≤ 1.25, edge thickness > 0, cross-gap clearance.
   *  L11 rear (R = 14.627 mm, K = −0.983) is the most restrictive — the near-parabolic
   *  aspherical surface physically supports sd ≈ 37 mm (77 mm filter), but the renderer's
   *  spherical sd/|R| limit requires sd ≤ 13.2 mm.  G1 elements appear undersized relative
   *  to the actual production lens as a result.
   */
  surfaces: [
    // ── G1: Front negative group ──
    { label: "1A", R: 64.361, d: 3.0, nd: 1.7669, elemId: 1, sd: 20.0 },
    { label: "2A", R: 14.627, d: 11.25, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "3", R: -118.914, d: 1.55, nd: 1.883, elemId: 2, sd: 20.0 },
    { label: "4", R: 261.338, d: 2.85, nd: 1.0, elemId: 0, sd: 15.4 },
    { label: "5", R: -57.268, d: 1.5, nd: 1.883, elemId: 3, sd: 17.0 },
    { label: "6", R: 52.742, d: 0.4, nd: 1.55389, elemId: 4, sd: 17.0 },
    { label: "7A", R: 96.287, d: 1.5, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "8", R: 42.407, d: 6.4, nd: 1.69895, elemId: 5, sd: 18.0 },
    { label: "9", R: -65.202, d: 28.97, nd: 1.0, elemId: 0, sd: 17.5 },

    // ── G2: Positive focusing group ──
    { label: "10", R: 36.176, d: 1.05, nd: 1.84666, elemId: 6, sd: 15.0 },
    { label: "11", R: 19.297, d: 4.95, nd: 1.60342, elemId: 7, sd: 12.0 },
    { label: "12", R: -121.274, d: 4.7, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "13", R: 65.31, d: 3.1, nd: 1.51823, elemId: 8, sd: 14.0 },
    { label: "14", R: -65.31, d: 3.26, nd: 1.0, elemId: 0, sd: 14.0 },

    // ── G3: VR group ──
    { label: "STO", R: 1e15, d: 3.26, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "16", R: -137.621, d: 2.1, nd: 1.70154, elemId: 9, sd: 10.5 },
    { label: "17", R: -31.799, d: 1.0, nd: 1.883, elemId: 10, sd: 10.5 },
    { label: "18", R: 35.395, d: 2.9, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "19", R: -24.463, d: 0.8, nd: 1.883, elemId: 11, sd: 8.5 },
    { label: "20", R: -40.108, d: 0.15, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "21", R: 75.282, d: 2.7, nd: 1.84666, elemId: 12, sd: 13.0 },
    { label: "22", R: -61.234, d: 12.46, nd: 1.0, elemId: 0, sd: 14.0 },

    // ── G4: Rear positive group ──
    { label: "23", R: 29.863, d: 8.0, nd: 1.49782, elemId: 13, sd: 16.0 },
    { label: "24", R: -43.301, d: 1.1, nd: 1.834, elemId: 14, sd: 16.0 },
    { label: "25", R: 75.908, d: 5.95, nd: 1.49782, elemId: 15, sd: 18.0 },
    { label: "26", R: -47.092, d: 0.15, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "27", R: 39.817, d: 1.1, nd: 1.883, elemId: 16, sd: 16.5 },
    { label: "28", R: 20.5, d: 12.15, nd: 1.48749, elemId: 17, sd: 16.0 },
    { label: "29", R: -40.025, d: 1.6, nd: 1.8061, elemId: 18, sd: 16.0 },
    { label: "30A", R: -72.448, d: 38.6, nd: 1.0, elemId: 0, sd: 19.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "1A": {
      K: 0.0,
      A4: -8.262e-6,
      A6: 1.472e-8,
      A8: -1.057e-11,
      A10: 7.575e-15,
      A12: -2.361e-18,
      A14: 0,
    },
    "2A": {
      K: -0.983,
      A4: -6.389e-6,
      A6: -3.01e-8,
      A8: 8.699e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "7A": {
      K: 7.352,
      A4: 1.862e-5,
      A6: 1.672e-8,
      A8: -3.678e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "30A": {
      K: 11.401,
      A4: 1.208e-5,
      A6: 1.539e-8,
      A8: -2.918e-11,
      A10: 1.594e-13,
      A12: 4.038e-18,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom only — no close-focus data available) ── */
  zoomPositions: [16.48, 24.0, 33.94],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  var: {
    "9": [
      [28.97, 28.97],
      [11.94, 11.94],
      [2.09, 2.09],
    ],
    "14": [
      [3.26, 3.26],
      [6.0, 6.0],
      [8.5, 8.5],
    ],
    "22": [
      [12.46, 12.46],
      [5.96, 5.96],
      [1.21, 1.21],
    ],
    "30A": [
      [38.6, 38.6],
      [50.93, 50.93],
      [67.55, 67.55],
    ],
  },
  varLabels: [
    ["9", "D9"],
    ["14", "D14"],
    ["22", "D22"],
    ["30A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1A", toSurface: "9" },
    { text: "G2 (+) Focus", fromSurface: "10", toSurface: "14" },
    { text: "G3 (−) VR", fromSurface: "STO", toSurface: "22" },
    { text: "G4 (+)", fromSurface: "23", toSurface: "30A" },
  ],

  doublets: [
    { text: "H1", fromSurface: "5", toSurface: "7A" },
    { text: "CL21", fromSurface: "10", toSurface: "12" },
    { text: "CL31", fromSurface: "16", toSurface: "18" },
    { text: "CL41", fromSurface: "23", toSurface: "26" },
    { text: "CL42", fromSurface: "27", toSurface: "30A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.29,
  focusDescription:
    "Internal focusing via CL21 (L21+L22) axial translation within G2. No close-focus gap data in patent; zoom-only variable gaps.",

  /* ── Aperture configuration ── */
  nominalFno: 4.1,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.42,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
