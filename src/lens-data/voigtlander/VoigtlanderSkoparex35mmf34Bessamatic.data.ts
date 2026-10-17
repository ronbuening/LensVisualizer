import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER SKOPAREX 35mm f/3.4 (Bessamatic)                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,927,506, Example 1 / Figure 2 (Fritz Determann).       ║
 * ║  Production correlation: Bessamatic Skoparex 35mm f/3.4, 6 elements /   ║
 * ║  5 groups, DKL-family mount, 24×36 mm format.                             ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes only the  ║
 * ║  infinity prescription; the production 39 in / 0.9906 m close-focus      ║
 * ║  specification is metadata only and does not drive internal movement.     ║
 * ║                                                                            ║
 * ║  SCALE: The patent table is normalized to f=1.0000. All prescription      ║
 * ║  lengths are scaled ×35. No aspheres are present. The resulting Gaussian  ║
 * ║  EFL is 35.001633 mm.                                                     ║
 * ║                                                                            ║
 * ║  CEMENTED INTERFACE: Patent rows R10 and R11 are coincident, have the      ║
 * ║  same radius, and are separated by a5=0. They are one physical L5→L6      ║
 * ║  interface here. Surface "10" therefore uses downstream L6's elemId and  ║
 * ║  refractive index.                                                        ║
 * ║                                                                            ║
 * ║  STOP: The patent gives only the total R8→R9 diaphragm space a4. Figure 2  ║
 * ║  places the iris close to R9; the model uses a documented 79% / 21% split  ║
 * ║  of a4 (R8→STO / STO→R9). The stop radius is derived from the design       ║
 * ║  f-number, exactly 3.4 at infinity, using the actual prescription.         ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent publishes none. Values below are inferred and  ║
 * ║  independently checked by exact spherical tracing to the 24×36 mm sensor  ║
 * ║  diagonal edge at wide open. Edge thickness, rim slope, cross-gap         ║
 * ║  intrusion, sensor-edge containment, and render-trim proxy checks all     ║
 * ║  pass for the authored visualization geometry.                            ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "voigtlander-skoparex-35f34-bessamatic",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER SKOPAREX 35mm f/3.4 (Bessamatic)",
  subtitle: "US 2,927,506 Example 1 — correlated to the Bessamatic Skoparex 35mm f/3.4",

  catalog: {
    lensMounts: ["dkl"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 5 GROUPS", "35mm f/3.4", "63° DIAGONAL (MARKETED)", "DKL / BESSAMATIC", "ALL-SPHERICAL"],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: { marketing: 35, design: 35.001633119 },
    fNumber: { marketing: 3.4, design: 3.4 },
  },

  source: {
    patentNumber: "US 2,927,506",
    patentYear: 1960,
    authors: ["Fritz Determann"],
    assignees: ["Voigtländer AG"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.50137,
      vd: 56.5,
      indexReference: "d",
      focalLengthMm: -71.475888,
      glass: "501565 — K10-class crown (vendor not established by patent)",
      apd: false,
      role: "Front diverging meniscus that establishes the long-back-focus retrofocus geometry.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.664466,
      vd: 35.9,
      indexReference: "d",
      focalLengthMm: 68.53473,
      glass: "664359 — BASF2-class dense barium flint (vendor not established by patent)",
      apd: false,
      role: "Inserted positive meniscus preceding the patent's triplet variation.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.62374,
      vd: 47,
      indexReference: "d",
      focalLengthMm: 23.421841,
      glass: "624470 — BAF8-class barium flint (vendor not established by patent)",
      apd: false,
      role: "Strong positive element preceding the negative L4 member.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.60717,
      vd: 40.2,
      indexReference: "d",
      focalLengthMm: -14.490711,
      glass: "607402 — BAFD3 compatible spectral proxy; patent vendor unspecified",
      apd: false,
      role: "Negative element paired with L3 across the patent's characteristic vicinal surfaces.",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.61659,
      vd: 36.6,
      indexReference: "d",
      focalLengthMm: -18.973899,
      glass: "617366 — F4/PBM4-class flint (vendor not established by patent)",
      apd: false,
      role: "Front component of the cemented rear doublet.",
      diagramLabel: "L5",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.691,
      vd: 54.8,
      indexReference: "d",
      focalLengthMm: 11.451038,
      glass: "691548 — LAK9-class lanthanum crown (vendor not established by patent)",
      apd: false,
      role: "Strong positive rear element of the cemented doublet.",
      diagramLabel: "L6",
      cemented: "D1",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 31.79057, d: 2.17595, sd: 16.7, medium: 1 },
    { label: "2", R: 16.46106, d: 16.4416, sd: 14 },
    { label: "3", R: 18.743585, d: 1.6443, sd: 9.5, medium: 2 },
    { label: "4", R: 30.739275, d: 0.17395, sd: 9.5 },
    { label: "5", R: 15.61966, d: 3.72365, sd: 8.6, medium: 3 },
    { label: "6", R: -205.13479, d: 1.1606, sd: 8.6 },
    { label: "7", R: -33.850635, d: 0.56105, sd: 6.9, medium: 4 },
    { label: "8", R: 11.96272, d: 1.757434, sd: 6.6 },
    // STO position inferred from Figure 2: 79% through the patent's a4 gap from R8 toward R9.
    { label: "STO", R: "flat", d: 0.467166 },
    { label: "9", R: 2960.479025, d: 0.4837, sd: 8, medium: 5 },
    // Patent R10/R11 collapsed to one physical L5→L6 cemented interface; downstream L6 owns the junction.
    { label: "10", R: 11.65234, d: 5.41625, sd: 8, medium: 6 },
    // Infinity BFD is recomputed from the scaled prescription; patent header s'0=1.0493f is rounded.
    { label: "12", R: -19.971875, d: 36.724732365, sd: 8 },
  ],

  /* (moved from var) No internal focus motion is reconstructed from the production close-focus specification. */
  focus: {
    closeFocusM: 0.9906,
    description:
      "The patent provides only an infinity prescription; the documented 0.99 m minimum focus distance is not modeled.",
  },

  aperture: { nominalFNumber: 3.4, fStops: [3.4, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "12" },
  ],
  doublets: [{ text: "D1", fromSurface: "9", toSurface: "12" }],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
