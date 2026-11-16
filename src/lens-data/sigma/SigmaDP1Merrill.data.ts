/**
 * JP 2013-137377 A (Yamazaki, Sigma), Example 4, associated with the SIGMA 19mm F2.8 lens of the DP1 Merrill (2012).
 * The association rests on construction (nine elements in eight groups, a very low-dispersion second element, a
 * high-index front element, aspheres on elements 6 and 9), focal length, aperture, field and timing; Examples 3 and 7
 * of the same patent are close alternatives. This is a patent design, not a confirmed factory prescription.
 * Scale: none. The example is printed at f = 18.82 mm, F2.89 (computed EFL 18.821 mm).
 * Printed: R, d, d-line n and Abbe number for surfaces 1-20; aspheres on S12 and S17 (K = 0, A4-A10, standard form
 * with (1 + K)); f, F-number, 2ω = 75.18°, image height 14.20 mm, length 46.98 mm including the filter; group focal
 * lengths 11.71 and -26.50 mm. The filter (S19-S20, 1.20 mm, nd 1.52301, νd 58.59) is a rear plate with its printed
 * 1.00 mm and 4.9327 mm gaps; the paraxial back focus is 0.0001 mm shorter than the printed image gap.
 * Stop: printed as surface 5, 6.10 mm behind S4 and 2.20 mm ahead of S6. Its radius (3.410 mm) is set from F2.89.
 * Semi-diameters are estimated from Fig. 10 (PDF p. 25), none is printed, and checked by real-ray trace. The figure
 * is drawn taller than it is long: at 400 dpi the axial scale is 15.23 px/mm (S1 to S18, 607 px for 39.85 mm) and the
 * height scale 17.0 px/mm, from the image-plane line (242 px for the printed 14.20 mm) and arc fits to S4, S7 and the
 * S17 asphere. Read at that height scale, the elements end at: G1 10.8 mm, G2 8.2 mm, the cemented pair 6.1 mm,
 * G5 7.4 mm, G6 8.1 mm, G7 8.3 mm, G8 10.1 mm and G9 12.9 mm. Fig. 10 draws flat lands behind G1 (S2 clear to
 * 8.9 mm), behind G2 (S4 clear to 5.2 mm, the rim-slope limit of R 5.79), behind G7 (S14 clear to 7.8 mm) and in
 * front of G8 (S15 clear to 8.3 mm, where it meets G7's corner). The cemented pair's 6.1 mm rims sit at the
 * rim-slope limit of the S7 junction (R -6.84). S14's land and S15 come within 0.30 mm at 8.3 mm without crossing;
 * checks.gapSagFrac 0.96 is the smallest two-decimal value that admits them.
 * Names follow the patent: elements G1-G9, groups L1 (G1-G6 with the stop) and L2 (G7-G9).
 * Focus: the patent moves the first group (elements 1-6 and the stop) toward the object, but prints the infinity
 * state only, so no gap varies. Sigma's 0.2 m minimum focus is not modeled.
 */
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "sigma-dp1m-19f28",
  maker: "Sigma",
  name: "SIGMA 19mm f/2.8 (Sigma DP1 Merrill)",
  subtitle: "JP 2013-137377 A, Example 4 — probable match to the 2012 DP1 Merrill lens",
  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "aps-c",
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: {
      marketing: 19,
      design: 18.82,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.89,
    },
    closeFocusM: {
      marketing: 0.2,
    },
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "DESIGN f = 18.82 mm",
      "DESIGN F/2.89",
      "2 ASPHERICAL SURFACES / 2 ELEMENTS",
      "1 FLD ELEMENT",
    ],
  },
  source: {
    patentNumber: "JP 2013-137377 A",
    example: {
      label: "Example 4",
      id: "4",
    },
    patentYear: 2013,
    authors: ["Atsushi Yamazaki"],
    assignees: ["Sigma Corporation"],
  },
  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 55.74,
      glass: "TAFD30 (HOYA catalog equivalent; production supplier unspecified)",
      role: "High-index positive meniscus, convex to the object; the positive member of the front subgroup ahead of the stop.",
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: -22.44,
      glass: "FCD100 (HOYA catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Sigma lists one FLD element and its 2012 catalog drawing marks this position; the patent prints only nd and νd, so the partial dispersion is the FCD100 catalog value.",
      role: "Very low-dispersion negative meniscus with a deep concave rear face; gives the front subgroup its negative power ahead of the stop.",
    },
    {
      id: 3,
      name: "G3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: 8.32,
      glass: "TAF3 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Thick positive element directly behind the stop, nearly flat in front; its strongly curved rear face is the cemented junction.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "G4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.05,
      focalLengthMm: -10.08,
      glass: "E-FD15 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint negative member of the cemented doublet; balances the color of element 3.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "G5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: 33.3,
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Thin, nearly plano-convex positive element; adds power to the rear subgroup behind the doublet.",
    },
    {
      id: 6,
      name: "G6",
      label: "Element 6",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.77377,
      vd: 47.17,
      focalLengthMm: 22.32,
      glass: "M-TAF401 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Biconvex positive with an aspheric rear face; the last element of the focusing group.",
    },
    {
      id: 7,
      name: "G7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.01,
      focalLengthMm: -34.73,
      glass: "E-F5 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus with a strongly concave rear face; opens the fixed negative rear group.",
    },
    {
      id: 8,
      name: "G8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.54072,
      vd: 47.2,
      focalLengthMm: -41.2,
      glass: "E-FEL2 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus, concave to the object; faces element 7 across the 6.63 mm air space.",
    },
    {
      id: 9,
      name: "G9",
      label: "Element 9",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: 67.63,
      glass: "M-LAC130 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Largest element, biconvex positive with an aspheric front face; ends the fixed rear group ahead of the filter.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 22.61,
      d: 2.83,
      medium: 1,
      sd: 10.8,
    },
    {
      label: "2",
      R: 39.37,
      d: 0.3,
      sd: 8.9,
      rimExtensionSd: 10.8,
    },
    {
      label: "3",
      R: 14.81,
      d: 0.9,
      medium: 2,
      sd: 8.2,
    },
    {
      label: "4",
      R: 5.79,
      d: 6.1,
      sd: 5.2,
      rimExtensionSd: 8.2,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.2,
    },
    {
      label: "6",
      R: 194.0,
      d: 5.8,
      medium: 3,
      sd: 6.1,
    },
    {
      label: "7",
      R: -6.84,
      d: 0.85,
      medium: 4,
      sd: 6.1,
    },
    {
      label: "8",
      R: -245.0,
      d: 1.04,
      sd: 6.1,
    },
    {
      label: "9",
      R: 223.5,
      d: 2.4,
      medium: 5,
      sd: 7.4,
    },
    {
      label: "10",
      R: -28.93,
      d: 0.15,
      sd: 7.4,
    },
    {
      label: "11",
      R: 119.0,
      d: 3.58,
      medium: 6,
      sd: 8.1,
    },
    {
      label: "12A",
      R: -19.94,
      d: 1.0,
      asphere: {
        K: 0.0,
        A4: 6.5673e-5,
        A6: -9.6179e-8,
        A8: 3.4161e-9,
        A10: -1.4931e-11,
      },
      sd: 8.1,
    },
    {
      label: "13",
      R: 31.81,
      d: 0.9,
      medium: 7,
      sd: 8.3,
    },
    {
      label: "14",
      R: 12.5,
      d: 6.63,
      sd: 7.8,
      rimExtensionSd: 8.3,
    },
    {
      label: "15",
      R: -11.38,
      d: 0.9,
      medium: 8,
      sd: 8.3,
      rimExtensionSd: 10.1,
    },
    {
      label: "16",
      R: -23.91,
      d: 0.15,
      sd: 10.1,
    },
    {
      label: "17A",
      R: 90.38,
      d: 4.12,
      medium: 9,
      asphere: {
        K: 0.0,
        A4: 2.6054e-5,
        A6: -1.1769e-7,
        A8: 7.2849e-10,
        A10: -1.009e-12,
      },
      sd: 12.9,
    },
    {
      label: "18",
      R: -95.67,
      d: 1.0,
      sd: 12.9,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "The patent moves the first group (elements 1–6 with the stop) toward the object for close focus, but prints the infinity state only, so the lens is modeled at infinity with no focus movement. Sigma's minimum focus of 0.2 m is not modeled.",
  },
  aperture: {
    nominalFNumber: 2.89,
    fStops: [2.89, 4, 5.6, 8, 11, 16],
    blades: 9,
  },
  rearPlates: [
    {
      label: "F",
      thicknessMm: 1.2,
      nd: 1.52301,
      vd: 58.59,
      glass: "C12 (HOYA catalog equivalent; production supplier unspecified)",
      gapAfterMm: 4.9327,
      source:
        "JP 2013-137377 A Example 4, surfaces 19–20; not a claim of exact retail sensor stack.",
    },
  ],
  groups: [
    {
      text: "L1",
      fromSurface: "1",
      toSurface: "12A",
    },
    {
      text: "L2",
      fromSurface: "13",
      toSurface: "18",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "6",
      toSurface: "8",
    },
  ],
  projection: { kind: "rectilinear", fullFieldDeg: 75.18, maxTraceFieldDeg: 37.59 },
  checks: {
    gapSagFrac: 0.96,
  },
  layout: {
    scFill: 0.55,
    yScFill: 0.38,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
