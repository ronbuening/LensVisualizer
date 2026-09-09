# Audit Log — Nikon NIKKOR Z 135mm f/1.8 S Plena

Patent: WO 2024/147268 A1

## 2026-06-04 — Sweep 1 local patent relabel

- Local patent source: `patents/WO2024147268A1.pdf` (untracked local file).
- The local PDF is image-based under `pdftotext -layout`; row 26 was cross-checked against Google Patents OCR for the same WO publication.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L14 / row 26 | 1.78590 / 44.17 | `Lanthanum flint (near S-LAM55)` | `S-LAH51 (OHARA, patent nd/vd match)` | OHARA S-LAH51 round-trips the stored patent pair. |

## 2026-05-20 — Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain `WO 2024/147268 A1`.
- A nearby local WO file was not used as a substitute because it does not match the referenced patent number.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Catalog-mismatch second-batch recheck

- Re-searched the local untracked `patents/` folder for WO 2024/147268 A1 / `147268`; no matching PDF was present.
- Rendered and inspected local `US20240192474A1.pdf` as a possible nearby publication; it is a Canon/Iwamoto zoom patent, not the cited Nikon Z 135mm Plena family, so it was not used.
- No glass labels were changed, and no figure/SD check was possible without the cited patent file.

## 2026-07-29 - Local-patent glass disposition

- The cited source is now available locally as untracked `patents/WO2024147268A1.pdf`. Rechecked the worked
  prescription row; S13 remains 1.69680 / 55.52 and its R/d values are unchanged.
- S13 `Barium crown (near S-BAH27)` -> code-first `697555 — lanthanum crown (patent coordinate; vendor
  unresolved)`. The coordinate round-trips to the catalog code, while S-BAH27 is numerically unrelated.
- Synchronized the focus-element analysis and preserved supplier uncertainty.

## 2026-08-21 — SR spectral-proxy recovery

- Hikari's official 2023 catalog supplies J-SFH4 at `nd = 1.66382`, `νd = 27.346974`, and
  `θgF = 0.6319`. Its computed anomalous-partial-dispersion departure is about `+0.0341`, consistent with L1's
  patent-authored `+0.035` after rounding.
- Kept Nikon's proprietary SR identity explicit and added J-SFH4 only as a catalog spectral proxy. The proxy improves
  wavelength-dependent tracing without assigning Nikon's production supplier; no prescription or APD value changed.

## 2026-08-21 — Near/close glass-candidate review

- Rechecked WO 2024/147268 A1 and assigned supplier-neutral proxies to six additional elements: NBFD25 ×2,
  S-LAH63Q, S-LAH55VS, NBFD30, and J-LASF09A.
- Patent-authored partial dispersion is retained for both NBFD25-proxied elements; ambiguous candidates remain
  unassigned and no production supplier is inferred.

## 2026-09-08 — First-hosted audit, lens 18

- Inspected original ignored `patents/WO2024147268A1.pdf`: title p. 1, equation (a) and Table 1 pp. 20–22, dispersion conditions pp. 56–57, Figure 1 p. 66 rendered at 600 dpi. Earlier missing-source dispositions are superseded.
- Corrected source K=1 to standard K=0; retained all four polynomial coefficients and source R/d/nd/ν rows. Replaced the physical rear-stack sum with 11.4681 + 1.6/1.5168 + 1.3712 = 13.8941523 mm air-equivalent BFD. The finite source station gives β≈−0.200007 and inferred physical object-image distance 0.8245544 m.
- Refined drawing-derived rims using 133.0137 mm glass span. Automated RIM readback misidentified L1 and L6 leader ink; original high-resolution optical edges govern those measurements. Retained surface 29 at 19.3 mm: a 21.1 mm trial failed the 29→30 clearance gate (4.61 mm combined sag versus 3.872 mm allowed intrusion). Source drawing extents remain approximate, not asserted clear apertures.
- Converted source normal-line departures to engine dPgF: L1 +0.0343957; L5/L9 +0.0092593. Source precision remains three decimals. Removed approximate L8 override; qualified all catalog counterparts and unsupported production SR/ED, PGM and dual-STM claims. Recalculated all 16 isolated element focal lengths.
- Kept opposite-direction G2/G4 gap endpoints, labeled each group boundary, preserved f/1.85 in the aperture shortcut. Rewrote analysis around source values and explicit inferences.
- Production baseline inspected live. Local infinity, near and half-focus/f16 states inspected: near EFL 98.82 mm, 82 cm distance, five-group movement chart with maximum travel 13.60 mm; half-focus 1.65 m/EFL 113.79 mm and stop diameter 4.96 mm at f16. Fixed groups and disabled zoom chart confirmed.
- Surface and image-circle audits passed; four patent regression tests passed (matrix conjugates, normal-line conversion, group motion and five-state render diagnostics). Full gates and commit remain at the 11–20 batch boundary.
