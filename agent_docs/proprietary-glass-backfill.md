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

Each row has an nd/νd-only glass above νd 65 without `dPgF`, the anomalous-dispersion range where the normal-line
estimate fails, so photopic and C/d/F MTF fall back to the reference wavelength (`assessMtfSpectralData` in
`src/optics/analysis/mtfSupport.ts`). Elements are listed as label (nd / νd). Regenerate the set with
`scripts/audit-mtf.mjs --photopic` (reason `spectral-data-unavailable`). The other lenses with that reason are not patent
tasks:

- 14 native e-line lenses with non-catalog glasses need an engine estimate across C′/e/F′.
- Voigtländer Dynar 100, Heliar 100 (second asymmetric) and Meyer Kino-Plasmat 100 already record their patents'
  nD/nG′ pairs; they need an engine path for two-line historical indices.
- Hasselblad XCD 90V: its three 0.0126 mm cement layers carry the patent's νd 42.8 only in the header, because
  surfaces cannot hold νd; they need element modeling or a surface-level νd.
- Nikon R-UW 20-35: the water medium in front of the lens has no νd.

| Lens file | Patent reference | Elements needing backfill | Notes |
|---|---|---|---|
| [canon/CanonEFS1022mmf3545.data.ts](../src/lens-data/canon/CanonEFS1022mmf3545.data.ts) | US 2005/0286139 A1 | L4 rear positive asphere (1.48456 / 70) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [canon/CanonRF2870mmf28.data.ts](../src/lens-data/canon/CanonRF2870mmf28.data.ts) | US 2024/0329367 A1 | GB (1.544 / 66.3) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [carl-zeiss-jena/ZeissSonnar50f15.data.ts](../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.ts) | US 1,975,678 | Element 3 (1.4075 / 65.7) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [minolta/MinoltaAF400mmf45APOG.data.ts](../src/lens-data/minolta/MinoltaAF400mmf45APOG.data.ts) | JP 1996-327896 A | Element 1 (1.4931 / 83.6); Element 2 (1.4931 / 83.6) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [minolta/MinoltaAF70200mmf28APO.data.ts](../src/lens-data/minolta/MinoltaAF70200mmf28APO.data.ts) | JP 2004-109559 A | Element 2 (1.4931 / 83.58); Element 3 (1.4931 / 83.58); Element 12 (1.4931 / 83.58); Element 15 (1.4931 / 83.58) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [minolta/MinoltaAF80200mmf28APO.data.ts](../src/lens-data/minolta/MinoltaAF80200mmf28APO.data.ts) | JP 1989-039542 A | Element 12 (1.4931 / 83.6) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [nikon/NikonAINikkor180mmf28.data.ts](../src/lens-data/nikon/NikonAINikkor180mmf28.data.ts) | US 4,338,001 | Element 1 (1.50032 / 81.9) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [nikon/NikonAIZoomNikkor3601200mmf11ED.data.ts](../src/lens-data/nikon/NikonAIZoomNikkor3601200mmf11ED.data.ts) | US 3,743,384 | Front ED-type singlet (1.48606 / 81.5); Front triplet positive (1.48606 / 81.5); Hyperchromatic doublet negative (1.48606 / 81.5); Compensator second doublet positive (1.48606 / 81.5); Relay triplet positive (1.48606 / 81.5) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [nikon/NikonNikkor300mmf45ED.data.ts](../src/lens-data/nikon/NikonNikkor300mmf45ED.data.ts) | US 3,774,991 | Element 1 (1.48606 / 81.5); Element 4 (1.48606 / 81.5) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [nikon/NikonNikkor600mmf56ED.data.ts](../src/lens-data/nikon/NikonNikkor600mmf56ED.data.ts) | US 3,774,991 | Element 1 (1.48606 / 81.5) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [nikon/NikonNikkor800mmf8ED.data.ts](../src/lens-data/nikon/NikonNikkor800mmf8ED.data.ts) | US 3,774,991 | Element 1 (1.48614 / 81.5) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [nikon/NikonNikkorSW75mmf45.data.ts](../src/lens-data/nikon/NikonNikkorSW75mmf45.data.ts) | JP S53-57028 A | Element 4 (1.52 / 70.1) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [nikon/NikonZoomNikkor2845mmf45.data.ts](../src/lens-data/nikon/NikonZoomNikkor2845mmf45.data.ts) | US 3,771,853 A | Element 3 (1.44628 / 67.2) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [panasonic/PanasonicLeicaDG15mmf17.data.ts](../src/lens-data/panasonic/PanasonicLeicaDG15mmf17.data.ts) | US 2015/0268449 A1 | Element 1 (1.49913 / 80.1) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [panasonic/PanasonicLumixGVario714mmf4.data.ts](../src/lens-data/panasonic/PanasonicLumixGVario714mmf4.data.ts) | US 2010/0194930 A1 | Element 16 (1.523 / 70.1) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [pentax/Pentax02StandardZoom515mmF2845.data.ts](../src/lens-data/pentax/Pentax02StandardZoom515mmF2845.data.ts) | US 8,824,059 B2 | L31 (1.49283 / 82.7); L34 (1.51885 / 65.8) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [ricoh/RicohLensA162485mmf3555.data.ts](../src/lens-data/ricoh/RicohLensA162485mmf3555.data.ts) | US 2012/0307375 A1 | F (1.5377 / 66.6) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [rodenstock/RodenstockApoSironarW150mmf56.data.ts](../src/lens-data/rodenstock/RodenstockApoSironarW150mmf56.data.ts) | DE 3,907,928 A1 | Element 6 (1.46 / 65.8) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [schneider-kreuznach/SchneiderAPOSymmar100mmf56.data.ts](../src/lens-data/schneider-kreuznach/SchneiderAPOSymmar100mmf56.data.ts) | US 6,028,720 | Element 3 (1.52055 / 69.9) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [sony/SonyFE2870mmf2GM.data.ts](../src/lens-data/sony/SonyFE2870mmf2GM.data.ts) | WO 2025/263124 A1 | Element 2 (1.59489 / 68.6); Element 3 (1.59561 / 67) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [viltrox/ViltroxAF33mmf14E.data.ts](../src/lens-data/viltrox/ViltroxAF33mmf14E.data.ts) | CN 211826699 U | Element L14 (1.51 / 81.59) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |
| [voigtlander/VoigtlanderNokton60mmf95.data.ts](../src/lens-data/voigtlander/VoigtlanderNokton60mmf95.data.ts) | JP 2021-076740 A | Element 5 (1.57774 / 67.11) | νd > 65 without ΔPgF: look for θgF/ΔPgF, nC/nF/ng, or a glass name that resolves to a catalog curve. |

## Tier B — likely infeasible (vintage proprietary)

| Lens file | Notes |
|---|---|
| [leica/LeicaElcan50mmf2.data.ts](../src/lens-data/leica/LeicaElcan50mmf2.data.ts) | Leitz mil-spec; sparse public documentation. Defer indefinitely. |
| [leica/LeicaSummicronV550mmf2.data.ts](../src/lens-data/leica/LeicaSummicronV550mmf2.data.ts) | Leitz vintage with ThO₂-bearing melts; original recipes destroyed/undocumented. Defer indefinitely. |
| [fujifilm/FujifilmFujinar210mmf45.data.ts](../src/lens-data/fujifilm/FujifilmFujinar210mmf45.data.ts) | JP S29-2685 B prints one index (N) per glass; Abbe number and spectral reference are not published, which blocks spectral MTF. |
| [voigtlander/VoigtlanderColorSkopar28mmf28Aspherical.data.ts](../src/lens-data/voigtlander/VoigtlanderColorSkopar28mmf28Aspherical.data.ts) | JP 2023-032663 A omits νd for the cemented biconcave member (its nd is inferred from the published focal length), which blocks spectral MTF. |

These remain on the Abbe path, or on a constant index where no νd is published. The LCA inset's quality badge reads
"Abbe approx" or "No dispersion" for them, which is honest — there is no better data available.

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
