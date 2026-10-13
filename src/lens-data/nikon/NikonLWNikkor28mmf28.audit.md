# NikonLWNikkor28mmf28 — Extraction, Construction and Verification Record

This file consolidates the Stage 1 record (Part A, preserved with one annotated correction), the Stage 2 data
construction record (Part B) and the Stage 3 analysis record (Part C). None is an independent audit; Stage 4 appends
that review later.

# Part A — Stage 1 extraction and first-order verification

Scope: Stage 1 construction-side extraction and first-order verification (`CHAT_PREFLIGHT`). This is not an independent
audit; the Stage 4 source-first review will be appended to this file later. No `.data.ts` or `.analysis.md` exists yet.

## 1. Job and reference versions

| Field | Value |
|---|---|
| Patent | US4203653 (US 4,203,653; granted 1980-05-20; no kind code printed on the grant) |
| Lens | Nikon LW-Nikkor 28mm f/2.8 |
| Embodiment | Example 1 (First Embodiment; identical numerical data reprinted as claim 4) |
| Output stem | `NikonLWNikkor28mmf28` |
| Inventor / assignee | Ikuo Mori / Nippon Kogaku K.K. |
| Filed / priority | 1978-06-23, Appl. No. 918,592 / JP 52-77329, 1977-06-29 |

The original patent PDF and job card are included unchanged. Their SHA-256 values are recorded in
`evidence.json` and `manifest.json` and are re-checked by the verifier (`S1-IDENTITY`).

Controlling references are listed with hashes in `manifest.json.references`:

- `LENS_DATA_SPEC.md`, `LENS_ANALYSIS_SPEC.md` and `LENS_MOUNT_FORMAT_OPTIONS.md`;
- `TEMPLATE_data_ts.template`, `defaults.ts` and `prettierrc.json`;
- `LensPatentChatProtocol.md`, `LensPatentDossierContract.md` and `LensPatentWorkflowGuide.md`;
- the four stage prompts.

The repository taxonomy source (`lensTaxonomy.ts`), the adding-a-lens guide and the integration handoff were not
available in this runtime. They are recorded as unavailable. The mount and format ids used below come from
`LENS_MOUNT_FORMAT_OPTIONS.md`.

Runtime deviations from the protocol's path conventions:

- `/mnt/data` does not exist here, so the handoff is delivered from `/mnt/user-data/outputs/`.
- `/mnt/transcripts` is read-only, so no transcript copy was written.

## 2. Extraction and conventions

The PDF is an image-only scan with no text layer. Every value was read from page rasters rendered at 600 DPI with
PyMuPDF, using row-level crops of both printings of Example 1:

- the description table on PDF page 4, printed column 3;
- the claim 4 table on PDF page 4, printed column 4.

Raw text, interpreted value and locator are stored per item in `evidence.json.rawPrescription`.

Example 1 as printed (normalized, f = 1.0):

| Surface | r | d (following) | Medium | n | ν |
|---|---|---|---|---|---|
| 1 | 1.266 | 0.07 | L1 | 1.67025 | 57.5 |
| 2 | 0.525 | 0.576 | air | | |
| 3 | 0.825 | 0.094 | L2 | 1.60323 | 42.5 |
| 4 | −1.696 | 0.301 | air (iris) | | |
| 5 | **0.563** (description) / **−0.563** (claim 4) | 0.112 | L3 | 1.7847 | 26.1 |
| 6 | 2.273 | 0.026 | air | | |
| 7 | −2.098 | 0.073 | L4 | 1.80411 | 46.6 |
| 8 | −0.647 | 0.004 | air | | |
| 9 | −17.482 | 0.087 | L5 | 1.732 | 51.0 |
| 10 | −0.839 | B.f. = 1.295 | air | | |

Other printed system values: relative aperture 1:2.8; angle of view 74°; Fig. 1 annotation "principal rays of 37°".

The source contains no stop surface, no stop diameter, no semi-diameters, no aspheres, no rear plates and no
close-focus data. Figure 2C shows barrel distortion of roughly −2% near 37° (graphical reading only).

Conventions:

- **Sign convention.** Light travels left to right, and R > 0 means the centre of curvature lies to the right. This is
  consistent with L1 being described as a negative meniscus convex to the object (r1 = +1.266, r2 = +0.525).
- **Index line.** The patent does not name the spectral line. The d-line is inferred because L3 and L4 coincide with
  d-line catalog coordinates to better than 0.001; e-line values for these glasses would differ by about +0.004 to
  +0.006. No e-to-d conversion was applied.
- **Back-focus reference.** B.f. runs from the r10 vertex to the paraxial image plane, with the object at infinity.

## 3. Model transformations (ledger: `evidence.json.modelingDecisions`)

| ID | Kind | Disposition |
|---|---|---|
| MD-01 | Source selection | Example 1 per job card. Example 2 is used only for the r5 sign cross-check. |
| MD-02 | Apparent source correction | r5 = −0.563 adopted (claim 4) over r5 = +0.563 (description table). See §6. |
| MD-03 | Stop insertion (provisional) | Split d4 at 0.50 × d4 (0.1505 / 0.1505 normalized) from Fig. 1. Final placement is a Stage 2 task. |
| MD-04 | Scaling (proposed) | s = 28.0. Model EFL = 28.031 mm. Alternative s = 27.969 gives EFL exactly 28.000 mm. Stage 2 confirms. |
| MD-05 | Semi-diameters | Not published; Stage 2 derives them under current geometry rules. |
| MD-06 | Focus | Proposed `CONSTRAINED_RECONSTRUCTION`, unit focus to 0.5 m object-to-film-plane. See §5. |
| MD-07 | Omissions | None required (no dummy planes, plates or filters). |

Stop evidence from Fig. 1 (PDF page 2, 600 DPI pixel measurement):

- The upper and lower iris ticks sit at x = 1440 and x = 1425.5 px.
- The 37° principal ray in the same drawing crosses the axis at x ≈ 1425.5 px.
- The r4 and r5 vertices sit at x = 1250 and x = 1610 px.
- The iris therefore lies at 0.48–0.53 of d4 from r4.

The agreement between the tick position and the chief-ray crossing is the main support for MD-03. An initial reading
of 0.87 × d4 was discarded after closer inspection showed it had measured a label stroke rather than the iris tick.

## 4. Glass review

Method:

- An unseeded search covered every glass in the six bundled vendor catalogs of opticalglass 2.0.2: CDGM 321,
  Hikari 144, Hoya 238, Ohara 134, Schott 122 and Sumita 128 glasses (1,087 in total).
- The distance metric is √(Δnd² + (Δνd/50)²).
- The rows needed for offline replay are stored in `evidence.json`. They are copies, not independent re-verification
  of the vendors.

| Element | Native nd / νd | Code | Family | Nearest catalog glass (Δnd, Δνd, distance) | Class |
|---|---|---|---|---|---|
| L1 | 1.67025 / 57.5 | 670575 | lanthanum crown | J-LAK02 Hikari (−0.00025, −0.15, 0.00305) | Equivalent (at the Close boundary) |
| L2 | 1.60323 / 42.5 | 603425 | barium flint | K-BaSF5 Sumita (+0.00002, +0.08, 0.00156) | Close |
| L3 | 1.7847 / 26.1 | 785261 | dense flint | SF56A Schott; ZF51 CDGM (0.00000, −0.02, 0.00047) | Exact |
| L4 | 1.80411 / 46.6 | 804466 | lanthanum dense flint | J-LASF015 Hikari; K-LaSFn6 Sumita; S-LAH65V Ohara (−0.00011, −0.00, 0.00012) | Exact (multi-vendor) |
| L5 | 1.732 / 51.0 | 732510 | lanthanum crown | TAC4 Hoya (+0.00200, +0.05, 0.00227) | Close by metric; nd outside printed precision |

Notes:

- No spectral data is published (no nC, nF, ng or PgF). No anomalous-dispersion claim is supported.
- The catalogs searched are current production only. L1, L2 and L5 may be withdrawn 1970s melts.
- L5 is printed to three decimals. The +0.002 nd residual to TAC4 is four times the printing half-digit, so TAC4 is
  not identical to the source glass.
- All five best matches fall inside the runtime glass-resolution window (Δn ≤ 0.003, Δν ≤ 2). Stage 2 should still use
  honest labels: class or code wording for L1 and L5.
- Supplier identity is not inferred from the Nikon brand.

## 5. Numerical results

All values are from `results.json` (stdlib verifier; y-nu trace and ABCD agree to < 1e-12).

| Quantity | Normalized | At s = 28 | Printed |
|---|---|---|---|
| EFL | 1.001125 | 28.031 mm | f = 1.0 |
| BFD (r10 vertex to focus) | 1.294753 | 36.253 mm | B.f. = 1.295 |
| Lens length r1 to r10 | 1.343 | 37.604 mm | — |
| Total track r1 to image | 2.637753 | 73.857 mm | — |
| BFD / EFL | 1.2933 | — | "1.29 times or greater" (summary text) |
| H from r1 / H′ from r10 | +1.0392 / +0.2936 | — | — |
| Petzval sum (Σ φ/(n·n′)) | +0.2121 | — | — |

- The EFL residual is +0.0011 against a tolerance of 0.0547.
- The BFD residual is −0.00025 against a tolerance of 0.0061.
- Both tolerances are the 99.7% band of 20,000 uniform perturbations within half the last printed digit of every R, d
  and n, plus half the last digit of the printed target.
- The design is retrofocus: BFD > EFL at infinity, with H′ lying outside the lens on the image side.
- The design is not telephoto (TL/EFL = 2.63).

Standalone element powers (thick lens in air; each closed-form value cross-checked by tracing that element alone):

| Element | Shape | f (normalized) | f (mm at s = 28) |
|---|---|---|---|
| L1 | negative meniscus, convex to object | −1.3910 | −38.95 |
| L2 | biconvex, more curved surface toward object | +0.9332 | +26.13 |
| L3 | biconcave | −0.5652 | −15.83 |
| L4 | positive meniscus, convex to image | +1.1379 | +31.86 |
| L5 | positive meniscus, convex to image | +1.2013 | +33.64 |

Functional groups (standalone in air):

| Group | f (normalized) | f (mm) |
|---|---|---|
| L2–L5 | +0.9756 | +27.32 |
| L1–L2 (ahead of the iris) | +1.2696 | +35.55 |
| L3–L5 (behind the iris) | +2.7330 | +76.52 |

Patent conditions (adopted data). All are satisfied:

| Condition | Requirement | Value |
|---|---|---|
| (1) | 0.25 < d4/f < 0.5 | 0.3007 |
| (2) | 1.6 < d2/d4 < 2.5 | 1.914 |
| (3) | d3/d4 < 0.5 | 0.312 |
| (4) | 1 < \|f1\|/f < 2 | 1.389 |
| (5) | 0.8 < f2/f < 1.1 | 0.932 |
| r3 < \|r4\| | ratio < 1 | 0.486 |
| d6 < ½ min(d5, d7, d9) | ratio < 0.5 | 0.356 |
| L4 and L5 more curved toward the image | — | satisfied for both |

Field: the paraxial image height f·tan 37° is 21.12 mm at s = 28, against a 135-format half-diagonal of 21.63 mm. The
patent's 74° is therefore a nominal full angle. Stage 2 should not treat it as an exact corner-field specification.

Provisional pupil and aperture numbers (depend on MD-03 and are not independent evidence):

- ~~The entrance pupil lies 0.423f behind r1.~~ **Superseded at Stage 2 (DR-05): 0.5833f (16.350 mm) behind r1.**
- The f/2.8 marginal ray height at the provisional stop is 0.2245f, i.e. a 6.29 mm stop semi-diameter at s = 28.
- The Fig. 1 tick inner ends sit at 0.207–0.222f, which is broadly consistent but only weak evidence.

Unit-focus preview (s = 28, 0.5 m object-to-film-plane):

- Object distance to r1: 424.30 mm.
- Last-gap extension: +1.847 mm (36.253 to 38.100 mm). The bisection root matches Newton's equation to 1e-14 mm.
- The root is unique in the physical range (81-segment scan).
- Magnification: −0.0659.

## 6. Correction and discrepancy register

| ID | Location | Old / raw | New / adopted | Evidence | Consequence |
|---|---|---|---|---|---|
| DR-01 | r5, description table (PDF p.4 col.3) vs claim 4 (col.4) | +0.563 | −0.563 | See below | Resolved. Raw value retained. Disclose in data header and analysis. |
| DR-02 | Release year | 1984 (secondary) | 1983 | Nikon *Thousand and One Nights* No. 8 (EN and JA) | Manufacturer value governs. |
| DR-03 | MFD foot equivalent, Nikonos-V manual text extraction | "1.5ft" / "!15ft!" | 0.5 m | Metric value is unambiguous (0.5 m = 1.64 ft) | Metric value used. Foot value treated as a print/extraction artifact. |
| DR-04 | Stop position, first-pass reading | 0.87 × d4 | 0.50 × d4 | Re-inspection of the 600 DPI crop | Construction-side correction before any approval. |

Evidence for DR-01:

- the claim 4 printing;
- the patent text calling L3 a "negative lens";
- Fig. 1, which draws L3's front surface concave toward the object;
- Example 2, which has r5 = −0.588;
- first-order reproduction: −0.563 gives f = 1.0011 and B.f. = 1.2948, while +0.563 gives f = 0.299 and B.f. = 0.215.

The printed description-table value remains a visible source mismatch (`CMP-R5-VARIANTS`). It is not called
reproduced. The supported resolution passes `S1-R5-RESOLUTION`.

## 7. Product correlation

Manufacturer facts:

- **Nikon NIKONOS-V Instruction Manual** (copy hosted by a third party; bytes not hashable from this sandbox): LW-Nikkor
  28mm f/2.8 has 5 elements in 5 groups and a 74° picture angle on land. The distance scale runs from 0.5 m to
  infinity. The aperture runs from f/2.8 to f/22. It takes 52 mm attachments, measures about 68.5 × 57 mm and weighs
  about 240 g. It is water-resistant and for on-land use only. Subject distances on Nikonos lenses are measured to the
  film plane.
- **Nikon *Thousand and One Nights* No. 8**: on-land-only Nikonos lens, 1983.

Metadata implications:

- mount `nikonos`;
- format `135-full-frame`;
- maker from the assignee: Nippon Kogaku K.K., i.e. Nikon.

Correlation, not confirmation:

- The patent example matches the manufacturer's construction count, aperture and picture angle.
- Secondary sources (Rørslett, a Japanese blog, a 35mmc reader comment) say the LW-Nikkor reuses the 5/5 Series E
  28mm optics.
- No primary source ties US 4,203,653 to either product. Whether production used Example 1 exactly is unknown.
- The long back focus (about 36 mm) suits an SLR, not the Nikonos body. That is consistent with reuse of an SLR design,
  but it is not proof.
- Status: `CORRELATED_NOT_CONFIRMED`.

## 8. Focus disposition

**`CONSTRAINED_RECONSTRUCTION`** (proposed). Stage 2 must implement and re-solve it.

| Item | Detail |
|---|---|
| Mechanism | Unit focus: one variable gap, the last air space. This is a disclosed assumption; neither the patent nor the manual states the mechanism. |
| Constraint | 0.5 m object-to-film-plane distance (manufacturer). |
| Unknowns | One scalar (the last-gap extension). It is uniquely determined. |
| Published states | Infinity only. |

## 9. Check summary

| Check | Status | Required at |
|---|---|---|
| S1-IDENTITY, S1-EXTRACT-COMPLETE, S1-TABLE-CROSSCHECK, S1-ABCD-CROSSCHECK | PASS | stage1 |
| S1-EFL, S1-BFD, S1-R5-RESOLUTION, S1-RETROFOCUS, S1-NOT-TELEPHOTO | PASS | stage1 |
| S1-ELEMENT-ROLES, S1-CONDITIONS, S1-PETZVAL | PASS | stage1 |
| S1-GLASS-AUDIT, S1-INDEX-REFERENCE, S1-STOP-EVIDENCE, S1-FOCUS-PREVIEW, S1-PRODUCT-FACTS | PASS | stage1 |
| S1-FNO-VERIFY | NOT_APPLICABLE (no published stop diameter; Stage 2 calibrates) | stage1 |
| S2-STOP-DECISION, S2-SEMI-DIAMETERS | NOT_RUN | stage2 |
| LV-BUILDLENS, LV-TYPECHECK, LV-RENDER-DIAGNOSTICS, LV-GLASS-RESOLUTION, LV-METADATA | NOT_RUN | integration |

## 10. Quantitative-claim map (seed for Stages 2–3)

| Future claim | Fact or result | Governing source |
|---|---|---|
| EFL / BFD / track | F-EFL-MM, F-BFD-MM, F-TRACK-MM | Adopted Example 1, MD-02, MD-04. Stage 2 must recompute from the `.data.ts`. |
| Retrofocus wording | F-BFD-OVER-EFL, S1-RETROFOCUS | Infinity state, r10 vertex reference. |
| Element roles and powers | `sourceModel.adopted.elements` | Standalone in air, not in situ. |
| Condition values | `sourceModel.adopted.conditions` | f = computed EFL. |
| Petzval | F-PETZVAL-SUM-NORM | Surface-by-surface form. |
| r5 correction | F-R5-CORRECTION, DR-01 | Patent p.4. |
| 5/5, 74°, f/2.8, 0.5 m, 1983 | `productCorrelation.manufacturerFacts` | NIK-NV-MAN, NIK-T8. |
| Glass labels | `sourceModel.adopted.glass` | Class wording per §4. |

Interpretive prose has not been written yet, so no manual prose or citation check applies at Stage 1.

## 11. Gate disposition and pending work

Gate: **READY_FOR_DATA**.

- The primary-source extraction is complete.
- Conventions are established.
- The first-order model reproduces the printed f and B.f. by two independent methods.
- The single source discrepancy has a supported resolution.
- Every required transformation has a defined plan.

Stage 2 tasks:

1. Finalize the STO position and check its clearance to the L3 front-surface sag.
2. Calibrate the stop semi-diameter to f/2.8 and label it as a calibration.
3. Derive semi-diameters under the current rim-slope, edge-thickness and gap-intrusion rules.
4. Confirm the scale.
5. Implement and re-solve the unit-focus law.
6. Write honest glass labels.
7. Disclose the r5 correction, the provisional stop and the focus assumption in the header, `focusDescription` and
   subtitle.

Later repository-only items: the LensVisualizer checks listed in §9, the corpus-canonical assignee display name, and
taxonomy validation.

`integrationStatus`: INTEGRATION_PENDING.


# Part B — Stage 2 data construction and CHAT_PREFLIGHT

## B1. Job, inputs and reference versions

Gate entering: READY_FOR_DATA (Stage 1). Gate earned here: see §B9.

Entry checks actually performed (recorded in `evidence.stage2Entry`, check `S2-ENTRY`):

- The six non-manifest Stage 1 artifacts match the Stage 1 manifest SHA-256 values. The uploads carried legacy names
  (`NikonLWNikkor28mmf28_audit.md` etc.); they were renamed to the canonical `<stem>.<role>.<ext>` form with identical bytes.
- All 14 controlling project references match the hashes in the Stage 1 manifest (no revision changes; no impact check needed).
- The Stage 1 verifier was replayed on the renamed files: exit 0, all stable result keys identical.
- Source re-inspection: PDF page 4 was re-rendered at 600 DPI. Every r, d, n and ν of both printings of Example 1 matches
  `rawPrescription`; the r5 discrepancy (description `0.563`, claim 4 `−0.563`) is confirmed from the raster.
- Glass re-run: an unseeded search of the opticalglass 2.0.2 vendor spreadsheets (Ohara 134, Hoya 238, Schott 122,
  Sumita 128, Hikari 144, CDGM 321) reproduced the Stage 1 nearest candidates for all five elements.

Tools: Python 3.12.3 (mandatory checks, standard library only); PyMuPDF 1.28.2 and opticalglass 2.0.2 (authoring
only); Prettier 3.9.9 and TypeScript 5.9.3 under Node 22 (optional real-tool checks). `lensTaxonomy.ts`, the
adding-a-lens guide, the integration handoff and the LensVisualizer repository were not available.

## B2. Construction summary (`NikonLWNikkor28mmf28.data.ts`)

| Item | Implemented value |
|---|---|
| Key / name | `nikon-lw-nikkor-28-f28` / `NIKON LW-NIKKOR 28mm f/2.8` |
| Maker / patent | Nikon; `US 4,203,653` (no kind code printed), Ikuo Mori, Nippon Kogaku K.K., 1980 |
| Mount / format | `nikonos` / `135-full-frame` (snapshot of `LENS_MOUNT_FORMAT_OPTIONS.md`) |
| Surfaces | 10 lens surfaces + flat air `STO` between surfaces 4 and 5; all spherical, `asph: {}` |
| Scale | s = 28.0 on every R and d (exact at three decimals) |
| Image plane | last d = 36.253 mm (computed paraxial BFD) |
| Focus | `var["10"] = [36.253, 38.1]`, `closeFocusM: 0.5`, unit focus, constrained reconstruction |
| Aperture | `nominalFno: 2.8`, STO sd 6.286 mm (calibration); `fstopSeries` 2.8–22, `maxFstop: 22` |
| Counts | 5 elements / 5 groups (patent and manufacturer agree) |
| Layout | `yScFill: 0.45`; other layout values default (unvalidated, LV-LAYOUT) |

The payload is literal-only and Prettier-clean with the project configuration.

## B3. Transformation ledger (Stage 2 entries; `evidence.modelingDecisions`)

| ID | Disposition |
|---|---|
| MD-03 | Closed. STO at 0.50 × d4 (4.214 / 4.214 mm). A fresh Fig. 1 measurement gives upper tick 0.522, lower tick ≈0.486 and principal-ray axis crossing 0.494 of d4, inside the recorded 0.48–0.53 range. |
| MD-04 | Closed. s = 28.0; modeled EFL 28.031 mm (+0.11 %, within source rounding). |
| MD-05 | Closed. Modeled SDs (mm): r1 15.25, r2 12.25, r3 7.6, r4 7.6, STO 6.286, r5 6.3, r6 6.3, r7 6.3, r8 7.4, r9 8.4, r10 8.8. |
| MD-06 | Closed. Unit focus implemented and re-solved (see §B5). |
| MD-08 | Image plane at computed paraxial BFD 36.253 mm vs printed B.f. × 28 = 36.26 mm (difference −0.007 mm, inside the 0.014 mm printed half-digit). |
| MD-09 | STO sd 6.286 mm = paraxial f/2.8 marginal height at the stop (INF). Calibration, not diaphragm evidence. |
| MD-10 | Code-first glass labels with honest qualifiers (§B4). |
| MD-11 | Metadata from the patent front page and the manufacturer (manufacturer governs marketed values). |
| MD-12 | `yScFill` 0.45 chosen without the production renderer. |

Semi-diameter derivation (MD-05):

- Rays were traced exactly in 3-D through spherical surfaces, aimed in two dimensions at points of the stop disc.
- **L3 rear / L4 front (6.3 mm) are bound by d6.** Both surfaces sag toward the 0.728 mm gap. With the 0.9 shared-band
  rule the radius limit is 6.30 mm; 6.3 uses 0.895 of the gap. The real f/2.8 axial marginal ray reaches 6.26 mm at r7
  (INF), so the margin there is about 0.04 mm. Fig. 1 draws the L3 rim meeting L4, consistent with a tight mount.
- **L2 (7.6 mm) is bound by edge thickness.** 7.6 mm leaves a 0.73 mm edge; the real f/2.8 marginal ray needs 7.04 mm.
- The other surfaces pass the transmitted envelope (rays clearing the stop, L2 and L3/L4) up to the real 135-format
  corner field (38.26°) with roughly 6–9 % clearance.
- Fig. 1 drawn half-heights (soft guide, scale ±5 %): L1 0.49f, L2 0.27f, L3/L4 ≈0.245f, L5 0.284f. The model's L2 and
  L5 agree within ~5 %; L1 is ~10 % larger (passes corner-field rays); L3/L4 are smaller (gap rule).

## B4. Glass labels

| Element | nd / νd | Label in `.data.ts` | Basis |
|---|---|---|---|
| L1 | 1.67025 / 57.5 | `670575 — lanthanum crown (nearest J-LAK02 HIKARI, Δnd −0.0003; catalog unresolved)` | Δnd 50× the printed half-digit |
| L2 | 1.60323 / 42.5 | `603425 — barium flint (K-BaSF5 SUMITA class; supplier unconfirmed)` | Δnd +0.00002, Δνd +0.08 |
| L3 | 1.7847 / 26.1 | `785261 — dense flint (SF56A SCHOTT / ZF51 CDGM class; supplier unconfirmed)` | Exact coordinates |
| L4 | 1.80411 / 46.6 | `804466 — lanthanum dense flint (J-LASF015 HIKARI / S-LAH65V OHARA class; supplier unconfirmed)` | Exact coordinates |
| L5 | 1.732 / 51.0 | `732510 — lanthanum crown (nearest TAC4 HOYA, Δnd +0.002; catalog unresolved)` | Δnd 4× the 3-decimal half-digit |

Every named candidate lies inside the runtime window (Δn ≤ 0.003, Δν ≤ 2), but naming is not a supplier claim. No
nC, nF, ng, dPgF or APD flag is stored (none published). `indexReference` is omitted (d-line, inferred at Stage 1).
Whether the runtime resolver selects a named candidate's Sellmeier data is an integration question (LV-GLASS-RESOLUTION).

## B5. Numerical and geometry results (recomputed from the parsed `.data.ts`)

First order (INF): EFL 28.0315 mm; BFD 36.2531 mm (authored 36.253); lens length 37.604 mm; track 73.857 mm;
BFD/EFL 1.293 (retrofocus); TL/EFL 2.635 (not telephoto). y-nu and ABCD agree to < 1e-10 mm.

Standalone element focal lengths (thick lens in air): L1 −38.95, L2 +26.13, L3 −15.83, L4 +31.86, L5 +33.64 mm.
Groups in air: L2–L5 +27.32; L1–L2 +35.55; L3–L5 +76.52 mm. Petzval sum 0.007576 mm⁻¹ (radius −132.0 mm;
× EFL = 0.2124, equal to the Stage 1 normalized value). Patent conditions (1)–(5) and the desirable conditions hold.

Stop: fraction 0.50 of d4; entrance pupil 16.350 mm behind r1, radius 5.0054 mm; f/2.8001 (calibration).
Stop-plane to L3-rim clearance 2.91 mm.

Geometry (identical at every focus state; unit focus changes only d10):

| Element | Material radius (mm) | Edge at rim (mm) | SD ratio |
|---|---|---|---|
| L1 | 15.25 | 5.09 | 1.24 |
| L2 | 7.6 | 0.73 | 1.00 |
| L3 | 6.3 | 4.76 | 1.00 |
| L4 | 7.4 | 0.80 | 1.17 |
| L5 | 8.8 | 0.80 | 1.05 |

Largest rim slope: r2, sd/|R| = 0.833 (56.4°) vs the 64.16° limit. Shared-band intrusion: d2 0.052, STO→r5 0.310,
d6 **0.895**, d8 0 (opening), r4→STO 0 — all ≤ 0.90.

Focus reconstruction (`S2-FOCUS-RECON`):

- Exact solve for 500 mm object-to-film-plane: object 424.296 mm before r1, d10 38.1004 mm, extension 1.8473 mm,
  magnification −0.0659. Newton's equation agrees to 2e-15 mm; one root in the physical range.
- Authored d10 38.1 (3-decimal rounding) corresponds to 500.085 mm, within the 0.115 mm rounding tolerance.
- Interpolated states (linear `var`, not published): T25 ≈ 1.78 m, T50 ≈ 0.92 m, T75 ≈ 0.64 m object-to-image.

Real-ray containment (`S2-CONTAINMENT`; chat tracer, d-line, 97 rays per bundle on 6 rings × 16 spokes):

| State | Axial f/2.8 bundle | Unvignetted stop-radius fraction |
|---|---|---|
| INF | 97/97 transmitted | 1.000 |
| T25, T50 | 97/97 | 1.000 |
| T75 | 97/97 | 0.99998 |
| CLOSE (0.5 m) | 81/97 (outer ring clipped at r7) | 0.9981 (pupil area 0.9963) |

- Chief rays at 0.6 × corner (22.95°), 37° and the format corner (38.26°) pass at every state.
- Sampled-ray transmission (ray count, not area-weighted): about 77 % at 0.6 corner, 54–56 % at 37°, 49–52 % at the corner.
- Off-axis clipping occurs at r3 (L2), r5/r6/r7 (L3/L4) and, near the corner, r1. All are air-bounded singlet surfaces;
  there are no cemented groups.

Plausibility: real-ray distortion at 37° is −2.29 %, consistent with Fig. 2C (about −2 %, graphical).

Loader evidence: strict literal loader PASS; 10 fixtures behave as expected (one valid accepted, nine malformed rejected).
Four deliberate mutations are detected: r5 sign flip, d7 + 0.01 mm, var/d mismatch, and r6 sd 6.5 (gap rule). The
TypeScript 5.9.3 compiler parser finds zero diagnostics, exactly import/const/export statements, and a payload identical
to the Python loader's. This is parser evidence only, not a `LensDataInput` type check.

## B6. Correction and discrepancy register (Stage 2 additions)

| ID | Location | Old | New | Evidence | Consequence |
|---|---|---|---|---|---|
| DR-05 | Stage 1 provisional entrance-pupil position (results `provisionalStop.entrancePupilFromR1`) | 0.4234f | 0.5833f (16.350 mm) | The reversed trace launched the stop ray with the wrong sign; three independent methods agree (forward chief-ray trace, reversed-system imaging of the stop, exact small-angle real ray) | Verifier corrected; no effect on the stop calibration, prescription or Stage 1 gate |
| DR-06 | Close-focus axial bundle | — | 0.19 % of stop radius trimmed at r7 at 0.5 m | `S2-CONTAINMENT` bisection | Disclosed in the data header; the gap rule is not relaxed to hide it |
| DR-07 | Image plane vs printed B.f. | 36.26 mm (printed × 28) | 36.253 mm (computed) | MD-08 | Within source rounding; comparison retained (`CMP-BFD-PRINTED`) |

DR-01 (r5) remains visible: the description-table printing is not reproduced (`CMP-R5-VARIANTS`); the supported
resolution passes (`S1-R5-RESOLUTION`) and is now also enforced on the parsed data (`S2-PRESCRIPTION-MATCH` and mutation 1).

## B7. Quantitative-claim map (for Stage 3)

| Claim | Fact / result | Governing source |
|---|---|---|
| EFL, BFD, track, lens length | F2-EFL-MM, F2-BFD-MM, F2-TRACK-MM, F2-LENS-LENGTH-MM | `.data.ts` a318b224…; INF; r1/r10 vertices |
| Retrofocus (not telephoto) | F2-BFD-OVER-EFL, F2-TL-OVER-EFL | INF |
| Element/group powers | F2-ELEMENT-FL-MM, F2-GROUP-FL-MM | Standalone in air, not in situ |
| Petzval | F2-PETZVAL | Surface-by-surface φ/(n n′) |
| Patent conditions | `implementedModel.conditions` | f = computed EFL |
| Stop / pupil / f-number | F2-STOP, F2-EP-FROM-R1-MM | Figure-inferred position; f/2.8 is a calibration |
| Focus travel, magnification, MFD | F2-FOCUS | Reconstruction; unit focus assumed |
| Distortion ≈ −2.3 % at 37° | F2-DISTORTION-37DEG-PCT | Chat real-ray trace; Fig. 2C graphical |
| SD limits / vignetting | F2-GEOMETRY-BINDING, `implementedModel.containment` | Modeled SDs |
| Glass labels | §B4, `sourceModel.adopted.glass` | Class wording; supplier unconfirmed |
| 5/5, f/2.8–22, 74°, 0.5 m, 1983, Nikonos | `productCorrelation.manufacturerFacts` | NIK-NV-MAN, NIK-T8 |
| r5 correction | F-R5-CORRECTION, DR-01 | Patent p.4 |

Strings in the data file covered by this map: `specs` (5/5, f ≈ 28.0 mm, F/2.8, 2ω ≈ 74°, all spherical), element `fl`
and `type`, `focusDescription` (36.25 → 38.10 mm, 0.5 m, film-plane reference), header notes (EFL 28.031, BFD 36.253,
STO 0.50 × d4, d6 intrusion 89.5 %, 0.2 % / 0.4 % close-focus trim). Manual check: the `role` strings are qualitative.
"Distortion-correcting member" for L2 restates the patent's own description; the L3 role ("Petzval and chromatic
balance") is interpretive and should be supported or softened in the Stage 3 analysis.

## B8. Check coverage

All Stage 1 checks were re-run (PASS; S1-FNO-VERIFY NOT_APPLICABLE).

Stage 2 mandatory CHAT_PREFLIGHT checks, all PASS:

- S2-ENTRY, S2-LOADER, S2-LOADER-FIXTURES, S2-STRUCTURE
- S2-PRESCRIPTION-MATCH, S2-MUTATION-DETECT, S2-ABCD-CROSSCHECK, S2-EFL, S2-BFD, S2-RETROFOCUS-TELEPHOTO
- S2-ELEMENTS, S2-PETZVAL, S2-CONDITIONS, S2-STOP-DECISION
- S2-GEOMETRY, S2-FOCUS-RECON, S2-CONTAINMENT
- S2-FIG2C-CONSISTENCY, S2-METADATA, S2-GLASS-LABELS

Optional real-tool checks, recorded at integration scope and PASS in the authoring run: S2-PRETTIER (Prettier 3.9.9,
project config) and S2-TS-AST-CROSSCHECK (TypeScript 5.9.3 parser).

LENSVISUALIZER checks are NOT_RUN at integration scope: LV-BUILDLENS, LV-TYPECHECK, LV-RENDER-DIAGNOSTICS,
LV-GLASS-RESOLUTION, LV-METADATA, LV-LAYOUT.

`S2-STRUCTURE` is a documented-structure preflight, not `validateLensData()`. `S2-GEOMETRY` and `S2-CONTAINMENT` use the
chat implementation of the published rules and are not production render-trim results.

## B9. Gate disposition and pending integration

Gate: **READY_FOR_ANALYSIS**, bound to the data, evidence, verifier and results hashes in the Stage 2 manifest.

- Every mandatory chat construction, numerical and geometry check passes.
- No substantive blocker remains.
- The disclosed limitations are the figure-inferred stop, the calibrated stop size, modeled SDs with a tight L3/L4
  aperture and 0.2 % close-focus axial trim, the assumed unit focus, class-level glass labels, the correlated (not
  confirmed) product link, and unvalidated layout.

Pending at integration:

- the six LV checks;
- the corpus-canonical assignee display name for Nippon Kogaku K.K.;
- the `lensTaxonomy.ts` ids;
- whether the production renderer frames the lens well at `yScFill` 0.45.

`integrationStatus`: INTEGRATION_PENDING.


# Part C — Stage 3 analysis authoring and consistency gate

Scope: Stage 3 construction-side authoring and `CHAT_PREFLIGHT` verification of `NikonLWNikkor28mmf28.analysis.md`
against the Stage 2 data revision. This is not an independent audit; Stage 4 performs the source-first review.

## C1. Entry gate and reference versions

Gate entering: READY_FOR_ANALYSIS (Stage 2, manifest SHA-256 `06e09c2d…1669` as uploaded). Recorded in
`evidence.stage3Entry`; verified by `S3-ENTRY`.

- All seven non-manifest uploads matched the Stage 2 `files[]` hashes and the `stage2Checkpoint.binds` values; the
  packaged results' `inputHashes` equalled `stage2Checkpoint.resultsInputHashes`. Uploads carried legacy
  `<stem>_<role>.<ext>` names and were renamed to the canonical form with identical bytes.
- All 14 controlling project references matched `manifest.references` (no revision, no impact check needed).
  `lensTaxonomy.ts`, the adding-a-lens guide, the integration handoff and `LENS_ANALYSIS_AUTHORING_PROMPT.md` remain
  unavailable.
- The Stage 2 verifier was replayed with real Prettier 3.9.9 (project `prettierrc.json`) and the TypeScript 5.9.3
  parser: exit 0, every results key except `environment` identical. Without the optional flags only `S2-PRETTIER`
  and `S2-TS-AST-CROSSCHECK` change (to `NOT_RUN`), as documented.
- **The `.data.ts` did not change during Stage 3** (SHA-256 `a318b224…aeec` before and after). No upstream data or
  source-model error was exposed; the Upstream Correction Rule was not triggered.

Tools: Python 3.12.3 (mandatory checks, standard library only); Prettier 3.9.9 and TypeScript 5.9.3 under Node
22.22.2 (optional real-tool checks). Web research used the chat web tools (no bytes hashable in the sandbox).

## C2. Sources added for the analysis

| ID | Source | Used for |
|---|---|---|
| NIK-T12 | Nikon, *Thousand and One Nights* No. 12 (NIKKOR-H Auto 2.8cm f/3.5) | Rear-group order convex–stop–concave–convex–convex; conventional front group = distortion-correcting convex + concave |
| NIK-T57 | Nikon, *Thousand and One Nights* No. 57 (AI Nikkor 28mm f/2.8S) | Series E 28mm f/2.8 existed (not sold in Japan), slightly greater distortion; AI-S 28/2.8 1981, 8/8, ~1 % barrel |
| GOOGLE-US3936153 | Google Patents record of US 3,936,153 (Ogura, Minolta) | Description of the patent's cited prior art |

NIK-T8, NIK-T8-JA, NIK-NV-MAN and the secondary sources were already recorded at Stage 1. All new sources are
listed in `evidence.sources`. The analysis's Sources section gives conventional references usable outside this chat.

## C3. New computation: third-order decomposition (`implementedModel.thirdOrder`)

Seidel sums in Welford form on the parsed `.data.ts` at infinity, d-line, f/2.8 marginal ray (entrance-pupil
radius 5.0054 mm) and a 37° paraxial chief ray (u = tan 37°). Colour uses the (nd − 1)/νd proxy for nF − nC; no
partial-dispersion data exist. Physical conversions and their independent validation (`S3-SEIDEL-VALIDATION`):

| Quantity | Seidel | Independent calculation | Method | Tolerance |
|---|---|---|---|---|
| Petzval sum (mm⁻¹) | 0.007576439 | 0.007576439 | Σ φ/(n n′) surface by surface | 1e-12 |
| Axial colour F−C (mm) | -0.18761 | -0.18757 | Two-wavelength paraxial BFD difference | 1 % |
| Lateral colour F−C at 37° (%) | -0.22628 | -0.22625 | Two-wavelength paraxial chief-ray heights | 1 % |
| Distortion at 37° (%) | -5.9487 | -5.9486 | Exact chief rays at 3° and 6°, extrapolated to third order | 2 % |
| Transverse SA at f/2.8 (mm) | -0.13383 | -0.13384 | Exact marginal rays at 0.1 and 0.2 aperture, extrapolated | 2 % |
| Tangential focus at 37° (mm) | -0.4526 | -0.4525 | Parabasal exact rays at 3° and 6°, extrapolated | 3 % |
| Sagittal focus at 37° (mm) | -1.2777 | -1.2777 | Parabasal exact rays at 3° and 6°, extrapolated | 3 % |

The sign conventions of each conversion were established by these comparisons, not assumed. The real-ray checks
use the exact paraxial image plane (the authored d10 = 36.253 mm is rounded by 8e-5 mm, which is not negligible
once small-field results are scaled to 37°). Coma (S_II) is computed and stored but not quoted in the analysis,
because its physical sign convention was not independently validated.

Exact-ray comparison: the real f/2.8 marginal ray misses the paraxial focus by -0.0066 mm
(third order -0.1338 mm); the real distortion at 37° is -2.288 %
(third order -5.949 %). Both differences are disclosed in the analysis as higher-order effects.

**Stop sensitivity (`S3-STOP-SENSITIVITY`).** The stop position is figure-inferred, so the stop-dependent terms
(distortion, astigmatism, lateral colour) were recomputed with the STO at 0.48 and 0.53 of d4, holding the object-space
entrance-pupil radius fixed. No per-element sign changes, and the L1/L2 distortion residual |L1 + L2|/|L1| stays
at or below 4.9 % (0.50: 2.1 %; 0.48: 4.9 %; 0.53: 2.0 %). The analysis states "within about 5 %".

**Resolution of the Stage 2 note (§B7).** The data `role` for L3 ("Petzval and chromatic balance of the rear group")
was flagged as interpretive. The decomposition now supports it: L3 has the largest Petzval term (−0.0348 mm⁻¹,
nearly cancelling L4 + L5 at +0.0341 mm⁻¹) and the dominant overcorrecting axial-colour term (+2.48 mm). The role
string needs no change.

## C4. Analysis structure and authoring decisions

- 201 lines, inside the spec's 100–200 band for a vintage all-spherical prime (one line over, accounted
  for by the conditional third-order table and verification table). H2 order follows LENS_ANALYSIS_SPEC; the Aspherical
  Surfaces section is omitted cleanly (`asph: {}`). Conditional sections: Aberration Correction Strategy, Conditional
  Expressions, Verification Summary, Design Heritage and Context, Sources.
- Every element first line carries nd, νd, the data's six-digit code and named candidates with vendor and the data `fl`.
- Statement types are separated in the prose: patent facts carry column citations; manufacturer facts cite the manual or
  Nikon's series; catalog results are labelled coordinate matches; Seidel values are labelled as a model decomposition;
  the heritage comparison with the NIKKOR-H is labelled as the analysis's own comparison.
- Formatted with Prettier 3.9.9 and the project configuration (`S3-PRETTIER-MD`, integration scope). Prettier changed only
  table padding and `*italic*` → `_italic_`. No spec mandates Markdown formatting; this anticipates a repository-wide
  `prettier --check`. The verifier collapses whitespace before matching so the gate is independent of column padding.

## C5. Authoring corrections made before the gate (analysis text only)

| # | Draft wording | Problem | Final wording |
|---|---|---|---|
| 1 | L3 "the only dense flint" | L4's class is lanthanum *dense flint*; internal contradiction | "the only high-dispersion glass; every other element has νd above 42" |
| 2 | L3 distortion **and astigmatism** "balanced chiefly by L4 and L5" | Astigmatism is balanced by L2 (−14.56) and L4 (−13.02); L5 is −1.21 | Distortion balanced by L4/L5; astigmatism by L2/L4 |
| 3 | Example 2 located at col. 4 | Second-embodiment table is in col. 3 (claim 5 in cols. 5–6) | col. 3 |
| 4 | L3 described as negative lens at col. 2 | The phrase "a negative lens L3" is in col. 1 | col. 1 |
| 5 | e-line indices "higher by about 0.004 to 0.006" | Stage 1 evidence statement, not executed in the verifier | Numbers removed ("noticeably higher"); the d-line coincidence (≤ 0.0002) is computed |
| 6 | "The design is an achromat" | Third-order axial colour is −0.19 mm F−C, not zero; claim unsupported | "Chromatic correction is of the ordinary primary kind…" |
| 7 | L1 rear surface "carries most of its power" | Rear surface has 2.4× the front's power with opposite sign (>100 % of net) | Ratio stated and registered |
| 8 | L4 Δνd "−0.02" for J-LASF015 | J-LASF015 Δνd is −0.002; −0.02 applies to S-LAH65V | Both candidates listed with their own residuals |
| 9 | L1 Δnd "−0.0003" | Residual −0.00025 lies exactly on the rounding boundary | −0.00025 |
| 10 | Series E distortion "somewhat greater"; condition (3) "compensates"; B.f. "is" an SLR requirement | Closer to source wording | "slightly"; "prevents"; "reflects" |

No discrepancy register entries (DR-*) were added: no source, data or result value changed.

## C6. Consistency gate (`CHAT_PREFLIGHT`, required at stage3)

| Check | Status | What it establishes |
|---|---|---|
| S3-SEIDEL-VALIDATION | PASS | Third-order decomposition agrees with seven independent calculations (§C3) |
| S3-STOP-SENSITIVITY | PASS | Stop-dependent interpretive claims hold across the Fig. 1 range |
| S3-CLAIMS | PASS | All 192 registered claims present verbatim and correct to their printed rounding or stated bound |
| S3-UNREGISTERED-NUMERALS | PASS | No numeral in the analysis body (excluding Sources) is unaccounted for |
| S3-SECTIONS | PASS | Spec section order; no asphere section for an all-spherical design |
| S3-METADATA | PASS | Metadata block = data patentNumber/patentAuthors/patentAssignees/patentYear, evidence PAT, job embodiment |
| S3-ELEMENT-LINES | PASS | Each element line = data nd/νd/glass code/candidates/fl; fl = recomputed focal length |
| S3-GLASS-TABLE | PASS | Glass table nd/νd/code = data |
| S3-DISCLOSURES | PASS | 18 required disclosures present (r5, scaling, image plane, stop, SDs, focus, correlation, APO, Seidel provenance, …) |
| S3-VOICE | PASS | No `vd`, APO token, superlatives, workflow vocabulary, first/second person or scores |
| S3-CITATIONS | PASS | Structural citation completeness (locators, listed tales, column range, manual pages) |
| S3-MUTATION-DETECT | PASS | Nine deliberate corruptions of the analysis are each detected |
| S3-ENTRY | PASS | Stage 2 checkpoint verified and replayed before authoring |

All Stage 1 and Stage 2 checks were re-run on the final inputs and pass (S1-FNO-VERIFY remains NOT_APPLICABLE).
Their observed values are unchanged from the Stage 2 package to within 1e-9 relative; the Stage 3 code only adds
results (`implementedModel.thirdOrder`, `analysis`, `F3-*` facts, `S3-*` checks, one limitation).
Optional real-tool checks at integration scope, PASS in this run: S2-PRETTIER, S3-PRETTIER-MD, S2-TS-AST-CROSSCHECK.
LENSVISUALIZER checks remain NOT_RUN at integration scope.

## C7. Manual review of interpretive prose and citations

Text matching cannot validate optical explanations, so each interpretive statement was checked by hand against its
source or computation:

| Statement | Support checked |
|---|---|
| Prior art added a positive member to the divergent group, or used two negative lenses | Patent cols. 1–2 (background; first lines of col. 2) |
| d4 is "the only convergent air space" affecting distortion; large d4 overcorrects astigmatism; condition (3) prevents it | Patent col. 2, paraphrased without strengthening |
| L2 "a kind of distortion correcting lens" | Patent col. 2, quoted; supported by F3 (L1 −10.9 % vs L2 +10.6 %) |
| Condition (4) for back focus; (5) for L2's distortion role; r3 < \|r4\| for sine condition; d6 for sagittal field; L4/L5 curvature for distortion | Patent col. 3 |
| Thick pre-diaphragm positive lens sometimes made of two plano-convex lenses | Patent col. 2 |
| Condition (1)/(2) limit explanations | Patent col. 2 |
| "Consistent with the oblique beam crossing L1 far from the axis" | Paraxial chief-ray height 12.32 mm at L1 vs 3.46 mm at L2 (F3-PARAXIAL-HEIGHTS); phrased as consistency, not causation |
| "For a given power, a higher index lowers an element's Petzval contribution" | Textbook thin-lens relation (φ/n); the specific numeric claim is computed |
| Nikkor-H rear-group order and front-group convention | NIK-T12; the Example 1 comparison is labelled as the analysis's own |
| Ogura US 3,936,153: five components/five lenses, BF > 0.9f, field > 64° | GOOGLE-US3936153 description; patent front page lists it under References Cited |
| Series E 28mm f/2.8 existence, not sold in Japan, slightly greater distortion; AI-S 1981, 8 elements, ~1 % barrel | NIK-T57 |
| LW-Nikkor on-land only, 1983; separate land/underwater 28 mm lenses | NIK-T8 (and NIK-T8-JA) |
| 5/5, 74°, f/2.8–f/22, 0.5 m, film-plane reference, focusing ring only | NIK-NV-MAN pp. 25, 34, 72 (Stage 1 extraction) |
| Product correlation not manufacturer-confirmed | `productCorrelation.confirmationLimit` = CORRELATED_NOT_CONFIRMED |

Copyright: Nikon and Google Patents material is paraphrased; the only quotations are short phrases from the US patent
(a public-domain government document). The manual is a third-party-hosted manufacturer document; its bytes could not
be hashed in this sandbox (recorded at Stage 1).

## C8. Quantitative-claim map

Generated from `results.json#analysis.claims` (executed by `S3-CLAIMS`). Kinds: **computed** = recalculated from the
parsed `.data.ts` (or Stage 1 source-model variants where stated); **data** = literal data-file value; **source** =
patent, manufacturer or cited-source value as recorded in `evidence.json`; **computed-row** = Seidel table row
regenerated and matched exactly. The governing data revision for every computed/data entry is `.data.ts`
`a318b224…aeec`. Element first-line values and glass-table nd/νd are additionally verified by `S3-ELEMENT-LINES` and
`S3-GLASS-TABLE`.

| Claim ID | Kind | Literal | Governing fact / source |
|---|---|---|---|
| SRC-APPNO | source | 918592 | PAT front page [21] |
| SRC-FILED | source | 1978 | PAT front page [22] |
| SRC-PRIORITY | source | 1977 | PAT front page [30] |
| SRC-GRANTED | source | 1980 | PAT front page [45]; data.patentYear |
| SRC-CLASS | source | 350 | PAT front page [51],[52] |
| SRC-CLAIMS | source | 5 | PAT front page (5 Claims) |
| SRC-EXAMPLES | source | 2 | PAT cols. 3-6 |
| SRC-APERTURE | source | 2.8 | PAT col. 1 Summary; evidence systemValues |
| SRC-ANGLE | source | 74 | PAT col. 1; evidence systemValues |
| SRC-BF-OBJECTIVE | source | 1.29 | PAT col. 1 Summary (text) |
| SRC-BF-OBJECTIVE-2 | source | 1.29 | PAT col. 1 Summary (text) |
| SRC-F1 | source | 1 | PAT col. 3; evidence systemValues |
| SRC-MAN-55 | source | 5 | NIK-NV-MAN p. 72 |
| SRC-MAN-APER | source | 22 | NIK-NV-MAN p. 72 |
| SRC-MAN-ANGLE | source | 74 | NIK-NV-MAN p. 72 |
| SRC-YEAR-1983 | source | 1983 | NIK-T8 / NIK-T8-JA |
| SRC-BF-PRINTED | source | 1.295 | PAT col. 3; evidence systemValues |
| SRC-MKT-FL | source | 28 | NIK-NV-MAN |
| SRC-R5-DESC | source | 0.563 | PAT col. 3 Example 1 row 5 |
| SRC-R5-CLAIM | source | -0.563 | PAT col. 4 claim 4 row 5 |
| SRC-R5-ADOPT | source | -0.563 | MD-02 (claim 4 value) |
| SRC-R5-REPRO | source | -0.563 | MD-02; CMP-R5-VARIANTS |
| SRC-R5-PRINTED-PLUS | source | 0.563 | PAT col. 3 Example 1 row 5 |
| SRC-AP-ID | source | 2.8 | PAT col. 3 |
| SRC-ANGLE-ID | source | 74 | PAT col. 3 / NIK-NV-MAN p. 72 |
| SRC-37-MODEL | source | 37 | PAT Fig. 1 |
| SRC-COND4-TEXT | source | 2 | PAT col. 3 condition (4) |
| SRC-74-HERITAGE | source | 74 | PAT col. 1 |
| SRC-T8-28 | source | 28 | NIK-T8 (UW-Nikkor 28mm / LW-Nikkor 28mm) |
| SRC-R5-EX2 | source | -0.588 | PAT col. 3 Example 2 row 5 |
| SRC-MFD | source | 0.5 | NIK-NV-MAN p. 34, 72 |
| SRC-MFD-2 | source | 0.5 | NIK-NV-MAN p. 25 |
| SRC-FIG2C | source | -2 | PAT Fig. 2C (graphical reading) |
| SRC-FIG2C-2 | source | -2 | PAT Fig. 2C (graphical reading) |
| SRC-NIKKORH | source | 1960 | NIK-T12 |
| SRC-OGURA-YEAR | source | 1976 | GOOGLE-US3936153 |
| SRC-OGURA-BF | source | 0.9 | GOOGLE-US3936153 (description) |
| SRC-OGURA-FIELD | source | 64 | GOOGLE-US3936153 (description) |
| SRC-GB-YEAR | source | 1963 | PAT front page [56] |
| SRC-AIS-YEAR | source | 1981 | NIK-T57 |
| SRC-AIS-ELEM | source | 8 | NIK-T57 |
| SRC-AIS-DIST | source | 1 | NIK-T57 |
| SRC-LW-1983 | source | 1983 | NIK-T8 |
| SRC-COND1 | source | 0.25 | PAT col. 1 condition (1) |
| SRC-COND2 | source | 2.5 | PAT col. 1 condition (2) |
| SRC-COND3 | source | 0.5 | PAT col. 1 condition (3) |
| SRC-COND4 | source | 2 | PAT col. 3 condition (4) |
| SRC-COND5 | source | 1.1 | PAT col. 3 condition (5) |
| SRC-COND6 | source | 1 | PAT col. 3 r3<\|r4\| |
| SRC-COND7 | source | 0.5 | PAT col. 3 d6 < 1/2 thickness |
| SRC-VS-F | source | 1 | PAT col. 3 |
| SRC-VS-BF | source | 1.295 | PAT col. 3 |
| CMP-VS-BF-SCALED | computed | 36.26 | printed B.f. x s |
| SRC-VS-AP | source | 2.8 | PAT col. 3 |
| CMP-PRINTED-BF-SCALED | computed | 36.26 | printed B.f. x s |
| SRC-PRINTED-BF-TIMES | source | 1.295 | PAT col. 3 |
| DAT-SCALE-28 | data | 28 | MD-04 scale |
| F2-EFL-ID | computed | 28.03 | F2-EFL-MM |
| F2-EFL-TABLE | computed | 28.03 | F2-EFL-MM |
| F2-EFL-MODEL | computed | 28.03 | F2-EFL-MM |
| F2-EFL-VS | computed | 28.03 | F2-EFL-MM |
| F2-EFL-NORM-VS | computed | 1.0011 | F-EFL-NORM |
| F2-EFL-RESID | computed | 0.11 | F2-EFL-MM vs f = 1.0 |
| F2-EFL-FIELD | computed | 28.03 | F2-EFL-MM |
| F2-BFD-TABLE | computed | 36.25 | F2-BFD-MM |
| F2-BFD-RATIO | computed | 1.293 | F2-BFD-OVER-EFL |
| F2-BFD-RATIO-2 | computed | 1.293 | F2-BFD-OVER-EFL |
| F3-HPRIME | computed | 8.22 | F3-H-PRIME-BEYOND-R10-MM |
| F2-LL | computed | 37.6 | F2-LENS-LENGTH-MM |
| F2-TRACK | computed | 73.86 | F2-TRACK-MM |
| F2-EP | computed | 16.35 | F2-EP-FROM-R1-MM |
| F2-TLEFL | computed | 2.63 | F2-TL-OVER-EFL |
| F2-FL-L1-ARCH | computed | -38.95 | F2-ELEMENT-FL-MM |
| F2-GRP-L2L5 | computed | 27.32 | F2-GROUP-FL-MM |
| DAT-D2 | data | 16.13 | data surface 2 d |
| F3-YM-R1 | computed | 5.01 | F3-PARAXIAL-HEIGHTS |
| F3-YM-R3 | computed | 6.97 | F3-PARAXIAL-HEIGHTS |
| F3-YM-RATIO | computed | 39 | F3-PARAXIAL-HEIGHTS |
| F3-YC-R1 | computed | 12.32 | F3-PARAXIAL-HEIGHTS |
| F3-YC-R3 | computed | 3.46 | F3-PARAXIAL-HEIGHTS |
| SRC-37-PARAX | source | 37 | PAT Fig. 1 principal rays of 37° |
| DAT-SCALE | data | 28 | MD-04 |
| SRC-F1-MODEL | source | 1 | PAT col. 3 |
| DAT-IMG | data | 36.253 | data surface 10 d (= F2-BFD-MM rounded) |
| DAT-IMG-BFD | computed | 36.253 | F2-BFD-MM |
| DAT-STOP-FRAC | data | 0.5 | MD-03; data STO split |
| SRC-STOP-RANGE-LO | source | 0.49 | evidence MD-03 Fig. 1 re-measurement |
| SRC-STOP-RANGE-HI | source | 0.52 | evidence MD-03 Fig. 1 re-measurement |
| DAT-STO-SD | data | 6.286 | data STO sd; F2-STOP calibration |
| F2-SURFPOW-L1 | computed | 2.4 | S3 surface powers |
| DAT-R2 | data | 14.7 | data surface 2 R |
| F2-C4 | computed | 1.389 | implementedModel.conditions |
| S3-L1-DIST | computed | -10.9 | F3-SEIDEL-ELEMENTS |
| S3-L1-PTZ | computed | -0.016 | F3-SEIDEL-ELEMENTS |
| S3-L1-SA | computed | 0.46 | F3-SEIDEL-ELEMENTS |
| DAT-SD-L1 | data | 15.25 | data surface 1 sd |
| S2-C5 | computed | 0.932 | implementedModel.conditions |
| S3-L2-DIST | computed | 10.6 | F3-SEIDEL-ELEMENTS |
| S3-L1-DIST-2 | computed | -10.9 | F3-SEIDEL-ELEMENTS |
| S3-L1L2-CANCEL | computed | 5 | S3-STOP-SENSITIVITY (max \|L1+L2\|/\|L1\| over 0.48, 0.50, 0.53) |
| S3-L2-LAT | computed | 0.52 | F3-SEIDEL-ELEMENTS |
| S3-L1-LAT | computed | -0.63 | F3-SEIDEL-ELEMENTS |
| S2-C6 | computed | 0.486 | implementedModel.conditions |
| S2-C3 | computed | 0.312 | implementedModel.conditions |
| DAT-SD-L2 | data | 7.6 | data surface 3/4 sd |
| S2-EDGE-L2 | computed | 0.73 | S2 geometry |
| S3-VD-OTHERS | computed | 42 | data elements νd (min excluding L3) > 42 |
| S2-CLEAR-L3 | computed | 2.91 | F2-STOP clearanceStopToL3RimMm |
| S3-L3-PTZ | computed | -0.0348 | F3-SEIDEL-ELEMENTS |
| S3-L45-PTZ | computed | 0.0341 | F3-SEIDEL-ELEMENTS |
| S3-L3-AX | computed | 2.48 | F3-SEIDEL-ELEMENTS |
| S3-AX-TOT | computed | -0.19 | F3-SEIDEL-TOTALS |
| S3-L3-DIST | computed | 21.7 | F3-SEIDEL-ELEMENTS |
| DAT-R5 | data | -15.76 | data surface 5 R |
| DAT-R6 | data | 63.64 | data surface 6 R |
| DAT-D6 | data | 0.728 | data surface 6 d |
| S2-C7 | computed | 0.356 | implementedModel.conditions |
| DAT-R8 | data | -18.12 | data surface 8 R |
| DAT-R7 | data | -58.74 | data surface 7 R |
| S3-L4-DIST | computed | -16.9 | F3-SEIDEL-ELEMENTS |
| DAT-SD-L3L4 | data | 6.3 | data surfaces 6/7 sd |
| S2-D6-INTRUSION | computed | 89.5 | S2 geometry shared-band intrusion |
| SRC-CLOSE-05 | source | 0.5 | NIK-NV-MAN |
| S2-CLOSE-TRIM | computed | 0.2 | S2-CONTAINMENT CLOSE unvignetted fraction |
| S3-L5-DIST | computed | -10.5 | F3-SEIDEL-ELEMENTS |
| S3-L5-SA | computed | -0.7 | F3-SEIDEL-ELEMENTS |
| S3-L2-SA | computed | -0.73 | F3-SEIDEL-ELEMENTS |
| S1-INDEXREF | computed | 0.0002 | S1-INDEX-REFERENCE (max \|Δnd\| L3, L4) |
| GL-L1-DND | computed | -0.00025 | sourceModel.adopted.glass |
| GL-L1-DVD | computed | -0.15 | sourceModel.adopted.glass |
| GL-L2-DND | computed | 2e-05 | sourceModel.adopted.glass |
| GL-L2-DVD | computed | 0.08 | sourceModel.adopted.glass |
| GL-L3-DND | computed | 0 | sourceModel.adopted.glass (SF56A; ZF51 equal) |
| GL-L3-DVD | computed | -0.02 | sourceModel.adopted.glass |
| GL-L4-DND | computed | -0.0001 | sourceModel.adopted.glass |
| GL-L4-DVD | computed | -0.002 | sourceModel.adopted.glass |
| GL-L4B-DND | computed | -0.0001 | sourceModel.adopted.glass candidates |
| GL-L4B-DVD | computed | -0.02 | sourceModel.adopted.glass candidates |
| GL-L5-DND | computed | 0.002 | sourceModel.adopted.glass |
| GL-L5-DVD | computed | 0.05 | sourceModel.adopted.glass |
| GL-POS-MIN-N | computed | 1.6 | data elements nd (min over positive elements) |
| GL-REAR-MIN-N | computed | 1.73 | data L4/L5 nd (min) > 1.73 |
| GL-L5-RESID | computed | 0.002 | sourceModel.adopted.glass |
| GL-L5-HALFDIGIT | computed | — | residual / 0.0005 rounds to 4 ('four') |
| F2-OBJ-R1 | computed | 424.3 | F2-FOCUS exactSolve |
| DAT-D10-INF | data | 36.253 | data var['10'][0] |
| DAT-D10-CLOSE | data | 38.1 | data var['10'][1] |
| F2-D10-CLOSE | computed | 38.1 | F2-FOCUS exactSolve d10 |
| F2-MAG | computed | -0.0659 | F2-FOCUS exactSolve |
| F3-RATIO | computed | 15.2 | F3-CLOSE-RATIO |
| F2-EXT | computed | 1.847 | F2-FOCUS exactSolve |
| SRC-MFD-0.5-TABLE | source | 0.5 | NIK-NV-MAN |
| SRC-MFD-MANUAL | source | 0.5 | NIK-NV-MAN |
| S3-TABLE-L1 | computed-row | — | F3-SEIDEL-ELEMENTS |
| S3-TABLE-L2 | computed-row | — | F3-SEIDEL-ELEMENTS |
| S3-TABLE-L3 | computed-row | — | F3-SEIDEL-ELEMENTS |
| S3-TABLE-L4 | computed-row | — | F3-SEIDEL-ELEMENTS |
| S3-TABLE-L5 | computed-row | — | F3-SEIDEL-ELEMENTS |
| S3-TABLE-TOTAL | computed-row | — | F3-SEIDEL-TOTALS |
| SRC-SEIDEL-37 | source | 37 | PAT Fig. 1 |
| SRC-SEIDEL-HDR-37a | source | 37 | PAT Fig. 1 |
| SRC-SEIDEL-HDR-37b | source | 37 | PAT Fig. 1 |
| SRC-SEIDEL-HDR-37c | source | 37 | PAT Fig. 1 |
| S3-ASTIG-RATIO | computed | — | min(\|L2\|,\|L3\|,\|L4\|)/\|total\| >= 10 |
| S3-PTZ-SUM | computed | 0.0076 | F2-PETZVAL |
| S3-PTZ-R | computed | -132 | F2-PETZVAL radiusMm |
| S3-PTZ-RF | computed | 4.7 | F2-PETZVAL / F2-EFL |
| S3-SA-REAL | computed | -0.007 | S3-SEIDEL-VALIDATION realRayFullApertureMm |
| S3-DIST-TOT | computed | -5.9 | F3-SEIDEL-TOTALS |
| S2-DIST37 | computed | -2.29 | F2-DISTORTION-37DEG-PCT |
| SRC-STOP-SENS-48 | source | 0.48 | STOP_FRACTION_RANGE (Stage 1 recorded Fig. 1 range) |
| SRC-STOP-SENS-53 | source | 0.53 | STOP_FRACTION_RANGE |
| S2-C1-T | computed | 0.3007 | implementedModel.conditions |
| S2-C2-T | computed | 1.914 | implementedModel.conditions |
| S2-C3-T | computed | 0.312 | implementedModel.conditions |
| S2-C4-T | computed | 1.389 | implementedModel.conditions |
| S2-C5-T | computed | 0.932 | implementedModel.conditions |
| S2-C6-T | computed | 0.486 | implementedModel.conditions |
| S2-C7-T | computed | 0.356 | implementedModel.conditions |
| S2-BFD-DIFF | computed | -0.007 | CMP-BFD-PRINTED |
| S2-BFD-VS | computed | 36.253 | F2-BFD-MM (= authored image distance) |
| S2-FNO | computed | 2.8 | F2-STOP fno (calibration) |
| S2-DIST37-VS | computed | -2.29 | F2-DISTORTION-37DEG-PCT |
| SRC-VS-37 | source | 37 | PAT Fig. 1/2C |
| F-FIELD-PARAX | computed | 21.12 | paraxial F*tan 37 deg (parsed model) |
| F-HALF-DIAG | computed | 21.63 | 135 format 36 x 24 mm |
| F2-CORNER | computed | 38.26 | F2-FORMAT-CORNER-FIELD-DEG |
| SRC-74-NOMINAL | source | 74 | PAT col. 3 |
| S1-R5-F | computed | 1.0011 | CMP-R5-VARIANTS claim4Raw |
| S1-R5-BF | computed | 1.2948 | CMP-R5-VARIANTS claim4Raw |
| S1-R5-F-DESC | computed | 0.299 | CMP-R5-VARIANTS descriptionRaw |
| S1-R5-BF-DESC | computed | 0.215 | CMP-R5-VARIANTS descriptionRaw |

Structured metadata and data-file strings carried from Stage 2 (§B7) are unchanged and remain covered by
`S2-METADATA`, `S2-ELEMENTS` and `S2-GLASS-LABELS`.

## C9. Gate disposition and pending integration

Gate: **READY_FOR_AUDIT**, bound to the final hashes in the Stage 3 manifest (`stage3Checkpoint`).

- The analysis agrees with the unchanged Stage 2 data revision and with executed results; every mandatory Stage 1–3
  chat check passes; the clean-extraction replay is recorded in the manifest.
- Disclosed limitations carried forward: figure-inferred stop and calibrated stop size; modeled SDs (tight L3/L4
  aperture, 0.2 % close-focus axial trim); assumed unit focus; class-level glass labels with no spectral data;
  correlated (not confirmed) product link; unvalidated layout. New: Seidel terms are a model decomposition whose
  stop-dependent columns depend on the inferred stop and whose colour columns use the νd proxy.

Pending at integration: LV-BUILDLENS, LV-TYPECHECK, LV-RENDER-DIAGNOSTICS, LV-GLASS-RESOLUTION, LV-METADATA, LV-LAYOUT;
the corpus-canonical assignee display name for Nippon Kogaku K.K.; `lensTaxonomy.ts` ids; analysis rendering in the
production viewer (GFM tables, `mm⁻¹`, Unicode minus).

`integrationStatus`: INTEGRATION_PENDING.

# Part D — Stage 4 source-first independent audit

Reviewer: Stage 4 auditor, 2026-10-01. Scope: Stage 4 only (no batch integration, metadata generation, corpus tests,
build, Git or publication). This part supersedes the gate statements in A11, B9 and C9; Parts A–C are retained unchanged
as the construction record.

## D1. Inputs, identity and reference versions

- Stage 3 dossier received as nine uploads. Upload renaming had replaced the `.` after the stem with `_`
  (`NikonLWNikkor28mmf28_data.ts`, …). Every byte string matched the Stage 3 manifest (SHA-256 and size, eight payload files);
  canonical names were restored without content change. Stage 3 manifest SHA-256
  `b6da2428c9b84fe52958a6254c88ffa0d7c8a6c2dc53909cede86648707f32bd`.
- The Stage 3 verifier was replayed on the restored set before reconciliation: exit 0, no mandatory failures.
- Controlling references (`/mnt/project`) were re-hashed and are byte-identical to the hashes recorded at Stage 3; no
  impact check was needed. The taxonomy source, authoring guide and integration handoff named by the protocol are not
  present in the project and remain unavailable references.

## D2. Exposure and independence

- Visible before the baseline: the job card and the candidate `.data.ts` (displayed automatically in the chat context,
  including its header conclusions on the r5 sign, the 0.50 × d4 stop, SDs and the 38.1 mm close-focus spacing).
  Project memory contained general methodology only.
- Not opened until the baseline was frozen: analysis, audit, evidence, results, verifier, manifest.
- The independence is procedural (fresh extraction, fresh code, fresh catalog search), not blindness. The reviewer's
  adopted stop fraction (0.50) equals the visible candidate value; the reviewer's own Fig. 1 measurements are recorded so
  that the choice can be inspected.
- Corrections S4-C1 and S4-C2 were made and validated by the same reviewer; their validation is reproducible from the
  consolidated verifier but is not a second independent review.

## D3. Fresh extraction and conventions

- Source pages carry no text layer; values were read from the native 2320 × 3408 px page scans (~281 dpi), cropped
  and enlarged, without OCR. Locators are in `evidence.independentPass.freshExtraction`.
- The reviewer's re-entry of r, d, n, ν, f, F-number, 2ω and B.f. agrees digit-for-digit with the author's
  transcription of both printings (description table, col. 3; claim 4, col. 4).
- r5 printing conflict confirmed: description +0.563 gives f = 0.2990, B.f. = 0.2154; claim 4 −0.563 gives
  f = 1.00112, B.f. = 1.29475 (printed 1.295). Fig. 1 draws L3 concave to the object. The claim-4 sign is supported
  (`S4-R5-SIGN`).
- Fig. 1 (drawing sheet) pixel measurements, as fractions of d4 from r4: upper iris tick 0.527, lower tick 0.488,
  37° principal-ray axis crossing 0.49. Adopted 0.50.
- d-line inferred; scale s = 28.0; MFD referenced to the film plane (Nikonos-V manual p. 25).

## D4. Frozen independent baseline

Baseline fingerprint (canonical JSON, SHA-256): `188da10ae8478e5b95f09f088011ad8462c26effb3a4c07d15cea49160750647`, frozen before any
candidate artifact other than the visible `.data.ts` was opened. Content is retained verbatim in
`evidence.independentPass.independentBaseline` and returned under `results.independentBaseline`. The pure-Python
replay inside the consolidated verifier reproduces it (`S4-BASELINE-REPLAY`).

| Quantity | Independent result |
|---|---|
| EFL / BFD (y–nu = ABCD) | 28.0315 / 36.2531 mm (printed B.f. × 28 = 36.26) |
| BFD/EFL; TL/EFL | 1.2933 (retrofocus); 2.6348 (not telephoto) |
| Element f (thick, in air) | −38.95, +26.13, −15.83, +31.86, +33.64 mm |
| Conditions (1)–(5) | 0.3007, 1.914, 0.312, 1.389, 0.932 — all satisfied; r3/\|r4\| 0.486; d6/min 0.356 |
| Petzval sum | 0.007576 mm⁻¹ |
| Close focus (0.5 m from film plane, unit focus) | d10 38.1004 mm; extension 1.8473 mm; m = -0.0659 |
| Exact distortion 26° / 37° | -1.82 % / -2.29 % |
| 135-format corner half-field | 38.26° |
| Third-order totals (TSA, zT−zS, Petzval, dist., ax. colour, lat. colour) | -0.1338, +0.8251, +0.007576, -5.949, -0.1876, -0.2263 |

Unseeded glass search (all 1,087 glasses in the six redistributed catalogs): L1 J-LAK02 (HIKARI, distance 0.0030,
Equivalent); L2 K-BaSF5 (SUMITA, 0.0016, Close); L3 SF56A (SCHOTT) / ZF51 (CDGM), 0.0005, Exact; L4 J-LASF015
(HIKARI, 0.0001) / S-LAH65V (OHARA, 0.0004), Exact; L5 TAC4 (HOYA, 0.0023, Close; Δnd +0.002).

## D5. Reconciliation of the four views

| View | Result |
|---|---|
| Raw patent vs baseline | identical values; r5 sign conflict resolved to claim 4 |
| Baseline vs `.data.ts` | every R, d, nd, νd and the STO split equal to ≤ 1e-14 mm (`S4-DATA-VS-FRESH-SOURCE`); EFL 28.0315 mm, image-plane d 36.253 vs BFD 36.2531 mm; STO sd implies f/2.8001 (calibration) |
| `.data.ts` metadata | 5/5, closeFocusM 0.5, maxFstop 22, mounts, patent fields agree with manufacturer and front page (`S4-PRODUCT-METADATA`) |
| Analysis | all registered numerical claims re-derived; 36 Seidel table cells reproduced at printed precision by the reviewer's own decomposition (`S4-SEIDEL-INDEPENDENT`); two statements corrected (D8) |

Sign anchors for the third-order table: the reviewer's decomposition reproduces every magnitude; distortion is anchored
to the exact chief ray (barrel negative) and axial colour to two-wavelength paraxial traces
(BFD(F) − BFD(C) = −0.188 mm). The astigmatism and lateral-colour orientations follow the same chief-ray convention.

## D6. Geometry and containment (stored SDs)

- Rim slopes ≤ 56.4° (r2); edge thickness minimum 0.734 mm (L2) ≥ 0.5 mm
  floor; SD ratios ≤ 1.25; shared-band intrusion d6 0.895 of the gap (limit 0.90), all other gaps
  ≤ 0.50 (`S4-GEOMETRY`).
- STO plane to r5 rim (at r5's own sd 6.3 mm): 2.9004 mm; r4 rim to STO 4.826 mm.
- 3-D exact-ray sampling (reviewer code): the f/2.8 axial bundle is unvignetted at infinity (r7 margin 0.6 %); at the
  reconstructed 0.5 m state the r7 rim passes 0.9981 of the stop radius (0.4 % of
  pupil area). Geometric transmitted pupil area at full aperture: 0.6 × corner field 0.59,
  37° 0.38, 135 corner 0.35. Clipping is
  shared by r3, r5, r6/r7 and r1. Non-limiting surfaces (r1, r2, r8–r10) clear the transmitted corner bundle by
  7.0–8.3 %, confirming the header's "~6–9 %".
- The strong full-aperture corner vignetting follows from SDs that are fixed by the d6 gap rule and the L2 edge floor;
  it is a modeled consequence, not a published illumination value. No file claims an illumination figure.

## D7. Product correlation and citations

Manufacturer sources re-read: Nikonos-V instruction manual pp. 25, 34, 72 (5/5, 74°, 0.5 m (printed "1.5 ft",
0.457 m) to ∞, f/2.8–f/22, 52 mm); Nikon *Thousand and One Nights* No. 8 (LW-Nikkor on-land, 1983 — governs over
third-party 1984 dates). No. 12 supports the Wakimoto rear-group and conventional-front-group statements. No. 57
supports the Series E 28mm f/2.8 statements and the AI 28mm f/2.8S (1981) 8/8, convex-front, ~1 % barrel description.
The US 3,936,153 record supports Minolta, five components/five lenses, SLR use and back focus > 0.9f; its ">64°"
field statement was not re-read. The analysis already discloses the SLR framing of the patent and the secondary-source
Series E → LW-Nikkor chain, and does not claim manufacturer confirmation.

## D8. Correction register (Stage 4)

| ID | File / location | Old | New | Independent evidence | Downstream |
|---|---|---|---|---|---|
| S4-C1 | analysis.md, L3 section | "Its front rim lies 2.91 mm behind the stop plane." | "… 2.90 mm …" | STO d 4.214 − \|sag(r5 = −15.764 mm, h = 6.3 mm)\| 1.3136 = 2.9004 mm. The author evaluated the sag at min(STO sd, r5 sd) = 6.286 mm (2.9065 mm), which is not the rim. | verify.py `clear5` uses r5's sd; claim S2-CLEAR-L3 now "2.90"; fact F2-STOP |
| S4-C2 | analysis.md, Aberration Correction Strategy | "An exact marginal ray at full aperture misses the paraxial focus by only −0.007 mm" | "An exact ray through the rim of the modeled f/2.8 stop meets the paraxial image plane −0.016 mm from the axis" | The −0.0066 mm value launched the real ray at the paraxial entrance-pupil radius; because of pupil aberration that ray crosses the STO inside its rim. The ray through the STO rim (the model's f/2.8 marginal ray) gives -0.0162 mm transverse (-0.0915 mm longitudinal). The conclusion (higher orders cancel ~88 % of the third-order −0.134 mm) stands. | verify.py adds `realRayStopRimMm`; claim S3-SA-REAL re-registered |

The `.data.ts` required no change (Prettier 3.9.9 `--check` with the project configuration passes; bytes identical to
Stage 3). Rows S2-CLEAR-L3 and S3-SA-REAL of the C8 claim map are superseded by this register. No upstream (source,
model) value changed, so no Stage 2 gate was reopened; the Stage 3 analysis gate was rerun on the corrected text.

## D9. Manual review of interpretive prose

Checked against the patent text: L2 as the distortion-correcting member (col. 2), d4 as the only convergent air space
affecting distortion, condition (3) countering astigmatic overcorrection, the sine-condition and sagittal-field
preferences (col. 3), and the image-side curvature of L4/L5. The element-role statements tied to the decomposition
(L1/L2 distortion cancellation, L3 Petzval and axial-colour dominance) match the reviewer's numbers. Voice is third
person, νd notation is used, no APO/secondary-spectrum claim is made, and the all-spherical design correctly omits the
Aspherical Surfaces section.

## D10. Checks, gate and pending integration

- Consolidated verifier: stage 4 detected; 68 PASS,
  1 NOT_APPLICABLE, 0 FAIL; the six LENSVISUALIZER checks
  remain NOT_RUN at integration scope. Real Prettier (data and analysis) and the TypeScript parser cross-check passed
  in the chat environment (integration-scope, not a LensDataInput type check).
- Clean replay: PASS — ZIP reopened (9 root members, CRC clean), extracted to a fresh directory, all manifest hashes and both originals byte-identical; verify.py replayed there from an unrelated working directory: exit 0, stage 4, no mandatory failures, stable results (all keys except environment; integration-scope optional-tool checks excluded because the tools are not passed on replay) equal to the packaged results.json.
- Gate: **READY_FOR_BATCH**. integrationStatus: INTEGRATION_PENDING.
- Pending LensVisualizer checks: `buildLens()`/`validateLensData()`, typecheck against the real `LensDataInput`,
  render diagnostics (trim ≤ 0.25 mm, especially at r6/r7), runtime glass resolution of the five labels, metadata
  generation/organization, and visual layout (`yScFill` 0.45).

## 2026-10-05 — Semi-diameter figure pass

Later than Parts A–D; where this section and an earlier part give different semi-diameters, rim clearances or glass
labels, this section describes the current files. The prescription (R, d, nd, νd), stop position, STO semi-diameter
and focus model are unchanged: paraxial EFL 28.0315 mm and BFD 36.2531 mm are identical before and after.

**Figure used.** US 4,203,653, drawing sheet (PDF page 2), Fig. 1, rendered at 300 dpi (native scan ≈ 281 × 291 ppi).
The optical axis lies at page row 1214. Vertex crossings on the axis: r1 at column 550, r3 at 931, r4 at 998, r5 at
1179, r10 at 1315.

**Scale.** r1 to r10 is 765 px for 37.604 mm, giving 0.0492 mm/px. Cross-check in the transverse direction: the drawn
f/2.8 axial ray reaches L2 at 147 px, 7.23 mm at this scale, against 7.24 mm for the exact marginal ray. The figure is
not axially uniform (r1–r3 is drawn 3.5 % long, r5–r10 21 % short), so rim heights are trusted more than edge
thicknesses. Heights were read above and below the axis; flanges, leader lines, labels and rays were excluded.

| Surface | Before (mm) | Fig. 1 (px above / below → mm) | After (mm) | Basis |
|---|---|---|---|---|
| r1 (L1 front) | 15.25 | 292 / 294 → 14.4 | 14.4 | Front arc runs to the outer height of L1; figure followed |
| r2 (L1 rear) | 12.25 | 211–217 / 207 → 10.2–10.7 (inside the mounting flange) | 11.8 | Figure not followed in full: below 11.8 mm the engine's field estimate drops under the 38.3° format corner (38.1° at 11.6 mm), and below 11.6 mm the meridional corner bundle narrows (0.69 → 0.47 of the axial pupil width at 10.4 mm) |
| r3, r4 (L2) | 7.6 | 163 / 161 → 8.0 | 7.9 | Figure followed; edge thickness 0.58 mm (0.73 mm before) |
| STO | 6.286 | — | 6.286 | Calibrated value, not changed |
| r5 (L3 front) | 6.3 | 149–150 / 149 → 7.3–7.4 | 7.3 | Figure followed; L3 outer height as drawn |
| r6 (L3 rear), r7 (L4 front) | 6.3 | drawn meeting at the common rim, ≈ 149 px → 7.3 | 6.3 | Not movable: with the tabulated radii the two surfaces touch at 6.67 mm, and the gap-intrusion rule (0.655 mm of the 0.728 mm gap) is exceeded from 6.33 mm upward |
| r8 (L4 rear) | 7.4 | 148–149 / 149 → 7.3 | 7.3 | Figure followed; L3 and L4 share one outer height as drawn |
| r9 (L5 front) | 8.4 | 171 / 173 → 8.4–8.5 | 8.5 | Figure followed |
| r10 (L5 rear) | 8.8 | 171 / 173 → 8.4–8.5 | 8.5 | Figure followed; front and rear coherent |

**Results on the final set.**

- The repository surface validator reports no errors. The d6 shared band is unchanged at 89.5 % of the gap.
- Image-circle check: not undersized. Traced field coverage: 100 %, chief ray reaches 21.65 mm at 38.3°, clear, the
  same as before. The exact chief ray to the corner needs 11.33 mm at r1 and 9.32 mm at r2; no surface blocks it.
- Engine half-field estimate 38.54° (39.59° before, limited by r2 in both cases); still above the 38.28° corner.
- Meridional bundle width as a fraction of the axial width, before → after: 20° 0.87 → 0.89, 30° 0.79 → 0.82,
  37° 0.71 → 0.74, corner 0.69 → 0.69. The gain comes from the larger L2; no field loses light.
- Closest-focus state (0.5 m): same flags as infinity; the corner chief ray needs 11.03 mm at r1 and 9.12 mm at r2.
- The local render at infinity and at 0.5 m shows L1 lower relative to the rear group, L3 and L4 with a common
  outer height, and L5 slightly taller than both, as in Fig. 1.

**Open limitations.**

- The exact-ray f/2.8 marginal ray, launched at the paraxial entrance-pupil radius 5.006 mm, crosses the stop plane at
  6.46 mm and reaches 6.44 mm at r6 and 6.45 mm at r7, above the 6.3 mm rims. About 2 % of the marginal ray height is
  trimmed there. Earlier parts of this record judged containment against the paraxially calibrated 6.286 mm stop, for
  which the 6.3 mm rims clear at infinity. The trim cannot be removed without breaking the gap-intrusion rule; the
  drawing itself shows these two surfaces in rim contact.
- In the render L3 and L4 show a notch at the d6 gap (7.3 mm outer rims, 6.3 mm facing rims) where Fig. 1 draws a
  flush contact.
- r2 remains about 13 % larger than the drawn optical rim for the ray reasons given in the table.
- Rows S4-C1 and S2-CLEAR-L3 (L3 front rim 2.90 mm behind the stop) are superseded: at the new 7.3 mm rim the
  distance is 4.214 − 1.792 = 2.42 mm, and the analysis now says so.

### Glass labels (2026-10-05)

Stored nd/νd are unchanged patent values. All five labels resolve in the runtime catalog (5 of 5).

| Element | Label change | Resolves to (Δnd, Δνd) |
|---|---|---|
| L1 | "nearest J-LAK02 HIKARI … catalog unresolved" → "J-LAK02 HIKARI / S-LAL52 OHARA coordinate-compatible, Δnd −0.0003; supplier unconfirmed" | J-LAK02 (−0.00025, −0.15) |
| L2, L3, L4 | none | K-BaSF5 (+0.00002, +0.08); SF56A (0.0000, −0.02); J-LASF015 (−0.0001, 0.00) |
| L5 | "nearest TAC4 HOYA, Δnd +0.002; catalog unresolved" → "nearest LAKN12 SUMITA, Δnd +0.0015; TAC4 HOYA alternate, Δnd +0.0020; supplier unconfirmed" | LAKN12 (+0.0015, +0.22) |

LAKN12 is a discontinued SUMITA type now present in the shared catalog and is nearer in index than TAC4. Neither is
the printed glass (the residual is three to four times the half-unit of the printed third decimal); the label names
the nearest dispersion curve and makes no supplier claim. The "catalog unresolved" wording was removed because both
labels do resolve. No nearer catalog glass was found for L1.

### Presentation (2026-10-05)

The display name stays `NIKON LW-NIKKOR 28mm f/2.8`. The subtitle was shortened to
"US 4,203,653 EXAMPLE 1 — NIPPON KOGAKU K.K. / IKUO MORI"; the r5 sign note and the correlated product link remain
in the data-file header and the analysis. The data-file header's semi-diameter note was rewritten for the values above.

## 2026-10-05 — Second review (site diagram, labels, travel, glass, metadata)

Independent second pass over the committed files. Where this section and the semi-diameter figure pass above differ on
r6/r7, this section describes the current files. R, d, nd, νd, stop position, STO semi-diameter and the focus gaps are
unchanged; paraxial EFL 28.0315 mm and BFD 36.2531 mm are identical before and after.

**Prescription and glass against the rendered table.** All ten radii, nine separations and five nd/νd pairs of the
First Embodiment (col. 3) were re-read from the page image and equal the stored values ÷ 28; r5 keeps the negative
sign of claim 4. The patent prints no partial-dispersion data, so none is authored. All five glass labels resolve in
the runtime catalog within tolerance (J-LAK02, K-BaSF5, SF56A, J-LASF015, LAKN12); no relabel was needed.

**r6 / r7 (L3 rear, L4 front).** The first pass left these at 6.3 mm under the default 90 % gap rule, which clipped
the exact f/2.8 marginal ray. The combined sag of the two surfaces across the 0.728 mm d6 gap is:

| Rim height (mm) | Combined sag (mm) | Share of gap | Air left at rim (mm) |
|---|---|---|---|
| 6.30 | 0.651 | 89.5 % | 0.077 |
| 6.45 | 0.683 | 93.8 % | 0.045 |
| 6.60 | 0.715 | 98.2 % | 0.013 |
| 6.67 | 0.730 | 100.3 % | surfaces cross |
| 7.30 (Fig. 1 rim) | 0.875 | 120 % | impossible with the tabulated radii |

Fig. 1 draws the two surfaces meeting at the common 7.3 mm rim, which the tabulated radii cannot do; the figure is
schematic at this gap (the first pass also found r5–r10 drawn 21 % short axially). The drawing does show that the
designer intended the facing rims to run essentially to contact. A per-lens `gapSagFrac: 0.99` is therefore authored
(precedents: 0.97, 1 and 1.0 in three other lens files with touching rims) and r6/r7 are set to 6.6 mm, below the
6.67 mm contact height. The surfaces do not cross, the repository surface validator reports no errors, and the
exact-ray trace no longer flags an axial clip at r6 or r7 (marginal ray 6.44 / 6.45 mm) at infinity or at 0.5 m. The
full-field bundle loses less at these rims than before (r6 53 % of one side against 58 %, r7 48 % against 55 %).
Image-circle check: not undersized. Traced field coverage: 100 %. Engine half-field estimate unchanged at 38.54°.

**r2 (L1 rear).** Re-measured on a 300 dpi crop: the r2 arc ends about 212 px above the axis, 10.4 mm, where the
mounting step begins. That agrees with the first pass. The value stays 11.8 mm: r2 is the surface that limits the
engine's field estimate (38.5° against the 38.3° format corner), so following the schematic figure would put the
estimate below the corner. The corner chief ray needs 9.32 mm there and is clear either way.

**Site diagram.** Local page compared with Fig. 1 at infinity and at 0.5 m: L1 tallest, L2 biconvex ahead of the
stop, stop midway in d4, L3/L4 with a common outer height and facing rims now nearly meeting, L5 slightly taller,
image plane at the long back focus. Element labels 1–5, type strings (signs of R and of fl agree), the two group
captions, the empty doublet list, the legend (no anomalous-dispersion or aspheric markers), the aperture readout
(EFL 28.03 mm, f/2.8 to f/22) and the specification chips are correct.

**Focus.** The `var` row for gap 10 is ordered infinity then close, and the back focus grows from 36.253 to 38.100 mm
(1.847 mm of extension), the correct direction for unit focus. A paraxial check of the close state gives an object
424.36 mm ahead of r1 and an object-to-image distance of 500.07 mm, i.e. 0.5 m from the film plane. The movement
overlay shows both groups moving 1.85 mm toward the object together. The close state remains a calculated
reconstruction; the patent publishes infinity only.

**Name and metadata.** Nikon's own history article (_Thousand and One Nights_ No. 8, Nikonos lens chronology) lists
"LW NIKKOR 28mm f/2.8 (exclusively for on-land use)" under 1983; the barrel is engraved LW-NIKKOR. The display name
`NIKON LW-NIKKOR 28mm f/2.8` is kept. The patent front page prints no kind code, so "US 4,203,653" is kept; inventor
Ikuo Mori, assignee Nippon Kogaku K.K. and grant year 1980 agree with the front page. `apertureDesign: 2.8` was
added (the patent's relative aperture 1:2.8). Mount `nikonos` and format `135-full-frame` are canonical ids. No
maker-published image circle or blade count was found in the sources consulted, so those fields stay unset.

**Open limits.** L1 rear remains about 13 % larger than the drawn rim. A 0.7 mm step remains between the 7.3 mm
outer rims and the 6.6 mm facing rims of L3 and L4, where Fig. 1 draws a flush contact that the tabulated radii do not
permit. The authored STO semi-diameter 6.286 mm is the paraxial calibration; the engine derives a 6.46 mm exact-ray
stop radius for f/2.8.
