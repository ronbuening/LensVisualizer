import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** CN 207216120 U, Embodiment 2, with helium d-line indices (587.6 nm); no scale conversion.
 * Probable association with the YN 40mm f/2.8N from secondary product sources, not an exact factory prescription.
 * Clear apertures are estimated from Fig. 2 and floor-checked by real rays.
 * The inferred opaque S3/S7 rim extensions agree with the drawing and add no measured vignetting loss.
 * The rear plate has an unspecified, nonclipping aperture.
 * The iris radius is derived from f/2.8. The printed 1 mm plate-to-image gap leaves +0.821424 mm of paraxial
 * defocus; the model uses a derived 1.8214 mm gap for infinity focus. No single prescription misprint has
 * been established. Infinity focus only; exact production performance is not established.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "yongnuo-yn-40mm-f28n",
  "maker": "Yongnuo",
  "name": "YONGNUO YN 40mm f/2.8N",
  "visible": true,
  "subtitle": "CN 207216120 U, Embodiment 2 — probable production match",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "nikon-f"
    ],
    "closeFocusM": {
      "marketing": 0.3
    },
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 40,
      "design": 40
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "6 ELEMENTS / 4 GROUPS",
      "DESIGN f = 40 mm",
      "DESIGN F/2.8",
      "2 ASPHERICAL SURFACES / 1 ELEMENT",
      "NIKON F; AF; f/2.8–22; 0.3 m CLOSE FOCUS"
    ]
  },
  "source": {
    "patentNumber": "CN 207216120 U",
    "patentYear": 2018,
    "example": {
      "label": "Embodiment 2",
      "id": "2"
    },
    "authors": [
      "Yongxiao Zhuang"
    ],
    "assignees": [
      "Shenzhen Yongnuo Photographic Equipment Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "10",
      "diagramLabel": "10",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "role": "Positive front member of the first cemented doublet",
      "cemented": "C1",
      "nd": 1.80099,
      "vd": 34.97,
      "indexReference": "d",
      "focalLengthMm": 33.052,
      "glass": "S-LAM66 (OHARA catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 2,
      "name": "20",
      "diagramLabel": "20",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "role": "Negative rear member of the first cemented doublet",
      "cemented": "C1",
      "nd": 1.603423,
      "vd": 38.01,
      "indexReference": "d",
      "focalLengthMm": -20.847,
      "glass": "E-F5 (HOYA catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 3,
      "name": "30",
      "diagramLabel": "30",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "role": "Positive meniscus between the front doublet and the iris",
      "nd": 1.883004,
      "vd": 40.81,
      "indexReference": "d",
      "focalLengthMm": 37.699,
      "glass": "TAFD30 (HOYA catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 4,
      "name": "40",
      "diagramLabel": "40",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "role": "Negative front member of the second cemented doublet, behind the iris",
      "cemented": "C2",
      "nd": 1.755,
      "vd": 27.53,
      "indexReference": "d",
      "focalLengthMm": -12.960,
      "glass": "E-FD4 (HOYA catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 5,
      "name": "50",
      "diagramLabel": "50",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "role": "Positive rear member of the second cemented doublet",
      "cemented": "C2",
      "nd": 1.835,
      "vd": 42.74,
      "indexReference": "d",
      "focalLengthMm": 18.641,
      "glass": "S-LAH55VS (OHARA catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 6,
      "name": "60",
      "diagramLabel": "60",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "role": "Rear positive meniscus with two aspherical surfaces",
      "nd": 1.829,
      "vd": 37.1,
      "indexReference": "d",
      "focalLengthMm": 31.239,
      "glass": "Unmatched (nd 1.829, νd 37.1; supplier and partial dispersion unknown)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 43.32024,
      "d": 2.68,
      "sd": 9.19,
      "medium": 1
    },
    {
      "label": "2",
      "R": -66.20471,
      "d": 1.1,
      "sd": 8.83,
      "medium": 2
    },
    {
      "label": "3",
      "R": 15.628,
      "d": 0.42,
      "sd": 7.45,
      "rimExtensionSd": 8.83
    },
    {
      "label": "4",
      "R": 16.72176,
      "d": 2.02,
      "sd": 7.45,
      "medium": 3
    },
    {
      "label": "5",
      "R": 31.69635,
      "d": 4.17,
      "sd": 7.45
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 4.72
    },
    {
      "label": "7",
      "R": -13.20496,
      "d": 1.1,
      "sd": 6.6,
      "medium": 4,
      "rimExtensionSd": 7.87
    },
    {
      "label": "8",
      "R": 39.127,
      "d": 3.33,
      "sd": 7.87,
      "medium": 5
    },
    {
      "label": "9",
      "R": -24.847,
      "d": 0.12,
      "sd": 8.27
    },
    {
      "label": "10A",
      "R": -63.22119,
      "d": 3.35,
      "sd": 8.86,
      "medium": 6,
      "asphere": {
        "K": -21.3807,
        "A4": -2.231688e-05,
        "A6": 1.1154082e-07,
        "A8": -1.6802243e-09,
        "A10": 1.1278013e-11
      }
    },
    {
      "label": "11A",
      "R": -18.81276,
      "d": 35.75,
      "sd": 8.86,
      "asphere": {
        "K": 0.70151,
        "A4": 1.530636e-05,
        "A6": 1.8595495e-07,
        "A8": -1.8656923e-09,
        "A10": 1.3794272e-11
      }
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the production lens supports DC-motor autofocus and manual focus to about 0.3 m. The patent supplies no close-focus prescription."
  },
  "aperture": {
    "nominalFNumber": 2.8,
    "fStops": [
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 60,
    "maxTraceFieldDeg": 30
  },
  "rearPlates": [
    {
      "label": "90",
      "thicknessMm": 2,
      "nd": 1.5168,
      "vd": 64.2,
      "glass": "H-K9L (CDGM catalog equivalent; production supplier unspecified)",
      "indexReference": "d",
      "gapAfterMm": 1.8214,
      "source": "CN 207216120 U, Embodiment 2, Table 1, surfaces 12/13. The derived 1.8214 mm plate-to-image gap places the image at paraxial infinity focus; the printed 1 mm gap leaves 0.821 mm of defocus. No single-row misprint has been established. The clear plate diameter is unprinted; its aperture is assumed nonclipping."
    }
  ],
  "groups": [
    { "text": "GR1", "fromSurface": "1", "toSurface": "5" },
    { "text": "GR2", "fromSurface": "7", "toSurface": "11A" }
  ],
  "doublets": [
    { "text": "C1", "fromSurface": "1", "toSurface": "3" },
    { "text": "C2", "fromSurface": "7", "toSurface": "9" }
  ],
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
