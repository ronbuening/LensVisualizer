import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 1,484,853 A (Arthur Warmisham, of Leicester, England; granted 26 February 1924, no assignee printed; filed under
 * Cooke because Warmisham was the designer at Taylor, Taylor & Hobson), the sole numerical example, Figure 1: a Petzval-type projection lens of four spherical elements in two cemented doublets
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
 * the clear semi-diameters, estimated from Figure 1, which is drawn to scale (5.85 px/mm at 600 dpi, checked on the
 * first-to-last vertex span and on the back focus to the film): the rear doublet is square-cut at 39.1 mm as drawn;
 * the front doublet keeps 42 mm, a little above the figure's 39.5 mm, because it must pass the patent's 3.20-inch free
 * aperture (40.64 mm) and the 5 degree pencil behind it; and the back focus, which is the computed paraxial image
 * distance for an object at infinity. The 35 mm cinema format follows from the patent's own statement that its 5 degree
 * field is that of a 5-inch lens on the usual kinematograph film (an object about 22 mm wide); the lens has no iris.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-10in-f31-us1484853",
  maker: "Cooke",
  name: "COOKE 10 in f/3.1 (US 1,484,853 Design)",
  subtitle: "US 1,484,853 A, sole example — Warmisham short-back-focus projection lens",
  visible: true,
  catalog: {
    lensMounts: ["projection-lens"],
    imageFormat: "35mm-cinema",
    specs: [
      "4 ELEMENTS / 2 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 10 in (254 mm)",
      "DESIGN F/3.1",
      "PROJECTION OBJECTIVE",
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
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.509,
      vd: 64.3,
      indexReference: "D",
      focalLengthMm: 246,
      glass: "Unmatched (nD 1.509 / V 64.3, Chance type 646)",
      role: "Biconvex crown of the front cemented doublet",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.651,
      vd: 33.5,
      indexReference: "D",
      focalLengthMm: -452.5,
      glass: "Unmatched (nD 1.651 / V 33.5, Chance type 5093)",
      role: "Meniscus flint of the front cemented doublet",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.509,
      vd: 64.3,
      indexReference: "D",
      focalLengthMm: 97.2,
      glass: "Unmatched (nD 1.509 / V 64.3, Chance type 646)",
      role: "Thick biconvex crown of the rear cemented doublet",
      cemented: "C2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave Negative",
      nd: 1.651,
      vd: 33.5,
      indexReference: "D",
      focalLengthMm: -196.3,
      glass: "Unmatched (nD 1.651 / V 33.5, Chance type 5093)",
      role: "Plano-concave flint of the rear cemented doublet",
      cemented: "C2",
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
      sd: 39.1,
      medium: 3,
    },
    {
      label: "5",
      R: -127.762,
      d: 5.2324,
      sd: 39.1,
      medium: 4,
    },
    {
      label: "6",
      R: "flat",
      d: 63.477,
      sd: 39.1,
    },
  ],
  aperture: {
    nominalFNumber: 3.1274,
    fStops: [3.1274],
    maxFNumber: 3.1274,
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only; the patent gives no close-focus data. The lens is drawn with the screen side on the left, as in patent Figure 1.",
  },
  groups: [],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "C2", fromSurface: "4", toSurface: "6" },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
