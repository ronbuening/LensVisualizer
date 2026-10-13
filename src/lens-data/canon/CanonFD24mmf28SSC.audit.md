# Audit Log - Canon FD 24mm f/2.8 S.S.C.

Patent: US 3,748,021, Example 2

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US3748021.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The vintage OHARA/Schott-equivalent class labels remain appropriate for a normalized older patent that gives optical constants rather than current catalog names.
- High-index E4 and E6 remain correctly documented as SF6/S-TIH6-class dense flints.

### Phase 2 - Retained-information audit

- The patent does not tabulate clear apertures. Existing SDs remain inferred from marginal/chief ray heights and renderer constraints after scaling the normalized patent example to 24 mm.
- Retained the patent-derived floating D4 focus behavior and paraxial 0.3 m close-focus BF solve.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Embodiment 2 prints 2ω = 84° (p. 7), and FIGS. 13–14 (p. 4) plot to ω = 42° at y = 0.882 f, which scales to 21.22 mm
(98% of the 21.65 mm full-frame corner); the traced chief ray reaches 21.46 mm at 42° and the corner at 42.2°. The
inferred front rims clipped the real chief ray (solved through the stop centre) at surface 1 from 38.8°, leaving the
field at 19.01 mm (88% of the corner). At the corner the chief ray crosses surface 1 at 17.55 mm and surface 3 at
13.65 mm; surface 4 (12.15 mm under its 12.2 mm rim) and every rim behind it already clear. Because the corner lies only
0.2° past the patent field, the rims were sized to the corner: values are the corner heights plus ~0.5 mm, with L2
(biconvex) scaled as one element from surface 3. L1 is a strong meniscus, and scaling surface 2 would pass its 0.9|R|
rim-slope limit; it already clears its 14.28 mm chief ray, so it is unchanged. FIG. 11 (p. 4), scaled on the 55.9 mm
vertex span, draws L1 at about 20 mm and L2 at about 17.5 mm, consistent with (and larger than) the new values; it was a
cross-check only.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 15.8 | 18.1 | corner chief ray 17.55 mm + clearance |
| 3 | 13.0 | 14.2 | corner chief ray 13.65 mm + clearance |
| 4 | 12.2 | 13.3 | L2 scaled with surface 3 (corner chief ray 12.15 mm) |

The validator accepts the new values (the surface 2→3 air space now reaches 82% sag intrusion, inside the 90% limit),
the traced field reaches the corner with every rim clear, and the image-circle floor still reports nothing undersized.
The analysis note quotes none of these semi-diameters, so it is unchanged.
