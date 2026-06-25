# Audit Log - Panasonic Leica DG Nocticron 42.5mm f/1.2 ASPH Power O.I.S.

Patent: US 2015/0192839 A1, Numerical Example 5

## 2026-06-24 - Systematic patent-table audit

### Patent evidence

- Re-extracted `patents/US20150192839A1.pdf` and checked Numerical Example 5 Tables 29-32 against the data file.
- Table 30 publishes nC, nF, ng, and PgF values, which the data file preserves for the powered glass rows.
- The patent does not publish semi-diameters or effective diameters.

### Disposition

| Area | Disposition |
|---|---|
| Prescription | No numeric changes. Radii, thicknesses, variable focus gaps, aspheres, and folded cover-glass treatment match the patent-derived data. |
| Glass labels | No relabels in this pass. The broad class labels remain appropriate where several public catalog families share nearby nd/vd values. |
| APD | L10 remains `apd: "patent"` because the patent's PgF/line-index table supports the anomalous partial-dispersion annotation. Other rows remain non-APD. |
| High-index status | L1 remains the UHR front collector; L2/L7/L13 remain very-high-index lanthanum class rows supported by nd = 1.91082. |
| SDs | Kept existing inferred SDs. With no patent aperture column, the current marginal/chief-ray-constrained diameters remain the defensible representation for the large f/1.2 beam. |
