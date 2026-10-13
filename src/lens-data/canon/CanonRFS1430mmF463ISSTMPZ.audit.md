# Audit Log — Canon RF-S 14-30mm f/4-6.3 IS STM PZ

Patent: JP 2025-50505 A, Numerical Example 5.

## 2026-10-01 — Metadata root cause, optical rims and glass

| Field / elements | Before | After | Source and reason |
| --- | --- | --- | --- |
| `patentAuthors` | 仲田 丈晴 | Takeharu Nakada | PDF p. 1 names 仲田 丈晴; the [publication record](https://patents.google.com/patent/JP2025050505A/en) supplies the romanization, matching the existing Canon inventor identity. The structured metadata contract requires Latin-script author names. |
| `subtitle` / analysis inventor | Japanese-only display | Romanized inventor; original retained in analysis | Same source; preserves the source spelling without splitting inventor identity. |
| E3, E4, E5, E8, E10 `glass` | Bare vendor-specific catalog names | Explicit supplier-neutral class/proxy labels | Example 5, PDF pp. 13–14, lists nd/νd without vendor identities. |
| All `sd` | Existing inferred apertures | Retained | Fig. 9, PDF p. 20, inspected at 600 dpi; optical rims agree within drawing/clearance uncertainty. |

The axial glass span gives 52.64 µm/px. The automated G12 reading selected the taller G11 neighbor; G12's actual optical rim agrees with 9.6 mm. The sole cemented doublet and the closely spaced G31/G32 pair were inspected. The documented reductions at surfaces 3, 4A, 18, 19A and 20A preserve cross-gap clearance and remain appropriate.

Eight of ten elements already resolve to catalog coefficients. G12 and G32 retain explicit unmatched molded COP-class polymer labels (patent nd = 1.53504 / νd = 55.7). [ZEON's COP property table](https://www.zeon.co.jp/business/enterprise/resin/cop/) lists multiple grades at nd = 1.535, supplies no dispersion coefficients, and does not identify Canon's grade. It does not support a new grade-specific spectral curve. No nominal resin or invented Sellmeier fit was added to close this gap.

Display name retained: **CANON RF-S 14-30mm f/4-6.3 IS STM PZ**, consistent with [Canon's product page](https://www.usa.canon.com/shop/p/rf-s14-30mm-f4-6-3-is-stm-pz). The patent-production correlation remains qualified. The analysis preserves the source's meridional-field and condition-(9) contradictions.

## 2026-10-01 — Source identifiers, glass labels and ordered travel

| Field / elements | Before | After | Source and reason |
| --- | --- | --- | --- |
| Element `name` | L1–L10 | G11–G41, matching `diagramLabel` | Fig. 9, PDF p. 20: use patent element identities in the inspector instead of names that conflict with lens groups L1–L4. |
| Patent link serial | JP202550505A | JP2025050505A | Pad the printed post-2000 Japanese serial to six digits in the shared DOCDB link formatter; retain the printed display number. |
| L3 group text | L3 | L3 (FOCUS) | Fig. 9 and ¶0036 identify L3 as the focus group. |
| G12, G32 `glass` | COP-class polymer | Molded optical polymer with COP-like coordinates; supplier/grade unconfirmed | Example 5 publishes only nd/νd. Material family is an inference, not a disclosed grade. |
| G24 `glass` / analysis table | Canon UD / vendor-specific table labels | Inferred UD assignment / supplier-unresolved class matches | Production correlation does not identify the patent's production supplier. |

The figure's optical rims, sole doublet, and four aspheric surfaces remain consistent with the clearance-limited SDs. From W to T, L2 moves objectward by 15.60 mm and L3 by 12.54 mm; near focus moves only L3 imageward by 1.428/2.166/4.126 mm. The printed middle-state gaps leave a 0.01 mm total-length rounding residual, so the model's fixed L1 shifts by 0.01 mm there; preserve the printed gaps rather than invent a correction. L4 stays fixed. The motion-chart ordering and focus direction agree with ¶0036 and Fig. 9.

Eight elements retain coefficient-backed dispersion; both polymers remain on the explicit Abbe estimate. [ZEON's COP brochure](https://www.zeon.co.jp/en/business/enterprise/resin/pdf/200323391.pdf), p. 4, lists K26R, K22R and F52R at index 1.535 but no spectral index curve or Canon material attribution; its wavelength chart is transmission, not dispersion. It cannot support a grade-specific coefficient backfill. Source nd/νd, inferred APD and aspheric accents continue to determine the diagram colors. Structured **Canon Inc.** is already consolidated with the other modern Canon records.
