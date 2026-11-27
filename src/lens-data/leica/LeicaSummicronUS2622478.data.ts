import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,622,478 A, Example 2 / Figure 2, by Gustav Kleineberg and Otto Zimmermann
 * for Ernst Leitz GmbH, granted 1952. Seven spherical elements in six groups.
 * The table gives f = 100 without an absolute length unit; dimensions are read
 * as millimetres. Radii, thicknesses, air spaces, d-line indices and Abbe numbers
 * follow the printed table. Elements 5 and 6 are cemented at r10.
 * The iris splits the printed 20.02 mm central air space into 11.25 and 8.77 mm;
 * its position and derived opening are inferred. Clear semi-diameters follow
 * Figure 2's relative rim heights, with the f/2 axial beam preserved. Elements
 * 1 and 2 share a 28 mm rim height, and Element 3 has a square 21 mm rim.
 * The doublet and rear singlet retain larger clear
 * radii than the schematic drawing to limit the loss of oblique illumination.
 * The image plane uses the calculated paraxial back focus of 55.44 mm.
 * The printed full field is 50 degrees. The Summicron family association does
 * not settle which numerical example entered production as the 5 cm f/2 lens.
 */
const LENS_DATA = {
  schema: 2,
  key: "leica-summicron-100mm-f2-us2622478",
  maker: "Leica",
  name: "LEICA SUMMICRON 100mm f/2 (US 2,622,478 Design)",
  subtitle: "US 2,622,478 A, Example 2 — Leitz / Kleineberg & Zimmermann",
  visible: true,
  source: {
    patentNumber: "US 2,622,478 A",
    patentYear: 1952,
    example: {
      label: "Example 2",
      id: "2",
    },
    authors: ["Gustav Kleineberg", "Otto Zimmermann"],
    assignees: ["Ernst Leitz GmbH"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 99.96,
    },
    fNumber: {
      design: 2,
    },
    elementCount: 7,
    groupCount: 6,
    imageCircleMm: 91.94,
    specs: ["7 ELEMENTS / 6 GROUPS", "ALL SPHERICAL", "DESIGN f = 100 mm", "DESIGN F/2", "50° FIELD"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6923,
      vd: 54.7,
      indexReference: "d",
      focalLengthMm: 69.04,
      glass: "N-LAK9 (spectral proxy; patent nd 1.6923 / ν 54.7; supplier and melt unspecified)",
      role: "Positive front collector of the split front member.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.65017,
      vd: 33.7,
      indexReference: "d",
      focalLengthMm: -126.39,
      glass: "SF12 (spectral proxy; patent nd 1.65017 / ν 33.7; supplier and melt unspecified)",
      role: "Negative member of the split front positive component.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6923,
      vd: 54.7,
      indexReference: "d",
      focalLengthMm: 112.13,
      glass: "N-LAK9 (spectral proxy; patent nd 1.6923 / ν 54.7; supplier and melt unspecified)",
      role: "Positive half of the air-spaced meniscus pair before the stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.57501,
      vd: 41.3,
      indexReference: "d",
      focalLengthMm: -71.96,
      glass: "QF3 (CDGM)",
      role: "Negative meniscus with its deeply concave rear face toward the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58217,
      vd: 38,
      indexReference: "d",
      focalLengthMm: -44.99,
      glass: "Unmatched (nd 1.58217 / ν 38.0)",
      role: "Negative front element of the rear cemented pair.",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6923,
      vd: 54.7,
      indexReference: "d",
      focalLengthMm: 54.38,
      glass: "N-LAK9 (spectral proxy; patent nd 1.6923 / ν 54.7; supplier and melt unspecified)",
      role: "Positive rear element of the cemented pair.",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.71715,
      vd: 47.9,
      indexReference: "d",
      focalLengthMm: 106.89,
      glass: "S-LAM3 (spectral proxy; patent nd 1.71715 / ν 47.9; supplier and melt unspecified)",
      role: "Rear positive lens, described as radiation-absorbing flint.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 53.84,
      d: 13.25,
      sd: 28,
      medium: 1,
    },
    {
      label: "2",
      R: -382.69,
      d: 0.54,
      sd: 28,
    },
    {
      label: "3",
      R: -328.33,
      d: 3.92,
      sd: 28,
      medium: 2,
    },
    {
      label: "4",
      R: 110.12,
      d: 0.2,
      sd: 28,
    },
    {
      label: "5",
      R: 34.36,
      d: 6.67,
      sd: 21,
      medium: 3,
    },
    {
      label: "6",
      R: 56.75,
      d: 0.39,
      sd: 21,
    },
    {
      label: "7",
      R: 59.27,
      d: 4.51,
      sd: 20,
      medium: 4,
    },
    {
      label: "8",
      R: 23.69,
      d: 11.25,
      sd: 19,
    },
    {
      label: "STO",
      R: "flat",
      d: 8.77,
    },
    {
      label: "9",
      R: -34.28,
      d: 3.63,
      sd: 20,
      medium: 5,
    },
    {
      label: "10",
      R: 115.3,
      d: 8.78,
      sd: 20,
      medium: 6,
    },
    {
      label: "11",
      R: -54.16,
      d: 1.96,
      sd: 20,
    },
    {
      label: "12",
      R: 268.86,
      d: 6.08,
      sd: 22.4,
      medium: 7,
    },
    {
      label: "13",
      R: -106.21,
      d: 55.440549,
      sd: 22.4,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 50,
    maxTraceFieldDeg: 25,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "FRONT POSITIVE",
      fromSurface: "1",
      toSurface: "4",
    },
    {
      text: "FRONT MENISCUS",
      fromSurface: "5",
      toSurface: "8",
    },
    {
      text: "REAR MENISCUS",
      fromSurface: "9",
      toSurface: "11",
    },
    {
      text: "REAR POSITIVE",
      fromSurface: "12",
      toSurface: "13",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "9", toSurface: "11" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
