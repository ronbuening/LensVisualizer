import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** US 4,610,514, Embodiment 3 (Table 3, Fig. 7): f = 100, F/2.8, 2ω = 18°.
 * Every length is scaled ×1.35 to the marketed 135 mm; computed EFL 135.05 mm (100.04 at patent scale).
 * The patent prints no back focus: the image plane is the paraxial focus, 42.81 mm behind S12.
 * Nd and νd as printed; glass names are catalog equivalents, not production identifications.
 * Stop placed at 0.91 of d7, where Fig. 7 draws it.
 * Semi-diameters estimated from Fig. 7 (same scale along and across the axis) and floor-checked by real-ray trace.
 * E1, E2, Unit II and E7 sit about 6% above the drawn rims, which at E1 and E7 would cost up to 6 and 8.5 points
 * of field illumination.
 * E3's thin edge reaches 21.1 mm; the cemented face and E4 end at E4's drawn 19.9 mm edge, so E4 is square-topped.
 * E4's rear cap ends at 16.5 mm on an inferred flat land out to that edge, where Fig. 7 draws a bevel.
 * Internal focus: the Unit II doublet moves 7.33 mm toward the image; the near keyframe is the printed β = 1/10 state.
 * Embodiments 1, 2 and 5 share the 7-element / 5-group layout and fit the production lens as well.
 */
const LENS_DATA = {
  schema: 2,
  key: "minolta-af-135mm-f28",
  maker: "Minolta",
  name: "MINOLTA AF 135mm f/2.8",
  subtitle: "US 4,610,514 \u2014 Embodiment 3; one of four examples matching the production lens",
  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: {
      marketing: 135,
      design: 135,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    specs: ["7 ELEMENTS / 5 GROUPS", "DESIGN f = 135 mm", "DESIGN F/2.8", "ALL SPHERICAL", "INTERNAL FOCUS"],
    closeFocusM: { marketing: 1.0 },
  },
  source: {
    patentNumber: "US 4,610,514",
    example: {
      label: "Embodiment 3",
      id: "3",
    },
    patentYear: 1986,
    authors: ["Akiyoshi Nakamura"],
    assignees: ["Minolta Camera Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6127,
      vd: 58.5,
      glass: "BACD4 (HOYA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: 171.45135837669088,
      role: "Front collector of the fixed Unit I (patent component L1), with a nearly flat rear face.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6127,
      vd: 58.5,
      glass: "BACD4 (HOYA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: 143.26409283303795,
      role: "Positive meniscus convex to the object (patent component L2); shares Unit I's convergence with E1.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.671,
      vd: 51.7,
      glass: "H-LaK67 (CDGM; nearest catalog row to patent nd 1.6710, νd 51.7; production glass unspecified)",
      indexReference: "d",
      focalLengthMm: 66.49023030095515,
      role: "Positive meniscus of the front cemented doublet (patent component L3), whose net power is weakly negative.",
      cemented: "CD1",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.5,
      glass: "S-TIH4 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: -45.629283082829204,
      role: "Dense-flint negative meniscus of the front doublet; its cemented face S6 controls chromatic aberration.",
      cemented: "CD1",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.8052,
      vd: 25.4,
      glass: "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: 96.78067776283933,
      role: "Positive front element of the Unit II focusing doublet (patent component L4); its front face is nearly flat.",
      cemented: "CD2",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.6584,
      vd: 50.9,
      glass: "S-BSM25 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: -40.0209512554199,
      role: "Biconcave negative element that gives the Unit II doublet its negative power; the doublet moves toward the image for close focus.",
      cemented: "CD2",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.1,
      glass: "N-BK7 (Schott catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      focalLengthMm: 104.35801713937215,
      role: "Fixed positive rear element forming Unit III (patent component L5), behind the long d10 air space.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 110.25450000000001,
      d: 7.263,
      sd: 26.5,
      medium: 1,
    },
    {
      label: "2",
      R: -2168.9640000000004,
      d: 0.2025,
      sd: 26.5,
    },
    {
      label: "3",
      R: 51.907500000000006,
      d: 7.290000000000001,
      sd: 25.2,
      medium: 2,
    },
    {
      label: "4",
      R: 120.2445,
      d: 0.2025,
      sd: 25.2,
    },
    {
      label: "5",
      R: 27.4455,
      d: 6.453000000000001,
      sd: 21.1,
      medium: 3,
    },
    {
      label: "6",
      R: 64.584,
      d: 2.0250000000000004,
      sd: 19.9,
      medium: 4,
    },
    {
      label: "7",
      R: 22.167000000000005,
      d: 17.64126,
      sd: 19.9,
      rimCutDepthMm: 7.39,
    },
    {
      label: "STO",
      R: "flat",
    },
    {
      label: "8",
      R: 13345.141500000002,
      d: 1.7280000000000002,
      sd: 13.7,
      medium: 5,
    },
    {
      label: "9",
      R: -78.38100000000001,
      d: 1.3905,
      sd: 13.7,
      medium: 6,
    },
    {
      label: "10",
      R: 39.9735,
      sd: 13.7,
    },
    {
      label: "11",
      R: 63.5985,
      d: 6.048000000000001,
      sd: 18.4,
      medium: 7,
    },
    {
      label: "12",
      R: -343.3455,
      d: 42.80662332368729,
      sd: 18.4,
    },
  ],
  focus: {
    closeFocusM: 1.5248,
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 1404.27,
        distanceReference: "first-surface",
        sourceMagnification: "1/10",
        source: "US 4,610,514, Embodiment 3 (PDF p. 11): prints “When focusing to a magnification β = 1/10, d7 = 19.79 and d10 = 19.23” for the close-focus state whose gaps this keyframe carries, a magnification with no object distance. The object distance is solved from the prescription at that magnification; focused on its image plane the state gives 0.10059.",
      },
    ],
    published: [1],
    description:
      "PUBLISHED internal focus: the cemented doublet of Unit II (E5–E6) moves 7.33 mm toward the image while Units I and III stay fixed. The patent does not say whether the stop moves; it is modelled fixed with Unit I. The near end is the patent's printed β = 1/10 state (d7 = 19.79, d10 = 19.23 at f = 100, scaled ×1.35), at 1.525 m object to image. The production lens focuses to 1.0 m (0.16×); the patent prints no state that close.",
  },
  gaps: {
    STO: { label: "D7b", values: [[1.74474, 9.07524]] },
    "10": { label: "D10", values: [[33.291, 25.9605]] },
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 18,
    maxTraceFieldDeg: 9,
  },
  layout: {
    yScFill: 0.78,
  },
  groups: [
    { text: "I", fromSurface: "1", toSurface: "7" },
    { text: "II", fromSurface: "8", toSurface: "10" },
    { text: "III", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    {
      text: "CD1",
      fromSurface: "5",
      toSurface: "7",
    },
    {
      text: "CD2",
      fromSurface: "8",
      toSurface: "10",
    },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
