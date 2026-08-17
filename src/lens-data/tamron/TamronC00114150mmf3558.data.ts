import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — TAMRON 14-150mm f/3.5-5.8 Di III (C001)                              ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2014/0347522 A1, Example 3, Tables 9-12 (Yoshito Iwasawa / Tamron).     ║
 * ║ Product correlation is strong but inferential: the patent does not name C001.      ║
 * ║ Example 3 is a six-functional-group + - + - - + zoom with 17 physical lens         ║
 * ║ elements in 13 air-separated optical groups and four aspherical surfaces.           ║
 * ║                                                                                      ║
 * ║ MODEL NORMALIZATION                                                                  ║
 * ║ - Uniform scale factor s = 1.0; no focal-length scaling is applied.                 ║
 * ║ - Source 0.0100 mm cement/adhesive layers at s2/s22/s26/s30 are collapsed into     ║
 * ║   the downstream element at the same axial station. Their thickness is added to     ║
 * ║   the downstream element thickness; source surfaces s3/s23/s27/s31 are omitted.    ║
 * ║ - The optically active s7 hybrid-asphere resin layer is retained as a separate      ║
 * ║   modeling material entry (L4r). elementCount remains the 17 physical lenses;       ║
 * ║   elements[] therefore contains 18 material entries including L4r.                  ║
 * ║ - Rear plane-parallel plate s37-s38 is omitted. Surface 36 uses the documented      ║
 * ║   air-equivalent rear spacing 11 + 4.2/1.5168 + 1 = 14.768987341772153 mm.         ║
 * ║                                                                                      ║
 * ║ ZOOM / FOCUS                                                                          ║
 * ║ - zoomPositions are the patent Table 11 values 14.43 / 57.85 / 145.40 mm.          ║
 * ║ - Zoom-only variable gaps: D6, D15, D34.                                            ║
 * ║ - Zoom + focus gaps: D28, D32; D28 + D32 is conserved at each zoom position.       ║
 * ║ - Focus status: CONSTRAINED_RECONSTRUCTION. Patent Table 12 is an approximately     ║
 * ║   1.0 m subject-to-image state, not the production 0.5 m MOD. The close pairs here  ║
 * ║   are code-solved for 0.5 m subject-to-image distance with G4 as the only focus     ║
 * ║   group, preserving the published mechanism constraint.                              ║
 * ║ - G3 and G5 share one zoom track. G4 reverses relative motion with respect to G3.   ║
 * ║ - Source discrepancy retained in audit: paragraph 0096 says G2 moves imageward      ║
 * ║   W->T, while Table 11 sensor-fixed geometry requires 3.7597 mm objectward motion.   ║
 * ║                                                                                      ║
 * ║ STOP / F-NUMBER                                                                       ║
 * ║ - The patent publishes F-number but no stop diameter. STO sd = 5.5092719271 mm is   ║
 * ║   an inferred single fixed-stop fit to the three published F-numbers after project  ║
 * ║   normalization; it is not a patent-listed aperture. nominalFno stores the exact    ║
 * ║   modeled values from this final prescription and fixed stop.                        ║
 * ║                                                                                      ║
 * ║ SEMI-DIAMETERS                                                                         ║
 * ║ - Example 3 publishes no clear-aperture table. SDs are modeling inferences from      ║
 * ║   marginal/chief-ray envelopes, the patent optical section, Tamron's production     ║
 * ║   construction diagram, the 52 mm filter / 63.5 mm barrel envelope, and exact sag  ║
 * ║   geometry. They were checked for edge thickness, actual rim slope, conic limits,   ║
 * ║   shared-band cross-gap intrusion, and paraxial vignetting-limited off-axis rays.   ║
 * ║   They are not represented as patent-published clear apertures.                      ║
 * ║                                                                                      ║
 * ║ ASPHERES / SPECTRAL DATA                                                              ║
 * ║ - Patent epsilon convention converts as K = epsilon - 1; all Example 3 epsilon=1,   ║
 * ║   hence K=0. Aspheres are source surfaces 7, 17, 18, and 21.                        ║
 * ║ - The patent provides d-line nd/nu_d only. It does not publish per-element nC, nF,  ║
 * ║   ng, or dPgF; those optional fields are intentionally omitted rather than inferred.║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "tamron-c001-14-150mm-f3p5-5p8",
  maker: "Tamron",
  name: "TAMRON 14-150mm f/3.5-5.8 Di III (C001)",
  subtitle: "US 2014/0347522 A1 Example 3 — strong C001 correlation; constrained 0.5 m focus reconstruction",
  specs: [
    "17 ELEMENTS / 13 GROUPS",
    "PATENT 14.43-145.40 mm",
    "MODELED f/3.6909-5.9053",
    "4 ASPHERICAL SURFACES",
    "0.5 m MOD (CONSTRAINED RECONSTRUCTION)",
  ],

  focalLengthMarketing: [14, 150],
  focalLengthDesign: [14.432369813903854, 145.38500443927072],
  apertureMarketing: 3.5,
  apertureDesign: 3.6909409460450076,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentNumber: "US 2014/0347522 A1",
  patentAuthors: ["Yoshito Iwasawa"],
  patentAssignees: ["Tamron Co., Ltd."],
  patentYear: 2014,
  elementCount: 17,
  groupCount: 13,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      fl: -113.7493392986127,
      glass: "904313 class (vendor unresolved)",
      cemented: "D1",
      role: "Front negative meniscus of the G1 cemented pair.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 78.53584908686351,
      glass: "497816 fluorophosphate / ED-crown class (vendor unresolved)",
      cemented: "D1",
      role: "High-Abbe positive partner in the G1 cemented pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.39,
      fl: 96.8386367912967,
      glass: "618634 phosphate-crown class (vendor unresolved)",
      role: "Positive rear element of G1.",
    },
    {
      id: 4,
      name: "L4r",
      label: "L4 Hybrid Resin Layer",
      type: "Hybrid Aspherical Resin Layer",
      nd: 1.5146,
      vd: 49.96,
      fl: -719.4750881344959,
      glass: "Unmatched (hybrid-asphere resin, nd=1.51460, vd=49.96)",
      cemented: "H1",
      role: "Thin optically active aspherical layer on the L4 substrate; separate modeling entry, not an extra physical lens count.",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4 Substrate",
      type: "Negative Meniscus (Hybrid Substrate)",
      nd: 1.91082,
      vd: 35.25,
      fl: -16.909659059449694,
      glass: "911353 class (vendor unresolved)",
      cemented: "H1",
      role: "High-index negative substrate carrying the thin L4r aspherical layer.",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.25,
      fl: -16.678349842901394,
      glass: "911353 class (vendor unresolved)",
      role: "Strong negative element in G2.",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 14.785216631390718,
      glass: "923209 dense-flint class (vendor unresolved)",
      role: "Strong positive element inside the net-negative G2 group.",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: -27.727330926386948,
      glass: "773496 class (vendor unresolved)",
      role: "Rear negative meniscus of G2.",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.58313,
      vd: 59.46,
      fl: 16.55804418944958,
      glass: "583595 crown class (vendor unresolved)",
      role: "Strong positive, double-aspheric front element of G3.",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.86188,
      vd: 42.08,
      fl: -24.78547334702815,
      glass: "LASFN13 (Sumita catalog equivalent; production supplier unspecified)",
      role: "Negative correction element within G3.",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (Front Asph)",
      nd: 1.58313,
      vd: 59.46,
      fl: 21.23416316978257,
      glass: "583595 crown class (vendor unresolved)",
      cemented: "D2",
      role: "Positive aspheric member of the first G3 cemented pair.",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.90766,
      vd: 33.41,
      fl: -41.887333909190076,
      glass: "908334 class (catalog unresolved)",
      cemented: "D2",
      role: "Negative partner cemented to L10.",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      fl: -27.10679624899593,
      glass: "911353 class (vendor unresolved)",
      cemented: "D3",
      role: "Negative member of the second G3 cemented pair.",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.61882,
      vd: 64.32,
      fl: 15.098733425124887,
      glass: "M-PCD4 (Hoya catalog equivalent; production supplier unspecified)",
      cemented: "D3",
      role: "Positive partner cemented to L12.",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.46,
      fl: 38.22676550487945,
      glass: "805255 dense-flint class (vendor unresolved)",
      cemented: "D4",
      role: "Positive front member of the negative G4 focus doublet.",
    },
    {
      id: 16,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.8042,
      vd: 46.5,
      fl: -16.043137116530836,
      glass: "804465 class (vendor unresolved)",
      cemented: "D4",
      role: "Strong negative rear member of the translating G4 focus doublet.",
    },
    {
      id: 17,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      fl: -68.81777910814843,
      glass: "805255 dense-flint class (vendor unresolved)",
      role: "Negative G5 element sharing the G3 zoom track.",
    },
    {
      id: 18,
      name: "L17",
      label: "Element 17",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 70.17469711062927,
      glass: "729547 class (vendor unresolved)",
      role: "Fixed positive G6 rear relay element.",
    },
  ],

  surfaces: [
    { label: "1", R: 109.0553, d: 1.5, nd: 1.90366, elemId: 1, sd: 20.0 },
    // Source s2/s3 collapsed at the s2 station; 0.0100 mm adhesive thickness is folded into L2.
    { label: "2", R: 52.5697, d: 5.58, nd: 1.497, elemId: 2, sd: 20.0 },
    { label: "4", R: -146.2327, d: 0.2, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "5", R: 39.5728, d: 3.97, nd: 1.618, elemId: 3, sd: 17.5 },
    { label: "6", R: 112.3407, d: 1.133, nd: 1.0, elemId: 0, sd: 17.5 },
    { label: "7A", R: 79.0234, d: 0.2, nd: 1.5146, elemId: 4, sd: 7.5 },
    { label: "8", R: 65.0676, d: 0.9, nd: 1.91082, elemId: 5, sd: 7.5 },
    { label: "9", R: 12.3717, d: 4.1854, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "10", R: -23.873, d: 0.75, nd: 1.91082, elemId: 6, sd: 7.2 },
    { label: "11", R: 42.3962, d: 0.493, nd: 1.0, elemId: 0, sd: 7.2 },
    { label: "12", R: 28.5426, d: 3.373, nd: 1.92286, elemId: 7, sd: 7.5 },
    { label: "13", R: -24.6589, d: 1.015, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "14", R: -14.8587, d: 0.75, nd: 1.7725, elemId: 8, sd: 7.5 },
    { label: "15", R: -49.5781, d: 21.7353, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 5.509271927090943 },
    { label: "17A", R: 13.2954, d: 3.248, nd: 1.58313, elemId: 9, sd: 7.3 },
    { label: "18A", R: -32.0948, d: 0.2, nd: 1.0, elemId: 0, sd: 7.3 },
    { label: "19", R: 62.5251, d: 0.62, nd: 1.86188, elemId: 10, sd: 7.0 },
    { label: "20", R: 15.8491, d: 2.02, nd: 1.0, elemId: 0, sd: 7.0 },
    { label: "21A", R: 61.739, d: 2.85, nd: 1.58313, elemId: 11, sd: 7.4 },
    // Source s22/s23 collapsed at the s22 station; 0.0100 mm adhesive thickness is folded into L11.
    { label: "22", R: -15.2253, d: 0.61, nd: 1.90766, elemId: 12, sd: 7.4 },
    { label: "24", R: -25.8791, d: 1.02, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "25", R: 109.2068, d: 0.58, nd: 1.91082, elemId: 13, sd: 7.7 },
    // Source s26/s27 collapsed at the s26 station; 0.0100 mm adhesive thickness is folded into L13.
    { label: "26", R: 20.0859, d: 3.7347, nd: 1.61882, elemId: 14, sd: 7.7 },
    { label: "28", R: -16.2282, d: 1.4374, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "29", R: 51.3428, d: 1.683, nd: 1.80518, elemId: 15, sd: 7.5 },
    // Source s30/s31 collapsed at the s30 station; 0.0100 mm adhesive thickness is folded into L15.
    { label: "30", R: -75.7267, d: 0.61, nd: 1.8042, elemId: 16, sd: 7.5 },
    { label: "32", R: 15.6073, d: 12.1029, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "33", R: -18.5559, d: 0.9, nd: 1.80518, elemId: 17, sd: 9.0 },
    { label: "34", R: -28.5021, d: 1.03, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "35", R: -152.2485, d: 2.3543, nd: 1.72916, elemId: 18, sd: 11.2 },
    // Rear s37-s38 plate omitted; d is air-equivalent distance from source s36 to the image plane.
    { label: "36", R: -38.5471, d: 14.768987341772153, nd: 1.0, elemId: 0, sd: 11.2 },
  ],

  asph: {
    "7A": {
      K: 0,
      A4: 1.19556e-5,
      A6: -5.12224e-8,
      A8: 4.21707e-10,
      A10: 2.89639e-12,
      A12: 0,
      A14: 0,
    },
    "17A": {
      K: 0,
      A4: -4.81203e-5,
      A6: -6.04617e-7,
      A8: 2.40398e-8,
      A10: -4.15344e-10,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: 0,
      A4: 1.17843e-4,
      A6: -9.32847e-7,
      A8: 2.61092e-8,
      A10: -4.24829e-10,
      A12: 0,
      A14: 0,
    },
    "21A": {
      K: 0,
      A4: -5.75515e-6,
      A6: -1.80638e-7,
      A8: 2.44731e-9,
      A10: -5.4334e-12,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [14.43, 57.85, 145.4],
  zoomLabels: ["Wide", "Tele"],

  var: {
    "6": [
      [1.133, 1.133],
      [24.2823, 24.2823],
      [41.7003, 41.7003],
    ],
    "15": [
      [21.7353, 21.7353],
      [5.4909, 5.4909],
      [1.7, 1.7],
    ],
    "28": [
      [1.4374, 1.610542183445229],
      [6.0872, 7.5038201232408905],
      [3.6419, 9.49816160712323],
    ],
    "32": [
      [12.1029, 11.92975781655477],
      [7.4531, 6.03647987675911],
      [9.8984, 4.042138392876771],
    ],
    "34": [
      [1.03, 1.03],
      [19.1189, 19.1189],
      [24.825, 24.825],
    ],
  },

  varLabels: [
    ["6", "D6"],
    ["15", "D15"],
    ["28", "D28 / FOCUS"],
    ["32", "D32 / FOCUS"],
    ["34", "D34"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (-)", fromSurface: "7A", toSurface: "15" },
    { text: "G3 (+)", fromSurface: "17A", toSurface: "28" },
    { text: "G4 (-) FOCUS", fromSurface: "29", toSurface: "32" },
    { text: "G5 (-)", fromSurface: "33", toSurface: "34" },
    { text: "G6 (+) FIXED", fromSurface: "35", toSurface: "36" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "4" },
    { text: "H1", fromSurface: "7A", toSurface: "9" },
    { text: "D2", fromSurface: "21A", toSurface: "24" },
    { text: "D3", fromSurface: "25", toSurface: "28" },
    { text: "D4", fromSurface: "29", toSurface: "32" },
  ],

  closeFocusM: 0.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: production 0.5 m subject-to-image-plane MOD solved by translating G4 only; D28 + D32 is conserved at each zoom position. Patent Table 12 itself represents an approximately 1.0 m subject-to-image state.",

  nominalFno: [3.6909409460450076, 5.387525251923575, 5.9052849086316925],
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,
  maxFstop: 22,

  yScFill: 0.52,
} satisfies LensDataInput;

export default LENS_DATA;
