import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon RF-S 18–45mm f/4.5–6.3 IS STM — JP2021086024A, Numerical Example 2.
 * Original shape/glass review: 2026-10-30. Production correlation is unconfirmed.
 * Source surface/asphere tables: paragraph0086, PDFpp13–14; Figures3/4 PDFp24.
 * All source R/d, four K0/asphere sets, clearPhi/2 caps and zoom gaps remain.
 * Resolved S2 outer shoulder12.395 is separate from clear10.12; the outer height
 * follows the existing opposite cap, not a precision measurement of the diagram.
 * Extending the optical sphere to12.395 instead fails the current slope guard.
 * No cemented interfaces, hybrid layers, extra plates or inferred rim cuts.
 *
 * Paragraph0080 PDFp11 defines d587.56/F486.1/C656.3/g435.835nm. All seven media
 * carry explicit d references; positive citations stay here, outside uncertainty-
 * only indexReferenceNote. No numerical C/F/g/partial data is published or invented.
 * Seven qualified proxies retain five existing curves and add the 2026-10-31
 * E48R numerical proxy for L2/L7. A general resin preference does not identify
 * these particular elements. Source vendor, melt, chemistry and process remain
 * unspecified; the catalog polymer curve is not production material evidence.
 *
 * Printed design endpoints18.53/43.65 replace computed-EFL catalog metadata;
 * menu4.5/6.3 marketing presets become source4.56/6.5. Source station F numbers,
 * primary stop position and inferred per-zoom iris are unchanged. Source stopPhi
 *9.16 is recorded separately from inferred mechanical iris diameters.
 *
 * Focus and IS remain unreconstructed: source directions are given, numerical
 * finite-focus/IS displacements are absent. All focus inputs duplicate infinity.
 * Source camera plate is not listed.65-position collimated zoom checks retain
 * interval defocus and finite field limitations; source/plot residuals are not fit.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rfs-18-45mm-f45-63-is-stm",
  maker: "Canon",
  name: "CANON RF-S 18-45mm f/4.5-6.3 IS STM",
  subtitle: "JP 2021-86024 A — Numerical Example 2; strong production correlation, unscaled",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "aps-c",
    specs: [
      "7 ELEMENTS / 7 GROUPS",
      "18–45mm f/4.5–6.3 (marketed)",
      "18.53–43.65mm f/4.56–6.50 (patent)",
      "2 ASPHERICAL ELEMENTS / 4 ASPHERICAL SURFACES",
      "IN-LENS IS / LEAD-SCREW STM",
    ],
    elementCount: 7,
    groupCount: 7,
    focalLengthMm: { marketing: [18, 45], design: [18.53, 43.65] },
    // Scalar metadata fields retain the wide-end maximum aperture; `nominalFno` carries all design stations.
    fNumber: { marketing: 4.5, design: 4.56 },
  },

  source: {
    patentNumber: "JP 2021-86024 A",
    example: { label: "Numerical Example 2", id: "2" },
    patentYear: 2021,
    authors: ["Yuichi Gyoda"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Example2 paragraph0086 PDFpp13–14: literal model tele EFL43.626749900mm vs printed43.65; literal total lengths89.12/81.23/81.41mm vs89.11/81.23/81.40. Printed-value rounding may contribute, but no unique correction is proved; preserve all R/d/nd/aspheres/gaps.",
      },
      {
        status: "unresolved",
        note: "Native Figure4 PDFp24 wide distortion reads approximately−10.6±.2% at labeled33.8degrees; literal model at source33.78degrees gives−8.9269%. The standard equation and all source coefficient signs/exponents are retained. No unique source-supported replacement is established; do not fit the prescription to the plot.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.63854,
      indexReference: "d",
      vd: 55.4,
      focalLengthMm: -35.03,
      glass: "S-BSM18 (OHARA catalog equivalent; source vendor/chemistry unspecified)",
      role: "Front negative element of functional group B1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.5311,
      indexReference: "d",
      vd: 55.9,
      focalLengthMm: -60.57,
      glass: "E48R (published ZEON catalog curve; qualified numerical polymer proxy; source composition and supplier unspecified)",
      role: "Double-aspherical negative element in functional group B1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.84666,
      indexReference: "d",
      vd: 23.8,
      focalLengthMm: 74.25,
      glass: "J-SF03 (HIKARI catalog equivalent; source vendor/chemistry unspecified)",
      role: "Positive rear element of functional group B1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6968,
      indexReference: "d",
      vd: 55.5,
      focalLengthMm: 48.63,
      glass: "J-LAK14 (HIKARI catalog equivalent; source vendor/chemistry unspecified)",
      role: "Front positive element of B2 and the patent-designated image-stabilization subgroup B2A.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7725,
      indexReference: "d",
      vd: 49.6,
      focalLengthMm: 23.39,
      glass: "J-LASF016 (HIKARI catalog equivalent; source vendor/chemistry unspecified)",
      role: "Rear positive element of functional group B2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.84666,
      indexReference: "d",
      vd: 23.8,
      focalLengthMm: -23.06,
      glass: "J-SF03 (HIKARI catalog equivalent; source vendor/chemistry unspecified)",
      role: "Single-element negative focus group B3; finite-focus travel is not reconstructed.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.5311,
      indexReference: "d",
      vd: 55.9,
      focalLengthMm: 59.61,
      glass: "E48R (published ZEON catalog curve; qualified numerical polymer proxy; source composition and supplier unspecified)",
      role: "Double-aspherical positive final functional group B4.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 26.941, d: 1.0, sd: 12.395, medium: 1 },
    { label: "2", R: 12.045, d: 7.49, sd: 10.12, rimExtensionSd: 12.395 },
    {
      label: "3A",
      R: -1000.0,
      d: 1.7,
      sd: 9.82,
      medium: 2,
      asphere: { K: 0, A4: -1.41463e-4, A6: 7.66013e-7, A8: -1.2719e-9, A10: -1.10963e-11 },
    },
    {
      label: "4A",
      R: 33.26,
      d: 0.4,
      sd: 9.645,
      asphere: { K: 0, A4: -1.69055e-4, A6: 8.63631e-7, A8: -2.53183e-9, A10: -7.27576e-12 },
    },
    { label: "5", R: 46.469, d: 1.94, sd: 9.515, medium: 3 },
    { label: "6", R: 174.749, sd: 9.315 },
    { label: "7", R: 139.916, d: 1.73, sd: 4.49, medium: 4 },
    { label: "8", R: -44.483, d: 1.0, sd: 4.56 },
    // JP 2021-86024 A, Numerical Example 2 surface table, surface 9: printed
    // effective diameter 9.16 mm at the stop.
    { label: "STO", R: "flat", d: 1.5 },
    { label: "10", R: 16.314, d: 2.57, sd: 4.615, medium: 5 },
    { label: "11", R: 156.41, sd: 4.38 },
    { label: "12", R: -384.505, d: 0.7, sd: 3.96, medium: 6 },
    { label: "13", R: 20.582, sd: 3.855 },
    {
      label: "14A",
      R: -312.236,
      d: 2.08,
      sd: 5.395,
      medium: 7,
      asphere: { K: 0, A4: -9.44164e-6, A6: 5.54551e-7, A8: -1.94972e-8, A10: 2.35602e-10 },
    },
    { label: "15A", R: -28.811, sd: 5.73, asphere: { K: 0, A4: 3.12388e-5, A6: 2.318e-7, A8: 0, A10: 0 } },
  ],

  zoom: {
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 18.53, nominalFNumber: 4.56, label: "Wide" },
      { focalLengthMm: 30.0, nominalFNumber: 5.48 },
      { focalLengthMm: 43.65, nominalFNumber: 6.5, label: "Tele" },
    ],
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.2,
    description:
      "NO_INTERNAL_RECONSTRUCTION: JP 2021-86024 A Example 2 publishes only infinity-focus zoom spacings and states that B3 moves image-side toward close focus. Canon's 0.20 m AF MFD applies at 18 mm and is retained as product metadata; no finite-focus internal spacing is modeled.",
  },

  /* (moved from var) ── Published infinity-focus zoom spacings; no finite-focus reconstruction ── */
  gaps: {
    "6": {
      label: "D6",
      values: [
        [28.48, 28.48],
        [10.86, 10.86],
        [1.48, 1.48],
      ],
    },
    "11": {
      label: "D11",
      values: [
        [1.53, 1.53],
        [1.64, 1.64],
        [2.28, 2.28],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [8.52, 8.52],
        [8.41, 8.41],
        [7.77, 7.77],
      ],
    },
    "15A": {
      label: "BF",
      values: [
        [28.48, 28.48],
        [38.21, 38.21],
        [47.77, 47.77],
      ],
    },
  },

  aperture: { fStops: [4.56, 5.6, 6.5, 8, 11, 16], blades: 7 },

  groups: [
    { text: "B1", fromSurface: "1", toSurface: "6" },
    { text: "B2", fromSurface: "7", toSurface: "11" },
    { text: "B3 / FOCUS", fromSurface: "12", toSurface: "13" },
    { text: "B4", fromSurface: "14A", toSurface: "15A" },
  ],
  doublets: [],

  /* ── Layout ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
