import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AI MICRO-NIKKOR 55mm f/2.8                            ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: US 4,260,223 A, Example 1 (Yoshinari Hamanishi).          ║
 * ║  Production correlation: Nikon Ai Micro-Nikkor 55mm f/2.8.               ║
 * ║  Six glass elements in five air-separated groups; all spherical.          ║
 * ║                                                                            ║
 * ║  SCALE: The patent example is normalized to f = 100. All dimensional       ║
 * ║  prescription values are scaled ×0.55. Indices and Abbe numbers are        ║
 * ║  unchanged. There are no aspheric coefficients to transform.               ║
 * ║                                                                            ║
 * ║  FOCUS STATUS: CONSTRAINED_RECONSTRUCTION. The patent publishes infinity   ║
 * ║  and β = -1 states but not the production lens's bare 1:2 endpoint.         ║
 * ║  The close state below is code-solved from Nikon's 0.25 m film-plane MFD   ║
 * ║  and 1:2 maximum reproduction ratio while preserving the patent's single   ║
 * ║  intergroup degree of freedom and the stop's fixed position relative to G2.║
 * ║  In physical camera coordinates, G1 and G2 move objectward by 28.924699 mm ║
 * ║  and 27.466177 mm, respectively. In this lens-relative sequential model,   ║
 * ║  the equivalent changes are D6-to-stop +1.458522 mm and BF +27.466177 mm.  ║
 * ║                                                                            ║
 * ║  STOP: The patent fixes the diaphragm 5.818 normalized units objectward    ║
 * ║  of surface 7. After scaling, STO→7 is fixed at 3.199900 mm. The physical  ║
 * ║  stop semi-diameter (7.417014 mm) is inferred from the published f/2.8,    ║
 * ║  because the patent does not tabulate the aperture diameter.                ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent does not publish clear apertures. SDs are       ║
 * ║  modeling values derived from pupil/chief-ray envelopes at infinity        ║
 * ║  and reconstructed 1:2 focus, then constrained by spherical rim slope,     ║
 * ║  element edge thickness, cross-gap sag intrusion, the patent optical       ║
 * ║  section, and exact rendered-ray proxy checks. They are not source values.  ║
 * ║                                                                            ║
 * ║  GLASS: The patent publishes index/Abbe coordinates and no supplier. The   ║
 * ║  project-default nd/vd reference is retained and compatible catalog curves ║
 * ║  are qualified spectral proxies. No source line data are added.            ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer references used for marketed identity/mechanics:
 * - https://www.nikonusa.com/pdf/manuals/archive/Micro-Nikkor%2055mm%20f-2.8.pdf
 * - https://imaging.nikon.com/imaging/information/story/0026/
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-ai-micro-nikkor-55f28",
  maker: "Nikon",
  name: "NIKON AI MICRO-NIKKOR 55mm f/2.8",
  subtitle: "US 4,260,223 A — Example 1; ×0.55 production correlation",
  specs: ["6 ELEMENTS / 5 GROUPS", "55mm", "f/2.8", "43°", "0.25m / 1:2"],

  focalLengthMarketing: 55,
  focalLengthDesign: 54.998916492,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,260,223 A",
  patentAuthors: ["Yoshinari Hamanishi"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1981,
  elementCount: 6,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.77279,
      vd: 49.4,
      fl: 61.19644,
      glass: "773494 — M-TAF1 (HOYA) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Front positive element of G1.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: 59.909762,
      glass: "713539 — lanthanum-crown coordinate class (supplier unresolved)",
      apd: false,
      role: "Second positive element of G1.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.61293,
      vd: 36.9,
      fl: -32.135825,
      glass: "613369 — F3 (SUMITA) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Negative rear element of G1.",
    },
    {
      id: 4,
      name: "L4a",
      diagramLabel: "L4a",
      label: "Element 4a",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30,
      fl: -29.664241,
      glass: "699300 — dense-flint coordinate class (supplier unresolved)",
      apd: false,
      role: "Negative front member of the cemented L4 pair in G2.",
      cemented: "L4",
    },
    {
      id: 5,
      name: "L4b",
      diagramLabel: "L4b",
      label: "Element 4b",
      type: "Biconvex Positive",
      nd: 1.74443,
      vd: 49.4,
      fl: 31.330906,
      glass: "744494 — M-NBF1 (HOYA) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Positive rear member of the cemented L4 pair in G2.",
      cemented: "L4",
    },
    {
      id: 6,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.79668,
      vd: 45.4,
      fl: 94.616866,
      glass:
        "797454 — J-LASF017 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Rear positive element of G2.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 51.1951, d: 3.7499, nd: 1.77279, elemId: 1, sd: 15.8 },
    { label: "2", R: -600.4999, d: 0.1001, nd: 1, elemId: 0, sd: 14.6 },
    { label: "3", R: 18.99975, d: 3.7499, nd: 1.713, elemId: 2, sd: 13.5 },
    { label: "4", R: 31.40995, d: 1.04995, nd: 1, elemId: 0, sd: 9.2 },
    { label: "5", R: 89.9998, d: 1.04995, nd: 1.61293, elemId: 3, sd: 11 },
    { label: "6", R: 16.0886, d: 4.11565, nd: 1, elemId: 0, sd: 11 },
    { label: "STO", R: 1e15, d: 3.1999, nd: 1, elemId: 0, sd: 7.417014298 },
    { label: "7", R: -22.30525, d: 1.04995, nd: 1.69895, elemId: 4, sd: 10.5 },
    { label: "8", R: 300.00025, d: 8.0498, nd: 1.74443, elemId: 5, sd: 10.5 },
    { label: "9", R: -25.00025, d: 0.1001, nd: 1, elemId: 0, sd: 12.7 },
    { label: "10", R: 190.0459, d: 3.7499, nd: 1.79668, elemId: 6, sd: 12.8 },
    { label: "11", R: -123.8391, d: 42.456380475, nd: 1, elemId: 0, sd: 13.4 },
  ],

  asph: {},

  /* ── Focus model ── */
  var: {
    "6": [4.11565, 5.574172105],
    "11": [42.456380475, 69.922557076],
  },
  varLabels: [
    ["6", "D6"],
    ["11", "BF"],
  ],

  groups: [
    { text: "G1 (+) / FOCUS → OBJ", fromSurface: "1", toSurface: "6" },
    { text: "G2 (+) / FOCUS → OBJ", fromSurface: "7", toSurface: "11" },
  ],
  doublets: [{ text: "L4", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.25,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION to the production 1:2 endpoint at 0.25 m. The patent's d6 is split at the " +
    "published diaphragm: STO→7 remains 3.199900 mm, while 6→STO changes 4.115650→5.574172 mm. The BF change " +
    "42.456380→69.922557 mm is the lens-relative equivalent of both groups moving objectward " +
    "against a fixed film plane.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
