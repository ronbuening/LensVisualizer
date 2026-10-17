import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — Nikon AI-S Nikkor 50mm f/1.2                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,621,909, Example 3 / Table 3.                  ║
 * ║  Patent embodiment: all-spherical seven-element modified Gauss     ║
 * ║  normal lens with a three-unit short-distance correction scheme.   ║
 * ║                                                                    ║
 * ║  Production identification: Nikon AI/AI-S 50mm f/1.2, Nikon F      ║
 * ║  mount, 7 elements / 6 groups, 46° field, 52 mm filter.            ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS:                                                    ║
 * ║    The variable gaps below reproduce the patent's published        ║
 * ║    close-focus state at d0 = 514.966 mm from the first surface,    ║
 * ║    m ≈ -0.10. Nikon's production specification for the AI-S lens   ║
 * ║    is 0.5 m and 1:7.9; the production lens should not be inferred  ║
 * ║    to use the patent's three-unit floating mechanism.              ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear apertures. SDs were estimated ║
 * ║    from entrance-pupil geometry, the 52 mm filter constraint,       ║
 * ║    element-edge thickness, sd/|R|, and signed cross-gap sag checks. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ais-nikkor-50mm-f12",
  maker: "Nikon",
  name: "NIKON AI-S NIKKOR 50mm f/1.2",
  subtitle: "US 4,621,909 Example 3 — Hamanishi / Nippon Kogaku",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "7 elements / 6 groups",
      "f = 51.6 mm design / 50 mm nominal",
      "F1.2",
      "2ω = 46.4° patent / 46° Nikon spec",
      "All-spherical modified Gauss",
    ],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: { marketing: 50, design: 51.614 },
    fNumber: { marketing: 1.2, design: 1.2 },
  },

  source: {
    patentNumber: "US 4,621,909",
    patentYear: 1986,
    authors: ["Yoshinari Hamanishi"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.79668,
      vd: 45.5,
      focalLengthMm: 78.015,
      glass: "Unmatched Nikon/Hikari lanthanum glass (797/455; J-LASF017 / TAF2 class)",
      role: "Front high-index positive meniscus; part of the field-flattening and spherical-aberration balance.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.79631,
      vd: 41,
      focalLengthMm: 79.894,
      glass: "796410 class; NBFD2 catalog spectral proxy (production supplier unspecified)",
      role: "Main positive member of the front unit; high index keeps the Gauss front group compact.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: -35.3,
      glass: "J-SF1 / E-FD1L class (717/295)",
      role: "Dense-flint negative meniscus ahead of the stop; forms the strong central Gauss air space.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Lens",
      nd: 1.7552,
      vd: 27.6,
      focalLengthMm: -22.762,
      glass: "J-SF4 / N-SF4 class (755/276)",
      role: "High-dispersion negative member of the rear cemented achromatizing doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Lens",
      nd: 1.77279,
      vd: 49.4,
      focalLengthMm: 35.372,
      glass: "J-LASF016 / TAF1 class (773/494 patent; catalog class 773/496)",
      role: "Positive lanthanum partner of the cemented rear doublet; the L4+L5 pair is net negative.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.77279,
      vd: 49.4,
      focalLengthMm: 60.573,
      glass: "J-LASF016 / TAF1 class (773/494 patent; catalog class 773/496)",
      role: "Positive rear-group meniscus, convex to the image side; supplies most of G2's positive power.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.7443,
      vd: 49.5,
      focalLengthMm: 93.214,
      glass: "S-LAM60 / J-LAF010 / NBF1 class (744/495 patent; catalog class 743/493)",
      role: "High-index rear singlet that preserves back focus and holds the Petzval sum down.",
    },
  ],

  surfaces: [
    { label: "1", R: 47.07, d: 5.3, sd: 23.4, medium: 1 },
    { label: "2", R: 184.282, d: 0.6, sd: 23.4 },
    { label: "3", R: 29.92, d: 7.15, sd: 22.5, medium: 2 },
    { label: "4", R: 50.5, d: 2, sd: 21.4 },
    { label: "5", R: 60.5, d: 1, sd: 15.8, medium: 3 },
    // D1 is the full L3↔L4 space. The stop is fixed 8.7 mm ahead of r7, so this pre-stop segment varies.
    { label: "6", R: 17.728, sd: 14.7 },
    { label: "STO", R: "flat", d: 8.7 },
    { label: "7", R: -17.5, d: 1.3, sd: 14.7, medium: 4 },
    { label: "8", R: 1000, d: 8.45, sd: 17.8, medium: 5 },
    { label: "9", R: -28, d: 0.1, sd: 17.8 },
    { label: "10", R: -142, d: 6.8, sd: 18.7, medium: 6 },
    { label: "11", R: -35.94, sd: 18.9 },
    { label: "12", R: 92, d: 3.3, sd: 19.2, medium: 7 },
    { label: "13", R: -277.852, sd: 19.2 },
  ],

  focus: {
    closeFocusM: 0.5,
    description:
      "Patent three-unit floating short-distance correction; variable-gap endpoint is d0 = 514.966 mm from the first surface and m ≈ -0.10. Production AI-S specification is 0.5 m and 1:7.9.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    "6": { label: "D1", values: [[8.9, 9.551]] },
    "11": { label: "D2", values: [[0.516, 2.003]] },
    "13": { label: "BF", values: [[38.049, 42.756]] },
  },

  aperture: { nominalFNumber: 1.2, fStops: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7", toSurface: "11" },
    { text: "G3", fromSurface: "12", toSurface: "13" },
  ],
  doublets: [{ text: "L4+L5", fromSurface: "7", toSurface: "9" }],

  layout: { scFill: 0.5, yScFill: 0.44 },

  rays: { offAxisFieldFrac: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
