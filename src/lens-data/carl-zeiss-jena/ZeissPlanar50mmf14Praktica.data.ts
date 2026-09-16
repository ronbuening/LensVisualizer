import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — CARL ZEISS JENA PRAKTICAR 50mm f/1.4
 * Source: GB 2 066 504 A, Example 4 / Table 4 (VEB Carl Zeiss Jena).
 * Job-card identity/output stem retains “Zeiss Planar 50mm F1.4
 * (Praktica)”; the manufacturer brochure calls the production lens
 * PRAKTICAR 1.4/50. Exact Example-4 production attribution is a strong
 * research correlation, not manufacturer-confirmed.
 *
 * Prescription: seven physical elements / six air-separated groups;
 * all spherical. Table 4 is normalized to f = 1 and is scaled uniformly
 * ×50.0 mm/source-unit. The retained e-line ne/νe values are not
 * converted to d-line coordinates.
 *
 * Source-label issue: Fig. 1/prose use L1–L6 while Table 4 contains seven
 * positive glass thicknesses. The unambiguous numerical media transitions
 * govern this model; the r8 cemented junction is E4→E5.
 *
 * Stop: Fig. 1 places the iris in l3 but gives no axial split or diameter.
 * The modeled stop is placed 60% of l3 from r6 toward r7 (9.585 mm /
 * 6.390 mm split). Its 11.903202 mm semi-diameter is calibrated from the
 * final paraxial entrance pupil to the patent f/1.4 target; it is not a
 * published physical diaphragm diameter.
 *
 * Semi-diameters: unpublished. Values are modeled from exact spherical
 * ray-envelope sampling, then checked for edge thickness, actual rim slope,
 * shared-gap intrusion, and sampled off-axis containment. They are not
 * patent clear-aperture values.
 *
 * Focus: NO_INTERNAL_RECONSTRUCTION. The patent supplies one prescription
 * state. The manufacturer 0.36 m MFD is retained as product metadata only;
 * no internal motion law is invented.
 */

const LENS_DATA = {
  key: "zeiss-planar-50f14-praktica",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA PRAKTICAR 50mm f/1.4",
  subtitle:
    "GB 2 066 504 A Example 4 — strong PRAKTICAR 1.4/50 correlation; exact production-example attribution not manufacturer-confirmed",
  specs: ["7 ELEMENTS / 6 GROUPS", "f = 49.995 mm (design)", "f/1.4", "46° PATENT FULL FIELD", "ALL-SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 49.994722,
  apertureMarketing: 1.4,
  apertureDesign: 1.4,
  imageFormat: "135-full-frame",
  patentNumber: "GB 2 066 504 A",
  patentAuthors: ["Eberhard Dietzsch", "Heinz-Dietrich Siegert", "Erich Greiner"],
  patentAssignees: ["VEB Carl Zeiss Jena"],
  patentYear: 1981,
  elementCount: 7,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.681,
      vd: 54.7,
      indexReference: "e",
      fl: 73.434,
      glass: "K-LaK12 class (SUMITA coordinate match; historical supplier/melt not established)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7007,
      vd: 46.7,
      indexReference: "e",
      fl: 277.38,
      glass: "Unmatched (native e-line ne=1.7007, νe=46.7; no authoritative current row resolved)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7462,
      vd: 27.9,
      indexReference: "e",
      fl: -62.169,
      glass: "S-TIH3 class (OHARA coordinate match; historical supplier/melt not established)",
    },
    {
      id: 4,
      name: "L4a",
      diagramLabel: "L4a",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7617,
      vd: 27.3,
      indexReference: "e",
      fl: -21.821,
      glass: "755275 class (S-TIH4 / K-SFLD4 coordinate match; supplier/melt not established)",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L4b",
      diagramLabel: "L4b",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7762,
      vd: 49.4,
      indexReference: "e",
      fl: 37.009,
      glass: "773496 class (N-LAF34 / K-LaSFn7 coordinate match; supplier/melt not established)",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.7762,
      vd: 49.4,
      indexReference: "e",
      fl: 57.195,
      glass: "773496 class (N-LAF34 / K-LaSFn7 coordinate match; supplier/melt not established)",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.7762,
      vd: 49.4,
      indexReference: "e",
      fl: 82.265,
      glass: "773496 class (N-LAF34 / K-LaSFn7 coordinate match; supplier/melt not established)",
    },
  ],

  surfaces: [
    { label: "1", R: 35.69, d: 6.35, nd: 1.681, elemId: 1, sd: 23.0 },
    { label: "2", R: 115.665, d: 0.145, nd: 1.0, elemId: 0, sd: 22.8 },
    { label: "3", R: 24.025, d: 4.815, nd: 1.7007, elemId: 2, sd: 17.5 },
    { label: "4", R: 25.15, d: 1.01, nd: 1.0, elemId: 0, sd: 15.55 },
    { label: "5", R: 22.875, d: 2.5, nd: 1.7462, elemId: 3, sd: 15.05 },
    { label: "6", R: 14.605, d: 9.585, nd: 1.0, elemId: 0, sd: 12.75 },
    // Stop position inferred from Fig. 1: 60% of source l3 from r6 toward r7.
    { label: "STO", R: 1e15, d: 6.39, nd: 1.0, elemId: 0, sd: 11.903202 },
    { label: "7", R: -15.43, d: 1.155, nd: 1.7617, elemId: 4, sd: 12.45 },
    // Cemented E4→E5 junction: downstream element owns the interface and medium.
    { label: "8", R: -222.25, d: 6.93, nd: 1.7762, elemId: 5, sd: 15.2 },
    { label: "9", R: -25.785, d: 0.145, nd: 1.0, elemId: 0, sd: 16.2 },
    { label: "10", R: -63.925, d: 4.33, nd: 1.7762, elemId: 6, sd: 16.85 },
    { label: "11", R: -26.975, d: 0.145, nd: 1.0, elemId: 0, sd: 17.1 },
    { label: "12", R: 118.385, d: 3.175, nd: 1.7762, elemId: 7, sd: 19.0 },
    { label: "13", R: -137.0, d: 36.6, nd: 1.0, elemId: 0, sd: 19.0 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "6" },
    { text: "REAR", fromSurface: "7", toSurface: "13" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.36,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: the patent publishes one prescription state only; 0.36 m is manufacturer MFD metadata, not a reconstructed internal focus law.",

  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
