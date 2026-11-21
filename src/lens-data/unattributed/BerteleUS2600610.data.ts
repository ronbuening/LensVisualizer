import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "bertele-us2600610-example1-infinity-reference",
  maker: null,
  name: "BERTELE US2600610 EXAMPLE I \u2014 SOURCE f/1.44",
  subtitle: "Patent-only 7E/3G \u00b7 helium-d infinity / estimated iris-rims",
  visible: false,
  source: {
    patentNumber: "US 2,600,610",
    patentYear: 1952,
    example: {
      label: "Example I",
      id: "1",
    },
    authors: ["Ludwig Bertele"],
    assignees: [],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 1.44,
    },
    elementCount: 7,
    groupCount: 3,
    specs: [
      "Literal7E3G1|2+3+4|5+6+7, cementsR4/R5/R8/R9. Lowercasehelium-d source indices/Abbe retained,not sodiumD. Source100/f1.44 versus literalEFL99.965654825/BFD43.697807592mm,no fit/glass change.",
      "Source diaphragm B1 inS2 afterR6. Exact14.9mm air gap retained;estimated14.3/.6split,z45.55,estimatedboreandclearcaps,no factorydimensions.",
      "Savednominal/controlf1.44 derivesparaxialiris;finite-marginalR19.714780918mm separate,actualfinite equivalents documented. No cap forcing,trim,overrides,extra plate or baffle.",
      "Actualnative atmost+/-5degree helium-d infinity only. Genericchromatic/broadband,diffraction,widerautomaticMTF,fullpupil,retail,format,finitefocus andmeasuredperformance unqualified. Source45degree context not appguarantee.",
      "Originalsignednumbers/hash externalparent/scoutcustody;no localoriginalPDF/pixels/rehash. Officialwebopen inaccessibleonce,noretry. Primaryprosemirror corroborates lowercase d-line/topology/orientation,not numericfacsimile inspection.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.693,
      vd: 43,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly states lowercase d-line. Native helium-d587.5618nm reference; only reference-line optical claims.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.6929,
      vd: 52.4,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly states lowercase d-line. Native helium-d587.5618nm reference; only reference-line optical claims.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
      cemented: "G2",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.4875,
      vd: 70,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly states lowercase d-line. Native helium-d587.5618nm reference; only reference-line optical claims.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
      cemented: "G2",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.7229,
      vd: 28.5,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly states lowercase d-line. Native helium-d587.5618nm reference; only reference-line optical claims.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
      cemented: "G2",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.5112,
      vd: 50.9,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly states lowercase d-line. Native helium-d587.5618nm reference; only reference-line optical claims.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
      cemented: "G3",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Source Spherical Element",
      nd: 1.6666,
      vd: 48.4,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly states lowercase d-line. Native helium-d587.5618nm reference; only reference-line optical claims.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
      cemented: "G3",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Source Spherical Element",
      nd: 1.6072,
      vd: 56.7,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly states lowercase d-line. Native helium-d587.5618nm reference; only reference-line optical claims.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
      cemented: "G3",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 74.44,
      d: 9.5,
      sd: 38,
      medium: 1,
    },
    {
      label: "2",
      R: 443.4,
      d: 0.3,
      sd: 36,
    },
    {
      label: "3",
      R: 36.99,
      d: 11.9,
      sd: 32,
      medium: 2,
    },
    {
      label: "4",
      R: 78.85,
      d: 7.75,
      sd: 30,
      medium: 3,
    },
    {
      label: "5",
      R: -804.6,
      d: 1.8,
      sd: 28,
      medium: 4,
    },
    {
      label: "6",
      R: 24.06,
      d: 14.3,
      sd: 20.8,
    },
    {
      label: "STO",
      R: "flat",
      d: 0.6,
    },
    {
      label: "7",
      R: "flat",
      d: 4.8,
      sd: 22,
      medium: 5,
    },
    {
      label: "8",
      R: 57.47,
      d: 19.5,
      sd: 22,
      medium: 6,
    },
    {
      label: "9",
      R: -22.41,
      d: 5,
      sd: 19.7,
      medium: 7,
    },
    {
      label: "10",
      R: -102.8,
      d: 43.69780759225482,
      sd: 20,
    },
  ],
  aperture: {
    nominalFNumber: 1.44,
    fStops: [1.44, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 10,
    maxTraceFieldDeg: 5,
  },
  rays: {
    offAxisFieldFrac: 1,
  },
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Literal7E3G1|2+3+4|5+6+7, cementsR4/R5/R8/R9. Lowercasehelium-d source indices/Abbe retained,not sodiumD. Source100/f1.44 versus literalEFL99.965654825/BFD43.697807592mm,no fit/glass change. Source diaphragm B1 inS2 afterR6. Exact14.9mm air gap retained;estimated14.3/.6split,z45.55,estimatedboreandclearcaps,no factorydimensions. Savednominal/controlf1.44 derivesparaxialiris;finite-marginalR19.714780918mm separate,actualfinite equivalents documented. No cap forcing,trim,overrides,extra plate or baffle. Actualnative atmost+/-5degree helium-d infinity only. Genericchromatic/broadband,diffraction,widerautomaticMTF,fullpupil,retail,format,finitefocus andmeasuredperformance unqualified. Source45degree context not appguarantee. Originalsignednumbers/hash externalparent/scoutcustody;no localoriginalPDF/pixels/rehash. Officialwebopen inaccessibleonce,noretry. Primaryprosemirror corroborates lowercase d-line/topology/orientation,not numericfacsimile inspection.",
  },
  groups: [
    {
      text: "G1 \u00b7 L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 \u00b7 L2+L3+L4",
      fromSurface: "3",
      toSurface: "6",
    },
    {
      text: "G3 \u00b7 L5+L6+L7",
      fromSurface: "7",
      toSurface: "10",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
