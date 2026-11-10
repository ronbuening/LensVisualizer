# Version3 bounded correction audit

Date: 2026-11-10.

One data file represents the complete zoom. All printed configurations remain exact. Inferred zoom-compensation samples are unpublished; focus labels and motion descriptions distinguish zoom travel, finite rear-group translation, assumed iris motion and the derived image gap. (Corrected 2026-11-10: this lens models no finite focus and has no rear-group translation; that phrase does not apply.)

Strict focused TypeScript, source invariants, native construction, 135 control/midpoint geometry/field/conjugacy states and 30 exact pupil cases pass. Hidden trim is zero, axial transmission is 100%, and no unknown rays remain. Source-versus-paraxial residuals are retained. The bounded inference and sampling budget are documented in the analysis.

Data SHA256: 15896a443c1c8cf253e036e52280e369fcd414f6fd937451b9f7a36fce76dea9 (stale: it did not match the delivered file and the file has since been edited; closed 2026-11-10)

Status: bounded candidate ready for final frozen-six integration checks, not release-cleared. Full MTF, viewer and final corpus checks are not claimed. No source retuning, engine change, commit, PR, upload or deployment was performed. Prior versions and diagnostic failures remain preserved. (Closed 2026-11-10: integrated after deployment validation and made visible.)

## Deployment validation (2026-11-10)

Independent check against the J-PlatPat scan (p. 5, table is an image): 29 radii, 28 thicknesses, 16 nd/νd pairs, the stop,
4 cemented joins, 2 aspheres (ε = 1 → K = 0, A4–A10) and 4 variable gaps at W/M/T; no mismatches. EFL 17.42 / 24.38 /
34.13, FNO 3.58, f3 and f4 and conditions (1)–(3) reproduce; distortion −3.9 / −2.0 / 0.0 % at the printed half-fields
matches Fig. 2. Minolta's 15/12 construction with aspheres and AD glass, ¶0037 ("17–35 mm, F3.5 class") and the companion
JP H10-82955 A (same Example 1, front sub-group focusing to 0.3 m) make the association strong.

Applied: patent number to house form `JP H10-082954 A`; PDF filed as `JPH10082954A.pdf`.

Open: hidden as delivered — fit to show after the wording pass (name "(E1, source-complete zoom)", subtitle, specs,
`focus.description`, element roles, header "Version3") (closed: made visible; wording pass below); S3A/S4 sd 17.4 clips
the wide corner chief ray (17.8 gives 23/23 stations at 100 % and passes `audit:surface`) (closed: raised to 19.5 in
the semi-diameter pass below); optional
close-focus state from JP H10-82955 A (d9 0.500 → 3.481 at 0.3 m) (still open); this log's SHA line does not match
the delivered file and it mentions a rear-group translation the lens does not have (closed: both marked in place).

## 2026-11-10 — Cleanup and wording pass

Data file. Header rewritten as plain facts (patent, example and scale; what is printed and what is inferred; the stop
link to Gr3; inferred rims; infinity focus); "Version3", control counts and run-together words removed. `subtitle`
"JP H10-82954 A Example 1; probable AF17–35 G family; all three published zoom positions" → "JP H10-082954 A,
Example 1 — strong production correlation". `specs` (family, zoom-control and focus-model lines) → 15 ELEMENTS / 12
GROUPS, DESIGN f = 17.4–34.1 mm, DESIGN F/3.58, 2 ASPHERICAL SURFACES / 2 ELEMENTS, 2 AD GLASS ELEMENTS.
`catalog.focalLengthMm.design` [17.4, 34.1] (printed f) → [17.42, 34.13], the traced EFL rounded to 0.01 mm, as the
other Minolta AF zooms in this folder record their traced EFL. `focus.closeFocusM` 1 → 1e15 (infinity-only
placeholder; `catalog.closeFocusM.marketing` 0.3 kept) and `focus.description` replaced by a plain infinity-only
statement that names the 0.3 m production focus and the companion publication's front-sub-group focusing. Element
roles rewritten; J1 label "Auxiliary optical layer J1 (count interpretation)" → "Element 2 aspheric layer", type
"Bonded Optical Layer (Asph)" → "Bonded Aspheric Resin Layer" (resin inferred from index and thickness; the role says
so). Cemented ids "J1 + L2 bonded component" / D1–D3 → H1 / C1–C3 in both `cemented` and `doublets`. Gap labels
"D13 (zoom spacing)" etc. → D13, D14, D20, D23, BF. The 20 inferred zoom stations lost their "Inferred zoom N" labels;
"Middle" was also dropped because the ingest accepts labels on every station or on the first and last only, so the
labels are now Wide and Tele (the middle station stays `published: true`).

Glass. Exact rows (|Δnd| ≤ 1e-4, |Δνd| ≤ 0.15 against the printed values), checked with `trylabel.mjs`: L5 → K-LaK9
(SUMITA), Δnd 0, Δνd +0.05; L7 → K-LaSFn16 (SUMITA), Δnd −0.00001, Δνd +0.10; L8 → E-CF6 (HOYA), Δnd 0, Δνd 0; L9 →
BACD14 (HOYA), Δnd 0, Δνd −0.04 (S-BSM14 also fits at −0.10; the closer row was taken); L10 → S-TIH6 (OHARA),
Δnd +0.000001, Δνd −0.005. L5 also fits S-LAL9 (Δνd +0.07) and N-LAK9 (−0.04); the closest row was taken. The other
ten materials have no exact row and keep "Unmatched (nd …, νd …)" labels (J1 as "Unmatched (aspheric layer, …)").
`apd: "inferred"` on L13 and L15 (nd 1.49310 / νd 83.58), the only low-dispersion material in the example: Konica
Minolta literature quoted by Imaging Resource lists AD glass for this lens. No catalog row matches, so they trace with
normal dispersion.

Analysis. Process sections removed ("Compact Inferred Movement Table (Version3)", "Sampling tradeoff and validation
scope", "Completed Bounded Checks", the engine-revision and patch line, the 28-135 boilerplate, finite-state claims);
"Verification Scope and Inferences" → "Model Scope and Limitations"; identification rewritten on public sources
(¶0037's 17–35 mm F3.5 class, Lenstip / mhohner specifications, the Imaging Resource AD-glass quote, the 104° field
from the −3.9 % distortion, JP H10-082955 A) in place of the private catalogue and book strip; the statement that
JP H10-82955 A is an alternative design corrected (it reprints Example 1 and adds the focusing); Conditional
Expressions and a glass table added; missing spaces fixed throughout.

Engine numbers, before and after (`built.mjs`, `probe.mjs`): EFL 17.420208, FOPEN 3.58 at all 23 stations, halfField
44.434374, stop radius 6.409032 (8.8953 at tele), BFD 36.6478 / 42.6679 / 50.5486 at the printed stations; identical,
with only the reported `closeFocusM` changed (1 → 1e15). `audit:surface` OK; `audit:aperture` no rim limit (23 stations
within 3 % of F/3.58).

Open: S3A/S4 rim 17.4 mm clips the wide-end chief ray at 20.86 mm image height (97 % of 21.6 mm); 17.8 mm clears all
23 stations and stays inside Fig. 1, which draws J1/L2 at about 0.78 of L1 (closed: 19.5 in the semi-diameter pass
below). Close-focus state from JP H10-082955 A: d9 0.500 → 3.481 mm at D = 0.3 m (traced 300.0 / 290 / 287 mm
object-to-image at W / M / T), not modeled.

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: `patents/JPH10082954A.pdf`, p. 7, Fig. 1 (Example 1 at the wide end), a 200 ppi CCITT raster measured at 600 dpi
with `figprofile.mjs` and zoomed crops. Scale from vertex crossings at the wide state: r1 → r13 (30.825 mm) spans
437 px, 14.18 px/mm; r15 → r29 (34.272 mm) spans 483 px, 14.09 px/mm; 14.15 px/mm used. The drawing's d13 + d14 is
drawn about 1.2 mm long, and the drawn axis line sits about 5 px above the centre of the rims, so each rim is the mean
of its top and bottom readings.

| Surface | Before | Figure | After | Evidence |
| --- | --- | --- | --- | --- |
| 1 | 26.3 | 26.6 | 26.3 | Within noise; kept. |
| 2 | 26.3 | 22.3 | 22.3 | Fig. 1 ends the deep r2 face at 21.9 (top) / 22.7 (bottom) and chamfers out to L1's 26.6 outer rim; the old 26.3 rim swept r2 back past L2's front face. No light cost at any station. |
| 3A, 4 | 17.4 | 20.8 | 19.5 | Figure 20.5 / 21.1 for L2's front face. The bonded layer (r3 asphere over r4) is 0.16 mm thick at 19.5 and reaches zero near 20.0, so 19.5 is the largest physical value; the old 17.4 clipped the wide-corner chief ray (17.73 needed). |
| 5 | 17.0 | 16.8–17.0 | 17.0 | Agrees; Fig. 1 ends r5 where it meets L3's corner. |
| 6, 7 | 15.5 | 16.9 | 15.5 | 8 % under; kept: 16.9 is refused by the cross-gap limit (combined sag 12.53 mm against 9.945 mm allowed across d5 = 11.05), r5 and r6 cross near 16.15 mm, and no ray needs more (bundle 13.1 mm). Fig. 1 draws L3 larger than L4; the model keeps L3 smaller. |
| 8, 9 | 16.8 | 16.15 | 16.8 | +4 %, noise; kept. |
| 10, 11 | 14.7 | 14.2 | 14.7 | +3.5 %, noise; kept. |
| 12, 13 | 12.8 | 13.35 | 12.8 | −4 %, noise; kept. |
| 15–17 | 10.1 | 10.25 | 10.1 | Agrees. |
| 18–20 | 10.1 | 10.14 | 10.1 | Agrees. |
| 21–23 | 8.5 | 8.69 | 8.5 | Agrees. |
| 24, 25 | 10.7 | 10.7 | 10.7 | Agrees. |
| 26, 27A | 11.0 | 11.6 | 11.0 | 5 % under, noise; kept. |
| 28, 29 | 11.9 | 12.4 | 11.9 | 4 % under, noise; kept. |

`lsa.mjs` shows no sign of a misprint (full-pupil LSA −0.016 / −0.151 / −0.189 mm at W / M / T). The r3 asphere has no
turnover to 21 mm (`audit:surface --scan`). With the new rims, `audit:surface` is OK, `audit:aperture` reports no rim
limit, `audit:image-circle` none undersized, and `audit:field-coverage` gives 23 of 23 stations at 100 % of the
21.6 mm corner (before: 22, with the wide end at 97 %). Real-ray clearance at the patent's half-fields shows no axial
clip or blocked chief ray at any station. Engine half-field at the wide end 44.43° → 46.37° (stations 1 and 2:
44.87° → 46.19°, 45.30° → 45.65°; the rest unchanged); f-number 3.58 at every station, unchanged; paraxial EFL, BFD and
track identical.

Corner illumination (app vignetting curve, wide open, at each station's field end): wide 15.7 % at 51.3° → 47.6 % at
52.2°; 18.07 mm 22.2 % → 57.4 % at 51.1°; 18.74 mm 37.4 % → 64.6 % at 50.1°; middle 72.9 % and tele 74.3 %
unchanged. `rimcost.mjs --loo --every 1` against the cleanup baseline finds no loss above 0.2 points at any field of
any of the 23 stations; the S2 reduction costs nothing.

Open: L3's step order against L4 (above) (closed: L3 16.0 and L4 15.4 in the second review below). The J1/L2 front
stays 1.3 mm inside Fig. 1's drawn outer rim because of the bonded layer.

## 2026-11-10 — Second review: diagram, labels and movement

Compared the live page (wide, middle, tele, both movement overlays, the J1, L2, L13 and L14 inspectors) with
`patents/JPH10082954A.pdf` p. 7 Fig. 1 rendered at 600 dpi from its 200 ppi raster (one raster pixel is about 0.21 mm
of model). Scale: r1 → r13 spans 440 px (14.27 px/mm), within 1 % of the 14.15 px/mm used before; the raster is placed
at 200 × 203 ppi, so heights may read up to 1.5 % low, which does not change the step order below. Heights are the mean
of top and bottom readings from the axis row (y 2981).

| Surfaces | Before | Figure | After | Evidence and verdict |
| --- | --- | --- | --- | --- |
| 6, 7 (L3) | 15.5 | 16.9 | 16.0 | Fig. 1 draws L3 as a square block 0.7 mm taller than L4 (top 236 / bottom 241.7 px against 227 / 232 px); its 6.5–6.8 mm drawn top edge gives 16.6–17.0 from the prescription's edge thickness. r5 and r6 cross at 16.18; 16.0 leaves 0.33 mm between them, which the cross-gap check admits at `checks.gapSagFrac` 0.97 (combined sag 10.717 mm of 11.05; the default 0.90 stops at 15.5, 16.1 would need 0.99). Figure-driven raise, no light change. |
| 8, 9 (L4) | 16.8 | 16.2 | 15.4 | Lowered to keep the drawn L3 > L4 step (model step 0.6 mm, figure 0.7 mm); 5 % under the figure, inside the reading error. The drawn edge (about 0.7–0.9 mm) gives 15.9–16.3. A cut below the 16.8 baseline that costs 0.0 points at every station: kept. |
| 2 (L1 rear) | 22.3 | 22.0 / 22.5 | 22.3 | Re-read; agrees. Cut below the 26.3 baseline, costs 0.0 points: kept. |

`checks.gapSagFrac` 0.97 is new. Final `rimcost.mjs` worst loss against the base rims is 0.2 points at 42.7° wide, with
both `--every 1` and the `--ts` eighths, from the S3A/S4 raise; restoring L3 or L4 to the baseline wins back 0.0. The
engine curve is identical at zoom fractions 0, 0.5 and 1 (wide corner 47.6 % at 52.2°). `audit:surface` OK,
`audit:aperture` no rim limit at 23 stations, `audit:image-circle` none undersized, `audit:field-coverage` 23 of 23
stations at 100 %; real-ray clearance shows no axial clip or blocked chief ray. Engine half-field 46.37°, f-number
3.58, stop radius 6.409 mm and EFL 17.420 mm unchanged.

Labels. Group brackets "Gr1 (−)" … "Gr4 (+)" → "Gr1" … "Gr4", the patent's own notation: the suffixed labels ran
into each other (Gr2/Gr3 at wide, Gr3/Gr4 at tele). J1 gains `focalLengthMm` −183.59 (its inspector showed FL = —).
Checked and correct: every element type against the signs of R; `3A` and `27A` are the patent's r3* and r27* and the
only aspheres; H1 and C1–C3 cover the four cemented joins; the stop sits at r14 between L6 and L7; group ranges match
Fig. 1's brackets; `apd: "inferred"` only on L13/L15.

Movement. Fig. 1 draws m1 curving toward the image and mS, m2, m3, m4 straight toward the object, with mS and m3 joined
by a "link" bracket. Wide → tele with the image fixed, the model moves Gr1 13.51 mm toward the image (printed rows:
−10.16 mm to the middle, −3.35 mm to tele), Gr2 and Gr4 13.90 mm toward the object, and Gr3 with the stop 7.42 mm
toward the object; stations ascend 17.4 → 34.1 mm and every gap lists them in that order; labels are on the first and
last stations only. Between the printed rows the inferred cam takes Gr1 to its image-most point near 32–33 mm and back
0.10 mm by 34.1 mm; the printed rows alone are monotonic, and Fig. 1's m1 ends near vertical.

Glass and colour. The five catalog labels are exact (largest |Δνd| 0.10, K-LaSFn16). No repo row or vendor AGF row lies
inside the exact window for any unmatched pair; the closest misses are H-LaK12 (CDGM) 1.69680/56.18 for L3 (Δνd
−0.29), S-LAH53 / J-LASF03 1.80610/40.93–40.98 for L12 (Δnd +0.0011) and Q-LASFH58S 1.85108/40.12 for L1 (Δnd +0.0011). The patent
prints N and ν only (p. 5–6). 1.85000/40.04, 1.75450/51.57, 1.69680/56.47, 1.80741/31.59 and 1.49310/83.58 recur
unchanged in Example 2 (p. 6); the layer (1.52490/49.06), L11 (1.83350/21.00), L12 (1.80500/40.97) and L14
(1.65151/33.60) appear in Example 1 only. Fig. 2 prints the d line and the sine condition only, so no colour comparison
is possible. No nd-only medium. Assignee "Minolta Co., Ltd." matches the 1996 applicant and the corpus form.

Open: Gr1's 0.10 mm return near tele comes from the inferred stations; a gap-value question, not changed here.
