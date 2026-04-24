import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR Z 58mm f/0.95 S Noct           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO2019/229849 A1 Example 1 (Nikon Corporation).     ║
 * ║  Modified double-Gauss with extended front corrector and rear      ║
 * ║  field-flattening group.  Manual focus only.                       ║
 * ║  17 elements / 10 groups, 3 aspherical surfaces.                  ║
 * ║  Focus: unit extension of entire front group GF (13 elements).    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from marginal + chief ray paraxial trace at f/0.98   ║
 * ║    (design FNo) and 2ω = 39.96° (half-field 19.98°), with 5%     ║
 * ║    mechanical clearance margin.  Patent does not list SDs.         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-z-58f095-noct",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 58mm f/0.95 S Noct",
  subtitle: "WO2019/229849 A1 EXAMPLE 1 — NIKON / TSUBONOYA, HARADA, TAKE",
  specs: ["17 ELEMENTS / 10 GROUPS", "f ≈ 59.6 mm", "F/0.95 (design F/0.98)", "2ω ≈ 40.0°", "3 ASPHERICAL SURFACES"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 58,
  focalLengthDesign: 59.62,
  apertureMarketing: 0.95,
  apertureDesign: 0.98,
  patentYear: 2019,
  elementCount: 17,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.90265,
      vd: 35.77,
      fl: 107.0,
      glass: "Ultra-high-index LaH (no confirmed catalog match; nd 1.903, νd 35.77)",
      apd: false,
      cemented: "Da",
      role: "Front positive element with CNC-ground aspherical surface; begins beam convergence while correcting high-order SA at f/0.95",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.552981,
      vd: 55.07,
      fl: -85.7,
      glass: "Anomalous dispersion special (no confirmed catalog match)",
      apd: "inferred",
      apdNote: "θgF = 0.54467, ΔPgF = −0.0065",
      cemented: "Da",
      role: "Negative anomalous-dispersion element; seeds Petzval correction and suppresses secondary spectrum in G1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.61266,
      vd: 44.46,
      fl: -96.7,
      glass: "KZFS-type (near N-KZFS4 / S-NBM51)",
      apd: "inferred",
      apdNote: "θgF = 0.56396, ΔPgF = −0.0051",
      cemented: "Db",
      role: "Diverging element of second G1 doublet; forms air lens La1 with L12; KZFS glass attacks secondary spectrum",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 126.5,
      glass: "ED phosphate crown (near S-FPM2 / FCD10; used ×3)",
      apd: false,
      cemented: "Db",
      role: "ED positive element; low dispersion counterbalances L13 KZFS glass for primary and secondary chromatic correction",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.8485,
      vd: 43.79,
      fl: 83.2,
      glass: "Lanthanum dense flint (near E-LASF013 / H-ZLaF68C)",
      apd: false,
      role: "First element of master group G2; strong positive power via high-index gentle curvatures",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 115.2,
      glass: "ED phosphate crown (same as L14)",
      apd: false,
      role: "ED singlet continuing positive power buildup; nearly plano-convex form minimises pre-stop coma",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 123.5,
      glass: "ED phosphate crown (same as L14)",
      apd: false,
      cemented: "Jc",
      role: "Positive element of pre-stop cemented doublet; ED glass provides chromatic correction",
    },
    {
      id: 8,
      name: "L24",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.33,
      fl: -42.6,
      glass: "High-dispersion flint (near S-NBH53V; used ×2)",
      apd: "inferred",
      apdNote: "θgF = 0.58997, ΔPgF ≈ 0 (on normal line); satisfies patent cond. (4)",
      cemented: "Jc",
      role: "Primary Petzval corrector; strong negative power near stop; forms object-side boundary of air lens La2",
    },
    {
      id: 9,
      name: "L25",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.61266,
      vd: 44.46,
      fl: -46.7,
      glass: "KZFS-type (same as L13)",
      apd: "inferred",
      apdNote: "θgF = 0.56396, ΔPgF = −0.0051",
      cemented: "Jd",
      role: "Post-stop Petzval corrector; quasi-symmetric with L24 about stop; KZFS glass continues secondary spectrum correction",
    },
    {
      id: 10,
      name: "L26",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 72.8,
      glass: "Super-ED fluorophosphate (near S-FPL51 / FCD1)",
      apd: false,
      cemented: "Jd",
      role: "Lowest-dispersion element (νd = 82.57); counterbalances multiple high-dispersion elements for deep secondary spectrum correction",
    },
    {
      id: 11,
      name: "L27",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.69,
      fl: 50.6,
      glass: "S-LAH58 (OHARA); used ×3",
      apd: false,
      role: "Strongest positive singlet in G2; high-index LaH allows strong power with moderate curvatures",
    },
    {
      id: 12,
      name: "L28",
      label: "Element 12",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.95375,
      vd: 32.33,
      fl: 51.8,
      glass: "S-LAH98 (OHARA) / TAFD45 (HOYA)",
      apd: false,
      cemented: "De",
      role: "Second CNC-ground asphere; highest nd in design (1.954); enables strong post-stop convergence",
    },
    {
      id: 13,
      name: "L29",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.33,
      fl: -40.9,
      glass: "High-dispersion flint (same as L24)",
      apd: "inferred",
      apdNote: "θgF = 0.58997, ΔPgF ≈ 0; satisfies patent cond. (4)",
      cemented: "De",
      role: "Last element of GF; completes quasi-symmetric pair with L24; rear surface defines variable focus gap D22",
    },
    {
      id: 14,
      name: "L31",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.69,
      fl: 50.7,
      glass: "S-LAH58 (OHARA; same as L27)",
      apd: false,
      cemented: "Df",
      role: "Positive element of first GR doublet; provides convergence and field-flattening in fixed rear assembly",
    },
    {
      id: 15,
      name: "L32",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.13,
      fl: -47.5,
      glass: "Dense flint (near S-NBH52V)",
      apd: false,
      cemented: "Df",
      role: "Highest-dispersion element in design (νd = 30.13); achromatisation within GR doublet Df",
    },
    {
      id: 16,
      name: "L33",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.69,
      fl: 46.2,
      glass: "S-LAH58 (OHARA; same as L27)",
      apd: false,
      cemented: "Dg",
      role: "Strongest positive element in GR; final convergence stage; strong curvatures correct sagittal coma at field edges",
    },
    {
      id: 17,
      name: "L34",
      label: "Element 17",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.765538,
      vd: 46.76,
      fl: -50.2,
      glass: "Lanthanum crown (no confirmed catalog match; near TAFD5F)",
      apd: false,
      cemented: "Dg",
      role: "Last optical element; rear aspherical surface (14th-order) provides final field-edge correction; PGM or hybrid manufacturing (inferred)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1 (front corrector, negative): doublet Da (L11+L12), doublet Db (L13+L14) ──
    { label: "1A", R: 108.488, d: 7.65, nd: 1.90265, elemId: 1, sd: 31.9 }, // L11 front [asph]
    { label: "2", R: -848.55, d: 2.8, nd: 1.552981, elemId: 2, sd: 30.9 }, // L11→L12 junction
    { label: "3", R: 50.252, d: 18.12, nd: 1.0, elemId: 0, sd: 28.7 }, // L12 rear → air
    { label: "4", R: -60.72, d: 2.8, nd: 1.61266, elemId: 3, sd: 31.4 }, // L13 front
    { label: "5", R: 2497.5, d: 9.15, nd: 1.59319, elemId: 4, sd: 32.0 }, // L13→L14 junction
    { label: "6", R: -77.239, d: 0.4, nd: 1.0, elemId: 0, sd: 34.2 }, // L14 rear → air
    // ── G2 (master group, positive): L21, L22, Jc (L23+L24), [STO], Jd (L25+L26), L27, De (L28+L29) ──
    { label: "7", R: 113.763, d: 10.95, nd: 1.8485, elemId: 5, sd: 34.2 }, // L21 front
    { label: "8", R: -178.06, d: 0.4, nd: 1.0, elemId: 0, sd: 33.4 }, // L21 rear → air
    { label: "9", R: 70.659, d: 9.74, nd: 1.59319, elemId: 6, sd: 33.2 }, // L22 front
    { label: "10", R: -1968.5, d: 0.2, nd: 1.0, elemId: 0, sd: 29.7 }, // L22 rear → air
    { label: "11", R: 289.687, d: 8.0, nd: 1.59319, elemId: 7, sd: 29.5 }, // L23 front
    { label: "12", R: -97.087, d: 2.8, nd: 1.738, elemId: 8, sd: 26.3 }, // L23→L24 junction
    { label: "13", R: 47.074, d: 8.7, nd: 1.0, elemId: 0, sd: 25.3 }, // L24 rear → air
    { label: "STO", R: 1e15, d: 5.29, nd: 1.0, elemId: 0, sd: 23.4 }, // Aperture stop (patent surface 14)
    { label: "15", R: -95.23, d: 2.2, nd: 1.61266, elemId: 9, sd: 22.3 }, // L25 front
    { label: "16", R: 41.204, d: 11.55, nd: 1.49782, elemId: 10, sd: 22.2 }, // L25→L26 junction
    { label: "17", R: -273.092, d: 0.2, nd: 1.0, elemId: 0, sd: 22.1 }, // L26 rear → air
    { label: "18", R: 76.173, d: 9.5, nd: 1.883, elemId: 11, sd: 22.1 }, // L27 front
    { label: "19", R: -101.575, d: 0.2, nd: 1.0, elemId: 0, sd: 20.5 }, // L27 rear → air
    { label: "20A", R: 176.128, d: 7.45, nd: 1.95375, elemId: 12, sd: 20.4 }, // L28 front [asph]
    { label: "21", R: -67.221, d: 1.8, nd: 1.738, elemId: 13, sd: 18.1 }, // L28→L29 junction
    { label: "22", R: 55.51, d: 2.68, nd: 1.0, elemId: 0, sd: 17.4 }, // L29 rear → D22 [variable]
    // ── GR (rear corrector, weakly positive): doublet Df (L31+L32), doublet Dg (L33+L34) ──
    { label: "23", R: 71.413, d: 6.35, nd: 1.883, elemId: 14, sd: 16.3 }, // L31 front
    { label: "24", R: -115.025, d: 1.81, nd: 1.69895, elemId: 15, sd: 14.2 }, // L31→L32 junction
    { label: "25", R: 46.943, d: 0.8, nd: 1.0, elemId: 0, sd: 13.8 }, // L32 rear → air
    { label: "26", R: 55.281, d: 9.11, nd: 1.883, elemId: 16, sd: 14.2 }, // L33 front
    { label: "27", R: -144.041, d: 3.0, nd: 1.765538, elemId: 17, sd: 15.2 }, // L33→L34 junction
    { label: "28A", R: 52.858, d: 14.5, nd: 1.0, elemId: 0, sd: 15.6 }, // L34 rear [asph] → air to filter
    // ── Filter group (not optical elements) ──
    { label: "29", R: 1e15, d: 1.6, nd: 1.5168, elemId: 0, sd: 21.9 }, // Filter front
    { label: "30", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 22.3 }, // Filter rear → image
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "1A": {
      K: 0,
      A4: -3.82177e-7,
      A6: -6.06486e-11,
      A8: -3.80172e-15,
      A10: -1.32266e-18,
      A12: 0,
      A14: 0,
    },
    "20A": {
      K: 0,
      A4: -1.15028e-6,
      A6: -4.51771e-10,
      A8: 2.7267e-13,
      A10: -7.66812e-17,
      A12: 0,
      A14: 0,
    },
    "28A": {
      K: 0,
      A4: 3.18645e-6,
      A6: -1.14718e-8,
      A8: 7.74567e-11,
      A10: -2.24225e-13,
      A12: 3.3479e-16,
      A14: -1.7047e-19,
    },
  },

  /* ── Variable air spacings (focus mechanism) ──
   *  Unit focus: entire GF (surfaces 1A–22) translates toward object.
   *  GR (surfaces 23–28A) remains fixed.
   *  D22 = GF→GR air gap; increases from 2.68 mm (∞) to 21.29 mm (0.5 m).
   */
  var: {
    "22": [2.68, 21.29],
  },

  varLabels: [["22", "D22"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1A", toSurface: "6" },
    { text: "G2 (+)", fromSurface: "7", toSurface: "22" },
    { text: "GR (+)", fromSurface: "23", toSurface: "28A" },
  ],

  doublets: [
    { text: "Da", fromSurface: "1A", toSurface: "3" },
    { text: "Db", fromSurface: "4", toSurface: "6" },
    { text: "Jc", fromSurface: "11", toSurface: "13" },
    { text: "Jd", fromSurface: "15", toSurface: "17" },
    { text: "De", fromSurface: "20A", toSurface: "22" },
    { text: "Df", fromSurface: "23", toSurface: "25" },
    { text: "Dg", fromSurface: "26", toSurface: "28A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription:
    "Unit extension of entire front group GF (13 elements, surfaces 1A–22). GF translates 18.6 mm toward object for 0.5 m close focus. GR fixed. Manual focus only (~320° focus throw).",

  /* ── Aperture configuration ── */
  nominalFno: 0.95,
  fstopSeries: [0.95, 1.0, 1.1, 1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
