import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR 800mm f/8 ED                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,774,991 Example III (Yoshiyuki Shimizu).        ║
 * ║  Strong production correlation to the 1975 Nikkor 800mm f/8 ED;   ║
 * ║  Nikon does not explicitly identify this patent example as the     ║
 * ║  production prescription.                                          ║
 * ║  5 elements / 4 groups, all spherical.                             ║
 * ║  Focus: production AU-1 unit focus; the data file preserves only   ║
 * ║  the infinity optical state (NO_INTERNAL_RECONSTRUCTION). The 1978 ║
 * ║  Nikon manual gives both 20.0 m and 61 ft MFD rows; closeFocusM     ║
 * ║  selects 20.0 m for the AU-1 context and records the discrepancy.   ║
 * ║                                                                    ║
 * ║  STOP MODEL: the patent gives F/8 but no stop coordinate/diameter. ║
 * ║  Nikon documents a common behind-the-lens diaphragm in the         ║
 * ║  focusing unit and says its distance from the front glass was to   ║
 * ║  be kept as short as possible. The modeled STO is placed 16.7 mm   ║
 * ║  behind r9: a nominal front-of-focusing-unit estimate obtained by  ║
 * ║  comparing the 498 mm ED lens-head length in Nikon's 1978 sales    ║
 * ║  manual with the 481.3 mm patent vertex track. This is not a       ║
 * ║  measured diaphragm coordinate. The stop radius is derived from    ║
 * ║  the design f-number, published F/8; it is not independent         ║
 * ║  evidence of a production iris diameter.                           ║
 * ║                                                                    ║
 * ║  APERTURE PATH: this one-STO model represents the AU-1 automatic   ║
 * ║  diaphragm path, documented as f/8–f/22 for the 800mm lens. The    ║
 * ║  lens head also has a separate manual diaphragm to f/64; that       ║
 * ║  alternate stop is not added because the model permits one STO.     ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: the patent publishes none; values are estimated   ║
 * ║  from Fig. 3A proportions. The figure is schematic axially (d6 is  ║
 * ║  broken), so only transverse ratios are used: L2 and L3 draw at    ║
 * ║  0.94 and 0.93 of L1, and the cemented rear pair at 0.35 of L1.    ║
 * ║  L1 = 56 mm is anchored just outside the F/8 axial bundle (50.0    ║
 * ║  mm) and below the product's 122 mm front-filter diameter; L2 =    ║
 * ║  52.7, L3 = 52.2 and the rear pair = 20.0 mm follow the figure.    ║
 * ║  The rear value clears the axial bundle (15.3 mm) and the default  ║
 * ║  off-axis bundle. These are modeled clear apertures, not source    ║
 * ║  dimensions.                                                       ║
 * ║                                                                    ║
 * ║  IMAGE PLANE: the patent supplies no d9. The source prescription   ║
 * ║  computes BFD(r9→image) = 241.888190036 mm; this is split into     ║
 * ║  r9→STO = 16.7 mm and STO→IMG = 225.188190036 mm.                 ║
 * ║                                                                    ║
 * ║  FORMAT: imageFormat is 6x6 because the patent's 6° full design    ║
 * ║  field corresponds to ~83.86 mm paraxial image diameter and Nikon ║
 * ║  states these focusing-unit super-telephotos could be used on      ║
 * ║  medium-format Bronica cameras. Nikon's 1978 sales manual markets  ║
 * ║  the 800mm lens at a 3° angle of view in the Nikon system; that    ║
 * ║  marketed field is intentionally kept separate from patent field. ║
 * ║                                                                    ║
 * ║  No scaling is applied. No sensor glass, filter, dummy plane, or   ║
 * ║  mechanical part is included.                                      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-nikkor-800mm-f8-ed",
  maker: "Nikon",
  name: "NIKON NIKKOR 800mm f/8 ED",
  subtitle: "US 3,774,991 Example III — strong production correlation; stop and SDs modeled",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "6x6",
    specs: [
      "5 ELEMENTS / 4 GROUPS",
      "f = 800.095 mm (d-line model)",
      "F/8 (stop calibrated)",
      "6° PATENT DESIGN FIELD",
      "AU-1 UNIT FOCUS; 20 m MFD METADATA (61 ft alternate Nikon row)",
    ],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { marketing: 800, design: 800.094590318 },
    fNumber: { marketing: 8, design: 8 },
  },

  source: {
    patentNumber: "US 3,774,991",
    patentYear: 1973,
    authors: ["Yoshiyuki Shimizu"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48614,
      vd: 81.5,
      indexReference: "d",
      focalLengthMm: 365.630831,
      glass: "Unmatched (486815 — fluophosphate crown / ED-class; vendor unresolved)",
      apd: "patent",
      apdNote:
        "The patent selects phosphate / fluophosphate crown for the positive component for its low partial-dispersion value k (US 3,774,991, printed pp. 1–3); production ED element by correlation.",
      role: "Low-dispersion positive front component of the achromatized forward group.",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.61266,
      vd: 44.3,
      indexReference: "d",
      focalLengthMm: -278.336772,
      glass: "J-KZFH1 (HIKARI) — patent antimony flint 613443",
      apd: "patent",
      apdNote:
        "The patent selects antimony flint for the negative component for its partial-dispersion value k, paired with the phosphate crown to reduce secondary spectrum (US 3,774,991, printed pp. 1–3).",
      role: "Negative chromatic partner between the two positive forward components.",
      diagramLabel: "L2",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.56953,
      vd: 49.5,
      indexReference: "d",
      focalLengthMm: 436.601356,
      glass: "570495 — barium flint class (supplier unresolved)",
      role: "Positive barium-flint component completing the net-positive forward group.",
      diagramLabel: "L3",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave Negative",
      nd: 1.51885,
      vd: 59,
      indexReference: "d",
      focalLengthMm: -289.100896,
      glass: "J-K3 (HIKARI) nearest curve — patent 519590 crown, Δnd −0.00062",
      role: "Negative member of the weakly negative cemented rear group.",
      diagramLabel: "L4",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.62399,
      vd: 47,
      indexReference: "d",
      focalLengthMm: 373.836119,
      glass: "624470 — BaF8-class / barium-flint coordinate (supplier unresolved)",
      role: "Positive member cemented to L4; the L4+L5 pair is weakly negative overall.",
      diagramLabel: "L5",
      cemented: "D1",
    },
  ],

  surfaces: [
    { label: "1", R: 300, d: 13, sd: 56, medium: 1 },
    { label: "2", R: -430, d: 7.3, sd: 56 },
    { label: "3", R: -382.5, d: 7.5, sd: 52.7, medium: 2 },
    { label: "4", R: 310, d: 1.5, sd: 52.7 },
    { label: "5", R: 292, d: 10, sd: 52.2, medium: 3 },
    { label: "6", R: -1654.4, d: 435, sd: 52.2 },
    { label: "7", R: -150, d: 2, sd: 20, medium: 4 },
    { label: "8", R: "flat", d: 5, sd: 20, medium: 5 },
    { label: "9", R: -233.27, d: 16.7, sd: 20 },
    { label: "STO", R: "flat", d: 225.188190036 },
  ],

  focus: {
    closeFocusM: 20,
    description:
      "Production focusing uses the AU-1 unit and Nikon states that focusing-unit super-telephotos moved the entire lens. This model preserves only the patent infinity prescription (NO_INTERNAL_RECONSTRUCTION); closeFocusM=20 m is sourced product metadata and no variable focus spacing is authored.",
  },

  aperture: { nominalFNumber: 8, fStops: [8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "6" },
    { text: "REAR", fromSurface: "7", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
