# Audit Log - Nikon AI Micro-Nikkor 105mm f/2.8S

Patent: US 4,392,724, Example 1

## 2026-06-24 - Patent glass and retained-data audit

### Phase 1 - Glass review

- Rechecked the Example 1 glass table against the current data file. No data changes were made in this pass.
- Retained `TAF1 / TAF105 class (HOYA, 773/496)`, `LAF3 class`, `E-LAF7 / S-LAM7 class`, `E-FD8 / S-TIM28 class`, `LAC13 class`, `TAF2 / J-LASF017 class`, and `NBFD3 class` labels as appropriate catalog or class-level matches for the published `nd`/`vd` pairs.
- Retained `TAC4 class (HOYA, 734/511)` as an Abbe-only historical HOYA class because no coefficient-backed public catalog entry in the current resolver was verified.
- Retained the two `Unmatched (595/355 vintage flint...)` rows because the patent glass is close to FF5 / S-FTM16 class but is measurably higher-index than the available public catalog entries.
- The front positive and several rear elements are high-index lanthanum/crown-flint classes as already documented; no new high-index metadata field was required.

### Phase 2 - Geometry and SD review

- Rechecked the radii, thicknesses, and glass assignments against Example 1. The existing data matches the published prescription.
- Confirmed that the patent publishes floating macro variables but does not publish per-surface clear apertures or a semi-diameter table.
- Retained the existing semi-diameters as visualization estimates. They taper rationally around the stop, preserve plausible edge clearance through the macro group, and remain consistent with the patent drawing and the documented no-clear-aperture source limitation.

### Phase 3 - Spectral / APD review

- The patent provides only `nd` and `vd`; no line-index table, partial-dispersion table, ED/APD claim, or aspherical data was found.
- No APD flags were added.

### Phase 4 - Analysis sync

- No analysis file changes were needed.

### Verification

- Pending full Nikon batch verification.
