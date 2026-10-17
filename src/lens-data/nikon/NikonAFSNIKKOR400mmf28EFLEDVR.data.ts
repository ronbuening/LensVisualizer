import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 400mm f/2.8 E FL ED VR             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Patent: JP 2015-215559 A, Example 1.                              ║
 * ║  Product correlation: Nikon AF-S NIKKOR 400mm f/2.8E FL ED VR.    ║
 * ║  16 active elements / 12 air-separated groups; all spherical.      ║
 * ║                                                                    ║
 * ║  FOCUS STATUS: PUBLISHED.                                          ║
 * ║  G2 translates imageward by 15.400 mm from infinity to the         ║
 * ║  published close-focus state. The source also changes Bf by        ║
 * ║  +0.024 mm. This file preserves that endpoint as a +0.024 mm       ║
 * ║  rear-spacing adjustment; it is not modeled as a second moving     ║
 * ║  lens group.                                                       ║
 * ║                                                                    ║
 * ║  NORMALIZATION: source protective glass FLG (surfaces 1-2) is      ║
 * ║  omitted per project scope. The rear filter FL (surfaces 32-33,    ║
 * ║  2.00 mm, nd 1.51680, νd 63.88) is drawn as a plane-parallel plate ║
 * ║  element and traced by every analysis, with the printed Bf         ║
 * ║  71.551 mm to the image; its semi-diameter is a ray-trace estimate ║
 * ║  (the source lists none) and it is not counted in `elementCount`.  ║
 * ║  Surface 31 stores the printed 9.00 mm gap to FL plus a            ║
 * ║  +0.0692839947 mm paraxial refocus caused by removal of the        ║
 * ║  weak-power front FLG: 9.0692839947 mm. Physical track from        ║
 * ║  source surface 3 = 391.019 mm (patent TL 396.95 minus FLG's       ║
 * ║  6.00 mm, plus the refocus).                                       ║
 * ║  No uniform scaling is applied.                                    ║
 * ║  With the published G2 endpoint retained, the normalized active    ║
 * ║  close state images paraxially at 2.59086 m (vs source 2.59891 m), ║
 * ║  still consistent with Nikon's rounded 2.6 m production MFD.      ║
 * ║                                                                    ║
 * ║  STOP: nominalFNumber retains the modeled f/2.8815155202 obtained  ║
 * ║  by preserving the patent FNO 2.88 pupil calibration after FLG     ║
 * ║  removal. The stop radius is derived from the design f-number.     ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: not published. SDs are inferred from exact        ║
 * ║  marginal/chief-ray envelopes at infinity and the published close  ║
 * ║  state, checked against Fig. 1 silhouette, edge thickness, rim     ║
 * ║  slope, shared-band cross-gap intrusion, and off-axis containment. ║
 * ║  The tight rear aperture is placed at the air boundary after L34; ║
 * ║  representative default bundles do not clip at cemented junctions. ║
 * ║                                                                    ║
 * ║  SPECTRAL DATA: exact HIKARI catalog matches use HIKARI nC/nF/ng  ║
 * ║  and ΔPg,F values. L11/L12 retain the patent nd/vd and use the     ║
 * ║  Malitson CaF2 Sellmeier model for supplemental C/F/g indices;     ║
 * ║  that model implies vd≈94.996 versus patent 95.25 and is therefore ║
 * ║  documented as spectral augmentation, not a replacement for the   ║
 * ║  patent prescription.                                              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-af-s-nikkor-400mm-f28e-fl-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 400mm f/2.8 E FL ED VR",
  subtitle: "JP 2015-215559 A Example 1 — FLG omitted; rear filter FL drawn",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "16 ELEMENTS / 12 GROUPS",
      "2 FLUORITE + 2 ED",
      "400 mm MARKETED / 391.497 mm MODELED",
      "f/2.8 MARKETED / f/2.8815 MODELED",
      "FX / 6°10′ MARKETED",
      "INNER FOCUS + VR",
    ],
    elementCount: 16,
    groupCount: 12,
    acceptsTeleconverters: true, // Nikon lists this lens as compatible with the AF-S TC-20E III
    focalLengthMm: { marketing: 400, design: 391.49652096721445 },
    fNumber: { marketing: 2.8, design: 2.8815155201942533 },
  },

  source: {
    patentNumber: "JP 2015-215559 A",
    patentYear: 2015,
    authors: ["Kazumasa Tanaka", "Toshinori Take", "Satoshi Miwa"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 — Fluorite",
      type: "Biconvex Positive",
      nd: 1.43385,
      vd: 95.25,
      focalLengthMm: 409.94405412430376,
      glass: "Fluorite (CaF2; Malitson 1963 spectral model)",
      apd: "inferred",
      apdNote: "Fluorite assignment from Nikon's two-fluorite production specification and this patent coordinate.",
      role: "Front positive collector; correlated with one of the production lens's two fluorite elements.",
      dPgF: 0.055066835746213016,
      nC: 1.4324580077794096,
      nF: 1.437025037791202,
      ng: 1.439485097442597,
    },
    {
      id: 2,
      name: "L12",
      label: "L12 — Fluorite",
      type: "Biconvex Positive",
      nd: 1.43385,
      vd: 95.25,
      focalLengthMm: 284.77991442844217,
      glass: "Fluorite (CaF2; Malitson 1963 spectral model)",
      apd: "inferred",
      apdNote: "Fluorite assignment from Nikon's two-fluorite production specification and this patent coordinate.",
      role: "Second front positive collector; correlated with the second production fluorite element.",
      dPgF: 0.055066835746213016,
      nC: 1.4324580077794096,
      nF: 1.437025037791202,
      ng: 1.439485097442597,
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.61266,
      vd: 44.46,
      focalLengthMm: -297.8444760054091,
      glass: "J-KZFH1 (HIKARI)",
      role: "Negative member completing the widely spaced G1a front section.",
      dPgF: -0.0058,
      nC: 1.608532,
      nF: 1.622313,
      ng: 1.630085,
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Negative Meniscus",
      nd: 1.795,
      vd: 45.31,
      focalLengthMm: -207.0209098547575,
      glass: "J-LASF017 (HIKARI)",
      role: "Negative member of the cemented G1b pair.",
      cemented: "D1",
      dPgF: -0.0085,
      nC: 1.789742,
      nF: 1.807287,
      ng: 1.817109,
    },
    {
      id: 5,
      name: "L15",
      label: "L15 — ED class",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      focalLengthMm: 97.40047968387346,
      glass: "J-FKH1 (HIKARI)",
      apd: "inferred",
      apdNote: "ED assignment inferred from Nikon's two-ED production specification and the patent's 498826 class.",
      role: "Positive member of the cemented G1b pair.",
      cemented: "D1",
      dPgF: 0.0327,
      nC: 1.49598,
      nF: 1.502009,
      ng: 1.505256,
    },
    {
      id: 6,
      name: "L21",
      label: "L21",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: -142.32286563303919,
      glass: "J-LASF016 (HIKARI)",
      role: "First negative element of the translating G2 inner-focus group.",
      dPgF: -0.0093,
      nC: 1.767801,
      nF: 1.78337,
      ng: 1.791961,
    },
    {
      id: 7,
      name: "L22",
      label: "L22",
      type: "Positive Meniscus, concave to object",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 147.527422636628,
      glass: "J-SF03 (HIKARI)",
      role: "Positive member of the cemented pair within G2.",
      cemented: "D2",
      dPgF: 0.0171,
      nC: 1.836505,
      nF: 1.872084,
      ng: 1.894197,
    },
    {
      id: 8,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.51823,
      vd: 58.82,
      focalLengthMm: -70.66396388837562,
      glass: "J-K3 (HIKARI)",
      role: "Rear negative member of the cemented pair within G2.",
      cemented: "D2",
      dPgF: -0.0008,
      nC: 1.515551,
      nF: 1.524362,
      ng: 1.529163,
    },
    {
      id: 9,
      name: "L31",
      label: "L31 — ED class",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.31,
      focalLengthMm: 75.62712951511162,
      glass: "J-FK5 (HIKARI)",
      apd: "inferred",
      apdNote:
        "ED assignment inferred from Nikon's two-ED production specification and the patent's low-dispersion class.",
      role: "Positive first element of fixed G3a behind the stop.",
      dPgF: 0.0027,
      nC: 1.485343,
      nF: 1.492276,
      ng: 1.495944,
    },
    {
      id: 10,
      name: "L32",
      label: "L32",
      type: "Negative Meniscus, concave to object",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -185.34281532651266,
      glass: "J-SF03 (HIKARI)",
      role: "Negative second element of fixed G3a.",
      dPgF: 0.0171,
      nC: 1.836505,
      nF: 1.872084,
      ng: 1.894197,
    },
    {
      id: 11,
      name: "L33",
      label: "L33",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 113.57026027067997,
      glass: "J-SF03 (HIKARI)",
      role: "Positive member of the cemented pair in the transverse VR group G3b.",
      cemented: "D3",
      dPgF: 0.0171,
      nC: 1.836505,
      nF: 1.872084,
      ng: 1.894197,
    },
    {
      id: 12,
      name: "L34",
      label: "L34",
      type: "Biconcave Negative",
      nd: 1.59319,
      vd: 67.9,
      focalLengthMm: -60.81676903285356,
      glass: "J-PSKH1 (HIKARI)",
      role: "Negative member of the cemented pair in the transverse VR group G3b.",
      cemented: "D3",
      dPgF: 0.0135,
      nC: 1.59054,
      nF: 1.599276,
      ng: 1.604028,
    },
    {
      id: 13,
      name: "L35",
      label: "L35",
      type: "Biconcave Negative",
      nd: 1.755,
      vd: 52.34,
      focalLengthMm: -106.45202232337849,
      glass: "J-LASKH2 (HIKARI)",
      role: "Rear negative element of the transverse VR group G3b.",
      dPgF: -0.009,
      nC: 1.750628,
      nF: 1.765054,
      ng: 1.772953,
    },
    {
      id: 14,
      name: "L36",
      label: "L36",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: 120.86458886298237,
      glass: "J-LASF016 (HIKARI)",
      role: "Positive first element of fixed rear group G3c.",
      dPgF: -0.0093,
      nC: 1.767801,
      nF: 1.78337,
      ng: 1.791961,
    },
    {
      id: 15,
      name: "L37",
      label: "L37",
      type: "Biconvex Positive",
      nd: 1.64,
      vd: 60.2,
      focalLengthMm: 90.4284838699475,
      glass: "J-LAK01 (HIKARI)",
      role: "Positive member of the final cemented pair in G3c.",
      cemented: "D4",
      dPgF: -0.0056,
      nC: 1.636739,
      nF: 1.647371,
      ng: 1.653088,
    },
    {
      id: 16,
      name: "L38",
      label: "L38",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -190.8750201528777,
      glass: "J-SF03 (HIKARI)",
      role: "Negative member of the final cemented pair in G3c.",
      cemented: "D4",
      dPgF: 0.0171,
      nC: 1.836505,
      nF: 1.872084,
      ng: 1.894197,
    },
    {
      id: 17,
      name: "FL",
      label: "Slip-in filter FL",
      type: "Plane-Parallel Plate",
      nd: 1.5168,
      vd: 63.88,
      glass: "J-BK7",
      role: "Plane-parallel filter plate of the patent prescription (JP 2015-215559 A, Example 1 Table 1 surfaces 32–33), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter is a ray-trace estimate; the source lists none. Not counted in elementCount.",
    },
  ],

  surfaces: [
    { label: "3", R: 208.5821, d: 17.5, sd: 76.2, medium: 1 },
    { label: "4", R: -1176.6338, d: 45, sd: 76.2 },
    { label: "5", R: 180.4147, d: 18, sd: 63, medium: 2 },
    { label: "6", R: -380.1711, d: 3, sd: 63 },
    { label: "7", R: -348.9527, d: 6, sd: 61, medium: 3 },
    { label: "8", R: 384.9936, d: 90, sd: 58 },
    { label: "9", R: 67.5463, d: 4, sd: 34.5, medium: 4 },
    { label: "10", R: 46.6351, d: 15, sd: 32.5, medium: 5 },
    { label: "11", R: 1089.9704, sd: 31.5 },
    { label: "12", R: -1616.0869, d: 2.5, sd: 24, medium: 6 },
    { label: "13", R: 118.0496, d: 3.35, sd: 22.3 },
    { label: "14", R: -285.3999, d: 3.5, sd: 22.3, medium: 7 },
    { label: "15", R: -87.3702, d: 2.4, sd: 22.3, medium: 8 },
    { label: "16", R: 63.6357, sd: 21.5 },
    { label: "STO", R: "flat", d: 2 },
    { label: "18", R: 84.6009, d: 8, sd: 19.5, medium: 9 },
    { label: "19", R: -63.3175, d: 0.6, sd: 19.4 },
    { label: "20", R: -66.2548, d: 1.9, sd: 19.3, medium: 10 },
    { label: "21", R: -116.1778, d: 5, sd: 19.3 },
    { label: "22", R: 433.7902, d: 3.5, sd: 18.5, medium: 11 },
    { label: "23", R: -123.0826, d: 1.9, sd: 18.3, medium: 12 },
    { label: "24", R: 51.3275, d: 3.6, sd: 16.6 },
    { label: "25", R: -293.431, d: 1.9, sd: 16.5, medium: 13 },
    { label: "26", R: 110.9976, d: 4, sd: 16.5 },
    { label: "27", R: 130.226, d: 3.5, sd: 16.5, medium: 14 },
    { label: "28", R: -326.0207, d: 0.1, sd: 16.5 },
    { label: "29", R: 67.6197, d: 4.5, sd: 16.5, medium: 15 },
    { label: "30", R: -391.1361, d: 1.9, sd: 16.4, medium: 16 },
    // Printed 9.00 mm gap to FL + 0.0692839947 mm refocus after omitting FLG
    { label: "31", R: 276.0025, sd: 16.3 },
    // Slip-in filter FL (JP 2015-215559 A, Example 1 Table 1 surfaces 32–33), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    // Gap to the image: Bf 71.551 at infinity; +0.024 close carried in d31
    { label: "32", R: "flat", d: 2.0, sd: 18, medium: 17 },
    { label: "33", R: "flat", d: 71.551, sd: 18 }, // slip-in filter → image plane
  ],

  focus: {
    closeFocusM: 2.6,
    description:
      "PUBLISHED: G2 moves 15.400 mm imageward from infinity to the patent close-focus state (β = −0.173). " +
      "The source also increases Bf by 0.024 mm; this is preserved as a 0.024 mm increase in the gap ahead of the " +
      "rear filter FL, not a second moving lens group. The normalized active close state paraxially images at " +
      "2.59086 m; no internal focus travel is reconstructed.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    "11": { label: "D11", values: [[19.53, 34.93]] },
    "16": { label: "D16", values: [[36.219, 20.82]] },
    "31": { label: "BF ADJ", values: [[9.06928399470577, 9.09328399470577]] },
  },

  aperture: { nominalFNumber: 2.8815155201942533, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "G1a", fromSurface: "3", toSurface: "8" },
    { text: "G1b", fromSurface: "9", toSurface: "11" },
    { text: "G2", fromSurface: "12", toSurface: "16" },
    { text: "G3a", fromSurface: "18", toSurface: "21" },
    { text: "G3b", fromSurface: "22", toSurface: "26" },
    { text: "G3c", fromSurface: "27", toSurface: "31" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
    { text: "D3", fromSurface: "22", toSurface: "24" },
    { text: "D4", fromSurface: "29", toSurface: "31" },
  ],

  layout: { yScFill: 0.38 },
} satisfies LensDataV2Input;

export default LENS_DATA;
