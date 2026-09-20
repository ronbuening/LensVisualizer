import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — SONY FE 50-150mm f/2 GM                             ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2025/220324 A1, Example 1 (Sony Group Corporation).      ║
 * ║  Strong production correlation to the FE 50-150mm F2 GM, but neither the   ║
 * ║  patent nor Sony product material examined here confirms that Example 1    ║
 * ║  is the production prescription.                                            ║
 * ║                                                                            ║
 * ║  Patent design: 19 physical elements, 17 air-separated groups, 7 zoom      ║
 * ║  motion groups, and 7 aspherical surfaces. No dimensional scaling.         ║
 * ║  Internal zoom: G1, G4, and G7 remain fixed. Published floating focus:      ║
 * ║  G5 moves imageward and G6 moves objectward.                               ║
 * ║                                                                            ║
 * ║  Published variable gaps: d6, d14, d16, d26, d29, d31.                    ║
 * ║  Zoom-only gaps: d6, d14, d16. Focus + zoom gaps: d26, d29, d31.          ║
 * ║  All six Wide/Mid/Tele × infinity/close states come directly from Table 3. ║
 * ║  Focus status: PUBLISHED. No internal focus state was reconstructed.        ║
 * ║                                                                            ║
 * ║  Semi-diameters: refracting-surface SDs use the patent effective diameter  ║
 * ║  φ_i / 2. These are source effective/clear apertures, not claimed measured ║
 * ║  manufactured rim diameters. The physical iris diameter is not separately  ║
 * ║  published. STO sd = 19.916712 mm is calibrated from the three Table 2     ║
 * ║  f/2.06 states; this is a modeling inference, not a measured stop opening. ║
 * ║                                                                            ║
 * ║  Geometry policy: gapSagFrac = 0.98 is a per-lens override required by the ║
 * ║  published effective apertures. The tightest printed source geometry is    ║
 * ║  surfaces 2→3 (intrusion fraction ≈ 0.968944, still positive clearance).   ║
 * ║  The default 0.90 would reject source-required aperture geometry.           ║
 * ║                                                                            ║
 * ║  Glass labels are vendor-neutral six-digit d-line coordinate classes.      ║
 * ║  Catalog coordinate matches do not establish the actual supplier or melt,  ║
 * ║  so no vendor Sellmeier or unsupported line-index data is authored here.   ║
 * ║                                                                            ║
 * ║  Table 4 surface 16 A10 is blank in the source. The modeled absent term is ║
 * ║  numerical zero; the raw blank remains preserved in evidence.json.         ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "sony-fe-50-150mm-f2-gm",
  maker: "Sony",
  name: "SONY FE 50-150mm f/2 GM",
  subtitle: "WO 2025/220324 A1 Example 1 — strong production correlation; not manufacturer-confirmed",
  specs: [
    "19 ELEMENTS / 17 GROUPS",
    "DESIGN 51.50-145.50 mm",
    "DESIGN f/2.06",
    "INTERNAL ZOOM / FLOATING FOCUS",
    "7 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: [50, 150],
  focalLengthDesign: [51.490659, 145.523015],
  apertureMarketing: 2,
  apertureDesign: 2.06,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "WO 2025/220324 A1",
  patentAuthors: ["Hiroo Juri", "Naoto Kikuchi", "Hiraku Iwaya"],
  patentAssignees: ["Sony Group Corporation"],
  patentYear: 2025,
  elementCount: 19,
  groupCount: 17,

  elements: [
    {
      id: 1,
      name: "E1",
      diagramLabel: "E1",
      label: "Element E1",
      type: "Negative Meniscus, convex to object",
      nd: 1.8061,
      vd: 33.3,
      indexReference: "d",
      fl: -306.490279,
      glass: "806333 class (supplier unproven)",
    },
    {
      id: 2,
      name: "E2",
      diagramLabel: "E2",
      label: "Element E2",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      indexReference: "d",
      fl: 176.725587,
      glass: "437951 class (supplier unproven)",
    },
    {
      id: 3,
      name: "E3",
      diagramLabel: "E3",
      label: "Element E3",
      type: "Positive Meniscus, convex to object",
      nd: 1.437,
      vd: 95.1,
      indexReference: "d",
      fl: 189.241322,
      glass: "437951 class (supplier unproven)",
    },
    {
      id: 4,
      name: "E4",
      diagramLabel: "E4",
      label: "Element E4",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.76802,
      vd: 49.2,
      indexReference: "d",
      fl: -65.59412,
      glass: "768492 class (supplier unproven)",
    },
    {
      id: 5,
      name: "E5",
      diagramLabel: "E5",
      label: "Element E5",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.7,
      indexReference: "d",
      fl: -67.657604,
      glass: "729547 class (supplier unproven)",
    },
    {
      id: 6,
      name: "E6",
      diagramLabel: "E6",
      label: "Element E6",
      type: "Biconvex Positive",
      nd: 1.9011,
      vd: 27.1,
      indexReference: "d",
      fl: 60.790077,
      glass: "NBFD27 — coordinate-compatible spectral proxy (supplier unresolved)",
    },
    {
      id: 7,
      name: "E7",
      diagramLabel: "E7",
      label: "Element E7",
      type: "Negative Meniscus, convex to image",
      nd: 1.55032,
      vd: 75.5,
      indexReference: "d",
      fl: -120.585845,
      glass: "550755 class (supplier unproven)",
    },
    {
      id: 8,
      name: "E8",
      diagramLabel: "E8",
      label: "Element E8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      indexReference: "d",
      fl: 70.078778,
      glass: "694532 class (supplier unproven)",
    },
    {
      id: 9,
      name: "E9",
      diagramLabel: "E9",
      label: "Element E9",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.3,
      indexReference: "d",
      fl: -66.250082,
      glass: "954323 class (supplier unproven)",
    },
    {
      id: 10,
      name: "E10",
      diagramLabel: "E10",
      label: "Element E10",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.5,
      indexReference: "d",
      fl: 53.136028,
      glass: "764485 class (supplier unproven)",
    },
    {
      id: 11,
      name: "E11",
      diagramLabel: "E11",
      label: "Element E11",
      type: "Negative Meniscus, convex to object",
      nd: 1.76634,
      vd: 35.8,
      indexReference: "d",
      fl: -49.521916,
      glass: "S-NBH59 — coordinate-compatible spectral proxy (supplier unproven)",
      cemented: "D1",
    },
    {
      id: 12,
      name: "E12",
      diagramLabel: "E12",
      label: "Element E12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      fl: 51.643212,
      glass: "497816 class (supplier unproven)",
      cemented: "D1",
    },
    {
      id: 13,
      name: "E13",
      diagramLabel: "E13",
      label: "Element E13",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      indexReference: "d",
      fl: 81.01079,
      glass: "593686 class (supplier unproven)",
    },
    {
      id: 14,
      name: "E14",
      diagramLabel: "E14",
      label: "Element E14",
      type: "Biconvex Positive",
      nd: 1.86966,
      vd: 20,
      indexReference: "d",
      fl: 103.931167,
      glass: "870200 class (supplier unproven)",
      cemented: "D2",
    },
    {
      id: 15,
      name: "E15",
      diagramLabel: "E15",
      label: "Element E15",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 44.3,
      indexReference: "d",
      fl: -39.98301,
      glass: "613443 class (supplier unproven)",
      cemented: "D2",
    },
    {
      id: 16,
      name: "E16",
      diagramLabel: "E16",
      label: "Element E16",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.59245,
      vd: 66.9,
      indexReference: "d",
      fl: 50.868972,
      glass: "M-PCD51 — coordinate-compatible spectral proxy (supplier unproven)",
    },
    {
      id: 17,
      name: "E17",
      diagramLabel: "E17",
      label: "Element E17",
      type: "Positive Meniscus, convex to image",
      nd: 1.64769,
      vd: 33.8,
      indexReference: "d",
      fl: 119.025665,
      glass: "648338 class (supplier unproven)",
    },
    {
      id: 18,
      name: "E18",
      diagramLabel: "E18",
      label: "Element E18",
      type: "Negative Meniscus, convex to image (2× Asph)",
      nd: 1.76802,
      vd: 49.2,
      indexReference: "d",
      fl: -55.447393,
      glass: "768492 class (supplier unproven)",
    },
    {
      id: 19,
      name: "E19",
      diagramLabel: "E19",
      label: "Element E19",
      type: "Negative Meniscus, convex to image",
      nd: 1.95375,
      vd: 32.3,
      indexReference: "d",
      fl: -58.511675,
      glass: "954323 class (supplier unproven)",
    },
  ],

  surfaces: [
    { label: "1", R: 131.467, d: 2.4, nd: 1.8061, elemId: 1, sd: 37.9 },
    { label: "2", R: 85.108, d: 0.15, nd: 1, elemId: 0, sd: 36.73 },
    { label: "3", R: 86.472, d: 10.98, nd: 1.437, elemId: 2, sd: 36.73 },
    { label: "4", R: -694.616, d: 0.2, nd: 1, elemId: 0, sd: 36.45 },
    { label: "5", R: 72.826, d: 9.27, nd: 1.437, elemId: 3, sd: 34.155 },
    { label: "6", R: 586.426, d: 1, nd: 1, elemId: 0, sd: 33.6 },
    { label: "7A", R: 197.7, d: 1.5, nd: 1.76802, elemId: 4, sd: 22.6 },
    { label: "8A", R: 40.015, d: 7.23, nd: 1, elemId: 0, sd: 20.01 },
    { label: "9", R: -142.385, d: 1.35, nd: 1.72916, elemId: 5, sd: 19.885 },
    { label: "10", R: 75.79, d: 0.47, nd: 1, elemId: 0, sd: 19.17 },
    { label: "11", R: 64.236, d: 5.3, nd: 1.9011, elemId: 6, sd: 19.545 },
    { label: "12", R: -357.484, d: 9.07, nd: 1, elemId: 0, sd: 19.605 },
    { label: "13", R: -40.223, d: 1.25, nd: 1.55032, elemId: 7, sd: 19.46 },
    { label: "14", R: -103.248, d: 46.8, nd: 1, elemId: 0, sd: 20.215 },
    { label: "15A", R: 69.114, d: 6.64, nd: 1.6935, elemId: 8, sd: 21.34 },
    { label: "16A", R: -157.293, d: 4.03, nd: 1, elemId: 0, sd: 21.325 },
    // Physical iris SD calibrated from the three published f/2.06 infinity states.
    { label: "STO", R: 1e15, d: 1.64, nd: 1, elemId: 0, sd: 19.916712 },
    { label: "18", R: -372.93, d: 1.45, nd: 1.95375, elemId: 9, sd: 20.925 },
    { label: "19", R: 76.22, d: 3.12, nd: 1, elemId: 0, sd: 20.885 },
    { label: "20", R: 52.368, d: 8.59, nd: 1.76385, elemId: 10, sd: 22.32 },
    { label: "21", R: -167.616, d: 0.2, nd: 1, elemId: 0, sd: 22.19 },
    { label: "22", R: 97.405, d: 1.3, nd: 1.76634, elemId: 11, sd: 21.305 },
    { label: "23", R: 27.152, d: 11.35, nd: 1.497, elemId: 12, sd: 19.67 },
    { label: "24", R: -404.077, d: 0.2, nd: 1, elemId: 0, sd: 19.45 },
    { label: "25", R: 66.046, d: 5.56, nd: 1.59282, elemId: 13, sd: 18.895 },
    { label: "26", R: -170.492, d: 2.4, nd: 1, elemId: 0, sd: 18.515 },
    { label: "27", R: 149.766, d: 3.05, nd: 1.86966, elemId: 14, sd: 16.325 },
    { label: "28", R: -225.801, d: 1.1, nd: 1.6134, elemId: 15, sd: 15.9 },
    { label: "29", R: 27.565, d: 22.72, nd: 1, elemId: 0, sd: 14.1 },
    { label: "30", R: 228.881, d: 7.61, nd: 1.59245, elemId: 16, sd: 17.735 },
    { label: "31A", R: -34.278, d: 2.15, nd: 1, elemId: 0, sd: 18.005 },
    { label: "32", R: -122.754, d: 4.51, nd: 1.64769, elemId: 17, sd: 17.655 },
    { label: "33", R: -48.037, d: 0.3, nd: 1, elemId: 0, sd: 17.68 },
    { label: "34A", R: -39.372, d: 1.41, nd: 1.76802, elemId: 18, sd: 17.52 },
    { label: "35A", R: -529.998, d: 7.16, nd: 1, elemId: 0, sd: 17.455 },
    { label: "36", R: -28.268, d: 1.2, nd: 1.95375, elemId: 19, sd: 16.965 },
    { label: "37", R: -58.473, d: 15.51, nd: 1, elemId: 0, sd: 18 },
  ],

  asph: {
    "7A": {
      K: 0,
      A4: 2.59621e-7,
      A6: 3.37007e-9,
      A8: -5.22943e-12,
      A10: 3.91332e-15,
      A12: 0,
      A14: 0,
    },
    "8A": {
      K: 1.31207,
      A4: -2.69533e-6,
      A6: 2.6002e-10,
      A8: -3.28969e-12,
      A10: -6.66692e-15,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: -1.3048e-6,
      A6: -2.50533e-10,
      A8: -1.11346e-12,
      A10: -5.07252e-16,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: 1.49176e-6,
      A6: -2.79527e-10,
      A8: -1.098e-12,
      A10: 0, // Table 4 source cell is blank; modeled absent coefficient = 0.
      A12: 0,
      A14: 0,
    },
    "31A": {
      K: 0,
      A4: 1.78822e-5,
      A6: -2.79519e-8,
      A8: 5.0713e-11,
      A10: -4.65343e-14,
      A12: 0,
      A14: 0,
    },
    "34A": {
      K: 0,
      A4: 1.55693e-5,
      A6: -2.74386e-8,
      A8: 5.95406e-11,
      A10: -5.11049e-14,
      A12: 0,
      A14: 0,
    },
    "35A": {
      K: 0,
      A4: -6.90678e-6,
      A6: -7.75637e-10,
      A8: 3.27399e-12,
      A10: -1.99728e-14,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "6": [
      [1, 1],
      [28.25, 28.25],
      [48.3, 48.3],
    ],
    "14": [
      [46.8, 46.8],
      [21.25, 21.25],
      [1.1, 1.1],
    ],
    "16A": [
      [4.03, 4.03],
      [2.33, 2.33],
      [2.43, 2.43],
    ],
    "26": [
      [2.4, 6.14],
      [4.81, 12.42],
      [2.49, 15.63],
    ],
    "29": [
      [22.72, 17.74],
      [20.23, 11.05],
      [22.77, 7.67],
    ],
    "31A": [
      [2.15, 3.38],
      [2.22, 3.79],
      [2, 3.97],
    ],
  },

  varLabels: [
    ["6", "d6 — G1/G2"],
    ["14", "d14 — G2/G3"],
    ["16A", "d16 — G3/STO"],
    ["26", "d26 — G4/G5"],
    ["29", "d29 — G5/G6"],
    ["31A", "d31 — G6/G7"],
  ],

  zoomPositions: [51.5, 88.98, 145.5],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7A", toSurface: "14" },
    { text: "G3", fromSurface: "15A", toSurface: "16A" },
    { text: "G4", fromSurface: "STO", toSurface: "26" },
    { text: "G5", fromSurface: "27", toSurface: "29" },
    { text: "G6", fromSurface: "30", toSurface: "31A" },
    { text: "G7", fromSurface: "32", toSurface: "37" },
  ],

  doublets: [
    { text: "D1", fromSurface: "22", toSurface: "24" },
    { text: "D2", fromSurface: "27", toSurface: "29" },
  ],

  closeFocusM: 0.397,
  zoomCloseFocusM: [0.397, 0.521, 0.746],
  focusDescription: "Published two-group floating focus: G5 moves imageward and G6 moves objectward. The authored close states are the patent Table 3 values at 0.397 m, 0.521 m, and 0.746 m for Wide/Mid/Tele; no internal focus reconstruction is used.",

  nominalFno: 2.06,
  fstopSeries: [2.06, 2.8, 4, 5.6, 8, 11, 16],

  gapSagFrac: 0.98,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
