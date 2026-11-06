import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Hidden regression fixture for a spherical curved image surface.
 *
 * A thin-lens-designed cemented achromat (N-BK7 / N-SF5, f ≈ 50.2 mm) behind a 6 mm stop, focused at its paraxial back
 * focus. Its Petzval sum is 0.014424 /mm, so the Petzval surface has a radius of −69.3 mm; the sensor is curved to that
 * radius, which leaves only astigmatism between the tangential and sagittal foci and the sensor.
 */

const LENS_DATA = {
  schema: 2,
  key: "reference-curved-sensor-achromat",
  maker: "Reference",
  name: "REFERENCE Curved-Sensor Achromat",
  subtitle: "Hidden curved image-surface regression fixture",
  visible: false,

  catalog: {
    specs: ["CEMENTED ACHROMAT", "f = 50 mm", "F/4", "PETZVAL-MATCHED CURVED SENSOR R −69.3 mm"],
    elementCount: 2,
    groupCount: 1,
    imageCircleMm: 30,
    focalLengthMm: { marketing: 50, design: 50.2 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: { patentYear: 2026 },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Crown",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.17,
      glass: "N-BK7",
      focalLengthMm: 24.9,
      apd: false,
      role: "Positive crown of the cemented achromat.",
    },
    {
      id: 2,
      name: "L2",
      label: "Flint",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.21,
      glass: "N-SF5",
      focalLengthMm: -49.6,
      apd: false,
      role: "Negative flint that corrects the crown's axial colour.",
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 6 },
    { label: "1", R: 25.74, d: 5, sd: 7.5, medium: 1 },
    { label: "2", R: -25.74, d: 2, sd: 7.5, medium: 2 },
    { label: "3", R: -112.5, d: 46.053, sd: 7.5 },
  ],

  imageSurface: { R: -69.3, sd: 15.5, source: "Synthetic: the doublet's Petzval radius, −1 / 0.014424 mm" },

  focus: { closeFocusM: 2 },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11], maxFNumber: 11 },

  groups: [{ text: "Achromat", fromSurface: "1", toSurface: "3" }],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  layout: { scFill: 0.6, yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
