import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP S60-181715 A (Sigma; inventor Takehisa Koyama), Example 1, correlated with the Sigma NON VIGNETTING 28mm F2.8
 * of 1985, later sold as the H.L. WIDE 28mm F2.8. The correlation rests on maker, date, the 8-element / 7-group
 * layout, F2.8, a field of at least 75° and the patent's stated aim of at least 95 % aperture efficiency at every
 * field angle. Sigma published no optical section, and Examples 1 and 3 fit the catalog data equally well.
 * The table (printed page 75) gives r, d, n and ν only; n and ν are d-line (printed page 74). No focal length, units,
 * back focus or object distance is printed: the lengths are read as millimetres at infinity, where the table traces
 * to f = 28.34 mm. The last gap, 38.851 mm, is the paraxial back focus of the printed table, not a printed value.
 * Row 9 (r = ∞, 2.00 mm on either side) is the aperture stop, 28.60 mm behind surface 1; the engine sets its radius
 * from F2.8. Semi-diameters are not printed. They are read from Fig. 1 (printed page 76) at its axial scale of
 * 15.73 px/mm at the 347 dpi scan, set by the vertex spacing, and checked by real-ray trace. Surfaces 4 and 5 stop at
 * 12.3 mm, where L2 and L3 nearly meet as drawn; surface 6 ends at its drawn 10.9 mm with a flat land out to 12.3 mm.
 * The cemented doublet is drawn square at 10.0 mm, and surface 12 ends at 9.5 mm where L6 meets L7; that needs
 * checks.gapSagFrac 0.95, since the 12/13 faces close 0.943 of their 2.11 mm gap there without crossing (the 4/5
 * faces close 0.925 of their 4.56 mm gap at 12.3 mm). Fig. 1 also draws L6 with an outer flange (11.5–12.1 mm)
 * beyond both optical faces; it is not drawn here, because a land on surface 12 would cross L7's front face.
 * Glass labels are HOYA catalog rows that reproduce the printed nd/νd; Sigma's supplier is not known.
 * Infinity focus only; Sigma's 0.22 m minimum focus distance is catalog data, not modeled focus travel.
 */
const LENS_DATA = {
  schema: 2,
  key: "sigma-hl-wide-28mm-f28",
  maker: "Sigma",
  name: "SIGMA H.L. WIDE 28mm f/2.8",
  subtitle: "JP S60-181715 A, Example 1 — design-goal and construction correlation",
  visible: true,
  layout: {
    yScFill: 0.35,
  },
  catalog: {
    imageFormat: "135-full-frame",
    specs: [
      "8 ELEMENTS / 7 GROUPS",
      "f = 28.34 mm (MODELED)",
      "DESIGN F/2.8",
      "ALL SPHERICAL",
      "2ω = 75.2°",
    ],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: {
      marketing: 28,
      design: 28.337698345064993,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    closeFocusM: {
      marketing: 0.22,
    },
  },
  source: {
    patentNumber: "JP S60-181715 A",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 1985,
    authors: ["Takehisa Koyama"],
    assignees: ["Sigma Corporation"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Weak positive front meniscus of the negative front group.",
      focalLengthMm: 152.42563673541665,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.51742,
      vd: 52.2,
      indexReference: "d",
      glass: "E-CF6 (HOYA catalog equivalent; production supplier unspecified)",
      role: "First negative meniscus of the front group; carries most of its divergence.",
      focalLengthMm: -38.61884993475504,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      glass: "BSC7 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Second negative meniscus of the front group, splitting its strong concave power.",
      focalLengthMm: -83.54098907887646,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.78472,
      vd: 25.7,
      indexReference: "d",
      glass: "FD110 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Thick positive flint just ahead of the stop; first member of the positive rear group.",
      focalLengthMm: 44.73367285921399,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 43.9,
      indexReference: "d",
      glass: "NBFD11 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive front element of the cemented negative doublet behind the stop.",
      focalLengthMm: 17.32689832637268,
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.6,
      indexReference: "d",
      glass: "FD140 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative flint rear element of the cemented doublet.",
      focalLengthMm: -13.740499325842865,
      cemented: "C1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus, concave to the object, in the rear group.",
      focalLengthMm: 46.90541087700522,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      glass: "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Biconvex last element of the rear group.",
      focalLengthMm: 61.49868645674048,
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 110.59,
      d: 2.65,
      sd: 20,
      medium: 1,
    },
    {
      label: "2",
      R: 1800,
      d: 0.2,
      sd: 20,
    },
    {
      label: "3",
      R: 47.96,
      d: 1.05,
      sd: 17,
      medium: 2,
    },
    {
      label: "4",
      R: 14,
      d: 4.56,
      sd: 12.3,
    },
    {
      label: "5",
      R: 26,
      d: 1.07,
      sd: 12.3,
      medium: 3,
    },
    {
      label: "6",
      R: 16,
      d: 9.22,
      sd: 10.9,
      rimExtensionSd: 12.3,
    },
    {
      label: "7",
      R: 34.03,
      d: 7.85,
      sd: 9,
      medium: 4,
    },
    {
      label: "8",
      R: 1000.0,
      d: 2,
      sd: 9,
    },
    {
      label: "STO",
      R: "flat",
      d: 2,
    },
    {
      label: "10",
      R: 94.78,
      d: 7.61,
      sd: 10,
      medium: 5,
    },
    {
      label: "11",
      R: -15.34,
      d: 2.5,
      sd: 10,
      medium: 6,
    },
    {
      label: "12",
      R: 35.28,
      d: 2.11,
      sd: 9.5,
    },
    {
      label: "13",
      R: -66,
      d: 2.9,
      sd: 11,
      medium: 7,
    },
    {
      label: "14",
      R: -23.84,
      d: 0.2,
      sd: 11,
    },
    {
      label: "15",
      R: 345.0,
      d: 2.65,
      sd: 13,
      medium: 8,
    },
    {
      label: "16",
      R: -54.91,
      d: 38.85140906198411,
      sd: 13,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only; the patent prints no close-focus spacings, so no focus movement is modeled. Sigma's 0.22 m minimum focus distance (1:4.5) is catalog data.",
  },
  gaps: {},
  groups: [
    { text: "FRONT (−)", fromSurface: "1", toSurface: "6" },
    { text: "REAR (+)", fromSurface: "7", toSurface: "16" },
  ],
  doublets: [{ text: "C1", fromSurface: "10", toSurface: "12" }],
  checks: {
    gapSagFrac: 0.95,
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
