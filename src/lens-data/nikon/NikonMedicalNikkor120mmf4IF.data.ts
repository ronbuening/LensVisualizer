import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON MEDICAL-NIKKOR 120mm f/4 IF                           ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 4,437,734 A, Example 1 (Yutaka Iizuka / Nippon Kogaku K.K.). ║
 * ║ The patent prescription is retained at its native scale: f = 121.168 mm. ║
 * ║ Production identity is the Nikon Medical-Nikkor 120mm f/4 IF.            ║
 * ║                                                                            ║
 * ║ 9 elements / 6 air-separated components / 3 functional groups.          ║
 * ║ All 15 refracting surfaces are spherical.                                ║
 * ║ Focus status: PUBLISHED. Only the negative second group translates.      ║
 * ║ Published d5+d8 remains 37.333 mm at infinity, -0.504x, and -1.002x.    ║
 * ║                                                                            ║
 * ║ STOP: the patent places the diaphragm 1.8 mm before r9 but omits its      ║
 * ║ diameter. The modeled stop semi-diameter (13.14679406 mm) is a paraxial ║
 * ║ inference chosen to realize the patent's stated f/4 at infinity.         ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: not published. High-resolution Fig. 3 review supports an ║
 * ║ 18 mm D3 rim and 14.2 mm L8 rim. G2 remains at its geometry-safe ceiling.║
 * ║ These modeling inferences also preserve the 43.28 mm image circle,       ║
 * ║ positive edge thickness, rim slope, cross-gap clearance, and ray bounds. ║
 * ║                                                                            ║
 * ║ GLASS: the patent publishes only nd/vd. Labels retain those coordinates  ║
 * ║ and use compatible curves without identifying production suppliers. It  ║
 * ║ supplies no nC, nF, ng, or dPgF, so no APD claim is encoded.              ║
 * ║                                                                            ║
 * ║ The removable close-up attachment used above 1x in the production system ║
 * ║ is not part of Example 1 and is excluded from this base prescription.    ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-medical-nikkor-120mm-f4-if",
  maker: "Nikon",
  name: "NIKON MEDICAL-NIKKOR 120mm f/4 IF",
  subtitle: "US 4,437,734 A — Example 1; published internal-focus prescription",
  specs: [
    "9 ELEMENTS / 6 GROUPS",
    "120mm f/4 (MARKETING)",
    "f = 121.168 mm (DESIGN)",
    "43.28 mm IMAGE CIRCLE",
    "INTERNAL FOCUS TO 1:1",
  ],

  focalLengthMarketing: 120,
  focalLengthDesign: 121.168,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,437,734 A",
  patentAuthors: ["Yutaka Iizuka"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1984,
  elementCount: 9,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "L1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.5,
      indexReference: "d",
      fl: -73.852541,
      glass: "805255 — dense-flint class (vendor unresolved)",
      apd: false,
      cemented: "D1",
      role: "Front member of the cemented positive component in G1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      diagramLabel: "L2",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      fl: 49.949544,
      glass: "713539 — lanthanum-crown class (vendor unresolved)",
      apd: false,
      cemented: "D1",
      role: "Positive rear member of the front cemented component in G1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      diagramLabel: "L3",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      fl: 99.417567,
      glass: "713539 — lanthanum-crown class (vendor unresolved)",
      apd: false,
      role: "Rear positive component of the fixed first group G1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      diagramLabel: "L4",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 26.1,
      indexReference: "d",
      fl: 63.12315,
      glass: "785261 — SF56A catalog equivalent (production supplier unspecified)",
      apd: false,
      cemented: "D2",
      role: "Front member of the moving cemented negative focus group G2.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      diagramLabel: "L5",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      fl: -28.958976,
      glass: "697556 — K-LaK14 catalog equivalent (production supplier unspecified)",
      apd: false,
      cemented: "D2",
      role: "Negative rear member of the translating focus group G2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      diagramLabel: "L6",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      fl: 40.29088,
      glass: "713539 — lanthanum-crown class (vendor unresolved)",
      apd: false,
      cemented: "D3",
      role: "Positive front member of the first cemented component in G3.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      diagramLabel: "L7",
      type: "Negative Meniscus",
      nd: 1.72342,
      vd: 38,
      indexReference: "d",
      fl: -42.149938,
      glass: "723380 — S-BAH28 catalog equivalent (production supplier unspecified)",
      apd: false,
      cemented: "D3",
      role: "Negative rear member of the first cemented component in G3.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      diagramLabel: "L8",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 26.1,
      indexReference: "d",
      fl: -103.109652,
      glass: "785261 — SF56A catalog equivalent (production supplier unspecified)",
      apd: false,
      role: "Negative meniscus component in the fixed third group G3.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      diagramLabel: "L9",
      type: "Biconvex Positive",
      nd: 1.6228,
      vd: 56.7,
      indexReference: "d",
      fl: 72.850553,
      glass: "N-SK10 catalog equivalent for 1.62280/56.7 (production supplier unspecified)",
      apd: false,
      role: "Final positive component of the fixed third group G3.",
    },
  ],

  /* ── Surface prescription ──
   * Exactly one STO is inserted at the patent-published plane 1.8 mm before r9.
   * The published d8 is therefore represented as r8→STO plus the fixed STO→r9 1.8 mm gap.
   */
  surfaces: [
    { label: "1", R: 161.53, d: 1.5, nd: 1.80518, elemId: 1, sd: 24.0 },
    { label: "2", R: 43.284, d: 10.0, nd: 1.713, elemId: 2, sd: 23.8 },
    { label: "3", R: -181.654, d: 0.2, nd: 1.0, elemId: 0, sd: 22.7 },
    { label: "4", R: 73.861, d: 5.5, nd: 1.713, elemId: 3, sd: 22.7 },
    { label: "5", R: -1704.595, d: 0.925, nd: 1.0, elemId: 0, sd: 22.0 },
    { label: "6", R: -108.243, d: 4.7, nd: 1.7847, elemId: 4, sd: 13.82 },
    { label: "7", R: -34.631, d: 2.3, nd: 1.6968, elemId: 5, sd: 13.8 },
    { label: "8", R: 49.671, d: 34.608, nd: 1.0, elemId: 0, sd: 13.7 },
    { label: "STO", R: 1e15, d: 1.8, nd: 1.0, elemId: 0, sd: 13.14679405995178 },
    { label: "9", R: 26.35, d: 13.6, nd: 1.713, elemId: 6, sd: 18.0 },
    { label: "10", R: 250.0, d: 2.9, nd: 1.72342, elemId: 7, sd: 18.0 },
    { label: "11", R: 27.045, d: 25.7, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "12", R: -15.884, d: 2.4, nd: 1.7847, elemId: 8, sd: 14.2 },
    { label: "13", R: -21.077, d: 0.1, nd: 1.0, elemId: 0, sd: 14.2 },
    { label: "14", R: 70.7, d: 4.7, nd: 1.6228, elemId: 9, sd: 18.0 },
    { label: "15", R: -123.414, d: 58.798, nd: 1.0, elemId: 0, sd: 18.2 },
  ],

  asph: {},

  /* ── Published internal-focus keyframes ──
   * Infinity, -0.504x, and -1.002x are stored exactly.
   * At the intermediate state:
   * d5 = 16.141 mm and (r8→STO) = 19.392 mm, hence total published d8 = 21.192 mm.
   */
  focusPositions: [0, 0.7528436831570505, 1],
  var: {
    "5": [0.925, 16.141, 31.167],
    "8": [34.608, 19.392, 4.366],
  },
  varLabels: [
    ["5", "D5"],
    ["8", "D8 TO STO"],
  ],
  focusDescription: "PUBLISHED — G2 alone translates 30.242 mm toward the image from infinity to the patent -1.002x state; G1, G3, the diaphragm-to-G3 spacing, and the 58.798 mm back focus remain fixed. The published -0.504x intermediate state lies on the same linear translation.",

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−) / FOCUS", fromSurface: "6", toSurface: "8" },
    { text: "G3 (+)", fromSurface: "9", toSurface: "15" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
  ],

  closeFocusM: 0.35,
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
