import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Minolta AF 50mm f/2.8 Macro from JP S59-228220 A, Embodiment 3 (Minolta Camera; Hisashi Tokumaru).
 * The patent example is normalized to f = 100; every length (R, d, focus gaps, back focus) is scaled by 0.5.
 * Printed: radii, spacings, nd/νd, the near-state gaps d6′ = 28.012 and d11′ = 83.903 at β = −0.997, and the
 * back focus L.B. = 78.058 / L.B.′ = 89.363 (all at f = 100). Derived: the infinity back focus (0.002 mm from
 * L.B./2), the near object distance and the near image gap solved from β (0.022 mm beyond L.B.′/2).
 * The patent prints no stop position or clear apertures: the iris sits at the midpoint of d6, the front rim is
 * the f/2.8 entrance pupil plus 10%, the other rims follow Fig. 3 proportions, and S3–S9 are opened just enough
 * to pass the f/2.8 axial beam. The concave faces beside the iris (S6, S7) end in short flat lands where Fig. 3
 * draws a small chamfer, at cut radii 7.25 and 7.16 mm, clear of every traced beam including the 1:1 beam from a
 * real object point. Source inconsistencies: table FNO 2.8 vs Fig. 6
 * F2.88; f3/f printed −13.33, computed −12.94.
 */
const LENS_DATA = {
  schema: 2,
  key: "minolta-af-50mm-f28-macro",
  maker: "Minolta",
  name: "MINOLTA AF 50mm f/2.8 Macro",
  subtitle: "JP S59-228220 A — Embodiment 3; patent design family of the production lens",
  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: {
      marketing: 50,
      design: 50.0,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    specs: [
      "7 ELEMENTS / 6 GROUPS",
      "DESIGN f = 50.0 mm",
      "DESIGN F/2.8",
      "ALL SPHERICAL",
      "FLOATING FOCUS",
    ],
  },
  source: {
    patentNumber: "JP S59-228220 A",
    example: {
      label: "Embodiment 3",
      id: "3",
    },
    patentYear: 1984,
    authors: ["Hisashi Tokumaru"],
    assignees: ["Minolta Camera Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.31,
      indexReference: "d",
      glass: "LAC10 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 81.8619914462117,
      role: "Weak biconvex front collector of Group I.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.77,
      indexReference: "d",
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 41.779133379896884,
      role: "Positive meniscus convex to the object; the strongest positive element of Group I.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.01,
      indexReference: "d",
      glass: "E-F5 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: -27.951935500993372,
      role: "Thick negative element with a nearly flat front and a deep concave rear; closes Group I ahead of the iris.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.67339,
      vd: 29.25,
      indexReference: "d",
      glass: "Unmatched (patent nd 1.67339, νd 29.25; no catalog row at these coordinates)",
      focalLengthMm: -35.73239050268183,
      role: "Dense-flint negative front member of the Group II cemented pair; its strong concave face looks toward the iris.",
      cemented: "CD1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.93,
      indexReference: "d",
      glass: "LAC8 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 38.569424083202506,
      role: "Lanthanum-crown positive rear member of the Group II cemented pair, strongly curved toward the image.",
      cemented: "CD1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.77,
      indexReference: "d",
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 62.23589122845941,
      role: "Biconvex positive singlet closing Group II, with its stronger face toward the image.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.4914,
      vd: 57.82,
      indexReference: "d",
      glass: "Unmatched (PMMA-type acrylic, which the patent permits for this element; nd 1.49140, νd 57.82)",
      focalLengthMm: -647.2240862935438,
      role: "Weak negative meniscus forming Group III. The patent permits plastic here; there is no evidence the production element is plastic.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 187.018,
      d: 2.33,
      sd: 9.8,
      medium: 1,
    },
    {
      label: "2",
      R: -85.616,
      d: 0.1455,
      sd: 9.8,
    },
    {
      label: "3",
      R: 20.74,
      d: 2.461,
      sd: 8.6,
      medium: 2,
    },
    {
      label: "4",
      R: 55.0315,
      d: 1.015,
      sd: 8.6,
    },
    {
      label: "5",
      R: -572.108,
      d: 3.7505,
      sd: 8.2,
      medium: 3,
    },
    {
      label: "6",
      R: 17.422,
      sd: 8.2,
      rimCutDepthMm: 1.58,
    },
    {
      label: "STO",
      R: "flat",
    },
    {
      label: "7",
      R: -17.3265,
      d: 2.629,
      sd: 7.8,
      rimCutDepthMm: 1.55,
      medium: 4,
    },
    {
      label: "8",
      R: -65.678,
      d: 3.449,
      sd: 7.8,
      medium: 5,
    },
    {
      label: "9",
      R: -19.8075,
      d: 0.1455,
      sd: 7.8,
    },
    {
      label: "10",
      R: 272.658,
      d: 3.182,
      sd: 8.4,
      medium: 6,
    },
    {
      label: "11",
      R: -58.0725,
      sd: 8.4,
    },
    {
      label: "12",
      R: 51.4725,
      d: 1.7475,
      sd: 12.3,
      medium: 7,
    },
    {
      label: "13",
      R: 43.807,
      sd: 12.3,
    },
  ],
  focus: {
    closeFocusM: 0.199895048134069,
    keyframes: [0, 1],
    published: [1],
    description:
      "PUBLISHED double floating focus: all three groups move toward the object and both intergroup gaps grow. Embodiment 3 prints the near state at β = −0.997 (d6′ = 28.012, d11′ = 83.903 at f = 100), modeled as D6 = 14.006 mm (D6a + D6b, either side of the iris) and D11 = 41.95 mm; with the sensor fixed, Groups I, II and III travel 55.39, 47.14 and 5.67 mm. The patent prints no object distance: solving the near image gap from β gives 78.38 mm from the front vertex and 199.9 mm object to image, against Minolta's 0.2 m minimum focus. L.B. and L.B.′ are the printed back focus: the infinity image gap matches L.B./2 (39.029 mm) within 0.002 mm, and the β-solved near gap sits 0.022 mm beyond L.B.′/2 (44.682 mm). The iris stays midway between Groups I and II at its infinity size. Positions between the two endpoints are interpolated, not printed.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 78.3784888276426,
        distanceReference: "first-surface",
        source:
          "JP S59-228220 A, Embodiment 3: printed near-state gaps d6′ and d11′ at β = −0.997 (scaled by 0.5). The object distance is derived from those gaps and β, since the patent does not print it; the solved near image gap sits 0.022 mm beyond the printed back focus L.B.′/2.",
      },
    ],
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 47,
    maxTraceFieldDeg: 23.5,
  },
  layout: {
    yScFill: 0.7,
  },
  doublets: [
    {
      text: "CD1",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  groups: [
    {
      text: "I",
      fromSurface: "1",
      toSurface: "6",
    },
    {
      text: "II",
      fromSurface: "7",
      toSurface: "11",
    },
    {
      text: "III",
      fromSurface: "12",
      toSurface: "13",
    },
  ],
  gaps: {
    "6": {
      label: "D6a",
      values: [[2.87975, 7.003]],
    },
    STO: {
      label: "D6b",
      values: [[2.87975, 7.003]],
    },
    "11": {
      label: "D11",
      values: [[0.4855, 41.9515]],
    },
    "13": {
      label: "BF",
      values: [[39.031021897323, 44.70405930642638]],
    },
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
