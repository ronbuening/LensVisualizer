# Audit Log - Olympus Zuiko Auto-W 28mm f/2

Patent: US 3,862,794 A, Embodiment 2 / Table 2 / Claim 4

## 2026-07-30 - High-frequency glass-code review

- Visually rechecked the three `504668` rows at `nd = 1.50378`, `vd = 66.8`.
- No reviewed public coefficient row reproduces both coordinates within the runtime safety window. N-BK10 is not a
  defensible assignment because its d-line index is too far from the patent row.
- Retained the explicit unmatched `504668` annotation and the analysis warning against N-BK10. No supplier,
  partial-dispersion behavior, prescription geometry, stop, focus, or semi-diameter values changed.

## 2026-08-11 — Phase 92 HOYA PC1 recovery

- Visually rechecked US 3,862,794 Table 2 on rendered PDF page 8: L2, L3, and L4a are each
  `1.50378 / 66.8`.
- HOYA's official obsolete-inclusive catalog contains PC1 at `1.503779 / 66.887120`, effectively coincident with
  the patent coordinate and substantially stronger than the rejected N-BK10 proposal.
- Relabeled the three elements as PC1 optical equivalents and synchronized the analysis. The production supplier
  remains unspecified; no geometry, stop, focus, or semi-diameter values changed.
