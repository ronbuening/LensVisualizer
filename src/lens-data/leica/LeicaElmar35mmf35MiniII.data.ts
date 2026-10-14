import type { LensDataInput } from "../../types/optics.js";

/**
 * LEICA ELMAR 35mm f/3.5 (Leica Mini II)
 * US 5,321,555 A (Leica Camera GmbH), the patent's only numerical example. It is unnumbered:
 * Fig. 1 and claim 2. Four elements in three groups, all spherical. Indices and Abbe numbers
 * are the patent's e-line (546 nm) values, stored with indexReference "e". No scaling.
 *
 * Source erratum, surface 3 radius. The table prints R3 = 19.1519, in the US print and in
 * EP 0 537 469 B1 alike. As printed, the table traces to f = 34.5026 mm against the stated
 * 33.6323 mm. R3 = 19.635 reproduces the stated focal length (33.6326 mm), the printed last
 * gap (paraxial focus 24.5161 mm behind the stop against the printed 24.5165 mm) and the stated
 * pupil magnification (0.7289 against 0.7290) together, and the patent's distortion and
 * field-curvature plots (Figs. 2A, 2D) fit it and not the printed value. The printed decimals
 * repeat those of the row above (39.1519). The fourth decimal of 19.635 is inferred from the
 * stated focal length (within 0.0005); no publication prints it. See sourceErrata and the
 * audit log.
 *
 * Every other radius, thickness and index is as printed, including d8 = 24.5165 mm from the
 * stop to the image. The summary line's back focus S' = 26.7165 differs from d7 + d8 = 25.7165
 * by exactly 1.0000 and is read as a digit slip in the summary; the file keeps the printed gaps.
 *
 * Semi-diameters are not published. They are estimated from Fig. 1, scaled from its vertex
 * spacing, and floor-checked against the real axial f/3.5 ray. Fig. 1 draws the rear face of
 * the cemented pair (surface 3) polished only to about 4.0 mm, level with the rim of L3, and
 * chamfered from there back to the 6.6 mm rim. Surface 3 therefore carries 4.05 mm while
 * surfaces 1 and 2 keep 6.6 mm; the section draws that chamfer as a straight edge from the
 * cemented rim, without the short cylindrical land Fig. 1 gives L2. The European print of Fig. 1
 * (EP 0 537 469 B1) is drawn to scale, every vertex spacing within 0.04 mm of the table, and agrees:
 * 6.6 mm for the front pair, 4.05 mm for L3 and surface 3 polished to about 4.1 mm. Both prints
 * draw L4 at 3.85 to 3.87 mm; both faces store 3.9 mm, inside the drawing uncertainty. The stop
 * radius is the height of the real axial f/3.5 marginal ray at the stop plane, not a published size.
 * The camera brochure lists a fixed UVa protective filter. It is not in the patent and is not
 * modeled.
 * Focus: estimated unit focusing to the brochure's 0.65 m endpoint, interpreted from the image
 * plane. All four elements and the rear iris translate toward the object; every internal gap stays
 * fixed. The 1.957535 mm extension is a paraxial conjugate solve of this prescription, not printed
 * travel or confirmed camera mechanics. Nine inverse-distance samples approximate the continuous
 * motion; no reconstructed finite state is marked published or certified for finite-focus MTF.
 * The patent names no glass type or supplier. L1 to L3 carry the catalog glass whose ne and νe
 * equal the print (OHARA S-LAH65V and S-TIH6 within 0.000003 and 0.01; HOYA E-FD2 within 0.00001 and 0.02) and trace
 * on that glass's dispersion curve anchored at the printed ne. L4 uses HOYA LAFL4 as a qualified
 * spectral proxy: its vendor curve gives ne 1.716614 / νe 43.056, against the printed 1.7167 / 42.89.
 * It is the only coordinate-compatible row in the reviewed catalogs, but not an exact melt match
 * or an identified production glass. All four curves are anchored at the patent's printed ne.
 */

const LENS_DATA = {
  "key": "leica-elmar-35mm-f35-mini-ii",
  "maker": "Leica",
  "name": "LEICA ELMAR 35mm f/3.5 (Leica Mini II)",
  "sourceErrata": [
    {
      "status": "corrected",
      "surface": "3",
      "field": "R",
      "printed": 19.1519,
      "applied": 19.635,
      "evidence": [
        "source-summary",
        "aberration-figure"
      ],
      "note": "The printed table traces to f = 34.5026 mm against the stated 33.6323 mm. R3 = 19.635 reproduces the stated focal length (33.6326 mm), the printed last gap (paraxial focus 24.5161 mm behind the stop against the printed 24.5165 mm) and the stated pupil magnification (0.7289 against 0.7290) together. The patent's distortion and field-curvature plots (Figs. 2A, 2D) fit the corrected value and not the printed one. The printed decimals repeat those of the row above (39.1519). The fourth decimal of the applied value is inferred from the stated focal length (within 0.0005); no publication prints it, and the US and EP prints carry the same 19.1519. Separately, the summary back focus 26.7165 differs from the table's d7 + d8 = 25.7165 by exactly 1.0000 and is read as a digit slip in the summary line; the file keeps the printed gaps."
    }
  ],
  "subtitle": "US 5,321,555 A, Fig. 1 / Claim 2 — qualified production correlation",
  "specs": [
    "4 ELEMENTS / 3 GROUPS",
    "DESIGN f = 33.63 mm",
    "DESIGN F/3.5",
    "ALL SPHERICAL",
    "ESTIMATED UNIT FOCUS TO 0.65 m"
  ],
  "focalLengthMarketing": 35,
  "focalLengthDesign": 33.6326,
  "apertureMarketing": 3.5,
  "apertureDesign": 3.5,
  "lensMounts": [
    "fixed-lens-camera"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "US 5,321,555 A",
  "patentAuthors": [
    "Lothar Koelsch",
    "Klaus-Dieter Schaefer"
  ],
  "patentAssignees": [
    "Leica Camera GmbH"
  ],
  "patentYear": 1994,
  "elementCount": 4,
  "groupCount": 3,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.808109,
      "vd": 46.34,
      "indexReference": "e",
      "fl": 18.21176023919409,
      "glass": "S-LAH65V (OHARA catalog equivalent; patent ne 1.808109 / νe 46.34; production supplier unspecified)",
      "role": "Positive meniscus front element of the cemented doublet; its front surface is the strongest positive surface in the lens.",
      "cemented": "D1"
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.81264,
      "vd": 25.23,
      "indexReference": "e",
      "fl": -50.831017,
      "glass": "S-TIH6 (OHARA catalog equivalent; patent ne 1.81264 / νe 25.23; production supplier unspecified)",
      "role": "Negative meniscus cemented behind L1, with nearly the same index and much higher dispersion; the patent uses the cemented surface to balance the lateral color of the last surface.",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.65223,
      "vd": 33.57,
      "indexReference": "e",
      "fl": -12.67567822780607,
      "glass": "E-FD2 (HOYA catalog equivalent, catalog ne 1.65222 / νe 33.58; patent ne 1.65223 / νe 33.57; production supplier unspecified)",
      "role": "Biconcave negative middle element of the triplet; it offsets the field curvature of the two positive groups."
    },
    {
      "id": 4,
      "name": "L4",
      "diagramLabel": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.7167,
      "vd": 42.89,
      "indexReference": "e",
      "fl": 16.046751890986677,
      "glass": "LAFL4 (HOYA spectral proxy; catalog ne 1.716614 / νe 43.056 versus patent ne 1.7167 / νe 42.89; original type and production supplier unconfirmed)",
      "role": "Biconvex positive rear element, 1.2 mm ahead of the rear aperture stop."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 11.0297,
      "d": 2.73,
      "nd": 1.808109,
      "elemId": 1,
      "sd": 6.6
    },
    {
      "label": "2",
      "R": 39.1519,
      "d": 2.0219,
      "nd": 1.81264,
      "elemId": 2,
      "sd": 6.6
    },
    {
      "label": "3",
      "R": 19.635, // patent prints 19.1519, repeating the decimals of the row above; corrected, see header and sourceErrata
      "d": 0.7,
      "nd": 1,
      "elemId": 0,
      "sd": 4.05 // Fig. 1 draws this face polished to about 4.0 mm, then chamfered back to the 6.6 mm rim
    },
    {
      "label": "4",
      "R": -40.8013,
      "d": 1.0051,
      "nd": 1.65223,
      "elemId": 3,
      "sd": 4.05
    },
    {
      "label": "5",
      "R": 10.4692,
      "d": 0.8,
      "nd": 1,
      "elemId": 0,
      "sd": 4.05
    },
    {
      "label": "6",
      "R": 20.7116,
      "d": 3.543,
      "nd": 1.7167,
      "elemId": 4,
      "sd": 3.9
    },
    {
      "label": "7",
      "R": -24.0136,
      "d": 1.2,
      "nd": 1,
      "elemId": 0,
      "sd": 3.9
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 24.5165, // printed d8, stop to image
      "nd": 1,
      "elemId": 0,
      "sd": 3.544664 // height of the real axial f/3.5 marginal ray at the stop
    }
  ],
  "asph": {},
  "focusPositions": [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
  "var": {
    "STO": [24.5165, 24.736655, 24.963363, 25.196589, 25.436687, 25.684044, 25.939077, 26.202241, 26.474035]
  },
  "varLabels": [["STO", "Stop to image"]],
  "groups": [
    {
      "text": "G1 (+)",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "G2 (-)",
      "fromSurface": "4",
      "toSurface": "5"
    },
    {
      "text": "G3 (+)",
      "fromSurface": "6",
      "toSurface": "7"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "1",
      "toSurface": "3"
    }
  ],
  "closeFocusM": 0.65,
  "focusDescription": "ESTIMATED unit focusing. The complete four-element lens and rear iris move 1.958 mm toward the object at the brochure’s 0.65 m limit, interpreted from the image plane. Travel is calculated from this prescription; the patent prints infinity only and the actual camera mechanism is unconfirmed. Internal gaps stay fixed; intermediate positions interpolate nine calculated inverse-distance samples.",
  "nominalFno": 3.5,
  "fstopSeries": [
    3.5,
    4,
    5.6,
    8,
    11,
    16
  ],
  "yScFill": 0.3
} satisfies LensDataInput;

export default LENS_DATA;
