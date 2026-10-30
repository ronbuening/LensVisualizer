import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP H02-248910 A (Sigma), Numerical Example 1: table on page 3, section in Fig. 1, aberrations in Fig. 3.
 * All printed radii, spacings and n/ν values are used as printed, without scaling or correction.
 * The table headings are n_i and ν_i with no spectral suffix; the d line is assumed, consistent
 * with the d- and g-line aberration plots.
 * Example 1 is chosen over Example 2 because Sigma's construction diagram fits its vertex spacing
 * (0.32 mm rms against 0.86 mm; d2 = 16.88 and d4 = 3.01 mm match the drawing, Example 2's 14.83
 * and 5.27 mm do not). The production EX DG prescription itself is not published.
 * No back focus is printed: the infinity image gap is the paraxial back focus.
 * No clear apertures or close-focus spacings are printed. Semi-diameters are estimated from Fig. 1
 * (axial scale from the vertices; the radial scale from the L1 arcs is about 3 % larger) and
 * checked against Sigma's diagram, which agrees within about 0.4 mm except L5. L2 keeps a 10.5 mm
 * front and an 8.5 mm rear rim, as both drawings show. L3 and L4 are 8.1 mm; L5 to L7 are larger
 * (8.8, 8.6 and 9.1 mm), as Fig. 1 draws them. Sigma's diagram draws L6 and L7 larger too but L5
 * level with L4. Every rim clears the F/2.8 axial beam and the 90° chief ray.
 * Fresh F-mount review, 2026-10-30: S4 keeps its 8.5 mm optical cap and adds an exposed flat land
 * to the existing 10.5 mm L2 body, following the patent notch. The secondary production drawing
 * shows a chamfer; this flat shoulder remains a source-model inference, not production mechanics.
 * Close focus is modelled as unit focus (see focus.description).
 * The stop diameter is not printed; the engine derives it from F/2.8.
 * L1 has unequal rims: the rear rim follows the near-hemispherical concave surface in Fig. 1,
 * not the flat mounting lands outside it. At 15.0 mm on R 15.56 mm the rim slope is 74.6°
 * (the 90° chief ray needs 14.91 mm), so checks.maxRimAngleDeg is 75.
 * No aspheres or filter plate; the default gap-sag limit is kept.
 * Glass names are modern catalog equivalents of the printed n/ν values, not the original melts.
 */

const LENS_DATA = {
  schema: 2,
  key: "sigma-15mm-f28-ex-dg-diagonal-fisheye",
  maker: "Sigma",
  name: "SIGMA 15mm f/2.8 EX DG DIAGONAL FISHEYE",
  subtitle: "JP H02-248910 A, Numerical Example 1 \u2014 construction-based production correlation",
  catalog: {
    lensMounts: ["sigma-sa", "canon-ef", "nikon-f", "pentax-k", "sony-a"],
    imageFormat: "135-full-frame",
    imageCircleMm: 43.2,
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: {
      marketing: 15,
      design: 15.3,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    specs: [
      "7 ELEMENTS / 6 GROUPS",
      "DESIGN f = 15.3 mm",
      "DESIGN F/2.8",
      "ALL SPHERICAL",
      "EQUISOLID FISHEYE, 2\u03c9 = 180\u00b0",
    ],
  },
  source: {
    patentNumber: "JP H02-248910 A",
    example: {
      label: "Numerical Example 1",
      id: "1",
    },
    patentYear: 1990,
    authors: ["Yasunori Murata"],
    assignees: ["Sigma Corporation"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: -28.670887,
      glass: "J-LAK14 (HIKARI catalog equivalent; production supplier unspecified)",
      role: "Front negative collector for hemispherical field; convex to object",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 43.9,
      indexReference: "d",
      focalLengthMm: -21.836489,
      glass: "NBFD11 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Second negative meniscus of the retrofocus front section",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.76182,
      vd: 26.6,
      indexReference: "d",
      focalLengthMm: 20.027979,
      glass: "FD140 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Strong positive high-dispersion element; patent condition 1.1f < f3 < 1.6f",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      indexReference: "d",
      focalLengthMm: -51.841061,
      glass: "NBFD15 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Thick weak-negative element; patent condition 0.7f < D4 < 0.9f",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      focalLengthMm: 32.235341,
      glass: "FK5 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Positive crown behind the stop",
      diagramLabel: "L5",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      focalLengthMm: 23.642534,
      glass: "FK5 (SUMITA catalog equivalent; production supplier unspecified)",
      role: "Positive crown of rear cemented pair",
      diagramLabel: "L6",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.5,
      indexReference: "d",
      focalLengthMm: -32.501621,
      glass: "FD60 (HOYA catalog equivalent; production supplier unspecified)",
      role: "Negative dense-flint partner of rear cemented pair",
      diagramLabel: "L7",
      cemented: "D1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 74.95,
      d: 2.47,
      sd: 29,
      medium: 1,
    },
    {
      label: "2",
      R: 15.56,
      d: 16.88,
      sd: 15.0,
    },
    {
      label: "3",
      R: 45.96,
      d: 2.47,
      sd: 10.5,
      medium: 2,
    },
    {
      label: "4",
      R: 12.2,
      d: 3.01,
      rimExtensionSd: 10.5,
      sd: 8.5,
    },
    {
      label: "5",
      R: 21.32,
      d: 3.61,
      sd: 8.1,
      medium: 3,
    },
    {
      label: "6",
      R: -49.73,
      d: 1.05,
      sd: 8.1,
    },
    {
      label: "7",
      R: -35.01,
      d: 12.41,
      sd: 8.1,
      medium: 4,
    },
    {
      label: "8",
      R: -249.96,
      d: 1.5,
      sd: 8.1,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.55,
    },
    {
      label: "10",
      R: 558.53,
      d: 5.2,
      sd: 8.8,
      medium: 5,
    },
    {
      label: "11",
      R: -16.12,
      d: 0.1,
      sd: 8.8,
    },
    {
      label: "12",
      R: 74.59,
      d: 5.04,
      sd: 8.6,
      medium: 6,
    },
    {
      label: "13",
      R: -13.33,
      d: 0.98,
      sd: 8.6,
      medium: 7,
    },
    {
      label: "14",
      R: -28.06,
      sd: 9.1,
    },
  ],
  focus: {
    closeFocusM: 0.15,
    keyframes: [0.0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1.0],
    description:
      "Inferred unit focus: the whole lens moves away from the image, so only the image gap grows, from 38.96 mm at infinity to 42.69 mm (3.73 mm) at Sigma's 0.15 m minimum focus distance. The patent tabulates infinity only and does not name the production focusing method; the model reaches 1:4.1 at close focus against Sigma's 1:3.8. Nine keyframes are solved paraxially and positions between them are interpolated.",
  },
  gaps: {
    "14": {
      label: "BF",
      values: [
        [
          38.9555950464, 39.1653297798, 39.4093129336, 39.6971639682, 40.0427040764, 40.4666880223, 41.0021446491,
          41.7060278701, 42.6890407444,
        ],
      ],
    },
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 7,
  },
  projection: {
    kind: "fisheye-equisolid",
    focalLengthMm: 15.3,
    fullFieldDeg: 180,
    imageCircleMm: 43.2,
    maxTraceFieldDeg: 90,
  },
  groups: [
    {
      text: "L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "L2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "L3",
      fromSurface: "5",
      toSurface: "6",
    },
    {
      text: "L4",
      fromSurface: "7",
      toSurface: "8",
    },
    {
      text: "L5",
      fromSurface: "10",
      toSurface: "11",
    },
    {
      text: "L6\u2013L7",
      fromSurface: "12",
      toSurface: "14",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "12",
      toSurface: "14",
    },
  ],
  layout: {
    yScFill: 0.75,
  },
  checks: {
    maxRimAngleDeg: 75.0,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
