import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * TAMRON AF 18-250mm f/3.5-6.3 Di II LD Aspherical [IF] MACRO (Model A18).
 *
 * Source: JP 2008-003195 A (Tamron Co., Ltd.), Example 2, Figure 5, paragraphs 0081-0095. A patent design associated
 * with the A18 by its 16-element, 13-group construction and two hybrid aspheres, not a confirmed factory prescription.
 * Example 1 of the same patent has 15 elements, three hybrid aspheres, and does not close at tele as printed.
 *
 * Printed: every radius, thickness and d-line nd/vd (paragraph 0092), the two aspheres, and three zoom stations at
 * 18.43/57.80/241.83 mm, F3.47/5.01/6.35. The tele end is the patent's 241.83 mm against the marketed 250 mm; nothing
 * is rescaled. Not printed: the object conjugate (infinity is inferred from computed back focus matching D32 within
 * 0.005 mm), semi-diameters, iris diameter, and any close-focus state.
 *
 * Aspheres: the patent's conic A = 1.0 is K = A - 1 = 0. Both sit on 0.20 mm resin rows (r6-r7, r25-r26), which are
 * kept as the extra entries L4f and L13f; catalog.elementCount stays at the published 16.
 *
 * Zoom: the 126 unprinted stations are inferred. G3 travel is the path parameter, D24 and the G1 position follow
 * smooth monotone curves through the printed values, and G2 is solved for focus with the printed image-plane residual
 * interpolated. No gap or group reverses. Unprinted f-numbers follow a smooth iris curve through the printed stations.
 *
 * Focus: G2 moves toward the object (paragraph 0083), but no travel is printed, so both focus columns are identical.
 *
 * Semi-diameters: estimated from Figure 5 (wide end only), which is isotropic at about 0.122 mm per native pixel by
 * vertex spans and arc fits, then floor-checked by real-ray trace at the 14.5 mm plot height. L4's rear curve r8 ends
 * at sd 9.5 mm, just short of where it would meet r9 near 9.6 mm; rimExtensionSd 13 draws the figure's land out to the
 * element edge. That r8/r9 pair sets checks.gapSagFrac to 0.99, the smallest value admitting the land.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "tamron-a18-18-250mm-f35-63-di-ii",
  "maker": "Tamron",
  "name": "TAMRON AF 18-250mm f/3.5-6.3 Di II LD Aspherical [IF] MACRO (A18)",
  "subtitle": "JP 2008-003195 A, Example 2 — matches the Tamron A18 construction; zoom cam inferred",
  "catalog": {
    "lensMounts": [
      "canon-ef",
      "nikon-f",
      "sony-a",
      "pentax-k"
    ],
    "imageFormat": "aps-c",
    "imageCircleMm": 29,
    "specs": [
      "16 ELEMENTS / 13 GROUPS",
      "DESIGN f = 18.43–241.83 mm",
      "DESIGN F/3.47–6.35",
      "2 ASPHERICAL SURFACES / 2 ELEMENTS",
      "2 HYBRID RESIN ASPHERES"
    ],
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
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "focalLengthMm": -209.58533695242033,
      "glass": "S-TIH53 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Negative flint front of the cemented G1 doublet, paired with Element 2 for colour correction.",
      "diagramLabel": "L1",
      "cemented": "C1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "focalLengthMm": 120.9031767524762,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "HOYA FCD1 coordinate match (νd 81.61); Tamron's construction diagram marks this position LD.",
      "role": "Low-dispersion positive crown of the cemented G1 doublet; Tamron marks this position LD.",
      "diagramLabel": "L2",
      "cemented": "C1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.62299,
      "vd": 58.15,
      "indexReference": "d",
      "focalLengthMm": 139.88256106720715,
      "glass": "S-BSM15 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive meniscus closing G1; Tamron marks this position AD, but the printed coordinates are ordinary glass.",
      "diagramLabel": "L3"
    },
    {
      "id": 4,
      "name": "L4f",
      "label": "Hybrid resin layer on Element 4",
      "type": "Hybrid Aspheric Resin Layer (1× Asph)",
      "nd": 1.5146,
      "vd": 49.96,
      "indexReference": "d",
      "focalLengthMm": -374.713515680066,
      "glass": "Unmatched (hybrid optical resin; spectrum unpublished)",
      "role": "Thin resin layer bonded to Element 4; its front surface carries the G2 asphere.",
      "diagramLabel": "L4f",
      "cemented": "C6"
    },
    {
      "id": 5,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.804,
      "vd": 46.58,
      "indexReference": "d",
      "focalLengthMm": -21.09888266767846,
      "glass": "S-LAH65V (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Front negative meniscus of G2, carrying the bonded resin asphere; Tamron marks this position hybrid aspherical.",
      "diagramLabel": "L4",
      "cemented": "C6"
    },
    {
      "id": 6,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.83481,
      "vd": 42.72,
      "indexReference": "d",
      "focalLengthMm": -25.096936521149065,
      "glass": "TAFD5G (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Biconcave negative lens supplying G2 power.",
      "diagramLabel": "L5"
    },
    {
      "id": 7,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "focalLengthMm": 16.728647180665277,
      "glass": "S-TIH53 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "High-dispersion positive lens balancing colour against the G2 negatives.",
      "diagramLabel": "L6"
    },
    {
      "id": 8,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "nd": 1.883,
      "vd": 40.78,
      "indexReference": "d",
      "focalLengthMm": -22.37366417469386,
      "glass": "S-LAH58 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Rear biconcave negative lens of G2, ahead of the stop.",
      "diagramLabel": "L7"
    },
    {
      "id": 9,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.804,
      "vd": 46.58,
      "indexReference": "d",
      "focalLengthMm": -93.5116476284648,
      "glass": "S-LAH65V (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Negative front of the cemented doublet that opens G3 (lens 231, paragraph 0082).",
      "diagramLabel": "L8",
      "cemented": "C16"
    },
    {
      "id": 10,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.58913,
      "vd": 61.18,
      "indexReference": "d",
      "focalLengthMm": 38.23660707692615,
      "glass": "S-BAL35 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive rear of the cemented doublet that opens G3 (lens 232).",
      "diagramLabel": "L9",
      "cemented": "C16"
    },
    {
      "id": 11,
      "name": "L10",
      "label": "Element 10",
      "type": "Positive Meniscus",
      "nd": 1.48749,
      "vd": 70.21,
      "indexReference": "d",
      "focalLengthMm": 66.8667626057969,
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive meniscus of G3 with its larger radius to the image side (lens 233).",
      "diagramLabel": "L10"
    },
    {
      "id": 12,
      "name": "L11",
      "label": "Element 11",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "focalLengthMm": 49.70837814962158,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "HOYA FCD1 coordinate match (νd 81.61); the only rear element that fits the rear position Tamron's construction diagram marks LD.",
      "role": "Low-dispersion positive lens of G3 meeting condition (4) (lens 234); fits Tamron's rear LD position.",
      "diagramLabel": "L11"
    },
    {
      "id": 13,
      "name": "L12",
      "label": "Element 12",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.17,
      "indexReference": "d",
      "focalLengthMm": -29.211084767748407,
      "glass": "S-LAH60 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Biconcave negative lens closing G3 (lens 235).",
      "diagramLabel": "L12"
    },
    {
      "id": 14,
      "name": "L13f",
      "label": "Hybrid resin layer on Element 13",
      "type": "Hybrid Aspheric Resin Layer (1× Asph)",
      "nd": 1.5146,
      "vd": 49.96,
      "indexReference": "d",
      "focalLengthMm": 67340.66190421439,
      "glass": "Unmatched (hybrid optical resin; spectrum unpublished)",
      "role": "Thin resin layer bonded to Element 13; its front surface carries the G4 asphere.",
      "diagramLabel": "L13f",
      "cemented": "C25"
    },
    {
      "id": 15,
      "name": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.21,
      "indexReference": "d",
      "focalLengthMm": 42.91630431948858,
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Front positive lens of G4, carrying the bonded resin asphere; Tamron marks this position hybrid aspherical.",
      "diagramLabel": "L13",
      "cemented": "C25"
    },
    {
      "id": 16,
      "name": "L14",
      "label": "Element 14",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.21,
      "indexReference": "d",
      "focalLengthMm": 54.21263769927596,
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive lens of G4, nearly flat in front with its strong curve to the image.",
      "diagramLabel": "L14"
    },
    {
      "id": 17,
      "name": "L15",
      "label": "Element 15",
      "type": "Biconcave Negative",
      "nd": 1.804,
      "vd": 46.58,
      "indexReference": "d",
      "focalLengthMm": -22.461725752351047,
      "glass": "S-LAH65V (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Negative front of the cemented doublet that closes G4.",
      "diagramLabel": "L15",
      "cemented": "C30"
    },
    {
      "id": 18,
      "name": "L16",
      "label": "Element 16",
      "type": "Positive Meniscus",
      "nd": 1.54072,
      "vd": 47.23,
      "indexReference": "d",
      "focalLengthMm": 42.3977413783992,
      "glass": "S-TIL2 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive meniscus rear of the cemented doublet that closes G4; the last element.",
      "diagramLabel": "L16",
      "cemented": "C30"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 100,
      "d": 1.5,
      "sd": 25.7,
      "medium": 1
    },
    {
      "label": "2",
      "R": 63.5173,
      "d": 7,
      "sd": 25.7,
      "medium": 2
    },
    {
      "label": "3",
      "R": -1072.5164,
      "d": 0.2,
      "sd": 24.9
    },
    {
      "label": "4",
      "R": 63.0346,
      "d": 4.5,
      "sd": 23.9,
      "medium": 3
    },
    {
      "label": "5",
      "R": 221.587,
      "sd": 23.9
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
      "sd": 9.5,
      "rimExtensionSd": 13
    },
    {
      "label": "9",
      "R": -34.645,
      "d": 1,
      "sd": 9.8,
      "medium": 6
    },
    {
      "label": "10",
      "R": 53.702,
      "d": 0.8,
      "sd": 9.8
    },
    {
      "label": "11",
      "R": 29.1029,
      "d": 4.5,
      "sd": 9.8,
      "medium": 7
    },
    {
      "label": "12",
      "R": -25.6353,
      "d": 0.42,
      "sd": 9.8
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
      "sd": 9.2,
      "medium": 9
    },
    {
      "label": "17",
      "R": 25.0994,
      "d": 3,
      "sd": 9.2,
      "medium": 10
    },
    {
      "label": "18",
      "R": -210,
      "d": 1,
      "sd": 8.9
    },
    {
      "label": "19",
      "R": 24.5206,
      "d": 3,
      "sd": 9.9,
      "medium": 11
    },
    {
      "label": "20",
      "R": 95,
      "d": 0.5,
      "sd": 9.9
    },
    {
      "label": "21",
      "R": 23.9504,
      "d": 3.5,
      "sd": 9.5,
      "medium": 12
    },
    {
      "label": "22",
      "R": 746.013,
      "d": 0.65,
      "sd": 9.5
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
      "sd": 9
    },
    {
      "label": "25A",
      "R": 48.526,
      "d": 0.2,
      "sd": 9.5,
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
      "sd": 9.5,
      "medium": 15
    },
    {
      "label": "27",
      "R": -35.9079,
      "d": 0.2,
      "sd": 9.5
    },
    {
      "label": "28",
      "R": 8369.5957,
      "d": 3.5,
      "sd": 9.5,
      "medium": 16
    },
    {
      "label": "29",
      "R": -26.5082,
      "d": 0.2,
      "sd": 9.5
    },
    {
      "label": "30",
      "R": -533.718,
      "d": 1,
      "sd": 9.5,
      "medium": 17
    },
    {
      "label": "31",
      "R": 18.7073,
      "d": 3.5,
      "sd": 10,
      "medium": 18
    },
    {
      "label": "32",
      "R": 95,
      "sd": 10
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
        "focalLengthMm": 18.917414,
        "nominalFNumber": 3.49666
      },
      {
        "published": false,
        "focalLengthMm": 19.415254,
        "nominalFNumber": 3.5238
      },
      {
        "published": false,
        "focalLengthMm": 19.926196,
        "nominalFNumber": 3.55141
      },
      {
        "published": false,
        "focalLengthMm": 20.450582,
        "nominalFNumber": 3.57951
      },
      {
        "published": false,
        "focalLengthMm": 20.98877,
        "nominalFNumber": 3.60812
      },
      {
        "published": false,
        "focalLengthMm": 21.541121,
        "nominalFNumber": 3.63724
      },
      {
        "published": false,
        "focalLengthMm": 22.108007,
        "nominalFNumber": 3.66688
      },
      {
        "published": false,
        "focalLengthMm": 22.689812,
        "nominalFNumber": 3.69706
      },
      {
        "published": false,
        "focalLengthMm": 23.286928,
        "nominalFNumber": 3.72777
      },
      {
        "published": false,
        "focalLengthMm": 23.899758,
        "nominalFNumber": 3.75902
      },
      {
        "published": false,
        "focalLengthMm": 24.528716,
        "nominalFNumber": 3.79082
      },
      {
        "published": false,
        "focalLengthMm": 25.174225,
        "nominalFNumber": 3.82317
      },
      {
        "published": false,
        "focalLengthMm": 25.836722,
        "nominalFNumber": 3.85606
      },
      {
        "published": false,
        "focalLengthMm": 26.516653,
        "nominalFNumber": 3.8895
      },
      {
        "published": false,
        "focalLengthMm": 27.214479,
        "nominalFNumber": 3.92348
      },
      {
        "published": false,
        "focalLengthMm": 27.930668,
        "nominalFNumber": 3.95798
      },
      {
        "published": false,
        "focalLengthMm": 28.665705,
        "nominalFNumber": 3.99301
      },
      {
        "published": false,
        "focalLengthMm": 29.420087,
        "nominalFNumber": 4.02854
      },
      {
        "published": false,
        "focalLengthMm": 30.194319,
        "nominalFNumber": 4.06457
      },
      {
        "published": false,
        "focalLengthMm": 30.988927,
        "nominalFNumber": 4.10106
      },
      {
        "published": false,
        "focalLengthMm": 31.804447,
        "nominalFNumber": 4.13801
      },
      {
        "published": false,
        "focalLengthMm": 32.641427,
        "nominalFNumber": 4.17537
      },
      {
        "published": false,
        "focalLengthMm": 33.500436,
        "nominalFNumber": 4.21313
      },
      {
        "published": false,
        "focalLengthMm": 34.38205,
        "nominalFNumber": 4.25125
      },
      {
        "published": false,
        "focalLengthMm": 35.286863,
        "nominalFNumber": 4.2897
      },
      {
        "published": false,
        "focalLengthMm": 36.21549,
        "nominalFNumber": 4.32842
      },
      {
        "published": false,
        "focalLengthMm": 37.168553,
        "nominalFNumber": 4.36739
      },
      {
        "published": false,
        "focalLengthMm": 38.146699,
        "nominalFNumber": 4.40655
      },
      {
        "published": false,
        "focalLengthMm": 39.150586,
        "nominalFNumber": 4.44584
      },
      {
        "published": false,
        "focalLengthMm": 40.180893,
        "nominalFNumber": 4.48523
      },
      {
        "published": false,
        "focalLengthMm": 41.238312,
        "nominalFNumber": 4.52464
      },
      {
        "published": false,
        "focalLengthMm": 42.323558,
        "nominalFNumber": 4.56402
      },
      {
        "published": false,
        "focalLengthMm": 43.437367,
        "nominalFNumber": 4.60331
      },
      {
        "published": false,
        "focalLengthMm": 44.580485,
        "nominalFNumber": 4.64244
      },
      {
        "published": false,
        "focalLengthMm": 45.753686,
        "nominalFNumber": 4.68134
      },
      {
        "published": false,
        "focalLengthMm": 46.957763,
        "nominalFNumber": 4.71995
      },
      {
        "published": false,
        "focalLengthMm": 48.193525,
        "nominalFNumber": 4.7582
      },
      {
        "published": false,
        "focalLengthMm": 49.46181,
        "nominalFNumber": 4.79601
      },
      {
        "published": false,
        "focalLengthMm": 50.763469,
        "nominalFNumber": 4.83332
      },
      {
        "published": false,
        "focalLengthMm": 52.099384,
        "nominalFNumber": 4.87006
      },
      {
        "published": false,
        "focalLengthMm": 53.470458,
        "nominalFNumber": 4.90616
      },
      {
        "published": false,
        "focalLengthMm": 54.877614,
        "nominalFNumber": 4.94156
      },
      {
        "published": false,
        "focalLengthMm": 56.321797,
        "nominalFNumber": 4.97619
      },
      {
        "focalLengthMm": 57.8,
        "nominalFNumber": 5.01
      },
      {
        "published": false,
        "focalLengthMm": 58.797312,
        "nominalFNumber": 5.03178
      },
      {
        "published": false,
        "focalLengthMm": 59.8077,
        "nominalFNumber": 5.05333
      },
      {
        "published": false,
        "focalLengthMm": 60.835453,
        "nominalFNumber": 5.07467
      },
      {
        "published": false,
        "focalLengthMm": 61.880866,
        "nominalFNumber": 5.0958
      },
      {
        "published": false,
        "focalLengthMm": 62.944245,
        "nominalFNumber": 5.11672
      },
      {
        "published": false,
        "focalLengthMm": 64.025897,
        "nominalFNumber": 5.13744
      },
      {
        "published": false,
        "focalLengthMm": 65.126134,
        "nominalFNumber": 5.15797
      },
      {
        "published": false,
        "focalLengthMm": 66.24528,
        "nominalFNumber": 5.1783
      },
      {
        "published": false,
        "focalLengthMm": 67.383653,
        "nominalFNumber": 5.19845
      },
      {
        "published": false,
        "focalLengthMm": 68.541594,
        "nominalFNumber": 5.21841
      },
      {
        "published": false,
        "focalLengthMm": 69.719432,
        "nominalFNumber": 5.23819
      },
      {
        "published": false,
        "focalLengthMm": 70.917512,
        "nominalFNumber": 5.25779
      },
      {
        "published": false,
        "focalLengthMm": 72.136179,
        "nominalFNumber": 5.27722
      },
      {
        "published": false,
        "focalLengthMm": 73.375789,
        "nominalFNumber": 5.29648
      },
      {
        "published": false,
        "focalLengthMm": 74.636699,
        "nominalFNumber": 5.31557
      },
      {
        "published": false,
        "focalLengthMm": 75.919272,
        "nominalFNumber": 5.3345
      },
      {
        "published": false,
        "focalLengthMm": 77.223892,
        "nominalFNumber": 5.35328
      },
      {
        "published": false,
        "focalLengthMm": 78.550929,
        "nominalFNumber": 5.37189
      },
      {
        "published": false,
        "focalLengthMm": 79.900767,
        "nominalFNumber": 5.39035
      },
      {
        "published": false,
        "focalLengthMm": 81.273807,
        "nominalFNumber": 5.40865
      },
      {
        "published": false,
        "focalLengthMm": 82.670439,
        "nominalFNumber": 5.42681
      },
      {
        "published": false,
        "focalLengthMm": 84.091068,
        "nominalFNumber": 5.44482
      },
      {
        "published": false,
        "focalLengthMm": 85.536115,
        "nominalFNumber": 5.46268
      },
      {
        "published": false,
        "focalLengthMm": 87.005992,
        "nominalFNumber": 5.4804
      },
      {
        "published": false,
        "focalLengthMm": 88.501128,
        "nominalFNumber": 5.49799
      },
      {
        "published": false,
        "focalLengthMm": 90.021957,
        "nominalFNumber": 5.51543
      },
      {
        "published": false,
        "focalLengthMm": 91.56892,
        "nominalFNumber": 5.53274
      },
      {
        "published": false,
        "focalLengthMm": 93.142464,
        "nominalFNumber": 5.54992
      },
      {
        "published": false,
        "focalLengthMm": 94.743049,
        "nominalFNumber": 5.56696
      },
      {
        "published": false,
        "focalLengthMm": 96.371136,
        "nominalFNumber": 5.58387
      },
      {
        "published": false,
        "focalLengthMm": 98.027205,
        "nominalFNumber": 5.60066
      },
      {
        "published": false,
        "focalLengthMm": 99.711732,
        "nominalFNumber": 5.61732
      },
      {
        "published": false,
        "focalLengthMm": 101.425208,
        "nominalFNumber": 5.63386
      },
      {
        "published": false,
        "focalLengthMm": 103.168124,
        "nominalFNumber": 5.65028
      },
      {
        "published": false,
        "focalLengthMm": 104.941,
        "nominalFNumber": 5.66657
      },
      {
        "published": false,
        "focalLengthMm": 106.744334,
        "nominalFNumber": 5.68275
      },
      {
        "published": false,
        "focalLengthMm": 108.578661,
        "nominalFNumber": 5.69881
      },
      {
        "published": false,
        "focalLengthMm": 110.444501,
        "nominalFNumber": 5.71476
      },
      {
        "published": false,
        "focalLengthMm": 112.342412,
        "nominalFNumber": 5.73059
      },
      {
        "published": false,
        "focalLengthMm": 114.272937,
        "nominalFNumber": 5.74632
      },
      {
        "published": false,
        "focalLengthMm": 116.236629,
        "nominalFNumber": 5.76193
      },
      {
        "published": false,
        "focalLengthMm": 118.234069,
        "nominalFNumber": 5.77743
      },
      {
        "published": false,
        "focalLengthMm": 120.265847,
        "nominalFNumber": 5.79283
      },
      {
        "published": false,
        "focalLengthMm": 122.332525,
        "nominalFNumber": 5.80812
      },
      {
        "published": false,
        "focalLengthMm": 124.434723,
        "nominalFNumber": 5.8233
      },
      {
        "published": false,
        "focalLengthMm": 126.573037,
        "nominalFNumber": 5.83839
      },
      {
        "published": false,
        "focalLengthMm": 128.748105,
        "nominalFNumber": 5.85337
      },
      {
        "published": false,
        "focalLengthMm": 130.960552,
        "nominalFNumber": 5.86825
      },
      {
        "published": false,
        "focalLengthMm": 133.211015,
        "nominalFNumber": 5.88304
      },
      {
        "published": false,
        "focalLengthMm": 135.500145,
        "nominalFNumber": 5.89772
      },
      {
        "published": false,
        "focalLengthMm": 137.828618,
        "nominalFNumber": 5.91232
      },
      {
        "published": false,
        "focalLengthMm": 140.197109,
        "nominalFNumber": 5.92682
      },
      {
        "published": false,
        "focalLengthMm": 142.606296,
        "nominalFNumber": 5.94122
      },
      {
        "published": false,
        "focalLengthMm": 145.056882,
        "nominalFNumber": 5.95554
      },
      {
        "published": false,
        "focalLengthMm": 147.549582,
        "nominalFNumber": 5.96976
      },
      {
        "published": false,
        "focalLengthMm": 150.085109,
        "nominalFNumber": 5.98389
      },
      {
        "published": false,
        "focalLengthMm": 152.664206,
        "nominalFNumber": 5.99794
      },
      {
        "published": false,
        "focalLengthMm": 155.287641,
        "nominalFNumber": 6.0119
      },
      {
        "published": false,
        "focalLengthMm": 157.956147,
        "nominalFNumber": 6.02578
      },
      {
        "published": false,
        "focalLengthMm": 160.670511,
        "nominalFNumber": 6.03957
      },
      {
        "published": false,
        "focalLengthMm": 163.431513,
        "nominalFNumber": 6.05328
      },
      {
        "published": false,
        "focalLengthMm": 166.239971,
        "nominalFNumber": 6.06691
      },
      {
        "published": false,
        "focalLengthMm": 169.096686,
        "nominalFNumber": 6.08046
      },
      {
        "published": false,
        "focalLengthMm": 172.002487,
        "nominalFNumber": 6.09393
      },
      {
        "published": false,
        "focalLengthMm": 174.958221,
        "nominalFNumber": 6.10733
      },
      {
        "published": false,
        "focalLengthMm": 177.964754,
        "nominalFNumber": 6.12065
      },
      {
        "published": false,
        "focalLengthMm": 181.02294,
        "nominalFNumber": 6.13389
      },
      {
        "published": false,
        "focalLengthMm": 184.133705,
        "nominalFNumber": 6.14707
      },
      {
        "published": false,
        "focalLengthMm": 187.297897,
        "nominalFNumber": 6.16017
      },
      {
        "published": false,
        "focalLengthMm": 190.516474,
        "nominalFNumber": 6.1732
      },
      {
        "published": false,
        "focalLengthMm": 193.790358,
        "nominalFNumber": 6.18617
      },
      {
        "published": false,
        "focalLengthMm": 197.120519,
        "nominalFNumber": 6.19907
      },
      {
        "published": false,
        "focalLengthMm": 200.507878,
        "nominalFNumber": 6.21191
      },
      {
        "published": false,
        "focalLengthMm": 203.953476,
        "nominalFNumber": 6.22468
      },
      {
        "published": false,
        "focalLengthMm": 207.458266,
        "nominalFNumber": 6.2374
      },
      {
        "published": false,
        "focalLengthMm": 211.02329,
        "nominalFNumber": 6.25007
      },
      {
        "published": false,
        "focalLengthMm": 214.649563,
        "nominalFNumber": 6.26268
      },
      {
        "published": false,
        "focalLengthMm": 218.338172,
        "nominalFNumber": 6.27524
      },
      {
        "published": false,
        "focalLengthMm": 222.090153,
        "nominalFNumber": 6.28776
      },
      {
        "published": false,
        "focalLengthMm": 225.906606,
        "nominalFNumber": 6.30024
      },
      {
        "published": false,
        "focalLengthMm": 229.788654,
        "nominalFNumber": 6.3127
      },
      {
        "published": false,
        "focalLengthMm": 233.737397,
        "nominalFNumber": 6.32513
      },
      {
        "published": false,
        "focalLengthMm": 237.754007,
        "nominalFNumber": 6.33756
      },
      {
        "focalLengthMm": 241.83,
        "nominalFNumber": 6.35,
        "label": "241.83 mm"
      }
    ],
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 0.45,
    "description": "Inner focus: the second group (G2) moves toward the object (paragraph 0083). The patent prints no travel, object distance or near-focus spacing, so the model stays at infinity focus and the focus slider changes nothing. 0.45 m is Tamron's stated minimum focus distance, not a modelled state."
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
          2.44425,
          2.44425
        ],
        [
          3.116142,
          3.116142
        ],
        [
          3.78196,
          3.78196
        ],
        [
          4.441993,
          4.441993
        ],
        [
          5.096541,
          5.096541
        ],
        [
          5.745911,
          5.745911
        ],
        [
          6.390421,
          6.390421
        ],
        [
          7.030398,
          7.030398
        ],
        [
          7.666179,
          7.666179
        ],
        [
          8.29811,
          8.29811
        ],
        [
          8.926549,
          8.926549
        ],
        [
          9.551861,
          9.551861
        ],
        [
          10.17442,
          10.17442
        ],
        [
          10.794612,
          10.794612
        ],
        [
          11.412828,
          11.412828
        ],
        [
          12.029467,
          12.029467
        ],
        [
          12.644936,
          12.644936
        ],
        [
          13.259645,
          13.259645
        ],
        [
          13.874009,
          13.874009
        ],
        [
          14.488448,
          14.488448
        ],
        [
          15.103379,
          15.103379
        ],
        [
          15.719219,
          15.719219
        ],
        [
          16.336385,
          16.336385
        ],
        [
          16.955284,
          16.955284
        ],
        [
          17.576318,
          17.576318
        ],
        [
          18.199877,
          18.199877
        ],
        [
          18.826336,
          18.826336
        ],
        [
          19.456057,
          19.456057
        ],
        [
          20.089379,
          20.089379
        ],
        [
          20.726617,
          20.726617
        ],
        [
          21.36806,
          21.36806
        ],
        [
          22.013968,
          22.013968
        ],
        [
          22.664566,
          22.664566
        ],
        [
          23.32004,
          23.32004
        ],
        [
          23.980539,
          23.980539
        ],
        [
          24.646166,
          24.646166
        ],
        [
          25.316977,
          25.316977
        ],
        [
          25.992982,
          25.992982
        ],
        [
          26.674139,
          26.674139
        ],
        [
          27.360351,
          27.360351
        ],
        [
          28.051472,
          28.051472
        ],
        [
          28.7473,
          28.7473
        ],
        [
          29.447578,
          29.447578
        ],
        [
          30.152,
          30.152
        ],
        [
          30.615419,
          30.615419
        ],
        [
          31.078834,
          31.078834
        ],
        [
          31.54198,
          31.54198
        ],
        [
          32.004609,
          32.004609
        ],
        [
          32.46649,
          32.46649
        ],
        [
          32.927403,
          32.927403
        ],
        [
          33.387146,
          33.387146
        ],
        [
          33.845528,
          33.845528
        ],
        [
          34.30237,
          34.30237
        ],
        [
          34.757505,
          34.757505
        ],
        [
          35.210776,
          35.210776
        ],
        [
          35.662036,
          35.662036
        ],
        [
          36.111149,
          36.111149
        ],
        [
          36.557986,
          36.557986
        ],
        [
          37.002427,
          37.002427
        ],
        [
          37.44436,
          37.44436
        ],
        [
          37.88368,
          37.88368
        ],
        [
          38.320291,
          38.320291
        ],
        [
          38.754101,
          38.754101
        ],
        [
          39.185026,
          39.185026
        ],
        [
          39.612989,
          39.612989
        ],
        [
          40.037915,
          40.037915
        ],
        [
          40.459738,
          40.459738
        ],
        [
          40.878396,
          40.878396
        ],
        [
          41.293831,
          41.293831
        ],
        [
          41.70599,
          41.70599
        ],
        [
          42.114827,
          42.114827
        ],
        [
          42.520295,
          42.520295
        ],
        [
          42.922355,
          42.922355
        ],
        [
          43.320971,
          43.320971
        ],
        [
          43.716109,
          43.716109
        ],
        [
          44.10774,
          44.10774
        ],
        [
          44.495839,
          44.495839
        ],
        [
          44.880381,
          44.880381
        ],
        [
          45.261346,
          45.261346
        ],
        [
          45.638717,
          45.638717
        ],
        [
          46.012479,
          46.012479
        ],
        [
          46.38262,
          46.38262
        ],
        [
          46.749129,
          46.749129
        ],
        [
          47.111999,
          47.111999
        ],
        [
          47.471224,
          47.471224
        ],
        [
          47.8268,
          47.8268
        ],
        [
          48.178727,
          48.178727
        ],
        [
          48.527004,
          48.527004
        ],
        [
          48.871634,
          48.871634
        ],
        [
          49.212619,
          49.212619
        ],
        [
          49.549965,
          49.549965
        ],
        [
          49.883679,
          49.883679
        ],
        [
          50.213769,
          50.213769
        ],
        [
          50.540245,
          50.540245
        ],
        [
          50.863116,
          50.863116
        ],
        [
          51.182396,
          51.182396
        ],
        [
          51.498096,
          51.498096
        ],
        [
          51.810232,
          51.810232
        ],
        [
          52.118818,
          52.118818
        ],
        [
          52.423871,
          52.423871
        ],
        [
          52.725406,
          52.725406
        ],
        [
          53.023443,
          53.023443
        ],
        [
          53.317999,
          53.317999
        ],
        [
          53.609094,
          53.609094
        ],
        [
          53.896747,
          53.896747
        ],
        [
          54.18098,
          54.18098
        ],
        [
          54.461813,
          54.461813
        ],
        [
          54.739267,
          54.739267
        ],
        [
          55.013366,
          55.013366
        ],
        [
          55.28413,
          55.28413
        ],
        [
          55.551583,
          55.551583
        ],
        [
          55.815748,
          55.815748
        ],
        [
          56.076648,
          56.076648
        ],
        [
          56.334306,
          56.334306
        ],
        [
          56.588745,
          56.588745
        ],
        [
          56.839989,
          56.839989
        ],
        [
          57.088061,
          57.088061
        ],
        [
          57.332983,
          57.332983
        ],
        [
          57.574777,
          57.574777
        ],
        [
          57.813465,
          57.813465
        ],
        [
          58.049066,
          58.049066
        ],
        [
          58.2816,
          58.2816
        ],
        [
          58.511083,
          58.511083
        ],
        [
          58.737528,
          58.737528
        ],
        [
          58.960944,
          58.960944
        ],
        [
          59.181334,
          59.181334
        ],
        [
          59.398693,
          59.398693
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
          24.772388,
          24.772388
        ],
        [
          24.325161,
          24.325161
        ],
        [
          23.885394,
          23.885394
        ],
        [
          23.453153,
          23.453153
        ],
        [
          23.028492,
          23.028492
        ],
        [
          22.61146,
          22.61146
        ],
        [
          22.202096,
          22.202096
        ],
        [
          21.80043,
          21.80043
        ],
        [
          21.406483,
          21.406483
        ],
        [
          21.020269,
          21.020269
        ],
        [
          20.641792,
          20.641792
        ],
        [
          20.271048,
          20.271048
        ],
        [
          19.908024,
          19.908024
        ],
        [
          19.552699,
          19.552699
        ],
        [
          19.205041,
          19.205041
        ],
        [
          18.865011,
          18.865011
        ],
        [
          18.53256,
          18.53256
        ],
        [
          18.207629,
          18.207629
        ],
        [
          17.890152,
          17.890152
        ],
        [
          17.58005,
          17.58005
        ],
        [
          17.277236,
          17.277236
        ],
        [
          16.981615,
          16.981615
        ],
        [
          16.693078,
          16.693078
        ],
        [
          16.411511,
          16.411511
        ],
        [
          16.136788,
          16.136788
        ],
        [
          15.868771,
          15.868771
        ],
        [
          15.607317,
          15.607317
        ],
        [
          15.352269,
          15.352269
        ],
        [
          15.103464,
          15.103464
        ],
        [
          14.860727,
          14.860727
        ],
        [
          14.623877,
          14.623877
        ],
        [
          14.392723,
          14.392723
        ],
        [
          14.167064,
          14.167064
        ],
        [
          13.946695,
          13.946695
        ],
        [
          13.731401,
          13.731401
        ],
        [
          13.520961,
          13.520961
        ],
        [
          13.315149,
          13.315149
        ],
        [
          13.113731,
          13.113731
        ],
        [
          12.916472,
          12.916472
        ],
        [
          12.723129,
          12.723129
        ],
        [
          12.533458,
          12.533458
        ],
        [
          12.347212,
          12.347212
        ],
        [
          12.164143,
          12.164143
        ],
        [
          11.984,
          11.984
        ],
        [
          11.867344,
          11.867344
        ],
        [
          11.751826,
          11.751826
        ],
        [
          11.63736,
          11.63736
        ],
        [
          11.523866,
          11.523866
        ],
        [
          11.411266,
          11.411266
        ],
        [
          11.299487,
          11.299487
        ],
        [
          11.188459,
          11.188459
        ],
        [
          11.078114,
          11.078114
        ],
        [
          10.968389,
          10.968389
        ],
        [
          10.85922,
          10.85922
        ],
        [
          10.750549,
          10.750549
        ],
        [
          10.642318,
          10.642318
        ],
        [
          10.534472,
          10.534472
        ],
        [
          10.426958,
          10.426958
        ],
        [
          10.319724,
          10.319724
        ],
        [
          10.212721,
          10.212721
        ],
        [
          10.105898,
          10.105898
        ],
        [
          9.99921,
          9.99921
        ],
        [
          9.892611,
          9.892611
        ],
        [
          9.786055,
          9.786055
        ],
        [
          9.6795,
          9.6795
        ],
        [
          9.572903,
          9.572903
        ],
        [
          9.466222,
          9.466222
        ],
        [
          9.359417,
          9.359417
        ],
        [
          9.252448,
          9.252448
        ],
        [
          9.145276,
          9.145276
        ],
        [
          9.037863,
          9.037863
        ],
        [
          8.930171,
          8.930171
        ],
        [
          8.822163,
          8.822163
        ],
        [
          8.713803,
          8.713803
        ],
        [
          8.605054,
          8.605054
        ],
        [
          8.495881,
          8.495881
        ],
        [
          8.386249,
          8.386249
        ],
        [
          8.276124,
          8.276124
        ],
        [
          8.16547,
          8.16547
        ],
        [
          8.054255,
          8.054255
        ],
        [
          7.942444,
          7.942444
        ],
        [
          7.830005,
          7.830005
        ],
        [
          7.716903,
          7.716903
        ],
        [
          7.603106,
          7.603106
        ],
        [
          7.488582,
          7.488582
        ],
        [
          7.373297,
          7.373297
        ],
        [
          7.257218,
          7.257218
        ],
        [
          7.140315,
          7.140315
        ],
        [
          7.022554,
          7.022554
        ],
        [
          6.903904,
          6.903904
        ],
        [
          6.784331,
          6.784331
        ],
        [
          6.663804,
          6.663804
        ],
        [
          6.542291,
          6.542291
        ],
        [
          6.41976,
          6.41976
        ],
        [
          6.296178,
          6.296178
        ],
        [
          6.171513,
          6.171513
        ],
        [
          6.045733,
          6.045733
        ],
        [
          5.918806,
          5.918806
        ],
        [
          5.790699,
          5.790699
        ],
        [
          5.66138,
          5.66138
        ],
        [
          5.530816,
          5.530816
        ],
        [
          5.398973,
          5.398973
        ],
        [
          5.26582,
          5.26582
        ],
        [
          5.131323,
          5.131323
        ],
        [
          4.995449,
          4.995449
        ],
        [
          4.858164,
          4.858164
        ],
        [
          4.719435,
          4.719435
        ],
        [
          4.579228,
          4.579228
        ],
        [
          4.437509,
          4.437509
        ],
        [
          4.294243,
          4.294243
        ],
        [
          4.149397,
          4.149397
        ],
        [
          4.002934,
          4.002934
        ],
        [
          3.854822,
          3.854822
        ],
        [
          3.705024,
          3.705024
        ],
        [
          3.553505,
          3.553505
        ],
        [
          3.400229,
          3.400229
        ],
        [
          3.245162,
          3.245162
        ],
        [
          3.088266,
          3.088266
        ],
        [
          2.929507,
          2.929507
        ],
        [
          2.768848,
          2.768848
        ],
        [
          2.606254,
          2.606254
        ],
        [
          2.441688,
          2.441688
        ],
        [
          2.275116,
          2.275116
        ],
        [
          2.106503,
          2.106503
        ],
        [
          1.935815,
          1.935815
        ],
        [
          1.763021,
          1.763021
        ],
        [
          1.588091,
          1.588091
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
          7.764177,
          7.764177
        ],
        [
          7.738787,
          7.738787
        ],
        [
          7.706085,
          7.706085
        ],
        [
          7.666323,
          7.666323
        ],
        [
          7.619752,
          7.619752
        ],
        [
          7.566622,
          7.566622
        ],
        [
          7.507188,
          7.507188
        ],
        [
          7.441705,
          7.441705
        ],
        [
          7.370432,
          7.370432
        ],
        [
          7.293635,
          7.293635
        ],
        [
          7.211583,
          7.211583
        ],
        [
          7.124553,
          7.124553
        ],
        [
          7.03283,
          7.03283
        ],
        [
          6.936704,
          6.936704
        ],
        [
          6.836476,
          6.836476
        ],
        [
          6.732457,
          6.732457
        ],
        [
          6.624964,
          6.624964
        ],
        [
          6.514325,
          6.514325
        ],
        [
          6.40088,
          6.40088
        ],
        [
          6.284976,
          6.284976
        ],
        [
          6.166971,
          6.166971
        ],
        [
          6.047232,
          6.047232
        ],
        [
          5.926135,
          5.926135
        ],
        [
          5.804067,
          5.804067
        ],
        [
          5.681418,
          5.681418
        ],
        [
          5.558589,
          5.558589
        ],
        [
          5.435984,
          5.435984
        ],
        [
          5.314012,
          5.314012
        ],
        [
          5.193087,
          5.193087
        ],
        [
          5.07362,
          5.07362
        ],
        [
          4.956023,
          4.956023
        ],
        [
          4.840705,
          4.840705
        ],
        [
          4.728069,
          4.728069
        ],
        [
          4.618511,
          4.618511
        ],
        [
          4.512414,
          4.512414
        ],
        [
          4.41015,
          4.41015
        ],
        [
          4.312073,
          4.312073
        ],
        [
          4.218521,
          4.218521
        ],
        [
          4.129808,
          4.129808
        ],
        [
          4.046224,
          4.046224
        ],
        [
          3.968032,
          3.968032
        ],
        [
          3.895468,
          3.895468
        ],
        [
          3.828734,
          3.828734
        ],
        [
          3.768,
          3.768
        ],
        [
          3.73046,
          3.73046
        ],
        [
          3.693507,
          3.693507
        ],
        [
          3.657128,
          3.657128
        ],
        [
          3.621309,
          3.621309
        ],
        [
          3.586041,
          3.586041
        ],
        [
          3.551311,
          3.551311
        ],
        [
          3.517109,
          3.517109
        ],
        [
          3.483426,
          3.483426
        ],
        [
          3.45025,
          3.45025
        ],
        [
          3.417573,
          3.417573
        ],
        [
          3.385385,
          3.385385
        ],
        [
          3.353678,
          3.353678
        ],
        [
          3.322445,
          3.322445
        ],
        [
          3.291675,
          3.291675
        ],
        [
          3.261363,
          3.261363
        ],
        [
          3.231499,
          3.231499
        ],
        [
          3.202078,
          3.202078
        ],
        [
          3.173091,
          3.173091
        ],
        [
          3.144532,
          3.144532
        ],
        [
          3.116395,
          3.116395
        ],
        [
          3.088672,
          3.088672
        ],
        [
          3.061359,
          3.061359
        ],
        [
          3.034447,
          3.034447
        ],
        [
          3.007933,
          3.007933
        ],
        [
          2.981809,
          2.981809
        ],
        [
          2.95607,
          2.95607
        ],
        [
          2.930711,
          2.930711
        ],
        [
          2.905727,
          2.905727
        ],
        [
          2.881112,
          2.881112
        ],
        [
          2.856861,
          2.856861
        ],
        [
          2.832969,
          2.832969
        ],
        [
          2.809432,
          2.809432
        ],
        [
          2.786245,
          2.786245
        ],
        [
          2.763402,
          2.763402
        ],
        [
          2.7409,
          2.7409
        ],
        [
          2.718734,
          2.718734
        ],
        [
          2.6969,
          2.6969
        ],
        [
          2.675394,
          2.675394
        ],
        [
          2.654211,
          2.654211
        ],
        [
          2.633348,
          2.633348
        ],
        [
          2.6128,
          2.6128
        ],
        [
          2.592564,
          2.592564
        ],
        [
          2.572636,
          2.572636
        ],
        [
          2.553012,
          2.553012
        ],
        [
          2.533689,
          2.533689
        ],
        [
          2.514662,
          2.514662
        ],
        [
          2.49593,
          2.49593
        ],
        [
          2.477487,
          2.477487
        ],
        [
          2.459331,
          2.459331
        ],
        [
          2.441459,
          2.441459
        ],
        [
          2.423867,
          2.423867
        ],
        [
          2.406552,
          2.406552
        ],
        [
          2.389512,
          2.389512
        ],
        [
          2.372742,
          2.372742
        ],
        [
          2.35624,
          2.35624
        ],
        [
          2.340004,
          2.340004
        ],
        [
          2.32403,
          2.32403
        ],
        [
          2.308316,
          2.308316
        ],
        [
          2.292858,
          2.292858
        ],
        [
          2.277654,
          2.277654
        ],
        [
          2.262702,
          2.262702
        ],
        [
          2.247998,
          2.247998
        ],
        [
          2.23354,
          2.23354
        ],
        [
          2.219326,
          2.219326
        ],
        [
          2.205353,
          2.205353
        ],
        [
          2.191619,
          2.191619
        ],
        [
          2.17812,
          2.17812
        ],
        [
          2.164855,
          2.164855
        ],
        [
          2.151821,
          2.151821
        ],
        [
          2.139015,
          2.139015
        ],
        [
          2.126436,
          2.126436
        ],
        [
          2.114079,
          2.114079
        ],
        [
          2.101944,
          2.101944
        ],
        [
          2.090026,
          2.090026
        ],
        [
          2.078323,
          2.078323
        ],
        [
          2.066832,
          2.066832
        ],
        [
          2.05555,
          2.05555
        ],
        [
          2.044472,
          2.044472
        ],
        [
          2.033595,
          2.033595
        ],
        [
          2.022914,
          2.022914
        ],
        [
          2.012422,
          2.012422
        ],
        [
          2.002113,
          2.002113
        ],
        [
          1.991976,
          1.991976
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
          40.120704,
          40.120704
        ],
        [
          40.666881,
          40.666881
        ],
        [
          41.221401,
          41.221401
        ],
        [
          41.784123,
          41.784123
        ],
        [
          42.354894,
          42.354894
        ],
        [
          42.93355,
          42.93355
        ],
        [
          43.519914,
          43.519914
        ],
        [
          44.113794,
          44.113794
        ],
        [
          44.714983,
          44.714983
        ],
        [
          45.323257,
          45.323257
        ],
        [
          45.938377,
          45.938377
        ],
        [
          46.560083,
          46.560083
        ],
        [
          47.188095,
          47.188095
        ],
        [
          47.822116,
          47.822116
        ],
        [
          48.461824,
          48.461824
        ],
        [
          49.106877,
          49.106877
        ],
        [
          49.756907,
          49.756907
        ],
        [
          50.411525,
          50.411525
        ],
        [
          51.070316,
          51.070316
        ],
        [
          51.73284,
          51.73284
        ],
        [
          52.39863,
          52.39863
        ],
        [
          53.067195,
          53.067195
        ],
        [
          53.738019,
          53.738019
        ],
        [
          54.410556,
          54.410556
        ],
        [
          55.084239,
          55.084239
        ],
        [
          55.758474,
          55.758474
        ],
        [
          56.432645,
          56.432645
        ],
        [
          57.106111,
          57.106111
        ],
        [
          57.778211,
          57.778211
        ],
        [
          58.448266,
          58.448266
        ],
        [
          59.115579,
          59.115579
        ],
        [
          59.779438,
          59.779438
        ],
        [
          60.439121,
          60.439121
        ],
        [
          61.093897,
          61.093897
        ],
        [
          61.743031,
          61.743031
        ],
        [
          62.385785,
          62.385785
        ],
        [
          63.021428,
          63.021428
        ],
        [
          63.649234,
          63.649234
        ],
        [
          64.268489,
          64.268489
        ],
        [
          64.878499,
          64.878499
        ],
        [
          65.478587,
          65.478587
        ],
        [
          66.068106,
          66.068106
        ],
        [
          66.646438,
          66.646438
        ],
        [
          67.213,
          67.213
        ],
        [
          67.578493,
          67.578493
        ],
        [
          67.939782,
          67.939782
        ],
        [
          68.29699,
          68.29699
        ],
        [
          68.650232,
          68.650232
        ],
        [
          68.999619,
          68.999619
        ],
        [
          69.345256,
          69.345256
        ],
        [
          69.687243,
          69.687243
        ],
        [
          70.025674,
          70.025674
        ],
        [
          70.36064,
          70.36064
        ],
        [
          70.692227,
          70.692227
        ],
        [
          71.020518,
          71.020518
        ],
        [
          71.345592,
          71.345592
        ],
        [
          71.667524,
          71.667524
        ],
        [
          71.986388,
          71.986388
        ],
        [
          72.302254,
          72.302254
        ],
        [
          72.615188,
          72.615188
        ],
        [
          72.925255,
          72.925255
        ],
        [
          73.232518,
          73.232518
        ],
        [
          73.537037,
          73.537037
        ],
        [
          73.83887,
          73.83887
        ],
        [
          74.138073,
          74.138073
        ],
        [
          74.4347,
          74.4347
        ],
        [
          74.728803,
          74.728803
        ],
        [
          75.020435,
          75.020435
        ],
        [
          75.309643,
          75.309643
        ],
        [
          75.596477,
          75.596477
        ],
        [
          75.880981,
          75.880981
        ],
        [
          76.163203,
          76.163203
        ],
        [
          76.443185,
          76.443185
        ],
        [
          76.72097,
          76.72097
        ],
        [
          76.9966,
          76.9966
        ],
        [
          77.270115,
          77.270115
        ],
        [
          77.541556,
          77.541556
        ],
        [
          77.81096,
          77.81096
        ],
        [
          78.078365,
          78.078365
        ],
        [
          78.343807,
          78.343807
        ],
        [
          78.607324,
          78.607324
        ],
        [
          78.86895,
          78.86895
        ],
        [
          79.128719,
          79.128719
        ],
        [
          79.386665,
          79.386665
        ],
        [
          79.642822,
          79.642822
        ],
        [
          79.89722,
          79.89722
        ],
        [
          80.149893,
          80.149893
        ],
        [
          80.400871,
          80.400871
        ],
        [
          80.650184,
          80.650184
        ],
        [
          80.897864,
          80.897864
        ],
        [
          81.143938,
          81.143938
        ],
        [
          81.388438,
          81.388438
        ],
        [
          81.63139,
          81.63139
        ],
        [
          81.872823,
          81.872823
        ],
        [
          82.112765,
          82.112765
        ],
        [
          82.351244,
          82.351244
        ],
        [
          82.588287,
          82.588287
        ],
        [
          82.82392,
          82.82392
        ],
        [
          83.05817,
          83.05817
        ],
        [
          83.291064,
          83.291064
        ],
        [
          83.522628,
          83.522628
        ],
        [
          83.752888,
          83.752888
        ],
        [
          83.981869,
          83.981869
        ],
        [
          84.209598,
          84.209598
        ],
        [
          84.436102,
          84.436102
        ],
        [
          84.661405,
          84.661405
        ],
        [
          84.885535,
          84.885535
        ],
        [
          85.108517,
          85.108517
        ],
        [
          85.33038,
          85.33038
        ],
        [
          85.55115,
          85.55115
        ],
        [
          85.770856,
          85.770856
        ],
        [
          85.989527,
          85.989527
        ],
        [
          86.207193,
          86.207193
        ],
        [
          86.423886,
          86.423886
        ],
        [
          86.63964,
          86.63964
        ],
        [
          86.85449,
          86.85449
        ],
        [
          87.068475,
          87.068475
        ],
        [
          87.281638,
          87.281638
        ],
        [
          87.494026,
          87.494026
        ],
        [
          87.705693,
          87.705693
        ],
        [
          87.916699,
          87.916699
        ],
        [
          88.127117,
          88.127117
        ],
        [
          88.337033,
          88.337033
        ],
        [
          88.546552,
          88.546552
        ],
        [
          88.755807,
          88.755807
        ],
        [
          88.964968,
          88.964968
        ],
        [
          89.174262,
          89.174262
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
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "G2",
      "fromSurface": "6A",
      "toSurface": "14"
    },
    {
      "text": "G3",
      "fromSurface": "16",
      "toSurface": "24"
    },
    {
      "text": "G4",
      "fromSurface": "25A",
      "toSurface": "32"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "C6",
      "fromSurface": "6A",
      "toSurface": "8"
    },
    {
      "text": "C16",
      "fromSurface": "16",
      "toSurface": "18"
    },
    {
      "text": "C25",
      "fromSurface": "25A",
      "toSurface": "27"
    },
    {
      "text": "C30",
      "fromSurface": "30",
      "toSurface": "32"
    }
  ],
  "checks": {
    "gapSagFrac": 0.99
  },
  "layout": {
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
