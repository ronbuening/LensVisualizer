import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AI AF ZOOM-NIKKOR 18-35mm f/3.5-4.5 D IF-ED                                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2001/0030812 A1, Example 2 (Akiko Furuta).                                       ║
 * ║  Production correlation: Nikon AI AF Zoom-Nikkor 18-35mm f/3.5-4.5D IF-ED.                         ║
 * ║  Physical design: 11 elements / 8 air-separated groups; 1 compound aspherical element.             ║
 * ║  Modeling entries: 12, because the 0.1000 mm compound-asphere layer is an optically active medium. ║
 * ║  Focus status: PUBLISHED. G2a translates imageward; d9 + d12 is conserved at each zoom position.   ║
 * ║  Zoom + focus gaps: 9 and 12. Zoom-only rear gap: 21 (Bf). No sampled W-M-T group reversal.        ║
 * ║  Scaling: none (s = 1.0). All patent dimensions and asphere coefficients remain unscaled.          ║
 * ║                                                                                                    ║
 * ║  Source correction: Example 2 Table 2 prints νd = 5.30 for surface 1. The model uses νd = 45.30,  ║
 * ║  matching the same n = 1.794997 material at surface 4 and the corresponding rows in Examples 1/3. ║
 * ║  Asphere convention: patent κ = 5.4350 converts to project K = κ - 1 = 4.4350.                     ║
 * ║  Condition (6): printed coefficients give X(14)-X(7) = 2.423006488 mm, not the printed 2.34 mm;   ║
 * ║  the inequality still passes, so the printed coefficients are retained unchanged.                  ║
 * ║  Near-focus d0: the printed values plus the S1-to-image track total about 323.330 mm, not the       ║
 * ║  table's R = 0.33 m definition. The published d9/d12 focus motion is nevertheless internally exact. ║
 * ║                                                                                                    ║
 * ║  Semi-diameters are inferred, not patent-listed. They were sized from sequential y–ν marginal/chief ║
 * ║  ray envelopes for all three published infinity and R=0.33 m focus states, including the viewer's  ║
 * ║  default 0.60 off-axis field and default on/off-axis pupil samples, then checked against current    ║
 * ║  edge-thickness, actual-rim-slope, conic-limit, shared-band cross-gap, and no-trim geometry rules.  ║
 * ║  L13 is slightly taller than L14 to follow the Figure 4A front-group silhouette.                   ║
 * ║  The 0.7 mm air gap 16→17 is the geometric limiter; its shared SD is intentionally 7.4 mm.          ║
 * ║  The STO SD is a physical-clearance ceiling; per-zoom wide-open aperture follows nominalFno.        ║
 * ║                                                                                                    ║
 * ║  Spectral data: the patent publishes only nd and νd. Compatible coefficient-backed catalog         ║
 * ║  equivalents model dispersion without asserting production suppliers; no patent nC/nF/ng or dPgF   ║
 * ║  values are invented. The unidentified compound-asphere layer remains unmatched.                    ║
 * ║                                                                                                    ║
 * ║  Manufacturer metadata sources (identity/marketing only):                                          ║
 * ║  - https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af_zoom-nikkor_18-35mm_f35-45d_if-ed/  ║
 * ║  - https://nij.nikon.com/cms/support/manual/nikkor/AF_18-35mm_%2880%29_05.pdf                     ║
 * ║  Aperture-blade count is omitted because current Nikon product metadata (7) conflicts with the     ║
 * ║  contemporaneous Nikon manual (9).                                                                  ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-ai-af-zoom-nikkor-18-35mm-f3-5-4-5d-if-ed",
  maker: "Nikon",
  name: "NIKON AI AF ZOOM-NIKKOR 18-35mm f/3.5-4.5 D IF-ED",
  subtitle: "US 2001/0030812 A1 Example 2 — production-correlated design",
  specs: [
    "18-35mm f/3.5-4.5",
    "11 ELEMENTS / 8 GROUPS",
    "1 COMPOUND ASPHERICAL + 1 ED ELEMENT",
    "INTERNAL FOCUS • 0.33 m MFD",
  ],

  focalLengthMarketing: [18, 35],
  focalLengthDesign: [18.500314093, 34.001110167],
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2001/0030812 A1",
  patentAuthors: ["Akiko Furuta"],
  patentAssignees: [],
  patentYear: 2001,
  elementCount: 11,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.794997,
      vd: 45.3,
      fl: -40.975921,
      glass: "795453 class (vendor unspecified)",
      role: "Front negative meniscus of G1.",
    },
    {
      id: 2,
      name: "L12c",
      label: "L12 compound layer",
      type: "Compound Asphere Layer",
      nd: 1.50625,
      vd: 55.63,
      glass: "Unmatched (compound-asphere layer; material not identified)",
      cemented: "H1",
      role: "Optically active 0.1000 mm front layer of the physical L12 compound aspherical element.",
    },
    {
      id: 3,
      name: "L12",
      label: "L12 substrate",
      type: "Negative Meniscus Substrate",
      nd: 1.794997,
      vd: 45.3,
      glass: "795453 class (vendor unspecified)",
      cemented: "H1",
      role: "Glass substrate of the physical L12 compound aspherical element.",
    },
    {
      id: 4,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.79,
      fl: -47.314388,
      glass: "H-LaF3B catalog equivalent (patent 744448; production supplier unspecified)",
      role: "Third negative element of G1.",
    },
    {
      id: 5,
      name: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 1.79504,
      vd: 28.56,
      fl: 53.069165,
      glass: "J-LAFH3 catalog equivalent (patent 795286; production supplier unspecified)",
      role: "Positive rear element of G1.",
    },
    {
      id: 6,
      name: "L21",
      label: "L21",
      type: "Negative Meniscus",
      nd: 1.788,
      vd: 47.38,
      fl: -54.097023,
      glass: "788474 class (vendor unspecified)",
      cemented: "D21",
      role: "Negative member of the moving G2a inner-focus doublet.",
    },
    {
      id: 7,
      name: "L22",
      label: "L22",
      type: "Biconvex Positive",
      nd: 1.50137,
      vd: 56.41,
      fl: 32.903387,
      glass: "501564 class (vendor unspecified)",
      cemented: "D21",
      role: "Positive member of the moving G2a inner-focus doublet.",
    },
    {
      id: 8,
      name: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.53996,
      vd: 59.47,
      fl: 22.324137,
      glass: "BAK2 catalog equivalent (patent 540595; production supplier unspecified)",
      cemented: "D23",
      role: "Positive member of the first G2b cemented pair.",
    },
    {
      id: 9,
      name: "L24",
      label: "L24",
      type: "Biconcave Negative",
      nd: 1.794997,
      vd: 45.3,
      fl: -18.4233,
      glass: "795453 class (vendor unspecified)",
      cemented: "D23",
      role: "Negative member of the first G2b cemented pair.",
    },
    {
      id: 10,
      name: "L25",
      label: "L25",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.35,
      fl: -19.395459,
      glass: "NBFD10 catalog equivalent (patent 834374; production supplier unspecified)",
      cemented: "D25",
      role: "Negative member of the second G2b cemented pair.",
    },
    {
      id: 11,
      name: "L26",
      label: "L26",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      fl: 18.481122,
      glass: "J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)",
      cemented: "D25",
      role: "High-Abbe positive member correlated with Nikon's single production ED element.",
    },
    {
      id: 12,
      name: "L27",
      label: "L27",
      type: "Biconvex Positive",
      nd: 1.53996,
      vd: 59.47,
      fl: 128.309853,
      glass: "BAK2 catalog equivalent (patent 540595; production supplier unspecified)",
      role: "Final positive element of G2b.",
    },
  ],

  surfaces: [
    { label: "1", R: 50.7591, d: 2.5, nd: 1.794997, elemId: 1, sd: 20.0 },
    { label: "2", R: 19.409, d: 7.0, nd: 1.0, elemId: 0, sd: 17.2 },
    { label: "3A", R: 44.2666, d: 0.1, nd: 1.50625, elemId: 2, sd: 15.0 },
    { label: "4", R: 28.8114, d: 2.0, nd: 1.794997, elemId: 3, sd: 15.0 },
    { label: "5", R: 22.1978, d: 8.2, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "6", R: -121.5705, d: 1.7, nd: 1.744, elemId: 4, sd: 14.0 },
    { label: "7", R: 49.845, d: 6.8, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "8", R: 58.0463, d: 4.5, nd: 1.79504, elemId: 5, sd: 13.2 },
    { label: "9", R: -149.1721, d: 28.42071, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "10", R: 51.029, d: 1.0, nd: 1.788, elemId: 6, sd: 10.2 },
    { label: "11", R: 23.0254, d: 3.8, nd: 1.50137, elemId: 7, sd: 10.2 },
    { label: "12", R: -54.9749, d: 5.16566, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "STO", R: 1e15, d: 1.5, nd: 1.0, elemId: 0, sd: 8.6 },
    { label: "14", R: 17.6537, d: 14.2, nd: 1.53996, elemId: 8, sd: 9.0 },
    { label: "15", R: -27.2848, d: 1.3, nd: 1.794997, elemId: 9, sd: 8.3 },
    { label: "16", R: 32.2874, d: 0.7, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "17", R: 110.4491, d: 1.3, nd: 1.834, elemId: 10, sd: 7.4 },
    { label: "18", R: 14.0339, d: 5.3, nd: 1.49782, elemId: 11, sd: 8.0 },
    { label: "19", R: -23.3591, d: 0.1, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "20", R: 138.2833, d: 1.6, nd: 1.53996, elemId: 12, sd: 10.2 },
    { label: "21", R: -138.2833, d: 38.29481, nd: 1.0, elemId: 0, sd: 10.2 },
  ],

  asph: {
    "3A": {
      K: 4.435,
      A4: 7.1876e-6,
      A6: 3.6412e-9,
      A8: 3.9918e-11,
      A10: 3.3225e-14,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [18.50037, 25.00067, 34.00123],
  zoomLabels: ["Wide", "Tele"],

  var: {
    "9": [
      [28.42071, 32.42986],
      [12.78191, 16.6059],
      [0.99974, 4.95936],
    ],
    "12": [
      [5.16566, 1.15651],
      [5.16566, 1.34167],
      [5.16566, 1.20604],
    ],
    "21": [
      [38.29481, 38.29481],
      [46.49762, 46.49762],
      [57.85554, 57.85554],
    ],
  },

  varLabels: [
    ["9", "D9"],
    ["12", "D12"],
    ["21", "BF"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "9" },
    { text: "G2a (IF)", fromSurface: "10", toSurface: "12" },
    { text: "G2b", fromSurface: "14", toSurface: "21" },
  ],

  doublets: [
    { text: "H1", fromSurface: "3A", toSurface: "5" },
    { text: "D21", fromSurface: "10", toSurface: "12" },
    { text: "D23", fromSurface: "14", toSurface: "16" },
    { text: "D25", fromSurface: "17", toSurface: "19" },
  ],

  closeFocusM: 0.33,
  focusDescription:
    "PUBLISHED inner-focus states: G2a translates imageward while d9+d12 is conserved at each zoom position; " +
    "near rows are labeled R=0.33 m. The printed Example 2 d0 row is internally inconsistent with the patent's " +
    "object-to-image definition of R (d0 + S1-to-image track is about 323.330 mm), so d0 is not used to reconstruct movement.",

  nominalFno: [3.59, 4.12, 4.62],
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  yScFill: 0.36,
} satisfies LensDataInput;

export default LENS_DATA;
