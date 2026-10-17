import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Hidden regression fixture for annular pupils and central obstructions.
 *
 * This is the spherical-primary fixture with a 6 mm central baffle ahead of an
 * annular first-surface mirror. Visible ray sampling should skip the blocked
 * pupil core, while a deliberately central trace should clip on the baffle.
 */

const LENS_DATA = {
  schema: 2,
  key: "reference-annular-obscured-mirror",
  maker: "Reference",
  name: "REFERENCE Annular Obscured Mirror",
  subtitle: "Hidden annular-pupil regression fixture",
  visible: false,

  catalog: {
    specs: ["ANNULAR FIRST-SURFACE MIRROR", "CENTRAL OBSTRUCTION", "f = 100 mm", "F/4"],
    elementCount: 1,
    groupCount: 1,
    focalLengthMm: { marketing: 100, design: 100 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: { patentYear: 2026 },

  elements: [
    {
      id: 1,
      name: "M1",
      label: "Annular primary mirror",
      type: "Annular Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      focalLengthMm: 100,
      glass: "Aluminized annular front surface",
      apd: false,
      role: "Spherical mirror with a central hole masked by an upstream obstruction.",
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 20, sd: 30 },
    { label: "OBS", R: "flat", d: 80, sd: 6, interaction: { type: "block" } },
    {
      label: "M1",
      R: -200,
      d: 2,
      sd: 30,
      innerSd: 6,
      medium: 1,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "M1B", R: "flat", d: 0, sd: 30, innerSd: 6 },
  ],

  focus: { closeFocusM: 10 },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16], maxFNumber: 16 },

  projection: { kind: "rectilinear", fullFieldDeg: 10, maxTraceFieldDeg: 5 },

  opticalPath: { surfaceOrder: ["STO", "OBS", "M1"], imagePlane: { z: 0, label: "IMG" }, maxInteractions: 4 },

  groups: [{ text: "M1", fromSurface: "M1", toSurface: "M1B" }],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.55 },

  rays: { rayLeadFrac: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
