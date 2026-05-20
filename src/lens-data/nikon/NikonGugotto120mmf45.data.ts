import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — Nikon Gugutto Macro 120mm f/4.5               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,764,425, Example 4, Koichi Ohshita / Nikon.     ║
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
  key: "nikon-gugotto-120mm-f45",
  maker: "Nikon",
  name: "Nikon Gugutto Macro 120mm f/4.5",
  subtitle: "US 5,764,425 Example 4 — Koichi Ohshita / Nikon",
  specs: [
    "3 elements / 2 groups",
    "120mm f/4.5 fixed aperture",
    "US5764425 Example 4 scaled ×1.2",
    "all-spherical telephoto macro",
  ],

  focalLengthMarketing: 120,
  focalLengthDesign: 120.002,
  apertureMarketing: 4.5,
  apertureDesign: 4.6,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentYear: 1998,
  elementCount: 3,
  groupCount: 2,
  focusDescription:
    "Unit focus by whole optical assembly extension. Standard Gugutto Macro configuration focuses to about 0.64 m at approximately 1/3×; Sarani Gugutto close-up reassembly is not modeled here.",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front positive element",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.09,
      fl: 41.63,
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
      fl: -72.95,
      glass: "804339 — dense flint (patent nd=1.80384, νd=33.89; exact public catalog match not identified)",
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
      fl: -283.62,
      glass: "Q-SK55S / L-BAL35 class (589/611, uncertain 1995 melt)",
      apd: false,
      role: "Weak negative rear group; provides the telephoto ratio and acts as the field-flattening diverging component.",
    },
  ],

  surfaces: [
    { label: "1", R: 32.29764, d: 6.20004, nd: 1.58913, elemId: 1, sd: 16.1 },
    { label: "2", R: -94.69164, d: 1.40004, nd: 1.80384, elemId: 2, sd: 16.1 },
    { label: "3", R: 155.0232, d: 20.00004, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "STO", R: 1e15, d: 15.0, nd: 1.0, elemId: 0, sd: 9.18 },
    // Patent surface 5: fixed stop FS, positioned between the aperture stop and L3.
    { label: "5", R: 1e15, d: 12.0, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "6", R: -12.99312, d: 6.79884, nd: 1.58913, elemId: 3, sd: 11.5 },
    { label: "7", R: -16.82172, d: 48.7884, nd: 1.0, elemId: 0, sd: 14.3 },
  ],

  asph: {},

  var: {
    "7": [48.7884, 88.55647],
  },
  varLabels: [["7", "BF"]],

  groups: [
    { text: "Front positive L12", fromSurface: "1", toSurface: "3" },
    { text: "Rear negative L3", fromSurface: "6", toSurface: "7" },
  ],
  doublets: [{ text: "L12", fromSurface: "1", toSurface: "3" }],

  closeFocusM: 0.64,
  nominalFno: 4.5,
  maxFstop: 4.5,
  fstopSeries: [4.5],
  scFill: 0.58,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
