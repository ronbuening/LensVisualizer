import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VIVITAR SERIES 1 70–210mm f/2.8–4 VMC (Version 4)    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,758,073 Example 4 / Table IV (Moskovich /      ║
 * ║  Vivitar Corp.). Three-group telephoto zoom, plus–minus–plus.     ║
 * ║  14 elements / 10 groups, all spherical.                           ║
 * ║  Focus: front-group unit focus (G1 moves; G2, G3 stationary).     ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D1 (S5), D2 (S11), BFL (S24).               ║
 * ║  G2 moves rearward, G3 moves forward; G1 stationary during zoom. ║
 * ║  All zoom motions are monotonic — no reversing groups.            ║
 * ║                                                                    ║
 * ║  NOTE ON D2 AT WIDE:                                               ║
 * ║    Patent Table IV prints D2 = 3.490 mm at the wide position.     ║
 * ║    Total-track conservation across zoom positions yields           ║
 * ║    D2_wide ≈ 37.49 mm (consistent with mid/tele tracks to        ║
 * ║    ±0.006 mm). The same digit-drop error appears in Table III.    ║
 * ║    The Certificate of Correction (Aug 15, 1989) does not address  ║
 * ║    this value. The corrected D2 = 37.490 is used here.           ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE-FOCUS DATA:                                         ║
 * ║    The patent does not publish close-focus spacing data for        ║
 * ║    Example 4. All variable gaps are zoom-only (identical           ║
 * ║    infinity/close values). The production MFD is 0.9 m.           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs estimated from combined marginal + chief ray traces at     ║
 * ║    60% field across all three zoom positions, with ~8–10%         ║
 * ║    mechanical clearance. Front group constrained by the 62 mm     ║
 * ║    filter thread of the later Cosina production variant.          ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable zoom gaps                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "vivitar-s1-70-210-f28-4",
  maker: "Vivitar",
  name: "VIVITAR SERIES 1 70–210mm f/2.8–4 VMC",
  subtitle: "US 4,758,073 Example 4 — Moskovich / Vivitar Corp.",
  specs: ["14 ELEMENTS / 10 GROUPS", "f = 72.1–203.8 mm", "F/2.89–4.01", "2ω ≈ 33.4–12.2°", "ALL SPHERICAL"],

  focalLengthMarketing: [70, 210] as [number, number],
  focalLengthDesign: [72.13, 203.79] as [number, number],
  apertureMarketing: 2.8,
  apertureDesign: 2.89,
  patentYear: 1988,
  elementCount: 14,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    // ── Group G1: Positive focusing group ──
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.785,
      vd: 26.1,
      fl: -169.2,
      glass: "Dense flint (785/261, SF11 class)",
      apd: false as const,
      role: "Front achromatic corrector; cemented to L2. High-dispersion partner to the FK5 crown.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.487,
      vd: 70.4,
      fl: 67.6,
      glass: "FK5 (Schott) / S-FSL5 (Ohara)",
      apd: false as const,
      role: "Principal positive power element of G1. Low-dispersion fluor crown; cemented to L1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.487,
      vd: 70.4,
      fl: 164.3,
      glass: "FK5 (Schott) / S-FSL5 (Ohara)",
      apd: false as const,
      role: "Supplementary positive power for G1; same FK5 glass as L2.",
    },
    // ── Group G2: Negative zooming group ──
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.3,
      fl: 81.2,
      glass: "S-LAH55 (Ohara)",
      apd: false as const,
      role: "Lanthanum dense flint; front element of G2 first doublet. Cemented to L5.",
      cemented: "D2a",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.773,
      vd: 49.6,
      fl: -29.6,
      glass: "S-LAH65 class (Ohara)",
      apd: false as const,
      role: "Primary negative power of G2. High-index lanthanum crown; cemented to L4.",
      cemented: "D2a",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.64,
      vd: 60.2,
      fl: -31.7,
      glass: "S-BSM71 (Ohara)",
      apd: false as const,
      role: "Secondary negative power in G2. Barium crown; cemented to L7.",
      cemented: "D2b",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.805,
      vd: 25.5,
      fl: 57.2,
      glass: "SF6 (Schott) / S-TIH6 (Ohara)",
      apd: false as const,
      role: "High-dispersion chromatic corrector in G2 second doublet; cemented to L6.",
      cemented: "D2b",
    },
    // ── Group G3a: Main positive power subgroup ──
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.487,
      vd: 70.4,
      fl: 128.6,
      glass: "FK5 (Schott) / S-FSL5 (Ohara)",
      apd: false as const,
      role: "Weak positive element at front of G3a; low-dispersion fluor crown.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.589,
      vd: 61.3,
      fl: 148.7,
      glass: "SK5 (Schott)",
      apd: false as const,
      role: "Supplementary positive in G3a relay. Barium crown for oblique-aberration control.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.487,
      vd: 70.4,
      fl: 55.5,
      glass: "FK5 (Schott) / S-FSL5 (Ohara)",
      apd: false as const,
      role: "Strong positive in G3a achromatic doublet; cemented to L11.",
      cemented: "D3a",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.805,
      vd: 25.5,
      fl: -69.2,
      glass: "SF6 (Schott) / S-TIH6 (Ohara)",
      apd: false as const,
      role: "Chromatic corrector in G3a doublet; FK5/SF6 achromat pairing. Cemented to L10.",
      cemented: "D3a",
    },
    // ── Group G3b: Field corrector subgroup ──
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 38.0,
      fl: 77.6,
      glass: "F5 (Schott) / S-TIM5 (Ohara)",
      apd: false as const,
      role: "Unusual positive in high-dispersion barium flint; pre-corrects lateral chromatic aberration.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.3,
      fl: -39.2,
      glass: "S-LAH55 (Ohara)",
      apd: false as const,
      role: "Field flattener. Strong negative power near the image plane counteracts Petzval curvature.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.762,
      vd: 26.6,
      fl: 140.8,
      glass: "SF14 (Schott) / S-TIH14 (Ohara)",
      apd: false as const,
      role: "Final element; high-dispersion glass in a positive element corrects lateral color.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Positive focusing group (L1–L3) ──
    { label: "1", R: 58.324, d: 3.0, nd: 1.785, elemId: 1, sd: 29.0 },
    { label: "2", R: 39.608, d: 12.0, nd: 1.487, elemId: 2, sd: 28.0 }, // L1→L2 cemented junction
    { label: "3", R: -175.64, d: 0.1, nd: 1.0, elemId: 0, sd: 26.0 }, // L2 rear → air
    { label: "4", R: 61.445, d: 4.3, nd: 1.487, elemId: 3, sd: 26.0 },
    { label: "5", R: 258.513, d: 2.5, nd: 1.0, elemId: 0, sd: 24.5 }, // L3 rear → air (D1, variable)

    // ── G2: Negative zooming group (L4–L7) ──
    { label: "6", R: -491.316, d: 3.4, nd: 1.834, elemId: 4, sd: 22.0 },
    { label: "7", R: -59.685, d: 1.8, nd: 1.773, elemId: 5, sd: 21.0 }, // L4→L5 cemented junction
    { label: "8", R: 37.576, d: 6.21, nd: 1.0, elemId: 0, sd: 14.4 }, // L5 rear → air
    { label: "9", R: -40.656, d: 1.8, nd: 1.64, elemId: 6, sd: 14.4 },
    { label: "10", R: 41.069, d: 4.4, nd: 1.805, elemId: 7, sd: 19.4 }, // L6→L7 cemented junction
    { label: "11", R: 364.418, d: 37.49, nd: 1.0, elemId: 0, sd: 19.4 }, // L7 rear → air (D2, variable; corrected from 3.490)

    // ── G3a: Main positive power subgroup (L8–L11) ──
    { label: "12", R: 115.149, d: 3.8, nd: 1.487, elemId: 8, sd: 21.5 },
    { label: "13", R: -135.833, d: 0.1, nd: 1.0, elemId: 0, sd: 21.5 }, // L8 rear → air
    { label: "14", R: 63.229, d: 3.6, nd: 1.589, elemId: 9, sd: 21.5 },
    { label: "15", R: 222.51, d: 0.1, nd: 1.0, elemId: 0, sd: 21.0 }, // L9 rear → air
    { label: "16", R: 47.681, d: 7.7, nd: 1.487, elemId: 10, sd: 21.0 },
    { label: "17", R: -59.094, d: 2.2, nd: 1.805, elemId: 11, sd: 19.5 }, // L10→L11 cemented junction
    { label: "18", R: 981.386, d: 6.7, nd: 1.0, elemId: 0, sd: 18.5 }, // L11 rear → air (6.70 mm to stop)

    // ── Aperture stop (6.70 mm after S18; 19.258 mm before S19) ──
    { label: "STO", R: 1e15, d: 19.258, nd: 1.0, elemId: 0, sd: 14.9 },

    // ── G3b: Field corrector subgroup (L12–L14) ──
    { label: "19", R: 251.278, d: 4.1, nd: 1.603, elemId: 12, sd: 15.5 },
    { label: "20", R: -57.139, d: 14.178, nd: 1.0, elemId: 0, sd: 15.0 }, // L12 rear → air
    { label: "21", R: -25.51, d: 2.2, nd: 1.834, elemId: 13, sd: 12.5 },
    { label: "22", R: -120.287, d: 0.2, nd: 1.0, elemId: 0, sd: 12.8 }, // L13 rear → air
    { label: "23", R: 321.054, d: 2.4, nd: 1.762, elemId: 14, sd: 12.8 },
    { label: "24", R: -160.611, d: 38.997, nd: 1.0, elemId: 0, sd: 13.0 }, // L14 rear → air (BFL, variable)
  ],

  /* ── Aspherical coefficients (all-spherical design) ── */
  asph: {},

  /* ── Zoom positions ── */
  zoomPositions: [72.132, 134.911, 203.786],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Variable air spacings (zoom only — no close-focus data in patent) ──
   *  D1 (S5): G1–G2 gap. Increases wide→tele (G2 moves rearward).
   *  D2 (S11): G2–G3 gap. Decreases wide→tele (G3 moves forward).
   *    Wide-position D2 corrected from patent's 3.490 to 37.490 (total-track conservation).
   *  BFL (S24): Back focal length. Increases wide→tele.
   */
  var: {
    "5": [
      [2.5, 2.5],
      [10.692, 10.692],
      [14.468, 14.468],
    ],
    "11": [
      [37.49, 37.49],
      [15.947, 15.947],
      [0.5, 0.5],
    ],
    "24": [
      [38.997, 38.997],
      [52.352, 52.352],
      [64.025, 64.025],
    ],
  },
  varLabels: [
    ["5", "D1"],
    ["11", "D2"],
    ["24", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (focus)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (zoom)", fromSurface: "6", toSurface: "11" },
    { text: "G3 (zoom)", fromSurface: "12", toSurface: "24" },
  ],

  doublets: [
    { text: "L1–L2", fromSurface: "1", toSurface: "3" },
    { text: "L4–L5", fromSurface: "6", toSurface: "8" },
    { text: "L6–L7", fromSurface: "9", toSurface: "11" },
    { text: "L10–L11", fromSurface: "16", toSurface: "18" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.9,
  focusDescription: "Front-group unit focus. G1 extends forward for close focus; G2 and G3 stationary during focus.",

  /* ── Aperture configuration ── */
  nominalFno: [2.89, 3.49, 4.01],
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
