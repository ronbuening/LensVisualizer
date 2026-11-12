# Separate E1 source/static audit

The first section below is the historical static-only record, not current v2 status. Fresh v2 strict TypeScript, native construction and bounded rays have now run; see FINAL_FOCUSED_RECEIPT.json and FIELD_DIAGNOSIS.json. No full integration or acceptance is claimed.

Exact isolated baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 commits. Whole E1 table visually rechecked against the original scan. Source addendum manifest verified locally; original verified Drive ID 1rxPeLgyjmAaFxkArjfETe4KioxrYuI0E, SHA256 458f1ed12e7ab5b95f18a2a92139fd5acfd2c5be0f0a0b575a143ce97194d972. Original custody unchanged.

Independent source reconstruction and static geometry pass. Declared 40× scale, assumed-d, unmatched materials, midpoint stop and inferred caps remain qualifications. Printed-BF plane 65.48 mm retained; source L rounding distinguished from independent BF residual. No source retuning, row mixing, E2 Seidel data or finite motion law.

Native and integration work NOT RUN. Paraxial cap clearance is not exact full-aperture validation. SHA256 before/after verification confirms completed XA2 archive and held E2 authored triad unchanged. This candidate contributes zero ready lenses until required native/integration checks are released and passed.


## Additive v2 review (2026-11-11)
Original audit above retained as historical static record. Current v2 changes only explicit rectilinear56deg field, maker maximum aperture16 and explanatory metadata. Source R/d/nV, assumed helium-d, inherited caps, midpointstop and printed-BF plane65.48 remain unchanged. See RIM_REVIEW.json and current focused receipts. No full acceptance; E2hold unchanged.

## Deployment validation (2026-11-12)

- Source: US 4,396,255 A (Google Patents PDF, `patents/US4396255A.pdf`), Embodiment 1. 12 R, 11 d, BF and 6 nd/νd
  match pages 6–8; every length is the normalized value × 40. EFL 40.001, BF 36.652 vs printed 36.72; the stored
  65.48 mm plane is 40 × (0.719 + 0.918). Helium d confirmed (S-TIH14 1.761821 at d vs 1.761572 at D).
- Product: the maker's handbook section (`https://esif.world-traveller.org/om-sif/lensgroup/images/40mmf2_diagram.jpg`)
  shows six separate elements with a central stop and L4/L5 almost touching, as in the patent's Fig. 1 (Embodiments
  1 and 2). Both embodiments fit; neither is established as the factory one.
- Integration fixes:
  - Rims raised to pass the f/2 axial bundle (`audit:aperture --raise`): surfaces 7/8 8.1 → 9.0, 9/10 9.4 → 9.7.
    Before, rims clipped the beam to about f/2.16.
  - `checks.gapSagFrac` 0.95: at 9.0 mm the L4 rear and L5 front faces of the 0.32 mm gap come within 0.02 mm, as the
    patent figure and the maker section both draw them.
  - Static focus sentinel 1e9 → 1e15 (house form).
- Open: name and subtitle wording ("E1 hypothesis") for the cleanup pass. Field coverage stops at the maker's 56°
  (96 % of the corner), which is the declared angle of view, not clipping.
