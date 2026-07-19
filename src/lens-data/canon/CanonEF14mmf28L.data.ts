import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — CANON EF 14mm f/2.8 L USM                          ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP H05-034592 A, Numerical Example 2 (Canon / Hideki Ogawa).   ║
 * ║  Patent dimensions retained 1:1: f = 14.2 mm, f/2.892, 14 elements / ║
 * ║  10 groups, one aspherical surface. No production scaling is applied. ║
 * ║  Focus: Group I is fixed; complete Group II moves objectward.            ║
 * ║                                                                            ║
 * ║  The patent publishes no finite-focus spacing table. The close-focus     ║
 * ║  values below are an inferred rigid translation that preserves the       ║
 * ║  infinity image plane and reproduces 0.25 m / 0.10× when the object      ║
 * ║  distance is measured from that image plane.                              ║
 * ║                                                                            ║
 * ║  Surface 3's H^6 coefficient is printed without an exponent. A6 =        ║
 * ║  +2.04161e-9 is reconstructed from Example 1 and dimensional sanity;     ║
 * ║  it is not a literal complete transcription of the damaged line.         ║
 * ║                                                                            ║
 * ║  Semi-diameters are not patent-listed. These are renderer estimates      ║
 * ║  proportioned against the Example 2 section drawing, then checked for    ║
 * ║  clearance, edge thickness, surface slope, SD ratio, and signed          ║
 * ║  cross-gap sag intrusion. They are not factory clear apertures.          ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-14mm-f28-l",
  maker: "Canon",
  name: "CANON EF 14mm f/2.8 L USM",
  subtitle: "JP H05-034592 A EXAMPLE 2 — CANON / HIDEKI OGAWA",
  specs: [
    "14 ELEMENTS / 10 GROUPS",
    "f = 14.201 mm",
    "F/2.8 (DESIGN 1:2.892)",
    "FIELD: 2×56.72° (HEADING 113.4°)",
    "1 ASPHERICAL SURFACE",
    "REAR FOCUS",
  ],

  focalLengthMarketing: 14,
  focalLengthDesign: 14.201254,
  apertureMarketing: 2.8,
  apertureDesign: 2.892,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "JP H05-034592 A",
  patentAuthors: ["Hideki Ogawa"],
  patentAssignees: ["Canon Inc."],
  patentYear: 1993,
  elementCount: 14,
  groupCount: 10,

  projection: {
    kind: "rectilinear",
    // Figs. 5–6 print w = 56.72°. The Example 2 heading rounds the corresponding full field to 113.4°.
    fullFieldDeg: 113.44,
    maxTraceFieldDeg: 56.72,
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: -97.290202,
      glass: "S-LAL14 (OHARA)",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
      role: "First image-facing negative meniscus in the distributed fixed front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.60311,
      vd: 60.7,
      fl: -1210.999554,
      glass: "S-BSM14 (OHARA)",
      nC: 1.60008,
      nF: 1.61002,
      ng: 1.61541,
      role: "Weak negative meniscus whose object-side asphere corrects extreme-field distortion.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: -51.444873,
      glass: "S-LAL14 (OHARA)",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
      role: "Third image-facing negative meniscus; increases front-group divergence progressively.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -47.79789,
      glass: "S-LAH66 (OHARA)",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      role: "High-index fourth negative meniscus in the fixed front group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: -24.41362,
      glass: "S-LAL14 (OHARA)",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
      role: "Fifth negative meniscus; cemented to L6 for zonal and higher-order spherical correction.",
      cemented: "J1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.59551,
      vd: 39.2,
      fl: 21.052217,
      glass: "S-TIM8 (OHARA)",
      nC: 1.59103,
      nF: 1.60621,
      ng: 1.61501,
      role: "Positive rear component of the net-positive J1 cemented pair.",
      cemented: "J1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.56732,
      vd: 42.8,
      fl: 16.494741,
      glass: "S-TIL26 (OHARA)",
      nC: 1.56339,
      nF: 1.57664,
      ng: 1.58423,
      role: "Positive front component of the first rear-group cemented pair.",
      cemented: "J2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -63.632718,
      glass: "S-LAH66 (OHARA)",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      role: "Object-facing negative meniscus cemented behind L7; J2 remains net positive.",
      cemented: "J2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -30.293081,
      glass: "S-LAH66 (OHARA)",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      role: "Second object-facing negative meniscus immediately before the aperture stop.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.7,
      fl: 65.166257,
      glass: "S-BSM14 (OHARA)",
      nC: 1.60008,
      nF: 1.61002,
      ng: 1.61541,
      role: "Positive front component of the weakly negative post-stop J3 pair.",
      cemented: "J3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.7432,
      vd: 49.3,
      fl: -48.570574,
      glass: "S-LAM60 (OHARA)",
      nC: 1.73865,
      nF: 1.75372,
      ng: 1.76205,
      role: "Negative rear component that makes J3 net negative and bounds the corrective air lens.",
      cemented: "J3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.92286,
      vd: 21.3,
      fl: -29.223516,
      glass: "PBH71 (OHARA historical exact catalog equivalent; patent vendor unspecified)",
      role: "Very-high-index, high-dispersion negative component of the chromatically active J4 pair.",
      cemented: "J4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 24.92255,
      glass: "S-FSL5 (OHARA)",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      role: "Low-dispersion positive partner in J4; the cemented pair is net positive.",
      cemented: "J4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      fl: 42.572843,
      glass: "S-LAH65V (OHARA)",
      nC: 1.79882,
      nF: 1.81608,
      ng: 1.82569,
      role: "Final positive element; shares rear positive power and moderates spherical undercorrection.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 44.219, d: 3.1, nd: 1.6968, elemId: 1, sd: 22.0 },
    { label: "2", R: 25.992, d: 11.3, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "3A", R: 58.892, d: 5.83, nd: 1.60311, elemId: 2, sd: 16.0 },
    { label: "4", R: 52.468, d: 0.15, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "5", R: 36.687, d: 1.7, nd: 1.6968, elemId: 3, sd: 13.8 },
    { label: "6", R: 17.786, d: 6.43, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "7", R: 48.285, d: 1.3, nd: 1.7725, elemId: 4, sd: 11.0 },
    { label: "8", R: 20.678, d: 8.28, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "9", R: 205.374, d: 1.5, nd: 1.6968, elemId: 5, sd: 9.2 },
    { label: "10", R: 15.663, d: 10.13, nd: 1.59551, elemId: 6, sd: 8.8 },
    { label: "11", R: -47.65, d: 3.25, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "12", R: 57.504, d: 8.21, nd: 1.56732, elemId: 7, sd: 7.0 },
    { label: "13", R: -10.599, d: 1.5, nd: 1.7725, elemId: 8, sd: 6.4 },
    { label: "14", R: -14.346, d: 0.83, nd: 1.0, elemId: 0, sd: 6.4 },
    { label: "15", R: -14.99, d: 0.9, nd: 1.7725, elemId: 9, sd: 6.3 },
    { label: "16", R: -42.795, d: 0.5, nd: 1.0, elemId: 0, sd: 6.3 },
    { label: "STO", R: 1e15, d: 1.4, nd: 1.0, elemId: 0, sd: 6.149168 },
    { label: "18", R: 86.92, d: 8.53, nd: 1.60311, elemId: 10, sd: 6.5 },
    { label: "19", R: -69.093, d: 4.0, nd: 1.7432, elemId: 11, sd: 6.7 },
    { label: "20", R: 77.455, d: 0.69, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "21", R: -172.305, d: 0.8, nd: 1.92286, elemId: 12, sd: 6.8 },
    { label: "22", R: 32.045, d: 5.85, nd: 1.48749, elemId: 13, sd: 6.9 },
    { label: "23", R: -18.398, d: 0.15, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "24", R: 333.594, d: 3.3, nd: 1.804, elemId: 14, sd: 8.0 },
    { label: "25", R: -37.974, d: 38.72581151, nd: 1.0, elemId: 0, sd: 8.2 },
  ],

  asph: {
    "3A": {
      K: 0,
      A4: 9.62849e-6,
      A6: 2.04161e-9,
      A8: -8.992e-12,
      A10: 1.9629e-14,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "11": [3.25, 1.101053981],
    "25": [38.72581151, 40.87475753],
  },
  varLabels: [
    ["11", "D11"],
    ["25", "BF"],
  ],

  groups: [
    { text: "GROUP I — FIXED NEGATIVE", fromSurface: "1", toSurface: "11" },
    { text: "GROUP II — REAR FOCUS POSITIVE", fromSurface: "12", toSurface: "25" },
  ],
  doublets: [
    { text: "J1", fromSurface: "9", toSurface: "11" },
    { text: "J2", fromSurface: "12", toSurface: "14" },
    { text: "J3", fromSurface: "18", toSurface: "20" },
    { text: "J4", fromSurface: "21", toSurface: "23" },
  ],

  focusDescription:
    "Rear focus: fixed negative Group I; complete positive Group II translates objectward. The close endpoint is inferred from Canon's 0.25 m / 0.10× production specification; the patent publishes only infinity/25 cm aberration plots, not a spacing table.",
  closeFocusM: 0.25,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 5,
  maxFstop: 22,

  scFill: 0.55,
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
