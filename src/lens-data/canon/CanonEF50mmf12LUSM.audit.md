# Canon EF 50mm f/1.2L USM — patent audit

## 2026-09-25 — MTF image-plane census

Source: local `patents/JP_2007333790_A.pdf`, Numerical Example 1, PDF p.10 and E=0 continuation on p.11. Visually checked all R1–R15 radii, all D1–D15 spacings, all eight nd/νd pairs, and the S14 asphere. Source A=0 (quadratic term), B=-1.44531e-6, C=2.50160e-10, D=-1.46123e-13, E=0 map to K=0 and A4/A6/A8/A10 without scaling. The stop is S7. No plate is listed. All authored values match the native-scale infinity source; the declared finite-focus reconstruction is not used for this comparison.

**Cause: source image-distance contradiction.** Independent EFL 51.695042273 mm agrees with printed 51.70, but Gaussian BFL 38.333791112 mm differs from printed D15=38.88. No single supported misprint explains that gap while preserving the matching prescription. The source does not establish that this is a designer best-focus offset; removed the earlier analysis assertion that it is known not to be a source error. Keep published values without tuning. Runtime offset **-0.546209 → -0.546209 mm**. Section E row deleted; no numerical change or changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
