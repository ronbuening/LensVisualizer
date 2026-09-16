import type { LensDataInput } from "../../types/optics.js";

/**
 * Schneider Cinegon 1.8 / 10 — US 3,038,379, Example 1.
 *
 * Source/model separation:
 * - The patent prescription is normalized to overall focal length 1. All radii and axial prescription spacings are
 *   scaled uniformly by exactly 10.0 mm/source unit. The rounded patent table therefore computes EFL = 10.0205499507 mm;
 *   it is not renormalized to force exactly 10.000 mm.
 * - The patent gives a 2.511-source-unit "diaphragm space" but no dimensioned stop plane or stop diameter. Neither the
 *   text/table nor the schematic distinctly locates a physical iris plane. LensVisualizer nevertheless requires one STO,
 *   so the implemented 11.30/13.81 mm split is a deterministic modeling choice within the conserved 25.11 mm gap, not a
 *   figure-derived coordinate.
 * - STO semi-diameter 4.3045451202 mm is calibrated from the published f/1.8 target using the implemented paraxial
 *   entrance-pupil mapping. Agreement with f/1.8 is therefore calibration, not independent evidence for a physical iris
 *   diameter.
 * - The patent publishes no clear semi-diameters. SDs are estimated from the optical rims in
 *   US 3,038,379 p. 1 at 600 dpi (approximately 0.0298 mm/pixel), excluding leaders and the L1 flange.
 *   The front doublets taper to 6.2 mm at r6; the rear component shares an approximately 7.2 mm rim.
 *   The drawing is schematic; these are modeled clear apertures, not manufacturing dimensions.
 * - Surface 14 d is the computed paraxial BFD to the modeled infinity image plane, 17.4140596314 mm from the r14 vertex.
 *   The patent's separately published BFD is rounded to 1.7 source units (17 mm after scale).
 * - Compatible catalog curves are resolved at runtime as supplier-neutral dispersion proxies.
 *   No catalog-derived line indices are authored as patent measurements.
 * - The patent prose/claim calls the L1+L2 doublet positive, while its printed numerical table robustly computes a weak
 *   negative isolated power. No source number is changed; the discrepancy remains an audit disclosure.
 * - Period literature strongly correlates this formula with the Schneider Cinegon 1.8/10, but no primary Schneider
 *   statement tying US 3,038,379 Example 1 to the production formula was found. Current taxonomy has no C-mount or
 *   16 mm cine-format ids, so lensMounts and imageFormat are intentionally omitted.
 * - Focus status: NO_INTERNAL_RECONSTRUCTION. The patent has one fixed optical state. The 1961 period listing's 8 in
 *   closest-focus figure is retained only as product metadata; no internal focus var gaps are invented.
 */
const LENS_DATA = {
  /* ── Identity ── */
  key: "schneider-cinegon-10f18",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH CINEGON 10mm f/1.8",
  subtitle: "US 3,038,379 Example 1 — 10× scaled patent model; strong Cinegon 1.8/10 correlation",
  specs: [
    "9 ELEMENTS / 5 GROUPS",
    "f = 10.02055 mm (MODELED)",
    "F/1.8",
    "2ω = 66° (PATENT)",
    "BFD = 17.41406 mm (MODELED)",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 10,
  focalLengthDesign: 10.020549950705151,
  apertureMarketing: 1.8,
  apertureDesign: 1.8,
  patentNumber: "US 3,038,379",
  patentAuthors: ["Wolfram W. Albrecht"],
  patentAssignees: ["Jos. Schneider & Co., Optische Werke"],
  patentYear: 1962,
  elementCount: 9,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      fl: -20.033663,
      glass: "744449 — N-LAF2 class (supplier unproven)",
      role: "Negative first lens of the front cemented doublet.",
      cemented: "D12",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Positive Lens",
      nd: 1.5014,
      vd: 56.5,
      indexReference: "d",
      fl: 23.458242,
      glass: "501564 — K10 class (supplier unproven)",
      role: "Positive second lens of the front cemented doublet.",
      cemented: "D12",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.74,
      vd: 28.2,
      indexReference: "d",
      fl: 27.538497,
      glass: "740282 — SF3 class (supplier unproven)",
      role: "Positive third lens of the second front-component cemented doublet.",
      cemented: "D34",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5128,
      vd: 57.2,
      indexReference: "d",
      fl: -12.846876,
      glass: "Unmatched (nd=1.5128, vd=57.2; public catalog identity unresolved)",
      role: "Negative fourth lens ending the object-side component.",
      cemented: "D34",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      fl: -42.975211,
      glass: "673322 — SF5 class (supplier unproven)",
      role: "Dispersive fifth lens at the front of the image-side component.",
      cemented: "D56",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.5687,
      vd: 63.1,
      indexReference: "d",
      fl: 21.07514,
      glass: "569631 — H-ZK1 / PSK2 class (supplier unproven)",
      role: "Collective sixth lens cemented to L5.",
      cemented: "D56",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6425,
      vd: 58.1,
      indexReference: "d",
      fl: 39.505429,
      glass: "643581 — K-LaK6 / LAK6 class (supplier unproven)",
      role: "Biconvex seventh lens forming the middle member of component II.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.54,
      vd: 59.7,
      indexReference: "d",
      fl: 21.728897,
      glass: "540597 — N-BAK2 class (supplier unproven)",
      role: "Positive eighth lens of the rear cemented doublet.",
      cemented: "D89",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 9",
      type: "Negative Lens",
      nd: 1.7282,
      vd: 28.3,
      indexReference: "d",
      fl: -24.959251,
      glass: "728284 — SF10 class (supplier unproven)",
      role: "Negative ninth lens closing the rear cemented doublet.",
      cemented: "D89",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: -120.4, d: 0.98, nd: 1.744, elemId: 1, sd: 13.4 },
    { label: "2", R: 17.07, d: 9.75, nd: 1.5014, elemId: 2, sd: 11.9 },
    { label: "3", R: -30.61, d: 0.1, nd: 1.0, elemId: 0, sd: 11.9 },
    { label: "4", R: 38.04, d: 4.1, nd: 1.74, elemId: 3, sd: 10.3 },
    { label: "5", R: -41.88, d: 1.46, nd: 1.5128, elemId: 4, sd: 10.3 },
    { label: "6", R: 7.91, d: 11.3, nd: 1.0, elemId: 0, sd: 6.2 },
    { label: "STO", R: 1e15, d: 13.81, nd: 1.0, elemId: 0, sd: 4.304545120210192 },
    { label: "7", R: 1317, d: 0.98, nd: 1.6727, elemId: 5, sd: 7.2 },
    { label: "8", R: 28.28, d: 4.88, nd: 1.5687, elemId: 6, sd: 7.2 },
    { label: "9", R: -19.5, d: 0.05, nd: 1.0, elemId: 0, sd: 7.2 },
    { label: "10", R: 47.46, d: 3.41, nd: 1.6425, elemId: 7, sd: 7.2 },
    { label: "11", R: -53.03, d: 0.05, nd: 1.0, elemId: 0, sd: 7.2 },
    { label: "12", R: 24.4, d: 5.12, nd: 1.54, elemId: 8, sd: 7.2 },
    { label: "13", R: -20.94, d: 0.88, nd: 1.7282, elemId: 9, sd: 7.2 },
    { label: "14", R: 140.1, d: 17.414059631418706, nd: 1.0, elemId: 0, sd: 7.2 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "COMPONENT I", fromSurface: "1", toSurface: "6" },
    { text: "COMPONENT II", fromSurface: "7", toSurface: "14" },
  ],

  doublets: [
    { text: "D12", fromSurface: "1", toSurface: "3" },
    { text: "D34", fromSurface: "4", toSurface: "6" },
    { text: "D56", fromSurface: "7", toSurface: "9" },
    { text: "D89", fromSurface: "12", toSurface: "14" },
  ],

  closeFocusM: 0.2032,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — one fixed patent prescription; 0.2032 m is the period product listing's closest-focus specification only, with no authored internal focus motion.",

  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
