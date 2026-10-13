import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON TV-NIKKOR 11.5-69mm f/1.2 (Nikon S-100)              ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 4,437,733, Example 1 / Fig. 1, Nippon Kogaku K.K.             ║
 * ║ 14 lens elements plus one active half-prism; 11 air-spaced groups.      ║
 * ║ All-spherical 6× zoom. No scaling is applied.                              ║
 * ║                                                                            ║
 * ║ Zoom gaps: D5, D10, D12. The printed middle-state D12 = 6.99 mm is        ║
 * ║ retained in the audit evidence but modeled as 5.99 mm because the raw     ║
 * ║ value breaks the fixed-relay track and published Bf consistency.           ║
 * ║ G3 reverses direction between the middle and tele stations.                ║
 * ║                                                                            ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent states 0.93 m short  ║
 * ║ distance capability and identifies G1 as the focusing group, but does not  ║
 * ║ publish finite-focus spacings or the object-distance datum. closeFocusM    ║
 * ║ preserves the source capability for metadata/UI use; all authored var     ║
 * ║ pairs remain infinity-state zoom spacings with no invented focus motion.   ║
 * ║                                                                            ║
 * ║ Stop: not published. STO is modeled 1.70 mm behind r19 and 0.10 mm ahead  ║
 * ║ of the half-prism front face, in the only substantial air interval nearest ║
 * ║ the relay's image-space telecentric condition. Its 14.65023 mm radius is  ║
 * ║ paraxially calibrated to the published f/1.2 at the middle station; this   ║
 * ║ is not independent evidence of the physical diaphragm diameter.            ║
 * ║                                                                            ║
 * ║ Semi-diameters: r1-r3 use the published 53.5 mm forward-lens effective    ║
 * ║ diameter (26.75 mm radius). Remaining SDs are modeled from Fig. 1          ║
 * ║ proportions and exact meridional ray/geometry checks; r6/r7 were widened to
 * ║ 12.0/12.0 mm after optical-rim review; adjacent r8–r10 rims retain gap clearance; they are not         ║
 * ║ patent-tabulated clear apertures.                                           ║
 * ║                                                                            ║
 * ║ The half-prism is retained as a real n=1.57501, νd=41.3 plane plate.       ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

// Patent optical-rim and compatible glass review: see the sibling .audit.md (2026-10-02 UTC).
const LENS_DATA = {
  key: "nikon-tv-nikkor-115-69-f12-s100",
  maker: "Nikon",
  name: "NIKON TV-NIKKOR 11.5-69mm f/1.2 (Nikon S-100)",
  subtitle: "US 4,437,733 Example 1 — strong S-100 correlation; patent mapping inferred",
  specs: [
    "15 GLASS BODIES / 11 AIR-SPACED GROUPS",
    "5 PATENT LENS GROUPS + PRISM",
    "6× ZOOM",
    "f/1.2",
    "ALL-SPHERICAL",
    "HALF-PRISM RELAY",
  ],

  focalLengthMarketing: [11.5, 69],
  focalLengthDesign: [11.735474, 66.962358],
  apertureMarketing: 1.2,
  apertureDesign: 1.2,
  lensMounts: ["fixed-lens-camera"],
  patentNumber: "US 4,437,733",
  patentAuthors: ["Tomowaki Takahashi", "Kunio Konno", "Toshihiro Sasaya"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1984,
  elementCount: 15,
  groupCount: 11,

  elements: [
    {
      id: 1,
      name: "L1a",
      diagramLabel: "L1a",
      label: "L1 front member",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.5,
      indexReference: "d",
      fl: -103.991,
      glass: "805255 — SF6/TIH6-class (vendor unresolved)",
      role: "Front member of the cemented positive focusing component in G1.",
      cemented: "L1",
    },
    {
      id: 2,
      name: "L1b",
      diagramLabel: "L1b",
      label: "L1 rear member",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      fl: 52.931,
      glass: "713539 — LAL8/LAK8-class (vendor unresolved)",
      role: "Rear member of the cemented positive focusing component in G1.",
      cemented: "L1",
    },
    {
      id: 3,
      name: "L2",
      diagramLabel: "L2",
      label: "L2",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      fl: 148.469,
      glass: "517642 — BK7-class (vendor unresolved)",
      role: "Second positive component of the G1 focusing group.",
    },
    {
      id: 4,
      name: "L3",
      diagramLabel: "L3",
      label: "L3",
      type: "Negative Meniscus",
      nd: 1.74443,
      vd: 49.4,
      indexReference: "d",
      fl: -24.573,
      glass: "M-NBF1 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "First negative component of the G2 variator.",
    },
    {
      id: 5,
      name: "L4a",
      diagramLabel: "L4a",
      label: "L4 front member",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      fl: -17.37,
      glass: "603607 — SK14/BSM14-class (vendor unresolved)",
      role: "Negative front member of the cemented G2 component.",
      cemented: "L4",
    },
    {
      id: 6,
      name: "L4b",
      diagramLabel: "L4b",
      label: "L4 rear member",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.5,
      indexReference: "d",
      fl: 27.656,
      glass: "805255 — SF6/TIH6-class (vendor unresolved)",
      role: "Positive rear member of the cemented G2 component.",
      cemented: "L4",
    },
    {
      id: 7,
      name: "L5",
      diagramLabel: "L5",
      label: "L5",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      fl: -40.55,
      glass: "603607 — SK14/BSM14-class (vendor unresolved)",
      role: "Negative G3 compensator element.",
    },
    {
      id: 8,
      name: "L6",
      diagramLabel: "L6",
      label: "L6",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      fl: 61.922,
      glass: "713539 — LAL8/LAK8-class (vendor unresolved)",
      role: "First positive component of the fixed G4 forward relay.",
    },
    {
      id: 9,
      name: "L7a",
      diagramLabel: "L7a",
      label: "L7 front member",
      type: "Biconvex Positive",
      nd: 1.56384,
      vd: 60.8,
      indexReference: "d",
      fl: 33.62,
      glass: "564608 — SK11-class (vendor unresolved)",
      role: "Positive front member of the cemented middle component in G4.",
      cemented: "L7",
    },
    {
      id: 10,
      name: "L7b",
      diagramLabel: "L7b",
      label: "L7 rear member",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 28.2,
      indexReference: "d",
      fl: -53.166,
      glass: "740282 — SF3/TIH3-class (vendor unresolved)",
      role: "Negative rear member of the cemented middle component in G4.",
      cemented: "L7",
    },
    {
      id: 11,
      name: "L8",
      diagramLabel: "L8",
      label: "L8",
      type: "Positive Meniscus",
      nd: 1.74,
      vd: 44.9,
      indexReference: "d",
      fl: 68.183,
      glass: "Unmatched (740449; current authoritative catalogs)",
      role: "Third positive component of the fixed G4 forward relay.",
    },
    {
      id: 12,
      name: "P",
      diagramLabel: "P",
      label: "Half-prism P",
      type: "Plane-Parallel Plate",
      nd: 1.57501,
      vd: 41.3,
      indexReference: "d",
      glass: "575413 — QF3-class (vendor unresolved)",
      role: "Active viewfinder half-prism between G4 and G5; zero paraxial power but finite reduced propagation.",
    },
    {
      id: 13,
      name: "L9a",
      diagramLabel: "L9a",
      label: "L9 front member",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 28.2,
      indexReference: "d",
      fl: -27.163,
      glass: "740282 — SF3/TIH3-class (vendor unresolved)",
      role: "Front member of the cemented positive component in G5.",
      cemented: "L9",
    },
    {
      id: 14,
      name: "L9b",
      diagramLabel: "L9b",
      label: "L9 rear member",
      type: "Biconvex Positive",
      nd: 1.56384,
      vd: 60.8,
      indexReference: "d",
      fl: 24.062,
      glass: "564608 — SK11-class (vendor unresolved)",
      role: "Rear member of the cemented positive component in G5.",
      cemented: "L9",
    },
    {
      id: 15,
      name: "L10",
      diagramLabel: "L10",
      label: "L10",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      fl: 44.199,
      glass: "517642 — BK7-class (vendor unresolved)",
      role: "Rear positive relay component in G5.",
    },
  ],

  surfaces: [
    { label: "1", R: 82.283, d: 1.3, nd: 1.80518, elemId: 1, sd: 26.75 },
    { label: "2", R: 41.208, d: 11.7, nd: 1.713, elemId: 2, sd: 26.75 },
    { label: "3", R: -395.394, d: 0.1, nd: 1.0, elemId: 0, sd: 26.75 },
    { label: "4", R: 42.755, d: 5.7, nd: 1.5168, elemId: 3, sd: 22.5 },
    { label: "5", R: 92.175, d: 1.96, nd: 1.0, elemId: 0, sd: 22.0 },
    { label: "6", R: 122.416, d: 1.0, nd: 1.74443, elemId: 4, sd: 12.0 },
    { label: "7", R: 15.859, d: 6.5, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "8", R: -20.06, d: 1.0, nd: 1.60311, elemId: 5, sd: 9.5 },
    { label: "9", R: 22.337, d: 3.5, nd: 1.80518, elemId: 6, sd: 9.5 },
    { label: "10", R: -6704.737, d: 32.71, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "11", R: -21.619, d: 1.0, nd: 1.60311, elemId: 7, sd: 11.0 },
    { label: "12", R: -189.609, d: 3.42, nd: 1.0, elemId: 0, sd: 12.2 },
    { label: "13", R: -42.947, d: 3.9, nd: 1.713, elemId: 8, sd: 14.0 },
    { label: "14", R: -22.593, d: 0.1, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "15", R: 158.92, d: 9.0, nd: 1.56384, elemId: 9, sd: 16.4 },
    { label: "16", R: -21.084, d: 1.0, nd: 1.74, elemId: 10, sd: 16.4 },
    { label: "17", R: -46.347, d: 0.2, nd: 1.0, elemId: 0, sd: 16.8 },
    { label: "18", R: 44.489, d: 3.8, nd: 1.74, elemId: 11, sd: 18.0 },
    { label: "19", R: 362.562, d: 1.7, nd: 1.0, elemId: 0, sd: 18.0 },
    // Inferred aperture stop: 0.10 mm ahead of the half-prism front face; radius calibrated from published f/1.2.
    { label: "STO", R: 1e15, d: 0.1, nd: 1.0, elemId: 0, sd: 14.650231 },
    { label: "20", R: 1e15, d: 10.0, nd: 1.57501, elemId: 12, sd: 18.0 },
    { label: "21", R: 1e15, d: 25.1, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "22", R: 144.303, d: 1.0, nd: 1.74, elemId: 13, sd: 10.5 },
    { label: "23", R: 17.591, d: 6.0, nd: 1.56384, elemId: 14, sd: 10.5 },
    { label: "24", R: -52.016, d: 0.2, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "25", R: 19.77, d: 4.0, nd: 1.5168, elemId: 15, sd: 10.0 },
    { label: "26", R: 136.874, d: 16.54, nd: 1.0, elemId: 0, sd: 10.0 },
  ],

  asph: {},

  var: {
    "5": [
      [1.96, 1.96],
      [20.04, 20.04],
      [31.05, 31.05],
    ],
    "10": [
      [32.71, 32.71],
      [12.06, 12.06],
      [4.0, 4.0],
    ],
    "12": [
      [3.42, 3.42],
      [5.99, 5.99],
      [3.05, 3.05],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["10", "D10"],
    ["12", "D12"],
  ],

  zoomPositions: [11.5, 28.0, 69.0],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6", toSurface: "10" },
    { text: "G3", fromSurface: "11", toSurface: "12" },
    { text: "G4", fromSurface: "13", toSurface: "19" },
    { text: "G5", fromSurface: "22", toSurface: "26" },
  ],

  doublets: [
    { text: "L1", fromSurface: "1", toSurface: "3" },
    { text: "L4", fromSurface: "8", toSurface: "10" },
    { text: "L7", fromSurface: "15", toSurface: "17" },
    { text: "L9", fromSurface: "22", toSurface: "24" },
  ],

  closeFocusM: 0.93,
  focusDescription: "Only infinity-focus zoom states are modeled; the patent does not publish finite-focus spacings for G1.",

  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
