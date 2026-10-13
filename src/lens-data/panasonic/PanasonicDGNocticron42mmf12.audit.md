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

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the 18.5914 mm air-equivalent fold after surface 26 with the patent's physical rear stack, read from the
  rendered Table 29 (p. 12 and p. 13 continuation) and Table 30: d26 = 14.8222 mm, then plate L15 (surfaces 27–28)
  t = 4.2000 mm, nd 1.51680, νd 64.2, nC 1.51432, nF 1.52237, ng 1.52667, PgF 0.53418 (dPgF −0.0016); glass `N-BK7`
  (catalog-compatible). The trailing 1.0002 mm is derived, not printed: it keeps the legacy traced image plane
  (18.5914 − 14.8222 − 4.2/1.5168); the patent prints d28 = 1.0000 mm and BF = −0.00016 mm.
- Paraxial check against the previous data: EFL identical; defocus changes by 0.00001 mm at both focus keyframes
  (rounding of 4.2/1.5168 in the retained image plane). Physical track grows by 1.431 mm (t(1 − 1/n)), so the modeled
  track now matches the patent's 92.4997 mm overall length.
