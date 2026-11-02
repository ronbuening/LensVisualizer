// Current-main private integration descendant: canonical infinity state; source optics unchanged.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Private diagnostic candidate lensgap-primes-1014, outside the production catalog.
 * Optical fields match released Stage C; this descendant enables private staging visibility.
 * US 7,715,116 B2, Embodiment 7, Table 7, Figure 19 (Koji Kato; Hoya Corporation).
 * Primary prescription: https://patents.google.com/patent/US7715116B2/en
 * No dimensional scaling or source retuning. Printed f = 291.00, FNO = 4.1,
 * BFD = 56.93 mm. The independent EFL 290.9907457306671 mm is outside the
 * printed focal-length rounding cell; the unexplained residual is acknowledged.
 * All 14 non-stop semi-diameters are qualified Figure 19 estimates, not factory
 * clear apertures. The reviewed 3.500 + 3.500 mm stop split preserves source d9.
 * STO sd is intentionally omitted: the ordinary-prime native F/N rule owns it.
 * Exact source Nd/nu_d values and d-line reference remain authoritative. Unmatched
 * glass labels permit Abbe proxy initialization, not verified spectral identity.
 * Fixed infinity geometry only; closeFocusM=1e15 follows the existing infinity convention.
 * Retained aperture menu/max and layout are fixture/UI metadata, not retail specs.
 * Source/product association and all diagnostic limits are in the paired analysis.
 * Private integration only; no public mutation is authorized.
 */
const LENS_DATA = {
  schema: 2,
  key: "pentax-da-star-300mm-f4",
  maker: "Pentax",
  name: "PENTAX DA* 300mm f/4 ED [IF] SDM",
  subtitle: "US 7,715,116 B2, Embodiment 7 / Table 7 / Figure 19; infinity only",
  visible: true,
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: {
      marketing: 300,
      design: 291.0,
    },
    fNumber: {
      marketing: 4,
      design: 4.1,
    },
  },
  source: {
    patentNumber: "US 7,715,116 B2",
    example: {
      label: "Embodiment 7",
      id: "7",
    },
    patentYear: 2010,
    authors: ["Koji Kato"],
    assignees: ["Hoya Corporation"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      glass: "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 95,
      indexReference: "d",
      glass: "S-FPL53 (OHARA catalog equivalent; production supplier unspecified)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.8,
      vd: 44.1,
      indexReference: "d",
      glass: "NBFD14 (HOYA coordinate proxy; patent 1.80000/44.1 is not a catalog coordinate)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.79952,
      vd: 41.3,
      indexReference: "d",
      glass: "S-LAH52 (OHARA coordinate proxy; patent νd 41.3 versus catalog 42.2)",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      glass: "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      glass: "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.7426,
      vd: 44.4,
      indexReference: "d",
      glass: "LAF2 (HOYA coordinate proxy; patent 1.74260/44.4 is not a catalog coordinate)",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.69883,
      vd: 29.6,
      indexReference: "d",
      glass: "E-FD15 (HOYA coordinate proxy; patent 1.69883/29.6 is not a catalog coordinate)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 145.383,
      d: 8,
      sd: 36.8,
      medium: 1,
    },
    {
      label: "2",
      R: 2212.492,
      d: 0.5,
      sd: 36.8,
    },
    {
      label: "3",
      R: 84.98,
      d: 12.52,
      sd: 35.5,
      medium: 2,
    },
    {
      label: "4",
      R: -334.381,
      d: 2.23,
      sd: 35.5,
    },
    {
      label: "5",
      R: -375.882,
      d: 5,
      sd: 33.8,
      medium: 3,
    },
    {
      label: "6",
      R: 342.663,
      d: 54.85,
      sd: 33.8,
    },
    {
      label: "7",
      R: 44.773,
      d: 2.3,
      sd: 20.6,
      medium: 4,
    },
    {
      label: "8",
      R: 28.743,
      d: 9.32,
      sd: 20.6,
      medium: 5,
    },
    {
      label: "9",
      R: 577.155,
      d: 3.5,
      sd: 20.6,
    },
    {
      label: "STO",
      R: "flat",
    },
    {
      label: "10",
      R: 240.82,
      d: 6.3,
      sd: 15.8,
      medium: 6,
    },
    {
      label: "11",
      R: -70.504,
      d: 2.8,
      sd: 15.8,
      medium: 7,
    },
    {
      label: "12",
      R: 32.934,
      sd: 15.8,
    },
    {
      label: "13",
      R: -44.149,
      d: 3.5,
      sd: 17.6,
      medium: 8,
    },
    {
      label: "14",
      R: -38.307,
      d: 56.93,
      sd: 17.6,
    },
  ],
  focus: {
    closeFocusM: 1.4,
    published: [1],
    description:
      "Inner focus: the cemented negative third group moves toward the image while the stop stays fixed with the second group, between the printed infinity and closest-focus spacings of Table 7.",
  },
  gaps: {
    STO: { label: "D9b", values: [[3.5, 14.79]] },
    "12": { label: "D12", values: [[56.96, 45.67]] },
  },
  aperture: {
    nominalFNumber: 4.1,
    fStops: [4.1, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
