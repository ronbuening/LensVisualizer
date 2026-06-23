# Audit Log — Voigtländer Nokton 50mm f/1.0

Patent: JP2023-063766 A, Example 1

## 2026-06-23 — Full Voigtländer local-patent sweep

- Local patent source: `patents/JP2023063766A.pdf` (untracked local file).
- Rendered and visually rechecked Example 1, Table 1. The stored R, d, nd, vd, and aspheric coefficients for surfaces 1A, 16A, and 17A match the patent table.
- Updated resolver-friendly glass labels:
  - L1: `LaSF (LASF35 melt)` → `S-LAH93 (OHARA, patent nd/vd match)`.
  - L2: `LaSF family` → `TAFD37A (HOYA, patent nd/vd match)`.
  - L4f: `Dense flint (SF14 family)` → `S-TIH14 (OHARA, patent nd/vd match) / SF14-family dense flint`.
  - L6r: `Standard crown (selected melt)` → `Unmatched (553551 crown; patent nd=1.55298, νd=55.07)`.
  - L7: `LaF/LaSF boundary` → `Unmatched (808406 high-index lanthanum glass; patent nd=1.80835, νd=40.55)`.
- The patent table does not list dPgF, APD, or semidiameter columns. APD remains false for this file, and the SDs remain display/ray-envelope estimates checked against the patent drawing proportions.
