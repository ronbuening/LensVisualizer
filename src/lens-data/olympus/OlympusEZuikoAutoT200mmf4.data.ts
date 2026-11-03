import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** US 3,838,911 Embodiment 2 (f = 100, F/4, 2ω = 12°), every length scaled ×2 to f = 200 mm.
 * Matched to the production lens by specification; not a confirmed factory prescription.
 * Radii, thicknesses, indices and Abbe numbers are as printed. The back focus is not printed: the image plane is the
 * paraxial focus, 63.99 mm behind the last surface. The stop position (0.75 of d5) is inferred. Clear semi-diameters
 * are inferred: the front rim from the f/4 pupil, the others from the outline ratios of Fig. 1 and of the Olympus
 * dealer-binder section, which is drawn to this example's scale. Faces 5 and 7 end short of their front faces, at the
 * chamfers both drawings show on the image-side rims of L3 and L4. All rims are floor-checked by real-ray trace.
 * The patent does not name a reference line for n and ν; they are read as d-line values.
 * The patent prints infinity only; the 2.5 m unit-focus state is derived.
 */
const LENS_DATA = {
  schema: 2,
  key: "olympus-e-zuiko-auto-t-200mm-f4",
  maker: "Olympus",
  name: "OLYMPUS E.ZUIKO AUTO-T 200mm f/4",
  subtitle: "US 3,838,911 \u2014 Embodiment 2; patent design matching the production specifications",
  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      marketing: 200,
      design: 200,
    },
    fNumber: {
      marketing: 4,
      design: 4,
    },
    specs: ["5 ELEMENTS / 4 GROUPS", "DESIGN f = 200 mm", "DESIGN F/4", "ALL SPHERICAL"],
  },
  source: {
    patentNumber: "US 3,838,911",
    example: {
      label: "Embodiment 2",
      id: "2",
    },
    patentYear: 1974,
    authors: ["Yoshitsugi Ikeda"],
    assignees: ["Olympus Optical Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.62041,
      vd: 60.2,
      glass: "S-BSM16 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "The patent does not name the spectral line of its n and ν values; they are read as d-line values.",
      focalLengthMm: 163.52734482036075,
      role: "Positive front collector (G1) with a flat rear face.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 69.8,
      glass: "Unmatched (patent nd 1.48749, νd 69.8; S-FSL5 matches nd but is 0.44 off in νd)",
      indexReference: "d",
      indexReferenceNote:
        "The patent does not name the spectral line of its n and ν values; they are read as d-line values.",
      focalLengthMm: 118.37119231990481,
      role: "Low-dispersion positive crown of the cemented doublet (G2).",
      cemented: "CD1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.5,
      glass: "S-TIH14 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "The patent does not name the spectral line of its n and ν values; they are read as d-line values.",
      focalLengthMm: -154.1287277143533,
      role: "Dense-flint negative partner of the cemented doublet; corrects the front group's colour.",
      cemented: "CD1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6779,
      vd: 55.3,
      glass: "S-LAL12 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "The patent does not name the spectral line of its n and ν values; they are read as d-line values.",
      focalLengthMm: -79.03144922618742,
      role: "Negative meniscus behind the stop (G3); the main negative member of the telephoto.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.78472,
      vd: 25.6,
      glass: "S-TIH11 (OHARA catalog equivalent; production supplier unspecified)",
      indexReference: "d",
      indexReferenceNote:
        "The patent does not name the spectral line of its n and ν values; they are read as d-line values.",
      focalLengthMm: 205.51881858402413,
      role: "Positive rear meniscus (G4); balances lateral colour and off-axis aberrations.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 101.454,
      d: 6.36,
      sd: 27.5,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 11.62,
      sd: 27.5,
    },
    {
      label: "3",
      R: 60.716,
      d: 9.68,
      sd: 24.2,
      medium: 2,
    },
    {
      label: "4",
      R: -1102.72,
      d: 4.52,
      sd: 24.2,
      medium: 3,
    },
    {
      label: "5",
      R: 131.644,
      d: 28.875,
      sd: 22.6,
    },
    {
      label: "STO",
      R: "flat",
      d: 9.625,
    },
    {
      label: "6",
      R: 103.06,
      d: 3.68,
      sd: 14.9,
      medium: 4,
    },
    {
      label: "7",
      R: 34.742,
      d: 26.84,
      sd: 13.2,
    },
    {
      label: "8",
      R: 64.604,
      d: 4.24,
      sd: 17.1,
      medium: 5,
    },
    {
      label: "9",
      R: 104.668,
      sd: 17.1,
    },
  ],
  focus: {
    closeFocusM: 2.5,
    description:
      "Unit focus: the whole five-element block moves forward on a straight helicoid. The patent prints the infinity state only; the 2.5 m close state (back focus 83.56 mm, about 1:10.2) is derived paraxially for the retail 2.5 m object-to-image distance and is not a published spacing.",
  },
  gaps: {
    "9": { label: "BF", values: [[63.98538070550599, 83.56]] },
  },
  aperture: {
    nominalFNumber: 4,
    fStops: [4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 12,
    maxTraceFieldDeg: 6,
  },
  layout: {
    yScFill: 0.78,
  },
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
  ],
  doublets: [
    {
      text: "CD1",
      fromSurface: "3",
      toSurface: "5",
    },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
