import type { LensDataInput } from "../../types/optics.js";

/**
 * HASSELBLAD XCD 25mm f/2.5 V — US 2024/0329362 A1, Example 2.
 * Production correlation, not manufacturer confirmation of this prescription.
 * Patent millimetres and d-line indices; scale 1. Equation (1) uses (1 + K),
 * so K and all printed A4–A12 coefficients are used without conversion.
 * A14 is not published and is set to zero.
 * 13 lenses / 10 groups; the 16 element entries include the three 0.01000 mm
 * cement layers the patent prints, which are not additional lenses.
 * Seven aspheric surfaces on L2, L6, L10, L13. The camera cover glass is
 * modeled as a physical rear plate, not as an air-equivalent gap.
 * PUBLISHED focus: only G2 moves; both printed gap pairs (infinity and near)
 * are used as printed. Positions between them are linear interpolation, so
 * intermediate distance readings are estimates.
 * GROUP LABELS follow Fig. 2A: G1a (L1–L4) and G1b (L5–L8) are the two
 * sub-groups of the patent's G1; the stop lies between G1b and G2.
 * Published near conjugate: 135 mm to first vertex, 250 mm to the image.
 * The image plane is not refocused and no focus cam is reconstructed; the
 * 0.0001 mm rounding difference between the two gap pairs is kept.
 * PROJECTION: declares the patent's 2ω = 97.1306° (half-field 48.5653°); the
 * paraxial chief-ray estimate alone stops at 38.9° (surface 2).
 * SEMI-DIAMETERS: estimated from Fig. 2A proportions and real-ray clearance,
 * not published dimensions. Measured on Fig. 2A at 300 dpi (12.84 px/mm),
 * every element rim is within 0.5 mm (4 %) of the drawn height. L5 (12.0 mm),
 * L7 (11.7 mm) and L8 (11.4 mm) follow the drawn heights, so the group steps
 * down beside L6 as drawn. The rims of s2 (16.0 mm) and s11A/s12A (11.7 mm)
 * are limited by surface slope or slope reversal (s12A reverses at 11.8 mm;
 * s27A, at its drawn 17.3 mm, reverses at 17.5 mm); the default gap-sag
 * allowance is used. Fig. 2A draws flat lands outside the curves of s2, s4A
 * and s24 (the curves end near 16.4, 14.8 and 15.3 mm); L2 and L12 keep one
 * semi-diameter on both faces, as their rims are drawn square-cut.
 * CEMENTED JOINTS: each face of a 0.01 mm cement layer takes the height of
 * the lens it joins (L3 13.5 / L4 12.9, L7 11.7 / L8 11.4, L12 16.6 / L13
 * 17.3 mm), so the three joints render with the steps Fig. 2A draws and all
 * six lenses keep one height on both faces.
 * The stop radius is derived from the design f/2.57524; the patent does not
 * publish a diaphragm diameter.
 * Glass labels name catalog glasses with matching nd/νd, which supply the
 * dispersion curves; they are not identified production melts. The patent
 * prints no C/F/g indices and none are stored.
 */

const LENS_DATA = {
  "key": "hasselblad-xcd-25mm-f25-v",
  "maker": "Hasselblad",
  "name": "HASSELBLAD XCD 25mm f/2.5 V",
  "subtitle": "US 2024/0329362 A1, Example 2 — production correlation",
  "specs": [
    "13 ELEMENTS / 10 GROUPS",
    "DESIGN f = 25.03 mm",
    "DESIGN F/2.58",
    "7 ASPHERICAL SURFACES / 4 ELEMENTS"
  ],
  "focalLengthMarketing": 25,
  "focalLengthDesign": 25.0279,
  "apertureMarketing": 2.5,
  "apertureDesign": 2.57524,
  "lensMounts": [
    "hasselblad-xcd"
  ],
  "imageFormat": "44x33",
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 97.1306,
    "maxTraceFieldDeg": 48.5653
  },
  "patentNumber": "US 2024/0329362 A1",
  "patentAuthors": [
    "Emiri Suzuki"
  ],
  "patentAssignees": [
    "Panasonic Intellectual Property Management Co., Ltd."
  ],
  "patentYear": 2024,
  "elementCount": 13,
  "groupCount": 10,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.72916,
      "vd": 54.7,
      "indexReference": "d",
      "fl": -43.418301,
      "glass": "TAC8 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "role": "Front negative meniscus of G1a."
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus (2× Asph)",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "fl": -116.877527,
      "glass": "S-BSL7 (OHARA; coordinate equivalent; supplier unconfirmed)",
      "role": "Aspheric negative meniscus of G1a."
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.497,
      "vd": 81.6,
      "indexReference": "d",
      "fl": -65.173569,
      "glass": "FCD1 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "role": "Negative component of bonded D1.",
      "cemented": "D1",
      "apd": "inferred",
      "apdNote": "ED position in Hasselblad's datasheet diagram; nd/νd match FCD1-class extra-low-dispersion crown (catalog ΔPgF ≈ +0.032)."
    },
    {
      "id": 4,
      "name": "C1",
      "diagramLabel": "C1",
      "label": "L3–L4 cement layer",
      "type": "Optical Cement Layer",
      "nd": 1.56732,
      "vd": 42.8,
      "indexReference": "d",
      "glass": "Optical cement (patent nd=1.56732, vd=42.8)",
      "role": "0.01 mm cement layer between L3 and L4, as printed in the patent; not counted as a lens element."
    },
    {
      "id": 5,
      "name": "L4",
      "diagramLabel": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.80518,
      "vd": 25.5,
      "indexReference": "d",
      "fl": 63.788746,
      "glass": "FD60 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "role": "Positive component of bonded D1.",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L5",
      "diagramLabel": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.92286,
      "vd": 20.9,
      "indexReference": "d",
      "fl": -49.257708,
      "glass": "E-FDS1 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "role": "Negative meniscus at entrance of G1b."
    },
    {
      "id": 7,
      "name": "L6",
      "diagramLabel": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.81055,
      "vd": 41.1,
      "indexReference": "d",
      "fl": 38.379929,
      "glass": "K-VC181 (SUMITA; coordinate equivalent; supplier unconfirmed)",
      "role": "Aspheric positive element in G1b."
    },
    {
      "id": 8,
      "name": "L7",
      "diagramLabel": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.8061,
      "vd": 33.3,
      "indexReference": "d",
      "fl": -53.41309,
      "glass": "NBFD15 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "role": "Negative component of bonded D2.",
      "cemented": "D2"
    },
    {
      "id": 9,
      "name": "C2",
      "diagramLabel": "C2",
      "label": "L7–L8 cement layer",
      "type": "Optical Cement Layer",
      "nd": 1.56732,
      "vd": 42.8,
      "indexReference": "d",
      "glass": "Optical cement (patent nd=1.56732, vd=42.8)",
      "role": "0.01 mm cement layer between L7 and L8, as printed in the patent; not counted as a lens element."
    },
    {
      "id": 10,
      "name": "L8",
      "diagramLabel": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.55032,
      "vd": 75.5,
      "indexReference": "d",
      "fl": 22.853095,
      "glass": "FCD705 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "role": "Positive component of bonded D2 before the stop.",
      "cemented": "D2",
      "apd": "inferred",
      "apdNote": "ED position in Hasselblad's datasheet diagram; nd/νd match FCD705-class extra-low-dispersion crown (catalog ΔPgF ≈ +0.023)."
    },
    {
      "id": 11,
      "name": "L9",
      "diagramLabel": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.98612,
      "vd": 16.5,
      "indexReference": "d",
      "fl": 52.487758,
      "glass": "FDS16-W (HOYA; coordinate equivalent; supplier unconfirmed)",
      "role": "Positive component of moving G2."
    },
    {
      "id": 12,
      "name": "L10",
      "diagramLabel": "L10",
      "label": "Element 10",
      "type": "Biconcave Negative (2× Asph)",
      "nd": 1.68948,
      "vd": 31.0,
      "indexReference": "d",
      "fl": -30.695964,
      "glass": "L-TIM28 (OHARA; coordinate equivalent; supplier unconfirmed)",
      "role": "Aspheric negative component of moving G2."
    },
    {
      "id": 13,
      "name": "L11",
      "diagramLabel": "L11",
      "label": "Element 11",
      "type": "Biconvex Positive",
      "nd": 1.5941,
      "vd": 60.5,
      "indexReference": "d",
      "fl": 37.965236,
      "glass": "FCD600 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "role": "Positive element in fixed G3.",
      "apd": "inferred",
      "apdNote": "ED position in Hasselblad's datasheet diagram; nd/νd match FCD600-class glass (catalog ΔPgF ≈ +0.013, a weaker anomaly than L3 and L8 at νd = 60.5)."
    },
    {
      "id": 14,
      "name": "L12",
      "diagramLabel": "L12",
      "label": "Element 12",
      "type": "Biconcave Negative",
      "nd": 1.85451,
      "vd": 25.2,
      "indexReference": "d",
      "fl": -24.173834,
      "glass": "NBFD25 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "role": "Negative component of bonded D3.",
      "cemented": "D3"
    },
    {
      "id": 15,
      "name": "C3",
      "diagramLabel": "C3",
      "label": "L12–L13 cement layer",
      "type": "Optical Cement Layer",
      "nd": 1.56732,
      "vd": 42.8,
      "indexReference": "d",
      "glass": "Optical cement (patent nd=1.56732, vd=42.8)",
      "role": "0.01 mm cement layer between L12 and L13, as printed in the patent; not counted as a lens element."
    },
    {
      "id": 16,
      "name": "L13",
      "diagramLabel": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive (1× Asph)",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "fl": 44.513643,
      "glass": "S-BSL7 (OHARA; coordinate equivalent; supplier unconfirmed)",
      "role": "Aspheric positive component of bonded D3.",
      "cemented": "D3"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 42.4798,
      "d": 1.9,
      "nd": 1.72916,
      "elemId": 1,
      "sd": 22.0
    },
    {
      "label": "2",
      "R": 17.7977,
      "d": 5.1626,
      "nd": 1,
      "elemId": 0,
      "sd": 16.0
    },
    {
      "label": "3A",
      "R": 19.5569,
      "d": 1.4075,
      "nd": 1.51633,
      "elemId": 2,
      "sd": 16.2
    },
    {
      "label": "4A",
      "R": 14.4083,
      "d": 11.8338,
      "nd": 1,
      "elemId": 0,
      "sd": 16.2
    },
    {
      "label": "5",
      "R": -104.6011,
      "d": 1.215,
      "nd": 1.497,
      "elemId": 3,
      "sd": 13.5
    },
    {
      "label": "6",
      "R": 47.102,
      "d": 0.01,
      "nd": 1.56732,
      "elemId": 4,
      "sd": 13.5
    },
    {
      "label": "7",
      "R": 47.102,
      "d": 4.786,
      "nd": 1.80518,
      "elemId": 5,
      "sd": 12.9
    },
    {
      "label": "8",
      "R": 542.229,
      "d": 6.3193,
      "nd": 1,
      "elemId": 0,
      "sd": 12.9
    },
    {
      "label": "9",
      "R": -19.6495,
      "d": 1.1,
      "nd": 1.92286,
      "elemId": 6,
      "sd": 12.0
    },
    {
      "label": "10",
      "R": -35.5397,
      "d": 0.35,
      "nd": 1,
      "elemId": 0,
      "sd": 12.0
    },
    {
      "label": "11A",
      "R": 85.8125,
      "d": 7.9722,
      "nd": 1.81055,
      "elemId": 7,
      "sd": 11.7
    },
    {
      "label": "12A",
      "R": -46.7702,
      "d": 0.9356,
      "nd": 1,
      "elemId": 0,
      "sd": 11.7
    },
    {
      "label": "13",
      "R": 40.5856,
      "d": 1.1,
      "nd": 1.8061,
      "elemId": 8,
      "sd": 11.7
    },
    {
      "label": "14",
      "R": 20.6395,
      "d": 0.01,
      "nd": 1.56732,
      "elemId": 9,
      "sd": 11.7
    },
    {
      "label": "15",
      "R": 20.6395,
      "d": 8.1458,
      "nd": 1.55032,
      "elemId": 10,
      "sd": 11.4
    },
    {
      "label": "16",
      "R": -27.683,
      "d": 3.6304,
      "nd": 1,
      "elemId": 0,
      "sd": 11.4
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 3.4763,
      "nd": 1,
      "elemId": 0,
      "sd": 9.6912241752
    },
    {
      "label": "18",
      "R": 254.3544,
      "d": 2.817,
      "nd": 1.98612,
      "elemId": 11,
      "sd": 10
    },
    {
      "label": "19",
      "R": -64.6254,
      "d": 0.4096,
      "nd": 1,
      "elemId": 0,
      "sd": 10
    },
    {
      "label": "20A",
      "R": -53.8755,
      "d": 1.5506,
      "nd": 1.68948,
      "elemId": 12,
      "sd": 10
    },
    {
      "label": "21A",
      "R": 35.267,
      "d": 10.7609,
      "nd": 1,
      "elemId": 0,
      "sd": 10
    },
    {
      "label": "22",
      "R": 85.0306,
      "d": 7.3267,
      "nd": 1.5941,
      "elemId": 13,
      "sd": 15.6
    },
    {
      "label": "23",
      "R": -29.7123,
      "d": 5.8852,
      "nd": 1,
      "elemId": 0,
      "sd": 15.6
    },
    {
      "label": "24",
      "R": -38.4317,
      "d": 1.1,
      "nd": 1.85451,
      "elemId": 14,
      "sd": 16.6
    },
    {
      "label": "25",
      "R": 45.2517,
      "d": 0.01,
      "nd": 1.56732,
      "elemId": 15,
      "sd": 16.6
    },
    {
      "label": "26",
      "R": 45.2517,
      "d": 6.7895,
      "nd": 1.51633,
      "elemId": 16,
      "sd": 17.3
    },
    {
      "label": "27A",
      "R": -44.32,
      "d": 16.1959,
      "nd": 1,
      "elemId": 0,
      "sd": 17.3
    }
  ],
  "rearPlates": [
    {
      "label": "CG",
      "thicknessMm": 1.8,
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "glass": "BSC7 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "gapAfterMm": 1,
      "source": "US 2024/0329362 A1 Example 2 Table 2A, surfaces 28–29; physical cover glass."
    }
  ],
  "asph": {
    "3A": {
      "A4": 9.54293e-06,
      "A6": -1.64489e-07,
      "A8": 3.04689e-10,
      "A10": -5.63399e-13,
      "A12": 0.0,
      "A14": 0,
      "K": 0.0
    },
    "4A": {
      "A4": 4.20301e-05,
      "A6": -1.90745e-07,
      "A8": 4.02908e-10,
      "A10": -1.26027e-12,
      "A12": 6.23089e-16,
      "A14": 0,
      "K": -1.10056
    },
    "11A": {
      "A4": 1.9076e-05,
      "A6": 4.03766e-08,
      "A8": 2.0266e-11,
      "A10": -4.20963e-13,
      "A12": 1.91389e-16,
      "A14": 0,
      "K": 0.0
    },
    "12A": {
      "A4": 2.54671e-05,
      "A6": 6.21091e-08,
      "A8": 1.85956e-11,
      "A10": 7.07399e-13,
      "A12": -3.75896e-15,
      "A14": 0,
      "K": 0.0
    },
    "20A": {
      "A4": 1.2334e-05,
      "A6": -1.71693e-07,
      "A8": 1.4013e-09,
      "A10": -4.63411e-12,
      "A12": 0.0,
      "A14": 0,
      "K": 0.0
    },
    "21A": {
      "A4": 1.83635e-05,
      "A6": -1.65064e-07,
      "A8": 1.266e-09,
      "A10": -3.91893e-12,
      "A12": 0.0,
      "A14": 0,
      "K": 0.0
    },
    "27A": {
      "A4": 1.81562e-05,
      "A6": 8.31766e-11,
      "A8": 1.93659e-11,
      "A10": -2.45165e-14,
      "A12": 0.0,
      "A14": 0,
      "K": 0.0
    }
  },
  "var": {
    "STO": [
      3.4763,
      8.4436
    ],
    "21A": [
      10.7609,
      5.7937
    ]
  },
  "publishedStations": {
    "focus": [
      1
    ]
  },
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 135,
      "distanceReference": "first-surface",
      "source": "US 2024/0329362 A1 Example 2 Table 2C: d0 = 135.0000 mm to first vertex; d17 = 8.4436 mm, d21 = 5.7937 mm. Fixed physical image plane and source-rounded residual retained."
    }
  ],
  "varLabels": [
    [
      "STO",
      "d17"
    ],
    [
      "21A",
      "d21"
    ]
  ],
  "groups": [
    {
      "text": "G1a (−)",
      "fromSurface": "1",
      "toSurface": "8"
    },
    {
      "text": "G1b (+)",
      "fromSurface": "9",
      "toSurface": "16"
    },
    {
      "text": "G2 (−) FOCUS",
      "fromSurface": "18",
      "toSurface": "21A"
    },
    {
      "text": "G3 (+)",
      "fromSurface": "22",
      "toSurface": "27A"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "5",
      "toSurface": "8"
    },
    {
      "text": "D2",
      "fromSurface": "13",
      "toSurface": "16"
    },
    {
      "text": "D3",
      "fromSurface": "24",
      "toSurface": "27A"
    }
  ],
  "closeFocusM": 0.25,
  "focusDescription": "PUBLISHED infinity and close-focus states (patent Table 2C). Inner focus: only the negative group G2 (L9–L10) moves, 4.97 mm toward the image; G1 (sub-groups G1a and G1b), the stop and G3 stay fixed. The close state places the object 135 mm in front of the first surface, 250 mm from the image plane, matching the marketed 0.25 m minimum focus distance. Positions between the two printed states are linear interpolation of the gaps, so intermediate distance readings are approximate.",
  "nominalFno": 2.57524,
  "fstopSeries": [
    2.57524,
    2.8,
    4,
    5.6,
    8,
    11,
    16,
    22,
    32
  ],
  "maxFstop": 32,
  "yScFill": 0.3
} satisfies LensDataInput;

export default LENS_DATA;
