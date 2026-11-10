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

## 2026-11-10 — Metadata fill

- `catalog.focalLengthMm.design` = 45: `patents/US4277149.pdf` PDF p. 9 (col. 7), Table 7 (Embodiment 7) heading "f = 1.0 F/2.0 2ω = 51.4° Back Focal Distance S′ = 0.8014", read from a 300 dpi render; printed f = 1.0 × the header's documented ×45.0 scale.
- `catalog.fNumber.design` = 2.0: same Table 7 heading, "F/2.0". The text layer garbles this as "F/2.02" (it runs the "2" of "2ω" into the f-number); the render shows F/2.0. The stop's `nominalFNumber` 2 passes the 0.5% guard.
