import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — MAMIYA-SEKOR CS 35mm f/2.8                                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 1978-066222, Example 1 (Mamiya Koki Co., Ltd.;              ║
 * ║ Katsunori Ebara). Six all-spherical, air-spaced elements in a retrofocus   ║
 * ║ photographic objective.                                                    ║
 * ║                                                                            ║
 * ║ MODELED SOURCE CORRECTION: The publication clearly prints r62 = -47.0848  ║
 * ║ at the normalized f = 100 scale. The model adopts -457.0848 as a one-digit ║
 * ║ insertion hypothesis. It agrees with the weak rear curvature in Fig. 1 and ║
 * ║ gives EFL = 99.966660 mm; the printed value traces to 40.701466 mm.         ║
 * ║                                                                            ║
 * ║ SCALING: Every dimensional prescription value is scaled ×0.35 from the     ║
 * ║ patent's intended f = 100 normalization to the marketed 35 mm lens. The    ║
 * ║ resulting design EFL is 34.988331 mm. There are no aspheres.                ║
 * ║                                                                            ║
 * ║ STOP: The patent draws the diaphragm within d34 but does not tabulate its  ║
 * ║ position or diameter. Fig. 1 places it about 27% of the way from G3 rear   ║
 * ║ to G4 front. The scaled 3.62425 mm gap is therefore split 1.00000 mm +     ║
 * ║ 2.62425 mm. The stop radius is derived from the design f-number, F/2.8.    ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS: The patent supplies none. SDs are inferred from exact       ║
 * ║ marginal/chief-ray envelopes, the 31°–32° published field, the Fig. 1       ║
 * ║ silhouette, and geometry limits. Equal front/rear SDs are used per element; ║
 * ║ the default 18.6° displayed off-axis fan is contained, while the full 31°   ║
 * ║ field retains the natural pupil vignetting expected of the compact design.  ║
 * ║ The G4–G5 facing surfaces require gapSagFrac = 0.97 to retain the F/2.8     ║
 * ║ on-axis bundle while preserving a positive 0.0399 mm rim air gap.          ║
 * ║                                                                            ║
 * ║ FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION: The patent publishes only the   ║
 * ║ infinity prescription. The manufacturer's rounded 0.4 m MFD is retained    ║
 * ║ only as catalog metadata; no internal movement or close-focus state is     ║
 * ║ invented.                                                                   ║
 * ║                                                                            ║
 * ║ SPECTRAL DATA: The patent gives nd and νd only. nC, nF, ng, and dPgF are   ║
 * ║ intentionally absent rather than imported from merely similar catalogs.   ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "mamiya-sekor-cs-35mm-f2-8",
  maker: "Mamiya",
  name: "MAMIYA-SEKOR CS 35mm f/2.8",
  subtitle: "JP 1978-066222 Example 1 — scaled ×0.35; modeled r62 source correction",

  catalog: {
    lensMounts: ["mamiya-nc"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 6 GROUPS", "f = 34.988 mm (MODELED)", "F/2.8", "2ω = 62° (PATENT)", "ALL-SPHERICAL"],
    elementCount: 6,
    groupCount: 6,
    focalLengthMm: { marketing: 35, design: 34.988330942871 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "JP 1978-066222 A",
    patentYear: 1978,
    authors: ["Katsunori Ebara"],
    assignees: ["Mamiya Koki Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element 1",
      type: "Negative Meniscus (convex to object)",
      nd: 1.48749,
      vd: 70.1,
      focalLengthMm: -46.489166915649,
      glass: "S-FSL5 catalog equivalent (production supplier not established; patent 487701)",
      apd: false,
      role: "Large front negative meniscus establishing the retrofocus back-focus extension.",
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6948,
      vd: 55.5,
      focalLengthMm: 22.233740214271,
      glass: "Unmatched (nd=1.69480, νd=55.5; nearest public 697555 lanthanum-crown family)",
      apd: false,
      role: "Very thick positive collector that restores power after G1 and satisfies the patent thickness condition.",
    },
    {
      id: 3,
      name: "G3",
      label: "Element 3",
      type: "Negative Meniscus (convex to image)",
      nd: 1.48749,
      vd: 70.1,
      focalLengthMm: -126.816530883006,
      glass: "S-FSL5 catalog equivalent (production supplier not established; patent 487701)",
      apd: false,
      role: "Weak negative meniscus preceding the diaphragm and contributing low-dispersion correction.",
    },
    {
      id: 4,
      name: "G4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: -18.577660317453,
      glass: "755275 — dense flint class (catalog family unresolved)",
      apd: false,
      role: "Strong dense-flint negative element in the central correction pair.",
    },
    {
      id: 5,
      name: "G5",
      label: "Element 5",
      type: "Positive Meniscus (convex to image)",
      nd: 1.744,
      vd: 44.8,
      focalLengthMm: 33.796989935967,
      glass: "744448 — lanthanum flint class (catalog family unresolved)",
      apd: false,
      role: "Rear positive meniscus providing converging power and chromatic balance after G4.",
    },
    {
      id: 6,
      name: "G6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 53.142934944477,
      glass: "713539 — lanthanum crown class (catalog family unresolved)",
      apd: false,
      role: "Final positive element; the modeled weak rear surface brings the traced focal length close to the published scale.",
    },
  ],

  surfaces: [
    { label: "1", R: 38.394615, d: 1.66215, sd: 12.6, medium: 1 },
    { label: "2", R: 14.048895, d: 13.2223, sd: 12.6 },
    { label: "3", R: 23.545095, d: 10.9837, sd: 10.6, medium: 2 },
    { label: "4", R: -36.329615, d: 0.9002, sd: 10.6 },
    { label: "5", R: -42.85715, d: 1.466465, sd: 8.0, medium: 3 },
    { label: "6", R: -141.27435, d: 1.0, sd: 8.0 },
    { label: "STO", R: "flat", d: 2.62425 },
    { label: "7", R: -21.00588, d: 1.1732, sd: 6.55, medium: 4 },
    { label: "8", R: 43.26119, d: 1.1242, sd: 6.55 },
    { label: "9", R: -36.92598, d: 2.54205, sd: 7.25, medium: 5 },
    { label: "10", R: -15.39804, d: 0.09765, sd: 7.25 },
    { label: "11", R: 49.41062, d: 1.85745, sd: 8.7, medium: 6 },
    { label: "12", R: -159.97968, d: 37.519912978297, sd: 8.7 },
  ],

  focus: {
    closeFocusM: 0.4,
    description:
      "NO_INTERNAL_RECONSTRUCTION — static infinity prescription; the manufacturer's rounded 0.4 m MFD is catalog metadata only.",
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1–G2", fromSurface: "1", toSurface: "4" },
    { text: "G3–G4", fromSurface: "5", toSurface: "8" },
    { text: "G5–G6", fromSurface: "9", toSurface: "12" },
  ],
  doublets: [],

  layout: { yScFill: 0.34 },

  checks: { gapSagFrac: 0.97 },
} satisfies LensDataV2Input;

export default LENS_DATA;
