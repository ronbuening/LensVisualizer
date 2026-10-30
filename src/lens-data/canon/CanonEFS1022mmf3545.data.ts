import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF-S 10-22mm f/3.5-4.5 USM.
 *
 * Source prescription: US 2005/0286139 A1, Numerical Fifth Embodiment.
 * The printed patent omits D9, the axial thickness of G22; D9 = 3.50 mm is
 * retained as an unconfirmed reconstruction compatible with the three source
 * focal lengths; those rounded checks do not uniquely recover its thickness.
 *
 * Zoom-only variable gaps: D7, D13, D17, plus computed back focus after 25A.
 * The patent does not publish close-focus spacings, so every variable gap uses
 * identical infinity/close values. Production close focus is retained only as
 * catalog metadata.
 *
 * Shape/glass review: 2026-10-30, exact local original, Fifth Embodiment
 * pp. 22–23 / Fig. 9 p. 10. Clear caps and three outer shoulders follow the
 * native drawing subject to positive hybrid thickness and the 0.05 mm D20 gap.
 * The 2026-09-24 front 1A corner-clearance correction is reused unchanged.
 * Full blank heights at the hybrid and D20 cannot be represented literally
 * with the published R/d/aspheres and unchanged guards; see audit/analysis.
 * Published station apertures are 3.5 / 4.6 / 4.6 (Figs. 10A/B/C), separate
 * from the production 3.5–4.5 label. Source D9 is omitted; source paragraph
 * 0042's negative tele rear-component claim conflicts with the literal model.
 * All 14 index/Abbe pairs use the source's explicit d-line definition. Twelve
 * compatible catalog curves are qualified spectral proxies, not historical
 * supplier, melt or chemistry identification; resin and N14 stay unresolved.
 * Unsupported catalog-derived per-lens line indices are removed.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-efs-10-22mm-f35-45-usm",
  maker: "Canon",
  name: "CANON EF-S 10-22mm f/3.5-4.5 USM",
  subtitle: "US 2005/0286139 A1 — Numerical Fifth Embodiment",

  catalog: {
    lensMounts: ["canon-ef-s"],
    imageFormat: "aps-c",
    specs: [
      "13 elements / 10 groups",
      "10-22mm f/3.5-4.5",
      "APS-C EF-S",
      "3 aspherical surfaces",
      "Ring-type USM inner focus",
    ],
    elementCount: 13,
    groupCount: 10,
    focalLengthMm: { marketing: [10, 22], design: [10.3, 21.4] },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "US 2005/0286139 A1",
    example: { label: "Numerical Embodiment 5", id: "5" },
    patentYear: 2005,
    authors: ["Takeshi Nishimura"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Fifth Embodiment PDF p. 23 omits D9 at R9/N6. The existing 3.50 mm reconstruction is retained; rounded source focal lengths and condition ratios are compatible but do not uniquely determine the missing thickness.",
      },
      {
        status: "unresolved",
        note: "Paragraph 0042 (PDF p. 17, printed p. 3) describes a negative-power tele L3+L4 rear component. The Fifth Embodiment's unchanged literal R/d/N and D17=1.64 mm (PDF p. 23) give positive f=66.087370 mm. No source optical value is changed to fit the prose.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "G11",
      label: "G11 front negative meniscus",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.583126,
      vd: 59.4,
      focalLengthMm: -32.4,
      glass: "S-BAL42 (OHARA compatible spectral proxy; source supplier, melt and chemistry unspecified)",
      role: "Front negative meniscus; nearly plano object-side asphere and strong concave image-side surface.",
    },
    {
      id: 2,
      name: "G12g",
      label: "G12 glass substrate",
      type: "Biconcave Negative",
      nd: 1.772499,
      vd: 49.6,
      focalLengthMm: -21.8,
      glass: "S-LAH66 (OHARA compatible spectral proxy; source supplier, melt and chemistry unspecified)",
      role: "High-index negative substrate for the hybrid replica asphere in the first unit.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "G12r",
      label: "G12 resin replica layer",
      type: "Aspherical Resin Layer",
      nd: 1.52421,
      vd: 51.4,
      focalLengthMm: -491.3,
      glass: "Unmatched replica resin (patent N3; chemistry and cure process unspecified)",
      role: "Thin replica-aspherical layer bonded to G12 glass substrate.",
      cemented: "H1",
    },
    {
      id: 4,
      name: "G13",
      label: "G13 positive meniscus",
      type: "Positive Meniscus",
      nd: 1.72825,
      vd: 28.5,
      focalLengthMm: 40.4,
      glass: "S-TIH10 (OHARA compatible spectral proxy; source supplier, melt and chemistry unspecified)",
      role: "Dispersive positive meniscus completing the L1 negative front unit.",
    },
    {
      id: 5,
      name: "G21",
      label: "G21 L2a negative meniscus",
      type: "Negative Meniscus",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: -25.0,
      glass: "S-LAH55V (OHARA compatible spectral proxy; source supplier, melt and chemistry unspecified)",
      role: "Negative member of the weakly negative L2a cemented subunit.",
      cemented: "L2a",
    },
    {
      id: 6,
      name: "G22",
      label: "G22 L2a biconvex positive",
      type: "Biconvex Positive",
      nd: 1.517417,
      vd: 52.4,
      focalLengthMm: 28.1,
      glass: "S-NSL36 (OHARA compatible spectral proxy; source supplier, melt and chemistry unspecified)",
      role: "Positive member of the L2a cemented subunit; D9=3.50 mm is an unconfirmed reconstruction of an omitted source thickness.",
      cemented: "L2a",
    },
    {
      id: 7,
      name: "G23",
      label: "G23 L2b biconvex positive",
      type: "Biconvex Positive",
      nd: 1.518229,
      vd: 58.9,
      focalLengthMm: 30.4,
      glass: "S-NSL3 (OHARA compatible spectral proxy; source supplier, melt and chemistry unspecified)",
      role: "Primary positive power element in the second lens unit, placed behind the stop.",
    },
    {
      id: 8,
      name: "G31",
      label: "L3 biconcave negative",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -22.4,
      glass: "S-LAH65V (OHARA compatible spectral proxy; source supplier, melt and chemistry unspecified)",
      role: "Strong negative member of the third unit, used for zoom compensation and principal-plane control.",
    },
    {
      id: 9,
      name: "G32",
      label: "L3 biconvex positive",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 40.7,
      glass: "S-TIH53 (OHARA compatible spectral proxy; source supplier, melt and chemistry unspecified)",
      role: "High-dispersion positive partner in the negative third unit.",
    },
    {
      id: 10,
      name: "N10",
      label: "L4 low-dispersion positive",
      type: "Biconvex Positive",
      nd: 1.496999,
      vd: 81.5,
      focalLengthMm: 35.2,
      glass: "S-FPL51 (OHARA compatible spectral proxy; source supplier, melt and chemistry unspecified)",
      apd: "inferred",
      apdNote:
        "Inferred from the low-dispersion coordinate and compatible S-FPL51 proxy; the source gives no position-specific partial dispersion or historical chemistry.",
      role: "Low-dispersion positive member of the first L4 cemented doublet.",
      cemented: "L4a",
    },
    {
      id: 11,
      name: "N11",
      label: "L4 front high-index negative",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -32.2,
      glass: "S-LAH60 (OHARA compatible spectral proxy; source supplier, melt and chemistry unspecified)",
      role: "High-index negative member paired with the low-dispersion positive in a near-zero-power chromatic corrector.",
      cemented: "L4a",
    },
    {
      id: 12,
      name: "N12",
      label: "L4 very-low-dispersion positive",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 95.0,
      focalLengthMm: 47.8,
      glass: "S-FPL53 (OHARA compatible spectral proxy; source supplier, melt and chemistry unspecified)",
      apd: "inferred",
      apdNote:
        "Inferred from the low-dispersion coordinate and compatible S-FPL53 proxy; a production Super-UD claim does not identify this numerical medium or its chemistry.",
      role: "Very-low-dispersion positive singlet in the relay group; historical chemistry unresolved.",
    },
    {
      id: 13,
      name: "N13",
      label: "L4 rear high-index negative",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -28.8,
      glass: "S-LAH60 (OHARA compatible spectral proxy; source supplier, melt and chemistry unspecified)",
      role: "High-index negative member of the rear L4 cemented doublet.",
      cemented: "L4b",
    },
    {
      id: 14,
      name: "N14",
      label: "L4 rear positive asphere",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.48456,
      vd: 70.0,
      focalLengthMm: 22.7,
      glass: "Unmatched low-index high-Abbe glass (485700; chemistry and catalog identity unresolved)",
      role: "Low-index, high-Abbe positive rear aspherical element governed by patent conditions (11) and (12).",
      cemented: "L4b",
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 15000.0,
      d: 3.5,
      sd: 25.0,
      medium: 1,
      asphere: { K: 0, A4: 2.337e-5, A6: -4.61e-8, A8: 7.457e-11, A10: -6.907e-14, A12: 2.825e-17 },
    },
    { label: "2", R: 18.867, d: 14.03, sd: 16.8, rimExtensionSd: 25 },
    { label: "3", R: -226.498, d: 1.3, sd: 13.0, medium: 2 },
    { label: "4", R: 18.212, d: 0.06, sd: 13.0, medium: 3 },
    {
      label: "5A",
      R: 16.99,
      d: 2.72,
      sd: 13.0,
      asphere: { K: 0, A4: 3.82416e-6, A6: -1.84863e-7, A8: 1.59788e-10, A10: 1.36095e-12, A12: -7.6224e-15 },
    },
    { label: "6", R: 21.759, d: 5.25, sd: 13.2, medium: 4 },
    { label: "7", R: 74.984, sd: 13.2 },
    { label: "8", R: 57.846, d: 1.25, sd: 6.2, medium: 5 },
    { label: "9", R: 15.171, d: 3.5, sd: 6.2, medium: 6 },
    { label: "10", R: -331.383, d: 1.54, sd: 6.2 },
    { label: "STO", R: "flat", d: 1.1 },
    { label: "12", R: 31.1, d: 2.55, sd: 6.9, medium: 7 },
    { label: "13", R: -31.1, sd: 6.9 },
    { label: "14", R: -29.031, d: 0.8, sd: 7.2, medium: 8 },
    { label: "15", R: 48.27, d: 0.94, sd: 7.2 },
    { label: "16", R: 35.215, d: 2.18, sd: 7.2, medium: 9 },
    { label: "17", R: -1475.794, sd: 7.2 },
    { label: "18", R: 20.163, d: 5.77, sd: 11, medium: 10 },
    { label: "19", R: -118.97, d: 1.0, sd: 11, medium: 11 },
    { label: "20", R: 34.753, d: 0.05, sd: 9.4, rimExtensionSd: 11 },
    { label: "21", R: 35.934, d: 4.15, sd: 9.4, rimExtensionSd: 11, medium: 12 },
    { label: "22", R: -48.578, d: 0.15, sd: 11 },
    { label: "23", R: 42.917, d: 1.0, sd: 11, medium: 13 },
    { label: "24", R: 15.239, d: 7.51, sd: 11, medium: 14 },
    {
      label: "25A",
      R: -33.295,
      sd: 11,
      asphere: { K: 0, A4: 2.79907e-5, A6: 9.77159e-8, A8: -1.24882e-10, A10: 2.46435e-12, A12: 1.04886e-14 },
    },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 10.3, nominalFNumber: 3.5, label: "10.3 mm" },
      { focalLengthMm: 15.0, nominalFNumber: 4.6 },
      { focalLengthMm: 21.4, nominalFNumber: 4.6, label: "21.4 mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.24,
    description:
      "Patent publishes infinity zoom spacings only. Production lens uses Canon ring-type USM inner focusing; close-focus travel is not specified in this prescription.",
  },

  gaps: {
    "7": {
      label: "D7 L1-L2",
      values: [
        [25.15, 25.15],
        [12.57, 12.57],
        [4.73, 4.73],
      ],
    },
    "13": {
      label: "D13 L2-L3",
      values: [
        [1.03, 1.03],
        [5.32, 5.32],
        [9.62, 9.62],
      ],
    },
    "17": {
      label: "D17 L3-L4",
      values: [
        [10.23, 10.23],
        [5.94, 5.94],
        [1.64, 1.64],
      ],
    },
    "25A": {
      label: "BF",
      values: [
        [35.2687836753, 35.2687836753],
        [41.9555803182, 41.9555803182],
        [51.9471394089, 51.9471394089],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22, 27], maxFNumber: 27, blades: 6 },

  groups: [
    { text: "L1", fromSurface: "1A", toSurface: "7" },
    { text: "L2a", fromSurface: "8", toSurface: "10" },
    { text: "L2b", fromSurface: "12", toSurface: "13" },
    { text: "L3", fromSurface: "14", toSurface: "17" },
    { text: "L4", fromSurface: "18", toSurface: "25A" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "5A" },
    { text: "L2a", fromSurface: "8", toSurface: "10" },
    { text: "L4a", fromSurface: "18", toSurface: "20" },
    { text: "L4b", fromSurface: "23", toSurface: "25A" },
  ],

  layout: { scFill: 0.62, yScFill: 0.74 },
} satisfies LensDataV2Input;

export default LENS_DATA;
