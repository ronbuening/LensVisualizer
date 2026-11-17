import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 759,537 A, the patent's one numerical example, drawn in Figure 1. Inventor Karl Martin; assignor to Rathenower
 * Optische Industrie-Anstalt vormals Emil Busch A.-G. Filed 3 October 1901, granted 10 May 1904. The patent states an
 * equivalent focal distance of 210, an opening of f/11 at which the system is exactly spherically corrected, and
 * astigmatism corrected over a 68° field. Two separated menisci: a negative flint meniscus of higher index and a
 * positive crown meniscus of lower index, both concave to the object, with the stop in front.
 *
 * SCALE: none. Radii and thicknesses are the printed millimetre values at the stated focal distance; the paraxial EFL
 * is 210.19 mm.
 *
 * GLASS: the table prints nD (sodium D) and nG′ for each glass beside the numbers 0.318 and 0.802 (Schott glasses
 * O. 318 and O. 802 of the period). No Abbe number is printed, so the model carries nD only and traces at a single
 * wavelength; nG′ (1.62386 and 1.50627) is recorded in the analysis.
 *
 * STOP: the table prints Δ/2 = 3.79, half the separation of the two sets in the Figure 2 double objective; in Figure 1
 * the diaphragm stands that distance ahead of the first vertex (the drawing measures about 3.8 mm). The stop radius
 * comes from the stated f/11.
 *
 * SEMI-DIAMETERS: not printed; 12 mm on every surface is an estimate. Figure 1 draws both lenses larger.
 *
 * BACK FOCUS: not printed; the image plane is the computed paraxial D-line back focus, 250.14 mm behind R4.
 */
const LENS_DATA = {
  schema: 2,
  key: "emil-busch-210mm-f11-us759537",
  maker: "Emil Busch",
  name: "EMIL BUSCH 210mm f/11 (US 759,537 Design)",
  subtitle: "1901 DESIGN / 1904 GRANT \u2014 MONOCHROME REFERENCE",
  visible: true,
  catalog: {
    specs: [
      "2 ELEMENTS / 2 GROUPS",
      "PATENT ONLY; NO RETAIL MATCH",
      "ESTIMATED RIMS",
      "INFINITY ONLY"
    ],
    elementCount: 2,
    groupCount: 2,
    focalLengthMm: {
      design: 210.19
    },
    fNumber: {
      design: 11
    }
  },
  source: {
    patentNumber: "US 759,537 A",
    example: {
      label: "Figure 1",
      id: "1"
    },
    patentYear: 1904,
    authors: [
      "Karl Martin"
    ],
    assignees: [
      "Rathenower Optische Industrie-Anstalt vormals Emil Busch A.-G."
    ],
    sdSource: "heuristic"
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6031,
      indexReference: "D",
      indexReferenceNote: "Literal sodium D index; no V supplied. Reference-line-only analysis. Source also gives nG-prime but no C/F dispersion."
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.4967,
      indexReference: "D",
      indexReferenceNote: "Literal sodium D index; no V supplied. Reference-line-only analysis. Source also gives nG-prime but no C/F dispersion."
    }
  ],
  surfaces: [
    {
      label: "STO",
      R: "flat",
      d: 3.79
    },
    {
      label: "1",
      R: -22.36,
      d: 6.15,
      sd: 12,
      medium: 1
    },
    {
      label: "2",
      R: -42.56,
      d: 3.31,
      sd: 12
    },
    {
      label: "3",
      R: -383.35,
      d: 5.73,
      sd: 12,
      medium: 2
    },
    {
      label: "4",
      R: -33.64,
      d: 250.14071037005343,
      sd: 12
    }
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description: "Infinity-only literal Figure 1 patent reference; no exact production identity."
  },
  aperture: {
    nominalFNumber: 11,
    fStops: [
      11,
      16,
      22,
      32
    ],
    maxFNumber: 32
  },
  groups: [],
  doublets: [],
  layout: {
    yScFill: 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
