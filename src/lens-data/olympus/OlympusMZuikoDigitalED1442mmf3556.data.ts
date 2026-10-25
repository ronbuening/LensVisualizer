import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-mzuiko-digital-ed-14-42mm-f35-56",
  "maker": "Olympus",
  "name": "OLYMPUS M.ZUIKO DIGITAL ED 14-42mm f/3.5-5.6",
  "subtitle": "JP 2010-186010 A — Numerical Example 1",
  "catalog": {
    "lensMounts": [
      "micro-four-thirds"
    ],
    "imageFormat": "four-thirds",
    "imageCircleMm": 22.9,
    "specs": [
      "9 ELEMENTS / 8 GROUPS",
      "DESIGN f = 14.29-41.19 mm",
      "DESIGN F/3.63-5.76",
      "4 ASPHERICAL SURFACES / 2 ELEMENTS",
      "1 ED / 1 HR ELEMENT"
    ],
    "elementCount": 9,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": [
        14,
        42
      ],
      "design": [
        14.29,
        41.19
      ]
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.63
    }
  },
  "source": {
    "patentNumber": "JP 2010-186010 A",
    "example": { "label": "Numerical Example 1", "id": "1" },
    "patentYear": 2010,
    "authors": [
      "Yasuharu Yamada",
      "Takeshi Hosoya"
    ],
    "assignees": [
      "Olympus Imaging Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "focalLengthMm": -21.639763838755105,
      "glass": "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L11"
    },
    {
      "id": 2,
      "name": "L12",
      "label": "Element 2",
      "type": "Aspherical Negative Meniscus",
      "nd": 1.52542,
      "vd": 55.78,
      "focalLengthMm": -58.67273621458309,
      "glass": "Unmatched (optical plastic, printed nd 1.52542 / νd 55.78; polymer unpublished)",
      "diagramLabel": "L12"
    },
    {
      "id": 3,
      "name": "L13",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "focalLengthMm": 54.926922872691904,
      "glass": "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L13"
    },
    {
      "id": 4,
      "name": "L21",
      "label": "Element 4",
      "type": "Plano-Convex Positive",
      "nd": 1.83481,
      "vd": 42.71,
      "focalLengthMm": 25.43213425809466,
      "glass": "S-LAH55 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L21"
    },
    {
      "id": 5,
      "name": "L22",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.54,
      "focalLengthMm": 19.963449311075887,
      "glass": "S-FPL51 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "OHARA S-FPL51 coordinate match (νd 81.54), a fluorophosphate ED glass; Olympus lists one ED element, cemented to the HR element that follows.",
      "diagramLabel": "L22",
      "cemented": "L22 + L23"
    },
    {
      "id": 6,
      "name": "L23",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.90366,
      "vd": 31.32,
      "focalLengthMm": -10.450922563072584,
      "glass": "TAFD25 (HOYA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L23",
      "cemented": "L22 + L23"
    },
    {
      "id": 7,
      "name": "L24",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.70154,
      "vd": 41.24,
      "focalLengthMm": 45.386577118549035,
      "glass": "S-BAH27 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L24"
    },
    {
      "id": 8,
      "name": "L25",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.51823,
      "vd": 58.9,
      "focalLengthMm": 55.19778960378632,
      "glass": "S-NSL3 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L25"
    },
    {
      "id": 9,
      "name": "L3",
      "label": "Element 9",
      "type": "Aspherical Positive Meniscus",
      "nd": 1.52542,
      "vd": 55.78,
      "focalLengthMm": 489.85113733436145,
      "glass": "Unmatched (optical plastic, printed nd 1.52542 / νd 55.78; polymer unpublished)",
      "diagramLabel": "L3"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 622.057,
      "d": 1.95,
      "sd": 14.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 16.257,
      "d": 1.163,
      "sd": 12.6
    },
    {
      "label": "3A",
      "R": 24.068,
      "d": 2,
      "sd": 12.2,
      "medium": 2,
      "asphere": {
        "K": 2.0761,
        "A4": 0.000094881,
        "A6": -0.0000010061,
        "A8": 5.5441e-9,
        "A10": -1.5976e-11
      }
    },
    {
      "label": "4A",
      "R": 13.129,
      "d": 5.26,
      "sd": 11.5,
      "asphere": {
        "A4": 0.000066885,
        "A6": -0.0000013641,
        "A8": 7.5439e-9,
        "A10": -3.0175e-11
      }
    },
    {
      "label": "5",
      "R": 20.929,
      "d": 3.122,
      "sd": 11.4,
      "medium": 3
    },
    {
      "label": "6",
      "R": 35.453,
      "sd": 11.4
    },
    {
      "label": "7",
      "R": 21.231,
      "d": 2.719,
      "sd": 6.7,
      "medium": 4
    },
    {
      "label": "8",
      "R": "flat",
      "d": 3.245,
      "sd": 6.7
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.9
    },
    {
      "label": "10",
      "R": 19.264,
      "d": 3.39,
      "sd": 5.8,
      "medium": 5
    },
    {
      "label": "11",
      "R": -19.264,
      "d": 1.615,
      "sd": 5.8,
      "medium": 6
    },
    {
      "label": "12",
      "R": 19.264,
      "d": 3.564,
      "sd": 5.8
    },
    {
      "label": "13",
      "R": -357.683,
      "d": 2.113,
      "sd": 7.1,
      "medium": 7
    },
    {
      "label": "14",
      "R": -29.309,
      "d": 1.672,
      "sd": 7.1
    },
    {
      "label": "15",
      "R": 88.348,
      "d": 2.652,
      "sd": 8.1,
      "medium": 8
    },
    {
      "label": "16",
      "R": -41.868,
      "sd": 8.1
    },
    {
      "label": "17A",
      "R": -25.613,
      "d": 2.2,
      "sd": 10.4,
      "medium": 9,
      "asphere": {
        "K": -3.3181,
        "A4": 0.000051432,
        "A6": -6.3896e-8,
        "A8": -1.7711e-10
      }
    },
    {
      "label": "18A",
      "R": -23.984,
      "d": 11.3,
      "sd": 10.4,
      "asphere": {
        "K": -1.92,
        "A4": 0.000087907,
        "A6": -8.3092e-8,
        "A8": -1.11376e-10,
        "A10": 2.4384e-13
      }
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 14.29,
        "nominalFNumber": 3.63,
        "label": "Wide"
      },
      {
        "published": false,
        "focalLengthMm": 14.343739049515893,
        "nominalFNumber": 3.6384999999999996
      },
      {
        "published": false,
        "focalLengthMm": 14.40313694071029,
        "nominalFNumber": 3.647
      },
      {
        "published": false,
        "focalLengthMm": 14.463028898726565,
        "nominalFNumber": 3.6554999999999995
      },
      {
        "published": false,
        "focalLengthMm": 14.52342111372071,
        "nominalFNumber": 3.6639999999999997
      },
      {
        "published": false,
        "focalLengthMm": 14.584319879690902,
        "nominalFNumber": 3.6725
      },
      {
        "published": false,
        "focalLengthMm": 14.64573159666414,
        "nominalFNumber": 3.681
      },
      {
        "published": false,
        "focalLengthMm": 14.707662772938418,
        "nominalFNumber": 3.6895
      },
      {
        "published": false,
        "focalLengthMm": 14.770120027382005,
        "nominalFNumber": 3.698
      },
      {
        "published": false,
        "focalLengthMm": 14.83311009179156,
        "nominalFNumber": 3.7065
      },
      {
        "published": false,
        "focalLengthMm": 14.896639813310895,
        "nominalFNumber": 3.715
      },
      {
        "published": false,
        "focalLengthMm": 14.960716156912131,
        "nominalFNumber": 3.7235
      },
      {
        "published": false,
        "focalLengthMm": 15.025346207941201,
        "nominalFNumber": 3.732
      },
      {
        "published": false,
        "focalLengthMm": 15.09053717472961,
        "nominalFNumber": 3.7405
      },
      {
        "published": false,
        "focalLengthMm": 15.156296391274536,
        "nominalFNumber": 3.749
      },
      {
        "published": false,
        "focalLengthMm": 15.222631319989242,
        "nominalFNumber": 3.7575
      },
      {
        "published": false,
        "focalLengthMm": 15.28954955452613,
        "nominalFNumber": 3.766
      },
      {
        "published": false,
        "focalLengthMm": 15.357058822674551,
        "nominalFNumber": 3.7744999999999997
      },
      {
        "published": false,
        "focalLengthMm": 15.42516698933574,
        "nominalFNumber": 3.7830000000000004
      },
      {
        "published": false,
        "focalLengthMm": 15.493882059577283,
        "nominalFNumber": 3.7915
      },
      {
        "published": false,
        "focalLengthMm": 15.563212181769622,
        "nominalFNumber": 3.8
      },
      {
        "published": false,
        "focalLengthMm": 15.633165650807111,
        "nominalFNumber": 3.8085000000000004
      },
      {
        "published": false,
        "focalLengthMm": 15.703750911416401,
        "nominalFNumber": 3.817
      },
      {
        "published": false,
        "focalLengthMm": 15.774976561554862,
        "nominalFNumber": 3.8255000000000003
      },
      {
        "published": false,
        "focalLengthMm": 15.846851355901872,
        "nominalFNumber": 3.834
      },
      {
        "published": false,
        "focalLengthMm": 15.919384209446072,
        "nominalFNumber": 3.8425000000000002
      },
      {
        "published": false,
        "focalLengthMm": 15.992584201171567,
        "nominalFNumber": 3.851
      },
      {
        "published": false,
        "focalLengthMm": 16.066460577846296,
        "nominalFNumber": 3.8594999999999997
      },
      {
        "published": false,
        "focalLengthMm": 16.141022757915962,
        "nominalFNumber": 3.8680000000000003
      },
      {
        "published": false,
        "focalLengthMm": 16.21628033550684,
        "nominalFNumber": 3.8765
      },
      {
        "published": false,
        "focalLengthMm": 16.292243084541152,
        "nominalFNumber": 3.885
      },
      {
        "published": false,
        "focalLengthMm": 16.368920962968698,
        "nominalFNumber": 3.8934999999999995
      },
      {
        "published": false,
        "focalLengthMm": 16.44632411711844,
        "nominalFNumber": 3.9019999999999997
      },
      {
        "published": false,
        "focalLengthMm": 16.524462886174337,
        "nominalFNumber": 3.9105
      },
      {
        "published": false,
        "focalLengthMm": 16.603347806779244,
        "nominalFNumber": 3.9189999999999996
      },
      {
        "published": false,
        "focalLengthMm": 16.682989617771387,
        "nominalFNumber": 3.9275
      },
      {
        "published": false,
        "focalLengthMm": 16.7633992650579,
        "nominalFNumber": 3.936
      },
      {
        "published": false,
        "focalLengthMm": 16.844587906629865,
        "nominalFNumber": 3.9445000000000006
      },
      {
        "published": false,
        "focalLengthMm": 16.92656691772393,
        "nominalFNumber": 3.9530000000000003
      },
      {
        "published": false,
        "focalLengthMm": 17.0093478961354,
        "nominalFNumber": 3.9615
      },
      {
        "published": false,
        "focalLengthMm": 17.092942667687907,
        "nominalFNumber": 3.97
      },
      {
        "published": false,
        "focalLengthMm": 17.177363291865404,
        "nominalFNumber": 3.9785000000000004
      },
      {
        "published": false,
        "focalLengthMm": 17.262622067611616,
        "nominalFNumber": 3.9870000000000005
      },
      {
        "published": false,
        "focalLengthMm": 17.34873153930341,
        "nominalFNumber": 3.9955000000000003
      },
      {
        "published": false,
        "focalLengthMm": 17.435704502903597,
        "nominalFNumber": 4.0040000000000004
      },
      {
        "published": false,
        "focalLengthMm": 17.52355401229993,
        "nominalFNumber": 4.012500000000001
      },
      {
        "published": false,
        "focalLengthMm": 17.61229338583662,
        "nominalFNumber": 4.021000000000001
      },
      {
        "published": false,
        "focalLengthMm": 17.7019362130455,
        "nominalFNumber": 4.0295
      },
      {
        "published": false,
        "focalLengthMm": 17.79249636158358,
        "nominalFNumber": 4.038
      },
      {
        "published": false,
        "focalLengthMm": 17.88398798438501,
        "nominalFNumber": 4.0465
      },
      {
        "published": false,
        "focalLengthMm": 17.97642552703447,
        "nominalFNumber": 4.055
      },
      {
        "published": false,
        "focalLengthMm": 18.069823735370893,
        "nominalFNumber": 4.0635
      },
      {
        "published": false,
        "focalLengthMm": 18.16419766332909,
        "nominalFNumber": 4.072
      },
      {
        "published": false,
        "focalLengthMm": 18.259562681028676,
        "nominalFNumber": 4.080500000000001
      },
      {
        "published": false,
        "focalLengthMm": 18.355934483119096,
        "nominalFNumber": 4.089
      },
      {
        "published": false,
        "focalLengthMm": 18.453329097390373,
        "nominalFNumber": 4.0975
      },
      {
        "published": false,
        "focalLengthMm": 18.551762893659475,
        "nominalFNumber": 4.106
      },
      {
        "published": false,
        "focalLengthMm": 18.65125259294261,
        "nominalFNumber": 4.1145
      },
      {
        "published": false,
        "focalLengthMm": 18.75181527692443,
        "nominalFNumber": 4.123
      },
      {
        "published": false,
        "focalLengthMm": 18.85346839773503,
        "nominalFNumber": 4.131500000000001
      },
      {
        "published": false,
        "focalLengthMm": 18.956229788047057,
        "nominalFNumber": 4.140000000000001
      },
      {
        "published": false,
        "focalLengthMm": 19.060117671504475,
        "nominalFNumber": 4.1485
      },
      {
        "published": false,
        "focalLengthMm": 19.165150673496573,
        "nominalFNumber": 4.157
      },
      {
        "published": false,
        "focalLengthMm": 19.271347832289973,
        "nominalFNumber": 4.165500000000001
      },
      {
        "published": false,
        "focalLengthMm": 19.378728610532928,
        "nominalFNumber": 4.174
      },
      {
        "published": false,
        "focalLengthMm": 19.487312907146478,
        "nominalFNumber": 4.1825
      },
      {
        "published": false,
        "focalLengthMm": 19.597121069617632,
        "nominalFNumber": 4.191
      },
      {
        "published": false,
        "focalLengthMm": 19.708173906710584,
        "nominalFNumber": 4.1995000000000005
      },
      {
        "published": false,
        "focalLengthMm": 19.820492701612675,
        "nominalFNumber": 4.208
      },
      {
        "published": false,
        "focalLengthMm": 19.93409922553247,
        "nominalFNumber": 4.2165
      },
      {
        "published": false,
        "focalLengthMm": 20.049015751768238,
        "nominalFNumber": 4.2250000000000005
      },
      {
        "published": false,
        "focalLengthMm": 20.165265070265942,
        "nominalFNumber": 4.2335
      },
      {
        "published": false,
        "focalLengthMm": 20.282870502686766,
        "nominalFNumber": 4.242
      },
      {
        "published": false,
        "focalLengthMm": 20.401855918004856,
        "nominalFNumber": 4.250500000000001
      },
      {
        "published": false,
        "focalLengthMm": 20.522245748657667,
        "nominalFNumber": 4.259
      },
      {
        "published": false,
        "focalLengthMm": 20.64406500727128,
        "nominalFNumber": 4.2675
      },
      {
        "published": false,
        "focalLengthMm": 20.767339303985306,
        "nominalFNumber": 4.276
      },
      {
        "published": false,
        "focalLengthMm": 20.89209486440211,
        "nominalFNumber": 4.2845
      },
      {
        "published": false,
        "focalLengthMm": 21.018358548187038,
        "nominalFNumber": 4.293
      },
      {
        "published": false,
        "focalLengthMm": 21.14615786834742,
        "nominalFNumber": 4.301500000000001
      },
      {
        "published": false,
        "focalLengthMm": 21.27552101121909,
        "nominalFNumber": 4.3100000000000005
      },
      {
        "published": false,
        "focalLengthMm": 21.406476857191322,
        "nominalFNumber": 4.3185
      },
      {
        "published": false,
        "focalLengthMm": 21.53905500220184,
        "nominalFNumber": 4.327
      },
      {
        "published": false,
        "focalLengthMm": 21.67328578003575,
        "nominalFNumber": 4.335500000000001
      },
      {
        "published": false,
        "focalLengthMm": 21.80920028546354,
        "nominalFNumber": 4.344
      },
      {
        "published": false,
        "focalLengthMm": 21.946830398255337,
        "nominalFNumber": 4.3525
      },
      {
        "published": false,
        "focalLengthMm": 22.086208808110246,
        "nominalFNumber": 4.361000000000001
      },
      {
        "published": false,
        "focalLengthMm": 22.227369040541785,
        "nominalFNumber": 4.3695
      },
      {
        "published": false,
        "focalLengthMm": 22.370345483762556,
        "nominalFNumber": 4.378
      },
      {
        "published": false,
        "focalLengthMm": 22.51517341661325,
        "nominalFNumber": 4.386500000000001
      },
      {
        "published": false,
        "focalLengthMm": 22.661889037583787,
        "nominalFNumber": 4.3950000000000005
      },
      {
        "published": false,
        "focalLengthMm": 22.810529494976688,
        "nominalFNumber": 4.4035
      },
      {
        "published": false,
        "focalLengthMm": 22.961132918265417,
        "nominalFNumber": 4.412000000000001
      },
      {
        "published": false,
        "focalLengthMm": 23.113738450703433,
        "nominalFNumber": 4.4205000000000005
      },
      {
        "published": false,
        "focalLengthMm": 23.26838628324241,
        "nominalFNumber": 4.429
      },
      {
        "published": false,
        "focalLengthMm": 23.42511768982133,
        "nominalFNumber": 4.4375
      },
      {
        "published": false,
        "focalLengthMm": 23.583975064091774,
        "nominalFNumber": 4.446000000000001
      },
      {
        "published": false,
        "focalLengthMm": 23.745001957647684,
        "nominalFNumber": 4.4545
      },
      {
        "published": false,
        "focalLengthMm": 23.908243119832353,
        "nominalFNumber": 4.463000000000001
      },
      {
        "published": false,
        "focalLengthMm": 24.07374453919888,
        "nominalFNumber": 4.4715
      },
      {
        "focalLengthMm": 24.24,
        "nominalFNumber": 4.48
      },
      {
        "published": false,
        "focalLengthMm": 24.34171697717959,
        "nominalFNumber": 4.4928
      },
      {
        "published": false,
        "focalLengthMm": 24.442711096489475,
        "nominalFNumber": 4.5056
      },
      {
        "published": false,
        "focalLengthMm": 24.5445462199259,
        "nominalFNumber": 4.518400000000001
      },
      {
        "published": false,
        "focalLengthMm": 24.647232896298192,
        "nominalFNumber": 4.531200000000001
      },
      {
        "published": false,
        "focalLengthMm": 24.75078185157625,
        "nominalFNumber": 4.5440000000000005
      },
      {
        "published": false,
        "focalLengthMm": 24.855203992625373,
        "nominalFNumber": 4.5568
      },
      {
        "published": false,
        "focalLengthMm": 24.96051041103594,
        "nominalFNumber": 4.5696
      },
      {
        "published": false,
        "focalLengthMm": 25.066712387050817,
        "nominalFNumber": 4.582400000000001
      },
      {
        "published": false,
        "focalLengthMm": 25.173821393593315,
        "nominalFNumber": 4.595200000000001
      },
      {
        "published": false,
        "focalLengthMm": 25.281849100398947,
        "nominalFNumber": 4.6080000000000005
      },
      {
        "published": false,
        "focalLengthMm": 25.390807378253832,
        "nominalFNumber": 4.620800000000001
      },
      {
        "published": false,
        "focalLengthMm": 25.50070830334313,
        "nominalFNumber": 4.6336
      },
      {
        "published": false,
        "focalLengthMm": 25.611564161712856,
        "nominalFNumber": 4.646400000000001
      },
      {
        "published": false,
        "focalLengthMm": 25.723387453848556,
        "nominalFNumber": 4.6592
      },
      {
        "published": false,
        "focalLengthMm": 25.83619089937415,
        "nominalFNumber": 4.672000000000001
      },
      {
        "published": false,
        "focalLengthMm": 25.94998744187524,
        "nominalFNumber": 4.6848
      },
      {
        "published": false,
        "focalLengthMm": 26.064790253850045,
        "nominalFNumber": 4.6976
      },
      {
        "published": false,
        "focalLengthMm": 26.180612741792523,
        "nominalFNumber": 4.7104
      },
      {
        "published": false,
        "focalLengthMm": 26.29746855141122,
        "nominalFNumber": 4.7232
      },
      {
        "published": false,
        "focalLengthMm": 26.41537157298883,
        "nominalFNumber": 4.736000000000001
      },
      {
        "published": false,
        "focalLengthMm": 26.53433594688611,
        "nominalFNumber": 4.7488
      },
      {
        "published": false,
        "focalLengthMm": 26.654376069195393,
        "nominalFNumber": 4.7616000000000005
      },
      {
        "published": false,
        "focalLengthMm": 26.77550659754797,
        "nominalFNumber": 4.7744
      },
      {
        "published": false,
        "focalLengthMm": 26.897742457080554,
        "nominalFNumber": 4.7872
      },
      {
        "published": false,
        "focalLengthMm": 27.021098846565874,
        "nominalFNumber": 4.800000000000001
      },
      {
        "published": false,
        "focalLengthMm": 27.145591244712413,
        "nominalFNumber": 4.8128
      },
      {
        "published": false,
        "focalLengthMm": 27.271235416639286,
        "nominalFNumber": 4.8256000000000006
      },
      {
        "published": false,
        "focalLengthMm": 27.398047420531498,
        "nominalFNumber": 4.8384
      },
      {
        "published": false,
        "focalLengthMm": 27.526043614481637,
        "nominalFNumber": 4.8512
      },
      {
        "published": false,
        "focalLengthMm": 27.65524066352429,
        "nominalFNumber": 4.864000000000001
      },
      {
        "published": false,
        "focalLengthMm": 27.785655546869084,
        "nominalFNumber": 4.8768
      },
      {
        "published": false,
        "focalLengthMm": 27.917305565339575,
        "nominalFNumber": 4.889600000000001
      },
      {
        "published": false,
        "focalLengthMm": 28.050208349024334,
        "nominalFNumber": 4.9024
      },
      {
        "published": false,
        "focalLengthMm": 28.184381865147383,
        "nominalFNumber": 4.9152000000000005
      },
      {
        "published": false,
        "focalLengthMm": 28.319844426165744,
        "nominalFNumber": 4.928000000000001
      },
      {
        "published": false,
        "focalLengthMm": 28.456614698101244,
        "nominalFNumber": 4.9408
      },
      {
        "published": false,
        "focalLengthMm": 28.59471170911499,
        "nominalFNumber": 4.9536
      },
      {
        "published": false,
        "focalLengthMm": 28.734154858332378,
        "nominalFNumber": 4.9664
      },
      {
        "published": false,
        "focalLengthMm": 28.874963924927712,
        "nominalFNumber": 4.9792000000000005
      },
      {
        "published": false,
        "focalLengthMm": 29.017159077476823,
        "nominalFNumber": 4.992
      },
      {
        "published": false,
        "focalLengthMm": 29.160760883587383,
        "nominalFNumber": 5.0047999999999995
      },
      {
        "published": false,
        "focalLengthMm": 29.305790319816534,
        "nominalFNumber": 5.0176
      },
      {
        "published": false,
        "focalLengthMm": 29.452268781885525,
        "nominalFNumber": 5.0304
      },
      {
        "published": false,
        "focalLengthMm": 29.600218095202404,
        "nominalFNumber": 5.043200000000001
      },
      {
        "published": false,
        "focalLengthMm": 29.749660525702907,
        "nominalFNumber": 5.056
      },
      {
        "published": false,
        "focalLengthMm": 29.900618791021593,
        "nominalFNumber": 5.0687999999999995
      },
      {
        "published": false,
        "focalLengthMm": 30.05311607200445,
        "nominalFNumber": 5.0816
      },
      {
        "published": false,
        "focalLengthMm": 30.207176024575368,
        "nominalFNumber": 5.0944
      },
      {
        "published": false,
        "focalLengthMm": 30.36282279196949,
        "nominalFNumber": 5.107200000000001
      },
      {
        "published": false,
        "focalLengthMm": 30.520081017346346,
        "nominalFNumber": 5.12
      },
      {
        "published": false,
        "focalLengthMm": 30.67897585679694,
        "nominalFNumber": 5.1328
      },
      {
        "published": false,
        "focalLengthMm": 30.839532992758816,
        "nominalFNumber": 5.1456
      },
      {
        "published": false,
        "focalLengthMm": 31.001778647854664,
        "nominalFNumber": 5.1584
      },
      {
        "published": false,
        "focalLengthMm": 31.165739599169697,
        "nominalFNumber": 5.171200000000001
      },
      {
        "published": false,
        "focalLengthMm": 31.33144319298426,
        "nominalFNumber": 5.184
      },
      {
        "published": false,
        "focalLengthMm": 31.498917359978655,
        "nominalFNumber": 5.1968
      },
      {
        "published": false,
        "focalLengthMm": 31.66819063092812,
        "nominalFNumber": 5.2096
      },
      {
        "published": false,
        "focalLengthMm": 31.83929215290626,
        "nominalFNumber": 5.2224
      },
      {
        "published": false,
        "focalLengthMm": 32.01225170601632,
        "nominalFNumber": 5.235200000000001
      },
      {
        "published": false,
        "focalLengthMm": 32.18709972067059,
        "nominalFNumber": 5.248
      },
      {
        "published": false,
        "focalLengthMm": 32.36386729543883,
        "nominalFNumber": 5.2608
      },
      {
        "published": false,
        "focalLengthMm": 32.542586215487894,
        "nominalFNumber": 5.2736
      },
      {
        "published": false,
        "focalLengthMm": 32.723288971635306,
        "nominalFNumber": 5.2863999999999995
      },
      {
        "published": false,
        "focalLengthMm": 32.90600878004079,
        "nominalFNumber": 5.2992
      },
      {
        "published": false,
        "focalLengthMm": 33.09077960256126,
        "nominalFNumber": 5.311999999999999
      },
      {
        "published": false,
        "focalLengthMm": 33.27763616779467,
        "nominalFNumber": 5.3248
      },
      {
        "published": false,
        "focalLengthMm": 33.46661399284094,
        "nominalFNumber": 5.3376
      },
      {
        "published": false,
        "focalLengthMm": 33.65774940580802,
        "nominalFNumber": 5.3504
      },
      {
        "published": false,
        "focalLengthMm": 33.85107956909321,
        "nominalFNumber": 5.3632
      },
      {
        "published": false,
        "focalLengthMm": 34.04664250347135,
        "nominalFNumber": 5.376
      },
      {
        "published": false,
        "focalLengthMm": 34.24447711302213,
        "nominalFNumber": 5.3888
      },
      {
        "published": false,
        "focalLengthMm": 34.44462321093134,
        "nominalFNumber": 5.4016
      },
      {
        "published": false,
        "focalLengthMm": 34.6471215462019,
        "nominalFNumber": 5.4144
      },
      {
        "published": false,
        "focalLengthMm": 34.852013831311886,
        "nominalFNumber": 5.427199999999999
      },
      {
        "published": false,
        "focalLengthMm": 35.059342770859736,
        "nominalFNumber": 5.44
      },
      {
        "published": false,
        "focalLengthMm": 35.269152091237196,
        "nominalFNumber": 5.4528
      },
      {
        "published": false,
        "focalLengthMm": 35.48148657137384,
        "nominalFNumber": 5.4656
      },
      {
        "published": false,
        "focalLengthMm": 35.69639207459847,
        "nominalFNumber": 5.4784
      },
      {
        "published": false,
        "focalLengthMm": 35.913915581664554,
        "nominalFNumber": 5.4912
      },
      {
        "published": false,
        "focalLengthMm": 36.13410522499051,
        "nominalFNumber": 5.504
      },
      {
        "published": false,
        "focalLengthMm": 36.35701032416648,
        "nominalFNumber": 5.5168
      },
      {
        "published": false,
        "focalLengthMm": 36.58268142278287,
        "nominalFNumber": 5.5296
      },
      {
        "published": false,
        "focalLengthMm": 36.811170326638745,
        "nominalFNumber": 5.5424
      },
      {
        "published": false,
        "focalLengthMm": 37.04253014338999,
        "nominalFNumber": 5.555199999999999
      },
      {
        "published": false,
        "focalLengthMm": 37.27681532370199,
        "nominalFNumber": 5.568
      },
      {
        "published": false,
        "focalLengthMm": 37.514081703972835,
        "nominalFNumber": 5.5808
      },
      {
        "published": false,
        "focalLengthMm": 37.754386550697994,
        "nominalFNumber": 5.5936
      },
      {
        "published": false,
        "focalLengthMm": 37.99778860655059,
        "nominalFNumber": 5.6064
      },
      {
        "published": false,
        "focalLengthMm": 38.24434813825471,
        "nominalFNumber": 5.6192
      },
      {
        "published": false,
        "focalLengthMm": 38.49412698633405,
        "nominalFNumber": 5.632
      },
      {
        "published": false,
        "focalLengthMm": 38.74718861682215,
        "nominalFNumber": 5.644799999999999
      },
      {
        "published": false,
        "focalLengthMm": 39.00359817502487,
        "nominalFNumber": 5.6575999999999995
      },
      {
        "published": false,
        "focalLengthMm": 39.263422541430764,
        "nominalFNumber": 5.6704
      },
      {
        "published": false,
        "focalLengthMm": 39.52673038987052,
        "nominalFNumber": 5.6832
      },
      {
        "published": false,
        "focalLengthMm": 39.7935922480311,
        "nominalFNumber": 5.696
      },
      {
        "published": false,
        "focalLengthMm": 40.06408056043717,
        "nominalFNumber": 5.708799999999999
      },
      {
        "published": false,
        "focalLengthMm": 40.33826975401753,
        "nominalFNumber": 5.7216
      },
      {
        "published": false,
        "focalLengthMm": 40.61623630638144,
        "nominalFNumber": 5.7344
      },
      {
        "published": false,
        "focalLengthMm": 40.89805881693638,
        "nominalFNumber": 5.7472
      },
      {
        "focalLengthMm": 41.19,
        "nominalFNumber": 5.76,
        "label": "Tele"
      }
    ],
    "apertureModel": "from-nominal-fno"
  },
  "focus": {
    "closeFocusM": 0.25,
    "description": "The patent prints infinity spacings at wide, middle and tele only. It focuses by moving G1 alone toward the object (claim 3) but prints no near-focus spacings, so focusing is not modeled. The intermediate zoom positions are an inferred reconstruction, not the factory cam: the G1–G2 spacing follows a piecewise-linear law between the printed stations and the G2–G3 spacing is solved for infinity focus at each position. The marketed minimum focus distance is 0.25 m."
  },
  "gaps": {
    "6": {
      "label": "D6",
      "values": [
        [
          30.536,
          30.536
        ],
        [
          30.355320000000003,
          30.355320000000003
        ],
        [
          30.17464,
          30.17464
        ],
        [
          29.99396,
          29.99396
        ],
        [
          29.81328,
          29.81328
        ],
        [
          29.6326,
          29.6326
        ],
        [
          29.45192,
          29.45192
        ],
        [
          29.27124,
          29.27124
        ],
        [
          29.090560000000004,
          29.090560000000004
        ],
        [
          28.90988,
          28.90988
        ],
        [
          28.729200000000002,
          28.729200000000002
        ],
        [
          28.548520000000003,
          28.548520000000003
        ],
        [
          28.36784,
          28.36784
        ],
        [
          28.187160000000002,
          28.187160000000002
        ],
        [
          28.00648,
          28.00648
        ],
        [
          27.8258,
          27.8258
        ],
        [
          27.64512,
          27.64512
        ],
        [
          27.46444,
          27.46444
        ],
        [
          27.283760000000004,
          27.283760000000004
        ],
        [
          27.103080000000002,
          27.103080000000002
        ],
        [
          26.922400000000003,
          26.922400000000003
        ],
        [
          26.74172,
          26.74172
        ],
        [
          26.561040000000002,
          26.561040000000002
        ],
        [
          26.380360000000003,
          26.380360000000003
        ],
        [
          26.19968,
          26.19968
        ],
        [
          26.019000000000002,
          26.019000000000002
        ],
        [
          25.83832,
          25.83832
        ],
        [
          25.65764,
          25.65764
        ],
        [
          25.476960000000002,
          25.476960000000002
        ],
        [
          25.29628,
          25.29628
        ],
        [
          25.1156,
          25.1156
        ],
        [
          24.934919999999998,
          24.934919999999998
        ],
        [
          24.75424,
          24.75424
        ],
        [
          24.57356,
          24.57356
        ],
        [
          24.392879999999998,
          24.392879999999998
        ],
        [
          24.212200000000003,
          24.212200000000003
        ],
        [
          24.03152,
          24.03152
        ],
        [
          23.85084,
          23.85084
        ],
        [
          23.670160000000003,
          23.670160000000003
        ],
        [
          23.48948,
          23.48948
        ],
        [
          23.3088,
          23.3088
        ],
        [
          23.128120000000003,
          23.128120000000003
        ],
        [
          22.947440000000004,
          22.947440000000004
        ],
        [
          22.76676,
          22.76676
        ],
        [
          22.586080000000003,
          22.586080000000003
        ],
        [
          22.4054,
          22.4054
        ],
        [
          22.22472,
          22.22472
        ],
        [
          22.044040000000003,
          22.044040000000003
        ],
        [
          21.86336,
          21.86336
        ],
        [
          21.68268,
          21.68268
        ],
        [
          21.502000000000002,
          21.502000000000002
        ],
        [
          21.32132,
          21.32132
        ],
        [
          21.14064,
          21.14064
        ],
        [
          20.95996,
          20.95996
        ],
        [
          20.77928,
          20.77928
        ],
        [
          20.598599999999998,
          20.598599999999998
        ],
        [
          20.41792,
          20.41792
        ],
        [
          20.23724,
          20.23724
        ],
        [
          20.05656,
          20.05656
        ],
        [
          19.875880000000002,
          19.875880000000002
        ],
        [
          19.6952,
          19.6952
        ],
        [
          19.51452,
          19.51452
        ],
        [
          19.333840000000002,
          19.333840000000002
        ],
        [
          19.15316,
          19.15316
        ],
        [
          18.97248,
          18.97248
        ],
        [
          18.791800000000002,
          18.791800000000002
        ],
        [
          18.61112,
          18.61112
        ],
        [
          18.430439999999997,
          18.430439999999997
        ],
        [
          18.249760000000002,
          18.249760000000002
        ],
        [
          18.06908,
          18.06908
        ],
        [
          17.8884,
          17.8884
        ],
        [
          17.707720000000002,
          17.707720000000002
        ],
        [
          17.52704,
          17.52704
        ],
        [
          17.34636,
          17.34636
        ],
        [
          17.165680000000002,
          17.165680000000002
        ],
        [
          16.985,
          16.985
        ],
        [
          16.80432,
          16.80432
        ],
        [
          16.62364,
          16.62364
        ],
        [
          16.44296,
          16.44296
        ],
        [
          16.262279999999997,
          16.262279999999997
        ],
        [
          16.0816,
          16.0816
        ],
        [
          15.90092,
          15.90092
        ],
        [
          15.72024,
          15.72024
        ],
        [
          15.539560000000002,
          15.539560000000002
        ],
        [
          15.358880000000001,
          15.358880000000001
        ],
        [
          15.1782,
          15.1782
        ],
        [
          14.99752,
          14.99752
        ],
        [
          14.816840000000001,
          14.816840000000001
        ],
        [
          14.63616,
          14.63616
        ],
        [
          14.45548,
          14.45548
        ],
        [
          14.274799999999999,
          14.274799999999999
        ],
        [
          14.09412,
          14.09412
        ],
        [
          13.91344,
          13.91344
        ],
        [
          13.732759999999999,
          13.732759999999999
        ],
        [
          13.552080000000002,
          13.552080000000002
        ],
        [
          13.371400000000001,
          13.371400000000001
        ],
        [
          13.19072,
          13.19072
        ],
        [
          13.01004,
          13.01004
        ],
        [
          12.829360000000001,
          12.829360000000001
        ],
        [
          12.64868,
          12.64868
        ],
        [
          12.468,
          12.468
        ],
        [
          12.36142,
          12.36142
        ],
        [
          12.254840000000002,
          12.254840000000002
        ],
        [
          12.148259999999999,
          12.148259999999999
        ],
        [
          12.04168,
          12.04168
        ],
        [
          11.9351,
          11.9351
        ],
        [
          11.828520000000001,
          11.828520000000001
        ],
        [
          11.721939999999998,
          11.721939999999998
        ],
        [
          11.615359999999999,
          11.615359999999999
        ],
        [
          11.50878,
          11.50878
        ],
        [
          11.4022,
          11.4022
        ],
        [
          11.295619999999998,
          11.295619999999998
        ],
        [
          11.189039999999999,
          11.189039999999999
        ],
        [
          11.082460000000001,
          11.082460000000001
        ],
        [
          10.97588,
          10.97588
        ],
        [
          10.8693,
          10.8693
        ],
        [
          10.762720000000002,
          10.762720000000002
        ],
        [
          10.65614,
          10.65614
        ],
        [
          10.54956,
          10.54956
        ],
        [
          10.44298,
          10.44298
        ],
        [
          10.336400000000001,
          10.336400000000001
        ],
        [
          10.22982,
          10.22982
        ],
        [
          10.12324,
          10.12324
        ],
        [
          10.01666,
          10.01666
        ],
        [
          9.91008,
          9.91008
        ],
        [
          9.8035,
          9.8035
        ],
        [
          9.696919999999999,
          9.696919999999999
        ],
        [
          9.59034,
          9.59034
        ],
        [
          9.48376,
          9.48376
        ],
        [
          9.377180000000001,
          9.377180000000001
        ],
        [
          9.270599999999998,
          9.270599999999998
        ],
        [
          9.164019999999999,
          9.164019999999999
        ],
        [
          9.05744,
          9.05744
        ],
        [
          8.95086,
          8.95086
        ],
        [
          8.844279999999998,
          8.844279999999998
        ],
        [
          8.737699999999998,
          8.737699999999998
        ],
        [
          8.63112,
          8.63112
        ],
        [
          8.524539999999998,
          8.524539999999998
        ],
        [
          8.41796,
          8.41796
        ],
        [
          8.311380000000002,
          8.311380000000002
        ],
        [
          8.2048,
          8.2048
        ],
        [
          8.098220000000001,
          8.098220000000001
        ],
        [
          7.991640000000001,
          7.991640000000001
        ],
        [
          7.88506,
          7.88506
        ],
        [
          7.778480000000001,
          7.778480000000001
        ],
        [
          7.6719,
          7.6719
        ],
        [
          7.565320000000001,
          7.565320000000001
        ],
        [
          7.45874,
          7.45874
        ],
        [
          7.3521600000000005,
          7.3521600000000005
        ],
        [
          7.2455799999999995,
          7.2455799999999995
        ],
        [
          7.139,
          7.139
        ],
        [
          7.03242,
          7.03242
        ],
        [
          6.92584,
          6.92584
        ],
        [
          6.81926,
          6.81926
        ],
        [
          6.71268,
          6.71268
        ],
        [
          6.6061,
          6.6061
        ],
        [
          6.4995199999999995,
          6.4995199999999995
        ],
        [
          6.392939999999999,
          6.392939999999999
        ],
        [
          6.286359999999999,
          6.286359999999999
        ],
        [
          6.179779999999999,
          6.179779999999999
        ],
        [
          6.073199999999999,
          6.073199999999999
        ],
        [
          5.966619999999999,
          5.966619999999999
        ],
        [
          5.860039999999999,
          5.860039999999999
        ],
        [
          5.753460000000001,
          5.753460000000001
        ],
        [
          5.646880000000001,
          5.646880000000001
        ],
        [
          5.540300000000001,
          5.540300000000001
        ],
        [
          5.433720000000001,
          5.433720000000001
        ],
        [
          5.327140000000001,
          5.327140000000001
        ],
        [
          5.220560000000001,
          5.220560000000001
        ],
        [
          5.113980000000001,
          5.113980000000001
        ],
        [
          5.0074000000000005,
          5.0074000000000005
        ],
        [
          4.90082,
          4.90082
        ],
        [
          4.79424,
          4.79424
        ],
        [
          4.68766,
          4.68766
        ],
        [
          4.58108,
          4.58108
        ],
        [
          4.4745,
          4.4745
        ],
        [
          4.36792,
          4.36792
        ],
        [
          4.26134,
          4.26134
        ],
        [
          4.15476,
          4.15476
        ],
        [
          4.0481799999999994,
          4.0481799999999994
        ],
        [
          3.9415999999999993,
          3.9415999999999993
        ],
        [
          3.835019999999999,
          3.835019999999999
        ],
        [
          3.728439999999999,
          3.728439999999999
        ],
        [
          3.621859999999999,
          3.621859999999999
        ],
        [
          3.5152799999999993,
          3.5152799999999993
        ],
        [
          3.408699999999999,
          3.408699999999999
        ],
        [
          3.302119999999999,
          3.302119999999999
        ],
        [
          3.195539999999999,
          3.195539999999999
        ],
        [
          3.088960000000001,
          3.088960000000001
        ],
        [
          2.982380000000001,
          2.982380000000001
        ],
        [
          2.875800000000001,
          2.875800000000001
        ],
        [
          2.7692200000000007,
          2.7692200000000007
        ],
        [
          2.662640000000001,
          2.662640000000001
        ],
        [
          2.556060000000001,
          2.556060000000001
        ],
        [
          2.4494800000000008,
          2.4494800000000008
        ],
        [
          2.3429000000000006,
          2.3429000000000006
        ],
        [
          2.2363200000000005,
          2.2363200000000005
        ],
        [
          2.1297400000000004,
          2.1297400000000004
        ],
        [
          2.0231600000000003,
          2.0231600000000003
        ],
        [
          1.9165800000000002,
          1.9165800000000002
        ],
        [
          1.81,
          1.81
        ]
      ]
    },
    "16": {
      "label": "D16",
      "values": [
        [
          12.365,
          12.365
        ],
        [
          12.433735309611611,
          12.433735309611611
        ],
        [
          12.50304282132495,
          12.50304282132495
        ],
        [
          12.572929674441768,
          12.572929674441768
        ],
        [
          12.643403127527993,
          12.643403127527993
        ],
        [
          12.714470560914757,
          12.714470560914757
        ],
        [
          12.786139479262408,
          12.786139479262408
        ],
        [
          12.85841751418966,
          12.85841751418966
        ],
        [
          12.93131242696971,
          12.93131242696971
        ],
        [
          13.00483211129547,
          13.00483211129547
        ],
        [
          13.078984596115662,
          13.078984596115662
        ],
        [
          13.153778048544227,
          13.153778048544227
        ],
        [
          13.22922077684534,
          13.22922077684534
        ],
        [
          13.305321233495707,
          13.305321233495707
        ],
        [
          13.382088018327503,
          13.382088018327503
        ],
        [
          13.459529881753316,
          13.459529881753316
        ],
        [
          13.537655728076514,
          13.537655728076514
        ],
        [
          13.6164746188892,
          13.6164746188892
        ],
        [
          13.695995776560704,
          13.695995776560704
        ],
        [
          13.77622858781908,
          13.77622858781908
        ],
        [
          13.85718260742914,
          13.85718260742914
        ],
        [
          13.938867561969289,
          13.938867561969289
        ],
        [
          14.021293353711075,
          14.021293353711075
        ],
        [
          14.10447006460414,
          14.10447006460414
        ],
        [
          14.188407960369997,
          14.188407960369997
        ],
        [
          14.273117494708595,
          14.273117494708595
        ],
        [
          14.35860931362061,
          14.35860931362061
        ],
        [
          14.444894259849805,
          14.444894259849805
        ],
        [
          14.53198337744894,
          14.53198337744894
        ],
        [
          14.619887916473516,
          14.619887916473516
        ],
        [
          14.708619337807455,
          14.708619337807455
        ],
        [
          14.798189318125084,
          14.798189318125084
        ],
        [
          14.888609754993787,
          14.888609754993787
        ],
        [
          14.979892772122398,
          14.979892772122398
        ],
        [
          15.072050724759718,
          15.072050724759718
        ],
        [
          15.165096205248428,
          15.165096205248428
        ],
        [
          15.259042048739888,
          15.259042048739888
        ],
        [
          15.353901339074726,
          15.353901339074726
        ],
        [
          15.449687414835298,
          15.449687414835298
        ],
        [
          15.546413875575888,
          15.546413875575888
        ],
        [
          15.644094588236337,
          15.644094588236337
        ],
        [
          15.742743693746243,
          15.742743693746243
        ],
        [
          15.842375613825258,
          15.842375613825258
        ],
        [
          15.94300505798751,
          15.94300505798751
        ],
        [
          16.04464703075637,
          16.04464703075637
        ],
        [
          16.14731683909752,
          16.14731683909752
        ],
        [
          16.25103010007784,
          16.25103010007784
        ],
        [
          16.355802748758332,
          16.355802748758332
        ],
        [
          16.46165104632907,
          16.46165104632907
        ],
        [
          16.568591588495607,
          16.568591588495607
        ],
        [
          16.676641314125003,
          16.676641314125003
        ],
        [
          16.785817514161934,
          16.785817514161934
        ],
        [
          16.89613784082372,
          16.89613784082372
        ],
        [
          17.007620317085436,
          17.007620317085436
        ],
        [
          17.120283346465257,
          17.120283346465257
        ],
        [
          17.234145723121458,
          17.234145723121458
        ],
        [
          17.349226642272445,
          17.349226642272445
        ],
        [
          17.465545710952245,
          17.465545710952245
        ],
        [
          17.5831229591141,
          17.5831229591141
        ],
        [
          17.701978851094893,
          17.701978851094893
        ],
        [
          17.822134297455037,
          17.822134297455037
        ],
        [
          17.943610667207196,
          17.943610667207196
        ],
        [
          18.066429800449928,
          18.066429800449928
        ],
        [
          18.190614021421013,
          18.190614021421013
        ],
        [
          18.316186151987377,
          18.316186151987377
        ],
        [
          18.44316952558865,
          18.44316952558865
        ],
        [
          18.571588001652078,
          18.571588001652078
        ],
        [
          18.701465980497822,
          18.701465980497822
        ],
        [
          18.832828418753675,
          18.832828418753675
        ],
        [
          18.965700845300294,
          18.965700845300294
        ],
        [
          19.100109377767893,
          19.100109377767893
        ],
        [
          19.236080739606766,
          19.236080739606766
        ],
        [
          19.373642277755597,
          19.373642277755597
        ],
        [
          19.512821980931246,
          19.512821980931246
        ],
        [
          19.653648498566668,
          19.653648498566668
        ],
        [
          19.796151160423015,
          19.796151160423015
        ],
        [
          19.94035999690467,
          19.94035999690467
        ],
        [
          20.086305760106583,
          20.086305760106583
        ],
        [
          20.23401994562488,
          20.23401994562488
        ],
        [
          20.383534815163266,
          20.383534815163266
        ],
        [
          20.53488341996932,
          20.53488341996932
        ],
        [
          20.68809962513642,
          20.68809962513642
        ],
        [
          20.843218134808833,
          20.843218134808833
        ],
        [
          21.00027451832932,
          21.00027451832932
        ],
        [
          21.159305237370738,
          21.159305237370738
        ],
        [
          21.32034767409523,
          21.32034767409523
        ],
        [
          21.48344016038613,
          21.48344016038613
        ],
        [
          21.64862200820128,
          21.64862200820128
        ],
        [
          21.815933541097994,
          21.815933541097994
        ],
        [
          21.985416126982475,
          21.985416126982475
        ],
        [
          22.15711221214,
          22.15711221214
        ],
        [
          22.33106535660442,
          22.33106535660442
        ],
        [
          22.507320270928883,
          22.507320270928883
        ],
        [
          22.685922854423183,
          22.685922854423183
        ],
        [
          22.866920234926205,
          22.866920234926205
        ],
        [
          23.050360810185758,
          23.050360810185758
        ],
        [
          23.23629429092276,
          23.23629429092276
        ],
        [
          23.42477174565926,
          23.42477174565926
        ],
        [
          23.615845647396064,
          23.615845647396064
        ],
        [
          23.809569922229215,
          23.809569922229215
        ],
        [
          24.006,
          24.006
        ],
        [
          24.124657363046595,
          24.124657363046595
        ],
        [
          24.24428799132919,
          24.24428799132919
        ],
        [
          24.364904041879633,
          24.364904041879633
        ],
        [
          24.486517875045863,
          24.486517875045863
        ],
        [
          24.609142058759993,
          24.609142058759993
        ],
        [
          24.73278937291456,
          24.73278937291456
        ],
        [
          24.857472813849874,
          24.857472813849874
        ],
        [
          24.9832055989559,
          24.9832055989559
        ],
        [
          25.110001171391886,
          25.110001171391886
        ],
        [
          25.23787320492765,
          25.23787320492765
        ],
        [
          25.36683560890995,
          25.36683560890995
        ],
        [
          25.496902533357513,
          25.496902533357513
        ],
        [
          25.62808837418922,
          25.62808837418922
        ],
        [
          25.76040777858897,
          25.76040777858897
        ],
        [
          25.89387565051151,
          25.89387565051151
        ],
        [
          26.02850715633407,
          26.02850715633407
        ],
        [
          26.164317730657388,
          26.164317730657388
        ],
        [
          26.3013230822619,
          26.3013230822619
        ],
        [
          26.43953920022275,
          26.43953920022275
        ],
        [
          26.57898236018972,
          26.57898236018972
        ],
        [
          26.719669130836447,
          26.719669130836447
        ],
        [
          26.861616380484612,
          26.861616380484612
        ],
        [
          27.004841283908775,
          27.004841283908775
        ],
        [
          27.149361329327448,
          27.149361329327448
        ],
        [
          27.295194325586394,
          27.295194325586394
        ],
        [
          27.442358409540287,
          27.442358409540287
        ],
        [
          27.590872053639494,
          27.590872053639494
        ],
        [
          27.7407540737283,
          27.7407540737283
        ],
        [
          27.892023637061357,
          27.892023637061357
        ],
        [
          28.04470027054633,
          28.04470027054633
        ],
        [
          28.198803869218885,
          28.198803869218885
        ],
        [
          28.35435470495907,
          28.35435470495907
        ],
        [
          28.51137343545649,
          28.51137343545649
        ],
        [
          28.6698811134321,
          28.6698811134321
        ],
        [
          28.829899196126494,
          28.829899196126494
        ],
        [
          28.991449555062424,
          28.991449555062424
        ],
        [
          29.15455448609185,
          29.15455448609185
        ],
        [
          29.31923671973642,
          29.31923671973642
        ],
        [
          29.48551943183214,
          29.48551943183214
        ],
        [
          29.65342625448821,
          29.65342625448821
        ],
        [
          29.822981287371018,
          29.822981287371018
        ],
        [
          29.994209109325087,
          29.994209109325087
        ],
        [
          30.16713479034161,
          30.16713479034161
        ],
        [
          30.34178390388852,
          30.34178390388852
        ],
        [
          30.518182539612795,
          30.518182539612795
        ],
        [
          30.696357316430085,
          30.696357316430085
        ],
        [
          30.876335396014518,
          30.876335396014518
        ],
        [
          31.05814449670279,
          31.05814449670279
        ],
        [
          31.24181290782837,
          31.24181290782837
        ],
        [
          31.42736950450085,
          31.42736950450085
        ],
        [
          31.614843762846494,
          31.614843762846494
        ],
        [
          31.804265775727227,
          31.804265775727227
        ],
        [
          31.9956662689557,
          31.9956662689557
        ],
        [
          32.1890766180244,
          32.1890766180244
        ],
        [
          32.38452886536848,
          32.38452886536848
        ],
        [
          32.58205573818152,
          32.58205573818152
        ],
        [
          32.78169066680585,
          32.78169066680585
        ],
        [
          32.983467803718625,
          32.983467803718625
        ],
        [
          33.18742204313632,
          33.18742204313632
        ],
        [
          33.3935890412614,
          33.3935890412614
        ],
        [
          33.602005237196074,
          33.602005237196074
        ],
        [
          33.81270787454835,
          33.81270787454835
        ],
        [
          34.02573502375773,
          34.02573502375773
        ],
        [
          34.24112560516836,
          34.24112560516836
        ],
        [
          34.45891941287957,
          34.45891941287957
        ],
        [
          34.67915713940344,
          34.67915713940344
        ],
        [
          34.901880401163,
          34.901880401163
        ],
        [
          35.127131764862945,
          35.127131764862945
        ],
        [
          35.3549547747692,
          35.3549547747692
        ],
        [
          35.58539398093366,
          35.58539398093366
        ],
        [
          35.81849496840243,
          35.81849496840243
        ],
        [
          36.05430438744763,
          36.05430438744763
        ],
        [
          36.29286998486568,
          36.29286998486568
        ],
        [
          36.53424063638503,
          36.53424063638503
        ],
        [
          36.77846638023042,
          36.77846638023042
        ],
        [
          37.02559845189171,
          37.02559845189171
        ],
        [
          37.27568932014805,
          37.27568932014805
        ],
        [
          37.52879272440083,
          37.52879272440083
        ],
        [
          37.78496371337051,
          37.78496371337051
        ],
        [
          38.04425868521702,
          38.04425868521702
        ],
        [
          38.30673542914408,
          38.30673542914408
        ],
        [
          38.57245316855215,
          38.57245316855215
        ],
        [
          38.8414726058086,
          38.8414726058086
        ],
        [
          39.113855968704286,
          39.113855968704286
        ],
        [
          39.38966705867358,
          39.38966705867358
        ],
        [
          39.66897130085434,
          39.66897130085434
        ],
        [
          39.95183579607119,
          39.95183579607119
        ],
        [
          40.23832937482928,
          40.23832937482928
        ],
        [
          40.528522653408736,
          40.528522653408736
        ],
        [
          40.822488092156654,
          40.822488092156654
        ],
        [
          41.12030005607742,
          41.12030005607742
        ],
        [
          41.422034877827926,
          41.422034877827926
        ],
        [
          41.72777092322917,
          41.72777092322917
        ],
        [
          42.03758865941357,
          42.03758865941357
        ],
        [
          42.351570725731044,
          42.351570725731044
        ],
        [
          42.66980200754612,
          42.66980200754612
        ],
        [
          42.99236971306426,
          42.99236971306426
        ],
        [
          43.31936345333302,
          43.31936345333302
        ],
        [
          43.65087532557285,
          43.65087532557285
        ],
        [
          43.987,
          43.987
        ]
      ]
    }
  },
  "aperture": {
    "fStops": [
      3.63,
      4,
      4.48,
      5.6,
      5.76,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "rearPlates": [
    {
      "label": "C",
      "thicknessMm": 4.082,
      "nd": 1.51633,
      "vd": 64.14,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "gapAfterMm": 0.745,
      "source": "JP 2010-186010 A Numerical Example 1, surfaces 19–20: camera-side plate at its printed thickness and image gap"
    }
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "G2",
      "fromSurface": "7",
      "toSurface": "16"
    },
    {
      "text": "G3",
      "fromSurface": "17A",
      "toSurface": "18A"
    }
  ],
  "doublets": [
    {
      "text": "L22 + L23",
      "fromSurface": "10",
      "toSurface": "12"
    }
  ],
  "layout": {
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
