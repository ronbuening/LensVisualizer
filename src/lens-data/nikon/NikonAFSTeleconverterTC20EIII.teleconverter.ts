import type { TeleconverterDataInput } from "../../types/teleconverter.js";

/**
 * Nikon AF-S Teleconverter TC-20E III: JP 2010-191211 A, Example 2 (Table 2, Figure 3).
 * Patent surfaces 26-37 are relabelled 1-12; patent surface 34 (the asphere) is 9A.
 * 7 elements in 5 air-separated groups and 2 functional groups (G1 negative, G2 positive),
 * with a cemented positive/negative/positive triplet (T1) and one aspherical surface, the
 * front of L6. The production correlation rests on Nikon's 7/5 construction with one
 * aspherical element and its published diagram; the manufactured radii, glasses and clear
 * apertures are unconfirmed.
 *
 * R, d, nd, vd and A4/A6 are the patent's values, unscaled. Paragraph [0042] writes the sag
 * with κ in place of the conventional 1 + K, so the printed κ = 1.0000 is K = 0.
 *
 * Geometry: the patent's master lens (surfaces 1-25, f = 294.001 mm, the same design as the
 * catalog's AF-S Nikkor 300mm f/2.8D IF-ED) has a computed back focus in air of 87.5101 mm
 * behind its rear filter plate. Subtracting the printed master-to-converter gap of 38.62 mm
 * gives masterImageDistanceMm = 48.8901 mm. The last d is the printed Bf, 52.5 mm.
 * Master plus converter computes to f = 582.13 mm and a paraxial back focus of 52.59 mm,
 * against the printed 581.9 and 52.5 mm; the magnification computes to 1.980 (printed
 * β = 1.97, nominal 2×). Nothing was fitted to the printed values.
 *
 * Semi-diameters (12, 12, 14, 16 mm for G1, G1, T1 and the rear menisci) are estimated from
 * Figure 3; the patent publishes no clear apertures. Off-axis marginal vignetting is kept.
 * minHostFno is 2.8: Nikon rates autofocus with f/2.8-or-faster AF-S/AF-I lenses, and these
 * semi-diameters pass axial beams to about F/2.05. A host must declare acceptsTeleconverters.
 * Glass labels name coordinate-compatible catalog glasses; supplier and melt are unconfirmed.
 */

const TELECONVERTER_DATA = {
  "key": "nikon-af-s-tc-20e-iii",
  "name": "NIKON AF-S TELECONVERTER TC-20E III",
  "maker": "Nikon",
  "subtitle": "JP 2010-191211 A, Example 2 — production correlation",
  "specs": [
    "7 ELEMENTS / 5 GROUPS",
    "2× CONVERTER (DESIGN β = 1.97)",
    "1 ASPHERICAL SURFACE / 1 ELEMENT"
  ],
  "lensMounts": [
    "nikon-f"
  ],
  "magnification": 2,
  "masterImageDistanceMm": 48.89010593631456,
  "patentNumber": "JP 2010-191211 A",
  "patentAuthors": [
    "Yoko Kimura"
  ],
  "patentAssignees": [
    "Nikon Corporation"
  ],
  "patentYear": 2010,
  "elementCount": 7,
  "groupCount": 5,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.62004,
      "vd": 36.26,
      "fl": 54.14110231513895,
      "glass": "620363 — flint class (catalog-compatible S-TIM2; supplier unproven)",
      "role": "Positive entrance member of net-negative G1."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.804,
      "vd": 46.58,
      "fl": -27.26425736199238,
      "glass": "804466 — lanthanum flint class (S-LAH65V compatible; supplier unproven)",
      "role": "Negative partner giving G1 its negative net power."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.62004,
      "vd": 36.3,
      "fl": 22.892495110657485,
      "glass": "620363 — flint class (E-F2 compatible; supplier unproven)",
      "cemented": "T1",
      "role": "Positive entrance member of the central cemented triplet."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.883,
      "vd": 40.76,
      "fl": -13.91220887424617,
      "glass": "883408 — lanthanum dense-flint class (S-LAH58 / N-LASF31A compatible; supplier unproven)",
      "cemented": "T1",
      "role": "Strongly negative centre of the cemented triplet, between two positive elements."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.57501,
      "vd": 41.49,
      "fl": 31.930231961117727,
      "glass": "575415 — light-flint class (S-TIL27 / LF7 compatible; supplier unproven)",
      "cemented": "T1",
      "role": "Equiconvex positive rear element of the cemented triplet."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.58913,
      "vd": 61.16,
      "fl": 87.66308505936138,
      "glass": "S-BAL35 (coordinate-compatible spectral proxy; supplier and melt unconfirmed)",
      "role": "Positive meniscus with an aspherical front face, correcting spherical aberration and field curvature."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.883,
      "vd": 40.76,
      "fl": -55.153589439300546,
      "glass": "883408 — lanthanum dense-flint class (S-LAH58 / N-LASF31A compatible; supplier unproven)",
      "role": "Negative rear meniscus, concave to the object side."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 41.365,
      "d": 5.0,
      "nd": 1.62004,
      "elemId": 1,
      "sd": 12
    },
    {
      "label": "2",
      "R": -169.892,
      "d": 0.8,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12
    },
    {
      "label": "3",
      "R": -618.114,
      "d": 1.5,
      "nd": 1.804,
      "elemId": 2,
      "sd": 12
    },
    {
      "label": "4",
      "R": 22.751,
      "d": 5.4,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12
    },
    {
      "label": "5",
      "R": 43.584,
      "d": 9.0,
      "nd": 1.62004,
      "elemId": 3,
      "sd": 14
    },
    {
      "label": "6",
      "R": -19.386,
      "d": 2.0,
      "nd": 1.883,
      "elemId": 4,
      "sd": 14
    },
    {
      "label": "7",
      "R": 35.157,
      "d": 8.2,
      "nd": 1.57501,
      "elemId": 5,
      "sd": 14
    },
    {
      "label": "8",
      "R": -35.157,
      "d": 2.9,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14
    },
    {
      "label": "9A",
      "R": -58.619,
      "d": 6.4,
      "nd": 1.58913,
      "elemId": 6,
      "sd": 16
    },
    {
      "label": "10",
      "R": -28.567,
      "d": 0.5,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16
    },
    {
      "label": "11",
      "R": -34.421,
      "d": 2.5,
      "nd": 1.883,
      "elemId": 7,
      "sd": 16
    },
    {
      "label": "12",
      "R": -121.391,
      "d": 52.5,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16
    }
  ],
  "asph": {
    "9A": {
      "K": 0,
      "A4": 1.0555e-05,
      "A6": 7.8265e-09,
      "A8": 0,
      "A10": 0,
      "A12": 0,
      "A14": 0
    }
  },
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "4"
    },
    {
      "text": "G2",
      "fromSurface": "5",
      "toSurface": "12"
    }
  ],
  "doublets": [
    {
      "text": "T1",
      "fromSurface": "5",
      "toSurface": "8"
    }
  ],
  "minHostFno": 2.8 // Nikon: AF with f/2.8-or-faster AF-S/AF-I lenses; the rims pass axial beams to about F/2.05
} satisfies TeleconverterDataInput;

export default TELECONVERTER_DATA;
