import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VOIGTLÄNDER APO-SKOPAR 90mm f/2.8                           ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2023-049919 A, Example 1 (Cosina Co., Ltd.).             ║
 * ║ Production correlation: Voigtländer APO-SKOPAR 90mm F2.8 VM and SL IIs.  ║
 * ║ 7 elements / 7 groups, all spherical.                                    ║
 * ║ Focus status: PUBLISHED. The complete optical assembly extends as a unit; ║
 * ║ only the surface-15-to-image gap varies, from 39.64 mm at infinity to     ║
 * ║ 50.34 mm at the patent's ZD0 = 800 mm state.                              ║
 * ║                                                                            ║
 * ║ No scale factor is applied. Radii, thicknesses, indices, and focus gaps   ║
 * ║ preserve the patent table. The optional sensor/protective plate and       ║
 * ║ filters mentioned in paragraph 0041 are excluded.                         ║
 * ║                                                                            ║
 * ║ Semi-diameters are inferred because the patent publishes none. They are   ║
 * ║ constrained by the F/2.88 stop/pupil solution, the Figure 1 section       ║
 * ║ proportions, exact spherical edge thickness and rim slope, shared-gap     ║
 * ║ sag clearance, and representative LensVisualizer on/off-axis ray fans.    ║
 * ║ The physical stop radius 8.8456 mm is reverse-derived from the modeled    ║
 * ║ EFL and the patent's F/2.88; it is not a published stop dimension. Its    ║
 * ║ stored precision gives modeled F/2.880007 for nominalFno.                  ║
 * ║                                                                            ║
 * ║ The patent supplies only nd and νd. Glass vendor identities and           ║
 * ║ nC/nF/ng/dPgF are therefore not asserted; six-digit/class labels preserve ║
 * ║ the verified optical positions without inventing spectral data.           ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "voigtlander-apo-skopar-90f28",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER APO-SKOPAR 90mm f/2.8 VM / SL IIs",
  subtitle: "JP 2023-049919 A Example 1 — Cosina / Yuki Shibata",
  specs: [
    "7 ELEMENTS / 7 GROUPS",
    "MODELED EFL 87.26 mm",
    "PUBLISHED F/2.88",
    "2ω = 27.44°",
    "ALL-SPHERICAL UNIT FOCUS",
  ],

  focalLengthMarketing: 90,
  focalLengthDesign: 87.26085,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["leica-m", "nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2023-049919 A",
  patentAuthors: ["Yuki Shibata"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2023,
  elementCount: 7,
  groupCount: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus (convex to object)",
      nd: 1.72916,
      vd: 54.67,
      fl: 80.72666,
      glass: "TAC8 (HOYA optical equivalent; patent vendor unspecified)",
      role: "Front positive collector in the five-element positive front functional group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus (convex to object)",
      nd: 1.437,
      vd: 95.1,
      fl: 96.75289,
      glass: "FCD100 (HOYA optical equivalent; patent vendor unspecified)",
      role: "Very-low-index, high-Abbe positive element satisfying patent Conditions 1 and 2.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus (convex to object)",
      nd: 1.437,
      vd: 95.1,
      fl: 86.3251,
      glass: "FCD100 (HOYA optical equivalent; patent vendor unspecified)",
      role: "Second very-low-index, high-Abbe positive element satisfying patent Conditions 1 and 2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus (convex to object)",
      nd: 1.65412,
      vd: 39.68,
      fl: -29.83801,
      glass: "N-KZFS5 (SCHOTT optical equivalent; patent vendor unspecified)",
      role: "Strong negative meniscus that begins the negative portion of the front functional group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus (convex to object)",
      nd: 1.90366,
      vd: 31.32,
      fl: -83.55088,
      glass: "N-LASF46B (SCHOTT optical equivalent; patent vendor unspecified)",
      role: "Compact high-index negative meniscus immediately ahead of the aperture stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 43.94,
      fl: 28.61083,
      glass: "NBFD11 (HOYA optical equivalent; patent vendor unspecified)",
      role: "Strong positive element of the separated rear functional group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus (convex to image)",
      nd: 1.788,
      vd: 47.35,
      fl: -42.8487,
      glass: "J-LASF014 (Hikari optical equivalent; patent vendor unspecified)",
      role: "Rear negative meniscus completing the positive rear functional group.",
    },
  ],

  surfaces: [
    { label: "1", R: 40.74, d: 3.42, nd: 1.72916, elemId: 1, sd: 18.0 },
    { label: "2", R: 127.64, d: 0.15, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "3", R: 31.12, d: 4.02, nd: 1.437, elemId: 2, sd: 16.8 },
    { label: "4", R: 113.26, d: 0.23, nd: 1.0, elemId: 0, sd: 16.8 },
    { label: "5", R: 22.57, d: 4.63, nd: 1.437, elemId: 3, sd: 15.5 },
    { label: "6", R: 52.68, d: 2.32, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "7", R: 115.61, d: 1.2, nd: 1.65412, elemId: 4, sd: 13.8 },
    { label: "8", R: 16.63, d: 3.64, nd: 1.0, elemId: 0, sd: 13.8 },
    { label: "9", R: 48.92, d: 1.2, nd: 1.90366, elemId: 5, sd: 11.3 },
    { label: "10", R: 29.34, d: 3.0, nd: 1.0, elemId: 0, sd: 11.3 },
    { label: "STO", R: 1e15, d: 14.19, nd: 1.0, elemId: 0, sd: 8.8456 },
    { label: "12", R: 82.06, d: 5.49, nd: 1.7859, elemId: 6, sd: 14.3 },
    { label: "13", R: -30.06, d: 1.4, nd: 1.0, elemId: 0, sd: 14.3 },
    { label: "14", R: -31.02, d: 1.3, nd: 1.788, elemId: 7, sd: 14.4 },
    { label: "15", R: -388.64, d: 39.64, nd: 1.0, elemId: 0, sd: 14.4 },
  ],

  asph: {},

  var: {
    "15": [39.64, 50.34],
  },
  varLabels: [["15", "BF"]],

  groups: [
    { text: "FRONT (101)", fromSurface: "1", toSurface: "10" },
    { text: "REAR (102)", fromSurface: "12", toSurface: "15" },
  ],
  doublets: [],

  closeFocusM: 0.9,
  focusDescription:
    "PUBLISHED unit focus: the full optical assembly extends 10.70 mm; BF changes from 39.64 mm at infinity to 50.34 mm at the patent's ZD0 = 800 mm state.",

  nominalFno: 2.88000737,
  fstopSeries: [2.88000737, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.55,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
