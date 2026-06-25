# Audit Log — FUJIFILM FUJINON 35mm f/4 (GFX100RF)

Patent: US 2025/0362482 A1, Example 5 (Tables 13-15)

## 2026-06-25 — Patent partial-dispersion and APD status audit

Reviewed the local untracked image-only PDF `patents/US_2025362482_A1.pdf`. Because the PDF does not extract text with `pdftotext`, page 13 was rendered and checked visually against the data file.

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11-L23 / S1-S19 | `dPgF` | omitted | patent-derived values from −0.00934 to +0.01675 | Table 13 publishes θgF for every material row. Values were transcribed as `ΔPgF = θgF - (0.6438 - 0.001682 * νd)` so code-only or fallback dispersion paths retain the patent partial-dispersion data. |
| L23 / S18 | `apd`, `apdNote` | `apd: false` | `apd: "patent"`, ΔPgF ≈ +0.01675 note | Table 13 lists nd=1.92119, νd=23.96, θgF=0.62025. The positive deviation is materially larger than the ordinary rows, so the ultra-high-index FDS24 rear lens merits the APD badge without being labeled ED. |

Notes:

- Table 13 does not publish clear-aperture or DA/semi-diameter values. Existing inferred `sd` values were retained after comparing the surface progression with the patent drawing and the file's stated edge-thickness / conic-limit constraints.
- Table 14 values already matched the data file: f=34.8463 mm, Bf=5.3962 mm, FNo=4.12, and 2ω=83.0°.
- No radius, spacing, focus, asphere, mount, format, or glass-name edits were made.
