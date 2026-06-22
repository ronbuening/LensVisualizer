import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — PENTAX SMC PENTAX-FA 28mm f/2.8 Soft          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,822,132 Example 1 (Asahi Optical / Hirakawa).    ║
 * ║  Retrofocus wide-angle soft-focus prime: negative front group,      ║
 * ║  positive rear group, and an aperture stop inside the rear group.   ║
 * ║  5 elements / 5 groups, all spherical.                              ║
 * ║                                                                    ║
 * ║  Scaling: patent normalized at f = 100.00; all radii and axial      ║
 * ║  spacings scaled ×0.28 for the 28 mm production lens.               ║
 * ║                                                                    ║
 * ║  Stop: patent drawing places S in the air gap between r6 and r7     ║
 * ║  but Table 1 does not split d6. The data file splits d6 = 18.08     ║
 * ║  normalized as 14.00 + 4.08 before scaling. This preserves the      ║
 * ║  published optical prescription; only pupil placement/rendering is  ║
 * ║  affected.                                                          ║
 * ║                                                                    ║
 * ║  Semi-diameters: not published in the patent. Values were estimated ║
 * ║  from paraxial marginal/chief-ray clearance, the patent figures,    ║
 * ║  49 mm filter envelope, and renderer constraints: sd/|R| < 0.90,    ║
 * ║  element front/rear SD ratio ≤ 1.25, positive edge thickness, and   ║
 * ║  cross-gap sag intrusion ≤ 90% of the air gap.                      ║
 * ║                                                                    ║
 * ║  Focus: the patent publishes only infinity focus. The production    ║
 * ║  0.25 m / 0.18× close-focus specification is modeled as unit focus  ║
 * ║  by increasing the final back-focus gap by m × f ≈ 5.04 mm.         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "pentax-fa-28mm-f28-soft",
  maker: "Pentax",
  name: "PENTAX SMC PENTAX-FA 28mm f/2.8 Soft",
  subtitle: "US 5,822,132 Example 1 — Asahi Optical / Hirakawa",
  specs: [
    "5 elements / 5 groups",
    "f = 28 mm",
    "F/2.8 nominal; patent F.No. 1:2.9",
    "2ω = 75° production; 75.8° patent",
    "All-spherical soft-focus retrofocus",
  ],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.0006,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["pentax-k"],
  imageFormat: "135-full-frame",
  patentYear: 1998,
  elementCount: 5,
  groupCount: 5,
  apertureBlades: 8,

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Weak Biconvex Positive",
      nd: 1.58913,
      vd: 61.2,
      fl: 339.34,
      glass: "N-SK5 / BACD5 class",
      role: "Very weak positive entrance element ahead of the front negative meniscus.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: -29.34,
      glass: "N-SK16 / S-BSM16 class",
      role: "Front-group negative meniscus, convex to object; primary retrofocus negative power.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 21.85,
      glass: "S-LAH66 / N-LAF34 / TAF1 class",
      role: "Strong rear-group collector and main spherical-aberration generating positive element.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.2,
      fl: -17.74,
      glass: "J-SFS3 / SF56A class dense flint",
      role: "High-dispersion negative element behind the stop; chromatic balancing partner for the rear positives.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Near-Plano-Convex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 21.5,
      glass: "S-LAH66 / N-LAF34 / TAF1 class",
      role: "Rear positive lens completing the positive rear group.",
    },
  ],

  surfaces: [
    { label: "1", R: 378.28, d: 2.9204, nd: 1.58913, elemId: 1, sd: 15.2 },
    { label: "2", R: -422.7832, d: 0.098, nd: 1.0, elemId: 0, sd: 13.4 },
    { label: "3", R: 63.112, d: 2.3352, nd: 1.62041, elemId: 2, sd: 13.0 },
    { label: "4", R: 13.9272, d: 19.474, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "5", R: 23.5956, d: 10.7044, nd: 1.7725, elemId: 3, sd: 12.0 },
    { label: "6", R: -47.5944, d: 3.92, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "STO", R: 1e15, d: 1.1424, nd: 1.0, elemId: 0, sd: 6.4 },
    { label: "7", R: -23.688, d: 1.946, nd: 1.7847, elemId: 4, sd: 7.2 },
    { label: "8", R: 34.9692, d: 0.6412, nd: 1.0, elemId: 0, sd: 6.9 },
    { label: "9", R: 192.234, d: 3.1192, nd: 1.7725, elemId: 5, sd: 7.3 },
    { label: "10", R: -18.0516, d: 35.63, nd: 1.0, elemId: 0, sd: 9.1 },
  ],

  asph: {},

  var: {
    "10": [35.63, 40.67],
  },
  varLabels: [["10", "BF"]],

  groups: [
    { text: "GF", fromSurface: "1", toSurface: "4" },
    { text: "GR", fromSurface: "5", toSurface: "10" },
  ],

  doublets: [],

  closeFocusM: 0.25,
  focusDescription:
    "Patent publishes infinity only. Close focus is modeled as inferred unit focus: final back-focus gap increases by about 5.04 mm from the Ricoh 0.18× maximum-magnification specification.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.54,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
