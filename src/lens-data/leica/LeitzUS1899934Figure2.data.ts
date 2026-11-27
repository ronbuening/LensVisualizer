import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,899,934, "Ultralight Intensive Objective", Max Berek, assigned to Ernst Leitz, Optische Werke, G.m.b.H.,
 * Wetzlar. Filed July 20, 1932 (German priority June 6, 1931); granted March 7, 1933. The patent prints two
 * examples, headed by figure: Figure 1 (1:2.0, six elements) and Figure 2 (1:1.3, seven elements). This file
 * transcribes Figure 2 (printed p. 2, left column lines 42-50 and right column lines 51-55).
 *
 * PRESCRIPTION: radii r1-r11 with their printed signs, glass thicknesses d1-d7, air spaces a1-a3, and the printed
 * nD and ν for each element, all exactly as printed. Three cemented pairs: L2/L3 at r4, L4/L5 at r7, L6/L7 at r10,
 * as both the table and the drawing show. Seven elements in four groups.
 *
 * SCALE: none. The patent prints no focal length; the table as printed computes to EFL 99.99 mm, so it is the
 * usual normalisation to f = 100. The claim's conditions (cement-face index step 0.0569, (n' - n)f/r = 0.139,
 * a2/a3 = 0.93, total air 0.26 of the length) all hold at this scale.
 *
 * GLASS: the table heads its index column nD (sodium D line) and prints ν, so the elements use
 * indexReference "D". No partial-dispersion data are printed and the patent names no glass. Two printed pairs
 * equal modern catalogue rows at the D line: L5 1.5673 / 42.8 is OHARA S-TIL26 (nD 1.56721, νD 42.81) and L6
 * 1.5407 / 47.2 is OHARA S-TIL2 (nD 1.54062, νD 47.22), the light-flint LLF2 class. These are catalogue
 * equivalents for the colour trace, not the 1931 melts. The other three pairs match no catalogue row and stay
 * Unmatched.
 *
 * INFERRED: the patent prints no stop position and the drawing shows none. The iris is placed in the air space a3
 * between the negative member and the rear member, a usual iris position in triplet-derived designs of this kind.
 * It sits 10.35 mm behind r8 and 1.684 mm ahead of r9, just behind the drawn rim of L5's concave rear face (that
 * face's sag is 10.34 mm at its 24.4 mm cap edge). The image distance is the computed paraxial back focus,
 * 46.831 mm; the patent prints none. Infinity focus only.
 *
 * SEMI-DIAMETERS: the patent prints no diameters. The values are read from the Figure 2 drawing, floor-checked by
 * real-ray trace. Scale: 16.34 px/mm at 600 dpi from the r1-r11 vertex span; arc fits of r8 and r9 put the
 * vertical scale within 2 % of the axial one.
 *   - L1 (39.5) agrees with the drawing (about 39.2).
 *   - Surfaces 3 and 4 stay at 38, 3.7 % above the doublet's drawn 36.6 flat edge (inside the reading noise). The
 *     f/1.3 axial ray needs 36.3 at surface 3.
 *   - Surface 5 is 34.9, where the drawn rear face ends in a small bevel. rimExtensionSd 38 draws the flange out to
 *     the doublet's flat edge, so C1 renders square-cut as drawn; the land traces nothing.
 *   - Surface 6 is 27.5, where the drawn front face ends in a chamfer (about 27.8).
 *   - Surface 7, the cemented face, is 29.5, the drawn flat edge of the doublet.
 *   - Surface 8 is 24.4, where the drawing ends L5's concave cap. rimExtensionSd 29.5 draws the flange out to the
 *     doublet's flat edge, in place of the drawn bevel; the land traces nothing.
 *   - The rear doublet is drawn square-cut at about 24.6 on all three surfaces.
 */
const LENS_DATA = {
  schema: 2,
  key: "leitz-100mm-f13-us1899934-figure-2",
  maker: "Leica",
  name: "LEITZ 100mm f/1.3 (US 1,899,934 Figure 2 Design)",
  subtitle: "US 1,899,934 A, Figure 2 \u2014 Leitz split-front triplet",
  visible: true,
  catalog: {
    specs: ["7 ELEMENTS / 4 GROUPS", "DESIGN F/1.3", "ALL SPHERICAL", "3 CEMENTED DOUBLETS"],
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: {
      design: 99.99,
    },
    fNumber: {
      design: 1.3,
    },
  },
  source: {
    patentNumber: "US 1,899,934 A",
    example: {
      label: "Figure 2",
      id: "2",
    },
    patentYear: 1933,
    authors: ["Max Berek"],
    assignees: ["Ernst Leitz GmbH"],
    sdSource: "figure-measured",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.624,
      vd: 58.2,
      indexReference: "D",
      focalLengthMm: 207.8,
      glass: "Unmatched (nD 1.6240 / V 58.2)",
      role: "Front positive meniscus, split from the triplet's front member to share the convergence with C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.624,
      vd: 58.2,
      indexReference: "D",
      focalLengthMm: 69.7,
      glass: "Unmatched (nD 1.6240 / V 58.2)",
      role: "Biconvex crown of the front cemented doublet C1",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6219,
      vd: 36.1,
      indexReference: "D",
      focalLengthMm: -130.7,
      glass: "Unmatched (nD 1.6219 / V 36.1)",
      role: "Thin flint of C1; almost index-matched to L2, so its cemented face works mainly on colour",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6242,
      vd: 44.8,
      indexReference: "D",
      focalLengthMm: 98.8,
      glass: "Unmatched (nD 1.6242 / V 44.8)",
      role: "Positive meniscus of the negative member C2; higher-index side of its collective cemented face",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5673,
      vd: 42.8,
      indexReference: "D",
      focalLengthMm: -31.9,
      glass: "S-TIL26 (OHARA catalog equivalent)",
      role: "Strong negative element of C2; its deeply curved rear face faces the iris",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.5407,
      vd: 47.2,
      indexReference: "D",
      focalLengthMm: -971.6,
      glass: "S-TIL2 (OHARA catalog equivalent)",
      role: "Weak negative meniscus at the front of the rear cemented doublet C3",
      cemented: "C3",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.624,
      vd: 58.2,
      indexReference: "D",
      focalLengthMm: 51.1,
      glass: "Unmatched (nD 1.6240 / V 58.2)",
      role: "Biconvex crown of C3 and the strongest positive element; the rear member carries most of the power",
      cemented: "C3",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 93.6,
      d: 8.91,
      sd: 39.5,
      medium: 1,
    },
    {
      label: "2",
      R: 324.07,
      d: 0.4457,
      sd: 39.5,
    },
    {
      label: "3",
      R: 71.315,
      d: 19.611,
      sd: 38,
      medium: 2,
    },
    {
      label: "4",
      R: -99.842,
      d: 5.348,
      sd: 38,
      medium: 3,
    },
    {
      label: "5",
      R: 445.72,
      d: 11.143,
      sd: 34.9,
      rimExtensionSd: 38,
    },
    {
      label: "6",
      R: -108.755,
      d: 10.697,
      sd: 27.5,
      medium: 4,
    },
    {
      label: "7",
      R: -40.828,
      d: 5.349,
      sd: 29.5,
      medium: 5,
    },
    {
      label: "8",
      R: 33.963,
      d: 10.35,
      sd: 24.4,
      rimExtensionSd: 29.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.684,
    },
    {
      label: "9",
      R: 62.846,
      d: 4.457,
      sd: 24.6,
      medium: 6,
    },
    {
      label: "10",
      R: 54.734,
      d: 12.48,
      sd: 24.6,
      medium: 7,
    },
    {
      label: "11",
      R: -69.71,
      d: 46.83135705853188,
      sd: 24.6,
    },
  ],
  aperture: {
    nominalFNumber: 1.3,
    fStops: [1.3, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [],
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "5" },
    { text: "C2", fromSurface: "6", toSurface: "8" },
    { text: "C3", fromSurface: "9", toSurface: "11" },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
