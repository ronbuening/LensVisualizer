import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — LEICA ELMARIT 28mm f/2.8 (11801)                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,591,257 Example 3 (Mandler, Edwards, Wagner;      ║
 * ║  Ernst Leitz GmbH). Table: patent cols. 3–4 (also restated in claim  ║
 * ║  4, cols. 5–6); section drawing Fig. 3 and Fig. 6c.                  ║
 * ║  Moderate retrofocus wide-angle for the Leica M: the second          ║
 * ║  version (Leitz Canada, 1972–1979; order no. 11801, also used        ║
 * ║  for the nine-element first version, a different design).            ║
 * ║  Production is 8 elements / 6 groups, credited to the patent's       ║
 * ║  three inventors, and its section drawing matches Example 3.         ║
 * ║  Until 2026-10 this file was published as the Elmarit-R 28mm         ║
 * ║  f/2.8; the 18.4 mm back focus rules out an SLR, and that lens       ║
 * ║  is the eight-singlet design of US 3,740,120.                        ║
 * ║  8 elements / 6 groups, 2 cemented doublets, all spherical.          ║
 * ║  Focus: modelled as unit focusing (entire lens translates);          ║
 * ║  the patent describes no moving subgroup.                            ║
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
 * ║    against Fig. 3 and Fig. 6c, which draw Example 3 at one scale     ║
 * ║    (r1→r14 = 480 px for 54.05 mm at 300 dpi). Line-centre heights:   ║
 * ║    L1 16.1 front / 14.1 rear (bevelled), L2 13.3 / 12.3, L3+L4 8.5   ║
 * ║    and L6+L7 7.8 (square-cut blocks), L5 6.0 / 6.8, L8 8.1 / 9.4–9.7 ║
 * ║    (chamfered front corner). Each block keeps one height: r5–r7      ║
 * ║    8.7, r10–r12 7.4. All values clear the f/2.8 axial beam (7.65 mm  ║
 * ║    at r5) and the 37.7° chief ray. r5 trims the outer edge of the    ║
 * ║    15–32° bundles, as the limit bars of Figs. 3a–3c show (they fall  ║
 * ║    on a 7.7 mm clear radius at r5); corner vignetting is ordinary.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "leica-elmarit-28mm-f28-11801",
  maker: "Leica",
  name: "LEICA ELMARIT 28mm f/2.8 (11801)",
  subtitle: "US 3,591,257 Example 3 — Mandler / Edwards / Wagner",

  catalog: {
    lensMounts: ["leica-m"],
    imageFormat: "135-full-frame",
    specs: ["8 ELEMENTS / 6 GROUPS", "f = 28 mm", "F/2.8", "2ω ≈ 74°", "ALL SPHERICAL"],
    elementCount: 8,
    groupCount: 6,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 28, design: 28 },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "US 3,591,257",
    patentYear: 1971,
    authors: ["Walter Mandler", "Garry Edwards", "Erich Wagner"],
    assignees: ["Ernst Leitz GmbH"],
  },

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
      focalLengthMm: -76.5,
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
      focalLengthMm: -71.6,
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
      focalLengthMm: 14.1,
      glass:
        "K-LaSFn16 (SUMITA catalog equivalent of LaF21, catalog ne 1.79226 / νe 47.17; patent ne 1.79227 / νe 47.15; production supplier unspecified)",
      apd: false,
      role: "Principal positive element — thick biconvex of lanthanum flint providing majority of system convergence",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.81265,
      vd: 25.24,
      indexReference: "e",
      focalLengthMm: -38.3,
      glass: "SF6 (Schott catalog equivalent; patent ne 1.81265 / νe 25.24; production supplier unspecified)",
      apd: false,
      role: "Achromatizing negative — SF6-class dense flint cemented to L3; Δνₑ ≈ 22 provides primary chromatic correction",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.62286,
      vd: 60.08,
      indexReference: "e",
      focalLengthMm: -167.1,
      glass: "SK16 (Schott catalog equivalent; patent ne 1.62286 / νe 60.08; production supplier unspecified)",
      apd: false,
      role: "Weakly negative thick meniscus 2.3 mm behind the stop, concave toward it — sits in the converging beam; its front surface is the second-largest field-flattening (negative Petzval) contribution",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive (near-plano front)",
      nd: 1.72823,
      vd: 37.85,
      indexReference: "e",
      focalLengthMm: 13.7,
      glass: "LaF10 class; S-BAH28 catalog e-line spectral proxy (production supplier unspecified)",
      apd: false,
      role: "Positive member of the rear cemented doublet — nearly flat front, strongly curved cemented rear; the index step there is only 0.084, so the doublet's power arises at the L7 rear surface",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.81265,
      vd: 25.24,
      indexReference: "e",
      focalLengthMm: -20.2,
      glass: "SF6 (Schott catalog equivalent; patent ne 1.81265 / νe 25.24; production supplier unspecified)",
      apd: false,
      role: "Rear-group achromatizer — SF6-class dense flint paired with the LaF10-class L6 (Δνₑ ≈ 13) for local chromatic correction",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.62408,
      vd: 36.11,
      indexReference: "e",
      focalLengthMm: -39.0,
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
  /* (moved from asph) ── Aspherical coefficients — none (all spherical) ── */
  surfaces: [
    { label: "1", R: 27.661, d: 1.52, sd: 15.4, medium: 1 },
    { label: "2", R: 17.136, d: 5.561, sd: 13.5 },
    { label: "3", R: 28.448, d: 1.52, sd: 14.0, medium: 2 },
    { label: "4", R: 17.01, d: 14.336, sd: 13.2 },
    { label: "5", R: 16.828, d: 8.602, sd: 8.7, medium: 3 },
    { label: "6", R: -25.536, d: 4.931, sd: 8.7, medium: 4 },
    { label: "7", R: -153.804, d: 0.599, sd: 8.7 },
    { label: "STO", R: "flat", d: 2.338 },
    { label: "8", R: -15.789, d: 3.161, sd: 6.0, medium: 5 },
    { label: "9", R: -20.042, d: 0.655, sd: 6.4 },
    { label: "10", R: 932.4, d: 3.811, sd: 7.4, medium: 6 },
    { label: "11", R: -10.102, d: 1.68, sd: 7.4, medium: 7 },
    { label: "12", R: -28.14, d: 3.811, sd: 7.4 },
    { label: "13", R: -9.694, d: 1.52, sd: 8.2, medium: 8 },
    { label: "14", R: -17.08, sd: 9.0 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.7,
    description:
      "Unit focusing — entire optical assembly translates along the optical axis (0.70 m extension calculated).",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ──
   *  Entire lens translates for focusing. Only BFD changes.
   *  Infinity BF = patent s′ 65.70 × 0.28. The patent publishes no close-focus state; the
   *  0.70 m extension (+1.261 mm, m ≈ −0.045) is calculated by paraxial trace for a 700 mm
   *  object-to-image distance, the production minimum focus.
   */
  gaps: { "14": { label: "BF", values: [[18.396, 19.657]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

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

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
