import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Fujifilm Fujinon-Z 43-75mm f/3.5-4.5
 *
 * Data source: US 4,195,912, Example 2 / Table II / Fig. 4 / Claim 4
 * (Doi, Sakai, Ohono; Fuji Photo Optical Co., Ltd.).
 *
 * Patent prescription is normalized to fW = 1.0. All radii, axial distances, BFDs,
 * and inferred semi-diameters are scaled by 43.0x to represent the marketed 43 mm
 * wide setting. The computed telephoto EFL is about 71.47 mm; the marketed 75 mm
 * endpoint is retained only as catalog metadata.
 *
 * Zoom model: the patent publishes only the inter-group spacing d6 and back focal
 * distance at W/T infinity focus. Because the patent does not publish a stop
 * coordinate, STO is inserted for rendering in the inter-group gap and d6 is split
 * equally on either side of STO at both zoom settings.
 *
 * Focus model: production close focus is recorded as metadata, but no close-focus
 * prescription is synthesized. The variable gaps below are zoom-only; infinity and
 * close values are intentionally identical at each zoom endpoint.
 *
 * Semi-diameters are inferred. They are constrained by the 49 mm filter class,
 * element edge thickness, surface-to-surface cross-gap sag intrusion, spherical rim
 * slope, element front/rear diameter ratios, and Fig. 4 silhouette tuning. The
 * L1-L2 and L6-L7 air gaps are the binding limits; these values should be treated
 * as conservative clear-aperture estimates, not patent-published apertures.
 */
const LENS_DATA = {
  schema: 2,
  key: "fujifilm-fujinon-z-43-75mm-f35-45",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON-Z 43-75mm f/3.5-4.5",
  subtitle: "US 4,195,912 Example 2 - Fuji Photo Optical / Doi et al.",

  catalog: {
    lensMounts: ["m42"],
    imageFormat: "135-full-frame",
    specs: [
      "7 elements / 7 groups",
      "43-75mm marketed; 42.99-71.47mm computed",
      "f/3.5-4.5",
      "2ω = 52°-33° patent field",
      "All spherical",
    ],
    elementCount: 7,
    groupCount: 7,
    focalLengthMm: { marketing: [43, 75], design: [42.985, 71.474] },
  },

  source: {
    patentNumber: "US 4,195,912",
    patentYear: 1980,
    authors: ["Yoshikazu Doi", "Yutaka Sakai", "Kazunori Ohno"],
    assignees: ["Fuji Photo Optical Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.1,
      focalLengthMm: -46.887,
      glass: "S-TIM28 / 689311 dense flint equivalent (OHARA current catalog; vendor not patent-disclosed)",
      role: "Strong negative front meniscus of group A; rear surface r2 controls wide-side coma and astigmatism.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62299,
      vd: 58.1,
      focalLengthMm: -75.416,
      glass: "BACD15 / 623581 barium crown equivalent (HOYA catalog; vendor not patent-disclosed)",
      role: "Weak high-Abbe negative corrector added in Example 2 front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.68893,
      vd: 31.1,
      focalLengthMm: 45.242,
      glass: "S-TIM28 / 689311 dense flint equivalent (OHARA current catalog; vendor not patent-disclosed)",
      role: "Low-Abbe positive lens used to achromatize the negative front group; r5 satisfies condition (3).",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.6,
      focalLengthMm: 44.925,
      glass: "S-LAL14 / 697556 lanthanum crown equivalent (vendor not patent-disclosed)",
      role: "First positive meniscus of the rear group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.5,
      focalLengthMm: 54.769,
      glass: "678555 lanthanum crown equivalent, LAK12/LAC12 class (vendor not patent-disclosed)",
      role: "High-ray-height positive rear-group corrector; r9 satisfies condition (4).",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: -20.229,
      glass: "FD60 / SF6-class 805255 dense flint equivalent (vendor not patent-disclosed)",
      role: "Strong negative rear-group element; r12 satisfies condition (5) and supplies dense-flint chromatic correction.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6668,
      vd: 33.1,
      focalLengthMm: 46.91,
      glass: "H-ZF39 / 667331 dense flint equivalent (CDGM catalog-equivalent; vendor uncertain)",
      role: "Symmetric final positive element of group B.",
    },
  ],

  surfaces: [
    { label: "1", R: 120.7784, d: 1.5695, sd: 19.8, medium: 1 },
    { label: "2", R: 25.35065, d: 6.0845, sd: 16.4 },
    { label: "3", R: 545.0379, d: 1.1782, sd: 15.9, medium: 2 },
    { label: "4", R: 43.21887, d: 0.1978, sd: 15.0 },
    { label: "5", R: 31.44418, d: 6.278, sd: 15.2, medium: 3 },
    { label: "6", R: -3270.1801, sd: 15.0 },
    { label: "STO", R: "flat" },
    { label: "7", R: 27.63567, d: 2.9455, sd: 11.4, medium: 4 },
    { label: "8", R: 225.53672, d: 0.1978, sd: 11.0 },
    { label: "9", R: 20.26977, d: 2.7477, sd: 11.0, medium: 5 },
    { label: "10", R: 42.19633, d: 5.4352, sd: 10.8 },
    { label: "11", R: 490.5311, d: 1.1782, sd: 10.8, medium: 6 },
    { label: "12", R: 15.74746, d: 4.5236, sd: 10.6 },
    { label: "13", R: 61.50892, d: 5.16, sd: 14.4, medium: 7 },
    { label: "14", R: -61.50892, sd: 14.2 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 42.985, nominalFNumber: 3.5, label: "Wide" },
      { focalLengthMm: 71.474, nominalFNumber: 4.5, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 1.2,
    description:
      "Manual push-pull zoom with twist focus; close-focus optical spacing is not patent-published, so this file models the infinity zoom prescription only.",
  },

  gaps: {
    "6": {
      label: "D6a",
      values: [
        [19.846865, 19.846865],
        [0.510195, 0.510195],
      ],
    },
    STO: {
      label: "D6b",
      values: [
        [19.846865, 19.846865],
        [0.510195, 0.510195],
      ],
    },
    "14": {
      label: "BF",
      values: [
        [46.3755, 46.3755],
        [61.0213, 61.0213],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 6 },

  groups: [
    { text: "A", fromSurface: "1", toSurface: "6" },
    { text: "B", fromSurface: "7", toSurface: "14" },
  ],
  doublets: [],

  layout: { scFill: 0.58, yScFill: 0.64 },
} satisfies LensDataV2Input;

export default LENS_DATA;
