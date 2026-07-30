# Audit Log - Minolta AF 35-70mm f/4

Patent: US 4,560,253, Example 2 / Table 2

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- `patents/` did not contain this PDF, so the audit used a temporary Google Patent Images copy at `/tmp/minolta-patent-text/US4560253.pdf`.
- Table 2 rows were checked from extracted patent text:
  - L3/L4: nd = 1.67000, vd = 57.07.
  - L5: nd = 1.75000, vd = 25.14.
- The thin transparent layer and aspheric-surface treatment remain consistent with the patent's hybrid/aspheric description.

### Glass and APD disposition

- Changed L3/L4 to `670571` lanthanum-crown code labels.
- Changed L5 to `750251` dense/fluor-flint code label.
- No APD or ED status is supported by the patent, so none was added.

### Semi-diameter disposition

- The patent gives no per-surface clear apertures.
- Existing SDs remain inferred visualization apertures. The front negative hybrid, rear positive group, stop placement, and compact f/4 zoom proportions remain consistent with the patent drawing, so no SD edits were made.

## 2026-07-29 - `670571` catalog-equivalent review

- Rechecked Table 2 L3/L4 at `nd = 1.67000`, `vd = 57.07`; both stored prescription rows remain unchanged.
- Official OHARA all-products data publish discontinued S-LAL52 with coefficients at `nd = 1.669999`,
  `vd = 57.327972`, code `670573`.
- Relabeled both unresolved `670571` annotations to
  `S-LAL52 (OHARA catalog-equivalent to 670571; patent vendor unspecified)`. The exact d-line agreement
  and `+0.258` Abbe difference justify the optical model, but not a supplier attribution.
- Synchronized both element narratives and the glass table. No geometry, APD status, or semi-diameter changed.
