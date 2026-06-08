import type { LensDataInput } from "../../types/optics.js";

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
  key: "leica-elmarit-m-135mm-f28",
  maker: "Leica",
  name: "Leica Elmarit-M 135mm f/2.8",
  subtitle: "US 3,108,152 Table II — Eugen Hermanni / Ernst Leitz GmbH",
  specs: ["5 elements / 4 groups", "f ≈ 135.1 mm", "F/2.8", "2ω = 18°", "all-spherical"],

  focalLengthMarketing: 135,
  focalLengthDesign: 135.11,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["leica-m", "leica-r"],
  imageFormat: "135-full-frame",
  patentYear: 1963,
  elementCount: 5,
  groupCount: 4,
  apertureBlades: 12,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62303,
      vd: 60.1,
      fl: 308.5,
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
      fl: 277.3,
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
      fl: 73.5,
      glass: "Unmatched vintage BaK/SK-class crown (patent e-line values)",
      apd: false,
      cemented: "D1",
      role: "Positive crown half of the cemented negative meniscus member; planar rear cemented interface.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave",
      nd: 1.67764,
      vd: 32.0,
      fl: -39.0,
      glass: "SF5-class dense flint (Schott; e-line source values)",
      apd: false,
      cemented: "D1",
      role: "Negative flint half of the cemented member; supplies the strongest negative surface power.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.69416,
      vd: 30.9,
      fl: 154.8,
      glass: "Unmatched SF8-class dense flint (Schott e-line source values; patent ne=1.69416, νe=30.9)",
      apd: false,
      role: "Rear positive meniscus behind the stop; balances the front and cemented-member powers.",
    },
  ],

  surfaces: [
    { label: "1", R: 84.55995, d: 6.75, nd: 1.62303, elemId: 1, sd: 33.0 },
    { label: "2", R: 146.3535, d: 0.081, nd: 1.0, elemId: 0, sd: 32.0 },
    { label: "3", R: 60.9579, d: 5.67, nd: 1.62303, elemId: 2, sd: 32.0 },
    { label: "4", R: 90.83205, d: 0.081, nd: 1.0, elemId: 0, sd: 30.0 },
    { label: "5", R: 41.06295, d: 9.9603, nd: 1.55897, elemId: 3, sd: 26.0 },
    { label: "6", R: 1e15, d: 17.712, nd: 1.67764, elemId: 4, sd: 25.0 },
    { label: "7", R: 26.4222, d: 10.14525, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "STO", R: 1e15, d: 12.39975, nd: 1.0, elemId: 0, sd: 13.32757 },
    { label: "8", R: 69.40755, d: 3.78, nd: 1.69416, elemId: 5, sd: 17.0 },
    { label: "9", R: 191.56635, d: 64.962, nd: 1.0, elemId: 0, sd: 17.0 },
  ],

  asph: {},
  var: {
    "9": [64.962, 80.21492],
  },
  varLabels: [["9", "BF"]],
  focusDescription:
    "Unit focus: the complete optical cell translates on the helical. BF close-focus value is computed paraxially for 1.5 m object distance from the image plane.",

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  closeFocusM: 1.5,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  scFill: 0.56,
  yScFill: 0.6,
} satisfies LensDataInput;

export default LENS_DATA;
