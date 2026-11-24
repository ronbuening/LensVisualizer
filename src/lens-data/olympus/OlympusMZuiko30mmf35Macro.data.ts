import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 9,791,677 B2, Example 6. The radii, spacings, d-line indices, Abbe numbers,
 * aspheres and camera-side plate follow the patent at its printed millimetre scale.
 * The image plane is 0.75 mm behind the plate. The clear radii and land on
 * surface 6 follow Fig. 6C, and the iris radius follows the infinity f/3.56.
 * The patent prints f/3.56, f/4.07 and f/5.04 at infinity, 0.5× and 1×.
 * With the iris held at its infinity size, surfaces 7, 8, 9A and 10A clip
 * the 1× axial beam. The moving gaps sum to 21.72 mm at every setting.
 * Three gap pairs are printed. The finite object distances and 33 intermediate
 * gap pairs are calculated for paraxial focus at the fixed image plane.
 * The table gives an 11.15 mm image height, and Fig. 12 labels it 11.45 mm.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-mzuiko-digital-ed-30mm-f35-macro",
  name: "OLYMPUS M.ZUIKO DIGITAL ED 30mm f/3.5 Macro",
  maker: "Olympus",
  visible: true,
  subtitle: "US 9,791,677 B2, Example 6 — Olympus / Morooka",
  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    specs: ["7 ELEMENTS / 6 GROUPS", "3 ASPHERICAL ELEMENTS", "1 ED ELEMENT", "DESIGN F/3.56", "INNER FOCUS"],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: {
      marketing: 30,
      design: 30.42,
    },
    fNumber: {
      design: 3.56,
      marketing: 3.5,
    },
    closeFocusM: {
      marketing: 0.095,
    },
  },
  source: {
    patentNumber: "US 9,791,677 B2",
    patentYear: 2017,
    example: {
      label: "Example 6",
      id: "6",
    },
    authors: ["Masaru Morooka"],
    assignees: ["Olympus Corporation"],
    sdSource: "figure-measured",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.58913,
      vd: 61.15,
      indexReference: "d",
      glass: "S-BAL35",
      focalLengthMm: -15.32,
      role: "Dual Super Aspherical (DSA) negative front element that helps control off-axis aberrations.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.72342,
      vd: 37.95,
      indexReference: "d",
      glass: "S-BAH28",
      focalLengthMm: 15.54,
      role: "Positive element that balances L1 and leaves G1 weakly positive.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.52,
      indexReference: "d",
      glass: "S-TIH14",
      cemented: "C1",
      focalLengthMm: -11.62,
      role: "High-dispersion negative member of the cemented pair that helps correct color in G2.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.79952,
      vd: 42.22,
      indexReference: "d",
      glass: "S-LAH52",
      cemented: "C1",
      focalLengthMm: 17.1,
      role: "High-index positive member that offsets most of the negative power of L3.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      glass: "FCD1",
      focalLengthMm: 19.08,
      role: "Extra-low-dispersion aspherical (EDA) element that makes G2 net positive.",
      diagramLabel: "L5",
      apd: "inferred",
      apdNote: "Olympus marks L5 as extra-low-dispersion aspherical (EDA). The patent gives an Abbe number of 81.61.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.51633,
      vd: 64.06,
      indexReference: "d",
      glass: "L-BSL7",
      focalLengthMm: -27.74,
      role: "Double-aspheric negative element that moves toward the image for close focus.",
      diagramLabel: "L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.73,
      indexReference: "d",
      glass: "S-LAH55V",
      focalLengthMm: 45.88,
      role: "Fixed positive rear element that converges the beam after G3.",
      diagramLabel: "L7",
    },
  ],
  surfaces: [
    {
      label: "1A",
      R: -110.619,
      d: 1.2,
      sd: 6.5,
      asphere: {
        K: 0,
        A4: -3.32176e-5,
        A6: 5.4867e-7,
        A8: -1.4485e-8,
        A10: 1.39256e-10,
      },
      medium: 1,
    },
    {
      label: "2A",
      R: 9.864,
      d: 1.57,
      sd: 6.5,
      asphere: {
        K: -1.967,
        A4: 0.000128821,
        A6: -6.24774e-8,
        A8: -1.87604e-8,
        A10: 2.57096e-10,
      },
    },
    {
      label: "3",
      R: 14.784,
      d: 2.81,
      sd: 6.0,
      medium: 2,
    },
    {
      label: "4",
      R: -43.126,
      d: 3.61,
      sd: 6.0,
    },
    {
      label: "STO",
      R: "flat",
      d: 7,
    },
    {
      label: "6",
      R: -8.479,
      d: 0.8,
      sd: 5.3,
      medium: 3,
      rimExtensionSd: 5.9,
    },
    {
      label: "7",
      R: -211.11,
      d: 3.32,
      sd: 5.9,
      medium: 4,
    },
    {
      label: "8",
      R: -12.93,
      d: 0.1,
      sd: 6.5,
    },
    {
      label: "9A",
      R: 30.372,
      d: 4.35,
      sd: 7.0,
      asphere: {
        K: 0,
        A4: -2.85655e-5,
        A6: -1.62203e-7,
        A8: 3.86801e-9,
        A10: -7.91556e-11,
      },
      medium: 5,
    },
    {
      label: "10A",
      R: -13.132,
      sd: 7.0,
      asphere: {
        K: 0,
        A4: 7.16927e-5,
        A6: 1.84655e-7,
        A8: -1.83473e-9,
        A10: -2.03651e-11,
      },
    },
    {
      label: "11A",
      R: -115.656,
      d: 1,
      sd: 7.5,
      asphere: {
        K: 0,
        A4: -9.84785e-6,
        A6: 1.29117e-6,
        A8: -3.74635e-8,
        A10: 3.33054e-10,
      },
      medium: 6,
    },
    {
      label: "12A",
      R: 16.396,
      sd: 7.5,
      asphere: {
        K: 0,
        A4: -1.28247e-5,
        A6: 1.02065e-6,
        A8: -3.21827e-8,
        A10: 2.85706e-10,
      },
    },
    {
      label: "13",
      R: 634.004,
      d: 3.34,
      sd: 12.0,
      medium: 7,
    },
    {
      label: "14",
      R: -40.668,
      d: 16.04,
      sd: 12.0,
    },
  ],
  rearPlates: [
    {
      label: "Camera-side plate",
      thicknessMm: 6.08,
      nd: 1.51633,
      vd: 64.14,
      indexReference: "d",
      gapAfterMm: 0.75,
      sd: 12.1,
      source: "US 9,791,677 B2, Example 6, surfaces 15–16.",
    },
  ],
  focus: {
    closeFocusM: 0.09761,
    keyframes: [
      0, 0.047479766, 0.094959532, 0.142439297, 0.189919063, 0.237398829, 0.284878595, 0.332358361, 0.379838126,
      0.427317892, 0.474797658, 0.522277424, 0.56975719, 0.593497073, 0.617236955, 0.640976838, 0.664716721,
      0.688456604, 0.712196487, 0.73593637, 0.759676253, 0.789716721, 0.804736955, 0.81975719, 0.834777424, 0.849797658,
      0.864817892, 0.879838126, 0.894858361, 0.909878595, 0.924898829, 0.939919063, 0.954939297, 0.969959532,
      0.984979766, 1,
    ],
    published: [20, 35],
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 20,
        objectDistanceMm: 54.8,
        distanceReference: "first-surface",
        sourceMagnification: "0.5",
        source:
          "US 9,791,677 B2, Example 6, prints a magnification of −0.5. The distance is calculated from the printed spacings and image plane.",
      },
      {
        zoomStation: 0,
        keyframe: 35,
        objectDistanceMm: 23.92,
        distanceReference: "first-surface",
        sourceMagnification: "1.0",
        source:
          "US 9,791,677 B2, Example 6, prints a magnification of −1.0. The distance is calculated from the printed spacings and image plane.",
      },
    ],
    description:
      "PUBLISHED — The patent gives the spacings at infinity, 0.5× and 1×. G3 moves 6.16 mm toward the image at 0.5× and 13.76 mm at 1×. The object distances and the other 33 positions are calculated. The model stops at 1× with the iris held at its infinity size. The production lens reaches 1.25×.",
  },
  gaps: {
    "10A": {
      label: "d10",
      values: [
        [
          1.8, 1.96509, 2.15262, 2.35492, 2.57381, 2.81143, 3.07027, 3.35332, 3.66414, 4.00705, 4.38727, 4.81126,
          5.28705, 5.54744, 5.82476, 6.12075, 6.43735, 6.7768, 7.14166, 7.53491, 7.96, 8.54994, 8.86948, 9.20729,
          9.56497, 9.94434, 10.34746, 10.77662, 11.23445, 11.72394, 12.24851, 12.8121, 13.41927, 14.07532, 14.78645,
          15.56,
        ],
      ],
    },
    "12A": {
      label: "d12",
      values: [
        [
          19.92, 19.75491, 19.56738, 19.36508, 19.14619, 18.90857, 18.64973, 18.36668, 18.05586, 17.71295, 17.33273,
          16.90874, 16.43295, 16.17256, 15.89524, 15.59925, 15.28265, 14.9432, 14.57834, 14.18509, 13.76, 13.17006,
          12.85052, 12.51271, 12.15503, 11.77566, 11.37254, 10.94338, 10.48555, 9.99606, 9.47149, 8.9079, 8.30073,
          7.64468, 6.93355, 6.16,
        ],
      ],
    },
  },
  aperture: {
    nominalFNumber: 3.56,
    fStops: [3.5, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 7,
    bladeRoundedness: 1,
  },
  groups: [
    {
      text: "G1",
      fromSurface: "1A",
      toSurface: "4",
    },
    {
      text: "G2",
      fromSurface: "6",
      toSurface: "10A",
    },
    {
      text: "G3",
      fromSurface: "11A",
      toSurface: "12A",
    },
    {
      text: "G4",
      fromSurface: "13",
      toSurface: "14",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "6",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.6,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
