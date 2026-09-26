import type { LensDataInput } from "../../types/optics.js";

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
 * ║  rendered-figure check places it essentially midway between R6     ║
 * ║  and R7, so d6=5.25 mm is split 2.625 + 2.625 mm. The physical     ║
 * ║  stop SD is calibrated to the modeled f/2.8 state; this does not   ║
 * ║  independently establish a production diaphragm diameter.         ║
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
  key: "miranda-auto-ec-35mm-f28",
  maker: "Miranda",
  name: "MIRANDA AUTO EC 35mm f/2.8",
  subtitle: "JP1976-053823 Example 1 — scaled ×0.35; strong research correlation",
  specs: ["6 ELEMENTS / 6 GROUPS", "35mm f/2.8", "ALL-SPHERICAL"],

  focalLengthMarketing: 35,
  focalLengthDesign: 34.996112,
  apertureMarketing: 2.8,
  imageFormat: "135-full-frame",
  patentNumber: "JP S51-053823 A",
  patentAuthors: ["Kunio Shimada"],
  patentAssignees: ["Miranda Camera Co., Ltd."],
  patentYear: 1976,
  elementCount: 6,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64,
      indexReference: "d",
      fl: -56.034647,
      glass: "N-BK7 (supplier-neutral catalog proxy)",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.757,
      vd: 47.8,
      indexReference: "d",
      fl: 39.645363,
      glass: "S-LAM54 (supplier-neutral catalog proxy)",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6393,
      vd: 44.8,
      indexReference: "d",
      fl: 91.870867,
      glass: "S-BAM12 (supplier-neutral catalog proxy)",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      fl: -17.479837,
      glass: "SF1 (supplier-neutral catalog proxy)",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.2,
      indexReference: "d",
      fl: 66.327842,
      glass: "J-SK16 (supplier-neutral catalog proxy)",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.2,
      indexReference: "d",
      fl: 27.373103,
      glass: "J-SK16 (supplier-neutral catalog proxy)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 39.7845, d: 1.4875, nd: 1.51633, elemId: 1, sd: 12.2 },
    { label: "2", R: 16.5375, d: 11.3925, nd: 1, elemId: 0, sd: 11.6 },
    { label: "3", R: 67.4835, d: 4.557, nd: 1.757, elemId: 2, sd: 8 },
    { label: "4", R: -52.4755, d: 0.1995, nd: 1, elemId: 0, sd: 8 },
    { label: "5", R: 16.933, d: 2.835, nd: 1.6393, elemId: 3, sd: 8.0 },
    { label: "6", R: 22.239, d: 2.625, nd: 1, elemId: 0, sd: 8.0 },
    { label: "STO", R: 1e15, d: 2.625, nd: 1, elemId: 0, sd: 6.43313 },
    { label: "7", R: -22.1865, d: 1.19, nd: 1.71736, elemId: 4, sd: 7 },
    { label: "8", R: 29.484, d: 1.7815, nd: 1, elemId: 0, sd: 7.6 },
    { label: "9", R: -51.87, d: 2.478, nd: 1.62041, elemId: 5, sd: 7.65 },
    { label: "10", R: -23.366, d: 0.098, nd: 1, elemId: 0, sd: 8.0 },
    { label: "11", R: 412.79, d: 3.269, nd: 1.62041, elemId: 6, sd: 8.0 },
    { label: "12", R: -17.6575, d: 38.325, nd: 1, elemId: 0, sd: 8.0 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [],

  closeFocusM: 0.3,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — manufacturer closest focus is 0.30 m, but no internal optical spacing law is published; model remains at the patent static/infinity state.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
