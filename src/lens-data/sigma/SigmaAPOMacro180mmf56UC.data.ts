import type { LensDataInput } from "../../types/optics.js";

/**
 * SIGMA APO MACRO 180mm f/5.6 UC: JPH04110811A, Example 3.
 * Nine elements, six air-separated groups, four functional groups; all spherical.
 * NOTE ON DESIGNATIONS: the patent writes its four lens groups as L1-L4
 * (claims 1-4, PDF p1; summary, PDF p2) and Figure 5 brackets them as the
 * first to fourth groups; the group brackets here are G1-G4. The patent
 * numbers no single element, so elements are named E1-E9 (sequential, not
 * patent designations) to keep "L" for the patent's groups; the diagram
 * shows the element numbers 1-9. D1-D3 are model labels for the cemented pairs.
 * Native prescription retained at f = 174.86 mm; no scaling to marketed 180 mm.
 * Source row 9 is the actual iris; source r = 0.0 maps to a flat STO.
 * Source terminal d16 = 0.0 is a placeholder; separate infinity fb = 40.08 mm
 * supplies the fixed image gap. G4 is fixed relative to image. No rear plate.
 * Both printed focus states are kept as printed. The 0.5x object distance is
 * 403.0 mm from S1. Its paraxial image lies 0.288342 mm behind the fixed image
 * plane. That offset is the design's spherical aberration at 1:2, not a focus
 * error and not rounding: real rays in the 0.65-0.93 aperture zones cross the
 * axis 40.07-40.11 mm behind S16 (the full-aperture marginal ray at 40.16 mm),
 * and the on-axis RMS spot radius is 3.2 um at the 40.08 mm plane against
 * 14.9 um at the paraxial plane. Patent Figure 6 plots the same bow of about
 * -0.3 mm at 0.5x.
 * closeFocusM = (403.0 + 103.29 + 40.08)/1000; marketed MFD is 0.55 m.
 * Gaps between the two printed states are linearly interpolated; the patent
 * tabulates no intermediate focus position.
 * NOTE ON SEMI-DIAMETERS: inferred from Figure 5 optical rims (PDF p6),
 * refined/checked against exact rays; no source clear radii are published.
 * Figure 5 is the infinity section, hand-drawn (about +/-8 %); on the native
 * 352 dpi scan S1-S16 = 103.29 mm spans 969.5 px, i.e. 0.1065 mm/px.
 * Figure radii by component: 19.8, 17.9, 13.6-13.9, 11.2, 14.0, 15.8 mm.
 * Conservative rounded model radii: 20,18,14,11.31,14,16 mm respectively;
 * each is within 3 % of the figure. The front-corner bevels Figure 5 draws
 * on E5 and E8 are not modeled. Real-ray floor check from infinity to 0.5x
 * (finite object, fixed iris): no on-axis or corner chief-ray clip.
 * The 11.31 mm G3 rims also contain the directly published 7-degree
 * infinity-field beam at its cemented interface; edge-exit vignetting remains.
 * The STO radius 9.1943879049 mm is set by an exact on-axis ray entering at
 * height EFL/(2*5.71); the paraxial-only estimate would be 9.048929 mm.
 * This is F-number calibration, not independent evidence of diaphragm size.
 * The inferred iris is fixed with focus. At 0.5x it works at about F/6.17
 * where the patent prints an effective F/5.98; no focus-dependent iris is
 * added to force agreement.
 * Printed inconsistency in the source: the condition summary gives
 * beta2 = 4.8 and beta4 = 1.5, the prescription gives 4.876 and 1.567.
 * Glass names and C/F/g/dPgF fields are catalog-equivalent spectral proxies
 * from HOYA formula-1 coefficients, not historical supplier/melt identification.
 * No apochromatic performance claim follows from the commercial APO name.
 * Figure-based rims retain modeled edge vignetting. Geometry uses default
 * gapSagFrac 0.90; no hidden trim or relaxed slope/conic policy is intended.
 */

const LENS_DATA = {
  "key": "sigma-apo-macro-180mm-f56-uc",
  "name": "SIGMA APO MACRO 180mm f/5.6 UC",
  "maker": "Sigma",
  "sourceErrata": [
    {
      "status": "unresolved",
      "note": "The patent's condition summary for Example 3 prints β2 = 4.8 and β4 = 1.5, while the printed prescription gives 4.876 and 1.567. All six conditions still hold, and no prescription value is changed."
    },
    {
      "status": "unresolved",
      "note": "With the iris sized for the printed F/5.71 at infinity and held fixed, the 0.5× state works at about F/6.17, where the patent prints an effective F/5.98. The patent gives no iris diameter, so the difference is left as it is."
    }
  ],
  "subtitle": "JP H04-110811 A, Example 3 — construction-based production correlation",
  "specs": [
    "9 ELEMENTS / 6 GROUPS",
    "DESIGN f = 174.86 mm",
    "DESIGN F/5.71",
    "ALL SPHERICAL",
    "PUBLISHED 0.5× CLOSE-FOCUS STATE"
  ],
  "focalLengthMarketing": 180,
  "focalLengthDesign": 174.86,
  "apertureMarketing": 5.6,
  "apertureDesign": 5.71,
  "lensMounts": [
    "sigma-sa",
    "sony-a",
    "nikon-f",
    "canon-ef"
  ],
  "imageFormat": "135-full-frame",
  "imageCircleMm": 43.2,
  "patentNumber": "JP H04-110811 A",
  "patentAuthors": [
    "Takehisa Koyama"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 1992,
  "elementCount": 9,
  "groupCount": 6,
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.6,
      "indexReference": "d",
      "fl": 96.787955,
      "glass": "FCD1 equivalent (HOYA)",
      "nC": 1.4951374776,
      "nF": 1.5012275046,
      "ng": 1.5045091267,
      "dPgF": 0.03230303,
      "apdNote": "The patent's 1.49700 / 81.6 coordinates correspond to an FCD1-class extra-low-dispersion glass, and Sigma markets the lens as APO with SLD glass; the patent does not designate the element.",
      "role": "Positive front singlet of the fixed first group G1.",
      "apd": "inferred"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.6,
      "indexReference": "d",
      "fl": 62.489491,
      "glass": "FCD1 equivalent (HOYA)",
      "nC": 1.4951374776,
      "nF": 1.5012275046,
      "ng": 1.5045091267,
      "dPgF": 0.03230303,
      "apdNote": "The patent's 1.49700 / 81.6 coordinates correspond to an FCD1-class extra-low-dispersion glass, and Sigma markets the lens as APO with SLD glass; the patent does not designate the element.",
      "role": "Positive front element of the cemented doublet in the fixed first group G1.",
      "apd": "inferred",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.3,
      "indexReference": "d",
      "fl": -79.321595,
      "glass": "NBFD10 equivalent (HOYA)",
      "nC": 1.8274203039,
      "nF": 1.8497525931,
      "ng": 1.8626842428,
      "dPgF": -0.00200524,
      "role": "Negative rear element of the cemented doublet in the fixed first group G1.",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.84666,
      "vd": 23.8,
      "indexReference": "d",
      "fl": 51.082468,
      "glass": "FDS90-SG equivalent (HOYA)",
      "nC": 1.8364919125,
      "nF": 1.8720887041,
      "ng": 1.8941303413,
      "dPgF": 0.01543452,
      "role": "Positive front element of the cemented negative focusing group G2, which moves toward the image for close focus.",
      "cemented": "D2"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.7859,
      "vd": 43.9,
      "indexReference": "d",
      "fl": -26.220349,
      "glass": "NBFD11 equivalent (HOYA)",
      "nC": 1.7805325504,
      "nF": 1.7984205191,
      "ng": 1.8084583793,
      "dPgF": -0.00880871,
      "role": "Negative rear element of the cemented focusing group G2, which moves toward the image for close focus.",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.7552,
      "vd": 27.5,
      "indexReference": "d",
      "fl": -114.01841,
      "glass": "E-FD4 / E-FD4L equivalent (HOYA)",
      "nC": 1.7472969243,
      "nF": 1.7747285905,
      "ng": 1.7914574687,
      "dPgF": 0.01229321,
      "role": "Negative front element of the cemented positive focusing group G3, which moves toward the object for close focus.",
      "cemented": "D3"
    },
    {
      "id": 7,
      "name": "E7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.4,
      "indexReference": "d",
      "fl": 51.422609,
      "glass": "FC5 equivalent (HOYA)",
      "nC": 1.485350004,
      "nF": 1.4922705241,
      "ng": 1.4959425074,
      "dPgF": 0.00520634,
      "role": "Positive rear element of the cemented focusing group G3, which moves toward the object for close focus.",
      "cemented": "D3"
    },
    {
      "id": 8,
      "name": "E8",
      "label": "Element 8",
      "type": "Biconcave Negative",
      "nd": 1.713,
      "vd": 53.9,
      "indexReference": "d",
      "fl": -42.963168,
      "glass": "LAC8 equivalent (HOYA)",
      "nC": 1.7089785191,
      "nF": 1.7221971878,
      "ng": 1.7293910485,
      "dPgF": -0.00892045,
      "role": "Negative front element of the fixed rear group G4."
    },
    {
      "id": 9,
      "name": "E9",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.84666,
      "vd": 23.8,
      "indexReference": "d",
      "fl": 97.666352,
      "glass": "FDS90-SG equivalent (HOYA)",
      "nC": 1.8364919125,
      "nF": 1.8720887041,
      "ng": 1.8941303413,
      "dPgF": 0.01543452,
      "role": "Positive rear meniscus of the fixed rear group G4."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 81.37,
      "d": 6.17,
      "nd": 1.497,
      "elemId": 1,
      "sd": 20
    },
    {
      "label": "2",
      "R": -114.7,
      "d": 0.26,
      "nd": 1,
      "elemId": 0,
      "sd": 20
    },
    {
      "label": "3",
      "R": 46.72,
      "d": 7.17,
      "nd": 1.497,
      "elemId": 2,
      "sd": 18
    },
    {
      "label": "4",
      "R": -87.92,
      "d": 2.3,
      "nd": 1.834,
      "elemId": 3,
      "sd": 18
    },
    {
      "label": "5",
      "R": 270.4,
      "d": 12.48,
      "nd": 1,
      "elemId": 0,
      "sd": 18
    },
    {
      "label": "6",
      "R": -411.0,
      "d": 2.94,
      "nd": 1.84666,
      "elemId": 4,
      "sd": 14
    },
    {
      "label": "7",
      "R": -39.26,
      "d": 1.5,
      "nd": 1.7859,
      "elemId": 5,
      "sd": 14
    },
    {
      "label": "8",
      "R": 44.1,
      "d": 14.5,
      "nd": 1,
      "elemId": 0,
      "sd": 14
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 11.63,
      "nd": 1,
      "elemId": 0,
      "sd": 9.1943879049
    },
    {
      "label": "10",
      "R": 258.5,
      "d": 1.5,
      "nd": 1.7552,
      "elemId": 6,
      "sd": 11.31
    },
    {
      "label": "11",
      "R": 64.43,
      "d": 3.99,
      "nd": 1.48749,
      "elemId": 7,
      "sd": 11.31
    },
    {
      "label": "12",
      "R": -40.2,
      "d": 33.45,
      "nd": 1,
      "elemId": 0,
      "sd": 11.31
    },
    {
      "label": "13",
      "R": -35.97,
      "d": 1.5,
      "nd": 1.713,
      "elemId": 8,
      "sd": 14
    },
    {
      "label": "14",
      "R": 210.03,
      "d": 1.19,
      "nd": 1,
      "elemId": 0,
      "sd": 14
    },
    {
      "label": "15",
      "R": 67.68,
      "d": 2.71,
      "nd": 1.84666,
      "elemId": 9,
      "sd": 16
    },
    {
      "label": "16",
      "R": 366.0,
      "d": 40.08,
      "nd": 1,
      "elemId": 0,
      "sd": 16
    }
  ],
  "asph": {},
  "var": {
    "5": [
      12.48,
      23.66
    ],
    "8": [
      14.5,
      3.32
    ],
    "STO": [
      11.63,
      3.38
    ],
    "12": [
      33.45,
      41.7
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
      "objectDistanceMm": 403.0,
      "distanceReference": "first-surface",
      "source": "JP H04-110811 A, Example 3, 0.5× gap row (p. 4); object distance measured from the first surface (p. 3). The printed state is in best focus on the fixed image plane; the paraxial image lies about 0.288 mm behind it because of spherical aberration at 1:2."
    }
  ],
  "varLabels": [
    [
      "5",
      "D5"
    ],
    [
      "8",
      "D8"
    ],
    [
      "STO",
      "D9"
    ],
    [
      "12",
      "D12"
    ]
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "G2",
      "fromSurface": "6",
      "toSurface": "8"
    },
    {
      "text": "G3",
      "fromSurface": "10",
      "toSurface": "12"
    },
    {
      "text": "G4",
      "fromSurface": "13",
      "toSurface": "16"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "D2",
      "fromSurface": "6",
      "toSurface": "8"
    },
    {
      "text": "D3",
      "fromSurface": "10",
      "toSurface": "12"
    }
  ],
  "closeFocusM": 0.54637,
  "nominalFno": 5.71,
  "fstopSeries": [
    5.71,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "yScFill": 0.32,
  "focusDescription": "PUBLISHED floating inner focus: G1 and G4 are fixed, and from infinity to 0.5× G2 moves 11.18 mm toward the image while G3 moves 8.25 mm toward the object; the stop between them does not move. Both end states are the patent's printed gaps, and positions in between are linearly interpolated. The 0.5× state puts the object 403.0 mm in front of the first surface, about 0.546 m from object to image against the marketed 0.55 m minimum focus. Real rays focus that state on the fixed image plane to within about 0.04 mm; the paraxial image lies 0.288 mm behind it because of the design's spherical aberration at 1:2."
} satisfies LensDataInput;
export default LENS_DATA;
