# Audit Log — FUJIFILM FUJINON XF16-55mmF2.8 R LM WR II

Patent: US 2025/0234079 A1, Example 1 (Tables 1-3)

## 2026-06-25 — APD status and diameter-anchor recheck

Reviewed the local untracked image-only PDF `patents/US_2025234079_A1.pdf`. The local PDF does not extract text with `pdftotext`; Table 1 values were cross-checked against the searchable Google Patents HTML mirror for US20250234079A1 and the existing data file.

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1 | `apd`, `apdNote` | omitted, `dPgF: 0.016775` present | `apd: "patent"` with ΔPgF ≈ +0.01678 note | Table 1 lists nd=1.84666, νd=23.79, θgF=0.62056. The dense short flint has materially positive deviation and already drove chromatic tracing via `dPgF`. |
| L12 / S2 | `apd`, `apdNote` | omitted, `dPgF: 0.031737` present | `apd: "patent"` with ED note | Table 1 lists θgF=0.53837 for the 497/816 ED fluorophosphate row; this is one of the inferred Fujifilm ED elements. |
| L24 / S11 | `apd`, `apdNote` | omitted, `dPgF: 0.032338` present | `apd: "patent"` with ED note | Table 1 lists θgF=0.53887 for the rear G2 ED row. |
| L33 / S17 | `apd`, `apdNote` | omitted, `dPgF: 0.051062` present | `apd: "patent"` with Super ED note | Table 1 lists nd=1.43700, νd=95.12, θgF=0.53487; this is the single Super ED element inferred from the patent glass set. |
| L35 / S20 | `apd`, `apdNote` | omitted, `dPgF: 0.032338` present | `apd: "patent"` with ED note | Table 1 repeats the 497/816 ED fluorophosphate row in the rear G3 doublet. |
| L41 / S24 | `apd`, `apdNote` | omitted, `dPgF: 0.049499` present | `apd: "patent"` with high-θgF note | Table 1 lists nd=1.98613, νd=16.48, θgF=0.66558; this is an extreme-index short flint with large positive deviation, not an ED row. |

Notes:

- No `dPgF` values were changed; this pass only made the existing patent-derived values visible through the APD metadata where justified.
- The patent DA diameter anchors remain rational and unchanged: S1 DA=52.4 mm maps to `sd: 26.2`, S11 DA=20.6 mm maps to `sd: 10.3`, and S25 DA=21.6 mm maps to `sd: 10.8`. Remaining SDs are inferred as documented in the data-file header.
- No radius, spacing, focus, asphere, glass-name, mount, or format edits were made.
