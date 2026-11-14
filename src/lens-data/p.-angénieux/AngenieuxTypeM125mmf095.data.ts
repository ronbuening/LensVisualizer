import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — P. ANGÉNIEUX TYPE M1 25mm f/0.95
 *
 * Source: US 2,701,982, Pierre Angénieux (filed 9 July 1953, granted 15 February 1955; French priority
 * 26 March 1953; no organizational assignee). The patent's sole numerical example, printed on page 2 and
 * repeated in claim 4. Eight spherical elements in six air-spaced components; the third and fourth
 * components are cemented doublets (D1, D2).
 *
 * Scaling: the example is normalized to F = 100 at relative aperture 1:1. Every length (radii, thicknesses,
 * air spaces and the printed back focal length of 56) is scaled ×0.25 to the 25 mm production focal length;
 * indices and Abbe numbers are unchanged. The scaled prescription traces to EFL 24.985 mm and a paraxial back
 * focus of 13.994 mm; the last gap keeps the printed value, 14 mm.
 *
 * Indices: the patent gives n for the D line (sodium, about 589.3 nm); the printed values are traced as
 * d-line values without conversion. Only L6 (1.6204 / 60.2) matches a catalog glass to the printed precision
 * (J-SK16). The dense flints take the dispersion curves of their nearest catalog rows while the trace keeps the
 * printed nd: L1 and L4 (1.6751 / 32.3) SF5, as in the Retrofocus R11 patent, and L5 (1.6992 / 30.2) SUMITA's
 * legacy lead flint SF15 (νd 0.09 and 0.15 lower). L2 (1.6689 / 46.7) and the lanthanum crowns L3, L7 and L8
 * (1.6913 / 53.8) are 0.4–0.9 off the nearest rows in νd and use Abbe-number dispersion estimates.
 *
 * Stop: the patent's single, unnumbered drawing puts the diaphragm in e7, but the table gives neither its
 * position nor its diameter. STO is placed at 0.60 of e7 from R7 (4.599 mm + 3.066 mm of the scaled
 * 7.665 mm gap); the drawing measures about 0.59. The stop radius is derived from the design f/1.
 *
 * Semi-diameters: not printed. They are inferred, pass the full f/1 axial beam and agree with the drawing
 * within about 0.5 mm. Every air-facing rim from surface 5 to 13 lies within 0.025 mm of that beam (5, 10
 * and 11 within 0.005 mm), so none can follow the drawing where it draws a rim up to 6 % smaller: L7 (9.45 mm against about
 * 8.95 mm drawn) stands 0.43 mm above L8, which the drawing shows level with it. The drawn iris, R7, R8 and L7
 * fit a real axial ray entering at half the focal length (12.5 mm), which crosses the stop plane at 6.83 mm; the
 * stop here follows the paraxial f/1 rule (7.126 mm), and its real beam enters at 13.17 mm. The deep R7 and R8
 * caps fill 93.8 % of the central air space at their shared rim height (0.48 mm of air remains), so checks.gapSagFrac
 * is 0.94, the smallest value that draws both caps untrimmed.
 *
 * Focus: the patent prints the infinity state only; no focus travel is modeled. The marketed f/0.95 is the
 * production rating of the same design, which the patent states as 1:1.
 */
const lens = {
  "schema": 2,
  "key": "angenieux-type-m1-25mm-f095",
  "maker": "P. Angénieux",
  "name": "P. ANGÉNIEUX TYPE M1 25mm f/0.95",
  "subtitle": "US 2,701,982, sole example — correlated to the 1953 Type M1 cine lens",
  "visible": true,
  "catalog": {
    "lensMounts": ["c-mount"],
    "imageFormat": "16mm-cinema",
    "specs": [
      "8 ELEMENTS / 6 GROUPS",
      "DESIGN f = 25 mm",
      "DESIGN F/1.0",
      "ALL SPHERICAL",
      "SCALED FROM F = 100"
    ],
    "elementCount": 8,
    "groupCount": 6,
    "focalLengthMm": {
      "marketing": 25,
      "design": 25
    },
    "fNumber": {
      "marketing": 0.95,
      "design": 1
    },
    "closeFocusM": {
      "marketing": 0.45
    }
  },
  "source": {
    "patentNumber": "US 2,701,982",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1955,
    "authors": [
      "Pierre Angénieux"
    ],
    "assignees": []
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.6751,
      "vd": 32.3,
      "indexReferenceNote": "The patent gives the index for the D line (sodium, about 589.3 nm); the printed index and Abbe number are traced as d-line values without conversion.",
      "focalLengthMm": 85.077,
      "glass": "SF5 (Schott catalog equivalent to patent 675323 dense-flint coordinate; production supplier unspecified)",
      "role": "Weak positive front meniscus, convex to the object; the first half of the divided Gauss front lens."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.6689,
      "vd": 46.7,
      "indexReferenceNote": "The patent gives the index for the D line (sodium, about 589.3 nm); the printed index and Abbe number are traced as d-line values without conversion.",
      "focalLengthMm": 67.712,
      "glass": "Unmatched (vintage barium flint; native sodium D coordinates)",
      "role": "Second positive meniscus, convex to the object; completes the divided front lens."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.6913,
      "vd": 53.8,
      "indexReferenceNote": "The patent gives the index for the D line (sodium, about 589.3 nm); the printed index and Abbe number are traced as d-line values without conversion.",
      "focalLengthMm": 21.398,
      "glass": "Unmatched (vintage lanthanum crown; native sodium D coordinates)",
      "role": "Positive crown member of the front cemented meniscus D1; nearly plano-convex.",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.6751,
      "vd": 32.3,
      "indexReferenceNote": "The patent gives the index for the D line (sodium, about 589.3 nm); the printed index and Abbe number are traced as d-line values without conversion.",
      "focalLengthMm": -12.154,
      "glass": "SF5 (Schott catalog equivalent to patent 675323 dense-flint coordinate; production supplier unspecified)",
      "role": "Thin negative flint member of D1; its deep concave rear face R7 faces the stop.",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.6992,
      "vd": 30.2,
      "indexReferenceNote": "The patent gives the index for the D line (sodium, about 589.3 nm); the printed index and Abbe number are traced as d-line values without conversion.",
      "focalLengthMm": -11.892,
      "glass": "SF15 (Sumita catalog equivalent to patent 699302 dense-flint coordinate; production supplier unspecified)",
      "role": "Thin negative flint member of the rear cemented meniscus D2; its deep concave front face R8 faces the stop.",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.6204,
      "vd": 60.2,
      "indexReferenceNote": "The patent gives the index for the D line (sodium, about 589.3 nm); the printed value is matched to the d-line catalog value without conversion.",
      "focalLengthMm": 18.158,
      "glass": "J-SK16 (Hikari catalog equivalent to patent 620602; production supplier unspecified)",
      "role": "Thick positive crown member of D2, convex to the image.",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.6913,
      "vd": 53.8,
      "indexReferenceNote": "The patent gives the index for the D line (sodium, about 589.3 nm); the printed index and Abbe number are traced as d-line values without conversion.",
      "focalLengthMm": 37.886,
      "glass": "Unmatched (vintage lanthanum crown; native sodium D coordinates)",
      "role": "First of the two biconvex lenses that divide the Gauss rear lens."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.6913,
      "vd": 53.8,
      "indexReferenceNote": "The patent gives the index for the D line (sodium, about 589.3 nm); the printed index and Abbe number are traced as d-line values without conversion.",
      "focalLengthMm": 34.354,
      "glass": "Unmatched (vintage lanthanum crown; native sodium D coordinates)",
      "role": "Final biconvex lens; completes the divided rear lens ahead of the 14 mm back focus."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 41.0325,
      "d": 2.7475,
      "sd": 14.125,
      "medium": 1
    },
    {
      "label": "2",
      "R": 139.8,
      "d": 0.0575,
      "sd": 14.125
    },
    {
      "label": "3",
      "R": 25.03,
      "d": 2.8625,
      "sd": 13.025,
      "medium": 2
    },
    {
      "label": "4",
      "R": 53.385,
      "d": 0.0575,
      "sd": 13.025
    },
    {
      "label": "5",
      "R": 14.51,
      "d": 5.7375,
      "sd": 10.9,
      "medium": 3
    },
    {
      "label": "6",
      "R": 637.775,
      "d": 0.645,
      "sd": 10.9,
      "medium": 4
    },
    {
      "label": "7",
      "R": 8.0975,
      "d": 4.599,
      "sd": 7.175
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.0660000000000003
    },
    {
      "label": "8",
      "R": -10.105,
      "d": 0.685,
      "sd": 7.125,
      "medium": 5
    },
    {
      "label": "9",
      "R": 48.245,
      "d": 6.98,
      "sd": 9.325,
      "medium": 6
    },
    {
      "label": "10",
      "R": -13.8825,
      "d": 0.0575,
      "sd": 9.325
    },
    {
      "label": "11",
      "R": 48.245,
      "d": 1.995,
      "sd": 9.45,
      "medium": 7
    },
    {
      "label": "12",
      "R": -56.325,
      "d": 0.0575,
      "sd": 9.45
    },
    {
      "label": "13",
      "R": 43.7725,
      "d": 2.12,
      "sd": 9.025,
      "medium": 8
    },
    {
      "label": "14",
      "R": -50.8875,
      "d": 14,
      "sd": 9.025
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Infinity prescription only. The production lens focuses by helicoid to about 0.45 m, but the patent prints no focusing movement, so focus travel is not modeled. The last gap is the printed back focal length, 14 mm at this scale."
  },
  "gaps": {},
  "aperture": {
    "nominalFNumber": 1,
    "fStops": [
      1,
      1.4,
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
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "D2",
      "fromSurface": "8",
      "toSurface": "10"
    }
  ],
  "layout": {
    "yScFill": 0.3
  },
  "checks": {
    "gapSagFrac": 0.94
  }
} satisfies LensDataV2Input;
export default lens;
