import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Nikon AF-S NIKKOR 70-200mm f/2.8G ED VR II              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 8,416,506 B2, Example 6, Table 6.                   ║
 * ║  Positive-negative-positive-negative-positive internal zoom.         ║
 * ║  21 elements / 16 groups, all-spherical prescription.                ║
 * ║  Focus: G3 internal focus; G5b is the vibration-reduction group.     ║
 * ║                                                                      ║
 * ║  Zoom variable gaps: 7 (d1), 15 (d2), 20 (d3), 22 (d4).              ║
 * ║  Focus variable gaps: 15 (d2) and 20 (d3), reconstructed             ║
 * ║    paraxially from Nikon's published 1.4 m minimum focus distance.   ║
 * ║  Fixed patent back focus: 38 (BF).                                   ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS:                                             ║
 * ║    The patent does not tabulate clear apertures. Semi-diameters      ║
 * ║    are inferred from the f/2.89 stop geometry and paraxial ray       ║
 * ║    envelopes, then reduced where necessary to preserve element       ║
 * ║    edge thickness and cross-gap sag clearance. The front collector   ║
 * ║    is constrained by the production 77 mm filter thread; the         ║
 * ║    diagram therefore represents a mechanically plausible clear       ║
 * ║    aperture rather than an unvignetted full-field ray envelope.      ║
 * ║    In G2 the f/2.89 on-axis ray reaches 18.796 / 18.791 / 19.048     ║
 * ║    mm on surfaces 12-14 at 196 mm and infinity focus. Surfaces 12    ║
 * ║    and 14 carry that height rounded up to 0.1 mm: 18.8 and 19.1      ║
 * ║    mm. FIG. 26 cuts the L24 rim square, so surface 13 carries        ║
 * ║    surface 14's 19.1 mm. L23 rear (12) and L24 front (13) use        ║
 * ║    95.4 % of their 4.2 mm air gap at the 18.8 mm rim, 0.19 mm        ║
 * ║    clear, and would touch at 19.24 mm; FIG. 26 draws the two         ║
 * ║    elements meeting at the rim, so gapSagFrac is 0.96 for that       ║
 * ║    pair. Wide open at infinity all three zoom stations trace         ║
 * ║    f/2.89 on the iris.                                               ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-af-s-70-200mm-f28g-vr-ii",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 70-200mm f/2.8 G ED VR II",
  subtitle: "US 8,416,506 B2 — Example 6",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "70-200 mm f/2.8 FX telephoto zoom",
      "Patent design: f = 71.40-196.00 mm, FNO = 2.89",
      "21 elements / 16 groups; 7 ED elements",
      "G3 internal focus; G5b vibration reduction",
      "Nikon F mount / 135 full-frame",
    ],
    elementCount: 21,
    groupCount: 16,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    focalLengthMm: { marketing: [70, 200], design: [71.4, 196.0] },
    fNumber: { marketing: 2.8, design: 2.89 },
  },

  source: {
    patentNumber: "US 8,416,506 B2",
    patentYear: 2013,
    authors: ["Tomoki Ito"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.795041,
      vd: 28.69,
      focalLengthMm: -186.4,
      glass: "J-LAFH3 (HIKARI; 795287, coefficients unavailable)",
      role: "Front high-dispersion element of the leading achromat.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 196.1,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote: "ED fluorocrown; anomalous partial dispersion from catalog class.",
      role: "ED component of the near-afocal front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 187.9,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote: "ED fluorocrown; anomalous partial dispersion from catalog class.",
      role: "Large positive ED collector element.",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 171.1,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote: "ED fluorocrown; anomalous partial dispersion from catalog class.",
      role: "Rear positive ED element of G1.",
    },

    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.62,
      focalLengthMm: -47.8,
      glass: "S-LAH59 (OHARA)",
      role: "Leading high-index negative element of the variator.",
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.41,
      focalLengthMm: -58.6,
      glass: "N-FK5 (Schott) / J-FK5 class",
      role: "Low-dispersion negative component in the first G2 doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 51.1,
      glass: "S-TIH53 (OHARA)",
      role: "High-dispersion positive partner in the first G2 doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L24",
      label: "L24",
      type: "Positive Meniscus",
      nd: 1.805181,
      vd: 25.43,
      focalLengthMm: 159.7,
      glass: "S-TIH6 (OHARA)",
      role: "Dense-flint front component of the rear G2 doublet.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L25",
      label: "L25",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.62,
      focalLengthMm: -48.5,
      glass: "S-LAH59 (OHARA)",
      role: "High-index negative rear component of the variator.",
      cemented: "D3",
    },

    {
      id: 10,
      name: "L31",
      label: "L31",
      type: "Positive Meniscus",
      nd: 1.743997,
      vd: 44.78,
      focalLengthMm: 134.8,
      glass: "S-LAM2 (OHARA)",
      role: "Leading positive element of the internal focusing group.",
    },
    {
      id: 11,
      name: "L32",
      label: "L32",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -152.0,
      glass: "S-TIH53 (OHARA)",
      role: "High-dispersion negative component of the focusing doublet.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L33",
      label: "L33",
      type: "Biconvex Positive",
      nd: 1.603001,
      vd: 65.46,
      focalLengthMm: 59.1,
      glass: "S-PHM53 (OHARA)",
      role: "Low-dispersion positive component carrying most of G3's power.",
      cemented: "D4",
    },

    {
      id: 13,
      name: "L41",
      label: "L41",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -180.0,
      glass: "S-TIH53 (OHARA)",
      role: "Single weak negative auxiliary compensator.",
    },

    {
      id: 14,
      name: "L51",
      label: "L51",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 185.6,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote: "ED fluorocrown; anomalous partial dispersion from catalog class.",
      role: "Front positive ED member of G5a.",
    },
    {
      id: 15,
      name: "L52",
      label: "L52",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 176.8,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote: "ED fluorocrown; anomalous partial dispersion from catalog class.",
      role: "Stop-adjacent positive ED member of G5a.",
    },

    {
      id: 16,
      name: "L53",
      label: "L53",
      type: "Biconvex Positive",
      nd: 1.72825,
      vd: 28.46,
      focalLengthMm: 70.1,
      glass: "S-TIH10 (OHARA)",
      role: "Positive dense-flint front component of the VR doublet.",
      cemented: "D5",
    },
    {
      id: 17,
      name: "L54",
      label: "L54",
      type: "Biconcave Negative",
      nd: 1.57957,
      vd: 53.71,
      focalLengthMm: -47.6,
      glass: "H-BaF3 (CDGM) / N-BALF4 class",
      role: "Negative barium light-flint component of the VR doublet.",
      cemented: "D5",
    },
    {
      id: 18,
      name: "L55",
      label: "L55",
      type: "Negative Meniscus",
      nd: 1.8044,
      vd: 39.57,
      focalLengthMm: -83.4,
      glass: "S-LAH63 (OHARA)",
      role: "Trailing negative singlet of the VR subgroup.",
    },

    {
      id: 19,
      name: "L56",
      label: "L56",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 92.7,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote: "ED fluorocrown; anomalous partial dispersion from catalog class.",
      role: "First positive ED element of G5c.",
    },
    {
      id: 20,
      name: "L57",
      label: "L57",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      focalLengthMm: 77.2,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote: "ED fluorocrown; anomalous partial dispersion from catalog class.",
      role: "Strong positive ED relay element.",
    },
    {
      id: 21,
      name: "L58",
      label: "L58",
      type: "Negative Meniscus",
      nd: 1.85026,
      vd: 32.35,
      focalLengthMm: -98.4,
      glass: "J-LASF021 / S-LAH71 class",
      role: "Rear high-index negative field-correcting meniscus.",
    },
  ],

  surfaces: [
    { label: "1", R: 381.302, d: 2.5, sd: 37.5, medium: 1 },
    { label: "2", R: 106.425, d: 8.8, sd: 37.5, medium: 2 },
    { label: "3", R: -1149.1256, d: 0.1, sd: 37.0 },
    { label: "4", R: 98.2127, d: 8.5, sd: 36.5, medium: 3 },
    { label: "5", R: -1919.418, d: 0.1, sd: 36.5 },
    { label: "6", R: 66.6347, d: 8.5, sd: 32.8, medium: 4 },
    { label: "7", R: 293.0617, sd: 32.8 },

    { label: "8", R: 228.7827, d: 2.1, sd: 25.0, medium: 5 },
    { label: "9", R: 33.2041, d: 10.0, sd: 20.4 },
    { label: "10", R: -117.4258, d: 2.1, sd: 21.1, medium: 6 },
    { label: "11", R: 37.996, d: 6.2, sd: 21.1, medium: 7 },
    // Surfaces 12 and 14: the f/2.89 on-axis ray height at 196 mm, infinity focus, rounded up to 0.1 mm.
    // Surface 13 carries the surface-14 value: FIG. 26 cuts the L24 rim square.
    { label: "12", R: 287.5696, d: 4.2, sd: 18.8 },
    { label: "13", R: -53.8038, d: 3.3, sd: 19.1, medium: 8 },
    { label: "14", R: -38.973, d: 2.1, sd: 19.1, medium: 9 },
    { label: "15", R: -2687.3318, sd: 22.0 },

    { label: "16", R: -1365.0388, d: 3.8, sd: 25.0, medium: 10 },
    { label: "17", R: -93.5331, d: 0.1, sd: 25.0 },
    { label: "18", R: 77.7004, d: 2.4, sd: 24.0, medium: 11 },
    { label: "19", R: 47.761, d: 8.8, sd: 23.3, medium: 12 },
    { label: "20", R: -130.8829, sd: 23.3 },

    { label: "21", R: -90.0052, d: 2.5, sd: 20.5, medium: 13 },
    { label: "22", R: -222.5672, sd: 20.5 },

    { label: "23", R: 156.581, d: 3.8, sd: 22.5, medium: 14 },
    { label: "24", R: -223.4996, d: 0.1, sd: 22.5 },
    { label: "25", R: 48.3764, d: 4.0, sd: 21.7, medium: 15 },
    { label: "26", R: 104.4479, d: 6.6, sd: 21.7 },
    { label: "STO", R: "flat", d: 15.4 },
    { label: "28", R: 629.9782, d: 3.8, sd: 18.0, medium: 16 },
    { label: "29", R: -55.448, d: 1.6, sd: 18.0, medium: 17 },
    { label: "30", R: 55.4345, d: 4.0, sd: 18.0 },
    { label: "31", R: 482.0258, d: 1.6, sd: 18.5, medium: 18 },
    { label: "32", R: 58.8315, d: 4.0, sd: 18.5 },
    { label: "33", R: 182.5454, d: 5.0, sd: 20.0, medium: 19 },
    { label: "34", R: -61.2108, d: 0.1, sd: 20.0 },
    { label: "35", R: 40.0944, d: 6.5, sd: 20.0, medium: 20 },
    { label: "36", R: -880.4337, d: 4.75, sd: 20.0 },
    { label: "37", R: -53.2131, d: 2.0, sd: 19.5, medium: 21 },
    { label: "38", R: -148.8412, sd: 19.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 71.4, label: "Wide" },
      { focalLengthMm: 135, label: "Middle" },
      { focalLengthMm: 196, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 1.4,
    description:
      "Internal focusing by imageward translation of G3. Close-focus spacing is a paraxial reconstruction constrained by Nikon's published 1.4 m minimum focus distance.",
  },

  gaps: {
    "7": {
      label: "d1 G1-G2",
      values: [
        [2.054, 2.054],
        [23.103, 23.103],
        [30.776, 30.776],
      ],
    },
    "15": {
      label: "d2 G2-G3",
      values: [
        [25.896, 28.4740718973],
        [13.196, 20.5088917687],
        [2.011, 15.1820736458],
      ],
    },
    "20": {
      label: "d3 G3-G4",
      values: [
        [5.289, 2.7109281027],
        [12.53, 5.2171082313],
        [16.871, 3.6999263542],
      ],
    },
    "22": {
      label: "d4 G4-G5",
      values: [
        [19.899, 19.899],
        [4.308, 4.308],
        [3.48, 3.48],
      ],
    },
    "38": {
      label: "BF",
      values: [
        [53.787, 53.787],
        [53.787, 53.787],
        [53.787, 53.787],
      ],
    },
  },

  aperture: { nominalFNumber: 2.89, fStops: [2.89, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "G1 +", fromSurface: "1", toSurface: "7" },
    { text: "G2 -", fromSurface: "8", toSurface: "15" },
    { text: "G3 + / IF", fromSurface: "16", toSurface: "20" },
    { text: "G4 -", fromSurface: "21", toSurface: "22" },
    { text: "G5a +", fromSurface: "23", toSurface: "26" },
    { text: "G5b - / VR", fromSurface: "28", toSurface: "32" },
    { text: "G5c +", fromSurface: "33", toSurface: "38" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
    { text: "D4", fromSurface: "18", toSurface: "20" },
    { text: "D5", fromSurface: "28", toSurface: "30" },
  ],

  layout: { scFill: 0.62, yScFill: 0.78 },

  checks: {
    gapSagFrac: 0.96, // L23 rear (12) / L24 front (13): 95.4 % of the 4.2 mm gap at the 18.8 mm rim, 0.19 mm clear
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
