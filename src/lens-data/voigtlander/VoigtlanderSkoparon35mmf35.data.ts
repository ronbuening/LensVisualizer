import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** VOIGTLÄNDER SKOPARON 35mm f/3.5 (Prominent): US 2,746,351 A, Table 2 / Fig. 4 (A. W. Tronnier).
 * Table 2 is normalized to f = 1.000; every length is scaled ×35. Indices are the patent's helium d-line values.
 * Table 2 states 1:3.4 (effective aperture 0.294 f); Fig. 4 and the production lens are f/3.5. The iris opens to f/3.4.
 * The patent prints no back focus, field angle, stop position or semi-diameters. Back focus (32.28 mm) is computed from
 * the prescription; the 63° full field is Voigtländer's figure; the stop sits 65% of the way through the diaphragm
 * space a3, as drawn in Fig. 4; semi-diameters are inferred from Fig. 4 proportions and floor-checked by real-ray
 * trace. The L1 rear face (13.3 mm) and L4 front face (4.8 mm) end where Fig. 4 bevels them, and the L3 rear face is
 * cut to 4.85 mm so it stays in front of the stop plane. No close-focus spacing is printed, so the model is static.
 */
const LENS_DATA = {
  schema: 2,
  key: "voigtlander-skoparon-35mm-f35",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER SKOPARON 35mm f/3.5",
  subtitle: "US 2,746,351 A — Table 2; patent design matching the Prominent Skoparon",
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
    specs: ["5 ELEMENTS / 4 GROUPS", "DESIGN f = 35 mm", "DESIGN F/3.4", "ALL SPHERICAL"],
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
      glass: "Unmatched (patent nd 1.46522, νd 65.2; the nearest catalog row, FK3, is 0.57 off in νd)",
      focalLengthMm: -203.58475365320373,
      role: "Low-index fluor-crown negative front meniscus (member I), separated from the converging group by the long air space A.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.6577,
      vd: 51.2,
      indexReference: "d",
      glass: "Unmatched (patent nd 1.65770, νd 51.2; the nearest catalog rows, N-SSK5 and S-BSM25, are 0.32 off in νd)",
      focalLengthMm: 16.003573057625058,
      role: "High-index plano-convex front element of the converging group II; its convex face closes the air space A.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.60266,
      vd: 38.4,
      indexReference: "d",
      glass: "Unmatched (patent nd 1.60266, νd 38.4; the nearest catalog rows, F5 and E-F5, are 0.37 off in νd)",
      focalLengthMm: -11.528292048655821,
      role: "Biconcave negative element of group II, directly ahead of the diaphragm.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5836,
      vd: 46.2,
      indexReference: "d",
      glass: "S-BAM3 (OHARA; nearest catalog row to patent nd 1.58360, νd 46.2; production glass unspecified)",
      focalLengthMm: -17.34563237078953,
      role: "Biconcave negative front element of the rear cemented doublet, behind the diaphragm.",
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
      role: "Biconvex positive rear element of the cemented doublet and the strongest positive element in the lens.",
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
      sd: 13.3,
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
      sd: 4.85,
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
      sd: 4.8,
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
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "9" },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  focus: {
    closeFocusM: 0.7,
    description:
      "Static model at infinity. The patent prints no close-focus spacing. Voigtländer's Prominent lens booklet says the Skoparon couples automatically to the camera's built-in rangefinder, and its distance scale runs to 0.7 m. The booklet does not say which part moves to focus, so no focus movement is drawn.",
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
