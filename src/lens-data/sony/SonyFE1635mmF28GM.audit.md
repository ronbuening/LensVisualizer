# SonyFE1635mmF28GM — Consolidated Audit Record (Stages 1–4)

Dossier contract CHAT-1.0. Construction verification by the author (Stages 1 and 2); this is not an independent audit.
Part A is the Stage 1 record, preserved as issued (stage1-r1). Part B records Stage 2 (stage2-r1). Part C records Stage 3 (stage3-r1).

# Part A — Stage 1 record (stage1-r1)

## A.1. Job and reference versions

| Item | Value |
|---|---|
| Patent | WO 2018/139160 A1, "ズームレンズおよび撮像装置" (Zoom lens and imaging device), PCT/JP2017/046864 |
| Applicant / inventors | Sony Corporation / Kouji Katou (加藤 浩司), Hiromichi Nose (能勢 弘道) |
| Dates | Priority JP 2017-011423, 2017-01-25; filed 2017-12-27; published 2018-08-02 |
| Embodiment | Numerical Example 4 (数値実施例4), Fig. 13, Tables 13–16; conditions Tables 21–22 |
| Lens / stem | Sony FE 16-35mm F2.8 GM / `SonyFE1635mmF28GM` |
| Patent bytes | `WO_2018139160_A1.pdf`, 3,488,212 B, SHA-256 `22f1279120b9e3d86541064f6f3b3ae1592ae27c57335f36729c5d1cf88edf41` |
| Job card | `SonyFE1635mmF28GM.txt`, SHA-256 `a1b78e090e78c1e8bcbd2cbd2f4e982fe1643b2d0817da78893b14152567ec7a` |

Controlling references read from `/mnt/project` (SHA-256 prefixes): LENS_DATA_SPEC.md `26e79f8ab045e948`,
LENS_ANALYSIS_SPEC.md `0cd49c0a05231cb8`, LensPatentChatProtocol.md `72ba2a4b28b4f339`, LensPatentDossierContract.md
`b6ddc19bf656238e`, LensPatentStage1Extraction.txt `c06bbde912ac14a0`, TEMPLATE_data_ts.template `379e6bd9a52daa62`,
defaults.ts `2f013eed8318264f`, prettierrc.json `6cf80666a5e24499`, LENS_MOUNT_FORMAT_OPTIONS.md `44aed8060cfb07a1`.
Full hashes are in the manifest. The taxonomy source file, authoring guide and integration handoff named by the protocol
are not present in the project mount; this was recorded and has no effect on Stage 1 calculations.

Environment: Claude chat sandbox (not ChatGPT as the protocol text assumes), Python 3.12, numpy, scipy, PyMuPDF 1.28.2,
opticalglass 2.0.2. `/mnt/data` does not exist and `/mnt/transcripts` is read-only, so the handoff is written to
`/mnt/user-data/outputs/` and no transcript journal entry was possible.

## A.2. Extraction and conventions

The PDF is a 69-page scan with no text layer. Every value was read from the embedded 2478×3507-pixel (300 dpi) page
images, with tight crops of Table 13 (pdf p30), Tables 14–16 (p31), Tables 21–22 (p36), the asphere equation (p15),
paragraphs [0106]–[0113] (pp28–29) and Fig. 13 (p58). OCR was not used. `evidence.json` preserves the raw text of every
cell together with its locator.

Prescription: 33 surfaces. G1 is s1–9, G2 s10–11, G3 s12–15, the iris is s16 (it moves with G3), G4 is s17–21, G5 is
s22–31, and the cover glass is s32–33 with BF = 1.00 mm at every state. There are 16 glass elements in 13 groups plus a
0.150 mm resin layer on L2, which is a hybrid asphere per [0113]. Aspheric surfaces are 1, 2, 5, 14, 15, 21 and 30.
The variable gaps D(1)–D(5) are given at the wide, intermediate and tele states, all at infinity focus. No close-focus
data are published for any example.

Element shapes and powers match the text in [0106]–[0110]; check S1-ELEMENT-SIGNS-TEXT passes for all 15 described
elements.

Conventions:

- **Sign and axis:** R > 0 means the centre of curvature lies on the image side, which matches LensVisualizer directly.
- **Index reference:** the d line, 587.6 nm ([0055]). The C and g lines are plotted ([0074]), but no line indices or
  partial dispersions are published.
- **Asphere equation:** printed as x = y²c²/[1+{1−(1+K)y²c²}^½] + ΣAi·y^i. The y²c² numerator is dimensionally
  inconsistent and is read as the standard y²c (MD-02).
- **Conic mapping:** the equation uses the (1+K) form, so the patent K equals the LensVisualizer K. Coefficients are even
  orders A4–A12, and E−n means ×10⁻ⁿ.
- **Scale:** retained at patent scale.

## A.3. Model transformations (ledger: `evidence.modelingDecisions`)

| ID | Transformation | Status |
|---|---|---|
| MD-01 | s25 (L13) nd 1.969970 → 1.496997. Proposed source correction; the raw value is retained | Supported (see §6) |
| MD-02 | Asphere numerator y²c² → y²c | Supported by the real-ray check |
| MD-03 | Cover glass → `rearPlates` (CG: 2.5 mm, 1.516798/64.2, gapAfter 1.00); s31 d = D(5) physical gap | Stage 2 |
| MD-04 | L2 authored as glass body plus resin layer, hybrid pair | Stage 2 |
| MD-05 | Printed prescription kept unchanged; EFL and image-position residuals disclosed | Supported disposition |
| MD-06 | Stop SD inferred from Fno 2.88 per station (calibration, not stop-diameter evidence) | Stage 2 |
| MD-07 | Semi-diameters derived in Stage 2; s2 hard limit 0.98 × 24.70 = 24.20 mm | Stage 2 |
| MD-08 | Focus: NO_INTERNAL_RECONSTRUCTION | Assigned |
| MD-09 | Wide full field (53.95°) is a vignetted bundle; no data change | Characterised |

## A.4. Glass review

The match was run unseeded over every row of eight vendor sheets bundled in opticalglass 2.0.2:

- OHARA 2025-03-12 S-series, plus the low-Tg L-series sheet;
- HOYA 2026-04-01, including the M-series molding glasses;
- Schott 2025-01-13;
- Hikari general and ML (molding) catalogs;
- CDGM 2024-09;
- Sumita v14.01.03.

Older bundled editions were also scanned for exact nd hits on the unmatched coordinates; there were none. The vendor
spreadsheets were not re-downloaded from the vendor sites. Candidate rows (nd, nC, nF, ng) are stored in the evidence
for offline replay.

| Element | nd / νd | Disposition |
|---|---|---|
| L1 | 1.768015 / 49.2 | M-TAF101 (HOYA) class molding glass, Exact; CDGM D-LaF050 also compatible |
| L2 glass | 1.834805 / 42.7 | S-LAH55V / TAFD5F / H-ZLaF55C class |
| L2 resin | 1.534200 / 41.7 | Unmatched (UV-cured resin) |
| L3 | 1.772500 / 49.6 | S-LAH66 / TAF1 / N-LAF34 class |
| L4 | 1.912366 / 21.9 | **Unmatched** (nearest K-PSFn190, Δnd −0.0078, outside the runtime window) |
| L5 | 1.658436 / 50.9 | S-BSM25 / N-SSK5 / BACED5 class |
| L6 | 1.834287 / 39.1 | **Unmatched** (lanthanum flint) |
| L7 | 1.583130 / 59.5 | M-BACD12 / L-BAL42 class molding glass |
| L8 | 1.723417 / 38.0 | S-BAH28 / BAFD8 / H-ZBaF21 class |
| L9 | 1.487489 / 70.4 | S-FSL5 / FC5 / N-FK5 class |
| L10 | 1.693500 / 53.2 | M-LAC130 / J-LAK13 / P-LAK35 class molding glass |
| L11 | 1.550084 / 75.5 | FCD705 class (Δnd −0.00024), ED |
| L12 | 1.901747 / 34.6 | **Unmatched** (nearest S-LAH93, Δnd +0.0035, outside the runtime window) |
| L13 | 1.496997 / 81.6 (after MD-01) | S-FPL51 / FCD1 / N-PK52A class, ED |
| L14 | 1.922860 / 20.9 | E-FDS1 / H-ZF62 class |
| L15 | 1.903658 / 31.3 | TAFD25 / H-ZLaF75A / N-LASF46B class |
| L16 | 1.882023 / 37.2 | M-TAFD307 class molding glass |
| CG | 1.516798 / 64.2 | S-BSL7 / BSC7 / N-BK7 / H-K9L class |

Candidate names do not establish supplier or melt identity. The supplier was not inferred from the lens brand. Several
coordinates coincide with HOYA molding glasses, which is consistent with the aspheric elements, but this is not proof of
supplier. No APO or anomalous-dispersion claim is supportable from the source.

## A.5. Numerical results (normalized model; `results.json` → `sourceModel`)

The two paraxial engines, a sequential y-ν trace and ABCD matrices, agree to better than 10⁻⁹ in both branches.

| Quantity | Wide | Intermediate | Tele |
|---|---|---|---|
| EFL (computed) | 16.519 | 22.963 | 34.025 |
| EFL (patent) | 16.48 (Table 22) / 16.5 | 22.91 | 33.95 |
| Relative residual | +0.235% | +0.230% | +0.221% |
| Paraxial image distance after s33 (BF 1.00) | 1.108 | 1.086 | 1.005 |
| Air-equivalent BFD from s31 | 20.18 | 27.93 | 38.48 |
| BFD/EFL (retrofocus when > 1) | 1.22 | 1.22 | 1.13 |
| Track s1 → image | 154.52 | 146.01 | 140.08 |
| Entrance pupil behind s1 | 22.58 | 21.92 | 19.88 |
| Exit pupil from s33 | −47.27 | −51.63 | −61.39 |
| EP diameter for f/2.88 | 5.74 | 7.97 | 11.81 |
| Stop SD required for f/2.88 (calibration) | 8.90 | 10.89 | 13.79 |

The design is retrofocus at every station (verified BFD > EFL). The telephoto ratio does not apply (TL/EFL ≫ 1). The
constant f/2.88 requires the physical iris to open by a factor of 1.55 from wide to tele.

Group focal lengths, compared with Table 22:

| Group | Computed | Table 22 |
|---|---|---|
| G1 | −19.522 | not published |
| G2 | 66.534 | 66.53 |
| G3 | +360.41 | not published |
| G4 | 42.631 | 42.63 |
| G5 | −80.399 | −80.40 |

G2 lateral magnification is 6.320 at wide (Table 22: 6.31) and 2.386 at tele (2.38). Conditions (1)–(4) evaluate to
1.561, 0.377, 2.813 and 0.530 (Table 21: 1.56, 0.38, 2.81, 0.53); all lie inside their claimed ranges.

Zoom motion, as vertex positions relative to the fixed image plane, from wide to tele:

| Group | Wide → tele | Note |
|---|---|---|
| G1 | +14.44 (image-ward) | Monotonic |
| G2 | −2.92 | **Reversal**: −105.93 → −109.05 → −108.85 |
| G3 and stop | −14.86 | |
| G4 | −23.27 | |
| G5 | −18.41 | |

This matches [0059] (S1-ZOOM-MOTION-TEXT).

The Petzval sum is +0.001754 mm⁻¹ (Petzval radius −570 mm), computed surface by surface as φ/(n·n′). The largest terms
are s2 (−0.0160), s5 (−0.0132), s17 (+0.0120) and s3 (+0.0119).

Standalone element focal lengths (thick lens in air, mm):

- **G1:** L1 −38.39; L2 glass −104.91; L2 resin +2723; L2 hybrid −108.8; L3 −44.37; L4 +72.62.
- **G2 and G3:** L5 +66.53; L6 −82.28; L7 +68.12.
- **G4:** L8 −87.32; L9 +55.98; L8+L9 +171.5; L10 +52.50.
- **G5:** L11 +39.39; L12 −22.00; L11+L12 −52.03; L13 +34.05; L14 +25.06; L15 −18.77; L14+L15 −81.95; L16 −79.59.

Real meridional chief rays, through the stop centre and using the patent asphere equation, were traced at the published
(Y, A) points of Figs. 14–16:

- Eight of nine points land within +0.006 to +0.045 mm of the printed Y. Each is within a tolerance built from the
  printed precision, the image-plane residual and the MD-05 EFL residual.
- The positive bias matches the +0.23% EFL residual.
- The wide 53.95° point is NOT_APPLICABLE for a stop-centre chief ray (MD-09). The largest stop-centre angle is 51.1°,
  where Y = 19.45.
- Rays at 53.95° through the transmitted stop band (heights 3.2–6.1 mm) land at Y = 21.650–21.653, against the printed
  21.63.
- Sign hypotheses (K1 ∈ {+1, 0, −1} × K2 ∈ {±0.205}): K1 has negligible influence, and the printed K2 = +0.205 is
  required; −0.205 misses Y by up to 1.75 mm.

Real-ray distortion relative to the computed EFL is −5.1% (wide, 49.56°), +0.52% (intermediate, 43.14°) and +2.89%
(tele, 31.71°), consistent with Figs. 14–16.

The conic-domain limit binds only at s2 (24.70 mm). Stop-centre chief rays reach at most 17.9 mm on s2, and the
transmitted 53.95° rays cross s2 at 16.3–18.3 mm. Aiming lower in the stop drives the s2 intersection to the conic
boundary, which is what removes the stop-centre ray. This is a Stage 2 geometry constraint.

Mutation sensitivity (S1-MUTATION-SENSITIVITY): each injected fault is detected.

- Removing MD-01 makes G5 +48.49.
- Swapping digits in R10 (104.160) makes G2 66.417.
- Flipping the sign of K2 puts the tele full-field Y at 22.12.

## A.6. Correction and discrepancy register

**C-01 — surface 25 index (MD-01).**

- Printed 1.969970 with νd 81.6, which is physically implausible: no catalog glass lies within Δnd 0.4.
- The same table position holds 1.496997 / 81.6 in Examples 2 and 5. The printed string reads as those digits with the
  leading 4 dropped and a 0 appended.
- Raw branch: EFL 7.91 / 9.61 / 12.17 and G5 +48.49. Corrected branch: G5 −80.399 against −80.40.
- Classified as a proposed correction of the source, not a transcription error; the image is unambiguous.

**C-02 — asphere equation numerator (MD-02).** A typographical dimensional error in [0057]. Paraxial results are
unaffected; the real-ray reproduction of the published field points supports the standard reading.

**D-01 — EFL and image position (MD-05).**

- The residuals in §5 stay visible in `results.comparisons`; check S1-EFL-PUBLISHED-REPRODUCTION is FAIL, non-mandatory.
- A search over every R, d and n of G1 and G3 found no single value that explains the residual. The best single
  parameter would need s4 d 0.150 → 0.445 and still leaves ±0.04%.
- G2, G4, G5 and every condition reproduce at printed precision, which confirms the transcription of those groups.
- Sibling Example 5, run through the same engine, shows image-position residuals of −0.014 / +0.084 / −0.096 mm. Its
  Table 22 group values do not reproduce either; its single-lens G2 computes 61.83 against a printed 61.55. This points
  to source-level inconsistency between the prescriptions and the summary tables.
- Disposition: implement the printed prescription unchanged and disclose the residual. LENS_DATA_SPEC directs that a
  source-rounded image distance is not edited to remove residual defocus. S1-EFL-DISPOSITION is PASS.

**D-02 — wide full field (MD-09).** As described in §5. This is a geometry and coverage disclosure, not a data error.

**D-03 — third-party barrel-extension statement.** Wikipedia says the barrel extends toward 35 mm, whereas the patent
puts the front group 14.44 mm further forward at wide. The retailer figure for length at maximum extension (136.2 mm
against 121.6 mm, a difference of 14.6 mm) agrees numerically with the patent. The statement is not adopted. Sony
publishes only the 121.6 mm length.

## A.7. Product correlation and focus

Manufacturer sources (Sony Canada and Sony MEA specification pages) give: E-mount, 35 mm full frame, 16–35 mm, F2.8–22,
16 elements in 13 groups, 0.28 m minimum focus, 0.19×, 11 blades, 82 mm filter, 680 g, 88.5 × 121.6 mm. The Sony press
release of 2017-05-17, read through secondary reproductions, gives five aspherical elements (two XA), two ED elements,
and two DDSSM motors in a floating focus system.

Example 4 is the only example in the patent with 16 elements in 13 groups:

- Examples 1 and 3 have 15 elements.
- Examples 2 and 5 cement L3 to L4 and so have 12 groups.

It also has five aspheric elements, two ED-class elements (L11, and L13 after MD-01), and two focus groups (G2, G4). The
correlation is strong and convergent but not manufacturer-confirmed. Proposed taxonomy: `lensMounts: ["sony-fe"]`,
`imageFormat: "135-full-frame"`. Patent metadata: `patentNumber: "WO 2018/139160 A1"`,
`patentAuthors: ["Kouji Katou", "Hiromichi Nose"]`, `patentAssignees: ["Sony Corporation"]`, `patentYear: 2018`.

Focus status is **NO_INTERNAL_RECONSTRUCTION**. The paraxial family at 0.28 m (focus condition: the infinity-state model
image distance) shows the following.

- G2 does the focusing: 2.58 / 2.67 / 2.77 mm image-ward with G4 fixed.
- G4 alone would have to move object-ward, which contradicts [0021].
- With both groups moving image-ward, |m| at the MFD spans 0.093–0.110 (wide), 0.118–0.145 (intermediate) and 0.172–0.208
  (tele).
- Sony's 0.19× selects a split only at tele: Δ2 = 5.30 mm, Δ4 = 3.30 mm. Rounding of 0.19 (±0.005) widens this to
  Δ4 = 2.38–4.22 mm.
- The tele ratio Δ4/Δ2 = 0.62 cannot be reached at wide or intermediate, where gap limits cap it at 0.34 and 0.51.

No closure is determined across the zoom range, so no focus law is invented.

## A.8. Quantitative-claim map (for Stage 2/3)

| Claim | Fact / result pointer | Governing source |
|---|---|---|
| EFL per station | `facts F-EFL-*`; `sourceModel.states.*.efl` | normalized model (MD-01) |
| Disclosed EFL/BF residual | `comparisons CMP-EFL-*`, `CMP-BFD-*` | Table 16, Table 22, MD-05 |
| Group focal lengths | `facts F-G1..F-G5` | ABCD; Table 22 |
| Stop SD schedule | `facts F-STOPSD-*` (calibrated inference) | Fno 2.88, MD-06 |
| Retrofocus statement | `sourceModel.states.*.retrofocusRatioBFDoverEFL` | computed |
| Petzval | `facts F-PETZVAL`, `sourceModel.petzvalTerms` | computed |
| Element roles and powers | `sourceModel.elementPowers` | computed; [0106]–[0110] |
| Glass labels | `evidence.glassEvidence.recommendedLabels`; `sourceModel.glassReplay` | catalog sheets C1 |
| Distortion and field coverage | `sourceModel.realChiefRays`, `wideFullFieldDiagnostic` | Figs. 14–16 |
| Focus disposition | `evidence.focus`; `sourceModel.focusFamily` | [0021], S2 |
| Element and asphere counts | `facts F-ELEMENTS`, `F-ASPH` | Table 13, [0113] |

There are no interpretive prose claims at Stage 1. Manual review of interpretive prose is required at Stage 3.

## A.9. Gate disposition

All mandatory CHAT_PREFLIGHT Stage 1 checks pass:

- originals and job identity;
- engine cross-check;
- L13 correction;
- group focal lengths;
- EFL disposition;
- conditions;
- first-order quantities;
- zoom motion;
- element signs;
- real chief rays;
- conic-domain feasibility;
- focus feasibility;
- glass replay;
- mutation sensitivity.

The direct EFL reproduction remains a visible non-mandatory FAIL with a supported disposition. Stage 2 tasks:

- implement MD-01 to MD-09;
- derive semi-diameters with the s2 limit and the wide-field truncation;
- set the stop SD schedule;
- author `rearPlates`;
- author the hybrid L2;
- set focus to identical vectors with disclosure;
- apply the glass labels above, with Unmatched for L4, L6, L12 and the resin;
- run Prettier on the data file using the project configuration.

Gate earned: **READY_FOR_DATA**.

## A.10. Pending integration

Closed 2026-10-20: integrated into `src/lens-data/sony/` (see the final section). `integrationStatus: INTEGRATION_PENDING`. The LENSVISUALIZER checks (`buildLens`, `validateLensData`, type check, render
diagnostics) are NOT_RUN and required at integration.


# Part B — Stage 2 data construction and chat preflight (stage2-r1)

## B.1 Entry gate and reference versions

Stage 1 inputs were received with legacy underscore names (`SonyFE1635mmF28GM_audit.md`, etc.) and were normalized to the
dotted stem names. Every byte hash matched the Stage 1 manifest (evidence `f3353499…`, verify `b48c114a…`, results
`9b7fca7e…`, audit `4822646f…`, patent `22f12791…`, job card `a1b78e09…`); the four job fields match. Tables 13–15 were
re-read against the page images (pdf pp30–31): R, d, Nd, νd, K and A4–A12 agree with `evidence.rawPrescription`; the element
shapes agree with [0106]–[0110].

The LensVisualizer repository was cloned read-only (`9e10e3951b34df107df8279dc04614b1aeac77fb`, 2026-10-02), and its
dependencies were installed with `npm ci --ignore-scripts` (no lifecycle hooks) under Node 22.22.2; `package.json` declares
Node ≥24.15, so this is a version deviation. No metadata generation, corpus test, build, Git write or batch report was run.

**Reference impact check.** The repository's `LENS_DATA_SPEC.md` (`7a17daf0…`) and `LENS_MOUNT_FORMAT_OPTIONS.md`
(`8ff0b0df…`) are newer than the project copies (`26e79f8a…`, `44aed806…`). The differences are:

- `maker: null`;
- assignee from same-application assignment history;
- `maxSdRatio` and `indexReferenceNote`;
- additional mount and format ids.

None affects this lens. The template, `defaults.ts`, `LENS_ANALYSIS_SPEC.md` and the Prettier configuration are
byte-identical. `sony-fe` and `135-full-frame` exist in `lensTaxonomy.ts`. The key `sony-fe-16-35mm-f28-gm` is unused, and
the corpus spells this Sony inventor "Kouji Katou" (the Pentax "Koji Kato" is a different person).

## B.2 Transformation ledger (evidence.modelingDecisions)

| ID | Implemented transformation |
|---|---|
| MD-01 | s25 Nd 1.496997 (printed 1.969970 preserved in evidence; header and element note disclose) |
| MD-02 | Asphere numerator read as y²c; (1+K) form, K entered directly; A4–A12 as printed, A14 = 0 |
| MD-03 | `rearPlates` CG 2.5 mm, 1.516798 / 64.2, `gapAfterMm` 1.00; s31 d = D(5) physical gap |
| MD-04 / MD-17 | L2 = glass body (id 2, s3) + resin layer (id 3, s4 junction), tag H1. 17 entries model 16 physical elements; `elementCount` 16, `groupCount` 13 (recounted from the data) |
| MD-05 | Prescription not rescaled or re-spaced; EFL +0.22–0.24 % and image-distance residuals stay visible |
| MD-10 | Patent s1–s31 map one-to-one onto data indices; s16 IRIS = STO; A-suffix on 1, 2, 5, 14, 15, 21, 30 |
| MD-11 | Semi-diameters scaled from the to-scale Fig. 13 (see B.3) |
| MD-12 | L3 18.3 → 18.0 mm and L16 13.0 → 12.0 mm for cross-gap clearance |
| MD-13 | `zoomApertureModel: "from-nominal-fno"`, `nominalFno` 2.88; STO base sd 9.165 mm (wide real-trace calibration) |
| MD-14 | Glass labels in runtime-resolvable form; Unmatched for L2 resin, L4, L6, L12; no nC/nF/ng/dPgF stored; `apd: "inferred"` on L11 and L13 |
| MD-15 | `zoomPositions` = Table 16 f (16.5, 22.91, 33.95); `focalLengthDesign` [16.5, 33.95]; `apertureDesign` 2.88; marketing 16–35 mm f/2.8 |
| MD-16 | NO_INTERNAL_RECONSTRUCTION: `var` keys 9, 11, STO, 21A and 31 carry D(1)–D(5); close vector = infinity vector at every station; `closeFocusM` 0.28 (Sony) |

## B.3 Semi-diameter derivation

**Basis.** No semi-diameters are tabulated in the patent. Fig. 13 (pdf p58, wide end) proved to be drawn to scale. A
least-squares fit of 12 axial vertex rows against the Table 13/14 wide positions gives 13.126 px/mm, with residuals of
2.06 px or less (about 0.15 mm). The drawn element half-widths, converted at that scale and rounded to 0.1 mm, give these
semi-diameters (mm):

| Element | SD (mm) | Note |
|---|---|---|
| L1 s1 | 29.2 | |
| L1 s2 | 19.8 | |
| L2 (hybrid) | 21.1 | |
| L3 | 18.3 | 18.0 after MD-12 |
| L4 | 17.6 | |
| L5 | 14.5 | |
| L6 | 14.9 | |
| L7 | 15.6 | |
| L8/L9 | 16.3 | |
| L10 | 15.5 | |
| L11/L12 | 13.0 | |
| L13 | 13.5 | |
| L14/L15 | 13.0 | |
| L16 | 13.0 | 12.0 after MD-12 |

The pixel rows are stored in `rawPrescription.figure13Measurements`, and the verifier recomputes the fit and every value
(check S2-SD-SOURCE).

**The two reductions (MD-12).** They were forced by the shared-band intrusion rule (≤ 0.9 × gap):

- 5A→6: 9.24 mm against an allowed 9.216 mm; the band must be ≤ 18.28 mm.
- 29→30A: 3.07 mm against an allowed 2.530 mm; the band must be ≤ 12.20 mm.

LensVisualizer's validator reported both failures on the drawn values, and the Python geometry check reproduces them (it
detects the same 3.07 mm when the mutation restores L16's drawn SD). The drawn outlines include mechanical rims, and every
traced design ray clears the reduced apertures.

**The stop mark.** Fig. 13's stop ticks scale to 9.9 mm, which matches no f/2.88 station, so they were not used. The stop
schedule from f/2.88 is 9.165 / 11.410 / 14.965 mm by real trace (paraxial 8.90 / 10.89 / 13.79). LensVisualizer
reproduces the real values exactly. This is calibration, not evidence of the physical iris diameter.

## B.4 Numerical results from the parsed data.ts (results.json → implementedModel)

The data file is read by a strict literal lexer and parser: no `eval`, no regex rewriting. The parser accepted its valid
fixture and rejected nine malformed ones: duplicate key, spread, arithmetic, identifier value, function call, leftover
token, missing `satisfies`, computed key and template string. Every quantity below is recomputed from the parsed file,
including the generated cover-glass faces. Expected source values come from the evidence through MD-01 and MD-10; they are
never the same variable as the observed value.

| Quantity | Wide | Intermediate | Tele |
|---|---|---|---|
| EFL (mm) | 16.519 | 22.963 | 34.025 |
| EFL vs Table 16/22 | +0.235 % | +0.230 % | +0.221 % |
| Image distance after CG (BF 1.00) | 1.108 | 1.086 | 1.005 |
| Air-equivalent BFD from s31 | 20.176 | 27.934 | 38.484 |
| BFD/EFL (retrofocus > 1) | 1.221 | 1.217 | 1.131 |
| Track s1 → image | 154.524 | 146.014 | 140.084 |
| Entrance pupil behind s1 | 22.578 | 21.915 | 19.881 |
| Stop SD for f/2.88 (real; calibration) | 9.165 | 11.410 | 14.965 |

**Agreement checks.**

- y-ν and ABCD engines agree to better than 1e-9.
- EFL and image distance equal the Stage 1 normalized model to float precision.
- Groups: G2 66.534, G4 42.631, G5 −80.399 (Table 22: 66.53 / 42.63 / −80.40).
- Conditions (1)–(4): 1.561 / 0.377 / 2.813 / 0.530 (Table 21: 1.56 / 0.38 / 2.81 / 0.53).
- Authored element `fl` values match the thick-lens-in-air values to 0.06 mm, and every type is power-sign consistent.
- Zoom motion reproduces [0059], including G2's reversal.
- The Petzval sum, surface by surface, is +0.001754 mm⁻¹.

**Geometry at the authored SDs (S2-GEOMETRY, 17 zoom samples).**

| Rule | Result |
|---|---|
| Edge thickness | All positive. Minimum L13 0.294 mm (drawn near knife-edge), then L9 0.628 mm |
| Resin edge (L2r) | 1.088 mm |
| Rim slope | Maximum 63.49° at s5A (resin asphere at 21.1 mm), against the 64.16° cap |
| Conic domain (K > 0) | s2 19.8 mm against the 24.20 mm limit |
| Cemented-junction SDs | Continuous |
| Tightest cross-gap margins | 29→30A 0.121 mm; 5A→6 0.352 mm; 7→8 0.364 mm |

**Ray containment (S2-RAY-CONTAINMENT; real meridional rays, authored SDs).**

- **Axial bundle:** the f/2.88 bundle passes at 9 zoom samples. The tightest point is s20 at tele, at 0.951 of its SD.
- **Chief rays:** every chief ray at the published (Y, A) points passes. The wide 53.95° point is NOT_APPLICABLE (MD-09);
  the wide 49.56° point reaches 0.905 of the s2 SD.
- **60 %-field bundles:** bundles at 0.6 × published ω, through stop fractions 0, ±0.375 and ±0.75, pass at all three
  stations. The worst is 0.846 at s22, tele.

**Disclosure: corner vignetting at full aperture.** The modeled apertures vignette the full-field rim rays: the outer rim
ray clips at s22–s28 by up to 6 % at wide, 10 % at intermediate and 20 % at tele, and the lower rim ray at L5/L6 by up to
9 % at tele. At wide and intermediate the lower rim ray at full field cannot be formed at all, because of the s2 conic
domain. These figures describe a modeled-aperture estimate, not production illumination data.

**Asphere departures from the vertex sphere at the modeled SDs (mm):**

| Surface | SD (mm) | Departure (mm) |
|---|---|---|
| 1A | 29.2 | +3.863 |
| 2A | 19.8 | +1.467 |
| 5A | 21.1 | +1.226 |
| 14A | 15.6 | −0.425 |
| 15A | 15.6 | −0.222 |
| 21A | 15.5 | +0.148 |
| 30A | 12.0 | −0.793 |

The polynomial-only contributions are recorded separately in the results.

**Mutation sensitivity (S2-MUTATION-SENSITIVITY).** Each altered input is detected:

| Mutation | Checks that fail |
|---|---|
| s25 printed index restored | source, first-order, group, element and stop checks |
| s2 SD set to 24.5 mm | geometry and SD-source checks |
| D(5) tele digit swap | source and first-order checks |
| L16 drawn SD restored | geometry and SD-source checks; also LensVisualizer validate/build |

## B.5 LensVisualizer targeted checks (scope LENSVISUALIZER; repo 9e10e39, Node 22.22.2)

These checks ran through `verify.py --lv-repo`. The data file is copied temporarily into `src/lens-data/`, the
file-scoped config is removed afterwards, and the working tree is left clean.

| Check | Result |
|---|---|
| LV-TYPECHECK | PASS — `tsc --noEmit` (5.9.3) on this file only; a string `nominalFno` mutant produced TS2322 |
| LV-PRETTIER | PASS — Prettier 3.8.1 `--check` with the project `prettierrc.json` (identical to the repo config) |
| LV-VALIDATE | PASS — `validateLensData({...LENS_DEFAULTS, ...data})` returns no errors |
| LV-BUILDLENS | PASS — zoomEFLs 16.5187 / 22.9628 / 34.0249 (identical to Python); zoomStopSDs 9.165 / 11.410 / 14.965; zoomFOPENs 2.88 |
| LV-RENDER-DIAGNOSTICS | PASS — 0.000 mm hidden trim at 9 zoom × 2 focus states (limit 0.25 mm) |
| LV-GLASS-RESOLUTION | PASS — every labelled element and the CG resolve to a coordinate-compatible catalog row; the four Unmatched entries do not resolve |

The runtime dispersion-quality summary is "abbe", because the Unmatched entries fall back to Abbe dispersion.

**Observation OI-09.** The runtime's vignetting-limited half-fields are 43.43° / 44.35° / 42.63°, against the published
53.95° / 43.14° / 31.71°. The runtime estimate is paraxial and SD-limited, so it understates the wide field and exceeds the
tele coverage. A rectilinear `maxTraceFieldDeg` is a single number and cannot express a zoom-dependent field, so the data
is left unchanged and the difference is disclosed. The same pattern exists in the corpus GM II file.

**Not run (integration scope):** the corpus policy tests (patent metadata, analysis floor, full validate and render sweeps),
`generate:metadata`, the full typecheck and the production build. A data-level negative control (L16 drawn SD restored)
produced LV-VALIDATE and LV-BUILDLENS FAIL with the expected 29→30A error.

## B.6 Correction and discrepancy register (Stage 2 additions)

- **C-03 / MD-12 — SD reductions on L3 and L16.** Before and after values are in B.2. Evidence: validator output and
  S2-GEOMETRY.
- **D-04 — runtime half-field (OI-09).** Disclosed; no data change.
- **D-05 — Fig. 13 stop ticks.** The 9.9 mm mark does not match the calibrated f/2.88 stop at any station. The ticks are
  not used.
- **Carried forward.** C-01 (s25 index) and C-02 (asphere numerator) are implemented. D-01 (EFL residual) remains a
  visible non-mandatory FAIL (S2-EFL-PUBLISHED-REPRODUCTION), disposed by MD-05 and S1-EFL-DISPOSITION.

## B.7 Quantitative-claim map (data.ts strings → evidence)

| Claim in data.ts | Pointer | Basis |
|---|---|---|
| Header: 16 elements / 13 groups, 17 entries | facts F2-COUNTS | parsed data; Sony S2/S3 |
| Header: 7 aspherical surfaces on 5 elements | facts F-ASPH; `asph` keys | Table 13/15, [0113] |
| Header: s25 correction, G5 +48.5 vs −80.40 | comparisons CMP-G5-raw/norm, CMP2-G5 | MD-01 |
| Header: EFL 16.52 / 22.96 / 34.02; image residuals | F2-EFL-*, CMP2-EFL-PATENT-*; implementedModel.states | MD-05 |
| Header: G2 reversal; G1 +14.44 mm | implementedModel.zoomMotion | Table 14 |
| Header: Fig. 13 scale 13.13 px/mm ±0.15 mm | implementedModel.figure13Fit | MD-11 |
| specs: f ≈ 16.5–33.95; F/2.88; 2ω 107.9–63.4° | rawPrescription.systemValues | Table 16 |
| `fl` on every element | implementedModel.elementFocalLengths | computed |
| `focalLengthDesign`, `apertureDesign`, `zoomPositions` | MD-15 | Table 16 |
| STO sd 9.165 | F2-STOPSD-wide | MD-13 calibration |
| Glass labels; `apd: "inferred"` | glassEvidence; LV-GLASS-RESOLUTION | MD-14 |
| `focusDescription` | evidence.focus | MD-16 |

Element `role` strings are interpretive. They are consistent with the computed powers and positions, but their optical
explanations require the Stage 3 manual prose review.

## B.8 Gate disposition (Stage 2)

All 15 mandatory Stage 1 checks and all 15 mandatory Stage 2 CHAT_PREFLIGHT checks PASS:

- parser;
- source comparison;
- structure preflight;
- engine cross-check;
- first-order equivalence;
- groups and conditions;
- element focal lengths;
- focus authoring;
- zoom motion;
- SD source;
- stop SD;
- geometry;
- ray containment;
- glass labels;
- mutation sensitivity.

Two non-mandatory checks stay visible as FAIL: S1-EFL-PUBLISHED-REPRODUCTION and S2-EFL-PUBLISHED-REPRODUCTION, both
disposed by MD-05. The targeted LensVisualizer checks also pass, and corpus-level checks remain integration tasks. No
substantive blocker remains.

Gate earned: **READY_FOR_ANALYSIS**, bound to the data, evidence, verifier and results hashes recorded in the Stage 2
manifest checkpoint.

## B.9 Pending integration

Closed 2026-10-20: integrated. `integrationStatus: INTEGRATION_PENDING`. Still required at integration:

- corpus validation and render sweeps;
- patent-metadata and analysis-file policy tests;
- `generate:metadata` (it will move the file into the maker folder and rewrite the type import);
- a full typecheck and build under the declared Node 24 runtime.


# Part C — Stage 3 analysis authoring and consistency gate (stage3-r1)

## C.1 Entry gate

The Stage 2 dossier was received with underscore filenames and normalized to dotted stems. Every byte hash matched the Stage 2 checkpoint (data `b9a32655…`, evidence `31518a0f…`, verifier `d1b79618…`, results `9bcb5666…`). The Stage 2 verifier was rerun on those files: all 30 mandatory CHAT_PREFLIGHT checks passed and all 2,333 stable numerical values equalled the packaged results; only the six LENSVISUALIZER checks differed (NOT_RUN without `--lv-repo`).

LensVisualizer head had moved to `3d44a1be91db853725ac841b65a9e228f2c544ef` (UI, aperture-readout and focus-slider changes). `LENS_ANALYSIS_SPEC.md` is byte-identical to the project copy. The repository's analysis-file floor (`__tests__/src/lens-data/analysisFiles.test.ts`) was read and re-implemented for this one file inside S3-SECTIONS; the corpus-wide test itself was not run.

## C.2 Changes during Stage 3

- **Data file:** unchanged (`b9a32655…`). No analysis finding contradicted a data value, label or role string, so the Stage 2 gate was not reopened. Prettier `--check` with the project configuration passes.
- **Evidence (additive only, ledger S3-EV-01):** sources S7 (Sony UK specification/features page, direct fetch), S8 (Sony 17 May 2017 release text as reproduced by DPReview, direct fetch) and S9 (Sony SEL1635GM2 specifications, search rendering); `conditions.preferredRanges` (1)′–(4)′ from [0028], [0031], [0034], [0037] and `rangeLocators`; `productCorrelation.stage3Additions`. A structural diff confirmed no pre-existing field changed. All Stage 1–2 checks were rerun; 2,361 stable numbers compared with zero differences.
- **Verifier:** Stage 3 block added (Seidel/primary-chromatic decomposition and validation, aspheric counterfactual, catalog ΔPgF, preferred ranges, analysis gate with executed claim map). Stage 1–2 code paths untouched.
- **Analysis, self-corrections before delivery:** (a) "eight of the sixteen elements have nd > 1.83" → seven (counted from data); (b) a draft stated that the L1 and L16 aspheres act on distortion with opposite signs — the counterfactual shows both act against barrel distortion and only their tangential-field effects are opposed; (c) the L11 role was narrowed: lateral-colour correction belongs to the L11+L12 doublet (junction term), L11's own surface contributes with G1's sign; (d) design-intent wording for the L2 hybrid, L8–L9 doublet and L14–L15 doublet was replaced by computed statements; (e) the 14A+15A tele tangential-focus cell was corrected from −0.52 to −0.51 mm by the claim map.

## C.3 New computations (results → implementedModel.stage3Analysis)

**Seidel and primary chromatic coefficients.** Welford surface sums with aspheric K/A4 terms; marginal ray at f/2.88, chief ray through the stop centre scaled to Y = 21.63 mm; implemented model including the cover glass; F−C dispersion (nd − 1)/νd. Validation (S3-SEIDEL-VALIDATION) against independent measurements, extrapolated to zero aperture/field:

| State | Quantity | Coefficient | Independent | Pass |
|---|---|---:|---:|---|
| wide | S_I (transverse SA3, mm) | -0.0104532 | -0.0104535 | True |
| wide | S_V (distortion3 fraction at Y) | -0.211957 | -0.211921 | True |
| wide | 3S_III+S_IV (tangential focus3 at Y, mm) | 0.762885 | 0.760574 | True |
| wide | S_IV/H^2 vs sum phi/(n n') | 0.0017543 | 0.0017543 | True |
| wide | C_I (axial colour F-C, mm) | -0.0690993 | -0.0690798 | True |
| wide | C_II (lateral colour F-C at Y, mm) | -0.00797659 | -0.00791494 | True |
| intermediate | S_I (transverse SA3, mm) | -0.0123125 | -0.0123152 | True |
| intermediate | S_V (distortion3 fraction at Y) | -0.0591048 | -0.0591009 | True |
| intermediate | 3S_III+S_IV (tangential focus3 at Y, mm) | 0.646816 | 0.646157 | True |
| intermediate | S_IV/H^2 vs sum phi/(n n') | 0.0017543 | 0.0017543 | True |
| intermediate | C_I (axial colour F-C, mm) | 0.0350566 | 0.0350607 | True |
| intermediate | C_II (lateral colour F-C at Y, mm) | -0.00443619 | -0.00439066 | True |
| tele | S_I (transverse SA3, mm) | 0.0758352 | 0.0758145 | True |
| tele | S_V (distortion3 fraction at Y) | 0.0109885 | 0.0109886 | True |
| tele | 3S_III+S_IV (tangential focus3 at Y, mm) | 1.12687 | 1.12731 | True |
| tele | S_IV/H^2 vs sum phi/(n n') | 0.0017543 | 0.0017543 | True |
| tele | C_I (axial colour F-C, mm) | 0.0499895 | 0.0499818 | True |
| tele | C_II (lateral colour F-C at Y, mm) | -0.0045853 | -0.0045527 | True |

Third-order distortion at the wide end (−21.2 % at paraxial Y) greatly overstates the real −5.05 % at 49.56°; third-order values are therefore used in the analysis only for group/unit balance (Petzval, primary colour, tele spherical aberration), never as full-field predictions.

**Aspheric counterfactual.** Each set replaced by its vertex sphere; real meridional rays at the published (Y, A) points to the patent plane; f/2.88 marginal ray at the paraxial plane. The unmodified baseline reproduces the Stage 1 chief-ray heights to < 1e-6 mm (S3-ABLATION-BASELINE).

**Catalog ΔPgF** for named candidate rows only (Schott normal line θgF = 0.6438 − 0.001682 νd), labelled catalog-derived in the analysis. **Conditions** (1)–(4) lie inside the claimed and preferred ranges (S3-CONDITIONS-PREFERRED). **Iris ratio** tele/wide from the calibrated stop SDs: 1.633.

## C.4 Quantitative-claim map (executed; S3-CLAIM-MAP)

89 claims; each expected string is regenerated from results and must appear verbatim (whitespace-normalized) in the analysis. All found. Element first lines (nd, νd, glass token, f) and the asphere coefficient table are checked separately against the parsed data (S3-ELEMENT-LINES, S3-ASPHERE-TABLE). Source facts copied from the patent (dates, Table 16/21/22 values, paragraph content) are covered by S3-METADATA, S3-CITATIONS and the Stage 1 source comparison.

| Claim | Section | Expected text | Result pointer |
|---|---|---|---|
| C-BFD | Architecture | 20.18 / 27.93 / 38.48 mm at wide / intermediate / tele, which is | `implementedModel.states.*.bfdFromLastLensAirEquivalent` |
| C-RETRO | Architecture | 1.22, 1.22 and 1.13 times the computed EFL | `implementedModel.states.*.retrofocusRatio` |
| C-TRACK | Architecture | 154.52 / 146.01 / 140.08 mm, so the optical system is longest | `implementedModel.states.*.totalTrackS1ToImage` |
| C-GFL | Architecture | \| G1 \| L1–L4 \| −19.52 mm \| — \| | `implementedModel.groupFocalLengths.G1` |
| C-GFL2 | Architecture | \| G2 \| L5 \| +66.53 mm \| 66.53 \| | `implementedModel.groupFocalLengths.G2` |
| C-GFL3 | Architecture | \| G3 \| L6, L7 \| +360.4 mm \| — \| | `implementedModel.groupFocalLengths.G3` |
| C-GFL4 | Architecture | \| G4 \| L8–L10 \| +42.63 mm \| 42.63 \| | `implementedModel.groupFocalLengths.G4` |
| C-GFL5 | Architecture | \| G5 \| L11–L16 \| −80.40 mm \| −80.40 \| | `implementedModel.groupFocalLengths.G5` |
| C-ZOOM | Architecture | \| G1 \| +14.44 mm (toward the image) \| | `implementedModel.zoomMotion` |
| C-ZOOM2 | Architecture | \| G2 \| −2.92 mm (toward the object) \| reverses: −105.93 → −109.05 → −108.85 mm \| | `implementedModel.zoomMotion.G2` |
| C-ZOOM3 | Architecture | \| G3 and stop \| −14.86 mm \| | `implementedModel.zoomMotion.G3` |
| C-ZOOM4 | Architecture | \| G4 \| −23.27 mm \| | `implementedModel.zoomMotion.G4` |
| C-ZOOM5 | Architecture | \| G5 \| −18.41 mm \| | `implementedModel.zoomMotion.G5` |
| C-BETA2 | Architecture | magnification of 6.320 at wide and 2.386 at tele | `sourceModel.conditions.beta2` |
| C-BETA2b | Conditions | the computed G2 magnifications are 6.320 at wide and 2.386 at tele | `sourceModel.conditions.beta2` |
| C-DEP-1A | L1 | departure from the vertex sphere reaches +3.863 mm at the modeled rim | `implementedModel.asphereDepartures` |
| C-DEPS | Aspherical Surfaces | are +3.863 mm (1A at 29.2 mm), +1.467 mm (2A), +1.226 mm (5A), −0.425 mm (14A), −0.222 mm (15A), +0.148 mm (21A) and −0.793 mm (30A) | `implementedModel.asphereDepartures` |
| C-DEP-L7 | L7 | (−0.425 mm on 14A and −0.222 mm on 15A at the modeled rim) | `implementedModel.asphereDepartures` |
| C-DEP-L10 | L10 | weak in departure (+0.148 mm at the modeled rim) | `implementedModel.asphereDepartures` |
| C-DEP-L16 | L16 | 30A (−0.793 mm departure at the modeled rim) | `implementedModel.asphereDepartures` |
| C-ABL-L1 | L1 | from −5.05 % to −25.3 % and displaces the tangential focus there by +6.37 mm | `asphereAblation` |
| C-ABL-5A | L2 | the tangential focus at 49.56° moves from +0.33 mm to −4.32 mm | `asphereAblation` |
| C-ABL-5Ad | L2 | distortion changes by about one percentage point | `asphereAblation` |
| C-ABL-L7 | L7 | at tele from +20 µm to −3145 µm | `asphereAblation.marginal` |
| C-ABL-L10 | L10 | marginal-ray aberration at tele becomes −2104 µm | `asphereAblation.marginal` |
| C-ABL-L16 | L16 | from −5.05 % to −18.1 % and the tangential focus there by −9.30 mm; at tele 31.71° the tangential focus moves by −18.10 mm | `asphereAblation` |
| C-ABLROW-none | Aspherical Surfaces | \| none (design) \| −5.05 % / +0.33 mm \| +3.03 % / +0.13 mm \| +20 µm \| | `asphereAblation` |
| C-ABLROW-1A+2A | Aspherical Surfaces | \| 1A + 2A (L1) \| −25.34 % / +6.37 mm \| −3.89 % / +12.13 mm \| +75 µm \| | `asphereAblation` |
| C-ABLROW-5A | Aspherical Surfaces | \| 5A (L2 resin) \| −4.07 % / −4.32 mm \| +3.51 % / −0.11 mm \| −51 µm \| | `asphereAblation` |
| C-ABLROW-14A+15A | Aspherical Surfaces | \| 14A + 15A (L7) \| −5.02 % / −0.20 mm \| +3.05 % / −0.51 mm \| −3145 µm \| | `asphereAblation` |
| C-ABLROW-21A | Aspherical Surfaces | \| 21A (L10) \| −5.72 % / −2.63 mm \| +2.95 % / −1.71 mm \| −2104 µm \| | `asphereAblation` |
| C-ABLROW-30A | Aspherical Surfaces | \| 30A (L16) \| −18.09 % / −9.30 mm \| −6.43 % / −18.10 mm \| −1649 µm \| | `asphereAblation` |
| C-FL-H1 | L2 | Composite L2 (s3–s5): f = −108.8 mm. | `sourceModel.elementPowers` |
| C-FL-D1 | L8–L9 | Doublet (s17–s19): f = +171.5 mm. | `sourceModel.elementPowers` |
| C-FL-D2 | L11–L12 | Doublet (s22–s24): f = −52.0 mm. | `sourceModel.elementPowers` |
| C-FL-D3 | L14–L15 | Doublet (s27–s29): f = −81.9 mm. | `sourceModel.elementPowers` |
| C-SA-L3 | L3 | G1 (+3385 µm transverse at f/2.88), and L4 behind it contributes with the opposite sign (−2961 µm) | `stage3.seidel.physical.tele.units` |
| C-LC-L4 | L4 | it contributes +311 µm of lateral colour (F−C at Y = 21.63 mm), against a combined −539 µm from L1 | `stage3.seidel.physical.wide.units` |
| C-LC-L5 | L5 | It contributes +169 µm of primary lateral colour at wide | `stage3.seidel.physical.wide.units` |
| C-LC-D1 | L8–L9 | contribution of the doublet at wide is only +20 µm | `stage3.seidel.physical.wide.units` |
| C-G4COL | L8–L9 | G4 as a whole is not chromatically neutral (−107 µm lateral and −656 µm axial colour at wide) | `stage3.seidel.physical.wide.groups.G4` |
| C-LC-D2 | L11–L12 | single source of corrective lateral colour in the rear group: +325 µm at wide | `stage3.seidel.physical.wide.units` |
| C-PZ-L13 | L13 | positive Petzval term in the design (+20.2 × 10⁻³ mm⁻¹) | `stage3.seidel.physical.wide.units.L13` |
| C-LC-L13 | L13 | chromatic contribution small for its power (−135 µm of lateral colour at wide) | `stage3.seidel.physical.wide.units` |
| C-D3 | L14–L15 | modest (−97 µm at wide), and it supplies negative power with a net Petzval contribution of −6.8 × 10⁻³ mm⁻¹ | `stage3.seidel.physical.wide.units` |
| C-PZ-L16 | L16 | Its Petzval contribution (−6.7 × 10⁻³ mm⁻¹) flattens the field | `stage3.seidel.physical.wide.units.L16` |
| C-NHIGH | Glass | seven of the sixteen elements have nd > 1.83 | `data.ts elements (L2r excluded)` |
| C-DPGF | Glass | ΔPgF ≈ +0.024 for FCD705 (L11), +0.032 for FCD1 (L13) and +0.030 for E-FDS1 (L14) | `stage3.catalogPartialDispersion` |
| C-FOCUS-wide | Focus | \| Wide \| 2.58 mm \| 0.093–0.110× \| | `sourceModel.focusFamily.stations.wide` |
| C-FOCUS-intermediate | Focus | \| Intermediate \| 2.67 mm \| 0.118–0.145× \| | `sourceModel.focusFamily.stations.intermediate` |
| C-FOCUS-tele | Focus | \| Tele \| 2.77 mm \| 0.172–0.208× \| | `sourceModel.focusFamily.stations.tele` |
| C-FOCUS-019 | Focus | it selects G2 = 5.30 mm and G4 = 3.30 mm of image-ward travel | `sourceModel.focusFamily.stations.tele.splitGiving019x` |
| C-CONIC | Aspherical Surfaces | \|R\|/√(1+K) = 24.70 mm | `data.ts s2 R and K` |
| C-LCROW-L1 | Chromatic | \| L1 \| −239 \| −208 \| | `stage3.seidel.physical.*.units` |
| C-LCROW-L2 | Chromatic | \| L2 hybrid \| −88 \| −70 \| | `stage3.seidel.physical.*.units` |
| C-LCROW-L3 | Chromatic | \| L3 \| −212 \| −145 \| | `stage3.seidel.physical.*.units` |
| C-LCROW-L4 | Chromatic | \| L4 \| +311 \| +223 \| | `stage3.seidel.physical.*.units` |
| C-LCROW-L5 | Chromatic | \| L5 (G2) \| +169 \| +93 \| | `stage3.seidel.physical.*.units` |
| C-LCROW-L8+L9 | Chromatic | \| L8+L9 \| +20 \| +17 \| | `stage3.seidel.physical.*.units` |
| C-LCROW-L10 | Chromatic | \| L10 \| −127 \| −75 \| | `stage3.seidel.physical.*.units` |
| C-LCROW-L11+L12 | Chromatic | \| L11+L12 \| +325 \| +311 \| | `stage3.seidel.physical.*.units` |
| C-LCROW-L13 | Chromatic | \| L13 \| −135 \| −136 \| | `stage3.seidel.physical.*.units` |
| C-LCROW-L14+L15 | Chromatic | \| L14+L15 \| −97 \| −108 \| | `stage3.seidel.physical.*.units` |
| C-LCROW-L16 | Chromatic | \| L16 \| +82 \| +104 \| | `stage3.seidel.physical.*.units` |
| C-LCROW-G3 | Chromatic | \| L6 + L7 (G3) \| −12 \| −8 \| | `stage3.seidel.physical.*.groups.G3` |
| C-LCROW-TOT | Chromatic | \| Total, incl. cover glass \| −8.0 \| −4.6 \| | `stage3.seidel.physical.*.total` |
| C-LC-G1 | Chromatic | (G1: −228 µm at wide) | `stage3.seidel.physical.wide.groups.G1` |
| C-LC-ZOOM | Chromatic | (+325 to +311 µm), while L5's contribution falls by almost half (+169 to +93 µm) | `stage3.seidel.physical` |
| C-AX | Chromatic | is −69 µm at wide, +35 µm at intermediate and +50 µm at tele | `stage3.seidel.physical.*.total` |
| C-AXG | Chromatic | G2 goes from −652 to −1297 µm, G4 from −656 to −1809 µm, and G5 from +955 to +2277 µm | `stage3.seidel.physical.*.groups` |
| C-PZ | Petzval | is +0.001754 mm⁻¹, an equivalent Petzval radius of about −570 mm | `implementedModel.states.wide.petzvalSum` |
| C-PZG | Petzval | G1 −25.7, G2 +9.1, G3 +2.6, G4 +16.1 and G5 −0.4 | `stage3.seidel.physical.wide.groups` |
| C-PZL13 | Petzval | (L13: +20.2) | `stage3.seidel.physical.wide.units.L13` |
| C-SAG | Petzval/SA | are +1500 µm (G1), −1193 µm (G2), −1786 µm (G3), −51 µm (G4) and +1604 µm (G5), summing to +76 µm | `stage3.seidel.physical.tele` |
| C-SAREAL | Petzval/SA | lands within +20 µm of the paraxial focus | `asphereAblation.marginal[none].tele` |
| C-COND(1) | Conditions | \| 1.56 \| 1.561 \| | `implementedModel.conditions` |
| C-COND(2) | Conditions | \| 0.38 \| 0.377 \| | `implementedModel.conditions` |
| C-COND(3) | Conditions | \| 2.81 \| 2.813 \| | `implementedModel.conditions` |
| C-COND(4) | Conditions | \| 0.53 \| 0.530 \| | `implementedModel.conditions` |
| C-RAWG5 | Verification | G5 computes to +48.5 mm instead of | `sourceModel.branches.raw.groupFocalLengths.G5` |
| C-EFL | Verification | The computed EFL is 16.52 / 22.96 / 34.02 mm | `implementedModel.states.*.efl` |
| C-EFLRES | Verification | which is +0.23 %, +0.23 % and +0.22 % above | `comparisons CMP2-EFL-PATENT-*` |
| C-IMGRES | Verification | image falls +0.108 / +0.086 / +0.005 mm beyond | `implementedModel.states.*.imageDistanceAfterPlate` |
| C-CHIEF | Verification | land within +0.006 to +0.045 mm of the printed image heights at eight of the nine | `sourceModel.realChiefRays` |
| C-DIST | Verification | Real-ray distortion is −5.05 % at wide (49.56°), +0.73 % at intermediate (43.14°) and +3.03 % at tele (31.71°) | `asphereAblation[none]` |
| C-FIG13 | Verification | Fig. 13 section (13.13 px/mm | `implementedModel.figure13Fit` |
| C-STOP | Verification | (9.165 / 11.410 / 14.965 mm), so the iris must open by a factor of 1.63 | `implementedModel.states.*.stopSemiDiameterRealForFno` |
| C-2W | Identification | 2ω = 107.90°–63.42° | `rawPrescription.systemValues (Table 16)` |
| C-ENG | Verification | agreeing to better than 10⁻⁹ | `implementedModel.engineAgreement` |

## C.5 Manual review of interpretive prose and citations

Each interpretive statement was checked against computation or source text rather than by string matching:

- L1 aspheres "principal control of wide-end barrel distortion": counterfactual −5.05 % → −25.34 % at 49.56°; patent [0038]–[0039] states the purpose of G1 aspheres. Supported.
- L2 hybrid: [0113] states 複合非球面; "negligible power" from f = +2723 mm. No manufacturing-intent claim retained.
- L4 "chromatic partner of the front negative elements": +311 µm vs −539 µm primary lateral colour at wide. Supported; the earlier "limits divergence" phrase was removed as unsupported.
- L7 "largest effect on spherical aberration among the aspheres, almost none on distortion": −3145 µm vs −2104 (21A), −1649 (30A), +75 (L1), −51 (5A); distortion change ≤ 0.03 points. Supported.
- L10/21A link to condition (1): stated as possible, with explicit note that no close-focus data quantify it.
- L11+L12 as the rear-group lateral-colour corrector: +325 µm (largest positive unit term in G5); [0040]–[0041] for the cemented G5 lens. Supported at doublet level only.
- L13 "largest single positive Petzval term": +20.2 vs next L10 +11.4 (×10⁻³ mm⁻¹). Supported.
- L14+L15 "not a conventional achromat": positive member has the lower νd (20.9 vs 31.3). Factual.
- L16 field flattening and off-axis leverage: Petzval −6.7 ×10⁻³ mm⁻¹; 30A counterfactual −18.09 %, −9.30 mm, −18.10 mm. Supported.
- M-series molding-glass observation: coordinate fact; production process explicitly not claimed.
- Focus rationale: [0004], [0013]–[0016], [0021], [0025], [0060] re-read against the page images; Sony two-DDSSM statement from S7.
- Correlation: S7/S8 manufacturer text; second XA element deliberately unassigned; Wikipedia barrel-extension statement not used.
- Paragraph citations all lie in [0004]–[0113]; conditions text [0027], [0030], [0033], [0036] paraphrased without adding limits not in the source.
- Sources: every URL in the analysis is recorded in evidence.sources; manufacturer facts take precedence over third-party listings (none used).

## C.6 Gate disposition (Stage 3)

All 30 mandatory Stage 1–2 checks and all 12 mandatory Stage 3 checks pass (S3-SEIDEL-VALIDATION, S3-ABLATION-BASELINE, S3-CONDITIONS-PREFERRED, S3-CLAIM-MAP, S3-METADATA, S3-ELEMENT-LINES, S3-ASPHERE-TABLE, S3-COUNTS-LABELS, S3-SECTIONS, S3-STYLE, S3-DISCLOSURES, S3-CITATIONS). The two EFL-reproduction checks remain visible non-mandatory FAILs disposed by MD-05. The six targeted LensVisualizer checks pass at `3d44a1b` (Node 22.22.2; the repository declares Node ≥ 24.15). This is construction verification by the author, not an independent audit.

Gate earned: **READY_FOR_AUDIT**, bound to the hashes in the Stage 3 manifest checkpoint.

## C.7 Pending integration

Closed 2026-10-20: integrated. `integrationStatus: INTEGRATION_PENDING`. Still required at integration: corpus validation/render sweeps, the corpus analysis-file and patent-metadata policy tests, `generate:metadata`, full typecheck and build under Node 24. Stage 4 (fresh source-first audit) has not begun.

# Part D — Stage 4 source-first independent audit (stage4-r1)

## D.1 Job, inputs and reference versions

Job card unchanged: WO2018139160A1 / Sony FE 16-35mm F2.8 GM / Example 4 / SonyFE1635mmF28GM. The Stage 3 dossier was
received with underscore filenames (`SonyFE1635mmF28GM_data.ts` etc.) and normalized to the dot names; byte hashes of all
nine received files match the Stage 3 manifest (packageRevision stage3-r1):

| File (as received) | SHA-256 |
|---|---|
| WO_2018139160_A1.pdf | 22f1279120b9e3d86541064f6f3b3ae1592ae27c57335f36729c5d1cf88edf41 |
| SonyFE1635mmF28GM.txt | a1b78e090e78c1e8bcbd2cbd2f4e982fe1643b2d0817da78893b14152567ec7a |
| data.ts | b9a326552b3c5c4fca941aec238c3fd9f808df6020fa4574492a7b400b784367 |
| analysis.md | 94e05985a94ee00b018543fcc7aadab92e3df9866351253395791f1c183b1af3 |
| evidence.json | 5f0d92eef17214b6e53a32b3c49e2b5e4231e58628f3d3e0e5603dd54d18b5ba |
| verify.py | 6188711449120167438e25de73b2bd9b2e86d860d140a7f92215c2bca30f1110 |
| results.json | b7a24d374a9c992822dacd2dea5e5aedc87f0fe0743601ec77ccce91ed3ff9ee |
| audit.md | 7644d7f27782a85bac6465c20a9f0eee55e7a19daf2d59bbeb5378d546562621 |
| manifest.json (stage3) | 32bf10d45cd40eec4f853c4070571b8dfeb5db5798ca99e87b5ea1161de59aad |

Controlling references read: LensPatentStage4Audit.txt, LensPatentChatProtocol.md and LensPatentDossierContract.md
(CHAT-1.0), LENS_DATA_SPEC.md, LENS_ANALYSIS_SPEC.md, defaults.ts, prettierrc.json (hashes in manifest.references).
The candidate verifier replayed unchanged with exit 0 before any edit.

## D.2 Independence scope and exposure

Pass A was executed before any candidate data/analysis/evidence/results/audit/verify bytes were opened. Visible at that
time: the job card, the patent PDF, the uploaded filenames, the stage prompts and project specifications, and general
methodology notes held in user memory (no lens-specific content). Earlier conversations in the same project may contain
prior lens work, so this is procedural source-and-method independence, not blindness. Correction validation (Pass B)
was performed by the same reviewer and is not independent of the reviewer's own baseline.

## D.3 Pass A — fresh extraction, code and frozen baseline

- Re-extracted from 300-dpi renders of PDF pp. 30–31 (printed 28–29: Tables 13–16) and p. 36 (printed 34: Tables
  21–22), with 900-dpi row crops of s1–3, s20–21, s25–26 and s30–31. The printed s25 value 1.969970 / 81.6 is confirmed
  in the raster.
- Fresh code: y–ν trace and ABCD matrices (separate implementations), a real meridional tracer using [0057] with the
  (1+K) conic form, and an unseeded six-vendor glass search (1,087 rows; opticalglass 2.0.2 bundled catalogs).
- Frozen fingerprint `0c4ecad068a4167c2104197a0c6562f0f2edf6b2d8eaf9260de80efb8b6082de` (sha256 of the canonical JSON
  of baseline results + glass matches). Values are retained in `evidence.independentPass.independentBaseline`; the
  calculation path is consolidated as the `I4_*` / `s4_*` section of verify.py with its own literal source inputs.

Key independent results (patent scale; d-line; s25 = 1.496997):

| Quantity | Wide | Intermediate | Tele | Published |
|---|---:|---:|---:|---|
| EFL (y–ν = ABCD) | 16.519 | 22.963 | 34.025 | 16.5 (16.48 T22) / 22.91 / 33.95 |
| Paraxial image beyond BF 1.00 | +0.108 | +0.086 | +0.005 | 0 |
| ω at Y = 21.63 mm (real chief ray) | 54.00° | 43.09° | 31.68° | 53.95° / 43.14° / 31.71° |
| G2 β | 6.320 | 3.003 | 2.386 | 6.31 / — / 2.38 |
| Track s1→image | 154.52 | 146.01 | 140.08 | — |

G2 = 66.534, G4 = 42.631, G5 = −80.399 mm (Table 22: 66.53 / 42.63 / −80.40). Conditions 1.561 / 0.377 / 2.806 /
0.530 (Table 21: 1.56 / 0.38 / 2.81 / 0.53). Petzval sum +0.001754 mm⁻¹. Alternative conic mapping (K → K−1 on 1A, 2A,
5A) cannot trace the wide published field, supporting the (1+K) reading.

Source discrepancies found independently: (i) s25 printed 1.969970 gives fW = 7.91 mm; 1.496997 gives G5 = −80.399
(reproduces −80.40) while 1.496970 gives −80.387, so 1.496997 is preferred; (ii) EFL +0.22–0.24 % nearly uniform with the
zoom ratio preserved; a single-parameter sensitivity search over every R, d and n found no plausible misprint, and sibling
Example 1 reproduces within 0.03 %. It remains a disclosed source residual (MD-05, OI-10).

## D.4 Pass B — reconciliation of the four views

Raw patent, independent baseline, implemented data.ts and analysis were compared separately. The data.ts (loaded through
the author's strict parser and independently through Node type stripping) equals the independent re-entry on every R,
d, nd (s25 corrected), STO, asphere K–A12, zoom spacing and rear plate (S4-INDEP-SOURCE-VS-DATA). Element standalone
focal lengths, the composite/cemented in-air values (−108.8, +171.5, −52.0, −81.9 mm), group vertex motions
(G2 −105.93 → −109.05 → −108.85 mm) and all architecture figures in the analysis reproduce.

Geometry at the stored SDs (independent check): maximum actual rim slope 63.49° at 5A (limit ≈ 64.2°); conic domain
2A sd 19.8 ≤ 0.98 × 24.70; maximum shared-band gap intrusion 0.866 × gap (5A–6), limit 0.90; minimum edge thickness
0.078 mm (L2 resin layer, expected for a 0.150 mm hybrid layer) and 0.294 mm (L13). LensVisualizer render diagnostics
report zero hidden trim.

Glass: every named label round-trips within Δnd ≤ 0.003 / Δνd ≤ 2 against the bundled vendor catalogs. L-BAL42 is absent
from the bundled OHARA file and was confirmed against the OHARA datasheet (nd 1.58313, νd 59.38). OHARA prefixes are
preserved (L-BAL42 is the low-Tg L-type). Unmatched labels for L2 resin, L4, L6 and L12 agree with the unseeded search.
No APO claim is made; catalog ΔPgF values are labelled as catalog properties.

Production metadata (manufacturer pages sony.ca, sony-mea.com, sony.co.uk; press-release reproductions): 13 groups /
16 elements, 107°–63°, 0.28 m, 0.19×, f/22, 11 blades, two XA elements, front XA element, five aspherical elements, two
DDSSM floating-focus groups. All analysis product claims are supported; the patent–product correlation remains an
identification, not a manufacturer confirmation.

## D.5 Correction register (Stage 4)

**C4-01 — wide full-field chief ray (substantive).**
- Old (analysis, Verification Summary): "Real chief rays through the stop centre land within +0.006 to +0.045 mm of the
  printed image heights at eight of the nine published (Y, A) points. At the wide full field (53.95°) no stop-centre
  chief ray exists, because surface 2A reaches its conic limit first; that field is formed by an off-centre, vignetted
  bundle." Same premise in evidence MD-09, OI-08 and the Stage 2 SD-derivation note.
- New: "… within −0.038 to +0.045 mm … at all nine published (Y, A) points of Figs. 14–16; a stop-centre chief ray exists
  at every published field point. At the wide full field (53.95°) the chief ray meets the steep rear face 2A at a height of
  19.42 mm, inside that surface's 24.70 mm conic-domain limit, and reaches Y = 21.63 mm at 54.00°, within 0.05° of Table 16."
- Source: Fig. 14 (Y = 21.63, A = 53.95°); Tables 13–15; [0057].
- Evidence: independent tracer (s1 −26.09, s2 −19.42 mm, Y 21.592 mm); root cause in the author's `trace_real`: the
  Newton seed at the 2A vertex plane lies at |y| ≈ 26 mm, beyond the 24.70 mm domain, so the routine raised before
  converging. Fixed with a domain-safe reseeding (`_forward_intersection`); previously converging rays are unchanged.
- Downstream: S1-REAL-CHIEF-RAY now covers 9/9; S1-CONIC-DOMAIN-FEASIBLE max s2 height 19.42 mm; S2-RAY-CONTAINMENT passes
  with the added chief ray; claim C-CHIEF regenerated; disclosure key updated; new claim C-CHIEF-2A and check
  S4-CLAIM-WIDE-OMEGA. MD-09/OI-08 annotated WITHDRAWN (raw text retained). No data.ts change.

**C4-02 — condition (3) wording.** Old: the "Computed" column showed 2.813 without stating that it uses Table 22
fw/ft. New sentence after the conditions table states that basis and that the model's own EFLs give 2.806 (claim
C-COND3-EFL). No data change.

**C4-03 — formatting.** Prettier 3.8.1 with the project prettierrc.json run on data.ts: unchanged bytes (hash
b9a32655…).

No other justified failures were found. Rejected hypotheses: alternative s25 value 1.496970; alternative conic mapping;
single-digit misprints explaining the EFL residual.

## D.6 Quantitative-claim map additions

| Analysis claim | Result pointer | Governing source |
|---|---|---|
| −0.038 to +0.045 mm at all nine points (C-CHIEF) | results.sourceModel.realChiefRays | Figs. 14–16; data rev b9a32655 |
| 2A height 19.42 mm (C-CHIEF-2A) | realChiefRays[wide 53.95].chiefRayHeights.s2; independentBaseline | Tables 13–15 |
| 54.00°, within 0.05° (S4-CLAIM-WIDE-OMEGA) | independentBaseline.states.wide.omegaAtY2163 | Table 16 |
| Condition (3) 2.806 with model EFLs (C-COND3-EFL) | implementedModel.groupFocalLengths, states.*.efl | Tables 21–22 |

All 91 Stage 3 claims plus the Stage 4 additions are regenerated and found verbatim. Manual review of interpretive
prose and citations: the aspheric counterfactual, chromatic and Petzval interpretations are correctly labelled as
computed decompositions; paragraph citations [0004]–[0113] match the cited content; third-person, νd notation and
no promotional or process language.

## D.7 Checks and gate

CHAT_PREFLIGHT: all mandatory Stage 1–4 checks PASS, including S4-INDEP-S25-RESOLUTION, S4-INDEP-GROUPS-CONDITIONS,
S4-INDEP-ENGINES, S4-INDEP-FIELD-POINTS, S4-INDEP-SOURCE-VS-DATA, S4-INDEP-FROZEN-REPLAY and S4-CLAIM-WIDE-OMEGA.
S1/S2-EFL-PUBLISHED-REPRODUCTION remain FAIL by design (non-mandatory raw comparison, disposed by MD-05; kept visible).

LENSVISUALIZER (targeted, LensVisualizer commit 3d44a1be91db853725ac841b65a9e228f2c544ef, `npm ci --ignore-scripts`,
Node v22.22.2 although the repo declares ≥ 24.15, TypeScript 5.9.3, Prettier 3.8.1): LV-TYPECHECK, LV-PRETTIER,
LV-VALIDATE, LV-BUILDLENS (zoomEFLs 16.5187 / 22.9628 / 34.0249), LV-RENDER-DIAGNOSTICS (max trim 0 over 18 states)
and LV-GLASS-RESOLUTION all PASS. Not run (integration scope): generate:metadata, full typecheck/test corpus sweeps,
production build/prerender, batch glass reports, and execution under the declared Node 24.

Disposition: READY_FOR_BATCH (pre-integration readiness only); integrationStatus INTEGRATION_PENDING.

## D.8 Remaining limitations and pending integration

Unchanged from Stages 1–3: EFL residual; inferred semi-diameters (Fig. 13 scale) and f/2.88-calibrated stop schedule;
NO_INTERNAL_RECONSTRUCTION focus (no published close-focus data); nd/νd-only spectral data; meridional-only containment;
LensVisualizer runtime half-field limited by SDs (OI-09). Pending at integration (closed 2026-10-20): organizer move to the sony maker
folder, metadata generation, corpus validation and tests on Node 24, and visual review of the lens page.

## 2026-10-20 — Deployment validation and wording pass

Source re-read from the WO 2018/139160 A1 page images (Table 13 p30, Tables 14–16 p31, Tables 21–22 p36, asphere
equation p15, Fig. 13 p58, claims p42): all 33 rows (R, d, Nd, νd), the iris at s16, the three cemented interfaces and
the L2 resin layer, all 7 aspheres (K and A4–A12, 37 non-zero coefficients), 5 variable gaps at 3 zoom stations, the
cover glass and BF 1.00 mm. The only mismatch is the s25 index (printed 1.969970, file 1.496997). The (1+K) conic form
maps K directly; the y²c² numerator is read as y²c.

The s25 correction meets the two-kind standard and is now recorded as a `corrected` `source.errata` entry with three
kinds: sibling-example (Example 2 surfaces 20 and 23, Example 5 surface 24 print 1.496997 / 81.6), source-summary
(printed value: f = 7.906 / 9.613 / 12.170 mm and paraxial BF −12.94 / −19.17 / −28.22 mm against the stated
16.5 / 22.91 / 33.95 mm and 1.00 mm; corrected value: 16.519 / 22.963 / 34.025 mm, BF 1.108 / 1.086 / 1.005 mm) and
claims (claim 1 requires a negative fifth group; printed G5 = +48.49 mm, corrected −80.40 mm, Table 22 −80.40).

First-order, patent → model: EFL 16.5 (16.48 in Table 22) / 22.91 / 33.95 → 16.519 / 22.963 / 34.025 mm; F/2.88 at
every station with iris semi-diameters 9.165 / 11.410 / 14.965 mm; BF 1.00 → paraxial 1.108 / 1.086 / 1.005 mm;
total length 154.52 / 146.01 / 140.08 mm; real-ray field at 21.65 mm 54.0° / 43.1° / 31.7° against ω 53.95° /
43.14° / 31.71°. The surface audit reports no errors, the image-circle audit no undersized station and field coverage
100 % at all three stations. No close-focus states are published.

Maker diagram (sony.jp `y_SEL1635GM_lenscomposition.jpg`): XA at the front element and at a thin element just ahead
of the stop, three further aspherical elements at the second, post-stop and last positions, and two ED elements in
the rear group. These match L1 and L7 (XA), L2, L10 and L16 (aspherical) and L11 and L13 (fluorophosphate-class) of
Example 4, and Sony's 16 elements / 13 groups.

Fields changed in this pass, optics unchanged (engine EFL, F-number, half-field, stop radius, BFD and focus keyframes
identical before and after): `subtitle`; `catalog.specs` reduced to the four standard lines; `source.errata` added;
L11 and L13 `apdNote` reworded to cite the maker diagram; s25 comment, gap-table comment, `focus.description` and the
header (template import lines removed, process tokens replaced, stop note restated as the per-station iris sizes)
reworded. In the analysis, the second XA element is assigned to L7 from Sony's diagram, the "Verification Summary"
heading became "Model Scope and Limitations" without its method paragraph, and catalog-search wording was simplified.

Open: none.

## 2026-10-20 — Second review: diagram, labels and movement

Compared the local page at 16.5, 22.91 and 33.95 mm with Fig. 13 of WO 2018/139160 A1 (pdf p58, wide end, 300 dpi
native scan). The figure has its axis vertical at x = 1190 px. The scale is 13.14 px/mm from s1 to s31 (133.604 mm over
1755.5 px) and 13.11 px/mm from s1 to s17, which confirms the package's 13.126 px/mm fit. Rims were profiled on the
bracket side inside the group brackets. The L1 and L2 back-face annuli were read from horizontal ink runs.

| Element | Stored sd (mm) | Fig. 13 (mm) | Note |
|---|---|---|---|
| L1 front / rear | 29.2 / 19.8 | 29.2 / 20.3 (back face from 20.3 to the 29.2 flange) | within reading noise; kept |
| L2 + resin | 21.1 | 21.2 front rim; rear curve ends at 19.1, then a flat step | square block kept |
| L3 | 18.0 | 18.4 | 18.28 is the s5A→s6 gap-sag ceiling; kept |
| L4 | 17.6 | 17.7 | kept |
| L5 / L6 / L7 | 14.5 / 14.9 / 15.6 | 14.6 / 15.0 / 15.7 | kept |
| L8–L9 / L10 | 16.3 / 15.5 | 16.4 / 15.6 | kept |
| L11–L12 / L13 | 13.0 / 13.5 | 13.0 / 13.6 | kept |
| L14–L15 | 13.0 | 13.1 | kept, except s29 below |
| L16 | 12.0 | 13.1, square, level with L14/L15 | changed |

Changes:

| Field | Before | After | Evidence |
|---|---|---|---|
| s29 sd (L15 rear) | 13.0 | 12.2 | s29 (R +47.2) and s30A (R −1106, A4 −2.77E−5) bow toward each other. Their combined sag passes the 2.811 mm gap at about 12.6 mm, so both faces cannot reach the drawn 13.1 mm at any `gapSagFrac`. 12.2 is the largest value that passes the 0.9 rule (12.3 gives 2.59 mm against 2.530 mm). |
| s30A / s31 sd (L16) | 12.0 / 12.0 | 13.0 / 13.0 | Fig. 13 draws L16 as a square block level with L14/L15 (172 px, 13.1 mm). The site drew it 1 mm short. The 30A scan shows no turnover to 13.2 mm (slope −24.7° at 13.0). |
| `doublets` text, `cemented` ids | D1 / D2 / D3 | C1 / C2 / C3 | The patent writes its variable gaps as D(1)–D(5), and those labels sit beside the gap sliders. The patent does not name its cemented components. H1 (the L2 hybrid) is kept. |

The cost of the change is a 0.8 mm drop along L15's top edge between the cemented interface and its rear face. In
exchange L16 matches the drawn height. L16's front rim and L15's rear corner stay apart in the render, and the
validator reports no errors.

Clearance after the edit, by meridional real-ray trace at Y = 21.65 mm and f/2.88 over the three stations. Rays at
s29: axial marginal 7.65 mm, chief 8.06 mm, full bundle 12.31 mm, so 3 % of one bundle side is newly vignetted. Rays
at s30A: 7.00, 8.51 and 12.25 mm. Rays at s31: 6.74, 8.88 and 12.51 mm. The 7 % and 14 % side vignetting at L16 is
gone. There are no axial clips or blocked chief rays. The `vig.mjs` meridional curves are identical before and after at
all three stations: wide reads 100 % to 51.2° and 64.6 % at 54.0°. Engine values before and after: EFL 16.519 mm,
f/2.88, wide half-field 43.43°, stop 9.165 mm. The runtime's tele half-field estimate rises from 42.63° to 44.92° because
L16 no longer limits it; it already exceeded the patent's 31.71° (OI-09). The surface audit reports no errors. The
image-circle audit finds 0 undersized stations, and field coverage is at least 99 % at all three stations.

Labels and tags were checked against Table 13 (p30), Table 15 (p31) and Fig. 13:

- L1–L16 match the figure's own designations. L2r is the unlabelled 0.150 mm resin layer.
- Every `type` agrees with the signs of R.
- Aspheric markers sit on 1, 2, 5, 14, 15, 21 and 30 only, as Table 15 marks them.
- The stop is drawn between L7 and L8 at s16 (IRIS).
- Group brackets G1 (s1–9), G2 (10–11), G3 (12–15), G4 (17–21) and G5 (22–31) match the figure's brackets.
- The inspector shows L2r as "DOUBLET H1" with f = +2723 mm. That is the layer's own thin power, as in the corpus's
  Nikon resin layers.
- The patent text and Tables 21–22 contain no glass or dispersion condition. The two `inferred` ED tags (L11, L13) rest
  on Sony's construction diagram only. The 2026-10-20 deployment record says that diagram shows two ED elements in
  the rear group, XA at L1 and L7, and aspherical elements at L2, L10 and L16.

Movement was checked against Table 14 (p31) and the Fig. 13 arrows. Stations run wide → tele (16.5 / 22.91 / 33.95
mm), and D(1)–D(5) match the table at every station. The figure's arrow for G1 points image-ward; the arrows for
G2–G5 point object-ward. The model moves G1 14.44 mm image-ward. G2 moves 3.12 mm object-ward to the intermediate
station and 0.20 mm back (net 2.92 mm object-ward). G3 moves 14.86 mm, G4 23.27 mm and G5 18.41 mm object-ward, all
monotonic. The `mv=zoom` overlay shows the same directions with 23.27 mm maximum travel. Fig. 13's focus arrows point
image-ward at G2 and G4, which agrees with [0021] and `focus.description`. No close-focus spacings are published, so
the keyframes repeat infinity, the focus overlay is disabled and the slider reads "Not modeled".

Model aberrations were compared with Figs. 14–16 (pp59–61). Distortion is −4.8 % at 0.9 field and −4.6 % at full field
at wide, an S-curve from −0.83 % to +0.88 % at intermediate, and +3.04 % at tele. These match the plotted curves. The
wide astigmatism stays within ±0.05 mm to 75 % field, as plotted; the full-field tangential value of the vignetted 54°
bundle is not comparable. Longitudinal spherical aberration is −0.03 mm at wide and intermediate, within the plots'
small residuals.

Glass: the Nd/νd pairs of L4 (1.912366/21.9), L6 (1.834287/39.1) and L12 (1.901747/34.6) appear in no other example
(Tables 1, 5, 9 and 17; pp18, 22, 26, 34). The nearest entries in other examples are 1.921189/24.0, 1.834000/37.3 and
1.902011/34.1. The patent prints only d-line Nd/νd ([0055]) and no glass names, extra line indices or partial
dispersions. No vendor row in the HOYA, OHARA or Sumita AGF files or in the runtime catalog matches these pairs at the d
line or the e line within 0.003 in index, so e-line printing is ruled out. The resin layer 1.534200/41.7 recurs in
Example 5 (Table 17 s4, p34), the same hybrid construction, and is not named. Every labelled glass resolves within
Δνd 0.05; L11 resolves to FCD705 at Δnd 2.4E−4, the only row near that coordinate.

Open: none.
