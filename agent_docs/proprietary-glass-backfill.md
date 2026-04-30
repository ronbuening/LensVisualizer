# Proprietary Glass Patent Backfill

A focused follow-up to the chromatic dispersion overhaul (see [CHROMATIC_DISPERSION_NOTES.md](../CHROMATIC_DISPERSION_NOTES.md)). The chromatic engine now has a four-tier preference cascade — Sellmeier → measured `nC`/`nF`/`ng` line indices → Abbe + dPgF → plain Abbe — and a ~24-entry vendor catalog covers most catalog-resolvable glass declarations. What remains is a small set of lens prescriptions that name proprietary or unidentified glasses no public catalog will ever publish Sellmeier coefficients for.

## Companion report: catalog mismatches

Separate from the proprietary-glass list below, there is a second category of dispersion-quality issue: surfaces whose `glass` annotation **does** resolve to a vendor catalog entry but whose stored `surface.nd` disagrees with the catalog Sellmeier nd by more than the safety-net tolerance (5e-3) — typically because the annotation was a speculative guess (e.g. `"S-LAH79 (OHARA) probable"` when the real glass is something else).

The dispersion engine rejects these mismatches and falls through to the Abbe path. The full per-surface list is auto-generated and lives in [agent_docs/catalog-mismatches.generated.md](catalog-mismatches.generated.md). Regenerate it with `npm test -- catalogMismatchScan`.

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

## Tier A — feasible (modern Japanese/US patents typically list line indices)

| Lens file | Patent reference | Elements needing backfill | Notes |
|---|---|---|---|
| [voigtlander/VoigtlanderApoLanthar50f2.data.ts](../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.ts) | JP2021-43376A | 4 (3 Sumita unmatched + 1 KZFS-adjacent) | **Highest priority** — the marquee regression case named in the chromatic notes |
| [nikon/Nikon58f14GDesignCandidate.data.ts](../src/lens-data/nikon/Nikon58f14GDesignCandidate.data.ts) | (verify) | 1 (S-NBM51 / KZFS2-type short flint) | |
| [nikon/NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | (verify) | Several fluorophosphate crown placeholders | |
| [nikon/NikonZ28f28.data.ts](../src/lens-data/nikon/NikonZ28f28.data.ts) | (verify) | 1 UV-curing resin (proprietary) | Resin may not have line indices in patents |
| [nikon/NikonZ58f095SNoct.data.ts](../src/lens-data/nikon/NikonZ58f095SNoct.data.ts) | JP2020-44305A (or similar) | Multiple ED phosphate elements | |
| [nikon/NikonNikkorZ35mmf12S.data.ts](../src/lens-data/nikon/NikonNikkorZ35mmf12S.data.ts) | (verify) | Multiple phosphate crown ED elements | Patent partial-dispersion data already in apdNote |
| [nikon/NikonNikkorAFS80400mmf4556G.data.ts](../src/lens-data/nikon/NikonNikkorAFS80400mmf4556G.data.ts) | (verify) | S-FPL51 class + FCD100 + phosphate crown placeholders | |
| [nikon/NikonAFS105f28G.data.ts](../src/lens-data/nikon/NikonAFS105f28G.data.ts) | (verify) | Unmatched proprietary | |
| [nikon/NikonMicroNikkorPCE45mmf28D.data.ts](../src/lens-data/nikon/NikonMicroNikkorPCE45mmf28D.data.ts) | (verify) | Unmatched proprietary | |
| [nikon/NikonNikkorZ50f18S.data.ts](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) | (verify) | Unmatched proprietary | |
| [nikon/NikonNikkorZ70200f28.data.ts](../src/lens-data/nikon/NikonNikkorZ70200f28.data.ts) | (verify) | Unmatched proprietary | |
| [nikon/NikonZ135f18.data.ts](../src/lens-data/nikon/NikonZ135f18.data.ts) | (verify) | Unmatched proprietary | |
| [canon/CanonRF85mmf12L.data.ts](../src/lens-data/canon/CanonRF85mmf12L.data.ts) | (verify) | UD-class fluorophosphate | |
| [fujifilm/FujifilmXF35mmf14R.data.ts](../src/lens-data/fujifilm/FujifilmXF35mmf14R.data.ts) | (verify) | Unmatched proprietary | |
| [fujifilm/FujifilmXF50140mmf28R.data.ts](../src/lens-data/fujifilm/FujifilmXF50140mmf28R.data.ts) | (verify) | Unmatched proprietary | |

Status column intentionally omitted — when you complete a backfill, delete the row from this table and update [CHROMATIC_DISPERSION_NOTES.md](../CHROMATIC_DISPERSION_NOTES.md) if the lens was on the regression watchlist.

## Tier B — likely infeasible (vintage proprietary)

| Lens file | Notes |
|---|---|
| [leica/LeicaElcan50mmf2.data.ts](../src/lens-data/leica/LeicaElcan50mmf2.data.ts) | Leitz mil-spec; sparse public documentation. Defer indefinitely. |
| [leica/LeicaSummicronV550mmf2.data.ts](../src/lens-data/leica/LeicaSummicronV550mmf2.data.ts) | Leitz vintage with ThO₂-bearing melts; original recipes destroyed/undocumented. Defer indefinitely. |

These remain on the Abbe path. The LCA inset's quality badge will read "Abbe approx" for these lenses, which is honest — there's no better data available.

## Workflow

1. **Open the patent.** Use Espacenet ([https://worldwide.espacenet.com](https://worldwide.espacenet.com)) or J-PlatPat for JP patents; USPTO Public PAIR or Google Patents for US/EP.
2. **Find the prescription table.** Patent embodiments tabulate per-surface (R, d, nd, vd) plus often per-element (nC, nF, ng) and (PgF, ΔPgF). Different embodiments may have different glass — make sure you're matching the embodiment whose dimensions correspond to this lens prescription.
3. **Transcribe the data into the matching `*.data.ts` file's `spectral` block.** See `src/lens-data/TEMPLATE.data.ts.template` for the field layout. Use full patent precision (typically 5 decimal places for indices).
4. **Verify.** Reload the lens in `npm run dev` and confirm the LCA inset quality badge changes from "Abbe approx" to "Measured (C/F)" or "Sellmeier" depending on which path the cascade lands on.
5. **Delete the row from the Tier A table** above and update [CHROMATIC_DISPERSION_NOTES.md](../CHROMATIC_DISPERSION_NOTES.md) if the lens was a named regression case.

## Why this is per-lens authoring work, not a one-shot migration

Patent reading is slow, embodiment-matching is finicky, and the data is not amenable to bulk extraction. The right cadence is to backfill one lens at a time when authoring or revisiting it, with the patent open in another window. The buildout above is the prioritized queue, not a deadline.
