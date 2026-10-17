import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
  schema: 2,
  key: "pentax-smc-67-100mm-f4",
  maker: "Pentax",
  name: "PENTAX SMC 67 MACRO 100mm f/4",
  subtitle: "US 6,002,533 Embodiment 1 — Asahi / Yoneyama",

  catalog: {
    lensMounts: ["pentax-67"],
    imageFormat: "6x7",
    specs: ["6 elements / 4 groups", "f = 99.97 mm", "F/4", "2ω = 47.6° over 6×7", "all spherical"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { marketing: 100, design: 99.9687 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "US 6,002,533",
    patentYear: 1999,
    authors: ["Shuji Yoneyama"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "LM1",
      label: "LM1",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 43.7,
      focalLengthMm: 120.87,
      glass: "S-LAM52 (OHARA, legacy/NR)",
      role: "Front positive collector; high-index flint-region lanthanum glass reduces Petzval burden for a strong positive meniscus.",
      nC: 1.71511,
      nF: 1.73159,
      ng: 1.74098,
    },
    {
      id: 2,
      name: "LM2",
      label: "LM2",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.3,
      focalLengthMm: 70.27,
      glass: "S-LAL12 (OHARA)",
      role: "Positive crown-side member of the front cemented doublet; provides the principal positive power ahead of the stop.",
      cemented: "D1",
      nC: 1.67419,
      nF: 1.68644,
      ng: 1.69314,
    },
    {
      id: 3,
      name: "LM3",
      label: "LM3",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.3,
      focalLengthMm: -46.6,
      glass: "S-TIM2 (OHARA)",
      role: "Negative flint member of the front cemented doublet; supplies negative power, chromatic balancing, and a large negative Petzval term at r11.",
      cemented: "D1",
      nC: 1.61502,
      nF: 1.63212,
      ng: 1.64218,
    },
    {
      id: 4,
      name: "LM4",
      label: "LM4",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.8,
      focalLengthMm: 118.73,
      glass: "S-LAM2 (OHARA)",
      role: "First rear-group positive meniscus, immediately behind the stop; begins rear-half reconvergence and contributes field balancing.",
      nC: 1.73905,
      nF: 1.75566,
      ng: 1.76506,
    },
    {
      id: 5,
      name: "LM5",
      label: "LM5",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.8,
      focalLengthMm: -47.77,
      glass: "S-TIH13 (OHARA)",
      role: "Dense flint member of the rear cemented doublet; provides high dispersion and a strong negative Petzval contribution at r14.",
      cemented: "D2",
      nC: 1.73309,
      nF: 1.75975,
      ng: 1.77599,
    },
    {
      id: 6,
      name: "LM6",
      label: "LM6",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 43.7,
      focalLengthMm: 55.51,
      glass: "S-LAM52 (OHARA, legacy/NR)",
      role: "Final positive meniscus and rear power element; uses the same glass as LM1 to balance the outer positive elements.",
      cemented: "D2",
      nC: 1.71511,
      nF: 1.73159,
      ng: 1.74098,
    },
  ],

  surfaces: [
    { label: "7", R: 46.5, d: 4.4, sd: 25.0, medium: 1 },
    { label: "8", R: 95.9, d: 0.2, sd: 22.5 },
    { label: "9", R: 25.064, d: 4.8, sd: 22.3, medium: 2 },
    { label: "10", R: 48.8, d: 2.8, sd: 18.45, medium: 3 },
    { label: "11", R: 17.75, sd: 15.9 },
    { label: "STO", R: "flat", d: 4.0 },
    { label: "12", R: -83.484, d: 2.5, sd: 12.8, medium: 4 },
    { label: "13", R: -43.469, d: 3.45, sd: 13.8 },
    { label: "14", R: -28.598, d: 9.0, sd: 16.0, medium: 5 },
    { label: "15", R: -168.97, d: 10.0, sd: 19.8, medium: 6 },
    { label: "16", R: -33.124, sd: 24.5 },
  ],

  focus: {
    closeFocusM: 0.443,
    // Patent read 2026-10-06, no published focus row: Patent Table 1 prints d11 = 13.30~15.58 mm only for the main
    // lens with the close-up attachment (M = -0.455 to -1.087); it gives no standalone 0.443 m spacing or back focus.
    description:
      "Patent Table 1 provides only d11 variation for the main lens while used with the close-up attachment. The data file splits d11 around the fixed stop and varies computed back focus; published standalone close focus is 0.443 m.",
  },

  gaps: { "11": { label: "r11→STO", values: [[9.3, 11.58]] }, "16": { label: "BF", values: [[77.425842, 76.823842]] } },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

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

  layout: { scFill: 0.56, yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
