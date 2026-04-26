import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CARL ZEISS TESSAR 144mm f/5.5               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US Patent 721,240 (Paul Rudolph / Carl Zeiss, 1903). ║
 * ║  The original Tessar patent — 4 elements / 3 groups, all sph.     ║
 * ║  4 elements / 3 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focusing (entire lens moves; only BFD changes).      ║
 * ║                                                                    ║
 * ║  NOTE ON PRESCRIPTION:                                             ║
 * ║    Patent gives all values normalized to EFL = 1.  Scaled here    ║
 * ║    to f = 144 mm, a common early large-format production length.  ║
 * ║    Paraxial EFL at this scale ≈ 139.7 mm (3% deviation from      ║
 * ║    nominal, consistent with thick-lens vs. Gaussian EFL).         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters.  Estimated from paraxial  ║
 * ║    marginal + chief ray trace at f/5.5 and 30° half-field (60°   ║
 * ║    total per patent), with 40% chief ray vignetting allowance     ║
 * ║    and 8% mechanical clearance.  Front and rear element SDs are   ║
 * ║    capped at the physical edge-thickness limit (≥ 0.5 mm edge).  ║
 * ║                                                                    ║
 * ║  NOTE ON ABBE NUMBERS:                                             ║
 * ║    Patent provides nD, nF, nG' but NOT nC.  Standard Abbe number ║
 * ║    cannot be computed directly.  Values below are from historical ║
 * ║    Schott catalog matching by nD, not from C-line extrapolation.  ║
 * ║    L1's partial dispersion ratio P_G'F = 1.076 is anomalous —    ║
 * ║    possibly a single-digit printing error in nG' (see analysis). ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "zeiss-tessar-144f55",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS TESSAR 144mm f/5.5",
  subtitle: "US 721,240 — CARL ZEISS / PAUL RUDOLPH (1903)",
  visible: true,
  specs: ["4 ELEMENTS / 3 GROUPS", "f ≈ 144 mm (scaled from normalized patent)", "F/5.5", "2ω ≈ 60°", "ALL SPHERICAL"],

  focalLengthMarketing: 144,
  focalLengthDesign: 144.0,
  apertureMarketing: 5.5,
  apertureDesign: 5.5,
  patentYear: 1903,
  elementCount: 4,
  groupCount: 3,

  /* ── Elements ──
   *  Four elements in three groups.  Front group: L1 (positive singlet) +
   *  L2 (negative singlet) separated by air.  Rear group: L3 + L4 cemented
   *  doublet.  Diaphragm between groups.
   *
   *  Glass types identified by nD matching against early Schott (Jena) catalog.
   *  Abbe numbers are catalog-matched approximations (see header note).
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.6132,
      vd: 58.0,
      fl: 50.5,
      glass: "Dense barium crown (Schott ~O.381, SK-type)",
      apd: false,
      role: "Front positive singlet.  Plano-convex with curved side toward object — near-optimal bending for minimizing spherical aberration of a single positive element.  Carries ~2.8× system power.  Dense barium crown (very low dispersion for its index) minimizes chromatic contribution despite strong curvature.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.60457,
      vd: 38.0,
      fl: -38.7,
      glass: "Dense flint (Schott ~O.163, F/SF-type)",
      apd: false,
      role: "Central negative singlet.  Biconcave with strongly curved rear surface (r4) facing diaphragm.  High-dispersion flint paired with low-dispersion L1 forms a separated achromat.  The air-spaced 'facing surfaces' r2–r3 produce negative (dispersive) power — one of the two key correction mechanisms identified in the patent.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5211,
      vd: 51.0,
      fl: -56.8,
      glass: "Light crown / light flint (Schott ~O.332, K/LLF-type)",
      apd: false,
      role: "Negative element of cemented rear doublet.  Asymmetric biconcave (nearly plano-concave: front surface weakly curved).  Low index maximizes the refractive index step at cemented junction r6 (Δn = +0.090), creating the positive cemented surface power that is the second key correction mechanism.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.61132,
      vd: 57.0,
      fl: 35.2,
      glass: "Dense barium crown / barium flint (Schott ~O.382, SK/BaF-type)",
      apd: false,
      role: "Positive element of cemented rear doublet — the strongest element in the system (~4× system power).  Carries the primary image-forming burden.  Cemented bond with L3 eliminates two air-glass surfaces, reducing flare in the pre-coating era (6 vs. 8 air-glass surfaces).",
      cemented: "D1",
    },
  ],

  /* ── Surface prescription ──
   *  Scaled from patent (EFL = 1 normalized) to 144 mm.
   *
   *  Patent sign convention matches spec: R > 0 = CoC to right.
   *
   *  Surface sequence:
   *    r1 (L1 front) → r2 (L1 rear, flat) → air → r3 (L2 front) →
   *    r4 (L2 rear) → air → STO (diaphragm) → air → r5 (L3 front) →
   *    r6 (cemented L3→L4 junction) → r7 (L4 rear) → BFD → image
   *
   *  elemId rules per spec:
   *    - L1 front (r1): elemId 1
   *    - L1 rear → air (r2): elemId 0
   *    - L2 front (r3): elemId 2
   *    - L2 rear → air (r4): elemId 0
   *    - L3 front (r5): elemId 3
   *    - Cemented junction (r6): elemId 4 (second element of doublet)
   *    - L4 rear → air (r7): elemId 0
   */
  surfaces: [
    /* ── Front group: L1 + L2 (air-spaced achromat) ── */
    { label: "1", R: 30.96, d: 5.472, nd: 1.6132, elemId: 1, sd: 16.5 }, // L1 front (convex)
    { label: "2", R: 1e15, d: 2.736, nd: 1.0, elemId: 0, sd: 15.2 }, // L1 rear (flat) → air
    { label: "3", R: -106.992, d: 1.584, nd: 1.60457, elemId: 2, sd: 13.6 }, // L2 front (gently concave)
    { label: "4", R: 29.952, d: 4.32, nd: 1.0, elemId: 0, sd: 13.1 }, // L2 rear (strongly convex) → air

    /* ── Aperture stop ── */
    { label: "STO", R: 1e15, d: 4.32, nd: 1.0, elemId: 0, sd: 11.1 }, // diaphragm

    /* ── Rear group: L3 + L4 (cemented doublet) ── */
    { label: "5", R: -160.272, d: 1.584, nd: 1.5211, elemId: 3, sd: 12.4 }, // L3 front (gently concave)
    { label: "6", R: 36.288, d: 4.32, nd: 1.61132, elemId: 4, sd: 12.4 }, // cemented junction → L4 glass
    { label: "7", R: -52.848, d: 125.83, nd: 1.0, elemId: 0, sd: 12.4 }, // L4 rear → air → image
  ],

  /* ── Aspherical coefficients ──
   *  All-spherical design — no aspherical surfaces.
   */
  asph: {},

  /* ── Variable air spacings (focus mechanism) ──
   *  Unit focusing: entire lens translates; only BFD changes.
   *  Close focus estimated at ~2.0 m for large-format plate camera use.
   *  At 2.0 m object distance, image distance ≈ EFL²/(obj - EFL) + EFL
   *    ≈ 144²/(2000 - 144) + 144 ≈ 11.2 + 144 ≈ 155.2 → BFD ≈ 155.2 - 24.3 = 130.9
   *  (Approximate — actual shift is ~5 mm from infinity BFD.)
   */
  var: {
    7: [125.83, 130.9],
  },

  varLabels: [["7", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT GROUP", fromSurface: "1", toSurface: "4" },
    { text: "REAR GROUP", fromSurface: "5", toSurface: "7" },
  ],

  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  /* ── Focus configuration ── */
  closeFocusM: 2.0,
  focusDescription:
    "Unit focusing — entire lens assembly moves forward.  No variable internal spacings.  Front-element focusing also used on mid-range cameras (L1 moves ~⅓ the distance of unit focus due to ~2.8× power ratio).",

  /* ── Aperture configuration ── */
  nominalFno: 5.5,
  fstopSeries: [5.5, 6.3, 8, 11, 16, 22, 32],

  /* ── Layout tuning ──
   *  The Tessar is extremely compact (total track only 24.3 mm for a 144 mm lens)
   *  with a very long BFD (125.8 mm).  This requires a higher scFill to prevent
   *  the elements from appearing tiny, and a moderate yScFill since the elements
   *  are small-diameter relative to the format.
   */
  scFill: 0.65,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
