import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 600mm f/4 L IS II USM                                                        ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2011/0090576 A1, Third Numerical Embodiment / Example 3 (Shigenobu Sugita, Canon).      ║
 * ║ Native patent scale: f = 584.89 mm; no uniform scaling is applied.                                 ║
 * ║ Active LensVisualizer model: 15 elements / 11 air-separated groups, all spherical, plus the rear     ║
 * ║ filter plate G.                                                                                      ║
 * ║                                                                                                      ║
 * ║ Product correlation: Canon EF 600mm f/4L IS II USM. Canon publishes 16 elements / 12 groups        ║
 * ║ including the rear 52 mm drop-in filter, two fluorite elements at G2/G4, 4.5 m MFD, and 0.15x      ║
 * ║ maximum magnification. The separate patent rear glass block G is drawn as a plate element.           ║
 * ║ Canon sources: https://global.canon/en/c-museum/product/ef413.html and                              ║
 * ║ https://www.cla.canon.com/en/p/ef-600mm-f-4l-is-ii-usm                                            ║
 * ║                                                                                                      ║
 * ║ REAR FILTER PLATE: rows 28-29 are glass block G (filter/faceplate): 2.00 mm, nd 1.51633, vd 64.1,    ║
 * ║ 12.00 mm behind surface 27. It is drawn as a plane-parallel plate element, not counted in            ║
 * ║ elementCount. The patent's 31.00 mm effective diameter for G is a ray-envelope value, so the plate's ║
 * ║ semi-diameter is a ray-trace estimate that does not limit the bundles the rest of the model passes.  ║
 * ║ Patent paragraph 0021 defines back focus with G absent (121.13 mm), so the air behind the plate is   ║
 * ║ 121.13 - 12.00 - 2.00/1.51633 = 107.811026 mm.                                                       ║
 * ║                                                                                                      ║
 * ║ FOCUS — CONSTRAINED_RECONSTRUCTION: the patent publishes only that cemented L16 moves image-side   ║
 * ║ for close focusing. A paraxial solve constrained to that sole axial focus group and Canon's 4.5 m   ║
 * ║ MFD gives +20.112105825 mm L16 travel: d10 31.84 -> 51.952105825 mm and d13 72.57 ->                ║
 * ║ 52.457894175 mm. Their sum remains 104.41 mm, preserving the fixed image plane.                     ║
 * ║                                                                                                      ║
 * ║ STOP / F-NUMBER: The stop radius is derived from the design f-number. The Third Numerical Embodiment ║
 * ║ patent surface table prints a 43.11 mm effective diameter (21.555 mm radius) at row 14. A paraxial   ║
 * ║ pupil projection alone gives f/4.036, but an exact spherical marginal-ray solve through surfaces     ║
 * ║ 1-13 gives an effective entrance beam of 141.972 mm and f/4.119, consistent with the published       ║
 * ║ FNO = 4.12.                                                                                          ║
 * ║                                                                                                      ║
 * ║ SEMI-DIAMETERS: patent effective diameters are halved. The US publication's Example 3 row 1 prints ║
 * ║ 45.69 mm, but the priority Japanese publication JP2011085788A prints 145.69 mm for the same row, ║
 * ║ resolving the missing leading digit; surface 1 therefore uses sd = 72.845 mm. Published diameters   ║
 * ║ otherwise remain unchanged. The published surfaces 20/21 leave positive 0.3167 mm rim clearance but ║
 * ║ use 94.04% of the 5.31 mm axial gap, so gapSagFrac is set to 0.95 to preserve source clear apertures.║
 * ║                                                                                                      ║
 * ║ DISPERSION: the patent publishes nd, vd, theta_gF, and X = theta_gF - (0.6438 - 0.001682*vd), but  ║
 * ║ not absolute nC/nF/ng. dPgF stores the published X directly. nC/nF/ng are intentionally omitted     ║
 * ║ rather than invented; named catalog glasses can resolve spectrally through validated Sellmeier data.║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-600f4l-is-ii-usm",
  maker: "Canon",
  name: "CANON EF 600mm f/4 L IS II USM",
  subtitle: "US 2011/0090576 A1 Example 3 — Shigenobu Sugita / Canon Inc.",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ACTIVE ELEMENTS / 11 GROUPS (PLUS REAR FILTER PLATE G)",
      "f = 584.82 mm (MODELED)",
      "F/4.12 DESIGN",
      "2ω = 4.24°",
      "2 FLUORITE ELEMENTS",
    ],
    elementCount: 15,
    groupCount: 11,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x / EF2x compatibility
    focalLengthMm: { marketing: 600, design: 584.816932668 },
    fNumber: { marketing: 4, design: 4.12 },
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
      focalLengthMm: 439.750901,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Front protective positive collector.",
      diagramLabel: "L11",
      dPgF: 0.0043,
    },
    {
      id: 2,
      name: "L12",
      label: "L12 (Gp1)",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 241.638276,
      glass: "Optical fluorite / CaF2",
      apd: "patent",
      apdNote: "Patent Gp1 anomalous-partial-dispersion material; X = +0.0534.",
      role: "Front fluorite positive element for longitudinal chromatic correction.",
      diagramLabel: "L12",
      dPgF: 0.0534,
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -190.671871,
      glass: "835427 high-index lanthanum class (vendor unresolved; patent theta_gF = 0.5636)",
      apd: false,
      role: "Negative front-unit corrector following the first fluorite element.",
      diagramLabel: "L13",
      dPgF: -0.0083,
    },
    {
      id: 4,
      name: "L14",
      label: "L14 (Gp1)",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 222.359176,
      glass: "Optical fluorite / CaF2",
      apd: "patent",
      apdNote: "Patent Gp1 anomalous-partial-dispersion material; X = +0.0534.",
      role: "Second front-unit fluorite positive element for longitudinal chromatic correction.",
      diagramLabel: "L14",
      dPgF: 0.0534,
    },
    {
      id: 5,
      name: "L15",
      label: "L15",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -731.587002,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Weak negative meniscus ahead of the focusing cemented group.",
      diagramLabel: "L15",
      dPgF: 0.0043,
    },
    {
      id: 6,
      name: "L16a",
      label: "L16a",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 168.506079,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Positive component of the translating internal-focus cemented group.",
      diagramLabel: "L16a",
      cemented: "L16",
      dPgF: 0.015,
    },
    {
      id: 7,
      name: "L16b",
      label: "L16b",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -87.801058,
      glass: "835427 high-index lanthanum class (vendor unresolved; patent theta_gF = 0.5636)",
      apd: false,
      role: "Negative component of the translating internal-focus cemented group.",
      diagramLabel: "L16b",
      cemented: "L16",
      dPgF: -0.0083,
    },
    {
      id: 8,
      name: "L21a",
      label: "L21a",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -85.50673,
      glass: "S-LAH60 (OHARA)",
      apd: false,
      role: "Negative component of the first rear-unit cemented group.",
      diagramLabel: "L21a",
      cemented: "L21",
      dPgF: -0.0038,
    },
    {
      id: 9,
      name: "L21b",
      label: "L21b",
      type: "Biconvex Positive",
      nd: 1.7432,
      vd: 49.3,
      focalLengthMm: 58.323435,
      glass: "L-LAM60 (OHARA)",
      apd: false,
      role: "Positive component of the first rear-unit cemented group.",
      diagramLabel: "L21b",
      cemented: "L21",
      dPgF: -0.0078,
    },
    {
      id: 10,
      name: "L22a",
      label: "L22a",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 64.96785,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Positive component of the transversely moving image-stabilization group.",
      diagramLabel: "L22a",
      cemented: "L22",
      dPgF: 0.0167,
    },
    {
      id: 11,
      name: "L22b",
      label: "L22b",
      type: "Biconcave Negative",
      nd: 1.72,
      vd: 50.2,
      focalLengthMm: -40.522845,
      glass: "720502 lanthanum-crown class (vendor unresolved; patent theta_gF = 0.5535)",
      apd: false,
      role: "Negative component of the transversely moving image-stabilization group.",
      diagramLabel: "L22b",
      cemented: "L22",
      dPgF: -0.0058,
    },
    {
      id: 12,
      name: "L23",
      label: "L23",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -138.952803,
      glass: "S-LAH60 (OHARA)",
      apd: false,
      role: "Negative singlet that translates transversely together with L22 for image stabilization.",
      diagramLabel: "L23",
      dPgF: -0.0038,
    },
    {
      id: 13,
      name: "L24",
      label: "L24",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 139.702854,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Positive rear-unit relay/corrector singlet.",
      diagramLabel: "L24",
      dPgF: 0.0167,
    },
    {
      id: 14,
      name: "L25a",
      label: "L25a (Gp2)",
      type: "Positive Meniscus",
      nd: 1.7495,
      vd: 35.3,
      focalLengthMm: 62.043945,
      glass: "S-NBH51 (OHARA)",
      apd: false,
      role: "Patent Gp2 positive component of the final cemented chromatic-correction pair.",
      diagramLabel: "L25a",
      cemented: "L25",
      dPgF: -0.0026,
    },
    {
      id: 15,
      name: "L25b",
      label: "L25b (Gn1)",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 18.9,
      focalLengthMm: -69.102768,
      glass: "S-NPH2 (OHARA)",
      apd: "patent",
      apdNote: "Patent Gn1 anomalous-partial-dispersion material; X = +0.0375.",
      role: "Patent Gn1 high-index/high-dispersion negative component nearest the image side.",
      diagramLabel: "L25b",
      cemented: "L25",
      dPgF: 0.0375,
    },
    {
      id: 16,
      name: "G",
      label: "Drop-in filter G",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7 (OHARA)",
      role: "Plane-parallel glass block G of the patent prescription (rows 28-29; X = dPgF = -0.0007), in the rear 52 mm drop-in filter holder. The patent defines back focus with it absent; Canon counts the drop-in filter in the production lens.",
      diagramLabel: "G",
      dPgF: -0.0007,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 397.272, d: 16.59, sd: 72.845, medium: 1 },
    { label: "2", R: -459.269, d: 46.56, sd: 72.535 },
    { label: "3", R: 134.301, d: 20.85, sd: 59.735, medium: 2 },
    { label: "4", R: -455.465, d: 1.4, sd: 58.9 },
    { label: "5", R: -392.78, d: 5.9, sd: 58.48, medium: 3 },
    { label: "6", R: 269.463, d: 72.58, sd: 55.815 },
    { label: "7", R: 105.274, d: 15.06, sd: 46.645, medium: 4 },
    { label: "8", R: -1104.29, d: 0.15, sd: 45.92 },
    { label: "9", R: 63.925, d: 5.0, sd: 40.385, medium: 5 },
    { label: "10", R: 52.819, sd: 37.375 },
    { label: "11", R: 413.496, d: 5.41, sd: 32.215, medium: 6 },
    { label: "12", R: -200.76, d: 3.3, sd: 31.9, medium: 7 },
    { label: "13", R: 116.31, sd: 30.055 },
    // US 2011/0090576 A1, Third Numerical Embodiment surface table, row 14: printed effective
    // diameter 43.11 mm at the stop.
    { label: "STO", R: "flat", d: 7.03 },
    { label: "15", R: 218.039, d: 2.0, sd: 20.565, medium: 8 },
    { label: "16", R: 53.513, d: 6.1, sd: 20.02, medium: 9 },
    { label: "17", R: -217.059, d: 9.19, sd: 19.895 },
    { label: "18", R: 113.464, d: 4.16, sd: 17.12, medium: 10 },
    { label: "19", R: -104.968, d: 1.65, sd: 16.815, medium: 11 },
    { label: "20", R: 40.674, d: 5.31, sd: 15.425 },
    { label: "21", R: -61.122, d: 1.6, sd: 15.39, medium: 12 },
    { label: "22", R: -130.879, d: 5.61, sd: 15.55 },
    { label: "23", R: 71.59, d: 3.26, sd: 15.725, medium: 13 },
    { label: "24", R: 177.571, d: 4.59, sd: 15.605 },
    { label: "25", R: -882.223, d: 4.17, sd: 15.505, medium: 14 },
    { label: "26", R: -44.263, d: 1.9, sd: 15.52, medium: 15 },
    { label: "27", R: -147.669, d: 12.0, sd: 15.705 },
    // Drop-in filter G (patent rows 28-29), drawn as a plane-parallel plate. Its sd is a ray-trace estimate; the
    // patent's 31.00 mm effective diameter is a ray envelope and would narrow this model's half-field.
    { label: "28", R: "flat", d: 2.0, sd: 18.0, medium: 16 },
    { label: "29", R: "flat", d: 107.811026, sd: 18.0 }, // drop-in filter → image plane
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 4.5,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent-published internal focus by cemented L16 moving image-side; " +
      "close state solved at Canon's 4.5 m MFD with +20.112105824866635 mm L16 travel and fixed image plane.",
  },

  /* (moved from var) ── Variable air spacings: constrained L16 internal-focus reconstruction ── */
  gaps: {
    "10": { label: "D10", values: [[31.84, 51.952105824866635]] },
    "13": { label: "D13", values: [[72.57, 52.457894175133355]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4.12, fStops: [4.12, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  /* ── Group and cemented-pair annotations ── */
  groups: [
    { text: "LF FIXED (L11-L15)", fromSurface: "1", toSurface: "10" },
    { text: "L16 FOCUS (−)", fromSurface: "11", toSurface: "13" },
    { text: "LR FIXED", fromSurface: "15", toSurface: "27" },
  ],
  doublets: [
    { text: "L16", fromSurface: "11", toSurface: "13" },
    { text: "L21", fromSurface: "15", toSurface: "17" },
    { text: "L22", fromSurface: "18", toSurface: "20" },
    { text: "L25", fromSurface: "25", toSurface: "27" },
  ],

  layout: { yScFill: 0.55 },

  /* ── Geometry/layout ── */
  checks: { gapSagFrac: 0.95 },
} satisfies LensDataV2Input;

export default LENS_DATA;
