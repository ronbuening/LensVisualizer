# Audit Log — Voigtländer APO-LANTHAR 50mm f/2.0 Aspherical

Patent: JP2021-43376A, Example 5 (Cosina / Sugano)
Catalog version: current branch

## 2026-04-30 — Phase 1–4 initial audit

### Phase 1 — Glass corrections

| Element | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 (Lfa) | `glass` | `"S-LAH79 (OHARA) probable"` | `"Unmatched (dense lanthanum; nd=1.852/νd=42.1 unregistered across OHARA, Schott, Hoya, Sumita public catalogs)"` | S-LAH79 in the catalog has nd=2.0033, vd=28.27 — completely different glass. No catalog entry within 1e-4 of nd=1.85249. |
| L4 (Lfc) | `glass` | `"K-GFK68 (Sumita) — exact match"` | `"FCD505 (HOYA) / K-GFK68 (Sumita)"` | K-GFK68 in our catalog (sourced from 2017 Sumita AGF) has nd=1.5924, vs patent nd=1.59282 — diff=0.00042 exceeds 1e-4 tolerance. FCD505 (Hoya, nd=1.59282) is the round-trip-valid proxy. The glass is confirmed Sumita K-GFK68 per the current Sumita product catalog (exact triple match on nd/vd/dPgF) but the codebase AGF entry is stale. |
| L7 (Lrc) | `glass` | `"S-LAH64 (OHARA) possible"` | `"Unmatched (S-LAH64-type lanthanum; nd=1.793/νd=47.2; S-LAH64 not in catalog)"` | S-LAH64 is not present in the codebase glass catalog; resolver returns null → Abbe approximation. The Δnd vs Ohara published S-LAH64 data (nd=1.788) is 0.0053, also outside tolerance. |
| L8 (Lrb) | `glass` | `"S-LAH65V (OHARA) probable"` | `"Unmatched (lanthanum; nd=1.803/νd=46.6; S-LAH65V catalog nd=1.804 exceeds 1e-4 tolerance)"` | S-LAH65V in the catalog has nd=1.803999; patent element nd=1.80258; diff=0.001419 >> 1e-4. |

Glass catalog source comment corrections:

| Entry | Field | Before | After | Justification |
|---|---|---|---|---|
| S-LAH79 | `source` | `"…Zemax catalog data. Voigtländer APO-Lanthar 50/2 element 2."` | `"…Zemax catalog data."` | S-LAH79 (nd=2.003) bears no relation to element 2 (nd=1.852); attribution was incorrect. |
| S-LAH65V | `source` | `"…Zemax catalog data. Voigtländer APO-Lanthar 50/2 element 8."` | `"…Zemax catalog data."` | S-LAH65V (nd=1.804) does not match element 8 (nd=1.803) within 1e-4; attribution was misleading. |

### Phase 2 — Retained-information audit

- Surface prescription (R, d, nd) verified surface-by-surface against patent Table 5 (document page 27). All values confirmed exact.
- Aspheric coefficients (3A, 4A, 18A, 19A) verified against patent Table 5 aspheric section. All K=0, A4–A10 values match exactly.
- Variable spacings (ZD10, ZD14, ZD19) verified as F36 focus mode: infinity values [5.49, 0.56, 15.00] and close-focus values [5.89, 3.57, 20.53] confirmed from patent variable spacing table.
- Element types (biconcave, biconvex, meniscus, positive/negative) confirmed against patent prose §0092–0094.
- Focal lengths (fl) confirmed within rounding: maximum discrepancy 0.03 mm (element 7: data file 23.4 vs patent 23.3706).
- focalLengthDesign=49.3, apertureDesign=1.93, closeFocusM=0.37, elementCount=10, groupCount=8 all confirmed.

### Phase 3 — Spectral / metadata enrichment

- Phase 3 additions previously incorporated: dPgF=0.0376 on L3 (Lfb) and dPgF=0.0195 on L4 (Lfc) are patent-listed values from Table 5 — confirmed correct.
- patentYear=2021, subtitle="JP2021-43376A EXAMPLE 5 — COSINA / SUGANO" — confirmed.
- No additional spectral enrichment (nC, nF, ng) available from the patent; Table 5 lists dPgF only for elements 3 and 4.

### Phase 4 — Analysis sync

Updated [VoigtlanderApoLanthar50f2.analysis.md](VoigtlanderApoLanthar50f2.analysis.md):
- §2.2: Updated K-GFK68 language to distinguish Sumita catalog value (nd=1.59282) from codebase AGF entry (nd=1.5924); noted FCD505 as catalog proxy.
- §4 Element 2 table row: "Probable: S-LAH79 (OHARA)" → "Unmatched (nd=1.852 does not correspond to S-LAH79 which is nd=2.003)."
- §4 Element 2 body: Added "Glass identification" paragraph explaining unmatched status, and noted likely Sumita proprietary provenance.
- §4 Element 4 table row: Updated to describe K-GFK68/FCD505 distinction.
- §4 Element 4 body (supplier identification): Added note about catalog AGF discrepancy; supply chain conclusion unchanged.
- §4 Element 7 table row: "Possible: S-LAH64" → "Unmatched (not in catalog)."
- §4 Element 8 table row: "Probable: S-LAH65V" → "Unmatched (Δnd exceeds 1e-4)."
- §6.1 table: Updated rows for elements 2, 3, 4, 7, 8.
- §6.2: Expanded to note elements 7 and 8 are also unmatched; revised dual-supplier conclusion to reflect that Sumita sourcing is more pervasive than previously assessed.
- §7 Firmly Established items 3, 4, 5: Updated with specifics on catalog tolerance.
- §3.1 APD diagram: Updated element 3 and 4 glass labels.

### Verification

- `npm run typecheck` — passed.
- `npm run test` — 1504 tests passed, 116 test files.

### Outstanding

- The codebase's K-GFK68 catalog entry (nd=1.5924 from 2017 Sumita AGF) disagrees with the current Sumita catalog (nd=1.59282). Consider updating K-GFK68 Sellmeier coefficients from the current Sumita AGF/datasheet if available. Until then, FCD505 (Hoya) serves as the round-trip-valid proxy.
- Elements 7 (Lrc, nd=1.793) and 8 (Lrb, nd=1.803) remain unmatched. S-LAH64 and S-LAH65V could be added to the catalog if verified Sellmeier data is sourced (see glass-catalog-buildout.md). Neither glass appears in multiple lenses currently, so this defers to a future catalog expansion pass.
- Element 2 (Lfa, nd=1.852, νd=42.08) is unmatched. If a Sumita proprietary glass is confirmed at these values in a future lens, adding it to the catalog at that time would resolve this surface.
