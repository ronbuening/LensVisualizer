# Olympus XA2 D.Zuiko 35mm f/3.5 — source and model audit

US 4,303,313 A Embodiment 1, transcribed whole and scaled ×0.35. The original patent table and front matter were inspected visually when the package was authored (2026-11-09).

## Source invariants

Eight radii, seven internal intervals and four n/v pairs reproduce the whole embodiment. Splitting d6 at the inferred midpoint stop preserves its total. No image plane, radius, glass, gap or coefficient was optimized. The image plane stays at the derived paraxial position for collimated input, 34.846 mm behind the first surface. No factory prescription or finite focus movement is asserted.

## Model qualifications

At authoring, the d-line reading was an assumption and all four glasses were unmatched with estimated dispersion (both closed in the cleanup pass below). The paraxial plane is soft at full aperture and the corners vignette strongly; both are kept. The patent's 31.5° field was evaluated with a 44.1 mm reference circle in the package's own analysis only; the catalog image format stays 135 full frame, whose corner (31.09°) was evaluated separately. The package's best-axial shift of −0.296 mm was a diagnostic and is not applied.

The instruction manual recommends the close zone for 1–1.5 m. The 1 m minimum is a catalog value only; the repair manual's 1.2 m and 2.7 m marks are zone settings, not measured optical states. The infinity-only focus uses a placeholder close distance (1e9 m at authoring, 1e15 m since the cleanup pass). No variable gaps.

## Package checks (2026-11-09)

The first draft omitted the required `layout.yScFill` and was rejected on ingest; the display-only value 0.35 was added. Geometry, iris clearance and aperture checks then passed. Reference MTF at the patent half field and at the frame corner converged to 40 lp/mm, with poor contrast at the paraxial plane. The 31.5° field needed the analysis-only image-circle normalization noted above; no catalog value changed.

## Integration status

Closed 2026-11-10: superseded by the deployment validation and cleanup pass below. The package's own installer and validation records are not part of the repo.

## Deployment validation (2026-11-10)

Independent check against the patent scan (no text layer; Embodiment 1 on p. 7, claim 2 on p. 8): all 8 R, 7 d and
4 nd/νd values equal the printed values ×0.35; no mismatches. EFL 35.008 (patent f = 100 → 100.02 at patent scale), F/3.5,
conditional values reproduce (f/f123 1.589 vs printed 1.590). Olympus's XA2 service manual (D.Zuiko 35 mm 1:3.5, 4/4, front-cell
focus) supports the attribution; E1's scaled d6 (5.77 mm) is the closest of the five embodiments to the manual's 5.754 mm.

Applied: `catalog.lensMounts: ["fixed-lens-camera"]` (missing).

Open: L4 rims (s7/s8 sd 5) are drawn smaller than in the patent figure and the service diagram (≈6.2/6.6 passes
`audit:surface`); field coverage 80 % because L1 rear / L2 front cross at r ≈ 5.7 mm (as on the live Olympus XA entry); all
four glasses match catalog rows exactly (S-LAL10, S-TIH11, S-BAH27, S-LAH51) but are labelled `Unmatched`; public wording
(subtitle, specs, `focus.description`) and the package-process prose in this log and the analysis need a cleanup pass.
Glasses and wording: closed in the cleanup pass below; rims and field coverage: closed in the semi-diameter pass below
(coverage 92 %, limited by geometry).

## 2026-11-10 — Cleanup and wording pass

Data file: header comment rewritten in plain terms with every fact kept (scale stated once, d-line reading, derived
image plane, stop and rim estimates, infinity-only focus). `subtitle` "US 4,303,313 A EMBODIMENT 1 — REPRESENTATIVE
SOURCE DESIGN" → "US 4,303,313 A, Embodiment 1 — XA2 production correlation". `specs` → "4 ELEMENTS / 4 GROUPS",
"DESIGN f = 35.0 mm", "DESIGN F/3.5", "ALL SPHERICAL". `catalog.focalLengthMm.design` 35.007882… → 35.0, the scaled
patent f, following the sibling `OlympusXAZuiko35mmf28`. `focus.closeFocusM` 1e9 → 1e15 (placeholder) and
`focus.description` rewritten (infinity only; production front-lens zone focus, marks at 1.2 m, 2.7 m and infinity,
1 m minimum). The four `indexReferenceNote` strings ("assumed helium-d") were removed: Fig. 3 plots the d and g lines.

Glass relabels (all OHARA, Δ = catalog − printed): L1 `Unmatched` → S-LAL10 (Δnd −4.7e-6, Δνd −0.02); L2 → S-TIH11
(Δnd +2.7e-6, Δνd −0.03); L3 → S-BAH27 (Δnd −4.2e-6, Δνd +0.14); L4 → S-LAH51 (Δnd −4.2e-6, Δνd +0.02). HOYA LAC10,
FD110 and BAFD7 tie for L1–L3, but no HOYA row is within 0.15 in νd for L4 (NBFD11 is 0.25 off), so OHARA is used for
all four. No catalog-copied nC/nF/ng were present.

Analysis: the identification section now lists the convergent evidence (repair-manual 4/4 layout and d6 = 5.754 mm
against 5.7715 mm, the closest of the five embodiments; timing; inventor). Element sections gained short roles from the
patent's conditions, the glass section names the OHARA rows, and a Conditional Expressions table was added. The image
plane, stop, verification and MTF sections were merged into "Model Scope and Limitations". The package's MTF values,
grid and normalization notes, and its sampled field transmissions (100 / 68.3 / 46.2 / 23.1 % at 0 / 15.75 / 23.625 /
31.5°) were dropped from the public text as unchecked package diagnostics. The archive.org service-manual link was
replaced by a plain citation of the repair manual, p. A-16.

Engine numbers before and after are identical: EFL 35.00788208140128, FOPEN 3.5, halfField 21.36708086948265°, stop
radius 3.044751011096371, BFD 16.9433, TL 34.8458. Only the reported closeFocusM changed (1e9 → 1e15). audit:surface
OK; audit:aperture within 3 % of the stated f-number with no rim limit.

Open: L4 rims (s7/s8 sd 5) are drawn smaller than the patent's Fig. 2 and the repair-manual diagram, where L4 is
nearly as tall as L1; about 6.2/6.6 passes audit:surface and removes the 9 % side clip at s8 (closed in the
semi-diameter pass below). Stop position: Fig. 3 distortion at 31.5° (about +2.2 %) fits a stop near 0.4 of d6 better
than the midpoint (+2.6 %) (closed in the second review below: 0.30 of d6). Field coverage is 80 % (chief ray clear to about 25.7°): L1 rear and L2 front meet at
r ≈ 5.7 mm, which caps L2 at 5 mm, the same pattern as the Olympus XA entry (closed below: 92 % with L2 at 5.6 mm).

## 2026-11-10 — Semi-diameter pass against the patent figure

Sources. The patent (`US4303313A.pdf`) has one cross-section, Fig. 2 on sheet 1 (PDF p. 2; the front page repeats it).
Fig. 1 is the thin-lens principle sketch. Fig. 2 is not Embodiment 1. Its vertex crossings at native resolution
(72 dpi render = scan pixels; r1…r8 at x = 811.5, 903, 938, 985, 1056.5, 1219, 1518.5, 1581.5) give spans of
91.5 / 35 / 47 / 71.5 / 162.5 / 299.5 / 63 px. Against Embodiment 2 (d = 5.97 / 1.91 / 2.94 / 4.71 / 10.38 / 18.76 /
3.82) every span reads 15.2–18.3 px per unit, 15.88 overall. Against Embodiment 1 they spread over 10.0–18.2, with
d1 at 10.0. Arc checks with Embodiment 2's radii confirm it: r8 (−26.841) reaches the 307 px top within 5 px, and r7's
cap end within 4 px. Heights convert at 15.88 px per unit and ×0.35 to the model's focal length. The second source is
the composition drawing on p. A-16 of Olympus's XA2 repair manual (staged scan, PDF p. 29, 600 dpi). It shows the
production lens, with d6 set to 5.754 mm. Its r1–r8 span (795 px) and its r6–r7 span (255 px) both give 44.4 px/mm
against Embodiment 1. Its L1/L2 spacing is schematic: d2 is drawn 2.1 mm against 0.93.

Readings (Fig. 2 / repair manual, mm): L1 5.3 / 6.95; L2 5.1 / 6.2 (square top); L3 4.7 / 4.7 (square top); L4
front-face cap 5.4 / 5.2, then a vertical land to the outer rim; L4 outer rim and rear face 6.8 / 6.4.

| Surface | Before | After | Evidence |
|---|---|---|---|
| 1, 2 (L1) | 7.0 | 7.0 | Repair manual 6.95. Fig. 2's 5.3 would shrink the traced field to about 20° and cost 10–24 points: kept. |
| 3, 4 (L2) | 5.0 | 5.6 | Repair manual 6.2; corner chief ray needs 5.95 at s3 and 5.01 at s4. L1 rear and L2 front cross at 5.74 mm, so 5.6 is the largest 0.1 mm step; `checks.gapSagFrac` 0.96 is the smallest two-decimal value that admits it (0.95 refused: 0.89 mm sag against 0.881 allowed in the 0.927 mm gap). Square, one value. |
| 5, 6 (L3) | 6.0 | 4.7 | Both drawings 4.7 (28 % under the old value). Square, one value. |
| 7 (L4 front) | 5.0 | 5.0 + `rimExtensionSd` 6.6 | Cap end 5.2–5.4 in the drawings, within noise of 5.0: kept. Both drawings draw the land out to the outer rim. |
| 8 (L4 rear) | 5.0 | 6.6 | Drawings 6.4 / 6.8; removes the 9 % side clip at the corner. |

Clearance and light, wide open at infinity. audit:surface OK; audit:aperture within 3 % of F/3.5 with no rim limit;
audit:image-circle 0 undersized. Field coverage 80 % → 92 %: the chief ray clears to 29.1° (19.94 mm of 21.65 mm),
stopped at s3, where the corner needs 5.95 against the 5.74 mm geometric limit. clearap at Y = 21.63 still flags
BLOCKS-CHIEF at s3 only (s4 cleared). Engine half-field 21.37° → 21.78°; FOPEN 3.5, stop radius 3.0448, EFL 35.0079
and BFD 16.9433 unchanged.

Geometric transmission by field, baseline → final: 5.7° 95.5 → 98.5, 8.6° 88.2 → 93.9, 11.4° 80.4 → 88.6, 14.3°
72.4 → 81.9, 17.1° 64.2 → 74.5, 20.0° 56.1 → 66.7, 22.8° 48.1 → 58.3, 25.7° 40.1 → 50.4 %. The new field end, 29.1°,
transmits 41.3 %. L3's reduction (a cut under the lands rule) costs at most 2.5 points against the same set with L3 at
6.0 (at 8.6°), within the 3-point allowance. Every field gains against the baseline. The L4 land changes no
tracing.

Open: Fig. 2 belongs to Embodiment 2, and no Embodiment 1 section exists. The repair-manual drawing carries the
production proportions but is schematic in the L1–L2 spacing. The stop position (Fig. 3 distortion suggests about 0.4
of d6) is unchanged (closed in the second review below: stop moved to 0.30 of d6 from Fig. 3).

## 2026-11-10 — Second review: diagram, labels and movement

Compared the live page at infinity and the four element inspectors with the repair-manual composition drawing (p. A-16,
600 dpi, 44.4 px/mm) and with the patent's Fig. 2 and Fig. 3.

Rims. Readings of the repair-manual drawing at that scale: L1 7.0; L2 6.2–6.3 (square top); L3 4.4 above and 5.1
below the axis (the drawing is skewed; mean 4.7); L4 outer rim 6.4 with the front cap ending at 5.2. Every rim set in the
semi-diameter pass is within the reading error or held by a check, and the drawn height order L1 > L4 > L2 > L3 is kept
(7.0 / 6.6 / 5.6 / 4.7). No rim changed. `checks.gapSagFrac` 0.96 is still the smallest value that admits L2 at 5.6: 0.95
is refused for the s2→s3 gap (0.89 mm sag against 0.881 mm allowed), with or without the L4 land.

Lands and cuts, against the rims before the semi-diameter pass on the final geometry (stop at 0.30 of d6, below), wide open
at infinity on the full-pupil lattice: the whole lens gains at every field sample (worst loss 0.0 points, gains up to 30.7
at 31.2°). L3's cut from 6.0 to 4.7, the height both drawings give, costs at most 0.9 points against the same set with L3
restored (at 8.5°; 2.5 points at 8.6° with the old midpoint stop): keep, slight. The L4 front-face land
(`rimExtensionSd` 6.6) costs nothing and both drawings draw it: keep.

Labels and brackets. Added `groups` FRONT (+) over surfaces 1–6 and REAR (−) over 7–8. The patent (col. 2) names a
convergent front lens group of the first three components ahead of the stop and a divergent rear lens group of the fourth;
the sibling Olympus XA entry uses the same FRONT/REAR form. Found correct: names L1–L4 (the patent numbers components and
uses no element designations); types against the signs of R; inspector lines (FL +19.84 / −15.5 / +17.24 / −33.55 mm,
OHARA labels); the stop between L3 and L4. No aspheres, doublets or `apd` tags; the patent names no special glass.

Movement. Infinity only, `gaps` empty, and `focus.description` says so and describes the production zone focus. Nothing
to order.

Stop position (moved on the coordinator's decision; the midpoint was a package hypothesis). The 95-page repair manual
gives no measurable blade position: p. A-2 describes the programmed sector blades that serve as shutter and stop, p. A-16
draws the lens with only the d6 dimension, p. D-12 sets d6 with a jig seated in the shutter-blade casing, and the exploded
diagrams carry no axial dimensions. The stop therefore follows Fig. 3, which was re-read at native scan resolution
(distortion 47 px per %, astigmatism and spherical aberration 94 px per unit at f = 100, field axis 930 px for 31.5°).
Printed at 31.5°: distortion +2.17 %, Δs about +1.1, Δm about −1.5. Traced against the stop's place in d6, measured from
r6 (rms over 13 astigmatism and 10 distortion points; ranges cover the field axis read as linear in angle or in image
height):

| Stop in d6 | Distortion at 31.5° | Δm at 31.5° | Δm rms | Δs rms | Distortion rms |
| --- | --- | --- | --- | --- | --- |
| 0.20 | 1.96 % | −1.45 | 0.14–0.18 | 0.13–0.18 | 0.11–0.18 |
| 0.25 | 1.99 % | −1.94 | 0.13–0.14 | 0.15–0.22 | 0.10–0.17 |
| 0.30 (final) | 2.04 % | −2.68 | 0.33–0.38 | 0.18–0.26 | 0.08–0.16 |
| 0.35 | 2.11 % | −3.74 | 0.68–0.78 | 0.21–0.30 | 0.07–0.15 |
| 0.40 | 2.21 % | −5.24 | 1.18–1.33 | 0.24–0.33 | 0.08–0.15 |
| 0.50 (before) | 2.59 % | −10.2 | 2.8–3.1 | 0.29–0.39 | 0.22–0.24 |

The distortion end value fits 0.35–0.40 and the meridional curve 0.20–0.25; the midpoint fits worst on all three curves.
Applied: d6 split at 0.30 from L3's rear vertex, between the two fits: s6 `d` 2.88575 → 1.73145 and STO `d` 2.88575 →
4.04005 mm (total 5.7715 unchanged; stop 12.525 mm behind the first surface, was 13.680). The 31.5° chief ray now lands
at 21.891 mm (+2.04 %, was 22.007 mm, +2.59 %); the frame corner (21.65 mm) is reached at 31.21° (was 31.09°).

Colour (Fig. 3, on axis, f = 100 units from the d paraxial focus, printed / traced): d marginal −0.89 / −0.87; d at the
0.707 zone −0.78 / −0.76; g paraxial +0.10 / +0.14; g at the 0.707 zone −0.46 / −0.40; g marginal −0.32 / −0.15. The d
line and the paraxial g focus agree within the reading. The traced g marginal focus sits 0.17 (0.06 mm at 35 mm) nearer
the d paraxial plane than printed. A 0.001 change in ng on any one element moves the g-line spherical aberration by only
0.04–0.05, and the tied HOYA rows (LAC10, FD110, BAFD7) differ from the OHARA rows by about 1e-4 in ng, so no relabel
explains it.

Glass and source. All four labels resolve exactly (|Δnd| ≤ 5e-6, |Δνd| ≤ 0.14); no unmatched element, no constant-index
medium; the patent prints no partial dispersion or extra line index. The assignee "Olympus Optical Co., Ltd." matches the
front page and the corpus spelling.

Text. The analysis said both drawings draw L4 tallest; the repair manual draws L1 tallest (7.0 against 6.4), and the
sentence now says so. Fig. 3's full-aperture spherical aberration is about −0.31 mm after scaling (deepest −0.34 just
inside the rim), not −0.35. The stop paragraph, the corner-light and coverage sentence and the header's stop, corner and
coverage notes now describe the stop at 0.30 of d6.

Engine before and after the stop move: EFL 35.0079 and F/3.5 unchanged (aperture check within 3 %, no rim limit); stop
radius 3.0448 → 3.3068 mm; half-field 21.78° → 25.54°; field coverage 92 % (chief ray clear to 29.1°, clipped at s3,
which needed 5.95 mm) → 100 % (corner 31.2° clear; s3 needs 4.71 mm); geometric transmission wide open 65.7 % at 20.3° →
80.6 % at 19.9°, and 41.3 % at 29.1° → 62.3 % at 28.4° and 56.3 % at the 31.2° corner. clearap at the corner flags nothing.
audit:surface OK and audit:image-circle 0 undersized. The re-shot page shows the stop between L3 and L4 nearer L3, and FRONT
(+) and REAR (−) under the element numbers without collisions.
