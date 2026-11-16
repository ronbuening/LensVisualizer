import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Olympus M.Zuiko Digital ED 8-25mm F4.0 PRO.
 * Source: WO 2022/137385 A1 (Olympus Corporation), Numerical Example 2, in millimetres at the patent's own scale
 * (scale factor 1, no unit conversion). Radii, thicknesses, nd/νd (d-line), conics and aspheric coefficients are as
 * printed; the patent's k is this file's K. The stop is the patent's surface 11 and moves with the second group.
 * Surface labels follow the patent's numbering; an "A" suffix marks the five aspheric surfaces (3A, 4A, 19A, 23A, 24A).
 * Product link: the maker states 16 elements in 10 groups, and its construction diagram matches this example element
 * by element. Examples 1 to 3 of the patent share the layout, so Example 2 is one of three equally good candidates.
 * Zoom stations 0, 64 and 128 are the three printed positions (wide, middle, tele); the 126 stations between them
 * (published: false) are calculated: gaps d7, d11 and d27 are interpolated linearly, and the cemented focus group
 * (surfaces 20–22) is shifted between d19 and d22 to hold paraxial focus. Infinity focus only.
 * Inferred: every semi-diameter except surface 1 (the patent prints the front effective diameter, 39.92 mm), and
 * the stop semi-diameter. The third group's rims (surfaces 12–19A) follow the patent's Fig. 3(b), held just large
 * enough that wide-end illumination stays within 3 points of the wider estimate; the other rims are estimates that
 * agree with the figure within about 10 %, except the fifth group, kept larger than drawn to pass the tele and
 * middle corner beams. The stop semi-diameter is set from the printed f-number, 4.08, at each station. The last gap
 * d27 is the printed back focus. Glass names are catalogue rows whose nd and νd equal the printed values; the patent names no glass.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-mzuiko-8-25-f4-pro",
  "maker": "Olympus",
  "name": "OLYMPUS M.ZUIKO DIGITAL ED 8-25mm f/4 PRO",
  "subtitle": "WO 2022/137385 A1, Example 2 — element-by-element match to the maker's construction diagram",
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.8707,
      "vd": 40.73,
      "indexReference": "d",
      "focalLengthMm": -34.9,
      "glass": "TAFD32 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Front negative meniscus of the first group; begins bending the 112° wide-end field toward the axis."
    },
    {
      "id": 2,
      "name": "L12",
      "label": "Element 2",
      "type": "Negative Meniscus (2× Asph)",
      "nd": 1.58253,
      "vd": 59.32,
      "indexReference": "d",
      "focalLengthMm": -33,
      "glass": "Unmatched (nd 1.58253 / νd 59.32; moldable crown)",
      "role": "Dual-sided aspherical negative meniscus, the maker's DSA element; its two aspheres control wide-end distortion and field curvature."
    },
    {
      "id": 3,
      "name": "L13",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.43875,
      "vd": 94.66,
      "indexReference": "d",
      "focalLengthMm": -31.4,
      "glass": "S-FPL55 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "The maker's construction diagram marks this element Super ED, and its printed nd 1.43875 / νd 94.66 equals OHARA's S-FPL55.",
      "role": "Super ED negative front member of the cemented pair C1; adds negative power to the first group with very low dispersion.",
      "cemented": "C1"
    },
    {
      "id": 4,
      "name": "L14",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.95375,
      "vd": 32.32,
      "indexReference": "d",
      "focalLengthMm": 31.8,
      "glass": "TAFD45 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "High-index positive rear member of C1 and the only positive element of the first group; corrects the group's colour.",
      "cemented": "C1"
    },
    {
      "id": 5,
      "name": "L21",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.65412,
      "vd": 39.68,
      "indexReference": "d",
      "focalLengthMm": 23.5,
      "glass": "S-NBH5 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive front member of the cemented pair C2, the weakly positive second group that sits just ahead of the stop.",
      "cemented": "C2"
    },
    {
      "id": 6,
      "name": "L22",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.8707,
      "vd": 40.73,
      "indexReference": "d",
      "focalLengthMm": -25.5,
      "glass": "TAFD32 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Negative rear member of C2; nearly cancels L21 so the second group has a focal length of about 270 mm.",
      "cemented": "C2"
    },
    {
      "id": 7,
      "name": "L31",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.51633,
      "vd": 64.14,
      "indexReference": "d",
      "focalLengthMm": 21.5,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive front member of the cemented pair C3 that opens the third group behind the stop.",
      "cemented": "C3"
    },
    {
      "id": 8,
      "name": "L32",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.8707,
      "vd": 40.73,
      "indexReference": "d",
      "focalLengthMm": -18.1,
      "glass": "TAFD32 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "High-index negative rear member of C3; corrects spherical aberration and colour of the third group.",
      "cemented": "C3"
    },
    {
      "id": 9,
      "name": "L33",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.8515,
      "vd": 40.78,
      "indexReference": "d",
      "focalLengthMm": 28,
      "glass": "S-LAH89 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Symmetric biconvex element carrying a large share of the third group's positive power."
    },
    {
      "id": 10,
      "name": "L34",
      "label": "Element 10",
      "type": "Negative Meniscus",
      "nd": 1.91082,
      "vd": 35.25,
      "indexReference": "d",
      "focalLengthMm": -25.8,
      "glass": "TAFD35 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "High-index negative front member of the cemented pair C4; one of the maker's HR elements.",
      "cemented": "C4"
    },
    {
      "id": 11,
      "name": "L35",
      "label": "Element 11",
      "type": "Biconvex Positive (1× Asph)",
      "nd": 1.4965,
      "vd": 81.53,
      "indexReference": "d",
      "focalLengthMm": 20.7,
      "glass": "Unmatched (nd 1.49650 / νd 81.53; moldable fluorophosphate crown)",
      "apd": "inferred",
      "apdNote": "The maker's construction diagram marks this element aspherical ED (EDA), and its printed nd 1.49650 / νd 81.53 is that of a moldable fluorophosphate ED crown.",
      "role": "Aspherical ED positive rear member of C4; the aspheric rear surface trims spherical aberration and coma of the third group.",
      "cemented": "C4"
    },
    {
      "id": 12,
      "name": "L41",
      "label": "Element 12",
      "type": "Biconvex Positive",
      "nd": 1.94595,
      "vd": 17.98,
      "indexReference": "d",
      "focalLengthMm": 43.9,
      "glass": "FDS18 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "High-dispersion positive front member of the cemented pair C5, the negative focusing group; the maker's HD element.",
      "cemented": "C5"
    },
    {
      "id": 13,
      "name": "L42",
      "label": "Element 13",
      "type": "Biconcave Negative",
      "nd": 1.72916,
      "vd": 54.09,
      "indexReference": "d",
      "focalLengthMm": -20.8,
      "glass": "S-LAL19 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Negative rear member of C5; gives the focusing group its negative power.",
      "cemented": "C5"
    },
    {
      "id": 14,
      "name": "L51",
      "label": "Element 14",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.4965,
      "vd": 81.53,
      "indexReference": "d",
      "focalLengthMm": 25.6,
      "glass": "Unmatched (nd 1.49650 / νd 81.53; moldable fluorophosphate crown)",
      "apd": "inferred",
      "apdNote": "The maker's construction diagram marks this element aspherical ED (EDA), and its printed nd 1.49650 / νd 81.53 is that of a moldable fluorophosphate ED crown.",
      "role": "Dual-sided aspherical ED positive element that opens the fixed fifth group; corrects field curvature and astigmatism near the image."
    },
    {
      "id": 15,
      "name": "L52",
      "label": "Element 15",
      "type": "Negative Meniscus",
      "nd": 2.001,
      "vd": 29.13,
      "indexReference": "d",
      "focalLengthMm": -19.9,
      "glass": "TAFD55 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Very high-index negative front member of the cemented pair C6; the maker's Super HR element.",
      "cemented": "C6"
    },
    {
      "id": 16,
      "name": "L53",
      "label": "Element 16",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.54,
      "indexReference": "d",
      "focalLengthMm": 31.2,
      "glass": "S-FPL51 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "The maker's construction diagram marks this element ED, and its printed nd 1.49700 / νd 81.54 equals OHARA's S-FPL51.",
      "role": "ED positive rear member of C6 and the last element; brings the beam to the sensor with low lateral colour.",
      "cemented": "C6"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 46.327,
      "d": 2.5,
      "sd": 19.96,
      "medium": 1
    },
    {
      "label": "2",
      "R": 17.9,
      "d": 4,
      "sd": 15.5
    },
    {
      "label": "3A",
      "R": 19.926,
      "d": 2.5,
      "sd": 14.5,
      "medium": 2,
      "asphere": {
        "K": -0.764,
        "A4": 2.31201e-7,
        "A6": -1.2796e-7,
        "A8": 6.11189e-11,
        "A10": 2.62381e-12,
        "A12": -5.25132e-15
      }
    },
    {
      "label": "4A",
      "R": 9.332,
      "d": 10,
      "sd": 11.5,
      "asphere": {
        "K": -2,
        "A4": 0.000173256,
        "A6": -0.00000112048,
        "A8": 2.10241e-9,
        "A10": 1.31211e-11,
        "A12": -4.12883e-14
      }
    },
    {
      "label": "5",
      "R": -33.734,
      "d": 1.5,
      "sd": 11.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": 23.614,
      "d": 4.07,
      "sd": 11.5,
      "medium": 4
    },
    {
      "label": "7",
      "R": 97.69,
      "sd": 11.5
    },
    {
      "label": "8",
      "R": 110.972,
      "d": 3.94,
      "sd": 7,
      "medium": 5
    },
    {
      "label": "9",
      "R": -17.583,
      "d": 0.82,
      "sd": 7,
      "medium": 6
    },
    {
      "label": "10",
      "R": -86.483,
      "d": 1.2,
      "sd": 7
    },
    {
      "label": "STO",
      "R": "flat"
    },
    {
      "label": "12",
      "R": 36.832,
      "d": 5,
      "sd": 8.6,
      "medium": 7
    },
    {
      "label": "13",
      "R": -15.143,
      "d": 0.8,
      "sd": 8.6,
      "medium": 8
    },
    {
      "label": "14",
      "R": -419.457,
      "d": 0.2,
      "sd": 8.6
    },
    {
      "label": "15",
      "R": 46.749,
      "d": 3.7,
      "sd": 9.2,
      "medium": 9
    },
    {
      "label": "16",
      "R": -46.749,
      "d": 2.87,
      "sd": 9.2
    },
    {
      "label": "17",
      "R": 38.545,
      "d": 1.1,
      "sd": 9.4,
      "medium": 10
    },
    {
      "label": "18",
      "R": 14.392,
      "d": 8.3,
      "sd": 9.4,
      "medium": 11
    },
    {
      "label": "19A",
      "R": -28.862,
      "sd": 9.4,
      "asphere": {
        "K": 0,
        "A4": 0.0000124216,
        "A6": -2.95451e-8,
        "A8": 9.23569e-11,
        "A10": -1.67505e-12
      }
    },
    {
      "label": "20",
      "R": 160.981,
      "d": 2.3,
      "sd": 9,
      "medium": 12
    },
    {
      "label": "21",
      "R": -55.52,
      "d": 0.85,
      "sd": 9,
      "medium": 13
    },
    {
      "label": "22",
      "R": 21.035,
      "sd": 9
    },
    {
      "label": "23A",
      "R": 18.4,
      "d": 7.6,
      "sd": 12,
      "medium": 14,
      "asphere": {
        "K": 0,
        "A4": -0.0000161602,
        "A6": -1.1656e-7,
        "A8": 5.50493e-10,
        "A10": -2.28948e-12
      }
    },
    {
      "label": "24A",
      "R": -35.483,
      "d": 0.2,
      "sd": 12,
      "asphere": {
        "K": 0,
        "A4": 0.0000217979,
        "A6": -1.66279e-7,
        "A8": 8.65173e-10,
        "A10": -2.46047e-12
      }
    },
    {
      "label": "25",
      "R": 600,
      "d": 1.3,
      "sd": 12,
      "medium": 15
    },
    {
      "label": "26",
      "R": 19.257,
      "d": 5.98,
      "sd": 12,
      "medium": 16
    },
    {
      "label": "27",
      "R": -71.584,
      "sd": 12
    }
  ],
  "layout": {
    "yScFill": 0.7
  },
  "aperture": {
    "fStops": [
      4.08,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22,
    "blades": 7
  },
  "focus": {
    "closeFocusM": 1000000000000000,
    "keyframes": [
      0,
      1
    ],
    "description": "Infinity focus only; WO 2022/137385 A1 prints no close-focus spacings. The patent states that the fourth group (L41–L42) moves toward the image for near objects; the maker's minimum focus distance is 0.23 m. Of the 129 zoom stations, the wide, middle and tele positions are the patent's printed rows; the others are calculated by interpolating the group spacings and shifting the fourth group to hold paraxial focus, and are not the lens's real zoom cam."
  },
  "projection": {
    "kind": "rectilinear"
  },
  "checks": {
    "gapSagFrac": 0.9
  },
  "catalog": {
    "lensMounts": [
      "micro-four-thirds"
    ],
    "imageFormat": "four-thirds",
    "elementCount": 16,
    "groupCount": 10,
    "imageCircleMm": 21.63,
    "closeFocusM": {
      "marketing": 0.23
    },
    "focalLengthMm": {
      "marketing": [
        8,
        25
      ],
      "design": [
        8.16,
        24.51
      ]
    },
    "fNumber": {
      "marketing": 4,
      "design": 4.08
    },
    "specs": [
      "16 ELEMENTS / 10 GROUPS",
      "1 DSA / 2 EDA / 1 SUPER ED / 1 ED",
      "1 SUPER HR / 2 HR / 1 HD",
      "DESIGN f = 8.16–24.51 mm, F/4.08",
      "MIN. FOCUS 0.23 m"
    ]
  },
  "source": {
    "patentNumber": "WO 2022/137385 A1",
    "patentYear": 2022,
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "authors": [
      "Yuki Zen",
      "Koji Nakagawa",
      "Yasuharu Yamada"
    ],
    "assignees": [
      "Olympus Corporation"
    ]
  },
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 8.16,
        "nominalFNumber": 4.08,
        "label": "Wide",
        "published": true,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.22256,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.28413,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.3464,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.40936,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.47304,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.53743,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.60257,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.66845,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.7351,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.80252,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.87074,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 8.93975,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.00959,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.08026,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.15178,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.22416,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.29743,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.37159,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.44666,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.52266,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.59961,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.67753,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.75643,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.83633,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.91725,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 9.99922,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.08225,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.16636,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.25157,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.33791,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.4254,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.51405,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.6039,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.69497,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.78729,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.88087,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 10.97574,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.07194,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.16948,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.2684,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.36873,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.47049,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.57371,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.67843,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.78468,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 11.89249,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.00189,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.11293,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.22562,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.34002,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.45616,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.57408,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.69381,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.8154,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 12.9389,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.06433,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.19175,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.3212,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.45273,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.58639,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.72222,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 13.86028,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.00061,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.14,
        "nominalFNumber": 4.08,
        "published": true,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.25172,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.36134,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.47217,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.58421,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.6975,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.81204,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 14.92787,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.045,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.16345,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.28324,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.4044,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.52694,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.6509,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.77629,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 15.90314,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.03147,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.1613,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.29267,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.42559,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.56009,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.6962,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.83395,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 16.97335,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.11445,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.25727,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.40183,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.54816,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.69631,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.84628,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 17.99813,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 18.15187,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 18.30754,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 18.46517,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 18.62479,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 18.78644,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 18.95015,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 19.11595,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 19.28388,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 19.45397,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 19.62626,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 19.80078,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 19.97757,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 20.15667,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 20.3381,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 20.52191,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 20.70813,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 20.8968,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 21.08796,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 21.28164,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 21.47788,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 21.67671,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 21.87817,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 22.0823,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 22.28913,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 22.49869,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 22.71102,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 22.92615,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 23.14411,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 23.36492,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 23.58862,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 23.81522,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 24.04476,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 24.27725,
        "nominalFNumber": 4.08,
        "published": false,
        "publishedFocus": []
      },
      {
        "focalLengthMm": 24.51,
        "nominalFNumber": 4.08,
        "label": "Tele",
        "published": true,
        "publishedFocus": []
      }
    ],
    "apertureModel": "from-nominal-fno"
  },
  "gaps": {
    "7": {
      "label": "D7",
      "values": [
        [
          24.1,
          24.1
        ],
        [
          23.911093750000003,
          23.911093750000003
        ],
        [
          23.7221875,
          23.7221875
        ],
        [
          23.53328125,
          23.53328125
        ],
        [
          23.344375,
          23.344375
        ],
        [
          23.15546875,
          23.15546875
        ],
        [
          22.9665625,
          22.9665625
        ],
        [
          22.77765625,
          22.77765625
        ],
        [
          22.58875,
          22.58875
        ],
        [
          22.399843750000002,
          22.399843750000002
        ],
        [
          22.2109375,
          22.2109375
        ],
        [
          22.02203125,
          22.02203125
        ],
        [
          21.833125,
          21.833125
        ],
        [
          21.64421875,
          21.64421875
        ],
        [
          21.4553125,
          21.4553125
        ],
        [
          21.266406250000003,
          21.266406250000003
        ],
        [
          21.0775,
          21.0775
        ],
        [
          20.888593750000002,
          20.888593750000002
        ],
        [
          20.6996875,
          20.6996875
        ],
        [
          20.51078125,
          20.51078125
        ],
        [
          20.321875,
          20.321875
        ],
        [
          20.13296875,
          20.13296875
        ],
        [
          19.9440625,
          19.9440625
        ],
        [
          19.75515625,
          19.75515625
        ],
        [
          19.56625,
          19.56625
        ],
        [
          19.37734375,
          19.37734375
        ],
        [
          19.1884375,
          19.1884375
        ],
        [
          18.99953125,
          18.99953125
        ],
        [
          18.810625,
          18.810625
        ],
        [
          18.62171875,
          18.62171875
        ],
        [
          18.4328125,
          18.4328125
        ],
        [
          18.243906250000002,
          18.243906250000002
        ],
        [
          18.055,
          18.055
        ],
        [
          17.86609375,
          17.86609375
        ],
        [
          17.6771875,
          17.6771875
        ],
        [
          17.48828125,
          17.48828125
        ],
        [
          17.299375,
          17.299375
        ],
        [
          17.110468750000003,
          17.110468750000003
        ],
        [
          16.9215625,
          16.9215625
        ],
        [
          16.73265625,
          16.73265625
        ],
        [
          16.54375,
          16.54375
        ],
        [
          16.35484375,
          16.35484375
        ],
        [
          16.1659375,
          16.1659375
        ],
        [
          15.97703125,
          15.97703125
        ],
        [
          15.788125,
          15.788125
        ],
        [
          15.59921875,
          15.59921875
        ],
        [
          15.4103125,
          15.4103125
        ],
        [
          15.22140625,
          15.22140625
        ],
        [
          15.0325,
          15.0325
        ],
        [
          14.84359375,
          14.84359375
        ],
        [
          14.6546875,
          14.6546875
        ],
        [
          14.465781250000001,
          14.465781250000001
        ],
        [
          14.276875,
          14.276875
        ],
        [
          14.08796875,
          14.08796875
        ],
        [
          13.8990625,
          13.8990625
        ],
        [
          13.71015625,
          13.71015625
        ],
        [
          13.52125,
          13.52125
        ],
        [
          13.33234375,
          13.33234375
        ],
        [
          13.1434375,
          13.1434375
        ],
        [
          12.95453125,
          12.95453125
        ],
        [
          12.765625,
          12.765625
        ],
        [
          12.57671875,
          12.57671875
        ],
        [
          12.3878125,
          12.3878125
        ],
        [
          12.19890625,
          12.19890625
        ],
        [
          12.01,
          12.01
        ],
        [
          11.84734375,
          11.84734375
        ],
        [
          11.6846875,
          11.6846875
        ],
        [
          11.52203125,
          11.52203125
        ],
        [
          11.359375,
          11.359375
        ],
        [
          11.19671875,
          11.19671875
        ],
        [
          11.0340625,
          11.0340625
        ],
        [
          10.87140625,
          10.87140625
        ],
        [
          10.70875,
          10.70875
        ],
        [
          10.54609375,
          10.54609375
        ],
        [
          10.3834375,
          10.3834375
        ],
        [
          10.22078125,
          10.22078125
        ],
        [
          10.058125,
          10.058125
        ],
        [
          9.89546875,
          9.89546875
        ],
        [
          9.7328125,
          9.7328125
        ],
        [
          9.57015625,
          9.57015625
        ],
        [
          9.4075,
          9.4075
        ],
        [
          9.24484375,
          9.24484375
        ],
        [
          9.0821875,
          9.0821875
        ],
        [
          8.91953125,
          8.91953125
        ],
        [
          8.756875,
          8.756875
        ],
        [
          8.59421875,
          8.59421875
        ],
        [
          8.4315625,
          8.4315625
        ],
        [
          8.26890625,
          8.26890625
        ],
        [
          8.10625,
          8.10625
        ],
        [
          7.94359375,
          7.94359375
        ],
        [
          7.7809375,
          7.7809375
        ],
        [
          7.61828125,
          7.61828125
        ],
        [
          7.455625,
          7.455625
        ],
        [
          7.29296875,
          7.29296875
        ],
        [
          7.1303125,
          7.1303125
        ],
        [
          6.96765625,
          6.96765625
        ],
        [
          6.805,
          6.805
        ],
        [
          6.642343749999999,
          6.642343749999999
        ],
        [
          6.4796875,
          6.4796875
        ],
        [
          6.317031249999999,
          6.317031249999999
        ],
        [
          6.154375,
          6.154375
        ],
        [
          5.99171875,
          5.99171875
        ],
        [
          5.8290625,
          5.8290625
        ],
        [
          5.66640625,
          5.66640625
        ],
        [
          5.50375,
          5.50375
        ],
        [
          5.34109375,
          5.34109375
        ],
        [
          5.1784375,
          5.1784375
        ],
        [
          5.01578125,
          5.01578125
        ],
        [
          4.853125,
          4.853125
        ],
        [
          4.69046875,
          4.69046875
        ],
        [
          4.5278125,
          4.5278125
        ],
        [
          4.36515625,
          4.36515625
        ],
        [
          4.2025,
          4.2025
        ],
        [
          4.039843749999999,
          4.039843749999999
        ],
        [
          3.8771875,
          3.8771875
        ],
        [
          3.71453125,
          3.71453125
        ],
        [
          3.551875,
          3.551875
        ],
        [
          3.38921875,
          3.38921875
        ],
        [
          3.2265625,
          3.2265625
        ],
        [
          3.06390625,
          3.06390625
        ],
        [
          2.90125,
          2.90125
        ],
        [
          2.73859375,
          2.73859375
        ],
        [
          2.5759375,
          2.5759375
        ],
        [
          2.413281249999999,
          2.413281249999999
        ],
        [
          2.250625,
          2.250625
        ],
        [
          2.08796875,
          2.08796875
        ],
        [
          1.9253125,
          1.9253125
        ],
        [
          1.76265625,
          1.76265625
        ],
        [
          1.6,
          1.6
        ]
      ]
    },
    "22": {
      "label": "D22",
      "values": [
        [
          3.75,
          3.75
        ],
        [
          3.904898526728915,
          3.904898526728915
        ],
        [
          4.05855609647428,
          4.05855609647428
        ],
        [
          4.210952378156421,
          4.210952378156421
        ],
        [
          4.362066466658588,
          4.362066466658588
        ],
        [
          4.511876864526162,
          4.511876864526162
        ],
        [
          4.66036146292388,
          4.66036146292388
        ],
        [
          4.807497521817265,
          4.807497521817265
        ],
        [
          4.953261649341287,
          4.953261649341287
        ],
        [
          5.097629780318294,
          5.097629780318294
        ],
        [
          5.240577153884435,
          5.240577153884435
        ],
        [
          5.38207829018212,
          5.38207829018212
        ],
        [
          5.522106966073003,
          5.522106966073003
        ],
        [
          5.6606361898245146,
          5.6606361898245146
        ],
        [
          5.797638174718798,
          5.797638174718798
        ],
        [
          5.9330843115316085,
          5.9330843115316085
        ],
        [
          6.066945139824264,
          6.066945139824264
        ],
        [
          6.199190317989937,
          6.199190317989937
        ],
        [
          6.329788591990319,
          6.329788591990319
        ],
        [
          6.4587077627170935,
          6.4587077627170935
        ],
        [
          6.585914651906839,
          6.585914651906839
        ],
        [
          6.711375066535057,
          6.711375066535057
        ],
        [
          6.835053761609766,
          6.835053761609766
        ],
        [
          6.95691440128105,
          6.95691440128105
        ],
        [
          7.0769195181769255,
          7.0769195181769255
        ],
        [
          7.195030470871291,
          7.195030470871291
        ],
        [
          7.311207399383569,
          7.311207399383569
        ],
        [
          7.425409178602827,
          7.425409178602827
        ],
        [
          7.537593369523819,
          7.537593369523819
        ],
        [
          7.647716168173673,
          7.647716168173673
        ],
        [
          7.755732352101191,
          7.755732352101191
        ],
        [
          7.861595224292733,
          7.861595224292733
        ],
        [
          7.965256554368576,
          7.965256554368576
        ],
        [
          8.066666516905526,
          8.066666516905526
        ],
        [
          8.165773626720624,
          8.165773626720624
        ],
        [
          8.262524670939728,
          8.262524670939728
        ],
        [
          8.356864637663433,
          8.356864637663433
        ],
        [
          8.448736641029935,
          8.448736641029935
        ],
        [
          8.538081842460187,
          8.538081842460187
        ],
        [
          8.624839367857088,
          8.624839367857088
        ],
        [
          8.708946220513427,
          8.708946220513427
        ],
        [
          8.790337189466946,
          8.790337189466946
        ],
        [
          8.86894475302209,
          8.86894475302209
        ],
        [
          8.944698977137627,
          8.944698977137627
        ],
        [
          9.017527408358644,
          9.017527408358644
        ],
        [
          9.08735496094693,
          9.08735496094693
        ],
        [
          9.154103797839355,
          9.154103797839355
        ],
        [
          9.217693205035493,
          9.217693205035493
        ],
        [
          9.278039458986806,
          9.278039458986806
        ],
        [
          9.33505568652694,
          9.33505568652694
        ],
        [
          9.38865171684731,
          9.38865171684731
        ],
        [
          9.438733924984593,
          9.438733924984593
        ],
        [
          9.48520506624499,
          9.48520506624499
        ],
        [
          9.527964100944498,
          9.527964100944498
        ],
        [
          9.566906008795648,
          9.566906008795648
        ],
        [
          9.601921592217323,
          9.601921592217323
        ],
        [
          9.63289726778546,
          9.63289726778546
        ],
        [
          9.659714844978161,
          9.659714844978161
        ],
        [
          9.682251291299284,
          9.682251291299284
        ],
        [
          9.70037848278647,
          9.70037848278647
        ],
        [
          9.713962938827141,
          9.713962938827141
        ],
        [
          9.722865540112025,
          9.722865540112025
        ],
        [
          9.726941228455562,
          9.726941228455562
        ],
        [
          9.726038687100315,
          9.726038687100315
        ],
        [
          9.72,
          9.72
        ],
        [
          9.838591655264274,
          9.838591655264274
        ],
        [
          9.95489125179257,
          9.95489125179257
        ],
        [
          10.068854619442188,
          10.068854619442188
        ],
        [
          10.180436306494208,
          10.180436306494208
        ],
        [
          10.28958953469402,
          10.28958953469402
        ],
        [
          10.396266152344026,
          10.396266152344026
        ],
        [
          10.500416585349452,
          10.500416585349452
        ],
        [
          10.601989786112885,
          10.601989786112885
        ],
        [
          10.700933180166313,
          10.700933180166313
        ],
        [
          10.797192610423288,
          10.797192610423288
        ],
        [
          10.890712278926511,
          10.890712278926511
        ],
        [
          10.981434685958558,
          10.981434685958558
        ],
        [
          11.06930056637556,
          11.06930056637556
        ],
        [
          11.154248823014367,
          11.154248823014367
        ],
        [
          11.23621645701601,
          11.23621645701601
        ],
        [
          11.315138494895358,
          11.315138494895358
        ],
        [
          11.390947912180284,
          11.390947912180284
        ],
        [
          11.463575553428107,
          11.463575553428107
        ],
        [
          11.532950048417874,
          11.532950048417874
        ],
        [
          11.598997724302404,
          11.598997724302404
        ],
        [
          11.66164251348983,
          11.66164251348983
        ],
        [
          11.720805857010461,
          11.720805857010461
        ],
        [
          11.776406603106206,
          11.776406603106206
        ],
        [
          11.828360900764817,
          11.828360900764817
        ],
        [
          11.876582087899987,
          11.876582087899987
        ],
        [
          11.920980573859321,
          11.920980573859321
        ],
        [
          11.961463715919688,
          11.961463715919688
        ],
        [
          11.99793568940509,
          11.99793568940509
        ],
        [
          12.030297351038183,
          12.030297351038183
        ],
        [
          12.05844609510656,
          12.05844609510656
        ],
        [
          12.082275701996743,
          12.082275701996743
        ],
        [
          12.101676178615158,
          12.101676178615158
        ],
        [
          12.116533590180936,
          12.116533590180936
        ],
        [
          12.1267298828363,
          12.1267298828363
        ],
        [
          12.13214269647994,
          12.13214269647994
        ],
        [
          12.132645167182348,
          12.132645167182348
        ],
        [
          12.128105718494597,
          12.128105718494597
        ],
        [
          12.11838784090808,
          12.11838784090808
        ],
        [
          12.103349858663787,
          12.103349858663787
        ],
        [
          12.082844683048865,
          12.082844683048865
        ],
        [
          12.05671955124664,
          12.05671955124664
        ],
        [
          12.024815749732463,
          12.024815749732463
        ],
        [
          11.98696832112511,
          11.98696832112511
        ],
        [
          11.94300575331278,
          11.94300575331278
        ],
        [
          11.892749649574638,
          11.892749649574638
        ],
        [
          11.836014378309875,
          11.836014378309875
        ],
        [
          11.772606700868003,
          11.772606700868003
        ],
        [
          11.702325375842296,
          11.702325375842296
        ],
        [
          11.624960738045413,
          11.624960738045413
        ],
        [
          11.5402942502267,
          11.5402942502267
        ],
        [
          11.448098025416206,
          11.448098025416206
        ],
        [
          11.348134317586224,
          11.348134317586224
        ],
        [
          11.240154978108043,
          11.240154978108043
        ],
        [
          11.123900875243718,
          11.123900875243718
        ],
        [
          10.999101273649266,
          10.999101273649266
        ],
        [
          10.865473170574248,
          10.865473170574248
        ],
        [
          10.722720585115454,
          10.722720585115454
        ],
        [
          10.570533796521074,
          10.570533796521074
        ],
        [
          10.408588527134745,
          10.408588527134745
        ],
        [
          10.23654506511606,
          10.23654506511606
        ],
        [
          10.054047321566097,
          10.054047321566097
        ],
        [
          9.860721816113648,
          9.860721816113648
        ],
        [
          9.656176584378489,
          9.656176584378489
        ],
        [
          9.44,
          9.44
        ]
      ]
    },
    "27": {
      "label": "BF",
      "values": [
        [
          14.88,
          14.88
        ],
        [
          14.8803125,
          14.8803125
        ],
        [
          14.880625,
          14.880625
        ],
        [
          14.8809375,
          14.8809375
        ],
        [
          14.88125,
          14.88125
        ],
        [
          14.8815625,
          14.8815625
        ],
        [
          14.881875,
          14.881875
        ],
        [
          14.8821875,
          14.8821875
        ],
        [
          14.8825,
          14.8825
        ],
        [
          14.8828125,
          14.8828125
        ],
        [
          14.883125,
          14.883125
        ],
        [
          14.8834375,
          14.8834375
        ],
        [
          14.88375,
          14.88375
        ],
        [
          14.8840625,
          14.8840625
        ],
        [
          14.884375,
          14.884375
        ],
        [
          14.8846875,
          14.8846875
        ],
        [
          14.885,
          14.885
        ],
        [
          14.8853125,
          14.8853125
        ],
        [
          14.885625,
          14.885625
        ],
        [
          14.8859375,
          14.8859375
        ],
        [
          14.88625,
          14.88625
        ],
        [
          14.8865625,
          14.8865625
        ],
        [
          14.886875,
          14.886875
        ],
        [
          14.8871875,
          14.8871875
        ],
        [
          14.8875,
          14.8875
        ],
        [
          14.8878125,
          14.8878125
        ],
        [
          14.888125,
          14.888125
        ],
        [
          14.8884375,
          14.8884375
        ],
        [
          14.88875,
          14.88875
        ],
        [
          14.8890625,
          14.8890625
        ],
        [
          14.889375,
          14.889375
        ],
        [
          14.8896875,
          14.8896875
        ],
        [
          14.89,
          14.89
        ],
        [
          14.8903125,
          14.8903125
        ],
        [
          14.890625,
          14.890625
        ],
        [
          14.8909375,
          14.8909375
        ],
        [
          14.89125,
          14.89125
        ],
        [
          14.8915625,
          14.8915625
        ],
        [
          14.891875,
          14.891875
        ],
        [
          14.8921875,
          14.8921875
        ],
        [
          14.8925,
          14.8925
        ],
        [
          14.8928125,
          14.8928125
        ],
        [
          14.893125,
          14.893125
        ],
        [
          14.8934375,
          14.8934375
        ],
        [
          14.89375,
          14.89375
        ],
        [
          14.8940625,
          14.8940625
        ],
        [
          14.894375,
          14.894375
        ],
        [
          14.8946875,
          14.8946875
        ],
        [
          14.895,
          14.895
        ],
        [
          14.8953125,
          14.8953125
        ],
        [
          14.895625,
          14.895625
        ],
        [
          14.8959375,
          14.8959375
        ],
        [
          14.89625,
          14.89625
        ],
        [
          14.8965625,
          14.8965625
        ],
        [
          14.896875,
          14.896875
        ],
        [
          14.8971875,
          14.8971875
        ],
        [
          14.8975,
          14.8975
        ],
        [
          14.8978125,
          14.8978125
        ],
        [
          14.898125,
          14.898125
        ],
        [
          14.8984375,
          14.8984375
        ],
        [
          14.89875,
          14.89875
        ],
        [
          14.8990625,
          14.8990625
        ],
        [
          14.899375,
          14.899375
        ],
        [
          14.8996875,
          14.8996875
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ],
        [
          14.9,
          14.9
        ]
      ]
    },
    "19A": {
      "label": "D19",
      "values": [
        [
          2.85,
          2.85
        ],
        [
          2.9058827232710853,
          2.9058827232710853
        ],
        [
          2.9630064035257195,
          2.9630064035257195
        ],
        [
          3.0213913718435803,
          3.0213913718435803
        ],
        [
          3.0810585333414124,
          3.0810585333414124
        ],
        [
          3.1420293854738386,
          3.1420293854738386
        ],
        [
          3.204326037076121,
          3.204326037076121
        ],
        [
          3.267971228182736,
          3.267971228182736
        ],
        [
          3.332988350658713,
          3.332988350658713
        ],
        [
          3.399401469681706,
          3.399401469681706
        ],
        [
          3.467235346115565,
          3.467235346115565
        ],
        [
          3.53651545981788,
          3.53651545981788
        ],
        [
          3.6072680339269967,
          3.6072680339269967
        ],
        [
          3.679520060175485,
          3.679520060175485
        ],
        [
          3.753299325281203,
          3.753299325281203
        ],
        [
          3.8286344384683915,
          3.8286344384683915
        ],
        [
          3.9055548601757364,
          3.9055548601757364
        ],
        [
          3.984090932010063,
          3.984090932010063
        ],
        [
          4.064273908009682,
          4.064273908009682
        ],
        [
          4.146135987282905,
          4.146135987282905
        ],
        [
          4.22971034809316,
          4.22971034809316
        ],
        [
          4.315031183464942,
          4.315031183464942
        ],
        [
          4.402133738390235,
          4.402133738390235
        ],
        [
          4.491054348718949,
          4.491054348718949
        ],
        [
          4.581830481823076,
          4.581830481823076
        ],
        [
          4.674500779128708,
          4.674500779128708
        ],
        [
          4.7691051006164304,
          4.7691051006164304
        ],
        [
          4.865684571397175,
          4.865684571397175
        ],
        [
          4.964281630476181,
          4.964281630476181
        ],
        [
          5.064940081826327,
          5.064940081826327
        ],
        [
          5.167705147898809,
          5.167705147898809
        ],
        [
          5.272623525707267,
          5.272623525707267
        ],
        [
          5.379743445631425,
          5.379743445631425
        ],
        [
          5.489114733094473,
          5.489114733094473
        ],
        [
          5.600788873279376,
          5.600788873279376
        ],
        [
          5.714819079060273,
          5.714819079060273
        ],
        [
          5.831260362336566,
          5.831260362336566
        ],
        [
          5.950169608970064,
          5.950169608970064
        ],
        [
          6.071605657539813,
          6.071605657539813
        ],
        [
          6.195629382142911,
          6.195629382142911
        ],
        [
          6.322303779486571,
          6.322303779486571
        ],
        [
          6.451694060533054,
          6.451694060533054
        ],
        [
          6.58386774697791,
          6.58386774697791
        ],
        [
          6.718894772862374,
          6.718894772862374
        ],
        [
          6.8568475916413565,
          6.8568475916413565
        ],
        [
          6.9978012890530685,
          6.9978012890530685
        ],
        [
          7.141833702160644,
          7.141833702160644
        ],
        [
          7.289025544964508,
          7.289025544964508
        ],
        [
          7.4394605410131955,
          7.4394605410131955
        ],
        [
          7.593225563473059,
          7.593225563473059
        ],
        [
          7.75041078315269,
          7.75041078315269
        ],
        [
          7.911109825015407,
          7.911109825015407
        ],
        [
          8.075419933755011,
          8.075419933755011
        ],
        [
          8.243442149055504,
          8.243442149055504
        ],
        [
          8.415281491204354,
          8.415281491204354
        ],
        [
          8.591047157782675,
          8.591047157782675
        ],
        [
          8.770852732214543,
          8.770852732214543
        ],
        [
          8.954816405021838,
          8.954816405021838
        ],
        [
          9.143061208700715,
          9.143061208700715
        ],
        [
          9.33571526721353,
          9.33571526721353
        ],
        [
          9.532912061172862,
          9.532912061172862
        ],
        [
          9.734790709887978,
          9.734790709887978
        ],
        [
          9.941496271544437,
          9.941496271544437
        ],
        [
          10.153180062899684,
          10.153180062899684
        ],
        [
          10.37,
          10.37
        ],
        [
          10.499377094735724,
          10.499377094735724
        ],
        [
          10.63104624820743,
          10.63104624820743
        ],
        [
          10.76505163055781,
          10.76505163055781
        ],
        [
          10.901438693505792,
          10.901438693505792
        ],
        [
          11.040254215305978,
          11.040254215305978
        ],
        [
          11.181546347655974,
          11.181546347655974
        ],
        [
          11.325364664650547,
          11.325364664650547
        ],
        [
          11.471760213887116,
          11.471760213887116
        ],
        [
          11.62078556983369,
          11.62078556983369
        ],
        [
          11.772494889576713,
          11.772494889576713
        ],
        [
          11.926943971073488,
          11.926943971073488
        ],
        [
          12.08419031404144,
          12.08419031404144
        ],
        [
          12.244293183624439,
          12.244293183624439
        ],
        [
          12.407313676985634,
          12.407313676985634
        ],
        [
          12.57331479298399,
          12.57331479298399
        ],
        [
          12.742361505104643,
          12.742361505104643
        ],
        [
          12.914520837819715,
          12.914520837819715
        ],
        [
          13.08986194657189,
          13.08986194657189
        ],
        [
          13.268456201582126,
          13.268456201582126
        ],
        [
          13.450377275697594,
          13.450377275697594
        ],
        [
          13.635701236510169,
          13.635701236510169
        ],
        [
          13.824506642989537,
          13.824506642989537
        ],
        [
          14.01687464689379,
          14.01687464689379
        ],
        [
          14.21288909923518,
          14.21288909923518
        ],
        [
          14.412636662100013,
          14.412636662100013
        ],
        [
          14.616206926140677,
          14.616206926140677
        ],
        [
          14.823692534080312,
          14.823692534080312
        ],
        [
          15.035189310594909,
          15.035189310594909
        ],
        [
          15.250796398961818,
          15.250796398961818
        ],
        [
          15.470616404893438,
          15.470616404893438
        ],
        [
          15.694755548003254,
          15.694755548003254
        ],
        [
          15.923323821384844,
          15.923323821384844
        ],
        [
          16.156435159819065,
          16.156435159819065
        ],
        [
          16.394207617163694,
          16.394207617163694
        ],
        [
          16.636763553520055,
          16.636763553520055
        ],
        [
          16.884229832817653,
          16.884229832817653
        ],
        [
          17.136738031505402,
          17.136738031505402
        ],
        [
          17.394424659091918,
          17.394424659091918
        ],
        [
          17.65743139133621,
          17.65743139133621
        ],
        [
          17.92590531695113,
          17.92590531695113
        ],
        [
          18.199999198753357,
          18.199999198753357
        ],
        [
          18.479871750267534,
          18.479871750267534
        ],
        [
          18.76568792887489,
          18.76568792887489
        ],
        [
          19.057619246687217,
          19.057619246687217
        ],
        [
          19.355844100425358,
          19.355844100425358
        ],
        [
          19.660548121690127,
          19.660548121690127
        ],
        [
          19.971924549131995,
          19.971924549131995
        ],
        [
          20.2901746241577,
          20.2901746241577
        ],
        [
          20.61550801195458,
          20.61550801195458
        ],
        [
          20.948143249773295,
          20.948143249773295
        ],
        [
          21.288308224583794,
          21.288308224583794
        ],
        [
          21.636240682413778,
          21.636240682413778
        ],
        [
          21.992188771891954,
          21.992188771891954
        ],
        [
          22.356411624756277,
          22.356411624756277
        ],
        [
          22.72917997635073,
          22.72917997635073
        ],
        [
          23.110776829425753,
          23.110776829425753
        ],
        [
          23.501498164884545,
          23.501498164884545
        ],
        [
          23.90165370347892,
          23.90165370347892
        ],
        [
          24.31156772286525,
          24.31156772286525
        ],
        [
          24.73157993488394,
          24.73157993488394
        ],
        [
          25.162046428433904,
          25.162046428433904
        ],
        [
          25.60334068388635,
          25.60334068388635
        ],
        [
          26.05585466562151,
          26.05585466562151
        ],
        [
          26.52,
          26.52
        ]
      ]
    },
    "STO": {
      "label": "D11",
      "values": [
        [
          15.09,
          15.09
        ],
        [
          14.930625,
          14.930625
        ],
        [
          14.77125,
          14.77125
        ],
        [
          14.611875,
          14.611875
        ],
        [
          14.4525,
          14.4525
        ],
        [
          14.293125,
          14.293125
        ],
        [
          14.13375,
          14.13375
        ],
        [
          13.974375,
          13.974375
        ],
        [
          13.815,
          13.815
        ],
        [
          13.655625,
          13.655625
        ],
        [
          13.49625,
          13.49625
        ],
        [
          13.336875,
          13.336875
        ],
        [
          13.1775,
          13.1775
        ],
        [
          13.018125,
          13.018125
        ],
        [
          12.85875,
          12.85875
        ],
        [
          12.699375,
          12.699375
        ],
        [
          12.54,
          12.54
        ],
        [
          12.380625,
          12.380625
        ],
        [
          12.22125,
          12.22125
        ],
        [
          12.061875,
          12.061875
        ],
        [
          11.9025,
          11.9025
        ],
        [
          11.743125,
          11.743125
        ],
        [
          11.58375,
          11.58375
        ],
        [
          11.424375,
          11.424375
        ],
        [
          11.265,
          11.265
        ],
        [
          11.105625,
          11.105625
        ],
        [
          10.94625,
          10.94625
        ],
        [
          10.786875,
          10.786875
        ],
        [
          10.6275,
          10.6275
        ],
        [
          10.468125,
          10.468125
        ],
        [
          10.30875,
          10.30875
        ],
        [
          10.149375,
          10.149375
        ],
        [
          9.99,
          9.99
        ],
        [
          9.830625,
          9.830625
        ],
        [
          9.67125,
          9.67125
        ],
        [
          9.511875,
          9.511875
        ],
        [
          9.3525,
          9.3525
        ],
        [
          9.193125,
          9.193125
        ],
        [
          9.03375,
          9.03375
        ],
        [
          8.874375,
          8.874375
        ],
        [
          8.715,
          8.715
        ],
        [
          8.555625,
          8.555625
        ],
        [
          8.39625,
          8.39625
        ],
        [
          8.236875,
          8.236875
        ],
        [
          8.0775,
          8.0775
        ],
        [
          7.918125,
          7.918125
        ],
        [
          7.75875,
          7.75875
        ],
        [
          7.599375,
          7.599375
        ],
        [
          7.44,
          7.44
        ],
        [
          7.280625,
          7.280625
        ],
        [
          7.12125,
          7.12125
        ],
        [
          6.961875,
          6.961875
        ],
        [
          6.8025,
          6.8025
        ],
        [
          6.643125,
          6.643125
        ],
        [
          6.48375,
          6.48375
        ],
        [
          6.324375,
          6.324375
        ],
        [
          6.165,
          6.165
        ],
        [
          6.005625,
          6.005625
        ],
        [
          5.84625,
          5.84625
        ],
        [
          5.686875,
          5.686875
        ],
        [
          5.5275,
          5.5275
        ],
        [
          5.368125,
          5.368125
        ],
        [
          5.20875,
          5.20875
        ],
        [
          5.049375,
          5.049375
        ],
        [
          4.89,
          4.89
        ],
        [
          4.838593749999999,
          4.838593749999999
        ],
        [
          4.7871875,
          4.7871875
        ],
        [
          4.73578125,
          4.73578125
        ],
        [
          4.684375,
          4.684375
        ],
        [
          4.63296875,
          4.63296875
        ],
        [
          4.5815625,
          4.5815625
        ],
        [
          4.53015625,
          4.53015625
        ],
        [
          4.47875,
          4.47875
        ],
        [
          4.42734375,
          4.42734375
        ],
        [
          4.3759375,
          4.3759375
        ],
        [
          4.32453125,
          4.32453125
        ],
        [
          4.273125,
          4.273125
        ],
        [
          4.22171875,
          4.22171875
        ],
        [
          4.1703125,
          4.1703125
        ],
        [
          4.11890625,
          4.11890625
        ],
        [
          4.0675,
          4.0675
        ],
        [
          4.01609375,
          4.01609375
        ],
        [
          3.9646875,
          3.9646875
        ],
        [
          3.91328125,
          3.91328125
        ],
        [
          3.861875,
          3.861875
        ],
        [
          3.81046875,
          3.81046875
        ],
        [
          3.7590625,
          3.7590625
        ],
        [
          3.70765625,
          3.70765625
        ],
        [
          3.65625,
          3.65625
        ],
        [
          3.60484375,
          3.60484375
        ],
        [
          3.5534375,
          3.5534375
        ],
        [
          3.50203125,
          3.50203125
        ],
        [
          3.450625,
          3.450625
        ],
        [
          3.39921875,
          3.39921875
        ],
        [
          3.3478125,
          3.3478125
        ],
        [
          3.29640625,
          3.29640625
        ],
        [
          3.245,
          3.245
        ],
        [
          3.19359375,
          3.19359375
        ],
        [
          3.1421875,
          3.1421875
        ],
        [
          3.09078125,
          3.09078125
        ],
        [
          3.039375,
          3.039375
        ],
        [
          2.98796875,
          2.98796875
        ],
        [
          2.9365625,
          2.9365625
        ],
        [
          2.88515625,
          2.88515625
        ],
        [
          2.83375,
          2.83375
        ],
        [
          2.78234375,
          2.78234375
        ],
        [
          2.7309375,
          2.7309375
        ],
        [
          2.67953125,
          2.67953125
        ],
        [
          2.628125,
          2.628125
        ],
        [
          2.57671875,
          2.57671875
        ],
        [
          2.5253125,
          2.5253125
        ],
        [
          2.47390625,
          2.47390625
        ],
        [
          2.4225,
          2.4225
        ],
        [
          2.37109375,
          2.37109375
        ],
        [
          2.3196875,
          2.3196875
        ],
        [
          2.26828125,
          2.26828125
        ],
        [
          2.216875,
          2.216875
        ],
        [
          2.16546875,
          2.16546875
        ],
        [
          2.1140625,
          2.1140625
        ],
        [
          2.06265625,
          2.06265625
        ],
        [
          2.01125,
          2.01125
        ],
        [
          1.95984375,
          1.95984375
        ],
        [
          1.9084375,
          1.9084375
        ],
        [
          1.85703125,
          1.85703125
        ],
        [
          1.805625,
          1.805625
        ],
        [
          1.75421875,
          1.75421875
        ],
        [
          1.7028125,
          1.7028125
        ],
        [
          1.65140625,
          1.65140625
        ],
        [
          1.6,
          1.6
        ]
      ]
    }
  },
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "7"
    },
    {
      "text": "G2",
      "fromSurface": "8",
      "toSurface": "10"
    },
    {
      "text": "G3",
      "fromSurface": "12",
      "toSurface": "19A"
    },
    {
      "text": "G4",
      "fromSurface": "20",
      "toSurface": "22"
    },
    {
      "text": "G5",
      "fromSurface": "23A",
      "toSurface": "27"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "C2",
      "fromSurface": "8",
      "toSurface": "10"
    },
    {
      "text": "C3",
      "fromSurface": "12",
      "toSurface": "14"
    },
    {
      "text": "C4",
      "fromSurface": "17",
      "toSurface": "19A"
    },
    {
      "text": "C5",
      "fromSurface": "20",
      "toSurface": "22"
    },
    {
      "text": "C6",
      "fromSurface": "25",
      "toSurface": "27"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
