import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║   LENS DATA — NIKON R-UW AF FISHEYE-NIKKOR 13mm f/2.8              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,579,169 Example 1, Table 1 (Mouri / Nikon).     ║
 * ║  Underwater fisheye for the Nikonos RS AF SLR system.              ║
 * ║  10 elements / 7 groups, all spherical.                            ║
 * ║                                                                    ║
 * ║  The object-side medium is water (n = 1.33306). The patent gives   ║
 * ║  F = 12.32 mm, FNO = 2.87, and 2ω = 170.6°. Independent paraxial   ║
 * ║  trace of the tabulated prescription gives EFL = 12.3995 mm and    ║
 * ║  BFD = 39.3394 mm from R17 to the paraxial image plane.            ║
 * ║                                                                    ║
 * ║  Stop handling: the patent table does not assign an axial stop     ║
 * ║  coordinate, but FIG. 1 places SP between G4 and G5, close to G5.  ║
 * ║  The 10.30 mm R9-R10 air gap is therefore split as 8.80 mm +       ║
 * ║  1.50 mm. The stop semi-diameter (6.63 mm) reproduces F/2.87 from  ║
 * ║  the computed underwater EFL and paraxial entrance pupil.           ║
 * ║                                                                    ║
 * ║  Focus: the patent allows either unit focus or a G1/G7-fixed       ║
 * ║  internal-unit focus moving G2-G6 together. No close-focus spacing ║
 * ║  table is published, so this file models the infinity prescription ║
 * ║  only and leaves `var` empty.                                      ║
 * ║                                                                    ║
 * ║  NOTE ON G7: the plane-parallel plate is retained because it is a  ║
 * ║  patent-listed optical group in Example 1 and may be a waterproof  ║
 * ║  rear window. It has zero optical power but shifts the image plane. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: the patent omits clear apertures. The SDs ║
 * ║  below are conservative renderer-safe estimates constrained by:     ║
 * ║    • sd/|R| < 0.90,                                                ║
 * ║    • front/rear element SD ratio ≤ 1.25,                           ║
 * ║    • positive edge thickness at each element rim, and              ║
 * ║    • signed cross-gap sag intrusion ≤ 90% of each air gap.         ║
 * ║  They are not patent-published mechanical clear apertures.          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-r-uw-af-fisheye-nikkor-13mm-f28",
  maker: "Nikon",
  name: "NIKON R-UW AF FISHEYE-NIKKOR 13mm f/2.8",
  subtitle: "US 5,579,169 Example 1 — Nikon / Mouri",
  specs: ["10 ELEMENTS / 7 GROUPS", "f = 12.32 mm in water", "F/2.87", "2ω = 170.6°", "ALL-SPHERICAL"],

  focalLengthMarketing: 13,
  focalLengthDesign: 12.399525799174961,
  apertureMarketing: 2.8,
  apertureDesign: 2.87,
  lensMounts: ["nikonos-rs"],
  imageFormat: "135-full-frame",
  patentNumber: "US 5,579,169",
  patentAuthors: ["Motohisa Mouri"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1996,
  elementCount: 10,
  groupCount: 7,

  projection: {
    kind: "fisheye-equidistant",
    focalLengthMm: 13,
    fullFieldDeg: 170.6,
    imageCircleMm: 43.3,
    maxTraceFieldDeg: 85.3,
  },

  focusDescription:
    "US 5,579,169 permits either unit focus or G1/G7-fixed internal-unit focus by translating G2-G6 together; no close-focus spacing table is published.",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "G1 water-contact meniscus",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.1,
      fl: -106.9,
      glass: "N-BK7 (SCHOTT) / 517642 crown class",
      role: "Low-index near-concentric front meniscus in direct contact with water.",
    },
    {
      id: 2,
      name: "L2",
      label: "G2 negative meniscus",
      type: "Negative Meniscus",
      nd: 1.67025,
      vd: 57.5,
      fl: -32.3,
      glass: "J-LAK02 (HIKARI) / 670574 class, close",
      role: "First strong negative meniscus after the water-contact element.",
    },
    {
      id: 3,
      name: "L3",
      label: "G3 negative meniscus",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.6,
      fl: -35.0,
      glass: "S-LAL14 (OHARA) / 697555 lanthanum crown class",
      role: "Second strong negative meniscus, reinforcing the front-group divergence.",
    },
    {
      id: 4,
      name: "L4",
      label: "G41 positive doublet element",
      type: "Biconvex Positive",
      nd: 1.59507,
      vd: 35.5,
      fl: 19.4,
      glass: "Unmatched dense flint (595355)",
      cemented: "G4",
      role: "Positive front component of the fourth-group cemented doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "G42 negative doublet element",
      type: "Negative Meniscus",
      nd: 1.79668,
      vd: 45.4,
      fl: -49.6,
      glass: "Unmatched lanthanum dense flint (797454)",
      cemented: "G4",
      role: "High-index negative rear component of G4; contributes Petzval correction.",
    },
    {
      id: 6,
      name: "L6",
      label: "G51 negative doublet element",
      type: "Negative Meniscus",
      nd: 1.79631,
      vd: 40.9,
      fl: -35.4,
      glass: "Unmatched high-index flint (796409)",
      cemented: "G5",
      role: "High-index negative front component of the fifth-group cemented doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "G52 positive doublet element",
      type: "Biconvex Positive",
      nd: 1.5186,
      vd: 69.9,
      fl: 28.8,
      glass: "J-PKH1 (HIKARI) / 519699 phosphate crown",
      cemented: "G5",
      role: "High-Abbe positive rear component of G5 for lateral-color correction.",
    },
    {
      id: 8,
      name: "L8",
      label: "G61 positive doublet element",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 69.9,
      fl: 26.4,
      glass: "Phosphate crown near J-PKH1 (517699, unmatched exact catalog)",
      cemented: "G6",
      role: "High-Abbe positive front component of the stronger rear cemented doublet.",
    },
    {
      id: 9,
      name: "L9",
      label: "G62 negative doublet element",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.3,
      fl: -73.4,
      glass: "N-SF6HT (SCHOTT) / 805254 dense flint class",
      cemented: "G6",
      role: "Low-Abbe negative rear component of G6; strongest chromatic partner in the system.",
    },
    {
      id: 10,
      name: "L10",
      label: "G7 plane-parallel plate",
      type: "Plane Parallel Plate",
      nd: 1.5168,
      vd: 64.1,
      fl: 1e15,
      glass: "N-BK7 (SCHOTT) / 517642 crown class",
      role: "Zero-power patent-listed rear plate; usable as waterproof window or filter plate.",
    },
  ],

  surfaces: [
    { label: "1", R: 54.988, d: 8.0, nd: 1.5168, elemId: 1, sd: 44.5 },
    { label: "2", R: 39.999, d: 20.0, nd: 1.0, elemId: 0, sd: 35.8 },
    { label: "3", R: 107.519, d: 3.0, nd: 1.67025, elemId: 2, sd: 19.8 },
    { label: "4", R: 17.841, d: 12.0, nd: 1.0, elemId: 0, sd: 15.9 },
    { label: "5", R: 62.107, d: 2.3, nd: 1.6968, elemId: 3, sd: 10.6 },
    { label: "6", R: 17.236, d: 2.4, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "7", R: 30.492, d: 10.9, nd: 1.59507, elemId: 4, sd: 10.6 },
    { label: "8", R: -16.104, d: 13.5, nd: 1.79668, elemId: 5, sd: 10.6 },
    { label: "9", R: -37.279, d: 8.8, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 6.63 },
    { label: "10", R: 77.9174, d: 1.5, nd: 1.79631, elemId: 6, sd: 9.5 },
    { label: "11", R: 20.537, d: 4.7, nd: 1.5186, elemId: 7, sd: 9.5 },
    { label: "12", R: -50.576, d: 1.0, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "13", R: 76.226, d: 5.2, nd: 1.5168, elemId: 8, sd: 10.5 },
    { label: "14", R: -16.237, d: 1.5, nd: 1.80518, elemId: 9, sd: 10.5 },
    { label: "15", R: -23.312, d: 1.5, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "16", R: 1e15, d: 1.2, nd: 1.5168, elemId: 10, sd: 12.0 },
    { label: "17", R: 1e15, d: 39.33944735429087, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
    { text: "G4", fromSurface: "7", toSurface: "9" },
    { text: "G5", fromSurface: "10", toSurface: "12" },
    { text: "G6", fromSurface: "13", toSurface: "15" },
    { text: "G7", fromSurface: "16", toSurface: "17" },
  ],
  doublets: [
    { text: "G4", fromSurface: "7", toSurface: "9" },
    { text: "G5", fromSurface: "10", toSurface: "12" },
    { text: "G6", fromSurface: "13", toSurface: "15" },
  ],

  closeFocusM: 0.15,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.72,
  yScFill: 0.92,
} satisfies LensDataInput;

export default LENS_DATA;
