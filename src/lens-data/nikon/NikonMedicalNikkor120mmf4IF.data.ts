import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║ STOP: the patent places the diaphragm 1.8 mm before r9 but omits its     ║
 * ║ diameter. The stop radius is derived from the design f-number, f/4.      ║
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
  schema: 2,
  key: "nikon-medical-nikkor-120mm-f4-if",
  maker: "Nikon",
  name: "NIKON MEDICAL-NIKKOR 120mm f/4 IF",
  subtitle: "US 4,437,734 A — Example 1; published internal-focus prescription",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "9 ELEMENTS / 6 GROUPS",
      "120mm f/4 (MARKETING)",
      "f = 121.168 mm (DESIGN)",
      "43.28 mm IMAGE CIRCLE",
      "INTERNAL FOCUS TO 1:1",
    ],
    elementCount: 9,
    groupCount: 6,
    focalLengthMm: { marketing: 120, design: 121.168 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "US 4,437,734 A",
    patentYear: 1984,
    authors: ["Yutaka Iizuka"],
    assignees: ["Nippon Kogaku K.K."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.5,
      indexReference: "d",
      focalLengthMm: -73.852541,
      glass: "805255 — dense-flint class (vendor unresolved)",
      apd: false,
      role: "Front member of the cemented positive component in G1.",
      diagramLabel: "L1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      focalLengthMm: 49.949544,
      glass: "713539 — lanthanum-crown class (vendor unresolved)",
      apd: false,
      role: "Positive rear member of the front cemented component in G1.",
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      focalLengthMm: 99.417567,
      glass: "713539 — lanthanum-crown class (vendor unresolved)",
      apd: false,
      role: "Rear positive component of the fixed first group G1.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 26.1,
      indexReference: "d",
      focalLengthMm: 63.12315,
      glass: "785261 — SF56A catalog equivalent (production supplier unspecified)",
      apd: false,
      role: "Front member of the moving cemented negative focus group G2.",
      diagramLabel: "L4",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      focalLengthMm: -28.958976,
      glass: "697556 — K-LaK14 catalog equivalent (production supplier unspecified)",
      apd: false,
      role: "Negative rear member of the translating focus group G2.",
      diagramLabel: "L5",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      focalLengthMm: 40.29088,
      glass: "713539 — lanthanum-crown class (vendor unresolved)",
      apd: false,
      role: "Positive front member of the first cemented component in G3.",
      diagramLabel: "L6",
      cemented: "D3",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.72342,
      vd: 38,
      indexReference: "d",
      focalLengthMm: -42.149938,
      glass: "723380 — S-BAH28 catalog equivalent (production supplier unspecified)",
      apd: false,
      role: "Negative rear member of the first cemented component in G3.",
      diagramLabel: "L7",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 26.1,
      indexReference: "d",
      focalLengthMm: -103.109652,
      glass: "785261 — SF56A catalog equivalent (production supplier unspecified)",
      apd: false,
      role: "Negative meniscus component in the fixed third group G3.",
      diagramLabel: "L8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.6228,
      vd: 56.7,
      indexReference: "d",
      focalLengthMm: 72.850553,
      glass: "N-SK10 catalog equivalent for 1.62280/56.7 (production supplier unspecified)",
      apd: false,
      role: "Final positive component of the fixed third group G3.",
      diagramLabel: "L9",
    },
  ],

  /* ── Surface prescription ──
   * Exactly one STO is inserted at the patent-published plane 1.8 mm before r9.
   * The published d8 is therefore represented as r8→STO plus the fixed STO→r9 1.8 mm gap.
   */
  surfaces: [
    { label: "1", R: 161.53, d: 1.5, sd: 24.0, medium: 1 },
    { label: "2", R: 43.284, d: 10.0, sd: 23.8, medium: 2 },
    { label: "3", R: -181.654, d: 0.2, sd: 22.7 },
    { label: "4", R: 73.861, d: 5.5, sd: 22.7, medium: 3 },
    { label: "5", R: -1704.595, sd: 22.0 },
    { label: "6", R: -108.243, d: 4.7, sd: 13.82, medium: 4 },
    { label: "7", R: -34.631, d: 2.3, sd: 13.8, medium: 5 },
    { label: "8", R: 49.671, sd: 13.7 },
    { label: "STO", R: "flat", d: 1.8 },
    { label: "9", R: 26.35, d: 13.6, sd: 18.0, medium: 6 },
    { label: "10", R: 250.0, d: 2.9, sd: 18.0, medium: 7 },
    { label: "11", R: 27.045, d: 25.7, sd: 18.0 },
    { label: "12", R: -15.884, d: 2.4, sd: 14.2, medium: 8 },
    { label: "13", R: -21.077, d: 0.1, sd: 14.2 },
    { label: "14", R: 70.7, d: 4.7, sd: 18.0, medium: 9 },
    { label: "15", R: -123.414, d: 58.798, sd: 18.2 },
  ],

  focus: {
    closeFocusM: 0.35,
    /* ── Published internal-focus keyframes ──
     * Infinity, -0.504x, and -1.002x are stored exactly.
     * At the intermediate state:
     * d5 = 16.141 mm and (r8→STO) = 19.392 mm, hence total published d8 = 21.192 mm.
     */
    keyframes: [0, 0.7528436831570505, 1],
    description:
      "PUBLISHED — G2 alone translates 30.242 mm toward the image from infinity to the patent -1.002x state; G1, G3, the diaphragm-to-G3 spacing, and the 58.798 mm back focus remain fixed. The published -0.504x intermediate state lies on the same linear translation.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "5": { label: "D5", values: [[0.925, 16.141, 31.167]] },
    "8": { label: "D8 TO STO", values: [[34.608, 19.392, 4.366]] },
  },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

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

  layout: { yScFill: 0.36 },
} satisfies LensDataV2Input;

export default LENS_DATA;
