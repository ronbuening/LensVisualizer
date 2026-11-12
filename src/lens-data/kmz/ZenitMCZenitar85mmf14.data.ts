import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * ZENIT MC ZENITAR 85mm f/1.4 — RU 2611106 C1 (KMZ, 2017), sole example: Table 1 (p. 7), Fig. 1 (p. 9).
 * Radii, thicknesses, indices and Abbe numbers are transcribed as printed, without scaling.
 * Printed: f' = 84.23 mm, 1:1.4, 2ω = 28.5°, 2Y' = 43.26 mm, back focal distance 38.2 mm.
 *
 * Index line: the table heads its columns nD / νD, but every value equals the helium d-line index of the
 * named glass (TK14 and LF5 match catalog nd; TK21, TF5 and STK3 sit 1.0–2.3e-4 above the GOST sodium-D
 * column), so the file uses indexReference "d". TK14, TK21 and STK3 trace on LZOS catalogue curves (fitted to
 * the LZOS index tables); TF5 and LF5 trace on the SF4 (Schott) and QF3 (CDGM) catalog curves.
 *
 * Paraxial d-line trace: EFL 84.264 mm, BFD 38.259 mm. GOST e-line indices give 84.236 / 38.221 mm, so the
 * printed f' and back focus are e-line values. The printed 38.2 mm image gap is kept; no refocus.
 *
 * Stop: printed 5.5 mm in front of lens 5 (p. 6), so the 14.6 mm air gap is split 9.1 + 5.5 mm. Its radius
 * is derived from f/1.4; the patent prints none.
 * Semi-diameters are not published: estimated from Fig. 1 (12.17 px/mm at 300 dpi) and floor-checked by
 * real-ray trace; every rim sits just outside the f/1.4 axial beam, 2–5 % above its drawn height. Fig. 1 draws
 * each element square-edged, so L4 (R7 takes R6's rim), the cemented L5/L6 pair (R8 and R9 take R10's rim) and
 * L7 (R12 takes R11's rim) keep one height each; L3 cannot, as its drawn step down to L4 falls on the cemented
 * junction. Fig. 1 ends the R7 cap on a flat land at q = 0.764 of the edge radius; the inferred cut sits at
 * 7.7 mm depth (cut radius 16.02 mm, q = 0.766), just clearing the f/1.4 axial beam (15.96 mm) and 1.4 mm
 * ahead of the stop plane. Off-axis vignetting from these rims is kept.
 *
 * Infinity focus only: the patent focuses by moving the whole lens; the maker's minimum focus is 0.85 m.
 * The f/1.4–22 aperture scale follows the maker's booklet; the patent states f/1.4 only.
 * Production association (maker: 7 elements / 5 groups, 85 mm f/1.4, 28° field) is probable, not a
 * confirmed factory prescription.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "zenit-mc-zenitar-85mm-f14",
  "maker": "KMZ",
  "name": "ZENIT MC ZENITAR 85mm f/1.4",
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.613094,
      "vd": 60.6066,
      "focalLengthMm": 176.4,
      "glass": "TK14 (LZOS)",
      "indexReference": "d",
      "role": "Front positive meniscus of the first component; starts converging the f/1.4 beam"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.613094,
      "vd": 60.6066,
      "focalLengthMm": 203.6,
      "glass": "TK14 (LZOS)",
      "indexReference": "d",
      "role": "Second front positive meniscus; shares the front convergence with L1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.656908,
      "vd": 51.1549,
      "focalLengthMm": 67.5,
      "glass": "TK21 (LZOS)",
      "indexReference": "d",
      "role": "Thick positive meniscus, crown half of the front cemented doublet",
      "cemented": "C1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.755234,
      "vd": 27.5228,
      "focalLengthMm": -33.7,
      "glass": "SF4 (Schott catalog equivalent of TF5)",
      "indexReference": "d",
      "role": "Dense-flint negative meniscus; its deep concave rear surface faces the stop",
      "cemented": "C1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.57502,
      "vd": 41.2951,
      "focalLengthMm": -32.4,
      "glass": "QF3 (CDGM catalog equivalent of LF5)",
      "indexReference": "d",
      "role": "Light-flint biconcave element behind the stop, front half of the rear cemented meniscus",
      "cemented": "C2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.659499,
      "vd": 57.352,
      "focalLengthMm": 33.3,
      "glass": "STK3 (LZOS)",
      "indexReference": "d",
      "role": "Equal-radius biconvex crown completing the rear cemented meniscus",
      "cemented": "C2"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Plano-Convex Positive",
      "nd": 1.755234,
      "vd": 27.5228,
      "focalLengthMm": 111.9,
      "glass": "SF4 (Schott catalog equivalent of TF5)",
      "indexReference": "d",
      "role": "Rear positive element, flat face toward the image"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 79.07,
      "d": 6.5,
      "sd": 29.6,
      "medium": 1
    },
    {
      "label": "2",
      "R": 285.1,
      "d": 0.4,
      "sd": 29.6
    },
    {
      "label": "3",
      "R": 49.43,
      "d": 6.7,
      "sd": 27.907453470911104,
      "medium": 2
    },
    {
      "label": "4",
      "R": 77.62,
      "d": 0.5,
      "sd": 27.907453470911104
    },
    {
      "label": "5",
      "R": 33.42,
      "d": 15,
      "sd": 24.605686354192905,
      "medium": 3
    },
    {
      "label": "6",
      "R": 111.69,
      "d": 3,
      "sd": 20.91031686675028,
      "medium": 4
    },
    {
      "label": "7",
      "R": 20.51,
      "d": 9.1,
      "sd": 20.91031686675028,
      "rimCutDepthMm": 7.7
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 5.5
    },
    {
      "label": "8",
      "R": -34.36,
      "d": 2.8,
      "sd": 15.991396632955041,
      "medium": 5
    },
    {
      "label": "9",
      "R": 41.98,
      "d": 9.1,
      "sd": 15.991396632955041,
      "medium": 6
    },
    {
      "label": "10",
      "R": -41.98,
      "d": 0.5,
      "sd": 15.991396632955041
    },
    {
      "label": "11",
      "R": 84.53,
      "d": 3.8,
      "sd": 14.87653564676422,
      "medium": 7
    },
    {
      "label": "12",
      "R": "flat",
      "d": 38.2,
      "sd": 14.87653564676422
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only. The patent focuses by moving the whole lens (unit focusing) and prints only the infinity state; the production lens focuses to 0.85 m. No finite-focus state is modeled."
  },
  "aperture": {
    "nominalFNumber": 1.4,
    "fStops": [
      1.4,
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
    "blades": 8
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 28.5,
    "maxTraceFieldDeg": 14.25
  },
  "groups": [
    {
      "text": "I",
      "fromSurface": "1",
      "toSurface": "7"
    },
    {
      "text": "II",
      "fromSurface": "8",
      "toSurface": "12"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "C2",
      "fromSurface": "8",
      "toSurface": "10"
    }
  ],
  "layout": {
    "yScFill": 0.5
  },
  "subtitle": "RU 2611106 C1, sole example — probable production design",
  "catalog": {
    "lensMounts": [
      "canon-ef",
      "nikon-f"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 7,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 85,
      "design": 84.23
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.4
    },
    "closeFocusM": {
      "marketing": 0.85
    },
    "specs": [
      "7 ELEMENTS / 5 GROUPS",
      "DESIGN f = 84.23 mm",
      "DESIGN F/1.4",
      "ALL SPHERICAL"
    ]
  },
  "source": {
    "patentNumber": "RU 2611106 C1",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 2017,
    "authors": [
      "Vladimir Aleksandrovich Bogdankov"
    ],
    "assignees": [
      "PJSC Krasnogorsky Zavod named after S. A. Zverev"
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
