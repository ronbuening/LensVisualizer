import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — CARL ZEISS PLANAR 80mm f/2.8
 * Data source: US 2,724,994 Example II (Günther Lange / Carl Zeiss).
 * Five elements in four air-spaced components; all spherical.
 * Production correlation: the five-element Oberkochen Planar
 * 2.8/80 for 6×6 Rolleiflex cameras. The correlation is strong but
 * is not a manufacturer-confirmed patent attribution.
 *
 * SCALE: the patent is normalized to f=100. Every patent length
 * used in the optical model is scaled uniformly ×0.8 to give
 * modeled EFL ≈80 mm. Indices and Abbe numbers are unchanged.
 * There are no aspherical coefficients to transform.
 *
 * STOP: the axial diaphragm plane is published. Its physical
 * diameter is not. STO.sd is calibrated from the source f/2.8 and
 * the modeled entrance-pupil magnification. Agreement with f/2.8
 * is therefore calibration, not an independent stop measurement.
 *
 * SEMI-DIAMETERS: the patent publishes none. Surface SDs are
 * modeled from exact spherical ray envelopes: full on-axis pupil,
 * conservative ±0.83/±0.50/±0.17 pupil samples at 60% of the 6×6
 * corner field, and the full-field chief ray. Non-stop SDs add ~8%
 * mechanical clearance and are rounded upward to 0.1 mm.
 *
 * FOCUS: the Rolleiflex 2.8D manufacturer manual documents rigid
 * lens-panel unit focusing from infinity to 40 in (1.016 m), but
 * the patent gives no focus spacings. This file therefore retains
 * the infinity prescription only (NO_INTERNAL_RECONSTRUCTION).
 */

const LENS_DATA = {
  key: "zeiss-planar-80f28",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS PLANAR 80mm f/2.8 (6×6)",
  subtitle:
    "US 2,724,994 Example II — strong five-element 6×6 Planar 2.8/80 correlation; not manufacturer-confirmed patent attribution",
  specs: ["5 ELEMENTS / 4 GROUPS", "f ≈ 80.00 mm (modeled)", "F/2.8 (stop calibrated)", "6×6", "ALL-SPHERICAL"],

  focalLengthMarketing: 80,
  focalLengthDesign: 80.00011097418026,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "6x6",
  patentNumber: "US 2,724,994",
  patentAuthors: ["Günther Lange"],
  patentAssignees: ["Carl-Zeiss-Stiftung"],
  patentYear: 1955,
  elementCount: 5,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "I",
      label: "Element I",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      fl: -105.52377004865114,
      glass: "E-FD15 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Negative member of the cemented positive front component; paired with L2 for front-group chromatic correction.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "II",
      label: "Element II",
      type: "Positive Meniscus",
      nd: 1.69347,
      vd: 53.5,
      indexReference: "d",
      fl: 48.906049037493,
      glass: "S-LAL13 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Positive cemented partner; together with L1 forms the net positive front component.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "III",
      label: "Element III",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      fl: -109.14676154095653,
      glass: "E-FD15 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Dispersive meniscus immediately before the diaphragm.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "IV",
      label: "Element IV",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.5,
      indexReference: "d",
      fl: -96.70971392688074,
      glass: "J-SF14 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Thin dispersive meniscus immediately behind the diaphragm.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "V",
      label: "Element V",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      fl: 45.68828096802974,
      glass: "J-SK16 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Positive rear meniscus completing the rear collecting component.",
    },
  ],

  surfaces: [
    { label: "1", R: 35.4728, d: 2.0992, nd: 1.69895, elemId: 1, sd: 18.8 },
    { label: "2", R: 23.3696, d: 5.5984, nd: 1.69347, elemId: 2, sd: 17.2 },
    { label: "3", R: 67.7864, d: 0.1, nd: 1.0, elemId: 0, sd: 16.6 },
    { label: "4", R: 23.708, d: 9.2776, nd: 1.69895, elemId: 3, sd: 15.0 },
    { label: "5", R: 15.1752, d: 5.016, nd: 1.0, elemId: 0, sd: 10.7 },
    { label: "STO", R: 1e15, d: 11.38, nd: 1.0, elemId: 0, sd: 9.805299283274408 },
    { label: "6", R: -14.3264, d: 1.9496, nd: 1.76182, elemId: 4, sd: 11.9 },
    { label: "7", R: -18.8312, d: 0.2, nd: 1.0, elemId: 0, sd: 13.7 },
    { label: "8", R: -89.104, d: 6.0288, nd: 1.62041, elemId: 5, sd: 16.1 },
    { label: "9", R: -22.0616, d: 55.69001943849394, nd: 1.0, elemId: 0, sd: 16.6 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  closeFocusM: 1.016,
  focusDescription:
    "Infinity prescription only. The Rolleiflex moves the complete lens panel for focus; travel is not modeled.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
