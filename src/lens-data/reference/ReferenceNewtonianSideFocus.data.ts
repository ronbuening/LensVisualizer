import type { LensDataInput } from "../../types/optics.js";

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
  key: "reference-newtonian-side-focus",
  maker: "Reference",
  visible: false,
  name: "REFERENCE Newtonian Side Focus",
  subtitle: "Hidden automatic folded-path regression fixture",
  specs: ["AUTO PATH", "DIAGONAL SECONDARY", "SIDE IMAGE PLANE", "f = 100 mm"],

  focalLengthMarketing: 100,
  focalLengthDesign: 100,
  apertureMarketing: 4,
  apertureDesign: 4,
  patentYear: 2026,
  elementCount: 2,
  groupCount: 2,
  nominalFno: 4,
  closeFocusM: 10,
  yScFill: 0.5,
  scFill: 0.62,
  rayLeadFrac: 0.25,
  maxFstop: 16,
  fstopSeries: [4, 5.6, 8, 11, 16],
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 8,
    maxTraceFieldDeg: 4,
  },
  opticalPath: {
    mode: "auto",
    imagePlane: { z: 35, y: 25, normal: { z: 0, y: 1 }, label: "IMG" },
    maxInteractions: 8,
  },

  elements: [
    {
      id: 1,
      name: "M1",
      label: "Primary mirror",
      type: "Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      fl: 100,
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
      fromSurface: "SEC",
      toSurface: "SECB",
      role: "Meridional fold mirror active only from the rear side after primary reflection.",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 35, nd: 1.0, elemId: 0, sd: 30 },
    {
      label: "SEC",
      R: 1e15,
      d: 0.5,
      nd: 1.0,
      elemId: 2,
      sd: 10,
      interaction: {
        type: "reflect",
        incidentSide: "rear",
        inactiveSide: "ignore",
        mirrorKind: "first-surface",
        normal: { z: 1, y: 1 },
      },
    },
    { label: "SECB", R: 1e15, d: 64.5, nd: 1.0, elemId: 0, sd: 10, interaction: { type: "refract", normal: { z: 1, y: 1 } } },
    {
      label: "M1",
      R: -200,
      d: 2,
      nd: 1.0,
      elemId: 1,
      sd: 30,
      interaction: { type: "reflect", incidentSide: "front", mirrorKind: "first-surface" },
    },
    { label: "M1B", R: 1e15, d: 0, nd: 1.0, elemId: 0, sd: 30 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [
    { text: "M2", fromSurface: "SEC", toSurface: "SECB" },
    { text: "M1", fromSurface: "M1", toSurface: "M1B" },
  ],
  doublets: [],
} satisfies LensDataInput;

export default LENS_DATA;
