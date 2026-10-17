import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MINOLTA MC W.ROKKOR-SG 28mm f/3.5 (v2 correlation)          ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 1969-025743 B, Example 2 (Toshinobu Ogura / Minolta).    ║
 * ║ Seven elements / seven groups; all spherical/plane.                      ║
 * ║                                                                          ║
 * ║ SOURCE CORRECTIONS:                                                       ║
 * ║   The raw Example 2 table prints r9 = +0.5260 and r12 = -5421.           ║
 * ║   Same-example Petzval data on the following patent page require         ║
 * ║   r9 = -0.5260 and r12 = -0.5421. Raw values are recorded in the companion audit.    ║
 * ║                                                                          ║
 * ║ SCALING:                                                                  ║
 * ║   Patent Example 2 is normalized to f = 1. All dimensional prescription  ║
 * ║   values are uniformly scaled ×28. Indices and Abbe numbers are          ║
 * ║   unchanged. No aspheric coefficients exist. The final surface d uses    ║
 * ║   the scaled published BFD: 1.32 × 28 = 36.96 mm.                        ║
 * ║                                                                          ║
 * ║ STOP MODEL:                                                               ║
 * ║   The patent publishes f/3.5 but no physical stop plane or diameter.      ║
 * ║   One inferred STO is placed near the rear of the large d6 inter-group   ║
 * ║   gap at z = 31.000000 mm from surface 1. The original 20.588400 mm d6  ║
 * ║   is split into 19.462880 mm + 1.125520 mm with exact track             ║
 * ║   conservation. The stop radius is derived from the design f-number. The ║
 * ║   former paraxial calibration gave modeled f/3.499999895 (source         ║
 * ║   target f/3.5), retained as the design f-number. That agreement is not  ║
 * ║   independent evidence for an unpublished physical diaphragm diameter.   ║
 * ║                                                                          ║
 * ║ SEMI-DIAMETERS:                                                           ║
 * ║   No SDs are published. Modeled SDs enclose: (1) the full on-axis        ║
 * ║   marginal bundle, (2) the project default ±0.75-pupil exact spherical   ║
 * ║   bundle at 0.60 × the published 37.5° half-field, and (3) the exact    ║
 * ║   chief ray at the full 37.5° half-field. Initial ray-envelope SDs were rounded    ║
 * ║   upward with ray clearance; the figure audit below enlarges the front trio.   ║
 * ║   These are modeled clear apertures, not manufacturer dimensions.        ║
 * ║                                                                          ║
 * ║ FOCUS:                                                                    ║
 * ║   NO_INTERNAL_RECONSTRUCTION. The patent supplies one fixed state only.  ║
 * ║   closeFocusM = 0.6 is product metadata; no internal focus var is        ║
 * ║   invented.                                                               ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * MTF source audit: Example 2 retains published BF=1.32 ×28 =36.96 mm.
 * With the already documented Petzval-supported R9/R12 source emendations,
 * paraxial BFL is 36.714083 mm (offset −0.245917 mm), EFL 28.009933 mm.
 * All other printed values match; no plate is present. Preserve the source BF.
 */

// FIG. 1 optical-rim audit: S1-S6 = 21.0/19.0/18.5/18.5/15.0/13.5 mm. Rear SDs retain ray-envelope estimates. All remain modeled, not source dimensions.
const LENS_DATA = {
  schema: 2,
  key: "minolta-mc-w-rokkor-sg-28f35-v2",
  maker: "Minolta",
  name: "MINOLTA MC W.ROKKOR-SG 28mm f/3.5",
  subtitle: "JP 1969-025743 B, Example 2 — scaled ×28; production correlation, not manufacturer-confirmed attribution",

  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: ["7 elements / 7 groups", "28mm", "f/3.5", "2ω = 75° (patent)"],
    elementCount: 7,
    groupCount: 7,
    focalLengthMm: { marketing: 28, design: 28.009933 },
    fNumber: { marketing: 3.5, design: 3.499999895 },
  },

  source: {
    patentNumber: "JP 1969-025743 B",
    patentYear: 1969,
    authors: ["Toshinobu Ogura"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6583,
      vd: 58.5,
      indexReference: "d",
      focalLengthMm: -86.046206,
      glass: "K-LaK11 class (coordinate-compatible spectral proxy; native d 1.6583/58.5; supplier/melt unproven)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.75,
      vd: 35,
      indexReference: "d",
      focalLengthMm: 139.813333,
      glass: "LAFN7 class (coordinate-compatible spectral proxy; coordinate code 750350; supplier/melt unproven)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      focalLengthMm: -87.187046,
      glass: "N-BK7 class (coordinate-compatible spectral proxy; coordinate code 517642; supplier/melt unproven)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.67,
      vd: 47.2,
      indexReference: "d",
      focalLengthMm: 29.767722,
      glass:
        "S-BAH10 class (coordinate-compatible spectral proxy; coordinate code 670472/670473; supplier/melt unproven)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7006,
      vd: 30.1,
      indexReference: "d",
      focalLengthMm: -15.57915,
      glass: "SF15 class (coordinate-compatible spectral proxy; native d 1.7006/30.1; supplier/melt unproven)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      focalLengthMm: 25.861804,
      glass: "LAC10 class (coordinate-compatible spectral proxy; coordinate code 720503; supplier/melt unproven)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Plano-Convex Positive",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      focalLengthMm: 47.152477,
      glass: "N-BK7 class (coordinate-compatible spectral proxy; coordinate code 517642; supplier/melt unproven)",
    },
  ],

  surfaces: [
    { label: "1", R: 145.516, d: 1.2012, sd: 21.0, medium: 1 },
    { label: "2", R: 40.6392, d: 6.3, sd: 19.0 },
    { label: "3", R: "flat", d: 2.94, sd: 18.5, medium: 2 },
    { label: "4", R: -104.86, d: 0.196, sd: 18.5 },
    { label: "5", R: 40.5524, d: 0.89992, sd: 15.0, medium: 3 },
    { label: "6", R: 21.182, d: 19.46288, sd: 13.5 },
    { label: "STO", R: "flat", d: 1.12552 },
    { label: "7", R: 20.5828, d: 3.7408, sd: 6, medium: 4 },
    { label: "8", R: -596.12, d: 5.852, sd: 6 },
    { label: "9", R: -14.728, d: 2.0496, sd: 7, medium: 5 },
    { label: "10", R: 44.5732, d: 1.428, sd: 7 },
    { label: "11", R: -77.8092, d: 1.904, sd: 7.5, medium: 6 },
    { label: "12", R: -15.1788, d: 0.1008, sd: 7.5 },
    { label: "13", R: "flat", d: 2.1, sd: 8.2, medium: 7 },
    { label: "14", R: -24.3684, d: 36.96, sd: 8.2 },
  ],

  focus: {
    closeFocusM: 0.6,
    description:
      "Focus travel is not modeled: JP 1969-025743 B, Example 2 supplies one fixed optical state only; 0.6 m is production minimum-focus metadata and no internal focus motion is modeled.",
  },

  aperture: { nominalFNumber: 3.499999895, fStops: [3.5, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "FRONT NEGATIVE GROUP", fromSurface: "1", toSurface: "6" },
    { text: "REAR POSITIVE GROUP", fromSurface: "7", toSurface: "14" },
  ],
  doublets: [],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
