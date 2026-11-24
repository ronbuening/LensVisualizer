import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  "schema": 2,
  "key": "private-laowa-10-cn221303696-e1-inferred-f8-infinity",
  "name": "PRIVATE Laowa 10mm family — inferred conic E1, f8 infinity",
  "maker": "Laowa",
  "visible": false,
  "subtitle": "CN221303696U Example1 reconstruction; K=epsilon−1 explicitly inferred from parent/scout signed PA review, not publication-defined. Dline f8±3deg infinity only.",
  "source": {
    "patentNumber": "CN 221303696 U",
    "authors": [],
    "assignees": [],
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "sdSource": "heuristic",
    "omissions": [
      {
        "kind": "asphere-equation",
        "surfaces": [
          "3",
          "4",
          "24",
          "25"
        ],
        "note": "The publication gives a standard1+K sag equation but labels the signed table column epsilon without binding that symbol toK. This reconstruction uses native K=epsilon−1, inferred by parent and independent scout from original Fig2signeddline longitudinalSA/PA behavior. All printed polynomials/radii/spacing/glass/detector remain unchanged. The source PDF is in parent/scout custody, not locally possessed. Curves are conditional on this interpretation, not exact factory evidence."
      }
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Reconstructed source element 1",
      "type": "Patent medium",
      "nd": 1.883,
      "vd": 45,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Reconstructed source element 2",
      "type": "Patent medium",
      "nd": 1.81667,
      "vd": 45.18,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Reconstructed source element 3",
      "type": "Patent medium",
      "nd": 1.92286,
      "vd": 20.88,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Reconstructed source element 4",
      "type": "Patent medium",
      "nd": 1.64769,
      "vd": 33.84,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Reconstructed source element 5",
      "type": "Patent medium",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Reconstructed source element 6",
      "type": "Patent medium",
      "nd": 1.52306,
      "vd": 60.8,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "E7",
      "label": "Reconstructed source element 7",
      "type": "Patent medium",
      "nd": 1.83437,
      "vd": 41.98,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified",
      "cemented": "D3"
    },
    {
      "id": 8,
      "name": "E8",
      "label": "Reconstructed source element 8",
      "type": "Patent medium",
      "nd": 1.92286,
      "vd": 20.88,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified",
      "cemented": "D3"
    },
    {
      "id": 9,
      "name": "E9",
      "label": "Reconstructed source element 9",
      "type": "Patent medium",
      "nd": 1.92286,
      "vd": 20.88,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified",
      "cemented": "T1"
    },
    {
      "id": 10,
      "name": "E10",
      "label": "Reconstructed source element 10",
      "type": "Patent medium",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified",
      "cemented": "T1"
    },
    {
      "id": 11,
      "name": "E11",
      "label": "Reconstructed source element 11",
      "type": "Patent medium",
      "nd": 1.90325,
      "vd": 27.29,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified",
      "cemented": "T1"
    },
    {
      "id": 12,
      "name": "E12",
      "label": "Reconstructed source element 12",
      "type": "Patent medium",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified"
    },
    {
      "id": 13,
      "name": "E13",
      "label": "Reconstructed source element 13",
      "type": "Patent medium",
      "nd": 1.89249,
      "vd": 33.04,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified",
      "cemented": "D4"
    },
    {
      "id": 14,
      "name": "E14",
      "label": "Reconstructed source element 14",
      "type": "Patent medium",
      "nd": 1.61202,
      "vd": 39.42,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified",
      "cemented": "D4"
    },
    {
      "id": 15,
      "name": "E15",
      "label": "Reconstructed source element 15",
      "type": "Patent medium",
      "nd": 1.72665,
      "vd": 48.06,
      "indexReference": "d",
      "glass": "Source d-line nd/Vd relayed after independent original-source reviews; vendor/melt/production identity unspecified"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 28.154,
      "d": 1.4,
      "sd": 1.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 13.638,
      "d": 4.912,
      "sd": 1.4
    },
    {
      "label": "3",
      "R": 18.332,
      "d": 1.5,
      "sd": 1.4,
      "asphere": {
        "K": 0.556,
        "A4": -4.78279e-05,
        "A6": -6.46806e-07,
        "A8": 5.11403e-09,
        "A10": -2.11626e-11,
        "A12": 2.28211e-14
      },
      "medium": 2
    },
    {
      "label": "4",
      "R": 7.112,
      "d": 6.484,
      "sd": 1.3,
      "asphere": {
        "K": -0.5949,
        "A4": -7.61249e-05,
        "A6": -1.9431e-06,
        "A8": -2.11408e-09,
        "A10": 1.29423e-10,
        "A12": -1.20492e-12
      }
    },
    {
      "label": "5",
      "R": 30.083,
      "d": 1.2,
      "sd": 1.7,
      "medium": 3
    },
    {
      "label": "6",
      "R": 12.44,
      "d": 10,
      "sd": 1.7,
      "medium": 4
    },
    {
      "label": "7",
      "R": -19.901,
      "d": 0.371,
      "sd": 2
    },
    {
      "label": "8",
      "R": -16.7,
      "d": 0.8,
      "sd": 2,
      "medium": 5
    },
    {
      "label": "9",
      "R": 10.121,
      "d": 8.023,
      "sd": 2,
      "medium": 6
    },
    {
      "label": "10",
      "R": -18.488,
      "d": 3.607,
      "sd": 2.2
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.7
    },
    {
      "label": "12",
      "R": 125.07,
      "d": 1,
      "sd": 2.1,
      "medium": 7
    },
    {
      "label": "13",
      "R": 9.279,
      "d": 3.065,
      "sd": 2.1,
      "medium": 8
    },
    {
      "label": "14",
      "R": 25.475,
      "d": 0.15,
      "sd": 2.1
    },
    {
      "label": "15",
      "R": 12.686,
      "d": 0.85,
      "sd": 2.1,
      "medium": 9
    },
    {
      "label": "16",
      "R": 9.101,
      "d": 7.25,
      "sd": 2.1,
      "medium": 10
    },
    {
      "label": "17",
      "R": -9.101,
      "d": 0.85,
      "sd": 2.1,
      "medium": 11
    },
    {
      "label": "18",
      "R": -15.425,
      "d": 0.168,
      "sd": 2.1
    },
    {
      "label": "19",
      "R": 22.06,
      "d": 5.95,
      "sd": 2.1,
      "medium": 12
    },
    {
      "label": "20",
      "R": -16.724,
      "d": 2.369,
      "sd": 1.9
    },
    {
      "label": "21",
      "R": -14.798,
      "d": 1.2,
      "sd": 1.6,
      "medium": 13
    },
    {
      "label": "22",
      "R": 13.721,
      "d": 8,
      "sd": 1.6,
      "medium": 14
    },
    {
      "label": "23",
      "R": -524.263,
      "d": 1.454,
      "sd": 1.5
    },
    {
      "label": "24",
      "R": -150,
      "d": 5.104,
      "sd": 1.5,
      "asphere": {
        "K": -19.2397,
        "A4": -4.78759e-05,
        "A6": 3.93432e-07,
        "A8": -4.32022e-09,
        "A10": 4.30674e-11,
        "A12": -1.40008e-13
      },
      "medium": 15
    },
    {
      "label": "25",
      "R": -16.86,
      "d": 13.143,
      "sd": 1.5,
      "asphere": {
        "K": -10.0303,
        "A4": -0.000212229,
        "A6": 2.5721e-06,
        "A8": -2.25833e-08,
        "A10": 1.24147e-10,
        "A12": -2.71573e-13
      }
    }
  ],
  "focus": {
    "closeFocusM": 0.5,
    "keyframes": [
      0,
      1
    ],
    "published": [],
    "description": "INFINITY ONLY constant prescription. Required positive close metadata mirrors the unqualified printed500mm row, with no certified distance datum, finite travel or conjugate. It is not a modeled close-focus distance/range. Native finiteMTF remains unavailable; keep focus at infinity. Original nearrow retained separately as analytical evidence only."
  },
  "aperture": {
    "nominalFNumber": 8,
    "fStops": [
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 6,
    "maxTraceFieldDeg": 3
  },
  "layout": {
    "yScFill": 0.6
  },
  "catalog": {
    "focalLengthMm": {
      "design": 10.2855,
      "marketing": 10
    },
    "fNumber": {
      "design": 2.87,
      "marketing": 2.8
    },
    "elementCount": 15,
    "groupCount": 9,
    "specs": [
      "Source-based, explicitly reconstructed Laowa10mmf2.8 family representative; not exact retail AF/MF/factory optics. NativeconicK=epsilon−1 is inferred, not explicitly defined in publication.",
      "All signed source radii/spacings/indices/polynomials and fixed89.55mm detector retained; no fit, scaling, spacer, plate addition, detector registration or correctionshim.",
      "Qualified only at infinity, Dline, nativef8control withfixedestimatediris,±3degrees. Sourcef2.87/129.2deg and retail~f2.8/130.4deg are provenance, not full-aperture/full-field claims.",
      "Source500mmrowD4/D10 is held for unverified distance reference. No interpolation, factory0.12m close-focus or finite performance claim. Required .5m schema metadata is nonoperational and does not certify a conjugate.",
      "Estimated clearcaps/iris are scoped ray-envelope inferences, not manufacturer mechanical dimensions. No broadband or measuredMTF claim."
    ]
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
