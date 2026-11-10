/**
 * JP S38-11587 B (Minolta Camera Co., Ltd.; inventor Yoshiya Matsui; filed 1956-07-31, published 1963-07-08),
 * sole numerical example: a six-element, five-group all-spherical Gauss objective, F = 1.0, 1:1.8, 2ω = 46°.
 *
 * Scale: the patent normalizes the focal length to F = 1.0. Every R and d here is the printed value ×50, a uniform
 * scale chosen for the 5cm production lens (not printed in millimetres and not fitted to the traced EFL), which
 * traces to EFL 50.0059 mm. The patent's Fig. 2 plots its aberrations for f = 100 mm.
 *
 * Glass: the patent prints nd and νd (d line) for each element. Five elements carry exact catalog equivalents
 * (production supplier unspecified); L4 (nd 1.5749, νd 39.2) has no exact catalog row and keeps its printed values.
 *
 * Stop: the patent puts the diaphragm in the air space t6 (0.2017 F) without a split and prints the entrance pupil
 * at P1 = 0.5419 F behind the first surface. The stop sits at the paraxial image of that pupil through S1–S6:
 * 5.2989 mm behind S6 and 4.7861 mm ahead of S7, which together equal the scaled t6. The patent's Seidel
 * coefficient table recomputes with this pupil. The stop radius is derived from F/1.8.
 *
 * Image distance: the last d is the derived paraxial infinity back focus (29.6091 mm); the patent does not print it.
 *
 * Semi-diameters: measured on Fig. 1 (352 dpi, 23.63 px per mm at this scale from the vertex spacing; outer rims
 * within 1 % of the drawing, the S6 and S7 cap ends within 5 %), not published dimensions, and floor-checked by
 * real-ray trace at f/1.8. The flat rim extensions on S6 and S7 stand in for the slanted chamfers drawn there.
 *
 * Field: the model uses the patent's 2ω = 46°, which at 50 mm reaches a 21.1 mm image height; the 24 × 36 mm
 * corner (23.5°) is not blocked by any rim.
 *
 * Identity: probable correlation with the Minolta (Chiyoda Kogaku) Super Rokkor 5cm f/1.8 of May 1958 (Leica thread
 * mount; an optically identical Super A version), which shares the 6/5 layout; the 46° field fits a 51 mm lens on
 * 24 × 36 mm, and the 29.6 mm back focus clears the 28.8 mm thread-mount flange. The Auto Rokkor-PF 55mm f/1.8 SLR
 * lens has the same layout, but at 55 mm this example's back focus would put the rear vertex 10.9 mm inside the SR
 * flange. No source names a designer or patent for either product, and a 6/5 Gauss is a common layout, so the
 * match is not a confirmed factory prescription.
 *
 * Source inconsistencies: the index condition is printed three ways (n5 − n4 > 0.0065 on p. 1, n5 − n4 > 0.065 on
 * p. 2, n5 − n5 > 0.065 in the claim); the example's n5 − n4 = 0.0918 meets both numerical forms. The Seidel table
 * misprints surface 7 (I and the sign of II); the prescription itself is consistent. Infinity focus only.
 */
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "minolta-super-rokkor-5cm-f18",
  maker: "Minolta",
  name: "MINOLTA SUPER ROKKOR 5cm f/1.8",
  subtitle: "JP S38-11587 B, sole example — probable correlation with the 1958 Super Rokkor 5cm f/1.8",
  visible: true,
  catalog: {
    lensMounts: ["leica-ltm"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 5 GROUPS", "DESIGN f = 1.0 (SCALED TO 50 mm)", "DESIGN F/1.8", "2ω = 46°", "ALL SPHERICAL"],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      marketing: 50,
      design: 50.0059,
    },
    fNumber: {
      marketing: 1.8,
      design: 1.8,
    },
    closeFocusM: {
      marketing: 1,
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
      focalLengthMm: 70.9517,
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
      focalLengthMm: 44.4429,
      role: "Thick positive meniscus, convex to the object, 0.15 mm behind L1; the stronger of the two front collectors.",
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
      focalLengthMm: -23.6965,
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
      focalLengthMm: -20.472,
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
      focalLengthMm: 22.4358,
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
      focalLengthMm: 48.8115,
      role: "Rear biconvex positive element, weakly curved in front, 0.15 mm behind the doublet; it closes the converging rear of the Gauss.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 37.14,
      d: 5,
      sd: 16.6,
      medium: 1,
    },
    {
      label: "2",
      R: 154.15,
      d: 0.15,
      sd: 16.6,
    },
    {
      label: "3",
      R: 20.49,
      d: 6.68,
      sd: 13.8,
      medium: 2,
    },
    {
      label: "4",
      R: 55.615,
      d: 1.8,
      sd: 13.8,
    },
    {
      label: "5",
      R: 85.48,
      d: 1.5,
      sd: 13.8,
      medium: 3,
    },
    {
      label: "6",
      R: 13.775,
      d: 5.298898,
      sd: 9.3,
      rimExtensionSd: 13.8,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.786102,
    },
    {
      label: "7",
      R: -16.87,
      d: 0.8,
      sd: 8.5,
      medium: 4,
      rimExtensionSd: 10.0,
    },
    {
      label: "8",
      R: 39.6,
      d: 4.685,
      sd: 10.0,
      medium: 5,
    },
    {
      label: "9",
      R: -22.9,
      d: 0.15,
      sd: 10.0,
    },
    {
      label: "10",
      R: 106.65,
      d: 3,
      sd: 11.4,
      medium: 6,
    },
    {
      label: "11",
      R: -46.635,
      d: 29.609079,
      sd: 11.4,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only. The patent prints the prescription for an object at infinity and gives no focusing data, so no near state is modeled; the production lens focuses to 1 m.",
  },
  aperture: {
    nominalFNumber: 1.8,
    fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 10,
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
