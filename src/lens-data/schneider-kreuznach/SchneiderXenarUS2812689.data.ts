import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,812,689 A, sole example: a four-element, three-group f/3.5 objective.
 * The patent gives f = 100 without a physical unit; dimensions are represented in mm.
 * Radii, thicknesses, air spaces and helium-d index/Abbe pairs follow both printed tables.
 * The inferred stop splits the 7.06 mm diaphragm space into 4.50 / 2.56 mm.
 * Clear semi-diameters are estimated; the image plane uses the computed paraxial
 * back focus of 83.212049 mm. The illustrative ±5° field is not printed in the patent.
 */
const LENS_DATA = {
  schema: 2,
  key: "schneider-kreuznach-xenar-100mm-f35-us2812689",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH XENAR 100mm f/3.5 (US 2,812,689 Design)",
  subtitle: "US 2,812,689 A, sole example — Xenar Tessar-type family",
  visible: true,
  source: {
    patentNumber: "US 2,812,689 A",
    patentYear: 1957,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Wolfram W. Albrecht"],
    assignees: ["Jos. Schneider & Co., Optische Werke"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 3.5,
    },
    elementCount: 4,
    groupCount: 3,
    specs: ["4 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/3.5"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      focalLengthMm: 55.12,
      nd: 1.69347,
      vd: 53.5,
      indexReference: "d",
      glass: "H-LaK6A (CDGM)",
      role: "Positive front element of the three-group objective",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      focalLengthMm: -35.44,
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      glass: "F2 (Schott)",
      role: "Negative middle element balancing the positive front and rear groups",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      focalLengthMm: -49.62,
      nd: 1.62364,
      vd: 36.7,
      indexReference: "d",
      glass: "Unmatched (nd 1.62364 / ν 36.7)",
      role: "Negative dispersive member of the rear cemented doublet",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      focalLengthMm: 28.09,
      nd: 1.74472,
      vd: 44.7,
      indexReference: "d",
      glass: "Unmatched (nd 1.74472 / ν 44.7)",
      role: "Positive member supplying the rear doublet's converging power",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 37.3,
      d: 9.79,
      sd: 18,
      medium: 1,
    },
    {
      label: "2",
      R: 1373,
      d: 4.77,
      sd: 18,
    },
    {
      label: "3",
      R: -70.6,
      d: 2.84,
      sd: 16,
      medium: 2,
    },
    {
      label: "4",
      R: 32.4,
      d: 4.5,
      sd: 15,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.56,
    },
    {
      label: "5",
      R: -415.4,
      d: 2.17,
      sd: 16,
      medium: 3,
    },
    {
      label: "6",
      R: 33.5,
      d: 7.2,
      sd: 15.5,
      medium: 4,
    },
    {
      label: "7",
      R: -50.6,
      d: 83.21204898227607,
      sd: 15.5,
    },
  ],
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 10,
    maxTraceFieldDeg: 5,
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
      text: "Front singlet",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Middle singlet",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Rear cemented doublet",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "5", toSurface: "7" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
