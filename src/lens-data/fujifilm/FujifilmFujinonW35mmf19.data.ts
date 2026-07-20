import type { LensDataInput } from "../../types/optics.js";

/**
 * FUJIFILM EBC FUJINON-W 35mm f/1.9
 *
 * Data source: US 4,018,512, Sakai, Example 1 / Table I.
 * The patent prescription is normalized to f = 1.0. The rounded prescription
 * computes to EFL = 1.00044335068, so all radii, thicknesses, BFD, and inferred
 * semi-diameters are scaled by 34.9844896027 to give a 35.0 mm design EFL.
 *
 * Stop placement: the patent figure shows the aperture stop in air gap d4 but
 * does not give a numeric stop station. The d4 = 0.180f air gap is split here as
 * 0.060f before the stop and 0.120f after the stop for rendering and aperture
 * sizing. This split does not change the patent surface prescription.
 *
 * Semi-diameters: not listed in the patent. Values are conservative inferred
 * clear apertures constrained by paraxial marginal/chief-ray checks, the 49 mm
 * production filter thread, edge-thickness checks, cross-gap sag clearance, and
 * Fig. 1 silhouette tuning. The mid-rear relay apertures intentionally allow
 * normal wide-angle vignetting.
 *
 * Focus: production M42 lens is represented as unit focus. The patent gives no
 * finite-conjugate prescription, so the close-focus state uses an approximate
 * 3.356 mm unit-focus extension from the published 0.40 m minimum focus distance.
 */

const LENS_DATA = {
  key: "fujifilm-fujinon-w-35mm-f19",
  maker: "Fujifilm",
  name: "FUJIFILM EBC FUJINON-W 35mm f/1.9",
  subtitle: "US 4,018,512 Example 1 — Fuji Photo Optical / Yutaka Sakai",
  specs: ["8 elements / 6 groups", "35mm", "f/1.9", "63° patent field", "all-spherical"],

  focalLengthMarketing: 35,
  focalLengthDesign: 35,
  apertureMarketing: 1.9,
  apertureDesign: 1.9,
  lensMounts: ["m42"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,018,512",
  patentAuthors: ["Yutaka Sakai"],
  patentAssignees: ["Fuji Photo Optical Co., Ltd."],
  patentYear: 1977,
  elementCount: 8,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.0,
      fl: -68.09,
      glass: "S-BSL7 (OHARA catalog-equivalent)",
      apd: false,
      role: "Front retrofocus negative meniscus, convex to object.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.77252,
      vd: 49.6,
      fl: 28.93,
      glass: "S-LAH66 (OHARA catalog-equivalent)",
      apd: false,
      role: "High-index positive collector that compensates L1 spherical aberration and lower-stop coma.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 43.7,
      fl: 39.58,
      glass: "S-LAM52 / J-LAF02 class (catalog-equivalent; patent nd rounded)",
      apd: false,
      cemented: "D1",
      role: "Front positive element of the cemented negative component.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.62606,
      vd: 39.1,
      fl: -15.61,
      glass: "H-BaF8 (CDGM catalog-equivalent)",
      apd: false,
      cemented: "D1",
      role: "Rear element of the cemented negative component; the r6 junction supplies controlled high-order spherical aberration.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      fl: -41.81,
      glass: "S-TIM35 (OHARA catalog-equivalent)",
      apd: false,
      cemented: "D2",
      role: "Dense-flint negative half of the cemented positive meniscus component.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.6,
      fl: 25.99,
      glass: "S-LAL14 (OHARA catalog-equivalent)",
      apd: false,
      cemented: "D2",
      role: "Positive lanthanum-crown half of the cemented positive meniscus component.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.6,
      fl: 71.05,
      glass: "S-LAL14 (OHARA catalog-equivalent)",
      apd: false,
      role: "Positive relay meniscus, convex to image.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.6,
      fl: 123.83,
      glass: "S-LAL14 (OHARA catalog-equivalent)",
      apd: false,
      role: "Rear positive meniscus / field flattener, convex to image.",
    },
  ],

  surfaces: [
    { label: "1", R: 41.95725, d: 1.74922, nd: 1.51633, elemId: 1, sd: 20.5 },
    { label: "2", R: 18.85734, d: 17.56221, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "3", R: 32.99877, d: 6.75201, nd: 1.77252, elemId: 2, sd: 15.0 },
    { label: "4", R: -63.04835, d: 2.09907, nd: 1.0, elemId: 0, sd: 13.4 },
    { label: "STO", R: 1e15, d: 4.19814, nd: 1.0, elemId: 0, sd: 10.38846 },
    { label: "5", R: -21.86706, d: 3.49845, nd: 1.72, elemId: 3, sd: 12.6 },
    { label: "6", R: -13.20175, d: 1.04953, nd: 1.62606, elemId: 4, sd: 11.4 },
    { label: "7", R: 38.77296, d: 2.09907, nd: 1.0, elemId: 0, sd: 10.4 },
    { label: "8", R: -84.69535, d: 1.04953, nd: 1.69895, elemId: 5, sd: 9.9 },
    { label: "9", R: 44.85186, d: 4.19814, nd: 1.6968, elemId: 6, sd: 11.4 },
    { label: "10", R: -29.19771, d: 0.34984, nd: 1.0, elemId: 0, sd: 11.4 },
    { label: "11", R: -123.57046, d: 2.79876, nd: 1.6968, elemId: 7, sd: 13.6 },
    { label: "12", R: -35.67613, d: 0.34984, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "13", R: -634.27229, d: 2.79876, nd: 1.6968, elemId: 8, sd: 17.0 },
    { label: "14", R: -76.08847, d: 37.49823, nd: 1.0, elemId: 0, sd: 18.0 },
  ],

  asph: {},
  var: {
    "14": [37.49823, 40.85439],
  },
  varLabels: [["14", "BF"]],
  focusDescription:
    "Unit focus; patent publishes only the infinity prescription, so close-focus travel is approximated from the 0.40 m production minimum-focus specification.",

  groups: [
    { text: "Front", fromSurface: "1", toSurface: "4" },
    { text: "Rear relay", fromSurface: "5", toSurface: "14" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  closeFocusM: 0.4,
  nominalFno: 1.9,
  fstopSeries: [1.9, 2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16,
  scFill: 0.62,
  yScFill: 0.56,
} satisfies LensDataInput;

export default LENS_DATA;
