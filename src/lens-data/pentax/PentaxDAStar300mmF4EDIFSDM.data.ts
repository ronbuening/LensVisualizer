import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * PENTAX DA* 300mm f/4 ED [IF] SDM, after US 7,715,116 B2 (Koji Kato; Hoya Corporation), Embodiment 7, Table 7,
 * Figure 19: https://patents.google.com/patent/US7715116B2/en
 * A patent design associated with the product, not a confirmed factory prescription. Embodiments 6 and 7 both fit
 * the retail data, and no retail figure separates them.
 *
 * Names: Figure 19 and col. 4 call the first to fourth lens groups 10–40 and the eight elements 11, 12, 13, 21, 22, 31,
 * 32 and 41. Elements are named L11 … L41 after those numerals and the diagram prints the bare numerals; G1–G4
 * abbreviate the four groups, and C1 and C2 are the cemented pairs 21 + 22 and 31 + 32.
 *
 * Radii, thicknesses, Nd and ν are the printed values at patent scale (scale factor 1). Printed f = 291.00,
 * FNO = 1:4.1, W = 4.2°, fB = 56.93 mm; Figures 20A and 20B label FNO 1:4.12. The traced EFL is 290.991 mm and BFD
 * 56.933 mm. The 0.009 mm EFL difference is rounding in the printed table: d7 alone spans ±0.083 mm of EFL within its
 * printed precision, and all seven embodiments differ from their printed f by a similar amount.
 *
 * The patent places the stop 3.500 mm in front of surface 10, so printed d9 = 7.00 splits into 3.5 + 3.5 at infinity.
 * The stop stays fixed with the second group during focus: closest-focus d9 = 18.29 leaves 14.79 mm from stop to
 * surface 10. A real-ray trace from Figure 20's 1:4.12 gives Figure 21's FE 4.63; a stop moving with the third group
 * would give 3.81. The stop radius is derived from the design f-number (paraxial EPD = F/N); the patent prints no stop diameter.
 *
 * The patent prints no clear apertures. All 14 lens semi-diameters are estimates from Figure 19, not factory values.
 * Their rim heights keep the figure's proportions and sit about 3 % above it at 5.83 px/mm in both directions. Figure 19
 * ends surface 12 at 0.82 of the element's rim and draws a vertical land from there, so that face has sd = 13.1 mm
 * (clear of the 12.65 mm axial ray at F/4.1 at both focus states) and rimExtensionSd = 15.8 mm.
 * The last gap is the printed fB, which puts the image plane 228.21 mm from surface 1.
 *
 * Table 7 prints m = 0, −0.02 and −0.25. The infinity and closest rows are authored; the −0.02 row is not, so
 * positions between them are interpolated. Traced at the closest row, object to image is 1400 mm at m = −0.2445.
 *
 * Indices are d-line. L13, L21, L32 and L41 are Unmatched, because those printed pairs match no catalog row and recur in
 * no other embodiment, so they trace the printed nd and νd with normal-line partial dispersion. The nearest rows sit up
 * to 2.2 % away in νd, which puts the g-line focus 0.41 mm off Figure 20B; the printed pairs land within 0.06 mm of
 * Figures 20B and 21B. The labels on L11, L12, L22 and L31 are catalog equivalents, and the supplier is not established.
 * fStops run to the f/32 Ricoh lists; the stop opens to the design F/4.1.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-da-star-300mm-f4",
  maker: "Pentax",
  name: "PENTAX DA* 300mm f/4 ED [IF] SDM",
  subtitle: "US 7,715,116 B2, Embodiment 7 — production-family correlation",
  visible: true,
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    specs: ["8 ELEMENTS / 6 GROUPS", "DESIGN f = 291.00 mm", "DESIGN F/4.1", "ALL SPHERICAL", "2 ED ELEMENTS"],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: {
      marketing: 300,
      design: 291.0,
    },
    fNumber: {
      marketing: 4,
      design: 4.1,
    },
  },
  source: {
    patentNumber: "US 7,715,116 B2",
    example: {
      label: "Embodiment 7",
      id: "7",
    },
    patentYear: 2010,
    authors: ["Koji Kato"],
    assignees: ["Hoya Corporation"],
  },
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 11",
      diagramLabel: "11",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 318.8,
      indexReference: "d",
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Weak positive front meniscus of the fixed first group",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 12",
      diagramLabel: "12",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 95,
      focalLengthMm: 155.86,
      apd: "patent",
      apdNote:
        "Col. 6 calls element 12 a special low-dispersion glass and condition (5) bounds only its νd; the patent prints no partial dispersion. Ricoh names the second element as ED, and the printed 1.43875/95.0 is the S-FPL53 coordinate (catalog dPgF +0.0503). The supplier is not established.",
      indexReference: "d",
      glass: "S-FPL53 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Main positive power of the first group, in ED glass",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 13",
      diagramLabel: "13",
      type: "Biconcave Negative",
      nd: 1.8,
      vd: 44.1,
      focalLengthMm: -223.37,
      indexReference: "d",
      glass: "Unmatched (lanthanum flint; patent 1.80000/44.1 is a design value with no catalog row)",
      role: "Negative element closing the first group",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 21",
      diagramLabel: "21",
      type: "Negative Meniscus",
      nd: 1.79952,
      vd: 41.3,
      focalLengthMm: -107.25,
      indexReference: "d",
      glass: "Unmatched (lanthanum flint; patent 1.79952/41.3 is a design value with no catalog row)",
      role: "Negative meniscus leading the fixed second-group doublet",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 22",
      diagramLabel: "22",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 60.52,
      apd: "patent",
      apdNote:
        "Col. 6 calls element 22 a special low-dispersion glass and condition (6) bounds only its νd; the patent prints no partial dispersion. Ricoh names the fifth element as ED, and the printed 1.49700/81.6 is the FCD1 coordinate (catalog dPgF +0.0323). The supplier is not established.",
      indexReference: "d",
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "ED positive meniscus giving the second-group doublet its power",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L31",
      label: "Element 31",
      diagramLabel: "31",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 68.35,
      indexReference: "d",
      glass: "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Positive high-dispersion element of the focusing doublet",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L32",
      label: "Element 32",
      diagramLabel: "32",
      type: "Biconcave Negative",
      nd: 1.7426,
      vd: 44.4,
      focalLengthMm: -29.88,
      indexReference: "d",
      glass: "Unmatched (lanthanum flint; patent 1.74260/44.4 is a design value with no catalog row)",
      role: "Negative element setting the focusing doublet's power",
      cemented: "C2",
    },
    {
      id: 8,
      name: "L41",
      label: "Element 41",
      diagramLabel: "41",
      type: "Positive Meniscus",
      nd: 1.69883,
      vd: 29.6,
      focalLengthMm: 332.35,
      indexReference: "d",
      glass: "Unmatched (dense flint; patent 1.69883/29.6 is a design value with no catalog row)",
      role: "Weak positive rear meniscus, the whole fixed fourth group",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 145.383,
      d: 8,
      sd: 36.8,
      medium: 1,
    },
    {
      label: "2",
      R: 2212.492,
      d: 0.5,
      sd: 36.8,
    },
    {
      label: "3",
      R: 84.98,
      d: 12.52,
      sd: 35.5,
      medium: 2,
    },
    {
      label: "4",
      R: -334.381,
      d: 2.23,
      sd: 35.5,
    },
    {
      label: "5",
      R: -375.882,
      d: 5,
      sd: 33.8,
      medium: 3,
    },
    {
      label: "6",
      R: 342.663,
      d: 54.85,
      sd: 33.8,
    },
    {
      label: "7",
      R: 44.773,
      d: 2.3,
      sd: 20.6,
      medium: 4,
    },
    {
      label: "8",
      R: 28.743,
      d: 9.32,
      sd: 20.6,
      medium: 5,
    },
    {
      label: "9",
      R: 577.155,
      d: 3.5,
      sd: 20.6,
    },
    {
      label: "STO",
      R: "flat",
    },
    {
      label: "10",
      R: 240.82,
      d: 6.3,
      sd: 15.8,
      medium: 6,
    },
    {
      label: "11",
      R: -70.504,
      d: 2.8,
      sd: 15.8,
      medium: 7,
    },
    {
      label: "12",
      R: 32.934,
      sd: 13.1,
      rimExtensionSd: 15.8,
    },
    {
      label: "13",
      R: -44.149,
      d: 3.5,
      sd: 17.6,
      medium: 8,
    },
    {
      label: "14",
      R: -38.307,
      d: 56.93,
      sd: 17.6,
    },
  ],
  focus: {
    closeFocusM: 1.4,
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 1170.05,
        distanceReference: "first-surface",
        sourceMagnification: "0.25",
        source: "US 7,715,116 B2, Embodiment 7 (PDF p. 19): prints “m = 0.00—−0.02—−0.25” for the close-focus state whose gaps this keyframe carries, a magnification with no object distance. The object distance is solved from the prescription at magnification 0.245, the nearest value that rounds to the print; focused on its image plane the state gives 0.24448.",
      },
    ],
    published: [1],
    description:
      "PUBLISHED inner focus: the cemented negative third group (surfaces 10–12) moves 11.29 mm toward the image while the stop stays fixed with the second group. Table 7 prints both end spacings; the stop's own gap is derived from printed d9, and positions between the ends are interpolated. Traced at the closest spacing, object to image is 1400 mm at m = −0.2445, where Table 7 prints −0.25 and Ricoh lists 1.4 m and 0.24×.",
  },
  gaps: {
    STO: { label: "D9b", values: [[3.5, 14.79]] },
    "12": { label: "D12", values: [[56.96, 45.67]] },
  },
  aperture: {
    nominalFNumber: 4.1,
    fStops: [4.1, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (+)", fromSurface: "7", toSurface: "9" },
    { text: "G3 (−) FOCUS", fromSurface: "10", toSurface: "12" },
    { text: "G4 (+)", fromSurface: "13", toSurface: "14" },
  ],
  doublets: [
    { text: "C1", fromSurface: "7", toSurface: "9" },
    { text: "C2", fromSurface: "10", toSurface: "12" },
  ],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
