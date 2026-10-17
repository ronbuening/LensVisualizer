import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * NIKON AF-S NIKKOR 70-200mm f/4 G ED VR — patent-correlated model.
 * Source: US 2017/0315337 A1, First Example / Example 1.
 * 20 elements / 14 physical optical groups; all-spherical prescription.
 *
 * Normalization: source surface 19 is the single STO. Source surface 25 is an
 * inactive air-to-air flare-stopper plane and is omitted; its 0.5000 mm spacing
 * is combined with source surface 24, giving d24 = 14.8500 mm.
 *
 * The published middle-state d18 = 2.127 mm is retained. Its rounded spacings
 * put the nominally fixed stop/G4 station 0.001 mm forward of the W/T station;
 * this source-precision discrepancy is not corrected by changing the prescription.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes G1B internal focusing
 * but no close-focus numerical spacing state. closeFocusM = 1.0 m is the production
 * observable only; the authored variable gaps preserve infinity-focus geometry at
 * every zoom station and do not invent G1B close-focus motion.
 *
 * The stop radius is derived from the design f-number, published FNO = 4.1, and
 * held at every zoom station. It is not a published diaphragm measurement. Other
 * semi-diameters are modeled from exact spherical d-line ray envelopes, then
 * checked for edge thickness, rim slope, cross-gap intrusion, sampled off-axis
 * containment, and a portable render-trim surrogate.
 *
 * Glass labels are HIKARI coordinate-exact catalog equivalents/candidates for the
 * patent nd/νd pairs; they do not assert that Nikon used HIKARI melts. The shared
 * catalog supplies dispersion without copied nC/nF/ng or vendor-normal-line dPgF values.
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-af-s-nikkor-70-200mm-f4g-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 70-200mm f/4 G ED VR",
  subtitle: "US 2017/0315337 A1 — Example 1; strong production correlation, not manufacturer-confirmed attribution",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "20 ELEMENTS / 14 GROUPS",
      "71.39–194.00 mm DESIGN EFL",
      "f/4.10 MODELED",
      "ALL-SPHERICAL",
      "INTERNAL ZOOM / VR GROUP",
    ],
    elementCount: 20,
    groupCount: 14,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    focalLengthMm: { marketing: [70, 200], design: [71.387353, 193.999701] },
    fNumber: { marketing: 4, design: 4.0997 },
  },

  source: {
    patentNumber: "US 2017/0315337 A1",
    patentYear: 2017,
    authors: ["Satoshi Yamaguchi", "Issei Tanaka"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Positive Meniscus",
      nd: 1.487490,
      vd: 70.31,
      indexReference: "d",
      focalLengthMm: 442.201754,
      glass: "J-FK5 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.903660,
      vd: 31.27,
      indexReference: "d",
      focalLengthMm: -177.522099,
      glass: "J-LASFH13 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L12",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconvex Positive",
      nd: 1.497820,
      vd: 82.57,
      indexReference: "d",
      focalLengthMm: 131.635126,
      glass: "J-FKH1 (HIKARI coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "ED-class spectral proxy: catalog J-FKH1 dPgF ≈ +0.0337. Not patent-measured dispersion or confirmation of the production melt.",
      diagramLabel: "L13",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.497820,
      vd: 82.57,
      indexReference: "d",
      focalLengthMm: 159.143358,
      glass: "J-FKH1 (HIKARI coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "ED-class spectral proxy: catalog J-FKH1 dPgF ≈ +0.0337. Not patent-measured dispersion or confirmation of the production melt.",
      diagramLabel: "L14",
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Biconcave Negative",
      nd: 1.834810,
      vd: 42.73,
      indexReference: "d",
      focalLengthMm: -52.832220,
      glass: "J-LASF05 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L21",
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.618000,
      vd: 63.34,
      indexReference: "d",
      focalLengthMm: -53.138500,
      glass: "J-PSK02 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L22",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Positive Meniscus",
      nd: 1.846660,
      vd: 23.80,
      indexReference: "d",
      focalLengthMm: 74.452527,
      glass: "J-SF03 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L23",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L24",
      label: "L24",
      type: "Biconcave Negative",
      nd: 1.729160,
      vd: 54.61,
      indexReference: "d",
      focalLengthMm: -52.520005,
      glass: "J-LAK18 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L24",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L25",
      label: "L25",
      type: "Plano-Convex",
      nd: 1.846660,
      vd: 23.80,
      indexReference: "d",
      focalLengthMm: 99.240545,
      glass: "J-SF03 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L25",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.717000,
      vd: 47.98,
      indexReference: "d",
      focalLengthMm: 39.620698,
      glass: "J-LAF3 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L31",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L32",
      label: "L32",
      type: "Negative Meniscus",
      nd: 1.903660,
      vd: 31.27,
      indexReference: "d",
      focalLengthMm: -65.881866,
      glass: "J-LASFH13 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L32",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L41",
      label: "L41",
      type: "Plano-Convex",
      nd: 1.772500,
      vd: 49.62,
      indexReference: "d",
      focalLengthMm: 63.740194,
      glass: "J-LASF016 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L41",
    },
    {
      id: 13,
      name: "L42",
      label: "L42",
      type: "Biconvex Positive",
      nd: 1.497820,
      vd: 82.57,
      indexReference: "d",
      focalLengthMm: 59.001577,
      glass: "J-FKH1 (HIKARI coordinate equivalent; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "ED-class spectral proxy: catalog J-FKH1 dPgF ≈ +0.0337. Not patent-measured dispersion or confirmation of the production melt.",
      diagramLabel: "L42",
      cemented: "D5",
    },
    {
      id: 14,
      name: "L43",
      label: "L43",
      type: "Biconcave Negative",
      nd: 1.903660,
      vd: 31.27,
      indexReference: "d",
      focalLengthMm: -36.757775,
      glass: "J-LASFH13 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L43",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L44",
      label: "L44",
      type: "Biconvex Positive",
      nd: 1.805180,
      vd: 25.45,
      indexReference: "d",
      focalLengthMm: 38.444202,
      glass: "J-SF6 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L44",
      cemented: "D6",
    },
    {
      id: 16,
      name: "L45",
      label: "L45",
      type: "Biconcave Negative",
      nd: 1.603110,
      vd: 60.69,
      indexReference: "d",
      focalLengthMm: -41.899277,
      glass: "J-SK14 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L45",
      cemented: "D6",
    },
    {
      id: 17,
      name: "L46",
      label: "L46",
      type: "Biconcave Negative",
      nd: 2.000690,
      vd: 25.46,
      indexReference: "d",
      focalLengthMm: -50.854562,
      glass: "J-LASFH17 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L46",
    },
    {
      id: 18,
      name: "L47",
      label: "L47",
      type: "Biconvex Positive",
      nd: 1.589130,
      vd: 61.22,
      indexReference: "d",
      focalLengthMm: 69.992903,
      glass: "J-SK5 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L47",
    },
    {
      id: 19,
      name: "L48",
      label: "L48",
      type: "Biconvex Positive",
      nd: 1.719990,
      vd: 50.27,
      indexReference: "d",
      focalLengthMm: 54.598201,
      glass: "J-LAK10 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L48",
    },
    {
      id: 20,
      name: "L49",
      label: "L49",
      type: "Negative Meniscus",
      nd: 1.834000,
      vd: 37.18,
      indexReference: "d",
      focalLengthMm: -63.635226,
      glass: "J-LASF010 (HIKARI coordinate equivalent; supplier unconfirmed)",
      diagramLabel: "L49",
    },
  ],

  surfaces: [
    { label: "1", R: 140.3879, d: 3.250000, sd: 29.900000, medium: 1 },
    { label: "2", R: 399.4846, d: 16.233100, sd: 29.900000 },
    { label: "3", R: 151.1551, d: 2.000000, sd: 27.400000, medium: 2 },
    { label: "4", R: 77.336, d: 6.200000, sd: 27.400000, medium: 3 },
    { label: "5", R: -417.8459, d: 0.100000, sd: 27.400000 },
    { label: "6", R: 72.3229, d: 5.200000, sd: 25.700000, medium: 4 },
    { label: "7", R: 810.3397, sd: 25.700000 },
    { label: "8", R: -398.4538, d: 1.300000, sd: 13.200000, medium: 5 },
    { label: "9", R: 49.6681, d: 3.900000, sd: 13.200000 },
    { label: "10", R: -83.0944, d: 1.250000, sd: 12.450000, medium: 6 },
    { label: "11", R: 54.611, d: 2.550000, sd: 12.450000, medium: 7 },
    { label: "12", R: 399.854, d: 1.450000, sd: 12.450000 },
    { label: "13", R: -70.8083, d: 1.250000, sd: 13.300000, medium: 8 },
    { label: "14", R: 84.023, d: 2.150000, sd: 13.300000, medium: 9 },
    { label: "15", R: "flat", sd: 13.300000 },
    { label: "16", R: 204.9027, d: 5.200000, sd: 14.100000, medium: 10 },
    { label: "17", R: -32.631, d: 1.400000, sd: 14.100000, medium: 11 },
    { label: "18", R: -73.679, sd: 14.100000 },
    { label: "STO", R: "flat", d: 0.400000 },
    { label: "20", R: 49.2393, d: 3.750000, sd: 14.400000, medium: 12 },
    { label: "21", R: "flat", d: 0.300000, sd: 14.400000 },
    { label: "22", R: 35.5052, d: 4.900000, sd: 13.600000, medium: 13 },
    { label: "23", R: -162.241, d: 1.850000, sd: 13.600000, medium: 14 },
    { label: "24", R: 41.994, d: 14.850000, sd: 13.600000 },
    { label: "26", R: 85.3575, d: 4.000000, sd: 11.300000, medium: 15 },
    { label: "27", R: -47.552, d: 1.200000, sd: 11.300000, medium: 16 },
    { label: "28", R: 54.4401, d: 4.000000, sd: 11.300000 },
    { label: "29", R: -254.0256, d: 1.200000, sd: 11.100000, medium: 17 },
    { label: "30", R: 63.7889, d: 3.900000, sd: 11.100000 },
    { label: "31", R: 81.7216, d: 4.000000, sd: 12.300000, medium: 18 },
    { label: "32", R: -81.7216, d: 0.700000, sd: 12.300000 },
    { label: "33", R: 77.7312, d: 4.200000, sd: 12.400000, medium: 19 },
    { label: "34", R: -77.7312, d: 6.500000, sd: 12.400000 },
    { label: "35", R: -41.7728, d: 2.000000, sd: 13.000000, medium: 20 },
    { label: "36", R: -200.4805, d: 63.693000, sd: 13.000000 },
  ],

  zoom: {
    stations: [{ focalLengthMm: 71.4, label: "Wide" }, { focalLengthMm: 135 }, { focalLengthMm: 194, label: "Tele" }],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 1.0,
    description:
      "Patent-published G1B internal focusing mechanism; numerical prescription is infinity-only at W/M/T, so no close-focus internal reconstruction is authored. The 1.0 m value is the production MFD observable only.",
  },

  gaps: {
    "7": {
      label: "d7",
      values: [
        [2.435, 2.435],
        [27.748, 27.748],
        [37.096, 37.096],
      ],
    },
    "15": {
      label: "d15",
      values: [
        [25.093, 25.093],
        [13.529, 13.529],
        [1.423, 1.423],
      ],
    },
    "18": {
      label: "d18",
      values: [
        [15.877, 15.877],
        [2.127, 2.127],
        [4.886, 4.886],
      ],
    },
  },

  aperture: { nominalFNumber: 4.0997, fStops: [4, 5.6, 8, 11, 16, 22] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "7" },
    { text: "G2", fromSurface: "8", toSurface: "15" },
    { text: "G3", fromSurface: "16", toSurface: "18" },
    { text: "G4", fromSurface: "20", toSurface: "36" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
    { text: "D4", fromSurface: "16", toSurface: "18" },
    { text: "D5", fromSurface: "22", toSurface: "24" },
    { text: "D6", fromSurface: "26", toSurface: "28" },
  ],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
