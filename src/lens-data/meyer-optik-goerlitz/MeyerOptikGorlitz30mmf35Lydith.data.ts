import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MEYER OPTIK GÖRLITZ LYDITH 30mm f/3.5                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: DE 1 794 971, Zahlenbeispiel / Example 1.                        ║
 * ║  Historical Lydith correlation: strong inference, not manufacturer-       ║
 * ║  confirmed. Five air-spaced singlets; all surfaces are spherical.         ║
 * ║                                                                            ║
 * ║  Scaling: the patent example is normalized to f′ = 100. Every source      ║
 * ║  length is scaled uniformly ×0.3 for the 30 mm production target. The     ║
 * ║  rounded patent table traces to EFL = 30.57984526 mm, so marketing 30 mm  ║
 * ║  and design EFL remain separate. The final d = 36.75 mm preserves the     ║
 * ║  published scaled s′o = 122.5 × 0.3 rather than replacing it with the     ║
 * ║  rounded-table paraxial BFD of 37.70284110 mm.                            ║
 * ║                                                                            ║
 * ║  Stop: the patent places the diaphragm between L4 and L5 but gives no     ║
 * ║  dimensioned axial coordinate or physical diameter. The undimensioned     ║
 * ║  optical section provides no basis to favor either side of l4, so the     ║
 * ║  2.79 mm scaled gap is split at its midpoint (1.395 + 1.395 mm). STO.sd  ║
 * ║  is calibrated from the modeled entrance pupil to reproduce the published ║
 * ║  f/3.5 target; it is not a source-verified diaphragm diameter.             ║
 * ║                                                                            ║
 * Semi-diameters are unpublished modeling apertures. The exact local patent p. 6 optical rims
 * refine L2 to 10 mm, L3 to 7.5 mm, L4 to 6.1 mm and L5 to 6.8 mm. L2/L3 retain modest clearance
 * over the drawing; the stepped front meniscus and calibrated stop are retained. See the audit
 * sidecar for measurements.
 *
 * ║  Focus: NO_INTERNAL_RECONSTRUCTION. The patent publishes only one nominal ║
 * ║  prescription. closeFocusM = 0.33 m is manufacturer metadata for the      ║
 * ║  historical preselection-aperture variant; it does not alter the model.   ║
 * ║                                                                            ║
 * ║  Glass: the patent publishes only d-line nd / νd coordinates. The labels  ║
 * ║  below include qualified spectral proxies; no historical supplier or melt   ║
 * ║  is asserted; no catalog nC/nF/ng or dPgF is copied.                                                              ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "meyer-optik-gorlitz-lydith-30f35",
  maker: "Meyer Optik Görlitz",
  name: "MEYER OPTIK GÖRLITZ LYDITH 30mm f/3.5",
  subtitle: "DE 1 794 971 — Example 1; historical Lydith correlation is strong inference, not manufacturer-confirmed",
  specs: [
    "5 ELEMENTS / 5 GROUPS",
    "30 mm MARKETED / 30.579845 mm DESIGN EFL",
    "f/3.5 MODELED (STOP CALIBRATED)",
    "≈70° PATENT FIELD / 72° MARKETED USED FIELD",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 30,
  focalLengthDesign: 30.57984525997122,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["exakta", "m42", "praktina"],
  imageFormat: "135-full-frame",
  patentNumber: "DE 1 794 971",
  patentAuthors: [],
  patentAssignees: ["VEB Feinoptisches Werk Görlitz"],
  patentYear: 1959,
  elementCount: 5,
  groupCount: 5,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "I",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5696,
      vd: 63.1,
      indexReference: "d",
      fl: -35.999964209253754,
      glass: "H-ZK1 — compatible spectral proxy (historical supplier/melt unresolved)",
      role: "Front negative meniscus providing the retrofocus front-group divergence.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "II",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6405,
      vd: 34.5,
      indexReference: "d",
      fl: 28.295907063694553,
      glass: "E-FD7 — compatible spectral proxy (historical supplier/melt unresolved)",
      role: "Strong positive collector following the long front air space.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "III",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.5887,
      vd: 61,
      indexReference: "d",
      fl: 41.537839775282464,
      glass: "SK5 — compatible spectral proxy (historical supplier/melt unresolved)",
      role: "Positive meniscus preceding the dense-flint negative element.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "IV",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7617,
      vd: 26.5,
      indexReference: "d",
      fl: -13.499969609906517,
      glass: "S-TIH14 — compatible spectral proxy (historical supplier/melt unresolved)",
      role: "Dense-flint biconcave element immediately before the aperture stop.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "V",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6197,
      vd: 60.4,
      indexReference: "d",
      fl: 22.07818701366862,
      glass: "N-SK16 — compatible spectral proxy (historical supplier/melt unresolved)",
      role: "Rear positive element after the stop; its strongly curved rear surface faces the image side.",
    },
  ],

  surfaces: [
    { label: "1", R: 75.3, d: 2.79, nd: 1.5696, elemId: 1, sd: 17.6 },
    { label: "2", R: 15.9, d: 16.2, nd: 1, elemId: 0, sd: 13.7 },
    { label: "3", R: 30.6, d: 4.32, nd: 1.6405, elemId: 2, sd: 10.0 },
    { label: "4", R: -42, d: 1.17, nd: 1, elemId: 0, sd: 10.0 },
    { label: "5", R: 20.4, d: 2.85, nd: 1.5887, elemId: 3, sd: 7.5 },
    { label: "6", R: 116.7, d: 2.01, nd: 1, elemId: 0, sd: 7.5 },
    { label: "7", R: -28.8, d: 3.36, nd: 1.7617, elemId: 4, sd: 6.1 },
    { label: "8", R: 16.8, d: 1.395, nd: 1, elemId: 0, sd: 6.1 },
    { label: "STO", R: 1e15, d: 1.395, nd: 1, elemId: 0, sd: 5.027250794239381 },
    { label: "9", R: 138.3, d: 4.38, nd: 1.6197, elemId: 5, sd: 6.8 },
    { label: "10", R: -15, d: 36.75, nd: 1, elemId: 0, sd: 6.8 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [],

  closeFocusM: 0.33,
  focusDescription:
    "Focus travel is not modeled. The patent supplies one nominal/infinity prescription only; 0.33 m is manufacturer metadata for the historical preselection-aperture variant and does not drive internal motion.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16],

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
