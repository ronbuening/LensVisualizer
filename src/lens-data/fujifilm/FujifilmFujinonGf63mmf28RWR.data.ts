import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — FUJIFILM FUJINON GF 63mm f/2.8 R WR                                           ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2017/0242219 A1, Example 1 (FUJIFILM Corporation / Masato Kondo).          ║
 * ║  10 elements / 8 air-separated physical groups; all-spherical prescription.                 ║
 * ║                                                                                              ║
 * ║  Marketing/design separation:                                                               ║
 * ║    Production: 63 mm, f/2.8, 46.9° diagonal angle of view on 43.8 × 32.9 mm, 0.50 m MFD.   ║
 * ║    Patent model: EFL 62.1249821 mm, f/2.87, maximum full field 51.6°.                        ║
 * ║    nominalFno therefore uses the modeled 2.87 value that controls stop/pupil geometry.       ║
 * ║                                                                                              ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION.                                                  ║
 * ║    Patent ¶0054 fixes G1 + STO + G2 as one rigid front-focus assembly moving objectward,     ║
 * ║    with G3 fixed to the image plane, but publishes no close-focus spacing table.             ║
 * ║    Solving the 0.50 m manufacturer MFD gives 12.9074477062 mm front-assembly travel,         ║
 * ║    represented here as D14 = 1.2600 → 14.1674477062 mm. This predicts 0.17119×.             ║
 * ║                                                                                              ║
 * ║  Rear-plane normalization:                                                                  ║
 * ║    Patent PP surfaces S20–S21 are an optional filter/protective plate and are excluded.      ║
 * ║    Their optical effect is folded into S19→IMG as the verified air-equivalent               ║
 * ║    30.0000 + 3.2500/1.51680 + 0.8182 = 32.9608687764 mm.                                   ║
 * ║                                                                                              ║
 * ║  Semi-diameters:                                                                             ║
 * ║    No source SDs are published. The stop radius is reconstructed from the patent f/2.87.     ║
 * ║    Lens-surface SDs use the larger of (a) the on-axis full-stop marginal envelope and        ║
 * ║    (b) exact rays at the production 23.45° diagonal half-field through ±0.75 stop radius,   ║
 * ║    then add 8% clearance and round upward to 0.05 mm. L24 is the mechanical exception:        ║
 * ║    S13/S14 are reduced to 16.90/17.15 mm to retain positive endpoint edge thickness while      ║
 * ║    preserving >0.85 mm full-field representative-ray clearance. The diameter progression      ║
 * ║    also agrees with Fujifilm's official lens-configuration cross-section.                      ║
 * ║                                                                                              ║
 * ║  Glass discipline:                                                                           ║
 * ║    The patent publishes nd/νd only. Six-digit/class labels are used where supplier identity  ║
 * ║    is not source-proven. nC/nF/ng/dPgF are intentionally not authored because the patent     ║
 * ║    does not publish them and most supplier assignments are non-unique. L21 is the ED element ║
 * ║    shown in Fujifilm's official production cross-section; FCD505 is a class-level match.     ║
 * ║                                                                                              ║
 * ║  Scaling: none (s = 1.0).                                                                    ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-fujinon-gf-63mm-f28-r-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON GF 63mm f/2.8 R WR",
  subtitle: "US 2017/0242219 A1 Example 1 — constrained production-focus reconstruction",
  specs: [
    "10 ELEMENTS / 8 GROUPS / 1 ED",
    "63mm marketed / 62.125mm design",
    "f/2.8 marketed / f/2.87 design",
    "46.9° production diagonal angle of view",
    "0.50m MFD / 0.17× max magnification",
  ],

  /* ── Product and patent metadata ── */
  focalLengthMarketing: 63,
  focalLengthDesign: 62.1249820968,
  apertureMarketing: 2.8,
  apertureDesign: 2.87,
  lensMounts: ["fujifilm-g"],
  imageFormat: "44x33",
  patentNumber: "US 2017/0242219 A1",
  patentAuthors: ["Masato Kondo"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2017,
  elementCount: 10,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "L11",
      type: "Positive Meniscus",
      nd: 1.95375,
      vd: 32.32,
      fl: 61.91184,
      glass: "954323 — high-index flint class",
      apd: false,
      role: "Front positive meniscus of G1.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.24,
      fl: 53.685298,
      glass: "487702 — low-dispersion crown class",
      apd: false,
      role: "Second positive meniscus of G1.",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "L13",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.13,
      fl: -26.776688,
      glass: "699301 — dense-flint class",
      apd: false,
      role: "Negative rear meniscus of G1.",
    },
    {
      id: 4,
      name: "L21",
      diagramLabel: "L21",
      label: "L21",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.62,
      fl: 139.997886,
      glass: "593686 — FCD505-class ED crown (supplier unproven)",
      apd: false,
      role: "Object-side member of the L21+L22 cemented pair; production ED element.",
      cemented: "L21+L22",
    },
    {
      id: 5,
      name: "L22",
      diagramLabel: "L22",
      label: "L22",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.31,
      fl: -44.01419,
      glass: "593353 — flint class",
      apd: false,
      role: "Negative cemented partner to L21.",
      cemented: "L21+L22",
    },
    {
      id: 6,
      name: "L23",
      diagramLabel: "L23",
      label: "L23",
      type: "Positive Meniscus",
      nd: 1.788,
      vd: 47.37,
      fl: 86.630579,
      glass: "788474 — lanthanum high-index class",
      apd: false,
      role: "Positive meniscus in G2.",
    },
    {
      id: 7,
      name: "L24",
      diagramLabel: "L24",
      label: "L24",
      type: "Positive Meniscus",
      nd: 1.816,
      vd: 46.62,
      fl: 59.211458,
      glass: "816466 — lanthanum high-index class",
      apd: false,
      role: "Positive rear meniscus of G2.",
    },
    {
      id: 8,
      name: "L31",
      diagramLabel: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.53,
      fl: 50.448806,
      glass: "697555 — lanthanum crown class",
      apd: false,
      role: "Positive object-side member of the fixed G3 cemented pair.",
      cemented: "L31+L32",
    },
    {
      id: 9,
      name: "L32",
      diagramLabel: "L32",
      label: "L32",
      type: "Plano-Concave Negative",
      nd: 1.60342,
      vd: 38.03,
      fl: -69.619834,
      glass: "603380 — F5/TIM5 flint class",
      apd: false,
      role: "Negative plano-concave cemented partner to L31.",
      cemented: "L31+L32",
    },
    {
      id: 10,
      name: "L33",
      diagramLabel: "L33",
      label: "L33",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.14,
      fl: -222.939993,
      glass: "516641 — crown class",
      apd: false,
      role: "Rear negative meniscus of fixed G3.",
    },
  ],

  /* ── Surface prescription: Example 1, PP omitted with air-equivalent BFD normalization ── */
  surfaces: [
    { label: "1", R: 32.3262, d: 4.23, nd: 1.95375, elemId: 1, sd: 18.1 },
    { label: "2", R: 66.8687, d: 0.13, nd: 1.0, elemId: 0, sd: 17.25 },
    { label: "3", R: 21.5069, d: 5.21, nd: 1.48749, elemId: 2, sd: 14.55 },
    { label: "4", R: 111.0969, d: 0.05, nd: 1.0, elemId: 0, sd: 13.45 },
    { label: "5", R: 92.4044, d: 1.6, nd: 1.69895, elemId: 3, sd: 13.15 },
    { label: "6", R: 15.4525, d: 7.908, nd: 1.0, elemId: 0, sd: 10.05 },
    { label: "STO", R: 1e15, d: 10.211, nd: 1.0, elemId: 0, sd: 7.8158748586 },
    { label: "8", R: -18.1789, d: 2.36, nd: 1.59282, elemId: 4, sd: 11.1 },
    { label: "9", R: -15.633, d: 1.05, nd: 1.5927, elemId: 5, sd: 11.85 },
    { label: "10", R: -39.9853, d: 0.68, nd: 1.0, elemId: 0, sd: 14.15 },
    { label: "11", R: -59.5014, d: 2.96, nd: 1.788, elemId: 6, sd: 15.3 },
    { label: "12", R: -32.4883, d: 0.1, nd: 1.0, elemId: 0, sd: 15.95 },
    { label: "13", R: -93.3949, d: 3.65, nd: 1.816, elemId: 7, sd: 16.9 },
    { label: "14", R: -32.4022, d: 1.26, nd: 1.0, elemId: 0, sd: 17.15 },
    { label: "15", R: 200.7689, d: 6.93, nd: 1.6968, elemId: 8, sd: 19.25 },
    { label: "16", R: -42.01, d: 1.47, nd: 1.60342, elemId: 9, sd: 19.45 },
    { label: "17", R: 1e15, d: 4.87, nd: 1.0, elemId: 0, sd: 19.9 },
    { label: "18", R: -85.0921, d: 1.44, nd: 1.51633, elemId: 10, sd: 20.25 },
    { label: "19", R: -328.1791, d: 32.9608687764, nd: 1.0, elemId: 0, sd: 20.8 },
  ],

  asph: {},

  /* ── Focus: constrained one-degree-of-freedom reconstruction ── */
  var: {
    "14": [1.26, 14.1674477062],
  },
  varLabels: [["14", "D14"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "8", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "19" },
  ],
  doublets: [
    { text: "L21+L22", fromSurface: "8", toSurface: "10" },
    { text: "L31+L32", fromSurface: "15", toSurface: "17" },
  ],

  closeFocusM: 0.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION — G1 + STO + G2 translate rigidly toward the object while G3 and the image plane remain fixed; D14 is solved from the 0.50 m MFD as 1.2600 → 14.1674477062 mm (12.9074477062 mm travel), predicting 0.17119×.",

  /* ── Aperture configuration ── */
  nominalFno: 2.87,
  fstopSeries: [2.87, 4, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 9,
  maxFstop: 32,

  /* ── Layout ── */
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
