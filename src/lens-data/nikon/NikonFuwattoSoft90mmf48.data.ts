import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Nikon Fuwatto Soft 90mm f/4.8                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 5,796,530, Example Embodiment 2, second soft-focus      ║
 * ║  configuration (Table 2).                                           ║
 * ║                                                                    ║
 * ║  This file transcribes only the production Fuwatto Soft state:      ║
 * ║  the rear negative meniscus group is removed, the cemented front    ║
 * ║  doublet is reversed, and the aperture stop sits objectwise of the  ║
 * ║  glass. The sharp-focus Gugutto Macro parent configuration is       ║
 * ║  discussed in the companion analysis but is not included here.      ║
 * ║                                                                    ║
 * ║  Patent scale: f = 75.522 mm in the second soft-focus state.        ║
 * ║  Production scale: ×1.2, giving computed f = 90.627 mm. All radii,  ║
 * ║  center thicknesses, air spaces, and estimated semi-diameters are   ║
 * ║  scaled by ×1.2 from the patent prescription.                       ║
 * ║                                                                    ║
 * ║  Focus: unit extension. The patent gives infinity data only. The    ║
 * ║  close-focus back focus below is paraxially solved for the          ║
 * ║  production soft-focus minimum focus distance of 0.40 m.            ║
 * ║                                                                    ║
 * ║  Semi-diameters: the stop radius is derived from the design         ║
 * ║  f-number, using the marketed 90 mm f/4.8 entrance pupil. Glass     ║
 * ║  SDs are estimated from the scaled patent field and checked         ║
 * ║  against rim slope, edge thickness, and element SD-ratio            ║
 * ║  constraints.                                                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-fuwatto-soft-90mm-f48",
  maker: "Nikon",
  name: "NIKON FUWATTO SOFT 90mm f/4.8",
  subtitle: "US 5,796,530 Example 2 — second soft-focus configuration",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "1 group / 2 elements",
      "f = 90.63 mm computed; 90 mm marketed",
      "f/4.8 fixed aperture",
      "MFD 0.40 m",
      "all-spherical cemented doublet",
    ],
    elementCount: 2,
    groupCount: 1,
    focalLengthMm: { marketing: 90, design: 90.6267 },
    fNumber: { marketing: 4.8, design: 4.95 },
  },

  source: {
    patentNumber: "US 5,796,530",
    patentYear: 1998,
    authors: ["Kouichi Ohshita"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L12",
      label: "Front element in Fuwatto state (patent L12)",
      type: "Biconcave Negative",
      nd: 1.80384,
      vd: 33.89,
      focalLengthMm: -60.71,
      glass: "E-LAFH2 (HIKARI, historical/obsolete; 804/339)",
      apd: false,
      role: "High-index flint element of the cemented achromat; front element after the patent doublet is reversed for soft-focus use.",
      cemented: "G1",
    },
    {
      id: 2,
      name: "L11",
      label: "Rear element in Fuwatto state (patent L11)",
      type: "Biconvex Positive",
      nd: 1.6228,
      vd: 57.03,
      focalLengthMm: 38.38,
      glass: "S-BSM10 (OHARA; 623/570)",
      apd: false,
      role: "Positive crown element carrying most of the doublet power; its strongly convex original front surface becomes the rear image-side surface in Fuwatto use.",
      cemented: "G1",
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 20.00004 },
    { label: "1", R: -94.95084, d: 1.40004, sd: 14.5, medium: 1 },
    { label: "2", R: 101.0646, d: 6.20004, sd: 14.5, medium: 2 },
    { label: "3", R: -30.57408, sd: 14.5 },
  ],

  focus: {
    closeFocusM: 0.4,
    description: "Unit extension; the whole reversed cemented doublet and stop translate together.",
  },

  gaps: { "3": { label: "BF", values: [[94.77708, 144.30234]] } },

  aperture: { nominalFNumber: 4.8, fStops: [4.8, 5.6, 6, 8, 11, 16], maxFNumber: 16 },

  groups: [{ text: "G1 reversed soft-focus doublet", fromSurface: "1", toSurface: "3" }],
  doublets: [{ text: "G1", fromSurface: "1", toSurface: "3" }],

  layout: { scFill: 0.44, yScFill: 0.52 },
} satisfies LensDataV2Input;

export default LENS_DATA;
