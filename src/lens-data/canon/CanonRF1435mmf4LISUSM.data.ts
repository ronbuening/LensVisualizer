import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON RF 14-35mm f/4 L IS USM                                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2022/0171174 A1, Numerical Example 3 (Takahiro Hatada / Canon). ║
 * ║ Production correlation: Canon RF14-35mm F4 L IS USM.                      ║
 * ║ 16 physical glass elements / 12 air-separated groups / 6 zoom groups.     ║
 * ║ Six aspherical surfaces on three physical elements.                        ║
 * ║ Scale factor s = 1.0; no production scaling is applied.                    ║
 * ║                                                                            ║
 * ║ Zoom: patent infinity states at f = 14.42, 24.42, 33.95 mm.               ║
 * ║ Variable gaps: d8, d18, d23, d25, d27.                                     ║
 * ║ d23 and d25 also carry the focus reconstruction described below.           ║
 * ║ L1 reverses direction between wide and tele; L6 is stationary.             ║
 * ║                                                                            ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION.                                  ║
 * ║ The patent states that L4 moves imageward toward close focus but publishes ║
 * ║ no close-focus spacing row. Close states are code-solved for Canon's       ║
 * ║ 0.200 m sensor-plane MFD with one L4 translation degree of freedom and     ║
 * ║ d23 + d25 conserved at each zoom state. These close values are not         ║
 * ║ patent-published prescription data.                                        ║
 * ║                                                                            ║
 * ║ Stop: patent surface 9 is the sole aperture stop. Its printed 18.03 mm     ║
 * ║ effective diameter is treated as a clear envelope, not one fixed working   ║
 * ║ iris. STO sd therefore preserves the 9.015 mm source clear-envelope        ║
 * ║ radius, while nominalFno [4.08, 4.08, 4.12] controls working pupil sizing. ║
 * ║ The solved working iris diameters are 11.32–17.27 mm, all within it.        ║
 * ║                                                                            ║
 * ║ Semi-diameters: all refracting surfaces use one-half of the patent-listed  ║
 * ║ effective diameters. The 4A→5 air gap is physically non-intersecting but   ║
 * ║ uses 92.203% of the gap at the shared published band, so gapSagFrac is      ║
 * ║ explicitly 0.93 rather than the shared 0.90 default.                       ║
 * ║                                                                            ║
 * ║ Glass: the patent gives d-line nd/vd but no supplier names and no element  ║
 * ║ nC, nF, ng, or dPgF. Glass annotations remain coordinate/class level; E6   ║
 * ║ uses S-TIM27 only as a coefficient proxy, without claiming the supplier.    ║
 * ║                                                                            ║
 * ║ Aspheres use the patent's standard (1+K) conic convention. Paragraph 0063 ║
 * ║ prints the general polynomial only through A12, but Example 3 explicitly   ║
 * ║ tabulates nonzero A14 on surfaces 3 and 4; those A14 terms are retained.   ║
 * ║                                                                            ║
 * ║ Source discrepancy retained outside the optical arrays: the Example 3      ║
 * ║ table prints wide half-angle 53.26°, while Fig. 8A prints ω = 56.3°.       ║
 * ║ No projection override is authored from either conflicting value.          ║
 * ║                                                                            ║
 * ║ Manufacturer identity/spec sources:                                        ║
 * ║ https://www.usa.canon.com/shop/p/rf14-35mm-f4-l-is-usm                    ║
 * ║ https://global.canon/en/c-museum/product/rf509.html                        ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-rf-14-35mm-f4-l-is-usm",
  maker: "Canon",
  name: "CANON RF 14-35mm f/4 L IS USM",
  subtitle: "US 2022/0171174 A1 — Numerical Example 3 production correlation",
  specs: [
    "16 ELEMENTS / 12 GROUPS",
    "14–35mm f/4 (marketed)",
    "Computed EFL = 14.419–33.959 mm",
    "Design F/4.08–4.12",
    "6 ASPHERICAL SURFACES / 3 UD-CLASS ELEMENTS",
  ],

  focalLengthMarketing: [14, 35],
  focalLengthDesign: [14.41888, 33.959239],
  apertureMarketing: 4,
  apertureDesign: 4.08,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2022/0171174 A1",
  patentAuthors: ["Takahiro Hatada"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2022,
  elementCount: 16,
  groupCount: 12,

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: -36.034944,
      glass: "773496 class (vendor indeterminate)",
      role: "L1 negative lead group.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      indexReference: "d",
      fl: -37.82526,
      glass: "583594 class (vendor indeterminate)",
      role: "L1 negative lead group; both surfaces aspherical.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.5,
      indexReference: "d",
      fl: -50.280043,
      glass: "497816-class UD/ED crown (vendor indeterminate)",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; the patent publishes nd/νd only and does not identify a vendor or partial-dispersion curve.",
      role: "L1 negative lead group; one of three 1.49700/81.5 elements in the production correlation.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.2,
      indexReference: "d",
      fl: 36.29257,
      glass: "834372 class (vendor indeterminate)",
      role: "Positive rear member of L1.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.3,
      indexReference: "d",
      fl: -46.230912,
      glass: "954323 class (vendor indeterminate)",
      role: "First member of cemented doublet D1 in L2/LP.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.6398,
      vd: 34.5,
      indexReference: "d",
      fl: 31.689203,
      glass: "S-TIM27 coefficient proxy (supplier unspecified; patent 640345)",
      role: "Second member of cemented doublet D1 in L2/LP.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.3,
      indexReference: "d",
      fl: -40.860699,
      glass: "911353 class (vendor indeterminate)",
      role: "First member of cemented doublet D2 in L2/LP.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      fl: 23.403638,
      glass: "516641 class (vendor indeterminate)",
      role: "Second member of cemented doublet D2 in L2/LP.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.7,
      indexReference: "d",
      fl: -25.524306,
      glass: "720347 class (vendor indeterminate)",
      role: "Negative member of the cemented LN image-stabilization doublet.",
      cemented: "D3 / LN",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.5,
      indexReference: "d",
      fl: 37.888744,
      glass: "001255 class (vendor indeterminate)",
      role: "Positive member of the cemented LN image-stabilization doublet.",
      cemented: "D3 / LN",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.5,
      indexReference: "d",
      fl: -32.618123,
      glass: "804465/466 class (vendor indeterminate)",
      role: "First member of cemented doublet D4 in L3.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      indexReference: "d",
      fl: 23.670928,
      glass: "497816-class UD/ED crown (vendor indeterminate)",
      apd: "inferred",
      apdNote:
        "Production-correlated UD position; the patent publishes nd/νd only and does not identify a vendor or partial-dispersion curve.",
      role: "Second member of cemented doublet D4 in L3; 1.49700/81.5 element.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.497,
      vd: 81.5,
      indexReference: "d",
      fl: 26.522669,
      glass: "497816-class UD/ED crown (vendor indeterminate)",
      apd: "inferred",
      apdNote:
        "Production-correlated UD aspherical position; the patent publishes nd/νd only and does not identify a vendor or partial-dispersion curve.",
      role: "Aspherical positive L3 element; 1.49700/81.5 element.",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.5,
      indexReference: "d",
      fl: -35.509809,
      glass: "804465/466 class (vendor indeterminate)",
      role: "L4 rear-focus element; translated imageward in the close-focus reconstruction.",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.854,
      vd: 40.4,
      indexReference: "d",
      fl: -94.24148,
      glass: "L-LAH85V-class coordinate match (supplier not established)",
      role: "L5 negative element; both surfaces aspherical.",
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      fl: 114.545931,
      glass: "S-FSL5-class coordinate match (supplier not established)",
      role: "Stationary positive L6 rear group.",
    },
  ],

  surfaces: [
    { label: "1", R: 53.599, d: 1.4, nd: 1.7725, elemId: 1, sd: 21.91 },
    { label: "2", R: 18.113, d: 5.22, nd: 1, elemId: 0, sd: 16.105 },
    { label: "3A", R: 22.075, d: 2.2, nd: 1.58313, elemId: 2, sd: 15.825 },
    { label: "4A", R: 10.628, d: 10.87, nd: 1, elemId: 0, sd: 13.23 },
    { label: "5", R: -44.745, d: 1, nd: 1.497, elemId: 3, sd: 13.095 },
    { label: "6", R: 57.018, d: 0.2, nd: 1, elemId: 0, sd: 12.985 },
    { label: "7", R: 34.464, d: 5, nd: 1.834, elemId: 4, sd: 13.09 },
    { label: "8", R: -232.206, d: 27.76, nd: 1, elemId: 0, sd: 12.8 },
    { label: "STO", R: 1e15, d: 0.3, nd: 1, elemId: 0, sd: 9.015 },
    { label: "10", R: 28.19, d: 0.9, nd: 1.95375, elemId: 5, sd: 9.355 },
    { label: "11", R: 16.928, d: 4.39, nd: 1.6398, elemId: 6, sd: 9.185 },
    { label: "12", R: 92.174, d: 0.15, nd: 1, elemId: 0, sd: 9.23 },
    { label: "13", R: 22.781, d: 0.9, nd: 1.91082, elemId: 7, sd: 9.405 },
    { label: "14", R: 13.865, d: 7.08, nd: 1.51633, elemId: 8, sd: 9.045 },
    { label: "15", R: -77.716, d: 1.33, nd: 1, elemId: 0, sd: 9.08 },
    { label: "16", R: -101.166, d: 0.7, nd: 1.72047, elemId: 9, sd: 9.015 },
    { label: "17", R: 22.54, d: 2.37, nd: 2.00069, elemId: 10, sd: 9.045 },
    { label: "18", R: 52.661, d: 4.14, nd: 1, elemId: 0, sd: 8.98 },
    { label: "19", R: 27.758, d: 0.9, nd: 1.804, elemId: 11, sd: 9.13 },
    { label: "20", R: 13.29, d: 6.78, nd: 1.497, elemId: 12, sd: 8.82 },
    { label: "21", R: -85.129, d: 0.2, nd: 1, elemId: 0, sd: 8.93 },
    { label: "22A", R: 31.208, d: 6.99, nd: 1.497, elemId: 13, sd: 9.635 },
    { label: "23A", R: -21.124, d: 1.4, nd: 1, elemId: 0, sd: 10.005 },
    { label: "24", R: 97.737, d: 0.75, nd: 1.804, elemId: 14, sd: 9.66 },
    { label: "25", R: 22.02, d: 7.46, nd: 1, elemId: 0, sd: 9.445 },
    { label: "26A", R: -83.892, d: 1.6, nd: 1.854, elemId: 15, sd: 10.55 },
    { label: "27A", R: 1997.53, d: 3.78, nd: 1, elemId: 0, sd: 11.105 },
    { label: "28", R: -426.907, d: 5.12, nd: 1.48749, elemId: 16, sd: 19.06 },
    { label: "29", R: -49.575, d: 14.99, nd: 1, elemId: 0, sd: 19.425 },
  ],

  asph: {
    "3A": {
      K: 0,
      A4: -4.03233e-5,
      A6: 2.8431e-7,
      A8: -1.85419e-9,
      A10: 6.48125e-12,
      A12: -1.22378e-14,
      A14: 9.28892e-18,
    },
    "4A": {
      K: -0.560601,
      A4: -6.16452e-5,
      A6: 2.38219e-7,
      A8: -1.71089e-9,
      A10: -6.46493e-12,
      A12: 6.50194e-14,
      A14: -1.76965e-16,
    },
    "22A": {
      K: 0,
      A4: -1.67837e-5,
      A6: -3.64843e-8,
      A8: 1.07618e-9,
      A10: -1.2435e-11,
      A12: 7.09601e-14,
      A14: 0,
    },
    "23A": {
      K: 0,
      A4: 1.93177e-5,
      A6: -1.27575e-7,
      A8: 6.12378e-10,
      A10: -8.15372e-12,
      A12: 4.33482e-14,
      A14: 0,
    },
    "26A": {
      K: 0,
      A4: 2.55101e-5,
      A6: -2.64846e-7,
      A8: -4.5496e-10,
      A10: 8.83199e-12,
      A12: -3.33076e-14,
      A14: 0,
    },
    "27A": {
      K: 0,
      A4: 3.69079e-5,
      A6: -2.56285e-7,
      A8: 4.52183e-10,
      A10: 1.4725e-12,
      A12: -6.14678e-15,
      A14: 0,
    },
  },

  zoomPositions: [14.42, 24.42, 33.95],
  zoomLabels: ["Wide", "Tele"],

  var: {
    "8": [
      [27.76, 27.76],
      [8, 8],
      [2.38, 2.38],
    ],
    "18": [
      [4.14, 4.14],
      [2.93, 2.93],
      [1.3, 1.3],
    ],
    "23A": [
      [1.4, 2.2829920039237397],
      [2.29, 3.760420206543321],
      [1.88, 3.8529453843733754],
    ],
    "25": [
      [7.46, 6.57700799607626],
      [6.57, 5.099579793456679],
      [6.97, 4.997054615626624],
    ],
    "27A": [
      [3.78, 3.78],
      [17.21, 17.21],
      [32, 32],
    ],
  },
  varLabels: [
    ["8", "D8 (zoom)"],
    ["18", "D18 (zoom)"],
    ["23A", "D23 (zoom + focus)"],
    ["25", "D25 (zoom + focus)"],
    ["27A", "D27 (zoom)"],
  ],

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "8" },
    { text: "L2", fromSurface: "STO", toSurface: "18" },
    { text: "L3", fromSurface: "19", toSurface: "23A" },
    { text: "L4 / FOCUS", fromSurface: "24", toSurface: "25" },
    { text: "L5", fromSurface: "26A", toSurface: "27A" },
    { text: "L6", fromSurface: "28", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "10", toSurface: "12" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
    { text: "D3 / LN (IS)", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
  ],

  closeFocusM: 0.2,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: L4 moves imageward. Close states are solved at a 0.200 m sensor-plane object " +
    "distance with one L4 translation degree of freedom and D23 + D25 conserved at each zoom position.",

  nominalFno: [4.08, 4.08, 4.12],
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,

  gapSagFrac: 0.93,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
