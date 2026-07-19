import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ RODENSTOCK GRANDAGON-N 75mm f/6.8                                         ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: DE 26 35 415 B1, claim/example 1, Optische Werke G.           ║
 * ║ Rodenstock. Six-element, four-group all-spherical wide-angle objective.    ║
 * ║                                                                            ║
 * ║ Patent normalization: f' = 100 at the mercury e-line. All radii, axial     ║
 * ║ distances, back focus, and semi-diameters are scaled by 0.75 to the        ║
 * ║ 75 mm production focal length.                                             ║
 * ║                                                                            ║
 * ║ Index convention: the patent reports n_e / ν_e, not n_d / ν_d. The         ║
 * ║ LensDataInput field names are retained, but the stored optical indices     ║
 * ║ below preserve the patent e-line prescription so the paraxial geometry     ║
 * ║ reproduces the patent's f' = 100 design. Catalog d-line equivalents are    ║
 * ║ documented in the companion analysis.                                      ║
 * ║                                                                            ║
 * ║ Semi-diameters: not patent-listed. They are conservative estimates from    ║
 * ║ paraxial marginal/chief-ray envelopes, the patent baffle diameters,        ║
 * ║ the 58 mm production filter thread, and renderer constraints.              ║
 * ║                                                                            ║
 * ║ Focus: unit focus by view-camera bellows. The close-focus state below is   ║
 * ║ a 1.0 m visualization reference; the real close-focus limit depends on     ║
 * ║ the camera bellows or helical mount.                                       ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "rodenstock-grandagon-n-75mm-f68",
  maker: "Rodenstock",
  name: "RODENSTOCK GRANDAGON-N 75mm f/6.8",
  subtitle: "DE 26 35 415 B1 Example 1 — Optische Werke G. Rodenstock",
  specs: ["6 ELEMENTS / 4 GROUPS", "f = 75 mm", "F/6.8", "2ω = 102°", "IMAGE CIRCLE 187 mm", "ALL-SPHERICAL"],

  focalLengthMarketing: 75,
  focalLengthDesign: 74.98183,
  apertureMarketing: 6.8,
  apertureDesign: 6.8,
  lensMounts: ["large-format-lens-board"],
  imageFormat: "4x5",
  patentNumber: "DE 26 35 415 B1",
  patentAuthors: ["Franz Schlegel", "Josef Weiß"],
  patentAssignees: ["Optische Werke G Rodenstock"],
  patentYear: 1977,
  elementCount: 6,
  groupCount: 4,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 102,
    maxTraceFieldDeg: 51,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5246,
      vd: 59.22,
      fl: -44.17,
      glass: "Unmatched (K5/N-K5-class crown; DE2635415 lists n_e=1.5246, v_e=59.22)",
      role: "Front negative meniscus; outer Petzval counterweight and front ray bender.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7343,
      vd: 28.47,
      fl: -50.48,
      glass: "Unmatched (legacy dense flint; DE2635415 lists n_e=1.7343, v_e=28.47)",
      cemented: "D1",
      role: "High-index flint member of the front cemented positive group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6269,
      vd: 46.71,
      fl: 17.5,
      glass: "Unmatched (BaF8/J-BAF8-class glass; DE2635415 lists n_e=1.6269, v_e=46.71)",
      cemented: "D1",
      role: "Lower-dispersion partner of the front cemented group; contains the b1 stray-light baffle in the patent drawing.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6541,
      vd: 38.86,
      fl: 15.24,
      glass: "Unmatched (BaSF4-class glass; DE2635415 lists n_e=1.6541, v_e=38.86)",
      cemented: "D2",
      role: "Strong positive member of the rear cemented group; contains the b2 stray-light baffle in the patent drawing.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.7273,
      vd: 29.02,
      fl: -35.03,
      glass: "Unmatched (legacy dense flint; DE2635415 lists n_e=1.7273, v_e=29.02)",
      cemented: "D2",
      role: "Dense-flint negative partner of the rear cemented positive group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.5246,
      vd: 59.22,
      fl: -46.66,
      glass: "Unmatched (K5/N-K5-class crown; DE2635415 lists n_e=1.5246, v_e=59.22)",
      role: "Rear negative meniscus; balances the front meniscus and helps flatten the image field.",
    },
  ],

  surfaces: [
    { label: "1", R: 76.635, d: 2.4675, nd: 1.5246, elemId: 1, sd: 19.0 },
    { label: "2", R: 17.595, d: 10.0275, nd: 1.0, elemId: 0, sd: 15.8 },
    { label: "3", R: 19.6725, d: 10.9425, nd: 1.7343, elemId: 2, sd: 10.6 },
    { label: "4", R: 9.825, d: 8.8125, nd: 1.6269, elemId: 3, sd: 8.5 },
    { label: "5", R: 61.53, d: 0.96, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "STO", R: 1e15, d: 1.005, nd: 1.0, elemId: 0, sd: 5.58 },
    { label: "6", R: 127.2675, d: 7.8525, nd: 1.6541, elemId: 4, sd: 6.8 },
    { label: "7", R: -10.5525, d: 8.895, nd: 1.7273, elemId: 5, sd: 8.5 },
    { label: "8", R: -24.405, d: 10.0275, nd: 1.0, elemId: 0, sd: 10.6 },
    { label: "9", R: -20.61, d: 2.0025, nd: 1.5246, elemId: 6, sd: 15.8 },
    { label: "10", R: -134.8125, d: 51.58441, nd: 1.0, elemId: 0, sd: 19.0 },
  ],

  asph: {},
  var: {
    "10": [51.58441, 58.45311],
  },
  varLabels: [["10", "BF"]],
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  focusDescription: "Unit focus by camera bellows; BF close state is a 1.0 m visualization reference.",
  closeFocusM: 1.0,
  nominalFno: 6.8,
  fstopSeries: [6.8, 8, 11, 16, 22, 32, 45],
  maxFstop: 45,
  offAxisFieldFrac: 0.6,
  scFill: 0.58,
  yScFill: 0.82,
} satisfies LensDataInput;

export default LENS_DATA;
