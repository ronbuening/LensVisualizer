import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Grade B patent-family reconstruction; factory example identity unproved.
 * Literal helium-d prescription retained with explicit uniform scale; fixed infinity plane.
 * Missing clear caps and stop coordinates were frozen from source figures and analytic
 * geometry before tracing. No contrast-driven retuning or finite-focus prescription.
 */
const LENS_DATA = {
  schema: 2,
  key: "voigtlander-skoparon-35mm-f35",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER SKOPARON 35mm f/3.5",
  subtitle: "US 2,746,351 A Table 2; Grade B probable family; inferred iris/caps; static infinity only.",
  catalog: {
    lensMounts: ["voigtlander-prominent"],
    imageFormat: "135-full-frame",
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      marketing: 35.0,
      design: 35.0,
    },
    fNumber: {
      marketing: 3.5,
      design: 3.4,
    },
    specs: [
      "Patent-based reconstruction; exact factory prescription unproved",
      "Inferred clear apertures and stop location; clipping conditional on these hypotheses",
      "Infinity only; no finite-focus law",
      "Patent field absent; maker approximate full field 63.0° is an external operating-envelope hypothesis",
      "Table2 F3.4 retained versus figure/retailF3.5; uniform35× model",
      "Image plane independently derived; no printed back focus",
    ],
  },
  source: {
    patentNumber: "US 2,746,351 A",
    example: {
      label: "Table 2",
      id: "2",
    },
    patentYear: 1956,
    authors: ["Albrecht Wilhelm Tronnier"],
    assignees: ["Voigtländer AG"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.46522,
      vd: 65.2,
      indexReference: "d",
      glass: "FK3 (Schott; nearest catalog row to patent nd 1.46522, νd 65.2; production glass unspecified)",
      focalLengthMm: -203.58475365320373,
      role: "Literal patent element; isolated paraxial power is descriptive, not an independently removable cemented-group power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.6577,
      vd: 51.2,
      indexReference: "d",
      glass: "N-SSK5 (Schott; nearest catalog row to patent nd 1.65770, νd 51.2; production glass unspecified)",
      focalLengthMm: 16.003573057625058,
      role: "Literal patent element; isolated paraxial power is descriptive, not an independently removable cemented-group power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.60266,
      vd: 38.4,
      indexReference: "d",
      glass: "F5 (Schott; nearest catalog row to patent nd 1.60266, νd 38.4; production glass unspecified)",
      focalLengthMm: -11.528292048655821,
      role: "Literal patent element; isolated paraxial power is descriptive, not an independently removable cemented-group power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5836,
      vd: 46.2,
      indexReference: "d",
      glass: "J-BAF3 (Hikari; nearest catalog row to patent nd 1.58360, νd 46.2; production glass unspecified)",
      focalLengthMm: -17.34563237078953,
      role: "Literal patent element; isolated paraxial power is descriptive, not an independently removable cemented-group power.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.69347,
      vd: 53.5,
      indexReference: "d",
      glass: "LAC13 (HOYA catalog equivalent; production supplier unspecified)",
      focalLengthMm: 9.921142686918285,
      role: "Literal patent element; isolated paraxial power is descriptive, not an independently removable cemented-group power.",
      cemented: "D1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 29.17215,
      d: 1.8931499999999999,
      sd: 14.2,
      medium: 1,
    },
    {
      label: "2",
      R: 21.84315,
      d: 13.29895,
      sd: 14.2,
    },
    {
      label: "3",
      R: 10.525549999999999,
      d: 2.177,
      sd: 6.1,
      medium: 2,
    },
    {
      label: "4",
      R: "flat",
      d: 1.3251,
      sd: 6.1,
    },
    {
      label: "5",
      R: -23.3793,
      d: 0.7098,
      sd: 5.6,
      medium: 3,
    },
    {
      label: "6",
      R: 9.9981,
      d: 1.2919725,
      sd: 5.6,
    },
    {
      label: "STO",
      R: "flat",
      d: 0.6956775,
    },
    {
      label: "7",
      R: -84.5159,
      d: 0.4732,
      sd: 5.4,
      medium: 4,
    },
    {
      label: "8",
      R: 11.5241,
      d: 2.4135999999999997,
      sd: 5.4,
      medium: 5,
    },
    {
      label: "9",
      R: -15.60825,
      d: 32.280022919424226,
      sd: 5.4,
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Static infinity only. Fixed image z56.5584729194mm; source and maker focus descriptions do not establish an authored finite law. No retail distance transplanted.",
  },
  aperture: {
    nominalFNumber: 3.4,
    fStops: [3.4, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 63.0,
    maxTraceFieldDeg: 31.5,
  },
  layout: {
    yScFill: 0.78,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
