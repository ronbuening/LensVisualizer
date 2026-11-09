import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP 2023-090337 A (Cosina; Moriyama, Nagasawa, Shibata), Embodiment 1, associated with the VOIGTLÄNDER NOKTON 23mm
 * f/1.2 Aspherical X-Mount (2022). Embodiment 1 is the patent's only 10-element, 6-group example and matches Cosina's
 * published section element by element; it is a patent design, not a confirmed factory prescription.
 * Scale 1: Tables 1–3 are transcribed at patent scale (f = 23.6 mm, F/1.22, half field 31.5°, image height 14.2 mm),
 * not rescaled to the retail 23 mm f/1.2. Paraxial EFL is 23.606 mm.
 * Names follow the patent (¶0016, ¶0018, Fig. 1): groups G1 and G2, front singlet L1, cemented lenses L2 to L5 with
 * their front (f) and rear (r) elements, and the aspheric rear singlet L6.
 * Printed: R, d, d-line nd and νd, the stop position (3.75 mm behind S8, 3.79 mm ahead of S10) and both aspheric faces
 * of L6 in the 1 + K form (K = -20 and -4, A4 to A18), entered as printed. The paragraph that lists the coefficients
 * omits A6; the equation and Table 3 include it, and it is kept.
 * Image plane: the final gap keeps Table 2's 14.78 mm. Table 1 rounds the back focus to 14.8 mm and the length in air
 * to 55.7 mm (55.66 mm here). The paraxial back focus is 14.783 mm, 0.003 mm longer.
 * Stop and rims: the patent prints no iris opening and no clear apertures. The engine sizes the iris from F/1.22.
 * Semi-diameters are estimated from Fig. 1, which is drawn to scale (28.95 px/mm at 600 dpi from the S1–S17 vertex
 * span; arcs fit the printed radii within 2 px in both directions), and floor-checked by real-ray trace. Drawn rims:
 * L1 10.1, L2 11.3, L3 12.2, L4 9.85, L5 9.5, L6 9.5 mm. L1 (10.2) and L5 (9.6) sit 0.1 mm outside the drawing so
 * that corner light stays within 3 points of the earlier rims; L3 and L4 keep 12.0 and 9.75.
 * Fig. 1 ends three concave caps short of the element edge with a flat land: S8 at q = 0.91 of the edge (cut depth
 * 1.49 mm, cap end 10.94 mm) and S10 at q = 0.96 (2.33 mm, 9.39 mm), both clear of the wide-open beams; S15's cap
 * (drawn to about 8.3 mm) keeps 9.0 mm, with a land to 9.6 mm, because the beams reach 9.26 mm there.
 * The wide-open beam is heavily vignetted at the field edge.
 * Glass labels are catalog equivalents whose nd and νd equal the printed pairs; the production supplier is not known.
 * Focus: the patent prints the infinity state only, so the model is static. Cosina's 0.18 m minimum focus, reached by
 * extending the whole lens, is not modeled.
 */
const LENS_DATA = {
  schema: 2,
  key: "voigtlander-nokton-23mm-f12-x",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER NOKTON 23mm f/1.2 Aspherical X-Mount",
  subtitle: "JP 2023-090337 A, Embodiment 1 — matches Cosina's published 10/6 construction",
  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    elementCount: 10,
    groupCount: 6,
    focalLengthMm: {
      marketing: 23,
      design: 23.6,
    },
    fNumber: {
      marketing: 1.2,
      design: 1.22,
    },
    specs: [
      "10 ELEMENTS / 6 GROUPS",
      "DESIGN f = 23.6 mm",
      "DESIGN F/1.22",
      "2 ASPHERICAL SURFACES / 1 ELEMENT",
      "2 ANOMALOUS-DISPERSION ELEMENTS",
    ],
    closeFocusM: {
      marketing: 0.18,
    },
  },
  source: {
    patentNumber: "JP 2023-090337 A",
    example: {
      label: "Embodiment 1",
      id: "1",
    },
    patentYear: 2023,
    authors: ["Tatsuya Moriyama", "Keisuke Nagasawa", "Yuki Shibata"],
    assignees: ["Cosina Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "L1",
      type: "Biconcave Negative",
      nd: 1.92286,
      vd: 20.88,
      indexReference: "d",
      glass: "E-FDS1 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -18.879905073538307,
      role: "Biconcave negative front element, the only singlet ahead of the stop.",
      apd: "inferred",
      apdNote:
        "Cosina marks this position as anomalous partial dispersion glass; the printed pair matches E-FDS1, whose θgF of 0.639 lies about 0.030 above the normal line.",
    },
    {
      id: 2,
      name: "L2f",
      label: "Element 2",
      diagramLabel: "L2f",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.58,
      indexReference: "d",
      glass: "J-SF14 (HIKARI catalog equivalent; production supplier unspecified)",
      focalLengthMm: -101.12103924487957,
      role: "Weak negative meniscus, convex to the object, leading the first front doublet.",
      apd: "inferred",
      apdNote:
        "Cosina marks this position as anomalous partial dispersion glass; the printed pair matches the dense flint J-SF14, whose θgF of 0.613 lies about 0.014 above the normal line.",
      cemented: "L2",
    },
    {
      id: 3,
      name: "L2r",
      label: "Element 3",
      diagramLabel: "L2r",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      glass: "TAFD55 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 24.17606551341098,
      role: "Index-2.0 biconvex positive of the first front doublet.",
      cemented: "L2",
    },
    {
      id: 4,
      name: "L3f",
      label: "Element 4",
      diagramLabel: "L3f",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      glass: "TAFD55 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 15.987402951472255,
      role: "Thick index-2.0 biconvex positive of the second front doublet; the strongest element ahead of the stop.",
      cemented: "L3",
    },
    {
      id: 5,
      name: "L3r",
      label: "Element 5",
      diagramLabel: "L3r",
      type: "Biconcave Negative",
      nd: 1.55298,
      vd: 55.07,
      indexReference: "d",
      glass: "J-KZFH4 (HIKARI catalog equivalent; production supplier unspecified)",
      focalLengthMm: -32.06759831612535,
      role: "Biconcave negative closing the front group, its concave rear face toward the stop.",
      cemented: "L3",
    },
    {
      id: 6,
      name: "L4f",
      label: "Element 6",
      diagramLabel: "L4f",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      glass: "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -12.754135173164144,
      role: "Biconcave negative opening the rear group, facing L3r across the stop.",
      cemented: "L4",
    },
    {
      id: 7,
      name: "L4r",
      label: "Element 7",
      diagramLabel: "L4r",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      indexReference: "d",
      glass: "TAFD37 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 17.104830757836034,
      role: "Biconvex positive of the first rear doublet, which is weakly negative overall.",
      cemented: "L4",
    },
    {
      id: 8,
      name: "L5f",
      label: "Element 8",
      diagramLabel: "L5f",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      indexReference: "d",
      glass: "TAFD37 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 13.063866507043056,
      role: "Biconvex positive of the second rear doublet; the strongest element of the lens.",
      cemented: "L5",
    },
    {
      id: 9,
      name: "L5r",
      label: "Element 9",
      diagramLabel: "L5r",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.38,
      indexReference: "d",
      glass: "J-SF10 (HIKARI catalog equivalent; production supplier unspecified)",
      focalLengthMm: -14.28094996329729,
      role: "Dense-flint biconcave negative closing the second rear doublet, mirroring L2f across the stop.",
      cemented: "L5",
    },
    {
      id: 10,
      name: "L6",
      label: "Element 10",
      diagramLabel: "L6",
      type: "Biconvex Positive",
      nd: 1.80835,
      vd: 40.55,
      indexReference: "d",
      glass: "L-LAH84 (OHARA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 48.59716835279629,
      role: "Weak biconvex rear element with both faces aspheric, the lens's only asphere.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: -37.656,
      d: 0.9,
      medium: 1,
      sd: 10.2,
    },
    {
      label: "2",
      R: 32.8,
      d: 1.18,
      sd: 10.2,
    },
    {
      label: "3",
      R: 91.449,
      d: 1.3,
      medium: 2,
      sd: 11.3,
    },
    {
      label: "4",
      R: 41.556,
      d: 4.38,
      medium: 3,
      sd: 11.3,
    },
    {
      label: "5",
      R: -54.889,
      d: 0.15,
      sd: 11.3,
    },
    {
      label: "6",
      R: 28.962,
      d: 6.8,
      medium: 4,
      sd: 12,
    },
    {
      label: "7",
      R: -31.566,
      d: 0.9,
      medium: 5,
      sd: 12,
    },
    {
      label: "8",
      R: 40.875,
      d: 3.75,
      sd: 12,
      rimCutDepthMm: 1.49,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.79,
    },
    {
      label: "10",
      R: -20.084,
      d: 0.9,
      medium: 6,
      sd: 9.75,
      rimCutDepthMm: 2.33,
    },
    {
      label: "11",
      R: 23.836,
      d: 5.16,
      medium: 7,
      sd: 9.75,
    },
    {
      label: "12",
      R: -39.062,
      d: 0.3,
      sd: 9.75,
    },
    {
      label: "13",
      R: 24.398,
      d: 6.07,
      medium: 8,
      sd: 9.6,
    },
    {
      label: "14",
      R: -20.037,
      d: 1.61,
      medium: 9,
      sd: 9.6,
    },
    {
      label: "15",
      R: 22.356,
      d: 1.66,
      sd: 9.0,
      rimExtensionSd: 9.6,
    },
    {
      label: "16A",
      R: 67.568,
      d: 2.03,
      medium: 10,
      sd: 9.5,
      asphere: {
        K: -20.0,
        A4: -1.7869e-5,
        A6: 1.0035e-6,
        A8: -3.4415e-8,
        A10: 6.823e-10,
        A12: -1.1254e-11,
        A14: 1.3261e-13,
        A16: -9.826e-16,
        A18: 3.3798e-18,
      },
    },
    {
      label: "17A",
      R: -92.583,
      d: 14.78,
      sd: 9.5,
      asphere: {
        K: -4.0,
        A4: 5.1477e-5,
        A6: -3.1256e-7,
        A8: 1.357e-8,
        A10: -3.5161e-10,
        A12: 5.5559e-12,
        A14: -6.6826e-14,
        A16: 5.1324e-16,
        A18: -1.6849e-18,
      },
    },
  ],
  groups: [
    {
      text: "G1",
      fromSurface: "1",
      toSurface: "8",
    },
    {
      text: "G2",
      fromSurface: "10",
      toSurface: "17A",
    },
  ],
  doublets: [
    {
      text: "L2",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "L3",
      fromSurface: "6",
      toSurface: "8",
    },
    {
      text: "L4",
      fromSurface: "10",
      toSurface: "12",
    },
    {
      text: "L5",
      fromSurface: "13",
      toSurface: "15",
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "The patent names no focusing group and prints the infinity state only, so the lens is modeled at infinity with no focus movement. The final gap is Table 2's 14.78 mm (Table 1 rounds the back focus to 14.8 mm). Cosina focuses the lens by extending the whole optical unit; its 0.18 m minimum focus is not modeled.",
  },
  aperture: {
    nominalFNumber: 1.22,
    fStops: [1.22, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
    blades: 12,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 63.0,
    maxTraceFieldDeg: 31.5,
  },
  layout: {
    yScFill: 0.78,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
