# Chromatic Dispersion Notes

## Status

The chromatic engine now uses a four-tier preference cascade (Sellmeier catalog → measured `nC`/`nF` line indices → dPgF-corrected Abbe → plain Abbe) instead of unconditional Abbe. The schema, codemod, and dispersion engine are in place; the glass catalog itself is intentionally small (3 verified entries: N-BK7, S-BSL7, CaF2) and grows according to [agent_docs/glass-catalog-buildout.md](agent_docs/glass-catalog-buildout.md).

Per-surface dispersion quality is exposed via `summarizeDispersionQuality(L)` for future UI surfacing.

## Background — what the model couldn't represent

The LCA inset and overlay compute chromatic spread for both axial and off-axis ray fans. For lenses such as the
Voigtlander APO-Lanthar 50mm f/2, the widget historically showed a much larger LCA value than comparable Leica APO lenses
even though the lens is marketed as apochromatic.

The discrepancy was primarily a modeling limitation, not a rendering bug. The legacy chromatic trace derived red and
blue refractive indices from only the d-line index (`nd`) and Abbe number (`vd`). That Abbe-only approximation cannot
represent anomalous partial dispersion behavior, which is exactly what APO lenses use to bring a third wavelength closer
to the C/F correction pair.

## Why The Voigtlander Case Looks High

- Several APO-Lanthar glasses are proprietary or inferred in the data file, so the model has incomplete spectral data.
- The runtime dispersion path does not use partial dispersion (`PgF`, `dPgF`) or measured line indices (`nC`, `nF`,
  `ng`).
- The LCA readout is based on real marginal ray traces, so it includes spherochromatism at the selected pupil ray height.
- Leica APO data currently happens to cancel better under the simplified Abbe-only model, but that does not mean the
  simplified model is equally faithful across all APO prescriptions.

## Resolutions Implemented

1. ✅ Added optional per-element spectral fields `dPgF`, `nC`, `nF`, `ng` on `ElementData`.
2. ✅ Codemod `scripts/extract-dpgf.mjs` promoted `dPgF` from prose `apdNote` strings into structured numeric fields
   on 71 elements across 25 lens files.
3. ✅ New preference cascade in `src/optics/dispersion.ts`: Sellmeier (catalog) → line indices (`nC`/`nF`) →
   Abbe + dPgF (when g-line tracing lands) → plain Abbe. Cached as a per-surface closure on `RuntimeLens.indexByIdx`.
4. ✅ Glass catalog at `src/optics/glassCatalog.ts` with starter entries (N-BK7, S-BSL7, CaF2) and a string resolver
   that handles real-world `glass:` strings including 6-digit Schott CIDs and aliases.
5. ✅ `assertCatalogConsistent` validates that every entry round-trips Sellmeier-at-d-line back to its listed `nd`
   within 1e-4 — enforced as a unit test in `__tests__/dispersion.test.ts`.

## Remaining Approximations and Follow-ups

1. The catalog covers only 3 glasses; the rest of each lens still falls back to Abbe. See
   [agent_docs/glass-catalog-buildout.md](agent_docs/glass-catalog-buildout.md) for the prioritized buildout list and
   sourcing protocol.
2. Phase 3 (deferred): add g-line (435.8 nm) tracing to the LCA visualization and metric so the dPgF-corrected
   secondary-spectrum behavior is visible. Until then, the populated dPgF data is recorded but inactive in C/d/F traces.
3. Phase 4 (deferred): backfill `nC`/`nF`/`ng` on the truly proprietary glasses where the patent provides line indices
   (e.g. several Voigtländer APO-Lanthar elements). A pattern for capturing these during lens authoring should land in
   [agent_docs/adding_a_lens.md](agent_docs/adding_a_lens.md).
4. Add a quality badge ("Sellmeier", "Abbe approx") to the LCA inset/overlay using `summarizeDispersionQuality(L)` so
   approximate readings are surfaced to the user.
