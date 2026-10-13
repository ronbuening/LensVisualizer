# Audit Log - Fujifilm XF 200mm F2 R LM OIS WR

Patent: US 2019/0265504 A1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20190265504A1.pdf`; local text confirms the queued 1.80000 / 29.84 rows.
- Updated the 911/353 L5 row to `TAFD35 (HOYA)`.
- Updated the 800/298 L7 and L19 rows to `S-NBH55 (OHARA)`.
- The lens is now fully covered by trusted Sellmeier data.

## 2026-09-23 — First-added diagram audit, lens 78

Source: local `patents/US20190265504A1.pdf` (US 2019/0265504 A1). Pages used: front page, sheet 1 (FIG. 1, Example 1 at infinity and close range, 300 dpi native scan), page 14 (paragraphs [0054]–[0063]), page 15 (Tables 1–3), page 16 (Example 3 Tables 7–9, for the embodiment comparison), and page 17 (Table 13).

### Re-verified and retained

- Every Table 1 row matches the stored R, d, nd and νd, including surfaces 1–34 and the stop as surface 15 with d = DD[15]. There are no aspheres. The data is stored at the patent's native scale.
- The paraxial EFL is 194.015 mm at infinity and 181.530 mm at the close state (patent 194.01 / 181.53 mm). Every element `fl` matches its thick-lens value within 0.05 mm.
- The PP plate (2.85 mm, nd 1.51680) plus 1.10 mm is folded into the last gap as 31.1415 mm air-equivalent. The paraxial BFD is 31.152 mm, so the defocus is −0.010 mm.
- Focus: G2 is the only moving group. It moves 11.55 mm toward the object: DD[15] goes from 18.63 to 7.08 mm and DD[18] from 4.92 to 16.47 mm. The patent publishes only two states, so no `focusPositions` are needed.
- Group and element counts are 14 and 19. The patent front-page fields (number, kind code, sole inventor Hiroki Saito, assignee FUJIFILM Corporation, 2019) are correct. All 19 glass labels resolve to catalog glasses compatible with the patent nd/νd.
- Table 13 (Example 1) gives D20/L 0.069, f/f3 −0.149, f3ois/f3r −0.904, νdop 17.47 and νd1 32.10, as the analysis states.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| L1a sd (S1/S2) | 58.6 | 48.8 | FIG. 1 rim 48.9 mm. The old 117 mm diameter exceeded the 105 mm filter thread. Axial marginal ray is 47.09 mm. |
| L1b sd (S3/S4) | 53.3 | 47.5 | FIG. 1 rim 47.6 mm. The old 106.6 mm diameter also exceeded the filter thread. |
| D1 sd (S5/S6/S7) | 42.7/44.7/44.7 | 38.8/38.8/37.6 | FIG. 1 L1c 38.7 mm, L1d 37.5 mm. Old L1d was 19 % oversize. |
| D2 sd (S8/S9/S10) | 36.9/37.4/37.4 | 33.5/33.5/32.5 | FIG. 1 L1e 33.5 mm, L1f 32.5 mm. |
| L1g, L1h sd | 26.5, 25.1 | 24.4, 23.0 | FIG. 1 24.3 and 22.9 mm. Real-ray axial marginal is 24.08 mm at S11. |
| STO sd | 20.2 | 20.4 | Real-ray f/2.06 iris radius is 20.37 mm; FIG. 1 shows 20.3 mm. |
| L3a sd (S19/S20) | 18.3 | 15.0 | FIG. 1 14.8 mm (old value 22 % oversize). |
| L3b/L3c sd (S21/S22) | 15.3 | 13.0 | FIG. 1 12.9 mm. S23 stays at 10.9 mm to clear the 1.89 mm gap to L3d. |
| L3g, L3h, L3i sd (S30–S34) | 17.2/17.2/18.0/18.0/16.3 | 15.2/15.2/15.4/15.4/15.0 | FIG. 1 15.1, 15.2 and 14.8 mm. |
| `nominalFno`, `fstopSeries` | 2.0, starting at 2 | 2.06, starting at 2.06 | Patent Table 2 FNo is 2.06. |
| `maxFstop` | default 16 | 22 | The series already listed f/22 (production minimum aperture), but the slider stopped at f/16. |
| `type` of L1d, L1f, L3c, L3d, L3f, L3i | Negative Meniscus | Biconcave Negative | Each has R1 < 0 and R2 > 0. |
| `apd` of L1b, L1c, L1e, L3b | "patent" | "inferred" | The patent lists θgF but never calls any element ED or anomalous-dispersion. |
| `dPgF` | 6 approximate values | all 19 computed as θgF − (0.6438 − 0.001682νd) from the patent's θgF column | For example, L1b is +0.0494 (was +0.0457) and L1c/L1e are +0.0308 (was +0.030). |
| L3c glass | "S-LAL59 / S-LAL18 family" | "S-LAL59 (OHARA, 734 515)" | S-LAL18 is a 729/547 glass and is not coordinate-compatible. |
| Close-focus wording | patent 1.57 m vs production 1.8 m | the two agree | The stored close gaps focus an object 1572 mm from S1 (calculated). Object-to-image this is 1.79 m, so `closeFocusM` stays 1.8. |
| Header / analysis | old SD method, stop note, 1.57 m "discrepancy", uniqueness of Example 1, exact-match glass claims, Δθ values | rewritten | Example 3 has the same 19/14 topology, so the embodiment choice is plausible but not uniquely proven. |

The G2 sd (21.2/21.2/20.7 mm) is retained even though FIG. 1 draws about 19.2 mm. At the close state the doublet sits 7.08 mm behind the iris, where the paraxial f/2.06 marginal ray is 19.6 mm high.

### Checks on the result

- The surface validator reports no errors. The image-circle check shows 0 undersized surfaces.
- At f/2.06 every real-ray axial marginal ray clears its rim. The tightest margins are S11 (0.3 mm) and S8 (0.7 mm). No surface blocks the chief ray at Y = 14.2 mm, where ω = 4.15°.
- Full-field vignetting reaches about 30 % of one pupil side at the front and about 57 % at the rear relay. This is consistent with FIG. 1's drawn off-axis bundle.
- The engine derives FOPEN 2.06, a 20.37 mm stop radius and maxFstop 22.
- The local page at infinity and 1.8 m shows the silhouette in FIG. 1 proportions. The focus-movement overlay shows G2 travelling 11.55 mm toward the object with G1 and G3 fixed.

### Open limitations

- Example 1 versus Example 3: the production lens cannot be told apart by element, group or ED counts.
- The patent publishes no effective diameters, so the rims are figure-derived to about ±0.3 mm.
- Glass names are coordinate equivalents. L3e and L3h are Δνd 0.03 and 0.05 from the named OHARA glass.
- The off-axis ray view was not checked in the live page, because it needs a click.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 on PDF page 15 (rendered at 200 dpi): surface 34 d = 28.1625; surfaces 35–36 are the optical member PP, 2.85 mm, nd 1.51680, νd 64.20, θgF 0.53430; surface 36 → image is 1.10 mm. The legacy fold 31.1415 mm reproduces 28.1625 + 2.85/1.5168 + 1.10 = 31.1414 mm.
- Surface 34 now stores the patent's 28.1625 mm, with `rearPlates` PP labelled N-BK7 (exact 1.51680 / 64.2 row; OHARA S-BSL7 is the 1.51633 variant), dPgF −0.0015 from the printed θgF, and gapAfter 1.10 mm. The focus gaps DD[15]/DD[18] are ahead of the plate and unchanged.
- Paraxial check against the previous data: EFL identical; defocus changes by 0.00004 mm at infinity and at the close state (rounding in the old 31.1415). Physical track grows by 0.971 mm and now equals the 218.997 mm printed-sum length the analysis quotes.
