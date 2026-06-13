import type { LensDataInput } from "../../types/optics.js";

/**
 * Sigma DP1 / DP1s / DP1x 16.6mm f/4 fixed-lens camera objective.
 *
 * Data source: JP 2008-040033 A, Example 1 (Sigma Corporation / Yoshino Shizuka).
 * Six elements in five groups, one aspherical surface, negative-negative-positive-negative-positive power sequence.
 * The patent prescription is used at its native scale: f = 16.67 mm, Fno = 4.02, 2ω = 73.7°.
 *
 * Focus: rear-group internal focusing.  Surface 10A to G5 decreases from 5.0000 mm to 1.4104 mm while
 * back focus increases from 13.7403 mm to 17.3299 mm, conserving the 56.2503 mm first-surface-to-image track.
 *
 * Semi-diameters are not published in the patent.  The values below are inferred from paraxial marginal/chief
 * ray envelopes at 0.75x the patent half-field, then constrained by renderer and physical checks:
 * sd/|R| < 0.90, element SD ratio <= 1.25, positive edge thickness, and <= 90% cross-gap sag intrusion.
 * The stop semi-diameter (3.2186 mm) is derived from the patent design f-number and entrance-pupil trace.
 *
 * The project taxonomy has no exact id for Sigma's 20.7 x 13.8 mm Foveon sensor.  The lens is therefore
 * tagged as fixed-lens APS-C class, while the projection block pins tracing to the patent's 73.7° full field.
 */
const LENS_DATA = {
  key: "sigma-dp1x-16mm-f4",
  maker: "Sigma",
  name: "Sigma DP1x 16.6mm f/4",
  subtitle: "JP 2008-040033 A Example 1 - Sigma / Yoshino",
  specs: [
    "6 elements / 5 groups",
    "f = 16.6 mm (design 16.67 mm)",
    "F4 (design F4.02)",
    "2ω = 73.7°",
    "1 aspherical surface",
    "Rear-group internal focus",
  ],

  focalLengthMarketing: 16.6,
  focalLengthDesign: 16.6722,
  apertureMarketing: 4,
  apertureDesign: 4.02,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "aps-c",
  patentYear: 2008,
  elementCount: 6,
  groupCount: 5,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 73.7,
    maxTraceFieldDeg: 36.85,
  },

  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.9,
      fl: -44.6,
      glass: "Hoya E-FL5 / Hikari J-LF5 light flint (nd=1.58144, νd≈40.9)",
      apd: false,
      role: "Front negative meniscus; opens the field and contributes front-group distortion and lateral-color balance.",
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.4,
      fl: -47.7,
      glass: "Hoya FC5 / Ohara S-FSL5 / Hikari J-FK5 fluor crown (nd=1.48749, νd≈70.4)",
      apd: false,
      role: "Second front negative meniscus; low-dispersion member of the diverging front pair.",
    },
    {
      id: 3,
      name: "G3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.741,
      vd: 52.6,
      fl: 14.9,
      glass: "Hoya TAC2 / Ohara S-LAL61Q class lanthanum crown",
      apd: false,
      role: "Main positive collector immediately before the aperture stop.",
    },
    {
      id: 4,
      name: "G4-L1",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.6,
      fl: -9.3,
      glass: "Hoya FD140 / Ohara S-TIH14 / Hikari J-SF14 dense flint",
      apd: false,
      role: "High-dispersion negative member of the cemented fourth group.",
      cemented: "G4",
    },
    {
      id: 5,
      name: "G4-L2",
      label: "Element 5",
      type: "Biconvex Positive (1x Asph)",
      nd: 1.77227,
      vd: 47.1,
      fl: 11.9,
      glass: "Hoya M-TAF401 class lanthanum flint (soft match; Example 2 exact)",
      apd: false,
      role: "Lower-dispersion positive member of the G4 doublet and carrier of the image-side asphere.",
      cemented: "G4",
    },
    {
      id: 6,
      name: "G5",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.2,
      fl: 103.1,
      glass: "M-BACD5N (Hoya) / S-BAL35 / N-SK5 crown",
      apd: false,
      role: "Weak positive rear focusing group; helps set the near-telecentric exit geometry.",
    },
  ],

  surfaces: [
    { label: "1", R: 22.05, d: 1.35, nd: 1.58144, elemId: 1, sd: 10.0 },
    { label: "2", R: 11.65, d: 3.09, nd: 1.0, elemId: 0, sd: 9.3 },
    { label: "3", R: 24.0, d: 1.0, nd: 1.48749, elemId: 2, sd: 8.8 },
    { label: "4", R: 11.65, d: 14.88, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "5", R: 13.52, d: 2.8, nd: 1.741, elemId: 3, sd: 5.5 },
    { label: "6", R: -54.14, d: 1.2, nd: 1.0, elemId: 0, sd: 5.0 },
    { label: "STO", R: 1e15, d: 5.2, nd: 1.0, elemId: 0, sd: 3.2186 },
    { label: "8", R: -13.08, d: 1.3, nd: 1.76182, elemId: 4, sd: 4.8 },
    { label: "9", R: 16.15, d: 4.3, nd: 1.77227, elemId: 5, sd: 5.2 },
    { label: "10A", R: -18.97, d: 5.0, nd: 1.0, elemId: 0, sd: 6.3 },
    { label: "11", R: 64.64, d: 2.39, nd: 1.58913, elemId: 6, sd: 7.0 },
    { label: "12", R: -1000.0, d: 13.7403, nd: 1.0, elemId: 0, sd: 7.0 },
  ],

  asph: {
    "10A": {
      K: 1.5919,
      A4: 1.611e-4,
      A6: 1.0935e-6,
      A8: 1.769e-8,
      A10: 1.034e-10,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "10A": [5.0, 1.4104],
    "12": [13.7403, 17.3299],
  },
  varLabels: [
    ["10A", "D10"],
    ["12", "BF"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
    { text: "G4", fromSurface: "8", toSurface: "10A" },
    { text: "G5", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [{ text: "G4", fromSurface: "8", toSurface: "10A" }],

  focusDescription:
    "Rear-group internal focusing: G5 moves 3.5896 mm toward the object from infinity to 0.30 m while the first-surface-to-image track remains 56.2503 mm.",
  closeFocusM: 0.3,
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16],
  yScFill: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
