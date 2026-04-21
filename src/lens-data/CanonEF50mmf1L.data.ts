import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon EF 50mm f/1.0L USM                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,717,245 Example 2 (Canon / Sadatoshi Takahashi) ║
 * ║  Modified double-Gauss with power-sharing negative meniscus pairs. ║
 * ║  11 elements / 9 groups, 2 aspherical surfaces (ground & polished).║
 * ║  Focus: floating front extension (L11 fixed, L1–L10 extend).      ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f=100; all R, d, sd values scaled ×0.50008            ║
 * ║    to production f≈50.00 mm.                                       ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL SURFACES:                                      ║
 * ║    Patent uses R=∞ pure polynomial form. Converted to standard     ║
 * ║    sag form with R_eff = 1/(2A), K=0. Sag agreement verified to   ║
 * ║    better than 7×10⁻⁹ mm at h=25 mm (f=100 scale).               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from combined marginal + chief ray trace at           ║
 * ║    offAxisFieldFrac = 0.60 with 8% mechanical clearance.           ║
 * ║    Front group capped by 72mm filter thread (SD ≤ 34 mm).         ║
 * ║    All elements constrained by edge thickness ≥ 0.5 mm and        ║
 * ║    sd/|R| ≤ 0.88 for spherical surfaces.                          ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent provides infinity-focus data only. Close-focus gap       ║
 * ║    computed via thin-lens model with L11 fixed. Production lens    ║
 * ║    uses floating mechanism; actual sub-group displacements are     ║
 * ║    not publicly documented.                                        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-50f10l",
  maker: "Canon",
  name: "CANON EF 50mm f/1.0L USM",
  subtitle: "US 4,717,245 EXAMPLE 2 — CANON / TAKAHASHI",
  specs: ["11 ELEMENTS / 9 GROUPS", "f ≈ 50.0 mm", "F/1.0", "2ω ≈ 45.2°", "2 ASPHERICAL SURFACES"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50.0,
  apertureMarketing: 1.0,
  apertureDesign: 1.0,
  patentYear: 1988,
  elementCount: 11,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      fl: 278.2,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Front positive meniscus — begins converging the f/1.0 marginal ray bundle with weak power and minimal angle of incidence.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: 176.1,
      glass: "S-BSM14 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Second positive meniscus — additional convergence for the large-aperture marginal bundle; two-element front unit is key to Example 2.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.51742,
      vd: 52.4,
      fl: -196.9,
      glass: "S-NSL5 (OHARA)",
      apd: false,
      apdNote: "",
      cemented: "D1",
      role: "Negative meniscus with aspherical front — shares negative Petzval burden with L5, reducing sagittal flare. Ground and polished aspherical surface.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 59.2,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      apdNote: "",
      cemented: "D1",
      role: "First high-index lanthanum flint positive — strong convergence toward stop; cemented to L3 for Petzval sum reduction.",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.51742,
      vd: 52.4,
      fl: -52.1,
      glass: "S-NSL5 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Classical front Gauss negative — concave rear surface (R9) faces stop; curvature weakened by L3's power sharing.",
    },
    {
      id: 6,
      name: "L21",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      fl: -21.5,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      apdNote: "",
      cemented: "D2",
      role: "Classical rear Gauss negative — strongest negative power in system; high-dispersion flint for chromatic correction.",
    },
    {
      id: 7,
      name: "L22",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 28.4,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      apdNote: "",
      cemented: "D2",
      role: "Thick biconvex positive cemented to L6 — controls higher-order spherical aberration over the long path length required at f/1.0.",
    },
    {
      id: 8,
      name: "L23",
      label: "Element 8",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.80518,
      vd: 25.4,
      fl: -71.7,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Negative meniscus with aspherical rear — symmetric counterpart to L3, shares rear Gauss negative burden. Ground and polished on dense flint.",
    },
    {
      id: 9,
      name: "L24",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 73.2,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Positive meniscus (concave toward front) — begins converging the wide post-stop beam toward the image.",
    },
    {
      id: 10,
      name: "L25",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 76.4,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Nearly plano-convex positive — primary convergence element in rear group; thick to handle the large-diameter beam.",
    },
    {
      id: 11,
      name: "L26",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.55963,
      vd: 61.2,
      fl: 148.8,
      glass: "S-BSL10 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Weak positive meniscus — field flattener and residual aberration corrector; fixed element in the floating focus mechanism.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 132.766, d: 4.906, nd: 1.60311, elemId: 1, sd: 27.0 }, // L1 front
    { label: "2", R: 627.515, d: 0.095, nd: 1.0, elemId: 0, sd: 26.6 }, // L1 rear → air
    { label: "3", R: 84.118, d: 4.711, nd: 1.6968, elemId: 2, sd: 26.6 }, // L2 front
    { label: "4", R: 261.422, d: 0.145, nd: 1.0, elemId: 0, sd: 25.7 }, // L2 rear → air
    { label: "5A", R: 65.353, d: 3.846, nd: 1.51742, elemId: 3, sd: 25.7 }, // L3 front (asph)
    { label: "6", R: 39.016, d: 7.501, nd: 1.883, elemId: 4, sd: 21.8 }, // L3/L4 junction
    { label: "7", R: 140.162, d: 1.25, nd: 1.0, elemId: 0, sd: 21.8 }, // L4 rear → air
    { label: "8", R: 546.837, d: 2.595, nd: 1.51742, elemId: 5, sd: 20.5 }, // L5 front
    { label: "9", R: 25.634, d: 8.941, nd: 1.0, elemId: 0, sd: 20.2 }, // L5 rear → air
    { label: "STO", R: 1e15, d: 8.941, nd: 1.0, elemId: 0, sd: 17.4 }, // Aperture stop
    { label: "10", R: -24.444, d: 1.93, nd: 1.84666, elemId: 6, sd: 17.4 }, // L6 front
    { label: "11", R: 74.017, d: 12.752, nd: 1.883, elemId: 7, sd: 17.4 }, // L6/L7 junction
    { label: "12", R: -34.806, d: 1.575, nd: 1.0, elemId: 0, sd: 20.8 }, // L7 rear → air
    { label: "13", R: -30.075, d: 2.405, nd: 1.80518, elemId: 8, sd: 20.6 }, // L8 front
    { label: "14A", R: -65.013, d: 0.145, nd: 1.0, elemId: 0, sd: 21.3 }, // L8 rear (asph) → air
    { label: "15", R: -200.987, d: 6.541, nd: 1.883, elemId: 9, sd: 21.3 }, // L9 front
    { label: "16", R: -49.643, d: 0.095, nd: 1.0, elemId: 0, sd: 22.3 }, // L9 rear → air
    { label: "17", R: 1873.333, d: 6.346, nd: 1.883, elemId: 10, sd: 22.3 }, // L10 front
    { label: "18", R: -69.821, d: 0.48, nd: 1.0, elemId: 0, sd: 21.9 }, // L10 rear → air (var)
    { label: "19", R: 71.206, d: 4.426, nd: 1.55963, elemId: 11, sd: 21.7 }, // L11 front
    { label: "20", R: 480.841, d: 37.226, nd: 1.0, elemId: 0, sd: 20.1 }, // L11 rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "5A": {
      K: 0,
      A4: 7.356e-8,
      A6: 1.508e-9,
      A8: -2.16e-12,
      A10: 2.323e-15,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: 7.233e-7,
      A6: 2.749e-9,
      A8: -4.206e-12,
      A10: 2.735e-15,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings ── */
  var: {
    "18": [0.48, 10.39],
  },
  varLabels: [["18", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (FRONT)", fromSurface: "1", toSurface: "9" },
    { text: "G2 (REAR)", fromSurface: "10", toSurface: "20" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5A", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.6,
  focusDescription:
    "Floating front extension — L11 fixed, L1–L10 extend forward. Close-focus gap computed via thin-lens model; production uses floating mechanism with undocumented sub-group displacements.",

  /* ── Aperture configuration ── */
  nominalFno: 1.0,
  fstopSeries: [1.0, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 8,

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
