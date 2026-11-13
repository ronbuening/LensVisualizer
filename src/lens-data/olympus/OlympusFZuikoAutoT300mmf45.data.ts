import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 3,819,253 (Keiichi Itoh, Olympus Optical Co., Ltd.), sole example, matched to the Olympus OM Zuiko Auto-T
 * 300mm f/4.5, six elements in four groups, sold first as the F.Zuiko Auto-T and later, multicoated, as the Zuiko
 * Auto-T. The match rests on construction, focal length, aperture, field, length and timing; this is a patent design,
 * not a confirmed factory prescription.
 * Scale: the patent prints the example at f = 300, so every R and d is used as printed.
 * Printed: R, d, d-line n and Abbe number of each element, F 1:4.5 and f = 300; Figs. 2C and 2D plot the field to 4
 * degrees. The claim repeats the table without differences. The model's EFL is 299.845 mm.
 * Image plane: the patent prints no back focus, so the final gap is the computed paraxial back focus, 84.787 mm.
 * Stop: the patent neither prints nor draws one. Following the PhotonsToPhotos Optical Bench transcription of this
 * example, the stop sits at the midpoint of the 100 mm air space d7 (50 + 50 mm); its radius is set by the f/4.5
 * paraxial entrance pupil.
 * Semi-diameters: the patent prints none. Fig. 1 is drawn close to scale, 17.7 px/mm along the axis at 144 dpi
 * (18.1 across d7, 15.6 in the thin rear doublet) and about 17.5 across it from arc fits to R1, R2, R3, R6 and R7.
 * Each semi-diameter is half the clear diameter that PhotonsToPhotos Optical Bench lists for the same surface, and
 * the front-group values agree with Fig. 1 within about 1 %, except S3: Fig. 1 ends L2's front face 1.4 mm inside
 * L1's rim, so S3 is 34.6 mm (listed 35.95). The rear doublet is drawn about 7 % smaller than listed. It keeps the
 * listed values: they set the light at the field edge (the drawn values would take 5 points from the 4° corner) and
 * match the maker's construction drawing, where the doublet is 0.42 of the front element's diameter.
 * Elements: the patent numbers components L1 to L4 (Fig. 1 brackets the cemented L3 and L4). The single lenses keep
 * those names; the elements of the cemented components are L3a/L3b and L4a/L4b, front to rear. The FRONT and REAR
 * brackets are the patent's front and rear lens groups.
 * Glass: five elements carry exact catalog equivalents of the printed nd and Abbe number. L3b is the glass the patent
 * calls an abnormal-dispersion glass of KzSF type (nd 1.7398, Abbe number 31.7); no catalog row matches it exactly, so
 * it is traced on the nearest, OHARA BPH50 (1.73999 / 31.71), whose catalog partial dispersion is close to normal.
 * Focus: the patent names no focusing group or motion and prints the infinity state only, so no gap varies. The 3.5 m
 * minimum focus is Olympus's retail figure and is not modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-f-zuiko-auto-t-300mm-f45",
  "maker": "Olympus",
  "name": "OLYMPUS F.ZUIKO AUTO-T 300mm f/4.5",
  "subtitle": "US 3,819,253, sole example — strong match to the OM production lens",
  "catalog": {
    "lensMounts": [
      "olympus-om"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "6 ELEMENTS / 4 GROUPS",
      "DESIGN f = 300 mm",
      "DESIGN F/4.5",
      "ALL SPHERICAL",
      "1 ANOMALOUS-DISPERSION ELEMENT"
    ],
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 300,
      "design": 300
    },
    "fNumber": {
      "marketing": 4.5,
      "design": 4.5
    },
    "closeFocusM": {
      "marketing": 3.5
    }
  },
  "source": {
    "patentNumber": "US 3,819,253",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1974,
    "authors": [
      "Keiichi Itoh"
    ],
    "assignees": [
      "Olympus Optical Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.1,
      "focalLengthMm": 136.04118781234996,
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Low-dispersion crown front element; the main converging power of the front group."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.6935,
      "vd": 53.3,
      "focalLengthMm": -217.8000672085772,
      "glass": "LAC13 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Negative lens 4 mm behind L1; the patent keeps this air space small to hold down the front group's Petzval sum and even out spherical aberration across wavelengths."
    },
    {
      "id": 3,
      "name": "L3a",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.618,
      "vd": 63.4,
      "focalLengthMm": 134.46145637091107,
      "glass": "PCD4 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Positive crown of the cemented positive meniscus that closes the front group.",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L3b",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.7398,
      "vd": 31.7,
      "focalLengthMm": -191.70224728860555,
      "glass": "BPH50 (OHARA; nearest catalog row to patent nd 1.7398, νd 31.7)",
      "apd": "patent",
      "apdNote": "The patent names this an abnormal-dispersion glass of KzSF type but prints no partial dispersion; the trace uses the nearest catalog row, OHARA BPH50, whose partial dispersion is close to normal.",
      "role": "Anomalous-dispersion flint on the image side of the front cemented meniscus; the patent credits it with minimizing chromatic aberration.",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L4a",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.713,
      "vd": 54.0,
      "focalLengthMm": -43.90970018269279,
      "glass": "LAC8 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Strong negative of the rear cemented meniscus; supplies the rear group's telephoto power.",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "L4b",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.5927,
      "vd": 35.6,
      "focalLengthMm": 67.18435005020238,
      "glass": "FF5 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Positive flint cemented behind L4a; offsets part of its power, leaving the rear group at f = −142.8 mm, and corrects the group's colour.",
      "cemented": "D2"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 89.944,
      "d": 13,
      "sd": 35.73,
      "medium": 1
    },
    {
      "label": "2",
      "R": -240.523,
      "d": 4,
      "sd": 35.73
    },
    {
      "label": "3",
      "R": -234.162,
      "d": 3,
      "sd": 34.6,
      "medium": 2
    },
    {
      "label": "4",
      "R": 427.76,
      "d": 0.1,
      "sd": 32.96
    },
    {
      "label": "5",
      "R": 95.45,
      "d": 11,
      "sd": 33.39,
      "medium": 3
    },
    {
      "label": "6",
      "R": -613.827,
      "d": 3,
      "sd": 33.39,
      "medium": 4
    },
    {
      "label": "7",
      "R": 184.817,
      "d": 50,
      "sd": 31.04
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 50
    },
    {
      "label": "8",
      "R": -41.868,
      "d": 2,
      "sd": 13.76,
      "medium": 5
    },
    {
      "label": "9",
      "R": 126.591,
      "d": 4,
      "sd": 14.83,
      "medium": 6
    },
    {
      "label": "10",
      "R": -57.411,
      "d": 84.78659413475056,
      "sd": 14.83
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "The patent names no focusing group or motion and prints the infinity state only, so the lens is modeled at infinity with no focus movement. Olympus's retail minimum focus of 3.5 m, reached with a straight helicoid, is not modeled."
  },
  "aperture": {
    "nominalFNumber": 4.5,
    "fStops": [
      4.5,
      5.6,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 8,
    "maxTraceFieldDeg": 4
  },
  "layout": {
    "yScFill": 0.36
  },
  "groups": [
    {
      "text": "FRONT",
      "fromSurface": "1",
      "toSurface": "7"
    },
    {
      "text": "REAR",
      "fromSurface": "8",
      "toSurface": "10"
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
      "fromSurface": "8",
      "toSurface": "10"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
