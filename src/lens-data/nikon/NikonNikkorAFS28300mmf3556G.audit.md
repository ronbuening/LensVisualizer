# Audit Log — Nikon AF-S NIKKOR 28-300mm f/3.5-5.6G ED VR

Patent: US 2010/0220400 A1, Example 2 / Table 2

## 2026-05-20 — Six-digit missing-Sellmeier code review

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L54 / S34 | `glass` | `Unmatched (patent glass 821/426; no public HIKARI/OHARA match found)` | `821426 — patent dense flint (nd=1.82080, νd=42.64; no public HIKARI/OHARA match found)` | Local patent `patents/US20100220400A1.pdf`, Table 2 row 34 lists nd=1.82080 and νd=42.64. The data values match the patent row. |

### Catalog-search disposition

- Searched public manufacturer/refractiveindex.info-style sources for `821426` and the exact 1.82080 / 42.64 pair.
- No coefficient-backed Hikari, OHARA, HOYA, Schott, or CDGM match was found. The label now preserves the unbroken code for future auto-upgrade.

### Analysis sync

- Updated the L54 text and glass map from `821/426` to `821426`.

## 2026-08-07 — M-TAFD51 catalog recovery

- Visually rechecked Table 2 in local `patents/US20100220400A1.pdf`; L54 remains `1.82080 / 42.64`.
- HOYA's current M-TAFD51 row (`1.82080 / 42.71`) is compatible with the patent coordinate and supplies a vendor polynomial.
- Relabeled L54 as an M-TAFD51 catalog equivalent while leaving Nikon's production supplier unspecified. This supersedes the earlier source-limited no-match disposition; no geometry changed.

## 2026-08-21 — Hikari catalog-row recovery

- Added official Hikari coefficient rows for J-LASFH13 (`1.90366 / 31.274235`) and J-PSK03
  (`1.60300 / 65.441311`) from the 2023 catalog. They reproduce the three already source-faithfully named elements:
  L11/L53 use J-LASFH13 and L13 uses J-PSK03.
- The existing labels and analysis remain valid; these elements now use first-party catalog dispersion rather than
  Abbe fallbacks. No production-supplier inference, prescription value, movement, or geometry changed.
- Hikari J-SK11 was added in the same first-party batch, so the existing explicit J-SK11 element now resolves by
  name without changing code-only precedence for the duplicate `564607` coordinate.

## 2026-09-24 — Semi-diameters raised to the traced format corner

US 2010/0220400 A1 Example 2 / Table 2 (PDF p. 24) prints W f = 28.79 mm and 2ω = 76.52° (ω = 38.26°), and FIG. 5A
(PDF p. 6) plots the wide end to Y = 21.60 mm. The printed table is not self-consistent: the stored prescription
traces to EFL 28.53 / 99.26 / 290.00 mm against the printed 28.79 / 100 / 292 mm, and its real chief ray at ω = 38.26°
lands at 19.69 mm rather than 21.6 mm, so the wide format corner cannot be reached. The chief-ray solve fails past
38.9° (20.96 mm, 97%). No thickness was changed; that misprint is queued separately. The estimated renderer-safe rims
in G2 and G5 clipped the real chief ray (solved through the stop centre) from 29.15°, leaving the wide analysis field
at 66% of the corner and short of the patent's own ω. At ω = 38.26° that chief ray needs surface 6A ≥ 15.26,
7 ≥ 11.86, 10 ≥ 10.57, 11 ≥ 9.98, 12 ≥ 9.45, 13A ≥ 8.86 and 34 ≥ 10.60 mm. Only those rims were raised (floor +
~0.5 mm rounded up); each pair in L21, L23 and L24 is set by its own need. Surface 35A, partner of surface 34, clears
the 38.26° chief ray by 0.12 mm and was left at 11.2 mm, so it now ends the wide field just past the patent ω. Scaling
it with surface 34 (13.8 mm validates) would only carry the field toward the 38.9° solve limit. No figure measurement
was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 6A | 14.7 | 15.8 | chief ray at ω = 38.26° 15.26 mm + clearance; slope rises monotonically to 19.0 mm (no turnover) |
| 7 | 11.8 | 12.4 | chief ray at ω = 38.26° 11.86 mm + clearance |
| 10 | 8.75 | 11.1 | chief ray at ω = 38.26° 10.57 mm + clearance |
| 11 | 7.0 | 10.5 | chief ray at ω = 38.26° 9.98 mm + clearance |
| 12 | 7.0 | 10.0 | chief ray at ω = 38.26° 9.45 mm + clearance |
| 13A | 8.75 | 9.4 | chief ray at ω = 38.26° 8.86 mm + clearance; slope rises monotonically to 11.3 mm (no turnover) |
| 34 | 9.0 | 11.1 | chief ray at ω = 38.26° 10.60 mm + clearance |

The validator accepts the new values. The wide station now reaches 19.86 mm at 38.40° (91.8%, stopped by surface 35A
at 11.23 mm), and the 100 mm and 292 mm stations stay at 100%. The image-circle floor still reports nothing
undersized. Rim departures moved to 0.363739 mm for 6A at 15.8 mm (was 0.253861 mm at 14.7 mm) and −0.001281 mm for
13A at 9.4 mm (was −0.000099 mm at 8.75 mm); the analysis quotes neither, and none of the changed values, so it is
unchanged.
