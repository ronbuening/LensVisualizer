import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Private, conditional M1 patent-family representative. Source f/1 and all frozen optics retained. The justified 94% geometry allowance removes hidden cap trim; this is not exact factory identity or application acceptance. */
const lens = {
  "schema": 2,
  "key": "angenieux-m1-family-patent-research-probe",
  "maker": "P. Angénieux",
  "name": "P. ANGÉNIEUX M1 FAMILY 25mm f/1 (conditional patent model)",
  "subtitle": "US 2,701,982, sole example; conditional M1 association; inferred stop and clear apertures",
  "visible": false,
  "catalog": {
    "imageFormat": "16mm-cinema",
    "elementCount": 8,
    "groupCount": 6,
    "focalLengthMm": {
      "design": 25
    },
    "fNumber": {
      "design": 1,
      "marketing": 0.95
    },
    "specs": [
      "Private research model; exact M1 factory identity unproven",
      "8 elements / 6 groups; 14 spherical powered surfaces",
      "Patent F = 100 scaled ×0.25 to 25 mm; source f/1 retained",
      "Marketed M1: 25 mm f/0.95; not the modeled aperture",
      "Stop position and clear apertures inferred; factory geometry unverified",
      "All 8 glass dispersions estimated; source n_D and Abbe values retained",
      "Infinity only; source image distance 14 mm retained",
      "16 mm format / 6.35 mm corner is a diagnostic assumption"
    ]
  },
  "source": {
    "patentNumber": "US 2,701,982",
    "patentYear": 1955,
    "authors": [
      "Pierre Angénieux"
    ],
    "assignees": [],
    "example": {
      "label": "Sole example",
      "id": null
    }
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "type": "Source spherical representative",
      "nd": 1.6751,
      "vd": 32.3,
      "glass": "Unmatched (source n_D/ν; Abbe dispersion estimate; no catalog identity)",
      "label": "Source glass L1",
      "indexReferenceNote": "The patent labels the index n_D ('D line'). The unchanged source index and Abbe number use the engine's d-line convention (587.5618 nm); dispersion is an Abbe estimate, not identified factory glass."
    },
    {
      "id": 2,
      "name": "L2",
      "type": "Source spherical representative",
      "nd": 1.6689,
      "vd": 46.7,
      "glass": "Unmatched (source n_D/ν; Abbe dispersion estimate; no catalog identity)",
      "label": "Source glass L2",
      "indexReferenceNote": "The patent labels the index n_D ('D line'). The unchanged source index and Abbe number use the engine's d-line convention (587.5618 nm); dispersion is an Abbe estimate, not identified factory glass."
    },
    {
      "id": 3,
      "name": "L3",
      "type": "Source spherical representative",
      "nd": 1.6913,
      "vd": 53.8,
      "glass": "Unmatched (source n_D/ν; Abbe dispersion estimate; no catalog identity)",
      "cemented": "D1",
      "label": "Source glass L3",
      "indexReferenceNote": "The patent labels the index n_D ('D line'). The unchanged source index and Abbe number use the engine's d-line convention (587.5618 nm); dispersion is an Abbe estimate, not identified factory glass."
    },
    {
      "id": 4,
      "name": "L4",
      "type": "Source spherical representative",
      "nd": 1.6751,
      "vd": 32.3,
      "glass": "Unmatched (source n_D/ν; Abbe dispersion estimate; no catalog identity)",
      "cemented": "D1",
      "label": "Source glass L4",
      "indexReferenceNote": "The patent labels the index n_D ('D line'). The unchanged source index and Abbe number use the engine's d-line convention (587.5618 nm); dispersion is an Abbe estimate, not identified factory glass."
    },
    {
      "id": 5,
      "name": "L5",
      "type": "Source spherical representative",
      "nd": 1.6992,
      "vd": 30.2,
      "glass": "Unmatched (source n_D/ν; Abbe dispersion estimate; no catalog identity)",
      "cemented": "D2",
      "label": "Source glass L5",
      "indexReferenceNote": "The patent labels the index n_D ('D line'). The unchanged source index and Abbe number use the engine's d-line convention (587.5618 nm); dispersion is an Abbe estimate, not identified factory glass."
    },
    {
      "id": 6,
      "name": "L6",
      "type": "Source spherical representative",
      "nd": 1.6204,
      "vd": 60.2,
      "glass": "Unmatched (source n_D/ν; Abbe dispersion estimate; no catalog identity)",
      "cemented": "D2",
      "label": "Source glass L6",
      "indexReferenceNote": "The patent labels the index n_D ('D line'). The unchanged source index and Abbe number use the engine's d-line convention (587.5618 nm); dispersion is an Abbe estimate, not identified factory glass."
    },
    {
      "id": 7,
      "name": "L7",
      "type": "Source spherical representative",
      "nd": 1.6913,
      "vd": 53.8,
      "glass": "Unmatched (source n_D/ν; Abbe dispersion estimate; no catalog identity)",
      "label": "Source glass L7",
      "indexReferenceNote": "The patent labels the index n_D ('D line'). The unchanged source index and Abbe number use the engine's d-line convention (587.5618 nm); dispersion is an Abbe estimate, not identified factory glass."
    },
    {
      "id": 8,
      "name": "L8",
      "type": "Source spherical representative",
      "nd": 1.6913,
      "vd": 53.8,
      "glass": "Unmatched (source n_D/ν; Abbe dispersion estimate; no catalog identity)",
      "label": "Source glass L8",
      "indexReferenceNote": "The patent labels the index n_D ('D line'). The unchanged source index and Abbe number use the engine's d-line convention (587.5618 nm); dispersion is an Abbe estimate, not identified factory glass."
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
    "description": "Infinity-only patent prescription. No close-focus travel is modeled. The finite close-focus placeholder is not a physical minimum focus distance. The printed image distance is retained; no best-focus shift is applied."
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
  "layout": {
    "yScFill": 0.3
  },
  "checks": {
    "gapSagFrac": 0.94
  }
} satisfies LensDataV2Input;
export default lens;
