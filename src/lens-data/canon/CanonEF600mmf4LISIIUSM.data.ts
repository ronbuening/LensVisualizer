import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 600mm f/4 L IS II USM                                                        ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2011/0090576 A1, Third Numerical Embodiment / Example 3 (Shigenobu Sugita, Canon).      ║
 * ║ Native patent scale: f = 584.89 mm; no uniform scaling is applied.                                 ║
 * ║ Active LensVisualizer model: 15 elements / 11 air-separated groups, all spherical.                 ║
 * ║                                                                                                      ║
 * ║ Product correlation: Canon EF 600mm f/4L IS II USM. Canon publishes 16 elements / 12 groups        ║
 * ║ including the rear 52 mm drop-in filter, two fluorite elements at G2/G4, 4.5 m MFD, and 0.15x      ║
 * ║ maximum magnification. The separate patent rear glass block G is excluded from this active model.   ║
 * ║ Canon sources: https://global.canon/en/c-museum/product/ef413.html and                              ║
 * ║ https://www.cla.canon.com/en/p/ef-600mm-f-4l-is-ii-usm                                            ║
 * ║                                                                                                      ║
 * ║ REAR REFERENCE-PLANE NORMALIZATION: rows 28-29 are glass block G (filter/faceplate) and are          ║
 * ║ omitted. Patent paragraph 0021 defines back focus with G absent, so surface 27 uses d = 121.13 mm   ║
 * ║ directly to the image plane instead of the raw 12.00 mm spacing to G.                               ║
 * ║                                                                                                      ║
 * ║ FOCUS — CONSTRAINED_RECONSTRUCTION: the patent publishes only that cemented L16 moves image-side   ║
 * ║ for close focusing. A paraxial solve constrained to that sole axial focus group and Canon's 4.5 m   ║
 * ║ MFD gives +20.112105825 mm L16 travel: d10 31.84 -> 51.952105825 mm and d13 72.57 ->                ║
 * ║ 52.457894175 mm. Their sum remains 104.41 mm, preserving the fixed image plane.                     ║
 * ║                                                                                                      ║
 * ║ STOP / F-NUMBER: patent row 14 publishes an effective diameter of 43.11 mm, retained here as the   ║
 * ║ physical stop (sd = 21.555 mm). A paraxial pupil projection alone gives f/4.036, but an exact        ║
 * ║ spherical marginal-ray solve through surfaces 1-13 gives an effective entrance beam of 141.972 mm  ║
 * ║ and f/4.119, consistent with the published FNO = 4.12. No stop-diameter correction is applied.      ║
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
  key: "canon-ef-600f4l-is-ii-usm",
  maker: "Canon",
  name: "CANON EF 600mm f/4 L IS II USM",
  subtitle: "US 2011/0090576 A1 Example 3 — Shigenobu Sugita / Canon Inc.",
  specs: [
    "15 ACTIVE ELEMENTS / 11 GROUPS",
    "f = 584.82 mm (MODELED)",
    "F/4.12 DESIGN",
    "2ω = 4.24°",
    "2 FLUORITE ELEMENTS",
  ],

  focalLengthMarketing: 600,
  focalLengthDesign: 584.816932668,
  apertureMarketing: 4,
  apertureDesign: 4.12,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2011/0090576 A1",
  patentAuthors: ["Shigenobu Sugita"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2011,
  elementCount: 15,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "L11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 439.750901,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      dPgF: 0.0043,
      role: "Front protective positive collector.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "L12 (Gp1)",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      fl: 241.638276,
      glass: "Optical fluorite / CaF2",
      apd: "patent",
      apdNote: "Patent Gp1 anomalous-partial-dispersion material; X = +0.0534.",
      dPgF: 0.0534,
      role: "Front fluorite positive element for longitudinal chromatic correction.",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -190.671871,
      glass: "835427 high-index lanthanum class (vendor unresolved; patent theta_gF = 0.5636)",
      apd: false,
      dPgF: -0.0083,
      role: "Negative front-unit corrector following the first fluorite element.",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "L14 (Gp1)",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      fl: 222.359176,
      glass: "Optical fluorite / CaF2",
      apd: "patent",
      apdNote: "Patent Gp1 anomalous-partial-dispersion material; X = +0.0534.",
      dPgF: 0.0534,
      role: "Second front-unit fluorite positive element for longitudinal chromatic correction.",
    },
    {
      id: 5,
      name: "L15",
      diagramLabel: "L15",
      label: "L15",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: -731.587002,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      dPgF: 0.0043,
      role: "Weak negative meniscus ahead of the focusing cemented group.",
    },
    {
      id: 6,
      name: "L16a",
      diagramLabel: "L16a",
      label: "L16a",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      fl: 168.506079,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      dPgF: 0.015,
      cemented: "L16",
      role: "Positive component of the translating internal-focus cemented group.",
    },
    {
      id: 7,
      name: "L16b",
      diagramLabel: "L16b",
      label: "L16b",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -87.801058,
      glass: "835427 high-index lanthanum class (vendor unresolved; patent theta_gF = 0.5636)",
      apd: false,
      dPgF: -0.0083,
      cemented: "L16",
      role: "Negative component of the translating internal-focus cemented group.",
    },
    {
      id: 8,
      name: "L21a",
      diagramLabel: "L21a",
      label: "L21a",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      fl: -85.50673,
      glass: "S-LAH60 (OHARA)",
      apd: false,
      dPgF: -0.0038,
      cemented: "L21",
      role: "Negative component of the first rear-unit cemented group.",
    },
    {
      id: 9,
      name: "L21b",
      diagramLabel: "L21b",
      label: "L21b",
      type: "Biconvex Positive",
      nd: 1.7432,
      vd: 49.3,
      fl: 58.323435,
      glass: "L-LAM60 (OHARA)",
      apd: false,
      dPgF: -0.0078,
      cemented: "L21",
      role: "Positive component of the first rear-unit cemented group.",
    },
    {
      id: 10,
      name: "L22a",
      diagramLabel: "L22a",
      label: "L22a",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 64.96785,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      dPgF: 0.0167,
      cemented: "L22",
      role: "Positive component of the transversely moving image-stabilization group.",
    },
    {
      id: 11,
      name: "L22b",
      diagramLabel: "L22b",
      label: "L22b",
      type: "Biconcave Negative",
      nd: 1.72,
      vd: 50.2,
      fl: -40.522845,
      glass: "720502 lanthanum-crown class (vendor unresolved; patent theta_gF = 0.5535)",
      apd: false,
      dPgF: -0.0058,
      cemented: "L22",
      role: "Negative component of the transversely moving image-stabilization group.",
    },
    {
      id: 12,
      name: "L23",
      diagramLabel: "L23",
      label: "L23",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      fl: -138.952803,
      glass: "S-LAH60 (OHARA)",
      apd: false,
      dPgF: -0.0038,
      role: "Negative singlet that translates transversely together with L22 for image stabilization.",
    },
    {
      id: 13,
      name: "L24",
      diagramLabel: "L24",
      label: "L24",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: 139.702854,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      dPgF: 0.0167,
      role: "Positive rear-unit relay/corrector singlet.",
    },
    {
      id: 14,
      name: "L25a",
      diagramLabel: "L25a",
      label: "L25a (Gp2)",
      type: "Positive Meniscus",
      nd: 1.7495,
      vd: 35.3,
      fl: 62.043945,
      glass: "S-NBH51 (OHARA)",
      apd: false,
      dPgF: -0.0026,
      cemented: "L25",
      role: "Patent Gp2 positive component of the final cemented chromatic-correction pair.",
    },
    {
      id: 15,
      name: "L25b",
      diagramLabel: "L25b",
      label: "L25b (Gn1)",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 18.9,
      fl: -69.102768,
      glass: "S-NPH2 (OHARA)",
      apd: "patent",
      apdNote: "Patent Gn1 anomalous-partial-dispersion material; X = +0.0375.",
      dPgF: 0.0375,
      cemented: "L25",
      role: "Patent Gn1 high-index/high-dispersion negative component nearest the image side.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 397.272, d: 16.59, nd: 1.48749, elemId: 1, sd: 72.845 },
    { label: "2", R: -459.269, d: 46.56, nd: 1.0, elemId: 0, sd: 72.535 },
    { label: "3", R: 134.301, d: 20.85, nd: 1.43387, elemId: 2, sd: 59.735 },
    { label: "4", R: -455.465, d: 1.4, nd: 1.0, elemId: 0, sd: 58.9 },
    { label: "5", R: -392.78, d: 5.9, nd: 1.83481, elemId: 3, sd: 58.48 },
    { label: "6", R: 269.463, d: 72.58, nd: 1.0, elemId: 0, sd: 55.815 },
    { label: "7", R: 105.274, d: 15.06, nd: 1.43387, elemId: 4, sd: 46.645 },
    { label: "8", R: -1104.29, d: 0.15, nd: 1.0, elemId: 0, sd: 45.92 },
    { label: "9", R: 63.925, d: 5.0, nd: 1.48749, elemId: 5, sd: 40.385 },
    { label: "10", R: 52.819, d: 31.84, nd: 1.0, elemId: 0, sd: 37.375 },
    { label: "11", R: 413.496, d: 5.41, nd: 1.80518, elemId: 6, sd: 32.215 },
    { label: "12", R: -200.76, d: 3.3, nd: 1.83481, elemId: 7, sd: 31.9 },
    { label: "13", R: 116.31, d: 72.57, nd: 1.0, elemId: 0, sd: 30.055 },
    {
      label: "STO",
      R: 1e15,
      d: 7.03,
      nd: 1.0,
      elemId: 0,
      sd: 21.555,
    },
    { label: "15", R: 218.039, d: 2.0, nd: 1.834, elemId: 8, sd: 20.565 },
    { label: "16", R: 53.513, d: 6.1, nd: 1.7432, elemId: 9, sd: 20.02 },
    { label: "17", R: -217.059, d: 9.19, nd: 1.0, elemId: 0, sd: 19.895 },
    { label: "18", R: 113.464, d: 4.16, nd: 1.84666, elemId: 10, sd: 17.12 },
    { label: "19", R: -104.968, d: 1.65, nd: 1.72, elemId: 11, sd: 16.815 },
    { label: "20", R: 40.674, d: 5.31, nd: 1.0, elemId: 0, sd: 15.425 },
    { label: "21", R: -61.122, d: 1.6, nd: 1.834, elemId: 12, sd: 15.39 },
    { label: "22", R: -130.879, d: 5.61, nd: 1.0, elemId: 0, sd: 15.55 },
    { label: "23", R: 71.59, d: 3.26, nd: 1.84666, elemId: 13, sd: 15.725 },
    { label: "24", R: 177.571, d: 4.59, nd: 1.0, elemId: 0, sd: 15.605 },
    { label: "25", R: -882.223, d: 4.17, nd: 1.7495, elemId: 14, sd: 15.505 },
    { label: "26", R: -44.263, d: 1.9, nd: 1.92286, elemId: 15, sd: 15.52 },
    { label: "27", R: -147.669, d: 121.13, nd: 1.0, elemId: 0, sd: 15.705 },
  ],

  asph: {},

  /* ── Variable air spacings: constrained L16 internal-focus reconstruction ── */
  var: {
    "10": [31.84, 51.952105824866635],
    "13": [72.57, 52.457894175133355],
  },
  varLabels: [
    ["10", "D10"],
    ["13", "D13"],
  ],

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

  /* ── Focus configuration ── */
  closeFocusM: 4.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent-published internal focus by cemented L16 moving image-side; " +
    "close state solved at Canon's 4.5 m MFD with +20.112105824866635 mm L16 travel and fixed image plane.",

  /* ── Aperture configuration ── */
  nominalFno: 4.12,
  fstopSeries: [4.12, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 9,
  maxFstop: 32,

  /* ── Geometry/layout ── */
  gapSagFrac: 0.95,
  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
