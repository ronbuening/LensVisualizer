import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — PENTAX-02 STANDARD ZOOM 5-15mm f/2.8-4.5                  ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 8,824,059 B2, Example 1 / Numerical Embodiment 1.           ║
 * ║ Production correlation: PENTAX-02 STANDARD ZOOM, without scaling.       ║
 * ║ Patent physical count: 8 elements / 7 air-separated physical groups.    ║
 * ║ The elements array has 9 material entries because the L11 hybrid lens   ║
 * ║ is modeled as its glass substrate plus its bonded compound-resin layer.  ║
 * ║                                                                          ║
 * ║ Zoom: patent infinity-focus d7 and d9 are retained at f = 5.14, 10.00, ║
 * ║ and 14.83 mm. G1 and G2 reverse slightly between the intermediate and   ║
 * ║ tele states; STO moves integrally with G3.                               ║
 * ║                                                                          ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent specifies L21/G2   ║
 * ║ as the sole focusing group and imageward motion from infinity to finite ║
 * ║ focus, but publishes no finite-focus spacing table. The close pairs      ║
 * ║ below were re-solved from this normalized active prescription to the     ║
 * ║ manufacturer's 0.3 m MFD, with G1/G3/image fixed and d7+d9 conserved.   ║
 * ║ Tele close-focus magnification is 0.057765x, consistent with the         ║
 * ║ manufacturer's rounded approximately 0.06x specification.               ║
 * ║                                                                          ║
 * ║ Rear normalization: patent OP and CG plane plates (surfaces 18-21) are  ║
 * ║ excluded. Surface 17A d is the air-equivalent distance from the final   ║
 * ║ powered surface to the same source-defined image plane:                  ║
 * ║   d17 + 0.500/1.51633 + 0.620 + 0.500/1.51633 + 0.530.                 ║
 * ║ Source rounding leaves <= 0.006 mm residual against the powered BFL.    ║
 * ║                                                                          ║
 * ║ Stop: the patent publishes the stop plane but not its diameter. STO.sd  ║
 * ║ is the inferred wide-state physical semi-diameter. Variable-aperture     ║
 * ║ nominalFno values reproduce the patent design FNO 2.8 / 3.7 / 4.6.     ║
 * ║                                                                          ║
 * ║ Semi-diameters: not patent-published. They were derived by exact         ║
 * ║ spherical/aspherical tracing over all three zoom states at infinity and ║
 * ║ constrained close focus, using on-axis marginal rays, the default 0.60  ║
 * ║ field bundle, and the full-field chief ray, then given conservative      ║
 * ║ clearance. Geometry was checked for positive edge thickness, actual rim ║
 * ║ slope, conic domain, cross-gap intrusion, and ray containment.           ║
 * ║                                                                          ║
 * ║ Glass: nd/vd remain the patent d-line values. Generic six-digit classes ║
 * ║ are used only where the coordinate pair is defensible across catalogs;  ║
 * ║ three active glasses and the resin remain explicitly Unmatched. No       ║
 * ║ nC/nF/ng/dPgF fields are authored because the patent supplies none and  ║
 * ║ the generic/unmatched labels do not justify vendor-specific line data.   ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-02-standard-zoom-5-15-f28-45",
  maker: "Pentax",
  name: "PENTAX-02 STANDARD ZOOM 5-15mm f/2.8-4.5",
  subtitle: "US 8,824,059 B2 Example 1 — production correlation; constrained finite-focus reconstruction",
  specs: [
    "8 ELEMENTS / 7 PHYSICAL GROUPS",
    "MARKETED 5-15mm f/2.8-4.5",
    "DESIGN f = 5.139-14.825 mm; FNO = 2.8 / 3.7 / 4.6",
    "5 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: [5, 15],
  focalLengthDesign: [5.1393252305906, 14.824615381962191],
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["pentax-q"],
  imageFormat: "1/1.7-inch-type",
  patentNumber: "US 8,824,059 B2",
  patentAuthors: ["Koji Kato", "Masakazu Saori"],
  patentAssignees: ["Pentax Ricoh Imaging Company, Ltd."],
  patentYear: 2014,
  elementCount: 8,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11G",
      diagramLabel: "L11g",
      label: "L11 glass substrate",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -51.66940375752023,
      glass: "773496 class",
      cemented: "H1",
    },
    {
      id: 2,
      name: "L11R",
      diagramLabel: "L11r",
      label: "L11 compound-resin layer",
      type: "Hybrid Resin Layer (1x Asph)",
      nd: 1.52972,
      vd: 42.7,
      fl: -109.30428770135437,
      glass: "Unmatched (compound resin, nd=1.52972, vd=42.7)",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L12",
      diagramLabel: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      fl: -35.52908006707872,
      glass: "804465 class",
    },
    {
      id: 4,
      name: "L13",
      diagramLabel: "L13",
      label: "L13",
      type: "Negative Meniscus",
      nd: 1.7493,
      vd: 51.1,
      fl: -15.603799407675325,
      glass: "Unmatched (nd=1.74930, vd=51.1)",
    },
    {
      id: 5,
      name: "L21",
      diagramLabel: "L21",
      label: "L21 / G2 focus group",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: 32.910129193744936,
      glass: "847238 class",
    },
    {
      id: 6,
      name: "L31",
      diagramLabel: "L31",
      label: "L31",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.49283,
      vd: 82.7,
      fl: 14.11818149759749,
      glass: "Unmatched (nd=1.49283, vd=82.7)",
    },
    {
      id: 7,
      name: "L32",
      diagramLabel: "L32",
      label: "L32",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 15.396276930458113,
      glass: "497816 class",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L33",
      diagramLabel: "L33",
      label: "L33",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.3,
      fl: -6.8857622023142,
      glass: "834373 class",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L34",
      diagramLabel: "L34",
      label: "L34",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.51885,
      vd: 65.8,
      fl: 15.6218048602841,
      glass: "Unmatched (nd=1.51885, vd=65.8)",
    },
  ],

  /* ── Surfaces: patent 1-17; OP and CG removed, rear spacing normalized ── */
  surfaces: [
    { label: "1", R: 35.132, d: 1.637, nd: 1.7725, elemId: 1, sd: 10.4 },
    { label: "2", R: 18.306, d: 0.2, nd: 1.52972, elemId: 2, sd: 9 },
    { label: "3A", R: 13.856, d: 1.2, nd: 1, elemId: 0, sd: 8.8 },
    { label: "4", R: 24.439, d: 1.2, nd: 1.8042, elemId: 3, sd: 8.5 },
    { label: "5", R: 12.884, d: 2.273, nd: 1, elemId: 0, sd: 7.4 },
    { label: "6", R: 88.391, d: 1.2, nd: 1.7493, elemId: 4, sd: 7.1 },
    { label: "7", R: 10.266, d: 6.822, nd: 1, elemId: 0, sd: 6.2 },
    { label: "8", R: 20.063, d: 2.343, nd: 1.84666, elemId: 5, sd: 5.9 },
    { label: "9", R: 67.827, d: 22.449, nd: 1, elemId: 0, sd: 5.6 },
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 3.470749804133657 },
    { label: "11A", R: 7.723, d: 6.242, nd: 1.49283, elemId: 6, sd: 3.95 },
    { label: "12A", R: -51.491, d: 0.256, nd: 1, elemId: 0, sd: 3.45 },
    { label: "13", R: 15.679, d: 2.216, nd: 1.497, elemId: 7, sd: 3.4 },
    { label: "14", R: -14.245, d: 2.02, nd: 1.834, elemId: 8, sd: 3.2 },
    { label: "15", R: 10.242, d: 0.271, nd: 1, elemId: 0, sd: 3.05 },
    { label: "16A", R: 13.326, d: 2.256, nd: 1.51885, elemId: 9, sd: 3.1 },
    { label: "17A", R: -19.493, d: 11.073487050971753, nd: 1, elemId: 0, sd: 3.15 },
  ],

  asph: {
    "3A": {
      K: 0,
      A4: -8.45e-5,
      A6: -5.227e-7,
      A8: 1.614e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 0,
      A4: -6.956e-5,
      A6: -1.346e-6,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: 0,
      A4: 3.684e-4,
      A6: -7.856e-6,
      A8: 2.109e-7,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: 5.583e-4,
      A6: -1.339e-5,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "17A": {
      K: 0,
      A4: 6.541e-4,
      A6: 7.907e-6,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom and constrained focus ── */
  zoomPositions: [5.14, 10, 14.83],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "7": [
      [6.822, 7.136863975883002],
      [5.367, 5.690537392886773],
      [5.091, 5.420879615045256],
    ],
    "9": [
      [22.449, 22.134136024117],
      [6.704, 6.380462607113227],
      [1.333, 1.0031203849547445],
    ],
    "17A": [
      [11.073487050971753, 11.073487050971753],
      [17.057487050971755, 17.057487050971755],
      [22.798487050971758, 22.798487050971758],
    ],
  },
  varLabels: [
    ["7", "D7 (ZOOM + FOCUS)"],
    ["9", "D9 (ZOOM + FOCUS)"],
    ["17A", "BF (OP/CG-NORM)"],
  ],
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: L21/G2 alone moves imageward from infinity to the manufacturer 0.3 m MFD. " +
    "D7 increases and D9 decreases by equal amounts at each zoom position, preserving their adjacent-gap sum. " +
    "The close pairs were re-solved on the OP/CG-normalized active prescription; the patent publishes the focus " +
    "group and direction but no finite-focus spacing table.",

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (+)", fromSurface: "8", toSurface: "9" },
    { text: "G3 (+)", fromSurface: "11A", toSurface: "17A" },
  ],
  doublets: [
    { text: "H1", fromSurface: "1", toSurface: "3A" },
    { text: "D1", fromSurface: "13", toSurface: "15" },
  ],

  closeFocusM: 0.3,
  nominalFno: [2.8, 3.7, 4.6],
  fstopSeries: [2.8, 4, 5.6, 8],
  apertureBlades: 5,
  maxFstop: 8,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
