import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,854,890, sole example. Jiro Mukai's description gives the radii, axial
 * spacings and seven d-line glass pairs. All printed lengths are scaled by ×35
 * from f = 1 to 35 mm. The description and Claim 2 differ on r10 and ν7.
 * The clear radii come from Canon's lens section and Fig. 1, with clearance
 * for the f/1.8 axial beam at the front of the triplet. As both drawings
 * show, L3's concave rear face ends in a flat land short of the doublet's
 * edge; the land sits just outside the f/1.8 beam. The stop position is
 * estimated within the central air space and its radius follows from f/1.8.
 * Paraxial focus gives the film spacing at infinity and the extension for
 * unit focusing to Canon's 1 m minimum.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-35mm-f18-ltm",
  name: "CANON 35mm f/1.8",
  maker: "Canon",
  visible: true,
  subtitle: "US 2,854,890, sole example — Canon / Mukai",
  source: {
    patentNumber: "US 2,854,890",
    patentYear: 1958,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Jiro Mukai"],
    assignees: ["Canon Camera Co., Inc."],
    errata: [
      {
        status: "unresolved",
        note: "The description gives r10 = +4.250 and ν7 = 53.5. Claim 2 gives +4.259 and 55.3. The prescription follows the description throughout. The two radii give normalized focal lengths of 1.00083 and 1.00107 respectively.",
      },
    ],
  },
  catalog: {
    lensMounts: ["leica-ltm"],
    imageFormat: "135-full-frame",
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: {
      marketing: 35,
      design: 35.03,
    },
    fNumber: {
      marketing: 1.8,
      design: 1.8,
    },
    specs: ["7 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "64° FULL FIELD"],
    closeFocusM: {
      marketing: 1,
    },
  },
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6584,
      vd: 50.8,
      indexReference: "d",
      glass: "N-SSK5 (Schott equivalent)",
      focalLengthMm: 44.13,
      role: "Front singlet that converges light toward the doublet.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6584,
      vd: 50.8,
      indexReference: "d",
      glass: "N-SSK5 (Schott equivalent)",
      focalLengthMm: 47.76,
      role: "Positive front member of the doublet. Its cemented face helps correct lateral color.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6987,
      vd: 30.1,
      indexReference: "d",
      glass: "S-TIM35 (spectral proxy; patent nd 1.6987 / νd 30.1; supplier and melt unspecified)",
      focalLengthMm: -26.17,
      role: "Dispersive negative member of the doublet, with a strongly concave rear face toward the stop.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      glass: "N-SK16 (Schott equivalent)",
      focalLengthMm: 34.96,
      role: "Positive front member of the triplet. Its steep cemented face helps correct coma.",
      cemented: "T1",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.575,
      vd: 41.3,
      indexReference: "d",
      glass: "QF3 (CDGM equivalent)",
      focalLengthMm: -14.04,
      role: "Negative middle member of the triplet, cemented between two less dispersive positive elements.",
      cemented: "T1",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.3,
      indexReference: "d",
      glass: "S-LAL12 (Ohara equivalent)",
      focalLengthMm: 24.74,
      role: "High-index positive rear member of the triplet. Its index step from L5 helps correct coma.",
      cemented: "T1",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.5,
      indexReference: "d",
      glass: "H-LaK6A (CDGM equivalent)",
      focalLengthMm: 43,
      role: "Positive rear singlet that converges the beam onto the film.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 20.265,
      d: 3.395,
      sd: 11.2,
      medium: 1,
    },
    {
      label: "2",
      R: 62.545,
      d: 0.175,
      sd: 11.2,
    },
    {
      label: "3",
      R: 12.915,
      d: 2.765,
      sd: 8.8,
      medium: 2,
    },
    {
      label: "4",
      R: 20.055,
      d: 1.12,
      sd: 8.8,
      medium: 3,
    },
    {
      label: "5",
      R: 9.345,
      d: 4.745,
      sd: 8.8,
      rimCutDepthMm: 3.24,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.305,
    },
    {
      label: "6",
      R: -10.395,
      d: 1.925,
      sd: 6.75,
      medium: 4,
    },
    {
      label: "7",
      R: -7.525,
      d: 0.91,
      sd: 6.75,
      medium: 5,
    },
    {
      label: "8",
      R: -115.465,
      d: 2.415,
      sd: 8.3,
      medium: 6,
    },
    {
      label: "9",
      R: -14.77,
      d: 0.035,
      sd: 8.3,
    },
    {
      label: "10",
      R: 148.75,
      d: 2.905,
      sd: 10.6,
      medium: 7,
    },
    {
      label: "11",
      R: -36.995,
      sd: 10.6,
    },
  ],
  aperture: {
    nominalFNumber: 1.8,
    fStops: [1.8, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  focus: {
    closeFocusM: 1,
    description:
      "Calculated unit focus: all four groups move 1.316 mm toward the subject together between infinity and Canon’s 1 m minimum, taken from subject to film. The patent gives only the infinity prescription, and Canon describes a non-revolving lens head without saying how the optics move.",
  },
  gaps: {
    "11": {
      label: "BF",
      values: [[24.2578, 25.5739]],
    },
  },
  groups: [
    {
      text: "I",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "II",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "III",
      fromSurface: "6",
      toSurface: "9",
    },
    {
      text: "IV",
      fromSurface: "10",
      toSurface: "11",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "T1",
      fromSurface: "6",
      toSurface: "9",
    },
  ],
  layout: {
    yScFill: 0.65,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
