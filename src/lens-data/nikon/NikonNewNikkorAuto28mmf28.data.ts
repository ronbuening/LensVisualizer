import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON NIKKOR AUTO 28mm f/2.8                              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 3,635,546, Example 2 (Ikuo Mori / Nippon Kogaku K.K.).         ║
 * ║ Seven all-spherical singlets in seven air-separated groups.                ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION.                                  ║
 * ║                                                                            ║
 * ║ Scaling: the patent example is normalized to f=100. Every dimensional      ║
 * ║ prescription value is uniformly scaled by s=0.28 to a nominal 28 mm       ║
 * ║ representation. The computed EFL is 27.997895125 mm; the source BFL        ║
 * ║ remains a distinct scaled image-plane spacing of 38.8696 mm.               ║
 * ║                                                                            ║
 * ║ Stop model: Fig. 3 shows an unnumbered iris inside source gap d9=20.67.    ║
 * ║ A drawing measurement places it about 22% of the gap from R9; this model   ║
 * ║ uses q=4.65 patent units (1.302 mm after scaling), leaving 4.4856 mm to    ║
 * ║ R10. The stop semi-diameter is calibrated from the patent F/2.8 target;     ║
 * ║ matching F/2.8 therefore does not independently verify a published iris    ║
 * ║ diameter.                                                                  ║
 * ║                                                                            ║
 * ║ Semi-diameters are figure-inferred; see the integration note below.
 * ║ Production correlation: Nikon identifies the 1974 new Nikkor Auto 28mm    ║
 * ║ f/2.8 and states that the 1977 AI version retained its optics. A Nikon     ║
 * ║ sales-literature scan gives 28 mm, f/2.8, 7/7 construction, 74° coverage, ║
 * ║ and 0.3 m minimum focus. Exact manufacturer attribution of this patent     ║
 * ║ example remains a correlation, not a Nikon-confirmed prescription match.  ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

/** Semi-diameters were refined against US3635546.pdf, p. 2, Fig. 3 at 600 dpi on 2026-09-13 UTC.
 * Optical rims, excluding beveled blanks and labels, use 29.91 micrometers/pixel. These are figure estimates,
 * not published apertures. The calibrated stop is unchanged; extreme-field vignetting remains possible. */
const LENS_DATA = {
  key: "nikon-new-nikkor-auto-28mm-f28",
  maker: "Nikon",
  name: "NIKON NIKKOR AUTO 28mm f/2.8",
  subtitle: "US 3,635,546 — Example 2; uniformly scaled ×0.28; production correlation provisional",
  specs: ["7 ELEMENTS / 7 GROUPS", "DESIGN EFL ≈ 27.998 mm", "MODELED f/2.8", "PATENT 2ω = 76°"],

  focalLengthMarketing: 28,
  focalLengthDesign: 27.997895125364636,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,635,546",
  patentAuthors: ["Ikuo Mori"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1972,
  elementCount: 7,
  groupCount: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.64831,
      vd: 33.8,
      indexReference: "d",
      fl: 159.9710803004095,
      glass: "648338 — flint coordinate class (supplier unresolved)",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      fl: -34.380519434099014,
      glass: "620603 — barium-crown class (S-BSM16 coordinate equivalent; supplier unresolved)",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.6583,
      vd: 57.3,
      indexReference: "d",
      fl: -48.38754693957811,
      glass: "658573 — lanthanum-crown class (K-LaK11 coordinate equivalent; supplier unresolved)",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6695,
      vd: 51.5,
      indexReference: "d",
      fl: 21.42327266307717,
      glass: "670515 — high-index crown (H-LaK67 coordinate-compatible dispersion proxy; supplier unresolved)",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.74,
      vd: 28.2,
      indexReference: "d",
      fl: -19.13823628417871,
      glass: "740282 — dense-flint class (exact catalog coordinate; supplier unresolved)",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      fl: 37.445319808889316,
      glass: "620603 — barium-crown class (S-BSM16 coordinate equivalent; supplier unresolved)",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      fl: 37.194981611101554,
      glass: "697556 — lanthanum-crown class (K-LaK14 coordinate equivalent; supplier unresolved)",
    },
  ],

  surfaces: [
    { label: "1", R: 51.3688, d: 2.59, nd: 1.64831, elemId: 1, sd: 14.6 },
    { label: "2", R: 99.764, d: 0.056, nd: 1.0, elemId: 0, sd: 14.6 },
    { label: "3", R: 39.6844, d: 1.1032, nd: 1.62041, elemId: 2, sd: 12.7 },
    { label: "4", R: 13.7256, d: 3.8584, nd: 1.0, elemId: 0, sd: 9.9 },
    { label: "5", R: 21.9912, d: 0.826, nd: 1.6583, elemId: 3, sd: 10.1 },
    { label: "6", R: 12.8156, d: 7.4956, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "7", R: 22.9852, d: 11.354, nd: 1.6695, elemId: 4, sd: 7.5 },
    { label: "8", R: -30.59, d: 1.302, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "STO", R: 1e15, d: 4.4856, nd: 1.0, elemId: 0, sd: 6.857989680076686 },
    { label: "9", R: -20.6696, d: 0.826, nd: 1.74, elemId: 5, sd: 7.2 },
    { label: "10", R: 45.7492, d: 1.652, nd: 1.0, elemId: 0, sd: 6.5 },
    { label: "11", R: -51.2596, d: 1.82, nd: 1.62041, elemId: 6, sd: 7.4 },
    { label: "12", R: -16.2036, d: 0.056, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "13", R: 3858.4, d: 1.848, nd: 1.6968, elemId: 7, sd: 8.2 },
    { label: "14", R: -26.0876, d: 38.8696, nd: 1.0, elemId: 0, sd: 8.2 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [
    { text: "FRONT DIVERGING L1–L3", fromSurface: "1", toSurface: "6" },
    { text: "REAR L4–L7", fromSurface: "7", toSurface: "14" },
  ],
  doublets: [],

  closeFocusM: 0.3,
  focusDescription:
    "Infinity prescription only. The production lens focuses to 0.3 m, but no finite-focus optical state is published.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.65,
} satisfies LensDataInput;

export default LENS_DATA;
