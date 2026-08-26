import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 100-300mm f/5.6                                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JPS61-77818A, Numerical Example 1 (Canon).                         ║
 * ║ 15 elements / 9 air-separated physical groups / 4 functional zoom groups. ║
 * ║ All refracting surfaces are spherical; one explicit aperture stop lies    ║
 * ║ between functional Groups III and IV.                                      ║
 * ║                                                                              ║
 * ║ Correlation inference: Canon's EF100-300mm f/5.6 is a 15-element /        ║
 * ║ 9-group constant-f/5.6 EF zoom. Marketing values are kept separate from    ║
 * ║ the patent's numerical states. The patent additionally publishes a distinct ║
 * ║ 100→69 mm second-zoom mode; that 69 mm state is retained here.             ║
 * ║                                                                              ║
 * ║ PATENT ENDPOINT NOTE: the page-3 numerical-example heading prints          ║
 * ║ f=69-100~300, but the prose states 100-290, the spacing table ends at 290, ║
 * ║ and the page-4 aberration plot is f=290. The model therefore uses 290 as   ║
 * ║ the numerical design state; 300 is not used as a scaling target.          ║
 * ║                                                                              ║
 * ║ SOURCE CORRECTION: the scan prints N3 = 1.43749, νd = 70.1. Independent    ║
 * ║ reduced-angle and ABCD checks show that this contradicts the patent's own   ║
 * ║ focal-length table. The model therefore uses N3 = 1.48749 explicitly as a  ║
 * ║ source correction; the raw 1.43749 value is not an OCR correction.         ║
 * ║                                                                              ║
 * ║ Zoom-only variable gaps: D5, D10, D13 and the modeled rear BF (surface 25). ║
 * ║ All [infinity, close] pairs are identical because focus status is           ║
 * ║ NO_INTERNAL_RECONSTRUCTION. The patent says Group I is preferably moved    ║
 * ║ for focusing but publishes no close-focus spacing table. closeFocusM = 2 m ║
 * ║ is manufacturer metadata only and does not define an internal focus state. ║
 * ║ The Group III path reverses between the 198 and 290 mm tabulated states.    ║
 * ║                                                                              ║
 * ║ Semi-diameters are not published. They were derived from exact spherical   ║
 * ║ real-ray tracing at all four infinity zoom states through the paraxial      ║
 * ║ physical stop implied by FNO=5.6, then rounded outward and checked for edge ║
 * ║ thickness, rim slope, cross-gap intrusion, and traced-ray containment.     ║
 * ║ STO.sd = 11.1664 mm is the 69 mm baseline paraxial stop radius. The        ║
 * ║ 100/198/290 mm implied radii are about 14.7536/14.7499/14.7485 mm;         ║
 * ║ nominalFno=5.6 is authoritative. The patent gives no iris-motion law.      ║
 * ║                                                                              ║
 * ║ No scale is applied (s = 1.0). The d-line index reference is an inference  ║
 * ║ from the glass coordinates; the patent does not explicitly name the line.  ║
 * ║ No nC/nF/ng/dPgF values are authored because the patent does not identify   ║
 * ║ the actual glass melts or publish per-element line indices.                ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-100-300mm-f5-6",
  maker: "Canon",
  name: "CANON EF 100-300mm f/5.6",
  subtitle: "JPS61-77818A Example 1 — strong inferred correlation to the Canon EF100-300mm f/5.6",
  specs: [
    "15 ELEMENTS / 9 GROUPS",
    "100-300mm f/5.6 (MARKETED)",
    "PATENT STATES: 69 / 100 / 198 / 290 mm",
    "ALL-SPHERICAL",
    "2 m MFD (PRODUCT)",
  ],

  focalLengthMarketing: [100, 300],
  focalLengthDesign: [69.2066329268, 289.0656689639],
  apertureMarketing: 5.6,
  apertureDesign: 5.6,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "JPS61-77818A",
  patentAuthors: [
    "Keiji Ikemori",
    "Sadatoshi Takahashi",
    "Takashi Matsushita",
    "Tsunefumi Tanaka",
    "Nozomi Kitagishi",
  ],
  patentAssignees: ["Canon Inc."],
  patentYear: 1986,
  elementCount: 15,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: -248.416159,
      glass: "805254 — SF6-class dense flint; vendor/melt unresolved",
      apd: false,
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      fl: 138.813057,
      glass: "516641 — BSL7-class crown; OHARA S/L family unresolved",
      apd: false,
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.1,
      indexReference: "d",
      fl: 222.685764,
      glass: "48770x — FK5/FSL5-class low-dispersion crown; source-corrected model coordinate",
      apd: false,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.8,
      indexReference: "d",
      fl: -61.707648,
      glass: "713538/540 — LAK8/LAL8-class lanthanum crown; vendor unresolved",
      apd: false,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      fl: -36.767097,
      glass: "697555 — LAK14-class lanthanum crown; vendor unresolved",
      apd: false,
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: 54.950334,
      glass: "805254 — SF6-class dense flint; vendor/melt unresolved",
      apd: false,
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.52301,
      vd: 50.8,
      indexReference: "d",
      fl: 46.504837,
      glass: "N-KF9 coefficient proxy (patent 523508; production supplier unspecified)",
      apd: false,
      cemented: "C3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: -88.058696,
      glass: "805254 — SF6-class dense flint; vendor/melt unresolved",
      apd: false,
      cemented: "C3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      fl: 37.575896,
      glass: "603607 — SK14/BACD14-class crown; vendor unresolved",
      apd: false,
      cemented: "C4",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      fl: -76.534281,
      glass: "773496 — LAF34/LAH66/TAF1-class lanthanum flint; vendor unresolved",
      apd: false,
      cemented: "C4",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      indexReference: "d",
      fl: -31.16078,
      glass: "834372/373 — LASF010/LAH60-class dense lanthanum flint; vendor unresolved",
      apd: false,
      cemented: "C5",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.60729,
      vd: 49.2,
      indexReference: "d",
      fl: 33.587441,
      glass: "BAF5-class coefficient proxy (patent 607492; production supplier unspecified)",
      apd: false,
      cemented: "C5",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.57501,
      vd: 41.5,
      indexReference: "d",
      fl: 82.724608,
      glass: "575415 — LF7/TIL27-class light flint; vendor unresolved",
      apd: false,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      fl: -14.613437,
      glass: "804466 — LASF015/LAH65-class lanthanum flint; vendor unresolved",
      apd: false,
      cemented: "C6",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.61293,
      vd: 37,
      indexReference: "d",
      fl: 26.876789,
      glass: "613370 — F3/S-TIM3-class flint; vendor unresolved",
      apd: false,
      cemented: "C6",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 111.88, d: 2.86, nd: 1.80518, elemId: 1, sd: 30.5 },
    { label: "2", R: 70.93, d: 7.06, nd: 1.51633, elemId: 2, sd: 30 },
    { label: "3", R: 6607.27, d: 0.2, nd: 1, elemId: 0, sd: 29.5 },
    { label: "4", R: 123.63, d: 4.66, nd: 1.48749, elemId: 3, sd: 29 },
    { label: "5", R: -879.4, d: 2.43, nd: 1, elemId: 0, sd: 28.8 },
    { label: "6", R: -165.22, d: 1.48, nd: 1.713, elemId: 4, sd: 14.2 },
    { label: "7", R: 60.19, d: 5.61, nd: 1, elemId: 0, sd: 14 },
    { label: "8", R: -68.62, d: 1.5, nd: 1.6968, elemId: 5, sd: 14.1 },
    { label: "9", R: 41.25, d: 4.43, nd: 1.80518, elemId: 6, sd: 14.5 },
    { label: "10", R: 580.21, d: 48.65, nd: 1, elemId: 0, sd: 14.6 },
    { label: "11", R: 104.4, d: 7, nd: 1.52301, elemId: 7, sd: 15 },
    { label: "12", R: -30.98, d: 2.07, nd: 1.80518, elemId: 8, sd: 15.1 },
    { label: "13", R: -56.66, d: 26.9, nd: 1, elemId: 0, sd: 15.5 },
    { label: "STO", R: 1e15, d: 1.97, nd: 1, elemId: 0, sd: 11.1664 },
    { label: "15", R: 24.23, d: 8.47, nd: 1.60311, elemId: 9, sd: 15.5 },
    { label: "16", R: -304.22, d: 1.48, nd: 1.7725, elemId: 10, sd: 14.7 },
    { label: "17", R: 73.54, d: 1.18, nd: 1, elemId: 0, sd: 14 },
    { label: "18", R: 41.01, d: 1.97, nd: 1.834, elemId: 11, sd: 13.5 },
    { label: "19", R: 15.56, d: 6.88, nd: 1.60729, elemId: 12, sd: 12 },
    { label: "20", R: 54.65, d: 5.34, nd: 1, elemId: 0, sd: 11.4 },
    { label: "21", R: 5519.93, d: 3.45, nd: 1.57501, elemId: 13, sd: 10.4 },
    { label: "22", R: -47.97, d: 5.32, nd: 1, elemId: 0, sd: 10 },
    { label: "23", R: -20.93, d: 0.99, nd: 1.804, elemId: 14, sd: 8.5 },
    { label: "24", R: 27.35, d: 5.29, nd: 1.61293, elemId: 15, sd: 8.7 },
    { label: "25", R: -38.38, d: 56.9673404667, nd: 1, elemId: 0, sd: 9 },
  ],

  /* ── Aspheres ── */
  asph: {},

  /* ── Zoom / focus state ── */
  zoomPositions: [69, 100, 198, 290],
  var: {
    "5": [
      [2.43, 2.43],
      [2.43, 2.43],
      [44.08, 44.08],
      [57.34, 57.34],
    ],
    "10": [
      [48.65, 48.65],
      [34.78, 34.78],
      [17.47, 17.47],
      [1.53, 1.53],
    ],
    "13": [
      [26.9, 26.9],
      [7.68, 7.68],
      [4.17, 4.17],
      [13.48, 13.48],
    ],
    "25": [
      [56.9673404667, 56.9673404667],
      [82.5677909364, 82.5677909364],
      [82.5413136604, 82.5413136604],
      [82.5313860277, 82.5313860277],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["10", "D10"],
    ["13", "D13"],
    ["25", "BF"],
  ],
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: the patent states Group I is preferably used for focusing but publishes no close-focus spacing table. Internal geometry therefore remains at the published infinity zoom states; closeFocusM = 2.0 m is manufacturer metadata only.",

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6", toSurface: "10" },
    { text: "G3 (+)", fromSurface: "11", toSurface: "13" },
    { text: "G4 (+)", fromSurface: "15", toSurface: "25" },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "C2", fromSurface: "8", toSurface: "10" },
    { text: "C3", fromSurface: "11", toSurface: "13" },
    { text: "C4", fromSurface: "15", toSurface: "17" },
    { text: "C5", fromSurface: "18", toSurface: "20" },
    { text: "C6", fromSurface: "23", toSurface: "25" },
  ],

  /* ── Product / aperture metadata ── */
  closeFocusM: 2,
  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 8,

  /* ── Layout ── */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
