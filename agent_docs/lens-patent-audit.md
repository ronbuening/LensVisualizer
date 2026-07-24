# Lens Patent Audit

A standard procedure for reviewing an existing `*.data.ts` file against its source patent, correcting mismatched glass annotations, auditing retained values, enriching spectral data, and syncing the companion `*.analysis.md`. Every audit produces a per-lens `*.audit.md` log that records what changed and why.

This is the procedure to follow when working a lens off the [glass-relabel-by-lens.generated.md](generated/glass-relabel-by-lens.generated.md), [glass-relabel-followup.md](glass-relabel-followup.md), or [proprietary-glass-backfill.md](proprietary-glass-backfill.md) queues, or any time a lens is revisited with the patent in hand.

## When to use this guide

Use it when:

- A lens appears in [glass-relabel-by-lens.generated.md](generated/glass-relabel-by-lens.generated.md) and you have time to settle its flagged surfaces against the patent.
- A row in [catalog-mismatches.generated.md](generated/catalog-mismatches.generated.md) or [glass-relabel-candidates.generated.md](generated/glass-relabel-candidates.generated.md) needs a deeper patent pass.
- You are revisiting a lens for any reason and the patent is open.
- A reader has reported that the analysis narrative disagrees with the data file.
- A new vendor catalog entry has just landed and you want to upgrade nearby annotations.

Skip it for:

- New lens authoring — follow [adding_a_lens.md](adding_a_lens.md) instead. The audit procedure assumes a data file already exists.
- Pure rendering or layout tweaks (`scFill`, `yScFill`) — those don't touch optical data.

## Pre-flight: gather sources

Before opening either lens file, collect:

1. **The patent.** Use Espacenet ([https://worldwide.espacenet.com](https://worldwide.espacenet.com)) for EP/WO, J-PlatPat for JP, USPTO/Google Patents for US. The patent number is in the data file's header comments — search by number, not by title. If multiple embodiments, identify the embodiment number (`Example N`, `第N実施例`) that matches the lens spec.
2. **The vendor catalog Sellmeier source** (only when relabeling toward a glass not already in our catalog). See [glass-catalog-buildout.md](glass-catalog-buildout.md) for sourcing. Before accepting a code-only fallback, search refractiveindex.info and the original manufacturer catalogs/datasheets for the patent's glass code, exact `nd`/`νd` pair, and likely vendor-family names.
3. **The current mismatch reports** — regenerate before starting so the surface lists are current:
   ```bash
   npm run generate:glass-reports
   ```
4. **The per-lens queue section** — open the target lens in [glass-relabel-by-lens.generated.md](generated/glass-relabel-by-lens.generated.md). This is the working checklist for Phase 1; the raw mismatch and candidate reports are supporting references.
5. **Glass equivalence references** — Schott/Ohara/Hoya/Sumita cross-tables when the patent names a glass from a different vendor than the annotation.

## Using the per-lens relabel queue

[glass-relabel-by-lens.generated.md](generated/glass-relabel-by-lens.generated.md) is the preferred entry point for relabel audits. It groups all flagged surfaces for a lens together so you can compare the patent's table, repeated glass codes, cemented groups, and analysis prose in one pass.

Each row is a prompt for review, not an automatic edit:

| Column | How to use it |
|---|---|
| `Surface` | Match this to the patent row and the data file surface. For a cemented junction, confirm which adjacent element owns the glass annotation before editing. |
| `Current label` | The annotation currently resolving to a catalog entry whose Sellmeier `nd` disagrees with the stored surface `nd`. |
| `Stored nd/vd` | The value already in the lens data. Treat this as suspect until checked against the patent. |
| `Rejected as` | The catalog entry currently being rejected by the scan, with the `nd` delta that caused the mismatch. |
| `Best candidate(s)` | Catalog entries whose `nd`/`vd` are near the stored values. They are ranked suggestions, not proof. |
| `Confidence` | Triage signal. `High` is usually a single close match; `Medium` still needs context; `Choose by context` means several glasses fit the numeric pair. |
| `Patent review` | Indicates whether the likely next step is checking notes for a straightforward relabel, choosing between candidates, or treating the row as a no-candidate patent investigation. |

Recommended triage:

1. Start with one lens section and audit all of its rows together. Do not cherry-pick one surface from a multi-row lens unless the patent review is intentionally scoped.
2. Handle `High` rows first, especially repeated patterns. These often clear clean typos or vendor-family label drift.
3. Treat `Choose by context` rows as patent/table lookups. Use glass codes, vendor names, nearby repeated elements, and analysis claims to choose; never choose only because a candidate appears first.
4. Treat no-candidate rows as a source-research prompt before making a fallback decision. Search refractiveindex.info and manufacturer sources for the exact six-digit code, exact `nd`/`νd` pair, and nearby vendor-family names. If a reusable commercial glass is sourceable, add it through [glass-catalog-buildout.md](glass-catalog-buildout.md); if the glass remains opaque/private after that check, preserve the numeric data and annotate honestly with a future-upgrade code or `Unmatched`.
5. After edits, regenerate the glass reports. The lens should either disappear from the per-lens queue or retain only rows you explicitly documented as unresolved follow-ups.

## The four-phase audit

Work the phases in order. Each phase ends with the `*.audit.md` log being updated. Do not skip ahead — Phase 1 conclusions feed Phase 2 sd/edge checks, which feed Phase 3 dispersion-quality decisions.

### Phase 1 — Correct mismatched glass

For every element with a `glass:` annotation:

1. Look up the patent's prescription table and read the glass identifier or (nd, vd) for the matching surface index.
2. Compare against the lens-data element's stored `nd` and `vd`. If the per-lens queue flagged this surface, use its candidate list and confidence label as the starting point.
3. Decide:
   - **Stored (nd, vd) matches the patent and a catalog entry exists** → relabel `glass:` to the catalog entry's name. Verify the round-trip matches by reading the resolver's quality badge after the change.
   - **Stored (nd, vd) matches the patent but no catalog entry exists** → first do a short source pass before falling back:
     - Search refractiveindex.info for the exact six-digit glass code (`NNNVVV`), the exact `nd`/`νd` pair, and likely vendor names from the patent context.
     - Check manufacturer sources directly when available (Schott, Ohara, Hoya, Hikari, Sumita, CDGM, etc.), especially if refractiveindex.info points to a mirrored Zemax catalog or PDF datasheet.
     - If the source gives coefficients and the entry is reusable, add it per [glass-catalog-buildout.md](glass-catalog-buildout.md) and validate `assertCatalogConsistent` rather than leaving the lens on Abbe fallback.
     - If the source gives only identity/summary data but no usable coefficients, document the source in the audit log and keep a future-upgrade annotation.
     After that source pass, either add the glass or choose an annotation that lets the resolver fall through gracefully while staying future-proof. Two sub-cases:
     - **6-digit code is known** (from another lens file, from the nd/νd pair itself, or from a cross-reference with Schott/Ohara/Hoya code tables) → use the code-based format:
       ```
       "NNNNNN — descriptive label (Vendor)"
       ```
       Example: `"670571 — lanthanum crown (catalog unresolved; nd=1.67000, νd=57.07)"`. Use this only after checking whether the code can be resolved to a sourceable catalog entry. The resolver extracts `NNNNNN` as a `\d{6}` token and looks it up in `CODE6_INDEX`. When no matching catalog entry exists, it returns null and Abbe approximation runs with the element's stored nd/νd. **If a catalog entry is later added with the same `code6`, the annotation auto-upgrades from Abbe to Sellmeier with no changes to the data or analysis file.** Prefer the unbroken six-digit form because it is canonical and easiest for reports to scan. The resolver also normalizes slash and hyphen forms (`670/571`, `670-571`); a whitespace-separated form (`670 571`) is not resolver-safe.
     - **6-digit code is unknown** (vintage proprietary, designer-attributed, or composition fully opaque) → use the explicit `Unmatched` prefix:
       ```
       "Unmatched (description, reason)"
       ```
       The resolver short-circuits on the `Unmatched` keyword and returns null immediately, preventing any spurious catalog match. Reserve this form for cases where no upgrade path is anticipated.
   - **Stored (nd, vd) disagrees with the patent** → the prescription was transcribed wrong. Update the surface's `nd` (and the element's `nd`/`vd`) to the patent value. Then redo step 2.
   - **Patent provides no glass identifier, only (nd, vd)** → keep the existing annotation if it round-trips within tolerance; otherwise search refractiveindex.info/manufacturer catalogs for that exact `nd`/`νd` pair and use the per-lens candidate list to find a catalog-equivalent label only when the row is unique enough to defend in the audit log. If no sourceable match exists and the candidate list is ambiguous, mark as `Unmatched (designer attribution to X inconsistent with stored nd/vd)` or use a 6-digit code annotation when one is known.
4. **Never** relax the catalog round-trip tolerance (1e-4 in `assertCatalogConsistent`). If a catalog entry doesn't round-trip, fix the catalog source per [glass-catalog-buildout.md](glass-catalog-buildout.md) — do not mask the failure by mislabeling the lens.

Common patterns and their preferred resolutions are tabulated under "Most-frequent patterns" in [glass-relabel-followup.md](glass-relabel-followup.md).

Phase 1 refinement from the per-lens queue: when several surfaces share the same stored `nd`/`vd`, resolve them as a set. A repeated high-confidence candidate is stronger evidence than an isolated row; a repeated ambiguous candidate is a sign to inspect the patent's glass-code column before editing.

### Phase 2 — Audit retained information

With the patent open to the prescription table, walk each surface in order and verify:

| Field | Verify against | Notes |
|---|---|---|
| `R` | Patent table radius | Watch sign convention — some patents flip sign. Last-row image-side back focus is excluded. |
| `d` | Patent table thickness | For variable gaps, this should match `var[label][0][0]` (infinity, first zoom position). |
| `nd` | Patent table or computed from glass | Already audited in Phase 1; spot-check that the surface and element values agree. |
| `elemId` | Element identity | Cemented junctions carry the rear element's `elemId`; air gaps use `0`. See [LENS_DATA_SPEC.md](../src/lens-data/LENS_DATA_SPEC.md) Pairing Rules. |
| `sd` | Patent semi-diameter or geometric estimate | If validation flags a slope or cross-gap issue, see the Semi-Diameter Guidelines section in `TEMPLATE.data.ts.template`. |

For each element, also verify:

| Field | Verify against | Notes |
|---|---|---|
| `vd` | Patent table or vendor catalog | Round to the precision the patent publishes (typically 1–2 decimal places). |
| `fl` | Patent or computed | Optional but useful for inspector display. Skip if not previously populated. |
| `type` | Patent prose / R signs | Bi-/plano-/meniscus + positive/negative. `(Asph)` suffix when an `asph` block is keyed to a surface on this element. |
| `cemented` | Junction surfaces | Group name like `"L11–L12"` on every element of a cemented stack. |

For aspherics, verify the `asph` block:

- Conic constant convention. Some patents use `κ = 1 + K` (treat κ = 1 as K = 0). The patent text near the asph table usually states the convention explicitly.
- Coefficient sign and magnitude — copy verbatim, including scientific notation. Watch for missing exponents (e.g. `1.5e-7` mis-typed as `1.5`).
- Set unused required slots (A4–A14) to `0`, not omitted. A16/A18/A20 are optional; omit when absent in the patent.
- Odd orders A3–A19 are supported and optional — transcribe them verbatim when the patent lists non-zero values; omit zero-valued odd terms. Older data files may still carry even-order least-squares refits from before odd-order support; the replacement queue is `agent_docs/odd-asphere-backfill.md`.

For zoom lenses, additionally verify:

- `zoomPositions` matches the patent's variable-spacing-table column headers exactly.
- Each `var` entry has `zoomPositions.length` pairs; surface `d` matches first pair's infinity value.
- Non-monotonic groups (forward-then-back across zoom) are noted in the file header.

If any field drifts, fix it in the data file. Then re-run validation:

```bash
npm run typecheck && npm run test
```

### Phase 3 — Add useful additional information

Most existing data files predate the chromatic dispersion overhaul. Use this phase to enrich them with whatever extra spectral and metadata the patent provides.

**Spectral enrichment** (per element). Populate any of these that the patent lists, even if only one is present:

```ts
dPgF: 0.0376,   // anomalous partial dispersion deviation P_g,F − P_g,F(normal)
nC:   1.49234,  // C-line (656.3 nm)
nF:   1.49978,  // F-line (486.1 nm)
ng:   1.50387,  // g-line (435.8 nm) — recommended for APO designs
```

The full dispersion cascade (complete line indices → catalog Sellmeier → partial line indices → Abbe + dPgF → plain
Abbe) honors whatever you populate. See [proprietary-glass-backfill.md](proprietary-glass-backfill.md) for the cascade
rules and the LCA quality-badge upgrade path.

**Metadata enrichment** (top-level lens fields). Add when missing:

| Field | When to add |
|---|---|
| `patentNumber` | Exact publication or grant transcribed, including jurisdiction/kind code. Required for patent-backed production lenses. |
| `patentAuthors` / `patentAssignees` | Complete source-order inventor list and source assignee/applicant list. Required with `patentNumber`; empty arrays mean the source truly names none, not “unknown.” |
| `subtitle` | Compact example and design-correlation context — e.g. `"WO 2019/220618 A1 — Example 9"`. Keep it because reports still use it for source/example matching. |
| `patentYear` | Year published or granted. |
| `focalLengthDesign` / `apertureDesign` | When the patent's computed values differ from marketing. |
| `elementCount` / `groupCount` | Always — easy to miss. |
| `focusDescription` | One short sentence on the focus mechanism. Important for inner-focus and floating-element designs. |
| `maker` | Always, if missing. Maker pages depend on it. |

**Patent-comment enrichment** (file header). When the patent provides confirmation criteria you can describe in 2–4 lines (element/group count, MFD, ED count, asph count, focal length match), add them to the header comment. See `NikonNikkorZ50f18S.data.ts` for the pattern.

### Phase 4 — Sync the analysis file

When `*.analysis.md` exists, update it to match Phase 1–3 changes. The analysis file is read by users; outdated glass names and incorrect (nd, vd) numbers in prose are the most reader-visible bugs the audit fixes. Reference [../src/lens-data/LENS_ANALYSIS_SPEC.md](../src/lens-data/LENS_ANALYSIS_SPEC.md) for the required section skeleton, conditional sections, and voice conventions when restructuring.

Targeted edits to make in the analysis:

- **Element-by-element narrative** — relabel any glass name that changed in Phase 1. Update inline (nd, vd) values to match the corrected data file.
- **Glass class statements** — phrases like "S-FPL53 / FCD100 class (super-ED…)" become "S-FPL51 / FCD1 class (ED, νd = 82.6)" when the audit downgrades the class.
- **APO claims** — only retain "anomalous partial dispersion" or "APO" language when the data file's dPgF or line indices justify it. Bare Abbe-only data is not enough to claim APO behavior.
- **Patent reference accuracy** — the bold metadata block must match `patentNumber`, `patentAuthors`,
  `patentAssignees`, and `patentYear`; its embodiment line must agree with `subtitle`.
- **Aspherical coefficient values** — analysis files sometimes quote coefficients inline; update them when Phase 2 corrected the data.

If `*.analysis.md` does not exist, do not create one as part of an audit — analysis authoring is its own pass. The `*.audit.md` log captures the data-file-only outcome.

## The audit log: `*.audit.md`

After every audit, write or append to a sibling `*.audit.md` file in the maker folder. The format is parser-ignored — `lensCatalog.ts`, `lens-data-lib.mjs`, `extract-dpgf.mjs`, and the metadata pipeline all filter strictly on `.data.ts` and `.analysis.md`, so `*.audit.md` is invisible to the build.

### File location

Same folder as the data file, same stem:

```text
src/lens-data/<maker>/<LensFile>.data.ts
src/lens-data/<maker>/<LensFile>.analysis.md
src/lens-data/<maker>/<LensFile>.audit.md   ← audit log, not consumed by build
```

### Log format

Append a dated section per audit pass. Lead with the patent reference, then a per-element-or-surface table of what changed, then a brief narrative for non-mechanical decisions.

```md
# Audit Log — <Lens Name>

Patent: <reference, e.g. JP WO2019/220618 A1, Example 9>
Catalog version: <commit short SHA, optional>

## YYYY-MM-DD — <one-line scope, e.g. "Glass relabel + dPgF backfill">

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L23 | `glass` | `S-FPL53 / FCD100 class` | `S-FPL51 / FCD1 class (νd = 82.6)` | Stored vd=82.6 matches FPL51, not FPL53 (vd=94.95). |

### Phase 2 — Retained-information audit

- Surface 9 R: confirmed against patent table 1 row 9.
- All `d` values within 1e-3 mm of patent.
- `asph["6A"]` coefficients re-verified; conic convention κ = 1 → K = 0 confirmed in patent ¶0061.

### Phase 3 — Spectral / metadata enrichment

- Added `dPgF: 0.0036` on L23 (patent table, "Pg,F" column).
- Added `patentYear: 2019` and `groupCount: 9`.

### Phase 4 — Analysis sync

- Updated `Lens.analysis.md` §G2 narrative: "Super ED" → "ED (νd = 82.6)"; removed "S-FPL53 / FCD100" reference.
- Removed unsupported "true APO" claim — current spectral data justifies "well-corrected achromat" only.

### Verification

- `npm run typecheck && npm run test` — passed.
- `npm test -- catalogMismatchScan` — 2 mismatches remaining on this lens (surfaces 12, 14), both flagged as patent verification needed.
```

### What goes in the log

- Per-field before/after values, not narrative descriptions of changes.
- The patent paragraph or table reference for each justification.
- The queue row status for each flagged surface: resolved, intentionally left unmatched, added to catalog-buildout, or deferred with reason.
- Verification commands run and their result.
- Outstanding follow-ups (mismatches not resolved this pass, missing patent embodiments, etc.).

### What does not go in the log

- Code diffs or full file contents — git captures those.
- General commentary about the design — that belongs in `*.analysis.md`.
- Subjective claims without a citation — the log is forensic, not interpretive.

## Verification

After every audit, run:

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
```

If glass annotations changed, regenerate the catalog scans and confirm the lens drops off the affected mismatch lists:

```bash
npm run generate:glass-reports
```

After regeneration, check the lens section in [glass-relabel-by-lens.generated.md](generated/glass-relabel-by-lens.generated.md):

- If the section disappeared, Phase 1 is fully cleared for catalog mismatches.
- If rows remain, copy the remaining surface numbers and reasons into the audit log.
- If the row moved from candidate-backed to no-candidate, treat that as evidence that the new annotation resolved one mismatch but exposed a catalog gap.

If the audit relabeled a surface that the historical global followup queue tracked, move the row from "Pending" to "Resolved this session" in [glass-relabel-followup.md](glass-relabel-followup.md).

If the audit was on a lens listed in [proprietary-glass-backfill.md](proprietary-glass-backfill.md) Tier A and
successfully populated the direct `dPgF`/line-index fields, delete the row from that table.

## Pruning audit logs

Audit logs accumulate over time. They can be:

- Kept indefinitely as long as they remain compact and the lens is actively maintained.
- Pruned to the most recent 3–4 sessions when the file grows past ~200 lines.
- Squashed into a single "Historical audits prior to YYYY-MM-DD" summary when older entries no longer carry actionable information.

The log's purpose is forensic: future-you should be able to reconstruct which patent version backed which value. Pruning is allowed; deletion is not.

## Related docs

- [adding_a_lens.md](adding_a_lens.md) — workflow for new lens files (what this guide assumes is already complete).
- [glass-relabel-by-lens.generated.md](generated/glass-relabel-by-lens.generated.md) — auto-generated per-lens relabel queue for patent-audit execution; the primary queue this audit drains.
- [glass-relabel-followup.md](glass-relabel-followup.md) — historical follow-up notes and most-frequent mismatch patterns.
- [glass-catalog-buildout.md](glass-catalog-buildout.md) — adding new vendor Sellmeier entries when Phase 1 needs one.
- [proprietary-glass-backfill.md](proprietary-glass-backfill.md) — line-index backfill workflow when Phase 3 picks up `nC`/`nF`/`ng` from the patent.
- [catalog-mismatches.generated.md](generated/catalog-mismatches.generated.md) — auto-generated raw mismatch list (regenerate first).
- [glass-relabel-candidates.generated.md](generated/glass-relabel-candidates.generated.md) — auto-generated candidate suggestions per mismatch group.
- [../src/lens-data/LENS_DATA_SPEC.md](../src/lens-data/LENS_DATA_SPEC.md) — full data-file format reference, including the Glass Identification section.
- [../src/lens-data/LENS_ANALYSIS_SPEC.md](../src/lens-data/LENS_ANALYSIS_SPEC.md) — analysis-file format and writing conventions consumed by Phase 4.
