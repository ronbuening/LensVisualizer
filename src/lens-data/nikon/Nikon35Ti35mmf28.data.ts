import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR 35mm f/2.8 (Nikon 35Ti)        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US Patent 5,243,468, Fifth Embodiment / Claim 9      ║
 * ║  (Motoyuki Ohtake, Nikon Corporation, granted 7 September 1993).   ║
 * ║  6 elements / 4 groups, all-spherical (telephoto-type power        ║
 * ║  arrangement: positive L1+L2+L3, negative L4; stop between L2/L3).║
 * ║  Focus: Unit focus (entire lens moves); only BFD changes.          ║
 * ║                                                                    ║
 * ║  OCR CORRECTIONS (Table 5 body vs. Claim 9):                       ║
 * ║    S3: patent body −51.349 → correct −151.349 (leading "1" lost)  ║
 * ║    S5: patent body −72.004 → correct −172.004 (leading "1" lost)  ║
 * ║    Claim 9 gives the correct values for both; independently        ║
 * ║    verified against all seven patent conditional expressions.       ║
 * ║                                                                    ║
 * ║  NOTE ON d₁₀ (BFD):                                               ║
 * ║    Patent states d₁₀ = 69.40 mm (normalized). Paraxial ray trace  ║
 * ║    yields infinity-focus BFD = 60.00 mm; with 69.40 the marginal  ║
 * ║    ray residual is −0.094 mm vs ~0.000 mm in all other embodi-    ║
 * ║    ments. The computed close-focus BFD at 0.40 m is 69.51 mm      ║
 * ║    (normalized), matching the patent's stated 69.40 to within      ║
 * ║    0.11 mm — the most likely cause is that the close-focus BFD    ║
 * ║    was accidentally entered in the infinity-focus column. d₁₀ is   ║
 * ║    corrected to 60.00 (normalized) / 20.99 mm (production) here.  ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription at f = 100.0404 mm (normalized).           ║
 * ║    Scale factor: 35.0 / 100.0404 = 0.349859.                      ║
 * ║    All R, d, and sd values below are at production scale (f≈35).  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. All SDs estimated from combined       ║
 * ║    marginal + chief ray traces with mechanical clearance.          ║
 * ║    Validated against: edge thickness, rim slope < 64.2°,          ║
 * ║    cross-gap sag intrusion < 0.90 × gap, and SD ratio ≤ 1.25.    ║
 * ║    S1 (10.5 mm): limited by L1 edge thickness at L1/L2 step.     ║
 * ║    S2 (5.8 mm) and S9 (6.5 mm): limited by cross-gap intrusion.  ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE STOP:                                            ║
 * ║    Stop position not tabulated; inferred from FIG. 2 iris drawing. ║
 * ║    Placed ≈ 40% through the 11.44 mm (normalized) inter-group gap ║
 * ║    (4.576 mm before STO + 6.864 mm after = 11.440 mm total).     ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-35ti-35f28",
  maker: "Nikon",
  name: "NIKON NIKKOR 35mm f/2.8 (35Ti)",
  subtitle: "US 5,243,468 · Fifth Embodiment (Claim 9) — Nikon / Ohtake 1993",
  specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 35.0 mm", "F/2.8 (design F/2.88)", "2ω ≈ 62.9°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 35,
  focalLengthDesign: 35.0,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  patentYear: 1993,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ──
   *  L21 (id 2) and L22 (id 3) form the L2 cemented doublet (D1).
   *  L31 (id 4) and L32 (id 5) form the L3 cemented doublet (D2).
   *  Focal lengths computed by subsystem paraxial ray trace (ABCD method),
   *  production scale. Glass identifications by nd/νd catalog search;
   *  L22 and L32 are unidentified (likely proprietary 1990s Nikon/Hoya glass).
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.6,
      fl: 45.04,
      glass: "Hoya BACD5 (nd=1.69680 / νd=55.5; Δnd≈0, Δνd=+0.1)",
      apd: false,
      role: "Primary convergence; positive meniscus facing the object to gather the wide-angle bundle",
    },
    {
      id: 2,
      name: "L21",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.59507,
      vd: 35.5,
      fl: -18.31,
      glass: "Unidentified light flint (no standard catalog match within Δnd=0.01, Δνd=1.0)",
      apd: false,
      cemented: "D1",
      role: "Negative sub-element of L2 doublet; enables positive-power cement surface at S4 for spherical aberration correction",
    },
    {
      id: 3,
      name: "L22",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.74443,
      vd: 49.5,
      fl: 15.4,
      glass: "Unidentified proprietary glass (possibly Nikon/Hoya c.1990; above-normal Abbe for nd class)",
      apd: false,
      cemented: "D1",
      role: "Positive sub-element of L2; high index vs L21 gives positive cement-surface power correcting spherical aberration",
    },
    {
      id: 4,
      name: "L31",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.64831,
      vd: 33.8,
      fl: -15.82,
      glass: "Ohara S-TIM22 / Schott N-SF2 equiv. (nd=1.64769 / νd=33.82; Δnd=+0.001, Δνd=−0.02)",
      apd: false,
      cemented: "D2",
      role: "Negative sub-element of L3; concave front surface faces the stop for spherical aberration correction with minimal off-axis aberration generation",
    },
    {
      id: 5,
      name: "L32",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.84042,
      vd: 43.3,
      fl: 11.59,
      glass: "Unidentified proprietary glass (possibly Nikon/Hoya c.1990; very high nd with above-average νd)",
      apd: false,
      cemented: "D2",
      role: "Positive sub-element of L3; exceptionally thick in the Fifth Embodiment, compressing the L3–L4 gap to enable compact body geometry",
    },
    {
      id: 6,
      name: "L4",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.56883,
      vd: 56.0,
      fl: -30.7,
      glass: "Schott N-BAK4 (nd=1.56883 / νd=56.04; Δnd≈0, Δνd=−0.04)",
      apd: false,
      role: "Negative telephoto rear element; corrects field curvature and astigmatism while extending EFL from ~20 mm (anterior group alone) to 35 mm",
    },
  ],

  /* ── Surface prescription (production scale, f ≈ 35 mm) ──
   *  Surfaces 1–10 follow the normalized patent table scaled by 0.349859.
   *  Stop position inferred from FIG. 2 at ≈ 40 % through the inter-group gap.
   *  Surface 5 carries the rear air gap before the stop (1.6010 mm);
   *  the STO surface carries the remaining gap to S6 (2.4014 mm).
   */
  surfaces: [
    { label: "1", R: 13.014, d: 3.0018, nd: 1.6968, elemId: 1, sd: 10.5 }, // L1 front — convex
    { label: "2", R: 20.1284, d: 1.4029, nd: 1.0, elemId: 0, sd: 5.8 }, // L1 rear → air; limited by cross-gap
    { label: "3", R: -52.9508, d: 1.0006, nd: 1.59507, elemId: 2, sd: 6.5 }, // L21 front — concave
    { label: "4", R: 13.8128, d: 3.4531, nd: 1.74443, elemId: 3, sd: 6.3 }, // L21→L22 cement (S4)
    { label: "5", R: -60.1771, d: 1.601, nd: 1.0, elemId: 0, sd: 5.5 }, // L22 rear → air (pre-stop gap)
    { label: "STO", R: 1e15, d: 2.4014, nd: 1.0, elemId: 0, sd: 4.7 }, // Aperture stop; position inferred from Fig. 2
    { label: "6", R: -15.406, d: 1.0006, nd: 1.64831, elemId: 4, sd: 5.5 }, // L31 front — concave, faces stop
    { label: "7", R: 31.4432, d: 4.4047, nd: 1.84042, elemId: 5, sd: 6.3 }, // L31→L32 cement (S7)
    { label: "8", R: -13.2156, d: 1.3015, nd: 1.0, elemId: 0, sd: 8.0 }, // L32 rear → air
    { label: "9", R: -9.1485, d: 1.6513, nd: 1.56883, elemId: 6, sd: 6.5 }, // L4 front — concave; limited by cross-gap
    { label: "10", R: -20.4741, d: 20.992, nd: 1.0, elemId: 0, sd: 8.5 }, // L4 rear → image (BFD, variable)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings ──
   *  Unit focus: entire lens translates forward; only the BFD (d₁₀) changes.
   *  d_inf  = 20.992 mm (infinity focus, corrected from patent's close-focus value)
   *  d_close= 24.318 mm (at 0.40 m close-focus; thick-lens paraxial: extension = 3.326 mm)
   *  Note: the patent's stated d₁₀ = 69.40 (normalized) ≈ 69.51 mm (computed close-focus
   *  BFD at 0.40 m), matching to within 0.11 mm — see file header note above.
   */
  var: {
    "10": [20.992, 24.318],
  },

  varLabels: [["10", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L2", fromSurface: "3", toSurface: "5" },
    { text: "L3", fromSurface: "6", toSurface: "8" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.4,
  focusDescription:
    "Unit focus — entire lens assembly moves axially; all inter-element spacings remain fixed during focusing.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.58,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
