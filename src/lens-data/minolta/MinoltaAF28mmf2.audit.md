# Audit Log - Minolta AF 28mm f/2

Patent: US 4,258,985, Example 4 / Table 4 / claim 9

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- Local patent file checked: `patents/US4258985.pdf`.
- Table 4 gives nd/vd rows only; no vendor names, partial-dispersion data, line indices, or clear-aperture table are published.
- The stored prescription, stop placement in d8, and f=100 to 28 mm scale factor remain consistent with the patent table and drawing.

### Glass and APD disposition

- Replaced catalog-neighbor prose with code fallback labels for all glass rows:
  - `694536`, `511605`, `762404`, `750504`, `805252`, `773501`, and `697558`.
- No ED, fluorite, fluorophosphate, anomalous-dispersion, or APD status is supported by the patent, so all elements remain `apd: false`.

### Semi-diameter disposition

- The patent gives no clear apertures.
- Existing SDs were reviewed against the retrofocus drawing and the fast f/2 marginal/chief-ray envelope. The front meniscus apertures, inserted stop, rear positive group apertures, and sag/edge constraints remain rational for rendering, so no SD edits were made.

## 2026-08-18 — Hoya NBFD5 coefficient backfill

- Visually rechecked local `patents/US4258985.pdf`, PDF page 10, claim 9. The two air-spaced N4 rows are both `nd = 1.7620`, `νd = 40.38`.
- Added Hoya NBFD5 from the first-party 2026-07-07 obsolete-inclusive AGF; its polynomial evaluates to `1.762001 / 40.263`.
- Relabeled L4a and L4b to NBFD5 as catalog equivalents while retaining patent code `762404` and the unspecified production supplier. Geometry and APD status are unchanged.
