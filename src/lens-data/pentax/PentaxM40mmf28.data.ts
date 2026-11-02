// Current-main private integration descendant: canonical infinity state; source optics unchanged.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * PRIVATE row1166 integration descendant; original research remains separately archived.
 * US 4,154,509 sole example, literal R/d/nd/Vd uniformly scaled x0.4.
 * Retail Pentax-M 40mm association is a topology/field correlation, not factory proof.
 * Source PDF pixels inspected by source worker; this builder received textual handoff.
 * SD: fixed pre-trace paraxial axial EP envelope +10%, common group rims, up to 0.1mm.
 * Figure outlines are uncertain schematic sanity estimates, not calibrated clear radii.
 * STO plane is an explicit unproven hypothesis; opening is native F/N-derived.
 * Final gap 36.760mm is printed BFL scaled; NOT refitted to computed paraxial focus.
 * INFINITY ONLY. closeFocusM=1e15 uses the existing convention; retail0.60m is descriptive.
 * No gaps vary, no source motion law or finite conjugate is authored.
 * No spectral validation: literal d-line indices; Abbe values are not full-dispersion proof.
 */

const LENS_DATA = {
  schema: 2,
  key: "private-pentax-m-40mm-f28-stop-9p682",
  maker: "Pentax",
  name: "SMC PENTAX-M 40mm f/2.8 — patent reconstruction (inferred apertures/stop; infinity only; factory identity unproven; private)",
  subtitle: "US 4,154,509 \u2014 sole example; STOP HYPOTHESIS 9.682 mm",
  visible: true,
  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      marketing: 40,
      design: 40,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
  },
  source: {
    patentNumber: "US 4,154,509",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1979,
    authors: ["Yasuo Takahashi"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 41,
      indexReference: "d",
      glass: "Unmatched (patent d-line nd/Vd only; historical melt and full dispersion unproven)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.1,
      indexReference: "d",
      glass: "Unmatched (patent d-line nd/Vd only; historical melt and full dispersion unproven)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      glass: "Unmatched (patent d-line nd/Vd only; historical melt and full dispersion unproven)",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.8,
      indexReference: "d",
      glass: "Unmatched (patent d-line nd/Vd only; historical melt and full dispersion unproven)",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      glass: "Unmatched (patent d-line nd/Vd only; historical melt and full dispersion unproven)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 30.628,
      d: 4.064,
      sd: 7.9,
      medium: 1,
    },
    {
      label: "2",
      R: -121.36,
      d: 2.696,
      sd: 7.9,
    },
    {
      label: "3",
      R: -21.528,
      d: 1.636,
      sd: 6.7,
      medium: 2,
    },
    {
      label: "4",
      R: 35.224,
      d: 1.286,
      sd: 6.7,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.286,
    },
    {
      label: "5",
      R: -25.78,
      d: 0.964,
      sd: 7.3,
      medium: 3,
    },
    {
      label: "6",
      R: 170.196,
      d: 2.888,
      sd: 7.3,
      medium: 4,
    },
    {
      label: "7",
      R: -20.276,
      d: 0.096,
      sd: 7.3,
    },
    {
      label: "8",
      R: -85.028,
      d: 1.732,
      sd: 7.3,
      medium: 5,
    },
    {
      label: "9",
      R: -27.544,
      d: 36.76,
      sd: 7.3,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity-only US4154509 sole-example reconstruction, literal uniform x0.4 scale, with inferred clear apertures and unproven midpoint stop z9.682 mm. The rejected rear stop intersects glass and is not used. The printed scaled BFL36.760 mm fixes image z53.408 mm; no diagnostic refocus is authored. The low design-plane axial MTF, edge weakness, clipping and native witness misses/unaimed cells remain explicit. Native MTF accepts provable blocked/out-of-beam samples under unchanged flux rules; this does not mean every raw ray succeeds. Source half-field28 degrees differs from the native21.65 mm format corner and retail57-degree full field. Retail0.60 m minimum focus is descriptive only; no finite motion or conjugate is modeled. Factory identity and full dispersion are unproven; native monochromatic MTF is a simulation.",
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 56,
    maxTraceFieldDeg: 28,
  },
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
