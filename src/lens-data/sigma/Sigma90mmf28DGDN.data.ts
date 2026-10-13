import type { LensDataInput } from "../../types/optics.js";

/**
 * JP 2022-061515 A, Numerical Example 2. Radii, gaps, glasses and both focus states are as printed, unscaled.
 * 11 elements in 10 air-separated groups; both surfaces of L22 are aspherical. The patent lists no cover glass.
 * PUBLISHED focus: infinity and one near state, 1715 mm from the first surface (1.7930199 m object to image,
 * magnification −1/20). The marketed 0.5 m (1:5) minimum focus is not in the patent and is not modeled.
 * Semi-diameters are not in the patent; they are measured from Figure 6 and checked with real rays. Each element
 * takes its drawn rim height on both faces, except two concave faces that Figure 6 ends at a flat annulus inside
 * the rim: surface 9 (L15 rear) stops at the drawn 11.0 mm, and surface 19 (L32 front) is 10.9 mm against a drawn
 * 10.1 mm, the smallest value that leaves the model's half-field unchanged. The renderer joins unequal faces with a
 * straight edge, so those two rims draw a short chamfer where the figure draws a flat annulus and a square rim.
 * The stop radius is not in the patent; it is the height at the stop of a real axial ray that enters at the
 * F/2.90 entrance-pupil radius (87.2995 mm / 5.8).
 * The patent's group table starts E1 at surface 8; paragraph 0096 and Figure 6 show the cemented pair 7–9.
 * nC/nF/ng and dPgF come from catalog glasses matching each printed nd/νd; the patent prints no line indices.
 * The patent's own ΔPgF values (four elements, normal line not stated) are quoted in apdNote.
 * The production prescription and the actual glass suppliers are unconfirmed.
 */

const LENS_DATA = {
  "key": "sigma-90mm-f28-dg-dn-contemporary",
  "maker": "Sigma",
  "name": "SIGMA 90mm f/2.8 DG DN | Contemporary",
  "subtitle": "JP 2022-061515 A, Example 2 — construction-based production correlation",
  "specs": [
    "11 ELEMENTS / 10 GROUPS",
    "DESIGN f = 87.30 mm",
    "DESIGN F/2.90",
    "2 ASPHERICAL SURFACES / 1 ELEMENT"
  ],
  "focalLengthMarketing": 90,
  "focalLengthDesign": 87.3,
  "apertureMarketing": 2.8,
  "apertureDesign": 2.9,
  "lensMounts": [
    "l-mount",
    "sony-fe"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "JP 2022-061515 A",
  "patentAuthors": [
    "Hitoshi Murakami"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2022,
  "elementCount": 11,
  "groupCount": 10,
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.76385,
      "vd": 48.49,
      "indexReference": "d",
      "fl": 121.61370677145047,
      "glass": "S-LAH96 (OHARA, coordinate equivalent)",
      "nC": 1.7591289350415271,
      "nF": 1.774882094735768,
      "ng": 1.7836874010448194,
      "dPgF": -0.0032848877859557035,
      "role": "Positive front meniscus of the fixed first group L1, convex to the object",
      "apdNote": "The patent lists ΔPgF = −0.0022 for this glass without stating its normal line; the stored dPgF comes from the catalog-equivalent glass."
    },
    {
      "id": 2,
      "name": "L12",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": 79.65294693920183,
      "glass": "FCD1 (HOYA, coordinate equivalent)",
      "nC": 1.4951374776446764,
      "nF": 1.5012275045747954,
      "ng": 1.504509126705896,
      "dPgF": 0.03231984590426196,
      "role": "Second positive meniscus of the fixed first group L1, convex to the object",
      "apd": "patent",
      "apdNote": "The patent tabulates ΔPgF = +0.0373 for this lens, without stating its normal line, and bounds the mean ΔPgF of the positive first-group lenses in condition (7); Sigma's construction diagram marks the element as SLD glass. The stored dPgF comes from the catalog-equivalent glass."
    },
    {
      "id": 3,
      "name": "L13",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": 78.98579648735694,
      "glass": "FCD1 (HOYA, coordinate equivalent)",
      "nC": 1.4951374776446764,
      "nF": 1.5012275045747954,
      "ng": 1.504509126705896,
      "dPgF": 0.03231984590426196,
      "role": "Biconvex third positive element of the fixed first group L1",
      "apd": "patent",
      "apdNote": "The patent tabulates ΔPgF = +0.0373 for this lens, without stating its normal line, and bounds the mean ΔPgF of the positive first-group lenses in condition (7); Sigma's construction diagram marks the element as SLD glass. The stored dPgF comes from the catalog-equivalent glass."
    },
    {
      "id": 4,
      "name": "L14",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.8061,
      "vd": 40.73,
      "indexReference": "d",
      "fl": -31.140922550239797,
      "glass": "NBFD13 (HOYA, coordinate equivalent)",
      "nC": 1.8002191157549008,
      "nF": 1.8200084235267202,
      "ng": 1.8312322509015178,
      "dPgF": -0.008125895267548144,
      "role": "Negative front member of the cemented pair E1 at the rear of L1",
      "cemented": "E1"
    },
    {
      "id": 5,
      "name": "L15",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.55032,
      "vd": 75.5,
      "indexReference": "d",
      "fl": 136.6758770372642,
      "glass": "FCD705 (HOYA, coordinate equivalent)",
      "nC": 1.5481010815705685,
      "nF": 1.5553904824529587,
      "ng": 1.559326656732765,
      "dPgF": 0.023176980098214783,
      "role": "Positive rear member of the cemented pair E1 at the rear of L1",
      "apd": "patent",
      "apdNote": "The patent tabulates ΔPgF = +0.0274 for this lens, without stating its normal line, and bounds the mean ΔPgF of the positive first-group lenses in condition (7); Sigma's construction diagram marks the element as SLD glass. The stored dPgF comes from the catalog-equivalent glass.",
      "cemented": "E1"
    },
    {
      "id": 6,
      "name": "L21",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.7859,
      "vd": 43.93,
      "indexReference": "d",
      "fl": -38.78403940429759,
      "glass": "NBFD11 (HOYA, coordinate equivalent)",
      "nC": 1.7805325504487635,
      "nF": 1.7984205190567872,
      "ng": 1.8084583793352933,
      "dPgF": -0.008758247705704103,
      "role": "Negative front element of the moving focus group L2, concave to the object"
    },
    {
      "id": 7,
      "name": "L22",
      "label": "Element 7",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.497,
      "vd": 81.54,
      "indexReference": "d",
      "fl": 45.45205984516839,
      "glass": "S-FPL51 (OHARA, coordinate equivalent)",
      "nC": 1.4951364052489096,
      "nF": 1.5012311244736123,
      "ng": 1.504506789458403,
      "dPgF": 0.030809818991392568,
      "role": "Positive element of the focus group L2 with both surfaces aspherical",
      "apd": "inferred",
      "apdNote": "Sigma's construction diagram marks this element as both SLD glass and the aspherical element; the patent prints no partial-dispersion value for it, so the stored dPgF comes from the catalog-equivalent glass."
    },
    {
      "id": 8,
      "name": "L23",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.72916,
      "vd": 54.67,
      "indexReference": "d",
      "fl": 34.263665433762455,
      "glass": "TAC8 (HOYA, coordinate equivalent)",
      "nC": 1.7251025131003241,
      "nF": 1.7384391367467673,
      "ng": 1.7457118419738085,
      "dPgF": -0.006526738073688532,
      "role": "Positive rear element of the focus group L2"
    },
    {
      "id": 9,
      "name": "L31",
      "label": "Element 9",
      "type": "Biconcave Negative",
      "nd": 1.61997,
      "vd": 63.88,
      "indexReference": "d",
      "fl": -33.214196170805366,
      "glass": "PCD40 (HOYA, coordinate equivalent)",
      "nC": 1.6170133056757523,
      "nF": 1.6267184822009157,
      "ng": 1.6319835519486623,
      "dPgF": 0.006147343167079988,
      "role": "Biconcave front element of the fixed rear group L3",
      "apd": "inferred",
      "apdNote": "Sigma's construction diagram marks this element as SLD glass; the patent prints no partial-dispersion value for it, so the stored dPgF comes from the catalog-equivalent glass."
    },
    {
      "id": 10,
      "name": "L32",
      "label": "Element 10",
      "type": "Negative Meniscus",
      "nd": 1.48749,
      "vd": 70.44,
      "indexReference": "d",
      "fl": -53.13403901631431,
      "glass": "FC5 (HOYA, coordinate equivalent)",
      "nC": 1.4853500040225573,
      "nF": 1.492270524090005,
      "ng": 1.4959425073542514,
      "dPgF": 0.005273623326107368,
      "role": "Negative meniscus of the fixed rear group L3, concave to the object"
    },
    {
      "id": 11,
      "name": "L33",
      "label": "Element 11",
      "type": "Positive Meniscus",
      "nd": 1.85451,
      "vd": 25.15,
      "indexReference": "d",
      "fl": 76.92426015731083,
      "glass": "NBFD25 (HOYA, coordinate equivalent)",
      "nC": 1.844729374424391,
      "nF": 1.8786993714718667,
      "ng": 1.8994306652868231,
      "dPgF": 0.008784773265537393,
      "role": "Positive rear meniscus of the fixed rear group L3, convex to the object"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 73.6714,
      "d": 2.5626,
      "nd": 1.76385,
      "elemId": 1,
      "sd": 16.2
    },
    {
      "label": "2",
      "R": 350.648,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.2
    },
    {
      "label": "3",
      "R": 23.1394,
      "d": 4.9119,
      "nd": 1.497,
      "elemId": 2,
      "sd": 15.5
    },
    {
      "label": "4",
      "R": 51.7673,
      "d": 2.4376,
      "nd": 1.0,
      "elemId": 0,
      "sd": 15.5
    },
    {
      "label": "5",
      "R": 42.7801,
      "d": 3.8338,
      "nd": 1.497,
      "elemId": 3,
      "sd": 14
    },
    {
      "label": "6",
      "R": -462.3536,
      "d": 0.5415,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14
    },
    {
      "label": "7",
      "R": 725.901,
      "d": 0.9,
      "nd": 1.8061,
      "elemId": 4,
      "sd": 12.8
    },
    {
      "label": "8",
      "R": 24.2502,
      "d": 2.2864,
      "nd": 1.55032,
      "elemId": 5,
      "sd": 12.8
    },
    {
      "label": "9",
      "R": 34.5911,
      "d": 4.418,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 9.926,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.799963307861022
    },
    {
      "label": "11",
      "R": -28.2098,
      "d": 0.8,
      "nd": 1.7859,
      "elemId": 6,
      "sd": 9.6
    },
    {
      "label": "12",
      "R": -383.4162,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.6
    },
    {
      "label": "13A",
      "R": 34.3981,
      "d": 3.6,
      "nd": 1.497,
      "elemId": 7,
      "sd": 9.8
    },
    {
      "label": "14A",
      "R": -63.5176,
      "d": 2.5399,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.8
    },
    {
      "label": "15",
      "R": 180.1576,
      "d": 3.0884,
      "nd": 1.72916,
      "elemId": 8,
      "sd": 9.6
    },
    {
      "label": "16",
      "R": -28.7965,
      "d": 2.1,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.6
    },
    {
      "label": "17",
      "R": -257.6219,
      "d": 0.8,
      "nd": 1.61997,
      "elemId": 9,
      "sd": 9
    },
    {
      "label": "18",
      "R": 22.4073,
      "d": 7.938,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9
    },
    {
      "label": "19",
      "R": -16.4709,
      "d": 2.0,
      "nd": 1.48749,
      "elemId": 10,
      "sd": 10.9
    },
    {
      "label": "20",
      "R": -47.0356,
      "d": 1.0308,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.6
    },
    {
      "label": "21",
      "R": 61.76,
      "d": 2.8755,
      "nd": 1.85451,
      "elemId": 11,
      "sd": 15.9
    },
    {
      "label": "22",
      "R": 1000.0,
      "d": 19.1295,
      "nd": 1.0,
      "elemId": 0,
      "sd": 15.9
    }
  ],
  "asph": {
    "13A": {
      "K": 0,
      "A4": -1.29381e-05,
      "A6": -3.89236e-08,
      "A8": -2.08711e-10,
      "A10": 0,
      "A12": 0,
      "A14": 0
    },
    "14A": {
      "K": 0,
      "A4": 2.61465e-05,
      "A6": -1.34328e-08,
      "A8": -2.13221e-10,
      "A10": 0,
      "A12": 0,
      "A14": 0
    }
  },
  "var": {
    "STO": [
      9.926,
      8.5353
    ],
    "16": [
      2.1,
      3.4907
    ]
  },
  "focusPositions": [
    0,
    1
  ],
  "varLabels": [
    [
      "STO",
      "d10"
    ],
    [
      "16",
      "d16"
    ]
  ],
  "groups": [
    {
      "text": "L1 FIXED",
      "fromSurface": "1",
      "toSurface": "9"
    },
    {
      "text": "L2 FOCUS",
      "fromSurface": "11",
      "toSurface": "16"
    },
    {
      "text": "L3 FIXED",
      "fromSurface": "17",
      "toSurface": "22"
    }
  ],
  "doublets": [
    {
      "text": "E1",
      "fromSurface": "7",
      "toSurface": "9"
    }
  ],
  "closeFocusM": 1.7930199,
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 1715,
      "distanceReference": "first-surface",
      "source": "JP 2022-061515 A, Numerical Example 2, PDF p. 15, variable spacings d0/d10/d16; paragraph 0081 defines the first-surface reference."
    }
  ],
  "focusDescription": "PUBLISHED endpoints: group L2 (surfaces 11–16) moves 1.3907 mm toward the object from infinity to the patent's near state; L1, the stop and L3 stay fixed. That near state is 1.793 m object to image at a magnification of −1/20, not the marketed 0.5 m (1:5) minimum focus, which the patent does not tabulate. Positions between the two printed states are linearly interpolated.",
  "nominalFno": 2.9,
  "maxFstop": 22,
  "fstopSeries": [
    2.9,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "apertureBlades": 9,
  "yScFill": 0.3
} satisfies LensDataInput;

export default LENS_DATA;
