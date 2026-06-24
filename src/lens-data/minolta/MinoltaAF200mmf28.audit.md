# Audit Log - Minolta AF APO Tele 200mm f/2.8

Patent: US 4,786,152, Embodiment 3 / Table 3

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- `patents/` did not contain this PDF, so the audit used a temporary Google Patent Images copy at `/tmp/minolta-patent-text/US4786152.pdf`.
- Table 3 rows were checked from the extracted patent text:
  - L1 and L2: nd = 1.49310, vd = 83.55, theta_gF = 0.539.
  - L3: nd = 1.72000, vd = 52.14.
  - L4: nd = 1.72100, vd = 33.40.
  - Remaining rows match the existing HOYA/OHARA-style catalog assignments in the data file.

### Glass and APD disposition

- Changed L1/L2 from generic unmatched AD labels to `493836` code labels.
- Added `dPgF = 0.0358` to L1/L2, derived from the patent-listed `theta_gF = 0.539` against the normal-line estimate for vd = 83.55.
- Kept APD status as patent-backed for L1/L2 because this patent explicitly gives partial dispersion.
- Changed L3/L4 to explicit `720521` and `721334` code fallback labels instead of prose-only unmatched labels.

### Semi-diameter disposition

- The patent gives no per-surface clear apertures.
- Existing semi-diameters remain estimated rendering apertures. They taper rationally through the large front group, clear the f/2.8 marginal envelope, and keep plausible edge/sag spacing relative to the patent drawing, so no SD edits were made.

