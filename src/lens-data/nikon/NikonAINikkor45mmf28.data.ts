import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — Nikon AI Nikkor 45mm f/2.8P                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2003-005030 A, Example 6 (Nikon / K. Ōshita).     ║
 * ║  Compact all-spherical Tessar-type standard lens.                  ║
 * ║  4 elements / 3 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: unit focusing; only the rear image-space gap changes.      ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription is normalized to f = 100.000. All radii,    ║
 * ║    thicknesses, back focus, and inferred semi-diameters are scaled  ║
 * ║    ×0.45 to the production 45 mm focal-length class.               ║
 * ║                                                                    ║
 * ║  NOTE ON SURFACE LABELS:                                           ║
 * ║    The patent table includes the aperture stop as row 3. The data   ║
 * ║    file labels it STO and preserves the remaining patent row        ║
 * ║    numbering as surfaces 4–8.                                      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear semi-diameters. Values below   ║
 * ║    were estimated by paraxial marginal/chief-ray tracing at the     ║
 * ║    patent field and aperture, then constrained by element edge      ║
 * ║    thickness and cross-gap sag checks. Corner wide-open rays are    ║
 * ║    allowed to vignette rather than forcing impossible rear-doublet  ║
 * ║    diameters.                                                      ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane ║
 * ║    ✓ Aperture stop and unit-focus rear spacing                     ║
 * ║    ✗ No filters, sensor glass, mechanical barrel, or parent design ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-ai-nikkor-45mm-f28-p",
  maker: "Nikon",
  name: "NIKON AI NIKKOR 45mm f/2.8 P",
  subtitle: "JP 2003-005030 A Example 6 — Nikon / Kōichi Ōshita",
  specs: ["4 elements / 3 groups", "f ≈ 45.0 mm", "f/2.8 (patent FNO 2.88)", "2ω = 50.3° patent", "all-spherical"],

  focalLengthMarketing: 45,
  focalLengthDesign: 44.9999,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2003-005030 A",
  patentAuthors: ["Koichi Ohshita"],
  patentAssignees: ["Nikon Corp"],
  patentYear: 2003,
  elementCount: 4,
  groupCount: 3,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.816,
      vd: 46.63,
      fl: 28.043,
      glass: "S-LAH59 (OHARA; 816/466 class)",
      apd: false,
      dPgF: -0.0092,
      nC: 1.81075,
      nF: 1.82825,
      ng: 1.838,
      role: "High-index front positive collector; weak rear curvature keeps spherical aberration in check with the forward stop.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.07,
      fl: -18.074,
      glass: "S-TIM28 (OHARA; 689/311 class)",
      apd: false,
      dPgF: 0.0092,
      nC: 1.6825,
      nF: 1.70467,
      ng: 1.71797,
      role: "Central biconcave diverging element; its rear surface is one of the principal field-flattening surfaces.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.07,
      fl: -34.078,
      glass: "S-TIM28 (OHARA; 689/311 class)",
      apd: false,
      dPgF: 0.0092,
      nC: 1.6825,
      nF: 1.70467,
      ng: 1.71797,
      role: "Negative front member of the rear cemented doublet; shares the same flint as L2.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.77,
      fl: 16.018,
      glass: "S-LAH58 (OHARA; 883/408 class)",
      apd: false,
      dPgF: -0.0088,
      nC: 1.87656,
      nF: 1.89822,
      ng: 1.9105,
      role: "Very high-index positive rear element; provides rear-group convergence and supports Petzval correction at the cemented interface.",
      cemented: "D1",
    },
  ],

  surfaces: [
    { label: "1", R: 22.1346, d: 3.911085, nd: 1.816, elemId: 1, sd: 10.1 },
    { label: "2", R: 623.04723, d: 1.564425, nd: 1.0, elemId: 0, sd: 8.6 },
    { label: "STO", R: 1e15, d: 1.759995, nd: 1.0, elemId: 0, sd: 6.7564 },
    { label: "4", R: -32.008455, d: 1.271115, nd: 1.68893, elemId: 2, sd: 7.8 },
    { label: "5", R: 20.709495, d: 3.422205, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "6", R: -105.695595, d: 1.271115, nd: 1.68893, elemId: 3, sd: 9.8 },
    { label: "7", R: 30.329415, d: 4.30218, nd: 1.883, elemId: 4, sd: 9.7 },
    { label: "8", R: -24.740865, d: 37.92726, nd: 1.0, elemId: 0, sd: 9.95 },
  ],

  asph: {},

  var: {
    "8": [37.92726, 43.66026],
  },
  varLabels: [["8", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "4", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "8" },
  ],

  doublets: [{ text: "D1", fromSurface: "6", toSurface: "8" }],

  closeFocusM: 0.45,
  focusDescription:
    "Unit focusing: the whole optical cell extends about 5.73 mm from infinity to Nikon's 0.45 m minimum focus distance.",

  nominalFno: 2.8,
  apertureBlades: 7,
  apertureBladeRoundedness: 1,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.42,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
