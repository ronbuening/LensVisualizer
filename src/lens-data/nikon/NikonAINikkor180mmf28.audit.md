# Audit Log - Nikon AI Nikkor 180mm f/2.8

Patent: US 4,338,001, Embodiment 2

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked Embodiment 2 against the current data file. No data changes were made in this pass.
- Retained the front `Unmatched Nikon ED fluorophosphate` row with `apd: "inferred"`. The patent glass is an ED-class fluorophosphate by Abbe number, but the patent gives only `nd`/`vd` and no partial-dispersion constants.
- Retained `LAFN7 / E-LAF7 class` and `N-SSK5 / S-BSM25 class` as catalog-backed/class-level matches for the published values.
- Retained `KF3-class crown-flint` because no current coefficient-backed catalog entry was verified for the obsolete KF3-type row.
- Retained the rear `Unmatched (TAF/LaSF-class high-index flint...)` row. The stored `nd = 1.79668`, `vd = 45.4` is close to HOYA TAF2 / Hikari J-LASF017 class, but it does not round-trip as an exact public catalog match.

### Phase 2 - Geometry and SD review

- Confirmed the file is scaled from the patent's normalized `f = 100` prescription to 180 mm.
- The patent does not publish clear apertures. The stop location remains inferred from Fig. 1 in the long `d6` air space.
- Retained the existing semi-diameters. The 72 mm filter constraint, f/2.8 entrance pupil, large front ED element, and narrower stop region all remain proportionally rational for rendering.

### Phase 3 - Spectral / APD review

- No line-index table, partial-dispersion table, or aspherical data was found in the patent.
- The only APD status remains the inferred ED-class front element; no additional APD flags were added.

### Phase 4 - Analysis sync

- No analysis file changes were needed.

### Verification

- Pending full Nikon batch verification.
