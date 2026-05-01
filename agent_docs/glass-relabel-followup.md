# Glass Relabel Follow-up Queue

A focused per-lens worklist for the remaining catalog mismatches surfaced by the dispersion cascade. Companion to:

- [catalog-mismatches.generated.md](catalog-mismatches.generated.md) — the auto-generated raw mismatch list (regenerate with `npm test -- catalogMismatchScan`).
- [glass-relabel-candidates.generated.md](glass-relabel-candidates.generated.md) — the auto-generated candidate report grouping mismatches by `(stored nd, stored vd)` and showing each group's catalog candidates within tolerance (regenerate with `npm test -- glassRelabelCandidatesScan`).
- [glass-catalog-buildout.md](glass-catalog-buildout.md) — Sellmeier sourcing playbook (where to find vendor data, the round-trip test, etc.).
- [proprietary-glass-backfill.md](proprietary-glass-backfill.md) — workflow for patent-sourced `nC`/`nF`/`ng` line indices on truly proprietary glasses.

## How this queue is structured

The candidate scan splits mismatches into two buckets:

1. **Has at least one candidate within tolerance** — the (nd, vd) pair matches some catalog entry; relabel is mechanical.
2. **No candidate within tolerance** — the (nd, vd) pair doesn't match any catalog entry; needs patent verification or the glass is genuinely proprietary.

This file tracks the second bucket plus any cases from the first bucket that need authorial judgment (multiple candidates, or relabeling would change the lens-data file's narrative — e.g. the analysis.md companion file says "S-LAH79" and the candidate suggestion would invalidate that).

## Status (Apr 2026, after Phase 3 catalog expansion + relabel sweep)

- Catalog: **53 entries** (24 → 32 → 38 → 53).
- Mismatches: **162** (was 117 → 148 → 162; note increase reflects Phase 3 entries newly resolving previously-unresolved labels with wrong stored nd).
- Resolved this session (Phase 3): ~55 surfaces across 25+ lens files — full details in the Phase 3 resolved table below.
- Surfaces resolving to Sellmeier: **696** (was 564); 49.3% of all non-empty glass strings.
- Actionable candidate groups: **31** (49 surfaces).
- No-candidate groups: **80** (113 surfaces) — increased vs Phase 2 because Phase 3 entries exposed previously-hidden mismatches.
- Phase 3 note: 15 new Ohara entries (dense flints S-TIH14/TIM35/TIM25/TIM22/TIM2, ED glasses S-FPL52/FPM3, crowns S-BAL35/NSL3, lanthanum S-LAH51/52/65/LAM54, ultra-HRI S-NPH1/NPH53). Two planned entries (S-LAH97 formula 3, TAFD25 formula 3) skipped — incompatible polynomial form.

## Resolved Phase 3 — high-confidence relabels (audit trail)

| Lens file | Surface(s) | Old annotation | New annotation | Justification |
|---|---|---|---|---|
| [NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | nd=1.90366 | `S-LAH79 (OHARA)` | `S-LAH95 (OHARA)` | Code 904/313 = S-LAH95; stored nd matches exactly. |
| [NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | nd=1.7725 | `S-LAH52 (OHARA)` | `S-LAH66 (OHARA)` | S-LAH52 has nd=1.800; stored nd=1.7725 matches S-LAH66 (1.7725) exactly. |
| [NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | nd=1.816 | `S-LAH66 (OHARA)` | `S-LAH59 (OHARA)` | S-LAH59 has nd=1.816; stored matches exactly. |
| [NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | nd=1.603 | `S-PHM52 (OHARA)` | `S-PHM53 (OHARA)` | S-PHM53 has nd=1.603001; Δnd=0, Δvd=0.04 — perfect match. |
| [NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | nd=1.83481 | `S-LAH63 (OHARA)` | `S-LAH55 (OHARA)` | S-LAH55 nd=1.834807; stored matches. Default non-V. |
| [FujifilmXF56mmf12.data.ts](../src/lens-data/fujifilm/FujifilmXF56mmf12.data.ts) | L7, L15, L17 (nd=1.883) | `S-LAH66 (OHARA)` | `S-LAH58 (OHARA)` | S-LAH66 nd=1.772; stored nd=1.883 matches S-LAH58 (1.883) exactly. |
| [NikonNikkorAFS1424mmf28.data.ts](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) | nd=1.8044 | `S-LAH66 (OHARA)` | `S-LAH63 (OHARA)` | S-LAH63 nd=1.8044; exact match. |
| [NikonNikkorAFS1424mmf28.data.ts](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) | nd=1.772789 | `S-LAH59 (OHARA)` | `S-LAH66 (OHARA)` | S-LAH66 nd=1.7725; Δnd=0.0003. |
| [NikonNikkorAFS1424mmf28.data.ts](../src/lens-data/nikon/NikonNikkorAFS1424mmf28.data.ts) | nd=1.8061 | `S-LAH58 (OHARA)` | `S-LAH53 (OHARA)` | S-LAH53 nd=1.806098; Δnd=0.0001. |
| [CanonRF24105mmf4L.data.ts](../src/lens-data/canon/CanonRF24105mmf4L.data.ts) | L12, L31 (nd=1.804) | `S-LAL18 (OHARA)` | `S-LAH65V (OHARA)` | S-LAH65V nd=1.804; exact match. S-LAL18 nd=1.729 (wrong). |
| [CanonRF24105mmf4L.data.ts](../src/lens-data/canon/CanonRF24105mmf4L.data.ts) | nd=2.00069 | `S-NPH53 (OHARA)` | `S-LAH79 (OHARA)` | S-NPH53 now in catalog (nd=1.847); stored nd=2.001 matches S-LAH79 (nd=2.003, Δnd=0.002). |
| [NikonZ28f28.data.ts](../src/lens-data/nikon/NikonZ28f28.data.ts) | L3, L11, L16 (nd=1.804) | `S-LAH55V (OHARA)` | `S-LAH65V (OHARA)` | S-LAH55V nd=1.835; stored nd=1.804 matches S-LAH65V exactly. |
| [NikonZ28f28.data.ts](../src/lens-data/nikon/NikonZ28f28.data.ts) | nd≈1.808 | `S-NPH 1 (OHARA)` | `S-NPH1 (OHARA)` | Space in name prevented catalog resolution; fixed. |
| [NikonZ28f28.data.ts](../src/lens-data/nikon/NikonZ28f28.data.ts) | nd≈1.762 | `S-TIH 14 (OHARA)` | `S-TIH14 (OHARA)` | Same — space in name fix. |
| [CanonRF2450mmf463.data.ts](../src/lens-data/canon/CanonRF2450mmf463.data.ts) | 699/301 | `S-TIH6 (OHARA 699/301)` | `S-TIM35 (OHARA 699/301)` | Code 699301 = S-TIM35; stored nd=1.699 matches. |
| [CanonRF2450mmf463.data.ts](../src/lens-data/canon/CanonRF2450mmf463.data.ts) | 904/313 | `S-LAH55V (OHARA 904/313)` | `S-LAH95 (OHARA 904/313)` | Code 904313 = S-LAH95. |
| [CanonRF2450mmf463.data.ts](../src/lens-data/canon/CanonRF2450mmf463.data.ts) | 847/239 | `S-TIH53 (OHARA 847/239)` | `S-NPH53 (OHARA 847/239)` | Code 847239 = S-NPH53 (847238 = S-TIH53). |
| [CanonRF2450mmf463.data.ts](../src/lens-data/canon/CanonRF2450mmf463.data.ts) | 773/496 | `S-LAH53 (OHARA 773/496)` | `S-LAH66 (OHARA 773/496)` | Code 773496 = S-LAH66. |
| [CanonRF24240mmf463.data.ts](../src/lens-data/canon/CanonRF24240mmf463.data.ts) | 903/313 | `S-LAH79 type (903/313)` | `S-LAH95 type (903/313)` | Code matches S-LAH95. |
| [CanonRF24240mmf463.data.ts](../src/lens-data/canon/CanonRF24240mmf463.data.ts) | 773/496 | `S-LAL54 type (773/496)` | `S-LAH66 type (773/496)` | No S-LAL54 exists; code matches S-LAH66. |
| Multiple (9 files) | nd=1.90366 | various → `S-LAH79/S-LAH65V/S-NPH53/S-LAH58` | `S-LAH95 (OHARA)` | CanonRF24240, FujifilmXF1655, NikonAFS200500, NikonNikkorPCE19, NikonNikkorZ24120, NikonNikkor85f14G, NikonNikkorAFS80400, LeicaAPO43mmf2. |
| [NikonAF28f14D.data.ts](../src/lens-data/nikon/NikonAF28f14D.data.ts) | L2, L12 (nd=1.77279) | `LaM type (near S-LAM66)` | `S-LAH66 (OHARA)` | S-LAH66 nd=1.7725; Δnd=0.0003. |
| [NikonAF28f14D.data.ts](../src/lens-data/nikon/NikonAF28f14D.data.ts) | L5, L10 (nd=1.80411) | `LaH type (near S-LAH55)` | `S-LAH65V (OHARA)` | S-LAH65V nd=1.804; Δnd=0.0001. |
| Various (S-LAH66) | multiple | `S-LAH55V/S-LAM66/S-LAH59/S-LAH53/S-LAM66/S-LAH53` | `S-LAH66 (OHARA)` | CanonRF2870mmf2L, NikonAFS28f14E, Leica28mmf17, RicohGR428, NikonNikkorZ24120, NikonNikkorPCE19, NikonNikkorAFS2470mmf28E, OlympusZuikoAutoS50. |
| Various (S-LAH58) | nd=1.883 | `S-LAH66 (OHARA)` / `S-LAH79 (OHARA)` | `S-LAH58 (OHARA)` | NikonNikkorZ1430mmf4S, LeicaAPO35mmf2. |
| [CanonRF85mmf2Macro.data.ts](../src/lens-data/canon/CanonRF85mmf2Macro.data.ts) | nd=1.804 | `TAFD30 (HOYA)` | `S-LAH65V (OHARA)` | nd=1.804 matches S-LAH65V exactly; TAFD30 nd=1.883. |
| [NikonPCENikkor24mmf35DED.data.ts](../src/lens-data/nikon/NikonPCENikkor24mmf35DED.data.ts) | L1, L16 (nd=1.804) | `S-LAH58 (OHARA)` | `S-LAH65V (OHARA)` | S-LAH58 nd=1.883; stored nd=1.804 matches S-LAH65V. |
| [NikonZ26f28.data.ts](../src/lens-data/nikon/NikonZ26f28.data.ts) | nd=1.816 | `S-LAL18 (OHARA)` | `S-LAH59 (OHARA)` | S-LAH59 nd=1.816; exact match. |
| [NikonNikkorZ1430mmf4S.data.ts](../src/lens-data/nikon/NikonNikkorZ1430mmf4S.data.ts) | nd=1.816 | `S-LAH63 (OHARA)` | `S-LAH59 (OHARA)` | S-LAH63 nd=1.804; stored nd=1.816 matches S-LAH59. |
| [OlympusZuikoAutoS50mmf12.data.ts](../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts) | nd=1.83481 | `S-LAH58 (OHARA) / TAFD5 (HOYA)` | `S-LAH55 (OHARA) / TAFD5 (HOYA)` | Stored nd matches S-LAH55; default non-V. |
| [OlympusZuikoAutoS50mmf12.data.ts](../src/lens-data/olympus/OlympusZuikoAutoS50mmf12.data.ts) | nd=1.7725 | `S-LAH51 (OHARA) / TAF1 (HOYA)` | `S-LAH66 (OHARA) / TAF1 (HOYA)` | TAF1 = nd=1.7725; matches S-LAH66. S-LAH51 nd=1.786 (wrong). |
| [NikonNikkorZ100400f4556.data.ts](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) | nd=1.8044 | `S-LAH55V (OHARA)` | `S-LAH63 (OHARA)` | S-LAH63 nd=1.8044; exact match. |
| [NikonNikkorZ100400f4556.data.ts](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) | nd=1.8061 | `S-LAH55 (OHARA) †` | `S-LAH53 (OHARA)` | S-LAH53 nd=1.806098; Δnd=0.0001. |
| [NikonNikkorAFS200500mmf56.data.ts](../src/lens-data/nikon/NikonNikkorAFS200500mmf56.data.ts) | nd=1.83481 | `S-LAH58 (OHARA)` | `S-LAH55 (OHARA)` | Stored nd=1.835 matches S-LAH55; default non-V. |
| [NikonNikkorZ70200f28.data.ts](../src/lens-data/nikon/NikonNikkorZ70200f28.data.ts) | 6 surfaces (nd=1.498) | `S-FPL52 — ED (498-826)` | `S-FPL51 — ED (498-826)` | Code 498826 ≈ S-FPL51/FCD1 territory; stored nd=1.498, S-FPL52 catalog nd=1.456. |
| [NikonZ1424f28S.data.ts](../src/lens-data/nikon/NikonZ1424f28S.data.ts) | 4 surfaces (nd=1.498) | `S-FPL52 (OHARA) — ED` | `S-FPL51 (OHARA) — ED` | Same as above. |

## Resolved Phase 2 — high-confidence relabels (audit trail)

| Lens file | Surface | Old annotation | New annotation | Justification |
|---|---|---|---|---|
| [NikonNikkorAFS2470mmf28E.data.ts](../src/lens-data/nikon/NikonNikkorAFS2470mmf28E.data.ts) | L44 | `S-FPL53 (OHARA) — Super ED` | `S-FPL51 (OHARA) — ED` | Stored nd=1.49782, vd=82.6 matches S-FPL51 (1.497, 81.55) to Δnd=0.0008, Δvd=1.05; S-FPL53 has vd=94.95 (off by 12+ Abbe units). |
| [NikonNikkorZ100400f4556.data.ts](../src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts) | 5 surfaces | `S-FPL53 (OHARA)` | `S-FPL51 (OHARA)` | All 5 surfaces have nd=1.49782, vd=81.10 — matches S-FPL51 to Δvd<0.5. |
| [NikonNikkorZ24120mmf4S.data.ts](../src/lens-data/nikon/NikonNikkorZ24120mmf4S.data.ts) | 3 surfaces | `S-FPL53 (OHARA)` | `S-FPL51 (OHARA)` | All 3 surfaces have nd=1.49782, vd=82.57 — matches S-FPL51 to Δvd~1.0. |
| [NikonNikkorZ50f18S.data.ts](../src/lens-data/nikon/NikonNikkorZ50f18S.data.ts) | L23 | `S-FPL53 / FCD100 class (super-ED…)` | `S-FPL51 / FCD1 class (ED fluorophosphate, νd = 82.6)` | Same — stored vd=82.6 matches FPL51/FCD1, not FPL53/FCD100. |
| [CanonRF2470f28.data.ts](../src/lens-data/canon/CanonRF2470f28.data.ts) | L4, L11 | `S-LAL14 (OHARA)` | `S-LAL18 (OHARA)` | Stored nd=1.72916, vd=54.7 matches S-LAL18 (1.72916, 54.68) exactly; S-LAL14 has vd=55.53. |
| [NikonAFS28f14E.data.ts](../src/lens-data/nikon/NikonAFS28f14E.data.ts) | L21 | `S-LAL14 (OHARA)` | `S-LAL18 (OHARA)` | Same as above. |
| [NikonNikkor85f14G.data.ts](../src/lens-data/nikon/NikonNikkor85f14G.data.ts) | L7 | `S-LAL14 (OHARA)` | `S-LAL18 (OHARA)` | Same as above. |
| [NikonAFS28f14E.data.ts](../src/lens-data/nikon/NikonAFS28f14E.data.ts) | L12 | `S-BAL42 (OHARA)` | `N-LAK8 (Schott)` | Stored nd=1.713, vd=53.9 matches N-LAK8 (1.713, 53.83) exactly; S-BAL42 has nd=1.583. |
| [NikonZ26f28.data.ts](../src/lens-data/nikon/NikonZ26f28.data.ts) | L7 | `S-TIH6 (OHARA)` | `SF4 (Schott)` | Stored nd=1.7552, vd=27.6 matches SF4 (1.7552, 27.58) exactly; S-TIH6 has nd=1.805. |

## Pending — actionable relabels (single catalog candidate, vd matches)

Run [glass-relabel-candidates.generated.md](glass-relabel-candidates.generated.md) for the current list. As of this writing, **31 (nd, vd) groups have at least one in-tolerance candidate** (~58 surfaces). Tackle these in future sessions — each is a per-lens authoring decision that should be cross-checked against the lens's analysis.md or patent narrative when present.

Non-trivial cases worth special note:

- **S-LAH55 vs S-LAH55V** (e.g. nd=1.83481, vd=42.7): both round-trip the same nd; choice changes secondary-spectrum behavior. Default to S-LAH55 (non-V) when the patent doesn't specify a vacuum-melt variant.
- **S-LAH58 vs TAFD30** (e.g. nd=1.88300, vd=40.8): identical published nd/vd; pick by family hint in the original annotation (OHARA vs HOYA).
- **FCD1 vs S-FPL51** (e.g. nd=1.49700, vd=81.55): catalog-equivalent ED glasses; pick by vendor consistency with rest of the lens.
- **S-LAM66 → S-LAH66** suggestions (e.g. nd=1.77279, vd=49.4 in NikonAF28f14D): the analysis text references "near OHARA S-LAM66" but the (nd, vd) pair matches S-LAH66 exactly. Update the analysis narrative alongside the data file when relabeling.

## Pending — patent verification needed (no catalog candidate within tolerance)

These (nd, vd) groups don't match any catalog glass within Δnd=0.005 / Δvd=3.0. The annotated glass is wrong AND there's no obvious better candidate in the catalog. For each, the right resolution is to:

1. Open the lens patent prescription tables.
2. Identify the correct glass at the cited surface (often listed by code or by vendor part number).
3. If the correct glass is in our catalog, relabel.
4. If the correct glass is NOT in our catalog, decide whether to:
   - Add it (only if it's used across multiple lens files — see [glass-catalog-buildout.md](glass-catalog-buildout.md)).
   - Mark the annotation as `Unmatched (...reason)` so the resolver stops trying. The dispersion cascade will use the Abbe approximation.

The `Unmatched (…)` form is preferred for genuinely-proprietary glass (Sumita custom melts, vintage Leitz, designer-attributed approximations). It is honest about the data quality and surfaces in the LCA badge as "Abbe approx".

### Most-frequent patterns (groups, not individual surfaces)

| Pattern | Surfaces | Notes |
|---|---|---|
| `S-LAH79` mislabel with stored nd≈1.90366 / vd≈31.3 | ~10 | Real S-LAH79 is 2.003/28.3. The stored values point to a high-index lanthanum near OHARA S-LAH92 / S-LAH96 / S-LAH97 — none currently in catalog. |
| `S-LAH79` mislabel with stored nd≈1.95375 / vd≈32.3 | ~13 | Same family; possibly OHARA S-LAH98 / S-NBH52 / E-FDS3 — outside current catalog. |
| `S-NPH2` mislabel with stored nd≈2.001 / vd≈29.1 | ~5 | Real S-NPH2 is 1.923/18.9. Stored values closer to S-LAH79 (2.003/28.3) — already in catalog (Δnd ≈ 0.003 — borderline tolerance). |
| `S-NPH2` mislabel with stored nd≈2.05090 / vd≈26.9 | ~2 | Above S-LAH79's nd; could be OHARA S-NBH56 / E-FDS4 (newer ultra-high-index flints, not in catalog). |
| `S-LAH58` mislabel with stored nd≈1.91082 / vd≈35.2 | ~6 | Real S-LAH58 is 1.883/40.8. Stored values match S-LAH59 / S-LAH60 / S-LAH63V (none in catalog). |
| `S-LAH66` mislabel with stored nd≈1.85150 / vd≈40.8 | 3 | (CanonRF2870mmf28 surface 8 etc.) Real S-LAH66 is 1.7725/49.6. Stored matches S-LAH51 (1.787) or S-LAH52 (1.797) — neither in catalog within tolerance. |
| `S-PHM52` mislabel with stored nd≈1.60-1.603 / vd≈55-67 | ~3 | Real S-PHM52 is 1.618/63.3. Closer matches: OHARA L-PHM52 (lead-free variant of S-PHM52, slightly different nd) — not in catalog. |
| `S-BAL42` mislabel with stored nd≈1.531-1.589 (varies) | ~4 | Real S-BAL42 is 1.583/59.4. Each surface is a different glass; needs per-lens patent lookup. |
| `S-BSL7` mislabel with stored nd≈1.60311 or 1.63854 | 3 | Real S-BSL7 is 1.516/64.1. Stored values are unrelated; the original annotations are clearly wrong. Likely barium crowns; needs per-lens lookup. |
| `S-FPM2` mislabel (FujifilmXF80f28 surface 23) with stored nd=1.53775, vd=74.7 | 1 | Real S-FPM2 is 1.595/67.7. Stored values fit a long-Abbe fluorophosphate not in catalog (possibly S-FPL55 or HIKARI E-F2). |
| `S-LAH63` mislabel (NikonNikkorZ100400 surface 45 etc.) | 2 | Real S-LAH63 is 1.804/39.6. Stored 1.738/49.3 matches S-LAH71 / S-LAH72 (not in catalog). |
| `SF4` / `SF6` mislabel (NikonNikkorSAuto50mmf14, LeicaElcan50mmf2) | ~3 | Vintage lead flints; the "≈SF4" / "SF4 / PBM5" notation in the original lens-data is explicit speculation. Best resolution: relabel as `Unmatched (≈SF4 family, vintage lead flint, no exact catalog match)`. |
| `BSC7 (HOYA)` in OlympusZuikoAutoMacro90mmf2 surface 17 (stored nd=1.65160) | 1 | BSC7 is BK7-equivalent (nd=1.516); stored 1.652 matches S-NBH5 (1.654) very closely. The annotation is wrong; relabel candidate `S-NBH5 (OHARA, vd~39.7)` if the patent supports KZFS-class. |

## Workflow for a single follow-up

Follow the four-phase procedure in [lens-patent-audit.md](lens-patent-audit.md). It covers patent sourcing, glass relabeling, retained-information audit, dPgF/line-index enrichment, analysis-file sync, and the per-lens `*.audit.md` log convention. When the audit completes, move the row from this followup file to its "Resolved this session" table.

## Why this is per-lens authoring work, not a one-shot migration

The original annotations were authored by reading patent prescriptions or the lens vendor's published data. Most mismatches reflect a **mismatch between the author's named-glass guess and the actual published nd/vd** — usually because the author picked the closest *named* OHARA glass when the actual glass was an older/newer variant or a different vendor's equivalent. Resolving each requires:

- The original patent (often in Japanese; J-PlatPat is the authoritative source for JP).
- Cross-vendor glass lookup tables (Schott ↔ Ohara ↔ Hoya equivalents).
- Judgment about whether the analysis.md narrative needs updating alongside the data file.

This is exactly the work that the `glass:` annotation field was designed to capture — and the catalog cascade now exposes when the field doesn't match the stored prescription. The right cadence is one lens at a time, ideally as part of authoring or revisiting each lens.
