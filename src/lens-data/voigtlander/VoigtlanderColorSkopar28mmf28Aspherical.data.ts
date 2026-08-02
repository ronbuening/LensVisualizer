import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VOIGTLÄNDER COLOR-SKOPAR 28mm f/2.8 Aspherical SL IIs         ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2023-032663 A, Example 1 (Cosina Co., Ltd.; Yuki Shibata).       ║
 * ║ Production correlation: Cosina COLOR-SKOPAR 28mm F2.8 Aspherical SL IIs.   ║
 * ║ Seven elements in six air-spaced groups; surfaces 13A and 14A are aspheric.║
 * ║ Scale factor: 1.0. Marketing 28 mm / f/2.8 is kept separate from the        ║
 * ║ verified design values f = 29.430296338 mm and F/2.88.                      ║
 * ║                                                                              ║
 * ║ SOURCE CORRECTION: Table 1 omits nd and νd at surface 5 although that       ║
 * ║ surface begins the active biconcave Ln1 element and publishes FL =          ║
 * ║ -15.32 mm. The stored d-line index, 1.613311465921, is solved from that     ║
 * ║ focal length and the published R1/R2/thickness. νd and the glass identity   ║
 * ║ remain unresolved. The correction is not presented as patent text.          ║
 * ║                                                                              ║
 * ║ FOCUS STATUS — CONSTRAINED_RECONSTRUCTION: the patent specifies rigid       ║
 * ║ whole-lens unit focus. Its published 180 mm object-space row is not the     ║
 * ║ production 0.15 m endpoint. At a fixed 150 mm object-to-image distance,     ║
 * ║ Gaussian conjugacy has two reciprocal roots. The retained branch is         ║
 * ║ continuous from infinity: BF = 51.521596085898 mm and m = -0.441357849      ║
 * ║ (about 1:2.266). The BF = 105.213561159128 mm, |m| > 1 branch is rejected.  ║
 * ║ Base d at 14A remains the published infinity ZD14 = 38.498 mm; the          ║
 * ║ 0.034 mm paraxial best-focus residual is retained as source-precision error.║
 * ║                                                                              ║
 * ║ SEMI-DIAMETERS: the patent gives none. SDs were inferred from Cosina's       ║
 * ║ official production optical section, normalized against the 30.640 mm       ║
 * ║ first-to-last-vertex track, then checked against marginal/chief-ray          ║
 * ║ envelopes. They were constrained by actual spherical/aspheric rim slope,    ║
 * ║ element edge thickness, shared-band cross-gap clearance, cemented-junction  ║
 * ║ containment, and render-trim diagnostics. They are modeling values, not      ║
 * ║ patent dimensions.                                                           ║
 * ║                                                                              ║
 * ║ No optional wavelength-cut filter, dust plate, sensor cover glass, dummy     ║
 * ║ plane, or mechanical part is included. No nC, nF, ng, or dPgF values are     ║
 * ║ published, so none are authored and no anomalous-dispersion claim is made.   ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "voigtlander-color-skopar-28mm-f28-aspherical-sl-iis",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER COLOR-SKOPAR 28mm f/2.8 Aspherical SL IIs",
  subtitle: "JP 2023-032663 A Example 1 — production-correlated rigid unit-focus model",
  specs: [
    "7 ELEMENTS / 6 GROUPS",
    "f = 29.430 mm (DESIGN)",
    "F/2.88 (DESIGN)",
    "74.8° MARKETED ANGLE OF VIEW",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 28,
  focalLengthDesign: 29.430296338029567,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2023-032663 A",
  patentAuthors: ["Yuki Shibata"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2023,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "Lp1",
      label: "Front positive meniscus",
      type: "Positive Meniscus (convex to object)",
      nd: 1.7725,
      vd: 49.63,
      fl: 65.23,
      glass: "N-LAF34 (SCHOTT optical equivalent; patent vendor unspecified)",
      apd: false,
      role: "Front correction lens; moderates distortion ahead of the negative front group.",
    },
    {
      id: 2,
      name: "L1",
      label: "Front-group negative meniscus",
      type: "Negative Meniscus (convex to object)",
      nd: 1.497,
      vd: 81.61,
      fl: -35.49,
      glass: "H-FK61 (CDGM optical equivalent; patent vendor unspecified)",
      apd: false,
      role: "Primary negative member of Gf; establishes the long-back-focus wide-angle form.",
    },
    {
      id: 3,
      name: "Ln1",
      label: "Cemented biconcave member",
      type: "Biconcave Negative",
      nd: 1.6133114659206547,
      fl: -15.32,
      glass: "Unmatched (nd inferred from published FL; νd omitted by patent)",
      apd: false,
      cemented: "J1",
      role: "Negative front member of the weakly positive cemented Gsa doublet.",
    },
    {
      id: 4,
      name: "Lp2",
      label: "Cemented biconvex member",
      type: "Biconvex Positive",
      nd: 1.8707,
      vd: 40.73,
      fl: 14.47,
      glass: "TAFD32 (HOYA optical equivalent; patent vendor unspecified)",
      apd: false,
      cemented: "J1",
      role: "Strong positive rear member of J1; the surface-6 cemented junction is assigned here.",
    },
    {
      id: 5,
      name: "L2",
      label: "Rear-group negative meniscus",
      type: "Negative Meniscus (concave to object)",
      nd: 1.84666,
      vd: 23.78,
      fl: -27.05,
      glass: "H-ZF52 (CDGM optical equivalent; patent vendor unspecified)",
      apd: false,
      role: "Dense-flint negative member immediately behind the stop.",
    },
    {
      id: 6,
      name: "L3",
      label: "Rear positive meniscus",
      type: "Positive Meniscus (convex to image)",
      nd: 1.59349,
      vd: 67,
      fl: 25.44,
      glass: "J-PSKH4 (Hikari optical equivalent; patent vendor unspecified)",
      apd: false,
      role: "Strong positive rear-group member with an almost planar object-side surface.",
    },
    {
      id: 7,
      name: "Le",
      label: "Final double-sided aspherical meniscus",
      type: "Positive Meniscus (2× Asph, convex to image)",
      nd: 1.61035,
      vd: 57.9,
      fl: 43.43,
      glass: "P-SK60 (SCHOTT optical equivalent; patent vendor unspecified)",
      apd: false,
      role: "Final positive corrector; both surfaces carry the patent's standard-K aspheres.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 46.15, d: 2.65, nd: 1.7725, elemId: 1, sd: 13.3 },
    { label: "2", R: 535.08, d: 0.15, nd: 1, elemId: 0, sd: 13.2 },
    { label: "3", R: 21.31, d: 1, nd: 1.497, elemId: 2, sd: 10 },
    { label: "4", R: 9.5, d: 4.87, nd: 1, elemId: 0, sd: 7.8 },
    { label: "5", R: -27.9, d: 1, nd: 1.6133114659206547, elemId: 3, sd: 7.2 },
    { label: "6", R: 14.36, d: 2.72, nd: 1.8707, elemId: 4, sd: 7.1 },
    { label: "7", R: -93.58, d: 2.77, nd: 1, elemId: 0, sd: 6.7 },
    { label: "STO", R: 1e15, d: 6.6, nd: 1, elemId: 0, sd: 5.424770527804603 },
    { label: "9", R: -10.53, d: 1, nd: 1.84666, elemId: 5, sd: 7.2 },
    { label: "10", R: -20.35, d: 0.15, nd: 1, elemId: 0, sd: 7.6 },
    { label: "11", R: -2886.42, d: 4.57, nd: 1.59349, elemId: 6, sd: 9.3 },
    { label: "12", R: -15.03, d: 0.15, nd: 1, elemId: 0, sd: 9.7 },
    { label: "13A", R: -48.45, d: 3.01, nd: 1.61035, elemId: 7, sd: 10.6 },
    { label: "14A", R: -17.54, d: 38.498, nd: 1, elemId: 0, sd: 10.6 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "13A": {
      K: -1.3663,
      A4: -7.2117e-6,
      A6: 2.3332e-8,
      A8: 2.6242e-9,
      A10: 5.812e-13,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: -1.2708,
      A4: 1.1229e-6,
      A6: 7.1873e-8,
      A8: 1.4566e-9,
      A10: 9.7907e-12,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacing: rigid unit focus ── */
  var: {
    "14A": [38.498, 51.52159608589783],
  },
  varLabels: [["14A", "BF"]],

  /* ── Patent group annotations ── */
  groups: [
    { text: "Gf", fromSurface: "1", toSurface: "4" },
    { text: "Gsa", fromSurface: "5", toSurface: "7" },
    { text: "Gsb", fromSurface: "9", toSurface: "14A" },
    { text: "Gs", fromSurface: "5", toSurface: "14A" },
  ],
  doublets: [{ text: "J1", fromSurface: "5", toSurface: "7" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.15,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION — rigid whole-lens unit focus with all internal gaps fixed. " +
    "The patent publishes a 180 mm object-space state. At the production 0.15 m object-to-image distance, " +
    "the reciprocal |m| > 1 root is rejected; the branch continuous from infinity gives BF = 51.521596 mm " +
    "and m = -0.44136 (about 1:2.266).",

  /* ── Aperture configuration ── */
  nominalFno: 2.88,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 9,

  /* ── Layout ── */
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
