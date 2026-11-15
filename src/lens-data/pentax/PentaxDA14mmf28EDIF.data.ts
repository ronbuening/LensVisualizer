import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 7,116,499 B2 (Jun Hirakawa, PENTAX Corporation), Embodiment 4 (Table 4, Fig. 10), associated with the
 * smc PENTAX-DA 14mm F2.8 ED [IF]. Ricoh's construction diagram matches the embodiment element by element: 12 elements
 * in 11 groups, all spherical, with G1 fixed and G2 + G3 moving to focus. This is a patent design, not a confirmed
 * factory prescription.
 *
 * Scale: none. The patent's millimetre values are used as printed; f = 14.38 mm is not rescaled to the retail 14 mm.
 * Printed: R, d, d-line n and Abbe number for 23 surfaces, F/2.9–3.0, f = 14.38–14.80, fB = 36.98–39.25 and the
 * stop position, 2.0 mm behind surface 17 (the printed d17 of 6.35 mm is split into 2.0 mm before the stop and 4.35 mm
 * after it). There are no aspheric surfaces and no cover glass or filter. The patent names no glass supplier and
 * prints no partial dispersion; the glass labels are catalog equivalents matched on nd and νd.
 * Image plane: the last gap is the printed back focus, 36.98 mm at infinity; the paraxial back focus computes to
 * 36.978 mm and is not applied. The image lies 111.91 mm behind S1 in both focus states.
 * Focus: Table 4 prints both states. G2 and G3 move 2.27 mm toward the object with the stop while G1 stays fixed:
 * D8 4.43 → 2.16 mm and BF 36.98 → 39.25 mm. The near state focuses at about 0.200 m object to image (m −0.137);
 * the retail minimum focus is 0.17 m (0.19×). Table 4 gives F/3.0 for the near state, while Figs. 12A–B are labelled
 * F3.7; the difference is unresolved.
 * Stop: the patent tabulates the stop position but not its diameter; the stop radius follows F/N.
 * Semi-diameters are inferred, none is printed. S1/S2 at 30 mm sit about 15 % above the 26.2 mm first-order height of
 * the edge-of-field beam; the others narrow toward the rear as in Fig. 10 and the maker's section, mostly 4–7 % above
 * Fig. 10's heights (L1 28.2 mm at 13.99 px/mm) and close to Ricoh's (L1 29.5 mm). The S4 cap ends at 17 mm, since
 * 22.8 mm would exceed its 21.25 mm radius, and the S6 cap at 13.95 mm, since 17.4 mm would exceed the rim-slope
 * limit; at 14 mm the S6 and S7 sags would fill 0.904 of their 7.9 mm gap, above the 0.9 default. Both drawings end
 * these caps with a flat land, so S4 and S6 carry rimExtensionSd out to their front faces (22.8 and 17.0 mm). L4 is
 * drawn square: S8 matches S7 at 13.95 mm. S13 has a 2.5 mm rim cut (cut radius 6.57 mm): Fig. 10 ends that cap at
 * 0.78 of the rim, and 6.57 mm is the closest radius that clears the wide-open beams. These rims are not measured
 * factory apertures.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-smc-da-14mm-f28-ed-if",
  maker: "Pentax",
  name: "PENTAX DA 14mm f/2.8 ED [IF]",
  subtitle: "US 7,116,499 B2, Embodiment 4 — probable production correlation",
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    specs: ["12 ELEMENTS / 11 GROUPS", "DESIGN f = 14.38 mm", "DESIGN F/2.9", "ALL SPHERICAL"],
    elementCount: 12,
    groupCount: 11,
    focalLengthMm: {
      marketing: 14,
      design: 14.38,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.9,
    },
    closeFocusM: {
      marketing: 0.17,
    },
  },
  source: {
    patentNumber: "US 7,116,499 B2",
    example: {
      label: "Embodiment 4",
      id: "4",
    },
    patentYear: 2006,
    authors: ["Jun Hirakawa"],
    assignees: ["Pentax Corporation"],
    errata: [
      {
        status: "unresolved",
        note: "The near-focus F-number is printed as F3.0 in Table 4 but F3.7 on the Fig. 12A/B aberration plots. The gap is systematic across the patent (Figs. 3A and 6A print F4.3 against 3.6, Fig. 9A F3.7 against 3.0), so it is a labelling convention rather than a misprint; the model keeps the table geometry and does not certify close-focus performance.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: 432.4666795439312,
      glass: "S-LAL14 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Weak positive front meniscus of the fixed first group G1, convex to the object; Embodiment 4 adds it ahead of the two negative menisci.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.7,
      indexReference: "d",
      focalLengthMm: -50.21655297234499,
      glass: "S-LAL18 (OHARA catalog equivalent; production supplier unspecified)",
      role: "First negative meniscus of G1, convex to the object; the maker's diagram marks it as high-index, low-dispersion glass, not an anomalous-dispersion type.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      focalLengthMm: -40.679888998051,
      glass: "S-LAH51 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Second negative meniscus of G1, convex to the object; shares the strong negative power of the retrofocus front.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: 69.81876147361649,
      glass: "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      role: "High-index, high-dispersion positive meniscus closing G1, convex to the image; gathers the diverging beam from the two menisci and corrects their astigmatism and lateral colour.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 27.89967153228327,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconvex crown front member of the cemented doublet that opens the moving negative group G2.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.691,
      vd: 54.8,
      indexReference: "d",
      focalLengthMm: -129.28254445497404,
      glass: "S-LAL9 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus rear member of the G2 cemented doublet, concave to the object.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      focalLengthMm: -17.253043983793376,
      glass: "S-LAH65V (OHARA catalog equivalent; production supplier unspecified)",
      role: "Negative meniscus closing G2, convex to the object; the strongest negative element in the lens.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 35.154522537860814,
      glass: "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint positive meniscus opening the positive group G3; nearly plano-convex, convex to the object.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 184.20145175499562,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Weak positive meniscus just ahead of the stop, convex to the image.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.7,
      indexReference: "d",
      focalLengthMm: -28.15380955503919,
      glass: "S-TIH11 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Dense-flint biconcave negative element just behind the stop; the only negative element of G3.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 26.77290211259693,
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Ricoh's construction diagram marks this position as the lens's ED element; the patent prints no partial dispersion, and FCD1 is a catalog equivalent, not a production-supplier claim.",
      role: "ED biconvex positive element behind the stop; with L12 it forms the low-dispersion rear pair that controls lateral colour.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 45.91449202357047,
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      role: "Biconvex crown last element; second member of the low-dispersion rear pair.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 275.0,
      d: 3.62,
      sd: 30,
      medium: 1,
    },
    {
      label: "2",
      R: 3128.8,
      d: 0.1,
      sd: 30,
    },
    {
      label: "3",
      R: 52.647,
      d: 2.0,
      sd: 22.8,
      medium: 2,
    },
    {
      label: "4",
      R: 21.25,
      d: 5.67,
      sd: 17.0,
      rimExtensionSd: 22.8,
    },
    {
      label: "5",
      R: 42.904,
      d: 1.7,
      sd: 17.0,
      medium: 3,
    },
    {
      label: "6",
      R: 18.0,
      d: 7.9,
      sd: 13.95,
      rimExtensionSd: 17.0,
    },
    {
      label: "7",
      R: -213.954,
      d: 4.25,
      sd: 13.95,
      medium: 4,
    },
    {
      label: "8",
      R: -46.738,
      sd: 13.95,
    },
    {
      label: "9",
      R: 42.227,
      d: 8.11,
      sd: 12,
      medium: 5,
    },
    {
      label: "10",
      R: -18.8,
      d: 2.0,
      sd: 12,
      medium: 6,
    },
    {
      label: "11",
      R: -24.846,
      d: 0.11,
      sd: 12,
    },
    {
      label: "12",
      R: 36.085,
      d: 1.0,
      sd: 7.8,
      medium: 7,
    },
    {
      label: "13",
      R: 9.896,
      d: 2.57,
      sd: 7.8,
      rimCutDepthMm: 2.5,
    },
    {
      label: "14",
      R: 27.972,
      d: 4.0,
      sd: 6.3,
      medium: 8,
    },
    {
      label: "15",
      R: 2221.231,
      d: 1.52,
      sd: 6.3,
    },
    {
      label: "16",
      R: -15.35,
      d: 5.97,
      sd: 6,
      medium: 9,
    },
    {
      label: "17",
      R: -14.78,
      d: 2.0,
      sd: 6,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.35,
    },
    {
      label: "18",
      R: -42.3,
      d: 5.0,
      sd: 6.9,
      medium: 10,
    },
    {
      label: "19",
      R: 48.651,
      d: 0.32,
      sd: 6.9,
    },
    {
      label: "20",
      R: 96.9,
      d: 4.62,
      sd: 8.1,
      medium: 11,
    },
    {
      label: "21",
      R: -15.18,
      d: 0.1,
      sd: 8.1,
    },
    {
      label: "22",
      R: 83.62,
      d: 3.59,
      sd: 8.4,
      medium: 12,
    },
    {
      label: "23",
      R: -30.134,
      sd: 8.4,
    },
  ],
  focus: {
    closeFocusM: 0.2,
    description:
      "PUBLISHED inner focus: G2 and G3 move together 2.27 mm toward the object, carrying the stop, while G1 stays fixed. D8 closes from 4.43 to 2.16 mm and the back focus grows from 36.98 to 39.25 mm; both states are printed in Table 4. The patent gives the near state's magnification (−0.137) but not its distance; it is in focus at about 0.20 m object to image, while the production lens focuses to 0.17 m (0.19×). Table 4 gives F/3.0 for the near state, but its aberration plots are labelled F3.7; the difference is unresolved.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 88.1,
        distanceReference: "first-surface",
        sourceMagnification: "0.137",
        source: "US 7,116,499 B2, Embodiment 4 (PDF p. 11): prints “m = 0.000—−0.137” for the close-focus state whose gaps this keyframe carries, a magnification with no object distance. The object distance is solved from the prescription: it focuses the state on its image plane, where the paraxial magnification is 0.13736.",
      },
    ],
    published: [1],
  },
  gaps: {
    "8": { label: "D8", values: [[4.43, 2.16]] },
    "23": { label: "BF", values: [[36.98, 39.25]] },
  },
  aperture: {
    nominalFNumber: 2.9,
    fStops: [2.9, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 90.2,
  },
  layout: {
    yScFill: 0.78,
  },
  groups: [
    {
      text: "G1",
      fromSurface: "1",
      toSurface: "8",
    },
    {
      text: "G2",
      fromSurface: "9",
      toSurface: "13",
    },
    {
      text: "G3",
      fromSurface: "14",
      toSurface: "23",
    },
  ],
  doublets: [{ text: "D1", fromSurface: "9", toSurface: "11" }],
} satisfies LensDataV2Input;

export default LENS_DATA;
