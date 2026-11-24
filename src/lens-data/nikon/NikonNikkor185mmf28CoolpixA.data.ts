import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  "schema": 2,
  "key": "private-nikon-coolpix-a-us9915803-e1-f56",
  "name": "PRIVATE Nikon COOLPIX A family — scaled patent E1, f5.6 infinity",
  "maker": "Nikon",
  "visible": false,
  "subtitle": "US9915803B2 Example1 at18.5mm/sourceunit; estimated caps; D-linef5.6±5degrees infinity only; not exact factory or full-field qualification",
  "source": {
    "patentNumber": "US 9915803 B2",
    "patentYear": 2018,
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "authors": [
      "Atsushi Suzuki"
    ],
    "assignees": [
      "Nikon Corporation"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Scaled patent lens 1",
      "type": "Patent glass",
      "nd": 1.57957,
      "vd": 53.74,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; exact manufacturer and melt not identified"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Scaled patent lens 2",
      "type": "Patent glass",
      "nd": 1.7725,
      "vd": 49.62,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; exact manufacturer and melt not identified"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Scaled patent lens 3",
      "type": "Patent glass",
      "nd": 1.883,
      "vd": 40.66,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; exact manufacturer and melt not identified",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Scaled patent lens 4",
      "type": "Patent glass",
      "nd": 1.69895,
      "vd": 30.13,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; exact manufacturer and melt not identified",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Scaled patent lens 5",
      "type": "Patent glass",
      "nd": 1.69895,
      "vd": 30.13,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; exact manufacturer and melt not identified",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Scaled patent lens 6",
      "type": "Patent glass",
      "nd": 1.755,
      "vd": 52.33,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; exact manufacturer and melt not identified",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "E7",
      "label": "Scaled patent lens 7",
      "type": "Patent glass",
      "nd": 1.7905,
      "vd": 45.01,
      "indexReference": "d",
      "glass": "Published d-line nd/Vd; exact manufacturer and melt not identified"
    }
  ],
  "surfaces": [
    {
      "label": "S1",
      "R": 44.98275,
      "d": 1.2099,
      "sd": 2.6,
      "medium": 1
    },
    {
      "label": "S2",
      "R": 10.4007,
      "d": 7.7922,
      "sd": 2.5
    },
    {
      "label": "S3",
      "R": 11.5292,
      "d": 2.89155,
      "sd": 2.6,
      "medium": 2
    },
    {
      "label": "S4",
      "R": 25.32835,
      "d": 2.31805,
      "sd": 2.4
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.18585
    },
    {
      "label": "S6",
      "R": 17.2975,
      "d": 2.41055,
      "sd": 2.3,
      "medium": 3
    },
    {
      "label": "S7",
      "R": -13.29595,
      "d": 0.60495,
      "sd": 2.2,
      "medium": 4
    },
    {
      "label": "S8",
      "R": 32.839349999999996,
      "d": 2.3162000000000003,
      "sd": 2.2
    },
    {
      "label": "S9",
      "R": -10.737400000000001,
      "d": 0.7048500000000001,
      "sd": 2.1,
      "medium": 5
    },
    {
      "label": "S10",
      "R": 38.4541,
      "d": 2.0461,
      "sd": 2.2,
      "medium": 6
    },
    {
      "label": "S11",
      "R": -24.525450000000003,
      "d": 0.20165,
      "sd": 2.2
    },
    {
      "label": "S12",
      "R": -40.42805,
      "d": 1.51145,
      "sd": 2.2,
      "medium": 7
    },
    {
      "label": "S13",
      "R": -17.82845,
      "d": 13.35515,
      "sd": 2.3,
      "asphere": {
        "K": 0,
        "A4": 0.00016341776400213216,
        "A6": 1.4074766457299228e-06,
        "A8": 8.187091875483689e-09,
        "A10": -1.1885442611306995e-10
      }
    }
  ],
  "rearPlates": [
    {
      "label": "Source slab 1",
      "thicknessMm": 1.84445,
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "gapAfterMm": 1.4818500000000001,
      "sd": 1.9,
      "source": "Table1S14/15 scaled18.5; unspecified source filter; no claim of production lowpass"
    },
    {
      "label": "Source slab 2",
      "thicknessMm": 0.7048500000000001,
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "gapAfterMm": 0.7048500000000001,
      "sd": 1.8,
      "source": "Table1S16/17 scaled18.5; unspecified source filter, retained exact"
    }
  ],
  "focus": {
    "closeFocusM": 0.5,
    "description": "Infinity-only constant prescription. Required close metadata from OEM normal range; no finite motion/conjugate authored or certified."
  },
  "aperture": {
    "nominalFNumber": 5.6,
    "fStops": [
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 10,
    "maxTraceFieldDeg": 5
  },
  "layout": {
    "yScFill": 0.7
  },
  "catalog": {
    "focalLengthMm": {
      "design": 18.5,
      "marketing": 18.5
    },
    "fNumber": {
      "design": 2.88,
      "marketing": 2.8
    },
    "elementCount": 7,
    "groupCount": 5,
    "specs": [
      "Patent-family representative; signed normalized Example1 uniformly scaled once by18.5mm/sourceunit; no factory identity or second EFL fit.",
      "Scoped native f5.6±5degrees Dline infinity; estimated iris and caps. Nominal source2.88/retail2.8 are metadata, not wideopen qualification.",
      "Sourceκ=1 maps to nativeK=0; polynomial coefficients divided byscale^(order−1). Source detector and both plates preserved; Nikon retail has no lowpass, so source slabs are not identified as shipped stack.",
      "No finite focus, full image circle, broadband, measured MTF or retail coverage claim."
    ]
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
