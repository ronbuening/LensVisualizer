import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PANASONIC LUMIX S PRO 24-70mm f/2.8                          ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 2021/0055531 A1, First Embodiment / Numerical Example 1.      ║
 * ║  Strong production correlation; the patent does not name the retail lens.  ║
 * ║  18 elements / 16 air-separated groups / 7 functional zoom groups.        ║
 * ║  Six aspherical surfaces on L5, L14, and L16.                              ║
 * ║                                                                            ║
 * ║  ZOOM MODEL: published infinity states at 24.8400, 40.8776, and            ║
 * ║  67.5503 mm. D6, D14, D25, and D37 are zoom-only. D29, D31, and D33       ║
 * ║  carry the published dual-group focus motion. D33 decreases wide-to-mid   ║
 * ║  and then increases slightly toward tele.                                  ║
 * ║                                                                            ║
 * ║  FOCUS STATUS: PUBLISHED. G5 moves imageward and G6 objectward from        ║
 * ║  infinity to the shortest shooting range; G7 remains fixed.                ║
 * ║                                                                            ║
 * ║  SOURCE NORMALIZATION: the two explicitly published 0.01000 mm adhesive   ║
 * ║  media were collapsed to direct cemented junctions required by the        ║
 * ║  current schema. Their thicknesses were retained in D2 = 3.57220 mm and   ║
 * ║  D19 = 1.01000 mm. The sensor-cover plate was omitted. D37 includes the   ║
 * ║  plate's 2.1/1.5168 mm air-equivalent thickness plus the 1.0 mm BF.       ║
 * ║  No uniform scale factor was applied.                                      ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: not published. They were derived from exact meridional   ║
 * ║  Snell tracing of axial marginal rays, the full-field chief ray, Figure 1 ║
 * ║  default 0.6-field bundle, an additional 0.8-field bundle, and published  ║
 * ║  close-focus states. The STO sd stores the wide-state f/2.92728 result;   ║
 * ║  runtime zoom construction resolves the larger middle/tele stop openings. ║
 * ║  Validation gives 0.986 mm minimum edge thickness, 56.46° maximum rim    ║
 * ║  angle, 0.040 mm minimum physical gap clearance, 0.126 mm minimum        ║
 * ║  selected-ray clearance, and no required render trim.                     ║
 * ║                                                                            ║
 * ║  The patent publishes no nC, nF, ng, PgF, or dPgF values. None are         ║
 * ║  invented, and no APO or anomalous-dispersion claim is encoded.           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "panasonic-lumix-s-pro-24-70mm-f28",
  maker: "Panasonic",
  name: "PANASONIC LUMIX S PRO 24-70mm f/2.8",
  subtitle: "US 2021/0055531 A1 — First Embodiment / Numerical Example 1 (strong correlation)",
  specs: [
    "18 ELEMENTS / 16 GROUPS",
    "DESIGN 24.840-67.551 mm",
    "F/2.927 MODELED",
    "3 ASPHERICAL ELEMENTS / 6 ASPHERICAL SURFACES",
    "PUBLISHED DUAL-GROUP FOCUS",
  ],

  focalLengthMarketing: [24, 70],
  focalLengthDesign: [24.840237, 67.550992],
  apertureMarketing: 2.8,
  apertureDesign: 2.92728,
  lensMounts: ["l-mount"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2021/0055531 A1",
  patentAuthors: ["Genki Nakazawa", "Takao Yamanaka", "Yoshiaki Kurioka"],
  patentAssignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  patentYear: 2021,
  elementCount: 18,
  groupCount: 16,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus, convex to object",
      nd: 1.92286,
      vd: 20.9,
      fl: -290.49231,
      glass: "N-SF66 (SCHOTT)",
      cemented: "D1",
      role: "Negative front member of the weakly negative front cemented pair.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus, convex to object",
      nd: 1.8042,
      vd: 46.5,
      fl: 335.272332,
      glass: "N-LASF44 (SCHOTT)",
      cemented: "D1",
      role: "Positive crown partner in the front cemented pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus, convex to object",
      nd: 1.7725,
      vd: 49.6,
      fl: 114.759906,
      glass: "773496 — lanthanum crown class (vendor unresolved)",
      role: "Air-spaced positive element completing functional zoom group G1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus, convex to object",
      nd: 1.713,
      vd: 53.9,
      fl: -31.10557,
      glass: "713539 — lanthanum crown class (vendor unresolved)",
      role: "Strong front negative member of variator group G2.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.80998,
      vd: 40.9,
      fl: -41.692986,
      glass: "K-VC89 (Sumita catalog-equivalent; supplier not identified)",
      role: "Aspherical negative element in G2; both surfaces are aspheric.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 46.611745,
      glass: "847238 — dense flint class (vendor unresolved)",
      role: "Positive internal member that moderates the net negative power of G2.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus, concave to object",
      nd: 1.48749,
      vd: 70.4,
      fl: -124.310409,
      glass: "487704 — fluor crown class (vendor unresolved)",
      role: "Low-dispersion rear negative member of G2 immediately before the stop gap.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus, convex to object",
      nd: 1.92286,
      vd: 20.9,
      fl: 61.043966,
      glass: "N-SF66 (SCHOTT)",
      role: "High-index first positive element of the stop-bearing G3 relay.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 62.232374,
      glass: "497816 — ED fluorophosphate crown class (vendor unresolved)",
      cemented: "D2",
      role: "Low-dispersion positive member of the G3 cemented pair.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.92119,
      vd: 24,
      fl: -41.46839,
      glass: "FDS24 (Hoya catalog-equivalent; supplier not identified)",
      cemented: "D2",
      role: "High-index negative partner in the G3 cemented pair.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 57.21561,
      glass: "497816 — ED fluorophosphate crown class (vendor unresolved)",
      role: "Second high-Abbe positive element in G3.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      fl: -73.992657,
      glass: "847238 — dense flint class (vendor unresolved)",
      role: "Negative rear element completing G3.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      fl: 37.068898,
      glass: "FCD705 (HOYA)",
      role: "Low-dispersion positive element providing most of G4's useful power.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus, convex to object (2× Asph)",
      nd: 1.80998,
      vd: 40.9,
      fl: 512.704713,
      glass: "K-VC89 (Sumita catalog-equivalent; supplier not identified)",
      role: "Weak positive aspherical meniscus at the rear of G4.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus, convex to object",
      nd: 1.83481,
      vd: 42.7,
      fl: -51.845583,
      glass: "835427 — lanthanum dense-flint class (vendor unresolved)",
      role: "Single-element negative focus group G5 moving imageward at close focus.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus, convex to object (2× Asph)",
      nd: 1.68948,
      vd: 31,
      fl: -120.094701,
      glass: "L-TIM28 (OHARA)",
      role: "Aspherical negative focus group G6 moving objectward at close focus.",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 39.946411,
      glass: "847238 — dense flint class (vendor unresolved)",
      role: "Positive front member of the fixed-during-focus rear relay G7.",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.3,
      fl: -85.912081,
      glass: "954323 — high-index lanthanum class (vendor unresolved)",
      role: "High-index negative rear element completing G7.",
    },
  ],

  surfaces: [
    { label: "1", R: 390.1047, d: 1.8, nd: 1.92286, elemId: 1, sd: 31.5 },
    { label: "2", R: 158.5399, d: 3.5722, nd: 1.8042, elemId: 2, sd: 30.5 },
    { label: "4", R: 380.9402, d: 0.3, nd: 1.0, elemId: 0, sd: 29.5 },
    { label: "5", R: 69.9519, d: 6.839, nd: 1.7725, elemId: 3, sd: 27.5 },
    { label: "6", R: 317.492, d: 1.0, nd: 1.0, elemId: 0, sd: 26.0 },
    { label: "7", R: 119.0191, d: 1.5, nd: 1.713, elemId: 4, sd: 20.0 },
    { label: "8", R: 18.5966, d: 11.3922, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "9A", R: -46.65, d: 1.5, nd: 1.80998, elemId: 5, sd: 13.5 },
    { label: "10A", R: 124.0778, d: 1.0662, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "11", R: 104.8836, d: 7.9601, nd: 1.84666, elemId: 6, sd: 13.0 },
    { label: "12", R: -61.0696, d: 3.442, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "13", R: -24.337, d: 1.0, nd: 1.48749, elemId: 7, sd: 13.5 },
    { label: "14", R: -41.2178, d: 25.9929, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "STO", R: 1e15, d: 2.5, nd: 1.0, elemId: 0, sd: 10.123452 },
    { label: "16", R: 46.2057, d: 4.6622, nd: 1.92286, elemId: 8, sd: 15.0 },
    { label: "17", R: 244.5319, d: 3.7297, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "18", R: 47.1131, d: 5.5575, nd: 1.497, elemId: 9, sd: 15.0 },
    { label: "19", R: -86.5145, d: 1.01, nd: 1.92119, elemId: 10, sd: 15.0 },
    { label: "21", R: 68.7867, d: 0.5, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "22", R: 36.5554, d: 6.2042, nd: 1.497, elemId: 11, sd: 16.5 },
    { label: "23", R: -120.8146, d: 0.3659, nd: 1.0, elemId: 0, sd: 14.8 },
    { label: "24", R: -89.2445, d: 1.0, nd: 1.84666, elemId: 12, sd: 14.8 },
    { label: "25", R: 211.2796, d: 3.5926, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "26", R: 28.4543, d: 8.4601, nd: 1.55032, elemId: 13, sd: 16.5 },
    { label: "27", R: -64.4603, d: 0.5, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "28A", R: 344.0162, d: 1.8, nd: 1.80998, elemId: 14, sd: 15.0 },
    { label: "29A", R: 2000.0, d: 2.977, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "30", R: 94.1443, d: 1.0, nd: 1.83481, elemId: 15, sd: 13.0 },
    { label: "31", R: 29.5068, d: 11.0043, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "32A", R: 44.2417, d: 1.5, nd: 1.68948, elemId: 16, sd: 14.5 },
    { label: "33A", R: 28.4361, d: 3.5504, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "34", R: 55.4225, d: 5.6953, nd: 1.84666, elemId: 17, sd: 16.0 },
    { label: "35", R: -82.6857, d: 1.3097, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "36", R: -160.4704, d: 1.2, nd: 1.95375, elemId: 18, sd: 16.5 },
    { label: "37", R: 168.0432, d: 21.300693671, nd: 1.0, elemId: 0, sd: 16.5 },
  ],

  asph: {
    "9A": {
      K: 2.77311e-1,
      A4: 5.79744e-6,
      A6: -6.69046e-8,
      A8: 5.10351e-10,
      A10: -1.99835e-12,
      A12: 3.11855e-15,
      A14: 0,
    },
    "10A": {
      K: -1.0,
      A4: -2.30482e-6,
      A6: -7.10387e-8,
      A8: 5.08729e-10,
      A10: -2.06473e-12,
      A12: 3.1411e-15,
      A14: 0,
    },
    "28A": {
      K: 1.0,
      A4: -6.70134e-6,
      A6: 1.60358e-7,
      A8: -2.23219e-10,
      A10: -1.78175e-12,
      A12: 3.19782e-15,
      A14: 0,
    },
    "29A": {
      K: 1.0,
      A4: 1.30709e-5,
      A6: 1.8836e-7,
      A8: -2.3032e-10,
      A10: -1.1394e-12,
      A12: 1.07849e-16,
      A14: 0,
    },
    "32A": {
      K: -1.0,
      A4: -6.49741e-5,
      A6: 3.26474e-7,
      A8: -1.14181e-9,
      A10: 2.4279e-12,
      A12: -2.35868e-15,
      A14: 0,
    },
    "33A": {
      K: 9.97939e-1,
      A4: -7.70073e-5,
      A6: 3.236e-7,
      A8: -1.22916e-9,
      A10: 2.63417e-12,
      A12: -2.84998e-15,
      A14: 0,
    },
  },

  zoomPositions: [24.84, 40.8776, 67.5503],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  var: {
    "6": [
      [1.0, 1.0],
      [13.4445, 13.4445],
      [27.5307, 27.5307],
    ],
    "14": [
      [25.9929, 25.9929],
      [10.8551, 10.8551],
      [0.6543, 0.6543],
    ],
    "25": [
      [3.5926, 3.5926],
      [1.5593, 1.5593],
      [1.0, 1.0],
    ],
    "29A": [
      [2.977, 5.1768],
      [3.6205, 7.2082],
      [4.8909, 11.7536],
    ],
    "31": [
      [11.0043, 4.8064],
      [12.9949, 5.3038],
      [16.4729, 4.8064],
    ],
    "33A": [
      [3.5504, 7.5486],
      [2.6123, 6.7157],
      [2.6369, 7.4408],
    ],
    "37": [
      [21.300693671, 21.300693671],
      [31.373993671, 31.373993671],
      [40.595293671, 40.595293671],
    ],
  },
  varLabels: [
    ["6", "D6 / G1-G2"],
    ["14", "D14 / G2-STO"],
    ["25", "D25 / G3-G4"],
    ["29A", "D29 / G4-G5 / FOCUS"],
    ["31", "D31 / G5-G6 / FOCUS"],
    ["33A", "D33 / G6-G7 / FOCUS"],
    ["37", "AIR-EQUIVALENT REAR SPACING"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (-)", fromSurface: "7", toSurface: "14" },
    { text: "G3 (+) / STO", fromSurface: "STO", toSurface: "25" },
    { text: "G4 (+)", fromSurface: "26", toSurface: "29A" },
    { text: "G5 (-) / FOCUS", fromSurface: "30", toSurface: "31" },
    { text: "G6 (-) / FOCUS", fromSurface: "32A", toSurface: "33A" },
    { text: "G7 (+)", fromSurface: "34", toSurface: "37" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "4" },
    { text: "D2", fromSurface: "18", toSurface: "21" },
  ],

  closeFocusM: 0.37,
  focusDescription:
    "PUBLISHED dual-group focus. From infinity to the patent shortest-range state, negative G5 moves imageward " +
    "and negative G6 moves objectward while G7 remains fixed. The published object-to-image-plane distance is " +
    "approximately 0.371-0.375 m across the three zoom states; Panasonic markets 0.37 m minimum focus.",

  // Preserve the patent's tiny per-state f-number variation; this is not a marketed variable-aperture claim.
  nominalFno: [2.92728, 2.92703, 2.92709],
  fstopSeries: [2.92728, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 11,
  apertureBladeRoundedness: 1,

  scFill: 0.67,
  yScFill: 0.7,
} satisfies LensDataInput;

export default LENS_DATA;
