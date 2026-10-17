import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — PENTAX-110 24mm f/2.8                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,223,982 Example 2 (Asahi Kogaku / Sugiyama).    ║
 * ║  Compact semi-wide-angle design for the Pentax Auto 110 SLR.       ║
 * ║  6 elements / 5 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: unit focus (entire lens translates).                        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent at F = 100; all R, d, sd values scaled ×0.24 to          ║
 * ║    f ≈ 24 mm production focal length.                              ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from combined marginal ray (f/2.8) and chief ray      ║
 * ║    (60% field) heights with 8% mechanical clearance.               ║
 * ║    Front element constrained by 25.5mm filter thread.              ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE STOP:                                            ║
 * ║    The production Pentax-110 has a body-mounted rectangular        ║
 * ║    shutter/aperture behind the lens. STO is therefore placed in    ║
 * ║    the rear back-focus space, 2.5 mm behind L6 at infinity focus, ║
 * ║    inferred from Auto 110 rear-stop body geometry. The patent      ║
 * ║    prescription does not publish the physical shutter plane, so     ║
 * ║    S11-to-image BFD is preserved by splitting it as 2.5 + 20.53.  ║
 * ║                                                                    ║
 * ║  OCR NOTE:                                                         ║
 * ║    Patent scan renders d8 as "0.04"; correct reading is 10.04,     ║
 * ║    confirmed by Σd checksum (50.62) and comparison with            ║
 * ║    Examples 1 and 3 (d8 = 10.74 and 11.60 respectively).          ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "pentax-110-24f28",
  maker: "Pentax",
  name: "PENTAX 110 24mm f/2.8",
  subtitle: "US 4,223,982 Example 2 — Asahi Kogaku / Sugiyama",

  catalog: {
    lensMounts: ["pentax-110"],
    imageFormat: "110",
    specs: ["6 ELEMENTS / 5 GROUPS", "f ≈ 24.0 mm", "F/2.8", "2ω ≈ 48°", "ALL SPHERICAL"],
    elementCount: 6,
    groupCount: 5,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 24, design: 24.0 },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "US 4,223,982",
    patentYear: 1980,
    authors: ["Takahiro Sugiyama"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.5,
      focalLengthMm: -36.1,
      glass: "S-TIH10 (OHARA)",
      apd: false,
      role: "Front negative meniscus convex to object; bends oblique bundles inward for compact diameter.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.9,
      focalLengthMm: 11.6,
      glass: "S-LAH53 (Ohara) / NBFD3 (Hoya)",
      apd: false,
      role: "Primary converging element; high-index lanthanum dense flint minimizes spherical aberration.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61.1,
      focalLengthMm: -12.4,
      glass: "SK5 (Schott) / BACD5 (Hoya)",
      apd: false,
      role: "Diverger and Petzval flattener; barium crown corrects axial color from L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.6,
      focalLengthMm: -11.4,
      glass: "S-TIH14 (OHARA) / FD140-N-SF14 class (762265)",
      apd: false,
      role: "High-dispersion flint element of cemented achromatic doublet (Component IV).",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 10.1,
      glass: "N-LAF34 (Schott) / TAF1 (Hoya)",
      apd: false,
      role: "Low-dispersion partner in cemented doublet; lanthanum flint in the crown role.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 40.9,
      focalLengthMm: 29.0,
      glass: "S-LAH53 (Ohara) / NBFD3 (Hoya)",
      apd: false,
      role: "Rear positive collector concave to object; high-index lanthanum dense flint matches L2.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent F = 100; all R, d, sd scaled ×0.24 to production f ≈ 24 mm.
   *  STO placed behind L6 to reflect the production Auto 110 body shutter/aperture.
   *  The patent does not publish the exact physical shutter plane; split the
   *  S11-to-image BFD as 2.5 mm (L6 rear to STO) + 20.53 mm (STO to image).
   */
  /* (moved from asph) ── Aspherical coefficients (all-spherical design) ── */
  surfaces: [
    /* ── L1: Negative meniscus, convex to object ── */
    { label: "1", R: 18.3672, d: 0.9816, sd: 6.25, medium: 1 },
    { label: "2", R: 10.5744, d: 0.5976, sd: 5.95 },

    /* ── L2: Biconvex positive ── */
    { label: "3", R: 11.8128, d: 2.3208, sd: 5.9, medium: 2 },
    { label: "4", R: -41.652, d: 1.488, sd: 5.25 },

    /* ── L3: Biconcave negative ── */
    { label: "5", R: -11.7552, d: 0.8232, sd: 4.3, medium: 3 },
    { label: "6", R: 19.7496, d: 1.2432, sd: 4.1 },

    /* ── L4 + L5: Cemented achromatic doublet (Component IV, positive) ── */
    { label: "7", R: -15.4776, d: 0.804, sd: 4.2, medium: 4 },
    { label: "8", R: 20.1984, d: 2.4096, sd: 4.45, medium: 5 },
    { label: "9", R: -12.1176, d: 0.0984, sd: 5.25 },

    /* ── L6: Positive meniscus, concave to object ── */
    { label: "10", R: -42.0864, d: 1.3824, sd: 5.25, medium: 6 },
    { label: "11", R: -15.2472, sd: 5.55 },

    /* ── Body-mounted rear shutter/aperture stop ── */
    { label: "STO", R: "flat", d: 20.53 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.35,
    description: "Unit focus (entire optical assembly translates). Body-mounted aperture/shutter.",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates; only BFD changes.
   *  Close focus at 0.35 m; focus extension ≈ 1.93 mm (production).
   *  Since the stop/shutter is fixed in the camera body, the L6-to-STO gap
   *  changes while the STO-to-image distance remains fixed.
   */
  gaps: { "11": { label: "BF", values: [[2.5, 4.43]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 13.5], maxFNumber: 13.5, blades: 2 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (I–II)", fromSurface: "1", toSurface: "4" },
    { text: "REAR (IV–V)", fromSurface: "7", toSurface: "11" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
