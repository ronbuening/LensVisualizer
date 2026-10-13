import type { LensDataInput } from "../../types/optics.js";

/**
 * CN 112285890 B, Example 2 (Figure 3); patent millimetres and d-line nd/vd, no scaling and no value changes.
 * The link to the production lens is construction-based, not a confirmed manufactured prescription.
 * The patent's K is the conic constant of its (1+K) sag equation and is used directly; A4-A12 are copied as
 * printed for surfaces 22 and 23. No cover plate is prescribed.
 * The stop radius is derived: the real axial ray entering at EFL/(2 x 0.98) is traced to the stop (surface 10).
 * Semi-diameters are estimated from Figure 3 and floor-checked by real-ray trace at both focus states; the
 * patent prints no clear apertures. Where the figure ends a curved face at a flat annulus (surfaces 4, 9, 11
 * and 22A) the value is the annulus's inner edge; surface 14 follows L8's rim, drawn above the L9/L10 block.
 * Surfaces 6 and 7 would meet at a height of about 23.8 mm across their 0.990 mm gap, just outside the f/0.98
 * axial beam (23.19 mm at surface 6, 23.16 mm at surface 7); Figure 3 draws them touching at the rim, with
 * L3 a knife edge at about 25.4 mm and the L4/L5 block square-cut at about 24.9 mm. L3's rear face (surface
 * 6) is held to 23.2 mm and gapSagFrac is 0.96; L4's front face (surface 7) follows the block at 25.1 mm,
 * level with its cemented face. L3's straight edge still ends at the 25.4 mm tip of its front face.
 * Surfaces 19 and 20 would likewise meet at about 17.5 mm across their 0.904 mm gap, so surface 20 is held to
 * 17.1 mm, the largest value the same 0.96 allowance admits (combined sag 0.86 mm of the 0.868 mm allowed).
 * Figure 3 draws L12 as a square block out to about 18.0 mm, touching L11 at the rim, so surface 21 carries
 * the same 17.1 mm; its curve ends at a flat annulus near 15.8 mm in the figure.
 * Cemented components are labelled C1-C3 and the variable gaps D(2) and D(9) as in the patent table; the
 * patent's D1 and D2 are the group separations of its conditional expression (1).
 * Focus: the patent tabulates infinity and a 2500 mm object distance only. It does not state the reference
 * point; the model's paraxial conjugate lies 2497 mm in front of surface 1, so the distance is read as measured
 * from the first surface. closeFocusM is that state's object-to-image distance, not the marketed 0.5 m minimum
 * focus. Intermediate focus positions and their distance labels are interpolated.
 * Group names follow the patent text (G1 fixed, G2 and G3 moving); the braces in Figure 3 call the two moving
 * groups G1 and G2 instead.
 * Source inconsistency: the printed table gives about -0.16 mm of marginal longitudinal spherical aberration at
 * f/0.98, while the d-line curve in the patent's own Figure 4 stays within about 0.02 mm of zero. Values are
 * kept as printed.
 * Eight elements carry coordinate-equal catalog glass names (supplier unconfirmed) and trace on those catalog
 * dispersion curves; the five Unmatched elements use the Abbe-number model.
 * L1 and L8 share nd = 1.497, vd = 81.61; the maker's diagram marks only L8 as ED, so only L8 carries apd.
 */

const LENS_DATA = {
  "key": "laowa-argus-45mm-f095-ff",
  "name": "LAOWA ARGUS 45mm f/0.95 FF",
  "maker": "Laowa",
  "subtitle": "CN 112285890 B, Example 2 — construction-based production correlation",
  "patentNumber": "CN 112285890 B",
  "patentAuthors": [
    "Dayong Li"
  ],
  "patentAssignees": [
    "Anhui Changgeng Optics Technology Co., Ltd."
  ],
  "patentYear": 2024,
  "elementCount": 13,
  "groupCount": 9,
  "lensMounts": [
    "sony-fe",
    "nikon-z",
    "canon-rf"
  ],
  "imageFormat": "135-full-frame",
  "focalLengthMarketing": 45,
  "focalLengthDesign": 44.89043935178832,
  "apertureMarketing": 0.95,
  "apertureDesign": 0.98,
  "nominalFno": 0.98,
  "closeFocusM": 2.619397222499145,
  "focusPositions": [
    0,
    1
  ],
  "publishedStations": {
    "focus": [
      1
    ]
  },
  "focusDescription": "PUBLISHED gap sets for infinity and for a 2500 mm object distance, the only two states the patent tabulates; the model places that object 2497 mm in front of the first surface. G1 is fixed. G2 (auxiliary) and G3 (main) move toward the object independently, by 2.25 mm and 0.91 mm at the near state, and the stop rides with G3; overall length is constant. The 2.62 m near limit is that state's paraxial object-to-image distance, not the marketed 0.5 m minimum focus. Intermediate positions and distance labels are linear interpolations, not a published cam.",
  "specs": [
    "13 ELEMENTS / 9 GROUPS",
    "DESIGN f = 44.89 mm",
    "DESIGN F/0.98",
    "2 ASPHERICAL SURFACES / 1 ELEMENT"
  ],
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": -220.1436863164563,
      "glass": "H-FK61 (CDGM, coordinate equivalent; supplier unconfirmed)"
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.88421,
      "vd": 37.0,
      "indexReference": "d",
      "fl": 168.97125859772416,
      "glass": "Unmatched (nd 1.88421, vd 37.00; no close catalog match)"
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.883,
      "vd": 40.8,
      "indexReference": "d",
      "fl": 54.738699842190236,
      "glass": "TAFD30 (HOYA, coordinate equivalent; supplier unconfirmed)"
    },
    {
      "id": 4,
      "name": "L4",
      "diagramLabel": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.92286,
      "vd": 20.88,
      "indexReference": "d",
      "fl": 195.13855448831984,
      "glass": "E-FDS1 (HOYA, coordinate equivalent; supplier unconfirmed)",
      "cemented": "C1"
    },
    {
      "id": 5,
      "name": "L5",
      "diagramLabel": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.6966,
      "vd": 28.87,
      "indexReference": "d",
      "fl": -31.940642968254895,
      "glass": "Unmatched (nd 1.69660, vd 28.87; no close catalog match)",
      "cemented": "C1"
    },
    {
      "id": 6,
      "name": "L6",
      "diagramLabel": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.64465,
      "vd": 33.02,
      "indexReference": "d",
      "fl": -34.86547198966114,
      "glass": "Unmatched (nd 1.64465, vd 33.02; no close catalog match)",
      "cemented": "C2"
    },
    {
      "id": 7,
      "name": "L7",
      "diagramLabel": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.83098,
      "vd": 46.0,
      "indexReference": "d",
      "fl": 35.32416094434064,
      "glass": "Unmatched (nd 1.83098, vd 46.00; no close catalog match)",
      "cemented": "C2"
    },
    {
      "id": 8,
      "name": "L8",
      "diagramLabel": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": 46.58640311708475,
      "glass": "H-FK61 (CDGM, coordinate equivalent; supplier unconfirmed)",
      "cemented": "C3",
      "apd": "inferred",
      "apdNote": "ED fluorophosphate class inferred from nd = 1.497 and νd = 81.61; Venus Optics' construction diagram marks this element as the lens's single ED element, while L1 has the same nd/νd but is not marked and is left untagged. The patent publishes no partial-dispersion data."
    },
    {
      "id": 9,
      "name": "L9",
      "diagramLabel": "L9",
      "label": "Element 9",
      "type": "Biconcave Negative",
      "nd": 1.62004,
      "vd": 36.3,
      "indexReference": "d",
      "fl": -54.0675792165704,
      "glass": "E-F2 (HOYA, coordinate equivalent; supplier unconfirmed)",
      "cemented": "C3"
    },
    {
      "id": 10,
      "name": "L10",
      "diagramLabel": "L10",
      "label": "Element 10",
      "type": "Positive Meniscus",
      "nd": 1.883,
      "vd": 40.8,
      "indexReference": "d",
      "fl": 67.78227591700897,
      "glass": "TAFD30 (HOYA, coordinate equivalent; supplier unconfirmed)",
      "cemented": "C3"
    },
    {
      "id": 11,
      "name": "L11",
      "diagramLabel": "L11",
      "label": "Element 11",
      "type": "Biconvex Positive",
      "nd": 1.883,
      "vd": 40.8,
      "indexReference": "d",
      "fl": 49.988449619898276,
      "glass": "TAFD30 (HOYA, coordinate equivalent; supplier unconfirmed)"
    },
    {
      "id": 12,
      "name": "L12",
      "diagramLabel": "L12",
      "label": "Element 12",
      "type": "Biconcave Negative",
      "nd": 1.64079,
      "vd": 33.41,
      "indexReference": "d",
      "fl": -61.220658870464945,
      "glass": "Unmatched (nd 1.64079, vd 33.41; no close catalog match)"
    },
    {
      "id": 13,
      "name": "L13",
      "diagramLabel": "L13",
      "label": "Element 13",
      "type": "Negative Meniscus (2x Asph)",
      "nd": 1.883,
      "vd": 40.8,
      "indexReference": "d",
      "fl": -328.53981977534767,
      "glass": "TAFD30 (HOYA, coordinate equivalent; supplier unconfirmed)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 62.435,
      "d": 1.6,
      "nd": 1.497,
      "elemId": 1,
      "sd": 31.5
    },
    {
      "label": "2",
      "R": 39.413,
      "d": 11.666,
      "nd": 1.0,
      "elemId": 0,
      "sd": 28.2
    },
    {
      "label": "3",
      "R": 54.827,
      "d": 3.978,
      "nd": 1.88421,
      "elemId": 2,
      "sd": 27.5
    },
    {
      "label": "4",
      "R": 83.661,
      "d": 0.572,
      "nd": 1.0,
      "elemId": 0,
      "sd": 24.4
    },
    {
      "label": "5",
      "R": 42.592,
      "d": 7.5,
      "nd": 1.883,
      "elemId": 3,
      "sd": 25.4
    },
    {
      "label": "6",
      "R": 328.905,
      "d": 0.99,
      "nd": 1.0,
      "elemId": 0,
      "sd": 23.2
    },
    {
      "label": "7",
      "R": -2172.659,
      "d": 5.0,
      "nd": 1.92286,
      "elemId": 4,
      "sd": 25.1
    },
    {
      "label": "8",
      "R": -166.485,
      "d": 5.287,
      "nd": 1.6966,
      "elemId": 5,
      "sd": 25.1
    },
    {
      "label": "9",
      "R": 26.017,
      "d": 8.966,
      "nd": 1.0,
      "elemId": 0,
      "sd": 18.5
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 9.285,
      "nd": 1.0,
      "elemId": 0,
      "sd": 18.026436837451403
    },
    {
      "label": "11",
      "R": -38.48,
      "d": 1.2,
      "nd": 1.64465,
      "elemId": 6,
      "sd": 18.8
    },
    {
      "label": "12",
      "R": 54.702,
      "d": 12.7,
      "nd": 1.83098,
      "elemId": 7,
      "sd": 23.5
    },
    {
      "label": "13",
      "R": -56.671,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 23.5
    },
    {
      "label": "14",
      "R": 29.032,
      "d": 15.0,
      "nd": 1.497,
      "elemId": 8,
      "sd": 23.2
    },
    {
      "label": "15",
      "R": -94.732,
      "d": 1.2,
      "nd": 1.62004,
      "elemId": 9,
      "sd": 22.0
    },
    {
      "label": "16",
      "R": 52.137,
      "d": 6.41,
      "nd": 1.883,
      "elemId": 10,
      "sd": 22.0
    },
    {
      "label": "17",
      "R": 381.164,
      "d": 0.383,
      "nd": 1.0,
      "elemId": 0,
      "sd": 22.0
    },
    {
      "label": "18",
      "R": 45.653,
      "d": 8.0,
      "nd": 1.883,
      "elemId": 11,
      "sd": 19.3
    },
    {
      "label": "19",
      "R": -1222.262,
      "d": 0.904,
      "nd": 1.0,
      "elemId": 0,
      "sd": 19.3
    },
    {
      "label": "20",
      "R": -150.009,
      "d": 1.0,
      "nd": 1.64079,
      "elemId": 12,
      "sd": 17.1
    },
    {
      "label": "21",
      "R": 53.26,
      "d": 6.176,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17.1
    },
    {
      "label": "22A",
      "R": -117.94,
      "d": 1.6,
      "nd": 1.883,
      "elemId": 13,
      "sd": 15.7
    },
    {
      "label": "23A",
      "R": -200.0,
      "d": 12.8692,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17.9
    }
  ],
  "asph": {
    "22A": {
      "K": -95.0,
      "A4": -5.4446e-05,
      "A6": 1.29944e-07,
      "A8": -2.15045e-10,
      "A10": 3.43403e-13,
      "A12": -2.08375e-15,
      "A14": 0.0
    },
    "23A": {
      "K": 0.0,
      "A4": -2.26938e-05,
      "A6": 4.66871e-08,
      "A8": 5.31197e-10,
      "A10": -2.34658e-12,
      "A12": 2.67922e-15,
      "A14": 0.0
    }
  },
  "var": {
    "2": [
      11.666,
      9.4148
    ],
    "9": [
      8.966,
      10.3063
    ],
    "23A": [
      12.8692,
      13.7801
    ]
  },
  "varLabels": [
    [
      "2",
      "D(2)"
    ],
    [
      "9",
      "D(9)"
    ],
    [
      "23A",
      "BF"
    ]
  ],
  "groups": [
    {
      "text": "G1 (FIXED)",
      "fromSurface": "1",
      "toSurface": "2"
    },
    {
      "text": "G2 (AUX FOCUS)",
      "fromSurface": "3",
      "toSurface": "9"
    },
    {
      "text": "G3 (MAIN FOCUS)",
      "fromSurface": "11",
      "toSurface": "23A"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "7",
      "toSurface": "9"
    },
    {
      "text": "C2",
      "fromSurface": "11",
      "toSurface": "13"
    },
    {
      "text": "C3",
      "fromSurface": "14",
      "toSurface": "17"
    }
  ],
  "fstopSeries": [
    0.98,
    1.4,
    2,
    2.8,
    4,
    5.6,
    8,
    11,
    16
  ],
  "maxFstop": 16,
  "apertureBlades": 15,
  "scFill": 0.72,
  "yScFill": 0.62,
  "gapSagFrac": 0.96
} satisfies LensDataInput;

export default LENS_DATA;
