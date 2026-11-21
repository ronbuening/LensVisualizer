import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — smc PENTAX-FA 645 150mm F2.8 [IF]                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 6,313,955 B1, Embodiment 2, Table 2 (Yoneyama).     ║
 * ║  Rear-focusing telephoto: a fixed positive front group of three      ║
 * ║  singlets, a fixed aperture stop, and a positive rear group of four  ║
 * ║  singlets that moves toward the object to focus.                     ║
 * ║  7 elements / 7 air-separated groups; all spherical surfaces.        ║
 * ║                                                                      ║
 * ║  NOTE ON SCALING:                                                    ║
 * ║    No scale factor applied. The prescription computes to             ║
 * ║    f = 146.97 mm; the lens is marketed as 150 mm. Table 2 prints     ║
 * ║    f = 147.97, which disagrees with its own radii and with the       ║
 * ║    condition values of Table 4 (both give 146.97) and is read as a   ║
 * ║    misprint of 146.97.                                               ║
 * ║                                                                      ║
 * ║  NOTE ON APERTURE:                                                   ║
 * ║    The patent gives F2.9, used for nominalFNumber and                ║
 * ║    catalog.fNumber.design. The lens is marketed as F2.8.             ║
 * ║                                                                      ║
 * ║  NOTE ON FOCUS:                                                      ║
 * ║    Table 2 prints three states: infinity, magnification -0.025 and   ║
 * ║    the closest distance (magnification -0.145). The stop-to-rear-    ║
 * ║    group gap and the back focus always sum to 106.55 mm. The patent  ║
 * ║    prints no object distances; those in focus.conjugates are solved  ║
 * ║    from the prescription. The closest state focuses at 1.19996 m     ║
 * ║    from object to image, the marketed 1.2 m. Seven keyframes between ║
 * ║    the printed states are solved for paraxial focus on the fixed     ║
 * ║    image plane so that the distance scale stays in focus.            ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS:                                             ║
 * ║    The patent does not publish clear apertures. Values are scaled    ║
 * ║    from the element heights drawn in Fig. 6 and checked against the  ║
 * ║    wide-open axial beam at infinity. L3 is drawn as a square block:  ║
 * ║    its rear curve ends near 18 mm and a flat land continues to the   ║
 * ║    20.5 mm edge (rimExtensionSd on surface 6). The rear group is     ║
 * ║    smaller than the axial beam at close focus, as drawn in Fig. 9.   ║
 * ║                                                                      ║
 * ║  IMPORTANT: This file describes ONLY the optical design:             ║
 * ║    ✓ Glass elements and surfaces from front element to image plane   ║
 * ║    ✓ Aperture stop and variable focusing gaps                        ║
 * ║    ✗ Filters and mechanical components omitted                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "pentax-645-fa-150mm-f28-if",
  maker: "Pentax",
  name: "PENTAX SMC FA 645 150mm f/2.8 [IF]",
  subtitle: "US 6,313,955 B1, Embodiment 2 — production correlation by construction and 1.2 m close focus",

  catalog: {
    lensMounts: ["pentax-645"],
    imageFormat: "645",
    specs: [
      "7 ELEMENTS / 7 GROUPS",
      "ALL SPHERICAL",
      "150 mm MARKETED / 146.97 mm DESIGN",
      "F2.8 MARKETED / F2.9 DESIGN",
      "INNER FOCUS TO 1.2 m",
    ],
    elementCount: 7,
    groupCount: 7,
    focalLengthMm: { marketing: 150, design: 146.97 },
    fNumber: { marketing: 2.8, design: 2.9 },
    closeFocusM: { marketing: 1.2 },
  },

  source: {
    patentNumber: "US 6,313,955 B1",
    example: { label: "Embodiment 2", id: "2" },
    patentYear: 2001,
    authors: ["Shuji Yoneyama"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
    sdSource: "heuristic",
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 88.67,
      glass: "S-LAL18 (OHARA)",
      role: "Strong positive front element of the fixed front group; it supplies most of the group's convergence.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 196.05,
      glass: "S-PHM52 (OHARA)",
      role: "Low-dispersion positive meniscus that shares the front group's power with L1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.8,
      focalLengthMm: -59.67,
      glass: "S-TIM22 (OHARA)",
      role: "Flint negative meniscus with a strongly curved rear surface; it achromatizes the front group ahead of the stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: 114.07,
      glass: "S-LAH65 (OHARA)",
      role: "High-index positive lead element of the moving rear group, convex to the object.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.1,
      focalLengthMm: -72.63,
      glass: "S-TIM25 (OHARA)",
      role: "Main negative element of the rear group; its concave front surface faces L4 across a thin air space.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.8,
      focalLengthMm: -240.69,
      glass: "S-TIM22 (OHARA)",
      role: "Weak second negative element of the rear group; the patent's condition (3) bounds its power to balance spherical aberration against the Petzval sum.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: 73.18,
      glass: "S-LAH60 (OHARA)",
      role: "High-index positive rear element that completes the rear group's positive power.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 55.096, d: 9.81, sd: 28.5, medium: 1 },
    { label: "2", R: 344.587, d: 0.31, sd: 28.5 },
    { label: "3", R: 47, d: 5.51, sd: 23.7, medium: 2 },
    { label: "4", R: 73.35, d: 4.9, sd: 23.7 },
    { label: "5", R: 228.536, d: 3, sd: 20.5, medium: 3 },
    { label: "6", R: 32.889, d: 9.94, sd: 18.2, rimExtensionSd: 20.5 },
    { label: "STO", R: "flat" },
    { label: "7", R: 100.59, d: 3.92, sd: 14.9, medium: 4 },
    { label: "8", R: -1020.662, d: 1.56, sd: 14.9 },
    { label: "9", R: -75.545, d: 2.5, sd: 15.3, medium: 5 },
    { label: "10", R: 140.152, d: 1.45, sd: 15.3 },
    { label: "11", R: -263.618, d: 2.5, sd: 15.8, medium: 6 },
    { label: "12", R: 382.905, d: 5.94, sd: 15.8 },
    { label: "13", R: 380.579, d: 6.31, sd: 19.2, medium: 7 },
    { label: "14", R: -72.136, sd: 19.2 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.2,
    keyframes: [0, 0.1988467, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    published: [1, 9],
    description:
      "PUBLISHED rear focus: the front group and the aperture stop stay fixed while the four-element rear group moves 28.96 mm toward the object, from infinity to 1.2 m. The patent prints the infinity, -0.025x and closest (-0.145x) spacings; the seven positions between them are solved from the prescription for paraxial focus.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 5870.6,
        distanceReference: "first-surface",
        sourceMagnification: "0.025",
        source:
          "US 6,313,955 B1, Embodiment 2, Table 2: prints magnification -0.025 for the spacings this keyframe carries, with no object distance. The object distance is solved from the prescription: it focuses the state on its printed image plane, where the paraxial magnification is -0.02498.",
      },
      {
        zoomStation: 0,
        keyframe: 9,
        objectDistanceMm: 1035.76,
        distanceReference: "first-surface",
        sourceMagnification: "0.145",
        source:
          "US 6,313,955 B1, Embodiment 2, Table 2: prints magnification -0.145 for the closest-distance spacings this keyframe carries, with no object distance. The object distance is solved from the prescription: it focuses the state on its printed image plane, where the paraxial magnification is -0.14534.",
      },
    ],
  },

  gaps: {
    STO: {
      label: "STO–Gr",
      values: [[30.18, 24.56, 21.712, 18.888, 16.047, 13.177, 10.27, 7.316, 4.303, 1.22]],
    },
    "14": {
      label: "BF",
      values: [[76.37, 81.99, 84.838, 87.662, 90.503, 93.373, 96.28, 99.234, 102.247, 105.33]],
    },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 8 },

  /* ── Group annotations ── */
  groups: [
    { text: "Gf (+)", fromSurface: "1", toSurface: "6" },
    { text: "Gr (+)", fromSurface: "7", toSurface: "14" },
  ],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
