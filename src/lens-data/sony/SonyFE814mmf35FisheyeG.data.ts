import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SONY FE 8-14mm f/3.5 FISHEYE G                                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2022-155067 A, Example 1 (Sony Group Corporation).                    ║
 * ║ Patent design: 7.55-12.59 mm, F2.90-F2.89, 16 elements / 13 groups,             ║
 * ║ six aspherical surfaces. Product correlation is strong but not manufacturer-     ║
 * ║ confirmed; marketed 8-14 mm F3.5 values remain separate from the prescription.   ║
 * ║                                                                                  ║
 * ║ Zoom gaps: source d11, d22, d26, and d30 at Wide/Tele infinity.                 ║
 * ║ Focus: G2B (L13+L14) is the published focus group, but no finite-focus spacing   ║
 * ║ rows are published. NO_INTERNAL_RECONSTRUCTION is used: every authored focus     ║
 * ║ vector repeats the infinity spacing. The 0.15 m close-focus value is production  ║
 * ║ metadata, not a reconstructed patent focus state.                                ║
 * ║                                                                                  ║
 * ║ No uniform scaling is applied. The asphere equation uses the patent k directly   ║
 * ║ as standard conic K; all six Example 1 k values are zero.                        ║
 * ║                                                                                  ║
 * ║ Stop model: S14 is published, but its diameter is not. The Wide base STO sd      ║
 * ║ (4.96686 mm) is calibrated from the published F2.90 and the modeled entrance-    ║
 * ║ pupil scale. The zoom aperture model likewise targets F2.89 at Tele, requiring   ║
 * ║ a modeled effective STO sd of about 5.92606 mm there. Matching these f-numbers   ║
 * ║ is calibration-dependent and is not independent evidence of a physical iris.    ║
 * ║                                                                                  ║
 * ║ Semi-diameters are modeled, not patent-published. They were derived from exact   ║
 * ║ meridional ray envelopes across Wide/Tele plus representative intermediate zoom ║
 * ║ states, with the default 0.6× half-field bundle and the 95° chief ray checked.   ║
 * ║ An 8% clearance target was used where geometry permits; the tightly curved       ║
 * ║ front meniscus and L10/L11 cemented pair are geometry-limited. maxRimAngleDeg    ║
 * ║ is raised to 76° because the source 190° fisheye field requires the S2 chief-ray ║
 * ║ crossing at a modeled rim slope near 75.7°. This is a geometry allowance, not a  ║
 * ║ layout adjustment.                                                               ║
 * ║                                                                                  ║
 * ║ Projection metadata uses fisheye-equisolid as the fixed reference because patent ║
 * ║ condition (1) uses that baseline at both endpoints. The actual Tele endpoint is  ║
 * ║ source-described as equidistant; its positive departure from equisolid is        ║
 * ║ intentional and is not reclassified here.                                        ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

// Integration SD audit: S29-S30 now use 14.0 mm rims from Figure 1 (PDF p. 47); L15 stays gap-limited.
const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-fe-8-14mm-f35-fisheye-g",
  maker: "Sony",
  name: "SONY FE 8-14mm f/3.5 Fisheye G",
  subtitle: "JP 2022-155067 A Example 1 — strong production correlation; not manufacturer-confirmed",
  specs: [
    "16 ELEMENTS / 13 GROUPS",
    "DESIGN 7.55-12.59 mm",
    "DESIGN F/2.90-F/2.89",
    "2ω = 190°",
    "6 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: [8, 14],
  focalLengthDesign: [7.550345, 12.590118],
  apertureMarketing: 3.5,
  apertureDesign: 2.9,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2022-155067 A",
  patentAuthors: ["Naoki Miyagawa", "Yoshio Hosono"],
  patentAssignees: ["Sony Group Corporation"],
  patentYear: 2022,
  elementCount: 16,
  groupCount: 13,

  projection: {
    kind: "fisheye-equisolid",
    focalLengthMm: [7.55, 12.59],
    fullFieldDeg: [190, 190],
    imageCircleMm: [22.6, 43.26],
    maxTraceFieldDeg: [95, 95],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus, convex to object",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      fl: -27.330019,
      glass: "N-LASF44 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.76802,
      vd: 49.2,
      indexReference: "d",
      fl: -25.030846,
      glass: "M-TAF101 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Positive Meniscus, convex to object",
      nd: 1.85451,
      vd: 25.2,
      indexReference: "d",
      fl: 53.675582,
      glass: "NBFD25 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.7,
      indexReference: "d",
      fl: -18.089579,
      glass: "TAC8 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Negative Meniscus, convex to object",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      fl: -100.498817,
      glass: "N-LASF44 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.4,
      indexReference: "d",
      fl: 22.049562,
      glass: "FF5 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Positive Meniscus, convex to object",
      nd: 1.80809,
      vd: 22.8,
      indexReference: "d",
      fl: 78.443548,
      glass: "FD225 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 21.092182,
      apd: "inferred",
      apdNote: "Low-dispersion family inferred from patent coordinates and the compatible H-FK61 curve (catalog ΔPgF ≈ +0.0315); not a patent APD designation or supplier identification.",
      glass: "H-FK61 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      cemented: "C2",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 9",
      type: "Negative Meniscus, concave to object",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: -18.02323,
      glass: "J-LASF016 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      cemented: "C2",
    },
    {
      id: 10,
      name: "L10",
      diagramLabel: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 17.032918,
      apd: "inferred",
      apdNote: "Low-dispersion family inferred from patent coordinates and the compatible H-FK61 curve (catalog ΔPgF ≈ +0.0315); not a patent APD designation or supplier identification.",
      glass: "H-FK61 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      cemented: "C3",
    },
    {
      id: 11,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 11",
      type: "Negative Meniscus, concave to object",
      nd: 2.001,
      vd: 29.1,
      indexReference: "d",
      fl: -74.193082,
      glass: "S-LAH99 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      cemented: "C3",
    },
    {
      id: 12,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 12",
      type: "Positive Meniscus, concave to object (2× Asph)",
      nd: 1.4971,
      vd: 81.6,
      indexReference: "d",
      fl: 64.064303,
      apd: "inferred",
      apdNote: "Low-dispersion family inferred from patent coordinates and the compatible M-FCD1 curve (catalog ΔPgF ≈ +0.0318); not a patent APD designation or supplier identification.",
      glass: "M-FCD1 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 13,
      name: "L13",
      diagramLabel: "L13",
      label: "Element 13",
      type: "Negative Meniscus, concave to object",
      nd: 1.73037,
      vd: 32.2,
      indexReference: "d",
      fl: -74.142851,
      glass: "NBFD32 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 14,
      name: "L14",
      diagramLabel: "L14",
      label: "Element 14",
      type: "Positive Meniscus, concave to object (2× Asph)",
      nd: 1.4971,
      vd: 81.6,
      indexReference: "d",
      fl: 37.026773,
      apd: "inferred",
      apdNote: "Low-dispersion family inferred from patent coordinates and the compatible M-FCD1 curve (catalog ΔPgF ≈ +0.0318); not a patent APD designation or supplier identification.",
      glass: "M-FCD1 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 15,
      name: "L15",
      diagramLabel: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      fl: -25.787021,
      glass: "N-LASF44 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
    {
      id: 16,
      name: "L16",
      diagramLabel: "L16",
      label: "Element 16",
      type: "Positive Meniscus, concave to object",
      nd: 1.61997,
      vd: 63.9,
      indexReference: "d",
      fl: 60.236003,
      glass: "PCD40 (coordinate-compatible spectral proxy; supplier unconfirmed)",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 49.927, d: 2.2, nd: 1.8042, elemId: 1, sd: 25.05 },
    { label: "2", R: 14.961, d: 9, nd: 1, elemId: 0, sd: 14.5 },
    { label: "3A", R: 34.363, d: 1.3, nd: 1.76802, elemId: 2, sd: 13.15 },
    { label: "4A", R: 12.125, d: 3.58, nd: 1, elemId: 0, sd: 10.25 },
    { label: "5", R: 15.747, d: 2.3, nd: 1.85451, elemId: 3, sd: 9.45 },
    { label: "6", R: 22.366, d: 4.83, nd: 1, elemId: 0, sd: 8.8 },
    { label: "7", R: -18.048, d: 1, nd: 1.72916, elemId: 4, sd: 7.8 },
    { label: "8", R: 50.15, d: 0.33, nd: 1, elemId: 0, sd: 7.9 },
    { label: "9", R: 33.099, d: 1, nd: 1.8042, elemId: 5, sd: 8 },
    { label: "10", R: 23.166, d: 4, nd: 1.5927, elemId: 6, sd: 7.95 },
    { label: "11", R: -28.057, d: 14.4, nd: 1, elemId: 0, sd: 8.05 },
    { label: "12", R: 19.945, d: 1.7, nd: 1.80809, elemId: 7, sd: 7.05 },
    { label: "13", R: 27.993, d: 2, nd: 1, elemId: 0, sd: 6.75 },
    { label: "STO", R: 1e15, d: 1.3, nd: 1, elemId: 0, sd: 4.96686 },
    { label: "15", R: 273.276, d: 4, nd: 1.497, elemId: 8, sd: 6.3 },
    { label: "16", R: -10.848, d: 0.8, nd: 1.7725, elemId: 9, sd: 6.8 },
    { label: "17", R: -50.697, d: 0.2, nd: 1, elemId: 0, sd: 7.55 },
    { label: "18", R: 35.442, d: 4.5, nd: 1.497, elemId: 10, sd: 7.9 },
    { label: "19", R: -10.653, d: 1, nd: 2.001, elemId: 11, sd: 7.95 },
    { label: "20", R: -13.021, d: 0.25, nd: 1, elemId: 0, sd: 8.85 },
    { label: "21A", R: -67.113, d: 2.8, nd: 1.4971, elemId: 12, sd: 8.85 },
    { label: "22A", R: -21.897, d: 2.26, nd: 1, elemId: 0, sd: 9.35 },
    { label: "23", R: -16.89, d: 1.2, nd: 1.73037, elemId: 13, sd: 9.2 },
    { label: "24", R: -25.282, d: 0.25, nd: 1, elemId: 0, sd: 9.7 },
    { label: "25A", R: -96.465, d: 6, nd: 1.4971, elemId: 14, sd: 10 },
    { label: "26A", R: -15.776, d: 3.14, nd: 1, elemId: 0, sd: 10.45 },
    { label: "27", R: -67.809, d: 1.2, nd: 1.8042, elemId: 15, sd: 10 },
    { label: "28", R: 30.11, d: 3.72, nd: 1, elemId: 0, sd: 10.05 },
    { label: "29", R: -51.95, d: 3.89, nd: 1.61997, elemId: 16, sd: 14 },
    { label: "30", R: -22.349, d: 14.1, nd: 1, elemId: 0, sd: 14 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "3A": { K: 0, A4: 2.3334e-6, A6: -7.29061e-8, A8: 2.87282e-10, A10: 0, A12: 0, A14: 0 },
    "4A": { K: 0, A4: -1.56889e-5, A6: -1.44891e-7, A8: -1.08148e-9, A10: 0, A12: 0, A14: 0 },
    "21A": { K: 0, A4: -1.81795e-4, A6: -8.63681e-7, A8: -4.90494e-9, A10: 0, A12: 0, A14: 0 },
    "22A": { K: 0, A4: -9.41065e-5, A6: -5.72772e-7, A8: -1.46426e-9, A10: 0, A12: 0, A14: 0 },
    "25A": { K: 0, A4: 9.06211e-6, A6: 2.43882e-7, A8: -1.05452e-9, A10: 0, A12: 0, A14: 0 },
    "26A": { K: 0, A4: 4.99814e-5, A6: 1.00934e-7, A8: 0, A10: 0, A12: 0, A14: 0 },
  },

  /* ── Zoom / focus spacings ── */
  var: {
    "11": [
      [14.4, 14.4],
      [1.2, 1.2],
    ],
    "22A": [
      [2.26, 2.26],
      [5.2, 5.2],
    ],
    "26A": [
      [3.14, 3.14],
      [1.9, 1.9],
    ],
    "30": [
      [14.1, 14.1],
      [21.88, 21.88],
    ],
  },
  varLabels: [
    ["11", "D11"],
    ["22A", "D22"],
    ["26A", "D26"],
    ["30", "BF"],
  ],
  zoomPositions: [7.55, 12.59],
  zoomLabels: ["Wide", "Tele"],

  /* ── Group / cemented annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "11" },
    { text: "G2A", fromSurface: "12", toSurface: "22A" },
    { text: "G2B (FOCUS)", fromSurface: "23", toSurface: "26A" },
    { text: "G2C", fromSurface: "27", toSurface: "30" },
  ],
  doublets: [
    { text: "C1", fromSurface: "9", toSurface: "11" },
    { text: "C2", fromSurface: "15", toSurface: "17" },
    { text: "C3", fromSurface: "18", toSurface: "20" },
  ],

  closeFocusM: 0.15,
  focusDescription:
    "G2B (L13+L14) focuses objectward, but finite-focus spacings are unpublished. Focus travel is not modeled; 0.15 m is the production minimum focus distance.",

  zoomApertureModel: "from-nominal-fno",
  nominalFno: [2.9, 2.89],
  fstopSeries: [2.8, 3.5, 4, 5.6, 8, 11, 16],

  maxRimAngleDeg: 76,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
