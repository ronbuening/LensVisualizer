import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — smc Pentax-A★ Macro 200mm F/4 ED                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,666,260 Example 1 / claim 5, Asahi Kogaku.      ║
 * ║  Positive-front / negative-rear telephoto macro, 10 elements /     ║
 * ║  9 groups, all spherical, fixed-rear extension focus to 1:1.       ║
 * ║                                                                    ║
 * ║  OCR note: surface 8 is +31.143 mm from the patent page image,      ║
 * ║  not +31.43 mm. The +31.43 reading gives EFL ≈196.34 mm and        ║
 * ║  BFL ≈73.33 mm, so the EFL/BFL trace rejects it. Surface 13 is      ║
 * ║  transcribed as -226.517 mm.                                       ║
 * ║                                                                    ║
 * ║  Aperture stop: patent Fig. 1 shows the iris in d13 just before     ║
 * ║  subgroup 2a but the table does not give an axial stop split.       ║
 * ║  STO is therefore placed 1.00 mm before surface 14. Surface 13 d    ║
 * ║  plus STO.d equals the patent d13 value.                            ║
 * ║                                                                    ║
 * ║  Semi-diameters: patent does not publish clear apertures. Values    ║
 * ║  were estimated from paraxial marginal/chief-ray envelopes, the     ║
 * ║  production 58 mm filter / 71 mm maximum diameter envelope, and     ║
 * ║  sag/edge-thickness checks. Full-field f/4 bundles vignette in      ║
 * ║  the front group; off-axis visual tracing is limited accordingly.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "pentax-a-200mm-f4-macro-ed",
  maker: "Pentax",
  name: "PENTAX SMC PENTAX-A★ 200mm f/4 MACRO ED",
  subtitle: "US 4,666,260 Example 1 — Asahi Kogaku / Takayuki Itoh",
  specs: [
    "10 elements / 9 groups",
    "f = 199.98 mm design",
    "F/4",
    "2ω = 12.4° patent field",
    "All-spherical",
    "Fixed-rear extension macro focus",
  ],

  focalLengthMarketing: 200,
  focalLengthDesign: 199.98,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["pentax-k"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,666,260",
  patentAuthors: ["Takayuki Itoh"],
  patentAssignees: ["Asahi Kogaku Kogyo Co Ltd"],
  patentYear: 1987,
  elementCount: 10,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.1,
      fl: 383.9,
      glass: "S-FSL5 (OHARA) / N-FK5 class",
      role: "Weak front low-dispersion positive meniscus in subgroup 1a.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 109.9,
      glass: "S-FPL51 (OHARA) / FCD1 class ED",
      apd: "inferred",
      apdNote: "ED fluorophosphate class; patent lists nd/vd only, not partial dispersion.",
      role: "Primary front positive ED element in subgroup 1a.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 143.7,
      glass: "S-FPL51 (OHARA) / FCD1 class ED",
      apd: "inferred",
      apdNote: "ED fluorophosphate class; patent lists nd/vd only, not partial dispersion.",
      role: "Second ED positive in subgroup 1a; shares the super-low-dispersion burden with L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6134,
      vd: 43.8,
      fl: -61.7,
      glass: "BPM4 (OHARA legacy, 613/438 short flint)",
      role: "Negative meniscus closing subgroup 1a and providing the front-cell dispersing partner.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.61293,
      vd: 37,
      fl: -114,
      glass: "S-TIM3 (OHARA, 613/370 flint)",
      role: "Negative member of the cemented doublet; its concave object-side surface is the governed divergent surface.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: 189,
      glass: "S-LAL14 (OHARA)",
      role: "Positive lanthanum crown cemented to L5; restores power and forms a chromatic correction junction.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.734,
      vd: 51.5,
      fl: 122.4,
      glass: "S-LAL59 (OHARA)",
      role: "High-index positive power element terminating the moving first group.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: 178,
      glass: "S-TIH6 (OHARA)",
      role: "Dense-flint positive at the front of negative rear subgroup 2a.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.8,
      fl: -48.2,
      glass: "S-LAL8 (OHARA) / N-LAK8 class",
      role: "Strong negative lanthanum-crown element giving subgroup 2a its large negative power.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      fl: 143.7,
      glass: "S-BSL7 (OHARA) / N-BK7 class",
      role: "Unitary positive rear lens 2b, separated from subgroup 2a by the governed d17 gap.",
    },
  ],

  surfaces: [
    { label: "1", R: 100.7, d: 4.5, nd: 1.48749, elemId: 1, sd: 29 },
    { label: "2", R: 214.834, d: 0.5, nd: 1, elemId: 0, sd: 28.7 },
    { label: "3", R: 56.079, d: 9.96, nd: 1.497, elemId: 2, sd: 31 },
    { label: "4", R: -2002.939, d: 0.5, nd: 1, elemId: 0, sd: 29 },
    { label: "5", R: 42.778, d: 7.32, nd: 1.497, elemId: 3, sd: 29 },
    { label: "6", R: 100.598, d: 2.82, nd: 1, elemId: 0, sd: 25.5 },
    { label: "7", R: 181.169, d: 2.8, nd: 1.6134, elemId: 4, sd: 23.5 },
    { label: "8", R: 31.143, d: 12.41, nd: 1, elemId: 0, sd: 22 },
    { label: "9", R: -59.122, d: 2.5, nd: 1.61293, elemId: 5, sd: 18.2 },
    { label: "10", R: -389.821, d: 3.68, nd: 1.6968, elemId: 6, sd: 18 },
    { label: "11", R: -98.827, d: 0.2, nd: 1, elemId: 0, sd: 17.8 },
    { label: "12", R: 147.652, d: 4.59, nd: 1.734, elemId: 7, sd: 17.8 },
    { label: "13", R: -226.517, d: 6.53, nd: 1, elemId: 0, sd: 17 },
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 13.54 },
    { label: "14", R: -167.918, d: 2.5, nd: 1.80518, elemId: 8, sd: 14.5 },
    { label: "15", R: -77.836, d: 0.7, nd: 1, elemId: 0, sd: 14.5 },
    { label: "16", R: -95.674, d: 5.5, nd: 1.713, elemId: 9, sd: 14.4 },
    { label: "17", R: 54.994, d: 39.83, nd: 1, elemId: 0, sd: 14.2 },
    { label: "18", R: 95.94, d: 4.3, nd: 1.51633, elemId: 10, sd: 20.5 },
    { label: "19", R: -321.938, d: 76.9, nd: 1, elemId: 0, sd: 20.5 },
  ],

  asph: {},
  var: {
    "13": [6.53, 61.58],
  },
  varLabels: [["13", "D13"]],
  groups: [
    { text: "1a", fromSurface: "1", toSurface: "8" },
    { text: "1b", fromSurface: "9", toSurface: "13" },
    { text: "2a", fromSurface: "14", toSurface: "17" },
    { text: "2b", fromSurface: "18", toSurface: "19" },
  ],
  doublets: [{ text: "D1", fromSurface: "9", toSurface: "11" }],

  closeFocusM: 0.55,
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  rayLeadFrac: 0.28,
  offAxisFieldFrac: 0.35,
  scFill: 0.7,
  yScFill: 0.56,
  focusDescription:
    "Fixed-rear extension: the first lens group moves toward the object. The data varies surface 13 so that D13 + STO.d equals the patent d13 spacing.",
} satisfies LensDataInput;

export default LENS_DATA;
