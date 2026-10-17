import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon Serenar 100mm f/3.5 I — DE 1,022,027 B / Auslegeschrift 1 022 027.
 *
 * Patent numerical embodiment: f = 100 mm, f/3.5, 2ω = 24°.
 * Prescription is already at production focal length; no scaling is applied.
 *
 * Independent paraxial audit:
 *   EFL = 99.97897 mm
 *   BFD = 48.95125 mm
 *   front vertex to image = 93.80125 mm
 *   Petzval sum = 0.001287 mm^-1 using Σ φ/(n*n')
 *
 * The patent omits clear apertures and stop location. The aperture stop is inferred in the
 * large d5 air space, 2.0 mm behind r5 and 14.0 mm before r6. The stop radius is derived
 * from the design f-number (f/3.5). Semi-diameters are conservative renderer-safe estimates
 * constrained by edge thickness and cross-gap sag clearance, not factory CA data.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-serenar-100mm-f35",
  maker: "Canon",
  name: "CANON SERENAR 100mm f/3.5 I",
  subtitle: "DE 1,022,027 B — 1958 patent, 1953 Serenar LTM production lens",

  catalog: {
    lensMounts: ["leica-ltm"],
    imageFormat: "135-full-frame",
    specs: ["100mm", "f/3.5", "5 elements / 4 groups", "Leica thread mount", "135 full-frame"],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { marketing: 100, design: 99.97897 },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "DE 1,022,027 B",
    patentYear: 1958,
    authors: ["Hiroshi Ito"],
    assignees: ["Canon Camera Co., Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Member I front crown",
      type: "Biconvex Positive",
      nd: 1.6228,
      vd: 56.9,
      focalLengthMm: 33.22,
      glass: "SK10 / S-BSM10 / E-BACD10 class (623/569)",
      role: "Main positive crown of the cemented front achromat.",
      cemented: "I",
    },
    {
      id: 2,
      name: "L12",
      label: "Member I rear flint",
      type: "Biconcave Negative",
      nd: 1.62,
      vd: 36.3,
      focalLengthMm: -50.66,
      glass: "F2 / S-TIM2 class (620/363)",
      role: "Achromatizing flint partner at the chromatically active cemented interface.",
      cemented: "I",
    },
    {
      id: 3,
      name: "L2",
      label: "Member II",
      type: "Positive Meniscus",
      nd: 1.6031,
      vd: 60.7,
      focalLengthMm: 148.78,
      glass: "SK14 / S-BSM14 / BACD14 class (603/607)",
      role: "Weak positive meniscus continuing the front collector and forming the second boundary of the negative air lens.",
    },
    {
      id: 4,
      name: "L3",
      label: "Member III",
      type: "Biconcave Negative",
      nd: 1.5263,
      vd: 51.0,
      focalLengthMm: -33.59,
      glass: "CF2 (HOYA catalog-equivalent; production supplier unspecified)",
      role: "Low-index negative telephoto member and principal Petzval-control element.",
    },
    {
      id: 5,
      name: "L4",
      label: "Member IV",
      type: "Biconvex Positive",
      nd: 1.6237,
      vd: 47.0,
      focalLengthMm: 62.9,
      glass: "BaF8 / E-BAF8 / K-BaF8 class (624/471)",
      role: "Rear positive collector following the strong negative member.",
    },
  ],

  surfaces: [
    { label: "1", R: 40.0, d: 6.0, sd: 14.65, medium: 1 },
    { label: "2", R: -40.4, d: 1.4, sd: 14.65, medium: 2 },
    { label: "3", R: 143.0, d: 6.65, sd: 14.4 },
    { label: "4", R: 30.25, d: 2.0, sd: 13.2, medium: 3 },
    { label: "5", R: 44.5, d: 2.0, sd: 12.4 },
    { label: "STO", R: "flat", d: 14.0 },
    { label: "6", R: -140.0, d: 1.5, sd: 11.2, medium: 4 },
    { label: "7", R: 20.31, d: 9.3, sd: 11.2 },
    { label: "8", R: 41.25, d: 2.0, sd: 11.2, medium: 5 },
    { label: "9", R: -785.89, sd: 11.2 },
  ],

  focus: {
    closeFocusM: 1.0,
    description:
      "Unit focus. The patent gives the infinity prescription only; close focus is modeled by increasing BFD from 48.951 mm to 61.682 mm for Canon's 1 m close-focus specification.",
  },

  gaps: { "9": { label: "BF", values: [[48.951245, 61.681978]] } },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 15 },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "3" },
    { text: "II", fromSurface: "4", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "7" },
    { text: "IV", fromSurface: "8", toSurface: "9" },
  ],
  doublets: [{ text: "I", fromSurface: "1", toSurface: "3" }],

  layout: { scFill: 0.52, yScFill: 0.46 },

  rays: { rayFractions: [-0.78, -0.5, -0.22, 0.22, 0.5, 0.78], offAxisFieldFrac: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
