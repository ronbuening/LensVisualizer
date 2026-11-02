# Audit Log — Minolta AF 35mm f/1.4

Patent: US 4,806,003, Example 2 (scaled ×0.35 from f = 100)

## 2026-10-09 — Stop gap aligned with its focus row

The modeled stop splits Table 2's d11 one-third / two-thirds from Fig. 5 (data-file header). STO `d` carried the
two-thirds share at full double precision (7.887366666666666 mm), while its `var` row stores the 12-decimal value
(7.887366666667 mm). The surface value now equals the row; the difference is 3.3e-13 mm, below every trace tolerance.
The V2 lens-data format stores a variable gap once, and its converter requires the two to agree.

| Surface | Field | Before | After | Justification |
|---|---|---|---|---|
| STO | `d` | 7.887366666666666 | 7.887366666667 | `var.STO[0]`, the infinity value of D11 (STO→GIII) |
