import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,459,468 (Leitz; Marx and Sindel), sole numerical table and drawing; associated
 * with the original 1966 Leitz Noctilux 50 mm f/1.2.
 * The table is normalized to f = 1; all lengths are scaled by 52, the focal length the
 * patent text states, not by the marketed 50 mm.
 * The patent's d is the distance to the preceding surface; the first d = -0.722 locates
 * surface 1 relative to the entrance pupil and is not a thickness.
 * Surfaces 1 and 10 are aspheric by the patent's chord-form law c = Σ c(i)·b^i with
 * b = (y² + c²)/2. The repo has no such surface form, so each is stored as K = -1 plus
 * A4–A20 terms converted (least-squares) from that law over the stored clear radius;
 * the stored sag matches the patent equation to better than 1e-5 µm within sd. The
 * A-terms are derived, not printed.
 * Vertex radii use the printed c(1) coefficients (R1 = 52/0.869, R10 = -52/0.932); the
 * printed rounded radii 1.151 and -1.073 differ slightly (EFL 52.024 vs 52.022 mm).
 * Indices and Abbe numbers are the patent's e-line values. L3 and L6 carry coordinate-equal
 * e-line catalog equivalents (SF56A, S-LAL9); L1, L2, L4 and L5 match no catalog row.
 * The stop is not printed: it is placed where the paraxial entrance pupil falls 0.722
 * (37.544 mm) behind surface 1, splitting the 0.270 gap 8.239 + 5.801 mm. Semi-diameters
 * are not printed and follow the patent drawing's proportions.
 * Back focus is the derived paraxial value. The patent gives the infinity state only.
 */
const LENS_DATA = {
  schema: 2,
  key: "leica-noctilux-50mm-f12",
  maker: "Leica",
  name: "LEITZ NOCTILUX 50mm f/1.2",
  subtitle: "US 3,459,468, sole example — convergent production correlation; not manufacturer-confirmed",
  visible: true,
  catalog: {
    lensMounts: ["leica-m"],
    imageFormat: "135-full-frame",
    elementCount: 6,
    groupCount: 4,
    specs: [
      "6 ELEMENTS / 4 GROUPS",
      "DESIGN f = 52 mm",
      "DESIGN F/1.2",
      "2 ASPHERICAL SURFACES / 2 ELEMENTS",
    ],
    focalLengthMm: {
      marketing: 50,
      design: 52,
    },
    fNumber: {
      marketing: 1.2,
      design: 1.2,
    },
  },
  source: {
    patentNumber: "US 3,459,468",
    example: { label: "Sole example", id: null },
    patentYear: 1969,
    authors: ["Helmut Marx", "Paul Sindel"],
    assignees: ["Ernst Leitz GmbH"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.821,
      vd: 45.2,
      indexReference: "e",
      focalLengthMm: 95.77,
      glass: "Unmatched (ne 1.821 / νe 45.2; no catalog row within the printed precision)",
      role: "Front positive meniscus with an aspheric front surface that contributes negative third-order spherical aberration.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.9,
      vd: 40.5,
      indexReference: "e",
      focalLengthMm: 41.13,
      glass: "Unmatched (ne 1.900 / νe 40.5; no catalog row within the printed precision)",
      role: "Positive front member of the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.792,
      vd: 25.9,
      indexReference: "e",
      focalLengthMm: -26.99,
      glass: "SF56A (SCHOTT catalog equivalent; production supplier unspecified)",
      role: "Negative flint rear member of the front cemented doublet; its strong rear surface faces the stop.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.844,
      vd: 30.0,
      indexReference: "e",
      focalLengthMm: -20.77,
      glass: "Unmatched (ne 1.844 / νe 30.0; no catalog row within the printed precision)",
      role: "Biconcave flint front member of the rear cemented doublet, facing the stop.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.9,
      vd: 40.5,
      indexReference: "e",
      focalLengthMm: 27.09,
      glass: "Unmatched (ne 1.900 / νe 40.5; no catalog row within the printed precision)",
      role: "Positive high-index rear member of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.694,
      vd: 54.6,
      indexReference: "e",
      focalLengthMm: 43.02,
      glass: "S-LAL9 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive rear singlet with an aspheric rear surface, placed as far as possible from the front asphere.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 59.838895281933254,
      d: 6.76,
      sd: 26.5,
      asphere: {
        K: -1,
        A4: 2.491278215068474e-7,
        A6: 5.386433349311271e-11,
        A8: 1.7467281936887108e-14,
        A10: -1.7720512754524765e-16,
        A12: 1.2710259577297182e-19,
        A14: 6.860164493704233e-23,
        A16: 7.905578822247626e-26,
        A18: -4.4680470070056126e-29,
        A20: 2.4463888057791393e-32,
      },
      medium: 1,
    },
    {
      label: "2",
      R: 237.69199999999998,
      d: 0.20800000000000002,
      sd: 26.5,
    },
    {
      label: "3",
      R: 29.9,
      d: 11.752,
      sd: 23.5,
      medium: 2,
    },
    {
      label: "4",
      R: 126.56800000000001,
      d: 2.184,
      sd: 23.5,
      medium: 3,
    },
    {
      label: "5",
      R: 18.148,
      d: 8.239332652321645,
      sd: 14.0,
    },
    {
      label: "STO",
      R: "flat",
      d: 5.800667347678355,
    },
    {
      label: "6",
      R: -23.400000000000002,
      d: 1.612,
      sd: 12.5,
      medium: 4,
    },
    {
      label: "7",
      R: 72.02,
      d: 9.411999999999999,
      sd: 20.4,
      medium: 5,
    },
    {
      label: "8",
      R: -34.58,
      d: 0.052000000000000005,
      sd: 18.8,
    },
    {
      label: "9",
      R: 61.36,
      d: 6.0840000000000005,
      sd: 16.5,
      medium: 6,
    },
    {
      label: "10",
      R: -55.79399141630901,
      d: 27.66826579668996,
      sd: 16.5,
      asphere: {
        K: -1,
        A4: 2.6389345125590922e-6,
        A6: -2.9819312738897584e-9,
        A8: -1.7879539464177868e-12,
        A10: 3.337734723896426e-15,
        A12: 4.570095144958906e-18,
        A14: 1.1266268464888072e-21,
        A16: -5.885360396424883e-25,
        A18: 5.705228564477538e-27,
        A20: -4.938350283725719e-30,
      },
    },
  ],
  focus: {
    closeFocusM: 1,
    description: "Patent infinity state only; the production lens focuses to 1.0 m.",
  },
  aperture: {
    nominalFNumber: 1.2,
    fStops: [1.2, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  layout: {
    yScFill: 0.72,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
