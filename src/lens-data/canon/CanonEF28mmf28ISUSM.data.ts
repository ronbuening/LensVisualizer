import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — CANON EF 28mm f/2.8 IS USM                             ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 2013-054269 A, Numerical Example 1 (Canon Inc.).            ║
 * ║  Production correlation is inferred; the patent does not name the lens. ║
 * ║  9 elements / 7 groups, 1 aspherical surface.                           ║
 * ║                                                                          ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION.                              ║
 * ║  The patent states that L2 (surfaces 6-18, including STO and Gis) moves ║
 * ║  rigidly toward the object for near focus but publishes no focus table. ║
 * ║  The close state is code-solved from Canon's rounded 0.23 m MFD:         ║
 * ║  travel = 6.0676600764 mm, d5 = 0.9823399236 mm,                        ║
 * ║  BF = 44.3476600764 mm. The adjacent-gap sum remains 45.33 mm.          ║
 * ║                                                                          ║
 * ║  No scaling was applied. Patent surface 1 is an inactive design dummy   ║
 * ║  and surface 19 is a co-located inactive flare cutter; both are omitted.║
 * ║  The final-surface d value is the patent BF to the image plane.         ║
 * ║                                                                          ║
 * ║  Semi-diameters are half the patent effective diameters. STO is the     ║
 * ║  modeled clear iris semi-diameter (6.4366219222 mm) required to         ║
 * ║  reproduce the published f/2.86; the raw 13.11 mm table entry is an     ║
 * ║  effective-diameter envelope. gapSagFrac = 0.95 preserves the source    ║
 * ║  s3/s4 apertures, which retain 0.418374 mm physical rim clearance.      ║
 * ║                                                                          ║
 * ║  The patent publishes only nd and νd. Vendor-specific glass identities,║
 * ║  nC, nF, ng, and dPgF are unavailable and are not inferred.             ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-ef-28mm-f28-is-usm",
  maker: "Canon",
  name: "CANON EF 28mm f/2.8 IS USM",
  subtitle: "JP 2013-054269 A — Numerical Example 1; production correlation inferred",
  specs: [
    "9 ELEMENTS / 7 GROUPS",
    "DESIGN f = 28.60 mm",
    "DESIGN F/2.86",
    "2ω = 74.22°",
    "1 ASPHERICAL SURFACE",
    "OPTICAL IMAGE STABILIZATION",
  ],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.59752870757978,
  apertureMarketing: 2.8,
  apertureDesign: 2.86,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2013-054269 A",
  patentAuthors: ["中原 誠"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2013,
  elementCount: 9,
  groupCount: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.6,
      fl: -79.06770868196946,
      glass: "603606/603607 crown class (catalog vendor unresolved)",
      apd: false,
      role: "Fixed front-group negative meniscus providing the principal retrofocus expansion.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 131.07705183894166,
      glass: "773496 lanthanum crown class (catalog vendor unresolved)",
      apd: false,
      role: "Fixed front-group biconvex positive element moderating the front pair's net negative power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: -55.24882941282274,
      glass: "487702 low-index crown class (catalog vendor unresolved)",
      apd: false,
      role: "Front element of the rigid moving focus unit and pre-stop aberration corrector.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.3,
      fl: 16.55194183225374,
      glass: "911353 high-index lanthanum class (catalog vendor unresolved)",
      apd: false,
      role: "Strong positive component of the pre-stop cemented doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.3,
      fl: -23.405599839130957,
      glass: "738323 flint class (catalog vendor unresolved)",
      apd: false,
      role: "Negative component of the pre-stop cemented doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "Gis",
      label: "Element 6 — IS Group",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: 72.82236010257928,
      glass: "729547 lanthanum crown class (catalog vendor unresolved)",
      apd: false,
      role: "Single positive stabilization element translated laterally for image-shift correction.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 28.3,
      fl: -19.67300605089382,
      glass: "740283 dense-flint class (catalog vendor unresolved)",
      apd: false,
      role: "Negative component of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: 28.319493241638853,
      glass: "697555 lanthanum crown class (catalog vendor unresolved)",
      apd: false,
      role: "Positive component of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 47.61292970706964,
      glass: "583594 molded-crown class (catalog vendor unresolved)",
      apd: false,
      role: "Final positive meniscus; its object-side asphere controls peripheral aberrations.",
    },
  ],

  surfaces: [
    { label: "2", R: 62.223, d: 1.53, nd: 1.60311, elemId: 1, sd: 21 },
    { label: "3", R: 26.747, d: 6.75, nd: 1, elemId: 0, sd: 18.075 },
    { label: "4", R: 277.138, d: 2.79, nd: 1.7725, elemId: 2, sd: 17.945 },
    { label: "5", R: -158.852, d: 7.05, nd: 1, elemId: 0, sd: 17.62 },
    { label: "6", R: 72.398, d: 1.13, nd: 1.48749, elemId: 3, sd: 11.72 },
    { label: "7", R: 19.53, d: 10.06, nd: 1, elemId: 0, sd: 10.27 },
    { label: "8", R: 22.447, d: 3.4, nd: 1.91082, elemId: 4, sd: 6.995 },
    { label: "9", R: -42.595, d: 0.72, nd: 1.738, elemId: 5, sd: 6.845 },
    { label: "10", R: 29.265, d: 3.28, nd: 1, elemId: 0, sd: 6.62 },
    { label: "STO", R: 1e15, d: 4.09, nd: 1, elemId: 0, sd: 6.436621922212118 },
    { label: "12", R: 105.862, d: 1.59, nd: 1.72916, elemId: 6, sd: 6.75 },
    { label: "13", R: -105.862, d: 3.57, nd: 1, elemId: 0, sd: 6.75 },
    { label: "14", R: -13.728, d: 1.45, nd: 1.74, elemId: 7, sd: 6.41 },
    { label: "15", R: -251.595, d: 4.39, nd: 1.6968, elemId: 8, sd: 7.59 },
    { label: "16", R: -18.429, d: 0.8, nd: 1, elemId: 0, sd: 8.75 },
    { label: "17A", R: -64.983, d: 3.21, nd: 1.58313, elemId: 9, sd: 9.735 },
    { label: "18", R: -19.807, d: 38.28, nd: 1, elemId: 0, sd: 10.25 },
  ],

  asph: {
    "17A": {
      K: 0,
      A4: -2.52195e-5,
      A6: 4.30341e-8,
      A8: -6.12181e-10,
      A10: 1.94445e-12,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "5": [7.05, 0.9823399235756094],
    "18": [38.28, 44.34766007642439],
  },
  varLabels: [
    ["5", "D5"],
    ["18", "BF"],
  ],

  groups: [
    { text: "L1 — FIXED", fromSurface: "2", toSurface: "5" },
    { text: "L2a — FOCUS", fromSurface: "6", toSurface: "10" },
    { text: "Gis — IS", fromSurface: "12", toSurface: "13" },
    { text: "L2b — FOCUS", fromSurface: "14", toSurface: "18" },
  ],
  doublets: [
    { text: "D1", fromSurface: "8", toSurface: "10" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
  ],

  closeFocusM: 0.23,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent-disclosed rigid rear focus. L2 (surfaces 6-18, including STO and Gis) " +
    "moves 6.067660 mm objectward at the modeled 0.23 m state; D5 decreases as BF increases by the same amount.",

  nominalFno: 2.86,
  fstopSeries: [2.86, 4, 5.6, 8, 11, 16],

  gapSagFrac: 0.95,
  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
