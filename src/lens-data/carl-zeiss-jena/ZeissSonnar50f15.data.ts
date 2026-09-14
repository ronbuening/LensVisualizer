import type { LensDataInput } from "../../types/optics.js";

/**
 * US 1,975,678, sole numerical example, scaled from f=100 by 0.5.
 * Seven spherical elements in three air-separated groups. Radii, thicknesses,
 * nd and vd follow the table; semi-diameters are inferred from the drawing
 * subject to spherical-domain and edge-clearance constraints. Stop location
 * and finite unit-focus travel are modeled estimates, not patent dimensions.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sonnar-50f15",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA SONNAR 50mm f/1.5",
  subtitle: "US 1,975,678 — ZEISS IKON / LUDWIG BERTELE (1932)",
  specs: ["7 ELEMENTS / 3 GROUPS", "f ≈ 50.2 mm", "F/1.5", "2ω ≈ 42° (patent)", "ALL SPHERICAL"],

  projection: { kind: "rectilinear", fullFieldDeg: 42 },
  focalLengthMarketing: 50,
  focalLengthDesign: 50.2,
  apertureMarketing: 1.5,
  apertureDesign: 1.5,
  lensMounts: ["contax-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "US 1,975,678",
  patentAuthors: ["Ludwig Bertele"],
  patentAssignees: ["Zeiss Ikon AG"],
  patentYear: 1934,
  elementCount: 7,
  groupCount: 3,

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
      glass: "Unmatched (supplier unspecified; patent nd=1.6375, νd=56.1)",
      apd: false,
      role: "Front positive collector. High-index glass reduces surface curvatures and Petzval contribution. The patent does not specify mechanical durability.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6727,
      vd: 47.3,
      fl: 40.3,
      glass: "Unmatched (supplier unspecified; patent nd=1.6727, νd=47.3)",
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
      glass: "Unmatched (patent ultra-low-index crown, nd=1.4075, νd=65.7; no practical catalog glass)",
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
      glass: "N-SF8 equivalent (catalog comparison; supplier unspecified, patent nd=1.6890, νd=31.0)",
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
      glass: "Unmatched (supplier unspecified; patent nd=1.5481, νd=45.9)",
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
      glass: "Unmatched (SSK51-class very dense crown, near N-SSK5; patent nd=1.6578, νd=51.2)",
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
      glass: "Unmatched (supplier unspecified; patent nd=1.5488, νd=63.0)",
      apd: false,
      role: "Final negative element. High Abbe number (low dispersion) — primarily corrects coma and field curvature while also contributing dispersive power.",
      cemented: "T2",
    },
  ],

  /* ── Surface prescription ──
   *  Patent at f=100, scaled ×0.5 to f≈50 production.
   *  Sign convention: R > 0 → CoC to right; R < 0 → CoC to left.
   *  r8 is visibly positive in the source table; +29.925 gives EFL = 50.16;
   *  −29.925 gives EFL = 60.0 (inconsistent with patent).
   *
   *  Air gap after r6 (patent 13.9 mm → 6.95 mm) is split:
   *    r6 → STO:  6.30 mm (inferred to clear the curved L4 exit rim).
   *    STO → r7:  0.65 mm. The patent does not dimension the stop position.
   *
   *  Cemented triplet encoding follows the spec's pattern:
   *    Junction surfaces carry the SECOND element's elemId.
   */
  surfaces: [
    /* ── L1: standalone positive meniscus ── */
    { label: "1", R: 32.5, d: 5.25, nd: 1.6375, elemId: 1, sd: 18.0 }, // L1 front
    { label: "2", R: 208.385, d: 0.25, nd: 1.0, elemId: 0, sd: 17.0 }, // L1 rear → air  (patent text says "plane face r₂" but numerical example has finite R = 416.77 at f=100 — gentle meniscus, the numerical table takes precedence over this inconsistent prose)

    /* ── Front cemented triplet: L2 – L3 – L4 ── */
    { label: "3", R: 18.63, d: 5.85, nd: 1.6727, elemId: 2, sd: 14.0 }, // L2 front
    { label: "4", R: 52.17, d: 3.8, nd: 1.4075, elemId: 3, sd: 14.0 }, // L2→L3 junction (L3 front)
    { label: "5", R: -123.5, d: 0.95, nd: 1.689, elemId: 4, sd: 14.0 }, // L3→L4 junction (L4 front)
    { label: "6", R: 11.07, d: 6.3, nd: 1.0, elemId: 0, sd: 9.9 }, // L4 rear → air

    /* ── Aperture stop (in the air gap between front and rear components) ── */
    { label: "STO", R: 1e15, d: 0.65, nd: 1.0, elemId: 0, sd: 10.0 },

    /* ── Rear cemented triplet: L5 – L6 – L7 ── */
    { label: "7", R: 952.0, d: 1.7, nd: 1.5481, elemId: 5, sd: 10.0 }, // L5 front (nearly flat)
    { label: "8", R: 29.925, d: 11.2, nd: 1.6578, elemId: 6, sd: 10.0 }, // L5→L6 junction (L6 front)
    { label: "9", R: -11.03, d: 4.2, nd: 1.5488, elemId: 7, sd: 9.5 }, // L6→L7 junction (L7 front)
    { label: "10", R: -44.53, d: 22.038476103854528, nd: 1.0, elemId: 0, sd: 12.3 }, // L7 rear → air (d = BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {}, // All-spherical design

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates forward for close focus.
   *  Only the back focal distance changes.
   *  Inferred 0.9 m object-to-image endpoint: exact paraxial unit extension 3.14748 mm.
   */
  var: {
    10: [22.038476103854528, 25.18595590792556],
  },

  varLabels: [["10", "BF (modeled)"]],

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
    "Inferred unit focus — all elements and the stop move objectward 3.15 mm at the modeled 0.90 m object-to-image endpoint. No focus schedule is published; intermediate distance labels are approximate.",

  /* ── Aperture configuration ── */
  nominalFno: 1.5,
  fstopSeries: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16], // v1 production limited to f/8; later versions extended to f/11–f/16

  /* ── Layout tuning ──
   *  scFill raised to accommodate the long rear triplet (thick L6 element).
   *  yScFill modest — front elements are tall relative to the rear.
   */
  scFill: 0.55,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
