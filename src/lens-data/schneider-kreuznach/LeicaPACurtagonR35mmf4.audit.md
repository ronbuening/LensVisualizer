# LeicaPACurtagonR35mmf4 — Construction and Audit Record (Stages 1–4)

## Follow-up diagram and movement review

FIG. 2 and the live section retain the 6.2 mm cemented rim. The reconstructed 0.30 m endpoint increases back focus by 6.1501 mm, moving the whole unit objectward relative to the image. Shift is ±7 mm; there is no zoom or tilt schedule. L4 remains unresolved; no verified compatible BaSF13 dispersion row was found. The historical Schneider legal styles remain distinct in the assignee registry.

## Catalog integration — 2026-10-17

This section records the current catalog decisions. Earlier stages below retain the extraction history and may describe superseded rim or glass choices.

- **Optical-rim source:** US 3,410,632 FIG. 2 / TABLE II (local PDF page 2, 600 DPI). Reduced the uniformly enlarged V′ cemented pair from 7.6 to 6.2 mm, matching the drawn height near adjacent L4′. Retained the front optical rims and excluded mechanical chamfers and leaders from measurement. The 57 mm image circle and ±7 mm shift remain metadata; finite ray samples do not prove unvignetted coverage.
- **Glass:** Six of seven records now have native-e-line-compatible spectral proxies. Added historical HOYA BAFD14 from the official 2026-07-07 AGF for L5′. L4′ remains unresolved: the historical BaSF13 coordinate fit is not a verified catalog dispersion law.
- **Metadata and V2:** Removed redundant Leica branding from the Schneider-Kreuznach display name; Leica R remains the mount. Retained 135 format, 57 mm image circle, shift range and reconstructed unit focus. Source n_e/nu_e are unchanged.


Consolidated construction-stage record. It is not the independent Stage 4 audit. Part A preserves the Stage 1 extraction record as delivered in package `stage1-r1` (its numbers were reproduced unchanged by the Stage 2 verifier run). Part B records Stage 2 data construction. Part C records Stage 3 analysis authoring. Authoritative hashes are in `LeicaPACurtagonR35mmf4.manifest.json`; every number quoted comes from `LeicaPACurtagonR35mmf4.results.json`.

# Part A — Stage 1 record (preserved)

## 1. Job and reference versions

The job card is `LeicaPACurtagonR35mmf4.txt` (sha256 `305e1090…8a65`). It fixes the following:

| Field | Value |
|---|---|
| Patent | US3410632 |
| Lens | Leica PA-Curtagon-R 35mm F4 |
| Embodiment | Example 2 |
| Output stem | `LeicaPACurtagonR35mmf4` |

The primary source is `US3410632.pdf` (621,648 bytes, 7 pages, sha256 `e9684fdc…077f`).

- **Patent:** US 3,410,632, granted 12 Nov 1968.
- **Inventor:** Walter Woltche (printed "Woltche"; "Wöltche" on the drawing sheets).
- **Assignee:** Jos. Schneider & Co. Optische Werke, Kreuznach.
- **Filing:** filed 24 May 1965, Ser. No. 458,189.
- **Priority:** German application Sch 35,253 of 30 May 1964.

The patent does not number its examples. "Example 2" is the second of the three disclosed systems: FIG. 2 / FIG. 2a, TABLE II (col. 4), and the identical table in claim 2 (col. 7).

The controlling project references were read from `/mnt/project/`; their hashes are recorded in the manifest. They are CHAT-1.0 protocol and dossier contract, Stage 1 prompt, workflow guide, LENS_DATA_SPEC, LENS_ANALYSIS_SPEC, LENS_MOUNT_FORMAT_OPTIONS, TEMPLATE_data_ts, defaults.ts, and prettierrc.json.

The CHAT-1.0 documents name `/mnt/data`. This environment uses `/mnt/user-data/outputs/LeicaPACurtagonR35mmf4_stage1/` instead (OI-9); the difference has no content consequence.

## 2. Extraction and conventions

### 2.1 Method

Text extraction of the tables is unusable: the OCR layer garbles signs and decimals. All values were therefore read from rasters rendered with PyMuPDF.

- **TABLE II** (pdf p. 5) at 500 DPI, in two crops.
- **Claim 2 table** (pdf p. 7) at 500 DPI.
- **TABLE IV** (pdf p. 6) at 600 DPI.
- **System prose** (col. 4, lines 40–45) at 400 DPI.

The two printed tables were transcribed independently and compared value by value. They agree on all 13 radii, 12 spacings, 7 nₑ, and 7 νₑ (check `S1-TABLEII-VS-CLAIM2`). The only defect is in the claim-2 member column, which prints "I" without the prime; this is a label typo with no numerical effect. The 12 spacings sum to 130.13, matching the printed total (`S1-TOTAL-D`).

### 2.2 Raw prescription (f = 100, patent units)

| Surface | R | d after | Medium after (nₑ / νₑ) |
|---|---|---|---|
| r1′ | +209.46 | 15.70 | L1′ 1.62287 / 60.06 |
| r2′ | ∞ | 0.35 | air |
| r3′ | +313.89 | 6.28 | L2′ 1.51871 / 63.96 |
| r4′ | +37.09 | 40.47 | air (l₁) |
| r5′ | +378.93 | 17.44 | L3′ 1.70586 / 40.87 |
| r6′ | −209.46 | 0.35 | air |
| r7′ | +54.12 | 17.79 | L4′ 1.70189 / 38.38 |
| r8′ | +52.69 | 9.42 | diaphragm space (l₂) |
| r9′ | −94.38 | 2.79 | L5′ 1.70442 / 34.67 |
| r10′ | +44.80 | 12.21 | L6′ 1.62287 / 60.06 (cemented) |
| r11′ | −63.29 | 0.35 | air |
| r12′ | −302.86 | 6.98 | L7′ 1.69660 / 53.18 |
| r13′ | −80.32 | — | image space |

The system values are stated in col. 4:

- f = 100.
- Aperture ratio 1:4.
- Field angle 75°.
- Back-focal length printed as "113.4 units". This value is contradicted by the patent's own TABLE IV and by calculation (see §6, D-1).

### 2.3 Conventions

- **Axis and signs:** the standard radius-sign convention applies. It is confirmed by FIG. 2 and by the prose descriptions: L1′ is a positive singlet with a flat rear, L2′ a negative meniscus, L3′ positive and biconvex, L4′ a meniscus, L5′ biconcave, L6′ biconvex, and L7′ a positive meniscus. Check `S1-SHAPES-VS-TEXT` confirms the radius signs against these descriptions.
- **Index reference:** e-line throughout. The patent states that nₑ and νₑ are "based upon the E-line". νₑ is computed as (nₑ − 1)/(n_F′ − n_C′). The model retains native e-line coordinates, so every element should carry `indexReference: "e"`; no e→d conversion is proposed.
- **Surfaces and plates:** there are no aspheres, rear plates, filters, or dummy surfaces.
- **Focus states:** only the infinity state is published.
- **Units:** the text calls them "units (e.g. millimeters)", normalised to f = 100.

## 3. Model transformations (proposed ledger; Stage 2 implements)

| ID | Kind | Proposal | Basis |
|---|---|---|---|
| MD-1 | Stop placement | STO inside d8′: 5.28 after r8′, 4.14 before r9′ (±0.2) | FIG. 2 is drawn to scale: 7.09 px/unit reproduces r1′…r9′ within ±2 px, and D lies at 0.55 of the gap. The schematic FIG. 2a gives 0.57. |
| MD-2 | Scaling | s = 0.352 (EFL 35.2 mm) | Manufacturer's effective focal length of 35.2 mm (Schneider data reproduced by Cavina), under the manufacturer-precedence rule. Alternatives are recorded: 0.350 (nominal) and 0.3502 (derived from the drawing). |
| MD-3 | Stop diameter | Calibrate to f/4 | Diameter not published. This is a calibration, not independent evidence. |
| MD-4 | Focus | Unit focus solved for 0.30 m | See §5. |
| MD-5 | Source correction | Use the computed BFD, not the prose 113.4 | See D-1. No prescription value changes. |
| MD-6 | Omissions | None | Source lists no plates or dummy surfaces. |

## 4. Numerical results

### 4.1 Engines and reference checks

- **Two engines:** a sequential y-nu trace and a separately coded ABCD product agree on EFL, BFD, and FFD to better than 1e-9 (`S1-YNU-VS-ABCD`).
- **Analytic reference:** the traced focal length of the plano-convex L1′ equals R/(n − 1) = 336.282 exactly (`S1-ANALYTIC-REFERENCE`).

### 4.2 Raw model (f = 100, e-line, infinity)

| Quantity | Computed | Patent | Result |
|---|---|---|---|
| EFL | 100.0003 | 100 | Reproduced |
| BFD (r13′ → image) | 130.3529 | TABLE IV 130.4; prose 113.4 | TABLE IV reproduced; prose not reproduced |
| BFD/EFL | 1.3035 | "about 1:1 or greater" | Retrofocus verified (BFD > EFL) |
| f_F (L1′+L2′) | −114.59 = −1.146 f | −1.15 f | Reproduced |
| f_B (doublet V′) | +743.70 = +7.437 f | +7.44 f | Reproduced |
| l₁ = d4′ | 0.4047 f | 0.40 f | Reproduced |
| l₂ = d8′ | 9.42 | 9.42 | Reproduced |
| l₃ (r7′ → r11′) | 0.4221 f | 0.42 f | Reproduced |
| \|r_A/r_B\| | 0.5583 | 0.56 | Reproduced |

Other first-order quantities of the raw model:

- **Front focal distance:** 1.963 in front of r1′.
- **Principal planes:** H lies 98.04 behind r1′, and H′ lies 30.35 behind r13′. H′ sitting beyond the rear vertex is the retrofocus signature.
- **Track:** 260.48.

Standalone element focal lengths (thick lens in air, e-line, f = 100):

| Element | Focal length | Ratio to f |
|---|---|---|
| L1′ | +336.28 | +3.36 f |
| L2′ | −81.72 | −0.82 f |
| L3′ | +193.48 | +1.93 f |
| L4′ | +687.79 | +6.88 f |
| L5′ | −42.77 | −0.43 f |
| L6′ | +44.02 | +0.44 f |
| L7′ | +154.92 | +1.55 f |

Group and member focal lengths:

- Front component F′: −114.59.
- Rear component R′: +83.50.
- L3′+L4′: +136.77.
- Rear of the stop (L5′…L7′): +120.78.

The cemented junction r10′ has negative power. The higher-index member, L5′, has the lower ν, so patent condition C8 holds.

### 4.3 Patent conditions

All ten stated conditions (C1–C10) hold for Example 2 (`S1-PATENT-CONDITIONS`):

- **C1:** l₁ < f.
- **C2:** |f_F| < 2 f.
- **C3:** the menisci bracketing the stop are weak. |f_IV′| = 6.88 f exceeds 2 f, and f_V′ = 7.44 f lies between 2 f and 10 f.
- **C4:** |r_A| ≤ |r_B|.
- **C5:** l₂ < 0.15 f.
- **C6:** 0.37 f ≤ l₃ ≤ 0.6 f.
- **C7:** the L4′ thickness of 17.79 lies between l₃/3 and l₃/2 and exceeds l₂.
- **C8:** the cemented surface is negative, and its higher-index constituent has the lower ν.
- **C9:** the first and fourth rear members are strongly collective (f < 2 f).
- **C10:** BFD ≥ f.

### 4.4 Petzval

Computed surface by surface as φ/(n·n′) at the e-line, the Petzval sum is 1.3559 × 10⁻³ per unit. Multiplied by EFL this is 0.1356, and the Petzval radius is −737.5 (−7.4 f).

### 4.5 Scaled model (MD-2, s = 0.352)

| Quantity | Value |
|---|---|
| EFL | 35.2001 mm |
| BFD | 45.884 mm |
| Vertex length | 45.806 mm |
| Track | 91.69 mm |
| FFD | 0.691 mm |

- **Last-lens check:** the Schneider section drawing gives 45.65 mm from the last lens to the focal plane. The model differs by 0.234 mm (0.5%). If the drawing were exact it would imply an EFL of 35.02 mm. This is a correlation observation, not an acceptance gate.
- **Pupils (MD-1):** the entrance pupil lies 22.30 mm behind r1′, and the exit pupil 8.01 mm in front of r13′.
- **Provisional stop:** a physical stop SD of 5.284 mm gives f/4 at infinity. This is a calibration, recorded as the Stage 2 task `S2-STOP-SD-CALIBRATION`.

### 4.6 Field and coverage (paraxial)

- **Patent field:** 75° full field at 35.2 mm gives a 54.02 mm paraxial circle.
- **Manufacturer circle:** 57 mm requires a paraxial full angle of 77.99°, consistent with the manufacturer's quoted 78°.
- **Unshifted frame:** 24 × 36 mm needs 63.15°.
- **7 mm shift requirements:**
  - Along the short side: 52.35 mm circle.
  - Along the long side: 55.46 mm.
  - Toward a frame corner: 57.27 mm.

The patent's 75° design field alone does not cover the long-side shift paraxially; the product's 57 mm specification does. Real-ray distortion and vignetting have not been evaluated at Stage 1.

### 4.7 Close-focus feasibility (MD-4)

This is a paraxial feasibility check of the proposed unit focus, not a reconstruction.

- **Solution:** at 0.30 m object-to-film, a unit extension of 6.150 mm gives magnification −0.1747 (1:5.72). The object is then 202.16 mm from r1′.
- **Consistency:** the third-party smallest object field of 140 × 210 mm corresponds to 0.1714 (1:5.83). The residual of 0.0033 is within the stated ±0.01 rounding tolerance.

## 5. Focus disposition

Proposed status: **`CONSTRAINED_RECONSTRUCTION`**, as a unit-focus helicoid.

| Item | Detail |
|---|---|
| Unknowns | One: the extension Δ. |
| Constraint | Manufacturer close focus of 0.30 m, film-plane reference. |
| Observable | Smallest object field 140 × 210 mm. |

- **Mechanism evidence is inferential.** No source describes internal or floating focus. The design is a compact 7/6 retrofocus with a manual helicoid, and the shift mount moves the whole optical unit. No primary source explicitly states unit focus.
- **Stage 2 obligations:** solve Δ in the data file, state the reconstruction in the header, `focusDescription`, and analysis, and not certify the 0.30 m state as a published finite conjugate.

## 6. Correction and discrepancy register

| ID | Item | Source value | Evidence | Disposition |
|---|---|---|---|---|
| D-1 | Example 2 back-focal length, col. 4 prose | 113.4 units | Prescription gives 130.353. TABLE IV prints 130.4 for Fig. 2a. The same code reproduces Example 1's printed 105.2 (computed 105.240), which validates the reference plane and method. | Prose misprint, probably a digit transposition of 130.4. Raw comparison `CMP-BFD-PROSE` is retained (residual +16.95, not reproduced). Resolution check `S1-BFD-DISCREPANCY-RESOLUTION` passes. No prescription change. |
| D-2 | TABLE IV `s` column | "130.4f" | Values are in units at f = 100. | Notation error; no effect. |
| D-3 | Claim 2 member label | "I" | Should read I′. | Label typo; no numerical effect. |
| D-4 | Field angle | Patent 75° | Manufacturer: 57 mm circle, 78°. | Different quantities (design example vs product). Product metadata follows the manufacturer. Disclose in Stage 3. |
| D-5 | Focal length | Nominal 35 mm | Schneider effective 35.2 mm; Schneider drawing implies 35.02 mm. | Scale to 35.2 (manufacturer). Keep `focalLengthMarketing` at 35. Record the alternative. |
| D-6 | Weight / filter (not modeled) | 310 g, Series VIII (Leica R, third-party) | 280 g, 49 mm (Schneider universal) | Informational only. The two versions differ mechanically. |

No transcription correction to TABLE II was needed. Every printed value was read unambiguously and cross-confirmed by the claim-2 table.

## 7. Glass review

### 7.1 Method

The search was unseeded, on native e-line coordinates, using the metric √(Δnₑ² + (Δνₑ/50)²). Thresholds are Exact < 0.001, Close 0.001–0.003, Equivalent 0.003–0.015, and Inferred > 0.015. Two pools were searched:

- **Current catalogues:** 1,087 glasses from the six vendor files shipped with opticalglass 2.0.2: Schott (2025-01-13), Ohara (2025-03-12), Hoya (2026-04-01), Hikari, CDGM (2024-09), and Sumita.
- **1980 catalogues:** 813 glasses from Schott, Ohara, Hoya, Corning-France, and Chance, via the Buchdahl quadratic fits of Robb & Mercado, *Applied Optics* 22(8):1198 (1983).

For the Robb fits, the reference wavelength was set to λ₀ = 0.574 µm. It was confirmed by reproducing the catalogue nd of BK7, SK16, F2, and SF6. The library's own Robb loader assumes λ₀ = d and is offset by about 6 × 10⁻⁴, so it was not used.

The Robb fits limit νₑ precision to about ±0.2. The dispersion formulas are implemented in the verifier from stored coefficients and match opticalglass to 2e-16 (`S1-GLASS-FORMULAS`).

### 7.2 Results

| Element | nₑ / νₑ | Proposed label | Best replayed residuals |
|---|---|---|---|
| L1′, L6′ | 1.62287 / 60.06 | SK16 (Schott), 620603 dense crown; current N-SK16 | N-SK16 0.0003 (Exact) |
| L2′ | 1.51871 / 63.96 | BK7 (Schott), 517642; current N-BK7 | N-BK7 0.0000 (Exact) |
| L3′ | 1.70586 / 40.87 | BaSF52 (Schott, discontinued), 702410 | 1980 BaSF52 0.0016 (Close; Δnₑ +0.00001). Current 701411 types (H-ZBaF20, BAFD7) show a systematic Δnₑ −0.00028, so they are equivalents, not the source glass. |
| L4′ | 1.70189 / 38.38 | BaSF13 (Schott, discontinued), 698386 | 1980 BaSF13 0.0008 (Exact). Unmatched in current catalogues; nearest N-BASF64 is 0.016 (Inferred). |
| L5′ | 1.70442 / 34.67 | 700348 barium dense flint; BaSF14 (Schott) / BAFD14 (Hoya) class | 1980 BAFD14 0.0007 (Exact), BaSF14 0.0015 (Close). Current nearest is 0.021 (Inferred). |
| L7′ | 1.69660 / 53.18 | LaKN13 (Schott, legacy), 694533 lanthanum crown | 1980 LaKN13 0.0011 (Close) and Ohara LAK13 0.0008 (Exact); current H-LaK6A 0.0005 (Exact). |

### 7.3 Interpretation

- **Supplier:** the unseeded search independently returns Schott legacy types for L3′, L4′, L5′, and L7′. This is consistent with a 1964 German assignee, but it is not proof of the melt or supplier. For L7′ the coordinates cannot distinguish Schott, Ohara, or Hoya.
- **Runtime resolution:** only N-SK16, N-BK7, and H-LaK6A are explicit names that the runtime can round-trip at C′/e/F′. The discontinued types for L3′–L5′ will fall back to Abbe dispersion.
- **Spectral data:** the patent gives no partial-dispersion data, so no APD or apochromatic claim is supported.

Cavina also notes that these glasses have disappeared from modern catalogues.

## 8. Product correlation

### 8.1 Identity

The lens is the Schneider-Kreuznach PA-Curtagon-R 1:4/35, Leica order no. 11202, made by Schneider for Leitz for the Leicaflex/R bayonet. Leica's own Classic store lists it under that name, with a 1970 manufacture year for an early serial.

### 8.2 Manufacturer specifications

| Specification | Value | Source |
|---|---|---|
| Effective focal length | 35.2 mm | Schneider, via Cavina |
| Aperture range | f/4–f/22 | Schneider, via Cavina |
| Close focus | 0.30 m | Schneider, via Cavina |
| Image circle | 57 mm | Schneider and Leitz 1970, via Cavina and lens-db |
| Effective image angle | 78° | Leitz 1970, via lens-db |
| Shift | 7 mm in any direction | Cavina, lens-db |
| Construction | 7 elements / 6 groups | Third-party references |
| Last lens to focal plane | 45.65 mm | Schneider drawing, via Cavina |

### 8.3 Convergent evidence and limits

The following points support the correlation:

- The inventor, assignee, and date match the designer attribution "Walter Woeltche – Jun 1964" and Cavina's account of Wöltche's 1964 design.
- Only Example 2 is 7/6 and f/4; Example 1 is 6/5 at f/2.8, and Example 3 is 8/7 at f/2.8.
- The scaled BFD agrees with the Schneider drawing to 0.5%.

No primary source names this patent or example. The correlation is strong convergent evidence, not manufacturer confirmation.

### 8.4 Mounts

The optics were also sold in the universal Schneider mount system and a dedicated Contarex version. This entry should list `leica-r` only, subject to the user's multi-mount preference (Stage 2 decision).

## 9. Quantitative-claim map (for Stage 2/3 use)

| Future claim location | Fact / result ID | Governing source |
|---|---|---|
| EFL, BFD, retrofocus ratio, track | F-EFL-RAW, F-BFD-RAW, F-BFD-OVER-EFL, F-TRACK-RAW, F-SCALE | TABLE II; MD-2 |
| Principal planes, FFD | F-PRINCIPAL-PLANES, F-FFD-RAW | TABLE II |
| Element and group powers, roles | F-ELEMENTS, F-GROUPS | TABLE II |
| Patent conditions / TABLE IV | S1-TABLEIV, S1-PATENT-CONDITIONS, CMP-TIV-* | TABLE IV; cols. 1–2, 6 |
| Petzval | F-PETZVAL | TABLE II |
| Stop, pupils, f/4 calibration | F-PUPILS-RAW/SCALED, F-STOP-SD-F4-PROVISIONAL | MD-1, MD-3 |
| Coverage and shift | F-FIELD | Patent 75°; manufacturer 57 mm |
| Close focus | F-UNITFOCUS-030, CMP-UNITFOCUS-MAG | MD-4 (reconstruction) |
| Glass labels | F-GLASS; evidence glassEvidence | Catalogue sources |
| BFD misprint | CMP-BFD-PROSE, S1-BFD-DISCREPANCY-RESOLUTION | D-1 |

No analysis prose exists yet. Stage 3 must add a manual review of interpretive claims; this map only establishes which verified numbers are available.

## 10. Stage 1 gate disposition (historical)

All 16 mandatory Stage 1 chat checks pass.

- **Deferred to Stage 2:** `S2-STOP-SD-CALIBRATION` and `S2-DATA-TS` are NOT_RUN, required at stage 2.
- **Deferred to integration:** five LENSVISUALIZER checks are NOT_RUN, required at integration.

The source extraction is complete, the conventions are established, the first-order model is reproducible with two engines, and every required transformation has a documented plan. The only source contradiction (D-1) has a primary-evidence resolution.

**Gate: `READY_FOR_DATA`.**

## 11. Stage 2 tasks (as handed over; see Part B for disposition)

1. Author the data file.
   - Surfaces at s = 0.352, with STO per MD-1.
   - Stop SD calibrated to f/4.
   - `indexReference: "e"` on all elements.
   - Glass labels as in §7.
2. Estimate semi-diameters for the 57 mm circle, including the shift requirement.
   - Check rim slope, edge thickness, cross-gap intrusion, and off-axis containment.
   - Watch the strongly curved r4′ (R = 13.06 mm scaled) and the thin 0.35-unit gaps (0.123 mm scaled).
3. Solve and disclose the unit-focus reconstruction at 0.30 m (MD-4).
4. Set the metadata.
   - `perspectiveControl`: shift ±7 mm, tilt `[0, 0]`, and no pivot (shift-only).
   - `imageFormat: "135-full-frame"` and `imageCircleMm: 57`.
   - Maker per the assignee convention (Schneider-Kreuznach) with Leica branding in the display name.
   - Patent metadata: `patentNumber: "US 3,410,632"`, `patentAuthors: ["Walter Wöltche"]` (confirm the canonical spelling), `patentAssignees: ["Jos. Schneider & Co."]`, `patentYear: 1968`.
5. Run Prettier on the data file with the project configuration.

## 12. Pending integration (Stage 1 view; superseded by B.9)

`integrationStatus: INTEGRATION_PENDING`. The repository checks (`buildLens`, `validateLensData`, type checking, render diagnostics, and runtime glass resolution) remain for the batch session.

Independent review was not performed; that is Stage 4.


# Part B — Stage 2 data construction

## B.1 Inputs, identity and references

The Stage 1 package (`stage1-r1`, manifest sha256 `99ecb95e…a0fc`) arrived with underscore-joined names (`LeicaPACurtagonR35mmf4_evidence.json` etc.). Their bytes matched the Stage 1 manifest hashes exactly; they were renamed to the contract's dotted names without content change. The unmodified Stage 1 verifier, run on the renamed package, reproduced every Stage 1 fact and comparison identically.

The four job-card fields are unchanged. The controlling references were re-read from `/mnt/project/`; their hashes are unchanged from those recorded at Stage 1 (manifest `references`). No reference-revision impact check was therefore required.

Construction inputs bound by this record:

| Artifact | sha256 |
|---|---|
| `LeicaPACurtagonR35mmf4.data.ts` | `a7368c3bb716d87906c11ad227bb76a2bb9979fd42a43c59586feb3663b93e7a` |
| `LeicaPACurtagonR35mmf4.evidence.json` | `3fcd3a06001546d9545466cbfddc7ae41a59f9f812e42be4425eaa4abdf05319` |
| `LeicaPACurtagonR35mmf4.verify.py` | `66a7e2087141991dffad1d713fe5b983dd00348805d03e1339a4de38e125c737` |

## B.2 Reopened construction issues

- **Stop position (MD-1).** FIG. 2 was re-rasterized independently (pdf p. 2, 300 DPI). r1′ and r13′ vertices lie at x ≈ 165 and 1090 px, giving 7.108 px/unit (Stage 1: 7.09). The diaphragm marker D is drawn with a half-height of about 108.5 px, i.e. 15.3 units, against the f/4-calibrated stop semi-diameter of 15.01 units. The Stage 1 position (5.28 units after r8′) is retained; the drawn D height is a consistency observation, not independent stop evidence.
- **Scale (MD-2).** s = 0.352 retained under the manufacturer-precedence rule (Schneider effective focal length 35.2 mm).
- **Mounts.** Only `leica-r` is listed. The universal Schneider and Contarex versions are distinct products whose formula identity is attested only secondarily (MD-11).

## B.3 Transformation ledger as implemented

| ID | Implementation in the data file |
|---|---|
| MD-1 | STO flat air surface between labels "8" and "9": d8 = 1.85856 mm, STO d = 1.45728 mm |
| MD-2 | Every R and d multiplied by 0.352 (exact 5-decimal products; parsed deviation from ledger ≤ 1.4e-14 mm) |
| MD-3 | STO sd = 5.2843 mm → paraxial f/3.99999 (calibration by construction) |
| MD-4 | `var["13"] = [45.8842, 52.0343]`, unit focus |
| MD-5 / MD-8 | Last gap = computed paraxial BFD 45.884213 mm rounded to 45.8842 mm; prose 113.4 not used |
| MD-6 | No omitted plates, filters or dummy planes |
| MD-7 | Patent r1′…r13′ → labels "1"…"13"; no aspheres |
| MD-9 | Semi-diameters from FIG. 2; V′ doublet enlarged to 7.6 mm (B.5) |
| MD-10 | Glass names/classes without six-digit codes; `indexReference: "e"` on all elements |
| MD-11 | Identity, patent and marketed metadata; shift ±7 mm, tilt [0, 0], no pivot |
| MD-12 | `yScFill: 0.4`; other layout fields default (not render-tested) |

The file follows the root-level template (type-only import, `const LENS_DATA`, `satisfies LensDataInput`, default export) with a literal-only payload. Prettier 3.9.9 with `/mnt/project/prettierrc.json` was applied, and `--check` passes.

## B.4 Final-file recomputation

All implemented-model quantities below were computed by `verify.py` from the parsed `.data.ts`, not from a separate copy of the intended data.

**Loader.** A strict TypeScript-literal lexer/parser accepts only the template statements and literal values. It rejected all nine malformed fixtures: duplicate key, spread, call, arithmetic, computed key, bare identifier, trailing tokens, missing `satisfies`, and unterminated string. Separately, the chat run parsed the file with the TypeScript 5.9.3 compiler API: zero parse diagnostics, and a literal payload value-equal to the portable parser's. TypeScript 7.0.2 was also installed, but it exposes no compiler API, so it was not used. Neither is a `LensDataInput` type check.

**Source mapping.** 14 surfaces, 13 radii, 13 spacings, 7 index/Abbe pairs and the elemId pairing (junction "10" carries element 6) all match TABLE II × 0.352 with the MD-1 split (`S2-SOURCE-MAPPING`).

**First order (infinity, e-line, data model).**

| Quantity | Value |
|---|---|
| EFL | 35.2001 mm (y-nu and ABCD agree < 1e-9) |
| BFD | 45.8842 mm = 130.353 units → TABLE IV 130.4 reproduced; prose 113.4 still not reproduced (`CMP-DATA-BFD-PROSE`, residual +16.95 units) |
| BFD / EFL | 1.3035 (retrofocus) |
| Vertex length / track | 45.8058 / 91.690 mm |
| FFD | 0.691 mm |
| H (from r1) / H′ (from r13) | 34.509 / 10.684 mm |
| Entrance pupil | 22.300 mm behind r1, semi-diameter 4.400 mm |
| Exit pupil | 8.008 mm in front of r13 |
| Paraxial f-number | 3.99999 — calibration target, not independent evidence |

**Elements (thick lens in air, e-line, mm).** L1′ +118.37, L2′ −28.77, L3′ +68.10, L4′ +242.10, L5′ −15.06, L6′ +15.50, L7′ +54.53. Stored `fl` values agree within ±0.006 mm.

**Groups (mm).** F′ −40.336; R′ +29.391; V′ doublet +261.783; L3′+L4′ +48.141; rear of stop +42.516.

**Petzval.** 3.852 × 10⁻³ mm⁻¹ surface by surface; Petzval radius −259.6 mm; sum × EFL = 0.13559, which reproduces the Stage 1 source-model value.

**Patent conditions.** All ten conditions C1–C10 hold on the parsed data: l1/f 0.4047, l2/f 0.0942, l3/f 0.4221, fF/f −1.146, fB/f 7.437, |rA/rB| 0.558.

## B.5 Semi-diameters and geometry

No semi-diameters are published. FIG. 2 draws element heights to the same scale as the axial vertices. The measured heights (±2 px ≈ ±0.1 mm), scaled and rounded to 0.1 mm, give the following, with the ledger in evidence MD-9:

| Surfaces | 1–2 | 3 | 4 | 5–6 | 7–8 | STO | 9–11 | 12–13 |
|---|---|---|---|---|---|---|---|---|
| sd (mm) | 19.3 | 17.9 | 11.3 | 7.6 | 6.2 | 5.2843 | 7.6 | 7.2 |
| Basis | FIG. 2 | FIG. 2 | FIG. 2 | FIG. 2 | FIG. 2 | calibrated | enlarged (drawn 6.3) | FIG. 2 |

**Correction C2-1 (doublet V′).** At the drawn 6.27 mm, the exact meridional trace showed rays that pass r9′ reaching the cemented junction r10′ at up to 7.50 mm, because L5′ is strongly divergent. They would be clipped inside the cemented group, which LENS_DATA_SPEC forbids. The upstream-limited maximum at r10′ saturates at 7.503 mm for any r9′ ≥ 6.27 mm. Surfaces 9, 10 and 11 were therefore set uniformly to 7.6 mm. This keeps one shared aperture for the doublet, and all clipping falls at air boundaries. The negative control (junction reset to 6.27 mm) reproduces the junction clipping (`S2-NEGATIVE-CONTROLS`).

**Geometry (`S2-GEOMETRY`).** The rules applied are the current ones; the obsolete sd/|R| < 0.90 and SD-ratio ≤ 1.25 rules are not used.

- **Edge thickness:** positive for every element. Minimum is L6′ at 1.009 mm, then L7′ 1.768 mm and L1′ 2.956 mm.
- **Rim slope:** maximum 59.94° at r4′, against the limit of asin 0.9 = 64.16°.
- **Element SD ratio:** maximum 1.58 (L2′), against the limit of 3.
- **Net cross-gap intrusion:** maximum 41.4% of the gap (8→STO), against the limit of 90%.
- **Conic domain:** not applicable (all-spherical).
- **Focus states:** unit focus leaves every internal gap unchanged, so these results hold at all focus states.

The stricter per-surface reading of the gap rule fails only at 11→12 (197.6% of 0.1232 mm), even though the physical gap widens from 0.1232 mm to 1.0753 mm at the band edge. This is recorded as OI-10 for the real validator.

**Containment (`S2-CONTAINMENT`).** Exact meridional real rays, aimed at the stop, were traced at f/4 (41 stop samples). Three states were covered: INF, MID (focusT = 0.5, linearly interpolated keyframe) and MFD. Image heights ran 0, 5, 10, 15, 17.1, 20, 25 and 28.5 mm. The 28.5 mm bound (the 57 mm circle) covers the ±7 mm-shifted 24×36 frame, whose farthest point is 27.7 mm from the axis.

- The axial f/4 beam passes unvignetted in all states. Smallest axial clearance is 3.4% at r7′.
- The chief ray reaches the 28.5 mm circle edge in all states.
- No ray first-clips at junction "10".

Meridional pupil fraction passing, by image height:

| State | 10 mm | 17.1 mm | 20 mm | 28.5 mm |
|---|---|---|---|---|
| INF | 0.927 | 0.780 | 0.683 | 0.341 |
| MID | 0.927 | 0.780 | 0.732 | 0.463 |
| MFD | 0.927 | 0.805 | 0.756 | 0.512 |

**Field.** The real chief ray for the 57 mm circle has a half-field of 39.42°, i.e. 78.85° full. The paraxial full field is 77.99°, the manufacturer quotes 78°, and the patent example 75°. Distortion at 28.5 mm is −1.51%.

Limitations: meridional plane only (no skew rays), circular iris, and no production render-trim test.

## B.6 Focus reconstruction

Status: **`CONSTRAINED_RECONSTRUCTION`** (unit focus).

- **Solution:** one unknown, the extension Δ, solved by bisection with a monotonic residual: Δ = 6.150063 mm.
- **Stored state:** 52.0343 − 45.8842 = 6.1501 mm, which implies an object-to-film distance of 299.9993 mm (residual −0.0007 mm) and magnification −0.17472 (1:5.72). The object is then 202.16 mm in front of r1.
- **Consistency observable:** the third-party smallest field of 140 × 210 mm gives 0.1714, a residual of 0.0033 against the ±0.01 tolerance.
- **Scope:** no `finiteConjugates` entry is authored, because the state is not published. The reconstruction is disclosed in the data header, `focusDescription`, evidence and here; Stage 3 must disclose it in the analysis.
- **MID keyframe:** a linear interpolation sample (≈ 498 mm object-to-film), used only for containment coverage.

## B.7 Glass review (Stage 2 changes)

**Correction C2-2.** The Stage 1 six-digit codes were removed from the glass strings. Codes encode d-line nd/νd, while the model stores native e-line values. Converting νe to νd through the 1980 Robb fits (±0.2 νd) leaves the last digit ambiguous: the Stage 1 L5′ label 700348 corresponds to an implied νd ≈ 34.93, i.e. 700349.

Names, classes and the Stage 1 residuals are otherwise unchanged. No nC, nF, ng or dPgF is published, so none is stored, and `apd: false` is set throughout. Runtime resolution of the legacy names (SK16, BK7, BaSF52, BaSF13, BaSF14, LaKN13) is integration-pending (OI-11); failure falls back to Abbe dispersion without blocking.

## B.8 Correction and discrepancy register (Stage 2 additions)

| ID | Item | Before | After | Evidence |
|---|---|---|---|---|
| C2-1 | V′ doublet semi-diameters (9/10/11) | drawn 6.27 mm | 7.6 mm | Junction-clipping trace; negative control |
| C2-2 | Six-digit glass codes | e.g. "700348" (L5′) | removed | Line-reference mismatch; implied code 700349 |
| C2-3 | Filenames | `…_evidence.json` etc. | `….evidence.json` etc. | Byte-identical rename; hashes unchanged |
| C2-4 | OI-10 wording in evidence (drafted this stage) | "gap widens … ≥0.64 mm" | measured 0.1232 → 1.0753 mm; strict fraction 1.98 | `S2-GEOMETRY` gaps |

D-1 (prose back-focal length 113.4) remains visible as an unreproduced raw comparison. No prescription value was changed.

## B.9 Quantitative-claim map for Stage 3

| Claim location | Fact / result | Governing source |
|---|---|---|
| Header specs, focalLengthDesign, EFL/BFD/track, retrofocus | F2-FIRST-ORDER; CMP-DATA-EFL/BFD | data.ts (MD-2, MD-8) |
| Pupils, f/4, stop | F2-PUPILS; CMP-DATA-FNO-CALIBRATION (calibration) | MD-1, MD-3 |
| Element `fl`, types and roles | F2-ELEMENTS; S1-SHAPES-VS-TEXT | TABLE II; patent col. 3–4 |
| Group powers, F′/R′ architecture | F2-GROUPS | TABLE II |
| Petzval | F2-PETZVAL | data.ts |
| Patent conditions / TABLE IV | S2-PATENT-CONDITIONS; S1-TABLEIV | patent cols. 1–2, 6 |
| Field 78° / 57 mm, distortion, patent 75° | F2-FIELD | manufacturer; data.ts |
| Vignetting and aperture sizes | F2-VIGNETTING; MD-9 (modeled) | FIG. 2 + trace |
| Close focus 0.30 m, 1:5.72 | F2-FOCUS (reconstruction) | MD-4 |
| Glass names | MD-10; F-GLASS | catalogue evidence |
| BFD misprint | CMP-DATA-BFD-PROSE; S1-BFD-DISCREPANCY-RESOLUTION | D-1 |
| Shift ±7 mm, mount, metadata | F2-METADATA; MD-11 | manufacturer |

No analysis prose exists yet. Stage 3 must add the manual review of interpretive claims and citations.

## B.10 Gate disposition

All 16 Stage 1 checks pass. All 18 Stage 2 checks in `verify.py` pass: 17 individual checks plus the `S2-DATA-TS` aggregate. The two chat-performed checks recorded in the manifest, `S2-PRETTIER` and `S2-TS-AST`, also pass. There is no unresolved substantive blocker. The seven LENSVISUALIZER checks remain NOT_RUN, required at integration.

**Gate: `READY_FOR_ANALYSIS`**, bound to the data/evidence/verifier hashes in B.1 and the results hash in the manifest's Stage 2 checkpoint.

`integrationStatus: INTEGRATION_PENDING`. Pending at integration:

- `LV-TYPECHECK`, `LV-BUILDLENS`, `LV-VALIDATE` (including the OI-10 gap-rule reading).
- `LV-RENDER-DIAGNOSTICS` (layout `yScFill`, render trim).
- `LV-GLASS-RESOLUTION`.
- `LV-METADATA-ALIASES` (maker "Schneider-Kreuznach", assignee "Jos. Schneider & Co. Optische Werke", author "Walter Wöltche").
- `LV-PRETTIER-REPO`.

Independent review is not performed; that is Stage 4.


# Part C — Stage 3 analysis authoring

## C.1 Entry gate

The Stage 2 files arrived individually with underscore-joined names (`LeicaPACurtagonR35mmf4_data.ts` etc.). Every file's bytes matched the `stage2-r1` manifest exactly:

| Artifact | sha256 (unchanged) |
|---|---|
| data.ts | `a7368c3bb716d87906c11ad227bb76a2bb9979fd42a43c59586feb3663b93e7a` |
| evidence.json | `3fcd3a06001546d9545466cbfddc7ae41a59f9f812e42be4425eaa4abdf05319` |
| verify.py (Stage 2) | `66a7e2087141991dffad1d713fe5b983dd00348805d03e1339a4de38e125c737` |
| results.json (Stage 2) | `469b285eaf09a38a28f25ffc94c9531d382fcdd731514a76ee409452ce56dad1` |
| audit.md (Stage 2) | `570c4af8101b660faea31147863ae7e1553c61fe9c8e55c4099484c3949a2d06` |
| manifest.json (Stage 2) | `3a40002e58db248e2fe0d97538620eebc63e645a1dadc51e5691278dc0ef1f88` |

They were renamed to the contract's dotted names without content change (C3-1). All 14 controlling references in `/mnt/project/` hash identically to the Stage 2 manifest, so no reference-revision impact check was needed.

The unmodified Stage 2 verifier was rerun on the renamed package. Its `results.json` was identical to the packaged Stage 2 results in every key except the run timestamp (`environment.runUtc`): 41 checks, no mandatory failures. The `.data.ts` is therefore the approved revision, and the Stage 2 `READY_FOR_ANALYSIS` checkpoint remained valid when authoring began.

## C.2 Data status

**The data file did not change during Stage 3.** Its hash is still `a7368c3bb716…3e7a`, and Prettier 3.9.9 `--check` with `/mnt/project/prettierrc.json` passes. The evidence file is also unchanged. Stage 3 exposed no data or source-model error, so the upstream-correction rule was not triggered. All Stage 1 and Stage 2 checks, comparisons and facts in the Stage 3 results are value-identical to the Stage 2 results.

The data-file role strings were re-read against the new computations. L6′'s role ("the negative cemented junction corrects longitudinal colour") agrees with the junction's C_I sign. The other roles make no quantitative aberration claim.

## C.3 Verifier extension (Stage 3)

`verify.py` now derives Stage 3 from the presence of the same-stem `.analysis.md`. It adds two blocks, both computed from the parsed `.data.ts`; the Stage 1–2 code paths are untouched.

### C.3.1 Optical support computations

| Result | Content | Validation |
|---|---|---|
| `F3-SEIDEL` | Welford-form Seidel S_I–S_V and primary chromatic C_I, C_II per surface, per member, and total. Conditions: e-line, infinity, f/4 marginal ray (EP semi 4.4000 mm), chief ray through the STO centre with paraxial image height 28.5 mm, stop MD-1, δn = (nₑ−1)/νₑ = n_F′−n_C′. Includes paraxial marginal/chief ray heights. | `S3-SEIDEL-CROSSCHECK` (below) |
| `F3-STOP-SENSITIVITY` | Sums recomputed with the stop moved ±0.2 patent units (±0.0704 mm) inside d8′ at fixed f/4 | `S3-STOP-SENSITIVITY`: no member's S_V or C_II sign changes |
| `F3-PETZVAL-GROUPS` | Surface Petzval terms summed by member | Sums to the F2-PETZVAL total |
| `F3-SA-REAL` | Exact longitudinal spherical aberration at 0.25/0.50/0.71/0.85/1.00 of the f/4 pupil; F′–C′ axial and lateral colour by finite-difference paraxial traces | Small-aperture agreement with S_I; colour agrees with C_I/C_II |
| `F3-DISTORTION-PROFILE` | Exact chief-ray distortion at 5–28.5 mm and at the 21.63 mm frame corner; 0.1 mm scan for the extremum | Small-field agreement with S_V |
| `F3-FIELDS` | Coddington tangential/sagittal foci along exact chief rays, relative to the paraxial image plane | Small-field agreement with third-order fields |
| `F3-PROSE-SUPPORT` | l₁, l₂, l₃, rA, rB, junction power, V′ Δnₑ/Δνₑ, per-element S_V/C_I/C_II (singlets and junction), third-order field shift at the frame corner, patent-field image height, maximum ray heights | Direct from data |

**`S3-SEIDEL-CROSSCHECK` evidence** (all PASS):

- S_IV/H² equals the surface Petzval sum to 1e-12.
- Longitudinal spherical aberration of the exact marginal ray at y = 0.25 mm is −0.0011123 mm, against −0.0011276 mm from third order (1.4 %).
- Exact distortion at 1 mm image height is −8.518e-5, against −8.500e-5 from third order.
- The finite-difference F′–C′ focal shift is −0.145928 mm, against −0.145964 mm from C_I.
- Lateral colour at 28.5 mm is −0.041585 mm by finite difference and −0.041585 mm from C_II.
- Coddington tangential and sagittal shifts at 1 mm are −0.0018593 and −0.0018934 mm, matching third order within 5 %.

These comparisons fix the sign convention used in the analysis (transverse = S/(2u′); positive S_V is barrel). They also show that third-order magnitudes are unreliable at full field: S_V predicts −6.9 % at 28.5 mm, while the exact value is −1.51 %. The analysis therefore uses the third-order table only for the direction of each member's contribution and quotes exact-ray values for magnitudes.

The element-level sums exclude L5′ and L6′ individually, because the cemented junction belongs to both. The doublet is reported as member V′ plus the junction r10′ alone.

### C.3.2 Analysis consistency gate

| Check | Method | Result |
|---|---|---|
| `S3-ANALYSIS-SECTIONS` | LENS_ANALYSIS_SPEC H2 order. Aspherical Surfaces is omitted (asph `{}`); conditional sections precede Sources. | PASS |
| `S3-ANALYSIS-METADATA` | Bold metadata block and H1 title vs `patentNumber`, `patentAuthors`, `patentAssignees`, `patentYear`, `subtitle`, `name`, and the element/group counts | PASS |
| `S3-ANALYSIS-ELEMENTS` | One heading per element with its `diagramLabel` and data `type` | PASS |
| `S3-ANALYSIS-DISCLOSURES` | 16 required disclosure phrases, covering scaling, e-line index reference, stop/SD provenance, f/4 calibration, focus reconstruction and reference plane, BFD misprint, field discrepancy, correlation and spectral limits, omitted planes, catalog-derived d-line values, modeled apertures, and third-order limits | PASS |
| `S3-ANALYSIS-STYLE` | No bare `vd` outside code spans, marketing adjectives, process/readiness language, first/second person, APO claims or confidence scores; 100–650 lines (the file has 309) | PASS |
| `S3-ANALYSIS-CLAIMS` | 122 quantitative claims re-formatted from this run's facts/results/data must appear verbatim | PASS |
| `S3-ANALYSIS-NEGATIVE-CONTROL` | An in-memory copy with one mapped number altered must fail the claim map | PASS |

The claim map reads unrounded Stage 3 quantities, so it cannot pass through double rounding. Its first run caught three genuine errors, which were corrected before delivery (C3-3).

## C.4 Correction and observation register (Stage 3)

| ID | Item | Before | After | Evidence |
|---|---|---|---|---|
| C3-1 | Filenames | `…_data.ts` etc. | `….data.ts` etc. | Byte-identical rename; hashes unchanged |
| C3-2 | Draft analysis, identification item 5 | "75° is the closest of the three examples" | The field does not discriminate: Example 3 gives 80°, closer to 78° | Patent col. 5 (TABLE III system: 80°); manual review |
| C3-3 | Draft analysis / claim map (caught by `S3-ANALYSIS-CLAIMS`) | L7′ S_II −0.0866 (double-rounded) | −0.0865 (raw −0.086546) | F3-SEIDEL. The same run also exposed two errors in the draft map itself: an L7′ gap read from the wrong surface index, and double-rounded element/shift values. The map was fixed; the prose was already right. |
| C3-4 | Draft analysis wording, manual review | "patent requires … first and last rear members < 2 f (col. 6)" | "the patent notes …" | Col. 6 states this as an observation on the examples, not a requirement |
| C3-5 | Draft analysis wording, manual review | US 3,350,157 group "flanked by strongly collective members" | "bracketed by two positive lens groups" | Wording of col. 1 of US 3,410,632 |
| C3-6 | Draft analysis, distortion | "shifted-use zone carries less distortion than the frame corner" | "beyond the extremum … progressively less" | The extremum (22.9 mm) lies just outside the frame corner (21.63 mm) |
| C3-7 | Draft sources | Cavina URL path `articles_fotografici`; Robb & Mercado page range 1198–1215 | `articoli_fotografici` (as recorded in evidence); range removed (end page not verified) | evidence `sources` CAVINA; manual citation review |
| S3-O1 | Shift coverage, observation (no data change) | — | A 7 mm shift toward a frame corner needs a 57.27 mm circle (paraxial), 0.13 mm (radius) beyond the published 57 mm. The Stage 2 containment envelope (28.5 mm) covers axis-direction shifts (27.7 mm), not this diagonal case. | F-FIELD; disclosed in the analysis. The data model shifts only along the meridional axis, so this does not affect the implemented model. |

D-1 (prose BFD 113.4) remains an unreproduced raw comparison (`CMP-BFD-PROSE`, `CMP-DATA-BFD-PROSE`). The analysis states it openly in Conditional Expressions and in Verification Summary.

## C.5 Manual review of interpretive prose and citations

A structural or numerical match does not validate an optical explanation. The following were therefore checked by hand against the patent page images and the executed results.

### Patent attributions

Every statement attributed to the patent was located in the source:

| Statement | Location |
|---|---|
| "for photographic or cinematographic cameras" | col. 1 |
| Back-focal ratio "about 1:1 or greater" | col. 1 |
| 3,350,157: ~1:1 aperture, BFD > 50 % f | col. 1 |
| Forward meniscus sign not critical; rear meniscus positive, 2 f – about 10 f | col. 1 |
| \|rA\| ≤ \|rB\| for asymmetrical aberrations | col. 2 |
| l₂ < 0.15 f; l₃ 0.37–0.6 f; "good flattening of the image field" | col. 2 |
| Forward meniscus concentrates rays near the axis; thickness l₃/3–l₃/2 and > l₂ | col. 2 |
| Negative cemented surface over-corrects longitudinal colour; higher-index lens (preferably the biconcave) has lower ν | col. 2 |
| FIG. 2 system: 1:4, 75°, 113.4 | col. 4 |
| TABLE IV | col. 6 |
| First/fourth rear members f < 2 f | col. 6 |
| References cited | col. 8 |

### Computed interpretations

Each rests on a named result and makes no claim beyond it:

- L1′ offsets L2′ (element S_V/C_II).
- L3′/L4′ oppose F′ in S_V and C_II.
- r4′ gives the extreme Petzval and S_I terms.
- L7′ is the main positive S_I.
- The r10′ junction is the largest over-correcting C_I term.
- Field flattening within the frame, with astigmatism opening beyond 25 mm (Coddington).
- Zonal under-corrected spherical aberration (exact rays).

The analysis explicitly avoids inferring any aberration role from glass class or power sign alone. L3′'s flint glass is described, and its C_II contribution is computed, not assumed.

### Source hierarchy

Product facts come from the manufacturer where available:

- Schneider data reproduced by Cavina: 35.2 mm, f/22, 0.3 m, 57 mm, 45.65 mm.
- Leica Camera Classic: order no. 11202.
- Leitz publications via lens-db: 78°, preset diaphragm, 1970.

Third-party sources are identified as such: the Leica Wiki (smallest field, 1970–1996, designer date) and Tauber. No marketing specification was altered.

### New Stage 3 sources

These were used only in Design Heritage and Context and are not model inputs; evidence.json is left unchanged to preserve the Stage 2 binding:

| Source | Retrieved | Supports |
|---|---|---|
| Google Patents record for US 3,350,157 (https://patents.google.com/patent/US3350157) | 2026-09-30 | Title, inventors, 1964-03-30 filing, 1967-10-31 publication |
| Wikipedia, "Angénieux retrofocus" | 2026-09-30 | US 2,649,022 as the basis of the Retrofocus R1 |
| Nikon, "NIKKOR – The Thousand and One Nights No. 17" | 2026-09-30 | PC-Nikkor 35 mm f/3.5 released July 1962, 6 elements/6 groups |

### Citations

Every Sources entry carries a conventional bibliographic reference with patent column/page locators or a URL; no chat-only tokens remain.

## C.6 Quantitative-claim map (Stage 3)

The executed map is `results.json → facts → F3-CLAIM-MAP`: 122 entries, each giving the claim ID, section, exact text, and governing fact/result. Its coverage by analysis section:

| Analysis section | Claims | Governing facts / results (data revision `a7368c3b…`) |
|---|---|---|
| Identification | 2 | F2-FIRST-ORDER; CMP-SCHNEIDER-LASTLENS |
| Optical Architecture (incl. power table) | 18 | F2-FIRST-ORDER, F2-PUPILS, F2-GROUPS, F2-ELEMENTS (unrounded), F3-SEIDEL ray heights, F3-PROSE-SUPPORT, S2-PATENT-CONDITIONS |
| Perspective control | 7 | F-FIELD (recomputed), F2-FIELD |
| Element first lines (nₑ, νₑ, glass, f) | 7 | data.ts `elements` (nd, vd, glass, fl) |
| Element prose L1′–L7′, V′ | 31 | F2-ELEMENTS, F2-GROUPS, F2-PETZVAL, F2-GEOMETRY, F3-SEIDEL, F3-PETZVAL-GROUPS, F3-PROSE-SUPPORT, data.ts radii/gaps |
| Glass Identification | 16 | F-GLASS replayed rows (residuals, catalog-derived d-line coordinates) |
| Focus Mechanism | 4 | data.ts `var`, F2-FOCUS, 210/36 field ratio |
| Aberration Correction Strategy | 20 | F3-SEIDEL (group table and totals), F3-DISTORTION-PROFILE, F3-FIELDS, F3-SA-REAL, F2-PETZVAL, F3-PROSE-SUPPORT |
| Conditional Expressions | 11 | S1/S2-PATENT-CONDITIONS, F2-ELEMENTS, F2-FIRST-ORDER, F-BFD-RAW, F-SIBLING-EX1 |
| Verification Summary | 6 | F2-FIRST-ORDER, F-EFL-RAW, F-BFD-RAW, F2-PUPILS, data.ts STO, F2-VIGNETTING |

Some statements in the analysis are not mapped numerically. They are covered by the manual review in C.5 and by the Stage 1–2 checks:

- Patent-printed values quoted as source facts (TABLE IV entries, 130.13, 17.79 units, 9.42 units).
- Manufacturer values (35.2 mm, 57 mm, 78°, 45.65 mm, 0.30 m, f/22, 7 mm).
- Qualitative sign and order statements.

## C.7 Gate disposition (Stage 3)

**Check results:**

- All 16 Stage 1 checks pass.
- All 18 Stage 2 verifier checks pass, plus the two chat-recorded Stage 2 checks (`S2-PRETTIER`, `S2-TS-AST`). Prettier was re-confirmed on the unchanged data file at Stage 3.
- All 9 Stage 3 checks pass: `S3-SEIDEL-CROSSCHECK`, `S3-STOP-SENSITIVITY`, and the seven `S3-ANALYSIS-*` checks.
- The seven LENSVISUALIZER checks remain NOT_RUN, required at integration.
- There is no unresolved substantive blocker.

**Replay:** the packaged ZIP was extracted into a clean directory. The checks confirmed exact 9-file membership and that every file's sha256 matched the manifest. The packaged verifier was then run there (exit 0, 50 checks, no mandatory failures), both with and without `--refs-dir`. With `--refs-dir /mnt/project` the regenerated results equal the packaged `results.json` in every key except `environment`. Without it, the only difference is the `S2-TAXONOMY` method label (live reference vs recorded snapshot), which is expected.

**Gate: `READY_FOR_AUDIT`**, bound to the data/evidence hashes above, the analysis, verifier and results hashes in the manifest's `stage3Checkpoint`, and Python 3.12.3 with the standard library only.

`integrationStatus: INTEGRATION_PENDING`. Pending at integration: `LV-TYPECHECK`, `LV-BUILDLENS`, `LV-VALIDATE` (including the OI-10 gap-rule reading), `LV-RENDER-DIAGNOSTICS`, `LV-GLASS-RESOLUTION` (OI-11), `LV-METADATA-ALIASES`, and `LV-PRETTIER-REPO`.

Independent review has not been performed. This record makes no independence claim; the source-first audit is Stage 4.

# Part D — Stage 4 source-first independent audit

## D.1 Job, candidate identity and references

- Job card fields unchanged: `US3410632` / Leica PA-Curtagon-R 35mm F4 / Example 2 / `LeicaPACurtagonR35mmf4`.
- Candidate received as individually uploaded files named `LeicaPACurtagonR35mmf4_<artifact>`; every byte stream matched the stage3-r1 manifest (data `a7368c3b…`, analysis `e6b5b715…`, evidence `3fcd3a06…`, verifier `ceef2e28…`, results `28965618…`, audit `8065e2ce…`, manifest `bc9b30ad…`, patent `e9684fdc…`, card `305e1090…`). Canonical dotted names are restored in this dossier.
- Controlling references: project copies of LENS_DATA_SPEC, LENS_ANALYSIS_SPEC, TEMPLATE and defaults are byte-identical to LensVisualizer commit `7a345ea` (2026-09-29). The project LENS_MOUNT_FORMAT_OPTIONS.md differs from the repository copy only by added cinema formats (normal-8, super-8, 16mm, 35mm cinema) and their sources; `leica-r` and `135-full-frame` are unaffected. The project prettierrc.json is identical to the repository `.prettierrc.json`.

## D.2 Exposure and independence scope

Procedural source/method independence only. Before the baseline was frozen, the candidate `.data.ts` was visible in full (automatically displayed attachment), together with the job card, the patent OCR text layer and general project methodology notes. The candidate analysis, audit, evidence, results, manifest and verifier were not opened until after the freeze. The baseline did not take candidate values as inputs, but blindness to the data file's values (scale 0.352, stop split, SDs, glass labels, BFD, close-focus gap) cannot be claimed. The reviewer and the original author are both Claude instances; the independence is of sources, code and procedure, not of reviewer identity.

## D.3 Pass A — frozen independent baseline

- **Extraction.** TABLE II re-read from pdf p. 5 rasterized at 400 DPI; identical value by value with the claim-2 table (pdf p. 7). TABLE IV, col. 4 prose and TABLE I (sibling control) re-read from rasters.
- **Conventions.** nₑ/νₑ (E-line; νₑ from F′/C′), f = 100 units, radii positive when the centre lies to the image side, back focal length measured from r13′.
- **Computation.** New y-nu trace and a separate ABCD product (agreement < 10⁻⁹): EFL 100.00027, BFD 130.3529 (TABLE IV 130.4; prose 113.4 not reproduced), f_F −114.59 (−1.15f), f_B 743.70 (7.44f), l₁ 40.47, l₂ 9.42, l₃ 42.21, |r_A/r_B| 0.558, Petzval 1.356 × 10⁻³ units⁻¹. TABLE I gives BFD 105.24 against its printed 105.2, confirming the reference plane.
- **Figure.** FIG. 2 measured at 300 DPI (7.100 px/unit): diaphragm D at 0.551 ± 0.03 of d8′ from r8′; drawn half-heights consistent with the modeled SDs (L1′ 19.3, L2′ 17.9/11.4, L3′ 7.6, L4′ 6.2, V′ drawn 6.2, L7′ 7.1 mm at s = 0.352).
- **Glass.** Unseeded search of the current Schott/Ohara/Hoya/CDGM/Hikari/Sumita catalogs and the 1980 Robb & Mercado catalogs. A defect was found in `opticalglass` 2.0.2: `RobbCatalog.create_glass()` expands the Buchdahl polynomial about the d-line instead of 0.574 µm (it returns BK7 nd 1.51738). The baseline re-implemented the fit with λ₀ = 0.574 µm (BK7 nd 1.51680, SK16 1.62041).
- **Fingerprint.** sha256 of the canonical JSON of the baseline object: `5cc52746b324d08b59dd3cf22130c932ce77572c4157904cfc77c5dd49ed5ef7`, stored unchanged in `evidence.independentPass.independentBaseline` and re-checked by `S4-BASELINE-FINGERPRINT`.

## D.4 Pass B — reconciliation of four views

| Item | Raw patent | Independent baseline | Implemented data | Analysis |
|---|---|---|---|---|
| Prescription | TABLE II = claim 2 | re-entered, agrees with Stage 1 transcription (`S4-EXTRACTION-AGREEMENT`) | every R, d = baseline × 0.352 to 10⁻⁹; STO split 0.5605 of d8′ inside the baseline band | quoted values agree |
| Scale | f = 100 | 0.351999 for 35.2 mm | 0.352 (EFL 35.2001) | disclosed |
| BFD | 130.4 / prose 113.4 | 130.353 | 45.8842 mm | misprint disclosed (C4-2) |
| Stop | drawn only | 0.551 ± 0.03 | 0.5605; sd f/4-calibrated | disclosed as calibration; real-ray consequence added (C4-6) |
| Focus | infinity only | — | unit focus, 52.0343 mm at 0.30 m | CONSTRAINED_RECONSTRUCTION disclosed |
| Glass | nₑ/νₑ | legacy Schott classes | labels as baseline | as baseline |

The transformation ledger (MD-1…MD-12) was reviewed as model transformations, not source transcriptions. No silent patent correction, sign/exponent slip, wrong index reference, unit omission or synthetic cement was found. Counts (7/6), shapes, the single STO, the junction elemId (surface "10" → element 6), var/base-d agreement and the absence of rear plates all hold.

## D.5 Independent recomputation from the final data file

The Stage 4 section of `verify.py` has its own literal parser (negative fixtures: duplicate key, trailing content, spread syntax, unterminated string, missing `satisfies` — all rejected), paraxial, exact meridional ray, Coddington, Welford-Seidel and glass-replay code. From the final `.data.ts` it reproduces:

- **First order:** EFL 35.20010 mm; BFD 45.88421 mm (retrofocus, BFD/EFL 1.304; TL/EFL 2.60, not telephoto).
- **Cardinal points and pupils:** H 34.51 mm behind r1′; H′ 10.68 mm behind r13′; entrance pupil 22.30 mm behind r1′; exit pupil 8.01 mm before r13′; paraxial f/3.99999 (calibration).
- **Powers and Petzval:** all standalone and group focal lengths; Petzval 3.852 × 10⁻³ mm⁻¹.
- **Unit focus:** 0.30 m gives 52.03428 mm, 202.16 mm, m = −0.1747 (1:5.72).
- **Geometry:** minimum edge 1.009 mm (L6′); maximum rim slope 59.94° (r4′); net cross-gap intrusion negative except 4→5 (15.6 % of 14.245 mm).
- **Seidel:** group table identical to four decimals; H = 3.5625 mm.
- **Exact rays:** distortion −2.35 % (corner), extremum −2.38 % near 22.95 mm, −1.51 % at 28.5 mm, real full angle 78.85°; Coddington fields at the corner and circle edge; spherical aberration −0.120/−0.130/−0.089 mm; colour −0.146/−0.042 mm.

New findings:

- **Dense field scan.** At 0.1 mm steps the in-frame maximum is the sagittal focus, −0.301 mm at 17.6 mm image height. The construction claim sampled only 5, 10, 15 and 21.63 mm.
- **Paraxial stop calibration.** An exact axial ray at the f/4 pupil radius (4.400 mm) meets the stop plane at 5.417 mm (stop sd 5.2843) and is stopped. The exact stop-limited beam is 0.977 of the pupil radius (4.298 mm, f/4.10 on axis), with spherical aberration −0.100 mm at that margin. No other surface limits the axial beam.
- **Vignetting definition.** The construction figures 0.683/0.341 are the fraction of 41 stop-plane samples (28/41, 14/41), reproduced exactly. Measured as a chord of the entrance pupil relative to the f/4 pupil they would be 0.885/0.597, so the definition must be stated.

## D.6 Correction and discrepancy register (Stage 4)

| ID | File / location | Old | New | Source / evidence | Downstream |
|---|---|---|---|---|---|
| C4-1 | data.ts `patentAssignees` | "Jos. Schneider & Co. Optische Werke" | "Jos. Schneider & Co., Optische Werke" | LensVisualizer `patent-assignee-validity.mjs` alias table; corpus canonical (13 Schneider files); real `patentMetadata.test.ts` FAIL before / PASS after | C4-8; no optical effect; data re-formatted with Prettier (unchanged layout) |
| C4-2 | analysis, Conditional Expressions | "…a misprint, probably a digit transposition of 130.4." | "…a misprint." | 130.4 → 113.4 is not a transposition | wording only |
| C4-3 | analysis, Third-order distribution | "dimensionless in the Welford normalization; S_IV is the Petzval sum" | "Welford form, in millimetres; S_IV is the Petzval term" | Welford sums carry length (H = 3.5625 mm) | wording only |
| C4-4 | analysis, Field curvature | "at the sampled heights … within 0.28 mm" | "at every image height … (0.1 mm) … within 0.31 mm; sagittal −0.30 mm near 17.6 mm" | dense Coddington scan | construction claim AB-FLAT retired; S4C-FLAT/-WORST added |
| C4-5 | analysis, Spherical aberration | "returning to −0.089 mm at the margin" | adds "paraxial f/4 pupil margin … stop-limited margin (0.977) −0.100 mm" | exact trace vs modeled stop | S4C-SA, S4C-SA-STOP |
| C4-6 | analysis, Verification Summary | "f/4 axial beam passes unvignetted"; "meridional pupil fraction passing" | "no surface other than the stop limits the axial beam"; stop-limited f/4.10 disclosure; "41 equally spaced meridional rays across the stop diameter" | exact trace | S4C-STOP-REAL, S4C-VIG |
| C4-7 | analysis, Design Heritage | "The first shift lens for a 35 mm SLR was Nikon's PC-Nikkor…" | "Nikon's PC-Nikkor … preceded it as a perspective-control lens for 35 mm SLRs." | Nikon No. 17 supports the July 1962 date and 6/6 construction, not the superlative | citation unchanged |
| C4-8 | analysis, Assignee line | "Jos. Schneider & Co. Optische Werke, Kreuznach" | "Jos. Schneider & Co., Optische Werke, Kreuznach" | consistency with C4-1 (punctuation normalized; printed form lacks the comma) | S3-ANALYSIS-METADATA |
| C4-9 | data.ts header, NOTE ON SCALING | "EFL 100.0003 → 35.2000 mm" | "EFL 100.0003 → 35.2001 mm" | 100.00027 × 0.352 = 35.20010 (`S4-FIRST-ORDER`); the analysis already states 35.2001 | comment only; LensVisualizer checks re-executed on the final bytes with identical outputs |

Retained discrepancies:

- **Prose back focus.** The prose 113.4 remains a visible failed source comparison (`S4-SRC-BFD-PROSE`). It is resolved by `S4-BFD-DISCREPANCY-RESOLUTION`, not by a tolerance change.
- **OI-10 resolved.** The real `validateLensData._checkCrossGapOverlap` evaluates `sag(curr) − sag(next) ≤ gapSagFrac × gap` (net form).
- **Correction-validation independence.** Corrections were made and re-validated by the same Stage 4 reviewer. C4-1 was validated by the real repository test; C4-4…C4-6 by the Stage 4 code only.

## D.7 Glass review

Labels are upheld. Replayed residuals against the stored excerpts:

| Element | Match | Residual |
|---|---|---|
| L1′/L6′ | N-SK16 | 0.0003 |
| L1′/L6′ | 1980 SK16 fit | 0.0041 (νₑ fit precision ±0.2) |
| L2′ | N-BK7 | 0.00002 |
| L3′ | BaSF52 (1980) | 0.0016 |
| L4′ | BaSF13 (1980) | 0.0008 |
| L5′ | BAFD14 (1980) | 0.0007 |
| L5′ | BaSF14 (1980) | 0.0015 |
| L7′ | LaKN13 (1980) | 0.0011 |
| L7′ | H-LaK6A | 0.0005 |

No six-digit d-line code is applied to the e-line rows, no spectral fields are stored, and there is no APD or apochromatic claim.

Runtime resolution was executed: L3′–L5′ legacy names are not in the runtime catalog and fall back to Abbe-number dispersion, which is non-blocking per LENS_DATA_SPEC. Coordinate agreement does not establish supplier or melt.

## D.8 Production metadata re-check (retrieved 2026-09-30)

- **Leica Wiki:** order no. 11202, production 1970–1996, 7/6, f/4–f/22, 0.30 m, smallest field 140 × 210 mm.
- **lens-db, quoting LEICA photography 1970 No. 2:** 57 mm image field, effective angle 78°, manually preset aperture; Schneider PA-Curtagon announced 1967.
- **Nikon, NIKKOR — The Thousand and One Nights No. 17:** PC-NIKKOR 35mm f/3.5 released July 1962, 6 groups / 6 elements.
- **Google Patents US3350157A:** High-speed camera objective; filed 1964-03-30; granted 1967-10-31; Solisch, Wöltche.
- **Cavina (search snippet, crediting Schneider data):** effective focal length 35.2 mm, f/22, 0.3 m.
  - The page itself refuses automated retrieval, so the 45.65 mm last-lens-to-film figure was not re-verified in Stage 4 and remains a Stage 1–3 record.
  - Manufacturer values govern `focalLengthDesign` (35.2), `imageCircleMm` (57), `closeFocusM` (0.3) and the ±7 mm shift.

## D.9 Manual review of interpretive prose and citations

- **Patent attributions (cols. 1, 2, 4, 6).** Checked against the raster text.
  - The stop-sandwich, |r_A| ≤ |r_B|, thickness and negative-junction rules are stated as the patent states them.
  - Computed interpretations are labelled as model properties: third-order distortion and lateral-colour offsets, and higher-order field flattening.
- **Over-mechanistic single-surface claims.** The two concerning r4′ and r13′ were rechecked. Both are expressed as contributions within a balance, not as sole causes.
- **Superlatives.** "Largest", "steepest" and "thinnest" were re-verified against per-surface values. The one unsupported superlative (C4-7) was removed.
- **Sources list.** Consistent with the cited locations. The Leica Classic page supports only the product and order-number identity.
- **Analysis citation of Cavina.** The 45.65 mm figure remains attributed to Cavina's reproduction and is not independently re-verified here.

## D.10 Repository checks (LENSVISUALIZER scope)

Executed against a local clone of LensVisualizer `7a345eaa48bfd855d96b9699558f22f2bfb10a9e` with the final data file as a root-level draft:

- **Environment.** Node 22.22.2 (the repository requests ≥ 24.15 — a recorded deviation), TypeScript 5.9.3, vitest 4.1.11, Prettier 3.8.1.
- **Results.**
  - `validateLensData`: no errors.
  - `buildLens`: EFL 35.2001, epSD 4.4000, FOPEN 4.
  - Type check (tsc restricted to the data file): pass.
  - Render diagnostics at focusT 0 / 0.5 / 1: maximum trim 0.00 mm.
  - Glass resolution: 4/7 resolved, 3 fallback.
  - `patentMetadata.test.ts`: pass after C4-1; failed on the stage3-r1 bytes.
  - Prettier check: pass.
- **Binding.** The record is bound to data sha256 `e70e3dc3b58d565620d719fa7d0b27082c5e1c3549f3e5d0194bcc33ec8e43af` (`S4-LV-RECORD-BINDING`).
- **Not performed.** No `generate:metadata`, full test suite, corpus sweep or build was run. The portable verifier reports these checks as recorded, not replayed.

## D.11 Stage 4 quantitative-claim map

`S4-CLAIMS` generates literal analysis text from Stage 4 computations and requires its presence:

| Claim IDs | Section | Source |
|---|---|---|
| S4C-EFL, S4C-BFD, S4C-H, S4C-HP, S4C-EP, S4C-XP, S4C-CHIEF | Optical Architecture | parsed data, Stage 4 paraxial |
| S4C-PZ, S4C-SEIDEL-TOTAL, S4C-WELFORD-UNITS | Aberration Correction Strategy | Stage 4 Petzval/Seidel |
| S4C-D-CORNER, S4C-D-EDGE, S4C-FIELD-REAL | Aberration / Perspective control | Stage 4 exact chief rays |
| S4C-FLAT, S4C-FLAT-WORST, S4C-CORNER, S4C-EDGE | Field curvature | Stage 4 Coddington (0.1 mm scan) |
| S4C-SA, S4C-SA-STOP, S4C-STOP-REAL, S4C-VIG | Spherical aberration / Verification Summary | Stage 4 exact axial rays, 41 stop samples |
| S4C-FOCUS | Focus Mechanism | Stage 4 unit-focus solve |

The construction claim map (Stages 2–3) is retained and still passes, except AB-FLAT, which is retired in favour of S4C-FLAT. Metadata strings (`specs`, header notes, `focusDescription`) were re-read against the same results; no change was needed.

## D.12 Gate disposition

- **Portable replay.** All mandatory CHAT_PREFLIGHT checks for Stages 1–4 pass (64 checks; 0 mandatory failures).
- **Repository checks.** The targeted LENSVISUALIZER checks listed in D.10 pass.
- **Gate:** `READY_FOR_BATCH`. `integrationStatus: INTEGRATION_PENDING`.
- **Remaining for the batch session:**
  - `generate:metadata` and organization into `src/lens-data/schneider-kreuznach/` (the root-level import path is rewritten there).
  - Full test suite and corpus sweeps under Node ≥ 24.15.
  - Glass-coverage reports.
  - Build and prerender.
