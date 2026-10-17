import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Hidden regression fixture for a Gregorian-style secondary path. The concave
 * secondary sits beyond the primary focus on the object side, exercising a
 * different secondary curvature/sign convention than the Cassegrain fixtures.
 *
 * Closed-form first order: the primary (R = -100, f1 = 50) focuses at z = 50.
 * The secondary (R = +80, f2 = 40) at z = -10 is s = 60 beyond that focus, so it
 * re-images at s' = 1 / (1/40 - 1/60) = 120, i.e. z = 110, behind the primary
 * hole. Secondary magnification s'/s = 2 gives EFL = f1 * 2 = 100.
 */

const LENS_DATA = {
  schema: 2,
  key: "reference-gregorian-secondary",
  maker: "Reference",
  name: "REFERENCE Gregorian Secondary",
  subtitle: "Hidden alternate-secondary folded fixture",
  visible: false,

  catalog: {
    specs: ["GREGORIAN-STYLE", "CONCAVE SECONDARY", "ANNULAR PRIMARY", "BACK FOCUS"],
    elementCount: 2,
    groupCount: 2,
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
      focalLengthMm: 50,
      glass: "Aluminized annular front surface",
      apd: false,
      role: "Primary mirror whose returning beam crosses the front focus before reaching the Gregorian secondary.",
      span: ["M1", "M1B"],
    },
    {
      id: 2,
      name: "M2",
      label: "Gregorian secondary",
      type: "Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      glass: "Aluminized front surface",
      apd: false,
      role: "Concave secondary beyond the primary focus, returning the beam through the primary hole.",
      span: ["SEC", "SECB"],
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 100, sd: 30 },
    {
      label: "M1",
      R: -100,
      d: 2,
      sd: 30,
      innerSd: 9,
      medium: 1,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "M1B", R: "flat", d: -112, sd: 30, innerSd: 9, medium: 1 },
    {
      label: "SEC",
      R: 80,
      d: 2,
      sd: 16,
      medium: 2,
      interaction: { type: "reflect", incidentSide: "rear", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "SECB", R: "flat", d: 118, sd: 16, medium: 2 },
  ],

  focus: { closeFocusM: 10 },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16], maxFNumber: 16 },

  projection: { kind: "rectilinear", fullFieldDeg: 8, maxTraceFieldDeg: 4 },

  opticalPath: { surfaceOrder: ["M1", "SEC"], imagePlane: { z: 110, label: "IMG" }, maxInteractions: 10 },

  groups: [
    { text: "M1", fromSurface: "M1", toSurface: "M1B" },
    { text: "M2", fromSurface: "SEC", toSurface: "SECB" },
  ],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.5 },

  rays: { rayLeadFrac: 0.25 },
} satisfies LensDataV2Input;

export default LENS_DATA;
