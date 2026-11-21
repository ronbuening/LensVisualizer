import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "schade-us2259004-infinity-reference",
  maker: null,
  name: "WILLY SCHADE US2259004 \u2014 SOURCE f/1.5",
  subtitle:
    "Patent-only 7E/4G \u00b7 sodium-D infinity \u00b7 estimated iris/rims",
  visible: false,
  source: {
    patentNumber: "US 2,259,004",
    patentYear: 1941,
    example: {
      label: "Figure 1",
      id: "1",
    },
    authors: ["Willy Schade"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 1.5,
    },
    elementCount: 7,
    groupCount: 4,
    specs: [
      "Literal100mm f/1.5 patent-only7E/4G 1|2+3|4|5+6+7, cementR4/R9/R10. No production Ektar attribution.",
      "Source sodium-D n/V retained; no calibrated broadband or modern glass match.",
      "Literal EFL100.025778598/BFD46.997125373mm, computed BFD unprinted, no fitting or focus correction.",
      "Stop in source diaphragm gap afterR7; axial split12.50/2.11,z55.37 and all caps estimated. Source physical bore and field not numeric.",
      "Saved nominal/control f1.5 uses ordinary-prime paraxial-derived iris; supplied finite-marginal seed20.198021mm remains separately compared.",
      "Chosen +/-10deg native diagnostic only, no invented imageformat or imagecircle. Source12deg bench not coverage.",
      "Quantitative MTF only at sodiumD, geometric, design plane, requested actual fields within10deg. Wider automatic analyses, finite focus, broadband and retail claims unqualified.",
      "Primary original signed transcription/hash externally verified; no local facsimile pixels. Locally read patent prose corroborates topology via Google Patents.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.618,
      vd: 53.8,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D/Abbe pair; no calibrated spectral curve.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.568,
      vd: 42.7,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.637,
      vd: 55.7,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.672,
      vd: 32.2,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D/Abbe pair; no calibrated spectral curve.",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.637,
      vd: 55.7,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "T1",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Source Spherical Element",
      nd: 1.522,
      vd: 50.7,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "T1",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Source Spherical Element",
      nd: 1.671,
      vd: 47,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "T1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 73.3,
      d: 12.77,
      sd: 37,
      medium: 1,
    },
    {
      label: "2",
      R: 425.8,
      d: 0.56,
      sd: 37,
    },
    {
      label: "3",
      R: 58.8,
      d: 5.62,
      sd: 35,
      medium: 2,
    },
    {
      label: "4",
      R: 33.7,
      d: 15.38,
      sd: 29.5,
      medium: 3,
    },
    {
      label: "5",
      R: 151.3,
      d: 5.17,
      sd: 30,
    },
    {
      label: "6",
      R: -303.7,
      d: 3.37,
      sd: 29,
      medium: 4,
    },
    {
      label: "7",
      R: 32.8,
      d: 12.5,
      sd: 22.7,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.11,
    },
    {
      label: "8",
      R: 118,
      d: 18.36,
      sd: 25,
      medium: 5,
    },
    {
      label: "9",
      R: -30.6,
      d: 3.37,
      sd: 25,
      medium: 6,
    },
    {
      label: "10",
      R: 67.4,
      d: 11.23,
      sd: 30,
      medium: 7,
    },
    {
      label: "11",
      R: -125.9,
      d: 46.99712537317792,
      sd: 30,
    },
  ],
  aperture: {
    nominalFNumber: 1.5,
    fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 20,
    maxTraceFieldDeg: 10,
  },
  rays: {
    offAxisFieldFrac: 1,
  },
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Literal100mm f/1.5 patent-only7E/4G 1|2+3|4|5+6+7, cementR4/R9/R10. No production Ektar attribution. Source sodium-D n/V retained; no calibrated broadband or modern glass match. Literal EFL100.025778598/BFD46.997125373mm, computed BFD unprinted, no fitting or focus correction. Stop in source diaphragm gap afterR7; axial split12.50/2.11,z55.37 and all caps estimated. Source physical bore and field not numeric. Saved nominal/control f1.5 uses ordinary-prime paraxial-derived iris; supplied finite-marginal seed20.198021mm remains separately compared. Chosen +/-10deg native diagnostic only, no invented imageformat or imagecircle. Source12deg bench not coverage. Quantitative MTF only at sodiumD, geometric, design plane, requested actual fields within10deg. Wider automatic analyses, finite focus, broadband and retail claims unqualified. Primary original signed transcription/hash externally verified; no local facsimile pixels. Locally read patent prose corroborates topology via Google Patents.",
  },
  groups: [
    {
      text: "G1 \u00b7 L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 \u00b7 L2+L3",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "G3 \u00b7 L4",
      fromSurface: "6",
      toSurface: "7",
    },
    {
      text: "G4 \u00b7 L5+L6+L7",
      fromSurface: "8",
      toSurface: "11",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
