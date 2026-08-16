import type { LensDataInput } from "../../types/optics.js";

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
 * ║  NORMALIZATION: source protective glass FLG (surfaces 1-2) and    ║
 * ║  rear filter FL (surfaces 32-33) are omitted per project scope.    ║
 * ║  The infinity rear air spacing from source surface 31 is set to    ║
 * ║  the exact active-model BFL, 81.9388493955 mm. This includes the   ║
 * ║  rear filter's air-equivalent effect plus a +0.0692839947 mm       ║
 * ║  paraxial refocus caused by removal of the weak-power front FLG.   ║
 * ║  No uniform scaling is applied.                                    ║
 * ║  With the published G2 endpoint retained, the normalized active    ║
 * ║  close state images paraxially at 2.59018 m (vs source 2.59891 m), ║
 * ║  still consistent with Nikon's rounded 2.6 m production MFD.      ║
 * ║                                                                    ║
 * ║  STOP: patent FNO 2.88 and the source pupil trace imply a physical ║
 * ║  stop radius of 18.5734306781 mm. Preserving that stop after FLG   ║
 * ║  removal gives modeled f/2.8815155202, used as nominalFno.         ║
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
  key: "nikon-af-s-nikkor-400mm-f28e-fl-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 400mm f/2.8 E FL ED VR",
  subtitle: "JP 2015-215559 A Example 1 — plate-normalized active prescription",
  specs: [
    "16 ELEMENTS / 12 GROUPS",
    "400 mm MARKETED / 391.497 mm MODELED",
    "f/2.8 MARKETED / f/2.8815 MODELED",
    "FX / 6°10′ MARKETED",
    "INNER FOCUS + VR",
  ],

  focalLengthMarketing: 400,
  focalLengthDesign: 391.49652096721445,
  apertureMarketing: 2.8,
  apertureDesign: 2.8815155201942533,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2015-215559 A",
  patentAuthors: ["Kazumasa Tanaka", "Toshinori Take", "Tetsushi Miwa"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2015,
  elementCount: 16,
  groupCount: 12,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Biconvex Positive",
      nd: 1.43385,
      vd: 95.25,
      fl: 409.94405412430376,
      glass: "Fluorite (CaF2; Malitson 1963 spectral model)",
      nC: 1.4324580077794096,
      nF: 1.437025037791202,
      ng: 1.439485097442597,
      dPgF: 0.055066835746213016,
      role: "Front positive collector; correlated with one of the production lens's two fluorite elements.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.43385,
      vd: 95.25,
      fl: 284.77991442844217,
      glass: "Fluorite (CaF2; Malitson 1963 spectral model)",
      nC: 1.4324580077794096,
      nF: 1.437025037791202,
      ng: 1.439485097442597,
      dPgF: 0.055066835746213016,
      role: "Second front positive collector; correlated with the second production fluorite element.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.61266,
      vd: 44.46,
      fl: -297.8444760054091,
      glass: "J-KZFH1 (HIKARI)",
      nC: 1.608532,
      nF: 1.622313,
      ng: 1.630085,
      dPgF: -0.0058,
      role: "Negative member completing the widely spaced G1a front section.",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Negative Meniscus",
      nd: 1.795,
      vd: 45.31,
      fl: -207.0209098547575,
      glass: "J-LASF017 (HIKARI)",
      nC: 1.789742,
      nF: 1.807287,
      ng: 1.817109,
      dPgF: -0.0085,
      role: "Negative member of the cemented G1b pair.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L15",
      label: "L15",
      type: "Positive Meniscus",
      nd: 1.49782,
      vd: 82.57,
      fl: 97.40047968387346,
      glass: "J-FKH1 (HIKARI)",
      nC: 1.49598,
      nF: 1.502009,
      ng: 1.505256,
      dPgF: 0.0327,
      role: "Positive member of the cemented G1b pair.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L21",
      label: "L21",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      fl: -142.32286563303919,
      glass: "J-LASF016 (HIKARI)",
      nC: 1.767801,
      nF: 1.78337,
      ng: 1.791961,
      dPgF: -0.0093,
      role: "First negative element of the translating G2 inner-focus group.",
    },
    {
      id: 7,
      name: "L22",
      label: "L22",
      type: "Positive Meniscus, concave to object",
      nd: 1.84666,
      vd: 23.8,
      fl: 147.527422636628,
      glass: "J-SF03 (HIKARI)",
      nC: 1.836505,
      nF: 1.872084,
      ng: 1.894197,
      dPgF: 0.0171,
      role: "Positive member of the cemented pair within G2.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.51823,
      vd: 58.82,
      fl: -70.66396388837562,
      glass: "J-K3 (HIKARI)",
      nC: 1.515551,
      nF: 1.524362,
      ng: 1.529163,
      dPgF: -0.0008,
      role: "Rear negative member of the cemented pair within G2.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.31,
      fl: 75.62712951511162,
      glass: "J-FK5 (HIKARI)",
      nC: 1.485343,
      nF: 1.492276,
      ng: 1.495944,
      dPgF: 0.0027,
      role: "Positive first element of fixed G3a behind the stop.",
    },
    {
      id: 10,
      name: "L32",
      label: "L32",
      type: "Negative Meniscus, concave to object",
      nd: 1.84666,
      vd: 23.8,
      fl: -185.34281532651266,
      glass: "J-SF03 (HIKARI)",
      nC: 1.836505,
      nF: 1.872084,
      ng: 1.894197,
      dPgF: 0.0171,
      role: "Negative second element of fixed G3a.",
    },
    {
      id: 11,
      name: "L33",
      label: "L33",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 113.57026027067997,
      glass: "J-SF03 (HIKARI)",
      nC: 1.836505,
      nF: 1.872084,
      ng: 1.894197,
      dPgF: 0.0171,
      role: "Positive member of the cemented pair in the transverse VR group G3b.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L34",
      label: "L34",
      type: "Biconcave Negative",
      nd: 1.59319,
      vd: 67.9,
      fl: -60.81676903285356,
      glass: "J-PSKH1 (HIKARI)",
      nC: 1.59054,
      nF: 1.599276,
      ng: 1.604028,
      dPgF: 0.0135,
      role: "Negative member of the cemented pair in the transverse VR group G3b.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L35",
      label: "L35",
      type: "Biconcave Negative",
      nd: 1.755,
      vd: 52.34,
      fl: -106.45202232337849,
      glass: "J-LASKH2 (HIKARI)",
      nC: 1.750628,
      nF: 1.765054,
      ng: 1.772953,
      dPgF: -0.009,
      role: "Rear negative element of the transverse VR group G3b.",
    },
    {
      id: 14,
      name: "L36",
      label: "L36",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.62,
      fl: 120.86458886298237,
      glass: "J-LASF016 (HIKARI)",
      nC: 1.767801,
      nF: 1.78337,
      ng: 1.791961,
      dPgF: -0.0093,
      role: "Positive first element of fixed rear group G3c.",
    },
    {
      id: 15,
      name: "L37",
      label: "L37",
      type: "Biconvex Positive",
      nd: 1.64,
      vd: 60.2,
      fl: 90.4284838699475,
      glass: "J-LAK01 (HIKARI)",
      nC: 1.636739,
      nF: 1.647371,
      ng: 1.653088,
      dPgF: -0.0056,
      role: "Positive member of the final cemented pair in G3c.",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L38",
      label: "L38",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      fl: -190.8750201528777,
      glass: "J-SF03 (HIKARI)",
      nC: 1.836505,
      nF: 1.872084,
      ng: 1.894197,
      dPgF: 0.0171,
      role: "Negative member of the final cemented pair in G3c.",
      cemented: "D4",
    },
  ],

  surfaces: [
    { label: "3", R: 208.5821, d: 17.5, nd: 1.43385, elemId: 1, sd: 76.2 },
    { label: "4", R: -1176.6338, d: 45, nd: 1, elemId: 0, sd: 76.2 },
    { label: "5", R: 180.4147, d: 18, nd: 1.43385, elemId: 2, sd: 63 },
    { label: "6", R: -380.1711, d: 3, nd: 1, elemId: 0, sd: 63 },
    { label: "7", R: -348.9527, d: 6, nd: 1.61266, elemId: 3, sd: 61 },
    { label: "8", R: 384.9936, d: 90, nd: 1, elemId: 0, sd: 58 },
    { label: "9", R: 67.5463, d: 4, nd: 1.795, elemId: 4, sd: 34.5 },
    { label: "10", R: 46.6351, d: 15, nd: 1.49782, elemId: 5, sd: 32.5 },
    { label: "11", R: 1089.9704, d: 19.53, nd: 1, elemId: 0, sd: 31.5 },
    { label: "12", R: -1616.0869, d: 2.5, nd: 1.7725, elemId: 6, sd: 24 },
    { label: "13", R: 118.0496, d: 3.35, nd: 1, elemId: 0, sd: 22.3 },
    { label: "14", R: -285.3999, d: 3.5, nd: 1.84666, elemId: 7, sd: 22.3 },
    { label: "15", R: -87.3702, d: 2.4, nd: 1.51823, elemId: 8, sd: 22.3 },
    { label: "16", R: 63.6357, d: 36.219, nd: 1, elemId: 0, sd: 21.5 },
    { label: "STO", R: 1e15, d: 2, nd: 1, elemId: 0, sd: 18.573430678140678 },
    { label: "18", R: 84.6009, d: 8, nd: 1.48749, elemId: 9, sd: 19.5 },
    { label: "19", R: -63.3175, d: 0.6, nd: 1, elemId: 0, sd: 19.4 },
    { label: "20", R: -66.2548, d: 1.9, nd: 1.84666, elemId: 10, sd: 19.3 },
    { label: "21", R: -116.1778, d: 5, nd: 1, elemId: 0, sd: 19.3 },
    { label: "22", R: 433.7902, d: 3.5, nd: 1.84666, elemId: 11, sd: 18.5 },
    { label: "23", R: -123.0826, d: 1.9, nd: 1.59319, elemId: 12, sd: 18.3 },
    { label: "24", R: 51.3275, d: 3.6, nd: 1, elemId: 0, sd: 16.6 },
    { label: "25", R: -293.431, d: 1.9, nd: 1.755, elemId: 13, sd: 16.5 },
    { label: "26", R: 110.9976, d: 4, nd: 1, elemId: 0, sd: 16.5 },
    { label: "27", R: 130.226, d: 3.5, nd: 1.7725, elemId: 14, sd: 16.5 },
    { label: "28", R: -326.0207, d: 0.1, nd: 1, elemId: 0, sd: 16.5 },
    { label: "29", R: 67.6197, d: 4.5, nd: 1.64, elemId: 15, sd: 16.5 },
    { label: "30", R: -391.1361, d: 1.9, nd: 1.84666, elemId: 16, sd: 16.4 },
    { label: "31", R: 276.0025, d: 81.93884939554965, nd: 1, elemId: 0, sd: 16.3 },
  ],

  asph: {},

  var: {
    "11": [19.53, 34.93],
    "16": [36.219, 20.82],
    "31": [81.93884939554965, 81.96284939554965],
  },
  varLabels: [
    ["11", "D11"],
    ["16", "D16"],
    ["31", "BF ADJ"],
  ],

  groups: [
    { text: "G1a", fromSurface: "3", toSurface: "8" },
    { text: "G1b", fromSurface: "9", toSurface: "11" },
    { text: "G2 FOCUS", fromSurface: "12", toSurface: "16" },
    { text: "G3a", fromSurface: "18", toSurface: "21" },
    { text: "G3b VR", fromSurface: "22", toSurface: "26" },
    { text: "G3c", fromSurface: "27", toSurface: "31" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
    { text: "D3", fromSurface: "22", toSurface: "24" },
    { text: "D4", fromSurface: "29", toSurface: "31" },
  ],

  closeFocusM: 2.6,
  focusDescription:
    "PUBLISHED: G2 moves 15.400 mm imageward from infinity to the patent close-focus state (β = −0.173). " +
    "The source also increases Bf by 0.024 mm; after omitting FLG and rear FL this is preserved as a 0.024 mm " +
    "rear-spacing adjustment, not a second moving lens group. The normalized active close state paraxially images at " +
    "2.59018 m; no internal focus travel is reconstructed.",

  nominalFno: 2.8815155201942533,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 9,

  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
