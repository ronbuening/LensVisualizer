import type { TeleconverterDataInput } from "../../types/teleconverter.js";

/**
 * WO 2017/134928 A1, Example 6 (Tables 13-14, Figure 7): patent surfaces 43-53, relabelled 1-11.
 * Detachable converter only: six elements in five air-separated groups, which the patent divides into
 * three power groups G1 (L1), G2 (L2-L5) and G3 (L6). The production correlation is supported by Sony's
 * construction drawing and is not manufacturer-confirmed. The converter has no stop and no moving group;
 * the host lens supplies aperture, focus and zoom.
 *
 * ASPHERE EQUATION: paragraph 0090 prints c^2*y^2 in the sag numerator, while paragraph 0091 defines c as
 * the paraxial curvature 1/R. The surface is traced with the standard c*y^2 numerator, which keeps the
 * tabulated signed vertex radius. Read literally, the equation gives the patent's master lens focal lengths
 * of 79.30 / 188.02 mm against the stated 72.08 / 194.05 mm; the standard form gives 72.08 / 194.08 mm.
 * All radii, distances, nd/vd, K and A6 to A10 are as printed.
 *
 * SOURCE ERRATUM: A4 of surface 3A (patent surface 45) is stored as -2.06e-6; paragraph 0165 prints
 * +2.0600E-06. Two kinds of evidence from the patent itself reject the printed sign and accept the reversed
 * one, both traced through the patent's master lens with its 2.5 mm cover plate.
 * Stated image height (Table 14: 21.63 mm at half angles of 12.34 and 4.58 degrees): the chief ray lands at
 * 21.326 / 21.332 mm as printed and at 21.631 / 21.649 mm corrected; the angles that reach 21.63 mm are
 * 12.53 / 4.65 degrees as printed and 12.34 / 4.58 degrees corrected.
 * Aberration plots (Figure 15): as printed the meridional focus lies 2.2 mm from the paraxial plane at the
 * corner, where the plotted curves stay within 0.11 mm; corrected, all 29 field-curve readings agree within
 * 0.014 mm. K = -1.15, which also restores the image height, leaves 0.24 to 0.28 mm and is ruled out. The
 * master lens and Example 7 reproduce their own plots (Figures 9 and 16) by the same trace.
 * The patent has no published correction. The audit log has the readings and the variants tried.
 *
 * GEOMETRY: master back focus in air = 24.9600 + 2.5/1.5168 + 1.0 = 27.6082067511 mm.
 * Less the printed master-to-converter gap of 1.6082 mm, the virtual object lies 26.0000067511 mm behind
 * the first vertex (masterImageDistanceMm).
 * The last d = 12.9982 mm is the printed back focus in air; the master's cover plate is not added again.
 * On a host lens the composer keeps the host's rear plates and splits this last gap around them.
 * Table 14's total length, labelled "in air", equals the physical total with one cover plate (233.23 mm;
 * the air-equivalent total is 232.3765 mm), and its row labelled 2ω holds half angles. No value in this
 * file is adjusted to match either.
 *
 * SEMI-DIAMETERS: the patent publishes no clear apertures. The rims are estimated from Figure 7, which
 * measures 0.0970 mm per pixel at 300 dpi and draws L1 to L6 at 13.0, 13.9, 14.6, 16.1, 17.9 and 19.4 mm;
 * every stored rim is within 5% of its drawn height. L3 stops at 14.4 mm, short of its 14.75 mm knife edge,
 * and L4's rear face runs on to 16 mm. Figure 7 draws L2 and L5 square-cut and ends their concave fronts at
 * flat annuli (curves end near 12.4 and 15.0 mm). The renderer has no flat annulus, so both faces of each
 * keep the drawn rim height and their front edges stand 1.0 and 1.4 mm ahead of the drawn annulus planes.
 * The rims were checked by ray tracing and edge geometry on the patent's own master lens and on the four
 * declared catalog hosts: an f/2.8 axial cone needs at most 4.7 mm (surface 1) and the corner chief ray
 * reaches at most 17.2 mm at surface 11. No gap-sag or rim-slope override is used.
 *
 * GLASS: nd/vd are patent values. Labels name coordinate-equal catalog glasses, which supply the
 * dispersion curve; they are not identified production melts. L1 and L3 have spectrally different alternatives.
 * The patent's C- and g-line curves have not been reproduced with these glasses; the d-line field curves
 * of Figure 15 are, within 0.014 mm. Fixed source planes are retained.
 */

const TELECONVERTER_DATA = {
  "key": "sony-14x-teleconverter-sel14tc",
  "maker": "Sony",
  "name": "SONY 1.4x TELECONVERTER SEL14TC",
  "subtitle": "WO 2017/134928 A1, Example 6 — production correlation",
  "specs": [
    "6 ELEMENTS / 5 GROUPS",
    "1.4× REAR CONVERTER",
    "1 ASPHERICAL SURFACE / 1 ELEMENT"
  ],
  "magnification": 1.4,
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
  "elementCount": 6,
  "groupCount": 5,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.80809,
      "vd": 22.76,
      "indexReference": "d",
      "fl": 61.465137272,
      "glass": "FD225 (catalog-equivalent; actual supplier unconfirmed)",
      "role": "Front positive meniscus, convex to the image; forms the converter's positive first group G1 on its own"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative (1× Asph)",
      "nd": 1.85135,
      "vd": 40.1,
      "indexReference": "d",
      "fl": -22.102970991,
      "glass": "M-TAFD305 (catalog-equivalent; actual supplier unconfirmed)",
      "role": "Biconcave front element of the converter's negative second group G2; aspherical on its object side"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.60342,
      "vd": 38.01,
      "indexReference": "d",
      "fl": 24.644286226,
      "glass": "E-F5 (catalog-equivalent; actual supplier unconfirmed)",
      "role": "Biconvex positive of the cemented doublet in the converter's G2, cemented to L4",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.881,
      "vd": 40.14,
      "indexReference": "d",
      "fl": -48.28488361,
      "glass": "TAFD33 (catalog-equivalent; actual supplier unconfirmed)",
      "role": "Negative meniscus of the cemented doublet in the converter's G2, convex to the image and cemented to L3",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 2.001,
      "vd": 29.13,
      "indexReference": "d",
      "fl": -33.554324682,
      "glass": "TAFD55 (catalog-equivalent; actual supplier unconfirmed)",
      "role": "Air-spaced biconcave negative at the rear of the converter's G2; its highest-index glass"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.57135,
      "vd": 52.95,
      "indexReference": "d",
      "fl": 46.35163947,
      "glass": "S-BAL3 (catalog-equivalent; actual supplier unconfirmed)",
      "role": "Biconvex positive forming the converter's positive third group G3 on its own; more strongly curved toward the image"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": -209.3701,
      "d": 3.1,
      "nd": 1.80809,
      "elemId": 1,
      "sd": 13.6
    },
    {
      "label": "2",
      "R": -40.4112,
      "d": 4.33,
      "nd": 1,
      "elemId": 0,
      "sd": 13.6
    },
    {
      "label": "3A",
      "R": -24.5634,
      "d": 1.5,
      "nd": 1.85135,
      "elemId": 2,
      "sd": 14.2
    },
    {
      "label": "4",
      "R": 82.7002,
      "d": 0.3,
      "nd": 1,
      "elemId": 0,
      "sd": 14.2
    },
    {
      "label": "5",
      "R": 60.4995,
      "d": 9.1,
      "nd": 1.60342,
      "elemId": 3,
      "sd": 14.4
    },
    {
      "label": "6",
      "R": -18.6013,
      "d": 1.4,
      "nd": 1.881,
      "elemId": 4,
      "sd": 14.4
    },
    {
      "label": "7",
      "R": -34.2211,
      "d": 0.5,
      "nd": 1,
      "elemId": 0,
      "sd": 16
    },
    {
      "label": "8",
      "R": -34.0899,
      "d": 1.5,
      "nd": 2.001,
      "elemId": 5,
      "sd": 17.8
    },
    {
      "label": "9",
      "R": 2331.0,
      "d": 0.3,
      "nd": 1,
      "elemId": 0,
      "sd": 17.8
    },
    {
      "label": "10",
      "R": 157.3225,
      "d": 8.2,
      "nd": 1.57135,
      "elemId": 6,
      "sd": 19
    },
    {
      "label": "11",
      "R": -31.2399,
      "d": 12.9982,
      "nd": 1,
      "elemId": 0,
      "sd": 19
    }
  ],
  "asph": {
    "3A": {
      "K": -1.65,
      "A4": -2.06e-06, // patent prints +2.0600E-06; sign corrected from the stated image height and Figure 15 (header)
      "A6": -2.012e-09,
      "A8": 5.132e-11,
      "A10": -7.89e-14,
      "A12": 0,
      "A14": 0
    }
  },
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "2"
    },
    {
      "text": "G2",
      "fromSurface": "3A",
      "toSurface": "9"
    },
    {
      "text": "G3",
      "fromSurface": "10",
      "toSurface": "11"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "5",
      "toSurface": "7"
    }
  ],
  "masterImageDistanceMm": 26.000006751054855
} satisfies TeleconverterDataInput;

export default TELECONVERTER_DATA;
