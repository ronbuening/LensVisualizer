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
