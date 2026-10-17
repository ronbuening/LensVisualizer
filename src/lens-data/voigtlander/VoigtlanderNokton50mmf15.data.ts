import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER NOKTON 50mm f/1.5                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Optical source: US 2,646,721, Example 1 / Figure 2.               ║
 * ║  Production correlation: Voigtländer NOKTON 50mm f/1.5 for the     ║
 * ║  Prominent 24 × 36 mm system.                                      ║
 * ║  Architecture: 7 elements / 5 air-spaced groups / 2 cemented       ║
 * ║  doublets; all surfaces are spherical.                             ║
 * ║                                                                    ║
 * ║  SCALE: the patent table is normalized to f = 1.0 and Figure 2 is  ║
 * ║  described at f = 150 mm. Every dimensional prescription value is  ║
 * ║  scaled uniformly ×50 for this production-correlated model. No     ║
 * ║  asphere scaling is required.                                      ║
 * ║                                                                    ║
 * ║  STOP: the patent publishes only the total diaphragm space a3. STO ║
 * ║  is placed at its Figure-2 midpoint: 5.8405 mm after surface 7 and ║
 * ║  5.8405 mm before surface 8. Its radius is derived from the design ║
 * ║  f-number, set by the published f/1.5 entrance aperture.           ║
 * ║                                                                    ║
 * ║  FOCUS STATUS — CONSTRAINED_RECONSTRUCTION: the patent gives no    ║
 * ║  focus states. Unit focus preserves every internal spacing and     ║
 * ║  increases only the final image-space gap for the manufacturer's   ║
 * ║  3 ft 6 in setting, treated as 1.0668 m from the film plane.       ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: not published. They are inferred from exact       ║
 * ║  spherical marginal/chief-ray traces, the Figure-2 silhouette,     ║
 * ║  positive edge thickness, rim slope, cross-gap clearance, and      ║
 * ║  off-axis clipping checks. A 600 dpi Figure-2 audit reduced the    ║
 * ║  pre-stop pair and equalized the rear doublet rims to reproduce the ║
 * ║  drawing's dominant front-doublet silhouette. The thin stop-side    ║
 * ║  rim remains limited by curvature and is not a source dimension.    ║
 * ║                                                                    ║
 * ║  SPECTRAL LIMIT: only d-line nd and νd are published. nC, nF, ng, ║
 * ║  and dPgF are omitted rather than inferred.                        ║
 * ║                                                                    ║
 * ║  Excluded: sensor cover glass, filters, dummy planes, flare        ║
 * ║  cutters, and mechanical parts; none belongs to the prescription. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "voigtlander-nokton-50f15",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER NOKTON 50mm f/1.5",
  subtitle: "US 2,646,721 A — sole numerical example / Figure 2; uniformly scaled ×50",

  catalog: {
    lensMounts: ["voigtlander-prominent"],
    imageFormat: "135-full-frame",
    specs: [
      "7 ELEMENTS / 5 GROUPS",
      "f = 49.9999 mm (DESIGN)",
      "f/1.5000 (DESIGN)",
      "2ω ≈ 46.8° (135 FORMAT, PARAXIAL)",
      "ALL-SPHERICAL",
    ],
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: { marketing: 50, design: 49.99988582182795 },
    fNumber: { marketing: 1.5, design: 1.4999965746548385 },
  },

  source: {
    patentNumber: "US 2,646,721 A",
    patentYear: 1953,
    authors: ["Albrecht Wilhelm Tronnier"],
    assignees: ["Voigtländer & Sohn AG"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.70315,
      vd: 41.1,
      focalLengthMm: -80.99535704846417,
      glass: "BASF7 (Sumita catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Diverging front member of patent Group I.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.62095,
      vd: 60.3,
      focalLengthMm: 40.58510299122209,
      glass: "N-SK16 (Schott catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Converging rear member of patent Group I.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.62095,
      vd: 60.3,
      focalLengthMm: 40.58510299122209,
      glass: "N-SK16 (Schott catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Converging front member of patent Group II.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.5325,
      vd: 46.2,
      focalLengthMm: -26.318061708431262,
      glass: "FTM8 (Ohara catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Low-index negative member adjacent to the diaphragm.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.64783,
      vd: 33.8,
      focalLengthMm: -17.366277620480624,
      glass: "SF2 (Schott catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Diverging front member of patent Group III.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.61948,
      vd: 60.4,
      focalLengthMm: 24.05581460846287,
      glass: "N-SK16 (Schott catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Converging rear member of patent Group III.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.70315,
      vd: 41.1,
      focalLengthMm: 34.99846969762474,
      glass: "BASF7 (Sumita catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "High-index positive rear singlet forming patent Group IV.",
    },
  ],

  surfaces: [
    { label: "1", R: 33.3045, d: 1.682, sd: 17.2, medium: 1 },
    { label: "2", R: 20.577, d: 6.635, sd: 16.15, medium: 2 },
    { label: "3", R: 98.2875, d: 0.514, sd: 16.1 },
    { label: "4", R: 20.577, d: 6.635, sd: 11.5, medium: 3 },
    { label: "5", R: 98.2875, d: 0.7475, sd: 11.5 },
    { label: "6", R: 122.948, d: 2.4295, sd: 11.5, medium: 4 },
    { label: "7", R: 12.494, d: 5.8405, sd: 10.25 },
    { label: "STO", R: "flat", d: 5.8405 },
    { label: "8", R: -14.7085, d: 0.981, sd: 11.5, medium: 5 },
    { label: "9", R: 49.1065, d: 4.906, sd: 11.5, medium: 6 },
    { label: "10", R: -20.577, d: 0.187, sd: 11.5 },
    { label: "11", R: 122.948, d: 3.224, sd: 11.9, medium: 7 },
    { label: "12", R: -30.4345, sd: 11.9 },
  ],

  focus: {
    closeFocusM: 1.0668,
    description:
      "CONSTRAINED_RECONSTRUCTION: unit focus inferred from the Prominent body focusing mechanism; all internal " +
      "spacings remain fixed and the R11-to-image gap increases from 30.012222 mm at infinity to 32.572237 mm at " +
      "1.0668 m, assuming the distance is measured from the film plane.",
  },

  gaps: { "12": { label: "BF", values: [[30.012221991244715, 32.57223722492306]] } },

  aperture: { nominalFNumber: 1.4999965746548385, fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "3" },
    { text: "II", fromSurface: "4", toSurface: "7" },
    { text: "III", fromSurface: "8", toSurface: "10" },
    { text: "IV", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
