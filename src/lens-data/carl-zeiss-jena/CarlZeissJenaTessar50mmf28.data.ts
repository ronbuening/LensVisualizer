import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Carl Zeiss Jena Tessar 50 mm f/2.8                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: French Patent FR 1.066.698 Example 1                ║
 * ║               (VEB Optik Carl Zeiss Jena, filed 1952).            ║
 * ║  Classic Tessar — 4 elements / 3 groups, all-spherical.           ║
 * ║  Focus: unit (entire optical block translates).                    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 100; all R, d, and sd values scaled ×0.500568    ║
 * ║    to f ≈ 50 mm production focal length.                          ║
 * ║    Patent EFL = 99.887; production EFL = 50.0 mm (by scaling).    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    SDs estimated from combined marginal ray (f/2.8) + chief ray   ║
 * ║    (60% field, 24×36 mm frame) with 5% mechanical clearance.      ║
 * ║    Stop SD set to paraxial entrance-pupil-derived value.           ║
 * ║    All edge thicknesses verified ≥ 0.5 mm; all sd/|R| < 0.90;    ║
 * ║    cross-gap sag intrusion < 90% at all gaps.                     ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:          ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "czj-tessar-50-f28",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA TESSAR 50mm f/2.8",
  subtitle: "FR 1.066.698 Example 1 — VEB Optik Carl Zeiss Jena / Harry Zöllner (attr.)",
  specs: ["4 ELEMENTS / 3 GROUPS", "f ≈ 50.0 mm", "F/2.8", "2ω ≈ 46.8°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 50,
  // focalLengthDesign omitted — identical to focalLengthMarketing after scaling
  apertureMarketing: 2.8,
  // apertureDesign omitted — patent does not specify f-number; 2.8 is production identification
  patentYear: 1952,
  elementCount: 4,
  groupCount: 3,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.67786,
      vd: 55.5,
      fl: 29.03,
      glass: "678555 LaK (≈ Schott N-LaK12)",
      apd: false,
      role: "Front positive singlet; high-index lanthanum crown provides strong convergence at low curvature, reducing higher-order spherical aberration — the key glass choice of the patent.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.612,
      vd: 37.2,
      fl: -18.48,
      glass: "612372 F (≈ Schott F3 legacy)",
      apd: false,
      role: "Negative field-flattener and chromatic corrector; its two surfaces contribute the largest negative Petzval sum, cancelling the positive contribution from L1 and L4.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5738,
      vd: 42.5,
      fl: -30.09,
      glass: "574425 LF",
      apd: false,
      cemented: "D1",
      role: "Weak negative meniscus forming the front of the rear cemented doublet; its near-flat front surface (R ≈ 382 mm) contributes almost no power — the relevant interface is the cementing surface to L4.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6608,
      vd: 50.8,
      fl: 15.7,
      glass: "661508 SSK (≈ Schott N-SSK5)",
      apd: false,
      cemented: "D1",
      role: "Strong positive rear element; extra dense crown (SSK) provides high index at moderate dispersion, sharing the convergence load with L1 across the diaphragm.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent FR 1.066.698 Example 1, scaled from f = 100 to f ≈ 50 mm.
   *  Scale factor k = 50.0 / 99.887 = 0.500568.
   *
   *  Diaphragm (STO) sits in the air space between L2 rear and L3 front,
   *  at b₁ = 3.95 behind L2 and b₂ = 3.50 ahead of L3 (f = 100 values).
   *  Position explicit in patent figure (labelled "D").
   */
  surfaces: [
    { label: "1", R: 19.677, d: 5.16, nd: 1.67786, elemId: 1, sd: 12.26 }, // L1 front (convex)
    { label: "2", R: 1e15, d: 3.05, nd: 1.0, elemId: 0, sd: 10.26 }, // L1 rear (plano) → air
    { label: "3", R: -35.56, d: 1.45, nd: 1.612, elemId: 2, sd: 8.26 }, // L2 front (concave)
    { label: "4", R: 16.837, d: 1.98, nd: 1.0, elemId: 0, sd: 7.76 }, // L2 rear (concave) → air (b₁)
    { label: "STO", R: 1e15, d: 1.75, nd: 1.0, elemId: 0, sd: 7.01 }, // diaphragm → air (b₂)
    { label: "5", R: 382.208, d: 1.2, nd: 1.5738, elemId: 3, sd: 8.01 }, // L3 front (near-flat)
    { label: "6", R: 16.502, d: 5.01, nd: 1.6608, elemId: 4, sd: 8.11 }, // L3/L4 cement → L4 glass
    { label: "7", R: -24.551, d: 40.32, nd: 1.0, elemId: 0, sd: 8.76 }, // L4 rear → air (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire optical block translates.  Only BFD changes.
   *  Close focus 0.35 m from film plane; extension ≈ 10.5 mm.
   */
  var: {
    "7": [40.32, 50.79],
  },

  varLabels: [["7", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "4" },
    { text: "III", fromSurface: "5", toSurface: "7" },
  ],

  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.35,
  focusDescription: "Unit focus — entire optical block translates on helicoid; no internal moving elements.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
