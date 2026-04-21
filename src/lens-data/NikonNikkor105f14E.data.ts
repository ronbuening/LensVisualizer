import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON AF-S NIKKOR 105mm f/1.4E ED           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO2019/116563 A1 Example 3 (Nikon / Yamashita).     ║
 * ║  Three-group telephoto prime with APD glass for secondary          ║
 * ║  spectrum correction. All-spherical design. "3D High Fidelity."   ║
 * ║  14 elements / 9 groups, 0 aspherical surfaces.                   ║
 * ║  Focus: Inner focus — G2 cemented doublet translates axially.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Values estimated from paraxial        ║
 * ║    marginal + chief ray trace scaled to f/1.45 EP, with 12%       ║
 * ║    mechanical margin for singletons (5% for cemented surfaces),   ║
 * ║    capped at 82mm filter-thread physical limit.                    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-105-f14e-ed",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 105mm f/1.4E ED",
  subtitle: "WO2019/116563 A1 Example 3 — Nikon / Yamashita, Ito et al.",
  specs: ["14 ELEMENTS / 9 GROUPS", "f ≈ 102.1 mm", "F/1.45", "2ω ≈ 23.8°", "ALL SPHERICAL"],

  focalLengthMarketing: 105,
  focalLengthDesign: 102.1,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  patentYear: 2019,
  elementCount: 14,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Pos. Meniscus, convex to obj",
      nd: 1.59349,
      vd: 67.0,
      fl: 398.6,
      glass: "S-FPM2 equiv. (Ohara)",
      apd: "inferred",
      apdNote: "ΔθgF ≈ +0.006 — weak positive APD (fluorophosphate crown)",
      role: "Gentle beam convergence with minimal aberration. Nearly plano rear surface.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive (ED)",
      nd: 1.497,
      vd: 81.61,
      fl: 177.1,
      glass: "S-FPL51 (Ohara)",
      apd: "inferred",
      apdNote: "ΔθgF ≈ +0.033 — strong positive APD (ED glass)",
      role: "Primary positive power. Axial chromatic & secondary spectrum correction.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconvex Positive (ED)",
      nd: 1.497,
      vd: 81.61,
      fl: 111.7,
      glass: "S-FPL51 (Ohara)",
      apd: "inferred",
      apdNote: "ΔθgF ≈ +0.033 — strong positive APD (ED glass)",
      role: "Cemented ED positive — strong convergence, achromatized by L14.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Neg. Meniscus, concave to obj",
      nd: 1.72047,
      vd: 34.71,
      fl: -143.3,
      glass: "S-LAM2 equiv. (Ohara)",
      apd: false,
      role: "Achromatic flint partner to L13. First-order color correction of G1 beam.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Pos. Meniscus, concave to obj",
      nd: 1.6594,
      vd: 26.87,
      fl: 216.9,
      glass: "Specialty APD glass (Nikon)",
      apd: "patent",
      apdNote: "ΔθgF ≈ +0.034, θgF = 0.633 — patent innovation glass. Satisfies conditions (1)–(5).",
      role: "PATENT INNOVATION. High-dispersion APD positive for secondary spectrum correction. Core of patent claims.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 63.88,
      fl: -57.2,
      glass: "S-BSL7 (Ohara) / N-BK7 equiv.",
      apd: false,
      role: "Strongly diverging. Provides negative G2 group power; chromatic balance to L21.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L31",
      label: "Element 7",
      type: "Biconvex Positive (near-plano R)",
      nd: 2.001,
      vd: 29.13,
      fl: 59.0,
      glass: "S-LAH79 equiv. (Ohara)",
      apd: false,
      role: "High-power convergence in ultra-high-index glass. Low Petzval per unit power.",
    },
    {
      id: 8,
      name: "L32",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.52,
      fl: 50.9,
      glass: "S-LAL14 (Ohara)",
      apd: false,
      apdNote: "ΔθgF ≈ −0.007 — slight negative APD (lanthanum crown)",
      role: "Pre-stop positive. Spherical and chromatic correction.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L33",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.57,
      fl: -25.8,
      glass: "Specialty high-dispersion flint",
      apd: "inferred",
      apdNote: "ΔθgF ≈ +0.010 — moderate positive APD",
      role: "Pre-stop negative. Petzval correction and higher-order spherical aberration.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L34",
      label: "Element 10",
      type: "Biconvex Positive (ED)",
      nd: 1.497,
      vd: 81.61,
      fl: 80.1,
      glass: "S-FPL51 (Ohara)",
      apd: "inferred",
      apdNote: "ΔθgF ≈ +0.033 — strong positive APD (ED glass)",
      role: "Post-stop ED element. Primarily lateral chromatic & secondary spectrum for off-axis fields.",
    },
    {
      id: 11,
      name: "L35",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.71,
      fl: -24.8,
      glass: "S-LAM2 equiv. (Ohara)",
      apd: false,
      role: "Thin negative. Petzval sum correction, field flattening.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L36",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.76684,
      vd: 46.78,
      fl: 29.0,
      glass: "S-LAH64 equiv. (Ohara)",
      apd: false,
      apdNote: "ΔθgF ≈ −0.007 — slight negative APD",
      role: "Strong positive power for final convergence; higher-order spherical correction.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L37",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.98,
      fl: -51.1,
      glass: "S-TIL26 (Ohara)",
      apd: false,
      role: "Final negative. Residual Petzval correction, field flattening, distortion control.",
      cemented: "D5",
    },
    {
      id: 14,
      name: "L38",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      fl: 36.9,
      glass: "S-LAH79 equiv. (Ohara)",
      apd: false,
      role: "Final positive in ultra-high-index glass. Brings beam to focus; low Petzval per unit power.",
      cemented: "D5",
    },
  ],

  /* ── Surface prescription ──
   *  24 surfaces total: 14 glass elements + stop + air interfaces.
   *  Surface labels follow patent surface numbering (1–24).
   *  Stop is between surfaces 15 and 17 (patent surface 16).
   *
   *  Cemented doublet convention:
   *    Junction surface carries the second element's elemId.
   *    Its nd = the second element's glass index (medium after the junction).
   *    The second element's rear surface uses elemId: 0 (air interface).
   */
  surfaces: [
    /* ── G1: Front Positive Group ── */
    // L11 — Pos. meniscus, convex to object (near-plano rear)
    { label: "1", R: 228.1479, d: 4.915, nd: 1.59349, elemId: 1, sd: 39.4 },
    { label: "2", R: 6415.6205, d: 0.1, nd: 1.0, elemId: 0, sd: 39.1 },
    // L12 — Biconvex positive (ED glass, S-FPL51)
    { label: "3", R: 98.0319, d: 9.004, nd: 1.497, elemId: 2, sd: 39.1 },
    { label: "4", R: -860.7055, d: 0.1, nd: 1.0, elemId: 0, sd: 37.3 },
    // L13+L14 cemented doublet (ED + lanthanum flint)
    { label: "5", R: 70.0561, d: 11.648, nd: 1.497, elemId: 3, sd: 30.5 },
    { label: "6", R: -266.9895, d: 3.5, nd: 1.72047, elemId: 4, sd: 30.8 }, // junction → L14 glass
    { label: "7", R: 168.2737, d: 7.956, nd: 1.0, elemId: 0, sd: 29.7 }, // L14 rear → air (D7, variable)

    /* ── G2: Focusing Group (Negative) ── */
    // L21+L22 cemented doublet (APD glass + borosilicate crown)
    { label: "8", R: -156.9444, d: 4.0, nd: 1.6594, elemId: 5, sd: 26.6 },
    { label: "9", R: -74.8277, d: 2.5, nd: 1.5168, elemId: 6, sd: 25.9 }, // junction → L22 glass
    { label: "10", R: 48.8369, d: 17.029, nd: 1.0, elemId: 0, sd: 25.4 }, // L22 rear → air (D10, variable)

    /* ── G3: Rear Positive Group ── */
    // L31 — Biconvex positive (ultra-high-index, nd ≈ 2.001)
    { label: "11", R: 59.4115, d: 7.084, nd: 2.001, elemId: 7, sd: 25.8 },
    { label: "12", R: -9603.9985, d: 0.1, nd: 1.0, elemId: 0, sd: 24.0 },
    // L32+L33 cemented doublet (lanthanum crown + specialty flint)
    { label: "13", R: 101.9988, d: 8.889, nd: 1.6968, elemId: 8, sd: 19.0 },
    { label: "14", R: -54.3899, d: 1.8, nd: 1.71736, elemId: 9, sd: 19.2 }, // junction → L33 glass
    { label: "15", R: 28.023, d: 5.843, nd: 1.0, elemId: 0, sd: 18.6 }, // L33 rear → air

    // Aperture stop
    { label: "STO", R: 1e15, d: 1.6, nd: 1.0, elemId: 0, sd: 16.8 },

    // L34 — Biconvex positive (ED glass, S-FPL51)
    { label: "17", R: 118.55, d: 5.54, nd: 1.497, elemId: 10, sd: 18.6 },
    { label: "18", R: -59.9736, d: 0.1, nd: 1.0, elemId: 0, sd: 17.7 },
    // L35+L36 cemented doublet (lanthanum flint + lanthanum heavy flint)
    { label: "19", R: -74.139, d: 1.6, nd: 1.72047, elemId: 11, sd: 16.6 },
    { label: "20", R: 23.5612, d: 8.119, nd: 1.76684, elemId: 12, sd: 16.4 }, // junction → L36 glass
    { label: "21", R: -400.5055, d: 2.828, nd: 1.0, elemId: 0, sd: 14.5 }, // L36 rear → air
    // L37+L38 cemented doublet (titanium flint + ultra-high-index)
    { label: "22", R: -39.0208, d: 1.6, nd: 1.58144, elemId: 13, sd: 15.6 },
    { label: "23", R: 124.0696, d: 5.332, nd: 2.001, elemId: 14, sd: 15.6 }, // junction → L38 glass
    { label: "24", R: -52.6359, d: 39.632, nd: 1.0, elemId: 0, sd: 15.3 }, // L38 rear → BF
  ],

  /* ── Aspherical coefficients ──
   *  Example 3 is an all-spherical design. No aspherical surfaces.
   */
  asph: {},

  /* ── Variable air spacings (focus mechanism) ──
   *  Inner focus: G2 (L21+L22) translates toward image for close focus.
   *  D7 (G1→G2) increases, D10 (G2→G3) decreases by equal amounts.
   *  G1 and G3 remain fixed relative to the image plane.
   */
  var: {
    7: [7.956, 19.956], // G1→G2 air gap: infinity → close
    10: [17.029, 5.029], // G2→G3 air gap: infinity → close
  },

  varLabels: [
    ["7", "D7 (G1–G2)"],
    ["10", "D10 (G2–G3)"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (−)", fromSurface: "8", toSurface: "10" },
    { text: "G3 (+)", fromSurface: "11", toSurface: "24" },
  ],

  doublets: [
    { text: "D1 (ED+flint)", fromSurface: "5", toSurface: "7" },
    { text: "D2 (APD+BK7)", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
    { text: "D5", fromSurface: "22", toSurface: "24" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription:
    "Inner focus (IF). G2 cemented doublet (L21+L22) translates 12 mm toward the image side from infinity to 1.0 m. G1 and G3 fixed. Lens does not change external length.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 1.8, 2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
