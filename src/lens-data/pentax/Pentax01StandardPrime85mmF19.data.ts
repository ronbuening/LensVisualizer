import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * PENTAX-01 STANDARD PRIME 8.5mm f/1.9 (Pentax Q mount)
 *
 * Source: US 2012/0268834 A1 (Yoichi Nomura, Pentax Ricoh Imaging), Numerical Embodiment 1, Tables 1–3 and Fig. 1;
 * granted as US 8,970,968 B2 with the same tables. Production correlation, not a factory prescription. No scaling:
 * the patent's f = 8.5 mm is the production focal length.
 *
 * Prescription: every R, d, nd and νd and the K / A4 / A6 / A8 terms of aspheric surfaces 12, 13 and 14 are as
 * printed, with no corrections. The patent's conic K is the standard K (all zero).
 *
 * Rear plates: the camera-body optical filter OP (surfaces 15–16, 0.55 mm) and cover glass CG (surfaces 17–18,
 * 0.50 mm), both nd 1.51680 / νd 64.2, are traced in `rearPlates` and not drawn. Surface 14 keeps d = 4.194 to OP;
 * OP is followed by 2.02 mm of air, then CG and the printed dB = 0.53 mm to the image. The d values plus dB sum to
 * 31.298 mm, the printed L = 31.30.
 *
 * Stop: patent surface 9; its diameter is not printed. The iris radius is derived from the tabulated F1.9 (the
 * aberration plots print F1.93). Semi-diameters are not printed: they are estimated from Fig. 1 (74.1 px/mm axial,
 * 73.3 px/mm lateral at 300 dpi) and floor-checked by real-ray trace. Element edges sit 1–3 % inside the drawing and
 * were kept. Fig. 1 ends two concave caps short of their element edges with flat lands, drawn by `rimExtensionSd`:
 * L1's rear face (cap 4.03 mm, land to 5.01 mm) and L6's front face S10 (land to 3.32 mm). The S10 cap is drawn at
 * about 2.4 mm; it is set to 2.5 mm, within the figure reading, where it costs at most 0.6 points of off-axis light
 * against the full-height rim.
 *
 * Field: the patent gives W = 30.8° at Y = 4.65 mm, the 1/1.7-inch half-diagonal of the later Q7 and Q-S1; a real
 * chief ray at 30.8° lands at 4.649 mm. Ricoh quotes 58° on the Q7 and 49.5° on the 1/2.3-inch Q and Q10.
 *
 * Focus: infinity only. The patent advances the rear element L8 toward the object for near focus but prints no
 * finite-focus spacing; `closeFocusM` 1e15 is the infinity placeholder and Ricoh's 0.2 m minimum focus distance is
 * in `catalog.closeFocusM`.
 *
 * Glass: Hoya catalog rows that match the printed nd / νd (L7 and L8 on moldable-glass rows).
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-01-standard-prime-8p5-f19",
  "maker": "Pentax",
  "name": "PENTAX-01 STANDARD PRIME 8.5mm f/1.9",
  "subtitle": "US 2012/0268834 A1, Numerical Embodiment 1 — production correlation",
  "catalog": {
    "imageFormat": "1-1.7-inch-type",
    "lensMounts": [
      "pentax-q"
    ],
    "elementCount": 8,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 8.5,
      "design": 8.5
    },
    "fNumber": {
      "marketing": 1.9,
      "design": 1.9
    },
    "specs": [
      "8 ELEMENTS / 5 GROUPS",
      "MARKETED 8.5mm f/1.9",
      "DESIGN f = 8.5 mm; FNO = 1.9",
      "3 ASPHERICAL SURFACES / 2 ELEMENTS"
    ],
    "closeFocusM": {
      "marketing": 0.2
    }
  },
  "source": {
    "patentNumber": "US 2012/0268834 A1",
    "patentYear": 2012,
    "example": {
      "label": "Numerical Embodiment 1",
      "id": "1"
    },
    "authors": [
      "Yoichi Nomura"
    ],
    "assignees": [
      "Pentax Ricoh Imaging Company, Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "label": "Element 1",
      "name": "L1",
      "type": "Negative Meniscus",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "focalLengthMm": -11.47,
      "glass": "BSC7 (HOYA)",
      "role": "Negative front element that secures the back focus (patent condition 2)"
    },
    {
      "id": 2,
      "label": "Element 2",
      "name": "L2",
      "type": "Biconcave Negative",
      "nd": 1.59551,
      "vd": 39.2,
      "indexReference": "d",
      "focalLengthMm": -8.96,
      "glass": "E-F8 (HOYA)",
      "role": "Negative element of cemented pair C1; its concave front face corrects astigmatism",
      "cemented": "C1"
    },
    {
      "id": 3,
      "label": "Element 3",
      "name": "L3",
      "type": "Biconvex Positive",
      "nd": 1.883,
      "vd": 40.8,
      "indexReference": "d",
      "focalLengthMm": 6.67,
      "glass": "TAFD30 (HOYA)",
      "role": "Thick positive element of C1; corrects spherical aberration, coma and the barrel distortion of L1",
      "cemented": "C1"
    },
    {
      "id": 4,
      "label": "Element 4",
      "name": "L4",
      "type": "Biconvex Positive",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "focalLengthMm": 8.84,
      "glass": "TAF1 (HOYA)",
      "role": "Thick positive element of cemented pair C2; shares the distortion correction with L3",
      "cemented": "C2"
    },
    {
      "id": 5,
      "label": "Element 5",
      "name": "L5",
      "type": "Biconcave Negative",
      "nd": 1.58144,
      "vd": 40.9,
      "indexReference": "d",
      "focalLengthMm": -15.12,
      "glass": "E-FL5 (HOYA)",
      "role": "Negative element of C2, its concave rear face toward the stop",
      "cemented": "C2"
    },
    {
      "id": 6,
      "label": "Element 6",
      "name": "L6",
      "type": "Biconcave Negative",
      "nd": 1.76182,
      "vd": 26.6,
      "indexReference": "d",
      "focalLengthMm": -4.69,
      "glass": "FD140 (HOYA)",
      "role": "Negative flint of rear cemented pair C3; adds negative spherical aberration",
      "cemented": "C3"
    },
    {
      "id": 7,
      "label": "Element 7",
      "name": "L7",
      "type": "Biconvex Positive (1× Asph)",
      "nd": 1.75501,
      "vd": 51.2,
      "indexReference": "d",
      "focalLengthMm": 6.49,
      "glass": "M-TAC60 (HOYA)",
      "role": "Positive element of C3; its aspheric rear face controls spherical aberration and coma",
      "cemented": "C3"
    },
    {
      "id": 8,
      "label": "Element 8",
      "name": "L8",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.8061,
      "vd": 40.7,
      "indexReference": "d",
      "focalLengthMm": 11.04,
      "glass": "M-NBFD130 (HOYA)",
      "role": "Double-aspheric rear element; the patent's focusing element"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 1072.616,
      "d": 0.8,
      "sd": 5.01,
      "medium": 1
    },
    {
      "label": "2",
      "R": 5.896,
      "d": 2.461,
      "sd": 4.03,
      "rimExtensionSd": 5.01
    },
    {
      "label": "3",
      "R": -19.039,
      "d": 0.8,
      "sd": 4.03,
      "medium": 2
    },
    {
      "label": "4",
      "R": 7.534,
      "d": 3.646,
      "sd": 4.03,
      "medium": 3
    },
    {
      "label": "5",
      "R": -20.795,
      "d": 0.1,
      "sd": 4.03
    },
    {
      "label": "6",
      "R": 9.939,
      "d": 2.278,
      "sd": 3.41,
      "medium": 4
    },
    {
      "label": "7",
      "R": -19.654,
      "d": 0.8,
      "sd": 3.41,
      "medium": 5
    },
    {
      "label": "8",
      "R": 16.145,
      "d": 2.572,
      "sd": 3.41
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.205
    },
    {
      "label": "10",
      "R": -6.986,
      "d": 1.0,
      "sd": 2.5,
      "rimExtensionSd": 3.32,
      "medium": 6
    },
    {
      "label": "11",
      "R": 7.766,
      "d": 2.792,
      "sd": 3.32,
      "medium": 7
    },
    {
      "label": "12A",
      "R": -11.214,
      "d": 1.232,
      "sd": 3.32,
      "asphere": {
        "K": 0,
        "A4": 5.422e-05,
        "A6": 9.393e-06,
        "A8": 1.579e-08
      }
    },
    {
      "label": "13A",
      "R": 14.507,
      "d": 2.818,
      "sd": 4.93,
      "medium": 8,
      "asphere": {
        "K": 0,
        "A4": -0.0002804,
        "A6": 1.077e-06,
        "A8": 5.386e-08
      }
    },
    {
      "label": "14A",
      "R": -21.008,
      "d": 4.194,
      "sd": 4.93,
      "asphere": {
        "K": 0,
        "A4": -0.0001145,
        "A6": -3.647e-06,
        "A8": 1.262e-07
      }
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only. The patent focuses by moving the rear element L8 alone toward the object, but prints no finite-focus spacing, so no focus travel is modelled. Ricoh gives a 0.2 m minimum focus distance."
  },
  "aperture": {
    "nominalFNumber": 1.9,
    "fStops": [
      1.9,
      2.8,
      4,
      5.6,
      8
    ],
    "maxFNumber": 8,
    "blades": 5
  },
  "layout": {
    "yScFill": 0.7
  },
  "rearPlates": [
    {
      "label": "OP",
      "thicknessMm": 0.55,
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "glass": "BSC7 (HOYA)",
      "gapAfterMm": 2.02,
      "source": "US 2012/0268834 A1, Numerical Embodiment 1 Table 1 surfaces 15–16"
    },
    {
      "label": "CG",
      "thicknessMm": 0.5,
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "glass": "BSC7 (HOYA)",
      "gapAfterMm": 0.53,
      "source": "US 2012/0268834 A1, Numerical Embodiment 1 Table 1 surfaces 17–18; Table 3 dB = 0.53"
    }
  ],
  "groups": [
    { "text": "GF (+)", "fromSurface": "1", "toSurface": "8" },
    { "text": "GR (+)", "fromSurface": "10", "toSurface": "14A" }
  ],
  "doublets": [
    { "text": "C1", "fromSurface": "3", "toSurface": "5" },
    { "text": "C2", "fromSurface": "6", "toSurface": "8" },
    { "text": "C3", "fromSurface": "10", "toSurface": "12A" }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
