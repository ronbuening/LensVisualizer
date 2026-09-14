import type { LensDataInput } from "../../types/optics.js";

/**
 * US 1,998,704 Example I, f=100 dimensions scaled by 0.5.
 * Patent Fig.1 and Example I table checked against the original PDF.
 * Radii/thicknesses and optical constants are sourced; rims, stop placement,
 * and finite focus are inferred. Patent nD is approximated as modern nd.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "bertele-sonnar-50f2-scaled",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA SONNAR 50mm f/2",
  subtitle: "US 1,998,704 EXAMPLE I — BERTELE / ZEISS IKON (1932) — SCALED 0.5× TO 50mm",
  specs: ["6 ELEMENTS / 3 GROUPS", "f ≈ 50.0 mm (scaled from 100mm patent)", "F/2.0", "2ω ≈ 46.8°", "ALL SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50.0,
  apertureMarketing: 2.0,
  apertureDesign: 2.0,
  lensMounts: ["contax-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "US 1,998,704",
  patentAuthors: ["Ludwig Bertele"],
  patentAssignees: ["Zeiss Ikon AG"],
  patentYear: 1935,
  elementCount: 6,
  groupCount: 3,

  /* ── Elements ──
   *  Six elements in three groups: 1-3-2 (singlet, cemented triplet, cemented doublet).
   *  Isolated element focal lengths are calculated at the chosen scale.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6185,
      vd: 60.5,
      fl: 73.0,
      glass: "Unmatched crown medium (patent optical constants; supplier unspecified)",
      apd: false,
      role: "Front collecting meniscus — primary positive power for the front group. Its low-dispersion medium contributes to the chromatic balance.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6711,
      vd: 47.3,
      fl: 38.1,
      glass: "Unmatched (patent medium; supplier unspecified, patent nd=1.6711, νd=47.3)",
      apd: false,
      role: "Triplet entry — strongest positive element. Generates higher-order SA to balance zonal correction at f/2.",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.4645,
      vd: 65.7,
      fl: 87.0,
      glass: "FK3 equivalent (catalog comparison; supplier unspecified)",
      apd: false,
      role: "Low-index spacer — the key Sonnar innovation. nd=1.465 approaches cement index, creating quasi-air-space correction without reflective surfaces.",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.689,
      vd: 31.2,
      fl: -15.8,
      glass: "N-SF8 equivalent (catalog comparison; supplier unspecified, patent nd=1.6890, νd=31.2)",
      apd: false,
      role: "Strongest diverging element. High-dispersion flint provides chromatic correction, Petzval flattening, and coma control via the strongly curved r6 surface.",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.5647,
      vd: 55.8,
      fl: -32.2,
      glass: "Unmatched (patent medium; supplier unspecified, patent nd=1.5647, νd=55.8)",
      apd: false,
      role: "Rear doublet dispersing element — lower index than L6 (Δnd=0.106) per patent claim. Forms the 'collecting cemented face' with its hollow side toward the image.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6711,
      vd: 47.3,
      fl: 19.6,
      glass: "Unmatched (patent medium; supplier unspecified, patent nd=1.6711, νd=47.3)",
      apd: false,
      role: "Rear doublet collecting element — same source optical constants as L2. Second strongest positive element, provides principal rear-group power.",
      cemented: "D1",
    },
  ],

  /* ── Surface prescription ──
   *  Published radii and glass/air thicknesses are scaled by 0.5; SDs are inferred.
   *  Nine optical surfaces plus the aperture stop.
   */
  surfaces: [
    /* ── Group 1: Front singlet (L1) ── */
    { label: "1", R: 28.5, d: 4.0, nd: 1.6185, elemId: 1, sd: 16.0 }, // L1 front
    { label: "2", R: 73.15, d: 0.2, nd: 1.0, elemId: 0, sd: 16.0 }, // L1 rear → air

    /* ── Group 2: Cemented triplet (L2 + L3 + L4) ── */
    { label: "3", R: 18.1, d: 5.0, nd: 1.6711, elemId: 2, sd: 13.0 }, // L2 front
    { label: "4", R: 55.0, d: 3.0, nd: 1.4645, elemId: 3, sd: 13.0 }, // L2→L3 junction
    { label: "5", R: -150.0, d: 3.4, nd: 1.689, elemId: 4, sd: 9.5 }, // L3→L4 junction
    { label: "6", R: 11.85, d: 2.5, nd: 1.0, elemId: 0, sd: 8.25 }, // L4 rear → air

    /* ── Aperture stop ── */
    { label: "STO", R: 1e15, d: 5.0, nd: 1.0, elemId: 0, sd: 7.4 }, // physical stop SD

    /* ── Group 3: Cemented doublet (L5 + L6) ── */
    { label: "7", R: 100.0, d: 1.0, nd: 1.5647, elemId: 5, sd: 9.7 }, // L5 front
    { label: "8", R: 15.35, d: 6.0, nd: 1.6711, elemId: 6, sd: 9.7 }, // L5→L6 junction
    { label: "9", R: -76.32, d: 24.18, nd: 1.0, elemId: 0, sd: 9.7 }, // L6 rear → image (d = BFD)
  ],

  /* ── Aspherical coefficients ──
   *  All-spherical design.
   */
  asph: {},

  /* ── Variable air spacings (focus mechanism) ──
   *  Unit focus: entire lens translates as a rigid assembly.
   *  Inferred 0.9 m object-to-image endpoint from complete paraxial propagation.
   *  The source publishes no focus range or movement schedule.
   */
  var: {
    9: [24.18, 27.33980423943688],
  },

  varLabels: [["9", "BF (modeled)"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 — SINGLET", fromSurface: "1", toSurface: "2" },
    { text: "G2 — CEMENTED TRIPLET", fromSurface: "3", toSurface: "6" },
    { text: "G3 — CEMENTED DOUBLET", fromSurface: "7", toSurface: "9" },
  ],

  doublets: [
    { text: "T1 (L2+L3+L4)", fromSurface: "3", toSurface: "6" },
    { text: "D1 (L5+L6)", fromSurface: "7", toSurface: "9" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.9,
  focusDescription:
    "Inferred unit focus — all optics and the stop move objectward 3.16 mm at the modeled 0.90 m object-to-image endpoint. No focus schedule is published; intermediate distance labels are approximate.",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  maxFstop: 22,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
