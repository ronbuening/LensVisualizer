import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                LENS DATA — Sony E 18-55mm f/3.5-5.6 OSS                   ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2011/0273780 A1, Numerical Example 1 (Sony).             ║
 * ║  Five-group P-N-P-N-P APS-C mirrorless kit zoom with single-lens OSS.     ║
 * ║  11 elements / 9 air-separated groups; 4 aspherical surfaces.             ║
 * ║  Focus: rear focus by axial motion of G4 / L10.                           ║
 * ║                                                                              ║
 * ║  Zoom variable gaps: D3, D9, D17, D19, D21/BF.                             ║
 * ║  Focus variable gaps: D17 and D19 estimated for 0.25 m close focus by      ║
 * ║  paraxial refocus solve; the patent publishes only infinity zoom data.     ║
 * ║                                                                              ║
 * ║  NOTE ON TABLE 3 / D21:                                                     ║
 * ║  Patent Table 3 prints D21 as 40.350 / 15.537 / 19.989 for wide/mid/tele. ║
 * ║  Direct paraxial verification gives the physically focused BFD sequence    ║
 * ║  15.537765 / 19.988771 / 40.343257 mm. The data file therefore uses the    ║
 * ║  computed BFD values rather than the printed D21 row.                      ║
 * ║                                                                              ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                    ║
 * ║  The patent omits clear apertures. SDs here are conservative renderer      ║
 * ║  estimates constrained by marginal/chief-ray clearance, element edge       ║
 * ║  thickness, sd/|R| < 0.90, element SD ratio <= 1.25, and cross-gap sag.    ║
 * ║  They are not patent-published mechanical clear-aperture values.           ║
 * ║                                                                              ║
 * ║  IMPORTANT: This file describes only the patent optical design: glass       ║
 * ║  elements, optical surfaces, stop, and variable focus/zoom gaps. It does   ║
 * ║  not include filters, sensor cover glass, or mechanical components.        ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "sony-e-18-55mm-f35-56-oss",
  maker: "Sony",
  name: "SONY E 18-55mm f/3.5-5.6 OSS",
  subtitle: "US 2011/0273780 A1 — Numerical Example 1",
  specs: [
    "11 elements / 9 groups",
    "18-55mm f/3.5-5.6 marketed",
    "Patent EFL 18.49 / 27.38 / 53.51mm",
    "4 aspherical surfaces",
    "Single-lens OSS; rear focus",
  ],

  focalLengthMarketing: [18, 55],
  focalLengthDesign: [18.4887, 53.51],
  apertureMarketing: 3.5,
  apertureDesign: 3.74,
  lensMounts: ["sony-fe"],
  imageFormat: "aps-c",
  patentNumber: "US 2011/0273780 A1",
  patentAuthors: ["Masaharu Hosoi", "Hiroyuki Matsumoto", "Masafumi Sueyoshi"],
  patentAssignees: ["Sony Corp"],
  patentYear: 2011,
  elementCount: 11,
  groupCount: 9,

  zoomPositions: [18.4887, 27.3753, 53.51],
  zoomStep: 0.004,
  zoomLabels: ["18mm", "55mm"],
  nominalFno: [3.5, 4, 5.6],
  closeFocusM: 0.25,
  focusDescription:
    "Rear focus by axial motion of the single negative/aspherical fourth group L10. Close-focus spacings are paraxial estimates for Sony's 0.25 m published MFD; the patent table is infinity-only.",

  apertureBlades: 7,
  maxFstop: 32,
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22, 32],
  scFill: 0.52,
  yScFill: 0.58,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -158.88,
      glass: "S-TIH53 (OHARA)",
      role: "Negative flint half of the front cemented achromat.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.66,
      fl: 40.66,
      glass: "S-LAL18 (OHARA)",
      role: "Positive crown half of the front cemented achromat; principal positive power of G1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.910823,
      vd: 35.25,
      fl: -12.85,
      glass: "S-NBH53 (OHARA)",
      role: "High-index diverging front element of the negative variator group G2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative (1x Asph)",
      nd: 1.851348,
      vd: 40.1,
      fl: -18.58,
      glass: "851401 - high-index lanthanum-flint-class moldable glass (M-TAFD305 code match; L-LAH85 attribution unconfirmed)",
      role: "Aspherical negative variator element used for wide-angle off-axis correction.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 20.84,
      glass: "S-NPH2 (OHARA)",
      role: "Strong positive, very-low-Abbe element balancing chromatic power in G2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus (OSS)",
      nd: 1.618,
      vd: 63.39,
      fl: 38.54,
      glass: "S-PHM52 (OHARA; patent νd = 63.39)",
      role: "Single positive blur-correction lens moved transverse to the optical axis for OSS.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.45,
      fl: 17.81,
      glass: "S-FSL5 (OHARA)",
      role: "Low-dispersion positive component of the post-stop cemented achromat.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.805181,
      vd: 25.46,
      fl: -27.78,
      glass: "S-TIH6 (OHARA)",
      role: "High-index flint partner of L7 in the post-stop cemented achromat.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus (1x Asph)",
      nd: 1.72903,
      vd: 54.04,
      fl: 32.62,
      glass: "729540 - lanthanum-crown-class moldable glass (M-TAC80 code match)",
      role: "Aspherical positive field-correcting tail element of G3.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus (2x Asph)",
      nd: 1.851348,
      vd: 40.1,
      fl: -20.75,
      glass: "851401 - high-index lanthanum-flint-class moldable glass (M-TAFD305 code match; L-LAH85 attribution unconfirmed)",
      role: "Single-element rear focus group; both surfaces are aspherical.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Plano-Convex Positive",
      nd: 1.58144,
      vd: 40.89,
      fl: 53.68,
      glass: "E-FL5 (HOYA)",
      role: "Final positive relay / field-flattening element.",
    },
  ],

  surfaces: [
    { label: "1", R: 31.253, d: 1.478, nd: 1.84666, elemId: 1, sd: 19.5 },
    { label: "2", R: 25.183, d: 5.771, nd: 1.72916, elemId: 2, sd: 18.5 },
    { label: "3", R: 151.048, d: 1.108, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "4", R: 54.338, d: 1.0, nd: 1.910823, elemId: 3, sd: 9.5 },
    { label: "5", R: 9.548, d: 5.665, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "6A", R: -31.233, d: 1.1, nd: 1.851348, elemId: 4, sd: 9.6 },
    { label: "7", R: 32.568, d: 0.4, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "8", R: 22.165, d: 2.835, nd: 1.92286, elemId: 5, sd: 9.6 },
    { label: "9", R: -136.224, d: 12.384, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "10", R: 23.25, d: 1.695, nd: 1.618, elemId: 6, sd: 6.4 },
    { label: "11", R: 949.971, d: 2.0, nd: 1.0, elemId: 0, sd: 6.2 },
    { label: "STO", R: 1e15, d: 2.181, nd: 1.0, elemId: 0, sd: 4.862 },
    { label: "13", R: 18.811, d: 3.365, nd: 1.48749, elemId: 7, sd: 6.8 },
    { label: "14", R: -15.181, d: 1.0, nd: 1.805181, elemId: 8, sd: 6.8 },
    { label: "15", R: -48.635, d: 1.736, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "16A", R: -36.032, d: 2.222, nd: 1.72903, elemId: 9, sd: 7.8 },
    { label: "17", R: -14.698, d: 5.51, nd: 1.0, elemId: 0, sd: 7.8 },
    { label: "18A", R: 237.858, d: 1.0, nd: 1.851348, elemId: 10, sd: 8.1 },
    { label: "19A", R: 16.414, d: 6.841, nd: 1.0, elemId: 0, sd: 8.1 },
    { label: "20", R: 31.209, d: 3.06, nd: 1.58144, elemId: 11, sd: 11.8 },
    { label: "21", R: 1e15, d: 15.537765, nd: 1.0, elemId: 0, sd: 11.8 },
  ],

  asph: {
    "6A": {
      K: 0,
      A4: -7.49645e-6,
      A6: -7.70344e-8,
      A8: 6.67223e-10,
      A10: -1.38051e-11,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: -1.24878e-4,
      A6: 1.87829e-7,
      A8: -1.51018e-9,
      A10: -1.96142e-11,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: 0,
      A4: -5.85209e-6,
      A6: -8.97199e-7,
      A8: 1.9112e-8,
      A10: -1.26629e-10,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: 0,
      A4: -3.28062e-5,
      A6: -6.60272e-7,
      A8: 1.86921e-8,
      A10: -1.24801e-10,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "3": [
      [1.108, 1.108],
      [6.032, 6.032],
      [13.437, 13.437],
    ],
    "9": [
      [12.384, 12.384],
      [6.481, 6.481],
      [1.6, 1.6],
    ],
    "17": [
      [5.51, 6.221363],
      [6.071, 7.397118],
      [2.887, 5.847558],
    ],
    "19A": [
      [6.841, 6.129637],
      [6.28, 4.953882],
      [9.465, 6.504442],
    ],
    "21": [
      [15.537765, 15.537765],
      [19.988771, 19.988771],
      [40.343257, 40.343257],
    ],
  },
  varLabels: [
    ["3", "D3"],
    ["9", "D9"],
    ["17", "D17"],
    ["19A", "D19"],
    ["21", "BF"],
  ],

  groups: [
    { text: "G1 +", fromSurface: "1", toSurface: "3" },
    { text: "G2 -", fromSurface: "4", toSurface: "9" },
    { text: "G3 + / OSS", fromSurface: "10", toSurface: "17" },
    { text: "G4 - / focus", fromSurface: "18A", toSurface: "19A" },
    { text: "G5 +", fromSurface: "20", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
  ],
} satisfies LensDataInput;

export default LENS_DATA;
