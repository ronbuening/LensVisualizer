import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║            LENS DATA — CANON EF 400mm f/2.8 L IS II USM                                           ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2011/0090576 A1, Second Numerical Embodiment / Example 2 / Fig. 3.                ║
 * ║ Production correlation: Canon EF 400mm f/2.8L IS II USM; correlation is inferred, not patent-named.║
 * ║ Active model: 15 refractive elements / 11 air-separated groups, all spherical.                   ║
 * ║ The patent's separate rear glass block G (filter/faceplate) is excluded. Surface 27 therefore    ║
 * ║ uses the patent-normalized no-G air back focus Re→IP = 70.72 mm. The authored first-surface→IP   ║
 * ║ track is 371.25 mm versus patent physical Lt = 372.00 mm; the difference is the G-plane shift.   ║
 * ║                                                                                                    ║
 * ║ SCALE: none (s = 1.0). Patent f = 392.15 mm; the active authored arrays compute EFL ≈ 392.260742 mm.║
 * ║ Marketing 400 mm f/2.8 is kept separate from the patent/model design values.                      ║
 * ║                                                                                                    ║
 * ║ STOP: patent row 14 is STO. Its published 48.31 mm "effective diameter" is a ray-envelope value,  ║
 * ║ not the physical iris diameter. STO.sd = 23.251414 mm is independently calibrated so the modeled ║
 * ║ entrance pupil gives the patent f/2.90.                                                            ║
 * ║                                                                                                    ║
 * ║ FOCUS — CONSTRAINED_RECONSTRUCTION: patent states cemented L16 moves imageward but gives no      ║
 * ║ finite-focus spacing table. Canon's 2.7 m MFD is referenced to the physical image plane, then   ║
 * ║ normalized to the no-G model: Lt = 372.00 mm, model track = 371.25 mm, object→surface 1 =       ║
 * ║ 2328.00 mm. Holding D10 + D13 = 59.95 mm gives close D10 = 45.149493819 mm and                  ║
 * ║ D13 = 14.800506181 mm. This close state is reconstructed, not patent-published.                 ║
 * ║                                                                                                    ║
 * ║ IS: cemented L22 plus negative L23 form the patent's transverse stabilization unit. No axial IS   ║
 * ║ motion is authored because the patent describes lateral motion, not an axial variable spacing.    ║
 * ║                                                                                                    ║
 * ║ SEMI-DIAMETERS: inferred construction clear apertures, not half of the patent effective-diameter  ║
 * ║ column. They are constrained by patent apertures/section, modeled marginal/chief-ray envelopes,   ║
 * ║ edge thickness, rim slope, shared-band cross-gap intrusion, and configured render-ray containment.║
 * ║ Current gapSagFrac = 0.90; the binding row-20/21 shared radius is 15.75 mm.                        ║
 * ║                                                                                                    ║
 * ║ SPECTRAL DATA: the patent directly publishes nd, νd, θgF and X (= dPgF), but not absolute nC/nF/ng.║
 * ║ dPgF is therefore stored directly on every glass element. Absolute line indices are intentionally ║
 * ║ omitted rather than fabricated from an unproven vendor glass. Ordinary glass labels use neutral   ║
 * ║ six-digit coordinate classes; CaF2 is separately disclosed as a production-correlation inference. ║
 * ║                                                                                                    ║
 * ║ SOURCE CONTRADICTION: patent Table 1 swaps the Gp2/Gn1 position labels for Example 2. Prescription ║
 * ║ geometry is retained: surface 25 is Gp2 front (~0.813L), surface 26 is Gn1 front (~0.973L).        ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 *
 * Product sources used for identity/marketing correlation:
 * https://global.canon/en/c-museum/product/ef416.html
 * https://global.canon/en/news/2019/20191107.html
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-400mm-f28-l-is-ii-usm",
  maker: "Canon",
  name: "CANON EF 400mm f/2.8 L IS II USM",
  subtitle: "US 2011/0090576 A1 Example 2 — production correlation; constrained L16 focus reconstruction",
  specs: [
    "15 ACTIVE ELEMENTS / 11 GROUPS (G FILTER EXCLUDED)",
    "PATENT f = 392.15 mm; COMPUTED EFL 392.2607 mm",
    "PATENT F/2.90 / MARKETED 400mm f/2.8",
    "ALL-SPHERICAL",
    "L16 IMAGEWARD INNER FOCUS; RECONSTRUCTED 2.7 m CLOSE STATE",
    "L22 + L23 TRANSVERSE IS UNIT",
  ],

  focalLengthMarketing: 400,
  focalLengthDesign: 392.2607419367617,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2011/0090576 A1",
  patentAuthors: ["Shigenobu Sugita"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2011,
  elementCount: 15,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 336.8652924828807,
      glass: "487702 class (vendor unresolved; multiple catalog equivalents)",
      dPgF: 0.0043,
      role: "Front protective/collector positive element ahead of the two Gp1 low-dispersion positives.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 / Gp1",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      fl: 191.6477734862689,
      glass: "CaF2 fluorite (Canon production-correlation inference; patent Gp1 coordinates)",
      apd: "patent",
      apdNote: "Patent Gp1 anomalous-partial-dispersion material; X = dPgF = +0.0534.",
      dPgF: 0.0534,
      role: "First patent Gp1 positive; high ray height makes it a primary longitudinal-chromatic corrector.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -136.8606226959859,
      glass: "835427 class (vendor unresolved; multiple catalog equivalents)",
      dPgF: -0.0083,
      role: "Front-unit negative element balancing the strong positive Gp1 collectors.",
    },
    {
      id: 4,
      name: "L14",
      label: "L14 / Gp1",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      fl: 194.34963604469866,
      glass: "CaF2 fluorite (Canon production-correlation inference; patent Gp1 coordinates)",
      apd: "patent",
      apdNote: "Patent Gp1 anomalous-partial-dispersion material; X = dPgF = +0.0534.",
      dPgF: 0.0534,
      role: "Second patent Gp1 positive; works with L12 to control longitudinal chromatic aberration.",
    },
    {
      id: 5,
      name: "L15",
      label: "L15",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: -838.1950441755673,
      glass: "487702 class (vendor unresolved; multiple catalog equivalents)",
      dPgF: 0.0043,
      role: "Weak negative meniscus preceding the inner-focus cemented group.",
    },
    {
      id: 6,
      name: "L16a",
      label: "L16 positive",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      fl: 235.80586262670528,
      glass: "805254 class (vendor unresolved; multiple catalog equivalents)",
      dPgF: 0.015,
      cemented: "L16",
      role: "Positive member of the translating L16 inner-focus cemented group.",
    },
    {
      id: 7,
      name: "L16b",
      label: "L16 negative",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -104.4059199159073,
      glass: "804466 class (vendor unresolved; multiple catalog equivalents)",
      dPgF: -0.0083,
      cemented: "L16",
      role: "Negative member of the L16 focus doublet; the cemented pair is weakly negative in isolation.",
    },
    {
      id: 8,
      name: "L21a",
      label: "L21 negative",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.5,
      fl: -64.69897225645975,
      glass: "728285 class (vendor unresolved; multiple catalog equivalents)",
      dPgF: 0.0117,
      cemented: "L21",
      role: "Negative front member of the first rear-unit cemented group.",
    },
    {
      id: 9,
      name: "L21b",
      label: "L21 positive",
      type: "Biconvex Positive",
      nd: 1.70154,
      vd: 41.2,
      fl: 44.723174784377214,
      glass: "702412 class (vendor unresolved; multiple catalog equivalents)",
      dPgF: 0.0021,
      cemented: "L21",
      role: "Positive partner of L21; the cemented pair is net positive in isolation.",
    },
    {
      id: 10,
      name: "L22a",
      label: "L22 positive",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      fl: 39.79585576614245,
      glass: "847238 class (vendor unresolved; multiple catalog equivalents)",
      dPgF: 0.0167,
      cemented: "L22",
      role: "Positive member of the L22 cemented stabilization subgroup.",
    },
    {
      id: 11,
      name: "L22b",
      label: "L22 negative",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 40.9,
      fl: -29.264200800189005,
      glass: "806409 class (vendor unresolved; multiple catalog equivalents)",
      dPgF: -0.0048,
      cemented: "L22",
      role: "Negative member of L22; L22 moves transversely together with L23 for image stabilization.",
    },
    {
      id: 12,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -50.66047357011775,
      glass: "835427 class (vendor unresolved; multiple catalog equivalents)",
      dPgF: -0.0083,
      role: "Negative stabilization element moving laterally with cemented L22.",
    },
    {
      id: 13,
      name: "L24",
      label: "L24",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.8,
      fl: 71.98879921263543,
      glass: "648338 class (vendor unresolved; multiple catalog equivalents)",
      dPgF: 0.0069,
      role: "Rear positive relay element ahead of the terminal chromatic-correction cemented pair.",
    },
    {
      id: 14,
      name: "L25a",
      label: "L25 positive / Gp2",
      type: "Biconvex Positive",
      nd: 1.65412,
      vd: 39.7,
      fl: 46.72992076667075,
      glass: "654397 anomalous-dispersion class (vendor unresolved; multiple catalog equivalents)",
      apd: "patent",
      apdNote: "Patent Gp2 partial-dispersion material; condition (6), X = dPgF = -0.0033.",
      dPgF: -0.0033,
      cemented: "L25",
      role: "Gp2 positive of the terminal cemented pair; patent condition (5)/(6) material.",
    },
    {
      id: 15,
      name: "L25b",
      label: "L25 negative / Gn1",
      type: "Biconcave Negative",
      nd: 1.8081,
      vd: 22.8,
      fl: -46.18705402677947,
      glass: "808228 anomalous high-dispersion class (vendor unresolved; multiple catalog equivalents)",
      apd: "patent",
      apdNote: "Patent Gn1 high-index/high-dispersion anomalous material; X = dPgF = +0.0251.",
      dPgF: 0.0251,
      cemented: "L25",
      role:
        "Gn1 negative nearest the image; patent uses it for lateral color, field-curvature, and astigmatism control.",
    },
  ],

  /* ── Optical prescription ── */
  surfaces: [
    { label: "1", R: 265.748, d: 17.78, nd: 1.48749, elemId: 1, sd: 72.0 },
    { label: "2", R: -420.408, d: 48.08, nd: 1.0, elemId: 0, sd: 69.5 },
    { label: "3", R: 143.732, d: 21.9, nd: 1.43387, elemId: 2, sd: 58.0 },
    { label: "4", R: -188.181, d: 0.28, nd: 1.0, elemId: 0, sd: 52.62 },
    { label: "5", R: -185.302, d: 6.25, nd: 1.83481, elemId: 3, sd: 52.5 },
    { label: "6", R: 302.552, d: 49.95, nd: 1.0, elemId: 0, sd: 50.11 },
    { label: "7", R: 108.673, d: 15.8, nd: 1.43387, elemId: 4, sd: 44.48 },
    { label: "8", R: -359.764, d: 0.15, nd: 1.0, elemId: 0, sd: 43.75 },
    { label: "9", R: 54.299, d: 7.3, nd: 1.48749, elemId: 5, sd: 40.5 },
    { label: "10", R: 45.818, d: 16.22, nd: 1.0, elemId: 0, sd: 37.0 },
    { label: "11", R: 420.291, d: 4.26, nd: 1.80518, elemId: 6, sd: 32.45 },
    { label: "12", R: -344.747, d: 3.2, nd: 1.804, elemId: 7, sd: 32.135 },
    { label: "13", R: 111.419, d: 43.73, nd: 1.0, elemId: 0, sd: 30.26 },
    { label: "STO", R: 1e15, d: 6.55, nd: 1.0, elemId: 0, sd: 23.25141403856378 },
    { label: "15", R: 185.602, d: 1.8, nd: 1.72825, elemId: 8, sd: 24.015 },
    { label: "16", R: 37.424, d: 10.89, nd: 1.70154, elemId: 9, sd: 23.14 },
    { label: "17", R: -170.826, d: 5.53, nd: 1.0, elemId: 0, sd: 23.015 },
    { label: "18", R: 53.602, d: 7.3, nd: 1.84666, elemId: 10, sd: 20.035 },
    { label: "19", R: -85.053, d: 1.7, nd: 1.8061, elemId: 11, sd: 19.67 },
    { label: "20", R: 32.935, d: 6.65, nd: 1.0, elemId: 0, sd: 15.75 },
    { label: "21", R: -65.258, d: 1.8, nd: 1.83481, elemId: 12, sd: 15.75 },
    { label: "22", R: 121.68, d: 4.63, nd: 1.0, elemId: 0, sd: 16.885 },
    { label: "23", R: 72.705, d: 6.32, nd: 1.64769, elemId: 13, sd: 18.295 },
    { label: "24", R: -125.549, d: 0.2, nd: 1.0, elemId: 0, sd: 18.53 },
    { label: "25", R: 92.173, d: 10.46, nd: 1.65412, elemId: 14, sd: 18.715 },
    { label: "26", R: -43.681, d: 1.8, nd: 1.8081, elemId: 15, sd: 18.49 },
    { label: "27", R: 261.177, d: 70.72, nd: 1.0, elemId: 0, sd: 18.455 },
  ],

  asph: {},

  /* ── Focus ── */
  var: {
    "10": [16.22, 45.149493818598835],
    "13": [43.73, 14.800506181401161],
  },
  varLabels: [
    ["10", "D10"],
    ["13", "D13"],
  ],
  closeFocusM: 2.7,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent publishes L16 imageward inner focusing but no finite-focus spacing " +
    "table. Canon's 2.7 m MFD is treated as physical image-plane-referenced and normalized to the no-G model " +
    "(patent Lt = 372.00 mm; " +
    "modeled first-surface-to-IP track = 371.25 mm), giving an object-to-first-surface distance of 2328.00 mm. " +
    "The close endpoint moves L16 +28.929493819 mm while holding D10 + D13 = 59.95 mm; it is reconstructed, " +
    "not patent-published.",

  /* ── Aperture ── */
  nominalFno: 2.9,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  apertureBlades: 9,

  /* ── Diagram annotations ── */
  groups: [
    { text: "LF", fromSurface: "1", toSurface: "13" },
    { text: "LR", fromSurface: "15", toSurface: "27" },
  ],
  doublets: [
    { text: "L16", fromSurface: "11", toSurface: "13" },
    { text: "L21", fromSurface: "15", toSurface: "17" },
    { text: "L22", fromSurface: "18", toSurface: "20" },
    { text: "L25", fromSurface: "25", toSurface: "27" },
  ],

  /* ── Required per-lens layout ── */
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
