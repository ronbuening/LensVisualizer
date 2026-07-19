import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — RODENSTOCK GRANDAGON-N 65mm f/4.5             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 2444954 A1, Claim 4 / worked data set 4.          ║
 * ║  Rodenstock eight-element quasi-symmetric large-format wide angle. ║
 * ║  8 elements / 4 groups, all spherical.                             ║
 * ║  Focus: unit focus; final air space models extension from infinity ║
 * ║  to a representative 0.7 m subject distance from the image plane.  ║
 * ║                                                                    ║
 * ║  NOTE ON REFERENCE LINE:                                           ║
 * ║    The patent publishes refractive indices and Abbe numbers at the ║
 * ║    e line (n_e / v_e). The LensVisualizer schema names these fields║
 * ║    nd / vd, but the values below intentionally preserve the patent ║
 * ║    e-line prescription for paraxial agreement with DE 2444954 A1.  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent omits clear apertures. Semi-diameters are conservative║
 * ║    estimates from exact-ray stop geometry, the patent drawing, and  ║
 * ║    renderer constraints: sd/|R| < 0.90, element surface ratio ≤1.25,║
 * ║    positive edge thickness, and signed cross-gap sag clearance.     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "rodenstock-grandagon-n-65mm-f45",
  maker: "Rodenstock",
  name: "RODENSTOCK GRANDAGON-N 65mm f/4.5",
  subtitle: "DE 2444954 A1 Claim 4 — Rodenstock / Schlegel & Weiß",
  specs: [
    "8 ELEMENTS / 4 GROUPS",
    "f′ = 65 mm; EFL ≈ 64.83 mm",
    "F/4.5",
    "105° COVERAGE / 170 mm IMAGE CIRCLE",
    "ALL SPHERICAL",
  ],

  focalLengthMarketing: 65,
  focalLengthDesign: 64.827,
  apertureMarketing: 4.5,
  apertureDesign: 4.5,
  lensMounts: ["large-format-lens-board"],
  imageFormat: "4x5",
  patentNumber: "DE 2444954 A1",
  patentAuthors: ["Franz Schlegel", "Josef Weiß"],
  patentAssignees: ["Optische Werke G. Rodenstock"],
  patentYear: 1976,
  elementCount: 8,
  groupCount: 4,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 105,
    maxTraceFieldDeg: 52.5,
  },

  focusDescription:
    "Unit focus by view-camera bellows or helicoid; final air space varies from infinity to a representative 0.7 m subject distance.",

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.4662,
      vd: 65.56,
      fl: -48.67,
      glass: "FK3 class (Schott legacy fluorite crown; patent e-line values)",
      role: "Front negative field-widening meniscus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6776,
      vd: 31.97,
      fl: -84.58,
      glass: "Unmatched (SF5-class dense flint; patent e-line values)",
      cemented: "T1",
      role: "High-dispersion outer component of the front cemented triplet.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.625,
      vd: 52.86,
      fl: 13.55,
      glass: "SSK2 class (Schott dense special crown; patent e-line values)",
      cemented: "T1",
      role: "Main positive element of the front cemented triplet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5629,
      vd: 46.88,
      fl: -22.97,
      glass: "Unmatched barium-flint / short-flint class (patent e-line values)",
      cemented: "T1",
      role: "Stop-side negative component of the front cemented triplet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.5846,
      vd: 59.19,
      fl: -23.39,
      glass: "Unmatched barium crown / BaK class (patent e-line values)",
      cemented: "T2",
      role: "Stop-side negative component of the rear cemented triplet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6113,
      vd: 58.65,
      fl: 11.47,
      glass: "Unmatched dense crown, SK-class (patent e-line values)",
      cemented: "T2",
      role: "Main positive element of the rear cemented triplet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.67,
      vd: 46.13,
      fl: -42.75,
      glass: "Unmatched high-index barium-flint class (patent e-line values; Claim 4 prints v_e = 46.13)",
      cemented: "T2",
      role: "Outer negative component of the rear cemented triplet.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.4891,
      vd: 70.22,
      fl: -43.55,
      glass: "FK5 / N-FK5 class (Schott fluorite crown; patent e-line values)",
      role: "Rear negative field-widening meniscus.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 65.88, d: 4.75, nd: 1.4662, elemId: 1, sd: 18.0 },
    { label: "2", R: 16.49, d: 8.55, nd: 1.0, elemId: 0, sd: 14.4 },

    { label: "3", R: 26.23, d: 10.95, nd: 1.6776, elemId: 2, sd: 12.7 },
    { label: "4", R: 14.96, d: 9.9, nd: 1.625, elemId: 3, sd: 9.3 },
    { label: "5", R: -14.54, d: 0.65, nd: 1.5629, elemId: 4, sd: 9.3 },
    { label: "6", R: 118.85, d: 1.65, nd: 1.0, elemId: 0, sd: 8.8 },

    { label: "STO", R: 1e15, d: 0.36, nd: 1.0, elemId: 0, sd: 7.5445 },

    { label: "7", R: 292.16, d: 0.75, nd: 1.5846, elemId: 5, sd: 8.8 },
    { label: "8", R: 13.05, d: 9.55, nd: 1.6113, elemId: 6, sd: 9.3 },
    { label: "9", R: -10.94, d: 8.1, nd: 1.67, elemId: 7, sd: 9.3 },
    { label: "10", R: -22.96, d: 8.0, nd: 1.0, elemId: 0, sd: 12.7 },

    { label: "11", R: -16.79, d: 2.75, nd: 1.4891, elemId: 8, sd: 14.4 },
    { label: "12", R: -83.54, d: 44.8246, nd: 1.0, elemId: 0, sd: 18.0 },
  ],

  asph: {},

  var: {
    "12": [44.8246, 52.6393],
  },
  varLabels: [["12", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2 / T1", fromSurface: "3", toSurface: "6" },
    { text: "G3 / T2", fromSurface: "7", toSurface: "10" },
    { text: "G4", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    { text: "T1", fromSurface: "3", toSurface: "6" },
    { text: "T2", fromSurface: "7", toSurface: "10" },
  ],

  closeFocusM: 0.7,
  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22, 32, 45],
  maxFstop: 45,

  scFill: 0.62,
  yScFill: 0.72,
  offAxisFieldFrac: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
