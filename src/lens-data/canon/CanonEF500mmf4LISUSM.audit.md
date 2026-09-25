# Canon EF 500mm f/4 L IS USM — patent audit

## 2026-09-25 — MTF image-plane census

Source: local `patents/US6115188.pdf`, Numerical Example 24, PDF p.79,
columns 33–34 (the page is image-only despite surrounding searchable pages).
Visually checked every R3–R29 radius, thickness and index, all 15 powered-element
Abbe numbers, the infinity D12=20.52 / D15=93.55 state, and the original stop.
All match. No dimensional scaling, aspheres or source line indices are present.
The PDF's correction certificate does not amend Example 24.

**Cause: folded rear plate plus source self-inconsistency.** Source R30/R31 FL is
2.20 mm / 1.516330 / 64.1 after D29=30.00 mm. Restored it to `rearPlates`;
D31=31.34 and D32=38.94 sum to the physical 70.28 mm trailing gap across inactive FC.
No inferred glass identity was added. Front plane HG (5.00 mm, same coordinate) is
outside the rear-plate scope and has no infinity power; its existing finite-object
normalization is retained. Close focus is a declared reconstruction, not used here.

Independent reduced-angle propagation yields EFL 491.356789 mm (source 490.56),
air BFL 102.401315 mm, physical BFL 103.150443 mm. Source physical image distance is
30+2.20+31.34+38.94=102.48 mm. The old fold was 101.730871512 mm. No single supported
misprint explains both residuals. Keep published values; do not fit a new rear gap.
Runtime offset **+0.670443 → +0.670443 mm**; Section E row deleted as documented.
The filter restoration changes physical image placement and exact tracing; changelog added.
Validation: focused buildLens/MTF check; full corpus gates at the ten-lens checkpoint.
