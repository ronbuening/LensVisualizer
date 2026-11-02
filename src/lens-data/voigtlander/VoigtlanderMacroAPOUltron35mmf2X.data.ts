import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** VOIGTLÄNDER MACRO APO-ULTRON 35mm f/2 X-Mount: JP 2023-130072 A, Example 1 (Cosina; Shibata).
 * Tables 1 to 3 are transcribed at patent scale: f = 36.08 mm, F/2.01, half field 21.28°, Y 14.20 mm (APS-C).
 * No optimization and no rescaling to the retail 35 mm f/2. Paraxial trace gives EFL 36.085 mm and BFD 12.505 mm. The
 * printed gaps sum to 50.36 mm against the printed TL of 50.37 mm, and the 12.49 mm last gap sits 0.015 mm short of the
 * BFD; both residuals are within the rounding of the printed table and stay in place. The stop position is printed.
 * Spherical surfaces only.
 * Front focus: Table 3 prints the near state (magnification 0.50, ZD0 95.58 mm, ZD11 17.62 mm, ZD16 12.49 mm).
 * The patent prints no clear apertures or iris opening, so the engine sizes the iris from F/2.01 and the semi-diameters
 * are estimated from Fig. 1, a true-scale plot (23.61 native px/mm; its arcs fit the printed radii within 1 % both ways)
 * reading 9.00, 8.26, 7.52, 6.46, 8.01 and 9.21 mm for L1, L2, L3/L4, L5/L6, L7/L8 and L9. Rims stand above those readings
 * where the f/2.01 axial ray, the near state's axial and corner chief rays or the corner light need it, floor-checked by
 * real-ray trace at both printed focus states. Fig. 1's size order and square rims are kept. Faces 4, 7 and 15 end at caps
 * of 7.9, 6.6 and 8.7 mm with flat lands out to the element rim, where the figure ends them at 7.8, 6.47 and 8.0 mm.
 * Element names count the glass in order; the patent's signs are L1, L2, L3f, L3r, L4f, L4r, L5f, L5r, L6.
 */
const LENS_DATA = {
  schema: 2,
  key: "voigtlander-macro-apo-ultron-x-35f2",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER MACRO APO-ULTRON 35mm f/2 X-Mount",
  subtitle: "JP 2023-130072 A — Example 1; matches Cosina's published 9/6 construction",
  catalog: {
    imageFormat: "aps-c",
    elementCount: 9,
    groupCount: 6,
    focalLengthMm: {
      marketing: 35,
      design: 36.08,
    },
    fNumber: {
      marketing: 2,
      design: 2.01,
    },
    specs: ["9 ELEMENTS / 6 GROUPS", "DESIGN f = 36.08 mm", "DESIGN F/2.01", "ALL SPHERICAL"],
    lensMounts: ["fujifilm-x"],
  },
  source: {
    patentNumber: "JP 2023-130072 A",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 2023,
    authors: ["Yuki Shibata"],
    assignees: ["Cosina Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.7292,
      vd: 54.67,
      indexReference: "d",
      glass: "TAC8 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 53.91870125499691,
      role: "Biconvex front element of the moving group G1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7292,
      vd: 54.67,
      indexReference: "d",
      glass: "TAC8 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 39.35568779934719,
      role: "Positive meniscus ahead of the first cemented pair, convex toward the object",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7408,
      vd: 27.74,
      indexReference: "d",
      glass: "E-FD13 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -14.831590121696824,
      role: "Biconcave negative of the first cemented pair, ahead of the stop",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.9229,
      vd: 20.88,
      indexReference: "d",
      glass: "E-FDS1 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 42.57282372017818,
      role: "Positive meniscus of the first cemented pair, concave toward the stop",
      cemented: "C1",
      apd: "inferred",
      apdNote:
        "Cosina's optical section marks L4 as anomalous partial dispersion; catalog-equivalent E-FDS1 has PgF 0.6390 (dPgF +0.0303), and the patent supplies no line indices.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.699,
      vd: 30.13,
      indexReference: "d",
      glass: "S-TIM35 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -36.64425822159784,
      role: "Negative meniscus of the second cemented pair, just behind the stop",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7639,
      vd: 48.49,
      indexReference: "d",
      glass: "S-LAH96 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 17.04050846319126,
      role: "Biconvex positive of the second cemented pair, last element of G1",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      glass: "TAFD55 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 13.873706826087934,
      role: "Positive meniscus of the fixed rear cemented pair, concave toward the object",
      cemented: "C3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.738,
      vd: 32.33,
      indexReference: "d",
      glass: "S-NBH53V (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -19.779072943946478,
      role: "Negative meniscus closing the fixed rear cemented pair",
      cemented: "C3",
      apd: "inferred",
      apdNote:
        "Cosina's optical section marks L8 as anomalous partial dispersion; catalog-equivalent S-NBH53V is a short flint with PgF 0.5900, near the normal line (dPgF +0.0006) but about 0.0085 below ordinary flints of similar Abbe number.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.8081,
      vd: 22.76,
      indexReference: "d",
      glass: "S-NPH1 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -40.197754084266364,
      role: "Final negative meniscus of the fixed group G2, concave toward the object",
      apd: "inferred",
      apdNote:
        "Cosina's optical section marks L9 as anomalous partial dispersion; catalog-equivalent S-NPH1 has PgF 0.6307 (dPgF +0.0252), and the patent supplies no line indices.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 65.0728,
      d: 2.63,
      sd: 9.7,
      medium: 1,
    },
    {
      label: "2",
      R: -97.6458,
      d: 0.15,
      sd: 9.7,
    },
    {
      label: "3",
      R: 18.6274,
      d: 3.18,
      sd: 8.9,
      medium: 2,
    },
    {
      label: "4",
      R: 49.2602,
      d: 1.25,
      sd: 7.9,
      rimExtensionSd: 8.9,
    },
    {
      label: "5",
      R: -136.1328,
      d: 0.9,
      sd: 7.8,
      medium: 3,
    },
    {
      label: "6",
      R: 11.9855,
      d: 2.6,
      sd: 7.8,
      medium: 4,
    },
    {
      label: "7",
      R: 15.4509,
      d: 2.57,
      sd: 6.6,
      rimExtensionSd: 7.8,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.94,
    },
    {
      label: "9",
      R: 88.0557,
      d: 2.0,
      sd: 7.2,
      medium: 5,
    },
    {
      label: "10",
      R: 19.657,
      d: 5.37,
      sd: 7.2,
      medium: 6,
    },
    {
      label: "11",
      R: -33.9782,
      sd: 7.2,
    },
    {
      label: "12",
      R: -107.8291,
      d: 5.42,
      sd: 8.8,
      medium: 7,
    },
    {
      label: "13",
      R: -12.6124,
      d: 0.9,
      sd: 8.8,
      medium: 8,
    },
    {
      label: "14",
      R: -95.5786,
      d: 2.97,
      sd: 8.8,
    },
    {
      label: "15",
      R: -14.556,
      d: 2.37,
      sd: 8.7,
      rimExtensionSd: 10.2,
      medium: 9,
    },
    {
      label: "16",
      R: -28.2936,
      d: 12.49,
      sd: 10.2,
    },
  ],
  gaps: {
    "11": { label: "ZD11", values: [[1.62, 17.62]] },
  },
  focus: {
    closeFocusM: 0.16194,
    published: [1],
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 95.58,
        distanceReference: "first-surface",
        source: "JP 2023-130072 A Tables 2-3",
      },
    ],
    description:
      "PUBLISHED infinity and β = 0.50 states. L1–L6 and the stop move 16.00 mm toward the object while L7–L9 stay fixed, so ZD11 opens from 1.62 to 17.62 mm and the 12.49 mm back gap does not change. The near object sits 95.58 mm from the first surface, 161.94 mm from the image plane; the production lens is rated 0.163 m at 1:2.",
  },
  aperture: {
    nominalFNumber: 2.01,
    fStops: [2.01, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 10,
  },
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "11" },
    { text: "G2", fromSurface: "12", toSurface: "16" },
  ],
  doublets: [
    { text: "C1", fromSurface: "5", toSurface: "7" },
    { text: "C2", fromSurface: "9", toSurface: "11" },
    { text: "C3", fromSurface: "12", toSurface: "14" },
  ],
  layout: {
    yScFill: 0.43,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
