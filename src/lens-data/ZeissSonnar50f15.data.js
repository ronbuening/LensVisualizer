/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CARL ZEISS SONNAR 50mm f/1.5                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 1,975,678 — sole example (Bertele / Zeiss Ikon). ║
 * ║  7-element / 3-group Sonnar design (1-3-3 configuration).         ║
 * ║  7 elements / 3 groups, 0 aspherical surfaces (all spherical).    ║
 * ║  Focus: unit focus — entire lens translates, only BFD changes.    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. SDs estimated from         ║
 * ║    marginal ray trace at f/1.5, verified against off-axis ray     ║
 * ║    bundle at 60% half-field. The steeply curved surfaces r6       ║
 * ║    and r9 (|R| ≈ 11 mm) are the binding constraints.  SDs are    ║
 * ║    set so that off-axis clipping occurs at element edges (r6,     ║
 * ║    r7) rather than inside cemented groups, and all sd/|R|         ║
 * ║    ratios remain below 0.87 where feasible.                       ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription is at f = 100 mm. All values here are      ║
 * ║    scaled to f ≈ 50 mm (production Contax mount lens).            ║
 * ║    R, d, and sd values are patent values × 0.5.                   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sonnar-50f15",
  name: "CARL ZEISS SONNAR 50mm f/1.5",
  subtitle: "US 1,975,678 — ZEISS IKON / LUDWIG BERTELE (1932)",
  specs: ["7 ELEMENTS / 3 GROUPS", "f ≈ 50.2 mm", "F/1.5", "2ω ≈ 46.8°", "ALL SPHERICAL"],

  /* ── Elements ──
   *  Prescription scaled from patent (f=100) to production (f≈50) by ×0.5.
   *  Glass identifications are inferential — see analysis document.
   *
   *  Architecture: 1 (L1) – 3 cemented (L2-L3-L4) – 3 cemented (L5-L6-L7)
   *  Only two air spaces: between L1 and L2, and between L4 and L5 (contains stop).
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6375,
      vd: 56.1,
      fl: 59.7,
      glass: "Dense Crown (SK/SSK family, Schott Jena)",
      apd: false,
      role: "Front positive collector. High-index glass reduces surface curvatures and Petzval contribution. Mechanically hard glass — survives decades of use.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6727,
      vd: 47.3,
      fl: 40.3,
      glass: "Barium Flint (BaF10 type, Schott)",
      apd: false,
      role: "First element of front cemented triplet. Dominant positive power of middle group. Intermediate Abbe number introduces controlled chromatic undercorrection.",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.4075,
      vd: 65.7,
      fl: 90.6,
      glass: "Specialty Low-Index Crown (hist. Schott, possibly fluoride-bearing)",
      apd: false,
      role: "Low-index spacer in front triplet. Creates large refractive index steps at both cement interfaces (Δn = −0.265 at r4, +0.282 at r5) for spherochromatic correction.",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.689,
      vd: 31.0,
      fl: -14.7,
      glass: "Dense Flint (SF family, Schott Jena)",
      apd: false,
      role: "Dominant negative element. High-index, high-dispersion glass provides chromatic overcorrection to balance L2–L3 undercorrection. Steep rear surface r6 gives largest negative Petzval contribution.",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.5481,
      vd: 45.9,
      fl: -56.4,
      glass: "Light Flint (hist. Schott Jena)",
      apd: false,
      role: "Nearly plano-concave first element of rear triplet. Controls entrance angle of light into the powerful biconvex L6.",
      cemented: "T2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6578,
      vd: 51.2,
      fl: 13.7,
      glass: "Very Dense Crown (SSK51 type, Schott)",
      apd: false,
      role: "Optical heart of the lens — strongest positive power. Thick biconvex element with the patent's key innovation: its rear cemented surface r9 (R = −11.03) corrects zonal and marginal spherical aberration.",
      cemented: "T2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.5488,
      vd: 63.0,
      fl: -28.0,
      glass: "Crown (PSK3 type, Schott)",
      apd: false,
      role: "Final negative element. High Abbe number (low dispersion) — primarily corrects coma and field curvature without adding chromatic error.",
      cemented: "T2",
    },
  ],

  /* ── Surface prescription ──
   *  Patent at f=100, scaled ×0.5 to f≈50 production.
   *  Sign convention: R > 0 → CoC to right; R < 0 → CoC to left.
   *  r8 sign resolved computationally: +29.925 gives EFL = 50.16;
   *  −29.925 gives EFL = 60.0 (inconsistent with patent).
   *
   *  Air gap after r6 (patent 13.9 mm → 6.95 mm) is split:
   *    r6 → STO:  1.00 mm  (estimated — patent does not specify stop
   *    STO → r7:  5.95 mm   position within the gap; placed near L4's
   *                          exit per Fig. 1 iris diaphragm placement)
   *
   *  Cemented triplet encoding follows the spec's pattern:
   *    Junction surfaces carry the SECOND element's elemId.
   */
  surfaces: [
    /* ── L1: standalone positive meniscus ── */
    { label: "1", R: 32.5, d: 5.25, nd: 1.6375, elemId: 1, sd: 18.0 }, // L1 front
    { label: "2", R: 208.385, d: 0.25, nd: 1.0, elemId: 0, sd: 17.0 }, // L1 rear → air  (patent text says "plane face r₂" but numerical example has finite R = 416.77 at f=100 — gentle meniscus, typical 1930s approximate language)

    /* ── Front cemented triplet: L2 – L3 – L4 ── */
    { label: "3", R: 18.63, d: 5.85, nd: 1.6727, elemId: 2, sd: 15.5 }, // L2 front
    { label: "4", R: 52.17, d: 3.8, nd: 1.4075, elemId: 3, sd: 13.0 }, // L2→L3 junction (L3 front)
    { label: "5", R: -123.5, d: 0.95, nd: 1.689, elemId: 4, sd: 10.5 }, // L3→L4 junction (L4 front)
    { label: "6", R: 11.07, d: 1.0, nd: 1.0, elemId: 0, sd: 8.5 }, // L4 rear → air

    /* ── Aperture stop (in the air gap between front and rear components) ── */
    { label: "STO", R: 1e15, d: 5.95, nd: 1.0, elemId: 0, sd: 10.0 },

    /* ── Rear cemented triplet: L5 – L6 – L7 ── */
    { label: "7", R: 952.0, d: 1.7, nd: 1.5481, elemId: 5, sd: 8.5 }, // L5 front (nearly flat)
    { label: "8", R: 29.925, d: 11.2, nd: 1.6578, elemId: 6, sd: 8.5 }, // L5→L6 junction (L6 front)
    { label: "9", R: -11.03, d: 4.2, nd: 1.5488, elemId: 7, sd: 9.5 }, // L6→L7 junction (L7 front)
    { label: "10", R: -44.53, d: 35.2, nd: 1.0, elemId: 0, sd: 11.0 }, // L7 rear → air (d = BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {}, // All-spherical design

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates forward for close focus.
   *  Only the back focal distance changes.
   *  At 0.9 m close focus: extension ≈ 2.96 mm → BFD increases.
   */
  var: {
    10: [35.2, 38.16],
  },

  varLabels: [["10", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (L1–L4)", fromSurface: "1", toSurface: "6" },
    { text: "REAR (L5–L7)", fromSurface: "7", toSurface: "10" },
  ],

  doublets: [
    { text: "T1", fromSurface: "3", toSurface: "6" },
    { text: "T2", fromSurface: "7", toSurface: "10" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.9,
  focusDescription:
    "Unit focus — entire lens translates forward. BFD changes from 35.2 mm (∞) to 38.2 mm (0.9 m). Typical of 1930s Contax rangefinder mount lenses.",

  /* ── Aperture configuration ── */
  nominalFno: 1.5,
  fstopSeries: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16], // v1 production limited to f/8; later versions extended to f/11–f/16

  /* ── Layout tuning ──
   *  scFill raised to accommodate the long rear triplet (thick L6 element).
   *  yScFill modest — front elements are tall relative to the rear.
   */
  scFill: 0.55,
  yScFill: 0.42,
};

export default LENS_DATA;
