# Audit Log — Nikon AF-S NIKKOR 28-300 mm f/3.5-5.6G ED VR

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

## 2026-10-08 — Glass coverage: catalog row for one unresolved element

L21 (1.76546 / 46.73, aspherical) was labelled Unmatched beside HIKARI J-LASFH2, which sits 0.0014 away in nd. HIKARI's moulding glass Q-LASFPH2S, already in the site catalog, is 1.76544 / 46.75: within 0.00002 and 0.02 of the patent pair, and a moulding glass suits the aspherical element. The label now names it as a coordinate equivalent and L21 traces on its catalog curve. Stored nd and νd are unchanged; the resin layer L43r remains the one medium on the Abbe estimate.

## 2026-10-30 — Fresh original-figure and glass reinspection

- Directly viewed local `patents/US20100220400A1.pdf`: Example 2 Fig. 4, PDF 5 (600 dpi optical-rim crop); Table 2, PDF 24, all 20 media; d-line definitions/Example 2 prose, PDF 23; general resin process ¶0105, PDF 27. Source d is587.6 nm (the plot g convention is435.6 nm); no numeric per-medium θgF or C/F/g anchors are supplied. Every stored nd/νd pair is retained:19 physical glass elements plus the0.190 mm hybrid-layer medium.
- Added S7 `rimExtensionSd:15.8`, preserving its12.4 mm optical cap. Fig. 4 shows the straight concave-end land: measured q≈.78±.011 (one-native-pixel range, edge≈167 nativepx; native scale≈10.8 px/mm from the119.164 mm vertex span). Adopted q=.78481 and 3.4 mm land use the existing15.8 mm working front rim. No new numeric cut or inward cap change.
- Source continuous outlines support S11/12/13A→11.1, hybrid frontS26→9.5 to match its existing junction/back, and rearS33/34/35A→12.8. The complete hybrid outline remains connected in actual SVG; no resin-only wing. Asphere departures at final caps: S6A15.8:+.363739 mm; S13A11.1:−.008853 mm; S27A9.5:+.145192 mm; S35A12.8:−.197388 mm. Polynomials remain physical on their opened ranges.
- Rejected the figure-scale front reduction to≈29.5 mm: full beam screening/refinement gives S1 reach 33.419896 mm (z=.05/focus1/field36.15758°), S2 31.000000 mm, S3 30.888570 mm, versus proposed cap 29.5+required margin.0885 mm; no untraced fields. Existing38/31/31 mm front caps remain a working-aperture departure from the figure. Other face endpoints, including the VR doublet, have no separately resolved, admissible additional land; retain their existing caps rather than invent cement-interface features.
- All 19 resolved curves remain unchanged qualified proxies; L43r alone is unresolved/Abbe-estimated. The source does not identify UV curing: removed that unsupported wording, keeping the hybrid/resin interpretation and unspecified chemistry/cure. Native-coordinate differences remain explicit in the public inventory (including Q-LASFPH2S1.765437/46.75 versus source 1.76546/46.73). Two ED positions remain a production correlation, not source-measured anomalous dispersion or supplier identification.
- Focused surface/image-circle/aperture checks pass. Full-field census: all 3 stations≥90%,2≥99%; the remaining source-prescription/summary discrepancy is retained. Nine actual SVG states have zero automatic trim. Glass resolver/catalog consistency passes, with 19/20 modeled coefficient curves. Source R/d/aspheres, every nd/νd pair and all controls remain unchanged.
