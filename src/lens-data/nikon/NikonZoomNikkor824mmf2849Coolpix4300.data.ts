import type { LensDataInput } from "../../types/optics.js";

/**
 * NIKON ZOOM-NIKKOR 8-24mm f/2.8-4.9 (Nikon COOLPIX 4300)
 *
 * Data source: JP 2003-177313 A, Example 1.
 * Production correlation: strong, but not a manufacturer-confirmed patent attribution.
 * 9 elements / 8 physical groups; three functional zoom groups G1(-), G2(+), G3(+); one aspherical surface.
 * Zoom: only the two patent-published infinity endpoints are modeled. D1 and D2 are zoom-only gaps.
 * Focus: NO_INTERNAL_RECONSTRUCTION. Nikon documents production focusing by G3, but Example 1 publishes no
 * finite-conjugate G3 spacing. No focus motion is invented. Nikon macro distances are measured from the lens, not IMG.
 * The required closeFocusM scalar is only a descriptive wide-end working-distance label. The optional normalized
 * zoomCloseFocusM field is omitted because no object-to-image near distances are established.
 * Semi-diameters: patent effective diameters / 2 on lens surfaces. The STO is the exception: patent phi = 6.70 mm is
 * retained in the audit as an effective diameter, while the modeled physical iris is inferred from the published
 * endpoint F-numbers with zoomApertureModel: "from-nominal-fno". Its base sd is the calibrated wide-end value.
 * The source flat stop radius 0.0000 is encoded as R = 1e15, and source surface 10 is labeled 10A for its asphere.
 * No scaling, rear plate, dummy plane, filter plate, or mechanical component is included.
 * imageFormat records the production camera’s 1/1.8-inch-type CCD; nominal dimensions are not patent image heights.
 */

// Patent optical-rim and compatible glass review: see the sibling .audit.md (2026-10-02 UTC).
const LENS_DATA = {
  key: "nikon-zoom-nikkor-8-24-f28-49-coolpix-4300",
  maker: "Nikon",
  name: "NIKON ZOOM-NIKKOR 8-24mm f/2.8-4.9 (Nikon COOLPIX 4300)",
  subtitle: "JP 2003-177313 A, Example 1 - strong COOLPIX 4300 correlation; not manufacturer-confirmed",
  specs: [
    "9 ELEMENTS / 8 GROUPS",
    "3-GROUP ZOOM",
    "DESIGN f = 8.24-23.3 mm",
    "DESIGN F/2.89-5.20",
    "1 ASPHERICAL SURFACE",
  ],

  focalLengthMarketing: [8, 24],
  focalLengthDesign: [8.239898, 23.299954],
  imageFormat: "1-1.8-inch-type",
  lensMounts: ["fixed-lens-camera"],
  patentNumber: "JP 2003-177313 A",
  patentAuthors: ["Kouichi Ohshita", "Mami Muratani"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2003,
  elementCount: 9,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.64,
      vd: 60.21,
      indexReference: "d",
      fl: 67.8712,
      glass: "640602 class",
      role: "Positive lead component of functional group G1.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.835,
      vd: 42.97,
      indexReference: "d",
      fl: -11.727,
      glass: "TAFD5 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Strong negative component of functional group G1.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      fl: -39.999168,
      glass: "517642 class (BK7 family)",
      role: "Negative component of functional group G1.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      fl: 26.881268,
      glass: "847238 class (SF57 / S-TIH53 / FDS90 / H-ZF52 family)",
      role: "Positive rear component of functional group G1.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconvex Positive (1x Asph)",
      nd: 1.60602,
      vd: 57.44,
      indexReference: "d",
      fl: 17.495567,
      glass: "BACD2 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Aspherical positive lead component of functional group G2.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.52,
      indexReference: "d",
      fl: 16.051973,
      glass: "678555 class",
      cemented: "D1",
      role: "Positive member of the L6/L7 cemented pair in G2.",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      indexReference: "d",
      fl: -9.138246,
      glass: "847238 class (SF57 / S-TIH53 / FDS90 / H-ZF52 family)",
      cemented: "D1",
      role: "Negative member of the L6/L7 cemented pair in G2.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Weak Biconvex Positive",
      nd: 1.64,
      vd: 60.21,
      indexReference: "d",
      fl: 56.527424,
      glass: "640602 class",
      role: "Weak positive rear component of functional group G2.",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.45,
      indexReference: "d",
      fl: 24.493885,
      glass: "487705 / FC5-class",
      role: "Single positive element of functional group G3.",
    },
  ],

  surfaces: [
    { label: "1", R: 115.9747, d: 2, nd: 1.64, elemId: 1, sd: 8.25 },
    { label: "2", R: -68.982, d: 0.1, nd: 1, elemId: 0, sd: 7.7 },
    { label: "3", R: 100.0798, d: 1, nd: 1.835, elemId: 2, sd: 7.05 },
    { label: "4", R: 8.8788, d: 3.2, nd: 1, elemId: 0, sd: 5.8 },
    { label: "5", R: -99.6193, d: 1, nd: 1.5168, elemId: 3, sd: 5.7 },
    { label: "6", R: 26.1734, d: 0.6, nd: 1, elemId: 0, sd: 5.6 },
    { label: "7", R: 14.2994, d: 2, nd: 1.84666, elemId: 4, sd: 5.75 },
    { label: "8", R: 36.0022, d: 18.66993, nd: 1, elemId: 0, sd: 5.55 },
    { label: "STO", R: 1e15, d: 0.7, nd: 1, elemId: 0, sd: 3.334249611619781 },
    { label: "10A", R: 15.6122, d: 1.8, nd: 1.60602, elemId: 5, sd: 3.5 },
    { label: "11", R: -31.6056, d: 0.1, nd: 1, elemId: 0, sd: 3.45 },
    { label: "12", R: 6.5431, d: 3, nd: 1.6779, elemId: 6, sd: 3.35 },
    { label: "13", R: 13.371, d: 0.9, nd: 1.84666, elemId: 7, sd: 2.95 },
    { label: "14", R: 4.7498, d: 1.1, nd: 1, elemId: 0, sd: 2.75 },
    { label: "15", R: 579.5187, d: 1.3, nd: 1.64, elemId: 8, sd: 2.8 },
    { label: "16", R: -38.5526, d: 6.81587, nd: 1, elemId: 0, sd: 3 },
    { label: "17", R: 24.722, d: 2.6, nd: 1.48749, elemId: 9, sd: 5.75 },
    { label: "18", R: -22.2994, d: 5.32665, nd: 1, elemId: 0, sd: 5.75 },
  ],

  asph: {
    "10A": {
      K: 0.6443,
      A4: -0.0001043,
      A6: 3.2666e-7,
      A8: -6.3441e-8,
      A10: 1.0256e-9,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "8": [
      [18.66993, 18.66993],
      [2.42097, 2.42097],
    ],
    "16": [
      [6.81587, 6.81587],
      [22.95625, 22.95625],
    ],
  },
  varLabels: [
    ["8", "D1"],
    ["16", "D2"],
  ],

  zoomPositions: [8.24, 23.3],
  zoomLabels: ["Wide", "Tele"],
  zoomApertureModel: "from-nominal-fno",

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (+)", fromSurface: "10A", toSurface: "16" },
    { text: "G3 (+)", fromSurface: "17", toSurface: "18" },
  ],
  doublets: [{ text: "D1", fromSurface: "12", toSurface: "14" }],

  // Nikon manual p.144: 4 cm measured from the lens; descriptive only, not an object-to-image conjugate.
  closeFocusM: 0.04,
  focusDescription: "Only infinity-focus zoom states are modeled; finite-focus G3 spacings are unpublished. Nikon’s 0.04 m wide and 0.30 m tele macro distances are measured from the lens.",

  nominalFno: [2.89, 5.2],
  fstopSeries: [2.89, 5.2],
  maxFstop: 5.2,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
