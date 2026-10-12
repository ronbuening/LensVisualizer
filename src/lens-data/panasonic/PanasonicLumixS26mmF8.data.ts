import type { LensDataInput } from "../../types/optics.js";

/**
 * Panasonic LUMIX S 26mm F8 (S-R26) — US 2025/0334777 A1, Example 4.
 * Unscaled patent design; Panasonic has not confirmed it as the production prescription.
 * Five spherical air-spaced lenses, no aspherical surfaces. Every R, d, nd and vd is as printed.
 * The patent's parallel plate P (surfaces 12-13) is traced through rearPlates and is not drawn
 * or counted as a lens. The production lens's front protective glass is not in the patent and
 * is not modeled. Dummy surface 14 is dropped: the plate-to-image gap is 1.00000 + BF =
 * 0.94913 mm with the printed BF of -0.05087 mm, so the image plane S stays where the patent
 * puts it.
 *
 * Table 4A's "effective diameter" is a radial ray height (paragraph 0170), so its values are
 * used as sd without halving. They are the patent's ray envelopes, not measured mechanical
 * apertures. P has no printed rim and none is given here.
 * NOTE ON SEMI-DIAMETERS: the stop and seven faces (surfaces 3, 4, 5, 7, 8, 9 and 11) carry
 * the printed Table 4A radii. Surfaces 2, 6 and 10 (printed 2.001, 5.250 and 10.031) are
 * raised to the printed radius of their partner face (2.595, 5.813 and 10.798) because
 * Fig. 4A draws L1, L3 and L5 as square-cut blocks. The printed values are ray heights, so
 * the raise changes no traced ray at either focus state. Fig. 4A (infinity panel, 26.52 px/mm)
 * draws each element's edge 0.3-0.5 mm outside its larger printed radius and the stepped L2
 * and L4 front curve ends 0.4 mm outside theirs; that uniform mechanical margin is not added.
 * L2 and L4 keep two radii, so the model draws a taper where the figure draws a flat step.
 * The printed stop radius is 1.552 mm. nominalFno is the computed EFL / (2 * 1.552) so the
 * f-number-derived iris reproduces that radius. The near-state F-number 9.00883 is the working
 * value at the close conjugate, not a change of iris. The single fstopSeries value and maxFstop
 * keep the aperture fixed.
 * projection declares the printed half-field of 41.196 deg (full field 82.392 deg) because the
 * paraxial chief-ray estimate undercounts this design, which has about -8.7 % distortion there.
 *
 * Focus: PUBLISHED, two states only; d11 goes from 12.5000 to 16.7736 mm.
 * finiteConjugates measures the object distance from patent surface 1 (the stop), not from
 * the first glass vertex or the image plane. Positions and distance labels between the two
 * states are interpolated estimates.
 * imageCircleMm is twice the printed infinity image height of 19.7600 mm (the near-state
 * height is 19.9200 mm); it is not a measured production image circle.
 * The patent's 24.7165 mm and about 0.200 m near limit differ from the marketed 26 mm and
 * 0.25 m; nothing is scaled to match. focalLengthDesign is the printed 24.7165 mm (computed
 * EFL 24.71644 mm) and closeFocusM is the near-state object-to-image distance of 199.99863 mm
 * rounded to 0.2 m.
 *
 * Catalog glass names match the printed nd/vd; the actual supplier and melt are unknown.
 * HOYA's AGF file lists FDS18 at nd 1.94595 and its Excel catalog at 1.94594; the patent's
 * nd is kept. L4 (1.69513 / 24.0) has no match in the OHARA, HOYA, Schott, HIKARI, CDGM or
 * Sumita catalogs. The patent prints no nC, nF, ng or dPgF values and none are added.
 * L1 is tagged apd "inferred" from Panasonic's UED marking of the front element.
 */

const LENS_DATA = {
  "key": "panasonic-lumix-s-26mm-f8",
  "maker": "Panasonic",
  "name": "PANASONIC LUMIX S 26mm f/8",
  "subtitle": "US 2025/0334777 A1, Example 4 — design correlation",
  "specs": [
    "5 ELEMENTS / 5 GROUPS",
    "DESIGN f = 24.72 mm",
    "DESIGN F/7.96",
    "ALL SPHERICAL",
    "FIXED APERTURE"
  ],
  "focalLengthMarketing": 26,
  "focalLengthDesign": 24.7165,
  "apertureMarketing": 8,
  "apertureDesign": 7.9628,
  "lensMounts": [
    "l-mount"
  ],
  "imageFormat": "135-full-frame",
  "imageCircleMm": 39.52,
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 82.392,
    "maxTraceFieldDeg": 41.196
  },
  "patentNumber": "US 2025/0334777 A1",
  "patentAuthors": [
    "Yoshiaki Kurioka",
    "Kunio Dohno"
  ],
  "patentAssignees": [
    "Panasonic Intellectual Property Management Co., Ltd."
  ],
  "patentYear": 2025,
  "elementCount": 5,
  "groupCount": 5,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.437,
      "vd": 95.1,
      "fl": 36.86981539819683,
      "glass": "FCD100 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Panasonic's construction diagram marks the front element as the lens's one UED element, and the patent's nd 1.437 / νd 95.1 fits an FCD100-class glass (catalog ΔPgF ≈ +0.050); anomalous partial dispersion is inferred from that, not stated by the patent.",
      "role": "Front positive meniscus directly behind the stop, convex to the object; the UED element."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.94595,
      "vd": 18.0,
      "fl": -55.08860301703425,
      "glass": "FDS18 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "role": "Negative meniscus, concave to the object, closely following L1."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.816,
      "vd": 46.6,
      "fl": 13.726015727472195,
      "glass": "TAF5 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "role": "Positive meniscus, convex to the image."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.69513,
      "vd": 24.0,
      "fl": -12.11949164706167,
      "glass": "Unmatched (patent nd=1.69513, vd=24.0; no match in six supplier catalogs)",
      "role": "Negative meniscus, concave to the object."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 2.001,
      "vd": 29.1,
      "fl": 32.16533008332188,
      "glass": "TAFD55 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "role": "Rear positive meniscus, convex to the image; the largest element."
    }
  ],
  "surfaces": [
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 0.33,
      "nd": 1,
      "elemId": 0,
      "sd": 1.552
    },
    {
      "label": "2",
      "R": 11.6245,
      "d": 1.4881,
      "nd": 1.437,
      "elemId": 1,
      "sd": 2.595
    },
    {
      "label": "3",
      "R": 40.1113,
      "d": 2.4446,
      "nd": 1,
      "elemId": 0,
      "sd": 2.595
    },
    {
      "label": "4",
      "R": -4.7731,
      "d": 1.0,
      "nd": 1.94595,
      "elemId": 2,
      "sd": 3.336
    },
    {
      "label": "5",
      "R": -5.7895,
      "d": 0.3,
      "nd": 1,
      "elemId": 0,
      "sd": 3.987
    },
    {
      "label": "6",
      "R": -67.4676,
      "d": 3.13,
      "nd": 1.816,
      "elemId": 3,
      "sd": 5.813
    },
    {
      "label": "7",
      "R": -9.806,
      "d": 4.0277,
      "nd": 1,
      "elemId": 0,
      "sd": 5.813
    },
    {
      "label": "8",
      "R": -7.3627,
      "d": 1.0,
      "nd": 1.69513,
      "elemId": 4,
      "sd": 6.205
    },
    {
      "label": "9",
      "R": -61.6643,
      "d": 1.2937,
      "nd": 1,
      "elemId": 0,
      "sd": 8.586
    },
    {
      "label": "10",
      "R": -59.7683,
      "d": 3.4358,
      "nd": 2.001,
      "elemId": 5,
      "sd": 10.798
    },
    {
      "label": "11",
      "R": -21.5268,
      "d": 12.5,
      "nd": 1,
      "elemId": 0,
      "sd": 10.798
    }
  ],
  "rearPlates": [
    {
      "label": "P",
      "thicknessMm": 2.1,
      "nd": 1.5168,
      "vd": 64.2,
      "glass": "BSC7 (HOYA; coordinate equivalent; supplier unconfirmed)",
      "gapAfterMm": 0.94913,
      "source": "US 2025/0334777 A1 Example 4, Table 4A/C, PDF page 23; P is prescribed camera-side glass. Gap is 1.00000 + signed BF (-0.05087)."
    }
  ],
  "asph": {},
  "var": {
    "11": [
      12.5,
      16.7736
    ]
  },
  "varLabels": [
    [
      "11",
      "L5–P"
    ]
  ],
  "publishedStations": {
    "focus": [
      1
    ]
  },
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 161.726,
      "distanceReference": "first-surface",
      "source": "US 2025/0334777 A1 Example 4 Table 4C, PDF page 23: d0 from object to source surface 1 (STO); d11=16.7736 mm; original P and S retained."
    }
  ],
  "groups": [
    {
      "text": "UNIT FOCUS → OBJ",
      "fromSurface": "STO",
      "toSurface": "11"
    }
  ],
  "doublets": [],
  "closeFocusM": 0.2,
  "focusDescription": "PUBLISHED: the aperture stop and all five elements move together 4.2736 mm toward the object between infinity and the near state, while the cover glass and image plane stay fixed. The patent prints both states (near object 161.726 mm in front of the stop); positions and distance labels between them are interpolated. The patent's near state is 0.20 m from object to image and its focal length is 24.72 mm, against the marketed 0.25 m minimum focus and 26 mm.",
  "nominalFno": 7.962770929000252,
  "maxFstop": 7.962770929000252,
  "fstopSeries": [
    7.962770929000252
  ],
  "yScFill": 0.32
} satisfies LensDataInput;

export default LENS_DATA;
