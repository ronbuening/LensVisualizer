import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║            LENS DATA — CANON EF 400mm f/2.8 L IS II USM                                           ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2011/0090576 A1, Second Numerical Embodiment / Example 2 / Fig. 3.                ║
 * ║ Production correlation: Canon EF 400mm f/2.8L IS II USM; correlation is inferred, not patent-named.║
 * ║ Active model: 15 refractive elements / 11 air-separated groups, all spherical, plus rear plate G.  ║
 * ║ REAR FILTER PLATE: patent rows 28-29 are the separate rear glass block G (filter/faceplate): 2.2   ║
 * ║ mm, nd 1.51633, vd 64.14, 15.00 mm behind surface 27. It is drawn as a plane-parallel plate        ║
 * ║ element, not counted in elementCount. The patent's 36.00 mm effective diameter for G is a ray-     ║
 * ║ envelope value, so the plate's semi-diameter is a ray-trace estimate that does not limit the       ║
 * ║ bundles the rest of the model passes. The patent defines back focus with G absent (Re to IP =      ║
 * ║ 70.72 mm), so the air behind the plate is 70.72 - 15.00 - 2.2/1.51633 = 54.269129 mm. The authored ║
 * ║ first-surface to IP track is then 372.00 mm, the patent's Lt.                                      ║
 * ║                                                                                                    ║
 * ║ SCALE: none (s = 1.0). Patent f = 392.15 mm; the active authored arrays compute EFL ≈ 392.260742 mm.║
 * ║ Marketing 400 mm f/2.8 is kept separate from the patent/model design values.                      ║
 * ║                                                                                                    ║
 * ║ STOP: patent row 14 is STO. Its published 48.31 mm "effective diameter" is a ray-envelope value,   ║
 * ║ not the physical iris diameter. The stop radius is derived from the patent design f-number         ║
 * ║ (f/2.90). The 48.31 mm value is from the Second Numerical Embodiment patent surface table.         ║
 * ║                                                                                                    ║
 * ║ FOCUS — CONSTRAINED_RECONSTRUCTION: patent states cemented L16 moves imageward but gives no      ║
 * ║ finite-focus spacing table. Canon's 2.7 m MFD is referenced to the physical image plane: with Lt = ║
 * ║ 372.00 mm the object sits 2328.00 mm ahead of surface 1. Holding D10 + D13 = 59.95 mm gives close  ║
 * ║ D10 = 45.149493819 mm and                                                                          ║
 * ║ D13 = 14.800506181 mm. This close state is reconstructed, not patent-published.                 ║
 * ║                                                                                                    ║
 * ║ IS: cemented L22 plus negative L23 form the patent's transverse stabilization unit. No axial IS   ║
 * ║ motion is authored because the patent describes lateral motion, not an axial variable spacing.    ║
 * ║                                                                                                    ║
 * ║ SEMI-DIAMETERS: inferred construction clear apertures, not half of the patent effective-diameter  ║
 * ║ column. They are constrained by patent apertures/section, modeled marginal/chief-ray envelopes,   ║
 * ║ edge thickness, rim slope, shared-band cross-gap intrusion, and configured render-ray containment.║
 * ║ Current gapSagFrac = 0.90; the binding row-20/21 shared radius is 15.75 mm.                        ║
 * ║                                                                                                    ║
 * ║ SPECTRAL DATA: the patent directly publishes nd, νd, θgF and X (= dPgF), but not absolute nC/nF/ng.║
 * ║ dPgF is therefore stored directly on every glass element. Absolute line indices are intentionally ║
 * ║ omitted rather than fabricated from an unproven vendor glass. Ordinary glass labels use neutral   ║
 * ║ six-digit coordinate classes; CaF2 is separately disclosed as a production-correlation inference. ║
 * ║                                                                                                    ║
 * ║ SOURCE CONTRADICTION: patent Table 1 swaps the Gp2/Gn1 position labels for Example 2. Prescription ║
 * ║ geometry is retained: surface 25 is Gp2 front (~0.813L), surface 26 is Gn1 front (~0.973L).        ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 *
 * Product sources used for identity/marketing correlation:
 * https://global.canon/en/c-museum/product/ef416.html
 * https://global.canon/en/news/2019/20191107.html
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-400mm-f28-l-is-ii-usm",
  maker: "Canon",
  name: "CANON EF 400mm f/2.8 L IS II USM",
  subtitle: "US 2011/0090576 A1 Example 2 — production correlation; constrained L16 focus reconstruction",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ACTIVE ELEMENTS / 11 GROUPS (PLUS REAR FILTER PLATE G)",
      "PATENT f = 392.15 mm; COMPUTED EFL 392.2607 mm",
      "PATENT F/2.90 / MARKETED 400mm f/2.8",
      "ALL-SPHERICAL",
      "L16 IMAGEWARD INNER FOCUS; RECONSTRUCTED 2.7 m CLOSE STATE",
      "L22 + L23 TRANSVERSE IS UNIT",
    ],
    elementCount: 15,
    groupCount: 11,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x / EF2x compatibility
    focalLengthMm: { marketing: 400, design: 392.2607419367617 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "US 2011/0090576 A1",
    patentYear: 2011,
    authors: ["Shigenobu Sugita"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 336.8652924828807,
      glass: "487702 class (vendor unresolved; multiple catalog equivalents)",
      role: "Front protective/collector positive element ahead of the two Gp1 low-dispersion positives.",
      dPgF: 0.0043,
    },
    {
      id: 2,
      name: "L12",
      label: "L12 / Gp1",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 191.6477734862689,
      glass: "CaF2 fluorite (Canon production-correlation inference; patent Gp1 coordinates)",
      apd: "patent",
      apdNote: "Patent Gp1 anomalous-partial-dispersion material; X = dPgF = +0.0534.",
      role: "First patent Gp1 positive; high ray height makes it a primary longitudinal-chromatic corrector.",
      dPgF: 0.0534,
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -136.8606226959859,
      glass: "835427 class (vendor unresolved; multiple catalog equivalents)",
      role: "Front-unit negative element balancing the strong positive Gp1 collectors.",
      dPgF: -0.0083,
    },
    {
      id: 4,
      name: "L14",
      label: "L14 / Gp1",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 194.34963604469866,
      glass: "CaF2 fluorite (Canon production-correlation inference; patent Gp1 coordinates)",
      apd: "patent",
      apdNote: "Patent Gp1 anomalous-partial-dispersion material; X = dPgF = +0.0534.",
      role: "Second patent Gp1 positive; works with L12 to control longitudinal chromatic aberration.",
      dPgF: 0.0534,
    },
    {
      id: 5,
      name: "L15",
      label: "L15",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -838.1950441755673,
      glass: "487702 class (vendor unresolved; multiple catalog equivalents)",
      role: "Weak negative meniscus preceding the inner-focus cemented group.",
      dPgF: 0.0043,
    },
    {
      id: 6,
      name: "L16a",
      label: "L16 positive",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 235.80586262670528,
      glass: "805254 class (vendor unresolved; multiple catalog equivalents)",
      role: "Positive member of the translating L16 inner-focus cemented group.",
      cemented: "L16",
      dPgF: 0.015,
    },
    {
      id: 7,
      name: "L16b",
      label: "L16 negative",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -104.4059199159073,
      glass: "804466 class (vendor unresolved; multiple catalog equivalents)",
      role: "Negative member of the L16 focus doublet; the cemented pair is weakly negative in isolation.",
      cemented: "L16",
      dPgF: -0.0083,
    },
    {
      id: 8,
      name: "L21a",
      label: "L21 negative",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.5,
      focalLengthMm: -64.69897225645975,
      glass: "728285 class (vendor unresolved; multiple catalog equivalents)",
      role: "Negative front member of the first rear-unit cemented group.",
      cemented: "L21",
      dPgF: 0.0117,
    },
    {
      id: 9,
      name: "L21b",
      label: "L21 positive",
      type: "Biconvex Positive",
      nd: 1.70154,
      vd: 41.2,
      focalLengthMm: 44.723174784377214,
      glass: "702412 class (vendor unresolved; multiple catalog equivalents)",
      role: "Positive partner of L21; the cemented pair is net positive in isolation.",
      cemented: "L21",
      dPgF: 0.0021,
    },
    {
      id: 10,
      name: "L22a",
      label: "L22 positive",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 39.79585576614245,
      glass: "847238 class (vendor unresolved; multiple catalog equivalents)",
      role: "Positive member of the L22 cemented stabilization subgroup.",
      cemented: "L22",
      dPgF: 0.0167,
    },
    {
      id: 11,
      name: "L22b",
      label: "L22 negative",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 40.9,
      focalLengthMm: -29.264200800189005,
      glass: "806409 class (vendor unresolved; multiple catalog equivalents)",
      role: "Negative member of L22; L22 moves transversely together with L23 for image stabilization.",
      cemented: "L22",
      dPgF: -0.0048,
    },
    {
      id: 12,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -50.66047357011775,
      glass: "835427 class (vendor unresolved; multiple catalog equivalents)",
      role: "Negative stabilization element moving laterally with cemented L22.",
      dPgF: -0.0083,
    },
    {
      id: 13,
      name: "L24",
      label: "L24",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.8,
      focalLengthMm: 71.98879921263543,
      glass: "648338 class (vendor unresolved; multiple catalog equivalents)",
      role: "Rear positive relay element ahead of the terminal chromatic-correction cemented pair.",
      dPgF: 0.0069,
    },
    {
      id: 14,
      name: "L25a",
      label: "L25 positive / Gp2",
      type: "Biconvex Positive",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: 46.72992076667075,
      glass: "654397 anomalous-dispersion class (vendor unresolved; multiple catalog equivalents)",
      apd: "patent",
      apdNote: "Patent Gp2 partial-dispersion material; condition (6), X = dPgF = -0.0033.",
      role: "Gp2 positive of the terminal cemented pair; patent condition (5)/(6) material.",
      cemented: "L25",
      dPgF: -0.0033,
    },
    {
      id: 15,
      name: "L25b",
      label: "L25 negative / Gn1",
      type: "Biconcave Negative",
      nd: 1.8081,
      vd: 22.8,
      focalLengthMm: -46.18705402677947,
      glass: "808228 anomalous high-dispersion class (vendor unresolved; multiple catalog equivalents)",
      apd: "patent",
      apdNote: "Patent Gn1 high-index/high-dispersion anomalous material; X = dPgF = +0.0251.",
      role: "Gn1 negative nearest the image; patent uses it for lateral color, field-curvature, and astigmatism control.",
      cemented: "L25",
      dPgF: 0.0251,
    },
    {
      id: 16,
      name: "G",
      label: "Drop-in filter G",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.14,
      glass: "516641 class (vendor unresolved; multiple catalog equivalents)",
      role: "Plane-parallel glass block G of the patent prescription (rows 28-29; X = dPgF = -0.0007), in the rear drop-in filter holder. The patent defines back focus with it absent; Canon counts the drop-in filter in the production lens.",
      dPgF: -0.0007,
    },
  ],

  /* ── Optical prescription ── */
  surfaces: [
    { label: "1", R: 265.748, d: 17.78, sd: 72.0, medium: 1 },
    { label: "2", R: -420.408, d: 48.08, sd: 69.5 },
    { label: "3", R: 143.732, d: 21.9, sd: 58.0, medium: 2 },
    { label: "4", R: -188.181, d: 0.28, sd: 52.62 },
    { label: "5", R: -185.302, d: 6.25, sd: 52.5, medium: 3 },
    { label: "6", R: 302.552, d: 49.95, sd: 50.11 },
    { label: "7", R: 108.673, d: 15.8, sd: 44.48, medium: 4 },
    { label: "8", R: -359.764, d: 0.15, sd: 43.75 },
    { label: "9", R: 54.299, d: 7.3, sd: 40.5, medium: 5 },
    { label: "10", R: 45.818, sd: 37.0 },
    { label: "11", R: 420.291, d: 4.26, sd: 32.45, medium: 6 },
    { label: "12", R: -344.747, d: 3.2, sd: 32.135, medium: 7 },
    { label: "13", R: 111.419, sd: 30.26 },
    // US 2011/0090576 A1, Second Numerical Embodiment surface table, row 14 prints a 48.31 mm effective diameter
    // at the stop.
    { label: "STO", R: "flat", d: 6.55 },
    { label: "15", R: 185.602, d: 1.8, sd: 24.015, medium: 8 },
    { label: "16", R: 37.424, d: 10.89, sd: 23.14, medium: 9 },
    { label: "17", R: -170.826, d: 5.53, sd: 23.015 },
    { label: "18", R: 53.602, d: 7.3, sd: 20.035, medium: 10 },
    { label: "19", R: -85.053, d: 1.7, sd: 19.67, medium: 11 },
    { label: "20", R: 32.935, d: 6.65, sd: 15.75 },
    { label: "21", R: -65.258, d: 1.8, sd: 15.75, medium: 12 },
    { label: "22", R: 121.68, d: 4.63, sd: 16.885 },
    { label: "23", R: 72.705, d: 6.32, sd: 18.295, medium: 13 },
    { label: "24", R: -125.549, d: 0.2, sd: 18.53 },
    { label: "25", R: 92.173, d: 10.46, sd: 18.715, medium: 14 },
    { label: "26", R: -43.681, d: 1.8, sd: 18.49, medium: 15 },
    { label: "27", R: 261.177, d: 15.0, sd: 18.455 },
    // Drop-in filter G (patent rows 28-29), drawn as a plane-parallel plate. Its sd is a ray-trace estimate; the
    // patent's 36.00 mm effective diameter is a ray envelope and would limit this model's corner bundle.
    { label: "28", R: "flat", d: 2.2, sd: 21.5, medium: 16 },
    { label: "29", R: "flat", d: 54.269129, sd: 21.5 }, // drop-in filter → image plane
  ],

  focus: {
    closeFocusM: 2.7,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent publishes L16 imageward inner focusing but no finite-focus spacing " +
      "table. Canon's 2.7 m MFD is treated as physical image-plane-referenced (patent Lt = 372.00 mm, the modeled " +
      "first-surface-to-IP track with filter plate G), giving an object-to-first-surface distance of 2328.00 mm. " +
      "The close endpoint moves L16 +28.929493819 mm while holding D10 + D13 = 59.95 mm; it is reconstructed, " +
      "not patent-published.",
  },

  /* (moved from var) ── Focus ── */
  gaps: {
    "10": { label: "D10", values: [[16.22, 45.149493818598835]] },
    "13": { label: "D13", values: [[43.73, 14.800506181401161]] },
  },

  /* ── Aperture ── */
  aperture: { nominalFNumber: 2.9, fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  /* ── Diagram annotations ── */
  groups: [
    { text: "LF", fromSurface: "1", toSurface: "13" },
    { text: "LR", fromSurface: "15", toSurface: "27" },
  ],
  doublets: [
    { text: "L16", fromSurface: "11", toSurface: "13" },
    { text: "L21", fromSurface: "15", toSurface: "17" },
    { text: "L22", fromSurface: "18", toSurface: "20" },
    { text: "L25", fromSurface: "25", toSurface: "27" },
  ],

  /* ── Required per-lens layout ── */
  layout: { yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
