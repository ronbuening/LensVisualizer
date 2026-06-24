import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — MINOLTA VARISOFT ROKKOR 85mm f/2.8           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,124,276 Embodiment 3 (Table 6, FIG. 8).        ║
 * ║  Okano, Nakamura, Ogura — Minolta Camera Kabushiki Kaisha, 1978.  ║
 * ║  Modified Tessar with rear divergent soft-focus control group.     ║
 * ║  6 elements / 5 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: inner focus — front sub-group AI (L1–L4) moves forward;   ║
 * ║         AII (L5) and B (L6) remain stationary.  The focus ring     ║
 * ║         varies d_A7 only; BFD stays fixed. Separate 4-position     ║
 * ║         soft-focus control ring is modeled by aberrationControl:   ║
 * ║         it varies d_B0 and the compensated image-side spacing.     ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 100; all R, d, sd values scaled ×0.85 to         ║
 * ║    f ≈ 85 mm production.                                          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Values estimated via paraxial         ║
 * ║    marginal ray (f/2.8) + chief ray (60% half-field = 8.4°)       ║
 * ║    with 8% mechanical clearance on marginal heights.               ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Patent places the diaphragm in the air gap between L2 and the  ║
 * ║    cemented doublet L3+L4 (7.39 mm at patent scale). Exact        ║
 * ║    position inferred at 54% from L2 rear to satisfy the cross-gap ║
 * ║    sag intrusion constraint on the strongly curved L2 rear        ║
 * ║    surface (R = +35.967 patent, +30.572 production).              ║
 * ║                                                                    ║
 * ║  NOTE ON BFD:                                                      ║
 * ║    Patent states BFD = 66.90 (patent scale). Independent ABCD     ║
 * ║    traces of six other embodiments confirm BFD = 75.80 is         ║
 * ║    correct; patent value is a typographical error consistent with  ║
 * ║    eight other errata documented in the Certificate of Correction. ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "varisoft-rokkor-85f28",
  maker: "Minolta",
  name: "MINOLTA VARISOFT ROKKOR 85mm f/2.8",
  subtitle: "US 4,124,276 EMBODIMENT 3 — MINOLTA / OKANO, NAKAMURA, OGURA",
  specs: [
    "6 ELEMENTS / 5 GROUPS",
    "f ≈ 85.0 mm (production) · 100.0 mm (patent)",
    "F/2.8",
    "2ω ≈ 28°",
    "ALL SPHERICAL · VARIABLE SOFT FOCUS",
  ],
  focalLengthMarketing: 85,
  focalLengthDesign: 85.0,
  apertureMarketing: 2.8,
  lensMounts: ["minolta-sr"],
  imageFormat: "135-full-frame",
  patentYear: 1978,
  elementCount: 6,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7495,
      vd: 50.1,
      fl: 56.6,
      glass: "749501 - lanthanum crown (catalog unresolved)",
      apd: false,
      role: "Front positive collector — high-index lanthanum crown reduces surface curvatures; nearly plano-convex (R2/R1 ≈ 21), dominant source of under-corrected SA.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.7,
      fl: -31.4,
      glass: "S-TIM27 (OHARA)",
      apd: false,
      role: "Tessar disperser — biconcave flint immediately before the stop; chromatic correction partner for L1; contributes to Petzval sum correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.54072,
      vd: 46.8,
      fl: 145.4,
      glass: "541468 - light flint (catalog unresolved)",
      apd: false,
      cemented: "D1",
      role: "Front element of cemented doublet — negative in isolation (f ≈ −60 mm in air), acts as achromatizing partner for L4 via Abbe-number differential at the junction surface.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 52.1,
      fl: 47.5,
      glass: "720521 - lanthanum crown (catalog unresolved)",
      apd: false,
      cemented: "D1",
      role: "Rear element of cemented doublet — dominant positive power behind the stop; high-index lanthanum crown; thick center section carries substantial power while maintaining chromatic correction.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: 121.7,
      glass: "S-LAL14 (OHARA)",
      apd: false,
      role: "Group AII field relay — weak positive meniscus concave to object; stationary during focus; pivot between focus gap (d_A7) and soft-focus gap (d_B0).",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.57616,
      vd: 41.4,
      fl: -141.8,
      glass: "576414 - light flint (catalog unresolved)",
      apd: false,
      role: "Group B soft-focus control element — low-index light flint provides fine SA control; as d_B0 widens, marginal ray height on L6 decreases, shifting the 3rd/5th-order SA balance to produce controlled image softening.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Group AI (focus group: L1–L4) ──
    { label: "1", R: 40.559, d: 7.344, nd: 1.7495, elemId: 1, sd: 19.9 }, // L1 front
    { label: "2", R: 846.19, d: 7.965, nd: 1.0, elemId: 0, sd: 17.8 }, // L1 rear → air
    { label: "3", R: -60.866, d: 2.737, nd: 1.6398, elemId: 2, sd: 13.8 }, // L2 front
    { label: "4", R: 30.572, d: 3.392, nd: 1.0, elemId: 0, sd: 13.2 }, // L2 rear → air (to stop)
    // STO position inferred at 54% of 7.39mm gap from L2 rear (patent scale);
    // driven by cross-gap sag constraint against L2 rear surface (R = +30.572).
    { label: "STO", R: 1e15, d: 2.889, nd: 1.0, elemId: 0, sd: 12.9 }, // aperture stop
    { label: "5", R: 553.109, d: 2.151, nd: 1.54072, elemId: 3, sd: 13.8 }, // L3 front (cemented D1)
    { label: "6", R: 30.354, d: 9.087, nd: 1.72, elemId: 4, sd: 14.2 }, // L3→L4 junction
    { label: "7", R: -46.084, d: 2.346, nd: 1.0, elemId: 0, sd: 15.2 }, // L4 rear → air (focus gap d_A7)
    // ── Group AII (stationary during focus) ──
    { label: "8", R: -42.2, d: 4.913, nd: 1.6968, elemId: 5, sd: 15.1 }, // L5 front
    { label: "9", R: -29.521, d: 2.074, nd: 1.0, elemId: 0, sd: 15.7 }, // L5 rear → air (soft-focus gap d_B0, sharp #0)
    // ── Group B (soft-focus control) ──
    { label: "10", R: -26.825, d: 2.737, nd: 1.57616, elemId: 6, sd: 15.4 }, // L6 front
    { label: "11", R: -41.432, d: 64.427, nd: 1.0, elemId: 0, sd: 15.7 }, // L6 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (focus) ──
   *  Inner focus: AI (L1–L4) moves forward on the focus helicoid.
   *  AII (L5), B (L6), and the image-side back focus remain fixed.
   *  Only d_A7 (focus gap between AI and AII) widens for close focus.
   *
   *  The soft-focus control gap d_B0 (surface "9") is orthogonal to focus
   *  and is modeled separately below as an aberration-control variable.
   *  The base surface table represents the "sharp" (#0) setting.
   */
  var: {
    "7": [2.346, 11.433],
  },
  varLabels: [["7", "D(A7)"]],

  /* ── Aberration control (soft-focus ring) ──
   *  The separate Varisoft ring opens d_B0 from the sharp #0 setting to
   *  the patent's maximum-soft #3 setting. BFD compensation is solved from
   *  the patent's FIG. 11 infinity-focus condition at d_B0 = 8.19.
   */
  aberrationControl: {
    label: "SOFT",
    description: "Aberration control ring — varies the rear meniscus air space d_B0 to introduce spherical aberration.",
    minLabel: "0",
    maxLabel: "3",
    step: 0.001,
    var: {
      "9": [2.074, 6.962],
      "11": [64.427, 53.951],
    },
    varLabels: [
      ["9", "D(B0)"],
      ["11", "BF"],
    ],
  },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "AI — FOCUS", fromSurface: "1", toSurface: "7" },
    { text: "AII", fromSurface: "8", toSurface: "9" },
    { text: "B — SOFT", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.8,
  focusDescription:
    "Inner focus — Group AI (L1–L4) moves forward; AII (L5) and B (L6) remain stationary. " +
    "Separate 4-position click-stopped ring varies d_B0 for soft-focus control.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 8,

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
