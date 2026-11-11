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
  stay inside the figure. Left for the rim pass. (Closed in the semi-diameter pass below: S7/S8 7.1, S9/S10 7.3.)
- The other rims sit 0.1–0.3 mm under Fig. 1's lower-edge extents (L1 about 13.7, L2 9.5, L3 8.4, L6 8.9 mm).
  (Closed in the semi-diameter pass below: kept, within measurement noise.)
- Field: the declared 63° (31.5° half-field) lands at 21.24 of 21.65 mm; the corner needs 32.0°, the patent's plotted
  edge. `maxTraceFieldDeg` 32 would trace to the corner.
- Diaphragm blade count is not in the A-series manual and is left unset.

## 2026-11-11 — Semi-diameter pass against the patent figure

Source: JP S50-138824 A, Fig. 1 on printed p. 117 (PDF p. 3), a 1-bit scan at 347 ppi, rendered at 600 dpi. Scale:
the vertex crossings beside the axis put S1 at 80 px and S12 at 1285 px, 1205 px for the 119.72-unit track, so 10.065 px
per patent unit (28.76 px/mm at ×0.35); the spans S1–S8 and S3–S10 give 10.05 and 10.10. The L1 rear arc (R2 = 44.46)
fitted with the horizontal scale gives the vertical scale within 2 %. The drawn elements sit 3–8 px above the drawn
axis line, so each half-height is half the distance between the centres of the element's upper and lower edge lines.

| Surface | Baseline sd | Fig. 1 (mm) | Baseline / figure | New sd | Evidence                                              |
| ------- | ----------- | ----------- | ----------------- | ------ | ----------------------------------------------------- |
| 1       | 13.5        | 13.6        | 0.99              | 13.5   | kept, within noise                                    |
| 2       | 10.8        | 11.0        | 0.98              | 10.8   | kept; Fig. 1 arc meets the bevel at 11.0              |
| 3       | 9.2         | 9.6         | 0.95              | 9.2    | kept, within noise                                    |
| 4       | 9.2         | about 9.0   | 1.02              | 9.2    | kept; the rear face ends at a drawn chamfer           |
| 5, 6    | 8.3         | 8.5         | 0.97              | 8.3    | kept, within noise                                    |
| 7, 8    | 6.8         | 7.2         | 0.94              | 7.1    | real-ray f/2.8 marginal 7.00 (S7) and 6.82 (S8)       |
| 9, 10   | 7.0         | 7.5         | 0.94              | 7.3    | S10 clipped the axial beam; real-ray f/2.8 needs 7.23 |
| 11, 12  | 8.8         | 9.1         | 0.97              | 8.8    | kept, within noise                                    |

Every baseline rim was inside the drawing by 1–7 %, within measurement noise, so the figure alone moved nothing. The
change is a clearance fix that also brings L4 and L5 closer to the drawing. The paraxial spherical-aberration check
(+0.113, −0.096, −0.136 and −0.097 mm at pupil 1, 0.85, 0.7 and 0.5) shows no prescription misprint behind the clip.
Before the pass, S10 cut the engine's own axial beam (99.5 % on axis; the aperture audit's raise asked 7.1 for S9/S10
as a square rim), and the real-ray f/2.8 cone, whose marginal ray reaches 7.20 mm at the stop plane, exceeded S7, S8
and S10. Each element keeps one height on both faces, as Fig. 1 draws them square-cut. After the pass the real-ray
cone clears every rim: S10 by 0.07 mm, S7 by 0.10 mm, S8 by 0.28 mm and S9 by 0.41 mm. No face sits below its baseline,
so there are no cuts or lands to justify.

Geometric transmission against the baseline: 0° 99.5 → 100.0 %, 14.3° 83.5 → 87.8 %, 22.9° 66.4 → 71.0 % and 31.5°
44.4 → 48.1 %. Engine EFL, FOPEN 2.8, half-field 31.5° and stop radius 6.98287 mm are unchanged; only the drawn stop
housing follows the larger neighbouring rim (7.1 mm). The surface validator prints OK, the aperture audit reports no
rim limit, the image-circle check reports nothing undersized and field coverage is unchanged at 98 % (declared 31.5°
field; corner at 32.0°, clear). A model sketch at 14.38 px/mm laid over Fig. 1 at 300 dpi matches the axial positions
and the new L4 and L5 heights. The maker comparison is in the Deployment validation section above.

Open: L2 and L6 sit 3–5 % inside the drawing and stay as noise. The 2 % vertical-scale uncertainty applies to every
reading. The 31.5° field item above is unchanged.
