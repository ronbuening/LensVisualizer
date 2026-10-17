import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — TAMRON SP AF 28-75mm f/2.8 XR Di LD Aspherical [IF] MACRO (Model A09)                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 7,075,731 B1, "Large Aperture Zoom Lens," exemplary numerical prescription             ║
 * ║ (job-card embodiment: Example 1), Yasuharu Yamada / Tamron Co., Ltd.                              ║
 * ║ Production correlation: Tamron Model A09; official product data give 28-75mm, f/2.8, 16 elements   ║
 * ║ in 14 groups, 0.33 m MFD, 1:3.9 at 75 mm, 67 mm filter, and Canon EF / Nikon F / Sony A /         ║
 * ║ Pentax K variants.                                                                                  ║
 * ║                                                                                                    ║
 * ║ Patent design: 28.87 / 49.98 / 72.65 mm, F/2.91 at all three stations, four functional zoom       ║
 * ║ groups with + / - / + / + power, and four aspherical surfaces. No uniform scaling is applied.     ║
 * ║                                                                                                    ║
 * ║ SOURCE CORRECTIONS — preserved in the audit, not silently changed:                                 ║
 * ║   • S8 νd: 146.6 -> 46.6 (same nd=1.80400 medium as S10).                                          ║
 * ║   • S30 R: +40.8554 -> -40.8554 mm (only this sign reproduces all three published EFLs).          ║
 * ║   • S34 νd: 141.2 -> 41.2 (same nd=1.53610 hybrid medium as S7/S20/S31).                           ║
 * ║                                                                                                    ║
 * ║ HYBRID MODELING: the four published 0.2 mm nd=1.53610 / νd=41.2 media are modeled explicitly      ║
 * ║ as aspheric resin-like laminate entries. `elements` therefore has 20 modeled material entries,     ║
 * ║ while elementCount remains the physical/marketed 16-element count and groupCount remains 14.       ║
 * ║ No generic synthetic cement layers are added.                                                       ║
 * ║                                                                                                    ║
 * ║ FOCUS STATUS — CONSTRAINED_RECONSTRUCTION: the patent states G2-only inner focusing but publishes  ║
 * ║ no close-focus table. Close pairs are a one-DOF code solve tied to Tamron's 0.33 m MFD, with       ║
 * ║ d6+d16 conserved at each zoom station and a fixed image plane. The tele state gives 1:3.923,      ║
 * ║ consistent with Tamron's marketed 1:3.9.                                                            ║
 * ║                                                                                                    ║
 * ║ REAR IMAGE SPACING: S35A d is a computed paraxial d-line BFD because the patent does not publish   ║
 * ║ d35. The zoom-only BFD values are 39.094763 / 52.941111 / 61.210424 mm.                            ║
 * ║                                                                                                    ║
 * ║ SEMI-DIAMETERS: not published. They are model geometry derived from (1) the F/2.91 marginal-ray    ║
 * ║ envelope, (2) the default 0.60-field chief/off-axis sample rays for a 135-format image field,      ║
 * ║ (3) the patent Fig. 1 proportions, and (4) the A09 67 mm filter / 73 mm maximum-diameter limits.  ║
 * ║ All authored SDs were checked at every zoom/focus state for edge thickness, actual rim slope,      ║
 * ║ shared-band cross-gap intrusion, sampled off-axis containment, and asphere validity.               ║
 * ║                                                                                                    ║
 * ║ SPECTRAL LIMIT: the patent publishes only d-line nd and νd. nC, nF, ng, and dPgF are therefore    ║
 * ║ intentionally not invented. Glass strings use six-digit coordinate classes; the hybrid medium is  ║
 * ║ explicitly Unmatched. Vendor identity is unresolved because several catalogs share these pairs.    ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer reference: https://www.tamron.com/jp/consumer/lenses/data/af-lens/a09.html
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "tamron-sp-af-28-75-f28-xr-di-a09",
  maker: "Tamron",
  name: "TAMRON SP AF 28-75mm f/2.8 XR Di LD Aspherical [IF] MACRO",
  subtitle: "US 7,075,731 B1 exemplary prescription — Model A09 correlation; constrained G2 focus reconstruction",

  catalog: {
    lensMounts: ["canon-ef", "nikon-f", "sony-a", "pentax-k"],
    imageFormat: "135-full-frame",
    specs: [
      "16 ELEMENTS / 14 GROUPS",
      "DESIGN f = 28.87-72.65 mm",
      "DESIGN F/2.91",
      "0.33 m MFD",
      "4 ASPHERICAL SURFACES",
    ],
    elementCount: 16,
    groupCount: 14,
    focalLengthMm: { marketing: [28, 75], design: [28.87, 72.65] },
    fNumber: { marketing: 2.8, design: 2.91 },
  },

  source: {
    patentNumber: "US 7,075,731 B1",
    patentYear: 2006,
    authors: ["Yasuharu Yamada"],
    assignees: ["Tamron Co., Ltd."],
  },

  /* ── Modeled material entries ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -119.94282,
      glass: "847238 class (vendor unresolved)",
      role: "G1 front negative meniscus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 99.141205,
      glass: "697555 class (vendor unresolved)",
      role: "G1 positive element.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 118.159249,
      glass: "773496 class (vendor unresolved)",
      role: "G1 rear positive meniscus.",
    },
    {
      id: 4,
      name: "L4r",
      label: "Element 4 resin layer",
      type: "Hybrid Resin Layer (1× Asph)",
      nd: 1.5361,
      vd: 41.2,
      focalLengthMm: -337.683376,
      glass: "Unmatched (hybrid/aspheric layer; nd=1.53610, νd=41.2)",
      role: "Published 0.2 mm front aspheric laminate on physical Element 4.",
      diagramLabel: "4r",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4 glass body",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -25.76877,
      glass: "804466 class (vendor unresolved)",
      role: "G2 front negative glass body beneath the H1 laminate.",
      diagramLabel: "4",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -32.87329,
      glass: "804466 class (vendor unresolved)",
      role: "G2 negative element.",
      diagramLabel: "5",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 29.364684,
      glass: "805254 class (vendor unresolved)",
      role: "G2 positive element.",
      diagramLabel: "6",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -30.255495,
      glass: "487702 class (vendor unresolved)",
      role: "Front component of the G2 cemented pair.",
      diagramLabel: "7",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 90.561616,
      glass: "805254 class (vendor unresolved)",
      role: "Rear component of the G2 cemented pair.",
      diagramLabel: "8",
      cemented: "D1",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 77.41494,
      glass: "497816 class (vendor unresolved)",
      role: "G3 front positive element.",
      diagramLabel: "9",
    },
    {
      id: 11,
      name: "L10r",
      label: "Element 10 resin layer",
      type: "Hybrid Resin Layer (1× Asph)",
      nd: 1.5361,
      vd: 41.2,
      focalLengthMm: 476.356235,
      glass: "Unmatched (hybrid/aspheric layer; nd=1.53610, νd=41.2)",
      role: "Published 0.2 mm front aspheric laminate on physical Element 10.",
      diagramLabel: "10r",
      cemented: "H2",
    },
    {
      id: 12,
      name: "L10",
      label: "Element 10 glass body",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 110.733486,
      glass: "487702 class (vendor unresolved)",
      role: "G3 positive glass body beneath the H2 laminate.",
      diagramLabel: "10",
      cemented: "H2",
    },
    {
      id: 13,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 75.158887,
      glass: "497816 class (vendor unresolved)",
      role: "Front component of the G3 cemented pair.",
      diagramLabel: "11",
      cemented: "D2",
    },
    {
      id: 14,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -78.409353,
      glass: "847238 class (vendor unresolved)",
      role: "Rear component of the G3 cemented pair.",
      diagramLabel: "12",
      cemented: "D2",
    },
    {
      id: 15,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 127.163859,
      glass: "487702 class (vendor unresolved)",
      role: "G4 front positive element.",
      diagramLabel: "13",
    },
    {
      id: 16,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 43.044298,
      glass: "497816 class (vendor unresolved)",
      role: "G4 positive element.",
      diagramLabel: "14",
    },
    {
      id: 17,
      name: "L15",
      label: "Element 15 glass body",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -22.466822,
      glass: "834372 class (vendor unresolved)",
      role: "G4 negative glass body with a rear H3 laminate.",
      diagramLabel: "15",
      cemented: "H3",
    },
    {
      id: 18,
      name: "L15r",
      label: "Element 15 resin layer",
      type: "Hybrid Resin Layer (1× Asph)",
      nd: 1.5361,
      vd: 41.2,
      focalLengthMm: 615.414913,
      glass: "Unmatched (hybrid/aspheric layer; nd=1.53610, νd=41.2)",
      role: "Published 0.2 mm rear aspheric laminate on physical Element 15.",
      diagramLabel: "15r",
      cemented: "H3",
    },
    {
      id: 19,
      name: "L16",
      label: "Element 16 glass body",
      type: "Biconvex Positive",
      nd: 1.58144,
      vd: 40.8,
      focalLengthMm: 41.764342,
      glass: "581408 class (vendor unresolved)",
      role: "G4 rear positive glass body with a rear H4 laminate.",
      diagramLabel: "16",
      cemented: "H4",
    },
    {
      id: 20,
      name: "L16r",
      label: "Element 16 resin layer",
      type: "Hybrid Resin Layer (1× Asph)",
      nd: 1.5361,
      vd: 41.2,
      focalLengthMm: 401.524526,
      glass: "Unmatched (hybrid/aspheric layer; nd=1.53610, νd=41.2)",
      role: "Published 0.2 mm rear aspheric laminate on physical Element 16.",
      diagramLabel: "16r",
      cemented: "H4",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) Patent equation uses 1 + ε under the conic square root, so LensVisualizer K = patent ε directly. */
  surfaces: [
    { label: "1", R: 333.1075, d: 1.8, sd: 30.0, medium: 1 },
    { label: "2", R: 77.6323, d: 1.0, sd: 30.0 },
    { label: "3", R: 74.5678, d: 7.5878, sd: 29.0, medium: 2 },
    { label: "4", R: -899.7118, d: 0.2, sd: 29.0 },
    { label: "5", R: 47.0695, d: 5.5826, sd: 27.0, medium: 3 },
    { label: "6", R: 92.1616, sd: 27.0 },
    {
      label: "7A",
      R: 91.4948,
      d: 0.2,
      sd: 10.7,
      medium: 4,
      asphere: { K: -1.7698, A4: 1.51609e-5, A6: -2.40934e-9, A8: -3.815e-11, A10: -3.90581e-13, A12: 0, A14: 0 },
    },
    { label: "8", R: 60.7311, d: 1.0, sd: 10.7, medium: 5 },
    { label: "9", R: 15.3347, d: 5.7, sd: 10.2 },
    { label: "10", R: -49.6859, d: 0.8, sd: 10.2, medium: 6 },
    { label: "11", R: 56.8731, d: 0.1, sd: 10.2 },
    { label: "12", R: 34.3769, d: 5.0582, sd: 11.6, medium: 7 },
    { label: "13", R: -70.7589, d: 3.8077, sd: 11.5 },
    { label: "14", R: -17.7484, d: 1.0, sd: 11.5, medium: 8 },
    { label: "15", R: 88.895, d: 2.4, sd: 12.2, medium: 9 },
    { label: "16", R: -400.8377, sd: 12.8 },
    { label: "STO", R: "flat", d: 0.8 },
    { label: "18", R: 32.9501, d: 4.5533, sd: 13.8, medium: 10 },
    { label: "19", R: 218.9272, d: 0.334, sd: 14.3 },
    {
      label: "20A",
      R: 42.2568,
      d: 0.2,
      sd: 14.5,
      medium: 11,
      asphere: { K: -0.3805, A4: -1.01321e-5, A6: 2.64212e-10, A8: -9.59136e-12, A10: -5.6031e-14, A12: 0, A14: 0 },
    },
    { label: "21", R: 50.5518, d: 4.1798, sd: 14.5, medium: 12 },
    { label: "22", R: 774.1028, d: 0.2883, sd: 14.8 },
    { label: "23", R: -1096.67, d: 4.9331, sd: 15.0, medium: 13 },
    { label: "24", R: -36.1775, d: 1.0, sd: 15.0, medium: 14 },
    { label: "25", R: -80.5109, sd: 15.2 },
    { label: "26", R: 57.8584, d: 3.3516, sd: 15.3, medium: 15 },
    { label: "27", R: 851.4063, d: 0.11, sd: 15.3 },
    { label: "28", R: 37.524, d: 8.2312, sd: 15.3, medium: 16 },
    { label: "29", R: -46.1404, d: 4.8987, sd: 15.0 },
    // Patent prints +40.8554; verified modeling sign is negative.
    { label: "30", R: -40.8554, d: 1.0, sd: 13.0, medium: 17 },
    { label: "31", R: 34.9959, d: 0.2, sd: 12.0, medium: 18 },
    {
      label: "32A",
      R: 39.0704,
      d: 0.2,
      sd: 12.0,
      asphere: { K: -6.2476, A4: 2.39974e-5, A6: -2.88771e-8, A8: -1.11697e-10, A10: -1.02647e-12, A12: 0, A14: 0 },
    },
    { label: "33", R: 34.4669, d: 5.8463, sd: 13.0, medium: 19 },
    { label: "34", R: -77.0642, d: 0.2, sd: 13.0, medium: 20 },
    {
      label: "35A",
      R: -56.7993,
      sd: 13.0,
      asphere: { K: -12.8865, A4: 2.35429e-5, A6: -4.67954e-8, A8: -1.1988e-10, A10: -1.40158e-13, A12: 0, A14: 0 },
    },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 28.87, label: "Wide" },
      { focalLengthMm: 49.98 },
      { focalLengthMm: 72.65, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.33,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent specifies G2-only inner focusing but no close-focus spacings. " +
      "Close states are code-solved at Tamron's 0.33 m MFD with only G2 translating, d6+d16 conserved, and the " +
      "image plane fixed; telephoto magnification computes to about 1:3.923 versus the marketed 1:3.9.",
  },

  /* (moved from var)
   * d6 and d16 are zoom + reconstructed G2-focus gaps; their sum is conserved at each zoom station.
   * d25 and d35 are zoom-only. d35 is computed paraxial BFD, not a patent-tabulated spacing.
   */
  gaps: {
    "6": {
      label: "D6 / G1-G2",
      values: [
        [2.694, 0.8708559680380064],
        [16.985, 14.292016581730831],
        [27.814, 24.046260110703855],
      ],
    },
    "16": {
      label: "D16 / G2-STO",
      values: [
        [9.782, 11.605144031961993],
        [3.828, 6.520983418269168],
        [0.985, 4.752739889296145],
      ],
    },
    "25": {
      label: "D25 / G3-G4",
      values: [
        [6.786, 6.786],
        [2.409, 2.409],
        [0.997, 0.997],
      ],
    },
    "35A": {
      label: "BFD",
      values: [
        [39.094763314919156, 39.094763314919156],
        [52.941111498078016, 52.941111498078016],
        [61.21042397039319, 61.21042397039319],
      ],
    },
  },

  aperture: { nominalFNumber: 2.91, fStops: [2.91, 4, 5.6, 8, 11, 16], blades: 7 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7A", toSurface: "16" },
    { text: "G3", fromSurface: "18", toSurface: "25" },
    { text: "G4", fromSurface: "26", toSurface: "35A" },
  ],
  doublets: [
    { text: "H1", fromSurface: "7A", toSurface: "9" },
    { text: "D1", fromSurface: "14", toSurface: "16" },
    { text: "H2", fromSurface: "20A", toSurface: "22" },
    { text: "D2", fromSurface: "23", toSurface: "25" },
    { text: "H3", fromSurface: "30", toSurface: "32A" },
    { text: "H4", fromSurface: "33", toSurface: "35A" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
