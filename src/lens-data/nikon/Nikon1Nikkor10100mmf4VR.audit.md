# Audit Log - Nikon 1 NIKKOR VR 10-100mm f/4-5.6

Patent: US 2020/0348497 A1, Example 8 / Table 8

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20200348497A1.pdf`. The brief-description text maps Example 8 to FIGS. 18A-18C, with FIGS. 19A-19C as the corresponding aberration sheet.
- The patent publishes the Example 8 prescription, zoom data, and moving-group description, but no full per-surface clear-aperture or semi-diameter table.
- FIG. 18 shows a broad three-element G1, compact G2/G3 groups, and a dense rear G4/VR group. Stored SDs preserve that hierarchy: roughly 19.8-20.2 mm through G1, about 5.3-6.25 mm through the compact middle/rear moving groups, and a stop SD of 4.85 mm.
- No SD values changed. Current values remain figure-derived rendering estimates constrained by paraxial ray clearance, edge thickness, and cross-gap sag checks.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 8 [Various Data] (US 2020/0348497 A1 printed pp. 28–29, PDF pp. 53–54) prints the wide state at f = 10.30 mm,
ω = 40.44° and Y = 8.19 mm, above the 1-inch-type corner (7.93 mm), so the design covers the format corner. The
estimated L21 rims (surfaces 6A, 7 and 8) clipped the real chief ray (solved through the stop centre) from 33.0° at the
wide end, leaving the analysis field at 80% of the corner; the 30 mm and tele stations already reached it. The traced
wide corner chief ray (39.57°) needs 6A ≥ 7.88, 7 ≥ 7.77 and 8 ≥ 5.84 mm; values are floor + ~3% (1-inch format),
rounded up to 0.1 mm. Each surface takes its own floor: 7 is the resin/glass junction and the L21 substrate is a strong
meniscus (R 87.0 / 8.30), so no partner scaling applied. L22 (surfaces 9–10) does not clip and is unchanged. No figure
measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 6A | 6.16 | 8.2 | wide corner chief ray 7.88 mm + 3%; the asphere scan shows no turnover out to 9.84 mm |
| 7 | 6.12 | 8.1 | wide corner chief ray 7.77 mm + 3% (cemented resin/glass junction) |
| 8 | 5.75 | 6.1 | wide corner chief ray 5.84 mm + 3% (R 8.30 rear of the L21 meniscus) |

The validator accepts the new values, all three zoom stations now reach the 7.93 mm corner (100%) with every rim
clear, and the image-circle floor still reports nothing undersized. The analysis file quotes no L21 rim values, so it
is unchanged.
