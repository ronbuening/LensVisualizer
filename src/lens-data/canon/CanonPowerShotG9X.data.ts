import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON 10.2-30.6mm f/2-4.9 (Canon PowerShot G9 X)                   ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2016-161889 A, Example 1 (Canon Inc.; Akihiko Yuki).              ║
 * ║ Production correlation: Canon PowerShot G9 X, marketed October 2015.       ║
 * ║ 8 elements / 3 zoom groups / 5 aspherical surfaces.                       ║
 * ║                                                                            ║
 * ║ Zoom-only gaps: D4, D5, D13, and rear BF. D5 reverses at the mid state.    ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. Example 1 publishes no focus      ║
 * ║ trajectory. The required closeFocusM is the product-wide 0.05 m minimum;   ║
 * ║ all authored var pairs are identical within each zoom state.               ║
 * ║                                                                            ║
 * ║ No geometric scaling is applied. Patent design endpoints are 10.50 and     ║
 * ║ 29.90 mm; production marketing endpoints are 10.2 and 30.6 mm, so one      ║
 * ║ uniform scale factor would be invalid.                                     ║
 * ║                                                                            ║
 * ║ Patent surfaces 16-17 are a plane-parallel filter/low-pass block and are   ║
 * ║ excluded from the active model. Its air-equivalent 1.09 / 1.51633 mm is    ║
 * ║ folded into the final rear air gap together with the published 1.62 mm     ║
 * ║ post-block spacing.                                                        ║
 * ║                                                                            ║
 * ║ The patent publishes no semi-diameters. Lens-surface SDs are model-derived ║
 * ║ from exact nonlinear on-axis marginal rays plus the default 0.6-field,     ║
 * ║ ±0.75-pupil off-axis bundles at all three zoom states, with conservative   ║
 * ║ mechanical clearance and the patent Fig. 1 section as a shape check. The   ║
 * ║ STO base SD is reverse-calibrated from the modeled wide-state f/2.06 and   ║
 * ║ is not source-published aperture data.                                     ║
 * ║                                                                            ║
 * ║ Example 1 publishes nd, νd, and selected θgF, but not absolute nC/nF/ng or ║
 * ║ dPgF. θgF is not dPgF; those optional spectral fields are therefore not     ║
 * ║ invented here. Catalog names below are coordinate equivalents/classes, not  ║
 * ║ claims of Canon procurement identity.                                      ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * SD audit (2026-09-06): Fig. 1, local PDF p.20 at 600 dpi supports
 * enlarging L11 to 9.4 mm, L12 to 8.5 mm, and L31 to 9.0 mm. These
 * replace ray-bundle minimum envelopes with optical-outline estimates;
 * the central group and calibrated iris are retained.
 *
 * Manufacturer references:
 * - https://global.canon/en/c-museum/product/dcc837.html
 * - https://www.usa.canon.com/support/p/powershot-g9-x
 */

const LENS_DATA = {
  key: "canon-powershot-g9x",
  maker: "Canon",
  name: "CANON 10.2-30.6mm f/2-4.9 (Canon PowerShot G9 X)",
  subtitle: "JP 2016-161889 A, Example 1 — PowerShot G9 X correlation; no geometric scaling",
  specs: [
    "8 ELEMENTS / 6 AIR-SPACED COMPONENTS / 3 ZOOM GROUPS",
    "f = 10.50-29.90 mm (PATENT)",
    "F/2.06-5.01 (PATENT)",
    "5 ASPHERICAL SURFACES",
    "1-INCH-TYPE / 3:2",
  ],

  focalLengthMarketing: [10.2, 30.6],
  focalLengthDesign: [10.500554119291628, 29.890544235267356],
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "1-inch-type",
  patentNumber: "JP 2016-161889 A",
  patentAuthors: ["Akihiko Yuki"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2016,
  elementCount: 8,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "11",
      label: "L11",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.88202,
      vd: 37.2,
      fl: -11.915422131010626,
      glass: "M-TAFD307 (coordinate-compatible spectral proxy; production supplier unspecified)",
      apd: false,
      role: "Negative front element of zoom group L1; both surfaces are aspherical.",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 2.00272,
      vd: 19.3,
      fl: 29.593574955649377,
      glass: "E-FDS2 class (HOYA E-FDS2 coordinate equivalent; vendor unproven)",
      apd: false,
      role: "Positive meniscus completing negative zoom group L1.",
    },
    {
      id: 3,
      name: "L21",
      diagramLabel: "21",
      label: "L21",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.85135,
      vd: 40.1,
      fl: 13.656939131099804,
      glass: "TAFD305 class (HOYA MP/MC-TAFD305 coordinate equivalent; vendor unproven)",
      apd: false,
      role: "Front positive element of zoom group L2; both surfaces are aspherical.",
    },
    {
      id: 4,
      name: "L22",
      diagramLabel: "22",
      label: "L22",
      type: "Positive Meniscus",
      nd: 1.91082,
      vd: 35.3,
      fl: 14.650049860248473,
      glass: "TAFD35 class (HOYA TAFD35 coordinate equivalent; vendor unproven)",
      apd: false,
      role: "Positive member of cemented doublet 24 in zoom group L2.",
      cemented: "D24",
    },
    {
      id: 5,
      name: "L23",
      diagramLabel: "23",
      label: "L23 (G2n)",
      type: "Negative Meniscus",
      nd: 1.8466,
      vd: 20.6,
      fl: -8.141762024117629,
      glass: "Unmatched (special high-dispersion glass; patent points to an SnO-rich JP2012-193065 class)",
      apd: false,
      role: "High-dispersion negative member G2n of cemented doublet 24.",
      cemented: "D24",
    },
    {
      id: 6,
      name: "L25",
      diagramLabel: "25",
      label: "L25",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      fl: -21.392954583015605,
      glass: "699301 class (multiple catalog equivalents; vendor unproven)",
      apd: false,
      role: "Negative member of cemented doublet 27 in zoom group L2.",
      cemented: "D27",
    },
    {
      id: 7,
      name: "L26",
      diagramLabel: "26",
      label: "L26",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.3,
      fl: 16.407487067032825,
      glass: "TAFD35 class (HOYA TAFD35 coordinate equivalent; vendor unproven)",
      apd: false,
      role: "Positive member of cemented doublet 27 in zoom group L2.",
      cemented: "D27",
    },
    {
      id: 8,
      name: "L31",
      diagramLabel: "31",
      label: "L31",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.62263,
      vd: 58.2,
      fl: 31.443331616011534,
      glass: "BACD15 class (HOYA MP-BACD15 coordinate equivalent; vendor unproven)",
      apd: false,
      role: "Single positive field-lens element of zoom group L3; rear surface is aspherical.",
    },
  ],

  surfaces: [
    { label: "1A", R: -74.81, d: 1.0, nd: 1.88202, elemId: 1, sd: 9.4 },
    { label: "2A", R: 12.304, d: 2.5, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "3", R: 21.016, d: 1.8, nd: 2.00272, elemId: 2, sd: 8.5 },
    { label: "4", R: 68.94, d: 17.8, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "STO", R: 1e15, d: 1.17, nd: 1.0, elemId: 0, sd: 5.151644859496433 },
    { label: "6A", R: 11.417, d: 2.58, nd: 1.85135, elemId: 3, sd: 5.8 },
    { label: "7A", R: 566.87, d: 0.2, nd: 1.0, elemId: 0, sd: 5.8 },
    { label: "8", R: 13.104, d: 2.44, nd: 1.91082, elemId: 4, sd: 5.3 },
    { label: "9", R: 665.118, d: 0.45, nd: 1.8466, elemId: 5, sd: 5.0 },
    { label: "10", R: 6.82, d: 1.98, nd: 1.0, elemId: 0, sd: 4.05 },
    { label: "11", R: -18.234, d: 0.45, nd: 1.69895, elemId: 6, sd: 3.95 },
    { label: "12", R: 83.932, d: 1.39, nd: 1.91082, elemId: 7, sd: 4.3 },
    { label: "13", R: -18.038, d: 8.3, nd: 1.0, elemId: 0, sd: 4.4 },
    { label: "14", R: 48.372, d: 2.8, nd: 1.62263, elemId: 8, sd: 9 },
    { label: "15A", R: -32.158, d: 7.478840885559212, nd: 1.0, elemId: 0, sd: 9 },
  ],

  asph: {
    "1A": {
      K: 0,
      A4: -1.31035e-4,
      A6: 3.17018e-6,
      A8: -3.99693e-8,
      A10: 2.43555e-10,
      A12: -5.38672e-13,
      A14: 0,
    },
    "2A": {
      K: 0,
      A4: -1.84487e-4,
      A6: 2.04387e-6,
      A8: 1.98076e-9,
      A10: -5.23095e-10,
      A12: 4.11098e-12,
      A14: 0,
    },
    "6A": {
      K: 0.507382,
      A4: -9.78557e-5,
      A6: -1.79538e-7,
      A8: 4.0938e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "7A": {
      K: -10,
      A4: 3.05647e-5,
      A6: 9.16099e-7,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 4.122e-5,
      A6: -7.26104e-7,
      A8: 8.64422e-9,
      A10: -4.49816e-11,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "4": [
      [17.8, 17.8],
      [6.88, 6.88],
      [1.47, 1.47],
    ],
    STO: [
      [1.17, 1.17],
      [0.1, 0.1],
      [0.37, 0.37],
    ],
    "13": [
      [8.3, 8.3],
      [19.42, 19.42],
      [29.44, 29.44],
    ],
    "15A": [
      [7.478840885559212, 7.478840885559212],
      [5.718840885559212, 5.718840885559212],
      [5.078840885559212, 5.078840885559212],
    ],
  },

  varLabels: [
    ["4", "D4"],
    ["STO", "D5"],
    ["13", "D13"],
    ["15A", "BF (air-equivalent)"],
  ],

  zoomPositions: [10.5, 19.76, 29.9],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "L1 (-)", fromSurface: "1A", toSurface: "4" },
    { text: "L2 (+)", fromSurface: "6A", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "14", toSurface: "15A" },
  ],

  doublets: [
    { text: "24", fromSurface: "8", toSurface: "10" },
    { text: "27", fromSurface: "11", toSurface: "13" },
  ],

  closeFocusM: 0.05,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: Example 1 publishes zoom spacings only. Canon specifies 5 cm (wide) and 35 cm " +
    "(tele) focus ranges measured from the lens end, but those values do not determine an internal optical trajectory; " +
    "the data model therefore keeps focus spacings unchanged.",

  nominalFno: [2.06, 4.3, 5.01],
  fstopSeries: [2.06, 2.8, 4, 5.6, 8, 11],
  maxFstop: 11,

  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
