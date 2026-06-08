# Proprietary Glass Patent Backfill

A focused follow-up to the chromatic dispersion overhaul. Current architecture is summarized in
[architecture/optics-engine.md](architecture/optics-engine.md). The chromatic engine now uses this preference cascade:
air → complete measured `nC`/`nF`/`ng` line indices → catalog Sellmeier → partial measured `nC`/`nF` line indices →
Abbe + dPgF → plain Abbe, backed by a 285-entry vendor catalog. What remains is a per-lens queue of proprietary, unidentified, or
inconsistently annotated glasses that no public catalog can safely resolve by name alone.

## Companion report: catalog mismatches

Separate from the proprietary-glass list below, there is a second category of dispersion-quality issue: surfaces whose `glass` annotation **does** resolve to a vendor catalog entry but whose stored `surface.nd` disagrees with the catalog Sellmeier nd by more than the safety-net tolerance (5e-3) — typically because the annotation was a speculative guess (e.g. `"S-LAH79 (OHARA) probable"` when the real glass is something else).

The dispersion engine rejects these mismatches and falls through to the Abbe path. The full per-surface list is auto-generated and lives in [catalog-mismatches.generated.md](generated/catalog-mismatches.generated.md). Regenerate it with `npm test -- catalogMismatchScan`. Candidate relabels live in [glass-relabel-candidates.generated.md](generated/glass-relabel-candidates.generated.md), regenerated with `npm test -- glassRelabelCandidatesScan`; unresolved non-matching tokens live in [unresolved-glass.generated.md](generated/unresolved-glass.generated.md), regenerated with `npm test -- unresolvedGlassScan`. The consolidated three-sweep queue is [glass-coverage-opportunities.generated.md](generated/glass-coverage-opportunities.generated.md), regenerated with `npm test -- glassCoverageOpportunitiesScan`.

The fix for a mismatch is one of:

1. **Relabel the glass annotation** to a guess that matches the stored `nd` (e.g. change `"S-LAH79 probable"` to `"S-LAH58 probable"` if S-LAH58's nd is closer to 1.85249 than S-LAH79's 2.0033).
2. **Mark the annotation as `Unmatched`** so the resolver skips it cleanly (e.g. `"Unmatched (lanthanum crown, designer attribution to S-LAH79 inconsistent with stored nd)"`).
3. **Update the stored `nd`** to match the catalog if the annotation is correct and the stored value was the wrong one.

These are per-lens authoring decisions and should ideally be settled by checking the original patent, the same as the Tier-A backfill below.

## Why catalog buildout cannot fix these

Proprietary glasses fall into two situations:

1. **Modern proprietary**: vendor (typically Sumita, Hoya, Ohara) supplied a custom melt to the lens designer that doesn't appear in the public catalog. The patent prescription often *does* list `nd`, `vd`, and frequently `nC`/`nF`/`ng` for these elements — that's how we'd backfill the line-indices path.
2. **Vintage proprietary**: lens-maker proprietary melts (Leitz ThO₂ glasses, mil-spec coatings) where the original recipe is undocumented publicly and may not appear in patents either.

For both, the Sellmeier path is permanently closed. The line-indices path is the only viable upgrade, and the only public source is the patent prescription tables.

## How the backfill applies

When you find line-index data in a patent, populate the matching element's `spectral` block in its `*.data.ts` file. The schema is in [src/types/optics.ts](../src/types/optics.ts) (`SurfaceSpectral` interface):

```ts
spectral: {
  nC: 1.49234,   // C-line (656.3 nm) refractive index
  nF: 1.49978,   // F-line (486.1 nm) refractive index
  ng: 1.50387,   // g-line (435.8 nm) — optional but recommended for APO designs
  dPgF: 0.0376,  // anomalous partial dispersion deviation (often listed separately)
}
```

The dispersion cascade in [src/optics/dispersion.ts](../src/optics/dispersion.ts) honors these immediately. With `nC`/`nF` populated the surface upgrades from `abbe` to `lineIndices` quality, and the LCA inset's quality badge will reflect the change.

If the patent only lists `nd`/`vd` and `dPgF` without explicit `ng`, populate `dPgF` alone — the V-channel cascade will use the Schott normal-line approximation plus your `dPgF` to estimate `ng`.

## Tier A — active source blockers

| Lens file | Patent reference | Elements needing backfill | Notes |
|---|---|---|---|
| _None after the 2026-06-08 local rendered-page review._ | | | |

Status column intentionally omitted — when you complete a backfill, delete the row from this table, regenerate the glass
reports, and add a changelog entry if the user-visible chromatic result changed materially.

## Tier B — likely infeasible (vintage proprietary)

| Lens file | Notes |
|---|---|
| [leica/LeicaElcan50mmf2.data.ts](../src/lens-data/leica/LeicaElcan50mmf2.data.ts) | Leitz mil-spec; sparse public documentation. Defer indefinitely. |
| [leica/LeicaSummicronV550mmf2.data.ts](../src/lens-data/leica/LeicaSummicronV550mmf2.data.ts) | Leitz vintage with ThO₂-bearing melts; original recipes destroyed/undocumented. Defer indefinitely. |

These remain on the Abbe path. The LCA inset's quality badge will read "Abbe approx" for these lenses, which is honest — there's no better data available.

## Reviewed Sweep 3 Outcomes

Rows removed from Tier A after local patent review:

| Lens file | Patent reference | Local patent source | Outcome |
|---|---|---|---|
| [voigtlander/VoigtlanderApoLanthar50f2.data.ts](../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.ts) | JP2021-43376A | `patents/JP2021043376A.pdf` (untracked local file) | Rechecked 2026-06-04. Existing patent-listed `dPgF` values on L3 and L4 were already captured; extracted text did not expose `nC`, `nF`, or `ng`. |
| [nikon/Nikon58f14GDesignCandidate.data.ts](../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts) | JP2013-019993A | `patents/JP2013019993A.pdf` (untracked local file) | Rechecked 2026-06-04. Prescription tables list `nd`/`νd` only; no line-index or partial-dispersion rows found. |
| [nikon/NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | US2020/0142168 A1 | `patents/US20200142168A1.pdf` (untracked local file) | Rechecked 2026-06-04. Example 1 publishes `n(d)`/`νd` only; no `nC`, `nF`, `ng`, `θgF`, or `dPgF` rows found. |
| [nikon/NikonZ58f095SNoct.data.ts](../src/lens-data/nikon/NikonZ58f095SNoct.data.ts) | WO2019/229849 A1 | `patents/WO2019229849A1.pdf` (untracked local file) | Local PDF is present but extracts as image-only/empty. Existing structured `dPgF` values were already present from the authoring pass; no new text-backed values added. |
| [nikon/NikonNikkorZ35mmf12S.data.ts](../src/lens-data/nikon/NikonNikkorZ35mmf12S.data.ts) | JP2025-52870A | `patents/JP2025052870A.pdf` (untracked local file) | Added structured `dPgF` for patent-listed `θgF` rows L19 and L42; no `nC`, `nF`, or `ng` rows found. |
| [nikon/NikonNikkorAFS80400mmf4556G.data.ts](../src/lens-data/nikon/NikonNikkorAFS80400mmf4556G.data.ts) | US2020/0049962 A1 | `patents/US20200049962A1.pdf` (untracked local file) | Rechecked 2026-06-04. Extracted text lists prescription `nd`/`νd` and coating spectral data, but no glass line-index or partial-dispersion rows. |
| [nikon/NikonAFS105f28G.data.ts](../src/lens-data/nikon/NikonAFS105f28G.data.ts) | US7,218,457 B2 | `patents/US7218457.pdf` (untracked local file) | Rechecked 2026-06-04. Patent tables list `nd`/`νd` only; no line-index or partial-dispersion rows found. |
| [nikon/NikonMicroNikkorPCE45mmf28D.data.ts](../src/lens-data/nikon/NikonMicroNikkorPCE45mmf28D.data.ts) | US7,656,591 B2 | `patents/US7656591.pdf` (untracked local file) | Rechecked 2026-06-04. US7656591 is present and confirms `nd`/`νd`, but no `nC`, `nF`, `ng`, `θgF`, or `dPgF` rows were found. |
| [nikon/NikonNikkorZ70200f28.data.ts](../src/lens-data/nikon/NikonNikkorZ70200f28.data.ts) | WO2020/105104 A1 | `patents/WO_2020105104_A1.pdf` (untracked local file) | Added structured `dPgF = 0.0341` for the SR L23 row from patent `θgF = 0.6319`; also confirmed L61/L64 and relabeled them to coefficient-backed Hikari `J-LASF021` / `J-LAF016`. The local PDF is image-only under `pdftotext`, so pages 22-23 were rendered and checked visually. |
| [nikon/NikonZ135f18.data.ts](../src/lens-data/nikon/NikonZ135f18.data.ts) | WO2024/147268 A1 | `patents/WO2024147268A1.pdf` (untracked local file) | Local PDF is present but extracts as image-only/empty. Existing structured `dPgF` values were already present from the authoring pass; no new text-backed values added. |
| [canon/CanonRF85mmf12L.data.ts](../src/lens-data/canon/CanonRF85mmf12L.data.ts) | US2020/0012073 A1 | `patents/US20200012073A1.pdf` (untracked local file) | Added structured patent `dPgF` values for L3 (`0.008`) and BR L9 (`0.092`); no `nC`, `nF`, or `ng` rows found. |
| [fujifilm/FujifilmXF35mmf14R.data.ts](../src/lens-data/fujifilm/FujifilmXF35mmf14R.data.ts) | US2014/0285903 A1 | `patents/US20140285903A1.pdf` (untracked local file) | Rechecked 2026-06-04. Patent tables list `Nd`/`vd` only for the proprietary PGM row; no line-index or partial-dispersion rows found. |
| [fujifilm/FujifilmXF50140mmf28R.data.ts](../src/lens-data/fujifilm/FujifilmXF50140mmf28R.data.ts) | US2017/0090163 A1 | `patents/US20170090163A1.pdf` (untracked local file) | Already cleared by Sweep 2 catalog work; current generated coverage is 23/23 Sellmeier surfaces, so no proprietary line-index backfill remains. |
| [nikon/NikonZ28f28.data.ts](../src/lens-data/nikon/NikonZ28f28.data.ts) | WO2022/071249 A1 | `patents/WO2022071249A1.pdf` (untracked local file) | Rechecked 2026-06-08. Local PDF is image-only under `pdftotext`; rendered Example 2 pages show the UV-curing resin row as `nd=1.56093`, `νd=36.64` only, with no `nC`, `nF`, `ng`, `θgF`, or `dPgF` rows in the prescription, asphere, or variable-gap tables. No data change. |
| [nikon/NikonNikkorZ50f18S.data.ts](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) | WO2019/220618 A1 | `patents/WO2019220618A1.pdf` (untracked local file) | Rechecked 2026-06-08. Local PDF is image-only under `pdftotext`; rendered Example 9 Table 9 lists only `R`, `D`, `nd`, and `νd`. The resin row `6*` is `nd=1.56093`, `νd=36.6`; no `nC`, `nF`, `ng`, `θgF`, or `dPgF` rows were found, and the dummy/virtual surfaces have no glass material to enrich. No data change. |

## Workflow

Run the four-phase procedure in [lens-patent-audit.md](lens-patent-audit.md). Phase 3 (spectral enrichment) is the active phase for this queue — populate `dPgF`, `nC`, `nF`, and `ng` on the matching element from the patent's prescription tables. The audit guide also covers the `*.audit.md` log convention so the change is traceable.

After verifying the LCA inset's quality badge upgrades from "Abbe approx" to "Measured (C/F)" or "Sellmeier", delete the
row from the Tier A table above and regenerate the glass reports.

## Why this is per-lens authoring work, not a one-shot migration

Patent reading is slow, embodiment-matching is finicky, and the data is not amenable to bulk extraction. The right cadence is to backfill one lens at a time when authoring or revisiting it, with the patent open in another window. The buildout above is the prioritized queue, not a deadline.
