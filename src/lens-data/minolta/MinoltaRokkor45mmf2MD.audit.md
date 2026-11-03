# Audit Log - Minolta MD Rokkor 45mm f/2

Patent: US 4,277,149, Table 7

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- Local patent file checked: `patents/US4277149.pdf`.
- Table 7 gives normalized focal-length data with nd/vd rows only. It does not name glass suppliers, publish line indices, give partial-dispersion ratios, or publish clear apertures.

### Glass and APD disposition

- Replaced nearest-catalog prose with code fallback labels for the patent rows:
  - `781445`, `750501`, `701301`, `640353`, `755501`, and `697555`.
- No APD, ED, fluorite, or high-index special-glass status beyond ordinary high-index lanthanum/flint class labels is supported by the patent.

### Semi-diameter disposition

- The patent gives no clear-aperture table.
- Existing SDs remain inferred from the f/2 Gauss-type envelope and drawing proportions. The front positive group, stop region, and rear group apertures remain visually and optically plausible, so no SD edits were made.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.6 → 0.646 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 7.6 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: derived unit-focus travel; 0.6 m is the old (production) value.
- `catalog.closeFocusM.marketing` 0.6 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.
