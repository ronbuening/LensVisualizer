import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Hidden regression fixture for guarded folded-system analysis.
 *
 * This synthetic Cassegrain-style prescription uses an annular primary and a
 * centrally blocking secondary. Off-axis pupil samples pass around the
 * secondary, reflect from the primary, reflect from the secondary, then pass
 * through the primary hole to a back-focus image plane.
 *
 * The secondary is flat, so it cannot relay focus behind the primary: the
 * paraxial focus is the primary focus (z = 0) folded about the secondary, at
 * z = 70, and the z = 135 plane sits 65 mm past it. That defocus is deliberate
 * for this trace fixture; exactTraceGoldenValues.test.ts pins its rays at this
 * plane, so moving the plane or curving the secondary re-pins those values.
 */

const LENS_DATA = {
  schema: 2,
  key: "reference-cassegrain-back-focus",
  maker: "Reference",
  name: "REFERENCE Cassegrain Back Focus",
  subtitle: "Hidden folded-analysis guard fixture",
  visible: false,

  catalog: {
    specs: ["CASSEGRAIN-STYLE", "CENTRAL SECONDARY", "ANNULAR PRIMARY", "BACK FOCUS"],
    elementCount: 2,
    groupCount: 2,
    focalLengthMm: { marketing: 100, design: 100 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: { patentYear: 2026 },

  elements: [
    {
      id: 1,
      name: "M2",
      label: "Secondary mirror",
      type: "Flat First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      glass: "Aluminized front surface",
      apd: false,
      role: "Central secondary that blocks incoming core rays and reflects the returning primary beam.",
      span: ["SEC", "SECB"],
    },
    {
      id: 2,
      name: "M1",
      label: "Annular primary mirror",
      type: "Annular Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      focalLengthMm: 100,
      glass: "Aluminized annular front surface",
      apd: false,
      role: "Spherical primary mirror with a central hole for the back-focus beam.",
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 35, sd: 30 },
    {
      label: "SEC",
      R: "flat",
      d: 0.5,
      sd: 8,
      medium: 1,
      interaction: { type: "reflect", incidentSide: "rear", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "SECB", R: "flat", d: 64.5, sd: 8 },
    {
      label: "M1",
      R: -200,
      d: 2,
      sd: 30,
      innerSd: 8,
      medium: 2,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "M1B", R: "flat", d: 0, sd: 30, innerSd: 8 },
  ],

  focus: { closeFocusM: 10 },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16], maxFNumber: 16 },

  projection: { kind: "rectilinear", fullFieldDeg: 8, maxTraceFieldDeg: 4 },

  opticalPath: { mode: "auto", imagePlane: { z: 135, label: "IMG" }, maxInteractions: 10 },

  groups: [
    { text: "M2", fromSurface: "SEC", toSurface: "SECB" },
    { text: "M1", fromSurface: "M1", toSurface: "M1B" },
  ],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.5 },

  rays: { rayLeadFrac: 0.25 },
} satisfies LensDataV2Input;

export default LENS_DATA;
