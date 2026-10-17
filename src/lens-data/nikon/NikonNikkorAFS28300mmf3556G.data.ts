import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — Nikon AF-S NIKKOR 28-300mm f/3.5-5.6G ED VR           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2010/0220400 A1, Example 2, Table 2.              ║
 * ║ Five moving zoom groups: G1+/G2-/G3+/G4-/G5+.                     ║
 * ║ Production specification: 19 glass elements / 14 groups.           ║
 * ║ Prescription includes a thin UV-cure resin layer on L43; it is     ║
 * ║ modeled as its own optical medium but not counted as a glass       ║
 * ║ element in the production element count.                           ║
 * ║                                                                    ║
 * ║ Focus: internal focusing by translating G2 toward the object.      ║
 * ║ Stabilization: cemented negative doublet L41+L42 in G4 shifts      ║
 * ║ laterally for vibration reduction.                                 ║
 * ║                                                                    ║
 * ║ Zoom variable gaps: D5, D13A, D22, D28, BFD.                       ║
 * ║ Focus variable gaps: D5 and D13A only.                             ║
 * ║                                                                    ║
 * ║ Semi-diameters are not patent-listed. They were inferred from      ║
 * ║ paraxial marginal/chief-ray envelopes and then constrained by      ║
 * ║ edge thickness, element SD ratio, the 77 mm filter envelope, and   ║
 * ║ cross-gap sag intrusion. The very narrow clear apertures around    ║
 * ║ surfaces 7-13A, 25-27A, and 33-35A are renderer-safe mechanical    ║
 * ║ apertures for tightly curved, thin-gapped lens pairs, not patent   ║
 * ║ numerical apertures. Surfaces 6A, 7, 10-13A and 34 were raised to  ║
 * ║ pass the traced chief ray at the patent's wide-end ω = 38.26°      ║
 * ║ (2ω = 76.52°); a thickness misprint in Table 2 keeps the full      ║
 * ║ 21.6 mm corner out of reach (2026-09-24 field-coverage audit).     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * Image-plane audit: Table 2 S16 prints .100 mm, corrected from 1.000.
 * Other R/d/nd/vd and aspheres match. At wide infinity the source now
 * yields EFL 28.447933 / BFL 39.244078 mm, versus printed 28.79 / 38.422.
 * Source total lengths also do not equal the tabulated spacing sums.
 * Preserve published Bf despite the +0.822078 mm residual; see audit.
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-nikkor-afs-28-300mm-f35-56g-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 28-300mm f/3.5-5.6 G ED VR",
  subtitle: "US 2010/0220400 A1 Example 2 — Nikon / Yamamoto et al.",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "28-300mm FX superzoom",
      "19 glass elements / 14 production groups",
      "2 ED elements / 3 marketed aspherical elements",
      "Internal focus by G2; VR group in G4",
    ],
    elementCount: 19,
    groupCount: 14,
    focalLengthMm: { marketing: [28, 300], design: [28.79, 292.0] },
  },

  source: {
    patentNumber: "US 2010/0220400 A1",
    patentYear: 2010,
    authors: ["Hiroshi Yamamoto", "Satoshi Miwa", "Takeshi Suzuki", "Haruo Sato"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "G1 front negative meniscus",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.27,
      focalLengthMm: -167.5,
      glass: "J-LASFH13 (HIKARI)",
      role: "High-index negative member of the front achromat; balances the ED crown L12 and moderates G1 power.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "G1 ED positive element",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.56,
      focalLengthMm: 131.2,
      glass: "J-FKH1 (HIKARI, ED fluorophosphate)",
      role: "Front-group ED crown used for telephoto-end axial color correction.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "G1 positive meniscus",
      type: "Positive Meniscus",
      nd: 1.603,
      vd: 65.47,
      focalLengthMm: 130.7,
      glass: "J-PSK03 (HIKARI)",
      role: "Additional positive collector in G1 with high Abbe number to limit added chromatic error.",
    },
    {
      id: 4,
      name: "L21",
      label: "G2 front aspherical variator lens",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.76546,
      vd: 46.73,
      focalLengthMm: -25.0,
      glass:
        "Q-LASFPH2S (HIKARI moulding glass, catalog 1.76544 / 46.75 against patent 1.76546 / 46.73; supplier unconfirmed)",
      role: "First negative variator element; object-side asphere corrects wide-angle field curvature and distortion.",
    },
    {
      id: 5,
      name: "L22",
      label: "G2 negative meniscus",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.58,
      focalLengthMm: -54.5,
      glass: "J-LASF015 (HIKARI) / S-LAH65V class",
      role: "Negative lens immediately before the strongest G2 positive element; its bending is governed by patent condition (1).",
    },
    {
      id: 6,
      name: "L23",
      label: "G2 biconvex positive lens",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 25.0,
      glass: "J-SF03 (HIKARI) / S-TIH53 class",
      role: "Strongest positive element in G2; balances the variator chromatic power and supports the zoom magnification change.",
    },
    {
      id: 7,
      name: "L24",
      label: "G2 rear aspherical negative lens",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.804,
      vd: 46.58,
      focalLengthMm: -28.2,
      glass: "J-LASF015 (HIKARI) / S-LAH65V class",
      role: "Rear variator negative element; image-side asphere corrects telephoto-end spherical aberration.",
    },
    {
      id: 8,
      name: "L31",
      label: "G3 relay positive lens",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.66,
      focalLengthMm: 46.8,
      glass: "J-LAK18 (HIKARI) / S-LAL18 class",
      role: "Positive relay element immediately after the aperture stop.",
    },
    {
      id: 9,
      name: "L32",
      label: "G3 ED positive lens",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.56,
      focalLengthMm: 41.6,
      glass: "J-FKH1 (HIKARI, ED fluorophosphate)",
      role: "Rear-system ED crown; paired with L33 to control longitudinal and lateral color.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L33",
      label: "G3 high-dispersion negative lens",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -55.5,
      glass: "J-SF03 (HIKARI) / S-TIH53 class",
      role: "High-dispersion partner for the ED L32 element in the first G3 achromat.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L34",
      label: "G3 negative meniscus",
      type: "Negative Meniscus",
      nd: 1.816,
      vd: 46.63,
      focalLengthMm: -37.4,
      glass: "J-LASF09A (HIKARI)",
      role: "Negative front member of the second G3 cemented pair; contributes chromatic and field correction.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L35",
      label: "G3 positive rear lens",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.89,
      focalLengthMm: 25.0,
      glass: "J-K3 (HIKARI) / S-NSL3 class",
      role: "Strong positive member closing G3 and sending the beam toward the VR group.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L41",
      label: "G4 VR negative lens",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.61,
      focalLengthMm: -17.0,
      glass: "J-LASF016 (HIKARI) / S-LAH66 class",
      role: "Primary negative-power member of the decentering VR doublet.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L42",
      label: "G4 VR positive meniscus",
      type: "Positive Meniscus",
      nd: 1.85026,
      vd: 32.34,
      focalLengthMm: 25.9,
      glass: "J-LASF021 (HIKARI) / S-LAH71 class",
      role: "High-index positive partner that achromatizes the VR doublet and reduces its net negative power.",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L43r",
      label: "G4 molded resin layer",
      type: "Hybrid Resin Layer",
      nd: 1.55389,
      vd: 38.09,
      focalLengthMm: 14603.3,
      glass: "UV-cure optical resin (patent-listed)",
      role: "Thin molded layer of a hybrid composite asphere; nearly neutral as a standalone layer.",
      cemented: "H1",
    },
    {
      id: 16,
      name: "L43g",
      label: "G4 hybrid glass substrate",
      type: "Negative Meniscus (hybrid asphere substrate)",
      nd: 1.72916,
      vd: 54.66,
      focalLengthMm: -64.6,
      glass: "J-LAK18 (HIKARI) / S-LAL18 class",
      role: "Glass substrate behind the molded resin layer; provides weak negative field-correction power.",
      cemented: "H1",
    },
    {
      id: 17,
      name: "L51",
      label: "G5 positive relay lens",
      type: "Biconvex Positive",
      nd: 1.56384,
      vd: 60.69,
      focalLengthMm: 36.3,
      glass: "J-SK11 (HIKARI)",
      role: "Primary positive element of G5; contributes rear convergence and exit-pupil placement.",
    },
    {
      id: 18,
      name: "L52",
      label: "G5 positive cemented lens",
      type: "Biconvex Positive",
      nd: 1.54814,
      vd: 45.79,
      focalLengthMm: 29.4,
      glass: "S-TIL1 (OHARA)",
      role: "Moderate-dispersion positive member of the rear cemented pair.",
      cemented: "D5",
    },
    {
      id: 19,
      name: "L53",
      label: "G5 dense flint negative lens",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.27,
      focalLengthMm: -46.9,
      glass: "J-LASFH13 (HIKARI)",
      role: "High-index negative partner of L52 for rear lateral-color correction.",
      cemented: "D5",
    },
    {
      id: 20,
      name: "L54",
      label: "G5 rear aspherical negative lens",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.8208,
      vd: 42.64,
      focalLengthMm: -45.1,
      glass: "M-TAFD51 (HOYA catalog-equivalent; patent supplier unspecified)",
      role: "Final negative field-flattener; rear asphere corrects residual field curvature and astigmatism.",
    },
  ],

  surfaces: [
    { label: "1", R: 125.8687, d: 2.0, sd: 38.0, medium: 1 },
    { label: "2", R: 68.2116, d: 9.3, sd: 31.0, medium: 2 },
    { label: "3", R: -1478.557, d: 0.1, sd: 31.0 },
    { label: "4", R: 68.1452, d: 6.7, sd: 30.0, medium: 3 },
    { label: "5", R: 484.4905, sd: 30.0 },

    {
      label: "6A",
      R: 590.856,
      d: 1.3,
      sd: 15.8,
      medium: 4,
      asphere: {
        K: -10.1146,
        A4: 6.3564e-6,
        A6: -7.7687e-9,
        A8: -2.5438e-11,
        A10: 1.9354e-13,
      },
    },
    { label: "7", R: 18.5437, d: 7.0, sd: 12.4 },
    { label: "8", R: -38.3401, d: 1.0, sd: 11.8, medium: 5 },
    { label: "9", R: -310.1534, d: 0.1, sd: 11.8 },
    { label: "10", R: 38.1237, d: 4.85, sd: 11.1, medium: 6 },
    { label: "11", R: -44.8791, d: 0.95, sd: 10.5 },
    { label: "12", R: -29.434, d: 1.0, sd: 10.0, medium: 7 },
    {
      label: "13A",
      R: 99.9238,
      sd: 9.4,
      asphere: {
        K: 0,
        A4: 1.0045e-6,
        A6: -1.4086e-8,
        A8: 9.7383e-12,
      },
    },

    { label: "STO", R: "flat", d: 0.5 },
    { label: "15", R: 53.396, d: 3.4, sd: 11.2, medium: 8 },
    { label: "16", R: -92.103, d: 0.1, sd: 11.2 },
    { label: "17", R: 39.7508, d: 5.0, sd: 11.5, medium: 9 },
    { label: "18", R: -41.4651, d: 1.0, sd: 11.5, medium: 10 },
    { label: "19", R: -356.7126, d: 0.1, sd: 11.5 },
    { label: "20", R: 32.9053, d: 1.4, sd: 10.8, medium: 11 },
    { label: "21", R: 15.5333, d: 6.6, sd: 10.8, medium: 12 },
    { label: "22", R: -67.2953, sd: 10.8 },

    { label: "23", R: -79.1792, d: 1.0, sd: 10.6, medium: 13 },
    { label: "24", R: 15.8779, d: 3.0, sd: 8.5, medium: 14 },
    { label: "25", R: 51.8482, d: 2.586, sd: 8.5 },
    { label: "26", R: -23.4054, d: 0.19, sd: 8.5, medium: 15 },
    {
      label: "27A",
      R: -23.4054,
      d: 1.2,
      sd: 9.5,
      medium: 16,
      asphere: {
        K: -1.2178,
        A4: 1.5514e-6,
        A6: 2.9382e-8,
        A8: 1.0938e-10,
      },
    },
    { label: "28", R: -47.548, sd: 9.5 },

    { label: "29", R: 83.9836, d: 5.6, sd: 13.5, medium: 17 },
    { label: "30", R: -26.428, d: 0.3, sd: 13.5 },
    { label: "31", R: 59.3963, d: 6.9, sd: 12.8, medium: 18 },
    { label: "32", R: -21.2296, d: 1.1, sd: 12.8, medium: 19 },
    { label: "33", R: -43.5914, d: 1.6, sd: 11.2 },
    { label: "34", R: -28.9812, d: 1.3, sd: 11.1, medium: 20 },
    {
      label: "35A",
      R: -136.6351,
      sd: 11.2,
      asphere: {
        K: 0,
        A4: -8.5226e-6,
        A6: 1.109e-8,
        A8: -4.8097e-11,
        A10: 1.463e-13,
      },
    },
  ],

  zoom: {
    // (moved from publishedStations) The close-focus row is source-tabulated.
    stations: [
      { focalLengthMm: 28.79, nominalFNumber: 3.57, label: "Wide", published: true, publishedFocus: [1] },
      { focalLengthMm: 100, nominalFNumber: 5.34, label: "Mid", published: true, publishedFocus: [1] },
      { focalLengthMm: 292, nominalFNumber: 5.96, label: "Tele", published: true, publishedFocus: [1] },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.5,
    description:
      "Internal focusing by moving the complete second lens group G2 toward the object; d5 decreases while d13A increases by the same amount.",
  },

  gaps: {
    "5": {
      label: "D1: G1-G2 / focus",
      values: [
        [2.534, 1.853],
        [37.442, 36.751],
        [63.214, 59.87],
      ],
    },
    "13A": {
      label: "D2: G2-STO / focus",
      values: [
        [30.341, 31.022],
        [13.263, 13.954],
        [1.585, 4.929],
      ],
    },
    "22": {
      label: "D3: G3-G4",
      values: [
        [2.961, 2.961],
        [6.701, 6.701],
        [7.803, 7.803],
      ],
    },
    "28": {
      label: "D4: G4-G5",
      values: [
        [6.152, 6.152],
        [2.412, 2.412],
        [1.31, 1.31],
      ],
    },
    "35A": {
      label: "BF",
      values: [
        [38.422, 38.422],
        [65.896, 65.896],
        [79.261, 79.261],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 38, blades: 9, bladeRoundedness: 0.85 },

  groups: [
    { text: "G1 +", fromSurface: "1", toSurface: "5" },
    { text: "G2 − / IF", fromSurface: "6A", toSurface: "13A" },
    { text: "G3 + / STO", fromSurface: "STO", toSurface: "22" },
    { text: "G4 − / VR", fromSurface: "23", toSurface: "28" },
    { text: "G5 +", fromSurface: "29", toSurface: "35A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
    { text: "D4 / VR", fromSurface: "23", toSurface: "25" },
    { text: "H1", fromSurface: "26", toSurface: "28" },
    { text: "D5", fromSurface: "31", toSurface: "33" },
  ],

  layout: { scFill: 0.62, yScFill: 0.74 },
} satisfies LensDataV2Input;

export default LENS_DATA;
