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
