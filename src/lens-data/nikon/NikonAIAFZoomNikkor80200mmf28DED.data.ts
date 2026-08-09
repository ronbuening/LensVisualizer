import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AI AF ZOOM-NIKKOR 80-200mm f/2.8D ED                                            ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Optical source: US 5,579,171 A, Example 3 / third embodiment, Table 4 (Nikon Corporation).         ║
 * ║  Production correlation: Nikon AI AF Zoom-Nikkor 80-200mm f/2.8D ED, Nikon F, FX/35mm.             ║
 * ║  16 elements / 11 air-separated groups; all spherical. No scale factor is applied.                 ║
 * ║                                                                                                      ║
 * ║  Zoom: only the two patent-published infinity endpoints are authored: 80.94 and 196.00 mm.          ║
 * ║  Variable gaps D5, D13, D18, and BF are zoom-only. The viewer's between-endpoint interpolation is    ║
 * ║  a display interpolation, not a reconstruction of the patent's explicitly non-linear G3 cam path.   ║
 * ║                                                                                                      ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. Example 3 publishes no finite-focus spacing state.       ║
 * ║  closeFocusM = 1.5 records Nikon's production MFD only; every focus pair below is identical.         ║
 * ║                                                                                                      ║
 * ║  Stop: patent surface 24 is S3 and is stored as the sole STO. Its 13.839631 mm semi-diameter is      ║
 * ║  inferred from the patent's F/2.8 declaration and the paraxial entrance-pupil solution; the patent   ║
 * ║  does not publish a stop diameter. A single fixed radius gives modeled F/# 2.799999 (W) and          ║
 * ║  2.800001 (T).                                                                                        ║
 * ║                                                                                                      ║
 * ║  Semi-diameters are not patent-published. They are inferred from the W/T paraxial marginal-ray       ║
 * ║  envelopes, 35mm-format field bundles, the Figure 5 section proportions, and current edge/slope/    ║
 * ║  cross-gap constraints. gapSagFrac = 0.97 is required by the very tight S8-S9 and S11-S12 rim       ║
 * ║  clearances while preserving the on-axis F/2.8 marginal bundle at both zoom endpoints.              ║
 * ║                                                                                                      ║
 * ║  The patent proposes transverse G3 image stabilization. Nikon's 1996 production 80-200mm f/2.8D ED  ║
 * ║  did not have VR; this file models only the centered prescription and does not claim production VR.  ║
 * ║                                                                                                      ║
 * ║  Glass vendors are not named by the patent. Catalog names identify coordinate-compatible curves,    ║
 * ║  never production suppliers; three non-matching coordinate classes remain explicit.                 ║
 * ║                                                                                                      ║
 * ║  Source discrepancies preserved, not silently corrected: Table 1 prints ΔY(W)=2.270 although        ║
 * ║  Eq. (1) gives ≈0.270; Expression (4)'s prose radius definition conflicts with Table 1's rt value.  ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 *
 * Production metadata source (identity/specification fields only):
 * https://www.nikonusa.com/p/af-zoom-nikkor-80-200mm-f28d-ed/1986/overview
 * Historical production/VR context:
 * https://imaging.nikon.com/imaging/information/story/0067/
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-ai-af-zoom-nikkor-80-200-f28d-ed",
  maker: "Nikon",
  name: "NIKON AI AF ZOOM-NIKKOR 80-200mm f/2.8D ED",
  subtitle: "US 5,579,171 A Example 3 — centered prescription; patent G3 stabilization is not production VR",
  specs: [
    "16 ELEMENTS / 11 GROUPS",
    "80-200mm f/2.8 (MARKETED)",
    "80.944-196.000mm (MODELED)",
    "3 ED ELEMENTS (PRODUCTION)",
    "ALL-SPHERICAL PATENT EXAMPLE",
  ],

  focalLengthMarketing: [80, 200],
  focalLengthDesign: [80.943976177, 196.000154274],
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 5,579,171 A",
  patentAuthors: ["Kenzaburo Suzuki", "Masahiro Nakatsuji", "Keiji Moriyama"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1996,
  elementCount: 16,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.43,
      fl: -316.694623,
      glass: "S-TIH6 catalog equivalent (production supplier not established; patent 805254)",
      cemented: "D1",
      role: "G1 front element; first member of the front cemented doublet.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      fl: 145.367398,
      glass: "J-FKH1 catalog equivalent (production supplier not established; patent 498825)",
      cemented: "D1",
      role: "G1 high-Abbe positive member of D1.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      fl: 216.200439,
      glass: "J-FKH1 catalog equivalent (production supplier not established; patent 498825)",
      role: "G1 high-Abbe positive singlet.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.62588,
      vd: 35.7,
      fl: 132.76668,
      glass: "S-TIM1 catalog equivalent (production supplier not established; patent 626357)",
      cemented: "D2",
      role: "G2 variator; first member of D2.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.56384,
      vd: 60.69,
      fl: -51.530893,
      glass: "S-BAL41 catalog equivalent (production supplier not established; patent 564607)",
      cemented: "D2",
      role: "G2 variator; negative member of D2.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.1,
      fl: -56.556908,
      glass: "J-BK7A catalog equivalent (production supplier not established; patent 517641)",
      cemented: "D3",
      role: "G2 variator; negative member of D3.",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.80458,
      vd: 25.5,
      fl: 73.222191,
      glass: "805255 — dense flint class (unmatched exact public coordinate)",
      cemented: "D3",
      role: "G2 variator; positive dense-flint member of D3.",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.93,
      fl: -90.634757,
      glass: "LAC8 catalog equivalent (production supplier not established; patent 713539)",
      role: "G2 rear negative singlet.",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.51835,
      vd: 60.23,
      fl: 121.343398,
      glass: "BALK3 catalog equivalent (production supplier not established; patent 518602)",
      role: "G3 front positive singlet; part of the patent compensator/stabilizing unit.",
    },
    {
      id: 10,
      name: "L10",
      diagramLabel: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.56384,
      vd: 60.69,
      fl: 63.249287,
      glass: "S-BAL41 catalog equivalent (production supplier not established; patent 564607)",
      cemented: "D4",
      role: "G3 positive member of the rear cemented pair.",
    },
    {
      id: 11,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.75692,
      vd: 31.62,
      fl: -77.420847,
      glass: "E-LAF11 catalog equivalent (production supplier not established; patent 757316)",
      cemented: "D4",
      role: "G3 negative member of D4; completes the patent compensator/stabilizing unit.",
    },
    {
      id: 12,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.52,
      fl: 106.888123,
      glass: "J-FKH1 catalog equivalent (production supplier not established; patent 498825)",
      role: "G4 high-Abbe front relay singlet.",
    },
    {
      id: 13,
      name: "L13",
      diagramLabel: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.41,
      fl: 90.007702,
      glass: "N-FK5 catalog equivalent (production supplier not established; patent 487704)",
      cemented: "D5",
      role: "G4 positive member of D5.",
    },
    {
      id: 14,
      name: "L14",
      diagramLabel: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.80458,
      vd: 25.5,
      fl: -371.182464,
      glass: "805255 — dense flint class (unmatched exact public coordinate)",
      cemented: "D5",
      role: "G4 negative dense-flint member of D5.",
    },
    {
      id: 15,
      name: "L15",
      diagramLabel: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 45.0,
      fl: -40.838625,
      glass: "744450 — lanthanum-flint class (unmatched exact public coordinate)",
      role: "G4 negative relay singlet immediately imageward of S3.",
    },
    {
      id: 16,
      name: "L16",
      diagramLabel: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.66755,
      vd: 41.96,
      fl: 89.725388,
      glass: "J-BASF6 catalog equivalent (production supplier not established; patent 668420)",
      role: "G4 final positive relay element.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 106.7776, d: 3.0, nd: 1.80518, elemId: 1, sd: 36.5 },
    { label: "2", R: 74.319, d: 10.3, nd: 1.49782, elemId: 2, sd: 36.5 },
    { label: "3", R: -2628.0539, d: 0.2, nd: 1.0, elemId: 0, sd: 36.5 },
    { label: "4", R: 103.0273, d: 7.2, nd: 1.49782, elemId: 3, sd: 34.5 },
    { label: "5", R: 2353.7795, d: 2.6197, nd: 1.0, elemId: 0, sd: 34.5 },
    { label: "6", R: -661.734, d: 3.9, nd: 1.62588, elemId: 4, sd: 21.0 },
    { label: "7", R: -73.993, d: 1.6, nd: 1.56384, elemId: 5, sd: 21.0 },
    { label: "8", R: 48.2142, d: 7.1, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "9", R: -65.9114, d: 1.5, nd: 1.5168, elemId: 6, sd: 19.2 },
    { label: "10", R: 52.925, d: 4.7, nd: 1.80458, elemId: 7, sd: 19.2 },
    { label: "11", R: 500.0781, d: 2.5, nd: 1.0, elemId: 0, sd: 19.2 },
    { label: "12", R: -92.9982, d: 1.6, nd: 1.713, elemId: 8, sd: 19.5 },
    { label: "13", R: 213.3106, d: 26.3473, nd: 1.0, elemId: 0, sd: 19.5 },
    { label: "14", R: 862.0732, d: 4.5, nd: 1.51835, elemId: 9, sd: 21.0 },
    { label: "15", R: -67.7278, d: 0.2, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "16", R: 104.0599, d: 7.5, nd: 1.56384, elemId: 10, sd: 21.0 },
    { label: "17", R: -52.847, d: 1.7, nd: 1.75692, elemId: 11, sd: 21.0 },
    { label: "18", R: -545.6405, d: 17.40616, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "19", R: 50.1843, d: 5.8, nd: 1.49782, elemId: 12, sd: 21.0 },
    { label: "20", R: 848.3647, d: 0.2, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "21", R: 43.1565, d: 6.4, nd: 1.48749, elemId: 13, sd: 20.0 },
    { label: "22", R: 2497.5, d: 1.8, nd: 1.80458, elemId: 14, sd: 20.0 },
    { label: "23", R: 266.663, d: 9.4, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 13.839631 },
    { label: "25", R: 499.7065, d: 1.5, nd: 1.744, elemId: 15, sd: 14.0 },
    { label: "26", R: 28.6057, d: 16.7, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "27", R: 86.0991, d: 3.3, nd: 1.66755, elemId: 16, sd: 16.0 },
    { label: "28", R: -193.7907, d: 65.9844, nd: 1.0, elemId: 0, sd: 16.0 },
  ],

  /* ── All-spherical example ── */
  asph: {},

  /* ── Published zoom-only air spacings; no close-focus reconstruction ── */
  var: {
    "5": [
      [2.6197, 2.6197],
      [42.4205, 42.4205],
    ],
    "13": [
      [26.3473, 26.3473],
      [1.9032, 1.9032],
    ],
    "18": [
      [17.40616, 17.40616],
      [2.04936, 2.04936],
    ],
    "28": [
      [65.9844, 65.9844],
      [65.9845, 65.9845],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["13", "D13"],
    ["18", "D18"],
    ["28", "BF"],
  ],

  zoomPositions: [80.94, 196.0],
  zoomLabels: ["Wide", "Tele"],

  /* ── Patent functional units and cemented pairs ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-)", fromSurface: "6", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "14", toSurface: "18" },
    { text: "G4 (+)", fromSurface: "19", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
    { text: "D4", fromSurface: "16", toSurface: "18" },
    { text: "D5", fromSurface: "21", toSurface: "23" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.5,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: US 5,579,171 A Example 3 publishes only infinity-focus zoom states. " +
    "The 1.5 m value is Nikon's production MFD metadata; no internal close-focus spacings are invented.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 9,

  /* ── Geometry/render validation override ── */
  gapSagFrac: 0.97,

  /* ── Layout ── */
  yScFill: 0.52,
} satisfies LensDataInput;

export default LENS_DATA;
