import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S DX ZOOM-NIKKOR 17-55mm f/2.8G IF-ED                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2005/0013015 A1, Example 5 (Nikon Corporation / Takayuki Sensui). ║
 * ║  Production correlation: Nikon AF-S DX Zoom-Nikkor 17-55mm f/2.8G IF-ED.          ║
 * ║  Patent design: 14 elements / 10 groups, 3 aspherical surfaces, four-group zoom.   ║
 * ║                                                                                      ║
 * ║  Zoom positions are the patent Table 5 infinity states: 17.55 / 31.43 / 52.70 mm. ║
 * ║  Zoom variable gaps: D5, D12, D18, and computed rear BFD after surface 25.         ║
 * ║  Reversing carriers: G1 and G3/stop reverse in fixed-image position W→M→T.          ║
 * ║  Focus variable gaps: D5 and D10. Surfaces 6A-10 translate rigidly imageward.      ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. At each zoom state, the close endpoint  ║
 * ║  is solved from the patent's close finite-conjugate block-magnification row with   ║
 * ║  the source-described one-DOF constraint D5 += delta, D10 -= delta.                ║
 * ║  Printed B1 rows imply 0.392927 m mean on the infinity-image reference plane;      ║
 * ║  their small rear-plane inconsistency makes the fixed-plane model close at          ║
 * ║  0.398975 m mean. Both differ from Nikon's marketed 0.36 m production MFD.         ║
 * ║                                                                                      ║
 * ║  The patent's Table 5 reports FNO=2.89, while Fig. 10 reports 2.89 / 2.90 / 2.91. ║
 * ║  nominalFno preserves the state-specific Fig. 10 values because they control       ║
 * ║  stop/pupil geometry; apertureMarketing remains the production f/2.8 designation.  ║
 * ║                                                                                      ║
 * ║  No uniform scale is applied. Patent and production zoom endpoints do not share    ║
 * ║  one scale factor. Radii, spacings, indices, and asphere coefficients remain at    ║
 * ║  Example 5 source scale.                                                             ║
 * ║                                                                                      ║
 * ║  Semi-diameters are inferred because Example 5 publishes none. They were derived  ║
 * ║  from full-field chief rays, on-axis marginal rays, the Fig. 9 optical-section     ║
 * ║  proportions, and the current edge-thickness/rim-slope/cross-gap constraints.      ║
 * ║  Extreme full-field marginal rays are allowed to vignette; full-field chief rays   ║
 * ║  and on-axis wide-open marginal rays remain inside the modeled clear apertures.    ║
 * ║                                                                                      ║
 * ║  Patent asphere convention: its kappa maps to standard K = kappa - 1. Surface 6A   ║
 * ║  and 11A C12 terms are not printed; zero is used only as the schema's explicit     ║
 * ║  absent-term model value. A14 is likewise zero because the patent polynomial ends   ║
 * ║  at C12.                                                                             ║
 * ║                                                                                      ║
 * ║  Example 5 publishes nd and vd only. nC/nF/ng/dPgF are therefore not authored for ║
 * ║  class-only or unmatched glasses; no vendor line data are substituted for unknown  ║
 * ║  Nikon melts.                                                                         ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-af-s-dx-zoom-nikkor-17-55mm-f28g-if-ed",
  maker: "Nikon",
  name: "NIKON AF-S DX ZOOM-NIKKOR 17-55mm f/2.8G IF-ED",
  subtitle: "US 2005/0013015 A1 Example 5 — Nikon / Takayuki Sensui",
  specs: [
    "14 ELEMENTS / 10 GROUPS",
    "17.55-52.70 mm DESIGN",
    "F/2.89-2.91 DESIGN",
    "83.30°-31.16° FULL FIELD",
    "3 ASPHERICAL SURFACES",
    "PRODUCTION MFD 0.36 m",
  ],

  focalLengthMarketing: [17, 55],
  focalLengthDesign: [17.549976901, 52.699891911],
  apertureMarketing: 2.8,
  apertureDesign: 2.89,
  lensMounts: ["nikon-f"],
  imageFormat: "aps-c",
  patentNumber: "US 2005/0013015 A1",
  patentAuthors: ["Takayuki Sensui"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2005,
  elementCount: 14,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.744429,
      vd: 49.55,
      fl: -49.765033,
      glass: "M-NBF1 catalog equivalent (patent 744495; production supplier unspecified)",
      role: "Front negative meniscus of G1; rear surface 2A is aspherical.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.518601,
      vd: 69.98,
      fl: -61.228901,
      glass: "J-PKH1 catalog equivalent (patent 519700; production supplier unspecified)",
      role: "Special-glass negative element SL1 in the cemented rear pair of G1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.43,
      fl: 121.11444,
      glass: "SF6 class / 805254",
      role: "Positive cemented partner to L2 in G1.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.6779,
      vd: 55.34,
      fl: 95.399474,
      glass: "S-LAL12 (OHARA)",
      role: "Front singlet of the rigid internal-focus carrier; surface 6A is aspherical.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -55.950331,
      glass: "S-TIH53 (OHARA)",
      role: "Negative member of the G2 focusing cemented doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.38,
      fl: 47.297017,
      glass: "618634 phosphate-crown class",
      role: "Positive member of the G2 focusing cemented doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.739929,
      vd: 49.25,
      fl: 58.620218,
      glass: "Unmatched (740493; nd=1.739929, vd=49.25)",
      role: "Rear G2 singlet; surface 11A is aspherical and does not join the focus translation.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 28.922092,
      glass: "S-TIH53 (OHARA)",
      role: "Positive member of the G3 cemented doublet.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.58,
      fl: -26.604968,
      glass: "S-LAH65V (OHARA)",
      role: "Negative member of the G3 cemented doublet.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.58,
      fl: -35.114431,
      glass: "S-LAH65V (OHARA)",
      role: "Rear negative singlet of G3.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      fl: 70.995952,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      role: "Front positive special-glass element SL2 of G4.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.38,
      fl: 89.140324,
      glass: "618634 phosphate-crown class",
      role: "Central positive singlet of G4.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      fl: 41.4825,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      role: "Positive special-glass element SL3 in the rear G4 cemented pair.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -43.345344,
      glass: "S-TIH53 (OHARA)",
      role: "Negative cemented partner to L13 at the rear of G4.",
      cemented: "D4",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 68.8329, d: 2.5, nd: 1.744429, elemId: 1, sd: 30.0 },
    { label: "2A", R: 23.7109, d: 22.4287, nd: 1.0, elemId: 0, sd: 26.0 },
    { label: "3", R: -58.4517, d: 1.3, nd: 1.518601, elemId: 2, sd: 20.0 },
    { label: "4", R: 70.0469, d: 2.9936, nd: 1.80518, elemId: 3, sd: 20.0 },
    { label: "5", R: 243.9094, d: 42.3175, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "6A", R: 140.0441, d: 3.4072, nd: 1.6779, elemId: 4, sd: 18.0 },
    { label: "7", R: -118.9794, d: 0.1, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "8", R: 124.693, d: 1.0, nd: 1.84666, elemId: 5, sd: 16.5 },
    { label: "9", R: 34.203, d: 5.1696, nd: 1.618, elemId: 6, sd: 16.0 },
    { label: "10", R: -189.4107, d: 4.8624, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "11A", R: 53.9597, d: 5.3, nd: 1.739929, elemId: 7, sd: 16.0 },
    { label: "12", R: -211.88, d: 1.35, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "STO", R: 1e15, d: 1.2, nd: 1.0, elemId: 0, sd: 7.968287391 },
    { label: "14", R: 172.5088, d: 4.0, nd: 1.84666, elemId: 8, sd: 11.0 },
    { label: "15", R: -28.2347, d: 1.0, nd: 1.804, elemId: 9, sd: 10.5 },
    { label: "16", R: 89.6343, d: 1.9, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "17", R: -39.5906, d: 1.0, nd: 1.804, elemId: 10, sd: 9.5 },
    { label: "18", R: 99.5109, d: 19.8298, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "19", R: -134.6632, d: 2.9801, nd: 1.49782, elemId: 11, sd: 12.0 },
    { label: "20", R: -28.2015, d: 0.1, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "21", R: 217.9857, d: 4.0048, nd: 1.618, elemId: 12, sd: 13.0 },
    { label: "22", R: -73.2014, d: 0.1, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "23", R: 52.8039, d: 5.0164, nd: 1.49782, elemId: 13, sd: 13.0 },
    { label: "24", R: -32.8433, d: 1.0, nd: 1.84666, elemId: 14, sd: 12.5 },
    { label: "25", R: -316.9872, d: 38.599926339, nd: 1.0, elemId: 0, sd: 13.0 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "2A": {
      K: -1,
      A4: 4.4061e-6,
      A6: -5.8929e-11,
      A8: 1.1253e-11,
      A10: -1.8542e-14,
      A12: 1.3297e-17,
      A14: 0,
    },
    "6A": {
      K: 0,
      A4: -1.929e-6,
      A6: 2.7118e-10,
      A8: 2.5089e-12,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 0,
      A4: 1.5661e-6,
      A6: -1.5382e-10,
      A8: -4.1712e-13,
      A10: -6.2541e-16,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom / focus spacings ── */
  var: {
    "5": [
      [42.3175, 46.319902269],
      [14.6473, 18.198358451],
      [1.75, 5.606623717],
    ],
    "10": [
      [4.8624, 0.859997731],
      [4.8624, 1.311341549],
      [4.8624, 1.005776283],
    ],
    "12": [
      [1.35, 1.35],
      [13.2558, 13.2558],
      [26.8816, 26.8816],
    ],
    "18": [
      [19.8298, 19.8298],
      [14.0455, 14.0455],
      [5.7725, 5.7725],
    ],
    "25": [
      [38.599926339, 38.599926339],
      [42.748666069, 42.748666069],
      [51.926156615, 51.926156615],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["10", "D10"],
    ["12", "D12"],
    ["18", "D18"],
    ["25", "BF"],
  ],

  zoomPositions: [17.55, 31.43, 52.7],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6A", toSurface: "12" },
    { text: "G3", fromSurface: "STO", toSurface: "18" },
    { text: "G4", fromSurface: "19", toSurface: "25" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.398974925,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: surfaces 6A-10 translate rigidly imageward; D5 increases and D10 decreases by " +
    "the same solved delta. Close endpoints reproduce the patent Example 5 close block-magnification rows and " +
    "are fitted to the patent block rows. Because those rows contain a small rear-plane inconsistency, the authored " +
    "fixed-image-plane model reaches its close conjugate at approximately 0.39897 m; Nikon markets 0.36 m MFD.",

  /* ── Aperture configuration ── */
  nominalFno: [2.89, 2.9, 2.91],
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,

  /* ── Layout ── */
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
