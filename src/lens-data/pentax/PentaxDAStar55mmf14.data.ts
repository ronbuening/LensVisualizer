import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 2010/0073777 A1 (Hoya Corporation; Jun Hirakawa), Embodiment 1 (Table 1, Fig. 1): f = 56.36, FNO 1:1.4,
 * W = 14.3°, M = −0.173, fB = 0.0, image height 14.24 mm. Native scale; no scale factor is applied. All spherical,
 * nine elements in eight groups with L5/L6 cemented. Strong production correlation with the smc PENTAX-DA★55mm
 * F1.4 SDM, announced in September 2008 (9/8, 28.6°, 0.45 m, 0.173×, one anomalous-dispersion element, drawn at
 * L8); Embodiment 3 has the same layout and headline values. This is a patent design, not a factory prescription.
 * R, d, nd and νd follow the printed Table 1 without alteration.
 * Stop: the diaphragm is 7.49 mm behind S6 (¶0061), so the printed d6 = 9.68 is split 7.49 + 2.19. Its radius is
 * set by the f/1.4 paraxial entrance pupil; the patent prints no stop diameter.
 * Cover glass: S18–S19 is a 2.00 mm plate whose index is not printed; it is traced as a rear plate with an assumed
 * nd 1.5168 / νd 64.2. The image lies on its rear face (fB = 0.0); with that index the paraxial back focus is
 * 0.0018 mm.
 * Focus: d15 is printed as 1.00 (infinity) and 13.27 mm (close). L1–L8 and the iris move 12.27 mm toward the object
 * and L9 stays fixed (¶0060). The close spacing focuses at 0.45 m object to image, −0.173×.
 * Semi-diameters are inferred; none is printed. L4 is square at 13.45 mm, just inside the height (about 13.49 mm)
 * where its flat rear face meets the deep concave front of L5 across the 5.49 mm gap, hence `gapSagFrac: 1`. The
 * rims of L1 and L6–L8 are raised only as far as the f/1.4 axial beam needs. The other element heights agree with
 * Fig. 1 within 4 %, so they are kept; the figure is drawn anamorphic, at 17.81 px/mm along the axis and 15.6–15.9
 * px/mm across it at 400 dpi (from the stop opening and from arc fits to five surfaces). Fig. 1 ends L3's concave rear face and L5's concave front face in flat lands, as
 * Ricoh's drawing does: S6 is cut at 6.13 mm (cap end q = 0.837 of the edge, cut radius 14.07 mm, clear of the stop
 * plane) and S9 at 5.45 mm (q = 0.772 gives 13.43 mm; moved out to 13.45 mm to clear the traced beams by 0.05 mm).
 * S9 is 17.4 mm so the cemented pair is square-cut, as drawn. The cuts clip no ray of the wide-open beams at either
 * focus state.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-da-star-55mm-f14",
  "maker": "Pentax",
  "name": "PENTAX SMC DA* 55mm f/1.4 SDM",
  "subtitle": "US 2010/0073777 A1, Example 1 — strong match to the 2008 production lens",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "aps-c",
    "specs": [
      "9 ELEMENTS / 8 GROUPS",
      "DESIGN f = 56.36 mm",
      "DESIGN F/1.4",
      "ALL SPHERICAL",
      "1 ANOMALOUS-DISPERSION ELEMENT"
    ],
    "elementCount": 9,
    "groupCount": 8,
    "closeFocusM": {
      "marketing": 0.45
    },
    "focalLengthMm": {
      "marketing": 55,
      "design": 56.36
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.4
    }
  },
  "source": {
    "patentNumber": "US 2010/0073777 A1",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 2010,
    "authors": [
      "Jun Hirakawa"
    ],
    "assignees": [
      "Hoya Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "focalLengthMm": 77.35148473128464,
      "glass": "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Front positive meniscus, convex to the object; with L2 it collects the f/1.4 beam."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.8061,
      "vd": 40.9,
      "focalLengthMm": 77.92480822332072,
      "glass": "S-LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Second positive meniscus, convex to the object; shares the front converging power with L1."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.69895,
      "vd": 30.1,
      "focalLengthMm": -39.85358097541357,
      "glass": "S-TIM35 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Negative meniscus whose deep concave rear face looks at the iris; the front negative member of the Gauss pair."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Plano-Concave",
      "nd": 1.58144,
      "vd": 40.7,
      "focalLengthMm": -257.98018712162906,
      "glass": "S-TIL25 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Weak plano-concave element just behind the iris; the patent's intermediate negative lens, added to correct sagittal lateral aberration."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.76182,
      "vd": 26.5,
      "focalLengthMm": -20.14549257186005,
      "glass": "S-TIH14 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Dense-flint biconcave front element of the cemented doublet, deeply concave to the iris; the strongest negative element.",
      "cemented": "C1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.834,
      "vd": 37.2,
      "focalLengthMm": 26.09268151291995,
      "glass": "S-LAH60 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "High-index biconvex rear element of the cemented doublet; the strongest positive element in the lens.",
      "cemented": "C1"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.8061,
      "vd": 40.9,
      "focalLengthMm": 105.64833583168914,
      "glass": "S-LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive meniscus, convex to the image; first of the three positive elements behind the doublet."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.5924,
      "vd": 68.3,
      "focalLengthMm": 115.52439840620401,
      "glass": "K-GFK68 (SUMITA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "Ricoh's construction drawing marks this element as anomalous low-dispersion glass; the patent nd/νd (1.59240/68.3) equal Sumita K-GFK68, whose catalog θgF of 0.546 lies about +0.017 above the normal line.",
      "role": "Low-dispersion biconvex element, the last that moves in focusing; its νd 68.3 meets the patent's condition (2) for chromatic correction."
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Plano-Convex",
      "nd": 1.48749,
      "vd": 70.2,
      "focalLengthMm": 358.4688916695727,
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Weak plano-convex rear element, convex to the image; stays fixed while L1–L8 move to focus."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 50.922,
      "d": 5.5,
      "sd": 20.6,
      "medium": 1
    },
    {
      "label": "2",
      "R": 328.301,
      "d": 0.1,
      "sd": 20.6
    },
    {
      "label": "3",
      "R": 29.259,
      "d": 5.16,
      "sd": 19,
      "medium": 2
    },
    {
      "label": "4",
      "R": 50.46,
      "d": 2.66,
      "sd": 19
    },
    {
      "label": "5",
      "R": 63.688,
      "d": 1.41,
      "sd": 16.8,
      "medium": 3
    },
    {
      "label": "6",
      "R": 19.203,
      "d": 7.49,
      "sd": 16.8,
      "rimCutDepthMm": 6.13
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.19
    },
    {
      "label": "7",
      "R": -150,
      "d": 2,
      "sd": 13.45,
      "medium": 4
    },
    {
      "label": "8",
      "R": "flat",
      "d": 5.49,
      "sd": 13.45
    },
    {
      "label": "9",
      "R": -19.31,
      "d": 1.5,
      "sd": 17.4,
      "medium": 5,
      "rimCutDepthMm": 5.45
    },
    {
      "label": "10",
      "R": 77.297,
      "d": 9.43,
      "sd": 17.4,
      "medium": 6
    },
    {
      "label": "11",
      "R": -28.608,
      "d": 0.1,
      "sd": 17.4
    },
    {
      "label": "12",
      "R": -251.725,
      "d": 3.24,
      "sd": 17.4,
      "medium": 7
    },
    {
      "label": "13",
      "R": -64,
      "d": 0.1,
      "sd": 17.4
    },
    {
      "label": "14",
      "R": 104,
      "d": 3.42,
      "sd": 16.8,
      "medium": 8
    },
    {
      "label": "15",
      "R": -197.685,
      "sd": 16.8
    },
    {
      "label": "16",
      "R": "flat",
      "d": 3,
      "sd": 16.5,
      "medium": 9
    },
    {
      "label": "17",
      "R": -174.75,
      "d": 37.41,
      "sd": 16.5
    }
  ],
  "focus": {
    "closeFocusM": 0.45,
    "description": "PUBLISHED focus: US 2010/0073777 A1, Example 1 prints d15 at infinity (1.00 mm) and at the close state (13.27 mm, M = −0.173). L1–L8 and the iris move 12.27 mm toward the object while L9 and the cover glass stay fixed. The patent prints no object distance; with the image on the rear face of the cover glass, the close spacing focuses at 0.45 m object to image and −0.173×, matching Ricoh's 0.45 m minimum focus and 0.173× maximum magnification. Intermediate positions interpolate d15 linearly.",
    "published": [
      1
    ],
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 344.55,
        "distanceReference": "first-surface",
        "sourceMagnification": "0.173",
        "source": "US 2010/0073777 A1, Embodiment 1, Table 1 (PDF p. 12): the table header prints “M = −0.173”, a magnification with no object distance; the table's only finite state is the closest-distance spacing this keyframe carries (d15 13.27, ¶0054). The object distance is solved from the prescription at that magnification; focused on its image plane the state gives 0.17318."
      }
    ]
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
    "blades": 9
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 28.6,
    "maxTraceFieldDeg": 14.3
  },
  "layout": {
    "yScFill": 0.36
  },
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ],
  "gaps": {
    "15": {
      "label": "D15",
      "values": [
        [
          1,
          13.27
        ]
      ]
    }
  },
  "rearPlates": [
    {
      "label": "CG",
      "thicknessMm": 2,
      "nd": 1.5168,
      "vd": 64.2,
      "gapAfterMm": 0,
      "glass": "BSC7 (HOYA catalog equivalent; cover-glass material assumed, not printed)",
      "source": "US 2010/0073777 A1 Table 1, S18\u2013S19: the 2.00 mm cover-glass thickness is printed, its material is not; nd 1.5168 / \u03bdd 64.2 is assumed."
    }
  ],
  "checks": {
    "gapSagFrac": 1
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
