import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,156,743 A (Lionel Barton Booth, 1915), Example 2 and Figure 2.
 * The approximately 12-unit focal length at 25 mm/unit is nominally 300 mm.
 * The printed prescription gives EFL 302.10 mm (+0.7%); no source value is adjusted.
 * The patent prints D, F and hydrogen Hγ indices but no Abbe numbers. Three
 * glasses use catalog dispersion anchored at sodium D (589.3 nm). L2 has
 * only its D-line index in the trace, which limits full-lens colour analysis.
 * The inferred stop is 15 mm behind R3 and 20.175 mm before R4. Estimated clear
 * radii follow Figure 2 proportions, retaining off-axis light: 20.9 mm for the
 * front pair and 13.5 mm for both rear singlets. No clear diameters are printed.
 * The image plane is the calculated paraxial focus, 152.88 mm behind R7.
 * No stop dimensions, back focus, field or close-focus data are printed;
 * the displayed ±7.0° field is illustrative.
 */
const LENS_DATA = {
  schema: 2,
  key: "booth-300mm-f8-us1156743",
  maker: null,
  name: "BOOTH 300mm f/8 (US 1,156,743 Design)",
  subtitle: "US 1,156,743 A, Example 2 — Booth",
  visible: true,
  source: {
    patentNumber: "US 1,156,743 A",
    patentYear: 1915,
    example: {
      label: "Example 2",
      id: "2",
    },
    authors: ["Lionel Barton Booth"],
    assignees: [],
    sdSource: "heuristic",
  },
  catalog: {
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: {
      design: 302.1,
    },
    fNumber: {
      design: 8,
    },
    specs: ["4 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN f = 300 mm", "DESIGN F/8", "TELEPHOTO"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      diagramLabel: "L1",
      type: "Biconvex Positive",
      nd: 1.5899,
      indexReference: "D",
      focalLengthMm: 46.74,
      glass: "S-BAL35R (spectral proxy; patent nD 1.5899, nF 1.5967, nG′ 1.6022; supplier and melt unspecified)",
      role: "Positive front lens of the cemented collecting pair",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      diagramLabel: "L2",
      type: "Biconcave Negative",
      nd: 1.6259,
      indexReference: "D",
      focalLengthMm: -76.07,
      glass: "Unmatched (nD 1.6259, nF 1.6381, nG′ 1.6485)",
      role: "Negative partner to L1 in the cemented front pair",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      diagramLabel: "L3",
      type: "Biconvex Positive",
      nd: 1.6129,
      indexReference: "D",
      focalLengthMm: 65,
      glass: "F3 (spectral proxy; patent nD 1.6129, nF 1.6247, nG′ 1.6348; supplier and melt unspecified)",
      role: "Positive leading lens of the rear negative assembly",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      diagramLabel: "L4",
      type: "Biconcave Negative",
      nd: 1.6119,
      indexReference: "D",
      focalLengthMm: -35.49,
      glass: "BACD8 (spectral proxy; patent nD 1.6119, nF 1.61965, nG′ 1.62593; supplier and melt unspecified)",
      role: "Negative rear lens extending focal length relative to lens length",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 54.55,
      d: 11.35,
      sd: 20.9,
      medium: 1,
    },
    {
      label: "2",
      R: -51.445,
      d: 2.925,
      sd: 20.9,
      medium: 2,
    },
    {
      label: "3",
      R: 652.75,
      d: 15,
      sd: 20.9,
    },
    {
      label: "STO",
      R: "flat",
      d: 20.175,
    },
    {
      label: "4",
      R: 630.25,
      d: 6.2,
      sd: 13.5,
      medium: 3,
    },
    {
      label: "5",
      R: -42.3675,
      d: 1,
      sd: 13.5,
    },
    {
      label: "6",
      R: -36.525,
      d: 2.8375,
      sd: 13.5,
      medium: 4,
    },
    {
      label: "7",
      R: 55.1525,
      d: 152.88094,
      sd: 13.5,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only. The patent allows the spacing between the front and rear assemblies to vary but gives no travel or focus distances.",
  },
  aperture: {
    nominalFNumber: 8,
    fStops: [8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 14,
    maxTraceFieldDeg: 7,
  },
  groups: [
    {
      text: "FRONT",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "REAR POSITIVE",
      fromSurface: "4",
      toSurface: "5",
    },
    {
      text: "REAR NEGATIVE",
      fromSurface: "6",
      toSurface: "7",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "1", toSurface: "3" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
