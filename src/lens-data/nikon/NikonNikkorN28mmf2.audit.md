# Audit Log - Nikon Nikkor-N 28mm f/2

Patent: US 3,736,049, single embodiment

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass correction

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L4 / 7 | `glass` | `LACL60 (HOYA) / equiv. LaK` | `E-LASF016 (Hikari) / J-LASF016 / LACL60 class` | Example 1 publishes `nd = 1.77250`, `vd = 49.5`; the existing project catalog's E-LASF016 class round-trips to the same patent pair and keeps the LACL60 historical class identity. |

- Retained L8 `Discontinued LaF/LaK type (1970s)` unresolved. Its `nd = 1.74443`, `vd = 47.9` pair was not verified against an exact coefficient-backed current public catalog entry.
- Retained the remaining SK16, LAF2/S-LAM2, BK7/S-BSL7, FDS9/SF56A, and LAK8/S-LAL8 labels.

### Phase 2 - Geometry and SD review

- Rechecked the normalized patent prescription and the existing scale to the 28 mm production focal length.
- The patent does not publish clear apertures. The stop remains inferred in the air gap between L6 and L7.
- Retained the existing semi-diameters. They follow the large retrofocus front group, narrower stop region, and smaller rear group in proportions that remain rational against the patent drawing.

### Phase 3 - Spectral / APD review

- The patent gives only `nd` and `vd`. No ED/APD claim, line-index table, partial-dispersion table, or aspherical data was found.
- No APD flags were added.

### Phase 4 - Analysis sync

- Updated `NikonNikkorN28mmf2.analysis.md` to use the corrected L4 `E-LASF016 (Hikari) / J-LASF016 / LACL60 class` label.

## 2026-07-29 - Catalog-coordinate correction

- Corrected L1 and L3 from `SK16` to OHARA `S-BSM15`, the exact 1.62299 / 58.17 row.

## 2026-09-21 — First-added diagram audit, lens 57

Source: local `patents/US3736049.pdf` (6-page 300 dpi scan with an unreliable OCR layer; every number below was read
from the rendered page). Front page p. 1; Fig. 1 p. 2 (sheet 1/2, axis horizontal, no rays); prescription table
p. 5 col. 4 lines 27–51; close-focus statement p. 6 col. 5 lines 1–4.

### Retained after re-reading the source

- Front page: US 3,736,049, granted 1973-05-29, inventor Yoshiyuki Shimizu, assignee Nippon Kogaku K.K., filed
  1971-09-29, JP priority 45/85417 (1970-09-30). `patentNumber`, `patentAuthors`, `patentAssignees`, `patentYear`
  and the analysis metadata block agree. The patent has one unnumbered embodiment; the subtitle now says so instead
  of "Example 1".
- All 17 radii, 16 thicknesses and nine nd/νd pairs match the table at ×0.28 to the stored precision; the stop
  is not tabulated. Paraxial EFL 27.807 mm, BF 37.360 mm; stored element `fl` values agree with thick-lens values.
- Source conflict: the table prints f = 100.0 and B.F. = 136.1 but the printed rows give 99.316 and 133.43. The
  printed fc = 1406.3 is reproduced exactly (1406.29), so r1–r9/d1–d8 are certain; no single master-group value can
  be changed to reproduce both f and B.F. Table retained as printed, stated in the data header and analysis §1.
- Scale ×0.28 (repo convention: nominal patent f → production f); `focalLengthDesign` 27.8 is the computed EFL.
- `nominalFno` 2, `fstopSeries` from f/2, `maxFstop` 16 (production minimum aperture f/16). L4–L6, L8 rear and L9
  rims (13.8 / 12.5 / 11.5 / 11.5) are within 15 % of Fig. 1 (12.5 / 11.8 / 10.5–11 / 13.0) and retained.
- Glass labels for L1/L3 (S-BSM15), L2 (S-LAM2), L4 (J-LASF016 class), L7 (SF56A), L9 (S-LAL8) resolve within
  Δnd ≤ 5e-6 and Δνd ≤ 0.12 of the patent pairs; retained. The patent names no glass makers and gives only nd/νd.

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| `subtitle` | "EXAMPLE 1" | "SINGLE EMBODIMENT" | The patent numbers no examples (one worked embodiment, p. 4 col. 1 "an embodiment"). |
| 1 `sd` | 15.0 | 22.0 | Fig. 1 flat front rim 405–409 px × 0.05407 mm/px (scale from the 1173.5 px / 63.45 mm r1–r17 span). Exact chief ray for Y = 21.6 mm needed 18.27 mm at the old stop position; the old rim blocked it. |
| 2 `sd` | 15.0 | 16.0 | Fig. 1 r2 curve ends at ≈315 px (17.0 mm) before a flange step, but at R2 = 21.34 the rim sags 8.4 mm into the 6.36 mm d2 gap above 16.4 mm; 16.0 keeps 83 % gap intrusion. Chief ray 13.5 mm. |
| 3, 4 `sd` | 14.5 | 17.8 | Fig. 1 flat top 330 px both sides. Chief ray 12.3 / 11.2 mm. |
| 5 `sd` | 13.5 | 15.8 | Fig. 1 flat top 300 px above / 285 px below the axis (16.2 / 15.4 mm). The r6 curve ends at 250 / 235 px (13.5 / 12.7 mm), so 6 stays 13.5. |
| 11 `d`, STO `d` | 3.407 / 2.271 (stop at 60 % of d11) | 0.568 / 5.110 (10 %) | Stop tick at x = 1452 px between the r11 (1442) and r12 (1541.5) vertex crossings in Fig. 1; the front-page figure gives 10 / 95 px. Sum 5.678 = 20.28 × 0.28 unchanged. With the old split the 9.5 mm L7 front rim protruded 0.3 mm in front of the stop plane. |
| STO `sd` | 8.9 | 9.9 | Engine-derived f/2 iris radius at the drawn station is 9.89 mm (exact marginal ray; the old station needed 9.00). |
| 12, 13, 14 `sd` | 9.5 / 9.2 / 9.5 | 9.74 | f/2 axial marginal ray needs 9.01 / 9.71 / 9.72 mm; 13 and 14 clipped it. Fig. 1 draws L7 at 194 / 186 px (10.5 / 10.1 mm) and L8 front at ≈205 px, but with d13 = 1.371 the r13 and r14 sags meet at 9.752 mm, so 9.74 is the physical limit. |
| `gapSagFrac` | default 0.9 | 1 | The d13 gap is a near-contact at the required aperture (intrusion 1.367 of 1.371 mm at 9.74); same treatment as the Canon EF 600/4 R6→R7 gap. |
| L5, L6 `glass` | `BK7 (Schott) / S-BSL7 (OHARA)` (resolved S-BSL7 1.51633, Δnd 4.7e-4) | `J-BK7A (HIKARI catalog equivalent; …)` | Table rows 8 and 10: 1.51680 / 64.2; catalog J-BK7A 1.51680 / 64.13. |
| L8 `glass` | `Discontinued LaF/LaK type (1970s)` | `744479 — lanthanum flint (catalog unresolved; nd = 1.74443, νd = 47.9)` | Row 14: 1.74443 / 47.9; nearest catalog NBF1 1.74330 / 49.22 and S-LAM60 1.74320 / 49.34 are >1.3 Abbe units off. Code form keeps the auto-upgrade path. |
| `focusPositions`, `var` | two keyframes; close BF 40.817 (focused at 316.7 mm, β = −0.124: neither the patent state nor 0.3 m) | `[0, 0.81, 1]`; d9 1.469 / 0.853 / 0.853; BF 37.361 / 40.141 / 41.101 | Patent: Δd9 = −2.2 at f = 100 for β = −1/10 (−0.616 mm). Paraxial solve with the printed table puts that state at 370.35 mm object-to-image (object 267.4 mm from r1), BF 40.141; coordinate 0.3 / 0.3704 = 0.81. The 0.3 m keyframe holds the published d9 and extends BF to 41.101 (β = −0.1345, calculated); no CRC travel beyond β = −1/10 is published. |
| Header, `focusDescription` | 60 % stop, marginal-ray SD estimate, "0.3 m close focus" for the β = −1/10 state, BF extension formula | rewritten | As above. |

### Checks on the result

- Surface validator clean; image-circle check clean; prettier clean on all three files.
- Exact trace at Y = 21.6 mm: the chief ray reaches the corner at 38.6° (patent ω = 37.25°, paraxial engine
  half-field now 37.5° against 31.1° before) and passes every rim; the f/2 axial bundle passes every rim with
  0.02–0.03 mm to spare at 13/14. Full-field corner-bundle vignetting at f/2 is 45 % (13), 39 % (14), 18 % (15) and
  51–56 % (16/17) per side; the drawn 13.0 mm L9 would bring 16/17 to 31–33 %.
- Focus keyframes: t = 0.81 focuses at 370.44 mm object-to-image with β = −0.1000; t = 1 at 300.01 mm with
  β = −0.1345; infinity defocus 0.0006 mm. At all keyframes the d9 / d13 gap intrusions stay inside the policy.
- Glass resolver: L5/L6 J-BK7A Δnd 9e-9 / Δνd 0.07; L8 Abbe fallback with no accidental catalog match.
- Live: production baseline (stop mid-gap, ~15 mm front group, off-axis 18.7°) compared with the local page at
  infinity, focus 0.81 (37 cm, D9 0.85 / BF 40.14) and focus 1 (30 cm, D9 0.85 / BF 41.10), on-axis and off-axis
  (22.5°) toggles; the silhouette now shows the flanged L1, the stepped L3 and the stop directly behind L6 as in
  Fig. 1.

### Open limitations

- The printed f = 100.0 / B.F. = 136.1 are not reproduced by the printed table (99.32 / 133.43); the JP priority
  document was not consulted (outside the allowed sources).
- No clear apertures are published; L1 rear, L7 and L8 front rims are geometry-limited below the drawing, L4–L6
  and L9 remain drawing estimates within 15 %.
- The stop position is drawn only. The CRC spacing at the production 0.3 m MFD is not published; the 0.3 m keyframe
  is a labelled calculation with d9 held at the β = −1/10 value.
- L8's 1.74443 / 47.9 glass has no catalog Sellmeier; a Hikari/Ohara 1970 catalog entry with coefficients would let
  the `744479` code auto-upgrade.
