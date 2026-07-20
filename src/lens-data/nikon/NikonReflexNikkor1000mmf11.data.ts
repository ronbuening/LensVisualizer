import type { LensDataInput } from "../../types/optics.js";

/**
 * Nikon Reflex-Nikkor 1000mm f/11
 *
 * Data source: US 3,507,556, Embodiment 1 / Claim 1 (Yoshiyuki Shimizu, Nippon Kogaku K.K.).
 * The prescription is an all-spherical folded Mangin catadioptric: a weak front corrector, two
 * second-surface mirrors, and a rear two-element negative correcting group.
 *
 * Verification, using an independent meridional ray trace of the folded path:
 *   EFL = 1001.40 mm; BFD from r10 = 89.62 mm; image plane z = 273.82 mm.
 *   Standalone refractive focal lengths: L1 1316.0 mm, M1 substrate -1759.6 mm,
 *   M2 substrate -909.5 mm, L2 -99.3 mm, L3 283.1 mm.
 *
 * NOTE ON SEMI-DIAMETERS:
 *   The patent does not publish semi-diameters. Values here are estimated from the f/11 entrance
 *   pupil, the patent's 1.23° plotted half-field, and a marginal/chief-ray envelope traced through
 *   the folded path. They are deliberately conservative and include mechanical clearance.
 *
 * NOTE ON MIRROR/FOLDED PATHS:
 *   M1 and M2 are second-surface Mangin mirrors. The primary mirror is annular, with a central
 *   perforation for the final beam and rear correcting group. The synthetic OBS surface represents
 *   the central obstruction from the secondary assembly; it is not a separate glass element.
 *   opticalPath.surfaceOrder gives the actual optical hit sequence. Physical surface order remains
 *   front-to-rear along the common axis, so the rear correcting group lies in the primary perforation.
 *
 * NOTE ON FOCUS:
 *   The patent gives only the infinity prescription and no variable spacing table. The production
 *   lens has an 8 m minimum-focus specification, but the internal close-focus kinematics are not
 *   modeled here.
 */

const LENS_DATA = {
  key: "nikon-reflex-nikkor-1000mm-f11",
  maker: "Nikon",
  name: "NIKON REFLEX-NIKKOR 1000mm f/11",
  subtitle: "US 3,507,556 Embodiment 1 — Nippon Kogaku / Shimizu",
  specs: ["5 elements / 5 groups", "f ≈ 1001.4 mm", "Fixed f/11", "2ω = 2°30′", "All-spherical Mangin catadioptric"],

  focalLengthMarketing: 1000,
  focalLengthDesign: 1001.4,
  apertureMarketing: 11,
  apertureDesign: 11,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,507,556",
  patentAuthors: ["Yoshiyuki Shimizu"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1970,
  elementCount: 5,
  groupCount: 5,

  opticalPath: {
    surfaceOrder: ["STO", "OBS", "1", "2", "M1F", "M1R", "M1F", "M2F", "M2R", "M2F", "L2F", "L2R", "L3F", "L3R"],
    imagePlane: { z: 273.8236, label: "IMG" },
    maxInteractions: 16,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front corrector",
      type: "Plano-Convex Positive",
      nd: 1.51823,
      vd: 59.0,
      fl: 1316.0,
      glass: "K crown, 518/590 class (Hoya E-C3 / Ohara S-NSL3 equivalent)",
      apd: false,
      role: "Weak positive front corrector; contributes spherical-aberration and sine-condition balancing before the folded mirror train.",
    },
    {
      id: 2,
      name: "M1",
      label: "Primary Mangin mirror",
      type: "Negative Meniscus, second-surface concave mirror",
      nd: 1.54072,
      vd: 47.2,
      fl: -1759.6,
      glass: "Light flint, 541/472 class (Hoya E-FEL2 / Ohara S-TIL2 equivalent)",
      apd: false,
      role: "Annular primary Mangin. The glass substrate is weakly negative as a refractor, while the rear reflecting surface supplies the main convergence.",
    },
    {
      id: 3,
      name: "M2",
      label: "Secondary Mangin mirror",
      type: "Meniscus, second-surface convex mirror",
      nd: 1.54814,
      vd: 45.9,
      fl: -909.5,
      glass: "Light flint, 548/459 class (LLF1 / Hoya E-FEL1 / Ohara S-TIL1 equivalent)",
      apd: false,
      role: "Small convex Mangin secondary that enlarges and relays the primary image back through the primary perforation.",
    },
    {
      id: 4,
      name: "L2",
      label: "Rear negative corrector",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      fl: -99.3,
      glass: "BK7-family borosilicate crown, 517/642 class (BSC7 / H-K9L equivalent)",
      apd: false,
      role: "Strong negative element in the rear diverging group; primary contributor to field-flattening power.",
    },
    {
      id: 5,
      name: "L3",
      label: "Rear positive flint",
      type: "Biconvex Positive",
      nd: 1.74077,
      vd: 27.7,
      fl: 283.1,
      glass: "SF13-family dense flint, 741/277 class (Hoya E-FD13 / Hikari J-SF13 equivalent)",
      apd: false,
      role: "Positive dense-flint partner for L2; moderates colour and spherical residuals while keeping the rear group net negative.",
    },
  ],

  surfaces: [
    // Synthetic fixed entrance aperture and central obstruction. Not a mechanical diaphragm.
    { label: "STO", R: 1e15, d: 0.05, nd: 1.0, elemId: 0, sd: 45.52 },
    { label: "OBS", R: 1e15, d: 0.05, nd: 1.0, elemId: 0, sd: 18.2, interaction: { type: "block" } },

    // L1 front corrector.
    { label: "1", R: 682.0, d: 10.0, nd: 1.51823, elemId: 1, sd: 52.0 },
    { label: "2", R: 1e15, d: 14.7, nd: 1.0, elemId: 0, sd: 52.0 },

    // M2 is physically near L1. Light later reaches M2F first, reflects from M2R, and exits M2F.
    {
      label: "M2R",
      R: -258.42,
      d: 3.3,
      nd: 1.54814,
      elemId: 3,
      sd: 22.0,
      interaction: { type: "reflect", mirrorKind: "second-surface" },
    },
    { label: "M2F", R: -169.43, d: 137.0, nd: 1.0, elemId: 0, sd: 22.0 },

    // Primary Mangin. The 10 mm patent thickness is R3→R4; the rear correctors sit just behind the central opening.
    { label: "M1F", R: -319.0, d: 10.0, nd: 1.54072, elemId: 2, sd: 48.0, innerSd: 16.5 },
    {
      label: "M1R",
      R: -485.185,
      d: 3.0,
      nd: 1.0,
      elemId: 0,
      sd: 48.0,
      innerSd: 16.5,
      interaction: { type: "reflect", mirrorKind: "second-surface" },
    },

    // Rear diverging/correcting pair, mounted through the primary opening.
    { label: "L2F", R: -200.0, d: 1.7, nd: 1.5168, elemId: 4, sd: 16.5 },
    { label: "L2R", R: 69.2, d: 2.0, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "L3F", R: 600.0, d: 2.4, nd: 1.74077, elemId: 5, sd: 16.5 },
    { label: "L3R", R: -321.86, d: 89.6236, nd: 1.0, elemId: 0, sd: 16.5 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [
    { text: "L1", fromSurface: "1", toSurface: "2" },
    { text: "M2", fromSurface: "M2R", toSurface: "M2F" },
    { text: "M1", fromSurface: "M1F", toSurface: "M1R" },
    { text: "L2-L3", fromSurface: "L2F", toSurface: "L3R" },
  ],
  doublets: [],

  nominalFno: 11,
  closeFocusM: 8,
  fstopSeries: [11],
  maxFstop: 11,
  focusDescription:
    "Manual focusing ring; the patent supplies only the infinity prescription, so close-focus variable spacing is not modeled.",

  svgW: 1180,
  svgH: 520,
  scFill: 0.82,
  yScFill: 0.62,
  rayLeadFrac: 0.18,
  lensShiftFrac: 0.08,
  offAxisFieldFrac: 0.8,
  maxAspectRatio: 2.4,
} satisfies LensDataInput;

export default LENS_DATA;
