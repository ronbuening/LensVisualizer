import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Minolta AF APO TELE 300mm f/2.8              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,518,229, Example 8 (Yasukuni / Minolta).        ║
 * ║  Telephoto lens with fixed positive front group and inner-focusing ║
 * ║  rear negative subunit II-2.                                       ║
 * ║  10 prescription elements / 8 prescription groups, all spherical.  ║
 * ║  Production catalog count is 11/9 because the rear filter is not   ║
 * ║  part of the patent optical prescription.                          ║
 * ║                                                                    ║
 * ║  Focus endpoint: patent Table 9 gives an 11.760 mm image-side      ║
 * ║  movement of subunit II-2 for a 3 m object distance. The production║
 * ║  lens focuses to 2.5 m, but that endpoint is not tabulated in the  ║
 * ║  patent.                                                          ║
 * ║                                                                    ║
 * ║  NOTE ON STOP / SEMI-DIAMETERS:                                    ║
 * ║    The patent does not publish clear apertures or a stop coordinate.║
 * ║    The stop is inserted in the 78.00 mm air gap after surface 6,   ║
 * ║    7.00 mm behind surface 6, preserving the patent axial spacing.  ║
 * ║    Semi-diameters were estimated from paraxial marginal and chief  ║
 * ║    ray envelopes, then constrained by the 114 mm front-filter      ║
 * ║    diameter, minimum edge thickness, and signed cross-gap sag.     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "minolta-af-300mm-f28",
  maker: "Minolta",
  name: "Minolta AF APO TELE 300mm f/2.8",
  subtitle: "US 4,518,229 Example 8 — Minolta / Yasukuni",
  specs: [
    "Patent Example 8: f = 295.0 mm, FN = 2.9",
    "Marketed as 300mm f/2.8",
    "10 prescription elements / 8 groups",
    "11 / 9 production count includes rear filter",
    "Inner focus to patent 3 m endpoint",
    "All spherical surfaces",
  ],

  focalLengthMarketing: 300,
  focalLengthDesign: 294.999,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["sony-a"],
  imageFormat: "135-full-frame",
  patentYear: 1985,
  elementCount: 10,
  groupCount: 8,
  apertureBlades: 9,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.4952,
      vd: 79.74,
      fl: 218.33,
      glass: "Unmatched fluorophosphate ED-class (495/797; not S-FPL51)",
      apd: "inferred",
      apdNote:
        "Anomalous partial dispersion is inferred from Minolta production literature; the patent gives only nd/vd.",
      role: "First large positive ED-class crown in the front collector group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.4952,
      vd: 79.74,
      fl: 202.12,
      glass: "Unmatched fluorophosphate ED-class (495/797; not S-FPL51)",
      apd: "inferred",
      apdNote:
        "Anomalous partial dispersion is inferred from Minolta production literature; the patent gives only nd/vd.",
      role: "Second positive ED-class crown, splitting the front-group positive power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6815,
      vd: 36.64,
      fl: -183.98,
      glass: "Unmatched dense flint class (682/366)",
      role: "Front-group negative flint used to balance the two low-dispersion positive crowns.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.65446,
      vd: 33.86,
      fl: -520.27,
      glass: "654339 - dense flint class (Hikari SF9 public code match)",
      role: "Concave leading element of rear subunit II-1; central surface-level aberration corrector in the patent claims.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.74,
      fl: 235.41,
      glass: "S-BSM14 class (OHARA; close vintage 603/607 match)",
      role: "Positive trailing element of subunit II-1.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.71736,
      vd: 29.42,
      fl: 96.15,
      glass: "S-TIH1 class (OHARA; close vintage 717/295 match)",
      role: "Dense-flint component of the weakly negative cemented corrector in the moving focus subunit.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.74,
      fl: -92.0,
      glass: "S-BSM14 class (OHARA; close vintage 603/607 match)",
      role: "Crown component paired with L6 in the first cemented doublet of the moving focus subunit.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.67,
      vd: 57.07,
      fl: -76.94,
      glass: "Unmatched high-index crown / lanthanum-crown class (670/571)",
      role: "Primary negative-power element of the moving focus subunit II-2.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.74,
      fl: 67.23,
      glass: "S-BSM14 class (OHARA; close vintage 603/607 match)",
      role: "Positive crown component of the final re-converging cemented doublet.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.65446,
      vd: 33.86,
      fl: -137.58,
      glass: "654339 - dense flint class (Hikari SF9 public code match)",
      role: "Negative flint component of the final cemented doublet, correcting L9 chromatic power.",
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 140.872, d: 16.0, nd: 1.4952, elemId: 1, sd: 56.0 },
    { label: "2", R: -447.513, d: 0.42, nd: 1.0, elemId: 0, sd: 53.85 },
    { label: "3", R: 115.956, d: 14.5, nd: 1.4952, elemId: 2, sd: 53.75 },
    { label: "4", R: -701.292, d: 2.52, nd: 1.0, elemId: 0, sd: 49.05 },
    { label: "5", R: -474.476, d: 3.7, nd: 1.6815, elemId: 3, sd: 46.25 },
    // Patent d6 = 78.00 mm. Split here to insert an inferred aperture stop: 7.00 + 71.00 = 78.00.
    { label: "6", R: 170.954, d: 7.0, nd: 1.0, elemId: 0, sd: 46.75 },
    { label: "STO", R: 1e15, d: 71.0, nd: 1.0, elemId: 0, sd: 42.3 },
    { label: "7", R: -131.706, d: 2.5, nd: 1.65446, elemId: 4, sd: 26.05 },
    { label: "8", R: -216.4, d: 1.35, nd: 1.0, elemId: 0, sd: 25.8 },
    { label: "9", R: 111.332, d: 4.0, nd: 1.60311, elemId: 5, sd: 25.55 },
    { label: "10", R: 508.815, d: 3.0, nd: 1.0, elemId: 0, sd: 24.65 },
    { label: "11", R: -1256.8, d: 6.5, nd: 1.71736, elemId: 6, sd: 23.7 },
    { label: "12", R: -65.525, d: 1.85, nd: 1.60311, elemId: 7, sd: 22.5 },
    { label: "13", R: 366.046, d: 3.15, nd: 1.0, elemId: 0, sd: 22.1 },
    { label: "14", R: -228.633, d: 1.7, nd: 1.67, elemId: 8, sd: 21.1 },
    { label: "15", R: 66.759, d: 22.0, nd: 1.0, elemId: 0, sd: 20.85 },
    { label: "16", R: 1084.8, d: 7.0, nd: 1.60311, elemId: 9, sd: 19.95 },
    { label: "17", R: -42.017, d: 1.6, nd: 1.65446, elemId: 10, sd: 19.7 },
    { label: "18", R: -79.965, d: 103.708841, nd: 1.0, elemId: 0, sd: 19.7 },
  ],

  asph: {},

  var: {
    "10": [3.0, 14.76],
    "15": [22.0, 10.24],
  },
  varLabels: [
    ["10", "D10"],
    ["15", "D15"],
  ],

  groups: [
    { text: "I", fromSurface: "1", toSurface: "6" },
    { text: "II-1", fromSurface: "7", toSurface: "10" },
    { text: "II-2 IF", fromSurface: "11", toSurface: "15" },
    { text: "II-3", fromSurface: "16", toSurface: "18" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "16", toSurface: "18" },
  ],

  focusDescription:
    "Inner focus by image-side translation of subunit II-2 (L6-L8). Patent Table 9 gives 11.760 mm travel for a 3 m object distance; production MFD is 2.5 m but is not tabulated in the patent.",

  closeFocusM: 3.0,
  nominalFno: 2.8,
  maxFstop: 32,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],

  scFill: 0.74,
  yScFill: 0.72,
  maxAspectRatio: 3.0,
} satisfies LensDataInput;

export default LENS_DATA;
