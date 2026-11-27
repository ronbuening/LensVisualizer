import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Hiroshi Ito’s sole example in US 2,779,239. All printed radii, thicknesses and
 * air spaces are scaled by 28 from f = 1 to millimetres. The body table gives
 * d₂ = 0.083 and r₆ = −0.2090. Claim 2 differs on both. The table gives
 * n₃ = 1.7400 despite an impossible inequality in the text.
 * Figure 1 supplies the rim estimates and the diaphragm position within d₅.
 * The front cemented edge is limited by the glass geometry. The rear cemented
 * edge is set at 6.3 mm, between Canon’s section (about 6.1–6.26 mm) and the
 * Figure 1 knife edge (about 6.6 mm, beyond where the printed surfaces
 * cross). The rim at surface 5 allows for the width of the oblique beam. The
 * flat land on surface 6 extends from the 4.38 mm clear radius to the
 * 5.04 mm rim drawn in Figure 1. The iris radius follows from f/2.8.
 * The infinity image plane and whole-lens extension to Canon’s 1 m
 * minimum focus are paraxial calculations.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-28mm-f28-ltm",
  maker: "Canon",
  name: "CANON 28mm f/2.8",
  subtitle: "US 2,779,239, sole example — Canon / Ito",
  visible: true,
  source: {
    patentNumber: "US 2,779,239",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1957,
    authors: ["Hiroshi Ito"],
    assignees: ["Canon Camera Co., Inc."],
    errata: [
      {
        status: "corrected",
        surface: "2",
        field: "d",
        printed: 1.764,
        applied: 2.324,
        evidence: ["source-summary", "aberration-figure"],
        note: "Claim 2 prints d₂ = 0.063 (1.764 mm). The body table gives 0.083 (2.324 mm), which reproduces the stated focal length and the wide-open spherical aberration in Figure 2.",
      },
      {
        status: "unresolved",
        note: "The description and Claim 1 give the impossible condition 1.30 > n₃ > 1.64. The numerical tables agree on n₃ = 1.7400.",
      },
    ],
  },
  catalog: {
    lensMounts: ["leica-ltm"],
    imageFormat: "135-full-frame",
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: {
      marketing: 28,
      design: 28,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    specs: ["6 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "72° DESIGN FIELD"],
    closeFocusM: {
      marketing: 1,
    },
  },
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6166,
      vd: 36.6,
      indexReference: "d",
      diagramLabel: "L1a",
      glass: "F4 (SUMITA catalog equivalent)",
      focalLengthMm: -28.76,
      role: "Negative member of the front doublet. Its cemented face against L1b corrects chromatic aberration and limits the aberrations of oblique beams.",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.697,
      vd: 54.7,
      indexReference: "d",
      diagramLabel: "L1b",
      glass: "Unmatched (nd 1.6970 / νd 54.7)",
      focalLengthMm: 13.34,
      role: "Positive member of the front doublet, which gives the doublet its converging power.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L2",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 28.2,
      indexReference: "d",
      diagramLabel: "L2",
      glass: "FD3 (HOYA catalog equivalent)",
      focalLengthMm: -38.15,
      role: "Negative singlet ahead of the diaphragm. Its steep concave rear face helps correct astigmatism and spherical aberration.",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6889,
      vd: 31.1,
      indexReference: "d",
      diagramLabel: "L3",
      glass: "PBM28 (OHARA catalog equivalent)",
      focalLengthMm: -45.81,
      role: "Negative singlet behind the diaphragm. Its steep concave front face mirrors L2 and helps correct astigmatism and spherical aberration.",
    },
    {
      id: 5,
      name: "L4a",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6583,
      vd: 57.1,
      indexReference: "d",
      diagramLabel: "L4a",
      glass: "S-LAL11 (spectral proxy; patent nd 1.6583 / νd 57.1; supplier and melt unspecified)",
      focalLengthMm: 12.31,
      role: "Positive member of the rear doublet and the strongest positive element in the lens.",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L4b",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.5673,
      vd: 42.8,
      indexReference: "d",
      diagramLabel: "L4b",
      glass: "S-TIL26 (OHARA catalog equivalent)",
      focalLengthMm: -35.13,
      role: "Negative member of the rear doublet. Its cemented face against L4a corrects chromatic aberration and limits the aberrations of oblique beams.",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 12.1212,
      d: 1.316,
      sd: 7.24,
      medium: 1,
    },
    {
      label: "2",
      R: 6.902,
      d: 2.324,
      sd: 5.72,
      medium: 2,
    },
    {
      label: "3",
      R: 23.072,
      d: 0.056,
      sd: 5.72,
    },
    {
      label: "4",
      R: 8.12,
      d: 1.96,
      sd: 5.06,
      medium: 3,
    },
    {
      label: "5",
      R: 5.6588,
      d: 2.26,
      sd: 3.73,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.06,
    },
    {
      label: "6",
      R: -5.852,
      d: 0.588,
      sd: 4.38,
      rimExtensionSd: 5.04,
      medium: 4,
    },
    {
      label: "7",
      R: -7.4788,
      d: 0.028,
      sd: 5.04,
    },
    {
      label: "8",
      R: -36.148,
      d: 3.668,
      sd: 6.3,
      medium: 5,
    },
    {
      label: "9",
      R: -6.888,
      d: 0.812,
      sd: 6.3,
      medium: 6,
    },
    {
      label: "10",
      R: -10.976,
      sd: 7.8,
    },
  ],
  gaps: {
    "10": {
      label: "BF",
      values: [[19.1905, 20.02]],
    },
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 6,
  },
  focus: {
    closeFocusM: 1,
    description:
      "Unit focus. The whole lens moves 0.8295 mm toward the subject between infinity and Canon’s 1 m minimum, taken from subject to film. The patent gives only the infinity prescription, so the near position is calculated.",
  },
  groups: [
    {
      text: "L1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "L2",
      fromSurface: "4",
      toSurface: "5",
    },
    {
      text: "L3",
      fromSurface: "6",
      toSurface: "7",
    },
    {
      text: "L4",
      fromSurface: "8",
      toSurface: "10",
    },
  ],
  doublets: [
    {
      text: "L1a + L1b",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "L4a + L4b",
      fromSurface: "8",
      toSurface: "10",
    },
  ],
  layout: {
    yScFill: 0.65,
  },
  checks: {
    maxRimAngleDeg: 67,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
