import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * DE 444150 C, Example 1 (Hans Deser / Voigtländer & Sohn Aktiengesellschaft).
 * Five elements in three air-separated groups; all spherical; scale 1.
 * User-selected Tele-Dynar name is a patent-normalized target: a marketed 100mm
 * version and exact production correspondence are not manufacturer-confirmed.
 * Native sodium D indices/nu are retained; modern d spectral tracing is approximate.
 * Patent b1/b2 fix STO position. Its radius is derived from the design f-number,
 * f/6.3, by exact axial tracing; the other semi-diameters are modeled for a sampled
 * 5-degree half-field.
 * Last spacing is calculated paraxial infinity BFD, not a patent-tabulated value.
 * Focus: NO_INTERNAL_RECONSTRUCTION. closeFocusM=1e9 m is an infinity-only schema
 * sentinel, NOT a physical MFD. No variable gaps or finite-focus law are asserted.
 * Patent's lower-dispersion wording fails against rear crown, passes rear flint;
 * original Example1 glass coordinates are retained without source correction.
 */

const LENS_DATA = {
  schema: 2,
  key: "voigtlander-tele-dynar-100mm-f63",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER TELE-DYNAR 100mm f/6.3 (patent-normalized)",
  subtitle: "DE 444150 C EXAMPLE 1 — HANS DESER; 100mm PATENT NORMALIZATION",

  catalog: {
    specs: ["5 ELEMENTS / 3 GROUPS", "100 mm f/6.3 PATENT NOMINAL", "STATIC INFINITY MODEL", "SPHERICAL / PLANAR"],
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: { design: 100.20996958013951 },
    fNumber: { design: 6.3 },
  },

  source: {
    patentNumber: "DE 444150 C",
    patentYear: 1927,
    authors: ["Hans Deser"],
    assignees: ["Voigtländer & Sohn AG"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6143,
      vd: 56.4,
      indexReferenceNote:
        "Native sodium D nD and source ν retained; default d-line spectral tracing is approximate, not a D-to-d conversion.",
      focalLengthMm: 21.768856827804424,
      glass: "Unmatched (vintage crown; native sodium D coordinates)",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Concave",
      nd: 1.6462,
      vd: 33.9,
      indexReferenceNote:
        "Native sodium D nD and source ν retained; default d-line spectral tracing is approximate, not a D-to-d conversion.",
      focalLengthMm: -44.692045806251926,
      glass: "Unmatched (vintage flint; native sodium D coordinates)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5835,
      vd: 41.9,
      indexReferenceNote:
        "Native sodium D nD and source ν retained; default d-line spectral tracing is approximate, not a D-to-d conversion.",
      focalLengthMm: -24.299176255118095,
      glass: "Unmatched (vintage light flint; native sodium D coordinates)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6143,
      vd: 56.4,
      indexReferenceNote:
        "Native sodium D nD and source ν retained; default d-line spectral tracing is approximate, not a D-to-d conversion.",
      focalLengthMm: -119.46962112213681,
      glass: "Unmatched (vintage crown; native sodium D coordinates)",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6462,
      vd: 33.9,
      indexReferenceNote:
        "Native sodium D nD and source ν retained; default d-line spectral tracing is approximate, not a D-to-d conversion.",
      focalLengthMm: 38.846017359271634,
      glass: "Unmatched (vintage flint; native sodium D coordinates)",
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 23.7, d: 3.67, sd: 9.3, medium: 1 },
    { label: "2", R: -28.88, d: 1.57, sd: 9.3, medium: 2 },
    { label: "3", R: "flat", d: 7.35, sd: 9.3 },
    { label: "STO", R: "flat", d: 3.68 },
    { label: "4", R: -39.39, d: 1.05, sd: 8.0, medium: 3 },
    { label: "5", R: 22.37, d: 2.63, sd: 8.0 },
    { label: "6", R: 186.44, d: 1.31, sd: 8.0, medium: 4 },
    { label: "7", R: 52.52, d: 2.1, sd: 8.0, medium: 5 },
    { label: "8", R: -47.33, d: 63.46103520209255, sd: 8.0 },
  ],

  focus: {
    closeFocusM: 1000000000.0,
    description:
      "NO_INTERNAL_RECONSTRUCTION: static infinity prescription only. closeFocusM=1e9 m is a schema sentinel, not a physical MFD. No finite-focus movement or performance is modeled.",
  },

  aperture: { nominalFNumber: 6.3, fStops: [6.3, 8, 11, 16] },

  groups: [
    { text: "FRONT POSITIVE", fromSurface: "1", toSurface: "3" },
    { text: "REAR POSITIVE", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
