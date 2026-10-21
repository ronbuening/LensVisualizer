import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * DE1258134B Example I / claim 2, original convertible Sironar 100mm f/5.6.
 * Qualified patent correlation only; not the later non-convertible Sironar-N.
 * Source ne/Ve and every finite radius/thickness are literal. Uniform scale1.
 * Printed image interval83.5 is retained, despite computed Gaussian BFD83.699268.
 * Source stop station splits10.1 into5.3+4.8; physical iris radius is calibrated.
 * Clear apertures are inferred from Figure1 and axial/geometry checks, not factory.
 * NO_INTERNAL_RECONSTRUCTION: no finite focus law or published finite state.
 * closeFocusM10 is only a required UI placeholder, NOT a source/product MFD.
 * No full dispersion curve, APO certification, integration or publication claim.
 */
const LENS_DATA = {
  schema: 2,
  key: "rodenstock-sironar-100mm-f56-convertible",
  maker: "Rodenstock",
  name: "RODENSTOCK SIRONAR 100mm f/5.6 (Original convertible)",
  subtitle: "DE1258134B Example I / claim 2; original convertible version, not Sironar-N",
  visible: false,
  catalog: {
    lensMounts: ["large-format-lens-board"],
    imageCircleMm: 127,
    elementCount: 6,
    groupCount: 4,
    specs: [
      "Original convertible version, qualified patent correlation",
      "Source n_e and nu_e; no confirmed factory melts",
      "127mm circle: one maker wide-open specification, not patent-certified",
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
    patentNumber: "DE 1258134 B",
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
      glass: "Unidentified historical melt (source ne=1.6055, Ve=60.5; catalog equivalents not adopted)",
      role: "Outer front crown component of cemented doublet.",
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
      glass: "Unmatched (ne=1.5543, Ve=49.3)",
      role: "Inner divergent front doublet member; patent anomalous-dispersion claim, no validated full spectrum.",
      cemented: "D1",
      apd: "patent",
      apdNote:
        "Patent specifies anomalous partial dispersion for divergent doublet members, preferably short flint. No actual melt or partial-dispersion curve identified; the claim is not a validated APO result.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.5201,
      vd: 65,
      indexReference: "e",
      glass: "Unidentified historical melt (source ne=1.5201, Ve=65.0; catalog equivalents not adopted)",
      role: "Front positive meniscus adjacent to stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.5201,
      vd: 65,
      indexReference: "e",
      glass: "Unidentified historical melt (source ne=1.5201, Ve=65.0; catalog equivalents not adopted)",
      role: "Rear positive meniscus adjacent to stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.5543,
      vd: 49.3,
      indexReference: "e",
      glass: "Unmatched (ne=1.5543, Ve=49.3)",
      role: "Inner divergent rear doublet member; patent anomalous-dispersion claim, no validated full spectrum.",
      cemented: "D2",
      apd: "patent",
      apdNote:
        "Patent specifies anomalous partial dispersion for divergent doublet members, preferably short flint. No actual melt or partial-dispersion curve identified; the claim is not a validated APO result.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6055,
      vd: 60.5,
      indexReference: "e",
      glass: "Unidentified historical melt (source ne=1.6055, Ve=60.5; catalog equivalents not adopted)",
      role: "Outer rear crown component of cemented doublet.",
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
      sd: 9.3,
    },
    {
      label: "4",
      R: 20.2,
      d: 1.89,
      sd: 9.3,
      medium: 3,
    },
    {
      label: "5",
      R: 31.94,
      d: 5.3,
      sd: 9.3,
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
      sd: 8.5,
      medium: 4,
    },
    {
      label: "7",
      R: -25.83,
      d: 1.63,
      sd: 8.5,
    },
    {
      label: "8",
      R: -14.93,
      d: 1.66,
      sd: 8.5,
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
      d: 83.5,
      sd: 10.6,
    },
  ],
  focus: {
    // Required UI placeholder only: not a source or manufacturer MFD.
    closeFocusM: 10,
    description:
      "NO_INTERNAL_RECONSTRUCTION: only the fixed infinity prescription is modeled. The required closeFocusM=10 is a nonphysical UI placeholder, not a source or product MFD, and no finite state or movement law is claimed.",
  },
  aperture: {
    nominalFNumber: 5.6,
    fStops: [5.6, 8, 11, 16, 22, 32, 45],
    maxFNumber: 45,
  },
  layout: {
    yScFill: 0.7,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
