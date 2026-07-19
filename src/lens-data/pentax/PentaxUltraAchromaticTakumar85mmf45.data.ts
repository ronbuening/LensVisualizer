import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║     LENS DATA — PENTAX ULTRA-ACHROMATIC-TAKUMAR 85mm f/4.5               ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,490,825, sole numerical example (Yasuo Takahashi /      ║
 * ║  Asahi Kogaku Kogyo). Five air-spaced, all-spherical elements made only    ║
 * ║  from fused silica and calcium-fluoride fluorite.                           ║
 * ║                                                                            ║
 * ║  SCALING: The patent example is normalized to f = 100 mm. Every radius,    ║
 * ║  axial spacing, back focus, and inferred semi-diameter is scaled ×0.85     ║
 * ║  to the production 85 mm focal length. Computed EFL = 84.9969 mm.          ║
 * ║                                                                            ║
 * ║  STOP: The patent gives no numerical stop station. Figure 1 places the     ║
 * ║  diaphragm in d6, between surfaces 6 and 7. The 7.225 mm production-scale  ║
 * ║  gap is therefore split 2.975 / 4.250 mm from the drawing. Stop SD is      ║
 * ║  solved paraxially for f/4.5.                                               ║
 * ║                                                                            ║
 * ║  FOCUS: The patent publishes only the infinity prescription. Unit          ║
 * ║  extension is inferred for the production manual-focus lens. The final     ║
 * ║  BFD varies from 66.7116 mm at infinity to 84.3134 mm at 0.6 m MFD.        ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: The patent lists none. Values are inferred from combined  ║
 * ║  marginal/chief-ray envelopes at the 29° production field, then constrained║
 * ║  by spherical rim slope, signed cross-gap sag intrusion, and ≥0.5 mm edge ║
 * ║  thickness. The edge-limited rear element permits modeled wide-open corner ║
 * ║  vignetting rather than using an unphysical clear aperture.                ║
 * ║                                                                            ║
 * ║  MATERIAL DISPERSION: Patent nd/νd values are retained. Explicit C/F/g     ║
 * ║  line indices use Corning HPFS fused-silica and OptiGrade CaF2 reference   ║
 * ║  data. The L4 νd = 69.0 entry follows the patent table; the same material  ║
 * ║  is 69.6 at L1 and approximately 67.8 in current fused-silica data. APD    ║
 * ║  badges are reserved for the three strongly anomalous fluorite elements.  ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "pentax-ultra-achromatic-takumar-85f45",
  maker: "Pentax",
  name: "PENTAX ULTRA-ACHROMATIC-TAKUMAR 85mm f/4.5",
  subtitle: "US 3,490,825 — YASUO TAKAHASHI / ASAHI OPTICAL",
  specs: [
    "5 ELEMENTS / 5 GROUPS",
    "f = 85mm (PATENT f = 100mm × 0.85)",
    "F/4.5",
    "2ω = 29° (PRODUCTION)",
    "ALL-SPHERICAL FUSED-SILICA / FLUORITE",
    "220–1000nm MANUFACTURER CORRECTION RANGE",
  ],

  focalLengthMarketing: 85,
  focalLengthDesign: 84.9969,
  apertureMarketing: 4.5,
  apertureDesign: 4.5,
  lensMounts: ["m42"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,490,825",
  patentAuthors: ["Yasuo Takahashi"],
  patentAssignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  patentYear: 1970,
  elementCount: 5,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.45854,
      vd: 69.6,
      fl: -53.1251,
      glass: "Fused silica / synthetic quartz (SiO2; patent-identified; Corning HPFS reference dispersion)",
      apd: false,
      dPgF: -0.00179355,
      nC: 1.456425,
      nF: 1.463183,
      ng: 1.466751,
      role: "Strong negative front member; controls cumulative front-cell power and contributes to Petzval reduction.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 94.9,
      fl: 53.8104,
      glass: "Calcium-fluoride fluorite (CaF2; patent-identified; Corning OptiGrade reference dispersion)",
      apd: "inferred",
      apdNote: "Corning OptiGrade reference: dPgF = +0.05702; strong positive anomalous partial dispersion.",
      dPgF: 0.05701938,
      nC: 1.43247,
      nF: 1.43702,
      ng: 1.43948,
      role: "First positive fluorite member in the compound front cell; balances L1 chromatically and optically.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 94.9,
      fl: 41.1517,
      glass: "Calcium-fluoride fluorite (CaF2; patent-identified; Corning OptiGrade reference dispersion)",
      apd: "inferred",
      apdNote: "Corning OptiGrade reference: dPgF = +0.05702; strong positive anomalous partial dispersion.",
      dPgF: 0.05701938,
      nC: 1.43247,
      nF: 1.43702,
      ng: 1.43948,
      role: "Strongest standalone positive element; completes the net-positive L1–L3 front equivalent.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.45854,
      vd: 69.0,
      fl: -24.035,
      glass: "Fused silica / synthetic quartz (SiO2; patent-identified; Corning HPFS reference dispersion)",
      apd: false,
      dPgF: -0.00179355,
      nC: 1.456425,
      nF: 1.463183,
      ng: 1.466751,
      role: "Central negative member of the modified-triplet equivalent; drives L1–L4 cumulative power negative.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 94.9,
      fl: 47.0165,
      glass: "Calcium-fluoride fluorite (CaF2; patent-identified; Corning OptiGrade reference dispersion)",
      apd: "inferred",
      apdNote: "Corning OptiGrade reference: dPgF = +0.05702; strong positive anomalous partial dispersion.",
      dPgF: 0.05701938,
      nC: 1.43247,
      nF: 1.43702,
      ng: 1.43948,
      role: "Rear positive member; restores final system power and participates in astigmatism/Petzval balance.",
    },
  ],

  /* ── Surfaces: patent dimensions uniformly scaled ×0.85 ── */
  surfaces: [
    { label: "1", R: -32.725, d: 1.275, nd: 1.45854, elemId: 1, sd: 12.4 },
    { label: "2", R: 96.4665, d: 0.85, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "3", R: 47.175, d: 4.25, nd: 1.43387, elemId: 2, sd: 12.4 },
    { label: "4", R: -44.9616, d: 0.17, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "5", R: 20.825, d: 5.1, nd: 1.43387, elemId: 3, sd: 12.0 },
    { label: "6", R: -115.89495, d: 2.975, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "STO", R: 1e15, d: 4.25, nd: 1.0, elemId: 0, sd: 8.461424 },
    { label: "7", R: -32.3, d: 1.7, nd: 1.45854, elemId: 4, sd: 9.5 },
    { label: "8", R: 17.00595, d: 5.95, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "9", R: 33.15, d: 3.4, nd: 1.43387, elemId: 5, sd: 10.6 },
    { label: "10", R: -51.3876, d: 66.711556, nd: 1.0, elemId: 0, sd: 10.6 },
  ],

  asph: {},

  /* ── Focus: inferred unit extension ── */
  var: {
    "10": [66.711556, 84.31344],
  },
  varLabels: [["10", "BF"]],
  focusDescription:
    "Unit extension (inferred from the fixed patent prescription and production helicoid); BFD increases 17.6019 mm from infinity to 0.6 m.",

  /* ── Diagram annotations ── */
  groups: [
    { text: "FRONT POSITIVE EQUIVALENT", fromSurface: "1", toSurface: "6" },
    { text: "CENTRAL NEGATIVE", fromSurface: "7", toSurface: "8" },
    { text: "REAR POSITIVE", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [],

  /* ── Product / UI data ── */
  closeFocusM: 0.6,
  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.62,
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
