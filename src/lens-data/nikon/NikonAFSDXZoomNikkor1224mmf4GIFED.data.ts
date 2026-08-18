import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-S DX ZOOM-NIKKOR 12-24mm f/4 G IF-ED              ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 6,940,655 B2, Example 1 (Haruo Sato / Nikon).           ║
 * ║ Two-group negative-lead super-wide-angle zoom; 11 glass elements in      ║
 * ║ 7 air-separated groups, plus one 0.1 mm bonded optical-resin layer.      ║
 * ║ Five aspherical surfaces occur on three lens components.                  ║
 * ║                                                                            ║
 * ║ Scaling: none. Patent dimensions and coefficients are preserved.          ║
 * ║ Design EFL is 12.300023-23.300055 mm; marketed focal length is 12-24 mm. ║
 * ║                                                                            ║
 * ║ Zoom variable gaps: D8 and BF. D8 brackets the G1/G2 separation; BF       ║
 * ║ moves the complete lens relative to the fixed image plane. G1 reverses    ║
 * ║ direction between the middle and tele positions, so all three patent      ║
 * ║ zoom positions are retained.                                               ║
 * ║                                                                            ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. Only the L21 cemented doublet    ║
 * ║ moves for focus. The 0.30 m focal-plane close state was solved in code     ║
 * ║ at each zoom position with D8 + D11 conserved and BF fixed.                ║
 * ║                                                                            ║
 * ║ Stop: patent surface 12. No physical stop diameter is published. The       ║
 * ║ authored STO semi-diameter is the exact wide/infinity base opening for     ║
 * ║ nominal f/4.1; runtime zoom stop openings are derived from nominalFno.     ║
 * ║                                                                            ║
 * ║ Semi-diameters: L1 uses the published full effective aperture Phi =        ║
 * ║ 43.65 mm. Other SDs are inferred from exact-Snell axial marginal rays,     ║
 * ║ full-field chief rays, 0.6-field rendered bundles, the patent section,     ║
 * ║ and current geometry constraints. The published L1 aperture intentionally  ║
 * ║ clips the formal stop-centered chief ray at the extreme wide field; the    ║
 * ║ 0.6-field rendered bundles remain contained.                               ║
 * ║ The 2026-07-29 figure pass enlarged surfaces 3/4 and 7/8; the high-        ║
 * ║ curvature 5/6A boundary remains smaller because the housing outline is     ║
 * ║ outside its valid optical/edge-thickness domain.                            ║
 * ║                                                                            ║
 * ║ Spectral data: Example 1 publishes nd and nu_d only. nC, nF, ng, and       ║
 * ║ dPgF are therefore not authored. Patent code 498825 is mapped to the       ║
 * ║ current Hikari J-FKH1 coordinate successor, and L1 uses coefficient-backed ║
 * ║ Hoya M-NBF1 as a catalog equivalent; other unresolved rows retain          ║
 * ║ code-class or explicit Unmatched labels.                                    ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-s-dx-zoom-nikkor-12-24mm-f4g-if-ed",
  maker: "Nikon",
  name: "NIKON AF-S DX ZOOM-NIKKOR 12-24mm f/4 G IF-ED",
  subtitle: "US 6,940,655 B2 Example 1 — Haruo Sato / Nikon Corporation",
  specs: [
    "11 GLASS ELEMENTS / 7 GROUPS",
    "12.3000-23.3001 mm DESIGN",
    "f/4.1 DESIGN",
    "2ω = 102.4°-64.9°",
    "5 ASPHERICAL SURFACES / 2 ED ELEMENTS",
  ],

  focalLengthMarketing: [12, 24],
  focalLengthDesign: [12.30002324, 23.30005486],
  apertureMarketing: 4,
  apertureDesign: 4.1,
  lensMounts: ["nikon-f"],
  imageFormat: "aps-c",
  patentNumber: "US 6,940,655 B2",
  patentAuthors: ["Haruo Sato"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2005,
  elementCount: 11,
  groupCount: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.744429,
      vd: 49.55,
      fl: -35.736802,
      glass: "M-NBF1 (Hoya catalog equivalent; patent code 744496, supplier unspecified)",
      apd: false,
      role: "Front double-aspherical meniscus and principal negative member of the first zoom group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.58144,
      vd: 40.75,
      fl: 89.656209,
      glass: "581408 — optical-glass class (vendor unresolved)",
      apd: false,
      role: "Positive glass member of the bonded hybrid component in G1.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.61,
      fl: -16.616518,
      glass: "773496 — lanthanum-flint class (vendor unresolved)",
      apd: false,
      role: "Negative glass member of the bonded hybrid component in G1.",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L3r",
      label: "Bonded Resin Layer",
      type: "Hybrid Resin Layer (1× Asph)",
      nd: 1.55389,
      vd: 38.09,
      fl: 2917.766448,
      glass: "Unmatched (hybrid aspherical optical resin; nd=1.553890, vd=38.09)",
      apd: false,
      role: "0.1 mm bonded resin layer supplying the outer hybrid asphere with little paraxial power.",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.51,
      fl: 40.239236,
      glass: "755275 — dense-flint class (vendor unresolved)",
      apd: false,
      role: "Positive meniscus completing the negative first zoom group.",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.741,
      vd: 52.67,
      fl: -52.1635,
      glass: "741527 — lanthanum-crown class (vendor unresolved)",
      apd: false,
      role: "Negative member of the translating L21 internal-focus doublet.",
      cemented: "L21",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.54814,
      vd: 45.79,
      fl: 25.877081,
      glass: "548458 — light-flint class (vendor unresolved)",
      apd: false,
      role: "Positive member of the translating L21 internal-focus doublet.",
      cemented: "L21",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus (ED)",
      nd: 1.49782,
      vd: 82.52,
      fl: 24.068893,
      glass: "J-FKH1 (Hikari; patent code 498825)",
      apd: false,
      role: "Low-dispersion positive member of the L22 cemented component.",
      cemented: "L22",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.58,
      fl: -29.956559,
      glass: "804466 — lanthanum-flint class (vendor unresolved)",
      apd: false,
      role: "High-index negative member of the L22 cemented component.",
      cemented: "L22",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.8044,
      vd: 39.59,
      fl: -25.651152,
      glass: "804396 — dense-lanthanum-flint class (vendor unresolved)",
      apd: false,
      role: "High-index negative member of the L23 cemented component.",
      cemented: "L23",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (ED)",
      nd: 1.49782,
      vd: 82.52,
      fl: 18.589564,
      glass: "J-FKH1 (Hikari; patent code 498825)",
      apd: false,
      role: "Low-dispersion positive member of the L23 cemented component.",
      cemented: "L23",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.60602,
      vd: 57.44,
      fl: -240.469845,
      glass: "Unmatched (606574 class; nd=1.606020, vd=57.44)",
      apd: false,
      role: "Rear double-aspherical negative meniscus used for residual off-axis correction.",
    },
  ],

  surfaces: [
    { label: "1A", R: 78.0922, d: 2, nd: 1.744429, elemId: 1, sd: 21.825 },
    { label: "2A", R: 19.6266, d: 16.65, nd: 1, elemId: 0, sd: 21.825 },
    { label: "3", R: 242.6225, d: 5, nd: 1.58144, elemId: 2, sd: 17.0 },
    { label: "4", R: -65.8923, d: 1.5, nd: 1.7725, elemId: 3, sd: 17.0 },
    { label: "5", R: 16.1, d: 0.1, nd: 1.55389, elemId: 4, sd: 10.6 },
    { label: "6A", R: 16.226, d: 4.8, nd: 1, elemId: 0, sd: 10.6 },
    { label: "7", R: 23.3293, d: 4, nd: 1.7552, elemId: 5, sd: 12.7 },
    { label: "8", R: 93.0176, d: 25.95663, nd: 1, elemId: 0, sd: 12.7 },
    { label: "9", R: 30.6806, d: 0.9, nd: 1.741, elemId: 6, sd: 7.1 },
    { label: "10", R: 16.8907, d: 3, nd: 1.54814, elemId: 7, sd: 7.1 },
    { label: "11", R: -82.9562, d: 3.43377, nd: 1, elemId: 0, sd: 7.1 },
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 5.30516307 },
    { label: "13", R: -4845.7452, d: 9, nd: 1.49782, elemId: 8, sd: 7.2 },
    { label: "14", R: -11.9598, d: 1.35, nd: 1.804, elemId: 9, sd: 7.4 },
    { label: "15", R: -24.9515, d: 6.95, nd: 1, elemId: 0, sd: 7.8 },
    { label: "16", R: 774.8986, d: 0.9, nd: 1.8044, elemId: 10, sd: 8.4 },
    { label: "17", R: 20.0882, d: 6.5, nd: 1.49782, elemId: 11, sd: 8.6 },
    { label: "18", R: -15.3138, d: 1, nd: 1, elemId: 0, sd: 9 },
    { label: "19A", R: -19.8294, d: 2, nd: 1.60602, elemId: 12, sd: 9 },
    { label: "20A", R: -23.8261, d: 37.99664, nd: 1, elemId: 0, sd: 9.3 },
  ],

  asph: {
    "1A": {
      K: -14.9624,
      A4: 7.0386e-7,
      A6: 1.2342e-10,
      A8: 2.3507e-13,
      A10: 4.7875e-16,
      A12: 1.3662e-19,
      A14: 0,
    },
    "2A": {
      K: -1.6055,
      A3: 2.6968e-5,
      A4: -4.777e-6,
      A6: -3.1245e-9,
      A8: 1.2368e-12,
      A10: 3.3971e-15,
      A12: 1.6057e-17,
      A14: 4.1171e-21,
    },
    "6A": {
      K: -0.6586,
      A3: 2.5582e-5,
      A4: 3.6794e-5,
      A6: -6.9701e-8,
      A8: 7.1618e-10,
      A10: -3.182e-12,
      A12: 1.9011e-17,
      A14: 3.2012e-18,
    },
    "19A": {
      K: 0.4732,
      A3: 3.7935e-6,
      A4: -3.8764e-6,
      A6: -6.0202e-8,
      A8: -9.0241e-10,
      A10: -1.9062e-12,
      A12: 0,
      A14: 0,
    },
    "20A": {
      K: -0.3597,
      A3: -8.1158e-7,
      A4: -1.9195e-6,
      A6: -7.6231e-8,
      A8: -3.7054e-10,
      A10: -4.0392e-12,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "8": [
      [25.95663, 27.883027712],
      [9.88203, 11.61805161],
      [1.99178, 3.807014059],
    ],
    "11": [
      [3.43377, 1.507372288],
      [3.43377, 1.69774839],
      [3.43377, 1.618535941],
    ],
    "20A": [
      [37.99664, 37.99664],
      [48.43207, 48.43207],
      [58.13521, 58.13521],
    ],
  },

  varLabels: [
    ["8", "D8 — G1/G2 + focus"],
    ["11", "D11 — L21 focus"],
    ["20A", "BF"],
  ],

  zoomPositions: [12.3, 18, 23.3],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1 (-)", fromSurface: "1A", toSurface: "8" },
    { text: "G2 (+)", fromSurface: "9", toSurface: "20A" },
  ],

  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "6A" },
    { text: "L21 / IF", fromSurface: "9", toSurface: "11" },
    { text: "L22", fromSurface: "13", toSurface: "15" },
    { text: "L23", fromSurface: "16", toSurface: "18" },
  ],

  closeFocusM: 0.3,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: Nikon internal focusing by the L21 cemented doublet only. " +
    "The 0.30 m focal-plane close state is code-solved at 12.3, 18.0, and 23.3 mm with " +
    "D8 + D11 conserved and BF/image plane fixed.",

  nominalFno: 4.1,
  fstopSeries: [4, 5.6, 8, 11, 16],
  apertureBlades: 7,

  scFill: 0.56,
  yScFill: 0.52,
} satisfies LensDataInput;

export default LENS_DATA;
