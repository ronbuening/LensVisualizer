import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ NIKON AF ZOOM-MICRO NIKKOR 70-180mm f/4.5-5.6 D ED                 ║
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
  schema: 2,
  key: "nikon-af-zoom-micro-70-180mm-f45-56d",
  maker: "Nikon",
  name: "NIKON AF ZOOM-MICRO NIKKOR 70-180mm f/4.5-5.6 D ED",
  subtitle: "US 5,717,527 Table 8 — Nikon / Shibayama",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "18 elements / 14 groups",
      "Patent f = 82.4-194.0 mm",
      "Patent F/4.14-5.73",
      "Production 70-180mm f/4.5-5.6",
      "Front-group macro focus",
      "All-spherical",
    ],
    elementCount: 18,
    groupCount: 14,
    focalLengthMm: { marketing: [70, 180], design: [82.401, 194.001] },
  },

  source: {
    patentNumber: "US 5,717,527",
    patentYear: 1998,
    authors: ["Atsushi Shibayama"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.86074,
      vd: 23.01,
      focalLengthMm: -130.5,
      glass: "J-SFH2 (Hikari; patent code 861230)",
      role: "Front high-index negative meniscus of the focusing group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.86074,
      vd: 23.01,
      focalLengthMm: 63.1,
      glass: "J-SFH2 (Hikari; patent code 861230)",
      role: "Symmetric positive lens that balances L1 within the front focus group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6172,
      vd: 54.01,
      focalLengthMm: -89.8,
      glass: "BACED1 (HOYA catalog equivalent; production supplier unspecified; patent 617540)",
      role: "Rear-power negative element in G1; R5 is 1559.0379 in the patent table image.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.79504,
      vd: 28.56,
      focalLengthMm: -78.9,
      glass: "J-LAFH3 (Hikari catalog equivalent; production supplier unspecified; patent 795286)",
      role: "Strong negative meniscus in the rear part of the focusing group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.78472,
      vd: 25.8,
      focalLengthMm: 191.3,
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
      focalLengthMm: 83.4,
      glass: "748523 — E-LAKH1 catalog equivalent (Hikari; production supplier unspecified)",
      role: "Positive relay lens at the front of G2.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.8,
      focalLengthMm: -69.4,
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
      focalLengthMm: 54.4,
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
      focalLengthMm: 174.9,
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
      focalLengthMm: -28.3,
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
      focalLengthMm: 38.2,
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
      focalLengthMm: -61.5,
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
      focalLengthMm: 84.7,
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
      focalLengthMm: 36.0,
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
      focalLengthMm: -23.2,
      glass: "E-LAFH2 (Hikari; patent code 804339)",
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
      focalLengthMm: 75.1,
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
      focalLengthMm: 47.8,
      glass: "E-FD13 (HOYA catalog equivalent; production supplier unspecified; patent 741276)",
      role: "High-index positive lens supplying rear relay power.",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Negative Meniscus",
      nd: 1.80411,
      vd: 46.54,
      focalLengthMm: -36.8,
      glass: "S-LAH65V class (OHARA, 804/466)",
      role: "Final negative meniscus / field-correcting element.",
    },
  ],

  surfaces: [
    { label: "1", R: 89.1784, d: 2.5, sd: 29.5, medium: 1 },
    { label: "2", R: 49.0701, d: 4.1, sd: 24 },
    { label: "3", R: 106.7865, d: 8.1, sd: 24, medium: 2 },
    { label: "4", R: -106.7865, d: 0.5, sd: 24 },
    { label: "5", R: 1559.0379, d: 1.8, sd: 24, medium: 3 },
    { label: "6", R: 53.5159, d: 9.6, sd: 19.8 },
    { label: "7", R: -45.7095, d: 1.8, sd: 19.8, medium: 4 },
    { label: "8", R: -171.4311, d: 0.1, sd: 20 },
    { label: "9", R: 100.4498, d: 3.6, sd: 20, medium: 5 },
    { label: "10", R: 298.8453, sd: 20 },
    { label: "11", R: 123.6358, d: 5, sd: 21.5, medium: 6 },
    { label: "12", R: -123.6358, d: 0.1, sd: 20 },
    { label: "13", R: 75.6267, d: 1.8, sd: 20, medium: 7 },
    { label: "14", R: 31.3233, d: 7.5, sd: 19, medium: 8 },
    { label: "15", R: 284.6918, d: 0.1, sd: 18.5 },
    { label: "16", R: 70.5329, d: 3.3, sd: 18.5, medium: 9 },
    { label: "17", R: 401.6337, sd: 18 },
    { label: "18", R: 307.8626, d: 1.6, sd: 17, medium: 10 },
    { label: "19", R: 21.1462, d: 5.4006, sd: 16, medium: 11 },
    { label: "20", R: 60.0066, d: 2.9, sd: 12.8 },
    { label: "21", R: -68.4511, d: 1.6, sd: 12.8, medium: 12 },
    { label: "22", R: 179.6301, sd: 16 },
    { label: "STO", R: "flat", d: 1 },
    { label: "24", R: 163.235, d: 3.7, sd: 17.5, medium: 13 },
    { label: "25", R: -91.5164, d: 0.1, sd: 17.5 },
    { label: "26", R: 27.283, d: 7.4, sd: 14.5, medium: 14 },
    { label: "27", R: -44.9905, d: 1.4, sd: 14.5, medium: 15 },
    { label: "28", R: 32.311, d: 4.9, sd: 14.5, medium: 16 },
    { label: "29", R: 260.2126, d: 15.6, sd: 14.5 },
    { label: "30", R: 145.3796, d: 5.8, sd: 15.5, medium: 17 },
    { label: "31", R: -45.9845, d: 14.1, sd: 15.5 },
    { label: "32", R: -23.6299, d: 1.4, sd: 13, medium: 18 },
    { label: "33", R: -120.0792, sd: 13 },
  ],

  zoom: {
    // (moved from publishedStations) The close-focus row is source-tabulated.
    stations: [
      { focalLengthMm: 82.4, nominalFNumber: 4.5, label: "82.4 mm", published: true, publishedFocus: [1] },
      { focalLengthMm: 135, nominalFNumber: 5.3, label: "135 mm", published: true, publishedFocus: [1] },
      { focalLengthMm: 194, nominalFNumber: 5.6, label: "194 mm", published: true, publishedFocus: [1] },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.37,
    description: "Front negative group G1 moves object-ward; d10 increases by 38.65 mm at the closest setting.",
  },

  gaps: {
    "10": {
      label: "D10 / Focus",
      values: [
        [2.01116, 40.66459],
        [2.90403, 41.55746],
        [2.01106, 40.66449],
      ],
    },
    "17": {
      label: "D17",
      values: [
        [2.05261, 2.05261],
        [6.74308, 6.74308],
        [11.4557, 11.4557],
      ],
    },
    "22": {
      label: "D22",
      values: [
        [40.31604, 40.31604],
        [17.41585, 17.41585],
        [1.74949, 1.74949],
      ],
    },
    "33": {
      label: "B.f.",
      values: [
        [51.03263, 51.03263],
        [68.34949, 68.34949],
        [80.19619, 80.19619],
      ],
    },
  },

  aperture: { fStops: [4.5, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

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

  layout: { svgW: 1180, svgH: 500, scFill: 0.72, yScFill: 0.72, maxAspectRatio: 2.1 },
} satisfies LensDataV2Input;

export default LENS_DATA;
