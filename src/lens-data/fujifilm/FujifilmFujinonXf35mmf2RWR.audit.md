# FUJIFILM FUJINON XF 35mm f/2 R WR — integration audit

## 2026-09-15 (UTC)

### Patent geometry

Source: local untracked `patents/US20170010441A1.pdf`, PDF page 2, Fig. 2; inspected at 600 dpi.

Retained all SDs after testing the larger figure envelope. The corrected crop gives 23.03 µm/px, with approximately 8.7 mm L31 and 10.6 mm inner-triplet rims. S9A = 8.2 / S10A = 8.7 mm produced rim slopes of 86.4°/88.2° and a 7.18 mm sag intrusion across a 0.225 mm air gap. S12 = 10.3 mm also exceeded the rim-slope limit. The drawing cannot override valid polynomial/spherical apertures. Existing departures remain unchanged.

### Glass classification

The patent nd/νd coordinates are retained. The following existing catalog curves pass the shared coordinate guard; they are dispersion proxies, not evidence of a production supplier or historical melt. No complete per-element nC/nF/ng or unsupported partial-dispersion values were introduced. All 9 elements resolve; no additional catalog type is required.

| Element | Patent nd / νd | Runtime curve | Catalog minus patent nd / νd |
| --- | --- | --- | --- |
| L11 | 1.883 / 40.76 | S-LAH58 | -0.000003 / 0.005 |
| L12 | 1.755 / 52.32 | J-LASKH2 | 0.000000 / 0.020 |
| L13 | 1.89286 / 20.36 | S-NPH4 | 0.000000 / 0.000 |
| L21 | 1.755 / 52.32 | J-LASKH2 | 0.000000 / 0.020 |
| L31 | 1.61881 / 63.85 | M-PCD4 | 0.000000 / 0.000 |
| L32 | 1.7725 / 49.6 | J-LASF016 | 0.000000 / 0.020 |
| L33 | 1.60342 / 38.03 | J-F5 | 0.000000 / 0.000 |
| L34 | 1.7725 / 49.6 | J-LASF016 | 0.000000 / 0.020 |
| L35 | 1.51633 / 64.06 | S-BSL7 | 0.000000 / 0.080 |

### Metadata

Display names follow the catalog's uppercase manufacturer/line convention. Canonical maker and assignee spelling and romanized inventor names are used while the analysis preserves source wording and qualified production correlations.

### Second figure, glass and live-diagram review

The second local-site comparison uses Example 1 / Fig. 2, not Example 2. Retained SDs: enlarging the rear aspheres to the apparent mechanical outline makes the high-order polynomial leave its valid optical domain and creates excessive rim slope/gap intrusion. The small flat outer segments are not continuation of the optical asphere. Element order, cemented triplet, asphere markers and group labels are retained. The shared inspector now calls T1 a triplet and excludes the next glass at each cemented rear interface from the selected element's dispersion rows. Inspector labels explicitly name the compatible catalog proxies. L35 now uses the newly added L-BSL7 low-Tg curve instead of its former S-BSL7 alias, matching the authored 1.51633/64.06 coordinates. No patent partial-dispersion table supports new APD tags.

The patent states that G2/L21 moves imageward for closer focus but supplies no travel distances; the live control correctly remains disabled. The explanation now uses plain language. All six lenses in this batch are primes; none has an optical zoom travel series.
