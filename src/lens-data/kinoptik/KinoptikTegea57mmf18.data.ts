import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — KINOPTIK TEGEA 5.7mm f/1.8                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,037,426 Example 1 / Table 1 (Edgard Hugues).   ║
 * ║  Patent model: 6 elements / 6 air-spaced groups, 1 paraboloid.     ║
 * ║  Production correlation: strong, but not manufacturer-confirmed.   ║
 * ║                                                                    ║
 * ║  No scaling is applied. The patent model computes to f=5.7973 mm;  ║
 * ║  the production 5.7 mm designation remains marketing metadata.     ║
 * ║                                                                    ║
 * ║  The published stop is 1.40 mm behind L4 and 1.29 mm before L5.   ║
 * ║  Its physical diameter is not published. The stop radius is        ║
 * ║  derived from the design f-number (the published f/1.8); it is     ║
 * ║  not a source value.                                               ║
 * ║                                                                    ║
 * ║  Semi-diameters are modeled, not patent-published. They are based  ║
 * ║  on exact 2D meridional tracing over the 103° source field and     ║
 * ║  aperture samples, checked against the FIG. 1 silhouette, then     ║
 * ║  constrained by edge thickness, actual rim slope, conic domain,   ║
 * ║  and shared-gap sag intrusion.                                     ║
 * ║                                                                    ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes    ║
 * ║  only the remote-object state. The manufacturer brochure calls   ║
 * ║  the production lens fixed focus; no variable gaps are authored. ║
 * ║                                                                    ║
 * ║  Source discrepancy retained: prose gives System II f=84.2 mm,    ║
 * ║  while Table 1 computes to 85.0063 mm and closes the published     ║
 * ║  afocal 1/3.92 front pair plus whole-system EFL/BFD.               ║
 * ║                                                                    ║
 * ║  Format follows the manufacturer brochure: standard 16 mm cine. ║
 * ║  Historical C/ARRIFLEX mounts remain uncatalogued.                ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "kinoptik-tegea-57mm-f18",
  maker: "Kinoptik",
  name: "KINOPTIK TEGEA 5.7mm f/1.8",
  subtitle: "US 3,037,426 Example 1 — strong Tegea correlation; not manufacturer-confirmed",

  catalog: {
    lensMounts: ["c-mount", "arri-standard"],
    imageFormat: "16mm-cinema",
    specs: [
      "12.70 mm FORMAT DIAGONAL",
      "6 ELEMENTS / 6 GROUPS",
      "PATENT EFL ≈ 5.797 mm",
      "f/1.8",
      "2ω = 103° (PATENT)",
      "1 PARABOLOID SURFACE",
      "16 mm CINEMA (MARKETED)",
    ],
    elementCount: 6,
    groupCount: 6,
    focalLengthMm: { marketing: 5.7, design: 5.797294665734089 },
    fNumber: { marketing: 1.8, design: 1.8 },
  },

  source: {
    patentNumber: "US 3,037,426",
    patentYear: 1962,
    authors: ["Edgard Hugues"],
    assignees: ["Les Appareils de Precision Kinoptik"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Concave Negative (1× Asph)",
      nd: 1.69153,
      vd: 54,
      indexReference: "d",
      focalLengthMm: -21.691032926987983,
      glass: "N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Negative front system; rear face is the published paraboloid.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.68129,
      vd: 32,
      indexReference: "d",
      focalLengthMm: 85.0063294498162,
      glass: "Unmatched (681320-class; no compatible catalog curve)",
      apd: false,
      role: "Positive second system; with L1 forms the near-afocal front pair.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.62025,
      vd: 60,
      indexReference: "d",
      focalLengthMm: 19.984393613849157,
      glass: "N-SK16-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "First positive element of the rear imaging system.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7315,
      vd: 28,
      indexReference: "d",
      focalLengthMm: -10.774941841104882,
      glass: "Unmatched (732280-class; no compatible catalog curve)",
      apd: false,
      role: "Strong negative element immediately ahead of the aperture stop.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.62025,
      vd: 60,
      indexReference: "d",
      focalLengthMm: 20.190085374517437,
      glass: "N-SK16-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Convergent meniscus behind the stop in System III.",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.62025,
      vd: 60,
      indexReference: "d",
      focalLengthMm: 36.01559510022338,
      glass: "N-SK16-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Final positive element of System III.",
      diagramLabel: "L6",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: "flat", d: 5.09, sd: 40, medium: 1 },
    { label: "2A", R: 15, d: 59.09, sd: 26, asphere: { K: -1, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } },
    { label: "3", R: 190, d: 10, sd: 28, medium: 2 },
    { label: "4", R: -81.53, d: 61.15, sd: 28 },
    { label: "5", R: 12.83, d: 2.03, sd: 6.6, medium: 3 },
    { label: "6", R: -343.7, d: 3.81, sd: 6.6 },
    { label: "7", R: -13.4, d: 0.58, sd: 5.3, medium: 4 },
    { label: "8", R: 19.49, d: 1.4, sd: 5.15 },
    { label: "STO", R: "flat", d: 1.29 },
    { label: "9", R: -85.48, d: 1.58, sd: 5.8, medium: 5 },
    { label: "10", R: -11, d: 0.34, sd: 5.8 },
    { label: "11", R: 44.46, d: 1.13, sd: 6.4, medium: 6 },
    { label: "12", R: -44.46, d: 17.95, sd: 6.4 },
  ],

  // Manufacturer brochure specifies fixed focus; this value is an infinity sentinel.
  focus: { closeFocusM: 1e6, description: "Fixed focus; no moving groups are modeled." },

  aperture: { nominalFNumber: 1.8, fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16] },

  projection: { kind: "rectilinear", fullFieldDeg: 103, maxTraceFieldDeg: 51.5 },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2A" },
    { text: "II", fromSurface: "3", toSurface: "4" },
    { text: "III", fromSurface: "5", toSurface: "12" },
  ],
  doublets: [],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
