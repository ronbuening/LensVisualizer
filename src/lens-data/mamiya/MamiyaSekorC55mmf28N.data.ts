import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MAMIYA-SEKOR C 55mm f/2.8 N                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Prescription source: JP S55-45883 B2, Example 1, the examined publication ║
 * ║  of the application laid open as JP S54-107336 / JP1979-107336.            ║
 * ║  Production correlation: Mamiya-Sekor C 55mm f/2.8 N, Mamiya 645 mount.   ║
 * ║  8 elements / 6 groups / 14 spherical refracting surfaces.                 ║
 * ║                                                                              ║
 * ║  SCALE: The patent prescription is normalized to f = 100. Patent radii,    ║
 * ║  thicknesses, and air spacings are scaled uniformly by 0.55. Derived stop,  ║
 * ║  image-plane, focus, and semi-diameter quantities are solved in that scaled ║
 * ║  coordinate system. Indices and Abbe numbers are unchanged.                 ║
 * ║                                                                              ║
 * ║  SOURCE CORRECTION: Patent d11 is the printed 10.0, not 1.0. The final      ║
 * ║  surface d uses the independently recomputed paraxial infinity BFD          ║
 * ║  (60.786417049 mm), rather than the rounded 0.55 × 110.52 = 60.786 mm.      ║
 * ║                                                                              ║
 * ║  STOP: The iris is shown inside patent gap d7 but its exact station and      ║
 * ║  diameter are unpublished. Figure 1 gives r7→STO/d7 ≈ 0.676. The physical ║
 * ║  stop semi-diameter 10.402160686 mm is solved to reproduce f/2.8.           ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: Inferred from exact spherical tracing of on-axis f/2.8     ║
 * ║  marginal rays, 0.6-field chief/marginal bundles, the 32.9° patent field,   ║
 * ║  Figure 1 proportions, and geometry limits. Full-field edge bundles are     ║
 * ║  allowed mild mechanical vignetting at the most restrictive surfaces.       ║
 * ║  gapSagFrac is 0.95 because the r9–r10 air lens retains only 0.061 mm       ║
 * ║  calculated rim clearance while still passing the on-axis f/2.8 bundle.     ║
 * ║                                                                              ║
 * ║  FOCUS STATUS — CONSTRAINED_RECONSTRUCTION: The patent publishes only       ║
 * ║  infinity focus. Close focus is modeled as rigid unit focus at the           ║
 * ║  manufacturer's 0.45 m film-plane MFD. Internal spacings remain fixed;       ║
 * ║  only the rear air distance changes. The solved close state gives 0.178736×.║
 * ║                                                                              ║
 * ║  GLASS: The patent publishes only nd and νd. Historical vendors and melts    ║
 * ║  are unresolved, so six-digit coordinate classes are used. nC, nF, ng, and  ║
 * ║  dPgF are not published and are therefore not invented.                     ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "mamiya-sekor-c-55mm-f2-8-n",
  maker: "Mamiya",
  name: "MAMIYA-SEKOR C 55mm f/2.8 N",
  subtitle: "JP S55-45883 B2 Example 1 — uniformly scaled ×0.55; strong production correlation",
  specs: ["8 ELEMENTS / 6 GROUPS", "f = 54.9999 mm", "F/2.8", "65°", "ALL-SPHERICAL"],

  focalLengthMarketing: 55,
  focalLengthDesign: 54.9999050569,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["mamiya-645"],
  imageFormat: "645",
  patentNumber: "JP S55-45883 B2",
  patentAuthors: ["Yusuke Arisaka"],
  patentAssignees: ["Mamiya Koki Co., Ltd."],
  patentYear: 1980,
  elementCount: 8,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      fl: -65.042872,
      glass: "516641 — catalog-equivalent class (vendor unresolved)",
      apd: false,
      role: "Large front negative meniscus providing the retrofocus separation and wide-field acceptance.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.58144,
      vd: 40.7,
      fl: 189.41533,
      glass: "581407 — catalog-equivalent class (vendor unresolved)",
      apd: false,
      role: "Weak positive meniscus following the large front air space.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 20.570317,
      glass: "773496 — catalog-equivalent class (vendor unresolved)",
      apd: false,
      role: "Strong positive member of the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.8,
      fl: -23.213313,
      glass: "567428 — catalog-equivalent class (vendor unresolved)",
      apd: false,
      role: "Negative member of the front cemented doublet, balancing the strong L3 power.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.2,
      fl: 68.296137,
      glass: "694532 — catalog-equivalent class (vendor unresolved)",
      apd: false,
      role: "Positive meniscus immediately behind the stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.72342,
      vd: 38,
      fl: -21.668451,
      glass: "723380 — catalog-equivalent class (vendor unresolved)",
      apd: false,
      role: "High-index negative member of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      fl: 36.308629,
      glass: "516641 — catalog-equivalent class (vendor unresolved)",
      apd: false,
      role: "Low-dispersion positive member of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.2,
      fl: 85.238773,
      glass: "694532 — catalog-equivalent class (vendor unresolved)",
      apd: false,
      role: "Rear positive meniscus completing the image-side correction block.",
    },
  ],

  surfaces: [
    { label: "1", R: 41.0674, d: 2.49975, nd: 1.51633, elemId: 1, sd: 22 },
    { label: "2", R: 18.09225, d: 15.983, nd: 1, elemId: 0, sd: 16.2 },
    { label: "3", R: -1933.25, d: 5.4021, nd: 1.58144, elemId: 2, sd: 16.2 },
    { label: "4", R: -104.30475, d: 0.2002, nd: 1, elemId: 0, sd: 16 },
    { label: "5", R: 35.7071, d: 8.05915, nd: 1.7725, elemId: 3, sd: 14.7 },
    { label: "6", R: -25.81645, d: 5.0204, nd: 1.56732, elemId: 4, sd: 14.7 },
    { label: "7", R: 28.7749, d: 6.288997, nd: 1, elemId: 0, sd: 14.7 },
    { label: "STO", R: 1e15, d: 3.014253, nd: 1, elemId: 0, sd: 10.4021606861 },
    { label: "8", R: -68.90125, d: 3.00025, nd: 1.6935, elemId: 5, sd: 10.5 },
    { label: "9", R: -28.5692, d: 1.2001, nd: 1, elemId: 0, sd: 10.27 },
    { label: "10", R: -18.82265, d: 1.49985, nd: 1.72342, elemId: 6, sd: 10.27 },
    { label: "11", R: 96.8847, d: 5.5, nd: 1.51633, elemId: 7, sd: 13.3 },
    { label: "12", R: -22.79585, d: 0.2002, nd: 1, elemId: 0, sd: 13.3 },
    { label: "13", R: -127.03405, d: 3.5002, nd: 1.6935, elemId: 8, sd: 15.3 },
    { label: "14", R: -40.79625, d: 60.7864170491, nd: 1, elemId: 0, sd: 15.8 },
  ],

  asph: {},

  var: {
    "14": [60.7864170491, 70.6168670616],
  },
  varLabels: [["14", "BF"]],

  groups: [
    { text: "FRONT BLOCK", fromSurface: "1", toSurface: "7" },
    { text: "REAR BLOCK", fromSurface: "8", toSurface: "14" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  closeFocusM: 0.45,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: rigid unit focus solved at the manufacturer's 0.45 m film-plane MFD; all internal gaps remain fixed and only the rear air distance increases by 9.830450 mm, giving 0.178736× magnification.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  gapSagFrac: 0.95,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
