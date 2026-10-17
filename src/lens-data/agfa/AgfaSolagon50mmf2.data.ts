import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — AGFA SOLAGON 50mm f/2                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,745,315 Example 1 (Theodor Brendel / Agfa).      ║
 * ║  Six-element, four-group double-Gauss with plane cemented           ║
 * ║  surfaces in both negative inner menisci.                           ║
 * ║  6 elements / 4 groups, all spherical.                              ║
 * ║  Focus: unit focus; only the final image-side gap changes.          ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent prescription is normalized to f = 100 mm. All radii,      ║
 * ║    thicknesses, air spaces, back focus, and estimated                ║
 * ║    semi-diameters are scaled ×0.5 to the production 50 mm class.     ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                             ║
 * ║    The patent table gives only the full central air space l2. The    ║
 * ║    aperture stop is shown in Fig. 1 inside that gap; here l2 is      ║
 * ║    split equally around STO (5.22 mm + 5.22 mm after scaling).       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent omits clear-aperture data. Semi-diameters are          ║
 * ║    estimated from paraxial marginal/chief-ray traces, the Fig. 1     ║
 * ║    relative element proportions, edge-thickness checks, and the      ║
 * ║    renderer's spherical-rim and same-element diameter constraints.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "agfa-solagon-50mm-f2",
  maker: "Agfa",
  name: "AGFA SOLAGON 50mm f/2",
  subtitle: "US 2,745,315 Example 1 — Brendel / Agfa",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 50.08 mm", "F/2", "2ω ≈ 46.7°", "ALL-SPHERICAL"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { marketing: 50, design: 50.0848 },
    fNumber: { marketing: 2 },
  },

  source: {
    patentNumber: "US 2,745,315",
    patentYear: 1956,
    authors: ["Theodor Brendel"],
    assignees: ["Agfa Camera-Werk AG"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.623,
      vd: 58.1,
      focalLengthMm: 82.165,
      glass: "N-SK15 / SK15 class (Schott; patent 623/581)",
      role: "Front positive meniscus; one of the two low-dispersion outer singlets.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.6667,
      vd: 48.4,
      focalLengthMm: 25.367,
      glass: "S-BAH11 (Ohara) / BaF11 cross-reference class (patent 667/484)",
      role: "Positive element of the front cemented meniscus; plane rear cemented interface.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.6254,
      vd: 35.6,
      focalLengthMm: -18.838,
      glass: "F7 (HOYA catalog equivalent; production supplier unspecified; patent 625356)",
      role: "Negative element of the front cemented meniscus; concave rear surface faces the stop.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Concave-Plano Negative",
      nd: 1.6254,
      vd: 35.6,
      focalLengthMm: -23.356,
      glass: "F7 (HOYA catalog equivalent; production supplier unspecified; patent 625356)",
      role: "Negative element of the rear cemented meniscus; concave front surface faces the stop.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.6667,
      vd: 48.4,
      focalLengthMm: 32.134,
      glass: "S-BAH11 (Ohara) / BaF11 cross-reference class (patent 667/484)",
      role: "Positive element of the rear cemented meniscus; plane front cemented interface.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.623,
      vd: 58.1,
      focalLengthMm: 47.252,
      glass: "N-SK15 / SK15 class (Schott; patent 623/581)",
      role: "Rear positive singlet; strongest rear-half contributor to final convergence.",
    },
  ],

  surfaces: [
    { label: "1", R: 34.9215, d: 3.33, sd: 14.2, medium: 1 },
    { label: "2", R: 105.8665, d: 0.305, sd: 13.2 },
    { label: "3", R: 16.9125, d: 5.795, sd: 11.2, medium: 2 },
    { label: "4", R: "flat", d: 1.445, sd: 11.2, medium: 3 },
    { label: "5", R: 11.7815, d: 5.22, sd: 10.0 },

    // STO position inferred from Fig. 1; l2 split equally around the iris.
    { label: "STO", R: "flat", d: 5.22 },

    { label: "6", R: -14.607, d: 1.495, sd: 10.2, medium: 4 },
    { label: "7", R: "flat", d: 5.41, sd: 11.2, medium: 5 },
    { label: "8", R: -21.4235, d: 0.05, sd: 12.9 },
    { label: "9", R: 310.015, d: 3.135, sd: 12.8, medium: 6 },
    { label: "10", R: -32.4, sd: 12.8 },
  ],

  focus: {
    closeFocusM: 0.9144,
    description:
      "Unit focus; final back-focus gap varies from infinity to a representative 0.914 m (3 ft) close-focus setting; this finite state is not patent-published.",
  },

  gaps: { "10": { label: "BF", values: [[34.301821, 37.37203]] } },

  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4, 5.6, 8, 11, 16] },

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

  layout: { scFill: 0.53, yScFill: 0.62 },
} satisfies LensDataV2Input;

export default LENS_DATA;
