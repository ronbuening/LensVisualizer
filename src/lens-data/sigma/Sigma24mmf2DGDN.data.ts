import type { LensDataInput } from "../../types/optics.js";

/* JP2022073433A Example 1, Sigma / Takeshi Asakura. 13 elements / 11 air groups.
 * Native source prescription without scaling or repairs. No rear plate is listed.
 * Construction correlation only: exact factory prescription remains unconfirmed.
 * Native field 90.08 degrees vs marketed 84.1; native near state 255 mm vs marketed 245 mm.
 * No digital-correction explanation has been verified.
 * PUBLISHED focus endpoints; intervening linear gap motion is modeled interpolation.
 * STO radius is INFERRED by exact Snell trace of EFL/(2*2.07) to source surface 15,
 * following current-main runtime aperture convention. Calibration is not an independent
 * measurement of the physical iris. Other SDs are ESTIMATED from patent Figure 1
 * (PDF p. 20, drawn to prescription scale; 0.0303 mm/px at 600 dpi) and floor-checked
 * by exact real-ray trace at infinity and the 255 mm state. Rims follow the drawn
 * element edges, so each element renders as the squared block the figure shows; the
 * flat lands drawn on surfaces 4, 5, 8, 13 (L17 side), 17 and 19 are not modeled
 * (17 and 19 are carried to the L21 / L22 edges; the drawn curves end at 8.2 and
 * 8.8 mm). Only surfaces 2 and 23 end where the drawn curve meets its land, because
 * the full edge height is geometrically impossible there (R2 = 15.31 mm; 23 held at
 * 12.7 by gap clearance to 24, drawn 12.9), so L11 and L32 render a bevelled rim.
 * The patent publishes no
 * clear apertures. Edge bundle vignetting is retained; this is not a claim
 * of unvignetted full pupil over the native field. No geometry-policy overrides.
 * Native nd/vd retained; glass labels are coordinate equivalents, not supplier identity.
 * No patent line indices or partial-dispersion quantities are supplied.
 */
const LENS_DATA = {
  "key": "sigma-24mm-f2-dg-dn-contemporary",
  "maker": "Sigma",
  "name": "SIGMA 24mm f/2 DG DN | Contemporary",
  "subtitle": "JP 2022-073433 A, Numerical Example 1; construction correlation",
  "specs": [
    "13 ELEMENTS / 11 GROUPS",
    "DESIGN f = 24.00 mm",
    "DESIGN F/2.07",
    "2ω = 90.08°",
    "4 ASPHERICAL SURFACES / 2 ELEMENTS",
    "1 FLD + 2 SLD (INFERRED)"
  ],
  "focalLengthMarketing": 24,
  "focalLengthDesign": 24.001372,
  "apertureMarketing": 2,
  "apertureDesign": 2.07,
  "lensMounts": [
    "l-mount",
    "sony-fe"
  ],
  "imageFormat": "135-full-frame",
  "imageCircleMm": 43.26,
  "patentNumber": "JP 2022-073433 A",
  "patentAuthors": [
    "Takeshi Asakura"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2022,
  "elementCount": 13,
  "groupCount": 11,
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "diagramLabel": "L11",
      "label": "L11",
      "type": "Negative Meniscus",
      "nd": 1.59349,
      "vd": 67.0,
      "fl": -39.553211,
      "glass": "PCD51 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "G1 (fixed, positive): front negative meniscus, convex to the object."
    },
    {
      "id": 2,
      "name": "L12",
      "diagramLabel": "L12",
      "label": "L12",
      "type": "Negative Meniscus",
      "nd": 1.55032,
      "vd": 75.5,
      "fl": -179.350201,
      "glass": "FCD705 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Inferred from coordinates: FCD705-class low-dispersion crown (νd 75.50; catalog dPgF +0.023), consistent with one of the two marketed SLD elements. The patent does not designate it.",
      "role": "G1: second negative meniscus, convex to the object."
    },
    {
      "id": 3,
      "name": "L13",
      "diagramLabel": "L13",
      "label": "L13",
      "type": "Biconcave Negative",
      "nd": 1.437,
      "vd": 95.1,
      "fl": -48.088792,
      "glass": "FCD100 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Inferred from coordinates: FCD100-class fluorophosphate crown (νd 95.10; catalog dPgF +0.050), consistent with the marketed FLD element. The patent does not designate it.",
      "role": "G1: biconcave negative member of cemented doublet D1, with L14.",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L14",
      "diagramLabel": "L14",
      "label": "L14",
      "type": "Biconvex Positive",
      "nd": 1.92119,
      "vd": 23.96,
      "fl": 30.707828,
      "glass": "FDS24 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "G1: biconvex positive member of cemented doublet D1, with L13.",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L15",
      "diagramLabel": "L15",
      "label": "L15",
      "type": "Negative Meniscus",
      "nd": 1.85451,
      "vd": 25.15,
      "fl": -23.01313,
      "glass": "NBFD25 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "G1: negative meniscus, convex to the image."
    },
    {
      "id": 6,
      "name": "L16",
      "diagramLabel": "L16",
      "label": "L16",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.85135,
      "vd": 40.1,
      "fl": 19.818006,
      "glass": "M-TAFD305 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "G1: biconvex positive lens with both surfaces aspheric."
    },
    {
      "id": 7,
      "name": "L17",
      "diagramLabel": "L17",
      "label": "L17",
      "type": "Negative Meniscus",
      "nd": 1.85451,
      "vd": 25.15,
      "fl": -37.823553,
      "glass": "NBFD25 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "G1: negative meniscus, convex to the object; negative member of cemented doublet D2, with L18.",
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L18",
      "diagramLabel": "L18",
      "label": "L18",
      "type": "Biconvex Positive",
      "nd": 1.55032,
      "vd": 75.5,
      "fl": 23.247338,
      "glass": "FCD705 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Inferred from coordinates: FCD705-class low-dispersion crown (νd 75.50; catalog dPgF +0.023), consistent with one of the two marketed SLD elements. The patent does not designate it.",
      "role": "G1: biconvex positive member of cemented doublet D2, with L17; last lens ahead of the stop.",
      "cemented": "D2"
    },
    {
      "id": 9,
      "name": "L21",
      "diagramLabel": "L21",
      "label": "L21 (Ln)",
      "type": "Negative Meniscus",
      "nd": 1.64769,
      "vd": 33.84,
      "fl": -41.560032,
      "glass": "E-FD2 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "G2 (focus, negative): negative meniscus, convex to the object; the patent's negative lens Ln. Moves imageward with L22 for close focus."
    },
    {
      "id": 10,
      "name": "L22",
      "diagramLabel": "L22",
      "label": "L22 (Lp)",
      "type": "Positive Meniscus",
      "nd": 1.98613,
      "vd": 16.48,
      "fl": 91.645309,
      "glass": "FDS16-W (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "G2 (focus): positive meniscus, convex to the object; the patent's positive lens Lp. Moves imageward with L21 for close focus."
    },
    {
      "id": 11,
      "name": "L31",
      "diagramLabel": "L31",
      "label": "L31",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.6935,
      "vd": 53.2,
      "fl": 32.457173,
      "glass": "M-LAC130 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "G3 (fixed, positive): biconvex positive lens with both surfaces aspheric."
    },
    {
      "id": 12,
      "name": "L32",
      "diagramLabel": "L32",
      "label": "L32",
      "type": "Negative Meniscus",
      "nd": 1.85451,
      "vd": 25.15,
      "fl": -96.839158,
      "glass": "NBFD25 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "G3: negative meniscus, convex to the object."
    },
    {
      "id": 13,
      "name": "L33",
      "diagramLabel": "L33",
      "label": "L33",
      "type": "Negative Meniscus",
      "nd": 1.85451,
      "vd": 25.15,
      "fl": -171.71534,
      "glass": "NBFD25 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "G3: negative meniscus, convex to the image; last element."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 45.6037,
      "d": 1.5,
      "nd": 1.59349,
      "elemId": 1,
      "sd": 18.2
    },
    {
      "label": "2",
      "R": 15.3074,
      "d": 6.6756,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13.1
    },
    {
      "label": "3",
      "R": 58.8288,
      "d": 1.0,
      "nd": 1.55032,
      "elemId": 2,
      "sd": 13.8
    },
    {
      "label": "4",
      "R": 36.6369,
      "d": 5.9203,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13.8
    },
    {
      "label": "5",
      "R": -40.7794,
      "d": 1.2,
      "nd": 1.437,
      "elemId": 3,
      "sd": 12.5
    },
    {
      "label": "6",
      "R": 43.7469,
      "d": 5.306,
      "nd": 1.92119,
      "elemId": 4,
      "sd": 12.5
    },
    {
      "label": "7",
      "R": -75.3943,
      "d": 3.6449,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.5
    },
    {
      "label": "8",
      "R": -19.2777,
      "d": 0.9,
      "nd": 1.85451,
      "elemId": 5,
      "sd": 11.2
    },
    {
      "label": "9",
      "R": -1000.0,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.2
    },
    {
      "label": "10A",
      "R": 55.4577,
      "d": 6.0921,
      "nd": 1.85135,
      "elemId": 6,
      "sd": 11.9
    },
    {
      "label": "11A",
      "R": -23.0246,
      "d": 1.0,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.9
    },
    {
      "label": "12",
      "R": 33.0246,
      "d": 1.0,
      "nd": 1.85451,
      "elemId": 7,
      "sd": 11.5
    },
    {
      "label": "13",
      "R": 16.1065,
      "d": 8.141,
      "nd": 1.55032,
      "elemId": 8,
      "sd": 11.5
    },
    {
      "label": "14",
      "R": -51.0371,
      "d": 1.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.5
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 3.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.3036673645
    },
    {
      "label": "16",
      "R": 79.458,
      "d": 0.9,
      "nd": 1.64769,
      "elemId": 9,
      "sd": 9.6
    },
    {
      "label": "17",
      "R": 20.017,
      "d": 1.596,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.6
    },
    {
      "label": "18",
      "R": 26.0329,
      "d": 1.9148,
      "nd": 1.98613,
      "elemId": 10,
      "sd": 10.1
    },
    {
      "label": "19",
      "R": 35.2306,
      "d": 8.2253,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.1
    },
    {
      "label": "20A",
      "R": 71.473,
      "d": 5.6621,
      "nd": 1.6935,
      "elemId": 11,
      "sd": 13.1
    },
    {
      "label": "21A",
      "R": -31.7907,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13.1
    },
    {
      "label": "22",
      "R": 31.6561,
      "d": 1.0,
      "nd": 1.85451,
      "elemId": 12,
      "sd": 13.9
    },
    {
      "label": "23",
      "R": 22.5636,
      "d": 5.442,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.7
    },
    {
      "label": "24",
      "R": -83.9654,
      "d": 1.0,
      "nd": 1.85451,
      "elemId": 13,
      "sd": 14.2
    },
    {
      "label": "25",
      "R": -197.3656,
      "d": 17.18,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.2
    }
  ],
  "asph": {
    "10A": {
      "K": 0.0,
      "A4": -1.1433e-05,
      "A6": 9.28267e-09,
      "A8": -2.05847e-12,
      "A10": 3.52257e-13,
      "A12": -2.10462e-15,
      "A14": 0.0
    },
    "11A": {
      "K": 0.0,
      "A4": 6.80065e-06,
      "A6": -2.99492e-09,
      "A8": 6.42501e-11,
      "A10": -7.0348e-14,
      "A12": -3.63922e-16,
      "A14": 0.0
    },
    "20A": {
      "K": 0.0,
      "A4": -1.35312e-05,
      "A6": 1.54289e-08,
      "A8": 1.78792e-10,
      "A10": -1.9639e-12,
      "A12": 9.36503e-15,
      "A14": 0.0
    },
    "21A": {
      "K": 0.0,
      "A4": 5.37598e-07,
      "A6": -3.68634e-08,
      "A8": 5.74454e-10,
      "A10": -4.41849e-12,
      "A12": 1.4683e-14,
      "A14": 0.0
    }
  },
  "var": {
    "STO": [
      3.2,
      8.5816
    ],
    "19": [
      8.2253,
      2.8436
    ]
  },
  "varLabels": [
    [
      "STO",
      "D15"
    ],
    [
      "19",
      "D19"
    ]
  ],
  "focusPositions": [
    0,
    1
  ],
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 255,
      "distanceReference": "image-plane",
      "source": "JP 2022-073433 A Example 1: d0=165 mm, track=90 mm, PDF p12"
    }
  ],
  "groups": [
    {
      "text": "G1 (+)",
      "fromSurface": "1",
      "toSurface": "14"
    },
    {
      "text": "G2 (-), FOCUS",
      "fromSurface": "16",
      "toSurface": "19"
    },
    {
      "text": "G3 (+)",
      "fromSurface": "20A",
      "toSurface": "25"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "D2",
      "fromSurface": "12",
      "toSurface": "14"
    }
  ],
  "closeFocusM": 0.255,
  "focusDescription": "PUBLISHED endpoints: G2 moves 5.3816 mm imageward from infinity to the native 255 mm object-to-image state; G1, stop and G3 remain fixed within source rounding. Intermediate gap interpolation is a model, not a published cam law. Marketed 245 mm minimum focus is not represented.",
  "nominalFno": 2.07,
  "fstopSeries": [
    2.07,
    2.8,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "apertureBlades": 9,
  "apertureBladeRoundedness": 1,
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 90.08,
    "maxTraceFieldDeg": 45.04
  },
  "yScFill": 0.36
} satisfies LensDataInput;

export default LENS_DATA;
