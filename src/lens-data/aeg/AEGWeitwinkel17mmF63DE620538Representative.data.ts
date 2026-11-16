/** Representative published patent embodiment, NOT a factory-exact prescription.
 * Original-office screenshots verified; original PDF NOT downloaded.
 * All clear apertures/outer lands and exact stop position/diameter are inferred.
 * Near-hemispherical cavities are explicitly described and drawn; 85.1deg rim
 * allowance follows selected inferred caps, not a printed angle. gapSag0.90.
 * Calculated BFD; fixed infinity-only controls. Full app/current-main/browser QA pending.
 * See companion analysis/audit for source, prediction and delivery limitations.
 */
import type { LensDataV2Input } from "../lens_recovery_20261112/LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "aeg-weitwinkel17-de620538-representative",
  "maker": "AEG",
  "name": "AEG Weitwinkel 17mm f/6.3 patent representative",
  "visible": false,
  "elements": [
    {
      "id": 1,
      "name": "Published glass 1",
      "type": "Lens",
      "nd": 1.54,
      "vd": 59.6,
      "indexReference": "d",
      "label": "Element 1"
    },
    {
      "id": 2,
      "name": "Published glass 2",
      "type": "Lens",
      "nd": 1.54,
      "vd": 59.6,
      "indexReference": "d",
      "label": "Element 2"
    },
    {
      "id": 3,
      "name": "Published glass 3",
      "type": "Lens",
      "nd": 1.6138,
      "vd": 56.3,
      "indexReference": "d",
      "label": "Element 3"
    },
    {
      "id": 4,
      "name": "Published glass 4",
      "type": "Lens",
      "nd": 1.6364,
      "vd": 35.4,
      "indexReference": "d",
      "label": "Element 4"
    },
    {
      "id": 5,
      "name": "Published glass 5",
      "type": "Lens",
      "nd": 1.6074,
      "vd": 56.7,
      "indexReference": "d",
      "label": "Element 5"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 67,
      "d": 3.5,
      "sd": 48,
      "medium": 1
    },
    {
      "label": "2",
      "R": 26.5,
      "d": 19.9,
      "sd": 26.4,
      "rimExtensionSd": 48
    },
    {
      "label": "3",
      "R": 43.35,
      "d": 2.2,
      "sd": 21.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": 12.26,
      "d": 24.1,
      "sd": 12.2,
      "rimExtensionSd": 21.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0
    },
    {
      "label": "5",
      "R": 87.6,
      "d": 6.6,
      "sd": 7,
      "medium": 3
    },
    {
      "label": "6",
      "R": -8.3,
      "d": 2.6,
      "sd": 7,
      "medium": 4
    },
    {
      "label": "7",
      "R": -24.2,
      "d": 23,
      "sd": 7
    },
    {
      "label": "8",
      "R": 81.1,
      "d": 8.3,
      "sd": 21.5,
      "medium": 5
    },
    {
      "label": "9",
      "R": -64.2,
      "d": 28.988003934,
      "sd": 21.5
    }
  ],
  "gaps": {},
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Infinity-only representative patent embodiment: all spacings fixed; finite-focus mechanism unspecified, control intentionally has no prescribed motion."
  },
  "aperture": {
    "nominalFNumber": 6.3,
    "fStops": [
      6.3,
      8,
      11,
      16
    ]
  },
  "projection": {
    "kind": "fisheye-equidistant",
    "focalLengthMm": 16.6754,
    "fullFieldDeg": 180,
    "imageCircleMm": 50.14,
    "maxTraceFieldDeg": 90
  },
  "layout": {
    "yScFill": 0.7
  },
  "checks": {
    "maxRimAngleDeg": 85.1,
    "gapSagFrac": 0.9
  },
  "catalog": {
    "elementCount": 5,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 17,
      "design": 16.67540071582021
    },
    "fNumber": {
      "marketing": 6.3,
      "design": 6.3
    }
  },
  "source": {
    "patentNumber": "DE 620538",
    "patentYear": 1935,
    "authors": [],
    "assignees": [
      "Allgemeine Elektricitats-Gesellschaft"
    ]
  }
} satisfies LensDataV2Input;
