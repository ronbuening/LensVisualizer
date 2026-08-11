# Audit Log — Nikon Dodotto 400mm f/8

Patent: JP H9-105860, Example 1 / Table 1.

## 2026-08-11 — Patent glass follow-up

- Visually checked the retained local patent PDF. Table 1 confirms L2 at `nd = 1.75692`, `νd = 31.62`.
- Compared that coordinate with the coefficient-backed Hikari E-LAF11 row (`1.75692 / 31.591329`, code `757316`).
  The index is exact and the `-0.029` Abbe residual is inside ordinary patent rounding and the runtime safety window.
- Relabeled L2 as an E-LAF11 catalog equivalent. This supplies wavelength-dependent tracing without asserting that
  HOYA supplied the production glass.
- All four elements now have strict catalog dispersion coverage.
