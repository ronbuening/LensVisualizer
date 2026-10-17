import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON EF 180mm f/3.5 L Macro USM                             ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 1997-211319 A, Numerical Example 1 (Canon / Hideki Ogawa).║
 * ║  Production correlation: Canon EF180mm f/3.5L Macro USM.                  ║
 * ║  14 elements / 12 air-separated groups / all-spherical prescription.       ║
 * ║  Design: f = 180 mm, f/3.6, 2ω = 13.8°; no scaling applied.                ║
 * ║  Marketing: 180 mm f/3.5, 0.48 m MFD, 1.0×, Canon EF / 135 format.         ║
 * ║                                                                              ║
 * ║  FOCUS STATUS: PUBLISHED.                                                    ║
 * ║  The patent publishes ∞, 0.1×, 0.5×, and 1.0× focus rows:                  ║
 * ║    d12:  2.20 /  5.19 / 17.03 / 31.58 mm                                  ║
 * ║    d17: 32.31 / 29.32 / 17.48 /  2.93 mm                                  ║
 * ║    d18: 17.54 / 15.39 /  7.93 /  1.10 mm                                  ║
 * ║    d23: 28.15 / 30.30 / 37.76 / 44.59 mm                                  ║
 * ║    d27: 67.54 / 67.54 / 67.54 / 67.54 mm                                  ║
 * ║  All four published rows are stored as exact focus keyframes. Runtime      ║
 * ║  motion between them is piecewise-linear visualization.                    ║
 * ║                                                                              ║
 * ║  STOP / PUPIL NOTE:                                                          ║
 * ║  The patent specifies the stop plane (r18/SP) but not its diameter. The stop ║
 * ║  radius is derived from the published infinity design f-number (f/3.6).      ║
 * ║                                                                              ║
 * ║  SEMI-DIAMETER NOTE:                                                        ║
 * ║  The patent does not tabulate clear semi-diameters. Surface SDs below are   ║
 * ║  modeling inferences from the f/3.6 marginal bundle, the default 0.60-field ║
 * ║  / 0.75-pupil off-axis bundle, the Fig. 1 optical-section proportions, and ║
 * ║  the current edge-thickness/rim-slope/shared-gap geometry constraints.      ║
 * ║  Close-focus outer rays naturally vignette at air-separated element rims;  ║
 * ║  no first clipping occurs at either cemented interface in the audit trace.  ║
 * ║                                                                              ║
 * ║  GLASS NOTE:                                                                ║
 * ║  The patent publishes nd/νd only. Supplier identity and per-element nC/nF/ ║
 * ║  ng/dPgF are unresolved; no catalog line data are imported from merely     ║
 * ║  coordinate-compatible glasses. Elements 2, 4, and 11 are identified by   ║
 * ║  Canon as UD in the production lens, reflected here only as a class label. ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer sources:
 *   https://global.canon/en/c-museum/product/ef334.html
 *   https://cweb.canon.jp/manual/ef/macro/ef180f35lmacrousm-ja.pdf
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-180mm-f35l-macro-usm",
  maker: "Canon",
  name: "CANON EF 180mm f/3.5 L Macro USM",
  subtitle: "JP 1997-211319 A, Numerical Example 1 — production correlation",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "14 ELEMENTS / 12 GROUPS",
      "180mm f/3.5 MARKETED",
      "f = 180.009 mm / f/3.6 DESIGN",
      "1.0× / 0.48 m MFD",
      "ALL-SPHERICAL",
    ],
    elementCount: 14,
    groupCount: 12,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x / EF2x compatibility
    focalLengthMm: { marketing: 180, design: 180.009424 },
    fNumber: { marketing: 3.5, design: 3.6 },
  },

  source: { patentNumber: "JP 1997-211319 A", patentYear: 1997, authors: ["Hideki Ogawa"], assignees: ["Canon Inc."] },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 562.086404,
      glass: "487702 — crown class (supplier unresolved)",
      role: "L1a front positive element",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 112.405768,
      glass: "497816 — low-dispersion / UD crown class (supplier unresolved)",
      apd: "inferred",
      apdNote:
        "UD classification from Canon's production element-position specification; " +
        "the patent publishes no partial-dispersion data.",
      role: "L1a UD-class positive element; production element 2 is identified by Canon as UD",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 35,
      focalLengthMm: -180.113853,
      glass: "801350 — high-index class (supplier unresolved)",
      role: "L1a negative element",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 150.787175,
      glass: "497816 — low-dispersion / UD crown class (supplier unresolved)",
      apd: "inferred",
      apdNote:
        "UD classification from Canon's production element-position specification; " +
        "the patent publishes no partial-dispersion data.",
      role: "L1a UD-class positive element; production element 4 is identified by Canon as UD",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -235.636073,
      glass: "805254 — dense-flint class (supplier unresolved)",
      role: "L1b negative meniscus",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 158.75464,
      glass: "487702 — crown class (supplier unresolved)",
      role: "L1b positive element",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -48.651521,
      glass: "883408 — high-index lanthanum class (supplier unresolved)",
      role: "L2 negative front element",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -64.540879,
      glass: "487702 — crown class (supplier unresolved)",
      role: "L2 negative member of cemented pair",
      cemented: "L2-D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 62.663609,
      glass: "847239 — dense-flint class (supplier unresolved)",
      role: "L2 positive member of cemented pair",
      cemented: "L2-D1",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Plano-Convex Positive",
      nd: 1.762,
      vd: 40.1,
      focalLengthMm: 54.750656,
      glass: "762401 — lanthanum class (supplier unresolved)",
      role: "L3 positive front element",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 83.051492,
      glass: "497816 — low-dispersion / UD crown class (supplier unresolved)",
      apd: "inferred",
      apdNote:
        "UD classification from Canon's production element-position specification; " +
        "the patent publishes no partial-dispersion data.",
      role: "L3 UD-class positive member of cemented pair; production element 11 is identified by Canon as UD",
      cemented: "L3-D1",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.3,
      focalLengthMm: -34.091213,
      glass: "593353 — flint class (supplier unresolved)",
      role: "L3 negative member of cemented pair",
      cemented: "L3-D1",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -535.59855,
      glass: "834372 — high-index lanthanum class (supplier unresolved)",
      role: "L4 negative meniscus",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 143.107597,
      glass: "487702 — crown class (supplier unresolved)",
      role: "L4 positive rear element",
    },
  ],

  surfaces: [
    { label: "1", R: -256.86, d: 3.61, sd: 31.0, medium: 1 },
    { label: "2", R: -133.19, d: 0.2, sd: 31.0 },
    { label: "3", R: 136.83, d: 9.05, sd: 30.8, medium: 2 },
    { label: "4", R: -92.34, d: 2.12, sd: 29.2 },
    { label: "5", R: -87.06, d: 2.7, sd: 28.5, medium: 3 },
    { label: "6", R: -222.57, d: 0.2, sd: 28.5 },
    { label: "7", R: 47.27, d: 5.75, sd: 27.8, medium: 4 },
    { label: "8", R: 122.85, d: 8.88, sd: 26.0 },
    { label: "9", R: 38.73, d: 2.9, sd: 22.5, medium: 5 },
    { label: "10", R: 31.09, d: 3.7, sd: 18.0 },
    { label: "11", R: 76.67, d: 3.93, sd: 17.4, medium: 6 },
    { label: "12", R: 8088.06, sd: 18.5 },
    { label: "13", R: -647.89, d: 1.8, sd: 17.5, medium: 7 },
    { label: "14", R: 46.07, d: 4.25, sd: 15.1 },
    { label: "15", R: -90.99, d: 1.6, sd: 16.3, medium: 8 },
    { label: "16", R: 48.37, d: 4.2, sd: 16.3, medium: 9 },
    { label: "17", R: 525.98, sd: 16.0 },
    { label: "STO", R: "flat" },
    { label: "19", R: 41.72, d: 4.96, sd: 15.5, medium: 10 },
    { label: "20", R: "flat", d: 0.15, sd: 14.8 },
    { label: "21", R: 98.39, d: 4.7, sd: 14.7, medium: 11 },
    { label: "22", R: -69.98, d: 3.32, sd: 13.6, medium: 12 },
    { label: "23", R: 28.91, sd: 13.0 },
    { label: "24", R: -31.14, d: 3.0, sd: 14.0, medium: 13 },
    { label: "25", R: -34.94, d: 0.15, sd: 14.6 },
    { label: "26", R: 72.15, d: 4.6, sd: 14.6, medium: 14 },
    { label: "27", R: -2065.08, d: 67.54, sd: 14.6 },
  ],

  focus: {
    closeFocusM: 0.48,
    keyframes: [0, 0.22912992694228013, 0.7323745404242055, 1],
    description:
      "PUBLISHED floating focus: L2 moves imageward and L3 moves objectward while the stop, L1, L4, and image plane remain fixed. The infinity, 0.1×, 0.5×, and 1.0× patent rows are exact focus keyframes.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2, 3],
  },

  gaps: {
    "12": { label: "D12", values: [[2.2, 5.19, 17.03, 31.58]] },
    "17": { label: "D17", values: [[32.31, 29.32, 17.48, 2.93]] },
    STO: { label: "D18", values: [[17.54, 15.39, 7.93, 1.1]] },
    "23": { label: "D23", values: [[28.15, 30.3, 37.76, 44.59]] },
  },

  aperture: { nominalFNumber: 3.6, fStops: [3.6, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  groups: [
    { text: "L1a", fromSurface: "1", toSurface: "8" },
    { text: "L1b", fromSurface: "9", toSurface: "12" },
    { text: "L2", fromSurface: "13", toSurface: "17" },
    { text: "L3", fromSurface: "19", toSurface: "23" },
    { text: "L4", fromSurface: "24", toSurface: "27" },
  ],
  doublets: [
    { text: "L2-D1", fromSurface: "15", toSurface: "17" },
    { text: "L3-D1", fromSurface: "21", toSurface: "23" },
  ],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
