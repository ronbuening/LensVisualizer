# Proprietary Glass Patent Backfill

A focused follow-up to the chromatic dispersion overhaul. Current architecture is summarized in
[architecture/optics-engine.md](architecture/optics-engine.md). The chromatic engine now uses this preference cascade:
air → complete measured `nC`/`nF`/`ng` line indices → catalog Sellmeier with authored `dPgF` retained at g → partial
measured `nC`/`nF` line indices → Abbe + dPgF → plain Abbe, backed by the current vendor catalog in
`src/optics/glassCatalog.ts`. What remains is a
per-lens queue of proprietary, unidentified, or inconsistently annotated glasses that no public catalog can safely
resolve by name alone.

## Companion report: catalog mismatches

Separate from the proprietary-glass list below, there is a second category of dispersion-quality issue: surfaces whose
`glass` annotation **does** resolve to a vendor catalog entry but whose stored `(nd, νd)` disagrees with the catalog
coordinates beyond the safety-net tolerance (nd ±0.003 or νd ±2) — typically because the annotation was a speculative
guess (e.g. `"S-LAH79 (OHARA) probable"` when the real glass is something else).

The dispersion engine rejects coordinate mismatches, then falls through to the best lower-quality path available:
direct line indices when present, otherwise dPgF-corrected/plain Abbe or constant index. Native e-line coordinates
(`indexReference: "e"`) can resolve only through an explicit name or alias that reproduces C′/e/F′; d-line
six-digit codes are ignored for those rows. The full per-surface mismatch list is auto-generated and lives in
[catalog-mismatches.generated.md](generated/catalog-mismatches.generated.md). Regenerate it with
`npm run generate:glass-reports`. Candidate relabels live in
[glass-relabel-candidates.generated.md](generated/glass-relabel-candidates.generated.md), regenerated with
`npm run generate:glass-reports`; unresolved non-matching tokens live in
[unresolved-glass.generated.md](generated/unresolved-glass.generated.md), regenerated with
`npm run generate:glass-reports`. The consolidated three-sweep queue is
[glass-coverage-opportunities.generated.md](generated/glass-coverage-opportunities.generated.md), regenerated with
`npm run generate:glass-reports`.

For code-only rows, start with
[six-digit-glass-codes-missing-sellmeier.generated.md](generated/six-digit-glass-codes-missing-sellmeier.generated.md).
Its active A-E queue indexes both the manual sidecar and companion audit logs. The current report contains 229
missing-Sellmeier elements, of which 99 are self-recording explicit unmatched/unidentified dispositions; no rows
remain active and unreviewed. The full inventory remains in the same report for audit context.

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

When you find line-index data in a patent, populate the fields directly on the matching `ElementData` object in its
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

The dispersion cascade in [src/optics/dispersion.ts](../src/optics/dispersion.ts) honors these immediately. With `nC`/`nF` populated the surface upgrades from `abbe` to `lineIndices` quality, and the LCA inset's quality badge will reflect the change.

If the patent only lists `nd`/`vd` and `dPgF` without explicit `ng`, populate `dPgF` alone — the V-channel cascade will
use the Schott normal-line approximation plus your `dPgF` to estimate `ng`, including when a compatible catalog curve
supplies the C/d/F channels.

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

## Reviewed high-frequency proprietary families

| Code | Lens files | Patent evidence | Outcome |
|---|---:|---|---|
| `493836` | 4 files / 9 elements | Minolta AF 200mm US 4,786,152 gives two `nd = 1.49310`, `vd = 83.55`, `theta_gF = 0.539` rows; Minolta AF 70-200mm JP 2004-109559 gives four `1.49310 / 83.58` rows; JP1996-327896 Example 1 adds two `1.49310 / 83.6` rows and JP1989-039542 Example 1 adds one. The latter three patents publish no partial dispersion for this family. | No row exists inside the runtime compatibility guard in the reviewed official OHARA, HOYA, Hikari, or Sumita coefficient catalogs. Retained explicit Minolta AD/ED classifications; rows without a catalog curve are recorded as unmatched. The 200mm keeps its patent-derived `dPgF`; the other prescriptions remain APD-inferred only. |
| `796409` | 6 files / 7 elements | Six Nikon patents independently print `nd = 1.79631`, `vd = 40.90` across seven elements. | Phase 92 recovered legacy HOYA NBFD2 (`1.797199 / 41.143795`) from the official obsolete-inclusive catalog. All seven rows now use its coefficients as a catalog equivalent inside runtime tolerance; production suppliers remain unspecified. |
| `797454` | 5 files / 6 elements: [Nikon28Ti28mmf28.data.ts](../src/lens-data/nikon/Nikon28Ti28mmf28.data.ts), [NikonAFZoomNikkor2880mmf3556.data.ts](../src/lens-data/nikon/NikonAFZoomNikkor2880mmf3556.data.ts), [NikonRUWAFNikkor13mmf28.data.ts](../src/lens-data/nikon/NikonRUWAFNikkor13mmf28.data.ts), [NikonAFNikkor28mmf28D.data.ts](../src/lens-data/nikon/NikonAFNikkor28mmf28D.data.ts), and [NikonRUWAFZoomNikkor2035mmf28.data.ts](../src/lens-data/nikon/NikonRUWAFZoomNikkor2035mmf28.data.ts) | The reviewed Nikon rows print `nd = 1.79668`, `vd = 45.37–45.4`; the US 5,557,473 row was also rendered and checked visually. | Relabeled to Hikari J-LASF017 (`1.79500 / 45.31`, code `795453`) as a coefficient-backed catalog equivalent within the runtime safety window. Every annotation leaves the production supplier unidentified. |
| `773497` | 3 files / 5 elements: [CanonFD150600mmf56L.data.ts](../src/lens-data/canon/CanonFD150600mmf56L.data.ts), [OlympusZuikoAutoMacro50mmf2.data.ts](../src/lens-data/olympus/OlympusZuikoAutoMacro50mmf2.data.ts), and [OlympusZuikoAutoMacro90mmf2.data.ts](../src/lens-data/olympus/OlympusZuikoAutoMacro90mmf2.data.ts) | The reviewed Canon and Olympus rows print `nd = 1.77250`, `vd = 49.66–49.7`; the Canon Example 4 row was rendered and checked visually. | Relabeled to Schott N-LAF34 (`1.77250 / 49.62`, code `773496`) as a coefficient-backed catalog equivalent. The exact index and `0.04–0.08` Abbe residual support the match; the production supplier remains unidentified. |
| `515546` | 6 files / 6 elements | Reviewed Agfa and Nikon rows print `nd = 1.51454`, `vd = 54.55–54.7`. | Added SUMITA KF3 from the vendor's discontinued-inclusive all-glass AGF and relabeled all six rows as catalog equivalents. The vendor row is the exact `1.51454 / 54.6` coordinate; production suppliers remain unspecified. |
| `518603` | 4 files / 4 elements | Reviewed Nikon rows print `nd = 1.51800–1.51835`, `vd = 60.23–60.34`; the AF 35-70mm also stores `ng = 1.52897`. | Added SUMITA BALK3 from the vendor's discontinued-inclusive all-glass AGF. Its polynomial reproduces the independent g-line anchor and resolves all four rows within patent rounding; production suppliers remain unspecified. |
| `561453` | 3 files / 3 elements | Agfa and Schneider print the exact d-line coordinate `1.56138 / 45.3`; Hasselblad prints the helium-e index `Ne = 1.56433`. | Added SUMITA LLF4 from the vendor's discontinued-inclusive all-glass AGF. The polynomial reproduces both the d-line coordinate and the Hasselblad e-line anchor; all three rows now use catalog-equivalent labels with suppliers unspecified. |
| `670576` | 2 Nikon files / 2 elements | US 4,452,513 and US 4,497,547 print `nd = 1.67025`, `vd = 57.6`. | Relabeled both rows to discontinued OHARA S-LAL52 (`1.669999 / 57.327972`, code `670573`) as a coefficient-backed catalog equivalent inside the runtime safety window. |
| `856401` | 2 Sony files / 3 elements | Sony FE 14mm publishes an e-line coordinate `Ne = 1.85639`; Sony FE 28-70mm publishes d-line `nd = 1.85612`. | Every representative row is reviewed. The FE 14mm remains explicit unmatched because a nearby d-line candidate cannot be assigned to an e-line value without a verified conversion or identity. The two FE 28-70mm rows remain code-only pending a coefficient-backed exact catalog source. |
| `504668` | 1 file / 3 elements: [OlympusZuikoAutoW28mmf2.data.ts](../src/lens-data/olympus/OlympusZuikoAutoW28mmf2.data.ts) | US 3,862,794 Embodiment 2 prints three `1.50378 / 66.8` rows; the prescription was rendered and checked visually. | No reviewed coefficient row reproduces both coordinates within the runtime safety window. Retained explicit unmatched annotations rather than assigning N-BK10, whose d-line index is too far away. |
| `672472` | 1 file / 3 elements: [ZeissBiogon35mmf28Prewar.data.ts](../src/lens-data/carl-zeiss-jena/ZeissBiogon35mmf28Prewar.data.ts) | US 2,084,309 prints three vintage `1.6716 / 47.2` elements in its worked example; the row was rendered and checked visually. | Relabeled to Schott N-BAF10 (`1.67003 / 47.11`, code `670471`) as a coefficient-backed catalog equivalent within the runtime safety window. The historical production supplier remains unidentified. |
| `748523` | 3 files / 3 elements: [Nikon85f14D.data.ts](../src/lens-data/nikon/Nikon85f14D.data.ts), [NikonAFZoomMicro70180mmf4556D.data.ts](../src/lens-data/nikon/NikonAFZoomMicro70180mmf4556D.data.ts), and [NikonRUWAFZoomNikkor2035mmf28.data.ts](../src/lens-data/nikon/NikonRUWAFZoomNikkor2035mmf28.data.ts) | The reviewed Nikon rows print `nd = 1.74810`, `vd = 52.30`; the US 5,640,277 Example 2 row was rendered and checked visually. | No reviewed coefficient row reproduces both coordinates within the runtime safety window. Candidates near `1.741 / 52.6` or `1.755 / 52.3` miss the d-line tolerance, so the annotations remain explicitly unmatched. |
| `961323` | 1 file / 3 elements: [SonyFE1224mmf28GM.data.ts](../src/lens-data/sony/SonyFE1224mmf28GM.data.ts) | WO 2021/200206 A1 Example 2 prints three `1.96073 / 32.3` rows; the corresponding FIG. 6 layout was rendered and checked visually. | No reviewed coefficient row reproduces both coordinates within the runtime safety window. S-LAH98 and TAFD45 share the approximate Abbe value but their `1.95375` d-line index is too far away, so the annotations remain explicitly unmatched. |
| `728403` | 1 file / 1 element: [PentaxFA31mmf18ALLtd.data.ts](../src/lens-data/pentax/PentaxFA31mmf18ALLtd.data.ts) | US 6,560,042 B2 Tables 1-3 consistently print `1.72750 / 40.3` for the positive aspherical doublet partner; Table 3 was rendered and checked visually. | No reviewed coefficient row reproduces both coordinates inside the runtime safety window. HOYA M-LAF81 and OHARA L-LAM69 are `1.73077 / 40.50`, missing the d-line limit by about `0.00027`; L8 remains explicit unmatched. |
| `995293` | 1 file / 1 element: [SonyPlanarFE50mmf14ZA.data.ts](../src/lens-data/sony/SonyPlanarFE50mmf14ZA.data.ts) | WO 2017/138250 A1 Example 2 / Table 6 prints `1.99502 / 29.3` for L21; the table was rendered and checked visually. No line-index or partial-dispersion value is published. | No reviewed coefficient row is inside the runtime safety window. S-LAH99, TAFD55, and J-LASFH16 miss the d-line index by about `+0.00598`, while H-ZLaF92 is coordinate-incompatible. L21 remains explicit unmatched with no vendor or composition claim. |
| `586609` | 1 file / 2 elements: [PentaxDA1650mmf28.data.ts](../src/lens-data/pentax/PentaxDA1650mmf28.data.ts) | US 7,301,711 B2 Embodiment 6 / Table 6 prints `1.58636 / 60.9` for both aspherical substrates; the table was rendered and checked visually. | Added SUMITA K-SKLD5(M) from the first-party all-glass catalog. Its molding-state polynomial round-trips to `1.586058 / 60.977`, safely matching both rows; the annotations retain the production-supplier caveat. |
| `519573` | 1 file / 1 element: [EnnaMunchenLithagon24mmf4.data.ts](../src/lens-data/enna-munchen/EnnaMunchenLithagon24mmf4.data.ts) | DE 1 228 820 B's sole claim table prints `1.51895 / 57.3` for L4; the table was rendered and checked visually. No supplier, glass name, secondary line index, or partial dispersion is published. | Nearby OHARA NSL2/NSL3, HOYA E-C3, and SUMITA K3 coefficient rows cannot be distinguished from the patent evidence. Removed the unsupported K4-family claim and retained an explicit unmatched crown annotation on the patent Abbe fallback. |
| `547460` | 1 file / 1 element: [PentaxD1118mmF28EDDCWR.data.ts](../src/lens-data/pentax/PentaxD1118mmF28EDDCWR.data.ts) | US 2018/0164556 A1 Numerical Example 1 / Table 1 prints `1.54732 / 46.0` for L14; the table was rendered and checked visually. | Relabeled L14 to HOYA E-FEL1 (`1.54814 / 45.82`) as a coefficient-backed catalog equivalent with production supplier unspecified. OHARA S-TIL1/PBL1 and Schott/SUMITA LLF1 independently identify the same curve family; E-FEL1 has the smallest Abbe residual. |
| `678322` | 1 file / 1 element: [SonyFE1224mmf28GM.data.ts](../src/lens-data/sony/SonyFE1224mmf28GM.data.ts) | WO 2021/200206 A1 Example 2 / Table 6 prints `1.67764 / 32.2` for L22; the table was rendered and checked visually. No line index or partial dispersion is published. | No reviewed coefficient row is inside the runtime safety window. SF5/N-SF5 and their cross-vendor equivalents are centered near `1.6727 / 32.2`, missing the d-line index by about `0.0049`; removed the unsupported SF-family claim and retained an explicit unmatched annotation. |
| `792257` | 1 file / 1 element: [SonyFE70200mmf28GMII.data.ts](../src/lens-data/sony/SonyFE70200mmf28GMII.data.ts) | JP 2023-039817 A Example 2 / Table 6 explicitly prints d-line `1.79191 / 25.7` for L41; the table was rendered and checked visually. No supplier, line index, or partial dispersion is published. | No reviewed first-party coefficient row is inside the d-line runtime safety window. Hikari J-SF11's `1.791929` value is its e-line index; its d-line index is `1.784720`, so it cannot be substituted. Replaced the uncertain wording with an explicit unmatched annotation. |
| `834374` | 1 file / 1 element: [NikonAFNikkor24120mmf3556D.data.ts](../src/lens-data/nikon/NikonAFNikkor24120mmf3556D.data.ts) | US 5,734,508 Working Example 1 / Table 1 prints d-line `1.83400 / 37.4` for L3R3; the table was rendered and checked visually. | Relabeled L3R3 to legacy HOYA NBFD10 (`1.83400 / 37.34`) as a coefficient-backed catalog equivalent with production supplier unspecified. SUMITA K-LaSFn14 and OHARA S-LAH60 independently corroborate the shared `1.83400 / 37.x` family. |
| `569632` | 1 file / 2 elements: [OlympusZuikoAutoZoom85250mmf5.data.ts](../src/lens-data/olympus/OlympusZuikoAutoZoom85250mmf5.data.ts) | US 4,025,167 Embodiment 2 prints `1.56873 / 63.2` for L4 and L7; the primary scan was rendered and checked visually. | Added discontinued OHARA BAL22 from the official all-products AGF. Its published code is exact, and its polynomial round-trips to `1.5687286 / 63.162358`; both elements now use the catalog equivalent with production supplier unspecified. |
| `498650` | 1 file / 1 element: [OlympusZuikoAutoZoom85250mmf5.data.ts](../src/lens-data/olympus/OlympusZuikoAutoZoom85250mmf5.data.ts) | US 4,025,167 Embodiment 2 prints `1.49831 / 65.0` for L10; the primary scan was rendered and checked visually. | Added discontinued OHARA BSL3 from the official all-products AGF. Its published code is exact, and its polynomial round-trips to `1.4983080 / 65.026785`; L10 now uses the catalog equivalent with production supplier unspecified. |

## Workflow

Run the four-phase procedure in [lens-patent-audit.md](lens-patent-audit.md). Phase 3 (spectral enrichment) is the active phase for this queue — populate `dPgF`, `nC`, `nF`, and `ng` on the matching element from the patent's prescription tables. The audit guide also covers the `*.audit.md` log convention so the change is traceable.

After verifying the LCA inset's quality badge upgrades from "Abbe approx" to "Measured (C/F)" or "Sellmeier", delete the
row from the Tier A table above and regenerate the glass reports.

## Why this is per-lens authoring work, not a one-shot migration

Patent reading is slow, embodiment-matching is finicky, and the data is not amenable to bulk extraction. The right cadence is to backfill one lens at a time when authoring or revisiting it, with the patent open in another window. The buildout above is the prioritized queue, not a deadline.
