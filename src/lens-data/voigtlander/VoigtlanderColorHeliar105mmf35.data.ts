import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER COLOR-HELIAR 105mm f/3.5                         ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,645,156 A, Example 1 (Albrecht Wilhelm Tronnier).       ║
 * ║  Five all-spherical elements in three air-separated Heliar-type members.   ║
 * ║                                                                            ║
 * ║  SCALE: The patent table is normalized to F = 1 and illustrates f =        ║
 * ║  200 mm. Its radii, thicknesses, air spaces, and diaphragm coordinates are ║
 * ║  scaled to the 105 mm normalization (equivalent to ×0.525 from 200 mm).    ║
 * ║  Indices and Abbe values are unchanged. SDs are inferred separately.       ║
 * ║                                                                            ║
 * ║  STOP / IMAGE PLANE: The patent's diaphragm split is preserved exactly:    ║
 * ║  R5→STO = 4.85625 mm and STO→R6 = 2.68170 mm. The stop radius is derived   ║
 * ║  from the design f-number, exactly f/3.5. The final spacing uses the       ║
 * ║  independently traced infinity BFD of 86.1262944374 mm; the scaled rounded ║
 * ║  patent p0′ is 86.1315 mm.                                                 ║
 * ║                                                                            ║
 * ║  FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION: The patent publishes only an  ║
 * ║  infinity prescription. The Bessa II's 1.0 m scale endpoint is retained as ║
 * ║  product metadata, but no internal or unit-focus spacing is invented.      ║
 * ║                                                                            ║
 * ║  GLASS: Historical yellow-light index/Abbe coordinates are retained in    ║
 * ║  the schema's nd/vd slots. No nC, nF, ng, or dPgF values are published.   ║
 * ║  Glass strings therefore use source classes and six-digit coordinates;    ║
 * ║  vendor identities and APO behavior are not asserted.                     ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent gives none. SDs were solved from the exact     ║
 * ║  f/3.5 stop and meridional ray envelopes through the 6×9 diagonal field,  ║
 * ║  then constrained by positive edge thickness, spherical rim slope,        ║
 * ║  shared-gap sag clearance, and cemented-junction containment. The outer   ║
 * ║  front and rear doublets are edge-thickness limited. A 600 dpi audit of    ║
 * ║  patent Figure 2 raised the central rear rim and reduced the rear doublet  ║
 * ║  to match the drawing's front/center/rear height progression. Only the     ║
 * ║  most extreme sampled corner ray clips at the first external surface.      ║
 * ║                                                                            ║
 * ║  EXCLUSIONS: No filters, cover plates, dummy planes, flare cutters,        ║
 * ║  blockers, mechanical parts, folded paths, or aspheres are present.        ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "voigtlander-color-heliar-105mm-f35",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER COLOR-HELIAR 105mm f/3.5 (Voigtländer Bessa II)",
  subtitle: "US 2,645,156 A — Example 1; normalized prescription scaled to 105 mm",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "6x9",
    specs: ["5 ELEMENTS / 3 GROUPS", "f = 104.999 mm (MODELED)", "f/3.5", "6×9 FORMAT", "ALL-SPHERICAL"],
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: { marketing: 105, design: 104.999455041137 },
    fNumber: { marketing: 3.5 },
  },

  source: {
    patentNumber: "US 2,645,156 A",
    patentYear: 1953,
    authors: ["Albrecht Wilhelm Tronnier"],
    assignees: ["Voigtländer & Sohn AG"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6511,
      vd: 58.6,
      focalLengthMm: 37.90282054893,
      glass: "N-LAK7 (Schott catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Strong positive front component of the cemented collecting member.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.60266,
      vd: 38.4,
      focalLengthMm: -134.756414733262,
      glass: "603384 — flint class (legacy F5-family coordinates; vendor unresolved)",
      apd: false,
      role: "Negative cemented partner that achromatizes the front positive element.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.64282,
      vd: 47.9,
      focalLengthMm: -34.029925809244,
      glass: "643479 — barium-flint class (legacy BAF9-family coordinates; vendor unresolved)",
      apd: false,
      role: "Air-spaced central negative member controlling the Heliar power balance.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave Negative",
      nd: 1.58241,
      vd: 40.6,
      focalLengthMm: -58.042873577033,
      glass: "LF5 (Schott catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Negative front component of the cemented rear member.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.69347,
      vd: 53.5,
      focalLengthMm: 31.422097492392,
      glass: "S-LAL13 (Ohara catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Strong positive rear component providing the final convergence.",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription at 105 mm scale; SDs inferred separately ── */
  surfaces: [
    { label: "1", R: 32.34945, d: 8.0871, sd: 18.65, medium: 1 },
    { label: "2", R: -93.8133, d: 1.94145, sd: 18.65, medium: 2 },
    { label: "3", R: 609.3234, d: 3.69705, sd: 17.5 },
    { label: "4", R: -84.6615, d: 1.94145, sd: 15.3, medium: 3 },
    { label: "5", R: 29.7612, d: 4.85625, sd: 15.3 },
    { label: "STO", R: "flat", d: 2.6817 },
    { label: "6", R: "flat", d: 1.94145, sd: 15.5, medium: 4 },
    { label: "7", R: 33.80475, d: 7.63455, sd: 15.5, medium: 5 },
    { label: "8", R: -55.64055, d: 86.126294437413, sd: 15.5 },
  ],

  focus: {
    closeFocusM: 1.0,
    description: "NO_INTERNAL_RECONSTRUCTION: patent gives infinity only; 1.0 m close-focus metadata is not modeled.",
  },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "FRONT MEMBER", fromSurface: "1", toSurface: "3" },
    { text: "CENTRAL MEMBER", fromSurface: "4", toSurface: "5" },
    { text: "REAR MEMBER", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { scFill: 0.55, yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
