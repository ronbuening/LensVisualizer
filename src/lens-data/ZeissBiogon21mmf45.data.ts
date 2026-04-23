import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — ZEISS BIOGON 21mm f/4.5                      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,721,499 Example 2 (L. Bertele / Carl Zeiss).    ║
 * ║  Quasi-symmetric ultra-wide-angle design for Contax rangefinder.   ║
 * ║  8 elements / 5 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: unit focusing (entire lens translates).                    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f=100 mm (stated); all R, d, sd values scaled         ║
 * ║    ×0.21 to f≈21 mm production (Contax 21mm f/4.5).               ║
 * ║    Computed paraxial EFL at patent scale = 90.55 mm (9.5% below    ║
 * ║    the stated 100 mm); at production scale EFL ≈ 19.0 mm.         ║
 * ║    Marketing focal length is 21 mm.                                ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent provides no semi-diameters. SDs estimated from           ║
 * ║    marginal-ray envelope with 8% clearance, capped by sd/|R|<0.90 ║
 * ║    for spherical surfaces and edge thickness ≥1.0 mm.              ║
 * ║    Patent figure (Fig. 2) used for front/rear proportioning.       ║
 * ║    Stop SD = EFL/(2×f/#) = 2.11 mm at production scale.           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "zeiss-biogon-21-f45",
  maker: "Carl Zeiss",
  name: "CARL ZEISS BIOGON 21mm f/4.5",
  subtitle: "US 2,721,499 EXAMPLE 2 — BERTELE / CARL ZEISS",
  specs: ["8 ELEMENTS / 5 GROUPS", "f ≈ 19.0 mm (design)", "F/4.5", "2ω ≈ 91.7°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 21,
  focalLengthDesign: 19.0,
  apertureMarketing: 4.5,
  // apertureDesign omitted — matches marketing
  patentYear: 1955,
  elementCount: 8,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5038,
      vd: 66.7,
      fl: -63.0,
      glass: "BK crown (504/667)",
      apd: false,
      role: "Front field lens — steers oblique ray bundles toward central groups",
      cemented: undefined,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.48697,
      vd: 70.3,
      fl: -41.3,
      glass: "FK5 fluorite crown (487/703)",
      apd: false,
      role: "Second field lens — continues oblique beam steering with low lateral color",
      cemented: undefined,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7205,
      vd: 50.3,
      fl: -22.4,
      glass: "LaK10 lanthanum crown (721/503)",
      apd: false,
      role: "Front element of Component C — gradually bends oblique rays before the positive core",
      cemented: "Ja",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.60739,
      vd: 59.5,
      fl: 7.9,
      glass: "SK7 dense crown (607/595)",
      apd: false,
      role: "Rear element of Component C — primary convergent power of front positive group",
      cemented: "Ja",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.56093,
      vd: 57.5,
      fl: -10.2,
      glass: "BaK/SK crown (561/575)",
      apd: false,
      role: "Front element of Component D — negative power for achromatic balancing",
      cemented: "Jb",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.625,
      vd: 53.3,
      fl: 5.6,
      glass: "SK-type dense crown (625/533)",
      apd: false,
      role: "Central element of Component D — primary convergent power of rear positive group",
      cemented: "Jb",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.71966,
      vd: 29.3,
      fl: -17.6,
      glass: "SF1 dense flint (720/293)",
      apd: false,
      role: "Rear element of Component D — only flint glass; achromatic correction of triplet",
      cemented: "Jb",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.642,
      vd: 58.1,
      fl: -23.0,
      glass: "LaK/SK crown (642/581)",
      apd: false,
      role: "Rear field-flattening meniscus — Petzval correction and quasi-symmetric distortion control",
      cemented: undefined,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 22.9194, d: 0.777, nd: 1.5038, elemId: 1, sd: 10.08 }, // L1 front
    { label: "2", R: 13.1523, d: 2.772, nd: 1.0, elemId: 0, sd: 9.66 }, // L1 rear → air (l₁)
    { label: "3", R: 23.1525, d: 0.777, nd: 1.48697, elemId: 2, sd: 7.98 }, // L2 front
    { label: "4", R: 10.6512, d: 7.35, nd: 1.0, elemId: 0, sd: 7.35 }, // L2 rear → air (l₂)
    { label: "5", R: 11.8104, d: 6.153, nd: 1.7205, elemId: 3, sd: 5.04 }, // L3 front (Comp C)
    { label: "6", R: 5.3277, d: 2.793, nd: 1.60739, elemId: 4, sd: 4.41 }, // L3/L4 junction
    { label: "7", R: -40.9332, d: 0.4935, nd: 1.0, elemId: 0, sd: 3.15 }, // L4 rear → air
    { label: "STO", R: 1e15, d: 0.4935, nd: 1.0, elemId: 0, sd: 2.11 }, // Aperture stop (center of l₃)
    { label: "8", R: -53.067, d: 0.588, nd: 1.56093, elemId: 5, sd: 2.94 }, // L5 front (Comp D)
    { label: "9", R: 6.4239, d: 4.977, nd: 1.625, elemId: 6, sd: 3.78 }, // L5/L6 junction
    { label: "10", R: -5.3571, d: 3.822, nd: 1.71966, elemId: 7, sd: 4.62 }, // L6/L7 junction
    { label: "11", R: -12.0498, d: 8.19, nd: 1.0, elemId: 0, sd: 4.83 }, // L7 rear → air (l₄)
    { label: "12", R: -8.4315, d: 2.058, nd: 1.642, elemId: 8, sd: 6.72 }, // L8 front (Comp E)
    { label: "13", R: -21.5544, d: 6.6544, nd: 1.0, elemId: 0, sd: 7.98 }, // L8 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ── */
  var: {
    "13": [6.6544, 7.0648], // [d_infinity, d_close_focus_0.9m]
  },

  varLabels: [["13", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "A", fromSurface: "1", toSurface: "2" },
    { text: "B", fromSurface: "3", toSurface: "4" },
    { text: "C", fromSurface: "5", toSurface: "7" },
    { text: "D", fromSurface: "8", toSurface: "11" },
    { text: "E", fromSurface: "12", toSurface: "13" },
  ],

  doublets: [
    { text: "Ja", fromSurface: "5", toSurface: "7" },
    { text: "Jb", fromSurface: "8", toSurface: "11" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.9,
  focusDescription: "Unit focus — entire lens translates axially.",

  /* ── Aperture configuration ── */
  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
