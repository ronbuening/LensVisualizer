# Audit Log - CANON POWERSHOT G1 X MARK II 12.5-62.5mm f/2.0-3.9

Patent: US 2015/0219882 A1, Numerical Example 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20150219882A1.pdf`. The patent supplies the worked prescription and a corresponding positive-lead six-group cross-section, but no clear-aperture or semi-diameter table.
- The figure shows the front B1 cemented group as the largest section, a smaller B2 variator, compact B3/B4/B5 groups through the stop and focus region, and a larger final positive B6 relay.
- Stored SDs already match that hierarchy: B1 starts at 20.0 mm, B2 stays near 9-10 mm, the central groups sit mostly near 7-9.6 mm, and B6 re-expands to 13.2 mm.
- No SD values changed. Current values remain inferred from multi-state marginal/chief-ray clearance and constrained by renderer safety, edge thickness, sd/|R|, and cross-gap sag checks.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold with Numerical Example 2's physical rear stack (PDF p. 30 surface table, p. 31
  variable gaps): d28 = 3.41 / 8.24 / 9.52 mm, then `rearPlates` block 1.55 mm, nd 1.51633, νd 64.1, and d30 = 3.31 mm.
  The patent prints no designation for the block. Glass is OHARA S-BSL7 (1.51633 / 64.14), matching the file's OHARA
  element labels.
- Paraxial check against the previous data: EFL identical and defocus unchanged (worst |Δ| 7e-8 mm) at all three zoom
  stations and both focus keyframes, since the old 7.742205 / 12.572205 / 13.852205 mm values were the exact fold.
  Physical track grows by 1.55 × (1 − 1/1.51633) = 0.528 mm. `closeFocusM` (0.05 m) is Canon's published value and is
  unchanged.

## 2026-09-25 — MTF image-plane census

Source `patents/US20150219882A1.pdf`, Numerical Example 2, visually inspected PDF pp. 30–31 (printed 8–9), plus BF definition ¶0085 on p. 29. Compared every radius, thickness, 14 lens nd/νd pairs and six aspheric K/A4/A6/A8 sets (S11,12,17,18,25,26); all agree. No scaling. Infinity wide/middle/tele spacing rows also agree: d3=0.97/7.14/19.32, d9=22.11/10.54/0.35, d16=3.27/3.19/2.76, d22=1.60/3.74/10.36, d26=4.49/4.80/12.85 and d28=3.41/8.24/9.52 mm.

The dummy S10 is air-to-air with d10=−0.10; combining it with d9 correctly gives 22.01/10.44/0.25. The zero-gap equal-radius S20/S21 contact is also faithfully represented. S29–30 sensor glass is already rearPlates: t=1.55, nd=1.51633, νd=64.1, gap after=3.31 mm. Its wide reduced rear path is 3.41+1.55/1.51633+3.31=7.742204929 mm. Printed BF=7.75 differs slightly even from that sum.

Independent trace gives wide EFL 12.571053012 versus 12.84 and air BFL 7.962884078 versus BF=7.75. Paragraph 0085 explicitly defines BF as distance to the paraxial image plane converted to air; there is no support for reinterpreting it as designer best focus. No single transcription/source emendation is supported by the table.

**Cause/action:** source contradiction; retain prescription, plate and image gaps. Runtime offset **+0.220679 → +0.220679 mm**; Section E row deleted. No numerical change/changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.05 → 0.129 m, with per-station `closeFocusM` 0.129 / 0.281 / 0.499 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 897.2 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: close rows are paraxial fits that focus at 0.129 / 0.281 / 0.499 m object to image; Canon publishes 0.05 m wide / 0.40 m tele.
- `catalog.closeFocusM.marketing` 0.05 / 0.4 m (wide / tele) keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

Text sync: header and analysis: the fitted close rows focus at 0.129 / 0.281 / 0.499 m; Canon's 5 cm / 40 cm figures are marketed metadata.

## 2026-11-03 — Image-plane consistency (erratum)

Corrected source erratum at S15 (`source.errata` `corrected`, evidence source-summary + sibling-example), then the
reconstructed close rows re-solved by B5 at their existing 50 / 200 / 400 mm first-surface targets. No back-focus
re-solve was needed: every infinity row is within one depth after the erratum.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| S15 d (B3 rear → stop) | 2.30 mm (printed) | 4.50 mm | Corrected erratum; see evidence below |
| d22 close W / M / T | 4.531551 / 5.738717 / 16.1186 | 4.392898 / 5.738455 / 15.540648 | B5 re-solved for 50 / 200 / 400 mm |
| d26A close W / M / T | 1.558449 / 2.801283 / 7.0914 | 1.697102 / 2.801545 / 7.669352 | Same; d22 + d26A sums unchanged |
| per-station `closeFocusM` | 0.129 / 0.281 / 0.499 m | 0.1315 / 0.2833 / 0.5008 m | Close rows' object-to-image distances |
| `focus.closeFocusM` | 0.129 m | 0.1315 m | Wide close row; marketing [0.05, 0.4] unchanged |

- Infinity residual W / M / T: +0.220679 / +0.016567 / +0.385724 mm (46.9 / 1.2 / 21.6 depths) before; +0.004497 /
  +0.007865 / +0.011750 mm (0.96 / 0.55 / 0.66 depths) after. EFL 12.571 / 22.807 / 62.196 → 12.841 / 22.905 / 60.724 mm
  (printed 12.84 / 22.90 / 60.72). Physical track 79.31 / 81.11 / 98.62 → 81.51 / 83.31 / 100.82 mm (printed total lens
  length 81.50 / 83.31 / 100.81). B5 close travel W / M / T 2.931551 / 1.998717 / 5.7586 → 2.792898 / 1.998455 /
  5.180648 mm.
- Evidence, `patents/US20150219882A1.pdf`: Example 2 table PDF p. 30 right column, variable data and group table p. 31
  left column. The six group focal lengths match the printed group table within 0.04%, so the missing quantity lies in
  an inter-group air space; only the B3–B4 space (d15 + d16) reconciles focal length, BF and total length at all three
  stations together. Example 3 (p. 31) has the same deficit (EFL 12.569 / 22.807 / 62.220 mm, offsets +0.229 / +0.011 /
  +0.387 mm) and the same +2.20 mm fix (12.839 / 22.900 / 60.728 mm; track 81.47 / 83.29 / 100.62 against printed
  81.50 / 83.32 / 100.65). FIG. 3 (p. 4, sheet 3) scaled on the corrected track places B3's front vertex, SP and B4
  within about 0.3 mm of the corrected positions and SP about 4.5 mm behind B3's rear vertex, so the air belongs before
  the stop (d15), not after it (d16). With 2.30 mm the S15 rim at sd 8.2 crossed the stop plane by 1.24 mm; with
  4.50 mm it clears by 0.96 mm.
- Stop and pupils (derived, nothing authored changed): stop sd W / M / T 6.1113 / 4.3584 / 5.8029 → 6.0682 / 4.3574 /
  5.7805 mm; entrance-pupil sd 3.1428 / 3.2581 / 7.9738 → 3.2102 / 3.2722 / 7.7852 mm; entrance pupil 1.60 / 0.96 /
  1.87 mm further from the stop; exit-pupil position unchanged; vignetting-limited half-field 33.30 / 28.87 / 11.07 →
  32.27 / 27.89 / 11.27°.
- Audits: aperture, image-circle and surface-probe unchanged. Field coverage: Wide 68% → 67% (pre-existing S4 clip);
  middle 100% → 98%, its 11.68 mm corner chief now clipping S2 / S3 at 16.58 / 16.48 mm against sd 16.1; tele 100%.
  All variable gaps keep positive clearance at every row (minimum d26A close 1.697 mm at W).

Follow-ups: the middle-station corner clip at the B1 rims (S2/S3 sd 16.1) needs a patent-figure rim review before any
widening; no rim was changed here.
