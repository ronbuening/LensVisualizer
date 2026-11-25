import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Private initial JPS5143920 sole-example trial; not qualified or delivered.
 * Literal physical mm:709.0mm powered stack then240.2mm air to plane949.2.
 * No source stop location/radius or rims published: midpoint of659mm air and
 * stated caps are estimates, not factory mechanical geometry. No source fitting. */
const LENS_DATA = {
  schema: 2,
  key: "nikon-pre-ai-nikkor-1200mm-f11-ed",
  maker: "Nikon",
  visible: false,
  name: "NIKON NIKKOR ED 1200mm f/11 Pre-AI",
  subtitle:
    "JPS5143920A sole example; production-associated patent representative, not factory exact",
  source: {
    patentNumber: "JP S51-43920 A",
    patentYear: 1976,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Yoshiyuki Shimizu"],
    assignees: ["Nippon Kogaku K.K."],
    sdSource: "heuristic",
  },
  catalog: {
    lensMounts: ["nikon-f"],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      marketing: 1200,
      design: 1199.7010655236031,
    },
    fNumber: {
      marketing: 11,
      design: 11,
    },
    specs: [
      "5elements/4groups; sole spherical original, not US3774991 or360\u20131200zoom.",
      "Literal709.0mm optical stack,240.2mm rear air, no refocus or rescaling.",
      "Source5deg full field/OEM4deg10min documentary, not validated coverage.",
      "Stop mid659mm gap and optical clear radii explicitly estimated; narrow infinity numerical trial only.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Lens",
      nd: 1.50032,
      vd: 81.9,
      indexReference: "d",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Lens",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Lens",
      nd: 1.62374,
      vd: 47.0,
      indexReference: "d",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Lens",
      nd: 1.51632,
      vd: 64.2,
      indexReference: "d",
      cemented: "D1",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Lens",
      nd: 1.66854,
      vd: 39.2,
      indexReference: "d",
      cemented: "D1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 412.0,
      d: 13.0,
      sd: 61,
      medium: 1,
    },
    {
      label: "2",
      R: -435.3,
      d: 8.0,
      sd: 61,
    },
    {
      label: "3",
      R: -403.2,
      d: 8.0,
      sd: 60,
      medium: 2,
    },
    {
      label: "4",
      R: 445.2,
      d: 2.0,
      sd: 60,
    },
    {
      label: "5",
      R: 396.7,
      d: 10.0,
      sd: 59,
      medium: 3,
    },
    {
      label: "6",
      R: -873.9,
      d: 329.5,
      sd: 59,
    },
    {
      label: "STO",
      R: "flat",
      d: 329.5,
    },
    {
      label: "7",
      R: -195.0,
      d: 2.0,
      sd: 22,
      medium: 4,
    },
    {
      label: "8",
      R: 439.2,
      d: 7.0,
      sd: 22,
      medium: 5,
    },
    {
      label: "9",
      R: -927.5,
      d: 240.2,
      sd: 22,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Only literal static infinity; no focusing-unit translation, finite prescription or IS modeled.",
  },
  aperture: {
    nominalFNumber: 11,
    fStops: [11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 1,
    maxTraceFieldDeg: 0.5,
  },
  rays: {
    offAxisFieldFrac: 0.98,
  },
  layout: {
    yScFill: 0.65,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
