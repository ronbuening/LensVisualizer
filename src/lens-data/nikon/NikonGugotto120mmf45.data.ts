import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — Nikon Gugutto Macro 120mm f/4.5               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,764,425, Example 4, Kouichi Ohshita / Nikon.    ║
 * ║  Two-group, three-element all-spherical telephoto macro lens.       ║
 * ║  3 elements / 2 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: unit extension; only the final back-focus gap changes.      ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription is normalized to f = 100. All radii,         ║
 * ║    thicknesses, air spaces, and inferred semi-diameters are scaled  ║
 * ║    by ×1.2 to match the 120 mm production focal length.             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    US 5,764,425 does not publish semi-diameters. Values below were  ║
 * ║    inferred from paraxial entrance-pupil geometry, full-frame field ║
 * ║    coverage, the patent's fixed-stop/vignetting architecture, edge  ║
 * ║    thickness, sd/|R|, and cross-gap sag limits.                     ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces from front element to image plane  ║
 * ║    ✓ Aperture stop, fixed stop, and unit-focus BFD variation        ║
 * ║    ✗ No sensor glass, filters, mechanical parts, or donor designs  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-gugotto-120mm-f45",
  maker: "Nikon",
  name: "NIKON GUGUTTO MACRO 120mm f/4.5",
  subtitle: "US 5,764,425 Example 4 — Kouichi Ohshita / Nikon",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "3 elements / 2 groups",
      "120mm f/4.5 fixed aperture",
      "US5764425 Example 4 scaled ×1.2",
      "all-spherical telephoto macro",
    ],
    elementCount: 3,
    groupCount: 2,
    focalLengthMm: { marketing: 120, design: 120.002 },
    fNumber: { marketing: 4.5, design: 4.6 },
  },

  source: {
    patentNumber: "US 5,764,425",
    patentYear: 1998,
    authors: ["Kouichi Ohshita"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front positive element",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.09,
      focalLengthMm: 41.63,
      glass: "Q-SK55S / L-BAL35 class (589/611, uncertain 1995 melt)",
      apd: false,
      role: "Primary positive element of the cemented front group; supplies most of the converging power.",
      cemented: "L12",
    },
    {
      id: 2,
      name: "L2",
      label: "Rear element of front doublet",
      type: "Biconcave Negative",
      nd: 1.80384,
      vd: 33.89,
      focalLengthMm: -72.95,
      glass: "804339 - dense flint (E-LAFH2 code match; patent nd=1.80384, vd=33.89)",
      apd: false,
      role: "High-index negative achromatizing element cemented to L1; controls axial and lateral color and doublet spherical aberration.",
      cemented: "L12",
    },
    {
      id: 3,
      name: "L3",
      label: "Rear negative meniscus",
      type: "Negative Meniscus (convex to image)",
      nd: 1.58913,
      vd: 61.09,
      focalLengthMm: -283.62,
      glass: "Q-SK55S / L-BAL35 class (589/611, uncertain 1995 melt)",
      apd: false,
      role: "Weak negative rear group; provides the telephoto ratio and acts as the field-flattening diverging component.",
    },
  ],

  surfaces: [
    { label: "1", R: 32.29764, d: 6.20004, sd: 16.1, medium: 1 },
    { label: "2", R: -94.69164, d: 1.40004, sd: 16.1, medium: 2 },
    { label: "3", R: 155.0232, d: 20.00004, sd: 16.0 },
    { label: "STO", R: "flat", d: 15.0 },
    // Patent surface 5: fixed stop FS, positioned between the aperture stop and L3.
    { label: "5", R: "flat", d: 12.0, sd: 10.8 },
    { label: "6", R: -12.99312, d: 6.79884, sd: 11.5, medium: 3 },
    { label: "7", R: -16.82172, sd: 14.3 },
  ],

  focus: {
    closeFocusM: 0.64,
    description:
      "Unit focus by whole optical assembly extension. Standard Gugutto Macro configuration focuses to about 0.64 m at approximately 1/3×; Sarani Gugutto close-up reassembly is not modeled here.",
  },

  gaps: { "7": { label: "BF", values: [[48.7884, 88.55647]] } },

  aperture: { nominalFNumber: 4.6, fStops: [4.6], maxFNumber: 4.6 },

  groups: [
    { text: "Front positive L12", fromSurface: "1", toSurface: "3" },
    { text: "Rear negative L3", fromSurface: "6", toSurface: "7" },
  ],
  doublets: [{ text: "L12", fromSurface: "1", toSurface: "3" }],

  layout: { scFill: 0.58, yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
