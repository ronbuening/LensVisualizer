import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 24-70mm f/2.8E ED VR               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0142168 A1 Example 1 (Harada / Nikon).      ║
 * ║  Negative-lead zoom: G1(−)·G2(+)·G3(−)·G4(+).                    ║
 * ║  20 elements / 16 groups, 4 aspherical surfaces.                  ║
 * ║  Focus: inner focus via G21 (5 elements) rearward.                ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D7, D18, D20(STO), D30, BF.                 ║
 * ║  Focus variable gaps: D7 (zoom + focus), D16 (focus only).       ║
 * ║  Reversing groups: D20/STO gap is non-monotonic.                  ║
 * ║  D26 (G31–G32 within G3) is fixed at 1.250 mm.                   ║
 * ║                                                                    ║
 * ║  NOTE ON FC1: Patent surface 19 (first flare-cut diaphragm,      ║
 * ║  d = 1.200 mm, fixed) is folded into the air gap between L26     ║
 * ║  rear (surface "18") and the aperture stop ("STO").               ║
 * ║  Surface "18" d = patent D18 + 1.200 mm.                         ║
 * ║  FC2 (patent surface 40) is folded into BFD of surface "37A".    ║
 * ║                                                                    ║
 * ║  NOTE ON COMPOSITE ASPHERICAL: L12 is a composite aspherical     ║
 * ║  lens (resin layer on glass body). Modeled as cemented doublet:  ║
 * ║  L12r (resin, id 2) + L12g (glass, id 3).                        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  Started from combined marginal + chief ray trace                ║
 * ║  (offAxisFieldFrac = 0.60), ~8% clearance, max across 3 zoom     ║
 * ║  positions, then rebalanced against Nikon's published            ║
 * ║  construction diagram. G1 is now more dominant, G2/G22 step      ║
 * ║  down sooner, and the rear group is slightly slimmer to better   ║
 * ║  match the production lens silhouette without triggering hidden  ║
 * ║  render trims or cross-gap overlap.                               ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-afs-24-70-f28e-vr",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 24-70mm f/2.8E ED VR",
  subtitle: "US 2020/0142168 A1 Example 1 — Nikon / Harada",
  specs: ["20 ELEMENTS / 16 GROUPS", "f = 24–70 mm", "F/2.8", "2ω ≈ 84.4–34.4°", "4 ASPHERICAL SURFACES"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: [24, 70],
  focalLengthDesign: [24.8, 67.85],
  apertureMarketing: 2.8,
  apertureDesign: 2.92,
  patentYear: 2020,
  elementCount: 20,
  groupCount: 16,

  /* ── Elements ── */
  elements: [
    // ── G1 (negative) ──
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.74389,
      vd: 49.5,
      fl: -53.4,
      glass: "S-LAH60 (OHARA)",
      apd: false,
      role: "Front element; aspherical rear corrects wide-angle distortion and SA",
    },
    {
      id: 2,
      name: "L12r",
      label: "Element 2r",
      type: "Asph. Resin Layer",
      nd: 1.56093,
      vd: 36.6,
      fl: 0,
      glass: "UV-curing resin",
      apd: false,
      cemented: "H1",
      role: "Composite aspherical resin layer on L12g; corrects field curvature and astigmatism",
    },
    {
      id: 3,
      name: "L12g",
      label: "Element 2g",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -55.2,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      cemented: "H1",
      role: "Glass body of composite aspherical; strong negative power for G1 divergence",
    },
    {
      id: 4,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.1,
      fl: 80.2,
      glass: "S-NPH2 (OHARA) — HRI",
      apd: false,
      role: "HRI element (nd > 2.0); field flattener with reduced Petzval contribution",
    },
    // ── G21 (focusing sub-group, positive) ──
    {
      id: 5,
      name: "L21",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      fl: 194.6,
      glass: "L-BSL7 (OHARA)",
      apd: false,
      role: "Weak positive; gentle convergence at G2 entry",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.59349,
      vd: 67.0,
      fl: 121.5,
      glass: "L-BSL7 (OHARA)",
      apd: false,
      role: "Continues convergence with Petzval-friendly meniscus shape",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      fl: 89.4,
      glass: "L-BSL7 (OHARA)",
      apd: false,
      cemented: "Ja",
      role: "Crown element of achromatic doublet; corrects axial chromatic aberration",
    },
    {
      id: 8,
      name: "L24",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.3,
      fl: -37.5,
      glass: "S-LAH79 (OHARA)",
      apd: false,
      cemented: "Ja",
      role: "Flint element of achromatic doublet; net doublet power is negative (−67.6 mm)",
    },
    {
      id: 9,
      name: "L25",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 71.2,
      glass: "S-LAH52 (OHARA)",
      apd: false,
      role: "Strongest positive element in G21; bulk converging power",
    },
    // ── G22 (relay element, positive) ──
    {
      id: 10,
      name: "L26",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.6,
      fl: 64.0,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Relay element between focusing group and stop; fixed during focus",
    },
    // ── G31 (intermediate group, negative) ──
    {
      id: 11,
      name: "L31",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -33.4,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      role: "Strong negative; re-collimates converging beam for VR group feed",
    },
    {
      id: 12,
      name: "L32",
      label: "Element 11",
      type: "Neg. Meniscus (concave obj.)",
      nd: 1.603,
      vd: 65.4,
      fl: -129.7,
      glass: "S-PHM52 (OHARA)",
      apd: "inferred",
      apdNote: "Possible ED designation; phosphate crown with potential anomalous partial dispersion",
      role: "Weak negative; fine-tunes divergence; low-dispersion lateral-color control",
    },
    {
      id: 13,
      name: "L33",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 51.5,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Positive flint; forms air-spaced achromat with L31/L32 for lateral color correction",
    },
    // ── G32 (VR sub-group, negative) ──
    {
      id: 14,
      name: "L34",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.59349,
      vd: 67.0,
      fl: -72.6,
      glass: "L-BSL7 (OHARA)",
      apd: false,
      role: "VR primary element; low-dispersion glass minimizes chromatic penalty of decentration",
    },
    {
      id: 15,
      name: "L35",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      fl: 180.9,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "VR corrector; weak positive flint compensates L34 chromatic contribution",
    },
    // ── G4 (rear positive group) ──
    {
      id: 16,
      name: "L41",
      label: "Element 15",
      type: "Biconvex Positive (1× Asph, ED)",
      nd: 1.55332,
      vd: 71.7,
      fl: 106.8,
      glass: "Fluorophosphate crown — ASP/ED",
      apd: "patent",
      apdNote: "First Nikon aspherical ED element; νd = 71.7, anomalous partial dispersion",
      role: "Combined aspherical + ED correction; oblate base (K=1.0) controls zonal SA",
    },
    {
      id: 17,
      name: "L42",
      label: "Element 16",
      type: "Neg. Meniscus (concave img.)",
      nd: 1.83481,
      vd: 42.7,
      fl: -101.1,
      glass: "S-LAH63 (OHARA)",
      apd: false,
      cemented: "Jb",
      role: "Dense crown element of achromatic doublet; fine-tunes axial color",
    },
    {
      id: 18,
      name: "L43",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 56.3,
      glass: "L-BSL7 variant (OHARA)",
      apd: "inferred",
      apdNote: "ED candidate; nd=1.59319/νd=67.9 distinct from L-BSL7 (1.59349/67.0)",
      cemented: "Jb",
      role: "Crown in doublet (net +128.1 mm); possible second ED element",
    },
    {
      id: 19,
      name: "L44",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      fl: 44.8,
      glass: "S-FPL53 (OHARA) — Super ED",
      apd: "patent",
      apdNote: "Fluorite-crown with extreme anomalous dispersion; secondary spectrum correction",
      cemented: "Tc",
      role: "Super-ED element; primary secondary-spectrum correction in rear triplet",
    },
    {
      id: 20,
      name: "L45",
      label: "Element 19",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.5,
      fl: -37.1,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      cemented: "Tc",
      role: "Dense flint in triplet; complementary dispersion for apochromatic correction",
    },
    {
      id: 21,
      name: "L46",
      label: "Element 20",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.6935,
      vd: 53.3,
      fl: 180.6,
      glass: "S-LAM54 (OHARA)",
      apd: false,
      cemented: "Tc",
      role: "Third glass in triplet; aspherical rear (surface 37A) corrects residual field curvature",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1 (negative): L11, L12r+L12g (composite asph), L13 (HRI) ──
    { label: "1", R: 121.85638, d: 2.9, nd: 1.74389, elemId: 1, sd: 27.2 },
    { label: "2A", R: 29.6367, d: 15.36, nd: 1.0, elemId: 0, sd: 23.8 },
    { label: "3A", R: -197.50816, d: 0.2, nd: 1.56093, elemId: 2, sd: 22.8 }, // L12r resin front (asph)
    { label: "4", R: -169.39125, d: 2.1, nd: 1.804, elemId: 3, sd: 23.4 }, // L12r→L12g junction
    { label: "5", R: 60.51496, d: 0.15, nd: 1.0, elemId: 0, sd: 23.8 },
    { label: "6", R: 52.85097, d: 5.6, nd: 2.001, elemId: 4, sd: 22.0 }, // L13 HRI
    { label: "7", R: 146.47986, d: 48.945, nd: 1.0, elemId: 0, sd: 22.4 }, // D7 variable (zoom+focus)

    // ── G21 (focusing, positive): L21, L22, L23+L24 (cemented), L25 ──
    { label: "8", R: 148.41161, d: 3.0, nd: 1.59349, elemId: 5, sd: 20.4 },
    { label: "9", R: -517.10678, d: 0.1, nd: 1.0, elemId: 0, sd: 20.4 },
    { label: "10", R: 49.87002, d: 3.5, nd: 1.59349, elemId: 6, sd: 18.7 },
    { label: "11", R: 157.3519, d: 4.762, nd: 1.0, elemId: 0, sd: 18.7 },
    { label: "12", R: 87.49334, d: 4.8, nd: 1.59349, elemId: 7, sd: 19.0 }, // L23 front
    { label: "13", R: -132.224, d: 1.5, nd: 1.90366, elemId: 8, sd: 19.0 }, // L23→L24 junction
    { label: "14", R: 45.76622, d: 1.64, nd: 1.0, elemId: 0, sd: 15.6 },
    { label: "15", R: 78.93526, d: 4.45, nd: 1.7725, elemId: 9, sd: 15.6 },
    { label: "16", R: -176.75459, d: 7.735, nd: 1.0, elemId: 0, sd: 19.0 }, // D16 variable (focus)

    // ── G22 (relay, positive): L26 ──
    { label: "17", R: 57.14809, d: 5.3, nd: 1.816, elemId: 10, sd: 19.7 },
    { label: "18", R: -583.40702, d: 3.002, nd: 1.0, elemId: 0, sd: 19.7 }, // D18+FC1 gap, variable

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 2.088, nd: 1.0, elemId: 0, sd: 13.0 }, // D20 variable (non-monotonic)

    // ── G31 (intermediate, negative): L31, L32, L33 ──
    { label: "19", R: -141.85186, d: 1.2, nd: 1.804, elemId: 11, sd: 12.9 },
    { label: "20", R: 33.20059, d: 4.36, nd: 1.0, elemId: 0, sd: 11.2 },
    { label: "21", R: -33.72704, d: 1.2, nd: 1.603, elemId: 12, sd: 11.2 },
    { label: "22", R: -60.0953, d: 0.1, nd: 1.0, elemId: 0, sd: 14.9 },
    { label: "23", R: 65.48868, d: 3.15, nd: 1.84666, elemId: 13, sd: 15.0 },
    { label: "24", R: -127.25009, d: 1.25, nd: 1.0, elemId: 0, sd: 15.5 }, // D26 fixed

    // ── G32 (VR, negative): L34, L35 ──
    { label: "25", R: -119.24441, d: 1.1, nd: 1.59349, elemId: 14, sd: 15.7 },
    { label: "26", R: 67.70394, d: 1.15, nd: 1.0, elemId: 0, sd: 15.8 },
    { label: "27", R: 62.368, d: 2.1, nd: 1.80518, elemId: 15, sd: 16.3 },
    { label: "28", R: 107.42, d: 17.692, nd: 1.0, elemId: 0, sd: 16.5 }, // D30 variable

    // ── G4 (rear positive): L41 (ASP/ED), L42+L43 (cemented), L44+L45+L46 (cemented triplet) ──
    { label: "29A", R: 119.87584, d: 4.7, nd: 1.55332, elemId: 16, sd: 18.4 }, // L41 asph front
    { label: "30", R: -115.00129, d: 0.1, nd: 1.0, elemId: 0, sd: 19.0 },
    { label: "31", R: 71.95116, d: 1.4, nd: 1.83481, elemId: 17, sd: 19.0 }, // L42 front
    { label: "32", R: 38.488, d: 6.8, nd: 1.59319, elemId: 18, sd: 19.0 }, // L42→L43 junction
    { label: "33", R: -237.01429, d: 0.28, nd: 1.0, elemId: 0, sd: 19.0 },
    { label: "34", R: 43.00799, d: 9.5, nd: 1.49782, elemId: 19, sd: 19.0 }, // L44 front
    { label: "35", R: -42.999, d: 1.4, nd: 1.80518, elemId: 20, sd: 17.8 }, // L44→L45 junction
    { label: "36", R: 98.941, d: 4.6, nd: 1.6935, elemId: 21, sd: 17.7 }, // L45→L46 junction
    { label: "37A", R: 462.40647, d: 41.035, nd: 1.0, elemId: 0, sd: 17.4 }, // L46 asph rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "2A": {
      K: 0,
      A4: 2.2151e-6,
      A6: 2.5769e-9,
      A8: -6.015e-12,
      A10: 1.092e-14,
      A12: -7.29e-18,
      A14: 0,
    },
    "3A": {
      K: 1.0,
      A4: -3.8343e-7,
      A6: 7.9334e-10,
      A8: -3.5363e-12,
      A10: 5.0812e-15,
      A12: -3.4337e-18,
      A14: 0,
    },
    "29A": {
      K: 1.0,
      A4: 4.8089e-6,
      A6: 5.0698e-10,
      A8: -2.7314e-12,
      A10: -7.7815e-16,
      A12: 0,
      A14: 0,
    },
    "37A": {
      K: 1.0,
      A4: 7.5654e-6,
      A6: -9.886e-10,
      A8: 5.6174e-12,
      A10: -8.0775e-15,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom + focus) ── */
  var: {
    // G1 → G21: zoom + focus (G21 moves rearward +6.735 mm during focus)
    "7": [
      [48.945, 55.68],
      [10.93, 17.665],
      [1.902, 8.637],
    ],
    // G21 → G22: focus only (D16 decreases by 6.735 mm during focus)
    "16": [
      [7.735, 1.0],
      [7.735, 1.0],
      [7.735, 1.0],
    ],
    // G22 → STO: zoom only (= patent D18 + FC1 1.200 mm)
    "18": [
      [3.002, 3.002],
      [19.131, 19.131],
      [30.639, 30.639],
    ],
    // STO → G31: zoom only (non-monotonic: 2.088 → 4.668 → 3.620)
    STO: [
      [2.088, 2.088],
      [4.668, 4.668],
      [3.62, 3.62],
    ],
    // G32 → G4: zoom only
    "28": [
      [17.692, 17.692],
      [7.68, 7.68],
      [1.492, 1.492],
    ],
    // G4 → image (BFD): zoom only (= patent D39 + D40/FC2)
    "37A": [
      [41.035, 41.035],
      [48.522, 48.522],
      [55.686, 55.686],
    ],
  },

  varLabels: [
    ["7", "D7"],
    ["16", "D16"],
    ["18", "D18"],
    ["STO", "D20"],
    ["28", "D30"],
    ["37A", "BF"],
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [24.8, 50.01, 67.85],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (+)", fromSurface: "8", toSurface: "18" },
    { text: "G3 (−)", fromSurface: "19", toSurface: "28" },
    { text: "G4 (+)", fromSurface: "29A", toSurface: "37A" },
  ],

  doublets: [
    { text: "H1", fromSurface: "3A", toSurface: "5" },
    { text: "Ja", fromSurface: "12", toSurface: "14" },
    { text: "Jb", fromSurface: "31", toSurface: "33" },
    { text: "Tc", fromSurface: "34", toSurface: "37A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.38,
  focusDescription:
    "Inner focus: G21 (L21–L25, 5 elements) moves rearward 6.735 mm. Front element and rear group fixed during focus.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
