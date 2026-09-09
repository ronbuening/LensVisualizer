# Audit Log — Voigtländer APO-LANTHAR 50mm f/2.0 Aspherical

Patent: JP2021-43376A, Example 5 (Cosina / Sugano)
Local patent source: patents/JP2021043376A.pdf (untracked local file)
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

## 2026-06-04 — Sweep 3 local patent recheck

- Local patent source: `patents/JP2021043376A.pdf` (untracked local file).
- Re-extracted the PDF with `pdftotext -layout` for the proprietary backfill sweep. The patent text defines table fields for `nd`, `νd`, and `dPgF`; it does not expose separate `nC`, `nF`, or `ng` rows in the extracted text.
- No data-file backfill was made in this sweep. Elements 3 and 4 already carry the patent-listed `dPgF` values, and the remaining proprietary elements do not have patent-listed line indices available from the local PDF text.

## 2026-06-23 — Full Voigtländer local-patent sweep

- Local patent source: `patents/JP2021043376A.pdf` (untracked local file).
- Rechecked Example 5, Table 5 on rendered page 27. The stored R, d, nd, vd, aspheric coefficients, and F36 variable gaps remain consistent with the patent.
- Patent-listed `dPgF` values are present only for L3/L4, and the data file already carries those values. No additional APD, high-index, or glass-label updates were available from the patent.
- The patent table does not publish semidiameters, so the existing SDs remain derived display clearances.

## 2026-09-08 — Oldest-first live diagram audit, lens 1 of 200

Source: exact local `patents/JP2021043376A.pdf`, Table 5 p.27 and Figure 10 p.48, plus §§0092–0098. Table and optical outline inspected at 600 dpi. This pass supersedes the earlier claim that every aspheric coefficient was correct.

| Item | Before | After | Evidence |
|---|---|---|---|
| Surface 19A A6 | −1.8942e−7 | +1.8942e−7 | Original Table 5 clearly prints a positive coefficient; independent departure at h=10 mm is −421.3933 µm |
| LE surfaces 18A/19A sd | 11/11 mm | 15/15 mm, estimated | Fig.10 optical endpoints: approximately 15.2 mm; first and last elements have comparable optical heights |
| Focus distance | 0.37 m | 0.45495 m | ZD0=370 mm object-to-first-surface + F36 track 84.95 mm |
| Movement annotations | Two optical groups; rear chart averaged separate motions | Three F36 assemblies: front 101, Jb, Ja+LE | §0095; independent camera-fixed travel −8.94, −8.54, −5.53 mm |
| APD header/badges | Five APD elements; three inferred assignments | Two patent-listed; other element-specific APD status unspecified | Table 5 gives dPgF only for elements 3/4 |
| Glass labels | Supplier assertions and obsolete catalog-tolerance descriptions | Supplier-neutral equivalents/unresolved labels; element 8 uses compatible S-LAH65V | Table 5 names no supplier; current shared catalog accepts element 8 coordinates without tolerance changes |
| Asphere roles/analysis | Wrong departure values and supplier/process conjecture | Recomputed departures at displayed rims; source-grounded analysis | Corrected Table 5 polynomial and estimated rim heights |
| Shared aperture readout | `EP` appeared current although diameter stayed constant at f/16 | `Wide-open EP` | Browser check and `DiagramControls` reads `baseEPSD`; physical stop readout already updates correctly |

Retained: all R/d/nd/vd rows, the other 15 aspheric coefficients, F36 gaps, and remaining rim estimates. Focal-length metadata now preserves the published 49.28 mm. Infinity track 76.01 mm; F36 track 84.95 mm. The stop follows Jb (fixed ZD11). Intermediate F36 positions are interpolated, not separate patent schemes.

Figure screening used page 48 crop `0.581,0.555,0.77,0.625` at 600 dpi. Automatic ENV/RIM readings near Lfd and the rear doublets include leader lines; visual optical-rim checks supersede those contaminated rows. At 71.47 µm/px, LE's approximately 427 px full optical height gives 15.26 mm semi-height. Conservative 15 mm passes domain, edge-thickness, air-gap and hidden-trim checks. No attempt was made to copy mechanical steps into clear apertures.

Live production inspected at `/lens/apo-lanthar-50f2/`, including infinity/close focus. Corrected local viewer checked at infinity, midpoint, and close focus; F36 readouts are [5.49, 0.56, 15.00], [5.69, 2.065, 17.765], [5.89, 3.57, 20.53] mm. The motion chart now shows three groups. Tracking-focus rays and dimension overlays render; aperture f/16 reduces the physical stop. Diagram BFD is the computed paraxial back focus at the current prescription, distinct from the authored image-plane gap `BF`.

Verification: surface and image-circle audits passed; focused ASP19/F36/hidden-trim regression passed (3 tests); glass reports passed (15 tests), with zero catalog mismatches and coverage improving from 3/10 to 4/10 elements. Full repository gates and final commit status are recorded in the batch record.

Unresolved source limits: no numerical SDs, no intermediate F36 cam law, no verified production prescription or glass supplier, and no partial-dispersion data for the other eight elements. These limits are now explicit in the analysis and focus description.

Independent paraxial y–ν matrix check: EFL 49.2827886 mm at infinity and 49.4662068 mm at F36. Rounded F36 spacings solve to 370.1693 mm from surface 1, consistent with the printed 370 mm endpoint to table precision. The published spacing values were retained.
