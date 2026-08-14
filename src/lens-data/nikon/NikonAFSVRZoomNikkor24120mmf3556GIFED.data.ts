import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-S VR ZOOM-NIKKOR 24-120mm f/3.5-5.6G IF-ED                 ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2004/0218274 A1, Example 2 (Misako Aoki / Nikon Corporation).    ║
 * ║ Five-group positive-negative-positive-negative-positive VR zoom.                  ║
 * ║ Physical prescription: 15 lenses / 13 air-separated groups / 2 aspheres.         ║
 * ║ The 0.2000 mm medium between patent surfaces 6 and 7 is modeled as a bonded       ║
 * ║ aspheric resin/composite layer on physical L21, so `elements` has 16 entries      ║
 * ║ while `elementCount` remains the patent/production physical count of 15.          ║
 * ║                                                                                   ║
 * ║ Zoom: patent infinity gaps D5, D14, D19, D23, and Bf at 24.720/70/116.500 mm.    ║
 * ║ G2 reverses in fixed-image coordinates between the three patent zoom nodes.       ║
 * ║ D14 is split to insert the one required STO: Figure 5 gives AS about 1.49 mm      ║
 * ║ objectward of surface 15; the model uses a fixed 1.5000 mm STO→15 spacing.        ║
 * ║ `var["14"]` therefore stores patent D14 minus 1.5000 mm.                         ║
 * ║                                                                                   ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that only G2 moves.  ║
 * ║ Close rows are code-solved at Nikon's 0.5 m MFD from the focal plane, conserving ║
 * ║ D5 + D14 at each zoom node and forcing finite-conjugate matrix B = 0.             ║
 * ║                                                                                   ║
 * ║ STO size: 7.424006 mm base semi-diameter solves the wide-state design FNO 3.604  ║
 * ║ for the inferred stop position. The zoom-state `nominalFno` array preserves the   ║
 * ║ patent maxima 3.604 / 5.40 / 5.903.                                               ║
 * ║                                                                                   ║
 * ║ Semi-diameters are modeling inferences, not patent data. They were initialized    ║
 * ║ from the rendered Figure 5 wide-state optical section and checked against         ║
 * ║ marginal/chief-ray envelopes. They were then reduced only where required by the  ║
 * ║ current edge-thickness, actual-rim-slope, conic, and shared-gap intrusion rules.  ║
 * ║ L33 is reduced relative to L3A to follow the Figure 5 rear-group silhouette.      ║
 * ║ No layout control is used to conceal invalid geometry.                            ║
 * ║                                                                                   ║
 * ║ No geometric scale is applied. Patent d-line nd/vd values are retained exactly.  ║
 * ║ The patent supplies no nC/nF/ng/dPgF data, so none are invented here; L3AP and   ║
 * ║ L51 are tagged inferred ED solely from the production count and coordinates.     ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-afs-vr-zoom-nikkor-24-120-f35-56g-if-ed",
  maker: "Nikon",
  name: "NIKON AF-S VR ZOOM-NIKKOR 24-120mm f/3.5-5.6G IF-ED",
  subtitle: "US 2004/0218274 A1 Example 2 — constrained G2 close-focus reconstruction",
  specs: [
    "15 ELEMENTS / 13 GROUPS",
    "24.720-116.500 mm DESIGN",
    "F/3.604-5.903 DESIGN",
    "2ω = 85.16°-20.24°",
    "2 ASPHERICAL SURFACES",
    "G2 INNER FOCUS / L3A VR",
  ],

  focalLengthMarketing: [24, 120],
  focalLengthDesign: [24.72, 116.5],
  apertureMarketing: 3.5,
  apertureDesign: 3.604,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2004/0218274 A1",
  patentAuthors: ["Misako Aoki"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2004,
  elementCount: 15,
  groupCount: 13,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -106.093486,
      glass: "847238 — dense-flint class (vendor unresolved)",
      cemented: "D1",
      role: "Front negative member of the cemented G1 pair.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.32,
      fl: 86.161633,
      glass: "755523 — lanthanum-crown class (vendor unresolved)",
      cemented: "D1",
      role: "Positive partner of the front cemented pair.",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.816,
      vd: 46.63,
      fl: 99.854497,
      glass: "816466 — high-index lanthanum-crown class (vendor unresolved)",
      role: "Rear positive member of G1.",
    },
    {
      id: 4,
      name: "L21r",
      diagramLabel: "L21r",
      label: "L21 bonded aspheric layer",
      type: "Bonded Aspheric Resin/Composite Layer",
      nd: 1.55389,
      vd: 38.09,
      glass: "Unmatched (thin bonded aspheric resin/composite layer; nd=1.553890, vd=38.09)",
      cemented: "H1",
      role: "0.2000 mm aspheric layer modeled separately from physical L21.",
    },
    {
      id: 5,
      name: "L21",
      diagramLabel: "L21",
      label: "L21 substrate",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      glass: "835427 — high-index lanthanum class (vendor unresolved)",
      cemented: "H1",
      role: "High-index substrate of physical L21; bonded-layer composite EFL is -18.658750 mm.",
    },
    {
      id: 6,
      name: "L22",
      diagramLabel: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.72,
      fl: -27.688533,
      glass: "835427 — high-index lanthanum class (vendor unresolved)",
      role: "Negative member of the G2 focusing group.",
    },
    {
      id: 7,
      name: "L23",
      diagramLabel: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.78472,
      vd: 25.68,
      fl: 17.585244,
      glass: "785257 — dense-flint class (vendor unresolved)",
      role: "Strong positive correction member inside G2.",
    },
    {
      id: 8,
      name: "L24",
      diagramLabel: "L24",
      label: "L24",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: -30.04189,
      glass: "835427 — high-index lanthanum class (vendor unresolved)",
      role: "Rear negative member of the G2 focusing group.",
    },
    {
      id: 9,
      name: "L3AN",
      diagramLabel: "L3AN",
      label: "L3AN",
      type: "Negative Meniscus",
      nd: 1.805182,
      vd: 25.41,
      fl: -53.594219,
      glass: "805254 — dense-flint class (vendor unresolved)",
      cemented: "L3A",
      role: "Negative member of the transverse VR cemented doublet.",
    },
    {
      id: 10,
      name: "L3AP",
      diagramLabel: "L3AP",
      label: "L3AP",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 23.92881,
      glass: "497816 — ED fluorophosphate class (vendor unresolved)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      cemented: "L3A",
      role: "Positive low-dispersion member of the transverse VR cemented doublet.",
    },
    {
      id: 11,
      name: "L33",
      diagramLabel: "L33",
      label: "L33",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.5168,
      vd: 64.1,
      fl: 64.58601,
      glass: "517641/517642 — BK7-class crown (vendor unresolved)",
      role: "Rear positive member of G3; object-side surface is aspherical.",
    },
    {
      id: 12,
      name: "L41",
      diagramLabel: "L41",
      label: "L41",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: 32.376383,
      glass: "847238 — dense-flint class (vendor unresolved)",
      role: "Positive member of negative-power G4.",
    },
    {
      id: 13,
      name: "L42",
      diagramLabel: "L42",
      label: "L42",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.72,
      fl: -19.099341,
      glass: "835427 — high-index lanthanum class (vendor unresolved)",
      role: "Strong negative member of G4.",
    },
    {
      id: 14,
      name: "L51",
      diagramLabel: "L51",
      label: "L51",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 44.474601,
      glass: "497816 — ED fluorophosphate class (vendor unresolved)",
      apd: "inferred",
      apdNote: "Production-correlated ED element; the patent publishes nd/vd only.",
      role: "Front low-dispersion positive member of G5.",
    },
    {
      id: 15,
      name: "L52",
      diagramLabel: "L52",
      label: "L52",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.24,
      fl: 58.884053,
      glass: "487702/487704 — low-index FK/FSL crown class (vendor unresolved)",
      role: "Central positive member of G5.",
    },
    {
      id: 16,
      name: "L53",
      diagramLabel: "L53",
      label: "L53",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -40.708049,
      glass: "847238 — dense-flint class (vendor unresolved)",
      role: "Rear negative meniscus of G5.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 187.4154, d: 1.9, nd: 1.84666, elemId: 1, sd: 29.6 },
    { label: "2", R: 60.4398, d: 7.1, nd: 1.755, elemId: 2, sd: 27.4 },
    { label: "3", R: 809.3772, d: 0.1, nd: 1.0, elemId: 0, sd: 27.2 },
    { label: "4", R: 51.111, d: 4.9, nd: 1.816, elemId: 3, sd: 25.1 },
    { label: "5", R: 131.22, d: 2.1554, nd: 1.0, elemId: 0, sd: 25.1 },
    { label: "6A", R: 122.647, d: 0.2, nd: 1.55389, elemId: 4, sd: 14.4 },
    { label: "7", R: 122.647, d: 1.15, nd: 1.83481, elemId: 5, sd: 14.4 },
    { label: "8", R: 13.7545, d: 6.5, nd: 1.0, elemId: 0, sd: 10.4 },
    { label: "9", R: -54.5024, d: 0.9, nd: 1.83481, elemId: 6, sd: 11.8 },
    { label: "10", R: 40.4384, d: 0.1, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "11", R: 26.0771, d: 5.35, nd: 1.78472, elemId: 7, sd: 10.0 },
    { label: "12", R: -26.6656, d: 0.13, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "13", R: -25.0155, d: 0.9, nd: 1.83481, elemId: 8, sd: 8.8 },
    { label: "14", R: -9999.0, d: 17.9169, nd: 1.0, elemId: 0, sd: 10.5 },
    // AS location inferred from rendered patent Fig. 5; fixed 1.5000 mm before surface 15.
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 7.424006 },
    { label: "15", R: 32.4485, d: 0.8, nd: 1.805182, elemId: 9, sd: 9.1 },
    { label: "16", R: 18.3178, d: 4.6, nd: 1.497, elemId: 10, sd: 9.1 },
    { label: "17", R: -31.0784, d: 2.0, nd: 1.0, elemId: 0, sd: 9.1 },
    { label: "18A", R: 27.2189, d: 2.2, nd: 1.5168, elemId: 11, sd: 7.2 },
    { label: "19", R: 143.4442, d: 2.5228, nd: 1.0, elemId: 0, sd: 7.2 },
    { label: "20", R: -69.6687, d: 2.5, nd: 1.84666, elemId: 12, sd: 8.2 },
    { label: "21", R: -19.9954, d: 0.1, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "22", R: -19.1927, d: 0.8, nd: 1.83481, elemId: 13, sd: 8.2 },
    { label: "23", R: 95.9919, d: 16.8651, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "24", R: 172.0254, d: 6.0, nd: 1.497, elemId: 14, sd: 14.4 },
    { label: "25", R: -25.0691, d: 0.1, nd: 1.0, elemId: 0, sd: 14.4 },
    { label: "26", R: 73.9596, d: 4.9, nd: 1.48749, elemId: 15, sd: 14.8 },
    { label: "27", R: -45.895, d: 4.2246, nd: 1.0, elemId: 0, sd: 14.8 },
    { label: "28", R: -22.809, d: 1.1, nd: 1.84666, elemId: 16, sd: 14.0 },
    { label: "29", R: -68.9305, d: 38.5116, nd: 1.0, elemId: 0, sd: 14.0 },
  ],

  /* Patent uses sqrt(1-Kpat*c^2*h^2); LensVisualizer uses standard K = Kpat - 1. */
  asph: {
    "6A": {
      K: -7.2822,
      A4: 4.4929e-6,
      A6: 7.4142e-10,
      A8: -4.2168e-11,
      A10: 1.1193e-13,
      A12: 7.0252e-18,
      A14: 0,
    },
    "18A": {
      K: 0.0063,
      A4: -9.6879e-7,
      A6: 2.1207e-8,
      A8: -3.8609e-10,
      A10: 2.7728e-12,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom and focus variable gaps ──
   * Surface 14 stores the variable object-side part of patent D14 after removing
   * the fixed 1.5000 mm STO→15 segment. Only 5/14 change with focus; 19/23/29 are zoom-only.
   */
  var: {
    "5": [
      [2.1554, 1.002509249797],
      [21.811, 19.408528974797],
      [34.7047, 30.072659176151],
    ],
    "14": [
      [17.9169, 19.069790750203],
      [5.0437, 7.446171025203],
      [1.1783, 5.810340823849],
    ],
    "19": [
      [2.5228, 2.5228],
      [15.6452, 15.6452],
      [18.5267, 18.5267],
    ],
    "23": [
      [16.8651, 16.8651],
      [3.7427, 3.7427],
      [0.8612, 0.8612],
    ],
    "29": [
      [38.5116, 38.5116],
      [51.6341, 51.6341],
      [54.5154, 54.5154],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["14", "D14 TO STO"],
    ["19", "D19"],
    ["23", "D23"],
    ["29", "BF"],
  ],

  zoomPositions: [24.72, 70, 116.5],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6A", toSurface: "14" },
    { text: "G3", fromSurface: "STO", toSurface: "19" },
    { text: "G4", fromSurface: "20", toSurface: "23" },
    { text: "G5", fromSurface: "24", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "L3A", fromSurface: "15", toSurface: "17" },
  ],

  closeFocusM: 0.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent G2-only internal focus. Close rows are solved at 0.5 m from the focal plane by changing D5 and D14 by equal/opposite amounts while G3 and all rear groups remain fixed; tele |m| = 0.209821.",

  nominalFno: [3.604, 5.4, 5.903],
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,

  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
