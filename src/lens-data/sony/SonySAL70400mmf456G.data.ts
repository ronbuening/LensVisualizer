import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║            LENS DATA — SONY 70-400mm f/4-5.6 G SSM II                  ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 8,049,968 B2, Embodiment 6 (Tamron / Yamanaka & Li).    ║
 * ║  Selected as the strongest patent candidate for the Sony SAL70400G/G2:   ║
 * ║  18 elements / 12 groups, two ED elements, six zoom groups, and G5       ║
 * ║  inner focusing. The patent does not explicitly name the Sony product,   ║
 * ║  so the production mapping remains an evidence-based identification.     ║
 * ║                                                                            ║
 * ║  Zoom variable gaps: D5, D10, D17, D20, D26, BF.                         ║
 * ║  Focus variable gaps: D20 and D26; their sum remains constant.            ║
 * ║  G2 is effectively stationary during zoom; G1/G3/G4/G5/G6 move.          ║
 * ║                                                                            ║
 * ║  NOTE ON CLOSE FOCUS:                                                      ║
 * ║    The patent tabulates a 1.6 m object-to-image-plane conjugate. The      ║
 * ║    close-focus D20/D26 values below were independently solved for the      ║
 * ║    manufacturer-specified 1.5 m MFD while preserving rigid G5 motion.      ║
 * ║    The resulting tele-end paraxial magnification is 0.2731x.              ║
 * ║                                                                            ║
 * ║  NOTE ON APERTURE:                                                         ║
 * ║    Sony publishes the marketed endpoint range f/4-5.6. The 167 mm         ║
 * ║    control point uses f/4.5 because it falls in the documented 100-200 mm ║
 * ║    production interval. Patent f-numbers remain design metadata only.      ║
 * ║                                                                            ║
 * ║  NOTE ON GLASS:                                                            ║
 * ║    The patent gives nd and vd, not supplier names. Hoya names below are    ║
 * ║    exact six-digit catalog equivalents, not proven melt identities.        ║
 * ║                                                                            ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                   ║
 * ║    The patent omits clear apertures. SD estimates start from paraxial ray  ║
 * ║    envelopes and are shaped to follow the group outlines in patent FIG. 6,║
 * ║    especially the tapered first group. Mechanical vignetting outside the  ║
 * ║    modeled clear apertures is therefore possible.                         ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "sony-sal-70-400mm-f4-5.6-g",
  maker: "Sony",
  name: "SONY 70-400mm f/4-5.6 G SSM II",
  subtitle: "US 8,049,968 B2 — Embodiment 6 (candidate production match)",
  specs: [
    "18 ELEMENTS / 12 GROUPS",
    "PATENT 72.06-388.09mm",
    "MARKETED 70-400mm f/4-5.6",
    "2 ED ELEMENTS",
    "G5 INNER FOCUS",
  ],

  focalLengthMarketing: [70, 400],
  focalLengthDesign: [72.0562, 388.0927],
  apertureMarketing: 4,
  apertureDesign: 4.11,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "US 8,049,968 B2",
  patentAuthors: ["Hisayuki Yamanaka", "Dayong Li"],
  patentAssignees: ["Tamron Co., Ltd."],
  patentYear: 2011,
  elementCount: 18,
  groupCount: 12,
  apertureBlades: 9,
  apertureBladeRoundedness: 1,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      fl: -158.37,
      glass: "TAF3 (Hoya equivalent, 804-465)",
      role: "Front-group negative achromatizing component; cemented to L12.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 158.6,
      glass: "FCD1 (Hoya equivalent, 497-816; ED fluorophosphate crown)",
      role: "First ED positive component in the front achromat.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 172.54,
      glass: "FCD1 (Hoya equivalent, 497-816; ED fluorophosphate crown)",
      role: "Air-spaced second ED positive element of G1.",
    },
    {
      id: 4,
      name: "L21",
      label: "Element L21",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.39,
      fl: -75.38,
      glass: "PCD4 (Hoya equivalent, 618-634)",
      role: "Leading negative meniscus of the variator group.",
    },
    {
      id: 5,
      name: "L22",
      label: "Element L22",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.44,
      fl: -61.38,
      glass: "FC5 (Hoya equivalent, 487-704; fluor crown)",
      role: "Low-dispersion negative component of the G2 cemented pair.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "Element L23",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 33.27,
      fl: 89.14,
      glass: "NBFD15 (Hoya equivalent, 806-333)",
      role: "High-index positive component that chromatically balances L22.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L31",
      label: "Element L31",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.39,
      fl: 84.63,
      glass: "PCD4 (Hoya equivalent, 618-634)",
      role: "Primary positive element of the third zoom group.",
    },
    {
      id: 8,
      name: "L32",
      label: "Element L32",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.72,
      fl: -41.57,
      glass: "TAFD5F (Hoya equivalent, 835-427)",
      role: "Strong negative corrector within G3.",
    },
    {
      id: 9,
      name: "L33",
      label: "Element L33",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 59.27,
      glass: "FDS90 (Hoya equivalent, 847-238)",
      role: "High-index, high-dispersion positive element immediately before the stop.",
    },
    {
      id: 10,
      name: "L41",
      label: "Element L41",
      type: "Near-Plano Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      fl: -46.43,
      glass: "FDS90 (Hoya equivalent, 847-238)",
      role: "Negative component of the auxiliary spherical-aberration-control doublet.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L42",
      label: "Element L42",
      type: "Biconvex Positive",
      nd: 1.59551,
      vd: 39.22,
      fl: 40.24,
      glass: "Ref.E-F8 (Hoya reference equivalent, 596-392)",
      role: "Positive component of the G4 cemented doublet.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L51",
      label: "Element L51",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -77.06,
      glass: "FDS90 (Hoya equivalent, 847-238)",
      role: "Front negative component of the focusing triplet.",
      cemented: "T1",
    },
    {
      id: 13,
      name: "L52",
      label: "Element L52",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.39,
      fl: 33.21,
      glass: "PCD4 (Hoya equivalent, 618-634)",
      role: "Positive core of the negative-positive-negative focusing triplet.",
      cemented: "T1",
    },
    {
      id: 14,
      name: "L53",
      label: "Element L53",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.27,
      fl: -54.37,
      glass: "NBFD15 (Hoya equivalent, 806-333)",
      role: "Rear negative component of the focusing triplet.",
      cemented: "T1",
    },
    {
      id: 15,
      name: "L54",
      label: "Element L54",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 69.55,
      glass: "FDS90 (Hoya equivalent, 847-238)",
      role: "Air-spaced positive element completing the net-positive G5 focus group.",
    },
    {
      id: 16,
      name: "L61",
      label: "Element L61",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.39,
      fl: -93.31,
      glass: "PCD4 (Hoya equivalent, 618-634)",
      role: "Leading negative singlet of the rear zoom group.",
    },
    {
      id: 17,
      name: "L62",
      label: "Element L62",
      type: "Positive Meniscus",
      nd: 1.74077,
      vd: 27.76,
      fl: 65.76,
      glass: "E-FD13 (Hoya equivalent, 741-278)",
      role: "Positive, high-dispersion component of the rear cemented pair.",
      cemented: "D4",
    },
    {
      id: 18,
      name: "L63",
      label: "Element L63",
      type: "Biconcave Negative",
      nd: 1.8042,
      vd: 46.5,
      fl: -51.49,
      glass: "TAF3 (Hoya equivalent, 804-465)",
      role: "Final negative element and rear component of the G6 cemented pair.",
      cemented: "D4",
    },
  ],

  surfaces: [
    { label: "1", R: 322.4599, d: 2.3, nd: 1.8042, elemId: 1, sd: 36.4 },
    { label: "2", R: 91.0103, d: 9.2192, nd: 1.497, elemId: 2, sd: 35.0 },
    { label: "3", R: -569.0188, d: 0.3, nd: 1.0, elemId: 0, sd: 34.0 },
    { label: "4", R: 93.4615, d: 8.6041, nd: 1.497, elemId: 3, sd: 32.5 },
    { label: "5", R: -1008.031, d: 2.5, nd: 1.0, elemId: 0, sd: 31.5 },

    { label: "6", R: 198.4362, d: 1.7, nd: 1.618, elemId: 4, sd: 18.5 },
    { label: "7", R: 37.6062, d: 8.4309, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "8", R: -70.0748, d: 1.3, nd: 1.48749, elemId: 5, sd: 17.5 },
    { label: "9", R: 52.5435, d: 3.2219, nd: 1.8061, elemId: 6, sd: 17.0 },
    { label: "10", R: 190.1372, d: 46.1612, nd: 1.0, elemId: 0, sd: 16.5 },

    { label: "11", R: 73.6767, d: 3.8864, nd: 1.618, elemId: 7, sd: 14.8 },
    { label: "12", R: -176.6382, d: 2.1013, nd: 1.0, elemId: 0, sd: 14.2 },
    { label: "13", R: -42.3439, d: 1.7886, nd: 1.83481, elemId: 8, sd: 14.2 },
    { label: "14", R: 196.0411, d: 0.2, nd: 1.0, elemId: 0, sd: 14.8 },
    { label: "15", R: 69.6402, d: 4.5, nd: 1.84666, elemId: 9, sd: 15.0 },
    { label: "16", R: -174.3032, d: 2.0, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "STO", R: 1e15, d: 17.1294, nd: 1.0, elemId: 0, sd: 14.6 },

    { label: "18", R: -5925.0049, d: 1.3, nd: 1.84666, elemId: 10, sd: 16.0 },
    { label: "19", R: 39.5747, d: 7.5004, nd: 1.59551, elemId: 11, sd: 16.5 },
    { label: "20", R: -56.4431, d: 2.8519, nd: 1.0, elemId: 0, sd: 16.5 },

    { label: "21", R: 174.5724, d: 1.3, nd: 1.84666, elemId: 12, sd: 15.0 },
    { label: "22", R: 47.3325, d: 8.8734, nd: 1.618, elemId: 13, sd: 15.6 },
    { label: "23", R: -33.6393, d: 1.3, nd: 1.8061, elemId: 14, sd: 15.6 },
    { label: "24", R: -147.2232, d: 0.2, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "25", R: 81.281, d: 4.0, nd: 1.84666, elemId: 15, sd: 15.6 },
    { label: "26", R: -208.9178, d: 21.9339, nd: 1.0, elemId: 0, sd: 15.6 },

    { label: "27", R: 145.4029, d: 1.2, nd: 1.618, elemId: 16, sd: 12.8 },
    { label: "28", R: 41.1585, d: 2.8866, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "29", R: -934.5306, d: 4.041, nd: 1.74077, elemId: 17, sd: 13.0 },
    { label: "30", R: -46.3879, d: 1.2, nd: 1.8042, elemId: 18, sd: 12.8 },
    { label: "31", R: 390.3333, d: 66.1963, nd: 1.0, elemId: 0, sd: 12.8 },
  ],

  asph: {},

  zoomPositions: [72.0562, 167.0619, 388.0927],
  zoomStep: 0.002,
  zoomLabels: ["70 mm", "400 mm"],
  // The 167 mm control point falls within the measured 100-200 mm f/4.5 production interval.
  nominalFno: [4, 4.5, 5.6],

  var: {
    "5": [
      [2.5, 2.5],
      [47.2958, 47.2958],
      [92.4906, 92.4906],
    ],
    "10": [
      [46.1612, 46.1612],
      [18.4655, 18.4655],
      [2.0, 2.0],
    ],
    STO: [
      [17.1294, 17.1294],
      [10.943, 10.943],
      [6.3591, 6.3591],
    ],
    "20": [
      [2.8519, 1.910297696],
      [11.5811, 8.228166259],
      [13.0322, 1.230425393],
    ],
    "26": [
      [21.9339, 22.875502304],
      [18.2572, 21.610133741],
      [2.5, 14.301774607],
    ],
    "31": [
      [66.1963, 66.1963],
      [94.9192, 94.9192],
      [130.4291, 130.4291],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["10", "D10"],
    ["STO", "D17"],
    ["20", "D20"],
    ["26", "D26"],
    ["31", "BF"],
  ],

  focusDescription:
    "Inner focus by the net-positive fifth zoom group G5. At 1.5 m, G5 shifts objectward while D20 decreases and D26 increases by the same amount; back focus remains fixed.",

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-)", fromSurface: "6", toSurface: "10" },
    { text: "G3 (+) / STOP", fromSurface: "11", toSurface: "STO" },
    { text: "G4 (+)", fromSurface: "18", toSurface: "20" },
    { text: "G5 (+) / FOCUS", fromSurface: "21", toSurface: "26" },
    { text: "G6 (-)", fromSurface: "27", toSurface: "31" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "T1", fromSurface: "21", toSurface: "24" },
    { text: "D4", fromSurface: "29", toSurface: "31" },
  ],

  closeFocusM: 1.5,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  scFill: 0.72,
  yScFill: 0.74,
} satisfies LensDataInput;

export default LENS_DATA;
