import type { LensDataInput } from "../../types/optics.js";

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
 * Rear normalization: source surfaces 26-27 are the optional sensor-side plane-parallel
 * optical member FL. They are omitted from the active LensVisualizer model. The final air
 * gap from powered surface 25A to IMG is set to the source-published air-equivalent
 * Bf = 15.80982 mm from Table 31. This gives a normalized first-surface-to-IMG track of
 * 129.15002 mm, distinct from the source physical L = 130.00 mm that includes FL.
 *
 * Aperture: the patent publishes STO position and Fno = 1.21 but no diaphragm diameter.
 * STO sd = 20.22509 mm is a modeled calibration from the parsed infinity prescription and
 * source Fno. Agreement with Fno = 1.21 is therefore calibration, not independent evidence
 * of a manufactured diaphragm diameter.
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
  key: "sony-fe-50mm-f12-gm",
  maker: "Sony",
  name: "SONY FE 50mm f/1.2 GM",
  subtitle: "JP 2022-140076 A - Example 1; strong production correlation, not manufacturer-confirmed",
  specs: [
    "14 ELEMENTS / 10 GROUPS",
    "MARKETED 50 mm f/1.2",
    "DESIGN f = 53.90 mm / F1.21",
    "2ω = 43.52°",
    "6 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 53.899471893,
  apertureMarketing: 1.2,
  apertureDesign: 1.21,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2022-140076 A",
  patentAuthors: ["Yosuke Utagawa", "Masaki Maruyama"],
  patentAssignees: ["Sony Group Corporation"],
  patentYear: 2022,
  elementCount: 14,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "G1",
      diagramLabel: "G1",
      label: "Element G1",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.7,
      indexReference: "d",
      fl: -51.371945,
      glass: "770297 class (supplier unresolved)",
      role: "Front negative element of patent functional group GR1.",
    },
    {
      id: 2,
      name: "G2",
      diagramLabel: "G2",
      label: "Element G2",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.2,
      indexReference: "d",
      fl: 54.40672,
      glass: "911353 class (supplier unresolved)",
      cemented: "C1",
      role: "Positive front member of the G2-G3 cemented pair in GR1.",
    },
    {
      id: 3,
      name: "G3",
      diagramLabel: "G3",
      label: "Element G3",
      type: "Negative Meniscus, convex to image",
      nd: 1.73037,
      vd: 32.2,
      indexReference: "d",
      fl: -162.417728,
      glass: "730322 class (supplier unresolved)",
      cemented: "C1",
      role: "Negative rear member of the G2-G3 cemented pair in GR1.",
    },
    {
      id: 4,
      name: "G4",
      diagramLabel: "G4",
      label: "Element G4",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.9515,
      vd: 29.8,
      indexReference: "d",
      fl: 52.01912,
      glass: "M-TAFD405 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Positive two-sided asphere completing fixed functional group GR1.",
    },
    {
      id: 5,
      name: "G5",
      diagramLabel: "G5",
      label: "Element G5",
      type: "Positive Meniscus, convex to image",
      nd: 1.98613,
      vd: 16.5,
      indexReference: "d",
      fl: 202.985178,
      glass: "986165 class (supplier unresolved)",
      role: "Positive member of moving focus group GR2.",
    },
    {
      id: 6,
      name: "G6",
      diagramLabel: "G6",
      label: "Element G6",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.4,
      indexReference: "d",
      fl: -59.864551,
      glass: "593354 class (supplier unresolved)",
      role: "Negative member of moving focus group GR2.",
    },
    {
      id: 7,
      name: "G7",
      diagramLabel: "G7",
      label: "Element G7",
      type: "Negative Meniscus, convex to object",
      nd: 1.85451,
      vd: 25.2,
      indexReference: "d",
      fl: -39.852092,
      glass: "855252 class (supplier unresolved)",
      cemented: "C2",
      role: "Negative front member of the fixed G7-G8 cemented pair in GR3.",
    },
    {
      id: 8,
      name: "G8",
      diagramLabel: "G8",
      label: "Element G8",
      type: "Biconvex Positive",
      nd: 1.717,
      vd: 48,
      indexReference: "d",
      fl: 35.707489,
      glass: "717480 class (supplier unresolved)",
      cemented: "C2",
      role: "Positive rear member of the fixed G7-G8 cemented pair in GR3.",
    },
    {
      id: 9,
      name: "G9",
      diagramLabel: "G9",
      label: "Element G9",
      type: "Biconcave Negative",
      nd: 1.85451,
      vd: 25.2,
      indexReference: "d",
      fl: -45.295222,
      glass: "855252 class (supplier unresolved)",
      cemented: "C3",
      role: "Negative front member of the moving G9-G10 cemented pair in GR4.",
    },
    {
      id: 10,
      name: "G10",
      diagramLabel: "G10",
      label: "Element G10",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      fl: 46.798535,
      glass: "697555 class (supplier unresolved)",
      cemented: "C3",
      role: "Positive rear member of the moving G9-G10 cemented pair in GR4.",
    },
    {
      id: 11,
      name: "G11",
      diagramLabel: "G11",
      label: "Element G11",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.59208,
      vd: 61,
      indexReference: "d",
      fl: 55.437746,
      glass: "L-BAL35P — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Positive two-sided asphere completing moving focus group GR4.",
    },
    {
      id: 12,
      name: "G12",
      diagramLabel: "G12",
      label: "Element G12",
      type: "Biconvex Positive",
      nd: 1.94595,
      vd: 18,
      indexReference: "d",
      fl: 48.816076,
      glass: "946180 class (supplier unresolved)",
      cemented: "C4",
      role: "Positive front member of the fixed G12-G13 cemented pair in GR5.",
    },
    {
      id: 13,
      name: "G13",
      diagramLabel: "G13",
      label: "Element G13",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.4,
      indexReference: "d",
      fl: -33.896282,
      glass: "593354 class (supplier unresolved)",
      cemented: "C4",
      role: "Negative rear member of the fixed G12-G13 cemented pair in GR5.",
    },
    {
      id: 14,
      name: "G14",
      diagramLabel: "G14",
      label: "Element G14",
      type: "Negative Meniscus, convex to image (2x Asph)",
      nd: 1.85135,
      vd: 40.1,
      indexReference: "d",
      fl: -141.13975,
      glass: "851401 class (supplier unresolved)",
      role: "Rear two-sided aspheric negative meniscus of fixed functional group GR5.",
    },
  ],

  surfaces: [
    { label: "1", R: -73.4046, d: 1.6384, nd: 1.77047, elemId: 1, sd: 23.28 },
    { label: "2", R: 86.7316, d: 3.2478, nd: 1, elemId: 0, sd: 24.37 },
    { label: "3", R: 463.1362, d: 8.541, nd: 1.91082, elemId: 2, sd: 27 },
    { label: "4", R: -55.0045, d: 1.5819, nd: 1.73037, elemId: 3, sd: 27 },
    { label: "5", R: -103.8048, d: 0.1, nd: 1, elemId: 0, sd: 27 },
    { label: "6A", R: 52.131, d: 8.7586, nd: 1.9515, elemId: 4, sd: 28.08 },
    { label: "7A", R: -899.0845, d: 2.7386, nd: 1, elemId: 0, sd: 27.66 },
    { label: "8", R: -438.1637, d: 2.8474, nd: 1.98613, elemId: 5, sd: 26.9 },
    { label: "9", R: -137.8435, d: 0.25, nd: 1, elemId: 0, sd: 26.71 },
    { label: "10", R: -1848.8197, d: 1.5254, nd: 1.5927, elemId: 6, sd: 25.49 },
    { label: "11", R: 36.1871, d: 17.1293, nd: 1, elemId: 0, sd: 22.92 },
    { label: "STO", R: 1e15, d: 0.1604, nd: 1, elemId: 0, sd: 20.22509 },
    { label: "13", R: 1799.6904, d: 1.3559, nd: 1.85451, elemId: 7, sd: 22.24 },
    { label: "14", R: 33.41, d: 12.3973, nd: 1.717, elemId: 8, sd: 21.92 },
    { label: "15", R: -92.5787, d: 9.9306, nd: 1, elemId: 0, sd: 22 },
    { label: "16", R: -136.823, d: 1.3559, nd: 1.85451, elemId: 9, sd: 20.49 },
    { label: "17", R: 54.22, d: 8.826, nd: 1.6968, elemId: 10, sd: 20.47 },
    { label: "18", R: -76.3453, d: 0.1, nd: 1, elemId: 0, sd: 21.01 },
    { label: "19A", R: 49.6469, d: 8.3761, nd: 1.59208, elemId: 11, sd: 22.01 },
    { label: "20A", R: -90.7873, d: 3, nd: 1, elemId: 0, sd: 21.9 },
    { label: "21", R: 89.7175, d: 9.412, nd: 1.94595, elemId: 12, sd: 19.37 },
    { label: "22", R: -90.3001, d: 1.3559, nd: 1.5927, elemId: 13, sd: 17.7 },
    { label: "23", R: 25.9835, d: 7.0733, nd: 1, elemId: 0, sd: 15.2 },
    { label: "24A", R: -115.6443, d: 1.6384, nd: 1.85135, elemId: 14, sd: 16.11 },
    { label: "25A", R: -3097.7167, d: 15.80982, nd: 1, elemId: 0, sd: 16.76 },
  ],

  asph: {
    "6A": {
      K: 0,
      A4: -5.97602e-7,
      A6: -2.33536e-10,
      A8: 1.54112e-13,
      A10: -1.39653e-16,
      A12: 0,
      A14: 0,
      A16: 0,
    },
    "7A": {
      K: 0,
      A4: 6.845e-7,
      A6: -1.50949e-10,
      A8: 1.72288e-13,
      A10: -1.12191e-16,
      A12: 0,
      A14: 0,
      A16: 0,
    },
    "19A": {
      K: 0,
      A4: -1.54185e-6,
      A6: -1.01582e-9,
      A8: 3.58078e-13,
      A10: -3.24374e-16,
      A12: 0,
      A14: 0,
      A16: 0,
    },
    "20A": {
      K: 0,
      A4: -1.08769e-6,
      A6: -1.31196e-9,
      A8: 1.78961e-12,
      A10: -1.30874e-15,
      A12: 0,
      A14: 0,
      A16: 0,
    },
    "24A": {
      K: 0,
      A4: -3.06291e-6,
      A6: -4.89645e-8,
      A8: 1.64862e-10,
      A10: -1.89914e-13,
      A12: 0,
      A14: 0,
      A16: 0,
    },
    "25A": {
      K: 0,
      A4: 3.17286e-6,
      A6: -4.12242e-8,
      A8: 1.52687e-10,
      A10: -1.31311e-13,
      A12: 0,
      A14: 0,
      A16: 0,
    },
  },

  var: {
    "7A": [2.7386, 8.8679],
    "11": [17.1293, 11],
    "15": [9.9306, 5.253],
    "20A": [3, 7.6776],
  },
  varLabels: [
    ["7A", "d7"],
    ["11", "d11"],
    ["15", "d15"],
    ["20A", "d20"],
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

  closeFocusM: 0.410,
  focusDescription:
    "Published double-floating focus: GR2 moves image-side 6.1293 mm and GR4 moves object-side 4.6776 mm from infinity to the patent near endpoint (d0 = 280 mm from the first surface, about 0.410 m object-to-IMG). The focus label follows this patent endpoint; Sony markets the minimum distance as 0.4 m.",

  nominalFno: 1.21,
  fstopSeries: [1.21, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 11,

  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
