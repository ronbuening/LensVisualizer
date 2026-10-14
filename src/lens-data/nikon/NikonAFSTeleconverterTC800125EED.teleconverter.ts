import type { TeleconverterDataInput } from "../../types/teleconverter.js";

/**
 * Nikon AF-S Teleconverter TC800-1.25E ED: JP 2013-250290 A, Example 1 (Table 1, Figure 1).
 * Patent surfaces 39-46 are relabelled 1-8. 5 spherical elements in 3 groups: G1 is a
 * positive meniscus (L11), G2 a cemented negative triplet (L21-L23, T1) and G3 a biconvex
 * positive (L31). The production correlation rests on the 5/3 construction and on Nikon's
 * construction diagram, which marks the second element (L21) as ED. It is a patent-design
 * correlation, not a factory prescription.
 *
 * Geometry: the patent's master lens (surfaces 1-38, f = 780.00037 mm, F/5.65772, infinity
 * only, including its drop-in filter at surfaces 31-32) has a computed paraxial back focus
 * in air of 52.8541 mm. Subtracting the printed master-to-converter gap of 4.0708 mm gives
 * masterImageDistanceMm = 48.7833 mm. The last d is the printed BF, 42.27895 mm (computed
 * paraxial back focus 42.2783 mm). Master plus converter computes to f = 975.013 mm against
 * the printed 975.01926 mm, a ratio of 1.25002. The design's 780 mm / 975 mm values are not
 * scaled to the marketed 800 mm / 1000 mm.
 *
 * R, d, nd and vd are the patent's values, unscaled; Example 1 has no aspheres.
 * Semi-diameters are inferred: 16 mm on every converter surface, consistent with Figure 1,
 * which draws the converter elements about as tall as the master's rear group. The patent
 * publishes no clear apertures. On the patent master the axial beam and the chief ray to
 * the 21.633 mm image height clear every converter rim; outer off-axis pupil rays vignette.
 * minHostFno is the patent master's F/5.65772. The patent prints no stop diameter; with the
 * master's stop sized for that F-number the combination traces to F/7.07 (printed 7.07229).
 * The catalog AF-S NIKKOR 800mm f/5.6E FL ED VR (from JP 2013-250293 A) prints the same
 * master radii and spacings, with indices rounded to five decimals.
 * Nikon makes this converter only for the AF-S NIKKOR 800mm f/5.6E FL ED VR. It is not
 * universal, so a host must declare acceptsTeleconverters.
 * Glass labels name coordinate-compatible catalog glasses, which supply the dispersion
 * curve; supplier and melt are unconfirmed. L23's coordinate has no catalog curve.
 */

const TELECONVERTER_DATA = {
  "key": "nikon-af-s-tc800-1-25e-ed",
  "name": "NIKON AF-S TELECONVERTER TC800-1.25E ED",
  "maker": "Nikon",
  "subtitle": "JP 2013-250290 A, Example 1 \u2014 production correlation",
  "specs": [
    "5 ELEMENTS / 3 GROUPS",
    "1.25\u00d7 REAR CONVERTER",
    "ALL SPHERICAL"
  ],
  "lensMounts": [
    "nikon-f"
  ],
  "magnification": 1.25,
  "minHostFno": 5.65772,
  "masterImageDistanceMm": 48.78327522813489,
  "patentNumber": "JP 2013-250290 A",
  "patentAuthors": [
    "Akiko Furuta"
  ],
  "patentAssignees": [
    "Nikon Corporation"
  ],
  "patentYear": 2013,
  "elementCount": 5,
  "groupCount": 3,
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.581439,
      "vd": 40.96,
      "glass": "J-LF5 class (supplier unconfirmed)",
      "fl": 98.54991955487839,
      "role": "Positive meniscus, concave to the master lens, forming the first converter group G1 on its own."
    },
    {
      "id": 2,
      "name": "L21",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.59319,
      "vd": 67.96,
      "glass": "J-PSKH1 class (supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Nikon's construction diagram marks this second element as the converter's ED element, and its 1.59319/67.96 coordinate is a low-dispersion phosphate-crown class with positive anomalous partial dispersion.",
      "fl": -40.20197993415136,
      "role": "Negative front element of the cemented L21–L23 triplet in converter group G2; the low-dispersion negative that the patent's condition (1) on νn is written for.",
      "cemented": "T1"
    },
    {
      "id": 3,
      "name": "L22",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.581439,
      "vd": 40.96,
      "glass": "J-LF5 class (supplier unconfirmed)",
      "fl": 34.16800711606085,
      "role": "Positive middle element of the cemented L21–L23 triplet in converter group G2.",
      "cemented": "T1"
    },
    {
      "id": 4,
      "name": "L23",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.90265,
      "vd": 35.73,
      "glass": "J-LASFH9A class (supplier unconfirmed)",
      "fl": -31.154124677232634,
      "role": "Negative rear element of the cemented L21–L23 triplet in converter group G2; the highest index in the converter.",
      "cemented": "T1"
    },
    {
      "id": 5,
      "name": "L31",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.51742,
      "vd": 52.25,
      "glass": "J-KF6 class (supplier unconfirmed)",
      "fl": 100.54421678068137,
      "role": "Positive rear element, forming the third converter group G3 on its own."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": -960.3839,
      "d": 3.5,
      "nd": 1.581439,
      "elemId": 1,
      "sd": 16
    },
    {
      "label": "2",
      "R": -54.1469,
      "d": 2.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16
    },
    {
      "label": "3",
      "R": -64.417,
      "d": 2.0,
      "nd": 1.59319,
      "elemId": 2,
      "sd": 16
    },
    {
      "label": "4",
      "R": 38.303,
      "d": 7.5,
      "nd": 1.581439,
      "elemId": 3,
      "sd": 16
    },
    {
      "label": "5",
      "R": -38.303,
      "d": 2.0,
      "nd": 1.90265,
      "elemId": 4,
      "sd": 16
    },
    {
      "label": "6",
      "R": 108.411,
      "d": 1.0,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16
    },
    {
      "label": "7",
      "R": 64.8598,
      "d": 4.1,
      "nd": 1.51742,
      "elemId": 5,
      "sd": 16
    },
    {
      "label": "8",
      "R": -257.2027,
      "d": 42.27895,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16
    }
  ],
  "asph": {},
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "2"
    },
    {
      "text": "G2",
      "fromSurface": "3",
      "toSurface": "6"
    },
    {
      "text": "G3",
      "fromSurface": "7",
      "toSurface": "8"
    }
  ],
  "doublets": [
    {
      "text": "T1",
      "fromSurface": "3",
      "toSurface": "6"
    }
  ]
} satisfies TeleconverterDataInput;

export default TELECONVERTER_DATA;
