# Yongnuo 35mm f/2 S DF DSM: qualified infinity H1 audit

2026-11-09. Baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 history commits. Integration gates verified; no publication.

- Whole original A E1 preserved: all20 rows and both K/C4–C12 sets exactly roundtrip. S15 absent, plate exit blank. Main R1=375.10 kept against later375.0100 summary; no E2 mixture or focal/image-plane fit.
- Source ¶0074 explicitly d/F/C; glass identities and partial dispersion unknown. Standard1+K asphere convention remains inferred.
- Stop S9 z25.470 and literal rear train14.08air/2.5glass/1air unchanged; image80.114. Native EFL35.142564788. (Superseded 2026-11-10: EFL 35.029 mm after the L7 nd erratum.)
- Applicant source 深圳市永诺摄影器材股份有限公司 retained as photographic-equipment entity; no electric-appliance equivalence.
- Missing required focus scalar triggered initial ingest failure. First clone addition denied; one later evidence-supported retry permitted. Full denial, new source/schema/engine evidence and fallback-label limitation retained in SCHEMA_RETRY_EVIDENCE.txt. Field0.35 is source MOD heading, NOT a validated finite endpoint. No gaps or finite conjugates; native endpoint geometries identical. (Closed 2026-11-10: focus.closeFocusM is now the 1e15 infinity-only placeholder.)
- H0 air-gap geometry failure preserved. S3/S4 caps12.45/12.40 failed;12.35 passed default90% allowance. Actual S8 clipping justified11.10, against traced need11.091694. H1 zero trim, no rim cut or sag override.
- Official H1 census2.006885086963 vs nominal2.006885088681, limiterSTO. Iris air clearances1.327137/0.484mm. Exact nonlinear EFL/diameter2.14641654 is separate diagnostic, not iris calibration.
- Reference-only native MTF at587.5618nm: geometric+diffraction, source-plane and separately labeled best-axial, fields0/15.550957/31.101847deg,0/10/20/30/40lpmm; all12cases converged at<=128grid. No failed/unaimed/unresolved in-beam rays. Full edge4908valid/7984blocked pupil retained.
- Source-plane axial diffraction20lp/mm0.04136; best-axial0.90961 at diagnostic+0.133962038mm shift. (Explained 2026-11-10: the refocus came from the printed L7 nd misprint, now corrected.) Source image plane unchanged. C/d/F and photopic MTF blocked by vd70.361 without partial dispersion; no invented spectrum or glass curves.
- Prior baseline alias/numeric and private custody checks bounded, not exhaustive hidden-custody clearance.
- Integration gates passed: metadata/type/format/lint, 23 focused test files and 1609 tests, build of 1878 routes, SEO, and guarded installation checks. Initial lint at 1536 MiB exhausted its heap; a 3072 MiB run was interrupted by executor recovery, and the subsequent unchanged 3072 MiB run passed. All earlier logs remain as historical evidence. Original v1/v2 checkpoints and all failures retained. Native scripts/results remain in evidence/yongnuo35f2.

## 2026-11-10 — Deployment validation

Independent check against CN 113126266 A Example 1 (page-9 image): 20 rows (R, d, nd, νd), the S16/S17 aspheres
(K, C4–C12), both variable gaps at both states and the plate agree with the print. The B grant reprints the same
tables. Front page: Shenzhen Yongnuo Photographic Equipment Co., Ltd., inventors 叶远华, 庄永盛 and 庄建南. Attribution
strong: Sony E full frame, 9 elements in 8 groups, one asphere, one ED element, 0.35 m and 0.13×.

The main table's L7 index (surface 13) is a source misprint: it prints nd 1.668, the description's parameter list
([0120]) gives 1.6668. With 1.668 the table traces to 35.14 mm and F/2.007 and its axial focus misses Figs. 2–4 by
about 0.1 mm; with 1.6668 it traces to 35.03 mm (stated 35.02) at F/2.000, and the focus shift, spherical aberration
and close-focus plot match. Example 2 shows the same misprint.

Deployment change: L7 nd 1.668 → 1.6668 with a `source.errata` entry; `fNumber.design`, `nominalFNumber` and the first
f-stop 2.006885 → 2; L7 element focal length recomputed. `audit:aperture` passes.

Open: `focus.closeFocusM` 0.35 on a fixed infinity geometry; key, subtitle, specs, element prose and analysis wording
(including the close-gap remark). (Closed in the cleanup and wording pass below.)

## 2026-11-10 — Cleanup and wording pass

Data file: header rewritten to plain facts (printed scale, L7 erratum, unprinted sag equation and the standard form
that reproduces Fig. 2, rear plate, inferred semi-diameters and paraxial F/2.00 stop, infinity only). Subtitle →
"CN 113126266 A, Example 1 — construction-based production correlation". Specs → 9 ELEMENTS / 8 GROUPS, DESIGN f =
35.02 mm, DESIGN F/2.00, 2 ASPHERICAL SURFACES / 1 ELEMENT (was: 2 ASPHERICAL SURFACES, SOURCE-PRESERVING INFINITY
MODEL). `focus.closeFocusM` 0.35 → 1e15 with a plain description; `catalog.closeFocusM.marketing` stays 0.35 (Yongnuo).
Element roles rewritten per element; the cemented id D1 → C1 (elements and `doublets`); rear-plate label and source
text reworded. `apd: "inferred"` with `apdNote` on L4, the element Yongnuo's diagram marks as ED (νd 70.36 within the
patent's 60–90 condition; no catalog row, partial dispersion unpublished).

Glass relabels (printed nd/νd against the catalog row): L1 S-TIM27 (OHARA) Δnd −1e-6, Δνd −0.003; L3 FD3 (HOYA)
Δnd −1e-6, Δνd 0.000; L5 TAFD35 (HOYA) Δnd −4e-6, Δνd −0.006; L6 S-BSM14 (OHARA) Δnd +1.2e-5, Δνd 0.000; L7 PBM39
(OHARA) Δnd −5e-7, Δνd 0.000; L9 E-FD4 (HOYA) Δnd 0, Δνd −0.016; plate S-BSL7 (OHARA) Δnd 0, Δνd −0.008. The
patent's four-decimal Abbe numbers equal the S-BSM14, PBM39 and FD3 catalog values exactly, so those rows were chosen
over current equivalents (S-TIM39 or H-ZF39 for L7, S-TIH3 for L3); L1, L5 and L9 take the nearest row. L2
(1.9014/31.6382), L4 (1.525/70.361) and L8 (1.79/45) stay unmatched with their printed values in the label.

Analysis: process sections removed (reconstruction, gates, test and build counts, MTF grids and census, custody
scan, applicant-entity remark). The close-focus account is corrected: the patent prints d17 = 4.1 mm, both gap pairs
sum to 4.88 mm, and 269.495 mm from the first surface plus the 80.114 mm lens-to-image length is the 0.35 m minimum
focus (0.123× paraxial). The L7 erratum is described as a source correction; patent conditions are cited per element;
"Verification Scope" and "Aperture and Mechanical Qualifications" are merged into "Model Scope and Limitations".

Engine numbers before and after are identical: EFL 35.02899 mm, FOPEN 2, half-field 31.8829°, stop radius 11.32561
mm, BFD 0.9055 mm (image plane 0.0945 mm behind paraxial focus). Surface audit OK; aperture audit finds no rim limit.

Open: the printed 0.35 m state (d11 0.78 mm, d17 4.1 mm, object 269.495 mm from surface 1) can be modelled as a
focus keyframe with a first-surface conjugate. Rims are not yet checked against Fig. 1. The real-ray clearance check
at full aperture flags S7, S8, S10 and S11 for the plotted 8.76 mm entrance radius, which the paraxial stop does not
admit. (Both rim items closed in the semi-diameter pass below.) The F2Z (Nikon Z) version shares the published
construction; `nikon-z` is not added without a maker statement that the optics are the same.

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: CN 113126266 A, Fig. 1 (page 13), the Example 1 section at infinity focus. The figure is a 943 × 532 raster at
150 ppi, measured at 300 dpi. Scale: the first vertex to the image line spans 1674 px for 80.114 mm (20.90 px/mm); the
first to last lens vertex gives 20.92 px/mm and the front group S1–S4 21.0 px/mm. The middle spacings are drawn
loosely (L3 sits about 2.5 mm forward), but heights are to scale. Vertically, L1's rear arc (R 20.355 mm) has 87.5 px
of sag at 263.5 px, which fits 20.9–21.5 px/mm. Heights are the outer ink on both sides of the axis, averaged, less a
3 px half-stroke.

| Surface | Before (mm) | Fig. 1 (mm) | After (mm) | Evidence |
| --- | --- | --- | --- | --- |
| 1 | 13.0 | 14.26 (square blank) | 14.3 | the flat front face reaches the box edge; the beam passed by the other rims needs about 14.2 |
| 2 | 13.0 | cap end 12.4, land to 14.26 | 13.0, land to 14.3 | the cap is within noise (−5 %); the figure draws a vertical land out to the blank edge |
| 3 / 4 | 12.35 / 12.35 | 12.49 | kept | +1 % |
| 5 / 6 | 11.0 / 11.0 | 11.22 | kept | +2 % |
| 7 / 8 | 11.0 / 11.1 | 11.91 (square rim) | 12.1 / 12.1 | +8 to +10 %; the real F/2.00 marginal ray of Fig. 2 (8.7555 mm pupil) reaches 11.70 / 12.03 mm |
| 10 / 11 | 12.0 / 12.0 | 13.23 | 13.2 / 13.2 | +10 %; the same ray reaches 12.56 / 12.59 mm |
| 12 / 13 / 14 | 12.0 | 12.0 (L6), 11.63 (L7) | kept | 0 % and −3 % |
| 16A / 17A | 12.0 / 12.0 | 12.54 | kept | +4.5 %, within noise; raising it would add 7 points at the corner, so it is left |
| 18 / 19 | 12.5 / 12.5 | 13.61 (square-cut) | 13.6 / 13.6 | +9 %; the corner beam reaches about 13.2 mm at L9 |
| STO | engine 11.33 | dashed opening about 12.3 | not changed | the figure's opening equals the real F/2.00 marginal height (12.27 mm); the stop stays paraxial |

The figure-driven heights for L4 and L5 coincide with the patent's own real marginal ray, and the figure's L1 front
and L9 heights coincide with the extent of the beam the other rims pass. The figure therefore reads as the
design's clear-aperture layout. L1's front face and L9 move by 9–10 %. L4 and L5 move by 8–10 %, which the figure
and the ray agree on. Everything else lies within 5 % and is kept. No face is cut below its earlier value. The
asphere scans for 16A and 17A show no turnover to 14 mm. The doublet and L8 are unchanged.

Clearance and light: the surface validator, aperture audit (no rim limit), image-circle floor (none undersized) and
corner field coverage (100 %) pass. The real-ray check at the plotted F/2.00 pupil no longer flags S7, S8, S10 or
S11, and nothing blocks the chief ray at 21.63 mm. Engine half-field grows from 31.88° to 32.26°; FOPEN stays 2.000
and the engine stop radius stays 11.33 mm. Geometric corner transmission rises from 38.4 % to 58.4 % at 31.1° and
from 63.3 % to 74.0 % at 28.3°, with no field losing light. The rim-cost check against the package file finds no loss
at any field. Of the gain, S1 contributes about 8 points and L9 about 12. L4 and L5 change nothing, since the
paraxial iris limits the axial beam first.

Maker diagram: the earlier deployment-validation entry above records the construction comparison: 9 elements in 8
groups, with ED at L4, high-index glass at L2 and L5, and the asphere at L8. Its small catalog drawing is too coarse
for rim proportions. The model sketch was overlaid on Fig. 1 at the matched scale.

Open: L8 reads 12.5 mm on the figure against 12.0 mm in the file and is left within noise. The stop housing now
draws at 12.1 mm beside the 11.33 mm paraxial iris.

## 2026-11-10 — Glass label and design focal length

L4 relabelled from Unmatched to K-PMK30 (Sumita): the vendor catalog prints 1.52500 / 70.4 against the patent's
1.525 / 70.361 (Δnd 0, Δνd 0.04); the row was added to the glass catalog for this lens. `catalog.focalLengthMm.design`
set to the patent's stated 35.02 mm to match the specs line.
