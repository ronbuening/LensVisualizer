import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NIKKOR-H AUTO 2.8cm f/3.5                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP Showa 38-26133 / JPB 1963026133, sole example.   ║
 * ║  Six-element, six-group all-spherical retrofocus wide-angle lens.  ║
 * ║  Focus: unit focusing; production close focus is 0.6 m.            ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║  The patent prescription is normalized to f = 100. All radii,      ║
 * ║  thicknesses, back focus, semi-diameters, and paraxial focal       ║
 * ║  lengths below are scaled by 0.28 for the 28 mm production lens.   ║
 * ║  The aperture stop position is inferred from Fig. 1 by splitting   ║
 * ║  the patent d6 gap evenly; the patent gives only the total d6      ║
 * ║  separation between L3 and L4.                                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-nikkor-h-auto-28mm-f35",
  maker: "Nikon",
  name: "NIKON NIKKOR-H Auto 2.8cm f/3.5",
  subtitle: "JP Showa 38-26133 / JPB 1963026133 — Nippon Kogaku / Wakimoto",
  specs: ["6 elements / 6 groups", "f ≈ 28.0 mm", "F/3.5", "2ω = 75° patent field", "all-spherical"],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.001,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentYear: 1963,
  elementCount: 6,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6726,
      vd: 32.2,
      fl: 160.269,
      glass: "SF5 (Schott equivalent)",
      apd: false,
      role: "Weak front positive meniscus; low-power front correction member in the retrofocus front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6212,
      vd: 60.1,
      fl: -38.165,
      glass: "SK16 class (Hikari/Schott equivalent)",
      apd: false,
      role: "Strong negative meniscus that supplies the retrofocus front-group divergence and back-focus extension.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.6387,
      vd: 55.3,
      fl: 26.915,
      glass: "K-SK18 (Sumita) / SK18 class",
      apd: false,
      role: "Positive pre-stop collector at the entrance of the rear converging group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6726,
      vd: 32.2,
      fl: -15.859,
      glass: "SF5 (Schott equivalent)",
      apd: false,
      role: "Strong negative post-stop element; principal rear-group chromatic and Petzval correction member.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6582,
      vd: 50.8,
      fl: 25.592,
      glass: "N-SSK5 (Schott) / SSK5 class",
      apd: false,
      role: "Positive meniscus with convex side toward the image; relay and oblique-aberration correction member.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.5163,
      vd: 64.0,
      fl: 56.303,
      glass: "BK7 class (Schott/Ohara/CDGM equivalent)",
      apd: false,
      role: "Final low-dispersion positive relay element adjacent to the image space.",
    },
  ],

  surfaces: [
    { label: "1", R: 102.284, d: 5.096, nd: 1.6726, elemId: 1, sd: 25.2 },
    { label: "2", R: 1960.0, d: 0.196, nd: 1.0, elemId: 0, sd: 22.2 },
    { label: "3", R: 67.2, d: 1.652, nd: 1.6212, elemId: 2, sd: 16.0 },
    { label: "4", R: 17.36, d: 25.76, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "5", R: 17.976, d: 3.332, nd: 1.6387, elemId: 3, sd: 9.3 },
    { label: "6", R: -365.176, d: 2.548, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "STO", R: 1e15, d: 2.548, nd: 1.0, elemId: 0, sd: 5.22 },
    { label: "7", R: -16.94, d: 0.868, nd: 1.6726, elemId: 4, sd: 6.9 },
    { label: "8", R: 29.4, d: 1.484, nd: 1.0, elemId: 0, sd: 7.3 },
    { label: "9", R: -112.588, d: 2.548, nd: 1.6582, elemId: 5, sd: 8.2 },
    { label: "10", R: -14.784, d: 0.196, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "11", R: 59.64, d: 1.764, nd: 1.5163, elemId: 6, sd: 9.4 },
    { label: "12", R: -56.14, d: 37.1, nd: 1.0, elemId: 0, sd: 9.7 },
  ],

  asph: {},

  var: {
    "12": [37.1, 38.602],
  },
  varLabels: [["12", "BF"]],

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "4" },
    { text: "REAR", fromSurface: "5", toSurface: "12" },
  ],

  doublets: [],

  closeFocusM: 0.6,
  focusDescription:
    "Unit focusing; all optical spacings remain fixed and the whole optical assembly translates forward.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],

  scFill: 0.58,
  yScFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
