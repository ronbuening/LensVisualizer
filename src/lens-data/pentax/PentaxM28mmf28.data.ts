import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,143,945 A (Kubota, Asahi Kogaku Kogyo), Example III, associated with the first version of the SMC Pentax-M
 * 28mm f/2.8 (1977). The association rests on construction (seven single elements in seven groups), focal length,
 * aperture, field and timing; this is a patent design, not a confirmed factory prescription. The later version of
 * the lens (about 1982) is reported to use a different formula and is not modeled.
 * Scale: the patent is normalized to F = 100. Every printed R and d, and every semi-diameter, is multiplied by exactly
 * 0.28 for f = 28 mm (computed EFL 27.993 mm). All surfaces are spherical, so no coefficient transform applies.
 * Printed: R, d, d-line n, Abbe number, F/2.8, half-field 37.5 degrees, back focus 129.28 (36.198 mm here) and the
 * partial focal lengths F1,2,3 = -93.37, F1,2,3,4 = 136.44 and F1,2,3,4,5 = -121.66, which the model reproduces to
 * rounding. Examples I and II of the patent are not used.
 * Image plane: the final gap keeps the printed back focus; the paraxial back focus is 36.193 mm, 0.006 mm shorter.
 * Stop: the patent neither prints nor draws one; its text calls d6 the spacing between the front and rear groups.
 * The stop sits at the midpoint of d6 (4.6424 + 4.6424 mm), 11.656 mm behind S1, with its radius set by the paraxial
 * entrance pupil, F/N.
 * Semi-diameters are inferred, none is printed. The front rims follow the proportions of Fig. 5 with L1 at 12.04 mm.
 * S6 (7.4 mm) is the tip of L3's rear bowl in Fig. 5 (7.37 mm, level with L4), which keeps the cap 1.06 mm ahead of
 * the stop plane. L5 is drawn square-cut, so S9 matches S10 at 7.084 mm, the air-gap limit with S11. L6 is drawn
 * with both faces meeting at one height, so S11 and S12 share 7.75 mm; both faces of L7 are 9.15 mm. These are
 * Fig. 5 read at its axial scale (7.78 and 9.17 mm) and pass the chief ray to the 21.65 mm corner at 38.1 degrees.
 * Focus: the patent names no focusing group or motion and prints the infinity state only, so no gap varies.
 * The 0.3 m minimum focus is Pentax's retail figure and is not modeled.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-m-28mm-f28",
  maker: "Pentax",
  name: "PENTAX SMC M 28mm f/2.8",
  subtitle: "US 4,143,945 A, Example III — probable match to the 1977 production lens",
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 7 GROUPS", "DESIGN f = 28 mm", "DESIGN F/2.8", "ALL SPHERICAL", "PATENT f = 100 SCALED × 0.28"],
    elementCount: 7,
    groupCount: 7,
    focalLengthMm: {
      marketing: 28,
      design: 28,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    closeFocusM: {
      marketing: 0.3,
    },
  },
  source: {
    patentNumber: "US 4,143,945 A",
    example: {
      label: "Example III",
      id: "3",
    },
    patentYear: 1979,
    authors: ["Toshifumi Kubota"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.49782,
      vd: 66.8,
      indexReference: "d",
      focalLengthMm: -329.425209,
      glass: "N-BK10 (SCHOTT catalog equivalent; production supplier unspecified)",
      role: "Weak negative front meniscus, convex to the object; opens the negative front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 50.7,
      indexReference: "d",
      focalLengthMm: 63.177293,
      glass: "LACL9 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus between the two front negatives; offsets part of their power and distortion.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: -18.660058,
      glass: "S-BSM16 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Strong negative meniscus closing the front group; supplies most of its negative power and the long back focus.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8044,
      vd: 39.6,
      indexReference: "d",
      focalLengthMm: 21.000104,
      glass: "S-LAH63 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Thick high-index biconvex element behind the stop; the main positive power of the rear group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      indexReference: "d",
      focalLengthMm: -21.291136,
      glass: "PBH53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint biconcave negative of the rear group; the patent assigns it color, spherical and coma correction.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.4,
      indexReference: "d",
      focalLengthMm: 31.116003,
      glass: "PCD4 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus, concave to the object; the stronger of the two rear menisci.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.4,
      indexReference: "d",
      focalLengthMm: 54.18343,
      glass: "PCD4 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Rear positive meniscus, concave to the object; the tallest element of the rear group in Fig. 5.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 29.4728,
      d: 1.2768,
      sd: 12.04,
      medium: 1,
    },
    {
      label: "2",
      R: 24.6232,
      d: 1.5316,
      sd: 12.04,
    },
    {
      label: "3",
      R: 34.7284,
      d: 2.6432,
      sd: 11.1972,
      medium: 2,
    },
    {
      label: "4",
      R: 177.9876,
      d: 0.098,
      sd: 11.1972,
    },
    {
      label: "5",
      R: 53.886,
      d: 1.4644,
      sd: 9.8728,
      medium: 3,
    },
    {
      label: "6",
      R: 9.4304,
      d: 4.6424,
      sd: 7.4,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.6424,
    },
    {
      label: "7",
      R: 25.5892,
      d: 6.8376,
      sd: 7.4648,
      medium: 4,
    },
    {
      label: "8",
      R: -43.7836,
      d: 3.626,
      sd: 7.4648,
    },
    {
      label: "9",
      R: -47.2948,
      d: 1.1788,
      sd: 7.084,
      medium: 5,
    },
    {
      label: "10",
      R: 29.4616,
      d: 1.3664,
      sd: 7.084,
    },
    {
      label: "11",
      R: -74.2672,
      d: 2.8784,
      sd: 7.75,
      medium: 6,
    },
    {
      label: "12",
      R: -15.5008,
      d: 0.2464,
      sd: 7.75,
    },
    {
      label: "13",
      R: -85.4728,
      d: 2.3772,
      sd: 9.15,
      medium: 7,
    },
    {
      label: "14",
      R: -24.3152,
      d: 36.1984,
      sd: 9.15,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "The patent names no focusing group or motion and prints the infinity state only, with its back focus of 129.28 at F = 100 (36.198 mm here), so the lens is modeled at infinity with no focus movement. Pentax's retail minimum focus of 0.3 m is not modeled.",
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 5,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 75.0,
  },
  layout: {
    yScFill: 0.78,
  },
  groups: [
    {
      text: "Front",
      fromSurface: "1",
      toSurface: "6",
    },
    {
      text: "Rear",
      fromSurface: "7",
      toSurface: "14",
    },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
