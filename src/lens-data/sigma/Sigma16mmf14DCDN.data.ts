import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — Sigma 16mm F1.4 DC DN | Contemporary            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2018-205527 A, Numerical Example 1 (Sigma).       ║
 * ║  Large-aperture APS-C wide-angle mirrorless prime.                 ║
 * ║  16 elements / 13 groups, 2 aspherical surfaces.                   ║
 * ║  Focus: single positive G3 element translates object-ward.          ║
 * ║                                                                    ║
 * ║  NOTE ON SCALE:                                                     ║
 * ║    No focal-length normalization has been applied. The patent       ║
 * ║    prescription computes to f = 16.446 mm and also extrapolates     ║
 * ║    to Sigma's published 0.25 m / 1:9.9 close-focus specification.   ║
 * ║    The production 16 mm value is treated as the marketed nominal    ║
 * ║    focal length.                                                    ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                               ║
 * ║    Patent surfaces 31-32 are a 2.0000 mm plane-parallel plate       ║
 * ║    (nd = 1.51680) plus BF = 1.0000 mm. The plate is excluded from   ║
 * ║    the surfaces array and folded into surface 30's air-equivalent   ║
 * ║    final gap: 15.5341 + 2.0000 / 1.51680 + 1.0000 =                ║
 * ║    17.8527 mm.                                             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent omits clear-aperture data. Semi-diameters are         ║
 * ║    paraxial estimates constrained by f/1.46 axial rays, 0.35-field  ║
 * ║    displayed off-axis rays, edge thickness, sd/|R| < 0.90, and      ║
 * ║    cross-gap sag intrusion <= 90% of the air gap.                  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "sigma-16mm-f14-dc-dn",
  maker: "Sigma",
  name: "SIGMA 16mm f/1.4 DC DN | Contemporary",
  subtitle: "JP 2018-205527 A Example 1 — Sigma / Ochiai & Sato",
  specs: [
    "16 elements / 13 groups",
    "f = 16.446 mm design; 16 mm marketed",
    "F/1.46 design; F1.4 marketed",
    "2ω = 84.21° at Y = 14.20 mm",
    "3 FLD / 2 SLD / 2 molded aspherical elements",
  ],

  focalLengthMarketing: 16,
  focalLengthDesign: 16.446,
  apertureMarketing: 1.4,
  apertureDesign: 1.46,
  lensMounts: ["l-mount", "canon-ef-m", "canon-rf", "fujifilm-x", "micro-four-thirds", "nikon-z", "sony-fe"],
  imageFormat: "aps-c",
  patentNumber: "JP 2018-205527 A",
  patentAuthors: ["Hiromichi Ochiai", "Ryosuke Sato"],
  patentAssignees: ["SIGMA CORP"],
  patentYear: 2018,
  elementCount: 16,
  groupCount: 13,
  apertureBlades: 9,
  apertureBladeRoundedness: 0.8,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: 349.76,
      glass: "BSC7 / N-BK7-class borosilicate crown (517/642)",
      role: "Weak positive front meniscus in the negative G1A collector.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.13,
      fl: -32.6,
      glass: "TAFD55-class high-index glass (001/291)",
      role: "High-index diverging meniscus in the front collector.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58913,
      vd: 61.25,
      fl: -69.66,
      glass: "M-BACD5N-class molded barium crown (589/613)",
      role: "Front-group negative meniscus with image-side molded asphere.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element L14",
      type: "Biconcave Negative",
      nd: 1.437,
      vd: 95.1,
      fl: -59.08,
      glass: "FCD100-class FLD fluorite-equivalent glass (437/951)",
      cemented: "D1",
      apd: "inferred",
      apdNote: "Sigma-published FLD element; patent gives nd/vd but not line-index data.",
      role: "Negative FLD member of the rear G1A cemented color-correction doublet.",
    },
    {
      id: 5,
      name: "L15",
      label: "Element L15",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      fl: 54.54,
      glass: "TAFD55-class high-index glass (001/291)",
      cemented: "D1",
      role: "High-index positive partner in the rear G1A cemented doublet.",
    },
    {
      id: 6,
      name: "L16",
      label: "Element L16",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      fl: 55.79,
      glass: "TAFD35-class high-index lanthanum glass (911/353)",
      role: "High-index positive member of G1Bp.",
    },
    {
      id: 7,
      name: "L17",
      label: "Element L17",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      fl: 53.78,
      glass: "FCD100-class FLD fluorite-equivalent glass (437/951)",
      apd: "inferred",
      apdNote: "Sigma-published FLD element; patent gives nd/vd but not line-index data.",
      role: "Low-dispersion positive member of G1Bp ahead of the stop.",
    },
    {
      id: 8,
      name: "L18",
      label: "Element L18",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.15,
      fl: -47.14,
      glass: "E-CF6 (HOYA)",
      role: "First negative member of G1Bm.",
    },
    {
      id: 9,
      name: "L19",
      label: "Element L19",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.17,
      fl: -63.56,
      glass: "E-FD5 (HOYA)",
      role: "Rear negative meniscus of G1Bm.",
    },
    {
      id: 10,
      name: "L21",
      label: "Element L21",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      fl: 27.45,
      glass: "FCD505 (HOYA, SLD low-dispersion crown)",
      cemented: "D2",
      apd: "inferred",
      apdNote: "Sigma-published SLD element; patent gives nd/vd but not line-index data.",
      role: "Principal positive member of the G2 cemented doublet.",
    },
    {
      id: 11,
      name: "L22",
      label: "Element L22",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.33,
      fl: -65.59,
      glass: "S-LAM7 (OHARA)",
      cemented: "D2",
      role: "Achromatizing negative member of the G2 cemented doublet.",
    },
    {
      id: 12,
      name: "L23",
      label: "Element L23",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.6935,
      vd: 53.2,
      fl: 45.38,
      glass: "M-LAC130-class molded lanthanum crown (694/532)",
      role: "Rear positive G2 element carrying the second image-side asphere.",
    },
    {
      id: 13,
      name: "L31",
      label: "Element L31",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.63,
      fl: 85.41,
      glass: "FCD505 (HOYA, SLD low-dispersion crown)",
      apd: "inferred",
      apdNote: "Sigma-published SLD element; patent gives nd/vd but not line-index data.",
      role: "Single-element positive inner-focus group.",
    },
    {
      id: 14,
      name: "L41",
      label: "Element L41",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      fl: -45.9,
      glass: "SF6 / S-TIH6-class dense flint (805/255)",
      role: "Front negative member of G4.",
    },
    {
      id: 15,
      name: "L42",
      label: "Element L42",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      fl: 38.35,
      glass: "FCD100-class FLD fluorite-equivalent glass (437/951)",
      cemented: "D3",
      apd: "inferred",
      apdNote: "Sigma-published FLD element; patent gives nd/vd but not line-index data.",
      role: "FLD positive member of the rear G4 cemented doublet.",
    },
    {
      id: 16,
      name: "L43",
      label: "Element L43",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.32,
      fl: -56.66,
      glass: "S-LAH95 (OHARA)",
      cemented: "D3",
      role: "High-index negative rear member of the G4 cemented doublet.",
    },
  ],

  surfaces: [
    { label: "1", R: 125.246, d: 2.9671, nd: 1.5168, elemId: 1, sd: 17 },
    { label: "2", R: 404.5429, d: 0.5, nd: 1, elemId: 0, sd: 16.6 },
    { label: "3", R: 34.369, d: 1.4, nd: 2.001, elemId: 2, sd: 14.6 },
    { label: "4", R: 16.3986, d: 5.0945, nd: 1, elemId: 0, sd: 14.4 },
    { label: "5", R: 26, d: 1.5, nd: 1.58913, elemId: 3, sd: 13.8 },
    { label: "6A", R: 15.576, d: 10.6088, nd: 1, elemId: 0, sd: 13.45 },
    { label: "7", R: -30.5, d: 1.0319, nd: 1.437, elemId: 4, sd: 14.8 },
    { label: "8", R: 170.0033, d: 2.9642, nd: 2.001, elemId: 5, sd: 14.8 },
    { label: "9", R: -79.7237, d: 7.2064, nd: 1, elemId: 0, sd: 14.8 },
    { label: "10", R: 60.8883, d: 3.0231, nd: 1.91082, elemId: 6, sd: 15.2 },
    { label: "11", R: -300, d: 0.8578, nd: 1, elemId: 0, sd: 15.2 },
    { label: "12", R: 85, d: 5.6577, nd: 1.437, elemId: 7, sd: 14.8 },
    { label: "13", R: -31.8218, d: 1.0735, nd: 1, elemId: 0, sd: 14.8 },
    { label: "14", R: -60.7984, d: 0.9, nd: 1.51742, elemId: 8, sd: 13.4 },
    { label: "15", R: 40.9323, d: 5.7178, nd: 1, elemId: 0, sd: 12.2 },
    { label: "16", R: -20.3273, d: 0.9, nd: 1.6727, elemId: 9, sd: 11.42 },
    { label: "17", R: -39.4374, d: 1.4174, nd: 1, elemId: 0, sd: 12.2 },
    { label: "STO", R: 1e15, d: 0.9946, nd: 1, elemId: 0, sd: 11.76291 },
    { label: "19", R: 68.6066, d: 10.3, nd: 1.59282, elemId: 10, sd: 15 },
    { label: "20", R: -20.14, d: 0.9, nd: 1.7495, elemId: 11, sd: 15 },
    { label: "21", R: -34.7714, d: 0.15, nd: 1, elemId: 0, sd: 15 },
    { label: "22", R: 55.4013, d: 5.5346, nd: 1.6935, elemId: 12, sd: 15.2 },
    { label: "23A", R: -69.8881, d: 3.3044, nd: 1, elemId: 0, sd: 15.2 },
    { label: "24", R: 25, d: 2.7637, nd: 1.59282, elemId: 13, sd: 14 },
    { label: "25", R: 47.3486, d: 2.0917, nd: 1, elemId: 0, sd: 14 },
    { label: "26", R: 35.4444, d: 0.9, nd: 1.80518, elemId: 14, sd: 11.2 },
    { label: "27", R: 17.8877, d: 3.7091, nd: 1, elemId: 0, sd: 10.45 },
    { label: "28", R: 660, d: 6.0973, nd: 1.437, elemId: 15, sd: 10.45 },
    { label: "29", R: -17.1474, d: 0.9, nd: 1.90366, elemId: 16, sd: 10.8 },
    { label: "30", R: -26.4237, d: 17.8526654008, nd: 1, elemId: 0, sd: 11 },
  ],

  asph: {
    "6A": {
      K: -1.28713,
      A4: 3.03098e-5,
      A6: -1.10729e-7,
      A8: 1.95111e-9,
      A10: -1.86588e-11,
      A12: 9.78438e-14,
      A14: -2.62044e-16,
      A16: 2.69032e-19,
    },
    "23A": {
      K: 0,
      A4: 1.05989e-5,
      A6: -8.95266e-9,
      A8: 8.67772e-12,
      A10: 3.4706e-14,
      A12: -1.6182e-16,
      A14: 0,
      A16: 0,
    },
  },

  var: {
    "23A": [3.3044, 1.6090594577],
    "25": [2.0917, 3.7870405423],
  },

  varLabels: [
    ["23A", "G2-G3"],
    ["25", "G3-G4"],
  ],

  groups: [
    { text: "G1A", fromSurface: "1", toSurface: "9" },
    { text: "G1Bp", fromSurface: "10", toSurface: "13" },
    { text: "G1Bm", fromSurface: "14", toSurface: "17" },
    { text: "G2", fromSurface: "19", toSurface: "23A" },
    { text: "G3 IF", fromSurface: "24", toSurface: "25" },
    { text: "G4", fromSurface: "26", toSurface: "30" },
  ],

  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "19", toSurface: "21" },
    { text: "D3", fromSurface: "28", toSurface: "30" },
  ],

  closeFocusM: 0.25,
  focusDescription:
    "Single-element inner focus: G3 / L31 moves toward the object. The close endpoint extrapolates the patent kinematics to Sigma's published 0.25 m / 1:9.9 specification; the patent's own tabulated near state is beta = -1/40.",

  nominalFno: 1.4,
  fstopSeries: [1.4, 1.8, 2, 2.8, 4, 5.6, 8, 11, 16],

  offAxisFieldFrac: 0.35,
  scFill: 0.68,
  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
