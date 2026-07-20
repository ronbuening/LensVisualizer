import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — HASSELBLAD HC 3.5/50 (Mark I)                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2003/0011895 A1 Example 4 (Fuji Photo Optical).  ║
 * ║  Retrofocus imaging lens for medium-format (645) with integral     ║
 * ║  leaf shutter space. All-spherical design.                         ║
 * ║  10 elements / 9 groups, 0 aspherical surfaces.                   ║
 * ║  Focus: Rear focus — G2 (L21–L24) translates toward object.       ║
 * ║  Flare-cut fc2 travels with G2.                                   ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 1.0 (normalized); all R, d values scaled ×50.0   ║
 * ║    to production f ≈ 50.0 mm. Computed EFL at this scale =        ║
 * ║    50.03 mm (within 0.06% of nominal).                            ║
 * ║                                                                    ║
 * ║  NOTE ON FLARE-CUT APERTURES:                                     ║
 * ║    Patent specifies two flare-cut apertures (fc1 between G1B and  ║
 * ║    the stop, fc2 between the stop and G2). Both are folded into   ║
 * ║    adjacent air gaps:                                              ║
 * ║      fc1 (d = 6.810 mm) folded into surface "11" thickness.       ║
 * ║      fc2 (d = 2.585 mm) folded into STO thickness.                ║
 * ║    fc2 travels with G2 during focus; fc1 is fixed.                ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    SDs estimated via combined marginal + chief ray trace at       ║
 * ║    full aperture and full field (ω = 34.7°). Constraints:         ║
 * ║    sd/|R| < 0.88, edge thickness ≥ 0.4 mm, cross-gap sag         ║
 * ║    intrusion < 85% of gap, element SD ratio ≤ 1.25. Front group  ║
 * ║    constrained by 77 mm filter thread (SD ≤ ~36.5 mm).           ║
 * ║    Meniscus elements (L11, L12, L16, L22) significantly           ║
 * ║    constrained by edge thickness — physical vignetting expected.  ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:          ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "hasselblad-hc-50-f35",
  maker: "Hasselblad",
  name: "HASSELBLAD HC 50mm f/3.5",
  subtitle: "US 2003/0011895 A1 Example 4 — Fuji Photo Optical / Masao Mori",
  specs: ["10 ELEMENTS / 9 GROUPS", "f ≈ 50.0 mm", "F/3.5", "2ω ≈ 69.4°", "ALL SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50.03,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["hasselblad-h"],
  imageFormat: "645",
  patentNumber: "US 2003/0011895 A1",
  patentAuthors: ["Masao Mori"],
  patentAssignees: ["Fuji Photo Optical Co., Ltd."],
  patentYear: 2003,
  elementCount: 10,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.9,
      fl: -82.9,
      glass: "S-LAH53 (OHARA)",
      role: "Front negative meniscus pair (1 of 2) — progressive divergence of wide-angle beam",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.9,
      fl: -65.2,
      glass: "S-LAH53 (OHARA)",
      role: "Front negative meniscus pair (2 of 2) — combined f_n ≈ −34.4 mm with L11",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.7847,
      vd: 26.3,
      fl: 86.9,
      glass: "S-TIH23 (OHARA)",
      role: "Positive corrector in front diverging group — distortion reduction per cond. (3)",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.8081,
      vd: 22.8,
      fl: -145.9,
      glass: "S-NPH1 (OHARA)",
      cemented: "D1",
      role: "Cemented doublet flint — standalone in-air f = −145.9 mm; cemented pair f = +46.0 mm",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      fl: 34.1,
      glass: "S-LAL8 (OHARA)",
      cemented: "D1",
      role: "Cemented doublet crown — primary achromatic correction in G1B",
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.51742,
      vd: 52.4,
      fl: -75.3,
      glass: "S-NSL36 (OHARA)",
      role: "Field flattener at rear of G1B — reduces Petzval sum without compromising G1B power",
    },
    {
      id: 7,
      name: "L21",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 74.9,
      glass: "S-LAH66 (OHARA)",
      role: "Lead positive in focus group G2 — concave to object, convex to image",
    },
    {
      id: 8,
      name: "L22",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.6398,
      vd: 34.5,
      fl: -32.9,
      glass: "S-TIM27 (OHARA)",
      role: "Sole negative in G2 — distortion correction and chromatic balance against L23/L24",
    },
    {
      id: 9,
      name: "L23",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.3,
      fl: 75.6,
      glass: "S-PHM52 (OHARA)",
      apd: "inferred",
      apdNote:
        "S-PHM52 phosphate crown has positive anomalous partial dispersion; patent gives nd/vd only, so APD is inferred from the catalog glass class.",
      role: "Low-dispersion positive — satisfies cond. (5) νd > 60 for G2 achromatization",
    },
    {
      id: 10,
      name: "L24",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 73.0,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote:
        "ED fluorophosphate crown; anomalous positive partial dispersion is inferred from the catalog glass class and its chromatic-correction role.",
      role: "ED element — final chromatic correction and field flattening; satisfies cond. (5)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1A: Front Diverging Group (negative) ──
    // L11 — Negative Meniscus, convex to object
    { label: "1", R: 65.765, d: 2.685, nd: 1.8061, elemId: 1, sd: 16.2 },
    { label: "2", R: 32.54, d: 8.34, nd: 1.0, elemId: 0, sd: 16.2 },
    // L12 — Negative Meniscus, convex to object
    { label: "3", R: 109.76, d: 2.285, nd: 1.8061, elemId: 2, sd: 13.6 },
    { label: "4", R: 35.195, d: 11.635, nd: 1.0, elemId: 0, sd: 13.6 },
    // L13 — Biconvex Positive
    { label: "5", R: 105.535, d: 8.91, nd: 1.7847, elemId: 3, sd: 25.5 },
    { label: "6", R: -185.45, d: 2.985, nd: 1.0, elemId: 0, sd: 24.7 },

    // ── G1B: Rear Collecting Group (positive) ──
    // L14 + L15 — Cemented Doublet (D1)
    { label: "7", R: 51.355, d: 4.97, nd: 1.8081, elemId: 4, sd: 23.9 }, // L14 front
    { label: "8", R: 34.23, d: 13.51, nd: 1.713, elemId: 5, sd: 22.0 }, // L14→L15 junction
    { label: "9", R: -70.405, d: 3.17, nd: 1.0, elemId: 0, sd: 17.6 }, // L15 rear → air
    // L16 — Negative Meniscus, convex to object
    { label: "10", R: 306.94, d: 2.345, nd: 1.51742, elemId: 6, sd: 12.1 },
    { label: "11", R: 34.48, d: 12.13, nd: 1.0, elemId: 0, sd: 12.1 }, // folded: d_L16_rear + d_fc1

    // ── Aperture Stop (with fc2 folded in) ──
    { label: "STO", R: 1e15, d: 12.4, nd: 1.0, elemId: 0, sd: 7.1 }, // folded: d_stop + d_fc2

    // ── G2: Rear Positive Group / Focus Group ──
    // L21 — Positive Meniscus, convex to image
    { label: "12", R: -116.945, d: 3.18, nd: 1.7725, elemId: 7, sd: 13.5 },
    { label: "13", R: -39.16, d: 1.98, nd: 1.0, elemId: 0, sd: 14.6 },
    // L22 — Negative Meniscus, concave to object
    { label: "14", R: -20.395, d: 1.59, nd: 1.6398, elemId: 8, sd: 7.0 },
    { label: "15", R: -691.675, d: 1.49, nd: 1.0, elemId: 0, sd: 7.0 },
    // L23 — Positive Meniscus, convex to image
    { label: "16", R: -68.115, d: 5.12, nd: 1.618, elemId: 9, sd: 17.1 },
    { label: "17", R: -28.5, d: 0.2, nd: 1.0, elemId: 0, sd: 20.1 },
    // L24 — Positive Meniscus, convex to image
    { label: "18", R: -254.73, d: 8.105, nd: 1.497, elemId: 10, sd: 20.2 },
    { label: "19", R: -32.085, d: 64.965, nd: 1.0, elemId: 0, sd: 23.1 }, // BFD
  ],

  /* ── Aspherical coefficients — all-spherical design ── */
  asph: {},

  /* ── Variable air spacings (rear focus) ──
   *  Two variable gaps: STO (stop-to-G2) and surface 19 (BFD).
   *  G2 moves toward object at close focus; fc2 travels with G2.
   *  Conservation: d_STO + d_19 = 77.365 mm at all focus positions.
   *  Focus travel: 5.885 mm (normalized 0.1177).
   */
  var: {
    STO: [12.4, 6.515],
    "19": [64.965, 70.85],
  },
  varLabels: [
    ["STO", "Stop–G2"],
    ["19", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1A", fromSurface: "1", toSurface: "6" },
    { text: "G1B", fromSurface: "7", toSurface: "11" },
    { text: "G2", fromSurface: "12", toSurface: "19" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.6,
  focusDescription: "Rear focus — G2 (L21–L24) translates 5.9 mm toward object. Flare-cut fc2 co-travels with G2.",

  /* ── Aperture configuration ── */
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
