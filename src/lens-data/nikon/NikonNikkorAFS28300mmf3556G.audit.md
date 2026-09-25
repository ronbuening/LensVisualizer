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

## 2026-09-25 - MTF census: S16 transcription corrected; source conflicts retained

Source: local `patents/US20100220400A1.pdf`, Example 2 Table 2, PDF page
24 (printed page 8). Visually inspected the complete table and S16 at
350 dpi: the source prints `.100`, not 1.000 or 1.100 mm. Paragraph 0085
defines distances in mm and the d-line indices. No scaling is applied.

| Field | Before | After / evidence |
|---|---|---|
| S16 d | 1.000 mm | 0.100 mm, literal Table 2 `.100` |
| Other S1-S35 radii, thicknesses and nd | Authored | Every row matches Table 2, including the 0.190 mm internal resin layer. |
| All 20 medium vd values | Authored | Match Table 2. |
| S6/S13/S27/S35 aspheres | Authored | Every K/A4-A10 matches with Kstd = kappa - 1, confirmed against paragraph 0082 equation (PDF page 22); higher coefficients absent/zero. |
| Variable zoom/focus rows | Authored | All d1-d4 infinity and close columns checked and retained, as are Bf 38.422/65.896/79.261. |

Independent ABCD with the corrected literal prescription:

| Infinity station | EFL (mm) | BFL (mm) | Source Bf (mm) | Offset (mm) |
|---|---:|---:|---:|---:|
| Wide | 28.447933 | 39.244078 | 38.422 | +0.822078 |
| Mid | 99.280999 | 66.244876 | 65.896 | +0.348876 |
| Tele | 290.494641 | 79.478272 | 79.261 | +0.217272 |

The printed EFLs are 28.79/100/292. The tabulated track sums are
157.586/202.890/230.349 mm versus stated TL 159.888/205.193/232.653 mm.
Correcting the transcription does not resolve these source contradictions;
it increases the wide offset from +0.714173 to +0.822078 mm. No rear plate
is listed, and no single further supported misprint explains the conflicts.
Keep the published Bf and all other source values, without fitting focus.
The header and analysis now disclose this; Section E row deleted, census
flag expected. Existing glass and spectral data remain unchanged.
