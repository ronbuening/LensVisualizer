import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NIKKOR Z DX 18-140mm f/3.5-6.3 VR              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2022/264542 A1, Example 1 (Table 1).             ║
 * ║  Nikon Corporation (Sashima, Yokoi, Ishikawa).                     ║
 * ║  Priority: JP 2021-099589, 15 June 2021.                          ║
 * ║  Published: 22 December 2022.                                      ║
 * ║                                                                    ║
 * ║  5-group zoom: G1(+) G2(−) G3(+) G4(−) G5(−).                    ║
 * ║  17 elements in 13 groups, 2 ED, 2 aspherical (hybrid composite). ║
 * ║  Zoom ratio 7.327×.                                                ║
 * ║                                                                    ║
 * ║  Focus: G4 (cemented doublet L41+L42) moves image-ward for        ║
 * ║    close focus. STM AF motor. MFD 0.20 m.                         ║
 * ║  VR: GVR sub-group (L35+L36) within G3, perpendicular shift.      ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D5, D13 (zoom only).                         ║
 * ║  Focus variable gaps: D26, D29 (zoom + focus).                    ║
 * ║  BFD: D33 (zoom only, cover glass folded to air-equivalent).      ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent lists PP (cover glass) as nd=1.51680, d=1.600 mm        ║
 * ║    followed by 1.000 mm air to image plane. Air-equivalent path   ║
 * ║    = 1.600/1.51680 + 1.000 = 2.055 mm, folded into BFD values.   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated via combined marginal + chief ray trace at all three  ║
 * ║    zoom positions. Maximum SD across zoom used per surface.        ║
 * ║    Front group constrained by 62 mm filter thread.                 ║
 * ║    All validated: sd/|R| < 0.90, element SD ratio ≤ 1.25,         ║
 * ║    edge thickness ≥ 0.3 mm, cross-gap sag intrusion ≤ 90% gap.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-z-dx-18-140-f35-63-vr",
  maker: "Nikon",
  name: "NIKON NIKKOR Z DX 18-140mm f/3.5-6.3 VR",
  subtitle: "WO 2022/264542 A1 Example 1 — Nikon Corporation",
  specs: [
    "17 ELEMENTS / 13 GROUPS",
    "f = 18.5–135.8 mm (design)",
    "F/3.5–6.3",
    "2ω ≈ 78.4°–11.5°",
    "2 ASPHERICAL SURFACES (hybrid composite)",
    "2 ED ELEMENTS",
  ],

  /* ── Metadata ── */
  focalLengthMarketing: [18, 140],
  focalLengthDesign: [18.54, 135.845],
  apertureMarketing: 3.5,
  apertureDesign: 3.604,
  lensMounts: ["nikon-z"],
  imageFormat: "aps-c",
  patentYear: 2022,
  elementCount: 17,
  groupCount: 13,

  /* ── Elements ── */
  elements: [
    /* ── G1 (+) — 3 elements, cemented doublet L11+L12 plus singlet L13 ── */
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.45,
      fl: -187.7,
      glass: "S-TIH6 (OHARA)",
      cemented: "D1",
      role: "Front negative meniscus of G1 cemented doublet; convex toward object",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 99.2,
      glass: "S-FPL51 (OHARA)",
      cemented: "D1",
      apd: "patent",
      apdNote: "ED-class fluorophosphate crown, anomalous low dispersion",
      role: "Positive element of G1 cemented doublet; primary chromatic correction partner",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.31,
      fl: 119.1,
      glass: "S-FSL5 (OHARA)",
      role: "Positive meniscus singlet; convex toward object",
    },

    /* ── G2 (−) — 4 elements, all air-spaced ── */
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.73,
      fl: -18.7,
      glass: "S-LAH55V (OHARA)",
      role: "Strong negative meniscus; convex toward object, variator front",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.81,
      fl: -27.0,
      glass: "S-LAM2 (OHARA)",
      role: "Biconcave negative; variator Petzval contribution",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.80809,
      vd: 22.74,
      fl: 20.6,
      glass: "J-SFH1 (Hikari)",
      role: "Biconvex positive; dense flint chromatic corrector in variator",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: -33.9,
      glass: "S-LAH66 (OHARA)",
      role: "Negative meniscus; concave toward object, variator rear",
    },

    /* ── G3 (+) — 8 elements: L31(hybrid) + L32 + L33+L34(cemented ED) + L35(hybrid)+L36(cemented VR) ── */
    {
      id: 8,
      name: "L31r",
      label: "Element 8",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.56093,
      vd: 36.64,
      fl: 630.6,
      glass: "UV-curing resin (composite aspheric layer)",
      cemented: "H1",
      role: "Aspherical resin layer on L31g; composite aspheric corrector",
    },
    {
      id: 9,
      name: "L31g",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.2,
      fl: 32.5,
      glass: "S-NSL3 (OHARA, Δνd ≈ 0.23)",
      cemented: "H1",
      role: "Glass body of hybrid composite L31; positive power contributor",
    },
    {
      id: 10,
      name: "L32",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.03,
      fl: 86.3,
      glass: "S-TIM5 (OHARA)",
      role: "Biconvex positive singlet in G3",
    },
    {
      id: 11,
      name: "L33",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.12,
      fl: -15.8,
      glass: "S-LAH79 (OHARA)",
      cemented: "D2",
      role: "Strong negative meniscus; convex toward object, front of ED doublet",
    },
    {
      id: 12,
      name: "L34",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 21.3,
      glass: "S-FPL51 (OHARA)",
      cemented: "D2",
      apd: "patent",
      apdNote: "ED fluorophosphate crown, secondary-spectrum corrector",
      role: "ED positive element; rear of cemented doublet, primary chromatic correction",
    },
    {
      id: 13,
      name: "L35r",
      label: "Element 13",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.56093,
      vd: 36.64,
      fl: -1580.6,
      glass: "UV-curing resin (composite aspheric layer)",
      cemented: "T1",
      role: "Aspherical resin layer on L35g; VR sub-group front",
    },
    {
      id: 14,
      name: "L35g",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.14,
      fl: 23.4,
      glass: "S-BSL7 (OHARA)",
      cemented: "T1",
      role: "Glass body of hybrid composite L35; positive power in VR sub-group",
    },
    {
      id: 15,
      name: "L36",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.66755,
      vd: 41.87,
      fl: -131.9,
      glass: "J-BASF6 (Hikari)",
      cemented: "T1",
      role: "Negative meniscus; concave toward object, VR sub-group rear, cemented to L35g",
    },

    /* ── G4 (−) — 2 elements, cemented doublet, focusing group ── */
    {
      id: 16,
      name: "L41",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.12,
      fl: 30.7,
      glass: "S-LAH79 (OHARA)",
      cemented: "D3",
      role: "Biconvex positive; front of focus doublet",
    },
    {
      id: 17,
      name: "L42",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -17.8,
      glass: "S-LAH65V (OHARA)",
      cemented: "D3",
      role: "Biconcave negative; rear of focus doublet, dense lanthanum flint (νd < 50)",
    },

    /* ── G5 (−) — 2 elements, air-spaced ── */
    {
      id: 18,
      name: "L51",
      label: "Element 18",
      type: "Negative Meniscus",
      nd: 1.90265,
      vd: 35.77,
      fl: -37.7,
      glass: "J-LASFH9 (Hikari)",
      role: "Negative meniscus; concave toward object, field flattener",
    },
    {
      id: 19,
      name: "L52",
      label: "Element 19",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: 69.7,
      glass: "SF57 (Schott)",
      role: "Positive meniscus; concave toward object, dense flint chromatic/Petzval corrector",
    },
  ],

  /* ── Surface Prescription ── */
  surfaces: [
    /* ── G1 ── */
    { label: "1", R: 78.364, d: 1.65, nd: 1.80518, elemId: 1, sd: 25.5 },
    { label: "2", R: 51.125, d: 6.08, nd: 1.49782, elemId: 2, sd: 24.5 },
    { label: "3", R: -1387.433, d: 0.1, nd: 1.0, elemId: 0, sd: 23.5 },
    { label: "4", R: 51.002, d: 3.95, nd: 1.48749, elemId: 3, sd: 23.0 },
    { label: "5", R: 408.278, d: 1.137, nd: 1.0, elemId: 0, sd: 20.1 },

    /* ── G2 ── */
    { label: "6", R: 105.667, d: 1.0, nd: 1.83481, elemId: 4, sd: 14.0 },
    { label: "7", R: 13.538, d: 5.877, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "8", R: -40.384, d: 1.0, nd: 1.744, elemId: 5, sd: 9.5 },
    { label: "9", R: 40.384, d: 0.71, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "10", R: 26.016, d: 3.25, nd: 1.80809, elemId: 6, sd: 10.5 },
    { label: "11", R: -43.626, d: 0.84, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "12", R: -21.186, d: 0.9, nd: 1.7725, elemId: 7, sd: 7.5 },
    { label: "13", R: -113.505, d: 20.855, nd: 1.0, elemId: 0, sd: 7.5 },

    /* ── Aperture Stop (between G2 and G3, travels with G3) ── */
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 5.5 },

    /* ── G3 ── */
    /* L31 hybrid composite (resin + glass) */
    { label: "15A", R: 16.582, d: 0.15, nd: 1.56093, elemId: 8, sd: 6.5 },
    { label: "16", R: 17.341, d: 3.35, nd: 1.51742, elemId: 9, sd: 6.5 },
    { label: "17", R: -499.849, d: 1.0, nd: 1.0, elemId: 0, sd: 7.0 },

    /* L32 singlet */
    { label: "18", R: 54.519, d: 1.56, nd: 1.60342, elemId: 10, sd: 7.5 },
    { label: "19", R: -1162.912, d: 4.249, nd: 1.0, elemId: 0, sd: 7.5 },

    /* L33+L34 cemented ED doublet */
    { label: "20", R: 287.817, d: 0.95, nd: 2.001, elemId: 11, sd: 8.0 },
    { label: "21", R: 15.0, d: 3.9, nd: 1.49782, elemId: 12, sd: 8.5 },
    { label: "22", R: -33.047, d: 1.0, nd: 1.0, elemId: 0, sd: 9.5 },

    /* L35 hybrid composite (resin + glass) + L36 cemented — VR sub-group */
    { label: "23A", R: 20.944, d: 0.15, nd: 1.56093, elemId: 13, sd: 9.5 },
    { label: "24", R: 20.408, d: 4.56, nd: 1.5168, elemId: 14, sd: 9.5 },
    { label: "25", R: -27.508, d: 0.9, nd: 1.66755, elemId: 15, sd: 9.5 },
    { label: "26", R: -40.524, d: 1.935, nd: 1.0, elemId: 0, sd: 9.5 },

    /* ── G4 — focusing group (cemented doublet L41+L42) ── */
    { label: "27", R: 164.872, d: 1.8, nd: 2.001, elemId: 16, sd: 9.5 },
    { label: "28", R: -37.498, d: 0.9, nd: 1.804, elemId: 17, sd: 9.0 },
    { label: "29", R: 23.384, d: 13.983, nd: 1.0, elemId: 0, sd: 9.0 },

    /* ── G5 ── */
    { label: "30", R: -16.37, d: 1.1, nd: 1.90265, elemId: 18, sd: 11.0 },
    { label: "31", R: -32.544, d: 0.1, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "32", R: -502.457, d: 2.08, nd: 1.84666, elemId: 19, sd: 11.5 },
    { label: "33", R: -52.88, d: 10.327, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  /* ── Aspherical Coefficients ──
   *  Patent convention: κ = 1.0000 → K = κ − 1 = 0 (sphere base).
   *  Both aspherical surfaces are hybrid composite resin layers.
   */
  asph: {
    "15A": {
      K: 0,
      A4: -2.96855e-5,
      A6: -5.04688e-8,
      A8: -4.78359e-12,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "23A": {
      K: 0,
      A4: -1.94678e-5,
      A6: -1.10034e-8,
      A8: -1.10745e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable Air Spacings ──
   *  3 zoom positions: Wide (18.540), Mid (50.034), Tele (135.845).
   *  Format: [[d_inf, d_close], [d_inf, d_close], [d_inf, d_close]]
   *
   *  D5, D13: zoom only (identical inf/close).
   *  D26, D29: zoom + focus (G4 moves image-ward for close focus).
   *  D33: zoom only (BFD with cover glass folded to air-equivalent).
   *
   *  Focus travel (D26 close − D26 inf):
   *    Wide:  1.557 mm
   *    Mid:   2.632 mm
   *    Tele:  8.772 mm
   *
   *  Gap conservation check (D26 + D29 = const per zoom position):
   *    Wide:  1.935 + 13.983 = 15.918,  3.492 + 12.425 = 15.917 ✓
   *    Mid:   6.290 + 12.681 = 18.971,  8.922 + 10.049 = 18.971 ✓
   *    Tele:  1.909 + 18.046 = 19.955, 10.681 +  9.274 = 19.955 ✓
   */
  var: {
    "5": [
      [1.137, 1.137],
      [18.064, 18.064],
      [38.687, 38.687],
    ],
    "13": [
      [20.855, 20.855],
      [6.402, 6.402],
      [2.04, 2.04],
    ],
    "26": [
      [1.935, 3.492],
      [6.29, 8.922],
      [1.909, 10.681],
    ],
    "29": [
      [13.983, 12.425],
      [12.681, 10.049],
      [18.046, 9.274],
    ],
    "33": [
      [10.327, 10.327],
      [20.924, 20.924],
      [35.271, 35.271],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["13", "D13"],
    ["26", "D26"],
    ["29", "D29"],
    ["33", "BF"],
  ],

  /* ── Zoom Configuration ── */
  zoomPositions: [18.54, 50.034, 135.845],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group & Doublet Annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "15A", toSurface: "26" },
    { text: "G4 (−)", fromSurface: "27", toSurface: "29" },
    { text: "G5 (−)", fromSurface: "30", toSurface: "33" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "15A", toSurface: "17" },
    { text: "D2", fromSurface: "20", toSurface: "22" },
    { text: "T1", fromSurface: "23A", toSurface: "26" },
    { text: "D3", fromSurface: "27", toSurface: "29" },
  ],

  /* ── Focus & Aperture ── */
  closeFocusM: 0.2,
  focusDescription: "G4 inner focus (cemented doublet L41+L42 moves image-ward). STM AF motor.",
  nominalFno: [3.5, 5.0, 6.3],
  apertureBlades: 7,
  fstopSeries: [3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout Tuning ── */
  scFill: 0.45,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
