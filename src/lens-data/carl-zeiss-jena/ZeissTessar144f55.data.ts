import type { LensDataInput } from "../../types/optics.js";

/**
 * US 721,240, sole example, normalized dimensions scaled by 144 mm.
 * Source d1=0.033 and L1 nD=1.61132 verified from the original table.
 * Calculated EFL is 142.8028 mm; the source nominal scale remains 144.
 * Modern nd approximates source nD; Abbe values and rim sizes are inferred.
 * The patent specifies neither a minimum object distance nor focus travel.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "zeiss-tessar-144f55",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA TESSAR 144mm f/5.5",
  subtitle: "US 721,240 — CARL ZEISS / PAUL RUDOLPH (1903)",
  visible: true,
  specs: ["4 ELEMENTS / 3 GROUPS", "f ≈ 144 mm (scaled from normalized patent)", "F/5.5", "2ω ≈ 60°", "ALL SPHERICAL"],

  focalLengthMarketing: 144,
  focalLengthDesign: 142.80282338069546,
  apertureMarketing: 5.5,
  apertureDesign: 5.5,
  lensMounts: ["large-format-lens-board"],
  imageFormat: "4x5",
  patentNumber: "US 721,240",
  patentAuthors: ["Paul Rudolph"],
  patentAssignees: ["Carl-Zeiss-Stiftung"], // Canonical entity; source wording: "the firm of Carl Zeiss".
  patentYear: 1903,
  elementCount: 4,
  groupCount: 3,

  /* ── Elements ──
   *  Four elements in three groups.  Front group: L1 (positive singlet) +
   *  L2 (negative singlet) separated by air.  Rear group: L3 + L4 cemented
   *  doublet.  Diaphragm between groups.
   *
   *  Source spectral indices do not identify a supplier or catalog type.
   *  Abbe numbers are retained modeling estimates; source nC is absent.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.61132,
      vd: 58.0,
      fl: 50.644507,
      glass: "Unmatched patent medium (Abbe estimated; supplier unspecified)",
      apd: false,
      role: "Front positive singlet.  Plano-convex with curved side toward object — near-optimal bending for minimizing spherical aberration of a single positive element.  Carries ~2.8× system power.  Its medium and shape contribute positive dispersive power; composition is not specified.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.60457,
      vd: 38.0,
      fl: -38.7,
      glass: "Unmatched patent medium (Abbe estimated; supplier unspecified)",
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
      glass: "Unmatched patent medium (Abbe estimated; supplier unspecified)",
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
      glass: "Unmatched patent medium (Abbe estimated; supplier unspecified)",
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
    { label: "1", R: 30.96, d: 4.752, nd: 1.61132, elemId: 1, sd: 14.5 }, // L1 front (convex)
    { label: "2", R: 1e15, d: 2.736, nd: 1.0, elemId: 0, sd: 14.5 }, // L1 rear (flat) → air
    { label: "3", R: -106.992, d: 1.584, nd: 1.60457, elemId: 2, sd: 13.6 }, // L2 front (gently concave)
    { label: "4", R: 29.952, d: 4.32, nd: 1.0, elemId: 0, sd: 13.1 }, // L2 rear (strongly convex) → air

    /* ── Aperture stop ── */
    { label: "STO", R: 1e15, d: 4.32, nd: 1.0, elemId: 0, sd: 11.1 }, // diaphragm

    /* ── Rear group: L3 + L4 (cemented doublet) ── */
    { label: "5", R: -160.272, d: 1.584, nd: 1.5211, elemId: 3, sd: 13.1 }, // L3 front (gently concave)
    { label: "6", R: 36.288, d: 4.32, nd: 1.61132, elemId: 4, sd: 13.1 }, // cemented junction → L4 glass
    { label: "7", R: -52.848, d: 130.50039139999885, nd: 1.0, elemId: 0, sd: 13.1 }, // L4 rear → air → image
  ],

  /* ── Aspherical coefficients ──
   *  All-spherical design — no aspherical surfaces.
   */
  asph: {},

  /* ── Variable air spacings (focus mechanism) ──
   *  Unit focusing: entire lens translates; only BFD changes.
   *  The inferred 2 m endpoint uses the complete paraxial prescription
   *  and object-to-image distance, giving 11.9896903 mm unit extension.
   */
  var: {
    7: [130.50039139999885, 142.49008165708676],
  },

  varLabels: [["7", "BF (modeled)"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT GROUP", fromSurface: "1", toSurface: "4" },
    { text: "REAR GROUP", fromSurface: "5", toSurface: "7" },
  ],

  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  /* ── Focus configuration ── */
  closeFocusM: 2.0,
  focusDescription:
    "Inferred unit focus — all elements and the stop move objectward by 11.99 mm at the modeled 2 m object-to-image endpoint. No focus schedule is published; intermediate distance labels are approximate.",

  /* ── Aperture configuration ── */
  nominalFno: 5.5,
  fstopSeries: [5.5, 6.3, 8, 11, 16, 22, 32],

  /* ── Layout tuning ──
   *  The Tessar is extremely compact (optical assembly only 23.616 mm for a 144 mm lens)
   *  with a very long BFD (130.5 mm).  This requires a higher scFill to prevent
   *  the elements from appearing tiny, and a moderate yScFill since the elements
   *  are small-diameter relative to the format.
   */
  scFill: 0.65,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
