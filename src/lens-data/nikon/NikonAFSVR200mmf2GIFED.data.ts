import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** US7411745B2 Example 3, Table 3/Figure 7. Grade B probable product-family correlation.
 * Literal 195mm f/1.84 and printed infinity BFL59.4575mm; no retail scaling or refocus.
 * 13 spherical powered elements/9 components; four cemented pairs. Manufacturer protective
 * glass is absent from the table and is not fabricated. Literal nd/vd/ng retained.
 * Clear semi-diameters are a bounded EP/figure/solid-geometry inference. The rejected initial
 * S9 estimate and all raw clipping/failure records remain in private evidence. No contrast tuning.
 * Source stop S17 is explicit at z133.5139mm; canonical infinity-only closeFocusM1e15.
 * Source near spacings and retail1.9m do not certify finite conjugates or VR decentering.
 * Native diffraction is a qualified scalar estimate, not an independent phase/factory reference.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "nikon-af-s-vr-200mm-f2g-if-ed",
  "maker": "Nikon",
  "name": "NIKON AF-S VR NIKKOR 200mm f/2 G IF-ED",
  "subtitle": "US 7,411,745 B2 Example 3; Grade B probable family, literal 195mm f/1.84 reconstruction",
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
      "Grade B probable optical family; exact factory prescription unproven",
      "Literal195mm f/1.84; marketed200mm f/2",
      "Infinity-only; inferred clear apertures; source clipping retained"
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
      "name": "L1",
      "label": "Element 1",
      "diagramLabel": "L11",
      "type": "Biconvex Positive",
      "nd": 1.49782,
      "vd": 82.6,
      "ng": 1.50526,
      "indexReference": "d",
      "glass": "J-FKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 181.28751241372768,
      "role": "Front group G1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "diagramLabel": "L12",
      "type": "Biconvex Positive",
      "nd": 1.49782,
      "vd": 82.6,
      "ng": 1.50526,
      "indexReference": "d",
      "glass": "J-FKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 136.79073059164915,
      "role": "Front group G1",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "diagramLabel": "L13",
      "type": "Biconcave Negative",
      "nd": 1.7481,
      "vd": 52.3,
      "ng": 1.76589,
      "indexReference": "d",
      "glass": "E-LAKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -115.80066885493916,
      "role": "Front group G1",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "diagramLabel": "L14",
      "type": "Positive Meniscus",
      "nd": 1.44679,
      "vd": 91.0,
      "ng": 1.45282,
      "indexReference": "d",
      "glass": "Unmatched (Super ED glass; no public catalog row)",
      "focalLengthMm": 264.58105701813776,
      "role": "Front group G1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "diagramLabel": "L15",
      "type": "Negative Meniscus",
      "nd": 1.7481,
      "vd": 52.3,
      "ng": 1.76589,
      "indexReference": "d",
      "glass": "E-LAKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -87.44483815990162,
      "role": "Front group G1",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "diagramLabel": "L16",
      "type": "Positive Meniscus",
      "nd": 1.49782,
      "vd": 82.6,
      "ng": 1.50526,
      "indexReference": "d",
      "glass": "J-FKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 89.04146620611697,
      "role": "Front group G1",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "diagramLabel": "L21",
      "type": "Positive Meniscus",
      "nd": 1.80454,
      "vd": 39.6,
      "ng": 1.8305,
      "indexReference": "d",
      "glass": "NBFD3 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 138.6539455513488,
      "role": "Focusing group G2, frozen at infinity",
      "cemented": "D3"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "diagramLabel": "L22",
      "type": "Biconcave Negative",
      "nd": 1.51454,
      "vd": 54.6,
      "ng": 1.52632,
      "indexReference": "d",
      "glass": "KF3 (SUMITA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -68.99141746086191,
      "role": "Focusing group G2, frozen at infinity",
      "cemented": "D3"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "diagramLabel": "L23",
      "type": "Positive Meniscus",
      "nd": 1.80384,
      "vd": 33.9,
      "ng": 1.83464,
      "indexReference": "d",
      "glass": "E-LAFH2 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 117.70049267462053,
      "role": "Focusing group G2, frozen at infinity",
      "cemented": "D4"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "diagramLabel": "L24",
      "type": "Biconcave Negative",
      "nd": 1.6228,
      "vd": 57.0,
      "ng": 1.63639,
      "indexReference": "d",
      "glass": "S-BSM10 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -42.42029459716117,
      "role": "Focusing group G2, frozen at infinity",
      "cemented": "D4"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "diagramLabel": "L31",
      "type": "Biconvex Positive",
      "nd": 1.7481,
      "vd": 52.3,
      "ng": 1.76589,
      "indexReference": "d",
      "glass": "E-LAKH1 (HIKARI catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 78.30280447872047,
      "role": "VR group G3, centered only"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "diagramLabel": "L32",
      "type": "Negative Meniscus",
      "nd": 1.72825,
      "vd": 28.5,
      "ng": 1.762,
      "indexReference": "d",
      "glass": "S-TIH10 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -129.8292663189814,
      "role": "VR group G3, centered only"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "diagramLabel": "L33",
      "type": "Biconvex Positive",
      "nd": 1.64,
      "vd": 60.1,
      "ng": 1.65311,
      "indexReference": "d",
      "glass": "S-BSM81 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 93.01030938766219,
      "role": "VR group G3, centered only"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 104.204,
      "d": 20.0,
      "medium": 1,
      "sd": 57.5
    },
    {
      "label": "2",
      "R": -630.89,
      "d": 0.3,
      "sd": 55.0
    },
    {
      "label": "3",
      "R": 88.701,
      "d": 21.0,
      "medium": 2,
      "sd": 50.0
    },
    {
      "label": "4",
      "R": -270.095,
      "d": 4.0,
      "medium": 3,
      "sd": 46.0
    },
    {
      "label": "5",
      "R": 128.345,
      "d": 15.39,
      "sd": 44.5
    },
    {
      "label": "6",
      "R": 71.441,
      "d": 8.0,
      "medium": 4,
      "sd": 39.0
    },
    {
      "label": "7",
      "R": 174.32,
      "d": 1.0,
      "sd": 36.5
    },
    {
      "label": "8",
      "R": 74.005,
      "d": 3.0,
      "medium": 5,
      "sd": 36.0
    },
    {
      "label": "9",
      "R": 34.121,
      "d": 15.0,
      "medium": 6,
      "sd": 30.0
    },
    {
      "label": "10",
      "R": 126.546,
      "d": 5.5,
      "sd": 28.5
    },
    {
      "label": "11",
      "R": -957.711,
      "d": 4.8,
      "medium": 7,
      "sd": 26.0
    },
    {
      "label": "12",
      "R": -100.138,
      "d": 3.0,
      "medium": 8,
      "sd": 24.5
    },
    {
      "label": "13",
      "R": 55.554,
      "d": 8.0,
      "sd": 23.5
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
      "sd": 20.5
    },
    {
      "label": "16",
      "R": 54.98,
      "d": 15.5239,
      "sd": 20.5
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
      "sd": 20.5
    },
    {
      "label": "19",
      "R": -121.699,
      "d": 2.7,
      "sd": 20.0
    },
    {
      "label": "20",
      "R": -49.128,
      "d": 3.0,
      "medium": 12,
      "sd": 19.0
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
      "d": 59.4575,
      "sd": 21.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only patent reconstruction. Source near gaps/magnification and maker 1.9 m do not certify a finite conjugate, cam or VR-decentering law."
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
  "layout": {
    "yScFill": 0.78
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
