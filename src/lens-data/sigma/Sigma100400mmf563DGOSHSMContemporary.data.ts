/**
 * SIGMA 100-400mm f/5-6.3 DG OS HSM | Contemporary (C017, the DSLR lens, not the later DG DN) — JP 2017-223778 A
 * (Noriyuki Ogasawara, Sigma Corporation), Example 1 (数値実施例１), pp. 13–14, Fig. 1. R, d, nd, νd and the three printed
 * zoom states are the printed values, in mm, unscaled; every surface is spherical. The grant JP 6690425 B2 prints
 * identical tables. This is a related patent design, not a confirmed factory prescription.
 * Printed f = 103.16 / 200.12 / 387.95 mm, F 5.15 / 5.92 / 6.50, 2ω 23.36 / 12.01 / 6.21°, image height 21.63 mm,
 * BF 52.6388 / 79.0754 / 95.3018 mm; calculated EFL 103.165 / 200.119 / 387.949 mm. Marketed as 100-400 mm f/5-6.3.
 * Zoom: G2 stays fixed (claim 2, ¶0072–0073). The 43 stations between the printed ones are derived, not Sigma's factory
 * cam: D5, D15, BF and the sum D25 + D32 are linear between printed stations, which holds G2 at its printed position,
 * and only the G4 split between D25 and D32 is solved for paraxial infinity focus. D25 turns once, at the printed middle
 * station, and no other gap reverses. Interpolated focus error stays within 0.022 mm at infinity and 0.038 mm between
 * focus keys, against ±0.050 mm depth at F/6.5.
 * Focus: the patent prints infinity states only; G4 alone moves toward the object (claim 3, ¶0076). The 13 focus keys
 * move G4 that way, D25 shorter and D32 longer by the same amount, to Sigma's 1.6 m minimum focus distance measured
 * from the image plane. The travel is derived, not printed. Finite MTF stays unavailable without a printed conjugate.
 * Semi-diameters are not printed. They are estimated from the grant's Fig. 1 at the wide position, at 8.2175 px/mm over
 * 37 vertices, and floor-checked by real-ray trace at every printed zoom and focus state. The figure is isotropic to 1 %,
 * and the application's print of it has lost the glass lines. L3 32.9 and L19 11.8 mm are the figure's rims, and L1/L2
 * read 33.65 mm but stay at 33.4 mm, inside the 67 mm filter thread. Sigma's drawing shows 32.2, 30.8 and 14.2 mm there.
 * Fig. 1 draws flat lands on S10, S12, S13, S20, S24, S34 and S35. Cuts end the S12, S13 and S24 caps at 12.00, 11.59 and
 * 11.03 mm, on the figure's lands. Extensions end S10, S20, S34 and S35 at 12.2, 12.1, 10.7 and 11.7 mm and carry the
 * land out to 14.5, 13.0, 11.8 and 14.0 mm. Those caps are real clear apertures, where the drawn land, the on-axis beam
 * and the ends of the patent's meridional fans (Figs. 3, 6, 9) agree. Five more fan limits, S3 29.95, S6 19.66, S17 12.5, S27 11.28 and S28 11.31 mm, sit inside glass the figure draws to
 * its full edge and are not modeled, so corners pass more light than the fans imply. The stop radius follows the printed
 * F-numbers.
 * Stabilization: G2b (L7–L9) is the patent's shifting group (¶0073); the model is centred only.
 * Production correlation is inferred, not proven: Sigma lists 21 elements / 15 groups with four SLD elements, and its
 * construction drawing fits Example 1 at the wide position to 0.14 mm RMS over 32 surface positions, with SLD at L2, L3,
 * L18 and L20. Examples 2, 3 and 5 fit to 0.57, 1.20 and 0.74 mm, and Example 4 has 20 elements.
 * Glass names are catalog equivalents of the printed nd/νd; the patent gives no partial dispersion or supplier.
 */
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  publishedAt: "2026-10-31T00:00:00Z", // Requested catalog publication date, independent of commit timezone.
  key: "sigma-100-400-f5-63-dg-os-hsm-contemporary",
  maker: "Sigma",
  name: "SIGMA 100-400mm f/5-6.3 DG OS HSM | Contemporary",
  subtitle: "JP 2017-223778 A, Example 1 — related patent design",
  catalog: {
    lensMounts: ["sigma-sa", "canon-ef", "nikon-f"],
    imageFormat: "135-full-frame",
    elementCount: 21,
    groupCount: 15,
    focalLengthMm: {
      marketing: [100, 400],
      design: [103.16, 387.95],
    },
    fNumber: {
      marketing: 5,
      design: 5.15,
    },
    specs: [
      "21 ELEMENTS / 15 GROUPS",
      "DESIGN f = 103.16–387.95 mm",
      "DESIGN F/5.15–6.50",
      "ALL SPHERICAL",
      "4 SLD ELEMENTS",
    ],
  },
  source: {
    patentNumber: "JP 2017-223778 A",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 2017,
    authors: ["Noriyuki Ogasawara"],
    assignees: ["Sigma Corporation"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      indexReference: "d",
      glass: "TAFD5F (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative element of the front cemented doublet in G1",
      focalLengthMm: -150.66750753645778,
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Low-dispersion positive element of the front cemented doublet in G1",
      apd: "inferred",
      apdNote:
        "Sigma's construction diagram marks this position SLD; the patent prints nd/νd only, so partial dispersion comes from the catalog glass.",
      focalLengthMm: 149.27894332249974,
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Low-dispersion positive singlet closing the front group G1",
      apd: "inferred",
      apdNote:
        "Sigma's construction diagram marks this position SLD; the patent prints nd/νd only, so partial dispersion comes from the catalog glass.",
      focalLengthMm: 163.11595065767168,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30.05,
      indexReference: "d",
      glass: "E-FD15 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive component G2a1 at the front of the fixed second group",
      focalLengthMm: 187.61582925707015,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.54814,
      vd: 45.82,
      indexReference: "d",
      glass: "E-FEL1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive element of the negative cemented component G2a2",
      focalLengthMm: 161.10524381721513,
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.72,
      indexReference: "d",
      glass: "TAFD5F (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative element of the cemented component G2a2",
      focalLengthMm: -56.71433354109177,
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.67,
      indexReference: "d",
      glass: "TAC8 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Front negative element of the stabilizing subgroup G2b",
      focalLengthMm: -99.79893055503484,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.67,
      indexReference: "d",
      glass: "TAC8 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative element of the cemented doublet in G2b",
      focalLengthMm: -35.44490291318478,
      cemented: "C3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      indexReference: "d",
      glass: "S-NBH56 (OHARA catalog equivalent; production supplier unspecified)",
      role: "High-dispersion positive element of the cemented doublet in G2b",
      focalLengthMm: 69.28985528151078,
      cemented: "C3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      indexReference: "d",
      glass: "PCD51 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Biconvex front element of G3, which collects the diverging beam from G2",
      focalLengthMm: 65.57374653009896,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      indexReference: "d",
      glass: "PCD51 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Second biconvex element of G3, sharing the group's positive power",
      focalLengthMm: 91.75219522215892,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      glass: "TAFD55 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus in G3, offsetting the spherical aberration of the positive elements",
      focalLengthMm: -92.72736787550338,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30.05,
      indexReference: "d",
      glass: "E-FD15 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive element of the cemented doublet at the rear of G3",
      focalLengthMm: 85.8399201669258,
      cemented: "C4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      glass: "TAFD55 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative element of the rear G3 doublet, carrying the strong negative surface ahead of the stop",
      focalLengthMm: -67.23637008497924,
      cemented: "C4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      glass: "E-FD1L (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus at the front of the focusing group G4",
      focalLengthMm: 109.75041998645747,
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.65844,
      vd: 50.85,
      indexReference: "d",
      glass: "BACED5 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive element of the cemented doublet in the focusing group G4",
      focalLengthMm: 40.63848915562546,
      cemented: "C5",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.32,
      indexReference: "d",
      glass: "TAFD45 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative element of G4, limiting spherical and axial chromatic change during focusing",
      focalLengthMm: -37.49241075533875,
      cemented: "C5",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      indexReference: "d",
      glass: "FCD705 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Low-dispersion positive element at the rear of the focusing group G4",
      apd: "inferred",
      apdNote:
        "Sigma's construction diagram marks this position SLD; the patent prints nd/νd only, so partial dispersion comes from the catalog glass.",
      focalLengthMm: 87.82672043855513,
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.32,
      indexReference: "d",
      glass: "TAFD45 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus at the front of the rear group G5",
      focalLengthMm: -45.13820196150438,
    },
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Low-dispersion negative element of the rear cemented doublet in G5",
      apd: "inferred",
      apdNote:
        "Sigma's construction diagram marks this position SLD; the patent prints nd/νd only, so partial dispersion comes from the catalog glass.",
      focalLengthMm: -43.38014851405355,
      cemented: "C6",
    },
    {
      id: 21,
      name: "L21",
      label: "Element 21",
      type: "Biconvex Positive",
      nd: 1.738,
      vd: 32.26,
      indexReference: "d",
      glass: "S-NBH53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "High-dispersion positive element of the rear cemented doublet in G5",
      focalLengthMm: 37.05198903361657,
      cemented: "C6",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 316.5,
      sd: 33.4,
      medium: 1,
      d: 2.0,
    },
    {
      label: "2",
      R: 89.75,
      sd: 33.4,
      medium: 2,
      d: 8.2,
    },
    {
      label: "3",
      R: -415.0,
      sd: 33.4,
      d: 0.15,
    },
    {
      label: "4",
      R: 88.0,
      sd: 32.9,
      medium: 3,
      d: 7.53,
    },
    {
      label: "5",
      R: -1000.0,
      sd: 32.9,
    },
    {
      label: "6",
      R: 111.8,
      sd: 21.0,
      medium: 4,
      d: 2.97,
    },
    {
      label: "7",
      R: 750.0,
      sd: 21.0,
      d: 13.41,
    },
    {
      label: "8",
      R: 340.0,
      sd: 14.5,
      medium: 5,
      d: 2.35,
    },
    {
      label: "9",
      R: -119.0,
      sd: 14.5,
      medium: 6,
      d: 0.9,
    },
    {
      label: "10",
      R: 78.9,
      sd: 12.2,
      rimExtensionSd: 14.5,
      d: 6.15,
    },
    {
      label: "11",
      R: -340.0,
      sd: 12.5,
      medium: 7,
      d: 1.0,
    },
    {
      label: "12",
      R: 92.7,
      sd: 12.5,
      rimCutDepthMm: 0.78,
      d: 2.35,
    },
    {
      label: "13",
      R: -51.9,
      sd: 12.7,
      rimCutDepthMm: 1.31,
      medium: 8,
      d: 1.0,
    },
    {
      label: "14",
      R: 51.9,
      sd: 12.7,
      medium: 9,
      d: 2.55,
    },
    {
      label: "15",
      R: 410.0,
      sd: 12.7,
    },
    {
      label: "16",
      R: 118.0,
      sd: 13.5,
      medium: 10,
      d: 3.65,
    },
    {
      label: "17",
      R: -57.4,
      sd: 13.5,
      d: 0.15,
    },
    {
      label: "18",
      R: 60.9,
      sd: 13.3,
      medium: 11,
      d: 2.85,
    },
    {
      label: "19",
      R: -505.5,
      sd: 13.3,
      d: 0.86,
    },
    {
      label: "20",
      R: -81.0,
      sd: 12.1,
      rimExtensionSd: 13.0,
      medium: 12,
      d: 1.0,
    },
    {
      label: "21",
      R: -640.0,
      sd: 13.0,
      d: 0.15,
    },
    {
      label: "22",
      R: 28.29,
      sd: 12.8,
      medium: 13,
      d: 4.15,
    },
    {
      label: "23",
      R: 50.3,
      sd: 12.8,
      medium: 14,
      d: 1.0,
    },
    {
      label: "24",
      R: 28.5,
      sd: 12.8,
      rimCutDepthMm: 2.22,
      d: 4.1,
    },
    {
      label: "STO",
      R: "flat",
    },
    {
      label: "26",
      R: -1000.0,
      sd: 12.5,
      medium: 15,
      d: 2.15,
    },
    {
      label: "27",
      R: -73.05,
      sd: 12.5,
      d: 0.15,
    },
    {
      label: "28",
      R: 65.0,
      sd: 12.5,
      medium: 16,
      d: 4.25,
    },
    {
      label: "29",
      R: -44.3,
      sd: 12.5,
      medium: 17,
      d: 1.0,
    },
    {
      label: "30",
      R: 187.5,
      sd: 12.5,
      d: 0.25,
    },
    {
      label: "31",
      R: 57.7,
      sd: 12.5,
      medium: 18,
      d: 2.85,
    },
    {
      label: "32",
      R: -292.5,
      sd: 12.5,
    },
    {
      label: "33",
      R: 77.95,
      sd: 11.8,
      medium: 19,
      d: 1.0,
    },
    {
      label: "34",
      R: 27.56,
      sd: 10.7,
      rimExtensionSd: 11.8,
      d: 6.9,
    },
    {
      label: "35",
      R: -77.95,
      sd: 11.7,
      rimExtensionSd: 14.0,
      medium: 20,
      d: 1.0,
    },
    {
      label: "36",
      R: 29.93,
      sd: 14.0,
      medium: 21,
      d: 5.35,
    },
    {
      label: "37",
      R: -292.5,
      sd: 14.0,
    },
  ],
  zoom: {
    stations: [
      {
        focalLengthMm: 103.16,
        nominalFNumber: 5.15,
        published: true,
      },
      {
        focalLengthMm: 111.58278108612684,
        nominalFNumber: 5.246250000000001,
        published: false,
      },
      {
        focalLengthMm: 120.82046004003931,
        nominalFNumber: 5.3425,
        published: false,
      },
      {
        focalLengthMm: 125.77740053234251,
        nominalFNumber: 5.390625,
        published: false,
      },
      {
        focalLengthMm: 130.97758156452218,
        nominalFNumber: 5.43875,
        published: false,
      },
      {
        focalLengthMm: 136.43549288458195,
        nominalFNumber: 5.4868749999999995,
        published: false,
      },
      {
        focalLengthMm: 142.1666030316184,
        nominalFNumber: 5.535,
        published: false,
      },
      {
        focalLengthMm: 148.1874486384499,
        nominalFNumber: 5.583125000000001,
        published: false,
      },
      {
        focalLengthMm: 154.51573884357677,
        nominalFNumber: 5.6312500000000005,
        published: false,
      },
      {
        focalLengthMm: 161.17047895489299,
        nominalFNumber: 5.679375,
        published: false,
      },
      {
        focalLengthMm: 168.17211881604757,
        nominalFNumber: 5.727499999999999,
        published: false,
      },
      {
        focalLengthMm: 175.54273306928505,
        nominalFNumber: 5.775625,
        published: false,
      },
      {
        focalLengthMm: 179.37380171337995,
        nominalFNumber: 5.7996875,
        published: false,
      },
      {
        focalLengthMm: 183.3062428429003,
        nominalFNumber: 5.8237499999999995,
        published: false,
      },
      {
        focalLengthMm: 187.34338030407324,
        nominalFNumber: 5.8478125,
        published: false,
      },
      {
        focalLengthMm: 191.4886915393202,
        nominalFNumber: 5.871875,
        published: false,
      },
      {
        focalLengthMm: 195.74582040979485,
        nominalFNumber: 5.8959375000000005,
        published: false,
      },
      {
        focalLengthMm: 200.12,
        nominalFNumber: 5.92,
        published: true,
      },
      {
        focalLengthMm: 208.47914884023876,
        nominalFNumber: 5.95625,
        published: false,
      },
      {
        focalLengthMm: 217.2195511554672,
        nominalFNumber: 5.9925,
        published: false,
      },
      {
        focalLengthMm: 226.35430989595577,
        nominalFNumber: 6.02875,
        published: false,
      },
      {
        focalLengthMm: 235.89789425805765,
        nominalFNumber: 6.0649999999999995,
        published: false,
      },
      {
        focalLengthMm: 240.82749845896853,
        nominalFNumber: 6.083125,
        published: false,
      },
      {
        focalLengthMm: 245.86470254286755,
        nominalFNumber: 6.10125,
        published: false,
      },
      {
        focalLengthMm: 251.01129591481333,
        nominalFNumber: 6.119375,
        published: false,
      },
      {
        focalLengthMm: 256.26906673489486,
        nominalFNumber: 6.1375,
        published: false,
      },
      {
        focalLengthMm: 261.63980517077465,
        nominalFNumber: 6.155625000000001,
        published: false,
      },
      {
        focalLengthMm: 267.1253079991751,
        nominalFNumber: 6.17375,
        published: false,
      },
      {
        focalLengthMm: 272.72738479982627,
        nominalFNumber: 6.191875,
        published: false,
      },
      {
        focalLengthMm: 278.4478660175941,
        nominalFNumber: 6.21,
        published: false,
      },
      {
        focalLengthMm: 284.28861320461004,
        nominalFNumber: 6.228125,
        published: false,
      },
      {
        focalLengthMm: 290.25153179484727,
        nominalFNumber: 6.24625,
        published: false,
      },
      {
        focalLengthMm: 296.33858680952756,
        nominalFNumber: 6.264374999999999,
        published: false,
      },
      {
        focalLengthMm: 302.55182194414897,
        nominalFNumber: 6.2825,
        published: false,
      },
      {
        focalLengthMm: 308.8933825480223,
        nominalFNumber: 6.300625,
        published: false,
      },
      {
        focalLengthMm: 315.3655430769007,
        nominalFNumber: 6.31875,
        published: false,
      },
      {
        focalLengthMm: 321.97073968078934,
        nominalFNumber: 6.336875,
        published: false,
      },
      {
        focalLengthMm: 328.7116086853705,
        nominalFNumber: 6.355,
        published: false,
      },
      {
        focalLengthMm: 335.5910318405285,
        nominalFNumber: 6.373125,
        published: false,
      },
      {
        focalLengthMm: 342.61218934837063,
        nominalFNumber: 6.391249999999999,
        published: false,
      },
      {
        focalLengthMm: 349.77862185246016,
        nominalFNumber: 6.409375,
        published: false,
      },
      {
        focalLengthMm: 357.0943027785625,
        nominalFNumber: 6.4275,
        published: false,
      },
      {
        focalLengthMm: 364.5637226765158,
        nominalFNumber: 6.445625,
        published: false,
      },
      {
        focalLengthMm: 372.1919875369008,
        nominalFNumber: 6.46375,
        published: false,
      },
      {
        focalLengthMm: 379.9849334707879,
        nominalFNumber: 6.481875,
        published: false,
      },
      {
        focalLengthMm: 387.95,
        nominalFNumber: 6.5,
        published: true,
      },
    ],
  },
  focus: {
    closeFocusM: 1.6,
    keyframes: [
      0, 0.125, 0.25, 0.375, 0.5, 0.5625, 0.625, 0.6875, 0.75, 0.8125, 0.875, 0.9375, 1.0,
    ],
    description:
      "Inner focus. The patent prints infinity spacings only and states that G4 alone moves toward the object (claim 3, ¶0076). Here G4 moves that way, D25 shorter and D32 longer by the same amount, with G2 and the image plane fixed, to Sigma's 1.6 m minimum focus distance measured from the image plane. The travel is derived, not printed: 1.63 mm at the wide position, 4.05 mm at the middle position and 12.45 mm at the tele position. Finite MTF is unavailable because the patent publishes no finite conjugate. The stabilizer stays centred.",
  },
  gaps: {
    "5": {
      label: "D5",
      values: [
        [4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0],
        [
          8.7117125, 8.7117125, 8.7117125, 8.7117125, 8.7117125, 8.7117125, 8.7117125, 8.7117125, 8.7117125, 8.7117125,
          8.7117125, 8.7117125, 8.7117125,
        ],
        [
          13.423425, 13.423425, 13.423425, 13.423425, 13.423425, 13.423425, 13.423425, 13.423425, 13.423425, 13.423425,
          13.423425, 13.423425, 13.423425,
        ],
        [
          15.77928125, 15.77928125, 15.77928125, 15.77928125, 15.77928125, 15.77928125, 15.77928125, 15.77928125,
          15.77928125, 15.77928125, 15.77928125, 15.77928125, 15.77928125,
        ],
        [
          18.1351375, 18.1351375, 18.1351375, 18.1351375, 18.1351375, 18.1351375, 18.1351375, 18.1351375, 18.1351375,
          18.1351375, 18.1351375, 18.1351375, 18.1351375,
        ],
        [
          20.49099375, 20.49099375, 20.49099375, 20.49099375, 20.49099375, 20.49099375, 20.49099375, 20.49099375,
          20.49099375, 20.49099375, 20.49099375, 20.49099375, 20.49099375,
        ],
        [
          22.84685, 22.84685, 22.84685, 22.84685, 22.84685, 22.84685, 22.84685, 22.84685, 22.84685, 22.84685, 22.84685,
          22.84685, 22.84685,
        ],
        [
          25.20270625, 25.20270625, 25.20270625, 25.20270625, 25.20270625, 25.20270625, 25.20270625, 25.20270625,
          25.20270625, 25.20270625, 25.20270625, 25.20270625, 25.20270625,
        ],
        [
          27.5585625, 27.5585625, 27.5585625, 27.5585625, 27.5585625, 27.5585625, 27.5585625, 27.5585625, 27.5585625,
          27.5585625, 27.5585625, 27.5585625, 27.5585625,
        ],
        [
          29.91441875, 29.91441875, 29.91441875, 29.91441875, 29.91441875, 29.91441875, 29.91441875, 29.91441875,
          29.91441875, 29.91441875, 29.91441875, 29.91441875, 29.91441875,
        ],
        [
          32.270275, 32.270275, 32.270275, 32.270275, 32.270275, 32.270275, 32.270275, 32.270275, 32.270275, 32.270275,
          32.270275, 32.270275, 32.270275,
        ],
        [
          34.62613125, 34.62613125, 34.62613125, 34.62613125, 34.62613125, 34.62613125, 34.62613125, 34.62613125,
          34.62613125, 34.62613125, 34.62613125, 34.62613125, 34.62613125,
        ],
        [
          35.804059375, 35.804059375, 35.804059375, 35.804059375, 35.804059375, 35.804059375, 35.804059375,
          35.804059375, 35.804059375, 35.804059375, 35.804059375, 35.804059375, 35.804059375,
        ],
        [
          36.9819875, 36.9819875, 36.9819875, 36.9819875, 36.9819875, 36.9819875, 36.9819875, 36.9819875, 36.9819875,
          36.9819875, 36.9819875, 36.9819875, 36.9819875,
        ],
        [
          38.159915625, 38.159915625, 38.159915625, 38.159915625, 38.159915625, 38.159915625, 38.159915625,
          38.159915625, 38.159915625, 38.159915625, 38.159915625, 38.159915625, 38.159915625,
        ],
        [
          39.33784375, 39.33784375, 39.33784375, 39.33784375, 39.33784375, 39.33784375, 39.33784375, 39.33784375,
          39.33784375, 39.33784375, 39.33784375, 39.33784375, 39.33784375,
        ],
        [
          40.515771875, 40.515771875, 40.515771875, 40.515771875, 40.515771875, 40.515771875, 40.515771875,
          40.515771875, 40.515771875, 40.515771875, 40.515771875, 40.515771875, 40.515771875,
        ],
        [
          41.6937, 41.6937, 41.6937, 41.6937, 41.6937, 41.6937, 41.6937, 41.6937, 41.6937, 41.6937, 41.6937, 41.6937,
          41.6937,
        ],
        [
          43.081593749999996, 43.081593749999996, 43.081593749999996, 43.081593749999996, 43.081593749999996,
          43.081593749999996, 43.081593749999996, 43.081593749999996, 43.081593749999996, 43.081593749999996,
          43.081593749999996, 43.081593749999996, 43.081593749999996,
        ],
        [
          44.4694875, 44.4694875, 44.4694875, 44.4694875, 44.4694875, 44.4694875, 44.4694875, 44.4694875, 44.4694875,
          44.4694875, 44.4694875, 44.4694875, 44.4694875,
        ],
        [
          45.85738125, 45.85738125, 45.85738125, 45.85738125, 45.85738125, 45.85738125, 45.85738125, 45.85738125,
          45.85738125, 45.85738125, 45.85738125, 45.85738125, 45.85738125,
        ],
        [
          47.245275, 47.245275, 47.245275, 47.245275, 47.245275, 47.245275, 47.245275, 47.245275, 47.245275, 47.245275,
          47.245275, 47.245275, 47.245275,
        ],
        [
          47.939221875, 47.939221875, 47.939221875, 47.939221875, 47.939221875, 47.939221875, 47.939221875,
          47.939221875, 47.939221875, 47.939221875, 47.939221875, 47.939221875, 47.939221875,
        ],
        [
          48.633168749999996, 48.633168749999996, 48.633168749999996, 48.633168749999996, 48.633168749999996,
          48.633168749999996, 48.633168749999996, 48.633168749999996, 48.633168749999996, 48.633168749999996,
          48.633168749999996, 48.633168749999996, 48.633168749999996,
        ],
        [
          49.327115625, 49.327115625, 49.327115625, 49.327115625, 49.327115625, 49.327115625, 49.327115625,
          49.327115625, 49.327115625, 49.327115625, 49.327115625, 49.327115625, 49.327115625,
        ],
        [
          50.0210625, 50.0210625, 50.0210625, 50.0210625, 50.0210625, 50.0210625, 50.0210625, 50.0210625, 50.0210625,
          50.0210625, 50.0210625, 50.0210625, 50.0210625,
        ],
        [
          50.715009374999994, 50.715009374999994, 50.715009374999994, 50.715009374999994, 50.715009374999994,
          50.715009374999994, 50.715009374999994, 50.715009374999994, 50.715009374999994, 50.715009374999994,
          50.715009374999994, 50.715009374999994, 50.715009374999994,
        ],
        [
          51.40895625, 51.40895625, 51.40895625, 51.40895625, 51.40895625, 51.40895625, 51.40895625, 51.40895625,
          51.40895625, 51.40895625, 51.40895625, 51.40895625, 51.40895625,
        ],
        [
          52.102903125, 52.102903125, 52.102903125, 52.102903125, 52.102903125, 52.102903125, 52.102903125,
          52.102903125, 52.102903125, 52.102903125, 52.102903125, 52.102903125, 52.102903125,
        ],
        [
          52.79685, 52.79685, 52.79685, 52.79685, 52.79685, 52.79685, 52.79685, 52.79685, 52.79685, 52.79685, 52.79685,
          52.79685, 52.79685,
        ],
        [
          53.490796875, 53.490796875, 53.490796875, 53.490796875, 53.490796875, 53.490796875, 53.490796875,
          53.490796875, 53.490796875, 53.490796875, 53.490796875, 53.490796875, 53.490796875,
        ],
        [
          54.18474375, 54.18474375, 54.18474375, 54.18474375, 54.18474375, 54.18474375, 54.18474375, 54.18474375,
          54.18474375, 54.18474375, 54.18474375, 54.18474375, 54.18474375,
        ],
        [
          54.878690625, 54.878690625, 54.878690625, 54.878690625, 54.878690625, 54.878690625, 54.878690625,
          54.878690625, 54.878690625, 54.878690625, 54.878690625, 54.878690625, 54.878690625,
        ],
        [
          55.5726375, 55.5726375, 55.5726375, 55.5726375, 55.5726375, 55.5726375, 55.5726375, 55.5726375, 55.5726375,
          55.5726375, 55.5726375, 55.5726375, 55.5726375,
        ],
        [
          56.266584374999994, 56.266584374999994, 56.266584374999994, 56.266584374999994, 56.266584374999994,
          56.266584374999994, 56.266584374999994, 56.266584374999994, 56.266584374999994, 56.266584374999994,
          56.266584374999994, 56.266584374999994, 56.266584374999994,
        ],
        [
          56.96053125, 56.96053125, 56.96053125, 56.96053125, 56.96053125, 56.96053125, 56.96053125, 56.96053125,
          56.96053125, 56.96053125, 56.96053125, 56.96053125, 56.96053125,
        ],
        [
          57.654478125, 57.654478125, 57.654478125, 57.654478125, 57.654478125, 57.654478125, 57.654478125,
          57.654478125, 57.654478125, 57.654478125, 57.654478125, 57.654478125, 57.654478125,
        ],
        [
          58.348425, 58.348425, 58.348425, 58.348425, 58.348425, 58.348425, 58.348425, 58.348425, 58.348425, 58.348425,
          58.348425, 58.348425, 58.348425,
        ],
        [
          59.042371875, 59.042371875, 59.042371875, 59.042371875, 59.042371875, 59.042371875, 59.042371875,
          59.042371875, 59.042371875, 59.042371875, 59.042371875, 59.042371875, 59.042371875,
        ],
        [
          59.736318749999995, 59.736318749999995, 59.736318749999995, 59.736318749999995, 59.736318749999995,
          59.736318749999995, 59.736318749999995, 59.736318749999995, 59.736318749999995, 59.736318749999995,
          59.736318749999995, 59.736318749999995, 59.736318749999995,
        ],
        [
          60.430265625, 60.430265625, 60.430265625, 60.430265625, 60.430265625, 60.430265625, 60.430265625,
          60.430265625, 60.430265625, 60.430265625, 60.430265625, 60.430265625, 60.430265625,
        ],
        [
          61.1242125, 61.1242125, 61.1242125, 61.1242125, 61.1242125, 61.1242125, 61.1242125, 61.1242125, 61.1242125,
          61.1242125, 61.1242125, 61.1242125, 61.1242125,
        ],
        [
          61.81815937499999, 61.81815937499999, 61.81815937499999, 61.81815937499999, 61.81815937499999,
          61.81815937499999, 61.81815937499999, 61.81815937499999, 61.81815937499999, 61.81815937499999,
          61.81815937499999, 61.81815937499999, 61.81815937499999,
        ],
        [
          62.51210625, 62.51210625, 62.51210625, 62.51210625, 62.51210625, 62.51210625, 62.51210625, 62.51210625,
          62.51210625, 62.51210625, 62.51210625, 62.51210625, 62.51210625,
        ],
        [
          63.206053125, 63.206053125, 63.206053125, 63.206053125, 63.206053125, 63.206053125, 63.206053125,
          63.206053125, 63.206053125, 63.206053125, 63.206053125, 63.206053125, 63.206053125,
        ],
        [
          63.9, 63.9, 63.9, 63.9, 63.9, 63.9, 63.9, 63.9, 63.9, 63.9, 63.9, 63.9, 63.9,
        ],
      ],
    },
    "15": {
      label: "D15",
      values: [
        [
          27.7, 27.7, 27.7, 27.7, 27.7, 27.7, 27.7, 27.7, 27.7, 27.7, 27.7, 27.7, 27.7,
        ],
        [
          26.885275, 26.885275, 26.885275, 26.885275, 26.885275, 26.885275, 26.885275, 26.885275, 26.885275, 26.885275,
          26.885275, 26.885275, 26.885275,
        ],
        [
          26.070549999999997, 26.070549999999997, 26.070549999999997, 26.070549999999997, 26.070549999999997,
          26.070549999999997, 26.070549999999997, 26.070549999999997, 26.070549999999997, 26.070549999999997,
          26.070549999999997, 26.070549999999997, 26.070549999999997,
        ],
        [
          25.6631875, 25.6631875, 25.6631875, 25.6631875, 25.6631875, 25.6631875, 25.6631875, 25.6631875, 25.6631875,
          25.6631875, 25.6631875, 25.6631875, 25.6631875,
        ],
        [
          25.255825, 25.255825, 25.255825, 25.255825, 25.255825, 25.255825, 25.255825, 25.255825, 25.255825, 25.255825,
          25.255825, 25.255825, 25.255825,
        ],
        [
          24.8484625, 24.8484625, 24.8484625, 24.8484625, 24.8484625, 24.8484625, 24.8484625, 24.8484625, 24.8484625,
          24.8484625, 24.8484625, 24.8484625, 24.8484625,
        ],
        [
          24.4411, 24.4411, 24.4411, 24.4411, 24.4411, 24.4411, 24.4411, 24.4411, 24.4411, 24.4411, 24.4411, 24.4411,
          24.4411,
        ],
        [
          24.0337375, 24.0337375, 24.0337375, 24.0337375, 24.0337375, 24.0337375, 24.0337375, 24.0337375, 24.0337375,
          24.0337375, 24.0337375, 24.0337375, 24.0337375,
        ],
        [
          23.626375, 23.626375, 23.626375, 23.626375, 23.626375, 23.626375, 23.626375, 23.626375, 23.626375, 23.626375,
          23.626375, 23.626375, 23.626375,
        ],
        [
          23.2190125, 23.2190125, 23.2190125, 23.2190125, 23.2190125, 23.2190125, 23.2190125, 23.2190125, 23.2190125,
          23.2190125, 23.2190125, 23.2190125, 23.2190125,
        ],
        [
          22.81165, 22.81165, 22.81165, 22.81165, 22.81165, 22.81165, 22.81165, 22.81165, 22.81165, 22.81165, 22.81165,
          22.81165, 22.81165,
        ],
        [
          22.404287500000002, 22.404287500000002, 22.404287500000002, 22.404287500000002, 22.404287500000002,
          22.404287500000002, 22.404287500000002, 22.404287500000002, 22.404287500000002, 22.404287500000002,
          22.404287500000002, 22.404287500000002, 22.404287500000002,
        ],
        [
          22.20060625, 22.20060625, 22.20060625, 22.20060625, 22.20060625, 22.20060625, 22.20060625, 22.20060625,
          22.20060625, 22.20060625, 22.20060625, 22.20060625, 22.20060625,
        ],
        [
          21.996925, 21.996925, 21.996925, 21.996925, 21.996925, 21.996925, 21.996925, 21.996925, 21.996925, 21.996925,
          21.996925, 21.996925, 21.996925,
        ],
        [
          21.793243750000002, 21.793243750000002, 21.793243750000002, 21.793243750000002, 21.793243750000002,
          21.793243750000002, 21.793243750000002, 21.793243750000002, 21.793243750000002, 21.793243750000002,
          21.793243750000002, 21.793243750000002, 21.793243750000002,
        ],
        [
          21.5895625, 21.5895625, 21.5895625, 21.5895625, 21.5895625, 21.5895625, 21.5895625, 21.5895625, 21.5895625,
          21.5895625, 21.5895625, 21.5895625, 21.5895625,
        ],
        [
          21.385881250000004, 21.385881250000004, 21.385881250000004, 21.385881250000004, 21.385881250000004,
          21.385881250000004, 21.385881250000004, 21.385881250000004, 21.385881250000004, 21.385881250000004,
          21.385881250000004, 21.385881250000004, 21.385881250000004,
        ],
        [
          21.1822, 21.1822, 21.1822, 21.1822, 21.1822, 21.1822, 21.1822, 21.1822, 21.1822, 21.1822, 21.1822, 21.1822,
          21.1822,
        ],
        [
          20.0770625, 20.0770625, 20.0770625, 20.0770625, 20.0770625, 20.0770625, 20.0770625, 20.0770625, 20.0770625,
          20.0770625, 20.0770625, 20.0770625, 20.0770625,
        ],
        [
          18.971925000000002, 18.971925000000002, 18.971925000000002, 18.971925000000002, 18.971925000000002,
          18.971925000000002, 18.971925000000002, 18.971925000000002, 18.971925000000002, 18.971925000000002,
          18.971925000000002, 18.971925000000002, 18.971925000000002,
        ],
        [
          17.8667875, 17.8667875, 17.8667875, 17.8667875, 17.8667875, 17.8667875, 17.8667875, 17.8667875, 17.8667875,
          17.8667875, 17.8667875, 17.8667875, 17.8667875,
        ],
        [
          16.761650000000003, 16.761650000000003, 16.761650000000003, 16.761650000000003, 16.761650000000003,
          16.761650000000003, 16.761650000000003, 16.761650000000003, 16.761650000000003, 16.761650000000003,
          16.761650000000003, 16.761650000000003, 16.761650000000003,
        ],
        [
          16.20908125, 16.20908125, 16.20908125, 16.20908125, 16.20908125, 16.20908125, 16.20908125, 16.20908125,
          16.20908125, 16.20908125, 16.20908125, 16.20908125, 16.20908125,
        ],
        [
          15.656512500000002, 15.656512500000002, 15.656512500000002, 15.656512500000002, 15.656512500000002,
          15.656512500000002, 15.656512500000002, 15.656512500000002, 15.656512500000002, 15.656512500000002,
          15.656512500000002, 15.656512500000002, 15.656512500000002,
        ],
        [
          15.103943750000001, 15.103943750000001, 15.103943750000001, 15.103943750000001, 15.103943750000001,
          15.103943750000001, 15.103943750000001, 15.103943750000001, 15.103943750000001, 15.103943750000001,
          15.103943750000001, 15.103943750000001, 15.103943750000001,
        ],
        [
          14.551375, 14.551375, 14.551375, 14.551375, 14.551375, 14.551375, 14.551375, 14.551375, 14.551375, 14.551375,
          14.551375, 14.551375, 14.551375,
        ],
        [
          13.998806250000001, 13.998806250000001, 13.998806250000001, 13.998806250000001, 13.998806250000001,
          13.998806250000001, 13.998806250000001, 13.998806250000001, 13.998806250000001, 13.998806250000001,
          13.998806250000001, 13.998806250000001, 13.998806250000001,
        ],
        [
          13.4462375, 13.4462375, 13.4462375, 13.4462375, 13.4462375, 13.4462375, 13.4462375, 13.4462375, 13.4462375,
          13.4462375, 13.4462375, 13.4462375, 13.4462375,
        ],
        [
          12.893668750000002, 12.893668750000002, 12.893668750000002, 12.893668750000002, 12.893668750000002,
          12.893668750000002, 12.893668750000002, 12.893668750000002, 12.893668750000002, 12.893668750000002,
          12.893668750000002, 12.893668750000002, 12.893668750000002,
        ],
        [
          12.3411, 12.3411, 12.3411, 12.3411, 12.3411, 12.3411, 12.3411, 12.3411, 12.3411, 12.3411, 12.3411, 12.3411,
          12.3411,
        ],
        [
          11.78853125, 11.78853125, 11.78853125, 11.78853125, 11.78853125, 11.78853125, 11.78853125, 11.78853125,
          11.78853125, 11.78853125, 11.78853125, 11.78853125, 11.78853125,
        ],
        [
          11.235962500000001, 11.235962500000001, 11.235962500000001, 11.235962500000001, 11.235962500000001,
          11.235962500000001, 11.235962500000001, 11.235962500000001, 11.235962500000001, 11.235962500000001,
          11.235962500000001, 11.235962500000001, 11.235962500000001,
        ],
        [
          10.68339375, 10.68339375, 10.68339375, 10.68339375, 10.68339375, 10.68339375, 10.68339375, 10.68339375,
          10.68339375, 10.68339375, 10.68339375, 10.68339375, 10.68339375,
        ],
        [
          10.130825000000002, 10.130825000000002, 10.130825000000002, 10.130825000000002, 10.130825000000002,
          10.130825000000002, 10.130825000000002, 10.130825000000002, 10.130825000000002, 10.130825000000002,
          10.130825000000002, 10.130825000000002, 10.130825000000002,
        ],
        [
          9.57825625, 9.57825625, 9.57825625, 9.57825625, 9.57825625, 9.57825625, 9.57825625, 9.57825625, 9.57825625,
          9.57825625, 9.57825625, 9.57825625, 9.57825625,
        ],
        [
          9.0256875, 9.0256875, 9.0256875, 9.0256875, 9.0256875, 9.0256875, 9.0256875, 9.0256875, 9.0256875, 9.0256875,
          9.0256875, 9.0256875, 9.0256875,
        ],
        [
          8.473118750000001, 8.473118750000001, 8.473118750000001, 8.473118750000001, 8.473118750000001,
          8.473118750000001, 8.473118750000001, 8.473118750000001, 8.473118750000001, 8.473118750000001,
          8.473118750000001, 8.473118750000001, 8.473118750000001,
        ],
        [
          7.92055, 7.92055, 7.92055, 7.92055, 7.92055, 7.92055, 7.92055, 7.92055, 7.92055, 7.92055, 7.92055, 7.92055,
          7.92055,
        ],
        [
          7.367981250000001, 7.367981250000001, 7.367981250000001, 7.367981250000001, 7.367981250000001,
          7.367981250000001, 7.367981250000001, 7.367981250000001, 7.367981250000001, 7.367981250000001,
          7.367981250000001, 7.367981250000001, 7.367981250000001,
        ],
        [
          6.815412500000001, 6.815412500000001, 6.815412500000001, 6.815412500000001, 6.815412500000001,
          6.815412500000001, 6.815412500000001, 6.815412500000001, 6.815412500000001, 6.815412500000001,
          6.815412500000001, 6.815412500000001, 6.815412500000001,
        ],
        [
          6.26284375, 6.26284375, 6.26284375, 6.26284375, 6.26284375, 6.26284375, 6.26284375, 6.26284375, 6.26284375,
          6.26284375, 6.26284375, 6.26284375, 6.26284375,
        ],
        [
          5.710275, 5.710275, 5.710275, 5.710275, 5.710275, 5.710275, 5.710275, 5.710275, 5.710275, 5.710275, 5.710275,
          5.710275, 5.710275,
        ],
        [
          5.15770625, 5.15770625, 5.15770625, 5.15770625, 5.15770625, 5.15770625, 5.15770625, 5.15770625, 5.15770625,
          5.15770625, 5.15770625, 5.15770625, 5.15770625,
        ],
        [
          4.6051375, 4.6051375, 4.6051375, 4.6051375, 4.6051375, 4.6051375, 4.6051375, 4.6051375, 4.6051375, 4.6051375,
          4.6051375, 4.6051375, 4.6051375,
        ],
        [
          4.05256875, 4.05256875, 4.05256875, 4.05256875, 4.05256875, 4.05256875, 4.05256875, 4.05256875, 4.05256875,
          4.05256875, 4.05256875, 4.05256875, 4.05256875,
        ],
        [3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5],
      ],
    },
    STO: {
      label: "D25",
      values: [
        [
          30.2, 30.011326077030148, 29.818923795466947, 29.622441730216906, 29.42173185230902, 29.319743083531055,
          29.216638247520272, 29.11239653031718, 29.00699655179524, 28.900416345122068, 28.79263333528158,
          28.683624316605243, 28.573365429256548,
        ],
        [
          28.44276991289998, 28.233377150131314, 28.01994904050584, 27.80214311513639, 27.57980032567689,
          27.46687557098883, 27.352753029154083, 27.2374102989432, 27.12082436036946, 27.00297155178266,
          26.88382754589175, 26.763367324655267, 26.641565152975016,
        ],
        [
          26.705031743990713, 26.471776814512566, 26.23417471036391, 25.991888998299356, 25.744748250420077,
          25.619301103474154, 25.492571595280108, 25.364535525542756, 25.23516801186577, 25.10444346388328,
          24.972335556149815, 24.8388171997161, 24.703860512313163,
        ],
        [
          25.84705173623632, 25.60051144728292, 25.349469013306965, 25.093589814861268, 24.83269554626689,
          24.700309343379484, 24.56659796588281, 24.43153620760077, 24.2950981433425, 24.157257101261056,
          24.017985633866065, 23.87725548761053, 23.73503757096646,
        ],
        [
          24.998404173553862, 24.73756749229831, 24.472076478362485, 24.201597419531588, 23.925944534226623,
          23.786117004728556, 23.64492155698765, 23.502331887551293, 23.35832093274736, 23.21286083902811,
          23.065922931847414, 22.917477682983165, 22.76749467621004,
        ],
        [
          24.16076420997468, 23.88452824560296, 23.6034907383414, 23.31731785775662, 23.025815603406574,
          22.87800232495895, 22.72877887876534, 22.578117751943097, 22.425990625197013, 22.27236834086225,
          22.11722086934044, 21.960517273830945, 21.80222567325142,
        ],
        [
          23.335916978283997, 23.04307704438462, 22.745296135781476, 22.442239114328867, 22.13370282847935,
          21.97731327983641, 21.819472344634725, 21.660151161861197, 21.499320012137428, 21.336948283121654,
          21.173004433140488, 21.007455952940177, 20.840269325438932,
        ],
        [
          22.525770267356144, 22.21500857158448, 21.899177811602158, 21.57794012831699, 21.25108203897884,
          21.08547522366479, 20.918377509291815, 20.74975851401781, 20.57958693909361, 20.4078305312183,
          20.234456042932678, 20.059429190925837, 19.882714612121053,
        ],
        [
          21.732368518067624, 21.40224121613525, 21.066932630215362, 20.726100463876076, 20.379519397723325,
          20.203998976537793, 20.026950698521176, 19.848342444690378, 19.668141113171487, 19.48631257802146,
          19.302821645861393, 19.117632010179438, 18.930706203150528,
        ],
        [
          20.957908402811654, 20.606830685428438, 20.25048108287726, 19.88851073551011, 19.520680553559412,
          19.334489410331013, 19.146737070884946, 18.957389406725433, 18.766411232226226, 18.57376625932779,
          18.37941704977784, 18.18332496475208, 17.98545011167982,
        ],
        [
          20.204756330427525, 19.830985121666096, 19.451880349168043, 19.067083911420266, 18.67634044882707,
          18.47865459641363, 18.279379159315123, 18.078477654922924, 17.875912460333293, 17.671644762194926,
          17.46563450378039, 17.257840329092883, 17.04821952380493,
        ],
        [
          19.475468322949226, 19.07708204876006, 18.673338748604603, 18.263867653213257, 17.848393883456712,
          17.63831559435332, 17.426625952484294, 17.21328568320604, 16.998254279140287, 16.781489944267502,
          16.562949534862824, 16.34258849705459, 16.120360800767997,
        ],
        [
          19.120629495443968, 18.709152909543214, 18.29232548281093, 17.869768523659854, 17.44119587416839,
          17.22455957370432, 17.00630415379976, 16.786388743070628, 16.56477118774383, 16.341407992461022,
          16.116254257706835, 15.889263613624113, 15.660388149957733,
        ],
        [
          18.772812853677376, 18.34768757892187, 17.917231885740865, 17.481057898022858, 17.03886696780635,
          16.815416984131886, 16.590342593160493, 16.36360116931793, 16.135148752828805,
          15.904939986905259, 15.672928051322156, 15.439064592120728, 15.20329964716034,
        ],
        [
          18.43240201061739, 17.993039900649023, 17.548384036981744, 17.098035912077282, 16.64168299804492,
          16.41115206974126, 16.178994271162153, 15.945165044210826, 15.709618442815787, 15.47230706613206,
          15.233181987869205, 14.992192681464859, 14.74928694079882,
        ],
        [
          18.099797432899113, 17.645578448592428, 17.186120889918968, 16.72101395489889, 16.249929638480918,
          16.01203827721569, 15.772520795684848, 15.531330501065757, 15.288419257127403, 15.043737413015236,
          14.797233727879608, 14.548855291040745, 14.298547437356678,
        ],
        [
          17.775417554440242, 17.305687426164706, 16.830794995611154, 16.350315250050592,
          15.863902868982764, 15.61835867380281, 15.371192756885689, 15.122356061159506, 14.871798029485305,
          14.619466528528465, 14.365307768165021, 14.109266216087216, 13.851284507242914,
        ],
        [
          17.4597, 16.97376764684551, 16.48277328520373, 15.986275477879225, 15.483909469878393,
          15.230406387806873, 14.975290120115147, 14.718508984649596, 14.460009741911952, 14.199737513435878,
          13.937635695363898, 13.673645866856113, 13.407707692929598,
        ],
        [
          17.579886781223816, 17.059968887147637, 16.53472968582976, 16.003704927814624, 15.466466762504295,
          15.19537741293556, 14.92256316704336, 14.647963289971845, 14.371515171596284, 14.093154220927017,
          13.812813754034647, 13.530424874967984, 13.245916349086247,
        ],
        [
          17.71817581510122, 17.161619111192117, 16.59947327843382, 16.031236634534245, 15.456403941452312,
          15.16634839985323, 14.874441122765107, 14.580610253029132, 14.28478165640777, 13.986878783321458,
          13.686822521721924, 13.384531040330014, 13.079919621390307,
        ],
        [
          17.877162036094642, 17.281106905447878, 16.679188177694808, 16.07084895673474, 15.455488975413395,
          15.144979279694603, 14.83247336200561, 14.517885678862292, 14.201127898992352, 13.88210872024088,
          13.56073367419101, 13.236904917354755, 12.910521007669715,
        ],
        [
          18.05967317831203, 17.421039669134665, 16.776264863332713, 16.12471495297207, 15.46567286950021,
          15.133106931082835, 14.798379799452386, 14.461389068024415, 14.122028889859255,
          13.780189732649541, 13.435758116468875, 13.088616332557118, 12.73864214122768,
        ],
        [
          18.160701801189614, 17.499551182495907, 16.83212085771408, 16.157728952332878, 15.475590285581221,
          15.13135818057284, 14.784873743463466, 14.436024714445981, 14.084695000809727, 13.730764392479237,
          13.374108257041526, 13.014597212133818, 12.652096772823354,
        ],
        [
          18.26878558575755, 17.584258340069713, 16.893314506643282, 16.195216816142963, 15.489104538835132,
          15.132760340107188, 14.774066347729708, 14.412899357155668, 14.049131885678559, 13.682631841424048,
          13.313262167867064, 12.940880461240557, 12.56533855789484,
        ],
        [
          18.38435057815936, 17.67555516122041, 16.960209007947846, 16.237511337225296, 15.506517613135692,
          15.137599567365594, 14.766227509140936, 14.392266074899737, 14.015575117391297, 13.636009319682376,
          13.25341777988116, 12.867643563308768, 12.478523218453972,
        ],
        [
          18.507840416482097, 17.77385209410129, 17.03318309774123, 16.284960139833366, 15.52814571164192,
          15.146175939780655, 14.76164073262553, 14.374391217138932, 13.984273162141474,
          13.591126527297629, 13.194784976976885, 12.795075354917273, 12.391817115111683,
        ],
        [
          18.639716872259843, 17.87957647022298, 17.11263146647689, 16.337926095366058, 15.55431970101093,
          15.158803920926239, 14.760603623373603, 14.359554924433187, 13.955487928789946,
          13.548226201762098, 13.137586199094056, 12.723376649426083, 12.305397883700579,
        ],
        [
          18.780460409892836, 17.99317295895178, 17.198965164517222, 16.39678772341427, 15.585385542002882,
          15.175812815540638, 14.763428370953305, 14.348051644892212, 13.929495319303701, 13.507564702300067,
          13.082057058126782, 12.652760879854743, 12.219455097581884,
        ],
        [
          18.930570769616295, 18.115104023841315, 17.292611996498636, 16.46193957567348, 15.62170470300735,
          15.19754720946913, 14.770442221525107, 14.340190642981714, 13.90658577677275, 13.469412597779272,
          13.02844696416636, 12.583454759238347, 12.134190954718594,
        ],
        [
          19.0905675812994, 18.24585038369475, 17.394016904289604, 16.533792600407793, 15.663654552892487,
          15.224367390568943, 14.781987934024091, 14.336296496566359, 13.88706482708191, 13.434055254708944,
          12.977019759102681, 12.515698956227203, 12.04982098818494,
        ],
        [
          19.26099101833221, 18.385911482478623, 17.503642339010085, 16.6127744854047, 15.711628729505929,
          15.256649746415334, 14.798424215862266, 14.336709577659434, 13.871253609833005, 13.401793421256054,
          12.928054354064635, 12.449748783168385, 11.966574798306755,
        ],
        [
          19.44240250322545, 18.53580597369475, 17.621968623435293, 16.699329977736216, 15.766037480160461,
          15.294787134495628, 14.820126133415927, 14.34178651194813, 13.859489393621185, 13.372943802655875,
          12.88184536659147, 12.385874893322278, 11.884696804084399,
        ],
        [
          19.63538547936633, 18.696072226610198, 17.749494307174054, 16.793921179166293, 15.827307970533587,
          15.339189220494315, 14.847485492319546, 14.351900611781907, 13.852126070273933, 13.34783962281242,
          12.83870375279338, 12.324363983219262, 11.804447010933458,
        ],
        [
          19.840546266726978, 18.867268863893226, 17.88673651832434, 16.897027816740007, 15.895884558620995,
          15.3902827802759, 14.88091118240581, 14.367442276965711, 13.849534622175602, 13.326831166286382,
          12.798957429086077, 12.265519495443005, 11.72610179108607,
        ],
        [
          20.05851502329745, 19.049975342760014, 18.034231316904076, 17.009147488985434, 15.972229030731818,
          15.448511961284627, 14.920829482029486, 14.388819357404284, 13.852103556336392, 13.310286294265662,
          12.76295187737627, 12.20966231644654, 11.649954672222428,
        ],
        [
          20.289946838732607, 19.244792594770168, 18.19253405727442, 17.130795889285622, 16.056820797023768,
          15.51433849932446, 14.967684316512155, 14.41645747142091, 13.86023929844087, 13.298590927516022,
          12.731050726841314, 12.157131462876368, 11.57631712904747,
        ],
        [
          20.535522992296347, 19.452343742992927, 18.362219769061404, 17.262507009366917, 16.15015704477736,
          15.588241887085374, 15.021937465572062, 14.450800273443463, 13.874366539745697,
          13.292149488736383, 12.703636304700147, 12.108284749623172, 11.505519371592142,
        ],
        [
          20.79595241383364, 19.673274919493906, 18.543883568794715, 17.40483332754003, 16.252752848529283,
          15.670719491371328, 15.084068714882443, 14.492309664739793, 13.894928529414402, 13.291385296213326,
          12.681110147627965, 12.063499431135766, 11.4379111230041,
        ],
        [
          21.071973394415696, 19.908256211071915, 18.7381411176772, 17.55834598835723, 16.365141237357076,
          15.762286616790112, 15.154575947364254, 14.541465941020887, 13.922387304702855, 13.296740900206249,
          12.663893464744998, 12.023172807212527, 11.373862378505343,
        ],
        [
          21.364355602764466, 20.157982767046093, 18.94562914464879, 17.723634982758618, 16.48787322106478,
          15.863476514720574, 15.233975170495247, 14.598767871044592, 13.957223851375156,
          13.308678353125822, 12.652427542428114, 11.987722783231217, 11.31376413604453,
        ],
        [
          21.67390247491907, 20.42317610982066, 19.167006058294138, 17.901309340617786, 16.621517778796083,
          15.974840337707219, 15.322800476841358, 14.664732700879231, 13.999938186866718, 13.32767940432728,
          12.647174080598283, 11.957588373933218, 11.258029087973238,
        ],
        [
          22.001454058320753, 20.704585697152126, 19.40295267626717, 18.091997350915502, 16.76666181573411,
          16.09694704108466, 15.421603936219785, 14.739896079258607, 14.051049359057222, 13.354245610259694,
          12.648615449629606, 11.933230138979086, 11.20709226184833,
        ],
        [
          22.347890408161945, 21.00299079478135, 19.654173106889136, 18.296346828628444, 16.923910096073207,
          16.23038323563606, 15.530955419425329, 14.824811900517098, 14.11109535410863, 13.38889835083469,
          12.657254856683158, 11.915130537681016, 11.161411597233732,
        ],
        [
          22.714135654188425, 21.31920272971956, 19.92139582457155, 18.515025451888242, 17.093885163406327,
          16.3757529974769, 15.651442355321159, 14.92005206296832, 14.180632907701098, 13.432178743244224,
          12.67361641010244, 11.90379418962394, 11.121468444177816,
        ],
        [
          23.10116288151842, 21.654067608444365, 20.20537498891661, 18.748721198124485, 17.277227263103953,
          16.533677644163795, 15.783669425352528, 15.026206142324451, 14.26023721520682, 13.484647445113104,
          12.69824507058341, 11.899748027359491, 11.087767967917557,
        ],
        [
          23.51, 22.008469601164993, 20.506892066999633, 18.998142913857674, 17.474594285211673,
          16.70479548928988, 15.92825820221423, 15.143880981877679, 14.350501537914843, 13.546884339863672,
          12.731706478196742, 11.903541327048456, 11.060839443360662,
        ],
      ],
    },
    "32": {
      label: "D32",
      values: [
        [
          13.75, 13.938673922969851, 14.131076204533052, 14.327558269783093, 14.528268147690978, 14.630256916468944,
          14.733361752479727, 14.837603469682817, 14.943003448204761, 15.049583654877933, 15.157366664718422,
          15.266375683394756, 15.376634570743452,
        ],
        [
          13.017342587100021, 13.226735349868688, 13.440163459494162, 13.657969384863613, 13.880312174323112,
          13.99323692901117, 14.10735947084592, 14.2227022010568, 14.33928813963054, 14.45714094821734,
          14.576284954108248, 14.696745175344736, 14.818547347024987,
        ],
        [
          12.265193256009287, 12.498448185487431, 12.73605028963609, 12.978336001700644, 13.225476749579922,
          13.350923896525845, 13.477653404719893, 13.605689474457243, 13.735056988134227, 13.86578153611672,
          13.997889443850182, 14.131407800283897, 14.266364487686836,
        ],
        [
          11.878229513763674, 12.124769802717076, 12.37581223669303, 12.631691435138729, 12.892585703733106,
          13.024971906620513, 13.158683284117185, 13.293745042399221, 13.430183106657497, 13.568024148738939,
          13.70729561613393, 13.848025762389467, 13.990243679033536,
        ],
        [
          11.481933326446136, 11.742770007701687, 12.00826102163751, 12.27874008046841, 12.554392965773372,
          12.694220495271441, 12.835415943012347, 12.978005612448703, 13.122016567252638, 13.267476660971887,
          13.414414568152583, 13.562859817016832, 13.71284282378996,
        ],
        [
          11.07462954002532, 11.350865504397037, 11.631903011658599, 11.91807589224338, 12.209578146593426,
          12.357391425041051, 12.506614871234662, 12.657275998056903, 12.809403124802989, 12.96302540913775,
          13.11817288065956, 13.274876476169055, 13.433168076748581,
        ],
        [
          10.654533021716006, 10.94737295561538, 11.245153864218524, 11.548210885671136, 11.85674717152065,
          12.013136720163596, 12.170977655365276, 12.330298838138807, 12.491129987862573,
          12.653501716878349, 12.817445566859515, 12.982994047059824, 13.15018067456107,
        ],
        [
          10.219735982643861, 10.530497678415525, 10.846328438397846, 11.167566121683016,
          11.494424211021165, 11.660031026335215, 11.82712874070819, 11.995747735982196, 12.165919310906396,
          12.337675718781709, 12.511050207067328, 12.686077059074169, 12.862791637878953,
        ],
        [
          9.768193981932377, 10.09832128386475, 10.433629869784637, 10.774462036123923, 11.121043102276674,
          11.296563523462208, 11.473611801478826, 11.652220055309623, 11.832421386828514, 12.014249921978541,
          12.197740854138608, 12.382930489820563, 12.569856296849473,
        ],
        [
          9.297710347188346, 9.64878806457156, 10.005137667122739, 10.36710801448989, 10.734938196440588,
          10.921129339668989, 11.108881679115056, 11.298229343274565, 11.489207517773774, 11.68185249067221,
          11.876201700222161, 12.072293785247917, 12.270168638320179,
        ],
        [
          8.805918669572478, 9.179689878333905, 9.558794650831961, 9.943591088579735, 10.334334551172931,
          10.532020403586372, 10.731295840684881, 10.932197345077078, 11.134762539666708, 11.339030237805076,
          11.545040496219613, 11.75283467090712, 11.962455476195071,
        ],
        [
          8.290262927050776, 8.68864920123994, 9.092392501395398, 9.501863596786743, 9.91733736654329,
          10.127415655646681, 10.339105297515706, 10.552445566793962, 10.767476970859715, 10.9842413057325,
          11.202781715137178, 11.423142752945411, 11.645370449232006,
        ],
        [
          8.022629879556035, 8.434106465456791, 8.850933892189072, 9.27349085134015, 9.702063500831613,
          9.918699801295684, 10.136955221200243, 10.356870631929375, 10.578488187256173,
          10.801851382538981, 11.02700511729317, 11.25399576137589, 11.48287122504227,
        ],
        [
          7.747974646322625, 8.17309992107813, 8.603555614259136, 9.039729601977141, 9.48192053219365,
          9.705370515868116, 9.930444906839508, 10.15718633068207, 10.385638747171196, 10.615847513094742,
          10.847859448677845, 11.081722907879273, 11.31748785283966,
        ],
        [
          7.465913614382611, 7.905275724350978, 8.34993158801826, 8.80027971292272, 9.25663262695508, 9.487163555258745,
          9.71932135383785, 9.953150580789176, 10.188697182184216, 10.426008558867942, 10.665133637130797,
          10.906122943535143, 11.149028684201182,
        ],
        [
          7.176046317100887, 7.6302653014075705, 8.089722860081032, 8.55482979510111, 9.025914111519082,
          9.263805472784309, 9.503322954315152, 9.744513248934243, 9.987424492872597, 10.232106336984764,
          10.478610022120392, 10.726988458959255, 10.977296312643322,
        ],
        [
          6.877954320559763, 7.347684448835301, 7.822576879388853, 8.303056624949411, 8.78946900601724,
          9.035013201197195, 9.282179118114316, 9.531015813840499, 9.7815738455147, 10.03390534647154,
          10.288064106834984, 10.54410565891279, 10.80208736775709,
        ],
        [
          6.5712, 7.057132353154493, 7.54812671479627, 8.044624522120777, 8.54699053012161, 8.800493612193128,
          9.055609879884855, 9.312391015350405, 9.570890258088049, 9.831162486564125, 10.093264304636103,
          10.35725413314389, 10.623192307070402,
        ],
        [
          6.5420382187761845, 7.061956112852365, 7.587195314170242, 8.118220072185379, 8.655458237495706,
          8.92654758706444, 9.19936183295664, 9.473961710028156, 9.750409828403717, 10.028770779072984,
          10.309111245965354, 10.591500125032017, 10.876008650913754,
        ],
        [
          6.49477418489878, 7.051330888807881, 7.61347672156618, 8.181713365465756, 8.756546058547688,
          9.046601600146769, 9.338508877234892, 9.632339746970867, 9.92816834359223,
          10.226071216678541, 10.526127478278076, 10.828418959669985, 11.133030378609693,
        ],
        [
          6.426812963905363, 7.022868094552125, 7.6247868223051976, 8.233126043265267, 8.84848602458661,
          9.158995720305402, 9.471501637994395, 9.786089321137712, 10.102847101007653,
          10.421866279759124, 10.743241325808995, 11.06707008264525, 11.39345399233029,
        ],
        [
          6.335326821687975, 6.973960330865337, 7.618735136667291, 8.270285047027933, 8.929327130499793,
          9.261893068917168, 9.596620200547617, 9.933610931975588, 10.272971110140748,
          10.614810267350462, 10.959241883531128, 11.306383667442885, 11.656357858772322,
        ],
        [
          6.279810698810387, 6.940961317504096, 7.60839164228592, 8.282783547667123, 8.96492221441878,
          9.30915431942716, 9.655638756536534, 10.00448778555402, 10.355817499190273,
          10.709748107520763, 11.066404242958475, 11.425915287866182, 11.788415727176647,
        ],
        [
          6.2172394142424565, 6.901766659930294, 7.592710493356724, 8.290808183857042, 8.996920461164873,
          9.353264659892817, 9.711958652270297, 10.073125642844337, 10.436893114321446,
          10.803393158575958, 11.17276283213294, 11.545144538759448, 11.920686442105165,
        ],
        [
          6.147186921840639, 6.855982338779592, 7.571328492052154, 8.294026162774701, 9.025019886864307,
          9.393937932634405, 9.765309990859063, 10.139271425100262, 10.515962382608702,
          10.895528180317623, 11.27811972011884, 11.663893936691231, 12.053014281546027,
        ],
        [
          6.069209583517907, 6.803197905898715, 7.543866902258772, 8.292089860166637, 9.048904288358083,
          9.430874060219349, 9.815409267374474, 10.202658782861072, 10.59277683785853,
          10.985923472702375, 11.382265023023118, 11.78197464508273, 12.18523288488832,
        ],
        [
          5.982845627740158, 6.742986029777022, 7.50993103352311, 8.284636404633941, 9.06824279898907,
          9.463758579073762, 9.861958876626398, 10.263007575566814, 10.667074571210055,
          11.074336298237903, 11.484976300905945, 11.899185850573918, 12.317164616299422,
        ],
        [
          5.887614590107166, 6.6749020410482185, 7.46910983548278, 8.27128727658573, 9.08268945799712,
          9.492262184459364, 9.904646629046697, 10.32002335510779, 10.7385796806963, 11.160510297699934,
          11.58601794187322, 12.01531412014526, 12.448619902418118,
        ],
        [
          5.783016730383707, 6.598483476158687, 7.420975503501367, 8.251647924326521, 9.091882796992653,
          9.516040290530873, 9.943145278474896, 10.373396857018289, 10.807001723227252,
          11.244174902220731, 11.685140535833643, 12.130132740761656, 12.579396545281408,
        ],
        [
          5.668532418700604, 6.513249616305252, 7.365083095710401, 8.225307399592209, 9.095445447107517,
          9.53473260943106, 9.977112065975913, 10.422803503433645, 10.872035172918094, 11.32504474529106,
          11.782080240897322, 12.243401043772801, 12.709279011815063,
        ],
        [
          5.543621481667792, 6.418701017521379, 7.300970160989918, 8.1918380145953, 9.092983770494072,
          9.547962753584667, 10.006188284137735, 10.467902922340567, 10.933358890166996,
          11.402819078743947, 11.876558145935366, 12.354863716831616, 12.838037701693246,
        ],
        [
          5.407722496774554, 6.3143190263052515, 7.228156376564708, 8.150795022263784, 9.08408751983954,
          9.555337865504374, 10.029998866584075, 10.508338488051873, 10.990635606378817,
          11.477181197344127, 11.968279633408532, 12.464250106677724, 12.965428195915603,
        ],
        [
          5.260252020633676, 6.199565273389808, 7.146143192825951, 8.101716320833713, 9.06832952946642,
          9.556448279505691, 10.04815200768046, 10.543736888218099, 11.043511429726074,
          11.547797877187586, 12.056933747206626, 12.571273516780744, 13.091190489066548,
        ],
        [
          5.100603733273022, 6.073881136106776, 7.0544134816756605, 8.044122183259994, 9.045265441379005,
          9.5508672197241, 10.06023881759419, 10.573707723034289, 11.091615377824398, 11.614318833713618,
          12.142192570913924, 12.675630504556995, 13.215048208913931,
        ],
        [
          4.928147476702552, 5.936687157239986, 6.952431183095924, 7.977515011014566, 9.014433469268184,
          9.538150538715374, 10.065833017970515, 10.597843142595718, 11.13455894366361, 11.67637620573434,
          12.22371062262373, 12.777000183553461, 13.336707827777573,
        ],
        [
          4.742228161267395, 5.787382405229836, 6.839640942725584, 7.90137911071438, 8.975354202976234,
          9.517836500675543, 10.064490683487847, 10.615717528579092, 11.171935701559132, 11.73358407248398,
          12.301124273158688, 12.875043537123634, 13.455857870952533,
        ],
        [
          4.542164507703653, 5.625343757007073, 6.7154677309385935, 7.815180490633082, 8.92753045522264,
          9.489445612914626, 10.055750034427938, 10.626887226556537, 11.203320960254302,
          11.785538011263617, 12.374051195299852, 12.969402750376828, 13.572168128407858,
        ],
        [
          4.3272475861663615, 5.449925080506095, 6.579316431205286, 7.7183666724599735, 8.870447151470719,
          9.452480508628673, 10.039131285117557, 10.630890335260208, 11.228271470585598,
          11.831814703786675, 12.442089852372035, 13.059700568864235, 13.6852888769959,
        ],
        [
          4.096739105584302, 5.260456288928083, 6.430571382322801, 7.610366511642766, 8.803571262642922,
          9.406425883209886, 10.014136552635744, 10.627246558979111, 11.246325195297143, 11.87197159979375,
          12.504819035255, 13.145539692787471, 13.794850121494655,
        ],
        [
          3.8498693972355333, 5.056242232953904, 6.26859585535121, 7.490590017241379, 8.726351778935218,
          9.350748485279425, 9.980249829504752, 10.615457128955407, 11.257001148624843,
          11.905546646874177, 12.561797457571885, 13.226502216768782, 13.90046086395547,
        ],
        [
          3.5858350250809323, 4.8365613901793445, 6.092731441705865, 7.3584281593822185, 8.638219721203921,
          9.284897162292785, 9.936937023158645, 10.595004799120773, 11.259799313133286, 11.932058095672723,
          12.61256341940172, 13.302149126066785, 14.001708412026765,
        ],
        [
          3.3037959416792475, 4.600664302847875, 5.90229732373283, 7.2132526490845, 8.538588184265892,
          9.208302958915338, 9.883646063780215, 10.565353920741394, 11.254200640942779, 11.951004389740307,
          12.656634550370395, 13.372019861020915, 14.09815773815167,
        ],
        [
          3.002872091838057, 4.347771705218651, 5.696589393110867, 7.054415671371557, 8.426852403926794,
          9.120379264363939, 9.819807080574673, 10.525950599482904, 11.239667145891373,
          11.961864149165311, 12.693507643316844, 13.435631962318986, 14.18935090276627,
        ],
        [
          2.682139345811578, 4.077072270280441, 5.474879175428452, 6.881249548111759, 8.302389836593678,
          9.020522002523101, 9.744832644678844, 10.476222937031682, 11.215642092298905,
          11.964096256755779, 12.722658589897563, 13.492480810376064, 14.274806555822186,
        ],
        [
          2.340624618481584, 3.787719891555639, 5.236412511083392, 6.693066301875517, 8.164560236896051,
          8.908109855836209, 9.658118074647476, 10.415581357675553, 11.181550284793184, 11.9571400548869,
          12.743542429416594, 13.542039472640512, 14.354019532082447,
        ],
        [
          1.9773, 3.4788303988350098, 4.980407933000367, 6.489157086142328, 8.01270571478833, 8.782504510710124,
          9.559041797785772, 10.343419018122322, 11.136798462085158, 11.94041566013633, 12.75559352180326,
          13.583758672951545, 14.42646055663934,
        ],
      ],
    },
    "37": {
      label: "BF",
      values: [
        [
          52.6388, 52.6388, 52.6388, 52.6388, 52.6388, 52.6388, 52.6388, 52.6388, 52.6388, 52.6388, 52.6388, 52.6388,
          52.6388,
        ],
        [
          55.943375, 55.943375, 55.943375, 55.943375, 55.943375, 55.943375, 55.943375, 55.943375, 55.943375, 55.943375,
          55.943375, 55.943375, 55.943375,
        ],
        [
          59.24795, 59.24795, 59.24795, 59.24795, 59.24795, 59.24795, 59.24795, 59.24795, 59.24795, 59.24795, 59.24795,
          59.24795, 59.24795,
        ],
        [
          60.9002375, 60.9002375, 60.9002375, 60.9002375, 60.9002375, 60.9002375, 60.9002375, 60.9002375, 60.9002375,
          60.9002375, 60.9002375, 60.9002375, 60.9002375,
        ],
        [
          62.552525, 62.552525, 62.552525, 62.552525, 62.552525, 62.552525, 62.552525, 62.552525, 62.552525, 62.552525,
          62.552525, 62.552525, 62.552525,
        ],
        [
          64.2048125, 64.2048125, 64.2048125, 64.2048125, 64.2048125, 64.2048125, 64.2048125, 64.2048125, 64.2048125,
          64.2048125, 64.2048125, 64.2048125, 64.2048125,
        ],
        [
          65.8571, 65.8571, 65.8571, 65.8571, 65.8571, 65.8571, 65.8571, 65.8571, 65.8571, 65.8571, 65.8571, 65.8571,
          65.8571,
        ],
        [
          67.5093875, 67.5093875, 67.5093875, 67.5093875, 67.5093875, 67.5093875, 67.5093875, 67.5093875, 67.5093875,
          67.5093875, 67.5093875, 67.5093875, 67.5093875,
        ],
        [
          69.161675, 69.161675, 69.161675, 69.161675, 69.161675, 69.161675, 69.161675, 69.161675, 69.161675, 69.161675,
          69.161675, 69.161675, 69.161675,
        ],
        [
          70.8139625, 70.8139625, 70.8139625, 70.8139625, 70.8139625, 70.8139625, 70.8139625, 70.8139625, 70.8139625,
          70.8139625, 70.8139625, 70.8139625, 70.8139625,
        ],
        [
          72.46625, 72.46625, 72.46625, 72.46625, 72.46625, 72.46625, 72.46625, 72.46625, 72.46625, 72.46625, 72.46625,
          72.46625, 72.46625,
        ],
        [
          74.1185375, 74.1185375, 74.1185375, 74.1185375, 74.1185375, 74.1185375, 74.1185375, 74.1185375, 74.1185375,
          74.1185375, 74.1185375, 74.1185375, 74.1185375,
        ],
        [
          74.94468125, 74.94468125, 74.94468125, 74.94468125, 74.94468125, 74.94468125, 74.94468125, 74.94468125,
          74.94468125, 74.94468125, 74.94468125, 74.94468125, 74.94468125,
        ],
        [
          75.770825, 75.770825, 75.770825, 75.770825, 75.770825, 75.770825, 75.770825, 75.770825, 75.770825, 75.770825,
          75.770825, 75.770825, 75.770825,
        ],
        [
          76.59696875, 76.59696875, 76.59696875, 76.59696875, 76.59696875, 76.59696875, 76.59696875, 76.59696875,
          76.59696875, 76.59696875, 76.59696875, 76.59696875, 76.59696875,
        ],
        [
          77.4231125, 77.4231125, 77.4231125, 77.4231125, 77.4231125, 77.4231125, 77.4231125, 77.4231125, 77.4231125,
          77.4231125, 77.4231125, 77.4231125, 77.4231125,
        ],
        [
          78.24925625, 78.24925625, 78.24925625, 78.24925625, 78.24925625, 78.24925625, 78.24925625, 78.24925625,
          78.24925625, 78.24925625, 78.24925625, 78.24925625, 78.24925625,
        ],
        [
          79.0754, 79.0754, 79.0754, 79.0754, 79.0754, 79.0754, 79.0754, 79.0754, 79.0754, 79.0754, 79.0754, 79.0754,
          79.0754,
        ],
        [
          80.08955, 80.08955, 80.08955, 80.08955, 80.08955, 80.08955, 80.08955, 80.08955, 80.08955, 80.08955, 80.08955,
          80.08955, 80.08955,
        ],
        [
          81.1037, 81.1037, 81.1037, 81.1037, 81.1037, 81.1037, 81.1037, 81.1037, 81.1037, 81.1037, 81.1037, 81.1037,
          81.1037,
        ],
        [
          82.11785, 82.11785, 82.11785, 82.11785, 82.11785, 82.11785, 82.11785, 82.11785, 82.11785, 82.11785, 82.11785,
          82.11785, 82.11785,
        ],
        [
          83.132, 83.132, 83.132, 83.132, 83.132, 83.132, 83.132, 83.132, 83.132, 83.132, 83.132, 83.132, 83.132,
        ],
        [
          83.639075, 83.639075, 83.639075, 83.639075, 83.639075, 83.639075, 83.639075, 83.639075, 83.639075, 83.639075,
          83.639075, 83.639075, 83.639075,
        ],
        [
          84.14615, 84.14615, 84.14615, 84.14615, 84.14615, 84.14615, 84.14615, 84.14615, 84.14615, 84.14615, 84.14615,
          84.14615, 84.14615,
        ],
        [
          84.65322499999999, 84.65322499999999, 84.65322499999999, 84.65322499999999, 84.65322499999999,
          84.65322499999999, 84.65322499999999, 84.65322499999999, 84.65322499999999, 84.65322499999999,
          84.65322499999999, 84.65322499999999, 84.65322499999999,
        ],
        [
          85.1603, 85.1603, 85.1603, 85.1603, 85.1603, 85.1603, 85.1603, 85.1603, 85.1603, 85.1603, 85.1603, 85.1603,
          85.1603,
        ],
        [
          85.66737499999999, 85.66737499999999, 85.66737499999999, 85.66737499999999, 85.66737499999999,
          85.66737499999999, 85.66737499999999, 85.66737499999999, 85.66737499999999, 85.66737499999999,
          85.66737499999999, 85.66737499999999, 85.66737499999999,
        ],
        [
          86.17445000000001, 86.17445000000001, 86.17445000000001, 86.17445000000001, 86.17445000000001,
          86.17445000000001, 86.17445000000001, 86.17445000000001, 86.17445000000001, 86.17445000000001,
          86.17445000000001, 86.17445000000001, 86.17445000000001,
        ],
        [
          86.681525, 86.681525, 86.681525, 86.681525, 86.681525, 86.681525, 86.681525, 86.681525, 86.681525, 86.681525,
          86.681525, 86.681525, 86.681525,
        ],
        [
          87.18860000000001, 87.18860000000001, 87.18860000000001, 87.18860000000001, 87.18860000000001,
          87.18860000000001, 87.18860000000001, 87.18860000000001, 87.18860000000001, 87.18860000000001,
          87.18860000000001, 87.18860000000001, 87.18860000000001,
        ],
        [
          87.695675, 87.695675, 87.695675, 87.695675, 87.695675, 87.695675, 87.695675, 87.695675, 87.695675, 87.695675,
          87.695675, 87.695675, 87.695675,
        ],
        [
          88.20275000000001, 88.20275000000001, 88.20275000000001, 88.20275000000001, 88.20275000000001,
          88.20275000000001, 88.20275000000001, 88.20275000000001, 88.20275000000001, 88.20275000000001,
          88.20275000000001, 88.20275000000001, 88.20275000000001,
        ],
        [
          88.709825, 88.709825, 88.709825, 88.709825, 88.709825, 88.709825, 88.709825, 88.709825, 88.709825, 88.709825,
          88.709825, 88.709825, 88.709825,
        ],
        [
          89.21690000000001, 89.21690000000001, 89.21690000000001, 89.21690000000001, 89.21690000000001,
          89.21690000000001, 89.21690000000001, 89.21690000000001, 89.21690000000001, 89.21690000000001,
          89.21690000000001, 89.21690000000001, 89.21690000000001,
        ],
        [
          89.723975, 89.723975, 89.723975, 89.723975, 89.723975, 89.723975, 89.723975, 89.723975, 89.723975, 89.723975,
          89.723975, 89.723975, 89.723975,
        ],
        [
          90.23105, 90.23105, 90.23105, 90.23105, 90.23105, 90.23105, 90.23105, 90.23105, 90.23105, 90.23105, 90.23105,
          90.23105, 90.23105,
        ],
        [
          90.738125, 90.738125, 90.738125, 90.738125, 90.738125, 90.738125, 90.738125, 90.738125, 90.738125, 90.738125,
          90.738125, 90.738125, 90.738125,
        ],
        [
          91.2452, 91.2452, 91.2452, 91.2452, 91.2452, 91.2452, 91.2452, 91.2452, 91.2452, 91.2452, 91.2452, 91.2452,
          91.2452,
        ],
        [
          91.752275, 91.752275, 91.752275, 91.752275, 91.752275, 91.752275, 91.752275, 91.752275, 91.752275, 91.752275,
          91.752275, 91.752275, 91.752275,
        ],
        [
          92.25935, 92.25935, 92.25935, 92.25935, 92.25935, 92.25935, 92.25935, 92.25935, 92.25935, 92.25935, 92.25935,
          92.25935, 92.25935,
        ],
        [
          92.766425, 92.766425, 92.766425, 92.766425, 92.766425, 92.766425, 92.766425, 92.766425, 92.766425, 92.766425,
          92.766425, 92.766425, 92.766425,
        ],
        [
          93.27350000000001, 93.27350000000001, 93.27350000000001, 93.27350000000001, 93.27350000000001,
          93.27350000000001, 93.27350000000001, 93.27350000000001, 93.27350000000001, 93.27350000000001,
          93.27350000000001, 93.27350000000001, 93.27350000000001,
        ],
        [
          93.780575, 93.780575, 93.780575, 93.780575, 93.780575, 93.780575, 93.780575, 93.780575, 93.780575, 93.780575,
          93.780575, 93.780575, 93.780575,
        ],
        [
          94.28765, 94.28765, 94.28765, 94.28765, 94.28765, 94.28765, 94.28765, 94.28765, 94.28765, 94.28765, 94.28765,
          94.28765, 94.28765,
        ],
        [
          94.794725, 94.794725, 94.794725, 94.794725, 94.794725, 94.794725, 94.794725, 94.794725, 94.794725, 94.794725,
          94.794725, 94.794725, 94.794725,
        ],
        [
          95.3018, 95.3018, 95.3018, 95.3018, 95.3018, 95.3018, 95.3018, 95.3018, 95.3018, 95.3018, 95.3018, 95.3018,
          95.3018,
        ],
      ],
    },
  },
  aperture: {
    fStops: [5.15, 5.6, 6.5, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 9,
  },
  groups: [
    {
      text: "G1",
      fromSurface: "1",
      toSurface: "5",
    },
    {
      text: "G2a",
      fromSurface: "6",
      toSurface: "10",
    },
    {
      text: "G2b OS",
      fromSurface: "11",
      toSurface: "15",
    },
    {
      text: "G3",
      fromSurface: "16",
      toSurface: "STO",
    },
    {
      text: "G4 AF",
      fromSurface: "26",
      toSurface: "32",
    },
    {
      text: "G5",
      fromSurface: "33",
      toSurface: "37",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "C2",
      fromSurface: "8",
      toSurface: "10",
    },
    {
      text: "C3",
      fromSurface: "13",
      toSurface: "15",
    },
    {
      text: "C4",
      fromSurface: "22",
      toSurface: "24",
    },
    {
      text: "C5",
      fromSurface: "28",
      toSurface: "30",
    },
    {
      text: "C6",
      fromSurface: "35",
      toSurface: "37",
    },
  ],
  layout: {
    yScFill: 0.72,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
