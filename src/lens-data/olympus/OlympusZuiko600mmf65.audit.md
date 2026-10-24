# Audit Log — OLYMPUS ZUIKO AUTO-T 600mm f/6.5

Patent: US 3,827,781 (Yoshitsugi Ikeda, Olympus Optical Co.; filed 1973-02-13, JP priority 1972-03-01, issued
1974-08-06), sole Example / Fig. 1, repeated in claim 2.

## 2026-10-24 — Intake validation, aperture, rims, labels and analysis rewrite

### Source identification

- One numerical example only: the description table on PDF p.4 (column 3) and the identical table in claim 2 (column 4).
  Fig. 1 on PDF p.2; conditions 1–5 on PDF pp.3–4.
- Normalized to f = 100 (claim 2: "f is 100 mm"), F 1:6, telephoto ratio 0.70, picture angle about 4°.

### Transcription check

- Read from a 300 dpi render of PDF p.4; the description and claim tables agree.
- All 10 radii, 9 axial distances and 6 nd/νd pairs match the data file at uniform scale ×6, with 0 mismatches
  (e.g. r8 −12.274 → −73.644; d7 33.643 → STO split 100.929 + 100.929). There are no aspheric coefficients.
- Computed f = 100.0005 (patent 100), telephoto ratio 0.7006 (patent 0.70), f2,3,4 = −168.375 (printed −168.39;
  last-place difference). Conditions 3 and 5 compute as 1.047 and 0.033, as printed. The LSA misprint check is clean
  (0.05 mm at full pupil).
- No back focal distance is printed. 134.2197 mm is the computed paraxial BFD (22.36995 × 6).

### Product correlation evidence

- Olympus *Manual for Zuiko Interchangeable Lenses Group*, IEMZLG-0173, ZUIKO 600mm F6.5 page: 6 elements / 4 groups,
  4°, telephoto ratio 0.7, f/6.5–32, 11 m closest focus, 36 × 54 cm smallest field, rack-and-pinion focusing, 377 mm
  length, 110 mm maximum diameter, with a dimensioned section drawing.
- Scaled section measured against the ×6 prescription: L1 thickness 14.7 vs 15.02 mm; L1–L2 air space 31.6 vs
  33.52 mm; L1 to rear doublet 273 vs 276.6 mm; track minus 46 mm OM flange 374 vs 377 mm length. The paraxial
  magnification at 11 m, 0.065, frames 367 × 551 mm, which matches the stated 36 × 54 cm.
- KEH and savazzi.net listings agree on 6/4, 36 ft 1 in closest focus and a 100 mm filter.

### Data changes

| Item | Before | After | Justification |
|---|---|---|---|
| `aperture.nominalFNumber` | 6 | 6.5 | The production lens is f/6.5. The manual section draws L1 at about the f/6.5 axial beam (≈93 mm clear), too small for f/6 (100 mm pupil). |
| `aperture.fStops` | 6, 6.5, 8 … 32 | 6.5, 8 … 32 | Olympus f/6.5–32. |
| `catalog.fNumber.design` | 6 | 6 (kept) | Patent F 1:6; nominal is slower than design, which the metadata rule allows. |
| sd 1, 2 (L1) | 61.396 | 47.0 | Section: 45.5–47.0 mm (L1 outline 204–207 px at 2.20–2.24 px/mm). f/6.5 axial floor 46.15 / 45.55. The old rim was a 122.8 mm diameter inside a 110 mm barrel, with a 0.8 mm edge. |
| sd 3, 4 (L2) | 51.918 | 42.0 | Section about 41.2–42.1 mm. Floor 39.76 / 39.30. |
| sd 5–7 (L3/L4) | 49.752 | 42.0 | Section about 41.4 mm, square-cut with L2. Floor 38.88 / 37.99 / 36.90. The L3 edge went from 1.1 to 4.9 mm. |
| sd 8–10 (L5/L6) | 18.677 / 18.940 / 18.940 | 17.0 | Section about 15.8–17.8 mm (mean 16.8). Floor 10.5; full-field chief ray 7.1–7.9. |
| BF keyframes | 41 (t step 0.025) | 9 (t step 0.125) | Same paraxial unit-focus values, rounded to 4 decimals; interpolation error ≤ 0.036 mm. |
| `name` | OLYMPUS ZUIKO OM 600mm f/6.5 | OLYMPUS ZUIKO AUTO-T 600mm f/6.5 | Folder house style (F.ZUIKO AUTO-T 200mm, E.ZUIKO AUTO-T 1000mm). |
| `subtitle`, `specs`, header, roles, `focus.description` | process wording | house wording | Removed reconstruction/qualification jargon; one optical role per element. |
| `source.patentNumber` | US 3,827,781 A | US 3,827,781 | Matches neighbouring US entries. |

Engine after the change: EFL 600.0029 mm, FOPEN 6.5, stop radius 23.790 mm, half-field 2°. The surface validator
reports no errors, the image-circle check reports nothing undersized, and the aperture check finds the lens within
3 % of its stated f-number. The real-ray trace at 21.6 mm finds no axial clip and no blocked chief ray. Corner
vignetting is retained as drawn.

### Glass identification

| Element | nd / νd | Before | After |
|---|---|---|---|
| L1, L3 | 1.48749 / 70.1 | Unmatched (…) | S-FSL5 (OHARA) |
| L2 | 1.80452 / 39.6 | Unmatched (…) | NBFD3 (HOYA) |
| L4 | 1.61340 / 43.8 | Unmatched (…) | BPM4 (OHARA) |
| L5 | 1.71300 / 54.0 | Unmatched (…) | J-LAK8 (HIKARI) |
| L6 | 1.69895 / 30.1 | Unmatched (…) | S-TIM35 (OHARA) |

All labels resolve to the named catalog entries. The printed nd/νd values are unchanged, no APD flags are set, and the
patent names no glass maker.

### Analysis sync

- Rewritten to the spec: patent-grounded identification, component powers, element roles tied to conditions 1–5, a
  conditional-expression table, and the f/6 → f/6.5 aperture rationale. Package and process references were removed.

### Open issues

- The stop position is inferred (midpoint of d7; Fig. 1 draws D at about 54 % of d7).
- Rim readings come from a small scan (≈0.45 mm per pixel) and carry about ±1 mm uncertainty.
- The focus extension is a paraxial unit-focus solution, not a published cam.
- Whether later multi-coated (Zuiko MC) copies kept this prescription is not established.

## 2026-10-24 — Semi-diameter pass against the patent figure

### Source and scale

- Fig. 1 of US 3,827,781 appears twice: on the front page (PDF p.1, larger) and on the drawing sheet (PDF p.2). Both
  are 300 dpi CCITT scans and were measured with column/row ink-run reads at native resolution.
- Vertex crossings on p.1 (line centres, px from r1): r2 61, r3 199.5, r6 286.5, r7 311.5, r8 1122.5, r10 1166. Against
  the ×6 prescription this gives 4.06 px/mm over r1–r2, 4.17 over r1–r7, 4.06 over r1–r8 and 4.08 over r1–r10. A
  scale of 4.1 px/mm (±2 %) was used. The p.2 copy gives 3.00 (r1–r8) and 3.09 (r1–r7) px/mm.
- The figure is a true scaled drawing of this prescription. At the measured heights, the drawn rim positions match the
  computed sags: L1 front about 32 px behind its vertex (7.8 mm sag at 53 mm), and L5/L6 rim corners 16 px and 8 px
  from their vertices (3.85 and 1.93 mm sags at 23.5 mm).

### Figure readings

Rim-line centres, measured above and below the axis on both copies:

| Element | p.1 half-height | p.2 half-height | Figure sd | Stored sd | Figure / stored | Ratio to L1 (figure) | Ratio to L1 (stored) |
|---|---|---|---|---|---|---|---|
| L1 (1, 2) | 217 px | 162.8 px | ≈ 53.3 mm | 47.0 | 1.13 | 1.00 | 1.00 |
| L2 (3, 4) | 205.5 px | 153.5 px | ≈ 50.2 mm | 42.0 | 1.19 | 0.94 | 0.89 |
| L3/L4 (5–7) | 191 px | 143.3 px | ≈ 46.8 mm | 42.0 | 1.11 | 0.88 | 0.89 |
| L5/L6 (8–10) | 96.3 px | 71.5 px | ≈ 23.5 mm | 17.0 | 1.38 | 0.44 | 0.36 |

The figure draws the patent's F6 design, whose f/6 axial beam needs 50.0 mm at r1. Its absolute front-group size
(L1 ≈ 106.6 mm clear) is wider than the production lens's 103.6 mm front bore and leaves almost no wall inside the
110 mm barrel. The procedure treats these as outer bounds, so the figure's absolute front-group heights cannot apply
to the f/6.5 production model. In proportion to L1, the figure and the Olympus manual section agree on L2 and L3/L4
to within about 5 %, which is measurement noise. The rear doublet is the only shape outlier: Fig. 1 draws it at 0.44
of L1, the stored value was 0.36, and the earlier manual reading was 15.8–17.8 mm.

### Changes

| Surface | Before | After | Evidence |
|---|---|---|---|
| 8, 9, 10 (L5/L6) | 17.0 | 20.8 | Fig. 1 proportion to L1, 0.44 × 47.0 = 20.8. The figure draws a square-cut doublet, so the three faces keep one height. The f/6.5 axial floor is 10.54 / 10.47 / 10.38 and the full-field chief ray 7.1–7.9. |
| 1, 2 (L1) | 47.0 | 47.0 (kept) | Bounded by the production barrel (103.6 mm bore, 100 mm filter) and the manual section. The f/6.5 floor is 46.15 / 45.55. |
| 3, 4 (L2) | 42.0 | 42.0 (kept) | 0.94 × 47 = 44.2 is within 5 % of the stored value. |
| 5–7 (L3/L4) | 42.0 | 42.0 (kept) | 0.88 × 47 = 41.4 is within 2 %. |

### Clearance results

- The surface validator reports no errors. The image-circle check finds nothing undersized. The aperture check finds
  the lens within 3 % of f/6.5.
- Field coverage is unchanged: 2.0° declared, 21.01 of 21.65 mm traced, with the corner clear.
- The real-ray trace at 21.6 mm image height, at infinity and at 11 m, shows no axial clip and no blocked chief ray.
- The engine output is unchanged: EFL 600.003 mm, FOPEN 6.5, stop radius 23.79 mm, half-field 2°.
- Geometric transmission at 2° rises from 83.9 % to 88.5 %. The rear doublet stops limiting the corner bundle above
  about 18.5 mm. Front-group vignetting at 0.3–1.7° is unchanged (98.4–90.6 %).
- Live render at infinity and at 11 m: the rear doublet now stands at about 0.44 of L1's height, as Fig. 1 draws it.
  No overlaps.

### Open limitations

- If the model were ever opened to the patent's F6, the figure's absolute front-group heights (≈ 53 / 50 / 47 mm) would
  apply. At f/6.5 the production barrel bounds them.
- The manual and the patent disagree on the rear doublet (≈ 17 vs ≈ 20.8 mm at production scale). The patent figure
  governs here. The manual scan's ±1 mm reading uncertainty does not cover the gap.
- Fig. 1 draws the iris D at about 54 % of d7. The STO stays at the inferred midpoint.

## 2026-10-24 — Second review: diagram, labels and movement

### What was compared

- The live local page at infinity, at 11 m and with the focus-movement overlay, against Fig. 1 on the front page of
  US 3,827,781 (PDF p.1, 300 dpi CCITT scan), re-measured independently with column profiles above and below the axis
  (axis at row 2509).
- Element designations, group brackets, element types and roles against the description on PDF pp.3–4, which reads
  "I and II designate front and rear lens components".

### Figure re-measurement

Outer ink edges, mean of the two sides, at 300 dpi:

| Element | Above axis | Below axis | Mean | Ratio to L1 | At L1 = 47.0 mm | Stored |
|---|---|---|---|---|---|---|
| L1 | 222–224 px | 219 px | 221.5 px | 1.00 | 47.0 | 47.0 |
| L2 | 210 px | 207–208 px | 208.5 px | 0.94 | 44.2 | 42.0 |
| L3/L4 | 199 px | 191–192 px | 195.5 px | 0.88 | 41.5 | 42.0 |
| L5/L6 | 99–100 px | 100–101 px | 100 px | 0.45 | 21.2 | 20.8 |

Fig. 1 draws a three-step front group: L1 tallest, L2 a visible step lower, and the cemented L3/L4 a further step
lower. L2 and L3/L4 are both square-cut. The live page drew L2 and L3/L4 flush at 42.0 mm, which lost the middle step.
The L3/L4 and rear-doublet readings agree with the stored values to within 2 %.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| sd 3, 4 (L2) | 42.0 | 44.2 | Fig. 1 proportion 0.94 × L1 (47.0). Both faces stay at one height, as the figure draws L2 square-cut. The f/6.5 axial floor is 39.76 / 39.30 mm. The surface validator passes, and the L3 front rim (6.4 mm sag at 42 mm) stays clear of the L2 rear face. |
| `groups` | none | "I (+)" over surfaces 1–7, "II (−)" over 8–10 | The patent's own component notation, with the brackets drawn in Fig. 1. Signs follow the component focal lengths (+358.1 / −216.1 mm). |

L1 and L3/L4 keep their manual-based sizes. The engine is unchanged by the L2 edit: EFL 600.003 mm, FOPEN 6.5, stop
radius 23.79 mm, engine half-field 5.38°. The geometric transmission curve is identical before and after (100 % on
axis, 94.3 % at 1.0°, 88.0 % at 2.1°), because L2 does not limit any traced bundle. The image-circle check finds
nothing undersized. Field coverage traces 21.65 of 21.65 mm with the corner clear. The real-ray trace at 21.6 mm
(ω 2.06°) shows no axial clip and no blocked chief ray at infinity or at 11 m.

### Checked and found correct

- Element names L1–L6 are the patent's own designations. The doublet brackets D1 (surfaces 5–7, L3/L4) and D2 (8–10,
  L5/L6) cover the two cemented components.
- Element types agree with the radius signs: L1, L3 and L6 biconvex; L2, L4 and L5 biconcave. No surface is aspheric,
  and none carries an A suffix. No element has an APD tag. The patent names no special glass, and the analysis records
  no maker ED position.
- The roles match the patent text: condition 2 for the L1–L2 space, condition 3 on r3, condition 4 for L3/L4 (coma,
  Petzval sum and colour), and condition 5 for L5/L6 (Petzval sum, with r9 for colour of magnification).
- The stop sits in the d7 air space between L4 and L5, where Fig. 1 draws the diaphragm D.
- Focus: index 0 of the back-focus row is infinity (134.22 mm) and the last is 11 m (173.48 mm). The movement overlay
  shows components I and II moving together 39.26 mm toward the object, as unit focusing requires. The focus slider
  ends at 11.0 m. The inspector shows L2 as Biconcave Negative, NBFD3 (HOYA), −407.02 mm, and L6 as Biconvex
  Positive, S-TIM35 (OHARA).

### Open limitations

- The front group's absolute size is still bounded by the production barrel, not by Fig. 1. L2's height now follows
  the figure's proportion rather than the manual reading of about 41–42 mm. If the manual's flush L2 and L3/L4 are
  preferred, the earlier 42.0 mm value passes every check equally.
- Fig. 1 draws D at about 54 % of d7; the STO stays at the inferred midpoint, a gap split outside this review.
