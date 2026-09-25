# Audit Log - FUJIFILM FUJINON XF18mmF2 R

Patent: US 2014/0240851 A1, Example 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20140240851A1.pdf`. The patent publishes Example 4 prescription, asphere data, Fig. 4 section, and Table 17 effective-radius conditions, but no full clear-aperture table.
- Table 17 provides effective-radius terms Re1/Re2 for the L7 aspherical conditions; the data file uses those as anchors while estimating the rest of the renderer clear apertures.
- Fig. 4 shows a moderate front group, a smaller stop-adjacent middle section, and L8 as the largest rear member. Stored SDs follow that run: front surfaces are about 6.5-7.6 mm, the narrow central/rear aspheric section reaches 4.8-6.5 mm, and final L8 grows to 7.0-8.0 mm.
- No SD values changed. Current values remain inferred from the patent figure, Table 17 effective-radius anchors, f/2 stop geometry, edge thickness, and cross-gap sag checks.

## 2026-07-29 - Catalog-coordinate correction

- Rechecked Example 4 in local `patents/US20140240851A1.pdf`; S3 remains 1.83400 / 37.16 and its R/d row is
  unchanged.
- S3 `S-LAH55V (OHARA)` -> `S-LAH60 (OHARA)`, the exact same-vendor coordinate. Synchronized the L2 element
  discussion and glass table; the distinct L8 S-LAH55VS row was not changed.

## 2026-09-24 — Cover glass PP modeled as `rearPlates`

- Table 7 (PDF p.21) lists surface 16 (R −30.0118, d 7.80), then the optical member PP as surfaces 17–18: 2.70 mm,
  nd 1.516330, νd 64.14, with no distance printed after surface 18. The data stopped at surface 16, so the modeled
  image plane sat 7.80 mm behind L8, 4.9929 mm short of the prescription's paraxial focus (air back focus 12.7929 mm
  from surface 16).
- Added `rearPlates` PP (2.70 mm, nd 1.51633, νd 64.14, S-BSL7 catalog label). With no printed trailing gap,
  `gapAfterMm` = 12.7929 − 7.80 − 2.70/1.51633 = 3.212 mm puts the image plane at that focus. Surface 16 keeps
  d = 7.80 mm and its focus `var` (7.80 → 10.00 mm) as the physical gap to PP.
- Paraxial check with the engine's first-order solver: EFL stays 18.6260 mm, and the image plane now sits 13.7120 mm
  behind surface 16 against a paraxial focus at 13.7123 mm (defocus −0.0003 mm; it was −4.9929 mm). Before the fix
  every focus setting imaged a virtual object. The close-focus endpoint now images an object 0.208 m from the image
  plane against the 0.18 m `closeFocusM` label; the 2.20 mm extension was left unchanged.
- The physical track from surface 1 to the image grows from 37.62 to 43.53 mm (42.61 mm air-equivalent).
- Suspected misprint, not changed: Table 7 prints d12 = 2.40 mm, but four independent checks fit d12 ≈ 3.2 mm. The
  printed f = 18.844 mm is reproduced at d12 ≈ 3.21 (the printed 2.40 gives 18.626). Table 17's TL/Xd = 1.392 needs
  Xd ≈ 30.6 mm (2.40 gives 1.429). FIG. 4 (PDF p.3, 15.39 px/mm at 200 dpi, S1–S12 and S13A–S16 exactly to scale)
  draws d12 as 3.18 mm. The same sheet draws 2.37 mm from PP to the image, which is the paraxial trailing gap for
  d12 = 3.2 (2.38 mm). If d12 is corrected, `gapAfterMm` must drop to about 2.38 mm.

## 2026-09-24 — Semi-diameters raised to the traced format corner

The aberration diagrams (FIG. 12) run to ω = 41.7°, and the traced chief ray reaches the 14.175 mm APS-C corner at
40.92° with the printed d12, so the design covers the corner. The estimated L8 rims clipped the real chief ray (solved
through the stop centre) from 35.6°, first at surface 16, leaving the analysis field at 86% of the corner. The corner
chief ray needs S15 ≥ 8.53 and S16 ≥ 9.53 mm; values are floor + ~0.5 mm, each surface set by its own traced height. The
validator now also accepts the patent's Table 17 effective radii for L7 (Re1 = 5.800 mm on S13, Re2 = 6.956 mm on S14),
so S13A/S14A take them. The old 4.8 mm S13A cap came from the S12–S13A gap-intrusion check, which runs at the smaller
rim and now binds S12 (4.8 mm) alone. Nothing in the render collides: L6's outer ring (S11 at 5.5 mm) stays clear of the
larger S13A rim, and the render-diagnostic overlap is 0. At those radii the stored aspheres reproduce Table 17's sag
differences (1.001 vs 1.002 mm on S13, 1.318 vs 1.318 mm on S14). `--scan` shows no turnover on S13A to 6.96 mm; S14A
turns over only near 7.7 mm. FIG. 4 draws L8 to 12.0 mm. It also draws L7 as an 8.5 mm outline, well outside Table 17's
effective radii, so its outlines include blank beyond the clear aperture, and the figure served only as an upper bound.

| Surface | Before | After | Justification |
|---|---|---|---|
| 13A | 4.8 | 5.8 | patent Table 17 effective radius Re1 = 5.800 mm; validator now accepts it |
| 14A | 6.5 | 6.956 | patent Table 17 effective radius Re2 = 6.956 mm |
| 15 | 7.0 | 9.1 | corner chief ray 8.53 mm + clearance |
| 16 | 8.0 | 10.1 | corner chief ray 9.53 mm + clearance |

The validator accepts the new values, the traced edge now reaches 14.18 mm at 40.9° with every rim clear, and the
image-circle floor reports nothing undersized. The analysis now quotes the S13A/S14A departures at the new rims
(+1001.333 and +1317.520 µm), the plate-inclusive track and back focus, and the Table 17 radii as data values.
