import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * JP S50-96221 A, sole numerical example, Table 1: the f = 1 prescription
 * is multiplied by 50, with all dimensional values expressed in millimetres.
 * The A publication's d9 = 0.393 is retained because it reproduces the printed
 * f and Bf; 0.383 would give Bf = 0.6990 instead of the printed 0.6955.
 * The stop splits d7 using the stated 72.5 mm stop-to-film distance; its radius
 * follows f/5.6. The image plane uses the printed 34.775 mm back focus.
 * Semi-diameters are read from Fig. 1(a), whose vertex spacings match the
 * table to about 3 %, and are checked by real-ray trace.
 * S1, S3, S5, S7 and S8 follow the drawing; L1, L2, L7 and L8 carry the flat
 * outer lands the figure draws (S2 to 20 mm, S4 to 12.7 mm, S11 to 13 mm, S13
 * to 17 mm). S4 keeps a 10.5 mm clear cap because it would cross S5 at about
 * 11.2 mm. S10/S11 keep 10 mm clear caps, because the spheres cross beyond
 * about 10.4 mm, with lands to the drawn rims. The cemented junctions S6 and
 * S9 follow the square tops drawn on L3 (12.5 mm) and L6 (11.6 mm, the
 * steepest rim allowed on S9); the figure sets the small L4 and L5 into these
 * faces at about 7.2 mm, so they are drawn tapering toward the stop.
 * Glass names supply catalog dispersion curves, not confirmed production materials.
 */
const LENS_DATA = {
  schema: 2,
  visible: true,
  key: "fujifilm-fujinon-sw-s-50mm-f56",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON SW S 50mm f/5.6",
  subtitle: "JP S50-96221 A, sole example — Fuji Photo Optical / Doi & Sakai",
  catalog: {
    lensMounts: ["fuji-g690"],
    imageFormat: "6x9",
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: {
      marketing: 50,
      design: 50,
    },
    fNumber: {
      marketing: 5.6,
      design: 5.6,
    },
    closeFocusM: { marketing: 1 },
    specs: ["8 ELEMENTS / 6 GROUPS", "ALL SPHERICAL", "DESIGN F/5.6", "90° FIELD"],
  },
  source: {
    patentNumber: "JP S50-96221 A",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1975,
    authors: ["Ryoichi Doi", "Yutaka Sakai"],
    assignees: ["Fuji Photo Optical Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6425,
      vd: 58.1,
      indexReference: "d",
      glass: "LAK6 (Sumita)",
      focalLengthMm: -58.6,
      role: "Front negative meniscus accepting the wide field",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.56883,
      vd: 56,
      indexReference: "d",
      glass: "BAC4 (HOYA)",
      focalLengthMm: -136.6,
      role: "Weak negative meniscus ahead of the front cemented pair",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.8,
      indexReference: "d",
      glass: "BACED5 (HOYA)",
      focalLengthMm: 21.63,
      role: "Positive member of the front cemented pair",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.54814,
      vd: 45.9,
      indexReference: "d",
      glass: "LLF1 (Schott)",
      focalLengthMm: -34.68,
      role: "Negative flint member of the front cemented pair",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.5231,
      vd: 50.9,
      indexReference: "d",
      glass: "KF5 (Sumita)",
      focalLengthMm: -25.45,
      role: "Negative member of the rear cemented pair",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.5,
      indexReference: "d",
      glass: "LAL7 (OHARA)",
      focalLengthMm: 15.45,
      role: "Strong positive member of the rear cemented pair",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.3,
      indexReference: "d",
      glass: "SF10 (Schott)",
      focalLengthMm: -73.43,
      role: "Rear negative flint meniscus following the rear cemented pair",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.65844,
      vd: 50.8,
      indexReference: "d",
      glass: "BACED5 (HOYA)",
      focalLengthMm: -44.95,
      role: "Final negative meniscus shaping the exit rays and field",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 39.644,
      d: 2,
      sd: 20,
      medium: 1,
    },
    {
      label: "2",
      R: 18.9305,
      d: 13.9415,
      sd: 16,
      rimExtensionSd: 20,
    },
    {
      label: "3",
      R: 30.7105,
      d: 2.3,
      sd: 12.7,
      medium: 2,
    },
    {
      label: "4",
      R: 21.4135,
      d: 1.1685,
      sd: 10.5,
      rimExtensionSd: 12.7,
    },
    {
      label: "5",
      R: 32.2615,
      d: 14.2,
      sd: 12.5,
      medium: 3,
    },
    {
      label: "6",
      R: -21.037,
      d: 2,
      sd: 12.5,
      medium: 4,
    },
    {
      label: "7",
      R: 204.0815,
      d: 1.4055,
      sd: 7.2,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.8445,
    },
    {
      label: "8",
      R: 581.395,
      d: 2,
      sd: 7.2,
      medium: 5,
    },
    {
      label: "9",
      R: 12.9995,
      d: 19.65,
      sd: 11.6,
      medium: 6,
    },
    {
      label: "10",
      R: -18.0325,
      d: 0.47,
      sd: 10,
      rimExtensionSd: 12,
    },
    {
      label: "11",
      R: -16.4655,
      d: 3.25,
      sd: 10,
      rimExtensionSd: 13,
      medium: 7,
    },
    {
      label: "12",
      R: -25.7695,
      d: 8.5105,
      sd: 13,
    },
    {
      label: "13",
      R: -15.7435,
      d: 2,
      sd: 13.5,
      rimExtensionSd: 17,
      medium: 8,
    },
    {
      label: "14",
      R: -35.329,
      d: 34.775,
      sd: 17,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only; the patent supplies no close-focus spacings. The production lens focuses to 1 m.",
  },
  aperture: {
    nominalFNumber: 5.6,
    fStops: [5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
    blades: 5,
  },
  groups: [
    { text: "A1", fromSurface: "1", toSurface: "7" },
    { text: "A2", fromSurface: "8", toSurface: "14" },
  ],
  doublets: [
    { text: "C1", fromSurface: "5", toSurface: "7" },
    { text: "C2", fromSurface: "8", toSurface: "10" },
  ],
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 90,
    maxTraceFieldDeg: 45,
  },
  layout: {
    scFill: 0.6,
    yScFill: 0.45,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
