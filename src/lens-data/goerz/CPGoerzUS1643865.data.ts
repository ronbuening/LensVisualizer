import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,643,865 A, Example 1 / Fig. 1 (Franz Weidert, Optische Anstalt C. P. Goerz Aktiengesellschaft; granted 1927,
 * German priority 1923): a cemented two-lens achromat with the diaphragm behind the lens.
 *
 * UNITS: millimetres, at the patent's printed focal length fD = 100 mm.
 * PRINTED: radii +21, -35, +38.82; thicknesses 3 and 1.25; crown 510/634 (nD 1.5096, v 63.4) and flint 549/471
 * (nD 1.5490, v 47.1) from the Sendlinger Optische Glaswerke catalogue; stop distance 11.5 behind the last vertex;
 * diaphragm diameter 9.1; free lens diameter 14.7 (semi-diameter 7.35 on all three surfaces); aperture f/9.
 * Fig. 1 is drawn to scale (its diaphragm opening measures 9.1 mm) and shows the square-edged glass blank about
 * 16.5 mm across, a mounting margin outside the printed free diameter; the printed clear diameter is used.
 * Indices are sodium D; v is the patent's (nD - 1)/(nF - nC). The patent also prints nF and nG', which are not used.
 * INFERRED: only the image distance. The last gap is the computed paraxial back focus at D (81.808 mm behind the
 * diaphragm, 93.308 mm behind the last vertex). The 8.99 opening is what the printed 9.1 mm diaphragm gives.
 * The printed design is deliberately under-corrected for spherical aberration: the patent states 3.1 mm at 5.56 mm
 * incidence, and the model gives 3.09 mm. That is a property of the design, not a focus error.
 * The patent states no field angle and names no product.
 */
const LENS_DATA = {
  schema: 2,
  key: "c-p-goerz-100mm-f9-us1643865",
  maker: "C. P. Goerz",
  name: "C. P. GOERZ 100mm f/9 (US 1,643,865 Design)",
  subtitle: "US 1,643,865 A, Example 1 — cemented achromat with rear diaphragm",
  visible: false,
  catalog: {
    specs: [
      "2 ELEMENTS / 1 GROUP",
      "ALL SPHERICAL",
      "DESIGN F/9",
      "REAR DIAPHRAGM",
    ],
    elementCount: 2,
    groupCount: 1,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 9,
    },
  },
  source: {
    patentNumber: "US 1,643,865 A",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 1927,
    authors: ["Franz Weidert"],
    assignees: ["Optische Anstalt C. P. Goerz Aktiengesellschaft"],
    sdSource: "source-table",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.5096,
      vd: 63.4,
      indexReference: "D",
      glass: "Unmatched (nD 1.5096 / V 63.4, Sendlinger crown 510/634)",
      focalLengthMm: 26.23,
      role: "Front crown; supplies all of the positive power",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.549,
      vd: 47.1,
      indexReference: "D",
      glass: "Unmatched (nD 1.5490 / V 47.1, Sendlinger flint 549/471)",
      focalLengthMm: -33.33,
      role: "Cemented rear flint; corrects colour across a weak cemented surface",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 21,
      d: 3,
      sd: 7.35,
      medium: 1,
    },
    {
      label: "2",
      R: -35,
      d: 1.25,
      sd: 7.35,
      medium: 2,
    },
    {
      label: "3",
      R: 38.82,
      d: 11.5,
      sd: 7.35,
    },
    {
      label: "STO",
      R: "flat",
      d: 81.808,
    },
  ],
  aperture: {
    nominalFNumber: 8.99,
    maxFNumber: 32,
    fStops: [8.99, 11, 16, 22, 32],
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only; the patent gives no close-focus data. The image plane is the computed paraxial focus at the D line.",
  },
  groups: [],
  doublets: [{ text: "C1", fromSurface: "1", toSurface: "3" }],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
