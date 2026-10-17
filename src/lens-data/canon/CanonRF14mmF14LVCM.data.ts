import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — CANON RF 14mm f/1.4 L VCM                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2025/0389929 A1, Numerical Example 1 (Canon).   ║
 * ║  Unscaled patent design: f = 14.42 mm, Fno = 1.46.               ║
 * ║  Production identity: Canon RF14mm F1.4 L VCM, marketed 14/1.4. ║
 * ║  18 elements / 13 groups; 5 aspherical surfaces on 3 elements.  ║
 * ║                                                                    ║
 * ║  Focus status: PUBLISHED. Surfaces 23–29A form the moving second ║
 * ║  lens group. At the published -0.1× state, D22 changes           ║
 * ║  5.08→4.08 mm and D29 changes 2.20→3.21 mm.                     ║
 * ║  The patent row "First surface from object plane = 240.532 mm"  ║
 * ║  is retained in the audit; literal use contradicts the stated   ║
 * ║  magnification, so comparison treats 240.532 mm as an            ║
 * ║  image-plane-referenced total object distance / MFD.             ║
 * ║                                                                    ║
 * ║  NO SCALING: patent f = 14.42 mm is retained. Marketing 14 mm    ║
 * ║  remains separate in focalLengthMarketing. K and aspheres are     ║
 * ║  transcribed without coefficient scaling.                         ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: the patent does not publish clear apertures. SDs  ║
 * ║  are modeling values derived from the rendered Fig. 1 optical      ║
 * ║  section, the f/1.46 pupil constraint, exact meridional ray        ║
 * ║  envelopes at the default 0.6 field fraction, and the current      ║
 * ║  edge/slope/cross-gap geometry rules. The stop radius is derived   ║
 * ║  from the design f-number; it is not a patent-published aperture   ║
 * ║  diameter.                                                         ║
 * ║                                                                    ║
 * ║  Spectral note: the patent publishes θgF, but not complete       ║
 * ║  nC/nF/ng triplets, for G9, G11, G12, and G14. Their dPgF values ║
 * ║  below are computed from θgF using the SCHOTT Pg,F normal line.  ║
 * ║  Qualified catalog equivalents provide C/d/F curves; authored    ║
 * ║  patent partial dispersion remains authoritative at g.           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-rf-14mm-f14-l-vcm",
  maker: "Canon",
  name: "CANON RF 14mm f/1.4 L VCM",
  subtitle: "US 2025/0389929 A1 — Numerical Example 1; strong production correlation",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "18 ELEMENTS / 13 GROUPS",
      "14mm f/1.4 (marketed)",
      "f = 14.42mm / Fno 1.46 (Example 1)",
      "3 ASPHERICAL ELEMENTS / 5 ASPHERICAL SURFACES",
      "0.24m MFD / 0.11× (production)",
    ],
    elementCount: 18,
    groupCount: 13,
    focalLengthMm: { marketing: 14, design: 14.417626521333258 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "US 2025/0389929 A1",
    patentYear: 2025,
    authors: ["Takahiro Saito"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: -40.86184744412536,
      glass: "S-BAL42 catalog equivalent (patent 583594; production supplier unspecified)",
      diagramLabel: "G1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.65,
      focalLengthMm: -97.45628281399131,
      glass: "FCD1 catalog equivalent (patent 497817; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Canon's one-UD production count and optical cross-section make patent G2 the strongest UD-location correlation.",
      role: "Front low-dispersion negative element; strongest production UD-location correlation from Canon's optical cross-section.",
      diagramLabel: "G2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.804,
      vd: 46.5,
      focalLengthMm: -34.81371470267882,
      glass: "S-LAH65V catalog equivalent (patent 804465; production supplier unspecified)",
      diagramLabel: "G3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.66565,
      vd: 35.6,
      focalLengthMm: 87.85308587230477,
      glass: "H-ZBaF4 catalog equivalent (patent 666356; production supplier unspecified)",
      diagramLabel: "G4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: -61.564294688343814,
      glass: "CaF2 fluorite (Canon production-correlation inference; patent G5 coordinates)",
      apd: "inferred",
      apdNote:
        "Canon's one-fluorite production count, concave fluorite description, and patent G5 coordinate support this correlation.",
      role: "Negative fluorite-correlated element identified by production architecture.",
      diagramLabel: "G5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.3,
      focalLengthMm: 20.570757112959527,
      glass: "S-LAH97 catalog equivalent (patent 755523; production supplier unspecified)",
      diagramLabel: "G6",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -62.2180735779808,
      glass: "S-TIH53 catalog equivalent (patent 847238; production supplier unspecified)",
      diagramLabel: "G7",
      cemented: "C1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: 46.32259664092224,
      glass: "TAFD5G catalog equivalent (patent 835427; production supplier unspecified)",
      diagramLabel: "G8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.77047,
      vd: 29.74,
      focalLengthMm: -52.47559585202313,
      glass: "NBFD29 catalog equivalent (patent 770297; production supplier unspecified)",
      apd: "patent",
      apdNote: "Patent θgF = 0.5951; dPgF computed against the SCHOTT Pg,F normal line.",
      diagramLabel: "G9",
      dPgF: 0.00132268,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: 24.973323947692432,
      glass: "S-LAH99 catalog equivalent (patent 001291; production supplier unspecified)",
      diagramLabel: "G10",
      cemented: "C2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.5706,
      vd: 20.08,
      focalLengthMm: 198.36864259446364,
      glass: "Unmatched (Canon BR optical resin)",
      apd: "patent",
      apdNote: "Patent θgF = 0.7782; dPgF computed against the SCHOTT Pg,F normal line.",
      role: "BR-resin member of the cemented triplet immediately behind the stop.",
      diagramLabel: "G11",
      cemented: "C2",
      dPgF: 0.16817456,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.66565,
      vd: 35.64,
      focalLengthMm: -33.36746965765283,
      glass: "H-ZBaF4 catalog equivalent (patent 666356; production supplier unspecified)",
      apd: "patent",
      apdNote: "Patent θgF = 0.5824; dPgF computed against the SCHOTT Pg,F normal line.",
      diagramLabel: "G12",
      cemented: "C2",
      dPgF: -0.00145352,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.66,
      focalLengthMm: 36.95652849212771,
      glass: "S-FPL55 catalog equivalent (patent 439947; production supplier unspecified)",
      role: "Low-dispersion positive member of the moving focus group; vendor and production special-element identity remain unresolved.",
      diagramLabel: "G13",
      cemented: "C3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.77047,
      vd: 29.74,
      focalLengthMm: -25.60982499541075,
      glass: "NBFD29 catalog equivalent (patent 770297; production supplier unspecified)",
      apd: "patent",
      apdNote: "Patent θgF = 0.5951; dPgF computed against the SCHOTT Pg,F normal line.",
      diagramLabel: "G14",
      cemented: "C3",
      dPgF: 0.00132268,
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.65,
      focalLengthMm: 36.91291254169684,
      glass: "FCD1 catalog equivalent (patent 497817; production supplier unspecified)",
      diagramLabel: "G15",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.854,
      vd: 40.4,
      focalLengthMm: 52.62882387174715,
      glass: "L-LAH85V catalog equivalent (patent 854404; production supplier unspecified)",
      diagramLabel: "G16",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: 39.23913580924248,
      glass: "FCD515 catalog equivalent (patent 593686; production supplier unspecified)",
      diagramLabel: "G17",
      cemented: "C4",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconcave Negative",
      nd: 1.9165,
      vd: 31.6,
      focalLengthMm: -23.318482688363726,
      glass: "S-LAH88 catalog equivalent (patent 917316; production supplier unspecified)",
      diagramLabel: "G18",
      cemented: "C4",
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 30.434,
      d: 2.5,
      sd: 27.8,
      medium: 1,
      asphere: { K: 0, A4: -9.44889e-6, A6: -2.78211e-9, A8: 1.38292e-11, A10: -1.87056e-14, A12: 7.67401e-18, A14: 0 },
    },
    {
      label: "2A",
      R: 12.96,
      d: 14.47,
      sd: 19.2,
      asphere: { K: -0.68209, A4: -2.1692e-6, A6: -9.17628e-9, A8: -2.33882e-10, A10: 8.26939e-13, A12: -1.85607e-15, A14: 0 },
    },
    { label: "3", R: -8220.485, d: 1.6, sd: 17.3, medium: 2 },
    { label: "4", R: 48.726, d: 5.09, sd: 16.8 },
    { label: "5", R: -52.293, d: 2.0, sd: 14.6, medium: 3 },
    {
      label: "6A",
      R: 61.254,
      d: 0.2,
      sd: 14.2,
      asphere: { K: 0, A4: 2.29625e-5, A6: 1.76297e-8, A8: 4.18666e-10, A10: -2.45395e-12, A12: 6.29348e-15, A14: 0 },
    },
    { label: "7", R: 30.423, d: 3.13, sd: 14.4, medium: 4 },
    { label: "8", R: 60.805, d: 4.01, sd: 12.5 },
    { label: "9", R: -38.272, d: 1.2, sd: 14.4, medium: 5 },
    { label: "10", R: 89.263, d: 0.2, sd: 13.9 },
    { label: "11", R: 33.379, d: 9.18, sd: 14.6, medium: 6 },
    { label: "12", R: -25.609, d: 1.05, sd: 14.6, medium: 7 },
    { label: "13", R: -50.774, d: 0.2, sd: 14.6 },
    { label: "14", R: 121.888, d: 4.07, sd: 14.2, medium: 8 },
    { label: "15", R: -55.78, d: 3.62, sd: 14.2 },
    { label: "16", R: -26.631, d: 1.1, sd: 13.3, medium: 9 },
    { label: "17", R: -79.426, d: 2.0, sd: 13.6 },
    { label: "STO", R: "flat", d: 2.43 },
    { label: "19", R: 52.498, d: 5.84, sd: 13.9, medium: 10 },
    { label: "20", R: -45.067, d: 1.0, sd: 13.9, medium: 11 },
    { label: "21", R: -32.493, d: 1.1, sd: 13.9, medium: 12 },
    { label: "22", R: 71.141, sd: 13.7 },
    { label: "23", R: -120.281, d: 7.55, sd: 12.6, medium: 13 },
    { label: "24", R: -14.562, d: 1.0, sd: 12.6, medium: 14 },
    { label: "25", R: -57.242, d: 0.2, sd: 14.0 },
    { label: "26", R: 39.251, d: 8.64, sd: 15.6, medium: 15 },
    { label: "27", R: -31.928, d: 0.6, sd: 15.6 },
    {
      label: "28A",
      R: 137.086,
      d: 4.68,
      sd: 16.1,
      medium: 16,
      asphere: { K: 0, A4: -2.179e-5, A6: -7.22596e-9, A8: -1.48661e-10, A10: 1.85432e-12, A12: -3.03305e-15, A14: 0 },
    },
    {
      label: "29A",
      R: -65.817,
      sd: 16.1,
      asphere: { K: 0, A4: -1.07831e-5, A6: -3.03321e-9, A8: -5.03844e-11, A10: 1.22127e-12, A12: -1.50312e-15, A14: 0 },
    },
    { label: "30", R: -1214.157, d: 7.51, sd: 16.4, medium: 17 },
    { label: "31", R: -22.877, d: 1.05, sd: 16.4, medium: 18 },
    { label: "32", R: 331.855, d: 14.0, sd: 16.4 },
  ],

  focus: {
    closeFocusM: 0.24,
    description:
      "PUBLISHED rear-focus state: patent L2 (data surfaces 23–29A) translates toward the object; D22 5.08→4.08 mm and D29 2.20→3.21 mm. The patent's 240.532 mm row is preserved in the audit and treated as an image-plane-referenced total object distance/MFD because literal first-surface use contradicts the stated -0.1× conjugate.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { "22": { label: "D22", values: [[5.08, 4.08]] }, "29A": { label: "D29", values: [[2.2, 3.21]] } },

  aperture: { nominalFNumber: 1.46, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 11 },

  groups: [
    { text: "L1 (FIXED)", fromSurface: "1A", toSurface: "22" },
    { text: "L2 (OBJECTWARD FOCUS)", fromSurface: "23", toSurface: "29A" },
    { text: "L3 (FIXED)", fromSurface: "30", toSurface: "32" },
  ],
  doublets: [
    { text: "C1", fromSurface: "11", toSurface: "13" },
    { text: "C2", fromSurface: "19", toSurface: "22" },
    { text: "C3", fromSurface: "23", toSurface: "25" },
    { text: "C4", fromSurface: "30", toSurface: "32" },
  ],

  layout: { yScFill: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
