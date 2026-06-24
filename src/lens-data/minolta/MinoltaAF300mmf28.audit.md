# Audit Log - Minolta AF APO TELE 300mm f/2.8

Patent: US 4,518,229, Example 8 / Tables 8-9

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- `patents/` did not contain this PDF, so the audit used a temporary Google Patent Images copy at `/tmp/minolta-patent-text/US4518229.pdf`.
- Table 8 rows were checked from extracted patent text:
  - L1 and L2: nd = 1.49520, vd = 79.74.
  - L3: nd = 1.68150, vd = 36.64.
  - L8: nd = 1.67000, vd = 57.07.
- Table 9 remains the source for the inner-focus subunit movement to the patent's 3 m endpoint.

### Glass and APD disposition

- Changed L1/L2 to `495797` fluorophosphate ED-class code labels and explicitly noted that the row is not current S-FPL51.
- Changed L3 to `682366` dense-flint class and L8 to `670571` high-index crown / lanthanum-crown class.
- Kept APD as `inferred` for L1/L2 because Minolta production literature supports AD glass, but the patent publishes only nd/vd and no partial-dispersion ratios.

### Semi-diameter disposition

- The patent does not publish a stop coordinate or per-surface clear apertures.
- Existing SDs remain inferred from the f/2.9 marginal envelope, the 114 mm production filter constraint, edge thickness, and signed cross-gap sag. They match the large telephoto front collector and smaller inner-focus/rear groups in the patent drawing, so no SD edits were made.

