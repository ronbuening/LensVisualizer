import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON PC-NIKKOR 35mm f/2.8                                           ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: DE 1 497 540 A1, Beispiel III (Nippon Kogaku K.K.; Ikuo Mori).       ║
 * ║ Eight-element / seven-group all-spherical retrofocus design.                       ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION — the patent publishes no focus states.  ║
 * ║                                                                                    ║
 * ║ SCALING: the patent is normalized to f=100. All dimensional prescription values   ║
 * ║ are scaled ×0.35 for correlation to the marketed 35 mm lens. There are no         ║
 * ║ aspheres, so no A_p scaling is required.                                           ║
 * ║                                                                                    ║
 * ║ SOURCE CORRECTION: Beispiel III prints r11=-176.6. This is inconsistent with the  ║
 * ║ patent's negative-L6 description, homologous Beispiel IV, and the patent's own     ║
 * ║ f=100 / Schnittweite=130.5 first-order values. The modeled value is r11=+176.6,    ║
 * ║ independently yielding EFL=99.6305066 and BFD=130.5037756 before scaling.          ║
 * ║                                                                                    ║
 * ║ STOP: the patent specifies only that the diaphragm lies between L5 and L6. Its     ║
 * ║ axial station is inferred from Abb. 3 at 72% of d9 from r9 toward r10. Stop SD is  ║
 * ║ solved paraxially so the scaled corrected prescription is f/2.8 at infinity.       ║
 * ║                                                                                    ║
 * ║ SEMI-DIAMETERS: not tabulated by the patent. Values are constrained from Abb. 3,  ║
 * ║ the paraxial marginal/chief-ray envelope, and current edge-thickness, rim-slope,   ║
 * ║ cross-gap, off-axis-containment, and render-trim rules. They are modeling values,  ║
 * ║ not patent measurements.                                                           ║
 * ║                                                                                    ║
 * ║ GLASS: the patent publishes only index/Abbe coordinates. Vendor-specific melts    ║
 * ║ are therefore not asserted; class/code labels preserve the source coordinates.    ║
 * ║ Coefficient-backed catalog equivalents are named only when coordinate-compatible; ║
 * ║ no label asserts the production supplier or adds unpublished spectral values.     ║
 * ║                                                                                    ║
 * ║ PRODUCT METADATA: Nikon's historical account identifies the May 1968 35mm f/2.8   ║
 * ║ generation as 7 groups / 8 elements. The required closeFocusM catalog field uses   ║
 * ║ the 0.3 m value published in Nikon's later same-name instruction manual, but it    ║
 * ║ is not used to reconstruct patent focus motion because that later manual describes ║
 * ║ a 7-element / 7-group optical revision.                                            ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-pc-nikkor-35mm-f28",
  maker: "Nikon",
  name: "NIKON PC-NIKKOR 35mm f/2.8",
  subtitle: "DE 1 497 540 A1 — Example III — 1968 7-group / 8-element production correlation",
  specs: ["8 ELEMENTS / 7 GROUPS", "f = 34.8707 mm DESIGN / 35 mm MARKETED", "F/2.8", "2ω = 75° PATENT FIELD"],

  focalLengthMarketing: 35,
  focalLengthDesign: 34.87067732544124,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "DE 1 497 540 A1",
  patentAuthors: ["Ikuo Mori"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1969,
  elementCount: 8,
  groupCount: 7,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 75,
    maxTraceFieldDeg: 37.5,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6516,
      vd: 58.5,
      fl: -65.58872045520543,
      glass: "652585 — lanthanum crown class",
      role: "First negative meniscus of the retrofocus front group, convex toward the object.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6223,
      vd: 53.1,
      fl: -89.7461055924426,
      glass: "622531 — dense barium / SSK-class",
      role: "Second negative meniscus of the front retrofocus group, convex toward the object.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.6727,
      vd: 32.2,
      fl: 213.25480411778904,
      glass: "673322 — SF5-class",
      role: "Weak positive element beginning the rear converging section.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.3,
      fl: 23.083370073933388,
      glass: "720503 — lanthanum crown class",
      cemented: "D1",
      role: "Strong positive member of the cemented L4/L5 doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.50137,
      vd: 56.5,
      fl: -76.97515056283237,
      glass: "K10 catalog equivalent (patent 501565; production supplier unspecified)",
      cemented: "D1",
      role: "Negative member cemented to L4; the pair remains net positive.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.3,
      fl: -21.854976190360833,
      glass: "728283 — SF10-class",
      role: "Air-spaced negative rear element immediately behind the diaphragm.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: 41.5404768243343,
      glass: "713539 — lanthanum crown class",
      role: "Positive rear meniscus, concave toward the object.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.6516,
      vd: 58.5,
      fl: 55.00426542849768,
      glass: "652585 — lanthanum crown class",
      role: "Final positive meniscus, concave toward the object.",
    },
  ],

  surfaces: [
    { label: "1", R: 36.1025, d: 1.9565, nd: 1.6516, elemId: 1, sd: 17.0 },
    { label: "2", R: 19.152, d: 4.6515, nd: 1.0, elemId: 0, sd: 14.2 },
    { label: "3", R: 45.2795, d: 1.3475, nd: 1.6223, elemId: 2, sd: 14.5 },
    { label: "4", R: 24.7205, d: 11.0145, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "5", R: 342.65, d: 6.118, nd: 1.6727, elemId: 3, sd: 13.5 },
    { label: "6", R: -245.0, d: 0.1225, nd: 1.0, elemId: 0, sd: 13.3 },
    { label: "7", R: 34.02, d: 10.892, nd: 1.72, elemId: 4, sd: 12.8 },
    { label: "8", R: -28.14, d: 1.5925, nd: 1.50137, elemId: 5, sd: 10.5 },
    { label: "9", R: -105.8575, d: 4.40496, nd: 1.0, elemId: 0, sd: 10.3 },
    { label: "STO", R: 1e15, d: 1.71304, nd: 1.0, elemId: 0, sd: 7.71767195972492 },
    { label: "10", R: -22.1515, d: 4.9, nd: 1.72825, elemId: 6, sd: 9.0 },
    { label: "11", R: 61.81, d: 1.225, nd: 1.0, elemId: 0, sd: 8.7 },
    { label: "12", R: -81.991, d: 2.45, nd: 1.713, elemId: 7, sd: 9.3 },
    { label: "13", R: -22.029, d: 0.1225, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "14", R: -375.69, d: 2.2015, nd: 1.6516, elemId: 8, sd: 9.8 },
    { label: "15", R: -32.795, d: 45.67632147392648, nd: 1.0, elemId: 0, sd: 10.2 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "4" },
    { text: "REAR", fromSurface: "5", toSurface: "15" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.3,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: DE 1 497 540 A1 Example III publishes only the infinity prescription; no internal focus spacing is modeled. The 0.3 m catalog MFD is metadata from a later same-name Nikon manual and does not define a patent focus state.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
