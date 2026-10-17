import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON ZOOM-NIKKOR 28-45mm f/4.5                            ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 3,771,853, Embodiment III / job-card Example 3.              ║
 * ║ The USPTO Certificate of Correction changes r14 from +889.704 mm to      ║
 * ║ +889.074 mm; the corrected value is used here while the raw value remains ║
 * ║ in the dossier evidence.                                                  ║
 * ║                                                                            ║
 * ║ 11 elements / 7 air-separated physical groups / 4 functional power       ║
 * ║ components. All refracting surfaces are spherical.                        ║
 * ║                                                                            ║
 * ║ Zoom states: the wide and tele endpoint spacings are patent-published.    ║
 * ║ Three interior keyframes are code-solved from the patent's ψ(x)=x,        ║
 * ║ φ(x)=0.7836x kinematics and Gaussian equations (11)–(12). The tele        ║
 * ║ endpoint is returned to the printed d5/d13 values so the two published    ║
 * ║ numerical states remain exact.                                             ║
 * ║                                                                            ║
 * ║ Rear spacing: the printed Bf values do not close at their 0.001 mm        ║
 * ║ display precision when the rounded prescription is traced. The modeled    ║
 * ║ surface-18 spacing therefore uses the self-consistent paraxial BFL at     ║
 * ║ each keyframe. The original Bf values and residuals remain in evidence.   ║
 * ║                                                                            ║
 * ║ Stop: the patent publishes only that the stop lies between functional     ║
 * ║ groups 2 and 3. This model places STO at the midpoint of the published    ║
 * ║ 4.8 mm d10 gap (2.4 mm + 2.4 mm), consistent with Fig. 2 topology.        ║
 * ║                                                                            ║
 * ║ Aperture: the patent gives one aperture ratio, F/4.5, for the whole        ║
 * ║ 28.85-44.19 mm range (col. 8) and plots F/4.5 as full aperture at the      ║
 * ║ minimum, medium and maximum focal points (Fig. 12(a)-(c)). nominalFNumber  ║
 * ║ is 4.5 at every keyframe, and the wide-open iris at each keyframe is the   ║
 * ║ radius the real f/4.5 marginal ray reaches at the stop:                    ║
 * ║ 4.718 / 4.919 / 5.096 / 5.246 / 5.369 mm from wide to tele. The iris       ║
 * ║ limits the axial beam at all five keyframes. The patent prints no stop     ║
 * ║ diameter, so these radii are derived from the design f-number, F/4.5, at   ║
 * ║ each station, not a recovered iris law.                                    ║
 * ║                                                                            ║
 * ║ September 14 SD review: rear surfaces 14–16 use 6.2 mm; 17–18 use 8.0 mm,
 * ║ estimated from Fig. 5 optical rims, excluding leaders and brackets.
 * ║ Semi-diameters are modeled, not patent-published. They were derived from  ║
 * ║ exact meridional spherical ray tracing over all five zoom keyframes, then ║
 * ║ checked against full-frame chief rays, the complete pupil bundle at 0.6×  ║
 * ║ half-field, edge thickness, actual rim slope, and shared-gap intrusion.   ║
 * ║ Full-field outer-pupil rays are allowed to vignette in the rear cemented  ║
 * ║ pair where larger SDs would violate physical edge thickness.              ║
 * ║                                                                            ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. The patent has no finite-object  ║
 * ║ focus spacings. closeFocusM = 0.6 is production metadata only; every      ║
 * ║ authored focus pair is identical, so no close-focus optical motion is     ║
 * ║ invented.                                                                  ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-zoom-nikkor-28-45f45",
  maker: "Nikon",
  name: "NIKON ZOOM-NIKKOR 28-45mm f/4.5",
  subtitle: "US 3,771,853 A — Embodiment III; strong Nikon product correlation, exact embodiment unconfirmed",
  // Embodiment III replaces the hidden earlier model; publication is the revision addition commit in UTC.
  publishedAt: "2026-09-14T12:06:25Z",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "11 ELEMENTS / 7 GROUPS",
      "28.85-44.19 mm PATENT DESIGN",
      "F/4.5 PATENT APERTURE ASSERTION",
      "ALL-SPHERICAL",
    ],
    elementCount: 11,
    groupCount: 7,
    focalLengthMm: { marketing: [28, 45], design: [28.8476729420341, 44.1877941383985] },
    fNumber: { marketing: 4.5, design: 4.5 },
  },

  source: {
    patentNumber: "US 3,771,853 A",
    patentYear: 1973,
    authors: ["Soichi Nakamura"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.52,
      vd: 70.1,
      indexReference: "d",
      focalLengthMm: -126.698733135044,
      glass: "520701 — J-PKH1 coordinate-compatible proxy (supplier unresolved)",
      role: "Front negative element of functional group 1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.80411,
      vd: 46.4,
      indexReference: "d",
      focalLengthMm: 96.7139074324292,
      glass: "804464 — N-LASF44 coordinate-compatible proxy (supplier unresolved)",
      role: "Front component of the cemented pair in functional group 1.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.44628,
      vd: 67.2,
      indexReference: "d",
      focalLengthMm: -46.8445614815578,
      glass: "Unmatched 446672 — low-index crown (supplier unresolved)",
      role: "Rear component of the cemented pair in functional group 1.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.61117,
      vd: 55.8,
      indexReference: "d",
      focalLengthMm: 29.7056844246786,
      glass: "611558 — H-ZK5/BACD8/SK8/BSM8 coordinate class; supplier unresolved",
      role: "Positive component in functional group 2.",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.8411,
      vd: 43.3,
      indexReference: "d",
      focalLengthMm: -76.3700741677564,
      glass: "Unmatched 841433 — high-index crown (supplier unresolved)",
      role: "Negative partner in the functional-group-2 cemented pair.",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.54072,
      vd: 47.2,
      indexReference: "d",
      focalLengthMm: 49.291788971896,
      glass: "541472 — LLF2/QF8 coordinate class; supplier unresolved",
      role: "Rear positive element of functional group 2.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      focalLengthMm: 32.4398967986834,
      glass: "697556 — K-LaK14/J-LAK14 coordinate class; supplier unresolved",
      role: "Front element of the negative functional-group-3 cemented pair.",
      cemented: "C3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.80454,
      vd: 39.5,
      indexReference: "d",
      focalLengthMm: -11.8079611982386,
      glass: "805395 — NBFD3 coordinate-compatible proxy (supplier unresolved)",
      role: "Strong negative component of functional group 3.",
      cemented: "C3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.3,
      indexReference: "d",
      focalLengthMm: -31.4892328106066,
      glass: "728283 — SF10/E-FD10/ZF4/H-ZF4A coordinate class; supplier unresolved",
      role: "Front negative component in functional group 4.",
      cemented: "C4",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.8411,
      vd: 43.3,
      indexReference: "d",
      focalLengthMm: 19.0393035616514,
      glass: "Unmatched 841433 — high-index crown (supplier unresolved)",
      role: "Positive cemented partner in functional group 4.",
      cemented: "C4",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.76684,
      vd: 46.6,
      indexReference: "d",
      focalLengthMm: 52.8668437917533,
      glass: "767466 — J-LASFH2 coordinate-compatible proxy (supplier unresolved)",
      role: "Final positive element of functional group 4.",
    },
  ],

  surfaces: [
    { label: "1", R: 52.201, d: 2, sd: 25.8, medium: 1 },
    { label: "2", R: 28.743, d: 11.5, sd: 22.1 },
    { label: "3", R: -744.562, d: 4.2, sd: 21.5, medium: 2 },
    { label: "4", R: -70.591, d: 1.3, sd: 21.2, medium: 3 },
    { label: "5", R: 29.871, sd: 17.3 },
    { label: "6", R: 39.507, d: 4.5, sd: 9.6, medium: 4 },
    { label: "7", R: -32.141, d: 1.1, sd: 9, medium: 5 },
    { label: "8", R: -65.335, d: 0.1, sd: 8.7 },
    { label: "9", R: 18.809, d: 3, sd: 7.6, medium: 6 },
    { label: "10", R: 60.333, d: 2.4, sd: 6.7 },
    // STO station inferred from patent Fig. 2: midpoint of the published 4.8 mm d10 air gap.
    { label: "STO", R: "flat", d: 2.4 },
    { label: "11", R: -117.506, d: 1.7, sd: 5.7, medium: 7 },
    { label: "12", R: -19.07, d: 1, sd: 5.9, medium: 8 },
    { label: "13", R: 19.373, sd: 6.1 },
    // USPTO Certificate of Correction: printed +889.704 -> corrected +889.074 mm.
    { label: "14", R: 889.074, d: 0.7, sd: 6.2, medium: 9 },
    { label: "15", R: 22.348, d: 2.4, sd: 6.2, medium: 10 },
    { label: "16", R: -53.729, d: 0.5, sd: 6.2 },
    { label: "17", R: -55, d: 4.8, sd: 8.0, medium: 11 },
    // Self-consistent paraxial BFL from the corrected rounded wide-end prescription.
    { label: "18", R: -24.222, sd: 8.0 },
  ],

  zoom: {
    // (moved from publishedStations) Source rows only; the other zoom stations are solved or sampled control points.
    stations: [
      { focalLengthMm: 28.85, label: "Wide", published: true },
      { focalLengthMm: 32.7792359464091, published: false },
      { focalLengthMm: 36.6464438139281, published: false },
      { focalLengthMm: 40.4492965445913, published: false },
      { focalLengthMm: 44.19, label: "Tele", published: true },
    ],
  },

  focus: {
    closeFocusM: 0.6,
    description:
      "Not modeled — the patent publishes no finite-object focus spacings; 0.6 m is production MFD metadata only and all authored focus pairs are identical.",
  },

  gaps: {
    "5": {
      label: "D5 (G1-G2)",
      values: [
        [30.3905, 30.3905],
        [22.4254684099115, 22.4254684099115],
        [15.9563682768386, 15.9563682768386],
        [10.523260992153, 10.523260992153],
        [5.8365, 5.8365],
      ],
    },
    "13": {
      label: "D13 (G3-G4)",
      values: [
        [1.0864, 1.0864],
        [1.85501172177428, 1.85501172177428],
        [2.62362344354856, 2.62362344354856],
        [3.39223516532284, 3.39223516532284],
        [4.1597, 4.1597],
      ],
    },
    "18": {
      label: "BFD",
      values: [
        [37.7231870886993, 37.7231870886993],
        [40.5063855414827, 40.5063855414827],
        [43.2895839942661, 43.2895839942661],
        [46.0727824470495, 46.0727824470495],
        [48.8556954433968, 48.8556954433968],
      ],
    },
  },

  // Patent aperture ratio F/4.5 for the whole focal range (col. 8; Fig. 12(a)-(c)); the iris is traced per keyframe.
  aperture: { nominalFNumber: 4.5, fStops: [4.5, 5.6, 8, 11, 16, 22] },

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (+)", fromSurface: "6", toSurface: "10" },
    { text: "G3 (-)", fromSurface: "11", toSurface: "13" },
    { text: "G4 (+)", fromSurface: "14", toSurface: "18" },
  ],
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "5" },
    { text: "C2", fromSurface: "6", toSurface: "8" },
    { text: "C3", fromSurface: "11", toSurface: "13" },
    { text: "C4", fromSurface: "14", toSurface: "16" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
