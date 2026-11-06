import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * SIGMA 20mm F1.4 DG DN | Art (A022), from JP 2023-167728 A (Sigma Corporation, inventor Yuki Ueda),
 * Example 1 (実施例1, ¶0080–0083, Fig. 1 on PDF p. 31; table 数値実施例1, PDF pp. 16–18).
 *
 * Example choice: Sigma's published section draws the third element as a thin meniscus convex to the
 * image, nested into a biconcave fourth element, and a front element aspheric on both faces. Example 1
 * has both (L3 R = −64.18 / −42.33; L1 surfaces 1 and 2 aspheric). Example 3, transcribed in an earlier
 * version of this file, turns L3 convex to the object (R = 84.35 / 265.74); Example 2 makes only the
 * front face of L1 aspheric; Examples 4, 5, 7 and 8 have 15 or 16 elements and Example 6 has 13 groups.
 *
 * Unscaled: the printed table is at production scale. Printed f = 20.33 mm, F1.46, 2ω = 96.47°,
 * Y = 21.63 mm, total length 129.04 mm, BF = 20.3784 mm; the model traces EFL 20.329 mm, paraxial back
 * focus 20.379 mm and track 129.0384 mm. Every R, d, nd, νd and PgF is as printed. The stop is printed
 * as surface 21, 2.31 mm behind surface 20 and 3.56 mm ahead of surface 22; its radius (12.73 mm) is
 * derived from F1.46. The patent lists no cover glass or filter plate behind surface 33. `projection`
 * declares the printed 2ω, because the paraxial chief-ray estimate stops at 44.2° on the L1 rear rim
 * while the real chief ray reaches the 21.63 mm corner at 48.3°.
 *
 * Aspheres (surfaces 1, 2, 15, 16, 32, 33): ¶0117 prints
 * z = (y²/r) / [1 + √(1 − (1+K)(y/r)²)] + A4y⁴ + … + A16y¹⁶, the convention this file uses, so K and
 * A4–A16 are entered as printed. Printed zero terms are left out.
 *
 * Focus: G2 (L6 alone) moves toward the object. Printed spacings at infinity and at the "226mm" state:
 * d10 11.3900 → 3.7932, d12 2.0000 → 9.5968, BF 20.3784 fixed. The patent's d0 = 97.4379 mm is the
 * object distance to surface 1; with the 129.0384 mm track it puts the object 226.4763 mm from the image,
 * which the patent rounds to 226 mm. Sigma's minimum focus is 23 cm (catalog.closeFocusM.marketing).
 *
 * Partial dispersion: the patent prints PgF = (ng − nF)/(nF − nC) for every glass (¶0013 defines its own
 * ΔPgF line, 0.64833 − 0.00180·νd). `dPgF` is the printed PgF minus the engine's normal line
 * (0.6438 − 0.001682·νd). Glass names are catalog matches on nd, νd and PgF together (HOYA and OHARA
 * catalogs, all within 0.0002 in PgF); the patent names no supplier.
 *
 * NOTE ON SEMI-DIAMETERS: the patent prints no clear apertures. Rims are measured on Fig. 1 at
 * 8.153 px/mm (400 dpi; surface 1 to the image plane, 1052 px for 129.04 mm, checked against surface 1
 * to surface 33), the same on both sides of the axis. Fig. 1 draws a flat land beyond the curve on
 * S2, S4, S7, S11 and S18: those faces keep the curve end in `sd` and carry the drawn edge in
 * `rimExtensionSd` (S2 23.5 → 31.6, S4 20.2 → 24.8, S7 19.5 → 20.4, S11 14.7 → 16.4, S18 15.0 →
 * 16.25 mm). S4 is held at 20.2 mm, the largest curve end the cross-gap rule admits against L3
 * (Fig. 1 reads 20.6–21.2 mm). Fig. 1 closes the L16–L17 air lens at the rim, where the printed
 * surfaces would cross (about 13.7 mm), so S31 and S32 end at 13.0 mm and lands carry both elements
 * out to the drawn 15.15 mm edge. Every rim clears the F1.46 on-axis beam at both printed focus
 * states; the wide-open corner keeps the vignetting these rims give (about 29 % geometric
 * transmission at 48.2°).
 */
const LENS_DATA = {
  schema: 2,
  key: "sigma-20mm-f14-dg-dn-art",
  maker: "Sigma",
  name: "SIGMA 20mm f/1.4 DG DN | Art",
  subtitle: "JP 2023-167728 A, Example 1 — matches Sigma's published lens construction",

  catalog: {
    lensMounts: ["sony-fe", "l-mount"],
    imageFormat: "135-full-frame",
    specs: [
      "17 ELEMENTS / 15 GROUPS",
      "DESIGN f = 20.33 mm",
      "DESIGN F/1.46",
      "6 ASPHERICAL SURFACES / 3 ELEMENTS",
      "DESIGN 2ω = 96.47°",
    ],
    elementCount: 17,
    groupCount: 15,
    focalLengthMm: { marketing: 20, design: 20.33 },
    fNumber: { marketing: 1.4, design: 1.46 },
    closeFocusM: { marketing: 0.23 },
  },

  source: {
    patentNumber: "JP 2023-167728 A",
    example: { label: "Example 1", id: "1" },
    patentYear: 2023,
    authors: ["Yuki Ueda"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.6935,
      vd: 53.18,
      focalLengthMm: -58.4,
      glass: "L-LAL13 (OHARA)",
      role: "Front negative meniscus of G1A, aspheric on both faces; controls distortion and astigmatism at the widest field.",
      dPgF: -0.00615,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: -72.6,
      glass: "TAF1 (HOYA)",
      role: "Second negative meniscus of G1A; shares the front group's divergence with L1.",
      dPgF: -0.01004,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 115.5,
      glass: "TAFD55 (HOYA)",
      role: "Thin positive meniscus convex to the image that opens G1B, nested against the biconcave L4.",
      dPgF: 0.0046,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.717,
      vd: 47.98,
      focalLengthMm: -44.0,
      glass: "LAF3 (HOYA)",
      role: "Biconcave negative of G1B between its two high-index positive elements.",
      dPgF: -0.0075,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 45.7,
      glass: "TAFD55 (HOYA)",
      role: "Strong biconvex positive that ends the fixed first group and converges the beam onto the focus element.",
      dPgF: 0.0046,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -99.7,
      glass: "BSC7 (HOYA)",
      role: "The whole focus group G2: a single negative meniscus, convex to the image, that moves toward the object for close focus.",
      dPgF: -0.00162,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.95375,
      vd: 32.32,
      focalLengthMm: 43.8,
      glass: "TAFD45L (HOYA)",
      role: "High-index positive meniscus that opens G3A ahead of the stop.",
      dPgF: 0.00056,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: 63.6,
      glass: "M-LAC130 (HOYA)",
      role: "Biconvex positive of G3A, aspheric on both faces; its power weakens toward the edge, trimming the spherical aberration of the wide-open beam.",
      dPgF: -0.00782,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.86966,
      vd: 20.02,
      focalLengthMm: -53.9,
      glass: "FDS20-W (HOYA)",
      role: "High-dispersion negative meniscus of G3A; the flint that achromatizes the group ahead of the stop.",
      dPgF: 0.03317,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.55032,
      vd: 75.5,
      focalLengthMm: 157.1,
      glass: "FCD705 (HOYA)",
      apd: "inferred",
      apdNote:
        "Sigma marks this position as SLD glass; printed PgF 0.5399 is 0.0231 above the engine's normal line, and the pair matches HOYA FCD705.",
      role: "Weak positive meniscus convex to the image, the last element ahead of the stop; low-dispersion crown for axial color.",
      dPgF: 0.02309,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 33.1,
      glass: "FCD515 (HOYA)",
      apd: "inferred",
      apdNote:
        "Sigma marks this position as SLD glass; printed PgF 0.5440 is 0.0156 above the engine's normal line, and the pair matches HOYA FCD515.",
      role: "Positive meniscus directly behind the stop, concave to the object; the low-dispersion crown of the first G3B doublet.",
      cemented: "D1",
      dPgF: 0.01562,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      focalLengthMm: -22.8,
      glass: "NBFD25 (HOYA)",
      role: "Dense-flint negative meniscus cemented behind L11; the strongly curved junction corrects axial color.",
      cemented: "D1",
      dPgF: 0.0087,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      focalLengthMm: -36.7,
      glass: "NBFD25 (HOYA)",
      role: "Dense-flint negative meniscus convex to the object, front of the second G3B doublet.",
      cemented: "D2",
      dPgF: 0.0087,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      focalLengthMm: 24.4,
      glass: "TAC6 (HOYA)",
      role: "Strongest positive element of the lens, cemented behind L13; carries much of G3B's power.",
      cemented: "D2",
      dPgF: -0.0086,
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 28.9,
      glass: "E-FDS1 (HOYA)",
      role: "Rear positive of G3B in high-index, high partial-dispersion glass (conditions 3 and 4); corrects lateral color and field curvature.",
      dPgF: 0.03012,
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.54814,
      vd: 45.82,
      focalLengthMm: -90.4,
      glass: "E-FEL1 (HOYA)",
      role: "Front negative meniscus of G3C; its concave rear face is the object side of the biconvex air lens K.",
      dPgF: 0.00317,
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.8061,
      vd: 40.73,
      focalLengthMm: -104.9,
      glass: "M-NBFD130 (HOYA)",
      role: "Rear biconcave asphere of G3C, its negative power rising toward the edge; corrects field curvature, distortion and sagittal flare.",
      dPgF: -0.00599,
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 161.79,
      d: 2.8,
      sd: 31.6,
      medium: 1,
      asphere: { K: 0, A4: 3.4261e-6, A6: -1.8342e-9, A8: 1.6244e-12, A10: -1.1413e-15, A12: 2.6109e-19 },
    },
    {
      label: "2A",
      R: 32.16,
      d: 5.37,
      sd: 23.5,
      rimExtensionSd: 31.6,
      asphere: { K: -1, A4: 3.5765e-6, A6: 2.2043e-9, A8: -2.6363e-12, A10: 1.1577e-14, A12: -1.4151e-17 },
    },
    { label: "3", R: 55.02, d: 1.1, sd: 24.8, medium: 2 },
    { label: "4", R: 27.54, d: 14.03, sd: 20.2, rimExtensionSd: 24.8 },
    { label: "5", R: -64.18, d: 3.31, sd: 21.6, medium: 3 },
    { label: "6", R: -42.33, d: 1.72, sd: 21.6 },
    { label: "7", R: -39.68, d: 1.0, sd: 19.5, rimExtensionSd: 20.4, medium: 4 },
    { label: "8", R: 154.74, d: 0.15, sd: 20.4 },
    { label: "9", R: 65.08, d: 6.21, sd: 20.2, medium: 5 },
    { label: "10", R: -146.5, sd: 20.2 },
    { label: "11", R: -42.49, d: 1.0, sd: 14.7, rimExtensionSd: 16.4, medium: 6 },
    { label: "12", R: -244.69, sd: 16.4 },
    { label: "13", R: 38.72, d: 4.8, sd: 17.6, medium: 7 },
    { label: "14", R: 500.27, d: 0.12, sd: 17.6 },
    {
      label: "15A",
      R: 56.1,
      d: 4.0,
      sd: 17.1,
      medium: 8,
      asphere: {
        K: 0,
        A4: -6.4052e-6,
        A6: 6.1089e-9,
        A8: -2.7557e-11,
        A10: 2.2574e-13,
        A12: -6.8516e-16,
        A14: 6.573e-19,
      },
    },
    {
      label: "16A",
      R: -200,
      d: 0.96,
      sd: 17.1,
      asphere: {
        K: 0,
        A4: 1.9734e-6,
        A6: 1.1349e-8,
        A8: -5.3746e-11,
        A10: 2.2412e-13,
        A12: -4.6122e-16,
        A14: 2.1969e-19,
      },
    },
    { label: "17", R: 753.26, d: 1.0, sd: 16.25, medium: 9 },
    { label: "18", R: 44.13, d: 4.55, sd: 15.0, rimExtensionSd: 16.25 },
    { label: "19", R: -133.12, d: 2.83, sd: 15.45, medium: 10 },
    { label: "20", R: -52.8, d: 2.31, sd: 15.45 },
    { label: "STO", R: "flat", d: 3.56 },
    { label: "22", R: -228.84, d: 8.35, sd: 14.4, medium: 11 },
    { label: "23", R: -18.34, d: 1.0, sd: 14.4, medium: 12 },
    { label: "24", R: -322.36, d: 0.15, sd: 14.4 },
    { label: "25", R: 61.65, d: 1.0, sd: 14.5, medium: 13 },
    { label: "26", R: 20.63, d: 8.14, sd: 14.5, medium: 14 },
    { label: "27", R: -144.02, d: 1.48, sd: 14.5 },
    { label: "28", R: 44.45, d: 6.26, sd: 15.8, medium: 15 },
    { label: "29", R: -62.08, d: 0.6, sd: 15.8 },
    { label: "30", R: 69.22, d: 1.0, sd: 15.15, medium: 16 },
    { label: "31", R: 28.74, d: 4.85, sd: 13.0, rimExtensionSd: 15.15 },
    {
      label: "32A",
      R: -143.18,
      d: 1.62,
      sd: 13.0,
      rimExtensionSd: 15.15,
      medium: 17,
      asphere: { K: 0, A4: -1.8625e-5, A6: -2.8534e-9, A8: -7.2938e-11, A10: 1.6668e-13 },
    },
    {
      label: "33A",
      R: 207.38,
      d: 20.3784,
      sd: 15.15,
      asphere: { K: 0, A4: 5.5601e-6, A6: 2.2982e-8, A8: -2.9978e-11, A10: -1.4588e-14 },
    },
  ],

  focus: {
    closeFocusM: 0.2264763,
    description:
      "PUBLISHED: inner focus by G2, the single negative meniscus L6, which moves 7.5968 mm toward the object from infinity to the patent's close state (d10 11.39 → 3.7932 mm, d12 2.00 → 9.5968 mm); G1, G3, the stop and the 20.3784 mm back focus stay fixed. The close state puts the object 97.4379 mm ahead of the first surface, 226.5 mm from the image; Sigma's stated minimum focus is 23 cm. Positions between the two printed states are interpolated.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 97.4379,
        distanceReference: "first-surface",
        source: "JP 2023-167728 A, Numerical Example 1 variable-spacing table (PDF p. 17): 226mm column, d0 = 97.4379, d10 = 3.7932, d12 = 9.5968, BF = 20.3784.",
      },
    ],
    published: [1],
  },
  gaps: {
    "10": { label: "d10", values: [[11.39, 3.7932]] },
    "12": { label: "d12", values: [[2.0, 9.5968]] },
  },
  aperture: {
    nominalFNumber: 1.46,
    fStops: [1.46, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: { kind: "rectilinear", fullFieldDeg: 96.47, maxTraceFieldDeg: 48.23 },

  groups: [
    { text: "G1", fromSurface: "1A", toSurface: "10" },
    { text: "G2 focus", fromSurface: "11", toSurface: "12" },
    { text: "G3", fromSurface: "13", toSurface: "33A" },
  ],

  layout: {
    yScFill: 0.78,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
