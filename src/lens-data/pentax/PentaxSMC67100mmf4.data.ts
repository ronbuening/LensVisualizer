import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — smc Pentax 67 Macro 100mm f/4                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 6,002,533, Embodiment 1, Table 1 (Yoneyama /       ║
 * ║  Asahi Kogaku Kogyo). This file transcribes the main lens LM only,  ║
 * ║  retaining the patent's surface labels r7-r16 for traceability.     ║
 * ║                                                                    ║
 * ║  6 elements / 4 air-separated groups, all spherical.                ║
 * ║  Patent functional grouping: front group LM1-LM3 and rear group     ║
 * ║  LM4-LM6, with a diaphragm in d11.                                  ║
 * ║                                                                    ║
 * ║  Focus: Table 1 gives one main-lens variable spacing, d11 =         ║
 * ║  13.30-15.58 mm, for use with the close-up attachment. The patent   ║
 * ║  places the diaphragm 4.00 mm before r12, so d11 is split here as   ║
 * ║  r11→STO = 9.30-11.58 mm and STO→r12 = 4.00 mm. Back focus values   ║
 * ║  are paraxially computed from the prescription.                     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: Patent Table 1 does not list clear         ║
 * ║  apertures. SDs were estimated from a paraxial f/4 marginal-ray +   ║
 * ║  44.1 mm field chief-ray envelope, then constrained by sd/|R| <     ║
 * ║  0.90 at tight spherical surfaces, element SD ratio <= 1.25, and    ║
 * ║  cross-gap sag intrusion checks.                                    ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the main lens optical design:  ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)     ║
 * ║    ✓ Aperture stop and variable focus gaps                          ║
 * ║    ✗ Does not include the close-up attachment/converter             ║
 * ║    ✗ Does not include filters or mechanical parts                   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-smc-67-100mm-f4",
  maker: "Pentax",
  name: "PENTAX SMC 67 Macro 100mm f/4",
  subtitle: "US 6,002,533 Embodiment 1 — Asahi / Yoneyama",
  specs: ["6 elements / 4 groups", "f = 99.97 mm", "F/4", "2ω = 47.6° over 6×7", "all spherical"],

  focalLengthMarketing: 100,
  focalLengthDesign: 99.9687,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["pentax-67"],
  imageFormat: "6x7",
  patentYear: 1999,
  elementCount: 6,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "LM1",
      label: "LM1",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 43.7,
      fl: 120.87,
      glass: "S-LAM52 (OHARA, legacy/NR)",
      nC: 1.71511,
      nF: 1.73159,
      ng: 1.74098,
      role: "Front positive collector; high-index flint-region lanthanum glass reduces Petzval burden for a strong positive meniscus.",
    },
    {
      id: 2,
      name: "LM2",
      label: "LM2",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.3,
      fl: 70.27,
      glass: "S-LAL12 (OHARA)",
      nC: 1.67419,
      nF: 1.68644,
      ng: 1.69314,
      cemented: "D1",
      role: "Positive crown-side member of the front cemented doublet; provides the principal positive power ahead of the stop.",
    },
    {
      id: 3,
      name: "LM3",
      label: "LM3",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.3,
      fl: -46.6,
      glass: "S-TIM2 (OHARA)",
      nC: 1.61502,
      nF: 1.63212,
      ng: 1.64218,
      cemented: "D1",
      role: "Negative flint member of the front cemented doublet; supplies negative power, chromatic balancing, and a large negative Petzval term at r11.",
    },
    {
      id: 4,
      name: "LM4",
      label: "LM4",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.8,
      fl: 118.73,
      glass: "S-LAM2 (OHARA)",
      nC: 1.73905,
      nF: 1.75566,
      ng: 1.76506,
      role: "First rear-group positive meniscus, immediately behind the stop; begins rear-half reconvergence and contributes field balancing.",
    },
    {
      id: 5,
      name: "LM5",
      label: "LM5",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.8,
      fl: -47.77,
      glass: "S-TIH13 (OHARA)",
      nC: 1.73309,
      nF: 1.75975,
      ng: 1.77599,
      cemented: "D2",
      role: "Dense flint member of the rear cemented doublet; provides high dispersion and a strong negative Petzval contribution at r14.",
    },
    {
      id: 6,
      name: "LM6",
      label: "LM6",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 43.7,
      fl: 55.51,
      glass: "S-LAM52 (OHARA, legacy/NR)",
      nC: 1.71511,
      nF: 1.73159,
      ng: 1.74098,
      cemented: "D2",
      role: "Final positive meniscus and rear power element; uses the same glass as LM1 to balance the outer positive elements.",
    },
  ],

  surfaces: [
    { label: "7", R: 46.5, d: 4.4, nd: 1.72, elemId: 1, sd: 25.0 },
    { label: "8", R: 95.9, d: 0.2, nd: 1.0, elemId: 0, sd: 22.5 },
    { label: "9", R: 25.064, d: 4.8, nd: 1.6779, elemId: 2, sd: 22.3 },
    { label: "10", R: 48.8, d: 2.8, nd: 1.62004, elemId: 3, sd: 18.45 },
    { label: "11", R: 17.75, d: 9.3, nd: 1.0, elemId: 0, sd: 15.9 },
    { label: "STO", R: 1e15, d: 4.0, nd: 1.0, elemId: 0, sd: 9.4467 },
    { label: "12", R: -83.484, d: 2.5, nd: 1.744, elemId: 4, sd: 12.8 },
    { label: "13", R: -43.469, d: 3.45, nd: 1.0, elemId: 0, sd: 13.8 },
    { label: "14", R: -28.598, d: 9.0, nd: 1.74077, elemId: 5, sd: 16.0 },
    { label: "15", R: -168.97, d: 10.0, nd: 1.72, elemId: 6, sd: 19.8 },
    { label: "16", R: -33.124, d: 77.425842, nd: 1.0, elemId: 0, sd: 24.5 },
  ],

  asph: {},

  var: {
    "11": [9.3, 11.58],
    "16": [77.425842, 76.823842],
  },
  varLabels: [
    ["11", "r11→STO"],
    ["16", "BF"],
  ],

  groups: [
    { text: "G1", fromSurface: "7", toSurface: "8" },
    { text: "G2", fromSurface: "9", toSurface: "11" },
    { text: "G3", fromSurface: "12", toSurface: "13" },
    { text: "G4", fromSurface: "14", toSurface: "16" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
  ],

  closeFocusM: 0.443,
  focusDescription:
    "Patent Table 1 provides only d11 variation for the main lens while used with the close-up attachment. The data file splits d11 around the fixed stop and varies computed back focus; published standalone close focus is 0.443 m.",
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 8,
  maxFstop: 32,
  scFill: 0.56,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
