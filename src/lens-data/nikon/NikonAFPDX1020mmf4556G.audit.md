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

## 2026-10-07 — Zoom iris and station f-numbers against the patent

WO 2021/039813 A1 Example 2, Table 2 general data ([全体諸元], pamphlet p. 29, PDF p. 31) prints FNO 4.625 / 5.233 /
5.828 in columns W / M / T. The file carried the marketed f/4.5-5.6 range with an interpolated middle value. The three
station values are the patent's, and `zoomApertureModel: "fixed-iris"` stays.

| Field | Before | After | Source |
|---|---|---|---|
| `nominalFno[0]` (wide, 10.31 mm) | 4.5 | 4.625 | Table 2 general data, FNO row, column W; pamphlet p. 29 (PDF p. 31) |
| `nominalFno[1]` (middle, 14.99 mm) | 5.1 | 5.233 | Table 2 general data, FNO row, column M; pamphlet p. 29 (PDF p. 31) |
| `nominalFno[2]` (tele, 19.39 mm) | 5.6 | 5.828 | Table 2 general data, FNO row, column T; pamphlet p. 29 (PDF p. 31) |
| `fstopSeries[0]` | 4.5 | 4.625 | follows the wide-station `nominalFno`; the series stays ascending |

The fixed iris is sized by the real marginal ray at the wide station, so its radius goes from 5.0278 mm (f/4.5) to
4.8900 mm (f/4.625). It is a derived value and is not stored in the file.

Confirmed unchanged:

- Example identity: the page headers carry WO 2021/039813, and the rows either side of the stop on pamphlet pp. 29-30
  (PDF pp. 31-32) agree with the file: surface 16 R −25.45380 / D 1.455, surface 17 ∞ / 1.802 tagged 絞りS, and
  surface 18 R 21.50780 / D 3.280 / nd 1.53172.
- Focal lengths: Table 2 prints f = 10.310 / 14.992 / 19.394; the prescription computes 10.3099 / 14.9922 / 19.3940.
- Variable gaps (pamphlet p. 30, PDF p. 32): D10 25.062 / 8.757 / 0.770, D20 1.457 / 2.644 / 3.179, D24 5.723 / 4.536 /
  4.001, with BF 38.107 / 45.676 / 53.470 from the general data.
- Stop position: surface 17, between L23 and the L24/L25 doublet in G2 ([0105], pamphlet pp. 27-28). The gaps before
  and after it (1.455 and 1.802) are not variable, so the stop travels with G2.
- One iris: Table 2 lists no stop diameter, and the Example 2 text ([0103]-[0109], pamphlet pp. 26-28) places the
  stop only by position. The real-ray stop radii the three printed f-numbers need are 4.8900 / 4.8899 / 4.8901 mm,
  and one radius between 4.8897 and 4.8903 mm fits all three within print rounding. Paraxially they need 4.8594 /
  4.8457 / 4.8321 mm, which no single radius fits.
- Traced result: with the 4.8900 mm iris the three stations trace f/4.625 / f/5.233 / f/5.828, each within 0.0 % of
  its stated value. The stop is the limiter at every station; no rim clips the axial beam.
- Fig. 4 (sheet 4/24, PDF p. 95) captions the three aberration plots FNO=4.62, NA=5.22 and NA=5.82; [0111]
  (pamphlet p. 32) identifies them as the wide, middle and telephoto states at infinity. The file uses the
  three-decimal Table 2 values.
- `apertureDesign` 4.625 and the specs line quoting the patent FNO values already matched Table 2, and
  `apertureMarketing` stays 4.5. No semi-diameter was changed.

Analysis sync: the stop paragraph under "Data File Construction Notes" states the patent station f-numbers, the
one-radius stop model and its 4.890 mm real-ray radius, with a table of the three stations. The "Patent Reference"
paragraph said the WO scan held only front matter and early description pages; the local
`patents/WO2021039813A1.pdf` is the full 119-page pamphlet with Table 2 on pamphlet pp. 29-32 (PDF pp. 31-34), so
the paragraph cites the table there. All 29 surface rows, the three sets of aspherical coefficients and the variable
gaps were compared with the file on those pages and agree to the printed digit.

Left open:

- The `STO` row still carries sd 4.846, the paraxial radius for the middle station's f/5.233. The engine replaces it
  with the 4.890 mm radius traced from `nominalFno`, so it has no effect on the trace; aligning the authored value is a
  semi-diameter edit and was left for a separate decision.
