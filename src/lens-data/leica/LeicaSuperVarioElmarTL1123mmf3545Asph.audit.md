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
