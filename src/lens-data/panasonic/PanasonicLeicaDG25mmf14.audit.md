# Audit Log - Panasonic Leica DG Summilux 25mm f/1.4 ASPH

Patent: JP 2013-3324 A

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/JP2013003324A.pdf`; local text confirms the queued rows.
- Updated surface 1 to `TAFD40 (HOYA)` for nd=2.00060, vd=25.46.
- Updated surface 16A to `S-LAH66 (OHARA)` for nd=1.77250, vd=49.62.
- Converted surface 14A to a code-only `731405` annotation because no exact public coefficient-backed match was found.

## 2026-06-24 - Systematic patent-table audit

### Patent evidence

- Re-extracted `patents/JP2013003324A.pdf` and rechecked Numerical Example 2 prescription, aspheres, focus variables, and element focal-length table.
- The patent does not publish semi-diameters or effective diameters.

### Updates

| Area | Before | After | Disposition |
|---|---|---|---|
| L8 glass | `731405 - moldable flint (M-LAF81 code match...)` | `M-LAF81 (Hoya, 731405)` | Local catalog now contains coefficient-backed M-LAF81 for the exact nd/vd/code tuple. |
| Analysis sync | S-NPH2 / S-LAL8 / S-LAH51 wording | TAFD40 / M-LAF81 / S-LAH66 wording | Synced the analysis to the already-updated data labels and new L8 relabel. |
| APD | all rows non-APD | unchanged | Patent does not indicate ED/APD glass in this design. |
| High-index status | L1 UHR and high-index Gauss-core labels | unchanged | Patent nd values support TAFD40 at L1 and the existing high-index lanthanum roles. |
| SDs | ray-trace-derived estimates | unchanged | No patent clear-aperture column; current front cap and inner-focus diameters remain consistent with the drawing and 46 mm filter constraint. |
