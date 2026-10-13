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

## 2026-10-08 - dPgF moved to the engine's normal line

Both stored values moved: Lfc from the catalog curve, Lfb from the patent's figure once its line was established (see "Lfb converted" at the end of this section, which supersedes the "Left" item on Lfb).

### Patent evidence

- Patent formula: none. Read local `patents/JP2021043376A.pdf` (51 pages, native text layer, page header "JP 2021-43376 A 2021.3.18"; its Table 5 matches this file's prescription). ¶0069 (PDF p. 18) is the only definition of the table column: `dPgF(i)` is the anomalous partial dispersion value given for glasses of large anomalous partial dispersion. It gives no formula, no definition of PgF and no line constants. Optical conditions 1–3 are DF3/DR3, DF4/DR4 and DT12/(FL/FNO), none of which uses partial dispersion, and the only formula image in the document is 数1, the aspheric sag (PDF p. 19). The full text layer was searched for ＰｇＦ, 部分分散 and 異常分散; the only other numerical mention is ¶0120 (PDF pp. 33–34), which concerns Example 9.
- Printed partial dispersion: Table 5 (PDF p. 27, an image, read on the page rendered at 200 dpi) has the columns R, D, nd, Vd, dPgF and FL. It fills dPgF on two rows only: surface 5 (Lfb) 0.0376 and surface 7 (Lfc) 0.0195. No absolute PgF / θgF and no nC, nF or ng appear anywhere.
- Both stored `dPgF` values were those two figures copied directly. The engine reads `dPgF` against 0.6438 − 0.001682·νd, so they meant PgF 0.5441 (Lfb) and 0.5479 (Lfc).
- With no stated line, the patent's deviation cannot be turned into an absolute PgF from the patent alone. No a and b were assumed for it.

### Change

| Element | νd | Source figure | Stored before | Stored after |
|---|---:|---|---:|---:|
| Lfb (3) | 81.61 | Patent dPgF 0.0376 (Table 5; line unstated). OHARA S-FPL51 catalog curve PgF 0.537460 does not reproduce it | 0.0376 | 0.0325 (see "Lfb converted") |
| Lfc (4) | 68.62 | Patent dPgF 0.0195 (Table 5; line unstated). HOYA FCD505 catalog curve PgF 0.544337 | 0.0195 | 0.015956 |

- Lfc is catalog-derived. The label resolves to the repo's HOYA FCD505 curve (nd 1.59283, νd 68.66), whose PgF = (ng − nF)/(nF − nC) is 0.544337. At the stored νd that PgF reads +0.019523 on 0.64833 − 0.0018·νd, which is the patent's 0.0195 to four decimals, and +0.015956 on the engine's line. The old number therefore sat on a non-engine line, and the new one is the same glass on the engine's line: 0.544337 − (0.6438 − 0.001682 × 68.62) = 0.544337 − 0.528381 = +0.015956.
- Cross-check only, not a source: converting the patent's 0.0195 through 0.64833 − 0.0018·νd gives PgF 0.544314 and +0.015933, 0.000023 from the stored value. The Lfc result does not depend on which of the two routes is used.
- No element authors nC, nF or ng and none uses `indexReference: "e"`, so the authored `dPgF` sets the g-line index of both elements. Lfc's runtime PgF drops from 0.5479 to 0.5443.
- Lfc's `apdNote` now quotes the patent's figure as the patent's, says its line is not stated, and gives the runtime value as catalog-derived. Lfb's `apdNote` now says the figure is stored as printed. The header box gained a partial-dispersion note. No nd, νd, glass label, `apd` tag, `role` or surface changed.
- Analysis: the sentence under Element 4 that said the runtime retains the patent value now gives the stored value and its origin, and says Lfb still holds the patent's figure. Every other ΔPgF in the analysis is the patent's figure and is unchanged.
- This supersedes the statements in the 2026-04-30 Phase 3, 2026-06-04 and 2026-06-23 sections that the patent-listed `dPgF` values are correct as stored. They are correct transcriptions of Table 5, not engine-line values.

### Left

- Lfb stays at 0.0376. Its label resolves to the repo's OHARA S-FPL51 curve, PgF 0.537460, which reads +0.030928 on the engine's line and +0.036028 on 0.64833 − 0.0018·νd. Neither is the patent's 0.0376 (0.0067 and 0.0016 away), so that curve is not shown to be the glass the patent's figure describes, and substituting it would change the glass's PgF, not only the convention. The patent figure is kept over a catalog curve that disagrees with it.
- The value is very likely still on a non-engine line. Table 5 prints it in the same column as Lfc's figure, and the six repo curves at 1.497 / 81.6 (S-FPL51, FCD1, M-FCD1, H-FK61, J-FK01A, K-PFK80) read +0.0304 to +0.0319 on the engine's line and +0.0355 to +0.0370 on 0.64833 − 0.0018·νd, so the engine-line reading PgF 0.5441 is 0.0057 to 0.0072 above every one of them. For reference only: the local HOYA AGF (`tmp/pdfs/HOYA20260707_include_obsolete.agf`) lists ΔPgF 0.0375 for FCD1 (1.49700 / 81.61) and 0.0194 for FCD505 (1.59282 / 68.62), each 0.0001 below the patent's figure.
- Open for a ruling: if the patent's line may be taken as 0.64833 − 0.0018·νd, Lfb becomes PgF 0.0376 + 0.64833 − 0.0018 × 81.61 = 0.539032 and `dPgF` = 0.539032 − 0.506532 = +0.032500. That line is not printed in this patent, so the conversion was not made here.
- LF, Lfa, Lfd, Lrd, Lrc, Lrb, Lra and LE carry no `dPgF`. The patent prints none for them and none was added.
- The `apd: "patent"` tags on Lfb and Lfc stay: the patent singles out these two elements by printing a dPgF for them.
- Unrelated to Example 5 but seen in passing: ¶0120 gives 0.0369 as the dPgF magnitude of Example 9's two positive menisci, while Table 9 (PDF p. 35) prints 0.0376 for both, on the same 1.49700 / 81.61 glass as Lfb.

Checked with `.lens-work/audit-tools/dpgfcheck.mjs`: the edited file builds and validates. No test, typecheck, lint, format or build command was run in this pass.

### Second reading

- Table 5 re-read on PDF p. 27 at 300 dpi: 0.0376 on surface 5 (1.49700 / 81.61) and 0.0195 on surface 7 (1.59282 / 68.62). No formula for the column exists anywhere in the document. Lfc's +0.015956 recomputes from PgF 0.544337 at νd 68.62. Against the committed data file only one `dPgF` number, two `apdNote` strings and the header comment differ. No value was changed in this reading.
- Evidence for the open Lfb ruling that the first pass did not have: the patent fills the dPgF column for two more glasses. Table 11 (PDF p. 39) surface 3 is 1.43875 / 94.94 with 0.0571; Table 13 (PDF p. 43) surfaces 5A, 12A and 18A are 1.82115 / 24.06 with 0.0188. Three of the four glasses are exact HOYA coordinates, so HOYA's own dispersion polynomial was evaluated from `tmp/pdfs/HOYA20260707_include_obsolete.agf` (it returns the catalog nd and νd exactly):

| Glass in the patent | Patent dPgF | Dispersion data | PgF | On 0.64833 − 0.0018·νd | On the engine's line |
|---|---:|---|---:|---:|---:|
| 1.82115 / 24.06 (Table 13) | 0.0188 | HOYA M-FDS910 polynomial; HOYA prints ΔPgF 0.0187 | 0.623719 | +0.0187 | +0.0204 |
| 1.59282 / 68.62 (Table 5, Lfc) | 0.0195 | HOYA FCD505 polynomial; HOYA prints 0.0194 | 0.544115 | +0.0193 | +0.0157 |
| 1.49700 / 81.61 (Table 5, Lfb) | 0.0376 | HOYA FCD1 polynomial; HOYA prints 0.0375 | 0.538852 | +0.0374 | +0.0323 |
| 1.43875 / 94.94 (Table 11) | 0.0571 | Repo OHARA S-FPL53 curve; Ohara prints 0.0461 on its own line | 0.534305 | +0.0569 | +0.0502 |

- All four patent figures sit 0.0001 to 0.0002 above the reading on 0.64833 − 0.0018·νd. Against the engine's line they miss by −0.0016, +0.0038, +0.0053 and +0.0069, changing sign below νd ≈ 38 exactly as the gap between the two lines does. The least-squares line through the four points (PgF minus the patent's figure, against νd) is 0.64827 − 0.001802·νd, with residuals under 0.00003. The S-FPL53 row also shows the column is one convention applied to every glass, not each vendor's own catalog figure.
- The repo's FCD1 and FCD505 entries are Sellmeier refits of HOYA's 2017 polynomial. The FCD1 refit gives PgF 0.537732, 0.0011 below the current AGF polynomial's 0.538852, and the FCD505 refit gives 0.544337 against 0.544115. That gap in the repo curves, not the patent's figure, is why the six repo curves at 1.497 / 81.6 read 0.0006 to 0.0021 below 0.0376 on the conventional line.
- Lfb is still not converted here: the line is inferred from the patent's tables and vendor data, not printed, so the ruling stays with the maintainer. The candidates on the engine's line are +0.032500 (patent's 0.0376 through 0.64833 − 0.0018·νd), +0.032320 (HOYA FCD1 polynomial), +0.031200 (repo FCD1 refit) and +0.030928 (repo S-FPL51 curve, the one the label resolves to). The stored 0.0376 is 0.0051 to 0.0067 above them.

### Lfb converted

- Lfb `dPgF` 0.0376 -> 0.0325. The patent's 0.0376 is read against 0.64833 − 0.0018·νd: PgF = 0.0376 + 0.64833 − 0.0018 × 81.61 = 0.539032, and 0.539032 − (0.6438 − 0.001682 × 81.61) = +0.032500.
- Basis for the line, which this patent does not print: the same applicant (株式会社コシナ, applicant number 391044915 on the front page of both) states ΔPgF = PgF − 0.64833 + 0.00180·νd in JP 2026-98935 A (PDF p. 15, text layer) and JP 2026-121744 A; and the four dPgF figures this patent prints (Tables 5, 11 and 13, listed under Second reading) fit one line, 0.64827 − 0.001802·νd, to 0.00003.
- The two candidate lines differ by 0.0002 at νd 81.61 (+0.0323 on the fitted line). HOYA FCD1, the catalog glass whose own-line deviation the patent's figure matches, reads +0.0323 on the engine's line.
- This closes the "Left" item above. Both stored values are now on the engine's line; the header note and both `apdNote` strings say how each was obtained.
