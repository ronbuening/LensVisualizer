import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,388,869 A, Example II, from the second table on PDF page 2, in millimeters.
 * The page 1 drawing depicts Example I. The printed D-line indices, Abbe numbers,
 * radii and internal spacings are retained. The table gives EF 100 mm and BF
 * 89.5 mm; the prescription computes to EFL 99.59 mm and BF 89.11 mm, with nearly
 * the same BF/EF ratio. The image plane is at that computed paraxial focus.
 * The source's element-power summary chart is also approximate.
 * The text places the diaphragm about 2 mm behind the rear vertex; the model
 * uses exactly 2 mm. Its opening is derived from f/8. Clear rims of 15/12.5/10 mm
 * are inferred and clear the f/8 axial beam and 27-degree chief ray. Their relative
 * heights agree within about 5% with the Example I drawing, which does not give
 * Example II's clear dimensions or rim profiles.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-100mm-f8-us2388869",
  maker: "Kodak",
  name: "KODAK 100mm f/8 (US 2,388,869 Design)",
  visible: true,
  source: {
    patentNumber: "US 2,388,869 A",
    patentYear: 1945,
    example: {
      label: "Example II",
      id: "2",
    },
    authors: ["Max Reiss"],
    assignees: ["Eastman Kodak Company"],
    errata: [
      {
        status: "unresolved",
        note: "Example II gives EF 100 mm and BF 89.5 mm; its printed prescription computes to EFL 99.59 mm and paraxial BF 89.11 mm, with nearly the same BF/EF ratio. The printed prescription is retained and the image plane uses its paraxial focus. The element focal-length chart is also approximate.",
      },
    ],
    sdSource: "heuristic",
  },
  catalog: {
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: {
      design: 99.59,
    },
    fNumber: {
      design: 8,
    },
    specs: [
      "3 ELEMENTS / 3 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 100 mm",
      "DESIGN F/8",
    ],
    imageCircleMm: 102.1,
  },
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "I",
      label: "Element 1",
      type: "Biconvex Positive",
      role: "Front positive collector",
      focalLengthMm: 52.83,
      nd: 1.611,
      vd: 58.8,
      indexReference: "D",
      glass:
        "BSM4 (spectral proxy; patent nD 1.611 / ν 58.8; supplier and melt unspecified)",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "II",
      label: "Element 2",
      type: "Biconcave Negative",
      role: "Central negative element with greater dispersion",
      focalLengthMm: -32.53,
      nd: 1.605,
      vd: 38.0,
      indexReference: "D",
      glass:
        "E-F5 (spectral proxy; patent nD 1.605 / ν 38.0; supplier and melt unspecified)",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "III",
      label: "Element 3",
      type: "Plano-Convex Positive",
      role: "Rear positive element ahead of the diaphragm",
      focalLengthMm: 52.7,
      nd: 1.611,
      vd: 58.8,
      indexReference: "D",
      glass:
        "BSM4 (spectral proxy; patent nD 1.611 / ν 58.8; supplier and melt unspecified)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 32.9,
      d: 5.5,
      sd: 15,
      medium: 1,
    },
    {
      label: "2",
      R: -1604,
      d: 4.5,
      sd: 15,
    },
    {
      label: "3",
      R: -45.7,
      d: 1.5,
      sd: 12.5,
      medium: 2,
    },
    {
      label: "4",
      R: 35.0,
      d: 5.6,
      sd: 12.5,
    },
    {
      label: "5",
      R: "flat",
      d: 2.7,
      sd: 10,
      medium: 3,
    },
    {
      label: "6",
      R: -32.2,
      d: 2,
      sd: 10,
    },
    {
      label: "STO",
      R: "flat",
      d: 87.11064,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "The patent describes front-element focusing. Only infinity is modeled.",
  },
  aperture: {
    nominalFNumber: 8,
    fStops: [8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 54,
    maxTraceFieldDeg: 27,
  },
  layout: {
    yScFill: 0.5,
  },
  subtitle: "US 2,388,869 A, Example II — Eastman Kodak / Reiss",
  groups: [
    {
      text: "Front +",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Middle −",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Rear +",
      fromSurface: "5",
      toSurface: "6",
    },
  ],
} satisfies LensDataV2Input;
export default LENS_DATA;
