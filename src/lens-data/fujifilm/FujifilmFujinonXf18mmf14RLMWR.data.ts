import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — FUJIFILM FUJINON XF 18mm f/1.4 R LM WR                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2022/0011542 A1, Example 1 (FUJIFILM / Saito).     ║
 * ║ Strong production correlation; no located FUJIFILM source names    ║
 * ║ this publication as the production-lens patent.                    ║
 * ║ 15 elements / 9 air-separated groups / 5 aspherical surfaces.     ║
 * ║ Focus: PUBLISHED. G2 (L21-L26) translates 2.50 mm objectward;      ║
 * ║ G1, aperture stop, G3, and image plane remain fixed.               ║
 * ║                                                                    ║
 * ║ NOTE ON SCALING: none. Patent f=17.90 mm is used at native scale.  ║
 * ║                                                                    ║
 * ║ NOTE ON REAR PLATE: patent PP surfaces 26-27 represent filters /   ║
 * ║ cover glass and are omitted. Surface 25 d is the documented        ║
 * ║ air-equivalent rear spacing: 8.4141 + 2.8500/1.51680 + 1.1000     ║
 * ║ = 11.3930556962 mm.                                                ║
 * ║                                                                    ║
 * ║ NOTE ON APERTURE: the patent publishes the stop position but not   ║
 * ║ its diameter. STO sd=10.73762 mm is a modeling calibration to the  ║
 * ║ published infinity FNo=1.44 using the verified paraxial entrance   ║
 * ║ pupil magnification. It is not a source-published diaphragm size.  ║
 * ║                                                                    ║
 * ║ NOTE ON SEMI-DIAMETERS: the patent publishes none. SDs below are   ║
 * ║ modeled from exact meridional ray envelopes, the patent optical    ║
 * ║ section, and current geometry constraints. The Stage 2 verifier    ║
 * ║ checks edge thickness, actual aspheric rim slope, conic domain,    ║
 * ║ shared-gap intrusion, and sampled exact-ray containment at the two ║
 * ║ published focus endpoints plus representative intermediate states. ║
 * ║ Real LensVisualizer render diagnostics remain an integration check.║
 * ║                                                                    ║
 * ║ NOTE ON GLASS: the patent publishes d-line nd/vd only and names no ║
 * ║ supplier. Glass strings therefore use neutral six-digit/class      ║
 * ║ labels; catalog candidate line indices are not authored here.      ║
 * ║                                                                    ║
 * ║ SOURCE DISCREPANCY: Table 10 prints condition (10)=44.98, while    ║
 * ║ the printed Table 1 extrema 70.42-25.43 give 44.99. Element vd    ║
 * ║ values remain the Table 1 source values.                            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-fujinon-xf-18mm-f14-r-lm-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 18mm f/1.4 R LM WR",
  subtitle: "US 2022/0011542 A1 Example 1 — strong production correlation, not manufacturer-confirmed",
  specs: [
    "15 ELEMENTS / 9 GROUPS",
    "18 mm MARKETING / 17.8993 mm MODELED EFL",
    "F/1.44 DESIGN",
    "5 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 18,
  focalLengthDesign: 17.8992579,
  apertureMarketing: 1.4,
  apertureDesign: 1.44,
  lensMounts: ["fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "US 2022/0011542 A1",
  patentAuthors: ["Hiroki Saito"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2022,
  elementCount: 15,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element L11",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      indexReference: "d",
      fl: -38.308592,
      glass: "583595 — crown class (supplier unresolved)",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element L12",
      type: "Biconcave Negative",
      nd: 1.58313,
      vd: 59.46,
      indexReference: "d",
      fl: -26.85294,
      glass: "583595 — crown class (supplier unresolved)",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element L13",
      type: "Biconvex Positive",
      nd: 1.8919,
      vd: 37.13,
      indexReference: "d",
      fl: 17.366941,
      glass: "892371 — high-index lanthanum-flint class (supplier unresolved)",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "Element L14",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.42,
      indexReference: "d",
      fl: -55.636034,
      glass: "487704 — low-dispersion crown class (supplier unresolved)",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L15",
      diagramLabel: "L15",
      label: "Element L15",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.46,
      indexReference: "d",
      fl: 62.746684,
      glass: "583595 — crown class (supplier unresolved)",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L16",
      diagramLabel: "L16",
      label: "Element L16",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.43,
      indexReference: "d",
      fl: -26.37527,
      glass: "001254 — high-index flint class (supplier unresolved)",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L17",
      diagramLabel: "L17",
      label: "Element L17",
      type: "Biconvex Positive",
      nd: 1.95375,
      vd: 32.32,
      indexReference: "d",
      fl: 28.619844,
      glass: "954323 — high-index lanthanum class (supplier unresolved)",
    },
    {
      id: 8,
      name: "L21",
      diagramLabel: "L21",
      label: "Element L21",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      indexReference: "d",
      fl: 21.077979,
      glass: "593686 — FCD515-compatible ED crown proxy (supplier unresolved)",
      apd: "inferred",
      apdNote: "L21 correlates with the ED element in Fujifilm’s published optical construction; the compatible FCD515 curve has positive anomalous partial dispersion. Production correlation only, not a patent APD designation or supplier identity.",
      cemented: "C3",
    },
    {
      id: 9,
      name: "L22",
      diagramLabel: "L22",
      label: "Element L22",
      type: "Plano-Concave Negative",
      nd: 1.85451,
      vd: 25.15,
      indexReference: "d",
      fl: -23.171057,
      glass: "855252 — dense-flint class (supplier unresolved)",
      cemented: "C3",
    },
    {
      id: 10,
      name: "L23",
      diagramLabel: "L23",
      label: "Element L23",
      type: "Plano-Convex Positive",
      nd: 1.7725,
      vd: 49.61,
      indexReference: "d",
      fl: 20.005178,
      glass: "773496 — high-index moderate-dispersion class (supplier unresolved)",
      cemented: "C4",
    },
    {
      id: 11,
      name: "L24",
      diagramLabel: "L24",
      label: "Element L24",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      indexReference: "d",
      fl: -19.572486,
      glass: "855252 — dense-flint class (supplier unresolved)",
      cemented: "C4",
    },
    {
      id: 12,
      name: "L25",
      diagramLabel: "L25",
      label: "Element L25",
      type: "Biconvex Positive",
      nd: 2.00272,
      vd: 19.32,
      indexReference: "d",
      fl: 23.149775,
      glass: "003193 — high-index high-dispersion class (supplier unresolved)",
      apd: "inferred",
      apdNote: "Compatible E-FDS2 catalog curve gives ΔPgF ≈ +0.034. Inferred high-dispersion APD class, not ED or an identified patent glass supplier.",
    },
    {
      id: 13,
      name: "L26",
      diagramLabel: "L26",
      label: "Element L26",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.8061,
      vd: 40.73,
      indexReference: "d",
      fl: -48.731787,
      glass: "806407 — high-index moderate-dispersion class (supplier unresolved)",
    },
    {
      id: 14,
      name: "L31",
      diagramLabel: "L31",
      label: "Element L31",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.46,
      indexReference: "d",
      fl: 88.135135,
      glass: "603655 — phosphate-crown class (supplier unresolved)",
      cemented: "C5",
    },
    {
      id: 15,
      name: "L32",
      diagramLabel: "L32",
      label: "Element L32",
      type: "Plano-Concave Negative",
      nd: 1.84667,
      vd: 23.79,
      indexReference: "d",
      fl: -73.354081,
      glass: "847238 — dense-flint class (supplier unresolved)",
      cemented: "C5",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1A", R: 42.5066, d: 2.26, nd: 1.58313, elemId: 1, sd: 14.8 },
    { label: "2A", R: 14.3565, d: 11.0287, nd: 1.0, elemId: 0, sd: 12.2 },
    { label: "3", R: -100.1648, d: 1.02, nd: 1.58313, elemId: 2, sd: 11.8 },
    { label: "4", R: 18.6299, d: 7.05, nd: 1.8919, elemId: 3, sd: 11.7 },
    { label: "5", R: -75.498, d: 0.97, nd: 1.48749, elemId: 4, sd: 11.4 },
    { label: "6", R: 42.5062, d: 4.8671, nd: 1.0, elemId: 0, sd: 10.42 },
    { label: "7A", R: -20.6733, d: 3.28, nd: 1.58313, elemId: 5, sd: 10.42 },
    { label: "8", R: -13.9817, d: 1.66, nd: 2.00069, elemId: 6, sd: 10.8 },
    { label: "9", R: -31.4975, d: 0.3, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "10", R: 89.0372, d: 4.11, nd: 1.95375, elemId: 7, sd: 12.2 },
    { label: "11", R: -38.477, d: 3.139, nd: 1.0, elemId: 0, sd: 12.25 },
    { label: "STO", R: 1e15, d: 6.58, nd: 1.0, elemId: 0, sd: 10.73762 },
    { label: "13", R: 28.6629, d: 8.18, nd: 1.59282, elemId: 8, sd: 12.25 },
    { label: "14", R: -19.7999, d: 0.91, nd: 1.85451, elemId: 9, sd: 12.3 },
    { label: "15", R: 1e15, d: 0.4007, nd: 1.0, elemId: 0, sd: 12.35 },
    { label: "16", R: 1e15, d: 5.85, nd: 1.7725, elemId: 10, sd: 11.9 },
    { label: "17", R: -15.454, d: 1.09, nd: 1.85451, elemId: 11, sd: 12.0 },
    { label: "18", R: -209.9846, d: 0.1389, nd: 1.0, elemId: 0, sd: 13.1 },
    { label: "19", R: 45.3596, d: 4.16, nd: 2.00272, elemId: 12, sd: 13.35 },
    { label: "20", R: -45.3596, d: 0.4, nd: 1.0, elemId: 0, sd: 13.35 },
    { label: "21A", R: 16.1711, d: 1.3856, nd: 1.8061, elemId: 13, sd: 10.9 },
    { label: "22A", R: 11.0173, d: 6.72, nd: 1.0, elemId: 0, sd: 9.95 },
    { label: "23", R: 363.2443, d: 2.28, nd: 1.603, elemId: 14, sd: 9.55 },
    { label: "24", R: -62.1067, d: 0.92, nd: 1.84667, elemId: 15, sd: 9.85 },
    { label: "25", R: 1e15, d: 11.3930556962, nd: 1.0, elemId: 0, sd: 10.2 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "1A": {
      K: 2.8510739,
      A4: 8.2101298e-5,
      A5: -9.5739997e-6,
      A6: 5.9588626e-7,
      A7: -3.0455959e-8,
      A8: -1.9480492e-9,
      A9: 4.086445e-10,
      A10: -1.4919699e-11,
      A11: -1.825772e-13,
      A12: -2.7147724e-14,
      A13: 3.4618551e-15,
      A14: -2.7227826e-18,
      A15: -6.6705344e-18,
      A16: 1.4994304e-19,
    },
    "2A": {
      K: -5.3296751,
      A4: 3.1069943e-4,
      A5: -1.0193003e-5,
      A6: -9.9029127e-7,
      A7: 7.4165898e-9,
      A8: 5.8171636e-9,
      A9: 1.7037688e-10,
      A10: -1.6321215e-11,
      A11: -1.4903567e-12,
      A12: -2.874621e-13,
      A13: 5.1753338e-14,
      A14: -2.5285882e-15,
      A15: 4.0808858e-17,
      A16: -8.7993111e-21,
    },
    "7A": {
      K: -4.0025899,
      A4: -5.978984e-5,
      A5: 4.0272162e-7,
      A6: -1.2393722e-6,
      A7: 3.9428093e-7,
      A8: -3.5102283e-8,
      A9: -2.4364513e-9,
      A10: 3.7344047e-10,
      A11: 3.9820245e-11,
      A12: -6.3260902e-12,
      A13: -2.00734e-13,
      A14: 7.3073525e-14,
      A15: -4.4848603e-15,
      A16: 9.4036412e-17,
    },
    "21A": {
      K: -6.0000027,
      A4: -1.5689881e-5,
      A5: -6.5802732e-6,
      A6: -6.92551e-7,
      A7: 1.4479909e-8,
      A8: 1.4122715e-8,
      A9: -3.4964926e-10,
      A10: -7.5590845e-11,
      A11: 6.1173246e-12,
      A12: -9.6603698e-13,
      A13: 7.7251258e-14,
      A14: 1.1107596e-15,
      A15: -3.0214962e-16,
      A16: 7.8465436e-18,
    },
    "22A": {
      K: -2.4211109,
      A4: 3.006597e-5,
      A5: -1.9431301e-5,
      A6: 3.3138973e-6,
      A7: -4.3716353e-7,
      A8: 2.8105186e-8,
      A9: 1.7441042e-9,
      A10: -1.5417488e-10,
      A11: -2.3068826e-11,
      A12: 1.2815061e-12,
      A13: 2.3110962e-13,
      A14: -2.7371328e-14,
      A15: 1.2010839e-15,
      A16: -2.1499728e-17,
    },
  },

  /* ── Published focus spacings ── */
  var: {
    STO: [6.58, 4.08],
    "22A": [6.72, 9.22],
  },
  varLabels: [
    ["STO", "DD12"],
    ["22A", "DD22"],
  ],

  /* ── Group and cemented-set annotations ── */
  groups: [
    { text: "G1", fromSurface: "1A", toSurface: "11" },
    { text: "G2 FOCUS", fromSurface: "13", toSurface: "22A" },
    { text: "G3", fromSurface: "23", toSurface: "25" },
  ],
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "6" },
    { text: "C2", fromSurface: "7A", toSurface: "9" },
    { text: "C3", fromSurface: "13", toSurface: "15" },
    { text: "C4", fromSurface: "16", toSurface: "18" },
    { text: "C5", fromSurface: "23", toSurface: "25" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.2,
  focusDescription:
    "Inner focus: G2 (L21–L26) moves 2.50 mm toward the object. The published close state places the object 110 mm ahead of the first surface; the other groups and image plane stay fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 1.44,
  fstopSeries: [1.44, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
