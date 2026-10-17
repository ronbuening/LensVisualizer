import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — NIKON UV-NIKKOR 105mm f/4.5                      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP S61-090115 (A), Example 4, Wakamiya / Nippon      ║
 * ║  Kogaku. Six-element, six-group all-spherical UV objective using   ║
 * ║  only CaF2 and SiO2.                                               ║
 * ║                                                                    ║
 * ║  Scaling: patent table is normalized at f = 100. All radii,        ║
 * ║  thicknesses, BF, and semi-diameters are scaled ×1.05 to the       ║
 * ║  105 mm UV-Nikkor production focal length.                         ║
 * ║                                                                    ║
 * ║  Stop: the patent does not list an aperture-stop surface. STO is   ║
 * ║  inserted at the midpoint of the L2-L3 D spacing; the stop radius  ║
 * ║  is derived from the design f-number, F/4.5.                       ║
 * ║                                                                    ║
   * ║  Semi-diameters: patent does not publish clear apertures. Values   ║
   * ║  were estimated from F/4.5 marginal and 23.4° full-field chief-ray ║
   * ║  traces, then constrained by edge thickness and by the very narrow ║
   * ║  R10/R11 rear air gap. The L4 outer SDs are kept close to the      ║
   * ║  constrained 10/11 throat so the rear pair follows Fig. 4.         ║
   * ║                                                                    ║
 * ║  Focus: unit focus. Internal spacings are fixed; close focus is    ║
 * ║  modeled as BF extension from infinity to β = -0.5.                ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-uv-nikkor-105mm-f45",
  maker: "Nikon",
  name: "NIKON UV-NIKKOR 105mm f/4.5",
  subtitle: "JP S61-090115 (A) Example 4 — Wakamiya / Nippon Kogaku",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["6 elements / 6 groups", "f = 105 mm", "f/4.5", "2ω = 23.4°", "CaF₂ + SiO₂"],
    elementCount: 6,
    groupCount: 6,
    focalLengthMm: { marketing: 105, design: 104.997 },
    fNumber: { marketing: 4.5, design: 4.5 },
  },

  source: {
    patentNumber: "JP S61-090115 A",
    patentYear: 1986,
    authors: ["Koichi Wakamiya"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.45851,
      vd: 67.93,
      focalLengthMm: -45.431,
      glass: "Fused silica (SiO2, patent material)",
      apd: false,
      role: "Front negative field-flattening element in L1.",
      dPgF: -0.00154,
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.43388,
      vd: 95.57,
      focalLengthMm: 67.018,
      glass: "Calcium fluoride (CaF2, patent material)",
      apd: "patent",
      apdNote: "θgF = 0.542; ΔPgF = +0.05895 from patent material table.",
      role: "Positive CaF₂ partner of the weak negative L1 component.",
      dPgF: 0.05895,
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.43388,
      vd: 95.57,
      focalLengthMm: 53.524,
      glass: "Calcium fluoride (CaF2, patent material)",
      apd: "patent",
      apdNote: "θgF = 0.542; ΔPgF = +0.05895 from patent material table.",
      role: "Main pre-stop positive component L2.",
      dPgF: 0.05895,
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.45851,
      vd: 67.93,
      focalLengthMm: -41.221,
      glass: "Fused silica (SiO2, patent material)",
      apd: false,
      role: "Strong negative L3 component; rear radius is condition (3) radius R.",
      dPgF: -0.00154,
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.43388,
      vd: 95.57,
      focalLengthMm: 41.406,
      glass: "Calcium fluoride (CaF2, patent material)",
      apd: "patent",
      apdNote: "θgF = 0.542; ΔPgF = +0.05895 from patent material table.",
      role: "Strong positive front element of L4 with steep image-side surface.",
      dPgF: 0.05895,
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.45851,
      vd: 67.93,
      focalLengthMm: -93.858,
      glass: "Fused silica (SiO2, patent material)",
      apd: false,
      role: "Rear negative meniscus of the quasi-cemented separated L4 correcting pair.",
      dPgF: -0.00154,
    },
  ],

  surfaces: [
    { label: "1", R: -34.5492, d: 1.39755, sd: 15.9, medium: 1 },
    { label: "2", R: 53.12685, d: 3.79365, sd: 15.75 },
    { label: "3", R: 127.05735, d: 7.78575, sd: 16.65, medium: 2 },
    { label: "4", R: -37.0083, d: 0.1995, sd: 16.15 },
    { label: "5", R: 32.71485, d: 7.98525, sd: 16.35, medium: 3 },
    { label: "6", R: -74.1279, d: 8.3601, sd: 15.7 },
    { label: "STO", R: "flat", d: 8.3601 },
    { label: "7", R: -32.71485, d: 1.4973, sd: 12.0, medium: 4 },
    { label: "8", R: 45.40305, d: 6.28845, sd: 12.1 },
    { label: "9", R: 188.20935, d: 9.3828, sd: 12.7, medium: 5 },
    { label: "10", R: -19.5615, d: 0.11655, sd: 11.45 },
    { label: "11", R: -19.1352, d: 1.99605, sd: 11.45, medium: 6 },
    { label: "12", R: -35.58555, sd: 12.55 },
  ],

  focus: { closeFocusM: 0.48, description: "Unit focusing; modeled by BF extension from infinity to β = -0.5." },

  gaps: { "12": { label: "BF", values: [[86.90325, 139.40325]] } },

  aperture: { nominalFNumber: 4.5, fStops: [4.5, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "4" },
    { text: "L2", fromSurface: "5", toSurface: "6" },
    { text: "L3", fromSurface: "7", toSurface: "8" },
    { text: "L4", fromSurface: "9", toSurface: "12" },
  ],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.58 },
} satisfies LensDataV2Input;

export default LENS_DATA;
