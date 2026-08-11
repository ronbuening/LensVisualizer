# Audit Log - MINOLTA AF 80-200mm f/2.8 APO

Patent: JP1989-039542 A, Example 1

## 2026-08-11 - Glass opportunity audit

- Visually rechecked Example 1 in local `patents/JPA 1989039542-000000.pdf`; L7 is `1.75000 / 25.1` and L12 is
  `1.49310 / 83.6`. The patent names no supplier and publishes no secondary line indices or partial dispersion.
- Relabeled L7 to coefficient-backed HOYA FF8 as the only reviewed catalog curve inside the project compatibility
  guard. Its evaluated coordinate differs from the patent by about `+0.002110 / -0.05`; the annotation leaves the
  production supplier unspecified.
- The `493836` L12 coordinate has no compatible public coefficient row and now carries an explicit unmatched
  disposition. Its Minolta AD/APD family classification remains inference-only, with no borrowed numeric `dPgF`.
- No geometry, authored patent constants, or APD numeric fields changed.
