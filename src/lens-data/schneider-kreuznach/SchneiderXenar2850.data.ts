import type { LensDataInput } from "../../types/optics.js";

/**
 * SCHNEIDER-KREUZNACH XENAR 50mm f/2.8 - DE 753329 Example 1.
 *
 * Source prescription: Reichspatentamt DE 753329, Zahlentafel 1.
 * The patent publishes relative lengths, relative opening 1:2.9, and five
 * yellow-ray refractive indices/Abbe numbers. The complete prescription is
 * uniformly scaled by s = 50.010318114776474 so the computed EFL is 50.0 mm.
 *
 * Marketing and design aperture remain separate: the historical product is
 * correlated to an f/2.8 Xenar, while this selected patent example is f/2.9.
 * nominalFno therefore uses 2.9. The physical stop is not published. Its axial
 * station is inferred at 0.715 of the R6-R7 aperture space from rendered Fig. 1,
 * and its semi-diameter is calibrated to the modeled f/2.9 entrance pupil.
 * That calibration is not independent evidence of a historical diaphragm size.
 *
 * Semi-diameters are modeled rather than source-published. They were selected
 * from exact meridional ray bundles at a representative 13.5 degree field
 * (0.6 x the half-angle of the 45 degree secondary Exakta correlation), then
 * checked for positive edge thickness, actual spherical rim slope, and shared-
 * band cross-gap clearance. The 45 degree value is a geometry stress-test input,
 * not authored product-format metadata; lensMounts and imageFormat remain unset.
 *
 * The patent says only "yellow ray". indexReference="d" is the closest schema
 * proxy for the retained source coordinates and does not assert exact He-d
 * provenance. No nC/nF/ng/dPgF values are added.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. No focus var is authored. The
 * required closeFocusM value is 0.75 m from the Stage-1 secondary Exakta-variant
 * correlation and is metadata only; it does not define an optical focus law.
 *
 * Product-to-patent attribution remains strong secondary correlation, not
 * manufacturer-confirmed. A secondary source also conflicts with the patent on
 * whether the five elements were all uncemented; this file preserves the patent's
 * explicit cemented R8 interface.
 */

const LENS_DATA = {
  key: "schneider-kreuznach-xenar-50f28",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH XENAR 50mm f/2.8",
  subtitle: "DE 753329 Example 1 - 1935 five-element design; production correlation remains secondary",
  specs: ["5 ELEMENTS / 4 GROUPS", "DESIGN f = 50.0 mm", "PATENT f/2.9 / MARKETED f/2.8"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  patentNumber: "DE 753329",
  patentAuthors: [],
  patentAssignees: ["Jos. Schneider & Co., Optotechnische Gesellschaft"],
  patentYear: 1944,
  elementCount: 5,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.589,
      vd: 61.2,
      indexReference: "d",
      fl: 35.512027666,
      glass: "589612-class crown (supplier/melt unresolved)",
      apd: false,
      role: "Front positive collecting element.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6375,
      vd: 56.1,
      indexReference: "d",
      fl: 111.372660357,
      glass: "S-BSM18 — compatible spectral proxy (historical supplier/melt unresolved)",
      apd: false,
      role: "Second positive collecting member.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6045,
      vd: 37.8,
      indexReference: "d",
      fl: -18.614550353,
      glass: "F5 — compatible spectral proxy (historical supplier/melt unresolved)",
      apd: false,
      role: "Central negative element ahead of the aperture space.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5145,
      vd: 54.7,
      indexReference: "d",
      fl: -31.730170882,
      glass: "KF3 — compatible spectral proxy (historical supplier/melt unresolved)",
      apd: false,
      role: "Negative component of the cemented image-side member.",
      cemented: "IV",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6025,
      vd: 59.5,
      indexReference: "d",
      fl: 16.870777275,
      glass: "N-SK14 — compatible spectral proxy (historical supplier/melt unresolved)",
      apd: false,
      role: "Positive component of the cemented image-side member.",
      cemented: "IV",
    },
  ],

  surfaces: [
    { label: "1", R: 21.619460521018, d: 2.859089886622, nd: 1.589, elemId: 1, sd: 10.5 },
    { label: "2", R: -611.826231816175, d: 0.203541994727, nd: 1, elemId: 0, sd: 10.5 },
    { label: "3", R: 27.125596545455, d: 2.035419947271, nd: 1.6375, elemId: 2, sd: 9.3 },
    { label: "4", R: 42.613792065601, d: 2.442503936726, nd: 1, elemId: 0, sd: 9.3 },
    { label: "5", R: -36.197468251475, d: 0.82366993935, nd: 1.6045, elemId: 3, sd: 8.2 },
    // R6-to-STO split inferred from Fig. 1; 0.715 x scaled Delta3.
    { label: "6", R: 16.468397755196, d: 2.92423832803, nd: 1, elemId: 0, sd: 8.2 },
    // Physical stop SD calibrated to modeled f/2.9; unpublished by the patent.
    { label: "STO", R: 1e15, d: 1.165605487397, nd: 1, elemId: 0, sd: 6.837945853623 },
    { label: "7", R: -101.976039667841, d: 1.42479396309, nd: 1.5145, elemId: 4, sd: 8.2 },
    // Cemented L4 -> L5 interface: downstream L5 owns elemId 5 and nd 1.6025.
    { label: "8", R: 19.52902922382, d: 3.721767874102, nd: 1.6025, elemId: 5, sd: 8.25 },
    // Published p'o scaled directly; it is not replaced by the slightly different computed BFD.
    { label: "9", R: -19.679060178165, d: 40.938446408756, nd: 1, elemId: 0, sd: 8.25 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "4" },
    { text: "III", fromSurface: "5", toSurface: "6" },
    { text: "IV", fromSurface: "7", toSurface: "9" },
  ],
  doublets: [{ text: "IV", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.75,
  focusDescription:
    "Only the fixed patent prescription is modeled; the closest-focus distance is secondary Exakta-variant metadata and is not used to infer focus motion.",

  nominalFno: 2.9,
  fstopSeries: [2.9, 4, 5.6, 8, 11, 16],

  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
