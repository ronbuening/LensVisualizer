import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — OLYMPUS OM Zuiko 16mm f/3.5 Fisheye                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,850,509 Example 1 (Olympus / Nakagawa).         ║
 * ║  180° diagonal fisheye for 35 mm SLR, all-spherical retrofocus.    ║
 * ║  11 elements / 8 groups (incl. built-in filter), 0 asph. surfaces. ║
 * ║  Focus: unit focus (whole-block helicoid, no floating elements).    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 1.0 (normalized); all R, d, sd values scaled      ║
 * ║    ×16.0 to f ≈ 16 mm production focal length.                     ║
 * ║                                                                    ║
 * ║  NOTE ON FILTER EXCLUSION:                                         ║
 * ║    The patent includes a built-in plane-parallel filter plate       ║
 * ║    (r10, r11) between L4 and L5. Per project convention the filter ║
 * ║    is excluded; its optical-path contribution is folded into an     ║
 * ║    air-equivalent reduced gap on surface "9":                       ║
 * ║      d_reduced = d9 + d10/n_filter + d11                           ║
 * ║                = 0.0792 + 0.0742/1.51633 + 0.0829                  ║
 * ║                = 0.211034 (norm.) → 3.377 mm.                      ║
 * ║    This preserves the correct EFL and BFD identically.             ║
 * ║                                                                    ║
 * ║  NOTE ON d2 ERRATUM:                                               ║
 * ║    Table 1 prints d2 = 0.457; the claims text (columns 5–6) gives  ║
 * ║    d2 = 0.4157. Only 0.4157 reproduces the patent's stated EFL.    ║
 * ║    d2 = 0.4157 is used here.                                       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Front group (L1–L4): estimated from patent Fig. 1 proportions   ║
 * ║    with physical constraints (edge thickness, sd/|R| < 0.9).       ║
 * ║    Stop: derived from F/3.5 and paraxial EP radius.                ║
 * ║    Rear group (L6–L7): combined marginal + chief ray trace at      ║
 * ║    60% field (54° half-field) with 8% mechanical clearance.        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)    ║
 * ║    ✓ Aperture stop and variable focus gap                          ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-zuiko-16mmf35-fisheye",
  maker: "Olympus",
  name: "OLYMPUS OM ZUIKO 16mm f/3.5 Fisheye",
  subtitle: "US 3,850,509 Example 1 — Olympus / Nakagawa",
  specs: ["11 ELEMENTS / 8 GROUPS", "f ≈ 16.0 mm", "F/3.5", "2ω = 180°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 16,
  focalLengthDesign: 16.0,
  apertureMarketing: 3.5,
  lensMounts: ["olympus-om"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,850,509",
  patentAuthors: ["Jihei Nakagawa"],
  patentAssignees: ["Olympus Optical Co Ltd"],
  patentYear: 1974,
  elementCount: 11, // 10 optical elements + 1 built-in filter plate (filter excluded from prescription)
  groupCount: 8, // 7 optical groups + 1 filter group (filter excluded from prescription)

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.1,
      fl: -23.32,
      glass: "S-BAL35 (OHARA)",
      role: "Front fisheye entrance element; strong negative meniscus for 180° field compression and long BFD.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7859,
      vd: 44.2,
      fl: 59.1,
      glass: "S-LAH51 (OHARA)",
      role: "Weak positive meniscus; corrects intermediate-field coma and lateral color at high obliquity.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.1,
      fl: -18.76,
      glass: "S-BAL35 (OHARA)",
      role: "Second negative element; assists L1 in splitting front converter power.",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.6,
      fl: -25.02,
      glass: "S-LAL14 (OHARA)",
      cemented: "L4",
      role: "Crown side of L4 hyperchromatic doublet; nearly index-matched to L4b for chromatic correction.",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30.1,
      fl: 15.71,
      glass: "S-TIM35 (OHARA)",
      cemented: "L4",
      role: "Flint side of L4 doublet; high-dispersion element for lateral color correction.",
    },
    {
      id: 6,
      name: "L5a",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.7,
      fl: -19.26,
      glass: "S-TIH11 (OHARA)",
      cemented: "L5",
      role: "Dense flint in L5 doublet; spherical and chromatic correction before the stop.",
    },
    {
      id: 7,
      name: "L5b",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.0,
      fl: 15.91,
      glass: "S-TIM5 (OHARA)",
      cemented: "L5",
      role: "Moderate flint paired with L5a; cemented surface r13 is key aberration corrector.",
    },
    {
      id: 8,
      name: "L6",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.51728,
      vd: 69.6,
      fl: 62.1,
      glass: "517696 — S-APL1 / APL1-class low-index high-Abbe crown (OHARA; no public Sellmeier match)",
      role: "Post-stop positive meniscus; low-dispersion relay element reconditioning the bundle.",
    },
    {
      id: 9,
      name: "L7a",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -35.71,
      glass: "S-TIH6 (OHARA)",
      cemented: "L7",
      role: "Dense flint at front of rear cemented doublet; strong chromatic lever near image.",
    },
    {
      id: 10,
      name: "L7b",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.51728,
      vd: 69.6,
      fl: 19.16,
      glass: "517696 — S-APL1 / APL1-class low-index high-Abbe crown (OHARA; no public Sellmeier match)",
      cemented: "L7",
      role: "Crown in rear doublet; final achromatizing and image-forming element.",
    },
  ],

  /* ── Surface prescription ──
   *  Filter excluded; air-equivalent gap folded into surface "9".
   *  STO inserted at midpoint of original d14 air gap (between L5 and L6).
   *  Patent normalized to f = 1.0; all values ×16 to production scale.
   */
  surfaces: [
    { label: "1", R: 88.294, d: 1.979, nd: 1.58913, elemId: 1, sd: 8.0 }, // L1 front
    { label: "2", R: 11.792, d: 6.651, nd: 1.0, elemId: 0, sd: 7.0 }, // L1 rear → air
    { label: "3", R: 25.734, d: 2.97, nd: 1.7859, elemId: 2, sd: 6.5 }, // L2 front
    { label: "4", R: 54.774, d: 1.485, nd: 1.0, elemId: 0, sd: 5.5 }, // L2 rear → air
    { label: "5", R: -1385.709, d: 1.187, nd: 1.58913, elemId: 3, sd: 5.0 }, // L3 front
    { label: "6", R: 11.144, d: 4.157, nd: 1.0, elemId: 0, sd: 5.5 }, // L3 rear → air
    { label: "7", R: 29.69, d: 0.99, nd: 1.6968, elemId: 4, sd: 5.5 }, // L4a front
    { label: "8", R: 10.834, d: 2.454, nd: 1.69895, elemId: 5, sd: 5.5 }, // L4 cement (L4a→L4b)
    { label: "9", R: 747.482, d: 3.377, nd: 1.0, elemId: 0, sd: 5.0 }, // L4b rear → air (filter folded)
    { label: "10", R: 35.336, d: 1.198, nd: 1.78472, elemId: 6, sd: 5.0 }, // L5a front
    { label: "11", R: 10.427, d: 3.227, nd: 1.60342, elemId: 7, sd: 5.0 }, // L5 cement (L5a→L5b)
    { label: "12", R: -106.726, d: 1.693, nd: 1.0, elemId: 0, sd: 4.5 }, // L5b rear → air (pre-stop)
    { label: "STO", R: 1e15, d: 1.693, nd: 1.0, elemId: 0, sd: 2.29 }, // Aperture stop (midpoint of d14)
    { label: "13", R: -39.434, d: 1.979, nd: 1.51728, elemId: 8, sd: 6.0 }, // L6 front
    { label: "14", R: -18.005, d: 0.099, nd: 1.0, elemId: 0, sd: 6.8 }, // L6 rear → air
    { label: "15", R: 78.68, d: 0.99, nd: 1.80518, elemId: 9, sd: 6.8 }, // L7a front
    { label: "16", R: 20.939, d: 2.97, nd: 1.51728, elemId: 10, sd: 7.0 }, // L7 cement (L7a→L7b)
    { label: "17", R: -17.904, d: 36.666, nd: 1.0, elemId: 0, sd: 7.7 }, // L7b rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Whole-block helicoid; BFD changes with focus.
   *  Extension at MFD 0.2 m: f²/(MFD−f) = 256/184 ≈ 1.391 mm.
   */
  var: {
    "17": [36.666, 38.057],
  },

  varLabels: [["17", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "6" },
    { text: "REAR", fromSurface: "13", toSurface: "17" },
  ],

  doublets: [
    { text: "L4", fromSurface: "7", toSurface: "9" },
    { text: "L5", fromSurface: "10", toSurface: "12" },
    { text: "L7", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.2,
  focusDescription:
    "Unit focus (whole-block helicoid). No floating elements identified in patent or production literature.",

  /* ── Aperture configuration ── */
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
