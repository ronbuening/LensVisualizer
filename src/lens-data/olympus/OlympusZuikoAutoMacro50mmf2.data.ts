import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — OLYMPUS ZUIKO AUTO-MACRO 50mm f/2            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,708,445 Embodiment 6 (Olympus / Hisashi Goto). ║
 * ║  Modified Gauss macro with floating-element focus.                 ║
 * ║  9 elements / 7 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focus + variable d4 gap (Group I floats from         ║
 * ║         Group II during close focusing).                           ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent normalized to f = 1. All R, d, sd values scaled         ║
 * ║    ×50.016 to match 50 mm production focal length.                ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    No patent-listed SDs. Estimated from paraxial marginal +       ║
 * ║    chief ray trace (22.8° half-field) with ~8% mechanical         ║
 * ║    clearance, trimmed where cross-gap sag intrusion or            ║
 * ║    sd/|R| constraints require. Filter thread 55 mm constrains     ║
 * ║    front element diameter.                                         ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Stop sits in the d8 air gap between L4 and L5. Patent does     ║
 * ║    not specify exact position; inferred from Fig. 29 at           ║
 * ║    approximately 60% of d8 from the L4 rear surface.              ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ║    ✗ DO NOT include: parent/donor designs (use final design only) ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-zuiko-auto-macro-50f2",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO AUTO-MACRO 50mm f/2",
  subtitle: "US 4,708,445 EMBODIMENT 6 — OLYMPUS / HISASHI GOTO",
  specs: ["9 ELEMENTS / 7 GROUPS", "f ≈ 50.0 mm", "F/2.0", "2ω ≈ 45.6°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 50,
  apertureMarketing: 2,
  patentYear: 1987,
  elementCount: 9,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.01,
      fl: -97.2,
      glass: "F5 (603/380)",
      apd: false,
      role: "Front negative meniscus; achromatizes Group I with L2; ν₁ < 40 satisfies patent condition (3) for stable lateral chromatic aberration across magnification range",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.68,
      fl: 61.5,
      glass: "S-LAL59 (729/547)",
      apd: false,
      role: "Positive crown completing Group I achromat; Group I has weak positive power (f_I ≈ 158 mm) to keep marginal rays collimated during close focusing",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.66,
      fl: 50.4,
      glass: "LAC14 (773/497)",
      apd: false,
      role: "Thick positive meniscus, front half of Group II; provides converging power within the collectively negative front Gauss pair",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.75,
      fl: -36.0,
      glass: "581/408 (short flint family)",
      apd: false,
      role: "Thin negative meniscus, rear half of Group II; steeply curved rear surface (r₈) defines the Gauss inner doublet; immediately precedes stop gap",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6825,
      vd: 44.65,
      fl: -31.4,
      glass: "683/447 (barium/lanthanum flint family)",
      apd: false,
      cemented: "Da",
      role: "Negative component of rear cemented meniscus doublet (L5+L6); chromatic/field correction immediately behind stop",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 46.03,
      fl: 43.1,
      glass: "720/460 (lanthanum crown/flint border)",
      apd: false,
      cemented: "Da",
      role: "Positive component of rear cemented doublet (L5+L6); the doublet is weakly negative (f ≈ −155 mm), primarily serving field-flattening and chromatic correction",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.66,
      fl: 58.7,
      glass: "LAC14 (773/497)",
      apd: false,
      role: "Air-spaced positive meniscus between doublets; Petzval curvature correction and astigmatism balancing for macro performance",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.66,
      fl: 36.5,
      glass: "LAC14 (773/497)",
      apd: false,
      cemented: "Db",
      role: "Strongest positive element (f ≈ +36.5 mm); positive component of rear cemented doublet (L8+L9); provides final convergence to image",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.51,
      fl: -52.1,
      glass: "SF4 (755/275)",
      apd: false,
      cemented: "Db",
      role: "Rearmost negative element (patent claim feature); dense flint (ν_L < 40) satisfies patent condition (4) for lateral chromatic aberration correction across full magnification range",
    },
  ],

  /* ── Surface prescription ──
   *  Scaled from patent (f = 1) by ×50.016 to production 50 mm.
   *  Stop position inferred from Fig. 29 — d8 split ~60/40 from L4 rear.
   */
  surfaces: [
    // ── Group I (Patent Group I: L1 + L2, positive, f_I ≈ +158 mm) ──
    { label: "1", R: 60.319, d: 1.39, nd: 1.60342, elemId: 1, sd: 14.0 }, // L1 front
    { label: "2", R: 29.479, d: 2.01, nd: 1.0, elemId: 0, sd: 12.0 }, // L1 rear → air
    { label: "3", R: 91.034, d: 3.38, nd: 1.72916, elemId: 2, sd: 13.5 }, // L2 front
    { label: "4", R: -86.942, d: 0.12, nd: 1.0, elemId: 0, sd: 13.5 }, // L2 rear → air  ** variable (focusing) **

    // ── Group II (Patent Group II: L3 + L4, negative, f_II ≈ −328 mm) ──
    { label: "5", R: 20.501, d: 6.08, nd: 1.7725, elemId: 3, sd: 13.5 }, // L3 front
    { label: "6", R: 37.712, d: 1.52, nd: 1.0, elemId: 0, sd: 11.0 }, // L3 rear → air
    { label: "7", R: 248.938, d: 1.17, nd: 1.58144, elemId: 4, sd: 10.5 }, // L4 front
    { label: "8", R: 19.286, d: 6.0, nd: 1.0, elemId: 0, sd: 10.5 }, // L4 rear → air (to stop)

    // ── Aperture stop (inferred from Fig. 29 at ~60% of d8 gap) ──
    { label: "STO", R: 1e15, d: 4.16, nd: 1.0, elemId: 0, sd: 9.6 },

    // ── Group III (Patent Group III: L5–L9, positive, f_III ≈ +46 mm) ──
    { label: "9", R: -23.657, d: 1.08, nd: 1.6825, elemId: 5, sd: 10.0 }, // L5 front (cemented Da)
    { label: "10", R: 233.618, d: 4.65, nd: 1.72, elemId: 6, sd: 10.0 }, // L5/L6 junction (cemented Da)
    { label: "11", R: -35.521, d: 0.1, nd: 1.0, elemId: 0, sd: 10.5 }, // L6 rear → air
    { label: "12", R: -82.551, d: 2.87, nd: 1.7725, elemId: 7, sd: 11.0 }, // L7 front
    { label: "13", R: -29.719, d: 0.1, nd: 1.0, elemId: 0, sd: 11.0 }, // L7 rear → air
    { label: "14", R: 177.276, d: 4.23, nd: 1.7725, elemId: 8, sd: 11.0 }, // L8 front (cemented Db)
    { label: "15", R: -33.215, d: 1.28, nd: 1.7552, elemId: 9, sd: 10.5 }, // L8/L9 junction (cemented Db)
    { label: "16", R: -215.698, d: 38.37, nd: 1.0, elemId: 0, sd: 10.5 }, // L9 rear → air (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (focus mechanism) ──
   *  Floating focus: whole lens advances while d4 (L2→L3 gap) increases.
   *  Patent (Embodiment 6, claim 10) lists only d4 as variable; BFD is not
   *  given and must be computed. With d4 = 4.01 mm, paraxial trace gives
   *  f' = 51.01 mm and BFD-to-focal-point = 37.96 mm; for β = 0.50 the
   *  conjugate image distance from H' = f'(1+β) = 76.52 mm, so the actual
   *  close-focus BFD = 37.96 + 0.5 × 51.01 = 63.47 mm (unit-focus extension
   *  ≈ m × f' = 0.50 × 51 mm ≈ 25.5 mm added to the infinity BFD).
   *  NOTE: the original file had 37.97 mm here — that is the focal-point BFD
   *  for a collimated beam through the close-focus prescription, not the
   *  physical conjugate distance; it caused Groups II+III to animate backward.
   */
  var: {
    "4": [0.12, 4.01],
    "16": [38.37, 63.47],
  },

  varLabels: [
    ["4", "D4"],
    ["16", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I (+)", fromSurface: "1", toSurface: "4" },
    { text: "II (−)", fromSurface: "5", toSurface: "8" },
    { text: "III (+)", fromSurface: "9", toSurface: "16" },
  ],

  doublets: [
    { text: "Da", fromSurface: "9", toSurface: "11" },
    { text: "Db", fromSurface: "14", toSurface: "16" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.24,
  focusDescription:
    "Floating element: entire lens advances while the air gap between Group I (L1+L2) and Group II (L3+L4) increases, maintaining aberration correction from infinity to 1:2 magnification.",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
