import type { LensDataInput } from "../../types/optics.js";

/**
 * SIGMA MACRO 70mm f/2.8 EX DG — JP 2008-020656 A, Numerical Example 1.
 * Production correlation is qualified, not manufacturer-confirmed factory identity.
 * Native prescription retained, scale 1: f=68.9061 mm and infinity F=2.8823.
 * Ten elements/nine components, all spherical. S9 is STO; S17 is a real refracting
 * plane into glass, not a sensor plate/dummy. R7 and R13 remain finite 1000 mm.
 * PUBLISHED focus states: D0 infinity/150/79 mm; D16 1.5/16.8/31 mm;
 * BF 55.8157/65.7028/77.5409 mm. focusPositions uses native object-to-image distances.
 * Between-station motion is modeled piecewise-linear interpolation, not a source cam law.
 * APERTURE LIMITATION: one fixed physical iris is inferred by exact axial tracing at the
 * nominal entrance-pupil radius, Gaussian EFL / (2 * source infinity F).
 * Published F=2.8823/3.8824/5.0151 is retained in the dossier. Finite-focus f-number
 * reproduction remains unverified; no focus-dependent iris schedule is invented.
 * Semi-diameters are estimated from Fig.1 (both focus panels, measured at 5.85 px/mm)
 * and floor-checked by real-ray trace at all three published focus states. The figure's
 * chamfers on L4 and L5 are kept as face steps: S8 below S7, S10 below S11/S12.
 * They are modeled clear apertures, not patent dimensions. No source surfaces omitted.
 * Patent partial-dispersion deviations are converted from its explicit normal line
 * to current application dPgF; no catalog candidate line indices are substituted.
 * Catalog labels are coordinate-equal HOYA rows; they do not identify the production supplier or melt.
 */

const LENS_DATA = {
  "key": "sigma-macro-70mm-f28-ex-dg",
  "maker": "Sigma",
  "name": "SIGMA MACRO 70mm f/2.8 EX DG",
  "subtitle": "JP 2008-020656 A, Example 1 — qualified production correlation",
  "specs": [
    "10 ELEMENTS / 9 GROUPS",
    "DESIGN f = 68.91 mm",
    "DESIGN F/2.88",
    "ALL SPHERICAL"
  ],
  "focalLengthMarketing": 70,
  "focalLengthDesign": 68.9061,
  "apertureMarketing": 2.8,
  "apertureDesign": 2.8823,
  "lensMounts": [
    "sigma-sa",
    "canon-ef",
    "nikon-f",
    "pentax-k",
    "sony-a"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "JP 2008-020656 A",
  "patentAuthors": [
    "Yutaka Kamimura",
    "Ai Hoshina"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2008,
  "elementCount": 10,
  "groupCount": 9,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.54072,
      "vd": 47.2,
      "fl": -71.59033,
      "glass": "E-FEL2 (HOYA, coordinate equivalent)",
      "role": "Negative front G1; contributes to front-block power distribution."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.7725,
      "vd": 49.6,
      "fl": 45.215389,
      "glass": "TAF1 (HOYA, coordinate equivalent)",
      "role": "Positive first member of pre-stop L1 subgroup."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.6968,
      "vd": 55.5,
      "fl": 80.719761,
      "glass": "LAC14 (HOYA, coordinate equivalent)",
      "role": "Positive meniscus within pre-stop L1 subgroup."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.60342,
      "vd": 38.0,
      "fl": -38.576952,
      "glass": "E-F5 (HOYA, coordinate equivalent)",
      "role": "Negative meniscus adjacent to object side of the stop."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.58144,
      "vd": 40.9,
      "fl": -36.614433,
      "glass": "E-FL5 (HOYA, coordinate equivalent)",
      "role": "Negative L2A partner in the net-negative cemented L2 subgroup.",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.56045,
      "vd": 71.6,
      "fl": 47.340327,
      "glass": "Unmatched (anomalous-dispersion crown; catalog identity unresolved)",
      "role": "Positive anomalous-dispersion L2B partner; source gives native partial dispersion.",
      "cemented": "D1",
      "dPgF": 0.0194312,
      "apd": "patent",
      "apdNote": "Patent identifies anomalous dispersion: native delta=0.0285 on 0.6575 - 0.002*vd; application dPgF=0.0194312 after baseline conversion. No measured line indices supplied."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.56045,
      "vd": 71.6,
      "fl": 90.222707,
      "glass": "Unmatched (anomalous-dispersion crown; catalog identity unresolved)",
      "role": "Positive anomalous-dispersion L3A in rear part of first moving block.",
      "dPgF": 0.0194312,
      "apd": "patent",
      "apdNote": "Patent identifies anomalous dispersion: native delta=0.0285 on 0.6575 - 0.002*vd; application dPgF=0.0194312 after baseline conversion. No measured line indices supplied."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.6,
      "fl": 105.729177,
      "glass": "FCD1 (HOYA, coordinate equivalent)",
      "role": "Positive high-Abbe anomalous-dispersion L3B in first moving block.",
      "dPgF": 0.0320512,
      "apd": "patent",
      "apdNote": "Patent identifies anomalous dispersion: native delta=0.0443 on 0.6575 - 0.002*vd; application dPgF=0.0320512 after baseline conversion. No measured line indices supplied."
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Plano-Concave",
      "nd": 1.64,
      "vd": 60.2,
      "fl": -82.53125,
      "glass": "LACL60 (HOYA, coordinate equivalent)",
      "role": "Negative plane-entry element in net-negative second moving block."
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.83481,
      "vd": 42.7,
      "fl": 121.404589,
      "glass": "TAFD5G (HOYA, coordinate equivalent)",
      "role": "Positive final element balancing the second moving block."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 369.55,
      "d": 1.8,
      "nd": 1.54072,
      "elemId": 1,
      "sd": 20
    },
    {
      "label": "2",
      "R": 34.98,
      "d": 13.45,
      "nd": 1,
      "elemId": 0,
      "sd": 20
    },
    {
      "label": "3",
      "R": 46.16,
      "d": 5.65,
      "nd": 1.7725,
      "elemId": 2,
      "sd": 18
    },
    {
      "label": "4",
      "R": -135.9,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 18
    },
    {
      "label": "5",
      "R": 31.73,
      "d": 3.5,
      "nd": 1.6968,
      "elemId": 3,
      "sd": 15.6
    },
    {
      "label": "6",
      "R": 69.5,
      "d": 5.79,
      "nd": 1,
      "elemId": 0,
      "sd": 15.6
    },
    {
      "label": "7",
      "R": 1000.0,
      "d": 1.0,
      "nd": 1.60342,
      "elemId": 4,
      "sd": 13.1
    },
    {
      "label": "8",
      "R": 22.74,
      "d": 12.1,
      "nd": 1,
      "elemId": 0,
      "sd": 12.1
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 4.2,
      "nd": 1,
      "elemId": 0,
      "sd": 10.496829816657463
    },
    {
      "label": "10",
      "R": -27.01,
      "d": 1.0,
      "nd": 1.58144,
      "elemId": 5,
      "sd": 11.7
    },
    {
      "label": "11",
      "R": 101.88,
      "d": 4.7,
      "nd": 1.56045,
      "elemId": 6,
      "sd": 13.4
    },
    {
      "label": "12",
      "R": -35.28,
      "d": 1.85,
      "nd": 1,
      "elemId": 0,
      "sd": 13.4
    },
    {
      "label": "13",
      "R": 1000.0,
      "d": 3.05,
      "nd": 1.56045,
      "elemId": 7,
      "sd": 14.5
    },
    {
      "label": "14",
      "R": -53.2,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 14.5
    },
    {
      "label": "15",
      "R": 125.46,
      "d": 3.0,
      "nd": 1.497,
      "elemId": 8,
      "sd": 14.5
    },
    {
      "label": "16",
      "R": -89.7,
      "d": 1.5,
      "nd": 1,
      "elemId": 0,
      "sd": 14.5
    },
    {
      "label": "17",
      "R": 1000000000000000.0,
      "d": 1.2,
      "nd": 1.64,
      "elemId": 9,
      "sd": 15
    },
    {
      "label": "18",
      "R": 52.82,
      "d": 2.6,
      "nd": 1,
      "elemId": 0,
      "sd": 15
    },
    {
      "label": "19",
      "R": 931.0,
      "d": 2.35,
      "nd": 1.83481,
      "elemId": 10,
      "sd": 15
    },
    {
      "label": "20",
      "R": -113.6,
      "d": 55.8157,
      "nd": 1,
      "elemId": 0,
      "sd": 15
    }
  ],
  "asph": {},
  "var": {
    "16": [
      1.5,
      16.8,
      31.0
    ],
    "20": [
      55.8157,
      65.7028,
      77.5409
    ]
  },
  "focusPositions": [
    0,
    0.8501483788312867,
    1
  ],
  "varLabels": [
    [
      "16",
      "D16"
    ],
    [
      "20",
      "BF"
    ]
  ],
  "groups": [
    {
      "text": "FIRST (+)",
      "fromSurface": "1",
      "toSurface": "16"
    },
    {
      "text": "SECOND (-)",
      "fromSurface": "17",
      "toSurface": "20"
    }
  ],
  "doublets": [
    {
      "text": "L2",
      "fromSurface": "10",
      "toSurface": "12"
    }
  ],
  "closeFocusM": 0.2550809,
  "focusDescription": "PUBLISHED three-state floating extension: D16/BF follow JP 2008-020656 A Example 1. All optical blocks extend objectward relative to the fixed image. Intermediate slider positions are modeled interpolation, not published cam positions. The fixed physical iris is inferred by exact axial tracing at the nominal infinity entrance pupil for F/2.8823; reproduction of finite-focus published F/3.8824 and F/5.0151 remains unverified.",
  "nominalFno": 2.8823,
  "fstopSeries": [
    2.8823,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "apertureBlades": 9,
  "yScFill": 0.3
} satisfies LensDataInput;

export default LENS_DATA;
