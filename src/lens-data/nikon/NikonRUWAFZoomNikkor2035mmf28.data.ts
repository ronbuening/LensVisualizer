import type { LensDataInput } from "../../types/optics.js";

/**
 * NIKON R-UW AF ZOOM-NIKKOR 20-35mm f/2.8
 *
 * Data source: US 5,490,012, First Embodiment, Table 1 (Koichi Ohshita / Nikon Corporation).
 * Underwater wide-angle zoom for the Nikonos RS system. 10 physical glass elements in 10 air-spaced groups,
 * including the rear dustproof/drip-proof plane plate; all surfaces are spherical.
 *
 * Object-side medium: the patent prescription is evaluated with water in front of surface 1 (n = 1.33306,
 * vd = 54.0). LensVisualizer starts in air, so this file inserts a zero-power artificial WTR plane immediately
 * before the patented first surface to establish the water medium. WTR is not a patent surface and is not counted
 * in the element or group totals.
 *
 * OCR / scan corrections applied to Table 1:
 * - r1 is 111.600, not 11.600.
 * - r8, r11, r12, r14, and d16 have dropped leading digits/decimal marks in the scan and are transcribed as
 *   110.316, 39.429, 300.582, 37.948, and 0.40 respectively.
 * - The scan-visible d6/d7 values are interchanged. Condition (8) and the paraxial EFL trace require
 *   d6 = 5.60 and d7 = 7.00; using d6 = 7.00 and d7 = 5.60 fails the patent focal lengths.
 *
 * Verification, with water object medium and the corrected infinity zoom spacings:
 * - EFL: 20.673, 26.602, 34.145 mm vs. patent 20.6007, 26.5009, 34.0012 mm.
 * - BFD: 38.783, 38.701, 38.601 mm vs. patent d20 = 38.563 mm.
 * Residuals are consistent with the degraded scan and the recovered leading digits.
 *
 * Zoom-only variable gaps: D2 (G1-G2), D8 (G2-G3), D18 (G3-P), D20/BF constant.
 * Focus: the patent states that G2 moves object-ward for close focusing, but does not publish close-focus
 * spacing tables. Close values therefore duplicate infinity values; this file models the verified infinity zoom.
 *
 * Semi-diameters are estimated for renderer-safe visualization. The patent does not list clear apertures.
 * The G2 L2 rear and L3 front clear radii are capped at 23 mm; larger renderer estimates violate the
 * R4 rim-slope and cross-gap sag checks, and Fig. 1 shows this portion of G2 with a narrower throat.
 * The central G3 clear apertures are constrained by signed cross-gap sag intrusion, especially the 1.70 mm
 * air gap between surfaces 14 and 15; the file intentionally uses conservative clear radii rather than inferred
 * full-field mechanical apertures.
 */

const LENS_DATA = {
  key: "nikon-ruw-af-zoom-nikkor-20-35mm-f28",
  maker: "Nikon",
  name: "NIKON R-UW AF ZOOM-NIKKOR 20-35mm f/2.8",
  subtitle: "US 5,490,012 First Embodiment - Nikon / Koichi Ohshita",
  specs: [
    "10 elements / 10 groups",
    "f = 20.60-34.00 mm in water",
    "F/2.88 design aperture",
    "2ω = 79.8°-51.4° in water",
    "All-spherical underwater zoom",
  ],
  focalLengthMarketing: [20, 35],
  focalLengthDesign: [20.6007, 34.0012],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["nikonos-rs"],
  imageFormat: "135-full-frame",
  patentYear: 1996,
  elementCount: 10,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus / Water-contact Window",
      nd: 1.5168,
      vd: 64.1,
      fl: 366.5,
      glass: "N-BK7 (Schott; BK7-class, patent nd/vd match)",
      role: "Water-contacting pressure window; weakly negative as a unit when the object medium is water.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.79668,
      vd: 45.4,
      fl: -60.7,
      glass: "Unmatched (797/454 high-index flint; Hoya TAF-class possible)",
      role: "Front negative element of the G2 compensator.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.77279,
      vd: 49.4,
      fl: -51.2,
      glass: "M-TAF1 class (Hoya; 773/494)",
      role: "Second negative element of G2, adding compensator power with high-index glass.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.71736,
      vd: 29.5,
      fl: 85.8,
      glass: "N-SF1 / S-TIH1 class (dense flint)",
      role: "Positive balancing element at the rear of the negative G2 compensator.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.66755,
      vd: 42.0,
      fl: 44.1,
      glass: "J-BASF6 (Hikari) / BAH26 class (668419)",
      role: "First positive element of G3a, immediately before the aperture stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.2,
      fl: 72.6,
      glass: "N-SK16 (Schott) / S-BSM16 class",
      role: "Low-dispersion positive partner completing the object-side positive subgroup G3a.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      fl: -21.8,
      glass: "N-SF6 (Schott) / S-TIH6 class",
      role: "Strong negative element between the two positive subgroups of G3; primary Petzval and coma corrector.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.6,
      fl: 91.0,
      glass: "S-LAL14 (Ohara) / N-LAK14 class",
      role: "First element of image-side positive subgroup G3b.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.7481,
      vd: 52.3,
      fl: 40.5,
      glass: "Unmatched (748/523 lanthanum crown; historical/proprietary melt)",
      role: "Final positive power element of G3b before the rear protective plate.",
    },
    {
      id: 10,
      name: "P",
      label: "Dustproof Plate",
      type: "Plane Parallel Plate",
      nd: 1.5168,
      vd: 64.1,
      fl: 1e15,
      glass: "N-BK7 (Schott; BK7-class, patent nd/vd match)",
      role: "Rear dustproof and drip-proof plane plate specified by the patent.",
    },
  ],

  surfaces: [
    { label: "WTR", R: 1e15, d: 0.001, nd: 1.33306, elemId: 0, sd: 70.0 },
    { label: "1", R: 111.6, d: 20.0, nd: 1.5168, elemId: 1, sd: 62.5 },
    { label: "2", R: 255.08, d: 7.9672, nd: 1.0, elemId: 0, sd: 50.0 },
    { label: "3", R: 60.23, d: 3.0, nd: 1.79668, elemId: 2, sd: 38.0 },
    { label: "4", R: 26.23, d: 15.0, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "5", R: 2180.836, d: 2.0, nd: 1.77279, elemId: 3, sd: 23.0 },
    { label: "6", R: 38.846, d: 5.6, nd: 1.0, elemId: 0, sd: 24.0 },
    { label: "7", R: 40.565, d: 7.0, nd: 1.71736, elemId: 4, sd: 22.0 },
    { label: "8", R: 110.316, d: 34.1678, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "9", R: 49.471, d: 6.0, nd: 1.66755, elemId: 5, sd: 11.0 },
    { label: "10", R: -69.274, d: 1.1, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "STO", R: 1e15, d: 1.1, nd: 1.0, elemId: 0, sd: 8.21 },
    { label: "11", R: 39.429, d: 5.5, nd: 1.62041, elemId: 6, sd: 8.9 },
    { label: "12", R: 300.582, d: 2.0, nd: 1.0, elemId: 0, sd: 8.9 },
    { label: "13", R: -35.2, d: 7.0, nd: 1.80518, elemId: 7, sd: 8.7 },
    { label: "14", R: 37.948, d: 1.7, nd: 1.0, elemId: 0, sd: 8.85 },
    { label: "15", R: -85.856, d: 4.0, nd: 1.6968, elemId: 8, sd: 8.85 },
    { label: "16", R: -37.179, d: 0.4, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "17", R: 327.07, d: 4.3, nd: 1.7481, elemId: 9, sd: 13.2 },
    { label: "18", R: -33.237, d: 1.1021, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "19", R: 1e15, d: 1.3, nd: 1.5168, elemId: 10, sd: 22.0 },
    { label: "20", R: 1e15, d: 38.563, nd: 1.0, elemId: 0, sd: 22.0 },
  ],

  asph: {},

  zoomPositions: [20.6007, 26.5009, 34.0012],
  zoomLabels: ["20.6 mm", "34.0 mm"],
  zoomStep: 0.004,

  var: {
    "2": [
      [7.9672, 7.9672],
      [18.9022, 18.9022],
      [24.4123, 24.4123],
    ],
    "8": [
      [34.1678, 34.1678],
      [17.6102, 17.6102],
      [4.9839, 4.9839],
    ],
    "18": [
      [1.1021, 1.1021],
      [6.7247, 6.7247],
      [13.8409, 13.8409],
    ],
    "20": [
      [38.563, 38.563],
      [38.563, 38.563],
      [38.563, 38.563],
    ],
  },

  varLabels: [
    ["2", "D2 G1-G2"],
    ["8", "D8 G2-G3"],
    ["18", "D18 G3-P"],
    ["20", "BF"],
  ],

  groups: [
    { text: "WATER", fromSurface: "WTR", toSurface: "WTR" },
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "8" },
    { text: "G3", fromSurface: "9", toSurface: "18" },
    { text: "P", fromSurface: "19", toSurface: "20" },
  ],
  doublets: [],

  focusDescription:
    "Patent-described G2 focusing; close-focus spacings are unpublished, so this file models verified infinity zoom positions only.",
  closeFocusM: 0.12,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  scFill: 0.58,
  yScFill: 0.72,
  offAxisFieldFrac: 0.5,
  maxFstop: 22,
} satisfies LensDataInput;

export default LENS_DATA;
