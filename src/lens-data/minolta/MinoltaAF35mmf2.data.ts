import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║              LENS DATA — MINOLTA AF 35mm f/2                             ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP1988-201614 A, Example 4 (Minolta Camera Co., Ltd.).           ║
 * ║  Production correlation: Minolta AF 35mm f/2, service code 2597-100.      ║
 * ║  7 elements / 6 air-separated groups; all spherical.                     ║
 * ║                                                                            ║
 * ║  SCALE: The patent example is normalized to f=100. All dimensional        ║
 * ║  prescription values are uniformly scaled ×0.35, giving EFL              ║
 * ║  35.000165853 mm. Indices and Abbe values are unchanged.                  ║
 * ║                                                                            ║
 * ║  STOP INFERENCE: The patent gives only that stop S lies in d7. Fresh     ║
 * ║  digitization of patent Fig. 4 places it at ≈45.6% of r7→r8 from r7;     ║
 * ║  the service sketch is consistent with near-midgap. The model uses 46.0%: ║
 * ║  r7→STO = 4.019365 mm and STO→r8 = 4.718385 mm, preserving the exact      ║
 * ║  scaled d7 sum of 8.737750 mm. STO sd = 9.596950110 mm is solved so the  ║
 * ║  paraxial entrance pupil gives modeled f/2.000000.                        ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent publishes none. SDs are inferred from the     ║
 * ║  patent/service optical sections, full-field chief rays, on-axis f/2      ║
 * ║  marginal rays, and the viewer's default 0.6-field / ±0.75-pupil bundle. ║
 * ║  They satisfy edge-thickness, rim-slope, cross-gap, and containment       ║
 * ║  checks without using layout controls to conceal invalid geometry.        ║
 * ║                                                                            ║
 * ║  FOCUS — CONSTRAINED_RECONSTRUCTION: The patent has no finite-focus row.  ║
 * ║  The Minolta service manual states that all optical lenses translate      ║
 * ║  together and gives 0.300 m MFD. Internal spacings are therefore fixed;  ║
 * ║  only the rear image gap varies. The 0.300 m value is modeled as          ║
 * ║  object-to-image-plane distance. BF changes from 36.398842615 mm at       ║
 * ║  infinity to 42.338034718 mm at MFD (+5.939192103 mm unit extension).     ║
 * ║                                                                            ║
 * ║  GLASS: The patent explicitly gives d-line (587.6 nm) nd/νd and no       ║
 * ║  supplier. Fresh catalog checks support supplier-neutral coefficient      ║
 * ║  proxies; no vendor provenance, APO, APD, or line data are added.         ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "minolta-af-35mm-f2",
  maker: "Minolta",
  name: "MINOLTA AF 35mm f/2",
  subtitle: "JP1988-201614 A Example 4 — scaled ×0.35; production correlation to Minolta AF 35mm f/2",
  specs: [
    "7 ELEMENTS / 6 GROUPS",
    "35mm MARKETING / 35.0002mm MODELED",
    "f/2",
    "2ω = 64° PATENT / 63° SERVICE MANUAL",
    "ALL-SPHERICAL",
    "UNIT FOCUS",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.000165853,
  apertureMarketing: 2,
  apertureDesign: 2,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "JP1988-201614 A",
  patentAuthors: ["Hisashi Tokumaru"],
  patentAssignees: ["Minolta Camera Co., Ltd."],
  patentYear: 1988,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.53172,
      vd: 48.84,
      fl: -44.860855,
      glass: "532488 — extra-light-flint / TIL-class coordinate (supplier unresolved)",
      apd: false,
      role: "Front negative retrofocus element",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.05,
      fl: 29.326107,
      glass: "S-LAH60 coefficient proxy (supplier unspecified; patent 834371)",
      apd: false,
      role: "Strong positive front-group collector",
    },
    {
      id: 3,
      name: "L3a",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.69895,
      vd: 30.05,
      fl: -48.221833,
      glass: "699301 — dense-flint class coordinate (supplier unresolved)",
      apd: false,
      cemented: "D1",
      role: "Negative half of the cemented third patent component",
    },
    {
      id: 4,
      name: "L3b",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.7725,
      vd: 49.77,
      fl: 40.396117,
      glass: "J-LASF016 coefficient proxy (supplier unspecified; patent 773498)",
      apd: false,
      cemented: "D1",
      role: "Positive half of the cemented third patent component",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.43,
      fl: -21.705122,
      glass: "805254 — SF6-class coordinate (supplier unresolved)",
      apd: false,
      role: "Rear negative element immediately behind the aperture stop",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.7859,
      vd: 44.2,
      fl: 53.637893,
      glass: "786442 — lanthanum-flint class coordinate (supplier unresolved)",
      apd: false,
      role: "Positive rear corrector",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.77,
      fl: 40.806326,
      glass: "J-LASF016 coefficient proxy (supplier unspecified; patent 773498)",
      apd: false,
      role: "Final positive relay / field-side element",
    },
  ],

  /* ── Surface prescription: JP1988-201614 Example 4 × 0.35 ── */
  surfaces: [
    { label: "1", R: 61.19155, d: 1.45285, nd: 1.53172, elemId: 1, sd: 14.5 },
    { label: "2", R: 17.02155, d: 12.4684, nd: 1, elemId: 0, sd: 14.5 },
    { label: "3", R: 35.32445, d: 9.0125, nd: 1.834, elemId: 2, sd: 12.7 },
    { label: "4", R: -70.2828, d: 1.4728, nd: 1, elemId: 0, sd: 12.7 },
    { label: "5", R: -33.70465, d: 1.4728, nd: 1.69895, elemId: 3, sd: 11.5 },
    { label: "6", R: 1e15, d: 3.63265, nd: 1.7725, elemId: 4, sd: 11.5 },
    { label: "7", R: -31.206, d: 4.019365, nd: 1, elemId: 0, sd: 11.5 },
    // Stop position inferred at 46.0% of the published d7 gap from r7; see file header.
    { label: "STO", R: 1e15, d: 4.718385, nd: 1, elemId: 0, sd: 9.59695011 },
    { label: "8", R: -24.70195, d: 2.0125, nd: 1.80518, elemId: 5, sd: 9.3 },
    { label: "9", R: 61.9192, d: 2.0125, nd: 1, elemId: 0, sd: 9.5 },
    { label: "10", R: -45.88115, d: 2.6999, nd: 1.7859, elemId: 6, sd: 9.5 },
    { label: "11", R: -22.53825, d: 0.11795, nd: 1, elemId: 0, sd: 10.8 },
    { label: "12", R: 152.56255, d: 3.927, nd: 1.7725, elemId: 7, sd: 11 },
    { label: "13", R: -39.2868, d: 36.398842615, nd: 1, elemId: 0, sd: 11.7 },
  ],

  asph: {},

  /* ── Focus reconstruction: unit focus, rear image gap only ── */
  var: {
    "13": [36.398842615, 42.338034718],
  },
  varLabels: [["13", "BF"]],

  groups: [
    { text: "FRONT LENS SET", fromSurface: "1", toSurface: "7" },
    { text: "REAR LENS SET", fromSurface: "8", toSurface: "13" },
  ],
  doublets: [{ text: "D1 / patent L3", fromSurface: "5", toSurface: "7" }],

  closeFocusM: 0.3,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION — rigid unit focus. The patent publishes no finite-focus spacings; the Minolta service manual states that all optical lenses translate together and gives 0.300 m MFD. The model treats 0.300 m as object-to-image-plane distance, preserves every internal spacing, and varies only BF from 36.398842615 to 42.338034718 mm (+5.939192103 mm extension).",

  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,
  maxFstop: 22,

  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
