import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — NIKON NIKKOR Z DX 12-28mm f/3.5-5.6 PZ VR       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2026/0056396 A1, Example 1, Table 1.              ║
 * ║  Four zoom groups: G1(-), G2(+), G3(-), G4(+).                     ║
 * ║  12 elements / 11 air-separated groups, 1 aspherical surface.       ║
 * ║  Focus: G3 is the patent focusing group GF. Table 1 gives only      ║
 * ║  infinity-focus zoom spacings, so close-focus pairs duplicate the   ║
 * ║  infinity values rather than inventing unpublished focus travel.     ║
 * ║                                                                    ║
 * ║  Internal zoom: constant TL = 77.25 mm and BF = 9.815 mm.           ║
 * ║  Zoom variable gaps: D1 after surface 8, D2 after 20, D3 after 22.  ║
 * ║  BF is included as a zoom variable with constant values.            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent table does not publish clear-aperture semi-diameters.   ║
 * ║  Values below are conservative rendering apertures estimated from   ║
 * ║  paraxial marginal/chief-ray envelopes, then tightened to satisfy   ║
 * ║  edge-thickness, sd/|R|, element-ratio, and signed cross-gap checks.║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERIC CONIC:                                           ║
 * ║  The patent uses κ in sqrt(1 - κ y²/R²). LensVisualizer stores the  ║
 * ║  standard conic constant K in sqrt(1 - (1+K)y²/R²), so K = κ - 1.   ║
 * ║  Patent κ = 0.0000 is therefore stored here as K = -1.              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-nikkor-z-dx-12-28mm-f35-56-pz-vr",
  maker: "Nikon",
  name: "NIKON NIKKOR Z DX 12-28mm f/3.5-5.6 PZ VR",
  subtitle: "US 2026/0056396 A1 — Example 1 / Nikon Uehara",
  specs: [
    "12 elements / 11 groups",
    "Patent f = 12.36-27.16 mm",
    "Marketed 12-28 mm f/3.5-5.6",
    "1 ED element / 1 aspherical surface",
    "GVR cemented VR doublet; G3 inner focus",
  ],

  focalLengthMarketing: [12, 28],
  focalLengthDesign: [12.36, 27.16],
  lensMounts: ["nikon-z"],
  imageFormat: "aps-c",
  patentYear: 2026,
  elementCount: 12,
  groupCount: 11,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.1,
      fl: 176.88,
      glass: "N-BK7 (Schott) / BK7-class crown (516/641)",
      role: "Weak positive front meniscus in fixed negative G1.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: -23.68,
      glass: "N-LASF44 (Schott) / 804465 lanthanum flint class",
      role: "First strong negative element of G1.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -16.06,
      glass: "N-LASF44 (Schott) / 804465 lanthanum flint class",
      role: "Strongest negative element in the first group.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element L14",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: 31.1,
      glass: "S-TIH53 (Ohara) / SF57 dense flint class (847/238)",
      role: "Positive dense-flint meniscus closing the fixed first group.",
    },
    {
      id: 5,
      name: "L21",
      label: "Element L21",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.1,
      fl: 33.6,
      glass: "N-BK7 (Schott) / BK7-class crown (516/641)",
      role: "First positive element of moving G2.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element L22",
      type: "Positive Meniscus",
      nd: 1.60342,
      vd: 38,
      fl: 29.92,
      glass: "F5 (Schott) / 603380 flint class",
      role: "Positive pre-stop meniscus in G2.",
    },
    {
      id: 7,
      name: "L23",
      label: "Element L23",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      fl: -34.88,
      glass: "S-TIH53 (Ohara) / SF57 dense flint class (847/238)",
      role: "Negative dense-flint element immediately ahead of the stop.",
    },
    {
      id: 8,
      name: "L24",
      label: "Element L24",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.5,
      fl: 16.3,
      glass: "J-FKH1 (Hikari, 498826) ED fluorophosphate",
      apd: "inferred",
      apdNote:
        "ED assignment inferred from νd = 82.5 and Nikon's published one-ED-element specification; no line indices are published in the patent.",
      role: "Positive ED component of the cemented VR group GVR.",
      cemented: "GVR",
    },
    {
      id: 9,
      name: "L25",
      label: "Element L25",
      type: "Negative Meniscus",
      nd: 1.95,
      vd: 29.4,
      fl: -33.11,
      glass: "J-LASFH15 (Hikari, 950294) ultra-high-index lanthanum flint",
      role: "Negative high-index partner in the cemented VR group GVR.",
      cemented: "GVR",
    },
    {
      id: 10,
      name: "L26",
      label: "Element L26",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58913,
      vd: 61.2,
      fl: 94.15,
      glass: "S-BAL35 (Ohara, 589612) barium crown",
      role: "Weak positive rear G2 meniscus carrying the sole aspherical surface.",
    },
    {
      id: 11,
      name: "L31",
      label: "Element L31",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 40.7,
      fl: -19.77,
      glass: "NBFD13 (Hoya, 806407) lanthanum flint",
      role: "Single-element focusing group GF.",
    },
    {
      id: 12,
      name: "L41",
      label: "Element L41",
      type: "Positive Meniscus",
      nd: 1.85026,
      vd: 32.3,
      fl: 44.07,
      glass: "J-LASF021 (Hikari, 850324) dense lanthanum flint",
      role: "Fixed positive rear field/relay element.",
    },
  ],

  surfaces: [
    { label: "1", R: 66.4503, d: 4.05, nd: 1.5168, elemId: 1, sd: 24.0 },
    { label: "2", R: 238.302, d: 0.1, nd: 1.0, elemId: 0, sd: 19.2 },
    { label: "3", R: 46.616, d: 1.7, nd: 1.804, elemId: 2, sd: 12.0 },
    { label: "4", R: 13.299, d: 7.2, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "5", R: -466.4671, d: 1.4, nd: 1.804, elemId: 3, sd: 10.2 },
    { label: "6", R: 13.2979, d: 3.0, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "7", R: 18.355, d: 2.85, nd: 1.84666, elemId: 4, sd: 9.5 },
    { label: "8", R: 56.2992, d: 15.974, nd: 1.0, elemId: 0, sd: 9.5 },

    { label: "9", R: 71.8433, d: 2.14, nd: 1.5168, elemId: 5, sd: 7.8 },
    { label: "10", R: -22.6664, d: 0.1, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "11", R: 11.7967, d: 1.85, nd: 1.60342, elemId: 6, sd: 5.75 },
    { label: "12", R: 32.0363, d: 0.41, nd: 1.0, elemId: 0, sd: 4.7 },
    { label: "13", R: -827.1325, d: 0.95, nd: 1.84666, elemId: 7, sd: 4.7 },
    { label: "14", R: 30.6444, d: 1.7, nd: 1.0, elemId: 0, sd: 4.6 },
    { label: "STO", R: 1e15, d: 3.2, nd: 1.0, elemId: 0, sd: 4.05 },
    { label: "16", R: 22.3289, d: 3.0, nd: 1.49782, elemId: 8, sd: 5.8 },
    { label: "17", R: -12.1747, d: 1.0, nd: 1.95, elemId: 9, sd: 6.2 },
    { label: "18", R: -20.6586, d: 4.25, nd: 1.0, elemId: 0, sd: 6.5 },
    { label: "19A", R: -31.4221, d: 1.3, nd: 1.58913, elemId: 10, sd: 6.5 },
    { label: "20", R: -20.3664, d: 3.114, nd: 1.0, elemId: 0, sd: 6.5 },

    { label: "21", R: -32.0982, d: 1.0, nd: 1.8061, elemId: 11, sd: 8.2 },
    { label: "22", R: 32.0982, d: 3.35, nd: 1.0, elemId: 0, sd: 8.4 },

    { label: "23", R: -163.0228, d: 3.8, nd: 1.85026, elemId: 12, sd: 11.0 },
    { label: "24", R: -30.7917, d: 9.815, nd: 1.0, elemId: 0, sd: 11.8 },
  ],

  asph: {
    "19A": {
      K: -1,
      A4: -1.6606e-4,
      A6: 2.26257e-6,
      A8: -2.73958e-7,
      A10: 1.18829e-8,
      A12: -2.0934e-10,
      A14: 0,
    },
  },

  zoomPositions: [12.36, 18, 27.16],
  zoomStep: 0.004,
  zoomLabels: ["12 mm", "28 mm"],
  nominalFno: [3.5, 4.5, 5.6],
  var: {
    "8": [
      [15.974, 15.974],
      [9.269, 9.269],
      [2.039, 2.039],
    ],
    "20": [
      [3.114, 3.114],
      [4.126, 4.126],
      [8.012, 8.012],
    ],
    "22": [
      [3.35, 3.35],
      [9.043, 9.043],
      [12.387, 12.387],
    ],
    "24": [
      [9.815, 9.815],
      [9.815, 9.815],
      [9.815, 9.815],
    ],
  },
  varLabels: [
    ["8", "D1"],
    ["20", "D2"],
    ["22", "D3"],
    ["24", "BF"],
  ],

  groups: [
    { text: "G1(-)", fromSurface: "1", toSurface: "8" },
    { text: "G2(+) / GVR", fromSurface: "9", toSurface: "20" },
    { text: "G3(-) / GF", fromSurface: "21", toSurface: "22" },
    { text: "G4(+)", fromSurface: "23", toSurface: "24" },
  ],
  doublets: [{ text: "GVR", fromSurface: "16", toSurface: "18" }],

  focusDescription:
    "Inner focus by the single-element third group G3. Close-focus gap values are not published for Example 1; this data file retains infinity zoom spacings for both focus endpoints.",
  closeFocusM: 0.19,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 25,
  yScFill: 0.7,
  scFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
