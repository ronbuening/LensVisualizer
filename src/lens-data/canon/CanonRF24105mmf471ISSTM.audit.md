# Canon RF 24-105mm f/4-7.1 IS STM — audit log

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold with Numerical Example 1's physical rear stack (US 2021/0003831 A1, printed p. 6 /
  PDF p. 22, ¶0084 surface table and Various Data): d25 = 11.12 / 34.65 / 35.56 mm, then `rearPlates` GB 1.50 mm,
  nd 1.51633, νd 64.1, and d27 = 1.12 mm at all three zoom states. The printed values reproduce the legacy
  13.229231 / 36.759231 / 37.669231 mm exactly (d25 + 1.50/1.51633 + 1.12).
- Glass label S-BSL7 (OHARA 1.51633 / 64.14), which resolves as compatible with the stored nd/νd; the element glasses
  carry no vendor, so the OHARA match for 1.51633 / 64.1 is used.
- Paraxial check against the previous data: EFL and defocus identical at every zoom station (the old fold had no
  rounding). Physical track grows by 1.50 × (1 − 1/1.51633) = 0.511 mm.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Numerical Example 1's Various Data (printed p. 6 / PDF p. 22) gives image heights 19.90 / 21.64 / 21.64 mm at 24.72 /
66.67 / 101.85 mm, with paraxial half angles 38.84° / 17.98° / 11.99° (atan Y/f). The wide Y is 92% of the 21.65 mm
corner, a design image circle, so the wide station is sized to pass Y only; the real chief ray (solved through the stop
centre) reaches Y at 41.90°. The rims, inferred for a 0.60 field, clipped that chief ray early: surface 23A from 29.6°
at wide (61% of the corner, 67% of Y) and at 66.67 mm (94%), and surface 24 from 9.1° at tele (76%). The chief ray to Y
at wide crosses surfaces 1–8 at 20.77 / 18.81 / 15.64 / 12.10 / 11.64 / 11.30 / 11.37 / 10.92 mm and 22A–25 at 10.76 /
12.28 / 14.58 / 15.04 mm; the tele corner chief ray needs 24 ≥ 15.60 and 25 ≥ 15.84 mm, and the 66.67 mm corner needs 1
≥ 18.13, 22A ≥ 7.95 and 23A ≥ 8.86 mm. Values are the largest floor + ~0.5 mm. L1 (2), L4 (8), L12 (22A) and L13 (25)
are scaled with their partners; L2's rear (4, R 15.99) takes its own floor: scaled with surface 3 it would be 15.5 mm, a
75.7° rim past the 64.2° limit; L3 stays equal front and rear. FIG. 1 (PDF p. 2), scaled on the 107.83 mm
first-vertex-to-image span, draws L1 ≈ 23.9, L2 ≈ 16.6, L3–L4 ≈ 12.3, L12 ≈ 13.1 and L13 ≈ 16.6 mm, so every new value
stays inside the drawn element; surface 1 stays well inside the 67 mm filter.

| Surface | Before | After | Justification                                                                                           |
| ------- | ------ | ----- | ------------------------------------------------------------------------------------------------------- |
| 1       | 17.5   | 21.3  | wide chief ray to Y 20.77 mm + clearance                                                                |
| 2       | 17.0   | 20.7  | L1 scaled with surface 1 (own floor 18.81 mm)                                                           |
| 3       | 11.5   | 16.2  | wide chief ray to Y 15.64 mm + clearance                                                                |
| 4       | 11.0   | 12.6  | wide chief ray to Y 12.10 mm + clearance                                                                |
| 5       | 9.5    | 12.2  | wide chief ray to Y 11.64 mm + clearance                                                                |
| 6       | 9.5    | 12.2  | L3 kept equal front and rear (own floor 11.30 mm)                                                       |
| 7       | 9.7    | 11.9  | wide chief ray to Y 11.37 mm + clearance                                                                |
| 8       | 9.5    | 11.7  | L4 scaled with surface 7 (own floor 10.92 mm)                                                           |
| 22A     | 7.7    | 11.9  | L12 scaled with 23A (own floor 10.76 mm); slope still steepening at 11.9 mm, turnover only past 13.6 mm |
| 23A     | 8.3    | 12.8  | wide chief ray to Y 12.28 mm + clearance; no turnover within 15.4 mm                                    |
| 24      | 11.5   | 16.1  | tele corner chief ray 15.60 mm + clearance (wide to Y 14.58)                                            |
| 25      | 11.8   | 16.5  | L13 scaled with surface 24 (own floor 15.84 mm)                                                         |

The validator accepts the new values and the image-circle floor reports nothing undersized. The 66.67 mm and tele
stations reach 100% of the corner with every rim clear. The wide edge reaches 42.6° → 20.36 mm (102% of Y, 94% of the
corner), stopped by the surface-1 rim; the wide corner (44.5°) would need surface 1 at 22.81 mm and nine further rims
raised beyond the patent's design circle. The analysis's asphere departures (now −1.773518 mm at 22A, h = 11.9 mm, and
−1.962182 mm at 23A, h = 12.8 mm) and its largest rim angle (now 51.979965° at surface 4) were updated.

## 2026-10-30 — Original-PDF shape and complete-media review

Preserved actual 2026-09-23 rear-plate and 2026-09-24 rim-floor history above. Today's direct original review reopens native caps/shoulders and qualifies glass and runtime claims; unchanged earlier conclusions retain their dates, without an extra reused-lens count.

### Source identity and native measurement

Local `patents/US20210003831A1.pdf`, SHA-256 `3fea5bbc5c7a02f406071bf209e07ab5aa99e905e43d2f64017cc4d43e409854`, independently confirmed on its first page as US 2021/0003831 A1, Yasuaki Hagiwara / Canon, January 7, 2021. Numerical Example 1 is PDF 22 / printed 6: all 27 surfaces, 13 photographic elements plus GB, both asphere tables, Various data and all zoom/plate gaps. Figure 1 is PDF 2 / sheet 1; corresponding Figures 2A/B are PDF 3 and 2C PDF 4. The printed design apertures 4.11/6.18/7.31 are retained. Paragraphs 0079–0081 (PDF 21 / printed 5) explicitly define d/F/C reference wavelengths and the standard conic, with air-equivalent BF. Mechanism paragraphs 0062–0065 are PDF 20 / printed 4.

Original figure native raster: 2560×3300, one-bit, 300 ppi; a 600 ppi view only upsamples 2×. Literal physical track about 107.83 mm gives approximately 17.2 pixels/mm; adopt ±0.8 mm drawing uncertainty. Native cap/blank measurements: E1 about 23.9 mm; E2 outer about 16.6 and concave clear cap about 12.6; E12 outer about 13.1 and curved front cap about 11.6. Excluded motion arrows, GB/unit brackets, labels and stop strokes. Every element/concave end, two cemented interfaces and both aspheres inspected; no source hybrid layer is tabulated.

### Shape changes, rejected trials and retained constraints

- S1/S2 clear caps 21.3/20.7 → **24.0/24.0 mm**, matching actual native curve endpoints within uncertainty. The old smaller caps missed those endpoints by more than ±0.8 mm.
- S4 retains clear **12.6**, adds resolved outer `rimExtensionSd=16.2`; S22A retains clear **11.9**, adds resolved outer **12.8**, anchored to each existing opposite cap and within native uncertainty.
- Zero inferred cuts. No bonded-interface lands, disconnected resin wings or unsupported equal-height blocks. Remaining unequal caps and geometry constraints retained.
- S4 clear=16.2 trial fails actual slope 90.0° >64.2°. S22A clear=12.8 passes geometry but is rejected because its curve would continue through the source's straight outer shoulder. The land preserves the existing clear cap.
- All source R/d, two complete aspheres, stop/aperture authority, three zoom rows, disabled finite focus, centered IS, physical GB 1.50 mm and d27 1.12 mm are unchanged. No source coefficient, gap or iris is fitted to a figure.

### All modeled media

Directly compared all fourteen nd/νd pairs, including GB, with the original table. Twelve active curves plus GB give **13/14 qualified curves**, while L12 1.53110/55.9 remains Unmatched. Paragraph 0079 defines d 587.6 nm, F 486.1 nm, C 656.3 nm and νd. No measured C/F/g line-index values, partials or APD designation is supplied; zero per-lens overrides exist. Source paragraph 0054 discusses resin/glass alternatives conditionally, so no selected-example chemistry is inferred. Glass labels and analysis now explicitly name compatible curves as qualified proxies; historical supplier, melt, composition and manufacture remain unresolved. Source pairs, reference convention and APD state are unchanged.

Source metadata: catalog design endpoints now literal 24.72/101.85 mm; source label normalized Numerical Example 1. Table 1 condition-(3) conflict (PDF 23 / printed 7, 0.975073 versus derived 2.337462) receives an unresolved source.errata note; Claim 3 (PDF 24 / printed 8) confirms the stated expression but not a unique correction. No numeric source field changes.

### Runtime checks and actual rendered SVG

Surface and image-circle checks pass. A 65-position clone exactly matches runtime z/sd/current iris. Aperture census **65/65 within 3%** under retained derived/paraxial iris semantics; exact aimed-rim working values at all 65 positions also trace, maximum difference +1.684312%, source values 4.162517/6.284091/7.403576. All 650 calls over 65 zooms×10 presets trace before/after. Source iris radii remain 5.292078/5.551134/5.571398 mm; no unpublished physical schedule is added.

Format chiefs ≥99% at 63/65; two widest 95.157254%/97.690100%, limited by S3/S23A. Source wide design Y 19.90 is below full-frame corner 21.65. Source paraxial half-angle vector launches yield image heights 18.096413/21.563698/21.780284 without clipping; no tuning reconciles paraxial labels with exact distortion. At current iris, 193-sample pupil bundles over 65×4 fields retain all axial 193. Fixed baseline-angle source edge counts 24/131/80→34/136/110; 65 sampled field counts improve, 166 unchanged, 29 decline at most 5 rays where native shoulders intercept peripheral paths. The runtime's adaptive wide edge expands, so its 9/193 count is a different-angle diagnostic. No production illumination is claimed.

Image-plane residuals after physical GB at source stations +0.001973/+0.045788/+0.041019 mm. Worst interpolated residual −4.885587 mm at zoom 0.296875, EFL 41.284103 versus display 49.627813 mm. Preserve source gaps; interpolation is illustrative and does not preserve focus. Finite focus remains unavailable and IS centered. Actual SVG comparison confirms both shoulders and native front caps; all 845 paths over 65 states are finite, closed, connected, with zero hidden trim. GB remains traced but hidden. Source fidelity, sampled runtime clearance and production correlation stay distinct.
