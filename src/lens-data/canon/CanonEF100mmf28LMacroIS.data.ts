import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Canon EF 100mm f/2.8L Macro IS USM                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 7,864,451 B2, Example 1 (Taki / Canon).          ║
 * ║  Inner-focus macro with Hybrid IS. All-spherical design.           ║
 * ║  15 elements / 12 groups, 0 aspherical surfaces.                   ║
 * ║  Focus: dual-group floating inner focus (L2 image-ward,            ║
 * ║         L4 object-ward). L1, L3, L5 fixed.                        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent provides "Effective Diameter" per surface.                ║
 * ║    SD = ED / 2 used throughout.                                    ║
 * ║                                                                    ║
 * ║  NOTE ON VARIABLE GAPS:                                            ║
 * ║    Patent tabulates spacings at ∞, −0.5×, and −1× magnification.  ║
 * ║    var entries use [d_infinity, d_close] = [∞, −1×].               ║
 * ║    Four variable gaps: d8 (L1–L2), d13 (L2–stops),                ║
 * ║    d17 (L3–L4), d22 (L4–L5a).                                     ║
 * ║    d25 (L5a–L5b) and d29 (BFD) are constant at all positions.     ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-100mm-f28l-macro-is",
  maker: "Canon",
  name: "CANON EF 100mm f/2.8L Macro IS USM",
  subtitle: "US 7,864,451 B2 Example 1 — Canon / Taki",
  specs: [
    "15 ELEMENTS / 12 GROUPS",
    "f = 100.0 mm",
    "F/2.8 (design F/2.92)",
    "2ω ≈ 24.4°",
    "ALL-SPHERICAL DESIGN",
    "HYBRID IS (L5a decentering)",
  ],

  focalLengthMarketing: 100,
  focalLengthDesign: 100.0,
  apertureMarketing: 2.8,
  apertureDesign: 2.92,
  patentYear: 2011,
  elementCount: 15,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    // ── L1: Front collector group (positive, fixed) ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: 89.0,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Front positive collector; lanthanum crown, begins converging the incoming beam.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: 70.3,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Positive meniscus convex to object; same glass as E1, further converges marginal ray with low coma contribution.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.801,
      vd: 35.0,
      fl: -41.5,
      glass: "Dense lanthanum flint (801/350, unmatched in public OHARA catalog)",
      apd: false,
      role: "Primary dispersive corrector in L1; chromatically active negative element paired with the UD element E4.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 61.3,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote:
        "UD (Ultra-low Dispersion) fluorophosphate crown; positive ΔPgF provides secondary-spectrum correction. Patent does not publish per-line indices.",
      role: "Sole UD element; achromatic partner to E3, positioned in fixed L1 group for focus-stable chromatic correction.",
    },

    // ── L2: Focus Group A (negative, moves image-ward) ──
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.7,
      fl: -34.2,
      glass: "S-TIH11 (OHARA)",
      apd: false,
      role: "Leading diverging element of L2; generates overcorrected chromatic aberration that interacts with L1 during focus travel.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.53172,
      vd: 48.8,
      fl: -40.0,
      glass: "S-TIL27 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Negative component of cemented doublet D1; light titanium flint providing diverging power.",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: 35.8,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Positive component of D1 (nearly plano-convex); extreme-dispersion flint balances chromatic contributions within L2.",
    },

    // ── L3: Aperture region (weak positive, fixed) ──
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.801,
      vd: 35.0,
      fl: 252.7,
      glass: "Dense lanthanum flint (801/350, unmatched in public OHARA catalog)",
      apd: false,
      role: "Weak positive meniscus concave to object; compensates reduced SA correction capacity of L4 imposed by IS Petzval constraints (Cond. Expr. 1: f3/f = 2.53).",
    },

    // ── L4: Focus Group B (positive, moves object-ward) ──
    {
      id: 9,
      name: "L41",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 73.0,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Leading positive element of L4; phosphate crown, primary converging power after aperture stop.",
    },
    {
      id: 10,
      name: "L42",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: 42.1,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Positive component of cemented doublet D2; most steeply curved biconvex in the system, strong achromatic interface with E11.",
    },
    {
      id: 11,
      name: "L43",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      fl: -51.6,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Negative component of D2; same extreme flint as E7 and E12, tying chromatic correction across front and rear halves.",
    },

    // ── L5a: Image Stabilization group (negative, decenters for IS) ──
    {
      id: 12,
      name: "L5a1",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: 110.6,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Positive component of IS cemented doublet D3 (concave to object, convex to image); maintains chromatic correction during decentering.",
    },
    {
      id: 13,
      name: "L5a2",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.71999,
      vd: 50.2,
      fl: -35.5,
      glass: "S-LAM52 (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Negative component of D3; provides the net negative power of L5a (f ≈ −52.3 mm). Cemented construction ensures lateral color control when decentered.",
    },

    // ── L5b: Rear group (positive, fixed) ──
    {
      id: 14,
      name: "L5b1",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.6134,
      vd: 44.3,
      fl: -147.2,
      glass: "S-NBM51 (OHARA)",
      apd: false,
      role: "Weak negative meniscus concave to object; contributes negative Petzval curvature for field flattening.",
    },
    {
      id: 15,
      name: "L5b2",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.7432,
      vd: 49.3,
      fl: 67.8,
      glass: "S-LAM66 (OHARA)",
      apd: false,
      role: "Final element; strong positive lanthanum crown, forms the image. Petzval contribution partially offsets L5a's negative Petzval.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── L1: Front collector group ──
    { label: "1", R: 131.951, d: 5.7, nd: 1.72916, elemId: 1, sd: 23.1 },
    { label: "2", R: -125.378, d: 0.15, nd: 1.0, elemId: 0, sd: 22.79 },
    { label: "3", R: 44.495, d: 5.2, nd: 1.72916, elemId: 2, sd: 19.1 },
    { label: "4", R: 319.495, d: 1.58, nd: 1.0, elemId: 0, sd: 18.35 },
    { label: "5", R: -182.557, d: 1.8, nd: 1.801, elemId: 3, sd: 18.18 },
    { label: "6", R: 40.762, d: 0.78, nd: 1.0, elemId: 0, sd: 15.88 },
    { label: "7", R: 38.343, d: 5.78, nd: 1.497, elemId: 4, sd: 15.57 },
    { label: "8", R: -140.691, d: 1.31, nd: 1.0, elemId: 0, sd: 14.91 }, // L1→L2 variable gap

    // ── L2: Focus Group A ──
    { label: "9", R: -248.519, d: 1.4, nd: 1.72047, elemId: 5, sd: 13.6 },
    { label: "10", R: 27.422, d: 4.3, nd: 1.0, elemId: 0, sd: 12.33 },
    { label: "11", R: -74.738, d: 1.31, nd: 1.53172, elemId: 6, sd: 12.36 }, // D1 front (E6)
    { label: "12", R: 29.897, d: 4.4, nd: 1.84666, elemId: 7, sd: 12.95 }, // D1 junction (E7)
    { label: "13", R: 1984.002, d: 21.73, nd: 1.0, elemId: 0, sd: 12.96 }, // L2→stops variable gap

    // ── Stops ──
    { label: "14", R: 1e15, d: 2.14, nd: 1.0, elemId: 0, sd: 13.42 }, // Sub-stop SP2
    { label: "STO", R: 1e15, d: 3.53, nd: 1.0, elemId: 0, sd: 13.46 }, // Main aperture stop SP

    // ── L3: Aperture region ──
    { label: "16", R: -64.028, d: 2.12, nd: 1.801, elemId: 8, sd: 13.5 },
    { label: "17", R: -49.358, d: 18.54, nd: 1.0, elemId: 0, sd: 13.68 }, // L3→L4 variable gap

    // ── L4: Focus Group B ──
    { label: "18", R: 124.805, d: 3.85, nd: 1.618, elemId: 9, sd: 14.11 },
    { label: "19", R: -69.793, d: 0.48, nd: 1.0, elemId: 0, sd: 14.28 },
    { label: "20", R: 62.29, d: 5.28, nd: 1.72916, elemId: 10, sd: 14.44 }, // D2 front (E10)
    { label: "21", R: -58.324, d: 1.93, nd: 1.84666, elemId: 11, sd: 14.31 }, // D2 junction (E11)
    { label: "22", R: 177.251, d: 3.0, nd: 1.0, elemId: 0, sd: 14.09 }, // L4→L5a variable gap

    // ── L5a: IS group (cemented doublet, decenters for IS) ──
    { label: "23", R: -252.715, d: 2.89, nd: 1.84666, elemId: 12, sd: 14.03 }, // D3 front (E12)
    { label: "24", R: -68.669, d: 1.44, nd: 1.71999, elemId: 13, sd: 14.05 }, // D3 junction (E13)
    { label: "25", R: 41.129, d: 6.97, nd: 1.0, elemId: 0, sd: 14.02 }, // L5a→L5b gap (constant)

    // ── L5b: Rear group ──
    { label: "26", R: -57.78, d: 2.41, nd: 1.6134, elemId: 14, sd: 14.74 },
    { label: "27", R: -162.955, d: 0.15, nd: 1.0, elemId: 0, sd: 15.7 },
    { label: "28", R: 79.421, d: 4.4, nd: 1.7432, elemId: 15, sd: 16.74 },
    { label: "29", R: -134.415, d: 48.35, nd: 1.0, elemId: 0, sd: 16.91 }, // BFD to image (constant)
  ],

  /* ── Aspherical coefficients ──
   *  All-spherical design — no aspherical surfaces.
   */
  asph: {},

  /* ── Variable air spacings (dual-group floating inner focus) ──
   *  L2 moves image-ward, L4 moves object-ward.
   *  L1, L3, L5 are fixed. BFD and L5a–L5b gap are constant.
   *  Patent tabulates ∞, −0.5×, −1×. var uses [∞, −1×].
   */
  var: {
    "8": [1.31, 20.32], // L1–L2 gap
    "13": [21.73, 2.71], // L2–stops gap
    "17": [18.54, 1.91], // L3–L4 gap
    "22": [3.0, 19.63], // L4–L5a gap
  },
  varLabels: [
    ["8", "D8"],
    ["13", "D13"],
    ["17", "D17"],
    ["22", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "8" },
    { text: "L2 (−)", fromSurface: "9", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "16", toSurface: "17" },
    { text: "L4 (+)", fromSurface: "18", toSurface: "22" },
    { text: "L5a IS (−)", fromSurface: "23", toSurface: "25" },
    { text: "L5b (+)", fromSurface: "26", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "20", toSurface: "22" },
    { text: "D3", fromSurface: "23", toSurface: "25" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription:
    "Dual-group floating inner focus. L2 moves toward image; L4 moves toward object. L1, L3, L5 fixed. Constant overall length. Ring-type USM drive.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 16, 22, 32],
  maxFstop: 32,

  /* ── Layout tuning ── */
  gapSagFrac: 1.0, // Temporary: patent SDs place S4→S5 and S10→S11 nearly in contact, so allow full-gap sag clearance for review.
  scFill: 0.48,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
