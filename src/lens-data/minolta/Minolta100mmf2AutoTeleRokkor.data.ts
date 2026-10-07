import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MINOLTA AUTO TELE ROKKOR 100mm f/2                          ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP1963-011590, Example 2 (Minolta Camera Co., Ltd.).        ║
 * ║  Six elements / five air-separated groups; all spherical.                 ║
 * ║  Production correlation is convergent, not manufacturer-confirmed patent  ║
 * ║  attribution. The manufacturer brochure matches 100mm f/2, 6/5, and 24°. ║
 * ║                                                                            ║
 * ║  Focus: NO_INTERNAL_RECONSTRUCTION. The optical model is the published     ║
 * ║  infinity prescription only. Production minimum focus is 4 ft (1.2192 m); ║
 * ║  no internal focus spacing law is inferred from that specification.       ║
 * ║                                                                            ║
 * ║  STOP INFERENCE: the patent gives only stop topology inside d7 = 24.08 mm.║
 * ║  A 600 dpi measurement of Fig. 1 places the stop at 0.3368 of d7 from r7,║
 * ║  implemented as 8.11 mm before STO and 15.97 mm after STO. STO sd is      ║
 * ║  calibrated to 12.358523 mm so the paraxial entrance-pupil diameter is    ║
 * ║  49.999993 mm and the modeled f-number is 2.000000. This calibrates to    ║
 * ║  the published 1:2 ratio; it does not establish an unpublished iris size. ║
 * ║                                                                            ║
 * ║  IMAGE PLANE: the patent gives no spacing after r11. The final d below is ║
 * ║  the independently computed infinity paraxial BFD, 37.795983541 mm.       ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: modeled from exact spherical ray geometry using the full  ║
 * ║  on-axis f/2 pupil, 7.2° off-axis bundles at ±0.75 pupil fraction, and    ║
 * ║  12° edge-field rays through ±0.60 pupil fraction, then enlarged by about 1.4–4.0%.    ║
 * ║  They are model clear apertures, not patent- or manufacturer-published SDs.║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "minolta-auto-tele-rokkor-100f2",
  maker: "Minolta",
  name: "MINOLTA AUTO TELE ROKKOR-PF 100mm f/2",
  subtitle: "JP1963-011590 Example 2 — production correlation inferred",
  specs: ["6 ELEMENTS / 5 GROUPS", "f = 100 mm", "f/2", "2ω = 24°", "ALL-SPHERICAL"],

  focalLengthMarketing: 100,
  focalLengthDesign: 99.99998656600513,
  apertureMarketing: 2,
  apertureDesign: 2,
  lensMounts: ["minolta-sr"],
  imageFormat: "135-full-frame",
  patentNumber: "JP1963-011590",
  patentAuthors: ["Tadayoshi Nito"],
  patentAssignees: ["Minolta Camera Co., Ltd."],
  patentYear: 1963,
  elementCount: 6,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.67975,
      vd: 55.7,
      indexReference: "d",
      fl: 114.76516247656772,
      glass: "680557 — supplier unresolved",
      apd: false,
      role: "Front positive collector group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.68287,
      vd: 31.5,
      indexReference: "d",
      fl: -97.18376442178145,
      glass: "683315 — supplier unresolved",
      apd: false,
      cemented: "D1",
      role: "Front element of the cemented positive second group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.67975,
      vd: 55.7,
      indexReference: "d",
      fl: 46.47599405189926,
      glass: "680557 — supplier unresolved",
      apd: false,
      cemented: "D1",
      role: "Rear element of the cemented positive second group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.66797,
      vd: 35.8,
      indexReference: "d",
      fl: -41.99816233824494,
      glass: "668358 — supplier unresolved",
      apd: false,
      role: "Negative third group immediately before the aperture stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.57526,
      vd: 39.1,
      indexReference: "d",
      fl: -136.81910973846735,
      glass: "575391 — supplier unresolved",
      apd: false,
      role: "Negative fourth group immediately after the aperture stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.70442,
      vd: 40.8,
      indexReference: "d",
      fl: 57.07570973106505,
      glass: "704408 — supplier unresolved",
      apd: false,
      role: "Rear positive group.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 61.5, d: 7.2, nd: 1.67975, elemId: 1, sd: 29.5 },
    { label: "2", R: 276.8, d: 0.2, nd: 1, elemId: 0, sd: 29 },
    { label: "3", R: 37.564, d: 1.4, nd: 1.68287, elemId: 2, sd: 24.8 },
    { label: "4", R: 23.624, d: 11.5, nd: 1.67975, elemId: 3, sd: 21.2 },
    { label: "5", R: 75.214, d: 8.778, nd: 1, elemId: 0, sd: 20.4 },
    { label: "6", R: 119.994, d: 3, nd: 1.66797, elemId: 4, sd: 15.7 },
    { label: "7", R: 22.51, d: 8.11, nd: 1, elemId: 0, sd: 13.5 },
    // STO position inferred from patent Fig. 1; 8.11 + 15.97 preserves published d7 = 24.08 mm.
    { label: "STO", R: 1e15, d: 15.97, nd: 1, elemId: 0, sd: 12.358522995535482 },
    { label: "8", R: -28.276, d: 2, nd: 1.57526, elemId: 5, sd: 12.7 },
    { label: "9", R: -45.27, d: 0.4, nd: 1, elemId: 0, sd: 13.9 },
    { label: "10", R: 129.36, d: 6, nd: 1.70442, elemId: 6, sd: 15.5 },
    // Computed infinity paraxial BFD; no image-plane spacing is published after r11.
    { label: "11", R: -57.218, d: 37.7959835413548, nd: 1, elemId: 0, sd: 16.1 },
  ],

  asph: {},

  groups: [
    { text: "G1 +", fromSurface: "1", toSurface: "2" },
    { text: "G2 +", fromSurface: "3", toSurface: "5" },
    { text: "G3 −", fromSurface: "6", toSurface: "7" },
    { text: "G4 −", fromSurface: "8", toSurface: "9" },
    { text: "G5 +", fromSurface: "10", toSurface: "11" },
  ],

  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  closeFocusM: 1.2192,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: published Example 2 is modeled at infinity only; the production 4 ft minimum-focus specification is metadata and is not converted into an internal spacing law.",

  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
