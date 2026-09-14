# Glass Relabel Follow-up Queue

The per-lens worklist for catalog mismatches surfaced by the dispersion cascade: surfaces whose `glass` annotation
resolves to a vendor catalog row but whose stored `(nd, νd)` sits outside the runtime window (nd ±0.003, νd ±2), so
the resolver rejects the curve and falls back to line indices, `dPgF`-corrected Abbe, or plain Abbe. This file holds
only open judgment calls and the closed decisions that must not be redone; the generated reports are the live queue.

## Generated reports

- [catalog-mismatches.generated.md](generated/catalog-mismatches.generated.md) — raw per-surface mismatch list.
- [glass-relabel-candidates.generated.md](generated/glass-relabel-candidates.generated.md) — mismatches grouped by
  `(stored nd, stored vd)` with every catalog candidate inside tolerance; this is the mechanical-relabel bucket.
- [glass-relabel-by-lens.generated.md](generated/glass-relabel-by-lens.generated.md) — the same rows keyed by lens
  file, which is the order to work them in during a patent audit.

Groups with no candidate inside tolerance, and candidate-backed groups that would change a lens's narrative (several
candidates, or an `*.analysis.md` that names the old glass), land here for authorial judgment. Regenerate every glass
report with `npm run generate:glass-reports`; [README.md](README.md) lists each report and its scan. Sellmeier
sourcing lives in [glass-catalog-buildout.md](glass-catalog-buildout.md); patent line-index backfill for truly
proprietary glass lives in [proprietary-glass-backfill.md](proprietary-glass-backfill.md).

## Status

- Pending — actionable relabels (single catalog candidate, νd matches): **none remain.**
- Pending — patent verification needed (no candidate within tolerance): **none remain.**
- Read live counts (catalog size, mismatch rows, Sellmeier coverage) from the generated reports and `catalogSize()`
  in `src/optics/glassCatalogData.ts`; figures hand-copied into this file went stale before.

## Open items

- **Leica ELCAN 50mm f/2 E4 — LAFN7 (2026-09).** Adding the official SCHOTT LAFN7 curve exposed the approximate LAFN7
  label in `src/lens-data/leica/LeicaElcan50mmf2.data.ts`. Its authored 1.7546 / 34.7 differs from LAFN7 by 0.0051
  in nd, outside the 0.003 limit, and no catalog candidate passes. The annotation is now an explicit unmatched
  lanthanum flint on its existing Abbe model. Closing it needs source line indices; Leitz mil-spec documentation is
  sparse, so this may stay open indefinitely.

## Closed families — do not re-audit

Engine and reporting decisions:

- Runtime catalog window is nd ±0.003 / νd ±2 (tightened 2026-07); do not loosen it to rescue a label.
- Native e-line rows (`indexReference: "e"`) resolve only through explicit names or aliases that reproduce C′/e/F′; d-line six-digit codes never opt in (2026-07).
- Authored patent `dPgF` stays authoritative at g even when a catalog curve supplies C/d/F (2026-08).
- An explicit `Unmatched` / `Unknown` / `Proprietary` / `Unidentified` annotation is its own review record; no sidecar or audit-log duplicate is needed (2026-07).
- An official vendor name whose coordinates conflict with the patent is never added as an alias; it is replaced by a coordinate-compatible equivalent with the production supplier left unspecified (2026-07).

Relabeled to catalog equivalents (production supplier unspecified unless the patent names one):

- OHARA S-LAH ladder by stored nd (2026-05/06): 1.90366 → S-LAH95; 1.883 → S-LAH58; 1.8044 → S-LAH63; 1.804 → S-LAH65V; 1.816 → S-LAH59; 1.8061 → S-LAH53; 1.7725 → S-LAH66; 1.83481 → S-LAH55 (non-V default); 2.00069 / 25.5 → TAFD40.
- ED rows at 1.498 / 81–83 → S-FPL51, not S-FPL53; 1.72916 / 54.7 → S-LAL18, not S-LAL14 (2026-05).
- `S-NPH2` at 1.92286 / 20.9 → historical PBH21 across 16 elements; `S-NPH7` split into TAFD40 (001255), S-LAH99 (001291), PBH21 (923209) (2026-07).
- Exact-coordinate swaps (2026-07): S-FPM3 → S-TIL2; M-FCD500 → FCD705; S-NBH56 → M-TAFD305; SK16 → E-BAF8 (Serenar 28) and S-BSM15 (Nikkor-N 28/2); S-LAM3 → S-LAM52; S-LAL59 → S-LAL18; S-TIM27 → S-TIM6; L-LAL14 → L-LAL13; S-LAH60V → L-LAH90; S-LAH79 → TAFD40L-W; S-TIH6 → S-NPH1; Fujifilm GF 80 / GF 120 S-NBH55 ↔ S-LAH52Q un-swapped.
- Named-token corrections (2026-07): S-LAM73 → L-LAH85V; L-BBH1 → E-FD8; L-LAH83 → M-TAF1; L-PHL1 → M-BACD12; L-LAH85 → M-TAF401; S-LAH85V → L-LAH85V; stale E-ADF10 → E-FD2 / S-TIH1 / S-NBM51; `804339` → E-LAFH2; 1.86074 / 23.0 → J-SFH2; Sigma 85 Art TAF105 → TAF3D.
- Six-digit families (2026-07 to 2026-08): `797454` → J-LASF017; `773497` → N-LAF34; `672472` → N-BAF10; `670571` / `670576` → S-LAL52; `796409` → NBFD2; `834373` / `834374` → NBFD10 and 1.83441 / 37.28 → M-NBFD10; `515546` → KF3; `518603` → BALK3; `561453` → LLF4; `586609` → K-SKLD5(M); `547460` → E-FEL1; `569632` → BAL22; `498650` → BSL3; `519573` → J-K3; `805255` → J-SF6; `757316` → E-LAF11.
- Single-lens relabels (2026-07 to 2026-08): Laowa 15 L7b → N-LASF44; Canon RF 20 G4 → N-LAK33B; Laowa 58 L4 → TAC8; Laowa 24 Probe L1/L25 → TAFD5F; Serenar 28 L3, Zeiss Tessar 50, Olympus 85-250 F8-class → E-F8; Serenar SK18 → K-SK18; Canon EF 11-24 E2/E3 → S-BAL42 / M-TAFD305; Sony FE 24-70 GM II `770494` → MC-TAF101-100; Olympus Macro 90 `744447` → S-LAM2; Canon EF-M 32 L5 → FCD515; Panasonic S Pro 50 L1 → E-FDS1; Sigma APO Macro 180 L11 → N-BK7; Panasonic S PRO 16-35 L12 → K-LaSFn23.
- Canon RF 50mm `666356` uses CDGM H-ZBaF4 as the baseline curve with the patent `dPgF` authoritative at g; Fujifilm GF 20-35 carries patent `dPgF` on all 14 rows (2026-08).
- Vendor rows added 2026-07 to 2026-08 from first-party sources (Hikari J-*, HOYA legacy/obsolete, OHARA L-LAH* and discontinued AGF rows, SUMITA discontinued-inclusive, CDGM, Schott K10 / P-LASF47) live in `src/optics/glassCatalogEntries/`; check there before re-transcribing.

Explicitly unmatched after source review (a new source is needed, not another catalog pass):

- Minolta `493836` fluorophosphate (4 files / 9 elements) — proprietary; the AF 200mm keeps its patent `dPgF` (2026-07).
- Olympus `504668` (1.50378 / 66.8); Nikon `748523` (1.74810 / 52.30); Sony `961323` (1.96073 / 32.3) (2026-07).
- Pentax FA 31 `728403` L8 (M-LAF81 / L-LAM69 miss nd by 0.00027); Sony Planar FE 50 `995293` L21 (2026-07).
- Sony FE 12-24 `678322` L22 (SF5 misses nd by 0.0049); Sony FE 70-200 GM II `792257` L41 — Hikari J-SF11's 1.791929 is its e-line index, not a match (2026-07).
- Canon RF 20 G10/G16 at 1.66565 / 35.6 — the patent θgF contradicts H-ZBaF4 (2026-07).
- Pentax DA 70 L5 `544601` (not BaK2); Canon FD 150-600 `534555`; Fujifilm XF 16-55 `685309`; Nikon Z DX 50-250 `902253`; Olympus Macro 50 `683447`; Sony 28-70 L71 at 2.00009 / 16.5; Nikon 24-200 L61 H-LAF3 (2026-07).
- E-line rows that must not borrow d-line curves: Sony FE 14 `856401` (Ne); Nikon Ultra-Micro 29.5 F8/SF8-class (2026-07).
- Voigtländer Nokton 50/1.0 `808406`; Nikon 20-35 L31a; the Nikon 180-400's nine remaining six-digit classes; seven Minolta rows outside the guard; N-LAF21 / N-SF8 / K5 class annotations, which are near matches only (2026-08).

## Decision rules for recurring patterns

- No candidate inside Δnd 0.003 / Δνd 2.0: open the patent prescription table, identify the glass at that surface
  (code or vendor part number), relabel if it is in the catalog, otherwise add it only when several lens files need
  it (see [glass-catalog-buildout.md](glass-catalog-buildout.md)) or mark it `Unmatched (…reason)`. Prefer
  `Unmatched` for Sumita custom melts, vintage Leitz glass, and designer-attributed approximations; it surfaces
  honestly as "Abbe approx" in the LCA badge.
- **S-LAH55 vs S-LAH55V** (1.83481 / 42.7): same nd, different secondary spectrum; default to S-LAH55 unless the
  patent names the vacuum-melt variant.
- **S-LAH58 vs TAFD30** (1.88300 / 40.8): identical published coordinates; pick by the vendor family hinted in the
  original annotation.
- **FCD1 vs S-FPL51** (1.49700 / 81.55): catalog-equivalent ED glasses; pick for vendor consistency within the lens.
- Relabeling a glass that the `*.analysis.md` names (for example "near OHARA S-LAM66" where the coordinate is
  S-LAH66) means updating that narrative in the same change.

## Workflow

Follow the four-phase procedure in [lens-patent-audit.md](lens-patent-audit.md): patent sourcing, relabel,
retained-information audit, `dPgF` / line-index enrichment, analysis-file sync, and the per-lens `*.audit.md` log.
When an audit closes a row here, delete it; add a one-line entry to the closed list above only when a future agent
could plausibly redo the work.

Most original annotations were the author's closest *named* OHARA guess; the cascade now exposes where that guess
disagrees with the published nd/νd. Resolving one needs the patent (J-PlatPat for JP filings), cross-vendor
equivalence tables, and a judgment about the analysis narrative, so it is one-lens-at-a-time authoring work, not a
bulk migration.
