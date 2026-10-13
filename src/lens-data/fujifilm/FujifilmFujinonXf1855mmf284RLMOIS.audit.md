# Patent and glass audit

## 2026-09-22

Source: local `patents/US20150177500A1.pdf`, p. 2, Fig. 1 / Example 1, wide panel; 600 dpi. Axial scale approximately 40.73 µm/pixel.

| Surfaces | Before SD (mm) | After SD (mm) | Evidence |
| --- | --- | --- | --- |
| 4 / 5 (L21) | 11.2 / 8.4 | 13.9 / 9.4 | Front optical rim and curved rear rim; exclude the rear mechanical flange |

Other rims retained within figure uncertainty, including the constrained S12A/S13 gap. Catalog-derived nC/nF/ng overrides were removed; the shared resolver supplies compatible curves for 11/14 elements. The 691530 and 803404 aspheric coordinates remain unresolved after vendor-catalog review; neighboring curves alone do not establish their material dispersion.

## Local viewer follow-up

Live localhost review against Fig. 1 confirms G1/G3/G4 move objectward, G2 is stationary to middle then moves slightly objectward, and G5 is fixed. Rims are retained. A changing inferred iris follows the published f-number sequence. L11/L23 (S-NPH2 proxies) and L33 (S-FPL51 proxy) receive inferred APD colors; APD is not synonymous with the marketed count of ED elements. Glass labels explicitly qualify supplier identity.

The 101-position zoom sweep at three focus settings reports zero hidden surface trimming (303 states). Focus remains disabled because numerical finite-focus prescriptions are absent. The assignee uses the existing Fujifilm Corporation identity; historical Fuji entities are kept separate.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 (continued) on PDF page 18 (printed page 6): surface 25 d = 11.83 (fixed, not a DD gap);
  surfaces 26–27 are plate PP (Fig. 1 designation), 2.85 mm, nd 1.51680, νd 64.20; surface 27 → image is 2.42 mm.
  11.83 + 2.85/1.51680 + 2.42 reproduces the legacy folded 16.1289556962 mm exactly.
- Surface 25 now stores the physical 11.83 mm with `rearPlates` PP (N-BK7, the compatible 1.51680 / 64.2 catalog row;
  no OHARA row matches) and gapAfter 2.42 mm. Against the previous data, EFL and paraxial defocus are identical at all
  three zoom stations (worst difference 2.5×10⁻¹² mm); physical track grows by 0.971 mm.
