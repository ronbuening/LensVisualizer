import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — SCHNEIDER-KREUZNACH RETINA-CURTAGON 28mm f/4    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,824,495, Example 1 (Günter Klemt / Schneider). ║
 * ║  Seven elements in six air-separated groups; all surfaces sphere. ║
 * ║  Patent f=100 prescription uniformly scaled ×0.28 to the 28 mm    ║
 * ║  production correlation. All R, d, sd, and image-plane distances  ║
 * ║  are therefore in millimeters after scaling.                       ║
 * ║                                                                    ║
 * ║  Stop: the patent labels d8 as diaphragm space but gives neither  ║
 * ║  the split nor aperture diameter. The stop position is a rounded   ║
 * ║  figure-derived estimate at 73% of d8 from r8; the two sub-gaps    ║
 * ║  sum exactly to scaled d8 = 4.4716 mm. The stop semi-diameter      ║
 * ║  4.4756500966 mm is calibrated to the patent's modeled f/4 after  ║
 * ║  fixing that position. It is not an independently measured iris.  ║
 * ║                                                                    ║
 * ║  Semi-diameters are modeled, not patent-published. They were       ║
 * ║  constrained by exact spherical ray tracing and current geometry   ║
 * ║  policy. The rear doublet uses 5.3 mm figure-derived optical rims. ║
 * ║  The axial f/4 bundle clears; off-axis bundles retain partial pupils ║
 * ║  with modeled vignetting at the front and rear groups.             ║
 * ║                                                                    ║
 * ║  Focus: NO_INTERNAL_RECONSTRUCTION. Patent internal spacings are   ║
 * ║  fixed. closeFocusM records the Retina/DKL production variant's    ║
 * ║  3 ft focusing limit only and does not author a focus-spacing law. ║
 * ║                                                                    ║
 * ║  Production scope: Retina quick-change bayonet, mapped to the      ║
 * ║  project's canonical dkl taxonomy id, on 135 24×36 mm format.     ║
 * ║  Other Curtagon 28/4 mounts are intentionally not mixed here.     ║
 * ║                                                                    ║
 * ║  Glass labels are coordinate/class annotations only; supplier and ║
 * ║  melt identity are unresolved. No catalog nC/nF/ng/dPgF values    ║
 * ║  are imported because the patent publishes only nd and νd.        ║
 * ║                                                                    ║
 * ║  The duplicated numerical table is preserved over three patent    ║
 * ║  prose/claim contradictions concerning L4/L5 and L6/L7 indices.  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "schneider-retina-curtagon-28f4",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH RETINA-CURTAGON 28mm f/4",
  subtitle: "US 2,824,495 — Example 1; scaled ×0.28; Retina/DKL production correlation (inferred)",
  specs: ["7 ELEMENTS / 6 GROUPS", "28.001 mm DESIGN EFL", "F/4 CALIBRATED MODEL", "≈75° PATENT FIELD"],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.00128991255591,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["dkl"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2,824,495",
  patentAuthors: ["Günter Klemt"],
  patentAssignees: ["Jos. Schneider & Co."],
  patentYear: 1958,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6228,
      vd: 56.9,
      indexReference: "d",
      fl: -60.03010017486779,
      glass: "623569 — SK10-class crown (supplier unresolved)",
      role: "Front negative meniscus in patent macro-group I.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.623,
      vd: 58.1,
      indexReference: "d",
      fl: -54.20649842470832,
      glass: "623581 — SK15-class crown (supplier unresolved)",
      role: "Second negative meniscus in patent macro-group I.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.6261,
      vd: 39.1,
      indexReference: "d",
      fl: 31.729433141304604,
      glass: "626391 — BaSF/BaF-class (supplier unresolved)",
      role: "Positive forward component of patent macro-group II.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.4707,
      vd: 67.2,
      indexReference: "d",
      fl: 42.670478963287,
      glass: "Unmatched (legacy low-index crown / FK-QK class; patent nd=1.4707, νd=67.2)",
      role: "Low-index positive meniscus immediately before the diaphragm space.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.699,
      vd: 30.1,
      indexReference: "d",
      fl: -14.513568977844097,
      glass: "699301 — SF15-class dense flint (supplier unresolved)",
      role: "Biconcave negative component immediately behind the diaphragm space.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      fl: -168.35445382879558,
      glass: "673322 — SF5-class flint (supplier unresolved)",
      role: "Front member of the cemented L6/L7 rear compound.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.3,
      indexReference: "d",
      fl: 16.867607781896805,
      glass: "678553 — LAK12/LAL12-class crown (supplier unresolved)",
      role: "Rear positive member of the cemented L6/L7 compound.",
      cemented: "D1",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 28.3192, d: 1.3832, nd: 1.6228, elemId: 1, sd: 14.5 },
    { label: "2", R: 15.8116, d: 3.5812, nd: 1, elemId: 0, sd: 11.3 },
    { label: "3", R: 40.9416, d: 1.344, nd: 1.623, elemId: 2, sd: 11.4 },
    { label: "4", R: 18.2728, d: 12.614, nd: 1, elemId: 0, sd: 10.7 },
    { label: "5", R: 30.8196, d: 4.6284, nd: 1.6261, elemId: 3, sd: 8.8 },
    { label: "6", R: -52.6624, d: 0.1484, nd: 1, elemId: 0, sd: 8.2 },
    { label: "7", R: 14.378, d: 1.904, nd: 1.4707, elemId: 4, sd: 7.1 },
    // Figure-derived stop split: 73% of scaled d8 lies before the stop; 27% lies after it.
    { label: "8", R: 48.4568, d: 3.264268, nd: 1, elemId: 0, sd: 6.8 },
    // Stop SD calibrated to modeled f/4 after fixing the inferred axial position above.
    { label: "STO", R: 1e15, d: 1.207332, nd: 1, elemId: 0, sd: 4.475650096594448 },
    { label: "9", R: -29.4644, d: 1.078, nd: 1.699, elemId: 5, sd: 5.1 },
    { label: "10", R: 15.7052, d: 1.2544, nd: 1, elemId: 0, sd: 5.7 },
    { label: "11", R: 61.3452, d: 0.8932, nd: 1.6727, elemId: 6, sd: 5.3 },
    // Cemented L6→L7 interface: downstream element L7 owns the medium after this surface.
    { label: "12", R: 39.5584, d: 3.1388, nd: 1.6779, elemId: 7, sd: 5.3 },
    // Scaled published image distance 130.36 × 0.28 = 36.5008 mm.
    { label: "13", R: -15.568, d: 36.5008, nd: 1, elemId: 0, sd: 5.3 },
  ],

  asph: {},

  /* ── Focus ── */
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: patent spacings remain fixed; closeFocusM is Retina/DKL metadata, not a focus law.",
  var: {},
  varLabels: [],
  closeFocusM: 0.9144,

  /* ── Aperture ── */
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Diagram annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "4" },
    { text: "II", fromSurface: "5", toSurface: "13" },
  ],
  doublets: [{ text: "D1", fromSurface: "11", toSurface: "13" }],

  /* ── Layout ── */
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
