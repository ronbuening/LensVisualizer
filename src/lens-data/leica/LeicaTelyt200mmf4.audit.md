# LeicaTelyt200mmf4 — Audit Record

## Follow-up diagram and movement review

Local figure and live infinity/near states agree within figure uncertainty; retained SDs. Unit-focus extension is +15.699 mm. L1 now selects the closer native-e-line PCD2 proxy; SF10 and K10 labels explicitly disclose proxy status. L3 remains unresolved; the repeat search found no verified compatible additional vendor curve.

## Catalog integration — 2026-10-17

This section records the current catalog decisions. Earlier stages below retain the extraction history and may describe superseded rim or glass choices.

- **Optical-rim source:** DE 1,096,057 B figure (local PDF page 3, 600 DPI). Retained 26.2/24.0/18.7/14.2 mm element rims. Axial-span calibration puts the corresponding drawn rims near 26.7/25.6/20.0/15.4 mm, within figure measurement uncertainty. Rays, leaders and the vertical scale are excluded.
- **Glass:** Three of four element records have compatible spectral proxies. L3 remains unresolved: historical LaFN8/LAF8 coordinates do not supply a verified compatible vendor dispersion curve in the catalog.
- **Metadata and V2:** Added the Visoflex system category rather than implying direct M or LTM infinity-focus mounting. Display uses Leitz Telyt and names Visoflex. Retained native e-line coordinates and reconstructed unit focus.


Consolidated record for Stage 1 (extraction and first-order verification), Stage 2 (data construction and chat
preflight), Stage 3 (analysis authoring, §12) and the Stage 4 source-first independent audit (§13). Sections 1–12 are the
author's construction verification and are retained unchanged except for the §8 pointer. Numerical values are reproduced by
`LeicaTelyt200mmf4.verify.py`; the executed values of record are in `LeicaTelyt200mmf4.results.json`.

## 1. Job and reference versions

| Item | Value |
|---|---|
| Patent | DE 1 096 057 B (Auslegeschrift), Aktenzeichen L 33816 IX/42h, Kl. 42h 4/20 |
| Title | Fotografisches Objektiv — Zusatz zum Patent 1 018 236 |
| Filed / published | 1959-07-25 / 1960-12-29 |
| Applicant | Ernst Leitz G. m. b. H., Wetzlar |
| Inventors (source order) | Dipl.-Phys. Walter Mandler (Midland, Ontario); Horst Schmidt (Nauborn bei Wetzlar) |
| Lens (job card) | Leica Telyt 200mm F4 |
| Embodiment | Example 1 = the single numerical example printed in the description and repeated in claim 4 |
| Output stem | `LeicaTelyt200mmf4` |

Original bytes: `DE_1096057_B.pdf` sha256 `ada2cc581ae50358f647156249712b383d453a66e01a7874c6f5cd07f33d2c3a`;
`LeicaTelyt200mmf4.txt` sha256 `e1601e126afdac73ce51761064b57f7d71db2e319ffa77b1764fa7769899a87a`.

Controlling project references (hashes in the manifest `references` block): LensPatentStage2Data.txt (added at Stage 2),
LensPatentStage1Extraction.txt, LensPatentChatProtocol.md (CHAT-1.0), LensPatentDossierContract.md (CHAT-1.0),
LensPatentWorkflowGuide.md, LENS_DATA_SPEC.md, LENS_ANALYSIS_SPEC.md, LENS_MOUNT_FORMAT_OPTIONS.md,
TEMPLATE_data_ts.template, defaults.ts, prettierrc.json. All Stage 1 reference hashes were re-read at Stage 2 and are
unchanged. `lensTaxonomy.ts`, the authoring guide and the integration handoff are not in the project mount and remain
recorded as unavailable.

Environment adaptation: the protocol's `/mnt/data` paths describe a ChatGPT sandbox. This session runs in claude.ai;
the handoff directory is `/mnt/user-data/outputs/LeicaTelyt200mmf4_stage2/` and the archive
`/mnt/user-data/outputs/LeicaTelyt200mmf4_stage2.zip`. `/mnt/transcripts` does not exist in this session; no transcript
copy or journal entry was written.

### 1.1 Stage 2 entry gate

The Stage 1 dossier arrived as seven individual files with legacy underscore names
(`LeicaTelyt200mmf4_evidence.json`, `_verify.py`, `_results.json`, `_audit.md`, `_manifest.json`). They were renamed to the
contract names without byte changes. Every hash listed in the Stage 1 manifest matched the received bytes; the Stage 1
manifest itself (not self-hashed by design) has sha256 `6eb19ca0e117791bd7449fc4867136e35a877f1985af02be40d71e96468039d0`
and is recorded as the parent package. No Stage 1 ZIP was supplied, so no parent archive hash exists. The Stage 1 verifier
was replayed on the renamed files in this environment (numpy 2.4.4 / scipy 1.17.1 versus 2.5.3 / 1.18.1 at Stage 1):
all 26 checks reproduced with every numerical value equal to the packaged results within 1e-12 relative. The four
job fields were re-parsed from the original card. The prescription was re-read against the native page images (both
tables) and agrees with `rawPrescription`.

Reopened items: DISC-01 (printed a8) remains unresolved at source level and keeps its treatment; the unpublished stop,
semi-diameters and close focus were Stage 2 tasks; ENTRY-01 records an inconsistency in the Stage 1 six-digit d-line
code strings (L1 `569631` in evidence versus `569632` computed; L4 catalog code `501564` versus offset estimate `501566`).
These codes never entered the model and are now excluded from the e-line data labels (MD-10).

## 2. Extraction and conventions

The PDF is image-only (three ~313 dpi rasters, no text layer). All values were read from the native page images, not
OCR. The prescription appears twice (description, p.1 col.2; claim 4, p.2 col.4); both copies were transcribed separately
and are identical (check `S1-DUPLICATE-TABLES`). The claim copy prints νe = 40,8 with a damaged final glyph; the
description copy is unambiguous.

| Surface | r | following a | medium | ne | νe |
|---|---|---|---|---|---|
| 1 | +0.3127 | 0.0500 | L1 | 1.5709 | 63.0 |
| 2 | −1.4075 | 0.0275 | air | | |
| 3 | −0.7000 | 0.0200 | L2 | 1.7343 | 28.1 |
| 4 | +2.2435 | 0.1840 | air (stop D) | | |
| 5 | −0.5850 | 0.0250 | L3 | 1.7394 | 40.8 |
| 6 | −0.3130 | 0.0910 | air | | |
| 7 | −0.1865 | 0.0200 | L4 | 1.5035 | 56.3 |
| 8 | −0.3933 | 0.5162 = a8 (Schnittweite) | air | | |

System values: f = 1,00; 1:4,0; Bildwinkel 12°. Conventions: light left to right, R > 0 centre to the right (consistent
with the drawing); ne and νe refer to the e-line (νe from F′/C′); dimensions normalized to f = 1,00; a8 is the back focal
distance for an object at infinity. No aspheres, no plates, no dummy surfaces. The stop D is drawn in a4 but neither its
position nor its diameter is dimensioned. No semi-diameters are published.

## 3. Model transformations (ledger summary; full entries in evidence `modelingDecisions`)

| ID | Transformation | Status | Implemented value |
|---|---|---|---|
| MD-01 | Uniform scale s = 200 (normalized f = 1,00 → 200 mm) | Implemented | EFL 200.3095 mm |
| MD-02 | STO inserted in a4, 0.0204 f before r5 (figure measurement) | Implemented, inferred | d(4) 32.72 mm + d(STO) 4.08 mm = a4 × 200 |
| MD-03 | Last gap = computed paraxial e-line BFD, not printed a8 | Implemented | 103.5982 mm (0.517991 f) |
| MD-04 | Native ne/νe retained, `indexReference: "e"` | Implemented | nd/vd slots = ne/νe |
| MD-05 | Stop SD calibrated to paraxial f/4.0 | Implemented, calibration | 17.597 mm |
| MD-06 | Modeled semi-diameters from real rays | Implemented | see §5.3 |
| MD-07 | Unit-focus reconstruction to 3.0 m subject-to-film | Implemented | var "8" [103.5982, 119.2969] |
| MD-08 | Omissions / gap combination | None required | — |
| MD-09 | Metadata, name, key, maker; lensMounts omitted | Implemented | see §6 |
| MD-10 | Glass labels without d-line codes on e-line rows | Implemented | see §4 |
| MD-11 | Controls/layout (fstopSeries, maxFstop, yScFill) | Implemented; layout unverified | see §5.5 |

Figure measurement (MD-02): r1…r8 outline crossings and the stop-bar centres were located by dark-pixel runs on the
native page-3 raster. Global scale 2364 px/f (vertex 1→8) and local scale 2353 px/f (gap a4) give stop-to-r5 = 0.0203
and 0.0204 f; the verifier recomputes the adopted 0.0204 f from the stored pixel data and `S2-PRESCRIPTION-MATCH`
compares it with the data file's STO spacing. The drawing is close to proportional (per-gap drawn/table ratios 0.93–1.08).

## 4. Glass review

Search (Stage 1): unseeded nearest-neighbour search in (ne, νe) at C′/e/F′, metric √(Δne² + (Δνe/50)²), over the six
current catalogs bundled with opticalglass 2.0.2 (Schott 122, OHARA 134 S-series only, HOYA 238, HIKARI 144, CDGM 321,
Sumita 128) and the Robb–Mercado 1983 Buchdahl tables (813 entries including legacy Schott). The Robb model is evaluated
directly (base wavelength 0.574 µm) and was validated on BK7, SF10 and K10. The verifier replays every stored row.

| Element | Native ne / νe | Best candidate (Δne, Δνe) | Current catalogs within runtime window | Data-file label |
|---|---|---|---|---|
| L1 | 1.5709 / 63.0 | Robb OHARA PSK2 (−0.00002, −0.08) | CDGM H-ZK1 | `PSK2 (legacy Schott/OHARA dense phosphate crown; current equivalent H-ZK1, CDGM)` |
| L2 | 1.7343 / 28.1 | HOYA E-FD10 (+0.00002, −0.00); Schott SF10 (0.00000, +0.09) | SF10, E-FD10 | `SF10 (Schott)` |
| L3 | 1.7394 / 40.8 | Robb OHARA LAF8 (+0.00004, +0.08) | none (nearest D-LaF79 / M-LAF81 Δne −0.00435) | `Unmatched (LaF8-class lanthanum flint; …)` |
| L4 | 1.5035 / 56.3 | Schott K10 (−0.00001, −0.15) | K10 | `K10 (Schott)` |

Schott naming is preferred for L2 and L4 (German patent; `LENS_DATA_SPEC.md` vendor guidance). Six-digit codes are d-line
quantities and are not written to the e-line rows (MD-10); the verifier's d-line estimates (L1 569632, L2 728283,
L3 735411, L4 501566) are offsets from the best candidate, not source data. Coordinate agreement is not supplier or melt
identification; Leitz ran its own glass laboratory. The patent publishes no partial dispersion; no nC/nF/ng/dPgF were
stored and no APO or anomalous-dispersion claim is supported. Whether LensVisualizer resolves `PSK2` (legacy) by name
is an integration question (`LV-GLASS-RESOLUTION`); an unresolved name falls back to the Abbe path by design.

## 5. Numerical and geometry results

### 5.1 First order (source model and parsed data file agree to 1e-13 mm)

| Quantity | Normalized | Data file (mm) | Method |
|---|---|---|---|
| EFL | 1.001548 | 200.3095 | y-nu and independent ABCD on parsed values |
| BFD (paraxial) | 0.517991 | 103.5982 | same; last d agrees within 5e-5 mm |
| FFD | 1.206637 | 241.327 | ABCD |
| Front principal plane | −0.2051 | 41.02 in front of V1 | derived |
| Rear principal plane | −0.4836 | 96.71 in front of V8 | derived |
| Track V1 → image | 0.93549 | 187.098 | Σd + BFD |
| TL/EFL | 0.9340 | — | telephoto verified (< 1) |
| Petzval sum | 0.3141 /f | radius 636.65 | Σ φ/(n n′), parsed data (STO term 0) |
| Full field, 135 diagonal | — | 12.33° | f·tan θ at 43.27 mm diagonal; patent prints 12° |

Standalone element focal lengths from the parsed data (thick lens in air; stored `fl` agrees within 0.005 mm): L1
biconvex +90.59; L2 biconcave −144.90; L3 positive meniscus concave to object +175.24; L4 negative meniscus concave to
object −145.61. Members: front (L1+L2) +200.03 mm; correction (L3+L4) −1492.4 mm, |φ_corr|/φ_sys = 0.134 — weakly
negative, not powerless.

### 5.2 Pupils and f-number (calibration)

EP 70.14 mm behind V1, paraxial radius 25.04 mm; XP 25.22 mm in front of V8, radius 16.10 mm. With STO SD 17.597 mm the
paraxial f-number is 4.0001 (`S1-FNUMBER`, `verificationKind: calibration`): this agreement is by construction from the
printed 1:4,0 and is not evidence of the physical diaphragm diameter. A real axial ray aimed at the stop rim enters at
24.19 mm, not 25.04 mm (pupil spherical aberration of the front member); the f-number implied by that real entrance
height is ≈ 4.14 (`F-REAL-EP`). The patent figure's drawn opening (≈ 16.7 mm radius at scale) is a plausibility
observation only.

### 5.3 Semi-diameters (modeled, MD-06)

Method: real meridional e-line rays through the implemented model at focusT 0, 0.5 and 1 — the f/4 axial cone aimed at the
stop rim, a 60 % field fan (0.6 × 21.63 mm image height) to ±0.75 of the stop radius (the application's default rendered
fan) and the full-field chief ray; envelope maximum × 1.08, rounded up to 0.1 mm, and equalized to the larger value on
both faces of each element.

| Surface | 1 | 2 | 3 | 4 | STO | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| SD (mm) | 26.2 | 26.2 | 24.0 | 24.0 | 17.597 | 18.7 | 18.7 | 14.2 | 14.2 |

The front clear diameter (52.4 mm) is compatible with the E58 filter mount reported by secondary sources. Full-pupil
beams beyond ±0.75 of the pupil at 60 % field, and at full field, are vignetted by L1 and L4; the meridional transmission
of a full-field, full-pupil fan is 0.78–0.80 across the focus samples (informative).

Geometry checks from the parsed file (`S2-SEMIDIAMETERS-GEOMETRY`, PASS):

- Edge thickness at the element rim: L1 3.03 mm, L2 6.71 mm, L3 3.65 mm, L4 5.52 mm (all > 0).
- Rim slope (spherical, asin(sd/|R|)): maximum 24.8° at r1 (limit asin 0.9 = 64.16°). The obsolete universal
  sd/|R| and element-SD-ratio rules were not applied; the current front/rear SD ratio ≤ 3 is satisfied (all 1.0).
- Shared-band cross-gap intrusion: gap after r2 1.05 mm of 5.50 (19 %); after r4 0.35 of 32.72 (1 %); after STO 1.33
  of 4.08 (33 %); after r6 1.18 of 18.20 (6 %); limit 90 %.
- Containment at focusT 0, 0.25, 0.5, 0.75, 1: axial f/4 cone max height/SD 0.926; 60 % field ±0.75 fan 0.858;
  full-field chief ray 0.298; no clipping at any non-stop surface.

Coverage limits: meridional real rays only; no skew-ray or production render-trim test; intermediate focus samples are
interpolations of the last gap, not source states.

### 5.4 Focus (CONSTRAINED_RECONSTRUCTION, implemented)

Mechanism: unit focusing of the whole head (secondary sources; no internal motion reported). Constraint: closest focus
3.0 m subject-to-film. At Stage 2 the reference plane is established by a manufacturer document (M-LEITZ-VF2, Ernst Leitz
GmbH Visoflex II leaflet, list 111-40c/Engl., V/62), whose column heading defines the focusing range as
"subject-to-film distance" and lists the 200 mm TELYT f/4 at ∞–9′10⅛″ (3000.4 mm). The Stage 1 assumption is therefore
replaced by a manufacturer statement.

From the parsed close gap 119.2969 mm: object 2797.20 mm in front of V1, subject-to-film 3000.001 mm (tolerance
0.05 mm), extension 15.699 mm, m = −0.07837 (1:12.760). The same leaflet gives 1:12.8 at closest focus; the computed
ratio lies inside the half-unit interval [12.75, 12.85] (`CMP-SCALE-LEITZ`, AGREE). This magnification was not a
solving constraint and is an independent consistency check of the reconstruction. The derived 24 × 36 mm object field
(306 × 459 mm) is consistent with the leaflet's subject size (fraction glyphs partly unreadable in the extracted text,
used informatively) and with the secondary 310 × 460 mm. The image distance is strictly monotonic in object distance
over 0.3 m–10 km, so the root is unique.

### 5.5 Data-file construction and structure

Literal-only payload from the current root-level template; `import type { LensDataInput } from "../types/optics.js"`,
`const LENS_DATA = {...} satisfies LensDataInput`, `export default LENS_DATA`. Prettier 3.9.9 with the project
`prettierrc.json` was applied and `--check` passes (a real formatter, not the repository-pinned version). The TypeScript
5.9.3 compiler transpiles the file with no syntactic diagnostics; no `LensDataInput` type was available, so this is not a
type check.

Controls: `nominalFno` 4 (modeled, calibrated); `apertureDesign` omitted (equal to marketing); `focalLengthDesign` 200.3;
`fstopSeries` [4, 5.6, 8, 11, 16, 22] with `maxFstop` 22 from the secondary f/4–f/22 range; `apertureBlades` omitted
because sources conflict (15 vs 20); `yScFill` 0.35 is a layout estimate not tested in the renderer.

Verifier loader: a strict lexer/recursive-descent parser for the documented literal subset. Nine fixtures (one accepted,
eight intentionally malformed: duplicate key, spread, arithmetic, function call, identifier value, computed key,
template string, unterminated array) plus a trailing-token case behave as expected (`S2-PARSER-FIXTURES`). Five
mutated copies of the actual data file (radius, front SD, close gap, stop SD, duplicate key) each produce the expected
FAIL (`S2-MUTATION-DETECTION`).

## 6. Product correlation

Manufacturer primary source now available for part of the marketed specification: M-LEITZ-VF2 lists the 200 mm TELYT f/4
for the Visoflex II with focusing range ∞–9′10⅛″ subject-to-film, scale 1:12.8 at closest focus, and exposure factor
1.2. It was retrieved as extracted text through the chat fetch tool; the PDF bytes could not be hashed (sandbox network
policy). Element count, filter size, blade count, and dates remain secondary (P-LENSDB, P-LWIKI, P-LKM, P-KSTORE,
P-LCF1958, P-WIKI-MANDLER).

Convergent evidence for the Visoflex Telyt 1:4/200 (TELOO/11063): the patent's 200 mm, 1:4, 12° objective; Leitz assignee
and a Leitz Canada inventor; four uncemented elements in four groups; c.1959 introduction; Visoflex register 91.3 mm
below the 103.6 mm BFD; close-focus scale 1:12.76 computed versus 1:12.8 published by Leitz. Contradictions recorded:
a 1958 batch (Thiele via P-LCF1958) precedes the filing; production-era dates differ; blade count 15 vs 20; P-KSTORE
reports a later relocation of the diaphragm from in front of the third element to behind it. The correlation is strong,
and the focus behaviour is now manufacturer-consistent, but identity of the production prescription with this example is
not manufacturer-confirmed.

Metadata (MD-09): `patentNumber` "DE 1 096 057 B"; `patentAuthors` ["Walter Mandler", "Horst Schmidt"];
`patentAssignees` ["Ernst Leitz GmbH"]; `patentYear` 1960; `imageFormat` "135-full-frame"; `lensMounts` omitted (no
Visoflex id; "leica-ltm" would misstate the 91.3 mm register). Name `LEICA TELYT 200mm f/4` (job-card lens; the Leitz
leaflet calls it a LEICA lens, "200 mm TELYT f/4"), key `leica-telyt-200mm-f4`, maker `Leica`. Corpus-level maker slug for
Ernst Leitz GmbH-era products (OI-MAKER) and a possible key/name collision with a later Telyt-R 200 mm f/4 (OI-NAME) are
repository-level checks.

## 7. Correction and discrepancy register

**DISC-01 — printed Schnittweite not reproduced.** Printed a8 = 0,5162; computed paraxial e-line BFD = 0.517991
(Δ = +0.001791 f = +0.358 mm at 200 mm; 5.6 σ of rounding propagation; tolerance 0.00096). Hypotheses tested and
rejected: best focus under spherical aberration (real-ray axial intercepts 0.51779–0.51909 for heights 0.001–0.125 f);
another reference line (candidate-dispersion BFD over g…C 0.51774–0.51969). No clean single-value typographical
correction exists, so none is proposed. Treatment MD-03: printed R, a1–a7, ne kept; image plane at computed paraxial
focus (103.5982 mm). `CMP-BFD-PRINTED` and `CMP-BFD-PRINTED-IMPL` (103.5982 vs 103.24 mm) remain `MISMATCH`; the gate
evaluates `S1-DISC-01-RESOLUTION`. Placing the image at the printed a8 would defocus by 0.36 mm.

**DISC-02 — condition wording.** Upper limit for a2 is 6 % in the description, 5 % in claim 3. The example satisfies
both; `S2-CONDITIONS-IMPL` applies the stricter claim limits to the parsed spacings (a2 0.0275, a4 0.184, a6 0.091 f).

**ENTRY-01 — code strings (Stage 1).** See §1.1; no model effect.

**Stage 1 preliminary-report correction (carried forward).** The preliminary prototype applied ABCD translations without
dividing by the medium index; member and element powers reported in the first chat message were wrong and were
corrected before the Stage 1 package (front member 0.966 → 1.0002 f; correction member −9.44 → −7.46 f; L1 0.456 →
0.4529 f; L2 −0.723 → −0.7245 f; L3 0.853 → 0.8762 f; L4 −0.741 → −0.7280 f). Stage 2 values from the parsed file
agree with the corrected values.

**Stage 2 changes to Stage 1 statements.** The close-focus reference plane moves from "assumed film plane" to
"manufacturer-stated subject-to-film"; `OI-MFR` is partly resolved; `S1-FNUMBER` changes from NOT_RUN to PASS as a
labelled calibration. No source value was changed.

## 8. Independent review

Not performed at Stages 1–3 (construction verification by the author). The Stage 4 independent review is recorded in §13.

## 9. Quantitative-claim map (for Stage 3)

| Claim | Fact / check | Governs |
|---|---|---|
| EFL 200.3 mm, BFD 103.6 mm, track 187.1 mm, TL/EFL 0.934 | F-IMPL-FIRST-ORDER, S2-FIRST-ORDER-IMPL, S2-TELEPHOTO-IMPL | data file (MD-01, MD-03) |
| Principal planes in front of the lens | F-IMPL-PP | data file |
| Element powers, shapes, roles | F-IMPL-ELEMENTS, S2-ELEMENTS, S1-CLAIM2-SHAPES | data file |
| Front member carries the power; corrector weak negative | F-IMPL-GROUPS, S1-CORRECTION-MEMBER | data file |
| Petzval radius 637 mm | F-IMPL-PETZVAL, S2-PETZVAL-IMPL | data file |
| Conditions satisfied | S2-CONDITIONS-IMPL, S1-CONDITIONS | patent text + data |
| Printed a8 not reproduced | CMP-BFD-PRINTED, CMP-BFD-PRINTED-IMPL, S1-DISC-01-RESOLUTION | patent vs computation |
| Stop position / f/4 calibration / real-ray pupil | S1-FIGURE-STOP, S1-FNUMBER, F-IMPL-PUPILS, F-REAL-EP | figure inference; calibration |
| Semi-diameters and geometry | F-SD-TABLE, F-IMPL-GEOMETRY, S2-SEMIDIAMETERS-GEOMETRY | modeled (MD-06) |
| Glass classes and labels | F-GLASS, S1-GLASS-AUDIT, S2-GLASS-LABELS | catalogs |
| Axial colour magnitude | F-AXIAL-COLOUR | candidate-glass branch only |
| 3 m focus: extension 15.70 mm, m −0.0784, 1:12.76 vs Leitz 1:12.8 | F-IMPL-FOCUS, S2-FOCUS-IMPLEMENTED, CMP-SCALE-LEITZ | data file; M-LEITZ-VF2 |
| Field 12.3° on 135 | F-IMPL-FIELD | data file |
| Numbers in data header/focusDescription/specs | S2-DATA-TEXT-CLAIMS | data file |

Manual check of the data file's prose: the header and `focusDescription` describe the stop as figure-inferred and the stop
SD as calibrated, the close focus as reconstructed, the semi-diameters as modeled, and a8 as not reproduced; element
roles use only claim-supported functions (front member / correction member, menisci concave toward the stop) and make no
aberration-specific claims. Analysis prose and citations do not exist yet; Stage 3 must add its own manual check.

## 10. Gate disposition (Stage 2, retained)

All mandatory Stage 1 and Stage 2 CHAT_PREFLIGHT checks pass (42 checks recorded; none FAIL; `mandatoryUnmet` empty).
The real-tool checks `S2-PRETTIER-CHECK` and `S2-TS-SYNTAX` pass when the verifier is given `--tools-dir`; without it
they are NOT_RUN at integration scope and do not affect the gate. No substantive blocker. Earned gate:
`READY_FOR_ANALYSIS`, bound in the manifest's Stage 2 checkpoint to the exact data, evidence, verifier and results bytes.

## 11. Pending integration (updated at Stage 3; unchanged in substance)

`LENSVISUALIZER` checks — buildLens, validateLensData, real `LensDataInput` type check, render diagnostics (including
hidden-trim sweep and layout), runtime glass-name resolution (notably `PSK2` and the e-line alias path), and production
build — are `NOT_RUN`, `requiredAt: integration`. Repository-only questions: Visoflex mount taxonomy, maker slug and
display prefix for Ernst Leitz GmbH patents, key/name collision with a later Telyt-R, `closeFocusM` reference-plane
semantics in the application (the model uses subject-to-film, as Leitz defines it), and the repository-pinned Prettier
version. `integrationStatus: INTEGRATION_PENDING`.

## 12. Stage 3 — analysis authoring

### 12.1 Entry gate

Inputs arrived as individual files with legacy underscore names (`LeicaTelyt200mmf4_data.ts`, `_evidence.json`,
`_verify.py`, `_results.json`, `_audit.md`, `_manifest.json`) plus the unchanged patent PDF and job card. They were
renamed to the contract names without byte changes. Every received hash equals the Stage 2 manifest `stage2Checkpoint`
and `files` entries (data `249625…6eb61`, evidence `839020…2dba02`, verifier `99f09b…557cba`, results `1a8c4a…208181`,
audit `baf7d3…472b66`); the Stage 2 manifest itself has sha256
`64ba1954ddd8fb59100eaa6de6c99e4fe37718e554fe2c4a91d2e2db2820dd5b` and is the parent package. No Stage 2 ZIP was
supplied. The four job-card fields were re-parsed. Controlling references were re-hashed: every Stage 2 reference is
unchanged, and `LensPatentStage3Analysis.txt` (sha256 in the manifest) was added.

The Stage 2 verifier was replayed in this environment (Python 3.12.3, numpy 2.4.4, scipy 1.17.1, prettier 3.9.9,
TypeScript 5.9.3). With an absolute `--tools-dir` all 42 checks passed and every stable field of `results.json`
(facts, checks, comparisons, states, models) equalled the packaged results within 1e-9 relative; `mandatoryUnmet` was
empty. With a relative `--tools-dir`, `S2-TS-SYNTAX` failed: the verifier passed the relative module path to Node's
`require()`, which resolves bare paths as package names. This is a verifier-portability defect, not a data defect
(S3-FIX-01 below). The Stage 2 approval therefore carried to Stage 3 for the unchanged data bytes.

### 12.2 Changes during Stage 3

**Data file:** unchanged (sha256 `249625481a17d96954f2c487e3c493fd3773d1034965f50f9071ea84f706eb61`). No upstream data
or source-model error was found while writing the analysis; the upstream-correction rule was not triggered.

**S3-FIX-01 (verifier):** `--tools-dir` is converted to an absolute path before use. Before: relative paths caused
`S2-TS-SYNTAX` FAIL (`MODULE_NOT_FOUND`); after: PASS with relative and absolute paths.

**Verifier extension:** `stage3_branch` (analysis-support computations on the parsed data file) and `analysis_checks`
(consistency gate), described in §12.3–12.4. The Stage 1/2 branches are unchanged apart from S3-FIX-01. Replaying the
extended verifier on the final package reproduces every Stage 1/2 fact, check and comparison of the entry replay within
1e-9 relative.

**Evidence (non-semantic additions only):** sources `R-WELFORD` (method reference) and `W-GAUSSFEHLER` (terminology);
`stage3Recheck` notes on `M-LEITZ-VF2`, `P-WIKI-MANDLER` and `P-KSTORE` (re-retrieved 2026-09-30, content confirmed;
the leaflet bytes remain unhashable); status notes on `OI-REALPUPIL`, `OI-VARIANT`; new open issues `S3-FIX-01` and
`S3-TERM-01`. No raw prescription value, convention, modeling decision, glass row or focus field changed. All
evidence-dependent Stage 1/2 checks were rerun on the new evidence bytes and pass with identical values.

**Interpretive correction relative to Stage 2 wording (S3-TERM-01, and the correction-member power statement):**
The patent's *Gaußfehler* (p.1 col.1 lines 20–30) is German optical usage for spherochromatism (W-GAUSSFEHLER); the
analysis translates it so, not as spherical aberration. Stage 2 (§5.1) described the correction member as "weakly
negative, not powerless" from its standalone power (−1492.4 mm, 0.134 φ). That remains true standalone; the analysis
adds the in-situ view (F-S3-INSITU-POWER), in which L3 and L4 contribute +0.746 and −0.747 of the system power, a net
−0.14 %, so the patent's "brechkraftlos" holds in the in-situ sense. Both statements appear in the analysis.

### 12.3 New computations (all on the parsed data file; e-line; infinity unless stated)

| Result | Value (rounded) | Check |
|---|---|---|
| In-situ power fractions (Σ(y/y1)φ per element) | L1 +2.211, L2 −1.210, L3 +0.746, L4 −0.747; corr. net −0.0014 | S3-INSITU-POWER (sum = 1 to 1e-12) |
| Front member alone vs system | f 200.03 vs 200.31 mm; track 192.80 vs 187.10 mm; TL/f 0.964 vs 0.934; rear PP 7.23 vs 13.21 mm before V1 | S3-TELE-DISTRIBUTION |
| Seidel member ratios (corr/front) at figure stop | S_I −0.37, S_II −0.97, S_III −0.93, S_IV −0.50; corr. share of S_V 11.6 %; third-order distortion +0.457 % | S3-SEIDEL-VALIDATION |
| Stop-position sensitivity (1–32 mm before r5, SD recalibrated to f/4) | coma ratio −0.957…−0.975 all positions; astig ratio −0.914…−0.939 for 1–8 mm, −0.71 at 16 mm; corr. S_V share −1…20 % | S3-STOP-SENSITIVITY |
| Real chief-ray distortion (21.63 mm = 135 corner) | +0.114 % (0.5), +0.222 % (0.7), +0.451 % (1.0) | validated vs Seidel at 0.1 field (1.2e-4 rel) |
| Coddington field (mm from paraxial plane) | 0.7: t −0.045, s −0.140; 1.0: t −0.0004, s −0.266; Petzval sag −0.368 | validated vs Seidel at 0.1 field (≤ 1 %) |
| Real-ray LSA (zones of real rim 24.193 mm) | −0.040, −0.006, +0.086, +0.197 mm | S_I sign/magnitude validated at 0.1 aperture (2.1 %) |
| Native-νe first-order BFD(F′)−BFD(C′) | L1 −6.84, L2 +7.63, L3 −2.48, L4 +1.40; sum −0.294 mm | S3-COLOUR-CONSISTENCY (sign vs candidate) |
| Candidate-dispersion branch (catalog-derived) | paraxial F′−C′ −0.340 mm; rim spherochromatism +0.147 mm | informative; labelled catalog-derived |
| Petzval by member; thin-lens index contrast | front-only radius 319 mm; system 637 mm; L3+L4 contrast factor 1.80 | from Σφ/(nn′); φ/n thin-lens illustration |

Sign conventions were fixed empirically, not assumed: third-order distortion is −S_V/(2H) and third-order LSA is
−S_I·a²/(2u′²) in the implemented Welford form, each confirmed against real rays in the third-order limit. The first
draft of the S_I validation used the opposite sign and failed (relative error 1.98); it was corrected to the convention
the real-ray trace demonstrates, not by widening the tolerance. The first draft of `S3-STOP-SENSITIVITY` asserted the
astigmatism balance at every sampled stop position and failed at 16 mm (−0.71); the analysis claim and the check were
narrowed to the 1–8 mm band that brackets the figure measurement (drawing proportionality 0.93–1.08 of a4), and the
analysis states that the balance is not claimed outside it.

### 12.4 Analysis consistency gate

`S3-ANALYSIS-STRUCTURE` (skeleton order, no Aspherical section for all-spherical data, Sources last, 172 lines against
the 100–200 guideline), `S3-METADATA-SYNC` (bold-label block vs `patentNumber`, `patentAuthors` in order,
`patentAssignees`, `patentYear` and evidence S-PAT dates/file number), `S3-ELEMENT-LINES` (each heading type and first
line regenerated from the parsed data and computed focal length), `S3-NUMERIC-CLAIMS` (61 claims regenerated at printed
rounding and matched verbatim), `S3-DISCLOSURES` (15 required disclosures), `S3-FORBIDDEN-CONTENT` (d-line notation on
e-line data, marketing words, first/second person, process metadata, APO claims) and `S3-SOURCES` all PASS.
`S3-ANALYSIS-MUTATION-DETECTION` runs seven altered copies of the analysis (telephoto ratio, element νe, dropped
disclosure, d-line notation, inventor order, APO sentence, renamed section); each fails its intended check.

Notation: the analysis uses ne/νe throughout because the data rows are native e-line values; the specification's νd
convention concerns the Greek symbol and would misstate the reference wavelength here.

### 12.5 Quantitative-claim map (analysis → result → governing revision/source)

| Analysis section | Claim(s) | Fact / check | Governs |
|---|---|---|---|
| Patent Reference | dates, file no., inventors, applicant, embodiment | S3-METADATA-SYNC; evidence S-PAT | patent p.1 header |
| Patent Reference | 3.00 m / 1:12.8 (Leitz); 1:12.76 model; BFD 103.6 vs register 91.3 | C-MFR-MFD, C-MFR-SCALE, C-CORR-EXCH, C-BFD-REG; F-IMPL-FOCUS; CMP-SCALE-LEITZ | M-LEITZ-VF2; data; P-LKM |
| Optical Architecture | gaps 5.50 / 36.80 / 18.20 mm | C-GAPS | data |
| Optical Architecture | front f 200.03, track 192.80, 0.964; EFL 200.31, 187.10, 0.934; 5.71 mm; 0.14 %; PP 13.21 vs 7.23 | C-FRONT-F, C-FRONT-TL, C-EFL, C-TRACK-TL, C-SHORTEN, C-REAR-PP; F-S3-TELE-DISTRIBUTION | data |
| Optical Architecture | corr. f −1492 mm, 0.134; in-situ +0.746/−0.747, −0.14 %; L1 +2.211, L2 −1.210 | C-CORR-STANDALONE, C-INSITU-CORR, C-INSITU-FRONT; F-IMPL-GROUPS, F-S3-INSITU-POWER | data |
| Optical Architecture | EFL 1.0015 f; stop 4.08 mm (0.0204 f); SD 17.60; EP 70.14 / 25.04; real rim 24.19, f/4.14 | C-EFL-NORM, C-STOP-POS, C-STOP-SD, C-EP, C-REAL-EP, C-REAL-EP-X; F-IMPL-PUPILS, F-S3-LSA, F-REAL-EP | data (MD-02, MD-05) |
| Element-by-Element | ne/νe, glass strings, standalone f; radii; a2, a6; L1 SD 26.2; L1 in-situ 2.21 | S3-ELEMENT-LINES; C-R1R2…C-R7R8, C-A2, C-A6, C-L1-SD, C-L1-INSITU | data; F-IMPL-ELEMENTS |
| Glass Identification | Δne/Δνe residuals; D-LaF79 Δne −0.0043; contrast factor 1.80 | C-G-L1…C-G-L4, C-G-L3-NEAR, C-PETZ-THIN; F-GLASS, F-S3-PETZVAL-MEMBERS | catalogs (replayed rows) |
| Focus Mechanism | 103.60/119.30 mm; 2797.2 mm; −0.0784 (1:12.76); 15.70 mm; 3.00 m | C-FOCUS-*, C-SFD; F-IMPL-FOCUS; S2-FOCUS-IMPLEMENTED | data var (MD-07); M-LEITZ-VF2 |
| Aberration Correction Strategy | Seidel ratios; 319/637 mm; 12 %; sensitivity ranges; distortion; Coddington; LSA | C-S-*, C-SENS-*, C-DIST-REAL, C-CODD-*, C-LSA; F-S3-SEIDEL, F-S3-STOP-SENSITIVITY, F-S3-DISTORTION-REAL, F-S3-FIELD-CURVES, F-S3-LSA | data; figure-inferred stop |
| Chromatic Correction Strategy | −0.29; element terms; +0.79/−1.08; −0.34; +0.15 | C-COL-*; F-S3-COLOUR-NATIVE, F-S3-COLOUR-CANDIDATE | patent ne/νe; candidate catalogs (labelled) |
| Conditional Expressions | 0.184 / 0.0275 / 0.091 f | C-COND-A4, C-A2, C-A6; S2-CONDITIONS-IMPL | patent claim 3; data |
| Verification Summary | table values; 0.517991 f, 0.0018 f, 0.36 mm, 5.6 σ; 52.4 mm | C-VS-*, C-A8, C-A8-DEFOCUS, C-FRONT-CLEAR; CMP-BFD-PRINTED(-IMPL), S1-DISC-01-RESOLUTION | patent vs computation; data SD (MD-06) |

### 12.6 Manual review of interpretive prose and citations

Checked by reading against the patent page images and the evidence file, not by text matching:

- Patent paraphrases: parent principle (p.1 col.1 lines 1–14: telephoto front member, powerless correction member at
  about 0.2 f, preferably 400 mm); the 200 mm problem (lines 15–30: distortion from the correction member correctable
  there only at the expense of astigmatism; Gaußfehler negative in the 400 mm design, caused mainly by the large
  separation inside the front telesystem; reducing it reduces the tele effect, increasing length and Petzval sum);
  remedy (lines 31–39 and claim 1: correction member also a telesystem, dividing the tele effect); menisci concave to
  the stop favour distortion (lines 39–43; claim 2); spacing conditions (lines 43–51; claim 3, 5 % vs description 6 %).
  Line numbers follow the printed margin numerals of column 1.
- Aberration statements are restricted to computed member splits and finite-ray results with stated state, wavelength,
  field and stop assumptions. No aberration role is inferred from glass class or power sign alone; the Petzval index
  contrast is stated as a thin-lens φ/n estimate. The analysis does not claim that the patent's menisci reduce
  distortion relative to another bending (no counterfactual was computed); it reports that the correction member supplies
  a small share of the distortion sum.
- Product identity is presented as strong correlation, not manufacturer confirmation; secondary contradictions (1958
  batch, dates, blade count, diaphragm relocation) are disclosed. Manufacturer-sourced facts are limited to what
  M-LEITZ-VF2 states (focusing range as subject-to-film distance, 1:12.8). The Leitz-glass sentence rests on the
  Mandler biography (P-WIKI-MANDLER) and is worded as general context, not as identification of these melts.
- Citations: every source is listed with a conventional reference and a usable locator (patent page/column/line;
  leaflet list number and imprint; journal/book details; URLs with access dates). No chat-only tokens appear. The
  Robb–Mercado page range was not re-verified and is omitted rather than guessed.
- The German Wikipedia citation supports only the meaning of *Gaußfehler*; no optical claim about this lens rests on it.

### 12.7 Stage 3 gate disposition

All mandatory CHAT_PREFLIGHT checks for Stages 1–3 pass (55 checks; `mandatoryUnmet` empty; the six LENSVISUALIZER
checks remain `NOT_RUN`, `requiredAt: integration`). The analysis agrees with the unchanged Stage 2 data revision and
with results produced from the final evidence/verifier/data/analysis bytes. Earned gate: `READY_FOR_AUDIT`.
`integrationStatus: INTEGRATION_PENDING`. Stage 4 has not been started.

## 13. Stage 4 — source-first independent audit

Review date 2026-09-30, claude.ai chat sandbox (Python 3.12.3, numpy 2.4.4, scipy 1.17.1, opticalglass 2.0.2 for the
baseline catalog search, PyMuPDF 1.28.2 for page rendering, Node 22 with Prettier 3.9.9 and TypeScript 5.9.3 for the
real-tool checks). Controlling references re-read from the project mount: LensPatentStage4Audit.txt,
LensPatentChatProtocol.md and LensPatentDossierContract.md (CHAT-1.0), LensPatentWorkflowGuide.md, LENS_DATA_SPEC.md,
LENS_ANALYSIS_SPEC.md, LENS_MOUNT_FORMAT_OPTIONS.md, defaults.ts and prettierrc.json (hashes in the manifest).

### 13.1 Inputs and exposure

The nine Stage 3 files arrived as individual uploads with underscore filenames (`LeicaTelyt200mmf4_data.ts` etc.). All
nine SHA-256 values equal the Stage 3 manifest entries; the canonical dotted names were restored without byte changes.
The candidate `.data.ts` and the job card were displayed in the chat before the baseline began, so the candidate's
scale, computed EFL/BFD, stop split and stop SD, semi-diameters, glass labels and the 3.0 m close-focus state were
visible. The analysis, audit, evidence, results, manifest and verifier were opened only after the baseline fingerprint
was frozen. Independence is therefore procedural (fresh extraction and auditor-written code), not blind.

### 13.2 Pass A — frozen baseline

- Re-extraction from the rendered page images (600 dpi crops of the ~313 dpi 1-bit scans): description table (PDF p.1
  col. 2) and claim-4 table (p.2 col. 4) are identical; header f = 1,00, 1:4,0, Bildwinkel 12°, ne/νe on the e-line,
  a8 = Schnittweite. Condition text: description 2 % < a2 < 6 %, claim 3 2 % < a2 < 5 % (DISC-02 confirmed).
- Stop: a pixel fit of drawing sheet 1 (vertex lines r1–r8 against the printed spacings, residual ≤ 4.3 px) places the
  diaphragm bars 0.0200–0.0219 f ahead of r5 (centre 0.0209 f; local r4–r5 scale 0.0203 f).
- Fresh y-u trace and separate matrix code: f = 1.001548, BFD = 0.517991 f (printed 0.5162; +0.0018 f = +0.358 mm),
  track 187.098 mm, TL/EFL 0.934, element f +90.59 / −144.90 / +175.24 / −145.61 mm, front member 200.03 mm,
  correction member −1492.4 mm, Petzval × f 0.315 (radius 637 mm), close state at 3.0 m subject-to-film: last gap
  119.2969 mm, extension 15.70 mm, m = −0.0784.
- A single-digit misprint scan finds several edits (a6 0.0916, a2 0.0279, r2 −1.4025, …) that move the BFD near 0.5162
  with f ≈ 1.000; the explanation is not unique and no source correction is adopted.
- Glass: unseeded C′/e/F′ search of current Schott, OHARA, HOYA, CDGM, HIKARI and Sumita, plus the historical
  Robb–Mercado (1983) Buchdahl tables evaluated with auditor code at λ0 = 0.574 µm (verified by reproducing catalog nd;
  the opticalglass `RobbCatalog` loader evaluates these rows about the d-line and was not used). Nearest: L1 569631 /
  PSK2 class; L2 SF10 (728284); L3 historical OHARA LAF8 (no current glass within 0.0115); L4 K10.
- Fingerprint (sha256 of canonical JSON, sorted keys, compact separators) frozen before reconciliation:
  `42e2e47efa994d3da9fa4611cff61627c80918f836b30537a984dc5d800fe27c`. The content is retained unchanged in
  `evidence.independentPass.independentBaseline` and `results.independentBaseline`; check S4-BASELINE-FINGERPRINT
  recomputes it on every run.

Post-freeze annotations (the baseline itself is not rewritten): PFA-01 the baseline's `realRaySA_e_f.fullAperture`
value was traced at 0.0624 f entrance height (about f/8), not f/4; the f/4 rim value is +0.20 mm and the a8 conclusion is
unchanged. PFA-02 the adopted 4.08 mm stop split equals the candidate value seen before the freeze; the auditor's own
range is 0.0200–0.0219 f. PFA-03 the Robb loader note above.

### 13.3 Pass B — reconciliation of the exact candidate

Four views were compared: raw patent (page images), frozen baseline, implemented data (parsed by the strict literal
parser and, separately, by TypeScript 5.9.3 transpile-and-evaluate — numerically identical), and analysis prose.

| Item audited | Independent result | Candidate | Status |
|---|---|---|---|
| Prescription (R, a, ne, νe), ×200, STO split 32.72 + 4.08 = 36.80 | three-way identical (max residual 7e-15 mm) | same | agree |
| EFL / BFD / track / TL/EFL | 200.3095 / 103.5982 / 187.0982 / 0.934 | same | agree |
| Rear principal plane; front member alone | 13.21 mm ahead of V1; f 200.03, track 192.80 (0.964), H′ 7.23 mm | same | agree |
| Shortening and focal change from correction member | 5.71 mm; 0.14 % | same | agree |
| In-situ shares L1–L4, correction net | +2.211, −1.210, +0.746, −0.747; −0.14 % | same | agree |
| EP / f-number | 70.14 mm behind V1, r 25.04 mm, f/4.000 (calibration) | same | agree |
| Real stop-rim entrance / implied f-number | 24.19 mm / f/4.14 | same | agree |
| 3.0 m close state | 119.2969 mm, m −0.07837 (1:12.76) | same | agree |
| Petzval radius; front-only; correction/front | 637 mm; 319 mm; −0.50 | same | agree |
| Seidel member ratios SI/SII/SIII; distortion share | −0.37 / −0.97 / −0.93; 11.6 % | same | agree |
| Stop-sensitivity grid (1–32 mm) | coma −0.957…−0.975; astig −0.914…−0.939 (1–8 mm); distortion share −1.3 %…+20.3 % | same | agree; wording corrected (C4-02) |
| Real distortion 0.5 / 0.7 / 1.0 field | +0.11 / +0.22 / +0.45 % | same | agree |
| Coddington 0.7 field (t, s); corner (t, s); Petzval sag | −0.04, −0.14; −0.0004, −0.27; −0.37 mm | same | agree |
| LSA zones 0.5 / 0.707 / 0.866 / 1.0 of real rim | −0.04 / −0.01 / +0.09 / +0.20 mm | same | agree |
| Native colour BFD(F′) − BFD(C′); elements | −0.29 mm; −6.84, +7.63, −2.48, +1.40 mm | same | agree |
| Candidate-dispersion colour; spherochromatism at rim | −0.34 mm; +0.15 mm | same | agree |
| a8 rounding significance | 5.6 σ (uniform half-unit rounding of all printed inputs) | same | agree |
| Glass residuals quoted in the analysis | PSK2 (−0.00002, −0.08), SF10 (0.00000, +0.09), LAF8 (+0.00004, +0.08), K10 (−0.00001, −0.15) | same | agree |
| Thin-lens L3 + L4 index-contrast factor | 1.58 from curvature (thin-lens) powers; 1.80 only with thick-lens focal lengths | 1.80 labelled "thin-lens estimate" | corrected (C4-01) |
| Geometry | edge ≥ 3.02 mm (L1); rim slope ≤ 24.8°; gap intrusion ≤ 33 % (STO→r5); SD ratios 1.00; aimed-ray envelope inside every SD at ∞ and 3 m (min margin 1.080, r7) | same SDs | pass |

Additional checks without numerical change: exactly one STO, air-surface `elemId: 0`, no cemented joints (doublets
empty, correct), `var` key and base-d equality, `varLabels`, groups referencing valid labels, all-spherical `asph: {}`,
`indexReference: "e"` on every element with native ne/νe, `elementCount`/`groupCount` 4/4, element types against radius
signs (biconvex, biconcave, two menisci concave toward the stop, as claim 2 requires), `specs` strings, header notes and
`focusDescription` numbers, `imageFormat` 135-full-frame, `lensMounts` omitted (no Visoflex id in the taxonomy),
patent metadata (DE 1 096 057 B, 1960, inventors in source order, assignee normalized from "Ernst Leitz G. m. b. H.").
The "B" kind code is the database kind code for this Auslegeschrift; the printed front page shows only
"Auslegeschrift 1 096 057". Kept, recorded here.

Production metadata re-checked from primary/secondary sources on 2026-09-30: the Leitz Visoflex II leaflet
(list 111-40c/Engl., V/62; manufacturer) gives the 200 mm TELYT f/4 range as ∞–9′10⅛″ subject-to-film at 1:12.8,
confirming the 3.0 m constraint; Leica Camera AG classic-store listings identify TELOO/11063 as the Visoflex Telyt
4/200 (identity only); Lippisches Kameramuseum states the M39 connection, 91.30 mm register (28.80 + 62.50 mm) and the
OUBIO/16466 adapter for Visoflex II/III; lens-db lists 4/4, 3.00 m, E58, 15 blades, 12.3°, 1959. No manufacturer source
links the patent to the product; the correlation remains "strong but not manufacturer-confirmed".

Adversarial tests: wrong/mixed example (single example, duplicated table identical), sign and exponent slips (radius
signs vs figure and claim 2), wavelength confusion (e-line retained natively, no d-line label on e-line data),
silent patent correction (a8 kept visible as MISMATCH in CMP-BFD-PRINTED and CMP-S4-BFD-PRINTED), scaling omission,
inactive planes (none), synthetic cement (none), standalone vs in-situ power (both stated and distinguished),
speculative glass identity (class labels and `Unmatched` for L3), guessed focus law (single unit-focus unknown solved
to the manufacturer's distance; independent 1:12.8 check), rounded marketing values (focalLengthDesign 200.3 vs
marketing 200 kept separate), invalid aperture (f/4 calibration labelled as such), stale prose (no Stage-specific or
revision text in the pair). Mutation fixtures in the verifier (5 data, 8 analysis) fail as intended.

### 13.4 Correction register (Stage 4)

| ID | File / location | Old | New | Evidence | Downstream |
|---|---|---|---|---|---|
| C4-01 | analysis, Glass Identification ¶2 | "In a thin-lens estimate, this index contrast makes the L3 + L4 Petzval contribution 1.80 times as negative as it would be with both elements at their mean index." | "Because the two menisci carry nearly equal and opposite in-situ power, this index contrast is what gives the almost powerless member a substantial Petzval effect: computed surface by surface, its Petzval contribution is −0.50 times that of the front member." | CMP-S4-THIN-PETZVAL-FACTOR: 1.80 came from standalone thick-lens focal lengths; curvature-based thin-lens value 1.58. The factor depends on the power convention because L3 and L4 nearly cancel, so it cannot be quoted as a single number. The replacement uses the exact surface-sum ratio (F-S3-SEIDEL SIV, S4-INDEP-POWERS-PETZVAL). | verifier claim C-PETZ-THIN replaced by C-PETZ-CORR; fact F-S3-PETZVAL-MEMBERS now carries both factor variants with a method note |
| C4-02 | analysis, Aberration Correction Strategy, stop-sensitivity ¶ | "The coma balance (−0.96 to −0.98) and the small distortion share of the correction member hold at every position." | "The coma balance (−0.96 to −0.98) holds at every position, and the correction member's share of the third-order distortion sum stays between −1 % and +20 %." | F-S3-STOP-SENSITIVITY and S4-INDEP-SEIDEL grid: share ranges −1.3 % (16 mm) to +20.3 % (1 mm); "small" was unquantified against a nominal 12 %. | new claim C-DIST-SHARE-SENS |
| C4-03 | analysis, metadata block | "**Applicant:** Ernst Leitz GmbH, Wetzlar" | "**Applicant:** Ernst Leitz GmbH" | LENS_ANALYSIS_SPEC: block synchronized with `patentAssignees`, which omits locations. | S3-METADATA-SYNC unchanged (PASS) |
| S4-FIX-01 | verifier, S2-TS-SYNTAX | a typescript package without a JS transpile API (native TypeScript 7) produced FAIL | NOT_RUN with the tool reason; a real diagnostic still FAILs | Replay with TypeScript 7.0.2 failed on `require`, not on the data; TypeScript 5.9.3 transpiles with zero diagnostics | integration-scope check only |

No `.data.ts` value changed. Prettier 3.9.9 `--write` with the project configuration left the file byte-identical
(sha256 `249625481a17d96954f2c487e3c493fd3773d1034965f50f9071ea84f706eb61`, as in Stages 2–3). The corrections were
validated by the same auditor code that found them; no third party re-validated them.

### 13.5 Discrepancies carried forward

DISC-01 (printed a8 = 0,5162 vs computed 0.517991 f) remains a visible MISMATCH; its resolution (MD-03: image plane at
the computed paraxial focus, printed value preserved in evidence) is supported: SA and the F′/C′ lines move focus the
wrong way or too little, and no unique single-value misprint exists. DISC-02 (5 % vs 6 %) is an optional source
wording difference; the example satisfies both.

### 13.6 Quantitative-claim map additions (Stage 4)

| Analysis claim | Fact / check | Governs |
|---|---|---|
| Correction member Petzval −0.50 × front (Glass Identification) | F-S3-SEIDEL SIV; S4-INDEP-POWERS-PETZVAL; C-PETZ-CORR | data file |
| Distortion share −1 % to +20 % over the stop grid | F-S3-STOP-SENSITIVITY; S4-INDEP-SEIDEL; C-DIST-SHARE-SENS | data file, inferred stop |
| All other §12.5 claims | unchanged; each re-derived by an S4-INDEP-* check | as in §12.5 |

Manual prose review: the interpretations of *Vorderglied*, *Korrektionsglied*, *brechkraftlos* (in-situ sense) and
*Gaußfehler* match the German text; the patent line citations (p.1 col.1 lines 1–14, 15–30, 31–43, 43–51; claims 1–3)
were checked against the page images; secondary sources are labelled as such; no APO, marketing or process text.

### 13.7 Final gate

All 61 CHAT_PREFLIGHT checks pass for Stages 1–4 (`mandatoryUnmet` empty), including the real Prettier, TypeScript
syntax and TypeScript loader cross-checks when `--tools-dir` is supplied (without it those three are NOT_RUN at
integration scope). The six LENSVISUALIZER checks — buildLens, validateLensData, real `LensDataInput` type check,
render diagnostics/hidden-trim, runtime glass resolution of the e-line labels (`PSK2 … H-ZK1`, `SF10 (Schott)`,
`K10 (Schott)`, `Unmatched (...)`) and the production build — remain NOT_RUN, `requiredAt: integration`.
Repository-only questions from §11 remain open. Clean-extraction replay of the final archive is recorded in the manifest.
Earned gate: `READY_FOR_BATCH`. `integrationStatus: INTEGRATION_PENDING`.
