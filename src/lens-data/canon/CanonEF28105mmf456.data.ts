import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Original US 2004/0223070 A1, Numerical Example 4. Reviewed 2026-10-30.
 * Source L5 is a protective lens unit, restored with physical D18 and plate thickness.
 * Rear image gaps and finite 0.48 m focus endpoints are derived, not published.
 * Printed design f/3.95–5.85 is distinct from marketed f/4–5.6; middle f/5 is inferred.
 * Clear apertures and blank outlines are inferred; no historical supplier or resin chemistry is proved.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-ef-28-105mm-f4-56",
  maker: "Canon",
  name: "CANON EF 28-105mm f/4-5.6",
  subtitle: "US 2004/0223070 A1 — Numerical Example 4 (strong production correlation)",
  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "10 ELEMENTS / 9 GROUPS",
      "PATENT 28.90-101.35mm",
      "MARKETED 28-105mm f/4-5.6",
      "1 ASPHERICAL SURFACE",
      "L2 INNER FOCUS",
    ],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: {
      marketing: [28, 105],
      design: [28.9, 101.35],
    },
    fNumber: {
      marketing: 4,
      design: 3.95,
    },
  },
  source: {
    patentNumber: "US 2004/0223070 A1",
    example: {
      label: "Numerical Example 4",
      id: "4",
    },
    patentYear: 2004,
    authors: ["Takashi Shirasuna"],
    assignees: ["Canon Inc."],
  },
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Biconvex Positive",
      nd: 1.696797,
      vd: 55.5,
      focalLengthMm: 59.618004,
      glass: "S-LAL14 (OHARA catalog equivalent; qualified spectral proxy; historical supplier unconfirmed, 697-555)",
      role: "Positive front member of the cemented first zoom unit.",
      cemented: "D1",
      indexReference: "d",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -140.766816,
      glass:
        "PBH53 / PBH53W (OHARA historical equivalent; qualified spectral proxy; historical supplier unconfirmed, 847-239)",
      role: "Dense-flint negative member of the cemented front achromat.",
      cemented: "D1",
      indexReference: "d",
    },
    {
      id: 3,
      name: "L21",
      label: "Element L21",
      type: "Negative Meniscus",
      nd: 1.743198,
      vd: 49.3,
      focalLengthMm: -21.553528,
      glass: "S-LAM60 (OHARA catalog equivalent; qualified spectral proxy; historical supplier unconfirmed, 743-493)",
      role: "Leading negative member of the high-power L2 variator/focus unit.",
      indexReference: "d",
    },
    {
      id: 4,
      name: "L22",
      label: "Element L22",
      type: "Biconcave Negative",
      nd: 1.712995,
      vd: 53.9,
      focalLengthMm: -27.862292,
      glass: "S-LAL8 (OHARA catalog equivalent; qualified spectral proxy; historical supplier unconfirmed, 713-539)",
      role: "Second negative member of L2; air-spaced from the positive rear member.",
      indexReference: "d",
    },
    {
      id: 5,
      name: "L23",
      label: "Element L23",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 29.525715,
      glass:
        "PBH53 / PBH53W (OHARA historical equivalent; qualified spectral proxy; historical supplier unconfirmed, 847-239)",
      role: "Positive, high-dispersion rear member that balances the two negative L2 elements.",
      indexReference: "d",
    },
    {
      id: 6,
      name: "L31",
      label: "Element L31",
      type: "Biconvex Positive",
      nd: 1.696797,
      vd: 55.5,
      focalLengthMm: 33.78886,
      glass: "S-LAL14 (OHARA catalog equivalent; qualified spectral proxy; historical supplier unconfirmed, 697-555)",
      role: "Principal positive member of the L3 compensator immediately behind the stop.",
      indexReference: "d",
    },
    {
      id: 7,
      name: "L32",
      label: "Element L32",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -45.391699,
      glass:
        "PBH53 / PBH53W (OHARA historical equivalent; qualified spectral proxy; historical supplier unconfirmed, 847-239)",
      role: "Negative chromatic partner in the net-positive L3 compensator.",
      indexReference: "d",
    },
    {
      id: 8,
      name: "L41",
      label: "Element L41",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 29.597915,
      glass: "S-FSL5 (OHARA catalog equivalent; qualified spectral proxy; historical supplier unconfirmed, 487-702)",
      role: "Low-dispersion positive element supplying most of L4's net positive power.",
      indexReference: "d",
    },
    {
      id: 9,
      name: "L42",
      label: "Element L42",
      type: "Negative Meniscus (rear asphere)",
      nd: 1.58306,
      vd: 30.2,
      focalLengthMm: -117.511869,
      glass:
        "POLYCARB (published MISC catalog; qualified numerical polymer proxy; source chemistry and supplier unspecified)",
      role: "Negative rear member of L4 with published aspherical surface 18; the original does not identify Example 4 chemistry.",
      indexReference: "d",
    },
    {
      id: 10,
      name: "L51",
      label: "Protective plate L5",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      glass: "S-BSL7 (qualified 517641 spectral proxy; historical supplier unconfirmed)",
      role: "Published fixed fifth lens unit protects the exposed rear aspherical member; included with physical source thickness and spacing.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 55.383,
      d: 7.43,
      sd: 21.5,
      medium: 1,
    },
    {
      label: "2",
      R: -157.062,
      d: 1.8,
      sd: 21.5,
      medium: 2,
    },
    {
      label: "3",
      R: 496.755,
      sd: 21.5,
    },
    {
      label: "4",
      R: 204.758,
      d: 1.4,
      sd: 13.6,
      medium: 3,
    },
    {
      label: "5",
      R: 14.813,
      d: 5.47,
      sd: 10.8,
      rimExtensionSd: 13.6,
    },
    {
      label: "6",
      R: -57.982,
      d: 1.1,
      sd: 10.1,
      medium: 4,
    },
    {
      label: "7",
      R: 30.458,
      d: 0.12,
      sd: 10.1,
    },
    {
      label: "8",
      R: 23.898,
      d: 3.39,
      sd: 10,
      medium: 5,
    },
    {
      label: "9",
      R: 507.665,
      sd: 10,
    },
    {
      label: "STO",
      R: "flat",
      d: 0.4,
    },
    {
      label: "11",
      R: 36.033,
      d: 2.42,
      sd: 7.05,
      medium: 6,
    },
    {
      label: "12",
      R: -66.055,
      d: 0.42,
      sd: 7.05,
    },
    {
      label: "13",
      R: -33.405,
      d: 1,
      sd: 7.07,
      medium: 7,
    },
    {
      label: "14",
      R: -258.92,
      sd: 7.07,
    },
    {
      label: "15",
      R: 18.494,
      d: 3.74,
      sd: 7.7,
      medium: 8,
    },
    {
      label: "16",
      R: -61.289,
      d: 9.58,
      sd: 7.7,
    },
    {
      label: "17",
      R: -27.49,
      d: 1.8,
      sd: 9.0,
      medium: 9,
    },
    {
      label: "18A",
      R: -47.017,
      sd: 9.0,
      asphere: {
        K: -2.18133,
        A4: 0.0000567081,
        A6: 3.13412e-7,
        A8: -4.03611e-10,
        A10: 2.29649e-12,
      },
    },
    {
      label: "19",
      R: "flat",
      d: 1,
      sd: 14.5,
      medium: 10,
    },
    {
      label: "20",
      R: "flat",
      sd: 14.5,
    },
  ],
  zoom: {
    stations: [
      {
        focalLengthMm: 28.9,
        nominalFNumber: 3.95,
        label: "28 mm",
      },
      {
        focalLengthMm: 50.07,
        nominalFNumber: 5,
      },
      {
        focalLengthMm: 101.35,
        nominalFNumber: 5.85,
        label: "105 mm",
      },
    ],
    step: 0.004,
  },
  focus: {
    closeFocusM: 0.48,
    description:
      "Inner focus by rigid L2 translation. Published infinity D3/D9 retained; finite endpoints are independent paraxial 0.48 m image-plane conjugates with physical source L5 restored, not patent or production cam measurements.",
  },
  gaps: {
    "3": {
      label: "D3 / L1-L2",
      values: [
        [3.39, 1.060566850257842],
        [13.42, 10.303131295911165],
        [33.36, 26.935538551785584],
      ],
    },
    "9": {
      label: "D9 / L2-STO",
      values: [
        [19.23, 21.55943314974216],
        [10.24, 13.356868704088836],
        [2.62, 9.044461448214417],
      ],
    },
    "14": {
      label: "D14 / L3-L4",
      values: [
        [7.25, 7.25],
        [3.27, 3.27],
        [0.79, 0.79],
      ],
    },
    "20": {
      label: "BF / derived after physical L5",
      values: [
        [38.38649516030808, 38.38649516030808],
        [38.39278951401993, 38.39278951401993],
        [38.373018403367745, 38.373018403367745],
      ],
    },
    "18A": {
      label: "D18 / L4–L5",
      values: [
        [0.83, 0.83],
        [13.15, 13.15],
        [25.24, 25.24],
      ],
    },
  },
  aperture: {
    fStops: [3.95, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
    blades: 6,
  },
  groups: [
    {
      text: "L1 (+)",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "L2 (-) / FOCUS",
      fromSurface: "4",
      toSurface: "9",
    },
    {
      text: "L3 (+) / STOP CARRIER",
      fromSurface: "11",
      toSurface: "14",
    },
    {
      text: "L4 (+) / ASPH",
      fromSurface: "15",
      toSurface: "18A",
    },
    {
      text: "L5 / FIXED PROTECTIVE PLATE",
      fromSurface: "19",
      toSurface: "20",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "1",
      toSurface: "3",
    },
  ],
  layout: {
    scFill: 0.7,
    yScFill: 0.72,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
