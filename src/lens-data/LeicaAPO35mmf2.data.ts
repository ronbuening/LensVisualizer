import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — LEICA APO-SUMMICRON-M 35 f/2 ASPH.          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2022/0066176 A1, Example 1 (Roth & Keller,       ║
 * ║    Leica Camera AG). Priority: DE 10 2018 132 472.3 (2018-12-17). ║
 * ║  Quasi-symmetrical wide-angle prime for Leica M mount.            ║
 * ║  10 elements / 5 groups, 4 aspherical surfaces (on 3 elements).   ║
 * ║  Focus: floating rear group (HG) — VG+BL+MG move together,       ║
 * ║    HG moves in the same direction but with shorter travel.        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent normalized to f = 1 mm. All R, d, sd values scaled      ║
 * ║    ×35 to production focal length f ≈ 35 mm.                      ║
 * ║    Aspherical coefficients scaled accordingly:                     ║
 * ║      A_{2n,prod} = A_{2n,norm} / 35^(2n−1).                      ║
 * ║                                                                    ║
 * ║  NOTE ON REFRACTIVE INDICES:                                       ║
 * ║    Patent specifies n_e (546.07 nm) and v_e. Data file uses       ║
 * ║    n_d (587.56 nm) and v_d from catalog cross-references.         ║
 * ║    Computed EFL at d-line: ~34.75 mm (vs. 35.0 at e-line).       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Estimated from paraxial   ║
 * ║    2-ray trace (marginal + 60% chief ray) with ~10% mechanical    ║
 * ║    clearance, constrained by E39 filter thread (front) and        ║
 * ║    M-mount bayonet (rear). Edge thickness validated ≥ 0 for all   ║
 * ║    elements at the assigned SDs.                                   ║
 * ║                                                                    ║
 * ║  NOTE ON VARIABLE GAPS:                                            ║
 * ║    Patent does not provide explicit close-focus spacing tables.    ║
 * ║    Close-focus gaps estimated from paraxial conjugate equations    ║
 * ║    with an assumed floating ratio (δ_rear/δ_front ≈ 0.70).       ║
 * ║    These are approximate and flagged as inferred.                  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-apo-summicron-m-35f2",
  maker: "Leica",
  name: "LEICA APO-SUMMICRON-M 35 f/2 ASPH.",
  subtitle: "US 2022/0066176 A1 Ex. 1 — Leica Camera AG / Roth & Keller",
  specs: [
    "10 ELEMENTS / 5 GROUPS",
    "f ≈ 34.8 mm (d-line)",
    "F/2.0",
    "2ω ≈ 62.2°",
    "4 ASPHERICAL SURFACES (3 ELEMENTS)",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 35,
  focalLengthDesign: 34.8,
  apertureMarketing: 2.0,
  apertureDesign: 2.0,
  patentYear: 2022,
  elementCount: 10,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.8515,
      vd: 40.78,
      fl: 19.0,
      glass: "S-LAH89 (OHARA)",
      apd: false,
      role: "Front positive; aspherical object surface controls distortion. Patent-specified for Knoop hardness ≥ 600 and acid resistance.",
      cemented: "G1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      fl: -18.0,
      glass: "N-KZFS5 (Schott) / S-NBH5 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ −0.004 (patent-stated for KZFS-type elements)",
      role: "Nearly afocal doublet with L1 (G1, f'/f ≈ 48). Begins lateral color and secondary spectrum correction.",
      cemented: "G1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      fl: -18.7,
      glass: "N-KZFS5 (Schott) / S-NBH5 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ −0.004",
      role: "Negative element in G2 doublet; Petzval sum reduction. Exempted from D/d_M ≥ 18 thinness constraint per patent.",
      cemented: "G2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.76,
      fl: 16.6,
      glass: "S-LAH79 (OHARA)",
      apd: false,
      role: "Highest-index element (nd ≈ 1.883). Primary power element of VG (G2, f'/f = 2.47). High n minimizes Petzval contribution.",
      cemented: "G2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 53.4,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote: "ΔPgF = +0.031 (patent-stated)",
      role: "Front crown of apochromatic triplet (G3). Nearly plano-convex; power concentrated at cemented rear surface.",
      cemented: "G3",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      fl: -19.7,
      glass: "N-KZFS5 (Schott) / S-NBH5 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ −0.004",
      role: "Central flint of apochromatic triplet (G3). APD flint sandwiched between FPL51 crowns for three-wavelength correction.",
      cemented: "G3",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 26.1,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote: "ΔPgF = +0.031 (patent-stated)",
      role: "Rear crown of apochromatic triplet (G3). Stronger curvature than L5; carries more refractive power.",
      cemented: "G3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.8515,
      vd: 40.78,
      fl: 15.4,
      glass: "S-LAH89 (OHARA)",
      apd: false,
      role: "Strongest positive element (f' = 15.4 mm). Aspherical front surface minimizes spherical aberration. Mirrors L1 across stop (quasi-symmetry).",
      cemented: "G4",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      fl: -16.8,
      glass: "N-KZFS5 (Schott) / S-NBH5 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPgF ≈ −0.004",
      role: "Fourth KZFS element; completes G4 doublet. Insensitive to decentration in combined assembly.",
      cemented: "G4",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.37,
      fl: -115.0,
      glass: "L-BAL42 (OHARA PGM)",
      apd: false,
      role: "Field corrector; both surfaces aspherical (precision glass molded). Weak net power but critical for astigmatism/coma/field curvature over full 62° field.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent normalized to f = 1 mm; all R, d values here ×35.
   *  nd values: d-line (587.56 nm) from catalog cross-references.
   *  Patent aspherical surfaces: 1, 12, 15, 16 → labels 1A, 12A, 15A, 16A.
   */
  surfaces: [
    // ── Front Group (VG) ──
    // G1: L1 + L2 cemented doublet
    { label: "1A", R: 54.11, d: 5.95, nd: 1.8515, elemId: 1, sd: 15.0 }, // L1 front (asph)
    { label: "2", R: -21.98, d: 1.05, nd: 1.65412, elemId: 2, sd: 12.0 }, // L1→L2 junction
    { label: "3", R: 25.97, d: 3.5, nd: 1.0, elemId: 0, sd: 10.0 }, // L2 rear → air
    // G2: L3 + L4 cemented doublet
    { label: "4", R: -27.65, d: 2.1, nd: 1.65412, elemId: 3, sd: 9.0 }, // L3 front
    { label: "5", R: 22.68, d: 4.55, nd: 1.883, elemId: 4, sd: 9.0 }, // L3→L4 junction
    { label: "6", R: -37.835, d: 1.4, nd: 1.0, elemId: 0, sd: 9.0 }, // L4 rear → air

    // ── Aperture Stop ──
    { label: "STO", R: 1e15, d: 1.4, nd: 1.0, elemId: 0, sd: 8.75 },

    // ── Middle Group (MG) ──
    // G3: L5 + L6 + L7 cemented triplet
    { label: "8", R: 182.315, d: 6.65, nd: 1.497, elemId: 5, sd: 9.5 }, // L5 front
    { label: "9", R: -30.66, d: 1.05, nd: 1.65412, elemId: 6, sd: 10.5 }, // L5→L6 junction
    { label: "10", R: 22.435, d: 5.25, nd: 1.497, elemId: 7, sd: 10.5 }, // L6→L7 junction
    { label: "11", R: -28.315, d: 0.35, nd: 1.0, elemId: 0, sd: 10.8 }, // L7 rear → air

    // ── Rear Group (HG) ──
    // G4: L8 + L9 cemented doublet
    { label: "12A", R: 28.07, d: 7.7, nd: 1.8515, elemId: 8, sd: 11.0 }, // L8 front (asph)
    { label: "13", R: -21.56, d: 1.05, nd: 1.65412, elemId: 9, sd: 11.0 }, // L8→L9 junction
    { label: "14", R: 22.855, d: 6.65, nd: 1.0, elemId: 0, sd: 11.0 }, // L9 rear → air
    // G5: L10 single lens
    { label: "15A", R: -52.15, d: 1.05, nd: 1.58313, elemId: 10, sd: 10.5 }, // L10 front (asph)
    { label: "16A", R: -235.97, d: 14.39, nd: 1.0, elemId: 0, sd: 10.5 }, // L10 rear (asph) → image; d = BFD
  ],

  /* ── Aspherical coefficients ──
   *  Patent convention: z(h) = h²/r₀ / [1+√(1−(1+k)(h/r₀)²)] + a2·h⁴ + a3·h⁶ + ...
   *  Patent coefficients are at f = 1 normalization.
   *  Below: scaled to production (f ≈ 35 mm) via A_{2n,prod} = A_{2n,norm} / 35^(2n−1).
   *  All K = 0 (spherical base conic, polynomial-only departure).
   *
   *  The patent specifies only through A8 for surfaces 1 and 12, and through
   *  A12 for surface 15 and A8 for surface 16. Higher-order terms are zero.
   *  Note: A8 contributions for surfaces 1A and 12A are negligible at production scale
   *  (~10⁻²² × h⁸) but included for completeness.
   */
  asph: {
    "1A": {
      K: 0,
      A4: 3.6595e-10,
      A6: -3.4659e-8,
      A8: 3.7364e-22,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: 0,
      A4: 2.5913e-11,
      A6: -9.9778e-9,
      A8: 7.4014e-22,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 2.1901e-9,
      A6: 6.8035e-7,
      A8: 1.4114e-20,
      A10: 2.1561e-13,
      A12: 8.0778e-33,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: 1.5566e-9,
      A6: 6.9795e-7,
      A8: 1.6786e-20,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (floating-element focus) ──
   *  VG + BL + MG (surfaces 1–11) translate forward as a unit.
   *  HG (surfaces 12–16) translates forward with shorter travel.
   *  Two gaps change: surface 11 (MG→HG) and surface 16 (BFD).
   *
   *  Close-focus values are INFERRED (patent does not provide explicit
   *  close-focus spacing data). Estimated assuming floating ratio ≈ 0.70
   *  (δ_rear = 0.70 × δ_front) at 0.3 m close focus (from film plane).
   */
  var: {
    "11": [0.35, 2.51],
    "16A": [14.39, 19.44],
  },
  varLabels: [
    ["11", "D11"],
    ["16A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "VG (FRONT)", fromSurface: "1A", toSurface: "6" },
    { text: "MG (MIDDLE)", fromSurface: "8", toSurface: "11" },
    { text: "HG (REAR)", fromSurface: "12A", toSurface: "16A" },
  ],
  doublets: [
    { text: "G1", fromSurface: "1A", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "6" },
    { text: "G3", fromSurface: "8", toSurface: "11" },
    { text: "G4", fromSurface: "12A", toSurface: "14" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription:
    "Floating rear group: VG+BL+MG translate forward together; HG translates forward with shorter travel (~70% of front assembly). Differential motion compensates coma and astigmatic difference at close range.",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 11,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
