import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Nikon AI Nikkor 35mm f/2                              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,507,558, single numerical example.              ║
 * ║  8 elements / 6 groups; all-spherical retrofocus wide-angle.        ║
 * ║  Focus: unit focus, modeled by final back-focus variation only.     ║
 * ║                                                                    ║
 * ║  Scaling: patent is normalized to f = 1.0; all radii and axial      ║
 * ║  distances are scaled ×35.000 to represent the 35 mm production     ║
 * ║  focal length. Computed EFL after scaling: 34.999420 mm.           ║
 * ║                                                                    ║
 * ║  Stop placement: the patent places the stop in the r7-r8 air        ║
 * ║  space but gives no numerical split. The stop is placed at the      ║
 * ║  midpoint of d7 for rendering and pupil modeling.                   ║
 * ║                                                                    ║
 * ║  Semi-diameters: patent omits clear apertures. Values are inferred  ║
 * ║  from the f/2 pupil trace, off-axis bundle checks, the patent's     ║
 * ║  front-diameter note (~1.3f), the 52 mm attachment standard, and    ║
 * ║  renderer edge/sag constraints.                                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ai-nikkor-35mm-f2",
  maker: "Nikon",
  name: "NIKON AI NIKKOR 35mm f/2",
  subtitle: "US 3,507,558 — Yoshiyuki Shimizu / Nippon Kogaku",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["35 mm", "f/2", "8 elements / 6 groups", "62° diagonal", "Nikon F"],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: 35, design: 34.99942 },
    fNumber: { marketing: 2, design: 2 },
  },

  source: {
    patentNumber: "US 3,507,558",
    patentYear: 1970,
    authors: ["Yoshiyuki Shimizu"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 157.657,
      glass: "S-LAL8 / N-LAK8 class (713/539 lanthanum crown)",
      apd: false,
      role: "Front positive distortion-correction element in the negative retrofocus front group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -50.482,
      glass: "N-BK7 class (517/642 borosilicate crown)",
      apd: false,
      role: "Primary negative meniscus of the front retrofocus group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.66755,
      vd: 41.9,
      focalLengthMm: 30.737,
      glass: "J-BASF6 / BaSF6 class (668/419 dense barium flint)",
      apd: false,
      role: "Positive high-index member of the pre-stop coma-correcting cemented doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.51454,
      vd: 54.62,
      focalLengthMm: -38.17,
      glass: "KF3 (SUMITA catalog equivalent for patent coordinate; production supplier unspecified)",
      apd: false,
      role: "Negative member of the pre-stop cemented doublet; r6 is the patent's outer-coma correction surface.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      focalLengthMm: -17.051,
      glass: "SF56A class (785/261 dense flint)",
      apd: false,
      role: "Strong negative dense-flint member of the post-stop field and coma doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.74443,
      vd: 49.4,
      focalLengthMm: 21.226,
      glass: "Legacy 744/494 lanthanum-flint class (exact melt uncertain)",
      apd: false,
      role: "Positive member of the post-stop doublet; r9 is the bounded astigmatism/coma correction interface.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.76684,
      vd: 46.2,
      focalLengthMm: 73.715,
      glass: "Legacy 767/462 dense lanthanum-flint class (exact melt uncertain)",
      apd: false,
      role: "Trailing positive meniscus contributing final image formation and spherical-aberration correction.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.9,
      focalLengthMm: 64.566,
      glass: "LAF2 / N-LAF2 class (744/449 lanthanum flint)",
      apd: false,
      role: "Final positive element completing real-image formation at the film plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 112.409, d: 3.79155, sd: 22.6, medium: 1 },
    { label: "2", R: "flat", d: 0.0973, sd: 22.0 },
    { label: "3", R: 48.6115, d: 2.13885, sd: 18.45, medium: 2 },
    { label: "4", R: 16.723, d: 10.88885, sd: 14.8 },
    { label: "5", R: 31.3075, d: 7.9723, sd: 16.0, medium: 3 },
    { label: "6", R: -53.473, d: 10.20845, sd: 16.0, medium: 4 },
    { label: "7", R: 33.054, d: 2.57635, sd: 13.0 },
    { label: "STO", R: "flat", d: 2.57635 },
    { label: "8", R: -20.972, d: 0.9723, sd: 10.6, medium: 5 },
    { label: "9", R: 37.7125, d: 6.8054, sd: 11.5, medium: 6 },
    { label: "10", R: -25.102, d: 0.0973, sd: 14.0 },
    { label: "11", R: -106.946, d: 2.91655, sd: 14.0, medium: 7 },
    { label: "12", R: -37.4185, d: 0.0973, sd: 14.2 },
    { label: "13", R: 126.388, d: 2.4304, sd: 14.2, medium: 8 },
    { label: "14", R: -76.853, sd: 14.2 },
  ],

  focus: {
    closeFocusM: 0.3,
    description: "Unit focusing: all eight elements move as a rigid optical cell; no close-range correction group.",
  },

  gaps: { "14": { label: "BF", values: [[39.678325, 45.597831]] } },

  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "B1", fromSurface: "1", toSurface: "4" },
    { text: "B2", fromSurface: "5", toSurface: "14" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  layout: { scFill: 0.58, yScFill: 0.56 },
} satisfies LensDataV2Input;

export default LENS_DATA;
