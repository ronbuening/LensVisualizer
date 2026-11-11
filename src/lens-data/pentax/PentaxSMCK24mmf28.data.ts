import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 3,938,883 (Asahi Kogaku Kogyo; Yasuo Takahashi), sole example, column 3 table, Fig. 1 and Fig. 2: F = 100, 1:2.8,
 * half field 42° (Fig. 2). The claim repeats the table and agrees with it. All surfaces are spherical, and no R, d, nd
 * or νd has been adjusted. The PDF text layer misreads two values; the printed page gives r17 = −146.9 and n7 = 1.80518.
 *
 * The patent names no product and prints its dimensions at F = 100. All radii and spacings are the printed values
 * × 0.24, the ratio of the marketed 24 mm to the printed F = 100; the patent does not state that factor. nd and νd are
 * as printed. The table itself traces to EFL 99.974 at F = 100, so the model's EFL is 23.994 mm; nothing has been
 * refitted to remove the difference. r16 = 34680.0 (8323.2 mm here) stays a curved surface.
 *
 * The association with the SMC Pentax 24mm f/2.8 (K mount, 1977) is probable. The patent's 9 elements in 8 groups,
 * 1:2.8 and 42° half field match the lens's 9/8, f/2.8 and 84°, and the Japanese priority (May 1974) comes before its
 * release. Pentax's section drawings of the SMC Pentax 24mm f/2.8 (Asahi Pentax lens brochure, p. 3) and the SMC
 * Pentax-A 24mm f/2.8 (SMC PENTAX-A lens manual, printed p. 36) draw the same nine elements in Fig. 1's order, every
 * vertex within 1.6 mm of the scaled table. It is not a confirmed factory prescription.
 *
 * The patent prints no back focus beyond "about 1.6 times" the focal length. The image plane is the paraxial back focus
 * of the scaled table: 39.981 mm behind r17 (166.588 at F = 100, or 1.666 F), 86.877 mm from the first vertex.
 *
 * The patent prints no stop position, Fig. 1 draws no iris and the text never mentions one. The stop sits where the
 * SMC PENTAX-A manual (printed p. 36) draws the Pentax-A 24mm f/2.8's iris: in the 2.568 mm air space d11 between L6
 * and L7, 0.9 mm behind r11 and 1.668 mm ahead of r12; d9 keeps its printed 4.44 mm. Against Fig. 2 this placement
 * matches distortion as closely as one in d9 and the sagittal field curve more closely. Its radius, 6.60 mm, follows
 * from F/2.8.
 *
 * Clear apertures are not printed. All `sd` values are read from Fig. 1 at 19.1 px/mm (the 46.896 mm vertex span) and
 * checked against the F/2.8 axial beam and the corner chief ray. Rims the figure bevels are stepped: r2 17.2 mm behind
 * L1's 19.2 mm front, r6 8.6 and r7 7.75 mm across the C1 bevel, r9 7.0 mm behind L5's 7.68 mm front (6.73 drawn; at
 * 6.75 the 27° bundle would lose 5 points of light against the package rims). r4 is 9.4 mm, under the 10.2 mm drawn:
 * the figure flattens that 10.46 mm radius, and 9.4 mm is the rim-slope limit. L6 (7.92 mm) is within 5 % of the
 * 7.55 mm drawn. L7 (8.18), L8 (8.35 front, 8.8 rear) and L9 (10.18) stand up to 0.6 mm wider than drawn (7.6, 7.75,
 * 8.75 and 10.1); the drawn heights would cut the 36° transmission from 81 % to 76 %. The 42° bundle passes 51 % of
 * its light.
 *
 * The 42° half field lands at 21.10 mm, so the model covers 97 % of the 21.65 mm full-frame corner; `projection`
 * declares that field.
 *
 * Focus is static at infinity. The patent says nothing about focusing and prints no close-focus spacings, so
 * focus.closeFocusM is 1e15; catalog.closeFocusM carries the maker's 0.25 m.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-smc-24mm-f28",
  maker: "Pentax",
  name: "PENTAX SMC PENTAX 24mm f/2.8",
  subtitle: "US 3,938,883, sole example — F = 100 design scaled 0.24× to 24 mm; probable production correlation",
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    specs: ["9 ELEMENTS / 8 GROUPS", "DESIGN f = 24 mm", "DESIGN F/2.8", "ALL SPHERICAL", "SCALED FROM f = 100"],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: {
      marketing: 24,
      design: 24,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    closeFocusM: {
      marketing: 0.25,
    },
  },
  source: {
    patentNumber: "US 3,938,883",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1976,
    authors: ["Yasuo Takahashi"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 54,
      indexReference: "d",
      focalLengthMm: 137.295,
      glass: "LAC8 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Weak positive front meniscus; condition (1) bounds its power for distortion and compactness",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: -30.325,
      glass: "S-BSM16 (OHARA catalog equivalent; production supplier unspecified)",
      role: "First negative meniscus of the front group; steep rear face r4",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      focalLengthMm: -19.855,
      glass: "S-LAH51 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative front half of doublet C1; condition (3) sets its index and Abbe steps over L4",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6727,
      vd: 32.1,
      indexReference: "d",
      focalLengthMm: 22.243,
      glass: "SF5 (Schott catalog equivalent; production supplier unspecified)",
      role: "Flint positive half of C1, cemented to the concave face r6 of L3",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.6425,
      vd: 58.4,
      indexReference: "d",
      focalLengthMm: -39.155,
      glass: "S-BSM36 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Last negative meniscus of the front group; brings L1 to L5 to −15.67 mm",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7432,
      vd: 49.4,
      indexReference: "d",
      focalLengthMm: 17.944,
      glass: "S-LAM60 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Thick positive just ahead of the stop, the strongest element; brings L1 to L6 to +35.76 mm",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -21.184,
      glass: "SF6 (Schott catalog equivalent; production supplier unspecified)",
      role: "Dense-flint negative of the rear group, opposing L6",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.52307,
      vd: 58.4,
      indexReference: "d",
      focalLengthMm: 33.561,
      glass: "C12 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Low-index positive meniscus with steep rear face r15; condition (5) pairs it with L9",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.7,
      indexReference: "d",
      focalLengthMm: 50.39,
      glass: "S-LAL14 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Last element, nearly flat in front; condition (5) sets the mean index and Abbe number of L8 and L9",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 59.232,
      d: 4.608,
      sd: 19.2,
      medium: 1,
    },
    {
      label: "2",
      R: 145.128,
      d: 0.096,
      sd: 17.2,
    },
    {
      label: "3",
      R: 24.84,
      d: 1.464,
      sd: 13.2,
      medium: 2,
    },
    {
      label: "4",
      R: 10.464,
      d: 5.544,
      sd: 9.4,
    },
    {
      label: "5",
      R: 43.92,
      d: 0.984,
      sd: 9.6,
      medium: 3,
    },
    {
      label: "6",
      R: 11.4,
      d: 3.792,
      sd: 8.6,
      medium: 4,
    },
    {
      label: "7",
      R: 41.472,
      d: 0.48,
      sd: 7.75,
    },
    {
      label: "8",
      R: 26.736,
      d: 1.272,
      sd: 7.68,
      medium: 5,
    },
    {
      label: "9",
      R: 12.72,
      d: 4.44,
      sd: 7.0,
    },
    {
      label: "10",
      R: 27.24,
      d: 10.368,
      sd: 7.92,
      medium: 6,
    },
    {
      label: "11",
      R: -21.888,
      d: 0.9,
      sd: 7.92,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.668,
    },
    {
      label: "12",
      R: -30.288,
      d: 3.84,
      sd: 8.18,
      medium: 7,
    },
    {
      label: "13",
      R: 41.256,
      d: 1.32,
      sd: 8.18,
    },
    {
      label: "14",
      R: -135.12,
      d: 3.432,
      sd: 8.35,
      medium: 8,
    },
    {
      label: "15",
      R: -15.672,
      d: 0.096,
      sd: 8.8,
    },
    {
      label: "16",
      R: 8323.2,
      d: 2.592,
      sd: 10.18,
      medium: 9,
    },
    {
      label: "17",
      R: -35.256,
      d: 39.98109518161135,
      sd: 10.18,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "The model stays at infinity: the patent says nothing about focusing and prints no close-focus spacings. Pentax lists a minimum focus of 0.25 m.",
  },
  aperture: {
    nominalFNumber: 2.8,
    maxFNumber: 22,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 84,
    maxTraceFieldDeg: 42,
  },
  groups: [
    {
      text: "FRONT",
      fromSurface: "1",
      toSurface: "9",
    },
    {
      text: "REAR",
      fromSurface: "10",
      toSurface: "17",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  layout: {
    yScFill: 0.78,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
