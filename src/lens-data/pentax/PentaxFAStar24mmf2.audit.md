# Build audit

Status: source-qualified infinity representative. Native and reference-MTF qualifications are recorded below; integration outcomes belong to the accompanying package validation manifest. (Closed 2026-11-10: integrated and reworded; see the dated sections below.)

- Pinned baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 commits. Isolated repository; no commits, pushes, publication or delivered-package edits.
- Exact patent numbers and first-radius fingerprints absent in baseline lens source search. Broader completed-package absence remains bounded search evidence.
- Literal whole source retained; no hidden retuning, invented glass, plate, finite motion or factory identity.
- H0 static rim failures preserved; current inferred rims pass bounded geometry without override.
- Source-row mapping and deterministic generator retained separately.
- Required layout and infinity-sentinel focus fields present.
- Native geometry, zero trim, iris clearance, official aperture census, sampled rays and spectral-support assessment completed. Reference MTF completed with retained source/format distinctions and bounded convergence limitations; integration outcomes are recorded separately.
- Non-optical initial identity-schema failure preserved; corrected lowercase key and spaced patent number. No source optical values changed.

- Reference MTF findings are recorded in the companion analysis and optical-quality evidence. Max grid128, no source-plane shift, no finite runtime states, no source retuning.

- Initial focused sweep: 22/23 files and 1608/1609 tests passed; one assignee-spelling consistency failure. Only structured corporate-suffix rendering normalized using same-patent original-assignee/assignment records at https://patents.google.com/patent/US4934797A/en. Original cover “Asahi Kogaku Kogyo Kabushiki Kaisha” preserved; canonical “Asahi Kogaku Kogyo Co., Ltd.” corroborated by existing assigneeCorporateHistory.ts. No optical fields or criteria changed.

## Deployment validation (2026-11-10)

Independent check against the 300 dpi page images (the OCR layer drops digits): 21 surfaces, 4 asphere terms plus K
and the 1/10 state all equal Example 4 ×0.24; no mismatches. EFL 23.9996, F/2.0, BF 36.749, TL 105.862 match. Example 4 is
the only F/2.0 example with the 1.618/63.4 rear element, which fits Ricoh's diagram (rear-group asphere and anomalous-
dispersion element, 11/9). The Tokina and FA 135 documents in the package's evidence are unrelated research material.

Applied: `catalog.closeFocusM.marketing` 0.3 (Ricoh); f/22 added to `fStops`.

Open: the patent's printed 1/10 close state (d6 4.95, fB 164.04 at f = 100) could become a close keyframe; real-ray f/2
marginal needs 10.0–10.2 mm at S9–S11 (sd 10; the engine's paraxial iris clears); resin layer type wording; public wording
(name "(E4 representative)", subtitle, specs, `focus.description`) and package-process prose need a cleanup pass. (Resin
type and wording items closed in the cleanup pass below; the other two carry forward.)

## 2026-11-10 — Cleanup and wording pass

Fields changed in the data file:

- Header comment rewritten as plain facts: patent and Example 4, uniform ×0.24 scale from f = 100 with A_p scaled by
  0.24^(1−p) and K = 0 kept, resin layer 1.22 × 0.24 = 0.2928 mm with distinct S14/S15 radii, iris at mid-d10 (inferred
  from the text's element order), rims from Fig. 10, the real-ray f/2 margin at S9–S11, infinity focus only.
- `subtitle`: "US4934797A WHOLE EXAMPLE 4 — QUALIFIED SOURCE REPRESENTATIVE" → "US 4,934,797 A, Example 4 — probable
  production correlation".
- `specs`: "11 GLASS + DISTINCT RESIN / 9 GROUPS", "INFINITY-ONLY SOURCE MODEL", "FACTORY IDENTITY NOT ESTABLISHED" →
  "11 ELEMENTS / 9 GROUPS", "DESIGN f = 24.00 mm", "DESIGN F/2.0", "1 ASPHERICAL SURFACE / 1 ELEMENT", "HYBRID ASPHERICAL
  ELEMENT".
- `catalog.focalLengthMm.design` 23.999618242056 → 23.9996: traced EFL rounded to four decimals, the convention of the
  folder's other patent primes (45.0006, 28.0006, 84.9969).
- `focus.closeFocusM` 1e9 → 1e15 placeholder; `focus.description` replaced by a plain infinity-only text naming the
  moving rear group, the printed 1/10 state at scale and Pentax's 0.3 m / 0.13×.
- Element labels "Glass element N" → "Element N"; resin "Distinct aspherical resin layer" → "Element 8 resin layer",
  type "Positive Meniscus" → "Bonded Aspheric Resin Layer"; one-line roles added to all twelve elements.
- Cemented ids D1/D2 → C1/C2 (H1 kept for the hybrid); `groups` (G1 S1–S6 fixed, G2 S7–S21 focusing) and `doublets`
  (C1 S11–S13, H1 S14A–S16, C2 S17–S19) added.
- `apd: "inferred"` with an `apdNote` on L11, the rear positive meniscus Ricoh's diagram marks as anomalous low-dispersion
  glass; 1.618/63.4 is a phosphate crown (PCD4 θgF 0.540).

Glass relabels, all from "Unmatched (literal source n/v; catalog identity unproved)"; Δ is catalog minus patent, label
form "<name> (<vendor> catalog equivalent; production supplier unspecified)":

- L1, L4 → S-LAL18 (OHARA): Δnd −3.1e-6, Δνd −0.02
- L2 → S-LAH60 (OHARA): Δnd −2.1e-7, Δνd −0.04
- L3 → PBH25 (OHARA): Δnd −2.6e-6, Δνd +0.01
- L5, L9 → PBH6 (OHARA): Δnd −3.1e-6, Δνd +0.04
- L6 → S-TIH3 (OHARA): Δnd −1.9e-6, Δνd −0.00
- L7 → S-LAH63 (OHARA): Δnd −2.2e-6, Δνd −0.01
- L8 → S-TIH11 (OHARA): Δnd +2.7e-6, Δνd −0.02
- L10 → LAH66 (OHARA): Δnd −9.1e-7, Δνd +0.00
- L11 → PCD4 (HOYA): Δnd −2.1e-6, Δνd −0.00
- Resin → "Unmatched (aspheric resin layer; nd 1.5201, νd 50.8)", the FA* 28-70 form.

Vendor choice: the printed rounding (νd 37.2 and 25.4, nd 1.76180 and 1.80440) fits OHARA rows rather than HOYA NBFD10,
FD60, FD140 and NBFD3; νd 63.4 fits PCD4 rather than S-PHM52 (63.33). Remaining ties (TAC8, FD110, TAF1) follow the
OHARA majority; older OHARA names are used where the catalog holds them (PBH25, PBH6, LAH66). The g-line plots cannot
separate the tied rows at their scale. The file carried no nC/nF/ng to drop.

Engine numbers before and after are identical: EFL 23.999618242064543 mm, FOPEN 2, halfField 43.17764982881914°, stop
radius 9.461850256600073 mm, BFD 36.7494 mm, track 105.8616 mm; only the closeFocusM placeholder changed. The surface
audit prints OK and the aperture audit reports no rim limit.

Analysis: identification rewritten around the Ricoh table and diagram, with Example 4 as the only f/2.0 example with
the 1.618/63.4 rear glass (the "Example 2 cannot be excluded" hedge is removed); conditions (1)–(3) and the printed
values added; process prose removed (coordinator handoff note, pinned-baseline precedents, placeholder wording, native
pilot, aperture census, MTF grid and convergence paragraphs, manifest references); "Model Qualification and
Verification" renamed "Model Scope and Limitations"; element boilerplate replaced by glass names and roles; glass table
and a scaled focus table added; production years cited from the Pentax Forums database.

Open:

- The printed 1/10 near state (d6 15.87 → 4.95, fB 153.12 → 164.04 at f = 100; m = −0.0999, object about 0.34 m from
  the image at this scale) could become a published close keyframe.
- A real f/2 marginal ray needs 10.22 / 10.22 / 10.03 mm at S9 / S10 / S11 (sd 10); the engine's paraxial iris (9.46 mm)
  clears.
- Rims against Fig. 10 (300 dpi render, read by eye, about ±3 %), scaled by the S1–S21 vertex span: L1 25.4 (sd 25),
  L2 20.8 (20), L3 16.5 (15.3), L4 12.5 (12), L5 10.3 (10), C1 10.1 (10), H1 9.0 (9), C2 11.8 (12), L11 13.3 (13); all
  within about 4 % except L3, about 8 % under the drawing. Not changed in this pass.
- `indexReferenceNote` "Source explicitly defines d-line indices." repeats on all twelve elements; true, left unchanged.
