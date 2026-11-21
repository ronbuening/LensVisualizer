import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "bielicke-us1888156-infinity-reference",
  maker: null,
  name: "WILLY F. BIELICKE US1888156 — SOURCE f/2.5",
  subtitle: "Patent-only5E/4G · sodium-D infinity · estimated stock iris/rims",
  visible: false,
  source: {
    patentNumber: "US 1,888,156",
    patentYear: 1932,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Willy F. Bielicke"],
    assignees: [],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2.5,
    },
    elementCount: 5,
    groupCount: 4,
    specs: [
      "Literal sole100mm f2.5 patent design,5E/4G,onlyR6cement and genuine R2plane. No retail Astrar identity.",
      "Explicit sodium-D589.2938nm/Abbe pairs retained. Separately printed uppercaseG is not assigned a wavelength or mapped to lowercaseg; no calibrated broadband or exact catalog glass.",
      "Literal EFL99.901557811mm/BFD78.275003977mm computed without fit/rescale. BFD is not source-prescribed.",
      "Stop split5.4/3.8 in literal9.2mm gap,z26.4 and all caps estimated. No source physical iris or field.",
      "Saved source/catalog/controlf2.5 derives stock irisradius15.268999696mm. Supplied15.819945mm is the finite nominal marginal witness/sensitivity, not forced; exact literal finite nominal maps15.819945087mm.",
      "Chosen actual native+/-10deg diagnostic, no source format/imagecircle. Relayed+/-20deg bench is separate, not native/source coverage.",
      "Reference-line geometric MTF only through native API field fractions within10deg where needed; wider automatic MTF, finite focus, broadband and factory claims unqualified.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.658,
      vd: 51.4,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D/Abbe pair; uppercaseG not mapped, no calibrated spectral curve.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.6741,
      vd: 32.0,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D/Abbe pair; uppercaseG not mapped, no calibrated spectral curve.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.5821,
      vd: 42.0,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D/Abbe pair; uppercaseG not mapped, no calibrated spectral curve.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.658,
      vd: 51.4,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D/Abbe pair; uppercaseG not mapped, no calibrated spectral curve.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.6513,
      vd: 38.3,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D/Abbe pair; uppercaseG not mapped, no calibrated spectral curve.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 42.2,
      d: 7.2,
      sd: 23,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 11.4,
      sd: 23,
    },
    {
      label: "3",
      R: -65.4,
      d: 2.4,
      sd: 22,
      medium: 2,
    },
    {
      label: "4",
      R: 42.9,
      d: 5.4,
      sd: 19,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.8,
    },
    {
      label: "5",
      R: -213.1,
      d: 2.4,
      sd: 20,
      medium: 3,
    },
    {
      label: "6",
      R: 36.7,
      d: 9.6,
      sd: 19,
      medium: 4,
    },
    {
      label: "7",
      R: -52.1,
      d: 1.1,
      sd: 19,
    },
    {
      label: "8",
      R: 252.5,
      d: 4.8,
      sd: 22,
      medium: 5,
    },
    {
      label: "9",
      R: -252.5,
      d: 78.27500397669294,
      sd: 22,
    },
  ],
  aperture: {
    nominalFNumber: 2.5,
    fStops: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22],
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
    closeFocusM: 1000000000000000.0,
    description:
      "Private WillyF.Bielicke US1888156 sole100mm f2.5 patent-only5E/4G sodiumD589.2938 infinity,onlyR6cement andR2opticalplane. EFL99.901557811/BFD78.275003977mm calculated from literal source, BFDunprinted,no fit/rescale. Estimated stop5.4/3.8,z26.4 and clear caps. Source/controlf2.5 preserved under ordinary-prime paraxial stop convention: stock irisR15.268999696mm; supplied finite marginal15.819945mm is a separate unprinted estimate/sensitivity, not silently forced. Actual finite pupil metrics are separate from nominal. Chosen+/-10degree native diagnostic only,no invented format,retailAstrar,finite,calibratedbroadband or wider claim. UppercaseG convention unverified,never encoded as lowercaseg. Scoped nativeAPI reference-line geometric MTF only; automatic wider/Abbe spectral outputs unqualified. Original signed primary source/pin externally supplied,no local originalPDF/pixels/rehash or denied-route retry.",
  },
  groups: [
    {
      text: "G1 · L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 · L2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "G3 · L3+L4",
      fromSurface: "5",
      toSurface: "7",
    },
    {
      text: "G4 · L5",
      fromSurface: "8",
      toSurface: "9",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
