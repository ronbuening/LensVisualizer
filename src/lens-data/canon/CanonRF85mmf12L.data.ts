import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON RF 85mm f/1.2L USM                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0012073 A1, First Numerical Embodiment      ║
 * ║  (Maetaki / Canon), stored at native patent scale                 ║
 * ║  (f = 86.53 mm, Fno 1.24, ω = 14.04°, Y = 21.64 mm).              ║
 * ║  Three units L1 (+) / L2 (+) / L3 (+); 14 elements / 9 groups     ║
 * ║  counting the 1.00 mm Lp2 layer (G9), 1 aspherical surface (8).   ║
 * ║  Canon lists the production lens as 13 elements / 9 groups; no    ║
 * ║  example of this patent matches that count and a single asphere,  ║
 * ║  so Example 1 is the closest disclosed design, not a copy.        ║
 * ║                                                                    ║
 * ║  FOCUS: unit L2 (surfaces 4–17, incl. stop) moves toward the      ║
 * ║  object; L1 and L3 stay fixed (FIG. 1 focus arrow, ¶0030/¶0071).  ║
 * ║  The patent tabulates only the infinity gaps d3 = 14.36 and       ║
 * ║  d17 = 1.64. The close state (d3 1.61 / d17 14.39, 12.75 mm       ║
 * ║  travel) is CALCULATED: paraxial solve for Canon's 0.85 m MFD,    ║
 * ║  850.6 mm object-to-image, β ≈ −0.126 (Canon 0.12×).              ║
 * ║  No cover glass or filter is listed; the last gap is BF 14.91.    ║
 * ║                                                                    ║
 * ║  APERTURE: nominalFno is the patent Fno 1.24; production f/1.2 is ║
 * ║  not reachable with this prescription (every published effective ║
 * ║  diameter is the f/1.24 axial pencil).                            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent "EFFECTIVE RAY DIAMETER" ÷ 2 on every surface except:   ║
 * ║    S11–S14 raised to 16.2 / 16.3 / 16.3 / 16.0 mm (patent 15.84 / ║
 * ║    15.60 / 15.44 / 14.93) because the f/1.24 axial pencil from    ║
 * ║    the 0.85 m object reaches 16.11 / 16.21 / 16.23 / 15.90 mm     ║
 * ║    there; S20 kept at 17.9 mm (patent 18.20) so the S20→S21 air   ║
 * ║    gap keeps the validator's 10 % drawn clearance. The patent     ║
 * ║    diameters equal the exact f/1.24 infinity pencil within        ║
 * ║    0.03 mm (engine iris 16.54 mm = patent stop 33.10 ÷ 2).        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-85f12l",
  maker: "Canon",
  name: "CANON RF 85mm f/1.2 L USM",
  subtitle: "US 2020/0012073 A1 EXAMPLE 1 — CANON / MAETAKI",
  specs: [
    "14 ELEMENTS / 9 GROUPS",
    "f ≈ 86.5 mm",
    "F/1.24",
    "2ω ≈ 28.1°",
    "1 ASPHERICAL SURFACE",
    "Lp1 + Lp2 ANOMALOUS-DISPERSION PAIR",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 85,
  focalLengthDesign: 86.53,
  apertureMarketing: 1.2,
  apertureDesign: 1.24,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2020/0012073 A1",
  patentAuthors: ["Satoshi Maetaki"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2020,
  elementCount: 14, // patent Example 1 incl. the 1.00 mm Lp2 layer; Canon lists production as 13 / 9
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 80.5,
      glass: "PCD4 (HOYA catalog equivalent; patent vendor unspecified)",
      apd: false,
      role: "Front crown — collector element",
      cemented: "L1–L2",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.7,
      fl: -88.7,
      glass: "S-NBH8 (OHARA catalog equivalent; patent vendor unspecified)",
      apd: false,
      role: "Front flint — primary color correction with L1",
      cemented: "L1–L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3 (Lp1)",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.9,
      fl: 134.4,
      glass: "PBH21 (OHARA historical catalog equivalent; patent vendor unspecified)",
      apd: "patent",
      dPgF: 0.008,
      apdNote:
        "Patent Lp1 (G3): Table 1 ΔθgF1 = 0.008 — ultra-high-index dense flint placed ahead of the stop for axial secondary spectrum",
      role: "First APD positive lens — on-axis chromatic correction",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4 (UD)",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 97.8,
      glass: "S-FPL51 (OHARA catalog equivalent; patent vendor unspecified)",
      apd: "inferred",
      apdNote: "497815 fluorophosphate crown (UD class); the patent does not call it UD — inferred from the glass",
      role: "Ultra-low Dispersion positive element — primary chromatic correction",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.85478,
      vd: 24.8,
      fl: -52.5,
      glass: "S-NBH56 (OHARA catalog equivalent; patent vendor unspecified)",
      apd: false,
      role: "Aspherical element — spherical aberration correction at f/1.2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.85478,
      vd: 24.8,
      fl: -27.9,
      glass: "S-NBH56 (OHARA catalog equivalent; patent vendor unspecified)",
      apd: false,
      role: "Post-stop doublet flint — axial color and SA correction",
      cemented: "L6–L7",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 26.6,
      glass: "S-LAH58 (OHARA catalog equivalent; patent vendor unspecified)",
      apd: false,
      role: "Post-stop doublet crown — achromatic partner to L6",
      cemented: "L6–L7",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.2,
      fl: -48.6,
      glass: "S-TIL2 (OHARA catalog equivalent; patent vendor unspecified)",
      apd: false,
      role: "Triplet object-side negative element carrying the Lp2 layer",
      cemented: "L8–L10",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9 (Lp2 / BR)",
      type: "Positive Meniscus",
      nd: 1.60401,
      vd: 20.8,
      fl: 375.2,
      glass: "Unmatched (604208 — Canon BR-optics organic material, inferred; patent gives nd, νd and ΔθgF only)",
      apd: "patent",
      dPgF: 0.092,
      apdNote:
        "Patent Lp2 (G9): Table 1 ΔθgF2 = 0.092; identified with Canon BR optics by inference from production marketing",
      role: "Second APD positive lens — lateral chromatic aberration of magnification cancellation",
      cemented: "L8–L10",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.95375,
      vd: 32.3,
      fl: 41.7,
      glass: "S-LAH98 (OHARA catalog equivalent; patent vendor unspecified)",
      apd: false,
      role: "Triplet image-side positive element — primary positive power",
      cemented: "L8–L10",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.95375,
      vd: 32.3,
      fl: 41.4,
      glass: "S-LAH98 (OHARA catalog equivalent; patent vendor unspecified)",
      apd: false,
      role: "Rear doublet crown — exit beam convergence",
      cemented: "L11–L12",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.3,
      fl: -51.6,
      glass: "S-TIM2 (OHARA catalog equivalent; patent vendor unspecified)",
      apd: false,
      role: "Rear doublet flint — chromatic balancing",
      cemented: "L11–L12",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.1,
      fl: -61.9,
      glass: "S-TIM28 (OHARA catalog equivalent; patent vendor unspecified)",
      apd: false,
      role: "Field flattener — astigmatism and field curvature control",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.4,
      fl: 86.3,
      glass: "TAFD37A (HOYA catalog equivalent; patent vendor unspecified)",
      apd: false,
      role: "Exit element — ray angle telecentric correction for sensor compatibility",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Unit L1 (fixed) — cemented doublet ──
    { label: "1", R: 71.655, d: 15.57, nd: 1.618, elemId: 1, sd: 35.1 }, // L1 front
    { label: "2", R: -149.456, d: 3.0, nd: 1.72047, elemId: 2, sd: 35.1 }, // L1→L2 junction
    { label: "3", R: 112.469, d: 14.36, nd: 1.0, elemId: 0, sd: 32.32 }, // L2 rear → air (VARIABLE: L1→L2 gap)

    // ── Unit L2 (focus group) ──
    // L3 (patent Lp1 = G3 — APD positive meniscus)
    { label: "4", R: 67.332, d: 5.75, nd: 1.92286, elemId: 3, sd: 30.76 }, // L3 front
    { label: "5", R: 141.236, d: 0.3, nd: 1.0, elemId: 0, sd: 30.3 }, // L3 rear → air

    // L4 (497815 fluorophosphate crown)
    { label: "6", R: 39.868, d: 11.43, nd: 1.497, elemId: 4, sd: 27.5 }, // L4 front
    { label: "7", R: 200.86, d: 6.51, nd: 1.0, elemId: 0, sd: 26.36 }, // L4 rear → air

    // L5 (aspherical negative meniscus; sd = patent 41.24 / 35.16 ÷ 2)
    { label: "8A", R: 75.484, d: 2.5, nd: 1.85478, elemId: 5, sd: 20.62 }, // L5 front (aspherical)
    { label: "9", R: 27.701, d: 10.68, nd: 1.0, elemId: 0, sd: 17.58 }, // L5 rear → air

    // Aperture stop (patent surface 10; sd = patent 33.10 ÷ 2, the f/1.24 iris)
    { label: "STO", R: 1e15, d: 4.51, nd: 1.0, elemId: 0, sd: 16.55 },

    // Cemented doublet L6 + L7 (S11–S14 raised above patent ÷ 2 for the close-focus f/1.24 pencil)
    { label: "11", R: -85.831, d: 1.5, nd: 1.85478, elemId: 6, sd: 16.2 }, // L6 front
    { label: "12", R: 33.313, d: 9.5, nd: 1.883, elemId: 7, sd: 16.3 }, // L6→L7 junction
    { label: "13", R: -68.563, d: 2.28, nd: 1.0, elemId: 0, sd: 16.3 }, // L7 rear → air

    // Cemented triplet L8 + L9 (Lp2 layer) + L10
    { label: "14", R: -48.43, d: 1.7, nd: 1.54072, elemId: 8, sd: 16.0 }, // L8 front
    { label: "15", R: 58.169, d: 1.0, nd: 1.60401, elemId: 9, sd: 17.0 }, // L8→L9 junction (Lp2 layer)
    { label: "16", R: 77.751, d: 6.95, nd: 1.95375, elemId: 10, sd: 17.11 }, // L9→L10 junction
    { label: "17", R: -77.751, d: 1.64, nd: 1.0, elemId: 0, sd: 17.7 }, // L10 rear → air (VARIABLE: L2→L3 gap)

    // ── Unit L3 (fixed) ──
    // Cemented doublet L11 + L12
    { label: "18", R: 204.839, d: 7.0, nd: 1.95375, elemId: 11, sd: 18.43 }, // L11 front
    { label: "19", R: -48.06, d: 2.2, nd: 1.62004, elemId: 12, sd: 18.52 }, // L11→L12 junction
    { label: "20", R: 97.164, d: 5.4, nd: 1.0, elemId: 0, sd: 17.9 }, // L12 rear → air (patent 18.20; kept 17.9 for S20→S21 drawn clearance)

    // L13 (biconcave singlet)
    { label: "21", R: -52.101, d: 1.65, nd: 1.68893, elemId: 13, sd: 18.22 }, // L13 front
    { label: "22", R: 237.864, d: 0.15, nd: 1.0, elemId: 0, sd: 19.25 }, // L13 rear → air

    // L14 (biconvex singlet)
    { label: "23", R: 97.826, d: 4.0, nd: 1.90043, elemId: 14, sd: 19.78 }, // L14 front
    { label: "24", R: -370.202, d: 14.91, nd: 1.0, elemId: 0, sd: 19.9 }, // L14 rear → image (patent d24 = BF 14.91; no cover glass listed)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "8A": {
      K: 0,
      A4: -2.2875e-6,
      A6: -2.1286e-10,
      A8: 2.6709e-13,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (internal focus) ──
   *  Unit L2 translates bodily toward the object; L1 and L3 are fixed.
   *  d3 (L1→L2) decreases, d17 (L2→L3) increases; d3 + d17 = 16.00 mm.
   *  Infinity values are the patent's only tabulated state. The close
   *  values are CALCULATED (paraxial solve with the image plane fixed):
   *  object-to-image 850.6 mm, β ≈ −0.126, for Canon's 0.85 m MFD.
   */
  var: {
    "3": [14.36, 1.61], // d3: [patent infinity, calculated 0.85 m]
    "17": [1.64, 14.39], // d17: [patent infinity, calculated 0.85 m]
  },
  varLabels: [
    ["3", "d3"],
    ["17", "d17"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1 (FIXED)", fromSurface: "1", toSurface: "3" },
    { text: "L2 (FOCUS)", fromSurface: "4", toSurface: "17" },
    { text: "L3 (FIXED)", fromSurface: "18", toSurface: "24" },
  ],
  /* Cemented-group tags use element names; the patent's DL1, DL2 and D2 are
   * axial distances (FIG. 1), not lens groups. */
  doublets: [
    { text: "L1–L2", fromSurface: "1", toSurface: "3" },
    { text: "L6–L7", fromSurface: "11", toSurface: "13" },
    { text: "L8–L10", fromSurface: "14", toSurface: "17" },
    { text: "L11–L12", fromSurface: "18", toSurface: "20" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.85,
  focusDescription:
    "Internal focus: unit L2 (elements 3–10 and the stop) moves toward the object; units L1 and L3 fixed. Close-focus gaps calculated for 0.85 m.",

  /* ── Aperture configuration ── */
  nominalFno: 1.24, // patent Fno; production f/1.2 is not reachable with Example 1's effective diameters
  fstopSeries: [1.24, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16, // production minimum aperture f/16

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
