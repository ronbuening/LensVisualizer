// Private qualified patent reconstruction. Literal source R/d/nd/vd retained; no optimization.
// Native patent f100/F4 is uniformly scaled x6 as a modeled interpretation of the600mm family. The printed L74.2 defines the image plane; its source rounding and paraxial residual remain. Maker12m MOD and patent7f near plot do not supply finite spacings.
// All SDs and midpoint stop are explicit initialization hypotheses; see external evidence.
// Printed source L=74.2 ×6. Canonical static-infinity convention.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  "schema": 2,
  "key": "pentax-smc-takumar-6x7-600mm-f4",
  "maker": "Pentax",
  "name": "PENTAX SMC TAKUMAR 6x7 600mm f/4",
  "subtitle": "US 3,502,393 sole example x6; probable 600mm family reconstruction. Printed L plane retained; stop and apertures inferred. Infinity only.",
  "catalog": {
    "imageFormat": "6x7",
    "specs": [
      "6 ELEMENTS / 5 GROUPS",
      "GRADE B PATENT RECONSTRUCTION",
      "INFINITY ONLY; STOP / APERTURES INFERRED",
      "PATENT HALF FIELD 4.1 DEG"
    ],
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 600,
      "design": 600
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "lensMounts": [
      "pentax-67"
    ]
  },
  "source": {
    "patentNumber": "US 3,502,393",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1970,
    "authors": [
      "Tomokazu Kazamaki",
      "Tohru Matsumoto"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.76182,
      "vd": 26.5,
      "indexReference": "d",
      "glass": "S-TIH14 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.51276,
      "vd": 59.76,
      "indexReference": "d",
      "glass": "Unmatched (512598 crown; no public catalog row)",
      "role": "Source-prescribed spherical refractive element; production identity unproven"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.53256,
      "vd": 46.0,
      "indexReference": "d",
      "glass": "FTM8 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.5927,
      "vd": 35.8,
      "indexReference": "d",
      "glass": "FF5 (HOYA; coordinate proxy; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.67,
      "vd": 57.3,
      "indexReference": "d",
      "glass": "S-LAL52 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven",
      "cemented": "D1"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 225.28199999999998,
      "d": 21.0,
      "sd": 82.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": -2402.4539999999997,
      "d": 9.0,
      "sd": 82.5
    },
    {
      "label": "3",
      "R": -468.168,
      "d": 6.0,
      "sd": 78.03,
      "medium": 2
    },
    {
      "label": "4",
      "R": 1318.968,
      "d": 9.0,
      "sd": 78.03
    },
    {
      "label": "5",
      "R": 168.546,
      "d": 19.200000000000003,
      "sd": 78.38,
      "medium": 3
    },
    {
      "label": "6",
      "R": 1047.498,
      "d": 59.999999999999986,
      "sd": 78.38
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 60.0
    },
    {
      "label": "7",
      "R": 1219.7640000000001,
      "d": 12.0,
      "sd": 45.97,
      "medium": 4
    },
    {
      "label": "8",
      "R": -481.164,
      "d": 63.0,
      "sd": 45.97
    },
    {
      "label": "9",
      "R": -97.5,
      "d": 7.199999999999999,
      "sd": 29.7,
      "medium": 5
    },
    {
      "label": "10",
      "R": -59.099999999999994,
      "d": 4.800000000000001,
      "sd": 29.7,
      "medium": 6
    },
    {
      "label": "11",
      "R": -878.814,
      "d": 174.0,
      "sd": 29.7
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Static infinity only; Grade B probable family match. All dimensions scaled x6 from patent f100. Stop and clear apertures inferred. Retail12m MOD and patent7f near curves are not modeled finite states."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
      4,
      5.6,
      8,
      11,
      16,
      22,
      32,
      45
    ],
    "maxFNumber": 45
  },
  "layout": {
    "yScFill": 0.34
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
