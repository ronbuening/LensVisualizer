import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  diameter are unpublished. Figure 1 gives r7→STO/d7 ≈ 0.676. The stop       ║
 * ║  radius is derived from the design f-number, f/2.8.                         ║
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
  schema: 2,
  key: "mamiya-sekor-c-55mm-f2-8-n",
  maker: "Mamiya",
  name: "MAMIYA-SEKOR C 55mm f/2.8 N",
  subtitle: "JP S55-45883 B2 Example 1 — uniformly scaled ×0.55; strong production correlation",

  catalog: {
    lensMounts: ["mamiya-645"],
    imageFormat: "645",
    specs: ["8 ELEMENTS / 6 GROUPS", "f = 54.9999 mm", "F/2.8", "65°", "ALL-SPHERICAL"],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: 55, design: 54.9999050569 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "JP S55-45883 B2",
    patentYear: 1980,
    authors: ["Yusuke Arisaka"],
    assignees: ["Mamiya Koki Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: -65.042872,
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
      focalLengthMm: 189.41533,
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
      focalLengthMm: 20.570317,
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
      focalLengthMm: -23.213313,
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
      focalLengthMm: 68.296137,
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
      focalLengthMm: -21.668451,
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
      focalLengthMm: 36.308629,
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
      focalLengthMm: 85.238773,
      glass: "694532 — catalog-equivalent class (vendor unresolved)",
      apd: false,
      role: "Rear positive meniscus completing the image-side correction block.",
    },
  ],

  surfaces: [
    { label: "1", R: 41.0674, d: 2.49975, sd: 22, medium: 1 },
    { label: "2", R: 18.09225, d: 15.983, sd: 16.2 },
    { label: "3", R: -1933.25, d: 5.4021, sd: 16.2, medium: 2 },
    { label: "4", R: -104.30475, d: 0.2002, sd: 16 },
    { label: "5", R: 35.7071, d: 8.05915, sd: 14.7, medium: 3 },
    { label: "6", R: -25.81645, d: 5.0204, sd: 14.7, medium: 4 },
    { label: "7", R: 28.7749, d: 6.288997, sd: 14.7 },
    { label: "STO", R: "flat", d: 3.014253 },
    { label: "8", R: -68.90125, d: 3.00025, sd: 10.5, medium: 5 },
    { label: "9", R: -28.5692, d: 1.2001, sd: 10.27 },
    { label: "10", R: -18.82265, d: 1.49985, sd: 10.27, medium: 6 },
    { label: "11", R: 96.8847, d: 5.5, sd: 13.3, medium: 7 },
    { label: "12", R: -22.79585, d: 0.2002, sd: 13.3 },
    { label: "13", R: -127.03405, d: 3.5002, sd: 15.3, medium: 8 },
    { label: "14", R: -40.79625, sd: 15.8 },
  ],

  focus: {
    closeFocusM: 0.45,
    description:
      "CONSTRAINED_RECONSTRUCTION: rigid unit focus solved at the manufacturer's 0.45 m film-plane MFD; all internal gaps remain fixed and only the rear air distance increases by 9.830450 mm, giving 0.178736× magnification.",
  },

  gaps: { "14": { label: "BF", values: [[60.7864170491, 70.6168670616]] } },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "FRONT BLOCK", fromSurface: "1", toSurface: "7" },
    { text: "REAR BLOCK", fromSurface: "8", toSurface: "14" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  layout: { yScFill: 0.44 },

  checks: { gapSagFrac: 0.95 },
} satisfies LensDataV2Input;

export default LENS_DATA;
