# Audit Log - Nikon AI-S Zoom-Nikkor 35-70mm f/3.5

Patent: US 4,266,860, Second Embodiment / Claim 8

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked the Second Embodiment and Claim 8 against the current data file. No data changes were made in this pass.
- Retained unresolved/class-only rows:
  - `603/425 barium flint; Sumita K-BaSF5-equivalent`.
  - `Unmatched 595/356 light flint class`.
  - `Unmatched 511/509 light crown class`.
  - `648/338 dense flint; SF12 / FD12 class`.
- Retained the existing catalog/class labels for the remaining rows: `S-LAL12`, `S-LAL8`, `S-BSM16 / SK16`, `S-TIH6 / SF6`, and `N-BK7 / BK7-type`.

### Phase 2 - Geometry and SD review

- Confirmed the wide/tele back focal distances and variable gaps match the patent model used by the data file.
- The patent does not identify an aperture-stop surface or publish a clear-aperture table. The existing synthetic stop split in the patent `d15` gap remains documented and appropriate for rendering.
- Retained the existing SDs. They are renderer-safe estimates, not mechanical apertures, and they remain rational for the front positive group, moving zoom groups, and narrowed stop area.
- Retained the documented close-focus model: `D6` uses patent close-correction data and `D8` is paraxial-derived because the patent does not tabulate those values directly.

### Phase 3 - Spectral / APD review

- The patent gives only `nd` and `vd`. No ED/APD claim, line-index table, partial-dispersion table, or aspherical data was found.
- No APD flags were added.

### Phase 4 - Analysis sync

- No analysis file changes were needed.

### Verification

- Pending full Nikon batch verification.
