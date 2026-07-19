import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — Nikon AI Zoom-Nikkor 35-200mm f/3.5-4.5S          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,770,511, Example 2 / Table 2 (Nippon Kogaku).   ║
 * ║  Positive-lead four-group zoom: G1(+), G2(-), G3(+), G4(+).        ║
 * ║  17 glass elements / 13 air-separated groups; all spherical.       ║
 * ║                                                                    ║
 * ║  Zoom variables: d5, d13, d19 plus the back focal distance d30.    ║
 * ║  The first zoom endpoint reproduces the patent wide-angle state;   ║
 * ║  the second reproduces the patent telephoto state. The close-focus  ║
 * ║  endpoint at the telephoto position is the patent macro state at   ║
 * ║  β = -0.25, with G2 and G3 moved toward the object side and G1     ║
 * ║  moved toward the image side. Normal production front-group focus  ║
 * ║  is not separately parameterized here because the patent publishes  ║
 * ║  the macro state numerically, not a full normal-focus spacing map. ║
 * ║                                                                    ║
 * ║  Stop placement: the patent table does not assign a stop surface.  ║
 * ║  Figure 3 and Nikon's cross-section place the aperture within G3.  ║
 * ║  This data file inserts a flat stop in the narrow L7-L8 air gap,   ║
 * ║  splitting patent d15 = 0.10 mm into 0.05 + STO + 0.05 mm.         ║
 * ║                                                                    ║
 * ║  Semi-diameters are conservative inferred clear apertures. They    ║
 * ║  were checked by paraxial marginal/chief-ray traces and by rim,    ║
 * ║  edge-thickness, element-ratio, and cross-gap sag constraints.     ║
 * ║  No scaling was applied to the patent prescription.                ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-ai-zoom-nikkor-35-200mm-f3-5-4-5s",
  maker: "Nikon",
  name: "Nikon AI Zoom-Nikkor 35-200mm f/3.5-4.5S",
  subtitle: "US 4,770,511 Example 2 — Nippon Kogaku / Yonezawa, Aono & Takahashi",
  specs: [
    "17 elements / 13 groups",
    "f = 36.23-194.85 mm computed",
    "F/3.5-4.5 nominal",
    "135 full-frame coverage",
    "All-spherical prescription",
  ],

  focalLengthMarketing: [35, 200],
  focalLengthDesign: [36.23, 194.85],
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,770,511",
  patentAuthors: ["Yasuo Yonezawa", "Yasuhiro Aono", "Tomowaki Takahashi"],
  patentAssignees: ["Nippon Kogaku KK"],
  patentYear: 1988,
  elementCount: 17,
  groupCount: 13,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.36,
      fl: -134.6,
      glass: "SF6 / S-TIH6 class (dense flint, 805/254)",
      cemented: "D1",
      role: "Negative flint half of the front achromat.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.28,
      fl: 89.3,
      glass: "FK / J-FKH1 class (fluorophosphate crown, 498/823)",
      cemented: "D1",
      role: "Low-dispersion positive crown half of the front achromat.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.67003,
      vd: 47.05,
      fl: 109.7,
      glass: "BAF10-class barium flint (670/471, near-match)",
      role: "Air-spaced positive power in the front focusing group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.90265,
      vd: 35.76,
      fl: -32.0,
      glass: "J-LASFH9A class (Hikari, 903/358)",
      role: "Leading high-index negative variator element.",
    },
    {
      id: 5,
      name: "L5a",
      label: "Element 5a",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.36,
      fl: 33.7,
      glass: "SF6 / S-TIH6 class (dense flint, 805/254)",
      cemented: "D2",
      role: "Positive half of a nearly afocal G2 chromatic corrector.",
    },
    {
      id: 6,
      name: "L5b",
      label: "Element 5b",
      type: "Negative Meniscus",
      nd: 1.80411,
      vd: 46.43,
      fl: -31.5,
      glass: "LAH65V-class lanthanum flint (804/464, near-match)",
      cemented: "D2",
      role: "Negative half of the nearly afocal G2 chromatic corrector.",
    },
    {
      id: 7,
      name: "L6a",
      label: "Element 6a",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.97,
      fl: -19.4,
      glass: "J-LAK8 / LAK8 class (713/540)",
      cemented: "D3",
      role: "Main negative power contributor in the variator group.",
    },
    {
      id: 8,
      name: "L6b",
      label: "Element 6b",
      type: "Positive Meniscus",
      nd: 1.86074,
      vd: 23.0,
      fl: 38.1,
      glass: "J-SFH2 class (very dense flint, 861/230)",
      cemented: "D3",
      role: "High-dispersion positive partner in the strong negative variator doublet.",
    },
    {
      id: 9,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.12,
      fl: 82.9,
      glass: "BK7 / J-BK7A / S-BSL7 class (517/641)",
      role: "Weak field-lens element at the front of G3.",
    },
    {
      id: 10,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.5186,
      vd: 70.08,
      fl: 49.6,
      glass: "PKH1-class phosphate crown (519/700)",
      role: "Main positive power element in the compensator group.",
    },
    {
      id: 11,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.86074,
      vd: 23.0,
      fl: -91.5,
      glass: "J-SFH2 class (very dense flint, 861/230)",
      role: "Post-stop negative corrector for Petzval and chromatic balance.",
    },
    {
      id: 12,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.12,
      fl: 86.7,
      glass: "BK7 / J-BK7A / S-BSL7 class (517/641)",
      role: "First relay element in the master group.",
    },
    {
      id: 13,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.29,
      fl: 130.1,
      glass: "S-BSM16 / J-SK16 / N-SK16 class (620/603)",
      role: "Weak positive dense-crown relay element.",
    },
    {
      id: 14,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.79631,
      vd: 40.98,
      fl: -33.0,
      glass: "Unmatched lanthanum-flint-region glass (796/410)",
      role: "Main negative flint-like corrector in the fourth group.",
    },
    {
      id: 15,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.12,
      fl: 109.2,
      glass: "BK7 / J-BK7A / S-BSL7 class (517/641)",
      role: "Rear positive field-correction element.",
    },
    {
      id: 16,
      name: "L14a",
      label: "Element 14a",
      type: "Positive Meniscus",
      nd: 1.51835,
      vd: 60.34,
      fl: 38.3,
      glass: "Unmatched crown glass (518/603)",
      cemented: "D4",
      role: "Positive half of the rear cemented corrector.",
    },
    {
      id: 17,
      name: "L14b",
      label: "Element 14b",
      type: "Negative Meniscus",
      nd: 1.78797,
      vd: 47.53,
      fl: -74.3,
      glass: "LAH64-class lanthanum flint (788/475, near-match)",
      cemented: "D4",
      role: "Negative half of the rear cemented corrector.",
    },
  ],

  surfaces: [
    { label: "1", R: 158.96, d: 1.5, nd: 1.80518, elemId: 1, sd: 26.5 },
    { label: "2", R: 64.18, d: 8.0, nd: 1.49782, elemId: 2, sd: 25.5 },
    { label: "3", R: -138.79, d: 0.1, nd: 1.0, elemId: 0, sd: 25.0 },
    { label: "4", R: 47.22, d: 4.3, nd: 1.67003, elemId: 3, sd: 22.5 },
    { label: "5", R: 127.19, d: 1.266, nd: 1.0, elemId: 0, sd: 22.0 },

    { label: "6", R: 133.06, d: 1.3, nd: 1.90265, elemId: 4, sd: 12.0 },
    { label: "7", R: 23.64, d: 2.9, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "8", R: 154.62, d: 4.2, nd: 1.80518, elemId: 5, sd: 11.5 },
    { label: "9", R: -32.48, d: 1.1, nd: 1.80411, elemId: 6, sd: 11.3 },
    { label: "10", R: 117.17, d: 2.7, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "11", R: -25.41, d: 1.0, nd: 1.713, elemId: 7, sd: 9.8 },
    { label: "12", R: 30.77, d: 2.8, nd: 1.86074, elemId: 8, sd: 10.0 },
    { label: "13", R: 483.93, d: 20.067, nd: 1.0, elemId: 0, sd: 10.3 },

    { label: "14", R: -486.79, d: 2.5, nd: 1.5168, elemId: 9, sd: 11.0 },
    { label: "15", R: -39.43, d: 0.05, nd: 1.0, elemId: 0, sd: 10.9 },
    { label: "STO", R: 1e15, d: 0.05, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "16", R: 36.24, d: 4.5, nd: 1.5186, elemId: 10, sd: 11.0 },
    { label: "17", R: -84.69, d: 0.8, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "18", R: -47.65, d: 1.0, nd: 1.86074, elemId: 11, sd: 11.0 },
    { label: "19", R: -121.84, d: 17.344, nd: 1.0, elemId: 0, sd: 11.0 },

    { label: "20", R: 72.48, d: 3.0, nd: 1.5168, elemId: 12, sd: 13.0 },
    { label: "21", R: -115.65, d: 0.1, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "22", R: 46.78, d: 3.9, nd: 1.62041, elemId: 13, sd: 13.5 },
    { label: "23", R: 107.74, d: 7.0, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "24", R: -89.69, d: 2.0, nd: 1.79631, elemId: 14, sd: 12.0 },
    { label: "25", R: 37.59, d: 2.5, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "26", R: -289.15, d: 2.5, nd: 1.5168, elemId: 15, sd: 12.0 },
    { label: "27", R: -47.37, d: 0.1, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "28", R: 93.53, d: 6.5, nd: 1.51835, elemId: 16, sd: 12.0 },
    { label: "29", R: -24.61, d: 1.3, nd: 1.78797, elemId: 17, sd: 12.0 },
    { label: "30", R: -43.43, d: 54.37135194044766, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  asph: {},

  zoomPositions: [35, 200],
  zoomLabels: ["35 mm", "200 mm"],
  zoomStep: 0.004,

  var: {
    "5": [
      [1.266, 1.266],
      [35.76, 11.26],
    ],
    "13": [
      [20.067, 20.067],
      [1.686, 12.036],
    ],
    "19": [
      [17.344, 17.344],
      [1.231, 7.881],
    ],
    "30": [
      [54.37135194044766, 54.37135194044766],
      [95.90718865668462, 95.90718865668462],
    ],
  },
  varLabels: [
    ["5", "D5 G1-G2"],
    ["13", "D13 G2-G3"],
    ["19", "D19 G3-G4"],
    ["30", "BF"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-)", fromSurface: "6", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "14", toSurface: "19" },
    { text: "G4 (+)", fromSurface: "20", toSurface: "30" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
    { text: "D4", fromSurface: "28", toSurface: "30" },
  ],

  nominalFno: [3.5, 4.5],
  closeFocusM: 0.245,
  focusDescription:
    "Normal focusing is by the first lens group. The close-focus endpoint modeled here is the patent telephoto-end macro state at β = -0.25.",
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  scFill: 0.64,
  yScFill: 0.56,
} satisfies LensDataInput;

export default LENS_DATA;
