import type { LensDataInput } from "../../types/optics.js";

/**
 * SIGMA 24mm F3.5 DG DN | Contemporary — JP2022067328A, Numerical Example 1.
 * Source: original patent PDF pp.10–11 (printed pp.9–10), Figure 1, ¶0050–0063.
 * 10 elements / 8 air-separated groups; 3 functional groups; 4 aspheric surfaces.
 * Production correlation is research inference, not a manufacturer-confirmed patent attribution.
 * Scaling: none (s=1). All source radii, gaps, indices and aspheric coefficients preserved.
 * Asphere convention: native (1+K); surface 14 has K=−1; no conic offset or polynomial refit.
 * Focus: PUBLISHED, two endpoints. G2 moves objectward by 3.8358 mm; G1/STO/G3 fixed.
 * SEMI-DIAMETERS: INFERRED — estimated from Figure 1 (PDF p.21, 300 ppi, 0.0521 mm/px) and
 * floor-checked by real-ray trace. Outer rims follow the drawn element heights. Surfaces 2, 9 and
 * 17A stop where the drawn bowl meets a flat annulus: 9 is 5.2 mm (drawn 5.0–5.1; the 60%-field
 * full-stop bundle needs 5.12) and 17A is held at 9.4 mm (drawn 9.75–9.9) by the cross-gap rule.
 * Surface 18 keeps the drawn 11.9 mm outer rim although its bowl is drawn ending near 9.8 mm.
 * L13 (5, 6) is 8.8 mm (drawn 8.85) so it renders level with L12, which the 2→3 gap rule caps at 8.8.
 * Figure 1 leaders L1m / L2m / L1p point at L11 / L12 / L13 (¶0060); element names keep L11–L32.
 * STOP DIAMETER: INFERRED by exact transfer of EFL/(2×3.62) to the published stop plane.
 * Matching F/3.62 is calibration, not independent evidence of a physical iris diameter.
 * No source camera plates, dummy planes or omitted optics. No added camera stack.
 * GLASS: coordinate-equal HOYA catalog rows named as dispersion proxies (supplier unconfirmed);
 * source nd/νd stay authoritative. L12 carries source-supported partial dispersion:
 * patent ΔPgF=.0469 -> absolute PgF=.665566 -> runtime dPgF=.04948536 (different normal line).
 * Geometry and ray sampling cover discrete states; no continuum performance guarantee.
 */

const LENS_DATA = {
  "key": "sigma-24mm-f35-dg-dn",
  "maker": "Sigma",
  "name": "SIGMA 24mm f/3.5 DG DN | Contemporary",
  "subtitle": "JP 2022-067328 A — NUMERICAL EXAMPLE 1 — RESEARCH CORRELATION",
  "specs": [
    "10 ELEMENTS / 8 GROUPS",
    "DESIGN f = 24.00 mm",
    "DESIGN F/3.62",
    "2ω = 81.27°",
    "4 ASPHERICAL SURFACES / 3 ELEMENTS",
    "1 SLD (INFERRED)"
  ],
  "focalLengthMarketing": 24,
  "focalLengthDesign": 24.0,
  "apertureMarketing": 3.5,
  "apertureDesign": 3.62,
  "lensMounts": [
    "l-mount",
    "sony-fe"
  ],
  "imageFormat": "135-full-frame",
  "imageCircleMm": 43.26,
  "patentNumber": "JP 2022-067328 A",
  "patentAuthors": [
    "Daichi Tanoue"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2022,
  "elementCount": 10,
  "groupCount": 8,
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "diagramLabel": "L11",
      "label": "L11 — Neg. Meniscus (1× Asph)",
      "type": "Neg. Meniscus (1× Asph)",
      "nd": 1.59271,
      "vd": 66.97,
      "fl": -34.10593343,
      "glass": "MP-PCD51-70 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "Patent's negative lens L1m (Figure 1): object-side-convex negative meniscus leading fixed G1; source surface 1 is aspheric."
    },
    {
      "id": 2,
      "name": "L12",
      "diagramLabel": "L12",
      "label": "L12 — Negative Meniscus",
      "type": "Negative Meniscus",
      "nd": 1.98613,
      "vd": 16.48,
      "fl": -32.37363594,
      "glass": "FDS16-W (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "Patent's negative lens L2m (Figure 1) in fixed G1; the one glass with a tabulated ΔPgF, and the lens whose νd and ΔPgF the patent lists for conditions (2) and (3).",
      "dPgF": 0.04948536,
      "apd": "patent",
      "apdNote": "Patent ΔPgF=.0469 on its .64833−.0018νd line; absolute PgF=.665566; runtime dPgF=.04948536 after baseline conversion."
    },
    {
      "id": 3,
      "name": "L13",
      "diagramLabel": "L13",
      "label": "L13 — Positive Meniscus",
      "type": "Positive Meniscus",
      "nd": 2.0509,
      "vd": 26.94,
      "fl": 25.128215,
      "glass": "TAFD65 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "Patent's positive lens L1p (Figure 1): high-index positive meniscus in fixed G1; nd 2.0509 satisfies condition (4), NdL1p > 1.85."
    },
    {
      "id": 4,
      "name": "L14",
      "diagramLabel": "L14",
      "label": "L14 — Positive Meniscus",
      "type": "Positive Meniscus",
      "nd": 2.0509,
      "vd": 26.94,
      "fl": 29.86780148,
      "glass": "TAFD65 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "Positive component of fixed G1 cemented doublet D1.",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L15",
      "diagramLabel": "L15",
      "label": "L15 — Negative Meniscus",
      "type": "Negative Meniscus",
      "nd": 1.54072,
      "vd": 47.2,
      "fl": -42.84472253,
      "glass": "E-FEL2 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "Negative component of fixed G1 cemented doublet D1.",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L21",
      "diagramLabel": "L21",
      "label": "L21 — Biconvex Positive",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "fl": 20.00220694,
      "glass": "FCD1 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Inferred from coordinates: FCD1-class low-dispersion crown (νd 81.61; catalog dPgF +0.031), consistent with the marketed SLD element. The patent does not designate it.",
      "role": "Positive low-dispersion component of translating G2 cemented doublet D2.",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L22",
      "diagramLabel": "L22",
      "label": "L22 — Negative Meniscus",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "fl": -19.28585447,
      "glass": "FDS90 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "Negative high-dispersion component of translating G2 cemented doublet D2.",
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L23",
      "diagramLabel": "L23",
      "label": "L23 — Biconvex Positive (2× Asph)",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.85135,
      "vd": 40.1,
      "fl": 16.75862188,
      "glass": "M-TAFD305 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "Double-aspheric positive lens in translating G2."
    },
    {
      "id": 9,
      "name": "L31",
      "diagramLabel": "L31",
      "label": "L31 — Biconcave Negative (1× Asph)",
      "type": "Biconcave Negative (1× Asph)",
      "nd": 1.6935,
      "vd": 53.2,
      "fl": -46.66659399,
      "glass": "M-LAC130 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "Fixed negative G3 lens with image-facing aspheric surface."
    },
    {
      "id": 10,
      "name": "L32",
      "diagramLabel": "L32",
      "label": "L32 — Negative Meniscus",
      "type": "Negative Meniscus",
      "nd": 1.5168,
      "vd": 64.2,
      "fl": -91.35761002,
      "glass": "BSC7 (HOYA coordinate equivalent; production supplier unconfirmed)",
      "role": "Fixed rear negative meniscus in G3."
    }
  ],
  "surfaces": [
    {
      "label": "1A",
      "R": 22.3254,
      "d": 1.2,
      "nd": 1.59271,
      "elemId": 1,
      "sd": 12.1
    },
    {
      "label": "2",
      "R": 10.3967,
      "d": 8.0142,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.3
    },
    {
      "label": "3",
      "R": -18.8622,
      "d": 0.8,
      "nd": 1.98613,
      "elemId": 2,
      "sd": 8.8
    },
    {
      "label": "4",
      "R": -47.0701,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.8
    },
    {
      "label": "5",
      "R": -393.9653,
      "d": 2.6943,
      "nd": 2.0509,
      "elemId": 3,
      "sd": 8.8
    },
    {
      "label": "6",
      "R": -24.8351,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.8
    },
    {
      "label": "7",
      "R": 19.1582,
      "d": 2.2297,
      "nd": 2.0509,
      "elemId": 4,
      "sd": 7.3
    },
    {
      "label": "8",
      "R": 46.2374,
      "d": 0.8,
      "nd": 1.54072,
      "elemId": 5,
      "sd": 7.3
    },
    {
      "label": "9",
      "R": 15.3402,
      "d": 3.3618,
      "nd": 1.0,
      "elemId": 0,
      "sd": 5.2
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 7.0307,
      "nd": 1.0,
      "elemId": 0,
      "sd": 4.196004857157249
    },
    {
      "label": "11",
      "R": 76.8877,
      "d": 4.1964,
      "nd": 1.497,
      "elemId": 6,
      "sd": 8.1
    },
    {
      "label": "12",
      "R": -11.2104,
      "d": 0.8,
      "nd": 1.84666,
      "elemId": 7,
      "sd": 8.1
    },
    {
      "label": "13",
      "R": -36.9349,
      "d": 1.2958,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.1
    },
    {
      "label": "14A",
      "R": 132.5036,
      "d": 5.2747,
      "nd": 1.85135,
      "elemId": 8,
      "sd": 10.5
    },
    {
      "label": "15A",
      "R": -15.6964,
      "d": 1.5,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.5
    },
    {
      "label": "16",
      "R": -565.0813,
      "d": 1.17,
      "nd": 1.6935,
      "elemId": 9,
      "sd": 10.9
    },
    {
      "label": "17A",
      "R": 34.3585,
      "d": 3.2592,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.4
    },
    {
      "label": "18",
      "R": -31.825,
      "d": 1.5989,
      "nd": 1.5168,
      "elemId": 10,
      "sd": 11.9
    },
    {
      "label": "19",
      "R": -99.3133,
      "d": 19.6941,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.9
    }
  ],
  "asph": {
    "1A": {
      "K": 0.0,
      "A4": 2.22205e-05,
      "A6": -4.69259e-08,
      "A8": 8.56143e-10,
      "A10": -2.54125e-12,
      "A12": 3.90193e-15,
      "A14": 0.0
    },
    "14A": {
      "K": -1.0,
      "A4": -5.06066e-06,
      "A6": 3.02711e-07,
      "A8": -5.62626e-09,
      "A10": 6.54011e-11,
      "A12": -1.85433e-13,
      "A14": -2.87753e-15,
      "A16": 2.20828e-17,
      "A18": -4.32346e-20
    },
    "15A": {
      "K": 0.0,
      "A4": 5.59739e-05,
      "A6": -1.0975e-08,
      "A8": 2.66207e-09,
      "A10": -8.42405e-11,
      "A12": 1.45129e-12,
      "A14": -1.07799e-14,
      "A16": 2.8532e-17
    },
    "17A": {
      "K": 0.0,
      "A4": 1.07013e-05,
      "A6": -2.50582e-07,
      "A8": 1.44276e-08,
      "A10": -2.35199e-10,
      "A12": 1.81668e-12,
      "A14": -4.10422e-15,
      "A16": -3.03923e-17,
      "A18": 1.99913e-19,
      "A20": -3.19756e-22
    }
  },
  "var": {
    "STO": [
      7.0307,
      3.1949
    ],
    "15A": [
      1.5,
      5.3358
    ]
  },
  "varLabels": [
    [
      "STO",
      "D10"
    ],
    [
      "15A",
      "D15"
    ]
  ],
  "groups": [
    {
      "text": "G1 FIXED (+)",
      "fromSurface": "1A",
      "toSurface": "9"
    },
    {
      "text": "G2 FOCUS (+)",
      "fromSurface": "11",
      "toSurface": "15A"
    },
    {
      "text": "G3 FIXED (−)",
      "fromSurface": "16",
      "toSurface": "19"
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
      "fromSurface": "11",
      "toSurface": "13"
    }
  ],
  "closeFocusM": 0.1052878,
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 40.068,
      "distanceReference": "first-surface",
      "source": "JP 2022-067328 A, Numerical Example 1, PDF p.11 / printed p.10, -0.5x variable-spacing column d0=40.0680 mm."
    }
  ],
  "focusDescription": "Published inner focus: G2 (L21–L23) translates 3.8358 mm toward the object between infinity and −0.5×; G1, the stop and G3 stay fixed. Both patent states are preserved. The 0.105 m close limit is the patent's object-to-image distance (d0 40.068 mm plus the 65.22 mm track), not the marketed 0.108 m. Intermediate gaps are linearly interpolated, so intermediate distance labels are approximate.",
  "nominalFno": 3.62,
  "fstopSeries": [
    3.62,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "apertureBlades": 7,
  "yScFill": 0.3
} satisfies LensDataInput;

export default LENS_DATA;
