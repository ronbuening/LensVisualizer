import type { LensDataV2Input } from "../../types/lensDataV2.js";

// Source-index-only 1967 CRC model. Iris and clear radii estimated; source endpoints only.
const LENS_DATA = {
  "schema": 2,
  "key": "nikon-nikkor-n-auto-24mm-f28-1967-crc-jps45039875-e1",
  "maker": "Nikon",
  "name": "NIKON NIKKOR-N Auto 24mm f/2.8 CRC (1967, reference-index model)",
  "subtitle": "JPS45039875B Example I; production-layout overlay match. Iris/rims inferred. Chromatic zero-spread readouts are missing-data artifacts.",
  "visible": false,
  "source": {
    "patentNumber": "JP S45-039875 B",
    "authors": [],
    "assignees": [],
    "example": {
      "label": "Example I",
      "id": "1"
    },
    "patentYear": 1970
  },
  "catalog": {
    "lensMounts": [
      "nikon-f"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 9,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 24,
      "design": 24
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "closeFocusM": {
      "marketing": 0.3
    }
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical refracting element",
      "nd": 1.62299,
      "indexReferenceNote": "Source prints a refractive index with no spectral-line or dispersion designation. The software d-line default is a numerical anchor convention only, not a source wavelength. No spectral or catalog-glass identification is asserted."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical refracting element",
      "nd": 1.6228,
      "indexReferenceNote": "Source prints a refractive index with no spectral-line or dispersion designation. The software d-line default is a numerical anchor convention only, not a source wavelength. No spectral or catalog-glass identification is asserted."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical refracting element",
      "nd": 1.62041,
      "indexReferenceNote": "Source prints a refractive index with no spectral-line or dispersion designation. The software d-line default is a numerical anchor convention only, not a source wavelength. No spectral or catalog-glass identification is asserted."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical refracting element",
      "nd": 1.62004,
      "indexReferenceNote": "Source prints a refractive index with no spectral-line or dispersion designation. The software d-line default is a numerical anchor convention only, not a source wavelength. No spectral or catalog-glass identification is asserted.",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Spherical refracting element",
      "nd": 1.5168,
      "indexReferenceNote": "Source prints a refractive index with no spectral-line or dispersion designation. The software d-line default is a numerical anchor convention only, not a source wavelength. No spectral or catalog-glass identification is asserted.",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Spherical refracting element",
      "nd": 1.71736,
      "indexReferenceNote": "Source prints a refractive index with no spectral-line or dispersion designation. The software d-line default is a numerical anchor convention only, not a source wavelength. No spectral or catalog-glass identification is asserted."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Spherical refracting element",
      "nd": 1.80518,
      "indexReferenceNote": "Source prints a refractive index with no spectral-line or dispersion designation. The software d-line default is a numerical anchor convention only, not a source wavelength. No spectral or catalog-glass identification is asserted.",
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Spherical refracting element",
      "nd": 1.62041,
      "indexReferenceNote": "Source prints a refractive index with no spectral-line or dispersion designation. The software d-line default is a numerical anchor convention only, not a source wavelength. No spectral or catalog-glass identification is asserted.",
      "cemented": "D2"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Spherical refracting element",
      "nd": 1.74443,
      "indexReferenceNote": "Source prints a refractive index with no spectral-line or dispersion designation. The software d-line default is a numerical anchor convention only, not a source wavelength. No spectral or catalog-glass identification is asserted."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 58.1592,
      "sd": 23,
      "d": 3.9,
      "medium": 1
    },
    {
      "label": "2",
      "R": 21.491999999999997,
      "sd": 19,
      "d": 6.3
    },
    {
      "label": "3",
      "R": 91.8,
      "sd": 15.8,
      "d": 6.3,
      "medium": 2
    },
    {
      "label": "4",
      "R": -102.7512,
      "sd": 15.8,
      "d": 0.10007999999999999
    },
    {
      "label": "5",
      "R": 28.6008,
      "sd": 12,
      "d": 3.7999199999999997,
      "medium": 3
    },
    {
      "label": "6",
      "R": 10.5504,
      "sd": 9.45,
      "d": 9.0
    },
    {
      "label": "7",
      "R": 25.4664,
      "sd": 9,
      "d": 4.9999199999999995,
      "medium": 4
    },
    {
      "label": "8",
      "R": -17.8512,
      "sd": 8,
      "d": 0.7000799999999999,
      "medium": 5
    },
    {
      "label": "9",
      "R": -30.758399999999998,
      "sd": 8,
      "d": 1.25004
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.25004
    },
    {
      "label": "10",
      "R": -49.9992,
      "sd": 8,
      "d": 5.3999999999999995,
      "medium": 6
    },
    {
      "label": "11",
      "R": 35.7504,
      "sd": 7.3
    },
    {
      "label": "12",
      "R": -135.0,
      "sd": 7.3,
      "d": 1.5,
      "medium": 7
    },
    {
      "label": "13",
      "R": 27.0,
      "sd": 10.3,
      "d": 4.90008,
      "medium": 8
    },
    {
      "label": "14",
      "R": -21.4896,
      "sd": 10.3,
      "d": 0.04992
    },
    {
      "label": "15",
      "R": -400.0008,
      "sd": 12,
      "d": 2.6999999999999997,
      "medium": 9
    },
    {
      "label": "16",
      "R": -30.0624,
      "sd": 12.5
    }
  ],
  "focus": {
    "closeFocusM": 0.29849013650392375,
    "keyframes": [
      0,
      1
    ],
    "published": [
      1
    ],
    "step": 0.01,
    "description": "Two source geometry anchors only: infinity and printed |m|=.114 CRC gap. Intermediate gap/motion is linear numerical interpolation, not a measured factory cam. Near distance and image gap are derived. Iris/rims estimated; source index wavelength unspecified. COLOR and Chromatic zero spreads are fixed-index artifacts, not validated color correction.",
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 204.34,
        "distanceReference": "first-surface",
        "sourceMagnification": "0.114",
        "source": "JPS45039875B Example I close anchor: printed |m|=.114 and normalized d11=4.46. Object-to-first distance is independently derived from that geometry and magnification, rounded to 0.01 mm; not a printed distance."
      }
    ]
  },
  "gaps": {
    "11": {
      "label": "CRC: source endpoints; interpolated interior",
      "values": [
        [
          2.1400799999999998,
          1.0704
        ]
      ]
    },
    "16": {
      "label": "BFL: literal infinity; derived close",
      "values": [
        [
          37.824,
          40.925535437508884
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 2.8,
    "maxFNumber": 22,
    "fStops": [
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22
    ]
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 84,
    "maxTraceFieldDeg": 42
  },
  "groups": [
    {
      "text": "CRC front (L1-L6)",
      "fromSurface": "1",
      "toSurface": "11"
    },
    {
      "text": "CRC rear (L7-L9)",
      "fromSurface": "12",
      "toSurface": "16"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "7",
      "toSurface": "9"
    },
    {
      "text": "D2",
      "fromSurface": "12",
      "toSurface": "14"
    }
  ],
  "layout": {
    "scFill": 0.55,
    "yScFill": 0.48
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
