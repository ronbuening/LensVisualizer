import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — CARL ZEISS MIROTAR 500mm f/4.5
 * Patent source: GB 975,446, sole worked numerical design (job-card "Example 1").
 * Production correlation: ZEISS Mirotar f/4.5 500 mm, Cat. No. 10 46 02.
 * Patent scale is retained at 500 mm per normalized focal unit; no rescaling to the ZEISS
 * datasheet focal length of 504.5 mm is applied.
 *
 * Source correction: patent p.2 prints r9 = +2.1186 f, while Claim 2 on p.3 prints
 * r9 = -0.21186 f. The latter is used because it independently reproduces the printed
 * r9 power (-2.440/f) and rear-corrector focal length (-1.205 f). The conflicting p.2
 * reading remains preserved in the dossier evidence.
 *
 * Primary aperture basis: the patent states that the collecting main-mirror diameter equals that of
 * a same-focal-length f/4 lens objective. At the patent's 500 mm worked scale this implies
 * 125.0 mm; the model uses that source-derived value for the primary outer diameter.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent supplies one fixed internal prescription.
 * ZEISS states bellows focusing from infinity to 3.5 m; no internal motion is invented here.
 *
 * Stop/pupil model: the single STO is coincident with patent r1. ZEISS gives the entrance pupil
 * as 128.0 mm in diameter and located on the first lens vertex, so STO sd = 64.0 mm is an
 * equivalent-pupil inference, not a claim for an unpublished iris. The exact final-data paraxial
 * model predicts an exit pupil 181.066 mm in front of r10 with 65.729 mm diameter, compared with
 * ZEISS 181.0 mm / 66.2 mm. The source-derived 62.5 mm primary outer radius is the on-axis outer
 * limiter; exact meridional tracing gives geometric f/4.00359 for the authored clear path.
 *
 * Obscuration/aperture inference: secondary sd = 28.5 mm is modeled, not published. It clears the
 * on-axis return beam from the 62.5 mm primary with about 0.37 mm radial margin and yields an
 * on-axis annular-area equivalent of f/4.512, consistent with the production f/4.5 designation.
 * Primary innerSd = 24.0 mm and the refractive SDs are ray-geometry models checked at the 24x36
 * mm diagonal field; they are not patent dimensions.
 *
 * Folded path: surfaces remain in patent encounter order. r5->r6 keeps the genuine -111.0 mm
 * signed return displacement. opticalPath.mode="auto" lets the inactive side of r6 block the
 * incoming central zone, r5 reflect the annular beam, r6 reflect the return beam, and the post-r6
 * beam pass through the r5 central hole before reaching r7-r10. The image plane is the patent
 * s' = 76.8 mm beyond r10, at global z = 254.3 mm from r1.
 *
 * Physical/model counts: ZEISS lists 5 elements / 5 groups including the primary mirror. The
 * `elements` array contains the four transmissive glass bodies; r5 is represented directly as a
 * first-surface reflective interaction, so `elementCount: 5` intentionally exceeds entries.length.
 * The convex secondary r6 is a coating at the rear of the second front corrector and is not an
 * additional transmissive element.
 *
 * Manufacturer source:
 * https://www.zeiss.com/content/dam/consumer-products/downloads/historical-products/photography/contax-yashica/en/
 * datasheet-zeiss-mirotar-45500-en.pdf
 */

const LENS_DATA = {
  key: "carl-zeiss-mirotar-500f45",
  maker: "Carl Zeiss",
  name: "CARL ZEISS MIROTAR 500mm f/4.5",
  subtitle: "GB 975,446 Example 1 — correlated to ZEISS Mirotar f/4.5 500 mm",
  specs: [
    "5 PHYSICAL ELEMENTS / 5 GROUPS (PRIMARY MIRROR INCLUDED)",
    "PATENT-SCALE EFL ≈ 502.96 mm",
    "GEOMETRIC f/4.00 / PRODUCTION f/4.5",
    "135 FULL-FRAME",
    "ALL-SPHERICAL CASSEGRAIN",
  ],

  focalLengthMarketing: 500,
  focalLengthDesign: 502.9568822336663,
  apertureMarketing: 4.5,
  apertureDesign: 4.003594320334015,
  imageFormat: "135-full-frame",
  patentNumber: "GB 975,446",
  patentAuthors: [],
  patentAssignees: ["Carl-Zeiss-Stiftung"],
  patentYear: 1964,
  elementCount: 5,
  groupCount: 5,

  opticalPath: {
    mode: "auto",
    imagePlane: { z: 254.3, y: 0, normal: { z: 1, y: 0 }, label: "IMG" },
    maxInteractions: 16,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front Corrector 1",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      fl: 1718.112504557618,
      glass: "N-BK7 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Weak positive member of the nearly afocal front corrector.",
    },
    {
      id: 2,
      name: "L2",
      label: "Front Corrector 2 / Secondary Substrate",
      type: "Negative Meniscus",
      nd: 1.5184,
      vd: 60.34,
      indexReference: "d",
      fl: -1721.3926390952024,
      glass: "BALK3 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Weak negative front-corrector partner; its rear central zone carries the modeled r6 secondary coating.",
    },
    {
      id: 3,
      name: "L3",
      label: "Rear Corrector 1",
      type: "Plano-Convex Positive",
      nd: 1.5614,
      vd: 45.27,
      indexReference: "d",
      fl: 278.2686141788387,
      glass: "LLF4 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Positive member of the rear negative-power correcting pair.",
    },
    {
      id: 4,
      name: "L4",
      label: "Rear Corrector 2",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      fl: -188.87552591549235,
      glass: "N-BK7 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Strong negative rear corrector; r9 uses the Claim-2 corrected source reading.",
    },
  ],

  surfaces: [
    // Equivalent entrance-pupil plane in air, coincident with the first vertex.
    { label: "STO", R: 1e15, d: 0, nd: 1, elemId: 0, sd: 64 },
    {
      label: "1",
      R: 290.07,
      d: 18,
      nd: 1.5168,
      elemId: 1,
      sd: 64,
    }, // patent r1; equivalent entrance-pupil stop inferred from ZEISS 128.0 mm pupil at the first vertex
    { label: "2", R: 421.7, d: 16.5, nd: 1, elemId: 0, sd: 64 },
    { label: "3", R: -240.57, d: 12, nd: 1.5184, elemId: 2, sd: 64 },
    { label: "4", R: -334.97, d: 111, nd: 1, elemId: 0, sd: 65 },
    {
      label: "5",
      R: -403.88,
      d: -111,
      nd: 1,
      elemId: 0,
      sd: 62.5,
      innerSd: 24,
      interaction: {
        type: "reflect",
        incidentSide: "front",
        inactiveSide: "block",
        mirrorKind: "first-surface",
      },
    }, // patent r5 primary; 125.0 mm outer diameter derived from patent f/4 collector statement
    {
      label: "6",
      R: -334.7,
      d: 120,
      nd: 1,
      elemId: 0,
      sd: 28.5,
      interaction: {
        type: "reflect",
        incidentSide: "rear",
        inactiveSide: "block",
        mirrorKind: "second-surface",
      },
    }, // patent r6; modeled secondary clear radius, source radius retained
    { label: "7", R: 1e15, d: 5, nd: 1.5614, elemId: 3, sd: 23.5 },
    { label: "8", R: -156.22, d: 2, nd: 1, elemId: 0, sd: 23.5 },
    { label: "9", R: -105.93, d: 4, nd: 1.5168, elemId: 4, sd: 23.5 },
    { label: "10", R: 1258.9, d: 76.8, nd: 1, elemId: 0, sd: 23.5 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [],

  closeFocusM: 3.5,
  focusDescription: "Fixed patent optics. The production lens uses bellows focusing to 3.5 m; bellows travel is not modeled.",

  nominalFno: 4.003594320334015,
  fstopSeries: [4.003594320334015],
  maxFstop: 4.003594320334015,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
