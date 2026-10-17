import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — YASHICA YASHINON-DX 21mm f/3.3                       ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 1969-024068 Example 1 (Yashica Co., Ltd.; Iwatatsu      ║
 * ║  Fujioka). The patent prescription is normalized to f = 100.0 and is    ║
 * ║  uniformly scaled by s = 0.21 to the marketed 21mm focal length.        ║
 * ║  Source R, d, and stop location are scaled; semi-diameters are inferred ║
 * ║  directly in the scaled model. No asphere scaling is required.          ║
 * ║                                                                          ║
 * ║  8 elements / 5 air-separated groups, all spherical.                    ║
 * ║  Stop: patent-published 3.5 normalized units behind r7; the source      ║
 * ║  d7 = 5.37 gap is split into r7→STO = 0.7350 mm and STO→r8 = 0.3927 mm  ║
 * ║  after scaling. The patent does not publish stop diameter; the stop     ║
 * ║  radius is derived from the design f-number, the published f/3.3, using ║
 * ║  the modeled entrance pupil.                                            ║
 * ║                                                                          ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. Example 1 publishes one fixed║
 * ║  prescription and no finite-object motion table. The marketed 0.8m MFD ║
 * ║  is metadata only; no internal or unit-focus motion is invented.        ║
 * ║                                                                          ║
 * ║  Glass: the patent explicitly defines n_i as the d-line refractive index. ║
 * ║  Historical vendor provenance is unresolved. Each element therefore uses║
 * ║  a neutral six-digit d-line coordinate class rather than a vendor claim. ║
 * ║  Modern catalog matches are audit comparators only; nC/nF/ng/dPgF are   ║
 * ║  not imported from an assumed historical glass.                          ║
 * ║                                                                          ║
 * ║  Semi-diameters: not source-published. They are constrained from exact  ║
 * ║  spherical ray tracing at the modeled f/3.3 stop, requiring the complete║
 * ║  pupil to clear at 0.6 × 46° half-field and the 46° chief ray to clear, ║
 * ║  then checked against edge thickness, actual rim slope, cross-gap       ║
 * ║  intrusion, and the patent Fig. 1 silhouette.                           ║
 * ║                                                                          ║
 * ║  Manufacturer metadata used for correlation: Yashinon-DX 21mm f/3.3,   ║
 * ║  8 elements / 5 groups, 92° field, screw-thread SLR mount (canonical   ║
 * ║  taxonomy: M42), 0.8m minimum focus, 55mm filter, and f/16 minimum.     ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "yashica-yashinon-dx-21mm-f3-3",
  maker: "Yashica",
  name: "YASHICA YASHINON-DX 21mm f/3.3",
  subtitle: "JP 1969-024068 Example 1 — f=100 prescription scaled ×0.21",

  catalog: {
    lensMounts: ["m42"],
    imageFormat: "135-full-frame",
    specs: ["8 ELEMENTS / 5 GROUPS", "21mm", "f/3.3", "92°", "MFD 0.8m"],
    elementCount: 8,
    groupCount: 5,
    focalLengthMm: { marketing: 21, design: 21.001562506 },
    fNumber: { marketing: 3.3, design: 3.3 },
  },

  source: {
    patentNumber: "JP 1969-024068 B",
    patentYear: 1969,
    authors: ["Iwatatsu Fujioka"],
    assignees: ["Yashica Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.67,
      vd: 57.3,
      indexReference: "d",
      focalLengthMm: -23.455464,
      glass: "670573 d-line class (historical vendor unresolved)",
      apd: false,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.717,
      vd: 47.9,
      indexReference: "d",
      focalLengthMm: 10.813995,
      glass: "717479 d-line class (historical vendor unresolved)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.64328,
      vd: 47.8,
      indexReference: "d",
      focalLengthMm: -8.294325,
      glass: "643478 d-line class (historical vendor unresolved)",
      apd: false,
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.64085,
      vd: 56.8,
      indexReference: "d",
      focalLengthMm: 13.584363,
      glass: "641568 d-line class; LACL1 catalog equivalent (production supplier unspecified)",
      apd: false,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.589,
      vd: 48.6,
      indexReference: "d",
      focalLengthMm: -13.395826,
      glass: "589486 d-line class; BAF6 catalog equivalent (production supplier unspecified)",
      apd: false,
      cemented: "T1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6223,
      vd: 53.1,
      indexReference: "d",
      focalLengthMm: 7.236541,
      glass: "622531 d-line class (historical vendor unresolved)",
      apd: false,
      cemented: "T1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      focalLengthMm: -20.505852,
      glass: "717295 d-line class (historical vendor unresolved)",
      apd: false,
      cemented: "T1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.57099,
      vd: 51,
      indexReference: "d",
      focalLengthMm: -24.970353,
      glass: "571510 d-line class; BAFL2 catalog equivalent (production supplier unspecified)",
      apd: false,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 34.3665, d: 1.3776, sd: 11.1, medium: 1 },
    { label: "2", R: 10.61046, d: 10.2249, sd: 8.6 },
    { label: "3", R: 13.00362, d: 5.796, sd: 7.7, medium: 2 },
    { label: "4", R: -15.6303, d: 0.819, sd: 6.9, medium: 3 },
    { label: "5", R: 8.26707, d: 0.5166, sd: 5.35 },
    { label: "6", R: 10.10268, d: 4.0005, sd: 5.35, medium: 4 },
    { label: "7", R: -53.214, d: 0.735, sd: 4.8 },
    { label: "STO", R: "flat", d: 0.3927 },
    { label: "8", R: -62.5821, d: 0.819, sd: 4.3, medium: 5 },
    { label: "9", R: 9.07221, d: 6.3945, sd: 4.7, medium: 6 },
    { label: "10", R: -6.52428, d: 4.1391, sd: 5.3, medium: 7 },
    { label: "11", R: -14.83125, d: 8.6289, sd: 6.4 },
    { label: "12", R: -9.40737, d: 2.3646, sd: 7.9, medium: 8 },
    { label: "13", R: -30.1791, d: 7.838027884, sd: 11.2 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.8,
    description:
      "NO_INTERNAL_RECONSTRUCTION — JP 1969-024068 Example 1 publishes one fixed prescription and no finite-focus movement table; the 0.8m marketed MFD is metadata only and no focus movement is modeled.",
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 3.3, fStops: [3.3, 4, 5.6, 8, 11, 16] },

  projection: { kind: "rectilinear", fullFieldDeg: 92, maxTraceFieldDeg: 46 },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "7" },
    { text: "III", fromSurface: "8", toSurface: "11" },
    { text: "IV", fromSurface: "12", toSurface: "13" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "T1", fromSurface: "8", toSurface: "11" },
  ],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.36 },
} satisfies LensDataV2Input;

export default LENS_DATA;
