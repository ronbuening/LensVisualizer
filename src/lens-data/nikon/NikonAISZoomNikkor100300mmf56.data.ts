import type { LensDataInput } from "../../types/optics.js";

/**
 * NIKON ZOOM-NIKKOR 100-300mm f/5.6
 *
 * Source prescription: US 4,641,928 A, Example 2 (Yoshinari Hamanishi / Nippon Kogaku K.K.).
 * Production correlation: Nikon Zoom-Nikkor 100-300mm f/5.6, 14 elements / 10 groups.
 * No uniform scaling is applied. The patent design zoom endpoints are 102 and 294.784 mm;
 * Nikon marketed the production lens as 100-300mm f/5.6.
 *
 * PATENT SOURCE NOTE:
 *   The patent prints r19 = +29.949 mm in both Example 2 and claim 12. Solving r19 against six
 *   independent first-order invariants places the consistent value at about +26.949 mm. This
 *   file uses +26.949 mm as a documented source correction rather than silently normalizing it.
 *
 * ZOOM / FOCUS:
 *   Published infinity zoom endpoints only. Zoom-only gaps are d5, d11, and d14. Intermediate
 *   slider positions are linear viewer interpolation, not additional patent-published spacing states.
 *   Focus status is NO_INTERNAL_RECONSTRUCTION: the patent describes G1 focusing and coupled
 *   G1+G2 macro motion but publishes no quantitative close-focus spacings. Therefore every
 *   zoom var pair has identical infinity/close values. closeFocusM = 0.71 is Nikon marketing
 *   metadata for the 100 mm-only macro mode and is not used to invent internal movement.
 *
 * APERTURE STOP:
 *   The patent gives F/5.6 but no stop station or diameter. The single modeled STO is an explicit
 *   inference placed 3.000 mm behind r20 within the published 49.000 mm G41-G42 air gap, leaving
 *   46.000 mm to r21. STO sd = 11.387365 mm is solved from the authored prescription so the
 *   modeled endpoint f-numbers are 5.59996 and 5.60004.
 *
 * SEMI-DIAMETERS:
 *   The patent publishes no clear semi-diameters. Values are derived from f/5.6 marginal rays,
 *   0.6-field chief/marginal envelopes, the Fig. 2A optical section, and Nikon's 62 mm attachment /
 *   74 mm barrel dimensions, then reduced where necessary for edge-thickness and shared-gap
 *   geometry. At the default off-axis fan, any modeled clipping first occurs at the front surface,
 *   never at a cemented junction.
 *
 * GLASS / SPECTRAL DATA:
 *   The patent publishes d-line nd and vd only. Glass fields retain those coordinates while naming
 *   coordinate-compatible catalog equivalents for dispersion modeling; none identifies the production
 *   supplier. nC, nF, ng, dPgF, and APD claims are intentionally omitted.
 */

const LENS_DATA = {
  key: "nikon-ais-zoom-nikkor-100-300mm-f56",
  maker: "Nikon",
  name: "NIKON ZOOM-NIKKOR 100-300mm f/5.6",
  subtitle: "US 4,641,928 A Example 2 - production correlation; corrected r19 source value",
  specs: [
    "14 ELEMENTS / 10 GROUPS",
    "100-300mm f/5.6 (marketed)",
    "102-294.784mm (patent zoom states)",
    "24deg20'-8deg10' (marketed picture angle)",
    "100mm MACRO TO 0.71m",
  ],

  focalLengthMarketing: [100, 300],
  focalLengthDesign: [101.993503, 294.768552],
  apertureMarketing: 5.6,
  apertureDesign: 5.6,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,641,928 A",
  patentAuthors: ["Yoshinari Hamanishi"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1987,
  elementCount: 14,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "L11a",
      label: "L11a",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.48,
      fl: -197.811316,
      glass: "717295 - flint class (vendor unresolved)",
      cemented: "L11",
      role: "Negative front member of the cemented positive L11 component in focusing group G1.",
    },
    {
      id: 2,
      name: "L11b",
      label: "L11b",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.24,
      fl: 140.76183,
      glass: "487702 - crown class (vendor unresolved)",
      cemented: "L11",
      role: "Positive crown member completing the cemented L11 component.",
    },
    {
      id: 3,
      name: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.24,
      fl: 176.748356,
      glass: "487702 - crown class (vendor unresolved)",
      role: "Positive rear component of focusing group G1.",
    },
    {
      id: 4,
      name: "L21a",
      label: "L21a",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.36,
      fl: 83.462277,
      glass: "805254 - dense flint class (vendor unresolved)",
      cemented: "L21",
      role: "Positive high-index member of the first cemented negative component in variator group G2.",
    },
    {
      id: 5,
      name: "L21b",
      label: "L21b",
      type: "Biconcave Negative",
      nd: 1.717,
      vd: 48.12,
      fl: -40.359567,
      glass: "717481 - LAF3 catalog equivalent (production supplier unspecified)",
      cemented: "L21",
      role: "Negative member completing the first cemented variator component L21.",
    },
    {
      id: 6,
      name: "L22a",
      label: "L22a",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.97,
      fl: -43.622977,
      glass: "713540 - lanthanum-crown class (vendor unresolved)",
      cemented: "L22",
      role: "Negative member of the second cemented variator component L22.",
    },
    {
      id: 7,
      name: "L22b",
      label: "L22b",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.36,
      fl: 91.597298,
      glass: "805254 - dense flint class (vendor unresolved)",
      cemented: "L22",
      role: "Positive high-index member completing cemented variator component L22.",
    },
    {
      id: 8,
      name: "L3a",
      label: "L3a",
      type: "Biconvex Positive",
      nd: 1.51835,
      vd: 60.34,
      fl: 53.290885,
      glass: "518603 - BALK3 catalog equivalent (production supplier unspecified)",
      cemented: "L3",
      role: "Positive member of compensator group G3.",
    },
    {
      id: 9,
      name: "L3b",
      label: "L3b",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.48,
      fl: -109.717294,
      glass: "717295 - flint class (vendor unresolved)",
      cemented: "L3",
      role: "Negative member completing the cemented positive compensator G3.",
    },
    {
      id: 10,
      name: "L41",
      label: "L41",
      type: "Biconvex Positive",
      nd: 1.50137,
      vd: 56.46,
      fl: 72.113136,
      glass: "501565 - K10 catalog equivalent (production supplier unspecified)",
      role: "Front positive element of relay subgroup G41.",
    },
    {
      id: 11,
      name: "L42",
      label: "L42",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.48,
      fl: -92.613991,
      glass: "717295 - flint class (vendor unresolved)",
      role: "Negative meniscus in relay subgroup G41.",
    },
    {
      id: 12,
      name: "L43",
      label: "L43",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.12,
      fl: 259.494446,
      glass: "517641 - BK7-class crown (vendor unresolved)",
      role: "Positive meniscus completing relay subgroup G41; r19 uses the documented source correction.",
    },
    {
      id: 13,
      name: "L44",
      label: "L44",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.97,
      fl: -51.301805,
      glass: "713540 - lanthanum-crown class (vendor unresolved)",
      role: "Negative front member of rear relay subgroup G42.",
    },
    {
      id: 14,
      name: "L45",
      label: "L45",
      type: "Biconvex Positive",
      nd: 1.57501,
      vd: 41.55,
      fl: 68.028394,
      glass: "575416 - J-LF7 catalog equivalent (production supplier unspecified)",
      role: "Final positive element of rear relay subgroup G42.",
    },
  ],

  surfaces: [
    { label: "1", R: 249.101, d: 2.0, nd: 1.71736, elemId: 1, sd: 30.0 },
    { label: "2", R: 90.1, d: 7.5, nd: 1.48749, elemId: 2, sd: 30.2 },
    { label: "3", R: -279.981, d: 0.2, nd: 1.0, elemId: 0, sd: 30.2 },
    { label: "4", R: 83.989, d: 6.5, nd: 1.48749, elemId: 3, sd: 28.0 },
    { label: "5", R: 3244.26, d: 1.211, nd: 1.0, elemId: 0, sd: 27.5 },
    { label: "6", R: -543.38, d: 3.0, nd: 1.80518, elemId: 4, sd: 15.5 },
    { label: "7", R: -59.953, d: 1.0, nd: 1.717, elemId: 5, sd: 15.6 },
    { label: "8", R: 56.327, d: 4.5, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "9", R: -58.963, d: 1.0, nd: 1.713, elemId: 6, sd: 14.8 },
    { label: "10", R: 66.292, d: 2.7, nd: 1.80518, elemId: 7, sd: 15.0 },
    { label: "11", R: 643.454, d: 37.463, nd: 1.0, elemId: 0, sd: 15.1 },
    { label: "12", R: 108.117, d: 6.0, nd: 1.51835, elemId: 8, sd: 16.0 },
    { label: "13", R: -36.4, d: 1.0, nd: 1.71736, elemId: 9, sd: 16.3 },
    { label: "14", R: -68.495, d: 23.112, nd: 1.0, elemId: 0, sd: 16.3 },
    { label: "15", R: 59.608, d: 4.5, nd: 1.50137, elemId: 10, sd: 15.5 },
    { label: "16", R: -89.577, d: 7.5, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "17", R: -65.081, d: 1.5, nd: 1.71736, elemId: 11, sd: 14.0 },
    { label: "18", R: -3218.0, d: 0.2, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "19", R: 26.949, d: 4.9, nd: 1.5168, elemId: 12, sd: 13.5 },
    { label: "20", R: 31.637, d: 3.0, nd: 1.0, elemId: 0, sd: 13.0 },
    // STO is an explicit modeling inference; the patent does not publish an iris station.
    { label: "STO", R: 1e15, d: 46.0, nd: 1.0, elemId: 0, sd: 11.387365 },
    { label: "21", R: -20.2, d: 1.5, nd: 1.713, elemId: 13, sd: 12.5 },
    { label: "22", R: -46.508, d: 0.2, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "23", R: 184.131, d: 3.5, nd: 1.57501, elemId: 14, sd: 13.0 },
    { label: "24", R: -49.324, d: 67.047, nd: 1.0, elemId: 0, sd: 13.0 },
  ],

  asph: {},

  var: {
    "5": [
      [1.211, 1.211],
      [53.511, 53.511],
    ],
    "11": [
      [37.463, 37.463],
      [1.061, 1.061],
    ],
    "14": [
      [23.112, 23.112],
      [7.214, 7.214],
    ],
  },
  varLabels: [
    ["5", "G1-G2"],
    ["11", "G2-G3"],
    ["14", "G3-G4"],
  ],

  zoomPositions: [102, 294.784],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "11" },
    { text: "G3", fromSurface: "12", toSurface: "14" },
    { text: "G4", fromSurface: "15", toSurface: "24" },
  ],
  doublets: [
    { text: "L11", fromSurface: "1", toSurface: "3" },
    { text: "L21", fromSurface: "6", toSurface: "8" },
    { text: "L22", fromSurface: "9", toSurface: "11" },
    { text: "L3", fromSurface: "12", toSurface: "14" },
  ],

  closeFocusM: 0.71,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION. The patent describes G1 focusing and coupled G1+G2 macro motion but publishes no quantitative close-focus spacings; the model therefore retains only the two published infinity zoom states. Nikon's 0.71 m minimum applies only to the 100 mm macro mode and is metadata, not a solved internal state.",

  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
