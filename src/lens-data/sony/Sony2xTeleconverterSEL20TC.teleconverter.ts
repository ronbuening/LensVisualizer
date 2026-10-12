import type { TeleconverterDataInput } from "../../types/teleconverter.js";

/**
 * Sony 2x Teleconverter SEL20TC: WO 2017/134928 A1, Example 3 (Table 7, Figure 4).
 * Patent surfaces 43-55 are relabelled 1-13. 8 elements in 5 air-separated groups and
 * 3 functional groups (G1 positive, G2 negative, G3 positive); one aspherical surface,
 * the rear of L1. The production correlation rests on Sony's construction diagram.
 *
 * Geometry: the patent's master lens (Table 1, with the Table 2 wide and tele infinity
 * states) has a back focus in air of 24.9600 + 2.5/1.5168 + 1.0 = 27.6082 mm. Subtracting
 * the printed master-to-converter gap of 1.6082 mm gives masterImageDistanceMm = 26.0000 mm.
 * The last d is the patent's air-equivalent back focus, 12.9482 mm. No rear plate is listed
 * here: the composer keeps the host's camera plate once.
 *
 * R, d, nd, vd, K and A4-A8 are the patent's values, unscaled. Paragraph [0090] prints
 * c²·y² in the sag numerator; it is read as c·y², the standard form with c = 1/R. Read
 * literally, G1 would have f = 286 mm against the printed 68.22 mm. This reading is an
 * interpretation, not an official erratum.
 * Paragraph [0140] calls L8 biconvex, but Table 7 gives R = -450 / -23, and the printed
 * f3 = 46.46 mm and condition (1) = -1.11 agree with those signs: L8 is a positive meniscus.
 * Two printed summary values are not reproduced: the total length 242.97 mm (the tables sum
 * to 242.9845 mm) and the rows headed 2ω, which hold half angles. Nothing was fitted to them.
 *
 * Semi-diameters are inferred from Figure 4; the patent publishes no clear apertures. The
 * figure scales to about 8.7 / 10 / 12 / 16 / 18.5 mm for the five groups; the triplet and
 * doublet were reduced to 9.4 and 11.2 mm to keep the edges of L3 and L5 positive. On the
 * patent's F2.88 master the axial beam and the chief ray to the 21.63 mm image height clear
 * every rim at both zoom ends. At the image corner the converter rims pass about 70 % of the
 * pupil's meridional width; that vignetting is kept rather than removed by enlarging the rims.
 * minHostFno is the F2.8 class of the patent's master; faster hosts are not covered, and a
 * host must declare acceptsTeleconverters (the converter is not universal).
 * Glass labels name coordinate-compatible catalog glasses, which supply the
 * dispersion curve; actual supplier/melt and production clear apertures are unconfirmed.
 */

const TELECONVERTER_DATA = {
  "key": "sony-2x-teleconverter-sel20tc",
  "maker": "Sony",
  "name": "SONY 2x TELECONVERTER SEL20TC",
  "subtitle": "WO 2017/134928 A1, Example 3 — production correlation",
  "specs": [
    "8 ELEMENTS / 5 GROUPS",
    "2× REAR CONVERTER",
    "1 ASPHERICAL SURFACE / 1 ELEMENT"
  ],
  "magnification": 2,
  "lensMounts": [
    "sony-fe"
  ],
  "minHostFno": 2.8,
  "patentNumber": "WO 2017/134928 A1",
  "patentAuthors": [
    "Yonghua Chen",
    "Naoki Miyagawa"
  ],
  "patentAssignees": [
    "Sony Corporation"
  ],
  "patentYear": 2017,
  "elementCount": 8,
  "groupCount": 5,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive (Asph)",
      "nd": 1.68893,
      "vd": 31.16,
      "indexReference": "d",
      "fl": 68.21545061863286,
      "glass": "E-FD8 class (supplier unconfirmed)",
      "role": "Positive front element, G1 on its own; its image-side surface is the converter's one asphere."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.8042,
      "vd": 46.5,
      "indexReference": "d",
      "fl": -15.165531076359029,
      "glass": "TAF3D class (supplier unconfirmed)",
      "role": "Negative front element of the cemented L2–L4 triplet that opens G2.",
      "cemented": "T1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.5927,
      "vd": 35.45,
      "indexReference": "d",
      "fl": 15.010270704635321,
      "glass": "FF5 class (supplier unconfirmed)",
      "role": "Positive middle element of the cemented L2–L4 triplet in G2.",
      "cemented": "T1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.83481,
      "vd": 42.71,
      "indexReference": "d",
      "fl": -18.30089850410351,
      "glass": "TAFD5G / H-ZLaF55C class (supplier unconfirmed)",
      "role": "Negative rear element of the cemented L2–L4 triplet in G2.",
      "cemented": "T1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.6727,
      "vd": 32.17,
      "indexReference": "d",
      "fl": 18.553378966129717,
      "glass": "E-FD5 class (supplier unconfirmed)",
      "role": "Positive front element of the cemented L5–L6 doublet in G2.",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 2.001,
      "vd": 29.13,
      "indexReference": "d",
      "fl": -18.005092819657214,
      "glass": "TAFD55-W class (supplier unconfirmed)",
      "role": "Negative rear element of the cemented L5–L6 doublet in G2; the highest index in the converter.",
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.95375,
      "vd": 32.32,
      "indexReference": "d",
      "fl": -59.89877403376006,
      "glass": "S-LAH98 class (supplier unconfirmed)",
      "role": "Air-spaced negative meniscus closing G2, convex toward the image."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Positive Meniscus",
      "nd": 1.51742,
      "vd": 52.15,
      "indexReference": "d",
      "fl": 46.45832606423273,
      "glass": "E-CF6 class (supplier unconfirmed)",
      "role": "Positive rear element, G3 on its own; nearly flat front and strongly convex rear."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 187.6524,
      "d": 2.0,
      "nd": 1.68893,
      "elemId": 1,
      "sd": 8.7
    },
    {
      "label": "2A",
      "R": -62.4251,
      "d": 3.4652,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.7
    },
    {
      "label": "3",
      "R": -49.9904,
      "d": 1.1,
      "nd": 1.8042,
      "elemId": 2,
      "sd": 9.4
    },
    {
      "label": "4",
      "R": 16.29,
      "d": 6.4091,
      "nd": 1.5927,
      "elemId": 3,
      "sd": 9.4
    },
    {
      "label": "5",
      "R": -16.732,
      "d": 1.0,
      "nd": 1.83481,
      "elemId": 4,
      "sd": 9.4
    },
    {
      "label": "6",
      "R": 180.5625,
      "d": 0.44,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.4
    },
    {
      "label": "7",
      "R": 50.0,
      "d": 6.224,
      "nd": 1.6727,
      "elemId": 5,
      "sd": 11.2
    },
    {
      "label": "8",
      "R": -15.8,
      "d": 1.2,
      "nd": 2.001,
      "elemId": 6,
      "sd": 11.2
    },
    {
      "label": "9",
      "R": -132.9605,
      "d": 6.3136,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.2
    },
    {
      "label": "10",
      "R": -39.8752,
      "d": 1.4,
      "nd": 1.95375,
      "elemId": 7,
      "sd": 16
    },
    {
      "label": "11",
      "R": -134.2965,
      "d": 0.8961,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16
    },
    {
      "label": "12",
      "R": -450.0,
      "d": 10.44,
      "nd": 1.51742,
      "elemId": 8,
      "sd": 18.5
    },
    {
      "label": "13",
      "R": -23.0,
      "d": 12.9482,
      "nd": 1.0,
      "elemId": 0,
      "sd": 18.5
    }
  ],
  "asph": {
    "2A": {
      "K": 0.13,
      "A4": -7.9052e-06,
      "A6": 3.13613e-10,
      "A8": 1.60328e-11,
      "A10": 0,
      "A12": 0,
      "A14": 0
    }
  },
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "2A"
    },
    {
      "text": "G2",
      "fromSurface": "3",
      "toSurface": "11"
    },
    {
      "text": "G3",
      "fromSurface": "12",
      "toSurface": "13"
    }
  ],
  "doublets": [
    {
      "text": "T1",
      "fromSurface": "3",
      "toSurface": "6"
    },
    {
      "text": "D1",
      "fromSurface": "7",
      "toSurface": "9"
    }
  ],
  "masterImageDistanceMm": 26.000006751054855
} satisfies TeleconverterDataInput;

export default TELECONVERTER_DATA;
