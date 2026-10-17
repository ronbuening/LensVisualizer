import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║ whole-lens unit focus. Its published 180 mm row is an exact keyframe, not   ║
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
  schema: 2,
  key: "voigtlander-color-skopar-28mm-f28-aspherical-sl-iis",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER COLOR-SKOPAR 28mm f/2.8 Aspherical SL IIs",
  subtitle: "JP 2023-032663 A Example 1 — production-correlated rigid unit-focus model",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "7 ELEMENTS / 6 GROUPS",
      "EFL 29.430 mm MODEL / 29.4 mm PATENT",
      "28 mm / f/2.8 MARKETED",
      "F/2.88 PATENT",
      "74.8° MARKETED AOV",
      "2 ASPHERICAL SURFACES",
    ],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: { marketing: 28, design: 29.430296338029567 },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "JP 2023-032663 A",
    patentYear: 2023,
    authors: ["Yuki Shibata"],
    assignees: ["Cosina Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "Lp1",
      label: "Front positive meniscus",
      type: "Positive Meniscus (convex to object)",
      nd: 1.7725,
      vd: 49.63,
      focalLengthMm: 65.23,
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
      focalLengthMm: -35.49,
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
      focalLengthMm: -15.32,
      glass: "Unmatched (nd inferred from published FL; νd omitted by patent)",
      apd: false,
      role: "Negative front member of the weakly positive cemented Gsa doublet.",
      cemented: "J1",
    },
    {
      id: 4,
      name: "Lp2",
      label: "Cemented biconvex member",
      type: "Biconvex Positive",
      nd: 1.8707,
      vd: 40.73,
      focalLengthMm: 14.47,
      glass: "TAFD32 (HOYA optical equivalent; patent vendor unspecified)",
      apd: false,
      role: "Strong positive rear member of J1; the surface-6 cemented junction is assigned here.",
      cemented: "J1",
    },
    {
      id: 5,
      name: "L2",
      label: "Rear-group negative meniscus",
      type: "Negative Meniscus (concave to object)",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -27.05,
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
      focalLengthMm: 25.44,
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
      focalLengthMm: 43.43,
      glass: "P-SK60 (SCHOTT optical equivalent; patent vendor unspecified)",
      apd: false,
      role: "Final positive corrector; both surfaces carry the patent's standard-K aspheres.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 46.15, d: 2.65, sd: 13.3, medium: 1 },
    { label: "2", R: 535.08, d: 0.15, sd: 13.2 },
    { label: "3", R: 21.31, d: 1, sd: 10, medium: 2 },
    { label: "4", R: 9.5, d: 4.87, sd: 7.8 },
    { label: "5", R: -27.9, d: 1, sd: 7.2, medium: 3 },
    { label: "6", R: 14.36, d: 2.72, sd: 7.1, medium: 4 },
    { label: "7", R: -93.58, d: 2.77, sd: 6.7 },
    { label: "STO", R: "flat", d: 6.6 },
    { label: "9", R: -10.53, d: 1, sd: 7.2, medium: 5 },
    { label: "10", R: -20.35, d: 0.15, sd: 7.6 },
    { label: "11", R: -2886.42, d: 4.57, sd: 9.3, medium: 6 },
    { label: "12", R: -15.03, d: 0.15, sd: 9.7 },
    {
      label: "13A",
      R: -48.45,
      d: 3.01,
      sd: 10.6,
      medium: 7,
      asphere: { K: -1.3663, A4: -7.2117e-6, A6: 2.3332e-8, A8: 2.6242e-9, A10: 5.812e-13 },
    },
    {
      label: "14A",
      R: -17.54,
      sd: 10.6,
      asphere: { K: -1.2708, A4: 1.1229e-6, A6: 7.1873e-8, A8: 1.4566e-9, A10: 9.7907e-12 },
    },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.15,
    /* ── Variable air spacing: rigid unit focus ── */
    keyframes: [0, 0.5867164672392103, 1],
    description:
      "CONSTRAINED_RECONSTRUCTION — rigid whole-lens unit focus with all internal gaps fixed. " +
      "The patent's 180 mm object-space state is exact. At the production 0.15 m object-to-image distance, " +
      "the reciprocal |m| > 1 root is rejected; the branch continuous from infinity gives BF = 51.521596 mm " +
      "and m = -0.44136 (about 1:2.266).",
    // (moved from publishedStations) The intermediate focus row is source-tabulated; the close endpoint is reconstructed.
    published: [1],
  },

  gaps: { "14A": { label: "BF", values: [[38.498, 43.33, 51.52159608589783]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.88, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  /* ── Patent group annotations ── */
  groups: [
    { text: "Gf", fromSurface: "1", toSurface: "4" },
    { text: "Gsa", fromSurface: "5", toSurface: "7" },
    { text: "Gsb", fromSurface: "9", toSurface: "14A" },
    { text: "Gs", fromSurface: "5", toSurface: "14A" },
  ],
  doublets: [{ text: "J1", fromSurface: "5", toSurface: "7" }],

  /* ── Layout ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
