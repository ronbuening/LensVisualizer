import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "durand-us2383115-example1-infinity-reference",
  maker: null,
  name: "MILO DURAND US2383115 EXAMPLE I \u2014 SOURCE f/6",
  subtitle:
    "Patent-only symmetric 4E/4G \u00b7 sodium-D infinity \u00b7 estimated iris/rims",
  visible: false,
  source: {
    patentNumber: "US 2,383,115",
    patentYear: 1945,
    example: {
      label: "Example I",
      id: "1",
    },
    authors: ["Milo Durand"],
    assignees: ["C. P. Goerz American Optical"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 6,
    },
    elementCount: 4,
    groupCount: 4,
    specs: [
      "Literal symmetric4E4G ExampleI/Fig1 menisci,no cements. R signs are global relative to raytravel; source localconvex/concave labels are not substituted. No retail/specimen identity.",
      "Source sodium-D n/V retained,unmatchedglass and no calibrated broadband.",
      "Literal EFL99.980685777/BFD90.536134447mm versus source100/f6. BFDcomputed/unprinted,no fitting or source edits.",
      "Central exact7.366mm airgap preserved; midpoint3.683/3.683,z9.891,iris and clearcaps estimated,not measured source hardware.",
      "Saved source/controlf6 uses ordinary-prime paraxial-derived iris;7.088919mm finite-marginal seed compared separately,not silently forced. Actual finite equivalent and nominal differ.",
      "Actual +/-10deg diagnostic only,no invented format,sourcewidefield,retail,finitefocus,broadband or throughput claim.",
      "Reference geometric sodium-D MTF only at fractions within10deg;wider automatic/spectral outputs unqualified.",
      "Original signed primary transcription/hash externally visually verified;no localPDF,pixels,rehash or known denied route retry. NBSexperimental family context is not specimen identity.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.588,
      vd: 53.4,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair; no calibrated spectral curve.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.636,
      vd: 34.8,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair; no calibrated spectral curve.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.636,
      vd: 34.8,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair; no calibrated spectral curve.",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.588,
      vd: 53.4,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair; no calibrated spectral curve.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 20.118,
      d: 4.84,
      sd: 12,
      medium: 1,
    },
    {
      label: "2",
      R: 55.801,
      d: 0.316,
      sd: 12,
    },
    {
      label: "3",
      R: 25.089,
      d: 1.052,
      sd: 11,
      medium: 2,
    },
    {
      label: "4",
      R: 15.196,
      d: 3.683,
      sd: 9.45,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.683,
    },
    {
      label: "5",
      R: -15.196,
      d: 1.052,
      sd: 9.45,
      medium: 3,
    },
    {
      label: "6",
      R: -25.089,
      d: 0.316,
      sd: 11,
    },
    {
      label: "7",
      R: -55.801,
      d: 4.84,
      sd: 12,
      medium: 4,
    },
    {
      label: "8",
      R: -20.118,
      d: 90.53613444689076,
      sd: 12,
    },
  ],
  aperture: {
    nominalFNumber: 6,
    fStops: [6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
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
      "Literal symmetric4E4G ExampleI/Fig1 menisci,no cements. R signs are global relative to raytravel; source localconvex/concave labels are not substituted. No retail/specimen identity. Source sodium-D n/V retained,unmatchedglass and no calibrated broadband. Literal EFL99.980685777/BFD90.536134447mm versus source100/f6. BFDcomputed/unprinted,no fitting or source edits. Central exact7.366mm airgap preserved; midpoint3.683/3.683,z9.891,iris and clearcaps estimated,not measured source hardware. Saved source/controlf6 uses ordinary-prime paraxial-derived iris;7.088919mm finite-marginal seed compared separately,not silently forced. Actual finite equivalent and nominal differ. Actual +/-10deg diagnostic only,no invented format,sourcewidefield,retail,finitefocus,broadband or throughput claim. Reference geometric sodium-D MTF only at fractions within10deg;wider automatic/spectral outputs unqualified. Original signed primary transcription/hash externally visually verified;no localPDF,pixels,rehash or known denied route retry. NBSexperimental family context is not specimen identity.",
  },
  groups: [
    {
      text: "G1 \u00b7 L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 \u00b7 L2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "G3 \u00b7 L3",
      fromSurface: "5",
      toSurface: "6",
    },
    {
      text: "G4 \u00b7 L4",
      fromSurface: "7",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
