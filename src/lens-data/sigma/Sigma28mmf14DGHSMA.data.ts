import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP2019219472A, Numerical Example5. 17 elements/12 air-separated groups.
 * Six aspheric surfaces on three elements. Native d-line values, scale1.
 * Source-listed LPF is retained physically through rearPlates; d30 is air
 * before the LPF. No t/n fold or marketing rescale is authored.
 * Focus is PUBLISHED at infinity and source d0=1122.9079mm (about1.275m
 * object-to-image). No reconstruction to the production0.28m minimum.
 * Stop position is published. Its radius is derived from the design f-number
 * by exact axial Snell tracing at EFL/(2*1.46), consistent with ordinary
 * current-runtime aperture calibration. The f-number match is calibration,
 * not independent iris data.
 * Semi-diameters are estimated from Figure 21 (Example 5 at infinity) with
 * Sigma's construction diagram as a secondary check, floor-checked by exact
 * d-line real-ray trace at both published focus states and by the
 * edge/rim/shared-gap rules. The figure is drawn at 0.1923 mm/px along the
 * axis (vertex crossings) but 0.186 mm/px in height (drawn curvatures and the
 * stop tick), so the stored rims, first read at the axial scale, stand about
 * 3 % above the drawn heights; that uniform offset is left in place. Surface
 * 10 ends where both drawings end the front face of E6, 19.3 mm. Surfaces 4A
 * and 7 are 20.7 and 20.2 mm, where both drawings end the rear face of E2 and
 * the front face of E4 against E3; gapSagFrac 0.98 is the smallest two-decimal
 * shared-gap limit that admits them (the faces close 0.969 and 0.976 of their
 * gaps and keep 0.23 and 0.09 mm of air at the rim). Surface 2 stops at the
 * shared-gap limit, below the rim the figure draws; 21 ends at the drawn
 * optical extent inside the flat rear annulus of E12.
 * They are not published dimensions; field vignetting remains an inference.
 * Elements are named E1–E17 because the patent reserves L1 and L2 for its two
 * lens groups and names no single element; its L2c is the triplet T1.
 * Glass labels name the coordinate-equal HOYA/OHARA catalog row so each
 * element traces on a vendor curve; they do not identify the factory supplier. E11's source-normal-line anomaly is converted to the
 * current runtime dPgF convention; no individual spectral indices invented.
 * Source condition 9 prints 1.89; the unchanged prescription computes
 * 1.885195, consistent with the printed precision.
 */

const LENS_DATA = {
  schema: 2,
  key: "sigma-28mm-f14-dg-hsm-art",
  maker: "Sigma",
  name: "SIGMA 28mm f/1.4 DG HSM | Art",
  subtitle: "JP 2019-219472 A, Numerical Example 5 — architectural correlation; production prescription unconfirmed",

  catalog: {
    lensMounts: ["sigma-sa", "canon-ef", "nikon-f", "sony-fe", "l-mount"],
    imageFormat: "135-full-frame",
    imageCircleMm: 43.26,
    specs: ["17 ELEMENTS / 12 GROUPS", "DESIGN f = 28.72 mm", "DESIGN F/1.46", "6 ASPHERICAL SURFACES / 3 ELEMENTS"],
    elementCount: 17,
    groupCount: 12,
    focalLengthMm: { marketing: 28, design: 28.72 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "JP 2019-219472 A",
    patentYear: 2019,
    authors: ["Hokuto Usami", "Kenta Fujita"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.76385,
      vd: 48.49,
      indexReference: "d",
      focalLengthMm: -75.520502,
      glass: "S-LAH96 (OHARA coordinate equivalent, 764485; supplier unconfirmed)",
      role: "Front negative meniscus, convex to the object; first element of the fixed group L1.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.59201,
      vd: 67.02,
      indexReference: "d",
      focalLengthMm: -76.562832,
      glass: "M-PCD51 (HOYA coordinate equivalent, 592670; supplier unconfirmed)",
      role: "Double-sided aspheric negative meniscus in the fixed front group.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.95375,
      vd: 32.32,
      indexReference: "d",
      focalLengthMm: 113.482527,
      glass: "TAFD45L (HOYA coordinate equivalent, 954323; supplier unconfirmed)",
      role: "Positive singlet before the first cemented pair.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.437,
      vd: 95.1,
      indexReference: "d",
      focalLengthMm: -67.525478,
      glass: "FCD100 (HOYA coordinate equivalent, 437951; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Low-dispersion fluorophosphate-class coordinate at one of the five positions Sigma's construction diagram colours as FLD or SLD glass; inferred from the glass family, not a patent designation.",
      role: "Negative low-dispersion member of D1.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      indexReference: "d",
      focalLengthMm: 46.994946,
      glass: "TAFD35L (HOYA coordinate equivalent, 911353; supplier unconfirmed)",
      role: "Positive high-index member of D1.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.33,
      indexReference: "d",
      focalLengthMm: -25.066034,
      glass: "S-NBH53V (OHARA coordinate equivalent, 738323; supplier unconfirmed)",
      role: "Negative member of D2.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      indexReference: "d",
      focalLengthMm: 50.119884,
      glass: "FCD515 (HOYA coordinate equivalent, 593686; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Low-dispersion fluorophosphate-class coordinate at one of the five positions Sigma's construction diagram colours as FLD or SLD glass; inferred from the glass family, not a patent designation.",
      role: "Positive low-dispersion member of D2.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      focalLengthMm: 46.337086,
      glass: "TAF3D (HOYA coordinate equivalent, 804465; supplier unconfirmed)",
      role: "Final positive singlet of the fixed front group.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.49,
      indexReference: "d",
      focalLengthMm: 88.018895,
      glass: "S-LAH96 (OHARA coordinate equivalent, 764485; supplier unconfirmed)",
      role: "First positive singlet of the moving rear group.",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.76802,
      vd: 49.24,
      indexReference: "d",
      focalLengthMm: 86.716001,
      glass: "M-TAF101 (HOYA coordinate equivalent, 768492; supplier unconfirmed)",
      role: "Double-sided aspheric positive singlet before D3.",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      indexReference: "d",
      focalLengthMm: 57.941901,
      glass: "E-FDS1-W (HOYA coordinate equivalent, 923209; supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "Patent ΔPgf=0.0283 relative to 0.64833−0.0018νd; absolute PgF=0.639046; runtime dPgF=0.03036616. Individual line indices not published.",
      role: "Positive anomalous-dispersion member of D3, constrained by patent conditions 4–5.",
      cemented: "D3",
      dPgF: 0.03036615999999992,
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.33,
      indexReference: "d",
      focalLengthMm: -28.042623,
      glass: "S-NBH53V (OHARA coordinate equivalent, 738323; supplier unconfirmed)",
      role: "Negative member of D3 immediately before the stop.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.4586,
      vd: 90.2,
      indexReference: "d",
      focalLengthMm: 63.994014,
      glass: "FCD10A (HOYA coordinate equivalent, 459902; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Low-dispersion fluorophosphate-class coordinate at one of the five positions Sigma's construction diagram colours as FLD or SLD glass; inferred from the glass family, not a patent designation.",
      role: "Front positive low-dispersion member of the post-stop cemented triplet, which the patent labels L2c.",
      cemented: "T1",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.33,
      indexReference: "d",
      focalLengthMm: -21.830864,
      glass: "S-NBH53V (OHARA coordinate equivalent, 738323; supplier unconfirmed)",
      role: "Negative middle member of the post-stop triplet.",
      cemented: "T1",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 140.14636,
      glass: "FCD1 (HOYA coordinate equivalent, 497816; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Low-dispersion fluorophosphate-class coordinate at one of the five positions Sigma's construction diagram colours as FLD or SLD glass; inferred from the glass family, not a patent designation.",
      role: "Rear positive low-dispersion member of the post-stop triplet.",
      cemented: "T1",
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      indexReference: "d",
      focalLengthMm: 38.444037,
      glass: "FCD515 (HOYA coordinate equivalent, 593686; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Low-dispersion fluorophosphate-class coordinate at one of the five positions Sigma's construction diagram colours as FLD or SLD glass; inferred from the glass family, not a patent designation.",
      role: "Positive low-dispersion rear singlet.",
    },
    {
      id: 17,
      name: "E17",
      label: "Element 17",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.76802,
      vd: 49.24,
      indexReference: "d",
      focalLengthMm: 113.282052,
      glass: "M-TAF101 (HOYA coordinate equivalent, 768492; supplier unconfirmed)",
      role: "Double-sided aspheric positive rear meniscus.",
    },
  ],

  surfaces: [
    { label: "1", R: 45.9977, d: 1.9, sd: 28.8, medium: 1 },
    { label: "2", R: 25.1338, d: 9.407, sd: 21.4 },
    {
      label: "3A",
      R: 56.5779,
      d: 2.4,
      sd: 23.6,
      medium: 2,
      asphere: { K: 0, A4: -3.9398e-06, A6: 8.2421e-09, A8: -8.6736e-12, A10: 0, A12: 0, A14: 0 },
    },
    {
      label: "4A",
      R: 24.7684,
      d: 7.4494,
      sd: 20.7,
      asphere: { K: -1.0, A4: -4.3891e-06, A6: 1.3317e-09, A8: 8.3525e-12, A10: -5.3271e-14, A12: 3.471e-17, A14: 0 },
    },
    { label: "5", R: 471.3973, d: 3.3291, sd: 21.8, medium: 3 },
    { label: "6", R: -140.0067, d: 3.8048, sd: 21.8 },
    { label: "7", R: -41.9847, d: 1.7, sd: 20.2, medium: 4 },
    { label: "8", R: 100.5258, d: 6.3247, sd: 21.3, medium: 5 },
    { label: "9", R: -72.3098, d: 2.6764, sd: 21.3 },
    { label: "10", R: -44.8985, d: 1.5, sd: 19.3, medium: 6 },
    { label: "11", R: 31.9074, d: 8.8575, sd: 20.6, medium: 7 },
    { label: "12", R: -387.2246, d: 0.25, sd: 20.6 },
    { label: "13", R: 61.526, d: 7.5947, sd: 22, medium: 8 },
    { label: "14", R: -89.3001, sd: 22 },
    { label: "15", R: 72.1665, d: 4.2559, sd: 21, medium: 9 },
    { label: "16", R: -958.406, d: 0.15, sd: 21 },
    {
      label: "17A",
      R: 119.0382,
      d: 3.6213,
      sd: 20.3,
      medium: 10,
      asphere: { K: 0, A4: -2.1535e-06, A6: -9.26e-10, A8: -2.1205e-11, A10: 6.6801e-14, A12: 0, A14: 0 },
    },
    {
      label: "18A",
      R: -149.1866,
      d: 0.15,
      sd: 20.3,
      asphere: { K: 0, A4: 1.6303e-06, A6: -4.1954e-09, A8: -6.8591e-12, A10: 5.1181e-14, A12: 0, A14: 0 },
    },
    { label: "19", R: 333.2382, d: 4.3554, sd: 18.9, medium: 11 },
    { label: "20", R: -63.293, d: 1.1, sd: 18.9, medium: 12 },
    { label: "21", R: 30.977, d: 5.5835, sd: 15.4 },
    { label: "STO", R: "flat", d: 4.9652 },
    { label: "23", R: -39.6314, d: 7.4855, sd: 14.5, medium: 13 },
    { label: "24", R: -17.8628, d: 1.0, sd: 16, medium: 14 },
    { label: "25", R: 168.2052, d: 3.2768, sd: 16.7, medium: 15 },
    { label: "26", R: -118.1115, d: 0.7368, sd: 16.7 },
    { label: "27", R: 72.6269, d: 8.5694, sd: 17.5, medium: 16 },
    { label: "28", R: -31.754, d: 0.2466, sd: 17.5 },
    {
      label: "29A",
      R: -76.1964,
      d: 3.4,
      sd: 17.7,
      medium: 17,
      asphere: { K: 0, A4: -7.6843e-06, A6: -7.4072e-09, A8: 6.8616e-11, A10: -9.0126e-14, A12: 0, A14: 0 },
    },
    {
      label: "30A",
      R: -41.4083,
      sd: 17.7,
      asphere: { K: 0, A4: -3.6277e-07, A6: -3.7194e-09, A8: 5.813e-11, A10: -5.9129e-14, A12: 0, A14: 0 },
    },
  ],

  focus: {
    closeFocusM: 1.2749682,
    description:
      "Rear focus between the two states the patent publishes, infinity and 1.275 m. Group L2 (surfaces 15–30, including the stop) moves 0.7338 mm toward the object; group L1, the LPF and the image plane stay fixed. Spacings between the two states are interpolated. The production 0.28 m minimum focus is not reconstructed.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 1122.9079,
        distanceReference: "first-surface",
        source:
          "JP 2019-219472 A Example 5, PDF p22 printed p21: published d0=1122.9079 mm, d14=6.2577 mm, d30=37.2626 mm, BF=1.0 mm; caption 1275 mm.",
      },
    ],
  },

  gaps: { "14": { label: "D14", values: [[6.9915, 6.2577]] }, "30A": { label: "D30", values: [[36.5288, 37.2626]] } },

  aperture: { nominalFNumber: 1.46, fStops: [1.46, 2, 2.8, 4, 5.6, 8, 11, 16], maxFNumber: 16, blades: 9 },

  rearPlates: [
    {
      label: "LPF",
      thicknessMm: 1.45,
      nd: 1.52301,
      vd: 58.59,
      glass: "C12 (HOYA nearest catalog row, 523586; filter material unconfirmed)",
      indexReference: "d",
      gapAfterMm: 1.0,
      source:
        "JP 2019-219472 A, Numerical Example 5, PDF pp21-22, printed pp20-21, surfaces 31–32; physical dimensions retained.",
    },
  ],

  groups: [
    { text: "L1 FIXED", fromSurface: "1", toSurface: "14" },
    { text: "L2 REAR FOCUS", fromSurface: "15", toSurface: "30A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "19", toSurface: "21" },
    { text: "T1", fromSurface: "23", toSurface: "26" },
  ],

  layout: { yScFill: 0.33 },

  checks: { gapSagFrac: 0.98 },
} satisfies LensDataV2Input;

export default LENS_DATA;
