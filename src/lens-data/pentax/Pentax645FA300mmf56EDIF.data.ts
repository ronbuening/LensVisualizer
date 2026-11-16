import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — smc PENTAX-FA645 300mm F5.6 ED [IF]                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2002/0041452 A1, Embodiment 1, Table 1 (Ozaki).    ║
 * ║  Positive front group, negative inner-focusing group, fixed stop    ║
 * ║  and positive rear group for a medium-format telephoto.             ║
 * ║  7 elements / 7 air-separated groups; all spherical surfaces.       ║
 * ║  Focus: G2 (L4, L5) moves toward the image; infinity state only.    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    No scale factor applied. Table 1 states f = 292.35 mm; the       ║
 * ║    marketing focal length is 300 mm.                                ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE:                                                  ║
 * ║    Table 1 gives F/5.7, recorded in catalog.fNumber.design and in   ║
 * ║    nominalFNumber, so the stop radius follows the patent aperture.  ║
 * ║    The production lens is marketed as F5.6 (fNumber.marketing).     ║
 * ║                                                                    ║
 * ║  NOTE ON FIELD:                                                     ║
 * ║    The patent half-field is 6.7 degrees; the corner of the 645      ║
 * ║    frame lies marginally beyond it.                                 ║
 * ║                                                                    ║
 * ║  NOTE ON GLASS:                                                     ║
 * ║    The patent prints nd and vd for every element and the partial    ║
 * ║    dispersion ratio for L3 (0.5774) and L4 (0.5703) only. Glass     ║
 * ║    names are catalog rows that match the printed nd/vd; the         ║
 * ║    patent names no glass. The two printed ratios are stored as      ║
 * ║    dPgF against the viewer's normal line.                           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent does not publish clear-aperture semi-diameters.       ║
 * ║    Values below are estimated from Fig. 1, which draws each rim     ║
 * ║    just outside the axial beam, and are kept wider than the         ║
 * ║    drawing wherever the smaller rim would darken the 645 corner.    ║
 * ║    L3 is held to 26 mm by the 0.99 mm air gap behind L2.            ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS:                                                     ║
 * ║    Only the infinity prescription is published. closeFocusM =       ║
 * ║    1e15 marks focus as not modeled; it is not a minimum focus       ║
 * ║    distance. The maker's 2.2 m figure is in catalog.closeFocusM.    ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces from front element to image plane  ║
 * ║    ✓ Aperture stop                                                  ║
 * ║    ✗ Filters and mechanical components omitted                      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "pentax-645-fa-300mm-f56-ed-if",
  maker: "Pentax",
  name: "PENTAX SMC FA 645 300mm f/5.6 ED [IF]",
  subtitle: "US 2002/0041452 A1, Embodiment 1 — production correlation by construction",

  catalog: {
    lensMounts: ["pentax-645"],
    imageFormat: "645",
    specs: [
      "7 ELEMENTS / 7 GROUPS",
      "ED GLASS, ALL SPHERICAL",
      "300 mm MARKETED / 292.35 mm DESIGN",
      "F5.6 MARKETED / F5.7 DESIGN",
      "INNER FOCUS, 2.2 m MINIMUM",
    ],
    elementCount: 7,
    groupCount: 7,
    focalLengthMm: { marketing: 300, design: 292.35 },
    fNumber: { marketing: 5.6, design: 5.7 },
    closeFocusM: { marketing: 2.2 },
  },

  source: {
    patentNumber: "US 2002/0041452 A1",
    example: { label: "Embodiment 1", id: "1" },
    patentYear: 2002,
    authors: ["Hiroyasu Ozaki"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
    sdSource: "heuristic",
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 148.21,
      glass: "S-FSL5 (OHARA)",
      role: "Low-dispersion front collector of the fixed first group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 130.45,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote:
        "The only ED-class glass in the prescription (nd 1.497, νd 81.6); the maker states ED glass without giving a count or position.",
      role: "ED positive element with a near-flat rear face; carries most of the first group's power with L1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.66998,
      vd: 39.3,
      focalLengthMm: -102.74,
      glass: "S-BAH32 (OHARA)",
      role: "Negative element closing the first group; achromatizes L1 and L2 across a 0.99 mm air gap.",
      dPgF: -0.0002974,
      apdNote: "Patent Table 1 prints a partial dispersion ratio of 0.5774; stored as the deviation from the viewer's normal line.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: -85.35,
      glass: "S-NBH5 (OHARA)",
      role: "Negative front element of the focusing group, concave to the image.",
      dPgF: -0.0067246,
      apdNote: "Patent Table 1 prints a partial dispersion ratio of 0.5703; stored as the deviation from the viewer's normal line.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 176.83,
      glass: "S-TIH6 (OHARA)",
      role: "Dense-flint positive meniscus that achromatizes the focusing group with L4.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.56732,
      vd: 42.8,
      focalLengthMm: 128.83,
      glass: "S-TIL26 (OHARA)",
      role: "Positive element of the fixed rear group, directly behind the aperture stop.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -123.58,
      glass: "S-LAH60 (OHARA)",
      role: "Negative rear meniscus, concave to the object; sets the back focus and flattens the field.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 100.7, d: 7.85, sd: 31, medium: 1 },
    { label: "2", R: -249.207, d: 0.3, sd: 31 },
    { label: "3", R: 65.656, d: 8.22, sd: 29, medium: 2 },
    { label: "4", R: -4951.776, d: 0.99, sd: 29 },
    { label: "5", R: -355.189, d: 3.1, sd: 26, medium: 3 },
    { label: "6", R: 85.68, d: 30.51, sd: 26 },
    { label: "7", R: 535.1, d: 2.6, sd: 18.6, medium: 4 },
    { label: "8", R: 50.46, d: 9.63, sd: 18.6 },
    { label: "9", R: 58, d: 3.81, sd: 18.3, medium: 5 },
    { label: "10", R: 95, d: 20.25, sd: 18.3 },
    { label: "STO", R: "flat", d: 1.5 },
    { label: "11", R: 2639.805, d: 4.44, sd: 17.2, medium: 6 },
    { label: "12", R: -75.123, d: 33.84, sd: 17.2 },
    { label: "13", R: -54.636, d: 2.3, sd: 17, medium: 7 },
    { label: "14", R: -118.5, d: 116.66, sd: 17 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only. The patent moves the negative second group (L4, L5) toward the image for close focus, with the stop and the other groups fixed, but prints no close-focus spacings, so focus travel is not modeled. The production lens focuses to 2.2 m.",
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 5.7, fStops: [5.7, 8, 11, 16, 22, 32, 45], maxFNumber: 45, blades: 9 },

  /* ── Group annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (−) focus", fromSurface: "7", toSurface: "10" },
    { text: "G3 (+)", fromSurface: "11", toSurface: "14" },
  ],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
