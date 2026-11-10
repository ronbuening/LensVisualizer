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
inside Fig. 12; still open); all 16 glasses are standard catalogue pairs labelled `Unmatched` (closed: 15 relabelled);
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
and 14.0, inside the Fig. 12 reading of about 8.5 and 14.0. The stop is placed at mid-d13 and moves Δx/2 during
focusing; its position is not printed. The package author's note on front and rear profile differences against a
Minolta service drawing was not checked (no maker drawing was staged). The allphotolenses diagram is the public
comparison to make.
