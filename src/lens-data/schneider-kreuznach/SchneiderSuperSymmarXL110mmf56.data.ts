import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║   LENS DATA — SCHNEIDER SUPER-SYMMAR XL 5.6/110 ASPHERIC          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,870,234, Example 2 / Claim 3                   ║
 * ║    (Jos. Schneider Optische Werke Kreuznach / Ebbesmeier née       ║
 * ║    Schitthof).  German priority DE 196 36 152.4.                   ║
 * ║  Compact wide-angle lens for large-format photography.             ║
 * ║  6 elements / 5 groups (patent); 6 elements / 4 groups            ║
 * ║    (production, probable L4b–L5 cementation).                      ║
 * ║  1 aspherical surface (r9, rear of cemented doublet L4).           ║
 * ║  Focus: unit focus (entire lens moves on bellows/rail).            ║
 * ║                                                                    ║
 * ║  NOTE ON SPECTRAL CONVENTION:                                      ║
 * ║    This patent tabulates refractive indices and Abbe numbers at    ║
 * ║    the e-line (546.1 nm), as is conventional for German optical    ║
 * ║    patents.  All ne and νe values are transcribed directly as the  ║
 * ║    nd / vd fields to preserve the prescription exactly as          ║
 * ║    published.  Glass labels are intentionally marked Unmatched so  ║
 * ║    the d-line Sellmeier resolver does not apply catalog curves to  ║
 * ║    e-line-retained prescription data.  The paraxial EFL at e-line  ║
 * ║    is 110.64 mm.                                                  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not publish SDs.  Estimated via combined marginal   ║
 * ║    + chief ray trace at 60% of the maximum half-field (52.5°)     ║
 * ║    with 8% mechanical clearance.  Front element (s1) constrained  ║
 * ║    by M67 production filter thread.  Rear surface of L1 (s2)      ║
 * ║    constrained by sd/|R| < 0.90.  L4a junction (s8) constrained   ║
 * ║    by edge-thickness limit.                                        ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL SURFACE:                                       ║
 * ║    The patent designates r9 = -31.197 mm as aspherical but does   ║
 * ║    NOT publish the conic constant or polynomial coefficients.      ║
 * ║    The asph entry uses the spherical baseline (K=0, all A=0).     ║
 * ║    The surface label carries the "A" suffix to document the       ║
 * ║    aspherical designation.                                         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "schneider-super-symmar-xl-110-f56",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH SUPER-SYMMAR XL 110mm f/5.6 ASPHERIC",
  subtitle: "US 5,870,234 EXAMPLE 2 — SCHNEIDER-KREUZNACH / EBBESMEIER",
  specs: [
    "6 ELEMENTS / 5 GROUPS (PATENT)",
    "f ≈ 110.6 mm (e-line)",
    "F/5.6",
    "2ω ≈ 105°",
    "1 ASPHERICAL SURFACE (COEFFICIENTS UNPUBLISHED)",
    "IMAGE CIRCLE 288 mm AT f/22",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 110,
  focalLengthDesign: 110.6,
  apertureMarketing: 5.6,
  lensMounts: ["large-format-lens-board"],
  imageFormat: "5x7" as const,
  patentNumber: "US 5,870,234",
  patentAuthors: ["Hiltrud Ebbesmeier née Schitthof"],
  patentAssignees: ["Jos Schneider Optische Werke GmbH"],
  patentYear: 1999,
  elementCount: 6,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.52583,
      vd: 51.25,
      fl: -53.2,
      glass: "Unmatched (Schott KF9; patent e-line ne=1.52583, ve=51.25 stored as nd/vd)",
      apd: false as const,
      role: "Front negative meniscus; intercepts wide-field rays and bends them inward. Low-index crown-flint per patent requirement.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.75844,
      vd: 52.09,
      fl: 72.8,
      glass: "Unmatched (Schott N-LAK33B; patent e-line ne=1.75844, ve=52.09 stored as nd/vd)",
      apd: false as const,
      role: "Primary positive power element. High-index lanthanum crown minimises Petzval contribution per unit of power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.75844,
      vd: 52.09,
      fl: 167.3,
      glass: "Unmatched (Schott N-LAK33B; patent e-line ne=1.75844, ve=52.09 stored as nd/vd)",
      apd: false as const,
      role: "Weak positive meniscus before stop; astigmatism and coma corrector.",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.59142,
      vd: 61.03,
      fl: 25.1,
      glass: "Unmatched (Schott N-SK5; patent e-line ne=1.59142, ve=61.03 stored as nd/vd)",
      apd: false as const,
      cemented: "L4",
      role: "Convergent partner of cemented achromat L4. Low-dispersion dense crown; near-index / far-dispersion pairing with L4b.",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 5",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.62408,
      vd: 36.12,
      fl: -72.0,
      glass: "Unmatched (Schott F2-class; patent e-line ne=1.62408, ve=36.12 stored as nd/vd)",
      apd: false as const,
      cemented: "L4",
      role: "Divergent partner of cemented achromat. High-dispersion flint; aspherical rear surface corrects oblique SA and coma across the 105° field.",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.50349,
      vd: 56.13,
      fl: -50.6,
      glass: "Unmatched (Schott K10; patent e-line ne=1.50349, ve=56.13 stored as nd/vd)",
      apd: false as const,
      role: "Rear negative element; field flattener pulling Petzval sum toward zero. Low-index crown per patent requirement.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 169.672, d: 3.0, nd: 1.52583, elemId: 1, sd: 26.0 }, // L1 front
    { label: "2", R: 23.884, d: 8.465, nd: 1.0, elemId: 0, sd: 21.0 }, // L1 rear → air
    { label: "3", R: 27.751, d: 12.86, nd: 1.75844, elemId: 2, sd: 23.0 }, // L2 front
    { label: "4", R: 44.624, d: 7.19, nd: 1.0, elemId: 0, sd: 17.5 }, // L2 rear → air
    { label: "5", R: 28.382, d: 2.4, nd: 1.75844, elemId: 3, sd: 14.0 }, // L3 front
    { label: "6", R: 35.229, d: 2.3, nd: 1.0, elemId: 0, sd: 12.5 }, // L3 rear → air (to stop)
    { label: "STO", R: 1e15, d: 2.235, nd: 1.0, elemId: 0, sd: 10.5 }, // Aperture stop — inferred from patent Fig. 1 iris placement, ~mid-gap in d6
    { label: "7", R: 73.026, d: 10.47, nd: 1.59142, elemId: 4, sd: 12.5 }, // L4a front
    { label: "8", R: -17.622, d: 3.5, nd: 1.62408, elemId: 5, sd: 14.5 }, // L4a–L4b cemented junction
    { label: "9A", R: -31.197, d: 1.36, nd: 1.0, elemId: 0, sd: 15.5 }, // L4b rear → air (ASPHERICAL — coefficients unpublished)
    { label: "10", R: -30.837, d: 3.3, nd: 1.50349, elemId: 6, sd: 16.0 }, // L5 front
    { label: "11", R: 152.036, d: 101.27, nd: 1.0, elemId: 0, sd: 17.5 }, // L5 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ──
   *  The patent marks surface r9 = -31.197 mm as aspherical (asterisk in
   *  the prescription table) but does NOT publish the sag equation, conic
   *  constant, or polynomial coefficients.  The entry below preserves the
   *  spherical baseline; the "9A" label documents the aspherical designation.
   */
  asph: {
    "9A": {
      K: 0,
      A4: 0,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates on bellows/rail; only BFD changes.
   *  Close focus at MFD ≈ 0.70 m (≈ 1:3.3 magnification).
   */
  var: {
    "11": [101.27, 134.46],
  },

  varLabels: [["11", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1", fromSurface: "1", toSurface: "2" },
    { text: "L2", fromSurface: "3", toSurface: "4" },
    { text: "L3", fromSurface: "5", toSurface: "6" },
    { text: "L4", fromSurface: "7", toSurface: "9A" },
    { text: "L5", fromSurface: "10", toSurface: "11" },
  ],

  doublets: [{ text: "L4", fromSurface: "7", toSurface: "9A" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.7,
  focusDescription: "Unit focus — entire lens moves on view-camera bellows or rail. No internal focusing groups.",

  /* ── Aperture configuration ── */
  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22, 32, 45],

  /* ── Layout tuning ── */
  scFill: 0.35,
  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
