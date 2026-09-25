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

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 2 (PDF p.35) prints 2ω = 88.6° / 44.8° / 29.4° at the wide / middle / telephoto ends. The traced chief ray reaches
the 14.175 mm APS-C corner at 43.17° / 21.45° / 13.91°, so the design circle is slightly larger than the format (the
patent's 44.3° wide half-angle lands at 14.72 mm). The estimated front rim of L21 (surface 6A, 12.5 mm) clipped the real
chief ray (solved through the stop centre) at the wide end from 39.8°, leaving the analysis field there at 90% of the
corner; the middle and telephoto stations already reached it. The wide-corner chief ray needs 6A ≥ 14.00 mm; no other
rim clips at any station. 6A is set to floor + 0.5 mm. Its partner 7A (R 14.15, the deep concave rear of a near
plano-concave meniscus) was not scaled with it: its own corner chief ray is 10.04 mm against its 10.1 mm rim. Covering
the patent's full 44.3° would also need 6A ≥ 14.58 and 7A ≥ 10.25 mm, which is beyond the format the analysis uses.
`--scan` shows no turnover on 6A to 17.4 mm (rim slope 12.2° at 14.5 mm). The Table 1 DA column (S1 52.4, S11 20.6, S25
21.6) is the lens outer diameter per ¶0144 and stays as stored. FIG. 1's wide panel (PDF p.2; 7.825 px/mm at 200 dpi
over the 108.24 mm wide-state track, with 6A and 7A within 1 px) draws L21's front edge at about 15.4 mm. That is 6%
above the new value, inside the noise band, so the drawing was not used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 6A | 12.5 | 14.5 | wide-corner chief ray 14.00 mm + clearance; FIG. 1 edge ≈15.4 mm |

The validator accepts the new value, the traced edge now reaches 14.17 mm at every station with every rim clear, and the
image-circle floor reports nothing undersized. The analysis departure table now quotes 6A at 14.5 mm (+635.885 µm).
