import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** JP H01-189622 A, Numerical Example 1. Original reviewed 2026-10-30.
 * R17/R21 retain the pre-existing authored reconstruction with unresolved source errata.
 * The printed pair is rejected by source power/focal targets, but the replacements are not uniquely source-proven.
 * Source apertures f/3.6, f/4.2 and f/4.6 are restored from Fig.3 and the numerical heading.
 * The unchanged 390 mm finite-focus endpoints are inferred; interpolated positions are illustrative.
 * The patent names no spectral line. 10 of 10 printed pairs match catalog d-line coordinates and none match the
 * e-line, so the table is read as d-line. 10 media use catalog curves as spectral proxies; supplier, melt and
 * chemistry stay unspecified.
 * S2 has a resolved outer shoulder; other clear heights follow native Fig.1 under unchanged guards.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-ef-28-70mm-f35-45-ii",
  maker: "Canon",
  name: "CANON EF 28-70mm f/3.5-4.5 II",
  subtitle: "JP H01-189622 A Example 1 — authored reconstruction; printed radii unresolved",
  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "10 ELEMENTS / 9 GROUPS",
      "AUTHORED RECONSTRUCTION EFL 29.083–67.894 mm",
      "DESIGN f/3.6-4.6",
      "1 ASPHERICAL SURFACE",
      "FRONT-GROUP FOCUS",
      "Printed R17/R21 contradiction remains unresolved",
    ],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: {
      marketing: [28, 70],
      design: [29.09, 67.89],
    },
    fNumber: {
      marketing: 3.5,
      design: 3.6,
    },
  },
  source: {
    patentNumber: "JP H01-189622 A",
    example: {
      label: "Numerical Example 1",
      id: "1",
    },
    patentYear: 1989,
    authors: ["Sadatoshi Takahashi"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Numerical Example 1, PDF page 4 / printed 192, prints R17 = -11.61 and R21 = -141.79. The pre-existing authored reconstruction -36.74/-37.76 is retained, not source-proven. The literal pair gives G2 f ≈20.14049 mm and system EFL ≈12.02067/13.67220/13.75683 mm, against printed 36.27 and 29.09/50/67.89 mm. Source summary and claimed powers establish an error, but do not uniquely establish the exact adopted replacements.",
      },
      {
        status: "unresolved",
        note: "Printed condition 7 R3/FT fails both examples; reciprocal FT/R3 fits the interval. The expression is unresolved, without changing literal R3 values.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (convex to object)",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -38.32276059,
      glass:
        "J-LASF010 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Strong front negative member of G1; expands the wide-angle field before the corrective rear members.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: -65.238044111,
      glass:
        "J-SK12 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Lower-index negative element carrying the R4A asphere; moderates wide-angle aberrations in G1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus (convex to object)",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 57.125120653,
      glass: "SF6 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive rear member that balances the two negative elements while leaving G1 net negative.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.6,
      focalLengthMm: 51.970334537,
      glass:
        "N-LAK7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Pre-stop positive member of G2 and principal front collector for the positive variator group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus (convex to object)",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 93.012637283,
      glass:
        "S-FSL5 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Low-dispersion post-stop positive member of G2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus (convex to object)",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 60.371789681,
      glass:
        "S-FSL5 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Second low-dispersion positive member reinforcing G2 power after the stop.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -19.17854567,
      glass:
        "PBH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Strong negative corrector inside G2, paired in air with the following positive singlet.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: 38.808139451,
      glass: "SF4 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Rear positive member of the retained authored G2 reconstruction; the original R17 value is unresolved.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus (convex to image)",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -152.250261052,
      glass:
        "J-LASF010 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative front component of the fixed, weakly positive rear cemented doublet.",
      cemented: "D1",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus (convex to image)",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: 130.397935962,
      glass:
        "J-SK14 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Rear member of the retained authored weak-positive G3 reconstruction; the original R21 value is unresolved.",
      cemented: "D1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 48.61,
      d: 1.9,
      sd: 18.8,
      medium: 1,
    },
    {
      label: "2",
      R: 18.94,
      d: 8.2,
      sd: 14.5,
      rimExtensionSd: 18.8,
    },
    {
      label: "3",
      R: -181.44,
      d: 2,
      sd: 14.5,
      medium: 2,
    },
    {
      label: "4A",
      R: 48.33,
      d: 1.9,
      sd: 14.6,
      asphere: {
        K: 0,
        A4: -0.000003886,
        A6: -1.883e-9,
        A8: -3.39e-11,
        A10: 0,
        A12: 0,
        A14: 0,
      },
    },
    {
      label: "5",
      R: 35.69,
      d: 3.7,
      sd: 14.8,
      medium: 3,
    },
    {
      label: "6",
      R: 151.92,
      sd: 14.5,
    },
    {
      label: "7",
      R: 37.83,
      d: 3.1,
      sd: 11.4,
      medium: 4,
    },
    {
      label: "8",
      R: -312.56,
      d: 1.9,
      sd: 11.4,
    },
    {
      label: "STO",
      R: "flat",
      d: 0.7,
    },
    {
      label: "10",
      R: 24.59,
      d: 3.85,
      sd: 11,
      medium: 5,
    },
    {
      label: "11",
      R: 50.97,
      d: 0.28,
      sd: 11,
    },
    {
      label: "12",
      R: 20.69,
      d: 4.4,
      sd: 10.2,
      medium: 6,
    },
    {
      label: "13",
      R: 64.81,
      d: 1.07,
      sd: 10.2,
    },
    {
      label: "14",
      R: -211.31,
      d: 2.9,
      sd: 9.2,
      medium: 7,
    },
    {
      label: "15",
      R: 17.7,
      d: 2.4,
      sd: 9.2,
    },
    {
      label: "16",
      R: 140.47,
      d: 2.6,
      sd: 8.6,
      medium: 8,
    },
    {
      label: "17",
      R: -36.74,
      sd: 8.8,
    },
    {
      label: "19",
      R: -45,
      d: 1.8,
      sd: 13.2,
      medium: 9,
    },
    {
      label: "20",
      R: -70.97,
      d: 2.3,
      sd: 13.2,
      medium: 10,
    },
    {
      label: "21",
      R: -37.76,
      sd: 13.2,
    },
  ],
  zoom: {
    stations: [
      {
        focalLengthMm: 29.09,
        nominalFNumber: 3.6,
        label: "Wide",
      },
      {
        focalLengthMm: 50,
        nominalFNumber: 4.2,
      },
      {
        focalLengthMm: 67.89,
        nominalFNumber: 4.6,
        label: "Tele",
      },
    ],
  },
  focus: {
    closeFocusM: 0.39,
    description:
      "Front-group focus (G1). The patent publishes infinity zoom spacings only; close-focus D6 values are a constrained paraxial reconstruction solved at the official rounded 0.39 m MFD, with the image-plane reference assumed. The reconstruction is not a published production cam law.",
  },
  gaps: {
    "6": {
      label: "D6 / FOCUS",
      values: [
        [32.482, 39.011825727],
        [9.303, 15.703985415],
        [0.807, 7.336672846],
      ],
    },
    "17": {
      label: "D17 + D18",
      values: [
        [2.675, 2.675],
        [19.743, 19.743],
        [34.35, 34.35],
      ],
    },
    "21": {
      label: "BF",
      values: [
        [37.723823459, 37.723823459],
        [37.721319957, 37.721319957],
        [37.716715209, 37.716715209],
      ],
    },
  },
  aperture: {
    fStops: [3.6, 4.2, 4.6, 5.6, 8, 11, 16, 22, 29],
    maxFNumber: 29,
    blades: 5,
  },
  groups: [
    {
      text: "G1 (-) / FOCUS",
      fromSurface: "1",
      toSurface: "6",
    },
    {
      text: "G2 (+) / ZOOM",
      fromSurface: "7",
      toSurface: "17",
    },
    {
      text: "G3 (weak +) / FIXED",
      fromSurface: "19",
      toSurface: "21",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "19",
      toSurface: "21",
    },
  ],
  layout: {
    yScFill: 0.7,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
