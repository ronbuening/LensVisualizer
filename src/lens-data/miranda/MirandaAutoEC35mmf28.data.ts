import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — MIRANDA AUTO EC 35mm f/2.8                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP1976-053823, Example 1 (Kunio Shimada / Miranda).   ║
 * ║  Six air-separated spherical singlets; patent normalized to f=100. ║
 * ║  Production correlation: strong research correlation, not a        ║
 * ║  manufacturer-confirmed patent attribution.                        ║
 * ║                                                                    ║
 * ║  SCALE: all patent lengths are uniformly scaled ×0.35 to the       ║
 * ║  marketed 35 mm focal length. Indices and Abbe values are          ║
 * ║  unchanged. No aspheres are present.                               ║
 * ║                                                                    ║
 * ║  INDEX REFERENCE: the patent does not label the wavelength; the    ║
 * ║  stored N/ν coordinates are modeled as d-line values because they  ║
 * ║  round-trip to standard d-line six-digit coordinate families.      ║
 * ║                                                                    ║
 * ║  STOP: Fig. 1 locates the iris in d6 but gives no dimension. A     ║
 * ║  rendered-figure check places it essentially midway between R6 and ║
 * ║  R7, so d6=5.25 mm is split 2.625 + 2.625 mm. The stop radius is   ║
 * ║  derived from the design f-number, modeled f/2.8; this does not    ║
 * ║  independently establish a production diaphragm diameter.          ║
 * ║                                                                    ║
 * Semi-diameters are inferred, not published. The 2026-09-26 audit reduced S1/S2
 * to 12.2/11.6 mm and S3/S4 to 8.0/8.0 mm using the optical rims of Fig. 1,
 * local JP1976-053823 PDF p. 4 at 600 dpi. The second live review also sets
 * S5/S6/S10/S11/S12 to 8.0 mm for the nearly level rear rims. The format-corner
 * chief ray clears, but peripheral pupil
 * vignetting remains modeled. See the audit sidecar for the before/after values.
 *
 * ║  FOCUS: NO_INTERNAL_RECONSTRUCTION. The manufacturer publishes     ║
 * ║  0.30 m closest focus, but neither source gives an optical spacing  ║
 * ║  law; this file retains the patent static/infinity prescription.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "miranda-auto-ec-35mm-f28",
  maker: "Miranda",
  name: "MIRANDA AUTO EC 35mm f/2.8",
  subtitle: "JP1976-053823 Example 1 — scaled ×0.35; strong research correlation",

  catalog: {
    lensMounts: ["miranda-bayonet"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 6 GROUPS", "35mm f/2.8", "ALL-SPHERICAL"],
    elementCount: 6,
    groupCount: 6,
    focalLengthMm: { marketing: 35, design: 34.996112 },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "JP S51-053823 A",
    patentYear: 1976,
    authors: ["Kunio Shimada"],
    assignees: ["Miranda Camera Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64,
      indexReference: "d",
      focalLengthMm: -56.034647,
      glass: "N-BK7 (supplier-neutral catalog proxy)",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.757,
      vd: 47.8,
      indexReference: "d",
      focalLengthMm: 39.645363,
      glass: "S-LAM54 (supplier-neutral catalog proxy)",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6393,
      vd: 44.8,
      indexReference: "d",
      focalLengthMm: 91.870867,
      glass: "S-BAM12 (supplier-neutral catalog proxy)",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      focalLengthMm: -17.479837,
      glass: "SF1 (supplier-neutral catalog proxy)",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.2,
      indexReference: "d",
      focalLengthMm: 66.327842,
      glass: "J-SK16 (supplier-neutral catalog proxy)",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.2,
      indexReference: "d",
      focalLengthMm: 27.373103,
      glass: "J-SK16 (supplier-neutral catalog proxy)",
      diagramLabel: "L6",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 39.7845, d: 1.4875, sd: 12.2, medium: 1 },
    { label: "2", R: 16.5375, d: 11.3925, sd: 11.6 },
    { label: "3", R: 67.4835, d: 4.557, sd: 8, medium: 2 },
    { label: "4", R: -52.4755, d: 0.1995, sd: 8 },
    { label: "5", R: 16.933, d: 2.835, sd: 8.0, medium: 3 },
    { label: "6", R: 22.239, d: 2.625, sd: 8.0 },
    { label: "STO", R: "flat", d: 2.625 },
    { label: "7", R: -22.1865, d: 1.19, sd: 7, medium: 4 },
    { label: "8", R: 29.484, d: 1.7815, sd: 7.6 },
    { label: "9", R: -51.87, d: 2.478, sd: 7.65, medium: 5 },
    { label: "10", R: -23.366, d: 0.098, sd: 8.0 },
    { label: "11", R: 412.79, d: 3.269, sd: 8.0, medium: 6 },
    { label: "12", R: -17.6575, d: 38.325, sd: 8.0 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "NO_INTERNAL_RECONSTRUCTION — manufacturer closest focus is 0.30 m, but no internal optical spacing law is published; model remains at the patent static/infinity state.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16] },

  groups: [],
  doublets: [],

  layout: { yScFill: 0.58 },
} satisfies LensDataV2Input;

export default LENS_DATA;
