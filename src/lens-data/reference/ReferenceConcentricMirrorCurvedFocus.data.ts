import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Hidden regression fixture for a curved image surface on a folded path.
 *
 * A concave first-surface spherical mirror (R = −200 mm, f = 100 mm) with the stop at its centre of curvature, the
 * layout of a Schmidt camera without its corrector plate. Every chief ray passes the centre, meets the mirror at normal
 * incidence and returns through it, so the focal surface is the sphere of radius f concentric with the mirror: vertex at
 * z = 100 mm, R = −100 mm along the +z image normal. Chiefs land at height f·sin θ.
 */

const LENS_DATA = {
  schema: 2,
  key: "reference-concentric-mirror-curved-focus",
  maker: "Reference",
  name: "REFERENCE Concentric Mirror Curved Focus",
  subtitle: "Hidden folded curved image-surface regression fixture",
  visible: false,

  catalog: {
    specs: ["FIRST-SURFACE MIRROR", "f = 100 mm", "F/4", "STOP AT CENTRE OF CURVATURE", "FOCAL SPHERE R −100 mm"],
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
      role: "Spherical mirror concentric with the stop, imaging onto a concentric focal sphere.",
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 200, sd: 12.5 },
    {
      label: "M1",
      R: -200,
      d: 2,
      sd: 32,
      medium: 1,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "M1B", R: "flat", d: 0, sd: 32 },
  ],

  imageSurface: { R: -100, sd: 10, source: "Synthetic: the sphere of radius f concentric with the mirror" },

  focus: { closeFocusM: 10 },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16], maxFNumber: 16 },

  projection: { kind: "rectilinear", fullFieldDeg: 10, maxTraceFieldDeg: 5 },

  opticalPath: { surfaceOrder: ["STO", "M1"], imagePlane: { z: 100, label: "IMG" }, maxInteractions: 3 },

  groups: [{ text: "M1", fromSurface: "M1", toSurface: "M1B" }],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.55 },

  rays: { rayLeadFrac: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
