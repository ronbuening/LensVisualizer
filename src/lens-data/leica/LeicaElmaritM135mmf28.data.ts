import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — Leica Elmarit-M 135mm f/2.8                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,108,152, Table II / claim 2 (Eugen Hermanni,    ║
 * ║  Ernst Leitz GmbH). Five-element four-member long-focus objective. ║
 * ║  5 elements / 4 groups, all spherical.                             ║
 * ║  Focus: unit focus; only the rear BF gap varies in this model.     ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription is normalized at f = 1.00. Radii, axial     ║
 * ║    spacings, and inferred semi-diameters are scaled ×135.0 to the  ║
 * ║    marketed 135 mm focal length. The paraxial e-line EFL of the    ║
 * ║    scaled prescription is 135.11 mm due to table rounding.         ║
 * ║                                                                    ║
 * ║  NOTE ON WAVELENGTH:                                               ║
 * ║    US 3,108,152 tabulates n_e and ν_e, not d-line n_d and ν_d.     ║
 * ║    The schema field names remain nd/vd, but the stored values here ║
 * ║    are the patent's e-line values to preserve the patent trace.    ║
 * ║                                                                    ║
 * ║  NOTE ON STOP AND SEMI-DIAMETERS:                                  ║
 * ║    The patent gives no clear-aperture diameters and no numerical   ║
 * ║    stop coordinate inside a7. STO is inferred from the patent       ║
 * ║    drawing at 45% of a7 after surface 7. Semi-diameters are         ║
 * ║    inferred from the f/2.8 entrance pupil, the 18° field, published ║
 * ║    exterior diameter/filter constraints, element edge thickness,    ║
 * ║    and cross-gap sag clearance.                                    ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes only the optical design: glass      ║
 * ║  elements, air spaces, the aperture stop, and focus BF travel.     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "leica-elmarit-m-135mm-f28",
  maker: "Leica",
  name: "LEICA ELMARIT-M 135mm f/2.8",
  subtitle: "US 3,108,152 Table II — Eugen Hermanni / Ernst Leitz GmbH",

  catalog: {
    lensMounts: ["leica-m", "leica-r"],
    imageFormat: "135-full-frame",
    specs: ["5 elements / 4 groups", "f ≈ 135.1 mm", "F/2.8", "2ω = 18°", "all-spherical"],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { marketing: 135, design: 135.11 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 3,108,152",
    patentYear: 1963,
    authors: ["Eugen Hermanni"],
    assignees: ["Ernst Leitz GmbH"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62303,
      vd: 60.1,
      indexReference: "e",
      focalLengthMm: 308.5,
      glass: "Leitz proprietary / N-SK16-class crown (e-line source values)",
      apd: false,
      role: "First positive meniscus in the split front collector; convex toward the object.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62303,
      vd: 60.1,
      indexReference: "e",
      focalLengthMm: 277.3,
      glass: "Leitz proprietary / N-SK16-class crown (e-line source values)",
      apd: false,
      role: "Second positive meniscus in the front collector, separated from L1 and L3 by thin air lenses.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Convex",
      nd: 1.55897,
      vd: 58.3,
      indexReference: "e",
      focalLengthMm: 73.5,
      glass: "Unmatched vintage BaK/SK-class crown (patent e-line values)",
      apd: false,
      role: "Positive crown half of the cemented negative meniscus member; planar rear cemented interface.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave",
      nd: 1.67764,
      vd: 32.0,
      indexReference: "e",
      focalLengthMm: -39.0,
      glass: "SF5 (Schott; patent ne=1.67764, ve=32.0 stored as nd/vd)",
      apd: false,
      role: "Negative flint half of the cemented member; supplies the strongest negative surface power.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.69416,
      vd: 30.9,
      indexReference: "e",
      focalLengthMm: 154.8,
      glass: "Unmatched SF8-class dense flint (Schott e-line source values; patent ne=1.69416, νe=30.9)",
      apd: false,
      role: "Rear positive meniscus behind the stop; balances the front and cemented-member powers.",
    },
  ],

  surfaces: [
    { label: "1", R: 84.55995, d: 6.75, sd: 33.0, medium: 1 },
    { label: "2", R: 146.3535, d: 0.081, sd: 32.0 },
    { label: "3", R: 60.9579, d: 5.67, sd: 32.0, medium: 2 },
    { label: "4", R: 90.83205, d: 0.081, sd: 30.0 },
    { label: "5", R: 41.06295, d: 9.9603, sd: 26.0, medium: 3 },
    { label: "6", R: "flat", d: 17.712, sd: 25.0, medium: 4 },
    { label: "7", R: 26.4222, d: 10.14525, sd: 20.0 },
    { label: "STO", R: "flat", d: 12.39975 },
    { label: "8", R: 69.40755, d: 3.78, sd: 17.0, medium: 5 },
    { label: "9", R: 191.56635, sd: 17.0 },
  ],

  focus: {
    closeFocusM: 1.5,
    description:
      "Unit focus: the complete optical cell translates on the helical. BF close-focus value is computed paraxially for 1.5 m object distance from the image plane.",
  },

  gaps: { "9": { label: "BF", values: [[64.962, 80.21492]] } },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 12 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  layout: { scFill: 0.56, yScFill: 0.6 },
} satisfies LensDataV2Input;

export default LENS_DATA;
