// Root-level draft import. When authoring directly in a maker folder use "../../types/optics.js";
// generate:metadata rewrites it when it organizes a root-level draft. See LENS_DATA_SPEC.md § Quick Start.
import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║   LENS DATA — CARL ZEISS JENA VARIO-PRAKTICAR 35-70mm f/2.7-3.5 MC   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 3602859 A1, the single "Tabelle" (Example 1),       ║
 * ║    applicant Jenoptik Jena GmbH; inventors Utz Schneider,            ║
 * ║    Volker Tautz, Karin Holota. Laid open 1986-09-18.                 ║
 * ║  Two-group zoom: a moving negative front group G_I (two negative     ║
 * ║    menisci + one positive meniscus, all concentric to G_II), a       ║
 * ║    moving positive rear group G_II (biconvex cemented member K1,     ║
 * ║    positive meniscus concentric to the stop, aperture stop,          ║
 * ║    biconcave negative, biconvex positive), and a FIXED plane-        ║
 * ║    parallel plate P closing the system ahead of the image plane.     ║
 * ║  9 elements / 8 groups (8 powered elements in 7 air-separated        ║
 * ║    groups, plus the plate), 0 aspherical surfaces.                   ║
 * ║  Focus: RECONSTRUCTED — see NOTE ON FOCUS below. The patent          ║
 * ║    publishes no focus data of any kind.                              ║
 * ║                                                                      ║
 * ║  ZOOM (2 published states + 8 code-solved states, claim-2 layout):  ║
 * ║    Zoom-only gap:        D6  = l3, the G_I/G_II separation.          ║
 * ║    Zoom + focus gap:     D15 = l7, G_II to the fixed plate.          ║
 * ║    Both groups move; the plate and the image plane stay fixed, so    ║
 * ║    the plate-to-image distance (surface 17) is constant.             ║
 * ║    The system is physically LONGEST at the wide setting.             ║
 * ║    Reversing group: G_I travels imageward from wide to about 60 mm,  ║
 * ║    then 0.25 mm objectward to tele (track minimum 113.95 mm near     ║
 * ║    60.2 mm); the gaps l3 and l7 themselves are monotonic.            ║
 * ║                                                                      ║
 * ║  NOTE ON ZOOM STATIONS: only wide (l3 = 0.8872) and tele (l3 =       ║
 * ║    0.0150) are printed. Linear interpolation between those two rows  ║
 * ║    alone defocuses the model by up to 2.97 mm at mid-zoom, against   ║
 * ║    the source's statement that the image plane stays fixed (p. -8-,  ║
 * ║    claim 2). Eight intermediate stations at 35 x f'_norm = 1.1-1.8   ║
 * ║    (f'_norm = 1.4 is the Figs. 2-4 state) are therefore SOLVED, not  ║
 * ║    published: l3 for the target EFL, then l7 for image-plane         ║
 * ║    closure, then the same unit-focus extension for 0.80 m. Residual  ║
 * ║    interpolation defocus <= 0.053 mm between adjacent stations.      ║
 * ║    They are calculated first-order states, not cam data.             ║
 * ║                                                                      ║
 * ║  NOTE ON SCALING: the source prescription is normalized to           ║
 * ║    f'_min = 1.0. A single scale factor s = 35.0 mm per normalized    ║
 * ║    unit is applied to every radius, thickness, air gap, semi-        ║
 * ║    diameter and image-plane distance, anchoring the wide design      ║
 * ║    EFL to the manufacturer's marketed 35 mm. No aspheric or          ║
 * ║    diffractive coefficients exist, so no A_p -> A_p/s^(p-1)          ║
 * ║    transform applies; K is not used. Rejected alternatives:          ║
 * ║    s = 36.2 (published 63.4 deg wide field with the Fig. 4 barrel    ║
 * ║    distortion applied) and s = 36.5 (rear-clearance and barrel-      ║
 * ║    length reconciliation). Both rest on a figure read by eye or on   ║
 * ║    a secondary-source barrel length, neither of which outranks a     ║
 * ║    manufacturer hard specification. Consequence carried openly:      ║
 * ║    the tele design EFL is 65.24 mm against a marketed 70 mm.         ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS: none are published. All sd values are       ║
 * ║    MODELLED from marginal- and chief-ray geometry at all four        ║
 * ║    defined states (wide/tele x infinity/0.80 m). G_I is sized to     ║
 * ║    the 0.6 x half-field bundle within its own edge-thickness, rim-   ║
 * ║    slope and cross-gap limits; G_II, the plate and the stop are      ║
 * ║    then sized to pass whatever G_I transmits, so the wide-end        ║
 * ║    vignetting aperture is the front element, as in the real design.  ║
 * ║    These are paraxial estimates, not exact ray results.              ║
 * ║                                                                      ║
 * ║  NOTE ON STOP POSITION: inferred. The source places the aperture     ║
 * ║    stop B inside the l5 "Blendenraum" between r11 and r12 but        ║
 * ║    publishes neither its axial sub-division nor its diameter. The    ║
 * ║    3.9760 mm gap is split 1.0000 / 2.9760: the stop sits as far      ║
 * ║    forward as the rear rim sag of L6 (0.548 mm at its modelled       ║
 * ║    semi-diameter) mechanically allows, because forward placement     ║
 * ║    best reproduces the published k pair. The stop semi-diameter      ║
 * ║    9.2413 mm is CALIBRATED so the wide station returns the           ║
 * ║    published k = 2.7; it is not independent evidence of the          ║
 * ║    physical diaphragm diameter. The resulting tele f-number is       ║
 * ║    3.6678 (+1.88 % against the published 3.6): the geometric k       ║
 * ║    ratio 1.3585 exceeds the published 3.6/2.7 = 1.3333, so no        ║
 * ║    single fixed iris can match both printed values.                  ║
 * ║                                                                      ║
 * ║  NOTE ON THE l7 / BACK-FOCUS SPLIT: the source publishes only        ║
 * ║    l7 > 0 plus the change between settings. The absolute split       ║
 * ║    between l7 and the plate-to-image distance is PARAXIALLY          ║
 * ║    DEGENERATE (the plate is plane-parallel and wholly inside the     ║
 * ║    converging beam), so it affects rendered geometry only. l7 is     ║
 * ║    set to 1.0000 mm at wide/infinity — a minimum running clearance   ║
 * ║    to the fixed plate, which also minimises the rear protrusion      ║
 * ║    into the camera throat (plate rear face 37.7488 mm ahead of the   ║
 * ║    image plane).                                                     ║
 * ║                                                                      ║
 * ║  NOTE ON FOCUS (CONSTRAINED RECONSTRUCTION): the patent publishes    ║
 * ║    no object distance, focusing group, finite-conjugate spacing row  ║
 * ║    or magnification. Focus is modelled as a rigid unit extension of  ║
 * ║    the complete powered system against the plate that claim 2 fixes  ║
 * ║    to the camera, so the only quantity that changes is l7. The       ║
 * ║    extension was solved numerically, station by station, for the     ║
 * ║    secondary-sourced 0.80 m minimum object-to-image distance:        ║
 * ║    +1.7818 mm (wide) to +6.5849 mm (tele). No internal motion        ║
 * ║    of the published groups is invented. The 1:3 macro mode that      ║
 * ║    secondary sources describe at the 70 mm setting is beyond this    ║
 * ║    range and is NOT modelled.                                        ║
 * ║                                                                      ║
 * ║  NOTE ON THE PLATE: P is part of the objective (claims 1-3), not a   ║
 * ║    sensor cover glass or a filter. The description gives it ONE      ║
 * ║    rationale and it is mechanical: the plate shields the moving      ║
 * ║    cells from the camera side so that telescoping tubes can be       ║
 * ║    omitted as separate parts (p. -7-). Both faces are flat, so its   ║
 * ║    Petzval contribution is exactly zero and no field-flattening      ║
 * ║    function is claimed here; a secondary source does ascribe one,    ║
 * ║    recorded as uncorroborated. It is retained, and elementCount /    ║
 * ║    groupCount count it.                                              ║
 * ║                                                                      ║
 * ║  NOTE ON MOUNT TAXONOMY: the production Vario-Prakticar uses the     ║
 * ║    Praktica B bayonet, which has no canonical id in the current      ║
 * ║    lensTaxonomy revision, so lensMounts is omitted rather than       ║
 * ║    mislabelled. The same formula was sold in M42 as the              ║
 * ║    Vario-Pancolar 35-70mm f/2.7-3.5 MC.                              ║
 * ║                                                                      ║
 * ║  SOURCE DISCREPANCIES CARRIED OPENLY (not corrected here):           ║
 * ║    - The printed tele f' = 1.9 is unreachable at any non-negative    ║
 * ║      l3; the ceiling at l3 = 0 is 1.8922. The printed l3 = 0.0150    ║
 * ║      gives 1.8640 (65.24 mm), which is what this file implements.    ║
 * ║    - The printed Delta l7 = 0.5611 is reproduced as 0.5503           ║
 * ║      (-1.93 %), inside the +/-10 % tolerance claim 2 itself states.  ║
 * ║    - The example violates its own condition (8) at element L2,       ║
 * ║      whose n_e exceeds 4.40244/nu_e + 1.60059 by 0.013287.           ║
 * ║                                                                      ║
 * ║  INDEX REFERENCE: the source publishes n_e / nu_e only. Those        ║
 * ║    native e-line values are stored unconverted and every element     ║
 * ║    declares indexReference: "e". Six-digit d-line glass codes are    ║
 * ║    therefore not used here. Eight elements use catalog curves as     ║
 * ║    supplier-neutral spectral proxies, matched at native e-line       ║
 * ║    coordinates. L6 remains unresolved; historical melts are unknown. ║
 * ║    No source nC/nF/ng/dPgF or apochromatic claim is added.            ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop, variable gaps.           ║
 * ║  No sensor glass, filters, mechanics, or parent/donor designs.       ║
 * ║  See LENS_DATA_SPEC.md § Scope: What to Include.                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "vario-prakticar-35-70mm-f27-35",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA VARIO-PRAKTICAR 35-70mm f/2.7-3.5 MC",
  subtitle: "DE 3602859 A1, sole Tabelle — Jenoptik Jena GmbH; M42 sibling sold as Vario-Pancolar 35-70mm f/2.7-3.5 MC",
  specs: [
    "9 ELEMENTS / 8 GROUPS",
    "f ≈ 35.0-65.2 mm (DESIGN)",
    "F/2.7-3.67 (DESIGN)",
    "2ω ≈ 63.4°-35.1°",
    "NO ASPHERICAL SURFACES",
  ],

  /* ── Explicit metadata ──
   *   focalLengthDesign / nominalFno are the computed values of THIS model at the two
   *   published stations; the marketing pair is the manufacturer's engraved 35-70mm f/2.7-3.5.
   *   lensMounts intentionally omitted — see NOTE ON MOUNT TAXONOMY in the header. */
  focalLengthMarketing: [35, 70],
  focalLengthDesign: [34.998, 65.241],
  apertureMarketing: 2.7,
  apertureDesign: 2.7, // wide station; calibrated to the patent's published k = 2.7 (see header)
  imageFormat: "135-full-frame",
  patentNumber: "DE 3602859 A1",
  patentAuthors: ["Utz Schneider", "Volker Tautz", "Karin Holota"],
  patentAssignees: ["Jenoptik Jena GmbH"],
  patentYear: 1986,
  elementCount: 9, // 8 powered elements + the fixed plane-parallel plate
  groupCount: 8, // 7 air-separated powered groups + the plate

  /* ── Elements ── n_e / nu_e stored natively (indexReference "e"); fl = standalone thick-lens
   *   focal length in air at the modelled scale. Catalog names identify spectral proxies only: see header. */
  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.68101,
      vd: 54.74,
      indexReference: "e",
      fl: -82.01,
      glass:
        "S-LAL12 — compatible native e-line spectral proxy; historical Jena supplier and melt unconfirmed",
      apd: false,
      role: "Front negative meniscus of the moving negative group G_I; concentric to G_II.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.69649,
      vd: 53.29,
      indexReference: "e",
      fl: -48.96,
      glass: "LAC13 — compatible native e-line spectral proxy; historical Jena supplier and melt unconfirmed",
      apd: false,
      role: "Second negative meniscus of G_I; attributed by a secondary source as the design's lanthanum glass (LaK 75n) and the sole element that violates the patent's own condition (8).",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.65221,
      vd: 33.62,
      indexReference: "e",
      fl: 64.8,
      glass: "SF2 — compatible native e-line spectral proxy; historical Jena supplier and melt unconfirmed",
      apd: false,
      role: "Positive flint meniscus closing G_I; carries the group's chromatic correction.",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.60588,
      vd: 60.71,
      indexReference: "e",
      fl: 31.99,
      glass: "N-SK14 — compatible native e-line spectral proxy; historical Jena supplier and melt unconfirmed",
      apd: false,
      cemented: "K1",
      role: "Front component of the biconvex cemented member K1; leading positive power of G_II.",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.76167,
      vd: 27.33,
      indexReference: "e",
      fl: -98.67,
      glass: "E-FD4 — compatible native e-line spectral proxy; historical Jena supplier and melt unconfirmed",
      apd: false,
      cemented: "K1",
      role: "Rear component of K1; its cement surface is concentric to G_I.",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.6664,
      vd: 56.14,
      indexReference: "e",
      fl: 52.0,
      glass:
        "Unmatched (Jena melt, n_e 1.66640 / ν_e 56.14; no verified compatible catalog dispersion)",
      apd: false,
      role: "Positive meniscus lying concentric to the aperture stop.",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.66885,
      vd: 35.62,
      indexReference: "e",
      fl: -22.93,
      glass:
        "J-BASF2 — compatible native e-line spectral proxy; historical Jena supplier and melt unconfirmed",
      apd: false,
      role: "Biconcave negative behind the stop; the strongest single power in the lens and the subject of condition (7).",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.66151,
      vd: 50.57,
      indexReference: "e",
      fl: 41.56,
      glass: "N-SSK5 — compatible native e-line spectral proxy; historical Jena supplier and melt unconfirmed",
      apd: false,
      role: "Final biconvex positive of G_II; sets the exit-pupil geometry and the rear clearance.",
    },
    {
      id: 9,
      name: "P",
      diagramLabel: "P",
      label: "Plane plate",
      type: "Plane-Parallel Plate",
      nd: 1.51859,
      vd: 63.87,
      indexReference: "e",
      glass:
        "N-BK7 — compatible native e-line spectral proxy; historical Jena supplier and melt unconfirmed",
      apd: false,
      role: "Fixed plane-parallel plate closing the objective ahead of the image plane (claims 1-3); the published rationale is mechanical — it shields the moving cells from the camera side. Flat on both faces, so its Petzval contribution is exactly zero.",
    },
  ],

  /* ── Surface prescription ── labels 1-17 are the patent's r1-r17; STO is the inferred
   *   iris plane inside the l5 Blendenraum. Surface d is the axial distance to the NEXT
   *   surface; nd is the medium AFTER the surface. All values = source value x 35.0 mm. */
  // Fig. 1: the fixed plate rim is about 0.95 times L4's optical rim.
  // Estimate 12.9 mm on both plane faces; the prior 16 mm rim exaggerated P.
  surfaces: [
    { label: "1", R: 38.9375, d: 6.3035, nd: 1.68101, elemId: 1, sd: 20.38 },
    { label: "2", R: 21.4375, d: 8.2425, nd: 1.0, elemId: 0, sd: 17.65 },
    { label: "3", R: 409.255, d: 2.4255, nd: 1.69649, elemId: 2, sd: 16.2 },
    { label: "4", R: 31.3985, d: 2.9575, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "5", R: 29.2075, d: 4.2945, nd: 1.65221, elemId: 3, sd: 16.36 },
    { label: "6", R: 89.054, d: 31.052, nd: 1.0, elemId: 0, sd: 15.94 }, // l3 — zoom gap (var)
    { label: "7", R: 37.541, d: 6.3035, nd: 1.60588, elemId: 4, sd: 13.49 },
    { label: "8", R: -37.541, d: 2.4745, nd: 1.76167, elemId: 5, sd: 12.26 }, // K1 cement surface
    { label: "9", R: -77.1505, d: 0.098, nd: 1.0, elemId: 0, sd: 11.89 },
    { label: "10", R: 25.7285, d: 4.277, nd: 1.6664, elemId: 6, sd: 11.85 },
    { label: "11", R: 93.24, d: 1.0, nd: 1.0, elemId: 0, sd: 10.09 },
    { label: "STO", R: 1e15, d: 2.976, nd: 1.0, elemId: 0, sd: 9.241 }, // position inferred inside l5; sd calibrated to k = 2.7 at wide
    { label: "12", R: -61.901, d: 3.5875, nd: 1.66885, elemId: 7, sd: 9.77 },
    { label: "13", R: 20.8635, d: 3.1045, nd: 1.0, elemId: 0, sd: 10.21 },
    { label: "14", R: 177.4325, d: 3.745, nd: 1.66151, elemId: 8, sd: 11.86 },
    { label: "15", R: -32.2595, d: 1.0, nd: 1.0, elemId: 0, sd: 12.47 }, // l7 — zoom + focus gap (var)
    { label: "16", R: 1e15, d: 3.878, nd: 1.51859, elemId: 9, sd: 12.9 },
    { label: "17", R: 1e15, d: 37.7488, nd: 1.0, elemId: 0, sd: 12.9 }, // fixed plate-to-image distance
  ],

  /* ── All-spherical design: the source publishes no asphere equation or coefficient table. ── */
  asph: {},

  /* ── Variable air spacings ── one [d_infinity, d_close] pair per zoom station (10 stations).
   *   D6  (l3): zoom only — identical at both focus positions.
   *   D15 (l7): zoom AND focus — the reconstructed unit extension lands here. */
  var: {
    "6": [
      [31.052, 31.052],
      [25.0618, 25.0618],
      [20.0732, 20.0732],
      [15.8521, 15.8521],
      [12.234, 12.234],
      [9.0984, 9.0984],
      [6.3547, 6.3547],
      [3.9337, 3.9337],
      [1.7818, 1.7818],
      [0.525, 0.525],
    ],
    "15": [
      [1.0, 2.7818],
      [3.2303, 5.3932],
      [5.4592, 8.0452],
      [7.6882, 10.7408],
      [9.9171, 13.4817],
      [12.146, 16.2696],
      [14.3749, 19.1062],
      [16.6039, 21.9935],
      [18.8328, 24.9336],
      [20.2601, 26.845],
    ],
  },

  varLabels: [
    ["6", "ZOOM l3"],
    ["15", "BF l7"],
  ],

  /* ── Zoom stations: the two published states (first/last) plus eight code-solved fixed-image-plane
   *   states at 35 x f'_norm = 1.1 ... 1.8, labelled by computed design EFL (see NOTE ON ZOOM STATIONS). ── */
  zoomPositions: [34.998, 38.5, 42.0, 45.5, 49.0, 52.5, 56.0, 59.5, 63.0, 65.241],
  zoomLabels: ["Wide", "Tele"],

  /* ── Diagram annotations ── */
  groups: [
    { text: "G I (MOVING, NEG.)", fromSurface: "1", toSurface: "6" },
    { text: "G II (MOVING, POS.)", fromSurface: "7", toSurface: "15" },
    { text: "P (FIXED)", fromSurface: "16", toSurface: "17" },
  ],

  doublets: [{ text: "K1", fromSurface: "7", toSurface: "9" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.8,
  focusDescription:
    "RECONSTRUCTED, not published: rigid unit extension of the whole powered system against the plane plate that claim 2 fixes to the camera, so only l7 changes (+1.78 mm at 35 mm rising to +6.58 mm at 65 mm for the secondary-sourced 0.80 m object-to-image minimum, solved at each of the ten zoom stations). Eight of those stations are code-solved fixed-image-plane states, not published. The separate 1:3 macro mode at the long end is not modelled.",

  /* ── Aperture configuration ── one modelled f-number per zoom station, from a single fixed
   *   iris of 9.241 mm semi-diameter calibrated to the patent's published k = 2.7 at wide. */
  nominalFno: [2.7, 2.8122, 2.9242, 3.0362, 3.1482, 3.2602, 3.3722, 3.4842, 3.5962, 3.6678],
  fstopSeries: [2.7, 3.5, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22, // marketed minimum aperture, half-stop detents

  /* ── Layout tuning ── 127 mm track against a 40.8 mm maximum diameter; yScFill 0.42 keeps
   *   the cross-section close to isotropic, well inside the 1.6 maxAspectRatio clamp. */
  scFill: 0.55,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
