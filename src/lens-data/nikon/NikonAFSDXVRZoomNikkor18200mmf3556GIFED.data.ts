import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║   The patent gives no physical stop diameter. The stop radius is derived from the   ║
 * ║   design f-number and held at every zoom station. nominalFNumber stores the exact   ║
 * ║   paraxial F/# from the original fixed-iris calibration against the three patent    ║
 * ║   FNO states (independent inferred radii 7.327–7.364 mm).                           ║
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
  schema: 2,
  key: "nikon-af-s-dx-vr-zoom-nikkor-18-200-f35-56g-if-ed",
  maker: "Nikon",
  name: "NIKON AF-S DX VR ZOOM-NIKKOR 18-200mm f/3.5-5.6 G IF-ED",
  subtitle: "US 2006/0072213 A1 Example 2 — constrained 0.5 m focus reconstruction",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "aps-c",
    specs: [
      "16 PHYSICAL ELEMENTS / 12 GROUPS",
      "18-200mm marketed; 18.50109-194.99580mm patent control points",
      "f/3.5-5.6 marketed; f/3.57-5.81 patent FNO",
      "2ω = 77.44° / 21.91° / 8.10°",
      "3 ASPHERICAL PHYSICAL ELEMENTS",
      "G32 LATERAL VR GROUP",
    ],
    elementCount: 16,
    groupCount: 12,
    focalLengthMm: { marketing: [18, 200], design: [18.50109, 194.9958] },
    fNumber: { marketing: 3.5, design: 3.5816638444059583 },
  },

  source: {
    patentNumber: "US 2006/0072213 A1",
    patentYear: 2006,
    authors: ["Atsushi Shibayama", "Takeshi Suzuki", "Tomoki Ito"],
    assignees: ["Nikon Corporation"],
  },

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
      focalLengthMm: -146.18083810177944,
      glass: "J-LASF021 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Negative member of the front G1 cemented pair.",
      diagramLabel: "1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 — Biconvex Positive",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 113.68243914432492,
      glass: "H-FK61 (CDGM catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Nikon specifies two production ED elements; the patent publishes nd/vd only.",
      role: "Positive ED-class member of the front G1 cemented pair.",
      diagramLabel: "2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 — Positive Meniscus",
      type: "Positive Meniscus",
      nd: 1.603,
      vd: 65.47,
      focalLengthMm: 122.8911748287602,
      glass: "S-PHM53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Rear positive member of G1.",
      diagramLabel: "3",
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
      diagramLabel: "4r",
      cemented: "H21",
    },
    {
      id: 5,
      name: "L21",
      label: "L21 — Negative Meniscus Hybrid",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.63,
      focalLengthMm: -19.32487370902931,
      glass: "J-LASF09A (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Front negative element of G2; isolated fl includes the bonded L21r resin layer.",
      diagramLabel: "4",
      cemented: "H21",
    },
    {
      id: 6,
      name: "L22",
      label: "L22 — Biconcave Negative",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.63,
      focalLengthMm: -26.797663373842827,
      glass: "J-LASF09A (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Second negative element of G2.",
      diagramLabel: "5",
    },
    {
      id: 7,
      name: "L23",
      label: "L23 — Biconvex Positive",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 21.015050772614494,
      glass: "J-SF03 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Strong positive high-dispersion member of G2.",
      diagramLabel: "6",
    },
    {
      id: 8,
      name: "L24",
      label: "L24 — Negative Meniscus",
      type: "Negative Meniscus",
      nd: 1.788,
      vd: 47.38,
      focalLengthMm: -41.191618412189015,
      glass: "J-LASF014 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Rear negative element of the focusing group G2.",
      diagramLabel: "7",
    },
    {
      id: 9,
      name: "L31",
      label: "L31 — Biconvex Positive",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.47,
      focalLengthMm: 34.13193101433785,
      glass: "S-PHM53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Front positive element of G31.",
      diagramLabel: "8",
    },
    {
      id: 10,
      name: "L32",
      label: "L32 — Biconvex Positive",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 29.46074574283314,
      glass: "H-FK61 (CDGM catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote: "Nikon specifies two production ED elements; the patent publishes nd/vd only.",
      role: "ED-class positive member of the G31 cemented pair.",
      diagramLabel: "9",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L33",
      label: "L33 — Plano-Concave Negative",
      type: "Plano-Concave Negative",
      nd: 1.85026,
      vd: 32.35,
      focalLengthMm: -36.87930750593936,
      glass: "J-LASF021 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Negative member of the G31 cemented pair; surface 20 is its active planar exit.",
      diagramLabel: "10",
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
      diagramLabel: "11r",
      cemented: "H34",
    },
    {
      id: 13,
      name: "L34",
      label: "L34 — Biconcave Negative Hybrid",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.61,
      focalLengthMm: -23.816870346596026,
      glass: "J-LASF016 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Negative member of the laterally shifted G32 VR pair; isolated fl includes the bonded L34r layer.",
      diagramLabel: "11",
      cemented: "G32",
    },
    {
      id: 14,
      name: "L35",
      label: "L35 — Positive Meniscus",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.43,
      focalLengthMm: 58.79591565641994,
      glass: "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive member of the cemented G32 vibration-reduction pair.",
      diagramLabel: "12",
      cemented: "G32",
    },
    {
      id: 15,
      name: "L41",
      label: "L41 — Biconvex Positive Asphere",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.676974,
      vd: 54.52,
      focalLengthMm: 34.48504606676342,
      glass: "S-LAL12 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Front positive aspheric element of G4.",
      diagramLabel: "13",
    },
    {
      id: 16,
      name: "L42",
      label: "L42 — Biconvex Positive",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.24,
      focalLengthMm: 52.32052897777725,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive member of the G4 cemented pair.",
      diagramLabel: "14",
      cemented: "D4",
    },
    {
      id: 17,
      name: "L43",
      label: "L43 — Biconcave Negative",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.17,
      focalLengthMm: -24.977517570128857,
      glass: "S-LAH60 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative member of the G4 cemented pair.",
      diagramLabel: "15",
      cemented: "D4",
    },
    {
      id: 18,
      name: "L44",
      label: "L44 — Positive Meniscus",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.12,
      focalLengthMm: 70.03422604005291,
      glass: "N-BK7 (SCHOTT catalog equivalent; production supplier unspecified)",
      role: "Rear positive meniscus of G4.",
      diagramLabel: "16",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 134.2298, d: 2.0, sd: 30.0, medium: 1 },
    { label: "2", R: 64.093, d: 8.8, sd: 29.5, medium: 2 },
    { label: "3", R: -455.1922, d: 0.1, sd: 29.2 },
    { label: "4", R: 59.0442, d: 6.3, sd: 28.6, medium: 3 },
    { label: "5", R: 278.8837, sd: 28.4 },
    {
      label: "6A",
      R: 169.6714,
      d: 0.15,
      sd: 15.0,
      medium: 4,
      asphere: {
        K: 0,
        A4: 1.0079e-5,
        A6: -4.1758e-8,
        A8: 1.3686e-10,
        A10: -2.1874e-13,
      },
    },
    { label: "7", R: 116.5468, d: 1.2, sd: 15.0, medium: 5 },
    { label: "8", R: 14.1945, d: 5.6, sd: 10.0 },
    { label: "9", R: -50.0283, d: 1.0, sd: 9.8, medium: 6 },
    { label: "10", R: 39.1951, d: 0.1, sd: 9.7 },
    { label: "11", R: 27.2138, d: 4.8, sd: 10.5, medium: 7 },
    { label: "12", R: -47.239, d: 0.9, sd: 10.0 },
    { label: "13", R: -26.4293, d: 1.0, sd: 9.5, medium: 8 },
    { label: "14", R: -144.6464, sd: 9.5 },
    { label: "STO", R: "flat", d: 0.5 },
    { label: "16", R: 40.5909, d: 3.0, sd: 8.2, medium: 9 },
    { label: "17", R: -40.5909, d: 0.1, sd: 8.3 },
    { label: "18", R: 26.4211, d: 3.6, sd: 8.4, medium: 10 },
    { label: "19", R: -31.357, d: 1.0, sd: 8.4, medium: 11 },
    { label: "20", R: "flat", d: 3.0, sd: 8.3 },
    {
      label: "21A",
      R: -48.0486,
      d: 0.1,
      sd: 7.5,
      medium: 12,
      asphere: {
        K: 0,
        A4: 9.6662e-6,
        A6: 3.2925e-9,
        A8: 0,
        A10: 0,
      },
    },
    { label: "22", R: -50.9404, d: 1.0, sd: 7.5, medium: 13 },
    { label: "23", R: 29.81, d: 1.8, sd: 8.3, medium: 14 },
    { label: "24", R: 78.3305, sd: 8.4 },
    {
      label: "25A",
      R: 80.0866,
      d: 4.4,
      sd: 10.1,
      medium: 15,
      asphere: {
        K: 0,
        A4: -1.9472e-5,
        A6: 2.7502e-9,
        A8: 0,
        A10: 0,
      },
    },
    { label: "26", R: -32.2199, d: 0.6, sd: 10.3 },
    { label: "27", R: 119.1591, d: 4.0, sd: 10.1, medium: 16 },
    { label: "28", R: -32.095, d: 1.4, sd: 9.9, medium: 17 },
    { label: "29", R: 60.5341, d: 1.5, sd: 9.8 },
    { label: "30", R: -119.5799, d: 3.3, sd: 9.9, medium: 18 },
    { label: "31", R: -28.0454, sd: 10.1 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 18.50109, nominalFNumber: 3.5816638444059583, label: "Wide" },
      { focalLengthMm: 70.58244, nominalFNumber: 5.0811697605592 },
      { focalLengthMm: 194.9958, nominalFNumber: 5.809460935611039, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 0.5,
    description:
      "CONSTRAINED_RECONSTRUCTION: G2 translates toward the object while D5 decreases and D14 increases by the same δ at a fixed image plane. The 500.000 mm object-plane-to-image-plane states use solved δ = 0.954821883 / 2.944389620 / 9.421757313 mm at W/M/T. The US wide row prints 0.855 mm, which images 547.193 mm; M/T agree with 500 mm to source precision.",
  },

  /* (moved from var) ── Zoom + focus variable spacings ── */
  gaps: {
    "5": {
      label: "D5",
      values: [
        [2.07, 1.1151781169482802],
        [38.0, 35.05561037975988],
        [60.0, 50.578242686535745],
      ],
    },
    "14": {
      label: "D14",
      values: [
        [29.4, 30.35482188305172],
        [11.0, 13.94438962024012],
        [1.8, 11.22175731346426],
      ],
    },
    "24": {
      label: "D24",
      values: [
        [10.1, 10.1],
        [4.6, 4.6],
        [3.0, 3.0],
      ],
    },
    "31": {
      label: "BF",
      values: [
        [38.04456, 38.04456],
        [67.30022, 67.30022],
        [79.17192, 79.17192],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

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
    { text: "VR", fromSurface: "21A", toSurface: "24" },
    { text: "D4", fromSurface: "27", toSurface: "29" },
  ],

  layout: { scFill: 0.5, yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
