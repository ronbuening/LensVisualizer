import type { LensDataInput } from "../../types/optics.js";

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
 * ║  diameter; STO sd = 5.6815738723 mm is independently solved so the       ║
 * ║  scaled paraxial model realizes the published f/2.8 exactly.             ║
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
  key: "konica-hexanon-ar-21mm-f2-8",
  maker: "Konica",
  name: "KONICA HEXANON AR 21mm f/2.8",
  subtitle: "JPS5517129A Example 1 — normalized f=1 prescription scaled ×21; strong production correlation",
  specs: ["9 ELEMENTS / 8 GROUPS", "MODELED EFL 20.9973 mm", "f/2.8", "92° FULL FIELD", "ALL-SPHERICAL"],

  focalLengthMarketing: 21,
  focalLengthDesign: 20.997276268926072,
  apertureMarketing: 2.8,
  lensMounts: ["konica-ar"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 1980-017129 A",
  patentAuthors: ["Toshiko Shimokura"],
  patentAssignees: ["Konishiroku Photo Industry Co., Ltd."],
  patentYear: 1980,
  elementCount: 9,
  groupCount: 8,

  // Patent Example 1 publishes 2W = 92° for this rectilinear retrofocus design.
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 92,
    maxTraceFieldDeg: 46,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      diagramLabel: "L1",
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      fl: 95.45408058404513,
      glass: "713539",
      role: "Front positive meniscus of the retrofocus front block.",
    },
    {
      id: 2,
      diagramLabel: "L2",
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 43.7,
      indexReference: "d",
      fl: -25.330133095712295,
      glass: "720437",
      role: "First negative meniscus in the divergent front sequence.",
    },
    {
      id: 3,
      diagramLabel: "L3",
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.717,
      vd: 47.9,
      indexReference: "d",
      fl: -44.507436247126414,
      glass: "717479",
      role: "Second negative meniscus in the divergent front sequence.",
    },
    {
      id: 4,
      diagramLabel: "L4",
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.717,
      vd: 47.9,
      indexReference: "d",
      fl: -51.64733660698371,
      glass: "717479",
      role: "Third negative meniscus completing the negative-power front block.",
    },
    {
      id: 5,
      diagramLabel: "L5",
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      fl: 21.117838332843856,
      glass: "755275",
      role: "Strong positive singlet beginning the rear block.",
    },
    {
      id: 6,
      diagramLabel: "L6a",
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      fl: 27.994101975887663,
      glass: "603607",
      cemented: "L6",
      role: "Positive component of the cemented sixth group.",
    },
    {
      id: 7,
      diagramLabel: "L6b",
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      fl: -15.87003187654162,
      glass: "805254",
      cemented: "L6",
      role: "Negative component of the cemented sixth group; the cemented pair is net negative.",
    },
    {
      id: 8,
      diagramLabel: "L7",
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      fl: 30.96937431934162,
      glass: "697555",
      role: "First positive rear meniscus, concave face toward object space.",
    },
    {
      id: 9,
      diagramLabel: "L8",
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      fl: 41.52137880154,
      glass: "697555",
      role: "Final positive rear meniscus, concave face toward object space.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 48.6108, d: 3.6939, nd: 1.713, elemId: 1, sd: 15.8 },
    { label: "2", R: 164.7345, d: 0.0966, nd: 1.0, elemId: 0, sd: 14.37 },
    { label: "3", R: 44.2365, d: 1.6527, nd: 1.72, elemId: 2, sd: 12.33 },
    { label: "4", R: 12.71172, d: 2.1399, nd: 1.0, elemId: 0, sd: 9.23 },
    { label: "5", R: 19.6518, d: 1.5561, nd: 1.717, elemId: 3, sd: 8.74 },
    { label: "6", R: 11.76, d: 2.4297, nd: 1.0, elemId: 0, sd: 7.39 },
    { label: "7", R: 20.7795, d: 1.3608, nd: 1.717, elemId: 4, sd: 6.82 },
    { label: "8", R: 12.9465, d: 2.8203, nd: 1.0, elemId: 0, sd: 6.41 },
    { label: "9", R: 21.8022, d: 10.5, nd: 1.7552, elemId: 5, sd: 6.41 },
    { label: "10", R: -47.0883, d: 1.47, nd: 1.0, elemId: 0, sd: 6.07 },
    { label: "STO", R: 1e15, d: 1.7388, nd: 1.0, elemId: 0, sd: 5.6815738723 },
    { label: "11", R: 108.0093, d: 4.2588, nd: 1.60311, elemId: 6, sd: 6.2 },
    // Cemented L6 → L7 junction: downstream element L7 owns the interface.
    { label: "12", R: -19.7148, d: 1.1676, nd: 1.80518, elemId: 7, sd: 6.21 },
    { label: "13", R: 37.2771, d: 0.8757, nd: 1.0, elemId: 0, sd: 6.2 },
    { label: "14", R: -75.9402, d: 2.3331, nd: 1.6968, elemId: 8, sd: 6.65 },
    { label: "15", R: -17.0163, d: 0.0966, nd: 1.0, elemId: 0, sd: 7.34 },
    { label: "16", R: -85.5603, d: 2.3331, nd: 1.6968, elemId: 9, sd: 8.14 },
    { label: "17", R: -21.8631, d: 34.5366, nd: 1.0, elemId: 0, sd: 8.61 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "FRONT (L1–L4)", fromSurface: "1", toSurface: "8" },
    { text: "REAR (L5–L8)", fromSurface: "9", toSurface: "17" },
  ],
  doublets: [{ text: "L6 (L6a+L6b)", fromSurface: "11", toSurface: "13" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.2,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — patent Example 1 is infinity-only; production MFD is 0.2 m from the film plane, but no internal focus movement is modeled.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ── */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
