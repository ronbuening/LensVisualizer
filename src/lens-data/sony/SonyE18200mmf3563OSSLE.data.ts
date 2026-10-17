import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SONY E 18-200mm f/3.5-6.3 OSS LE                                                    ║
 * ╠════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 8,553,339 B2, Embodiment / Example 1 (Yamanaka et al.; Tamron / Sony).          ║
 * ║ Five functional zoom groups with + / − / + / − / + power; G4 is the published focusing group.   ║
 * ║ G3 and G5 share the same axial zoom displacement; L10+L11 is the transverse anti-vibration set.  ║
 * ║                                                                                                  ║
 * ║ Physical count: 17 patent lens pieces. The `elements` array has 19 optical-media entries because ║
 * ║ the patent explicitly retains bonded resin layers on L4 and L15 as active media. elementCount    ║
 * ║ therefore remains 17. The numerical prescription's 13 air-spaced groups match the SEL18200LE.    ║
 * ║                                                                                                  ║
 * ║ Zoom-only variable gaps: D5, D14, BF. Zoom + focus gaps: D25, D29. Focus status: PUBLISHED.      ║
 * ║ The patent directly tabulates infinity and 0.5 m states at wide / intermediate / tele positions. ║
 * ║ The correlated SEL18200LE likewise specifies a 0.5 m minimum focus distance.                    ║
 * ║                                                                                                  ║
 * ║ No uniform scale is applied. Radii, thicknesses, indices, Abbe values, and asphere coefficients  ║
 * ║ preserve the patent values. The patent uses the standard conic K convention.                      ║
 * ║                                                                                                  ║
 * ║ Semi-diameters are inferred because the patent publishes none. They were set from paraxial       ║
 * ║ marginal/chief-ray envelopes using Y=14.2 mm, measured patent Fig. 1 proportions, and the 62 mm  ║
 * ║ SEL18200LE filter constraint. The stop radius is derived from the design f-number at each zoom   ║
 * ║ station, using the published infinity F-number plots.                                            ║
 * ║                                                                                                  ║
 * ║ No sensor cover glass, filter, inactive dummy/flare-cutter plane, or mechanical part is modeled. ║
 * ╚════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sony-e-18-200mm-f35-63-oss-le",
  maker: "Sony",
  name: "SONY E 18-200mm f/3.5-6.3 OSS LE",
  subtitle: "US 8,553,339 B2 Example 1 — Tamron / Sony; closest production correlation to SEL18200LE",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "aps-c",
    specs: [
      "17 PHYSICAL LENS PIECES / 13 PATENT AIR-SPACED GROUPS",
      "MARKETED 18-200mm f/3.5-6.3",
      "PATENT f = 18.4671 / 69.9995 / 193.7966 mm",
      "PATENT FNO = 3.57 / 5.60 / 6.47 AT INFINITY",
      "5 PATENT ASPH SURFACES / 4 PIECES; 2 INFERRED ED",
    ],
    elementCount: 17,
    groupCount: 13,
    focalLengthMm: { marketing: [18, 200], design: [18.466857655, 193.789739921] },
  },

  source: {
    patentNumber: "US 8,553,339 B2",
    patentYear: 2013,
    authors: ["Hisayuki Yamanaka", "Makoto Kanai", "Masafumi Sueyoshi", "Masaharu Hosoi"],
    assignees: ["Tamron Co., Ltd.", "Sony Corporation"],
  },

  /* ── Optical media / elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      focalLengthMm: -168.6919,
      glass: "N-LASF46B (SCHOTT catalog equivalent; production supplier unspecified; patent class 904313)",
      role: "Front negative member of the positive G1 collector; cemented to L2.",
      diagramLabel: "L1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 124.3212,
      glass: "H-FK61 (CDGM catalog equivalent; production supplier unspecified; patent class 497816)",
      apd: "inferred",
      apdNote:
        "One of the production lens's two ED positions; the patent nd/vd row maps to an ED fluorophosphate catalog class, but publishes no partial-dispersion value.",
      role: "High-Abbe positive member of the front cemented pair.",
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.39,
      focalLengthMm: 135.9941,
      glass: "S-PHM52 (OHARA catalog equivalent; production supplier unspecified; patent class 618634)",
      role: "Rear positive meniscus of G1.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4r",
      label: "L4 Bonded Resin",
      type: "Hybrid Resin Layer (1× Asph)",
      nd: 1.5146,
      vd: 49.96,
      focalLengthMm: -356.7079,
      glass: "Unmatched (optical resin layer; vendor not identified)",
      role: "Patent-described object-side resin layer forming the hybrid asphere on L4.",
      diagramLabel: "L4r",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus (Hybrid Asph)",
      nd: 1.90366,
      vd: 31.31,
      focalLengthMm: -20.0544,
      glass: "N-LASF46B (SCHOTT catalog equivalent; production supplier unspecified; patent class 904313)",
      role: "Leading negative member of G2; substrate for the bonded front asphere.",
      diagramLabel: "L4",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: -23.8579,
      glass: "S-LAH55 (OHARA catalog equivalent; production supplier unspecified; patent class 835427)",
      role: "Negative variator element in G2.",
      diagramLabel: "L5",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 20.3635,
      glass: "N-SF66 (SCHOTT catalog equivalent; production supplier unspecified; patent class 923209)",
      role: "Strong positive correction element within the otherwise negative G2 variator.",
      diagramLabel: "L6",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: -47.6566,
      glass: "S-LAH55 (OHARA catalog equivalent; production supplier unspecified; patent class 835427)",
      role: "Rear negative meniscus of G2.",
      diagramLabel: "L7",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.61881,
      vd: 63.85,
      focalLengthMm: 22.1401,
      glass: "M-PCD4 (OHARA catalog equivalent; production supplier unspecified; patent class 619639)",
      role: "Glass-molded bi-asphere at the front of positive G3.",
      diagramLabel: "L8",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: -66.6362,
      glass: "J-LASF016 (HIKARI catalog equivalent; production supplier unspecified; patent class 773496)",
      role: "Negative meniscus following L8 in G3.",
      diagramLabel: "L9",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.59201,
      vd: 67.02,
      focalLengthMm: 24.9228,
      glass: "M-PCD51 (OHARA catalog equivalent; production supplier unspecified; patent class 592670)",
      role: "Positive aspheric member of the L10+L11 transverse anti-vibration subset.",
      diagramLabel: "L10",
      cemented: "IS1",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -80.7274,
      glass: "J-SF03 (HIKARI catalog equivalent; production supplier unspecified; patent class 847238)",
      role: "Negative member cemented to L10; moves with L10 orthogonally for stabilization.",
      diagramLabel: "L11",
      cemented: "IS1",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      focalLengthMm: -17.339,
      glass: "N-LASF46B (SCHOTT catalog equivalent; production supplier unspecified; patent class 904313)",
      role: "Negative front member of the rear G3 cemented pair.",
      diagramLabel: "L12",
      cemented: "D2",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.15,
      focalLengthMm: 17.6091,
      glass: "E-CF6 (HOYA catalog equivalent; production supplier unspecified; patent class 517522)",
      role: "Positive rear member of the L12+L13 cemented pair.",
      diagramLabel: "L13",
      cemented: "D2",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.72825,
      vd: 28.32,
      focalLengthMm: 28.1351,
      glass: "H-ZF4A (CDGM catalog equivalent; production supplier unspecified; patent class 728283)",
      role: "Positive front member of the negative G4 internal focusing group.",
      diagramLabel: "L14",
      cemented: "H2",
    },
    {
      id: 16,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative (Hybrid Asph)",
      nd: 1.6968,
      vd: 55.46,
      focalLengthMm: -13.1075,
      glass: "J-LAK14 (HIKARI catalog equivalent; production supplier unspecified; patent class 697555)",
      role: "Negative G4 member; carries the patent-described bonded rear aspheric resin layer.",
      diagramLabel: "L15",
      cemented: "H2",
    },
    {
      id: 17,
      name: "L15r",
      label: "L15 Bonded Resin",
      type: "Hybrid Resin Layer (1× Asph)",
      nd: 1.5146,
      vd: 49.96,
      focalLengthMm: 435.5657,
      glass: "Unmatched (optical resin layer; vendor not identified)",
      role: "Patent-described image-side resin layer forming the hybrid asphere on L15.",
      diagramLabel: "L15r",
      cemented: "H2",
    },
    {
      id: 18,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: 30.3978,
      glass: "N-FK5 (SCHOTT catalog equivalent; production supplier unspecified; patent class 487704)",
      apd: "inferred",
      apdNote:
        "One of the production lens's two ED positions; its high-Abbe patent row is the second ED-class match, but the patent publishes no partial-dispersion value.",
      role: "Positive front member of rear group G5.",
      diagramLabel: "L16",
    },
    {
      id: 19,
      name: "L17",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: -34.694,
      glass: "S-LAH55 (OHARA catalog equivalent; production supplier unspecified; patent class 835427)",
      role: "Rear negative meniscus of G5.",
      diagramLabel: "L17",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 140.6286, d: 1.5, sd: 27.5, medium: 1 },
    { label: "2", R: 72.7778, d: 7.2029, sd: 27.5, medium: 2 },
    { label: "3", R: -395.7178, d: 0.2, sd: 25.3 },
    { label: "4", R: 61.5306, d: 5.5571, sd: 26.0, medium: 3 },
    { label: "5", R: 221.7716, sd: 25.1 },
    {
      label: "6A",
      R: 90.6266,
      d: 0.2,
      sd: 11.8,
      medium: 4,
      asphere: { K: 0, A4: 2.00246e-5, A6: -4.07575e-8, A8: 1.35108e-10, A10: 2.54007e-13, A12: 0, A14: 0 },
    },
    { label: "7", R: 60.6266, d: 1.2, sd: 11.8, medium: 5 },
    { label: "8", R: 13.8208, d: 7.5749, sd: 11.3 },
    { label: "9", R: -21.7485, d: 0.9, sd: 9.8, medium: 6 },
    { label: "10", R: 240.9339, d: 0.2, sd: 9.8 },
    { label: "11", R: 52.229, d: 3.5618, sd: 9.8, medium: 7 },
    { label: "12", R: -28.3941, d: 1.5245, sd: 9.8 },
    { label: "13", R: -17.839, d: 0.8, sd: 9.8, medium: 8 },
    { label: "14", R: -33.0, sd: 9.8 },
    { label: "STO", R: "flat", d: 1.0 },
    {
      label: "16A",
      R: 18.4782,
      d: 4.0353,
      sd: 9.5,
      medium: 9,
      asphere: { K: -1.6765, A4: 1.73663e-5, A6: -1.78587e-9, A8: 1.55565e-9, A10: 5.28154e-12, A12: 0, A14: 0 },
    },
    {
      label: "17A",
      R: -48.5651,
      d: 0.7167,
      sd: 9.5,
      asphere: { K: 0, A4: 4.00586e-5, A6: -8.5783e-8, A8: 2.49011e-9, A10: -1.89872e-13, A12: 0, A14: 0 },
    },
    { label: "18", R: 41.8835, d: 0.9, sd: 9.2, medium: 10 },
    { label: "19", R: 22.8773, d: 2.9125, sd: 9.2 },
    {
      label: "20A",
      R: 33.2873,
      d: 3.3,
      sd: 9.0,
      medium: 11,
      asphere: { K: 0, A4: -1.59299e-5, A6: 4.84995e-8, A8: -1.30605e-9, A10: 9.03492e-12, A12: 0, A14: 0 },
    },
    { label: "21", R: -25.5242, d: 0.8, sd: 9.0, medium: 12 },
    { label: "22", R: -41.3225, d: 0.526, sd: 8.8 },
    { label: "23", R: 265.5713, d: 0.8, sd: 8.8, medium: 13 },
    { label: "24", R: 14.7745, d: 4.4219, sd: 8.0, medium: 14 },
    { label: "25", R: -21.3443, sd: 8.0 },
    { label: "26", R: -1799.6857, d: 2.2, sd: 7.8, medium: 15 },
    { label: "27", R: -20.2692, d: 0.7, sd: 7.8, medium: 16 },
    { label: "28", R: 16.8599, d: 0.25, sd: 6.8, medium: 17 },
    { label: "29A", R: 18.1394, sd: 6.8, asphere: { K: 0, A4: -2.10416e-5, A6: 1.08897e-7, A8: -6.5254e-9, A10: 5.298e-11, A12: 0, A14: 0 } },
    { label: "30", R: 24.6924, d: 4.7278, sd: 11.0, medium: 18 },
    { label: "31", R: -34.7332, d: 0.5818, sd: 9.2 },
    { label: "32", R: -25.1727, d: 1.0, sd: 9.2, medium: 19 },
    { label: "33", R: -195.8334, sd: 9.2 },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Published zoom and focus states ── */
    // (moved from publishedStations) The close-focus row is source-tabulated.
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 18.4671, nominalFNumber: 3.57, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 69.9995, nominalFNumber: 5.6, published: true, publishedFocus: [1] },
      { focalLengthMm: 193.7966, nominalFNumber: 6.47, label: "Tele", published: true, publishedFocus: [1] },
    ],
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.5,
    description:
      "PUBLISHED 0.5 m focus states at all three zoom control points. G4 (L14+L15 with rear resin) translates toward the image plane; only D25 and D29 change with focus and their sum is conserved to patent-table rounding. The correlated SEL18200LE likewise specifies a 0.5 m minimum focus distance.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [1.0, 1.0],
        [34.0712, 34.0712],
        [64.3105, 64.3105],
      ],
    },
    "14": {
      label: "D14",
      values: [
        [25.4255, 25.4255],
        [6.345, 6.345],
        [1.7, 1.7],
      ],
    },
    "25": {
      label: "D25",
      values: [
        [1.4, 1.6487],
        [4.7187, 6.521],
        [1.4999, 9.1651],
      ],
    },
    "29A": {
      label: "D29",
      values: [
        [9.5946, 9.3459],
        [6.2759, 4.4736],
        [9.4947, 1.8296],
      ],
    },
    "33": {
      label: "BF",
      values: [
        [18.3076, 18.3076],
        [40.0562, 40.0562],
        [53.5093, 53.5093],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 5.6, 6.3, 8, 11, 16, 22, 32, 40], maxFNumber: 40, blades: 7 },

  /* ── Functional-group annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (−)", fromSurface: "6A", toSurface: "14" },
    { text: "G3A", fromSurface: "16A", toSurface: "19" },
    { text: "G3B OSS", fromSurface: "20A", toSurface: "22" },
    { text: "G3C", fromSurface: "23", toSurface: "25" },
    { text: "G4 FOCUS (−)", fromSurface: "26", toSurface: "29A" },
    { text: "G5 (+)", fromSurface: "30", toSurface: "33" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "IS", fromSurface: "20A", toSurface: "22" },
    { text: "D2", fromSurface: "23", toSurface: "25" },
    { text: "H2", fromSurface: "26", toSurface: "29A" },
  ],

  /* ── Layout ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
