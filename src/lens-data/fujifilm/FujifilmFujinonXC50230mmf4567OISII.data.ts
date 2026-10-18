import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — FUJINON XC50-230mmF4.5-6.7 OIS II research correlation.
 * Source: US 10,095,009 B2, Example 6, Tables 16–19, Figure 6.
 * 13 lens elements / 10 air-separated groups; six zoom groups (+ - + + - +).
 * Surface 11 is the source stop; 12A and 13A are aspheric (K = KA - 1 = 0).
 * All native dimensions and nonzero A4–A12 retained; no scaling to marketed 50–230 mm.
 * Source rear plates (Table 16 surfaces 25–32) use physical gaps via rearPlates: a 0.600 mm plate,
 * a 1.550 mm member printed as three contiguous same-index layers (0.350 + 0.600 + 0.600 mm, merged
 * here because they are optically identical to one plate), and a 0.700 mm plate.
 * SEMI-DIAMETERS: no effective diameters were published. Inferred from Figure 6, the
 * manufacturer diagram and exact ray geometry, then measured on the FIG. 6 wide-angle panel
 * (0.153 mm/px at the 300 dpi scan, scaled on the S1–S24 vertex span; the telephoto panel
 * agrees) and floor-checked by real-ray trace at all three zoom stations. Every element is
 * within about 5 % of its drawn rim except the front of L22. Both faces of L21 (6 and 7) carry
 * the drawn 9.0 mm blank height, so L21 renders as the squared plate of the figure. Surface 8
 * (L22 front) stays at 7.1 mm because the facing concave surfaces 7 and 8 close the 1.2 mm
 * airgap near h ≈ 7.6 mm (the figure draws flat contact annuli from there to the 9.0 mm edge);
 * 8 is therefore the working aperture of that pair, and the part of 7 outside it is drawn
 * glass, not clear aperture. 9 and 10 follow the smaller L23 (drawn 8.1 mm), not the 9.0 mm
 * L22 blank. L31 rims (12A/13A) are held at 8.6 mm (drawn ≈ 8.8 mm), inside the slope turnover
 * of 13A at h ≈ 8.83 mm. L33 (16/17) carries its drawn 10.0 mm edge on both faces; its rear
 * face is drawn curved only to ≈ 7.5–8 mm with a flat annulus beyond, which one sd per surface
 * cannot carry. Iris schedule is inferred by calibration to
 * native F/4.63, 5.76, 6.92; calibration-target agreement is not independent stop evidence.
 * Zoom gaps: DD5, DD10, DD17, DD19, DD22. Only source infinity zoom states published.
 * Focus: NO_INTERNAL_RECONSTRUCTION; no internal focus motion. closeFocusM=1.1 is the
 * production MFD, kept as product metadata only.
 * G4 physical focus mechanism is described, but finite-focus travel is not reconstructed.
 * Source image plane is retained: it lies 0.024 / 0.012 / 0.039 mm objectward of the computed
 * paraxial image at wide / intermediate / telephoto. No rear spacing is altered to remove that residual.
 * Glass labels name coordinate-equal catalog rows as dispersion proxies, not vendor/melt
 * identification; no APO claim.
 * Selected production-to-patent correlation is not manufacturer-confirmed.
 */

const LENS_DATA = {
  schema: 2,
  key: "fujifilm-fujinon-xc-50-230mm-f45-67-ois-ii",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XC 50-230mm f/4.5-6.7 OIS II",
  subtitle: "US 10,095,009 B2 EXAMPLE 6 — FUJIFILM / ORI, CHO — PRODUCT CORRELATION UNCONFIRMED",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "13 ELEMENTS / 10 GROUPS",
      "DESIGN f = 51.53–223.44 mm",
      "DESIGN F/4.63–6.92",
      "2 ASPHERICAL SURFACES / 1 ELEMENT",
      "1 ED (INFERRED)",
    ],
    elementCount: 13,
    groupCount: 10,
    focalLengthMm: { marketing: [50, 230], design: [51.55367841411755, 223.48628874813753] },
    fNumber: { marketing: 4.5, design: 4.63 },
  },

  source: {
    patentNumber: "US 10,095,009 B2",
    patentYear: 2018,
    authors: ["Tetsuya Ori", "Michio Cho"],
    assignees: ["Fujifilm Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.23,
      indexReference: "d",
      focalLengthMm: 167.23194420217774,
      glass: "S-FSL5 (OHARA coordinate equivalent; supplier unresolved)",
      role: "Positive leading element of G1.",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.03,
      indexReference: "d",
      focalLengthMm: -124.63306211992648,
      glass: "S-TIM5 (OHARA coordinate equivalent; supplier unresolved)",
      role: "Negative constituent of the G1 cemented pair.",
      diagramLabel: "L12",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.23,
      indexReference: "d",
      focalLengthMm: 95.00170258967565,
      glass: "S-FSL5 (OHARA coordinate equivalent; supplier unresolved)",
      role: "Positive constituent of the G1 cemented pair.",
      diagramLabel: "L13",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L21",
      label: "L21",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.33,
      indexReference: "d",
      focalLengthMm: -54.28731335620799,
      glass: "S-NBH51 (OHARA coordinate equivalent; supplier unresolved)",
      role: "Negative leading element of G2, the group the patent shifts across the axis for camera-shake correction.",
      diagramLabel: "L21",
    },
    {
      id: 5,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      focalLengthMm: -23.1399403651219,
      glass: "S-LAH51 (OHARA coordinate equivalent; supplier unresolved)",
      role: "Negative constituent of the G2 cemented pair.",
      diagramLabel: "L22",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "L23",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 18.9,
      indexReference: "d",
      focalLengthMm: 38.09611501979411,
      glass: "S-NPH2 (OHARA coordinate equivalent; supplier unresolved)",
      role: "Positive constituent of the G2 cemented pair.",
      diagramLabel: "L23",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L31",
      label: "L31",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.65296,
      vd: 36.79,
      indexReference: "d",
      focalLengthMm: 64.46665795096196,
      glass: "K-PG395-M (SUMITA K-PG395(M) molding-state coordinate equivalent; supplier unresolved)",
      role: "Doubly aspheric positive leading element of G3.",
      diagramLabel: "L31",
    },
    {
      id: 8,
      name: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 31.053569004272887,
      glass: "S-FPL51 (OHARA coordinate equivalent; supplier unresolved)",
      apd: "inferred",
      apdNote:
        "Inferred from coordinates: S-FPL51-class low-dispersion crown (νd 81.54; catalog dPgF +0.031) at the position Fujifilm marks as the ED element. The patent publishes no partial dispersion.",
      role: "Low-dispersion positive element of G3.",
      diagramLabel: "L32",
    },
    {
      id: 9,
      name: "L33",
      label: "L33",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      focalLengthMm: -41.09051143007377,
      glass: "S-TIH53 (OHARA coordinate equivalent; supplier unresolved)",
      role: "Negative rear element of G3.",
      diagramLabel: "L33",
    },
    {
      id: 10,
      name: "L41",
      label: "L41",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.63,
      indexReference: "d",
      focalLengthMm: 62.29688811203275,
      glass: "FCD505 (HOYA coordinate equivalent; supplier unresolved)",
      role: "Positive G4 focus-group element; finite-focus motion is not reconstructed.",
      diagramLabel: "L41",
    },
    {
      id: 11,
      name: "L51",
      label: "L51",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.88,
      indexReference: "d",
      focalLengthMm: 93.52461764327037,
      glass: "E-FDS1 (HOYA coordinate equivalent; supplier unresolved)",
      role: "Positive constituent of the negative G5 cemented pair.",
      diagramLabel: "L51",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L52",
      label: "L52",
      type: "Biconcave Negative",
      nd: 1.62299,
      vd: 58.16,
      indexReference: "d",
      focalLengthMm: -27.792424856553733,
      glass: "S-BSM15 (OHARA coordinate equivalent; supplier unresolved)",
      role: "Negative constituent of the G5 cemented pair.",
      diagramLabel: "L52",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L61",
      label: "L61",
      type: "Positive Meniscus",
      nd: 1.61293,
      vd: 37.0,
      indexReference: "d",
      focalLengthMm: 110.7404109047656,
      glass: "S-TIM3 (OHARA coordinate equivalent; supplier unresolved)",
      role: "Positive fixed rear group G6.",
      diagramLabel: "L61",
    },
  ],

  surfaces: [
    { label: "1", R: 91.2839, d: 4.3, sd: 20.5, medium: 1 },
    { label: "2", R: -750.7105, d: 0.1, sd: 20.5 },
    { label: "3", R: 98.0341, d: 1.61, sd: 20, medium: 2 },
    { label: "4", R: 42.295, d: 6.1, sd: 20, medium: 3 },
    { label: "5", R: 464.531, sd: 20 },
    { label: "6", R: -127.1629, d: 0.84, sd: 9.0, medium: 4 },
    { label: "7", R: 60.0025, d: 1.2, sd: 9.0 },
    { label: "8", R: -41.2999, d: 0.85, sd: 7.1, medium: 5 },
    { label: "9", R: 32.788, d: 1.9, sd: 8.0, medium: 6 },
    { label: "10", R: 472.9846, sd: 8.0 },
    { label: "STO", R: "flat", d: 1.0 },
    {
      label: "12A",
      R: 35.2293,
      d: 3.5,
      sd: 8.6,
      medium: 7,
      asphere: { K: 0, A4: -2.192971e-05, A6: -2.6825828e-07, A8: -1.4041431e-09, A10: -1.3101658e-11, A12: 2.0009875e-14, A14: 0 },
    },
    {
      label: "13A",
      R: 207.5426,
      d: 4.57,
      sd: 8.6,
      asphere: { K: 0, A4: 2.4812223e-05, A6: -2.3807118e-07, A8: 8.3060405e-10, A10: -4.3238076e-11, A12: 2.5906063e-13, A14: 0 },
    },
    { label: "14", R: 99.4961, d: 4.5, sd: 9.4, medium: 8 },
    { label: "15", R: -17.9929, d: 0.3, sd: 9.4 },
    { label: "16", R: 51.7317, d: 0.8, sd: 10.0, medium: 9 },
    { label: "17", R: 20.6535, sd: 10.0 },
    { label: "18", R: 26.3323, d: 2.0, sd: 8.8, medium: 10 },
    { label: "19", R: 89.1617, sd: 8.8 },
    { label: "20", R: -128.4997, d: 2.64, sd: 10.2, medium: 11 },
    { label: "21", R: -52.14, d: 0.85, sd: 10.2, medium: 12 },
    { label: "22", R: 26.0849, sd: 10.2 },
    { label: "23", R: -144.0763, d: 4.0, sd: 14.7, medium: 13 },
    { label: "24", R: -46.6261, d: 17.84, sd: 14.7 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 51.53, nominalFNumber: 4.63 },
      { focalLengthMm: 107.31, nominalFNumber: 5.76 },
      { focalLengthMm: 223.44, nominalFNumber: 6.92 },
    ],
  },

  focus: {
    closeFocusM: 1.1,
    description:
      "Focus travel is not modeled. The patent focuses by moving G4 (L41) toward the object but tabulates infinity-focus zoom states only, so every gap is the same at both focus endpoints. The 1.1 m minimum focus distance is Fujifilm's production figure, kept as product metadata.",
  },

  gaps: {
    "5": {
      label: "DD[5]",
      values: [
        [13.14, 13.14],
        [37.23, 37.23],
        [61.95, 61.95],
      ],
    },
    "10": {
      label: "DD[10]",
      values: [
        [20.55, 20.55],
        [9.15, 9.15],
        [3.89, 3.89],
      ],
    },
    "17": {
      label: "DD[17]",
      values: [
        [6.18, 6.18],
        [15.15, 15.15],
        [28.49, 28.49],
      ],
    },
    "19": {
      label: "DD[19]",
      values: [
        [17.24, 17.24],
        [16.74, 16.74],
        [2.9, 2.9],
      ],
    },
    "22": {
      label: "DD[22]",
      values: [
        [5.93, 5.93],
        [15.74, 15.74],
        [31.82, 31.82],
      ],
    },
  },

  aperture: { fStops: [4.63, 5.6, 6.92, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  rearPlates: [
    {
      label: "PP1",
      thicknessMm: 0.6,
      nd: 1.54763,
      vd: 54.98,
      glass: "Unmatched (source rear plate nd=1.54763, vd=54.98)",
      gapAfterMm: 0.81,
      source: "US 10,095,009 B2 Example 6 Table 16 surfaces 25-26; physical gaps preserved",
    },
    {
      label: "PP2",
      thicknessMm: 1.55,
      nd: 1.54763,
      vd: 54.98,
      glass: "Unmatched (source rear plate nd=1.54763, vd=54.98)",
      gapAfterMm: 0.5,
      source:
        "US 10,095,009 B2 Example 6 Table 16 surfaces 27-30; three contiguous same-index layers 0.350 + 0.600 + 0.600 mm merged into one optically identical 1.550 mm plate",
    },
    {
      label: "PP3",
      thicknessMm: 0.7,
      nd: 1.49784,
      vd: 54.98,
      glass: "Unmatched (source rear plate nd=1.49784, vd=54.98)",
      gapAfterMm: 1.12,
      source: "US 10,095,009 B2 Example 6 Table 16 surfaces 31-32; physical gaps preserved",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2 (OIS)", fromSurface: "6", toSurface: "10" },
    { text: "G3", fromSurface: "12A", toSurface: "17" },
    { text: "G4 (FOCUS)", fromSurface: "18", toSurface: "19" },
    { text: "G5", fromSurface: "20", toSurface: "22" },
    { text: "G6", fromSurface: "23", toSurface: "24" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
  ],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
