import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — TAMRON SP 150-600mm f/5-6.3 Di VC USD (A011)                       ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Optical source: US 10,545,321 B2, Example 4, Tables 10-12 and Fig. 13.          ║
 * ║  Production correlation: strong convergent inference to Tamron Model A011;       ║
 * ║  the patent does not explicitly identify Example 4 as the production lens.       ║
 * ║  20 elements / 13 physical groups; 5 functional zoom groups; all spherical.          ║
 * ║                                                                                  ║
 * ║  Focus status: PUBLISHED. Table 12 moves G4 objectward at close focus by          ║
 * ║  1.6064 / 3.9322 / 11.1835 mm (wide / intermediate / tele), with D29 + D36      ║
 * ║  conserved at each zoom position. No focus reconstruction is used.               ║
 * ║                                                                                  ║
 * ║  Zoom variable gaps: source D6, D16, D29, D36, D42. D29 reverses with zoom.      ║
 * ║  In this normalized model source D36 is carried by surface 35 after the inactive  ║
 * ║  zero-power surface 36 is removed.                                                ║
 * ║                                                                                  ║
 * ║  NORMALIZATION (modeling, not patent correction):                                ║
 * ║  - Seven published 0.01-0.02 mm same-radius interlayers (nd 1.56732 / vd 42.84) ║
 * ║    are collapsed into direct cemented junctions. Their thickness is added to the ║
 * ║    downstream element span so later axial stations are preserved.                ║
 * ║  - Inactive source surface 36 is removed and its D36 gap is transferred to s35.  ║
 * ║  - The uncounted 2.000 mm rear plate (nd 1.51680) plus 1.000 mm air is omitted   ║
 * ║    and replaced by 2/1.51680 + 1 = 2.3185654008 mm of air-equivalent spacing.    ║
 * ║  - No uniform scale factor is applied.                                            ║
 * ║                                                                                  ║
 * ║  MODELED EFL after normalization: 152.226594 / 297.631820 / 582.810656 mm.       ║
 * ║  Patent Table 11 zoom control points remain 152.1633 / 297.4851 / 582.5200 mm.   ║
 * ║  nominalFno uses the normalized fixed-stop modeled values                        ║
 * ║  4.994152 / 5.871856 / 6.540615. Patent Table 11 gives                          ║
 * ║  4.99224 / 5.87742 / 6.53711 for the raw source design.                          ║
 * ║                                                                                  ║
 * ║  SEMI-DIAMETERS: not published. They are model-derived from the fixed paraxial   ║
 * ║  stop, on-axis marginal rays at every zoom state, published near-focus states,   ║
 * ║  0.6-field off-axis bundles, Fig. 13 proportions, and the A011 105.6 mm maximum  ║
 * ║  barrel diameter / 95 mm filter constraint. Geometry is checked with edge         ║
 * ║  thickness, actual spherical rim slope, cross-gap intrusion, and ray containment.║
 * ║  The L18-L20 rear envelopes were enlarged after a direct Fig. 13 audit.           ║
 * ║                                                                                  ║
 * ║  GLASS: Example 4 publishes only nd/vd and no vendor identities. Neutral six-    ║
 * ║  digit optical classes are retained. nC/nF/ng/dPgF are intentionally not         ║
 * ║  authored because neither the patent nor a vendor-neutral class establishes      ║
 * ║  those quantities; importing one vendor-equivalent dispersion would overstate    ║
 * ║  the glass identification.                                                       ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "tamron-sp-a011-150-600mm-f5-63-vc",
  maker: "Tamron",
  name: "TAMRON SP 150-600mm f/5-6.3 Di VC USD (A011)",
  subtitle: "US 10,545,321 B2 Example 4 — strong A011 correlation; normalized patent prescription",
  specs: [
    "20 ELEMENTS / 13 GROUPS",
    "PATENT ZOOM POINTS 152.1633-582.5200 mm",
    "MODELED F/4.99415-6.54062",
    "MARKETED 150-600mm f/5-6.3",
    "5-GROUP ZOOM / PUBLISHED INNER FOCUS",
    "ALL-SPHERICAL",
  ],
  focalLengthMarketing: [150, 600],
  focalLengthDesign: [152.226594, 582.810656],
  lensMounts: ["canon-ef", "nikon-f", "sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "US 10,545,321 B2",
  patentAuthors: ["Yoshito Iwasawa", "Jun Takahashi"],
  patentAssignees: ["Tamron Co., Ltd."],
  patentYear: 2020,
  elementCount: 20,
  groupCount: 13,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.34,
      fl: -308.380461,
      glass: "834373 class (vendor unresolved)",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 261.850974,
      glass: "497816 class (low-dispersion crown; vendor unresolved)",
      apd: "inferred",
      apdNote:
        "Production construction identifies three LD elements; the three 1.497/81.61 positions in this correlated patent design reproduce that count.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      fl: 286.339699,
      glass: "497816 class (low-dispersion crown; vendor unresolved)",
      apd: "inferred",
      apdNote:
        "Production construction identifies three LD elements; the three 1.497/81.61 positions in this correlated patent design reproduce that count.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.46,
      fl: 68.656149,
      glass: "805255 class (vendor unresolved)",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.67,
      fl: -62.234843,
      glass: "729547 class (vendor unresolved)",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.8045,
      vd: 39.64,
      fl: -69.035476,
      glass: "805396 class (vendor unresolved)",
      cemented: "D3",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.46,
      fl: 95.864269,
      glass: "805255 class (vendor unresolved)",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.31,
      fl: -71.392318,
      glass: "904313 class (vendor unresolved)",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 180.649215,
      glass: "497816 class (low-dispersion crown; vendor unresolved)",
      apd: "inferred",
      apdNote:
        "Production construction identifies three LD elements; the three 1.497/81.61 positions in this correlated patent design reproduce that count.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      fl: 85.956085,
      glass: "487704 class (vendor unresolved)",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      fl: 77.986297,
      glass: "487704 class (vendor unresolved)",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      fl: -80.83258,
      glass: "904313 class (vendor unresolved)",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13 (VC)",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.79,
      fl: -33.122332,
      glass: "744448 class (vendor unresolved)",
      cemented: "D5",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14 (VC)",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 33.27,
      fl: 46.125334,
      glass: "806333 class (vendor unresolved)",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.15,
      fl: 63.613666,
      glass: "517522 class (vendor unresolved)",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.96,
      fl: 48.509508,
      glass: "518590 class (vendor unresolved)",
      cemented: "D6",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.31,
      fl: -51.941769,
      glass: "904313 class (vendor unresolved)",
      cemented: "D6",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: -40.556861,
      glass: "835427 class (vendor unresolved)",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.44,
      fl: -39.411651,
      glass: "487704 class (vendor unresolved)",
      cemented: "D7",
    },
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Biconvex Positive",
      nd: 1.72047,
      vd: 34.71,
      fl: 35.612416,
      glass: "720347 class (vendor unresolved)",
      cemented: "D7",
    },
  ],

  surfaces: [
    { label: "1", R: 426.3567, d: 3.0, nd: 1.834, elemId: 1, sd: 47.0 },
    { label: "2", R: 159.9066, d: 10.07, nd: 1.497, elemId: 2, sd: 47.2 },
    { label: "4", R: -684.4955, d: 0.3, nd: 1.0, elemId: 0, sd: 47.0 },
    { label: "5", R: 140.0775, d: 9.1, nd: 1.497, elemId: 3, sd: 47.0 },
    { label: "6", R: 8733.4134, d: 64.0, nd: 1.0, elemId: 0, sd: 45.0 },
    { label: "7", R: 558.1944, d: 4.4, nd: 1.80518, elemId: 4, sd: 19.0 },
    { label: "8", R: -61.1413, d: 1.61, nd: 1.72916, elemId: 5, sd: 19.0 },
    { label: "10", R: 177.9802, d: 2.6, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "11", R: 583.7869, d: 1.5, nd: 1.8045, elemId: 6, sd: 18.2 },
    { label: "12", R: 50.6562, d: 3.41, nd: 1.80518, elemId: 7, sd: 18.0 },
    { label: "14", R: 142.9473, d: 3.7, nd: 1.0, elemId: 0, sd: 17.5 },
    { label: "15", R: -73.851, d: 1.5, nd: 1.90366, elemId: 8, sd: 17.3 },
    { label: "16", R: 515.2175, d: 34.0551, nd: 1.0, elemId: 0, sd: 17.3 },
    { label: "17", R: 432.7323, d: 4.1, nd: 1.497, elemId: 9, sd: 17.5 },
    { label: "18", R: -112.931, d: 0.2, nd: 1.0, elemId: 0, sd: 17.5 },
    { label: "19", R: 73.5789, d: 5.2184, nd: 1.48749, elemId: 10, sd: 17.5 },
    { label: "20", R: -95.0713, d: 0.2, nd: 1.0, elemId: 0, sd: 17.3 },
    { label: "21", R: 87.0854, d: 5.1506, nd: 1.48749, elemId: 11, sd: 17.3 },
    { label: "22", R: -66.1655, d: 1.51, nd: 1.90366, elemId: 12, sd: 17.0 },
    { label: "24", R: -710.1255, d: 12.55, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "25", R: -236.4657, d: 0.9, nd: 1.744, elemId: 13, sd: 14.2 },
    { label: "26", R: 27.5546, d: 4.1689, nd: 1.8061, elemId: 14, sd: 14.2 },
    { label: "28", R: 99.2354, d: 4.55, nd: 1.0, elemId: 0, sd: 13.7 },
    { label: "STO", R: 1e15, d: 27.798, nd: 1.0, elemId: 0, sd: 12.241 },
    { label: "30", R: 65.1174, d: 4.1342, nd: 1.51742, elemId: 15, sd: 13.2 },
    { label: "31", R: -65.1174, d: 0.2, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "32", R: 50.5972, d: 5.4, nd: 1.51823, elemId: 16, sd: 13.0 },
    { label: "33", R: -48.143, d: 1.31, nd: 1.90366, elemId: 17, sd: 12.5 },
    { label: "35", R: 1899.0359, d: 13.6386, nd: 1.0, elemId: 0, sd: 12.3 },
    { label: "37", R: 113.8672, d: 2.28, nd: 1.83481, elemId: 18, sd: 14.0 },
    { label: "38", R: 25.8597, d: 6.9561, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "39", R: -55.4034, d: 1.3, nd: 1.48749, elemId: 19, sd: 14.5 },
    { label: "40", R: 29.6386, d: 5.91, nd: 1.72047, elemId: 20, sd: 15.0 },
    { label: "42", R: -175.0744, d: 53.31856540084388, nd: 1.0, elemId: 0, sd: 15.0 },
  ],

  asph: {},

  var: {
    "6": [
      [64.0, 64.0],
      [111.2643, 111.2643],
      [142.44, 142.44],
    ],
    "16": [
      [34.0551, 34.0551],
      [23.2139, 23.2139],
      [2.04, 2.04],
    ],
    STO: [
      [27.798, 26.1916],
      [17.1857, 13.2535],
      [24.0639, 12.8804],
    ],
    "35": [
      [13.6386, 15.245],
      [8.2816, 12.2138],
      [2.5, 13.6835],
    ],
    "42": [
      [53.31856540084388, 53.31856540084388],
      [80.12916540084387, 80.12916540084387],
      [100.20656540084389, 100.20656540084389],
    ],
  },

  varLabels: [
    ["6", "D6"],
    ["16", "D16"],
    ["STO", "D29"],
    ["35", "D36"],
    ["42", "BF (air-eq.)"],
  ],

  zoomPositions: [152.1633, 297.4851, 582.52],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7", toSurface: "16" },
    { text: "G3", fromSurface: "17", toSurface: "28" },
    { text: "G4", fromSurface: "30", toSurface: "35" },
    { text: "G5", fromSurface: "37", toSurface: "42" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "4" },
    { text: "D2", fromSurface: "7", toSurface: "10" },
    { text: "D3", fromSurface: "11", toSurface: "14" },
    { text: "D4", fromSurface: "21", toSurface: "24" },
    { text: "D5 (VC)", fromSurface: "25", toSurface: "28" },
    { text: "D6", fromSurface: "32", toSurface: "35" },
    { text: "D7", fromSurface: "39", toSurface: "42" },
  ],

  closeFocusM: 2.7,
  focusDescription:
    "PUBLISHED inner focus: G4 moves objectward at close focus; source D29/D36 pairs conserve their sum at each zoom position.",

  nominalFno: [4.994152, 5.871856, 6.540615],
  fstopSeries: [5, 5.6, 6.3, 8, 11, 16, 22, 32, 40],
  maxFstop: 40,
  apertureBlades: 9,

  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
