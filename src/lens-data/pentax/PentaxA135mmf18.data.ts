import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — smc PENTAX-A★ 135mm F1.8                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,447,137, Example 2 (Asahi / Yasunori Arai).    ║
 * ║  Large-aperture Ernostar-lineage long-focus lens for 135 format.  ║
 * ║  7 elements / 6 groups, all spherical.                            ║
 * ║  Focus: fixed rear element extension; L1-L6 move, L7 remains fixed.║
 * ║                                                                    ║
 * ║  NOTE ON TRANSCRIPTION:                                            ║
 * ║    Example 2 surface r4 uses d4 = 15.0 mm. The patent OCR can read ║
 * ║    this as 5.0 mm, but the patent image, the stated EFL, and       ║
 * ║    f1,2,3 = 0.476 f require 15.0 mm.                              ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS:                                                    ║
 * ║    The patent lists d11 = 20.42 mm at beta = -1/10. The production ║
 * ║    lens is specified at 1.2 m minimum focus, so the close-focus    ║
 * ║    slider extends d11 paraxially to 29.40349 mm to represent that  ║
 * ║    manufacturer close-focus distance while preserving fixed L7.    ║
 * ║                                                                    ║
 * ║  NOTE ON STOP AND SEMI-DIAMETERS:                                  ║
 * ║    The patent does not tabulate the aperture stop as a numbered      ║
 * ║    surface. Its r8/aperture concentricity condition points inside    ║
 * ║    L4, so it is not used as a literal iris plane. STO is placed in   ║
 * ║    the d7 air interval, 8.50 mm behind r7, clearing the rear-surface ║
 * ║    sag at the f/1.8 stop radius. Other semi-diameters are            ║
 * ║    conservative visualization estimates, not patent values.         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "pentax-a-star-135mm-f18",
  maker: "Pentax",
  name: "PENTAX SMC PENTAX-A★ 135mm f/1.8",
  subtitle: "US4447137 Example 2 — Asahi / Yasunori Arai",
  specs: ["7 elements / 6 groups", "f = 134.99 mm", "F/1.8", "2ω = 18°", "all-spherical", "fixed rear element focus"],

  focalLengthMarketing: 135,
  focalLengthDesign: 134.9875,
  apertureMarketing: 1.8,
  apertureDesign: 1.8,
  lensMounts: ["pentax-k"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,447,137",
  patentAuthors: ["Yasunori Arai"],
  patentAssignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  patentYear: 1984,
  elementCount: 7,
  groupCount: 6,
  focusDescription: "Fixed rear element extension: L1-L6 move together while L7 remains fixed at the rear.",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: 117.016,
      glass: "S-BSM16 (OHARA) / N-SK16 / BACD16 class",
      role: "Front positive collector; high-Abbe crown member of the front achromatic/Petzval pair.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.72342,
      vd: 37.9,
      fl: -119.214,
      glass: "S-BAH28 (OHARA) / BAFD8 class",
      role: "Negative flint member of the cemented second component; paired with L3 across the hyperchromatic r4 interface.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: 61.307,
      glass: "S-LAL14 (OHARA) / LAC14 class",
      role: "Positive lanthanum-crown member of the cemented second component; forms the patent's front positive material pair with L1.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.1,
      fl: -48.525,
      glass: "S-TIM25 (OHARA) / N-SF5 / E-FD5 class",
      role: "Strong negative third component; balances the front positive components and controls higher-order aberrations with the following corrector.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Weak Positive Meniscus",
      nd: 1.70154,
      vd: 41.2,
      fl: 752.357,
      glass: "S-BAH27 (OHARA) / BAFD7 class",
      role: "Very weak near-concentric fourth component; patent-defined higher-order spherical aberration and coma corrector.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 46.0,
      fl: 195.68,
      glass: "K-LaFn11 (Sumita) / H-LaF72 class",
      role: "Positive fifth component with the larger curvature toward the object; patent-defined distortion-control element.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7,
      vd: 48.1,
      fl: 424.86,
      glass: "J-LAF01 (Hikari) / H-LaF51 class",
      role: "Fixed weak positive rear element; governs aberration stability during front-group extension focusing.",
    },
  ],

  surfaces: [
    { label: "1", R: 71.398, d: 12.9, nd: 1.62041, elemId: 1, sd: 38.0 },
    { label: "2", R: 4020.868, d: 0.1, nd: 1.0, elemId: 0, sd: 35.5 },
    { label: "3", R: 52.33, d: 4.82, nd: 1.72342, elemId: 2, sd: 30.5 },
    { label: "4", R: 31.309, d: 15.0, nd: 1.6968, elemId: 3, sd: 28.0 },
    { label: "5", R: 94.161, d: 4.05, nd: 1.0, elemId: 0, sd: 26.5 },
    { label: "6", R: 461.054, d: 8.17, nd: 1.6727, elemId: 4, sd: 24.5 },
    { label: "7", R: 30.267, d: 8.5, nd: 1.0, elemId: 0, sd: 21.5 },
    { label: "STO", R: 1e15, d: 25.88, nd: 1.0, elemId: 0, sd: 18.99085983 },
    { label: "8", R: -41.362, d: 4.37, nd: 1.70154, elemId: 5, sd: 25.0 },
    { label: "9", R: -40.027, d: 6.87, nd: 1.0, elemId: 0, sd: 26.5 },
    { label: "10", R: 71.985, d: 4.05, nd: 1.72, elemId: 6, sd: 27.0 },
    { label: "11", R: 143.722, d: 4.0, nd: 1.0, elemId: 0, sd: 26.5 },
    { label: "12", R: 248.646, d: 4.0, nd: 1.7, elemId: 7, sd: 26.5 },
    { label: "13", R: 1506.638, d: 40.754258341, nd: 1.0, elemId: 0, sd: 26.0 },
  ],

  asph: {},
  var: {
    "11": [4.0, 29.4034898751],
  },
  varLabels: [["11", "D11"]],
  groups: [
    { text: "Moving group (L1-L6)", fromSurface: "1", toSurface: "11" },
    { text: "Fixed rear (L7)", fromSurface: "12", toSurface: "13" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  closeFocusM: 1.2,
  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 9,

  offAxisFieldFrac: 0.35,
  scFill: 0.74,
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
