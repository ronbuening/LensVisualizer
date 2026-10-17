import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON AF NIKKOR 20mm f/2.8 D                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,690,517, Table 1, Fujie / Nippon Kogaku.        ║
 * ║  Retrofocus 20mm-class wide-angle design for Nikon F / FX format.  ║
 * ║  12 elements / 9 groups, all spherical surfaces.                   ║
 * ║  Focus: CRC floating focus. The patent states that L1-L5 move as   ║
 * ║  a unit to reduce d12 while the entire lens also advances, but it  ║
 * ║  does not publish a close-focus numerical spacing table. This file ║
 * ║  therefore records the independently verified infinity prescription║
 * ║  and does not invent a focus var table.                            ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    The patent prescription is normalized to f = 100. All R, d, Bf, ║
 * ║    and inferred semi-diameters are scaled ×0.2 to the production   ║
 * ║    20 mm class focal length. Independent paraxial trace gives      ║
 * ║    EFL = 19.9999 mm and BFD = 37.2607 mm after scaling.            ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    The patent places stop S in the L6-L7 airspace but Table 1 does ║
 * ║    not tabulate its exact axial coordinate. Surface 14's patent    ║
 * ║    gap is split evenly around STO, consistent with Fig. 1.         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear apertures. Semi-diameters are ║
 * ║    inferred from entrance-pupil geometry plus marginal/chief-ray   ║
 * ║    checks, then constrained by element edge thickness, surface rim ║
 * ║    curvature, element SD ratios, and cross-gap sag clearance.      ║
 * ║    Surfaces 1-5 were raised to pass the traced chief ray to the FX ║
 * ║    corner (47.9°, matching the patent's 2ω = 94°; 2026-09-24       ║
 * ║    field-coverage audit). Surface 4 stops at 9.7 mm, the 64.2°     ║
 * ║    rim-slope limit.                                                ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-af-nikkor-20mm-f28d",
  maker: "Nikon",
  name: "NIKON AF NIKKOR 20mm f/2.8 D",
  subtitle: "US 4,690,517 Table 1 — Fujie / Nippon Kogaku",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["20mm", "f/2.8", "94° FX", "12 elements / 9 groups", "CRC floating focus"],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: { marketing: 20, design: 19.9999 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 4,690,517",
    patentYear: 1987,
    authors: ["Daijiro Fujie"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.4,
      focalLengthMm: 99.56,
      glass: "S-BSM16 class (OHARA / 620603)",
      apd: false,
      role: "Low-dispersion front positive meniscus in the divergent retrofocus group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 26.1,
      focalLengthMm: -23.88,
      glass: "SF56A equivalent (SCHOTT / 785261)",
      apd: false,
      role: "High-dispersion negative meniscus for lateral-color bending correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 54.0,
      focalLengthMm: -32.17,
      glass: "S-LAL8 class (OHARA / 713539)",
      apd: false,
      role: "Moderate-dispersion negative meniscus distributing the front divergent power.",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4a",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.6,
      focalLengthMm: 28.4,
      glass: "S-TIH4 class (OHARA / 755275)",
      apd: false,
      role: "Positive front member of the L4 cemented triplet.",
      cemented: "L4",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 4b",
      type: "Biconcave Negative",
      nd: 1.77279,
      vd: 49.4,
      focalLengthMm: -10.72,
      glass: "S-LAH66 / TAF1 class (OHARA / HOYA / 773496)",
      apd: false,
      role: "Strong negative center member of the L4 cemented triplet.",
      cemented: "L4",
    },
    {
      id: 6,
      name: "L4c",
      label: "Element 4c",
      type: "Plano-Convex Positive",
      nd: 1.62588,
      vd: 35.6,
      focalLengthMm: 18.75,
      glass: "E-F1 equivalent (HOYA / 626357)",
      apd: false,
      role: "Rear positive member of the L4 cemented triplet; flat rear surface.",
      cemented: "L4",
    },
    {
      id: 7,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6727,
      vd: 32.2,
      focalLengthMm: 35.99,
      glass: "S-TIM25 class (OHARA / 673322)",
      apd: false,
      role: "First strong positive element of the convergent rear group.",
    },
    {
      id: 8,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.58267,
      vd: 46.5,
      focalLengthMm: 33.06,
      glass: "J-BAF3 (HIKARI / Nikon)",
      apd: false,
      role: "Positive meniscus immediately ahead of the aperture stop.",
    },
    {
      id: 9,
      name: "L7a",
      label: "Element 7a",
      type: "Positive Meniscus",
      nd: 1.77279,
      vd: 49.4,
      focalLengthMm: 38.43,
      glass: "S-LAH66 / TAF1 class (OHARA / HOYA / 773496)",
      apd: false,
      role: "Positive front member of the post-stop cemented negative doublet.",
      cemented: "L7",
    },
    {
      id: 10,
      name: "L7b",
      label: "Element 7b",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.1,
      focalLengthMm: -13.92,
      glass: "SF56A equivalent (SCHOTT / 785261)",
      apd: false,
      role: "High-dispersion negative rear member of the post-stop cemented doublet.",
      cemented: "L7",
    },
    {
      id: 11,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.4,
      focalLengthMm: 34.69,
      glass: "S-BSM16 class (OHARA / 620603)",
      apd: false,
      role: "Low-dispersion positive relay meniscus near the image side.",
    },
    {
      id: 12,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.4,
      focalLengthMm: 37.62,
      glass: "S-BSM16 class (OHARA / 620603)",
      apd: false,
      role: "Final positive biconvex element controlling rear aberration balance and BFD.",
    },
  ],

  surfaces: [
    { label: "1", R: 38.8882, d: 5.4962, sd: 20.9, medium: 1 },
    { label: "2", R: 99.2998, d: 0.0982, sd: 18.3 },
    { label: "3", R: 27.095, d: 1.374, sd: 13.9, medium: 2 },
    { label: "4", R: 10.8308, d: 3.9258, sd: 9.7 },
    { label: "5", R: 19.05, d: 1.1778, sd: 9.5, medium: 3 },
    { label: "6", R: 10.1384, d: 3.7296, sd: 7.8 },
    { label: "7", R: 75.0028, d: 3.1406, sd: 7.5, medium: 4 },
    { label: "8", R: -29.5026, d: 1.2758, sd: 7.25, medium: 5 },
    { label: "9", R: 11.738, d: 4.9072, sd: 7.15, medium: 6 },
    { label: "10", R: "flat", d: 0.0982, sd: 7.0 },
    { label: "11", R: 32.334, d: 3.2388, sd: 7.1, medium: 7 },
    { label: "12", R: -92.4826, d: 1.5704, sd: 6.9 },
    { label: "13", R: -88.3576, d: 3.1406, sd: 6.7, medium: 8 },
    { label: "14", R: -16.023, d: 1.6194, sd: 6.7 },
    { label: "STO", R: "flat", d: 1.6194 },
    { label: "15", R: -22.4724, d: 4.4166, sd: 6.7, medium: 9 },
    { label: "16", R: -13.8886, d: 1.0796, sd: 6.8, medium: 10 },
    { label: "17", R: 52.8446, d: 0.8068, sd: 6.5 },
    { label: "18", R: -77.956, d: 2.1592, sd: 6.9, medium: 11 },
    { label: "19", R: -17.043, d: 0.0982, sd: 7.5 },
    { label: "20", R: 94.4348, d: 2.748, sd: 8.0, medium: 12 },
    { label: "21", R: -30.6606, d: 37.2607, sd: 8.3 },
  ],

  focus: {
    closeFocusM: 0.25,
    description:
      "CRC floating focus: the patent states that L1-L5 move as a unit to reduce d12 while the whole lens advances; close-focus numerical spacings are not published in US 4,690,517, so this file keeps the verified infinity prescription.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  groups: [
    { text: "L1-L4 divergent", fromSurface: "1", toSurface: "10" },
    { text: "L5-L9 convergent", fromSurface: "11", toSurface: "21" },
  ],
  doublets: [
    { text: "L4 triplet", fromSurface: "7", toSurface: "10" },
    { text: "L7 doublet", fromSurface: "15", toSurface: "17" },
  ],

  layout: { scFill: 0.58, yScFill: 0.52 },
} satisfies LensDataV2Input;

export default LENS_DATA;
