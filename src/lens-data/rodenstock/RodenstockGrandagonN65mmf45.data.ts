import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
  schema: 2,
  key: "rodenstock-grandagon-n-65mm-f45",
  maker: "Rodenstock",
  name: "RODENSTOCK GRANDAGON-N 65mm f/4.5",
  subtitle: "DE 2444954 A1 Claim 4 — Rodenstock / Schlegel & Weiß",

  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "4x5",
    specs: [
      "8 ELEMENTS / 4 GROUPS",
      "f′ = 65 mm; EFL ≈ 64.83 mm",
      "F/4.5",
      "105° COVERAGE / 170 mm IMAGE CIRCLE",
      "ALL SPHERICAL",
    ],
    elementCount: 8,
    groupCount: 4,
    focalLengthMm: { marketing: 65, design: 64.827 },
    fNumber: { marketing: 4.5, design: 4.5 },
  },

  source: {
    patentNumber: "DE 2444954 A1",
    patentYear: 1976,
    authors: ["Franz Schlegel", "Josef Weiß"],
    assignees: ["Optische Werke G. Rodenstock"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.4662,
      vd: 65.56,
      indexReference: "e",
      focalLengthMm: -48.67,
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
      indexReference: "e",
      focalLengthMm: -84.58,
      glass: "SF5 (Schott; patent ne=1.6776, ve=31.97 stored as nd/vd)",
      role: "High-dispersion outer component of the front cemented triplet.",
      cemented: "T1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.625,
      vd: 52.86,
      indexReference: "e",
      focalLengthMm: 13.55,
      glass: "SSK2 class (Schott dense special crown; patent e-line values)",
      role: "Main positive element of the front cemented triplet.",
      cemented: "T1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5629,
      vd: 46.88,
      indexReference: "e",
      focalLengthMm: -22.97,
      glass: "Unmatched barium-flint / short-flint class (patent e-line values)",
      role: "Stop-side negative component of the front cemented triplet.",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.5846,
      vd: 59.19,
      indexReference: "e",
      focalLengthMm: -23.39,
      glass: "Unmatched barium crown / BaK class (patent e-line values)",
      role: "Stop-side negative component of the rear cemented triplet.",
      cemented: "T2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6113,
      vd: 58.65,
      indexReference: "e",
      focalLengthMm: 11.47,
      glass: "Unmatched dense crown, SK-class (patent e-line values)",
      role: "Main positive element of the rear cemented triplet.",
      cemented: "T2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.67,
      vd: 46.13,
      indexReference: "e",
      focalLengthMm: -42.75,
      glass: "Unmatched high-index barium-flint class (patent e-line values; Claim 4 prints v_e = 46.13)",
      role: "Outer negative component of the rear cemented triplet.",
      cemented: "T2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.4891,
      vd: 70.22,
      indexReference: "e",
      focalLengthMm: -43.55,
      glass: "FK5 / N-FK5 class (Schott fluorite crown; patent e-line values)",
      role: "Rear negative field-widening meniscus.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 65.88, d: 4.75, sd: 18.0, medium: 1 },
    { label: "2", R: 16.49, d: 8.55, sd: 14.4 },

    { label: "3", R: 26.23, d: 10.95, sd: 12.7, medium: 2 },
    { label: "4", R: 14.96, d: 9.9, sd: 9.3, medium: 3 },
    { label: "5", R: -14.54, d: 0.65, sd: 9.3, medium: 4 },
    { label: "6", R: 118.85, d: 1.65, sd: 8.8 },

    { label: "STO", R: "flat", d: 0.36 },

    { label: "7", R: 292.16, d: 0.75, sd: 8.8, medium: 5 },
    { label: "8", R: 13.05, d: 9.55, sd: 9.3, medium: 6 },
    { label: "9", R: -10.94, d: 8.1, sd: 9.3, medium: 7 },
    { label: "10", R: -22.96, d: 8.0, sd: 12.7 },

    { label: "11", R: -16.79, d: 2.75, sd: 14.4, medium: 8 },
    { label: "12", R: -83.54, sd: 18.0 },
  ],

  focus: {
    closeFocusM: 0.7,
    description:
      "Unit focus by view-camera bellows or helicoid; final air space varies from infinity to a representative 0.7 m subject distance.",
  },

  gaps: { "12": { label: "BF", values: [[44.8246, 52.6393]] } },

  aperture: { nominalFNumber: 4.5, fStops: [4.5, 5.6, 8, 11, 16, 22, 32, 45], maxFNumber: 45 },

  projection: { kind: "rectilinear", fullFieldDeg: 105, maxTraceFieldDeg: 52.5 },

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

  layout: { scFill: 0.62, yScFill: 0.72 },

  rays: { offAxisFieldFrac: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
