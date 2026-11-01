import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Olympus Zuiko Auto-S 50mm f/1.8, later six-element, four-group generation, from the master lens of US 4,728,179
 * (Figure 3, table in column 6). The patent covers rear converters; the numbered embodiments are the converters. The
 * master has no example designation, so source.example stays absent and the file is on the patent-example queue.
 * Used at the printed scale, f = 51.84 mm, F/1.86, with no retuning to 50mm f/1.8. All surfaces are spherical.
 *
 * Printed: R, D, N, V, f and F. Not printed: field, back focus, conjugate, stop, clear apertures, focus travel.
 * Every N/V pair is a d-line catalog coordinate, so N and V are nd and vd. The last gap, 37.856 mm, is the paraxial
 * back focus at infinity; with it the master and the printed d0 reproduce the printed converter magnifications of
 * Embodiments 1 to 4 to the fourth decimal, about +/-0.002 mm in that gap. The plots of Figures 4 to 7 (F/3.0 to
 * F/3.1, half-field 14.2 to 14.5 degrees) imply an image height near 21.55 mm, so the design is 135 format.
 *
 * Stop: neither printed nor drawn, placed at the midpoint of the 13.0 mm D5 air space, z = 19.04 mm from S1.
 * sd: inferred. S1 is 1.10 times the paraxial entrance-pupil radius; the other faces follow the Figure 3 ratios. At
 * the figures' scale across the axis, 19.0 px/mm at 300 dpi against 18.5 along it, the rims sit about 2 % under the
 * drawn heights. S5 and S6 stay smaller than their element bodies, as the chamfers in Figure 3 show. S7 takes S8's
 * height because Figure 3 draws L5 square-cut with R7 reaching its flat; L4's flat sits about 0.5 mm lower, a step one
 * cemented surface cannot show. No rim was enlarged to pass off-axis light, so the vignetting stays.
 * Focus: unit focus. The near gap, 45.60 mm, is solved paraxially for 0.45 m object to image; it is not printed.
 * Iris: f/1.86 is the patent's value; slower stops follow the paraxial stop rule.
 *
 * US 4,291,952 Embodiment 2 (f = 100) is the same design: same six glasses, x0.5184 spacings within 0.010 mm, radii
 * within 0.07 % except R1, R2 and R7 at 0.3 to 0.4 %.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-zuiko-auto-s-50f18",
  "maker": "Olympus",
  "name": "OLYMPUS ZUIKO AUTO-S 50mm f/1.8",
  "subtitle": "US 4,728,179, master lens — later 6/4 generation",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "olympus-om"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "6 ELEMENTS / 4 GROUPS",
      "DESIGN f = 51.84 mm",
      "DESIGN F/1.86",
      "ALL SPHERICAL"
    ],
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 50,
      "design": 51.84
    },
    "fNumber": {
      "design": 1.86
    }
  },
  "source": {
    "patentNumber": "US 4,728,179",
    "patentYear": 1988,
    "authors": [
      "Hikaru Hayashi",
      "Hiroshi Takase"
    ],
    "assignees": [
      "Olympus Optical Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.78472,
      "vd": 25.68,
      "indexReference": "d",
      "glass": "S-TIH11 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 56.970527856977164,
      "role": "Positive front meniscus in dense flint, starting the convergence of the beam."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.60311,
      "vd": 60.7,
      "indexReference": "d",
      "glass": "BACD14 (HOYA, coordinate equivalent)",
      "focalLengthMm": 37.62308190132548,
      "role": "Positive crown of the front cemented doublet, the only low-dispersion element.",
      "cemented": "C1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.78472,
      "vd": 25.71,
      "indexReference": "d",
      "glass": "S-TIH11 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -19.991652207454127,
      "role": "Negative flint of the front doublet; its strong rear face borders the central air space.",
      "cemented": "C1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.72825,
      "vd": 28.46,
      "indexReference": "d",
      "glass": "S-TIH10 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -21.474283398551474,
      "role": "Negative flint of the rear doublet; its strong front curve mirrors S5 across the central air space.",
      "cemented": "C2"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.8061,
      "vd": 40.95,
      "indexReference": "d",
      "glass": "LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 26.15270885931558,
      "role": "Positive high-index element of the rear doublet, leaving that pair almost afocal in air.",
      "cemented": "C2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.8061,
      "vd": 40.95,
      "indexReference": "d",
      "glass": "LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 50.68470182100526,
      "role": "Rear biconvex positive restoring power behind the nearly afocal doublet."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 33.79,
      "d": 4.5,
      "sd": 15.329,
      "medium": 1
    },
    {
      "label": "2",
      "R": 130.283,
      "d": 0.15,
      "sd": 15.329
    },
    {
      "label": "3",
      "R": 21.458,
      "d": 6.59,
      "sd": 12.922,
      "medium": 2
    },
    {
      "label": "4",
      "R": 349.306,
      "d": 1.3,
      "sd": 12.922,
      "medium": 3
    },
    {
      "label": "5",
      "R": 14.989,
      "d": 6.5,
      "sd": 9.887
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.5
    },
    {
      "label": "6",
      "R": -15.134,
      "d": 1.65,
      "sd": 10.332,
      "medium": 4
    },
    {
      "label": "7",
      "R": -490.538,
      "d": 5.6,
      "sd": 12.34,
      "medium": 5
    },
    {
      "label": "8",
      "R": -20.316,
      "d": 0.15,
      "sd": 12.34
    },
    {
      "label": "9",
      "R": 246.577,
      "d": 3.23,
      "sd": 12.784,
      "medium": 6
    },
    {
      "label": "10",
      "R": -48.685,
      "sd": 12.784
    }
  ],
  "focus": {
    "closeFocusM": 0.45,
    "description": "Unit focus: the whole lens moves forward 7.74 mm, the back focus growing from 37.856 mm at infinity to 45.60 mm at the marketed 0.45 m minimum, object to image. The patent prints no focus travel; the near gap is solved paraxially, and its 0.149× magnification matches the published 16 × 24 cm minimum field."
  },
  "gaps": {
    "10": {
      "label": "BF",
      "values": [[37.856139940514495, 45.6]]
    }
  },
  "aperture": {
    "nominalFNumber": 1.86,
    "fStops": [1.86, 2.8, 4, 5.6, 8, 11, 16]
  },
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "C2",
      "fromSurface": "6",
      "toSurface": "8"
    }
  ],
  "layout": {
    "yScFill": 0.38
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
