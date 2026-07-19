import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — OLYMPUS OM J. ZUIKO AUTO-W 24mm f/2         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,830,559 Example 1 (Olympus / Matsubara).       ║
 * ║  Retrofocus super-wide-angle for 35 mm SLR, F/2.0, 84°.          ║
 * ║  10 elements / 8 groups (6 patent components), all-spherical.     ║
 * ║  Focus: helicoid + floating group (IV+V move together).           ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 100; all R, d, sd values scaled ×0.24031 to      ║
 * ║    f ≈ 24 mm production focal length.                             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters.  Estimated from combined  ║
 * ║    marginal ray (f/2) + chief ray (60–85 % half-field) with      ║
 * ║    8–10 % mechanical clearance, front group constrained by 55 mm  ║
 * ║    filter thread.  Cross-gap sag and edge-thickness validated.    ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent provides floating-group data at β = 1/40.  Close-focus  ║
 * ║    gaps at MFD = 0.25 m extrapolated from the patent mechanism    ║
 * ║    (components IV+V translate; d11+d16 = const) with helicoid     ║
 * ║    BFD extension solved paraxially.                               ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Diaphragm between components III and IV (patent Fig. 1).       ║
 * ║    Placed at midpoint of d11 gap, inferred from patent figure.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-zuiko-24f2-j",
  maker: "Olympus",
  name: "OLYMPUS OM J. ZUIKO AUTO-W 24mm f/2",
  subtitle: "US 3,830,559 EXAMPLE 1 — OLYMPUS / MATSUBARA",
  specs: ["10 ELEMENTS / 8 GROUPS", "f ≈ 24.0 mm", "F/2.0", "2ω ≈ 84°", "ALL-SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 24,
  focalLengthDesign: 24.0,
  apertureMarketing: 2.0,
  lensMounts: ["olympus-om"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,830,559",
  patentAuthors: ["M Matsubara"],
  patentAssignees: ["Olympus Optical Co Ltd"],
  patentYear: 1974,
  elementCount: 10,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.757,
      vd: 47.9,
      fl: 80.7,
      glass: "J-LAF04 class (HIKARI), 757479",
      apd: false,
      role: "Front positive meniscus; distortion, coma, and lateral-color moderation",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62,
      vd: 60.3,
      fl: -44.5,
      glass: "N-SK16 class (SCHOTT) / S-BSM16 (OHARA), 620603",
      apd: false,
      role: "First negative meniscus of the retrofocus expander",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62,
      vd: 60.3,
      fl: -38.6,
      glass: "N-SK16 class (SCHOTT) / S-BSM16 (OHARA), 620603",
      apd: false,
      role: "Second negative meniscus of the retrofocus expander",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.67,
      vd: 57.3,
      fl: -64.8,
      glass: "S-LAL52 class (OHARA) / E-LAK02 (HIKARI), 670573",
      apd: false,
      role: "Third negative meniscus; completes front retrofocus group",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.773,
      vd: 49.6,
      fl: -42.4,
      glass: "S-LAH66 class (OHARA), 773496",
      apd: false,
      cemented: "D1",
      role: "Dense LaF front member of positive cemented doublet (component III)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.596,
      vd: 39.2,
      fl: 18.4,
      glass: "S-TIM8 class (OHARA), 596392",
      apd: false,
      cemented: "D1",
      role: "Thick positive flint member of pre-stop cemented doublet (component III)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.773,
      vd: 49.6,
      fl: 18.3,
      glass: "S-LAH66 class (OHARA), 773496",
      apd: false,
      cemented: "D2",
      role: "Dense LaF front member of negative cemented doublet (component IV); floating group",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.689,
      vd: 31.1,
      fl: -14.8,
      glass: "S-TIM28 class (OHARA), 689311",
      apd: false,
      cemented: "D2",
      role: "High-dispersion flint rear member of post-stop doublet; R13 corrects sagittal coma and SA",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.697,
      vd: 55.6,
      fl: 44.4,
      glass: "S-LAL14 class (OHARA) / N-LAK14 (SCHOTT), 697556",
      apd: false,
      role: "Positive meniscus; part of floating focus correction subassembly with L7/L8",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.697,
      vd: 55.6,
      fl: 49.0,
      glass: "S-LAL14 class (OHARA) / N-LAK14 (SCHOTT), 697556",
      apd: false,
      role: "Final biconvex positive relay element; chromatic and spherical correction",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 41.289, d: 4.905, nd: 1.757, elemId: 1, sd: 21.0 },
    { label: "2", R: 127.353, d: 0.197, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "3", R: 49.543, d: 1.766, nd: 1.62, elemId: 2, sd: 14.0 },
    { label: "4", R: 17.733, d: 1.961, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "5", R: 28.685, d: 1.471, nd: 1.62, elemId: 3, sd: 11.0 },
    { label: "6", R: 13.052, d: 2.845, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "7", R: 22.042, d: 1.471, nd: 1.67, elemId: 4, sd: 10.0 },
    { label: "8", R: 14.62, d: 3.434, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "9", R: 23.198, d: 1.471, nd: 1.773, elemId: 5, sd: 11.0 },
    { label: "10", R: 13.582, d: 11.28, nd: 1.596, elemId: 6, sd: 10.5 },
    { label: "11", R: -57.021, d: 1.178, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "STO", R: 1e15, d: 1.178, nd: 1.0, elemId: 0, sd: 8.1 },
    { label: "12", R: -106.393, d: 10.3, nd: 1.773, elemId: 7, sd: 10.0 },
    { label: "13", R: -12.492, d: 1.569, nd: 1.689, elemId: 8, sd: 10.5 },
    { label: "14", R: 55.173, d: 2.206, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "15", R: -68.104, d: 2.696, nd: 1.697, elemId: 9, sd: 10.5 },
    { label: "16", R: -21.285, d: 0.197, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "17", R: 90.093, d: 3.727, nd: 1.697, elemId: 10, sd: 13.0 },
    { label: "18", R: -55.085, d: 37.552, nd: 1.0, elemId: 0, sd: 13.0 },
  ],

  asph: {},

  /* ── Variable air spacings (helicoid + floating focus) ──
   *  Components IV+V (L7–L9) translate as a rigid unit toward the object
   *  for close-range correction; d11 + d16 stays constant while BFD
   *  increases via helicoid extension.
   *
   *  Var gaps: "11" + "STO" = pre-stop to post-stop portion of d11,
   *  "16" = gap after L9, "18" = BFD.
   */
  var: {
    "11": [1.178, 0.336],
    STO: [1.178, 0.336],
    "16": [0.197, 1.879],
    "18": [37.552, 39.85],
  },

  varLabels: [
    ["11", "D11a"],
    ["STO", "D11b"],
    ["16", "D16"],
    ["18", "BF"],
  ],

  /* ── Groups and doublets ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "8" },
    { text: "III", fromSurface: "9", toSurface: "11" },
    { text: "IV", fromSurface: "12", toSurface: "14" },
    { text: "V", fromSurface: "15", toSurface: "16" },
    { text: "VI", fromSurface: "17", toSurface: "18" },
  ],

  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
  ],

  /* ── Focus ── */
  closeFocusM: 0.25,
  focusDescription: "Helicoid unit focus with floating correction (components IV+V translate together).",

  /* ── Aperture ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.42,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
