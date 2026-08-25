import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF-S 55-250mm f/4-5.6 IS                                ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Patent source: US 2008/0112063 A1, Numerical Embodiment 2 (T. Hatada).      ║
 * ║ Production correlation: original Canon EF-S55-250mm f/4-5.6 IS.             ║
 * ║ 12 elements / 10 air-separated groups; all spherical; 3 zoom units (+/-/+). ║
 * ║ No uniform scale is applied: patent EFL is ~56.90-241.32 mm versus the      ║
 * ║ marketed 55-250 mm range.                                                    ║
 * ║                                                                              ║
 * ║ ZOOM / FOCUS MODEL                                                           ║
 * ║   D5  (surface 5): zoom + focus. The three patent infinity nodes are         ║
 * ║       retained; close-focus values are a CONSTRAINED_RECONSTRUCTION.         ║
 * ║   D10 (surface 10): zoom only. The middle node preserves the published       ║
 * ║       reversal of L2; no source value is altered to remove it.               ║
 * ║   BF  (surface 23): computed paraxial BFD because Example 2 prints d23 as    ║
 * ║       Variable but omits its spacing row.                                     ║
 * ║   Focus reconstruction: patent ¶0081 constrains focus to axial L1 motion;    ║
 * ║       Canon's 1.1 m MFD is measured from the image/focal plane. L2, L3, and   ║
 * ║       the image plane are fixed while L1 is code-solved at each zoom node.   ║
 * ║                                                                              ║
 * ║ APERTURE MODEL                                                               ║
 * ║   Patent endpoint Fno values are 4.16 and 5.88. The required middle node     ║
 * ║   uses Fno=5.129132321041215, a disclosed linear interpolation in the        ║
 * ║   patent focal-length coordinate. The STO sd below is the inferred wide-end  ║
 * ║   physical stop radius; per-zoom nominalFno controls the viewer aperture.     ║
 * ║                                                                              ║
 * ║ SEMI-DIAMETERS                                                               ║
 * ║   Example 2 publishes no clear-aperture table. SDs are modeling inferences   ║
 * ║   derived from marginal/chief-ray envelopes, the 13.66 mm image height,      ║
 * ║   endpoint pupil geometry, Fig. 5 proportions, and geometric validation.     ║
 * ║   They pass positive edge thickness, actual spherical rim-slope, all-state   ║
 * ║   shared-gap intrusion, and default off-axis containment checks.              ║
 * ║                                                                              ║
 * ║ GLASS / SPECTRAL DATA                                                        ║
 * ║   The patent publishes only nd/vd. nC, nF, ng, and dPgF are catalog-derived  ║
 * ║   from coordinate-compatible public catalog equivalents; not patent facts.   ║
 * ║   G5 is catalog-unresolved: its line indices are a documented spectral proxy ║
 * ║   fitted to the patent nd/vd while retaining nearest S-TIH53WN dPgF=+0.0179. ║
 * ║   G6 uses exact-coordinate CDGM H-ZLaF50E; vendor identity is not asserted.  ║
 * ║                                                                              ║
 * ║ SOURCE INCLUSIONS / EXCLUSIONS                                               ║
 * ║   Active prescription only. No sensor cover glass, filter, inactive dummy,   ║
 * ║   flare-cutter, folded path, or mechanical plane is added.                    ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-ef-s-55-250-f4-56-is",
  maker: "Canon",
  name: "CANON EF-S 55-250mm f/4-5.6 IS",
  subtitle: "US 2008/0112063 A1, Example 2 — production correlation; unscaled patent prescription",
  specs: [
    "12 ELEMENTS / 10 GROUPS",
    "PATENT EFL 56.9-241.3 mm",
    "F/4.16-5.88 PATENT ENDPOINTS",
    "3-UNIT +/−/+ ZOOM; L2 IS UNIT",
    "1 UD-CLASS ELEMENT",
  ],

  focalLengthMarketing: [55, 250],
  focalLengthDesign: [56.89803314244613, 241.31565770112968],
  lensMounts: ["canon-ef-s"],
  imageFormat: "aps-c",
  patentNumber: "US 2008/0112063 A1",
  patentAuthors: ["Takahiro Hatada"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2008,
  elementCount: 12,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L1 Element 1",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.14,
      fl: 142.8438280075935,
      glass: "S-BSL7 (OHARA-equivalent; exact patent coordinate match)",
      nC: 1.51386,
      nF: 1.52191,
      ng: 1.52621,
      dPgF: -0.0024,
      role: "Positive front collector in the first zoom/focus unit.",
    },
    {
      id: 2,
      name: "L12",
      label: "L1 Element 2",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 34.97,
      fl: -118.02127955686271,
      glass: "S-LAM66 (OHARA-equivalent; exact patent coordinate match)",
      nC: 1.79427,
      nF: 1.81718,
      ng: 1.83061,
      dPgF: 0.0015,
      cemented: "D1",
      role: "Negative member of the L1 cemented pair.",
    },
    {
      id: 3,
      name: "L13",
      label: "L1 Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      fl: 95.7633626092133,
      glass: "S-FPL51 (OHARA-equivalent; exact patent coordinate match)",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.028,
      cemented: "D1",
      role: "Low-dispersion positive member; strongest coordinate-based candidate for Canon's one marketed UD element.",
    },
    {
      id: 4,
      name: "L21",
      label: "L2 Element 1",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.87,
      fl: -24.643170680345932,
      glass: "S-LAL8 (OHARA-equivalent; exact patent coordinate match)",
      nC: 1.70897,
      nF: 1.72221,
      ng: 1.72943,
      dPgF: -0.0084,
      cemented: "D2",
      role: "Negative member of the cemented image-stabilizing L2 unit.",
    },
    {
      id: 5,
      name: "L22",
      label: "L2 Element 2",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.93,
      fl: 37.79081808402992,
      glass: "Unmatched (847239 high-index flint; patent vd=23.93; nearest OHARA S-TIH53WN vd=23.86)",
      nC: 1.8365583532390366,
      nF: 1.8719390469289656,
      ng: 1.8938979978065582,
      dPgF: 0.0179,
      cemented: "D2",
      role: "Positive cemented partner in L2; spectral line indices are a documented proxy, not a catalog identity claim.",
    },
    {
      id: 6,
      name: "L23",
      label: "L2 Element 3",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.57,
      fl: -46.76625339617364,
      glass: "H-ZLaF50E (CDGM-equivalent; exact patent coordinate match)",
      nC: 1.798821,
      nF: 1.816084,
      ng: 1.825709,
      dPgF: -0.0088,
      role: "Rear negative element of the transversely shifted L2 image-stabilizing unit.",
    },
    {
      id: 7,
      name: "L31",
      label: "L3 Element 1",
      type: "Biconvex Positive",
      nd: 1.63854,
      vd: 55.38,
      fl: 53.23888131956188,
      glass: "S-BSM18 (OHARA-equivalent; exact patent coordinate match)",
      nC: 1.63505,
      nF: 1.64658,
      ng: 1.65291,
      dPgF: -0.0035,
      role: "Positive front element of the third zoom unit.",
    },
    {
      id: 8,
      name: "L32",
      label: "L3 Element 2",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.64,
      fl: 65.0554012993556,
      glass: "S-BSM14 (OHARA-equivalent; exact patent coordinate match)",
      nC: 1.60008,
      nF: 1.61002,
      ng: 1.61541,
      dPgF: -0.0019,
      role: "Positive element immediately objectward of the aperture stop.",
    },
    {
      id: 9,
      name: "L33",
      label: "L3 Element 3",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.23,
      fl: 71.27694561293687,
      glass: "S-FSL5 (OHARA-equivalent; exact patent coordinate match)",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      dPgF: 0.0022,
      role: "Low-index positive element immediately imageward of the stop.",
    },
    {
      id: 10,
      name: "L34",
      label: "L3 Element 4",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      fl: -41.307185179830554,
      glass: "S-TIH53 (OHARA-equivalent; exact patent coordinate match)",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
      dPgF: 0.0175,
      role: "High-index negative element in the rear half of L3.",
    },
    {
      id: 11,
      name: "L35",
      label: "L3 Element 5",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.16,
      fl: -45.406313287229686,
      glass: "S-LAH60 (OHARA-equivalent; exact patent coordinate match)",
      nC: 1.82738,
      nF: 1.84982,
      ng: 1.86278,
      dPgF: -0.0037,
      role: "Negative meniscus in the rear relay section of L3.",
    },
    {
      id: 12,
      name: "L36",
      label: "L3 Element 6",
      type: "Biconvex Positive",
      nd: 1.68893,
      vd: 31.07,
      fl: 54.60024437604166,
      glass: "S-TIM28 (OHARA-equivalent; exact patent coordinate match)",
      nC: 1.6825,
      nF: 1.70467,
      ng: 1.71797,
      dPgF: 0.0092,
      role: "Final positive element of L3 before the image space.",
    },
  ],

  surfaces: [
    { label: "1", R: 80.99515, d: 4.75045, nd: 1.51633, elemId: 1, sd: 25.0 },
    { label: "2", R: -808.56, d: 0.15, nd: 1.0, elemId: 0, sd: 24.8 },
    { label: "3", R: 77.54341, d: 2.6, nd: 1.801, elemId: 2, sd: 21.6 },
    { label: "4", R: 41.96489, d: 5.6768, nd: 1.497, elemId: 3, sd: 21.8 },
    { label: "5", R: 338.8565, d: 7.19326, nd: 1.0, elemId: 0, sd: 21.6 },
    { label: "6", R: -209.128, d: 1.4, nd: 1.713, elemId: 4, sd: 11.2 },
    { label: "7", R: 19.23569, d: 3.20257, nd: 1.84666, elemId: 5, sd: 11.4 },
    { label: "8", R: 44.55107, d: 2.32179, nd: 1.0, elemId: 0, sd: 9.7 },
    { label: "9", R: -43.5451, d: 1.1, nd: 1.804, elemId: 6, sd: 9.52 },
    { label: "10", R: 278.5068, d: 31.47406, nd: 1.0, elemId: 0, sd: 9.7 },
    { label: "11", R: 52.26289, d: 2.99623, nd: 1.63854, elemId: 7, sd: 10.7 },
    { label: "12", R: -95.0852, d: 0.15, nd: 1.0, elemId: 0, sd: 10.7 },
    { label: "13", R: 47.03856, d: 2.89978, nd: 1.60311, elemId: 8, sd: 10.7 },
    { label: "14", R: -231.037, d: 1.56909, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "STO", R: 1e15, d: 0.49801, nd: 1.0, elemId: 0, sd: 9.838561565764264 },
    { label: "16", R: 30.2435, d: 2.78922, nd: 1.48749, elemId: 9, sd: 10.0 },
    { label: "17", R: 226.3014, d: 0.60067, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "18", R: -125.291, d: 3.02154, nd: 1.84666, elemId: 10, sd: 9.0 },
    { label: "19", R: 49.05197, d: 11.42731, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "20", R: 65.37414, d: 2.01377, nd: 1.834, elemId: 11, sd: 7.2 },
    { label: "21", R: 23.64292, d: 8.70092, nd: 1.0, elemId: 0, sd: 7.1 },
    { label: "22", R: 47.7313, d: 2.36466, nd: 1.68893, elemId: 12, sd: 7.4 },
    { label: "23", R: -173.907, d: 52.45312963327591, nd: 1.0, elemId: 0, sd: 7.4 },
  ],

  asph: {},

  zoomPositions: [56.9, 160.8, 241.3],
  zoomLabels: ["Wide", "Tele"],

  var: {
    "5": [
      [7.19326, 22.756327200948355],
      [42.37555, 58.54863513740272],
      [47.94835, 64.3420247909661],
    ],
    "10": [
      [31.47406, 31.47406],
      [11.1426, 11.1426],
      [1.265538, 1.265538],
    ],
    "23": [
      [52.45312963327591, 52.45312963327591],
      [67.88393664908017, 67.88393664908017],
      [82.57241153237486, 82.57241153237486],
    ],
  },

  varLabels: [
    ["5", "D5 / FOCUS"],
    ["10", "D10"],
    ["23", "BF"],
  ],

  groups: [
    { text: "L1 (+ / FOCUS)", fromSurface: "1", toSurface: "5" },
    { text: "L2 (- / IS)", fromSurface: "6", toSurface: "10" },
    { text: "L3 (+)", fromSurface: "11", toSurface: "23" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 1.1,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent ¶0081 focuses by axial L1 motion only. At Canon's 1.1 m focal-plane-to-subject MFD, code solves L1 objectward by 15.5631 / 16.1731 / 16.3937 mm at wide / middle / tele while L2, L3, and the image plane remain fixed; tele paraxial magnification is 0.31037×.",

  nominalFno: [4.16, 5.129132321041215, 5.88],
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 7,
  maxFstop: 32,

  yScFill: 0.25,
} satisfies LensDataInput;

export default LENS_DATA;
