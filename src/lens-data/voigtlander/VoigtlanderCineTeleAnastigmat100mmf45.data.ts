import type { LensDataInput } from "../../types/optics.js";

/**
 * DE 444150 C Example 2. Four elements / three groups; no scaling.
 * Original n_D/nu values retained, not converted to modern helium d.
 * Commercial name follows the job selection; no confirmed production mapping,
 * mount, image format, release date, or production MFD is claimed.
 * All non-stop SDs are modeled, inferred from Abb. 2, not published: front 12.3 mm; rear 11.1 mm (Abb. 2 rim estimate).
 * STO is at published b1=9.0 mm, b2=4.25 mm. Its radius is calibrated
 * by exact Snell tracing at entrance radius EFL/(2*4.5), consistent with
 * current runtimeLens stop construction. This differs from paraxial calibration.
 * Last gap is computed paraxial infinity BFD, not a published dimension.
 * NO_INTERNAL_RECONSTRUCTION: empty var/varLabels; no finiteConjugates.
 * closeFocusM=1e15 follows the established infinity-only schema convention,
 * not a production MFD. The focus control is disabled for empty variable gaps.
 * F-stop buttons are modeled UI choices, not documented mechanical detents.
 * Glass labels deliberately unresolved; no candidate spectrum is substituted.
 */

const LENS_DATA = {
  key: "voigtlander-cine-tele-anastigmat-100mm-f45",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER CINE-TELE-ANASTIGMAT 100mm f/4.5 (patent model)",
  subtitle: "DE 444150 C, Example 2; selected commercial correlation unconfirmed",
  specs: ["4 ELEMENTS / 3 GROUPS", "100 mm f/4.5 PATENT NOMINAL", "FIXED INFINITY MODEL", "SPHERICAL / PLANAR"],
  focalLengthDesign: 100.06983213015889,
  patentNumber: "DE 444150 C",
  patentAuthors: ["Hans Deser"],
  patentAssignees: ["Voigtländer & Sohn AG"],
  patentYear: 1927,
  elementCount: 4,
  groupCount: 3,
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "LI",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6143,
      vd: 56.4,
      indexReferenceNote:
        "Native patent n_D (sodium D, approximately 589.3 nm); retained numerically in nd, approximate d-line tracing; source Abbe spectral pair not defined.",
      fl: 26.435932252825708,
      glass: "Unmatched (vintage crown; native sodium D coordinates)",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "LII",
      label: "Element 2",
      type: "Plano-Concave",
      nd: 1.6462,
      vd: 33.9,
      indexReferenceNote:
        "Native patent n_D (sodium D, approximately 589.3 nm); retained numerically in nd, approximate d-line tracing; source Abbe spectral pair not defined.",
      fl: -53.07954193748065,
      glass: "Unmatched (vintage flint; native sodium D coordinates)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "LIII",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5835,
      vd: 41.9,
      indexReferenceNote:
        "Native patent n_D (sodium D, approximately 589.3 nm); retained numerically in nd, approximate d-line tracing; source Abbe spectral pair not defined.",
      fl: -28.783074814557644,
      glass: "Unmatched (vintage light flint; native sodium D coordinates)",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "LIV",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.6462,
      vd: 33.9,
      indexReferenceNote:
        "Native patent n_D (sodium D, approximately 589.3 nm); retained numerically in nd, approximate d-line tracing; source Abbe spectral pair not defined.",
      fl: 55.345174557209816,
      glass: "Unmatched (vintage flint; native sodium D coordinates)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 28.96,
      d: 5.5,
      nd: 1.6143,
      elemId: 1,
      sd: 12.3,
    },
    {
      label: "2",
      R: -34.3,
      d: 1.5,
      nd: 1.6462,
      elemId: 2,
      sd: 12.3,
    },
    {
      label: "3",
      R: 1000000000000000.0,
      d: 9,
      nd: 1,
      elemId: 0,
      sd: 12.3,
    },
    {
      label: "STO",
      R: 1000000000000000.0,
      d: 4.25,
      nd: 1,
      elemId: 0,
      sd: 8.223599006543969,
    },
    {
      label: "4",
      R: -41.22,
      d: 1.25,
      nd: 1.5835,
      elemId: 3,
      sd: 11.1,
    },
    {
      label: "5",
      R: 28.66,
      d: 3.75,
      nd: 1,
      elemId: 0,
      sd: 11.1,
    },
    {
      label: "6",
      R: 301.8,
      d: 2.5,
      nd: 1.6462,
      elemId: 4,
      sd: 11.1,
    },
    {
      label: "7",
      R: -40.44,
      d: 63.715279033882254,
      nd: 1,
      elemId: 0,
      sd: 11.1,
    },
  ],
  asph: {},
  var: {},
  varLabels: [],
  groups: [
    {
      text: "FRONT POSITIVE",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "REAR NEGATIVE PAIR",
      fromSurface: "4",
      toSurface: "7",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "1",
      toSurface: "3",
    },
  ],
  closeFocusM: 1000000000000000.0,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: static infinity model; no focus travel or finite conjugate is authored. closeFocusM=1e15 is the established finite schema sentinel, not a production minimum focus distance.",
  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 8, 11, 16],
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
