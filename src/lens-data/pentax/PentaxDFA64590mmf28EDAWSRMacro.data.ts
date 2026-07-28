import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA - PENTAX HD D FA645 MACRO 90mm f/2.8 ED AW SR                   ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Patent source: US 2013/0222925 A1, Numerical Embodiment 4, Tables 13-16.   ║
 * ║ Production correlation: official 90mm f/2.8, 11-element/9-group, 0.413 m,  ║
 * ║ 0.5x, Pentax 645 product; announced 2012-09-11.                             ║
 * ║                                                                              ║
 * ║ 11 elements / 9 air-separated groups / 1 aspherical surface.               ║
 * ║ Focus status: PUBLISHED. Infinity and -0.50:1 endpoints are transcribed.    ║
 * ║ G1 and G2 move objectward by 35.368 mm and 29.090 mm, respectively;         ║
 * ║ D15 changes 5.680 -> 11.958 mm and BFD changes 69.090 -> 98.180 mm.         ║
 * ║ The G1b cemented pair is the laterally shiftable image-stabilizing group.   ║
 * ║                                                                              ║
 * ║ No scale factor is applied. The patent dimensions and A4 coefficient are    ║
 * ║ retained directly; K already uses the standard conic-constant convention.   ║
 * ║                                                                              ║
 * ║ Semi-diameters are inferred, not patent-published. Figure 25 supplies the    ║
 * ║ relative outline; the f/2.85 pupil solution and exact infinity/-0.50:1 ray  ║
 * ║ envelopes set the clearance floor through 0.60 field. The physical stop     ║
 * ║ radius is inferred as 15.533311 mm. Standalone checks covered edge          ║
 * ║ thickness, actual rim slope,                                                ║
 * ║ conic validity, shared-gap intrusion, off-axis containment, and an          ║
 * ║ independent render-trim surrogate.                                          ║
 * ║                                                                              ║
 * ║ Glass labels remain six-digit code/class descriptions. The patent publishes ║
 * ║ nd and vd only; vendor identity, nC, nF, ng, and dPgF are not asserted.      ║
 * ║                                                                              ║
 * ║ Manufacturer sources:                                                       ║
 * ║ https://www.ricoh-imaging.co.jp/english/products/lens/645/macro/            ║
 * ║   hdpentax-d-fa645-macro-90/                                                 ║
 * ║ https://www.ricoh-imaging.co.jp/english/news/2012/20120911_6.html           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-dfa645-90f28-ed-aw-sr-macro",
  maker: "Pentax",
  name: "PENTAX HD D FA645 MACRO 90mm f/2.8 ED AW SR",
  subtitle: "US 2013/0222925 A1 - Numerical Embodiment 4; strong production correlation",
  specs: [
    "11 ELEMENTS / 9 GROUPS",
    "f = 90.116 mm (DESIGN)",
    "F/2.85 (DESIGN)",
    "2ω = 42.2°",
    "0.5x AT 0.413 m",
    "1 ASPHERICAL SURFACE",
  ],

  focalLengthMarketing: 90,
  focalLengthDesign: 90.116294,
  apertureMarketing: 2.8,
  apertureDesign: 2.85,
  lensMounts: ["pentax-645"],
  imageFormat: "645",
  patentNumber: "US 2013/0222925 A1",
  patentAuthors: ["Tatsuyuki Onozaki", "Masakazu Saori"],
  patentAssignees: ["Pentax Ricoh Imaging Company, Ltd."],
  patentYear: 2013,
  elementCount: 11,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -59.736082,
      glass: "835427 - high-index lanthanum glass class (vendor unresolved)",
      role: "Front negative meniscus; moderates front-group ray angles and contributes negative standalone power.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 33.3,
      fl: 73.021412,
      glass: "806333 - high-index lanthanum flint class (vendor unresolved)",
      role: "Positive member of G1a; supplies strong convergence ahead of the ED crown.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 91.911662,
      glass: "497816 - ED fluorophosphate crown class (vendor unresolved)",
      role: "First ED-class positive element; completes the positive G1a subgroup.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element L14",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.6,
      fl: -46.182906,
      glass: "640346 - E-FD7/S-TIM27-class dense flint (code equivalent)",
      role: "Negative member of the cemented G1b image-stabilizing pair.",
      cemented: "G1b",
    },
    {
      id: 5,
      name: "L15",
      label: "Element L15",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      fl: 71.721505,
      glass: "805255 - dense flint class (vendor unresolved)",
      role: "Positive member of G1b; the cemented pair is negative overall and shifts laterally for stabilization.",
      cemented: "G1b",
    },
    {
      id: 6,
      name: "L16",
      label: "Element L16",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.3,
      fl: -31.627136,
      glass: "728283 - dense flint class (vendor unresolved)",
      role: "Negative member of the cemented front pair in G1c.",
      cemented: "G1c-D1",
    },
    {
      id: 7,
      name: "L17",
      label: "Element L17",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 46.386499,
      glass: "497816 - ED fluorophosphate crown class (vendor unresolved)",
      role: "Second ED-class element; achromatizes the cemented L16-L17 pair.",
      cemented: "G1c-D1",
    },
    {
      id: 8,
      name: "L18",
      label: "Element L18",
      type: "Biconvex Positive (1x Asph)",
      nd: 1.8061,
      vd: 40.7,
      fl: 55.730188,
      glass: "806407 - high-index lanthanum glass class (vendor unresolved)",
      role: "Positive rear member of G1c; its image-side surface carries the sole asphere.",
    },
    {
      id: 9,
      name: "L21",
      label: "Element L21",
      type: "Negative Meniscus",
      nd: 1.6398,
      vd: 34.6,
      fl: -79.455939,
      glass: "640346 - E-FD7/S-TIM27-class dense flint (code equivalent)",
      role: "Front negative element of the rear focusing group G2.",
    },
    {
      id: 10,
      name: "L22",
      label: "Element L22",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 33.3,
      fl: 56.267562,
      glass: "806333 - high-index lanthanum flint class (vendor unresolved)",
      role: "Positive central element of G2; balances the two negative rear-group members.",
    },
    {
      id: 11,
      name: "L23",
      label: "Element L23",
      type: "Biconcave Negative",
      nd: 1.56883,
      vd: 56,
      fl: -79.365343,
      glass: "569560 - barium crown class (vendor unresolved)",
      role: "Final negative element; completes the negative G2 group and controls the rear conjugate.",
    },
  ],

  /* ── Surface prescription: Table 13, infinity state ── */
  surfaces: [
    { label: "1", R: 313.004, d: 2, nd: 1.83481, elemId: 1, sd: 26.5 },
    { label: "2", R: 42.89, d: 11.7, nd: 1, elemId: 0, sd: 26.1 },
    { label: "3", R: 56.534, d: 7.54, nd: 1.8061, elemId: 2, sd: 25.6 },
    { label: "4", R: 1344.027, d: 5.18, nd: 1, elemId: 0, sd: 24.7 },
    { label: "5", R: 70.142, d: 7.26, nd: 1.497, elemId: 3, sd: 22.8 },
    { label: "6", R: -126.482, d: 7.85, nd: 1, elemId: 0, sd: 21.5 },
    { label: "7", R: -253.61, d: 1.45, nd: 1.6398, elemId: 4, sd: 18.0 },
    { label: "8", R: 33.519, d: 4.75, nd: 1.80518, elemId: 5, sd: 17.7 },
    { label: "9", R: 74.839, d: 6.13, nd: 1, elemId: 0, sd: 16.5 },
    { label: "STO", R: 1e15, d: 6.64, nd: 1, elemId: 0, sd: 15.533311 },
    { label: "11", R: -38.315, d: 1.4, nd: 1.72825, elemId: 6, sd: 17.2 },
    { label: "12", R: 58.634, d: 9.66, nd: 1.497, elemId: 7, sd: 17.5 },
    { label: "13", R: -35.914, d: 0.75, nd: 1, elemId: 0, sd: 18.2 },
    { label: "14", R: 58.416, d: 7.25, nd: 1.8061, elemId: 8, sd: 19.9 },
    { label: "15A", R: -183.734, d: 5.68, nd: 1, elemId: 0, sd: 19.9 },
    { label: "16", R: 2478.431, d: 1.55, nd: 1.6398, elemId: 9, sd: 18.6 },
    { label: "17", R: 49.802, d: 4.9, nd: 1, elemId: 0, sd: 18.3 },
    { label: "18", R: 126.215, d: 5.57, nd: 1.8061, elemId: 10, sd: 18.8 },
    { label: "19", R: -69.406, d: 4.08, nd: 1, elemId: 0, sd: 18.8 },
    { label: "20", R: -65.521, d: 1.45, nd: 1.56883, elemId: 11, sd: 18.1 },
    { label: "21", R: 146.337, d: 69.09, nd: 1, elemId: 0, sd: 18.1 },
  ],

  asph: {
    "15A": {
      K: 0,
      A4: 1.173e-6,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* Published infinity and -0.50:1 endpoint spacings. */
  var: {
    "15A": [5.68, 11.958],
    "21": [69.09, 98.18],
  },
  varLabels: [
    ["15A", "D15"],
    ["21", "BF"],
  ],

  groups: [
    { text: "G1a (+)", fromSurface: "1", toSurface: "6" },
    { text: "G1b / SR (-)", fromSurface: "7", toSurface: "9" },
    { text: "G1c (+)", fromSurface: "11", toSurface: "15A" },
    { text: "G2 (-)", fromSurface: "16", toSurface: "21" },
  ],
  doublets: [
    { text: "G1b", fromSurface: "7", toSurface: "9" },
    { text: "G1c-D1", fromSurface: "11", toSurface: "13" },
  ],

  closeFocusM: 0.413,
  focusDescription:
    "PUBLISHED two-group floating focus. From infinity to -0.50:1, G1 and G2 move objectward by 35.368 mm and 29.090 mm; D15 changes 5.680-11.958 mm and BFD changes 69.090-98.180 mm.",

  nominalFno: 2.85,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,

  scFill: 0.6,
  yScFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
