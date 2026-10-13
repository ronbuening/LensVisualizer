# Audit Log - Olympus H.Zuiko Auto-W 24mm f/2.8

Patent: US 3,884,556, Embodiment 4 / Claim 5

## 2026-08-11 - PBH25 catalog recovery

- Rendered local `patents/US3884556.pdf` page 10 and visually confirmed Embodiment 4 lists the L5a glass at
  `nd = 1.7618`, `vd = 27.1`.
- The discontinued OHARA PBH25 row is `1.761797 / 27.1077` with the same 762271 code. This distinguishes it from the
  lower-Abbe SF14 family that motivated the earlier unmatched disposition.
- Relabeled L5a as a PBH25 catalog equivalent while leaving Olympus's production supplier unspecified. No geometry,
  focus, stop, or semi-diameter values changed.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Embodiment 4 (cols. 5–6, Claim 5) is normalized to f = 1.0 (scaled ×24 here). FIG. 11B–C (Sheet 4, PDF page 5) plot
its astigmatism and distortion to ω = 42°, and col. 1 (Summary of the Invention) gives the family's field angle as 84°
to 92°, so the design is meant to cover 2ω = 84°; with its ≈ −2% distortion the chief ray at 42° lands at 21.20 mm and
reaches the full-frame corner (21.65 mm) at 42.55°. The estimated surface-3 rim (10.0 mm) clipped the real chief ray
(solved through the stop centre) from 39.4°, leaving the analysis field at 89% of the corner (19.26 mm). The corner
chief ray crosses surface 3 at 11.11 mm (10.90 mm at the patent's ω = 42°) and clears every other rim, so surface 3
takes floor + ~0.5 mm. Its partner, surface 4 (R 9.98), was not scaled: L2 is a strong meniscus, surface 4 already
sits at its 4→5 cross-gap limit (8.35 mm fails, 3.42 mm against 3.363 mm allowed), and the corner chief ray crosses it
at 7.64 mm, inside its 8.29 mm rim. L2's front/rear SD ratio therefore rises from 1.21 to 1.41, above the 1.25 target
of the original reconstruction; the analysis's semi-diameter section and the data-file header now say so. FIG. 3
(Sheet 1) was inspected but not measured: it draws L2 with a stepped flat flange, so its outline is not the optical
extent.

| Surface | Before | After | Justification |
|---|---|---|---|
| 3 | 10.0 | 11.7 | corner chief ray 11.11 mm (10.90 mm at ω = 42°) + clearance; surface 4 unchanged at its cross-gap limit |

The validator accepts the new value (spherical surface, sd/|R| 0.29). The traced field now reaches 42.55° and
21.65 mm, 100% of the corner (it was 39.4° / 19.26 mm, 89%), with every rim clear (surface 3 by 0.59 mm, surface 4 by
0.65 mm). The image-circle floor still reports nothing undersized.
