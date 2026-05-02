import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SONY FE 135mm F1.8 GM (SEL135F18GM)          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2019/187633 A1 Example 1 (Sony Corporation).      ║
 * ║  Four-group P–N–P–N prime with dual floating inner focus.          ║
 * ║  13 elements / 10 groups, 1 aspherical surface (XA element).       ║
 * ║  Focus: GR2 moves toward image, GR3 moves toward object.          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from marginal + chief ray trace at the design         ║
 * ║    f/1.854 and ω = 9.38°, with 8% mechanical clearance on the     ║
 * ║    front group and combined ray-height allocation for the rear     ║
 * ║    group.  Adjusted to satisfy edge thickness ≥ 0.3 mm and        ║
 * ║    cross-gap sag intrusion < 90% at all gaps.  82 mm filter       ║
 * ║    thread constrains front element SD ≈ 37 mm.                    ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent surfaces 25–26 (filter FL: 2.5 mm, nd = 1.5168)         ║
 * ║    excluded; air-equivalent BFD folded into surface 24             ║
 * ║    (20.543 mm vs. patent 17.895 mm physical).                     ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-fe-135-f18-gm",
  maker: "Sony",
  name: "SONY FE 135mm F1.8 GM",
  subtitle: "WO 2019/187633 EXAMPLE 1 — SONY / MATSUOKA, MIYAGAWA, MATSUMOTO",
  specs: ["13 ELEMENTS / 10 GROUPS", "f ≈ 131.0 mm", "F/1.854", "2ω ≈ 18.8°", "1 ASPHERICAL SURFACE (XA)"],

  focalLengthMarketing: 135,
  focalLengthDesign: 130.95,
  apertureMarketing: 1.8,
  apertureDesign: 1.854,
  patentYear: 2019,
  elementCount: 13,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.61997,
      vd: 63.88,
      fl: 169.1,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Front collector; weak positive power keeps marginal-ray angles low at the outermost surface.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      fl: 160.2,
      glass: "FPL53 class (fluorophosphate, Super ED — 437/951)",
      apd: "inferred",
      apdNote: "νd = 95.1, anomalous partial dispersion; closest catalog match S-FPL53 (OHARA 439/950), Δnd ≈ 0.002",
      role: "Super ED element; very high Abbe number minimizes chromatic contribution while carrying positive power.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.72047,
      vd: 34.71,
      fl: -72.3,
      glass: "S-NBH8 (OHARA)",
      apd: false,
      role: "Sole negative element in GR1; controls Petzval sum and provides chromatic partnering to the ED elements.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.63,
      fl: 82.7,
      glass: "S-FPM2 (OHARA)",
      apd: false,
      role: "ED element; strongest positive singlet in GR1, recollects the beam after G3 with low dispersion.",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.38,
      fl: 196.9,
      glass: "S-BAL35 (OHARA)",
      apd: false,
      role: "XA aspherical element; front surface asphere corrects residual spherical aberration and sagittal coma flare from GR1.",
    },
    {
      id: 6,
      name: "L21",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.95906,
      vd: 17.47,
      fl: 171.3,
      glass: "Dense flint (959/175, vendor uncertain — anomalous dispersion, θgF ≈ 0.660)",
      apd: "inferred",
      apdNote:
        "θgF = 0.660 per patent condition (3); extreme anomalous dispersion flint used as positive element for axial color control",
      cemented: "D1",
      role: "Anomalous-dispersion positive flint in focus group GR2; high θgF enables secondary spectrum correction at the point of maximum axial ray diameter within GR2.",
    },
    {
      id: 7,
      name: "L22",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: -48.2,
      glass: "Lanthanum crown (772/496, class S-LAM)",
      apd: false,
      cemented: "D1",
      role: "Achromatizing partner to G6; combined doublet forms GR2 object-side sub-component with net negative power.",
    },
    {
      id: 8,
      name: "L23",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: -190.2,
      glass: "S-LAL14 (OHARA)",
      apd: false,
      role: "GR2 image-side sub-component; weakly negative trailing singlet in the first focus group.",
    },
    {
      id: 9,
      name: "L31",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.76,
      fl: -127.9,
      glass: "Titanium flint (741/278, class S-TIH)",
      apd: false,
      cemented: "D2",
      role: "Front element of GR3 doublet; achromatizing partner to G10 immediately behind the aperture stop.",
    },
    {
      id: 10,
      name: "L32",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.61997,
      vd: 63.88,
      fl: 46.8,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Principal positive-power element of GR3; biconvex shape near the stop minimizes coma and astigmatism.",
    },
    {
      id: 11,
      name: "L41",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 33.27,
      fl: 50.9,
      glass: "Lanthanum heavy flint (806/333, vendor uncertain)",
      apd: false,
      cemented: "D3",
      role: "Front element of GR4 doublet; strongly converges axial rays, separating them from peripheral rays for independent correction.",
    },
    {
      id: 12,
      name: "L42",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.15,
      fl: -66.0,
      glass: "S-NSL36 (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Rear element of GR4 doublet; provides negative power for chromatic correction within the final group.",
    },
    {
      id: 13,
      name: "L43",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.8919,
      vd: 37.13,
      fl: -70.9,
      glass: "Lanthanum heavy flint (892/371, class S-LAH)",
      apd: false,
      role: "Rearmost element; field flattener and peripheral-aberration corrector. Convex image-side surface suppresses ghost reflections (¶0090).",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── GR1: Front group (fixed) ──
    { label: "1", R: 67.6359, d: 8.6799, nd: 1.61997, elemId: 1, sd: 37.0 }, // G1 front
    { label: "2", R: 181.1834, d: 0.4, nd: 1.0, elemId: 0, sd: 35.5 }, // G1 rear → air
    { label: "3", R: 54.6341, d: 11.4782, nd: 1.437, elemId: 2, sd: 35.0 }, // G2 front (Super ED)
    { label: "4", R: 233.0436, d: 1.8824, nd: 1.0, elemId: 0, sd: 31.5 }, // G2 rear → air
    { label: "5", R: 208.5222, d: 2.65, nd: 1.72047, elemId: 3, sd: 29.5 }, // G3 front
    { label: "6", R: 41.4576, d: 0.3, nd: 1.0, elemId: 0, sd: 27.0 }, // G3 rear → air
    { label: "7", R: 42.3083, d: 11.5, nd: 1.59282, elemId: 4, sd: 27.0 }, // G4 front (ED)
    { label: "8", R: 276.9603, d: 0.4, nd: 1.0, elemId: 0, sd: 26.5 }, // G4 rear → air
    { label: "9A", R: 71.084, d: 5.5858, nd: 1.58313, elemId: 5, sd: 26.5 }, // G5 front (XA asph)
    { label: "10", R: 181.156, d: 3.0, nd: 1.0, elemId: 0, sd: 24.5 }, // G5 rear → air (d1)

    // ── GR2: First focus group (moves toward image) ──
    { label: "11", R: 122.3523, d: 3.1014, nd: 1.95906, elemId: 6, sd: 23.0 }, // G6 front
    { label: "12", R: 473.0091, d: 1.9, nd: 1.7725, elemId: 7, sd: 22.0 }, // G6→G7 junction
    { label: "13", R: 34.4892, d: 5.9178, nd: 1.0, elemId: 0, sd: 20.5 }, // G7 rear → air
    { label: "14", R: 294.4306, d: 1.6, nd: 1.72916, elemId: 8, sd: 19.0 }, // G8 front
    { label: "15", R: 94.0758, d: 17.088, nd: 1.0, elemId: 0, sd: 18.5 }, // G8 rear → air (d2)

    // ── Aperture stop (fixed) ──
    { label: "STO", R: 1e15, d: 12.6914, nd: 1.0, elemId: 0, sd: 15.7 }, // d3

    // ── GR3: Second focus group (moves toward object) ──
    { label: "17", R: 79.1944, d: 1.25, nd: 1.74077, elemId: 9, sd: 15.5 }, // G9 front
    { label: "18", R: 42.8515, d: 5.5, nd: 1.61997, elemId: 10, sd: 15.3 }, // G9→G10 junction
    { label: "19", R: -85.5729, d: 11.964, nd: 1.0, elemId: 0, sd: 15.0 }, // G10 rear → air (d4)

    // ── GR4: Final group (fixed) ──
    { label: "20", R: -692.7243, d: 9.1465, nd: 1.8061, elemId: 11, sd: 15.0 }, // G11 front
    { label: "21", R: -38.95, d: 1.29, nd: 1.51742, elemId: 12, sd: 14.5 }, // G11→G12 junction
    { label: "22", R: 278.8445, d: 5.0, nd: 1.0, elemId: 0, sd: 14.0 }, // G12 rear → air
    { label: "23", R: -51.8751, d: 1.28, nd: 1.8919, elemId: 13, sd: 13.5 }, // G13 front
    { label: "24", R: -292.7369, d: 20.5428, nd: 1.0, elemId: 0, sd: 13.5 }, // G13 rear → IMG (air-equiv BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "9A": {
      K: 0,
      A4: -1.343732e-6,
      A6: -3.875437e-10,
      A8: -7.218747e-14,
      A10: 1.266821e-16,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (floating inner focus) ──
   *  d1 (surface 10): GR1 → GR2 gap
   *  d2 (surface 15): GR2 → Stop gap
   *  d3 (surface STO): Stop → GR3 gap
   *  d4 (surface 19): GR3 → GR4 gap
   *
   *  Patent Table 4:
   *    β = 0.0 (∞):    d1=3.000  d2=17.088  d3=12.691  d4=11.964
   *    β = −0.25 (MFD): d1=10.850 d2=9.238   d3=5.927   d4=18.728
   *  Sum d1+d2+d3+d4 = 44.743 (constant — internal focus)
   */
  var: {
    "10": [3.0, 10.85],
    "15": [17.088, 9.2381],
    STO: [12.6914, 5.9273],
    "19": [11.964, 18.7282],
  },
  varLabels: [
    ["10", "D1"],
    ["15", "D2"],
    ["STO", "D3"],
    ["19", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "GR1 (+)", fromSurface: "1", toSurface: "10" },
    { text: "GR2 (−) FOCUS 1", fromSurface: "11", toSurface: "15" },
    { text: "GR3 (+) FOCUS 2", fromSurface: "17", toSurface: "19" },
    { text: "GR4 (−)", fromSurface: "20", toSurface: "24" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.7,
  focusDescription:
    "Floating inner focus: GR2 (3 elements) moves toward image, GR3 (2 elements) moves toward object. Four XD linear motors, two per group.",

  /* ── Aperture configuration ── */
  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.5, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
