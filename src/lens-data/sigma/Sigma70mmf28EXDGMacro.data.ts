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
 * NAMING: the patent uses "L" for sub-groups (L1 = elements 2-4, L2 = cemented L2A + L2B,
 * L3 = L3A + L3B) inside lens group G2; G1 is the front negative meniscus; G1 + G2 form the
 * first group and elements 9-10 the second group. Elements are therefore named E1..E10 and
 * the four lenses the patent itself designates carry diagramLabel L2A/L2B/L3A/L3B.
 * Semi-diameters are estimated from Fig.1 (both focus panels, measured at 5.85 px/mm)
 * and floor-checked by real-ray trace at all three published focus states. The figure's
 * chamfers on E4 and E5 (L2A) are kept as face steps: S8 below S7, S10 below S11/S12.
 * The rear rims follow the drawn staircase E6 13.4 / E7 13.8 / E8 14.1 / E9 14.4 / E10 15.0.
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
      "name": "E1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.54072,
      "vd": 47.2,
      "fl": -71.59033,
      "glass": "E-FEL2 (HOYA, coordinate equivalent)",
      "role": "Negative meniscus that alone forms the patent's lens group G1, the front of the first group."
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.7725,
      "vd": 49.6,
      "fl": 45.215389,
      "glass": "TAF1 (HOYA, coordinate equivalent)",
      "role": "Positive first member of the patent's pre-stop sub-group L1 (inside lens group G2)."
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.6968,
      "vd": 55.5,
      "fl": 80.719761,
      "glass": "LAC14 (HOYA, coordinate equivalent)",
      "role": "Positive meniscus, middle member of the patent's pre-stop sub-group L1."
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.60342,
      "vd": 38.0,
      "fl": -38.576952,
      "glass": "E-F5 (HOYA, coordinate equivalent)",
      "role": "Negative meniscus closing the patent's sub-group L1; its strong concave rear face looks at the stop."
    },
    {
      "id": 5,
      "name": "E5",
      "diagramLabel": "L2A",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.58144,
      "vd": 40.9,
      "fl": -36.614433,
      "glass": "E-FL5 (HOYA, coordinate equivalent)",
      "role": "Patent lens L2A: negative partner of the net-negative cemented sub-group L2 behind the stop.",
      "cemented": "L2"
    },
    {
      "id": 6,
      "name": "E6",
      "diagramLabel": "L2B",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.56045,
      "vd": 71.6,
      "fl": 47.340327,
      "glass": "Unmatched (anomalous-dispersion crown; catalog identity unresolved)",
      "role": "Patent lens L2B: positive anomalous-dispersion partner cemented to L2A; the patent tabulates its partial-dispersion deviation.",
      "cemented": "L2",
      "dPgF": 0.0194312,
      "apd": "patent",
      "apdNote": "Patent identifies anomalous dispersion: native delta=0.0285 on 0.6575 - 0.002*vd; application dPgF=0.0194312 after baseline conversion. No measured line indices supplied."
    },
    {
      "id": 7,
      "name": "E7",
      "diagramLabel": "L3A",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.56045,
      "vd": 71.6,
      "fl": 90.222707,
      "glass": "Unmatched (anomalous-dispersion crown; catalog identity unresolved)",
      "role": "Patent lens L3A: first positive anomalous-dispersion lens of sub-group L3 at the rear of the first group.",
      "dPgF": 0.0194312,
      "apd": "patent",
      "apdNote": "Patent identifies anomalous dispersion: native delta=0.0285 on 0.6575 - 0.002*vd; application dPgF=0.0194312 after baseline conversion. No measured line indices supplied."
    },
    {
      "id": 8,
      "name": "E8",
      "diagramLabel": "L3B",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.6,
      "fl": 105.729177,
      "glass": "FCD1 (HOYA, coordinate equivalent)",
      "role": "Patent lens L3B: second positive lens of sub-group L3, the higher-Abbe anomalous-dispersion glass; last element of the first group.",
      "dPgF": 0.0320512,
      "apd": "patent",
      "apdNote": "Patent identifies anomalous dispersion: native delta=0.0443 on 0.6575 - 0.002*vd; application dPgF=0.0320512 after baseline conversion. No measured line indices supplied."
    },
    {
      "id": 9,
      "name": "E9",
      "label": "Element 9",
      "type": "Plano-Concave",
      "nd": 1.64,
      "vd": 60.2,
      "fl": -82.53125,
      "glass": "LACL60 (HOYA, coordinate equivalent)",
      "role": "Negative plano-concave front element of the net-negative second group (the floating group)."
    },
    {
      "id": 10,
      "name": "E10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.83481,
      "vd": 42.7,
      "fl": 121.404589,
      "glass": "TAFD5G (HOYA, coordinate equivalent)",
      "role": "Positive rear element of the second group, partly balancing the negative element ahead of it."
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
      "sd": 13.8
    },
    {
      "label": "14",
      "R": -53.2,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 13.8
    },
    {
      "label": "15",
      "R": 125.46,
      "d": 3.0,
      "nd": 1.497,
      "elemId": 8,
      "sd": 14.1
    },
    {
      "label": "16",
      "R": -89.7,
      "d": 1.5,
      "nd": 1,
      "elemId": 0,
      "sd": 14.1
    },
    {
      "label": "17",
      "R": 1000000000000000.0,
      "d": 1.2,
      "nd": 1.64,
      "elemId": 9,
      "sd": 14.4
    },
    {
      "label": "18",
      "R": 52.82,
      "d": 2.6,
      "nd": 1,
      "elemId": 0,
      "sd": 14.4
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
      "text": "1ST GROUP (+): G1, G2",
      "fromSurface": "1",
      "toSurface": "16"
    },
    {
      "text": "2ND GROUP (-)",
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
  "focusDescription": "PUBLISHED three-state floating extension: D16/BF follow JP 2008-020656 A Example 1 (infinity, 0.50x, 1.02x). Both groups extend toward the object relative to the fixed image: the first group (G1 + G2, S1-S16) by 25.19 mm then 51.23 mm, the second group (S17-S20) by 9.89 mm then 21.73 mm, so D16 opens from 1.5 to 31.0 mm. Intermediate slider positions are modeled interpolation, not published cam positions. The fixed physical iris is inferred by exact axial tracing at the nominal infinity entrance pupil for F/2.8823; reproduction of finite-focus published F/3.8824 and F/5.0151 remains unverified.",
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
