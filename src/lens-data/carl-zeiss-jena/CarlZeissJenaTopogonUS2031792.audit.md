# Patent and transcription audit — US 2,031,792 A, Figure 1

## Source

US 2,031,792 A (Robert Richter, assignor to the firm of Carl Zeiss, Jena; filed July 25, 1934, Serial No. 736,880;
German priority July 26, 1933; granted February 25, 1936). Local file `patents/US2031792A.pdf`, six scanned pages
(SHA-256 0c40404c1291f6641e5702b2d5013ddab3400fe55d95b3e653f2fe1689730f8d). Drawing sheets 1–3 carry Figures 1–3,
each with its own table. The specification (pp. 1–3) states fD = 66.0 mm, f/6.3 and a 100° field for the first
example and repeats each table. The scan's text layer is OCR, so every number was read from the page images.

The patent has three constructional examples: Figure 1 (symmetrical, fD 66.0), Figure 2 (outer pair dissymmetrical,
fD 75.7) and Figure 3 (Figure 1's form with two outer plane-parallel plates, fD 66.1). The file transcribes Figure 1.

## Transcription check

Every printed value was compared at 300–600 dpi against both the drawing-sheet table (p. 1) and the specification
table (p. 2). The two agree, and the data file matches them in every value:

| Quantity | Printed | File |
| --- | --- | --- |
| r1 … r8 | 11.25, 16.55, 9.094, 7.35, 7.35, 9.094, 16.55, 11.25 | +11.25, +16.55, +9.094, +7.35, −7.35, −9.094, −16.55, −11.25 |
| d1, l1, d2, l2, d3, l3, d4 | 4.44, 0.02, 0.5, 12.98, 0.5, 0.02, 4.44 | same (l2 split 6.49 + 6.49 at the stop) |
| L1 = L4 | nD 1.6201, ν 60.4 | same, `indexReference` "D" |
| L2 = L3 | nD 1.7172, ν 29.5 | same, `indexReference` "D" |

The table prints radii without signs. The signs follow Figure 1 and the text, which says the concave surfaces of all
members face the diaphragm. There are no aspheres, no cemented surfaces (l1 and l3 are 0.02 mm air spaces) and no
variable gaps. Mismatches: none.

## First-order results

`built.mjs` and `probe.mjs` give EFL 66.038 mm against the printed 66.0 (+0.06 %) and f/6.3 with a 3.97 mm stop
radius. The paraxial BFD is 51.942 mm, the vertex length 22.90 mm and the total length 74.84 mm. Element focal lengths
are +42.90 mm (L1, L4) and −60.71 mm (L2, L3), and the Petzval sum is −0.000004 per mm. The patent's conditions hold:
l2 / mean(r4, r5) = 12.98 / 7.35 = 1.77 (more than 1 for the 100° form), inner thickness 0.5 mm = 0.76 % of f
(less than 2 %), inner index 1.7172 (more than 1.65).

## Inferred values

- Stop: Figure 1 draws the diaphragm at the middle of l2. Measured from the 300 dpi figure (32.55 px/mm), it sits
  11.43 mm behind S1 against the model's 11.45 mm. Its drawn opening is about 4.1 mm in radius, against 3.97 mm at
  f/6.3.
- Back focus: the computed paraxial value. The patent prints none.
- Rims: none are printed. Figure 1 draws L1/L4 almost to a knife edge at 10.8–11.0 mm. It draws the L2/L3 convex faces
  at about 7.4–8.1 mm and their concave faces at about 6.9 mm.
- Glass: nD and ν are used as printed. They match Schott SK16 (N-SK16 1.62041 / 60.32) and SF1 (1.71736 / 29.51), but
  the file carries no glass labels (closed 2026-11-17: L2/L3 labelled SF1; L1/L4 unmatched).

## 2026-11-16 — Deployment validation

An independent re-read of the patent page images checked every radius, thickness, air space, index and dispersion,
the radius signs against Figure 1, the stop position and opening against the drawing, the stated focal length,
aperture and field, and the front-page bibliography. Verdict: a faithful transcription of the first example. The
model reproduces fD = 66.0 within 0.06 %.

Product link: this is the Topogon patent. Zeiss's history dates Richter's Topogon to 1933. Nasse's 2011 Zeiss article
describes the four-meniscus Topogon as an aerial standard with a Contax 25 mm f/4 version. Bausch & Lomb's Metrogon is
engraved with this patent number. No production prescription is published, and the dissymmetrical Figure 2 may be
closer to the distortion-free photogrammetric lens, so the file stays a patent reference.

Defect found: the delivered rims (S1/S2/S7/S8 10 mm, S3–S6 6.5 mm) blocked the chief ray from about 42.6°, inside the
patent's stated 100° field. At 50° the chief ray needs S1 10.42, S2 9.62, S3 7.39 and S4 6.42 mm; the engine's own
chief-ray solve agrees with an independent trace. With the delivered rims the meridional fan passed 68 % of its rays
at 30°, 20 % at 40° and none at 45°.

Changes:

- `source.patentNumber`: "US 2,031,792" → "US 2,031,792 A" (house form).
- `source.assignees`: "Carl Zeiss, Jena" → "Carl-Zeiss-Stiftung" (the corpus form for "the firm of Carl Zeiss").
- `sd` S1 and S8: 10 → 10.45. `sd` S3 and S6: 6.5 → 7.4. These are the least values that pass the 50° chief ray, and
  both stay below the Figure 1 readings. S2/S7 (10) and S4/S5 (6.5) already clear it and are unchanged.
- `checks.maxRimAngleDeg`: added, 69. The S1/S8 rim slope is 68.3°; without the check, `audit:surface` reports it
  against the 64.2° default.
- `projection`: added, `{ kind: "rectilinear", fullFieldDeg: 100, maxTraceFieldDeg: 50 }`, the patent's stated field.
  The paraxial estimate alone gives 36.6°.
- `catalog.focalLengthMm.design`: 66.03779478699285 → 66.04.
- JSDoc header added: source, example, scale, and which values are inferred.
- Analysis rewritten to the house section layout. This audit file replaces a copy of the old analysis text.

After the changes, `built.mjs` gives EFL 66.038 mm, f/6.3, stop radius 3.97 mm, half-field 50° and paraxial
tracing half-field 36.55°. The engine's chief-ray solve converges unclipped at 30°, 40°, 45° and 50°. At 50° the image
height is 80.67 mm, 2.5 % beyond f·tan θ; the distortion is +0.9 % at 30° and +1.6 % at 40°. The meridional fan passes
100 % of its rays at 30°, 93 % at 35°, 73 % at 40° and 46 % at 45°. `audit:surface`: OK. `audit:aperture --raise`: no
surface below the axial ray. `audit:image-circle` and `audit:field-coverage` skip the file (no image format; hidden
at that time, now shown).

Open:

- Name, key and subtitle could name the Topogon, for example "ZEISS TOPOGON PATENT 66mm f/6.3" (closed 2026-11-17).
- Specs wording: "PATENT ONLY; NO RETAIL MATCH" and "ESTIMATED STOP AND RIMS" do not read well on a public page
  (closed 2026-11-17).
- Shorter `focus.description` and `indexReferenceNote` wording (closed 2026-11-17).
- Optional `source.example` label "Constructional Example 1", the patent's own term.
- Optional glass labels SK16 / SF1 (closed 2026-11-17: SF1 only; SK16 is not an exact row).
- Rims against Figure 1: L1/L4 to about 10.6 mm, L2/L3 convex faces to about 7.7 mm and concave faces to about
  6.9 mm. That would need `checks.maxRimAngleDeg` 71 and is left for the semi-diameter pass.

## 2026-11-17 — Cleanup and wording pass

The coordinator renamed the file, key and name to CARL ZEISS JENA TOPOGON 66mm f/6.3 (US 2,031,792 Design) and made it
visible. This pass changed only public text and metadata; the optics are untouched.

- `subtitle`: "1933 PRIORITY / 1936 GRANT — FIGURE 1" → "US 2,031,792 A, Figure 1 — Topogon wide-angle design".
- `specs`: ["4 ELEMENTS / 4 GROUPS", "PATENT ONLY; NO RETAIL MATCH", "ESTIMATED STOP AND RIMS", "INFINITY ONLY"] →
  ["4 ELEMENTS / 4 GROUPS", "DESIGN f = 66.0 mm", "DESIGN F/6.3", "ALL SPHERICAL", "100° FIELD"].
- `focus.closeFocusM`: 1000000000000000.0 → 1e15 (same value). `focus.description`: "Infinity-only literal Figure 1
  patent reference; no exact production identity." → "Infinity focus only; the patent gives no close-focus data."
- Glass: L2 and L3 → "SF1 (Schott)". At the sodium D line SF1 gives 1.71715 / 29.50 against the printed 1.7172 / 29.5
  (Δn −0.00005, Δν 0.00); at the helium d line its catalogue row is 1.71736 / 29.51. L1 and L4 → "Unmatched
  (nD 1.6201 / V 60.4)". The nearest rows (N-SK16, BACD16, S-BSM16, J-SK16) all give nD 1.62032, Δn +0.00022, which is
  outside the 0.0001 window.
- `indexReferenceNote` removed from all four elements. The old text, "Literal sodium D index and dispersion reciprocal V
  in patent table", only restated `indexReference: "D"`, and the note made the inspector show "n (source)" instead of
  nD for a line the patent names.
- Element `role` added for L1–L4 (outer collective shells, inner flint shells beside the stop).
- Header comment: added the glass match, and that the 100° field is declared as the full field.
- Analysis: H1 → the new name; glass section rewritten for the new labels; plain wording for the rim-slope and field
  sentences; "this file" → "the model".

No elements are cemented, so `cemented` and `doublets` stay empty. Engine numbers are identical before and after:
EFL 66.0378 mm, f/6.3, stop radius 3.9692 mm, half-field 50°, tracing half-field 36.55°, BFD 51.9415 mm, total length
74.8415 mm. `audit:surface`: OK. `audit:aperture`: within 3 % of the stated f-number, no rim limit.

Open:

- Optional `source.example` label "Constructional Example 1", the patent's own term ("Figure 1" kept).
- Rims against Figure 1 (L1/L4 about 10.6 mm, L2/L3 convex faces about 7.7 mm, concave faces about 6.9 mm), for the
  semi-diameter pass (closed 2026-11-17, semi-diameter pass below).
- `aperture.fStops` 8–22 are not printed by the patent; there is no product source for a stop scale.
- No `lensMounts`, `imageFormat` or `closeFocusM.marketing`: the patent design has no documented product format. The
  100° field needs an image circle of about 161 mm at this scale (image circle closed 2026-11-17: `imageCircleMm`
  161).

## 2026-11-17 — Semi-diameter pass against the patent figure

Source: `patents/US2031792A.pdf`, page 1 (drawing sheet 1, Figure 1, the modelled example), measured at 600 dpi with
column scans on both sides of the axis. The scan's axis tilts about 0.8°, so each reading uses the local axis.

Scale: the vertex crossings S1 → S8 span 1492 px for the 22.90 mm vertex length, S4 → S5 838 px for 12.98 mm and
S1 → S4 324 px for 4.96 mm. That gives 65.2 px/mm, with the three spans agreeing within 1 %. The diaphragm line sits
11.40 mm behind S1 against the model's 11.45 mm. Its drawn opening, about 4.1 mm in radius, is consistent with the
3.97 mm f/6.3 stop. The figure is drawn to scale, so its rim readings are used as values.

Readings (outer ink, both sides; line half-width about 0.05 mm):

- L1/L4 knife-edge tip: 10.97 mm above the axis and 10.97 mm below.
- L2 convex-face (r3) end: 8.05 mm top and 8.10 mm bottom.
- L2 concave-face (r4) end: 6.94 mm top and 7.02 mm bottom.

| Surfaces | Before | After | Figure | Evidence and limit |
| --- | --- | --- | --- | --- |
| S1, S8 | 10.45 | 10.45 | ≈ 10.9 (knife edge) | kept. The 69° rim-angle check caps S1/S8 at 10.50, and 10.45 still passes the 50° chief ray (10.42). |
| S2, S7 | 10 | 10.45 | ≈ 10.9 (same tip) | The figure ends both faces of L1 at one point. Raised to S1's height so the element ends at one height. |
| S3, S6 | 7.4 | 8 | ≈ 8.0 | Figure value. Was 7.5 % short. |
| S4, S5 | 6.5 | 6.8 | ≈ 6.9–7.0 | Figure value, capped at 6.8 by the 69° rim-angle check (the cap is 6.86). |

The L2/L3 shortfall, 6.5–7.5 % in height, sits at the edge of the usual noise band. It was changed for two reasons.
The measurement is clean: both sides agree within 0.08 mm and the scale is proven to 1 %. On faces this steep, the
shortfall also shows as a visibly short element in the overlay against the figure. No rim was lowered, so no cut or
land needs light accounting.

Metadata: `catalog.imageCircleMm` none → 161. Source: the patent's stated 100° angle of view (specification p. 2,
lines 1–4) for this example at fD = 66.0. The traced chief ray at 50° lands at 80.67 mm, and the value is rounded
down. Without it the analysis field fell back to the full-frame default (18.1°). No `lensMounts` or `imageFormat`
was added: the Topogon was an aerial and photogrammetric lens, and no product format fits this 66 mm example.
Product name: Zeiss's own history and Nasse's 2011 Zeiss article call the lens the Topogon, so the current name
"CARL ZEISS JENA TOPOGON 66mm f/6.3 (US 2,031,792 Design)" matches.

Results with the final rims:

- `built.mjs` unchanged: EFL 66.038 mm, f/6.3, stop radius 3.969 mm, half-field 50°, paraxial tracing half-field
  36.55°.
- The engine's chief-ray solve converges unclipped at 45° and 50°.
- `audit:surface` OK. `audit:aperture`: within 3 % of f/6.3, no rim limit.
- `audit:field-coverage`: the corner chief ray reaches 80.50 mm at 49.9° and is clear.
- `audit:image-circle` now runs (it skipped before, with no circle set). It lists S5–S8 under its wide-angle caveat,
  "exit-pupil proxy unreliable, verify by trace". The trace above settles them, so they were not raised.

Corner illumination on the app's full-pupil lattice, wide open, baseline → final:

| Field | 32.3° | 35.3° | 38.2° | 41.1° | 44.1° | 47.0° | 49.9° |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Baseline (%) | 99.5 | 95.8 | 86.6 | 72.1 | 51.0 | 23.7 | 0.0 |
| Final (%) | 100 | 100 | 100 | 95.0 | 75.2 | 41.3 | 1.9 |

The worst loss is 0.0 points.

Open:

- S1/S8 stay 0.45 mm under the drawn knife edge unless `checks.maxRimAngleDeg` rises to 71 (S1 at 10.6 mm).
- S4/S5 sit 0.1–0.2 mm under the figure for the same reason.
