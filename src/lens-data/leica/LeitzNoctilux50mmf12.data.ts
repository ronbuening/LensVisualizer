import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US3459468A sole table and drawing; strong qualified original 1966 association.
 * Source narrative 52 mm scale is retained separately from marketing 50 mm.
 * d is the preceding interval; first d=-0.722 is entrance-pupil data, not thickness.
 * Source implicit aspheres: c=P((y²+c²)/2), not conventional radial coefficients.
 * Adopt literal c1 vertex curvature for native R; printed rounded R remains a
 * separately computed source branch, not silently overwritten or fitted.
 * K=-1 and A4..A20 are an explicit bounded representation, not printed terms.
 * Source e-line n/v pairs retained; no historical melt or full spectrum claimed.
 * Iris position is derived from the paraxial entrance-pupil datum; its opening
 * and figure-informed clear apertures are hypotheses requiring full validation.
 * NO_INTERNAL_RECONSTRUCTION; closeFocusM=10 is a nonphysical hidden UI placeholder.
 */
const LENS_DATA = {
  schema: 2,
  key: "leica-noctilux-50mm-f12",
  maker: "Leica",
  name: "LEITZ NOCTILUX 50mm f/1.2 (1966 patent-derived)",
  subtitle: "US3459468A sole example; explicit source 52 mm scale and converted implicit aspheres",
  visible: false,
  catalog: {
    lensMounts: ["leica-m"],
    imageFormat: "135-full-frame",
    elementCount: 6,
    groupCount: 4,
    specs: [
      "Strong qualified original 1966 association; not an authenticated factory prescription or later recreation",
      "Marketing 50 mm is distinct from the explicit 52 mm patent narrative; no forced focal-length renormalization",
      "Six glasses/four groups, two cemented boundaries and two outside implicit aspheres",
      "52 mm scaling; source e-line indices and Abbe numbers retained without catalog substitution",
      "Stop derived from source signed entrance-pupil datum; clear apertures remain figure-based hypotheses",
      "No original finite-focus law or primary minimum-focus value established in the retained sources",
    ],
    focalLengthMm: {
      marketing: 50,
      design: 52,
    },
    fNumber: {
      marketing: 1.2,
      design: 1.2,
    },
  },
  source: {
    patentNumber: "US 3,459,468",
    patentYear: 1969,
    authors: ["Helmut Marx", "Paul Sindel"],
    assignees: ["Ernst Leitz GmbH"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Glass element 1",
      type: "Positive Meniscus",
      nd: 1.821,
      vd: 45.2,
      indexReference: "e",
      glass: "Unidentified historical melt; catalog equivalents not adopted",
      role: "Front positive meniscus, source first surface implicit asphere represented by a bounded native polynomial.",
    },
    {
      id: 2,
      name: "L2",
      label: "Glass element 2",
      type: "Positive Meniscus",
      nd: 1.9,
      vd: 40.5,
      indexReference: "e",
      glass: "Unidentified historical melt; catalog equivalents not adopted",
      role: "Positive front glass of the front cemented pair.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Glass element 3",
      type: "Negative Meniscus",
      nd: 1.792,
      vd: 25.9,
      indexReference: "e",
      glass: "Unidentified historical melt; catalog equivalents not adopted",
      role: "Negative rear member of the front cemented pair; shared surface4.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Glass element 4",
      type: "Biconcave Negative",
      nd: 1.844,
      vd: 30.0,
      indexReference: "e",
      glass: "Unidentified historical melt; catalog equivalents not adopted",
      role: "Negative front member of the rear cemented pair.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Glass element 5",
      type: "Biconvex Positive",
      nd: 1.9,
      vd: 40.5,
      indexReference: "e",
      glass: "Unidentified historical melt; catalog equivalents not adopted",
      role: "Positive rear member of the rear cemented pair; shared surface7.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Glass element 6",
      type: "Biconvex Positive",
      nd: 1.694,
      vd: 54.6,
      indexReference: "e",
      glass: "Unidentified historical melt; catalog equivalents not adopted",
      role: "Positive rear singlet, source last surface implicit asphere represented by a bounded native polynomial.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 59.838895281933254,
      d: 6.76,
      sd: 26.5,
      asphere: {
        K: -1,
        A4: 2.491278215068474e-7,
        A6: 5.386433349311271e-11,
        A8: 1.7467281936887108e-14,
        A10: -1.7720512754524765e-16,
        A12: 1.2710259577297182e-19,
        A14: 6.860164493704233e-23,
        A16: 7.905578822247626e-26,
        A18: -4.4680470070056126e-29,
        A20: 2.4463888057791393e-32,
      },
      medium: 1,
    },
    {
      label: "2",
      R: 237.69199999999998,
      d: 0.20800000000000002,
      sd: 26.5,
    },
    {
      label: "3",
      R: 29.9,
      d: 11.752,
      sd: 23.5,
      medium: 2,
    },
    {
      label: "4",
      R: 126.56800000000001,
      d: 2.184,
      sd: 23.5,
      medium: 3,
    },
    {
      label: "5",
      R: 18.148,
      d: 8.239332652321645,
      sd: 14.0,
    },
    {
      label: "STO",
      R: "flat",
      d: 5.800667347678355,
    },
    {
      label: "6",
      R: -23.400000000000002,
      d: 1.612,
      sd: 12.5,
      medium: 4,
    },
    {
      label: "7",
      R: 72.02,
      d: 9.411999999999999,
      sd: 20.4,
      medium: 5,
    },
    {
      label: "8",
      R: -34.58,
      d: 0.052000000000000005,
      sd: 18.8,
    },
    {
      label: "9",
      R: 61.36,
      d: 6.0840000000000005,
      sd: 16.5,
      medium: 6,
    },
    {
      label: "10",
      R: -55.79399141630901,
      d: 27.66826579668996,
      sd: 16.5,
      asphere: {
        K: -1,
        A4: 2.6389345125590922e-6,
        A6: -2.9819312738897584e-9,
        A8: -1.7879539464177868e-12,
        A10: 3.337734723896426e-15,
        A12: 4.570095144958906e-18,
        A14: 1.1266268464888072e-21,
        A16: -5.885360396424883e-25,
        A18: 5.705228564477538e-27,
        A20: -4.938350283725719e-30,
      },
    },
  ],
  focus: {
    closeFocusM: 10,
    description:
      "NO_INTERNAL_RECONSTRUCTION. The required closeFocusM=10 value is a nonphysical UI compatibility placeholder, not a manufacturer MFD or validated finite conjugate. No finite motion or published finite state is authored; this hidden model represents infinity only.",
  },
  aperture: {
    nominalFNumber: 1.2,
    fStops: [1.2, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  layout: {
    yScFill: 0.72,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
