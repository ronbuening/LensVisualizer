import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Carl Zeiss Hologon 15 mm f/8                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 1,241,637 B, single example (Glatzel & Schulz).   ║
 * ║  Inverted symmetric triplet — negative menisci flanking a          ║
 * ║  biconvex positive — covering 120° design field (110° on 35 mm).   ║
 * ║  3 elements / 3 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: unit focus — entire lens translates (Leica M version).     ║
 * ║  Contarex version was fixed-focus at the hyperfocal distance.      ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription normalized to f = 1.0000.                   ║
 * ║    All R, d, sd values scaled ×15 to f ≈ 15 mm production.        ║
 * ║                                                                    ║
 * ║  NOTE ON STOP PLACEMENT:                                           ║
 * ║    The aperture stop is physically inside the central element       ║
 * ║    L_II at its center plane — there is no air gap at the stop.     ║
 * ║    L_II is modeled as two half-elements (L_IIa, L_IIb) with the   ║
 * ║    STO surface at the junction, following the cemented-pair        ║
 * ║    convention. Both halves share nd = 1.71300 (LAK8). The actual   ║
 * ║    lens has 3 physical elements; the split is a modeling artifact. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Paraxial chief-ray estimation fails   ║
 * ║    for this ultrawide design (60° half-field invalidates small-    ║
 * ║    angle assumptions). SDs estimated from physical constraints:    ║
 * ║    inner meniscus surfaces limited by sd/|R| ≤ 0.86 (near-        ║
 * ║    hemispherical geometry per patent description); outer surfaces  ║
 * ║    fitted against the patent section silhouette so the rendered     ║
 * ║    lens reads more like the drawing's fuller outer shells and       ║
 * ║    broader central shoulders while staying inside the project's     ║
 * ║    current SD/slope/ratio limits. All constraints pass:            ║
 * ║    rim slope < 2.065, edge thickness > 0.5 mm, cross-gap          ║
 * ║    intrusion < 90%.                                                ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "zeiss-hologon-15f8",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS HOLOGON 15 mm f/8",
  visible: false,
  subtitle: "DE 1,241,637 B — GLATZEL & SCHULZ / CARL ZEISS",
  specs: ["3 ELEMENTS / 3 GROUPS", "f ≈ 15.0 mm", "F/8.0 (FIXED)", "2ω = 110°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 15,
  apertureMarketing: 8,
  patentYear: 1967,
  elementCount: 3,
  groupCount: 3,

  /* ── Elements ──
   *  L_II is split into two half-elements (L_IIa, L_IIb) at the internal
   *  aperture stop for rendering purposes. The physical lens has 3 elements.
   */
  elements: [
    {
      id: 1,
      name: "L_I",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      fl: -13.1,
      glass: "SF6 (Schott)",
      apd: false,
      role: "Front negative meniscus — field expansion, Petzval flattening, near-concentric oblique-ray control",
    },
    {
      id: 2,
      name: "L_IIa",
      label: "Element 2a (L_II front half)",
      type: "Biconvex Positive (front half, split at STO)",
      nd: 1.713,
      vd: 53.89,
      fl: 5.5,
      glass: "LAK8 (Schott)",
      apd: false,
      cemented: "L_II",
      role: "Central positive element (front half) — converging power, chromatic anchor",
    },
    {
      id: 3,
      name: "L_IIb",
      label: "Element 2b (L_II rear half)",
      type: "Biconvex Positive (rear half, split at STO)",
      nd: 1.713,
      vd: 53.89,
      fl: 5.5,
      glass: "LAK8 (Schott)",
      apd: false,
      cemented: "L_II",
      role: "Central positive element (rear half) — converging power, chromatic anchor",
    },
    {
      id: 4,
      name: "L_III",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      fl: -13.4,
      glass: "SF6 (Schott)",
      apd: false,
      role: "Rear negative meniscus — symmetry partner to L_I, field compression, Petzval flattening",
    },
  ],

  /* ── Surface prescription ──
   *  Patent surfaces r₁–r₆ → labels 1–6.
   *  STO inserted at center of L_II (d₃ split into two equal halves).
   *  All surfaces spherical.
   */
  surfaces: [
    { label: "1", R: 11.64, d: 7.9785, nd: 1.80518, elemId: 1, sd: 8.05 }, // L_I front (r₁)
    { label: "2", R: 3.843, d: 2.703, nd: 1.0, elemId: 0, sd: 3.45 }, // L_I rear → air (r₂)
    { label: "3", R: 5.6685, d: 3.8243, nd: 1.713, elemId: 2, sd: 2.98 }, // L_II front (r₃) → L_IIa
    { label: "STO", R: 1e15, d: 3.8243, nd: 1.713, elemId: 3, sd: 1.0 }, // Stop at center of L_II → L_IIb
    { label: "4", R: -5.508, d: 2.4045, nd: 1.0, elemId: 0, sd: 2.98 }, // L_II rear → air (r₄)
    { label: "5", R: -3.6285, d: 5.2365, nd: 1.80518, elemId: 4, sd: 3.24 }, // L_III front (r₅)
    { label: "6", R: -8.9835, d: 4.545, nd: 1.0, elemId: 0, sd: 6.55 }, // L_III rear → BFD (r₆)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Leica M version: entire lens translates, only BFD changes.
   *  Close focus at 0.2 m; extension ≈ f²/(d−f) = 1.22 mm.
   */
  var: {
    "6": [4.545, 3.33],
  },

  varLabels: [["6", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L_I", fromSurface: "1", toSurface: "2" },
    { text: "L_II", fromSurface: "3", toSurface: "4" },
    { text: "L_III", fromSurface: "5", toSurface: "6" },
  ],

  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 0.2,
  focusDescription:
    "Unit focus — entire optical assembly translates on helicoid (Leica M version). Fixed focus at hyperfocal distance in Contarex version.",

  /* ── Aperture configuration ── */
  nominalFno: 8,
  maxFstop: 8,
  fstopSeries: [8],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
