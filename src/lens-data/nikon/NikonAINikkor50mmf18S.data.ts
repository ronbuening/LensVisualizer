import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AI NIKKOR 50mm f/1.8 S                                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 4,234,242 A, Example 3 (Soichi Nakamura / Nippon Kogaku). ║
 * ║ Production correlation: Nikon Tale 60, AI Nikkor 50mm f/1.8S.             ║
 * ║ 6 elements / 5 air-separated groups; all spherical.                       ║
 * ║                                                                            ║
 * ║ SCALING: the patent example is normalized to f = 100 mm. All radii,       ║
 * ║ thicknesses, air gaps, BFD, semi-diameters, and image-plane coordinates   ║
 * ║ are scaled ×0.5. Indices and Abbe numbers are unchanged. No aspheres      ║
 * ║ are present, so no A_p scaling is required.                               ║
 * ║                                                                            ║
 * ║ SOURCE CORRECTION: the official 1981-04-14 Certificate of Correction      ║
 * ║ changes Example 3 / Claim 4 L4a from n = 1.64841, v = 1.6733 to           ║
 * ║ n = 1.64831, v = 33.8. The corrected values are used below.               ║
 * ║                                                                            ║
 * ║ STOP MODEL: the patent publishes only that the diaphragm lies within d6.  ║
 * ║ The STO plane is placed at the midpoint of scaled d6 (5.54975 mm on each  ║
 * ║ side), consistent with the central placement shown in patent Fig. 2 and   ║
 * ║ Nikon Tale 60 Fig. 1. This is an explicit modeling inference, not a        ║
 * ║ patent-tabulated coordinate. STO sd is solved so the modeled infinity     ║
 * ║ entrance pupil gives f/1.8.                                                ║
 * ║                                                                            ║
 * ║ FOCUS STATUS: CONSTRAINED_RECONSTRUCTION. The patent publishes no focus   ║
 * ║ state. Internal spacings remain fixed and the complete optical cell unit- ║
 * ║ focuses. With the manufacturer-rounded 0.45 m focal-plane object distance,║
 * ║ the final air gap is code-solved from 37.1 mm at infinity to              ║
 * ║ 44.3095517997571 mm at close focus.                                       ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: not patent-tabulated. They are ray-derived modeling values ║
 * ║ constrained by on-axis marginal rays, the default 0.6-field off-axis fan, ║
 * ║ the Nikon optical section, and current edge/slope/cross-gap geometry rules.║
 * ║ Figure 2 supports a common 11.5 mm modeled rim across L3 and cemented L4; ║
 * ║ this also preserves the full authored outlines without render-time trims. ║
 * ║                                                                            ║
 * ║ GLASS: supplier identity is unresolved. Labels preserve corrected d-line  ║
 * ║ coordinates and identify compatible catalog curves as spectral proxies.   ║
 * ║ The patent provides no nC, nF, ng, PgF, or dPgF values, so no spectral   ║
 * ║ fields are authored and no APO/anomalous-dispersion claim is implied.     ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * Manufacturer source:
 * https://imaging.nikon.com/imaging/information/story/0060/
 */

const LENS_DATA = {
  key: "nikon-ai-nikkor-50f18s",
  maker: "Nikon",
  name: "NIKON AI NIKKOR 50mm f/1.8 S",
  subtitle: "US 4,234,242 A — Example 3; ×0.5 patent-to-production correlation",
  specs: ["6 ELEMENTS / 5 GROUPS", "50 mm", "F/1.8", "2ω = 46° (PATENT)", "ALL-SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 49.98502471616683,
  apertureMarketing: 1.8,
  apertureDesign: 1.8,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,234,242 A",
  patentAuthors: ["Soichi Nakamura"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1980,
  elementCount: 6,
  groupCount: 5,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.76682,
      vd: 46.81,
      fl: 65.74265756390082,
      glass: "767468 — J-LASFH2 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Front positive collector of functional group G1.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.79713,
      vd: 45.62,
      fl: 51.61504088879424,
      glass:
        "797456 — J-LASF017 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "High-index positive meniscus in functional group G1.",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.71714,
      vd: 29.49,
      fl: -28.582367798124242,
      glass: "717295 / SF1-class (supplier unresolved)",
      apd: false,
      role: "Pre-stop negative meniscus completing functional group G1.",
    },
    {
      id: 4,
      name: "L4a",
      diagramLabel: "L4a",
      label: "Element 4a",
      type: "Negative Meniscus",
      nd: 1.64831,
      vd: 33.8,
      fl: -27.23003592645148,
      glass: "648338 / SF2-class (supplier unresolved)",
      apd: false,
      role: "Negative member of the rear cemented pair in functional group G2.",
      cemented: "L4",
    },
    {
      id: 5,
      name: "L4b",
      diagramLabel: "L4b",
      label: "Element 4b",
      type: "Positive Meniscus",
      nd: 1.76682,
      vd: 46.81,
      fl: 28.855021625894715,
      glass: "767468 — J-LASFH2 (HIKARI) coordinate-compatible spectral proxy; production supplier unresolved",
      apd: false,
      role: "Positive member of the weak-net-positive rear cemented pair.",
      cemented: "L4",
    },
    {
      id: 6,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.71313,
      vd: 53.94,
      fl: 64.53632329825298,
      glass: "713539 / LAK8-class (supplier unresolved)",
      apd: false,
      role: "Final positive element of functional group G2.",
    },
  ],

  surfaces: [
    { label: "1", R: 48.984, d: 3.395, nd: 1.76682, elemId: 1, sd: 18.5 },
    { label: "2", R: 1676.3465, d: 0.095, nd: 1.0, elemId: 0, sd: 17.3 },
    { label: "3", R: 19.388, d: 4.025, nd: 1.79713, elemId: 2, sd: 14.5 },
    { label: "4", R: 33.2895, d: 1.26, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "5", R: 67.4705, d: 0.97, nd: 1.71714, elemId: 3, sd: 11.5 },
    { label: "6", R: 15.627, d: 5.54975, nd: 1.0, elemId: 0, sd: 11.5 },
    // STO position inferred: midpoint of patent d6; this is not a published numeric stop coordinate.
    { label: "STO", R: 1e15, d: 5.54975, nd: 1.0, elemId: 0, sd: 10.197627771095108 },
    { label: "7", R: -16.2665, d: 0.97, nd: 1.64831, elemId: 4, sd: 11.5 },
    // Cemented junction: elemId/index belong to downstream element L4b.
    { label: "8", R: -211.8925, d: 4.8, nd: 1.76682, elemId: 5, sd: 11.5 },
    { label: "9", R: -20.2315, d: 0.095, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "10", R: 380.201, d: 2.765, nd: 1.71313, elemId: 6, sd: 14.4 },
    { label: "11", R: -52.2025, d: 37.1, nd: 1.0, elemId: 0, sd: 14.6 },
  ],

  asph: {},

  var: {
    "11": [37.1, 44.3095517997571],
  },

  varLabels: [["11", "BF"]],

  groups: [
    { text: "G1 (+) / UNIT FOCUS → OBJ", fromSurface: "1", toSurface: "6" },
    { text: "G2 (+) / UNIT FOCUS → OBJ", fromSurface: "7", toSurface: "11" },
  ],

  doublets: [{ text: "L4", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.45,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: unit focus only. The patent publishes infinity spacing but no focus table; all internal gaps remain fixed and BF changes from 37.1 mm to a code-solved 44.3095517997571 mm at the manufacturer-rounded 0.45 m focal-plane object distance.",

  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
