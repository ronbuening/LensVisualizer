import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * SIGMA APO MACRO 180mm f/3.5 EX DG HSM: JP 2001-033704 A, Example 1 (実施例1).
 * Numerical table on PDF p. 4 (printed p. 3); Fig. 1 section on PDF p. 7.
 * Thirteen elements in ten groups, in four lens groups (positive, negative, positive, negative);
 * all spherical; no camera-side plate. The patent's L1-L4 are its lens groups, shown here as
 * G1-G4; element names L1-L13 are sequential model labels. C1-C3 are the cemented pairs
 * (S5-S7, S12-S14, S18-S20).
 * Every source row is kept as printed and unscaled (f = 178.6538 mm, F 3.6069, BF 54.1414 mm);
 * no value is re-optimized.
 * Source row 15 (開口絞り, aperture stop) is the iris, STO; its radius is derived from the design
 * F 3.6069. Row 21 (固定絞り, fixed stop) is kept at its printed position as the flat FS21; its
 * 16.5 mm radius is the drawn half-height of the fixed-stop line in Fig. 1. It clips only the
 * outer field (19 % of the 6.9° corner bundle on one side) and leaves the axial beam clear.
 * NOTE ON SEMI-DIAMETERS: the patent prints no clear apertures. Rims are estimated from Fig. 1
 * (PDF p. 7, native 200 dpi; S1-S25 = 166.52 mm spans 648 px, 0.257 mm/px along the axis; arc
 * fits on S11 and the stop line give about 0.25 mm/px across it) and checked by real-ray trace.
 * L1-L12 lie within 8 % of the drawing. Fig. 1 draws L13 square-cut at about 17.5 mm, but S23
 * and S24 meet near a 15.1 mm radius across their 2.54 mm gap, so L13 stops at 15.0 mm on both
 * faces. The S23/S24 pair sets `checks.gapSagFrac` 0.98, the smallest value that admits it.
 * nd/νd are the patent's ND/Vd (¶0019, d-line). Glass labels name the HOYA rows that match them
 * exactly; they do not assert the production supplier.
 * Infinity focus only. The patent also prints 0.5× and 1:1 spacings (D9, D14, D15, D20), which are
 * not modelled. As printed, their paraxial images lie 0.419 and 0.409 mm behind the printed BF,
 * and the vertex track grows by 0.0165 and 0.1151 mm.
 */
const LENS_DATA = {
  schema: 2,
  key: "sigma-apo-macro-180mm-f35-ex-dg-hsm",
  maker: "Sigma",
  name: "SIGMA APO MACRO 180mm f/3.5 EX DG HSM",
  subtitle: "JP 2001-033704 A, Example 1 — construction-based production correlation",
  visible: true,
  layout: {
    yScFill: 0.35,
  },
  catalog: {
    lensMounts: ["canon-ef", "nikon-f", "pentax-k", "sony-a", "sigma-sa"],
    imageFormat: "135-full-frame",
    elementCount: 13,
    groupCount: 10,
    specs: ["13 ELEMENTS / 10 GROUPS", "DESIGN f = 178.65 mm", "DESIGN F/3.61", "ALL SPHERICAL"],
    focalLengthMm: {
      marketing: 180,
      design: 178.6538,
    },
    fNumber: {
      marketing: 3.5,
      design: 3.6069,
    },
    closeFocusM: {
      marketing: 0.46,
    },
  },
  source: {
    patentNumber: "JP 2001-033704 A",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 2001,
    authors: ["Shinji Ogawa", "Takehisa Koyama"],
    assignees: ["Sigma Corporation"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      glass: "FC5 equivalent (HOYA)",
      focalLengthMm: 323.91282815323757,
      role: "Weak positive front element of the fixed first group G1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      glass: "FCD1 equivalent (HOYA)",
      focalLengthMm: 180.21328163828932,
      apd: "inferred",
      apdNote:
        "The patent's 1.49700 / 81.6 coordinates correspond to an FCD1-class extra-low-dispersion glass, and Sigma's catalogue drawing marks this element as SLD; the patent does not designate it.",
      role: "Low-dispersion positive meniscus of the fixed first group G1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.3,
      indexReference: "d",
      glass: "NBFD10 equivalent (HOYA)",
      focalLengthMm: -80.4039706755076,
      role: "Negative front element of the cemented doublet C1 in the fixed first group G1.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      glass: "FCD1 equivalent (HOYA)",
      focalLengthMm: 85.29359532300012,
      apd: "inferred",
      apdNote:
        "The patent's 1.49700 / 81.6 coordinates correspond to an FCD1-class extra-low-dispersion glass, and Sigma's catalogue drawing marks this element as SLD; the patent does not designate it.",
      role: "Low-dispersion positive rear element of the cemented doublet C1 in the fixed first group G1.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      glass: "FC5 equivalent (HOYA)",
      focalLengthMm: 207.15004616098673,
      role: "Positive rear meniscus of the fixed first group G1.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      glass: "TAF1 equivalent (HOYA)",
      focalLengthMm: -63.65395946135009,
      role: "Negative front element of the focusing group G2, which moves toward the image for close focus.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      glass: "TAF1 equivalent (HOYA)",
      focalLengthMm: -53.60186906559163,
      role: "Negative front element of the cemented doublet C2 in the focusing group G2.",
      cemented: "C2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      glass: "FDS90 equivalent (HOYA)",
      focalLengthMm: 65.57100250081558,
      role: "Dense-flint positive rear element of the cemented doublet C2; achromatizes the focusing group G2.",
      cemented: "C2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      glass: "BACD14 equivalent (HOYA)",
      focalLengthMm: 84.3235574664103,
      role: "Positive front element of the focusing group G3, which moves toward the object for close focus.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      glass: "BACD14 equivalent (HOYA)",
      focalLengthMm: 69.13856872957774,
      role: "Positive front element of the cemented doublet C3 in the focusing group G3.",
      cemented: "C3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.3,
      indexReference: "d",
      glass: "E-FD10 equivalent (HOYA)",
      focalLengthMm: -104.39965748798552,
      role: "Flint negative rear element of the cemented doublet C3; achromatizes the focusing group G3.",
      cemented: "C3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      glass: "BSC7 equivalent (HOYA)",
      focalLengthMm: -145.12062316219308,
      role: "Negative front element of the fixed rear group G4.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      glass: "BSC7 equivalent (HOYA)",
      focalLengthMm: -153.2566129225573,
      role: "Negative rear meniscus of the fixed rear group G4.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 203.3186,
      d: 4.4589,
      sd: 32,
      medium: 1,
    },
    {
      label: "2",
      R: -701.8517,
      d: 0.2,
      sd: 32,
    },
    {
      label: "3",
      R: 65.1873,
      d: 6.9575,
      sd: 31,
      medium: 2,
    },
    {
      label: "4",
      R: 231.0082,
      d: 8.7833,
      sd: 31,
    },
    {
      label: "5",
      R: 105.0914,
      d: 2.5,
      sd: 26,
      medium: 3,
    },
    {
      label: "6",
      R: 40.4934,
      d: 9.0947,
      sd: 26,
      medium: 4,
    },
    {
      label: "7",
      R: 837.1765,
      d: 0.2,
      sd: 26,
    },
    {
      label: "8",
      R: 67.1323,
      d: 4.2611,
      sd: 23,
      medium: 5,
    },
    {
      label: "9",
      R: 196.1001,
      d: 9.9681,
      sd: 23,
    },
    {
      label: "10",
      R: -433.678,
      d: 2.5,
      sd: 20,
      medium: 6,
    },
    {
      label: "11",
      R: 55.6005,
      d: 9.2234,
      sd: 20,
    },
    {
      label: "12",
      R: -1224.1984,
      d: 1.5241,
      sd: 18,
      medium: 7,
    },
    {
      label: "13",
      R: 42.8803,
      d: 3.8991,
      sd: 18,
      medium: 8,
    },
    {
      label: "14",
      R: 180.5401,
      d: 41.2023,
      sd: 18,
    },
    {
      label: "STO",
      R: "flat",
      d: 23.1829,
    },
    {
      label: "16",
      R: 139.3223,
      d: 4.7425,
      sd: 20,
      medium: 9,
    },
    {
      label: "17",
      R: -79.0665,
      d: 0.2,
      sd: 20,
    },
    {
      label: "18",
      R: 137.1656,
      d: 5.6264,
      sd: 20,
      medium: 10,
    },
    {
      label: "19",
      R: -58.9865,
      d: 1.8,
      sd: 20,
      medium: 11,
    },
    {
      label: "20",
      R: -266.5302,
      d: 5.5193,
      sd: 20,
    },
    {
      label: "FS21",
      R: "flat",
      d: 15.158,
      sd: 16.5,
    },
    {
      label: "22",
      R: -129.1924,
      d: 1.4778,
      sd: 18,
      medium: 12,
    },
    {
      label: "23",
      R: 179.4842,
      d: 2.5415,
      sd: 18,
    },
    {
      label: "24",
      R: -61.3636,
      d: 1.5,
      sd: 15,
      medium: 13,
    },
    {
      label: "25",
      R: -274.7097,
      d: 54.1414,
      sd: 15,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only; the model carries the patent's infinity spacings. The patent focuses internally: G1 and G4 stay fixed while, from infinity to 1:1, G2 moves about 31.2 mm toward the image and G3 about 16.0 mm toward the object. The patent's 0.5× and 1:1 spacings are printed but not modelled; its 1:1 state places the object about 0.46 m from the image, matching Sigma's 0.46 m minimum focus distance.",
  },
  gaps: {},
  aperture: {
    nominalFNumber: 3.6069,
    fStops: [3.6069, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
    blades: 9,
  },
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "9" },
    { text: "G2", fromSurface: "10", toSurface: "14" },
    { text: "G3", fromSurface: "16", toSurface: "20" },
    { text: "G4", fromSurface: "22", toSurface: "25" },
  ],
  doublets: [
    { text: "C1", fromSurface: "5", toSurface: "7" },
    { text: "C2", fromSurface: "12", toSurface: "14" },
    { text: "C3", fromSurface: "18", toSurface: "20" },
  ],
  checks: {
    gapSagFrac: 0.98,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
