import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * PRIVATE RESEARCH ONLY — kept outside auto-discovered src/lens-data.
 * Literal mm photographic MASTER table, JPS60111215A PDF4, Figure2 PDF6.
 * Six elements/five groups; NOT any numbered converter example or combined Fig4.
 * Correct original R11=-43.293; the old -143.293 transcription is invalid.
 * Scale 1.0; design f/1.73, full field45.6 degrees, computed EFL51.498291 mm.
 * Last gap36.883733655908784 mm is independently derived infinity BFL, not printed.
 * Figure-informed STO z18.4 mm: split d6=6.09+5.53=11.62 mm; no source gap changed.
 * No numeric iris position, diameter or clear apertures printed. SDs are frozen
 * per-surface paraxial native axial height*1.10 rounded up to0.1 mm. No ray-based
 * inflation. Stop radius uses current engine design-f-number rule.
 * Source N/v reference line unprinted; d-line is a qualified convention.
 * No full-dispersion, exact glass, factory revision or production-performance claim.
 * Manufacturer MFD0.45m metadata only. Source dM7.65mm is whole-master extension in
 * converter context; no finite conjugate or internal spacing law is authored.
 * Source-worker visual table/figure audit inherited; local PDF transfer was denied.
 * The unnumbered master is identified here and in the subtitle/analysis. Current
 * source.example validation accepts numbered labels or Sole example only; neither
 * describes the unnumbered master amid four converter examples, so it is omitted.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "minolta-md-50f17",
  "maker": "Minolta",
  "name": "MINOLTA MD 50mm f/1.7",
  "subtitle": "JP S60-111215 A photographic master; exact production revision unproven",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "minolta-sr"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 50,
      "design": 51.4982911495985
    },
    "fNumber": {
      "marketing": 1.7,
      "design": 1.73
    }
  },
  "source": {
    "patentNumber": "JP S60-111215 A",
    "patentYear": 1985,
    "authors": [
      "Sho Fukushima"
    ],
    "assignees": [
      "Minolta Camera Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.72,
      "vd": 50.31,
      "indexReference": "d",
      "focalLengthMm": 62.18436393613314,
      "glass": "LAC10 (HOYA, coordinate equivalent)",
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.6935,
      "vd": 53.39,
      "indexReference": "d",
      "focalLengthMm": 66.51693523397756,
      "glass": "LAC13 (HOYA, coordinate equivalent)",
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.6727,
      "vd": 32.22,
      "indexReference": "d",
      "focalLengthMm": -30.703655437865933,
      "glass": "SF5 (SCHOTT, coordinate equivalent)",
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.6259,
      "vd": 35.7,
      "indexReference": "d",
      "focalLengthMm": -21.735393910898168,
      "glass": "S-TIM1 (OHARA catalog equivalent; production supplier unspecified)",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.6935,
      "vd": 53.39,
      "indexReference": "d",
      "focalLengthMm": 26.022949012319334,
      "glass": "LAC13 (HOYA, coordinate equivalent)",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.781,
      "vd": 44.55,
      "indexReference": "d",
      "focalLengthMm": 49.8412305367006,
      "glass": "Unmatched (patent 1.7810/44.55; no catalog row at this coordinate)",
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 38.987,
      "d": 4.66,
      "sd": 16.4,
      "medium": 1
    },
    {
      "label": "2",
      "R": 286.604,
      "d": 0.16,
      "sd": 15.6
    },
    {
      "label": "3",
      "R": 21.179,
      "d": 3.81,
      "sd": 15.6,
      "medium": 2
    },
    {
      "label": "4",
      "R": 36.272,
      "d": 2.22,
      "sd": 13.8
    },
    {
      "label": "5",
      "R": 64.979,
      "d": 1.46,
      "sd": 12.7,
      "medium": 3
    },
    {
      "label": "6",
      "R": 15.531,
      "d": 6.09,
      "sd": 12.1
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 5.53
    },
    {
      "label": "7",
      "R": -17.213,
      "d": 0.88,
      "sd": 10.8,
      "medium": 4
    },
    {
      "label": "8",
      "R": 66.165,
      "d": 6.41,
      "sd": 11.0,
      "medium": 5
    },
    {
      "label": "9",
      "R": -23.831,
      "d": 0.16,
      "sd": 12.0
    },
    {
      "label": "10",
      "R": 374.955,
      "d": 2.8,
      "sd": 11.9,
      "medium": 6
    },
    {
      "label": "11",
      "R": -43.293,
      "d": 36.883733655908784,
      "sd": 11.8
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity-only reconstruction of the unnumbered photographic master in JP S60-111215 A; converter Examples 1–4 are separate. Clear apertures and stop are inferred; heavy modeled clipping remains. Exact factory prescription pairing and full dispersion are unproven. The source design is f/1.73, with a computed 51.498291 mm focal length and fixed computed infinity image plane. Retail minimum focus of 0.45 m is descriptive only; no finite focus motion or performance is modeled."
  },
  "aperture": {
    "nominalFNumber": 1.73,
    "fStops": [
      1.73,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 45.6,
    "maxTraceFieldDeg": 22.8
  },
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "7",
      "toSurface": "9"
    }
  ],
  "layout": {
    "yScFill": 0.36
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
