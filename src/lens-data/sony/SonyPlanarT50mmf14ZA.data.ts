import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SONY PLANAR T* 50mm F1.4 ZA SSM (SAL50F14Z)         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2014/0071331 A1, Example 4 (Table 10–12).        ║
 * ║  Katou, Uehara, Otake — Sony Corporation.                         ║
 * ║  Modified double-Gauss (Planar) with rear focus.                  ║
 * ║  8 elements / 5 groups, 2 aspherical surfaces.                    ║
 * ║  Focus: rear-focus — G1 fixed, STO + G2 move as unit.            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from marginal ray at design Fno = 1.45 with chief    ║
 * ║    ray at 60% field, combined with 8% mechanical clearance.       ║
 * ║    Front elements (1–4) constrained by cross-gap sag intrusion    ║
 * ║    at the 0.370 mm L1–L2 air gap; SDs reduced accordingly.       ║
 * ║    Front element SD consistent with 72 mm filter thread.          ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-planar-t-50f14-za",
  maker: "Sony",
  name: "SONY PLANAR T* 50mm f/1.4 ZA SSM",
  subtitle: "US 2014/0071331 A1 EXAMPLE 4 — SONY / KATOU",
  specs: ["8 ELEMENTS / 5 GROUPS", "f = 51.5 mm", "F/1.45", "2ω ≈ 46.8°", "2 ASPHERICAL SURFACES"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 51.5,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentYear: 2014,
  elementCount: 8,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.834805,
      vd: 42.7,
      fl: 57.0,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Front collector; high-index lanthanum glass reduces surface angles at f/1.4.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.592703,
      vd: 35.5,
      fl: -48.1,
      glass: "S-FTM16 (OHARA)",
      apd: false,
      role: "G1F diverging partner; achromatizes with L1 and extends back focus.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.851348,
      vd: 40.1,
      fl: 31.9,
      glass: "E-LASFH13 (HIKARI)",
      apd: false,
      cemented: "G1R",
      role: "Main positive element of G1R; aspherical front surface controls spherical aberration at f/1.4.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.61293,
      vd: 37.0,
      fl: -38.8,
      glass: "E-FD7 class (HOYA/HIKARI equivalent, 613/370)",
      apd: false,
      cemented: "G1R",
      role: "G1R corrector; cemented with L3, achromatizes via index step at nearly flat junction.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.8,
      fl: -19.3,
      glass: "S-TIF4 (OHARA)",
      apd: false,
      cemented: "Da",
      role: "Strongest negative element; inner negative of G2, controls high-order spherical aberration.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 22.2,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "Da",
      role: "G2 powerhouse; highest nd in system, primary convergence in focus group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      fl: -65.9,
      glass: "E-FD15 (HIKARI)",
      apd: false,
      cemented: "Db",
      role: "Field flattener; lowest νd in system, provides dispersion for chromatic correction at Db junction.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.768015,
      vd: 49.2,
      fl: 29.5,
      glass: "E-LASKH2 (HIKARI)",
      apd: false,
      cemented: "Db",
      role: "Final positive element; aspherical rear surface corrects field-dependent aberrations.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* ── G1F: L1 (biconvex positive) ── */
    { label: "1", R: 60.388, d: 6.04, nd: 1.834805, elemId: 1, sd: 24.0 },
    { label: "2", R: -214.645, d: 0.37, nd: 1.0, elemId: 0, sd: 18.5 },

    /* ── G1F: L2 (biconcave negative) ── */
    { label: "3", R: -156.603, d: 1.3, nd: 1.592703, elemId: 2, sd: 18.2 },
    { label: "4", R: 35.0, d: 3.0, nd: 1.0, elemId: 0, sd: 18.0 },

    /* ── G1R: L3 + L4 cemented doublet ── */
    { label: "5A", R: 28.547, d: 7.17, nd: 1.851348, elemId: 3, sd: 18.0 },
    { label: "6", R: -503.384, d: 1.2, nd: 1.61293, elemId: 4, sd: 16.1 },
    { label: "7", R: 25.007, d: 14.509, nd: 1.0, elemId: 0, sd: 15.8 },

    /* ── Aperture stop — moves with G2 ── */
    { label: "STO", R: 1e15, d: 6.333, nd: 1.0, elemId: 0, sd: 13.0 },

    /* ── G2: L5 + L6 cemented doublet (Da) ── */
    { label: "9", R: -21.841, d: 2.8, nd: 1.64769, elemId: 5, sd: 13.2 },
    { label: "10", R: 30.673, d: 7.94, nd: 1.883, elemId: 6, sd: 13.6 },
    { label: "11", R: -47.908, d: 0.2, nd: 1.0, elemId: 0, sd: 14.3 },

    /* ── G2: L7 + L8 cemented doublet (Db) ── */
    { label: "12", R: 247.339, d: 2.13, nd: 1.69895, elemId: 7, sd: 14.3 },
    { label: "13", R: 38.671, d: 7.0, nd: 1.768015, elemId: 8, sd: 14.1 },
    { label: "14A", R: -50.305, d: 36.098, nd: 1.0, elemId: 0, sd: 14.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "5A": {
      K: 0.0,
      A4: -1.05e-6,
      A6: -6.57e-10,
      A8: -1.73e-12,
      A10: 4.21e-15,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: -1.6554,
      A4: 5.1e-6,
      A6: -9.77e-10,
      A8: 2.06e-11,
      A10: -8.11e-15,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (rear focus) ──
   *  G1 fixed; STO + G2 move as a unit toward the object at close focus.
   *  d7 (G1R rear → STO) decreases; BF (L8 rear → image) increases.
   *  d_STO (STO → L5 front = 6.333 mm) is constant.
   */
  var: {
    "7": [14.509, 6.784],
    "14A": [36.098, 43.823],
  },
  varLabels: [
    ["7", "D7"],
    ["14A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (FIXED)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (FOCUS)", fromSurface: "9", toSurface: "14A" },
  ],
  doublets: [
    { text: "G1R", fromSurface: "5A", toSurface: "7" },
    { text: "Da", fromSurface: "9", toSurface: "11" },
    { text: "Db", fromSurface: "12", toSurface: "14A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription: "Rear focus — G1 fixed, aperture stop + G2 move as a unit (SSM drive).",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  apertureBlades: 9,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
