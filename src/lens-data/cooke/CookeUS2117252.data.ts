import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 2,117,252 A (Horace William Lee, assigned to Kapella Limited, granted 10 May 1938), Example I, Figure 1: an f/2
 * objective of six spherical elements in four groups, printed on specification page 1. The patent gives three
 * examples of unit equivalent focal length; this file uses Example I only.
 *
 * Every printed radius, thickness and separation is multiplied by 100, with no further scaling or fitting. The printed
 * prescription then traces to a paraxial focal length of 100.59 mm (Examples II and III trace to 100.75 mm, so the
 * patent's "1.0" is a round figure for all three). Indices and Abbe numbers are the patent's sodium D-line nD and V
 * values; the Chance Brothers type numbers it prints are kept in the glass labels and are not matched to a modern
 * catalogue glass, so colour is estimated from nD and V alone.
 *
 * As printed, Example I is spherically under-corrected: the f/2 marginal ray focuses 0.775 mm short of the paraxial
 * focus at this scale, against +0.06 mm and +0.08 mm for Examples II and III. Rounding of the table does not explain
 * the difference and no single misprinted value was found, so the printed numbers are kept unchanged.
 *
 * Inferred, not printed: the iris, placed at the middle of the 20 mm air space S2 (the figure draws no diaphragm),
 * and the 65.773 mm back focus, the computed paraxial image distance for an object at infinity. The patent prints no
 * back focus, field angle, image size or close-focus data.
 *
 * SEMI-DIAMETERS: estimated from Figure 1, which is drawn to scale (about 7.95 px/mm at 300 dpi, checked on the
 * vertex spacings and on the sags of R5 and R8), and floor-checked by real-ray trace at f/2. The front cemented pair
 * (24.6) and the clear radius of R6 (17.5, where the figure draws a chamfer to the rear pair's flat top) follow the
 * figure; R5 (20) agrees with it. The figure draws L1 at about 26.9, the rear pair at about 19.0 and L6 at about
 * 18.4. L1 (29) is kept, within the measurement margin; R7/R8 (22) and L6 (23.5) stay larger than drawn because
 * the figure values would cut corner illumination by up to 29 points at the 12.2 degree field edge of the
 * illumination curve. R7/R8 are also near the 22.2 mm limit set by L5's edge thickness.
 */
const LENS_DATA = {
  schema: 2,
  key: "cooke-100mm-f2-us2117252",
  maker: "Cooke",
  name: "COOKE 100mm f/2 (US 2,117,252 Design)",
  subtitle: "US 2,117,252 A, Example I — H. W. Lee f/2 objective",
  visible: false,
  catalog: {
    specs: ["6 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "DESIGN F/2"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: {
      design: 100.59,
    },
    fNumber: {
      design: 2,
    },
  },
  source: {
    patentNumber: "US 2,117,252 A",
    example: {
      label: "Example I",
      id: "1",
    },
    patentYear: 1938,
    authors: ["Horace William Lee"],
    assignees: ["Kapella Limited"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.61,
      vd: 53.3,
      indexReference: "D",
      focalLengthMm: 137.39,
      glass: "Unmatched (Chance type 610533, nD 1.61 / V 53.3)",
      role: "Front positive meniscus",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6234,
      vd: 56.2,
      indexReference: "D",
      focalLengthMm: 76.56,
      glass: "Unmatched (Chance type 623562, nD 1.6234 / V 56.2)",
      role: "Positive crown of the front cemented meniscus",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6083,
      vd: 39.6,
      indexReference: "D",
      focalLengthMm: -45.91,
      glass: "Unmatched (Chance type 608396, nD 1.6083 / V 39.6)",
      role: "Negative flint of the front cemented meniscus",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6054,
      vd: 38,
      indexReference: "D",
      focalLengthMm: -28.84,
      glass: "Unmatched (Chance type 605380, nD 1.6054 / V 38.0)",
      role: "Negative flint of the rear cemented meniscus",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6209,
      vd: 57.2,
      indexReference: "D",
      focalLengthMm: 35.46,
      glass: "Unmatched (Chance type 621572, nD 1.6209 / V 57.2)",
      role: "Positive crown of the rear cemented meniscus",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6234,
      vd: 56.2,
      indexReference: "D",
      focalLengthMm: 106.67,
      glass: "Unmatched (Chance type 623562, nD 1.6234 / V 56.2)",
      role: "Rear biconvex positive element",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 64.4,
      d: 8,
      sd: 29,
      medium: 1,
    },
    {
      label: "2",
      R: 265,
      d: 0.5,
      sd: 29,
    },
    {
      label: "3",
      R: 40.4,
      d: 14.6,
      sd: 24.6,
      medium: 2,
    },
    {
      label: "4",
      R: 226.7,
      d: 4,
      sd: 24.6,
      medium: 3,
    },
    {
      label: "5",
      R: 24.7,
      d: 10,
      sd: 20,
    },
    {
      label: "STO",
      R: "flat",
      d: 10,
    },
    {
      label: "6",
      R: -28.9,
      d: 4,
      sd: 17.5,
      medium: 4,
    },
    {
      label: "7",
      R: 46.4,
      d: 13,
      sd: 22,
      medium: 5,
    },
    {
      label: "8",
      R: -37.4,
      d: 0.5,
      sd: 22,
    },
    {
      label: "9",
      R: 178.9,
      d: 8.1,
      sd: 23.5,
      medium: 6,
    },
    {
      label: "10",
      R: -104,
      d: 65.77349297099042,
      sd: 23.5,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [],
  doublets: [
    {
      text: "C1",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "C2",
      fromSurface: "6",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
