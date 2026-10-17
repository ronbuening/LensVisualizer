import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║         LENS DATA — NIKON R-UW AF MICRO-NIKKOR 50mm f/2.8                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,257,137, Example 1 / Claim 10 (Nikon; Suzuki and       ║
 * ║  Hamanishi). Underwater macro lens for the Nikonos RS system.             ║
 * ║  10 physical glass elements / 9 air-spaced groups, all-spherical.         ║
 * ║  Focus: G2 + G3 translate as one inner-focus unit toward the object.      ║
 * ║                                                                            ║
 * ║  NOTE ON MEDIUM AND FIELD:                                                 ║
 * ║    The patent defines f as the rearward focal length at infinity when the  ║
 * ║    object field medium is water (nw = 1.3306, νw = 53.98). The first      ║
 * ║    unit is a flat plate, so the on-axis paraxial EFL/BFD of the rearward   ║
 * ║    lens prescription still verifies at f ≈ 51.6 mm. The declared          ║
 * ║    rectilinear field is the production 35° underwater field converted to  ║
 * ║    air through the flat port (17.5° in water = 23.59° in air), because the ║
 * ║    app launches rays in air; it reaches the 35 mm frame corner.            ║
 * ║                                                                            ║
 * ║  NOTE ON APERTURE STOP:                                                    ║
 * ║    The patent does not tabulate a stop surface. The stop is inferred from  ║
 * ║    Fig. 1 as lying in the fixed G2/G3 air gap between surfaces 9 and 10;   ║
 * ║    the 8.84 mm air space is split equally. The stop radius is derived from ║
 * ║    the design f-number, f/2.8.                                             ║
 * ║                                                                            ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                   ║
 * ║    Semi-diameters are estimated from combined marginal/chief ray traces    ║
 * ║    for the 35° underwater field, then reduced where needed to satisfy      ║
 * ║    renderer rim limits, cross-gap sag intrusion, and element edge          ║
 * ║    thickness. The patent does not publish clear-aperture diameters.        ║
 * ║                                                                            ║
 * ║  IMPORTANT: This file describes only the optical prescription: glass       ║
 * ║  elements, refractive surfaces, inferred aperture stop, and focus gaps.    ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ruw-af-micro-nikkor-50f28",
  maker: "Nikon",
  name: "NIKON R-UW AF MICRO-NIKKOR 50mm f/2.8",
  subtitle: "US 5,257,137 Example 1 — Nikon / Suzuki & Hamanishi",

  catalog: {
    lensMounts: ["nikonos-rs"],
    imageFormat: "135-full-frame",
    specs: [
      "10 elements / 9 groups",
      "f = 51.6 mm in water",
      "f/2.8",
      "35° underwater field",
      "1:1 macro",
      "all-spherical",
    ],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: { marketing: 50, design: 51.603 },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "US 5,257,137",
    patentYear: 1993,
    authors: ["Fumio Suzuki", "Yoshinari Hamanishi"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "PL",
      label: "Parallel flat port",
      type: "Parallel Flat Plate",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: Infinity,
      glass: "N-BK7 (Schott) / J-BK7A class",
      apd: false,
      role: "Pressure-resistant waterproof window with zero paraxial power.",
    },
    {
      id: 2,
      name: "L2F",
      label: "G2F negative corrector",
      type: "Negative Meniscus",
      nd: 1.76684,
      vd: 46.8,
      focalLengthMm: -46.66,
      glass: "J-LASFH2 (Hikari; patent nd=1.76684, vd=46.8)",
      apd: false,
      role: "Negative forward G2 unit correcting water-port distortion and lateral color.",
    },
    {
      id: 3,
      name: "L2R1",
      label: "G2R positive meniscus",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 68.31,
      glass: "N-SF6 / S-TIH6 / J-SF6 dense flint class (805254)",
      apd: false,
      role: "Positive rear G2 element balancing the strong negative forward corrector.",
    },
    {
      id: 4,
      name: "L2R2",
      label: "Cemented doublet positive",
      type: "Biconvex Positive",
      nd: 1.79668,
      vd: 45.4,
      focalLengthMm: 31.09,
      glass: "J-LASF017 (Hikari, 795453) close class; patent nd higher by about 0.0017",
      apd: false,
      role: "Positive component of the nearly afocal G2R cemented doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L2R3",
      label: "Cemented doublet negative",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: -31.04,
      glass: "SF1 / S-TIH1 / J-SF1 dense flint class (717295)",
      apd: false,
      role: "Negative high-dispersion component cemented to L2R2 for chromatic correction.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L31",
      label: "G3 front negative",
      type: "Biconcave Negative",
      nd: 1.86074,
      vd: 23.0,
      focalLengthMm: -35.76,
      glass: "J-SFH2 (Hikari; patent coordinate 861230)",
      apd: false,
      role: "High-index dense flint at the entrance to the positive power core.",
    },
    {
      id: 7,
      name: "L32",
      label: "G3 main positive",
      type: "Biconvex Positive",
      nd: 1.79668,
      vd: 45.4,
      focalLengthMm: 28.21,
      glass: "J-LASF017 (Hikari, 795453) close class; patent nd higher by about 0.0017",
      apd: false,
      role: "Principal positive-power element of G3.",
    },
    {
      id: 8,
      name: "L33",
      label: "G3 rear positive meniscus",
      type: "Positive Meniscus",
      nd: 1.79631,
      vd: 40.9,
      focalLengthMm: 115.63,
      glass: "NBFD2 (HOYA catalog equivalent; production supplier unspecified; patent 796409)",
      apd: false,
      role: "Weak positive meniscus completing G3 and moderating off-axis aberrations.",
    },
    {
      id: 9,
      name: "L41",
      label: "G4 positive corrector",
      type: "Biconvex Positive",
      nd: 1.60717,
      vd: 40.3,
      focalLengthMm: 48.9,
      glass: "BAFD3 (HOYA catalog equivalent; production supplier unspecified; patent 607403)",
      apd: false,
      role: "Positive element in the otherwise negative fixed rear group.",
    },
    {
      id: 10,
      name: "L42",
      label: "G4 rear negative",
      type: "Biconcave Negative",
      nd: 1.79668,
      vd: 45.4,
      focalLengthMm: -38.04,
      glass: "J-LASF017 (Hikari, 795453) close class; patent nd higher by about 0.0017",
      apd: false,
      role: "Dominant negative element of the fixed rear field group.",
    },
  ],

  surfaces: [
    { label: "1", R: "flat", d: 10.0, sd: 40.0, medium: 1 },
    { label: "2", R: "flat", sd: 40.0 },
    { label: "3", R: 35.336, d: 3.5, sd: 18.3, medium: 2 },
    { label: "4", R: 17.014, d: 9.0, sd: 15.25 },
    { label: "5", R: 31.805, d: 3.5, sd: 16.0, medium: 3 },
    { label: "6", R: 71.705, d: 0.1, sd: 15.0 },
    { label: "7", R: 36.369, d: 5.0, sd: 15.0, medium: 4 },
    { label: "8", R: -72.941, d: 2.0, sd: 14.2, medium: 5 },
    { label: "9", R: 32.415, d: 4.42, sd: 12.8 },
    { label: "STO", R: "flat", d: 4.42 },
    { label: "10", R: -55.01, d: 2.5, sd: 12.4, medium: 6 },
    { label: "11", R: 71.364, d: 0.7, sd: 11.4 },
    { label: "12", R: 222.194, d: 7.3, sd: 11.4, medium: 7 },
    { label: "13", R: -24.641, d: 0.1, sd: 14.25 },
    { label: "14", R: 35.473, d: 3.5, sd: 15.0, medium: 8 },
    { label: "15", R: 55.18, sd: 15.0 },
    { label: "16", R: 259.906, d: 6.0, sd: 17.3, medium: 9 },
    { label: "17", R: -33.23, d: 1.7, sd: 17.3 },
    { label: "18", R: -31.796, d: 2.0, sd: 17.3, medium: 10 },
    { label: "19", R: 664.6, d: 45.047, sd: 17.3 },
  ],

  focus: {
    closeFocusM: 0.167,
    keyframes: [0, 0.6967361668974719, 1],
    description: "Inner focus: G2 + G3 translate toward the object; D2 decreases while D15 increases.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "2": { label: "D2", values: [[43.0605, 24.2389, 5.4172]] },
    "15": { label: "D15", values: [[4.4407, 23.2623, 42.084]] },
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  /* The app traces with air in front of the flat port, so the production 35° underwater field is declared at its
   * in-air equivalent: asin(1.3306 · sin 17.5°) = 23.59° half-field. */
  projection: { kind: "rectilinear", fullFieldDeg: 47.18, maxTraceFieldDeg: 23.59 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2F", fromSurface: "3", toSurface: "4" },
    { text: "G2R", fromSurface: "5", toSurface: "9" },
    { text: "G3", fromSurface: "10", toSurface: "15" },
    { text: "G4", fromSurface: "16", toSurface: "19" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  layout: { scFill: 0.62, yScFill: 0.78 },
} satisfies LensDataV2Input;

export default LENS_DATA;
