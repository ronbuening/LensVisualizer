import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JP 2012-234169 A, Numerical Example 1 (Sigma Corporation; Noriyuki Ogasawara): f = 30.83 mm, Fno 2.89,
 * 2ω = 50.49°, 7 elements / 5 groups, aspherical S9 (rear of L5) and S13 (rear of L7). No scale factor is applied.
 * R, d, nd and νd follow the printed table (PDF p. 21) without alteration. The aspheric equation includes a conic
 * constant K, but no example in the patent prints a K value, so K = 0 at S9 and S13 is a modeling assumption.
 * The stop is the printed surface 4; its radius is set from the stated f/2.89. Bf = 20.4045 mm is printed.
 * d4 and d9 are printed at infinity and at a 500 mm shooting distance; the printed spacings give 500.07 mm object
 * to image. The patent prints no clear apertures: all lens semi-diameters are estimated from Fig. 1 (p. 32,
 * infinity state, 14.0 px/mm at its native 400 dpi from the S1–S13 vertex span, isotropic by arc fits) and kept
 * where they agree within about 6%: S1–3 8.0 (figure 7.6), S5–7 7.5 (7.4), S8–9 8.5 (9.0), S10–11 9.5 (9.5),
 * S12–13 11.0 mm (11.1). Fig. 1 ends the concave faces beside the iris with flat lands: the cap of S3 at 0.65 and
 * that of S5 at 0.60 of the element edge. Both are modeled as inferred rim cuts moved out until they clear every
 * wide-open beam by 0.05 mm from infinity to the 500 mm state: S3 1.31 mm deep (cut radius 5.68 mm), S5 1.85 mm deep
 * (5.80 mm). They cost no corner light.
 * The patent decenters L6 (group 3a) for image stabilization; it is modeled centred, and the production lens has
 * no stabilizer. Probable production correlation with the 2012 30mm F2.8 EX DN and the optically identical 2013
 * 30mm F2.8 DN | Art (Sigma: 7 elements / 5 groups, aspherical L5 and L7). Sigma describes one double-sided
 * aspherical element and draws L7 nearly plano-convex, so the production prescription differs in detail.
 * Glass labels are HOYA catalog rows equal to the printed nd / νd; the production supplier is not known.
 */
const LENS_DATA = {
  schema: 2,
  key: "sigma-30mm-f28-dn-art",
  maker: "Sigma",
  name: "SIGMA 30mm f/2.8 DN | Art",
  subtitle: "JP 2012-234169 A, Example 1 \u2014 closest patent design; production adds a double-sided asphere",
  catalog: {
    elementCount: 7,
    groupCount: 5,
    specs: [
      "7 ELEMENTS / 5 GROUPS",
      "DESIGN f = 30.83 mm",
      "DESIGN F/2.89",
      "2 ASPHERICAL SURFACES / 2 ELEMENTS",
      "INNER FOCUS",
    ],
    closeFocusM: {
      marketing: 0.3,
    },
    focalLengthMm: {
      marketing: 30,
      design: 30.83,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.89,
    },
    lensMounts: ["sony-fe", "micro-four-thirds"],
    imageFormat: "aps-c",
  },
  source: {
    patentNumber: "JP 2012-234169 A",
    example: {
      label: "Numerical Example 1",
      id: "1",
    },
    patentYear: 2012,
    authors: ["Noriyuki Ogasawara"],
    assignees: ["Sigma Corporation"],
  },
  layout: {
    yScFill: 0.4,
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      glass: "TAFD30 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 19.79917257739472,
      role: "High-index positive front element of the fixed first group's cemented doublet; its nearly flat rear face is the cemented interface.",
      cemented: "DB1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.89,
      glass: "E-FL5 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -22.02171881675118,
      role: "Negative rear element of the front doublet; its concave rear face, just ahead of the iris, gives the first group a telephoto-like power split (¶0071).",
      cemented: "DB1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      glass: "E-FD15 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -12.197608061547106,
      role: "Dense-flint negative front element of the focusing group's cemented doublet; its strongly concave front face faces the iris.",
      cemented: "DB2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      glass: "TAF3 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 15.78503089057621,
      role: "High-index positive rear element of the focusing doublet; with Element 3 it corrects the moving group's axial colour (¶0066).",
      cemented: "DB2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.62,
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 23.033641748150675,
      role: "Biconvex positive element closing the focusing group; its aspherical rear face (S9) limits the aberration change during focusing (¶0081–0082).",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.84,
      glass: "E-FL6 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -33.999390377403195,
      role: "Biconcave negative group 3a, the element the patent decenters for stabilization (¶0087); modeled centred, as in the production lens, which has no stabilizer.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.62,
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 49.91376264953838,
      role: "Weak biconvex rear element (group 3b) with an aspherical rear face (S13); limits the chief-ray exit angle at the sensor (¶0076).",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 17.7672,
      d: 3.1821,
      sd: 8,
      medium: 1,
    },
    {
      label: "2",
      R: -1000,
      d: 0.8,
      sd: 8,
      medium: 2,
    },
    {
      label: "3",
      R: 12.9742,
      d: 2.6198,
      sd: 8,
      rimCutDepthMm: 1.31,
    },
    {
      label: "STO",
      R: "flat",
    },
    {
      label: "5",
      R: -10.0295,
      d: 0.8,
      sd: 7.5,
      rimCutDepthMm: 1.85,
      medium: 3,
    },
    {
      label: "6",
      R: 58.7192,
      d: 3.8254,
      sd: 7.5,
      medium: 4,
    },
    {
      label: "7",
      R: -15.7253,
      d: 0.15,
      sd: 7.5,
    },
    {
      label: "8",
      R: 47.8215,
      d: 3.659,
      sd: 8.5,
      medium: 5,
    },
    {
      label: "9A",
      R: -27.3923,
      sd: 8.5,
      asphere: {
        K: 0,
        A4: 1.6883e-5,
        A6: -6.94468e-9,
        A8: 2.50342e-11,
        A10: 0,
      },
    },
    {
      label: "10",
      R: -97.3976,
      d: 1,
      sd: 9.5,
      medium: 6,
    },
    {
      label: "11",
      R: 24.1411,
      d: 4.4473,
      sd: 9.5,
    },
    {
      label: "12",
      R: 88.7361,
      d: 2.8926,
      sd: 11,
      medium: 7,
    },
    {
      label: "13A",
      R: -67.2193,
      d: 20.4045,
      sd: 11,
      asphere: {
        K: 0,
        A4: 9.5084e-8,
        A6: -5.47977e-9,
        A8: 2.45567e-11,
        A10: 0,
      },
    },
  ],
  focus: {
    closeFocusM: 0.5,
    published: [1],
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 500,
        distanceReference: "image-plane",
        source:
          "JP 2012-234169 A, Example 1, [可変間隔] table (PDF pp. 21–22), 撮影距離 500mm row: d4 5.6552, d9 2.8307. The patent does not define the reference of 撮影距離; the conjugate audit identifies the image-plane reference for this distance, and the first-surface reading is 22 quarter waves out of focus. The printed spacings focus 500.07 mm object to image.",
      },
    ],
    description:
      "PUBLISHED inner focus: JP 2012-234169 A, Example 1 prints d4 and d9 at infinity and at a 500 mm shooting distance (d4 6.9859 \u2192 5.6552, d9 1.5000 \u2192 2.8307 mm; Bf 20.4045 mm in both). The front doublet, the iris and the rear group stay fixed; the second group (L3\u2013L5) moves 1.3307 mm toward the object. The printed spacings give 500.07 mm object to image at \u22120.069\u00d7. This is the patent's near state, not Sigma's 0.30 m minimum focus (1:8.1), which is not modeled. Intermediate positions interpolate the gaps linearly.",
  },
  aperture: {
    nominalFNumber: 2.89,
    fStops: [2.89, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 7,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 50.49,
    maxTraceFieldDeg: 25.245,
  },
  gaps: {
    STO: {
      label: "d4",
      values: [[6.9859, 5.6552]],
    },
    "9A": {
      label: "d9",
      values: [[1.5, 2.8307]],
    },
  },
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2 IF", fromSurface: "5", toSurface: "9A" },
    { text: "G3", fromSurface: "10", toSurface: "13A" },
  ],
  doublets: [
    { text: "DB1", fromSurface: "1", toSurface: "3" },
    { text: "DB2", fromSurface: "5", toSurface: "7" },
  ],
} satisfies LensDataV2Input;
export default LENS_DATA;
