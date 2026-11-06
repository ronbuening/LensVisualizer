import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Hidden regression fixture for a cylindrical curved image surface.
 *
 * A single-use-camera style meniscus (N-BK7, concave toward the object, f ≈ 32.4 mm) behind a front stop, focused at its
 * paraxial back focus, with the film held in a gate curved to R = −90 mm along the frame's long side and straight along
 * the short side.
 */

const LENS_DATA = {
  schema: 2,
  key: "reference-cylindrical-film-gate",
  maker: "Reference",
  name: "REFERENCE Cylindrical Film Gate Meniscus",
  subtitle: "Hidden cylindrical image-surface regression fixture",
  visible: false,

  catalog: {
    specs: ["SINGLE MENISCUS", "f = 32 mm", "F/11", "CYLINDRICAL FILM GATE R −90 mm"],
    elementCount: 1,
    groupCount: 1,
    imageFormat: "135-full-frame",
    focalLengthMm: { marketing: 32, design: 32.4 },
    fNumber: { marketing: 11, design: 11 },
  },

  source: { patentYear: 2026 },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Meniscus",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.17,
      glass: "N-BK7",
      focalLengthMm: 32.4,
      apd: false,
      role: "Landscape meniscus whose field curvature the curved gate follows.",
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 4 },
    { label: "1", R: -20, d: 2.5, sd: 5, medium: 1 },
    { label: "2", R: -9.5, d: 33.766, sd: 5.5 },
  ],

  imageSurface: { R: -90, cylindrical: true, sd: 22, source: "Synthetic: a film gate curved along the long side" },

  focus: { closeFocusM: 1.5 },

  projection: { kind: "rectilinear", fullFieldDeg: 67.4, maxTraceFieldDeg: 33.7 },

  aperture: { nominalFNumber: 11, fStops: [11, 16], maxFNumber: 16 },

  groups: [{ text: "L1", fromSurface: "1", toSurface: "2" }],
  doublets: [],

  layout: { scFill: 0.6, yScFill: 0.18 },
} satisfies LensDataV2Input;

export default LENS_DATA;
