import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AI AF ZOOM-NIKKOR 20-35mm f/2.8D IF                           ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 5,276,553 A, Example 1 (Wataru Tatsuno / Nikon Corporation).          ║
 * ║ Patent prescription: 14 elements / 11 air-separated units / 4 zoom groups.       ║
 * ║ Power sequence: negative / positive / negative / positive.                        ║
 * ║ One object-side asphere on L11. No scale factor is applied (s = 1).              ║
 * ║                                                                                    ║
 * ║ SOURCE / EXTRACTION ISSUES PRESERVED IN THE MODEL:                                ║
 * ║   • Surface 11 uses R = -56.755 mm. Table 1 prints +56.755, while claim 7         ║
 * ║     prints -56.755; only the negative sign reproduces all published EFL/Bf rows. ║
 * ║   • Surface 5 is +153.969 mm in both rendered Table 1 and claim 7; some text     ║
 * ║     extraction drops the leading 1, so the rendered source is retained.            ║
 * ║   • L43 is typed Biconvex Positive from R21 = +2058.323 and R22 = -50.144,        ║
 * ║     although the qualitative patent prose calls L43 a positive meniscus.           ║
 * ║                                                                                    ║
 * ║ ZOOM / FOCUS:                                                                      ║
 * ║   • Published infinity zoom positions: 20.5 / 28 / 34 mm.                        ║
 * ║   • D8, D13, D16, and BF vary with zoom. D11 is source-marked variable because   ║
 * ║     the cemented L21 doublet is the internal-focus component, but the patent      ║
 * ║     publishes no finite-focus row or travel.                                      ║
 * ║   • Focus status: NO_INTERNAL_RECONSTRUCTION. Every [infinity, close] pair below  ║
 * ║     is therefore identical; the production 0.5 m MFD is metadata only and is not  ║
 * ║     used to invent internal focus travel.                                         ║
 * ║   • G1 reverses direction between the published mid and tele states when group    ║
 * ║     positions are normalized to the fixed image plane.                            ║
 * ║                                                                                    ║
 * ║ STOP MODEL:                                                                        ║
 * ║   • The patent locates S only diagrammatically between G2 and G3, within D13.     ║
 * ║   • Figure 1 places S about 45% of the way from surface 13 toward surface 14.     ║
 * ║     D13 is therefore split 45% / 55% at every zoom state. This is an explicit     ║
 * ║     modeling inference, not a published axial coordinate or diaphragm motion.     ║
 * ║   • nominalFno = 2.89 is the exact patent design value used for pupil/stop sizing;║
 * ║     the production marketing value remains f/2.8 in apertureMarketing.            ║
 * ║                                                                                    ║
 * ║ SEMI-DIAMETERS:                                                                    ║
 * ║   • The patent publishes no clear-aperture radii. SDs were independently derived  ║
 * ║     from exact spherical/aspherical Snell tracing at all three zoom states, using ║
 * ║     the 36×24 mm half-diagonal, the f/2.89 entrance pupil, full on-axis marginal  ║
 * ║     rays, the full-field chief ray, and the default 0.6-field off-axis bundle.    ║
 * ║   • Values include approximately 5–10% radial clearance over the governing traced ║
 * ║     ray heights, then were checked for edge thickness, actual rim slope, shared-  ║
 * ║     band cross-gap intrusion, and asphere/conic limits.                            ║
 * ║                                                                                    ║
 * ║ GLASS:                                                                             ║
 * ║   • The patent publishes d-line nd / νd only and names no glass manufacturer.     ║
 * ║     Compatible catalog names describe dispersion equivalents, never suppliers.     ║
 * ║   • No nC, nF, ng, or dPgF fields are authored from unsupported patent data.       ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-af-zoom-nikkor-20-35mm-f28d-if",
  maker: "Nikon",
  name: "NIKON AI AF ZOOM-NIKKOR 20-35mm f/2.8D IF",
  subtitle: "US 5,276,553 A — Example 1 — production correlation",
  specs: [
    "14 ELEMENTS / 11 AIR-SEPARATED UNITS / 4 ZOOM GROUPS",
    "20-35mm MARKETED / 20.5-34.0mm PATENT DESIGN",
    "f/2.8 MARKETED / F/2.89 PATENT DESIGN",
    "35mm FULL-FRAME / NIKON F",
    "1 ASPHERICAL SURFACE",
  ],
  focalLengthMarketing: [20, 35],
  focalLengthDesign: [20.5, 34],
  apertureMarketing: 2.8,
  apertureDesign: 2.89,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 5,276,553 A",
  patentAuthors: ["Wataru Tatsuno"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1994,
  elementCount: 14,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "L11",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.77279,
      vd: 49.4,
      fl: -42.850027,
      glass: "J-LASF016 catalog equivalent (production supplier not established; patent 773494)",
      apd: false,
      role: "Front negative meniscus; object-side surface 1A is aspherical.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "L12",
      type: "Biconcave Negative",
      nd: 1.78797,
      vd: 47.5,
      fl: -33.354449,
      glass: "TAF4 catalog equivalent (production supplier not established; patent 788475)",
      apd: false,
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "L13",
      type: "Biconvex Positive",
      nd: 1.75692,
      vd: 31.6,
      fl: 102.279959,
      glass: "E-LAF11 catalog equivalent (production supplier not established; patent 757316)",
      apd: false,
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.75692,
      vd: 31.6,
      fl: 129.323966,
      glass: "E-LAF11 catalog equivalent (production supplier not established; patent 757316)",
      apd: false,
    },
    {
      id: 5,
      name: "L21a",
      diagramLabel: "L21a",
      label: "L21a",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      fl: -66.512083,
      glass: "SF1 catalog equivalent (production supplier not established; patent 717295)",
      apd: false,
      cemented: "L21",
    },
    {
      id: 6,
      name: "L21b",
      diagramLabel: "L21b",
      label: "L21b",
      type: "Biconvex Positive",
      nd: 1.5186,
      vd: 69.9,
      fl: 31.681489,
      glass: "J-PKH1 catalog equivalent (production supplier not established; patent 519699)",
      apd: false,
      cemented: "L21",
    },
    {
      id: 7,
      name: "L22",
      diagramLabel: "L22",
      label: "L22",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: 76.040591,
      glass: "LAC8 catalog equivalent (production supplier not established; patent 713539)",
      apd: false,
    },
    {
      id: 8,
      name: "L31a",
      diagramLabel: "L31a",
      label: "L31a",
      type: "Biconcave Negative",
      nd: 1.7481,
      vd: 52.3,
      fl: -21.917166,
      glass: "Unmatched (nd=1.74810, vd=52.3)",
      apd: false,
      cemented: "L31",
    },
    {
      id: 9,
      name: "L31b",
      diagramLabel: "L31b",
      label: "L31b",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: 37.691781,
      glass: "S-TIH6 catalog equivalent (production supplier not established; patent 805254)",
      apd: false,
      cemented: "L31",
    },
    {
      id: 10,
      name: "L41",
      diagramLabel: "L41",
      label: "L41",
      type: "Positive Meniscus",
      nd: 1.65844,
      vd: 50.8,
      fl: 73.144126,
      glass: "J-SSK5 catalog equivalent (production supplier not established; patent 658508)",
      apd: false,
    },
    {
      id: 11,
      name: "L42",
      diagramLabel: "L42",
      label: "L42",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 26.1,
      fl: -60.734835,
      glass: "SF56A catalog equivalent (production supplier not established; patent 785261)",
      apd: false,
    },
    {
      id: 12,
      name: "L43",
      diagramLabel: "L43",
      label: "L43",
      type: "Biconvex Positive",
      nd: 1.79668,
      vd: 45.4,
      fl: 61.496057,
      glass: "J-LASF017 catalog equivalent (production supplier not established; patent 797454)",
      apd: false,
    },
    {
      id: 13,
      name: "L44a",
      diagramLabel: "L44a",
      label: "L44a",
      type: "Biconvex Positive",
      nd: 1.6228,
      vd: 57,
      fl: 28.094946,
      glass: "S-BSM10 catalog equivalent (production supplier not established; patent 623570)",
      apd: false,
      cemented: "L44",
    },
    {
      id: 14,
      name: "L44b",
      diagramLabel: "L44b",
      label: "L44b",
      type: "Negative Meniscus",
      nd: 1.86074,
      vd: 23,
      fl: -44.911826,
      glass: "Unmatched (patent 861230; no compatible public catalog row)",
      apd: false,
      cemented: "L44",
    },
  ],

  /* ── Surface prescription: Example 1, wide-angle infinity base state ── */
  surfaces: [
    { label: "1A", R: 49.529, d: 2.5, nd: 1.77279, elemId: 1, sd: 20.5 },
    { label: "2", R: 19.409, d: 13, nd: 1, elemId: 0, sd: 16 },
    { label: "3", R: -82.454, d: 2, nd: 1.78797, elemId: 2, sd: 12.5 },
    { label: "4", R: 38.992, d: 2.8, nd: 1, elemId: 0, sd: 11.5 },
    { label: "5", R: 153.969, d: 4, nd: 1.75692, elemId: 3, sd: 11.3 },
    { label: "6", R: -153.969, d: 0.2, nd: 1, elemId: 0, sd: 10.8 },
    { label: "7", R: 34.815, d: 3.5, nd: 1.75692, elemId: 4, sd: 11 },
    { label: "8", R: 51.692, d: 17.8289, nd: 1, elemId: 0, sd: 11 },
    { label: "9", R: 43.02, d: 1.2, nd: 1.71736, elemId: 5, sd: 11.5 },
    { label: "10", R: 22.359, d: 5.5, nd: 1.5186, elemId: 6, sd: 11.5 },
    { label: "11", R: -56.755, d: 3.3045, nd: 1, elemId: 0, sd: 11.7 },
    { label: "12", R: 48.361, d: 3, nd: 1.713, elemId: 7, sd: 11.8 },
    { label: "13", R: 436.187, d: 1.61919, nd: 1, elemId: 0, sd: 11.8 },
    { label: "STO", R: 1e15, d: 1.97901, nd: 1, elemId: 0, sd: 8 },
    { label: "14", R: -63.76, d: 1.2, nd: 1.7481, elemId: 8, sd: 10.5 },
    { label: "15", R: 22.25, d: 4, nd: 1.80518, elemId: 9, sd: 10.5 },
    { label: "16", R: 76.693, d: 9.147, nd: 1, elemId: 0, sd: 10.5 },
    { label: "17", R: 28.759, d: 3, nd: 1.65844, elemId: 10, sd: 10.6 },
    { label: "18", R: 68.431, d: 1.5, nd: 1, elemId: 0, sd: 10.6 },
    { label: "19", R: 67.908, d: 2, nd: 1.7847, elemId: 11, sd: 11 },
    { label: "20", R: 27.642, d: 2.5, nd: 1, elemId: 0, sd: 10.9 },
    { label: "21", R: 2058.323, d: 4, nd: 1.79668, elemId: 12, sd: 11.5 },
    { label: "22", R: -50.144, d: 0.2, nd: 1, elemId: 0, sd: 12.2 },
    { label: "23", R: 105.997, d: 8, nd: 1.6228, elemId: 13, sd: 13 },
    { label: "24", R: -20.35, d: 1.7, nd: 1.86074, elemId: 14, sd: 13.5 },
    { label: "25", R: -44.631, d: 38.5995, nd: 1, elemId: 0, sd: 14.5 },
  ],

  /* Patent k = 1.000 in sqrt(1 - k h²/R²); LensVisualizer standard K = k - 1 = 0. */
  asph: {
    "1A": {
      K: 0,
      A4: 4.78e-6,
      A6: 4.468e-9,
      A8: -7.609e-12,
      A10: 1.215e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom states: all second values equal first values by NO_INTERNAL_RECONSTRUCTION ── */
  zoomPositions: [20.5, 28, 34],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "8": [
      [17.8289, 17.8289],
      [6.3818, 6.3818],
      [1.5051, 1.5051],
    ],
    "11": [
      [3.3045, 3.3045],
      [3.3045, 3.3045],
      [3.3045, 3.3045],
    ],
    "13": [
      [1.61919, 1.61919],
      [3.68307, 3.68307],
      [5.278725, 5.278725],
    ],
    STO: [
      [1.97901, 1.97901],
      [4.50153, 4.50153],
      [6.451775, 6.451775],
    ],
    "16": [
      [9.147, 9.147],
      [4.5606, 4.5606],
      [1.0148, 1.0148],
    ],
    "25": [
      [38.5995, 38.5995],
      [45.1515, 45.1515],
      [50.217, 50.217],
    ],
  },
  varLabels: [
    ["8", "D8"],
    ["11", "D11 (focus gap; infinity published only)"],
    ["13", "D13a"],
    ["STO", "D13b"],
    ["16", "D16"],
    ["25", "BF"],
  ],

  groups: [
    { text: "G1 (−)", fromSurface: "1A", toSurface: "8" },
    { text: "G2 (+)", fromSurface: "9", toSurface: "13" },
    { text: "G3 (−)", fromSurface: "14", toSurface: "16" },
    { text: "G4 (+)", fromSurface: "17", toSurface: "25" },
  ],
  doublets: [
    { text: "L21", fromSurface: "9", toSurface: "11" },
    { text: "L31", fromSurface: "14", toSurface: "16" },
    { text: "L44", fromSurface: "23", toSurface: "25" },
  ],

  closeFocusM: 0.5,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — US 5,276,553 identifies cemented L21 as the internal focusing component, but " +
    "publishes no finite-focus spacing table or travel. The authored zoom states therefore remain infinity-focus only; " +
    "the 0.5 m production minimum focus distance is catalog metadata and does not drive a reconstructed focus state.",
  nominalFno: 2.89,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
