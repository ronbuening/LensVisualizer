# Audit Log - Olympus M.Zuiko Digital ED 12-100mm f/4.0 IS PRO

Patent: JP2017-090535A, Numerical Example 1

## 2026-06-24 - Olympus patent glass-code audit

### Patent evidence

- Reviewed local patent file `patents/JP2017090535A.pdf`.
- Numerical Example 1 confirms L4 at nd = 1.88227, vd = 37.18 and the existing zoom/spacer table. The patent does not publish mechanical clear apertures.
- The retained asphere coefficients, zoom spacings, surface geometry, focus-unit metadata, and inferred SDs were left unchanged.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L4 / S6 | `M-TAFD307 / MC-TAFD307-class (HOYA, moldable)` | `882372 - M-TAFD307 / MC-TAFD307-class (HOYA moldable high-index; no exact public catalog match)` | Same HOYA moldable high-index family, normalized to the six-digit code label because no exact public coefficient-backed row is available. |

### APD, high-index, and SD review

- No APD status changes: the patent excerpt reviewed lists nd/vd and asphere/zoom data but no partial-dispersion metadata for L4.
- L4 remains the dual-surface aspherical high-index variator element; the label now avoids an exact-catalog claim.
- No SD change: existing inferred apertures remain consistent with the zoom patent drawing and the data-file note that clear apertures are not patent-published.

### Analysis sync

- Updated the L4 element paragraph and glass summary row.

## 2026-09-24 — Surface 6A raised to pass the patent's wide field

Numerical Example 1 prints 2ω = 83.05° at the wide end, f 12.36 mm (JP 2017-090535 A ¶0271, PDF p. 33). IH is defined
(¶0268) but not printed for this example; the real chief ray (solved through the stop centre) at ω = 41.53° lands at
9.76 mm, 90% of the Four Thirds corner, while the middle and tele fields reach the corner. So the wide end relies on
in-camera distortion correction, and 9.76 mm is its design image height. The 12.5 mm rim of surface 6A clipped that
chief ray, which crosses it at 12.81 mm, so the wide analysis field ended at 88.1% of the corner (9.53 mm). Surface 6A
takes its floor + ~0.5 mm; its partner 7A (R 14.12, the concave rear of the L4 meniscus) carries 9.78 mm of that chief
ray against its 10.2 mm rim and is unchanged.

| Surface | Before | After | Justification |
|---|---|---|---|
| 6A | 12.5 | 13.4 | wide chief ray at the printed ω crosses it at 12.81 mm + clearance; no turnover to 16.1 mm |

The validator accepts the new value and the image-circle floor still reports nothing undersized. The wide analysis field
now runs to 43.0° (10.20 mm, 94% of the corner), where 6A clips again; the middle and tele stations still reach 100%.
The 6A departure at the new rim is +144.9 µm (was +91.1 µm at 12.5 mm); the analysis paragraph and table were updated.
