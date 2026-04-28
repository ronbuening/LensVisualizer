import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON PC-E NIKKOR 24mm f/3.5D ED            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2008-151949A Example 2 (Nikon / Takayuki Sensui).║
 * ║  Retrofocus wide-angle for F-mount perspective-control (tilt-shift)║
 * ║  with oversized image circle (2ω = 101°) for ±11.5 mm shift.     ║
 * ║  13 elements / 10 groups, 3 aspherical surfaces.                  ║
 * ║  Focus: rear-group unit focus (G2 + stop translate as unit).      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not provide semi-diameters.  Started from a        ║
 * ║    combined marginal/chief-ray envelope, then visually tuned to   ║
 * ║    match Nikon's construction diagram: dominant H1 front          ║
 * ║    meniscus, stepped-down L12/H2/L14 front subgroup, fuller Gr    ║
 * ║    doublets, and compact G2.                                      ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent tabulates to β = −1/10 only.  Close-focus gaps at       ║
 * ║    0.21 m computed via paraxial conjugate solve (brentq),          ║
 * ║    yielding |m| ≈ 0.35 vs. Nikon's marketed 0.37×.               ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-pc-e-nikkor-24-f35d-ed",
  maker: "Nikon",
  name: "NIKON PC-E NIKKOR 24mm f/3.5D ED",
  subtitle: "JP 2008-151949A EXAMPLE 2 — NIKON / SENSUI",
  specs: [
    "13 ELEMENTS / 10 GROUPS",
    "f ≈ 24.6 mm",
    "F/3.5",
    "2ω ≈ 101° (design image circle for ±11.5 mm shift)",
    "3 ASPHERICAL SURFACES (2 composite + 1 polished)",
    "3 ED ELEMENTS (S-FPL51)",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 24,
  focalLengthDesign: 24.642,
  apertureMarketing: 3.5,
  apertureDesign: 3.6,
  patentYear: 2008,
  elementCount: 13,
  groupCount: 10,
  perspectiveControl: {
    /* Nikon USA's launch release lists shift +/-11.5 mm and tilt +/-8.5 deg:
     * https://www.nikonusa.com/press-room/nikons-new-wide-angle-pc-e-ni */
    shiftRangeMm: [-11.5, 11.5],
    tiltRangeDeg: [-8.5, 8.5],
    shiftStepMm: 0.1,
    tiltStepDeg: 0.1,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1 (glass body)",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.58,
      fl: -55.5,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Front aplanatic meniscus glass body; convex to object. Part of composite aspherical element H1 (glass + resin). Composite FL ≈ −39.9 mm.",
      cemented: "H1",
    },
    {
      id: 2,
      name: "L11r",
      label: "Element 1 (resin layer)",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.55389,
      vd: 38.09,
      fl: -140.3,
      glass: "UV-cure resin",
      apd: false,
      role: "Thin aspherical resin layer bonded to L11 rear. Surface 3A (K = −2 hyperboloid) reduces divergent power at rim for distortion control.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 34.96,
      fl: -57.3,
      glass: "S-LAH63 (OHARA)",
      apd: false,
      role: "Second aplanatic meniscus; convex to object. High-dispersion negative element contributes chromatic correction term.",
    },
    {
      id: 4,
      name: "L13",
      label: "Element 3 (glass body)",
      type: "Negative Meniscus",
      nd: 1.58313,
      vd: 59.38,
      fl: -135.0,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      role: "Third aplanatic meniscus glass body; convex to object. Part of composite aspherical element H2. Composite FL ≈ −114.7 mm.",
      cemented: "H2",
    },
    {
      id: 5,
      name: "L13r",
      label: "Element 3 (resin layer)",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.55389,
      vd: 38.09,
      fl: -758.0,
      glass: "UV-cure resin",
      apd: false,
      role: "Thin aspherical resin layer bonded to L13 rear. Surface 8A (K = −2 hyperboloid) fine-tunes off-axis divergence and lateral color.",
      cemented: "H2",
    },
    {
      id: 6,
      name: "L14",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.58144,
      vd: 40.75,
      fl: 37.8,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      role: "Front subgroup terminator; strong positive power begins beam convergence toward rear subgroup.",
    },
    {
      id: 7,
      name: "L15",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.61,
      fl: -32.8,
      glass: "S-FPL51 (OHARA) — ED",
      apd: "inferred",
      apdNote: "S-FPL51: dPgF ≈ +0.030 (positive APD, well-documented catalog value)",
      role: "First ED element. Biconcave negative with high Abbe number; corrects axial/lateral color and secondary spectrum.",
    },
    {
      id: 8,
      name: "L16",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.54814,
      vd: 45.79,
      fl: 30.4,
      glass: "S-BAL14 (OHARA)",
      apd: false,
      role: "Cemented with L17 (Ja). Strong positive contributes convergence; cemented junction corrects spherical and chromatic aberrations.",
      cemented: "Ja",
    },
    {
      id: 9,
      name: "L17",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.94,
      fl: -33.4,
      glass: "S-LAH53 (OHARA)",
      apd: false,
      role: "Cemented with L16 (Ja). Convex to image; high-index negative balances chromatic correction at junction. Near-flat rear (R ≈ −565 mm).",
      cemented: "Ja",
    },
    {
      id: 10,
      name: "L18",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.58,
      fl: -72.2,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Cemented with L19 (Jb). Convex to object; same glass as L11. Coma and field curvature correction.",
      cemented: "Jb",
    },
    {
      id: 11,
      name: "L19",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.54814,
      vd: 45.79,
      fl: 28.0,
      glass: "S-BAL14 (OHARA)",
      apd: false,
      role: "Cemented with L18 (Jb). Same glass as L16. Provides bulk of rear subgroup convergent power toward stop. Doublet f ≈ +43.5 mm.",
      cemented: "Jb",
    },
    {
      id: 12,
      name: "L21",
      label: "Element 10",
      type: "Equi-Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 36.6,
      glass: "S-FPL51 (OHARA) — ED",
      apd: "inferred",
      apdNote: "S-FPL51: dPgF ≈ +0.030",
      role: "G2 primary positive power element; symmetric biconvex (R = ±34.76) minimizes coma. Strongest G2 converger.",
    },
    {
      id: 13,
      name: "L22",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.17,
      fl: -21.4,
      glass: "S-LAH60 (OHARA)",
      apd: false,
      role: "Cemented with L23 (Jc). High-dispersion negative; Schott-type achromatic corrector. Δνd = 44.4 at junction.",
      cemented: "Jc",
    },
    {
      id: 14,
      name: "L23",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 39.7,
      glass: "S-FPL51 (OHARA) — ED",
      apd: "inferred",
      apdNote: "S-FPL51: dPgF ≈ +0.030",
      role: "Cemented with L22 (Jc). Third ED element; strong lateral color and secondary spectrum correction. Doublet f ≈ −49.7 mm.",
      cemented: "Jc",
    },
    {
      id: 15,
      name: "L24",
      label: "Element 13",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.51633,
      vd: 64.14,
      fl: 144.0,
      glass: "S-BSL7 (OHARA) / N-BK7 (Schott)",
      apd: false,
      role: "Final element; weak positive meniscus convex to image. Rear aspherical surface (K = −1 paraboloid) corrects residual SA and field curvature over the long 56.5 mm BFD.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1 Front Subgroup (Gf): L11–L14 ──
    { label: "1", R: 51.3085, d: 2.3, nd: 1.804, elemId: 1, sd: 20.5 }, // L11 glass front
    { label: "2", R: 23.3997, d: 0.2, nd: 1.55389, elemId: 2, sd: 14.9 }, // L11 glass/resin junction → L11r
    { label: "3A", R: 17.929, d: 5.7, nd: 1.0, elemId: 0, sd: 14.8 }, // L11r resin rear (asph) → air
    { label: "4", R: 35.3343, d: 1.9, nd: 1.801, elemId: 3, sd: 16.5 }, // L12 front
    { label: "5", R: 19.4911, d: 6.0, nd: 1.0, elemId: 0, sd: 15.4 }, // L12 rear → air
    { label: "6", R: 45.0079, d: 1.4, nd: 1.58313, elemId: 4, sd: 15.2 }, // L13 glass front
    { label: "7", R: 28.3075, d: 0.1, nd: 1.55389, elemId: 5, sd: 14.6 }, // L13 glass/resin junction → L13r
    { label: "8A", R: 26.486, d: 7.3, nd: 1.0, elemId: 0, sd: 14.5 }, // L13r resin rear (asph) → air
    { label: "9", R: 50.5648, d: 7.5, nd: 1.58144, elemId: 6, sd: 13.4 }, // L14 front
    { label: "10", R: -36.7513, d: 0.9, nd: 1.0, elemId: 0, sd: 14.0 }, // L14 rear → air

    // ── G1 Rear Subgroup (Gr): L15–L19 ──
    { label: "11", R: -35.7288, d: 1.55, nd: 1.497, elemId: 7, sd: 12.2 }, // L15 front (ED)
    { label: "12", R: 30.3482, d: 0.75, nd: 1.0, elemId: 0, sd: 11.0 }, // L15 rear → air
    { label: "13", R: 41.6778, d: 9.0, nd: 1.54814, elemId: 8, sd: 11.0 }, // L16 front (cem. Ja)
    { label: "14", R: -25.703, d: 1.2, nd: 1.8061, elemId: 9, sd: 12.1 }, // L16/L17 junction → L17
    { label: "15", R: -564.5828, d: 0.2, nd: 1.0, elemId: 0, sd: 12.3 }, // L17 rear → air
    { label: "16", R: 49.3653, d: 1.5, nd: 1.804, elemId: 10, sd: 12.3 }, // L18 front (cem. Jb)
    { label: "17", R: 26.318, d: 10.0, nd: 1.54814, elemId: 11, sd: 13.6 }, // L18/L19 junction → L19
    { label: "18", R: -31.7447, d: 11.681, nd: 1.0, elemId: 0, sd: 14.0 }, // L19 rear → air (D18, variable)

    // ── Aperture Stop ──
    { label: "STO", R: 1e15, d: 6.5426, nd: 1.0, elemId: 0, sd: 10.0 }, // Stop moves with G2

    // ── G2 (focus group): L21–L24 ──
    { label: "20", R: 34.7596, d: 9.3, nd: 1.497, elemId: 12, sd: 12.6 }, // L21 front (ED)
    { label: "21", R: -34.7596, d: 0.25, nd: 1.0, elemId: 0, sd: 12.4 }, // L21 rear → air
    { label: "22", R: -54.5882, d: 1.2, nd: 1.834, elemId: 13, sd: 11.9 }, // L22 front (cem. Jc)
    { label: "23", R: 26.722, d: 5.4, nd: 1.497, elemId: 14, sd: 12.2 }, // L22/L23 junction → L23 (ED)
    { label: "24", R: -70.088, d: 0.8, nd: 1.0, elemId: 0, sd: 11.9 }, // L23 rear → air
    { label: "25", R: -84.7454, d: 3.3, nd: 1.51633, elemId: 15, sd: 11.5 }, // L24 front
    { label: "26A", R: -40.1302, d: 56.5, nd: 1.0, elemId: 0, sd: 11.3 }, // L24 rear (asph) → image (BF)
  ],

  /* ── Aspherical coefficients ──
   *  Patent conic convention: κ (kappa).  Standard K = κ − 1.
   *  Surface 3:  κ = −1 → K = −2  (hyperboloid)
   *  Surface 8:  κ = −1 → K = −2  (hyperboloid)
   *  Surface 26: κ =  0 → K = −1  (paraboloid)
   *  Patent provides even-order coefficients C4–C12 (surfaces 3, 8)
   *  and C4–C10 (surface 26).
   */
  asph: {
    "3A": {
      K: -2,
      A4: -4.1351e-7,
      A6: -6.5414e-9,
      A8: 4.3437e-11,
      A10: -1.5271e-13,
      A12: 2.2759e-16,
      A14: 0,
    },
    "8A": {
      K: -2,
      A4: 1.1134e-5,
      A6: -1.459e-8,
      A8: 1.2945e-11,
      A10: 2.4108e-14,
      A12: -9.7211e-16,
      A14: 0,
    },
    "26A": {
      K: -1,
      A4: 9.3165e-6,
      A6: 1.977e-8,
      A8: -4.0934e-11,
      A10: 1.6059e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (focus mechanism) ──
   *  Rear-group unit focus: G2 (with stop) translates as rigid body.
   *  D18 + BF = 68.181 mm (conserved).
   *  Patent tabulates to β = −1/10 only; close-focus gaps at 0.21 m
   *  computed via paraxial conjugate solve (|m| ≈ 0.35 vs. Nikon 0.37×).
   */
  var: {
    "18": [11.681, 3.035],
    "26A": [56.5, 65.146],
  },

  varLabels: [
    ["18", "D18"],
    ["26A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1-FRONT (Gf)", fromSurface: "1", toSurface: "10" },
    { text: "G1-REAR (Gr)", fromSurface: "11", toSurface: "18" },
    { text: "G2", fromSurface: "20", toSurface: "26A" },
  ],

  doublets: [
    { text: "H1", fromSurface: "1", toSurface: "3A" },
    { text: "H2", fromSurface: "6", toSurface: "8A" },
    { text: "Ja", fromSurface: "13", toSurface: "15" },
    { text: "Jb", fromSurface: "16", toSurface: "18" },
    { text: "Jc", fromSurface: "22", toSurface: "24" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.21,
  focusDescription:
    "Rear-group unit focus: G2 and aperture stop translate together along the axis while G1 remains fixed. Nikon markets this as 'Rear Focusing' with 'Close Range Correction.'",

  /* ── Aperture configuration ── */
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
