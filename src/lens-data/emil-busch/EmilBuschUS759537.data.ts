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
 * O. 318 and O. 802 of the period). No Abbe number is printed and no catalogue row matches both printed indices, so
 * the glass labels stay unmatched, the model carries nD only and traces at a single wavelength; nG′ (1.62386 and
 * 1.50627) is kept in the glass labels and the analysis.
 *
 * STOP: the table prints Δ/2 = 3.79, half the separation of the two sets in the Figure 2 double objective; in Figure 1
 * the diaphragm stands that distance ahead of the first vertex (the drawing measures about 3.8 mm). The stop radius
 * comes from the stated f/11.
 *
 * SEMI-DIAMETERS: not printed; measured from Figure 1 at 31.9 px/mm (1200 dpi), a scale set by the two lens
 * thicknesses and confirmed by the drawn stop opening (9.6 mm against f/11's 9.55 mm). R1's concave face ends at
 * 10 mm and a flat front land continues to the 14.4 mm edge (`rimExtensionSd`); R2 runs to that edge. L2 is
 * square-cut at 16 mm. The f/11 axial beam passes every rim, and the chief ray clears every rim to 55° off axis.
 *
 * BACK FOCUS: not printed; the image plane is the computed paraxial D-line back focus, 250.14 mm behind R4.
 *
 * IMAGE CIRCLE: 283 mm, the stated 68° field at the printed focal distance of 210 (2 × 210 × tan 34°). No plate size is
 * printed, so `imageFormat` stays unset.
 */
const LENS_DATA = {
  schema: 2,
  key: "emil-busch-210mm-f11-us759537",
  maker: "Emil Busch",
  name: "EMIL BUSCH 210mm f/11 (US 759,537 Design)",
  subtitle: "US 759,537 A, Figure 1 \u2014 Busch Omnar-type anastigmat",
  visible: true,
  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageCircleMm: 283,
    specs: [
      "2 ELEMENTS / 2 GROUPS",
      "DESIGN f = 210 mm",
      "DESIGN F/11",
      "ALL SPHERICAL",
      "68° FIELD"
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
    sdSource: "figure-measured"
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6031,
      indexReference: "D",
      indexReferenceNote: "Sodium D index as printed. The patent gives nG′ but no Abbe number, so this element traces at the D line only.",
      glass: "Unmatched (Schott O. 318; nD 1.6031, nG′ 1.62386, no Abbe number printed)",
      role: "Thick flint meniscus behind the stop; its deep concave front flattens the field and corrects astigmatism"
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.4967,
      indexReference: "D",
      indexReferenceNote: "Sodium D index as printed. The patent gives nG′ but no Abbe number, so this element traces at the D line only.",
      glass: "Unmatched (Schott O. 802; nD 1.4967, nG′ 1.50627, no Abbe number printed)",
      role: "Crown meniscus that carries all of the positive power"
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
      sd: 10,
      rimExtensionSd: 14.4,
      medium: 1
    },
    {
      label: "2",
      R: -42.56,
      d: 3.31,
      sd: 14.4
    },
    {
      label: "3",
      R: -383.35,
      d: 5.73,
      sd: 16,
      medium: 2
    },
    {
      label: "4",
      R: -33.64,
      d: 250.14071037005343,
      sd: 16
    }
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data."
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
