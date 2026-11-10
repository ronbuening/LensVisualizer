import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * TAMRON 45.3mm f/2.8 MACRO — patent design, US 7,286,303 B2 (Tamron, 2007).
 * Source: the patent's sole numerical example (Tables 1–2, Fig. 1); the application US 2006/0285230 A1
 * (¶0045–0046) prints the same rows. Patent scale (f = 45.3 mm, F/2.8, image height 21.633 mm); no scaling.
 * No retail lens is identified with this design.
 *
 * 9 elements / 8 groups, all spherical; L5–L6 cemented at surface 12. Surface labels follow the patent.
 * Patent surface 1 is a flat plane in air 3.0 mm ahead of surface 2, with no glass after it; it has no optical
 * effect and is omitted. The stop is the patent's surface 10, 4.0 mm behind surface 9 and 4.0 mm ahead of surface 11.
 *
 * Focus: the patent prints D15 and D19 at infinity and at equal magnification (1:1). The final gap is the printed
 * D19; the infinity paraxial focus lies 0.0004 mm beyond it. The 1:1 object distance is calculated, not printed.
 *
 * Glass: printed nd/νd. The catalog labels are exact HOYA rows, whose νd rounds to every printed value; the
 * production supplier is not known.
 * Semi-diameters are not printed: they are estimated, not measured rims. The stop radius follows from F/2.8.
 *
 * Source inconsistencies, none affecting the table: claim 1 of the grant calls the first element's object-side face
 * concave (the table, description, Fig. 1 and the application's claim give convex); the grant prints the
 * aberration-plot wavelengths as 87.56 and 84 nm, where the application (¶0048) prints 587.56 and 435.84 nm; the
 * example does not meet the patent's conditions (2) and (3).
 */
const LENS_DATA = {
  schema: 2,
  key: "tamron-45mm-f28-macro-us7286303",
  maker: "Tamron",
  name: "TAMRON 45.3mm f/2.8 MACRO (US 7,286,303 Design)",
  subtitle: "US 7,286,303 B2 — floating-focus macro design; no retail lens identified",
  catalog: {
    imageFormat: "135-full-frame",
    specs: ["9 ELEMENTS / 8 GROUPS", "DESIGN f = 45.3 mm", "DESIGN F/2.8", "ALL SPHERICAL", "FLOATING FOCUS TO 1:1"],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: {
      design: 45.3,
    },
    fNumber: {
      design: 2.8,
    },
    imageCircleMm: 43.266,
  },
  source: {
    patentNumber: "US 7,286,303 B2",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 2007,
    authors: ["Akio Arakawa", "Yuichi Muramatsu"],
    assignees: ["Tamron Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      glass: "LAC14 (Hoya)",
      role: "Negative front meniscus; diverges the beam to secure the long back focus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      glass: "E-FD4 (Hoya)",
      role: "Positive meniscus; with L1, limits the change in distortion at close range.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      glass: "LAC10 (Hoya)",
      role: "Positive element making the group near-symmetric about the stop, which aids coma correction.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      glass: "E-F2 (Hoya)",
      role: "Negative meniscus with a strongly concave rear face toward the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      glass: "E-FD1L (Hoya)",
      role: "Negative front half of the cemented doublet; strongly concave face toward the stop.",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      glass: "TAF1 (Hoya)",
      role: "Positive rear half of the cemented doublet, strongly convex toward the image.",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      glass: "LAC10 (Hoya)",
      role: "Positive element closing the front group, ahead of the floating gap D15.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      glass: "LAC10 (Hoya)",
      role: "Weak negative meniscus leading the rear floating group.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.54072,
      vd: 47.2,
      indexReference: "d",
      glass: "E-FEL2 (Hoya)",
      role: "Positive element closing the rear floating group.",
    },
  ],
  surfaces: [
    {
      label: "2",
      R: 31.9956,
      d: 1.5,
      sd: 12,
      medium: 1,
    },
    {
      label: "3",
      R: 17.3927,
      d: 2,
      sd: 10.179,
    },
    {
      label: "4",
      R: 35.0333,
      d: 3,
      sd: 10.179,
      medium: 2,
    },
    {
      label: "5",
      R: 70.9037,
      d: 1,
      sd: 11,
    },
    {
      label: "6",
      R: 20.4157,
      d: 3.5,
      sd: 10.5,
      medium: 3,
    },
    {
      label: "7",
      R: -304.9499,
      d: 1,
      sd: 10.5,
    },
    {
      label: "8",
      R: 200,
      d: 1.5,
      sd: 9.5,
      medium: 4,
    },
    {
      label: "9",
      R: 16.6496,
      d: 4,
      sd: 9.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 4,
    },
    {
      label: "11",
      R: -14.6537,
      d: 2,
      sd: 9.5,
      medium: 5,
    },
    {
      label: "12",
      R: 233.334,
      d: 5,
      sd: 10.5,
      medium: 6,
    },
    {
      label: "13",
      R: -20.0075,
      d: 0.2,
      sd: 10.5,
    },
    {
      label: "14",
      R: 257.9798,
      d: 3.5,
      sd: 11.5,
      medium: 7,
    },
    {
      label: "15",
      R: -34.8265,
      sd: 11.5,
    },
    {
      label: "16",
      R: 61.6658,
      d: 1,
      sd: 13,
      medium: 8,
    },
    {
      label: "17",
      R: 36.9213,
      d: 1.8,
      sd: 12.318,
    },
    {
      label: "18",
      R: 147.6397,
      d: 3,
      sd: 12.318,
      medium: 9,
    },
    {
      label: "19",
      R: -182.6472,
      sd: 13,
    },
  ],
  focus: {
    closeFocusM: 0.1844049802420535,
    published: [1],
    description:
      "PUBLISHED floating focus: the patent prints the infinity and equal-magnification (1:1) spacings. Both groups move toward the object, the front group with the stop by 42.325 mm and the rear group by 21.162 mm, so D15 opens from 0.669 to 21.832 mm and the back gap from 42.605 to 63.767 mm. The 1:1 object-to-image distance, 184.40 mm, is calculated from the printed gaps; the patent prints no object distance. Intermediate positions interpolate the gaps linearly, which is not a patent focus cam.",
  },
  gaps: {
    "15": {
      label: "D15",
      values: [[0.669, 21.832]],
    },
    "19": {
      label: "BF",
      values: [[42.605, 63.767]],
    },
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16],
  },
  groups: [
    {
      text: "FRONT",
      fromSurface: "2",
      toSurface: "15",
    },
    {
      text: "REAR",
      fromSurface: "16",
      toSurface: "19",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "11",
      toSurface: "13",
    },
  ],
  layout: {
    scFill: 0.55,
    yScFill: 0.35,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
