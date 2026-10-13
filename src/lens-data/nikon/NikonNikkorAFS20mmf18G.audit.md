# Audit Log — Nikon AF-S NIKKOR 20mm f/1.8G ED

Patent: JP 2016-021011 A, Example 4

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12r / S4 | `glass` | `Patent UV-cure resin (514/530)` | `514530 — patent UV-cure resin (nd=1.51380, νd=53.0)` | Local patent `patents/JP2016021011A.pdf`, Example 4 row 4 lists nd=1.51380 and νd=53.0. No public glass-catalog coefficient row was found for this UV-cure resin, so the unbroken code is retained for future auto-upgrade. |
| C1 / S9 | `glass` | `Patent cement layer (514/428)` | `514428 — patent cement layer (nd=1.51400, νd=42.8)` | Example 4 row 9 lists nd=1.51400 and νd=42.8. Public catalog search found no coefficient-backed optical cement match. |
| C2 / S19 | `glass` | `Patent cement layer (514/428)` | `514428 — patent cement layer (nd=1.51400, νd=42.8)` | Example 4 row 19 repeats the same 0.01 mm cement medium. |

### Catalog-search disposition

- Searched public catalog/refractiveindex.info-style sources for `514530`, `514428`, and the exact nd/νd pairs; results were non-optical or did not provide defensible coefficients.
- No catalog entries were added.

### Analysis sync

- Updated the analysis text to cite `514530` and `514428` as future-upgrade code labels.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold with the patent's physical rear stack from Example 4 (PDF p. 17 table, p. 18 fB):
  d28 = 36.31 mm, then a 2.00 mm plate (surfaces 29–30, nd 1.51680, νd 64.2; J-BK7A class, no patent designation)
  and fB = 1.00 mm. The close-focus d28 keeps the file's paraxial 0.20 m solve: 44.003394 − 2 / 1.5168 − 1 =
  41.684829 mm, so the image plane is unchanged.
- Paraxial check against the previous data: EFL identical and defocus unchanged at infinity and close focus (worst
  |Δ| 4e-15 mm; the old fold was exact). Physical track grows by 2.00 × (1 − 1/1.5168) = 0.681 mm and now equals the
  patent TL of 125.31 mm.

## 2026-09-24 — Semi-diameters raised to the traced format corner

JP 2016-021011 A Example 4 (PDF pp. 16–18) prints f = 20.6 mm, F = 1.86 and 2Y' = 43.2 mm, so the design covers the
FX corner (21.65 mm). Two defects were fixed. Corner: the estimated front rims clipped the real chief ray (solved
through the stop centre) from 36.95°, leaving the analysis field at 70% of the corner (the corner chief ray could not
be aimed past 41.6°); with the rims opened it solves at 47.15° and needs surface 1 ≥ 21.28 and surface 2 ≥ 17.15 mm.
Aperture: a real ray at the entrance-pupil edge crosses surfaces 14–21 at 11.84/11.86/12.30/12.20/11.80/11.58/11.57/
11.37 mm and surface 24 at 10.52 mm at the design f/1.86, and at 12.28/12.31/12.81/12.73/12.26/12.05/12.05/11.81 and
10.99 mm at the model's wide-open f/1.8 (nominalFno; EP = EFL/3.6). The stored 4.5/3.8/11.0/6.3/6.3/9.0/9.0/11.0 and
10.0 mm rims cut that bundle to about f/5.6, and because the edge ray clipped, buildLens fell back to the paraxial stop
height (10.80 mm instead of the real 11.23 mm). The triage's 11.26/11.27/11.15/11.12 mm at surfaces 14/15/17/18 are
the paraxial f/1.86 heights; the real ray also crosses surfaces 16, 21 and 24 above their rims. Figure 4 (PDF p. 21)
is drawn to scale: at 300 dpi the 86.0 mm surface-1-to-28 track spans 507 px (0.170 mm/px), the unchanged L25/L26 read
within ~5% of their rims, and it draws L21 at ≈13.2, L22 at ≈13.3 and the L23/L24 doublet at ≈12.8 mm, more than 25%
above the stored rims and in line with the f/1.8 marginal floor. Surfaces 14–21 and 24 take that floor + ~0.5 mm
rounded up; surfaces 1–2 take the corner floor + ~0.5 mm. STO is unchanged.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 16.0 | 21.8 | corner chief ray 21.28 mm + clearance |
| 2 | 13.8 | 17.7 | corner chief ray 17.15 mm + clearance (rim angle 54.7°) |
| 14 | 4.5 | 12.8 | f/1.8 marginal ray 12.28 mm + clearance; Figure 4 L21 ≈13.2 mm |
| 15 | 3.8 | 12.9 | f/1.8 marginal ray 12.31 mm + clearance; Figure 4 L21 ≈13.2 mm |
| 16 | 11.0 | 13.4 | f/1.8 marginal ray 12.81 mm + clearance; Figure 4 L22 ≈13.3 mm |
| 17 | 6.3 | 13.3 | f/1.8 marginal ray 12.73 mm + clearance; Figure 4 L22 ≈13.3 mm |
| 18 | 6.3 | 12.8 | f/1.8 marginal ray 12.26 mm + clearance; Figure 4 L23/L24 ≈12.8 mm |
| 19 | 9.0 | 12.6 | f/1.8 marginal ray 12.05 mm + clearance (cemented junction) |
| 20 | 9.0 | 12.6 | f/1.8 marginal ray 12.05 mm + clearance (cemented junction) |
| 21 | 11.0 | 12.4 | f/1.8 marginal ray 11.81 mm + clearance |
| 24 | 10.0 | 11.5 | f/1.8 marginal ray 10.99 mm + clearance; partner surface 23 stays 12.0, as Figure 4 draws L25 |

The validator accepts the new values. Outside the cement and resin layers the thinnest glass edge is now L22, 0.80 mm
at 13.3 mm, and the largest rim angle is surface 2 at 54.7°. The traced edge reaches 21.65 mm at 47.15° (100%), the
image-circle floor still reports nothing undersized, and the f/1.8 on-axis bundle passes every rim with at least
0.41 mm (the unchanged surface 27 is tightest) at infinity and close focus, so buildLens now real-traces the stop at
11.23 mm. Left alone: Figure 4 draws L11 at ≈25.4 mm, 16% above the new 21.8 mm and at the edge of the ~15% noise
band, so the traced floor stands; surfaces 6 (20.0 mm, drawn ≈16.9) and 12/13 (20.0 mm, L16 drawn ≈15.0) are larger
than drawn and were not shrunk. The analysis quotes none of the changed values and is unchanged.
