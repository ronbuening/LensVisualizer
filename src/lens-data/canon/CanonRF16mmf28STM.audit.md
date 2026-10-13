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

| Surface | Before | After | Justification |
|---|---|---|---|
| 16 | 10.0 | 13.2 | L9 scaled with surface 17 (chief ray 12.51 mm at 52.9°) |
| 17 | 10.5 | 13.9 | chief ray 13.33 mm at 52.9° + clearance |

The validator accepts the new values. The census now reports the declared 52.9° edge at 18.18 mm (84% of the corner)
with a converged chief-ray solve and every rim clear; the remaining 16% is the design circle, which the production lens
fills with in-camera distortion correction. The image-circle floor still reports nothing undersized. The analysis note's
trace-field paragraphs now cite 52.9°; its rim departures for 14A and 15A are unchanged. The specs line's patent-trace
2ω now reads 105.8° (Fig. 6) instead of the paraxial 95.68°.
