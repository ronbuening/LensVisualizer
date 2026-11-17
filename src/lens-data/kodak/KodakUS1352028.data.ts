import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 1,352,028 A (Frank E. Ross, assignor to Eastman Kodak Company; filed March 17, 1919, granted September 7, 1920),
 * Figure 1, the first of the patent's two numerical examples. Radii, thicknesses, the 3 mm air space, sodium D indices
 * and Abbe numbers are copied as printed, in millimetres at the patent's own scale (no scaling). The table prints radius
 * magnitudes only; the signs follow the Figure 1 drawing and the text's description of each lens. The dense flint of
 * L1 and L3 matches F4 (Sumita) at the sodium D line (nD 1.61644 / νD 36.61) and at G′ (1.63871 against L3's printed
 * 1.63883); the other three glasses have no exact catalog row and keep the patent's names in Unmatched labels.
 *
 * The patent also prints G′-line (434.05 nm) indices, which are not used here. Its stated focal length (98.02) and
 * Gauss points (6.007 behind R1, 7.728 ahead of R7) are G′-line values: the table reproduces them (98.03, 6.006,
 * 7.729) at G′ when L1's printed G′ index 1.63833 is read as L3's 1.63883 for the same dense flint. At the D line the
 * model's focal length is 98.27 mm. The stated component focal lengths (−298.0 and +69.4) are not reproduced; see
 * source.errata.
 *
 * Inferred: the iris at the middle of the 3 mm air space (the drawing marks the space "S" but gives no stop position)
 * and the image plane at the computed D-line paraxial back focus, 90.77 mm. Infinity only; the patent gives no focusing
 * data. The image circle, 113 mm, is the patent's stated 60° field at its stated 98.02 mm focal length.
 *
 * SEMI-DIAMETERS: estimated from Figure 1, floor-checked by real-ray trace. Measured at 600 dpi the figure is to scale
 * axially (78 px/mm over R1 to R7; the 4 mm lenses within 3 %) and across it (arc fits to R1 and R7 agree within 2 %),
 * but it draws both cemented components as square blocks only about 5.9 mm in semi-diameter, less than the f/7 axial
 * beam needs (7.02 mm at R1). The outer faces therefore keep 8 mm: both blocks at one height as drawn, and any reduction
 * toward the drawing costs corner light (both blocks at 7.9 mm lose 2.7 points at 30°, at 7.8 mm 5.1, at 7.1 mm 22).
 * The drawing bevels both faces across the air space, ending R4 and R5 at 0.79 to 0.80 of the block height; at 0.80
 * both end at 6.4 mm, above the axial beam (6.13 / 6.17 mm), for at most 0.1 point of corner light. Each of those two
 * faces carries a flat land out to the 8 mm block edge (rimExtensionSd), so both blocks keep the drawing's flat tops and
 * only the corners facing the air space are relieved.
 */
const LENS_DATA = {
  schema: 2,
  key: "kodak-98mm-f7-us1352028",
  maker: "Kodak",
  name: "KODAK 98mm f/7 (US 1,352,028 Design)",
  subtitle: "US 1,352,028 A, Figure 1 \u2014 F. E. Ross wide-field anastigmat",
  visible: true,
  catalog: {
    specs: [
      "5 ELEMENTS / 2 GROUPS",
      "ALL SPHERICAL",
      "DESIGN f = 98.02 mm",
      "DESIGN F/7",
      "60° FIELD"
    ],
    elementCount: 5,
    groupCount: 2,
    imageCircleMm: 113,
    focalLengthMm: {
      design: 98.27
    },
    fNumber: {
      design: 7
    }
  },
  source: {
    patentNumber: "US 1,352,028 A",
    example: {
      label: "Figure 1",
      id: "1"
    },
    patentYear: 1920,
    authors: [
      "Frank E. Ross"
    ],
    assignees: [
      "Eastman Kodak Company"
    ],
    errata: [
      {
        status: "unresolved",
        note: "The patent states focal lengths of −298.0 for the front component and +69.4 for the rear component. The printed table gives −545.4 and +73.7 at the D line, and −506.1 and +72.5 at the G′ line, where it does reproduce the stated objective focal length (98.02) and both Gauss points once L1's G′ index is read as L3's. No single misread radius, thickness or index reproduces the component values while keeping the objective values, so the printed prescription is kept."
      }
    ],
    sdSource: "heuristic"
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6165,
      vd: 36.5,
      indexReference: "D",
      focalLengthMm: 21.8,
      glass: "F4 (SUMITA catalog equivalent; production supplier unspecified)",
      cemented: "C1",
      role: "Outer biconvex dense flint of the negative front triplet"
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.5265,
      vd: 58.4,
      indexReference: "D",
      focalLengthMm: 50.67,
      glass: "Unmatched (nD 1.52650 / V 58.4, silicate crown)",
      cemented: "C1",
      role: "Thick low-index crown meniscus at the center of the front triplet"
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6165,
      vd: 36.5,
      indexReference: "D",
      focalLengthMm: -14.07,
      glass: "F4 (SUMITA catalog equivalent; production supplier unspecified)",
      cemented: "C1",
      role: "Inner biconcave dense flint of the front triplet; the strongest negative element"
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5211,
      vd: 51.8,
      indexReference: "D",
      focalLengthMm: -24.43,
      glass: "Unmatched (nD 1.52110 / V 51.8, telescope flint)",
      cemented: "C2",
      role: "Low-index negative flint of the positive rear doublet"
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.61088,
      vd: 57.2,
      indexReference: "D",
      focalLengthMm: 19.58,
      glass: "Unmatched (nD 1.61088 / V 57.2, barium crown)",
      cemented: "C2",
      role: "Biconvex barium crown carrying the rear doublet's positive power"
    }
  ],
  surfaces: [
    {
      label: "1",
      R: 28.4,
      d: 4,
      sd: 8,
      medium: 1
    },
    {
      label: "2",
      R: -24.15,
      d: 4,
      sd: 8,
      medium: 2
    },
    {
      label: "3",
      R: -13.4,
      d: 1,
      sd: 8,
      medium: 3
    },
    {
      label: "4",
      R: 25.3,
      d: 1.5,
      sd: 6.4,
      rimExtensionSd: 8
    },
    {
      label: "STO",
      R: "flat",
      d: 1.5
    },
    {
      label: "5",
      R: -27.3,
      d: 1,
      sd: 6.4,
      rimExtensionSd: 8,
      medium: 4
    },
    {
      label: "6",
      R: 24.15,
      d: 4,
      sd: 8,
      medium: 5
    },
    {
      label: "7",
      R: -22.22,
      d: 90.76557645241796,
      sd: 8
    }
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data."
  },
  aperture: {
    nominalFNumber: 7,
    fStops: [
      7,
      8,
      11,
      16,
      22,
      32
    ]
  },
  groups: [],
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "4"
    },
    {
      text: "C2",
      fromSurface: "5",
      toSurface: "7"
    }
  ],
  layout: {
    yScFill: 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
