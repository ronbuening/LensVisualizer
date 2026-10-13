import type { LensDataInput } from "../../types/optics.js";

/**
 * DE 444150 C, Example 1 (Hans Deser / Voigtländer & Sohn Aktiengesellschaft).
 * Five elements in three air-separated groups; all spherical; scale 1.
 * User-selected Tele-Dynar name is a patent-normalized target: a marketed 100mm
 * version and exact production correspondence are not manufacturer-confirmed.
 * Native sodium D indices/nu are retained; modern d spectral tracing is approximate.
 * Patent b1/b2 fix STO position. Its radius is inferred by exact axial calibration
 * to f/6.3; the other semi-diameters are modeled for a sampled 5-degree half-field.
 * Last spacing is calculated paraxial infinity BFD, not a patent-tabulated value.
 * Focus: NO_INTERNAL_RECONSTRUCTION. closeFocusM=1e9 m is an infinity-only schema
 * sentinel, NOT a physical MFD. No variable gaps or finite-focus law are asserted.
 * Patent's lower-dispersion wording fails against rear crown, passes rear flint;
 * original Example1 glass coordinates are retained without source correction.
 */

const LENS_DATA = {
  key: "voigtlander-tele-dynar-100mm-f63",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER TELE-DYNAR 100mm f/6.3 (patent-normalized)",
  subtitle: "DE 444150 C EXAMPLE 1 — HANS DESER; 100mm PATENT NORMALIZATION",
  specs: ["5 ELEMENTS / 3 GROUPS", "100 mm f/6.3 PATENT NOMINAL", "STATIC INFINITY MODEL", "SPHERICAL / PLANAR"],
  focalLengthDesign: 100.20996958013951,
  apertureDesign: 6.3,
  patentNumber: "DE 444150 C",
  patentAuthors: ["Hans Deser"],
  patentAssignees: ["Voigtländer & Sohn AG"],
  patentYear: 1927,
  elementCount: 5,
  groupCount: 3,
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
      fl: 21.768856827804424,
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
      fl: -44.692045806251926,
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
      fl: -24.299176255118095,
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
      fl: -119.46962112213681,
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
      fl: 38.846017359271634,
      glass: "Unmatched (vintage flint; native sodium D coordinates)",
      cemented: "D2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 23.7,
      d: 3.67,
      nd: 1.6143,
      elemId: 1,
      sd: 9.3,
    },
    {
      label: "2",
      R: -28.88,
      d: 1.57,
      nd: 1.6462,
      elemId: 2,
      sd: 9.3,
    },
    {
      label: "3",
      R: 1000000000000000.0,
      d: 7.35,
      nd: 1,
      elemId: 0,
      sd: 9.3,
    },
    {
      label: "STO",
      R: 1000000000000000.0,
      d: 3.68,
      nd: 1,
      elemId: 0,
      sd: 5.924121879145139,
    },
    {
      label: "4",
      R: -39.39,
      d: 1.05,
      nd: 1.5835,
      elemId: 3,
      sd: 8.0,
    },
    {
      label: "5",
      R: 22.37,
      d: 2.63,
      nd: 1,
      elemId: 0,
      sd: 8.0,
    },
    {
      label: "6",
      R: 186.44,
      d: 1.31,
      nd: 1.6143,
      elemId: 4,
      sd: 8.0,
    },
    {
      label: "7",
      R: 52.52,
      d: 2.1,
      nd: 1.6462,
      elemId: 5,
      sd: 8.0,
    },
    {
      label: "8",
      R: -47.33,
      d: 63.46103520209255,
      nd: 1,
      elemId: 0,
      sd: 8.0,
    },
  ],
  asph: {},
  var: {},
  varLabels: [],
  groups: [
    {
      text: "FRONT POSITIVE",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "REAR POSITIVE",
      fromSurface: "6",
      toSurface: "8",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "D2",
      fromSurface: "6",
      toSurface: "8",
    },
  ],
  closeFocusM: 1000000000.0,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: static infinity prescription only. closeFocusM=1e9 m is a schema sentinel, not a physical MFD. No finite-focus movement or performance is modeled.",
  nominalFno: 6.3,
  fstopSeries: [6.3, 8, 11, 16],
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
