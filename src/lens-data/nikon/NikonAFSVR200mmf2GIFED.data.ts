import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 7,411,745 B2, Example 3 (Table 3, Figure 7): a patent design associated with the Nikon AF-S VR Nikkor
 * 200mm f/2G IF-ED, not a confirmed factory prescription. Example 3 is the only example in the patent with
 * 13 elements in 9 groups and three νd 82.6 plus one νd 91.0 elements, matching Nikon's three ED and one Super ED.
 * Kept at the patent's scale, f = 195 mm, F/1.84, 2ω = 12.62°, with no scaling to the marketed 200 mm f/2.
 * 13 spherical elements in 9 groups, four of them cemented pairs: G1 six elements, G2 four, G3 three.
 * R, d, nd, νd and ng are printed values.
 * Printed stop: surface 17, 133.5139 mm behind surface 1; its radius follows from F/1.84.
 * D10, D16 and BF are the printed infinity and closest-distance spacings. The patent prints β = −0.1258 and no
 * distance; those spacings compute to about 1.897 m object to image, and closeFocusM is Nikon's 1.9 m.
 * The infinity image plane is the printed BF, 59.4575 mm; the paraxial back focus computes to 59.461 mm.
 * The patent prints no clear apertures: sd values are estimated from Figure 7 at 0.0954 mm/px and floor-checked by
 * real-ray trace at both printed focus states. Where Figure 7 ends a curved face short of the element edge, sd is the
 * end of the curve and rimExtensionSd the flat land beyond it, on surfaces 5, 7, 10, 13 and 16. L11 is square-cut at
 * 53.5 mm on both faces, as Figure 7 draws it; the short ends of the Figures 8A and 9A coma fans trace to the same rim.
 * L33 is 21.5 mm, above the 20.4 mm Figure 7 draws, to hold the corner light.
 * L15 has a flat rear land outside its cemented joint in Figure 7; a cemented face cannot carry one.
 * Nikon's protective meniscus and drop-in filter are not in the patent and are not modeled.
 * VR decentering of G3 is not modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "nikon-af-s-vr-200mm-f2g-if-ed",
  "maker": "Nikon",
  "name": "NIKON AF-S VR NIKKOR 200mm f/2 G IF-ED",
  "subtitle": "US 7,411,745 B2, Example 3 — design f = 195 mm F/1.84 for the marketed 200 mm f/2",
  "catalog": {
    "lensMounts": [
      "nikon-f"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 13,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": 200,
      "design": 195
    },
    "fNumber": {
      "marketing": 2,
      "design": 1.84
    },
    "specs": [
      "13 ELEMENTS / 9 GROUPS",
      "DESIGN f = 195 mm",
      "DESIGN F/1.84",
      "ALL SPHERICAL",
      "3 ED + 1 SUPER ED ELEMENTS"
    ]
  },
  "source": {
    "patentNumber": "US 7,411,745 B2",
    "example": {
      "label": "Example 3",
      "id": "3"
    },
    "patentYear": 2008,
    "authors": [
      "Mitsuaki Wada"
    ],
    "assignees": [
      "Nikon Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "label": "Element 1",
      "diagramLabel": "L11",
      "type": "Biconvex Positive",
      "nd": 1.49782,
      "vd": 82.6,
      "ng": 1.50526,
      "indexReference": "d",
      "glass": "J-FKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 181.28751241372768,
      "apd": "inferred",
      "apdNote": "Nikon's construction drawing marks this position ED; the patent prints νd 82.6 and does not designate the glass as anomalous.",
      "role": "Biconvex front collector of fixed group G1"
    },
    {
      "id": 2,
      "name": "L12",
      "label": "Element 2",
      "diagramLabel": "L12",
      "type": "Biconvex Positive",
      "nd": 1.49782,
      "vd": 82.6,
      "ng": 1.50526,
      "indexReference": "d",
      "glass": "J-FKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 136.79073059164915,
      "apd": "inferred",
      "apdNote": "Nikon's construction drawing marks this position ED; the patent prints νd 82.6 and does not designate the glass as anomalous.",
      "role": "Positive member of G1's first cemented pair",
      "cemented": "C1"
    },
    {
      "id": 3,
      "name": "L13",
      "label": "Element 3",
      "diagramLabel": "L13",
      "type": "Biconcave Negative",
      "nd": 1.7481,
      "vd": 52.3,
      "ng": 1.76589,
      "indexReference": "d",
      "glass": "E-LAKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -115.80066885493916,
      "role": "Negative member of G1's first cemented pair",
      "cemented": "C1"
    },
    {
      "id": 4,
      "name": "L14",
      "label": "Element 4",
      "diagramLabel": "L14",
      "type": "Positive Meniscus",
      "nd": 1.44679,
      "vd": 91.0,
      "ng": 1.45282,
      "dPgF": 0.0542,
      "indexReference": "d",
      "glass": "Unmatched (Super ED glass; no public catalog row)",
      "focalLengthMm": 264.58105701813776,
      "apd": "inferred",
      "apdNote": "Nikon's construction drawing marks this position Super ED; the patent prints νd 91.0 and does not designate the glass as anomalous. dPgF places the g-line index on the printed ng.",
      "role": "Positive meniscus of G1 between its two cemented pairs"
    },
    {
      "id": 5,
      "name": "L15",
      "label": "Element 5",
      "diagramLabel": "L15",
      "type": "Negative Meniscus",
      "nd": 1.7481,
      "vd": 52.3,
      "ng": 1.76589,
      "indexReference": "d",
      "glass": "E-LAKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -87.44483815990162,
      "role": "Negative member of G1's second cemented pair",
      "cemented": "C2"
    },
    {
      "id": 6,
      "name": "L16",
      "label": "Element 6",
      "diagramLabel": "L16",
      "type": "Positive Meniscus",
      "nd": 1.49782,
      "vd": 82.6,
      "ng": 1.50526,
      "indexReference": "d",
      "glass": "J-FKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 89.04146620611697,
      "apd": "inferred",
      "apdNote": "Nikon's construction drawing marks this position ED; the patent prints νd 82.6 and does not designate the glass as anomalous.",
      "role": "Positive rear member of G1's second cemented pair",
      "cemented": "C2"
    },
    {
      "id": 7,
      "name": "L21",
      "label": "Element 7",
      "diagramLabel": "L21",
      "type": "Positive Meniscus",
      "nd": 1.80454,
      "vd": 39.6,
      "ng": 1.8305,
      "indexReference": "d",
      "glass": "NBFD3 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 138.6539455513488,
      "role": "Positive member of focusing group G2's first cemented pair",
      "cemented": "C3"
    },
    {
      "id": 8,
      "name": "L22",
      "label": "Element 8",
      "diagramLabel": "L22",
      "type": "Biconcave Negative",
      "nd": 1.51454,
      "vd": 54.6,
      "ng": 1.52632,
      "indexReference": "d",
      "glass": "KF3 (SUMITA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -68.99141746086191,
      "role": "Negative member of focusing group G2's first cemented pair",
      "cemented": "C3"
    },
    {
      "id": 9,
      "name": "L23",
      "label": "Element 9",
      "diagramLabel": "L23",
      "type": "Positive Meniscus",
      "nd": 1.80384,
      "vd": 33.9,
      "ng": 1.83464,
      "indexReference": "d",
      "glass": "E-LAFH2 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 117.70049267462053,
      "role": "Positive member of focusing group G2's second cemented pair",
      "cemented": "C4"
    },
    {
      "id": 10,
      "name": "L24",
      "label": "Element 10",
      "diagramLabel": "L24",
      "type": "Biconcave Negative",
      "nd": 1.6228,
      "vd": 57.0,
      "ng": 1.63639,
      "indexReference": "d",
      "glass": "S-BSM10 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -42.42029459716117,
      "role": "Negative member of focusing group G2's second cemented pair",
      "cemented": "C4"
    },
    {
      "id": 11,
      "name": "L31",
      "label": "Element 11",
      "diagramLabel": "L31",
      "type": "Biconvex Positive",
      "nd": 1.7481,
      "vd": 52.3,
      "ng": 1.76589,
      "indexReference": "d",
      "glass": "E-LAKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 78.30280447872047,
      "role": "Biconvex front singlet of vibration-reduction group G3"
    },
    {
      "id": 12,
      "name": "L32",
      "label": "Element 12",
      "diagramLabel": "L32",
      "type": "Negative Meniscus",
      "nd": 1.72825,
      "vd": 28.5,
      "ng": 1.762,
      "indexReference": "d",
      "glass": "S-TIH10 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -129.8292663189814,
      "role": "Negative meniscus of vibration-reduction group G3"
    },
    {
      "id": 13,
      "name": "L33",
      "label": "Element 13",
      "diagramLabel": "L33",
      "type": "Biconvex Positive",
      "nd": 1.64,
      "vd": 60.1,
      "ng": 1.65311,
      "indexReference": "d",
      "glass": "S-BSM81 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 93.01030938766219,
      "role": "Biconvex rear singlet of vibration-reduction group G3"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 104.204,
      "d": 20.0,
      "medium": 1,
      "sd": 53.5
    },
    {
      "label": "2",
      "R": -630.89,
      "d": 0.3,
      "sd": 53.5
    },
    {
      "label": "3",
      "R": 88.701,
      "d": 21.0,
      "medium": 2,
      "sd": 48.1
    },
    {
      "label": "4",
      "R": -270.095,
      "d": 4.0,
      "medium": 3,
      "sd": 47.1
    },
    {
      "label": "5",
      "R": 128.345,
      "d": 15.39,
      "sd": 42.2,
      "rimExtensionSd": 47.1
    },
    {
      "label": "6",
      "R": 71.441,
      "d": 8.0,
      "medium": 4,
      "sd": 37.3
    },
    {
      "label": "7",
      "R": 174.32,
      "d": 1.0,
      "sd": 35.8,
      "rimExtensionSd": 37.3
    },
    {
      "label": "8",
      "R": 74.005,
      "d": 3.0,
      "medium": 5,
      "sd": 34.4
    },
    {
      "label": "9",
      "R": 34.121,
      "d": 15.0,
      "medium": 6,
      "sd": 29.4
    },
    {
      "label": "10",
      "R": 126.546,
      "sd": 28.5,
      "rimExtensionSd": 29.4
    },
    {
      "label": "11",
      "R": -957.711,
      "d": 4.8,
      "medium": 7,
      "sd": 25.5
    },
    {
      "label": "12",
      "R": -100.138,
      "d": 3.0,
      "medium": 8,
      "sd": 24.9
    },
    {
      "label": "13",
      "R": 55.554,
      "d": 8.0,
      "sd": 20.8,
      "rimExtensionSd": 24.9
    },
    {
      "label": "14",
      "R": -109.151,
      "d": 6.0,
      "medium": 9,
      "sd": 21.0
    },
    {
      "label": "15",
      "R": -51.923,
      "d": 3.0,
      "medium": 10,
      "sd": 20.9
    },
    {
      "label": "16",
      "R": 54.98,
      "sd": 19.0,
      "rimExtensionSd": 20.9
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.2
    },
    {
      "label": "18",
      "R": 111.154,
      "d": 4.5,
      "medium": 11,
      "sd": 19.5
    },
    {
      "label": "19",
      "R": -121.699,
      "d": 2.7,
      "sd": 19.5
    },
    {
      "label": "20",
      "R": -49.128,
      "d": 3.0,
      "medium": 12,
      "sd": 19.3
    },
    {
      "label": "21",
      "R": -104.898,
      "d": 8.0,
      "sd": 19.5
    },
    {
      "label": "22",
      "R": 413.276,
      "d": 5.0,
      "medium": 13,
      "sd": 21.5
    },
    {
      "label": "23",
      "R": -69.215,
      "sd": 21.5
    }
  ],
  "focus": {
    "closeFocusM": 1.9,
    "description": "PUBLISHED internal-focus states from US 7,411,745 B2 Example 3: G2 moves 9.5995 mm toward the image, with D10 5.5000→15.0995 mm, D16 15.5239→5.9244 mm and BF 59.4575→59.4386 mm. The patent prints β = −0.1258 and no distance; these spacings compute to about 1.897 m object to image, against Nikon's 1.9 m minimum focus.",
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 1678.45,
        "distanceReference": "first-surface",
        "sourceMagnification": "0.1258",
        "source": "US 7,411,745 B2, Example 3 (PDF p. 24): prints “β = −0.1258” for the close-focus state whose gaps this keyframe carries, a magnification with no object distance. The object distance is solved from the prescription at magnification 0.12575, the nearest value that rounds to the print; focused on its image plane the state gives 0.12565."
      }
    ],
    "published": [
      1
    ]
  },
  "gaps": {
    "10": {
      "label": "D10",
      "values": [
        [
          5.5,
          15.0995
        ]
      ]
    },
    "16": {
      "label": "D16",
      "values": [
        [
          15.5239,
          5.9244
        ]
      ]
    },
    "23": {
      "label": "BF",
      "values": [
        [
          59.4575,
          59.4386
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.84,
    "fStops": [
      1.84,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22,
    "blades": 9
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 12.62,
    "maxTraceFieldDeg": 6.31
  },
  "groups": [
    {
      "text": "G1 (+) / FIXED",
      "fromSurface": "1",
      "toSurface": "10"
    },
    {
      "text": "G2 (−) / FOCUS → IMG",
      "fromSurface": "11",
      "toSurface": "16"
    },
    {
      "text": "G3 (+) / VR",
      "fromSurface": "18",
      "toSurface": "23"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "C2",
      "fromSurface": "8",
      "toSurface": "10"
    },
    {
      "text": "C3",
      "fromSurface": "11",
      "toSurface": "13"
    },
    {
      "text": "C4",
      "fromSurface": "14",
      "toSurface": "16"
    }
  ],
  "layout": {
    "yScFill": 0.78
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
