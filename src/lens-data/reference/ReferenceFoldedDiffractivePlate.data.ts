import type { LensDataInput } from "../../types/optics.js";

/**
 * Hidden regression fixture for a diffractive phase surface inside a folded path.
 *
 * `validateLensData` allows a refracting phase surface in a folded `opticalPath`
 * while rejecting `diffractive` on reflect/block surfaces. The generalized
 * tracers implement that combination, but nothing else in the tree exercises it.
 *
 * Geometry is deliberately analytic rather than realistic:
 *   - PF is a flat plate with air on both sides, so it has no refractive power
 *     at all. Every bend it produces comes from the radial phase term.
 *   - The single quadratic coefficient C2 = -0.0025 /mm² gives the equivalent
 *     paraxial power phiD = -2*C2 = 0.005 /mm, i.e. exactly f = 200 mm at the
 *     d-line reference wavelength and diffraction order 1.
 *   - FOLD is a 45-degree first-surface mirror 100 mm past the plate, so the
 *     remaining 100 mm of the 200 mm focal distance runs along -y to the side
 *     image plane. A collimated axial bundle therefore focuses on IMG.
 *
 * Apertures are kept well inside the paraxial region so the fixture stays
 * predictable; it exists to pin trace behavior, not to model a real lens.
 */

const LENS_DATA = {
  key: "reference-folded-diffractive-plate",
  maker: "Reference",
  visible: false,
  name: "REFERENCE Folded Diffractive Plate",
  subtitle: "Hidden folded-path diffractive phase-surface regression fixture",
  specs: ["PHASE PLATE", "45° FOLD", "SIDE IMAGE PLANE", "f = 200 mm"],

  focalLengthMarketing: 200,
  focalLengthDesign: 200,
  apertureMarketing: 8,
  apertureDesign: 8,
  patentYear: 2026,
  elementCount: 2,
  groupCount: 2,
  nominalFno: 8,
  closeFocusM: 10,
  yScFill: 0.5,
  scFill: 0.62,
  rayLeadFrac: 0.25,
  maxFstop: 22,
  fstopSeries: [8, 11, 16, 22],
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 4,
    maxTraceFieldDeg: 2,
  },
  opticalPath: {
    surfaceOrder: ["STO", "PF", "FOLD"],
    imagePlane: { z: 120, y: -100, normal: { z: 0, y: 1 }, label: "IMG" },
    maxInteractions: 6,
  },

  elements: [
    {
      id: 1,
      name: "PF",
      label: "Phase plate",
      type: "Diffractive Phase Plate",
      nd: 1.0,
      vd: 0,
      fl: 200,
      glass: "Air-equivalent phase-only plate",
      apd: false,
      fromSurface: "PF",
      toSurface: "PFB",
      role: "Flat same-index plate whose entire power comes from the radial phase polynomial.",
    },
    {
      id: 2,
      name: "FOLD",
      label: "Fold mirror",
      type: "Flat Fold Mirror",
      nd: 1.0,
      vd: 0,
      glass: "Aluminized flat surface",
      apd: false,
      fromSurface: "FOLD",
      toSurface: "FOLDB",
      role: "45-degree meridional fold sending the converging beam to the side image plane.",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 20, nd: 1.0, elemId: 0, sd: 12.5 },
    {
      label: "PF",
      R: 1e15,
      d: 0.5,
      nd: 1.0,
      elemId: 1,
      sd: 12.5,
      diffractive: {
        kind: "radial-polynomial",
        referenceWavelengthNm: 587.6,
        diffractionOrder: 1,
        terms: [{ radialPower: 2, coefficient: -0.0025 }],
      },
    },
    /* Same-index back face; present for rendering, excluded from surfaceOrder. */
    { label: "PFB", R: 1e15, d: 99.5, nd: 1.0, elemId: 0, sd: 12.5 },
    {
      label: "FOLD",
      R: 1e15,
      d: 2,
      nd: 1.0,
      elemId: 2,
      sd: 20,
      interaction: {
        type: "reflect",
        incidentSide: "front",
        inactiveSide: "block",
        mirrorKind: "first-surface",
        normal: { z: 1, y: 1 },
      },
    },
    {
      label: "FOLDB",
      R: 1e15,
      d: 0,
      nd: 1.0,
      elemId: 0,
      sd: 20,
      interaction: { type: "refract", normal: { z: 1, y: 1 } },
    },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [
    { text: "PF", fromSurface: "PF", toSurface: "PFB" },
    { text: "FOLD", fromSurface: "FOLD", toSurface: "FOLDB" },
  ],
  doublets: [],
} satisfies LensDataInput;

export default LENS_DATA;
