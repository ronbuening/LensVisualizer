import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * CN 120686438 A, Example 1 (Tables 1–4, publication pp. 11–13). All 27
 * radii, thicknesses and nd/Vd values are as printed. Production correlation
 * is construction-level (15/11, 3 ED, 9 high-index, 1 aspherical element), not
 * a factory prescription.
 *
 * Aspheres: the printed S16/S17 coefficients are unusable (S16 A10 =
 * 2.818e-2 alone gives a sag of order 1e10 mm at h = 16 mm; the S17 table is
 * also headed "Example 3"). All eight A4/A6/A8/A10 terms are replaced by
 * values fitted to the patent's infinity d-line spherical-aberration, field-
 * curvature and distortion curves, keeping K = 0 and the printed signs. The
 * fit is not unique. The fitted terms lie within 2–22% of Example 3's printed
 * S16/S17 coefficients. Chromatic performance, production apertures,
 * illumination and MTF are not established by the source.
 *
 * Rear plate: the patent prints the nd=1.5168/Vd=64.198 material on the 1 mm
 * S29 row. The model places it on the 2.5 mm S28 interval, followed by 1 mm
 * of air, as Examples 2 and 3 print it; this brings the paraxial focus to
 * within 0.011 mm of the image plane (0.52 mm with the literal row). The
 * physical 16.545 mm gap to the plate is kept.
 *
 * SDs are inferred from Figure 1. S25/S26 are reduced to keep the L14/L15
 * air gap clear at its rim. No production mask is modelled.
 *
 * nominalFNumber = 1.47 x (model EFL / 86.5), so the entrance-pupil radius
 * equals the patent's 86.5/(2 x 1.47) mm; the design F-number stays 1.47.
 *
 * Focus is infinity only. The patent's 0.79 m state prints D1 = 5.96 mm and
 * D2 = 14.994 mm (travel 11.496 / 11.493 mm, within D1's printed rounding),
 * but the fitted aspheres do not reproduce the patent's near-focus curves,
 * so no close-focus state is modelled. nd/Vd are retained; no glass identity
 * or nC/nF/ng/dPgF is assigned.
 */

const LENS_DATA = {
  schema: 2,
  key: "viltrox-af-85mm-f14-pro-z",
  maker: "Viltrox",
  name: "VILTROX AF 85mm f/1.4 PRO Z",
  subtitle: "CN 120686438 A, Example 1 — printed aspheric coefficients unusable; fitted; production correlation",
  visible: true,
  catalog: {
    lensMounts: ["nikon-z"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ELEMENTS / 11 GROUPS",
      "DESIGN f = 86.5 mm",
      "DESIGN F/1.47",
      "2 ASPHERICAL SURFACES / 1 ELEMENT",
      "INFINITY FOCUS ONLY",
    ],
    elementCount: 15,
    groupCount: 11,
    focalLengthMm: {
      marketing: 85,
      design: 86.5,
    },
    fNumber: {
      marketing: 1.4,
      design: 1.47,
    },
  },
  source: {
    patentNumber: "CN 120686438 A",
    patentYear: 2025,
    authors: ["Liu Ruijun", "Chen Baofeng"],
    assignees: ["Shenzhen Viltrox Technology Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.946,
      vd: 17.984,
      focalLengthMm: 243.07725744196725,
      glass: "Unmatched (patent nd=1.946, Vd=17.984; supplier unresolved)",
      role: "High-index positive meniscus at the front of the fixed first group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.5691,
      vd: 71.304,
      focalLengthMm: 217.79549085726327,
      glass: "Unmatched (patent nd=1.5691, Vd=71.304; supplier unresolved)",
      role: "Low-dispersion positive meniscus of the front collector.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.5928,
      vd: 68.342,
      focalLengthMm: 155.66578237276775,
      glass: "Unmatched (patent nd=1.5928, Vd=68.342; supplier unresolved)",
      role: "Second low-dispersion positive meniscus of the front collector.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.605,
      focalLengthMm: 117.05936760619599,
      glass: "Unmatched (patent nd=1.497, Vd=81.605; supplier unresolved)",
      role: "Low-dispersion positive half of the first-group cemented doublet.",
      cemented: "L4+L5",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.8545,
      vd: 25.155,
      focalLengthMm: -113.05991093778847,
      glass: "Unmatched (patent nd=1.8545, Vd=25.155; supplier unresolved)",
      role: "High-index flint negative half of the first-group cemented doublet.",
      cemented: "L4+L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.8545,
      vd: 25.155,
      focalLengthMm: -58.58061729351058,
      glass: "Unmatched (patent nd=1.8545, Vd=25.155; supplier unresolved)",
      role: "Negative meniscus closing the first group just ahead of the stop.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.6201,
      vd: 36.346,
      focalLengthMm: -28.620999788307586,
      glass: "Unmatched (patent nd=1.6201, Vd=36.346; supplier unresolved)",
      role: "Negative half of the cemented doublet leading the focusing group.",
      cemented: "L7+L8",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.847,
      focalLengthMm: 33.4253475790936,
      glass: "Unmatched (patent nd=1.883, Vd=40.847; supplier unresolved)",
      role: "High-index positive half of the focusing-group cemented doublet.",
      cemented: "L7+L8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Aspherical",
      nd: 1.7725,
      vd: 49.503,
      focalLengthMm: 55.118027315668776,
      glass: "Unmatched (patent nd=1.7725, Vd=49.503; supplier unresolved)",
      role: "Double-sided aspherical positive element ending the focusing group; aspheric terms fitted.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.574,
      focalLengthMm: 102.87818151374437,
      glass: "Unmatched (patent nd=1.804, Vd=46.574; supplier unresolved)",
      role: "Positive meniscus half of the first rear-group cemented doublet.",
      cemented: "L10+L11",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.74,
      vd: 28.296,
      focalLengthMm: -38.89651178547541,
      glass: "Unmatched (patent nd=1.74, Vd=28.296; supplier unresolved)",
      role: "Biconcave negative half of the first rear-group cemented doublet.",
      cemented: "L10+L11",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.946,
      vd: 17.942,
      focalLengthMm: 43.88708464632522,
      glass: "Unmatched (patent nd=1.946, Vd=17.942; supplier unresolved)",
      role: "High-index biconvex positive singlet in the fixed rear group.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.847,
      focalLengthMm: 52.99533155446867,
      glass: "Unmatched (patent nd=1.883, Vd=40.847; supplier unresolved)",
      role: "Biconvex positive half of the last cemented doublet.",
      cemented: "L13+L14",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.8467,
      vd: 23.791,
      focalLengthMm: -42.54401117156575,
      glass: "Unmatched (patent nd=1.8467, Vd=23.791; supplier unresolved)",
      role: "Biconcave negative half of the last cemented doublet.",
      cemented: "L13+L14",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.8501,
      vd: 30.012,
      focalLengthMm: -145.61117639693472,
      glass: "Unmatched (patent nd=1.8501, Vd=30.012; supplier unresolved)",
      role: "Negative meniscus at the rear of the fixed rear group.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 88.615,
      d: 4.305,
      sd: 29.804267000800323,
      medium: 1,
    },
    {
      label: "2",
      R: 140.77,
      d: 0.3,
      sd: 29.804267000800323,
    },
    {
      label: "3",
      R: 49.953,
      d: 6.052,
      sd: 28.506328942680334,
      medium: 2,
    },
    {
      label: "4",
      R: 79.999,
      d: 0.977,
      sd: 28.506328942680334,
    },
    {
      label: "5",
      R: 58.292,
      d: 6.481,
      sd: 27.049991694624275,
      medium: 3,
    },
    {
      label: "6",
      R: 151.722,
      d: 0.6,
      sd: 27.049991694624275,
    },
    {
      label: "7",
      R: 41.466,
      d: 7.531,
      sd: 23.48953137089427,
      medium: 4,
    },
    {
      label: "8",
      R: 135.645,
      d: 1.5,
      sd: 23.48953137089427,
      medium: 5,
    },
    {
      label: "9",
      R: 56.136,
      d: 1.119,
      sd: 23.48953137089427,
    },
    {
      label: "10",
      R: 69.545,
      d: 1.3,
      sd: 20.390024153836812,
      medium: 6,
    },
    {
      label: "11",
      R: 28.856,
      d: 8.586,
      sd: 20.390024153836812,
    },
    {
      label: "STO",
      R: "flat",
      d: 17.456,
    },
    {
      label: "13",
      R: -38.084,
      d: 1.5,
      sd: 16.716001753915567,
      medium: 7,
    },
    {
      label: "14",
      R: 33.738,
      d: 6.5,
      sd: 16.716001753915567,
      medium: 8,
    },
    {
      label: "15",
      R: -214.471,
      d: 2.516,
      sd: 16.716001753915567,
    },
    {
      label: "16",
      R: 99.058,
      d: 7,
      sd: 16.284044020617067,
      medium: 9,
      asphere: {
        K: 0,
        A4: -1.479358842327147e-6,
        A6: 5.65868885650849e-9,
        A8: -2.1594378654272006e-11,
        A10: 3.565833491198144e-14,
      },
    },
    {
      label: "17",
      R: -72.378,
      d: 3.501,
      sd: 16.284044020617067,
      asphere: {
        K: 0,
        A4: 1.910516877136008e-6,
        A6: 5.8423932034744315e-9,
        A8: -1.97511975873627e-11,
        A10: 3.455226393170086e-14,
      },
    },
    {
      label: "18",
      R: -251.039,
      d: 3.576,
      sd: 15.736781187036655,
      medium: 10,
    },
    {
      label: "19",
      R: -62.61,
      d: 1.3,
      sd: 15.736781187036655,
      medium: 11,
    },
    {
      label: "20",
      R: 53.746,
      d: 3.13,
      sd: 15.736781187036655,
    },
    {
      label: "21",
      R: 66.831,
      d: 5.73,
      sd: 17.270148887099012,
      medium: 12,
    },
    {
      label: "22",
      R: -105.041,
      d: 0.15,
      sd: 17.270148887099012,
    },
    {
      label: "23",
      R: 131.285,
      d: 5.349,
      sd: 17.270148887099012,
      medium: 13,
    },
    {
      label: "24",
      R: -71.323,
      d: 1.3,
      sd: 16.844482734269043,
      medium: 14,
    },
    {
      label: "25",
      R: 73.388,
      d: 5.453,
      sd: 16.083387936060173,
    },
    {
      label: "26",
      R: -42.968,
      d: 1.3,
      sd: 16.083387936060173,
      medium: 15,
    },
    {
      label: "27",
      R: -66.728,
      d: 16.545,
      sd: 16.844482734269043,
    },
  ],
  focus: {
    closeFocusM: 0.79,
    description:
      "Infinity focus only. In the patent the second group (L7–L9) moves about 11.5 mm toward the object for close focus: D1 17.456 → 5.96 mm and D2 3.501 → 14.994 mm at 0.79 m. That state is not modelled because the fitted aspheric coefficients do not reproduce the patent's close-focus aberration curves.",
  },
  aperture: {
    nominalFNumber: 1.4701742630695116,
    fStops: [1.4701742630695116, 2, 2.8, 4, 5.6, 8, 11, 16],
    blades: 11,
  },
  rearPlates: [
    {
      label: "CG",
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.198,
      gapAfterMm: 1,
      source: "CN 120686438 A, Example 1, surfaces 28–29; plate glass placed on the 2.5 mm row as in Examples 2 and 3.",
    },
  ],
  groups: [
    {
      text: "G1 · fixed front group",
      fromSurface: "1",
      toSurface: "11",
    },
    {
      text: "G2 · focus",
      fromSurface: "13",
      toSurface: "17",
    },
    {
      text: "G3 · fixed rear group",
      fromSurface: "18",
      toSurface: "27",
    },
  ],
  doublets: [
    {
      text: "L4+L5",
      fromSurface: "7",
      toSurface: "9",
    },
    {
      text: "L7+L8",
      fromSurface: "13",
      toSurface: "15",
    },
    {
      text: "L10+L11",
      fromSurface: "18",
      toSurface: "20",
    },
    {
      text: "L13+L14",
      fromSurface: "23",
      toSurface: "25",
    },
  ],
  layout: {
    yScFill: 0.85,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
