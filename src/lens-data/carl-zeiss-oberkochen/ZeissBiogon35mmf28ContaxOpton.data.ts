// Root-level draft import. When authoring directly in a maker folder use "../../types/optics.js";
// generate:metadata rewrites it when it organizes a root-level draft. See LENS_DATA_SPEC.md § Quick Start.
import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — CARL ZEISS BIOGON 35mm f/2.8 (post-war Contax RF, Zeiss-Opton / Carl Zeiss Oberkochen)
 *
 * Data source: JP S30-4837 B (特許出願公告 昭30-4837, published 1955-07-14), the patent's only numerical example;
 *   applicant Carl Zeiss, inventor Ludwig Bertele; German priority 1950-11-25. Tabulated for f = 100, 1:2.8, 2ω = 62°.
 * Production correlation (not manufacturer-confirmed): the 7-element / 4-group Biogon 1:2.8 f = 35 mm for Contax IIa/IIIa.
 * 7 elements / 4 groups, all spherical: positive meniscus | cemented (+ −) | cemented (− +) | cemented (+ −) meniscus.
 *
 * NOTE ON A SOURCE CORRECTION: the patent prints r6 = −42.05. As printed, the example traces to EFL 288.67 (not 100).
 *   This file uses r6 = −4205 (a misplaced decimal point), which gives EFL 99.291 in patent units. Evidence: of 1,034
 *   single-glyph, sign, transposition and decimal-shift edits, only r6 → −4205 and r9 → −73.00 come within ±1 of
 *   f = 100; r9 → −73.00 leaves third-order aberrations about ten times larger and keeps the printed r6 in conflict with
 *   the figure, whereas r6 → −4205 gives design-like third-order sums and matches the plane-drawn front of L4. The raw
 *   printed value is preserved in the dossier evidence; the 0.7 % shortfall from f = 100 is retained, not tuned away.
 *   r11 is the printed −133.9 (glyph comparison with the table's own 3s and 8s); the alternative reading −138.9 is
 *   recorded in the dossier and not used.
 * NOTE ON SCALING: uniform factor s = 0.35 (patent f = 100 → 35 mm nominal) applied to every R, d and sd;
 *   computed EFL 34.752 mm. Indices and Abbe numbers unchanged; no aspheres.
 * NOTE ON STOP POSITION: not tabulated. The iris is placed at 0.90 of l2 behind r5, measured from the patent figure.
 *   The stop sd (4.3224 mm) is calibrated to the patent's 1:2.8; this is a calibration, not an independent measurement.
 * NOTE ON SEMI-DIAMETERS: not published. Modeled from real meridional rays (full f/2.8 axial bundle, 0.6-field fan at
 *   ±0.75 stop fill, full-field 135-format chief ray) plus 8 % clearance. L7's rear clear aperture exceeds the r10
 *   junction radius, consistent with the figure's enlarged rear component.
 *   The r7 cemented rim is 4.6 mm; L4 ends below the larger 6.55 mm outer rim of L5 in the drawing.
 * NOTE ON FOCUS: CONSTRAINED_RECONSTRUCTION. Unit focus (whole optical unit on its own helicoid; third-party sources),
 *   solved paraxially to the manufacturer's 3 ft (0.9144 m) closest distance, measured object-to-image plane.
 *   The patent publishes only the infinity state.
 * Glass: d-line nd/νd only; vendor names are coordinate matches, not 1950 melt identities.
 *
 * Optical design only: glass surfaces, stop and the focus gap. No filters, mechanics, or parent designs.
 */

const LENS_DATA = {
  key: "carl-zeiss-biogon-35f28-contax",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS BIOGON 35mm f/2.8 (post-war Contax)",
  subtitle: "JP S30-4837 B EXAMPLE 1 (r6 CORRECTED) — CARL ZEISS / BERTELE · POST-WAR CONTAX RF BIOGON (CORRELATION)",
  specs: ["7 ELEMENTS / 4 GROUPS", "f ≈ 34.75 mm", "F/2.8", "2ω ≈ 64°", "ALL SPHERICAL"],
  focalLengthMarketing: 35,
  focalLengthDesign: 34.75,
  apertureMarketing: 2.8,
  lensMounts: ["contax-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "JP S30-4837 B",
  patentAuthors: ["Ludwig Bertele"],
  patentAssignees: ["Carl-Zeiss-Stiftung"],
  patentYear: 1955,
  elementCount: 7,
  groupCount: 4,
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6177,
      vd: 55.1,
      fl: 48.3,
      glass: "K-SSK4 (Sumita) / SSK4 class (618551)",
      apd: false,
      role: "Member I: weak front collector, convex to the object",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6645,
      vd: 35.9,
      fl: 12.44,
      glass: "J-BASF2 class (Hikari; supplier unconfirmed)",
      apd: false,
      role: "Member II positive component; lower index than its cemented negative partner (patent claim)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.74,
      vd: 28.2,
      fl: -8.73,
      glass: "SF3 (Schott) (740282)",
      apd: false,
      role: "Member II negative component; strongly curved rear r5 faces the stop",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.4645,
      vd: 65.7,
      fl: -25.34,
      glass: "FK3 class (Schott; historical supplier unconfirmed)",
      apd: false,
      role: "Member III negative component, front nearly plane (corrected r6); much lower index than L5 (patent claim)",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6204,
      vd: 60.3,
      fl: 12.77,
      glass: "N-SK16 (Schott) / SK16 class (620603)",
      apd: false,
      role: "Member III thick positive component; principal collective element behind the stop",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.6204,
      vd: 60.3,
      fl: 43.45,
      glass: "N-SK16 (Schott) / SK16 class (620603)",
      apd: false,
      role: "Member IV positive component, concave to the object; higher index than L7 (patent condition 1: Δn ≥ 0.100)",
      cemented: "D3",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.4645,
      vd: 65.7,
      fl: -23.43,
      glass: "FK3 class (Schott; historical supplier unconfirmed)",
      apd: false,
      role: "Member IV negative component; junction r10 strongly convex to the image (patent condition 2: |r10| < 0.9|r9|)",
      cemented: "D3",
    },
  ],
  surfaces: [
    { label: "1", R: 17.353, d: 2.646, nd: 1.6177, elemId: 1, sd: 8.1 }, // L1 front
    { label: "2", R: 39.06, d: 0.098, nd: 1, elemId: 0, sd: 7.4 }, // L1 rear → air (l1)
    { label: "3", R: 10.304, d: 3.9235, nd: 1.6645, elemId: 2, sd: 6.5 }, // L2 front
    { label: "4", R: -35.42, d: 0.588, nd: 1.74, elemId: 3, sd: 5.5 }, // L2→L3 cemented junction
    { label: "5", R: 7.9625, d: 1.9404, nd: 1, elemId: 0, sd: 4.75 }, // L3 rear → air; l2 split at the inferred iris
    { label: "STO", R: 1e15, d: 0.2156, nd: 1, elemId: 0, sd: 4.3224 }, // aperture stop, 0.90 × l2 behind r5 (inferred from the patent figure); sd calibrated to f/2.8
    { label: "6", R: -1471.75, d: 0.833, nd: 1.4645, elemId: 4, sd: 4.7 }, // L4 front — patent prints r6 = −42.05; corrected to −4205 (see header)
    { label: "7", R: 11.8685, d: 10.0485, nd: 1.6204, elemId: 5, sd: 4.6 }, // L4→L5 cemented junction
    { label: "8", R: -16.0965, d: 1.113, nd: 1, elemId: 0, sd: 6.55 }, // L5 rear → air (l3)
    { label: "9", R: -11.55, d: 2.401, nd: 1.6204, elemId: 6, sd: 6.65 }, // L6 front
    { label: "10", R: -8.729, d: 1.715, nd: 1.4645, elemId: 7, sd: 7.1 }, // L6→L7 cemented junction
    { label: "11", R: -46.865, d: 15.7821, nd: 1, elemId: 0, sd: 9.2 }, // L7 rear → image (patent prints r11 = −133.9; paraxial BFD at infinity)
  ],
  asph: {},
  var: {
    "11": [15.7821, 17.223], // unit focus: infinity → 0.9144 m (object to image plane), solved paraxially
  },
  varLabels: [["11", "BF"]],
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "8" },
    { text: "IV", fromSurface: "9", toSurface: "11" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
  ],
  closeFocusM: 0.9144,
  focusDescription:
    "Unit focus: the whole optical unit moves on the lens's own helicoid, coupled to the Contax rangefinder. The patent gives only the infinity state; the 0.9144 m (3 ft) close-focus extension of about 1.44 mm is a paraxial reconstruction.",
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 8,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
