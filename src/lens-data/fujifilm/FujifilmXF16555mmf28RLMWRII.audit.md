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

## 2026-10-06 — L51 glass label after the HOYA BSC7 catalog row

- The shared catalog gained the true HOYA BSC7 row (HOYA 2026-07-07 AGF: nd 1.51680, νd 64.20) and the old
  `BSC7 → S-BSL7` alias was retired. L51 stores 1.51625/64.05, which the BSC7 curve misses by 5.5e-4 in nd.
- Relabeled L51 from `BSC7 / BK7-class moldable crown (517/642 family)` to
  `L-BSL7 (OHARA) class moldable crown (516/641 family; BSC7 / BK7 type)`. It now resolves to the OHARA L-BSL7
  low-softening-temperature curve (1.51633/64.07; Δnd 8e-5, Δνd 0.02) instead of S-BSL7 (Δνd 0.09). Stored nd, νd and
  dPgF are unchanged; the analysis element line and glass table follow.

## 2026-10-08 - dPgF checked against the patent

- Reviewed local `patents/US_2025234079_A1.pdf` (US 2025/0234079 A1; image-only scan, pages rendered at 300 dpi and
  read). The patent defines no partial-dispersion deviation and no normal line of its own. Paragraph [0124] (PDF p. 32)
  defines only the absolute ratio θgF = (Ng − NF)/(NF − NC), and paragraph [0144] (PDF p. 34) says the θgF column of the
  basic lens data holds that ratio. None of conditional expressions (1)–(26) (PDF pp. 28–33) contains a line of the form
  a − b·νd; the only two that use partial dispersion, (23) (PDF p. 32) and (26) (PDF p. 33), bound the plain differences
  θgFfp − θgFfn and θgFrp − θgFrn between −0.12 and −0.02.
- Example 1 Table 1 (PDF p. 35) prints absolute θgF to five decimals for every glass row.
- Each stored `dPgF` was recomputed as θgF − (0.6438 − 0.001682·νd) from the printed θgF and the element's stored νd.
  All sixteen elements reproduce the stored number to the sixth decimal, so every value is already on the engine's
  normal line. No `dPgF`, `apdNote` or comment changed in the data file, and the analysis sidecar needed no edit: its
  glass table lists the same printed θgF with the stored values rounded to five decimals, and its condition table quotes
  the patent's own θgF differences (−0.07544 for (23), −0.07144 for (26)).
- The catalog screen that flagged this file is a false alarm. The glass labels are code-equivalent classes, so the
  screen compared each stored value with the nearest catalog glass rather than with the patent's printed figure. For L51
  the OHARA L-BSL7 curve (PgF 0.5334) happens to sit nearer a 0.64833 − 0.0018·νd reading of the stored value (0.5331)
  than the patent's printed 0.53616. The patent decides, and it prints 0.53616.

| Element | νd | Source figure (Table 1 θgF, PDF p. 35) | Stored before | Stored after |
|---|---:|---:|---:|---:|
| L11 | 23.79 | 0.62056 | 0.016775 | 0.016775 (unchanged) |
| L12 | 81.55 | 0.53837 | 0.031737 | 0.031737 (unchanged) |
| L13 | 54.64 | 0.54488 | -0.007016 | -0.007016 (unchanged) |
| L21 | 40.86 | 0.56955 | -0.005523 | -0.005523 (unchanged) |
| L22 | 52.16 | 0.56212 | 0.006053 | 0.006053 (unchanged) |
| L23 | 32.27 | 0.59119 | 0.001668 | 0.001668 (unchanged) |
| L24 | 81.61 | 0.53887 | 0.032338 | 0.032338 (unchanged) |
| L31 | 31.20 | 0.60109 | 0.009768 | 0.009768 (unchanged) |
| L32 | 25.15 | 0.61031 | 0.008812 | 0.008812 (unchanged) |
| L33 | 95.12 | 0.53487 | 0.051062 | 0.051062 (unchanged) |
| L34 | 25.15 | 0.61031 | 0.008812 | 0.008812 (unchanged) |
| L35 | 81.61 | 0.53887 | 0.032338 | 0.032338 (unchanged) |
| L36 | 63.56 | 0.54321 | 0.006318 | 0.006318 (unchanged) |
| L41 | 16.48 | 0.66558 | 0.049499 | 0.049499 (unchanged) |
| L42 | 37.21 | 0.57834 | -0.002873 | -0.002873 (unchanged) |
| L51 | 64.05 | 0.53616 | 0.000092 (written `9.2e-5`) | 0.000092 (unchanged) |

- Left as stored: all sixteen values, because each equals the printed θgF minus the engine's line.
- No element authors `nC`, `nF` or `ng`, and none uses `indexReference: "e"`, so neither special case applied.
