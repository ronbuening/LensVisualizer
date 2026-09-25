# Audit Log - Canon EF-S 10-22mm f/3.5-4.5 USM

Patent: US 2005/0286139 A1, Numerical Fifth Embodiment

## 2026-06-25 - Canon folder patent audit

### Source note

- The exact patent PDF was missing from the local `patents/` tree at the start of this pass. The Google Patents PDF link was fetched to `patents/US20050286139A1.pdf` and validated with `pdfinfo` before use.

### Phase 1 - Glass corrections

- Rechecked the local PDF, data file, and analysis sidecar.
- No glass label changes were needed. N14 remains `Unmatched fluorophosphate crown (485700; nearest OHARA S-FSL5 class)` because the patent constants do not round-trip to a sourceable catalog entry.
- High-index L1/L3/L4 dense-flint rows remain correctly represented by nd values and glass labels.

### Phase 2 - Retained-information audit

- Confirmed the source still omits D9; retained the documented D9 = 3.50 mm paraxial reconstruction.
- The patent does not publish clear apertures. Existing SDs remain estimates from ray envelopes, drawing proportions, edge thickness, and the narrow 0.05 mm air gap constraint.

### Phase 3 - Spectral / metadata enrichment

| Element | Field | Before | After | Justification |
|---|---|---|---|---|
| N10 | `apd` / `apdNote` | omitted | `inferred` | S-FPL51 UD fluorophosphate member of the L4a chromatic-correction doublet. |
| N12 | `apd` / `apdNote` | omitted | `inferred` | S-FPL53 Super-UD fluorophosphate singlet matching Canon's production special-glass description. |

## 2026-09-24 — Semi-diameters raised to the traced format corner

The Fifth Embodiment (¶0107, tables pp. 22–23) gives ω = 52.9° at 10.3 mm, and FIG. 10A (p. 10) plots the wide end to
Y = 13.6 mm, 96% of the 14.175 mm APS-C corner; the printed angle is paraxial, and the traced chief ray reaches Y at
53.5° and the corner at 54.6°. The estimated front rim clipped the real chief ray (solved through the stop centre) at
surface 1A from 42.3°, leaving the 10.3 mm station at 9.23 mm (65% of the corner); the 15 mm and 21.4 mm stations already
reached their corners. Only surface 1A clips: the chief ray crosses it at 23.70 mm at Y and 24.45 mm at the corner, and
every other rim clears the corner chief ray (surface 2 at 16.09 of 16.8, surface 3 at 12.68 of 13.0). The rim was sized
to the corner rather than to Y because FIG. 9 (p. 10), scaled on the 96.76 mm wide-end vertex span, draws G11 at about
25.5 mm, and its drawn surface 1A sag (≈ 4.7 mm) matches the computed sag at that height. Surface 2 was not scaled with
1A: it already sits at 0.89|R| and clears its chief ray.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1A | 17.0 | 25.0 | corner chief ray 24.45 mm + clearance (FIG. 9 ≈ 25.5); the asphere's slope rises monotonically to 30 mm (29.9° at the rim) |

The validator accepts the new value, all three zoom stations now reach the corner with every rim clear, and the
image-circle floor still reports nothing undersized. The analysis note's 1A departure at the adopted semi-diameter was
recomputed: +4.349 mm at 25.0 mm (was +1.237 mm at 17.0 mm).
