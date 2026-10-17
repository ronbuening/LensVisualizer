import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NIKKOR-H AUTO 2.8cm f/3.5                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP Showa 38-26133 / JPB 1963026133, sole example.   ║
 * ║  Six-element, six-group all-spherical retrofocus wide-angle lens.  ║
 * ║  Focus: unit focusing; production close focus is 0.6 m.            ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║  The patent prescription is normalized to f = 100. All radii,      ║
 * ║  thicknesses, back focus, semi-diameters, and paraxial focal       ║
 * ║  lengths below are scaled by 0.28 for the 28 mm production lens.   ║
 * ║  The aperture stop position is inferred from Fig. 1 by splitting   ║
 * ║  the patent d6 gap evenly; the patent gives only the total d6      ║
 * ║  separation between L3 and L4.                                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-nikkor-h-auto-28mm-f35",
  maker: "Nikon",
  name: "NIKON NIKKOR-H AUTO 2.8cm f/3.5",
  subtitle: "JP Showa 38-26133 / JPB 1963026133 — Nippon Kogaku / Wakimoto",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["6 elements / 6 groups", "f ≈ 28.0 mm", "F/3.5", "2ω = 75° patent field", "all-spherical"],
    elementCount: 6,
    groupCount: 6,
    focalLengthMm: { marketing: 28, design: 28.001 },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "JP S38-26133 B",
    patentYear: 1963,
    authors: ["Zenji Wakimoto"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6726,
      vd: 32.2,
      focalLengthMm: 160.269,
      glass: "SF5 (Schott equivalent)",
      apd: false,
      role: "Weak front positive meniscus; low-power front correction member in the retrofocus front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6212,
      vd: 60.1,
      focalLengthMm: -38.165,
      glass: "SK16 class (Hikari/Schott equivalent)",
      apd: false,
      role: "Strong negative meniscus that supplies the retrofocus front-group divergence and back-focus extension.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.6387,
      vd: 55.3,
      focalLengthMm: 26.915,
      glass: "K-SK18 (Sumita) / SK18 class",
      apd: false,
      role: "Positive pre-stop collector at the entrance of the rear converging group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6726,
      vd: 32.2,
      focalLengthMm: -15.859,
      glass: "SF5 (Schott equivalent)",
      apd: false,
      role: "Strong negative post-stop element; principal rear-group chromatic and Petzval correction member.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6582,
      vd: 50.8,
      focalLengthMm: 25.592,
      glass: "N-SSK5 (Schott) / SSK5 class",
      apd: false,
      role: "Positive meniscus with convex side toward the image; relay and oblique-aberration correction member.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.5163,
      vd: 64.0,
      focalLengthMm: 56.303,
      glass: "BK7 class (Schott/Ohara/CDGM equivalent)",
      apd: false,
      role: "Final low-dispersion positive relay element adjacent to the image space.",
    },
  ],

  surfaces: [
    { label: "1", R: 102.284, d: 5.096, sd: 25.2, medium: 1 },
    { label: "2", R: 1960.0, d: 0.196, sd: 22.2 },
    { label: "3", R: 67.2, d: 1.652, sd: 16.0, medium: 2 },
    { label: "4", R: 17.36, d: 25.76, sd: 15.0 },
    { label: "5", R: 17.976, d: 3.332, sd: 9.3, medium: 3 },
    { label: "6", R: -365.176, d: 2.548, sd: 7.7 },
    { label: "STO", R: "flat", d: 2.548 },
    { label: "7", R: -16.94, d: 0.868, sd: 6.9, medium: 4 },
    { label: "8", R: 29.4, d: 1.484, sd: 7.3 },
    { label: "9", R: -112.588, d: 2.548, sd: 8.2, medium: 5 },
    { label: "10", R: -14.784, d: 0.196, sd: 8.8 },
    { label: "11", R: 59.64, d: 1.764, sd: 9.4, medium: 6 },
    { label: "12", R: -56.14, sd: 9.7 },
  ],

  focus: {
    closeFocusM: 0.6,
    description: "Unit focusing; all optical spacings remain fixed and the whole optical assembly translates forward.",
  },

  gaps: { "12": { label: "BF", values: [[37.1, 38.602]] } },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22] },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "4" },
    { text: "REAR", fromSurface: "5", toSurface: "12" },
  ],
  doublets: [],

  layout: { scFill: 0.58, yScFill: 0.62 },
} satisfies LensDataV2Input;

export default LENS_DATA;
