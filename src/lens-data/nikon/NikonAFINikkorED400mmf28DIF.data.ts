import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-I NIKKOR 400mm f/2.8 D IF-ED                                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 5,438,455 A, Example 1 (Masahiro Nakashima / Nikon Corporation).                   ║
 * ║ Patent prescription retained at native scale: F = 392.0066 mm, FN = 2.88; no uniform scaling.      ║
 * ║ 10 physical elements / 7 air-separated groups; all spherical.                                      ║
 * ║ Focus status: PUBLISHED. G2 translates imageward 17.8317 mm; d9 + d14 remains 31.2811 mm.           ║
 * ║                                                                                                      ║
 * ║ FILTER NORMALIZATION: patent surfaces 18-19 are a 2.00 mm, n = 1.51680 plane-parallel filter and   ║
 * ║ are excluded from the active model. The source s17-to-image distance is replaced by the paraxial    ║
 * ║ air-equivalent 46.34 + 2/1.51680 + 104.5069 = 152.1654654 mm.                                      ║
 * ║                                                                                                      ║
 * ║ STO MODEL: the patent locates S only graphically between G3 and the filter. Figure 1 gives an        ║
 * ║ approximate s17→S / s17→filter fraction of about one-half; S is modeled 23.7 mm behind s17.          ║
 * ║ STO.sd = 22.3038 mm is then solved from the actual front-group paraxial matrix so the entrance       ║
 * ║ pupil gives the patent design f-number 2.88. The residual STO→IMG air distance is 128.4654654 mm.   ║
 * ║ This stop position is a documented modeling inference, not a source-tabulated axial coordinate.      ║
 * ║                                                                                                      ║
 * ║ SEMI-DIAMETERS: the patent does not tabulate clear apertures. Surface 1 is anchored to condition     ║
 * ║ (8), which implies an effective front semi-diameter ≈ 68.046 mm; the modeled sd is 68.2 mm.         ║
 * ║ Remaining SDs follow the infinity marginal-ray envelope and the relative diameters in Figure 1;      ║
 * ║ the rear cemented group is validator-limited below the schematic outline. Checks cover edge thickness,║
 * ║ actual spherical rim slope, shared-band cross-gap intrusion, default off-axis containment, and       ║
 * ║ render-trim-equivalent geometric clearance. No layout control is used to conceal invalid geometry.   ║
 * ║                                                                                                      ║
 * ║ GLASS: patent nd/νd values are authoritative. Names and nC/nF/ng/dPgF are HIKARI catalog            ║
 * ║ correlations from the Stage-1 glass audit; the patent does not identify a glass vendor or melt.      ║
 * ║                                                                                                      ║
 * ║ closeFocusM = 3.3 uses the patent's published close object-to-image distance R = 3300 mm for the     ║
 * ║ modeled endpoint; it is not presented as an independently verified production marketing MFD.        ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-af-i-nikkor-400mm-f28d-if-ed",
  maker: "Nikon",
  name: "NIKON AF-I NIKKOR 400mm f/2.8D IF-ED",
  subtitle: "US 5,438,455 A — Example 1; production-lens correlation",
  specs: [
    "10 ELEMENTS / 7 GROUPS",
    "400mm f/2.8 MARKETED",
    "392.0066 mm PATENT F",
    "INTERNAL FOCUS — PUBLISHED G2 MOTION",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 400,
  focalLengthDesign: 392.005464,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 5,438,455 A",
  patentAuthors: ["Masahiro Nakashima"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1995,
  elementCount: 10,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      fl: 294.9252,
      glass: "J-FKH1 (HIKARI catalog correlation; patent vendor unspecified)",
      apd: "inferred",
      apdNote: "ED-class correlation from the patent coordinate; the source publishes nd/vd only.",
      nC: 1.49598,
      nF: 1.502009,
      ng: 1.505256,
      dPgF: 0.0327,
      role: "First positive collector in fixed unit G1; very-high-Abbe member.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      fl: 311.2363,
      glass: "J-FKH1 (HIKARI catalog correlation; patent vendor unspecified)",
      apd: "inferred",
      apdNote: "ED-class correlation from the patent coordinate; the source publishes nd/vd only.",
      nC: 1.49598,
      nF: 1.502009,
      ng: 1.505256,
      dPgF: 0.0327,
      role: "Second positive collector in fixed unit G1; paired with L13 for chromatic and power balance.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.2,
      fl: -337.5786,
      glass: "J-LAF7 (HIKARI catalog correlation; patent vendor unspecified)",
      nC: 1.743271,
      nF: 1.764535,
      ng: 1.77704,
      dPgF: 0.0029,
      role: "Negative member completing the front G11 subgroup.",
    },
    {
      id: 4,
      name: "L14a",
      label: "L14a",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.6,
      fl: -147.1464,
      glass: "J-LAK14 (HIKARI catalog correlation; patent vendor unspecified)",
      nC: 1.692974,
      nF: 1.705525,
      ng: 1.71234,
      dPgF: -0.0082,
      role: "Front member of cemented component L14 in fixed positive unit G1.",
      cemented: "L14",
    },
    {
      id: 5,
      name: "L14b",
      label: "L14b",
      type: "Positive Meniscus",
      nd: 1.59319,
      vd: 67.9,
      fl: 127.0552,
      glass: "J-PSKH1 (HIKARI catalog correlation; patent vendor unspecified)",
      nC: 1.59054,
      nF: 1.599276,
      ng: 1.604028,
      dPgF: 0.0135,
      role: "Rear member of cemented component L14; completes fixed unit G1.",
      cemented: "L14",
    },
    {
      id: 6,
      name: "L21",
      label: "L21",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.1,
      fl: -168.5296,
      glass: "J-BK7A (HIKARI catalog correlation; patent vendor unspecified)",
      nC: 1.514324,
      nF: 1.522382,
      ng: 1.526699,
      dPgF: -0.001,
      role: "Front negative element of translating internal-focus unit G2.",
    },
    {
      id: 7,
      name: "L22a",
      label: "L22a",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: 139.5398,
      glass: "J-SF03 (HIKARI catalog correlation; patent vendor unspecified)",
      nC: 1.836505,
      nF: 1.872084,
      ng: 1.894197,
      dPgF: 0.0171,
      role: "Positive front member of the negative cemented component L22 in moving unit G2.",
      cemented: "L22",
    },
    {
      id: 8,
      name: "L22b",
      label: "L22b",
      type: "Biconcave Negative",
      nd: 1.53172,
      vd: 49.1,
      fl: -84.2658,
      glass: "J-LLF6 (HIKARI line-data correlation; patent νd differs by +0.32)",
      nC: 1.528453,
      nF: 1.539353,
      ng: 1.545481,
      dPgF: -0.0003,
      role: "Negative rear member of cemented component L22; G2 is negative overall.",
      cemented: "L22",
    },
    {
      id: 9,
      name: "L3a",
      label: "L3a",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.6,
      fl: 103.6319,
      glass: "J-FKH1 (HIKARI catalog correlation; patent vendor unspecified)",
      apd: "inferred",
      apdNote: "ED-class correlation from the patent coordinate; the source publishes nd/vd only.",
      nC: 1.49598,
      nF: 1.502009,
      ng: 1.505256,
      dPgF: 0.0327,
      role: "Positive front member of fixed rear unit G3.",
      cemented: "L3",
    },
    {
      id: 10,
      name: "L3b",
      label: "L3b",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.1,
      fl: -312.2041,
      glass: "J-SF8 (HIKARI catalog correlation; patent vendor unspecified)",
      nC: 1.682509,
      nF: 1.704616,
      ng: 1.717865,
      dPgF: 0.0072,
      role: "Rear member of G3; its two in-situ interface powers sum positive in the cemented assembly.",
      cemented: "L3",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 198.753, d: 19.7, nd: 1.49782, elemId: 1, sd: 68.2 },
    { label: "2", R: -543.38, d: 0.1, nd: 1.0, elemId: 0, sd: 67.2 },
    { label: "3", R: 165.419, d: 16.7, nd: 1.49782, elemId: 2, sd: 67.1 },
    { label: "4", R: -2363.7, d: 3.3, nd: 1.0, elemId: 0, sd: 62.3 },
    { label: "5", R: -810.41, d: 6.5, nd: 1.7495, elemId: 3, sd: 61.0 },
    { label: "6", R: 369.129, d: 71.3, nd: 1.0, elemId: 0, sd: 59.3 },
    { label: "7", R: 155.231, d: 4.5, nd: 1.6968, elemId: 4, sd: 49.0 },
    { label: "8", R: 61.012, d: 17.5, nd: 1.59319, elemId: 5, sd: 47.5 },
    { label: "9", R: 286.104, d: 8.2485, nd: 1.0, elemId: 0, sd: 43.0 },
    { label: "10", R: -308.425, d: 4.5, nd: 1.5168, elemId: 6, sd: 37.0 },
    { label: "11", R: 121.973, d: 19.8, nd: 1.0, elemId: 0, sd: 36.0 },
    { label: "12", R: -283.082, d: 7.0, nd: 1.84666, elemId: 7, sd: 35.0 },
    { label: "13", R: -84.3, d: 4.0, nd: 1.53172, elemId: 8, sd: 35.0 },
    { label: "14", R: 97.213, d: 23.0326, nd: 1.0, elemId: 0, sd: 34.0 },
    { label: "15", R: 138.856, d: 10.2, nd: 1.49782, elemId: 9, sd: 30.5 },
    { label: "16", R: -80.085, d: 5.0, nd: 1.68893, elemId: 10, sd: 30.0 },
    { label: "17", R: -130.842, d: 23.7, nd: 1.0, elemId: 0, sd: 30.0 },
    { label: "STO", R: 1e15, d: 128.4654654008439, nd: 1.0, elemId: 0, sd: 22.3038064323743 },
  ],

  asph: {},

  /* Published inner-focus endpoint pairs from Example 1. */
  var: {
    "9": [8.2485, 26.0802],
    "14": [23.0326, 5.2009],
  },
  varLabels: [
    ["9", "d9 — G1→G2"],
    ["14", "d14 — G2→G3"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "9" },
    { text: "G2 (FOCUS)", fromSurface: "10", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "17" },
  ],
  doublets: [
    { text: "L14", fromSurface: "7", toSurface: "9" },
    { text: "L22", fromSurface: "12", toSurface: "14" },
    { text: "L3", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 3.3,
  focusDescription:
    "PUBLISHED internal focus: negative unit G2 translates 17.8317 mm imageward from infinity to the patent R=3.300 m endpoint; d9 expands 8.2485→26.0802 mm while d14 contracts 23.0326→5.2009 mm, preserving d9+d14=31.2811 mm. No reconstructed focus state is used.",

  /* ── Aperture configuration ── */
  nominalFno: 2.88,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
