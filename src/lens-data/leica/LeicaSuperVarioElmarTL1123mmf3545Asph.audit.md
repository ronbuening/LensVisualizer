# Patent and glass audit

## 2026-09-23

Source: local `patents/JP2016133764A.pdf`. Example 6 prescription, asphere and variable-gap tables on pp. 23–24 (¶¶0109–0113, text layer checked against the page); Table 1 condition values on p. 28; Fig. 6 (Example 6 wide and tele layouts) on p. 30; Fig. 14 aberration curves on p. 32.

The prescription was spot-checked and retained. Every R, d, nd and νd matches the printed rows. The three 0.010 mm cement layers are folded into the downstream elements as documented, and the four asphere coefficient sets and the W/M/T spacings match. The computed EFLs are 11.308, 16.834 and 22.366 mm against the printed 11.300, 16.822 and 22.347 mm. The small offset comes from the documented cement normalization. The stored element focal lengths match thick-lens values. The display name, 14/11 counts, `l-mount` / `aps-c` metadata and the calibrated `nominalFno` schedule are retained.

### Semi-diameters

Fig. 6 wide state was measured at 300 dpi. The scale is 0.1532 mm/px, taken from the first vertex (x = 1423) to the image plane (x = 2128) against the 108.032 mm wide-state track. Flat rim runs were read on both sides of the axis. Table 1 condition (3) gives R1/ωw = 0.392 at ωw = 51.489°, which implies R1 = 20.18 mm. Read as the first lens's effective radius, this is the patent-derived L1 front semi-diameter. A diameter reading (10.1 mm radius) is impossible, because the wide-end chief ray needs 16.2 mm at surface 1.

| Surface | Before | After | Evidence |
|---|---:|---:|---|
| 1 | 13.6 | 20.2 | Table 1 condition (3), 20.18 mm; figure flange top 22.0 mm; old value blocked the wide chief ray (16.2 mm) |
| 2 | 11.4 | 14.0 | Figure rear-surface end about 14.6 mm; rim-slope limit 15.0 on R = 16.711; wide chief ray needs 12.6 |
| 3A | 10.5 | 14.5 | Figure flat top 15.7 mm; wide chief ray needs 11.7; departure +1.211 mm at 14.5 |
| 4A | 9.35 | 12.0 | Figure about 14.5 mm, capped where the polynomial slope levels off near 43°; departure −0.334 mm; wide chief ray needs 10.0 |
| 5 | 9.1 | 10.8 | Figure L3 rim about 11.6–11.8 mm |
| 6 | 8.7 | 10.2 | Figure about 11.6; limited by the 6→7 gap intrusion (0.95 mm of 1.057 mm at 10.5) |
| 7 | 8.55 | 10.2 | Figure L4 about 11.1–11.2; same gap limit |
| 8 | 8.2 | 10.5 | Figure L4 about 11.1 |
| 22 | 7.2 | 7.5 | Figure D2 about 7.4–7.8 |
| 23 | 7.0 | 7.4 | Figure D2; shared cemented rim |
| 25 | 6.55 | 7.2 | Figure D2 rear about 7.4–7.8 (old value 14 % small) |
| 26 | 6.55 | 8.0 | Figure D3 about 8.6–9.0; capped by L13 edge thickness (about 0.7 mm at 8.0, negative near 8.6) |
| 27 | 6.4 | 8.0 | Shared cemented rim |
| 29 | 6.55 | 8.0 | Figure D3; old value blocked the middle/tele chief ray (6.9 mm) |

Gr2 (surfaces 10–21A) is retained. The figure reads 6.4–8.0 mm there, within about 10 % of the stored 6.95–8.3 mm.

After the change, the surface validator reports no errors (edge thickness, rim slope, gap intrusion) at all three zoom states, and the image-circle floor check passes. In the exact meridional trace, nothing clips the axial beam and nothing blocks the chief ray at the middle and tele stations at Y = 14.2 mm. The same holds at the wide station's reachable field (44.7°, real image height 10.47 mm). Before the change, surfaces 1–4A blocked the wide-end chief ray and surface 29 blocked the middle/tele chief ray. The only remaining vignetting is ordinary rear-group side vignetting (at most 30 % at D2).

Open limitation: at the wide end the prescription cannot reach the printed 14.2 mm image height with real rays. The printed ω = 51.489° equals atan(14.2 / 11.3), a paraxial value, and Fig. 14(C) shows about −10 % distortion at 14.2 mm. Chief rays steeper than about 44.9° miss surface 2 (R = 16.711, nearly hemispherical), so the modeled wide-end real image height is about 10.5 mm. This is recorded as a source/model property, not a transcription error.

### Glass

L2 (1.80866 / 40.41) was `Unmatched (...)`. It is relabelled as an explicit spectral proxy for OHARA L-LAH84 (catalog 1.80835 / 40.55, Δnd −0.0003, Δνd +0.14; vendor Sellmeier in the catalog), with the patent nd/νd kept. No vendor glass is closer: HOYA MC-NBFD135 is 1.80834 / 40.92 and Sumita K-VC89 is 1.8100 / 40.95. The low-Tg (moldable) reading is an inference from L2's two strong aspheres, not a patent statement. All other elements already resolve to catalog glasses with the exact coordinate (Δnd ≤ 2e-7, Δνd ≤ 0.06). No APD flags are claimed.

Live localhost view was not checked in this pass: the browser pane could not open a tab.

## 2026-09-23 — Live diagram review

Source: local `patents/JP2016133764A.pdf`, Example 6 data on pp. 23–24 (¶0112 various data), zoom-motion text ¶0068 (p. 12), Fig. 6 (p. 30, wide and tele layouts with m1–m4 arrows), re-rendered at 600 dpi (0.0766 mm/px, from the 108.032 mm wide-state track). The live page was read in the local dev server; the browser pane was hidden, so screenshots were unavailable and the rendered SVG was inspected through its element geometry and labels instead.

### Zoom and focus order

Zoom stations are ascending (11.300 / 16.822 / 22.347 mm) and every `var` row is ordered wide → middle → tele, matching ¶0112. Group travel was reconstructed from the stored gaps with the image plane fixed. Gr1's front vertex sits 47.8 / 38.3 / 34.7 mm (gap sum) ahead of the Gr1 rear, so Gr1 moves toward the image. Gr2 (with the stop) moves 20.5 → 25.9 → 30.6 mm from the image, Gr3 moves 19.0 → 23.0 → 26.1 mm, and Gr4's BF grows 15.54 → 19.71 → 22.71 mm, so Gr2–Gr4 move toward the object. d8 decreases, d21 increases, d25 falls then rises (3.476 → 3.313 → 3.398) and BF increases. That matches ¶0068 and the Fig. 6 arrows exactly. No reversal was found.

The patent names no focus group for any example and publishes infinity states only (focusing appears only in the generic camera-control text, ¶0060). Keeping the gaps identical at both focus endpoints is therefore correct, and no focus direction can be checked. `focusDescription` was rewritten in plain words; the old one began with an internal status token.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| `nominalFno` | 3.603174 / 4.18708 / 4.614821 (calibrated model values) | 3.6 / 4.183 / 4.61 | ¶0112 printed Fno.; playbook requires the patent values |
| Aperture model | fixed iris (sd 5.497) | `zoomApertureModel: "from-nominal-fno"` | Without it the fixed iris gave f/3.60 / 4.07 / 4.47, so the M/T stations were displayed about 0.1 stop too fast. The builder now infers 5.537 / 5.405 / 5.405 mm iris radii and reproduces f/3.6 / 4.183 / 4.61 |
| STO `sd` | 5.497332 | 5.54 | Largest (wide) inferred iris radius, 5.537 mm |
| `fstopSeries` | starts at 3.5 | starts at 3.6 | f/3.5 is not reachable at the printed f/3.6. `maxFstop` stays at the default 16; the production minimum aperture could not be confirmed from a Leica source in this pass |
| specs chip | MODEL F/3.603-4.615 | F/3.6-4.61 | Printed values |
| sd 12 (L6 front) | 7.5 | 7.1 | Fig. 6 D1 rim about 6.6 mm (stored 14 % large); now within 0.05 mm of the D1 junction rim 7.05 |
| sd 16 / 17 (L8) | 7.15 / 7.55 | 7.0 / 7.1 | Fig. 6 L8 about 6.7 mm |
| sd 18 / 19 (L9) | 8.1 / 8.3 | 7.5 / 7.6 | Fig. 6 L9 about 7.3 mm |
| sd 20A / 21A (L10) | 8.3 / 8.25 | 7.8 / 7.8 | Fig. 6 L10 about 7.7 mm, equal to D2 (7.7) in the drawing |
| L4, L7, L9 `apd` | false | "inferred" | 497816 is the N-PK52A / H-FK61 / S-FPL51 fluor-phosphate class with positive ΔPgF; the patent does not say ED |
| L6, L8 glass label | "high-index low-dispersion class" | "high-index lanthanum dense flint class" | νd 35.25 is a dense lanthanum flint (TAFD35 coordinate); label resolves to the same catalog Sellmeier |

The Gr2 trim changes the rendered order to match the drawing. Before, L9 and L10 stood about 0.8 mm taller than D2; now L10 is roughly level with D2 and D3 is the tallest rear element, as in Fig. 6. L5 (6.95, figure 6.8) and the D1 junction and rear rims (7.05, figure 6.6) were retained. Gr1, Gr3 and Gr4 values from the first pass were rechecked against the 600 dpi render and retained. D3 is still about 10 % below the figure (8.0 vs 8.9 mm), capped by L13 edge thickness.

### Checks on the result

The surface validator reports no errors at all three zoom states, and the image-circle floor check passes. In the exact meridional trace at the printed F-numbers, nothing clips the axial beam and nothing blocks the chief ray at the middle and tele stations (Y = 14.2 mm) or at the wide station's reachable 44.7° field (10.47 mm). Off-axis side vignetting at L9–L10 rises from about 15–22 % to about 29–32 %, comparable with the existing D2 value (27–31 %). The asphere departures at the new rims are +0.017 mm (20A, at 7.8 mm) and +0.179 mm (21A, at 7.8 mm); the analysis table was updated. All 14 elements still resolve to catalog glasses with Sellmeier data (L2 through the documented L-LAH84 proxy), so the colour trace uses real dispersion. Element `type` strings match the R signs. The aspheric markers sit on 3A, 4A, 20A and 21A only. The D1–D3 and Gr1–Gr4 ranges match the patent group table (¶0113).

Open limitations retained: the wide-end real field stops at about 10.5 mm image height (surface 2 near-hemisphere), the SDs are modeled, and the iris schedule is inferred from the F-numbers rather than published.

## 2026-09-24 — Surface 2 raised to pass the patent's wide field

JP 2016-133764 A Example 6 prints ω = 51.489° at the wide end with y'max = 14.200 mm (¶0112, PDF p. 24); the angle is
the paraxial atan(14.2 / 11.3), and Fig. 14(C) shows about −10% distortion there. The real chief ray at 51.489° (solved
through the stop centre) lands at 12.79 mm, 90% of the APS-C corner, so the wide end relies on distortion correction and
12.79 mm is its design image height. The 14.0 mm surface-2 rim clipped that chief ray, which crosses it at 14.22 mm, so
the wide analysis field ended at 87.7% of the corner (12.43 mm). The 2026-09-23 note that chief rays miss surface 2 past
about 44.9° no longer matches the current trace: the chief ray reaches surface 2 at every field up to the corner, and
the rim, not a miss, stopped it. Surface 2 takes its floor + ~0.5 mm; L1 is a strong meniscus, so surface 1 (20.2 mm,
from condition (3)) is unchanged. Reaching the full APS-C corner would need a 55.19° field and surfaces 1/2/3A/4A of at
least 21.07/14.93/14.66/12.51 mm, which the patent does not support.

| Surface | Before | After | Justification |
|---|---|---|---|
| 2 | 14.0 | 14.8 | wide chief ray at the printed ω = 51.489° crosses it at 14.22 mm + clearance; 62.3° rim |

The validator accepts the new value and the image-circle floor still reports nothing undersized. The wide analysis field
now runs to 53.0° (13.34 mm, 94% of the corner), stopped by the 4A rim; the middle and tele stations still reach 100%.
The data header and the analysis paragraph on the wide-end real field were updated to match.
