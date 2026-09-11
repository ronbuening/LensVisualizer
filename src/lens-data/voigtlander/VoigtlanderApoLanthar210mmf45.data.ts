import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER APO-LANTHAR 210mm f/4.5                         ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,645,154, Example 1 (Albrecht Wilhelm Tronnier).         ║
 * ║  Five-lens Heliar-type objective: cemented front doublet, isolated         ║
 * ║  biconcave negative, cemented rear doublet.                                ║
 * ║  5 elements / 3 groups, all spherical.                                     ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION.                                 ║
 * ║  The patent publishes only the infinity prescription; no internal focus    ║
 * ║  motion is invented. View-camera bellows/standard motion is external.      ║
 * ║                                                                              ║
 * ║  SCALING: the normalized Example 1 prescription has F = 1.0000. Source    ║
 * ║  radii, lens thicknesses, air gaps, and the diaphragm-space split are      ║
 * ║  scaled uniformly by s = 210 mm/F for the fixed 210mm correlation. The    ║
 * ║  patent also mentions an assumed 200mm drawing scale; it is not a second   ║
 * ║  prescription. Semi-diameters are inferred after scaling, and the final    ║
 * ║  image distance is recomputed paraxially. There are no aspheres.           ║
 * ║                                                                              ║
 * ║  IMAGE PLANE: R8 d is the independently recomputed paraxial infinity BFD   ║
 * ║  (181.934781629840 mm). The scaled patent p'∞ value is 181.923 mm; the     ║
 * ║  +0.011781629840 mm difference is retained as prescription-rounding        ║
 * ║  residual rather than forcing the image plane to the rounded source value. ║
 * ║                                                                              ║
 * ║  STOP: the patent publishes the R5→stop / stop→R6 split but not the stop   ║
 * ║  diameter. STO sd = 19.507679083388 mm is inferred from the actual         ║
 * ║  scaled prescription so the modeled entrance pupil gives exactly f/4.5.    ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETERS: the patent publishes no clear apertures. Non-stop SDs     ║
 * ║  are model-derived from exact spherical ray envelopes at ±18° object       ║
 * ║  half-field, i.e. a conservative 0.6 × 30° check against the patent's      ║
 * ║  rounded “almost 60°” full field, using the full f/4.5 pupil. Values were  ║
 * ║  rounded upward, then checked for edge thickness, actual rim slope,        ║
 * ║  shared-gap intrusion, and off-axis containment. They are not measured     ║
 * ║  production clear apertures.                                                ║
 * ║                                                                              ║
 * ║  GLASS: the patent publishes d-line nd/νd coordinates but no vendor names, ║
 * ║  line indices, or partial-dispersion values. Neutral six-digit/class       ║
 * ║  labels are retained; nC/nF/ng/dPgF are intentionally not invented.        ║
 * ║                                                                              ║
 * ║  MOUNT/FORMAT: large-format-lens-board is a LensVisualizer taxonomy        ║
 * ║  mapping for the documented shutter-mounted view-camera form, not a        ║
 * ║  manufacturer mount name. imageFormat is intentionally unset.              ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "voigtlander-apo-lanthar-210mm-f45",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER APO-LANTHAR 210mm f/4.5",
  subtitle: "US 2,645,154 Example 1 — production-correlated 210mm f/4.5 scale",
  specs: [
    "5 ELEMENTS / 3 GROUPS",
    "210mm f/4.5 (PRODUCTION)",
    "f = 210.004 mm (MODELED)",
    "FIELD: ALMOST 60° (PATENT)",
  ],

  focalLengthMarketing: 210,
  focalLengthDesign: 210.004074571199,
  apertureMarketing: 4.5,
  apertureDesign: 4.5,
  lensMounts: ["large-format-lens-board"],
  patentNumber: "US 2,645,154",
  patentAuthors: ["Albrecht Wilhelm Tronnier"],
  patentAssignees: ["Voigtländer & Sohn AG"],
  patentYear: 1953,
  elementCount: 5,
  groupCount: 3,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.65953,
      vd: 57.0,
      indexReference: "d",
      fl: 70.480418181577,
      glass: "660570 — patent barium crown class; K-LaK11 coordinate-compatible spectral proxy, not a composition or supplier identification",
      apd: false,
      role: "Front positive component of the cemented front member.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Concave Negative",
      nd: 1.60266,
      vd: 38.4,
      indexReference: "d",
      fl: -295.138054624498,
      glass: "603384 — F5 compatible spectral proxy; patent vendor unspecified",
      apd: false,
      role: "Negative cemented partner completing the front member.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.64282,
      vd: 47.9,
      indexReference: "d",
      fl: -61.814711022918,
      glass: "643479 — BAF9 compatible barium-flint spectral proxy; patent vendor unspecified",
      apd: false,
      role: "Isolated unequal-curvature negative element between the two cemented members.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.60266,
      vd: 38.4,
      indexReference: "d",
      fl: -74.534367586247,
      glass: "603384 — F5 compatible spectral proxy; patent vendor unspecified",
      apd: false,
      role: "Negative component at the front of the cemented rear member.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.66867,
      vd: 47.5,
      indexReference: "d",
      fl: 48.558050554347,
      glass: "669475 — S-BAH10 compatible spectral proxy; patent barium crown class, supplier unspecified",
      apd: false,
      role: "Strong positive rear component completing the cemented rear member.",
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 61.3347, d: 11.3463, nd: 1.65953, elemId: 1, sd: 31.0 },
    { label: "2", R: -177.8679, d: 2.9442, nd: 1.60266, elemId: 2, sd: 30.5 },
    { label: "3", R: 1e15, d: 6.8082, nd: 1.0, elemId: 0, sd: 29.0 },
    { label: "4", R: -133.6251, d: 2.9442, nd: 1.64282, elemId: 3, sd: 24.8 },
    { label: "5", R: 57.0402, d: 8.1585, nd: 1.0, elemId: 0, sd: 22.0 },
    { label: "STO", R: 1e15, d: 4.2924, nd: 1.0, elemId: 0, sd: 19.507679083388 },
    { label: "6", R: -509.0715, d: 2.9442, nd: 1.60266, elemId: 4, sd: 22.5 },
    { label: "7", R: 49.3731, d: 12.4509, nd: 1.66867, elemId: 5, sd: 25.5 },
    { label: "8", R: -85.2537, d: 181.93478162984, nd: 1.0, elemId: 0, sd: 26.0 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (-)", fromSurface: "4", toSurface: "5" },
    { text: "G3 (+)", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 1.0,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: US 2,645,154 Example 1 publishes only the infinity prescription and no internal " +
    "focus movement. closeFocusM = 1.0 m is the schema-required finite UI placeholder, not a modeled minimum focus " +
    "distance; external view-camera bellows/standard translation is outside the optical model.",

  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16],

  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
