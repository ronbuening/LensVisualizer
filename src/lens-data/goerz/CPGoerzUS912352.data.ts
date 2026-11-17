import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 912,352 A (Walther Zschokke, Optische Anstalt C. P. Goerz, granted 1909), sole numerical example
 * (f = 100, 1:3.5): table on PDF page 2, single figure on PDF page 1. The eight signed radii, seven
 * axial intervals, four sodium D indices and four printed C−F differences are copied as printed;
 * νD is derived as (nD − 1)/(nF − nC). The printed G′ indices are not used by the model.
 * Inferred, not printed: the diaphragm at the middle of the 12.0 mm central air space (the
 * to-scale figure draws it about 5.8 mm behind r4), the common 15 mm clear semi-diameter, and the last
 * interval, which is the computed paraxial back focus at the D line. The figure draws all four lenses
 * square-cut at one height of about 14.2 mm, close to the 14.29 mm f/3.5 axial beam on r1. The 15 mm rims
 * are about 5 % larger; they are kept because smaller rims cut more off-axis light. Infinity focus only.
 */
const LENS_DATA = {
  schema: 2,
  key: "c-p-goerz-100mm-f35-us912352",
  maker: "C. P. Goerz",
  name: "C. P. GOERZ 100mm f/3.5 (US 912,352 Design)",
  subtitle: "US 912,352 A, sole example \u2014 Celor-type dialyte objective",
  visible: false,
  catalog: {
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "DESIGN F/3.5",
      "FOUR AIR-SPACED SINGLETS"
    ],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      design: 100
    },
    fNumber: {
      design: 3.5
    }
  },
  source: {
    patentNumber: "US 912,352 A",
    example: {
      label: "Sole example",
      id: null
    },
    patentYear: 1909,
    authors: [
      "Walther Zschokke"
    ],
    assignees: [
      "Optische Anstalt C. P. Goerz Aktiengesellschaft"
    ],
    sdSource: "heuristic"
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      focalLengthMm: 44.55,
      nd: 1.6141,
      vd: 56.443014705882355,
      indexReference: "D",
      glass: "Unmatched (nD 1.6141 / V 56.44; no glass name printed)",
      role: "Front positive crown of the front pair"
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      focalLengthMm: -68.61,
      nd: 1.6051,
      vd: 38.15258511979823,
      indexReference: "D",
      glass: "Unmatched (nD 1.6051 / V 38.15; no glass name printed)",
      role: "Weaker negative flint of the front pair, ahead of the diaphragm"
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      focalLengthMm: -37.5,
      nd: 1.5513,
      vd: 45.18852459016392,
      indexReference: "D",
      glass: "Unmatched (nD 1.5513 / V 45.19; no glass name printed)",
      role: "Symmetric negative flint of the rear pair, behind the diaphragm"
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      focalLengthMm: 39.69,
      nd: 1.6141,
      vd: 56.443014705882355,
      indexReference: "D",
      glass: "Unmatched (nD 1.6141 / V 56.44; no glass name printed)",
      role: "Rear positive crown of the rear pair"
    }
  ],
  surfaces: [
    {
      label: "1",
      R: 43.478,
      d: 5.2,
      sd: 15,
      medium: 1
    },
    {
      label: "2",
      R: -70.423,
      d: 1.6,
      sd: 15
    },
    {
      label: "3",
      R: -55.866,
      d: 2.1,
      sd: 15,
      medium: 2
    },
    {
      label: "4",
      R: 163.934,
      d: 6,
      sd: 15
    },
    {
      label: "STO",
      R: "flat",
      d: 6
    },
    {
      label: "5",
      R: -41.667,
      d: 1.8,
      sd: 15,
      medium: 3
    },
    {
      label: "6",
      R: 41.667,
      d: 3.6,
      sd: 15
    },
    {
      label: "7",
      R: 78.126,
      d: 5.7,
      sd: 15,
      medium: 4
    },
    {
      label: "8",
      R: -34.439,
      d: 85.47978363727191,
      sd: 15
    }
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data."
  },
  aperture: {
    nominalFNumber: 3.5,
    fStops: [
      3.5,
      4,
      5.6,
      8,
      11,
      16,
      22
    ]
  },
  groups: [
    {
      text: "FRONT PAIR",
      fromSurface: "1",
      toSurface: "4"
    },
    {
      text: "REAR PAIR",
      fromSurface: "5",
      toSurface: "8"
    }
  ],
  doublets: [],
  layout: {
    yScFill: 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
