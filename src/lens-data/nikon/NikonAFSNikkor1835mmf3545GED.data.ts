import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-S NIKKOR 18-35mm f/3.5-4.5 G ED                               ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 9,256,059 B2, Example 1 (Konica Minolta / Nikon).                   ║
 * ║ Two-group negative-positive retrofocus zoom for Nikon F / 135 full-frame coverage.  ║
 * ║ Patent prescription: 12 physical lens elements / 8 groups, 4 aspherical surfaces.   ║
 * ║                                                                                    ║
 * ║ Zoom variable gaps: D10 (Gr1-Gr2 spacing) and D27 (27A to the PT plate).            ║
 * ║ Focus: patent states GrF (surfaces 11-14) moves imageward for close focus, but      ║
 * ║ close-focus spacing values are not published. This file therefore models the        ║
 * ║ infinity-focus zoom positions only; var pairs are identical for inf/close.          ║
 * ║                                                                                    ║
 * ║ Cover glass handling: patent surfaces 28-29 are a plane-parallel plate PT           ║
 * ║ (d=1.90, nd=1.51680, νd=64.20) plus BF 1.00 mm air, modeled in `rearPlates`         ║
 * ║ (traced, not drawn). d27 stores the patent's physical 37.70 / 47.12 / 59.88 mm.     ║
 * ║ Track: table sum to image 139.78 / 134.74 / 136.84 mm (derived) vs printed TL       ║
 * ║ 139.69 / 134.64 / 136.74 mm. The ~0.10 mm excess recurs in all six patent           ║
 * ║ examples; it is source TL bookkeeping, not a transcription error.                   ║
 * ║                                                                                    ║
 * ║ Semi-diameters: patent does not list SDs. Values here are estimated from            ║
 * ║ marginal/chief-ray clearance and then reduced to satisfy spherical rim, asphere     ║
 * ║ slope, edge-thickness, and cross-gap constraints.                                   ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-afs-nikkor-18-35mm-f35-45g-ed",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 18-35mm f/3.5-4.5 G ED",
  subtitle: "US 9,256,059 B2 Example 1 — Konica Minolta / Nikon",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "12 elements / 8 groups",
      "18-35mm FX",
      "Patent EFL 18.50-34.00mm",
      "Patent f/3.6-4.63; marketed f/3.5-4.5",
      "2 ED-class / 3 aspherical elements",
      "Inner focus described; close-focus spacings not tabulated",
    ],
    elementCount: 12,
    groupCount: 8,
    focalLengthMm: { marketing: [18, 35], design: [18.498, 33.994] },
  },

  source: {
    patentNumber: "US 9,256,059 B2",
    patentYear: 2016,
    authors: ["Kana Inoue", "Mamoru Terada", "Haruo Sato"],
    assignees: ["Konica Minolta, Inc.", "Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: -55.1,
      glass: "S-LAL18 (OHARA) class",
      role: "Front negative meniscus of the retrofocus first group.",
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.7457,
    },
    {
      id: 2,
      name: "L2r",
      label: "L2 composite resin",
      type: "Composite Aspherical Resin Layer",
      nd: 1.514,
      vd: 53.0,
      glass: "Composite asphere resin (patent nd=1.51400, vd=53.00)",
      role: "Thin molded resin layer forming aspherical surface 3A.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L2",
      label: "Element 2 substrate",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: -55.8,
      glass: "S-LAL18 (OHARA) class",
      role: "Glass substrate of the second negative meniscus.",
      cemented: "H1",
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.7457,
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3 substrate",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: -35.0,
      glass: "N-LASF44 (Schott) / 804465 dense lanthanum flint class",
      role: "High-index negative meniscus substrate in Gr1.",
      cemented: "H2",
    },
    {
      id: 5,
      name: "L3r",
      label: "L3 composite resin",
      type: "Composite Aspherical Resin Layer",
      nd: 1.514,
      vd: 53.0,
      glass: "Composite asphere resin (patent nd=1.51400, vd=53.00)",
      role: "Thin molded resin layer forming aspherical surface 8A.",
      cemented: "H2",
    },
    {
      id: 6,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.68893,
      vd: 31.16,
      focalLengthMm: 47.7,
      glass: "S-TIM28 (OHARA) / 689311 dense flint class",
      role: "Positive compensating element at the rear of Gr1.",
      nC: 1.6825,
      nF: 1.70467,
      ng: 1.71797,
    },
    {
      id: 7,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: -70.3,
      glass: "S-TIH6 (OHARA) / SF6-class titanium heavy flint",
      role: "Negative member of the GrF focusing doublet.",
      cemented: "D1",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 8,
      name: "C1",
      label: "Cement 1",
      type: "Optical Cement Layer",
      nd: 1.514,
      vd: 42.8,
      glass: "Optical cement (patent nd=1.51400, vd=42.80)",
      role: "Explicit 0.01 mm cement layer between L5 and L6.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.84,
      focalLengthMm: 37.1,
      glass: "SF2 (Schott) class",
      role: "Positive member of the GrF focusing doublet.",
      cemented: "D1",
    },
    {
      id: 10,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive ED",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 28.1,
      glass: "S-FPL51 (OHARA) / FCD1-class ED fluorophosphate",
      role: "High-power positive ED-class member behind the stop.",
      cemented: "D2",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 11,
      name: "C2",
      label: "Cement 2",
      type: "Optical Cement Layer",
      nd: 1.514,
      vd: 42.8,
      glass: "Optical cement (patent nd=1.51400, vd=42.80)",
      role: "Explicit 0.01 mm cement layer between L7 and L8.",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: -60.9,
      glass: "S-LAL18 (OHARA) class",
      role: "Negative partner to the first rear-group ED-class positive element.",
      cemented: "D2",
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.7457,
    },
    {
      id: 13,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: -21.1,
      glass: "N-LASF44 (Schott) / 804465 dense lanthanum flint class",
      role: "First negative element of the three-element cemented lens LS.",
      cemented: "LS",
    },
    {
      id: 14,
      name: "C3",
      label: "Cement 3",
      type: "Optical Cement Layer",
      nd: 1.514,
      vd: 42.8,
      glass: "Optical cement (patent nd=1.51400, vd=42.80)",
      role: "Explicit 0.01 mm cement layer between L9 and L10.",
      cemented: "LS",
    },
    {
      id: 15,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive ED",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 14.2,
      glass: "S-FPL51 (OHARA) / FCD1-class ED fluorophosphate",
      role: "Central positive ED-class element of LS.",
      cemented: "LS",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 16,
      name: "C4",
      label: "Cement 4",
      type: "Optical Cement Layer",
      nd: 1.514,
      vd: 42.8,
      glass: "Optical cement (patent nd=1.51400, vd=42.80)",
      role: "Explicit 0.01 mm cement layer between L10 and L11.",
      cemented: "LS",
    },
    {
      id: 17,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: -15.6,
      glass: "S-LAL18 (OHARA) class",
      role: "Rear negative element of LS.",
      cemented: "LS",
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.7457,
    },
    {
      id: 18,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.58313,
      vd: 59.39,
      focalLengthMm: 36.9,
      glass: "S-BAL42 (OHARA) class",
      role: "Double-aspherical rear field corrector.",
      nC: 1.58014,
      nF: 1.58996,
      ng: 1.5953,
    },
  ],

  surfaces: [
    { label: "1", R: 55.466, d: 2.3, sd: 25.0, medium: 1 },
    { label: "2", R: 22.882, d: 5.75, sd: 20.5 },
    {
      label: "3A",
      R: 42.477,
      d: 0.08,
      sd: 17.0,
      medium: 2,
      asphere: {
        K: 1.487,
        A4: 1.168e-5,
        A6: -4.148e-9,
        A8: 1.101e-12,
        A10: 1.894e-14,
        A12: -2.952e-17,
        A14: -9.759e-21,
      },
    },
    { label: "4", R: 31.616, d: 1.8, sd: 17.0, medium: 3 },
    { label: "5", R: 19.407, d: 7.62, sd: 15.2 },
    { label: "6", R: 201.373, d: 1.73, sd: 15.2, medium: 4 },
    { label: "7", R: 27.873, d: 0.08, sd: 14.0, medium: 5 },
    {
      label: "8A",
      R: 23.059,
      d: 6.63,
      sd: 14.0,
      asphere: { K: -4.715, A4: 3.7e-5, A6: -1.31e-7, A8: 2.082e-10, A10: -3.243e-13, A12: 1.792e-17, A14: -9.759e-21 },
    },
    { label: "9", R: 39.97, d: 5.45, sd: 17.8, medium: 6 },
    { label: "10", R: -175.401, sd: 17.8 },
    { label: "11", R: 49.393, d: 2.0, sd: 12.8, medium: 7 },
    { label: "12", R: 25.904, d: 0.01, sd: 12.4, medium: 8 },
    { label: "13", R: 25.904, d: 4.84, sd: 12.4, medium: 9 },
    { label: "14", R: -302.784, d: 6.15, sd: 11.3 },
    { label: "STO", R: "flat", d: 1.9 },
    { label: "16", R: 18.791, d: 8.37, sd: 9.3, medium: 10 },
    { label: "17", R: -46.108, d: 0.01, sd: 10.3, medium: 11 },
    { label: "18", R: -46.108, d: 1.0, sd: 10.3, medium: 12 },
    { label: "19", R: 1198.193, d: 1.0, sd: 10.4 },
    { label: "20", R: 38.088, d: 1.0, sd: 10.45, medium: 13 },
    { label: "21", R: 11.617, d: 0.01, sd: 10.45, medium: 14 },
    { label: "22", R: 11.617, d: 7.85, sd: 8.9, medium: 15 },
    { label: "23", R: -13.915, d: 0.01, sd: 8.9, medium: 16 },
    { label: "24", R: -13.915, d: 1.0, sd: 11.0, medium: 17 },
    { label: "25", R: 63.311, d: 1.21, sd: 11.0 },
    {
      label: "26A",
      R: 999.995,
      d: 4.41,
      sd: 10.8,
      medium: 18,
      asphere: {
        K: 0,
        A4: 2.136e-5,
        A6: 1.939e-7,
        A8: 1.663e-9,
        A10: 1.02e-11,
      },
    },
    {
      label: "27A",
      R: -21.943,
      sd: 10.8,
      asphere: { K: -10.003, A4: -9.654e-5, A6: 1.095e-6, A8: -7.277e-9, A10: 5.471e-11 },
    }, // d27 var — gap to the PT plate
  ],

  zoom: {
    stations: [
      { focalLengthMm: 18.5, nominalFNumber: 3.5, label: "Wide" },
      { focalLengthMm: 25.08, nominalFNumber: 4.0, label: "Mid" },
      { focalLengthMm: 34.0, nominalFNumber: 4.5, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.28,
    description:
      "Patent inner focus: GrF (surfaces 11-14) moves toward the image side for close focus. " +
      "The patent gives only infinity-focus zoom spacings, so this transcription models the three infinity zoom positions.",
  },

  gaps: {
    "10": {
      label: "D10",
      values: [
        [26.973, 26.973],
        [12.514, 12.514],
        [1.85, 1.85],
      ],
    },
    "27A": {
      label: "D27",
      values: [
        [37.7, 37.7],
        [47.12, 47.12],
        [59.88, 59.88],
      ],
    },
  },

  aperture: { fStops: [3.5, 4.0, 4.5, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  /* ── Cover plate PT (patent surfaces 28–29): traced, not drawn ── */
  rearPlates: [
    {
      label: "PT",
      thicknessMm: 1.9,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0,
      source: "US 9,256,059 B2, Example 1 surfaces 28–29 (BF 1.00)",
    },
  ],

  groups: [
    { text: "Gr1 (-)", fromSurface: "1", toSurface: "10" },
    { text: "GrF focus", fromSurface: "11", toSurface: "14" },
    { text: "GrR", fromSurface: "16", toSurface: "27A" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3A", toSurface: "5" },
    { text: "H2", fromSurface: "6", toSurface: "8A" },
    { text: "D1", fromSurface: "11", toSurface: "14" },
    { text: "D2", fromSurface: "16", toSurface: "19" },
    { text: "LS", fromSurface: "20", toSurface: "25" },
  ],

  layout: { scFill: 0.66, yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
