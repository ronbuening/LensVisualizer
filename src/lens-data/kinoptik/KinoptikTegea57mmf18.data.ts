import type { LensDataInput } from "../../types/optics.js";

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
 * ║  Its physical diameter is not published. STO sd=4.872463417 mm is  ║
 * ║  calibrated from the published f/1.8 and the parsed model's        ║
 * ║  paraxial entrance-pupil magnification; it is not a source value.  ║
 * ║                                                                    ║
 * ║  Semi-diameters are modeled, not patent-published. They are based  ║
 * ║  on exact 2D meridional tracing over the 103° source field and     ║
 * ║  aperture samples, checked against the FIG. 1 silhouette, then     ║
 * ║  constrained by edge thickness, actual rim slope, conic domain,   ║
 * ║  and shared-gap sag intrusion.                                     ║
 * ║                                                                    ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes    ║
 * ║  only the remote-object state. closeFocusM=0.483 is secondary      ║
 * ║  product metadata (CineD 19 in) required by LensDataInput; it      ║
 * ║  does not define an internal focus model and no var gaps are used. ║
 * ║                                                                    ║
 * ║  Source discrepancy retained: prose gives System II f=84.2 mm,    ║
 * ║  while Table 1 computes to 85.0063 mm and closes the published     ║
 * ║  afocal 1/3.92 front pair plus whole-system EFL/BFD.               ║
 * ║                                                                    ║
 * ║  Historical C/ARRIFLEX mounts and 16 mm format have no canonical   ║
 * ║  ids in the supplied taxonomy, so lensMounts/imageFormat are       ║
 * ║  intentionally omitted rather than free-typed.                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "kinoptik-tegea-57mm-f18",
  maker: "Kinoptik",
  name: "KINOPTIK TEGEA 5.7mm f/1.8",
  subtitle: "US 3,037,426 Example 1 — strong Tegea correlation; not manufacturer-confirmed",
  specs: [
    "6 ELEMENTS / 6 GROUPS",
    "PATENT EFL ≈ 5.797 mm",
    "f/1.8",
    "2ω = 103° (PATENT)",
    "1 PARABOLOID SURFACE",
    "16 mm CINEMA (MARKETED)",
  ],

  focalLengthMarketing: 5.7,
  focalLengthDesign: 5.797294665734089,
  apertureMarketing: 1.8,
  apertureDesign: 1.8,
  patentNumber: "US 3,037,426",
  patentAuthors: ["Edgard Hugues"],
  patentAssignees: ["Les Appareils de Precision Kinoptik"],
  patentYear: 1962,
  elementCount: 6,
  groupCount: 6,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 103,
    maxTraceFieldDeg: 51.5,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Plano-Concave Negative (1× Asph)",
      nd: 1.69153,
      vd: 54,
      indexReference: "d",
      fl: -21.691032926987983,
      glass: "N-LAK9-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Negative front system; rear face is the published paraboloid.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.68129,
      vd: 32,
      indexReference: "d",
      fl: 85.0063294498162,
      glass: "Unmatched (681320-class; no compatible catalog curve)",
      apd: false,
      role: "Positive second system; with L1 forms the near-afocal front pair.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.62025,
      vd: 60,
      indexReference: "d",
      fl: 19.984393613849157,
      glass: "N-SK16-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "First positive element of the rear imaging system.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7315,
      vd: 28,
      indexReference: "d",
      fl: -10.774941841104882,
      glass: "Unmatched (732280-class; no compatible catalog curve)",
      apd: false,
      role: "Strong negative element immediately ahead of the aperture stop.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.62025,
      vd: 60,
      indexReference: "d",
      fl: 20.190085374517437,
      glass: "N-SK16-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Convergent meniscus behind the stop in System III.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.62025,
      vd: 60,
      indexReference: "d",
      fl: 36.01559510022338,
      glass: "N-SK16-class (coordinate-compatible spectral proxy; supplier unproven)",
      apd: false,
      role: "Final positive element of System III.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 1e15, d: 5.09, nd: 1.69153, elemId: 1, sd: 40 },
    { label: "2A", R: 15, d: 59.09, nd: 1, elemId: 0, sd: 26 },
    { label: "3", R: 190, d: 10, nd: 1.68129, elemId: 2, sd: 28 },
    { label: "4", R: -81.53, d: 61.15, nd: 1, elemId: 0, sd: 28 },
    { label: "5", R: 12.83, d: 2.03, nd: 1.62025, elemId: 3, sd: 6.6 },
    { label: "6", R: -343.7, d: 3.81, nd: 1, elemId: 0, sd: 6.6 },
    { label: "7", R: -13.4, d: 0.58, nd: 1.7315, elemId: 4, sd: 5.3 },
    { label: "8", R: 19.49, d: 1.4, nd: 1, elemId: 0, sd: 5.15 },
    { label: "STO", R: 1e15, d: 1.29, nd: 1, elemId: 0, sd: 4.8724634172196115 },
    { label: "9", R: -85.48, d: 1.58, nd: 1.62025, elemId: 5, sd: 5.8 },
    { label: "10", R: -11, d: 0.34, nd: 1, elemId: 0, sd: 5.8 },
    { label: "11", R: 44.46, d: 1.13, nd: 1.62025, elemId: 6, sd: 6.4 },
    { label: "12", R: -44.46, d: 17.95, nd: 1, elemId: 0, sd: 6.4 },
  ],

  asph: {
    "2A": {
      K: -1,
      A4: 0,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  var: {},
  varLabels: [],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2A" },
    { text: "II", fromSurface: "3", toSurface: "4" },
    { text: "III", fromSurface: "5", toSurface: "12" },
  ],
  doublets: [],

  closeFocusM: 0.483,
  focusDescription: "Not modeled; the patent supplies only the infinity prescription.",

  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
