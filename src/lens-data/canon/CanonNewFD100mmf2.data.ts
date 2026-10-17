import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon New FD 100mm f/2
 *
 * Data source: JP S53-133028 (特開昭53-133028), sole worked example,
 * filed 1977-04-25 by Canon Inc. and published 1978-11-20.
 *
 * The patent prescription is normalized to f = 1. All radii, thicknesses,
 * back focus, and estimated semi-diameters below are scaled ×100 to the
 * production 100 mm class lens. The rounded prescription computes to
 * EFL = 100.003 mm and BFD = 42.700 mm by independent y-nu paraxial trace.
 *
 * 6 elements / 4 groups, all spherical. The aperture stop is not listed as
 * a separate numerical surface in the patent table; it is placed at the
 * midpoint of patent gap d7 between surfaces 7 and 8 for visualization and
 * f-number tracing. With that placement, the stop radius is derived from
 * the design f-number (f/2), with a 25.0 mm entrance-pupil semi-diameter.
 *
 * Semi-diameters are not tabulated in the patent. They are conservative
 * clear-aperture estimates from the f/2 marginal ray, reduced off-axis
 * diagram field, the patent Fig. 1 proportions, a 52 mm production filter
 * thread constraint, edge-thickness checks, and cross-gap sag checks.
 *
 * Focus model: unit extension from the infinity prescription. The patent
 * gives no close-focus prescription or floating-group table, so only the
 * final BFD is varied: 42.700 mm at infinity and 55.142 mm at the 1.0 m
 * manufacturer MFD, giving a computed paraxial magnification of 0.124×.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-new-fd-100mm-f2",
  maker: "Canon",
  name: "CANON NEW FD 100mm f/2",
  subtitle: "JP S53-133028 — Canon / Tsuji Sadahiko",

  catalog: {
    lensMounts: ["canon-fd"],
    imageFormat: "135-full-frame",
    specs: ["6 elements / 4 groups", "f ≈ 100.00 mm", "f/2", "2ω = 24°", "all spherical"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { marketing: 100, design: 100.003 },
    fNumber: { marketing: 2, design: 2 },
  },

  source: { patentNumber: "JP S53-133028 A", patentYear: 1978, authors: ["Sadahiko Tsuji"], assignees: ["Canon Inc."] },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.2,
      focalLengthMm: 94.12,
      glass: "S-BSM15 (OHARA)",
      role: "Front positive meniscus collector; most of the first-group positive power is on surface 1.",
      nC: 1.61974,
      nF: 1.63045,
      ng: 1.6363,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: 80.76,
      glass: "S-BSM14 (OHARA)",
      role: "Positive crown element of the front cemented achromatizing group.",
      cemented: "D1",
      nC: 1.60008,
      nF: 1.61002,
      ng: 1.61541,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.72151,
      vd: 29.2,
      focalLengthMm: -129.38,
      glass: "S-TIH18 (OHARA)",
      role: "High-dispersion negative partner in the front cemented doublet.",
      cemented: "D1",
      nC: 1.71437,
      nF: 1.73905,
      ng: 1.75399,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.1,
      focalLengthMm: -38.28,
      glass: "S-TIM25 (OHARA)",
      role: "Separated strong negative element before the stop; principal field-curvature and track-shortening contributor.",
      nC: 1.66661,
      nF: 1.68756,
      ng: 1.70011,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.3,
      focalLengthMm: -94.67,
      glass: "S-FTM16 (OHARA)",
      role: "Negative front element of the rear cemented doublet.",
      cemented: "D2",
      nC: 1.58779,
      nF: 1.60458,
      ng: 1.61454,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.9,
      focalLengthMm: 40.05,
      glass: "S-LAH53 (OHARA)",
      role: "High-index positive rear element providing the main positive power in the final group.",
      cemented: "D2",
      nC: 1.80025,
      nF: 1.81994,
      ng: 1.83117,
    },
  ],

  surfaces: [
    { label: "1", R: 56.42, d: 7.79, sd: 26.0, medium: 1 },
    { label: "2", R: 1414.79, d: 0.12, sd: 25.0 },
    { label: "3", R: 47.25, d: 15.29, sd: 25.0, medium: 2 },
    { label: "4", R: 1386.14, d: 6.49, sd: 21.0, medium: 3 },
    { label: "5", R: 87.29, d: 4.3, sd: 20.0 },
    { label: "6", R: -456.03, d: 3.8, sd: 17.5, medium: 4 },
    { label: "7", R: 27.38, d: 10.99, sd: 17.0 },
    { label: "STO", R: "flat", d: 10.99 },
    { label: "8", R: 288.03, d: 2.5, sd: 15.0, medium: 5 },
    { label: "9", R: 46.81, d: 5.1, sd: 15.0, medium: 6 },
    { label: "10", R: -99.01, sd: 15.5 },
  ],

  focus: {
    closeFocusM: 1.0,
    description:
      "Unit-extension focus model from the infinity prescription; the patent gives no separate close-focus or floating-group table.",
  },

  gaps: { "10": { label: "BF", values: [[42.7, 55.1418]] } },

  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  layout: { scFill: 0.68, yScFill: 0.55 },

  rays: { offAxisFieldFrac: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
