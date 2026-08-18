import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-S DX VR ZOOM-NIKKOR 18-200mm f/3.5-5.6 G IF-ED              ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2006/0072213 A1, Example 2 (Shibayama / Suzuki / Ito; Nikon Corp.).    ║
 * ║ Four moving zoom groups G1(+), G2(-), G3(+), G4(+); G3 = G31(+) + G32(-).        ║
 * ║ G32 is the laterally shifted vibration-reduction cemented pair.                    ║
 * ║ Production count: 16 physical lens elements / 12 air-separated groups.             ║
 * ║ The model has 18 element entries because the bonded resin asphere layers on L21    ║
 * ║ and L34 are optically distinct media; they do not increase elementCount.            ║
 * ║                                                                                      ║
 * ║ ZOOM / FOCUS:                                                                        ║
 * ║   Zoom gaps: D5, D14, D24, BF.                                                       ║
 * ║   Focus: G2 translates objectward; D5 decreases by δ and D14 increases by δ.        ║
 * ║   Focus status: CONSTRAINED_RECONSTRUCTION.                                         ║
 * ║   500.000 mm object-plane→image-plane solved δ (W/M/T):                             ║
 * ║     0.954821883 / 2.944389620 / 9.421757313 mm.                                    ║
 * ║   The US wide focus row prints δ=0.855 mm; that images 547.193 mm and is rejected. ║
 * ║   The US wide Bf row prints 33.04456 mm; 38.04456 mm is used because it is         ║
 * ║   independently traced and reconciles the patent's own Bfw/fw=2.056 condition.      ║
 * ║                                                                                      ║
 * ║ APERTURE / SEMI-DIAMETERS:                                                          ║
 * ║   The patent gives no physical stop diameter. STO sd=7.34 mm is inferred from the  ║
 * ║   three patent FNO states (independent inferred radii 7.327–7.364 mm).               ║
 * ║   nominalFno stores the exact paraxial F/# produced by this fixed modeled stop.      ║
 * ║   General surface SDs are not published. Figure-5 proportions refine values inferred ║
 * ║   on-axis marginal, 0.6-field fan, and full-field chief rays at W/M/T, at infinity ║
 * ║   and the reconstructed 0.5 m focus state, then checked for edge thickness, actual  ║
 * ║   rim slope, conic domain, shared-gap intrusion, and render-trim geometry.           ║
 * ║   Surface 21A retains the patent's 15.0 mm aspheric effective diameter (sd=7.5).    ║
 * ║   That entrance aperture intentionally clips one outer 0.6-field marginal ray in    ║
 * ║   each tested state by at most 0.351 mm; chief rays remain contained.               ║
 * ║                                                                                      ║
 * ║ ASPHERES / SPECTRAL DATA:                                                           ║
 * ║   Patent equation uses sqrt(1-kappa(h/R)^2), so K_standard=kappa-1.                 ║
 * ║   Example 2 has kappa=1 on surfaces 6, 21, 25; therefore K=0 here.                  ║
 * ║   No scaling is applied (s=1).                                                      ║
 * ║   The patent publishes nd and νd only; nC, nF, ng, and dPgF are not invented.       ║
 * ║                                                                                      ║
 * ║ Production metadata sources:                                                       ║
 * ║   https://www.nikonusa.com/p/af-s-dx-vr-zoom-nikkor-18-200mm-f35-56g-if-ed/2159/overview ║
 * ║   https://imaging.nikon.com/imaging/information/story/0082/                         ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-af-s-dx-vr-zoom-nikkor-18-200-f35-56g-if-ed",
  maker: "Nikon",
  name: "NIKON AF-S DX VR ZOOM-NIKKOR 18-200mm f/3.5-5.6 G IF-ED",
  subtitle: "US 2006/0072213 A1 Example 2 — constrained 0.5 m focus reconstruction",
  specs: [
    "16 PHYSICAL ELEMENTS / 12 GROUPS",
    "18-200mm marketed; 18.50109-194.99580mm patent control points",
    "f/3.5-5.6 marketed; f/3.57-5.81 patent FNO",
    "2ω = 77.44° / 21.91° / 8.10°",
    "3 ASPHERICAL PHYSICAL ELEMENTS",
    "G32 LATERAL VR GROUP",
  ],

  focalLengthMarketing: [18, 200],
  focalLengthDesign: [18.50109, 194.9958],
  apertureMarketing: 3.5,
  apertureDesign: 3.5816638444059583,
  lensMounts: ["nikon-f"],
  imageFormat: "aps-c",
  patentNumber: "US 2006/0072213 A1",
  patentAuthors: ["Atsushi Shibayama", "Takeshi Suzuki", "Tomoki Ito"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2006,
  elementCount: 16,
  groupCount: 12,

  /* ── Elements ──
   * Glass strings intentionally use patent-coordinate classes rather than speculative
   * historical vendor identities. The two resin entries are modeling media, not extra
   * physical lenses. Element focal lengths are isolated d-line values; L21 and L34 fl
   * include their bonded resin layers.
   */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 — Negative Meniscus",
      type: "Negative Meniscus",
      nd: 1.85026,
      vd: 32.35,
      fl: -146.18083810177944,
      glass: "850324 high-index flint class (patent vendor unspecified)",
      role: "Negative member of the front G1 cemented pair.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 — Biconvex Positive",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 113.68243914432492,
      glass: "497816 ED fluorophosphate-crown class (patent vendor unspecified)",
      role: "Positive ED-class member of the front G1 cemented pair.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 — Positive Meniscus",
      type: "Positive Meniscus",
      nd: 1.603,
      vd: 65.47,
      fl: 122.8911748287602,
      glass: "603655 crown class (patent coordinate; catalog near-match)",
      role: "Rear positive member of G1.",
    },
    {
      id: 4,
      name: "L21r",
      label: "L21r — Bonded Aspheric Resin Layer",
      type: "Aspheric Resin Layer",
      nd: 1.55389,
      vd: 38.09,
      glass: "Unmatched (optical resin layer; patent nd=1.553890, νd=38.09)",
      role: "Modeling entry for the thin bonded resin layer carrying surface 6A; not an additional physical lens.",
      cemented: "H21",
    },
    {
      id: 5,
      name: "L21",
      label: "L21 — Negative Meniscus Hybrid",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.63,
      fl: -19.32487370902931,
      glass: "816466 high-index crown class (patent vendor unspecified)",
      role: "Front negative element of G2; isolated fl includes the bonded L21r resin layer.",
      cemented: "H21",
    },
    {
      id: 6,
      name: "L22",
      label: "L22 — Biconcave Negative",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.63,
      fl: -26.797663373842827,
      glass: "816466 high-index crown class (patent vendor unspecified)",
      role: "Second negative element of G2.",
    },
    {
      id: 7,
      name: "L23",
      label: "L23 — Biconvex Positive",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 21.015050772614494,
      glass: "847238 dense-flint class (patent vendor unspecified)",
      role: "Strong positive high-dispersion member of G2.",
    },
    {
      id: 8,
      name: "L24",
      label: "L24 — Negative Meniscus",
      type: "Negative Meniscus",
      nd: 1.788,
      vd: 47.38,
      fl: -41.191618412189015,
      glass: "788474 lanthanum-crown class (patent vendor unspecified)",
      role: "Rear negative element of the focusing group G2.",
    },
    {
      id: 9,
      name: "L31",
      label: "L31 — Biconvex Positive",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.47,
      fl: 34.13193101433785,
      glass: "603655 crown class (patent coordinate; catalog near-match)",
      role: "Front positive element of G31.",
    },
    {
      id: 10,
      name: "L32",
      label: "L32 — Biconvex Positive",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 29.46074574283314,
      glass: "497816 ED fluorophosphate-crown class (patent vendor unspecified)",
      role: "ED-class positive member of the G31 cemented pair.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L33",
      label: "L33 — Plano-Concave Negative",
      type: "Plano-Concave Negative",
      nd: 1.85026,
      vd: 32.35,
      fl: -36.87930750593936,
      glass: "850324 high-index flint class (patent vendor unspecified)",
      role: "Negative member of the G31 cemented pair; surface 20 is its active planar exit.",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L34r",
      label: "L34r — Bonded Aspheric Resin Layer",
      type: "Aspheric Resin Layer",
      nd: 1.55389,
      vd: 38.09,
      glass: "Unmatched (optical resin layer; patent nd=1.553890, νd=38.09)",
      role: "Modeling entry for the thin bonded resin layer carrying surface 21A; not an additional physical lens.",
      cemented: "H34",
    },
    {
      id: 13,
      name: "L34",
      label: "L34 — Biconcave Negative Hybrid",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.61,
      fl: -23.816870346596026,
      glass: "773496 lanthanum-crown class (patent vendor unspecified)",
      role: "Negative member of the laterally shifted G32 VR pair; isolated fl includes the bonded L34r layer.",
      cemented: "G32",
    },
    {
      id: 14,
      name: "L35",
      label: "L35 — Positive Meniscus",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.43,
      fl: 58.79591565641994,
      glass: "805254 dense-flint class (patent vendor unspecified)",
      role: "Positive member of the cemented G32 vibration-reduction pair.",
      cemented: "G32",
    },
    {
      id: 15,
      name: "L41",
      label: "L41 — Biconvex Positive Asphere",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.676974,
      vd: 54.52,
      fl: 34.48504606676342,
      glass: "Unmatched (nd=1.676974, νd=54.52; no exact checked current-catalog match)",
      role: "Front positive aspheric element of G4.",
    },
    {
      id: 16,
      name: "L42",
      label: "L42 — Biconvex Positive",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.24,
      fl: 52.32052897777725,
      glass: "487702 fluor-crown class (patent vendor unspecified)",
      role: "Positive member of the G4 cemented pair.",
      cemented: "D4",
    },
    {
      id: 17,
      name: "L43",
      label: "L43 — Biconcave Negative",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.17,
      fl: -24.977517570128857,
      glass: "834372 lanthanum-flint class (patent vendor unspecified)",
      role: "Negative member of the G4 cemented pair.",
      cemented: "D4",
    },
    {
      id: 18,
      name: "L44",
      label: "L44 — Positive Meniscus",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.12,
      fl: 70.03422604005291,
      glass: "517641 BK7-class crown (patent vendor unspecified)",
      role: "Rear positive meniscus of G4.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 134.2298, d: 2.0, nd: 1.85026, elemId: 1, sd: 30.0 },
    { label: "2", R: 64.093, d: 8.8, nd: 1.497, elemId: 2, sd: 29.5 },
    { label: "3", R: -455.1922, d: 0.1, nd: 1.0, elemId: 0, sd: 29.2 },
    { label: "4", R: 59.0442, d: 6.3, nd: 1.603, elemId: 3, sd: 28.6 },
    { label: "5", R: 278.8837, d: 2.07, nd: 1.0, elemId: 0, sd: 28.4 },
    { label: "6A", R: 169.6714, d: 0.15, nd: 1.55389, elemId: 4, sd: 15.0 },
    { label: "7", R: 116.5468, d: 1.2, nd: 1.816, elemId: 5, sd: 15.0 },
    { label: "8", R: 14.1945, d: 5.6, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "9", R: -50.0283, d: 1.0, nd: 1.816, elemId: 6, sd: 9.8 },
    { label: "10", R: 39.1951, d: 0.1, nd: 1.0, elemId: 0, sd: 9.7 },
    { label: "11", R: 27.2138, d: 4.8, nd: 1.84666, elemId: 7, sd: 10.5 },
    { label: "12", R: -47.239, d: 0.9, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "13", R: -26.4293, d: 1.0, nd: 1.788, elemId: 8, sd: 9.5 },
    { label: "14", R: -144.6464, d: 29.4, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "STO", R: 1e15, d: 0.5, nd: 1.0, elemId: 0, sd: 7.34 },
    { label: "16", R: 40.5909, d: 3.0, nd: 1.603, elemId: 9, sd: 8.2 },
    { label: "17", R: -40.5909, d: 0.1, nd: 1.0, elemId: 0, sd: 8.3 },
    { label: "18", R: 26.4211, d: 3.6, nd: 1.497, elemId: 10, sd: 8.4 },
    { label: "19", R: -31.357, d: 1.0, nd: 1.85026, elemId: 11, sd: 8.4 },
    { label: "20", R: 1e15, d: 3.0, nd: 1.0, elemId: 0, sd: 8.3 },
    { label: "21A", R: -48.0486, d: 0.1, nd: 1.55389, elemId: 12, sd: 7.5 },
    { label: "22", R: -50.9404, d: 1.0, nd: 1.7725, elemId: 13, sd: 7.5 },
    { label: "23", R: 29.81, d: 1.8, nd: 1.80518, elemId: 14, sd: 8.3 },
    { label: "24", R: 78.3305, d: 10.1, nd: 1.0, elemId: 0, sd: 8.4 },
    { label: "25A", R: 80.0866, d: 4.4, nd: 1.676974, elemId: 15, sd: 10.1 },
    { label: "26", R: -32.2199, d: 0.6, nd: 1.0, elemId: 0, sd: 10.3 },
    { label: "27", R: 119.1591, d: 4.0, nd: 1.48749, elemId: 16, sd: 10.1 },
    { label: "28", R: -32.095, d: 1.4, nd: 1.834, elemId: 17, sd: 9.9 },
    { label: "29", R: 60.5341, d: 1.5, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "30", R: -119.5799, d: 3.3, nd: 1.5168, elemId: 18, sd: 9.9 },
    { label: "31", R: -28.0454, d: 38.04456, nd: 1.0, elemId: 0, sd: 10.1 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "6A": {
      K: 0,
      A4: 1.0079e-5,
      A6: -4.1758e-8,
      A8: 1.3686e-10,
      A10: -2.1874e-13,
      A12: 0,
      A14: 0,
    },
    "21A": {
      K: 0,
      A4: 9.6662e-6,
      A6: 3.2925e-9,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "25A": {
      K: 0,
      A4: -1.9472e-5,
      A6: 2.7502e-9,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Zoom + focus variable spacings ── */
  var: {
    "5": [
      [2.07, 1.1151781169482802],
      [38.0, 35.05561037975988],
      [60.0, 50.578242686535745],
    ],
    "14": [
      [29.4, 30.35482188305172],
      [11.0, 13.94438962024012],
      [1.8, 11.22175731346426],
    ],
    "24": [
      [10.1, 10.1],
      [4.6, 4.6],
      [3.0, 3.0],
    ],
    "31": [
      [38.04456, 38.04456],
      [67.30022, 67.30022],
      [79.17192, 79.17192],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["14", "D14"],
    ["24", "D24"],
    ["31", "BF"],
  ],

  zoomPositions: [18.50109, 70.58244, 194.9958],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-) / FOCUS", fromSurface: "6A", toSurface: "14" },
    { text: "G3 (+)", fromSurface: "16", toSurface: "24" },
    { text: "G4 (+)", fromSurface: "25A", toSurface: "31" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H21", fromSurface: "6A", toSurface: "8" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
    { text: "G32 VR", fromSurface: "21A", toSurface: "24" },
    { text: "D4", fromSurface: "27", toSurface: "29" },
  ],

  closeFocusM: 0.5,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: G2 translates toward the object while D5 decreases and D14 increases by the same δ at a fixed image plane. The 500.000 mm object-plane-to-image-plane states use solved δ = 0.954821883 / 2.944389620 / 9.421757313 mm at W/M/T. The US wide row prints 0.855 mm, which images 547.193 mm; M/T agree with 500 mm to source precision.",

  nominalFno: [3.5816638444059583, 5.0811697605592, 5.809460935611039],
  fstopSeries: [3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 7,

  scFill: 0.5,
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
