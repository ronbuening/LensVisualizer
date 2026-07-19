import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VIVITAR SERIES 1 70-210mm f/3.5 VMC MACRO FOCUSING AUTO ZOOM ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP S51-63635, Table 1; English counterpart US 3,817,600.          ║
 * ║  Native patent prescription, without focal-length scaling.                  ║
 * ║  15 elements / 10 air-separated groups / all spherical.                    ║
 * ║                                                                              ║
 * ║  Four principal power groups: positive / negative / negative / positive.    ║
 * ║  Zoom gaps: D5, D10, and D13; their endpoint sum is constant to 0.001 mm.   ║
 * ║  Normal focus: Group I moves objectward to approximately 1.8 m from r1.     ║
 * ║  Macro: at the tele endpoint, Groups II and III move objectward equally,    ║
 * ║  retaining D10 = 6.000 mm.                                                   ║
 * ║                                                                              ║
 * ║  FOCUS-MODE LIMITATION: LensDataInput currently provides one linear focus   ║
 * ║  interval per zoom position. The close endpoints below reproduce wide-end   ║
 * ║  normal focus and tele-end maximum macro focus. Intermediate focus-slider   ║
 * ║  positions do not reproduce the lens's two-stage front-focus/macro cam path.║
 * ║                                                                              ║
 * ║  BFD: the patent omits a final image-plane distance. A fixed 40.873732 mm    ║
 * ║  BFD is the mean of independently traced wide/tele paraxial BFL values      ║
 * ║  (40.861589 and 40.885874 mm), leaving only ±0.012143 mm endpoint defocus.  ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: the patent gives no clear apertures. Values were inferred  ║
 * ║  from paraxial marginal/chief-ray envelopes, the production 67 mm accessory ║
 * ║  thread, patent-figure proportions, and renderer geometry constraints.      ║
 * ║                                                                              ║
 * ║  Glass names identify catalog equivalents, not proven production melts.     ║
 * ║  nC/nF/ng values are from the cited legacy SUMITA glass table; the patent   ║
 * ║  itself supplies only nd and νd.                                             ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "vivitar-series-1-70-210-f35",
  maker: "Vivitar",
  name: "VIVITAR SERIES 1 70-210mm f/3.5 VMC MACRO FOCUSING AUTO ZOOM",
  subtitle: "JP S51-63635 TABLE 1 — RINZŌ WATANABE / ELLIS I. BETENSKY",
  specs: [
    "15 ELEMENTS / 10 GROUPS",
    "70-210mm (PATENT 70-205mm)",
    "f/3.5 (PATENT 1:3.65)",
    "MACRO 1:2.2 / 80 mm WORKING DISTANCE",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: [70, 210],
  focalLengthDesign: [72.662091, 204.940289],
  apertureMarketing: 3.5,
  apertureDesign: 3.65,
  imageFormat: "135-full-frame",
  patentNumber: "JP S51-63635",
  patentAuthors: ["Rinzo Watanabe", "Ellis I. Betensky"],
  patentAssignees: ["KINO SEIMITSU KOGYO KK"],
  patentYear: 1976,
  elementCount: 15,
  groupCount: 10,

  /* ── Elements ──
   * fl values are standalone thick-lens focal lengths in air. They do not
   * describe the in-situ power of a component while cemented to its partner.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      fl: -159.9,
      glass: "SF1 (SUMITA legacy catalog; HIKARI J-SF1 equivalent)",
      nC: 1.71031,
      nF: 1.73462,
      ng: 1.74916,
      cemented: "D1",
      role: "Negative flint component of the positive front achromat.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.2,
      fl: 114.4,
      glass: "SK5 (SUMITA legacy catalog; HIKARI J-SK5 equivalent)",
      nC: 1.58619,
      nF: 1.59581,
      ng: 1.601,
      cemented: "D1",
      role: "Positive crown component of the front achromat.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.51009,
      vd: 63.4,
      fl: 182.4,
      glass: "BK1 (SUMITA legacy catalog; OHARA BSL1 equivalent)",
      nC: 1.50762,
      nF: 1.51567,
      ng: 1.52,
      role: "Weak positive meniscus completing focusing Group I.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.78472,
      vd: 25.7,
      fl: 76.4,
      glass: "SF11 (SUMITA legacy catalog; HIKARI J-SF11 equivalent)",
      nC: 1.77597,
      nF: 1.80649,
      ng: 1.82525,
      cemented: "D2",
      role: "Positive dense-flint component of the nearly afocal Group II doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.66672,
      vd: 48.4,
      fl: -79.6,
      glass: "BAF11 (SUMITA legacy catalog; HIKARI J-BAF11 equivalent)",
      nC: 1.6626,
      nF: 1.67638,
      ng: 1.68412,
      cemented: "D2",
      role: "Negative barium-flint component of the Group II achromat.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.66672,
      vd: 48.4,
      fl: -60.3,
      glass: "BAF11 (SUMITA legacy catalog; HIKARI J-BAF11 equivalent)",
      nC: 1.6626,
      nF: 1.67638,
      ng: 1.68412,
      role: "Principal negative-power singlet of variator Group II.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.52249,
      vd: 59.6,
      fl: -37.7,
      glass: "K5 (SUMITA legacy catalog)",
      nC: 1.51982,
      nF: 1.52858,
      ng: 1.53335,
      cemented: "D3",
      role: "Strong negative crown component of compensator Group III.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.62588,
      vd: 35.6,
      fl: 68.1,
      glass: "F1 (SUMITA legacy catalog; HIKARI J-F1 equivalent)",
      nC: 1.62073,
      nF: 1.63829,
      ng: 1.64855,
      cemented: "D3",
      role: "Positive flint partner setting the Group III chromatic balance.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70,
      fl: 54,
      glass: "FK5 class (SUMITA legacy / HIKARI J-FK5)",
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49593,
      cemented: "D4",
      role: "Low-index fluor-crown-class positive element in master Group IV.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.5,
      fl: -134.4,
      glass: "SF6 (SUMITA legacy catalog; HIKARI J-SF6 equivalent)",
      nC: 1.7961,
      nF: 1.82773,
      ng: 1.84701,
      cemented: "D4",
      role: "Dense-flint achromatizing partner of L9.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70,
      fl: 158.9,
      glass: "FK5 class (SUMITA legacy / HIKARI J-FK5)",
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49593,
      role: "Weak positive fluor-crown-class relay element.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70,
      fl: 58.5,
      glass: "FK5 class (SUMITA legacy / HIKARI J-FK5)",
      nC: 1.48535,
      nF: 1.49227,
      ng: 1.49593,
      cemented: "D5",
      role: "Positive low-index component of the second Group IV achromat.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.64328,
      vd: 47.8,
      fl: -77,
      glass: "BAF9 (SUMITA legacy catalog)",
      nC: 1.63926,
      nF: 1.65273,
      ng: 1.66034,
      cemented: "D5",
      role: "Negative barium-flint partner preceding the aperture stop.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.697,
      vd: 48.5,
      fl: -47.5,
      glass: "LAFN2 (SUMITA legacy; OHARA S-LAM59 equivalent)",
      nC: 1.6927,
      nF: 1.70708,
      ng: 1.71514,
      role: "Strong negative lanthanum-flint element in the rear relay section.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.58921,
      vd: 41,
      fl: 65.8,
      glass: "LF2 (SUMITA legacy catalog; OHARA PBL22 equivalent)",
      nC: 1.58496,
      nF: 1.59934,
      ng: 1.6076,
      role: "Final positive singlet completing the rear negative subassembly.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 268.54, d: 1.9, nd: 1.71736, elemId: 1, sd: 31.8 },
    { label: "2", R: 80.13, d: 6.9, nd: 1.58913, elemId: 2, sd: 29.2 },
    { label: "3", R: -410.77, d: 0.3, nd: 1, elemId: 0, sd: 29.2 },
    { label: "4", R: 90.6, d: 5.3, nd: 1.51009, elemId: 3, sd: 28.8 },
    { label: "5", R: 3376.49, d: 2.041, nd: 1, elemId: 0, sd: 28.8 },
    { label: "6", R: 222.96, d: 4.7, nd: 1.78472, elemId: 4, sd: 22.0 },
    { label: "7", R: -81.3, d: 1.3, nd: 1.66672, elemId: 5, sd: 22.0 },
    { label: "8", R: 154.03, d: 2.7, nd: 1, elemId: 0, sd: 19.5 },
    { label: "9", R: -184.02, d: 1, nd: 1.66672, elemId: 6, sd: 19.5 },
    { label: "10", R: 51.53, d: 28.624, nd: 1, elemId: 0, sd: 16.0 },
    { label: "11", R: -47.69, d: 1, nd: 1.52249, elemId: 7, sd: 16.0 },
    { label: "12", R: 33.79, d: 4.8, nd: 1.62588, elemId: 8, sd: 17.5 },
    { label: "13", R: 153.92, d: 24.389, nd: 1, elemId: 0, sd: 17.5 },
    { label: "14", R: 88.43, d: 6.5, nd: 1.48749, elemId: 9, sd: 17.0 },
    { label: "15", R: -36.55, d: 1.46, nd: 1.80518, elemId: 10, sd: 17.0 },
    { label: "16", R: -56.17, d: 0.3, nd: 1, elemId: 0, sd: 17.0 },
    { label: "17", R: 61.15, d: 3.87, nd: 1.48749, elemId: 11, sd: 17.0 },
    { label: "18", R: 284.27, d: 0.3, nd: 1, elemId: 0, sd: 17.0 },
    { label: "19", R: 38.55, d: 6, nd: 1.48749, elemId: 12, sd: 17.0 },
    { label: "20", R: -104.13, d: 1.023, nd: 1.64328, elemId: 13, sd: 17.0 },
    { label: "21", R: 94.78, d: 0, nd: 1, elemId: 0, sd: 15 },
    { label: "STO", R: 1e15, d: 49.846, nd: 1, elemId: 0, sd: 14.457801 },
    { label: "22", R: -20.19, d: 1.48, nd: 1.697, elemId: 14, sd: 16.0 },
    { label: "23", R: -53.33, d: 0.267, nd: 1, elemId: 0, sd: 16.0 },
    { label: "24", R: 135.84, d: 4, nd: 1.58921, elemId: 15, sd: 16.0 },
    { label: "25", R: -53.64, d: 40.873732, nd: 1, elemId: 0, sd: 16.0 },
  ],

  asph: {},

  /* ── Variable spacings ──
   * Wide close endpoint: Group I normal focus to 1.8 m from r1 (~2.0 m from image plane).
   * Tele close endpoint: maximum macro state, 80 mm object distance from r1.
   */
  var: {
    "5": [
      [2.041, 11.461944992],
      [47.555, 11.780356017],
    ],
    "10": [
      [28.624, 28.624],
      [6, 6],
    ],
    "13": [
      [24.389, 24.389],
      [1.5, 46.736703557],
    ],
  },

  varLabels: [
    ["5", "D(I-II)"],
    ["10", "D(II-III)"],
    ["13", "D(III-IV)"],
  ],

  zoomPositions: [70, 205],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "GROUP I · FOCUS", fromSurface: "1", toSurface: "5" },
    { text: "GROUP II · VARIATOR", fromSurface: "6", toSurface: "10" },
    { text: "GROUP III · COMPENSATOR", fromSurface: "11", toSurface: "13" },
    { text: "GROUP IV · MASTER", fromSurface: "14", toSurface: "25" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
    { text: "D4", fromSurface: "14", toSurface: "16" },
    { text: "D5", fromSurface: "19", toSurface: "21" },
  ],

  closeFocusM: 0.29,
  focusDescription:
    "Group I unit focus to about 2 m from the image plane; tele-end macro focus by equal objectward movement of Groups II and III at fixed 6.000 mm separation.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.63,
  yScFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
