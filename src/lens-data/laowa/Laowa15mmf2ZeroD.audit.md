# Audit Log - Laowa 15mm f/2 Zero-D

Patent: US 2018/0149842 A1, Example 1

## 2026-06-24 - Full local patent audit

### Phase 1 - Glass, APD, and high-index status

- Reopened local `patents/US20180149842A1.pdf` and checked Example 1 against the data file. The patent table text layer is usable for the prescription values.
- Stored glass nd/vd rows match the patent table. No catalog relabels were made.
- Updated L5, L9, and L11 from `apd: false` to `apd: "inferred"` with a note that the 1.49700 / 81.61 ED assignment is a fluorophosphate-class inference only. The patent publishes no partial-dispersion values, so no dPgF or line-index constants were added.
- The inferred APD marking does not change the lens claim to APO; it records the ED glass class used by the chromatic correction strategy.

### Phase 2 - Prescription and SD check

- Checked Example 1 at f = 15.5 mm, Fno = 2.06, half-field = 54.7 deg. Stored radii, thicknesses, nd/vd rows, double-sided aspheres, and the published infinity / 0.020x focus interval match the patent source.
- Confirmed the intentional modeling reductions: the patent image-side cover plate is excluded from the surface list and folded into the air-equivalent back-focus spacing; the zero-thickness contact around the front fixed group is kept condensed in the data file.
- The patent does not publish semi-diameters or effective diameters. The existing SDs remain renderer estimates, not patent-listed clear apertures.
- The SD envelope was checked against the rendered patent drawing and prescription geometry. The large front meniscus, reduced waist through the ultra-wide front group, stop size, and moderate rear-group opening are visually rational for the 109.4 deg full-field patent design. No SD values were changed.

### Phase 4 - Analysis sync

- Updated `Laowa15mmf2ZeroD.analysis.md` to state that the three 1.49700 / 81.61 ED elements are marked as inferred APD while the patent itself provides only nd/vd.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 in local `patents/US20180149842A1.pdf` (table on PDF pp. 7–8, continued variable-gap table rendered on
  p. 8): surfaces 24–25 are an unlabeled plane-parallel plate, 2.0000 mm, nd 1.51680, νd 64.20; D(23) = 15.6837 /
  15.9816 mm (infinity / 0.020x); D(25) = 1.0000 mm in both states.
- Surface 23A and its `var` row now store the physical D(23) values; `rearPlates` carries the plate as N-BK7 (exact
  1.51680 / 64.2 catalog match) with gapAfter 1.0 mm. Paraxial check against the previous folded data: EFL identical
  and defocus unchanged at both focus keyframes (the old 18.00227 / 18.30017 values were exact folds).
- Physical track grows by 0.681 mm, the plate's t(1 − 1/n).

## 2026-09-24 — Semi-diameters raised to the traced format corner

Patent Example 1 prints f = 15.5, Fno = 2.06 and half angle of view ω = 54.7° (¶0033, PDF p. 7), and FIG. 2 (sheet 2,
PDF p. 3) labels its image-height axis 21.63 mm, 99.9% of the full-frame corner (21.65 mm), so the design covers the
format. The estimated rear rim of L12 (surface 23A, 9.0 mm) clipped the real chief ray (solved through the stop centre)
from 50.7°, leaving the analysis field at 90% of the corner. The traced corner chief ray (53.44°) needs surface
23A ≥ 9.53 mm; the value is floor + ~0.5 mm. Surface 22A, L12's front, was not scaled with it: the corner chief ray
crosses it at 8.11 mm, inside its 9.0 mm rim, and its conic (K = 1.1397) ends at 9.61 mm, so the validator rejects the
scaled 10.1 mm (conic height and rim slope). The next-tightest rims at the corner, 3A (9.76 mm vs 10.0) and 4A
(8.07 mm vs 8.3), clear and are unchanged. Scanned to 12.1 mm (1.2× the new sd), 23A's slope never changes sign; its
departure at the new rim is 1.08 mm. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 23A | 9.0 | 10.1 | corner chief ray 9.53 mm + clearance; aspheric, no turnover within 12.1 mm |

The validator accepts the new value, the traced edge now reaches 21.65 mm at 53.4° with every rim clear (100%), and the
image-circle floor still reports nothing undersized. The analysis quotes no semi-diameters, rim angles or rim
departures, so it needs no change.


## 2026-10-27 — Rimmer localization audit (asphere data)

Source: local `patents/US20180149842A1.pdf`, Example 1, PDF p. 7 (printed p. 2, paragraph 0033,
prescription rows 1–25 and aspheric rows 3/4/22/23), PDF p. 8 (printed p. 3, variable gaps and sag equation),
FIG. 1 on PDF p. 2, and FIG. 2 on PDF p. 3. Tables and equation were read from 220 dpi page images;
the aspheric table was additionally read from a 400 dpi crop. The text layer was used only for navigation.

| Location / field | Before | After | Finding / evidence |
|---|---|---|---|
| Prescription R, d, nd, vd; all four K/A4–A12 blocks | Printed Example 1 values | Unchanged | No transcription mismatch; all table rows checked, including surface 22 K = +1.1397. |
| `source.errata` | Absent | One `unresolved` entry | Literal source does not reproduce its own Fig. 2; no supported replacement isolated. |
| Data header | No higher-order source warning | Unresolved localization/aberration warning | Distinguishes paraxial agreement from source-plot disagreement. |
| Analysis, aspherical-elements discussion | Unqualified coefficient transcription | Adds source contradiction and rejected candidate | Numeric table remains the literal source; failed RI fields are qualified. |
| All inferred semi-diameters | Existing values | Unchanged | No turnover crossed, stated on-axis beam passes, corner chief ray clears; schematic figure does not justify a repair to the aberrations. |

### Prescription and convention

All R/d/nd/vd rows agree with the rendered prescription, with the intentional equivalent reduction of coincident
surfaces 10/11 into a single glass-to-glass interface. Surfaces 24/25 remain a physical 2.0 mm, nd 1.51680,
vd 64.20 rear plate followed by 1.0 mm air. The variable gaps remain D12 = 3.4480/3.1500 and
D23 = 15.6837/15.9816 mm (infinity/0.020x). The source prints radii and distances in mm at f = 15.5 mm;
there is no normalization or rescaling. Its sag equation explicitly has `(1+K)` and powers 4/6/8/10/12;
there are no omitted odd terms or even-order refits.

### Localization and source-plot contradiction

Fresh triage reproduces the baseline: no asphere is crossed beyond turnover. At 18.71 degrees, a meridional
pupil progression -0.95/-0.90/-0.85 gives image error -6.036/-4.770/-3.815 mm and surface-22 incidence
63/59/54 degrees: a smooth prescription error, not a slope reversal or isolated ray branch. These diagnostic
rays are ghost traces; they do not all clear every authored rim. The actual transmitted-cell vignetting sweep
first refuses RI at 11.9 degrees (`cosine-map-folds`), then at 17.8 degrees (`rays-not-localized`).

At pupil fractions 1/0.85/0.7/0.5, d-line LSA is +5.089/+2.280/+1.105/+0.423 mm, incompatible with FIG. 2's
+/-0.3 mm spherical-aberration axis. A separate scalar sag/Newton-intersection/vector-Snell trace using the
stored nd values and physical plate reproduces +5.089174/+2.279674/+1.105185/+0.422707 mm, independently
of the application tracer. The close-ray tangential/sagittal focus shifts reach +156.426/+5.657 mm at 33.40
degrees and -27.303/+113.038 mm at the 21.65 mm field edge, versus FIG. 2's +/-0.5 mm field-curvature axis.
Baseline distortion ranges from about -1.415% to +3.579%, inside the plotted +/-5% axis but with a different
trend from the mostly negative source curve. Paraxial EFL remains 15.5052 mm versus printed 15.5 mm;
paraxial agreement does not settle the aspheric block.

Read-only single-slip variants covered sign, x10, /10 and zero for every K/A4–A12 value, pairwise within-row
column swaps, polynomial-order shifts, row swaps/cyclic shifts, all K sign combinations, and the alternative
K-minus-one convention. Invalid variants were refused by the normal builder rather than forcing geometry.
No replacement met the two-kind source-evidence standard.

The strongest axial-only candidate, 22A K +1.1397 -> -1.1397, gives LSA
-0.080/-0.156/-0.152/-0.088 mm with unchanged EFL, but at 55.04 degrees gives image height 16.513 mm,
distortion -25.500%, and tangential/sagittal focus shifts -62.123/+8.909 mm. This contradicts the printed
54.7-degree field, FIG. 2's 21.63 mm image-height limit, and its +/-5% distortion and +/-0.5 mm field-curvature
axes. It was not applied. Merely improving RI through 49.2 degrees is not correction evidence.

### Rims and retained result

The source publishes no effective diameters. FIG. 1 is schematic and shows optical rims plus flat/stepped blank
edges; those mechanical edges are not clear-aperture measurements. The existing front-to-waist-to-rear envelope
was compared with the figure, but no reliable source-supported replacement was established. In particular, a
literal drawing scale would require caution at the front asphere's conic domain; it cannot override the printed
surface equation. The current rims pass the stated f/2.06 on-axis beam, and the 21.65 mm corner chief ray
clears at 53.4 degrees. The image-circle check finds no undersized surface and the surface validator accepts
the stored geometry. These checks establish clearance, not good localization.

| Asphere | Retained sd (mm) | Rim departure (micrometres) | Rim slope angle | Turnover within rim |
|---|---:|---:|---:|---|
| 3A | 10.0 | -250.4 | +18.4 degrees | None |
| 4A | 8.3 | -38.9 | +40.3 degrees | None |
| 22A | 9.0 | -1073.0 | -62.9 degrees | None |
| 23A | 10.1 | +1075.9 | -8.5 degrees | None |

Verdict: **errata-unresolved**. No numeric prescription or rim value was changed. The post-recording sweep
retains RI only at 0.0/3.0/5.9/8.9 degrees; later fields still have no RI. The coordinator should queue the lens
in Section G of the SD audit queue for priority/family-publication or original-design evidence and retain the
RI refusal. Queue files and shared code are outside this assignment's edit scope.

## 2026-10-29 — Nikon Z-mount source figure and glass reinspection

- Directly inspected original `patents/US20180149842A1.pdf`, Example 1: Figure 1 on PDF p. 2 at 600 dpi, and prescription, d-line definition, four aspheres and physical rear plate on pp. 7–8. All 12 elements, air faces and cemented boundaries were reviewed. The native 300 ppi first/last-vertex scale is about 14.82 px/mm; Figure 1 is schematic and does not resolve the pre-existing numerical asphere/aberration contradiction recorded above.
- Preserve the smaller optical caps and add opaque lands: S2 16.6→20.6 mm outer radius, S4A 8.3→10, and S22A 9→10.1 (`rimExtensionSd`). These restore the source's concave cap-end strokes using the opposite-face outer rim without growing clear aperture or extending a conic beyond its domain.
- Additional concave trims were tested on S6 and S9. Native figure shares are approximately q=0.81±0.008 (L3 rear, outer edge about 226 px) and q=0.92±0.011 (L5 front, about 181 px). Literal figure-share cuts intrude into traced beams: their maxima are 8.1028 and 8.8557 mm at focus 0 / field 33.46°. Move the cuts outward to `rimCutDepthMm` 1.90 and 1.19 mm, yielding clear radii 8.16495 and 8.93195 mm with lands to the retained 8.4 and 9.2 mm outer rims. Both satisfy the required 0.05 mm beam margin; neither depth is a patent measurement. No further resolved land was established; cemented interfaces are unchanged.
- Fresh glass check: all 12 element nd/νd pairs and the 1.51680/64.20 physical rear plate match the source. Every modeled medium retains a compatible catalog curve; labels remain coordinate proxies, not evidence of production supplier. Three 1.49700/81.61 ED/APD assignments remain inferred. The source prints no partial-dispersion/line-index constants or Sellmeier coefficients. No glass correction is supported.
- Verification: focused `audit:surface` passes including inferred-cut beams, `audit:image-circle` reports zero undersized surfaces, and `audit:aperture` remains within 3% with no rim limiter. Actual production SVG geometry has zero hidden trim across focus/zoom 0, 0.5, 1 and was rasterized and visually inspected. The pre-existing source-localization issue remains unresolved; neither clearance nor the new lands repairs its optical prescription.
