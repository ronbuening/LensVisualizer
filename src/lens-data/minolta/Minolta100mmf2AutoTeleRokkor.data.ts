import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — MINOLTA AUTO TELE ROKKOR 100mm f/2                          ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 1963-011590 B, Example 2 (Minolta Camera Co., Ltd.).     ║
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
 * ║  implemented as 8.11 mm before STO and 15.97 mm after STO. The stop radius║
 * ║  is derived from the design f-number. The former paraxial calibration gave║
 * ║  a 49.999993 mm entrance-pupil diameter and f/2.000000; that agreement    ║
 * ║  with the published 1:2 ratio does not establish an unpublished iris size.║
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
  schema: 2,
  key: "minolta-auto-tele-rokkor-100f2",
  maker: "Minolta",
  name: "MINOLTA AUTO TELE ROKKOR-PF 100mm f/2",
  subtitle: "JP 1963-011590 B, Example 2 — production correlation inferred",

  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 5 GROUPS", "f = 100 mm", "f/2", "2ω = 24°", "ALL-SPHERICAL"],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: { marketing: 100, design: 99.99998656600513 },
    fNumber: { marketing: 2, design: 2 },
  },

  source: {
    patentNumber: "JP 1963-011590 B",
    patentYear: 1963,
    authors: ["Tadayoshi Nito"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

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
      focalLengthMm: 114.76516247656772,
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
      focalLengthMm: -97.18376442178145,
      glass: "683315 — supplier unresolved",
      apd: false,
      role: "Front element of the cemented positive second group.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.67975,
      vd: 55.7,
      indexReference: "d",
      focalLengthMm: 46.47599405189926,
      glass: "680557 — supplier unresolved",
      apd: false,
      role: "Rear element of the cemented positive second group.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.66797,
      vd: 35.8,
      indexReference: "d",
      focalLengthMm: -41.99816233824494,
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
      focalLengthMm: -136.81910973846735,
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
      focalLengthMm: 57.07570973106505,
      glass: "704408 — supplier unresolved",
      apd: false,
      role: "Rear positive group.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 61.5, d: 7.2, sd: 29.5, medium: 1 },
    { label: "2", R: 276.8, d: 0.2, sd: 29 },
    { label: "3", R: 37.564, d: 1.4, sd: 24.8, medium: 2 },
    { label: "4", R: 23.624, d: 11.5, sd: 21.2, medium: 3 },
    { label: "5", R: 75.214, d: 8.778, sd: 20.4 },
    { label: "6", R: 119.994, d: 3, sd: 15.7, medium: 4 },
    { label: "7", R: 22.51, d: 8.11, sd: 13.5 },
    // STO position inferred from patent Fig. 1; 8.11 + 15.97 preserves published d7 = 24.08 mm.
    { label: "STO", R: "flat", d: 15.97 },
    { label: "8", R: -28.276, d: 2, sd: 12.7, medium: 5 },
    { label: "9", R: -45.27, d: 0.4, sd: 13.9 },
    { label: "10", R: 129.36, d: 6, sd: 15.5, medium: 6 },
    // Computed infinity paraxial BFD; no image-plane spacing is published after r11.
    { label: "11", R: -57.218, d: 37.7959835413548, sd: 16.1 },
  ],

  focus: {
    closeFocusM: 1.2192,
    description:
      "NO_INTERNAL_RECONSTRUCTION: published Example 2 is modeled at infinity only; the production 4 ft minimum-focus specification is metadata and is not converted into an internal spacing law.",
  },

  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1 +", fromSurface: "1", toSurface: "2" },
    { text: "G2 +", fromSurface: "3", toSurface: "5" },
    { text: "G3 −", fromSurface: "6", toSurface: "7" },
    { text: "G4 −", fromSurface: "8", toSurface: "9" },
    { text: "G5 +", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  layout: { yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
