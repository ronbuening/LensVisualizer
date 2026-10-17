import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-S DX NIKKOR 10-24mm f/3.5-4.5 G ED                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 8,169,718 B2, Embodiment / Example 4.                         ║
 * ║ Production correlation is convergent, not manufacturer-confirmed.          ║
 * ║                                                                            ║
 * ║ Patent design: four moving groups with powers − / + / − / +.             ║
 * ║ Product count: 14 physical elements / 9 air-separated groups.              ║
 * ║ Model count: 16 refractive media entries because the thin S4-S5 and        ║
 * ║ S24-S25 aspheric media are retained explicitly as composite layers.        ║
 * ║                                                                            ║
 * ║ Zoom-only variable gaps: S7→STO (D7), S14→S15 (D14), S17→S18 (D17),      ║
 * ║ and modeled S26→IMG BFD. All inf/close pairs are identical because         ║
 * ║ Example 4 publishes no numerical near-focus state.                         ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. Patent FIG.10 identifies Gr1B    ║
 * ║ as the internal focus member moving objectward, but no travel is invented. ║
 * ║                                                                            ║
 * ║ Stop: S8 is published. Its physical diameter is not. The stop radius is    ║
 * ║ derived from the design f-number at each zoom station; nominalFNumber      ║
 * ║ carries the published design targets f/3.60, 4.15, 4.60. Agreement with    ║
 * ║ those targets is therefore calibration, not independent evidence of a      ║
 * ║ diaphragm diameter.                                                        ║
 * ║                                                                            ║
 * ║ Semi-diameters: S1A = 23.2 mm is source-verified by the patent's           ║
 * ║ effective-aperture / normal-angle table. All others are modeled from       ║
 * ║ paraxial ray envelopes, FIG.10 proportions, and current edge-thickness,    ║
 * ║ actual-rim-slope, conic-domain, shared-gap, and representative exact-ray    ║
 * ║ checks. They are not patent-published clear apertures.                     ║
 * ║                                                                            ║
 * Fig. 10 live-diagram refinement (2026-09-26): S15/S16/S17 use 8.2 mm optical
 * rims, matching G3 to its approximately 8-mm figure height without changing field coverage.
 *
 * ║ Source discrepancies retained: the p.20 normal-angle heading says #11,     ║
 * ║ while the data reproduce surface #1; Formulae (33)/(34) numerically use    ║
 * ║ D7 although the prose defines a G1-to-G2 distance.                         ║
 * ║                                                                            ║
 * ║ No scale factor is applied. The patent's standard conic K convention is    ║
 * ║ used directly; all published nonzero even-order coefficients are retained. ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-af-s-dx-nikkor-10-24mm-f35-45g-ed",
  maker: "Nikon",
  name: "NIKON AF-S DX NIKKOR 10-24mm f/3.5-4.5 G ED",
  subtitle: "US 8,169,718 B2 — Example 4; convergent production correlation",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "aps-c",
    specs: [
      "14 PHYSICAL ELEMENTS / 9 GROUPS",
      "16 MODELED REFRACTIVE MEDIA ENTRIES",
      "f = 10.295–23.393 mm (published design states)",
      "F/3.60–4.60 (published design states)",
      "4 ASPHERICAL SURFACES",
      "NO INTERNAL FOCUS RECONSTRUCTION",
    ],
    elementCount: 14,
    groupCount: 9,
    focalLengthMm: { marketing: [10, 24], design: [10.294414913984538, 23.392172195731973] },
  },

  source: {
    patentNumber: "US 8,169,718 B2",
    patentYear: 2012,
    authors: ["Dayong Li", "Hiroshi Yamamoto", "Hiroki Harada"],
    assignees: ["Tamron Co., Ltd.", "Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front negative meniscus",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.7433,
      vd: 49.22,
      indexReference: "d",
      focalLengthMm: -21.54776987799788,
      glass: "NBF1 (supplier-neutral catalog proxy)",
      role: "Gr1A front negative meniscus; both surfaces are aspherical.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Gr1B substrate",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      focalLengthMm: -30.558320646266004,
      glass: "TAFD30 (supplier-neutral catalog proxy)",
      role: "Primary glass body of the inferred S3-S5 composite asphere piece.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L2c",
      label: "Gr1B thin composite layer",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.5361,
      vd: 41.21,
      indexReference: "d",
      focalLengthMm: 315.0889467689288,
      glass: "Unmatched (thin composite-asphere layer coordinate 536412; no public catalog identity established)",
      role: "Thin modeled medium terminating at aspherical S5A; retained separately from the substrate.",
      diagramLabel: "L2c",
    },
    {
      id: 4,
      name: "L3",
      label: "Gr1B positive meniscus",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30.05,
      indexReference: "d",
      focalLengthMm: 50.53429661390362,
      glass: "E-FD15 (supplier-neutral catalog proxy)",
      role: "Rear member of the published Gr1B internal-focus subset.",
      diagramLabel: "L3",
    },
    {
      id: 5,
      name: "L4",
      label: "G2 positive meniscus",
      type: "Positive Meniscus",
      nd: 1.68893,
      vd: 31.16,
      indexReference: "d",
      focalLengthMm: 22.034449314924665,
      glass: "M-FD80 (supplier-neutral catalog proxy)",
      role: "Front component of the first cemented pair in the positive second zoom group.",
      diagramLabel: "L4",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L5",
      label: "G2 negative meniscus",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      focalLengthMm: -22.33495007008572,
      glass: "TAFD30 (supplier-neutral catalog proxy)",
      role: "Rear component of the first cemented pair in G2.",
      diagramLabel: "L5",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L6",
      label: "G2 positive biconvex",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.25,
      indexReference: "d",
      focalLengthMm: 17.364333794043755,
      glass: "M-BACD5N (supplier-neutral catalog proxy)",
      role: "Positive component of the second cemented pair in G2.",
      diagramLabel: "L6",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L7",
      label: "G2 negative meniscus",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.27,
      indexReference: "d",
      focalLengthMm: -36.7927037347523,
      glass: "NBFD15 (supplier-neutral catalog proxy)",
      role: "Rear negative component of G2.",
      diagramLabel: "L7",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L8",
      label: "G3 biconcave negative",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      indexReference: "d",
      focalLengthMm: -15.56160780771656,
      glass: "N-LAF34 (supplier-neutral catalog proxy)",
      role: "Strong negative component of the third zoom group.",
      diagramLabel: "L8",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L9",
      label: "G3 positive meniscus",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      focalLengthMm: 25.379929427538247,
      glass: "H-ZF52 (supplier-neutral catalog proxy)",
      role: "Positive partner in the negative third-group cemented doublet.",
      diagramLabel: "L9",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L10",
      label: "G4 ED positive",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 41.26288210820819,
      glass: "FCD1 (supplier-neutral catalog proxy)",
      apd: "inferred",
      apdNote:
        "ED-class inference from the coordinate-compatible FCD1 curve (catalog dPgF approximately +0.0312); not patent-measured partial dispersion or proof of production glass identity.",
      role: "Front low-dispersion positive element of the fourth zoom group.",
      diagramLabel: "L10",
    },
    {
      id: 12,
      name: "L11",
      label: "G4 negative meniscus",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      indexReference: "d",
      focalLengthMm: -30.27484883950935,
      glass: "TAFD25 (supplier-neutral catalog proxy)",
      role: "Front negative member of the central G4 cemented triplet.",
      diagramLabel: "L11",
      cemented: "T1",
    },
    {
      id: 13,
      name: "L12",
      label: "G4 ED positive",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 18.125055880018483,
      glass: "FCD1 (supplier-neutral catalog proxy)",
      apd: "inferred",
      apdNote:
        "ED-class inference from the coordinate-compatible FCD1 curve (catalog dPgF approximately +0.0312); not patent-measured partial dispersion or proof of production glass identity.",
      role: "Low-dispersion positive center member of the G4 cemented triplet.",
      diagramLabel: "L12",
      cemented: "T1",
    },
    {
      id: 14,
      name: "L13",
      label: "G4 negative meniscus",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      indexReference: "d",
      focalLengthMm: -58.83168998267921,
      glass: "TAFD25 (supplier-neutral catalog proxy)",
      role: "Rear negative member of the G4 cemented triplet.",
      diagramLabel: "L13",
      cemented: "T1",
    },
    {
      id: 15,
      name: "L14c",
      label: "Rear thin composite layer",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.5146,
      vd: 49.96,
      indexReference: "d",
      focalLengthMm: 466.3725952777856,
      glass: "Unmatched (thin composite-asphere layer coordinate 515500; no public catalog identity established)",
      role: "Thin modeled aspheric medium at S24A-S25; retained separately from its substrate.",
      diagramLabel: "L14c",
    },
    {
      id: 16,
      name: "L14",
      label: "Rear composite substrate",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.89,
      indexReference: "d",
      focalLengthMm: -211.37333779134505,
      glass: "E-FL5 (supplier-neutral catalog proxy)",
      role: "Substrate of the inferred S24-S26 rear composite asphere piece.",
      diagramLabel: "L14",
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 72.871,
      d: 3,
      sd: 23.2,
      medium: 1,
      asphere: {
        K: -4.855874,
        A4: 1.47578e-5,
        A6: -3.54016e-8,
        A8: 4.54072e-11,
        A10: -1.16025e-14,
        A12: 2.27158e-17,
        A14: -3.0892e-20,
        A16: -6.77424e-23,
        A18: -3.35578e-26,
        A20: 1.37873e-28,
      },
    },
    {
      label: "2A",
      R: 12.9,
      d: 16.2015,
      sd: 17.1,
      asphere: {
        K: -1.110553,
        A4: 2.77891e-5,
        A6: 4.0437e-8,
        A8: 6.12679e-11,
        A10: 3.62235e-13,
        A12: -1.10342e-14,
        A14: 5.28104e-18,
        A16: 3.20816e-19,
        A18: 1.45731e-22,
        A20: -3.47259e-24,
      },
    },
    { label: "3", R: 770.1839, d: 1.1, sd: 14.1, medium: 2 },
    { label: "4", R: 26.0522, d: 0.3, sd: 13.8, medium: 3 },
    {
      label: "5A",
      R: 30.6791,
      d: 1.1966,
      sd: 13.7,
      asphere: { K: 0.33503, A4: 2.26449e-5, A6: -9.66072e-8, A8: 1.76373e-10, A10: 1.14032e-13, A12: 1.38279e-15 },
    },
    { label: "6", R: 20.4544, d: 4.7353, sd: 13.5, medium: 4 },
    { label: "7", R: 43.9685, sd: 12.1 },
    { label: "STO", R: "flat", d: 1.5074 },
    { label: "9", R: -68.4574, d: 2.5124, sd: 6.9, medium: 5 },
    { label: "10", R: -12.611, d: 1.7924, sd: 7.6, medium: 6 },
    { label: "11", R: -37.3079, d: 0.15, sd: 8.1 },
    { label: "12", R: 34.8661, d: 3.7882, sd: 8.1, medium: 7 },
    { label: "13", R: -13.8945, d: 0.8, sd: 8.25, medium: 8 },
    { label: "14", R: -26.8129, sd: 9.3 },
    { label: "15", R: -30.4122, d: 0.8, sd: 8.2, medium: 9 },
    { label: "16", R: 20.1071, d: 2.8524, sd: 8.2, medium: 10 },
    { label: "17", R: 292.4999, sd: 8.2 },
    { label: "18", R: 45.2832, d: 4.358, sd: 12.7, medium: 11 },
    { label: "19", R: -36.285, d: 0.15, sd: 12.7 },
    { label: "20", R: 48.9769, d: 0.9, sd: 13, medium: 12 },
    { label: "21", R: 17.4, d: 12.2843, sd: 12.2, medium: 13 },
    { label: "22", R: -14.3, d: 1.1, sd: 12.2, medium: 14 },
    { label: "23", R: -20.276, d: 0.2, sd: 12.5 },
    {
      label: "24A",
      R: -37.3436,
      d: 0.35,
      sd: 12.7,
      medium: 15,
      asphere: { K: -0.608663, A4: -9.83362e-6, A6: 2.14587e-8, A8: -1.14789e-10, A10: 1.3051e-12, A12: -2.67583e-15 },
    },
    { label: "25", R: -32.4182, d: 1.5, sd: 12.7, medium: 16 },
    { label: "26", R: -44.7821, sd: 13.2 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 10.295, nominalFNumber: 3.6, label: "Wide" },
      { focalLengthMm: 15.598, nominalFNumber: 4.15 },
      { focalLengthMm: 23.393, nominalFNumber: 4.6, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.24,
    description:
      "Published internal focusing: Gr1B moves toward the object from infinity toward near focus. Example 4 provides no numerical near-focus spacing state, so this model preserves infinity-focus zoom states only (NO_INTERNAL_RECONSTRUCTION).",
  },

  gaps: {
    "7": {
      label: "D7 / G1→STO",
      values: [
        [21.1006, 21.1006],
        [10.4692, 10.4692],
        [3.7599, 3.7599],
      ],
    },
    "14": {
      label: "D14 / G2→G3",
      values: [
        [0.827, 0.827],
        [7.752, 7.752],
        [14.2056, 14.2056],
      ],
    },
    "17": {
      label: "D17 / G3→G4",
      values: [
        [11.0939, 11.0939],
        [5.8381, 5.8381],
        [0.8, 0.8],
      ],
    },
    "26": {
      label: "S26→IMG (modeled BFD)",
      values: [
        [38.90350813244964, 38.90350813244964],
        [45.89462110996301, 45.89462110996301],
        [58.4550344501004, 58.4550344501004],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22] },

  groups: [
    { text: "G1 (−)", fromSurface: "1A", toSurface: "7" },
    { text: "G2 (+)", fromSurface: "9", toSurface: "14" },
    { text: "G3 (−)", fromSurface: "15", toSurface: "17" },
    { text: "G4 (+)", fromSurface: "18", toSurface: "26" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "5A" },
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "15", toSurface: "17" },
    { text: "T1", fromSurface: "20", toSurface: "23" },
    { text: "H2", fromSurface: "24A", toSurface: "26" },
  ],

  layout: { yScFill: 0.68 },
} satisfies LensDataV2Input;

export default LENS_DATA;
