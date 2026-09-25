import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SONY FE 70-200mm f/4 MACRO G OSS II                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Data source: WO 2024/247472 A1, Example 2 (Sony Group).           ║
 * ║ Research correlation to SEL70200G2; Sony does not identify the    ║
 * ║ patent as the production prescription.                             ║
 * ║ 19 physical elements / 13 air-separated components, organized     ║
 * ║ into seven functional zoom groups G1-G7; four aspherical surfaces.║
 * ║                                                                    ║
 * ║ Source normalization: Table 6 S2 is an inactive zero-thickness    ║
 * ║ duplicate of the L11/L12 cemented interface. It is omitted; S3    ║
 * ║ becomes the direct L11 -> L12 junction at R = 67.753 mm.          ║
 * ║ No uniform scaling is applied.                                     ║
 * ║                                                                    ║
 * ║ Zoom-only gaps: D6, D14, D18, D22. D18 reverses between Mid/Tele. ║
 * ║ Zoom + published focus gaps: D27/D30; their sum is conserved at   ║
 * ║ each zoom state, translating G6 imageward by 0.55/0.76/1.10 mm.   ║
 * ║ D27 also reverses over the zoom range. The patent prose says G3   ║
 * ║ and G6 move integrally during zoom, but Table 8 does not preserve ║
 * ║ their separation; this model follows the selected numerical table.║
 * ║                                                                    ║
 * ║ Focus status: PUBLISHED. Table 8 supplies one finite-focus state  ║
 * ║ at each zoom position: 2.289 m Wide, 3.709 m Mid, 5.814 m Tele.  ║
 * ║ zoomCloseFocusM retains all three published distance labels.       ║
 * ║ No production 0.26-0.42 m macro endpoint is reconstructed.         ║
 * ║                                                                    ║
 * ║ Aperture: Table 7 Fno = 4.12/4.36/4.14 is the modeled zoom-state ║
 * ║ target and is stored in nominalFno. STO.sd = 11.144044 mm is the ║
 * ║ Wide/base stop semi-diameter back-solved from that Wide F-number. ║
 * ║ The inferred Mid/Tele openings are recomputed by the verifier.    ║
 * ║ This calibration is not evidence of a published physical iris     ║
 * ║ diameter; source phi15 = 25.23 mm is explicitly not used as one. ║
 * ║                                                                    ║
 * ║ Rear S31-S34 use Table 6 effective diameters divided by two.      ║
 * ║ Other semi-diameters retain ray-envelope modeling allowances.     ║
 * ║ They were derived from exact meridional ray envelopes over the    ║
 * ║ six published zoom/focus endpoints plus representative            ║
 * ║ intermediate zoom/focus geometries, then given >=0.20 mm radial  ║
 * ║ clearance and rounded upward to 0.05 mm. The final verified SDs    ║
 * ║ cover dense intermediate zoom/focus sampling in addition to the    ║
 * ║ published endpoints; edge thickness, rim slope, conic domain, and ║
 * ║ cross-gap intrusion. Repository checks are in the audit log.      ║
 * ║                                                                    ║
 * ║ Glass labels preserve the patent's literal d-line n/v coordinates ║
 * ║ with qualified catalog proxies where compatible. No nC/nF/ng,     ║
 * ║ dPgF, APO, or anomalous-dispersion claim is authored.              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "sony-fe-70-200mm-f4-macro-g-oss-ii",
  maker: "Sony",
  name: "SONY FE 70-200mm f/4 Macro G OSS II",
  subtitle: "WO 2024/247472 A1 Example 2 — strong production correlation; attribution unconfirmed",
  specs: [
    "19 ELEMENTS / 13 AIR-SEPARATED COMPONENTS / 7 FUNCTIONAL GROUPS",
    "DESIGN f = 72.105-192.992 mm",
    "DESIGN F/4.12 / 4.36 / 4.14",
    "4 ASPHERICAL SURFACES",
    "PUBLISHED G6 INNER FOCUS",
  ],

  focalLengthMarketing: [70, 200],
  focalLengthDesign: [72.105394, 192.992121],
  apertureMarketing: 4,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "WO 2024/247472 A1",
  patentAuthors: ["Naoki Itoku", "Takumu Yamada"],
  patentAssignees: ["Sony Group Corporation"],
  patentYear: 2024,
  elementCount: 19,
  groupCount: 13,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Negative Meniscus, convex to object",
      nd: 1.75453,
      vd: 35.3,
      indexReference: "d",
      fl: -314.824,
      glass: "NBFD6 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Positive Meniscus, convex to object",
      nd: 1.49845,
      vd: 81.6,
      indexReference: "d",
      fl: 182.295,
      apd: "inferred",
      apdNote: "Low-dispersion family inferred from patent coordinates and the compatible FCD1 curve (catalog ΔPgF ≈ +0.0312); not a patent APD designation or supplier identification.",
      glass: "FCD1 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Positive Meniscus, convex to object",
      nd: 1.49845,
      vd: 81.6,
      indexReference: "d",
      fl: 305.707,
      apd: "inferred",
      apdNote: "Low-dispersion family inferred from patent coordinates and the compatible FCD1 curve (catalog ΔPgF ≈ +0.0312); not a patent APD designation or supplier identification.",
      glass: "FCD1 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 4,
      name: "L21",
      label: "Element L21",
      type: "Positive Meniscus, concave to object",
      nd: 1.51978,
      vd: 52.1,
      indexReference: "d",
      fl: 65.591,
      glass: "S-NSL36 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L22",
      label: "Element L22",
      type: "Negative Meniscus, concave to object",
      nd: 1.96073,
      vd: 32.3,
      indexReference: "d",
      fl: -126.051,
      glass: "Unmatched (patent coordinate 961323; supplier unresolved)",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "Element L23",
      type: "Negative Meniscus, convex to object",
      nd: 1.7676,
      vd: 48.5,
      indexReference: "d",
      fl: -74.827,
      glass: "M-TAF101 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 7,
      name: "L24",
      label: "Element L24",
      type: "Biconcave Negative",
      nd: 1.73234,
      vd: 54.7,
      indexReference: "d",
      fl: -23.397,
      glass: "MP-TAC80-60 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L25",
      label: "Element L25",
      type: "Biconvex Positive",
      nd: 1.93024,
      vd: 24,
      indexReference: "d",
      fl: 43.588,
      glass: "Unmatched (patent coordinate 930240; supplier unresolved)",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L31",
      label: "Element L31",
      type: "Biconvex Positive",
      nd: 1.7676,
      vd: 48.5,
      indexReference: "d",
      fl: 30.484,
      glass: "M-TAF101 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      cemented: "D4",
    },
    {
      id: 10,
      name: "L32",
      label: "Element L32",
      type: "Negative Meniscus, concave to object",
      nd: 1.91695,
      vd: 35.2,
      indexReference: "d",
      fl: -85.665,
      glass: "Unmatched (patent coordinate 917352; supplier unresolved)",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L41",
      label: "Element L41",
      type: "Negative Meniscus, concave to object",
      nd: 1.82017,
      vd: 46.6,
      indexReference: "d",
      fl: -48.516,
      glass: "Unmatched (patent coordinate 820466; supplier unresolved)",
    },
    {
      id: 12,
      name: "L42",
      label: "Element L42",
      type: "Biconvex Positive",
      nd: 1.55206,
      vd: 75.5,
      indexReference: "d",
      fl: 60.485,
      apd: "inferred",
      apdNote: "Low-dispersion family inferred from patent coordinates and the compatible FCD705 curve (catalog ΔPgF ≈ +0.0232); not a patent APD designation or supplier identification.",
      glass: "FCD705 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 13,
      name: "L51",
      label: "Element L51",
      type: "Negative Meniscus, concave to object",
      nd: 2.00996,
      vd: 25.5,
      indexReference: "d",
      fl: -34.644,
      glass: "Unmatched (patent coordinate 010255; supplier unresolved)",
      cemented: "D5",
    },
    {
      id: 14,
      name: "L52",
      label: "Element L52",
      type: "Positive Meniscus, concave to object",
      nd: 1.59561,
      vd: 67,
      indexReference: "d",
      fl: 67.02,
      apd: "inferred",
      apdNote: "Low-dispersion family inferred from patent coordinates and the compatible S-FPM2 curve (catalog ΔPgF ≈ +0.0144); not a patent APD designation or supplier identification.",
      glass: "S-FPM2 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L53",
      label: "Element L53",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.76821,
      vd: 49.1,
      indexReference: "d",
      fl: 32.412,
      glass: "M-TAF101 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 16,
      name: "L61",
      label: "Element L61",
      type: "Biconvex Positive",
      nd: 1.81643,
      vd: 22.8,
      indexReference: "d",
      fl: 75.627,
      glass: "Unmatched (patent coordinate 816228; supplier unresolved)",
      cemented: "D6",
    },
    {
      id: 17,
      name: "L62",
      label: "Element L62",
      type: "Biconcave Negative",
      nd: 1.83945,
      vd: 42.7,
      indexReference: "d",
      fl: -30.889,
      glass: "Unmatched (patent coordinate 839427; supplier unresolved)",
      cemented: "D6",
    },
    {
      id: 18,
      name: "L71",
      label: "Element L71",
      type: "Biconvex Positive",
      nd: 1.67717,
      vd: 38.3,
      indexReference: "d",
      fl: 76.819,
      glass: "ADF405 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 19,
      name: "L72",
      label: "Element L72",
      type: "Biconcave Negative (2x Asph)",
      nd: 1.77373,
      vd: 49.4,
      indexReference: "d",
      fl: -48.399,
      glass: "M-TAF105 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
  ],

  surfaces: [
    { label: "1", R: 95.872, d: 1.8, nd: 1.75453, elemId: 1, sd: 31.35 },
    { label: "3", R: 67.753, d: 6.43, nd: 1.49845, elemId: 2, sd: 30.65 },
    { label: "4", R: 257.963, d: 0.25, nd: 1, elemId: 0, sd: 30.5 },
    { label: "5", R: 129.946, d: 4.1, nd: 1.49845, elemId: 3, sd: 30.25 },
    { label: "6", R: 873.381, d: 2.08, nd: 1, elemId: 0, sd: 30.05 },
    { label: "7", R: -419.42, d: 4.09, nd: 1.51978, elemId: 4, sd: 13.1 },
    { label: "8", R: -31.635, d: 0.9, nd: 1.96073, elemId: 5, sd: 13 },
    { label: "9", R: -43.418, d: 0.51, nd: 1, elemId: 0, sd: 13.05 },
    { label: "10", R: 70.11, d: 0.9, nd: 1.7676, elemId: 6, sd: 12.3 },
    { label: "11", R: 31.396, d: 6.5, nd: 1, elemId: 0, sd: 11.9 },
    { label: "12", R: -29.081, d: 1, nd: 1.73234, elemId: 7, sd: 11.8 },
    { label: "13", R: 42.315, d: 3.03, nd: 1.93024, elemId: 8, sd: 12.6 },
    { label: "14", R: -937.228, d: 16.82, nd: 1, elemId: 0, sd: 12.7 },
    { label: "STO", R: 1e15, d: 1.1, nd: 1, elemId: 0, sd: 11.144044 },
    { label: "16", R: 110.448, d: 6.02, nd: 1.7676, elemId: 9, sd: 13.45 },
    { label: "17", R: -28.987, d: 1, nd: 1.91695, elemId: 10, sd: 13.55 },
    { label: "18", R: -46.698, d: 7.75, nd: 1, elemId: 0, sd: 13.75 },
    { label: "19", R: -35.404, d: 1, nd: 1.82017, elemId: 11, sd: 12.75 },
    { label: "20", R: -325.206, d: 0.2, nd: 1, elemId: 0, sd: 13.05 },
    { label: "21", R: 37.654, d: 3.93, nd: 1.55206, elemId: 12, sd: 13.6 },
    { label: "22", R: -284.031, d: 9.6, nd: 1, elemId: 0, sd: 13.55 },
    { label: "23", R: -29.962, d: 1, nd: 2.00996, elemId: 13, sd: 13.35 },
    { label: "24", R: -212.031, d: 3.73, nd: 1.59561, elemId: 14, sd: 14.05 },
    { label: "25", R: -33.814, d: 1.05, nd: 1, elemId: 0, sd: 14.35 },
    { label: "26A", R: 65.112, d: 7.67, nd: 1.76821, elemId: 15, sd: 15.15 },
    { label: "27A", R: -38.254, d: 5.29, nd: 1, elemId: 0, sd: 15.35 },
    { label: "28", R: 173.841, d: 2.51, nd: 1.81643, elemId: 16, sd: 13.55 },
    { label: "29", R: -95.133, d: 1, nd: 1.83945, elemId: 17, sd: 13.4 },
    { label: "30", R: 35.816, d: 13.76, nd: 1, elemId: 0, sd: 12.8 },
    { label: "31", R: 710.461, d: 4.33, nd: 1.67717, elemId: 18, sd: 16.48 },
    { label: "32", R: -55.991, d: 18.24, nd: 1, elemId: 0, sd: 16.575 },
    { label: "33A", R: -64.017, d: 1.1, nd: 1.77373, elemId: 19, sd: 14.465 },
    { label: "34A", R: 90.905, d: 31.32, nd: 1, elemId: 0, sd: 14.6 },
  ],

  asph: {
    "26A": {
      K: 0,
      A4: -7.00843e-6,
      A6: 4.45006e-9,
      A8: -4.06177e-11,
      A10: 1.32801e-13,
      A12: -1.27343e-16,
      A14: 0,
    },
    "27A": {
      K: 0,
      A4: 3.41791e-6,
      A6: 6.73792e-10,
      A8: -3.44963e-11,
      A10: 1.1479e-13,
      A12: -1.07093e-16,
      A14: 0,
    },
    "33A": {
      K: 0,
      A4: -1.218e-5,
      A6: 1.13098e-7,
      A8: -4.11278e-10,
      A10: 7.11522e-13,
      A12: -3.86505e-16,
      A14: 0,
    },
    "34A": {
      K: 0,
      A4: -9.61981e-6,
      A6: 1.04374e-7,
      A8: -3.40042e-10,
      A10: 4.95178e-13,
      A12: -1.31978e-16,
      A14: 0,
    },
  },

  zoomPositions: [72.15, 119.7, 192.89],
  zoomLabels: ["Wide", "Tele"],

  var: {
    "6": [
      [2.08, 2.08],
      [27.85, 27.85],
      [75.53, 75.53],
    ],
    "14": [
      [16.82, 16.82],
      [2.61, 2.61],
      [1.5, 1.5],
    ],
    "18": [
      [7.75, 7.75],
      [10.79, 10.79],
      [9.59, 9.59],
    ],
    "22": [
      [9.6, 9.6],
      [6.12, 6.12],
      [5.81, 5.81],
    ],
    "27A": [
      [5.29, 5.84],
      [8.33, 9.09],
      [2.8, 3.9],
    ],
    "30": [
      [13.76, 13.21],
      [25.37, 24.61],
      [33.52, 32.42],
    ],
  },

  varLabels: [
    ["6", "D6"],
    ["14", "D14"],
    ["18", "D18"],
    ["22", "D22"],
    ["27A", "D27"],
    ["30", "D30"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7", toSurface: "14" },
    { text: "G3", fromSurface: "16", toSurface: "18" },
    { text: "G4", fromSurface: "19", toSurface: "22" },
    { text: "G5", fromSurface: "23", toSurface: "27A" },
    { text: "G6 / FOCUS", fromSurface: "28", toSurface: "30" },
    { text: "G7", fromSurface: "31", toSurface: "34A" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "4" },
    { text: "D2", fromSurface: "7", toSurface: "9" },
    { text: "D3", fromSurface: "12", toSurface: "14" },
    { text: "D4", fromSurface: "16", toSurface: "18" },
    { text: "D5", fromSurface: "23", toSurface: "25" },
    { text: "D6", fromSurface: "28", toSurface: "30" },
  ],

  closeFocusM: 2.289,
  zoomCloseFocusM: [2.289, 3.709, 5.814],
  focusDescription:
    "Published G6 inner focus: 0.55 / 0.76 / 1.10 mm imageward at Wide / Mid / Tele, reaching 2.289 / 3.709 / 5.814 m respectively. Production macro focus is not modeled.",

  zoomApertureModel: "from-nominal-fno",
  nominalFno: [4.12, 4.36, 4.14],
  fstopSeries: [4, 5.6, 8, 11, 16],

  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
