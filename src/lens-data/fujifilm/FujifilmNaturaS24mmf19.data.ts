/* US20060007561A1 Example 1, no dimensional scale. Native lengths in mm.
 * All A3-A20 odd/even terms on surfaces 6, 7, 10, 11 retained. Kmodel=Kpatent-1.
 * Explicit stop 0.90 mm before L4 splits D5=2.06 into 1.16 + 0.90 mm.
 * Legacy V1 stop SD 5.28596079 mm used paraxial f/1.96 calibration; it was ignored
 * by the runtime and is omitted from V2. The engine derives SD 5.60887021 mm by
 * exact marginal-ray calibration. Neither
 * calibration is independent evidence of a measured physical diaphragm.
 * Lens clear semi-diameters are inferred from exact ray geometry, constrained by
 * sag/rim/gap rules. Source drawings establish topology, not measured production SDs.
 * Fig. 1 rim review (2026-10-18): square the L1, L2/L3, L5 and L7 rims;
 * Follow-up live review: L2/L3 share a 7.6 mm rim; L6 shares a 10.1 mm rim.
 * All adjusted radii remain inferred and pass unchanged geometry checks.
 * Finite default-field fan and full-field chief containment are tested; this does
 * not certify full-pupil edge illumination at f/1.96 or production vignetting.
 * NO_INTERNAL_RECONSTRUCTION: infinity-only, var empty, closeFocusM=1e15.
 * Production 24 mm / f/1.9 / 0.4 m remain distinct from published design 24.06 mm / f/1.96.
 * No source planes removed; final d uses separately stated Bf 7.98 mm.
 * Glass curves are coordinate-compatible spectral proxies, not supplier/melt identifications.
 */
import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  schema: 2,
  key: "fujifilm-natura-s-24mm-f19",
  maker: "Fujifilm",
  name: "FUJIFILM SUPER EBC FUJINON 24mm f/1.9 (Fujifilm Natura S)",
  subtitle: "US 2006/0007561 A1, Example 1 — probable Natura S design; production prescription unconfirmed",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "135-full-frame",
    specs: [
      "7 ELEMENTS / 6 GROUPS",
      "4 ASPHERICAL SURFACES ON L4 AND L6",
      "Design f/1.96; marketed f/1.9",
      "INFINITY PRESCRIPTION; FINITE FOCUS NOT MODELED",
    ],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: { marketing: 24, design: 24.06 },
    fNumber: { marketing: 1.9, design: 1.96 },
  },

  source: {
    patentNumber: "US 2006/0007561 A1",
    patentYear: 2006,
    authors: ["Takashi Suzuki"],
    assignees: ["Fujinon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.8,
      indexReference: "d",
      focalLengthMm: -28.352904882,
      glass: "E-FD2 (HOYA spectral proxy; production glass unconfirmed)",
      role: "Negative first functional group I.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      focalLengthMm: 9.588637986,
      glass: "S-LAH58 (OHARA spectral proxy; production glass unconfirmed)",
      role: "Positive member of cemented group II.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: -26.612133393,
      glass: "J-SF03 (HIKARI spectral proxy; production glass unconfirmed)",
      role: "Negative member of cemented group II.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.68893,
      vd: 31.1,
      indexReference: "d",
      focalLengthMm: -109.848198989,
      glass: "S-TIM28 (OHARA spectral proxy; production glass unconfirmed)",
      role: "Weakly negative on-axis aspheric meniscus in positive group III.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      indexReference: "d",
      focalLengthMm: 22.529780225,
      glass: "TAC8 (HOYA spectral proxy; production glass unconfirmed)",
      role: "Positive meniscus in group III.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.49023,
      vd: 57.5,
      indexReference: "d",
      focalLengthMm: -196.711076032,
      glass: "Unmatched (nd=1.49023, νd=57.5; rear aspheric material, polymer identity unconfirmed)",
      role: "Weakly negative on-axis aspheric meniscus in negative group IV.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.57135,
      vd: 53.0,
      indexReference: "d",
      focalLengthMm: -24.355040728,
      glass: "S-BAL3 (OHARA spectral proxy; production glass unconfirmed)",
      role: "Negative rear element in group IV.",
    },
  ],

  surfaces: [
    { label: "1", R: -22.46, d: 0.9, sd: 8.3, medium: 1 },
    { label: "2", R: 102.28, d: 0.1, sd: 8.3 },
    { label: "3", R: 12.57, d: 5.02, sd: 7.6, medium: 2 },
    { label: "4", R: -21.08, d: 0.7, sd: 7.6, medium: 3 },
    { label: "5", R: -332.22, d: 1.16, sd: 7.6 },
    { label: "STO", R: "flat", d: 0.9 },
    {
      label: "6A",
      R: 24.5,
      d: 1.0,
      sd: 5.9,
      medium: 4,
      asphere: {
        K: -1.0867768,
        A4: -5.1371436e-5,
        A6: 3.7614388e-5,
        A8: 3.648276e-7,
        A10: -2.9629239e-9,
        A12: 6.6172998e-12,
        A14: -1.5306494e-14,
        A16: -2.8418306e-16,
        A18: -1.7565516e-18,
        A20: 5.4685132e-21,
        A3: -0.00032687899,
        A5: -0.0001818376,
        A7: -6.1217814e-6,
        A9: 2.533998e-8,
        A11: 1.6193746e-10,
        A13: 8.3773899e-14,
        A15: -2.9919374e-15,
        A17: -2.3804089e-17,
        A19: -8.8029849e-20,
      },
    },
    {
      label: "7A",
      R: 18.2,
      d: 2.74,
      sd: 6.2,
      asphere: {
        K: -1.1761418,
        A4: -6.8958799e-5,
        A6: -3.0841506e-5,
        A8: -4.5627477e-7,
        A10: 3.7589133e-9,
        A12: -1.3263706e-12,
        A14: -3.0151401e-14,
        A16: -2.8333679e-16,
        A18: -8.1626512e-19,
        A20: 6.3534512e-21,
        A3: -5.5296581e-5,
        A5: 2.8464969e-5,
        A7: 6.4059405e-6,
        A9: -7.4763163e-9,
        A11: 4.4219682e-11,
        A13: -7.8275905e-13,
        A15: -1.583933e-15,
        A17: -2.6700946e-17,
        A19: -1.1914021e-20,
      },
    },
    { label: "8", R: -26.91, d: 4.0, sd: 8.3, medium: 5 },
    { label: "9", R: -10.84, d: 1.95, sd: 8.3 },
    {
      label: "10A",
      R: -65.91,
      d: 2.8,
      sd: 10.1,
      medium: 6,
      asphere: {
        K: -1.7463096,
        A4: -0.0013697066,
        A6: -1.4696107e-5,
        A8: 5.8166307e-7,
        A10: 3.3108816e-9,
        A12: -5.382137e-12,
        A14: 8.9853324e-15,
        A16: 2.4056375e-16,
        A18: 2.8280214e-18,
        A20: -1.8068655e-20,
        A3: 0.0017672768,
        A5: 0.00023434066,
        A7: -2.6726938e-6,
        A9: -5.1714746e-8,
        A11: -9.324855e-11,
        A13: -2.4410086e-13,
        A15: 1.7469691e-15,
        A17: 6.3911149e-18,
        A19: -1.6309097e-19,
      },
    },
    {
      label: "11A",
      R: -211.14,
      d: 1.48,
      sd: 10.1,
      asphere: {
        K: 0.1897724999999999,
        A4: -0.0016922662,
        A6: -3.9085035e-5,
        A8: -2.5929509e-7,
        A10: -2.3153645e-9,
        A12: 1.406393e-12,
        A14: 2.5193301e-15,
        A16: -1.5643113e-17,
        A18: -1.272615e-18,
        A20: -1.0397494e-21,
        A3: 0.0028600006,
        A5: 0.00031371638,
        A7: 3.1387872e-6,
        A9: 2.8790162e-8,
        A11: 6.4159536e-11,
        A13: 1.2240166e-13,
        A15: -3.4131672e-15,
        A17: 2.6651905e-17,
        A19: 3.4469932e-20,
      },
    },
    { label: "12", R: -14.65, d: 1.0, sd: 12.6, medium: 7 },
    { label: "13", R: 284.34, d: 7.98, sd: 12.6 },
  ],

  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Only the published infinity prescription is modeled. The camera autofocuses to 0.4 m, but the source gives no lens travel or close-focus spacings.",
  },

  aperture: { nominalFNumber: 1.96, fStops: [1.96, 2.8, 4, 5.6, 8, 11, 16], maxFNumber: 16 },

  projection: { kind: "rectilinear", fullFieldDeg: 83.6, maxTraceFieldDeg: 41.8 },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "6A", toSurface: "9" },
    { text: "IV", fromSurface: "10A", toSurface: "13" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
