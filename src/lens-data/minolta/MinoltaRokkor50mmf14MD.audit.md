# Audit Log - Minolta MD Rokkor 50mm f/1.4

Patent: US 4,182,550

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US4182550.pdf`; local text confirms the queued rows.
- Updated surface 3 to `Q-LASFPH2S (Nikon)` for nd=1.76500, vd=46.30.
- Updated surface 10 to `S-LAH51 (OHARA)` for nd=1.78100, vd=44.50.

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- Rechecked local `patents/US4182550.pdf`, Embodiment 2 / Table 2.
- L1 is listed only as nd = 1.7885, vd = 45.7; the patent does not name OHARA LAC14 or any other vendor glass.

### Glass and APD disposition

- Changed L1 from `LAC14 (OHARA)` to `789457` high-index lanthanum-flint code fallback.
- Retained the prior May updates for L2 and L6. The remaining near-match rows are explicitly documented as near/class matches rather than exact patent identities.
- No APD, ED, or fluorite status is supported by the patent.

### Semi-diameter disposition

- The patent gives no clear-aperture table.
- Existing SDs remain inferred from the f/1.4 Gauss envelope and drawing proportions. No SD edits were made.

## 2026-07-29 - Remaining unmatched-glass disposition

- Rechecked Embodiment 2 / Table 2 in local `patents/US4182550.pdf`; S10 remains 1.78100 / 44.50 and its R/d
  values are unchanged.
- S10 `S-LAH51 (OHARA)` -> explicit unmatched 781445 patent glass. The companion analysis retains S-NBH55
  only as a nearby family comparison and no longer supplies a catalog spectral identity.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.45 → 0.493 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 9.5 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: derived unit-focus travel; 0.45 m is the old (production) value.
- `catalog.closeFocusM.marketing` 0.45 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.
