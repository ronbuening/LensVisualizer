import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║              LENS DATA — YASHICA ML 300mm f/5.6                           ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP1978-129629, Example 2 (Tokina Optical).                  ║
 * ║  Strong inferred production correlation to the Yashica ML 300mm f/5.6     ║
 * ║  compact: 6 elements / 3 groups, f/5.6, and 8.5° full field all agree.     ║
 * ║                                                                            ║
 * ║  SCALING: The patent prescription is normalized to f=1.0. All radii,       ║
 * ║  thicknesses, air spaces, semi-diameters, and rear image distance are      ║
 * ║  modeled at s=300. The rounded patent prescription then computes to        ║
 * ║  EFL=299.975734 mm; it is not rescaled again to force 300.000 mm.          ║
 * ║                                                                            ║
 * ║  STOP: The patent's Seidel calculation places the stop in the tangent      ║
 * ║  plane of S1. The modeled flat STO is therefore coincident with S1. The    ║
 * ║  source does not publish a mechanical iris diameter; STO.sd is derived     ║
 * ║  from the computed EFL and F/5.6, giving 26.783548 mm.                     ║
 * ║                                                                            ║
 * ║  FOCUS: NO_INTERNAL_RECONSTRUCTION. The patent publishes no finite-focus   ║
 * ║  spacing states. The 4.5 m close-focus value is production metadata only;  ║
 * ║  no focus var spacings are invented.                                       ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: No clear apertures are published. SDs are inferred from   ║
 * ║  the F/5.6 entrance pupil, the patent optical section, the production      ║
 * ║  58 mm filter envelope, and traced default ray bundles. The rear cemented  ║
 * ║  triplet is constrained by positive L5 edge thickness; all authored SDs    ║
 * ║  pass current rim-slope, edge-thickness, cross-gap, and configured         ║
 * ║  off-axis containment checks.                                              ║
 * ║                                                                            ║
 * ║  GLASS: The patent publishes d-line nd/vd coordinates but no vendor names. ║
 * ║  Generic coordinate classes are used where defensible. L5 remains         ║
 * ║  Unmatched. Patent theta5=0.589 is a relative partial-dispersion ratio,    ║
 * ║  not dPgF; absolute nC/nF/ng are unavailable and are not fabricated.       ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "yashica-ml-300mm-f56",
  maker: "Yashica",
  name: "YASHICA ML 300mm f/5.6 C",
  subtitle: "JP1978-129629 Example 2 - strong inferred production correlation",
  specs: ["6 ELEMENTS / 3 GROUPS", "300mm f/5.6", "2ω = 8.5°", "ALL SPHERICAL"],

  focalLengthMarketing: 300,
  focalLengthDesign: 299.975734305,
  apertureMarketing: 5.6,
  apertureDesign: 5.6,
  lensMounts: ["contax-yashica"],
  imageFormat: "135-full-frame",
  patentNumber: "JP1978-129629",
  patentAuthors: ["Toshio Funejima", "Hamao Inagaki"],
  patentAssignees: ["Tokina Optical Co., Ltd."],
  patentYear: 1978,
  elementCount: 6,
  groupCount: 3,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      fl: 133.963891,
      glass: "487704 - FK5 class (vendor unresolved)",
      cemented: "D1",
      role: "Front positive crown of the cemented first group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.7569,
      vd: 31.8,
      indexReference: "d",
      fl: -180.725674,
      glass: "757318 - E-LAF11 catalog equivalent (production supplier unspecified)",
      cemented: "D1",
      role: "Negative partner in the front cemented doublet.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      fl: 185.74455,
      glass: "487704 - FK5 class (vendor unresolved)",
      role: "Positive meniscus completing the strong positive front subsystem.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.8,
      indexReference: "d",
      fl: -30.410016,
      glass: "816468 - S-LAH59 catalog equivalent (production supplier unspecified)",
      cemented: "T1",
      role: "Negative front member of the cemented rear triplet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.5934,
      vd: 34.8,
      indexReference: "d",
      fl: 28.92901,
      glass: "Unmatched (nd=1.59340, vd=34.8; patent theta_gF=0.589)",
      cemented: "T1",
      role: "Positive central member of the rear triplet; patent theta5=0.589 is a relative partial-dispersion ratio.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.788,
      vd: 47.5,
      indexReference: "d",
      fl: -56.866289,
      glass: "788475 - lanthanum glass class (vendor unresolved)",
      cemented: "T1",
      role: "Negative rear member completing the strong negative telephoto triplet.",
    },
  ],

  surfaces: [
    // Stop position is a modeling inference from the patent's Seidel-calculation convention.
    { label: "STO", R: 1e15, d: 0, nd: 1.0, elemId: 0, sd: 26.783547706 },
    { label: "1", R: 110.412, d: 7.74, nd: 1.48749, elemId: 1, sd: 27.5 },
    { label: "2", R: -156.186, d: 2.82, nd: 1.7569, elemId: 2, sd: 27.3 },
    { label: "3", R: 1110.15, d: 0.3, nd: 1.0, elemId: 0, sd: 27.1 },
    { label: "4", R: 69.741, d: 7.35, nd: 1.48749, elemId: 3, sd: 26.8 },
    { label: "5", R: 293.01, d: 91.74, nd: 1.0, elemId: 0, sd: 26.0 },
    { label: "6", R: -48.453, d: 1.23, nd: 1.816, elemId: 4, sd: 10.2 },
    { label: "7", R: 51.444, d: 3.81, nd: 1.5934, elemId: 5, sd: 10.6 },
    { label: "8", R: -25.053, d: 1.35, nd: 1.788, elemId: 6, sd: 10.6 },
    { label: "9", R: -58.17, d: 75.144864256, nd: 1.0, elemId: 0, sd: 10.9 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  closeFocusM: 4.5,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: the production lens is documented to focus to 4.5 m, but JP1978-129629 Example 2 publishes no finite-focus spacing states; no internal focus movement is modeled.",

  nominalFno: 5.6,
  fstopSeries: [5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
