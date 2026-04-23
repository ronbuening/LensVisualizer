import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CARL ZEISS DISTAGON T* 35mm f/1.4            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,915,558 Example 8 (Carl Zeiss / Erhard Glatzel)║
 * ║  High-power wide-angle retrofocus design for SLR.                  ║
 * ║  9 elements / 8 groups, 1 aspherical surface.                     ║
 * ║  Focus: unit focus approximation (patent provides infinity only;   ║
 * ║    production lens uses floating element to 0.3 m MFD).            ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent at F = 1.0000; all R, d, sd values scaled ×36.5         ║
 * ║    to production f ≈ 36.5 mm (marketed as 35 mm).                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent provides no SDs. Estimated from combined marginal +      ║
 * ║    chief ray envelope at 60% field (offAxisFieldFrac default),     ║
 * ║    with 8% mechanical clearance, capped against 67 mm filter      ║
 * ║    thread. Front group SDs refined against edge thickness and      ║
 * ║    cross-gap sag constraints.                                      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "zeiss-distagon-35f14",
  maker: "Carl Zeiss",
  name: "CARL ZEISS DISTAGON T* 35mm f/1.4",
  subtitle: "US 3,915,558 EXAMPLE 8 — CARL ZEISS / GLATZEL",
  specs: ["9 ELEMENTS / 8 GROUPS", "f ≈ 36.5 mm", "F/1.4", "2ω ≈ 62°", "1 ASPHERICAL SURFACE"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 35,
  focalLengthDesign: 36.5,
  apertureMarketing: 1.4,
  patentYear: 1975,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5827,
      vd: 46.5,
      fl: -65.6,
      glass: "Barium flint 583/465",
      apd: false,
      role: "Front negative diverger — expands the beam to establish the retrofocus geometry. Concave toward front.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      nd: 1.5481,
      vd: 45.8,
      type: "Negative Meniscus",
      fl: -222.6,
      glass: "LLF1 (Schott)",
      apd: false,
      role: "Secondary weak negative diverger — distributes front-group negative power across two surfaces for higher-order aberration control.",
    },
    {
      id: 3,
      name: "L3a",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      fl: 60.1,
      glass: "N-LaK8 (Schott)",
      apd: false,
      role: "Dominant positive converger — front element of split component III, carrying strongest positive power in the system.",
    },
    {
      id: 4,
      name: "L3b",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: 111.9,
      glass: "N-LaK8 (Schott)",
      apd: false,
      role: "Rear element of split component III — air-spaced from L3a to create ray-height separation for off-axis aberration correction.",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: 258.6,
      glass: "N-LaK8 (Schott)",
      apd: false,
      role: "Von Hoegh meniscus (component M) — weak positive meniscus convex toward front, provides astigmatism and field curvature control.",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 6",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.5481,
      vd: 45.8,
      fl: -64.3,
      glass: "LLF1 (Schott)",
      apd: false,
      role: "First element of rear member — aspherical front surface corrects zonal spherical aberration at f/1.4. Low-index glass per Rules E′/E″.",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.8467,
      vd: 23.8,
      fl: -27.4,
      glass: "SF57 (Schott)",
      apd: false,
      role: "Achromatic flint — high-dispersion element of the cemented doublet, provides primary chromatic correction in the rear member.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7883,
      vd: 47.4,
      fl: 27.1,
      glass: "N-LaF21 (Schott)",
      apd: false,
      role: "Achromatic crown — low-dispersion positive element of the cemented doublet. Cemented to L6 to avoid total internal reflection at f/1.4.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.7883,
      vd: 47.4,
      fl: 59.7,
      glass: "N-LaF21 (Schott)",
      apd: false,
      role: "Final positive converger — nearly plano-convex, bends rays to final convergence. Rear principal plane near last vertex (s′/F = 0.986).",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 304.136, d: 2.309, nd: 1.5827, elemId: 1, sd: 28.5 }, // L1 front
    { label: "2", R: 33.876, d: 11.919, nd: 1.0, elemId: 0, sd: 28.0 }, // L1 rear → air
    { label: "3", R: 48.549, d: 3.374, nd: 1.5481, elemId: 2, sd: 25.0 }, // L2 front
    { label: "4", R: 33.876, d: 12.23, nd: 1.0, elemId: 0, sd: 24.5 }, // L2 rear → air (α)
    { label: "5", R: 47.508, d: 6.778, nd: 1.713, elemId: 3, sd: 22.0 }, // L3a front
    { label: "6", R: -411.465, d: 3.032, nd: 1.0, elemId: 0, sd: 21.5 }, // L3a rear → air
    { label: "7", R: -1736.122, d: 4.92, nd: 1.713, elemId: 4, sd: 21.5 }, // L3b front
    { label: "8", R: -76.387, d: 0.05, nd: 1.0, elemId: 0, sd: 20.5 }, // L3b rear → air
    { label: "9", R: 28.503, d: 6.708, nd: 1.713, elemId: 5, sd: 20.5 }, // L4 front (meniscus)
    { label: "10", R: 30.412, d: 4.0, nd: 1.0, elemId: 0, sd: 17.5 }, // L4 rear → CS
    { label: "STO", R: 1e15, d: 4.605, nd: 1.0, elemId: 0, sd: 13.04 }, // Aperture stop (position inferred from Fig.4a)
    { label: "11A", R: -252.215, d: 2.47, nd: 1.5481, elemId: 6, sd: 14.0 }, // L5 front (ASPHERICAL)
    { label: "12", R: 41.139, d: 4.659, nd: 1.0, elemId: 0, sd: 13.0 }, // L5 rear → air
    { label: "13", R: -43.267, d: 1.617, nd: 1.8467, elemId: 7, sd: 13.5 }, // L6 front
    { label: "14", R: 51.053, d: 7.27, nd: 1.7883, elemId: 8, sd: 13.5 }, // L6–L7 cement junction
    { label: "15", R: -34.368, d: 0.623, nd: 1.0, elemId: 0, sd: 15.5 }, // L7 rear → air
    { label: "16", R: 322.113, d: 3.846, nd: 1.7883, elemId: 9, sd: 15.5 }, // L8 front
    { label: "17", R: -54.857, d: 35.977, nd: 1.0, elemId: 0, sd: 14.5 }, // L8 rear → BFD
  ],

  /* ── Aspherical coefficients ──
   *  Patent sag form: P(H) = c₁H² + c₂H⁴  (c₃=c₄=c₅=0)
   *  where c₁ = 1/(2R), c₂ = −7.9340850×10⁻¹ (normalized F=1).
   *  Converted to standard conic+polynomial with K=0 (spherical base curve):
   *    A₄ = c₂ − 1/(8R³) = −0.7930 (normalized) → −1.631×10⁻⁵ mm⁻³ (scaled)
   */
  asph: {
    "11A": {
      K: 0,
      A4: -1.6308e-5,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings ──
   *  Patent provides infinity-focus data only. Production lens uses floating
   *  element focusing, but close-focus spacing data is unavailable.
   *  Modeled as unit focus (BFD change only) as an approximation.
   */
  var: {
    "17": [35.977, 30.921],
  },

  varLabels: [["17", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (V)", fromSurface: "1", toSurface: "10" },
    { text: "REAR (H)", fromSurface: "11A", toSurface: "17" },
  ],

  doublets: [{ text: "D1", fromSurface: "13", toSurface: "15" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription: "Unit focus approximation. Production lens uses floating element focusing to 0.3 m MFD.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
