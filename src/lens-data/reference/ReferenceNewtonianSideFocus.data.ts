import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Hidden regression fixture for automatically resolved folded mirror paths.
 *
 * A synthetic Newtonian-style layout: incoming collimated rays pass the diagonal
 * secondary from its inactive side, reflect from a concave spherical primary,
 * then hit the same diagonal from the rear side and terminate on a side image
 * plane above the axis. The geometry is intentionally compact and hidden from
 * the public catalog; it exists to verify automatic next-surface selection and
 * non-axial image-plane handling.
 */

const LENS_DATA = {
  schema: 2,
  key: "reference-newtonian-side-focus",
  maker: "Reference",
  name: "REFERENCE Newtonian Side Focus",
  subtitle: "Hidden automatic folded-path regression fixture",
  visible: false,

  catalog: {
    specs: ["AUTO PATH", "DIAGONAL SECONDARY", "SIDE IMAGE PLANE", "f = 100 mm"],
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
      label: "Primary mirror",
      type: "Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      focalLengthMm: 100,
      glass: "Aluminized front surface",
      apd: false,
      role: "Spherical primary mirror that sends the beam back toward the diagonal secondary.",
    },
    {
      id: 2,
      name: "M2",
      label: "Diagonal secondary",
      type: "Flat Fold Mirror",
      nd: 1.0,
      vd: 0,
      glass: "Aluminized flat surface",
      apd: false,
      role: "Meridional fold mirror active only from the rear side after primary reflection.",
      span: ["SEC", "SECB"],
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 35, sd: 30 },
    {
      label: "SEC",
      R: "flat",
      d: 0.5,
      sd: 10,
      medium: 2,
      interaction: {
        type: "reflect",
        incidentSide: "rear",
        inactiveSide: "block",
        mirrorKind: "first-surface",
        normal: { z: 1, y: 1 },
      },
    },
    { label: "SECB", R: "flat", d: 64.5, sd: 10, interaction: { type: "refract", normal: { z: 1, y: 1 } } },
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

  projection: { kind: "rectilinear", fullFieldDeg: 8, maxTraceFieldDeg: 4 },

  opticalPath: { mode: "auto", imagePlane: { z: 35, y: 25, normal: { z: 0, y: 1 }, label: "IMG" }, maxInteractions: 8 },

  groups: [
    { text: "M2", fromSurface: "SEC", toSurface: "SECB" },
    { text: "M1", fromSurface: "M1", toSurface: "M1B" },
  ],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.5 },

  rays: { rayLeadFrac: 0.25 },
} satisfies LensDataV2Input;

export default LENS_DATA;
