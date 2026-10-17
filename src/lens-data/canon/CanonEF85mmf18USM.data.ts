import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF85mm f/1.8 USM - JP H05-157964 A, Numerical Example 1.
 * Infinity prescription as printed, plus a DERIVED 0.85 m close-focus endpoint.
 * The patent prints no close-focus gaps. Only the negative G2 translates; the stop
 * stays fixed, as in the table (D8 constant, D9 and D12 variable).
 * The 0.85 m object-to-image distance is Canon's published minimum focus, not a patent value.
 * R, d, N and nu are as printed; the image plane is the same in both focus states.
 * D17 is the calculated Gaussian back focal distance (the patent prints none); it is not
 * adjusted, and the close-focus state is not fitted to Canon's 0.13x magnification.
 * The patent prints no semi-diameters. They are estimated from Fig. 1, which is drawn to scale,
 * and floor-checked by real-ray trace; the f/1.8 stop radius is set by the real marginal ray.
 * None is a source dimension. Rims are unequal across R7/R8 (20.4/16.1: the figure ends the
 * concave face at the marginal ray and continues L4 as a flat annulus) and R13/R14 (15.0/17:
 * the drawn L7/L8 step). The G2 doublet is square-cut at 15.0, as drawn (see the audit log).
 * The table does not name a spectral line for N/nu; Fig. 4 plots the d and g lines, so the
 * values are read as nd/vd. All seven printed pairs equal discontinued OHARA glasses (LAL7, LAH66,
 * LAL8, PBH1, PBH6, BSL7, LAH53), so the nine elements carry those names as coordinate equivalents.
 * BSL7 (1.51633/64.15) is traced on the formula of its successor S-BSL7 (64.14), 0.06 below the
 * one-decimal printed Abbe number and inside the catalog tolerance of 0.15.
 * Fig. 1 numbers the groups 1, 2, 3 (G1-G3 here) and marks the stop SP (STO here). It gives the elements
 * no reference signs, so they are L1-L9 front to rear, on the diagram as in the inspector, to keep
 * element numbers apart from the patent's group numbers.
 * The derived gaps are not listed as published finite conjugates.
 * The correlation with the Canon production lens is not manufacturer-confirmed.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-ef-85mm-f18-usm",
  maker: "Canon",
  name: "CANON EF 85mm f/1.8 USM",
  subtitle: "JP H05-157964 A, Example 1 — production correlation",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: ["9 ELEMENTS / 7 GROUPS", "DESIGN f = 85.0 mm", "DESIGN F/1.8", "ALL SPHERICAL"],
    elementCount: 9,
    groupCount: 7,
    focalLengthMm: { marketing: 85 },
    fNumber: { marketing: 1.8 },
  },

  source: { patentNumber: "JP H05-157964 A", patentYear: 1993, authors: ["Hiroshi Endo"], assignees: ["Canon Inc."] },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.5,
      focalLengthMm: 199.017143745,
      glass: "LAL7 (OHARA; coordinate equivalent; supplier unconfirmed)",
      role: "Biconvex front element of the fixed positive G1; first of the three positive lenses that converge the axial beam in stages.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 135.794199469,
      glass: "LAH66 (OHARA; coordinate equivalent; supplier unconfirmed)",
      role: "Positive meniscus, convex to the object; second converging element of the fixed G1.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.8,
      focalLengthMm: 54.566965611,
      glass: "LAL8 (OHARA; coordinate equivalent; supplier unconfirmed)",
      role: "Positive meniscus, convex to the object, and the strongest positive element of G1; its rear face and the front face of L4 enclose the air space the patent treats as a negative air lens.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: -40.895978163,
      glass: "PBH1 (OHARA; coordinate equivalent; supplier unconfirmed)",
      role: "Negative meniscus, concave to the image; last element of the fixed G1, directly ahead of the stop. The patent balances the spherical aberration of L1-L3 at its concave rear face.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 134.282552927,
      glass: "PBH6 (OHARA; coordinate equivalent; supplier unconfirmed)",
      role: "Positive meniscus, concave to the object; high-dispersion front member of the cemented focusing doublet G2.",
      diagramLabel: "L5",
      cemented: "L5-L6",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.51633,
      vd: 64.2,
      focalLengthMm: -41.497051496,
      glass: "BSL7 (OHARA; coordinate equivalent; supplier unconfirmed)",
      role: "Biconcave crown that gives the cemented doublet G2 its negative power; G2 moves toward the image to focus closer.",
      diagramLabel: "L6",
      cemented: "L5-L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -51.731863911,
      glass: "PBH6 (OHARA; coordinate equivalent; supplier unconfirmed)",
      role: "Negative, high-dispersion front member of the cemented doublet that opens the fixed G3; its front face is nearly flat.",
      diagramLabel: "L7",
      cemented: "L7-L8",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 41.0,
      focalLengthMm: 47.699580069,
      glass: "LAH53 (OHARA; coordinate equivalent; supplier unconfirmed)",
      role: "Biconvex positive member of the G3 cemented doublet, of lower dispersion than L7; the pair is weakly positive and corrects chromatic aberration within G3.",
      diagramLabel: "L8",
      cemented: "L7-L8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 59.883866221,
      glass: "LAH66 (OHARA; coordinate equivalent; supplier unconfirmed)",
      role: "Biconvex rear element; carries most of the positive power of G3 and, in the patent's account, offsets the positive distortion of G1 and G2.",
      diagramLabel: "L9",
    },
  ],

  surfaces: [
    { label: "1", R: 185.36, d: 4.4, sd: 26.9, medium: 1 },
    { label: "2", R: -427.66, d: 0.2, sd: 26.9 },
    { label: "3", R: 63.58, d: 4.6, sd: 24.1, medium: 2 },
    { label: "4", R: 156.32, d: 0.15, sd: 24.1 },
    { label: "5", R: 33.99, d: 8.2, sd: 21.2, medium: 3 },
    { label: "6", R: 241.98, d: 0.16, sd: 21.2 },
    { label: "7", R: 278.09, d: 3.2, sd: 20.4, medium: 4 },
    { label: "8", R: 26.41, d: 8.82, sd: 16.1 },
    { label: "STO", R: "flat" },
    { label: "10", R: -101.48, d: 2.4, sd: 15.0, medium: 5 },
    { label: "11", R: -52.9, d: 1.5, sd: 15.0, medium: 6 },
    { label: "12", R: 36.36, sd: 15.0 },
    { label: "13", R: -9058.59, d: 2.0, sd: 15.0, medium: 7 },
    { label: "14", R: 41.85, d: 12.4, sd: 17, medium: 8 },
    { label: "15", R: -410.77, d: 0.2, sd: 17 },
    { label: "16", R: 73.06, d: 5.4, sd: 19.0, medium: 9 },
    { label: "17", R: -122.05, d: 38.9050921339573, sd: 19.0 },
  ],

  focus: {
    closeFocusM: 0.85,
    description:
      "Rear focus: only G2 (the L5-L6 cemented doublet, surfaces 10-12) moves, 11.19 mm toward the image from infinity to 0.85 m; G1, the stop, G3 and the image plane stay fixed. The patent prints only the infinity gaps, so the 0.85 m state is derived: it is the G2 position that brings an object 0.85 m from the image plane, Canon's published minimum focus distance, to paraxial focus. Gaps between the two states are interpolated linearly, so intermediate distance labels are estimates. The patent's own close-focus plots are labelled 0.8 m without stating where that distance is measured from.",
  },

  gaps: {
    STO: { label: "D9 (STO–G2)", values: [[3.59, 14.78056260413962]] },
    "12": { label: "D12 (G2–G3)", values: [[16.3, 5.109437395860381]] },
  },

  aperture: { nominalFNumber: 1.8, fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (-)", fromSurface: "10", toSurface: "12" },
    { text: "G3 (+)", fromSurface: "13", toSurface: "17" },
  ],
  doublets: [
    { text: "L5-L6", fromSurface: "10", toSurface: "12" },
    { text: "L7-L8", fromSurface: "13", toSurface: "15" },
  ],

  layout: { yScFill: 0.82 },
} satisfies LensDataV2Input;

export default LENS_DATA;
