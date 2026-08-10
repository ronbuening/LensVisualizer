import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — TAMRON SP 70-300mm f/4-5.6 Di VC USD (A005)                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 8,228,605 B2, Example 2 (Arakawa / Wei; Tamron Co., Ltd.).     ║
 * ║ Correlation: 17 elements / 12 air-spaced groups, 135/full-frame coverage, ║
 * ║ four functional zoom groups (+/−/+/+), and IV-2 transverse VC subgroup.    ║
 * ║                                                                            ║
 * ║ DESIGN / SOURCE NORMALIZATION                                              ║
 * ║ - Scale factor s = 1.0. No production-focal-length rescaling is applied.   ║
 * ║ - Marketing 70–300mm is kept separate from the verified Example 2 design. ║
 * ║ - Example 2 summary gives 71.75–150.00–292.00mm. The adjacent spacing      ║
 * ║   table prints 292.50 in its tele header; that raw typo is preserved in    ║
 * ║   the audit, while the modeled tele state is 292.00mm. Independent trace   ║
 * ║   gives EFL ≈ 292.014mm.                                                   ║
 * ║ - Surface 13 is the published aperture stop. Its raw R=0.0000 is modeled   ║
 * ║   as one flat STO plane (R=1e15), not a refracting zero-radius surface.    ║
 * ║ - All refracting surfaces are spherical; no aspheres are published.        ║
 * ║                                                                            ║
 * ║ ZOOM / FOCUS                                                               ║
 * ║ - Zoom-only variables: D5, D12, D18, BF. All infinity/close pairs are      ║
 * ║   intentionally identical because Example 2 publishes no focus movement.  ║
 * ║ - D18 reverses (4.3009 → 2.0000 → 6.0952mm); the group-II path also        ║
 * ║   reverses in the fixed-image reference frame. Piecewise zoom interpolation║
 * ║   must retain the intermediate 150mm state.                                ║
 * ║ - Focus status: NO_INTERNAL_RECONSTRUCTION. Tamron's 1.5m production MOD   ║
 * ║   is metadata only and is not used to invent internal focus travel.        ║
 * ║                                                                            ║
 * ║ STOP / F-NUMBER                                                           ║
 * ║ - Patent stop diameter is not published. STO sd=13.9203457027mm is the     ║
 * ║   midpoint of the fixed-stop interval consistent with all three printed    ║
 * ║   F-number rounding intervals.                                             ║
 * ║ - nominalFno uses independently modeled values at the three zoom states:   ║
 * ║   4.1218709542, 4.8269570055, 5.8526252296.                                ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS                                                             ║
 * ║ - The patent does not publish clear semi-diameters. Values below are a     ║
 * ║   constrained model inferred from paraxial marginal/chief-ray envelopes,   ║
 * ║   the Fig. 12 optical section, the production 62mm filter context, and the ║
 * ║   current edge-thickness/rim-slope/cross-gap rules.                         ║
 * ║ - The 7→8 air gap binds group-II SD: 12.24mm gives sag intrusion           ║
 * ║   ≈0.89085×gap, below the default 0.90 limit.                              ║
 * ║ - The L115/L116 VC doublet is limited to 11.80mm by L115 edge thickness;   ║
 * ║   the modeled L115 rim retains ≈0.265mm physical edge thickness.           ║
 * ║ - Default on/off-axis rendered ray fans are contained by every cemented    ║
 * ║   interface at all three published zoom states in the local Stage 2 check. ║
 * ║                                                                            ║
 * ║ GLASS                                                                      ║
 * ║ - The patent publishes nd/νd only. Glass strings are conservative six-digit║
 * ║   coordinate classes; vendor/melt identity is intentionally not asserted. ║
 * ║ - No nC, nF, ng, or dPgF values are authored because none are published or ║
 * ║   independently established for the patent elements.                       ║
 * ║                                                                            ║
 * ║ No sensor cover glass, filter, inactive dummy plane, or mechanical part is ║
 * ║ included.                                                                  ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "tamron-a005-70-300-f4-5-6-vc",
  maker: "Tamron",
  name: "TAMRON SP 70-300mm f/4-5.6 Di VC USD",
  subtitle: "US 8,228,605 B2 Example 2 — A005 correlation",
  specs: [
    "17 ELEMENTS / 12 GROUPS",
    "DESIGN 71.75–292.00mm",
    "MODELED f/4.122–5.853",
    "2ω = 33.67°–8.46°",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: [70, 300],
  focalLengthDesign: [71.74990140102719, 292.0140449910131],
  apertureMarketing: 4,
  apertureDesign: 4.121870954179845,
  lensMounts: ["canon-ef", "nikon-f", "sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "US 8,228,605 B2",
  patentAuthors: ["Akio Arakawa", "Lai Wei"],
  patentAssignees: ["Tamron Co., Ltd."],
  patentYear: 2012,
  elementCount: 17,
  groupCount: 12,

  elements: [
    {
      id: 1,
      name: "L101",
      label: "Lens 101",
      diagramLabel: "101",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 353.34117447240004,
      glass: "487702 class (vendor unspecified)",
    },
    {
      id: 2,
      name: "L102",
      label: "Lens 102",
      diagramLabel: "102",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      fl: -239.0731491348908,
      glass: "699301 class (vendor unspecified)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L103",
      label: "Lens 103",
      diagramLabel: "103",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 94.9,
      fl: 99.39558025335364,
      glass: "439950 class (vendor unspecified)",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L104",
      label: "Lens 104",
      diagramLabel: "104",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -57.522736144013585,
      glass: "773496 class (vendor unspecified)",
    },
    {
      id: 5,
      name: "L105",
      label: "Lens 105",
      diagramLabel: "105",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -33.03829029292086,
      glass: "773496 class (vendor unspecified)",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L106",
      label: "Lens 106",
      diagramLabel: "106",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 42.14722863317934,
      glass: "847238 class (vendor unspecified)",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L107",
      label: "Lens 107",
      diagramLabel: "107",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.4,
      fl: -113.06905003326764,
      glass: "618634 class (vendor unspecified)",
    },
    {
      id: 8,
      name: "L109",
      label: "Lens 109",
      diagramLabel: "109",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 45.3912089340323,
      glass: "883408 class (vendor unspecified)",
    },
    {
      id: 9,
      name: "L110",
      label: "Lens 110",
      diagramLabel: "110",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 51.5922769268001,
      glass: "K-PFK80 / MC-FCD1-M20 class (production supplier unspecified)",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L111",
      label: "Lens 111",
      diagramLabel: "111",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.3,
      fl: -38.975233975684816,
      glass: "904313 class (vendor unspecified)",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L112",
      label: "Lens 112",
      diagramLabel: "112",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 58.31826512365908,
      glass: "487702 class (vendor unspecified)",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L113",
      label: "Lens 113",
      diagramLabel: "113",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.3,
      fl: -35.12420070651399,
      glass: "911353 class (vendor unspecified)",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L114",
      label: "Lens 114",
      diagramLabel: "114",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.2,
      fl: 48.06101519891134,
      glass: "517522 class (vendor unspecified)",
    },
    {
      id: 14,
      name: "L115",
      label: "Lens 115",
      diagramLabel: "115",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 33.3,
      fl: 33.21188224322557,
      glass: "806333 class (vendor unspecified)",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L116",
      label: "Lens 116",
      diagramLabel: "116",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -21.354102833765726,
      glass: "773496 class (vendor unspecified)",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L117",
      label: "Lens 117",
      diagramLabel: "117",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.7,
      fl: 55.2865614322084,
      glass: "806407 class (vendor unspecified)",
    },
    {
      id: 17,
      name: "L118",
      label: "Lens 118",
      diagramLabel: "118",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -68.67214951648853,
      glass: "773496 class (vendor unspecified)",
    },
  ],

  surfaces: [
    { label: "1", R: 343.8744, d: 3.8144, nd: 1.48749, elemId: 1, sd: 28.0 },
    { label: "2", R: -343.8744, d: 14.8434, nd: 1.0, elemId: 0, sd: 28.0 },
    { label: "3", R: 65.4212, d: 1.5, nd: 1.69895, elemId: 2, sd: 24.8 },
    { label: "4", R: 46.5711, d: 8.4101, nd: 1.43875, elemId: 3, sd: 24.8 },
    { label: "5", R: -648.0663, d: 3.5, nd: 1.0, elemId: 0, sd: 24.8 },
    { label: "6", R: -213.5045, d: 1.2, nd: 1.7725, elemId: 4, sd: 12.24 },
    { label: "7", R: 56.253, d: 3.0571, nd: 1.0, elemId: 0, sd: 12.24 },
    { label: "8", R: -55.1425, d: 1.2, nd: 1.7725, elemId: 5, sd: 12.24 },
    { label: "9", R: 47.9635, d: 4.1563, nd: 1.84666, elemId: 6, sd: 12.24 },
    { label: "10", R: -133.8489, d: 1.3243, nd: 1.0, elemId: 0, sd: 12.24 },
    { label: "11", R: -49.3822, d: 1.2, nd: 1.618, elemId: 7, sd: 13.4 },
    { label: "12", R: -169.9332, d: 31.2341, nd: 1.0, elemId: 0, sd: 13.4 },
    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 13.920345702691526 },
    { label: "14", R: 79.138, d: 4.3069, nd: 1.883, elemId: 8, sd: 14.5 },
    { label: "15", R: -79.138, d: 0.2, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "16", R: 56.1087, d: 5.8909, nd: 1.497, elemId: 9, sd: 14.5 },
    { label: "17", R: -45.5752, d: 1.2, nd: 1.90366, elemId: 10, sd: 14.5 },
    { label: "18", R: 156.9544, d: 4.3009, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "19", R: 49.6914, d: 5.071, nd: 1.48749, elemId: 11, sd: 14.3 },
    { label: "20", R: -64.2211, d: 1.0, nd: 1.91082, elemId: 12, sd: 14.3 },
    { label: "21", R: 64.2211, d: 0.2, nd: 1.0, elemId: 0, sd: 14.3 },
    { label: "22", R: 34.7404, d: 5.9458, nd: 1.51742, elemId: 13, sd: 14.1 },
    { label: "23", R: -82.3989, d: 14.1294, nd: 1.0, elemId: 0, sd: 14.1 },
    { label: "24", R: 1471.7974, d: 3.0, nd: 1.8061, elemId: 14, sd: 11.8 },
    { label: "25", R: -27.2433, d: 1.0, nd: 1.7725, elemId: 15, sd: 11.8 },
    { label: "26", R: 42.4849, d: 3.5054, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "27", R: 65.984, d: 3.1265, nd: 1.8061, elemId: 16, sd: 12.0 },
    { label: "28", R: -134.3988, d: 9.0657, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "29", R: -20.1696, d: 1.2, nd: 1.7725, elemId: 17, sd: 12.5 },
    { label: "30", R: -33.3862, d: 47.5369, nd: 1.0, elemId: 0, sd: 12.5 },
  ],

  asph: {},

  var: {
    "5": [
      [3.5, 3.5],
      [32.0254, 32.0254],
      [46.4397, 46.4397],
    ],
    "12": [
      [31.2341, 31.2341],
      [17.5696, 17.5696],
      [2.5, 2.5],
    ],
    "18": [
      [4.3009, 4.3009],
      [2.0, 2.0],
      [6.0952, 6.0952],
    ],
    "30": [
      [47.5369, 47.5369],
      [62.6975, 62.6975],
      [81.5776, 81.5776],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["12", "D12"],
    ["18", "D18"],
    ["30", "BF"],
  ],

  zoomPositions: [71.75, 150.0, 292.0],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "5" },
    { text: "II", fromSurface: "6", toSurface: "12" },
    { text: "III", fromSurface: "14", toSurface: "18" },
    { text: "IV", fromSurface: "19", toSurface: "30" },
    { text: "141", fromSurface: "19", toSurface: "23" },
    { text: "142", fromSurface: "24", toSurface: "26" },
    { text: "143", fromSurface: "27", toSurface: "30" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
    { text: "D5 / VC", fromSurface: "24", toSurface: "26" },
  ],

  closeFocusM: 1.5,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: Example 2 publishes infinity-focus zoom spacings only. Tamron's 1.5 m production MOD is retained as metadata; no internal close-focus motion is modeled.",

  nominalFno: [4.121870954179845, 4.826957005511833, 5.852625229580979],
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32, 45],
  apertureBlades: 9,
  maxFstop: 45,

  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
