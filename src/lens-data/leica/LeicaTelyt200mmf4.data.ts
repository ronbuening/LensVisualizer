import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — LEICA TELYT 200mm f/4 (VISOFLEX)               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 1 096 057 B, single numerical example (Ernst Leitz  ║
 * ║    GmbH; inventors Walter Mandler, Horst Schmidt).                   ║
 * ║  Telephoto front member (L1 +, L2 −) followed, after the stop, by a  ║
 * ║    weakly negative correction member (L3 +, L4 −) that is itself a   ║
 * ║    telephoto pair of menisci concave toward the stop.                ║
 * ║  4 elements / 4 groups, all surfaces spherical, no cemented joints.  ║
 * ║  Focus: unit focusing (whole optical head on a helicoid); only the   ║
 * ║    back focal distance changes.                                      ║
 * ║                                                                      ║
 * ║  NOTE ON SCALING: the patent is normalized to f = 1,00. Every length ║
 * ║    is multiplied by s = 200 (no aspheres). Computed EFL = 200.31 mm. ║
 * ║  NOTE ON INDICES: nd/vd slots hold the patent's native e-line ne/νe  ║
 * ║    (indexReference "e"); no d-line conversion has been applied.      ║
 * ║  NOTE ON IMAGE PLANE: the last gap is the computed paraxial e-line   ║
 * ║    back focal distance (103.5982 mm = 0.517991 f). The printed       ║
 * ║    Schnittweite a8 = 0,5162 f (103.24 mm) is not reproduced by the   ║
 * ║    printed radii, spacings and indices; it is preserved in the       ║
 * ║    dossier, not used here.                                           ║
 * ║  NOTE ON STOP POSITION: inferred from the patent figure (stop D in   ║
 * ║    gap a4): 0.0204 f = 4.08 mm in front of r5. Stop SD calibrated    ║
 * ║    so the paraxial entrance pupil gives f/4.0 (patent 1:4,0); this   ║
 * ║    is a calibration, not a published diaphragm diameter.             ║
 * ║  NOTE ON SEMI-DIAMETERS: not published. Modeled from real meridional ║
 * ║    rays (f/4 axial cone; 60 % field fan to ±0.75 pupil; full-field   ║
 * ║    chief ray) at infinity, 5.55 m and 3 m, maximum × 1.08, rounded   ║
 * ║    up to 0.1 mm and equalized per element.                           ║
 * ║  NOTE ON FOCUS: close-focus spacing is a constrained reconstruction  ║
 * ║    (only infinity is published): 3.0 m subject-to-film (Leitz        ║
 * ║    literature), solved paraxially at the e-line.                     ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop, variable gap.            ║
 * ║  See LENS_DATA_SPEC.md § Scope: What to Include.                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  publishedAt: "2026-10-17T00:00:00Z", // Requested catalog publication date, independent of commit timezone.
  key: "leica-telyt-200mm-f4",
  maker: "Leica",
  name: "LEITZ TELYT 200mm f/4 (Visoflex)",
  subtitle: "DE 1 096 057 B EXAMPLE — ERNST LEITZ GMBH / MANDLER, SCHMIDT",

  catalog: {
    lensMounts: ["leica-visoflex"],
    imageFormat: "135-full-frame",
    specs: ["4 ELEMENTS / 4 GROUPS", "f ≈ 200.3 mm", "F/4", "2ω ≈ 12.3°", "ALL SPHERICAL"],
    elementCount: 4,
    groupCount: 4,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 200, design: 200.3 },
    fNumber: { marketing: 4 },
  },

  // lensMounts omitted: the Visoflex mount (M39 thread at 91.3 mm register) has no taxonomy id.
  source: {
    patentNumber: "DE 1 096 057 B",
    patentYear: 1960,
    authors: ["Walter Mandler", "Horst Schmidt"],
    assignees: ["Ernst Leitz GmbH"],
  },

  /* ── Elements ── native e-line coordinates (ne / νe); fl = standalone thick-lens focal length in air */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.5709,
      vd: 63.0,
      indexReference: "e",
      focalLengthMm: 90.59,
      glass: "PCD2 spectral proxy (HOYA; native e-line PSK2-type coordinates; historical supplier unconfirmed)",
      apd: false,
      role: "Positive crown of the telephoto front member (Vorderglied)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.7343,
      vd: 28.1,
      indexReference: "e",
      focalLengthMm: -144.9,
      glass: "SF10 spectral proxy (Schott; native e-line coordinates; historical supplier unconfirmed)",
      apd: false,
      role: "Negative dense flint completing the telephoto front member",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7394,
      vd: 40.8,
      indexReference: "e",
      focalLengthMm: 175.24,
      glass:
        "Unmatched (LaF8-class lanthanum flint; historical OHARA LAF8 / Schott LaFN8 coordinates, no current catalog match)",
      apd: false,
      role: "Positive meniscus of the correction member, concave toward the stop",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.5035,
      vd: 56.3,
      indexReference: "e",
      focalLengthMm: -145.61,
      glass: "K10 spectral proxy (Schott; native e-line coordinates; historical supplier unconfirmed)",
      apd: false,
      role: "Negative meniscus of the correction member, concave toward the stop",
    },
  ],

  /* ── Surface prescription ── patent r, a × 200; STO split from a4 (figure-inferred); last d = paraxial BFD */
  surfaces: [
    { label: "1", R: 62.54, d: 10.0, sd: 26.2, medium: 1 },
    { label: "2", R: -281.5, d: 5.5, sd: 26.2 },
    { label: "3", R: -140.0, d: 4.0, sd: 24.0, medium: 2 },
    { label: "4", R: 448.7, d: 32.72, sd: 24.0 }, // a4 = 36.80 mm; STO position inferred from the patent figure
    { label: "STO", R: "flat", d: 4.08 }, // SD calibrated to the exact axial f/4.0 beam
    { label: "5", R: -117.0, d: 5.0, sd: 18.7, medium: 3 },
    { label: "6", R: -62.6, d: 18.2, sd: 18.7 },
    { label: "7", R: -37.3, d: 4.0, sd: 14.2, medium: 4 },
    { label: "8", R: -78.66, sd: 14.2 }, // computed BFD; printed a8 = 103.24 mm not reproduced
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 3.0,
    description:
      "Unit focusing: the complete optical head moves on a helicoid and only the back focal distance changes. The patent publishes the infinity state only; the 3.0 m (subject-to-film) state is reconstructed paraxially at the e-line, requiring 15.70 mm of extension at m ≈ −0.078.",
  },

  /* (moved from var) ── Variable air spacing ── unit focus: [infinity, 3.0 m subject-to-film] (reconstructed) */
  gaps: { "8": { label: "BF", values: [[103.5982, 119.2969]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "FRONT MEMBER", fromSurface: "1", toSurface: "4" },
    { text: "CORRECTION MEMBER", fromSurface: "5", toSurface: "8" },
  ],
  doublets: [],

  /* ── Layout tuning ── */
  layout: { yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
