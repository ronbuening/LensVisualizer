import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SONY VARIO-TESSAR T* FE 16-35mm f/4 ZA OSS                                             ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2015-166834 A, Numerical Example 1 (Sony Corporation; Masaharu Hosoi).                   ║
 * ║ Correlation: Sony SEL1635Z Vario-Tessar T* FE 16-35mm F4 ZA OSS.                                   ║
 * ║ Patent prescription retained at native scale: f = 16.48 / 24.07 / 33.95 mm; Fno = 4.07/4.08/4.09. ║
 * ║ Physical count: 12 lenses / 10 air-separated lens units; four moving zoom groups; 8 aspheres.      ║
 * ║ Modeling count: 13 element entries because the bonded L12 aspheric resin is optically distinct.    ║
 * ║                                                                                                      ║
 * ║ Zoom variables: D9, D15, D17, BF. D9 and BF are zoom-only. D15/D17 are zoom + focus.                ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent states GR3 alone translates for focus but      ║
 * ║ publishes no close-focus row. Close states solve GR3 at Sony's 0.28 m MFD while conserving D15+D17.║
 * ║                                                                                                      ║
 * ║ Source correction: JP ¶0033 prints a dimensionally invalid y²c² asphere numerator. Computation and  ║
 * ║ this file use the standard c·y² numerator; K is otherwise retained without conversion.             ║
 * ║ JP ¶0032 defines n/ν at the d line (587.6 nm), but the printed indices are e-line values paired with ║
 * ║ d-line Abbe numbers given to one decimal: 11 of the 13 rows equal a catalog glass at the e line and  ║
 * ║ no row equals one at the d line. The printed values are stored unchanged and all 13 media are        ║
 * ║ e-referenced (indexReference "e"). L11 M-TAF101, L12 TAFD5F, L13/L41 TAF3, L14 TAFD55, L21 BAC4, L22 ║
 * ║ M-NBF1 and L42/L43 FCD1 (HOYA), L23 S-FPL51 (OHARA) and L31 J-FK5 (HIKARI) carry those names and     ║
 * ║ trace on catalog curves anchored to the printed index. L44 is named HOYA M-TAF401 on its index alone ║
 * ║ (ne equal to six decimals; vd 47.17 against the printed 47.1); the L12 resin stays Unmatched on the  ║
 * ║ Abbe estimate. The vd slot keeps the printed d-line Abbe number (catalog ve is 0.2 to 0.4 lower). The║
 * ║ names select dispersion curves; no production supplier is inferred. nC/nF/ng/dPgF remain unauthored. ║
 * ║ A14=0 is a schema-required modeling zero; the patent publishes coefficients through A12.             ║
 * ║                                                                                                      ║
 * ║ Semi-diameters are modeled, not patent-published. They were derived from real sequential ray bundles ║
 * ║ at all three zoom states and both focus endpoints, including on-axis marginal rays and full-field    ║
 * ║ chief/fan rays, then checked for edge thickness, actual aspheric rim slope, shared-gap intrusion,    ║
 * ║ and conic limits. The stop radius is derived from the design f-number at each zoom station. The      ║
 * ║ prior paraxial tele stop radius was 8.959 mm; the wide-open iris traced from nominalFno is 6.553     ║
 * ║ / 7.669 / 9.160 mm at wide/mid/tele.                                                                 ║
 * ║ No sensor cover glass, filters, inactive dummy planes, or mechanical parts are included.             ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sony-vario-tessar-t-fe-16-35-f4-za-oss-jp2015166834-ex1",
  maker: "Sony",
  name: "SONY VARIO-TESSAR T* FE 16-35mm f/4 ZA OSS",
  subtitle: "JP 2015-166834 A Example 1 — production correlation to SEL1635Z",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "12 ELEMENTS / 10 GROUPS",
      "PATENT f = 16.48 / 24.07 / 33.95 mm",
      "DESIGN FNO = 4.07 / 4.08 / 4.09",
      "PATENT 2ω = 108.08° / 83.10° / 63.60°",
      "8 ASPHERICAL SURFACES",
    ],
    elementCount: 12,
    groupCount: 10,
    focalLengthMm: {
      marketing: [16, 35],
      // Exact endpoint EFLs recomputed from the source-precision prescription; zoomPositions retain Table 2 labels.
      design: [16.481322652906012, 33.95489547260946],
    },
    fNumber: {
      marketing: 4,
      // Wide-position design value; the exact per-zoom design values are in nominalFno below.
      design: 4.07,
    },
  },

  source: {
    patentNumber: "JP 2015-166834 A",
    patentYear: 2015,
    authors: ["Masaharu Hosoi"],
    assignees: ["Sony Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.77173,
      vd: 49.2,
      indexReference: "e",
      indexReferenceNote:
        "Patent ¶0032 defines this column at the d line, but 11 of its 13 rows equal a catalog glass at the e line and none at the d line; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -29.1827,
      glass: "M-TAF101 (HOYA; catalog ne 1.77173, vd 49.24, printed 49.2; supplier unconfirmed)",
      role: "Front negative meniscus of GR1.",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12g",
      label: "L12 glass substrate",
      type: "Negative Meniscus Substrate",
      nd: 1.83945,
      vd: 42.7,
      indexReference: "e",
      indexReferenceNote:
        "Patent ¶0032 defines this column at the d line, but 11 of its 13 rows equal a catalog glass at the e line and none at the d line; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -54.7245,
      glass: "TAFD5F (HOYA; catalog ne 1.83945, vd 42.72, printed 42.7; supplier unconfirmed)",
      role: "Glass substrate of the L12 hybrid-composite negative lens.",
      diagramLabel: "L12",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L12r",
      label: "L12 bonded aspheric resin",
      type: "Bonded Aspheric Resin Layer",
      nd: 1.53699,
      vd: 41.7,
      indexReference: "e",
      indexReferenceNote:
        "Patent ¶0032 defines this column at the d line, but 11 of its 13 rows equal a catalog glass at the e line and none at the d line; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 443.5929,
      glass: "Unmatched (aspheric resin; printed coordinates, no vendor row at either the d or the e line)",
      role: "Thin bonded resin layer carrying the L12 rear asphere.",
      diagramLabel: "L12r",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L13",
      label: "L13",
      type: "Negative Meniscus",
      nd: 1.80831,
      vd: 46.5,
      indexReference: "e",
      indexReferenceNote:
        "Patent ¶0032 defines this column at the d line, but 11 of its 13 rows equal a catalog glass at the e line and none at the d line; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -102.7999,
      glass: "TAF3 (HOYA; catalog ne 1.80831, vd 46.50 as printed; supplier unconfirmed)",
      role: "Third negative component of GR1.",
      diagramLabel: "L13",
    },
    {
      id: 5,
      name: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 2.00912,
      vd: 29.1,
      indexReference: "e",
      indexReferenceNote:
        "Patent ¶0032 defines this column at the d line, but 11 of its 13 rows equal a catalog glass at the e line and none at the d line; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 48.1494,
      glass: "TAFD55 (HOYA; catalog ne 2.00912, vd 29.13, printed 29.1; supplier unconfirmed)",
      role: "Positive rear component of GR1.",
      diagramLabel: "L14",
    },
    {
      id: 6,
      name: "L21",
      label: "L21 (OSS)",
      type: "Positive Meniscus",
      nd: 1.57124,
      vd: 56,
      indexReference: "e",
      indexReferenceNote:
        "Patent ¶0032 defines this column at the d line, but 11 of its 13 rows equal a catalog glass at the e line and none at the d line; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 148.1107,
      glass: "BAC4 (HOYA; catalog ne 1.57125, vd 56.04, printed 1.57124 / 56.0; supplier unconfirmed)",
      role: "Front component of GR2; patent-designated lateral image-stabilization lens.",
      diagramLabel: "L21",
    },
    {
      id: 7,
      name: "L22",
      label: "L22",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.74688,
      vd: 49.3,
      indexReference: "e",
      indexReferenceNote:
        "Patent ¶0032 defines this column at the d line, but 11 of its 13 rows equal a catalog glass at the e line and none at the d line; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -52.5347,
      glass: "M-NBF1 (HOYA; catalog ne 1.74689, vd 49.33, printed 1.74688 / 49.3; supplier unconfirmed)",
      role: "Negative member of the GR2 cemented doublet.",
      diagramLabel: "L22",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L23",
      label: "L23",
      type: "Positive Meniscus",
      nd: 1.49845,
      vd: 81.5,
      indexReference: "e",
      indexReferenceNote:
        "Patent ¶0032 defines this column at the d line, but 11 of its 13 rows equal a catalog glass at the e line and none at the d line; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 30.827,
      glass: "S-FPL51 (OHARA; catalog ne 1.49845, vd 81.546, printed 81.5; supplier unconfirmed)",
      role: "Very-low-dispersion positive member of the GR2 cemented doublet.",
      diagramLabel: "L23",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L31",
      label: "L31 focus lens",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.48914,
      vd: 70.3,
      indexReference: "e",
      indexReferenceNote:
        "Patent ¶0032 defines this column at the d line, but 11 of its 13 rows equal a catalog glass at the e line and none at the d line; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 50.5398,
      glass: "J-FK5 (HIKARI; catalog ne 1.489145, vd 70.31, printed 1.48914 / 70.3; supplier unconfirmed)",
      role: "Single-element GR3 focusing group; translates axially for close focus.",
      diagramLabel: "L31",
    },
    {
      id: 10,
      name: "L41",
      label: "L41",
      type: "Negative Meniscus",
      nd: 1.80831,
      vd: 46.5,
      indexReference: "e",
      indexReferenceNote:
        "Patent ¶0032 defines this column at the d line, but 11 of its 13 rows equal a catalog glass at the e line and none at the d line; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -21.0194,
      glass: "TAF3 (HOYA; catalog ne 1.80831, vd 46.50 as printed; supplier unconfirmed)",
      role: "Negative front member of the GR4 cemented doublet.",
      diagramLabel: "L41",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L42",
      label: "L42",
      type: "Positive Meniscus",
      nd: 1.49845,
      vd: 81.6,
      indexReference: "e",
      indexReferenceNote:
        "Patent ¶0032 defines this column at the d line, but 11 of its 13 rows equal a catalog glass at the e line and none at the d line; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 52.6802,
      glass: "FCD1 (HOYA; catalog ne 1.49845, vd 81.61, printed 81.6; supplier unconfirmed)",
      role: "Very-low-dispersion positive rear member of the GR4 cemented doublet.",
      diagramLabel: "L42",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L43",
      label: "L43",
      type: "Biconvex Positive",
      nd: 1.49845,
      vd: 81.6,
      indexReference: "e",
      indexReferenceNote:
        "Patent ¶0032 defines this column at the d line, but 11 of its 13 rows equal a catalog glass at the e line and none at the d line; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: 22.9585,
      glass: "FCD1 (HOYA; catalog ne 1.49845, vd 81.61, printed 81.6; supplier unconfirmed)",
      role: "Very-low-dispersion positive component in GR4.",
      diagramLabel: "L43",
    },
    {
      id: 13,
      name: "L44",
      label: "L44",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.77767,
      vd: 47.1,
      indexReference: "e",
      indexReferenceNote:
        "Patent ¶0032 defines this column at the d line, but 11 of its 13 rows equal a catalog glass at the e line and none at the d line; traced at the e line with the printed d-line Abbe numbers.",
      focalLengthMm: -32.1414,
      glass: "M-TAF401 (HOYA; catalog ne 1.77767 as printed, vd 47.17 printed as 47.1; supplier unconfirmed)",
      role: "Rear negative element of GR4 with two aspherical surfaces.",
      diagramLabel: "L44",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    {
      label: "1A",
      R: 1500,
      d: 2.8,
      sd: 26.5,
      medium: 1,
      asphere: { K: -1, A4: 1.5215e-5, A6: -2.422e-8, A8: 2.8219e-11, A10: -1.956e-14, A12: 5.59e-18, A14: 0 },
    },
    {
      label: "2A",
      R: 22.17,
      d: 7.193,
      sd: 19,
      asphere: { K: -0.8006, A4: 5.8285e-6, A6: 2.3793e-8, A8: -4.9708e-11, A10: 1.1524e-13, A12: 0, A14: 0 },
    },
    { label: "3", R: 57.806, d: 1.8, sd: 18.5, medium: 2 },
    { label: "4", R: 25.233, d: 0.15, sd: 18, medium: 3 },
    {
      label: "5A",
      R: 28.164,
      d: 9.466,
      sd: 16.58,
      asphere: { K: -0.7179, A4: 2.1334e-5, A6: 1.2458e-8, A8: -1.68e-10, A10: 4.0809e-13, A12: -5.8401e-16, A14: 0 },
    },
    { label: "6", R: -63.675, d: 1.7, sd: 21.5, medium: 4 },
    { label: "7", R: -275.715, d: 0.5, sd: 21.5 },
    { label: "8", R: 64.87, d: 4.067, sd: 19, medium: 5 },
    { label: "9", R: -187.494, sd: 19 },
    { label: "10", R: -119.397, d: 1.7, sd: 11, medium: 6 },
    { label: "11", R: -49.774, d: 0.9, sd: 11 },
    { label: "STO", R: "flat", d: 1.3 },
    {
      label: "13A",
      R: 24.504,
      d: 2.8,
      sd: 11,
      medium: 7,
      asphere: { K: 0, A4: -8.6923e-6, A6: -2.5058e-8, A8: 1.166e-10, A10: -5.788e-13, A12: 0, A14: 0 },
    },
    { label: "14", R: 14.347, d: 5.485, sd: 11, medium: 8 },
    { label: "15", R: 188.879, sd: 11 },
    {
      label: "16A",
      R: 46.745,
      d: 3.5,
      sd: 11.5,
      medium: 9,
      asphere: { K: 0, A4: 1.0633e-5, A6: -3.648e-8, A8: 8.8691e-10, A10: -1.1156e-11, A12: 0, A14: 0 },
    },
    {
      label: "17A",
      R: -51.179,
      sd: 11.5,
      asphere: { K: 0, A4: -1.0859e-6, A6: -7.5619e-8, A8: 8.8706e-10, A10: -1.1124e-11, A12: 0, A14: 0 },
    },
    { label: "18", R: 91.996, d: 1.113, sd: 11, medium: 10 },
    { label: "19", R: 14.264, d: 3.433, sd: 11, medium: 11 },
    { label: "20", R: 28.727, d: 0.85, sd: 11 },
    { label: "21", R: 20.48, d: 6.509, sd: 11.2, medium: 12 },
    { label: "22", R: -23.194, d: 3.411, sd: 11.2 },
    {
      label: "23A",
      R: -46.43,
      d: 1.68,
      sd: 11.1,
      medium: 13,
      asphere: { K: 0, A4: 2.1652e-5, A6: -5.8231e-7, A8: 2.9815e-9, A10: -1.2507e-11, A12: 0, A14: 0 },
    },
    { label: "24A", R: 55, sd: 11.1, asphere: { K: 0, A4: 6.1977e-5, A6: -4.6543e-7, A8: 2.6378e-9, A10: -7.1537e-12, A12: 0, A14: 0 } },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom lens fields ── */
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 16.48, nominalFNumber: 4.07, label: "Wide" },
      { focalLengthMm: 24.07, nominalFNumber: 4.08 },
      { focalLengthMm: 33.95, nominalFNumber: 4.09, label: "Tele" },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.28,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent moves GR3 alone for focus. Close-focus D15/D17 pairs were solved at " +
      "Sony's 0.28 m subject-to-image-plane MFD while conserving D15+D17; these close states are model-derived, not " +
      "patent-published.",
  },

  /* (moved from var) ── Variable air spacings ── */
  gaps: {
    // GR1 → GR2: zoom only.
    "9": {
      label: "D9",
      values: [
        [36.4, 36.4],
        [16.337, 16.337],
        [3.395, 3.395],
      ],
    },
    // GR2 → GR3: zoom + mechanism-constrained focus reconstruction.
    "15": {
      label: "D15",
      values: [
        [5.491, 4.4659873095],
        [5.3, 3.6327480407],
        [4.703, 2.0248233954],
      ],
    },
    // GR3 → GR4: zoom + focus; D15 + D17 remains constant at each zoom state.
    "17A": {
      label: "D17",
      values: [
        [2.3, 3.3250126905],
        [2.491, 4.1582519593],
        [3.087, 5.7651766046],
      ],
    },
    // GR4 → image plane: zoom only; source d24/BFD retained.
    "24A": {
      label: "BF",
      values: [
        [25.839, 25.839],
        [33.876, 33.876],
        [43.762, 43.762],
      ],
    },
  },

  aperture: { fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  /* ── Group and cemented-unit annotations ── */
  groups: [
    { text: "GR1 (−)", fromSurface: "1A", toSurface: "9" },
    { text: "GR2 (+)", fromSurface: "10", toSurface: "15" },
    { text: "GR3 (+ / FOCUS)", fromSurface: "16A", toSurface: "17A" },
    { text: "GR4 (−)", fromSurface: "18", toSurface: "24A" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "5A" },
    { text: "L21 / OSS", fromSurface: "10", toSurface: "11" },
    { text: "D1", fromSurface: "13A", toSurface: "15" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
  ],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
