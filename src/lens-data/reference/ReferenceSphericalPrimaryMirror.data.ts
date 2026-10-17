import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Hidden regression fixture for folded-optics tracing.
 *
 * A concave first-surface spherical primary mirror with R = -200 mm focuses
 * collimated on-axis rays at z = 0 mm after reflection from the vertex at
 * z = 100 mm. The fixture is intentionally simple and hidden from the public
 * catalog; it exists to verify mirror reflection and front-side image planes.
 */

const LENS_DATA = {
  schema: 2,
  key: "reference-spherical-primary-mirror",
  maker: "Reference",
  name: "REFERENCE Spherical Primary Mirror",
  subtitle: "Hidden folded-optics regression fixture",
  visible: false,

  catalog: {
    specs: ["FIRST-SURFACE MIRROR", "f = 100 mm", "F/4", "FRONT IMAGE PLANE"],
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
      label: "Primary mirror",
      type: "Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      focalLengthMm: 100,
      glass: "Aluminized front surface",
      apd: false,
      role: "Single spherical mirror focusing collimated rays back toward the front focal plane.",
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 100, sd: 30 },
    {
      label: "M1",
      R: -200,
      d: 2,
      sd: 30,
      medium: 1,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "M1B", R: "flat", d: 0, sd: 30 },
  ],

  focus: { closeFocusM: 10 },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16], maxFNumber: 16 },

  projection: { kind: "rectilinear", fullFieldDeg: 10, maxTraceFieldDeg: 5 },

  opticalPath: { surfaceOrder: ["STO", "M1"], imagePlane: { z: 0, label: "IMG" }, maxInteractions: 3 },

  groups: [{ text: "M1", fromSurface: "M1", toSurface: "M1B" }],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.55 },

  rays: { rayLeadFrac: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
