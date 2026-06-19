import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ NIKON AF ZOOM-MICRO NIKKOR ED 70-180mm f/4.5-5.6D                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 5,717,527, Table 8 / seventh embodiment.            ║
 * ║ Shibayama / Nikon four-group macro zoom prescription.               ║
 * ║ 18 elements / 14 air-separated groups, all spherical.               ║
 * ║ Patent design: f = 82.40-135.00-194.00 mm; F = 4.14-5.10-5.73.     ║
 * ║ Production metadata: AF Zoom-Micro Nikkor ED 70-180mm f/4.5-5.6D.  ║
 * ║ Focus: the negative first group G1 moves object-ward as a unit.     ║
 * ║ Zoom: G1 fixed, G2 nearly fixed/reversing, G3 image-ward, G4        ║
 * ║ object-ward with the aperture stop moving integrally with G4.       ║
 * ║                                                                    ║
 * ║ NOTE ON OCR / TABLE VERIFICATION:                                   ║
 * ║ The raster patent table shows R5 = 1559.0379, not 559.0379.         ║
 * ║ The corrected value is required to reproduce f1 = -100.000 mm and   ║
 * ║ the patent's full-system focal lengths. Surface 23 has d = 1.0000  ║
 * ║ and surface 26 has R = 27.2830.                                    ║
 * ║ The closest-focus telephoto TL row prints 250.66589; adding the    ║
 * ║ d10 focus extension to infinity TL gives 250.86587, matching the   ║
 * ║ other close TL rows. The prescription uses the listed spacings     ║
 * ║ rather than that apparent table typo.                              ║
 * ║                                                                    ║
 * ║ NOTE ON SEMI-DIAMETERS:                                             ║
 * ║ The patent does not publish clear apertures. Semi-diameters below   ║
 * ║ are conservative visualization estimates constrained by paraxial     ║
 * ║ ray height, the 62 mm production filter thread, edge thickness,     ║
 * ║ same-element SD ratios, and cross-gap sag clearance.                ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-zoom-micro-70-180mm-f4.5-5.6d",
  maker: "Nikon",
  name: "NIKON AF ZOOM-MICRO NIKKOR ED 70-180mm f/4.5-5.6D",
  subtitle: "US 5,717,527 Table 8 — Nikon / Shibayama",
  specs: [
    "18 elements / 14 groups",
    "Patent f = 82.4-194.0 mm",
    "Patent F/4.14-5.73",
    "Production 70-180mm f/4.5-5.6",
    "Front-group macro focus",
    "All-spherical",
  ],

  focalLengthMarketing: [70, 180],
  focalLengthDesign: [82.401, 194.001],
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentYear: 1998,
  elementCount: 18,
  groupCount: 14,

  nominalFno: [4.5, 5.3, 5.6],
  closeFocusM: 0.37,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  zoomPositions: [82.4, 135, 194],
  zoomLabels: ["82.4 mm", "135 mm", "194 mm"],
  zoomStep: 0.004,

  focusDescription: "Front negative group G1 moves object-ward; d10 increases by 38.65 mm at the closest setting.",

  svgW: 1180,
  svgH: 500,
  scFill: 0.72,
  yScFill: 0.72,
  maxAspectRatio: 2.1,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.86074,
      vd: 23.01,
      fl: -130.5,
      glass: "861230 — high-index dense flint (patent nd=1.86074, νd=23.01; no source-backed catalog match)",
      role: "Front high-index negative meniscus of the focusing group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.86074,
      vd: 23.01,
      fl: 63.1,
      glass: "861230 — high-index dense flint (patent nd=1.86074, νd=23.01; no source-backed catalog match)",
      role: "Symmetric positive lens that balances L1 within the front focus group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6172,
      vd: 54.01,
      fl: -89.8,
      glass: "Unmatched crown (617/540)",
      role: "Rear-power negative element in G1; R5 is 1559.0379 in the patent table image.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.79504,
      vd: 28.56,
      fl: -78.9,
      glass: "Unmatched dense flint (795/286)",
      role: "Strong negative meniscus in the rear part of the focusing group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.78472,
      vd: 25.8,
      fl: 191.3,
      glass: "SF11-class dense flint (Schott, 785/258)",
      role: "Weak positive meniscus closing G1.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7481,
      vd: 52.3,
      fl: 83.4,
      glass: "Unmatched lanthanum crown (748/523)",
      role: "Positive relay lens at the front of G2.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.8,
      fl: -69.4,
      glass: "SF11-class dense flint (Schott, 785/258)",
      role: "Negative member of the G2 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.64,
      vd: 60.03,
      fl: 54.4,
      glass: "S-BSM81 class (OHARA, 640/600)",
      role: "Positive crown member of the G2 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.41,
      fl: 174.9,
      glass: "N-FK5 (Schott)",
      role: "Low-index, high-Abbe positive meniscus completing G2.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.80411,
      vd: 46.54,
      fl: -28.3,
      glass: "S-LAH65V class (OHARA, 804/466)",
      role: "Negative member of the G3 variator doublet.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.80458,
      vd: 25.5,
      fl: 38.2,
      glass: "SF6-class dense flint (Schott, 805/255)",
      role: "Positive high-dispersion member of the G3 variator doublet.",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.80411,
      vd: 46.54,
      fl: -61.5,
      glass: "S-LAH65V class (OHARA, 804/466)",
      role: "Additional negative variator power in G3.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.6,
      fl: 84.7,
      glass: "S-LAL14 (OHARA)",
      role: "Positive relay lens immediately behind the aperture stop.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.41,
      fl: 36.0,
      glass: "N-FK5 (Schott)",
      role: "First crown member of the G4 cemented triplet.",
      cemented: "T1",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.80384,
      vd: 33.89,
      fl: -23.2,
      glass: "Unmatched dense flint (804/339)",
      role: "Central flint member of the G4 cemented triplet.",
      cemented: "T1",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.41,
      fl: 75.1,
      glass: "N-FK5 (Schott)",
      role: "Rear crown member of the G4 cemented triplet.",
      cemented: "T1",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive",
      nd: 1.74077,
      vd: 27.63,
      fl: 47.8,
      glass: "Unmatched dense flint (741/276)",
      role: "High-index positive lens supplying rear relay power.",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Negative Meniscus",
      nd: 1.80411,
      vd: 46.54,
      fl: -36.8,
      glass: "S-LAH65V class (OHARA, 804/466)",
      role: "Final negative meniscus / field-correcting element.",
    },
  ],

  surfaces: [
    { label: "1", R: 89.1784, d: 2.5, nd: 1.86074, elemId: 1, sd: 29.5 },
    { label: "2", R: 49.0701, d: 4.1, nd: 1, elemId: 0, sd: 24 },
    { label: "3", R: 106.7865, d: 8.1, nd: 1.86074, elemId: 2, sd: 24 },
    { label: "4", R: -106.7865, d: 0.5, nd: 1, elemId: 0, sd: 24 },
    { label: "5", R: 1559.0379, d: 1.8, nd: 1.6172, elemId: 3, sd: 24 },
    { label: "6", R: 53.5159, d: 9.6, nd: 1, elemId: 0, sd: 19.8 },
    { label: "7", R: -45.7095, d: 1.8, nd: 1.79504, elemId: 4, sd: 19.8 },
    { label: "8", R: -171.4311, d: 0.1, nd: 1, elemId: 0, sd: 20 },
    { label: "9", R: 100.4498, d: 3.6, nd: 1.78472, elemId: 5, sd: 20 },
    { label: "10", R: 298.8453, d: 2.01116, nd: 1, elemId: 0, sd: 20 },
    { label: "11", R: 123.6358, d: 5, nd: 1.7481, elemId: 6, sd: 21.5 },
    { label: "12", R: -123.6358, d: 0.1, nd: 1, elemId: 0, sd: 20 },
    { label: "13", R: 75.6267, d: 1.8, nd: 1.78472, elemId: 7, sd: 20 },
    { label: "14", R: 31.3233, d: 7.5, nd: 1.64, elemId: 8, sd: 19 },
    { label: "15", R: 284.6918, d: 0.1, nd: 1, elemId: 0, sd: 18.5 },
    { label: "16", R: 70.5329, d: 3.3, nd: 1.48749, elemId: 9, sd: 18.5 },
    { label: "17", R: 401.6337, d: 2.05261, nd: 1, elemId: 0, sd: 18 },
    { label: "18", R: 307.8626, d: 1.6, nd: 1.80411, elemId: 10, sd: 17 },
    { label: "19", R: 21.1462, d: 5.4006, nd: 1.80458, elemId: 11, sd: 16 },
    { label: "20", R: 60.0066, d: 2.9, nd: 1, elemId: 0, sd: 12.8 },
    { label: "21", R: -68.4511, d: 1.6, nd: 1.80411, elemId: 12, sd: 12.8 },
    { label: "22", R: 179.6301, d: 40.31604, nd: 1, elemId: 0, sd: 16 },
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 16.3 },
    { label: "24", R: 163.235, d: 3.7, nd: 1.6968, elemId: 13, sd: 17.5 },
    { label: "25", R: -91.5164, d: 0.1, nd: 1, elemId: 0, sd: 17.5 },
    { label: "26", R: 27.283, d: 7.4, nd: 1.48749, elemId: 14, sd: 14.5 },
    { label: "27", R: -44.9905, d: 1.4, nd: 1.80384, elemId: 15, sd: 14.5 },
    { label: "28", R: 32.311, d: 4.9, nd: 1.48749, elemId: 16, sd: 14.5 },
    { label: "29", R: 260.2126, d: 15.6, nd: 1, elemId: 0, sd: 14.5 },
    { label: "30", R: 145.3796, d: 5.8, nd: 1.74077, elemId: 17, sd: 15.5 },
    { label: "31", R: -45.9845, d: 14.1, nd: 1, elemId: 0, sd: 15.5 },
    { label: "32", R: -23.6299, d: 1.4, nd: 1.80411, elemId: 18, sd: 13 },
    { label: "33", R: -120.0792, d: 51.03263, nd: 1, elemId: 0, sd: 13 },
  ],

  asph: {},

  var: {
    "10": [
      [2.01116, 40.66459],
      [2.90403, 41.55746],
      [2.01106, 40.66449],
    ],
    "17": [
      [2.05261, 2.05261],
      [6.74308, 6.74308],
      [11.4557, 11.4557],
    ],
    "22": [
      [40.31604, 40.31604],
      [17.41585, 17.41585],
      [1.74949, 1.74949],
    ],
    "33": [
      [51.03263, 51.03263],
      [68.34949, 68.34949],
      [80.19619, 80.19619],
    ],
  },
  varLabels: [
    ["10", "D10 / Focus"],
    ["17", "D17"],
    ["22", "D22"],
    ["33", "B.f."],
  ],

  groups: [
    { text: "G1 focus (-)", fromSurface: "1", toSurface: "10" },
    { text: "G2 relay (+)", fromSurface: "11", toSurface: "17" },
    { text: "G3 variator (-)", fromSurface: "18", toSurface: "22" },
    { text: "G4 compensator (+)", fromSurface: "24", toSurface: "33" },
  ],
  doublets: [
    { text: "D1", fromSurface: "13", toSurface: "15" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
    { text: "T1", fromSurface: "26", toSurface: "29" },
  ],
} satisfies LensDataInput;

export default LENS_DATA;
