# Chromatic Dispersion Notes

## Status

The chromatic engine uses a four-tier preference cascade (Sellmeier catalog → measured `nC`/`nF`/`ng` line indices → Abbe + dPgF → plain Abbe) instead of unconditional Abbe. The vendor-published Sellmeier catalog covers the most-used ~32 glasses across the lens library (24 → 32 in the Apr 2026 buildout, past the documented 30-entry diminishing-returns line); remaining catalog buildout follows [agent_docs/glass-catalog-buildout.md](agent_docs/glass-catalog-buildout.md).

The chromatic ray trace now spans four channels: R = C-line (656 nm), G = d-line (588 nm), B = F-line (486 nm), V = g-line (436 nm). The V channel is opt-in via the COLOR controls and reveals secondary spectrum residuals — the residual focus shift between G and V is what distinguishes a true APO lens from a conventional achromat.

Per-surface dispersion quality is surfaced in the LCA inset and overlay via a small badge ("Sellmeier" / "Measured (C/F)" / "Abbe approx" / "No dispersion"), driven by `summarizeDispersionQuality(L)`.

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

1. ✅ Glass catalog now has ~24 vendor-verified Sellmeier entries, covering the headline regression cases plus the most-used Ohara/Schott/Hoya/Sumita glasses. Further buildout per [agent_docs/glass-catalog-buildout.md](agent_docs/glass-catalog-buildout.md) remains optional — diminishing returns past the top 30.
2. ✅ g-line (435.8 nm) tracing landed as the V channel. The dPgF data populated by the Phase 1 codemod is now active across all three cascade tiers (Sellmeier always was; line-indices honors `ng`; Abbe uses Schott normal-line + dPgF).
3. **Open**: backfill `nC`/`nF`/`ng` on truly proprietary glass elements (Sumita unidentified melts, vintage Leitz, manufacturer-internal placeholders). This is per-lens patent-reading work, not catalog buildout. The prioritized list of lenses needing this is in [agent_docs/proprietary-glass-backfill.md](agent_docs/proprietary-glass-backfill.md), and the workflow for capturing line indices during lens authoring is in [agent_docs/adding_a_lens.md](agent_docs/adding_a_lens.md).

   **Companion mismatch tracking** (Apr 2026 update): two auto-generated reports drive the verified mismatch sweep — [agent_docs/catalog-mismatches.generated.md](agent_docs/catalog-mismatches.generated.md) (raw mismatches, regenerate with `npm test -- catalogMismatchScan`) and [agent_docs/glass-relabel-candidates.generated.md](agent_docs/glass-relabel-candidates.generated.md) (per-mismatch candidate suggestions filtered by stored `(nd, vd)`, regenerate with `npm test -- glassRelabelCandidatesScan`). Per-lens authoring decisions and follow-up worklist live in [agent_docs/glass-relabel-followup.md](agent_docs/glass-relabel-followup.md). Current state: 144 mismatched surfaces (down from 117→160→144 — the Phase 1 catalog buildout exposed previously-hidden mislabels that the resolver couldn't reach before, then the high-confidence relabel batch resolved 16 of them).
4. ✅ Quality badge in the LCA inset/overlay surfaces `summarizeDispersionQuality(L)` to the user.
