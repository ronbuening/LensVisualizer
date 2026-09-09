# Proprietary Glass Patent Backfill

The queue of proprietary, unidentified, or inconsistently annotated glasses that no public catalog can resolve by
name, and the method for upgrading them from patent-published line indices. The chromatic engine (summarized in
[architecture/optics-engine.md](architecture/optics-engine.md)) uses this preference cascade: air → complete measured
`nC`/`nF`/`ng` line indices → catalog Sellmeier with authored `dPgF` retained at g → partial measured `nC`/`nF` →
Abbe + `dPgF` → plain Abbe, backed by the vendor catalog in `src/optics/glassCatalog.ts`.

Catalog-coordinate mismatches (an annotation that resolves to a catalog row whose `(nd, νd)` disagrees with the stored
values) are a different queue: see [glass-relabel-followup.md](glass-relabel-followup.md), which also lists the
generated reports and the closed glass families that must not be re-audited. For code-only rows, the active A-E queue
is [six-digit-glass-codes-missing-sellmeier.generated.md](generated/six-digit-glass-codes-missing-sellmeier.generated.md);
regenerate every glass report with `npm run generate:glass-reports`.

## Why catalog buildout cannot fix these

Proprietary glasses fall into two situations:

1. **Modern proprietary**: a vendor (typically Sumita, Hoya, Ohara) supplied a custom melt that does not appear in the
   public catalog. The patent prescription often *does* list `nd`, `vd`, and frequently `nC`/`nF`/`ng` for these
   elements — that is how the line-indices path gets backfilled.
2. **Vintage proprietary**: lens-maker melts (Leitz ThO₂ glasses, mil-spec formulations) whose recipes are undocumented
   publicly and may not appear in patents either.

For both, the Sellmeier path is permanently closed. The line-indices path is the only viable upgrade, and the only
public source is the patent prescription table.

## How the backfill applies

When a patent publishes line-index data, populate the fields directly on the matching `ElementData` object in its
`*.data.ts` file. The authoring schema is `ElementData` in [src/types/optics.ts](../src/types/optics.ts);
`SurfaceSpectral` is derived at runtime and is not an authored wrapper.

```ts
nC: 1.49234,   // C-line (656.3 nm) refractive index
nF: 1.49978,   // F-line (486.1 nm) refractive index
ng: 1.50387,   // g-line (435.8 nm) — optional but recommended for APO designs
dPgF: 0.0376,  // anomalous partial dispersion deviation (often listed separately)
```

When the prescription itself publishes `ne` / `νe` and those values are retained in the historical `nd` / `vd` slots,
also set `indexReference: "e"`. Omit the field for d-line values and for prescriptions already converted from e-line
to d-line. This metadata selects C′/e/F′ compatibility, prevents d-line code substitution, and preserves the source
prescription unchanged.

The cascade in [src/optics/dispersion.ts](../src/optics/dispersion.ts) honors these immediately: with `nC`/`nF`
populated the surface upgrades from `abbe` to `lineIndices` quality, and the LCA inset's quality badge reflects it. If
the patent lists only `nd`/`vd` and `dPgF` (or `θgF`) without explicit `ng`, populate `dPgF` alone — the V-channel
cascade uses the Schott normal-line approximation plus `dPgF` to estimate `ng`, including when a compatible catalog
curve supplies the C/d/F channels.

## Tier A — active source blockers

| Lens file | Patent reference | Elements needing backfill | Notes |
|---|---|---|---|
| _None._ | | | |

## Tier B — likely infeasible (vintage proprietary)

| Lens file | Notes |
|---|---|
| [leica/LeicaElcan50mmf2.data.ts](../src/lens-data/leica/LeicaElcan50mmf2.data.ts) | Leitz mil-spec; sparse public documentation. Defer indefinitely. |
| [leica/LeicaSummicronV550mmf2.data.ts](../src/lens-data/leica/LeicaSummicronV550mmf2.data.ts) | Leitz vintage with ThO₂-bearing melts; original recipes destroyed/undocumented. Defer indefinitely. |

These remain on the Abbe path. The LCA inset's quality badge reads "Abbe approx" for them, which is honest — there is
no better data available.

## Closed — do not re-audit

Tier A was emptied by the 2026-06-04/08 local rendered-page review. The lenses then listed — Voigtländer APO-Lanthar
50/2; Nikon 58/1.4 G, AF-S 24-70 f/2.8E, Z 58 Noct, Z 35/1.2, AF-S 80-400, AF-S 105 Micro, PC-E 45, Z 70-200, Z 135,
Z 28, Z 50/1.8; Canon RF 85/1.2; Fujifilm XF 35/1.4, XF 50-140 — publish `nd`/`νd` and at most `θgF` in their
prescription tables; every published `θgF` is already stored as `dPgF`. Do not reopen them without a new source.
Glass-family and six-digit-code decisions are closed in [glass-relabel-followup.md](glass-relabel-followup.md).

## Workflow and how to close a row

Run the four-phase procedure in [lens-patent-audit.md](lens-patent-audit.md). Phase 3 (spectral enrichment) is the
active phase for this queue — populate `dPgF`, `nC`, `nF`, and `ng` on the matching element from the patent's
prescription tables, and record the change in the lens's `*.audit.md` log.

After verifying that the LCA inset's quality badge upgrades from "Abbe approx" to "Measured (C/F)" or "Sellmeier",
delete the row from the Tier A table, regenerate the glass reports, and add a changelog entry if the user-visible
chromatic result changed materially. A status column is intentionally omitted: rows are either open or deleted.

Patent reading is slow, embodiment matching is finicky, and the data does not bulk-extract. Backfill one lens at a
time when authoring or revisiting it, with the patent open alongside.
