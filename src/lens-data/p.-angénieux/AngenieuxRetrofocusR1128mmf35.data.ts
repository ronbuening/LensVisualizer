import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — P. ANGÉNIEUX RETROFOCUS TYPE R11 28mm f/3.5
 *
 * Source: GB 720,808, sole numerical example (Example 1), Pierre Angénieux.
 * Six spherical elements in six air-spaced groups.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes only the
 * infinity prescription; no focus spacing is invented here.
 *
 * Scaling: The patent labels the normalized design F = 100, but the printed
 * prescription independently computes to EFL = 101.007234632 raw units.
 * Every dimensional value is uniformly scaled by 0.277207866366946 so the
 * modeled EFL is 28.000000000 mm. The printed 135.08-unit BFL is retained in
 * the audit; the modeled final spacing uses the computed 134.368216951-unit
 * paraxial BFL, scaled to 37.247926729 mm.
 *
 * Stop: The page-5 section includes an unlabeled diaphragm line in e6 between
 * R6 and R7, but the table does not identify or dimension its axial station.
 * STO is therefore modeled at the midpoint of the scaled 2.711092933 mm gap.
 * The stop radius is derived from the design f-number, f/3.5, using the
 * modeled 28 mm EFL and the computed entrance-pupil geometry.
 *
 * Semi-diameters: The patent publishes no apertures. SDs were derived from
 * exact meridional marginal/chief-ray envelopes at the viewer's default 60%
 * of the published 75° full field, then enlarged where needed to match the
 * page-5 optical-section silhouette and preserve full-field chief rays. Edge
 * thickness, actual rim slope, shared-gap intrusion, full-aperture off-axis
 * containment at ±22.5°, and equivalent render geometry were checked.
 *
 * Glass: The source supplies only nd and νd. Compatible published catalog
 * curves are used as optical equivalents; no production supplier is asserted.
 *
 * Product metadata: Angénieux identifies the 1953 28mm f/3.5 Retrofocus with
 * a 75° field. A 0.6 m minimum focus is reported consistently by surviving
 * production-lens listings, but no period manufacturer document was recovered;
 * closeFocusM is metadata only and drives no focus model.
 */

const LENS_DATA = {
  schema: 2,
  key: "angenieux-retrofocus-r11-28mm-f35",
  maker: "P. Angénieux",
  name: "P. ANGÉNIEUX RETROFOCUS TYPE R11 28mm f/3.5",
  subtitle: "GB 720,808 Example 1 — correlated to the 1953 production Type R11",

  catalog: {
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 6 GROUPS", "28.000 mm DESIGN EFL", "f/3.5", "75° PUBLISHED FIELD", "ALL-SPHERICAL"],
    elementCount: 6,
    groupCount: 6,
    focalLengthMm: { marketing: 28, design: 28 },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: { patentNumber: "GB 720,808", patentYear: 1954, authors: ["Pierre Angénieux"], assignees: [] },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6751,
      vd: 32.3,
      indexReference: "d",
      focalLengthMm: 158.402327902,
      glass: "SF5 (Schott catalog equivalent to patent 675323 dense-flint coordinate; production supplier unspecified)",
      apd: false,
      role: "Front positive member of the air-spaced dispersive pair.",
      diagramLabel: "1",
    },
    {
      id: 2,
      name: "L1′",
      label: "Element 1′",
      type: "Negative Meniscus",
      nd: 1.6204,
      vd: 60.2,
      indexReference: "d",
      focalLengthMm: -37.030982072,
      glass: "J-SK16 (Hikari catalog equivalent to patent 620602; production supplier unspecified)",
      apd: false,
      role: "Strong negative member completing the front dispersive pair.",
      diagramLabel: "1′",
    },
    {
      id: 3,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6204,
      vd: 60.2,
      focalLengthMm: 43.286361425,
      glass: "J-SK16 (Hikari catalog equivalent to patent 620602; production supplier unspecified)",
      apd: false,
      role: "First positive element of the rear collective section.",
      diagramLabel: "2",
    },
    {
      id: 4,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6204,
      vd: 60.2,
      focalLengthMm: 49.121928357,
      glass: "J-SK16 (Hikari catalog equivalent to patent 620602; production supplier unspecified)",
      apd: false,
      role: "Positive meniscus preceding the aperture stop.",
      diagramLabel: "3",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6287,
      vd: 35.3,
      indexReference: "d",
      focalLengthMm: -16.030700601,
      glass: "F1 (Sumita catalog equivalent to patent 629353 flint coordinate; production supplier unspecified)",
      apd: false,
      role: "Negative element immediately behind the stop.",
      diagramLabel: "4",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6204,
      vd: 60.2,
      focalLengthMm: 20.892968824,
      glass: "J-SK16 (Hikari catalog equivalent to patent 620602; production supplier unspecified)",
      apd: false,
      role: "Final positive element of the rear collective section.",
      diagramLabel: "5",
    },
  ],

  surfaces: [
    { label: "1", R: 94.57223569, d: 5.810276879, sd: 23, medium: 1 },
    { label: "2", R: 797.635142606, d: 0.293840338, sd: 22.5 },
    { label: "3", R: 97.20571042, d: 1.45256922, sd: 18.3, medium: 2 },
    { label: "4", R: 18.475904293, d: 30.897588785, sd: 16.5 },
    { label: "5", R: 37.614335387, d: 4.357707659, sd: 9.5, medium: 3 },
    { label: "6", R: -89.71832595, d: 0.146920169, sd: 9.2 },
    { label: "7", R: 20.153011885, d: 4.249596591, sd: 8.5, medium: 4 },
    { label: "8", R: 54.695884113, d: 1.355546467, sd: 7.5 },
    { label: "STO", R: "flat", d: 1.355546467 },
    { label: "9", R: -23.205070494, d: 0.615401463, sd: 6.8, medium: 5 },
    { label: "10", R: 17.999106763, d: 1.948771301, sd: 7.1 },
    { label: "11", R: 89.71832595, d: 2.467150011, sd: 7.6, medium: 6 },
    { label: "12", R: -14.991401413, d: 37.247926729, sd: 7.55 },
  ],

  focus: {
    closeFocusM: 0.6,
    description: "NO_INTERNAL_RECONSTRUCTION — infinity prescription only; no focus motion is modeled.",
  },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16] },

  projection: { kind: "rectilinear", fullFieldDeg: 75, maxTraceFieldDeg: 37.5 },

  groups: [
    { text: "FRONT DISPERSIVE", fromSurface: "1", toSurface: "4" },
    { text: "REAR COLLECTIVE", fromSurface: "5", toSurface: "12" },
  ],
  doublets: [],

  layout: { scFill: 0.56, yScFill: 0.52 },
} satisfies LensDataV2Input;

export default LENS_DATA;
