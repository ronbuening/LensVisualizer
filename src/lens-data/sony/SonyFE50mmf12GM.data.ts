import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA - SONY FE 50mm f/1.2 GM
 *
 * Source: JP 2022-140076 A, Example 1 (Sony Group Corporation).
 * Correlation: strong convergent production match, but not manufacturer-confirmed as the
 * production prescription.
 *
 * Native patent scale is retained: design EFL is approximately 53.89947 mm while the
 * production lens is marketed as 50 mm. No uniform scaling is applied.
 *
 * The source has 14 powered glass elements. Four cemented pairs reduce the physical
 * air-separated count to 10 groups; the patent separately describes five functional groups
 * GR1-GR5. Six aspherical surfaces occur on G4, G11, and G14.
 *
 * Focus status: PUBLISHED. The two Table 3 endpoints are preserved. From infinity to the
 * published near endpoint, GR2 moves image-side and GR4 moves object-side while the stop,
 * GR3, and GR5 remain fixed. Intermediate slider positions are viewer interpolation only.
 *
 * Rear plate: source Table 1 surfaces 26-27 are the sensor-side plane-parallel optical
 * member FL (2.50 mm, nd 1.51680, vd 64.2), followed by 1.00 mm of air to IMG. FL is modeled
 * in `rearPlates` (traced, not drawn). Surface 25A keeps the patent's physical 13.16 mm gap
 * to FL, so the first-surface-to-IMG track is 130.0002 mm, matching the source L = 130.00 mm.
 * The paraxial air-equivalent rear spacing is 13.16 + 2.50/1.51680 + 1.00 = 15.80820 mm;
 * Table 31 prints Bf = 15.80982 mm (0.0016 mm rounding difference).
 *
 * Aperture: the patent publishes STO position and Fno = 1.21 but no diaphragm diameter. The stop radius
 * is derived from the design f-number using the parsed infinity prescription. Agreement with Fno = 1.21
 * is therefore calibration, not independent evidence of a manufactured diaphragm diameter.
 *
 * Semi-diameters are modeled, not patent-published. They were derived from exact meridional
 * ray envelopes at the published focus endpoints with approximately 10% clearance where
 * geometry permits, then checked for edge thickness, actual rim slope, conic domain, and
 * 0.90 shared-band cross-gap intrusion. Surface 23 is gap-limited to 15.20 mm, leaving less
 * than the nominal 10% clearance for the extra full-field sample. Production render-trim
 * diagnostics remain an integration check and are not claimed here.
 *
 * Glass labels use optical-coordinate classes and qualified spectral proxies because the patent
 * publishes nd/vd but no glass supplier or melt identity. No catalog-derived nC/nF/ng/dPgF
 * values are authored because supplier identity is unresolved.
 */
const LENS_DATA = {
  schema: 2,
  key: "sony-fe-50mm-f12-gm",
  maker: "Sony",
  name: "SONY FE 50mm f/1.2 GM",
  subtitle: "JP 2022-140076 A - Example 1; strong production correlation, not manufacturer-confirmed",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "14 ELEMENTS / 10 GROUPS",
      "MARKETED 50 mm f/1.2",
      "DESIGN f = 53.90 mm / F1.21",
      "2ω = 43.52°",
      "6 ASPHERICAL SURFACES",
    ],
    elementCount: 14,
    groupCount: 10,
    focalLengthMm: { marketing: 50, design: 53.899471893 },
    fNumber: { marketing: 1.2, design: 1.21 },
  },

  source: {
    patentNumber: "JP 2022-140076 A",
    patentYear: 2022,
    authors: ["Yosuke Utagawa", "Masaki Maruyama"],
    assignees: ["Sony Group Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element G1",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.7,
      indexReference: "d",
      focalLengthMm: -51.371945,
      glass: "770297 class (supplier unresolved)",
      role: "Front negative element of patent functional group GR1.",
      diagramLabel: "G1",
    },
    {
      id: 2,
      name: "G2",
      label: "Element G2",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.2,
      indexReference: "d",
      focalLengthMm: 54.40672,
      glass: "911353 class (supplier unresolved)",
      role: "Positive front member of the G2-G3 cemented pair in GR1.",
      diagramLabel: "G2",
      cemented: "C1",
    },
    {
      id: 3,
      name: "G3",
      label: "Element G3",
      type: "Negative Meniscus, convex to image",
      nd: 1.73037,
      vd: 32.2,
      indexReference: "d",
      focalLengthMm: -162.417728,
      glass: "730322 class (supplier unresolved)",
      role: "Negative rear member of the G2-G3 cemented pair in GR1.",
      diagramLabel: "G3",
      cemented: "C1",
    },
    {
      id: 4,
      name: "G4",
      label: "Element G4",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.9515,
      vd: 29.8,
      indexReference: "d",
      focalLengthMm: 52.01912,
      glass: "M-TAFD405 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Positive two-sided asphere completing fixed functional group GR1.",
      diagramLabel: "G4",
    },
    {
      id: 5,
      name: "G5",
      label: "Element G5",
      type: "Positive Meniscus, convex to image",
      nd: 1.98613,
      vd: 16.5,
      indexReference: "d",
      focalLengthMm: 202.985178,
      glass: "986165 class (supplier unresolved)",
      role: "Positive member of moving focus group GR2.",
      diagramLabel: "G5",
    },
    {
      id: 6,
      name: "G6",
      label: "Element G6",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.4,
      indexReference: "d",
      focalLengthMm: -59.864551,
      glass: "593354 class (supplier unresolved)",
      role: "Negative member of moving focus group GR2.",
      diagramLabel: "G6",
    },
    {
      id: 7,
      name: "G7",
      label: "Element G7",
      type: "Negative Meniscus, convex to object",
      nd: 1.85451,
      vd: 25.2,
      indexReference: "d",
      focalLengthMm: -39.852092,
      glass: "855252 class (supplier unresolved)",
      role: "Negative front member of the fixed G7-G8 cemented pair in GR3.",
      diagramLabel: "G7",
      cemented: "C2",
    },
    {
      id: 8,
      name: "G8",
      label: "Element G8",
      type: "Biconvex Positive",
      nd: 1.717,
      vd: 48,
      indexReference: "d",
      focalLengthMm: 35.707489,
      glass: "717480 class (supplier unresolved)",
      role: "Positive rear member of the fixed G7-G8 cemented pair in GR3.",
      diagramLabel: "G8",
      cemented: "C2",
    },
    {
      id: 9,
      name: "G9",
      label: "Element G9",
      type: "Biconcave Negative",
      nd: 1.85451,
      vd: 25.2,
      indexReference: "d",
      focalLengthMm: -45.295222,
      glass: "855252 class (supplier unresolved)",
      role: "Negative front member of the moving G9-G10 cemented pair in GR4.",
      diagramLabel: "G9",
      cemented: "C3",
    },
    {
      id: 10,
      name: "G10",
      label: "Element G10",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: 46.798535,
      glass: "697555 class (supplier unresolved)",
      role: "Positive rear member of the moving G9-G10 cemented pair in GR4.",
      diagramLabel: "G10",
      cemented: "C3",
    },
    {
      id: 11,
      name: "G11",
      label: "Element G11",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.59208,
      vd: 61,
      indexReference: "d",
      focalLengthMm: 55.437746,
      glass: "L-BAL35P — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Positive two-sided asphere completing moving focus group GR4.",
      diagramLabel: "G11",
    },
    {
      id: 12,
      name: "G12",
      label: "Element G12",
      type: "Biconvex Positive",
      nd: 1.94595,
      vd: 18,
      indexReference: "d",
      focalLengthMm: 48.816076,
      glass: "946180 class (supplier unresolved)",
      role: "Positive front member of the fixed G12-G13 cemented pair in GR5.",
      diagramLabel: "G12",
      cemented: "C4",
    },
    {
      id: 13,
      name: "G13",
      label: "Element G13",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.4,
      indexReference: "d",
      focalLengthMm: -33.896282,
      glass: "593354 class (supplier unresolved)",
      role: "Negative rear member of the fixed G12-G13 cemented pair in GR5.",
      diagramLabel: "G13",
      cemented: "C4",
    },
    {
      id: 14,
      name: "G14",
      label: "Element G14",
      type: "Negative Meniscus, convex to image (2x Asph)",
      nd: 1.85135,
      vd: 40.1,
      indexReference: "d",
      focalLengthMm: -141.13975,
      glass: "851401 class (supplier unresolved)",
      role: "Rear two-sided aspheric negative meniscus of fixed functional group GR5.",
      diagramLabel: "G14",
    },
  ],

  surfaces: [
    { label: "1", R: -73.4046, d: 1.6384, sd: 23.28, medium: 1 },
    { label: "2", R: 86.7316, d: 3.2478, sd: 24.37 },
    { label: "3", R: 463.1362, d: 8.541, sd: 27, medium: 2 },
    { label: "4", R: -55.0045, d: 1.5819, sd: 27, medium: 3 },
    { label: "5", R: -103.8048, d: 0.1, sd: 27 },
    {
      label: "6A",
      R: 52.131,
      d: 8.7586,
      sd: 28.08,
      medium: 4,
      asphere: { K: 0, A4: -5.97602e-7, A6: -2.33536e-10, A8: 1.54112e-13, A10: -1.39653e-16, A12: 0, A14: 0, A16: 0 },
    },
    {
      label: "7A",
      R: -899.0845,
      sd: 27.66,
      asphere: { K: 0, A4: 6.845e-7, A6: -1.50949e-10, A8: 1.72288e-13, A10: -1.12191e-16, A12: 0, A14: 0, A16: 0 },
    },
    { label: "8", R: -438.1637, d: 2.8474, sd: 26.9, medium: 5 },
    { label: "9", R: -137.8435, d: 0.25, sd: 26.71 },
    { label: "10", R: -1848.8197, d: 1.5254, sd: 25.49, medium: 6 },
    { label: "11", R: 36.1871, sd: 22.92 },
    { label: "STO", R: "flat", d: 0.1604 },
    { label: "13", R: 1799.6904, d: 1.3559, sd: 22.24, medium: 7 },
    { label: "14", R: 33.41, d: 12.3973, sd: 21.92, medium: 8 },
    { label: "15", R: -92.5787, sd: 22 },
    { label: "16", R: -136.823, d: 1.3559, sd: 20.49, medium: 9 },
    { label: "17", R: 54.22, d: 8.826, sd: 20.47, medium: 10 },
    { label: "18", R: -76.3453, d: 0.1, sd: 21.01 },
    {
      label: "19A",
      R: 49.6469,
      d: 8.3761,
      sd: 22.01,
      medium: 11,
      asphere: { K: 0, A4: -1.54185e-6, A6: -1.01582e-9, A8: 3.58078e-13, A10: -3.24374e-16, A12: 0, A14: 0, A16: 0 },
    },
    {
      label: "20A",
      R: -90.7873,
      sd: 21.9,
      asphere: { K: 0, A4: -1.08769e-6, A6: -1.31196e-9, A8: 1.78961e-12, A10: -1.30874e-15, A12: 0, A14: 0, A16: 0 },
    },
    { label: "21", R: 89.7175, d: 9.412, sd: 19.37, medium: 12 },
    { label: "22", R: -90.3001, d: 1.3559, sd: 17.7, medium: 13 },
    { label: "23", R: 25.9835, d: 7.0733, sd: 15.2 },
    {
      label: "24A",
      R: -115.6443,
      d: 1.6384,
      sd: 16.11,
      medium: 14,
      asphere: { K: 0, A4: -3.06291e-6, A6: -4.89645e-8, A8: 1.64862e-10, A10: -1.89914e-13, A12: 0, A14: 0, A16: 0 },
    },
    {
      label: "25A",
      R: -3097.7167,
      d: 13.16,
      sd: 16.76,
      asphere: { K: 0, A4: 3.17286e-6, A6: -4.12242e-8, A8: 1.52687e-10, A10: -1.31311e-13, A12: 0, A14: 0, A16: 0 },
    },
  ],

  focus: {
    closeFocusM: 0.410,
    description:
      "Published double-floating focus: GR2 moves image-side 6.1293 mm and GR4 moves object-side 4.6776 mm from infinity to the patent near endpoint (d0 = 280 mm from the first surface, about 0.410 m object-to-IMG). The focus label follows this patent endpoint; Sony markets the minimum distance as 0.4 m.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    "7A": { label: "d7", values: [[2.7386, 8.8679]] },
    "11": { label: "d11", values: [[17.1293, 11]] },
    "15": { label: "d15", values: [[9.9306, 5.253]] },
    "20A": { label: "d20", values: [[3, 7.6776]] },
  },

  aperture: { nominalFNumber: 1.21, fStops: [1.21, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 11 },

  /* ── Optical member FL (patent Table 1 surfaces 26–27): traced, not drawn ── */
  rearPlates: [
    {
      label: "FL",
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0,
      source: "JP 2022-140076 A, Example 1 Table 1 surfaces 26–27",
    },
  ],

  groups: [
    { text: "GR1", fromSurface: "1", toSurface: "7A" },
    { text: "GR2", fromSurface: "8", toSurface: "11" },
    { text: "GR3", fromSurface: "13", toSurface: "15" },
    { text: "GR4", fromSurface: "16", toSurface: "20A" },
    { text: "GR5", fromSurface: "21", toSurface: "25A" },
  ],
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "5" },
    { text: "C2", fromSurface: "13", toSurface: "15" },
    { text: "C3", fromSurface: "16", toSurface: "18" },
    { text: "C4", fromSurface: "21", toSurface: "23" },
  ],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
