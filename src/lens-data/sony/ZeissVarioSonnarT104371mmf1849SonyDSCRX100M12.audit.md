# Lens integration audit — ZeissVarioSonnarT104371mmf1849SonyDSCRX100M12.data

## 2026-09-18 — Repository integration and glass audit

Corrected maker Zeiss to Sony and the display prefix to SONY ZEISS, preserving the lens brand and RX100/II camera association. This removes the spurious zeiss maker slug that failed the metadata/runtime parity test. All seven glasses already resolve to compatible curves.

### Semi-diameter figure audit

Reviewed local US 2013/0314585 A1, PDF page 10, Fig. 9 wide panel at 600 dpi. Excluded the front mechanical flange. The first-to-last optical vertex span provides a scale of approximately 0.14 mm per pixel in the 1500-pixel-high page preview. Reduced front surfaces 1A/2A from 16.3/12.65 mm to 12/10 mm and the following positive element 3/4 from 12.6 mm to 11 mm to preserve the group outline. Remaining optical rims are consistent within drawing uncertainty. Recomputed the front aspheric departures; Table 9 on PDF page 22 independently confirms the glass coordinates. All values remain estimated clear apertures, not published manufacturing dimensions. The stop aperture and source prescription are unchanged.

All six final `audit:surface` runs passed; `audit:image-circle` found no undersized surfaces in the five lenses with canonical image formats. The Ultra Prime has no canonical Super 35 image-format id, so its image-circle audit is skipped; its explicit projection diameter remains 31.14 mm.

### Catalog verification

The original run failed two metadata tests (non-romanized inventors and an unregistered maker slug). Both were corrected without weakening tests. The catalog coefficient consistency test and all eight glass-report suites passed. Batch resolution is 63/67 elements; the remaining four are Jena L6, RX10 L4 and the DSC-R1 composite layers. Global strict coverage is 8120/8735 surfaces (93.0%), with zero catalog mismatches.

Manufacturer attribution follows ZEISS’s 2015 partnership explanation (Sony manufactures Sony/ZEISS lenses), reproduced at https://www.sonyalpharumors.com/zeiss-explains-what-photographers-should-know-about-the-sony-zeiss-partnership/ with the original ZEISS link https://blogs.zeiss.com/photo/en/?p=6131. This is independent of the patent-assignee field.

Local browser review covered wide, middle and telephoto states with on-axis rays enabled. The updated optical silhouettes render without visible crossings.

Production `computeElementRenderDiagnostics()` reports zero SD trim at zoom 0, 0.25, 0.5, 0.75 and 1 at both focus-control endpoints.

Final repository validation: typecheck, formatting, lint and all 2,717 tests across 276 files passed. Production build prerendered 1,397 pages and generated sitemap/RSS feeds; only the existing large-chunk advisory remained.

## 2026-09-18 — Local-site diagram follow-up

Compared live wide/mid/tele diagrams with local US 2013/0314585 A1, PDF page 10, Fig. 9 and page 22, Tables 9-12. Retained the previously corrected front SDs. Corrected L11's displayed type to biconcave negative: Table 9 gives R1=-72.2917 and R2=+16.0439, consistent with Fig. 9, despite the general prose calling it a meniscus.

Enabled the existing from-nominal-fno zoom aperture model. The former fixed wide-end iris did not implement the authored f/1.86, f/3.469 and f/5.07 schedule. The local site now shows stop diameters of about 8.68, 6.64 and 6.97 mm at wide/mid/tele. These are exact-ray-derived physical apertures, not published iris measurements.

Zoom is correctly ordered: GR1 moves imageward then reverses, GR2 and GR3 move objectward, and GR4 moves imageward. The disabled focus control correctly limits the model to published infinity-focus states. L22 and L23 now display their existing S-LAH55 and E-FD4 spectral proxy names with production identity unconfirmed.

Follow-up validation: typecheck, formatting, lint and all 2,717 tests in 276 files passed; the production build prerendered 1,397 pages. Glass reports retain 63/67 resolved batch elements and zero catalog mismatches. All six surface audits pass, the five applicable image-circle audits report no undersized surfaces, and renderer diagnostics report zero SD trim at five zoom positions and both focus-control endpoints. No additional changelog entry was added.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 3 Table 9 and Table 12 on PDF page 22 at 160 dpi: D15 = 5.065 / 4.371 / 3.625 mm; surfaces 16–17 are a
  0.300 mm plate, nd 1.516798, νd 64.1983, then 0.150 mm air; surfaces 18–19 are a 0.500 mm plate, nd 1.556708,
  νd 58.5624, then 1.000 mm to IMG. Paragraph 0102 names the stack filter SG; both plates carry that label, in order.
- Surface 15A and its `var` rows now store the printed D15. Glass: N-BK7 (1.51680 / 64.17) and OHARA BAL15Y
  (1.55671 / 58.68), both coordinate-compatible; no θgF is printed.
- Paraxial check against the previous data: EFL identical and defocus unchanged (max difference 7e-15 mm) at all three
  zoom states, since the old 1.668975685986314 mm fold was computed exactly. Physical track grows by 0.281 mm.

## 2026-10-27 — Rimmer localization audit (asphere data)

Patent: local US 2013/0314585 A1, Example 3. Read PDF page 22, Tables 9–12 at 220 dpi,
Table 10 again at 400 dpi; page 19, paragraphs 0059–0061 at 300 dpi; page 10, Figure 9
and pages 11–13, Figures 10–12 at 220 dpi, with the GR2/GR3 rims enlarged at 400 dpi.

| Field / location | Before | After | Evidence / decision |
|---|---|---|---|
| All numerical prescription fields and semi-diameters | Existing values | Unchanged | Tables 9/10/12 match; no rim violates the turnover or on-axis-beam rules. |
| Data header | No localization qualification | Published fields, remaining failure and mask caveat recorded | Table 11 and paragraph 0102, PDF p. 22; exact-ray probes. |
| Analysis | Coefficient/SD tables and general source-plot description | Added field-boundary, localization and source-plot comparison section | Source and model evidence kept separate. |

### Printed prescription and asphere review

- Table 10 rows 1, 2, 6, 7, 12, 13, 14 and 15: every sign, mantissa, exponent and K
  matches the data and analysis coefficient tables. All K values are zero; only A4, A6,
  A8 and A10 are printed. Paragraphs 0060–0061 use the standard `(1+K)` sag equation,
  ordinary even powers and no normalization; there is no missing odd term or refit.
- Table 9 rows 1–20: every stored R/d/nd/νd agrees. Row 5 is the omitted inactive
  zero-thickness flat air plane; row 11 is STO, with D10=2.590 and D11=0.650 mm at wide.
  Rows 16–19 retain both SG plates and their physical gaps; row 20 is IMG.
- Table 12: D4=25.677/11.421/2.700, D11=0.650/1.952/1.070,
  D13=5.953/14.438/29.463 and D15=5.065/4.371/3.625 mm all agree.
- Table 11: f=11.007/19.615/35.426 mm and Fno=1.860/3.469/5.070 agree.
  The source half-fields are 32.979/21.631/12.525 degrees, whereas the format-based tab
  reaches 41.63/22.76/12.77 degrees. No separate image-height, back-focus or total-track
  summary is printed in Tables 9–12; plate-to-image and physical track follow Table 9.

### Rims and ray behavior

Figure 9 publishes no effective-diameter column or mask opening. The existing front
12/10 and 11/11 mm rims retain the earlier flange-excluding figure audit. The GR2/GR3
optical outlines support retaining the present approximate rims; no greater-than-25%
figure discrepancy was established. Triage finds 1A's turnover near 14.27 mm beyond its
12.0 mm rim and 15A's near 10.35 mm beyond its 9.8 mm rim. Other aspheres have no detected
turnover within the scanned range. The 6A rim slope is 53.2 degrees at 8.6 mm; no cap is
required. The on-axis beam clears the authored rims at all published zoom stations.

At field 29.74 degrees, upper meridional pupil fractions 0.80/0.85/0.90/0.95/1.00 give
image-plane errors 0.278/0.483/0.762/1.117/1.544 mm. This is smooth peripheral growth,
without a turnover crossing. The final ray reaches 6A at 8.13 mm and 13A at 2.66 mm.
The on-axis marginal ray needs 13A radius 3.44 mm, so a smaller centered circular mask
would sacrifice the stated f/1.86 beam. The undimensioned mask in paragraph 0102 remains
omitted and is not claimed as a demonstrated fix.

### Source plots and localization result

Figures 10–12 use ±0.2 mm spherical/field-curvature axes and ±15% distortion axes.
Relative marginal on-axis LSA is −0.024/+0.066/+0.091 mm at wide/middle/tele, with the
same sign and scale as the d-line plots. At the published half-fields the traced
T/S shifts are −0.027/+0.010, −0.227/−0.097 and −0.240/−0.182 mm; distortion is
−11.80/−3.24/−1.14%. The plot trends agree qualitatively, but Figure 10's approximate
edge T/S values (−0.15/−0.02 mm) are not quantitatively reproduced. The format-corner
wide field gives T=−0.859 mm and distortion −18.88%, outside Figure 10's plotted scales.
This evidence does not isolate a printed coefficient error or a unique replacement.

The tab result is unchanged: wide fields 29.7 and 32.7 degrees refuse RI, with maxDev
0.0601 and 0.0551. All other sampled wide fields have RI figures, including the more
strongly vignetted outer fields. A diagnostic frozen-wide copy capped to Table 11's
32.979 degrees still refuses RI at 26.983/29.981/32.979 degrees, maxDev
0.05017/0.06099/0.05207. Capping the field is therefore not a localization repair.
All sampled middle and telephoto fields have RI figures; their maximum deviations are
below 0.0007. Surface validation accepts the retained geometry, the aperture audit finds
no clipped stated on-axis beam, and the image-circle audit finds no undersized surface.
Those checks do not establish localization or patent-edge performance.

### Follow-ups

Verdict: model limitation, with the in-field localization cause unresolved. Preserve the
printed prescription and estimated rims. A zoom-aware source-field boundary needs shared
schema/analysis work: rectilinear projection bounds currently accept only single values,
so setting the wide angle globally would overextend the other zoom stations. Investigate
ray aiming/localization and the source's wide field/plot conventions; obtain independent
mask dimensions before modeling a blocker. No source erratum is asserted or corrected,
and no queue or shared engine file was edited in this lens-scoped assignment.
