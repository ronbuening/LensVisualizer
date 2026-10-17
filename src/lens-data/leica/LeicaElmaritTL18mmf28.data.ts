import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — LEICA ELMARIT-TL 18mm f/2.8 ASPH.            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0341238 A1, Third Numerical Example          ║
 * ║  (Panasonic / Hideki Kai), Tables 7-9B.                            ║
 * ║                                                                    ║
 * ║  Optical form: compact APS-C wide-angle prime with a positive       ║
 * ║  first group, a single positive internal-focus element, and a       ║
 * ║  fixed negative rear group. The first group is retrofocus-type      ║
 * ║  in the patent sense, but the full system is not a strict long-BFD  ║
 * ║  retrofocus lens: BFD/EFL = 0.827 at infinity.                     ║
 * ║                                                                    ║
 * ║  8 glass elements / 6 air-separated groups, plus two explicit       ║
 * ║  0.005 mm UV-resin bond layers. Metadata elementCount remains 8     ║
 * ║  because the resin layers are adhesives, not glass lens elements.   ║
 * ║  Four aspherical surfaces: 3A, 4A, 14A, and 15A.                   ║
 * ║                                                                    ║
 * ║  Focus: L7 / G2 moves objectward for close focus. The patent        ║
 * ║  tabulates only infinity focus. The close-focus state below is a    ║
 * ║  paraxial model fitted to Leica's 0.30 m manufacturer MFD:          ║
 * ║  d13 2.6130 -> 1.5033 mm; d15 1.3000 -> 2.4097 mm. The resulting   ║
 * ║  paraxial magnification is about 1:14.6, consistent with Leica's   ║
 * ║  approximate 1:14 specification.                                   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent gives no clear-aperture semi-diameters. Values here  ║
 * ║    are inferred from marginal/chief-ray geometry and then limited  ║
 * ║    by edge-thickness, element-ratio, spherical sd/|R| < 0.90, and ║
 * ║    signed cross-gap sag-intrusion checks.                          ║
 * ║                                                                    ║
 * ║  Verification against the patent prescription:                      ║
 * ║    EFL = 18.4556 mm; BFD = 15.2663 mm; Petzval sum =              ║
 * ║    +0.006176 mm^-1; G1A/G1B/G1/G2/G3 signs = -/+/+/+/-;          ║
 * ║    standalone L1-L8 focal lengths match Table 9B to 4 decimals.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "leica-elmarit-tl-18mm-f28",
  maker: "Leica",
  name: "LEICA ELMARIT-TL 18mm f/2.8 ASPH.",
  subtitle: "US 2020/0341238 A1 — Third Numerical Example",

  catalog: {
    lensMounts: ["l-mount"],
    imageFormat: "aps-c",
    specs: [
      "8 GLASS ELEMENTS / 6 GROUPS",
      "f = 18.4556 mm design",
      "F/2.904 design (f/2.8 nominal)",
      "2ω = 75.8° patent diagonal",
      "4 ASPHERICAL SURFACES",
    ],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: 18, design: 18.4556 },
    fNumber: { marketing: 2.8, design: 2.90444 },
  },

  source: {
    patentNumber: "US 2020/0341238 A1",
    patentYear: 2020,
    authors: ["Hideki Kai"],
    assignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: 34.2753,
      glass: "S-LAH99 (OHARA)",
      apd: false,
      role: "High-index front positive meniscus in the negative G1A front sub-group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.69384,
      vd: 53.1,
      focalLengthMm: -23.8415,
      glass: "K-VC80 (Sumita) / M-LAC130-class moldable lanthanum crown",
      apd: false,
      role: "Double-sided aspheric negative meniscus; principal diverging element of G1A.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: 7.0727,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Strong positive element at the front of G1B; cemented through a thin resin layer to L4.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "C1",
      label: "Bond layer 1",
      type: "UV Resin Cement Layer",
      nd: 1.56732,
      vd: 42.8,
      glass: "UV-curing resin (not counted as a glass element)",
      apd: false,
      role: "0.005 mm optical bond layer between L3 and L4, transcribed explicitly from the patent table.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -8.9971,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Dense-flint negative partner in the first cemented achromatizing pair.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30,
      focalLengthMm: -10.5914,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "Negative front member of the second cemented pair in G1B.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "C2",
      label: "Bond layer 2",
      type: "UV Resin Cement Layer",
      nd: 1.56732,
      vd: 42.8,
      glass: "UV-curing resin (not counted as a glass element)",
      apd: false,
      role: "0.005 mm optical bond layer between L5 and L6, transcribed explicitly from the patent table.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: 9.5266,
      glass: "S-LAH99 (OHARA)",
      apd: false,
      role: "Very-high-index positive rear member of the second cemented pair in G1B.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L7",
      label: "Element 7",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.772,
      vd: 50,
      focalLengthMm: 29.6069,
      glass: "K-LaFK50-class (Sumita) / S-LAH66-class (OHARA)",
      apd: false,
      role: "Single positive internal-focus element; both surfaces are aspherical.",
    },
    {
      id: 10,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.80809,
      vd: 22.8,
      focalLengthMm: -55.6207,
      glass: "S-NPH1 (OHARA)",
      apd: false,
      role: "Fixed negative rear meniscus, convex toward the image side.",
    },
  ],

  surfaces: [
    { label: "1", R: 11.5048, d: 1.6587, sd: 8.3, medium: 1 },
    { label: "2", R: 16.0605, d: 0.4, sd: 7.4 },
    {
      label: "3A",
      R: 9.1135,
      d: 0.6,
      sd: 6,
      medium: 2,
      asphere: { K: 0, A4: -1.61457e-4, A6: 7.00707e-6, A8: -1.73998e-7, A10: 1.71888e-9, A12: 0, A14: 0 },
    },
    {
      label: "4A",
      R: 5.7177,
      d: 3.853,
      sd: 5.1,
      asphere: { K: -5.31488e-1, A4: 1.8377e-4, A6: 9.56358e-6, A8: 2.361e-7, A10: 4.57222e-9, A12: 0, A14: 0 },
    },
    { label: "STO", R: "flat", d: 2.2075 },
    { label: "6", R: -58.8092, d: 2.5278, sd: 4.4, medium: 3 },
    { label: "7", R: -5.4706, d: 0.005, sd: 4.45, medium: 4 },
    { label: "8", R: -5.4706, d: 0.45, sd: 4.45, medium: 5 },
    { label: "9", R: -20.1424, d: 1.163, sd: 5 },
    { label: "10", R: -8.3145, d: 0.5, sd: 5.25, medium: 6 },
    { label: "11", R: 69.1883, d: 0.005, sd: 6.5, medium: 7 },
    { label: "12", R: 69.1883, d: 3.4076, sd: 6.5, medium: 8 },
    { label: "13", R: -10.7881, sd: 7.7 },
    {
      label: "14A",
      R: -33.9521,
      d: 2.3591,
      sd: 8.3,
      medium: 9,
      asphere: { K: 0, A4: -3.34972e-5, A6: -1.35259e-6, A8: 4.1871e-8, A10: -6.42356e-10, A12: 0, A14: 0 },
    },
    {
      label: "15A",
      R: -14.0739,
      sd: 9.3,
      asphere: {
        K: -2.04613,
        A4: -5.18764e-5,
        A6: -2.72762e-7,
        A8: -7.09851e-9,
        A10: 6.26453e-10,
        A12: -1.31377e-11,
        A14: 5.97116e-14,
      },
    },
    { label: "16", R: -18.9964, d: 0.65, sd: 10.6, medium: 10 },
    { label: "17", R: -33.4056, d: 15.26634, sd: 11 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "Internal focus by the single positive G2 element (L7). For near focus L7 moves objectward: d13 decreases and d15 increases by the same amount; the close-focus endpoint is a paraxial fit to Leica's 0.30 m MFD.",
  },

  gaps: { "13": { label: "d13", values: [[2.613, 1.503298]] }, "15A": { label: "d15", values: [[1.3, 2.409702]] } },

  aperture: { nominalFNumber: 2.90444, fStops: [2.90444, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1A (-)", fromSurface: "1", toSurface: "4A" },
    { text: "G1B (+)", fromSurface: "6", toSurface: "13" },
    { text: "G2 IF (+)", fromSurface: "14A", toSurface: "15A" },
    { text: "G3 (-)", fromSurface: "16", toSurface: "17" },
  ],
  doublets: [
    { text: "D1", fromSurface: "6", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "13" },
  ],

  layout: { scFill: 0.62, yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
