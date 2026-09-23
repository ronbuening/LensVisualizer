import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — LEICA SUPER-VARIO-ELMAR-SL 16-35mm f/3.5-4.5 ASPH.           ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2018-087903 A, Example 1 (Konica Minolta).                     ║
 * ║ Correlation to the Leica production lens is strong but not manufacturer-   ║
 * ║ confirmed; Leica's published single-element AF description conflicts with   ║
 * ║ the patent's cemented two-element Gr2a focusing group.                     ║
 * ║                                                                              ║
 * ║ 18 elements / 12 air-separated groups; 4 aspherical surfaces on 2 elements.║
 * ║ Optical zoom groups: negative-positive-positive-negative.                   ║
 * ║ Focus status: PUBLISHED. The modeled close state is the patent's nominal    ║
 * ║ 0.35 m state only; no 0.25 m production-MFD reconstruction is invented.    ║
 * ║                                                                              ║
 * ║ Zoom/focus variable gaps:                                                    ║
 * ║   D9  — zoom + Gr2a focus                                                    ║
 * ║   D12 — Gr2a focus                                                           ║
 * ║   D18, D26, D31 — zoom only                                                  ║
 * ║ G1 reverses between W and T; the published M state brackets the reversal.   ║
 * ║ G2 and G4 have linked W→T displacement in the selected embodiment.          ║
 * ║                                                                              ║
 * ║ Rear-plate normalization: source PT surfaces 32/33 are omitted under the    ║
 * ║ project sensor-cover/filter rule. D31 includes the air-equivalent           ║
 * ║ contribution 1.400/1.51680 + 0.500 = 1.4229957805907 mm.                      ║
 * ║ No uniform prescription scaling is applied (s = 1).                         ║
 * ║                                                                              ║
 * ║ Aperture stop: the patent publishes the stop plane but no diameter. STO.sd  ║
 * ║ is the wide-end f/3.55 calibration (8.057096 mm semi-diameter). The         ║
 * ║ nominalFno array calibrates the state-dependent wide-open pupil model; this  ║
 * ║ is not independent evidence of the manufactured iris diameter.              ║
 * ║                                                                              ║
 * ║ NOTE ON SEMI-DIAMETERS: not patent-published. Middle groups (L6-L15) keep  ║
 * ║ the original exact-ray-envelope values (within ~15% of Fig. 1). Gr1 (S1-S9)║
 * ║ and Gr4 (S27-S31) were re-sized 2026-09-23 from JP Fig. 1 (W), measured at  ║
 * ║ 300 dpi, 0.190 mm/px (S1-S31 vertex span 681 px = 129.539 mm): L1 26.6/17.9║
 * ║ (flat rear annulus), L2 19.8/16.0, D1 16.5/16.0/13.6, L5 15.0/15.0, D6     ║
 * ║ 11.8/11.5/11.5, L18 10.9/12.8. S2, S4A and S30 sit a little below the      ║
 * ║ drawn rims, capped by the 90% cross-gap sag-intrusion limit. S31 was also  ║
 * ║ below the tele chief-ray height (9.62 mm) before the change.               ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "leica-super-vario-elmar-sl-16-35mm-f35-45-asph",
  maker: "Leica",
  name: "LEICA SUPER-VARIO-ELMAR-SL 16-35mm f/3.5-4.5 ASPH.",
  subtitle: "JP 2018-087903 A Example 1 — strong production correlation, not manufacturer-confirmed",
  specs: [
    "18 ELEMENTS / 12 GROUPS",
    "16-35mm marketed; 16.399-34.194mm computed design EFL",
    "f/3.5-4.5 marketed; f/3.55-4.60 modeled",
    "4 ASPHERICAL SURFACES / 2 ELEMENTS",
    "0.35 m PUBLISHED MODEL FOCUS ENDPOINT; 0.25 m MARKETED MFD",
  ],

  focalLengthMarketing: [16, 35],
  focalLengthDesign: [16.398554, 34.194222],
  apertureMarketing: 3.5,
  apertureDesign: 3.55,
  lensMounts: ["l-mount"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2018-087903 A",
  patentAuthors: ["Yoshito Soma"],
  patentAssignees: ["Konica Minolta, Inc."],
  patentYear: 2018,
  elementCount: 18,
  groupCount: 12,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      indexReference: "d",
      fl: -46.352102,
      glass: "835427 — TAFD5G-coordinate class (supplier unproven)",
      role: "Front negative element of Gr1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.39,
      indexReference: "d",
      fl: -39.698505,
      glass: "L-BAL42 (OHARA catalog equivalent; exact 1.58313/59.39 coordinate; production supplier unspecified)",
      role: "Double-sided aspherical negative element of Gr1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.84,
      indexReference: "d",
      fl: 45.089668,
      glass: "648338 — high-dispersion flint class (supplier unproven)",
      cemented: "D1",
      role: "Positive member of Gr1 cemented pair D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.67,
      indexReference: "d",
      fl: -23.411293,
      glass: "729547 — lanthanum-crown class (supplier unproven)",
      cemented: "D1",
      role: "Negative member of Gr1 cemented pair D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.74077,
      vd: 27.76,
      indexReference: "d",
      fl: 48.74463,
      glass: "741278 — high-dispersion flint class (supplier unproven)",
      role: "Rear positive meniscus of Gr1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.44,
      indexReference: "d",
      fl: 54.922455,
      glass: "487704 — low-dispersion crown class (supplier unproven)",
      cemented: "D2",
      role: "Positive member of the published Gr2a focus group",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      indexReference: "d",
      fl: -108.681447,
      glass: "773496 — TAF1 historical-coordinate class (supplier unproven)",
      cemented: "D2",
      role: "Negative member of the published Gr2a focus group",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      indexReference: "d",
      fl: 39.046699,
      glass: "487704 — low-dispersion crown class (supplier unproven)",
      role: "Front positive element of Gr2b behind the stop",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.76182,
      vd: 26.61,
      indexReference: "d",
      fl: 65.664972,
      glass: "762266 — high-dispersion flint class (supplier unproven)",
      cemented: "D3",
      role: "Positive member of Gr2b cemented pair D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      indexReference: "d",
      fl: -21.78556,
      glass: "911353 — TAFD35/TAFD35L-coordinate class (supplier unproven)",
      cemented: "D3",
      role: "Negative member of Gr2b cemented pair D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.39,
      indexReference: "d",
      fl: 28.559184,
      glass: "L-BAL42 (OHARA catalog equivalent; exact 1.58313/59.39 coordinate; production supplier unspecified)",
      role: "Double-sided aspherical front positive element of Gr3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      indexReference: "d",
      fl: 21.566812,
      glass: "487704 — low-dispersion crown class (supplier unproven)",
      cemented: "D4",
      role: "Positive member of Gr3 cemented pair D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      indexReference: "d",
      fl: -60.169521,
      glass: "911353 — TAFD35/TAFD35L-coordinate class (supplier unproven)",
      cemented: "D4",
      role: "Negative member of Gr3 cemented pair D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.25,
      indexReference: "d",
      fl: -13.560009,
      glass: "911353 — TAFD35/TAFD35L-coordinate class (supplier unproven)",
      cemented: "D5",
      role: "Negative member of Gr3 cemented pair D5",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      fl: 24.86216,
      glass: "517642 — BK7-class crown (supplier unproven)",
      cemented: "D5",
      role: "Positive member of Gr3 cemented pair D5",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.88,
      indexReference: "d",
      fl: 15.29294,
      glass: "923209 — high-index flint class (supplier unproven)",
      apd: "patent",
      apdNote: "ΔPgF = +0.028 (JP 2018-087903 A Table 1)",
      dPgF: 0.028,
      cemented: "D6",
      role: "Positive member of Gr4 cemented pair D6; patent condition-(6) glass",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      indexReference: "d",
      fl: -21.901881,
      glass: "911353 — TAFD35/TAFD35L-coordinate class (supplier unproven)",
      cemented: "D6",
      role: "Negative member of Gr4 cemented pair D6",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Plano-Concave Negative",
      nd: 1.91082,
      vd: 35.25,
      indexReference: "d",
      fl: -22.44461,
      glass: "911353 — TAFD35/TAFD35L-coordinate class (supplier unproven)",
      role: "Rear negative element of Gr4",
    },
  ],

  surfaces: [
    { label: "1", R: 50.203, d: 3.0, nd: 1.83481, elemId: 1, sd: 26.6 },
    { label: "2", R: 21.258, d: 8.955, nd: 1.0, elemId: 0, sd: 17.9 },
    { label: "3A", R: 102.763, d: 2.5, nd: 1.58313, elemId: 2, sd: 19.8 },
    { label: "4A", R: 18.724, d: 6.128, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "5", R: 93.02, d: 5.786, nd: 1.64769, elemId: 3, sd: 16.5 },
    { label: "6", R: -41.528, d: 2.0, nd: 1.72916, elemId: 4, sd: 16.0 },
    { label: "7", R: 29.574, d: 2.577, nd: 1.0, elemId: 0, sd: 13.6 },
    { label: "8", R: 32.375, d: 4.084, nd: 1.74077, elemId: 5, sd: 15.0 },
    { label: "9", R: 296.302, d: 24.477, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "10", R: -530.796, d: 2.766, nd: 1.48749, elemId: 6, sd: 10.7 },
    { label: "11", R: -25.532, d: 1.0, nd: 1.7725, elemId: 7, sd: 10.8 },
    { label: "12", R: -37.316, d: 8.055, nd: 1.0, elemId: 0, sd: 10.9 },
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 8.057096 },
    { label: "14", R: 25.829, d: 6.719, nd: 1.48749, elemId: 8, sd: 11.7 },
    { label: "15", R: -66.195, d: 5.9, nd: 1.0, elemId: 0, sd: 11.6 },
    { label: "16", R: -29.265, d: 2.417, nd: 1.76182, elemId: 9, sd: 11.1 },
    { label: "17", R: -19.123, d: 1.013, nd: 1.91082, elemId: 10, sd: 11.3 },
    { label: "18", R: -540.532, d: 4.056, nd: 1.0, elemId: 0, sd: 11.9 },
    { label: "19A", R: 42.882, d: 6.247, nd: 1.58313, elemId: 11, sd: 12.5 },
    { label: "20A", R: -25.767, d: 0.15, nd: 1.0, elemId: 0, sd: 12.7 },
    { label: "21", R: 40.485, d: 9.026, nd: 1.48749, elemId: 12, sd: 11.6 },
    { label: "22", R: -13.164, d: 1.035, nd: 1.91082, elemId: 13, sd: 11.6 },
    { label: "23", R: -17.975, d: 0.15, nd: 1.0, elemId: 0, sd: 12.3 },
    { label: "24", R: -42.442, d: 1.007, nd: 1.91082, elemId: 14, sd: 10.7 },
    { label: "25", R: 17.617, d: 6.06, nd: 1.5168, elemId: 15, sd: 10.1 },
    { label: "26", R: -41.908, d: 0.5, nd: 1.0, elemId: 0, sd: 10.1 },
    { label: "27", R: -171.418, d: 6.994, nd: 1.92286, elemId: 16, sd: 11.8 },
    { label: "28", R: -13.295, d: 1.5, nd: 1.91082, elemId: 17, sd: 11.5 },
    { label: "29", R: -42.004, d: 1.937, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "30", R: -20.443, d: 1.5, nd: 1.91082, elemId: 18, sd: 10.9 },
    { label: "31", R: 1e15, d: 17.922995780590718, nd: 1.0, elemId: 0, sd: 12.8 },
  ],

  asph: {
    "3A": {
      K: 0,
      A4: 9.35436e-6,
      A6: -2.36867e-8,
      A8: -3.81596e-11,
      A10: 1.25911e-13,
      A12: 0,
      A14: 0,
    },
    "4A": {
      K: 0,
      A4: -1.01736e-5,
      A6: -2.73739e-8,
      A8: -3.93424e-10,
      A10: 5.42735e-13,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: 0,
      A4: -4.72963e-6,
      A6: -2.06187e-8,
      A8: 8.70833e-10,
      A10: -7.66952e-12,
      A12: 0,
      A14: 0,
    },
    "20A": {
      K: 0,
      A4: 2.08902e-5,
      A6: -2.67501e-8,
      A8: 1.02156e-9,
      A10: -8.04252e-12,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "9": [
      [24.477, 26.783],
      [12.027, 14.553],
      [4.313, 7.123],
    ],
    "12": [
      [8.055, 5.75],
      [8.055, 5.53],
      [8.055, 5.246],
    ],
    "18": [
      [4.056, 4.056],
      [2.141, 2.141],
      [0.5, 0.5],
    ],
    "26": [
      [0.5, 0.5],
      [2.415, 2.415],
      [4.056, 4.056],
    ],
    "31": [
      [17.922995780590718, 17.922995780590718],
      [24.646995780590718, 24.646995780590718],
      [34.80899578059072, 34.80899578059072],
    ],
  },
  varLabels: [
    ["9", "D9 / Gr2a front"],
    ["12", "D12 / Gr2a rear"],
    ["18", "D18 / G2-G3"],
    ["26", "D26 / G3-G4"],
    ["31", "BF / normalized rear gap"],
  ],

  zoomPositions: [16.4, 23.7, 34.2],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "Gr1", fromSurface: "1", toSurface: "9" },
    { text: "Gr2", fromSurface: "10", toSurface: "18" },
    { text: "Gr3", fromSurface: "19A", toSurface: "26" },
    { text: "Gr4", fromSurface: "27", toSurface: "31" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "21", toSurface: "23" },
    { text: "D5", fromSurface: "24", toSurface: "26" },
    { text: "D6", fromSurface: "27", toSurface: "29" },
  ],

  closeFocusM: 0.35,
  focusDescription:
    "PUBLISHED: Gr2a (cemented L6+L7, surfaces 10-12) translates imageward to the patent's nominal 0.35 m state. The marketed 0.25 m MFD is metadata only; no internal 0.25 m reconstruction is authored.",

  nominalFno: [3.55, 4.1, 4.6],
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
