import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * John R. Miles, US 2,527,370 A (1950), sole numerical example in Figure 1.
 * The patent gives arbitrary length units, taken as millimetres here.
 * Radii, thicknesses, D-line indices and Abbe numbers follow the printed table.
 * The printed stop is 24.36 mm behind the last glass surface, with a 10.12 mm
 * diameter; f/6.3 gives a 10.133 mm model iris, within the stated approximation.
 * All three glass semi-diameters are measured from Figure 1 as 15.3 mm.
 * The image plane is inferred from D-line paraxial infinity focus: 88.1986 mm
 * behind the glass, or 63.8386 mm behind the stop. No back focus is printed.
 */
const LENS_DATA = {
  schema: 2,
  key: "miles-100mm-f63-us2527370",
  maker: null,
  name: "MILES 100mm f/6.3 (US 2,527,370 Design)",
  subtitle: "US 2,527,370 A, sole example — cemented achromatic doublet",
  visible: true,
  source: {
    patentNumber: "US 2,527,370 A",
    patentYear: 1950,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["John R. Miles"],
    assignees: ["La Croix Optical Company"],
    sdSource: "figure-measured",
  },
  catalog: {
    focalLengthMm: {
      design: 100.04,
    },
    fNumber: {
      design: 6.3,
    },
    elementCount: 2,
    groupCount: 1,
    imageCircleMm: 33.8313,
    specs: ["2 ELEMENTS / 1 GROUP", "ALL SPHERICAL", "DESIGN F/6.3"],
  },
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.516,
      vd: 59.1,
      indexReference: "D",
      glass: "Unmatched (ordinary window glass; nD 1.516 / ν 59.1)",
      focalLengthMm: 41.43,
      role: "Positive front element supplying image-forming power and field flattening.",
      cemented: "C1",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.617,
      vd: 36.6,
      indexReference: "D",
      glass: "Unmatched (ordinary flint; nD 1.617 / ν 36.6)",
      focalLengthMm: -64.13,
      role: "Negative rear element balancing the crown's chromatic power and contributing field flattening.",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 35.01,
      d: 7.87,
      sd: 15.3,
      medium: 1,
    },
    {
      label: "2",
      R: -50.7,
      d: 5.25,
      sd: 15.3,
      medium: 2,
    },
    {
      label: "3",
      R: 187.36,
      d: 24.36,
      sd: 15.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 63.838578061,
    },
  ],
  aperture: {
    nominalFNumber: 6.3,
    fStops: [6.3, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 19,
    maxTraceFieldDeg: 9.5,
  },
  rays: {
    offAxisFieldFrac: 1,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "Cemented achromatic doublet",
      fromSurface: "1",
      toSurface: "3",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "1", toSurface: "3" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
