import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * DE 444150 C Example 2. Four elements / three groups; no scaling.
 * Original n_D/nu values retained, not converted to modern helium d.
 * Commercial name follows the job selection; no confirmed production mapping,
 * mount, image format, release date, or production MFD is claimed.
 * All non-stop SDs are modeled, inferred from Abb. 2, not published: front 12.3 mm; rear 11.1 mm (Abb. 2 rim estimate).
 * STO is at published b1=9.0 mm, b2=4.25 mm. Its radius is derived from the
 * design f-number by exact Snell tracing at entrance radius EFL/(2*4.5),
 * consistent with current runtimeLens stop construction. This differs from
 * paraxial calibration.
 * Last gap is computed paraxial infinity BFD, not a published dimension.
 * NO_INTERNAL_RECONSTRUCTION: empty var/varLabels; no finiteConjugates.
 * closeFocusM=1e15 follows the established infinity-only schema convention,
 * not a production MFD. The focus control is disabled for empty variable gaps.
 * F-stop buttons are modeled UI choices, not documented mechanical detents.
 * Glass labels deliberately unresolved; no candidate spectrum is substituted.
 */

const LENS_DATA = {
  schema: 2,
  key: "voigtlander-cine-tele-anastigmat-100mm-f45",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER CINE-TELE-ANASTIGMAT 100mm f/4.5 (patent model)",
  subtitle: "DE 444150 C, Example 2; selected commercial correlation unconfirmed",

  catalog: {
    specs: ["4 ELEMENTS / 3 GROUPS", "100 mm f/4.5 PATENT NOMINAL", "FIXED INFINITY MODEL", "SPHERICAL / PLANAR"],
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: { design: 100.06983213015889 },
  },

  source: {
    patentNumber: "DE 444150 C",
    patentYear: 1927,
    authors: ["Hans Deser"],
    assignees: ["Voigtländer & Sohn AG"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6143,
      vd: 56.4,
      indexReferenceNote:
        "Native patent n_D (sodium D, approximately 589.3 nm); retained numerically in nd, approximate d-line tracing; source Abbe spectral pair not defined.",
      focalLengthMm: 26.435932252825708,
      glass: "Unmatched (vintage crown; native sodium D coordinates)",
      diagramLabel: "LI",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Concave",
      nd: 1.6462,
      vd: 33.9,
      indexReferenceNote:
        "Native patent n_D (sodium D, approximately 589.3 nm); retained numerically in nd, approximate d-line tracing; source Abbe spectral pair not defined.",
      focalLengthMm: -53.07954193748065,
      glass: "Unmatched (vintage flint; native sodium D coordinates)",
      diagramLabel: "LII",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5835,
      vd: 41.9,
      indexReferenceNote:
        "Native patent n_D (sodium D, approximately 589.3 nm); retained numerically in nd, approximate d-line tracing; source Abbe spectral pair not defined.",
      focalLengthMm: -28.783074814557644,
      glass: "Unmatched (vintage light flint; native sodium D coordinates)",
      diagramLabel: "LIII",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6462,
      vd: 33.9,
      indexReferenceNote:
        "Native patent n_D (sodium D, approximately 589.3 nm); retained numerically in nd, approximate d-line tracing; source Abbe spectral pair not defined.",
      focalLengthMm: 55.345174557209816,
      glass: "Unmatched (vintage flint; native sodium D coordinates)",
      diagramLabel: "LIV",
    },
  ],

  surfaces: [
    { label: "1", R: 28.96, d: 5.5, sd: 12.3, medium: 1 },
    { label: "2", R: -34.3, d: 1.5, sd: 12.3, medium: 2 },
    { label: "3", R: "flat", d: 9, sd: 12.3 },
    { label: "STO", R: "flat", d: 4.25 },
    { label: "4", R: -41.22, d: 1.25, sd: 11.1, medium: 3 },
    { label: "5", R: 28.66, d: 3.75, sd: 11.1 },
    { label: "6", R: 301.8, d: 2.5, sd: 11.1, medium: 4 },
    { label: "7", R: -40.44, d: 63.715279033882254, sd: 11.1 },
  ],

  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "NO_INTERNAL_RECONSTRUCTION: static infinity model; no focus travel or finite conjugate is authored. closeFocusM=1e15 is the established finite schema sentinel, not a production minimum focus distance.",
  },

  aperture: { nominalFNumber: 4.5, fStops: [4.5, 5.6, 8, 11, 16] },

  groups: [
    { text: "FRONT POSITIVE", fromSurface: "1", toSurface: "3" },
    { text: "REAR NEGATIVE PAIR", fromSurface: "4", toSurface: "7" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
