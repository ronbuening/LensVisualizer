# Audit Log - Nikon AF-P DX NIKKOR 10-20mm f/4.5-5.6G VR

Patent: WO2021039813A1 / US20220269056A1, Example 2

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/WO2021039813A1.pdf`.
- The PDF text layer is empty; the gitignored PDF was rendered locally and Table 2 was checked visually.
- Example 2 / Table 2 rows confirmed:
  - surface 7 / L13: nd = 1.68348, vd = 54.80, theta_gF = 0.5501.
  - surface 25 / L41: nd = 1.53110, vd = 55.91, theta_gF = 0.5684.

### Catalog-search disposition

- Searched current runtime catalog, public Hikari/Nikon, HOYA, Schott, OHARA, CDGM, and refractiveindex.info rows for `683548` and `531559`.
- No coefficient-backed public match was found for either partial-dispersion row. The patent's theta_gF values are retained in the data file.

### Changes made

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L13 / S7 | `Unmatched (patent-specified 683/548 glass; theta_gF = 0.5501)` | `683548 - patent-specified glass ...` | Unresolved; explicit code retained. |
| L41 / S25 | `Unmatched (patent-specified 531/559 crown-like glass; theta_gF = 0.5684)` | `531559 - patent-specified crown-like glass ...` | Unresolved; explicit code retained. |

### Analysis sync

- Updated descriptions and the glass-identification table to use explicit unbroken unresolved codes.

## 2026-09-24 — Semi-diameters raised to the traced format corner

WO 2021/039813 A1 Example 2 / Table 2 (pamphlet p. 29, PDF p. 31) prints W f = 10.310 mm, Y = 14.250 mm and 55.344°
in the row labelled 2ω; [0083] (PDF p. 23) defines ω as the half angle, and at f = 10.31 mm with Y = 14.25 mm the
printed value can only be ω. The design therefore reaches the DX corner (14.175 mm). The estimated front rims clipped
the real chief ray (solved through the stop centre) at the wide end from 39.9°, leaving the analysis field at 61% of
the corner (the corner chief ray could not be aimed past 47.6°), and surface 1 held the 14.99 mm station at 99.6%.
With the rims opened, the wide corner chief ray solves at 55.18° and needs surface 1 ≥ 21.38, surface 2 ≥ 15.41,
surface 3A ≥ 15.16, surface 4A ≥ 12.06 and surface 5 ≥ 11.96 mm; the other stations need less. Values are floor +
~0.5 mm rounded up, and each surface of the L11 and L12 composites is set by its own need. Surface 6, the deep rear
of L12, carries the chief ray at 10.45 mm and stays at 11.6: scaling it with surface 5 (12.3 mm) would exceed the 90%
sag-intrusion limit of the 6→7 air gap. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 13.6 | 21.9 | wide corner chief ray 21.38 mm + clearance |
| 2 | 12.5 | 16.0 | wide corner chief ray 15.41 mm + clearance (rim angle 62.3°, under the 64.2° limit) |
| 3A | 11.35 | 15.7 | wide corner chief ray 15.16 mm + clearance; slope rises monotonically to 18.8 mm (no turnover) |
| 4A | 11.6 | 12.6 | wide corner chief ray 12.06 mm + clearance; slope rises monotonically to 15.1 mm (no turnover) |
| 5 | 11.8 | 12.5 | wide corner chief ray 11.96 mm + clearance |

The validator accepts the new values; the thinnest glass edge is still the L12 resin layer, now 0.22 mm at 12.5 mm
(was 0.30 mm at 11.6 mm). The traced edge reaches 14.17 mm at every station (Wide 55.18°, 14.99 mm 43.67°, Tele
36.25°; 100%), and the image-circle floor still reports nothing undersized. The analysis quotes no semi-diameters or
aspheric departures, so it is unchanged.
