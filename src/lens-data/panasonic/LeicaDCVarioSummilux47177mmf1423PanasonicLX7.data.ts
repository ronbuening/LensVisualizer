import type { LensDataInput } from "../../types/optics.js";

/**
 * LEICA DC VARIO-SUMMILUX 4.7-17.7mm f/1.4-2.3 (Panasonic Lumix DMC-LX7)
 *
 * Source prescription: US 2015/0124127 A1, Numerical Example 1 / Embodiment 1.
 * The patent-to-production LX7 identification is strongly correlated by construction,
 * asphere count, OIS layout, format, timing, and aperture, but is not manufacturer-confirmed.
 *
 * Model normalization:
 * - No uniform scaling is applied (s = 1).
 * - The published 0.01 mm adhesive layer at equal-radius source surfaces 12-13 is collapsed
 *   to one direct L6->L7 cemented junction at R = 56.2842 mm. The model junction carries
 *   the downstream L7 index/elemId, and the distance from the junction to surface 14 is 0.31 mm.
 * - The source 0.9 mm rear plane-parallel plate P is omitted. Surface 23 therefore carries
 *   the code-solved air rear spacing to the image plane at each published zoom state.
 * - Focus status is NO_INTERNAL_RECONSTRUCTION. The patent publishes only infinity-focus
 *   zoom spacings and says G4/L10 moves object-side for close focus; no close-focus spacing
 *   row is invented. All authored var pairs therefore repeat the published infinity spacing.
 * - The patent publishes no physical stop diameter or surface clear apertures. nominalFno
 *   uses the patent design values [1.46326, 1.79811, 2.37854]. The STO semi-diameter is the
 *   maximum modeled wide-open aperture envelope (tele state), calibrated from those f-numbers;
 *   it is not independent evidence of the production diaphragm diameter.
 * - Surface semi-diameters are modeled from exact meridional ray envelopes through 0.6 of
 *   the patent half-field at wide/middle/tele plus representative inter-state zoom samples,
 *   with clearance, then checked for edge thickness, actual aspheric rim slope, conic domain,
 *   shared-gap sag intrusion, and exact off-axis containment. Production render diagnostics
 *   passed in the repository audit; see the accompanying audit log.
 *
 * Patent design endpoints are 4.8862-17.1948 mm and f/1.46326-2.37854. Panasonic markets
 * 4.7-17.7 mm and f/1.4-2.3; the two sets are deliberately kept separate.
 */

// SD review (2026-09-15): exact local patent Fig. 1 optical rims; see the audit sidecar.
// L2 surface 3A extended to 10.7 mm at its optical rim; rear 4A remains 7.7 mm.
// Revised apertures remain estimates; radii, spacings and calibrated stop are unchanged.
const LENS_DATA = {
  key: "leica-dc-vario-summilux-47-177mm-f14-23-panasonic-lx7",
  maker: "Panasonic",
  name: "LEICA DC VARIO-SUMMILUX 4.7-17.7mm f/1.4-2.3 (Panasonic Lumix DMC-LX7)",
  subtitle: "US 2015/0124127 A1 · Numerical Example 1 · LX7 correlation is inferential",
  specs: [
    "11 ELEMENTS / 10 GROUPS",
    "PATENT EFL 4.8862-17.1948 mm",
    "DESIGN f/1.46326-2.37854",
    "9 ASPHERICAL SURFACES / 5 ASPHERICAL ELEMENTS",
    "L8 TRANSVERSE OIS",
  ],

  focalLengthMarketing: [4.7, 17.7],
  focalLengthDesign: [4.886165571, 17.194509683],
  apertureMarketing: 1.4,
  apertureDesign: 1.46326,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "1/1.7-inch-type",
  patentNumber: "US 2015/0124127 A1",
  patentAuthors: ["Tsutomu Iwashita", "Yoshiaki Kurioka", "Takehiro Nishioka"],
  patentAssignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  patentYear: 2015,
  elementCount: 11,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      fl: 98.556619,
      glass: "S-LAH55 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.805,
      vd: 41.0,
      indexReference: "d",
      fl: -12.200878,
      glass: "S-LAH53 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.59282,
      vd: 68.6,
      indexReference: "d",
      fl: -34.712882,
      glass: "FCD515 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "inferred",
      apdNote: "FCD515 spectral proxy has ΔPgF ≈ +0.0158; APD is catalog-inferred, not patent-listed or a supplier identification.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 2.00272,
      vd: 19.3,
      indexReference: "d",
      fl: 31.507571,
      glass: "E-FDS2 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "inferred",
      apdNote: "E-FDS2 spectral proxy has ΔPgF ≈ +0.0338; APD is catalog-inferred, not patent-listed or a supplier identification.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.60602,
      vd: 57.4,
      indexReference: "d",
      fl: 18.243385,
      glass: "N-SK2 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: 14.593172,
      glass: "J-LASF016 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      cemented: "C1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.8,
      indexReference: "d",
      fl: -10.689035,
      glass: "E-FD13 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      cemented: "C1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.3,
      indexReference: "d",
      fl: -23.529706,
      glass: "H-ZF4A (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      role: "Transverse image-stabilization element within G3 (patent ¶0190-¶0192).",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.55189,
      vd: 71.5,
      indexReference: "d",
      fl: 12.566649,
      glass: "M-FCD500 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "inferred",
      apdNote: "M-FCD500 spectral proxy has ΔPgF ≈ +0.0170; APD is catalog-inferred, not patent-listed or a supplier identification.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.684,
      vd: 31.3,
      indexReference: "d",
      fl: 26.370036,
      glass: "684313 — Unmatched exact public catalog identity",
      apd: false,
      role: "Sole G4 focus element; published focus direction is object-side toward close focus.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.6355,
      vd: 23.9,
      indexReference: "d",
      fl: -32.275284,
      glass: "636239 — Unmatched exact public catalog identity",
      apd: false,
    },
  ],

  surfaces: [
    { label: "1", R: 113.4453, d: 1.9, nd: 1.83481, elemId: 1, sd: 13.4 },
    { label: "2", R: -297.1745, d: 0.3, nd: 1.0, elemId: 0, sd: 13.4 },
    { label: "3A", R: 111.987, d: 1.0, nd: 1.805, elemId: 2, sd: 10.7 },
    { label: "4A", R: 8.9938, d: 5.6842, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "5", R: -29.3648, d: 0.5, nd: 1.59282, elemId: 3, sd: 6.9 },
    { label: "6", R: 69.2114, d: 0.1, nd: 1.0, elemId: 0, sd: 6.9 },
    { label: "7", R: 23.4562, d: 1.73, nd: 2.00272, elemId: 4, sd: 7.1 },
    { label: "8", R: 87.7088, d: 26.2611, nd: 1.0, elemId: 0, sd: 7.1 },
    { label: "9A", R: 12.035, d: 2.52, nd: 1.60602, elemId: 5, sd: 6.8 },
    { label: "10A", R: -125.1544, d: 1.7359, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "11", R: 9.5288, d: 1.88, nd: 1.7725, elemId: 6, sd: 5.45 },
    { label: "12", R: 56.2842, d: 0.31, nd: 1.74077, elemId: 7, sd: 5.45 },
    { label: "14", R: 6.9253, d: 2.86, nd: 1.0, elemId: 0, sd: 4.4 },
    { label: "STO", R: 1e15, d: 1.7, nd: 1.0, elemId: 0, sd: 3.79351 },
    { label: "16", R: -11.503, d: 0.4, nd: 1.72825, elemId: 8, sd: 4.4 },
    { label: "17", R: -35.5078, d: 0.1, nd: 1.0, elemId: 0, sd: 4.4 },
    { label: "18A", R: 18.9644, d: 2.6223, nd: 1.55189, elemId: 9, sd: 4.9 },
    { label: "19A", R: -10.3964, d: 2.7795, nd: 1.0, elemId: 0, sd: 4.9 },
    { label: "20A", R: 16.1873, d: 1.47, nd: 1.684, elemId: 10, sd: 4.2 },
    { label: "21A", R: 152.0174, d: 4.419, nd: 1.0, elemId: 0, sd: 4.2 },
    { label: "22A", R: -14.5416, d: 0.6, nd: 1.6355, elemId: 11, sd: 4.7 },
    { label: "23", R: -50.7667, d: 1.6213283945286472, nd: 1.0, elemId: 0, sd: 4.7 },
  ],

  asph: {
    "3A": {
      K: 0,
      A4: -2.6865e-5,
      A6: -2.19939e-8,
      A8: 1.71056e-9,
      A10: -1.61048e-11,
      A12: 5.21813e-14,
      A14: 0,
      A16: 0,
    },
    "4A": {
      K: -0.143006,
      A4: -7.46957e-5,
      A6: -4.34096e-7,
      A8: -1.13634e-8,
      A10: 1.73729e-10,
      A12: -2.59994e-12,
      A14: 0,
      A16: 0,
    },
    "9A": {
      K: -0.0984634,
      A4: -6.88003e-5,
      A6: 1.27101e-6,
      A8: -5.27801e-8,
      A10: 1.03956e-9,
      A12: 0,
      A14: 0,
      A16: 0,
    },
    "10A": {
      K: 0,
      A4: 9.49723e-6,
      A6: 9.67297e-7,
      A8: -1.08421e-8,
      A10: -2.16963e-10,
      A12: 1.4491e-11,
      A14: 0,
      A16: 0,
    },
    "18A": {
      K: 0,
      A4: -2.43602e-4,
      A6: 6.65996e-6,
      A8: -9.91789e-7,
      A10: 4.96802e-8,
      A12: -1.47067e-9,
      A14: 4.75724e-12,
      A16: 0,
    },
    "19A": {
      K: 0,
      A4: 5.29678e-5,
      A6: -5.32716e-6,
      A8: 8.32304e-7,
      A10: -8.4539e-8,
      A12: 3.34839e-9,
      A14: -5.9755e-11,
      A16: 0,
    },
    "20A": {
      K: 0,
      A4: -2.21595e-4,
      A6: 1.39952e-5,
      A8: -1.04586e-6,
      A10: 6.11792e-8,
      A12: -1.38011e-9,
      A14: -1.50683e-11,
      A16: 1.00919e-12,
    },
    "21A": {
      K: 0,
      A4: -2.80965e-4,
      A6: 9.08046e-6,
      A8: -3.1043e-7,
      A10: 2.64379e-8,
      A12: -7.01895e-10,
      A14: -1.88682e-11,
      A16: 1.1006e-12,
    },
    "22A": {
      K: 0,
      A4: -7.92215e-4,
      A6: 6.88113e-5,
      A8: -2.88618e-6,
      A10: 7.75972e-8,
      A12: -8.87695e-10,
      A14: -2.47039e-17,
      A16: -1.82676e-19,
    },
  },

  var: {
    "2": [
      [0.3, 0.3],
      [7.8855, 7.8855],
      [17.2116, 17.2116],
    ],
    "8": [
      [26.2611, 26.2611],
      [9.4187, 9.4187],
      [0.3234, 0.3234],
    ],
    "19A": [
      [2.7795, 2.7795],
      [6.4064, 6.4064],
      [13.8846, 13.8846],
    ],
    "21A": [
      [4.419, 4.419],
      [5.1894, 5.1894],
      [5.5372, 5.5372],
    ],
    "23": [
      [1.6213283945286472, 1.6213283945286472],
      [1.6369488190033854, 1.6369488190033854],
      [1.6194398042737017, 1.6194398042737017],
    ],
  },
  varLabels: [
    ["2", "D2 (G1-G2)"],
    ["8", "D8 (G2-G3)"],
    ["19A", "D19 (G3-G4)"],
    ["21A", "D21 (G4-G5)"],
    ["23", "BF (plate omitted)"],
  ],

  zoomPositions: [4.8862, 9.1227, 17.1948],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (-)", fromSurface: "3A", toSurface: "8" },
    { text: "G3 (+)", fromSurface: "9A", toSurface: "19A" },
    { text: "G4 (+)", fromSurface: "20A", toSurface: "21A" },
    { text: "G5 (-)", fromSurface: "22A", toSurface: "23" },
  ],
  doublets: [{ text: "C1", fromSurface: "11", toSurface: "14" }],

  closeFocusM: 0.01,
  focusDescription:
    "Not modeled — G4/L10 moves object-side for close focus; no close-focus spacing is authored.",

  nominalFno: [1.46326, 1.79811, 2.37854],
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
