// Private qualified patent reconstruction. Literal source R/d/nd/vd retained; no optimization.
// TableIII/Fig3 contains11powered elements/10groups and no built-in filter prescription. The manufacturer drawing has an extra filter body afterE5. Filter parameters remain absent; the model does not assert exact retail behavior.
// All SDs and midpoint stop are explicit initialization hypotheses; see external evidence.
// Printed source backfocus199.7 ×0.18. Canonical static-infinity convention.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  "schema": 2,
  "key": "pentax-smc-18mm-f35",
  "maker": "Pentax",
  "name": "PENTAX SMC PENTAX 18mm f/3.5",
  "subtitle": "US 3,841,736 Table III x0.18; probable family reconstruction. Factory built-in filter unmodeled; iris and clear apertures inferred. Infinity only.",
  "catalog": {
    "imageFormat": "135-full-frame",
    "specs": [
      "11 ELEMENTS / 10 GROUPS",
      "GRADE B PATENT RECONSTRUCTION",
      "INFINITY ONLY; STOP / APERTURES INFERRED",
      "PATENT HALF FIELD 51 DEG"
    ],
    "elementCount": 11,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": 18,
      "design": 18.0
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.5
    },
    "lensMounts": [
      "pentax-k"
    ]
  },
  "source": {
    "patentNumber": "US 3,841,736",
    "example": {
      "label": "Table III",
      "id": "3"
    },
    "patentYear": 1974,
    "authors": [
      "Yasuo Takahashi",
      "Sadao Okudaira"
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
      "type": "Negative Meniscus",
      "nd": 1.64,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "LACL60 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Plano-Convex",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.64,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "LACL60 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.64,
      "vd": 60.2,
      "indexReference": "d",
      "glass": "LACL60 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.62588,
      "vd": 35.7,
      "indexReference": "d",
      "glass": "F1 (SUMITA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven",
      "cemented": "D1"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.2,
      "indexReference": "d",
      "glass": "S-LAH60 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven",
      "cemented": "D1"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d",
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Negative Meniscus",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "glass": "SF6 (Schott catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Biconvex Positive",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Source-prescribed spherical refractive element; production identity unproven"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 41.3136,
      "d": 1.5552000000000001,
      "sd": 27.37,
      "medium": 1
    },
    {
      "label": "2",
      "R": 17.0208,
      "d": 8.5626,
      "sd": 13.8
    },
    {
      "label": "3",
      "R": "flat",
      "d": 7.1802,
      "sd": 18.68,
      "medium": 2
    },
    {
      "label": "4",
      "R": -56.2914,
      "d": 0.2916,
      "sd": 18.68
    },
    {
      "label": "5",
      "R": 27.0216,
      "d": 1.7315999999999998,
      "sd": 14.54,
      "medium": 3
    },
    {
      "label": "6",
      "R": 10.1646,
      "d": 3.4038,
      "sd": 8
    },
    {
      "label": "7",
      "R": 30.2076,
      "d": 1.7315999999999998,
      "sd": 11.58,
      "medium": 4
    },
    {
      "label": "8",
      "R": 11.7666,
      "d": 2.9195999999999995,
      "sd": 8
    },
    {
      "label": "9",
      "R": 60.03,
      "d": 1.7315999999999998,
      "sd": 10.26,
      "medium": 5
    },
    {
      "label": "10",
      "R": -196.8696,
      "d": 3.8916,
      "sd": 10.26
    },
    {
      "label": "11",
      "R": 32.598,
      "d": 4.571999999999999,
      "sd": 8.64,
      "medium": 6
    },
    {
      "label": "12",
      "R": -17.238599999999998,
      "d": 1.411200000000008,
      "sd": 8.64
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.4111999999999938
    },
    {
      "label": "13",
      "R": 76.3686,
      "d": 4.183199999999999,
      "sd": 7.5,
      "medium": 7
    },
    {
      "label": "14",
      "R": -10.4706,
      "d": 1.152,
      "sd": 7.5,
      "medium": 8
    },
    {
      "label": "15",
      "R": 45.6966,
      "d": 1.4597999999999998,
      "sd": 8.5
    },
    {
      "label": "16",
      "R": -270.486,
      "d": 2.6262,
      "sd": 7.5,
      "medium": 9
    },
    {
      "label": "17",
      "R": -13.0554,
      "d": 0.09720000000000001,
      "sd": 7.5
    },
    {
      "label": "18",
      "R": 58.377599999999994,
      "d": 1.0404,
      "sd": 11.44,
      "medium": 10
    },
    {
      "label": "19",
      "R": 21.9132,
      "d": 1.9458,
      "sd": 9
    },
    {
      "label": "20",
      "R": 187.76520000000002,
      "d": 3.4056,
      "sd": 10.2,
      "medium": 11
    },
    {
      "label": "21",
      "R": -19.213199999999997,
      "d": 35.946,
      "sd": 10.2
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Static infinity only; Grade B probable family match. Stop and clear apertures inferred. Source TableIII x0.18 omits the factory built-in filter; its thickness/glass are unknown. No retail finite focus is modeled."
  },
  "aperture": {
    "nominalFNumber": 3.5,
    "fStops": [
      3.5,
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "layout": {
    "yScFill": 0.34
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
