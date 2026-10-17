import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Sigma 35mm F1.4 DG HSM | Art (A012)
 *
 * Data source: JP 2014-048488 A, Numerical Example 4 (Sigma Corporation / Shiota).
 * Fast full-frame retrofocus wide-angle lens with floating inner focus.
 * 13 elements / 11 groups, 2 aspherical surfaces.
 *
 * The patent prescription is left at its published scale: f = 35.16 mm, F1.45.
 * The production catalog designation is 35 mm F1.4.
 *
 * Semi-diameters are inferred. The patent gives no clear-aperture table, so SDs were
 * selected from a paraxial marginal/chief-ray envelope and then constrained by rim
 * slope, positive edge thickness, element front/rear SD ratio, and cross-gap sag
 * clearance. The full off-axis field is intentionally conservative because the
 * published prescription vignettes at the outer field and the clear apertures are
 * not patent-listed.
 */
const LENS_DATA = {
  schema: 2,
  key: "sigma-35mm-f14-dg-hsm-a",
  maker: "Sigma",
  name: "SIGMA 35mm f/1.4 DG HSM | Art",
  subtitle: "JP 2014-048488 A — Numerical Example 4",

  catalog: {
    lensMounts: ["l-mount", "sony-fe", "sigma-sa", "canon-ef", "nikon-f", "pentax-k", "sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "13 elements / 11 groups",
      "f = 35.16 mm design",
      "F1.45 design / F1.4 marketed",
      "2ω = 63.79° patent",
      "2 aspherical surfaces",
      "Floating inner focus",
    ],
    elementCount: 13,
    groupCount: 11,
    focalLengthMm: { marketing: 35, design: 35.16 },
    fNumber: { marketing: 1.4, design: 1.45 },
  },

  source: {
    patentNumber: "JP 2014-048488 A",
    patentYear: 2014,
    authors: ["Ryo Shioda"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.58913,
      vd: 61.25,
      focalLengthMm: -73.9,
      glass: "M-BACD5N (Hoya)",
      role: "Large front negative meniscus; aspherical object-side surface controls the wide retrofocus entrance bundle.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: -91.9,
      glass: "FCD100 (Hoya, FLD-class)",
      role: "Very-low-dispersion negative element in the fixed front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 70.7,
      glass: "TAFD55-W (Hoya)",
      role: "High-index positive in the front group; contributes compact positive power with moderated curvature.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      focalLengthMm: -49.2,
      glass: "E-FD10 (Hoya)",
      role: "Dense-flint negative element in the fixed front group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 51.5,
      glass: "FCD505 (Hoya, SLD-class)",
      role: "Low-dispersion positive rear element of G1.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 48.7,
      glass: "TAFD55-W (Hoya)",
      role: "Leading positive element of G2; bends the axial marginal ray back toward the stop.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.60625,
      vd: 63.71,
      focalLengthMm: 50.4,
      glass: "LBC3N (Hoya)",
      role: "Low-dispersion positive component of the G2 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.61293,
      vd: 36.96,
      focalLengthMm: -34.1,
      glass: "E-F3 (Hoya)",
      role: "Negative flint component of the G2 cemented doublet; the doublet is net negative.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      focalLengthMm: -24.0,
      glass: "E-FD10 (Hoya)",
      role: "Most object-side negative element of G3, corresponding to the patent's L3A element.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 70.0,
      glass: "FCD505 (Hoya, SLD-class)",
      role: "Low-dispersion positive component cemented behind the L3A negative element.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 50.0,
      glass: "FCD505 (Hoya, SLD-class)",
      role: "Low-dispersion positive element supplying part of G3's split positive power.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: -53.9,
      glass: "M-LAC130 (Hoya)",
      role: "Biconcave negative element in G3; object-side asphere and rear air-lens gap help control off-axis aberrations.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: 29.3,
      glass: "TAF3D (Hoya)",
      role: "High-index rear positive element closing the retrofocus design.",
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 51.8624,
      d: 2.5,
      sd: 21.0,
      medium: 1,
      asphere: { K: 0, A4: 1.81501e-6, A6: 1.05655e-9, A8: -1.63693e-14, A10: 0, A12: 0 },
    },
    { label: "2", R: 23.248, d: 14.0665, sd: 19.8 },
    { label: "3", R: -125.4639, d: 1.5, sd: 19.8, medium: 2 },
    { label: "4", R: 59.2477, d: 2.7352, sd: 20.4 },
    { label: "5", R: 177.4138, d: 4.2614, sd: 20.4, medium: 3 },
    { label: "6", R: -116.3349, d: 3.9519, sd: 19.5 },
    { label: "7", R: -39.4375, d: 1.3, sd: 19.5, medium: 4 },
    { label: "8", R: 398.8043, d: 0.2712, sd: 20.5 },
    { label: "9", R: 73.1654, d: 8.8625, sd: 21.5, medium: 5 },
    { label: "10", R: -50.0498, sd: 21.5 },

    { label: "11", R: 54.2107, d: 6.0539, sd: 21.5, medium: 6 },
    { label: "12", R: -452.3459, d: 0.15, sd: 21.5 },
    { label: "13", R: 111.4174, d: 8.6383, sd: 21.0, medium: 7 },
    { label: "14", R: -40.865, d: 1.5, sd: 17.5, medium: 8 },
    { label: "15", R: 43.2524, sd: 17.5 },

    { label: "STO", R: "flat", d: 5.6552 },

    { label: "17", R: -28.6526, d: 1.25, sd: 15.5, medium: 9 },
    { label: "18", R: 45.5318, d: 4.3091, sd: 16.0, medium: 10 },
    { label: "19", R: -454.5267, d: 0.15, sd: 17.0 },
    { label: "20", R: 70.0035, d: 6.3705, sd: 17.5, medium: 11 },
    { label: "21", R: -49.6679, d: 0.15, sd: 17.5 },
    {
      label: "22A",
      R: -186.504,
      d: 1.1,
      sd: 17.0,
      medium: 12,
      asphere: { K: 0, A4: -8.88489e-6, A6: -1.53763e-9, A8: 2.41639e-12, A10: 0, A12: 0 },
    },
    { label: "23", R: 46.8561, d: 0.3229, sd: 17.0 },
    { label: "24", R: 51.204, d: 7.4393, sd: 17.3, medium: 13 },
    { label: "25", R: -40.7915, sd: 17.3 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "Floating inner focus: G2 and G3 advance toward the object on separate trajectories; the aperture stop moves with G3.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    "10": { label: "d10", values: [[7.5458, 1.0]] },
    "15": { label: "d15", values: [[6.7163, 5.4213]] },
    "25": { label: "BF", values: [[39.205, 47.0458]] },
  },

  aperture: {
    nominalFNumber: 1.45,
    fStops: [1.45, 1.8, 2, 2.5, 2.8, 3.5, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
    blades: 9,
  },

  groups: [
    { text: "G1", fromSurface: "1A", toSurface: "10" },
    { text: "G2", fromSurface: "11", toSurface: "15" },
    { text: "G3", fromSurface: "17", toSurface: "25" },
  ],
  doublets: [
    { text: "D1", fromSurface: "13", toSurface: "15" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
  ],

  layout: { scFill: 0.56, yScFill: 0.58 },

  rays: { offAxisFieldFrac: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
