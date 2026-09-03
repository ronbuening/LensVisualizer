import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AI-S ZOOM-NIKKOR 80-200mm f/2.8 ED                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JPS58-54312A, Example 2 (Nippon Kogaku / Yoshinori Hamanishi).║
 * ║ 15 elements / 11 air-separated components in four principal zoom groups.  ║
 * ║ All refracting surfaces are spherical. No scale factor is applied.          ║
 * ║                                                                              ║
 * ║ Infinity zoom gaps from the patent: d5, d11, d14 at 80 / 140 / 200 mm.      ║
 * ║ G2 moves imageward; G3 reverses between 140 and 200 mm; G4 is fixed.        ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that G1 focuses ║
 * ║ but publishes no finite-object table. Close-focus d5 values are code-solved ║
 * ║ for Nikon's published 2.5 m MFD with G1 translating objectward and G2-G4    ║
 * ║ plus the image plane fixed relative to one another.                          ║
 * ║                                                                              ║
 * ║ Stop model: Figure 5 places the adjustable iris in d14 immediately before   ║
 * ║ G4, but no numerical split is given. STO is therefore modeled 2.000 mm      ║
 * ║ before surface 15, fixed to G4. Its physical semi-diameter is 20.513214 mm, ║
 * ║ derived from patent f4 = 114.874 mm and F/2.8. Because G1-G3 are afocal to   ║
 * ║ source precision, this reproduces F/2.8 at all three zoom positions.         ║
 * ║                                                                              ║
 * ║ Semi-diameters are modeling values, not patent-published data. They were     ║
 * ║ constrained by the 95 mm production front accessory size, on-axis marginal  ║
 * ║ rays, Figure 5 proportions, positive edge thickness, actual rim slope,       ║
 * ║ cross-gap intrusion, and deliberate wide-open off-axis vignetting at group   ║
 * ║ boundaries rather than within cemented interfaces.                           ║
 * ║                                                                              ║
 * ║ Glass labels preserve patent nd/vd coordinates conservatively. The patent   ║
 * ║ does not publish vendor names, nC, nF, ng, or dPgF; those spectral fields    ║
 * ║ are therefore not fabricated.                                                ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-ais-zoom-nikkor-80-200mm-f28-ed",
  maker: "Nikon",
  name: "NIKON AI-S ZOOM-NIKKOR 80-200mm f/2.8 ED",
  subtitle: "JPS58-54312A Example 2 — production correlation to the 1982 AI-S lens",
  specs: ["15 ELEMENTS / 11 GROUPS", "80-200mm", "F/2.8", "30°10′-12°20′", "MFD 2.5 m"],

  focalLengthMarketing: [80, 200],
  focalLengthDesign: [80.000066, 199.999861],
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JPS58-54312A",
  patentAuthors: ["Yoshinori Hamanishi"],
  patentAssignees: ["Nippon Kogaku Kogyo K.K."],
  patentYear: 1983,
  elementCount: 15,
  groupCount: 11,

  elements: [
    {
      id: 1,
      name: "L1a",
      diagramLabel: "L1a",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.6,
      fl: -395.400522,
      glass: "SF4 catalog-equivalent coefficient proxy (patent 755276; production supplier unspecified)",
      apd: false,
      cemented: "D1",
      role: "Front negative member of the first cemented doublet in G1.",
    },
    {
      id: 2,
      name: "L1b",
      diagramLabel: "L1b / ED",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.50032,
      vd: 82.3,
      fl: 169.582622,
      glass: "J-FKH1 catalog-equivalent coefficient proxy (patent 500823; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED classification is inferred from the production ED identity and the example's two repeated 1.50032/82.3 low-dispersion positions; J-FKH1 remains only a coordinate-compatible proxy.",
      cemented: "D1",
      role: "Low-dispersion positive member of the front cemented doublet; production ED identity is not assigned element-wise by the patent.",
    },
    {
      id: 3,
      name: "L2",
      diagramLabel: "L2 / ED",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.50032,
      vd: 82.3,
      fl: 524.324084,
      glass: "J-FKH1 catalog-equivalent coefficient proxy (patent 500823; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED classification is inferred from the production ED identity and the example's two repeated 1.50032/82.3 low-dispersion positions; J-FKH1 remains only a coordinate-compatible proxy.",
      role: "Second positive component of G1; shares the same low-dispersion patent coordinates as L1b.",
    },
    {
      id: 4,
      name: "L3a",
      diagramLabel: "L3a",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.78797,
      vd: 47.5,
      fl: -80.713446,
      glass: "TAF4 catalog-equivalent coefficient proxy (patent 788475; production supplier unspecified)",
      apd: false,
      cemented: "T1",
      role: "Front negative member of the G2 cemented triplet.",
    },
    {
      id: 5,
      name: "L3b",
      diagramLabel: "L3b",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.6,
      fl: 49.828853,
      glass: "SF4 catalog-equivalent coefficient proxy (patent 755276; production supplier unspecified)",
      apd: false,
      cemented: "T1",
      role: "Positive middle member of the G2 cemented triplet.",
    },
    {
      id: 6,
      name: "L3c",
      diagramLabel: "L3c",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.8,
      fl: -65.826883,
      glass: "PBL25 catalog-equivalent coefficient proxy (patent 581408; production supplier unspecified)",
      apd: false,
      cemented: "T1",
      role: "Rear negative member of the G2 cemented triplet.",
    },
    {
      id: 7,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61.2,
      fl: -110.172146,
      glass: "S-BAL35 catalog-equivalent coefficient proxy (patent 589612; production supplier unspecified)",
      apd: false,
      role: "Rear singlet of the negative variator group G2.",
    },
    {
      id: 8,
      name: "L5a",
      diagramLabel: "L5a",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.67025,
      vd: 57.6,
      fl: 73.975646,
      glass: "J-LAK02 catalog-equivalent coefficient proxy (patent 670576; production supplier unspecified)",
      apd: false,
      cemented: "D2",
      role: "Positive front member of the G3 cemented doublet.",
    },
    {
      id: 9,
      name: "L5b",
      diagramLabel: "L5b",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -144.046119,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      apd: false,
      cemented: "D2",
      role: "Negative rear member of the G3 cemented doublet.",
    },
    {
      id: 10,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.78797,
      vd: 47.5,
      fl: 69.086531,
      glass: "TAF4 catalog-equivalent coefficient proxy (patent 788475; production supplier unspecified)",
      apd: false,
      role: "Front positive singlet of fixed relay group G4.",
    },
    {
      id: 11,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.78797,
      vd: 47.5,
      fl: 166.040807,
      glass: "TAF4 catalog-equivalent coefficient proxy (patent 788475; production supplier unspecified)",
      apd: false,
      role: "Second positive singlet of G4.",
    },
    {
      id: 12,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.6,
      fl: -67.539251,
      glass: "SF4 catalog-equivalent coefficient proxy (patent 755276; production supplier unspecified)",
      apd: false,
      role: "Negative singlet completing the positive G41 relay subassembly.",
    },
    {
      id: 13,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.63854,
      vd: 55.5,
      fl: 218.427611,
      glass: "K-SK18 catalog-equivalent coefficient proxy (patent 639555; production supplier unspecified)",
      apd: false,
      role: "Small positive singlet associated with the patent's fixed-diaphragm function.",
    },
    {
      id: 14,
      name: "L10",
      diagramLabel: "L10",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 54,
      fl: -71.736345,
      glass: "J-LAK8 catalog-equivalent coefficient proxy (patent 713540; production supplier unspecified)",
      apd: false,
      role: "Negative rear-relay singlet in G4.",
    },
    {
      id: 15,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.61293,
      vd: 37,
      fl: 100.102694,
      glass: "E-F3 catalog-equivalent coefficient proxy (patent 613370; production supplier unspecified)",
      apd: false,
      role: "Final positive singlet before the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 164, d: 2.7, nd: 1.7552, elemId: 1, sd: 40.5 },
    { label: "2", R: 105.11, d: 10.5, nd: 1.50032, elemId: 2, sd: 40.5 },
    { label: "3", R: -425.427, d: 0.2, nd: 1, elemId: 0, sd: 40 },
    { label: "4", R: 160, d: 5, nd: 1.50032, elemId: 3, sd: 37 },
    { label: "5", R: 405.897, d: 4.2245, nd: 1, elemId: 0, sd: 36.5 },
    { label: "6", R: -300, d: 1.6, nd: 1.78797, elemId: 4, sd: 24.8 },
    { label: "7", R: 80.9, d: 9, nd: 1.7552, elemId: 5, sd: 24.7 },
    { label: "8", R: -66.99, d: 1.45, nd: 1.58144, elemId: 6, sd: 24.5 },
    { label: "9", R: 90, d: 6.6, nd: 1, elemId: 0, sd: 21.8 },
    { label: "10", R: -80, d: 1.8, nd: 1.58913, elemId: 7, sd: 21.8 },
    { label: "11", R: 346.871, d: 50.425, nd: 1, elemId: 0, sd: 23 },
    { label: "12", R: 200, d: 7, nd: 1.67025, elemId: 8, sd: 24.5 },
    { label: "13", R: -65, d: 1.45, nd: 1.80518, elemId: 9, sd: 24.3 },
    { label: "14", R: -149.342, d: 23.318, nd: 1, elemId: 0, sd: 24 },
    { label: "STO", R: 1e15, d: 2, nd: 1, elemId: 0, sd: 20.513214285714287 },
    { label: "15", R: 41.2, d: 6, nd: 1.78797, elemId: 10, sd: 23.5 },
    { label: "16", R: 158.55, d: 6, nd: 1, elemId: 0, sd: 23 },
    { label: "17", R: -206.77, d: 4.5, nd: 1.78797, elemId: 11, sd: 21.5 },
    { label: "18", R: -80.9, d: 1.5, nd: 1, elemId: 0, sd: 21 },
    { label: "19", R: -78.547, d: 2, nd: 1.7552, elemId: 12, sd: 20.5 },
    { label: "20", R: 147.06, d: 19, nd: 1, elemId: 0, sd: 20 },
    { label: "21", R: 260, d: 3.5, nd: 1.63854, elemId: 13, sd: 15.5 },
    { label: "22", R: -299.3, d: 22.7, nd: 1, elemId: 0, sd: 15.5 },
    { label: "23", R: -24.38, d: 3, nd: 1.713, elemId: 14, sd: 20 },
    { label: "24", R: -48.971, d: 0.2, nd: 1, elemId: 0, sd: 20 },
    { label: "25", R: 77, d: 4.5, nd: 1.61293, elemId: 15, sd: 21 },
    { label: "26", R: -295.287, d: 40.639, nd: 1, elemId: 0, sd: 21 },
  ],

  asph: {},

  var: {
    "5": [
      [4.2245, 22.068842033419216],
      [51.0442, 68.88967447688958],
      [69.772, 87.61798500232837],
    ],
    "11": [
      [50.425, 50.425],
      [25.6435, 25.6435],
      [0.8618, 0.8618],
    ],
    "14": [
      [23.318, 23.318],
      [1.28, 1.28],
      [7.334, 7.334],
    ],
  },

  varLabels: [
    ["5", "D5 / G1 FOCUS"],
    ["11", "D11"],
    ["14", "D14→STO"],
  ],

  zoomPositions: [80, 140, 200],
  zoomStep: 0.004,
  zoomLabels: ["80mm", "200mm"],

  groups: [
    { text: "G1 (+) / FOCUS → OBJ", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−) / ZOOM → IMG", fromSurface: "6", toSurface: "11" },
    { text: "G3 (+) / ZOOM / REVERSES", fromSurface: "12", toSurface: "14" },
    { text: "G4 (+) / FIXED", fromSurface: "15", toSurface: "26" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "T1", fromSurface: "6", toSurface: "9" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
  ],

  closeFocusM: 2.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent assigns focusing to G1 but gives no finite-object table. Close-focus D5 values are solved at each zoom position for a 2.5 m object distance measured from the image plane, with G1 translating objectward and G2-G4 plus the image plane fixed relative to one another.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
