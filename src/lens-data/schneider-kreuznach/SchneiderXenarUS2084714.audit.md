# SCHNEIDER-KREUZNACH XENAR 200mm f/3.5 (US 2,084,714 Design) — audit log

## Original transcription notes

- No other lens in the library uses this patent.
- The title, attribution, drawing and the normalised table were checked against the patent facsimile. A
  higher-resolution crop resolves d1 = 0.0599 and Δ1 = 0.0655. A first low-resolution reading of 0.0699 / 0.0055 was
  a reading error, rejected before the model was built; it was not a correction to the source.
- With the original mid-gap stop, the validator reported no errors and no rendered rim trimmed by more than 0.25 mm.
  The iris (radius 22.55 mm) cleared L2 by 1.74 mm and L3 by 6.33 mm, and the central 90 % of the axial beam traced
  without clipping. The stop has since moved (see below).

## 2026-11-16 — Deployment validation

**What was checked.** The patent page images were re-read independently at 300 and 600 dpi: front page, drawing
(PDF p. 1), table and text (PDF p. 2) and claim (PDF p. 3). Every printed value was compared with the data file at
×200: 7 radii with their printed signs, 4 thicknesses, 2 air spaces, 4 indices and 4 Abbe numbers. There are no
mismatches. The table is the patent's only numerical example. Element shapes, the cemented L3 + L4 pair and the
four-element, three-group layout agree with the drawing; the drawing shows no stop. The bibliography was checked on
the front page: inventor Albrecht Wilhelm Tronnier; assignee "Jos. Schneider & Co., Optotechnische Gesellschaft,
Berlin"; filed October 25, 1935; German priority August 26, 1935; granted June 22, 1937.

**Verdict and product link.** Valid as a hidden patent reference: the transcription is exact and the EFL is within
0.11 % of the patent's 200 mm. The design is of the Xenar (Tessar) type. Wikipedia captions a contributor's redrawing
of this patent "Xenar (Tronnier, 1935)", but no Schneider document ties the patent to a specific product, so no
production identity is claimed.

**Changes made:**

- `maker`: "Schneider" → "Schneider-Kreuznach" (house maker; the file now sits in `schneider-kreuznach/`).
- `source.patentNumber`: "US 2,084,714" → "US 2,084,714 A" (house form).
- `source.assignees`: "Jos. Schneider & Co." → "Jos. Schneider & Co., Optotechnische Gesellschaft". This is the name as
  printed, and the form the library already uses.
- Stop position: R4 → stop 6.55 → 9.84 mm, stop → R5 6.55 → 3.26 mm (the 13.10 mm air space is unchanged). With the
  stop at mid-gap, the 31 mm rim of R4, whose sag is 9.52 mm, reached past the iris plane for heights above 26.2 mm.
  The new position comes from the patent's own statement that the principal ray at 23° in the diaphragm space leaves
  at 19°38′44.6″ on the image side. A real-ray trace meets that exit angle only with the stop 0.0492 f behind R4. The
  R4 rim now sits 0.32 mm in front of the stop plane. Rims are unchanged.
- `cemented` id "C1" → "D1" on L3 and L4, and `doublets` text "C1 doublet" → "D1" (house convention).
- `catalog.focalLengthMm.design`: 200.21812162868986 → 200.22 (rounded).
- Added a plain-English header comment naming the source, the scale and the inferred stop, rims and back focus.
- Rewrote the analysis to the standard section layout.

**First-order after changes (`built.mjs`, `probe.mjs`).** EFL 200.218 mm, f/3.5, paraxial back focal distance
163.949 mm (the image plane, unchanged), total track 229.77 mm, stop semi-diameter 22.73 mm, derived half-field 33.1°.
Element focal lengths: L1 +99.38, L2 −64.06, L3 −94.14, L4 +54.87 mm; the cemented pair +118.07 mm. The front pair is
−499.6 mm, weakly negative as the patent requires. All of the claim's conditions hold (R1 = 55.4 % of R3; d1 and Δ1
above 0.0525 f; R6 above 80 % of the aperture diameter; index step 0.0887; front-lens index excess 0.0417 against the
0.0296 minimum).

**Patent statements not reproduced exactly.** At the 23° zone, the patent puts the sagittal and meridional image points
0.393 % and 0.347 % of f in front of the Gauss plane. The model gives 0.478 % and 0.311 %, checked with Coddington
equations and finite-difference rays. No stop position in the diaphragm space, and no single plausible misprint in the
table, reproduces both values. They are recorded, not fitted.

**Audit results.** `audit:surface`: OK. `audit:aperture --raise`: no surface below the on-axis ray. The full f/3.5 axial
beam reaches 28.6, 27.7, 24.2, 22.7, 23.3, 24.0 and 24.2 mm at R1–R7, all inside the 31 mm rims. `audit:image-circle`
and `audit:field-coverage` skip the lens (no image format; hidden). `clearap.mjs` flags BLOCKS-CHIEF at R1–R2 for
fields of 18° and above, but its chief-ray solution there lands at a 139 mm image height and is a false root. An
independent trace of the true chief ray at the patent's 25° half-field crosses R1 at 23.3 mm and R2 at 20.1 mm and
reaches a 94.5 mm image height.

**Open:**

- Cleanup pass: the `name` "SCHNEIDER / TRONNIER 200mm f/3.5 PATENT REFERENCE" should use the house maker form. The
  subtitle's "NO PRODUCTION MATCH" could read "Xenar type; production identity unconfirmed". The `specs` "PATENT-ONLY
  REFERENCE" and "ESTIMATED STOP AND RIMS" need rewording: the stop now follows the patent's chief-ray statement, and
  only the rims are estimated. The `key` should be reviewed, and the per-element `indexReferenceNote` text shortened.
  (Closed 2026-11-17: the files were renamed and reworded; see below.)
- Semi-diameter pass: the drawing shows L1 at about 29.5 mm and L2, L3 and L4 at about 25.5 mm, against the common
  31 mm. Both readings pass the axial beam (tightest margin about 0.9 mm, at R1). The change was not made here.
  (Closed 2026-11-17 by the semi-diameter pass below.)
- Glass: no catalogue glass matches the printed indices at d, D or e within 0.00006. The nearest classes are SK16 for
  1.6202 / 60.0 and LLF6 for 1.5315 / 49.1; there is none for 1.5785 / 42.3. No labels were added. (Closed
  2026-11-17: explicit unmatched labels added; see below.)

## 2026-11-17 — Cleanup and wording pass

**Fields changed in the data file.**

- `subtitle`: "1935 DESIGN / 1937 GRANT — NO PRODUCTION MATCH" → "US 2,084,714 A, sole example — Tessar-type Xenar
  design". The new `name` (set before this pass) carries the Xenar family word. The evidence is a Wikipedia caption,
  "Xenar (Tronnier, 1935)", on a contributor's redrawing of this patent, together with the Tessar-type construction.
  It is stated once in the analysis.
- `specs`: "4 ELEMENTS / 3 GROUPS", "PATENT-ONLY REFERENCE", "ESTIMATED STOP AND RIMS", "INFINITY ONLY" → "4 ELEMENTS /
  3 GROUPS", "ALL SPHERICAL", "DESIGN f = 200 mm", "DESIGN F/3.5", "FIELD OVER 50°" (the patent's stated useful field).
- `focus`: `closeFocusM` 1000000000000000.0 → 1e15 (same value); `description` "Infinity-only patent reference." →
  "Infinity focus only; the patent gives no close-focus data."
- Elements: added a plain optical `role` to L1–L4. Types are unchanged, since all four agree with the printed signs.
  `indexReferenceNote` reworded to plain English with the same meaning: yellow-ray indices traced as sodium D values.
- Cemented pair: `cemented` id "D1" → "C1" on L3 and L4 and `doublets` text "D1" → "C1". This reverses the earlier
  integration change: "D1" reads as a gap label.
- Glass: added `Unmatched (nD … / V …; no glass name printed)` labels to all four elements. No exact catalogue row
  exists within |Δnd| ≤ 1e-4 and |Δνd| ≤ 0.15. The nearest rows are:
  - N-SK16 1.62041 / 60.32 for 1.6202 / 60.0 (Δnd +0.00021, Δνd +0.32);
  - Hoya FL4 1.57845 / 41.71 for 1.5785 / 42.3 (Δnd −0.00005, Δνd −0.59);
  - Ohara PBL6Y 1.53172 / 48.96 for 1.5315 / 49.1 (Δnd +0.00022, Δνd −0.14).

  The labels resolve to no catalogue glass, so tracing still uses the printed index and Abbe number.

**Analysis.** The H1 now uses the model name. The product-link evidence is restated once, at family strength, and the
"patent reference, not a factory lens" wording is gone. The duplicate scale note was removed from the metadata block
(the scale is stated once in the prose). The glass paragraph matches the new labels. The heading "Patent Conditions and
Model Verification" is now "Patent Conditions and Model Scope", and the focus paragraph is in plain words.

**Engine numbers before and after (identical).** EFL 200.218 mm, f/3.5, half-field 33.12°, stop semi-diameter
22.73 mm, paraxial back focal distance 163.949 mm, total track 229.77 mm. `audit:surface`: OK. `audit:aperture`: no
rim limit (1 station within 3 % of the stated f-number).

**Open:**

- Semi-diameter pass: the drawing shows L1 at about 29.5 mm and L2, L3 and L4 at about 25.5 mm, against the common
  31 mm (carried over). (Closed 2026-11-17 by the semi-diameter pass below.)
- `aperture.fStops` lists f/4–f/22 beyond the patent's f/3.5. No product stop scale was found to source it.
- `catalog.closeFocusM.marketing`, `lensMounts` and `imageFormat` stay unset: no product source documents this
  focal length. (`catalog.imageCircleMm` was added from the patent's field in the semi-diameter pass below; the rest
  stays open.)

## 2026-11-17 — Semi-diameter pass against the patent figure

**Source and scale.** The only drawing of US 2,084,714 A (PDF p. 1) shows the sole example. It was measured at 600 dpi;
the optical axis is at page row 3367. Line centres give these vertex positions: R1 48 px, R2 251 px, R3 461 px,
R4 551 px, R5 763 px, R6 836 px, R7 1106 px (crop x origin 1300). R1 to R7 spans 1058 px against the table's 65.82 mm,
which is 16.07 px/mm. A second span, Δ1 + d2 + Δ2, is 512 px = 31.85 mm against 31.96 mm (−0.3 %). Single spacings
agree within 6 % (d1 +5 %, Δ1 −0.3 %, d2 −3 %, Δ2 +0.7 %, d3 +6 %, d4 −4 %), so the drawing is to scale. The drawn sags
of R3 and R7 at the rim agree with the radii within about 15 %.

**Figure readings** (outline line centres; mean of the upper and lower silhouettes): L1 about 474 px = 29.5 mm, with
square ends; L2 about 410 px = 25.5 mm, square at the front, with its rear edge bevelled from about 22.7 mm; L3 and L4
about 409 px = 25.4 mm, one flat top, with L3's front edge bevelled from about 22.4 mm.

**Light cost.** The patent states a useful field of over 50°, so corner light was measured across 0–25° against the
committed rims (31 mm everywhere). Taking the drawing at face value (29.5 / 25.5 / 25.4) costs 19.8 points at 25°:
L1 accounts for 5.3 and the cemented pair for 15.2; L2's reduction costs nothing. Within the cemented pair, R5 at
25.4 costs nothing, while R6 and R7 carry the whole loss. The smallest square rim for the pair within 3 points is
29.7 mm (2.8 points at 25°; 29.6 mm costs 3.2). L1's drawing reading is within about 5 % of 31 mm, which is
measurement noise, and lowering it costs light, so L1 stays.

| Surface | Before | After | Evidence |
|---|---:|---:|---|
| 1, 2 (L1) | 31 | 31 | drawing 29.5 is within noise; lowering costs 5.3 points |
| 3, 4 (L2) | 31 | 25.5 | drawing 25.5, square; no light cost; axial beam 24.2 / 22.7 |
| 5, 6, 7 (L3 + L4) | 31 | 29.7 | drawing 25.4; light rule floor 29.7, kept square as drawn |

The drawn bevels are not modelled. L2's rear bevel starts about where the f/3.5 axial beam crosses R4 (22.7 mm). L3's
front bevel starts at about 22.4 mm, below the 23.3 mm the axial beam needs at R5. A lower R5 would draw a wedge, not
the drawing's small corner bevel, so the pair stays square.

**Metadata.** Added `catalog.imageCircleMm: 189`. The patent prints a useful field of "over 50°" (PDF p. 2), and the
real chief ray at 25° lands at 94.5 mm. With the image circle set, the vignetting analysis samples the patent's
field instead of the default full-frame 6.2°. `lensMounts`, `imageFormat`, `closeFocusM.marketing` and the f-stop
scale remain unsourced. On the product name, the best source (Wikipedia's caption) calls this design "Xenar
(Tronnier, 1935)". The current `name`, "SCHNEIDER-KREUZNACH XENAR 200mm f/3.5 (US 2,084,714 Design)", matches that at
family level; the 200 mm is the patent's own focal length, not a documented catalogue size.

**Results after the change.**
- Engine numbers are unchanged: EFL 200.218 mm, f/3.5, engine half-field 33.12°, stop semi-diameter 22.73 mm, BFD
  163.949 mm.
- The chief ray passes every rim to 33.1°, the half-field set by R1 both before and after.
- Corner light (geometric transmission, wide open) before → after: 100 → 100 % on axis, 75.4 → 74.7 % at 19.4°,
  67.6 → 65.2 % at 22.2°, 57.6 → 54.8 % at 25°. The worst loss is 2.8 points.
- `audit:surface` OK. `audit:aperture` reports no rim limit. `audit:image-circle` passes the 189 mm circle (0
  undersized). `audit:field-coverage`: the one station reaches at least 99 %.
- The real-ray trace at 25° shows no axial clip and no blocked chief ray. The tightest axial margin is 1.3 mm, at R3.
  The R4 rim sits 3.6 mm in front of the stop plane.
- Side-by-side and overlay with the drawing: scratch file `overlay.png`, not kept in the repo.

**Open:** none for rims. The f-stop scale, mount and format stay as listed above.

## 2026-11-17 — Second review on the local site

**What was compared.** The live page at infinity, the element inspector for L1–L4 and the movement overlay at the
far end of the focus slider, against the drawing (PDF p. 1, measured afresh at its native 300 dpi) and the table and
text (PDF p. 2). Every printed value was re-read against the file at ×200: 7 radii, 6 spacings, 4 indices and 4 Abbe
numbers agree exactly.

**Figure scale, measured independently.** Line-centre vertex crossings on the 300 dpi page: R1 674, R2 776.5, R3 880,
R4 927, R5 1029.5, R6 1068.5, R7 1204.5 px. R1 to R7 is 530.5 px for 65.82 mm, 8.06 px/mm, the same scale as the
600 dpi reading above. Single spacings agree within −4 % to +6 %, except the thin d3 (+12 %). Across the axis, circle
fits to the drawn outer edges give R1 ≈ 69.5 mm (+7 %) and R7 ≈ 82.0 mm (−3 %). The errors have opposite signs, so
the drawing is not stretched one way; it is hand-drawn to about ±5 %. The axis line tilts 0.7° across the figure, so
each height is half the distance between the top and bottom line centres.

**Readings (same as the semi-diameter pass).** L1 237.8 px = 29.5 mm; L2 204.5 px = 25.4 mm; L3 + L4 204.8 px =
25.4 mm, one flat top. L2 at 25.5 and L1 at 31 sit within the reading error of the drawing (L1 +5 %). The pair, at
29.7, was 17 % above the drawing and taller than L2, where the drawing has them level. That is the light rule's
doing, not a misreading.

**Lands and cuts.** No `rimExtensionSd` or `rimCutDepthMm` in the file. Cuts against the common 31 mm baseline,
measured with the app's full-pupil lattice over 0–25° (the image circle):

| Surfaces | Baseline | Drawing | Before | After | Points lost at 25° | Verdict |
|---|---:|---:|---:|---:|---:|---|
| 3, 4 (L2) | 31 | 25.4 | 25.5 | 25.5 | 0.0 | keep: costs no light |
| 5, 6, 7 (L3 + L4) | 31 | 25.4 | 29.7 | 29.66 | 2.97 | keep, smallest square raise within 3 points |

The pair's floor, read to two decimals, is 29.66 mm (2.97 points); 29.65 mm costs 3.04. At 29.7 the pair sat
0.04 mm above it, so all three faces now take 29.66 and the pair stays square. L1 is not cut. A trial L1 of 34 mm
gains up to 9.5 points over the baseline (at 16.7°), which shows the front rim does vignette; the cemented pair
cannot go much past 32 mm before L4's edge thickness turns negative. Worst loss in the final file: 2.97 points at 25°. Corner light wide open:
57.6 % baseline, 54.8 % before, 54.6 % after.

**Element focal lengths.** The inspector showed "FL = —" for every element. Added `focalLengthMm` from the paraxial
in-air values: L1 +99.38, L2 −64.06, L3 −94.14, L4 +54.87 mm. The live inspector now shows them.

**Checked and found correct.**

- Names L1–L4 are the drawing's own L1–L4. The diagram shows the default numbers 1–4 in the same order, so no
  `diagramLabel` is needed. Types agree with the printed signs (L1 and L4 biconvex, L2 and L3 biconcave). Roles are
  true. There are no aspheres and no `apd` tags; the patent names no special glass.
- The C1 bracket covers surfaces 5–7. The inspector reads "DOUBLET C1" on L3 and L4, not "TRIPLET". The stop sits
  between L2 and L3. An independent trace of a 23° ray through the stop centre leaves R7 at 19.6465° against the
  printed 19°38′44.6″ (19.6457°) and enters R1 at 18.02°.
- Movement: no variable gaps and no zoom block. The focus slider reads "Not modeled", the movement overlay reports no
  modelled focus or zoom movement, and `focus.description` says only that the patent gives no close-focus data.
- Image circle: the real chief ray at 25° lands at 94.53 mm, so 189 mm stands. The image-circle check reports none
  undersized, field coverage is 100 %, and the axial beam clears every rim (tightest 1.3 mm, at R3).
- Engine numbers before and after are identical: EFL 200.218 mm, f/3.5, half-field 33.12°, stop semi-diameter
  22.73 mm.

**Glass and colour.** The worktree catalogue was scanned at the sodium D line. The nearest rows are:

- for 1.6202 / 60.0, J-SK16, S-BSM16, N-SK16 and Hoya BACD16, all nD 1.62032 (Δn +0.00012; Δν +0.24 to +0.33);
- for 1.5785 / 42.3, Hoya FL4, nD 1.57833 (Δn −0.00017, Δν −0.60);
- for 1.5315 / 49.1, Ohara PBL6Y, nD 1.53162 (Δn +0.00012, Δν −0.15).

None is inside the exact window. The vendor AGF files (Hoya, Ohara, Sumita) offer only rows with the same values
(Sumita LF4, SK16, LLF6; Ohara BSM16, PBL6; Hoya E-FEL6), so there is no row to propose. The patent prints only the
yellow-ray index and an Abbe number per glass: no names, no other lines, no partial dispersion. The 1.6202 / 60.0
glass recurs within the example (L1 and L4), so it is probably a real 1935 melt no longer catalogued. The patent
prints no aberration curves, so there is no colour plot to compare. No element is an index-only medium, so colour
stays on.

**Assignee.** "Jos. Schneider & Co., Optotechnische Gesellschaft" is the front-page form ("assignor to the
Corporation of Jos. Schneider & Co., Optotechnische Gesellschaft, Berlin"), the same as the 28–50 mm Xenar file. The
18 files that read "Jos. Schneider & Co., Optische Werke" carry the firm's later name, not a spelling variant.

**Open:**

- The aperture slider stops at f/16 (the default `aperture.maxFNumber`), so the f/22 in `aperture.fStops` cannot be
  reached. Either drop 22 or set `maxFNumber: 22`. This adds to the unsourced f-stop scale line above.

- Provenance (2026-11-17): `source.sdSource` removed. The rims mix evidence (L2 follows the figure, L1 keeps its estimate and the cemented pair is set by the light rule), and LENS_DATA_SPEC asks that mixed
  clear-aperture evidence stay undeclared.
