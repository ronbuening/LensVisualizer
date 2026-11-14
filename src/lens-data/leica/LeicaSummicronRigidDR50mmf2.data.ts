import type { LensDataV2Input } from "../../types/lensDataV2.js";

// DE 939956 B (Ernst Leitz GmbH; Zimmermann and Kleineberg), sole example: the page 2 table, repeated in
// claim 1, printed at f = 100 and 1:2. All lengths are scaled uniformly ×0.5 to the marketed 50 mm; nd and ν
// are the printed values. r7 = +145.08 is printed positive in both tables; no erratum is applied.
// The patent heads its glass columns nd and ν without stating a wavelength; the model reads them as d-line values.
// Stop: not printed. Placed at the midpoint of the 9.08 mm central air space; the total gap is unchanged.
// Semi-diameters: not printed; estimated, not measured factory clear apertures. L3 and L4 follow the patent figure
// (scale from the drawn radii and element thicknesses). L3's rear face stops at 10.075 mm
// because the 0.2575 mm air space to L4 closes near 10.6 mm; L4's front face runs on to its drawn flat rim.
// L1 and L2 agree with the figure within measurement noise.
// The doublet's front face (8.8 mm), its flat rim (11.6 mm) and L7 (14 mm) stay larger than the figure's 7.8, 10.1
// and 11.0 mm: smaller rims cost more than 3 points of corner illumination and narrow the traced field.
// Back focus: derived paraxially (30.74 mm), not printed. Infinity focus only: the patent publishes no
// focusing movement.
const LENS_DATA = {
  schema: 2,
  key: "leica-summicron-50mm-f2-rigid-dual-range",
  maker: "Leica",
  name: "LEICA SUMMICRON 50mm f/2 Rigid / Dual Range",
  subtitle: "DE 939956 B, sole example \u2014 probable production correlation, scaled \u00d70.5",
  visible: true,
  catalog: {
    lensMounts: ["leica-m"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 6 GROUPS", "DESIGN f = 100 mm (SCALED 0.5× TO 50 mm)", "DESIGN F/2", "ALL SPHERICAL"],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: {
      marketing: 50,
      design: 50,
    },
    fNumber: {
      marketing: 2,
      design: 2,
    },
    closeFocusM: {
      marketing: 1,
    },
  },
  source: {
    patentNumber: "DE 939956 B",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1956,
    authors: ["Otto Zimmermann", "Gustav Kleineberg"],
    assignees: ["Ernst Leitz GmbH"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.691,
      vd: 54.9,
      indexReference: "d",
      focalLengthMm: 50.52274434281679,
      glass: "J-LAK9 (Hikari catalog equivalent; production supplier unspecified)",
      role: "Biconvex front collector; with L2 it forms the air-spaced front positive member.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.62237,
      vd: 36.1,
      indexReference: "d",
      focalLengthMm: -106.25971873834973,
      glass: "Unmatched (patent nd 1.62237, ν 36.1; no exact catalog row)",
      role: "Weak negative flint completing the front positive member; opposes the collector's colour.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.691,
      vd: 54.9,
      indexReference: "d",
      focalLengthMm: 33.641446637422135,
      glass: "J-LAK9 (Hikari catalog equivalent; production supplier unspecified)",
      role: "Positive outer half of the front meniscus pair, 0.26 mm of air ahead of L4.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6014,
      vd: 38.3,
      indexReference: "d",
      focalLengthMm: -25.140017540891535,
      glass: "Unmatched (patent nd 1.60140, ν 38.3; no exact catalog row)",
      role: "Negative flint meniscus before the stop; its deep concave rear surface gives the front pair its negative power.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.8,
      indexReference: "d",
      focalLengthMm: -24.222374717654407,
      glass: "LF5 (Schott catalog equivalent; production supplier unspecified)",
      role: "Biconcave light flint at the front of the rear cemented meniscus, concave to the stop.",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.691,
      vd: 54.9,
      indexReference: "d",
      focalLengthMm: 28.411541513395857,
      glass: "J-LAK9 (Hikari catalog equivalent; production supplier unspecified)",
      role: "Biconvex lanthanum crown completing the rear cemented meniscus.",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.691,
      vd: 54.9,
      indexReference: "d",
      focalLengthMm: 51.7706555403093,
      glass: "J-LAK9 (Hikari catalog equivalent; production supplier unspecified)",
      role: "Biconvex rear positive member.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 41.08,
      d: 5.2,
      sd: 15,
      medium: 1,
    },
    {
      label: "2",
      R: -220.46,
      d: 1.45,
      sd: 15,
    },
    {
      label: "3",
      R: -182.23,
      d: 3.435,
      sd: 14,
      medium: 2,
    },
    {
      label: "4",
      R: 104.555,
      d: 0.096,
      sd: 14,
    },
    {
      label: "5",
      R: 16.84,
      d: 4.24,
      sd: 11.6,
      medium: 3,
    },
    {
      label: "6",
      R: 54.82,
      d: 0.2575,
      sd: 10.075,
    },
    {
      label: "7",
      R: 72.54,
      d: 2.03,
      sd: 11.5,
      medium: 4,
    },
    {
      label: "8",
      R: 12.38,
      d: 4.54,
      sd: 8.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.54,
    },
    {
      label: "9",
      R: -18.06,
      d: 1.885,
      sd: 8.8,
      medium: 5,
    },
    {
      label: "10",
      R: 66.425,
      d: 4.05,
      sd: 11.6,
      medium: 6,
    },
    {
      label: "11",
      R: -27.175,
      d: 0.096,
      sd: 11.6,
    },
    {
      label: "12",
      R: 372.355,
      d: 3.47,
      sd: 14,
      medium: 7,
    },
    {
      label: "13",
      R: -39.425,
      d: 30.73780955627864,
      sd: 14,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only; the patent publishes no focusing movement. The rigid lens focuses to 1 m, and the Dual Range version adds a near range of 0.88–0.48 m used with a viewfinder attachment.",
  },
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
  },
  groups: [
    {
      text: "FRONT",
      fromSurface: "1",
      toSurface: "8",
    },
    {
      text: "REAR",
      fromSurface: "9",
      toSurface: "13",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "9",
      toSurface: "11",
    },
  ],
  layout: {
    yScFill: 0.42,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
