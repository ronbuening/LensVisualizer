import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — PENTAX SUPER-TAKUMAR 28mm f/3.5                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,506,339, sole numerical example                 ║
 * ║  (Tomokazu Kazamaki / Asahi Kogaku Kogyo K.K.).                   ║
 * ║  Seven-element, seven-group all-spherical retrofocus objective.    ║
 * ║  Focus model: inferred unit focus; only the final BF gap varies.   ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    The patent prescription is normalized to F = 100 mm. All        ║
 * ║    radii, thicknesses, air gaps, BFD values, and inferred SDs are  ║
 * ║    scaled ×0.28 to the 28 mm production focal length.              ║
 * ║                                                                    ║
 * ║  NOTE ON THE APERTURE STOP:                                        ║
 * ║    The patent places the stop between L4 and L5 but does not give  ║
 * ║    its axial station. The implementation places STO at the midpoint║
 * ║    of t5. Its radius is derived from the design f-number, the      ║
 * ║    patent aperture of f/3.5.                                       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent omits clear apertures. SDs were inferred from         ║
 * ║    meridional marginal/chief-ray envelopes, allowing expected      ║
 * ║    wide-open extreme-field vignetting, then constrained by         ║
 * ║    spherical rim limits, ≥0.3 mm edge thickness, ≤1.25 element SD  ║
 * ║    ratio, signed cross-gap sag intrusion, and Figure 1 silhouette. ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes only the optical design.           ║
 * ║    It excludes filters, mechanical parts, and camera-side glass.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "pentax-super-takumar-28mm-f35",
  maker: "Pentax",
  name: "PENTAX SUPER-TAKUMAR 28mm f/3.5",
  subtitle: "US 3,506,339 — TOMOKAZU KAZAMAKI / ASAHI KOGAKU",

  catalog: {
    lensMounts: ["m42"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 7 GROUPS", "f = 28.000 mm", "F/3.5", "2ω = 74.5°", "ALL-SPHERICAL"],
    elementCount: 7,
    groupCount: 7,
    focalLengthMm: { marketing: 28, design: 28.000228 },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "US 3,506,339",
    patentYear: 1970,
    authors: ["Tomokazu Kazamaki"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.67003,
      vd: 47.2,
      focalLengthMm: 225.002,
      glass: "S-BAH10 (OHARA equivalent; patent supplier not specified)",
      apd: false,
      role: "Weak positive front meniscus that moderates the power and ray angles of the negative front pair.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: -42.007,
      glass: "S-BSM16 (OHARA equivalent; patent supplier not specified)",
      apd: false,
      role: "Principal negative element of the patent-defined front negative pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus (Near-Zero Power)",
      nd: 1.6516,
      vd: 58.5,
      focalLengthMm: 3346.043,
      glass: "N-LAK7 (SCHOTT equivalent; patent supplier not specified)",
      apd: false,
      role: "Very thick, nearly afocal bridge element supplying axial separation and two corrective refracting surfaces.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 42.0,
      focalLengthMm: 28.226,
      glass: "S-LAM58 (OHARA exact 720/420 match; patent supplier not specified)",
      apd: false,
      role: "Strong positive element beginning the rear converging group ahead of the aperture stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.0,
      focalLengthMm: -17.81,
      glass: "E-FD15 (HOYA equivalent; patent supplier not specified)",
      apd: false,
      role: "Strong dispersive negative element behind the stop, contributing to chromatic and astigmatic balance.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 30.306,
      glass: "S-BSM16 (OHARA equivalent; patent supplier not specified)",
      apd: false,
      role: "Positive rear meniscus that restores convergence after L5 and participates in off-axis correction.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 53.982,
      glass: "S-BSM16 (OHARA equivalent; patent supplier not specified)",
      apd: false,
      role: "Final positive meniscus completing image formation and rear-group aberration correction.",
    },
  ],

  /* ── Surface prescription, scaled ×0.28 from patent F = 100 mm ── */
  surfaces: [
    { label: "1", R: 140.0, d: 5.334, sd: 18.3, medium: 1 },
    { label: "2", R: 1931.92384, d: 0.1484, sd: 17.0 },
    { label: "3", R: 22.96, d: 1.176, sd: 13.1, medium: 2 },
    { label: "4", R: 11.96692, d: 9.436, sd: 10.5 },
    { label: "5", R: -50.4, d: 15.96, sd: 10.4, medium: 3 },
    { label: "6", R: -55.41564, d: 0.14, sd: 10.4 },
    { label: "7", R: 22.4, d: 3.92, sd: 8.0, medium: 4 },
    { label: "8", R: -203.0882, d: 2.03, sd: 7.1 },
    // Stop station is not dimensioned in the patent; t5 is split evenly around STO.
    { label: "STO", R: "flat", d: 2.03 },
    { label: "9", R: -20.72, d: 0.56, sd: 6.0, medium: 5 },
    { label: "10", R: 31.528, d: 1.68, sd: 6.5 },
    { label: "11", R: -75.6, d: 1.96, sd: 7.2, medium: 6 },
    { label: "12", R: -15.2068, d: 0.084, sd: 8.0 },
    { label: "13", R: -280.0, d: 1.68, sd: 8.2, medium: 7 },
    { label: "14", R: -29.98156, sd: 8.6 },
  ],

  focus: {
    closeFocusM: 0.4,
    /* ── Inferred unit focus: only the back-focus gap changes ── */
    description:
      "Inferred unit-focus model: the complete seven-element assembly translates rigidly because the patent publishes no variable internal spacing.",
  },

  gaps: { "14": { label: "BF", values: [[37.955519, 40.425776]] } },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "FRONT NEGATIVE PAIR", fromSurface: "1", toSurface: "4" },
    { text: "THICK BRIDGE L3", fromSurface: "5", toSurface: "6" },
    { text: "REAR CONVERGING GROUP", fromSurface: "7", toSurface: "14" },
  ],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.62 },
} satisfies LensDataV2Input;

export default LENS_DATA;
