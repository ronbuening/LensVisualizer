import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,154,509 (Takahashi, Asahi Kogaku Kogyo), sole example, associated with the SMC Pentax-M 40mm f/2.8.
 * The association rests on construction, focal length, aperture and field; this is a patent design, not a
 * confirmed factory prescription.
 *
 * Scale: the patent is normalized to F = 100. Every printed R and d is multiplied by exactly 0.4 for f = 40.0 mm.
 * Printed: R, d, d-line n, Abbe number, F/2.8, half-field 28 degrees, back focus 91.90 (36.760 mm here).
 * Image plane: the final gap keeps the printed back focus, which is the paraxial focus (computed 36.7637 mm).
 * It is not moved to best axial focus, which lies about 0.12 mm in front of it because of the spherical aberration
 * plotted in Fig. 2.
 * Stop: the patent neither prints nor draws one. The printed d4 of 2.572 mm is split 0.643 + 1.929 mm, placing the
 * stop 9.039 mm behind S1 in the air between L2 and L3. Fig. 2 points to a chief-ray crossing inside L2, about 7 mm
 * behind S1, where no iris can sit. The stop radius follows the paraxial entrance pupil, F/N.
 * Semi-diameters are inferred, none is printed. Fig. 1 at its axial scale reads L1 7.5, L2 6.65, L3-L4 7.2 and L5
 * 8.0 mm, and each element keeps one rim, floor-checked by real-ray trace: L2 and L3-L4 clear the axial beam by about
 * 7 %. L5 is the tallest element in Fig. 1 and in Pentax's catalog drawing. L2 stops at 6.7 mm, where the S4 rim meets
 * the stop plane. L1 stays above the figure, at 7.7 mm, because a lower rim costs corner illumination.
 * Focus: the patent prints the infinity state only, so no gap varies; closeFocusM is the retail minimum focus.
 */

const LENS_DATA = {
  schema: 2,
  key: "pentax-m-40mm-f28",
  maker: "Pentax",
  name: "PENTAX SMC M 40mm f/2.8",
  subtitle: "US 4,154,509, sole example \u2014 miniaturized semi-wide-angle lens",
  visible: true,
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 4 GROUPS", "DESIGN f = 40 mm", "DESIGN F/2.8", "ALL SPHERICAL", "PATENT f = 100 SCALED × 0.4"],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      marketing: 40,
      design: 40,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
  },
  source: {
    patentNumber: "US 4,154,509",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1979,
    authors: ["Yasuo Takahashi"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 41,
      indexReference: "d",
      focalLengthMm: 28.05,
      glass: "TAFD30 (HOYA catalog equivalent; production supplier unspecified)",
      role: "High-index positive front element, stronger curve toward the object; the main collector.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.1,
      indexReference: "d",
      focalLengthMm: -19.17,
      glass: "PBM28 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Strong negative flint; offsets L1 to set the Petzval sum and color correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      focalLengthMm: -31.97,
      glass: "SF15 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Negative flint member of the cemented doublet behind the stop.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.8,
      indexReference: "d",
      focalLengthMm: 22.36,
      glass: "TAF5 (HOYA coordinate equivalent; patent νd 46.8 versus catalog 46.6)",
      role: "High-index positive member of the cemented doublet; carries most of the rear power.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      focalLengthMm: 50,
      glass: "S-LAH65 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Thin positive meniscus, concave to the object; the tallest element, closing the rear group.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 30.628,
      d: 4.064,
      sd: 7.7,
      medium: 1,
    },
    {
      label: "2",
      R: -121.36,
      d: 2.696,
      sd: 7.7,
    },
    {
      label: "3",
      R: -21.528,
      d: 1.636,
      sd: 6.7,
      medium: 2,
    },
    {
      label: "4",
      R: 35.224,
      d: 0.643,
      sd: 6.7,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.929,
    },
    {
      label: "5",
      R: -25.78,
      d: 0.964,
      sd: 7.3,
      medium: 3,
    },
    {
      label: "6",
      R: 170.196,
      d: 2.888,
      sd: 7.3,
      medium: 4,
    },
    {
      label: "7",
      R: -20.276,
      d: 0.096,
      sd: 7.3,
    },
    {
      label: "8",
      R: -85.028,
      d: 1.732,
      sd: 8,
      medium: 5,
    },
    {
      label: "9",
      R: -27.544,
      d: 36.76,
      sd: 8,
    },
  ],
  focus: {
    closeFocusM: 0.6,
    description:
      "The patent prints the infinity state only, so the lens is modeled at infinity with no focus movement; 0.6 m is the retail minimum focus.",
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 56,
    maxTraceFieldDeg: 28,
  },
  doublets: [
    {
      text: "C1",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
