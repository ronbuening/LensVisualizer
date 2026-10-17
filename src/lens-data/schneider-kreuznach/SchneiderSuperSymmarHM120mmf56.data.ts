import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SCHNEIDER-KREUZNACH SUPER-SYMMAR HM 120mm f/5.6             ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source prescription: US 4,773,745, Example 1.                            ║
 * ║ Inventor: Hiltrud Ebbesmeier née Schitthof.                                ║
 * ║ Patent rendering: Hiltrud Schitthof.                                       ║
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
  schema: 2,
  key: "schneider-super-symmar-hm-120f56",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH SUPER-SYMMAR HM 120mm f/5.6",
  subtitle: "US 4,773,745 EXAMPLE 1 — HILTRUD EBBESMEIER NÉE SCHITTHOF",

  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "4x5",
    imageCircleMm: 211, // Schneider Super-Symmar HM data sheet: 211 mm at f/22 (82°), 180 mm at f/5.6
    specs: [
      "8 ELEMENTS / 6 GROUPS",
      "f = 121.6 mm (SCALED PATENT MODEL)",
      "f/5.6",
      "82° AT f/22 / 211 mm IMAGE CIRCLE",
      "ALL-SPHERICAL",
    ],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: 120, design: 121.6 },
    fNumber: { marketing: 5.6, design: 5.6 },
  },

  source: {
    patentNumber: "US 4,773,745",
    patentYear: 1988,
    authors: ["Hiltrud Ebbesmeier née Schitthof"],
    assignees: ["Jos. Schneider Optische Werke Kreuznach GmbH & Co. KG"],
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
      focalLengthMm: -114.269,
      glass: "FK3 class (SCHOTT inquiry; exact nd/νd optical-position match)",
      apd: "inferred",
      apdNote: "FK3-equivalent catalog data; the patent publishes nd and νd only.",
      role: "Low-index front negative meniscus for field, coma, distortion, and transverse-color control.",
      dPgF: -0.0003,
      nC: 1.46232,
      nF: 1.46939,
      ng: 1.47315,
    },
    {
      id: 2,
      name: "L2a",
      label: "Element 2",
      type: "Positive Meniscus, convex to object",
      nd: 1.755,
      vd: 52.3,
      focalLengthMm: 68.774,
      glass: "N-LAK33B class (SCHOTT; exact nd/νd optical-position match)",
      role: "Positive crown member of the front cemented doublet.",
      cemented: "L2",
    },
    {
      id: 3,
      name: "L2b",
      label: "Element 3",
      type: "Negative Meniscus, convex to object",
      nd: 1.6254,
      vd: 35.56,
      focalLengthMm: -91.904,
      glass: "625/356 flint (CDGM H-F6 optical equivalent; historical supplier unverified)",
      role: "Dispersive negative member of the front positive cemented doublet.",
      cemented: "L2",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 4",
      type: "Positive Meniscus, convex to object",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 495.615,
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
      focalLengthMm: 35.949,
      glass: "N-SK16 class (SCHOTT; rounded optical-position match)",
      role: "Strong positive crown member of the thick central cemented doublet.",
      cemented: "L4",
    },
    {
      id: 6,
      name: "L4b",
      label: "Element 6",
      type: "Negative Meniscus, concave to object",
      nd: 1.6668,
      vd: 33.01,
      focalLengthMm: -118.589,
      glass: "667/331 dense flint (CDGM H-ZF39 closest public match; vendor unspecified)",
      role: "Dense-flint negative member that achromatizes the dominant positive central doublet.",
      cemented: "L4",
    },
    {
      id: 7,
      name: "L5",
      label: "Element 7",
      type: "Positive Meniscus, concave to object",
      nd: 1.6204,
      vd: 60.33,
      focalLengthMm: 137.927,
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
      focalLengthMm: -59.138,
      glass: "Unmatched (479/587 low-index crown; vendor unspecified)",
      role: "Low-index rear negative element used for coma, color-coma, and Petzval balancing.",
    },
  ],

  /* ── Surfaces, object to image ── */
  surfaces: [
    { label: "1", R: 47.596191, d: 3.059859, sd: 21.5, medium: 1 },
    { label: "2", R: 24.582207, d: 4.267027, sd: 17.0 },
    { label: "3", R: 36.003494, d: 8.05143, sd: 17.0, medium: 2 },
    { label: "4", R: 106.126181, d: 6.038268, sd: 16.5, medium: 3 },
    { label: "5", R: 36.467882, d: 8.50974, sd: 13.5 },
    { label: "6", R: 58.616304, d: 2.41555, sd: 9.8, medium: 4 },
    { label: "7", R: 67.969723, d: 2.013161, sd: 9.5 },
    { label: "STO", R: "flat", d: 2.013161 },
    { label: "8", R: 390.835331, d: 23.477157, sd: 13.5, medium: 5 },
    { label: "9", R: -23.108806, d: 2.41555, sd: 13.5, medium: 6 },
    { label: "10", R: -34.015861, d: 0.410899, sd: 13.5 },
    { label: "11", R: -142.764258, d: 7.10077, sd: 16.5, medium: 7 },
    { label: "12", R: -54.520687, d: 3.140094, sd: 16.5 },
    { label: "13", R: -34.616406, d: 3.059859, sd: 20.5, medium: 8 },
    { label: "14", R: 159.818992, sd: 20.5 },
  ],

  focus: {
    closeFocusM: 1.0,
    description:
      "Unit focus by moving the complete shutter-mounted lens with the view-camera bellows; 1.0 m is a modeled UI endpoint, not a fixed manufacturer MFD.",
  },

  /* (moved from var) ── Unit-focus bellows extension ── */
  gaps: { "14": { label: "BF", values: [[99.61912, 115.824217]] } },

  aperture: { nominalFNumber: 5.6, fStops: [5.6, 8, 11, 16, 22, 32, 45, 64], maxFNumber: 64 },

  projection: { kind: "rectilinear", fullFieldDeg: 82, maxTraceFieldDeg: 41 },

  groups: [
    { text: "FRONT (L1–L3)", fromSurface: "1", toSurface: "7" },
    { text: "REAR (L4–L6)", fromSurface: "8", toSurface: "14" },
  ],
  doublets: [
    { text: "L2", fromSurface: "3", toSurface: "5" },
    { text: "L4", fromSurface: "8", toSurface: "10" },
  ],

  layout: { scFill: 0.52, yScFill: 0.44 },

  /* The declared 82° coverage is a stopped-down, nonparaxial image-circle specification.
   * Visible first-order bundles are limited to 47% of that half-field so the diagram
   * remains inside the inferred clear apertures and spherical-rim constraints. */
  rays: { offAxisFieldFrac: 0.47 },
} satisfies LensDataV2Input;

export default LENS_DATA;
