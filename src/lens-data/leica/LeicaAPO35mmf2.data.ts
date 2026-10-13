import type { LensDataInput } from "../../types/optics.js";

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
 * ║    ×35 to production focal length f = 35 mm.                      ║
 * ║    Aspherical coefficients scaled accordingly:                     ║
 * ║      A_{2n,prod} = A_{2n,norm} / 35^(2n−1).                      ║
 * ║                                                                    ║
 * ║  NOTE ON REFRACTIVE INDICES:                                       ║
 * ║    The patent table gives n_e (546.07 nm) and ν_e (integer         ║
 * ║    Abbe numbers). The element rows keep those native values with   ║
 * ║    indexReference "e"; the glass labels are catalog equivalents    ║
 * ║    that round-trip at C′/e/F′. Paraxial EFL 34.99 mm at e-line    ║
 * ║    (patent f = 1.00 × 35).                                         ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERES (open source conflict):                          ║
 * ║    Coefficients are the literal patent table (k = 0, a2…a6 at     ║
 * ║    f = 1) scaled by the rule above. Read literally they leave      ║
 * ║    ≈ −5 mm of undercorrected spherical aberration at f/2 and       ║
 * ║    make surfaces 15/16 turn over at h ≈ 8.4 mm, so the drawn       ║
 * ║    f/2 marginal rays and the outer-field rays are not              ║
 * ║    representative of the production lens. No alternative reading   ║
 * ║    of the printed table gives a consistent design, so the values   ║
 * ║    are kept as printed (see the audit log).                        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    No clear-aperture table, but the patent's D/d_M and d_M/d_r     ║
 * ║    ratios fix several diameters: L2 D = 23.9 × 1.05 = 25.1 mm,    ║
 * ║    L1 edge thickness 5.95/9.1 = 0.65 mm → h ≈ 12.5 mm (G1 sd      ║
 * ║    12.5); L8 edge 7.7/6.2 = 1.24 mm → h ≈ 12.1 and L9 D = 25.1    ║
 * ║    (G4 sd 12.2); L10 D = 20.0 × 1.05 = 21.0 (sd 10.5); L6 D =     ║
 * ║    18.0 × 1.05 = 18.9 (sd 9.45, stored 10.5 keeps the f/2 bundle). ║
 * ║    Remaining surfaces (3, 4–6, 8–11) follow the FIG. 1 rim         ║
 * ║    proportions and the f/2 ray envelope; FIG. 1 is schematic       ║
 * ║    (its axial scale varies ±40 %), so it was used only for ratios. ║
 * ║                                                                    ║
 * ║  NOTE ON VARIABLE GAPS:                                            ║
 * ║    Patent does not publish close-focus spacings (FIG. 2 only).     ║
 * ║    Close-focus gaps are calculated from paraxial conjugates with   ║
 * ║    an assumed floating ratio (δ_HG/δ_front = 0.70) so that the     ║
 * ║    object-to-image distance is 300 mm; inferred, not patent data.  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-apo-summicron-m-35f2",
  maker: "Leica",
  name: "LEICA APO-SUMMICRON-M 35mm f/2 ASPH.",
  subtitle: "US 2022/0066176 A1 Ex. 1 — Leica Camera AG / Roth & Keller",
  specs: [
    "10 ELEMENTS / 5 GROUPS",
    "f = 35.0 mm (e-line, patent f = 1 × 35)",
    "F/2.0",
    "2ω = 62.2°",
    "4 ASPHERICAL SURFACES (3 ELEMENTS)",
  ],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 35,
  focalLengthDesign: 35.0,
  apertureMarketing: 2.0,
  apertureDesign: 2.0,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2022/0066176 A1",
  patentAuthors: ["Stefan Roth", "Kathrin Keller"],
  patentAssignees: ["Leica Camera AG"],
  patentYear: 2022,
  elementCount: 10,
  groupCount: 5,

  /* ── Elements ──
   *  nd / vd hold the patent's native n_e / ν_e (indexReference "e").
   *  ΔPgF values are the patent table's own column.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.855,
      vd: 40,
      indexReference: "e",
      fl: 19.0,
      glass: "S-LAH89 (OHARA) — patent-named example; catalog ne 1.8565 / νe 40.5",
      apd: false,
      role: "Front positive; aspherical object surface controls distortion. Patent-specified for Knoop hardness ≥ 600 and acid resistance.",
      cemented: "G1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.658,
      vd: 39,
      indexReference: "e",
      fl: -17.9,
      glass: "N-KZFS5 (Schott) / S-NBH5 (OHARA) — catalog equivalents (ne 1.65803 / νe 39.5)",
      apd: "patent",
      dPgF: -0.004,
      apdNote: "ΔPgF = −0.004 (patent table); short-flint negative element",
      role: "Nearly afocal doublet with L1 (G1, f'/f ≈ 48). Begins lateral color and secondary spectrum correction.",
      cemented: "G1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.658,
      vd: 39,
      indexReference: "e",
      fl: -18.6,
      glass: "N-KZFS5 (Schott) / S-NBH5 (OHARA) — catalog equivalents (ne 1.65803 / νe 39.5)",
      apd: "patent",
      dPgF: -0.004,
      apdNote: "ΔPgF = −0.004 (patent table)",
      role: "Negative element in G2 doublet; Petzval sum reduction. Exempted from D/d_M ≥ 18 thinness constraint per patent.",
      cemented: "G2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.888,
      vd: 41,
      indexReference: "e",
      fl: 16.6,
      glass: "S-LAH58 (OHARA) — catalog equivalent (ne 1.88815 / νe 40.5)",
      apd: false,
      role: "Highest-index element (ne 1.888). Primary power element of VG (G2, f'/f = 2.47). High n minimizes Petzval contribution.",
      cemented: "G2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.498,
      vd: 81,
      indexReference: "e",
      fl: 53.3,
      glass: "S-FPL51 (OHARA) — catalog equivalent (ne 1.49845 / νe 81.2)",
      apd: "patent",
      dPgF: 0.031,
      apdNote: "ΔPgF = +0.031 (patent table)",
      role: "Front crown of apochromatic triplet (G3). Nearly plano-convex; power concentrated at cemented rear surface.",
      cemented: "G3",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.658,
      vd: 39,
      indexReference: "e",
      fl: -19.5,
      glass: "N-KZFS5 (Schott) / S-NBH5 (OHARA) — catalog equivalents (ne 1.65803 / νe 39.5)",
      apd: "patent",
      dPgF: -0.004,
      apdNote: "ΔPgF = −0.004 (patent table)",
      role: "Central flint of apochromatic triplet (G3). Short flint sandwiched between fluorophosphate crowns for three-wavelength correction.",
      cemented: "G3",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.498,
      vd: 81,
      indexReference: "e",
      fl: 26.0,
      glass: "S-FPL51 (OHARA) — catalog equivalent (ne 1.49845 / νe 81.2)",
      apd: "patent",
      dPgF: 0.031,
      apdNote: "ΔPgF = +0.031 (patent table)",
      role: "Rear crown of apochromatic triplet (G3). Stronger curvature than L5; carries more refractive power.",
      cemented: "G3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.855,
      vd: 40,
      indexReference: "e",
      fl: 15.4,
      glass: "S-LAH89 (OHARA) — same row as L1; catalog ne 1.8565 / νe 40.5",
      apd: false,
      role: "Strongest positive element (f' = 15.4 mm). Aspherical front surface minimizes spherical aberration. Mirrors L1 across stop (quasi-symmetry).",
      cemented: "G4",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.658,
      vd: 39,
      indexReference: "e",
      fl: -16.7,
      glass: "N-KZFS5 (Schott) / S-NBH5 (OHARA) — catalog equivalents (ne 1.65803 / νe 39.5)",
      apd: "patent",
      dPgF: -0.004,
      apdNote: "ΔPgF = −0.004 (patent table)",
      role: "Fourth short-flint element; completes G4 doublet. Insensitive to decentration in combined assembly.",
      cemented: "G4",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.583,
      vd: 59,
      indexReference: "e",
      fl: -115.1,
      glass: "L-BAL42 (OHARA PGM) class — nearest catalog at e (ne 1.5855 / νe 59.1 vs patent 1.583 / 59)",
      apd: false,
      role: "Field corrector; both surfaces aspherical (precision glass molded). Weak net power but critical for astigmatism/coma/field curvature over full 62° field.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent normalized to f = 1 mm; all R, d values here ×35.
   *  nd values are the patent n_e (546.07 nm).
   *  Patent aspherical surfaces: 1, 12, 15, 16 → labels 1A, 12A, 15A, 16A.
   *  d16 is the paraxial e-line back focal distance (patent d16 = 0.36 × 35 = 12.6;
   *  patent S'O'/f = 0.43 → 15.05; computed 14.62).
   */
  surfaces: [
    // ── Front Group (VG) ──
    // G1: L1 + L2 cemented doublet
    { label: "1A", R: 54.11, d: 5.95, nd: 1.855, elemId: 1, sd: 12.5 }, // L1 front (asph)
    { label: "2", R: -21.98, d: 1.05, nd: 1.658, elemId: 2, sd: 12.5 }, // L1→L2 junction
    { label: "3", R: 25.97, d: 3.5, nd: 1.0, elemId: 0, sd: 10.0 }, // L2 rear → air
    // G2: L3 + L4 cemented doublet
    { label: "4", R: -27.65, d: 2.1, nd: 1.658, elemId: 3, sd: 9.0 }, // L3 front
    { label: "5", R: 22.68, d: 4.55, nd: 1.888, elemId: 4, sd: 9.0 }, // L3→L4 junction
    { label: "6", R: -37.835, d: 1.4, nd: 1.0, elemId: 0, sd: 9.0 }, // L4 rear → air

    // ── Aperture Stop ──
    { label: "STO", R: 1e15, d: 1.4, nd: 1.0, elemId: 0, sd: 8.75 },

    // ── Middle Group (MG) ──
    // G3: L5 + L6 + L7 cemented triplet
    { label: "8", R: 182.315, d: 6.65, nd: 1.498, elemId: 5, sd: 9.5 }, // L5 front
    { label: "9", R: -30.66, d: 1.05, nd: 1.658, elemId: 6, sd: 10.5 }, // L5→L6 junction
    { label: "10", R: 22.435, d: 5.25, nd: 1.498, elemId: 7, sd: 10.5 }, // L6→L7 junction
    { label: "11", R: -28.315, d: 0.35, nd: 1.0, elemId: 0, sd: 10.8 }, // L7 rear → air

    // ── Rear Group (HG) ──
    // G4: L8 + L9 cemented doublet
    { label: "12A", R: 28.07, d: 7.7, nd: 1.855, elemId: 8, sd: 12.2 }, // L8 front (asph)
    { label: "13", R: -21.56, d: 1.05, nd: 1.658, elemId: 9, sd: 12.2 }, // L8→L9 junction
    { label: "14", R: 22.855, d: 6.65, nd: 1.0, elemId: 0, sd: 12.2 }, // L9 rear → air
    // G5: L10 single lens
    { label: "15A", R: -52.15, d: 1.05, nd: 1.583, elemId: 10, sd: 10.5 }, // L10 front (asph)
    { label: "16A", R: -235.97, d: 14.62, nd: 1.0, elemId: 0, sd: 10.5 }, // L10 rear (asph) → image; d = BFD
  ],

  /* ── Aspherical coefficients ──
   *  Patent convention: z(h) = h²/r₀ / [1+√(1−(1+k)(h/r₀)²)] + a2·h⁴ + a3·h⁶ + ... + a6·h¹²
   *  Patent coefficients are at f = 1 normalization ("D±n" = ×10^±n):
   *    S1:  k 0, a2 0.1569D−4, a3 −0.182035D+1, a4 0.2404D−10
   *    S12: k 0, a2 0.1111D−5, a3 −0.524051D+0, a4 0.4762D−10
   *    S15: k 0, a2 0.9390D−4, a3 0.357335D+2, a4 0.9081D−09, a5 0.169936D+2, a6 0.7799D−15
   *    S16: k 0, a2 0.6674D−4, a3 0.366574D+2, a4 0.1080D−08
   *  Below: scaled to production (f = 35 mm) via A_{2n,prod} = a_n / 35^(2n−1).
   *  All K = 0 (spherical base conic, polynomial-only departure).
   *
   *  Caveat: at this scaling the a2/a4/a6 terms vanish (A4 ~1e-10, A8 ~1e-22) and the
   *  a3 terms dominate; the literal set does not correct the base prescription's
   *  spherical aberration (LA' ≈ −5 mm at f/2) and turns surfaces 15/16 over at
   *  h ≈ 8.4 mm. Kept as printed — see the header note and audit log.
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
   *  Close-focus values are INFERRED (patent publishes no close-focus
   *  spacings). Calculated with δ_HG = 0.70 × δ_front (δ_front = 7.34 mm)
   *  so that the paraxial object-to-image distance is 300 mm.
   *  FIG. 2 (close setting) shows the MG→HG gap opening by roughly
   *  2–4 mm at the figure's uneven scale, consistent in magnitude.
   */
  var: {
    "11": [0.35, 2.55],
    "16A": [14.62, 19.76],
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
    "Floating rear group: VG+BL+MG translate forward together; HG translates forward with shorter travel (assumed 70% of the front assembly — the patent gives the direction but no travel). Differential motion compensates coma and astigmatic difference at close range.",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 11,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
