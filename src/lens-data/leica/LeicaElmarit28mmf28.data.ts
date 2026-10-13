import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — LEICA ELMARIT-R 28mm f/2.8                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,591,257 Example 3 (Mandler, Edwards, Wagner;      ║
 * ║  Ernst Leitz GmbH). Table: patent cols. 3–4 (also restated in claim  ║
 * ║  4, cols. 5–6); section drawing Fig. 3 and Fig. 6c.                  ║
 * ║  Retrofocus wide-angle for the Leicaflex SLR.                        ║
 * ║  8 elements / 6 groups, 2 cemented doublets, all spherical.          ║
 * ║  Focus: unit focusing (entire lens translates).                      ║
 * ║                                                                      ║
 * ║  NOTE ON SCALING:                                                    ║
 * ║    Patent normalized to f = 100. All R, d, sd scaled uniformly by    ║
 * ║    s = 0.28 to the production 28 mm focal length.                    ║
 * ║                                                                      ║
 * ║  NOTE ON a₁ (L1→L2 AIR GAP) — PATENT MISPRINT CORRECTED:             ║
 * ║    Both printings of the table give a₁ = 9.86, but that value traces ║
 * ║    to f = 104.2, s′ = 67.0, f₁ = −129.0 and f₁,₂ = +82.5 against the ║
 * ║    patent's own 100 / 65.70 / −126.5 / +79.3. a₁ = 19.86 reproduces  ║
 * ║    all four (100.05 / 65.64 / −126.6 / +79.4); sister Example 4     ║
 * ║    prints a₁ = 19.88; and Figs. 3 and 6c draw a₁ at 0.32–0.37 of a₂  ║
 * ║    (19.86/51.20 = 0.39; 9.86/51.20 = 0.19). Stored a₁ = 19.86 × 0.28 ║
 * ║    = 5.561 mm. No other row changed.                                 ║
 * ║                                                                      ║
 * ║  NOTE ON REFRACTIVE INDICES:                                         ║
 * ║    Patent tabulates nₑ / νₑ (546.1 nm), stored in the nd/vd slots    ║
 * ║    with indexReference "e". The e-line trace gives EFL 28.01 mm.     ║
 * ║                                                                      ║
 * ║  NOTE ON STOP: a₃₁ = 2.14 and a₃₂ = 8.35 (patent values) place the   ║
 * ║    diaphragm between L4 and L5.                                      ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS:                                             ║
 * ║    Patent does not list SDs. Values are ray-trace estimates checked  ║
 * ║    against Fig. 6c (and Fig. 3), scaled by the r1→r14 vertex span    ║
 * ║    (483 px = 54.05 mm): L1 ≈16.1, L2 ≈13.4, L3/L4 ≈8.7 (drawn as a   ║
 * ║    near-cylinder), L5 ≈6.9, L6/L7 ≈8.0, L8 ≈9.7 mm. The figure is    ║
 * ║    schematic (L8 and the L1 rear face are drawn flatter than their   ║
 * ║    radii allow), so r2/r13 are held inside rim-slope limits. r5      ║
 * ║    stays at 10.4 for the 20–28° off-axis bundles. All values clear   ║
 * ║    the f/2.8 axial beam and the 37.7° full-field chief ray; corner   ║
 * ║    vignetting at full aperture is ordinary for this class.           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "elmarit-r-28f28",
  maker: "Leica",
  name: "LEICA ELMARIT-R 28mm f/2.8",
  subtitle: "US 3,591,257 Example 3 — Mandler / Edwards / Wagner",
  specs: ["8 ELEMENTS / 6 GROUPS", "f = 28 mm", "F/2.8", "2ω ≈ 74°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 28,
  focalLengthDesign: 28,
  apertureMarketing: 2.8,
  lensMounts: ["leica-r"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,591,257",
  patentAuthors: ["Walter Mandler", "Garry Edwards", "Erich Wagner"],
  patentAssignees: ["Ernst Leitz GmbH"],
  patentYear: 1971,
  elementCount: 8,
  groupCount: 6,

  /* ── Elements ──
   *  The patent gives only nₑ / νₑ (546.1 nm); element nd/vd store those e-line values.
   *  Schott names are catalog equivalents checked at C′/e/F′ — the patent names no glass or supplier.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.62286,
      vd: 60.08,
      indexReference: "e",
      fl: -76.5,
      glass: "SK16 (Schott catalog equivalent; patent ne 1.62286 / νe 60.08; production supplier unspecified)",
      apd: false,
      role: "Front negative meniscus — diverges beam for retrofocus BFD extension; low-dispersion crown minimizes lateral chromatic contribution",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62286,
      vd: 60.08,
      indexReference: "e",
      fl: -71.6,
      glass: "SK16 (Schott catalog equivalent; patent ne 1.62286 / νe 60.08; production supplier unspecified)",
      apd: false,
      role: "Second front meniscus — distributes negative power across two elements for off-axis aberration control",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.79227,
      vd: 47.15,
      indexReference: "e",
      fl: 14.1,
      glass: "Unmatched (LaF21-class patent e-line value; no verified d-line catalog identity)",
      apd: false,
      cemented: "D1",
      role: "Principal positive element — thick biconvex of lanthanum flint providing majority of system convergence",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.81265,
      vd: 25.24,
      indexReference: "e",
      fl: -38.3,
      glass: "SF6 (Schott catalog equivalent; patent ne 1.81265 / νe 25.24; production supplier unspecified)",
      apd: false,
      cemented: "D1",
      role: "Achromatizing negative — SF6-class dense flint cemented to L3; Δνₑ ≈ 22 provides primary chromatic correction",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.62286,
      vd: 60.08,
      indexReference: "e",
      fl: -167.1,
      glass: "SK16 (Schott catalog equivalent; patent ne 1.62286 / νe 60.08; production supplier unspecified)",
      apd: false,
      role: "Weakly negative meniscus behind stop — controls spherical aberration and coma in diverging beam; field flattener",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.72823,
      vd: 37.85,
      indexReference: "e",
      fl: 13.7,
      glass: "LaF10 class; S-BAH28 catalog e-line spectral proxy (production supplier unspecified)",
      apd: false,
      cemented: "D2",
      role: "Nearly flat front, strongly convex rear — concentrates power at cemented interface to reduce ghosting",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.81265,
      vd: 25.24,
      indexReference: "e",
      fl: -20.2,
      glass: "SF6 (Schott catalog equivalent; patent ne 1.81265 / νe 25.24; production supplier unspecified)",
      apd: false,
      cemented: "D2",
      role: "Rear-group achromatizer — SF6-class dense flint paired with the LaF10-class L6 (Δνₑ ≈ 13) for local chromatic correction",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.62408,
      vd: 36.11,
      indexReference: "e",
      fl: -39.0,
      glass: "F2 (Schott catalog equivalent; patent ne 1.62408 / νe 36.11; production supplier unspecified)",
      apd: false,
      role: "Final negative meniscus — primary field curvature corrector; large Petzval flattening contribution from strongly curved front surface",
    },
  ],

  /* ── Surface prescription ──
   *  Scaled from patent (f=100) to production (f=28mm) by ×0.28.
   *  Refractive indices at e-line (546.1 nm) per patent convention.
   *  S2 gap: printed a₁ = 9.86 corrected to 19.86 (see header).
   *  Stop position from patent: a₃₁=2.14 (L4→stop), a₃₂=8.35 (stop→L5) at f=100.
   */
  surfaces: [
    { label: "1", R: 27.661, d: 1.52, nd: 1.62286, elemId: 1, sd: 15.4 },
    { label: "2", R: 17.136, d: 5.561, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "3", R: 28.448, d: 1.52, nd: 1.62286, elemId: 2, sd: 14.0 },
    { label: "4", R: 17.01, d: 14.336, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "5", R: 16.828, d: 8.602, nd: 1.79227, elemId: 3, sd: 10.4 },
    { label: "6", R: -25.536, d: 4.931, nd: 1.81265, elemId: 4, sd: 8.7 },
    { label: "7", R: -153.804, d: 0.599, nd: 1.0, elemId: 0, sd: 8.7 },
    { label: "STO", R: 1e15, d: 2.338, nd: 1.0, elemId: 0, sd: 5.9 },
    { label: "8", R: -15.789, d: 3.161, nd: 1.62286, elemId: 5, sd: 6.0 },
    { label: "9", R: -20.042, d: 0.655, nd: 1.0, elemId: 0, sd: 6.4 },
    { label: "10", R: 932.4, d: 3.811, nd: 1.72823, elemId: 6, sd: 7.3 },
    { label: "11", R: -10.102, d: 1.68, nd: 1.81265, elemId: 7, sd: 7.3 },
    { label: "12", R: -28.14, d: 3.811, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "13", R: -9.694, d: 1.52, nd: 1.62408, elemId: 8, sd: 8.2 },
    { label: "14", R: -17.08, d: 18.396, nd: 1.0, elemId: 0, sd: 9.0 },
  ],

  /* ── Aspherical coefficients — none (all spherical) ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Entire lens translates for focusing. Only BFD changes.
   *  Infinity BF = patent s′ 65.70 × 0.28. The patent publishes no close-focus state; the
   *  0.30 m extension (+3.57 mm, m ≈ −0.127) is calculated by paraxial trace for a 300 mm
   *  object-to-image distance.
   */
  var: {
    "14": [18.396, 21.964],
  },
  varLabels: [["14", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT NEG (f₁≈−35)", fromSurface: "1", toSurface: "4" },
    { text: "POS DOUBLET (f₂≈+20)", fromSurface: "5", toSurface: "7" },
    { text: "REAR NEG (f₃≈−105)", fromSurface: "8", toSurface: "14" },
  ],

  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription: "Unit focusing — entire optical assembly translates along the optical axis (0.30 m extension calculated).",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
