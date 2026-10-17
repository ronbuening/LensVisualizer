import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * NIKON R-UW AF ZOOM-NIKKOR 20-35mm f/2.8
 *
 * Data source: US 5,490,012, First Embodiment, Table 1 (Kouichi Ohshita / Nikon Corporation).
 * Underwater wide-angle zoom for the Nikonos RS system. 9 powered glass elements in 9 air-spaced groups,
 * plus the rear dustproof/drip-proof plane plate traced through rearPlates; all surfaces are spherical.
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
 * Residuals remain unresolved; the inferred leading digits are not verified source readings.
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
 *
 * MTF census remains PARTIAL: local Table 1 contains apparent source misprints
 * (r8=0.316, r11=9.429, r12=0.582, r14=7.948, d16=40). Existing inferred
 * repairs are not established transcriptions and do not reproduce all Table 4
 * conditions. The +0.219790 mm residual already includes the WTR interface;
 * it is not explained by air-only propagation. No additional focus tuning.
 * The fully specified rear protective plate now uses rearPlates with d20=38.563.
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ruw-af-zoom-nikkor-20-35mm-f28",
  maker: "Nikon",
  name: "NIKON R-UW AF ZOOM-NIKKOR 20-35mm f/2.8",
  subtitle: "US 5,490,012 First Embodiment - Nikon / Kouichi Ohshita",

  catalog: {
    lensMounts: ["nikonos-rs"],
    imageFormat: "135-full-frame",
    specs: [
      "9 powered elements / 9 groups + rear protective plate",
      "f = 20.60-34.00 mm in water",
      "F/2.88 design aperture",
      "2ω = 79.8°-51.4° in water",
      "All-spherical underwater zoom",
    ],
    elementCount: 9,
    groupCount: 9,
    focalLengthMm: { marketing: [20, 35], design: [20.6007, 34.0012] },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "US 5,490,012",
    patentYear: 1996,
    authors: ["Kouichi Ohshita"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus / Water-contact Window",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: 366.5,
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
      focalLengthMm: -60.7,
      glass: "J-LASF017 (Hikari catalog-equivalent to patent 797454; supplier not identified)",
      role: "Front negative element of the G2 compensator.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.77279,
      vd: 49.4,
      focalLengthMm: -51.2,
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
      focalLengthMm: 85.8,
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
      focalLengthMm: 44.1,
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
      focalLengthMm: 72.6,
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
      focalLengthMm: -21.8,
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
      focalLengthMm: 91.0,
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
      focalLengthMm: 40.5,
      glass: "748523 — E-LAKH1 catalog equivalent (Hikari; production supplier unspecified)",
      role: "Final positive power element of G3b before the rear protective plate.",
    },
  ],

  media: [{ id: "m1", nd: 1.33306 }],

  surfaces: [
    { label: "WTR", R: "flat", d: 0.001, sd: 70.0, medium: "m1" },
    { label: "1", R: 111.6, d: 20.0, sd: 62.5, medium: 1 },
    { label: "2", R: 255.08, sd: 50.0 },
    { label: "3", R: 60.23, d: 3.0, sd: 38.0, medium: 2 },
    { label: "4", R: 26.23, d: 15.0, sd: 23.0 },
    { label: "5", R: 2180.836, d: 2.0, sd: 23.0, medium: 3 },
    { label: "6", R: 38.846, d: 5.6, sd: 24.0 },
    { label: "7", R: 40.565, d: 7.0, sd: 22.0, medium: 4 },
    { label: "8", R: 110.316, sd: 18.5 },
    { label: "9", R: 49.471, d: 6.0, sd: 11.0, medium: 5 },
    { label: "10", R: -69.274, d: 1.1, sd: 9.0 },
    { label: "STO", R: "flat", d: 1.1 },
    { label: "11", R: 39.429, d: 5.5, sd: 8.9, medium: 6 },
    { label: "12", R: 300.582, d: 2.0, sd: 8.9 },
    { label: "13", R: -35.2, d: 7.0, sd: 8.7, medium: 7 },
    { label: "14", R: 37.948, d: 1.7, sd: 8.85 },
    { label: "15", R: -85.856, d: 4.0, sd: 8.85, medium: 8 },
    { label: "16", R: -37.179, d: 0.4, sd: 11.0 },
    { label: "17", R: 327.07, d: 4.3, sd: 13.2, medium: 9 },
    { label: "18", R: -33.237, sd: 16.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 20.6007, label: "20.6 mm" },
      { focalLengthMm: 26.5009 },
      { focalLengthMm: 34.0012, label: "34.0 mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.12,
    description:
      "Patent-described G2 focusing; close-focus spacings are unpublished, so this file models verified infinity zoom positions only.",
  },

  gaps: {
    "2": {
      label: "D2 G1-G2",
      values: [
        [7.9672, 7.9672],
        [18.9022, 18.9022],
        [24.4123, 24.4123],
      ],
    },
    "8": {
      label: "D8 G2-G3",
      values: [
        [34.1678, 34.1678],
        [17.6102, 17.6102],
        [4.9839, 4.9839],
      ],
    },
    "18": {
      label: "D18 G3-P",
      values: [
        [1.1021, 1.1021],
        [6.7247, 6.7247],
        [13.8409, 13.8409],
      ],
    },
  },

  aperture: { nominalFNumber: 2.88, fStops: [2.88, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  rearPlates: [
    {
      label: "P",
      thicknessMm: 1.3,
      nd: 1.5168,
      vd: 64.1,
      glass: "N-BK7",
      gapAfterMm: 38.563,
      source: "US 5,490,012, Table 1 surfaces 19–20 and d20 zoom row",
    },
  ],

  groups: [
    { text: "WATER", fromSurface: "WTR", toSurface: "WTR" },
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "8" },
    { text: "G3", fromSurface: "9", toSurface: "18" },
  ],
  doublets: [],

  layout: { scFill: 0.58, yScFill: 0.72 },

  rays: { offAxisFieldFrac: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
