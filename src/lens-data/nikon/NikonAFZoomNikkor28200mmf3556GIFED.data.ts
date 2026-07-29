import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  NIKON AF ZOOM-NIKKOR 28-200mm f/3.5-5.6 G IF-ED                        ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 6,621,643 B2, Example 1 (Haruo Sato / Nikon).            ║
 * ║  Four-group positive-negative-positive-positive zoom.                      ║
 * ║  12 physical elements / 11 groups; 14 refractive material layers are      ║
 * ║  modeled because each of two hybrid aspheres contains resin and glass.     ║
 * ║  Four aspherical surfaces on three physical components.                    ║
 * ║                                                                            ║
 * ║  Production correlation: Nikon's 28-200mm f/3.5-5.6 G IF-ED. Marketing    ║
 * ║  values remain separate from the unscaled patent design (29.1-192 mm,      ║
 * ║  f/3.6-5.9, 0.430 m image-plane-normalized close distance).                ║
 * ║                                                                            ║
 * ║  Zoom gaps: D5, D14, D21, and computed BF. All four optical groups move    ║
 * ║  independently from wide to telephoto; no group reverses across the three  ║
 * ║  published zoom stations.                                                  ║
 * ║  Focus status: PUBLISHED. G2 translates toward the object; D5 decreases    ║
 * ║  while D14 increases by the same amount. D21 is unchanged. The final BF    ║
 * ║  values are independently solved from the published infinity rows and are  ║
 * ║  retained for both infinity and close states to represent the fixed image  ║
 * ║  plane (largest finite-state BF residual: 0.00052 mm).                     ║
 * ║                                                                            ║
 * ║  Scale: 1:1. No prescription scaling or asphere-coefficient scaling.        ║
 * ║  Patent conic coefficient κ was converted to standard K = κ - 1. Odd       ║
 * ║  polynomial orders are radial |h| terms and remain rotationally symmetric. ║
 * ║                                                                            ║
 * ║  Source surface 24 (fixed stop SF) is an optically neutral, coincident      ║
 * ║  flare-cutter plane with no published clear diameter. It is omitted from   ║
 * ║  the sequential model; its following 7.8500 mm air spacing is assigned to  ║
 * ║  surface 23A without changing axial position. Surface 15 is the sole STO.   ║
 * ║                                                                            ║
 * ║  Semi-diameters are modeled, not patent-published. They were constrained    ║
 * ║  by exact d-line axial marginal rays, representative 0.6-field bundles,     ║
 * ║  finite-focus axial rays, positive edge thickness, actual aspheric rim      ║
 * ║  slope, conic domains, shared-band cross-gap clearance, and render trim.    ║
 * ║  The authored STO radius reproduces the wide-state f/3.6 pupil; runtime     ║
 * ║  zoom states derive their physical stop radii from nominalFno. A 0.915      ║
 * ║  gap-sag fraction retains the tele axial marginal ray at S19 while leaving  ║
 * ║  0.242 mm of real shared-band clearance to S20; no overlap is hidden.       ║
 * ║  The 2026-07-29 Figure 1 pass narrowed surfaces 4/5 and enlarged the        ║
 * ║  hybrid L21 envelope at 6A/7/8.                                             ║
 * ║                                                                            ║
 * ║  Authored nC/nF/ng values are catalog-derived representative class data,    ║
 * ║  not patent-published line indices. They are omitted for J-FKH1-coordinate  ║
 * ║  ED, resin, and 517641 material. No dPgF or APO claim is encoded.            ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikkor-af-28-200-f3556-g-if-ed",
  name: "NIKON AF ZOOM-NIKKOR 28-200mm f/3.5-5.6 G IF-ED",
  maker: "Nikon",
  subtitle: "US 6,621,643 B2 Example 1 — production correlation",
  specs: [
    "12 physical elements / 11 groups (14 material layers modeled)",
    "Production: 28-200mm f/3.5-5.6",
    "Patent design: 29.1-192mm f/3.6-5.9",
    "3 ED elements",
    "3 aspherical components / 4 aspherical surfaces",
    "Published G2 inner focus; modeled close distance 0.430 m",
  ],
  focalLengthMarketing: [28, 200],
  focalLengthDesign: [29.09998834411014, 191.99848246522103],
  apertureMarketing: 3.5,
  apertureDesign: 3.6,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 6,621,643 B2",
  patentAuthors: ["Haruo Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2003,
  elementCount: 12,
  groupCount: 11,

  elements: [
    {
      id: 1,
      name: "L11a",
      label: "Element 1 — L11 front member",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -164.17297914344846,
      glass: "847238 — dense flint class",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
      cemented: "D1",
      role: "Negative front member of the cemented positive L11 doublet in G1.",
    },
    {
      id: 2,
      name: "L11b",
      label: "Element 2 — L11 rear member",
      type: "Positive Meniscus",
      nd: 1.64,
      vd: 60.09,
      fl: 81.42893994621147,
      glass: "J-LAK01 (Hikari; patent code 640601)",
      nC: 1.63673,
      nF: 1.64738,
      ng: 1.65311,
      cemented: "D1",
      role: "Positive rear member of the cemented L11 doublet; the doublet is net positive.",
    },
    {
      id: 3,
      name: "L12",
      label: "Element 3 — L12",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      fl: 151.5125683899441,
      glass: "J-FKH1 (Hikari; patent code 498825)",
      role: "ED-class positive meniscus completing the positive first zoom group.",
    },
    {
      id: 4,
      name: "L21r",
      label: "Element 4 — L21 resin layer",
      type: "Negative Meniscus (1× Asph, Hybrid Resin)",
      nd: 1.55389,
      vd: 38.09,
      fl: -1328.9831582015638,
      glass: "Unmatched (optical resin, nd=1.553890, νd=38.09)",
      cemented: "H1",
      role: "Thin molded aspherical resin layer bonded to the front of the L21 glass body.",
    },
    {
      id: 5,
      name: "L21g",
      label: "Element 5 — L21 glass body",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: -21.60548475091962,
      glass: "835427 — lanthanum flint class",
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
      cemented: "H1",
      role: "Strong negative glass body of the hybrid L21 component and leading member of G2.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6 — L22",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.61,
      fl: -34.79028637448224,
      glass: "773496 — lanthanum flint class",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      role: "Biconcave negative member of the focusing second group.",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7 — L23",
      type: "Biconvex Positive",
      nd: 1.80809,
      vd: 22.76,
      fl: 22.399171962952053,
      glass: "808228 — very dense flint class",
      nC: 1.79801,
      nF: 1.83351,
      ng: 1.8559,
      role: "High-index, low-Abbe positive member specified by the patent conditions np and νp.",
    },
    {
      id: 8,
      name: "L24",
      label: "Element 8 — L24",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.61,
      fl: -31.072109903142003,
      glass: "773496 — lanthanum flint class",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      role: "Rear negative member of G2; G2 translates as a rigid inner-focus group.",
    },
    {
      id: 9,
      name: "L31",
      label: "Element 9 — L31",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      fl: 30.868873016620665,
      glass: "J-FKH1 (Hikari; patent code 498825)",
      role: "Strong ED-class positive element immediately behind the aperture stop.",
    },
    {
      id: 10,
      name: "L32",
      label: "Element 10 — L32",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      fl: 95.55735685796363,
      glass: "J-FKH1 (Hikari; patent code 498825)",
      role: "ED-class positive meniscus in G3.",
    },
    {
      id: 11,
      name: "L33",
      label: "Element 11 — L33",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -53.55771808470057,
      glass: "847238 — dense flint class",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
      role: "Negative rear member of the net-positive third group.",
    },
    {
      id: 12,
      name: "L1",
      label: "Element 12 — Gm L1",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.5168,
      vd: 64.1,
      fl: 44.52852898972637,
      glass: "517641 — borosilicate crown class",
      role: "Double-aspherical positive element at the front of the compact master group Gm.",
    },
    {
      id: 13,
      name: "L2r",
      label: "Element 13 — Gm L2 resin layer",
      type: "Positive Meniscus (1× Asph, Hybrid Resin)",
      nd: 1.55389,
      vd: 38.09,
      fl: 265.96112672439915,
      glass: "Unmatched (optical resin, nd=1.553890, νd=38.09)",
      cemented: "H2",
      role: "Thin molded aspherical resin layer bonded to the object side of the final negative component.",
    },
    {
      id: 14,
      name: "L2g",
      label: "Element 14 — Gm L2 glass body",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.58,
      fl: -69.00473964761939,
      glass: "804466 — lanthanum flint class",
      nC: 1.79882,
      nF: 1.81608,
      ng: 1.82569,
      cemented: "H2",
      role: "Negative glass body of the final hybrid component; the bonded L2 assembly is net negative.",
    },
  ],

  surfaces: [
    { label: "1", R: 85.2964, d: 1.8, nd: 1.84666, elemId: 1, sd: 25.5 },
    { label: "2", R: 52.3479, d: 6.8, nd: 1.64, elemId: 2, sd: 25.5 },
    { label: "3", R: -11096.962, d: 0.1, nd: 1.0, elemId: 0, sd: 25.5 },
    { label: "4", R: 57.2728, d: 3.85, nd: 1.49782, elemId: 3, sd: 19.0 },
    { label: "5", R: 232.6502, d: 2.16928, nd: 1.0, elemId: 0, sd: 19.0 },
    { label: "6A", R: 113.7061, d: 0.05, nd: 1.55389, elemId: 4, sd: 12.5 },
    { label: "7", R: 98.4767, d: 1.6, nd: 1.83481, elemId: 5, sd: 12.5 },
    { label: "8", R: 15.1317, d: 4.8, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "9", R: -49.006, d: 0.9, nd: 1.7725, elemId: 6, sd: 8.6 },
    { label: "10", R: 59.9897, d: 0.1, nd: 1.0, elemId: 0, sd: 8.6 },
    { label: "11", R: 25.8325, d: 3.5, nd: 1.80809, elemId: 7, sd: 8.6 },
    { label: "12", R: -56.8121, d: 0.95, nd: 1.0, elemId: 0, sd: 8.6 },
    { label: "13", R: -25.2334, d: 0.9, nd: 1.7725, elemId: 8, sd: 8.5 },
    { label: "14", R: 500, d: 19.14864, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "STO", R: 1e15, d: 0.5, nd: 1.0, elemId: 0, sd: 8.156584614397591 },
    { label: "16", R: 24.4453, d: 4.3, nd: 1.49782, elemId: 9, sd: 9.6 },
    { label: "17", R: -38.9608, d: 0.1, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "18", R: 23.8212, d: 2.05, nd: 1.49782, elemId: 10, sd: 9.05 },
    { label: "19", R: 46.3499, d: 2.7, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "20", R: -24.7866, d: 1, nd: 1.84666, elemId: 11, sd: 9.0 },
    { label: "21", R: -55.682, d: 5.7508, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "22A", R: 103.4624, d: 3.5, nd: 1.5168, elemId: 12, sd: 9.2 },
    { label: "23A", R: -29.2538, d: 7.85, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "25A", R: -311.1355, d: 0.2, nd: 1.55389, elemId: 13, sd: 10.2 },
    { label: "26", R: -100, d: 1.3, nd: 1.804, elemId: 14, sd: 10.2 },
    { label: "27", R: 125.3392, d: 39.14773384365739, nd: 1.0, elemId: 0, sd: 10.2 },
  ],

  asph: {
    "6A": {
      K: 5.2788,
      A3: -1.1851e-6,
      A4: 1.417e-6,
      A6: -9.0614e-9,
      A8: -8.3202e-11,
      A10: 1.3488e-12,
      A12: -3.8798e-15,
      A14: 0,
    },
    "22A": {
      K: -100.9999,
      A3: -2.3379e-6,
      A4: -1.615e-5,
      A6: -2.1098e-7,
      A8: 7.4305e-10,
      A10: 1.7382e-11,
      A12: 0,
      A14: 0,
    },
    "23A": {
      K: 1.1022,
      A3: -3.5074e-6,
      A4: -1.2621e-5,
      A6: -5.8347e-8,
      A8: -4.5042e-10,
      A10: 2.2333e-11,
      A12: -3.2891e-15,
      A14: 0,
    },
    "25A": {
      K: 575.7229,
      A3: -6.9399e-6,
      A4: -3.8277e-5,
      A5: 6.5412e-8,
      A6: -5.6657e-9,
      A8: -7.0116e-10,
      A10: 3.7914e-12,
      A12: 1.6919e-14,
      A14: 0,
    },
  },

  zoomPositions: [29.1, 50, 192],
  zoomStep: 0.004,
  zoomLabels: ["29.1 mm", "192 mm"],

  var: {
    "5": [
      [2.16928, 0.79962],
      [9.21209, 7.41055],
      [38.15808, 29.90142],
    ],
    "14": [
      [19.14864, 20.5183],
      [12.10583, 13.90737],
      [0.80311, 9.05977],
    ],
    "21": [
      [5.7508, 5.7508],
      [3.31464, 3.31464],
      [1.46943, 1.46943],
    ],
    "27": [
      [39.14773384365739, 39.14773384365739],
      [56.529568110610164, 56.529568110610164],
      [81.45950161942207, 81.45950161942207],
    ],
  },
  varLabels: [
    ["5", "D5 (G1-G2)"],
    ["14", "D14 (G2-G3)"],
    ["21", "D21 (G3-Gm)"],
    ["27", "BF"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-, focus)", fromSurface: "6A", toSurface: "14" },
    { text: "G3 (+)", fromSurface: "STO", toSurface: "21" },
    { text: "Gm (+)", fromSurface: "22A", toSurface: "27" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "H2", fromSurface: "25A", toSurface: "27" },
  ],

  closeFocusM: 0.43,
  focusDescription:
    "PUBLISHED G2 inner focusing. The second group translates toward the object while D5 decreases and " +
    "D14 increases with D5 + D14 conserved at each zoom station. Published close-state G2 travel is " +
    "1.36966 mm at 29.1 mm, 1.80154 mm at 50 mm, and 8.25666 mm at 192 mm. The patent model " +
    "focuses to 0.430 m from the image plane at all three zoom stations; the production lens was " +
    "marketed at 0.44 m.",

  nominalFno: [3.6, 4.6, 5.9],
  fstopSeries: [3.6, 4, 4.6, 5.6, 5.9, 8, 11, 16, 22],
  maxFstop: 22, // common all-zoom UI cap; the production lens reaches f/32 at longer focal lengths

  gapSagFrac: 0.915,
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
