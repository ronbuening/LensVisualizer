import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Whole literal US7843651B2 E1, corrected-source custody. See companion audit for validation scope.
 * 8 glass elements / 6 groups plus 0.18 mm resin, represented as a ninth material
 * entry to preserve its printed nd/Vd. No retune to marketed 15 mm or f/4.
 * Source S11=-42.598 and S15=-17.739; old compact transcript was incorrect.
 * S3 K=-1; A4/A6/A8 literal. Stop 3.13 mm before S11, splitting d10=5.19.
 * No published clear radii: rounded figure-envelope hypotheses only.
 * Last source d15 is blank; the separate BF gap is a derived AIR focus.
 * Generic source BF definition mentions cover glass; no plate is tabulated or
 * drawn. Do not add a camera plate or claim this resolves the source convention.
 * Infinity-only. E1 is one of eight variants, not unique factory identification.
 * Default geometry checks retained; no gap-sag override, cuts, or trim granted.
 */

const LENS_DATA = {
  layout: {
    yScFill: 0.35,
  },
  schema: 2,
  key: "pentax-smc-da-15mm-f4-ed-al-limited",
  maker: "Pentax",
  name: "PENTAX DA 15mm f/4 ED AL Limited",
  subtitle: "US 7,843,651 B2, Embodiment 1 \u2014 probable original smc family; not a certified factory prescription",
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    elementCount: 8,
    groupCount: 6,
    specs: [
      "8 GLASS ELEMENTS / 6 GROUPS + HYBRID RESIN",
      "SOURCE 15.45 mm / F4.1",
      "ONE ASPHERIC SURFACE",
      "PROBABLE ORIGINAL smc FAMILY",
    ],
    focalLengthMm: {
      marketing: 15,
      design: 15.45,
    },
    closeFocusM: {
      marketing: 0.18,
    },
    fNumber: {
      marketing: 4,
      design: 4.1,
    },
  },
  source: {
    patentNumber: "US 7,843,651 B2",
    example: {
      label: "Embodiment 1",
      id: "1",
    },
    patentYear: 2010,
    authors: ["Yasuo Kanazashi"],
    assignees: ["Hoya Corporation"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Glass L1",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      focalLengthMm: -29.824129104578606,
      glass: "Unmatched (literal patent nd/Vd; no factory melt identification)",
      role: "Printed material interval S1\u2013S2; isolated d-line power is descriptive, not an in-system power allocation.",
      cemented: "HYBRID",
    },
    {
      id: 2,
      name: "Resin",
      label: "Hybrid resin layer",
      type: "Aspheric Resin Layer",
      nd: 1.52972,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: -96.23992080069029,
      glass: "Unmatched (literal patent nd/Vd; no factory melt identification)",
      role: "Printed material interval S2\u2013S3; isolated d-line power is descriptive, not an in-system power allocation.",
      cemented: "HYBRID",
    },
    {
      id: 3,
      name: "L2",
      label: "Glass L2",
      type: "Positive Meniscus",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      focalLengthMm: 59.87363281672282,
      glass: "Unmatched (literal patent nd/Vd; no factory melt identification)",
      role: "Printed material interval S4\u2013S5; isolated d-line power is descriptive, not an in-system power allocation.",
    },
    {
      id: 4,
      name: "L3",
      label: "Glass L3",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: -14.099730041638423,
      glass: "Unmatched (literal patent nd/Vd; no factory melt identification)",
      role: "Printed material interval S6\u2013S7; isolated d-line power is descriptive, not an in-system power allocation.",
    },
    {
      id: 5,
      name: "L4",
      label: "Glass L4",
      type: "Biconvex Positive",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      focalLengthMm: 8.467394727329124,
      glass: "Unmatched (literal patent nd/Vd; no factory melt identification)",
      role: "Printed material interval S8\u2013S9; isolated d-line power is descriptive, not an in-system power allocation.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L5",
      label: "Glass L5",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      focalLengthMm: -13.597654679024531,
      glass: "Unmatched (literal patent nd/Vd; no factory melt identification)",
      role: "Printed material interval S9\u2013S10; isolated d-line power is descriptive, not an in-system power allocation.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L6",
      label: "Glass L6",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -15.038075849185473,
      glass: "Unmatched (literal patent nd/Vd; no factory melt identification)",
      role: "Printed material interval S11\u2013S12; isolated d-line power is descriptive, not an in-system power allocation.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L7",
      label: "Glass L7",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 14.849169674762248,
      glass: "Unmatched (literal patent nd/Vd; no factory melt identification)",
      role: "Printed material interval S12\u2013S13; isolated d-line power is descriptive, not an in-system power allocation.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L8",
      label: "Glass L8",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 33.4560857958077,
      glass: "Unmatched (literal patent nd/Vd; no factory melt identification)",
      role: "Printed material interval S14\u2013S15; isolated d-line power is descriptive, not an in-system power allocation.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 32.044,
      sd: 13.5,
      d: 1.8,
      medium: 1,
    },
    {
      label: "2",
      R: 13.372,
      sd: 11,
      d: 0.18,
      medium: 2,
    },
    {
      label: "3A",
      R: 10.544,
      sd: 11,
      d: 7.16,
      asphere: {
        K: -1,
        A4: 2.64942e-5,
        A6: 1.0204e-7,
        A8: -6.9952e-10,
      },
    },
    {
      label: "4",
      R: 27.64,
      sd: 9.3,
      d: 3.18,
      medium: 3,
    },
    {
      label: "5",
      R: 103.429,
      sd: 9.3,
      d: 6.11,
    },
    {
      label: "6",
      R: 35.873,
      sd: 5.7,
      d: 1.5,
      medium: 4,
    },
    {
      label: "7",
      R: 8.694,
      sd: 5.7,
      d: 2.78,
    },
    {
      label: "8",
      R: 14.071,
      sd: 4.9,
      d: 4.78,
      medium: 5,
    },
    {
      label: "9",
      R: -8.787,
      sd: 4.9,
      d: 1.63,
      medium: 6,
    },
    {
      label: "10",
      R: -48.476,
      sd: 4.9,
      d: 2.06,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.13,
    },
    {
      label: "11",
      R: -42.598,
      sd: 5,
      d: 1.31,
      medium: 7,
    },
    {
      label: "12",
      R: 17.149,
      sd: 5,
      d: 3.51,
      medium: 8,
    },
    {
      label: "13",
      R: -12.075,
      sd: 5,
      d: 0.76,
    },
    {
      label: "14",
      R: 195.173,
      sd: 5.5,
      d: 1.93,
      medium: 9,
    },
    {
      label: "15",
      R: -17.739,
      sd: 5.5,
    },
  ],
  gaps: {
    "15": {
      label: "Derived air BF (not printed d15)",
      values: [[37.49026159908341, 37.49026159908341]],
    },
  },
  focus: {
    closeFocusM: 1000,
    description:
      "Infinity-only reconstruction. 1000 m is a static UI placeholder, not the product minimum focus. No focus motion is implemented. Source d10=4.57 and fB=39.83 near-state values are retained in evidence only.",
  },
  aperture: {
    nominalFNumber: 4.1,
    fStops: [4.1, 5.6, 8, 11, 16],
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 85.92,
    maxTraceFieldDeg: 42.96,
  },
  groups: [
    {
      text: "G1",
      fromSurface: "1",
      toSurface: "5",
    },
    {
      text: "G2",
      fromSurface: "6",
      toSurface: "10",
    },
    {
      text: "G3",
      fromSurface: "11",
      toSurface: "15",
    },
  ],
  doublets: [
    {
      text: "HYBRID",
      fromSurface: "1",
      toSurface: "3A",
    },
    {
      text: "D1",
      fromSurface: "8",
      toSurface: "10",
    },
    {
      text: "D2",
      fromSurface: "11",
      toSurface: "13",
    },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
