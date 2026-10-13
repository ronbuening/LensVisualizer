# Audit Log - Panasonic LUMIX G 25mm f/1.7 ASPH.

Patent: US 2017/0059832 A1, Numerical Example 4

## 2026-07-06 - Glass/APD source audit

### Patent Evidence

- Re-extracted local untracked patent PDF `patents/US20170059832A1.pdf`.
- Checked Numerical Example 4 Tables 22-28 against the current data file.
- Table 23 publishes `nC`, `nF`, `ng`, and `PgF` values for every powered element and the cover plate.
- Paragraph 0064 identifies the Example 4 condition elements as A from L1-L4, B = L7, and C = L6; Table 36 resolves the actual condition rows for Example 4 as L3 for condition (1), L7 for condition (2), and L6 for condition (3).

### Phase 1 - Glass/APD Corrections

| Element | Before | After | Justification |
|---|---|---|---|
| L1 | `apd: "patent"` | `apd: false` | Table 23 line indices are retained, but Table 36 does not select L1 as an APD-condition element. |
| L2 | `apd: "patent"` | `apd: false` | Table 23 line indices are retained, but Table 36 does not select L2 as an APD-condition element. |
| L3 | `apd: "patent"` | unchanged | Table 36 condition (1) uses L3, with `PgF + 0.0018 * vd = 0.6641`. |
| L4 | `apd: "patent"` | `apd: false` | Table 23 line indices are retained, but Table 36 does not select L4 as an APD-condition element. |
| L5 | `apd: "patent"` | `apd: false` | Table 23 line indices are retained, but Table 36 does not select L5 as an APD-condition element. |
| L6 | `apd: "patent"` | unchanged | Table 36 condition (3) uses L6, with `PgF + 0.0018 * vd = 0.6624`. |
| L7 | `apd: "patent"` | unchanged | Table 36 condition (2) uses L7, with `PgF + 0.0018 * vd = 0.6624`. |
| L8 | `apd: "patent"` | `apd: false` | Table 23 line indices are retained, but Table 36 does not select L8 as an APD-condition element. |

No glass-label relabels or numeric prescription changes were made in this pass. The patent does not name catalog glasses, so the existing Hoya/class labels remain interpretive nd/vd matches, while L6 and L7 remain explicit unmatched patent line-index materials.

### Phase 2 - Retained-Information Audit

- Spot-checked Table 22/23 values for the glass rows touched in this pass; current `nd`, `vd`, `nC`, `nF`, `ng`, and `dPgF` values match the extracted patent values to the precision authored in the data file.
- Prescription, aspheres, focus variables, cover-glass omission, and semi-diameter estimates were not changed.

### Phase 4 - Analysis Sync

- Confirmed the analysis already identifies the chromatic strategy as L3, L6, and L7 only.
- Tightened the glass-identification wording to state that Table 23 line-index availability is not itself an APD badge.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Re-read Numerical Example 4 on the rendered page 22 of `patents/US20170059832A1.pdf`: Table 22 surfaces 16–19 give d16 = 10.80000, plate M d17 = 4.20000 (nd 1.51680, νd 64.2), d18 = 1.00000, then BF; Table 23 gives M's nC 1.51432, nF 1.52237, ng 1.52667, PgF 0.53418; Table 25 gives BF = 0.00461 / 0.00488 / 0.00594 mm (∞ / 939.5 mm / 175 mm d0). The legacy fold 10.8 + 4.2/1.5168 + 1.0 + BF reproduces the stored 14.5736 / 14.5739 / 14.5749 mm exactly.
- M is now a `rearPlates` entry (label M, 4.2 mm, BSC7 (Hoya) — resolves for 1.51680 / 64.2 and matches the file's Hoya element labels — with the patent line indices and dPgF −0.00164 from θgF 0.53418) with `gapAfterMm` 1.00461 (d18 + infinity BF). Surface 16 stores the physical gap to M: 10.8 / 10.80027 / 10.80133 mm, carrying the 0.0013 mm close-focus BF growth ahead of the plate so the lens-to-image path stays as printed.
- Plate check against HEAD: EFL identical and paraxial defocus unchanged at all three focus keyframes (worst |Δ| ≈ 1e-15 mm). Physical track grows by 4.2 × (1 − 1/1.5168) = 1.4310 mm to 71.0046 mm at infinity, matching the patent's printed overall length. `closeFocusM` 0.25 is the production specification and was left unchanged.
