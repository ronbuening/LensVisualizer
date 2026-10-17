import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — CANON EF-M 11-22mm f/4-5.6 IS STM
 *
 * Prescription source: US 2014/0098253 A1, Numerical Example 3 (Satoshi Maetaki / Canon Kabushiki Kaisha).
 * Production correlation: Canon EF-M 11-22mm f/4-5.6 IS STM. The patent does not name the product; the correlation
 * rests on the 11-22mm f/4-5.6 range, 12 elements / 9 groups, three aspherical surfaces on two elements, the
 * high-Abbe element corresponding in position to Canon's advertised UD element, the lateral IS lens, and rear focus.
 *
 * Zoom positions are the three patent infinity-focus states: 11.00, 15.50, and 22.00 mm. D6 and D22/BF are zoom-only.
 * D17 and D19 vary with zoom and with focus. U1 reverses direction between the middle and telephoto states when
 * positions are referred to the fixed image plane; U2, U3, and U4 move monotonically objectward over the sampled zoom.
 *
 * Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes only infinity-focus spacings but explicitly identifies
 * U3 (authored element L10; surfaces 18-19) as the axial focusing unit. Close-focus pairs below are code-solved
 * for Canon's marketed 0.15 m minimum focus distance, measured from the focal plane. Only U3 moves; D17 + D19
 * remains 7.08 mm at every zoom position. The solved U3 imageward travels are 1.449509 / 2.180303 / 3.466319 mm.
 * These are not patent-published close-focus spacings. At 22 mm the reconstructed paraxial magnification is 0.3115x,
 * consistent with Canon's rounded marketed 0.30x.
 *
 * Aperture: Example 3 publishes Fno = 4.00 / 4.63 / 5.60. The Numerical Example 3 patent surface table
 * diaphragm row (surface 9) prints a 9.62 mm "light effective diameter". It is a clear-light envelope, not
 * the physical iris opening: treating 9.62 mm as the fixed stop diameter contradicts the patent Fno sequence.
 * Station nominalFNumber therefore stores the published modeled values. The stop radius is derived from the
 * design f-number at each station by exact Snell tracing from EFL/(2*Fno); the wide / middle / tele radii are
 * 4.701431 / 4.774619 / 4.811568 mm. The last value is 0.001568 mm above the nominal 4.810 mm half-envelope
 * only because the patent diameter is rounded to 0.01 mm (9.6231 mm rounds to 9.62 mm).
 *
 * Semi-diameters: Example 3 publishes light-effective diameters for every optical surface. Non-stop sd values below are
 * one-half of those published diameters and are not enlarged or reduced for rendering. They are independently checked
 * at every authored zoom/focus endpoint for edge thickness, actual rim slope, conic domain, shared-gap intrusion,
 * selected-ray containment, and render-trim policy. Layout fields are not used to conceal invalid geometry.
 *
 * Aspheres: source surfaces 1, 2, and 17 use the project's standard conic K convention directly and are labeled 1A,
 * 2A, and 17A. No scaling is applied (s = 1); radii, spacings, semi-diameters, K, and polynomial coefficients remain at
 * source scale. The patent publishes only A4 through A10; A12 and A14 are zero in the authored schema.
 *
 * Glass/spectral data: the patent gives d-line nd/vd coordinates but no glass manufacturers or per-element line-index
 * data. Cross-vendor catalog checks leave supplier identity underdetermined, so the file uses vendor-neutral coordinate
 * classes and does not invent nC, nF, ng, or dPgF. The 1.49700/81.5 element is consistent with Canon's advertised
 * single
 * UD element, but no APO or anomalous-partial-dispersion claim is inferred from nd/vd alone.
 *
 * The lateral IS motion itself is not authored because Example 3 supplies no stabilization decenter table. There are no
 * sensor covers, filters, inactive dummy/flare-cutter planes, folded surfaces, or mechanical parts in the active model.
 *
 * Manufacturer metadata sources:
 * https://global.canon/en/c-museum/product/ef429.html
 * https://www.usa.canon.com/support/p/ef-m-11-22mm-f-4-5-6-is-stm
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-m-11-22mm-f4-5-6-is-stm",
  maker: "Canon",
  name: "CANON EF-M 11-22mm f/4-5.6 IS STM",
  subtitle: "US 2014/0098253 A1 Numerical Example 3 — strong Canon EF-M 11-22mm f/4-5.6 IS STM correlation",

  catalog: {
    lensMounts: ["canon-ef-m"],
    imageFormat: "aps-c",
    specs: [
      "12 ELEMENTS / 9 GROUPS",
      "11-22mm f/4-5.6 MARKETED",
      "11.0037-22.0132mm COMPUTED DESIGN",
      "2 ASPHERICAL ELEMENTS / 3 ASPHERICAL SURFACES",
      "LATERAL IS UNIT / REAR FOCUS",
      "CONSTRAINED 0.15m FOCUS RECONSTRUCTION",
    ],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: { marketing: [11, 22], design: [11.003719579847463, 22.013236398346084] },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "US 2014/0098253 A1",
    patentYear: 2014,
    authors: ["Satoshi Maetaki"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: -18.912756392946754,
      glass: "583594 crown class (vendor unresolved)",
      apd: false,
      role: "Large front negative element of U1; both surfaces are aspherical.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -15.513570660604184,
      glass: "773496 lanthanum-flint class (vendor unresolved)",
      apd: false,
      role: "Strong negative middle element of U1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.3,
      focalLengthMm: 22.56597876445246,
      glass: "911353 high-index lanthanum-flint class (vendor unresolved)",
      apd: false,
      role: "Positive rear element of U1; offsets part of the front unit's negative power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4 / LS",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 73.41295612442032,
      glass: "697555 lanthanum-crown class (vendor unresolved)",
      apd: false,
      role: "Single positive LS element; the patent moves this lens laterally for image stabilization.",
      diagramLabel: "LS",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.4,
      focalLengthMm: 13.08715019529622,
      glass: "517524 crown class (vendor unresolved)",
      apd: false,
      role: "Positive front member of the first cemented pair in U2.",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -8.307869093612862,
      glass: "883408 lanthanum-dense-flint class (vendor unresolved)",
      apd: false,
      role: "Negative rear member of C1; surface 11 is the cemented junction into this element.",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.53172,
      vd: 48.8,
      focalLengthMm: 13.831127125189507,
      glass: "532488 light-flint class (vendor unresolved)",
      apd: false,
      role: "Positive singlet in the middle of U2.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8 / high-Abbe",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 12.550736945549193,
      glass: "497815 high-Abbe ED/UD class (vendor unresolved)",
      apd: false,
      role: "High-Abbe positive member of C2; position is consistent with Canon's advertised single UD element.",
      cemented: "C2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.854,
      vd: 40.4,
      focalLengthMm: -11.817033256278828,
      glass: "854404 low-Tg lanthanum class (vendor unresolved)",
      apd: false,
      role: "Negative rear member of the near-afocal C2 pair; its rear surface 17A is aspherical.",
      cemented: "C2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10 / Focus",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -38.06620512137179,
      glass: "834372 lanthanum-flint class (vendor unresolved)",
      apd: false,
      role: "Single-element U3 rear-focus unit translated axially in the constrained reconstruction.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.62588,
      vd: 35.7,
      focalLengthMm: 16.849844314736636,
      glass: "626357 flint class (vendor unresolved)",
      apd: false,
      role: "Positive front member of the final cemented U4 group.",
      cemented: "C3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -19.41292899885021,
      glass: "835427 lanthanum-dense-flint class (vendor unresolved)",
      apd: false,
      role: "Negative rear member of the final cemented U4 group; surface 21 is the junction into this element.",
      cemented: "C3",
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 50.214,
      d: 2.3,
      sd: 16.05,
      medium: 1,
      asphere: { K: 0, A4: 2.2514e-5, A6: -6.3808e-8, A8: 4.2156e-11, A10: 1.4451e-13, A12: 0, A14: 0 },
    },
    {
      label: "2A",
      R: 8.89,
      d: 9.13,
      sd: 10.26,
      asphere: { K: -0.47832, A4: 9.5239e-6, A6: -6.2835e-8, A8: 2.4304e-9, A10: -4.1669e-11, A12: 0, A14: 0 },
    },
    { label: "3", R: -43.823, d: 1.2, sd: 9.925, medium: 2 },
    { label: "4", R: 16.692, d: 2.56, sd: 9.05 },
    { label: "5", R: 24.841, d: 3.7, sd: 9.38, medium: 3 },
    { label: "6", R: -110.63, sd: 9.235 },
    { label: "7", R: -130.232, d: 1.28, sd: 4.545, medium: 4 },
    { label: "8", R: -36.876, d: 3.5, sd: 4.615 },
    // US 2014/0098253 A1, Numerical Example 3 surface table, surface 9: printed
    // effective diameter 9.62 mm at the stop.
    { label: "STO", R: "flat", d: 2.0 },
    { label: "10", R: 11.211, d: 4.49, sd: 5.0, medium: 5 },
    { label: "11", R: -14.765, d: 0.8, sd: 4.675, medium: 6 },
    { label: "12", R: 14.95, d: 0.4, sd: 4.595 },
    { label: "13", R: 11.819, d: 4.14, sd: 4.75, medium: 7 },
    { label: "14", R: -17.101, d: 0.67, sd: 5.115 },
    { label: "15", R: 31.522, d: 6.71, sd: 5.255, medium: 8 },
    { label: "16", R: -7.227, d: 0.67, sd: 5.22, medium: 9 },
    { label: "17A", R: -26.546, sd: 5.645, asphere: { K: 0, A4: 2.6963e-5, A6: 3.6258e-7, A8: -5.2493e-9, A10: 1.9541e-10, A12: 0, A14: 0 } },
    { label: "18", R: 43.166, d: 0.8, sd: 6.055, medium: 10 },
    { label: "19", R: 18.139, sd: 6.1 },
    { label: "20", R: 62.546, d: 6.85, sd: 8.28, medium: 11 },
    { label: "21", R: -12.15, d: 1.0, sd: 8.75, medium: 12 },
    { label: "22", R: -50.363, sd: 9.75 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 11, nominalFNumber: 4, label: "Wide" },
      { focalLengthMm: 15.5, nominalFNumber: 4.63 },
      { focalLengthMm: 22, nominalFNumber: 5.6, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.15,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent infinity zoom states retained; only U3 (authored L10; surfaces 18-19) " +
      "translates for focus. " +
      "At Canon's 0.15 m focal-plane-to-subject MFD, code-solved U3 imageward travel is 1.449509 / 2.180303 / " +
      "3.466319 mm at 11 / 15.5 / 22 mm, with D17 + D19 = 7.08 mm conserved. Close spacings are modeled, " +
      "not patent-published.",
  },

  gaps: {
    "6": {
      label: "D6 / ZOOM",
      values: [
        [19.65, 19.65],
        [9.95, 9.95],
        [3.0, 3.0],
      ],
    },
    "17A": {
      label: "D17 / FOCUS IN",
      values: [
        [1.3, 2.74950860439126],
        [1.53, 3.710303206598705],
        [1.75, 5.216318871839459],
      ],
    },
    "19": {
      label: "D19 / FOCUS OUT",
      values: [
        [5.78, 4.33049139560874],
        [5.55, 3.369696793401295],
        [5.33, 1.8636811281605414],
      ],
    },
    "22": {
      label: "BF",
      values: [
        [11.04, 11.04],
        [17.16, 17.16],
        [26.0, 26.0],
      ],
    },
  },

  aperture: { fStops: [4, 4.5, 5.6, 8, 11, 16, 22], blades: 7 },

  groups: [
    { text: "U1 (-)", fromSurface: "1A", toSurface: "6" },
    { text: "U2 (+)", fromSurface: "7", toSurface: "17A" },
    { text: "U3 (- / FOCUS)", fromSurface: "18", toSurface: "19" },
    { text: "U4 (+)", fromSurface: "20", toSurface: "22" },
  ],
  doublets: [
    { text: "C1", fromSurface: "10", toSurface: "12" },
    { text: "C2", fromSurface: "15", toSurface: "17A" },
    { text: "C3", fromSurface: "20", toSurface: "22" },
  ],

  layout: { yScFill: 0.56 },
} satisfies LensDataV2Input;

export default LENS_DATA;
