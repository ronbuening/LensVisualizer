import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON RF 70-200mm f/2.8 L IS USM                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP2021-056407A Example 3 (Canon / Nakahara, Iwamoto) ║
 * ║  Positive-lead telephoto zoom, 7 zoom groups.                      ║
 * ║  17 elements / 7 zoom groups (12 air-separated sub-groups),        ║
 * ║  2 glass-molded aspherical surfaces (S13, S30).                    ║
 * ║                                                                    ║
 * ║  Internal zoom (telescoping barrel; d5 extends 58.44 mm W→T).     ║
 * ║  Zoom variable gaps: d5, d11, d14, d17, d25, d27, d31.            ║
 * ║  Focus: dual Nano USM electronic floating focus.                   ║
 * ║    Focus group A (LN/G6): L15 — moves image-ward inf→close.      ║
 * ║    Focus group B (LR/G7): L16+L17 — floating correction group.    ║
 * ║    Close-focus variable gaps NOT provided in patent.               ║
 * ║    var data uses zoom-only values (inf = close) as placeholder.    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters.  All SDs estimated via     ║
 * ║    paraxial marginal ray trace at wide/mid/tele, taking the max    ║
 * ║    height at each surface + 10% mechanical clearance.  Front       ║
 * ║    elements cross-checked against 77 mm filter thread.             ║
 * ║                                                                    ║
 * ║  NOTE ON GROUP COUNT:                                              ║
 * ║    Patent defines 7 zoom groups (independently moving units).      ║
 * ║    Canon marketing lists "13 groups" (air-separated sub-groups).   ║
 * ║    Counting air-separated sub-groups from the prescription         ║
 * ║    yields 12.  The discrepancy likely reflects a minor production  ║
 * ║    modification (element split or added air gap) or the FP/STO     ║
 * ║    counting convention.                                            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-70-200-f28",
  maker: "Canon",
  name: "CANON RF 70-200mm f/2.8 L IS USM",
  subtitle: "JP2021-056407A EXAMPLE 3 — CANON / NAKAHARA, IWAMOTO",
  specs: [
    "17 ELEMENTS / 7 ZOOM GROUPS",
    "f = 72.13–194.06 mm",
    "F/2.89–2.91",
    "2ω = 33.4–12.7°",
    "2 ASPHERICAL SURFACES (GMo)",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: [70, 200] as [number, number],
  focalLengthDesign: [72.13, 194.06] as [number, number],
  apertureMarketing: 2.8,
  apertureDesign: 2.89,
  patentYear: 2021,
  elementCount: 17,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 240.6,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred" as const,
      apdNote: "UD fluorophosphate, ΔθgF ≈ +0.028",
      role: "Front positive; low-dispersion collector, gentle convergence for primary color correction across zoom range",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6134,
      vd: 44.3,
      fl: -163.3,
      glass: "S-BAM4 (OHARA)",
      apd: false as const,
      role: "Negative component of front achromatic doublet; barium flint providing Δνd = 50.4 against L3",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Plano-Convex Positive",
      nd: 1.43875,
      vd: 94.7,
      fl: 117.3,
      glass: "S-FPL55 (OHARA)",
      apd: "inferred" as const,
      apdNote: "Super UD fluorophosphate, ΔθgF ≈ +0.046; flat rear surface",
      role: "Positive component of front achromatic doublet; extreme anomalous PD provides strongest secondary spectrum correction in system",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.59282,
      vd: 68.6,
      fl: -101.2,
      glass: "S-FPM2 (OHARA)",
      apd: false as const,
      role: "First element of IS group (G2); nearly plano front surface (R = −618 mm); beam diameter control before cemented doublet",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.76385,
      vd: 48.5,
      fl: -36.6,
      glass: "S-LAH65V (OHARA)",
      apd: false as const,
      role: "Strong negative element of IS doublet; lanthanum crown provides high nd/moderate νd balance for compact variator",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      fl: 58.3,
      glass: "S-TIH14 (OHARA)",
      apd: false as const,
      role: "Positive component of IS doublet; dense flint partially corrects chromatic aberration introduced by L5's negative power",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L31",
      label: "Element 7",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.497,
      vd: 81.5,
      fl: 67.0,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred" as const,
      apdNote:
        "UD fluorophosphate glass-molded asphere; dual role: SA correction (asphere) + LoCA correction (UD glass)",
      role: "Sole element of G3 (compensator); positioned behind stop where marginal ray height peaks; aspherical front corrects SA while UD glass controls axial color",
    },
    {
      id: 8,
      name: "L41",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.3,
      fl: -34.7,
      glass: "S-TIM2 (OHARA)",
      apd: false as const,
      role: "Negative component of G4 field-flattener doublet; paired with another flint for Petzval sum management rather than chromatic correction",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L42",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.72825,
      vd: 28.5,
      fl: 46.5,
      glass: "S-TIH6 (OHARA)",
      apd: false as const,
      role: "Positive component of G4 field-flattener doublet; dense flint; unusual flint–flint pairing targets Petzval sum, not color",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L51",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 2.0509,
      vd: 26.9,
      fl: -67.8,
      glass: "S-NPH2 (OHARA)",
      apd: false as const,
      role: "Ultra-high-index flint in first G5 achromatic doublet; nd > 2.0 enables extreme curvature at cemented interface in compact package",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L52",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 54.6,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred" as const,
      apdNote: "UD fluorophosphate; forms achromatic correction cell with L10 (S-NPH2)",
      role: "UD positive component of first G5 achromatic doublet; paired with S-NPH2 for powerful chromatic correction",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L53",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 65.7,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred" as const,
      apdNote: "UD fluorophosphate; inverted doublet partner — UD first, then S-NPH2",
      role: "UD positive component of second G5 achromatic doublet; inverted element order partially cancels higher-order chromatic residuals from D4",
      cemented: "D5",
    },
    {
      id: 13,
      name: "L54",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 2.0509,
      vd: 26.9,
      fl: -103.4,
      glass: "S-NPH2 (OHARA)",
      apd: false as const,
      role: "Ultra-high-index flint in second G5 achromatic doublet; inverted relative to L10 for systematic aberration balancing",
      cemented: "D5",
    },
    {
      id: 14,
      name: "L55",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.4,
      fl: 59.9,
      glass: "S-LAH58 (OHARA)",
      apd: false as const,
      role: "Rear element of G5; highest-nd crown in system (1.900); converges beam before focus groups",
    },
    {
      id: 15,
      name: "L61",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.4,
      fl: -55.0,
      glass: "S-PHM52 (OHARA)",
      apd: false as const,
      role: "Focus group A (LN/G6); single element driven by first Nano USM; moves image-ward for infinity→close focus; phosphate crown chosen for low mass (fast AF)",
    },
    {
      id: 16,
      name: "L71",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      fl: 89.7,
      glass: "S-TIH14 (OHARA)",
      apd: false as const,
      role: "First element of floating focus group B (LR/G7); dense flint for coma/astigmatism compensation as focus group A moves",
    },
    {
      id: 17,
      name: "L72",
      label: "Element 17",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: -60.6,
      glass: "S-BAL42 (OHARA)",
      apd: false as const,
      role: "Final element; glass-molded aspheric (266 μm departure); field curvature/distortion correction near image plane; SWC coated; barium crown suitable for precision molding",
    },
  ],

  /* ── Surface prescription ──
   *  31 surfaces: 17 glass elements + air gaps, front to rear.
   *  All SDs estimated from paraxial ray trace (see file header).
   *  Surface 6 is the flare-cut stop (FP), surface 12 is the aperture stop (STO).
   */
  surfaces: [
    // ── Group G1 (L1): positive front group ──
    { label: "1", R: 99.618, d: 7.7, nd: 1.497, elemId: 1, sd: 37.0 }, // L1 front — Pos. Meniscus
    { label: "2", R: 581.439, d: 0.2, nd: 1.0, elemId: 0, sd: 36.0 }, // L1 rear → air
    { label: "3", R: 107.681, d: 2.4, nd: 1.6134, elemId: 2, sd: 36.0 }, // L2 front (cemented D1)
    { label: "4", R: 51.46, d: 12.7, nd: 1.43875, elemId: 3, sd: 35.0 }, // L2→L3 junction — elemId: 3 (L3)
    { label: "5", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 33.0 }, // L3 rear (flat) → air [ZOOM VAR]

    // ── Flare-cut stop (FP) — fixed air gap between G1 and G2 ──
    { label: "6", R: 1e15, d: 3.67, nd: 1.0, elemId: 0, sd: 19.0 }, // FP diaphragm

    // ── Group G2 (L2): variator / IS group — STATIONARY during zoom ──
    { label: "7", R: -617.95, d: 1.45, nd: 1.59282, elemId: 4, sd: 18.0 }, // L4 front — Biconcave (nearly plano front)
    { label: "8", R: 66.515, d: 3.79, nd: 1.0, elemId: 0, sd: 18.0 }, // L4 rear → air
    { label: "9", R: -81.698, d: 1.3, nd: 1.76385, elemId: 5, sd: 15.7 }, // L5 front (cemented D2; sd reduced to avoid cross-gap sag overlap)
    { label: "10", R: 42.75, d: 4.4, nd: 1.85478, elemId: 6, sd: 16.5 }, // L5→L6 junction — elemId: 6 (L6)
    { label: "11", R: 285.171, d: 10.41, nd: 1.0, elemId: 0, sd: 18.0 }, // L6 rear → air [ZOOM VAR]

    // ── Aperture stop (STO) — positioned at front of G3 ──
    { label: "STO", R: 1e15, d: 0.5, nd: 1.0, elemId: 0, sd: 13.0 }, // STO — SD set for wide-end marginal ray

    // ── Group G3 (L3): compensator — single UD aspherical element ──
    { label: "13A", R: 52.335, d: 7.05, nd: 1.497, elemId: 7, sd: 18.5 }, // L7 front — ASPH
    { label: "14", R: -87.607, d: 9.57, nd: 1.0, elemId: 0, sd: 18.0 }, // L7 rear → air [ZOOM VAR]

    // ── Group G4 (L4): negative field flattener — cemented doublet ──
    { label: "15", R: -34.35, d: 1.2, nd: 1.5927, elemId: 8, sd: 15.5 }, // L8 front (cemented D3)
    { label: "16", R: 51.821, d: 5.0, nd: 1.72825, elemId: 9, sd: 15.5 }, // L8→L9 junction — elemId: 9 (L9)
    { label: "17", R: -93.944, d: 9.69, nd: 1.0, elemId: 0, sd: 15.5 }, // L9 rear → air [ZOOM VAR]

    // ── Group G5 (LP/L5): main positive relay — 5 elements, 3 sub-groups ──
    { label: "18", R: 126.864, d: 1.35, nd: 2.0509, elemId: 10, sd: 15.5 }, // L10 front (cemented D4)
    { label: "19", R: 45.374, d: 6.25, nd: 1.497, elemId: 11, sd: 15.5 }, // L10→L11 junction — elemId: 11 (L11)
    { label: "20", R: -64.472, d: 0.15, nd: 1.0, elemId: 0, sd: 15.5 }, // L11 rear → air
    { label: "21", R: 114.577, d: 5.8, nd: 1.497, elemId: 12, sd: 15.5 }, // L12 front (cemented D5)
    { label: "22", R: -44.904, d: 1.35, nd: 2.0509, elemId: 13, sd: 15.0 }, // L12→L13 junction — elemId: 13 (L13)
    { label: "23", R: -77.708, d: 0.15, nd: 1.0, elemId: 0, sd: 15.0 }, // L13 rear → air
    { label: "24", R: 61.735, d: 4.45, nd: 1.90043, elemId: 14, sd: 15.0 }, // L14 front — Biconvex
    { label: "25", R: -412.192, d: 13.8, nd: 1.0, elemId: 0, sd: 14.0 }, // L14 rear → air [ZOOM VAR]

    // ── Group G6 (LN): focus group A — single element (Nano USM #1) ──
    { label: "26", R: 159.922, d: 1.2, nd: 1.618, elemId: 15, sd: 13.0 }, // L15 front — Neg. Meniscus
    { label: "27", R: 27.965, d: 17.06, nd: 1.0, elemId: 0, sd: 13.0 }, // L15 rear → air [ZOOM VAR]

    // ── Group G7 (LR): floating focus group B — 2 elements (Nano USM #2) ──
    { label: "28", R: -113.431, d: 3.2, nd: 1.85478, elemId: 16, sd: 8.5 }, // L16 front — Pos. Meniscus
    { label: "29", R: -46.333, d: 6.54, nd: 1.0, elemId: 0, sd: 8.0 }, // L16 rear → air
    { label: "30A", R: -23.301, d: 1.9, nd: 1.58313, elemId: 17, sd: 6.5 }, // L17 front — ASPH, SWC coated
    { label: "31", R: -70.381, d: 15.86, nd: 1.0, elemId: 0, sd: 6.0 }, // L17 rear → image (BFD) [ZOOM VAR]
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "13A": {
      K: 0,
      A4: -1.09244e-6,
      A6: 1.04634e-9,
      A8: 2.02132e-13,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "30A": {
      K: 0,
      A4: 1.0914e-5,
      A6: 1.43304e-8,
      A8: -2.5459e-11,
      A10: 1.38882e-13,
      A12: -1.1676e-16,
      A14: 0,
    },
  },

  /* ── Variable air spacings (zoom format) ──
   *  Zoom positions: 72.13 mm (wide), 100.00 mm (mid), 194.06 mm (tele).
   *  Patent does not provide close-focus variable gap data, so inf = close
   *  at each zoom position.  Each value is [d_inf, d_close] per position.
   */
  var: {
    "5": [
      [1.5, 1.5],
      [26.97, 26.97],
      [59.94, 59.94],
    ], // G1→G2 barrel extension (zoom only)
    "11": [
      [10.41, 10.41],
      [9.24, 9.24],
      [2.9, 2.9],
    ], // G2→G3
    "14": [
      [9.57, 9.57],
      [12.46, 12.46],
      [18.11, 18.11],
    ], // G3→G4
    "17": [
      [9.69, 9.69],
      [6.8, 6.8],
      [1.15, 1.15],
    ], // G4→G5
    "25": [
      [13.8, 13.8],
      [10.49, 10.49],
      [1.21, 1.21],
    ], // G5→G6 (LN)
    "27": [
      [17.06, 17.06],
      [16.73, 16.73],
      [21.22, 21.22],
    ], // G6→G7 — non-monotonic: W→M decrease, M→T increase
    "31": [
      [15.86, 15.86],
      [20.68, 20.68],
      [31.81, 31.81],
    ], // BFD
  },

  varLabels: [
    ["5", "D5 (G1→G2)"],
    ["11", "D11 (G2→G3)"],
    ["14", "D14 (G3→G4)"],
    ["17", "D17 (G4→G5)"],
    ["25", "D25 (G5→LN)"],
    ["27", "D27 (LN→LR)"],
    ["31", "BF"],
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [72.13, 100.0, 194.06],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+155)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−48, IS)", fromSurface: "6", toSurface: "11" },
    { text: "G3 (+67)", fromSurface: "STO", toSurface: "14" },
    { text: "G4 (−156)", fromSurface: "15", toSurface: "17" },
    { text: "G5 (+39, LP)", fromSurface: "18", toSurface: "25" },
    { text: "G6 (−55, LN)", fromSurface: "26", toSurface: "27" },
    { text: "G7 (−224, LR)", fromSurface: "28", toSurface: "31" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" }, // L2 + L3 (front achromatic)
    { text: "D2", fromSurface: "9", toSurface: "11" }, // L5 + L6 (IS doublet)
    { text: "D3", fromSurface: "15", toSurface: "17" }, // L8 + L9 (field flattener)
    { text: "D4", fromSurface: "18", toSurface: "20" }, // L10 + L11 (NPH2/FPL51)
    { text: "D5", fromSurface: "21", toSurface: "23" }, // L12 + L13 (FPL51/NPH2, inverted)
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.7,
  focusDescription:
    "Dual Nano USM electronic floating focus. Group A (LN/G6, single element L15): moves image-ward for infinity→close. Group B (LR/G7, L16+L17): independent floating correction driven by second Nano USM. Close-focus gap data not available from patent — zoom-only variable gaps used as placeholder.",

  /* ── Aperture configuration ── */
  nominalFno: 2.89,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.65,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
