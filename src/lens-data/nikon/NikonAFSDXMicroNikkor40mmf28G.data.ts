import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2011/0176215 A1, Example 1, Table 1 and Fig. 1 (Nikon, Mouri and Tanaka).
 * The 40 mm prescription is unscaled. All powered surfaces are spherical.
 * The 39.818 mm back focus in Specifications gives the full precision of d17
 * (39.8 mm in the surface row) and reproduces the 92.518 mm infinity track.
 * The stop is surface 7, 2.5 mm behind G1. Its diameter is inferred from
 * Table 1's f/2.887. Figure 2A independently labels the plot FNO = 2.87.
 * Semi-diameters are estimated from Fig. 1 using the powered vertex span,
 * compared with Nikon's section and checked against the wide-open beam.
 * S3 has the flat land drawn in Fig. 1, with the cap end moved slightly
 * outward to clear the open beam throughout the focus range.
 * The patent's 587.6 nm indices and Abbe numbers are retained. The named
 * OHARA curves match the coordinates but do not establish the supplier.
 */
const LENS_DATA = {
  schema: 2,
  key: "nikon-af-s-dx-micro-nikkor-40mm-f28g",
  maker: "Nikon",
  name: "NIKON AF-S DX MICRO-NIKKOR 40mm f/2.8 G",
  subtitle: "US 2011/0176215 A1, Example 1 — Nikon Corporation (Mouri and Tanaka)",
  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "aps-c",
    specs: ["9 ELEMENTS / 7 GROUPS", "DESIGN f = 40 mm", "DESIGN F/2.887", "ALL SPHERICAL", "1:1 MACRO"],
    elementCount: 9,
    groupCount: 7,
    focalLengthMm: {
      marketing: 40,
      design: 40,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.887,
    },
    closeFocusM: {
      marketing: 0.163,
    },
  },
  source: {
    patentNumber: "US 2011/0176215 A1",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 2011,
    authors: ["Motohisa Mouri", "Issei Tanaka"],
    assignees: ["Nikon Corporation"],
    sdSource: "figure-measured",
  },
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Biconvex Positive",
      nd: 1.743997,
      vd: 44.79,
      focalLengthMm: 45.34149591484274,
      glass: "S-LAM2 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive front member of the negative-power G1F doublet.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Biconcave Negative",
      nd: 1.51633,
      vd: 64.14,
      focalLengthMm: -23.918698410758395,
      glass: "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative member of G1F. Its steep rear face helps control coma and distortion.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Biconvex Positive",
      nd: 1.699998,
      vd: 48.08,
      focalLengthMm: 15.67311801753452,
      glass: "S-LAM51 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Strong positive member of the G1R doublet.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L14",
      label: "Element L14",
      type: "Biconcave Negative",
      nd: 1.581439,
      vd: 40.75,
      focalLengthMm: -24.343314284586775,
      glass: "S-TIL25 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative partner in the G1R doublet immediately ahead of the iris.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L21",
      label: "Element L21",
      type: "Biconcave Negative",
      nd: 1.740769,
      vd: 27.79,
      focalLengthMm: -24.95084069945298,
      glass: "S-TIH13 (OHARA catalog equivalent; production supplier unspecified)",
      role: "First element behind the iris. It reduces the convergence of the beam entering G2.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element L22",
      type: "Positive Meniscus (convex to image)",
      nd: 1.651597,
      vd: 58.55,
      focalLengthMm: 68.41220573326343,
      glass: "S-LAL7 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus in G2 that returns convergence after L21.",
    },
    {
      id: 7,
      name: "L23",
      label: "Element L23",
      type: "Biconvex Positive",
      nd: 1.740999,
      vd: 52.64,
      focalLengthMm: 29.296417378072675,
      glass: "S-LAL61 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Second positive element in G2. It sends the converging beam into the fixed rear group.",
    },
    {
      id: 8,
      name: "L31",
      label: "Element L31",
      type: "Negative Meniscus (concave to image)",
      nd: 1.772499,
      vd: 49.6,
      focalLengthMm: -58.640562321533544,
      glass: "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative front member of G3, which helps set back focus and field curvature.",
    },
    {
      id: 9,
      name: "L32",
      label: "Element L32",
      type: "Biconvex Positive",
      nd: 1.548141,
      vd: 45.78,
      focalLengthMm: 73.38313227034284,
      glass: "S-TIL1 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive final element of the fixed, negative-power rear group.",
    },
  ],
  surfaces: [
    { label: "1", R: 39.6938, d: 3.5, sd: 11.1, medium: 1 },
    { label: "2", R: -216.223, d: 1.5, sd: 10.7, medium: 2 },
    { label: "3", R: 13.129, d: 12.5, sd: 10.7, rimCutDepthMm: 3.76 },
    { label: "4", R: 34.1159, d: 6.1, sd: 9.6, medium: 3 },
    { label: "5", R: -14.9811, d: 1.5, sd: 9.4, medium: 4 },
    { label: "6", R: 265.8581, d: 2.5, sd: 9.4 },
    { label: "STO", R: "flat" },
    { label: "8", R: -33.7748, d: 1.4, sd: 8.4, medium: 5 },
    { label: "9", R: 41.5423, d: 1.7, sd: 8.4 },
    { label: "10", R: -60.0662, d: 3.3, sd: 9.1, medium: 6 },
    { label: "11", R: -26.1423, d: 0.2, sd: 9.1 },
    { label: "12", R: 54.7001, d: 3.9, sd: 9.6, medium: 7 },
    { label: "13", R: -34.9008, sd: 9.6 },
    { label: "14", R: 229.2568, d: 1.6, sd: 11.4, medium: 8 },
    { label: "15", R: 37.7106, d: 1, sd: 11.4 },
    { label: "16", R: 70.8279, d: 3.6, sd: 11.7, medium: 9 },
    { label: "17", R: -91.4184, d: 39.818, sd: 11.7 },
  ],
  focus: {
    closeFocusM: 0.16087867,
    keyframes: [0, 0.86825542, 1],
    description:
      "PUBLISHED: Table 1 gives infinity, 1:2 and 1:1. G1 and its iris move toward the object by 30.053 mm at 1:1. G2 moves independently by 30.000 mm and G3 stays fixed. The model focuses at about 0.161 m at 1:1. Nikon specifies 0.163 m for the production lens.",
    published: [1, 2],
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 78.087,
        distanceReference: "first-surface",
        source: "US 2011/0176215 A1, Example 1, Table 1 (PDF p. 27), MID d0 and the d7 and d13 gaps.",
      },
      {
        zoomStation: 0,
        keyframe: 2,
        objectDistanceMm: 38.206,
        distanceReference: "first-surface",
        source: "US 2011/0176215 A1, Example 1, Table 1 (PDF p. 27), CLD d0 and the d7 and d13 gaps.",
      },
    ],
  },
  gaps: {
    "13": {
      label: "d13 (G2 to G3)",
      values: [[1.2, 16.234, 31.2]],
    },
    STO: {
      label: "d7 (stop to G2)",
      values: [[7.2, 6.688, 7.253]],
    },
  },
  aperture: {
    nominalFNumber: 2.887,
    fStops: [2.887, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 7,
  },
  groups: [
    {
      text: "G1 (+) FOCUS",
      fromSurface: "1",
      toSurface: "6",
    },
    {
      text: "G2 (+) FOCUS",
      fromSurface: "8",
      toSurface: "13",
    },
    {
      text: "G3 (−) FIXED",
      fromSurface: "14",
      toSurface: "17",
    },
  ],
  doublets: [
    {
      text: "L11–L12 (G1F)",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "L13–L14 (G1R)",
      fromSurface: "4",
      toSurface: "6",
    },
  ],
  layout: {
    yScFill: 0.42,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
