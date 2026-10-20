// Root-level draft import. When authoring directly in a maker folder use "../../types/optics.js";
// generate:metadata rewrites it when it organizes a root-level draft. See LENS_DATA_SPEC.md § Quick Start.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SONY FE 600mm f/4 GM OSS                                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2025-63175 A, Example 4 (Sony Group Corporation).   ║
 * ║  Patent prescription retained unscaled: published f = 581.97 mm,     ║
 * ║  Fno 4.12, ω = 2.11°. Production metadata kept separate: 600 mm,     ║
 * ║  f/4, Sony E full frame.                                             ║
 * ║  23 elements / 17 groups, 0 aspherical surfaces (all spherical).     ║
 * ║  Focus: PUBLISHED inner focus. Cemented GR2 (L21+L22) moves 19.47 mm ║
 * ║    objectward; Table 12 d14/d17 = 51.20/9.54 (∞) and 31.73/29.00     ║
 * ║    (4.5 m, object-to-image). GR1, GR3 and the image plane are fixed. ║
 * ║                                                                      ║
 * ║  IMAGE PLANE: last gap is the printed BF 39.18 mm; the paraxial BFD  ║
 * ║    of the rounded table is 39.150 mm (−0.030 mm, within rounding).   ║
 * ║  NOTE ON STOP: the patent places the stop at S21 but publishes no    ║
 * ║    diameter. STO sd = 16.50583 mm is a paraxial calibration to the   ║
 * ║    published Fno 4.12 at the parsed-model EFL (the value buildLens   ║
 * ║    adopts, because its real-ray marginal is clipped at S4). A real   ║
 * ║    ray at the f/4.12 entrance-pupil radius (70.64 mm) crosses the    ║
 * ║    stop plane at 16.75 mm. Not a published diaphragm size; not       ║
 * ║    independent f-number evidence.                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: modeled, not source-published. Derived from ║
 * ║    exact meridional envelopes (axial f/4.12 and 0.6-field bundles at ║
 * ║    ∞ and 4.5 m, L11 = 76.0 mm as the off-axis vignetting aperture,   ║
 * ║    consistent with patent Fig. 13), then capped by geometry policy.  ║
 * ║  SOURCE GEOMETRY CONFLICT, retained as a documented model-of-record  ║
 * ║    exception (audit D-08/D-09; evidence MD-12):                      ║
 * ║    (1) Tabulated S4 (R −217.05) and S5 (R −202.53), 0.22 mm apart,   ║
 * ║        intersect at h = 36.09 mm. At ∞ the f/4.12 axial beam meets   ║
 * ║        them at 40.8 mm (real ray at the f/4.12 pupil radius; 40.2 mm ║
 * ║        when filling the modeled stop). S4/S5 sd = 34.2 mm.           ║
 * ║    (2) L21 (7.23 mm thick) reaches a knife edge at h = 28.68 mm. At  ║
 * ║        4.5 m the f/4.12 bundle needs 29.1 mm (28.68 mm when filling  ║
 * ║        the modeled stop, leaving a 0.003 mm edge). L21/L22 sd = 27.6.║
 * ║    As modeled, the unvignetted axial aperture is ≈ f/4.89 at ∞. The  ║
 * ║    published Fno 4.12 is retained as nominalFno and apertureDesign;  ║
 * ║    it is not realized on axis by these physically valid apertures.   ║
 * ║                                                                      ║
 * ║  Production differences: the SEL600F40GM uses an XA aspherical       ║
 * ║    element and three fluorite elements; Example 4 is all-spherical   ║
 * ║    with two CaF2-coordinate elements (L12, L14) plus FCD100 (L16).   ║
 * ║    The product's slip-in filter is not in the patent table and is    ║
 * ║    omitted (Sony's 24/18 count includes it). No cover glass, dummy   ║
 * ║    plane, or mechanical part is added. Correlation is research-based,║
 * ║    not manufacturer-confirmed.                                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "sony-fe-600mm-f4-gm-oss",
  maker: "Sony",
  name: "SONY FE 600mm f/4 GM OSS",
  subtitle: "JP 2025-63175 A Example 4 — research correlation; not manufacturer-confirmed",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: ["23 ELEMENTS / 17 GROUPS", "DESIGN f ≈ 582.09 mm", "DESIGN F/4.12", "2ω = 4.22°", "ALL-SPHERICAL"],
    elementCount: 23,
    groupCount: 17,
    focalLengthMm: { marketing: 600, design: 582.08849918 },
    fNumber: { marketing: 4, design: 4.12 },
  },

  source: {
    patentNumber: "JP 2025-63175 A",
    patentYear: 2025,
    authors: ["Riki Maruyama"],
    assignees: ["Sony Group Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1 (L11)",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.31,
      focalLengthMm: 448.06,
      glass: "S-FTM16 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Large front positive collector of fixed GR1; sets the telephoto front power and is the modeled off-axis vignetting aperture.",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2 (L12)",
      type: "Biconvex Positive",
      nd: 1.43385,
      vd: 95.23,
      focalLengthMm: 252.09,
      glass: "CaF2 optical fluorite crystal (supplier unconfirmed)",
      apd: "patent",
      apdNote: "Patent θgF=0.5387; engine-baseline dPgF=+0.05507686 (0.6438 − 0.001682νd).",
      role: "CaF2-coordinate positive element in fixed GR1; patent condition (4)/(5) anomalous low-dispersion material.",
      diagramLabel: "L12",
      dPgF: 0.05507686,
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3 (L13)",
      type: "Biconcave Negative",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: -157.07,
      glass: "S-NBH56 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      apdNote: "Patent θgF=0.6122; engine-baseline dPgF=+0.01011360 (0.6438 − 0.001682νd).",
      role: "High-index negative chromatic partner in fixed GR1 (conditions (10)/(11)).",
      diagramLabel: "L13",
      dPgF: 0.0101136,
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4 (L14)",
      type: "Biconvex Positive",
      nd: 1.43385,
      vd: 95.23,
      focalLengthMm: 207.28,
      glass: "CaF2 optical fluorite crystal (supplier unconfirmed)",
      apd: "patent",
      apdNote: "Patent θgF=0.5387; engine-baseline dPgF=+0.05507686 (0.6438 − 0.001682νd).",
      role: "CaF2-coordinate positive element in fixed GR1; patent condition (4)/(5) anomalous low-dispersion material.",
      diagramLabel: "L14",
      dPgF: 0.05507686,
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5 (L15)",
      type: "Biconcave Negative",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: -232.15,
      glass: "S-NBH56 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: false,
      apdNote: "Patent θgF=0.6122; engine-baseline dPgF=+0.01011360 (0.6438 − 0.001682νd).",
      role: "High-index negative chromatic partner in fixed GR1 (conditions (10)/(11)).",
      diagramLabel: "L15",
      dPgF: 0.0101136,
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6 (L16)",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 233.84,
      glass: "FCD100 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "patent",
      apdNote: "Patent θgF=0.5334; engine-baseline dPgF=+0.04955820 (0.6438 − 0.001682νd).",
      role: "Fluorophosphate positive meniscus in fixed GR1 (FCD100 coordinate; conditions (4)/(5)).",
      diagramLabel: "L16",
      dPgF: 0.0495582,
    },
    {
      id: 7,
      name: "L17",
      label: "Element 7 (L17)",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -253.33,
      glass: "H-K9L (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Rear negative meniscus of fixed GR1 ahead of the focus group.",
      diagramLabel: "L17",
    },
    {
      id: 8,
      name: "L21",
      label: "Element 8 (L21)",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.31,
      focalLengthMm: 99.22,
      glass: "S-FTM16 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Positive member of the cemented GR2 inner-focus group.",
      diagramLabel: "L21",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L22",
      label: "Element 9 (L22)",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -218.03,
      glass: "H-K9L (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Negative member of the cemented GR2 inner-focus group.",
      diagramLabel: "L22",
      cemented: "D1",
    },
    {
      id: 10,
      name: "L31",
      label: "Element 10 (L31)",
      type: "Biconvex Positive",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: 139.58,
      glass: "S-TIH1 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Positive member of the cemented GR3a pre-stop pair.",
      diagramLabel: "L31",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L32",
      label: "Element 11 (L32)",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: -79.77,
      glass: "H-QK3L (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Negative member of the cemented GR3a pre-stop pair.",
      diagramLabel: "L32",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L33",
      label: "Element 12 (L33)",
      type: "Biconvex Positive",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: 69.4,
      glass: "S-NBH56 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Positive member of the cemented GR3b image-stabilization pair.",
      diagramLabel: "L33",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L34",
      label: "Element 13 (L34)",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: -69.23,
      glass: "FCD1 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Negative low-dispersion member of the cemented GR3b image-stabilization pair.",
      diagramLabel: "L34",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L35",
      label: "Element 14 (L35)",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: -56.75,
      glass: "J-LASF016 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Negative singlet completing the transverse GR3b image-stabilization group.",
      diagramLabel: "L35",
    },
    {
      id: 15,
      name: "L36",
      label: "Element 15 (L36)",
      type: "Positive Meniscus",
      nd: 1.58144,
      vd: 40.89,
      focalLengthMm: 63.21,
      glass: "E-FL5 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Positive meniscus starting fixed rear subgroup GR3c.",
      diagramLabel: "L36",
    },
    {
      id: 16,
      name: "L37",
      label: "Element 16 (L37)",
      type: "Biconvex Positive",
      nd: 1.58144,
      vd: 40.89,
      focalLengthMm: 56.63,
      glass: "E-FL5 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Positive element in fixed rear subgroup GR3c.",
      diagramLabel: "L37",
    },
    {
      id: 17,
      name: "L38",
      label: "Element 17 (L38)",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.32,
      focalLengthMm: -18.21,
      glass: "TAFD45 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "High-index negative member of the L38+L39 cemented pair in GR3c.",
      diagramLabel: "L38",
      cemented: "D4",
    },
    {
      id: 18,
      name: "L39",
      label: "Element 18 (L39)",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.31,
      focalLengthMm: 28.88,
      glass: "S-FTM16 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Positive member of the L38+L39 cemented pair in GR3c.",
      diagramLabel: "L39",
      cemented: "D4",
    },
    {
      id: 19,
      name: "L40",
      label: "Element 19 (L40)",
      type: "Biconcave Negative",
      nd: 1.59282,
      vd: 68.63,
      focalLengthMm: -24.65,
      glass: "FCD515 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "patent",
      apdNote: "Patent θgF=0.5441; engine-baseline dPgF=+0.01573566 (0.6438 − 0.001682νd).",
      role: "Anomalous-dispersion negative member of the L40+L41 cemented pair in GR3c (conditions (6), (8), (9)).",
      diagramLabel: "L40",
      cemented: "D5",
      dPgF: 0.01573566,
    },
    {
      id: 20,
      name: "L41",
      label: "Element 20 (L41)",
      type: "Positive Meniscus",
      nd: 1.68893,
      vd: 31.16,
      focalLengthMm: 36.1,
      glass: "E-FD8 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Positive partner of L40 in GR3c.",
      diagramLabel: "L41",
      cemented: "D5",
    },
    {
      id: 21,
      name: "L42",
      label: "Element 21 (L42)",
      type: "Biconvex Positive",
      nd: 1.72047,
      vd: 34.71,
      focalLengthMm: 20.76,
      glass: "S-NBH8 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      role: "Positive member of the L42+L43 cemented pair in GR3c.",
      diagramLabel: "L42",
      cemented: "D6",
    },
    {
      id: 22,
      name: "L43",
      label: "Element 22 (L43)",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: -26.73,
      glass: "E-FDS1 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "patent",
      apdNote: "Patent θgF=0.6388; engine-baseline dPgF=+0.03012016 (0.6438 − 0.001682νd).",
      role: "High-dispersion anomalous negative member of the L42+L43 cemented pair (conditions (6)-(9)).",
      diagramLabel: "L43",
      cemented: "D6",
      dPgF: 0.03012016,
    },
    {
      id: 23,
      name: "L44",
      label: "Element 23 (L44)",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: -91.61,
      glass: "E-FDS1 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "patent",
      apdNote: "Patent θgF=0.6388; engine-baseline dPgF=+0.03012016 (0.6438 − 0.001682νd).",
      role: "Rear negative meniscus of GR3c (conditions (6), (7), (9)); anomalous-dispersion lateral-colour corrector.",
      diagramLabel: "L44",
      dPgF: 0.03012016,
    },
  ],

  surfaces: [
    { label: "1", R: 267.64, d: 13.23, sd: 76, medium: 1 },
    { label: "2", R: -33648.24, d: 173.23, sd: 76 },
    { label: "3", R: 217.05, d: 11.05, sd: 44.2, medium: 2 },
    { label: "4", R: -217.05, d: 0.22, sd: 34.2 }, // L12 rear; SD capped below the S4/S5 surface intersection (h = 36.09 mm) — see header
    { label: "5", R: -202.53, d: 2.6, sd: 34.2, medium: 3 }, // L13 front; SD capped below the S4/S5 surface intersection — see header
    { label: "6", R: 400.64, d: 0.3, sd: 43.8 },
    { label: "7", R: 136.44, d: 12.71, sd: 43, medium: 4 },
    { label: "8", R: -256.35, d: 0.43, sd: 43 },
    { label: "9", R: -379.56, d: 2.7, sd: 42.2, medium: 5 },
    { label: "10", R: 417.21, d: 3.88, sd: 42.2 },
    { label: "11", R: 80.2, d: 10.52, sd: 40.8, medium: 6 },
    { label: "12", R: 357.85, d: 14.2, sd: 40.8 },
    { label: "13", R: 90.61, d: 2.23, sd: 35.3, medium: 7 },
    { label: "14", R: 53.1, sd: 35.3 },
    { label: "15", R: 83.79, d: 7.23, sd: 27.6, medium: 8 }, // L21 front; SD capped by L21 edge thickness (knife edge at h = 28.68 mm) — see header
    { label: "16", R: -190.89, d: 2.0, sd: 27.6, medium: 9 },
    { label: "17", R: 276.0, sd: 27.6 },
    { label: "18", R: 160.34, d: 3.73, sd: 21, medium: 10 },
    { label: "19", R: -264.07, d: 1.88, sd: 21, medium: 11 },
    { label: "20", R: 45.71, d: 9.93, sd: 21 },
    { label: "STO", R: "flat", d: 21.54 }, // Patent stop S21; sd is an f-number calibration (see header)
    { label: "22", R: 77.47, d: 2.87, sd: 15.2, medium: 12 },
    { label: "23", R: -248.89, d: 1.5, sd: 15.2, medium: 13 },
    { label: "24", R: 40.01, d: 2.86, sd: 15.2 },
    { label: "25", R: -184.93, d: 1.8, sd: 12.8, medium: 14 },
    { label: "26", R: 57.71, d: 2.0, sd: 12.8 },
    { label: "27", R: 28.3, d: 5.94, sd: 15.6, medium: 15 },
    { label: "28", R: 113.58, d: 3.38, sd: 15.6 },
    { label: "29", R: 48.18, d: 5.08, sd: 14.8, medium: 16 },
    { label: "30", R: -100.0, d: 0.9, sd: 14.8 },
    { label: "31", R: -104.03, d: 1.58, sd: 14, medium: 17 },
    { label: "32", R: 21.0, d: 7.75, sd: 14, medium: 18 },
    { label: "33", R: -79.89, d: 1.0, sd: 14 },
    { label: "34", R: -74.06, d: 1.4, sd: 13.3, medium: 19 },
    { label: "35", R: 18.33, d: 6.19, sd: 13.3, medium: 20 },
    { label: "36", R: 60.09, d: 0.85, sd: 13.3 },
    { label: "37", R: 41.72, d: 10.0, sd: 13.3, medium: 21 },
    { label: "38", R: -20.97, d: 1.8, sd: 13.3, medium: 22 },
    { label: "39", R: -145.65, d: 3.71, sd: 13.3 },
    { label: "40", R: -38.6, d: 1.2, sd: 13.2, medium: 23 },
    { label: "41", R: -72.09, d: 39.18, sd: 13.2 }, // Last gap = printed BF 39.18 mm (Table 11)
  ],

  focus: {
    closeFocusM: 4.5,
    description:
      "PUBLISHED GR2 inner focus: 19.47 mm objectward; d14 51.20→31.73 and d17 9.54→29.00 mm; 4.5 m object-to-image.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 4500,
        distanceReference: "image-plane",
        source:
          "JP 2025-63175 A Example 4, Table 12 (4.5 m state, d14/d17); image-plane datum established by conjugate solve",
      },
    ],
  },

  gaps: {
    "14": { label: "D14 (before GR2)", values: [[51.2, 31.73]] },
    "17": { label: "D17 (after GR2)", values: [[9.54, 29.0]] },
  },

  aperture: { nominalFNumber: 4.12, fStops: [4.12, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 11 },

  groups: [
    { text: "GR1", fromSurface: "1", toSurface: "14" },
    { text: "GR2 FOCUS", fromSurface: "15", toSurface: "17" },
    { text: "GR3a", fromSurface: "18", toSurface: "20" },
    { text: "GR3b IS", fromSurface: "22", toSurface: "26" },
    { text: "GR3c", fromSurface: "27", toSurface: "41" },
  ],
  doublets: [
    { text: "D1", fromSurface: "15", toSurface: "17" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
    { text: "D3", fromSurface: "22", toSurface: "24" },
    { text: "D4", fromSurface: "31", toSurface: "33" },
    { text: "D5", fromSurface: "34", toSurface: "36" },
    { text: "D6", fromSurface: "37", toSurface: "39" },
  ],

  layout: { yScFill: 0.46 },
} satisfies LensDataV2Input;

export default LENS_DATA;
