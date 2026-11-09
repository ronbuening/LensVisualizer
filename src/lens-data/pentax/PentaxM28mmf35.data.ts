import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,955,883 (Takahiro Sugiyama, Asahi Kogaku Kogyo), Example 2: Table II, repeated in claim 2, section in Fig. 3,
 * aberration plots in Figs. 4a-4d. Associated with the SMC Pentax-M 28mm f/3.5 (1977) on construction (six single
 * elements in six groups), focal length, aperture, field and timing; a patent design, not a confirmed factory
 * prescription. Example 1 of the patent is the f/2.8 version of the layout and is not used.
 * Scale: the patent is normalized to F = 100. Every printed R and d and the printed back focus are multiplied by
 * exactly 0.28 for f = 28 mm (computed EFL 27.995 mm). All surfaces are spherical, so no coefficient transform applies.
 * Printed: R, d, d-line n, Abbe number, aperture ratio 1:3.5, a 75 degree field in the text, back focus 130.113
 * (36.432 mm here) and F1,2 = -101.729 for the first two lenses (the model gives -101.75). Figs. 4a-4d plot the
 * half-field to 37.6 degrees, which the model uses.
 * Image plane: the final gap keeps the printed back focus; the paraxial back focus is 36.429 mm, 0.003 mm shorter.
 * Stop: the patent neither prints nor draws one. It sits at the rear vertex of L3, splitting d6 into 0 + 2.9568 mm,
 * as in the Photons to Photos Optical Bench transcription of this example; its radius is set by the paraxial entrance
 * pupil, F/N.
 * Semi-diameters are inferred, none is printed. They are estimated from Fig. 3 at 29.52 px/mm (S1 to S12 vertex span
 * on the native 72 dpi scan; the drawn arcs and L4's rim sags confirm about the same scale across the axis) and
 * floor-checked by real-ray trace. S1, S3, S4, S11 and S12 keep half the Photons to Photos diameters, which agree with
 * the figure within about 3 %. L3, L4 and L5 are drawn square-cut at about 6.5, 5.6 and 6.0 mm, and L1's rear face
 * ends at its drawn chamfer, about 15.6 mm. Each is set to the least height, rounded to 0.1 mm, that keeps the
 * geometric transmission within 3 points of the wider Photons to Photos rims at every field: L1 rear 15.7, L3 7.3
 * (both faces), L4 5.7 (both faces), L5 6.2 (both faces). L3 is held about 0.8 mm above the figure by that light.
 * Focus: the patent names no focusing group or motion and prints the infinity state only, so no gap varies.
 * The 0.3 m minimum focus is Pentax's retail figure and is not modeled.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-m-28mm-f35",
  maker: "Pentax",
  name: "PENTAX SMC M 28mm f/3.5",
  subtitle: "US 3,955,883, Example 2 \u2014 probable match to the 1977 production lens",
  catalog: {
    specs: ["6 ELEMENTS / 6 GROUPS", "DESIGN f = 28 mm", "DESIGN F/3.5", "ALL SPHERICAL", "PATENT f = 100 SCALED \u00d7 0.28"],
    elementCount: 6,
    groupCount: 6,
    focalLengthMm: {
      marketing: 28,
      design: 28,
    },
    fNumber: {
      marketing: 3.5,
      design: 3.5,
    },
    closeFocusM: {
      marketing: 0.3,
    },
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
  },
  source: {
    patentNumber: "US 3,955,883",
    example: {
      label: "Example 2",
      id: "2",
    },
    patentYear: 1976,
    authors: ["Takahiro Sugiyama"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6228,
      vd: 57.0,
      focalLengthMm: 130.60285725575466,
      glass: "S-BSM10 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Weak positive front meniscus, convex to the object; leads the negative front pair.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: -22.296508876876743,
      glass: "S-BSM16 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Strong negative meniscus, convex to the object; supplies the front pair's negative power and the long back focus.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 43.7,
      focalLengthMm: 19.55273328391182,
      glass: "S-LAM52 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Thick biconvex element ahead of the stop; the strongest positive element of the lens.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.8,
      focalLengthMm: -15.859879963654553,
      glass: "S-TIH13 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint biconcave negative behind the stop; the only negative element of the rear group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6228,
      vd: 57.0,
      focalLengthMm: 32.52730409576573,
      glass: "S-BSM10 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus, concave to the object; the stronger of the two rear menisci.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 43.85067060658375,
      glass: "S-BSM16 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Weaker rear positive meniscus, concave to the object; completes the convergence to the image.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 75.91556,
      d: 4.6452,
      sd: 17.415,
      medium: 1,
    },
    {
      label: "2",
      R: 1111.73216,
      d: 0.098,
      sd: 15.7,
    },
    {
      label: "3",
      R: 59.90124,
      d: 3.766,
      sd: 14.245,
      medium: 2,
    },
    {
      label: "4",
      R: 10.96732,
      d: 12.8072,
      sd: 9.46,
    },
    {
      label: "5",
      R: 23.373,
      d: 11.5164,
      sd: 7.3,
      medium: 3,
    },
    {
      label: "6",
      R: -28.09856,
      d: 0,
      sd: 7.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.9568,
    },
    {
      label: "7",
      R: -17.7464,
      d: 1.1144,
      sd: 5.7,
      medium: 4,
    },
    {
      label: "8",
      R: 35.6902,
      d: 1.0584,
      sd: 5.7,
    },
    {
      label: "9",
      R: -71.86228,
      d: 2.0216,
      sd: 6.2,
      medium: 5,
    },
    {
      label: "10",
      R: -15.97372,
      d: 0.098,
      sd: 6.2,
    },
    {
      label: "11",
      R: -591.54928,
      d: 2.0608,
      sd: 6.805,
      medium: 6,
    },
    {
      label: "12",
      R: -26.04392,
      d: 36.43164,
      sd: 7.16,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "The patent names no focusing group or motion and prints the infinity state only, with its back focus of 130.113 at F = 100 (36.432 mm here), so the lens is modeled at infinity with no focus movement. Pentax's retail minimum focus of 0.3 m is not modeled.",
  },
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 5,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 75.2,
    maxTraceFieldDeg: 37.6,
  },
  layout: {
    yScFill: 0.4,
  },
  groups: [
    {
      text: "Front (−)",
      fromSurface: "1",
      toSurface: "4",
    },
    {
      text: "Rear (+)",
      fromSurface: "5",
      toSurface: "12",
    },
  ],
} satisfies LensDataV2Input;
export default LENS_DATA;
