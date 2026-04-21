import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — LEICA ELMARIT-R 28mm f/2.8                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,591,257 Example 3 (Mandler, Edwards, Wagner).  ║
 * ║  Retrofocus wide-angle for Leicaflex SLR.                          ║
 * ║  8 elements / 6 groups, 2 cemented doublets, all spherical.       ║
 * ║  Focus: unit focusing (entire lens translates).                    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent at f=100 (d-line); all R, d, sd scaled ×0.28 to          ║
 * ║    production f≈28mm.                                              ║
 * ║                                                                    ║
 * ║  NOTE ON REFRACTIVE INDICES:                                        ║
 * ║    Patent specifies indices at the e-line (546.1 nm), per the      ║
 * ║    German convention standard in Leitz patents of this era.        ║
 * ║    These e-line values are used directly in the surface nd fields. ║
 * ║    The paraxial trace yields EFL≈29.2mm at e-line vs the 28mm     ║
 * ║    d-line design value — a ~4% chromatic focal shift.             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated via combined marginal +     ║
 * ║    chief ray trace at ~28° field (76% of full field, accounting   ║
 * ║    for ~1-stop natural vignetting at corners). Front meniscus      ║
 * ║    rear surfaces (r2, r4) capped at 0.77×|R| by cross-gap         ║
 * ║    overlap constraint with adjacent elements. 8% mechanical       ║
 * ║    clearance applied. All SDs validated for edge thickness,        ║
 * ║    cross-gap overlap, slope limit (<2.065), and SD ratio (<3.0).  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "elmarit-r-28f28",
  maker: "Leica",
  name: "LEICA ELMARIT-R 28mm f/2.8",
  subtitle: "US 3,591,257 Example 3 — Mandler / Edwards / Wagner",
  specs: ["8 ELEMENTS / 6 GROUPS", "f = 28 mm (e-line trace ≈ 29.2 mm)", "F/2.8", "2ω ≈ 74°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 28,
  apertureMarketing: 2.8,
  patentYear: 1971,
  elementCount: 8,
  groupCount: 6,

  /* ── Elements ──
   *  All glass types identified against SCHOTT catalog (1960s formulations).
   *  Patent indices are at e-line (546.1 nm); d-line values from catalog shown in glass field.
   *  Element nd/vd use patent e-line values for consistency with surface data.
   */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.62286,
      vd: 60.08,
      fl: -76.5,
      glass: "SK16 (SCHOTT)",
      apd: false,
      role: "Front negative meniscus — diverges beam for retrofocus BFD extension; low-dispersion crown minimizes lateral chromatic contribution",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62286,
      vd: 60.08,
      fl: -71.6,
      glass: "SK16 (SCHOTT)",
      apd: false,
      role: "Second front meniscus — distributes negative power across two elements for off-axis aberration control",
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.79227,
      vd: 47.15,
      fl: 14.1,
      glass: "LaF21 (SCHOTT)",
      apd: false,
      cemented: "D1",
      role: "Principal positive element — thick biconvex of lanthanum flint providing majority of system convergence",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.81265,
      vd: 25.24,
      fl: -38.3,
      glass: "SF6 (SCHOTT)",
      apd: false,
      cemented: "D1",
      role: "Achromatizing negative — high-dispersion dense flint cemented to L3; Δνₑ ≈ 22 provides primary chromatic correction",
    },
    {
      id: 5,
      name: "L31",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.62286,
      vd: 60.08,
      fl: -167.1,
      glass: "SK16 (SCHOTT)",
      apd: false,
      role: "Weakly negative meniscus behind stop — controls spherical aberration and coma in diverging beam; field flattener",
    },
    {
      id: 6,
      name: "L32",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.72823,
      vd: 37.85,
      fl: 13.7,
      glass: "LaF10 (SCHOTT)",
      apd: false,
      cemented: "D2",
      role: "Nearly flat front, strongly convex rear — concentrates power at cemented interface to reduce ghosting",
    },
    {
      id: 7,
      name: "L33",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.81265,
      vd: 25.24,
      fl: -20.2,
      glass: "SF6 (SCHOTT)",
      apd: false,
      cemented: "D2",
      role: "Rear-group achromatizer — SF6 dense flint paired with LaF10 (Δνₑ ≈ 13) for local chromatic correction",
    },
    {
      id: 8,
      name: "L34",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.62408,
      vd: 36.11,
      fl: -39.0,
      glass: "F2 (SCHOTT)",
      apd: false,
      role: "Final negative meniscus — primary field curvature corrector; large Petzval flattening contribution from strongly curved front surface",
    },
  ],

  /* ── Surface prescription ──
   *  Scaled from patent (f=100) to production (f≈28mm) by ×0.28.
   *  Refractive indices at e-line (546.1 nm) per patent convention.
   *  Stop position from patent: a₃₁=2.14 (L4→stop), a₃₂=8.35 (stop→L5) at f=100.
   */
  surfaces: [
    { label: "1", R: 27.661, d: 1.52, nd: 1.62286, elemId: 1, sd: 15.4 },
    { label: "2", R: 17.136, d: 2.761, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "3", R: 28.448, d: 1.52, nd: 1.62286, elemId: 2, sd: 14.0 },
    { label: "4", R: 17.01, d: 14.336, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "5", R: 16.828, d: 8.602, nd: 1.79227, elemId: 3, sd: 10.4 },
    { label: "6", R: -25.536, d: 4.931, nd: 1.81265, elemId: 4, sd: 7.7 },
    { label: "7", R: -153.804, d: 0.599, nd: 1.0, elemId: 0, sd: 6.2 },
    { label: "STO", R: 1e15, d: 2.338, nd: 1.0, elemId: 0, sd: 5.7 },
    { label: "8", R: -15.789, d: 3.161, nd: 1.62286, elemId: 5, sd: 6.0 },
    { label: "9", R: -20.042, d: 0.655, nd: 1.0, elemId: 0, sd: 6.4 },
    { label: "10", R: 932.4, d: 3.811, nd: 1.72823, elemId: 6, sd: 6.7 },
    { label: "11", R: -10.102, d: 1.68, nd: 1.81265, elemId: 7, sd: 7.3 },
    { label: "12", R: -28.14, d: 3.811, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "13", R: -9.694, d: 1.52, nd: 1.62408, elemId: 8, sd: 7.4 },
    { label: "14", R: -17.08, d: 18.396, nd: 1.0, elemId: 0, sd: 7.8 },
  ],

  /* ── Aspherical coefficients — none (all spherical) ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Entire lens translates for focusing. Only BFD changes.
   *  Close focus: 0.30m → extension ≈ 2.88mm at f=28mm.
   */
  var: {
    "14": [18.396, 21.278],
  },
  varLabels: [["14", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (FRONT NEG (f₁≈−36))", fromSurface: "1", toSurface: "4" },
    { text: "G2 (POS DOUBLET (f₂≈+20))", fromSurface: "5", toSurface: "7" },
    { text: "G3 (REAR NEG (f₃≈−105))", fromSurface: "8", toSurface: "14" },
  ],

  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription: "Unit focusing — entire optical assembly translates along the optical axis.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
