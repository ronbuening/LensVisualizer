import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF-S 18–135mm IS STM — US 2013/0088622 A1, Numerical Example 4.
 * Original shape/glass inspection: 2026-10-30; prescription PDF p. 39 / printed
 * p. 9, Fig. 13 PDF p. 23 / sheet 22. Native source raster is 300 ppi.
 * The source excludes surface 1 as a non-optical design dummy (paragraph 0095).
 * All 28 active R/d rows, 16 d-reference index/Abbe pairs, asphere, published
 * zoom gaps, fixed-iris rule and existing L4-only focus reconstruction are kept.
 * Published design focals are 18.60 / 50.99 / 130.48 mm; computed EFLs differ
 * slightly. No production-focal scaling or drawing-fit R/d tuning is applied.
 *
 * Clear caps retain the printed effective-diameter halves, except the existing
 * S9 11.2826 mm guard-constrained cap versus printed 11.30. The unchanged 0.90
 * air-gap guard rejects the literal cap; this is a retained model limitation.
 * Seven figure-supported outer shoulders preserve optical sd; bonded optical
 * interfaces are not made opaque. Source dimensions and native rim uncertainty
 * are distinguished in the audit and analysis.
 *
 * The current fixed runtime iris is 7.123822 mm, derived by the paraxial stop
 * rule, rather than the 7.2618 mm described by older runtime notes. Source row
 * 20 gives effective diameter 14.52 mm; a separate 7.26 mm real-ray diagnostic
 * approximates source f-numbers but does not establish a physical iris schedule.
 * No source finite-focus table is published. Existing 0.39 m reconstructed gaps
 * and all controls are preserved; finite and interpolated limits are disclosed.
 *
 * All 16 existing compatible curves are qualified spectral proxies. The source
 * gives d-line coordinates, not supplier, melt or historical chemistry, and no
 * position-specific C/F/g indices, partial dispersion or APD values. No such
 * per-lens overrides are added. E2 APD remains inferred.
 *
 * Figure 13's L3/L4 local labels conflict with paragraph 0088 and numerical unit
 * powers. Paragraph 0050/Claim 4 define okN for the whole zoom, while Table 1's
 * value matches L6 alone. Both source discrepancies remain explicitly qualified;
 * neither is repaired by changing the numerical prescription.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-s-18-135mm-f35-56-is-stm",
  maker: "Canon",
  name: "CANON EF-S 18-135mm f/3.5-5.6 IS STM",
  subtitle: "US 2013/0088622 A1 — Numerical Example 4; production correlation to EF-S 18–135mm IS STM",

  catalog: {
    lensMounts: ["canon-ef-s"],
    imageFormat: "aps-c",
    specs: [
      "MARKETED 18–135mm f/3.5–5.6",
      "PATENT 18.60–130.48mm f/3.59–5.97",
      "16 ELEMENTS / 11 PATENT CONSTRUCTION GROUPS",
      "6 MOVING ZOOM UNITS",
      "1 ASPHERICAL SURFACE",
    ],
    elementCount: 16,
    groupCount: 11,
    focalLengthMm: { marketing: [18, 135], design: [18.6, 130.48] },
    fNumber: { marketing: 3.5, design: 3.59 },
  },

  source: {
    patentNumber: "US 2013/0088622 A1",
    example: { label: "Numerical Example 4", id: "4" },
    patentYear: 2013,
    authors: ["Shigenobu Sugita"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Fig. 13 (PDF p. 23, sheet 22) locally labels the positive S14–15 unit L4 and the negative S16–17 unit L3. Paragraph 0088 (PDF p. 36) and Numerical Example 4 (PDF p. 39) give L3 positive before L4 negative. Numerical order and source optical values are preserved.",
      },
      {
        status: "unresolved",
        note: "Paragraph 0050 (PDF p. 33) and Claim 4 (PDF pp. 39–40) define okN using the entire zoom's rear principal point. Table 1 (PDF p. 39) gives okN=-1.311 mm, matching L6 alone (literal -1.311653 mm), while the literal full-system offset is -58.793082 mm. No source optical value or control is changed to fit that definition/table discrepancy.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "L1 element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: -165.36222507149722,
      glass:
        "847238 — dense flint class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Front-unit negative member of the cemented pair.",
      cemented: "C1",
    },
    {
      id: 2,
      name: "E2",
      label: "L1 element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      indexReference: "d",
      focalLengthMm: 116.09107434609513,
      glass:
        "497816 — low-dispersion crown class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      apd: "inferred",
      apdNote:
        "Inferred from the low-dispersion 1.49700/81.5 coordinate and compatible proxy; the source gives no position-specific APD value, and production UD counts do not identify this numerical position or its historical chemistry.",
      role: "Low-dispersion positive partner in the front cemented pair.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "E3",
      label: "L1 element 3",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.6,
      indexReference: "d",
      focalLengthMm: 111.9749239777085,
      glass: "603607 — crown class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Air-separated positive member completing L1.",
    },
    {
      id: 4,
      name: "E4",
      label: "L2 element 1",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: -20.29178678267285,
      glass:
        "835427 — lanthanum crown class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Strong negative front member of L2.",
    },
    {
      id: 5,
      name: "E5",
      label: "L2 element 2",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: -33.612211590798715,
      glass:
        "773496 — lanthanum crown class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Negative middle member of L2.",
    },
    {
      id: 6,
      name: "E6",
      label: "L2 element 3",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 24.157296602077544,
      glass:
        "847238 — dense flint class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Positive member of the rear cemented pair in L2.",
      cemented: "C2",
    },
    {
      id: 7,
      name: "E7",
      label: "L2 element 4",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: -46.64704669338085,
      glass:
        "773496 — lanthanum crown class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Negative rear member of L2.",
      cemented: "C2",
    },
    {
      id: 8,
      name: "E8",
      label: "L3",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 40.31286156907993,
      glass:
        "805254 — dense flint class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Positive third zoom unit.",
    },
    {
      id: 9,
      name: "E9",
      label: "L4",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.3,
      indexReference: "d",
      focalLengthMm: -31.85127331446981,
      glass:
        "904313 — high-index lanthanum class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Negative fourth zoom unit and reconstructed inner-focus unit.",
    },
    {
      id: 10,
      name: "E10",
      label: "L5A element 1",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      indexReference: "d",
      focalLengthMm: 29.604929155052215,
      glass: "603607 — crown class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Front positive member of L5A.",
    },
    {
      id: 11,
      name: "E11",
      label: "L5A element 2",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      indexReference: "d",
      focalLengthMm: 19.86605111811857,
      glass: "603607 — crown class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Positive member of the L5A cemented pair.",
      cemented: "C3",
    },
    {
      id: 12,
      name: "E12",
      label: "L5A element 3",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: -19.92556462783012,
      glass:
        "847238 — dense flint class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Negative partner completing positive L5A.",
      cemented: "C3",
    },
    {
      id: 13,
      name: "E13",
      label: "L5B element 1",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.3,
      indexReference: "d",
      focalLengthMm: -15.126045517881947,
      glass:
        "750353 — lanthanum flint/crown transition class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Negative member of the image-stabilizing L5B subunit.",
      cemented: "C4",
    },
    {
      id: 14,
      name: "E14",
      label: "L5B element 2",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 23.17115071278587,
      glass:
        "847238 — dense flint class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Positive partner in the transversely shiftable L5B subunit.",
      cemented: "C4",
    },
    {
      id: 15,
      name: "E15",
      label: "L6 element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.72151,
      vd: 29.2,
      indexReference: "d",
      focalLengthMm: -141.3741299576284,
      glass:
        "722292 — dense flint class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Aspheric negative member of the final positive unit.",
      cemented: "C5",
    },
    {
      id: 16,
      name: "E16",
      label: "L6 element 2",
      type: "Biconvex Positive",
      nd: 1.59551,
      vd: 39.2,
      indexReference: "d",
      focalLengthMm: 29.924022576120098,
      glass: "596392 — flint class (compatible spectral proxy; historical supplier, melt and chemistry unspecified)",
      role: "Positive rear member of L6.",
      cemented: "C5",
    },
  ],

  /* ── Surface prescription ──
   * Patent surface 1 is an inactive design dummy and is intentionally omitted.
   * Base d values are the first (wide/infinity) state. Patent surface 20 is relabeled STO.
   */
  surfaces: [
    { label: "2", R: 107.732, d: 1.9, sd: 26.125, medium: 1 },
    { label: "3", R: 60.391, d: 7.57, sd: 25.385, medium: 2 },
    { label: "4", R: -1239.687, d: 0.15, sd: 25.225, rimExtensionSd: 25.385 },
    { label: "5", R: 53.128, d: 6.09, sd: 24.19, medium: 3 },
    { label: "6", R: 238.329, sd: 23.78, rimExtensionSd: 24.19 },
    { label: "7", R: 164.319, d: 1.45, sd: 15.095, medium: 4 },
    { label: "8", R: 15.295, d: 6.85, sd: 11.445, rimExtensionSd: 15.095 },
    { label: "9", R: -53.79, d: 1.2, sd: 11.2826, medium: 5 },
    { label: "10", R: 50.684, d: 0.88, sd: 11.07, rimExtensionSd: 11.2826 },
    { label: "11", R: 29.817, d: 5.57, sd: 11.185, medium: 6 },
    { label: "12", R: -59.549, d: 1.1, sd: 10.825, medium: 7 },
    { label: "13", R: 91.992, sd: 10.385, rimExtensionSd: 10.825 },
    { label: "14", R: 57.606, d: 1.95, sd: 7.07, medium: 8 },
    { label: "15", R: -73.234, sd: 7.09 },
    { label: "16", R: -35.671, d: 0.7, sd: 6.835, medium: 9 },
    { label: "17", R: 150.44, sd: 6.96 },
    { label: "18", R: 30.381, d: 3.4, sd: 7.51, medium: 10 },
    { label: "19", R: -41.483, d: 0.83, sd: 7.475 },
    // Patent s20 (Stop). Numerical Example 4 patent surface table prints a 14.52 mm effective diameter.
    { label: "STO", R: "flat", d: 3.3 },
    { label: "21", R: 25.373, d: 4.95, sd: 7.13, medium: 11 },
    { label: "22", R: -21.035, d: 0.75, sd: 6.74, medium: 12 },
    { label: "23", R: 86.598, d: 3.56, sd: 6.59, rimExtensionSd: 6.74 },
    { label: "24", R: -136.978, d: 0.7, sd: 6.405, medium: 13 },
    { label: "25", R: 12.387, d: 2.58, sd: 6.435, medium: 14 },
    { label: "26", R: 30.397, sd: 6.42 },
    {
      label: "27A",
      R: 47.113,
      d: 1.0,
      sd: 7.715,
      rimExtensionSd: 7.92,
      medium: 15,
      asphere: { K: 0, A4: -2.10453e-5, A6: -4.04601e-8, A8: 9.66019e-10, A10: -2.17624e-11, A12: 1.50968e-13, A14: 0 },
    },
    { label: "28", R: 31.941, d: 3.58, sd: 7.92, medium: 16 },
    { label: "29", R: -38.622, sd: 8.215 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 18.6, nominalFNumber: 3.59, label: "Wide" },
      { focalLengthMm: 50.99, nominalFNumber: 4.88 },
      { focalLengthMm: 130.48, nominalFNumber: 5.97, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 0.39,
    description:
      "CONSTRAINED_RECONSTRUCTION: L4 alone moves objectward from infinity to 0.39 m; d15+d17 is conserved at each zoom position. The patent gives the focus direction but no close-focus spacing rows, so these finite-focus states are code-solved modeling states, not published patent data.",
  },

  /* (moved from var) ── Zoom and focus spacing ──
   * Zoom-only: 6, 13, 26. Zoom + reconstructed L4 focus: 15, 17.
   */
  gaps: {
    "6": {
      label: "D6",
      values: [
        [0.9, 0.9],
        [22.59, 22.59],
        [42.1, 42.1],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [25.44, 25.44],
        [7.28, 7.28],
        [1.5, 1.5],
      ],
    },
    "15": {
      label: "D15 / FOCUS",
      values: [
        [2.65, 1.4790697552181582],
        [4.09, 1.6764213953340121],
        [7.85, 1.609328298720266],
      ],
    },
    "17": {
      label: "D17 / FOCUS",
      values: [
        [6.67, 7.840930244781841],
        [5.23, 7.643578604665988],
        [1.47, 7.7106717012797334],
      ],
    },
    "26": {
      label: "D26",
      values: [
        [5.22, 5.22],
        [2.39, 2.39],
        [1.3, 1.3],
      ],
    },
    "29": {
      label: "BF",
      values: [
        [35.6, 35.6],
        [55.89, 55.89],
        [71.7, 71.7],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 5.6, 8, 11, 16], blades: 7 },

  groups: [
    { text: "L1 (+)", fromSurface: "2", toSurface: "6" },
    { text: "L2 (−)", fromSurface: "7", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "14", toSurface: "15" },
    { text: "L4 (− / FOCUS)", fromSurface: "16", toSurface: "17" },
    { text: "L5 (+)", fromSurface: "18", toSurface: "26" },
    { text: "L6 (+)", fromSurface: "27A", toSurface: "29" },
  ],
  doublets: [{ text: "L5B / IS", fromSurface: "24", toSurface: "26" }],

  layout: { yScFill: 0.54 },
} satisfies LensDataV2Input;

export default LENS_DATA;
