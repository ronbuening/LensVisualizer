import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — KONICA ZOOM-HEXANON AR 65-135mm f/4
 *
 * Source: JP S58-149014 / JPS58-149014A, Example 3. The publication is a 1983 focusing-method disclosure
 * using a 65–135 mm, 13-element / 9-group formula strongly correlated with the earlier production lens;
 * it is not treated as the product-origin patent. No dimensional scaling is applied.
 *
 * ZOOM MODEL:
 * The patent publishes three infinity-focus stations at f = 66.288 / 92.433 / 135.090 mm. Source gaps
 * d3, d8, d13, and BFD are preserved. d3 + d8 = 29.150 mm at every station, reflecting the published
 * coupling of functional groups G1 and G3. The four functional-group powers are + / − / + / +.
 *
 * FOCUS STATUS — PUBLISHED:
 * The patent publishes the mechanism and Table 8 focus movements versus object-to-image distance U.
 * Surfaces 1–13 translate together toward the object; in this sequential model that increases only the
 * pre-stop portion of d13 while the inferred stop, G4, and BFD remain fixed. At U = 1500 mm, the wide
 * and tele movements are the published 4.694 and 22.040 mm. The mid movement, 9.4587200119 mm, is a
 * code evaluation of the same published mechanism because Table 8 has no row exactly at f = 92.433 mm.
 * The marketed 1.5 m MFD is retained separately; no claim is made that its catalog reference plane is
 * identical to the patent's U reference plane merely because the numerical distance is the same.
 *
 * STO MODEL — inferred, not patent-tabulated:
 * Example 3 publishes no stop coordinate or diameter. A single fixed stop is placed 1.500 mm objectward of
 * source surface 14 inside d13, preserving the source gap while leaving positive shared-gap margin under
 * the current geometry rule. The stop radius is derived from the design f-number and held at every zoom
 * station. The former fixed-stop calibration used exact spherical tracing for a mean infinity-state modeled
 * f-number of 4.000000 and gave modeled f-numbers of 4.003321948 / 3.999312941 / 3.997365111. Because this
 * is a constant-aperture zoom, nominalFno is stored as the scalar 4.0; apertureMarketing remains the
 * production f/4 specification.
 *
 * SEMI-DIAMETERS — inferred, not patent-tabulated:
 * Example 3 publishes no clear apertures or image height. SDs are inferred from the modeled f/4 pupil,
 * 135-format diagonal field, exact spherical marginal/chief-ray envelopes at the three zoom stations,
 * the Figure 3 silhouette, and current edge-thickness / actual-rim-slope / shared-gap constraints.
 * The most restrictive air gap is source surfaces 5→6; the authored 12.45 mm shared band leaves positive
 * margin under the default 0.90 gap-sag rule. Layout controls are not used to conceal invalid geometry.
 *
 * GLASS / SPECTRAL DATA:
 * The patent gives d-line nd/νd coordinates but no glass supplier and no nC, nF, ng, or dPgF values.
 * Coordinate-compatible catalog curves are used only as supplier-neutral coefficient proxies. OHARA BAL15Y
 * supplies the exact 557587 curve; line-index/partial-dispersion fields are not copied from the proxy rows.
 */

const LENS_DATA = {
  schema: 2,
  key: "konica-zoom-hexanon-ar-65-135mm-f4",
  maker: "Konica",
  name: "KONICA ZOOM-HEXANON AR 65-135mm f/4",
  subtitle: "JPS58-149014A Example 3 — later focusing-method disclosure; production correlation",

  catalog: {
    lensMounts: ["konica-ar"],
    imageFormat: "135-full-frame",
    specs: [
      "13 ELEMENTS / 9 GROUPS",
      "65–135mm MARKETED / 66.290–135.095mm MODELED",
      "f/4 MARKETED / f/4.0033–3.9974 MODELED",
      "36°–18° MARKETED",
      "ALL-SPHERICAL",
    ],
    elementCount: 13,
    groupCount: 9,
    focalLengthMm: { marketing: [65, 135], design: [66.29029235986896, 135.09472629955764] },
    fNumber: { marketing: 4 },
  },

  source: {
    patentNumber: "JP 1983-149014 A",
    patentYear: 1983,
    authors: ["Norikazu Arai", "Hiroshi Miyamae", "Shozo Ishiyama", "Makoto Sakano", "Tadashi Kojima"],
    assignees: ["Konishiroku Photo Industry Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.8,
      indexReference: "d",
      focalLengthMm: -96.73431747513294,
      glass: "E-FD13 catalog-equivalent coefficient proxy (patent 741278; production supplier unspecified)",
      apd: false,
      role: "Negative member of the cemented positive first functional group.",
      diagramLabel: "L1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.67003,
      vd: 47.3,
      indexReference: "d",
      focalLengthMm: 53.60583488314019,
      glass: "S-BAH10 catalog-equivalent coefficient proxy (patent 670473; production supplier unspecified)",
      apd: false,
      role: "Positive member of the cemented first functional group.",
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: -78.56160748912318,
      glass: "J-SK16 catalog-equivalent coefficient proxy (patent 620603; production supplier unspecified)",
      apd: false,
      role: "Front negative element of functional group G2.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.735,
      vd: 49.8,
      indexReference: "d",
      focalLengthMm: -29.916223860604237,
      glass: "TAC4 catalog-equivalent coefficient proxy (patent 735498; production supplier unspecified)",
      apd: false,
      role: "Negative member of the cemented pair within functional group G2.",
      diagramLabel: "L4",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.78472,
      vd: 25.7,
      indexReference: "d",
      focalLengthMm: 47.15402911051161,
      glass: "H-ZF13 catalog-equivalent coefficient proxy (patent 785257; production supplier unspecified)",
      apd: false,
      role: "Positive dense-flint-class member cemented to L4.",
      diagramLabel: "L5",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: 100.3198360421829,
      glass: "J-SK16 catalog-equivalent coefficient proxy (patent 620603; production supplier unspecified)",
      apd: false,
      role: "Positive lead element of functional group G3.",
      diagramLabel: "L6",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.7,
      indexReference: "d",
      focalLengthMm: -75.05586028995587,
      glass: "H-ZF13 catalog-equivalent coefficient proxy (patent 785257; production supplier unspecified)",
      apd: false,
      role: "Negative member of the cemented rear pair in functional group G3.",
      diagramLabel: "L7",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: 42.554252360891084,
      glass: "J-SK16 catalog-equivalent coefficient proxy (patent 620603; production supplier unspecified)",
      apd: false,
      role: "Positive member cemented to L7, completing functional group G3.",
      diagramLabel: "L8",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.53996,
      vd: 59.5,
      indexReference: "d",
      focalLengthMm: -88.81754381455383,
      glass: "S-BAL12 catalog-equivalent coefficient proxy (patent 540595; production supplier unspecified)",
      apd: false,
      role: "First element of the fixed rear master group G4.",
      diagramLabel: "L9",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Plano-Convex Positive",
      nd: 1.72342,
      vd: 38,
      indexReference: "d",
      focalLengthMm: 53.3383096956125,
      glass: "S-BAH28 catalog-equivalent coefficient proxy (patent 723380; production supplier unspecified)",
      apd: false,
      role: "Positive plano-convex member of the rear master group.",
      diagramLabel: "L10",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.63636,
      vd: 35.4,
      indexReference: "d",
      focalLengthMm: -37.934319711609426,
      glass: "S-TIM6 catalog-equivalent coefficient proxy (patent 636354; production supplier unspecified)",
      apd: false,
      role: "Negative correction element in the rear master group.",
      diagramLabel: "L11",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.55671,
      vd: 58.7,
      indexReference: "d",
      focalLengthMm: -44.29830322843352,
      glass: "BAL15Y catalog-equivalent coefficient proxy (patent 557587; production supplier unspecified)",
      apd: false,
      role: "Negative member of the final cemented pair.",
      diagramLabel: "L12",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.6,
      indexReference: "d",
      focalLengthMm: 24.974762256558364,
      glass: "J-LAK7R catalog-equivalent coefficient proxy (patent 652586; production supplier unspecified)",
      apd: false,
      role: "Positive final element cemented to L12.",
      diagramLabel: "L13",
      cemented: "D4",
    },
  ],

  surfaces: [
    { label: "1", R: 81.28, d: 1.42, sd: 20.6, medium: 1 },
    { label: "2", R: 37.8, d: 9.8, sd: 19.8, medium: 2 },
    { label: "3", R: -646.2, sd: 19.2 },
    { label: "4", R: -416.1, d: 1.04, sd: 12.7, medium: 3 },
    { label: "5", R: 55.26, d: 3.08, sd: 12.45 },
    { label: "6", R: -59.25, d: 1.04, sd: 12.45, medium: 4 },
    { label: "7", R: 35.224, d: 3.67, sd: 13.0, medium: 5 },
    { label: "8", R: 699.2, sd: 13.1 },
    { label: "9", R: 282.25, d: 2.83, sd: 13.8, medium: 6 },
    { label: "10", R: -79.54, d: 0.1, sd: 13.9 },
    { label: "11", R: 68.0, d: 1.04, sd: 14.0, medium: 7 },
    { label: "12", R: 31.349, d: 5.17, sd: 13.8, medium: 8 },
    { label: "13", R: -156.71, sd: 13.7 },
    { label: "STO", R: "flat", d: 1.5 },
    { label: "14", R: -52.5, d: 2.0, sd: 11.1, medium: 9 },
    { label: "15", R: 561.73, d: 0.1, sd: 11.1 },
    { label: "16", R: 38.586, d: 5.0, sd: 11.2, medium: 10 },
    { label: "17", R: "flat", d: 4.1, sd: 11.2 },
    { label: "18", R: -192.548, d: 5.2, sd: 10.1, medium: 11 },
    { label: "19", R: 27.89, d: 3.45, sd: 9.5 },
    { label: "20", R: 540.0, d: 2.0, sd: 9.8, medium: 12 },
    { label: "21", R: 23.553, d: 7.0, sd: 10.4, medium: 13 },
    { label: "22", R: -46.48, sd: 10.8 },
  ],

  zoom: {
    // (moved from publishedStations) Source-tabulated focus rows differ by zoom station.
    stations: [
      { focalLengthMm: 66.288, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 92.433, published: true },
      { focalLengthMm: 135.09, label: "Tele", published: true, publishedFocus: [1] },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 1.5,
    description:
      "PUBLISHED: surfaces 1–13 translate together toward the object for focus. The 1.5 m model state uses the " +
      "published Table 8 wide/tele shifts of 4.694/22.040 mm; the 92.433 mm mid shift of 9.458720 mm is " +
      "code-evaluated from the same published mechanism at U=1500 mm. The inferred STO, G4, and BFD remain fixed; " +
      "patent U is object-to-image distance and is not silently equated to the product MFD reference plane.",
  },

  gaps: {
    "3": {
      label: "D3",
      values: [
        [3.576, 3.576],
        [14.229, 14.229],
        [26.048, 26.048],
      ],
    },
    "8": {
      label: "D8",
      values: [
        [25.574, 25.574],
        [14.921, 14.921],
        [3.102, 3.102],
      ],
    },
    "13": {
      label: "D13 to STO",
      values: [
        [3.5, 8.194],
        [14.153, 23.611720011916322],
        [25.972, 48.012],
      ],
    },
    "22": {
      label: "BFD",
      values: [
        [71.139, 71.139],
        [71.031, 71.031],
        [70.888, 70.888],
      ],
    },
  },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1 +", fromSurface: "1", toSurface: "3" },
    { text: "G2 −", fromSurface: "4", toSurface: "8" },
    { text: "G3 +", fromSurface: "9", toSurface: "13" },
    { text: "G4 +", fromSurface: "14", toSurface: "22" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
    { text: "D4", fromSurface: "20", toSurface: "22" },
  ],

  layout: { yScFill: 0.36 },
} satisfies LensDataV2Input;

export default LENS_DATA;
