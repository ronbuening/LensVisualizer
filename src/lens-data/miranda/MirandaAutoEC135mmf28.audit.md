# MirandaAutoEC135mmf28 — patent, aperture, and glass audit

## 2026-09-26 (UTC)

Source: local `patents/JPA 1976074627-000000.pdf`, Example 1, Fig. 1, PDF p. 4; prescription p. 3. Exact source pages and 600-dpi optical rims were inspected, excluding leaders, brackets, and mechanical outlines.

### Semi-diameters

All SDs retained.

The initial automated crop touched an edge and was rejected. The wider crop 0.32,0.16,0.54,0.28 at 600 dpi gives approximately 68.4 µm/px. Manual rims are about 23/21/15.4/11.7/11.7 mm, versus authored 26.5/24/18/13.5/13.5; differences are around the figure-noise threshold. The apparent larger L3/L5 automated readings pick up leaders, not optical rims. Retain the ray-clearance values.

### Glass classification

Coefficient-backed catalog coverage: **2/5 → 5/5 material entries**. Source coordinates are retained. Catalog names designate supplier-neutral spectral proxies, not production suppliers or melt identities. No measured line indices or `dPgF` were invented, and no APD claim was added from branding alone.

| Element | Authored nd / vd | Catalog curve / disposition |
|---|---:|---|
| L1 | 1.58913 / 61 | S-BAL35R |
| L2 | 1.58913 / 61 | S-BAL35R |
| L3 | 1.78472 / 25.6 | J-SF11 |
| L4 | 1.71736 / 29.5 | S-TIH1 |
| L5 | 1.62041 / 60.2 | J-SK16 |

The OHARA S-BAL35R addition uses the [manufacturer 25-04 datasheet](https://www.ohara-inc.co.jp/assets/en/product/pdf/esbal35r.pdf), with published Sellmeier constants and code 589610. Catalog integrity checks pass without changing coordinate tolerances. The Miranda 135mm L5 now uses the existing J-SK16 curve (1.62041/60.25) for its 1.62041/60.2 coordinate rather than treating the rounded-code difference as evidence against a qualified proxy.

### Source and modeling limits

The printed normalized f=100 and BFD=46.916 do not reproduce exactly from the table. The existing uniformly scaled prescription and its computed image-plane distance remain unchanged; this audit does not force agreement. The patent cover reads 島田 邦夫 (Kunio Shimada), not the draft transcription 富田 錦夫.

Surface geometry and image-circle floors pass with no undersized or skipped entries. The runtime renderer produces zero trim across sampled zoom/focus states, and the live optical silhouettes were compared with the figures. These checks do not remove the source/model limitations above.
