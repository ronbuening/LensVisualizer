import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** US 3,936,153 (Ogura, Minolta), first embodiment: Table I, repeated in claim 2 and drawn in Figure 1.
 * The table is normalized to f = 1.0; every R and d here is the printed value times 35 exactly (paraxial EFL 35.005 mm).
 * Five air-spaced spherical singlets; no aspheres, cover plate or converter.
 * Back focus: the printed 1.06 scales to 37.1 mm and stays as the last gap, so the image plane is at z = 79.107 mm.
 * The computed paraxial value is 37.106 mm; no refocus is applied.
 * Stop: Figure 1 draws no iris and Table I has no stop row. Table II's coefficients place it 0.1639 f behind r4, so d4
 * (11.137 mm) splits 5.7365 + 5.4005 mm and the stop is at z = 29.463 mm. Its radius follows the paraxial stop rule.
 * Semi-diameters are not printed. They are read from Figure 1 at 21.5 px/mm, set by its vertex positions; arc fits give
 * the same scale across the axis, so the drawing is not stretched.
 * G1-G5 are the patent's element designations, from Figure 1 and its text.
 * G2, G4 and G5 keep the drawn square rims. S6 is 7.5 mm inside the 7.4-7.8 mm drawn below and above the axis, and G3
 * and G4 close at that rim as drawn. rimExtensionSd on S2 and S5 draws the flat G1 and G3 edges; each land stands in
 * for a drawn bevel and carries no light.
 * Table I prints N and v without naming a wavelength. Four of its five pairs reproduce catalog nd/vd and none a catalog
 * ne/ve, which establishes the d line by the coordinate test in LENS_DATA_SPEC.md.
 * The patent gives 2w = 64 deg; Minolta lists 63 deg. The 135-format corner, 32.1 deg, is just outside the patent's 32 deg.
 * The patent has an infinity state only: no focus motion is modeled, and closeFocusM is Minolta's stated 0.3 m.
 * This is a patent design associated with the MD 35mm f/2.8, not a confirmed factory prescription.
 */
const LENS_DATA = {
  schema: 2,
  key: "minolta-md-35mm-f28",
  maker: "Minolta",
  name: "MINOLTA MD 35mm f/2.8",
  subtitle: "US 3,936,153, Table I — five-element retrofocus design associated with the MD 35mm f/2.8",
  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 5 GROUPS", "DESIGN f = 35 mm", "DESIGN F/2.8", "ALL SPHERICAL", "PATENT f = 1 SCALED × 35"],
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: {
      marketing: 35,
      design: 35,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
  },
  source: {
    patentNumber: "US 3,936,153",
    example: {
      label: "Embodiment 1",
      id: "1",
    },
    patentYear: 1976,
    authors: ["Toshinobu Ogura"],
    assignees: ["Minolta Camera Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element 1",
      diagramLabel: "G1",
      role: "Front diverging element that creates the long back focus",
      type: "Negative Meniscus",
      nd: 1.5714,
      vd: 53.0,
      indexReference: "d",
      focalLengthMm: -36.40841537550411,
      glass: "S-BAL3 (OHARA catalog equivalent; production supplier unspecified)",
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2",
      diagramLabel: "G2",
      role: "Thick element ahead of the stop, correcting G1's coma, distortion and lateral color",
      type: "Biconvex Positive",
      nd: 1.6583,
      vd: 58.5,
      indexReference: "d",
      focalLengthMm: 25.91416494122884,
      glass: "K-LaK11 spectral proxy (Sumita; lanthanum crown; patent vd 58.5 retained versus catalog 57.3; supplier unconfirmed)",
    },
    {
      id: 3,
      name: "G3",
      label: "Element 3",
      diagramLabel: "G3",
      role: "High-dispersion negative behind the stop, the main spherical and Petzval corrector",
      type: "Biconcave Negative",
      nd: 1.6889,
      vd: 31.2,
      indexReference: "d",
      focalLengthMm: -17.36048337037693,
      glass: "FD8 (HOYA catalog equivalent; production supplier unspecified)",
    },
    {
      id: 4,
      name: "G4",
      label: "Element 4",
      diagramLabel: "G4",
      role: "High-index meniscus, convex to the image, carrying the rear group's strongest positive power",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      focalLengthMm: 30.73201073078851,
      glass: "K-LaK10 (SUMITA catalog equivalent; production supplier unspecified)",
    },
    {
      id: 5,
      name: "G5",
      label: "Element 5",
      diagramLabel: "G5",
      role: "Rear crown sharing the positive power of the rear group",
      type: "Biconvex Positive",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: 45.298700202055215,
      glass: "S-BSM16 (OHARA catalog equivalent; production supplier unspecified)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 82.0295,
      d: 1.5435,
      sd: 14.4,
      medium: 1,
    },
    {
      label: "2",
      R: 16.4815,
      d: 12.383,
      sd: 11.8,
      rimExtensionSd: 14.4,
    },
    {
      label: "3",
      R: 21.721,
      d: 9.8,
      sd: 10.3,
      medium: 2,
    },
    {
      label: "4",
      R: -65.2505,
      d: 5.7365,
      sd: 10.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 5.4005,
    },
    {
      label: "5",
      R: -14.042,
      d: 1.3265,
      sd: 6.8,
      rimExtensionSd: 7.5,
      medium: 3,
    },
    {
      label: "6",
      R: 83.755,
      d: 0.9905,
      sd: 7.5,
    },
    {
      label: "7",
      R: -51.0825,
      d: 2.345,
      sd: 8.0,
      medium: 4,
    },
    {
      label: "8",
      R: -15.736,
      d: 0.1015,
      sd: 8.0,
    },
    {
      label: "9",
      R: 84.0665,
      d: 2.38,
      sd: 10.0,
      medium: 5,
    },
    {
      label: "10",
      R: -41.7585,
      d: 37.1,
      sd: 10.0,
    },
  ],
  focus: {
    closeFocusM: 0.3,
    description:
      "The patent gives the infinity state only, so no focus movement is modeled; 0.3 m is Minolta's stated minimum focus.",
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 64,
    maxTraceFieldDeg: 32,
  },
  layout: {
    yScFill: 0.36,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
