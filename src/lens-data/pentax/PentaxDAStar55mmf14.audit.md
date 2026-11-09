# PENTAX SMC DA★ 55mm f/1.4 — audit log

## 2026-11-09 — Deployment validation

Independent check of US 2010/0073777 A1 Embodiment 1, Table 1 (p. 12, 300 dpi render): all 19 rows (R, d, nd, νd), the
stop 7.49 mm behind S6 (¶0061), the cemented L5/L6 interface, the S18–S19 cover glass (thickness printed, material not;
1.5168/64.2 assumed) and d15 1.00 → 13.27 agree; no aspheres; native scale. Engine EFL 56.357 (56.36), f/1.4,
half-field 14.3°, total length 93.2; close state −0.173× at 0.450 m, matching the patent's M and Ricoh's 0.45 m / 0.173×.
Attribution strong: Ricoh lists 9/8, 28.6°, one anomalous-dispersion element, and its drawing marks L8 (1.5924/68.3).

Deployment change (inferred rims only): the package's rims cut the f/1.4 axial beam at L4 and L6–L8 (`audit:aperture`
f/1.40 → f/1.50). L4's flat rear face meets the deep concave front of L5 (R −19.31, 5.49 mm gap) at h ≈ 13.49 mm, so
the tool's 13.6–13.7 mm is not reachable; L4 goes to 13.45 mm on both faces (square, as both drawings show it) with
`checks.gapSagFrac: 1`. The other raises are the `audit:aperture --raise` values: S1/S2 20.5 → 20.6, S10/S11 17 → 17.4,
S12/S13 16.8 → 17.4, S14/S15 16.5 → 16.8. After: `audit:surface` OK, aperture within 3 % of f/1.4, no axial clip at
infinity. The analysis paragraph that described the f/1.50 clip was rewritten.
Open: package wording (subtitle, repeated per-element sentence, MTF grid prose) and the name's ★ / missing "SDM" against
catalog peers ("DA* … SDM") remain for the cleanup pass.
