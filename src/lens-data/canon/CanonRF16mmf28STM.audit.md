# Audit Log - CANON RF 16mm f/2.8 STM

Patent: JP 2022-085382 A, Numerical Example 3

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2022085382A.pdf`. The Numerical Example 3 table lists surface number, radius, thickness, refractive index, and Abbe number, but no clear-aperture or semi-diameter column.
- Fig. 5 shows the corresponding two-group ultra-wide layout: a moderate negative-front group, a smaller stop region, compact cemented rear groups, and the largest clear aperture on the final rear positive meniscus near the image plane.
- Stored SDs follow that silhouette: the front group steps from 9.5 mm down to 6.8 mm, the stop is 4.842 mm, the rear group grows through 6.3-9.5 mm, and the final element reaches 10.0-10.5 mm.
- No SD values changed. Current values remain inferred from paraxial marginal/chief-ray envelopes and constrained by edge thickness, rim slope, element SD ratio, and cross-gap sag clearance.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 3 (pp. 10–11) prints 半画角 47.84° and 像高 18.20 mm; the angle is the paraxial atan(Y/f) = atan(18.20/16.486),
and 図6 (p. 15) plots the aberrations to ω = 52.9°, the real field whose chief ray reaches Y (traced: 18.18 mm at 52.9°).
The data declared the paraxial 47.84° as `maxTraceFieldDeg`, which stopped the analysis field at 15.79 mm (73% of the
21.65 mm full-frame corner). As the one data fix allowed in this pass, `maxTraceFieldDeg` is now 52.9° (still below
fullFieldDeg / 2 = 54.08°). The design circle is 84% of the full-frame corner, so the rims were sized to pass the chief
ray to Y, not to the corner; at 52.9° only the final meniscus clipped it (surface 16 at 12.51 mm, surface 17 at
13.33 mm), and every rim ahead of it clears. Values are those heights plus ~0.5 mm with L9 scaled as one element from
surface 17. 図5 (p. 15), scaled on the 63.19 mm track, draws the last element at about 16 mm, consistent with (and
larger than) the new values; it was a cross-check only.

| Surface | Before | After | Justification                                           |
| ------- | ------ | ----- | ------------------------------------------------------- |
| 16      | 10.0   | 13.2  | L9 scaled with surface 17 (chief ray 12.51 mm at 52.9°) |
| 17      | 10.5   | 13.9  | chief ray 13.33 mm at 52.9° + clearance                 |

The validator accepts the new values. The census now reports the declared 52.9° edge at 18.18 mm (84% of the corner)
with a converged chief-ray solve and every rim clear; the remaining 16% is the design circle, which the production lens
fills with in-camera distortion correction. The image-circle floor still reports nothing undersized. The analysis note's
trace-field paragraphs now cite 52.9°; its rim departures for 14A and 15A are unchanged. The specs line's patent-trace
2ω now reads 105.8° (Fig. 6) instead of the paraxial 95.68°.

## 2026-10-30 — Original-PDF shape and glass review

- Fresh exact local JP2022085382A, Numerical Example 3 ¶0036 PDF pp 10–11, corresponding native Figures 5/6 p 15;
  definitions ¶0012 p 5/¶0018 p 6, focus ¶0027 p 8, source sag ¶0031 pp 8–9 and Table 1 p 13. Front page confirms
  Takumi Suzuki, Canon, filing 2020-11-27/publication 2022-06-08. Actual older audit dates remain intact.
- Tables are vector text inspected at 200 dpi; Fig 5 native 1323×812 at 403 ppi, Fig 6 native 1315×816 at 400 ppi, Table 1
  native 1788×1872 JPEG301 ppi. Direct native pixels, not upsampled evidence. Optical S1→S17 span≈836 px/50.65 mm
  and S1→IP≈1040 px/63.19 mm independently give≈16.5 px/mm; R1 rim sag confirms approximate isotropy. Contour
  endpoint uncertainty±.12–.18 mm, conservatively±.2 mm. Leaders/axis/brackets/focus arrows/IP excluded.
- Reviewed all 9 elements/16 refracting faces, both cemented junctions S9/S12, all concave ends and both full L8
  polynomials. No source hybrid layer/resin/molding identity. Adopted native contour SDs: S1=11.3, S2 clear 8.2/
  outer 11.3; S3=8.1, S4 clear 7.0/outer 8.1; S5/6=6.5; D1 S8–10=6.4; D2 S11–13=9.4; S14A/15A=10.7;
  S16/17=15.7. Former S11 was≈31% short. Both bonds now follow coextensive source outer rims, without opaque
  interface lands or disconnected wings. Outer shoulder annotations preserve resolved optical caps.
- Rejected full native S3≈8.3 trial: S2/S3 common-band 8.2 mm gives sag 3.364839 versus .90×3.67=3.303 allowed,
  physical air+.305161 mm. Adopted 8.1 gives 3.239480 mm sag and+.430520 mm air. Retained conservative source-outline
  discrepancy, no physical-overlap claim. All R/d/aspheres/stops/cams preserved, no guard changes/cuts/exemptions.
- All 9 source pairs retained with explicit d 587.56 provenance. Source g 435.835 defined, F/C named in vd formula,
  no numerical C/F/g, θ, ΔPgF or APD evidence. Removed 21 unsupported per-lens line indices;20 equal rounded
  catalog values, L6 nF differs one last digit. Eight existing compatible curves retained as qualified proxies;
  L8 remains unidentified medium/process. Historical supplier/melt/chemistry not established; PMo claims removed.
- Catalog design computed 16.4857→directly printed 16.48 mm. Runtime EFL16.485733, BFL12.546779 vs source 12.54,
  residual+.006779 mm, total 63.19; source nominalF2.90/canonical iris 4.674456 retained. All literal source R/d,
  nd/vd/asphere signs/coefficient magnitudes and all controls preserved.
- Source plotω52.9° and imageheight 18.20 retained; table 47.84° agrees with atan(Y/f), but source field convention
  remains an interpretation. Runtime 47.84→15.787362 mm,52.9→18.182875 mm,83.9856% generic full-frame radius 21.65.
  Runtime distortion−16.585% matches native Fig 6≈−16.5±.3%; no production digital-correction/crop proof. Generic
  corner≈59.1° beyond declared source field even though its chief now clears native-size rims.
- Source Figure 5 focus bracket spans L1–L8, excluding L9. Existing unit-BF visualization 12.54→16.83 also moves
  L9; retained as approximate, not source movement. No finite table. Near Gaussian object-to-image 125.331055 mm
  differs nominal 130 mm retail metadata; no new cam fitting. All 21 focus states checked with own iris/conjugate.
- All 1029/1029 axial and 63/63 chiefs clear over 3087 aimed pupil samples,0 unaimed,0 hidden trim; off-axis
  vignetting retained. Nine actual SVG paths finite/closed/connected. Narrow surface/image-circle/aperture pass,
  field limitation declared, no cuts. Actual SVG compared with native Fig 5 and both concave shoulders/bonds verified.
- Structured unresolved source notes: claim 9 p 2 lower bound 1.1 versus condition 8 p 6 .1/Table 1 Ex 3 .76; preferred
  condition 9 a/b p 8 zero denominator G2R1−G2R1 versus base/Table 1 G2R1−G2R2. Table 1 PD16.13 vs literal 16.12,
  νdn 65.44 vs rounded 65.40 and νdp 37.16 vs literal 37.2. Rounding hypothesis unproved, no optical replacements.
  Source/media fidelity, sampled runtime clearance and production correlation remain distinct. No dimensioned plate.


## 2026-10-31 — Source reference semantics and E48R catalog follow-up

Exact local original: JP 2022-085382 A, Numerical Example 3. Paragraph 0018 (PDF/printed p6) explicitly defines νd using Fraunhofer d/F/C indices. Paragraph 0031 (p8) links the numerical media to ndi/νdi and the table uses nd/vd; paragraph 0012 (p5) supplies d 587.56 nm and g 435.835 nm. This relies on the prescription notation and explicit Abbe definition, not the aberration-plot labels alone. Paragraph 0036, PDF/printed pp10–11, surface-data rows 1/3/5/8/9/11/12/14/16. All 9 modeled pairs were inspected again in the rendered original table; they match the existing data. No source filter, cover plate, additional bonded medium, numerical C/F/g index, partial-dispersion value or new APD evidence is present. Existing genuine fields and inferred badge qualifications are preserved.

The 9 `indexReferenceNote` strings were positive source citations, not uncertainty. Their references are preserved in the data header and these sidecars; the explicit `indexReference: "d"` remains. Removing the misused notes restores the inspector's established nd/νd labels and makes the media eligible for the reference-aware inventory. It does not change wavelengths, source pairs or the existing compatible catalog channels. No genuine reference-uncertainty note is removed.

The installed E48R curve comes from a [permission-bearing archival copy of the ZEON catalog](https://github.com/uasal/zmx2yaml/blob/36f3cd24da467375821b0a66698274fd84e19f6d/AGF_files/zeon.agf), with [Ansys's published ZEON-catalog attribution](https://community.zemax.com/got-a-question-7/lens-material-in-terahertz-spectral-range-780) supporting its vendor-origin provenance. It is an archival copy, not a direct vendor fetch. The unchanged polynomial evaluates nd=1.531160165 and νd=56.043827969; against source 1.53110/55.9 the differences are +0.000060165 and +0.143827969, within existing compatibility limits. Native valid range is 0.400–1.600µm at 25 °C. The curve supplies qualified spectral variation anchored to the authored source nd. It does not identify this lens's historical E48R grade, polymer chemistry, supplier, Canon formulation, molding or curing process. No catalog line indices or partials are copied into per-lens source fields.

Current spectral coverage is 9/9: 8 existing compatible identities and channel values are retained, and 1 former Abbe-only media now use E48R. Every d/G channel stays exactly at the source nd. The new R/C, B/F and V/g values are catalog proxies, never patent measurements. Zero numeric source, geometry, aperture, focus/zoom, asphere, stop, gap or source-errata values change.

Targeted continuity check only: Figure 5, PDF/printed p15, native 1323×812 at 403 ppi. Prescription/definition pages were rendered at 180 dpi; that raster scale is separate from the extracted native figure resolution. L8 is the complete independent doubly aspheric element R14*/R15*, 2.10 mm on axis. It is not a bonded coating or hybrid layer. Its existing 10.7/10.7 mm caps remain; no resin wing, land or geometry is added. Production SVG paths are exactly identical before/after across nine zoom/focus input combinations, with finite closed single connected paths and zero hidden trimming for the affected elements. Duplicate inputs are not additional supported physical states. No optical-rim dimension is remeasured or fitted in this follow-up.

The completed whole-lens shape review remains reused with its actual 2026-10-30 date and all earlier dates intact. Its field, interpolation, reconstructed-focus/IS, source discrepancy and production-correlation limits remain. This scoped source-reference/catalog check does not add a whole-lens shape review or certify the older runtime limitations.


| Element / source row | Printed nd / νd | Retained or added qualified curve | Δnd | Δνd (catalog nominal) |
| --- | --- | --- | ---: | ---: |
| L1 / R1 | 1.60311 / 60.6 | S-BSM14 (retained) | +0.000001907 | +0.041080 |
| L2 / R3 | 1.48749 / 70.2 | S-FSL5 (retained) | -0.000000065 | +0.036300 |
| L3 / R5 | 1.83400 / 37.2 | S-LAH60 (retained) | -0.000000207 | -0.040000 |
| L4 / R8 | 1.83481 / 42.7 | S-LAH55VS (retained) | -0.000000633 | +0.040000 |
| L5 / R9 | 1.90366 / 31.3 | S-LAH95 (retained) | -0.000000589 | +0.043100 |
| L6 / R11 | 1.68893 / 31.1 | S-TIM28 (retained) | +0.000000798 | -0.024550 |
| L7 / R12 | 1.59282 / 68.6 | FCD515 (retained) | +0.000004284 | +0.030000 |
| L8 / R14 | 1.53110 / 55.9 | E48R (added) | +0.000060165 | +0.100000 |
| L9 / R16 | 1.62299 / 58.2 | S-BSM15 (retained) | +0.000001900 | -0.034237 |

Private proof confirms canonical deep equality after excluding only glass labels and the positive bibliographic notes. All retained dispersion channels are exactly equal; source G/nd is exactly equal for every medium. New curve channels and the corrected inspector-label semantics are recorded separately from geometry. Focused formatting/diff checks are run on the nine owned files; full repository gates and reports are coordinator-owned.
