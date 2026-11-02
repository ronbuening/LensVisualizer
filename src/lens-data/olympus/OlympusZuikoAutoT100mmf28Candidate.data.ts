// Current-main private integration descendant: canonical infinity state; source optics unchanged.
// Private row1140 research candidate; no catalog installation or publication.
// US3749478A Example 2: all R and published d uniformly x100; literal n/v retained.
// S10 d is independently derived infinity BFL, NOT printed patent data. No retuning.
// Stop at z=34.53 mm is a long-gap hypothesis; native ordinary-prime F/2.8 iris rule.
// SDs are EP-based 10% axial-envelope inferences frozen before performance checks.
// Reference wavelength convention is assumed. Finite focus/full spectrum unvalidated.
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "olympus-zuiko-auto-t-100mm-f28-patent-candidate",
  maker: "Olympus",
  name: "Olympus Zuiko Auto-T 100mm f/2.8 — patent reconstruction (inferred apertures/stop; infinity only; factory identity unproven; private)",
  subtitle: "US 3,749,478 Example 2 — private infinity reconstruction; retail pairing unproven",
  visible: true,
  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    specs: [
      "PRIVATE PATENT CANDIDATE",
      "5 ELEMENTS / 5 GROUPS",
      "INFINITY / REFERENCE INDEX ONLY",
      "STOP AND CLEAR APERTURES INFERRED",
    ],
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: {
      marketing: 100,
      design: 100,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
  },
  source: {
    patentNumber: "US 3,749,478",
    example: {
      label: "Example 2",
      id: "2",
    },
    patentYear: 1973,
    authors: ["Jihei Nakagawa", "Sumio Nakamura"],
    assignees: ["Olympus Optical Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.11,
      indexReference: "d",
      indexReferenceNote:
        "Literal patent n used as native reference index; d-line convention assumed, not explicit table nd; production glass and full dispersion unverified.",
      focalLengthMm: 81.54926370413664,
      glass: "Unmatched (literal patent n/v; production identity unverified)",
      role: "Converging spherical singlet",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.56873,
      vd: 63.16,
      indexReference: "d",
      indexReferenceNote:
        "Literal patent n used as native reference index; d-line convention assumed, not explicit table nd; production glass and full dispersion unverified.",
      focalLengthMm: 147.22221465471762,
      glass: "Unmatched (literal patent n/v; production identity unverified)",
      role: "Converging spherical singlet",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.70154,
      vd: 41.1,
      indexReference: "d",
      indexReferenceNote:
        "Literal patent n used as native reference index; d-line convention assumed, not explicit table nd; production glass and full dispersion unverified.",
      focalLengthMm: 198.6514566165605,
      glass: "Unmatched (literal patent n/v; production identity unverified)",
      role: "Converging spherical singlet",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 26.22,
      indexReference: "d",
      indexReferenceNote:
        "Literal patent n used as native reference index; d-line convention assumed, not explicit table nd; production glass and full dispersion unverified.",
      focalLengthMm: -33.40129153305743,
      glass: "Unmatched (literal patent n/v; production identity unverified)",
      role: "Diverging telephoto element",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 26.22,
      indexReference: "d",
      indexReferenceNote:
        "Literal patent n used as native reference index; d-line convention assumed, not explicit table nd; production glass and full dispersion unverified.",
      focalLengthMm: 127.99034219283872,
      glass: "Unmatched (literal patent n/v; production identity unverified)",
      role: "Converging spherical singlet",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 40.11,
      d: 4.72,
      sd: 19.66,
      medium: 1,
    },
    {
      label: "2",
      R: 232.31,
      d: 0.42,
      sd: 19.66,
    },
    {
      label: "3",
      R: 32.13,
      d: 3.36,
      sd: 18.7,
      medium: 2,
    },
    {
      label: "4",
      R: 50.16,
      d: 0.25,
      sd: 18.7,
    },
    {
      label: "5",
      R: 34.06,
      d: 6.39,
      sd: 17.38,
      medium: 3,
    },
    {
      label: "6",
      R: 41.59,
      d: 2.61,
      sd: 17.38,
    },
    {
      label: "7",
      R: 84.5,
      d: 3.89,
      sd: 13.37,
      medium: 4,
    },
    {
      label: "8",
      R: 19.6,
      d: 12.89,
      sd: 13.37,
    },
    {
      label: "STO",
      R: "flat",
      d: 12.89,
    },
    {
      label: "9",
      R: 64.86,
      d: 2.55,
      sd: 8.76,
      medium: 5,
    },
    {
      label: "10",
      R: 179.95,
      d: 42.86911164332392,
      sd: 8.76,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity-only patent Example2 reconstruction, uniform x100 scaling without EFL retuning. Clear apertures and stop z34.53 mm are hypotheses; the native F/N rule defines the iris. The fixed image z92.8391116433 mm is a computed infinity plane, not a printed BFL. Native reference587.5618 nm/d-line interpretation is assumed because table n has no explicit wavelength subscript. Retail1 m minimum focus is descriptive; no finite prescription or motion is modeled. Exact patent12deg10min half-field differs from the native21.65 mm format corner. Source residuals and substantial modeled clipping remain. Native scalar diffraction estimates are numerically converged simulations; the earlier line-based OPL comparison was withdrawn as coordinate-correct validation, including axial cases. No production-estimator bug or per-curve physical error is established. Factory identity and full spectrum remain unvalidated.",
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  layout: {
    yScFill: 0.3,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
