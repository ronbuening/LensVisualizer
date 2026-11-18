import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 1,484,853 A (Arthur Warmisham, of Leicester, England; granted 26 February 1924, no assignee printed), the sole
 * numerical example, Figure 1: a Petzval-type projection lens of four spherical elements in two cemented doublets
 * with a short back focus. Figure 2 of the patent is a conventional Petzval lens quoted from von Rohr for comparison
 * and is not modelled.
 *
 * The patent table is in inches; every radius, thickness and the separation S is multiplied by 25.4, with no further
 * scaling or fitting. The patent's signs are given for projection light travelling from the film to the screen; the
 * file is drawn the other way round (screen side on the left, film on the right), as in Figure 1. Indices and Abbe
 * numbers are the printed sodium D-line nD and V values. The printed table traces to a paraxial focal length of
 * 254.20 mm (10.008 in against the stated 10 in) and a back focus of 63.477 mm (2.499 in against the stated 2.508 in).
 *
 * Inferred, not printed: the stop plane, placed 1 mm in front of the first vertex (the patent defines the working
 * aperture as the free aperture of the front component, 3.20 inches or about f/3.1, which the stop radius reproduces);
 * the clear semi-diameters (42 mm front, 32 mm rear; the rear value is the least that passes the chief ray at the
 * patent's stated 5 degree half-field, while Figure 1 draws both components about 39 mm); and the back focus, which is
 * the computed paraxial image distance for an object at infinity.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-254mm-f31-us1484853",
  maker: "Cooke",
  name: "COOKE 254mm f/3.1 (US 1,484,853 Design)",
  subtitle: "1924; SOURCE COMPARISON APERTURE; NOT MAXIMUM RETAIL IDENTITY",
  visible: false,
  catalog: {
    specs: [
      "4 ELEMENTS / 2 GROUPS",
      "PATENT FIGURE 1; NO RETAIL IDENTITY",
      "SOURCE 3.20-INCH COMPARISON APERTURE",
      "ESTIMATED IRIS PLANE/RIMS; INFINITY ONLY",
    ],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: {
      design: 254.2,
    },
    fNumber: {
      design: 3.13,
    },
  },
  source: {
    patentNumber: "US 1,484,853 A",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1924,
    authors: ["Arthur Warmisham"],
    assignees: [],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconvex Positive",
      nd: 1.509,
      vd: 64.3,
      indexReference: "D",
      focalLengthMm: 246,
      glass: "Unmatched (Chance type 646, nD 1.509 / V 64.3)",
      role: "Biconvex crown of the front cemented doublet",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Negative Meniscus",
      nd: 1.651,
      vd: 33.5,
      indexReference: "D",
      focalLengthMm: -452.5,
      glass: "Unmatched (Chance type 5093, nD 1.651 / V 33.5)",
      role: "Meniscus flint of the front cemented doublet",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconvex Positive",
      nd: 1.509,
      vd: 64.3,
      indexReference: "D",
      focalLengthMm: 97.2,
      glass: "Unmatched (Chance type 646, nD 1.509 / V 64.3)",
      role: "Thick biconvex crown of the rear cemented doublet",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Plano-Concave Negative",
      nd: 1.651,
      vd: 33.5,
      indexReference: "D",
      focalLengthMm: -196.3,
      glass: "Unmatched (Chance type 5093, nD 1.651 / V 33.5)",
      role: "Plano-concave flint of the rear cemented doublet",
      cemented: "D2",
    },
  ],
  surfaces: [
    {
      label: "STO",
      R: "flat",
      d: 1,
    },
    {
      label: "1",
      R: 271.78,
      d: 17.7292,
      sd: 42,
      medium: 1,
    },
    {
      label: "2",
      R: -227.076,
      d: 8.8392,
      sd: 42,
      medium: 2,
    },
    {
      label: "3",
      R: -1005.84,
      d: 332.74,
      sd: 42,
    },
    {
      label: "4",
      R: 74.6252,
      d: 28.6512,
      sd: 32,
      medium: 3,
    },
    {
      label: "5",
      R: -127.762,
      d: 5.2324,
      sd: 32,
      medium: 4,
    },
    {
      label: "6",
      R: "flat",
      d: 63.477,
      sd: 32,
    },
  ],
  aperture: {
    nominalFNumber: 3.1274,
    fStops: [3.1274, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity only, drawn with the screen side on the left as in patent Figure 1; inch dimensions multiplied by 25.4; printed nD and V retained; 3.20-inch free aperture of the front component; stop plane (1 mm before the first vertex) and rims inferred; back focus computed. Not a factory-identified lens.",
  },
  groups: [],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
