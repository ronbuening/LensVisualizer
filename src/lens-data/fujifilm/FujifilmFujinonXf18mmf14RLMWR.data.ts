import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║ NOTE ON REAR PLATE: patent Table 1 surfaces 26-27 (optical member  ║
 * ║ PP, filters / cover glass: 2.8500 mm, nd 1.51680, vd 64.20) and    ║
 * ║ the 1.1000 mm air gap to Sim are modeled in `rearPlates` (traced,  ║
 * ║ not drawn). Surface 25 keeps the patent's 8.4141 mm gap to PP.     ║
 * ║                                                                    ║
 * ║ NOTE ON APERTURE: the patent publishes the stop position but not   ║
 * ║ its diameter. The stop radius is derived from the design f-number  ║
 * ║ (published infinity FNo=1.44); it is not a source-published        ║
 * ║ diaphragm size.                                                    ║
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
  schema: 2,
  key: "fujifilm-fujinon-xf-18mm-f14-r-lm-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 18mm f/1.4 R LM WR",
  subtitle: "US 2022/0011542 A1 Example 1 — strong production correlation, not manufacturer-confirmed",

  catalog: {
    lensMounts: ["fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "15 ELEMENTS / 9 GROUPS",
      "18 mm MARKETING / 17.8993 mm MODELED EFL",
      "F/1.44 DESIGN",
      "5 ASPHERICAL SURFACES",
    ],
    elementCount: 15,
    groupCount: 9,
    focalLengthMm: { marketing: 18, design: 17.8992579 },
    fNumber: { marketing: 1.4, design: 1.44 },
  },

  source: {
    patentNumber: "US 2022/0011542 A1",
    patentYear: 2022,
    authors: ["Hiroki Saito"],
    assignees: ["Fujifilm Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      indexReference: "d",
      focalLengthMm: -38.308592,
      glass: "583595 — crown class (supplier unresolved)",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Biconcave Negative",
      nd: 1.58313,
      vd: 59.46,
      indexReference: "d",
      focalLengthMm: -26.85294,
      glass: "583595 — crown class (supplier unresolved)",
      diagramLabel: "L12",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Biconvex Positive",
      nd: 1.8919,
      vd: 37.13,
      indexReference: "d",
      focalLengthMm: 17.366941,
      glass: "892371 — high-index lanthanum-flint class (supplier unresolved)",
      diagramLabel: "L13",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L14",
      label: "Element L14",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.42,
      indexReference: "d",
      focalLengthMm: -55.636034,
      glass: "487704 — low-dispersion crown class (supplier unresolved)",
      diagramLabel: "L14",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L15",
      label: "Element L15",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.46,
      indexReference: "d",
      focalLengthMm: 62.746684,
      glass: "583595 — crown class (supplier unresolved)",
      diagramLabel: "L15",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L16",
      label: "Element L16",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.43,
      indexReference: "d",
      focalLengthMm: -26.37527,
      glass: "001254 — high-index flint class (supplier unresolved)",
      diagramLabel: "L16",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L17",
      label: "Element L17",
      type: "Biconvex Positive",
      nd: 1.95375,
      vd: 32.32,
      indexReference: "d",
      focalLengthMm: 28.619844,
      glass: "954323 — high-index lanthanum class (supplier unresolved)",
      diagramLabel: "L17",
    },
    {
      id: 8,
      name: "L21",
      label: "Element L21",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      indexReference: "d",
      focalLengthMm: 21.077979,
      glass: "593686 — FCD515-compatible ED crown proxy (supplier unresolved)",
      apd: "inferred",
      apdNote:
        "L21 correlates with the ED element in Fujifilm’s published optical construction; the compatible FCD515 curve has positive anomalous partial dispersion. Production correlation only, not a patent APD designation or supplier identity.",
      diagramLabel: "L21",
      cemented: "C3",
    },
    {
      id: 9,
      name: "L22",
      label: "Element L22",
      type: "Plano-Concave Negative",
      nd: 1.85451,
      vd: 25.15,
      indexReference: "d",
      focalLengthMm: -23.171057,
      glass: "855252 — dense-flint class (supplier unresolved)",
      diagramLabel: "L22",
      cemented: "C3",
    },
    {
      id: 10,
      name: "L23",
      label: "Element L23",
      type: "Plano-Convex Positive",
      nd: 1.7725,
      vd: 49.61,
      indexReference: "d",
      focalLengthMm: 20.005178,
      glass: "773496 — high-index moderate-dispersion class (supplier unresolved)",
      diagramLabel: "L23",
      cemented: "C4",
    },
    {
      id: 11,
      name: "L24",
      label: "Element L24",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      indexReference: "d",
      focalLengthMm: -19.572486,
      glass: "855252 — dense-flint class (supplier unresolved)",
      diagramLabel: "L24",
      cemented: "C4",
    },
    {
      id: 12,
      name: "L25",
      label: "Element L25",
      type: "Biconvex Positive",
      nd: 2.00272,
      vd: 19.32,
      indexReference: "d",
      focalLengthMm: 23.149775,
      glass: "003193 — high-index high-dispersion class (supplier unresolved)",
      apd: "inferred",
      apdNote:
        "Compatible E-FDS2 catalog curve gives ΔPgF ≈ +0.034. Inferred high-dispersion APD class, not ED or an identified patent glass supplier.",
      diagramLabel: "L25",
    },
    {
      id: 13,
      name: "L26",
      label: "Element L26",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.8061,
      vd: 40.73,
      indexReference: "d",
      focalLengthMm: -48.731787,
      glass: "806407 — high-index moderate-dispersion class (supplier unresolved)",
      diagramLabel: "L26",
    },
    {
      id: 14,
      name: "L31",
      label: "Element L31",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.46,
      indexReference: "d",
      focalLengthMm: 88.135135,
      glass: "603655 — phosphate-crown class (supplier unresolved)",
      diagramLabel: "L31",
      cemented: "C5",
    },
    {
      id: 15,
      name: "L32",
      label: "Element L32",
      type: "Plano-Concave Negative",
      nd: 1.84667,
      vd: 23.79,
      indexReference: "d",
      focalLengthMm: -73.354081,
      glass: "847238 — dense-flint class (supplier unresolved)",
      diagramLabel: "L32",
      cemented: "C5",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    {
      label: "1A",
      R: 42.5066,
      d: 2.26,
      sd: 14.8,
      medium: 1,
      asphere: {
        K: 2.8510739,
        A4: 8.2101298e-5,
        A6: 5.9588626e-7,
        A8: -1.9480492e-9,
        A10: -1.4919699e-11,
        A12: -2.7147724e-14,
        A14: -2.7227826e-18,
        A16: 1.4994304e-19,
        A5: -9.5739997e-6,
        A7: -3.0455959e-8,
        A9: 4.086445e-10,
        A11: -1.825772e-13,
        A13: 3.4618551e-15,
        A15: -6.6705344e-18,
      },
    },
    {
      label: "2A",
      R: 14.3565,
      d: 11.0287,
      sd: 12.2,
      asphere: {
        K: -5.3296751,
        A4: 3.1069943e-4,
        A6: -9.9029127e-7,
        A8: 5.8171636e-9,
        A10: -1.6321215e-11,
        A12: -2.874621e-13,
        A14: -2.5285882e-15,
        A16: -8.7993111e-21,
        A5: -1.0193003e-5,
        A7: 7.4165898e-9,
        A9: 1.7037688e-10,
        A11: -1.4903567e-12,
        A13: 5.1753338e-14,
        A15: 4.0808858e-17,
      },
    },
    { label: "3", R: -100.1648, d: 1.02, sd: 11.8, medium: 2 },
    { label: "4", R: 18.6299, d: 7.05, sd: 11.7, medium: 3 },
    { label: "5", R: -75.498, d: 0.97, sd: 11.4, medium: 4 },
    { label: "6", R: 42.5062, d: 4.8671, sd: 10.42 },
    {
      label: "7A",
      R: -20.6733,
      d: 3.28,
      sd: 10.42,
      medium: 5,
      asphere: {
        K: -4.0025899,
        A4: -5.978984e-5,
        A6: -1.2393722e-6,
        A8: -3.5102283e-8,
        A10: 3.7344047e-10,
        A12: -6.3260902e-12,
        A14: 7.3073525e-14,
        A16: 9.4036412e-17,
        A5: 4.0272162e-7,
        A7: 3.9428093e-7,
        A9: -2.4364513e-9,
        A11: 3.9820245e-11,
        A13: -2.00734e-13,
        A15: -4.4848603e-15,
      },
    },
    { label: "8", R: -13.9817, d: 1.66, sd: 10.8, medium: 6 },
    { label: "9", R: -31.4975, d: 0.3, sd: 11.8 },
    { label: "10", R: 89.0372, d: 4.11, sd: 12.2, medium: 7 },
    { label: "11", R: -38.477, d: 3.139, sd: 12.25 },
    { label: "STO", R: "flat" },
    { label: "13", R: 28.6629, d: 8.18, sd: 12.25, medium: 8 },
    { label: "14", R: -19.7999, d: 0.91, sd: 12.3, medium: 9 },
    { label: "15", R: "flat", d: 0.4007, sd: 12.35 },
    { label: "16", R: "flat", d: 5.85, sd: 11.9, medium: 10 },
    { label: "17", R: -15.454, d: 1.09, sd: 12.0, medium: 11 },
    { label: "18", R: -209.9846, d: 0.1389, sd: 13.1 },
    { label: "19", R: 45.3596, d: 4.16, sd: 13.35, medium: 12 },
    { label: "20", R: -45.3596, d: 0.4, sd: 13.35 },
    {
      label: "21A",
      R: 16.1711,
      d: 1.3856,
      sd: 10.9,
      medium: 13,
      asphere: {
        K: -6.0000027,
        A4: -1.5689881e-5,
        A6: -6.92551e-7,
        A8: 1.4122715e-8,
        A10: -7.5590845e-11,
        A12: -9.6603698e-13,
        A14: 1.1107596e-15,
        A16: 7.8465436e-18,
        A5: -6.5802732e-6,
        A7: 1.4479909e-8,
        A9: -3.4964926e-10,
        A11: 6.1173246e-12,
        A13: 7.7251258e-14,
        A15: -3.0214962e-16,
      },
    },
    {
      label: "22A",
      R: 11.0173,
      sd: 9.95,
      asphere: {
        K: -2.4211109,
        A4: 3.006597e-5,
        A6: 3.3138973e-6,
        A8: 2.8105186e-8,
        A10: -1.5417488e-10,
        A12: 1.2815061e-12,
        A14: -2.7371328e-14,
        A16: -2.1499728e-17,
        A5: -1.9431301e-5,
        A7: -4.3716353e-7,
        A9: 1.7441042e-9,
        A11: -2.3068826e-11,
        A13: 2.3110962e-13,
        A15: 1.2010839e-15,
      },
    },
    { label: "23", R: 363.2443, d: 2.28, sd: 9.55, medium: 14 },
    { label: "24", R: -62.1067, d: 0.92, sd: 9.85, medium: 15 },
    // Last surface: patent gap to the parallel plate PP
    { label: "25", R: "flat", d: 8.4141, sd: 10.2 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.2,
    description:
      "Inner focus: G2 (L21–L26) moves 2.50 mm toward the object. The published close state places the object 110 mm ahead of the first surface; the other groups and image plane stay fixed.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published focus spacings ── */
  gaps: { STO: { label: "DD12", values: [[6.58, 4.08]] }, "22A": { label: "DD22", values: [[6.72, 9.22]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.44, fStops: [1.44, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Optical member PP (patent Table 1 surfaces 26–27): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 2.85,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.1,
      source: "US 2022/0011542 A1, Example 1 Table 1 surfaces 26–27",
    },
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

  /* ── Layout tuning ── */
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
