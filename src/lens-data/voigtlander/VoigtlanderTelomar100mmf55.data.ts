import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║         LENS DATA — VOIGTLÄNDER TELOMAR 100mm f/5.5                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: US 2,662,446 A, sole Numerical Example / Figure 3.         ║
 * ║  Correlated product: Voigtländer Telomar 100mm f/5.5 for the Prominent     ║
 * ║  reflex housing. The patent states that Figure 3 represents a 150 mm       ║
 * ║  f/5.4 system; applying the printed normalization at ×100 is therefore a    ║
 * ║  disclosed family-correlation model, not documentary proof of the exact    ║
 * ║  production 100 mm prescription.                                           ║
 * ║                                                                            ║
 * ║  SCALING: The patent table is normalized to f = 1. All radii, thicknesses, ║
 * ║  air spaces, image distance, stop size, and inferred semi-diameters are     ║
 * ║  scaled ×100. No asphere coefficients are present.                         ║
 * ║                                                                            ║
 * ║  SOURCE CONTRADICTION: The raw printed table is preserved, including       ║
 * ║  a2 = 0.27242. It computes EFL = 101.259059 mm and BFD = 39.682367 mm,     ║
 * ║  rather than the patent's stated f = 100 mm and p0' = 38.247 mm. Setting  ║
 * ║  a2 = 0.279445545 would match p0' only; a2 = 0.280089427 would match EFL  ║
 * ║  only. Neither uncorroborated correction is applied.                       ║
 * ║                                                                            ║
 * ║  STOP: The patent publishes only the full diaphragm space a2. A fresh      ║
 * ║  measurement of Figure 3 places STO at about 62% of the R4-to-R5 gap:     ║
 * ║  16.89004 mm before STO and 10.35196 mm after it. The inferred physical   ║
 * ║  stop SD 6.312254 mm gives an 18.5 mm entrance pupil and f/5.473463.       ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent publishes none. The values below are modeling  ║
 * ║  inferences constrained by exact spherical ray tracing over the 24×36 mm   ║
 * ║  frame, Figure 3 proportions, on-axis pupil passage, element edge          ║
 * ║  thickness, actual rim slope, cross-gap intrusion, off-axis containment,   ║
 * ║  and zero required geometry trim. A 600 dpi Figure 3 audit equalized the   ║
 * ║  rear cemented-member rims to better match the published silhouette.       ║
 * ║  Wide-open full-field meridional rays are intentionally vignetted by the   ║
 * ║  compact front group.                                                       ║
 * ║                                                                            ║
 * ║  FOCUS STATUS: NO_INTERNAL_RECONSTRUCTION. The patent publishes only the   ║
 * ║  infinity state. The approximate 6 ft metadata value is inferred from the  ║
 * ║  supplied manual's focus scale/finder note; no optical focus state is      ║
 * ║  reconstructed.                                                            ║
 * ║                                                                            ║
 * ║  SPECTRAL DATA: The patent supplies nd and νd only. nC, nF, ng, and dPgF  ║
 * ║  are intentionally omitted. Glass labels are six-digit or class-level       ║
 * ║  historical-melt annotations, not exact production-vendor identities.      ║
 * ║                                                                            ║
 * ║  Excluded: sensor/film cover glass, filters, inactive dummy planes, mirror ║
 * ║  and reflex-housing mechanics, shutter components, and barrel hardware.    ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "voigtlander-telomar-100mm-f55",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER TELOMAR 100mm f/5.5",
  subtitle: "US 2,662,446 A — sole Numerical Example / Figure 3; ×100 family-correlation model",
  specs: [
    "5 ELEMENTS / 4 GROUPS",
    "DESIGN f = 101.259 mm",
    "MODELED f/5.473",
    "135 FULL-FRAME",
    "ALL SPHERICAL",
  ],

  focalLengthMarketing: 100,
  focalLengthDesign: 101.25905877084244,
  apertureMarketing: 5.5,
  apertureDesign: 5.473462636261754,
  nominalFno: 5.473462636261754,
  imageFormat: "135-full-frame",
  patentNumber: "US 2,662,446 A",
  patentAuthors: ["Albrecht Wilhelm Tronnier"],
  patentAssignees: ["Voigtländer A.G."],
  patentYear: 1953,
  elementCount: 5,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Member I positive element",
      type: "Biconvex Positive",
      nd: 1.5836,
      vd: 46.2,
      fl: 27.8625899111698,
      glass: "J-BAF3 (Hikari catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Strong front positive collector in the Fraunhofer-type positive front member.",
    },
    {
      id: 2,
      name: "L2",
      label: "Member II negative element",
      type: "Biconcave Negative",
      nd: 1.72755,
      vd: 28.4,
      fl: -42.86426809522021,
      glass: "SF10 (Schott catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Negative achromatizing partner separated from L1 by the patent's retained 0.117 mm air space.",
    },
    {
      id: 3,
      name: "L3",
      label: "Member III positive element",
      type: "Biconvex Positive",
      nd: 1.62355,
      vd: 47.0,
      fl: 85.87943252931777,
      glass: "E-BAF8 (Hikari catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Positive collector that begins the rear functional member after the diaphragm space.",
    },
    {
      id: 4,
      name: "L4",
      label: "Member IV front negative element",
      type: "Biconcave Negative",
      nd: 1.58264,
      vd: 42.1,
      fl: -21.1216507575926,
      glass: "LF3 (Sumita catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Strong negative element carrying the characteristic concave R7 surface.",
      cemented: "IV",
    },
    {
      id: 5,
      name: "L5",
      label: "Member IV rear positive element",
      type: "Biconvex Positive",
      nd: 1.75512,
      vd: 27.0,
      fl: 45.823424457371,
      glass: "SF4 (Schott catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Positive cemented partner; the L4+L5 member remains net negative in isolation.",
      cemented: "IV",
    },
  ],

  surfaces: [
    { label: "1", R: 24.249, d: 3.716, nd: 1.5836, elemId: 1, sd: 10.3 },
    { label: "2", R: -46.572, d: 0.117, nd: 1.0, elemId: 0, sd: 10.3 },
    { label: "3", R: -46.572, d: 1.395, nd: 1.72755, elemId: 2, sd: 10.3 },
    { label: "4", R: 95.587, d: 16.89004, nd: 1.0, elemId: 0, sd: 10.3 },

    // STO position inferred from Figure 3: approximately 62% of a2 measured from R4.
    { label: "STO", R: 1e15, d: 10.35196, nd: 1.0, elemId: 0, sd: 6.31225354830045 },

    { label: "5", R: 95.587, d: 2.906, nd: 1.62355, elemId: 3, sd: 10.0 },
    { label: "6", R: -120.345, d: 4.413, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "7", R: -17.794, d: 1.741, nd: 1.58264, elemId: 4, sd: 11.0 },
    { label: "8", R: 41.341, d: 3.098, nd: 1.75512, elemId: 5, sd: 11.0 },
    { label: "9", R: -205.432, d: 39.68236651524317, nd: 1.0, elemId: 0, sd: 11.0 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: the patent publishes only the infinity prescription. " +
    "The approximate 1.8288 m (6 ft) metadata value is inferred from the supplied manual; " +
    "no variable optical gap is modeled.",
  closeFocusM: 1.8288,

  groups: [
    { text: "FRONT (I–II)", fromSurface: "1", toSurface: "4" },
    { text: "REAR (III–IV)", fromSurface: "5", toSurface: "9" },
  ],
  doublets: [{ text: "IV", fromSurface: "7", toSurface: "9" }],

  fstopSeries: [5.5, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.58,
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
