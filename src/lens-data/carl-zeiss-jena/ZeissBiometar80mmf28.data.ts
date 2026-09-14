import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CARL ZEISS JENA BIOMETAR 80mm f/2.8                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,968,221, Example I (Harry Zöllner /             ║
 * ║    VEB Carl Zeiss Jena), uniformly scaled 0.8× from f=100.         ║
 * ║  Production correlation: Biometar 2.8/80 for Pentacon Six /       ║
 * ║    Praktisix is strong but not manufacturer-confirmed by patent.   ║
 * ║  5 elements / 4 groups; all spherical; II+III cemented.           ║
 * ║  Focus: NO_INTERNAL_RECONSTRUCTION. The published optical stack    ║
 * ║    is fixed; catalog MFD 1.0 m is metadata only.                   ║
 * ║  Scaling: R, d, sd, and image distance ×0.8; indices/νd unchanged.║
 * ║  Stop: position inferred from Fig. 1 at 47.5% of l2; stop SD is   ║
 * ║    calibrated paraxially to the published f/2.8, not measured.     ║
 * ║  Semi-diameters: modeled from exact spherical ray containment and ║
 * ║    current geometry limits; the patent publishes no SD values.    ║
 * ║  Rear image gap: computed infinity BFD, not a patent table value. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "carl-zeiss-jena-biometar-80f28",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA BIOMETAR 80mm f/2.8",
  subtitle: "US 2,968,221 EXAMPLE I — HARRY ZOLLNER / VEB CARL ZEISS JENA — 0.8× CORRELATION",
  specs: [
    "5 ELEMENTS / 4 GROUPS",
    "f = 80.61 mm (0.8× scaled)",
    "F/2.8 (stop calibrated)",
    "2ω = 55° (patent)",
    "ALL SPHERICAL",
  ],

  focalLengthMarketing: 80,
  focalLengthDesign: 80.60949895409806,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  imageFormat: "6x6",
  patentNumber: "US 2,968,221",
  patentAuthors: ["Harry Zöllner"],
  patentAssignees: ["VEB Carl Zeiss Jena"],
  patentYear: 1961,
  elementCount: 5,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "I",
      label: "Element I",
      type: "Positive Meniscus",
      nd: 1.6668,
      vd: 33.1,
      indexReference: "d",
      fl: 115.754754,
      glass: "667331 — dense-flint class (supplier unresolved)",
      role: "Front convergent meniscus.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "II",
      label: "Element II",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.5,
      indexReference: "d",
      fl: 46.65931,
      glass: "694535 — H-LaK6A coordinate-compatible proxy (supplier unresolved)",
      role: "Positive member of the cemented II+III pair.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "III",
      label: "Element III",
      type: "Negative Meniscus",
      nd: 1.6889,
      vd: 31.1,
      indexReference: "d",
      fl: -28.357332,
      glass: "689311 — dense-flint class (supplier unresolved)",
      role: "Negative member of the cemented II+III pair.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "IV",
      label: "Element IV",
      type: "Negative Meniscus",
      nd: 1.7283,
      vd: 28.3,
      indexReference: "d",
      fl: -97.91612,
      glass: "728283 — dense-flint class (supplier unresolved)",
      role: "Rear dispersive meniscus.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "V",
      label: "Element V",
      type: "Positive Meniscus",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      fl: 45.322688,
      glass: "620603 — crown class (supplier unresolved)",
      role: "Rear convergent meniscus.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 36.64, d: 4.4, nd: 1.6668, elemId: 1, sd: 21.4 },
    { label: "2", R: 66.4, d: 0.096, nd: 1.0, elemId: 0, sd: 20.6 },
    { label: "3", R: 24.48, d: 7.84, nd: 1.6935, elemId: 2, sd: 17.7 },
    { label: "4", R: 87.36, d: 1.68, nd: 1.6889, elemId: 3, sd: 16.0 },
    { label: "5", R: 15.84, d: 7.372, nd: 1.0, elemId: 0, sd: 12.2 },
    { label: "STO", R: 1e15, d: 8.148, nd: 1.0, elemId: 0, sd: 10.505425214053433 },
    { label: "6", R: -14.64, d: 1.92, nd: 1.7283, elemId: 4, sd: 12.2 },
    { label: "7", R: -19.44, d: 0.096, nd: 1.0, elemId: 0, sd: 14.1 },
    { label: "8", R: -98.4, d: 6.24, nd: 1.6204, elemId: 5, sd: 16.6 },
    { label: "9", R: -22.4, d: 62.699493782692684, nd: 1.0, elemId: 0, sd: 16.6 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1 (I)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (II+III)", fromSurface: "3", toSurface: "5" },
    { text: "G3 (IV)", fromSurface: "6", toSurface: "7" },
    { text: "G4 (V)", fromSurface: "8", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  focusDescription:
    "Not modeled — fixed Example I optical stack; 1.0 m production MFD retained as metadata only.",
  closeFocusM: 1.0,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
