import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Willy Merté's 180-degree wide-angle objective, US 2,126,126 A (granted 9 August 1938, German priority
 * 26 November 1935), Figure 1 with Table 1: four elements in three members at about f/8.
 *
 * PRODUCT LINK: Marco Cavina's study of the Zeiss Sphaerogon lists these radii, thicknesses and glasses as
 * "Sphaerogon type #1 (for F=100mm)", the formula of the 1.6 cm and 1.9 cm f/8 prototypes. The patent names no
 * product; the file stays at the patent's 100 mm.
 *
 * SOURCE AND SCALE: every radius, thickness, air space, index and ν is as printed for a total focal length of 100 mm;
 * nothing is rescaled. The computed paraxial focal length is 100.12 mm. Figure 2 / Table 2 (meniscus front member) is
 * a separate example and is not modelled here.
 *
 * GLASS: the text table prints n_d and ν; the drawing sheet prints nD over the same numbers. The values are traced as
 * d-line data. The patent names no glass type.
 *
 * STOP: printed. The diaphragm lies b1 = 110.28 mm behind the front member and b2 = 2.36 mm ahead of the second.
 *
 * INFERRED: the patent prints no diameters and no back focus. The last gap is the computed paraxial back focus
 * (157.88 mm). The rims are estimated from Figure 1, which is drawn to scale (about 6.34 px/mm at 300 dpi, checked on
 * the front-face-to-stop and front-face-to-last-vertex spans), and checked by real-ray trace. The front element keeps
 * 114.4 mm on the flat face and 92.8 mm on the concave face, the heights the chief ray of an 88-degree half-field
 * needs and within about 5 % of the drawn 120.5 mm blank and 94 mm concave rim (the figure bevels the edge between
 * them). The middle meniscus is 11.4 mm on both faces, square-cut as drawn. The cemented rear member is 13.8 mm on
 * the cemented and rear faces; its concave front face stays at 10 mm, where Figure 1 ends the curve and bevels out to
 * the full diameter; the air gap to the meniscus is only 0.35 mm there and the two faces would meet near 11.2 mm.
 *
 * FIELD: the patent states an image angle up to approximately 180 degrees and gives no projection law. A real chief
 * ray lands 94.0 mm off axis at 60 degrees and about 111 mm near 88 degrees, between the orthographic and equal-area
 * laws; the equal-area (equisolid) fisheye law is declared as the nearer of the two the viewer supports, with the
 * patent's 100 mm as its constant. The traced half-field is set to 76 degrees, the widest at which the viewer's
 * chief-ray solve is dependable with these rims.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-sphaerogon-100mm-f8-us2126126",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA SPHAEROGON 100mm f/8 (US 2,126,126 Design)",
  subtitle: "US 2,126,126 A, Figure 1 — Sphaerogon type 1 fisheye design",
  visible: true,
  catalog: {
    specs: [
      "4 ELEMENTS / 3 GROUPS",
      "DESIGN F/8",
      "ALL SPHERICAL",
      "ABOUT 180° FIELD",
    ],
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: {
      design: 100.12,
    },
    fNumber: {
      design: 8,
    },
  },
  source: {
    patentNumber: "US 2,126,126 A",
    example: {
      label: "Figure 1",
      id: "1",
    },
    patentYear: 1938,
    authors: ["Willy Merté"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Concave Negative",
      nd: 1.62313,
      vd: 57,
      indexReference: "d",
      indexReferenceNote: "The text table prints n_d; the drawing sheet prints nD for the same values.",
      focalLengthMm: -345.96,
      glass: "Unmatched (nD 1.62313 / V 57.0)",
      role: "Large negative front element; bends rays from nearly the whole forward half-sphere toward the stop.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.51746,
      vd: 58.9,
      indexReference: "d",
      focalLengthMm: 73.44,
      glass: "Unmatched (nD 1.51746 / V 58.9)",
      role: "Positive meniscus just behind the stop, concave toward the front; carries most of the positive power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.55088,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: -25.04,
      glass: "Unmatched (nD 1.55088 / V 49.6)",
      role: "Negative front lens of the cemented rear pair.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.60284,
      vd: 60.6,
      indexReference: "d",
      focalLengthMm: 31.78,
      glass: "Unmatched (nD 1.60284 / V 60.6)",
      role: "Positive rear lens of the cemented rear pair; the cemented surface is convergent.",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: "flat",
      d: 6.55,
      sd: 114.4,
      medium: 1,
    },
    {
      label: "2",
      R: 215.58,
      d: 110.28,
      sd: 92.8,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.36,
    },
    {
      label: "3",
      R: -42.7,
      d: 6.81,
      sd: 11.4,
      medium: 2,
    },
    {
      label: "4",
      R: -21.2,
      d: 1.31,
      sd: 11.4,
    },
    {
      label: "5",
      R: -16.15,
      d: 2.99,
      sd: 10,
      medium: 3,
    },
    {
      label: "6",
      R: 100.88,
      d: 6.42,
      sd: 13.8,
      medium: 4,
    },
    {
      label: "7",
      R: -23.08,
      d: 157.8809,
      sd: 13.8,
    },
  ],
  aperture: {
    nominalFNumber: 8,
    maxFNumber: 22,
    fStops: [8, 11, 16, 22],
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only; the patent gives no close-focus data. The last gap is the computed paraxial back focus.",
  },
  projection: {
    kind: "fisheye-equisolid",
    focalLengthMm: 100,
    fullFieldDeg: 180,
    maxTraceFieldDeg: 76,
  },
  groups: [],
  doublets: [
    {
      text: "C1",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
