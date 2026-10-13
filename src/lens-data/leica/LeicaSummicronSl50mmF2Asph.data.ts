import type { LensDataInput } from "../../types/optics.js";

/**
 * LEICA SUMMICRON-SL 50mm f/2 ASPH. — JP 2022-182997 A, Numerical Example 1.
 * The applicant is Panasonic Intellectual Property Management Co., Ltd. The link to the Leica lens rests on
 * matching construction (9 elements / 8 groups, six aspherical surfaces on three elements, 0.45 m near state);
 * no manufacturer statement confirms it, and the same construction is published for the Panasonic Lumix S
 * 50mm F1.8.
 * Patent millimetres and d-line indices, unscaled; no printed value is altered.
 * Nine lens elements in eight groups. The patent prints the 0.01 mm adhesive layer between L3 and L4
 * (nd 1.56732, νd 42.8) and it is modeled as printed, which gives ten element entries.
 * The layer entry C1 carries no `cemented` tag, so the inspector counts D1 as the two-element doublet L3 + L4.
 * Six aspherical surfaces on L6–L8. The patent's κ is the standard conic constant K of the (1 + K) form.
 * PUBLISHED focus: G2 (L7) moves toward the image; the printed d13/d15 values are used at both ends.
 * The 2.1 mm cover plate is in rearPlates; the last d = 12.9 mm is the air gap ahead of it.
 * Table 6 conditions (6) and (11) and the heading of (12) disagree with their definitions; see sourceErrata.
 * The printed 1.000 mm image gap is kept although the paraxial focus lies 0.008 mm behind it; no refocus.
 * The stop semi-diameter is set by a real axial ray for the patent's infinity F/1.86017. All other
 * semi-diameters are estimates from ray envelopes and the patent figure, not published clear apertures.
 * SEMI-DIAMETERS: checked against the patent's Fig. 1(a) section, which is drawn to scale (0.0882 mm/px at
 * 600 dpi; its stop opening reads 14.7 mm). L3+L4 (5: 12.9, 6/7: 14.4, 8: 14.8) and L9 (18: 15.0, 19: 16.7)
 * are estimated from that figure, where the concave front faces of L3 and L9 end at flat mounting annuli,
 * and floor-checked by exact real-ray trace at infinity and 0.45 m. The other rims are the ray-envelope
 * estimates, 0–7 % above the drawing, and are retained.
 * The modeled iris is 14.525024382 mm, traced from EFL/(2 Fno), not a paraxial stop radius.
 * Glass names are nd/νd catalog-class candidates; materials with no close catalog match are labelled Unmatched.
 */

const LENS_DATA = {
  "key": "leica-summicron-sl-50mm-f2-asph",
  "maker": "Leica",
  "name": "LEICA SUMMICRON-SL 50mm f/2 ASPH.",
  "sourceErrata": [
    {
      "status": "unresolved",
      "note": "Table 6 of the patent lists 10.42 for condition (6), TG3P/TG3M, but the printed lens thicknesses give 6.2658/1.2 = 5.22; 10.42 repeats the value of condition (3). The prescription is used as printed."
    },
    {
      "status": "unresolved",
      "note": "Table 6 of the patent lists 2.92 for condition (11), TSTO_L3E/FL, but the printed spacings give 52.9889/48.2535 = 1.10. The prescription is used as printed."
    },
    {
      "status": "unresolved",
      "note": "Table 6 of the patent heads condition (12) FL_G1/FL_G1B, while the patent text defines FL_G1B/FL_G1; the listed 0.77 matches the text's ratio. The prescription is used as printed."
    }
  ],
  "subtitle": "JP 2022-182997 A, Example 1 — construction-based production correlation",
  "specs": [
    "9 ELEMENTS / 8 GROUPS",
    "DESIGN f = 48.25 mm",
    "DESIGN F/1.86",
    "6 ASPHERICAL SURFACES / 3 ELEMENTS"
  ],
  "focalLengthMarketing": 50,
  "focalLengthDesign": 48.2535,
  "apertureMarketing": 2,
  "apertureDesign": 1.86017,
  "lensMounts": [
    "l-mount"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "JP 2022-182997 A",
  "patentAuthors": [
    "Yasuto Suzuki",
    "Yoshiaki Kurioka",
    "Shunichiro Yoshinaga"
  ],
  "patentAssignees": [
    "Panasonic Intellectual Property Management Co., Ltd."
  ],
  "patentYear": 2022,
  "elementCount": 9,
  "groupCount": 8,
  "nominalFno": 1.86017,
  "closeFocusM": 0.45,
  "fstopSeries": [
    1.86017,
    2.8,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "yScFill": 0.55,
  "focusDescription": "PUBLISHED: L7, the single negative element of G2, alone moves 4.8163 mm toward the image between infinity and the patent's near state (object 349 mm ahead of the first surface, about 0.45 m object to image, magnification −0.131). G1, the stop and G3 stay fixed. Intermediate positions are linearly interpolated between the two printed states.",
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.85996,
      "vd": 30.5,
      "indexReference": "d",
      "fl": 72.171779,
      "glass": "Unmatched (patent nd=1.85996, νd=30.5; supplier unconfirmed)",
      "role": "High-index positive front meniscus of G1A, the negative sub-group ahead of the stop"
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.497,
      "vd": 81.6,
      "indexReference": "d",
      "fl": -64.363612,
      "glass": "FCD1 / N-PK52A class (coordinate candidate; supplier unconfirmed)",
      "role": "Low-dispersion negative meniscus of G1A, ahead of the stop"
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.65794,
      "vd": 31.1,
      "indexReference": "d",
      "fl": -19.938207,
      "glass": "Unmatched (patent nd=1.65794, νd=31.1; supplier unconfirmed)",
      "role": "Biconcave negative front member of the cemented doublet in G1A, ahead of the stop",
      "cemented": "D1"
    },
    {
      "id": 10,
      "name": "C1",
      "diagramLabel": "C1",
      "label": "L3–L4 cement layer",
      "type": "Optical Cement Layer",
      "nd": 1.56732,
      "vd": 42.8,
      "indexReference": "d",
      "glass": "Optical cement (patent nd=1.56732, vd=42.8)",
      "role": "Cement layer of the L3–L4 doublet D1: the 0.01 mm adhesive layer printed in the patent prescription; not counted as a lens element"
    },
    {
      "id": 4,
      "name": "L4",
      "diagramLabel": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.59269,
      "vd": 65.3,
      "indexReference": "d",
      "fl": 32.037905,
      "glass": "Unmatched (patent nd=1.59269, νd=65.3; supplier unconfirmed)",
      "role": "Biconvex positive rear member of the cemented doublet in G1A, immediately ahead of the stop",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "diagramLabel": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.6,
      "indexReference": "d",
      "fl": 41.473622,
      "glass": "FCD515 / FCD505 class (coordinate candidate; supplier unconfirmed)",
      "role": "Biconvex positive element of G1B, immediately behind the stop"
    },
    {
      "id": 6,
      "name": "L6",
      "diagramLabel": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.5157,
      "vd": 55.8,
      "indexReference": "d",
      "fl": 68.13275,
      "glass": "Unmatched (patent nd=1.51570, νd=55.8; supplier unconfirmed)",
      "role": "Positive double-sided asphere closing G1B and the fixed first group"
    },
    {
      "id": 7,
      "name": "L7",
      "diagramLabel": "L7",
      "label": "Element 7",
      "type": "Neg. Meniscus (2× Asph)",
      "nd": 1.51607,
      "vd": 56.3,
      "indexReference": "d",
      "fl": -67.785796,
      "glass": "Unmatched (patent nd=1.51607, νd=56.3; supplier unconfirmed)",
      "role": "G2: the single negative focusing element, a double-sided asphere that moves toward the image for near focus"
    },
    {
      "id": 8,
      "name": "L8",
      "diagramLabel": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.5157,
      "vd": 55.8,
      "indexReference": "d",
      "fl": 60.621063,
      "glass": "Unmatched (patent nd=1.51570, νd=55.8; supplier unconfirmed)",
      "role": "Positive double-sided asphere of G3, the fixed rear group"
    },
    {
      "id": 9,
      "name": "L9",
      "diagramLabel": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.54157,
      "vd": 51.7,
      "indexReference": "d",
      "fl": -59.424811,
      "glass": "Unmatched (patent nd=1.54157, νd=51.7; supplier unconfirmed)",
      "role": "Negative rear meniscus of G3, the fixed rear group, concave toward the object"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 38.4274,
      "d": 5.523,
      "nd": 1.85996,
      "elemId": 1,
      "sd": 21
    },
    {
      "label": "2",
      "R": 94.1939,
      "d": 0.3,
      "nd": 1,
      "elemId": 0,
      "sd": 21
    },
    {
      "label": "3",
      "R": 43.2106,
      "d": 1.2,
      "nd": 1.497,
      "elemId": 2,
      "sd": 18
    },
    {
      "label": "4",
      "R": 18.2117,
      "d": 15.5101,
      "nd": 1,
      "elemId": 0,
      "sd": 15.5
    },
    {
      "label": "5",
      "R": -25.8213,
      "d": 1.2,
      "nd": 1.65794,
      "elemId": 3,
      "sd": 12.9
    },
    {
      "label": "6",
      "R": 27.1566,
      "d": 0.01,
      "nd": 1.56732,
      "elemId": 10,
      "sd": 14.4
    },
    {
      "label": "7",
      "R": 27.1566,
      "d": 7.53,
      "nd": 1.59269,
      "elemId": 4,
      "sd": 14.4
    },
    {
      "label": "8",
      "R": -56.6176,
      "d": 0.738,
      "nd": 1,
      "elemId": 0,
      "sd": 14.8
    },
    {
      "label": "STO",
      "R": 1000000000000000,
      "d": 2.87,
      "nd": 1,
      "elemId": 0,
      "sd": 14.525024382474049
    },
    {
      "label": "10",
      "R": 48.0849,
      "d": 8.0445,
      "nd": 1.59282,
      "elemId": 5,
      "sd": 17.5
    },
    {
      "label": "11",
      "R": -47.1784,
      "d": 0.3,
      "nd": 1,
      "elemId": 0,
      "sd": 17.5
    },
    {
      "label": "12A",
      "R": 72.8346,
      "d": 5.1115,
      "nd": 1.5157,
      "elemId": 6,
      "sd": 16.5
    },
    {
      "label": "13A",
      "R": -66.2629,
      "d": 1.8,
      "nd": 1,
      "elemId": 0,
      "sd": 16.5
    },
    {
      "label": "14A",
      "R": 33.7007,
      "d": 2,
      "nd": 1.51607,
      "elemId": 7,
      "sd": 15
    },
    {
      "label": "15A",
      "R": 16.818,
      "d": 12.8959,
      "nd": 1,
      "elemId": 0,
      "sd": 15
    },
    {
      "label": "16A",
      "R": 286.1473,
      "d": 6.2658,
      "nd": 1.5157,
      "elemId": 8,
      "sd": 16
    },
    {
      "label": "17A",
      "R": -34.8352,
      "d": 12.5012,
      "nd": 1,
      "elemId": 0,
      "sd": 16
    },
    {
      "label": "18",
      "R": -20.1245,
      "d": 1.2,
      "nd": 1.54157,
      "elemId": 9,
      "sd": 15
    },
    {
      "label": "19",
      "R": -54.8364,
      "d": 12.9,
      "nd": 1,
      "elemId": 0,
      "sd": 16.7
    }
  ],
  "rearPlates": [
    {
      "label": "CG",
      "thicknessMm": 2.1,
      "nd": 1.5168,
      "vd": 64.2,
      "gapAfterMm": 1,
      "indexReference": "d",
      "glass": "N-BK7 / BSC7 class (coordinate candidate; supplier unconfirmed)",
      "source": "JP2022182997A Numerical Example 1, Table 1A surfaces 20–21; physical gaps retained"
    }
  ],
  "asph": {
    "12A": {
      "K": 0,
      "A4": -4.36516e-06,
      "A6": 4.2794e-09,
      "A8": -1.3168e-11,
      "A10": -1.14476e-15,
      "A12": 0,
      "A14": 0
    },
    "13A": {
      "K": 0,
      "A4": 8.55335e-06,
      "A6": -3.38027e-09,
      "A8": 0,
      "A10": 0,
      "A12": 0,
      "A14": 0
    },
    "14A": {
      "K": 0,
      "A4": -3.20814e-05,
      "A6": 3.0404e-08,
      "A8": -9.83934e-12,
      "A10": 0,
      "A12": 0,
      "A14": 0
    },
    "15A": {
      "K": -1.42129,
      "A4": -2.12498e-08,
      "A6": 8.60734e-09,
      "A8": 2.95476e-11,
      "A10": 0,
      "A12": 0,
      "A14": 0
    },
    "16A": {
      "K": 0,
      "A4": 3.3529e-05,
      "A6": -1.49631e-08,
      "A8": -2.39445e-12,
      "A10": 0,
      "A12": 0,
      "A14": 0
    },
    "17A": {
      "K": 0,
      "A4": 1.74131e-05,
      "A6": -1.58208e-08,
      "A8": 3.47625e-11,
      "A10": -1.23868e-13,
      "A12": 0,
      "A14": 0
    }
  },
  "var": {
    "13A": [
      1.8,
      6.6163
    ],
    "15A": [
      12.8959,
      8.0795
    ]
  },
  "varLabels": [
    [
      "13A",
      "d13"
    ],
    [
      "15A",
      "d15"
    ]
  ],
  "publishedStations": {
    "focus": [
      1
    ]
  },
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 349,
      "distanceReference": "first-surface",
      "source": "JP 2022-182997 A, Example 1, Table 1C (d0, d13, d15). The printed image gap is kept, which leaves the paraxial focus about 0.04 mm behind the image plane."
    }
  ],
  "groups": [
    {
      "text": "G1 (+)",
      "fromSurface": "1",
      "toSurface": "13A"
    },
    {
      "text": "G2 (−), FOCUS",
      "fromSurface": "14A",
      "toSurface": "15A"
    },
    {
      "text": "G3 (+)",
      "fromSurface": "16A",
      "toSurface": "19"
    }
  ],
  "doublets": [
    {
      "text": "D1: L3 + L4",
      "fromSurface": "5",
      "toSurface": "8"
    }
  ]
} satisfies LensDataInput;

export default LENS_DATA;
