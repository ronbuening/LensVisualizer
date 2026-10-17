import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — KONICA HEXANON AR 21mm f/2.8                               ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JPS5517129A, Example 1 (Konishiroku Photo Industry).       ║
 * ║  Retrofocus wide-angle prescription correlated to the production         ║
 * ║  Konica Hexanon AR 21mm f/2.8: 9 elements / 8 groups, all spherical.     ║
 * ║                                                                            ║
 * ║  SCALE: The patent is normalized to f = 1. All dimensional prescription  ║
 * ║  values are scaled uniformly ×21.0000 to the 21 mm production focal      ║
 * ║  length. No secondary rescale is applied to erase source rounding.       ║
 * ║                                                                            ║
 * ║  STOP: The patent places the aperture stop 0.07 normalized units after   ║
 * ║  surface 10. The scaled d10 gap is therefore split as 1.4700 mm to STO   ║
 * ║  and 1.7388 mm from STO to surface 11. The patent does not publish stop  ║
 * ║  diameter; the stop radius is derived from the design f-number, the      ║
 * ║  published f/2.8 target.                                                 ║
 * ║                                                                            ║
 * ║  FOCUS STATUS: NO_INTERNAL_RECONSTRUCTION. Example 1 publishes only      ║
 * ║  the infinity state. The production 0.2 m MFD is retained as catalog     ║
 * ║  metadata, but no internal movement or close-focus variable gaps are     ║
 * ║  invented.                                                                ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: Not published. SDs were derived from independently      ║
 * ║  traced on-axis marginal rays, the default 0.6-field off-axis bundle,    ║
 * ║  full-field chief/representative rays, and the patent Figure 1 silhouette,║
 * ║  then checked for edge thickness, actual spherical rim slope, cross-gap  ║
 * ║  intrusion, and ray containment. Surface 13 is intentionally constrained ║
 * ║  by the narrow d13 air gap to surface 14.                                 ║
 * ║                                                                            ║
 * ║  GLASS: The patent publishes d-line nd/νd coordinates only. Vendor       ║
 * ║  identity is not defensible from those coordinates, so six-digit d-line  ║
 * ║  coordinate codes are used. nC/nF/ng/dPgF are intentionally omitted.     ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "konica-hexanon-ar-21mm-f2-8",
  maker: "Konica",
  name: "KONICA HEXANON AR 21mm f/2.8",
  subtitle: "JPS5517129A Example 1 — normalized f=1 prescription scaled ×21; strong production correlation",

  catalog: {
    lensMounts: ["konica-ar"],
    imageFormat: "135-full-frame",
    specs: ["9 ELEMENTS / 8 GROUPS", "MODELED EFL 20.9973 mm", "f/2.8", "92° FULL FIELD", "ALL-SPHERICAL"],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: 21, design: 20.997276268926072 },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "JP 1980-017129 A",
    patentYear: 1980,
    authors: ["Toshiko Shimokura"],
    assignees: ["Konishiroku Photo Industry Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      focalLengthMm: 95.45408058404513,
      glass: "713539",
      role: "Front positive meniscus of the retrofocus front block.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 43.7,
      indexReference: "d",
      focalLengthMm: -25.330133095712295,
      glass: "720437",
      role: "First negative meniscus in the divergent front sequence.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.717,
      vd: 47.9,
      indexReference: "d",
      focalLengthMm: -44.507436247126414,
      glass: "717479",
      role: "Second negative meniscus in the divergent front sequence.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.717,
      vd: 47.9,
      indexReference: "d",
      focalLengthMm: -51.64733660698371,
      glass: "717479",
      role: "Third negative meniscus completing the negative-power front block.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      focalLengthMm: 21.117838332843856,
      glass: "755275",
      role: "Strong positive singlet beginning the rear block.",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      focalLengthMm: 27.994101975887663,
      glass: "603607",
      role: "Positive component of the cemented sixth group.",
      diagramLabel: "L6a",
      cemented: "L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -15.87003187654162,
      glass: "805254",
      role: "Negative component of the cemented sixth group; the cemented pair is net negative.",
      diagramLabel: "L6b",
      cemented: "L6",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: 30.96937431934162,
      glass: "697555",
      role: "First positive rear meniscus, concave face toward object space.",
      diagramLabel: "L7",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: 41.52137880154,
      glass: "697555",
      role: "Final positive rear meniscus, concave face toward object space.",
      diagramLabel: "L8",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 48.6108, d: 3.6939, sd: 15.8, medium: 1 },
    { label: "2", R: 164.7345, d: 0.0966, sd: 14.37 },
    { label: "3", R: 44.2365, d: 1.6527, sd: 12.33, medium: 2 },
    { label: "4", R: 12.71172, d: 2.1399, sd: 9.23 },
    { label: "5", R: 19.6518, d: 1.5561, sd: 8.74, medium: 3 },
    { label: "6", R: 11.76, d: 2.4297, sd: 7.39 },
    { label: "7", R: 20.7795, d: 1.3608, sd: 6.82, medium: 4 },
    { label: "8", R: 12.9465, d: 2.8203, sd: 6.41 },
    { label: "9", R: 21.8022, d: 10.5, sd: 6.41, medium: 5 },
    { label: "10", R: -47.0883, d: 1.47, sd: 6.07 },
    { label: "STO", R: "flat", d: 1.7388 },
    { label: "11", R: 108.0093, d: 4.2588, sd: 6.2, medium: 6 },
    // Cemented L6 → L7 junction: downstream element L7 owns the interface.
    { label: "12", R: -19.7148, d: 1.1676, sd: 6.21, medium: 7 },
    { label: "13", R: 37.2771, d: 0.8757, sd: 6.2 },
    { label: "14", R: -75.9402, d: 2.3331, sd: 6.65, medium: 8 },
    { label: "15", R: -17.0163, d: 0.0966, sd: 7.34 },
    { label: "16", R: -85.5603, d: 2.3331, sd: 8.14, medium: 9 },
    { label: "17", R: -21.8631, d: 34.5366, sd: 8.61 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.2,
    description:
      "NO_INTERNAL_RECONSTRUCTION — patent Example 1 is infinity-only; production MFD is 0.2 m from the film plane, but no internal focus movement is modeled.",
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  // Patent Example 1 publishes 2W = 92° for this rectilinear retrofocus design.
  projection: { kind: "rectilinear", fullFieldDeg: 92, maxTraceFieldDeg: 46 },

  groups: [
    { text: "FRONT (L1–L4)", fromSurface: "1", toSurface: "8" },
    { text: "REAR (L5–L8)", fromSurface: "9", toSurface: "17" },
  ],
  doublets: [{ text: "L6 (L6a+L6b)", fromSurface: "11", toSurface: "13" }],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
