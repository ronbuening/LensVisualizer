import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AI ZOOM-NIKKOR 80-200mm f/4                             ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: US 4,452,513, Embodiment 1 (Yoshinari Hamanishi /          ║
 * ║  Nippon Kogaku K.K.). Exact active prescription: 13 elements in 9          ║
 * ║  air-separated groups, 22 spherical refracting surfaces.                   ║
 * ║                                                                            ║
 * ║  Production identity: Nikon's instruction manual specifies 80-200mm        ║
 * ║  f/4, 13 elements in 9 groups, Nikon bayonet mount, 135-format coverage,   ║
 * ║  and a 1.2 m focal-plane minimum focus distance. The patent design is      ║
 * ║  80.0-195.2 mm f/4 and is not dimensionally rescaled.                      ║
 * ║                                                                            ║
 * ║  Zoom variable gaps: D5, D11, and D14. Only the patent-published wide      ║
 * ║  and tele endpoint spacings are stored; intermediate slider positions      ║
 * ║  are linear interpolation, not additional patent-published states.         ║
 * ║                                                                            ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. Nikon specifies parfocal        ║
 * ║  focusing to 1.2 m. G1-only travel was solved from the patent arrays       ║
 * ║  with G2-G4 and the image plane fixed: 17.047774 mm at 80 mm and           ║
 * ║  17.048840 mm at 195.2 mm. The patent's 0.998 m and 0.680 m test states    ║
 * ║  are not exposed as production focus endpoints.                            ║
 * ║                                                                            ║
 * ║  Stop inference: the patent omits an iris surface. STO is inserted at the  ║
 * ║  G4 entrance, immediately before r15. The stop radius is derived from the  ║
 * ║  design f-number, f/4, and held at every zoom station. The former paraxial ║
 * ║  calibration of the stop gave f/4.000000 at 80 mm and f/4.000037 at        ║
 * ║  195.2 mm. The fixed iris is traced from nominalFNumber at 14.1233 mm,     ║
 * ║  which alone gives f/4.000 at 80 mm and f/3.997 at 195.2 mm. The inferred  ║
 * ║  position reproduces the patent h∞ chief-ray datum to about 0.12 mm in the ║
 * ║  paraxial model.                                                           ║
 * ║                                                                            ║
 * ║  Semi-diameters are inferred from the f/4 on-axis beam, the patent         ║
 * ║  Fig. 3 section, and Nikon's 62 mm attachment / 73 mm barrel envelope.     ║
 * ║  Full-field mechanical vignetting is retained. In G1 the f/4 on-axis       ║
 * ║  ray reaches 24.400 / 24.021 / 23.826 / 23.491 / 23.145 mm on surfaces     ║
 * ║  1-5 at 195.2 mm and infinity focus. Surfaces 1, 3 and 4 carry that        ║
 * ║  height rounded up to 0.1 mm: 24.5, 23.9 and 23.5 mm. FIG. 3 cuts the      ║
 * ║  rims of L11a and L12 square, so surface 2 carries surface 1's 24.5 mm     ║
 * ║  and surface 5 carries surface 4's 23.5 mm; L11b steps in to 23.9 mm       ║
 * ║  at surface 3, as FIG. 3 steps L11 in at the cemented surface.             ║
 * ║  Wide open at infinity the 80 mm station traces f/4.00 on the iris and     ║
 * ║  the 195.2 mm station f/4.00 on the surface-4 rim. At 1.2 m and            ║
 * ║  195.2 mm that rim bounds the on-axis beam and the iris is filled to       ║
 * ║  87 % of its radius; surfaces 6-22 pass the f/4 beam at both focus         ║
 * ║  limits. FIG. 3 draws L11 at about 28.1 mm and L12 at about 26.2 mm.       ║
 * ║  gapSagFrac=0.96 is required at the r9-r10 air lens; the selected          ║
 * ║  13.8 mm shared semi-diameter leaves about 0.182 mm physical rim gap.      ║
 * ║                                                                            ║
 * ║  Glass vendors and line indices are unpublished. Six-digit nd-vd classes   ║
 * ║  are retained except for coefficient-backed equivalents; J-LAFH3           ║
 * ║  reproduces L42's d-line index and one-decimal Abbe class. nC, nF, ng,     ║
 * ║  and dPgF are therefore omitted.                                           ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ai-zoom-nikkor-80-200mm-f4",
  maker: "Nikon",
  name: "NIKON AI ZOOM-NIKKOR 80-200mm f/4",
  subtitle: "US 4,452,513, Embodiment 1 — unscaled 80.0-195.2mm patent design",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "13 ELEMENTS / 9 GROUPS",
      "80-200mm f/4 (MARKETED)",
      "80.0-195.2mm f/4 (DESIGN)",
      "1.2m CLOSE FOCUS",
      "ALL-SPHERICAL",
    ],
    elementCount: 13,
    groupCount: 9,
    focalLengthMm: { marketing: [80, 200], design: [80, 195.2] },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "US 4,452,513",
    patentYear: 1984,
    authors: ["Yoshinari Hamanishi"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L11a",
      label: "G1 front negative",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -185.794,
      glass: "805254 — dense flint class (catalog unresolved)",
      role: "Front member of the cemented G1 focusing component.",
      cemented: "L11",
    },
    {
      id: 2,
      name: "L11b",
      label: "G1 front positive",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 93.228,
      glass: "620603 — crown class (catalog unresolved)",
      role: "Positive partner in the cemented G1 focusing component.",
      cemented: "L11",
    },
    {
      id: 3,
      name: "L12",
      label: "G1 rear positive",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: 332.452,
      glass: "517641 — crown class (catalog unresolved)",
      role: "Rear singlet of the convergent G1 focusing group.",
    },
    {
      id: 4,
      name: "L2a",
      label: "G2 triplet front negative",
      type: "Biconcave Negative",
      nd: 1.78797,
      vd: 47.5,
      focalLengthMm: -58.912,
      glass: "788475 — dense lanthanum glass class (catalog unresolved)",
      role: "Front negative member of the G2 variator triplet.",
      cemented: "L21",
    },
    {
      id: 5,
      name: "L2b",
      label: "G2 triplet positive",
      type: "Biconvex Positive",
      nd: 1.7552,
      vd: 27.6,
      focalLengthMm: 31.536,
      glass: "755276 — dense flint class (catalog unresolved)",
      role: "Positive central member of the G2 variator triplet.",
      cemented: "L21",
    },
    {
      id: 6,
      name: "L2c",
      label: "G2 triplet rear negative",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.8,
      focalLengthMm: -40.091,
      glass: "581408 — light flint class (catalog unresolved)",
      role: "Rear negative member of the G2 variator triplet.",
      cemented: "L21",
    },
    {
      id: 7,
      name: "L22",
      label: "G2 rear negative",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61.2,
      focalLengthMm: -60.143,
      glass: "589612 — crown class (catalog unresolved)",
      role: "Rear negative singlet completing the divergent G2 variator.",
    },
    {
      id: 8,
      name: "L3a",
      label: "G3 positive",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 43.007,
      glass: "620603 — crown class (catalog unresolved)",
      role: "Positive member of the G3 compensator doublet.",
      cemented: "L3",
    },
    {
      id: 9,
      name: "L3b",
      label: "G3 negative",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.6,
      focalLengthMm: -78.971,
      glass: "755276 — dense flint class (catalog unresolved)",
      role: "Negative member of the G3 compensator doublet.",
      cemented: "L3",
    },
    {
      id: 10,
      name: "L41",
      label: "G4 front positive",
      type: "Positive Meniscus",
      nd: 1.67025,
      vd: 57.6,
      focalLengthMm: 75.948,
      glass: "S-LAL52 (OHARA catalog equivalent for patent 670576; production supplier unspecified)",
      role: "Front positive singlet of the fixed relay group.",
    },
    {
      id: 11,
      name: "L42",
      label: "G4 front negative",
      type: "Biconcave Negative",
      nd: 1.79504,
      vd: 28.6,
      focalLengthMm: -262.882,
      glass: "J-LAFH3 (HIKARI; 795287 match to patent 795286 class)",
      role: "Weak negative singlet in the front half of the fixed relay.",
    },
    {
      id: 12,
      name: "L43",
      label: "G4 rear negative",
      type: "Negative Meniscus",
      nd: 1.79668,
      vd: 45.5,
      focalLengthMm: -89.677,
      glass: "797455 — dense lanthanum glass class (catalog unresolved)",
      role: "Negative singlet in the rear relay pair.",
    },
    {
      id: 13,
      name: "L44",
      label: "G4 rear positive",
      type: "Biconvex Positive",
      nd: 1.58267,
      vd: 46.5,
      focalLengthMm: 102.154,
      glass: "583465 — barium flint class (catalog unresolved)",
      role: "Final positive relay singlet adjacent to the image-side back focus.",
    },
  ],

  surfaces: [
    // Surfaces 1, 3, 4: the f/4 on-axis ray height at 195.2 mm, infinity focus, rounded up to 0.1 mm.
    // Surfaces 2 and 5 carry the front-face value of their element: FIG. 3 cuts L11a and L12 square.
    { label: "1", R: 109.097, d: 1.7, sd: 24.5, medium: 1 },
    { label: "2", R: 62.65, d: 8.1, sd: 24.5, medium: 2 },
    { label: "3", R: -716, d: 0.1, sd: 23.9 },
    { label: "4", R: 134.056, d: 4, sd: 23.5, medium: 3 },
    { label: "5", R: 603.844, sd: 23.5 },
    { label: "6", R: -300, d: 1, sd: 15.5, medium: 4 },
    { label: "7", R: 55, d: 6.1, sd: 15.2, medium: 5 },
    { label: "8", R: -40, d: 0.9, sd: 14.6, medium: 6 },
    { label: "9", R: 56.331, d: 4.1, sd: 13.8 },
    { label: "10", R: -44.35, d: 1.1, sd: 13.9, medium: 7 },
    { label: "11", R: 177.834, sd: 14.2 },
    { label: "12", R: 155, d: 5.5, sd: 14.5, medium: 8 },
    { label: "13", R: -31.792, d: 0.9, sd: 14.5, medium: 9 },
    { label: "14", R: -68.917, sd: 14.5 },
    // Iris position inferred at the G4 entrance; the zero spacing preserves patent d14 exactly.
    { label: "STO", R: "flat", d: 0 },
    { label: "15", R: 41.667, d: 5.3, sd: 14.8, medium: 10 },
    { label: "16", R: 217.9, d: 2, sd: 14.3 },
    { label: "17", R: -692.473, d: 2, sd: 14, medium: 11 },
    { label: "18", R: 299.735, d: 53.4, sd: 14 },
    { label: "19", R: -23.344, d: 2.4, sd: 18, medium: 12 },
    { label: "20", R: -36.254, d: 0.2, sd: 18.2 },
    { label: "21", R: 72, d: 5.3, sd: 18.8, medium: 13 },
    { label: "22", R: -334.14, d: 41.366, sd: 19 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 80, label: "Wide" },
      { focalLengthMm: 195.2, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 1.2,
    description:
      "CONSTRAINED_RECONSTRUCTION: Nikon specifies a 1.2 m focal-plane minimum distance and parfocal " +
      "one-ring operation. G1-only travel is code-solved as 17.047774 mm at 80 mm and 17.048840 mm " +
      "at 195.2 mm, with G2-G4 and the image plane fixed. Patent 0.998 m and 0.680 m test states are " +
      "not exposed.",
  },

  gaps: {
    "5": {
      label: "D5 / G1 FOCUS",
      values: [
        [3.034, 20.081774],
        [43.15, 60.19884],
      ],
    },
    "11": {
      label: "D11 / G2-G3",
      values: [
        [30.972, 30.972],
        [1.366, 1.366],
      ],
    },
    "14": {
      label: "D14 / G3-G4",
      values: [
        [16.708, 16.708],
        [6.198, 6.198],
      ],
    },
  },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

  groups: [
    { text: "G1 FOCUS", fromSurface: "1", toSurface: "5" },
    { text: "G2 VARIATOR", fromSurface: "6", toSurface: "11" },
    { text: "G3 COMPENSATOR", fromSurface: "12", toSurface: "14" },
    { text: "G4 RELAY", fromSurface: "15", toSurface: "22" },
  ],
  doublets: [
    { text: "L11", fromSurface: "1", toSurface: "3" },
    { text: "L21", fromSurface: "6", toSurface: "9" },
    { text: "L3", fromSurface: "12", toSurface: "14" },
  ],

  layout: { yScFill: 0.37 },

  checks: { gapSagFrac: 0.96 },
} satisfies LensDataV2Input;

export default LENS_DATA;
