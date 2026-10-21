import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * RODENSTOCK SIRONAR 100mm f/5.6, original convertible version (pre-Sironar-N).
 * Source: DE 1 258 134 B, Example I (claim 2, Figure 1), normalized f' = 100, 1:5.6.
 * Product correlation is qualified: no factory prescription has been published.
 * The patent's n_e / nu_e values and every radius and thickness are used as
 * printed, at scale 1.
 * Back focus: the printed s' = 83.5 mm is kept as the infinity image distance;
 * the paraxial BFD of the printed prescription is 83.699 mm (EFL 100.081 mm).
 * Stop: the patent splits the central airspace l2 = 10.1 into 5.3 + 4.8; the iris
 * radius is set from the f/5.6 axial marginal ray.
 * Semi-diameters are estimated from Figure 1 and ray checks, not factory values.
 * Focus: the patent gives only the infinity state. Unit focus by bellows
 * extension is derived paraxially for a 1.0 m object-to-image distance.
 * Dispersion: only n_e / nu_e are printed; no partial-dispersion data is given.
 * Glass: L1/L6 and L3/L4 carry Hoya catalog equivalents (BACD14, PC2) whose
 * e-line coordinates equal the printed pairs at C'/e/F' (the period Schott SK14
 * and PK2 types share these coordinates; the actual supplier is not documented).
 * The short flint of L2/L5 has no coordinate-equal catalog row and stays unmatched.
 */
const LENS_DATA = {
  schema: 2,
  key: "rodenstock-sironar-100mm-f56-convertible",
  maker: "Rodenstock",
  name: "RODENSTOCK SIRONAR 100mm f/5.6 (original convertible)",
  subtitle: "DE 1 258 134 B, Example I — qualified production correlation",
  visible: true,
  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageFormat: "6x9",
    imageCircleMm: 127, // Rodenstock brochure PRC00863: 127 mm at f/5.6 (137 mm at f/11, 147 mm at f/16)
    elementCount: 6,
    groupCount: 4,
    specs: [
      "6 ELEMENTS / 4 GROUPS",
      "DESIGN f = 100 mm",
      "DESIGN F/5.6",
      "ALL SPHERICAL",
      "CONVERTIBLE: FRONT CELL ≈ 276 mm",
    ],
    focalLengthMm: {
      marketing: 100,
      design: 100,
    },
    fNumber: {
      marketing: 5.6,
      design: 5.6,
    },
  },
  source: {
    patentNumber: "DE 1 258 134 B",
    patentYear: 1968,
    authors: ["Franz Schlegel"],
    assignees: ["Optische Werke G. Rodenstock"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6055,
      vd: 60.5,
      indexReference: "e",
      focalLengthMm: 36.70,
      glass: "BACD14 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive front crown of the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5543,
      vd: 49.3,
      indexReference: "e",
      focalLengthMm: -25.93,
      glass: "SBF1 (HOYA catalog proxy; short flint of anomalous dispersion per the patent, ne 1.5543 / νe 49.3; production supplier unspecified)",
      role: "Negative inner element of the front cemented doublet; anomalous-dispersion flint per the patent.",
      cemented: "D1",
      apd: "patent",
      apdNote:
        "The patent specifies a glass of anomalous dispersion, preferably a short flint, for the negative element of each cemented doublet. It prints only n_e and nu_e, so the partial dispersion itself is not modeled.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.5201,
      vd: 65,
      indexReference: "e",
      focalLengthMm: 100.15,
      glass: "PC2 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus in front of the stop, convex to the object.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.5201,
      vd: 65,
      indexReference: "e",
      focalLengthMm: 123.80,
      glass: "PC2 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive meniscus behind the stop, convex to the image.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5543,
      vd: 49.3,
      indexReference: "e",
      focalLengthMm: -24.29,
      glass: "SBF1 (HOYA catalog proxy; short flint of anomalous dispersion per the patent, ne 1.5543 / νe 49.3; production supplier unspecified)",
      role: "Negative inner element of the rear cemented doublet; anomalous-dispersion flint per the patent.",
      cemented: "D2",
      apd: "patent",
      apdNote:
        "The patent specifies a glass of anomalous dispersion, preferably a short flint, for the negative element of each cemented doublet. It prints only n_e and nu_e, so the partial dispersion itself is not modeled.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6055,
      vd: 60.5,
      indexReference: "e",
      focalLengthMm: 26.63,
      glass: "BACD14 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Positive rear crown of the rear cemented doublet.",
      cemented: "D2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 22.79,
      d: 8.08,
      sd: 14,
      medium: 1,
    },
    {
      label: "2",
      R: -774,
      d: 2.4,
      sd: 14,
      medium: 2,
    },
    {
      label: "3",
      R: 14.66,
      d: 1.2,
      sd: 7.6,
    },
    {
      label: "4",
      R: 20.2,
      d: 1.89,
      sd: 7.6,
      medium: 3,
    },
    {
      label: "5",
      R: 31.94,
      d: 5.3,
      sd: 7.6,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.8,
    },
    {
      label: "6",
      R: -42.35,
      d: 1.37,
      sd: 7.2,
      medium: 4,
    },
    {
      label: "7",
      R: -25.83,
      d: 1.63,
      sd: 7.2,
    },
    {
      label: "8",
      R: -14.93,
      d: 1.66,
      sd: 7.2,
      medium: 5,
    },
    {
      label: "9",
      R: 142.7,
      d: 4.77,
      sd: 10.6,
      medium: 6,
    },
    {
      label: "10",
      R: -17.95,
      sd: 10.6,
    },
  ],
  focus: {
    closeFocusM: 1.0,
    description:
      "Unit focus by view-camera bellows: the whole lens moves away from the film and only the back focus changes. The patent prints only the infinity state; the 12.69 mm extension for a 1.0 m object-to-image distance is derived paraxially and is not a manufacturer specification.",
  },

  gaps: {
    "10": { label: "BF", values: [[83.5, 96.189792]] },
  },
  aperture: {
    nominalFNumber: 5.6,
    fStops: [5.6, 8, 11, 16, 22, 32, 45],
    maxFNumber: 45,
  },
  groups: [
    { text: "FRONT CELL", fromSurface: "1", toSurface: "5" },
    { text: "REAR CELL", fromSurface: "6", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],
  layout: {
    yScFill: 0.7,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
