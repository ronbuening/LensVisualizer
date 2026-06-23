# Audit Log - Pentax-DA* 16-50mm f/2.8 ED AL[IF] SDM

Patent: US 7,301,711 B2

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US7301711.pdf`; local OCR is rough but the queued patent rows match the stored nd/vd values in the data file.
- Updated surface 2 glass to `S-LAL8 (OHARA)` for nd=1.71300, vd=53.90.
- Updated surface 4 glass to `S-LAH66 (OHARA)` for nd=1.77250, vd=49.60.
- Updated surface 11 glass to `S-TIM22 (OHARA)` for nd=1.64769, vd=33.80.

## 2026-06-23 - Pentax folder patent audit

- Rechecked local patent file `patents/US7301711.pdf` and reviewed the first drawing sheet.
- Left the two `BSM-class (586/609, vendor uncertain)` rows unchanged; no exact current public catalog match was identified for the stored patent coordinate.
- Left the hybrid UV-cure aspherical resin layer uncataloged, consistent with the patent hybrid-asphere construction.
- APD status remains `false`; the patent relies on high-Abbe ED-like glasses by nd/vd but does not provide partial-dispersion data.
- No patent clear-aperture or semi-diameter table was found. Existing zoom-state SD estimates remain unchanged and remain consistent with the broad front group, central stop, and relay-group drawing.
