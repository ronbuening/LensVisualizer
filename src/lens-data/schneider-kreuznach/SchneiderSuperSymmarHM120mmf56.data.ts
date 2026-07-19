import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SCHNEIDER-KREUZNACH SUPER-SYMMAR HM 120mm f/5.6             ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source prescription: US 4,773,745, Example 1 (Hiltrud Schitthof).        ║
 * ║ Production reference: Schneider-Kreuznach Super-Symmar HM data sheet.    ║
 * ║ 8 elements / 6 groups; all spherical; unit focus by camera bellows.       ║
 * ║                                                                            ║
 * ║ SCALING:                                                                   ║
 * ║   The patent states f = 100 units. Independent paraxial tracing gives     ║
 * ║   EFL = 100.02655975 units. All radii and axial distances are scaled      ║
 * ║   ×1.21567711919 so the model EFL equals Schneider's published effective  ║
 * ║   focal length of 121.6 mm. This is a design-family model, not an exact   ║
 * ║   factory prescription: its computed BFD is 99.619 mm versus Schneider's  ║
 * ║   published 102.3 mm.                                                      ║
 * ║                                                                            ║
 * ║ STOP AND SEMI-DIAMETERS:                                                   ║
 * ║   The patent gives no stop coordinate. It establishes only that the       ║
 * ║   diaphragm region lies in d7, between L3 and L4. The STO surface splits  ║
 * ║   d7 equally as a neutral reconstruction; this midpoint is not a patent   ║
 * ║   dimension. Semi-diameters are a normalized reconstruction of the rim    ║
 * ║   progression in Fig. 1, anchored at surface 1 and constrained by          ║
 * ║   spherical-rim, edge-thickness, and signed cross-gap-sag checks. They     ║
 * ║   are representative drawing apertures, not published mechanical sizes.   ║
 * ║                                                                            ║
 * ║ GLASS LABELS:                                                              ║
 * ║   The patent publishes nd and νd only. Catalog names below are optical-    ║
 * ║   position matches or nearest public equivalents, not proof of the actual ║
 * ║   production melt. Stored nd and νd always remain the patent values.      ║
 * ║                                                                            ║
 * ║ FOCUS MODEL:                                                               ║
 * ║   The lens has no internal focusing motion. The BF variable models unit   ║
 * ║   focus by bellows extension from infinity to a 1.0 m paraxial object     ║
 * ║   distance measured from the first optical vertex.                        ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "schneider-super-symmar-hm-120f56",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH SUPER-SYMMAR HM 120mm f/5.6",
  subtitle: "US 4,773,745 EXAMPLE 1 — HILTRUD SCHITTHOF",
  specs: [
    "8 ELEMENTS / 6 GROUPS",
    "f = 121.6 mm (SCALED PATENT MODEL)",
    "f/5.6",
    "82° AT f/22 / 211 mm IMAGE CIRCLE",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 120,
  focalLengthDesign: 121.6,
  apertureMarketing: 5.6,
  apertureDesign: 5.6,
  imageFormat: "4x5",
  patentNumber: "US 4,773,745",
  patentAuthors: ["Hiltrud Schitthof"],
  patentAssignees: ["Jos Schneider Optische Werke GmbH"],
  patentYear: 1988,
  elementCount: 8,
  groupCount: 6,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 82,
    maxTraceFieldDeg: 41,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus, convex to object",
      nd: 1.4645,
      vd: 65.77,
      fl: -114.269,
      glass: "FK3 class (SCHOTT inquiry; exact nd/νd optical-position match)",
      apd: "inferred",
      apdNote: "FK3-equivalent catalog data; the patent publishes nd and νd only.",
      nC: 1.46232,
      nF: 1.46939,
      ng: 1.47315,
      dPgF: -0.0003,
      role: "Low-index front negative meniscus for field, coma, distortion, and transverse-color control.",
    },
    {
      id: 2,
      name: "L2a",
      label: "Element 2",
      type: "Positive Meniscus, convex to object",
      nd: 1.755,
      vd: 52.3,
      fl: 68.774,
      glass: "N-LAK33B class (SCHOTT; exact nd/νd optical-position match)",
      cemented: "L2",
      role: "Positive crown member of the front cemented doublet.",
    },
    {
      id: 3,
      name: "L2b",
      label: "Element 3",
      type: "Negative Meniscus, convex to object",
      nd: 1.6254,
      vd: 35.56,
      fl: -91.904,
      glass: "625/356 flint (CDGM H-F6 optical equivalent; historical supplier unverified)",
      cemented: "L2",
      role: "Dispersive negative member of the front positive cemented doublet.",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 4",
      type: "Positive Meniscus, convex to object",
      nd: 1.7725,
      vd: 49.6,
      fl: 495.615,
      glass: "N-LAF34 class (SCHOTT; rounded optical-position match)",
      role: "Weak positive pre-stop meniscus that conditions oblique bundles entering the central group.",
    },
    {
      id: 5,
      name: "L4a",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6204,
      vd: 60.33,
      fl: 35.949,
      glass: "N-SK16 class (SCHOTT; rounded optical-position match)",
      cemented: "L4",
      role: "Strong positive crown member of the thick central cemented doublet.",
    },
    {
      id: 6,
      name: "L4b",
      label: "Element 6",
      type: "Negative Meniscus, concave to object",
      nd: 1.6668,
      vd: 33.01,
      fl: -118.589,
      glass: "667/331 dense flint (CDGM H-ZF39 closest public match; vendor unspecified)",
      cemented: "L4",
      role: "Dense-flint negative member that achromatizes the dominant positive central doublet.",
    },
    {
      id: 7,
      name: "L5",
      label: "Element 7",
      type: "Positive Meniscus, concave to object",
      nd: 1.6204,
      vd: 60.33,
      fl: 137.927,
      glass: "N-SK16 class (SCHOTT; rounded optical-position match)",
      role: "Rear positive meniscus that redistributes convergence before the final negative element.",
    },
    {
      id: 8,
      name: "L6",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.4787,
      vd: 58.7,
      fl: -59.138,
      glass: "Unmatched (479/587 low-index crown; vendor unspecified)",
      role: "Low-index rear negative element used for coma, color-coma, and Petzval balancing.",
    },
  ],

  /* ── Surfaces, object to image ── */
  surfaces: [
    { label: "1", R: 47.596191, d: 3.059859, nd: 1.4645, elemId: 1, sd: 21.5 },
    { label: "2", R: 24.582207, d: 4.267027, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "3", R: 36.003494, d: 8.05143, nd: 1.755, elemId: 2, sd: 17.0 },
    { label: "4", R: 106.126181, d: 6.038268, nd: 1.6254, elemId: 3, sd: 16.5 },
    { label: "5", R: 36.467882, d: 8.50974, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "6", R: 58.616304, d: 2.41555, nd: 1.7725, elemId: 4, sd: 9.8 },
    { label: "7", R: 67.969723, d: 2.013161, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "STO", R: 1e15, d: 2.013161, nd: 1.0, elemId: 0, sd: 10.29 },
    { label: "8", R: 390.835331, d: 23.477157, nd: 1.6204, elemId: 5, sd: 13.5 },
    { label: "9", R: -23.108806, d: 2.41555, nd: 1.6668, elemId: 6, sd: 13.5 },
    { label: "10", R: -34.015861, d: 0.410899, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "11", R: -142.764258, d: 7.10077, nd: 1.6204, elemId: 7, sd: 16.5 },
    { label: "12", R: -54.520687, d: 3.140094, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "13", R: -34.616406, d: 3.059859, nd: 1.4787, elemId: 8, sd: 20.5 },
    { label: "14", R: 159.818992, d: 99.61912, nd: 1.0, elemId: 0, sd: 20.5 },
  ],

  asph: {},

  /* ── Unit-focus bellows extension ── */
  var: {
    "14": [99.61912, 115.824217],
  },
  varLabels: [["14", "BF"]],
  focusDescription:
    "Unit focus by moving the complete shutter-mounted lens with the view-camera bellows; 1.0 m is a modeled UI endpoint, not a fixed manufacturer MFD.",

  groups: [
    { text: "FRONT (L1–L3)", fromSurface: "1", toSurface: "7" },
    { text: "REAR (L4–L6)", fromSurface: "8", toSurface: "14" },
  ],
  doublets: [
    { text: "L2", fromSurface: "3", toSurface: "5" },
    { text: "L4", fromSurface: "8", toSurface: "10" },
  ],

  closeFocusM: 1.0,
  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22, 32, 45, 64],
  maxFstop: 64,

  /* The declared 82° coverage is a stopped-down, nonparaxial image-circle specification.
   * Visible first-order bundles are limited to 47% of that half-field so the diagram
   * remains inside the inferred clear apertures and spherical-rim constraints. */
  offAxisFieldFrac: 0.47,
  scFill: 0.52,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
