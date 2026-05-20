import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER APO-LANTHAR 180mm f/4 SL Close Focus     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2003-270529 A, Example 1 (Table 1).              ║
 * ║  Applicant: Cosina Co., Ltd.  Inventor: 蓬田 祥寿.                ║
 * ║  Compact telephoto, positive–negative–positive three-group type.   ║
 * ║  9 elements / 7 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: Unit focus (entire assembly translates).                   ║
 * ║                                                                    ║
 * ║  PATENT IDENTIFICATION NOTE:                                       ║
 * ║    The patent contains two examples. Example 1 (f = 197.9 mm) is  ║
 * ║    the primary embodiment with three S-FPL51 ED menisci. Example  ║
 * ║    2 (f = 178 mm) may be closer to the production design based    ║
 * ║    on barrel-length and focal-length matching. This file           ║
 * ║    transcribes Example 1 at patent scale, unscaled.               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    SDs estimated from marginal ray trace (f/4 EP) with 8%         ║
 * ║    mechanical clearance. Front group capped at 23.0 mm to match   ║
 * ║    the production 49 mm filter thread. Cemented junctions         ║
 * ║    equalized. No patent-published SDs available.                  ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:          ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap (BFD)                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "voigtlander-apo-lanthar-180-f4",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER APO-LANTHAR 180mm f/4 SL Close Focus",
  subtitle: "JP 2003-270529 A Example 1 — Cosina / 蓬田 祥寿",
  specs: ["9 ELEMENTS / 7 GROUPS", "f ≈ 197.9 mm (patent) / 180 mm (marketed)", "F/4", "2ω ≈ 12.4°", "ALL SPHERICAL"],

  focalLengthMarketing: 180,
  focalLengthDesign: 197.9,
  apertureMarketing: 4,
  lensMounts: ["nikon-f","canon-fd","m42","pentax-k","minolta-sr","olympus-om"],
  imageFormat: "135-full-frame",
  patentYear: 2003,
  elementCount: 9,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 179.3,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.035 (ED fluorophosphate crown, ultra-low dispersion)",
      role: "Front group weakest meniscus; lowest marginal ray refraction.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 116.5,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.035",
      role: "Front group middle meniscus; primary convergence contributor.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 106.2,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ +0.035",
      role: "Front group strongest meniscus; largest convergence contribution to G1.",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.3,
      fl: -33.5,
      glass: "S-LAH55 (OHARA)",
      cemented: "D1",
      role: "High-index 'flint role' in D1; telephoto divergence at cemented interface.",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.4,
      fl: 63.6,
      glass: "S-FSL5 (OHARA)",
      cemented: "D1",
      role: "Low-index crown in D1; maximizes Δn at cemented junction for divergence.",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Near-Plano-Concave Negative",
      nd: 1.8061,
      vd: 40.7,
      fl: -20.4,
      glass: "S-LAH53 (OHARA)",
      cemented: "D2",
      role: "Strongest negative element; primary telephoto compression in reversed doublet.",
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.72825,
      vd: 28.3,
      fl: 34.6,
      glass: "S-TIH10 (OHARA)",
      cemented: "D2",
      role: "Positive flint in reversed D2; overcorrected chromatic aberration for APO.",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      fl: 95.4,
      glass: "S-TIH6 (OHARA)",
      role: "Rear corrector positive element; Petzval flattening and lateral color correction.",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.7,
      fl: -113.2,
      glass: "S-LAH53 (OHARA)",
      role: "Rear corrector negative meniscus; field flattening and astigmatism balancing.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // G1 — Front Collector (positive): three air-spaced ED menisci
    { label: "1", R: 75.791, d: 5.31, nd: 1.497, elemId: 1, sd: 23.0 },
    { label: "2", R: 496.439, d: 0.3, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "3", R: 34.299, d: 7.87, nd: 1.497, elemId: 2, sd: 23.0 },
    { label: "4", R: 77.742, d: 0.3, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "5", R: 40.526, d: 6.81, nd: 1.497, elemId: 3, sd: 23.0 },
    { label: "6", R: 165.053, d: 3.25, nd: 1.0, elemId: 0, sd: 20.0 },

    // G2 — Negative Middle: two cemented doublets
    // D1: L21 (S-LAH55) + L22 (S-FSL5)
    { label: "7", R: 124.264, d: 2.0, nd: 1.834, elemId: 4, sd: 18.0 },
    { label: "8", R: 22.803, d: 6.87, nd: 1.48749, elemId: 5, sd: 18.0 },
    { label: "9", R: 86.224, d: 3.46, nd: 1.0, elemId: 0, sd: 15.3 },
    // D2: L23 (S-LAH51) + L24 (S-TIH4) — reversed dispersion doublet
    { label: "10", R: -5733.84, d: 2.0, nd: 1.8061, elemId: 6, sd: 14.0 },
    { label: "11", R: 16.465, d: 6.39, nd: 1.72825, elemId: 7, sd: 14.0 },
    { label: "12", R: 47.51, d: 9.5, nd: 1.0, elemId: 0, sd: 12.5 },

    // Aperture stop — STO position inferred from Fig. 1 iris placement;
    // 19.04 mm gap split approximately 50/50.
    { label: "STO", R: 1e15, d: 9.54, nd: 1.0, elemId: 0, sd: 11.4 },

    // G3 — Rear Corrector (weakly positive): two air-spaced singlets
    { label: "13", R: 71.108, d: 2.15, nd: 1.80518, elemId: 8, sd: 10.3 },
    { label: "14", R: 947.917, d: 2.23, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "15", R: -33.161, d: 2.0, nd: 1.8061, elemId: 9, sd: 9.5 },
    { label: "16", R: -53.488, d: 70.51, nd: 1.0, elemId: 0, sd: 9.5 },
  ],

  /* ── Aspherical coefficients — all spherical design ── */
  asph: {},

  /* ── Variable air spacings — unit focus ──
   *  Unit focus: entire lens translates; only BFD changes.
   *  BFD_inf = 70.51 mm, BFD_close = 130.39 mm (computed for MFD 1.2 m
   *  at the patent EFL of 197.9 mm via thick-system conjugate equation).
   */
  var: {
    "16": [70.51, 130.39],
  },
  varLabels: [["16", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (FRONT)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (MIDDLE)", fromSurface: "7", toSurface: "12" },
    { text: "G3 (REAR)", fromSurface: "13", toSurface: "16" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.2,
  focusDescription: "Unit focus — entire optical assembly translates forward.",

  /* ── Aperture configuration ── */
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
