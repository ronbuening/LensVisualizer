import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Olympus ZUIKO DIGITAL ED 300mm F2.8: US6927926B2, Numerical data 3.
 * Native spherical prescription: 12 powered elements / 10 air-separated groups.
 * Official July 18, 2006 correction: nd5 51.49700 -> 1.49700 (PDF19).
 * No scale change. Unprinted image gap is derived from corrected infinity optics.
 * All lens semi-diameters are inferred from Fig7 and axial-ray requirements;
 * the stop radius is derived from the design f-number, table f/2.80. This is
 * not independent physical iris evidence. Plot f/2.850 is retained as a
 * discrepancy.
 * Both published focus states retained. Linear intermediate states are illustrative.
 * Fixed-iris finite rays can be front-rim limited; no full-stop finite clearance claim.
 * Production lens is specified as 13/11 and requires a filter; counting that filter
 * explains the extra plane element/group by inference. Its prescription is absent
 * from this patent, so no guessed filter thickness/index/location is authored.
 * Catalog glass names are coordinate-compatible proxies, not factory identities.
 */

const LENS_DATA = {
  schema: 2,
  key: "olympus-zuiko-digital-ed-300mm-f28",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO DIGITAL ED 300mm f/2.8",
  subtitle: "US 6,927,926 B2 EXAMPLE 3 — native 12-element patent model; commercial correlation qualified",

  catalog: {
    lensMounts: ["four-thirds"],
    imageFormat: "four-thirds",
    specs: [
      "12 POWERED ELEMENTS / 10 AIR-SPACED GROUPS",
      "DESIGN f ≈ 299.996 mm",
      "TABLE F/2.80; PLOTS F/2.850",
      "NATIVE PUBLISHED FLOATING-FOCUS ENDPOINTS",
    ],
    elementCount: 12,
    groupCount: 10,
    acceptsTeleconverters: true,
    focalLengthMm: { marketing: 300, design: 299.9958763853124 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 6,927,926 B2",
    patentYear: 2005,
    authors: ["Takashi Kasahara", "Masahiro Imamura"],
    assignees: ["Olympus Corporation"],
    errata: [
      {
        status: "corrected",
        surface: "5",
        field: "nd",
        printed: 51.497,
        applied: 1.497,
        evidence: ["source-summary", "sibling-example"],
        note: "Controlling authority: actual USPTO Certificate of Correction dated July18,2006, PDF19 column10 line10. Corrected native EFL supports source summary; Example1/2 nd5 also prints1.49700 (PDF15). No sibling prescription is imported.",
      },
      {
        status: "unresolved",
        note: "Numerical data3 prints Fno2.80 while Fig8A/9A print FNO2.850. The model calibrates to the table value and does not assert an explanation for the plot label.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1 (L11)",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.28,
      indexReference: "d",
      focalLengthMm: -515.7770820308451,
      glass: "S-LAM7 (OHARA coordinate-compatible dispersion proxy; supplier unconfirmed)",
      apd: false,
      role: "Negative constituent of patent group G1; standalone power is not its in-situ aberration contribution.",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2 (L12)",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 191.7726854911082,
      glass: "S-FPL51 (OHARA coordinate-compatible dispersion proxy; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Inferred from the S-FPL51 spectral proxy: catalog PgF ≈ 0.53746, ΔPgF ≈ +0.03081. The production lens has three ED elements; the patent does not establish their supplier or melt.",
      role: "Positive constituent of patent group G1; standalone power is not its in-situ aberration contribution.",
      diagramLabel: "L12",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3 (L13)",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 304.4047901603578,
      glass: "S-FPL51 (OHARA coordinate-compatible dispersion proxy; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Inferred from the S-FPL51 spectral proxy: catalog PgF ≈ 0.53746, ΔPgF ≈ +0.03081. The production lens has three ED elements; the patent does not establish their supplier or melt.",
      role: "Positive constituent of patent group G1; standalone power is not its in-situ aberration contribution.",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4 (L14)",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.16,
      indexReference: "d",
      focalLengthMm: -514.5236311539181,
      glass: "S-LAH60 (OHARA coordinate-compatible dispersion proxy; supplier unconfirmed)",
      apd: false,
      role: "Negative constituent of patent group G1; standalone power is not its in-situ aberration contribution.",
      diagramLabel: "L14",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5 (L21)",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      focalLengthMm: 186.0612718832679,
      glass: "S-TIH53 (OHARA coordinate-compatible dispersion proxy; supplier unconfirmed)",
      apd: false,
      role: "Positive constituent of patent group G2; standalone power is not its in-situ aberration contribution.",
      diagramLabel: "L21",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6 (L22)",
      type: "Negative Meniscus",
      nd: 1.6393,
      vd: 44.87,
      indexReference: "d",
      focalLengthMm: -221.7707116781513,
      glass: "S-BAM12 (OHARA coordinate-compatible dispersion proxy; supplier unconfirmed)",
      apd: false,
      role: "Negative constituent of patent group G2; standalone power is not its in-situ aberration contribution.",
      diagramLabel: "L22",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7 (L23)",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.53,
      indexReference: "d",
      focalLengthMm: -122.7974063077802,
      glass: "S-LAL14 (OHARA coordinate-compatible dispersion proxy; supplier unconfirmed)",
      apd: false,
      role: "Negative constituent of patent group G2; standalone power is not its in-situ aberration contribution.",
      diagramLabel: "L23",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8 (L31)",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 34.97,
      indexReference: "d",
      focalLengthMm: -221.33748005872732,
      glass: "S-LAM66 (OHARA coordinate-compatible dispersion proxy; supplier unconfirmed)",
      apd: false,
      role: "Negative constituent of patent group G3; standalone power is not its in-situ aberration contribution.",
      diagramLabel: "L31",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9 (L32)",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 90.98864416569099,
      glass: "S-FPL51 (OHARA coordinate-compatible dispersion proxy; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Inferred from the S-FPL51 spectral proxy: catalog PgF ≈ 0.53746, ΔPgF ≈ +0.03081. The production lens has three ED elements; the patent does not establish their supplier or melt.",
      role: "Positive constituent of patent group G3; standalone power is not its in-situ aberration contribution.",
      diagramLabel: "L32",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10 (L41)",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.82,
      indexReference: "d",
      focalLengthMm: -85.52476432753743,
      glass: "S-TIL26 (OHARA coordinate-compatible dispersion proxy; supplier unconfirmed)",
      apd: false,
      role: "Negative constituent of patent group G4; standalone power is not its in-situ aberration contribution.",
      diagramLabel: "L41",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11 (L42)",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 40.92,
      indexReference: "d",
      focalLengthMm: 71.09131039380429,
      glass: "S-LAH53 (OHARA coordinate-compatible dispersion proxy; supplier unconfirmed)",
      apd: false,
      role: "Positive constituent of patent group G4; standalone power is not its in-situ aberration contribution.",
      diagramLabel: "L42",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12 (L43)",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.53,
      indexReference: "d",
      focalLengthMm: -175.549509230341,
      glass: "S-LAL14 (OHARA coordinate-compatible dispersion proxy; supplier unconfirmed)",
      apd: false,
      role: "Negative constituent of patent group G4; standalone power is not its in-situ aberration contribution.",
      diagramLabel: "L43",
    },
  ],

  surfaces: [
    { label: "1", R: 248.8583, d: 6.2258, sd: 54, medium: 1 },
    { label: "2", R: 149.7739, d: 2.182, sd: 54 },
    { label: "3", R: 133.6304, d: 18.5, sd: 54, medium: 2 },
    { label: "4", R: -317.0995, d: 0.5859, sd: 54 },
    {
      label: "5",
      R: 130.9539,
      d: 14.496,
      sd: 52,
      medium: 3, // Printed 51.49700; corrected to 1.49700 by July 18, 2006 certificate, PDF 19.
    },
    { label: "6", R: 938.4581, d: 7.4719, sd: 52 },
    { label: "7", R: -399.8887, d: 6.0, sd: 49.5, medium: 4 },
    { label: "8", R: -5911.8564, sd: 49.5 },
    { label: "9", R: -1176.4309, d: 9.5252, sd: 33.5, medium: 5 },
    { label: "10", R: -139.4432, d: 3.588, sd: 33.5, medium: 6 },
    { label: "11", R: -8552.4362, d: 1.2541, sd: 33.5 },
    { label: "12", R: -1073.3817, d: 3.4426, sd: 32, medium: 7 },
    { label: "13", R: 93.0994, sd: 32 },
    { label: "14", R: 86.4715, d: 3.5687, sd: 30.5, medium: 8 },
    { label: "15", R: 57.056, d: 1.6186, sd: 30.5 },
    { label: "16", R: 58.0496, d: 12.1657, sd: 30.5, medium: 9 },
    { label: "17", R: -190.395, sd: 30.5 },
    { label: "STO", R: "flat", d: 12.0 },
    { label: "19", R: -719.5271, d: 4.568, sd: 24, medium: 10 },
    { label: "20", R: 52.1479, d: 10.0933, sd: 24, medium: 11 },
    { label: "21", R: 529.2439, d: 0.5526, sd: 24 },
    { label: "22", R: 68.1373, d: 6.3521, sd: 22, medium: 12 },
    { label: "23", R: 42.0858, d: 96.49353597833327, sd: 22 },
  ],

  focus: {
    closeFocusM: 2.0000485359783333,
    description:
      "G2 moves toward the image and G3 toward the object for closer focus; G1 and G4 stay nominally fixed. The patent's near-focus state is approximately 2 m, compared with the production lens's 2.4 m minimum. Intermediate spacings are interpolated. Clear apertures are inferred, and some rays vignette near full aperture.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 1685.0494,
        distanceReference: "first-surface",
        source:
          "US6927926B2 Numerical data3, PDF16, proximity D0 and D1/D2/D3. Last image gap is derived from infinity prescription; source-rounded finite residual retained.",
      },
    ],
    published: [1],
  },

  gaps: {
    "8": { label: "D1", values: [[52.2724, 69.4098]] },
    "13": { label: "D2", values: [[36.8207, 3.1843]] },
    "17": { label: "D3", values: [[5.22, 21.721]] },
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G2", fromSurface: "9", toSurface: "13" },
    { text: "G3", fromSurface: "14", toSurface: "17" },
    { text: "G4", fromSurface: "19", toSurface: "23" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "19", toSurface: "21" },
  ],

  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
