import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "tamron-a18-18-250mm-f35-63-di-ii",
  "maker": "Tamron",
  "name": "TAMRON AF 18-250mm f/3.5-6.3 Di II LD Aspherical [IF] MACRO (A18)",
  "subtitle": "JP 2008-003195 A; INFERRED continuous zoom path; native source knots preserved",
  "catalog": {
    "lensMounts": [
      "canon-ef",
      "nikon-f",
      "sony-a",
      "pentax-k"
    ],
    "imageFormat": "aps-c",
    "imageCircleMm": 29,
    "elementCount": 16,
    "groupCount": 13,
    "focalLengthMm": {
      "marketing": [
        18,
        250
      ],
      "design": [
        18.43234018826806,
        241.83964201803823
      ]
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.47
    }
  },
  "source": {
    "patentNumber": "JP 2008-003195 A",
    example: {"label": "Example 2", "id": "2"},
    "patentYear": 2008,
    "authors": [
      "Yuichi Muramatsu",
      "Akio Arakawa"
    ],
    "assignees": [
      "Tamron Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Glass substrate L1",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "focalLengthMm": -209.58533695242033,
      "glass": "Unmatched (source nd=1.84666, vd=23.78; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L1",
      "cemented": "C1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Glass substrate L2",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "focalLengthMm": 120.9031767524762,
      "glass": "Unmatched (source nd=1.49700, vd=81.61; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L2",
      "cemented": "C1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Glass substrate L3",
      "type": "Positive Meniscus",
      "nd": 1.62299,
      "vd": 58.15,
      "indexReference": "d",
      "focalLengthMm": 139.88256106720715,
      "glass": "Unmatched (source nd=1.62299, vd=58.15; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L3"
    },
    {
      "id": 4,
      "name": "L4f",
      "label": "Hybrid film bonded to L4",
      "type": "Hybrid aspheric film (material unconfirmed)",
      "nd": 1.5146,
      "vd": 49.96,
      "indexReference": "d",
      "focalLengthMm": -374.713515680066,
      "glass": "Unmatched (source nd=1.51460, vd=49.96; supplier and melt unverified)",
      "role": "Explicit source thin optical medium; inferred hybrid film, chemistry unconfirmed.",
      "diagramLabel": "L4f",
      "cemented": "C6"
    },
    {
      "id": 5,
      "name": "L4",
      "label": "Glass substrate L4",
      "type": "Negative Meniscus",
      "nd": 1.804,
      "vd": 46.58,
      "indexReference": "d",
      "focalLengthMm": -21.09888266767846,
      "glass": "Unmatched (source nd=1.80400, vd=46.58; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L4",
      "cemented": "C6"
    },
    {
      "id": 6,
      "name": "L5",
      "label": "Glass substrate L5",
      "type": "Biconcave Negative",
      "nd": 1.83481,
      "vd": 42.72,
      "indexReference": "d",
      "focalLengthMm": -25.096936521149065,
      "glass": "Unmatched (source nd=1.83481, vd=42.72; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L5"
    },
    {
      "id": 7,
      "name": "L6",
      "label": "Glass substrate L6",
      "type": "Biconvex Positive",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "focalLengthMm": 16.728647180665277,
      "glass": "Unmatched (source nd=1.84666, vd=23.78; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L6"
    },
    {
      "id": 8,
      "name": "L7",
      "label": "Glass substrate L7",
      "type": "Biconcave Negative",
      "nd": 1.883,
      "vd": 40.78,
      "indexReference": "d",
      "focalLengthMm": -22.37366417469386,
      "glass": "Unmatched (source nd=1.88300, vd=40.78; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L7"
    },
    {
      "id": 9,
      "name": "L8",
      "label": "Glass substrate L8",
      "type": "Negative Meniscus",
      "nd": 1.804,
      "vd": 46.58,
      "indexReference": "d",
      "focalLengthMm": -93.5116476284648,
      "glass": "Unmatched (source nd=1.80400, vd=46.58; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L8",
      "cemented": "C16"
    },
    {
      "id": 10,
      "name": "L9",
      "label": "Glass substrate L9",
      "type": "Biconvex Positive",
      "nd": 1.58913,
      "vd": 61.18,
      "indexReference": "d",
      "focalLengthMm": 38.23660707692615,
      "glass": "Unmatched (source nd=1.58913, vd=61.18; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L9",
      "cemented": "C16"
    },
    {
      "id": 11,
      "name": "L10",
      "label": "Glass substrate L10",
      "type": "Positive Meniscus",
      "nd": 1.48749,
      "vd": 70.21,
      "indexReference": "d",
      "focalLengthMm": 66.8667626057969,
      "glass": "Unmatched (source nd=1.48749, vd=70.21; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L10"
    },
    {
      "id": 12,
      "name": "L11",
      "label": "Glass substrate L11",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "focalLengthMm": 49.70837814962158,
      "glass": "Unmatched (source nd=1.49700, vd=81.61; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L11"
    },
    {
      "id": 13,
      "name": "L12",
      "label": "Glass substrate L12",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.17,
      "indexReference": "d",
      "focalLengthMm": -29.211084767748407,
      "glass": "Unmatched (source nd=1.83400, vd=37.17; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L12"
    },
    {
      "id": 14,
      "name": "L13f",
      "label": "Hybrid film bonded to L13",
      "type": "Hybrid aspheric film (material unconfirmed)",
      "nd": 1.5146,
      "vd": 49.96,
      "indexReference": "d",
      "focalLengthMm": 67340.66190421439,
      "glass": "Unmatched (source nd=1.51460, vd=49.96; supplier and melt unverified)",
      "role": "Explicit source thin optical medium; inferred hybrid film, chemistry unconfirmed.",
      "diagramLabel": "L13f",
      "cemented": "C25"
    },
    {
      "id": 15,
      "name": "L13",
      "label": "Glass substrate L13",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.21,
      "indexReference": "d",
      "focalLengthMm": 42.91630431948858,
      "glass": "Unmatched (source nd=1.48749, vd=70.21; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L13",
      "cemented": "C25"
    },
    {
      "id": 16,
      "name": "L14",
      "label": "Glass substrate L14",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.21,
      "indexReference": "d",
      "focalLengthMm": 54.21263769927596,
      "glass": "Unmatched (source nd=1.48749, vd=70.21; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L14"
    },
    {
      "id": 17,
      "name": "L15",
      "label": "Glass substrate L15",
      "type": "Biconcave Negative",
      "nd": 1.804,
      "vd": 46.58,
      "indexReference": "d",
      "focalLengthMm": -22.461725752351047,
      "glass": "Unmatched (source nd=1.80400, vd=46.58; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L15",
      "cemented": "C30"
    },
    {
      "id": 18,
      "name": "L16",
      "label": "Glass substrate L16",
      "type": "Positive Meniscus",
      "nd": 1.54072,
      "vd": 47.23,
      "indexReference": "d",
      "focalLengthMm": 42.3977413783992,
      "glass": "Unmatched (source nd=1.54072, vd=47.23; supplier and melt unverified)",
      "role": "Source substrate; stated power is standalone in air, not in-system contribution.",
      "diagramLabel": "L16",
      "cemented": "C30"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 100,
      "d": 1.5,
      "sd": 28,
      "medium": 1
    },
    {
      "label": "2",
      "R": 63.5173,
      "d": 7,
      "sd": 28,
      "medium": 2
    },
    {
      "label": "3",
      "R": -1072.5164,
      "d": 0.2,
      "sd": 28
    },
    {
      "label": "4",
      "R": 63.0346,
      "d": 4.5,
      "sd": 27,
      "medium": 3
    },
    {
      "label": "5",
      "R": 221.587,
      "sd": 27
    },
    {
      "label": "6A",
      "R": 110,
      "d": 0.2,
      "sd": 13.5,
      "medium": 4,
      "asphere": {
        "A4": 0.00000608226,
        "A6": 3.27658e-9,
        "A8": -8.68205e-11,
        "A10": 4.65488e-13
      }
    },
    {
      "label": "7",
      "R": 70,
      "d": 1.2,
      "sd": 13,
      "medium": 5
    },
    {
      "label": "8",
      "R": 13.5502,
      "d": 5.4,
      "sd": 9.15
    },
    {
      "label": "9",
      "R": -34.645,
      "d": 1,
      "sd": 10.5,
      "medium": 6
    },
    {
      "label": "10",
      "R": 53.702,
      "d": 0.8,
      "sd": 10.5
    },
    {
      "label": "11",
      "R": 29.1029,
      "d": 4.5,
      "sd": 9.5,
      "medium": 7
    },
    {
      "label": "12",
      "R": -25.6353,
      "d": 0.42,
      "sd": 9
    },
    {
      "label": "13",
      "R": -21.2556,
      "d": 1,
      "sd": 9,
      "medium": 8
    },
    {
      "label": "14",
      "R": 286.1917,
      "sd": 9
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1
    },
    {
      "label": "16",
      "R": 38.3469,
      "d": 1,
      "sd": 10,
      "medium": 9
    },
    {
      "label": "17",
      "R": 25.0994,
      "d": 3,
      "sd": 10,
      "medium": 10
    },
    {
      "label": "18",
      "R": -210,
      "d": 1,
      "sd": 10
    },
    {
      "label": "19",
      "R": 24.5206,
      "d": 3,
      "sd": 10.5,
      "medium": 11
    },
    {
      "label": "20",
      "R": 95,
      "d": 0.5,
      "sd": 10.5
    },
    {
      "label": "21",
      "R": 23.9504,
      "d": 3.5,
      "sd": 10.5,
      "medium": 12
    },
    {
      "label": "22",
      "R": 746.013,
      "d": 0.65,
      "sd": 10.5
    },
    {
      "label": "23",
      "R": -79.3108,
      "d": 1,
      "sd": 9,
      "medium": 13
    },
    {
      "label": "24",
      "R": 35.3648,
      "sd": 9.5
    },
    {
      "label": "25A",
      "R": 48.526,
      "d": 0.2,
      "sd": 10.5,
      "medium": 14,
      "asphere": {
        "A4": -0.0000466282,
        "A6": 6.30079e-9,
        "A8": -1.16447e-11,
        "A10": -4.36431e-14
      }
    },
    {
      "label": "26",
      "R": 48.526,
      "d": 3.5,
      "sd": 10.5,
      "medium": 15
    },
    {
      "label": "27",
      "R": -35.9079,
      "d": 0.2,
      "sd": 10.5
    },
    {
      "label": "28",
      "R": 8369.5957,
      "d": 3.5,
      "sd": 10.5,
      "medium": 16
    },
    {
      "label": "29",
      "R": -26.5082,
      "d": 0.2,
      "sd": 10.5
    },
    {
      "label": "30",
      "R": -533.718,
      "d": 1,
      "sd": 10.5,
      "medium": 17
    },
    {
      "label": "31",
      "R": 18.7073,
      "d": 3.5,
      "sd": 10.5,
      "medium": 18
    },
    {
      "label": "32",
      "R": 95,
      "sd": 10.5
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 18.43,
        "nominalFNumber": 3.47,
        "label": "18.43 mm"
      },
      {
        "published": false,
        "focalLengthMm": 18.691065220979187,
        "nominalFNumber": 3.4854000000000003
      },
      {
        "published": false,
        "focalLengthMm": 18.95176068648648,
        "nominalFNumber": 3.5008000000000004
      },
      {
        "published": false,
        "focalLengthMm": 19.2144411322382,
        "nominalFNumber": 3.5162
      },
      {
        "published": false,
        "focalLengthMm": 19.47912137017628,
        "nominalFNumber": 3.5316
      },
      {
        "published": false,
        "focalLengthMm": 19.74581647915601,
        "nominalFNumber": 3.547
      },
      {
        "published": false,
        "focalLengthMm": 20.014541807482672,
        "nominalFNumber": 3.5624000000000002
      },
      {
        "published": false,
        "focalLengthMm": 20.285312975566466,
        "nominalFNumber": 3.5778
      },
      {
        "published": false,
        "focalLengthMm": 20.5581458786963,
        "nominalFNumber": 3.5932
      },
      {
        "published": false,
        "focalLengthMm": 20.833056689933244,
        "nominalFNumber": 3.6086
      },
      {
        "published": false,
        "focalLengthMm": 21.110061863123626,
        "nominalFNumber": 3.624
      },
      {
        "published": false,
        "focalLengthMm": 21.389178135910186,
        "nominalFNumber": 3.6394
      },
      {
        "published": false,
        "focalLengthMm": 21.670422533380627,
        "nominalFNumber": 3.6548000000000003
      },
      {
        "published": false,
        "focalLengthMm": 21.953812370954754,
        "nominalFNumber": 3.6702000000000004
      },
      {
        "published": false,
        "focalLengthMm": 22.23936525817405,
        "nominalFNumber": 3.6856
      },
      {
        "published": false,
        "focalLengthMm": 22.52709910227086,
        "nominalFNumber": 3.701
      },
      {
        "published": false,
        "focalLengthMm": 22.81703211192875,
        "nominalFNumber": 3.7164
      },
      {
        "published": false,
        "focalLengthMm": 23.10918280117287,
        "nominalFNumber": 3.7318000000000002
      },
      {
        "published": false,
        "focalLengthMm": 23.403569993392175,
        "nominalFNumber": 3.7472000000000003
      },
      {
        "published": false,
        "focalLengthMm": 23.700212825495555,
        "nominalFNumber": 3.7626
      },
      {
        "published": false,
        "focalLengthMm": 23.999130752203754,
        "nominalFNumber": 3.7780000000000005
      },
      {
        "published": false,
        "focalLengthMm": 24.30034355048036,
        "nominalFNumber": 3.7934
      },
      {
        "published": false,
        "focalLengthMm": 24.60387132410229,
        "nominalFNumber": 3.8088000000000006
      },
      {
        "published": false,
        "focalLengthMm": 24.909734508374513,
        "nominalFNumber": 3.8242000000000003
      },
      {
        "published": false,
        "focalLengthMm": 25.217953874990393,
        "nominalFNumber": 3.8396
      },
      {
        "published": false,
        "focalLengthMm": 25.528550537040285,
        "nominalFNumber": 3.855
      },
      {
        "published": false,
        "focalLengthMm": 25.841545954172226,
        "nominalFNumber": 3.8704
      },
      {
        "published": false,
        "focalLengthMm": 26.156961937907262,
        "nominalFNumber": 3.8858
      },
      {
        "published": false,
        "focalLengthMm": 26.474820657112364,
        "nominalFNumber": 3.9012000000000002
      },
      {
        "published": false,
        "focalLengthMm": 26.795144643635037,
        "nominalFNumber": 3.9166
      },
      {
        "published": false,
        "focalLengthMm": 27.117956798102828,
        "nominalFNumber": 3.9319999999999995
      },
      {
        "published": false,
        "focalLengthMm": 27.443280395890937,
        "nominalFNumber": 3.9474
      },
      {
        "published": false,
        "focalLengthMm": 27.771139093263013,
        "nominalFNumber": 3.9627999999999997
      },
      {
        "published": false,
        "focalLengthMm": 28.10155693368759,
        "nominalFNumber": 3.9782
      },
      {
        "published": false,
        "focalLengthMm": 28.43455835433588,
        "nominalFNumber": 3.9936
      },
      {
        "published": false,
        "focalLengthMm": 28.770168192764444,
        "nominalFNumber": 4.009
      },
      {
        "published": false,
        "focalLengthMm": 29.108411693787367,
        "nominalFNumber": 4.0244
      },
      {
        "published": false,
        "focalLengthMm": 29.449314516543232,
        "nominalFNumber": 4.0398
      },
      {
        "published": false,
        "focalLengthMm": 29.792902741760887,
        "nominalFNumber": 4.0552
      },
      {
        "published": false,
        "focalLengthMm": 30.139202879230975,
        "nominalFNumber": 4.070600000000001
      },
      {
        "published": false,
        "focalLengthMm": 30.488241875486104,
        "nominalFNumber": 4.086
      },
      {
        "published": false,
        "focalLengthMm": 30.84004712169732,
        "nominalFNumber": 4.1014
      },
      {
        "published": false,
        "focalLengthMm": 31.19464646179225,
        "nominalFNumber": 4.1168
      },
      {
        "published": false,
        "focalLengthMm": 31.55206820080003,
        "nominalFNumber": 4.1322
      },
      {
        "published": false,
        "focalLengthMm": 31.91234111343105,
        "nominalFNumber": 4.147600000000001
      },
      {
        "published": false,
        "focalLengthMm": 32.27549445289628,
        "nominalFNumber": 4.163
      },
      {
        "published": false,
        "focalLengthMm": 32.64155795997393,
        "nominalFNumber": 4.1784
      },
      {
        "published": false,
        "focalLengthMm": 33.01056187233113,
        "nominalFNumber": 4.1937999999999995
      },
      {
        "published": false,
        "focalLengthMm": 33.38253693410714,
        "nominalFNumber": 4.2092
      },
      {
        "published": false,
        "focalLengthMm": 33.75751440576522,
        "nominalFNumber": 4.2246
      },
      {
        "published": false,
        "focalLengthMm": 34.1355260742235,
        "nominalFNumber": 4.24
      },
      {
        "published": false,
        "focalLengthMm": 34.516604263270445,
        "nominalFNumber": 4.2554
      },
      {
        "published": false,
        "focalLengthMm": 34.90078184427531,
        "nominalFNumber": 4.2707999999999995
      },
      {
        "published": false,
        "focalLengthMm": 35.28809224720221,
        "nominalFNumber": 4.2862
      },
      {
        "published": false,
        "focalLengthMm": 35.678569471936946,
        "nominalFNumber": 4.3016000000000005
      },
      {
        "published": false,
        "focalLengthMm": 36.07224809993633,
        "nominalFNumber": 4.317
      },
      {
        "published": false,
        "focalLengthMm": 36.4691633062107,
        "nominalFNumber": 4.3324
      },
      {
        "published": false,
        "focalLengthMm": 36.86935087164965,
        "nominalFNumber": 4.347799999999999
      },
      {
        "published": false,
        "focalLengthMm": 37.27284719570221,
        "nominalFNumber": 4.3632
      },
      {
        "published": false,
        "focalLengthMm": 37.67968930942228,
        "nominalFNumber": 4.3786000000000005
      },
      {
        "published": false,
        "focalLengthMm": 38.08991488889314,
        "nominalFNumber": 4.394
      },
      {
        "published": false,
        "focalLengthMm": 38.50356226904104,
        "nominalFNumber": 4.4094
      },
      {
        "published": false,
        "focalLengthMm": 38.920670457852,
        "nominalFNumber": 4.424799999999999
      },
      {
        "published": false,
        "focalLengthMm": 39.3412791510057,
        "nominalFNumber": 4.4402
      },
      {
        "published": false,
        "focalLengthMm": 39.76542874693981,
        "nominalFNumber": 4.4556000000000004
      },
      {
        "published": false,
        "focalLengthMm": 40.19316036235873,
        "nominalFNumber": 4.471
      },
      {
        "published": false,
        "focalLengthMm": 40.62451584820465,
        "nominalFNumber": 4.4864
      },
      {
        "published": false,
        "focalLengthMm": 41.05953780610248,
        "nominalFNumber": 4.5018
      },
      {
        "published": false,
        "focalLengthMm": 41.4982696052997,
        "nominalFNumber": 4.5172
      },
      {
        "published": false,
        "focalLengthMm": 41.94075540011557,
        "nominalFNumber": 4.5326
      },
      {
        "published": false,
        "focalLengthMm": 42.38704014791821,
        "nominalFNumber": 4.548
      },
      {
        "published": false,
        "focalLengthMm": 42.83716962764882,
        "nominalFNumber": 4.5634
      },
      {
        "published": false,
        "focalLengthMm": 43.291190458912716,
        "nominalFNumber": 4.5788
      },
      {
        "published": false,
        "focalLengthMm": 43.74915012165709,
        "nominalFNumber": 4.5942
      },
      {
        "published": false,
        "focalLengthMm": 44.21109697645664,
        "nominalFNumber": 4.6096
      },
      {
        "published": false,
        "focalLengthMm": 44.67708028543068,
        "nominalFNumber": 4.625
      },
      {
        "published": false,
        "focalLengthMm": 45.14715023381343,
        "nominalFNumber": 4.6404
      },
      {
        "published": false,
        "focalLengthMm": 45.621357952202956,
        "nominalFNumber": 4.6558
      },
      {
        "published": false,
        "focalLengthMm": 46.099755539513225,
        "nominalFNumber": 4.6712
      },
      {
        "published": false,
        "focalLengthMm": 46.58239608665716,
        "nominalFNumber": 4.6866
      },
      {
        "published": false,
        "focalLengthMm": 47.06933370098698,
        "nominalFNumber": 4.702
      },
      {
        "published": false,
        "focalLengthMm": 47.56062353152212,
        "nominalFNumber": 4.7174000000000005
      },
      {
        "published": false,
        "focalLengthMm": 48.056321794993664,
        "nominalFNumber": 4.732799999999999
      },
      {
        "published": false,
        "focalLengthMm": 48.556485802740035,
        "nominalFNumber": 4.7482
      },
      {
        "published": false,
        "focalLengthMm": 49.06117398848334,
        "nominalFNumber": 4.763599999999999
      },
      {
        "published": false,
        "focalLengthMm": 49.570445937023486,
        "nominalFNumber": 4.779
      },
      {
        "published": false,
        "focalLengthMm": 50.08436241388766,
        "nominalFNumber": 4.7943999999999996
      },
      {
        "published": false,
        "focalLengthMm": 50.60298539597045,
        "nominalFNumber": 4.8098
      },
      {
        "published": false,
        "focalLengthMm": 51.12637810320783,
        "nominalFNumber": 4.825200000000001
      },
      {
        "published": false,
        "focalLengthMm": 51.65460503132352,
        "nominalFNumber": 4.8406
      },
      {
        "published": false,
        "focalLengthMm": 52.1877319856977,
        "nominalFNumber": 4.856
      },
      {
        "published": false,
        "focalLengthMm": 52.72582611646008,
        "nominalFNumber": 4.8713999999999995
      },
      {
        "published": false,
        "focalLengthMm": 53.2689559544429,
        "nominalFNumber": 4.8868
      },
      {
        "published": false,
        "focalLengthMm": 53.81719144920437,
        "nominalFNumber": 4.9022
      },
      {
        "published": false,
        "focalLengthMm": 54.37060400744046,
        "nominalFNumber": 4.9176
      },
      {
        "published": false,
        "focalLengthMm": 54.92926653332079,
        "nominalFNumber": 4.932999999999999
      },
      {
        "published": false,
        "focalLengthMm": 55.49325347012327,
        "nominalFNumber": 4.9483999999999995
      },
      {
        "published": false,
        "focalLengthMm": 56.06264084336305,
        "nominalFNumber": 4.963799999999999
      },
      {
        "published": false,
        "focalLengthMm": 56.63750630548485,
        "nominalFNumber": 4.9792
      },
      {
        "published": false,
        "focalLengthMm": 57.21792918218445,
        "nominalFNumber": 4.994599999999999
      },
      {
        "focalLengthMm": 57.8,
        "nominalFNumber": 5.01
      },
      {
        "published": false,
        "focalLengthMm": 58.37170213216425,
        "nominalFNumber": 5.0234
      },
      {
        "published": false,
        "focalLengthMm": 58.94599800304805,
        "nominalFNumber": 5.0367999999999995
      },
      {
        "published": false,
        "focalLengthMm": 59.527001357198266,
        "nominalFNumber": 5.050199999999999
      },
      {
        "published": false,
        "focalLengthMm": 60.11483880084613,
        "nominalFNumber": 5.0636
      },
      {
        "published": false,
        "focalLengthMm": 60.70964044736829,
        "nominalFNumber": 5.076999999999999
      },
      {
        "published": false,
        "focalLengthMm": 61.311540048218546,
        "nominalFNumber": 5.0904
      },
      {
        "published": false,
        "focalLengthMm": 61.920675130111256,
        "nominalFNumber": 5.1038
      },
      {
        "published": false,
        "focalLengthMm": 62.53718713881955,
        "nominalFNumber": 5.1172
      },
      {
        "published": false,
        "focalLengthMm": 63.16122158998269,
        "nominalFNumber": 5.130599999999999
      },
      {
        "published": false,
        "focalLengthMm": 63.79292822733909,
        "nominalFNumber": 5.144
      },
      {
        "published": false,
        "focalLengthMm": 64.43246118883857,
        "nominalFNumber": 5.157399999999999
      },
      {
        "published": false,
        "focalLengthMm": 65.07997918110854,
        "nominalFNumber": 5.1708
      },
      {
        "published": false,
        "focalLengthMm": 65.73564566263643,
        "nominalFNumber": 5.1842
      },
      {
        "published": false,
        "focalLengthMm": 66.39962903705376,
        "nominalFNumber": 5.1975999999999996
      },
      {
        "published": false,
        "focalLengthMm": 67.07210285528244,
        "nominalFNumber": 5.211
      },
      {
        "published": false,
        "focalLengthMm": 67.75324602937435,
        "nominalFNumber": 5.224399999999999
      },
      {
        "published": false,
        "focalLengthMm": 68.44324305724656,
        "nominalFNumber": 5.2378
      },
      {
        "published": false,
        "focalLengthMm": 69.14228425960266,
        "nominalFNumber": 5.2512
      },
      {
        "published": false,
        "focalLengthMm": 69.85056602975216,
        "nominalFNumber": 5.2646
      },
      {
        "published": false,
        "focalLengthMm": 70.56829109719924,
        "nominalFNumber": 5.278
      },
      {
        "published": false,
        "focalLengthMm": 71.29566880593224,
        "nominalFNumber": 5.291399999999999
      },
      {
        "published": false,
        "focalLengthMm": 72.03291540842059,
        "nominalFNumber": 5.3048
      },
      {
        "published": false,
        "focalLengthMm": 72.78025437642027,
        "nominalFNumber": 5.3182
      },
      {
        "published": false,
        "focalLengthMm": 73.53791672976092,
        "nominalFNumber": 5.3316
      },
      {
        "published": false,
        "focalLengthMm": 74.3061413844068,
        "nominalFNumber": 5.345
      },
      {
        "published": false,
        "focalLengthMm": 75.08517552118101,
        "nominalFNumber": 5.3584
      },
      {
        "published": false,
        "focalLengthMm": 75.87527497666329,
        "nominalFNumber": 5.3717999999999995
      },
      {
        "published": false,
        "focalLengthMm": 76.67670465791291,
        "nominalFNumber": 5.385199999999999
      },
      {
        "published": false,
        "focalLengthMm": 77.48973898280445,
        "nominalFNumber": 5.3986
      },
      {
        "published": false,
        "focalLengthMm": 78.3146623479293,
        "nominalFNumber": 5.412
      },
      {
        "published": false,
        "focalLengthMm": 79.15176962619758,
        "nominalFNumber": 5.4254
      },
      {
        "published": false,
        "focalLengthMm": 80.00136669646763,
        "nominalFNumber": 5.4388000000000005
      },
      {
        "published": false,
        "focalLengthMm": 80.8637710077486,
        "nominalFNumber": 5.4521999999999995
      },
      {
        "published": false,
        "focalLengthMm": 81.73931218076997,
        "nominalFNumber": 5.4656
      },
      {
        "published": false,
        "focalLengthMm": 82.62833264997396,
        "nominalFNumber": 5.479
      },
      {
        "published": false,
        "focalLengthMm": 83.53118834929674,
        "nominalFNumber": 5.4924
      },
      {
        "published": false,
        "focalLengthMm": 84.44824944542728,
        "nominalFNumber": 5.5058
      },
      {
        "published": false,
        "focalLengthMm": 85.37990112261832,
        "nominalFNumber": 5.5192
      },
      {
        "published": false,
        "focalLengthMm": 86.32654442353386,
        "nominalFNumber": 5.5325999999999995
      },
      {
        "published": false,
        "focalLengthMm": 87.28859715109189,
        "nominalFNumber": 5.545999999999999
      },
      {
        "published": false,
        "focalLengthMm": 88.2664948367855,
        "nominalFNumber": 5.5594
      },
      {
        "published": false,
        "focalLengthMm": 89.26069178155058,
        "nominalFNumber": 5.572799999999999
      },
      {
        "published": false,
        "focalLengthMm": 90.2716621759304,
        "nominalFNumber": 5.5862
      },
      {
        "published": false,
        "focalLengthMm": 91.29990130702497,
        "nominalFNumber": 5.5996
      },
      {
        "published": false,
        "focalLengthMm": 92.34592686056965,
        "nominalFNumber": 5.6129999999999995
      },
      {
        "published": false,
        "focalLengthMm": 93.41028032745314,
        "nominalFNumber": 5.6264
      },
      {
        "published": false,
        "focalLengthMm": 94.49352852508042,
        "nominalFNumber": 5.639799999999999
      },
      {
        "published": false,
        "focalLengthMm": 95.59626524523227,
        "nominalFNumber": 5.6532
      },
      {
        "published": false,
        "focalLengthMm": 96.71911304149502,
        "nominalFNumber": 5.6666
      },
      {
        "published": false,
        "focalLengthMm": 97.86272517096096,
        "nominalFNumber": 5.68
      },
      {
        "published": false,
        "focalLengthMm": 99.02778770677091,
        "nominalFNumber": 5.6934
      },
      {
        "published": false,
        "focalLengthMm": 100.21502184020508,
        "nominalFNumber": 5.706799999999999
      },
      {
        "published": false,
        "focalLengthMm": 101.42518639350654,
        "nominalFNumber": 5.7202
      },
      {
        "published": false,
        "focalLengthMm": 102.65908056746933,
        "nominalFNumber": 5.733599999999999
      },
      {
        "published": false,
        "focalLengthMm": 103.91754695114022,
        "nominalFNumber": 5.747
      },
      {
        "published": false,
        "focalLengthMm": 105.20147482481651,
        "nominalFNumber": 5.7604
      },
      {
        "published": false,
        "focalLengthMm": 106.5118037920141,
        "nominalFNumber": 5.7738
      },
      {
        "published": false,
        "focalLengthMm": 107.84952778131579,
        "nominalFNumber": 5.7872
      },
      {
        "published": false,
        "focalLengthMm": 109.21569946516539,
        "nominalFNumber": 5.800599999999999
      },
      {
        "published": false,
        "focalLengthMm": 110.61143514991373,
        "nominalFNumber": 5.814
      },
      {
        "published": false,
        "focalLengthMm": 112.03792019999118,
        "nominalFNumber": 5.8274
      },
      {
        "published": false,
        "focalLengthMm": 113.4964150692325,
        "nominalFNumber": 5.8408
      },
      {
        "published": false,
        "focalLengthMm": 114.98826202448718,
        "nominalFNumber": 5.854199999999999
      },
      {
        "published": false,
        "focalLengthMm": 116.51489266112607,
        "nominalFNumber": 5.8675999999999995
      },
      {
        "published": false,
        "focalLengthMm": 118.07783632744277,
        "nominalFNumber": 5.881
      },
      {
        "published": false,
        "focalLengthMm": 119.67872959594705,
        "nominalFNumber": 5.894399999999999
      },
      {
        "published": false,
        "focalLengthMm": 121.31932694502231,
        "nominalFNumber": 5.9078
      },
      {
        "published": false,
        "focalLengthMm": 123.00151284545271,
        "nominalFNumber": 5.9212
      },
      {
        "published": false,
        "focalLengthMm": 124.7273154844048,
        "nominalFNumber": 5.9346
      },
      {
        "published": false,
        "focalLengthMm": 126.49892240636372,
        "nominalFNumber": 5.9479999999999995
      },
      {
        "published": false,
        "focalLengthMm": 128.31869840872352,
        "nominalFNumber": 5.961399999999999
      },
      {
        "published": false,
        "focalLengthMm": 130.18920610238874,
        "nominalFNumber": 5.974799999999999
      },
      {
        "published": false,
        "focalLengthMm": 132.1132296390441,
        "nominalFNumber": 5.988199999999999
      },
      {
        "published": false,
        "focalLengthMm": 134.0938022223433,
        "nominalFNumber": 6.0016
      },
      {
        "published": false,
        "focalLengthMm": 136.1342381677198,
        "nominalFNumber": 6.014999999999999
      },
      {
        "published": false,
        "focalLengthMm": 138.23817046518576,
        "nominalFNumber": 6.0283999999999995
      },
      {
        "published": false,
        "focalLengthMm": 140.40959504561351,
        "nominalFNumber": 6.0418
      },
      {
        "published": false,
        "focalLengthMm": 142.65292327337818,
        "nominalFNumber": 6.0552
      },
      {
        "published": false,
        "focalLengthMm": 144.97304461490833,
        "nominalFNumber": 6.0686
      },
      {
        "published": false,
        "focalLengthMm": 147.37540200352612,
        "nominalFNumber": 6.082
      },
      {
        "published": false,
        "focalLengthMm": 149.86608319383703,
        "nominalFNumber": 6.0954
      },
      {
        "published": false,
        "focalLengthMm": 152.45193245896655,
        "nominalFNumber": 6.1088
      },
      {
        "published": false,
        "focalLengthMm": 155.14068845835106,
        "nominalFNumber": 6.122199999999999
      },
      {
        "published": false,
        "focalLengthMm": 157.941156186404,
        "nominalFNumber": 6.1356
      },
      {
        "published": false,
        "focalLengthMm": 160.8634239042225,
        "nominalFNumber": 6.148999999999999
      },
      {
        "published": false,
        "focalLengthMm": 163.91914033549355,
        "nominalFNumber": 6.1624
      },
      {
        "published": false,
        "focalLengthMm": 167.1218739514238,
        "nominalFNumber": 6.1758
      },
      {
        "published": false,
        "focalLengthMm": 170.48758617700335,
        "nominalFNumber": 6.1892
      },
      {
        "published": false,
        "focalLengthMm": 174.035266059912,
        "nominalFNumber": 6.2025999999999994
      },
      {
        "published": false,
        "focalLengthMm": 177.78779934205858,
        "nominalFNumber": 6.215999999999999
      },
      {
        "published": false,
        "focalLengthMm": 181.77318734655796,
        "nominalFNumber": 6.2294
      },
      {
        "published": false,
        "focalLengthMm": 186.0263049705314,
        "nominalFNumber": 6.2428
      },
      {
        "published": false,
        "focalLengthMm": 190.591521524297,
        "nominalFNumber": 6.2562
      },
      {
        "published": false,
        "focalLengthMm": 195.52676665497106,
        "nominalFNumber": 6.2696
      },
      {
        "published": false,
        "focalLengthMm": 200.91015417046975,
        "nominalFNumber": 6.283
      },
      {
        "published": false,
        "focalLengthMm": 206.85145830478928,
        "nominalFNumber": 6.296399999999999
      },
      {
        "published": false,
        "focalLengthMm": 213.51365756094506,
        "nominalFNumber": 6.3098
      },
      {
        "published": false,
        "focalLengthMm": 221.15805447098296,
        "nominalFNumber": 6.3232
      },
      {
        "published": false,
        "focalLengthMm": 230.25517132985195,
        "nominalFNumber": 6.3366
      },
      {
        "focalLengthMm": 241.83,
        "nominalFNumber": 6.35,
        "label": "241.83 mm"
      }
    ],
    "apertureModel": "from-nominal-fno",
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 0.45,
    "description": "INFERRED CONTINUOUS ZOOM CANDIDATE, NOT FACTORY CAM. Source knots and fixed optics unchanged. Non-compensating gaps are piecewise-linear drivers; {\"5\":1,\"14\":-1} gives the source-group compensator gap signs, solved for the interpolated native image-plane residual. Near-focus deltas, when present, retained at native knots and interpolated; finite conjugates not newly certified. This candidate remains subject to full validation."
  },
  "gaps": {
    "5": {
      "label": "D5",
      "values": [
        [
          1.766,
          1.766
        ],
        [
          2.1539710980713496,
          2.1539710980713496
        ],
        [
          2.53812615410753,
          2.53812615410753
        ],
        [
          2.9185564863689426,
          2.9185564863689426
        ],
        [
          3.295350607684706,
          3.295350607684706
        ],
        [
          3.6685943335560434,
          3.6685943335560434
        ],
        [
          4.038370885320526,
          4.038370885320526
        ],
        [
          4.40476098864014,
          4.40476098864014
        ],
        [
          4.767842967558793,
          4.767842967558793
        ],
        [
          5.127692834360872,
          5.127692834360872
        ],
        [
          5.484384375447982,
          5.484384375447982
        ],
        [
          5.837989233334387,
          5.837989233334387
        ],
        [
          6.1885769855010055,
          6.1885769855010055
        ],
        [
          6.536215219084809,
          6.536215219084809
        ],
        [
          6.880969603010546,
          6.880969603010546
        ],
        [
          7.222903956753018,
          7.222903956753018
        ],
        [
          7.562080316238186,
          7.562080316238186
        ],
        [
          7.8985589969719605,
          7.8985589969719605
        ],
        [
          8.232398654532819,
          8.232398654532819
        ],
        [
          8.56365634255644,
          8.56365634255644
        ],
        [
          8.892387568333412,
          8.892387568333412
        ],
        [
          9.218646346135333,
          9.218646346135333
        ],
        [
          9.542485248376586,
          9.542485248376586
        ],
        [
          9.863955454715361,
          9.863955454715361
        ],
        [
          10.183106799190455,
          10.183106799190455
        ],
        [
          10.49998781548565,
          10.49998781548565
        ],
        [
          10.814645780409034,
          10.814645780409034
        ],
        [
          11.127126755669607,
          11.127126755669607
        ],
        [
          11.437475628029024,
          11.437475628029024
        ],
        [
          11.745736147903024,
          11.745736147903024
        ],
        [
          12.051950966482844,
          12.051950966482844
        ],
        [
          12.356161671442788,
          12.356161671442788
        ],
        [
          12.658408821297902,
          12.658408821297902
        ],
        [
          12.958731978471565,
          12.958731978471565
        ],
        [
          13.257169741130173,
          13.257169741130173
        ],
        [
          13.553759773839321,
          13.553759773839321
        ],
        [
          13.848538837092722,
          13.848538837092722
        ],
        [
          14.141542815763527,
          14.141542815763527
        ],
        [
          14.432806746524038,
          14.432806746524038
        ],
        [
          14.722364844278967,
          14.722364844278967
        ],
        [
          15.010250527653703,
          15.010250527653703
        ],
        [
          15.296496443578455,
          15.296496443578455
        ],
        [
          15.58113449100658,
          15.58113449100658
        ],
        [
          15.864195843803206,
          15.864195843803206
        ],
        [
          16.145710972839524,
          16.145710972839524
        ],
        [
          16.425709667325545,
          16.425709667325545
        ],
        [
          16.704221055413086,
          16.704221055413086
        ],
        [
          16.98127362409944,
          16.98127362409944
        ],
        [
          17.256895238460483,
          17.256895238460483
        ],
        [
          17.531113160240277,
          17.531113160240277
        ],
        [
          17.803954065824463,
          17.803954065824463
        ],
        [
          18.075444063621582,
          18.075444063621582
        ],
        [
          18.345608710876938,
          18.345608710876938
        ],
        [
          18.614473029941884,
          18.614473029941884
        ],
        [
          18.882061524020315,
          18.882061524020315
        ],
        [
          19.148398192413513,
          19.148398192413513
        ],
        [
          19.41350654528362,
          19.41350654528362
        ],
        [
          19.677409617954652,
          19.677409617954652
        ],
        [
          19.94012998476991,
          19.94012998476991
        ],
        [
          20.201689772522883,
          20.201689772522883
        ],
        [
          20.46211067347958,
          20.46211067347958
        ],
        [
          20.721413958007474,
          20.721413958007474
        ],
        [
          20.979620486827248,
          20.979620486827248
        ],
        [
          21.23675072290227,
          21.23675072290227
        ],
        [
          21.49282474298016,
          21.49282474298016
        ],
        [
          21.747862248799887,
          21.747862248799887
        ],
        [
          22.001882577978535,
          22.001882577978535
        ],
        [
          22.254904714589344,
          22.254904714589344
        ],
        [
          22.50694729944441,
          22.50694729944441
        ],
        [
          22.758028640093162,
          22.758028640093162
        ],
        [
          23.008166720548182,
          23.008166720548182
        ],
        [
          23.257379210749523,
          23.257379210749523
        ],
        [
          23.50568347577788,
          23.50568347577788
        ],
        [
          23.753096584826917,
          23.753096584826917
        ],
        [
          23.999635319944645,
          23.999635319944645
        ],
        [
          24.24531618455333,
          24.24531618455333
        ],
        [
          24.490155411757044,
          24.490155411757044
        ],
        [
          24.734168972446106,
          24.734168972446106
        ],
        [
          24.97737258320659,
          24.97737258320659
        ],
        [
          25.219781714043627,
          25.219781714043627
        ],
        [
          25.461411595926485,
          25.461411595926485
        ],
        [
          25.70227722816328,
          25.70227722816328
        ],
        [
          25.942393385612956,
          25.942393385612956
        ],
        [
          26.181774625742275,
          26.181774625742275
        ],
        [
          26.42043529553465,
          26.42043529553465
        ],
        [
          26.65838953825811,
          26.65838953825811
        ],
        [
          26.89565130009952,
          26.89565130009952
        ],
        [
          27.13223433667136,
          27.13223433667136
        ],
        [
          27.368152219398304,
          27.368152219398304
        ],
        [
          27.603418341789173,
          27.603418341789173
        ],
        [
          27.838045925601996,
          27.838045925601996
        ],
        [
          28.072048026920523,
          28.072048026920523
        ],
        [
          28.30543754205978,
          28.30543754205978
        ],
        [
          28.53822721355496,
          28.53822721355496
        ],
        [
          28.770429635867963,
          28.770429635867963
        ],
        [
          29.00205726113488,
          29.00205726113488
        ],
        [
          29.233122404813283,
          29.233122404813283
        ],
        [
          29.46363725126369,
          29.46363725126369
        ],
        [
          29.693613859272123,
          29.693613859272123
        ],
        [
          29.923064167518945,
          29.923064167518945
        ],
        [
          30.152,
          30.152
        ],
        [
          30.410211603433254,
          30.410211603433254
        ],
        [
          30.66826242060114,
          30.66826242060114
        ],
        [
          30.926161631290288,
          30.926161631290288
        ],
        [
          31.183918484478298,
          31.183918484478298
        ],
        [
          31.441542304561818,
          31.441542304561818
        ],
        [
          31.699042497801997,
          31.699042497801997
        ],
        [
          31.956428559003395,
          31.956428559003395
        ],
        [
          32.21371007844134,
          32.21371007844134
        ],
        [
          32.470896749055264,
          32.470896749055264
        ],
        [
          32.7279983739259,
          32.7279983739259
        ],
        [
          32.98502487405594,
          32.98502487405594
        ],
        [
          33.24198629647423,
          33.24198629647423
        ],
        [
          33.498892822661155,
          33.498892822661155
        ],
        [
          33.75575477744964,
          33.75575477744964
        ],
        [
          34.012582638138205,
          34.012582638138205
        ],
        [
          34.26938704418875,
          34.26938704418875
        ],
        [
          34.526178807303836,
          34.526178807303836
        ],
        [
          34.7829689220012,
          34.7829689220012
        ],
        [
          35.03976857670604,
          35.03976857670604
        ],
        [
          35.29658916539829,
          35.29658916539829
        ],
        [
          35.553442299854616,
          35.553442299854616
        ],
        [
          35.810339822527574,
          35.810339822527574
        ],
        [
          36.06729382010927,
          36.06729382010927
        ],
        [
          36.32431663782884,
          36.32431663782884
        ],
        [
          36.58142089453904,
          36.58142089453904
        ],
        [
          36.83861949865101,
          36.83861949865101
        ],
        [
          37.09592566498099,
          37.09592566498099
        ],
        [
          37.353352932579725,
          37.353352932579725
        ],
        [
          37.610915183620136,
          37.610915183620136
        ],
        [
          37.86862666342651,
          37.86862666342651
        ],
        [
          38.12650200173577,
          38.12650200173577
        ],
        [
          38.38455623529023,
          38.38455623529023
        ],
        [
          38.64280483186963,
          38.64280483186963
        ],
        [
          38.90126371588182,
          38.90126371588182
        ],
        [
          39.159949295641766,
          39.159949295641766
        ],
        [
          39.418878492483046,
          39.418878492483046
        ],
        [
          39.67806877185802,
          39.67806877185802
        ],
        [
          39.93753817660144,
          39.93753817660144
        ],
        [
          40.197305362548086,
          40.197305362548086
        ],
        [
          40.45738963671646,
          40.45738963671646
        ],
        [
          40.71781099829291,
          40.71781099829291
        ],
        [
          40.978590182674886,
          40.978590182674886
        ],
        [
          41.239748708862706,
          41.239748708862706
        ],
        [
          41.50130893051978,
          41.50130893051978
        ],
        [
          41.76329409105865,
          41.76329409105865
        ],
        [
          42.02572838315173,
          42.02572838315173
        ],
        [
          42.2886370131128,
          42.2886370131128
        ],
        [
          42.55204627064909,
          42.55204627064909
        ],
        [
          42.81598360454505,
          42.81598360454505
        ],
        [
          43.08047770490925,
          43.08047770490925
        ],
        [
          43.34555859269671,
          43.34555859269671
        ],
        [
          43.611257717311275,
          43.611257717311275
        ],
        [
          43.87760806319958,
          43.87760806319958
        ],
        [
          44.14464426647201,
          44.14464426647201
        ],
        [
          44.412402742728986,
          44.412402742728986
        ],
        [
          44.680921827437956,
          44.680921827437956
        ],
        [
          44.950241930400196,
          44.950241930400196
        ],
        [
          45.22040570607522,
          45.22040570607522
        ],
        [
          45.491458241796046,
          45.491458241796046
        ],
        [
          45.76344726622526,
          45.76344726622526
        ],
        [
          46.03642338077256,
          46.03642338077256
        ],
        [
          46.31044031713755,
          46.31044031713755
        ],
        [
          46.58555522466756,
          46.58555522466756
        ],
        [
          46.86182899185219,
          46.86182899185219
        ],
        [
          47.13932660703279,
          47.13932660703279
        ],
        [
          47.41811756432267,
          47.41811756432267
        ],
        [
          47.69827632184438,
          47.69827632184438
        ],
        [
          47.97988282074696,
          47.97988282074696
        ],
        [
          48.26302307512935,
          48.26302307512935
        ],
        [
          48.54778984504879,
          48.54778984504879
        ],
        [
          48.834283407339264,
          48.834283407339264
        ],
        [
          49.122612442146774,
          49.122612442146774
        ],
        [
          49.412895057089344,
          49.412895057089344
        ],
        [
          49.705259976016805,
          49.705259976016805
        ],
        [
          49.999847925816304,
          49.999847925816304
        ],
        [
          50.29681326303475,
          50.29681326303475
        ],
        [
          50.59632589290325,
          50.59632589290325
        ],
        [
          50.89857354752015,
          50.89857354752015
        ],
        [
          51.2037645087177,
          51.2037645087177
        ],
        [
          51.512130886264906,
          51.512130886264906
        ],
        [
          51.82393259610088,
          51.82393259610088
        ],
        [
          52.13946223001487,
          52.13946223001487
        ],
        [
          52.459051073217736,
          52.459051073217736
        ],
        [
          52.78307661816215,
          52.78307661816215
        ],
        [
          53.11197205509807,
          53.11197205509807
        ],
        [
          53.44623841336721,
          53.44623841336721
        ],
        [
          53.786460316812324,
          53.786460316812324
        ],
        [
          54.13332675952106,
          54.13332675952106
        ],
        [
          54.48765900373437,
          54.48765900373437
        ],
        [
          54.85044882718645,
          54.85044882718645
        ],
        [
          55.22291223040776,
          55.22291223040776
        ],
        [
          55.606566992597,
          55.606566992597
        ],
        [
          56.00334843432833,
          56.00334843432833
        ],
        [
          56.41578923105364,
          56.41578923105364
        ],
        [
          56.84731271230409,
          56.84731271230409
        ],
        [
          57.30274166155977,
          57.30274166155977
        ],
        [
          57.78925467478027,
          57.78925467478027
        ],
        [
          58.31839167209408,
          58.31839167209408
        ],
        [
          58.91098960927364,
          58.91098960927364
        ],
        [
          59.613,
          59.613
        ]
      ]
    },
    "14": {
      "label": "D14",
      "values": [
        [
          25.227,
          25.227
        ],
        [
          24.99045890192865,
          24.99045890192865
        ],
        [
          24.757733845892467,
          24.757733845892467
        ],
        [
          24.528733513631057,
          24.528733513631057
        ],
        [
          24.303369392315293,
          24.303369392315293
        ],
        [
          24.081555666443958,
          24.081555666443958
        ],
        [
          23.86320911467947,
          23.86320911467947
        ],
        [
          23.64824901135986,
          23.64824901135986
        ],
        [
          23.43659703244121,
          23.43659703244121
        ],
        [
          23.22817716563913,
          23.22817716563913
        ],
        [
          23.022915624552017,
          23.022915624552017
        ],
        [
          22.82074076666561,
          22.82074076666561
        ],
        [
          22.621583014498995,
          22.621583014498995
        ],
        [
          22.425374780915188,
          22.425374780915188
        ],
        [
          22.232050396989454,
          22.232050396989454
        ],
        [
          22.04154604324698,
          22.04154604324698
        ],
        [
          21.853799683761814,
          21.853799683761814
        ],
        [
          21.668751003028035,
          21.668751003028035
        ],
        [
          21.48634134546718,
          21.48634134546718
        ],
        [
          21.306513657443563,
          21.306513657443563
        ],
        [
          21.12921243166659,
          21.12921243166659
        ],
        [
          20.954383653864667,
          20.954383653864667
        ],
        [
          20.781974751623416,
          20.781974751623416
        ],
        [
          20.611934545284637,
          20.611934545284637
        ],
        [
          20.444213200809546,
          20.444213200809546
        ],
        [
          20.27876218451435,
          20.27876218451435
        ],
        [
          20.115534219590963,
          20.115534219590963
        ],
        [
          19.95448324433039,
          19.95448324433039
        ],
        [
          19.795564371970976,
          19.795564371970976
        ],
        [
          19.638733852096973,
          19.638733852096973
        ],
        [
          19.483949033517153,
          19.483949033517153
        ],
        [
          19.331168328557215,
          19.331168328557215
        ],
        [
          19.180351178702093,
          19.180351178702093
        ],
        [
          19.031458021528433,
          19.031458021528433
        ],
        [
          18.884450258869823,
          18.884450258869823
        ],
        [
          18.739290226160684,
          18.739290226160684
        ],
        [
          18.595941162907277,
          18.595941162907277
        ],
        [
          18.45436718423647,
          18.45436718423647
        ],
        [
          18.31453325347596,
          18.31453325347596
        ],
        [
          18.17640515572103,
          18.17640515572103
        ],
        [
          18.039949472346297,
          18.039949472346297
        ],
        [
          17.905133556421546,
          17.905133556421546
        ],
        [
          17.771925508993423,
          17.771925508993423
        ],
        [
          17.6402941561968,
          17.6402941561968
        ],
        [
          17.510209027160478,
          17.510209027160478
        ],
        [
          17.381640332674458,
          17.381640332674458
        ],
        [
          17.254558944586915,
          17.254558944586915
        ],
        [
          17.12893637590056,
          17.12893637590056
        ],
        [
          17.00474476153952,
          17.00474476153952
        ],
        [
          16.881956839759727,
          16.881956839759727
        ],
        [
          16.760545934175536,
          16.760545934175536
        ],
        [
          16.64048593637842,
          16.64048593637842
        ],
        [
          16.521751289123063,
          16.521751289123063
        ],
        [
          16.40431697005812,
          16.40431697005812
        ],
        [
          16.288158475979685,
          16.288158475979685
        ],
        [
          16.173251807586485,
          16.173251807586485
        ],
        [
          16.05957345471638,
          16.05957345471638
        ],
        [
          15.947100382045349,
          15.947100382045349
        ],
        [
          15.835810015230093,
          15.835810015230093
        ],
        [
          15.72568022747712,
          15.72568022747712
        ],
        [
          15.616689326520424,
          15.616689326520424
        ],
        [
          15.508816041992523,
          15.508816041992523
        ],
        [
          15.402039513172753,
          15.402039513172753
        ],
        [
          15.296339277097735,
          15.296339277097735
        ],
        [
          15.191695257019841,
          15.191695257019841
        ],
        [
          15.088087751200113,
          15.088087751200113
        ],
        [
          14.985497422021465,
          14.985497422021465
        ],
        [
          14.883905285410655,
          14.883905285410655
        ],
        [
          14.783292700555586,
          14.783292700555586
        ],
        [
          14.68364135990684,
          14.68364135990684
        ],
        [
          14.584933279451823,
          14.584933279451823
        ],
        [
          14.487150789250478,
          14.487150789250478
        ],
        [
          14.390276524222124,
          14.390276524222124
        ],
        [
          14.294293415173083,
          14.294293415173083
        ],
        [
          14.199184680055358,
          14.199184680055358
        ],
        [
          14.10493381544667,
          14.10493381544667
        ],
        [
          14.011524588242954,
          14.011524588242954
        ],
        [
          13.918941027553894,
          13.918941027553894
        ],
        [
          13.827167416793408,
          13.827167416793408
        ],
        [
          13.736188285956374,
          13.736188285956374
        ],
        [
          13.645988404073517,
          13.645988404073517
        ],
        [
          13.55655277183672,
          13.55655277183672
        ],
        [
          13.467866614387043,
          13.467866614387043
        ],
        [
          13.379915374257727,
          13.379915374257727
        ],
        [
          13.292684704465351,
          13.292684704465351
        ],
        [
          13.206160461741892,
          13.206160461741892
        ],
        [
          13.120328699900485,
          13.120328699900485
        ],
        [
          13.03517566332864,
          13.03517566332864
        ],
        [
          12.9506877806017,
          12.9506877806017
        ],
        [
          12.866851658210829,
          12.866851658210829
        ],
        [
          12.783654074398003,
          12.783654074398003
        ],
        [
          12.701081973079479,
          12.701081973079479
        ],
        [
          12.619122457940218,
          12.619122457940218
        ],
        [
          12.537762786445036,
          12.537762786445036
        ],
        [
          12.45699036413204,
          12.45699036413204
        ],
        [
          12.376792738865124,
          12.376792738865124
        ],
        [
          12.29715759518672,
          12.29715759518672
        ],
        [
          12.218072748736313,
          12.218072748736313
        ],
        [
          12.139526140727877,
          12.139526140727877
        ],
        [
          12.061505832481057,
          12.061505832481057
        ],
        [
          11.984,
          11.984
        ],
        [
          11.914668396566748,
          11.914668396566748
        ],
        [
          11.845497579398863,
          11.845497579398863
        ],
        [
          11.776478368709716,
          11.776478368709716
        ],
        [
          11.707601515521704,
          11.707601515521704
        ],
        [
          11.638857695438187,
          11.638857695438187
        ],
        [
          11.570237502198006,
          11.570237502198006
        ],
        [
          11.501731440996602,
          11.501731440996602
        ],
        [
          11.433329921558668,
          11.433329921558668
        ],
        [
          11.36502325094474,
          11.36502325094474
        ],
        [
          11.296801626074103,
          11.296801626074103
        ],
        [
          11.228655125944066,
          11.228655125944066
        ],
        [
          11.16057370352577,
          11.16057370352577
        ],
        [
          11.092547177338844,
          11.092547177338844
        ],
        [
          11.024565222550358,
          11.024565222550358
        ],
        [
          10.956617361861802,
          10.956617361861802
        ],
        [
          10.888692955811255,
          10.888692955811255
        ],
        [
          10.820781192696169,
          10.820781192696169
        ],
        [
          10.752871077998796,
          10.752871077998796
        ],
        [
          10.684951423293962,
          10.684951423293962
        ],
        [
          10.617010834601711,
          10.617010834601711
        ],
        [
          10.54903770014538,
          10.54903770014538
        ],
        [
          10.481020177472429,
          10.481020177472429
        ],
        [
          10.412946179890724,
          10.412946179890724
        ],
        [
          10.344803362171161,
          10.344803362171161
        ],
        [
          10.276579105460963,
          10.276579105460963
        ],
        [
          10.20826050134899,
          10.20826050134899
        ],
        [
          10.13983433501901,
          10.13983433501901
        ],
        [
          10.07128706742028,
          10.07128706742028
        ],
        [
          10.002604816379865,
          10.002604816379865
        ],
        [
          9.933773336573495,
          9.933773336573495
        ],
        [
          9.864777998264232,
          9.864777998264232
        ],
        [
          9.795603764709771,
          9.795603764709771
        ],
        [
          9.72623516813037,
          9.72623516813037
        ],
        [
          9.656656284118185,
          9.656656284118185
        ],
        [
          9.586850704358234,
          9.586850704358234
        ],
        [
          9.51680150751696,
          9.51680150751696
        ],
        [
          9.446491228141976,
          9.446491228141976
        ],
        [
          9.37590182339855,
          9.37590182339855
        ],
        [
          9.305014637451913,
          9.305014637451913
        ],
        [
          9.233810363283542,
          9.233810363283542
        ],
        [
          9.16226900170709,
          9.16226900170709
        ],
        [
          9.090369817325115,
          9.090369817325115
        ],
        [
          9.018091291137287,
          9.018091291137287
        ],
        [
          8.945411069480226,
          8.945411069480226
        ],
        [
          8.872305908941348,
          8.872305908941348
        ],
        [
          8.798751616848268,
          8.798751616848268
        ],
        [
          8.724722986887203,
          8.724722986887203
        ],
        [
          8.6501937293509,
          8.6501937293509
        ],
        [
          8.575136395454944,
          8.575136395454944
        ],
        [
          8.49952229509075,
          8.49952229509075
        ],
        [
          8.423321407303288,
          8.423321407303288
        ],
        [
          8.346502282688729,
          8.346502282688729
        ],
        [
          8.269031936800422,
          8.269031936800422
        ],
        [
          8.190875733527996,
          8.190875733527996
        ],
        [
          8.111997257271012,
          8.111997257271012
        ],
        [
          8.032358172562054,
          8.032358172562054
        ],
        [
          7.951918069599802,
          7.951918069599802
        ],
        [
          7.8706342939247875,
          7.8706342939247875
        ],
        [
          7.788461758203958,
          7.788461758203958
        ],
        [
          7.705352733774746,
          7.705352733774746
        ],
        [
          7.621256619227438,
          7.621256619227438
        ],
        [
          7.536119682862459,
          7.536119682862459
        ],
        [
          7.449884775332439,
          7.449884775332439
        ],
        [
          7.362491008147809,
          7.362491008147809
        ],
        [
          7.2738733929672055,
          7.2738733929672055
        ],
        [
          7.183962435677327,
          7.183962435677327
        ],
        [
          7.092683678155615,
          7.092683678155615
        ],
        [
          6.99995717925304,
          6.99995717925304
        ],
        [
          6.90569692487065,
          6.90569692487065
        ],
        [
          6.80981015495121,
          6.80981015495121
        ],
        [
          6.71219659266074,
          6.71219659266074
        ],
        [
          6.612747557853222,
          6.612747557853222
        ],
        [
          6.511344942910657,
          6.511344942910657
        ],
        [
          6.4078600239831935,
          6.4078600239831935
        ],
        [
          6.302152074183694,
          6.302152074183694
        ],
        [
          6.194066736965255,
          6.194066736965255
        ],
        [
          6.083434107096746,
          6.083434107096746
        ],
        [
          5.970066452479851,
          5.970066452479851
        ],
        [
          5.853755491282305,
          5.853755491282305
        ],
        [
          5.734269113735095,
          5.734269113735095
        ],
        [
          5.6113474038991225,
          5.6113474038991225
        ],
        [
          5.484697769985129,
          5.484697769985129
        ],
        [
          5.353988926782262,
          5.353988926782262
        ],
        [
          5.218843381837855,
          5.218843381837855
        ],
        [
          5.078827944901935,
          5.078827944901935
        ],
        [
          4.9334415866327905,
          4.9334415866327905
        ],
        [
          4.782099683187674,
          4.782099683187674
        ],
        [
          4.6241132404789305,
          4.6241132404789305
        ],
        [
          4.458660996265629,
          4.458660996265629
        ],
        [
          4.284751172813546,
          4.284751172813546
        ],
        [
          4.1011677695922435,
          4.1011677695922435
        ],
        [
          3.9063930074029916,
          3.9063930074029916
        ],
        [
          3.69849156567167,
          3.69849156567167
        ],
        [
          3.474930768946359,
          3.474930768946359
        ],
        [
          3.23228728769591,
          3.23228728769591
        ],
        [
          2.9657383384402243,
          2.9657383384402243
        ],
        [
          2.6681053252197335,
          2.6681053252197335
        ],
        [
          2.327848327905914,
          2.327848327905914
        ],
        [
          1.924130390726362,
          1.924130390726362
        ],
        [
          1.411,
          1.411
        ]
      ]
    },
    "24": {
      "label": "D24",
      "values": [
        [
          7.782,
          7.782
        ],
        [
          7.74186,
          7.74186
        ],
        [
          7.70172,
          7.70172
        ],
        [
          7.66158,
          7.66158
        ],
        [
          7.62144,
          7.62144
        ],
        [
          7.5813,
          7.5813
        ],
        [
          7.54116,
          7.54116
        ],
        [
          7.501019999999999,
          7.501019999999999
        ],
        [
          7.46088,
          7.46088
        ],
        [
          7.42074,
          7.42074
        ],
        [
          7.3806,
          7.3806
        ],
        [
          7.34046,
          7.34046
        ],
        [
          7.30032,
          7.30032
        ],
        [
          7.26018,
          7.26018
        ],
        [
          7.22004,
          7.22004
        ],
        [
          7.1799,
          7.1799
        ],
        [
          7.13976,
          7.13976
        ],
        [
          7.09962,
          7.09962
        ],
        [
          7.059480000000001,
          7.059480000000001
        ],
        [
          7.01934,
          7.01934
        ],
        [
          6.9792000000000005,
          6.9792000000000005
        ],
        [
          6.93906,
          6.93906
        ],
        [
          6.89892,
          6.89892
        ],
        [
          6.85878,
          6.85878
        ],
        [
          6.81864,
          6.81864
        ],
        [
          6.7785,
          6.7785
        ],
        [
          6.73836,
          6.73836
        ],
        [
          6.69822,
          6.69822
        ],
        [
          6.65808,
          6.65808
        ],
        [
          6.61794,
          6.61794
        ],
        [
          6.5778,
          6.5778
        ],
        [
          6.53766,
          6.53766
        ],
        [
          6.497519999999999,
          6.497519999999999
        ],
        [
          6.457379999999999,
          6.457379999999999
        ],
        [
          6.41724,
          6.41724
        ],
        [
          6.3770999999999995,
          6.3770999999999995
        ],
        [
          6.3369599999999995,
          6.3369599999999995
        ],
        [
          6.29682,
          6.29682
        ],
        [
          6.25668,
          6.25668
        ],
        [
          6.21654,
          6.21654
        ],
        [
          6.1764,
          6.1764
        ],
        [
          6.136260000000001,
          6.136260000000001
        ],
        [
          6.096120000000001,
          6.096120000000001
        ],
        [
          6.055980000000001,
          6.055980000000001
        ],
        [
          6.01584,
          6.01584
        ],
        [
          5.9757,
          5.9757
        ],
        [
          5.93556,
          5.93556
        ],
        [
          5.89542,
          5.89542
        ],
        [
          5.85528,
          5.85528
        ],
        [
          5.8151399999999995,
          5.8151399999999995
        ],
        [
          5.775,
          5.775
        ],
        [
          5.734859999999999,
          5.734859999999999
        ],
        [
          5.69472,
          5.69472
        ],
        [
          5.65458,
          5.65458
        ],
        [
          5.61444,
          5.61444
        ],
        [
          5.574299999999999,
          5.574299999999999
        ],
        [
          5.53416,
          5.53416
        ],
        [
          5.494020000000001,
          5.494020000000001
        ],
        [
          5.45388,
          5.45388
        ],
        [
          5.413740000000001,
          5.413740000000001
        ],
        [
          5.3736,
          5.3736
        ],
        [
          5.33346,
          5.33346
        ],
        [
          5.29332,
          5.29332
        ],
        [
          5.25318,
          5.25318
        ],
        [
          5.2130399999999995,
          5.2130399999999995
        ],
        [
          5.1729,
          5.1729
        ],
        [
          5.132759999999999,
          5.132759999999999
        ],
        [
          5.09262,
          5.09262
        ],
        [
          5.052479999999999,
          5.052479999999999
        ],
        [
          5.01234,
          5.01234
        ],
        [
          4.9722,
          4.9722
        ],
        [
          4.93206,
          4.93206
        ],
        [
          4.89192,
          4.89192
        ],
        [
          4.85178,
          4.85178
        ],
        [
          4.81164,
          4.81164
        ],
        [
          4.7715,
          4.7715
        ],
        [
          4.7313600000000005,
          4.7313600000000005
        ],
        [
          4.6912199999999995,
          4.6912199999999995
        ],
        [
          4.651079999999999,
          4.651079999999999
        ],
        [
          4.610939999999999,
          4.610939999999999
        ],
        [
          4.5708,
          4.5708
        ],
        [
          4.530659999999999,
          4.530659999999999
        ],
        [
          4.49052,
          4.49052
        ],
        [
          4.45038,
          4.45038
        ],
        [
          4.41024,
          4.41024
        ],
        [
          4.3701,
          4.3701
        ],
        [
          4.32996,
          4.32996
        ],
        [
          4.28982,
          4.28982
        ],
        [
          4.24968,
          4.24968
        ],
        [
          4.20954,
          4.20954
        ],
        [
          4.1693999999999996,
          4.1693999999999996
        ],
        [
          4.1292599999999995,
          4.1292599999999995
        ],
        [
          4.089119999999999,
          4.089119999999999
        ],
        [
          4.048979999999999,
          4.048979999999999
        ],
        [
          4.00884,
          4.00884
        ],
        [
          3.9687,
          3.9687
        ],
        [
          3.92856,
          3.92856
        ],
        [
          3.8884199999999995,
          3.8884199999999995
        ],
        [
          3.84828,
          3.84828
        ],
        [
          3.80814,
          3.80814
        ],
        [
          3.768,
          3.768
        ],
        [
          3.75014,
          3.75014
        ],
        [
          3.73228,
          3.73228
        ],
        [
          3.7144199999999996,
          3.7144199999999996
        ],
        [
          3.69656,
          3.69656
        ],
        [
          3.6786999999999996,
          3.6786999999999996
        ],
        [
          3.66084,
          3.66084
        ],
        [
          3.6429799999999997,
          3.6429799999999997
        ],
        [
          3.6251199999999995,
          3.6251199999999995
        ],
        [
          3.6072599999999997,
          3.6072599999999997
        ],
        [
          3.5894,
          3.5894
        ],
        [
          3.5715399999999997,
          3.5715399999999997
        ],
        [
          3.5536799999999995,
          3.5536799999999995
        ],
        [
          3.53582,
          3.53582
        ],
        [
          3.51796,
          3.51796
        ],
        [
          3.5001,
          3.5001
        ],
        [
          3.48224,
          3.48224
        ],
        [
          3.46438,
          3.46438
        ],
        [
          3.44652,
          3.44652
        ],
        [
          3.42866,
          3.42866
        ],
        [
          3.4108,
          3.4108
        ],
        [
          3.39294,
          3.39294
        ],
        [
          3.3750799999999996,
          3.3750799999999996
        ],
        [
          3.35722,
          3.35722
        ],
        [
          3.33936,
          3.33936
        ],
        [
          3.3214999999999995,
          3.3214999999999995
        ],
        [
          3.3036399999999997,
          3.3036399999999997
        ],
        [
          3.28578,
          3.28578
        ],
        [
          3.2679199999999997,
          3.2679199999999997
        ],
        [
          3.25006,
          3.25006
        ],
        [
          3.2321999999999997,
          3.2321999999999997
        ],
        [
          3.2143399999999995,
          3.2143399999999995
        ],
        [
          3.1964799999999998,
          3.1964799999999998
        ],
        [
          3.1786199999999996,
          3.1786199999999996
        ],
        [
          3.16076,
          3.16076
        ],
        [
          3.1428999999999996,
          3.1428999999999996
        ],
        [
          3.1250399999999994,
          3.1250399999999994
        ],
        [
          3.1071799999999996,
          3.1071799999999996
        ],
        [
          3.0893200000000003,
          3.0893200000000003
        ],
        [
          3.07146,
          3.07146
        ],
        [
          3.0536,
          3.0536
        ],
        [
          3.03574,
          3.03574
        ],
        [
          3.01788,
          3.01788
        ],
        [
          3.00002,
          3.00002
        ],
        [
          2.98216,
          2.98216
        ],
        [
          2.9642999999999997,
          2.9642999999999997
        ],
        [
          2.94644,
          2.94644
        ],
        [
          2.9285799999999997,
          2.9285799999999997
        ],
        [
          2.91072,
          2.91072
        ],
        [
          2.8928599999999998,
          2.8928599999999998
        ],
        [
          2.875,
          2.875
        ],
        [
          2.8571400000000002,
          2.8571400000000002
        ],
        [
          2.8392799999999996,
          2.8392799999999996
        ],
        [
          2.82142,
          2.82142
        ],
        [
          2.80356,
          2.80356
        ],
        [
          2.7857,
          2.7857
        ],
        [
          2.7678399999999996,
          2.7678399999999996
        ],
        [
          2.74998,
          2.74998
        ],
        [
          2.73212,
          2.73212
        ],
        [
          2.7142599999999995,
          2.7142599999999995
        ],
        [
          2.6963999999999997,
          2.6963999999999997
        ],
        [
          2.67854,
          2.67854
        ],
        [
          2.6606799999999997,
          2.6606799999999997
        ],
        [
          2.6428200000000004,
          2.6428200000000004
        ],
        [
          2.62496,
          2.62496
        ],
        [
          2.6071,
          2.6071
        ],
        [
          2.58924,
          2.58924
        ],
        [
          2.57138,
          2.57138
        ],
        [
          2.55352,
          2.55352
        ],
        [
          2.53566,
          2.53566
        ],
        [
          2.5178000000000003,
          2.5178000000000003
        ],
        [
          2.49994,
          2.49994
        ],
        [
          2.48208,
          2.48208
        ],
        [
          2.46422,
          2.46422
        ],
        [
          2.44636,
          2.44636
        ],
        [
          2.4284999999999997,
          2.4284999999999997
        ],
        [
          2.41064,
          2.41064
        ],
        [
          2.39278,
          2.39278
        ],
        [
          2.37492,
          2.37492
        ],
        [
          2.3570599999999997,
          2.3570599999999997
        ],
        [
          2.3392,
          2.3392
        ],
        [
          2.3213399999999997,
          2.3213399999999997
        ],
        [
          2.3034799999999995,
          2.3034799999999995
        ],
        [
          2.2856199999999998,
          2.2856199999999998
        ],
        [
          2.26776,
          2.26776
        ],
        [
          2.2499,
          2.2499
        ],
        [
          2.23204,
          2.23204
        ],
        [
          2.21418,
          2.21418
        ],
        [
          2.19632,
          2.19632
        ],
        [
          2.1784600000000003,
          2.1784600000000003
        ],
        [
          2.1606,
          2.1606
        ],
        [
          2.14274,
          2.14274
        ],
        [
          2.12488,
          2.12488
        ],
        [
          2.1070200000000003,
          2.1070200000000003
        ],
        [
          2.08916,
          2.08916
        ],
        [
          2.0713,
          2.0713
        ],
        [
          2.05344,
          2.05344
        ],
        [
          2.03558,
          2.03558
        ],
        [
          2.0177199999999997,
          2.0177199999999997
        ],
        [
          1.99986,
          1.99986
        ],
        [
          1.982,
          1.982
        ]
      ]
    },
    "32": {
      "label": "D32",
      "values": [
        [
          39.583,
          39.583
        ],
        [
          39.8593,
          39.8593
        ],
        [
          40.1356,
          40.1356
        ],
        [
          40.411899999999996,
          40.411899999999996
        ],
        [
          40.688199999999995,
          40.688199999999995
        ],
        [
          40.964499999999994,
          40.964499999999994
        ],
        [
          41.2408,
          41.2408
        ],
        [
          41.51709999999999,
          41.51709999999999
        ],
        [
          41.7934,
          41.7934
        ],
        [
          42.0697,
          42.0697
        ],
        [
          42.346,
          42.346
        ],
        [
          42.6223,
          42.6223
        ],
        [
          42.898599999999995,
          42.898599999999995
        ],
        [
          43.1749,
          43.1749
        ],
        [
          43.4512,
          43.4512
        ],
        [
          43.7275,
          43.7275
        ],
        [
          44.0038,
          44.0038
        ],
        [
          44.2801,
          44.2801
        ],
        [
          44.556400000000004,
          44.556400000000004
        ],
        [
          44.8327,
          44.8327
        ],
        [
          45.108999999999995,
          45.108999999999995
        ],
        [
          45.3853,
          45.3853
        ],
        [
          45.6616,
          45.6616
        ],
        [
          45.9379,
          45.9379
        ],
        [
          46.2142,
          46.2142
        ],
        [
          46.4905,
          46.4905
        ],
        [
          46.766799999999996,
          46.766799999999996
        ],
        [
          47.043099999999995,
          47.043099999999995
        ],
        [
          47.3194,
          47.3194
        ],
        [
          47.595699999999994,
          47.595699999999994
        ],
        [
          47.872,
          47.872
        ],
        [
          48.14829999999999,
          48.14829999999999
        ],
        [
          48.4246,
          48.4246
        ],
        [
          48.7009,
          48.7009
        ],
        [
          48.977199999999996,
          48.977199999999996
        ],
        [
          49.2535,
          49.2535
        ],
        [
          49.529799999999994,
          49.529799999999994
        ],
        [
          49.8061,
          49.8061
        ],
        [
          50.08239999999999,
          50.08239999999999
        ],
        [
          50.3587,
          50.3587
        ],
        [
          50.63499999999999,
          50.63499999999999
        ],
        [
          50.9113,
          50.9113
        ],
        [
          51.187599999999996,
          51.187599999999996
        ],
        [
          51.463899999999995,
          51.463899999999995
        ],
        [
          51.7402,
          51.7402
        ],
        [
          52.01649999999999,
          52.01649999999999
        ],
        [
          52.2928,
          52.2928
        ],
        [
          52.56909999999999,
          52.56909999999999
        ],
        [
          52.8454,
          52.8454
        ],
        [
          53.12169999999999,
          53.12169999999999
        ],
        [
          53.397999999999996,
          53.397999999999996
        ],
        [
          53.6743,
          53.6743
        ],
        [
          53.950599999999994,
          53.950599999999994
        ],
        [
          54.2269,
          54.2269
        ],
        [
          54.5032,
          54.5032
        ],
        [
          54.7795,
          54.7795
        ],
        [
          55.0558,
          55.0558
        ],
        [
          55.3321,
          55.3321
        ],
        [
          55.60839999999999,
          55.60839999999999
        ],
        [
          55.884699999999995,
          55.884699999999995
        ],
        [
          56.160999999999994,
          56.160999999999994
        ],
        [
          56.43729999999999,
          56.43729999999999
        ],
        [
          56.71359999999999,
          56.71359999999999
        ],
        [
          56.9899,
          56.9899
        ],
        [
          57.2662,
          57.2662
        ],
        [
          57.5425,
          57.5425
        ],
        [
          57.818799999999996,
          57.818799999999996
        ],
        [
          58.0951,
          58.0951
        ],
        [
          58.371399999999994,
          58.371399999999994
        ],
        [
          58.64769999999999,
          58.64769999999999
        ],
        [
          58.924,
          58.924
        ],
        [
          59.20029999999999,
          59.20029999999999
        ],
        [
          59.47659999999999,
          59.47659999999999
        ],
        [
          59.7529,
          59.7529
        ],
        [
          60.02919999999999,
          60.02919999999999
        ],
        [
          60.305499999999995,
          60.305499999999995
        ],
        [
          60.5818,
          60.5818
        ],
        [
          60.85809999999999,
          60.85809999999999
        ],
        [
          61.1344,
          61.1344
        ],
        [
          61.4107,
          61.4107
        ],
        [
          61.68699999999999,
          61.68699999999999
        ],
        [
          61.9633,
          61.9633
        ],
        [
          62.239599999999996,
          62.239599999999996
        ],
        [
          62.51589999999999,
          62.51589999999999
        ],
        [
          62.792199999999994,
          62.792199999999994
        ],
        [
          63.06849999999999,
          63.06849999999999
        ],
        [
          63.34479999999999,
          63.34479999999999
        ],
        [
          63.62109999999999,
          63.62109999999999
        ],
        [
          63.8974,
          63.8974
        ],
        [
          64.1737,
          64.1737
        ],
        [
          64.44999999999999,
          64.44999999999999
        ],
        [
          64.7263,
          64.7263
        ],
        [
          65.0026,
          65.0026
        ],
        [
          65.2789,
          65.2789
        ],
        [
          65.5552,
          65.5552
        ],
        [
          65.83149999999999,
          65.83149999999999
        ],
        [
          66.1078,
          66.1078
        ],
        [
          66.38409999999999,
          66.38409999999999
        ],
        [
          66.6604,
          66.6604
        ],
        [
          66.9367,
          66.9367
        ],
        [
          67.213,
          67.213
        ],
        [
          67.43471,
          67.43471
        ],
        [
          67.65641999999998,
          67.65641999999998
        ],
        [
          67.87813,
          67.87813
        ],
        [
          68.09984,
          68.09984
        ],
        [
          68.32155,
          68.32155
        ],
        [
          68.54326,
          68.54326
        ],
        [
          68.76496999999999,
          68.76496999999999
        ],
        [
          68.98667999999999,
          68.98667999999999
        ],
        [
          69.20839,
          69.20839
        ],
        [
          69.4301,
          69.4301
        ],
        [
          69.65181,
          69.65181
        ],
        [
          69.87352,
          69.87352
        ],
        [
          70.09522999999999,
          70.09522999999999
        ],
        [
          70.31693999999999,
          70.31693999999999
        ],
        [
          70.53864999999999,
          70.53864999999999
        ],
        [
          70.76035999999999,
          70.76035999999999
        ],
        [
          70.98207,
          70.98207
        ],
        [
          71.20378,
          71.20378
        ],
        [
          71.42549,
          71.42549
        ],
        [
          71.6472,
          71.6472
        ],
        [
          71.86891,
          71.86891
        ],
        [
          72.09062,
          72.09062
        ],
        [
          72.31232999999999,
          72.31232999999999
        ],
        [
          72.53404,
          72.53404
        ],
        [
          72.75574999999999,
          72.75574999999999
        ],
        [
          72.97746,
          72.97746
        ],
        [
          73.19917,
          73.19917
        ],
        [
          73.42088,
          73.42088
        ],
        [
          73.64259,
          73.64259
        ],
        [
          73.8643,
          73.8643
        ],
        [
          74.08601,
          74.08601
        ],
        [
          74.30771999999999,
          74.30771999999999
        ],
        [
          74.52943,
          74.52943
        ],
        [
          74.75113999999999,
          74.75113999999999
        ],
        [
          74.97285,
          74.97285
        ],
        [
          75.19456,
          75.19456
        ],
        [
          75.41627,
          75.41627
        ],
        [
          75.63798,
          75.63798
        ],
        [
          75.85969,
          75.85969
        ],
        [
          76.0814,
          76.0814
        ],
        [
          76.30311,
          76.30311
        ],
        [
          76.52481999999999,
          76.52481999999999
        ],
        [
          76.74653,
          76.74653
        ],
        [
          76.96824,
          76.96824
        ],
        [
          77.18995,
          77.18995
        ],
        [
          77.41166,
          77.41166
        ],
        [
          77.63337,
          77.63337
        ],
        [
          77.85507999999999,
          77.85507999999999
        ],
        [
          78.07679,
          78.07679
        ],
        [
          78.29849999999999,
          78.29849999999999
        ],
        [
          78.52020999999999,
          78.52020999999999
        ],
        [
          78.74192,
          78.74192
        ],
        [
          78.96363,
          78.96363
        ],
        [
          79.18534,
          79.18534
        ],
        [
          79.40705,
          79.40705
        ],
        [
          79.62876,
          79.62876
        ],
        [
          79.85047,
          79.85047
        ],
        [
          80.07218,
          80.07218
        ],
        [
          80.29389,
          80.29389
        ],
        [
          80.5156,
          80.5156
        ],
        [
          80.73731,
          80.73731
        ],
        [
          80.95902000000001,
          80.95902000000001
        ],
        [
          81.18073,
          81.18073
        ],
        [
          81.40244,
          81.40244
        ],
        [
          81.62415,
          81.62415
        ],
        [
          81.84585999999999,
          81.84585999999999
        ],
        [
          82.06757,
          82.06757
        ],
        [
          82.28927999999999,
          82.28927999999999
        ],
        [
          82.51098999999999,
          82.51098999999999
        ],
        [
          82.7327,
          82.7327
        ],
        [
          82.95441,
          82.95441
        ],
        [
          83.17612,
          83.17612
        ],
        [
          83.39783,
          83.39783
        ],
        [
          83.61954,
          83.61954
        ],
        [
          83.84125,
          83.84125
        ],
        [
          84.06295999999999,
          84.06295999999999
        ],
        [
          84.28467,
          84.28467
        ],
        [
          84.50638000000001,
          84.50638000000001
        ],
        [
          84.72809,
          84.72809
        ],
        [
          84.9498,
          84.9498
        ],
        [
          85.17151000000001,
          85.17151000000001
        ],
        [
          85.39322,
          85.39322
        ],
        [
          85.61493,
          85.61493
        ],
        [
          85.83663999999999,
          85.83663999999999
        ],
        [
          86.05835,
          86.05835
        ],
        [
          86.28006,
          86.28006
        ],
        [
          86.50177,
          86.50177
        ],
        [
          86.72348,
          86.72348
        ],
        [
          86.94519,
          86.94519
        ],
        [
          87.1669,
          87.1669
        ],
        [
          87.38861,
          87.38861
        ],
        [
          87.61032,
          87.61032
        ],
        [
          87.83202999999999,
          87.83202999999999
        ],
        [
          88.05374,
          88.05374
        ],
        [
          88.27545,
          88.27545
        ],
        [
          88.49716,
          88.49716
        ],
        [
          88.71887,
          88.71887
        ],
        [
          88.94058000000001,
          88.94058000000001
        ],
        [
          89.16229,
          89.16229
        ],
        [
          89.384,
          89.384
        ]
      ]
    }
  },
  "aperture": {
    "fStops": [
      3.47,
      4,
      5.01,
      5.6,
      6.35,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22,
    "blades": 7
  },
  "groups": [
    {
      "text": "LG1",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "LG2",
      "fromSurface": "6A",
      "toSurface": "14"
    },
    {
      "text": "LG3",
      "fromSurface": "16",
      "toSurface": "24"
    },
    {
      "text": "LG4",
      "fromSurface": "25A",
      "toSurface": "32"
    }
  ],
  "layout": {
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
