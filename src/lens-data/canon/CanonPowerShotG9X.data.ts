import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON 10.2-30.6mm f/2-4.9 (Canon PowerShot G9 X)                   ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2016-161889 A, Example 1 (Canon Inc.; Akihiko Yuki).              ║
 * ║ Production correlation: Canon PowerShot G9 X, marketed October 2015.       ║
 * ║ 8 elements / 3 zoom groups / 5 aspherical surfaces.                       ║
 * ║                                                                            ║
 * ║ Zoom-only gaps: D4, D5, D13, and D15. D5 reverses at the mid state.        ║
 * ║ Focus status: NO_INTERNAL_RECONSTRUCTION. Example 1 publishes no focus      ║
 * ║ trajectory. The required closeFocusM is the product-wide 0.05 m minimum;   ║
 * ║ all authored var pairs are identical within each zoom state.               ║
 * ║                                                                            ║
 * ║ No geometric scaling is applied. Patent design endpoints are 10.50 and     ║
 * ║ 29.90 mm; production marketing endpoints are 10.2 and 30.6 mm, so one      ║
 * ║ uniform scale factor would be invalid.                                     ║
 * ║                                                                            ║
 * ║ Patent surfaces 16-17 are a plane-parallel filter/low-pass block (1.09 mm, ║
 * ║ nd 1.51633, νd 64.1; S-BSL7 class) modeled in `rearPlates` (traced, not    ║
 * ║ drawn) with the published 1.62 mm block-to-image spacing. D15 stores the   ║
 * ║ patent gap to the block: 5.14 / 3.38 / 2.74 mm; the equivalent BF matches  ║
 * ║ the patent 7.48 / 5.72 / 5.08 mm.                                          ║
 * ║                                                                            ║
 * ║ The patent publishes no semi-diameters. Lens-surface SDs are model-derived ║
 * ║ from exact nonlinear on-axis marginal rays plus the default 0.6-field,     ║
 * ║ ±0.75-pupil off-axis bundles at all three zoom states, with conservative   ║
 * ║ mechanical clearance and the patent Fig. 1 section as a shape check. The   ║
 * ║ stop radius is derived from the design f-number at each zoom state (f/2.06 ║
 * ║ wide) and is not source-published aperture data.                           ║
 * ║                                                                            ║
 * ║ Example 1 publishes nd, νd, and selected θgF, but not absolute nC/nF/ng or ║
 * ║ dPgF. Published θgF is converted using dPgF = θgF − (0.6438 − 0.001682νd). ║
 * ║ Absolute line indices remain unauthored. Catalog labels are proxies, not   ║
 * ║ claims of Canon procurement identity.                                      ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * SD audit (2026-09-06): Fig. 1, local PDF p.20 at 600 dpi supports
 * enlarging L11 to 9.4 mm, L12 to 8.5 mm, and L31 to 9.0 mm. These
 * replace ray-bundle minimum envelopes with optical-outline estimates;
 * the central group is retained; the stop radius is derived from the
 * design f-number at each zoom station.
 *
 * Manufacturer references:
 * - https://global.canon/en/c-museum/product/dcc837.html
 * - https://www.usa.canon.com/support/p/powershot-g9-x
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-powershot-g9x",
  maker: "Canon",
  name: "CANON 10.2-30.6mm f/2-4.9 (Canon PowerShot G9 X)",
  subtitle: "JP 2016-161889 A, Example 1 — PowerShot G9 X correlation; no geometric scaling",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "1-inch-type",
    specs: [
      "8 ELEMENTS / 6 AIR-SPACED COMPONENTS / 3 ZOOM GROUPS",
      "f = 10.50-29.90 mm (PATENT)",
      "F/2.06-5.01 (PATENT)",
      "5 ASPHERICAL SURFACES",
      "1-INCH-TYPE / 3:2",
    ],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: [10.2, 30.6], design: [10.500554119291628, 29.890544235267356] },
    fNumber: { marketing: 2.0, design: 2.06 },
  },

  source: { patentNumber: "JP 2016-161889 A", patentYear: 2016, authors: ["Akihiko Yuki"], assignees: ["Canon Inc."] },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.88202,
      vd: 37.2,
      focalLengthMm: -11.915422131010626,
      glass: "M-TAFD307 (coordinate-compatible spectral proxy; production supplier unspecified)",
      apd: false,
      role: "Negative front element of zoom group L1; both surfaces are aspherical.",
      diagramLabel: "11",
      // Example 1: θgF = 0.5769; deviation from the Schott normal line.
      dPgF: 0.5769 - (0.6438 - 0.001682 * 37.2),
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Positive Meniscus",
      nd: 2.00272,
      vd: 19.3,
      focalLengthMm: 29.593574955649377,
      glass: "E-FDS2 class (HOYA E-FDS2 coordinate equivalent; vendor unproven)",
      apd: false,
      role: "Positive meniscus completing negative zoom group L1.",
      diagramLabel: "12",
    },
    {
      id: 3,
      name: "L21",
      label: "L21",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.85135,
      vd: 40.1,
      focalLengthMm: 13.656939131099804,
      glass: "TAFD305 class (HOYA MP/MC-TAFD305 coordinate equivalent; vendor unproven)",
      apd: false,
      role: "Front positive element of zoom group L2; both surfaces are aspherical.",
      diagramLabel: "21",
      // Example 1: θgF = 0.5694; deviation from the Schott normal line.
      dPgF: 0.5694 - (0.6438 - 0.001682 * 40.1),
    },
    {
      id: 4,
      name: "L22",
      label: "L22",
      type: "Positive Meniscus",
      nd: 1.91082,
      vd: 35.3,
      focalLengthMm: 14.650049860248473,
      glass: "TAFD35 class (HOYA TAFD35 coordinate equivalent; vendor unproven)",
      apd: false,
      role: "Positive member of cemented doublet 24 in zoom group L2.",
      diagramLabel: "22",
      cemented: "D24",
      // Example 1: θgF = 0.582; deviation from the Schott normal line.
      dPgF: 0.582 - (0.6438 - 0.001682 * 35.3),
    },
    {
      id: 5,
      name: "L23",
      label: "L23 (G2n)",
      type: "Negative Meniscus",
      nd: 1.8466,
      vd: 20.6,
      focalLengthMm: -8.141762024117629,
      glass: "Unmatched (special high-dispersion glass; patent points to an SnO-rich JP2012-193065 class)",
      apd: "patent",
      apdNote:
        "Example 1 publishes θgF = 0.6176 at νd = 20.6 (ΔPgF = +0.0084492); paragraphs 0051–0052 constrain this special negative glass. No commercial supplier is identified.",
      role: "High-dispersion negative member G2n of cemented doublet 24.",
      diagramLabel: "23",
      cemented: "D24",
      // Example 1: θgF = 0.6176; deviation from the Schott normal line.
      dPgF: 0.6176 - (0.6438 - 0.001682 * 20.6),
    },
    {
      id: 6,
      name: "L25",
      label: "L25",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: -21.392954583015605,
      glass: "699301 class (multiple catalog equivalents; vendor unproven)",
      apd: false,
      role: "Negative member of cemented doublet 27 in zoom group L2.",
      diagramLabel: "25",
      cemented: "D27",
    },
    {
      id: 7,
      name: "L26",
      label: "L26",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.3,
      focalLengthMm: 16.407487067032825,
      glass: "TAFD35 class (HOYA TAFD35 coordinate equivalent; vendor unproven)",
      apd: false,
      role: "Positive member of cemented doublet 27 in zoom group L2.",
      diagramLabel: "26",
      cemented: "D27",
      // Example 1: θgF = 0.582; deviation from the Schott normal line.
      dPgF: 0.582 - (0.6438 - 0.001682 * 35.3),
    },
    {
      id: 8,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.62263,
      vd: 58.2,
      focalLengthMm: 31.443331616011534,
      glass: "BACD15 class (HOYA MP-BACD15 coordinate equivalent; vendor unproven)",
      apd: false,
      role: "Single positive field-lens element of zoom group L3; rear surface is aspherical.",
      diagramLabel: "31",
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: -74.81,
      d: 1.0,
      sd: 9.4,
      medium: 1,
      asphere: { K: 0, A4: -1.31035e-4, A6: 3.17018e-6, A8: -3.99693e-8, A10: 2.43555e-10, A12: -5.38672e-13, A14: 0 },
    },
    {
      label: "2A",
      R: 12.304,
      d: 2.5,
      sd: 9.4,
      asphere: { K: 0, A4: -1.84487e-4, A6: 2.04387e-6, A8: 1.98076e-9, A10: -5.23095e-10, A12: 4.11098e-12, A14: 0 },
    },
    { label: "3", R: 21.016, d: 1.8, sd: 8.5, medium: 2 },
    { label: "4", R: 68.94, sd: 8.5 },
    { label: "STO", R: "flat" },
    {
      label: "6A",
      R: 11.417,
      d: 2.58,
      sd: 5.8,
      medium: 3,
      asphere: { K: 0.507382, A4: -9.78557e-5, A6: -1.79538e-7, A8: 4.0938e-10, A10: 0, A12: 0, A14: 0 },
    },
    { label: "7A", R: 566.87, d: 0.2, sd: 5.8, asphere: { K: -10, A4: 3.05647e-5, A6: 9.16099e-7, A8: 0, A10: 0, A12: 0, A14: 0 } },
    { label: "8", R: 13.104, d: 2.44, sd: 5.3, medium: 4 },
    { label: "9", R: 665.118, d: 0.45, sd: 5.0, medium: 5 },
    { label: "10", R: 6.82, d: 1.98, sd: 4.05 },
    { label: "11", R: -18.234, d: 0.45, sd: 3.95, medium: 6 },
    { label: "12", R: 83.932, d: 1.39, sd: 4.3, medium: 7 },
    { label: "13", R: -18.038, sd: 4.4 },
    { label: "14", R: 48.372, d: 2.8, sd: 9, medium: 8 },
    { label: "15A", R: -32.158, sd: 9, asphere: { K: 0, A4: 4.122e-5, A6: -7.26104e-7, A8: 8.64422e-9, A10: -4.49816e-11, A12: 0, A14: 0 } }, // D15 variable (zoom), gap to the filter block
  ],

  zoom: {
    stations: [
      { focalLengthMm: 10.5, nominalFNumber: 2.06, label: "Wide" },
      { focalLengthMm: 19.76, nominalFNumber: 4.3 },
      { focalLengthMm: 29.9, nominalFNumber: 5.01, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.05,
    description:
      "NO_INTERNAL_RECONSTRUCTION: Example 1 publishes zoom spacings only. Canon specifies 5 cm (wide) and 35 cm " +
      "(tele) focus ranges measured from the lens end, but those values do not determine an internal optical trajectory; " +
      "the data model therefore keeps focus spacings unchanged.",
  },

  gaps: {
    "4": {
      label: "D4",
      values: [
        [17.8, 17.8],
        [6.88, 6.88],
        [1.47, 1.47],
      ],
    },
    STO: {
      label: "D5",
      values: [
        [1.17, 1.17],
        [0.1, 0.1],
        [0.37, 0.37],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [8.3, 8.3],
        [19.42, 19.42],
        [29.44, 29.44],
      ],
    },
    "15A": {
      label: "D15",
      values: [
        [5.14, 5.14],
        [3.38, 3.38],
        [2.74, 2.74],
      ],
    },
  },

  aperture: { fStops: [2.06, 2.8, 4, 5.6, 8, 11], maxFNumber: 11 },

  /* ── Filter/low-pass block (patent surfaces 16–17): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 1.09,
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7",
      gapAfterMm: 1.62,
      source: "JP 2016-161889 A, Example 1 surfaces 16–17 (¶0074)",
    },
  ],

  groups: [
    { text: "L1 (-)", fromSurface: "1A", toSurface: "4" },
    { text: "L2 (+)", fromSurface: "6A", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "14", toSurface: "15A" },
  ],
  doublets: [
    { text: "24", fromSurface: "8", toSurface: "10" },
    { text: "27", fromSurface: "11", toSurface: "13" },
  ],

  layout: { yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
