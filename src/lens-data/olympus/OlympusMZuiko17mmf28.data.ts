import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — OLYMPUS M.ZUIKO DIGITAL 17mm f/2.8                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 8,755,132 B2, Example 1 (Olympus / Yamada).       ║
 * ║  Compact Micro Four Thirds retrofocus pancake wide-angle.          ║
 * ║  6 elements / 4 groups, 2 aspherical surfaces on 1 element.        ║
 * ║  Focus: unit focus; the full optical unit translates.              ║
 * ║                                                                    ║
 * ║  NOTE ON SENSOR COVER GLASS:                                       ║
 * ║    Patent surfaces 12–13 are the sensor cover-glass stack. Per     ║
 * ║    project convention they are omitted here and folded into the    ║
 * ║    final BFD: 17.229 + 4.082 / 1.51633 + 0.745 = 20.666026 mm.    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear apertures. SDs below were     ║
 * ║    derived from combined marginal/chief-ray paraxial traces at     ║
 * ║    FNO 2.897 and IH = 11.45 mm, then constrained by edge           ║
 * ║    thickness, sd/|R| < 0.90, and element SD ratio <= 1.25.        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane ║
 * ║    ✓ Aperture stop and folded focus/BFD travel                    ║
 * ║    ✗ Sensor cover glass, filters, and mechanical parts omitted    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-mzuiko-17mm-f28",
  maker: "Olympus",
  name: "OLYMPUS M.ZUIKO DIGITAL 17mm f/2.8",
  subtitle: "US 8,755,132 B2 Example 1 — Olympus / Yamada & Kimata",
  specs: [
    "6 elements / 4 groups",
    "f = 17 mm (design 17.30 mm)",
    "f/2.8 (design F/2.897)",
    "64.9° diagonal AoV",
    "2 aspherical surfaces / 1 aspherical element",
  ],

  focalLengthMarketing: 17,
  focalLengthDesign: 17.2985,
  apertureMarketing: 2.8,
  apertureDesign: 2.897,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentYear: 2014,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Front negative meniscus",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.23,
      fl: -21.96,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Sole negative first-group element; establishes the retrofocus front negative power and long back focus.",
    },
    {
      id: 2,
      name: "L21",
      label: "SU21 positive element",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.16,
      fl: 11.28,
      glass: "S-LAH60 (OHARA)",
      apd: false,
      role: "High-index positive component of the object-side cemented doublet.",
      cemented: "SU21",
    },
    {
      id: 3,
      name: "L22",
      label: "SU21 negative element",
      type: "Biconcave Negative",
      nd: 1.57501,
      vd: 41.5,
      fl: -22.74,
      glass: "S-TIL27 (OHARA)",
      apd: false,
      role: "Negative partner of SU21; its external shape is constrained by the patent's field-curvature conditions.",
      cemented: "SU21",
    },
    {
      id: 4,
      name: "L23",
      label: "SU22 negative element",
      type: "Biconcave Negative",
      nd: 1.75211,
      vd: 25.05,
      fl: -10.46,
      glass: "FF8 (HOYA)",
      apd: false,
      role: "High-dispersion dense-flint color-correcting member of the image-side cemented doublet.",
      cemented: "SU22",
    },
    {
      id: 5,
      name: "L24",
      label: "SU22 positive element",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.68,
      fl: 11.89,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "High-index, higher-Abbe positive partner of SU22; balances L23 chromatic power.",
      cemented: "SU22",
    },
    {
      id: 6,
      name: "L25",
      label: "Rear double-aspheric field element",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.8061,
      vd: 40.88,
      fl: 30,
      glass: "S-LAH53 (OHARA) / P-LASF47 class (806/409)",
      apd: false,
      role: "Terminal biconvex positive asphere; controls field curvature, distortion, and exit-pupil position.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 58.585, d: 0.932, nd: 1.48749, elemId: 1, sd: 7.3 },
    { label: "2", R: 9.004, d: 2.478, nd: 1, elemId: 0, sd: 6.75 },
    { label: "3", R: 18.088, d: 3.046, nd: 1.834, elemId: 2, sd: 5.95 },
    { label: "4", R: -18.088, d: 0.804, nd: 1.57501, elemId: 3, sd: 5.25 },
    { label: "5", R: 47.964, d: 1.841, nd: 1, elemId: 0, sd: 4.85 },
    { label: "STO", R: 1e15, d: 4.212, nd: 1, elemId: 0, sd: 3.22 },
    { label: "7", R: -10.211, d: 0.752, nd: 1.75211, elemId: 4, sd: 6.1 },
    { label: "8", R: 35.401, d: 4.899, nd: 1.72916, elemId: 5, sd: 7.35 },
    { label: "9", R: -10.81, d: 0.15, nd: 1, elemId: 0, sd: 7.35 },
    { label: "10A", R: 44.588, d: 3, nd: 1.8061, elemId: 6, sd: 9.25 },
    { label: "11A", R: -51.256, d: 20.6660261421, nd: 1, elemId: 0, sd: 9.65 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "10A": {
      K: -13.0866,
      A4: -4.046e-6,
      A6: 9.8902e-8,
      A8: 1.4424e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: -8.3127,
      A4: -6.2139e-6,
      A6: 8.9444e-8,
      A8: 5.679e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable gaps ── */
  var: {
    // Unit focus: close-focus BFD solved for manufacturer MFD = 0.2 m measured from the image plane.
    "11A": [20.6660261421, 22.6100389954],
  },
  varLabels: [["11A", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "11A" },
  ],

  doublets: [
    { text: "SU21", fromSurface: "3", toSurface: "5" },
    { text: "SU22", fromSurface: "7", toSurface: "9" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.2,
  focusDescription:
    "Unit focus. The full optical system translates; the sensor cover glass is omitted and folded into the BFD.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ── */
  scFill: 0.56,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
