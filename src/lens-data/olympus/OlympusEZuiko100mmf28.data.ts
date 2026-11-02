import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * OLYMPUS E.ZUIKO AUTO-T 100mm f/2.8
 *
 * Source: US 3,749,478 (Nakagawa, Nakamura; Olympus Optical Co., Ltd.), Example 2, repeated in claim 3. This is a
 * patent design associated with the production lens, not a confirmed factory prescription.
 *
 * Scale: the patent is normalized to f = 1.0. Every R and printed d is multiplied by exactly 100 with no retuning, so
 * the computed EFL is 100.047 mm. n and v are the printed values. The patent prints plain n, and all five pairs match
 * catalog nd/vd, so n is read at the d line.
 *
 * Derived, not printed: the back focus. S10 d is the paraxial infinity value, 42.869 mm, which puts the image plane
 * 92.839 mm from S1.
 *
 * Stop: the patent marks none. Fig. 3b's astigmatism curves place it 30.4 mm from S1, 8.76 mm behind S8, and Olympus's
 * section drawing shows the break in the axis about there. Printed d8 = 25.78 mm is split 8.76 + 17.02 mm. The iris
 * radius follows from the paraxial EPD at f/2.8.
 *
 * Semi-diameters: none are printed, and no drawing of Example 2 exists in the patent: Fig. 1 is drawn at Example 1's
 * spacing. Olympus's section drawing, at Example 2's spacing, is the shape reference. L1 to L3 are 1.10 times the
 * paraxial axial marginal height at f/2.8, rounded up to 0.01 mm and shared by both faces, and agree with that
 * drawing within its noise. L4 (14.5 mm) and L5 (13.3 mm) are read from it at 10.16 px/mm, a scale its 45° chamfers
 * confirm across the axis, square-cut like the drawing, and floor-checked by real-ray trace. S8's flat land at 3.46 mm
 * is inferred: the drawing ends the cap at about 10.7 mm, and the wide-open beams keep it out to 11.12 mm.
 *
 * Focus: static at infinity. The patent gives no focus motion or close state; 1 m is Olympus's catalog figure.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-e-zuiko-auto-t-100mm-f28",
  maker: "Olympus",
  name: "OLYMPUS E.ZUIKO AUTO-T 100mm f/2.8",
  subtitle: "US 3,749,478, Example 2 — five-singlet telephoto associated with the production lens",
  visible: true,
  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    specs: [
      "5 ELEMENTS / 5 GROUPS",
      "DESIGN f = 100 mm",
      "DESIGN F/2.8",
      "ALL SPHERICAL",
      "PATENT f = 1 SCALED × 100",
    ],
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: {
      marketing: 100,
      design: 100,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
  },
  source: {
    patentNumber: "US 3,749,478",
    example: {
      label: "Example 2",
      id: "2",
    },
    patentYear: 1973,
    authors: ["Jihei Nakagawa", "Sumio Nakamura"],
    assignees: ["Olympus Optical Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.11,
      indexReference: "d",
      focalLengthMm: 81.54926370413664,
      glass: "S-BAL35 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Front positive meniscus, the strongest of the three collector elements",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.56873,
      vd: 63.16,
      indexReference: "d",
      focalLengthMm: 147.22221465471762,
      glass: "BAL22 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Second positive meniscus of the front collector, in the lowest-dispersion glass",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.70154,
      vd: 41.1,
      indexReference: "d",
      focalLengthMm: 198.6514566165605,
      glass: "BASF7 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Thick, weak positive meniscus closing the collector; its low Abbe number aids color correction",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 26.22,
      indexReference: "d",
      focalLengthMm: -33.40129153305743,
      glass: "PBH23 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Strong negative meniscus behind the collector, giving the telephoto action",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 26.22,
      indexReference: "d",
      focalLengthMm: 127.99034219283872,
      glass: "PBH23 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Thin rear positive meniscus across the long air space",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 40.11,
      d: 4.72,
      sd: 19.66,
      medium: 1,
    },
    {
      label: "2",
      R: 232.31,
      d: 0.42,
      sd: 19.66,
    },
    {
      label: "3",
      R: 32.13,
      d: 3.36,
      sd: 18.7,
      medium: 2,
    },
    {
      label: "4",
      R: 50.16,
      d: 0.25,
      sd: 18.7,
    },
    {
      label: "5",
      R: 34.06,
      d: 6.39,
      sd: 17.38,
      medium: 3,
    },
    {
      label: "6",
      R: 41.59,
      d: 2.61,
      sd: 17.38,
    },
    {
      label: "7",
      R: 84.5,
      d: 3.89,
      sd: 14.5,
      medium: 4,
    },
    {
      label: "8",
      R: 19.6,
      d: 8.76,
      sd: 14.5,
      rimCutDepthMm: 3.46,
    },
    {
      label: "STO",
      R: "flat",
      d: 17.02,
    },
    {
      label: "9",
      R: 64.86,
      d: 2.55,
      sd: 13.3,
      medium: 5,
    },
    {
      label: "10",
      R: 179.95,
      d: 42.86911164332392,
      sd: 13.3,
    },
  ],
  focus: {
    closeFocusM: 1,
    description:
      "Static at infinity. The patent gives no focus motion or close state, so the model carries none. Olympus's catalog gives a 1 m minimum focus and an automatic correction mechanism for close distances, which the model does not include.",
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  layout: {
    yScFill: 0.3,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
