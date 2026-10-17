import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AI-S ZOOM-NIKKOR 80-200mm f/2.8 ED                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP S58-54312 A, Example 2 (Nippon Kogaku / Yoshinori Hamanishi).║
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
 * ║ Stop model: Figure 5 places the adjustable iris in d14 immediately before    ║
 * ║ G4, but no numerical split is given. STO is therefore modeled 2.000 mm       ║
 * ║ before surface 15, fixed to G4. The stop radius is derived from the design   ║
 * ║ f-number, F/2.8, and held at every zoom station. Patent f4 = 114.874 mm and  ║
 * ║ G1-G3 being afocal to source precision support F/2.8 at all three zoom       ║
 * ║ positions.                                                                   ║
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
  schema: 2,
  key: "nikon-ais-zoom-nikkor-80-200mm-f28-ed",
  maker: "Nikon",
  name: "NIKON AI-S ZOOM-NIKKOR 80-200mm f/2.8 ED",
  subtitle: "JP S58-54312 A Example 2 — production correlation to the 1982 AI-S lens",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["15 ELEMENTS / 11 GROUPS", "80-200mm", "F/2.8", "30°10′-12°20′", "MFD 2.5 m"],
    elementCount: 15,
    groupCount: 11,
    focalLengthMm: { marketing: [80, 200], design: [80.000066, 199.999861] },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "JP S58-54312 A",
    patentYear: 1983,
    authors: ["Yoshinari Hamanishi"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.6,
      focalLengthMm: -395.400522,
      glass: "SF4 catalog-equivalent coefficient proxy (patent 755276; production supplier unspecified)",
      apd: false,
      role: "Front negative member of the first cemented doublet in G1.",
      diagramLabel: "L1a",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.50032,
      vd: 82.3,
      focalLengthMm: 169.582622,
      glass: "J-FKH1 catalog-equivalent coefficient proxy (patent 500823; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED classification is inferred from the production ED identity and the example's two repeated 1.50032/82.3 low-dispersion positions; J-FKH1 remains only a coordinate-compatible proxy.",
      role: "Low-dispersion positive member of the front cemented doublet; production ED identity is not assigned element-wise by the patent.",
      diagramLabel: "L1b / ED",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L2",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.50032,
      vd: 82.3,
      focalLengthMm: 524.324084,
      glass: "J-FKH1 catalog-equivalent coefficient proxy (patent 500823; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "ED classification is inferred from the production ED identity and the example's two repeated 1.50032/82.3 low-dispersion positions; J-FKH1 remains only a coordinate-compatible proxy.",
      role: "Second positive component of G1; shares the same low-dispersion patent coordinates as L1b.",
      diagramLabel: "L2 / ED",
    },
    {
      id: 4,
      name: "L3a",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.78797,
      vd: 47.5,
      focalLengthMm: -80.713446,
      glass: "TAF4 catalog-equivalent coefficient proxy (patent 788475; production supplier unspecified)",
      apd: false,
      role: "Front negative member of the G2 cemented triplet.",
      diagramLabel: "L3a",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L3b",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.6,
      focalLengthMm: 49.828853,
      glass: "SF4 catalog-equivalent coefficient proxy (patent 755276; production supplier unspecified)",
      apd: false,
      role: "Positive middle member of the G2 cemented triplet.",
      diagramLabel: "L3b",
      cemented: "T1",
    },
    {
      id: 6,
      name: "L3c",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.8,
      focalLengthMm: -65.826883,
      glass: "PBL25 catalog-equivalent coefficient proxy (patent 581408; production supplier unspecified)",
      apd: false,
      role: "Rear negative member of the G2 cemented triplet.",
      diagramLabel: "L3c",
      cemented: "T1",
    },
    {
      id: 7,
      name: "L4",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61.2,
      focalLengthMm: -110.172146,
      glass: "S-BAL35 catalog-equivalent coefficient proxy (patent 589612; production supplier unspecified)",
      apd: false,
      role: "Rear singlet of the negative variator group G2.",
      diagramLabel: "L4",
    },
    {
      id: 8,
      name: "L5a",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.67025,
      vd: 57.6,
      focalLengthMm: 73.975646,
      glass: "J-LAK02 catalog-equivalent coefficient proxy (patent 670576; production supplier unspecified)",
      apd: false,
      role: "Positive front member of the G3 cemented doublet.",
      diagramLabel: "L5a",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L5b",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -144.046119,
      glass: "S-TIH6 catalog-equivalent coefficient proxy (patent 805254; production supplier unspecified)",
      apd: false,
      role: "Negative rear member of the G3 cemented doublet.",
      diagramLabel: "L5b",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L6",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.78797,
      vd: 47.5,
      focalLengthMm: 69.086531,
      glass: "TAF4 catalog-equivalent coefficient proxy (patent 788475; production supplier unspecified)",
      apd: false,
      role: "Front positive singlet of fixed relay group G4.",
      diagramLabel: "L6",
    },
    {
      id: 11,
      name: "L7",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.78797,
      vd: 47.5,
      focalLengthMm: 166.040807,
      glass: "TAF4 catalog-equivalent coefficient proxy (patent 788475; production supplier unspecified)",
      apd: false,
      role: "Second positive singlet of G4.",
      diagramLabel: "L7",
    },
    {
      id: 12,
      name: "L8",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.6,
      focalLengthMm: -67.539251,
      glass: "SF4 catalog-equivalent coefficient proxy (patent 755276; production supplier unspecified)",
      apd: false,
      role: "Negative singlet completing the positive G41 relay subassembly.",
      diagramLabel: "L8",
    },
    {
      id: 13,
      name: "L9",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.63854,
      vd: 55.5,
      focalLengthMm: 218.427611,
      glass: "K-SK18 catalog-equivalent coefficient proxy (patent 639555; production supplier unspecified)",
      apd: false,
      role: "Small positive singlet associated with the patent's fixed-diaphragm function.",
      diagramLabel: "L9",
    },
    {
      id: 14,
      name: "L10",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 54,
      focalLengthMm: -71.736345,
      glass: "J-LAK8 catalog-equivalent coefficient proxy (patent 713540; production supplier unspecified)",
      apd: false,
      role: "Negative rear-relay singlet in G4.",
      diagramLabel: "L10",
    },
    {
      id: 15,
      name: "L11",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.61293,
      vd: 37,
      focalLengthMm: 100.102694,
      glass: "E-F3 catalog-equivalent coefficient proxy (patent 613370; production supplier unspecified)",
      apd: false,
      role: "Final positive singlet before the image plane.",
      diagramLabel: "L11",
    },
  ],

  surfaces: [
    { label: "1", R: 164, d: 2.7, sd: 40.5, medium: 1 },
    { label: "2", R: 105.11, d: 10.5, sd: 40.5, medium: 2 },
    { label: "3", R: -425.427, d: 0.2, sd: 40 },
    { label: "4", R: 160, d: 5, sd: 37, medium: 3 },
    { label: "5", R: 405.897, sd: 36.5 },
    { label: "6", R: -300, d: 1.6, sd: 24.8, medium: 4 },
    { label: "7", R: 80.9, d: 9, sd: 24.7, medium: 5 },
    { label: "8", R: -66.99, d: 1.45, sd: 24.5, medium: 6 },
    { label: "9", R: 90, d: 6.6, sd: 21.8 },
    { label: "10", R: -80, d: 1.8, sd: 21.8, medium: 7 },
    { label: "11", R: 346.871, sd: 23 },
    { label: "12", R: 200, d: 7, sd: 24.5, medium: 8 },
    { label: "13", R: -65, d: 1.45, sd: 24.3, medium: 9 },
    { label: "14", R: -149.342, sd: 24 },
    { label: "STO", R: "flat", d: 2 },
    { label: "15", R: 41.2, d: 6, sd: 23.5, medium: 10 },
    { label: "16", R: 158.55, d: 6, sd: 23 },
    { label: "17", R: -206.77, d: 4.5, sd: 21.5, medium: 11 },
    { label: "18", R: -80.9, d: 1.5, sd: 21 },
    { label: "19", R: -78.547, d: 2, sd: 20.5, medium: 12 },
    { label: "20", R: 147.06, d: 19, sd: 20 },
    { label: "21", R: 260, d: 3.5, sd: 15.5, medium: 13 },
    { label: "22", R: -299.3, d: 22.7, sd: 15.5 },
    { label: "23", R: -24.38, d: 3, sd: 20, medium: 14 },
    { label: "24", R: -48.971, d: 0.2, sd: 20 },
    { label: "25", R: 77, d: 4.5, sd: 21, medium: 15 },
    { label: "26", R: -295.287, d: 40.639, sd: 21 },
  ],

  zoom: {
    stations: [{ focalLengthMm: 80, label: "80mm" }, { focalLengthMm: 140 }, { focalLengthMm: 200, label: "200mm" }],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 2.5,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent assigns focusing to G1 but gives no finite-object table. Close-focus D5 values are solved at each zoom position for a 2.5 m object distance measured from the image plane, with G1 translating objectward and G2-G4 plus the image plane fixed relative to one another.",
  },

  gaps: {
    "5": {
      label: "D5 / G1 FOCUS",
      values: [
        [4.2245, 22.068842033419216],
        [51.0442, 68.88967447688958],
        [69.772, 87.61798500232837],
      ],
    },
    "11": {
      label: "D11",
      values: [
        [50.425, 50.425],
        [25.6435, 25.6435],
        [0.8618, 0.8618],
      ],
    },
    "14": {
      label: "D14→STO",
      values: [
        [23.318, 23.318],
        [1.28, 1.28],
        [7.334, 7.334],
      ],
    },
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

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

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
