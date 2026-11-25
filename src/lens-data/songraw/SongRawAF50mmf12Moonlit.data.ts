import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** CN 224176794 U, Example 1, the sole numerical prescription; production coefficients are unproven.
 * Scale s = 1: source dimensions and asphere coefficients are unscaled.
 * S26 image gap corrected from 14.935 mm to the computed infinity focus,
 * 17.91466693210846 mm. The earlier CN 119148346 A layout explains the printed 14.9 mm.
 * Other radii, gaps, indices and aspheres retain the U tables. Computed EFL is
 * 49.903117 mm against the stated 49 mm. The illustrated, unspecified filter is omitted.
 * Rims are inferred from U Fig. 1/2 (15.52 native px/mm in Fig. 1) and ray clearance.
 * Flat lands at S3/S4/S13/S24 preserve the drawn element edges without opening the caps.
 * S3/S4 clear the axial beam; S13/S14 use the largest equal two-decimal rims within a
 * 98% gap-sag limit and still
 * clip slightly because of the source geometry. Other rims preserve off-axis vignetting.
 * The stop is derived from f/1.25 at the printed position. Infinity focus only;
 * this model does not reproduce the patent's published MTF charts. */
const LENS_DATA = {
  "schema": 2,
  "key": "songraw-af-50mm-f12-moonlit",
  "maker": "SongRaw",
  "name": "SONGRAW AF 50mm f/1.2 MOONLIT",
  "visible": true,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "focalLengthMm": 63.15,
      "type": "Biconvex Positive",
      "nd": 1.81,
      "vd": 40.7,
      "indexReference": "d",
      "label": "Element 1",
      "role": "Aspheric front element of the fixed first group, cemented to L2",
      "cemented": "C1",
      "glass": "L-LAH84 (OHARA spectral proxy; matches the patent's nd 1.81 / νd 40.7 at its printed precision; supplier unconfirmed)"
    },
    {
      "id": 2,
      "name": "L2",
      "focalLengthMm": -56.79,
      "type": "Biconcave Negative",
      "nd": 1.49,
      "vd": 70.4,
      "indexReference": "d",
      "label": "Element 2",
      "role": "Negative rear element of the first cemented pair",
      "cemented": "C1",
      "glass": "H-QK3L (CDGM spectral proxy; matches the patent's nd 1.49 / νd 70.4 at its printed precision; supplier unconfirmed)"
    },
    {
      "id": 3,
      "name": "L3",
      "focalLengthMm": -35.97,
      "type": "Biconcave Negative",
      "nd": 1.77,
      "vd": 29.7,
      "indexReference": "d",
      "label": "Element 3",
      "role": "Negative front element of the second cemented pair",
      "cemented": "C2",
      "glass": "NBFD29 (HOYA spectral proxy; matches the patent's nd 1.77 / νd 29.7 at its printed precision; supplier unconfirmed)"
    },
    {
      "id": 4,
      "name": "L4",
      "focalLengthMm": 53.49,
      "type": "Biconvex Positive",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 4",
      "role": "Positive rear element of the second cemented pair",
      "cemented": "C2",
      "glass": "H-ZPK5 (CDGM spectral proxy; matches the patent's nd 1.59 / νd 68.3 at its printed precision; supplier unconfirmed)"
    },
    {
      "id": 5,
      "name": "L5",
      "focalLengthMm": 56.56,
      "type": "Biconvex Positive",
      "nd": 2.0,
      "vd": 29.1,
      "indexReference": "d",
      "label": "Element 5",
      "role": "Positive collector in the fixed first group before the stop",
      "glass": "TAFD55 (HOYA spectral proxy; matches the patent's nd 2.00 / νd 29.1 at its printed precision; supplier unconfirmed)"
    },
    {
      "id": 6,
      "name": "L6",
      "focalLengthMm": -134.56,
      "type": "Negative Meniscus",
      "nd": 1.65,
      "vd": 33.8,
      "indexReference": "d",
      "label": "Element 6",
      "role": "Negative rear element of the fixed first group beside the stop",
      "glass": "H-ZF1 (CDGM spectral proxy; matches the patent's nd 1.65 / νd 33.8 at its printed precision; supplier unconfirmed)"
    },
    {
      "id": 7,
      "name": "L7",
      "focalLengthMm": 128.8,
      "type": "Positive Meniscus",
      "nd": 1.88,
      "vd": 40.8,
      "indexReference": "d",
      "label": "Element 7",
      "role": "Positive front element of the moving focus group G2",
      "glass": "S-LAH58 (OHARA spectral proxy; matches the patent's nd 1.88 / νd 40.8 at its printed precision; supplier unconfirmed)"
    },
    {
      "id": 8,
      "name": "L8",
      "focalLengthMm": -45.09,
      "type": "Biconcave Negative",
      "nd": 1.61,
      "vd": 37.0,
      "indexReference": "d",
      "label": "Element 8",
      "role": "Negative front element of the cemented pair in focus group G2",
      "cemented": "C3",
      "glass": "S-TIM3 (OHARA spectral proxy; matches the patent's nd 1.61 / νd 37.0 at its printed precision; supplier unconfirmed)"
    },
    {
      "id": 9,
      "name": "L9",
      "focalLengthMm": 44.05,
      "type": "Biconvex Positive",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 9",
      "role": "Positive rear element of the cemented pair in focus group G2",
      "cemented": "C3",
      "glass": "H-ZPK5 (CDGM spectral proxy; matches the patent's nd 1.59 / νd 68.3 at its printed precision; supplier unconfirmed)"
    },
    {
      "id": 10,
      "name": "L10",
      "focalLengthMm": -41.87,
      "type": "Biconcave Negative",
      "nd": 1.77,
      "vd": 29.7,
      "indexReference": "d",
      "label": "Element 10",
      "role": "Negative front element of the fixed rear group G3, cemented to L11",
      "cemented": "C4",
      "glass": "NBFD29 (HOYA spectral proxy; matches the patent's nd 1.77 / νd 29.7 at its printed precision; supplier unconfirmed)"
    },
    {
      "id": 11,
      "name": "L11",
      "focalLengthMm": 52.66,
      "type": "Biconvex Positive",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 11",
      "role": "Positive rear element of the fourth cemented pair",
      "cemented": "C4",
      "glass": "H-ZPK5 (CDGM spectral proxy; matches the patent's nd 1.59 / νd 68.3 at its printed precision; supplier unconfirmed)"
    },
    {
      "id": 12,
      "name": "L12",
      "focalLengthMm": 53.83,
      "type": "Biconvex Positive",
      "nd": 1.92,
      "vd": 20.9,
      "indexReference": "d",
      "label": "Element 12",
      "role": "Positive element between the two cemented pairs in the fixed rear group",
      "glass": "E-FDS1 (HOYA spectral proxy; matches the patent's nd 1.92 / νd 20.9 at its printed precision; supplier unconfirmed)"
    },
    {
      "id": 13,
      "name": "L13",
      "focalLengthMm": 60.67,
      "type": "Positive Meniscus",
      "nd": 1.88,
      "vd": 40.8,
      "indexReference": "d",
      "label": "Element 13",
      "role": "Positive front element of the fifth cemented pair",
      "cemented": "C5",
      "glass": "S-LAH58 (OHARA spectral proxy; matches the patent's nd 1.88 / νd 40.8 at its printed precision; supplier unconfirmed)"
    },
    {
      "id": 14,
      "name": "L14",
      "focalLengthMm": -36.53,
      "type": "Negative Meniscus",
      "nd": 1.85,
      "vd": 23.8,
      "indexReference": "d",
      "label": "Element 14",
      "role": "Negative rear element of the fifth cemented pair",
      "cemented": "C5",
      "glass": "Unmatched (nd 1.85 / νd 23.8)"
    },
    {
      "id": 15,
      "name": "L15",
      "focalLengthMm": -168.91,
      "type": "Biconcave Negative",
      "nd": 1.81,
      "vd": 40.7,
      "indexReference": "d",
      "label": "Element 15",
      "role": "Rear element of the fixed group G3, with two aspheric faces",
      "glass": "L-LAH84 (OHARA spectral proxy; matches the patent's nd 1.81 / νd 40.7 at its printed precision; supplier unconfirmed)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 118.78,
      "d": 6.6,
      "sd": 20.07,
      "medium": 1,
      "asphere": {
        "K": 0,
        "A4": -2.12543e-06,
        "A6": -9.24523e-10,
        "A8": 2.59673e-12,
        "A10": -5.52718e-15,
        "A12": 4.60898e-18
      }
    },
    {
      "label": "2",
      "R": -87.61,
      "d": 1.5,
      "sd": 20,
      "medium": 2
    },
    {
      "label": "3",
      "R": 41.009,
      "d": 10.392,
      "sd": 19.05,
      "rimExtensionSd": 20
    },
    {
      "label": "4",
      "R": -35.997,
      "d": 1.5,
      "sd": 19.08,
      "rimExtensionSd": 22,
      "medium": 3
    },
    {
      "label": "5",
      "R": 122.296,
      "d": 10.4,
      "sd": 22,
      "medium": 4
    },
    {
      "label": "6",
      "R": -41.197,
      "d": 0.15,
      "sd": 22.59
    },
    {
      "label": "7",
      "R": 197.321,
      "d": 7.3,
      "sd": 24.65,
      "medium": 5
    },
    {
      "label": "8",
      "R": -77.813,
      "d": 0.15,
      "sd": 24.74
    },
    {
      "label": "9",
      "R": 95.683,
      "d": 1.0,
      "sd": 23.05,
      "medium": 6
    },
    {
      "label": "10",
      "R": 45.506,
      "d": 7.353,
      "sd": 22.1
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 15.594
    },
    {
      "label": "12",
      "R": 46.626,
      "d": 4.0,
      "sd": 20.86,
      "medium": 7
    },
    {
      "label": "13",
      "R": 76.029,
      "d": 5.492,
      "sd": 19.78,
      "rimExtensionSd": 20.86
    },
    {
      "label": "14",
      "R": -72.262,
      "d": 1.5,
      "sd": 19.78,
      "medium": 8
    },
    {
      "label": "15",
      "R": 44.759,
      "d": 9.7,
      "sd": 20.18,
      "medium": 9
    },
    {
      "label": "16",
      "R": -56.999,
      "d": 1.0,
      "sd": 20.16
    },
    {
      "label": "17",
      "R": -109.274,
      "d": 1.5,
      "sd": 20.5,
      "medium": 10
    },
    {
      "label": "18",
      "R": 46.003,
      "d": 9.0,
      "sd": 20.5,
      "medium": 11
    },
    {
      "label": "19",
      "R": -88.756,
      "d": 0.15,
      "sd": 20.5
    },
    {
      "label": "20",
      "R": 61.323,
      "d": 7.112,
      "sd": 22.3,
      "medium": 12
    },
    {
      "label": "21",
      "R": -243.144,
      "d": 0.15,
      "sd": 22.3
    },
    {
      "label": "22",
      "R": 42.029,
      "d": 6.1,
      "sd": 20.5,
      "medium": 13
    },
    {
      "label": "23",
      "R": 184.079,
      "d": 1.5,
      "sd": 20.5,
      "medium": 14
    },
    {
      "label": "24",
      "R": 26.468,
      "d": 7.921,
      "sd": 17.09,
      "rimExtensionSd": 20.5
    },
    {
      "label": "25",
      "R": -188.696,
      "d": 2.0,
      "sd": 17.09,
      "medium": 15,
      "asphere": {
        "K": 0,
        "A4": -7.82175e-06,
        "A6": -6.44208e-08,
        "A8": 5.28268e-10,
        "A10": -1.51204e-12,
        "A12": 1.59754e-15
      }
    },
    {
      "label": "26",
      "R": 500.0,
      "d": 17.91466693210846,
      "sd": 17.3,
      "asphere": {
        "K": 0,
        "A4": -1.6649e-06,
        "A6": -5.56053e-08,
        "A8": 4.94078e-10,
        "A10": -1.31612e-12,
        "A12": 1.35237e-15
      }
    }
  ],
  "aperture": {
    "nominalFNumber": 1.25,
    "fStops": [
      1.25,
      16
    ]
  },
  "groups": [
    { "text": "G1", "fromSurface": "1", "toSurface": "10" },
    { "text": "G2", "fromSurface": "12", "toSurface": "16" },
    { "text": "G3", "fromSurface": "17", "toSurface": "26" }
  ],
  "doublets": [
    { "text": "C1", "fromSurface": "1", "toSurface": "3" },
    { "text": "C2", "fromSurface": "4", "toSurface": "6" },
    { "text": "C3", "fromSurface": "14", "toSurface": "16" },
    { "text": "C4", "fromSurface": "17", "toSurface": "19" },
    { "text": "C5", "fromSurface": "22", "toSurface": "24" }
  ],
  "layout": {
    "yScFill": 0.7
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity focus only. In the U patent, G1 (L1–L6), the stop and G3 (L10–L15) stay fixed; G2 (L7–L9) is nearest the image at infinity, so closer focus requires motion toward the object. No close-focus spacings are published."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 47.580972689660776
  },
  "checks": {
    "gapSagFrac": 0.98
  },
  "subtitle": "CN 224176794 U, Example 1 — SongRaw AF 50mm f/1.2 Moonlit construction",
  "catalog": {
    "lensMounts": [
      "sony-fe",
      "nikon-z"
    ],
    "imageFormat": "135-full-frame",
    "imageCircleMm": 44,
    "elementCount": 15,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": 50,
      "design": 49.90311745758611
    },
    "fNumber": {
      "marketing": 1.2,
      "design": 1.25
    },
    "closeFocusM": {
      "marketing": 0.52
    },
    "specs": [
      "15 ELEMENTS / 10 GROUPS",
      "2 ASPHERICAL ELEMENTS",
      "F/1.2",
      "MINIMUM FOCUS 0.52 m"
    ]
  },
  "source": {
    "patentNumber": "CN 224176794 U",
    "patentYear": 2026,
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "authors": [
      "Yuwen Chang"
    ],
    "assignees": [
      "Shenzhen Songruo Photography Equipment Co., Ltd."
    ],
    "errata": [
      {
        "status": "corrected",
        "surface": "26",
        "field": "d",
        "printed": 14.935,
        "applied": 17.91466693210846,
        "evidence": [
          "source-summary",
          "claims"
        ],
        "note": "Table 1 prints 14.935 mm from S26 to the image; paragraph 0047 repeats about 14.9 mm. With the fixed outer groups and moving G2 of claim 1, the U infinity spacings focus at 17.91466693210846 mm without a filter. The earlier CN 119148346 A layout focuses at about 15.6 mm and also prints about 14.9 mm. The image gap is corrected to the U calculation; neither publication prints the applied value."
      },
      {
        "status": "unresolved",
        "note": "The U states 49 mm focal length; its rounded Table 1 prescription computes to 49.903117 mm. The model retains the printed radii, spacings before S26, indices and aspheres. The illustrated filter has no published thickness or material and is omitted."
      }
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
