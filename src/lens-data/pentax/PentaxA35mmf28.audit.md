# Audit Log — PENTAX SMC A 35mm f/2.8

Patent: JP S50-138824 A, sole example (US family member US 3,963,325 A)

## Package authoring notes (before integration)

The full JP table was recovered through J-PlatPat and the lens was checked against the corpus for duplicates before
authoring. The JP front page, Fig. 1 and the maker's section were reviewed against the transcription, and the
semi-diameters were set from Fig. 1 before any ray trace; no ray fit, override or refocus was applied. A static
geometry build and a 26-ray field check passed. The patent number was corrected to the form JP S50-138824 A with no
optics change. The JP d-line was read as helium d, with the US "sodium d-line" wording left open (settled in the
2026-11-11 validation below). Earlier prose that called L5 negative was corrected: the JP text and radii give a
positive meniscus; no data change. Integration and viewer acceptance were pending at handoff (closed: integrated
2026-11-11).

## Deployment validation (2026-11-11)

- Source: JP S50-138824 A (J-PlatPat capture, 3 pp.), kept as `patents/JPS50138824A.pdf`; the US family member
  US 3,963,325 A was used for comparison. 35 values checked from the page image: an exact ×0.35 transcription.
- R7/R9 signs: the JP negative signs are right (EFL 100.24 at F = 100). The US description Table 1 prints them positive
  (EFL 27.0), a misprint; the US claim table prints them negative like the JP. The printed F1 −100.46 is a misprint for
  −108.46. The printed nd are helium-d values (S-BSL7, S-LAH53, S-LAM54, SF6, S-LAM60), so `indexReference` "d" stands.
- Product: the SMC Pentax-A lens booklet construction page (PDF p. 39) matches Fig. 1 element for element; 6 elements /
  6 groups, 63°, 0.3 m. Secondary sources give the 1977 SMC Pentax-M 35mm f/2.8 the same optics.
- Integration fixes: assignee "Asahi Kogaku Kogyo Co., Ltd." (house form), `catalog.lensMounts` ["pentax-k"],
  `catalog.closeFocusM` 0.3 m.
- Rims: a real-ray clearance check flags S7/S8/S10 by up to 0.2 mm with its own stop; `audit:aperture` passes with the
  engine iris, so no rim edit at integration.
- Open for the cleanup pass: public wording; the analysis still describes the F1, sodium and US-sign items as conflicts.
  (Closed in the cleanup pass below.)

## 2026-11-11 — Cleanup and wording pass

Fields changed in the data file: the header comment was rewritten as plain prose with every fact kept (×0.35 scale,
printed vs derived values, the F1 and US Table 1 misprints, helium-d index line, mid-d6 stop, Fig. 1 rims, infinity
placeholder, product association). `subtitle` "Whole JPS50138824 sole example; qualified representative, explicit
spectral-convention conflict" became "JP S50-138824 A, sole example — probable match; optics shared with the 1977 SMC
Pentax-M 35mm f/2.8". `specs` became 6 ELEMENTS / 6 GROUPS, DESIGN f = 35 mm, DESIGN F/2.8, ALL SPHERICAL and PATENT
f = 100 SCALED × 0.35. `focus.description` now states infinity focus only, the computed back focus and the unmodeled
0.3 m maker minimum. Element types follow the signs of R (Negative Meniscus, Positive Meniscus, Biconvex Positive,
Biconcave Negative, Positive Meniscus, Biconvex Positive), and each element gained a short `role`.
`catalog.focalLengthMm.design` stays 35, the scaled patent F, as in the sibling PENTAX SMC M 28mm, M 40mm and A 200mm
files.

Glass labels (catalog minus printed): L1 S-BSL7 (OHARA), Δnd 0, Δνd +0.04; L2 NBFD13 (HOYA), Δnd 0, Δνd −0.07; L3 and
L5 S-LAM54 (OHARA), Δnd −0.000002, Δνd −0.08; L4 FD60 (HOYA), Δnd 0, Δνd +0.06; L6 S-LAM60 (OHARA), Δnd −0.000002,
Δνd −0.06. Each is written "catalog equivalent; production supplier unspecified". The L4 choice follows the Fig. 2
g-line curve: its paraxial offset reads −0.195 at F = 100, and the labelled set gives −0.206; with S-TIH6 the set gives
−0.181 and with PBH6 or SF6 about −0.235. LAH53 and S-LAH53 (OHARA) also match L2 and change the offset by under 0.01.
No nC/nF/ng were present, and no element carries `apd` (the maker publishes no special-dispersion element).

The analysis was rewritten around the same skeleton: process passages (ray counts, TypeScript checks, pixel spans,
"hidden"/"qualified"/"literal" wording) were removed; the US-sign, F1 and index-line items are now stated as settled;
the M/A shared optics are cited from Cine Lens Wiki; the booklet construction page and lens list are cited; per-element
sections, a glass table and a "Model Scope and Limitations" section were added; the empty aspherical section was
dropped.

Engine numbers before and after are identical: EFL 35.0838985902867 mm, FOPEN 2.8, half-field 31.5°, stop radius
6.98287 mm, BFD 37.4706 mm, TL 79.3726 mm. `audit:surface` prints OK and `audit:aperture` reports no rim limit.

Open:

- Rims at S7–S10. At the engine iris the axial beam clears S10 by 0.02 mm and S7 by 0.05 mm. A real-ray f/2.8 cone
  (stop radius 7.20 mm) needs S7 7.00, S8 6.82 and S10 7.23 mm against 6.8, 6.8 and 7.0. Fig. 1 read at 600 dpi gives
  L4 about 6.9–7.6 mm and L5 about 7.1–7.9 mm (lower and upper extents), so S7/S8 at 7.05 and S9/S10 at 7.25 mm would
  stay inside the figure. Left for the rim pass.
- The other rims sit 0.1–0.3 mm under Fig. 1's lower-edge extents (L1 about 13.7, L2 9.5, L3 8.4, L6 8.9 mm).
- Field: the declared 63° (31.5° half-field) lands at 21.24 of 21.65 mm; the corner needs 32.0°, the patent's plotted
  edge. `maxTraceFieldDeg` 32 would trace to the corner.
- Diaphragm blade count is not in the A-series manual and is left unset.
