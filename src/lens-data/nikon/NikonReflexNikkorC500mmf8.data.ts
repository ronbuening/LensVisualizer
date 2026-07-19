import type { LensDataInput } from "../../types/optics.js";

/*
 * Nikon Reflex-Nikkor·C 500mm f/8
 * Source: US 3,632,190, Example 1, Yoshiyuki Shimizu / Nippon Kogaku K.K.
 *
 * The patent prescription is normalized to f = 100.  A direct folded-path trace
 * shows that the printed R6→R7 air separation of 14.740 is internally
 * inconsistent with the explicit R9 = R3 and R10 = R4 shared-primary condition:
 * enforcing the shared surface gives 14.720.  The scale used here is therefore
 * 500 / 99.99305235622015 = 5.000347406326, giving a 500.000 mm paraxial EFL.
 *
 * Semi-diameters are inferred from traced marginal and chief rays because the
 * patent gives no clear-aperture table.  The synthetic STO is one millimeter in
 * front of R1 and represents the geometric F/7 annular entrance pupil; the lens
 * header reports Nikon's f/8 marketed transmission/aperture value.
 *
 * R9 and R10 are the uncoated central portion of the primary blank, with
 * R9 = R3 and R10 = R4. They are duplicated as central-zone surfaces so L4
 * renders as the clear plug that fills the primary hole, while the small
 * positive L3 element remains confined to that central opening.
 */

const LENS_DATA = {
  key: "nikon-reflex-nikkor-c-500mm-f8",
  maker: "Nikon",
  name: "NIKON REFLEX-NIKKOR·C 500mm f/8",
  subtitle: "US 3,632,190 Example 1; folded Mangin catadioptric",
  specs: [
    "500 mm nominal focal length",
    "f/8 marketed, F/7 geometric prescription",
    "5 elements / 3 groups",
    "5° diagonal field",
    "manual fixed-aperture mirror lens",
  ],
  focalLengthMarketing: 500,
  focalLengthDesign: 500.0,
  apertureMarketing: 8,
  apertureDesign: 7,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,632,190",
  patentAuthors: ["Yoshiyuki Shimizu"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1972,
  elementCount: 5,
  groupCount: 3,
  closeFocusM: 4,
  nominalFno: 8,
  fstopSeries: [8],
  maxFstop: 8,
  focusDescription:
    "Manual front-cell focus in the production lens; the patent publishes only the infinity spacing, so finite-focus variable gaps are not modeled.",
  opticalPath: {
    surfaceOrder: ["STO", "1", "2", "6", "3", "4M", "3", "5", "6", "5", "7", "8", "9", "10"],
    imagePlane: { z: 172.619086, normal: { z: 1, y: 0 }, label: "IMG" },
    maxInteractions: 20,
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front corrector",
      type: "Positive Meniscus",
      nd: 1.5245,
      vd: 59.6,
      fl: 696.5,
      glass: "Unmatched light crown (525/596; K5-class nearest)",
      apd: false,
      role: "Weak positive meniscus that pre-converges the entrance beam and corrects field curvature.",
    },
    {
      id: 2,
      name: "M2",
      label: "Secondary Mangin mirror",
      type: "Convex Secondary Mangin Mirror",
      nd: 1.54814,
      vd: 45.9,
      fl: -89.3,
      glass: "LLF1 / S-TIL1 / E-FEL1 class (548/459)",
      apd: false,
      role: "Diverging second-surface Mangin mirror; it magnifies the primary image and folds the path rearward.",
    },
    {
      id: 3,
      name: "L2",
      label: "Negative rear corrector",
      type: "Plano-Concave Negative",
      nd: 1.56883,
      vd: 56.0,
      fl: -109.6,
      glass: "BAK4 / BAC4 class (569/560)",
      apd: false,
      cemented: "C1",
      role: "Strong negative member at the front of the cemented rear corrector group.",
    },
    {
      id: 4,
      name: "L3",
      label: "Positive rear corrector",
      type: "Plano-Convex Positive",
      nd: 1.72825,
      vd: 28.3,
      fl: 251.0,
      glass: "SF10 / E-FD10 / S-TIH10 class (728/283)",
      apd: false,
      cemented: "C1",
      fromSurface: "8",
      toSurface: "9",
      role: "Dense-flint positive cemented partner used mainly for lateral-color and residual aberration correction.",
    },
    {
      id: 5,
      name: "M1",
      label: "Primary Mangin mirror annulus",
      type: "Annular Concave Mangin Mirror",
      nd: 1.54072,
      vd: 47.2,
      fl: 144.5,
      glass: "LLF2 / S-TIL2 / E-FEL2 class (541/472)",
      apd: false,
      fromSurface: "3",
      toSurface: "4M",
      role: "Silvered annular concave primary Mangin mirror; the uncoated central zone is rendered separately as L4.",
    },
    {
      id: 6,
      name: "L4",
      label: "Clear central primary zone",
      type: "Negative Meniscus",
      nd: 1.54072,
      vd: 47.2,
      fl: -947.0,
      glass: "LLF2 / S-TIL2 / E-FEL2 class (541/472)",
      apd: false,
      fromSurface: "9",
      toSurface: "10",
      role: "Uncoated central portion of the same primary blank; fills the annular mirror hole and shares R9 = R3 and R10 = R4.",
    },
  ],
  surfaces: [
    {
      label: "STO",
      R: 1e15,
      d: 1.0,
      nd: 1.0,
      elemId: 0,
      sd: 35.714286,
      innerSd: 17.290104,
    },
    { label: "1", R: 231.336072, d: 11.000764, nd: 1.5245, elemId: 1, sd: 42.5 },
    { label: "2", R: 620.443106, d: 5.700396, nd: 1.0, elemId: 0, sd: 42.0 },
    {
      label: "6",
      R: -178.607409,
      d: 3.900271,
      nd: 1.54814,
      elemId: 2,
      sd: 21.0,
      interaction: { type: "reflect", incidentSide: "rear", inactiveSide: "block", mirrorKind: "second-surface" },
    },
    { label: "5", R: -115.838048, d: 73.605114, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "7", R: -62.334331, d: 1.100076, nd: 1.56883, elemId: 3, sd: 18.5 },
    { label: "8", R: 1e15, d: 2.200153, nd: 1.72825, elemId: 4, sd: 18.5 },
    { label: "9", R: -182.772698, d: 0, nd: 1.54072, elemId: 6, sd: 18.5 },
    { label: "3", R: -182.772698, d: 8.800611, nd: 1.54072, elemId: 5, sd: 39.0, innerSd: 18.5 },
    {
      label: "4M",
      R: -289.02008,
      d: 0,
      nd: 1.0,
      elemId: 0,
      sd: 39.0,
      innerSd: 18.5,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "second-surface" },
    },
    { label: "10", R: -289.02008, d: 65.3117, nd: 1.0, elemId: 0, sd: 18.5 },
  ],
  asph: {},
  var: {},
  varLabels: [],
  groups: [
    { text: "G1 front corrector", fromSurface: "1", toSurface: "2" },
    { text: "G2 secondary Mangin", fromSurface: "6", toSurface: "5" },
    { text: "G3 primary + rear corrector", fromSurface: "7", toSurface: "10" },
  ],
  doublets: [{ text: "C1 rear cemented triplet", fromSurface: "7", toSurface: "10" }],
  scFill: 0.72,
  yScFill: 0.68,
  maxAspectRatio: 2.2,
} satisfies LensDataInput;

export default LENS_DATA;
