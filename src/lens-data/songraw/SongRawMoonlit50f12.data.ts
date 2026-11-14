import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** CN 224176794 U, sole numerical example; production coefficients are unproven.
 * Scale s = 1: source dimensions and asphere coefficients are unscaled.
 * S26 image gap corrected from 14.935 mm to the computed infinity focus,
 * 17.91466693210846 mm. The earlier CN 119148346 A layout explains the printed 14.9 mm.
 * Other radii, gaps, indices and aspheres retain the U tables. Computed EFL is
 * 49.903117 mm against the stated 49 mm. The illustrated, unspecified filter is omitted.
 * Rims are inferred from the patent figures and ray clearance. S3/S4 clear the axial
 * beam; S13/S14 use the largest equal two-decimal rims at gapSagFrac 0.98 and still
 * clip slightly because of the source geometry. Other rims preserve off-axis vignetting.
 * The stop is derived from f/1.25 at the printed position. Infinity focus only;
 * this model does not reproduce the patent's published MTF charts. */
const LENS_DATA = {
  "schema": 2,
  "key": "songraw-moonlit-50f12",
  "maker": "SongRaw",
  "name": "SONGRAW Moonlit AF 50mm f/1.2",
  "visible": false,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "type": "Lens",
      "nd": 1.81,
      "vd": 40.7,
      "indexReference": "d",
      "label": "Element 1",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 2,
      "name": "L2",
      "type": "Lens",
      "nd": 1.49,
      "vd": 70.4,
      "indexReference": "d",
      "label": "Element 2",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 3,
      "name": "L3",
      "type": "Lens",
      "nd": 1.77,
      "vd": 29.7,
      "indexReference": "d",
      "label": "Element 3",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 4,
      "name": "L4",
      "type": "Lens",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 4",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 5,
      "name": "L5",
      "type": "Lens",
      "nd": 2.0,
      "vd": 29.1,
      "indexReference": "d",
      "label": "Element 5",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 6,
      "name": "L6",
      "type": "Lens",
      "nd": 1.65,
      "vd": 33.8,
      "indexReference": "d",
      "label": "Element 6",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 7,
      "name": "L7",
      "type": "Lens",
      "nd": 1.88,
      "vd": 40.8,
      "indexReference": "d",
      "label": "Element 7",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 8,
      "name": "L8",
      "type": "Lens",
      "nd": 1.61,
      "vd": 37.0,
      "indexReference": "d",
      "label": "Element 8",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 9,
      "name": "L9",
      "type": "Lens",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 9",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 10,
      "name": "L10",
      "type": "Lens",
      "nd": 1.77,
      "vd": 29.7,
      "indexReference": "d",
      "label": "Element 10",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 11,
      "name": "L11",
      "type": "Lens",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 11",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 12,
      "name": "L12",
      "type": "Lens",
      "nd": 1.92,
      "vd": 20.9,
      "indexReference": "d",
      "label": "Element 12",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 13,
      "name": "L13",
      "type": "Lens",
      "nd": 1.88,
      "vd": 40.8,
      "indexReference": "d",
      "label": "Element 13",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 14,
      "name": "L14",
      "type": "Lens",
      "nd": 1.85,
      "vd": 23.8,
      "indexReference": "d",
      "label": "Element 14",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
    },
    {
      "id": 15,
      "name": "L15",
      "type": "Lens",
      "nd": 1.81,
      "vd": 40.7,
      "indexReference": "d",
      "label": "Element 15",
      "glass": "Unmatched original Nd/Vd; approximate dispersion"
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
      "sd": 19.05
    },
    {
      "label": "4",
      "R": -35.997,
      "d": 1.5,
      "sd": 19.08,
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
      "sd": 19.78
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
      "sd": 17.09
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
      1.25
    ]
  },
  "layout": {
    "yScFill": 0.7
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity focus only; production focuses by moving the middle group G2 (L7–L9). The U patent places G2 nearest the image at infinity, so closer focus requires motion toward the object. No close-focus spacings are published."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 47.580972689660776
  },
  "checks": {
    "gapSagFrac": 0.98
  },
  "subtitle": "CN 224176794 U — qualified no-filter computed-focus interpretation",
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
      "3 ASPHERICAL SURFACES",
      "INFINITY ONLY",
      "QUALIFIED COMPUTED-FOCUS INTERPRETATION"
    ]
  },
  "source": {
    "patentNumber": "CN 224176794 U",
    "patentYear": 2026,
    "example": {
      "label": "Sole example",
      "id": null
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
