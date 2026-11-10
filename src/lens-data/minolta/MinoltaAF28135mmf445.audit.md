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
stop at mid-d13 moves Δx/2 during focus (still open).

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
focusing; its position is not printed. The package author's note on front and rear profile differences against a
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

Open: the stop position (mid-d13) is not printed. Fig. 12 draws L4's rear rim meeting L5's front edge at about
13.0 mm; the model keeps both at 12.5 mm, a 0.7 mm air gap at the rim, because d7 closes at 13.05 mm.
