import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON RF 100-500mm f/4.5-7.1 L IS USM                      ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 2021/0003832 A1, Numerical Example 2.                       ║
 * ║  Correlation target: production Canon RF100-500mm F4.5-7.1 L IS USM.    ║
 * ║  Patent model: 20 elements / 14 air-separated groups; 8 zoom units;      ║
 * ║  all-spherical; no scaling.                                               ║
 * ║                                                                            ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes only      ║
 * ║  infinity-focus zoom spacings. It states that L4 moves object-side and    ║
 * ║  L6 image-side for closer focus, but gives no finite-focus coordinates.   ║
 * ║  All close-focus entries in `var` therefore duplicate infinity values.    ║
 * ║                                                                            ║
 * ║  Zoom gaps: patent d5, d10, d16, d18, d25, d28, d30, d35. L4 reverses    ║
 * ║  between wide→middle and middle→tele, so the 225 mm control point is      ║
 * ║  retained. Surface 16 is represented by the required label `STO`.         ║
 * ║                                                                            ║
 * ║  Rear normalization: source surfaces 36-37 are optical block G            ║
 * ║  (1.00 mm, nd=1.51633) plus 1.00 mm air and are excluded. The authored   ║
 * ║  gap after surface 35 is the equivalent-air distance                      ║
 * ║  d35 + 1/1.51633 + 1, giving 21.139487 / 32.089487 / 63.569487 mm.       ║
 * ║                                                                            ║
 * ║  Semi-diameters are modeling values, not patent clear apertures. They     ║
 * ║  were derived from sequential y-nu marginal/chief-ray envelopes at the    ║
 * ║  three published infinity zoom states using 0.60× the patent half-field,  ║
 * ║  then constrained by element edge thickness, actual spherical rim slope,  ║
 * ║  shared-gap sag intrusion, the 93.8 mm production barrel OD, and Fig. 3.  ║
 * ║  Default on-axis and off-axis LensVisualizer ray fractions remain inside  ║
 * ║  the authored apertures at all three zoom control points. A 600 dpi       ║
 * ║  figure audit restores terminal L82/L83 to a 17.2-17.9 mm rim envelope.  ║
 * ║                                                                            ║
 * ║  Spectral note: the patent publishes nd, vd, and theta_gF, not nC/nF/ng.  ║
 * ║  Structured dPgF is derived from each patent theta_gF row. Named OHARA   ║
 * ║  and HOYA equivalents supply coordinate-compatible catalog curves, not   ║
 * ║  patent values or supplier attributions.                                  ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-100-500mm-f45-71-l-is-usm",
  maker: "Canon",
  name: "CANON RF 100-500mm f/4.5-7.1 L IS USM",
  subtitle: "US 2021/0003832 A1 — Numerical Example 2; production correlation to RF100-500mm F4.5-7.1 L IS USM",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "20 ELEMENTS / 14 GROUPS",
      "100-500mm f/4.5-7.1 (MARKETED)",
      "EXAMPLE 2: 103-490mm f/4.60-7.20",
      "8 ZOOM UNITS (+ - + - + - + -)",
      "WIDE→TELE: L1/L3/L5-L8 OBJECT-SIDE; L2 FIXED; L4 REVERSES",
      "CLOSE FOCUS: L4 OBJECT-SIDE / L6 IMAGE-SIDE (UNMODELED)",
      "ALL-SPHERICAL",
    ],
    elementCount: 20,
    groupCount: 14,
    focalLengthMm: { marketing: [100, 500], design: [102.988151, 489.985751] },
    fNumber: { marketing: 4.5, design: 4.6 },
  },

  source: {
    patentNumber: "US 2021/0003832 A1",
    patentYear: 2021,
    authors: ["Masato Katayose", "Junya Ichimura"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 264.36,
      glass: "S-FPL51 (OHARA catalog equivalent; production supplier unspecified)",
      apd: "patent",
      apdNote: "Patent theta_gF=0.5375; dPgF is derived from the patent row.",
      diagramLabel: "11",
      dPgF: 0.03085028,
    },
    {
      id: 2,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.6134,
      vd: 44.27,
      focalLengthMm: -203.84,
      glass: "S-NBM51 (OHARA catalog equivalent; production supplier unspecified)",
      diagramLabel: "12",
      cemented: "D12-13",
      dPgF: -0.00603786,
    },
    {
      id: 3,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.66,
      focalLengthMm: 163.66,
      glass: "S-FPL55 (OHARA catalog equivalent; production supplier unspecified)",
      apd: "patent",
      apdNote: "Patent theta_gF=0.5340; dPgF is derived from the patent row.",
      diagramLabel: "13",
      cemented: "D12-13",
      dPgF: 0.04941812,
    },
    {
      id: 4,
      name: "L21",
      label: "Element 21",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.53,
      focalLengthMm: -93.53,
      glass: "S-LAL14 (OHARA catalog equivalent; production supplier unspecified)",
      diagramLabel: "21",
      dPgF: -0.00699854,
    },
    {
      id: 5,
      name: "L22",
      label: "Element 22",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: -64.48,
      glass: "S-FPL51 (OHARA catalog equivalent; production supplier unspecified)",
      apd: "patent",
      apdNote: "Patent theta_gF=0.5375; dPgF is derived from the patent row.",
      diagramLabel: "22",
      cemented: "D22-23",
      dPgF: 0.03085028,
    },
    {
      id: 6,
      name: "L23",
      label: "Element 23",
      type: "Positive Meniscus",
      nd: 1.76182,
      vd: 26.52,
      focalLengthMm: 106.95,
      glass: "S-TIH14 (OHARA catalog equivalent; production supplier unspecified)",
      diagramLabel: "23",
      cemented: "D22-23",
      dPgF: 0.01440664,
    },
    {
      id: 7,
      name: "L31",
      label: "Element 31",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 68.05,
      glass: "S-FPL51 (OHARA catalog equivalent; production supplier unspecified)",
      apd: "patent",
      apdNote: "Patent theta_gF=0.5375; dPgF is derived from the patent row.",
      diagramLabel: "31",
      dPgF: 0.03085028,
    },
    {
      id: 8,
      name: "L32",
      label: "Element 32",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.31,
      focalLengthMm: 55.31,
      glass: "S-FTM16 (OHARA catalog equivalent; production supplier unspecified)",
      diagramLabel: "32",
      cemented: "D32-33",
      dPgF: 0.00889142,
    },
    {
      id: 9,
      name: "L33",
      label: "Element 33",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.32,
      focalLengthMm: -44.06,
      glass: "TAFD45L (HOYA catalog equivalent; production supplier unspecified; patent class 954323)",
      diagramLabel: "33",
      cemented: "D32-33",
      dPgF: 0.00036224,
    },
    {
      id: 10,
      name: "L41",
      label: "Element 41",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: -99.09,
      glass: "S-FPL51 (OHARA catalog equivalent; production supplier unspecified)",
      apd: "patent",
      apdNote: "Patent theta_gF=0.5375; dPgF is derived from the patent row.",
      diagramLabel: "41",
      dPgF: 0.03085028,
    },
    {
      id: 11,
      name: "L51",
      label: "Element 51",
      type: "Positive Meniscus",
      nd: 1.68893,
      vd: 31.07,
      focalLengthMm: 63.84,
      glass: "S-TIM28 (OHARA catalog equivalent; production supplier unspecified)",
      diagramLabel: "51",
      dPgF: 0.00885974,
    },
    {
      id: 12,
      name: "L52",
      label: "Element 52",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.9,
      focalLengthMm: 52.11,
      glass: "S-NSL3 (OHARA catalog equivalent; production supplier unspecified)",
      diagramLabel: "52",
      cemented: "D52-53",
      dPgF: 0.0009698,
    },
    {
      id: 13,
      name: "L53",
      label: "Element 53",
      type: "Negative Meniscus",
      nd: 2.0509,
      vd: 26.94,
      focalLengthMm: -40.36,
      glass: "TAFD65 (HOYA catalog equivalent; production supplier unspecified; patent class 051269)",
      diagramLabel: "53",
      cemented: "D52-53",
      dPgF: 0.00691308,
    },
    {
      id: 14,
      name: "L54",
      label: "Element 54",
      type: "Plano-Convex Positive",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 93.3,
      glass: "S-FPL51 (OHARA catalog equivalent; production supplier unspecified)",
      apd: "patent",
      apdNote: "Patent theta_gF=0.5375; dPgF is derived from the patent row.",
      diagramLabel: "54",
      dPgF: 0.03085028,
    },
    {
      id: 15,
      name: "L61",
      label: "Element 61",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.79,
      focalLengthMm: 72.6,
      glass: "S-TIM22 (OHARA catalog equivalent; production supplier unspecified)",
      diagramLabel: "61",
      cemented: "D61-62",
      dPgF: 0.00683478,
    },
    {
      id: 16,
      name: "L62",
      label: "Element 62",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -33.13,
      glass: "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      diagramLabel: "62",
      cemented: "D61-62",
      dPgF: -0.0083728,
    },
    {
      id: 17,
      name: "L71",
      label: "Element 71",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.23,
      focalLengthMm: 67.32,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      diagramLabel: "71",
      dPgF: 0.00432686,
    },
    {
      id: 18,
      name: "L81",
      label: "Element 81",
      type: "Biconcave Negative",
      nd: 1.59282,
      vd: 68.63,
      focalLengthMm: -51.96,
      glass: "FCD515 (HOYA catalog equivalent; production supplier unspecified; patent class 593686)",
      apd: "patent",
      apdNote: "Patent theta_gF=0.5446; dPgF is derived from the patent row.",
      diagramLabel: "81",
      dPgF: 0.01623566,
    },
    {
      id: 19,
      name: "L82",
      label: "Element 82",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: -63.16,
      glass: "S-FPL51 (OHARA catalog equivalent; production supplier unspecified)",
      apd: "patent",
      apdNote: "Patent theta_gF=0.5375; dPgF is derived from the patent row.",
      diagramLabel: "82",
      cemented: "D82-83",
      dPgF: 0.03085028,
    },
    {
      id: 20,
      name: "L83",
      label: "Element 83",
      type: "Biconvex Positive",
      nd: 1.72047,
      vd: 34.71,
      focalLengthMm: 66.42,
      glass: "S-NBH8 (OHARA catalog equivalent; production supplier unspecified)",
      diagramLabel: "83",
      cemented: "D82-83",
      dPgF: -0.00201778,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 119.358, d: 7.73, sd: 44.1, medium: 1 },
    { label: "2", R: 1275.564, d: 0.2, sd: 42.5 },
    { label: "3", R: 135.831, d: 2.7, sd: 35.0, medium: 2 },
    { label: "4", R: 64.613, d: 10.4, sd: 35.6, medium: 3 },
    { label: "5", R: 613.372, sd: 35.2 },
    { label: "6", R: 677.114, d: 1.5, sd: 17.2, medium: 4 },
    { label: "7", R: 59.396, d: 4.31, sd: 14.5 },
    { label: "8", R: -57.692, d: 1.5, sd: 16.2, medium: 5 },
    { label: "9", R: 72.706, d: 3.01, sd: 16.3, medium: 6 },
    { label: "10", R: 663.179, sd: 16.4 },
    { label: "11", R: 51.886, d: 6.54, sd: 17.0, medium: 7 },
    { label: "12", R: -93.065, d: 0.2, sd: 16.5 },
    { label: "13", R: 55.544, d: 5.65, sd: 16.5, medium: 8 },
    { label: "14", R: -76.962, d: 1.8, sd: 15.5, medium: 9 },
    { label: "15", R: 93.608, d: 5, sd: 15.2 },
    { label: "STO", R: "flat" },
    { label: "17", R: -38.443, d: 1.1, sd: 14.3, medium: 10 },
    { label: "18", R: -176.882, sd: 14.4 },
    { label: "19", R: -332.898, d: 4.01, sd: 17.0, medium: 11 },
    { label: "20", R: -39.041, d: 0.2, sd: 17.0 },
    { label: "21", R: 109.93, d: 4.88, sd: 15.0, medium: 12 },
    { label: "22", R: -35.252, d: 1.3, sd: 15.6, medium: 13 },
    { label: "23", R: -212.824, d: 0.2, sd: 15.8 },
    { label: "24", R: 46.37, d: 3.41, sd: 17.0, medium: 14 },
    { label: "25", R: "flat", sd: 16.2 },
    { label: "26", R: 119.406, d: 2.86, sd: 14.5, medium: 15 },
    { label: "27", R: -76.832, d: 1.2, sd: 14.1, medium: 16 },
    { label: "28", R: 38.643, sd: 14.0 },
    { label: "29", R: 57.241, d: 5.79, sd: 15.2, medium: 17 },
    { label: "30", R: -74.354, sd: 15.0 },
    { label: "31", R: -92.834, d: 1.4, sd: 12.8, medium: 18 },
    { label: "32", R: 46.355, d: 4.59, sd: 12.6 },
    { label: "33", R: -64.622, d: 1.4, sd: 17.2, medium: 19 },
    { label: "34", R: 61.474, d: 4.87, sd: 17.5, medium: 20 },
    { label: "35", R: -208.837, sd: 17.9 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 103, nominalFNumber: 4.6, label: "Wide" },
      { focalLengthMm: 225, nominalFNumber: 5.16 },
      { focalLengthMm: 490, nominalFNumber: 7.2, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.9,
    description:
      "NO_INTERNAL_RECONSTRUCTION: the patent publishes infinity-focus zoom spacings only. " +
      "For closer focus it states that L4 moves object-side and L6 image-side, " +
      "but no finite-focus positions are authored.",
  },

  /* (moved from var) Published infinity-focus zoom states only; no finite-focus reconstruction. */
  gaps: {
    "5": {
      label: "D5",
      values: [
        [7.56, 7.56],
        [70.22, 70.22],
        [97.56, 97.56],
      ],
    },
    "10": {
      label: "D10",
      values: [
        [27.18, 27.18],
        [20.78, 20.78],
        [1.3, 1.3],
      ],
    },
    STO: {
      label: "D16",
      values: [
        [12.74, 12.74],
        [21.19, 21.19],
        [26.16, 26.16],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [15.6, 15.6],
        [7.14, 7.14],
        [2.17, 2.17],
      ],
    },
    "25": {
      label: "D25",
      values: [
        [15.53, 15.53],
        [7.98, 7.98],
        [2.3, 2.3],
      ],
    },
    "28": {
      label: "D28",
      values: [
        [14.98, 14.98],
        [22.53, 22.53],
        [28.21, 28.21],
      ],
    },
    "30": {
      label: "D30",
      values: [
        [19.04, 19.04],
        [14.49, 14.49],
        [2.5, 2.5],
      ],
    },
    "35": {
      label: "BF",
      values: [
        [21.139487, 21.139487],
        [32.089487, 32.089487],
        [63.569487, 63.569487],
      ],
    },
  },

  aperture: { fStops: [4.6, 5.6, 8, 11, 16, 22, 32, 45, 54], maxFNumber: 54, blades: 9 },

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2 (-)", fromSurface: "6", toSurface: "10" },
    { text: "L3 (+)", fromSurface: "11", toSurface: "15" },
    { text: "L4 (-)", fromSurface: "17", toSurface: "18" },
    { text: "L5 (+)", fromSurface: "19", toSurface: "25" },
    { text: "L6 (-)", fromSurface: "26", toSurface: "28" },
    { text: "L7 (+)", fromSurface: "29", toSurface: "30" },
    { text: "L8 (-)", fromSurface: "31", toSurface: "35" },
  ],
  doublets: [
    { text: "12+13", fromSurface: "3", toSurface: "5" },
    { text: "22+23", fromSurface: "8", toSurface: "10" },
    { text: "32+33", fromSurface: "13", toSurface: "15" },
    { text: "52+53", fromSurface: "21", toSurface: "23" },
    { text: "61+62", fromSurface: "26", toSurface: "28" },
    { text: "82+83", fromSurface: "33", toSurface: "35" },
  ],

  layout: { yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
