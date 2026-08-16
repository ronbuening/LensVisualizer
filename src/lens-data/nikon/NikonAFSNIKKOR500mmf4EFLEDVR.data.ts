import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 500mm f/4E FL ED VR                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 2015-215560 A, Example 1 (Nikon Corporation).                 ║
 * ║  Native patent scale; no uniform scaling is applied.                       ║
 * ║  16 active elements / 12 air-separated groups; all surfaces spherical.     ║
 * ║                                                                            ║
 * ║  Focus status: PUBLISHED. G2 translates imageward while d11 + d16 remains  ║
 * ║  50.610 mm. The data endpoints are the patent infinity and near rows.      ║
 * ║  The published intermediate row is reproduced by linear interpolation at   ║
 * ║  focus t = 0.2102460786 (d11 = 17.427, d16 = 33.183 mm).                  ║
 * ║                                                                            ║
 * ║  MODEL NORMALIZATION: patent protective filter glass FLG (surfaces 1–2)    ║
 * ║  is omitted by current LensVisualizer policy. The rear air spacing is      ║
 * ║  therefore normalized from patent Bf = 87.772 mm to 87.868557 mm so the    ║
 * ║  active prescription remains focused at infinity. This changes the active  ║
 * ║  model EFL from the complete patent system's 490.000 mm to 489.459688 mm.  ║
 * ║                                                                            ║
 * ║  STOP: the patent fixes S between G2 and G3. Its semi-diameter is inferred ║
 * ║  from the active-model pupil magnification and patent FNO = 4.122:         ║
 * ║  STO.sd = 18.662373 mm.                                                    ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: inferred from Example-1 Fig. 1, Nikon's production lens   ║
 * ║  construction drawing, the modeled entrance pupil, and paraxial marginal/ ║
 * ║  chief-ray envelopes. They were then reduced where required by the current ║
 * ║  edge-thickness and shared-gap sag constraints. The s13→s14 gap uses a   ║
 * ║  disclosed gapSagFrac = 0.93: at the chosen 22.2 mm shared radius the      ║
 * ║  surfaces retain 0.283 mm of real axial clearance, while passing the       ║
 * ║  independently traced wide-open marginal ray. No mathematical overlap is   ║
 * ║  accepted and no renderer-only trim is used as a geometry substitute.      ║
 * ║                                                                            ║
 * ║  GLASS / SPECTRAL DATA: the patent supplies nd, vd, and rounded theta_gF,  ║
 * ║  not vendor names or full line indices. For exact-coordinate classes,      ║
 * ║  nC/nF/ng/dPgF use current HIKARI catalog analogues as Nikon-group spectral ║
 * ║  proxies; these are not claims that the patent names HIKARI melts. L23     ║
 * ║  remains Unmatched because current J-KZFH4 post-dates the filing, although ║
 * ║  its exact-coordinate line data are retained explicitly as a disclosed     ║
 * ║  spectral proxy. L11/L12 use CaF2 line indices from Malitson's 24 °C       ║
 * ║  dispersion relation.                                                      ║
 * ║                                                                            ║
 * ║  SOURCE DISCREPANCY: Table 1 lists condition (4) as 0.81, but the published║
 * ║  infinity prescription gives f/f12 = 0.742306552. The listed 0.81 is       ║
 * ║  reproduced by substituting the intermediate-focus d11; no data field is   ║
 * ║  altered to force the erroneous tabulated value.                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Product metadata / construction source:
 * https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/telephoto/af-s_500mmf_4e_fl_ed_vr/
 * Nikon launch source:
 * https://www.nikon.com/company/news/2015/0702_lens_01/
 * CaF2 dispersion source: I. H. Malitson, Applied Optics 2 (1963), 1103–1107.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-af-s-nikkor-500mm-f4e-fl-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 500mm f/4 E FL ED VR",
  subtitle: "JP 2015-215560 A Example 1 — FLG omitted; active rear focus normalized",
  specs: [
    "16 ELEMENTS / 12 GROUPS",
    "2 FLUORITE + 3 ED",
    "MODELED f = 489.460 mm",
    "F/4.122",
    "2ω = 5.035°",
  ],

  focalLengthMarketing: 500,
  focalLengthDesign: 489.459688,
  apertureMarketing: 4,
  apertureDesign: 4.122,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2015-215560 A",
  patentAuthors: ["Masafumi Yamashita", "Tetsushi Miwa"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2015,
  elementCount: 16,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 — Fluorite",
      type: "Plano-Convex Positive",
      nd: 1.43385,
      vd: 95.25,
      fl: 459.039299,
      glass: "Calcium fluoride (CaF2 crystal; Nikon-correlated)",
      nC: 1.432457539,
      nF: 1.437026402,
      ng: 1.439487119,
      dPgF: 0.055004227,
      role: "Front positive collector; one of the two production-correlated fluorite elements.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 — Fluorite",
      type: "Biconvex Positive",
      nd: 1.43385,
      vd: 95.25,
      fl: 224.087353,
      glass: "Calcium fluoride (CaF2 crystal; Nikon-correlated)",
      nC: 1.432457539,
      nF: 1.437026402,
      ng: 1.439487119,
      dPgF: 0.055004227,
      role: "Second front-group positive collector; one of the two production-correlated fluorite elements.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.61266,
      vd: 44.46,
      fl: -338.744576,
      glass: "613445 class (HIKARI J-KZFH1 spectral match)",
      nC: 1.608532,
      nF: 1.622313,
      ng: 1.630085,
      dPgF: -0.0058,
      role: "Front-group negative corrector; spectral fields use the exact-coordinate HIKARI catalogue analogue.",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Negative Meniscus, convex to object",
      nd: 1.6968,
      vd: 55.52,
      fl: -161.158073,
      glass: "697555 class (HIKARI J-LAK14 spectral match)",
      nC: 1.692974,
      nF: 1.705525,
      ng: 1.71234,
      dPgF: -0.0082,
      role: "Negative member of the rear G1 cemented pair.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L15",
      label: "L15 — ED class",
      type: "Positive Meniscus, convex to object",
      nd: 1.49782,
      vd: 82.57,
      fl: 109.492952,
      glass: "498826 ED class (HIKARI J-FKH1 spectral match)",
      nC: 1.49598,
      nF: 1.502009,
      ng: 1.505256,
      dPgF: 0.0327,
      role: "Positive cemented partner of L14; one of the three production-correlated ED-class elements.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L21",
      label: "L21",
      type: "Plano-Concave Negative",
      nd: 1.834,
      vd: 37.18,
      fl: -98.58717,
      glass: "834372 class (HIKARI J-LASF010 spectral match)",
      nC: 1.827379,
      nF: 1.849808,
      ng: 1.862767,
      dPgF: -0.0042,
      role: "Leading negative element of the moving G2 internal-focus group.",
    },
    {
      id: 7,
      name: "L22",
      label: "L22",
      type: "Positive Meniscus, concave to object",
      nd: 1.80809,
      vd: 22.74,
      fl: 151.725029,
      glass: "808227 high-dispersion class (HIKARI J-SFH1 spectral match)",
      nC: 1.797989,
      nF: 1.833527,
      ng: 1.855872,
      dPgF: 0.0226,
      role: "Positive high-dispersion member of the moving G2 cemented pair; satisfies patent condition (2).",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L23",
      label: "L23 — Unmatched 553551",
      type: "Plano-Concave Negative",
      nd: 1.55298,
      vd: 55.07,
      fl: -171.288293,
      glass: "Unmatched (553551; current HIKARI J-KZFH4 is a post-filing spectral proxy only)",
      nC: 1.549923,
      nF: 1.559964,
      ng: 1.565433,
      dPgF: -0.0073,
      apd: "inferred",
      apdNote: "Current J-KZFH4 line data are used only as an exact-coordinate spectral proxy; glass identity is not asserted.",
      role: "Negative G2 cemented partner governed by patent conditions (3) and (5).",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L31",
      label: "L31",
      type: "Negative Meniscus, convex to object",
      nd: 1.80809,
      vd: 22.74,
      fl: -115.189996,
      glass: "808227 high-dispersion class (HIKARI J-SFH1 spectral match)",
      nC: 1.797989,
      nF: 1.833527,
      ng: 1.855872,
      dPgF: 0.0226,
      role: "Negative front member of the positive G3a cemented pair.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L32",
      label: "L32 — ED class",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.57,
      fl: 79.685959,
      glass: "498826 ED class (HIKARI J-FKH1 spectral match)",
      nC: 1.49598,
      nF: 1.502009,
      ng: 1.505256,
      dPgF: 0.0327,
      role: "Positive G3a cemented partner; one of the three production-correlated ED-class elements.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L33",
      label: "L33",
      type: "Biconcave Negative",
      nd: 1.62299,
      vd: 58.12,
      fl: -186.957194,
      glass: "623581 class (HIKARI J-SK15 spectral match)",
      nC: 1.619729,
      nF: 1.630448,
      ng: 1.636277,
      dPgF: -0.003,
      role: "Leading negative element of the laterally shifting G3b VR group.",
    },
    {
      id: 12,
      name: "L34",
      label: "L34",
      type: "Positive Meniscus, concave to object",
      nd: 1.61266,
      vd: 44.46,
      fl: 81.7496,
      glass: "613445 class (HIKARI J-KZFH1 spectral match)",
      nC: 1.608532,
      nF: 1.622313,
      ng: 1.630085,
      dPgF: -0.0058,
      role: "Positive member of the G3b VR cemented pair.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L35",
      label: "L35 — ED class",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.57,
      fl: -52.475028,
      glass: "498826 ED class (HIKARI J-FKH1 spectral match)",
      nC: 1.49598,
      nF: 1.502009,
      ng: 1.505256,
      dPgF: 0.0327,
      role: "Negative cemented partner in the G3b VR group; one of the three production-correlated ED-class elements.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L36",
      label: "L36",
      type: "Biconvex Positive",
      nd: 1.61266,
      vd: 44.46,
      fl: 54.142554,
      glass: "613445 class (HIKARI J-KZFH1 spectral match)",
      nC: 1.608532,
      nF: 1.622313,
      ng: 1.630085,
      dPgF: -0.0058,
      role: "First positive relay element of G3c.",
    },
    {
      id: 15,
      name: "L37",
      label: "L37",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.73,
      fl: -33.107808,
      glass: "835427 class (HIKARI J-LASF05 spectral match)",
      nC: 1.828989,
      nF: 1.848524,
      ng: 1.859557,
      dPgF: -0.0079,
      role: "Negative rear-relay corrector in G3c.",
    },
    {
      id: 16,
      name: "L38",
      label: "L38",
      type: "Biconvex Positive",
      nd: 1.801,
      vd: 34.92,
      fl: 54.837817,
      glass: "801349 class (HIKARI J-LAF016 spectral match)",
      nC: 1.794267,
      nF: 1.817203,
      ng: 1.830628,
      dPgF: -0.0004,
      role: "Final positive relay element of G3c.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "3", R: 199.1542, d: 13.2, nd: 1.43385, elemId: 1, sd: 66.0 },
    { label: "4", R: 1e15, d: 80.9, nd: 1.0, elemId: 0, sd: 65.0 },
    { label: "5", R: 121.5321, d: 15.5, nd: 1.43385, elemId: 2, sd: 51.5 },
    { label: "6", R: -467.2393, d: 2.0, nd: 1.0, elemId: 0, sd: 51.0 },
    { label: "7", R: -468.0783, d: 5.2, nd: 1.61266, elemId: 3, sd: 47.5 },
    { label: "8", R: 374.4208, d: 56.52, nd: 1.0, elemId: 0, sd: 47.5 },
    { label: "9", R: 78.9162, d: 3.5, nd: 1.6968, elemId: 4, sd: 34.0 },
    { label: "10", R: 45.502, d: 11.0, nd: 1.49782, elemId: 5, sd: 33.0 },
    { label: "11", R: 253.2743, d: 14.505, nd: 1.0, elemId: 0, sd: 31.25 },
    { label: "12", R: 1e15, d: 2.5, nd: 1.834, elemId: 6, sd: 23.5 },
    { label: "13", R: 82.2217, d: 3.94, nd: 1.0, elemId: 0, sd: 22.8 },
    { label: "14", R: -408.7548, d: 3.9, nd: 1.80809, elemId: 7, sd: 22.2 },
    { label: "15", R: -94.719, d: 2.5, nd: 1.55298, elemId: 8, sd: 22.5 },
    { label: "16", R: 1e15, d: 36.105, nd: 1.0, elemId: 0, sd: 23.0 },
    { label: "STO", R: 1e15, d: 25.55, nd: 1.0, elemId: 0, sd: 18.662373 },
    { label: "18", R: 96.5675, d: 1.8, nd: 1.80809, elemId: 9, sd: 17.5 },
    { label: "19", R: 47.002, d: 5.5, nd: 1.49782, elemId: 10, sd: 17.5 },
    { label: "20", R: -244.3862, d: 4.5, nd: 1.0, elemId: 0, sd: 17.5 },
    { label: "21", R: -634.042, d: 1.8, nd: 1.62299, elemId: 11, sd: 17.0 },
    { label: "22", R: 142.8386, d: 1.65, nd: 1.0, elemId: 0, sd: 16.4 },
    { label: "23", R: -256.019, d: 4.7, nd: 1.61266, elemId: 12, sd: 16.4 },
    { label: "24", R: -42.182, d: 1.8, nd: 1.49782, elemId: 13, sd: 18.0 },
    { label: "25", R: 69.591, d: 4.5, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "26", R: 45.6956, d: 6.7, nd: 1.61266, elemId: 14, sd: 18.5 },
    { label: "27", R: -114.2817, d: 12.908, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "28", R: -62.3322, d: 1.8, nd: 1.83481, elemId: 15, sd: 17.5 },
    { label: "29", R: 50.3097, d: 1.654, nd: 1.0, elemId: 0, sd: 17.5 },
    { label: "30", R: 63.8316, d: 4.9, nd: 1.801, elemId: 16, sd: 18.0 },
    // Rear air normalized after omitting patent protective filter glass FLG (surfaces 1–2).
    { label: "31", R: -136.0401, d: 87.868557, nd: 1.0, elemId: 0, sd: 18.0 },
  ],

  asph: {},

  /* ── Published internal-focus movement ── */
  var: {
    "11": [14.505, 28.403],
    "16": [36.105, 22.207],
  },
  varLabels: [
    ["11", "D11 (G1→G2)"],
    ["16", "D16 (G2→STO)"],
  ],

  /* ── Patent functional-group annotations ── */
  groups: [
    { text: "G1", fromSurface: "3", toSurface: "11" },
    { text: "G2 — FOCUS", fromSurface: "12", toSurface: "16" },
    { text: "G3a", fromSurface: "18", toSurface: "20" },
    { text: "G3b — VR", fromSurface: "21", toSurface: "25" },
    { text: "G3c", fromSurface: "26", toSurface: "31" },
  ],

  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 3.588203,
  focusDescription:
    "PUBLISHED internal focus: G2 (surfaces 12–16) translates imageward with d11 14.505→28.403 mm and d16 36.105→22.207 mm; d11+d16 remains 50.610 mm and the stop is fixed. The patent intermediate row (17.427/33.183 mm) lies exactly at t=0.210246 of this motion. FLG is omitted and the rear air is normalized to 87.868557 mm; the resulting modeled near focal-plane distance is 3.588203 m versus Nikon's rounded 3.6 m specification.",

  /* ── Aperture configuration ── */
  nominalFno: 4.122,
  fstopSeries: [4.122, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 9,

  /* ── Geometry/render policy and layout ── */
  gapSagFrac: 0.93,
  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
