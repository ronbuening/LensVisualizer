import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — PENTAX-110 50mm f/2.8                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,289,385 Example 1 (Asahi Kogaku / Yamagata).   ║
 * ║  Five-element, five-group rear-stop design for the Pentax Auto 110 ║
 * ║  SLR system, optimized for compact total track (K ≈ 1.05) with    ║
 * ║  long back focal distance for the body-integral shutter/aperture.  ║
 * ║  5 elements / 5 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focus (entire lens translates).                       ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 100; all R, d, sd values scaled ×0.5 to          ║
 * ║    f ≈ 50 mm production focal length.                             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    SDs estimated from combined marginal + chief ray heights at     ║
 * ║    60% field fraction with 8% mechanical clearance. L1 front SD   ║
 * ║    constrained by edge-thickness limit (ET ≈ 0.5 mm at SD 15.5). ║
 * ║    L2 front SD constrained by sd/|R| ≤ 0.88 (slope < 62°).       ║
 * ║    Filter thread Ø 37.5 mm confirms front clear aperture.         ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                           ║
 * ║    Rear stop diaphragm — the Pentax Auto 110 body houses the      ║
 * ║    shutter/aperture mechanism behind the lens mount.  STO placed   ║
 * ║    2.5 mm behind last surface (production scale), inferred from   ║
 * ║    body register geometry.  Only the S10-to-STO air gap varies    ║
 * ║    during unit focus; STO-to-image distance is fixed.             ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:          ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax110-50f28",
  maker: "Pentax",
  name: "PENTAX-110 50mm f/2.8",
  subtitle: "US 4,289,385 Example 1 — Asahi Kogaku / Yamagata",
  specs: ["5 ELEMENTS / 5 GROUPS", "f ≈ 50.0 mm", "F/2.8", "2ω ≈ 24°", "ALL SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50.0,
  apertureMarketing: 2.8,
  lensMounts: ["pentax-110"],
  imageFormat: "110",
  patentYear: 1981,
  elementCount: 5,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      fl: 47.2,
      glass: "S-BSM14 (OHARA)",
      apd: false,
      role: "Front positive collector; barium crown with moderate index provides power with manageable curvature. Primary positive Petzval contributor from the front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      fl: 50.8,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      role: "Second positive collector; thickest element in the design. Highest Abbe number in the system — primary achromatizing crown partner against the flints in L3–L5. Thick meniscus shape reduces field curvature per unit of power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Near Plano-Concave Negative",
      nd: 1.80518,
      vd: 25.4,
      fl: -14.3,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Architectural linchpin — powerful diverger whose rear surface carries the single strongest refraction in the design. Nearly cancels L1+L2 convergence, making the front three elements near-afocal (f ≈ 351), which produces the long BFD needed for the rear-stop body. Largest single negative Petzval contributor. Dense flint provides the primary chromatic counterweight to the front crowns.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.74077,
      vd: 27.8,
      fl: 136.9,
      glass: "S-TIH13 (OHARA)",
      apd: false,
      role: "Very weakly positive meniscus, concave to object — primary role is coma and astigmatism correction rather than convergence. Near-zero net Petzval contribution by design. Forms second achromatic correction stage with L5.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.66446,
      vd: 35.8,
      fl: 39.8,
      glass: "J-BASF2 (Hikari)",
      apd: false,
      role: "Final converging element — the most powerful positive element. Refocuses the divergent beam from L3/L4 onto the image plane. Uses flint glass (unusual for a positive element), prioritizing Petzval balance and higher-order aberration control over simple chromatism. Last element before the rear stop diaphragm.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent US 4,289,385, Example 1 — all values scaled ×0.5 from f=100.
   *  Stop diaphragm placed behind L5 per patent description.
   */
  surfaces: [
    // L1 — Positive Meniscus, convex to object
    { label: "1", R: 22.8675, d: 5.4265, nd: 1.60311, elemId: 1, sd: 15.5 },
    { label: "2", R: 105.45, d: 0.645, nd: 1.0, elemId: 0, sd: 14.5 },

    // L2 — Positive Meniscus, convex to object
    { label: "3", R: 16.6925, d: 7.936, nd: 1.51633, elemId: 2, sd: 14.5 },
    { label: "4", R: 38.5125, d: 1.5775, nd: 1.0, elemId: 0, sd: 10.3 },

    // L3 — Near Plano-Concave Negative
    { label: "5", R: 1696.3275, d: 1.7955, nd: 1.80518, elemId: 3, sd: 8.9 },
    { label: "6", R: 11.4585, d: 4.95, nd: 1.0, elemId: 0, sd: 8.1 },

    // L4 — Positive Meniscus, concave to object
    { label: "7", R: -16.6955, d: 1.6765, nd: 1.74077, elemId: 4, sd: 6.6 },
    { label: "8", R: -14.9475, d: 1.1605, nd: 1.0, elemId: 0, sd: 6.6 },

    // L5 — Positive Meniscus, convex to object
    { label: "9", R: 21.7745, d: 1.617, nd: 1.66446, elemId: 5, sd: 6.2 },
    { label: "10", R: 119.0405, d: 2.5, nd: 1.0, elemId: 0, sd: 5.7 },

    // Rear stop diaphragm — placed ~2.5 mm behind L5 rear (inferred from
    // Pentax Auto 110 body register geometry; shutter/iris sits in the body
    // behind the lens mount).  d = remaining BFD to image plane (fixed).
    { label: "STO", R: 1e15, d: 23.14, nd: 1.0, elemId: 0, sd: 4.1 },
  ],

  /* ── Aspherical coefficients — all spherical design ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates forward; only the air gap
   *  between L5 rear (surface 10) and the body-mounted stop changes.
   *  The stop-to-image distance is fixed (body geometry).
   */
  var: {
    "10": [2.5, 5.441],
  },
  varLabels: [["10", "BF"]],

  /* ── Group annotations ── */
  groups: [
    { text: "FRONT PAIR", fromSurface: "1", toSurface: "4" },
    { text: "REAR PAIR", fromSurface: "7", toSurface: "10" },
  ],

  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 0.9,
  focusDescription: "Unit focus — entire lens assembly translates forward via helicoid barrel. MFD 0.9 m.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  apertureBlades: 2,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
