# MINOLTA AF 28-135mm f/4-4.5 — audit log

## As delivered (2026-11-10)

One data file represents the complete zoom. All printed configurations remain exact. Inferred zoom-compensation samples are unpublished; focus labels and motion descriptions distinguish zoom travel, finite rear-group translation, assumed iris motion and the derived image gap.

Strict focused TypeScript, source invariants, native construction, 1323 control/midpoint geometry/field/conjugacy states and 300 exact pupil cases pass. Hidden trim is zero, axial transmission is 100%, and no unknown rays remain. Source-versus-paraxial residuals are retained. The bounded inference and sampling budget are documented in the analysis.

Status: bounded candidate ready for final frozen-six integration checks, not release-cleared. Full MTF, viewer and final corpus checks are not claimed. No source retuning, engine change, commit, PR, upload or deployment was performed. Prior versions and diagnostic failures remain preserved. (Closed 2026-11-10: validated for deployment and made visible; see the sections below.)

## Deployment validation (2026-11-10)

Independent check against the 300 dpi image of PDF p. 22: 29 R, 28 d, 16 nd/νd pairs, 3 cemented interfaces, 4 variable gaps
at 3 states, Σd and all 39 Table 11 focus shifts; no mismatches. EFL 28.80 / 60.00 / 131.50, FNo 3.6 / 4.2 / 4.63, Table 10
group values and Σd reproduce; the printed focus shifts reach the stated image distances within 0.9 % (0.05 % at 1.5 m).
Minolta's 16/13 construction, internal focusing and 1.5 m close focus fit Embodiment 5 (Embodiment 6 is 17/13); association
strong.

Applied: PDF filed as `US4844600A.pdf`. No data change.

Open: hidden as delivered — fit to show after the wording pass (closed: visible); the 22 inferred zoom stations move the
fixed group FII by up to 1.47 mm (patent: FII stationary) — re-solve them with S21-to-image fixed at 80.549 mm (closed:
re-solved in the cleanup pass); at wide 1.5 m the corner chief ray just touches S23/S25 (≈8.6 / 14.1 would clear, still
inside Fig. 12; closed: raised to 8.6 / 14.1 in the semi-diameter pass, which measured Fig. 12 at 8.1 / 13.5); all 16 glasses are standard catalogue pairs labelled `Unmatched` (closed: 15 relabelled);
stop at mid-d13 moves Δx/2 during focus (closed: moved 1.0 mm in front of L8, travelling with F, in the second
review).

## 2026-11-10 — Cleanup and wording pass

Optics change (the one permitted): the 22 inferred zoom stations were re-solved so that sub-group F II keeps its
printed distance from the image, as the patent states for Embodiment 5 (col. 26). At each inferred station d5, d13 and
d20 keep their interpolated values. d23 and the infinity back focus are then solved so that S21-to-image equals the
value interpolated between the printed states (80.5484 / 80.5502 / 80.5494 mm) and the paraxial image lies on the
image plane. d23 at the inferred stations rose by up to 1.47 mm (for example 11.637 → 13.109 mm near 42 mm). The
back focus changed by at most 0.009 mm and the station focal lengths by at most 0.09 mm (119.50 → 119.59 mm). The
`focalLengthMm` labels of the inferred stations were updated to the new EFLs. Finite-focus shifts at the inferred
stations were re-solved paraxially for the same 13 distances, keeping each station's printed-minus-paraxial residual
(≤ 0.0008 mm). S21-to-image now lies between 80.548 and 80.550 mm at all 25 stations, against 79.08–80.72 mm before.
The A II track, which wobbled before, is now monotonic. The three printed stations and all 39 printed focus rows are unchanged. The
largest slider defocus is 0.0143 mm before and 0.0144 mm after, both at the 119.6–127.5 mm interval at 15 m. That is
measured at the stations and at the quarter points between them, for every focus keyframe at its printed distance.

Engine numbers before / after are identical at the printed stations. Wide: EFL 28.801058, FOPEN 3.6, halfField
32.269948°, stop radius 6.455644, total track 181.511443. Probe rows for stations 0, 14 and 24 (EFL 28.8011 / 60.0031
/ 131.5038, BFD 48.2704 / 54.7152 / 62.0054, all 14 focus keyframes) are byte-identical. The inferred-station values
change as intended (stop radius at most 0.008 mm). audit:surface OK. audit:aperture: 25 of 25 stations within 3 % of
the stated f-number, no rim limit. Field coverage is 100 % at all 25 stations, and clearap at Y′ 21.63 mm reports no
axial clip or chief-ray block.

Text: the header comment was rewritten (patent, printed vs derived values, inferred-station rule, focus law, stop and
rim choices); the subtitle and specs were replaced; the focus description was reworded (PUBLISHED rear/internal focus,
Table 11 shifts at 1.5 m, iris assumption). The 39 conjugate `source` strings were reworded to cite cols. 6, 22 and 24
in plain words. All 16 element roles were rewritten without package vocabulary. The 22 "Inferred zoom n" station
labels were removed, and so was "Middle": ingest accepts labels on every station or on the first and last alone, so
only Wide and Tele remain. The printed middle state stays marked `published`. Doublet ids D1–D3 became C1–C3, with
the elements' `cemented` tags to match. The gap labels are now D5 (A I – A II), D13 (A II – stop), D13 (stop – F I),
D20 (F I – F II), D23 (F II – F III) and BF. `catalog.focalLengthMm.design` stays [28.8, 131.5], the patent's stated
f, as in the neighbouring Minolta zooms.

Glass relabels: catalogue rows within |Δnd| ≤ 1e-4 and |Δνd| ≤ 0.15. The era-appropriate Ohara/Hoya rows were
preferred where rows tie; the patent has no g-line data to decide between vendors.

- L1, L9: PBH53 (Ohara), Δnd −2e-6, Δνd +0.01.
- L2, L8, L15: S-LAL9 (Ohara), +2e-6 / +0.07.
- L4, L5, L7, L13: TAF1 (Hoya), 0 / −0.14 (catalogue νd 49.63).
- L6, L12, L16: PBH6 (Ohara), −3e-6 / +0.01.
- L10, L11: S-BAL35 (Ohara), 0 / +0.03.
- L14: BSC7 (Hoya), −2e-6 / +0.08.
- L3 (1.67000 / 57.07) stays `Unmatched`. The nearest row, S-LAL52 at νd 57.33, is 0.26 away.

No `apd` tags: Minolta lists no special-dispersion elements, and none of the glasses is one.

Analysis: rewritten in the house skeleton. The removed material covers version and qualification language, package
check counts, sampling-budget and pupil-screen paragraphs, the isolated focal lengths at six decimals, and the claims
about a service manual and a JP H05-29885 B2 correspondence that could not be checked here. The identification now
rests on the patent and on public specifications (mhohner.de, allphotolenses.com, Wikipedia's A-mount list). The
"Verification Scope" material became "Model Scope and Limitations". The SHA line was deleted.

Open: S21–S23 (8.2) and S24–S25 (13.7) rims. At wide 1.5 m the corner chief ray to Y′ 21.63 mm needs about 8.3–8.6
and 14.0, inside the Fig. 12 reading of about 8.5 and 14.0. (Closed in the semi-diameter pass. The 300 dpi reading of
Fig. 12 is 8.1 and 13.5, so 8.6 / 14.1 sit 4–6 % above the drawing, set by the ray.) The stop is placed at mid-d13 and moves Δx/2 during
focusing; its position is not printed (closed in the second review: 1.0 mm in front of L8, moving with F). The package author's note on front and rear profile differences against a
Minolta service drawing was not checked (no maker drawing was staged). The allphotolenses diagram is the public
comparison to make.

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: `US4844600A.pdf`, PDF page 7 (sheet 6 of 9), Fig. 12, the Embodiment 5 section at the wide end and infinity.
The page is a 300 dpi CCITT scan, measured at native resolution. Readings come from the lower half, which carries no
brackets or labels. The optical axis is at page row 2108.

The vertex crossings near the axis give x = 775 for S1 and x = 1718 for S29. That is 943 px for the 99.240 mm printed
Σd at wide, or 9.50 px/mm. Two checks: S1–S14 gives 9.46 px/mm and S14–S29 gives 9.55 px/mm. Heights use 9.50 px/mm;
the L1 edge (311.5 px against 32.7 mm) implies 9.53.

| Surface | Before | Figure | After | Evidence |
| --- | --- | --- | --- | --- |
| S1 / S2 / S3 | 32.7 / 30.4 / 30.3 | 32.9 / ≈30.5 / 30.6 | kept | within 1 % |
| S4–S5 (L3) | 26.9 | 26.7 | kept | within 1 % |
| S6 (L4) | 17.5 | 17.5 | kept | — |
| S7 (L4 rear) | 12.5 | ≈13.0 | kept | drawn meeting L5; d7 closes at 13.05 mm |
| S8 (L5 front) | 12.5 | 13.2 | kept | +5 % noise; a raise would stand proud of L4's rim |
| S9 (L5 rear) | 13.2 | 11.9 | 11.9 | the concave face ends at a chamfer, 112–115 px; fixes the reversed step |
| S10 / S11 (L6) | 11.1 / 10.8 | 10.8 | kept | 3 % |
| S12–S13 (L7) | 10.7 | 10.45 | kept | 2 % |
| S14–S15 (L8) | 10.1 | 10.05 | kept | — |
| S16–S18 (C2) | 10.35 | 10.1 | kept | axial floor 10.27–10.30 at tele 1.5 m |
| S19–S20 (L11) | 10.5 | 10.1 | kept | axial floor 10.41 / 10.34 at tele 1.5 m |
| S21–S23 (C3) | 8.2 | 8.1 | 8.6 | corner chief floor 8.59 at wide 1.5 m; square doublet, one height |
| S24–S25 (L14) | 13.7 | 13.5 | 14.1 | corner chief floor 14.02 at wide 1.5 m; square edge, one height |
| S26–S29 (L15, L16) | 15.3 | 15.0–15.05 | kept | 2 % |

Clearance at the printed stations (28.8, 60.0 and 131.5 mm) and all 13 printed focus rows was traced from the finite
object. The axial ray reaches the engine stop rim everywhere. The smallest margins are 0.05 mm at S18 and 0.08 mm at
S15 / S16, all at tele 1.5 m. The corner chief ray to Y′ 21.63 mm was blocked from 5 m inward at the wide end: S23
needed 8.26 mm at 5 m and 8.59 mm at 1.5 m, and S25 needed 13.72 and 14.02 mm. clearap now flags nothing at any focus
row and any of the 25 stations.

Corner light: the engine vignetting at infinity, wide open, is unchanged at every station. The values are 39.3 % at
37.6° (28.8 mm), 52.0 % at 19.5° (60 mm) and 47.1 % at 9.2° (131.5 mm). The S9 reduction costs 0.0 points at every
field of every station; the raises add nothing at infinity. At the wide-end corner the meridional-fan transmission
rises from 39.3 to 42.3 % at 1.5 m and from 47.3 to 49.8 % at 5 m. The close-focus corner stays heavily vignetted, as
real vignetting.

Engine: wide half-field 32.27° before, 33.13° after; the engine's slope-launch estimate is limited by S25 (L14 rear)
in both states. FOPEN 3.6
and all stop radii are unchanged. audit:surface reports no errors, with `gapSagFrac` unchanged. audit:image-circle
reports 0 undersized. Field coverage is 100 % at all 25 stations, and audit:aperture keeps 25 of 25 stations within
3 % with no rim limit. Overlay of the model on Fig. 12 at matched scale: the session scratch `sd/af28135/overlay.png`.

No maker drawing was viewed. The deployment-validation section above records Minolta's 16/13 construction and
internal focusing. The design is all-spherical, and no special-dispersion element is listed for it.

Open: the stop position (mid-d13) is not printed (closed in the second review: 1.0 mm in front of L8). Fig. 12 draws L4's rear rim meeting L5's front edge at about
13.0 mm; the model keeps both at 12.5 mm, a 0.7 mm air gap at the rim, because d7 closes at 13.05 mm.

## 2026-11-10 — Second review: diagram, labels and movement

Compared: the live page at 28.8, 60 and 131.5 mm, at infinity and at 1.5 m, both movement overlays (focus also at
131.5 mm), the inspector text of L1, L3, L13 and L14, and Fig. 12 at its native 300 dpi (PDF p. 7). One data
change: the iris moved to 1.0 mm in front of L8 (see Iris below). Rims, labels and every total gap are unchanged.

Figure re-read. The scan is rotated by about 0.46°: the axis line runs from page row 2112 at x 780 to row 2104 at
x 1775. Readings were taken on both halves about that local axis, and their mean is half the drawn diameter, which
removes the tilt. The 25 vertex crossings fall within 2–4 px of the prescription at 9.50 px/mm.

| Faces | Model sd | Top | Bottom | Mean | Verdict |
| --- | --- | --- | --- | --- | --- |
| S1–S3 (C1) | 32.7 / 30.4 / 30.3 | 33.0 | 32.5 | 32.75 | agrees |
| S4–S5 (L3) | 26.9 | 27.9 | 26.4 | 27.15 | agrees |
| S6 (L4) | 17.5 | 17.7 | 17.3 | 17.5 | agrees |
| S7 / S8 (L4 rear, L5 edge) | 12.5 / 12.5 | 13.5 | 13.2 | 13.3 | 6 % low; step order right, kept |
| S9 cap end (L5) | 11.9 | 12.2 | 11.8 | 12.0 | agrees |
| S10–S11 (L6) | 11.1 / 10.8 | 11.5 | 11.0 | 11.25 | agrees |
| S12–S13 (L7) | 10.7 | 11.2 | 10.5 | 10.85 | agrees |
| S14–S15 (L8) | 10.1 | 10.2 | 10.0 | 10.1 | agrees |
| S16–S18 (C2) | 10.35 | 10.45 | 10.15 | 10.3 | agrees |
| S19–S20 (L11) | 10.5 | 10.4 | 10.2 | 10.3 | 2 % above, kept |
| S21–S23 (C3) | 8.6 | 8.4 | 8.2 | 8.3 | 3.6 % above, kept |
| S24–S25 (L14) | 14.1 | 13.8 | 13.8 | 13.8 | 2 % above, kept |
| S26–S29 (L15, L16) | 15.3 | 15.55 | 15.3 | 15.45 | agrees |

The semi-diameter pass read C3 and L14 at 8.1 and 13.5 mm against a fixed axis row. About the local axis they read
8.3 and 13.8 mm, so the 8.6 and 14.1 mm set for the close-focus corner ray sit 2–4 % above the drawing, within
its reading error (after the iris move below, the ray no longer needs them). The C1 front element is drawn with a
flat rim and a short bevel down to S3. The model draws one slanted edge from S1 to S2, because S2 meets S3 at
30.8 mm, so L2 cannot be squared. The drawn heights and their order between neighbours all match the live page.

Lands and cuts: there is no land and one cut, S9 at 11.9 mm against 13.2 mm at baseline. `rimcost.mjs --loo`
gives a worst loss of 0.0 points against the baseline rims, both at every zoom node and at the zoom eighths.
Restoring S9 wins back 0.0 points. Verdict: keep, as drawn (Fig. 12 ends the cap at a chamfer at about 12.0 mm).
Correction to the semi-diameter pass, which recorded the infinity curve as unchanged: the engine vignetting curve
(full-pupil lattice) shows the C3/L14 raises adding light at infinity. The corner rises from 39.3 to 42.6 % at
28.8 mm, from 52.0 to 56.1 % at 60 mm and from 47.1 to 51.4 % at 131.5 mm, and the largest gain is 4.5 points.

Labels and tags, checked and found correct: group brackets A I, A II, F I, F II and F III bracket the same elements
as Fig. 12, with no parent A / F brackets. Cemented brackets C1 (S1–S3), C2 (S16–S18) and C3 (S21–S23) match the
table. All 16 types agree with the signs of R, the roles are true, and the inspector lines read as the data. No
aspheres and no `apd` tags; the patent names no special glass. Zoom labels sit on Wide and Tele only.

Movement, from the 25 stations at infinity, with distances from the image to each group's front vertex. A I moves
34.00 mm toward the object (147.51 → 181.51 mm). A II moves 4.47 mm toward the image (133.29 → 128.82 mm). F I and
F III each move 13.74 mm toward the object (95.39 → 109.12 and 61.21 → 74.95 mm). F II holds at 80.548–80.550 mm.
Every track is monotonic, and stations ascend from wide to tele. The live zoom overlay agrees and reports a maximum
travel of 34.00 mm. For focus, keyframe 0 is infinity and keyframe 13 is 1.5 m. F moves as a unit toward the image
by 1.175, 1.111 and 2.100 mm at 28.8, 60 and 131.5 mm (live overlay 1.18 and 2.10 mm). A I and A II stay fixed. The
slider ends read ∞ and 1.50 m. The 1.5 m shift at the inferred stations dips to 0.998 mm near 40 mm, between the
printed 1.175 and 1.111 mm; each is the paraxial solve for that station.

Glass: the 15 labelled elements resolve within the window. TAF1 sits at its edge (Δνd −0.14), and no catalogue row
is closer. L3 (1.67000 / 57.07) stays `Unmatched`. Its nd recurs as N3 of Embodiment 6 (Table 13, PDF p. 23), but
there with νd 57.7, and the nearest rows (LACL7 57.31, S-LAL52 57.33) are 0.24 off. Not in the repo catalogue: Hoya
LAC9 (1.69100 / 54.70, `HOYA20260707.agf`), an era match for L2, L8 and L15 that is 0.05 from the printed νd against
0.07 for S-LAL9. Colour: Figs. 13a–15a (PDF p. 8) print only d-line spherical aberration and the sine condition, so
there are no line foci to compare. There is no nd-only medium, and no printed dPgF or line index. The assignee,
Minolta Camera Co., Ltd., is the corpus spelling and matches the front page.

Iris. The patent does not locate the stop, and the package put it at mid-d13. The aberration plots on PDF p. 8 do not
fit that position. At Y′ 21.63 mm the distortion reads −3.5 %, +2.1 % and +2.5 % (Figs. 13c–15c). At 28.8 mm,
Fig. 13b reads −0.36, −0.52, −0.65, −0.59 and −0.1 mm meridional and −0.16, −0.21, −0.24, −0.20 and −0.05 mm
sagittal, at 0.56, 0.68, 0.81, 0.89 and 1.0 of Y′. On the coordinator's decision the stop gap (STO to S14) is now
1.0 mm at every zoom station and focus keyframe, so the iris travels with F, and gap 13 holds the printed or
interpolated d13 less 1.0 mm (plus Δx). All 350 totals of the two gaps are bit-identical to before.

| Engine value | Iris at mid-d13 | Iris 1.0 mm before L8 |
| --- | --- | --- |
| Distortion at Y′ 21.63 mm (28.8 / 60 / 131.5 mm) | −2.34 / +2.00 / +2.08 % | −3.46 / +1.94 / +2.08 % |
| Tangential field at 0.50 / 0.63 / 0.75 / 0.81 / 0.88 of Y′, 28.8 mm | −0.31 / +0.10 / +1.50 / +2.88 / +4.70 mm | −0.34 / −0.45 / −0.46 / −0.35 / −0.10 mm |
| Sagittal field at the same fields, 28.8 mm | −0.20 / −0.19 / 0.00 / +0.23 / +0.59 mm | −0.16 / −0.22 / −0.25 / −0.23 / −0.18 mm |
| Tangential field at the edge, 60 mm (Fig. 14b about −0.13) | +1.46 mm | +0.18 mm |
| Field angle reaching Y′ 21.63 mm, 28.8 mm | 37.56° | 37.88° |
| Corner light, wide open at infinity (28.8 / 60 / 131.5 mm) | 42.6 / 56.1 / 51.4 % | 49.8 / 60.2 / 51.4 % |
| Wide-open stop radius (28.8 / 60 / 131.5 mm) | 6.456 / 7.334 / 9.054 mm | 8.021 / 8.193 / 9.054 mm |
| Engine half-field, 28.8 mm | 33.13° | 33.41° |

At 131.5 mm nothing changes, because the iris already sat 1.0 mm ahead of L8 there; the 131.5 mm distortion offset
(+2.08 against +2.5 %) does not depend on the iris. The engine half-field rises at the 19 widest stations (for
example 30.95 → 33.08° at 30.3 mm) and falls by up to 0.34° at five inferred stations from 87 to 127 mm (15.51 →
15.17° at 96.4 mm). Every one stays above the angle that reaches the image corner (13.2° at 96.4 mm), and field
coverage is 100 % at all 25 stations. The iris stays in air over its whole stroke at every station and keyframe.
The closest face is L7's concave rear face at the tele end, at infinity and wide open: 0.08 mm in front of the
plane. L8's convex front face curves away from it. audit:surface reports no errors. audit:aperture gives 25 of 25
stations within 3 % of the stated f-number, with no rim limit. audit:image-circle reports 0 undersized, and
clearap flags nothing at any station for focus rows 0, 1, 7 and 13. A finite-object trace at 28.8, 60 and 131.5 mm
covers the 13 printed distances. Its smallest axial margin is 0.36 mm at S18 (tele, 50 m), against 0.05 mm before.
Its smallest corner chief-ray margin is 0.56 mm at S7 (wide, 1.5 m), against 0.01 mm at S23 before. The C3 and L14
rims are therefore no longer set by the ray; they stay at 8.6 and 14.1 mm, 2–4 % above the figure. `rimcost.mjs
--loo` against the baseline rims still gives a worst loss of 0.0 points at every zoom node and at the eighths.
