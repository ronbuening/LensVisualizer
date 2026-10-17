import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  Stop: the patent labels d8 as diaphragm space but gives neither   ║
 * ║  the split nor aperture diameter. The stop position is a rounded   ║
 * ║  figure-derived estimate at 73% of d8 from r8; the two sub-gaps    ║
 * ║  sum exactly to scaled d8 = 4.4716 mm. The stop radius is derived  ║
 * ║  from the design f-number f/4 after fixing that position. It is    ║
 * ║  not an independently measured iris.                               ║
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
  schema: 2,
  key: "schneider-retina-curtagon-28f4",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH RETINA-CURTAGON 28mm f/4",
  subtitle: "US 2,824,495 — Example 1; scaled ×0.28; Retina/DKL production correlation (inferred)",

  catalog: {
    lensMounts: ["dkl"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 6 GROUPS", "28.001 mm DESIGN EFL", "F/4 CALIBRATED MODEL", "≈75° PATENT FIELD"],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: { marketing: 28, design: 28.00128991255591 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "US 2,824,495",
    patentYear: 1958,
    authors: ["Günter Klemt"],
    assignees: ["Jos. Schneider & Co., Optische Werke"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6228,
      vd: 56.9,
      indexReference: "d",
      focalLengthMm: -60.03010017486779,
      glass: "N-SK10 — 623569 coordinate; compatible spectral proxy (supplier unconfirmed)",
      role: "Front negative meniscus in patent macro-group I.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.623,
      vd: 58.1,
      indexReference: "d",
      focalLengthMm: -54.20649842470832,
      glass: "BACD15 — 623581 coordinate; compatible spectral proxy (supplier unconfirmed)",
      role: "Second negative meniscus in patent macro-group I.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.6261,
      vd: 39.1,
      indexReference: "d",
      focalLengthMm: 31.729433141304604,
      glass: "H-BaF8 — 626391 coordinate; compatible spectral proxy (supplier unconfirmed)",
      role: "Positive forward component of patent macro-group II.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.4707,
      vd: 67.2,
      indexReference: "d",
      focalLengthMm: 42.670478963287,
      glass: "H-QK1 — compatible spectral proxy (supplier unconfirmed)",
      role: "Low-index positive meniscus immediately before the diaphragm space.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.699,
      vd: 30.1,
      indexReference: "d",
      focalLengthMm: -14.513568977844097,
      glass: "SF15 — 699301 coordinate; compatible spectral proxy (supplier unconfirmed)",
      role: "Biconcave negative component immediately behind the diaphragm space.",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      focalLengthMm: -168.35445382879558,
      glass: "SF5 — 673322 coordinate; compatible spectral proxy (supplier unconfirmed)",
      role: "Front member of the cemented L6/L7 rear compound.",
      diagramLabel: "L6",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6779,
      vd: 55.3,
      indexReference: "d",
      focalLengthMm: 16.867607781896805,
      glass: "S-LAL12 — 678553 coordinate; compatible spectral proxy (supplier unconfirmed)",
      role: "Rear positive member of the cemented L6/L7 compound.",
      diagramLabel: "L7",
      cemented: "D1",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 28.3192, d: 1.3832, sd: 14.5, medium: 1 },
    { label: "2", R: 15.8116, d: 3.5812, sd: 11.3 },
    { label: "3", R: 40.9416, d: 1.344, sd: 11.4, medium: 2 },
    { label: "4", R: 18.2728, d: 12.614, sd: 10.7 },
    { label: "5", R: 30.8196, d: 4.6284, sd: 8.8, medium: 3 },
    { label: "6", R: -52.6624, d: 0.1484, sd: 8.2 },
    { label: "7", R: 14.378, d: 1.904, sd: 7.1, medium: 4 },
    // Figure-derived stop split: 73% of scaled d8 lies before the stop; 27% lies after it.
    { label: "8", R: 48.4568, d: 3.264268, sd: 6.8 },
    // radius derived from the design f-number after fixing the inferred axial position above.
    { label: "STO", R: "flat", d: 1.207332 },
    { label: "9", R: -29.4644, d: 1.078, sd: 5.1, medium: 5 },
    { label: "10", R: 15.7052, d: 1.2544, sd: 5.7 },
    { label: "11", R: 61.3452, d: 0.8932, sd: 5.3, medium: 6 },
    // Cemented L6→L7 interface: downstream element L7 owns the medium after this surface.
    { label: "12", R: 39.5584, d: 3.1388, sd: 5.3, medium: 7 },
    // Scaled published image distance 130.36 × 0.28 = 36.5008 mm.
    { label: "13", R: -15.568, d: 36.5008, sd: 5.3 },
  ],

  focus: {
    closeFocusM: 0.9144,
    /* ── Focus ── */
    description:
      "The Retina production lens focuses from infinity to 3 ft (0.9144 m). The patent supplies only one focus state, so focus travel is not modeled.",
  },

  /* ── Aperture ── */
  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  /* ── Diagram annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "4" },
    { text: "II", fromSurface: "5", toSurface: "13" },
  ],
  doublets: [{ text: "D1", fromSurface: "11", toSurface: "13" }],

  /* ── Layout ── */
  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
