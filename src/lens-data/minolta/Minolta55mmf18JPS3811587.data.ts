/**
 * JP S38-11587 B (Minolta Camera Co., Ltd.; inventor Yoshiya Matsui; filed 1956-07-31, published 1963-07-08),
 * sole numerical example: a six-element, five-group all-spherical Gauss objective, F = 1.0, 1:1.8, 2ω = 46°.
 *
 * Scale: the patent normalizes the focal length to F = 1.0. Every R and d here is the printed value ×55, a chosen
 * uniform scale (not printed in millimetres and not fitted to the traced EFL), which traces to EFL 55.0065 mm.
 * The patent's Fig. 2 plots its aberrations for f = 100 mm.
 *
 * Glass: the patent prints nd and νd (d line) for each element. Five elements carry exact catalog equivalents
 * (production supplier unspecified); L4 (nd 1.5749, νd 39.2) has no exact catalog row and keeps its printed values.
 *
 * Stop: the patent puts the diaphragm in the air space t6 (0.2017 F) without a split and prints the entrance pupil
 * at P1 = 0.5419 F behind the first surface. The stop sits at the paraxial image of that pupil through S1–S6:
 * 5.8288 mm behind S6 and 5.2647 mm ahead of S7, which together equal the scaled t6. The patent's Seidel coefficient table
 * recomputes with this pupil. The stop radius is derived from F/1.8.
 *
 * Image distance: the last d is the derived paraxial infinity back focus (32.5700 mm); the patent does not print it.
 *
 * Semi-diameters: estimated from the proportions of Fig. 1, not published dimensions. The flat rim extensions on
 * S6 and S7 stand in for the chamfered edges drawn there.
 *
 * Field: the model uses the patent's 2ω = 46°; Minolta lists 43° for the Auto Rokkor 55mm f/1.8.
 *
 * Identity: same 6/5 layout as Minolta's 1958 Auto Rokkor-PF 55mm f/1.8 (SR mount) and Super Rokkor 5cm f/1.8
 * (rangefinder). The 46° field and the short back focus fit a 50 mm lens better than a 55 mm SLR lens, so no
 * production lens is assigned and the entry stays hidden.
 *
 * Source inconsistencies: the index condition is printed three ways (n5 − n4 > 0.0065 on p. 1, n5 − n4 > 0.065 on
 * p. 2, n5 − n5 > 0.065 in the claim); the example's n5 − n4 = 0.0918 meets both numerical forms. The Seidel table
 * misprints surface 7 (I and the sign of II); the prescription itself is consistent. Infinity focus only.
 */
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "minolta-55mm-f18-jp-s38-11587",
  maker: "Minolta",
  name: "MINOLTA 55mm f/1.8 (JP S38-11587 Design)",
  subtitle:
    "JP S38-11587 B, sole example — same 6/5 layout as the 1958 Auto Rokkor-PF 55mm f/1.8 and Super Rokkor 5cm f/1.8",
  visible: false,
  catalog: {
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 5 GROUPS", "DESIGN f = 1.0 (SCALED TO 55 mm)", "DESIGN F/1.8", "2ω = 46°", "ALL SPHERICAL"],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      design: 55.0065,
    },
    fNumber: {
      design: 1.8,
    },
  },
  source: {
    patentNumber: "JP S38-11587 B",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1963,
    authors: ["Yoshiya Matsui"],
    assignees: ["Minolta Camera Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.5,
      indexReference: "d",
      glass: "LAC12 (HOYA catalog equivalent; patent 678555; production supplier unspecified)",
      focalLengthMm: 78.04691431299393,
      role: "Front positive meniscus, convex to the object; with L2 it forms the converging front of the Gauss.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.5,
      indexReference: "d",
      glass: "LAC12 (HOYA catalog equivalent; patent 678555; production supplier unspecified)",
      focalLengthMm: 48.88722805194922,
      role: "Thick positive meniscus, convex to the object, 0.165 mm behind L1; the stronger of the two front collectors.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.699,
      vd: 30.1,
      indexReference: "d",
      glass: "SF15 (Sumita catalog equivalent; patent 699301; production supplier unspecified)",
      focalLengthMm: -26.066103467089356,
      role: "Separate negative meniscus ahead of the stop; with the diverging air space in front of it, it takes over part of the correction usually left to the rear cemented surface.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5749,
      vd: 39.2,
      indexReference: "d",
      glass: "Unmatched (patent nd 1.5749, νd 39.2; no exact catalog row; supplier unspecified)",
      focalLengthMm: -22.519187483639865,
      role: "Biconcave negative front element of the cemented doublet behind the stop; the lowest-index glass in the lens.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6667,
      vd: 48.4,
      indexReference: "d",
      glass: "BAF11 (Sumita catalog equivalent; patent 667484; production supplier unspecified)",
      focalLengthMm: 24.679387999999545,
      role: "Biconvex positive rear element of the cemented doublet; the index step of 0.0918 from L4 across the cemented surface is the patent's index condition.",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.67,
      vd: 47.2,
      indexReference: "d",
      glass: "BAF10 (HOYA catalog equivalent; patent 670472; production supplier unspecified)",
      focalLengthMm: 53.69262056523374,
      role: "Rear biconvex positive element, weakly curved in front, 0.165 mm behind the doublet; it closes the converging rear of the Gauss.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 40.854,
      d: 5.5,
      sd: 18.3,
      medium: 1,
    },
    {
      label: "2",
      R: 169.565,
      d: 0.165,
      sd: 18.3,
    },
    {
      label: "3",
      R: 22.539,
      d: 7.348,
      sd: 15.2,
      medium: 2,
    },
    {
      label: "4",
      R: 61.1765,
      d: 1.98,
      sd: 15.2,
    },
    {
      label: "5",
      R: 94.028,
      d: 1.65,
      sd: 15.2,
      medium: 3,
    },
    {
      label: "6",
      R: 15.1525,
      d: 5.828788068586729,
      sd: 10.2,
      rimExtensionSd: 15.2,
    },
    {
      label: "STO",
      R: "flat",
      d: 5.264711931413272,
    },
    {
      label: "7",
      R: -18.557,
      d: 0.88,
      sd: 9.4,
      medium: 4,
      rimExtensionSd: 11.0,
    },
    {
      label: "8",
      R: 43.56,
      d: 5.1535,
      sd: 11.0,
      medium: 5,
    },
    {
      label: "9",
      R: -25.19,
      d: 0.165,
      sd: 11.0,
    },
    {
      label: "10",
      R: 117.315,
      d: 3.3,
      sd: 12.5,
      medium: 6,
    },
    {
      label: "11",
      R: -51.2985,
      d: 32.56998678531684,
      sd: 12.5,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only. The patent prints the prescription for an object at infinity and gives no focusing data, so no near state is modeled.",
  },
  aperture: {
    nominalFNumber: 1.8,
    fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 46,
    maxTraceFieldDeg: 23,
  },
  groups: [],
  doublets: [
    {
      text: "C1",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  layout: {
    scFill: 0.55,
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
