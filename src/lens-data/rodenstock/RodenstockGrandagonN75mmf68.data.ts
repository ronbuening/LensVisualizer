import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ RODENSTOCK GRANDAGON-N 75mm f/6.8                                         ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: DE 26 35 415 B1, claim/example 1, Optische Werke G.           ║
 * ║ Rodenstock. Six-element, four-group all-spherical wide-angle objective.    ║
 * ║                                                                            ║
 * ║ Patent normalization: f' = 100 at the mercury e-line. All radii, axial     ║
 * ║ distances, back focus, and semi-diameters are scaled by 0.75 to the        ║
 * ║ 75 mm production focal length.                                             ║
 * ║                                                                            ║
 * ║ Index convention: the patent reports n_e / ν_e, not n_d / ν_d. The         ║
 * ║ LensDataInput field names are retained, but the stored optical indices     ║
 * ║ below preserve the patent e-line prescription so the paraxial geometry     ║
 * ║ reproduces the patent's f' = 100 design. Catalog d-line equivalents are    ║
 * ║ documented in the companion analysis.                                      ║
 * ║                                                                            ║
 * ║ Semi-diameters: not patent-listed. They are conservative estimates from    ║
 * ║ paraxial marginal/chief-ray envelopes, the patent baffle diameters,        ║
 * ║ the 58 mm production filter thread, and renderer constraints.              ║
 * ║                                                                            ║
 * ║ Focus: unit focus by view-camera bellows. The close-focus state below is   ║
 * ║ a 1.0 m visualization reference; the real close-focus limit depends on     ║
 * ║ the camera bellows or helical mount.                                       ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "rodenstock-grandagon-n-75mm-f68",
  maker: "Rodenstock",
  name: "RODENSTOCK GRANDAGON-N 75mm f/6.8",
  subtitle: "DE 26 35 415 B1 Example 1 — Optische Werke G. Rodenstock",

  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "4x5",
    specs: ["6 ELEMENTS / 4 GROUPS", "f = 75 mm", "F/6.8", "2ω = 102°", "IMAGE CIRCLE 187 mm", "ALL-SPHERICAL"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { marketing: 75, design: 74.98183 },
    fNumber: { marketing: 6.8, design: 6.8 },
  },

  source: {
    patentNumber: "DE 26 35 415 B1",
    patentYear: 1977,
    authors: ["Franz Schlegel", "Josef Weiß"],
    assignees: ["Optische Werke G. Rodenstock"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5246,
      vd: 59.22,
      indexReference: "e",
      focalLengthMm: -44.17,
      glass: "K5 class; K5 catalog e-line spectral proxy (production supplier unspecified)",
      role: "Front negative meniscus; outer Petzval counterweight and front ray bender.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7343,
      vd: 28.47,
      indexReference: "e",
      focalLengthMm: -50.48,
      glass: "Unmatched (legacy dense flint; DE2635415 lists n_e=1.7343, v_e=28.47)",
      role: "High-index flint member of the front cemented positive group.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6269,
      vd: 46.71,
      indexReference: "e",
      focalLengthMm: 17.5,
      glass: "BaF8 class; E-BAF8 catalog e-line spectral proxy (production supplier unspecified)",
      role: "Lower-dispersion partner of the front cemented group; contains the b1 stray-light baffle in the patent drawing.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6541,
      vd: 38.86,
      indexReference: "e",
      focalLengthMm: 15.24,
      glass: "Unmatched (BaSF4-class glass; DE2635415 lists n_e=1.6541, v_e=38.86)",
      role: "Strong positive member of the rear cemented group; contains the b2 stray-light baffle in the patent drawing.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.7273,
      vd: 29.02,
      indexReference: "e",
      focalLengthMm: -35.03,
      glass: "SF18 class; S-TIH18 catalog e-line spectral proxy (production supplier unspecified)",
      role: "Dense-flint negative partner of the rear cemented positive group.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.5246,
      vd: 59.22,
      indexReference: "e",
      focalLengthMm: -46.66,
      glass: "K5 class; K5 catalog e-line spectral proxy (production supplier unspecified)",
      role: "Rear negative meniscus; balances the front meniscus and helps flatten the image field.",
    },
  ],

  surfaces: [
    { label: "1", R: 76.635, d: 2.4675, sd: 19.0, medium: 1 },
    { label: "2", R: 17.595, d: 10.0275, sd: 15.8 },
    { label: "3", R: 19.6725, d: 10.9425, sd: 10.6, medium: 2 },
    { label: "4", R: 9.825, d: 8.8125, sd: 8.5, medium: 3 },
    { label: "5", R: 61.53, d: 0.96, sd: 6.8 },
    { label: "STO", R: "flat", d: 1.005 },
    { label: "6", R: 127.2675, d: 7.8525, sd: 6.8, medium: 4 },
    { label: "7", R: -10.5525, d: 8.895, sd: 8.5, medium: 5 },
    { label: "8", R: -24.405, d: 10.0275, sd: 10.6 },
    { label: "9", R: -20.61, d: 2.0025, sd: 15.8, medium: 6 },
    { label: "10", R: -134.8125, sd: 19.0 },
  ],

  focus: {
    closeFocusM: 1.0,
    description: "Unit focus by camera bellows; BF close state is a 1.0 m visualization reference.",
  },

  gaps: { "10": { label: "BF", values: [[51.58441, 58.45311]] } },

  aperture: { nominalFNumber: 6.8, fStops: [6.8, 8, 11, 16, 22, 32, 45], maxFNumber: 45 },

  projection: { kind: "rectilinear", fullFieldDeg: 102, maxTraceFieldDeg: 51 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { scFill: 0.58, yScFill: 0.82 },

  rays: { offAxisFieldFrac: 0.6 },
} satisfies LensDataV2Input;

export default LENS_DATA;
