import type { LensDataInput } from "../../types/optics.js";

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
  key: "pentax-110-24f28",
  maker: "Pentax",
  name: "PENTAX-110 24mm f/2.8",
  subtitle: "US 4,223,982 Example 2 — Asahi Kogaku / Sugiyama",
  specs: ["6 ELEMENTS / 5 GROUPS", "f ≈ 24.0 mm", "F/2.8", "2ω ≈ 48°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 24,
  focalLengthDesign: 24.0,
  apertureMarketing: 2.8,
  lensMounts: ["pentax-110"],
  imageFormat: "110",
  patentYear: 1980,
  elementCount: 6,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.5,
      fl: -36.1,
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
      fl: 11.6,
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
      fl: -12.4,
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
      fl: -11.4,
      glass: "TiSF6 (Schott) / FD4 (Hoya)",
      apd: false,
      cemented: "D1",
      role: "High-dispersion flint element of cemented achromatic doublet (Component IV).",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 10.1,
      glass: "N-LAF34 (Schott) / TAF1 (Hoya)",
      apd: false,
      cemented: "D1",
      role: "Low-dispersion partner in cemented doublet; lanthanum flint in the crown role.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 40.9,
      fl: 29.0,
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
  surfaces: [
    /* ── L1: Negative meniscus, convex to object ── */
    { label: "1", R: 18.3672, d: 0.9816, nd: 1.72825, elemId: 1, sd: 6.25 },
    { label: "2", R: 10.5744, d: 0.5976, nd: 1.0, elemId: 0, sd: 5.95 },

    /* ── L2: Biconvex positive ── */
    { label: "3", R: 11.8128, d: 2.3208, nd: 1.8061, elemId: 2, sd: 5.9 },
    { label: "4", R: -41.652, d: 1.488, nd: 1.0, elemId: 0, sd: 5.25 },

    /* ── L3: Biconcave negative ── */
    { label: "5", R: -11.7552, d: 0.8232, nd: 1.58913, elemId: 3, sd: 4.3 },
    { label: "6", R: 19.7496, d: 1.2432, nd: 1.0, elemId: 0, sd: 4.1 },

    /* ── L4 + L5: Cemented achromatic doublet (Component IV, positive) ── */
    { label: "7", R: -15.4776, d: 0.804, nd: 1.76182, elemId: 4, sd: 4.2 },
    { label: "8", R: 20.1984, d: 2.4096, nd: 1.7725, elemId: 5, sd: 4.45 },
    { label: "9", R: -12.1176, d: 0.0984, nd: 1.0, elemId: 0, sd: 5.25 },

    /* ── L6: Positive meniscus, concave to object ── */
    { label: "10", R: -42.0864, d: 1.3824, nd: 1.8061, elemId: 6, sd: 5.25 },
    { label: "11", R: -15.2472, d: 2.5, nd: 1.0, elemId: 0, sd: 5.55 },

    /* ── Body-mounted rear shutter/aperture stop ── */
    { label: "STO", R: 1e15, d: 20.53, nd: 1.0, elemId: 0, sd: 4.1 },
  ],

  /* ── Aspherical coefficients (all-spherical design) ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates; only BFD changes.
   *  Close focus at 0.35 m; focus extension ≈ 1.93 mm (production).
   *  Since the stop/shutter is fixed in the camera body, the L6-to-STO gap
   *  changes while the STO-to-image distance remains fixed.
   */
  var: {
    "11": [2.5, 4.43],
  },
  varLabels: [["11", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (I–II)", fromSurface: "1", toSurface: "4" },
    { text: "REAR (IV–V)", fromSurface: "7", toSurface: "11" },
  ],

  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.35,
  focusDescription: "Unit focus (entire optical assembly translates). Body-mounted aperture/shutter.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 13.5],
  apertureBlades: 2,

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.4,
  maxFstop: 13.5,
} satisfies LensDataInput;

export default LENS_DATA;
