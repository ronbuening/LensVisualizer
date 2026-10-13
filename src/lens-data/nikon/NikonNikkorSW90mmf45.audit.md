# NikonNikkorSW90mmf45 — Construction-Verification Record (Stages 1–3) and Independent Audit (Stage 4)

Construction-verification record by the authoring sessions; not an independent audit. Patent US 4,176,915, Example 1;
lens Nikon Nikkor-SW 90mm f/4.5. Sections 1–9 are the Stage 1 record (statuses in §3 superseded by §10); sections 10–16
are the Stage 2 data-construction record; sections 17–24 are the Stage 3 analysis-authoring record. Earlier
sections are preserved as written; corrections made in Stage 3 are recorded in §18, not by editing them. Sections 25–33
are the Stage 4 source-first independent audit; values quoted in §§10–24 at f = 90 mm describe the superseded
nominal-90 mm scale (see §29, C4-01).

## 1. Job and reference versions

| Item | Identity |
|---|---|
| Job card | `NikonNikkorSW90mmf45.txt`, sha256 `ff7d6930b68f107f8149036c88e7a11d5e8da1c2a709e180a5fd62836ddd2a75` |
| Patent | `US_4176915_A.pdf`, sha256 `ec6fb42d3151dff02872b9b9ee0d729115fa990a8c90b74b61b30016137ff2f3`, 7 pp., image-only |
| LensPatentStage1Extraction.txt | `c06bbde912ac14a0d92cfa436559d55389b6c0395bb77c0a32553c01fb8e5f72` |
| LensPatentChatProtocol.md (CHAT-1.0) | `72ba2a4b28b4f339ad9222f2daa96a467b359cfd486aea5072d15f01741a108e` |
| LensPatentDossierContract.md (CHAT-1.0) | `b6ddc19bf656238ed970137ea49081066d34d7c54f5012b3eed762a771ef159b` |
| LENS_DATA_SPEC.md | `26e79f8ab045e9484a17edc73c902e75c5c4c19b02bca001c645489a19b6b634` |
| LENS_ANALYSIS_SPEC.md | `0cd49c0a05231cb8d273d1f1b1d1ab85eeebcf455b6d33de943a5a02906e99e7` |
| LENS_MOUNT_FORMAT_OPTIONS.md | `44aed8060cfb07a145d6380aad86970dafce46a461ad3ec3cbe93ec08a504a0a` |
| TEMPLATE_data_ts.template | `379e6bd9a52daa621fb361120cde226a9e29cceb0d79dc0e96fd4f5e54b6de51` |
| defaults.ts | `2f013eed8318264f130bd0783fec4458624e53780b7edc83180df00f86b95e1e` |
| prettierrc.json | `6cf80666a5e24499fb5eb5ecf800ee301c9be08fcd26a154ea4ef7c9afcbc0b2` |
| LensPatentStage2Data.txt (Stage 2) | `ece2224a1d6287c729a3a2c3030c9a685e1d19011d489bc0c0eed6dd1384d058` |

Not available in this project: taxonomy source (`lensTaxonomy.ts`; LENS_MOUNT_FORMAT_OPTIONS.md used instead), authoring guide, integration handoff, LensVisualizer repository. Toolchain: Python 3.12.3; PyMuPDF 1.28.2 (page extraction only); opticalglass 2.0.2 (catalog search only, not needed for replay).

## 2. Extraction and conventions

- The PDF has no text layer. All values were read from the native page images (2320×3408 px) by tight crops; no OCR was used.
- Example 1 (p6, col 4) and its reprint in claim 4 (p7, cols 5–6) were transcribed separately and agree in every printed character (check S1-TRANSCRIPTION-DUPLICATE).
- 11 spherical surfaces, 10 spacings, 7 glasses (nd, νd), f = 100, Bf = 69.673, aperture ratio 1:4.5, Σd = 94.04. No aspheres, rear plates, variable spacings or spectral data.
- Sign convention: R > 0 with centre to the image side; confirmed by L1 being described as convex to the object with r1, r2 > 0. Indices are d-line.
- Stop: diaphragm 10 lies in d6 between L2C and L3A (col 2 l.33–34; Fig. 1). No axial position or diameter is published.
- Field: Fig. 1 bundle α = 50°; FIG. 2 (Example 1) astigmatism and distortion plotted to 52°.

## 3. Model transformations (Stage 1 proposals; implementation in §10)

- **MD-01 scale:** s = 90 / EFL = 0.9000226, giving EFL 90.000, BFD 62.700 mm and Σd 84.638 mm.
- **MD-02 stop:** split d6 at the figure-measured position, 2.22 ± 0.18 after r6 at f=100 (fraction 0.611). The drawing fits Example 1 best (RMS 0.21 units; Example 2 0.24; Example 3 0.72). Label it inferred.
- **MD-03 stop size:** calibrate to an entrance-pupil diameter of EFL/4.5. This is calibration, not independent stop evidence.
- **MD-04 semi-diameters:** model them; patent ST2 (rear component effective diameter ≈ 0.55f, i.e. 49.5 mm at f = 90) is a plausibility constraint.
- **MD-05 focus:** unit (bellows) focus with a single var on r11; closeFocusM is a disclosed modeling choice.
- **MD-06:** no omissions. **MD-07:** L3B typed from computation (see DR-01).

## 4. Glass review

Unseeded nearest-neighbour search over 1087 current-catalog rows (Ohara 2025-03 S-series, Schott 2025, Hoya 2026-04, Hikari, CDGM 2024-09, Sumita v14). D = √(Δnd² + (Δνd/50)²). No 1976-era catalogs; previous-edition files failed to parse.

| Element | Code | Nearest (catalog) | Δnd | Δνd | D | Class | Proposed label |
|---|---|---|---|---|---|---|---|
| L1 | 573575 | H-BaK8 (CDGM) | +0.00000 | -0.01 | 0.0003 | Exact | 573575 — barium crown, BaK1 class (N-BAK1 / H-BaK8 coordinate-exact) |
| L2A | 802444 | H-ZLaF1 (CDGM) | -0.00052 | -0.14 | 0.0028 | Close | 802444 — lanthanum flint (catalog unresolved; nearest H-ZLaF1, Close) |
| L2B | 672388 | S-NBH52V (Ohara) | +0.00137 | -0.54 | 0.0110 | Equivalent | 672388 — barium dense flint class (catalog unresolved; nearest S-NBH52V, Equivalent) |
| L2C | 520701 | J-PKH1 (Hikari) | -0.00140 | -0.21 | 0.0044 | Equivalent | 520701 — phosphate crown class (catalog unresolved; nearest J-PKH1, Equivalent) |
| L3A | 607402 | BaF7 (CDGM) | +0.00696 | -0.17 | 0.0078 | Equivalent | 607402 — barium flint class (catalog unresolved; nearest BaF7 class, Equivalent) |
| L3B | 717295 | E-FD1 (Hoya) | +0.00000 | +0.00 | 0.0000 | Exact | SF1 class (717295; Hoya E-FD1 / Ohara S-TIH1 / Schott SF1 coordinate-exact) |
| L4 | 734510 | TAC4 (Hoya) | +0.00050 | +0.05 | 0.0012 | Close | 734510 — lanthanum crown, TAC4 class (Close) |

The supplier is not inferred from the lens brand. Only nd/νd are published, so no nC/nF/ng/dPgF and no apochromatic claim.

## 5. Numerical results (f = 100 source model)

- **First order:** EFL 99.9975; BFD 69.6647; FFD 74.2912 (objectward of r1). Track r1→image 163.7047. H lies 25.706 behind r1; H′ lies -30.333 from r11 (negative means objectward). TL/EFL 1.637, so not a telephoto; BFD/EFL 0.697, so not a retrofocus.
- **Comparisons:** EFL residual -0.0025 against a strict rounding bound of 0.0745, so it is within the bound. BFD residual -0.0083 against a bound of 0.0957. Σd reproduces exactly. The trace and ABCD implementations agree to below 1e-9.
- **Standalone element focal lengths** (thick lens in air): L1 -62.02 (meniscus convex to object); L2A 25.55 (biconvex); L2B -27.57 (biconcave); L2C 88.54 (meniscus convex to object (one face nearly flat, |R|>1000)); L3A 28.46 (meniscus convex to image); L3B -47.68 (meniscus convex to image); L4 -83.56 (meniscus convex to image).
- **Group focal lengths:** G1 (L1) -62.02; G2 cemented triplet (L2A-L2B-L2C) 43.96; G3 cemented doublet (L3A-L3B) 120.75; G4 (L4) -83.56; Front half G1+G2 (incl. d2) 76.11; Rear half G3+G4 (incl. d9) -250.10.
- **Petzval:** surface-by-surface sum 7.063e-05 /mm, giving a Petzval radius of about 14159 at f=100. The field is essentially flat. The thin-element approximation (-5.68e-05) is unreliable for these very thick elements and is shown only for contrast.
- **Conditions:** (1) d9 11.03 < d2 17.86; (2) d3 27.23 > d2; (3) n2 1.80218 > n3 1.67163; |r4| 31.610 < r3 35.943; νd 44.4 > 38.8 < 70.1 and 40.2 > 29.5. All hold.
- **Pupil scenario (informational only):** stopAfterR6=0.000: EP 28.27 behind r1, stop SD 11.72; stopAfterR6=2.223: EP 30.32 behind r1, stop SD 11.40; stopAfterR6=3.640: EP 31.69 behind r1, stop SD 11.19. The f/4.5 entrance-pupil diameter is 22.222. Exact pupil verification is NOT_RUN until Stage 2.
- **Manufacturer consistency:** a 235 mm circle at f = 90 implies a 105.1° rectilinear field, matching the 105° figure. The f/4.5 pair (154 mm vs 80°) implies 81.1°, a 1.1° manufacturer rounding inconsistency that is kept visible. The flange focal distance minus the scaled BFD is 34.7 mm, against 36.7 mm from the inferred stop to the rear vertex. That is plausible for a Copal 0 diaphragm near the flange, but it is a plausibility check, not a constraint.

## 6. Correction and discrepancy register

No transcription corrections and no proposed corrections to the patent.

| ID | Source statement | Evidence | Treatment |
|---|---|---|---|
| DR-01 | Claim 1 (p7 col 5 l.15–17): L3B is a "positive meniscus" | Standalone f = -47.68, negative meniscus convex to image. The table is printed twice and reproduces f. The description (col 2) says only "meniscus". | Data governs; claim wording retained as a source limitation (check S1-DR01). |
| DR-02 | Col 3 l.62–64 cites "FIGS. 3 and 4" for Examples 1 and 3; Brief Description pairs FIG. 3 with the "second embodiment" | The drawings are FIGS. 2 (F/4.5) and 3 (F/4, i.e. Example 3) | Optional source limitation; FIG. 2 is taken as Example 1. |
| DR-03 | Ken Rockwell: "8 elements" | Nikon brochure: 7 elements in 4 groups, matching the patent | Manufacturer governs. |
| DR-04 | Nikon f/4.5 coverage 80° with 154 mm circle | Rectilinear geometry at 90 mm gives 81.1° | Comparison kept visible; non-blocking. |
| DR-05 | Verifier development | The first execution failed S1-MARKETED-CONSISTENCY (the check was over-tight on the full-aperture pair) and S1-GLASS-REPLAY (a tie-ordering tolerance below the stored-row rounding) | Check scope corrected; the mismatch now appears as CMP-COVERAGE-F45. Tie tolerance set to 2e-5. Both recorded here. |

## 7. Product correlation

Convergent evidence:
- Nikon lists 7 elements in 4 groups and 105° / 235 mm coverage.
- Nikon names the SW 90 f/4.5 a "Wakimoto" type with a convex–concave–convex cemented group, matching L2A–L2B–L2C.
- The filter-diameter statement (0.9–1.1f, i.e. 81–99 mm) matches the 82 mm attachment.
- The assignee is Nippon Kogaku K.K.

Limits:
- No primary source names this patent example for the product.
- The SW 75mm f/4.5 is first-order indistinguishable at f = 100.
- Introduction date and the meaning of the "S" suffix are not established.

Proposed metadata (Stage 2):
- `patentNumber: "US 4,176,915"` (no kind code is printed).
- `patentAuthors: ["Ikuo Mori"]`, `patentAssignees: ["Nippon Kogaku K.K."]`, `patentYear: 1979`.
- `lensMounts: ["large-format-lens-board"]`.
- `imageFormat` `5x7` (the manufacturer's label for the 235 mm circle; `4x5` is the alternative), with `imageCircleMm: 235`.

## 8. Focus disposition

`NO_INTERNAL_RECONSTRUCTION`: the lens has no internal motion and is focused by bellows translation of the whole lens. Only the infinity state is published. In Stage 2 the close state follows from the exact conjugate solution for one var (r11 to image). closeFocusM is an undocumented-by-manufacturer modeling choice and must be disclosed.

## 9. Quantitative-claim map (Stage 1 facts)

| Claim | Fact / result | Source |
|---|---|---|
| F-EFL | `99.997488` | calc |
| F-BFD | `69.664717` | calc |
| F-TRACK | `163.704717` | calc |
| F-SCALE | `0.900023` | calc (90 / EFL) |
| F-COUNT | `"7 elements / 4 groups"` | patent table + S-NIKON-LF |
| F-PETZVAL | `7.1e-05` | calc |
| F-NOT-RETRO-NOT-TELE | `{"retrofocus": false, "telephoto": false}` | calc |
| F-L3B | `"negative meniscus convex to image (standalone f ≈ -47.68)"` | calc; contradicts claim 1 wording |
| F-STOP-INFERRED | `0.610757` | figure measurement |

No analysis prose exists yet; the interpretive review is a Stage 3/4 task.

## 10. Stage 2 entry gate and implemented transformations

Entry gate (Stage 2 session):
- Stage 1 files arrived as `NikonNikkorSW90mmf45_<role>` uploads. They were normalized to the canonical
  `NikonNikkorSW90mmf45.<role>` names; the bytes are unchanged and all six hashes match the Stage 1 manifest.
- The Stage 1 verifier replays to identical stable results.
- A fresh 4× crop of the Example 1 table (p6) reproduces every R, d, nd, νd, f, Bf and Σd value.
- The stop was re-measured independently on the Fig. 1 sheet (p2, axis vertical). The diaphragm bar lies at row 1852.5,
  between r6 (1877.5) and r7 (1836.0), a fraction of about 0.60 of d6. Stage 1 measured 0.611 on the front-page
  drawing, so the inference is corroborated. The p2 sheet is used for proportions only: r9 reads about 16 px off a
  linear fit.

| ID | Implemented as |
|---|---|
| MD-01 | s = 0.9000226098600113. R, d and sd rounded to 0.0001 mm. Parsed-model EFL 89.99955 mm; rounding bound ±0.00225. |
| MD-02 | d(6) = 2.0009, d(STO) = 1.2752 mm. Labelled inferred in the data header and on the STO line. |
| MD-03 | STO sd 10.2603 mm gives paraxial EPD 20.000 mm, f/4.49999. This is **calibration**, not evidence of the real diaphragm diameter. |
| MD-04 | SDs modeled (table in §12). |
| MD-05 | var "11" = [62.6995, 73.1463]; closeFocusM 1.0 m (object-to-image), a disclosed modeling choice. |
| MD-06 | No omissions: the patent lists no plates, filters or dummy planes. |
| MD-07 | L3B typed "Negative Meniscus"; the claim-1 wording is noted in the header and in the element role. |
| MD-08 | Last d set to the parsed model's own paraxial BFD (62.6995 mm). The patent Bf scales to 62.7077 mm (CMP2-BFD-PATENT, residual −0.0078 mm within the ±0.086 mm bound). |
| MD-09 | Stage 1 glass labels used verbatim. No nC/nF/ng/dPgF (unsupported by the source); `apd: false`; indexReference omitted (d-line). |
| MD-10 | `lensMounts ["large-format-lens-board"]`, `imageFormat "5x7"`, `imageCircleMm 235`. Patent metadata: "US 4,176,915", "Ikuo Mori", "Nippon Kogaku K.K.", 1979. Design EFL/f-number fields omitted because they equal the marketing values. |
| MD-11 | fstopSeries 4.5–64 and maxFstop 64 (Nikon minimum aperture f/64); yScFill 0.4. Not render-checked. |

Format choice (MD-10): Nikon (the manufacturer, which governs) labels the 235 mm f/16 circle "5×7". The patent's
"4″×5″" is an example of use, not a coverage specification. At f/4.5 the 154 mm circle does not cover the 4×5 diagonal
(162.6 mm); this is a marketed full-aperture figure, not a model result.

## 11. Implemented-model numerical results (parsed `.data.ts`, f = 90 mm)

All values below are recomputed by `verify.py` from the parsed data file, not from a hand-held copy.

| Quantity | Value |
|---|---|
| EFL | 89.99955 mm (y-nu and ABCD agree to < 1e-9) |
| BFD (r11 → paraxial focus, INF) | 62.69951 mm; data d(11) = 62.6995 |
| Σd (r1 → r11) | 84.638 mm (patent Σd × s = 84.6381) |
| Track (r1 → image, INF) | 147.3375 mm; TL/EFL 1.637 (not telephoto); BFD/EFL 0.697 (not retrofocus) |
| FFD | 66.863 mm objectward of r1 |
| H, H′ | H 23.136 mm imageward of r1; H′ 27.300 mm objectward of r11 |
| Entrance pupil | 27.292 mm behind r1, Ø 20.000 mm (paraxial; inferred stop) |
| Exit pupil | 23.328 mm objectward of r11 (virtual), Ø 19.117 mm; pupil magnification 0.956 |
| Petzval (surface by surface) | 7.8515e-05 /mm (radius ≈ 12 736 mm). Equals source value / s within the propagated radius-rounding bound (residual 4.2e-08 vs tolerance 1.36e-07). |
| Close state | BFD 73.1463 mm, extension 10.4468 mm, object 842.21 mm from r1, object-to-image 999.998 mm, m = −0.1161 |

Standalone element focal lengths (thick lens in air): L1 −55.82; L2A 23.00; L2B −24.81; L2C 79.69; L3A 25.61;
L3B −42.91; L4 −75.20 mm. The data `fl` values agree to 2 dp, and the `type` strings agree with the computed shape and sign.

Group focal lengths (standalone, in air):
- G1 (L1): −55.82 mm.
- G2 cemented triplet: 39.57 mm.
- G3 cemented doublet: 108.68 mm.
- G4 (L4): −75.20 mm.
- Front half (L1+L2): 68.50 mm.
- Rear half (L3+L4): −225.10 mm.

All equal the Stage 1 f = 100 results × s. Conditions (1)–(3), claim 3 and the Abbe ordering all hold on the parsed values.

## 12. Semi-diameters and geometry

No semi-diameters are published. Each SD is the largest of three requirements:
1. The real axial f/4.5 marginal ray, with about 8% clearance at the stop-adjacent cemented surfaces.
2. The real chief ray at the marketed 52.5° half-field, with at least 2.4% margin.
3. The default diagram bundle (0.6 × 52.5° = 31.5°, ±0.75 of the stop).

Each result is then capped by the rim-slope rule and compared with clear apertures read from the to-scale Fig. 1 (p2
grid at 12.52 px/mm; reading ±0.5 mm).

| Surface | sd (mm) | Fig. 1 reading | Rim slope | Governing reason |
|---|---|---|---|---|
| 1 | 31.0 | ≈30.9 | 18.9° | Fig. 1; 52.5° chief 27.8 |
| 2 | 21.0 | ≈20.4 | 61.9° | above 52.5° chief (20.50); below rim-slope cap 21.44 |
| 3 | 19.6 | ≈19.6 | 37.3° | Fig. 1; 31.5° ±0.75 needs 17.5 |
| 4 | 12.4 | ≈12.2 | 25.8° | axial 11.41 × 1.08 |
| 5 | 12.0 | ≈12.0 | 17.2° | axial 10.80 × 1.08 |
| 6 | 12.0 | ≈12.3 | 0.3° | axial 10.61 × 1.08 (L2C kept constant) |
| STO | 10.2603 | bar inner edge ≈10.9 | — | f/4.5 calibration |
| 7 | 10.8 | ≈10.4 | 2.7° | axial 10.07 × 1.07 |
| 8 | 10.8 | ≈10.4 | 47.0° | axial 9.60 × 1.12; equal to r7 |
| 9 | 17.8 | ≈17.8 | 25.8° | Fig. 1; 52.5° f/16 bundle 17.2 |
| 10 | 19.0 | ≈18.4 | 56.2° | 52.5° chief 18.29 + 3.9% |
| 11 | 24.5 | ≈23.5 | 37.7° | ST2 ≈ 0.55f (24.75); 52.5° f/16 bundle 23.9 |

Geometry results (S2-GEOMETRY PASS; internal gaps do not change with unit focus, so INF and CLOSE are identical):
- **Rim slope:** maximum 61.9° at r2, against the 64.158° limit (the `defaults.ts` default equals the sphere slope at
  sd/|R| = 0.9).
- **Edge thickness:** minimum at the element's own rims is 1.20 mm (L2C). Over the shared band the minimum equals the
  centre thickness for L1, L2B, L3B and L4. Maximum front/rear SD ratio is 1.65 (L3B).
- **Shared-band cross-gap intrusion** (limit gapSagFrac 0.9):

| Gap | Intrusion | Fraction of gap |
|---|---|---|
| 2→3 | 3.673 mm | 0.229 |
| 6→STO | 0.024 mm | 0.012 |
| STO→7 | 0.230 mm | 0.180 |
| 9→10 | 4.442 mm | 0.447 |

- **Conic domain:** not applicable (all surfaces spherical).

Real-ray containment (S2-OFFAXIS-CONTAINMENT PASS; chat exact meridional trace with SDs as hard apertures):
- The axial f/4.5 bundle passes completely: 41/41 rays at INF and 4/4 at CLOSE.
- Chief rays pass at 10–52.5°.
- The default diagram bundle (31.5°, ±0.75) passes with no clipping at a cemented junction.

Full-aperture meridional transmission falls with field, from mechanical vignetting. This is expected from the published
80° (f/4.5) and 105° (f/16) coverage figures, and the numbers depend on the modeled SDs:

| Field | Rays transmitted | First clipping surfaces |
|---|---|---|
| 20° | 93% | r4, r8 |
| 31.5° | 83% | r3, r4, r8 |
| 40° | 73% | r2, r4, r7, r8, and some rays unaimable |
| 45° | 56% | (see results) |
| 50° | 27% | (see results) |
| 52.5° | 12% | (see results) |

At 52.5° and f/16, the r2 rim (lower part of the bundle) and the r10 rim (upper part) clip parts of the bundle.

Full-aperture rim rays at 20–40° clip at the cemented junctions r4 and r8. This mirrors the narrowing drawn in Fig. 1,
and the diagram bundle is unaffected. Sagittal rays were not traced. This is not the LensVisualizer renderer or its
render-trim sweep.

## 13. Data-file preflight

- **Loader.** The strict literal-only loader in `verify.py` accepts the file with import path `../types/optics.js`. Its
  fixtures reject duplicate keys, spreads, arithmetic, identifiers, computed keys, single quotes, calls and leftover
  statements.
- **Cross-loader (S2-TS-EMIT-CROSSCHECK, CHAT_PREFLIGHT, approximate).**
  - Tool: `tsc` 7.0.2, run against a **stub** `LensDataInput = Record<string, unknown>`.
  - Emit result: the file emitted without errors.
  - Comparison: the emitted module's default export, dumped as JSON (sha256 `98a6df60…de1e34`), equals the Python
    loader's object.
  - Scope: this is a syntax/emit check only, not LV-TYPECHECK.
- **Prettier (S2-PRETTIER-FORMAT, CHAT_PREFLIGHT).** Prettier 3.9.9 `--check` passes with the project
  `prettierrc.json`. Whether the repository pins a different Prettier version is unknown, so LV-PRETTIER stays NOT_RUN.
- **Structure and taxonomy.** Checked against the documented contract and a snapshot of LENS_MOUNT_FORMAT_OPTIONS.md
  (70 mount ids, 21 format ids) stored in evidence. This is not `validateLensData()`.

Mutation tests, run on the real file text in memory; every one is detected:

| Mutation | Checks that fail |
|---|---|
| r8 sign flip | 8 checks |
| r2 sd → 23.5 | GEOMETRY |
| stop sd −1 mm | PUPIL-FNUMBER |
| var base mismatch | STRUCTURE, FOCUS |
| nd5 digit change | MEDIA, SOURCE-MAPPING and others |
| r4 sd → 11.2 | OFFAXIS-CONTAINMENT |

## 14. Discrepancy register additions (Stage 2)

| ID | Item | Treatment |
|---|---|---|
| DR-06 | Patent Bf 69.673 vs computed 69.6647 (f=100) | Image plane at the computed paraxial focus (MD-08); the mismatch remains visible as CMP-BFD / CMP2-BFD-PATENT. |
| DR-07 | Stage 2 verifier development | First run failed two checks; both were defects in the verifier, not the data. S2-PETZVAL used a relative 5e-5 tolerance, but the Petzval sum is a near-cancelling sum and 0.0001 mm radius rounding moves it by 4.2e-08; the tolerance was replaced by the propagated rounding bound (1.36e-07). S2-METADATA compared "7.0 elements" with "7 elements" (a float-formatting error), fixed with an int cast. Before that, a keyword-argument mismatch in the `ynu` calls crashed the run. No data values changed. |

## 15. Quantitative-claim map (Stage 2 facts for Stage 3)

| Claim | Fact | Governing revision |
|---|---|---|
| EFL 90.0 mm, BFD 62.70 mm, track 147.34 mm | F2-EFL, F2-BFD, F2-TRACK | data `b8456c3f…` |
| Not telephoto, not retrofocus | F2-NOT-RETRO-NOT-TELE | same |
| Principal planes, pupils | F2-PRINCIPAL-PLANES, F2-PUPILS | same (stop inferred) |
| f/4.5 | F2-FNUMBER-CALIBRATED | calibration only |
| Element and group powers | F2-ELEMENT-FL, F2-GROUP-FL | same |
| Flat field (Petzval radius ≈ 141 × EFL) | F2-PETZVAL | same |
| Bellows focus, 1.0 m state | F2-FOCUS | modeling choice |
| Stop position | F2-STOP-POSITION | Fig. 1 (inferred) |
| Clear apertures, vignetting | F2-SD-MODELED, F2-VIGNETTING | modeled |
| Coverage 105° / 235 mm | F2-FIELD | S-NIKON-LF |
| L3B negative (vs claim 1) | F-L3B (Stage 1) | S-PAT table |

No analysis prose exists yet. The interpretive and citation review is a Stage 3/4 task.

## 16. Checks, gate and pending integration

All 15 Stage 1 checks: PASS. S1-PUPIL-FNUMBER: NOT_APPLICABLE (superseded by S2-PUPIL-FNUMBER).

Stage 2 CHAT_PREFLIGHT checks (all PASS):
- In `verify.py`: S2-LOADER, S2-STRUCTURE, S2-SOURCE-MAPPING, S2-MEDIA, S2-TRACE-ABCD-AGREEMENT, S2-EFL, S2-IMAGE-PLANE,
  S2-PUPIL-FNUMBER (calibration), S2-ELEMENT-POWERS, S2-PETZVAL, S2-CONDITIONS, S2-FOCUS, S2-GEOMETRY,
  S2-OFFAXIS-CONTAINMENT, S2-GLASS-LABELS, S2-METADATA, S2-LOADER-FIXTURES, S2-MUTATION-DETECTION.
- Executed outside `verify.py` and recorded in the manifest: S2-PRETTIER-FORMAT, S2-TS-EMIT-CROSSCHECK.

LENSVISUALIZER (NOT_RUN, required at integration): LV-TYPECHECK, LV-PRETTIER, LV-BUILDLENS, LV-RENDER, LV-GLASS-RUNTIME.

Integration items:
- Confirm LensVisualizer's half-field for this lens (OI-09). It may not be 52.5° without `projection` metadata;
  `imageCircleMm` 235 bounds only the analysis field.
- Confirm that `maxFstop` 64 is accepted.
- Confirm that render trim is ≤ 0.25 mm, given r2's 61.9° rim slope and r10's 56.2°.

Pre-delivery: package clean replay (PKG-CLEAN-REPLAY) is recorded in the manifest and the delivery report.

**Gate: READY_FOR_ANALYSIS. integrationStatus: INTEGRATION_PENDING.**

## 17. Stage 3 entry gate

- Inputs arrived as `NikonNikkorSW90mmf45_<role>` uploads and were normalized to canonical names; all eight files
  hash-match the Stage 2 manifest (`stage2-r1`, manifest sha256 `4c700ebd…7d45`).
- Controlling references at project level: all ten hashes in the Stage 2 manifest are unchanged. Added for Stage 3:
  `LensPatentStage3Analysis.txt` `ea8663e86890063028c78f13f5553ab4af394356e907091fe468f16d3faf0f65`.
- The Stage 2 verifier replayed to identical stable results (exit 0) before any change.
- Sources re-read 2026-10-01 for citation: S-NIKON-LF (brochure text) and S-NIKON-1001 (Sato, Tale 1). Neither was
  byte-hashed (web text fetch).

## 18. Upstream corrections during Stage 3 (data revised; Stage 2 gate reopened and re-earned)

| ID | Location | Old | New | Evidence |
|---|---|---|---|---|
| DR-08 | `.data.ts` elements[L2B].role | "…lower index than L2A gives the divergent cemented junction r4." | "…its lower index than L2A makes junction r4 converging (condition 3), while r5 against L2C diverges." | S-PAT p6 col 3 ll.18–21 (condition 3 "impart a converging action to the joint surface"); computed φ4 = +0.004589 /mm, φ5 = −0.003727 /mm |
| DR-09 | `.data.ts` header comment; evidence MD-08 text | Bf "scales to 62.7077" | "62.7073" | 69.673 × 0.9000226 = 62.70728 mm. The Stage 2 residual (−0.0078 mm, CMP2-BFD-PATENT) was already computed from the correct value; only the text was wrong. |

Consequences:
- No optical or structured value changed (R, d, nd, νd, sd, var, metadata, glass labels). The parsed object differs
  only in the L2B role string.
- The Stage 2 approval bound to data `b8456c3f…` was invalidated. All Stage 1/2 checks were rerun on the revised bytes
  with the final verifier, analysis absent (stage-2 replay results sha256 `019162a3…3156`, regenerable). All PASS, and
  the implementedModel/sourceModel/F2 facts are value-identical to the Stage 2 results.
- Prettier 3.9.9 `--check` with `prettierrc.json` passes on the revised file (S2-PRETTIER-FORMAT re-run).
- tsc 7.0.2 emit against the stub type re-run; the emitted default export equals the Python loader object
  (S2-TS-EMIT-CROSSCHECK; dump sha256 `7631943f…a7`).
- A new check, S3-DATA-ROLE-JUNCTIONS, compares junction-sign statements in role strings with computed junction
  powers; its mutation fixture shows the pre-DR-08 wording is rejected.
- No other data defect was found. The L1 role ("widens the accepted field ahead of the stop") was reviewed against the
  computed chief-ray angles (L1 compresses 52.5° to 25.5°, letting the lens accept the wide field) and retained.

## 19. Stage 3 computations (verify.py Stage 3 section; parsed revised `.data.ts`, INF, inferred stop)

| Quantity | Result | Method |
|---|---|---|
| Distortion | most negative −0.72 % at 43°; zero at 51.9°; +0.16 % at 52.5° | real chief ray through STO centre vs EFL·tanθ |
| Field curves (f=100 units) | S: −0.53/−1.03/−0.61/+0.09; T: −0.56/−0.59/−0.73/−1.73 at 30/40/50/52° | Coddington t/s along real chief ray |
| Spherical aberration | most negative −0.46 mm at 0.83 aperture; +0.15 mm at full f/4.5 | real axial rays |
| Primary color | axial F−C −0.31 mm; lateral F−C ≤ 0.027 mm to 52.5° | nF,nC = nd ± (nd−1)/(2νd) |
| Chief-ray angles at 52.5° | 25.5° after L1, 58.4° in stop space, 53.9° in image space | real chief ray |
| Junction powers | r4 +0.00459, r5 −0.00373, r8 −0.00746 /mm | φ = (n′−n)/R |
| Proportions | glass path 55.36 of Σd 84.64 mm; rear clear Ø 0.544f; flange plane 2.00 mm behind stop | parsed data + S-NIKON-LF FFD |

Limits: all off-axis results depend on the inferred stop position; chromatic results are primary only.

## 20. FIG. 2 comparison and stop corroboration

FIG. 2 (p3) was read at native resolution after rotation (scales and rows in evidence `figureReadingsFig2`,
reading uncertainty ±0.05 f=100 units, ±0.1 %). The legend does not identify S and M; solid = sagittal is an
inference from the computation.

- S3-FIG2-SHAPE (gated, criteria fixed from figure features): all seven criteria pass — distortion negative 30–50°,
  zero crossing between 50° and 52.5°, minimum at 35–48° with |min| < 1 %; sagittal negative 30–50° and positive at
  52°, most negative at 40°; meridional negative throughout and most negative at 52°; zonal SA undercorrection
  recovering at full aperture.
- Numeric residuals are reported, not gated (CMP3-FIG2-*). At 30–50°: field curves ≤ 0.26 units, distortion ≤ 0.14
  points. The 52° meridional value differs by 0.81 units, and the 52° distortion by 0.24 points; the meridional hook
  is strongly stop-sensitive.
- Stop scan (CMP3-STOP-SCAN-FIG2): RMS of field-curve residuals is minimized at 0.65 of d6 (0.05 grid), against the
  Fig. 1-measured 0.611 used in the model. This corroborates MD-02; the data were not changed to the scan minimum,
  because the scan depends on hand readings and the drawing measurement is the primary inference.

## 21. Glass review for the analysis

The analysis glass table uses the data labels verbatim on the element lines and the Stage 1 replayed distances
(S1-GLASS-REPLAY) in the table. Crown/flint wording checked against νd: L2A, L2B, L3A, L3B are flints (νd < 50);
L1, L2C, L4 crowns. "Dense lanthanum flint" was removed from the L2A table role to match the data label
"lanthanum flint". No supplier is asserted; no spectral fields exist, so no partial-dispersion claim is made.

## 22. Quantitative-claim map (analysis → executed result → governing revision)

All rows are re-rendered by `S3-ANALYSIS-CLAIMS` from the executed values at the stated rounding and must appear
verbatim in the analysis. Governing revision for every row: data `715339104e9a…66b2`, evidence `e66318ec…30f6`;
source facts additionally S-PAT or S-NIKON-LF as named. Element first lines (nd, νd, glass label, f) are covered
separately by `S3-ANALYSIS-ELEMENTS`, and the metadata block by `S3-ANALYSIS-METADATA`.

| Claim | Analysis section | Fact / result pointer |
|---|---|---|
| C-COV235 | Patent Reference | CMP-COVERAGE-F16 (calc from S-NIKON-LF circle) |
| C-COV-MKT | Patent Reference | S-NIKON-LF (evidence.productCorrelation.marketed; source fact) |
| C-FIG1-FIT | Patent Reference | sourceModel.figure.fits (S1-FIGURE-STOP-INFERENCE) |
| C-G-L1 | Optical Architecture | F2-GROUP-FL (implementedModel.groups) |
| C-G-L2 | Optical Architecture | F2-GROUP-FL (implementedModel.groups) |
| C-G-L3 | Optical Architecture | F2-GROUP-FL (implementedModel.groups) |
| C-G-L4 | Optical Architecture | F2-GROUP-FL (implementedModel.groups) |
| C-G-F | Optical Architecture | F2-GROUP-FL (implementedModel.groups) |
| C-G-R | Optical Architecture | F2-GROUP-FL (implementedModel.groups) |
| C-D9D2 | Optical Architecture | F3-PROPORTIONS (implementedModel.analysisSupport.proportions) |
| C-FO | Optical Architecture | F2-EFL/F2-BFD/F2-TRACK/F2-PRINCIPAL-PLANES (implementedModel.firstOrder) |
| C-TYPE | Optical Architecture | F2-EFL/F2-BFD/F2-TRACK/F2-PRINCIPAL-PLANES (implementedModel.firstOrder) |
| C-PP | Optical Architecture | F2-EFL/F2-BFD/F2-TRACK/F2-PRINCIPAL-PLANES (implementedModel.firstOrder) |
| C-EP | Optical Architecture | F2-PUPILS (implementedModel.pupils; inferred stop, calibrated) |
| C-XP | Optical Architecture | F2-PUPILS (implementedModel.pupils; inferred stop, calibrated) |
| C-CHIEF52 | Optical Architecture | F3-CHIEF-ANGLES |
| C-CHIEF30 | Optical Architecture | F3-CHIEF-ANGLES |
| C-L1-PZ | Element-by-Element | F3-JUNCTIONS-PETZVAL-TERMS |
| C-L1-T | Element-by-Element | .data.ts surfaces (parsed) |
| C-L2A-T | Element-by-Element | .data.ts surfaces (parsed); F3-PROPORTIONS (implementedModel.analysisSupport.proportions) |
| C-J4 | Element-by-Element | F3-JUNCTIONS-PETZVAL-TERMS |
| C-J5 | Element-by-Element | F3-JUNCTIONS-PETZVAL-TERMS |
| C-R6 | Element-by-Element | .data.ts surfaces (parsed) |
| C-G2 | Element-by-Element | F2-GROUP-FL (implementedModel.groups) |
| C-G3 | Element-by-Element | F2-GROUP-FL (implementedModel.groups); F3-JUNCTIONS-PETZVAL-TERMS |
| C-L3B-T | Element-by-Element | .data.ts surfaces (parsed); F3-JUNCTIONS-PETZVAL-TERMS |
| C-D9 | Element-by-Element | .data.ts surfaces (parsed) |
| C-REAR-D | Element-by-Element | F3-PROPORTIONS (implementedModel.analysisSupport.proportions) |
| C-L4-PZ | Element-by-Element | F3-JUNCTIONS-PETZVAL-TERMS |
| C-GLASS-D-L1 | Glass Identification | sourceModel.glass (S1-GLASS-REPLAY; catalog-derived) |
| C-GLASS-D-L2A | Glass Identification | sourceModel.glass (S1-GLASS-REPLAY; catalog-derived) |
| C-FIG2-RES | Verification Summary | F3-FIG2-COMPARISON (max absolute residual at 30–50°) |
| C-GLASS-D-L2B | Glass Identification | sourceModel.glass (S1-GLASS-REPLAY; catalog-derived) |
| C-GLASS-D-L2C | Glass Identification | sourceModel.glass (S1-GLASS-REPLAY; catalog-derived) |
| C-GLASS-D-L3A | Glass Identification | sourceModel.glass (S1-GLASS-REPLAY; catalog-derived) |
| C-GLASS-D-L3B | Glass Identification | sourceModel.glass (S1-GLASS-REPLAY; catalog-derived) |
| C-GLASS-D-L4 | Glass Identification | sourceModel.glass (S1-GLASS-REPLAY; catalog-derived) |
| C-FOCUS-B | Focus Mechanism | .data.ts surfaces (parsed); F2-FOCUS (implementedModel.focus; modeling choice) |
| C-FOCUS-EXT | Focus Mechanism | F2-FOCUS (implementedModel.focus; modeling choice) |
| C-FOCUS-OBJ | Focus Mechanism | F2-FOCUS (implementedModel.focus; modeling choice) |
| C-FOCUS-M | Focus Mechanism | F2-FOCUS (implementedModel.focus; modeling choice) |
| C-FLANGE | Focus Mechanism | S-NIKON-LF (evidence.productCorrelation.marketed; source fact); F3-PROPORTIONS (implementedModel.analysisSupport.proportions) |
| C-PZ | Aberration Correction Strategy | F2-PETZVAL |
| C-PZ-NEG | Aberration Correction Strategy | F3-JUNCTIONS-PETZVAL-TERMS |
| C-PZ-POS | Aberration Correction Strategy | F3-JUNCTIONS-PETZVAL-TERMS |
| C-SA | Aberration Correction Strategy | F3-ABERRATIONS |
| C-DIST | Aberration Correction Strategy | F3-ABERRATIONS |
| C-COLOR | Aberration Correction Strategy | F3-CHROMATIC (primary only) |
| C-LATCOLOR | Aberration Correction Strategy | F3-CHROMATIC (primary only) |
| C-COV45 | Aberration Correction Strategy | S-NIKON-LF (evidence.productCorrelation.marketed; source fact) |
| C-VIG | Aberration Correction Strategy | F2-VIGNETTING (modeled SDs, meridional) |
| C-COND1 | Conditional Expressions | S-PAT Example 1 table (evidence.rawPrescription; source fact); F3-PROPORTIONS (implementedModel.analysisSupport.proportions) |
| C-COND2 | Conditional Expressions | S-PAT Example 1 table (evidence.rawPrescription; source fact); F3-PROPORTIONS (implementedModel.analysisSupport.proportions) |
| C-COND3 | Conditional Expressions | S-PAT Example 1 table (evidence.rawPrescription; source fact) |
| C-COND4 | Conditional Expressions | S-PAT Example 1 table (evidence.rawPrescription; source fact) |
| C-COND5 | Conditional Expressions | S-PAT Example 1 table (evidence.rawPrescription; source fact) |
| C-COND6 | Conditional Expressions | S-PAT Example 1 table (evidence.rawPrescription; source fact) |
| C-SCALE | Verification Summary | F2-SCALE |
| C-SRC-FO | Verification Summary | F-EFL/F-BFD (sourceModel, f=100) |
| C-IMG | Verification Summary | .data.ts surfaces (parsed); CMP2-BFD-PATENT |
| C-STOPFRAC | Verification Summary | F2-STOP-POSITION |
| C-FIG2-SA | Verification Summary | F3-FIG2-COMPARISON (model); evidence.rawPrescription.figureReadingsFig2 (reading) |
| C-FIG2-DIST | Verification Summary | F3-FIG2-COMPARISON (model); evidence.rawPrescription.figureReadingsFig2 (reading) |
| C-FIG2-S | Verification Summary | F3-FIG2-COMPARISON (model); evidence.rawPrescription.figureReadingsFig2 (reading) |
| C-FIG2-T | Verification Summary | F3-FIG2-COMPARISON (model); evidence.rawPrescription.figureReadingsFig2 (reading) |
| C-STOPSCAN | Verification Summary | F3-STOP-SCAN / CMP3-STOP-SCAN-FIG2; F2-STOP-POSITION |

Qualitative statements tied to computed results: "neither a telephoto nor a retrofocus" (F2-NOT-RETRO-NOT-TELE);
"Petzval field essentially flat" (F2-PETZVAL); "lens is not telecentric" (F3-CHIEF-ANGLES image-space 53.9°);
"model reproduces sign pattern and general shape of FIG. 2" (S3-FIG2-SHAPE).

## 23. Manual interpretive and citation review

Checked by reading the final text against the patent page images and fetched sources:
- Patent quotations re-read from the page images: col. 1 ll.5–8 (4″×5″ use); col. 1 ll.14–16 (L. Bertele);
  col. 2 condition (1) "destroys the symmetry of the lens"; col. 3 ll.18–21 (converging joint surface); col. 3
  ll.21–25 (about 1:8 without condition 3; distortion); col. 3 ll.49–53 (0.9f–1.1f filter, 0.55f rear diameter);
  col. 3 ll.55–60 (L3 alternatives); col. 3 ll.61–64 ("FIGS. 3 and 4"); claim 1 "positive meniscus lens element".
- Design-intent statements are attributed to the patent or to Sato, not asserted independently. Sato's comments on
  lateral color are attributed to the Nikkor-O 2.1cm specifically; the "Biogon concave–convex–concave" description
  is attributed to Sato.
- Removed in review before delivery: an unsupported "1976 priority falls within the Nikkor-SW period" timing claim;
  "later catalog" (replaced by the dated 2002–2004 brochure); "Ludwig" (the patent says "L. Bertele"); an
  over-mechanistic "because L3B has the higher index" (junction sign also depends on curvature); a statement
  presenting the r11 0.544f diameter as independent agreement with the patent's 0.55f (it was a modeling constraint);
  "approximate magnitude of each curve" (replaced by stated residual bounds).
- Calibration language for f/4.5, inferred stop, modeled semi-diameters, the close-focus modeling choice, the
  not-manufacturer-confirmed correlation and the 75 mm sibling are disclosed (S3-ANALYSIS-DISCLOSURES).
- Sources section gives conventional references (patent with page/column locators, brochure code and URL, Sato URL,
  catalog editions) usable outside this conversation. The third-party B&H and KenRockwell pages are not cited in the
  analysis; DR-03 (8 elements) remains recorded here, manufacturer governing.

## 24. Stage 3 checks, gate and pending integration

Stage 3 CHAT_PREFLIGHT checks in `verify.py` (all PASS): S3-FIG2-SHAPE, S3-DATA-ROLE-JUNCTIONS, S3-ANALYSIS-SECTIONS,
S3-ANALYSIS-METADATA, S3-ANALYSIS-ELEMENTS, S3-ANALYSIS-CLAIMS (66 claims),
S3-ANALYSIS-DISCLOSURES, S3-ANALYSIS-STYLE, S3-ANALYSIS-LENGTH (243 lines), S3-MUTATION-DETECTION (8 mutations, all
detected). All Stage 1/2 checks re-run on the revised data: PASS. LENSVISUALIZER checks remain NOT_RUN (integration).

Verifier development note: the first Stage 3 run failed S3-ANALYSIS-METADATA (the loader returns `patentYear` as a
float, so "1979.0" was compared; fixed with an int cast) and S3-ANALYSIS-CLAIMS (C-IMG exposed DR-09). Both are
recorded; no tolerance was widened.

Integration items carried forward: confirm LensVisualizer half-field (OI-09); maxFstop 64; render trim at r2/r10.

**Gate: READY_FOR_AUDIT. integrationStatus: INTEGRATION_PENDING.** No independent review has been performed; Stage 4
remains a fresh source-first audit.

## 25. Stage 4 scope, inputs and references

Stage 4 audit of the fixed job (US 4,176,915, Example 1 → Nikon Nikkor-SW 90mm f/4.5, stem `NikonNikkorSW90mmf45`).
The candidate arrived as nine uploaded files (underscore-separated names); bytes were matched to the Stage 3 manifest
(`stage3-r1`, gate `READY_FOR_AUDIT`) before any comparison. Received candidate hashes:

| File (canonical name) | SHA-256 as received |
|---|---|
| `US_4176915_A.pdf` | `ec6fb42d3151dff02872b9b9ee0d729115fa990a8c90b74b61b30016137ff2f3` |
| `NikonNikkorSW90mmf45.txt` | `ff7d6930b68f107f8149036c88e7a11d5e8da1c2a709e180a5fd62836ddd2a75` |
| `NikonNikkorSW90mmf45.data.ts` | `715339104e9a761987c7151f977422d8861c59a43a47ac9aecaa360f119666b2` |
| `NikonNikkorSW90mmf45.analysis.md` | `3aa5d4aa592465009758257b7c6733fcb5000cfa5386de37afa116d0c5ddcd49` |
| `NikonNikkorSW90mmf45.evidence.json` | `e66318ec56c9b79cbda55f3771dda73296fd961c99f421083325aaffb44c30f6` |
| `NikonNikkorSW90mmf45.verify.py` | `4e3c4326da98c6a34e0f998e9ccc567787afd303f0d90479f56f27cf363d56f9` |
| `NikonNikkorSW90mmf45.results.json` | `61545bf6785a93b88a6b396af6a4a6144cb14f2f5c603ff4787ca2d61f413407` |
| `NikonNikkorSW90mmf45.audit.md` | `ec394f86bf6cc7bcfc4a1978fe45c4b8fc9a67ce19325fb115efb1884603aee2` |
| `NikonNikkorSW90mmf45.manifest.json` | `60ad23d87ffff0aea5e58bb56243e3eb81c91855fbe41fccea3ffa9d5723c66c` |

All eight non-manifest members matched the Stage 3 manifest's size and hash. The candidate verifier replayed with exit 0
and reproduced the packaged `implementedModel`, `comparisons`, `checks` and `facts` exactly. Controlling references
were unchanged from Stage 3 (same hashes as §1) plus `LensPatentStage4Audit.txt`
`c92f2d6289f1a8bdda2c3cdc0fe576151b2d9be77e9b61c8640fff91528fa8e9` and `LensPatentWorkflowGuide.md`
`045de121434ad11e620dffda212fec3aebde09a23680be3d9cb99a4182201409`. Unavailable as before: `lensTaxonomy.ts`,
authoring guide, integration handoff, LensVisualizer repository.

## 26. Exposure and independence

Visible before the baseline was frozen: the job card, the full candidate `.data.ts` (displayed automatically in the
chat), the patent page images, and project-level memory notes on toolchain conventions (no lens-specific conclusions).
Not opened before freezing: analysis, audit, evidence, results, verifier and manifest. The candidate arrays were not used
as inputs; every Pass A number was re-keyed from 600–1200 DPI renders. This is procedural source/method independence,
not a blind review. Correction validation (§30) was performed by the same reviewer and is not independent of the
corrections.

## 27. Pass A — independent baseline (frozen before reconciliation)

Fingerprint `42d7bfd6bcc142604ee20c2a492e939742f192c7d74dc45ee5909d5bb1d26d1d` (SHA-256 of canonical JSON: sorted keys,
compact separators, UTF-8) over `evidence.independentPass.independentBaseline`; re-verified by `S4-BASELINE-FINGERPRINT`.

- **Extraction.** Example 1 (PDF p. 6, col. 4) and claim 4 (PDF p. 7, cols. 5–6) agree in every printed digit.
  Sign convention and d-line values used as printed; no aspheres; f = 100 normalization.
- **First order (f = 100).** EFL 99.99749 (y-nu and ABCD agree to 1e-13); BFD 69.66472 vs printed 69.673
  (Δ −0.0083); Σd 94.04 exact.
- **Scaled at 90 mm (for comparison with the candidate).** Element focal lengths −55.82, 23.00, −24.81, 79.69, 25.61,
  −42.91, −75.20 mm; L2 +39.57, L3 +108.68, front +68.50, rear −225.09 mm; Petzval 7.847e-5 mm⁻¹; TL/EFL 1.637,
  BFD < EFL; all six conditions satisfied.
- **Real rays (f = 90, stop at 0.577).** Distortion −0.44 / −0.69 / −0.36 / +0.02 % at 30 / 40 / 50 / 52°; 52.5°
  chief ray image height 117.47 mm (circle 234.9 mm).
- **Stop.** Local measurement of the diaphragm bar centre against the r6/r7 outline centres: 0.578 (front page) and
  0.576 (Sheet 1 Fig. 1) of d6, adopted 0.577 ± ~0.03.
- **Glass.** Unseeded search over 1,087 glasses (OHARA, HOYA, Schott, HIKARI, CDGM, Sumita; opticalglass 2.0.2,
  metric √(Δnd² + (Δνd/50)²)): H-BaK8/N-BAK1, H-ZLaF1, S-NBH52V, J-PKH1, BaF7, E-FD1, TAC4 nearest, same classes.
- **Manufacturer facts.** Nikon Imaging Japan product page (S-NIKON-JP): focal length **90.4 mm**, 1:4.5, f/64,
  4 groups 7 elements, 80°/105°, 154/235 mm, flange focal distance 97.4 mm, length 86.7 mm.
- **Underdetermined.** Stop axial position and diameter; all semi-diameters; vendor identities for L2A, L2B, L2C, L3A;
  production melts; close-focus state.

## 28. Pass B — reconciliation (patent / baseline / data / analysis)

| ID | Topic | Finding | Disposition |
|---|---|---|---|
| A4-01 | Transcription | Re-entry equals evidence `rawPrescription` in every value | PASS (`S4-TRANSCRIPTION-AGREEMENT`) |
| A4-02 | First order, powers, Petzval, conditions, distortion | Baseline reproduces Stage 3 results to rounding | PASS |
| A4-03 | Scaling target | Candidate scaled to the nominal 90 mm (brochure); Nikon publishes 90.4 mm | **Correction C4-01** |
| A4-04 | Stop position | Candidate 0.611 (global LSQ fit of drawn vertices) vs baseline 0.577 (local) vs FIG. 2 scan 0.65 | Retained; spread disclosed (OI-10, analysis) |
| A4-05 | Glass | Same nearest glasses and classes; OHARA prefixes (S-NBH52V, S-TIH1) correct; no APO/ΔPgF claims | PASS |
| A4-06 | Metadata | Patent number (no kind code printed), inventor, assignee, 1979, 7/4, `large-format-lens-board`, `5x7`, 235 mm, f/64 confirmed against S-PAT and Nikon | PASS |
| A4-07 | Focus | Unit bellows focus; close state a disclosed modeling choice; `NO_INTERNAL_RECONSTRUCTION` correct | PASS |
| A4-08 | Citations | Sato (S-NIKON-1001) re-read in full: supports the Wakimoto attribution, convex–concave–convex order, SW 65/75/90 listing, small lateral color of the Nikkor-O. Brochure mirror at mr-alvandi.com could not be fetched; identical brochure (same code number) read at kennethleegallery.com | Citation URL replaced (C4-02) |
| A4-09 | Geometry | Independent rim-slope, glass-clearance and air-gap-intrusion checks pass on the corrected SDs; real 52.5° chief ray gives a 236.0 mm circle | PASS (`S4-GEOMETRY-INDEPENDENT`, `S4-COVERAGE-INDEPENDENT`) |
| A4-10 | Tests for wrong example, sign, exponent, wavelength, conic, plane, synthetic cement, counts, standalone vs in-situ, guessed focus law, rounded marketing value | No defect found other than A4-03 (rounded marketing focal length used as the scaling target) | — |

## 29. Stage 4 correction register

| ID | Location | Old | New | Source / evidence | Downstream effect |
|---|---|---|---|---|---|
| C4-01 | Scaling (MD-01); `.data.ts` all R, d, sd, STO, `var`, `fl`, specs; new `focalLengthDesign` | s = 0.9000226 (90 / EFL); EFL 89.9996 mm | s = 0.9040227 (90.4 / EFL); EFL 90.4009 mm; `focalLengthDesign: 90.4`, `focalLengthMarketing: 90` kept | S-NIKON-JP 焦点距離 90.4mm (manufacturer hard specification; manufacturer-precedence rule); S-NIKON-LF gives the nominal "90mm" | See table below; all Stage 2/3 gates rerun |
| C4-02 | Analysis Sources 2; evidence S-NIKON-LF | mr-alvandi.com mirror | kennethleegallery.com copy (same Code No. 8CE60100) | Fetched and read 2026-10-01 | None numerical |
| C4-03 | Analysis | — | Correlation item 7 (focal length 90.4 vs nominal 90); stop-fraction spread sentence; Source 3 (Nikon Imaging Japan) | S-NIKON-JP; A4-04 | Disclosure only |
| C4-04 | `verify.py` | Target hard-coded 90.0; Stage 1–3 sections only | Target read from evidence `publishedFocalLengthMm`; nominal comparison `CMP2-EFL-NOMINAL`; Stage 4 section (`s4_*`, re-keyed inputs); mutation fixtures re-pointed to the new literals | — | Verifier hash changes |

C4-01 value changes (parsed `.data.ts`, INF unless noted):

| Quantity | Before (90 mm) | After (90.4 mm) |
|---|---|---|
| EFL / BFD (mm) | 89.9996 / 62.6995 | 90.4009 / 62.9794 |
| Σd / total track (mm) | 84.638 / 147.338 | 85.014 / 147.994 |
| STO split after r6 / STO sd (mm) | 2.0009 / 10.2603 | 2.0098 / 10.3061 |
| Entrance pupil (from r1, diameter) | 27.29 / 20.00 | 27.41 / 20.09 |
| Exit pupil (ahead of r11, diameter) | 23.33 / 19.12 | 23.43 / 19.20 |
| Close state r11→image (1.0 m object-to-image) | 73.1463 | 73.5341 (m = −0.117) |
| Element fl (mm) | −55.82, 23.0, −24.81, 79.69, 25.61, −42.91, −75.2 | −56.07, 23.1, −24.92, 80.04, 25.73, −43.1, −75.54 |
| SDs (mm) | 31.0 … 24.5 | ×90.4/90, rounded 0.01 (31.14 … 24.61) |
| Patent Bf scaled / residual | 62.7073 / 0.008 | 62.9860 / 0.007 |
| Flange ahead of rear vertex / behind stop | 34.70 / 2.00 | 34.42 / 2.44 |

Dimensionless results (TL/EFL, BFD/EFL, pupil magnification, f-number, distortion, vignetting fractions, FIG. 2
comparisons except the 52° meridional value −1.73 → −1.72) are unchanged because the change is a uniform rescale.
Uniform rescaling of the Stage 2 modeled SD envelope preserves every slope, intrusion fraction and containment result;
the STO semi-diameter was re-calibrated rather than scaled.

## 30. Recheck after corrections

The consolidated verifier was rerun on the corrected files: Stage 1, 2, 3 and 4 checks all PASS (51 CHAT_PREFLIGHT
PASS, 1 NOT_APPLICABLE, 5 LENSVISUALIZER NOT_RUN at integration). Stage 2 mutation tests and Stage 3 analysis mutation
tests detect their targeted defects on the new literals. Prettier 3.9.9 with the project `prettierrc.json` reports the
`.data.ts` already formatted (`--check` PASS). The candidate's Stage 3 claim map was re-rendered from executed values
after C4-01: 66 claims, all found verbatim. Correction validation is by the same reviewer and is not
independent of the corrections.

## 31. Manual interpretive and citation review (Stage 4)

- Optical-behaviour prose (field-flattening by the outer menisci, the role of condition (1)–(3), junction signs at r4,
  r5, r8, the meridional-field rationale for the thick L2A) agrees with the patent text locations cited and with the
  computed signs.
- "Wakimoto" statements, the Biogon comparison and the lateral-colour remark are supported by S-NIKON-1001 as worded.
- The SW 90mm f/8S statement (8 elements in 4 groups, separate listing) is supported by S-NIKON-LF.
- Vignetting percentages remain model-dependent and are disclosed as such; they were reproduced by the verifier, not
  re-derived by an independent sagittal trace.
- No first/second person, promotional language, process metadata or `vd` tokens (`S3-ANALYSIS-STYLE`).

## 32. Remaining limitations

Stop axial position and diameter inferred/calibrated (OI-10 spread ≈ ±0.04 d6); SDs modeled; five of seven glasses not
catalog-exact and no 1970s catalog available; nd/νd only (primary colour only); close focus a modeling choice;
meridional real-ray containment only; LensVisualizer half-field derivation, render trim and runtime glass resolution
not executed.

## 33. Stage 4 checks, gate and pending integration

Mandatory CHAT_PREFLIGHT checks through Stage 4 pass on the final bytes recorded in the manifest. LENSVISUALIZER checks
remain `NOT_RUN` with `requiredAt: integration`: `LV-TYPECHECK`, `LV-PRETTIER` (repository-pinned Prettier),
`LV-BUILDLENS`, `LV-RENDER` (render-trim/diagnostics, including the half-field the viewer derives), `LV-GLASS-RUNTIME`.
Gate: **READY_FOR_BATCH**. `integrationStatus`: `INTEGRATION_PENDING`.

## 2026-10-05 — Semi-diameter figure pass

**Source.** US 4,176,915, drawing Sheet 1 (PDF page 2), FIG. 1, the Example 1 cross-section, rendered at 300 dpi. The
optical axis runs vertically on the page and is tilted about 1.3° (dash-dot axis at x = 1420 px near L1 and 1390 px
behind L4), so every rim was read on both sides of the axis and averaged, with half a line width removed.

**Scale.** Drawn r1 and r11 vertices are 1091 px apart; the scaled prescription gives 85.014 mm, hence 0.0779 mm/px.
The intermediate vertices r3, r8 and r9 fall within 5 px of their predicted positions, so the figure is to scale
axially; reading uncertainty is about ±0.3 mm on a semi-diameter.

| Surface | Before | Figure (mm) | After | Evidence |
|---|---|---|---|---|
| r1 | 31.14 | 32.3 | 32.3 | L1 outer cylinder, 412/421 px on the two sides |
| r2 | 21.09 | 21.5–22.0 | 21.5 | rim corner at 277 px; sag reading gives 22.0; capped at 0.9·R = 21.53 by the rim-slope rule |
| r3 | 19.69 | 20.4 | 20.4 | L2A flat rim, 263 px mean |
| r4 | 12.46 | 12.7 | 12.7 | L2 barrel drawn as one cylinder, 164–166 px |
| r5 | 12.05 | 12.7 | 12.7 | same cylinder |
| r6 | 12.05 | 12.7 | 12.7 | same cylinder |
| STO | 10.3061 | — | 10.3061 | calibrated value, untouched |
| r7 | 10.85 | 11.05 | 10.85 | 2% apart, inside reading uncertainty; retained |
| r8 | 10.85 | ≈11 | 10.85 | cemented surface shares the L3A rim; retained |
| r9 | 17.88 | 18.5 | 18.5 | L3B outer cylinder, 240 px mean |
| r10 | 19.08 | 19.55 | 19.6 | concave-face rim corner at 251 px on both sides |
| r11 | 24.61 | 24.7 | 24.61 | 0.4% apart; retained (patent text: rear effective diameter about 0.55f) |

No stored value was more than 5.5% from the figure, so the silhouette changed only slightly. The moves were made
because they are all in one direction, are cleanly measurable, and two of them remove a real f/16 corner clip (below).

**Ray checks (numbers).** The chief ray for the 117.5 mm corner is at 52.4° and passes every surface (heights 27.9 at
r1, 20.6 at r2, 18.3 at r10, 22.3 at r11) before and after. At f/16 the meridional corner bundle was 51% transmitted
before (lower rim 21.9 mm against r2 21.09; upper rim 19.45 mm against r10 19.08) and is 84% after, limited only by
r2; at f/22 it is 96%. Full-aperture meridional transmission after the change: 93% at 20°, 83% at 31.5°, 75% at 40°,
38% at 50°, 24% at 52.5° (before: 92/83/74/28/13 by the same scratch tracer). The axial f/4.5 marginal ray clears
every surface (closest: 10.40 at r7 against 10.85). The surface validator reports no errors; the traced field-coverage
audit stays at 100% (52.4° → 117.50 mm). The image-circle proxy still lists r9–r11 below its exit-pupil floor (r9 short
by 2.24 instead of 2.86, r10 by 14.10 instead of 14.62, r11 unchanged at 11.03); the audit itself marks that proxy
unreliable for this wide lens and the trace shows the corner is reached. The repo clearance probe fails to find rays
beyond about 45° for this lens (solver limitation at the near-hemispherical r2), so corner results come from the
robust tracer and a dedicated spherical trace. EFL 90.4009, BFD 62.9794 and f/4.5 from the stop are unchanged.

**Render.** Local render compared with FIG. 1 before and after, at infinity and at the 1.0 m state: L1 and L4 stand
well above the inner cemented groups, L2A is the tallest inner element, the L2 barrel is now a single step, and L3B's
rear rim sits just below L4's front rim, as drawn.

**Open limitations.** The figure shows mounting flanges and conical bevels that the model does not draw. r2 cannot
follow the larger of the two figure readings (22.0) because of the 0.9·R rim limit, which leaves a residual 16% trim
of the f/16 corner bundle. Sagittal vignetting is not evaluated.

## 2026-10-05 — Glass label pass

Stored nd/νd are unchanged (patent values). Labels now name the catalog curve used and state the residual; none
asserts a supplier.

| Element | Patent nd / νd | Before | After (resolved glass, residual) |
|---|---|---|---|
| L2A | 1.80218 / 44.4 | no match (Abbe fallback) | NBFD14 HOYA, Δnd −0.0005, Δνd −0.08 |
| L2B | 1.67163 / 38.8 | S-NBH52V, label said "catalog unresolved" | S-NBH52V OHARA, Δnd +0.0014, Δνd −0.54; no closer catalog glass |
| L2C | 1.52000 / 70.1 | J-PKH1, label said "catalog unresolved" | J-PKH1 HIKARI, Δnd −0.0014, Δνd −0.21; no closer catalog glass |
| L3A | 1.60717 / 40.2 | no match (Abbe fallback) | BAFD3 HOYA, Δnd 0.0000, Δνd +0.16 |
| L4 | 1.73350 / 51.0 | TAC4 HOYA, Δnd +0.0005 | LAKN12 SUMITA (discontinued), Δnd 0.0000, Δνd +0.22; TAC4 named as alternate |

L1 (BAK1) and L3B (SF1) were already coordinate-exact. All seven elements now resolve to a catalog dispersion curve
(previously five). The analysis element headings and glass table were synchronised.

## 2026-10-05 — Display name and presentation

Name `NIKON NIKKOR-SW 90mm f/4.5` retained (matches the SW 75mm sibling). Subtitle, specs and focus description were
reviewed and contain no workflow jargon; the data file was already in house style. No change.

## 2026-10-05 — Second review (site diagram, labels, travel, glass, metadata)

Independent second pass over the lens as rendered on the local site, against US 4,176,915 (page 2 FIG. 1, page 6
Example 1 table) and Nikon's own publications.

**Prescription and glass rows.** The Example 1 table was re-read from a fresh render. All eleven radii, ten spacings
and seven nd/νd pairs equal the stored values after the uniform 0.9040227 scale (r1 106.395 → 96.1835, d3 27.23 →
24.6165, r11 −44.543 → −40.2679); nd/νd are 1.57250/57.5, 1.80218/44.4, 1.67163/38.8, 1.52000/70.1, 1.60717/40.2,
1.71736/29.5, 1.73350/51.0 as stored. EFL 90.4009, BFD 62.9794, element focal lengths and type strings agree with the
thick-lens values. No change.

**Diagram against FIG. 1.** The site render at infinity and at the 1.0 m state was compared with FIG. 1 and the rims
re-measured by hand on both sides of the tilted axis (scale 0.0798 mm per displayed pixel from the r1–r11 vertex
distance).

| Feature | Figure, second reading (mm) | Stored | Finding |
|---|---|---|---|
| L1 outer rim (r1) | 32.1 | 32.3 | agrees |
| L1 concave rim corner (r2) | 22.2 | 21.5 | 3% short; held by the 0.9·R rim limit (21.53) |
| L2A flat rim (r3) | 20.35 | 20.4 | agrees |
| L2 barrel (r4–r6) | 12.6 | 12.7 | agrees |
| L3A rim (r7, r8) | 10.85 | 10.85 | agrees |
| L3B rear rim (r9) | 18.5 | 18.5 | agrees |
| L4 concave rim corner (r10) | 19.5 | 19.6 | agrees |
| L4 outer rim (r11) | 24.7 | 24.61 | agrees |
| Diaphragm bar within d6 | 0.61–0.66 | 0.611 | agrees within reading uncertainty |

Relative heights (L1 tallest, then L4, L2A, L3B, the L2 barrel, L3A), the bevel from L2A's rim down to the triplet
barrel, the stepped L3 doublet and the stop position all read the same on the site and in the figure. No semi-diameter
was changed. Nikon's brochure gives a ø70 mm rear mount and ø85 mm front mount, both comfortably larger than the
modeled 49.2 mm and 64.6 mm clear diameters.

**Labels and annotations.** Element names, diagram labels, types versus radius signs and focal-length signs, the L2
and L3 cemented ranges (surfaces 3–6 and 7–9), the front/rear group ranges, the BF variable label, spec chips and
legend colouring (only L2A above nd 1.78; no anomalous-dispersion or aspheric markers) are correct. The aperture
readout starts at f/4.5 and ends at Nikon's f/64.

**Focus travel.** Surface 11 is stored as infinity then close, 62.9794 → 73.5341 mm: the back focus grows by 10.55 mm
toward the near conjugate, as unit focus requires. The stored close gap focuses an object 841.44 mm in front of r1,
999.99 mm object-to-image, magnification −0.117. The site movement overlay shows both groups moving 10.55 mm away
from the fixed image plane. The patent gives no finite-distance state and Nikon no minimum focus, so the 1.0 m state
remains a labelled modeling choice. No change.

**Glass.** All seven labels resolve to the intended catalog curves (BAK1, NBFD14, S-NBH52V, J-PKH1, BAFD3, SF1,
LAKN12). The local vendor files were searched for closer matches:

| Element | Patent nd / νd | Vendor-file hit | Status |
|---|---|---|---|
| L2B | 1.67163 / 38.8 | none closer than S-NBH52V; BASF12 legacy row 1.66998 / 39.2 is next | label retained |
| L2C | 1.52000 / 70.1 | K-PMK30(M) SUMITA 1.52002 / 70.2 (a current moulding glass, not a 1970s type) | not in the repo catalog; label retained |
| L3A | 1.60717 / 40.2 | BASF3 legacy row 1.60717 / 40.2, coordinate-exact | not in the repo catalog; BAFD3 (Δνd +0.16) retained |

The patent prints no partial-dispersion data, so none is authored.

**Metadata.** Nikon's large-format brochure (Code No. 8CE60100, 2002–2004) lists the lens as "Nikkor-SW 90mm f/4.5S":
7 elements in 4 groups, 80° / ø154 mm at f/4.5, 105° / ø235 mm at f/16 with the format note 5″ × 7″, minimum aperture
f/64, Copal No. 0 shutter, ø82 mm × 0.75 attachment thread, flange focal distance 97.4 mm. The same brochure labels
the SW 75mm f/4.5S circle of ø200 mm as 120 × 165 mm rather than 5 × 7, so `5x7` here and `4x5` for the 75 mm sibling
are both the maker's own classification (5 × 7 diagonal 218.5 mm against the 235 mm circle). Nikon's design-history
article by Haruo Sato writes "Nikkor-SW 90mm f/4.5" without the suffix; the display name follows that form and the
sibling. Nikon's pages give neither a release year nor a blade count, so neither is asserted and `apertureBlades` is
left unset. The Nikon Imaging Japan product page cited for the 90.4 mm focal length now redirects to the product index
and could not be re-read in this pass.

| Field | Before | After | Reason |
|---|---|---|---|
| `apertureDesign` | absent | 4.5 | patent aperture ratio 1:4.5; field was missing while the sibling carries it |

**Checks on the result.** The surface validator reports no errors; the traced field-coverage audit stays at 100%
(52.4° → 117.50 mm); EFL, BFD and f/4.5 from the stop are unchanged; all seven glasses resolve.

**Open limitations.** The site's aperture readout derives its wide-open stop radius by real-ray trace (10.59 mm)
rather than from the paraxially calibrated STO value (10.3061 mm), so it shows an estimated entrance pupil of
20.65 mm against the paraxial 20.09 mm; this is the viewer's convention for a lens with spherical aberration at the
stop, not a data error. The r2 rim limit, the inferred stop position and the modeled close-focus state stand as
recorded above.
