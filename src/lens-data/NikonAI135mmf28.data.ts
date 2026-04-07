// Nikon AI Nikkor 135mm f/2.8
// US Patent 4,057,330, Example 2 (Sei Matui, 1977)
// Scaled ×1.35 from patent f = 100 mm to production f = 135 mm
// 5 elements in 4 groups — modified Ernostar (Matsui variant)
// All surfaces spherical · Unit focus
// Stop position estimated from patent Fig. 1 (in d4 gap, biased toward L2)

import type { LensDataInput } from "../types/optics.js";

const LENS_DATA = {
  key: "nikon-ai-nikkor-135f28",
  name: "Nikon AI Nikkor 135mm f/2.8",
  maker: "Nikon",
  subtitle: "US 4,057,330 Ex. 2 (Matui 1977) · ×1.35 scale",
  focalLengthMarketing: 135,
  focalLengthDesign: 135.0,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  patentYear: 1977,
  elementCount: 5,
  groupCount: 4,

  specs: ["5 elements / 4 groups", "f/2.8–f/32 · 7 blades", "MFD 1.3 m · 52 mm filter", "Unit focus · All spherical"],

  focusDescription: "Unit focus — entire optical assembly moves on helicoid; only BFD changes",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: 104.3,
      glass: "S-BSM18 (OHARA)",
      apd: false,
      role: "Front positive meniscus — primary converging power, low-dispersion crown minimises chromatic contribution",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: 105.7,
      glass: "S-BSM18 (OHARA)",
      apd: false,
      role: "Added by Matsui to the classical Ernostar — splits front-group power to reduce SA and coma at f/2.8",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.7847,
      vd: 26.1,
      fl: 74.1,
      glass: "S-TIH14 (OHARA)",
      apd: "inferred",
      apdNote: "dPgF ≈ +0.014 — anomalous blue-violet dispersion for g-line spherochromatism control",
      cemented: "D1",
      role: "Positive element of cemented doublet — directs g-line SA toward undercorrection per patent Condition II",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.74,
      vd: 28.2,
      fl: -26.7,
      glass: "S-TIH4 (OHARA)",
      apd: "inferred",
      apdNote: "dPgF ≈ +0.013 — differential APD with L3 controls secondary spectrum balance",
      cemented: "D1",
      role: "Strongest element — primary negative power, field-flattening Petzval contribution, spherochromatism partner to L3",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.72825,
      vd: 28.3,
      fl: 172.0,
      glass: "SF10 (Schott) / S-TIH11 (OHARA)",
      apd: false,
      role: "Rear corrector — isolated by large air gap for distortion and coma correction per patent Condition I",
    },
  ],

  surfaces: [
    // ── L1: Positive meniscus (front crown) ──
    { label: "1", R: 56.201, d: 7.299, nd: 1.62041, elemId: 1, sd: 24.0 },
    { label: "2", R: 405.4, d: 0.599, nd: 1.0, elemId: 0, sd: 22.0 },

    // ── L2: Positive meniscus (second crown) ──
    { label: "3", R: 38.85, d: 13.001, nd: 1.62041, elemId: 2, sd: 22.0 },
    { label: "4", R: 83.151, d: 2.0, nd: 1.0, elemId: 0, sd: 18.0 },

    // ── Aperture stop (inferred from Fig. 1, in d4 gap) ──
    { label: "STO", R: 1e15, d: 0.8, nd: 1.0, elemId: 0, sd: 17.4 },

    // ── L3+L4: Cemented doublet (negative meniscus member) ──
    { label: "5", R: 213.133, d: 4.699, nd: 1.7847, elemId: 3, sd: 17.0 },
    { label: "6", R: -79.16, d: 1.5, nd: 1.74, elemId: 4, sd: 16.5 },
    { label: "7", R: 26.482, d: 34.7, nd: 1.0, elemId: 0, sd: 16.5 },

    // ── L5: Positive meniscus (rear corrector) ──
    { label: "8", R: 84.0, d: 2.201, nd: 1.72825, elemId: 5, sd: 18.0 },
    { label: "9", R: 252.063, d: 59.51, nd: 1.0, elemId: 0, sd: 17.5 },
  ],

  asph: {},

  // Unit focus: only BFD (surface "9") changes
  var: {
    "9": [59.51, 75.16],
  },
  varLabels: [["9", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  closeFocusM: 1.3,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  scFill: 0.55,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
