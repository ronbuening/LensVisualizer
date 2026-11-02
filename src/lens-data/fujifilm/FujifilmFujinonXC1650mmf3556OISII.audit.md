# Audit Log — Fujinon XC 16-50mm f/3.5-5.6 OIS II

Patent figure: `US20140368925A1.pdf, p. 2 Fig. 1 (Example 1, wide)` in local `patents/`.

## 2026-09-27 — Source figure, glass, and metadata audit

### Semi-diameters

The exact source section was inspected at 600 dpi. Optical curve endpoints, not rectangular blank shoulders, leaders, rays, or movement arrows, control the comparison. Values remain estimates rather than published clear apertures.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---:|---:|---|
| 1 | 14.65 | 20.2 | Exact figure optical rim, capped by surface/gap geometry |
| 2 | 14.15 | 17.9 | Exact figure optical rim, capped by surface/gap geometry |
| 3 | 13.45 | 17.9 | Exact figure optical rim, capped by surface/gap geometry |
| 4 | 8.65 | 13.1 | Exact figure optical rim, capped by surface/gap geometry |
| 5 | 7.35 | 8.5 | Exact figure optical rim, capped by surface/gap geometry |
| 6A | 6.95 | 9.5 | Exact figure optical rim, capped by surface/gap geometry |
| 7A | 6.95 | 9.5 | Exact figure optical rim, capped by surface/gap geometry |
| 8 | 7 | 9.1 | Exact figure optical rim, capped by surface/gap geometry |
| 9 | 6.75 | 9.1 | Exact figure optical rim, capped by surface/gap geometry |
| 18 | 6.7 | 8.6 | Exact figure optical rim, capped by surface/gap geometry |
| 19 | 6.85 | 8.6 | Exact figure optical rim, capped by surface/gap geometry |
| 20 | 6.65 | 10 | Exact figure optical rim, capped by surface/gap geometry |
| 21 | 6.85 | 10 | Exact figure optical rim, capped by surface/gap geometry |
| 22 | 8.65 | 13.9 | Exact figure optical rim, capped by surface/gap geometry |
| 23 | 8.8 | 13.9 | Exact figure optical rim, capped by surface/gap geometry |

Figure scale was approximately 0.0428 mm/pixel at 600 dpi. The OIS arrow falsely inflated the L34 screening measurement; 16A/17A retain their constrained radii. Surface 5 at 9.5 mm fails both slope and gap constraints; 8.5 mm preserves clearance. Larger G1, G2, G4, and G5 rims follow the visible curves. The stop was retained.

### Glass classification

Catalog curves are coordinate-compatible spectral proxies, not evidence of production suppliers or historical melts. Patent nd/vd values are unchanged.

| Element | nd / vd | Runtime catalog curve |
|---|---|---|
| L11 | 1.92286 / 18.9 | S-NPH2 |
| L12 | 1.83481 / 42.73 | S-LAH55 |
| L21 | 1.883 / 40.76 | S-LAH58 |
| L22 | 1.58254 / 59.47 | Unresolved; patent-coordinate fallback |
| L23 | 1.94595 / 17.98 | FDS18 |
| L31 | 1.80348 / 40.44 | Unresolved; patent-coordinate fallback |
| L32 | 1.8 / 29.84 | S-NBH55 |
| L33 | 1.497 / 81.54 | S-FPL51 |
| L34 | 1.58517 / 59.41 | Unresolved; patent-coordinate fallback |
| L41 | 1.618 / 63.33 | S-PHM52 |
| L42 | 1.54072 / 47.23 | S-TIL2 |
| L5 | 1.71299 / 53.87 | S-LAL8 |

Removed catalog-derived authored nC/nF/ng values so the runtime resolver supplies qualified catalog dispersion rather than presenting it as measured patent evidence.

L22 (1.58254/59.47), L31 (1.80348/40.44), and L34 (1.58517/59.41) have multiple nearby catalog candidates, without source evidence establishing a unique curve. They remain unresolved rather than assigning the nearest index alone.

### Rear plate

Table 1: restored the source 11.95 mm air gap and 2.85 mm PP (nd=1.51680, vd=64.20). The source does not list the final image gap. Retained the prior inferred image plane using 2.421486317 mm after PP; this gap is not claimed as published.

### Display and metadata

Normalized display capitalization and retained distinguishing product suffixes. Patent-to-production correlation remains qualified. Assignee spelling follows the existing catalog identity.

Updated all quoted aspheric rim departures in the analysis to the revised SDs.

### Local-site re-review — 2026-09-27

Compared the rendered local-site diagram directly with the exact local patent figure cited above, including optical rims, element order, aspheric marks, cemented membership, labels, and glass colors. Existing SDs are retained: no further optical-rim discrepancy warrants enlarging apertures into source blank shoulders, bevels, or constrained aspheric rims.

Wide/intermediate/tele order remains 16.49 / 27.98 / 48.56 mm. With G5 fixed, G1 starts at -62.29 / -74.44 / -95.43 mm; G2 at -55.02 / -59.20 / -66.65 mm; G3 at -28.29 / -39.33 / -51.10 mm; G4 at -9.70 / -20.74 / -32.51 mm. All move objectward toward tele, with G3 and G4 traveling together, agreeing with Fig. 1 and Table 2. The focus slider stays disabled: the source identifies L41 focusing, but supplies no finite-focus spacing law.

L22 now uses HIKARI Q-SK52S as a qualified spectral proxy (catalog nd/vd=1.58286/59.51; residual +0.00032/+0.04). L34 uses OHARA L-BAL43 (1.58572941/59.69698; residual +0.00055941/+0.28698). Both vendor curves already exist in the catalog; no duplicate entry was needed. Catalog coverage improves from 9/12 to 11/12; L31 remains unresolved. Removed three remaining catalog-derived authored ng values on L21/L42/L5 so they cannot appear as source measurements. L33 gains an inferred APD tag from the S-FPL51 curve (delta PgF about +0.0308).

Validation: surface, image-circle, and traced field-coverage audits passed. The batch render sweep covered 918 zoom/focus states with zero hidden rim trim; catalog consistency and mismatch checks passed. Full typecheck, formatting, lint, 287 test files / 2,833 tests, and production build passed. The existing changelog is unchanged. Fuji capitalization and Minolta translated corporate-style aliases now have shared metadata regression guards; distinct historical entities remain separate.


## 2026-10-27 — Rimmer localization audit (asphere data)

US 2014/0368925 A1, Example 1: PDF p. 64 (printed p. 10), Tables 1–3 and ¶0176–0179; PDF p. 63, ¶0171–0175; PDF p. 2, Fig. 1; PDF p. 14, Fig. 13 A–L. Prescription pages were rendered at 220 dpi, with coefficient and R/d crops at 400 dpi; the relevant optical rims in Fig. 1 were inspected at 600 dpi.

- Table 3: all six surface columns (6, 7, 11, 12, 16, 17), every KA and A3–A20 sign, mantissa and exponent agree with the data. KA=1 maps to K=0 under the printed sag equation; h is radial height, lengths are in mm, and scale s=1 requires no coefficient rescaling. All odd terms are already present; there is no even-order refit to replace.
- Table 1: all R and fixed d rows 1–25, stop row 10, the 12 lens media nd/vd pairs, and the PP medium agree. The rows at 3, 9 and 21 correctly refer to variable gaps. In particular row 10 d=1.30, row 20 R=-18.1159, row 23 d=11.95, and row 24 d=2.85 / nd=1.51680 / vd=64.20 agree with the print. Table 2 DD(3), DD(9), DD(21) arrays are [0.70,8.67,22.21], [14.58,7.72,3.40], [2.20,13.24,25.01]. No transcription edit is needed.
- Table 2 summary: f=16.49/27.98/48.56 mm, F No.=3.60/4.54/5.59, and 2ω=89.6/54.8/32.2°. Computed EFL=16.4894/27.9834/48.5754 mm remains consistent with the existing source-rounding tolerance. Tables 1–2 do not print a trailing image gap, separate numerical image-height row, absolute back-focus row, or total-length row. The existing 2.421486317 mm trailing PP gap remains explicitly inferred.
- Fig. 13 uses ±500 µm spherical/astigmatism axes and ±20% distortion axes. Marginal on-axis LSA is -0.075/+0.086/+0.122 mm for wide/intermediate/tele; wide pupil fractions 1/0.85/0.7/0.5 give -0.075/-0.079/-0.045/+0.004 mm. Close-ray tangential/sagittal shifts remain within approximately -0.111…+0.208 mm across the stations, and edge distortion is -13.443/-2.301/+0.972%. The signs, scale and curve character agree qualitatively with Fig. 13 A–C, E–G and I–K. This is a visual plot comparison, not a digitized tolerance claim; no source contradiction warrants a coefficient-slip search or a source erratum.
- Fig. 1 supplies no effective-diameter column. L22, L31 and L34 have square-cut optical rims and ordinary biconcave/biconvex profiles, rather than designed gull-wing edges. Their arrow and leader ink is excluded. The polynomial turnover rule controls the inferred clear rims even if the drawing extends farther.

| Surface | Field | Before | After | Evidence / decision |
|---|---|---:|---:|---|
| 6A | sd (mm) | 9.5 | 9.1 | Paired with 7A; retain the square L22 rim in Fig. 1. |
| 7A | sd (mm) | 9.5 | 9.1 | First slope reversal at 9.12919 mm; round down at its existing 0.1 mm precision. |
| 12A | sd (mm) | 6.15 | 5.9 | First slope reversal at 5.90779 mm; cap at 5.90, matching unchanged 11A. |
| 16A | sd (mm) | 6.65 | 5.75 | First slope reversal at 5.75366 mm; round down at 0.01 mm precision. |
| 17A | sd (mm) | 6.55 | 5.75 | Its reversal is at 6.12390 mm; common L34 rim takes the stricter 16A limit. |

The cause is rim-past-turnover, primarily 16A. At wide field 26.87°, the y=-1 aimed pupil ray reaches 16A at h=6.37 mm, beyond its 5.75366 mm slope reversal, and arrives 12.9142 mm from the chief-ray image point; its neighbouring y=-0.95 ray reaches h=6.07 mm and misses by 4.9396 mm. Every failing wide-angle field includes rays crossing 16A beyond turnover; some outer-field rays also cross 17A beyond turnover. The coordinator’s stronger claim about every failing ray is not universal: at 44.78°, y=-0.50 reaches 16A at 5.72 mm and 17A at 5.95 mm, both below their separate turnover heights, yet misses by 2.7229 mm (referred deviation about 0.055). The square L34 cap excludes that ray at 17A because 5.95 mm exceeds the common 5.75 mm rim; the cap follows the figure and turnover rule, rather than being fitted to that ray. Intermediate fails at 24.7° and 27.4° through the same zones; tele has no localization refusal. The printed coefficients are retained, and only inferred semi-diameters change under the SD procedure Step 6.

Exact roots were bracketed on a 0.01 mm scan and bisected using the engine sag derivative. The coordinator's coarse 5.77/5.92/6.13/9.14 mm turnover estimates are therefore screening upper samples, not safe cap values. Before editing, the proposed SD substitutions passed canonical surface validation and a scratch candidate retained all stated on-axis beams. The maximum stated-ray heights over the three stations are 3.8772/4.0723/5.0441/5.0342/4.5044/4.3997 mm at 6A/7A/11A/12A/16A/17A, all below their final rims. L31's 11A remains 5.9 mm; 6A follows 7A solely to keep L22 square. L34 takes its common height from 16A.

The engine-profile silhouette was compared before/after with the 600 dpi Fig. 1 crop: caps remove the unphysical edge reversals, keep the three elements square, and retain the source's element order and ordinary profiles. Other inferred rims were retained.

| Surface | Rim departure before → after (µm) | Absolute rim angle before → after |
|---|---:|---:|
| 6A | -671.495 → -549.423 | 27.50° → 20.21° |
| 7A | -810.280 → -563.228 | 28.13° → 1.28° |
| 11A | -94.293 → -94.293 | 16.91° → 16.91° |
| 12A | +26.659 → -7.885 | 8.72° → 0.17° |
| 16A | +626.293 → +105.198 | 60.58° → 0.04° |
| 17A | -201.075 → +96.384 | 54.11° → 11.06° |

The stored-data surface validator accepts the new geometry. The aperture audit remains iris-limited at the stated 3.60/4.54/5.59 targets, with no axial rim limitation. Image-circle and traced field-coverage checks accept all published stations; corner chief rays remain clear. The vignetting probe at infinity now supplies RI at every sampled field at zoomT=0, 0.5 and 1. Wide maximum referred deviation falls from 0.5247 to 0.0214; intermediate falls from 0.2595 to 0.0179; tele remains about 0.0015. Wide edge RI is 0.393 with transmitted fraction 0.469, intermediate edge RI is 0.809 with fraction 0.909, and tele remains 0.896 with fraction 1.000. Reduced outer-field throughput is expected from the inferred caps.

The analysis rim-departure table and aperture/illumination prose now use the revised values. The header records turnover-limited, inferred apertures. No R, d, nd, vd, coefficient, zoom gap, stop target or image-plane inference changed. No source.errata entry is warranted by this rim-estimation finding. Numerical RI availability remains a model result, not production illumination validation. The coordinator retains responsibility for repository-wide gates and delivery; no source-errata queue is needed from this audit.
