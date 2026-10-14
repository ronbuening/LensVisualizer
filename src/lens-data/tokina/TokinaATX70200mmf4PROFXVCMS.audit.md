# Tokina AT-X 70-200mm F4 PRO FX VCM-S: consolidated audit

## Job, original bytes and current references

The fixed job is JP5857306B2, Example 1 / Figure 2, output stem TokinaATX70200mmf4PROFXVCMS. The complete original Japanese B2 grant is 28 pages and 576,437 bytes, SHA-256 35aafd7f340c0edeea8f036d2c46d0ff2d9f956e0ad42355b78ba1b7a5d41b97. The 5,513-byte historical job card is retained unchanged. Fresh ClearedWork.csv explicitly marks this row READY with approval for a derived fixed 54.66 mm from s34, within 0.02 mm of each native Gaussian image plane, and infinity-only scope. This later approval supersedes the original card/index’s historical source hold only within that scope. No CSV or Pairing_Index was edited.

The current Library CHAT-1.0 archive was materialized and all ten workflow members verified against its bytes. All 248 relevant project/reference blobs match the freshly fetched main tree at commit 33ebdb30b619a02edcf03f6d930bc1ef5e4e6905. Exact paths, Git blob identities and SHA-256 hashes are retained in the manifest references. The source snapshot was used for targeted execution, not repository integration. No branch, commit, deployment, metadata generation or full-corpus operation was performed.

## Extraction and conventions

Rendered controlling PDF page 9 Table 1, page 10 Tables 2–3, page 17 Figure 2 and page 18 native aberration labels were inspected. The selected example has 34 source rows including the explicit s20 stop; 19 glass intervals; five cemented doublets; 14 air-separated components. All surfaces are spherical. The raw transcription preserves signs, source precision, the terminal dash, variable symbols, air blanks and row-level locators.

Positive z points imageward. Positive R means an imageward center of curvature; nd describes the medium after each interface. Paragraph 0031 establishes the d-line reference. The plots give C/d/F/g at 656.2725/587.5618/486.1327/435.8343 nm. No source radius, thickness, medium, Abbe value, cemented-interface identity or native zoom gap was repaired or scaled. No plate, sensor stack or generic cement layer was invented.

## Model transformations and scope

- Source s34 has no reported terminal interval. The active 54.66 mm after s34 is explicitly approved derived data. Native Gaussian BFD is 54.655598434/54.658048235/54.677507810 mm. The fixed-image residuals are +0.004401566/+0.001951765/−0.017507810 mm, within the approved 0.02 mm bound.
- The raw zoom gaps are retained at 72/105/194 mm. Sums are 42.32/42.32/42.31 mm; the tele difference is 0.01 mm, so the earlier clearance shorthand “constant” is not exact. No hidden gap correction is applied.
- NO_INTERNAL_RECONSTRUCTION: the source identifies G1Y focus motion and provides 1 m aberration plots but no quantitative travel. All authored focus pairs repeat infinity. The manufacturer’s 1 m field is metadata, not a certified finite conjugate.
- The approximate source f/4.1 is an adopted iris-calibration target. Exact inferred native stop radii are 13.320111690/13.320639345/13.330779339 mm. These differ from first-order stop estimates, and neither is a published physical diaphragm measurement.
- Linear interpolation between the three native stations is only a geometric display. A 51-sample-per-interval computation from the final data finds worst sampled defocus −6.299649940 mm at interval fraction 0.58 between middle and tele. The label is 156.62 mm, EFL 157.568648334 mm and BFD 60.959649940 mm. No continuous-zoom parfocality is claimed. The normal zoom step selects native states.
- Stabilization remains centered. Published 0.23/0.34/0.62 mm shifts are source plot conditions only, not an implemented decentered model.

## Source comparisons and discrepancy register

Separate sequential reduced-angle and ABCD calculations agree, and a thin symmetric lens analytic control passes. Native EFL is 71.985809602/105.010264288/193.971873633 mm. These reproduce integer source labels 72/105/194 at a 0.5 mm printed half-unit tolerance; the independent reviewer additionally used a stricter 0.05 mm engineering check and passed all three. Tolerances are not retrospectively widened to repair a mismatch.

The literal Table 3 comparisons are retained individually. Cs2/Cs3 = 1.529528967, |FG1X/FG1Y| = 9.919329462 and ndL1 = 1.80518 reproduce the printed rounding. |FG4Y/FG4| = 0.543707242 does not reproduce 0.540 at its 0.0005 rounding half-unit. That raw comparison remains FAIL, with cause unresolved. The full prescription and independently verified group boundaries remain unchanged; this descriptive scalar does not drive a source correction. The broader description range 0.4–0.6 and stricter B2 claim range 0.46–0.6 both pass. These are different checks, not a fictitious scalar match.

The B2 claim limits on pages 1–2 also require 1.25≤Cs2/Cs3≤1.60, 5≤|FG1X/FG1Y|≤10.0 and ndL1≥1.75. The native calculation passes all of them. Surface-by-surface Petzval terms sum to +0.001653134891 mm⁻¹. Functional group, subgroup, cemented-component and standalone-element powers are computed separately and not conflated.

## Product correlation and glass review

Fresh official manufacturer specification, launch, feature and construction-image sources were saved and visually/textually inspected. They establish the Nikon F, full-frame, 19/14, 70–200mm f/4 product; nine blades; 1 m internal focus; 1:3.57 magnification; 67 mm filter; 167.5 mm outer length; 980 g; and release on 2014-05-30. The topology and three highlighted SD/FK01 positions support a strong architectural correlation, not proof that the patent is the exact factory formula. The maker’s diagram is not treated as an exact prescription or physical aperture specification. The patent’s two inventor names are preserved in native script; unverified English spellings were removed before the data checkpoint.

Fifteen native coordinates were newly searched across retained complete OHARA, HOYA, Schott, HIKARI, Sumita and CDGM sources. Retained retrieval identities are explicitly recorded; this is not falsely described as a fresh network fetch of every catalog. The separate reviewer freshly downloaded OHARA 2026-07-01 and HOYA 2026-07-07 and independently recalculated the selected rows.

The final spectral proxy palette has 14 OHARA coordinate classes and HOYA FCD1 for L12. L3/L4 retain 81.5 and use S-FPL51, whereas L12 retains 81.6. OHARA L-BSL7 is not renamed S-BSL7. Native nd/νd do not change. Selected catalog coefficients supply nC/nF/ng directly; ΔPgF uses the engine normal line. All 19 runtime labels resolve compatibly. Exact source coordinates, vendor coordinates, residuals, coefficients and source identities remain in evidence. Catalog equivalence does not establish supplier, melt identity, production APO behavior or measured MTF.

## Inferred apertures and minimum gap allowance

Superseded 2026-10-13: the radii and the 95.49 % allowance below are the delivered state; the file now carries the rims of "Semi-diameter pass against the patent figure" and the 0.96 allowance of "Glass fields and gap allowance", both at the end of this log.

The author first estimated clear radii from Figure 2. A direct figure-scaled 31 mm front boundary created overlap under the printed spacing and was rejected. Default 90% valid alternatives then clipped the native full-aperture tele axial bundle at s12 and, after s12 enlargement, s15. Tightening the iris or altering printed radii/gaps would change the source target and was not accepted as an alternative.

The governing s14/s15 boundaries were refined independently. The native tele marginal heights are 12.147862871/12.134446840 mm. The selected 12.16/12.15 mm radii are the smallest on a 0.01 mm grid preserving at least 0.01 mm radial clearance beyond these axial ray heights. They leave 0.012137129/0.015553160 mm of radial clearance. The earlier equal 12.16 mm trial required 95.65%; the reviewer’s asymmetric refinement reduced the necessary policy.

At the final shared radius 12.15 mm, sag intrusion is 2.253392462157 mm across the source 2.36 mm gap, a fraction 0.954827314473. The smallest 0.0001 fraction step above this requirement is 0.9549 (95.49%): 95.48% fails by 0.000064462157 mm, while 95.49% passes by 0.000171537843 mm. Physical air clearance is independently positive at 0.106607537843 mm. Policy headroom is not physical separation. The allowance stays below the explicit 97% ceiling. Smaller-policy tests and no-override clipping records are retained. Final front-four radii are 29/28.5/28/28.5 mm and do not become the governing interval.

Actual current-main buildLens and validateLensData pass. Strict TypeScript 5.9.3 passes against actual source types and dependencies, without stubs or lifecycle hooks; Prettier 3.8.1 is applied. Production geometry helpers report zero hidden trim at native and 21-grid intermediate positions. SVG paths from real computeElementShapes were rendered and inspected: all 19 material bodies, source topology and centered stop remain visible. This is a production geometry-function check, not a complete browser UI or deployment test.

## Exact ray scope and retained containment failures

The project grid traces 27,756 rays: three native zooms, two angular field definitions, three pupil scales, six field fractions and 257 samples per bundle. Every native full-aperture axial circle passes. All chief aims converge; no rays remain unexpected failures under the actual project classifier. Raw noBracket statuses at larger fields remain recorded and are classified as aperture-blocked only when the actual project classifier proves that status.

Full default-fan and full-field/full-aperture containment are not passed. The tele +0.75 default 0.6-field meridional sample clips the front rim; the other 14 default fan samples pass. The raw full-containment comparison remains FAIL. Applicable acceptance separately establishes convergence and physical external aperture clipping, with no unexpected cement-interior clipping in the checked default-field range. No field angle, source curvature or f-number is changed to force full transmission.

For the project’s fixed-z slope-launch grid, half-radius pupils through 0.6 field and quarter-radius pupils through the sampled full angular fields pass. The independent circular pupil normal to the chief direction finds additional wide-end STO clips. Both grids are retained and distinctly labeled; neither reduced-pupil result is generalized to all launch conventions. The angular proxy atan(image height/EFL) is not an exact image-height solve. Separate exact chief solves reach the full-frame half-diagonal 21.633307653 mm at 17.224745443/11.602868020/6.209811479 degrees. The independent reviewer also solves to the source plot image heights 21.64/21.63/21.57 mm. None of these checks certifies full-pupil production MTF, illumination, finite focus or continuous zoom.

## Quantitative claim map

| Claim location                             | Governing evidence/result                                         | Revision and review                                                          |
| ------------------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Identity metadata and opening association  | Original PDF front page / p28; manufacturer sources; raw topology | Same final data patent names, counts, selected example and source hashes     |
| Native EFL/BFD/track/defocus table         | results.sourceModel.states; actual-data mapping                   | Scalar and ABCD, independent source baseline, actual buildLens               |
| Group signs, subgroup roles, zoom movement | firstOrder.groups/subgroups; groupMotion; patent ¶0015–0028       | Actual native source states; G2/G3/G4 vertex trajectories                    |
| All 19 standalone element focal lengths    | firstOrder.materials; final data elements[].fl                    | Exact pair token check and independent element calculation                   |
| Glass table and explicit line-index fields | glassEvidence.selections and retained authoritative coefficients  | Actual runtime resolution plus independent fresh catalog computation         |
| Petzval sum                                | firstOrder.system.path[].petzval and system.petzval               | Independent per-surface sum; no exact field-curvature claim                  |
| 6.299650 mm intermediate defocus           | results.implementedInterpolation                                  | Final parsed data, 51 samples per source interval; no continuous certificate |
| 95.49% policy, margins and physical gap    | geometry bands, gap-policy evidence, actual validator trials      | Independent spherical sag and exact vector Snell computations                |
| Exact iris sizes                           | runtimeRecord.summary.zoomStopSDs                                 | Calibration from approximate source f/4.1; independent exact axis trace      |
| Source and full-frame image fields         | PDF p18 and exact sensorCorners                                   | Separate exact chief solve; angular proxy grid clearly labeled               |
| Native/reduced-pupil sample counts         | runtimeRecord bundles and independent normal-plane grid           | Distinct launch conventions and explicit clipping scope                      |
| Table 3 condition numbers and inequalities | results.comparisons and checks; original pp1–2/7–10               | Raw scalar FAIL retained; separate source inequality passes                  |
| Focus / IS source quantities               | Patent mechanism and plot conditions; manufacturer specs          | Qualitative/source assertions only; no modeled finite/OS performance         |

Manual interpretive review checks source paragraph support, group membership, class/supplier uncertainty and source-versus-computed distinctions; text matching alone does not establish those interpretations. Data did not change during analysis authoring. Before Stage 3, spacing and disclosure prose were improved and the same optical payload was rechecked and resealed at Stage 2. Every later approval must bind to final bytes.

## Independent review and gate boundaries

The separate source-first reviewer froze newly keyed inputs and fresh scalar/matrix code before consulting the candidate. Exposure was not completely blind: the original card and current clearance already contained a prior extraction summary, approximate EFLs and approved BF. Procedural source/method independence is claimed; psychological or memory isolation is not.

The original frozen baseline fingerprint is 09793116de88f8d0041857aefb5ed29b104ad2ecfd7a0971c1b1941b8739ac85. It is not retrospectively rewritten to match the author. A pre-freeze self-corrected r24 reading is retained in the reviewer archive. Post-exposure candidate, glass, geometric and ray checks are separate supplements. Stage 4 exact-byte approval and final archive replay are appended only when earned.

Repository-wide corpus tests, production build and actual repository integration remain NOT_RUN / INTEGRATION_PENDING (closed 2026-10-13: the three files are now in the repository; see the last section). A portable gate is not deployment. No browser production UI check, source authenticity beyond recorded originals, or continuous optical performance is implied.

Stage 3 independent prose review corrected the approximate f/4.1 citation from ¶0008 to ¶0007 (also ¶0015), and clarified that semi-diameter minus marginal-ray height is radial clearance, distinct from the axial air gap. No data bytes or source numerical values changed.

## Stage 4 exact-pair approval and portable reconciliation

The independent reviewer approved the exact final pair after re-reading corrected source/citation passages and recalculating the final data: data SHA-256 edc4b8792670bc555bfe49e51f19f3d9e8821a10e22abf2c389c4965e257747f; analysis SHA-256 6baa2f1967035add1ecb23590d5fe08acc6cc74d81f636b0d8b020bac6c04489 (the files as delivered; superseded by the 2026-10-13 edits in the last section). The original timestamped reviewer record and scope are retained in evidence. Approval covers the declared limited model, not repository-wide acceptance or factory identity.

The consolidated verifier embeds the source-first reviewer’s independent input literals, scalar and matrix calculations, a separately implemented TypeScript literal reader, exact sphere/vector Snell tracing, primary catalog coefficients and normal-plane pupil grid. The original source baseline is frozen; candidate and source calculations are explicitly separate. The embedded reviewer code sections have their own content fingerprints. No network or hidden per-lens import is needed for the dossier’s offline replay.

Intentional source-radius, image-distance, gap-policy, duplicate-key and trailing-token mutations all return nonzero status and diagnostic failures. Numerical mutations fail actual mapping or geometry checks as well as byte bindings. Portable radius and adjacent-lower-policy canaries are included in the verifier; parser positive/negative fixtures are also retained. The ordinary final data remain unchanged. Final archive acceptance requires a fresh clean extraction, full nine-member inventory/hash verification and stable numerical replay; an external receipt binds that archive without self-hashing.

## 2026-10-13 — Deployment validation and wording pass

Source re-read. JP 5857306 B2 was read again from `patents/JP5857306B2.pdf`. Its tables are 200 ppi bilevel rasters with no text layer; pages 9 and 10 were rendered at 300 dpi. For Example 1, 33 radii plus the stop s20, 33 thicknesses and gaps, 19 nd/νd pairs and the nine zoom gaps of Table 2 were compared with the data file: no mismatches. νd is 81.5 at L3 and L4 and 81.6 at L12, as printed. The example has no aspherical surface. Table 1 ends at s34 with a dash in the spacing column, and the patent states no numerical back focus, total length or field angle in its text, tables or claims; "bf" appears only in the legend of Figure 2. Front page: 特許第5857306号, published 10 February 2016, registered 25 December 2015, application 特願2012-18033 filed 31 January 2012 (特開2013-156502, 15 August 2013), patentee 株式会社ケンコー・トキナー, inventors 平野 勝也 and 安田 詠一. The data file's patent fields agree. The inventors are now given as Katsuya Hirano and Eiichi Yasuda, the romanization Google Patents shows for JP 2013-156502 A; this supersedes the earlier statement in this log that the names are kept in native script.

First-order values, patent / model. Focal length 72 / 71.986, 105 / 105.010 and 194 / 193.972 mm. F-number about 4.1 / 4.10 at each station, with iris radii 13.320 / 13.321 / 13.331 mm. Track s1 to image 210.67 / 210.67 / 210.66 mm (not printed). Chief rays reach 21.63 mm at 17.22° / 11.60° / 6.21°, with distortion −3.1 / +0.3 / +2.5 % against about −3 / +0.3 / +2.5 % in Figures 3–5, whose image heights are 21.6 mm. Group focal lengths are +95.33 / −27.85 / +85.53 / +89.96 mm. Table 3 against the prescription: Cs2/Cs3 1.530 / 1.5295, |FG1X/FG1Y| 9.919 / 9.9193, |FG4Y/FG4| 0.540 / 0.5437.

Back focus. Table 1 prints no image-side spacing. The paraxial back focus of the printed prescription is 54.6556 / 54.6580 / 54.6775 mm at the three stations (0.022 mm spread), so the single 54.66 mm in the data file lies within 0.018 mm of each. Figure 2 is a scaled drawing: on the 200 ppi raster s1 to s34 spans 623 px for the 156.01 mm wide-end track (3.99 px/mm), every drawn vertex lies within about 1.5 px of the prescription, and the image line is drawn 218.5 px behind s34, which is 54.7 ± 0.3 mm. With the Nikon F flange at 46.5 mm the last vertex sits 8.2 mm ahead of the flange and s1 is 164.2 mm from it, against the 167.5 mm barrel length.

Zoom and focus scope. Only the three printed stations are authored. Linear interpolation of the gaps would be out of focus by up to 6.30 mm near 157 mm and 1.21 mm near 90 mm, which is why `zoomStep` is 0.5. No focus travel is printed and none is authored; both focus keyframes repeat infinity.

Product checks. A chief ray traced to the 21.63 mm corner gives 2ω = 34.45° at 72 mm and 12.42° at 194 mm, equal to Tokina's published angle of view of 34.45°–12.42°. As a calculation only, not a modelled state: advancing G1Y by 13.53 mm within the 15.25 mm space d4 focuses the lens at a 1.0 m object-to-image distance with paraxial magnification 1:9.61 / 1:6.59 / 1:3.57 at the three stations; 1:3.57 is the marketed maximum ratio.

Repo checks on the deployed file. The surface audit reports no errors, the image-circle audit reports no undersized circle, field coverage is 100 % at all three stations, and the aperture audit finds all three stations within 3 % of F/4.1. A real-ray clearance trace at the three half-fields above shows no clipped axial beam and no blocked chief ray; the tightest axial margins are s14 (12.16 mm against 12.148) and s15 (12.15 mm against 12.134) at 194 mm. At their shared 12.15 mm, s14 and s15 use 95.48 % of the 2.36 mm gap and keep 0.107 mm of air (contact at 12.43 mm); the default 0.90 allowance would cap them at 11.80 mm, about f/4.22 at 194 mm. The s2 / s3 pair uses 92.5 % of its 2.01 mm gap at 28.0 mm.

Maker diagram. Kenko Tokina lists 70–200 mm F4, minimum aperture F32, 19 elements in 14 groups, nine blades, 1.0 m minimum focus, 1:3.57, 67 mm filter, 167.5 mm length, 980 g, Nikon mount, released 30 May 2014. Its construction diagram shows four front singlets, two cemented doublets and a singlet, one cemented doublet, then a singlet, a cemented doublet, the cemented VCM module and three singlets (4+5+2+8), with SD glass (FK01) marked at elements 3, 4 and 12. That is the layout of Figure 2, with the VCM module at L15–L16. Examples 2–4 have 20 elements in 15 groups (4+5+3+8) with the 1.49700 glass at L2, L4 and L15 or L13, so only Example 1 fits. The correlation is strong but not manufacturer-confirmed.

Fields changed in this pass. No R, d, nd, νd, semi-diameter, variable gap, glass label or `gapSagFrac` changed. EFL 71.98580960205999, stop radius 13.320111689861386, half-field, back focus and both focus keyframes are identical before and after, and the surface audit still reports no errors.

- Metadata. `patentAuthors` romanized; `maxFstop` set to 32 and `fstopSeries` extended to 32, Tokina's minimum aperture.
- Data file text. Header comment, `subtitle`, `specs` and `focusDescription` rewritten in plain terms; element labels changed to "Element N"; the 19 `role` strings replaced by each element's place in its group; `apd: "inferred"` with a note added to L3, L4 and L12, the maker's SD positions (patent 1.49700 / 81.5, 81.5, 81.6).
- `sourceErrata`. Reduced to the one contradiction inside the source, |FG4Y/FG4| printed 0.540 against 0.5437. Two entries that were not contradictions were removed and remain recorded here and in the header: Table 1 prints no image-side spacing and the 54.66 mm is derived (residual up to 0.0175 mm); the printed zoom-gap sums are 42.32 / 42.32 / 42.31 mm and the 0.01 mm tele difference is kept.
- Analysis. Process wording removed, the back-focus, zoom, focus and aperture paragraphs rewritten in plain terms, element notes shortened, and the two product checks above added to the identification list.

Closed 2026-10-13: the glass labels now read "(… catalog equivalent; production supplier unspecified)" and `zoomLabels` is "Wide" / "Tele". Open: focus is not modelled; the 13.53 mm G1Y advance above would be a reconstruction, not a printed state.

## 2026-10-13 — Semi-diameter pass against the patent figure

Source. `patents/JP5857306B2.pdf`, page 17, Figure 2, the lens-arrangement drawing of Example 1. It draws one panel, the wide end, with the axis vertical and the object at the bottom. The figure is a 425 × 882 px bilevel raster at 200 ppi and was read at that resolution. Figure 1 (a) and (b) on the same page, the patent's general schematic at the wide and tele ends, was read only as a cross-check: its L1–L2 air space is not drawn to the Example 1 prescription.

Scale. The s1 vertex is at row 2061.5 and the s34 vertex at row 1438.5, 623 px for the 156.01 mm wide-end track: 3.993 px/mm, 0.2504 mm/px. Two check spans agree: s5 to s16 is 125 px for 31.19 mm (4.008 px/mm) and s17 to the stop is 86 px for 21.69 mm (3.965 px/mm). The drawn axis is skewed by 0.32° (column 1031.5 at the image line, 1036 at s1), so every rim was taken as half the distance between its left and right edge lines. A rim reading is good to about ±0.15 mm.

| Element | Surfaces        | Before (mm)  | Figure 2 (mm)                                       | After (mm)         | Basis                                                              |
| ------- | --------------- | ------------ | --------------------------------------------------- | ------------------ | ------------------------------------------------------------------ |
| L1      | s1 / s2         | 29 / 28.5    | 31.2, square rim                                    | 29 / 29            | Square rim; height kept (7 % under, capped by the s2 / s3 contact) |
| L2      | s3 / s4         | 28 / 28.5    | 30.3, square rim, 0.9 below L1                      | 28.2 / 28.2        | Square rim at the drawn ratio to L1                                |
| L3      | s5 / s6         | 26 / 26      | 29.0                                                | 27.0 / 27.0        | Was 10 % under; raised to the drawn ratio to L1                    |
| L4      | s7 / s8         | 25 / 25      | 28.2                                                | 26.2 / 26.2        | Was 11 % under; raised to the drawn ratio to L1                    |
| L5      | s9 / s10        | 14.5 / 14.5  | 16.5                                                | 16.5 / 16.0        | Was 12 % under; drawn rim, standing 0.4–0.5 above L6               |
| L6      | s10 / s11       | 14.5 / 14.5  | 16.0, square rim                                    | 16.0 / 16.0        | Was 9 % under; drawn rim                                           |
| L7      | s12 / s13       | 13 / 12.5    | 13.8, square rim                                    | 13 / 13.0          | Square rim; height kept (6 % under)                                |
| L8      | s13 / s14       | 12.5 / 12.16 | 13.5                                                | 13.0 / 12.16       | s14 held by the s14 / s15 contact and the tele axial ray           |
| L9      | s15 / s16       | 12.15 / 12.5 | 13.5, square rim                                    | 12.5 / 12.5        | Square rim, admitted by `gapSagFrac` 0.96 (below); 7 % under       |
| L10     | s17 / s18       | 14.5 / 14.5  | 13.95                                               | 14.0 / 14.5        | Drawn step at the cemented joint: L10 stands 0.4 below L11         |
| L11     | s18 / s19       | 14.5 / 14.5  | 14.35                                               | unchanged          | Agrees within 1 %                                                  |
| L12     | s21 / s22       | 14.5 / 14.5  | 14.5                                                | unchanged          | Agrees                                                             |
| L13     | s23 / s24       | 14 / 14      | 14.0 rim; the s24 curve ends near 11.4, land beyond | 14 / 13.0          | Rim agrees; s24 carries L14's rim                                  |
| L14     | s24 / s25       | 14 / 14      | 13.0, square rim, inset in L13                      | 13.0 / 13.0        | Drawn step at the cemented joint; was 8 % over                     |
| L15–L16 | s26 / s27 / s28 | 13 / 13 / 13 | 11.5, one rectangle                                 | 11.5 / 11.5 / 11.5 | Was 13 % over                                                      |
| L17     | s29 / s30       | 13.5 / 13.5  | 13.4                                                | unchanged          | Agrees                                                             |
| L18     | s31 / s32       | 14 / 14      | 14.4 rim; the s31 curve ends near 12.4, land beyond | unchanged          | Rim 3 % under; see below                                           |
| L19     | s33 / s34       | 16 / 16      | 15.8                                                | unchanged          | Agrees within 1.5 %                                                |
| Stop    | STO             | 16           | line drawn to 16.1                                  | not touched        | The line is not the iris opening                                   |

Eighteen surface values changed: seventeen in this pass and s15 when `gapSagFrac` went to 0.96 the same day. Figure 1 read at about 3.5 px/mm gives L1 31, L2 30.2, L3 28.9, L4 28.3, L5 16.5, L6 16.0, L7 13.6, L8–L9 13.4, L10 13.9, L11 14.3, L12 14.4, L13 13.8, L14 13.0, L15–L16 12.0, L17 13.4, L18 14.7 and L19 15.9 mm (mean of the two panels). That is within 0.3 mm of Figure 2 everywhere except the stabilization doublet (12.0 against 11.5 mm); Figure 2 is the Example 1 drawing and governs.

Edge-contact pairs. The figure draws two air-spaced pairs out to rims at which the printed radii would overlap.

- s2 / s3 (2.01 mm gap): the faces touch at 29.04 mm. L1 and L2 are drawn 31.2 and 30.3 mm, where the faces would overlap by 0.19 mm, so no `gapSagFrac` admits the drawn L2. The 0.96 now in the file admits a shared height of 28.49 mm (0.9549 admitted 28.42 mm; 0.97 would admit 28.63 mm). The pair now uses 93.9 % of the gap at 28.2 mm with 0.123 mm of air; this supersedes the 92.5 % at 28.0 mm and the front radii 29 / 28.5 / 28 / 28.5 mm recorded above. Because L2 cannot reach its drawn rim, G1 is held at one ratio to the drawing, 29.0 / 31.2 = 0.93: L2 28.2, L3 27.0 and L4 26.2 mm. This keeps the drawn order L1 > L2 > L3 > L4 and four square rims. Setting L3 and L4 to their drawn 29.0 and 28.2 mm would have put L3 level with L1 and above L2.
- s14 / s15 (2.36 mm gap): the faces touch at 12.43 mm and L8 and L9 are drawn 13.5 mm, where they would overlap by 0.43 mm, so no `gapSagFrac` admits the drawn rims. This pass left the pair at 12.16 / 12.15 mm (95.48 % of the gap) under 0.9549 and reported that 0.96 would admit s15 standing above s14 = 12.16 mm, and with it a square L9 rim. That was applied the same day: `gapSagFrac` is 0.96 and s15 is 12.5 mm, so L9 is 12.5 / 12.5 mm. The pair is tested at 12.16 mm, where it uses 95.64 % of the gap with 0.103 mm of air and the faces do not cross.

Retained against the figure. L7–L9 stay 6–10 % under the drawing because of the s14 / s15 contact. The s24 curve is drawn to about 11.4 mm with a flat land beyond, which is below the 12.06 mm the F/4.1 axial ray needs there, so s24 takes L14's 13.0 mm rim instead. L18 is drawn with a 14.4 mm square rim and a flat land outside about 12.4 mm on s31. The renderer draws no lands. Ending s31 at 12.4 mm (with s32 at 14.4 mm) would lower the corner transmission by 5.2 points at every station (63.5 to 58.3 % at 72 mm), so L18 keeps 14 / 14 mm and its front corners reach about 1.4 mm further toward L17 than drawn.

Clearance. A real-ray trace at F/4.1 with chief rays to 21.63 mm (17.22° / 11.60° / 6.21°) shows no clipped axial beam and no blocked chief ray. Largest axial heights over the three stations against the new radii: s1–s8 23.66 / 23.37 / 23.47 / 23.48 / 24.14 / 23.83 / 23.43 / 23.00 mm against 29 / 29 / 28.2 / 28.2 / 27 / 27 / 26.2 / 26.2; s9–s11 14.08 / 13.86 / 12.96 against 16.5 / 16 / 16; s12–s16 12.71 / 12.35 / 12.148 / 12.134 / 12.32 against 13 / 13 / 12.16 / 12.5 / 12.5 (s15 was 12.15 when this pass ended); s17 12.61 against 14.0; s24 / s25 12.06 / 11.50 against 13.0; s26–s28 8.87 / 8.63 / 8.19 against 11.5. The surface audit reports no errors at any station and the wide-end render is not trimmed, the image-circle audit no undersized circle, field coverage is 100 % at all three stations and the aperture audit finds all three within 3 % of F/4.1. The engine half-field went from 19.67° / 14.14° / 8.89° to 20.77° / 14.24° / 8.89°; EFL, F/4.1 and the iris radii 13.3201 / 13.3206 / 13.3308 mm are unchanged.

Vignetting. Meridional geometric transmission wide open, before and after:

| Station | Field | Before (%) | After (%) |
| ------- | ----- | ---------- | --------- |
| 72 mm   | 11.5° | 87.5       | 91.7      |
| 72 mm   | 14.4° | 75.0       | 78.1      |
| 72 mm   | 17.2° | 54.2       | 63.5      |
| 105 mm  | 7.7°  | 92.7       | 95.8      |
| 105 mm  | 9.7°  | 85.4       | 82.3      |
| 105 mm  | 11.6° | 61.5       | 61.5      |
| 194 mm  | 3.1°  | 86.5       | 88.5      |
| 194 mm  | 5.2°  | 75.0       | 74.0      |
| 194 mm  | 6.2°  | 61.5       | 63.5      |

The 72 mm rise comes from L5–L6 following the drawing (54.2 to 63.5 % at the corner on its own). The stabilization doublet at 11.5 mm on its own lowers the zone near 0.83 of the field by 3 to 4 points (75.0 to 70.8 % at 72 mm, 85.4 to 81.3 % at 105 mm, 75.0 to 71.9 % at 194 mm) and leaves the corners unchanged; s17 and L14 each cost about one point in the zone. At 194 mm the ray at three quarters of the pupil radius is now cut from 56 % of the corner field angle (s5), where it was 50 %. A meridional trace of the default 0.6-field fan gives the result recorded above: the tele +0.75 sample clips the front rim and the other fourteen pass.

Live render. The local page was viewed at 72, 105 and 194 mm and at the close-focus end of the focus slider (focus is not modelled, so it repeats infinity). The model outline was overlaid on Figure 2 at matched scale before and after, and on both panels of Figure 1. L5–L6, G3 and G4 lie on the drawn outlines; G1 is uniformly smaller than drawn and L7–L9 slightly so. No maker image was viewed in this pass; the construction-diagram comparison in the section above stands.

Files. The header semi-diameter note and the aperture paragraphs of the analysis were rewritten to match. No surface is aspherical, so no departure figures needed recomputing.

Open: G1 is 7 % under the drawing and L7–L9 6–10 % under it, both because of edge contact. The lands on s24 and s31 are not modelled. Figure 2 draws only the wide end; the middle and tele stations were compared with the Figure 1 schematic and by the live render. Focus is not modelled, so the L3–L4 rims are not checked at close focus.

## 2026-10-13 — Glass fields and gap allowance

State. After the semi-diameter pass the data file took three further changes, none of them to R, d, nd, νd, a zoom gap or the iris: `gapSagFrac` went from 0.9549 to 0.96 with s15 from 12.15 to 12.5 mm; `nC`, `nF` and `ng` were removed from all 19 elements; and the glass labels and `zoomLabels` were reworded. This section records the re-run numbers and the analysis text that follows from them.

Gap allowance. s14 stays 12.16 mm (the tele F/4.1 axial ray reaches 12.148 mm) and s15 takes L9's 12.5 mm rear rim, so L9 is square-cut as Figure 2 draws it. The validator compares the pair at the smaller height. At 12.16 mm the sag intrusion is 2.2572 mm of the 2.36 mm gap, 95.64 %, against 2.2656 mm allowed at 0.96, and 0.103 mm of air remains, so the faces do not cross. 0.95 would allow 2.2420 mm and refuse it, so 0.96 is the smallest two-decimal value; it admits a shared height up to 12.18 mm. From 12.16 to 12.5 mm only L9's front face continues, 0.10 to 0.63 mm clear of L8's rim (the line from the s13 rim at 13.0 mm to the s14 rim). Carried to one height the two faces would touch at 12.43 mm and overlap by 0.027 mm at 12.5 mm, which is why s14 is not raised with s15. The s2 / s3 pair is unchanged at 93.9 % of its gap at 28.2 mm.

Re-run with s15 at 12.5 mm. The surface audit reports no errors and the wide-end render is not trimmed; the image-circle, field-coverage (100 % at the three stations) and aperture audits read as before. The real-ray trace shows no clipped axial beam and no blocked chief ray: 12.148 against 12.16 mm at s14, 12.134 against 12.5 mm at s15 and 12.32 against 12.5 mm at s16. The engine half-field 20.77° / 14.24° / 8.89° and F/4.1 are unchanged. The meridional vignetting curve is identical to the previous state at every sampled field, because s14 still limits the pair:

| Station | Corner, before (%) | Corner, now (%) | 0.83 field, before (%) | 0.83 field, now (%) |
| ------- | ------------------ | --------------- | ---------------------- | ------------------- |
| 72 mm   | 63.5               | 63.5            | 78.1                   | 78.1                |
| 105 mm  | 61.5               | 61.5            | 82.3                   | 82.3                |
| 194 mm  | 63.5               | 63.5            | 74.0                   | 74.0                |

Glass fields. All 19 labels resolve to their catalog glass. For 18 elements the removed `nC`, `nF` and `ng` equalled the catalog curve at 656.2725 / 486.1327 / 435.8343 nm to 2 × 10⁻¹⁶. For L12 (HOYA FCD1) each of the three sat 2.6 × 10⁻⁶ below the FCD1 curve the repository now carries. `dPgF` is unchanged on every element and equals the catalog partial dispersion measured from 0.6438 − 0.001682·νd at the printed νd to within 6 × 10⁻⁹. The elements now trace on the catalog curve (C, d and F from the curve, g from `dPgF`) instead of on stored line indices; this supersedes "Selected catalog coefficients supply nC/nF/ng directly" above.

Effect on the traced colours, as paraxial back focus per line: the C−d, F−d and g−d differences each moved by −1.8 µm at all three stations (C−d from 0.0676 to 0.0657 mm at 72 mm), and F−C moved by 0.002 µm or less. The common shift comes from the d channel, which now reads the catalog index (within 4.2 × 10⁻⁶ of the printed nd) instead of the printed nd, and from L12. EFL, back focus and iris radii are computed from the printed nd and did not change. The analysis quotes no chromatic focus or lateral-colour figure, so no number there needed recomputing.

Analysis text. Two paragraphs changed: the s14–s15 paragraph now states 12.16 / 12.5 mm at 0.96 with the numbers above, and the glass paragraph now says each element traces on its named glass's catalog curve with ΔPgF as that glass's catalog value. No other sentence mentioned stored line indices.

Live render. L9 was viewed at 72 mm on the local page and over Figure 2: a square rim at 12.5 mm, 7 % inside the drawn one, with L8's rear corner stepping down to 12.16 mm beside it and no overlap.

## 2026-10-13 — Second review: diagram, labels and movement

Scope. An independent second look at the lens as the local page draws it, against `patents/JP5857306B2.pdf`: Figure 2 (page 17, Example 1, wide end), Figure 1 (a) / (b) (page 17, wide and tele schematic with the zoom loci), Tables 1–3 (pages 9–10), the description ¶0015–0038 and the aberration plots of Figures 3–5 and 9–11 (pages 18–20). No maker image was viewed; the construction-diagram record above stands (19 elements in 14 groups, 4+5+2+8, SD glass at elements 3, 4 and 12, no aspherical element).

Re-measurement of Figure 2. The 425 × 882 px bilevel raster was read at its native resolution, pixel by pixel. Vertex crossings: s1 at row 851.0, s34 at row 228.0, 623.0 px for the 156.01 mm wide-end track, 3.9933 px/mm. Check spans: s5 to s16 125 px for 31.19 mm (4.008), s17 to the stop 85.5 px for 21.69 mm (3.942), s21 to s34 203.5 px for 51.20 mm (3.975), s1 to the image line 841.0 px for 210.67 mm (3.992). Every vertex crossing that can be read lies within 1.3 px of the prescription (s27 is hidden by lettering). The drawn axis runs along x = 206.43 + 0.00421·y (0.24° skew). Each rim is half the distance between the centres of its left and right edge lines, which is 0.05–0.2 mm below the outer-edge readings of the first pass.

| Element | Figure 2, this reading (mm)                | First pass (mm) | Stored before (mm) | Stored now (mm) |
| ------- | ------------------------------------------ | --------------- | ------------------ | --------------- |
| L1      | 31.0, square block, 5.5 mm edge            | 31.2            | 29 / 29            | 31.0 / 31.0     |
| L2      | 30.2, square, 0.8 mm inside L1             | 30.3            | 28.2 / 28.2        | 28.4 / 30.2     |
| L3      | 28.85, square                              | 29.0            | 27.0 / 27.0        | 28.9 / 28.9     |
| L4      | 28.05, square                              | 28.2            | 26.2 / 26.2        | 28.1 / 28.1     |
| L5      | 16.3                                       | 16.5            | 16.5 / 16.0        | unchanged       |
| L6      | 15.9, square                               | 16.0            | 16.0 / 16.0        | unchanged       |
| L7      | 13.7, square                               | 13.8            | 13 / 13.0          | 13.6 / 13.6     |
| L8      | 13.45                                      | 13.5            | 13.0 / 12.16       | 13.6 / 12.16    |
| L9      | 13.35, square                              | 13.5            | 12.5 / 12.5        | 13.4 / 13.4     |
| L10     | 13.9                                       | 13.95           | 14.0 / 14.5        | unchanged       |
| L11     | 14.15                                      | 14.35           | 14.5 / 14.5        | unchanged       |
| L12     | 14.45                                      | 14.5            | 14.5 / 14.5        | unchanged       |
| L13     | 13.9; land on s24 from about 11.4          | 14.0            | 14 / 13.0          | unchanged       |
| L14     | 12.95, square                              | 13.0            | 13.0 / 13.0        | unchanged       |
| L15–L16 | 11.4, one rectangle                        | 11.5            | 11.5 / 11.5 / 11.5 | unchanged       |
| L17     | 13.3                                       | 13.4            | 13.5 / 13.5        | unchanged       |
| L18     | 14.3; land on s31 from about 12.2          | 14.4            | 14 / 14            | unchanged       |
| L19     | 15.7                                       | 15.8            | 16 / 16            | unchanged       |
| Stop    | line drawn to 16.15                        | 16.1            | 16                 | not touched     |

Lands. Figure 2 draws three flat lands. On s2 a horizontal run at rows 818–819 reaches from the 31.0 mm rim in to columns 96 and 323, so the curve ends between 28.5 and 29.4 mm, at the height where s2 and s3 touch (29.04 mm), and L2's rim rests on that land. On s24 the land (rows 389–391) ends at 11.4 mm by its inner end and 11.7–12.0 mm by its axial level. On s31 the land (rows 264–265) ends at 11.5 mm by its inner end and 12.1–12.2 mm by its axial level; the first pass read 12.4 mm. The curve ends of s2 and s24 sit at the edge contact and at the F/4.1 axial ray (12.06 mm), so the lands look like the designer's clear-aperture limits.

Rims changed: twelve surfaces, each to its drawn value. These supersede the G1 and L7–L9 values of the two sections above, and their statements that G1 is held at 0.93 of the drawing and that L7–L9 stay under it.

| Surface   | Before (mm) | After (mm) | Evidence                                                                                             |
| --------- | ----------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| s1 / s2   | 29 / 29     | 31.0 / 31.0 | L1 drawn 31.0 with a square 5.5 mm edge (5.67 mm from the prescription at that height)              |
| s3        | 28.2        | 28.4       | Touching face: the last 0.1 mm step under the 28.49 mm that `gapSagFrac` 0.96 admits beside s2       |
| s4        | 28.2        | 30.2       | L2's drawn rim                                                                                       |
| s5 / s6   | 27.0 / 27.0 | 28.9 / 28.9 | L3 drawn 28.85                                                                                      |
| s7 / s8   | 26.2 / 26.2 | 28.1 / 28.1 | L4 drawn 28.05                                                                                      |
| s12 / s13 | 13 / 13.0   | 13.6 / 13.6 | L7 drawn 13.7 and L8 13.45; one value for the cemented joint keeps L7 square                        |
| s15 / s16 | 12.5 / 12.5 | 13.4 / 13.4 | L9 drawn 13.35, square                                                                              |

Judgement on the three open items of the first pass.

- Front group at 0.93 of the drawing. Only one face of the s2 / s3 pair has to stop short of the 29.04 mm contact. Four arrangements were validated and drawn over the figure: the 0.93 scaling; L1 31 / 31 with s3 28.4 and s4 30.2; s1 31 with s2 28.4 and L2 30.2 / 30.2; and s1 31, s2 29, s3 28.4, s4 30.2. The second lies on the drawn outline of both elements, keeps L1 the squared block the figure draws and leaves the smallest gap that the figure does not show (a wedge of air at L2's front corner, 0.09 to 1.55 mm wide). The third and fourth cut a corner 2 to 2.6 mm high and about 5 mm long off L1. With L1 and L2 at their drawn heights, L3 and L4 take theirs and the drawn order 31.0 > 30.2 > 28.9 > 28.1 is kept. The light that G1X passes is still set by the touching face (28.4 mm against 28.2 mm before), so the real limit stays.
- L7–L9 under the drawing. The s14 / s15 crossing binds only s14 (12.16 mm, between the 12.148 mm axial ray and the 12.18 mm the allowance admits). s12, s13, s15 and s16 are not in contact with anything at their drawn heights, so L7 and L9 now take them, and L8's rear bevel is the only departure from the figure.
- L18 at 14 / 14. Kept. The figure draws a squared block (land and cylinder), and at 14.0 mm the front face neither wraps nor reaches L17 (its corner stays 1.25 mm behind L17's rim; the figure draws 2.5 mm). The cost of the alternative is quantified below so the owner can choose: ending s31 at the drawn land would bevel L18 and remove light the model now passes.

Illumination cost of ending s31 at 12.4 mm (with s32 at 14.3 mm), on the new rims. The surface audit accepts the pair and no axial beam or chief ray is cut (6.80 and 8.26 mm needed).

| Station | Corner, full pupil (%) | Corner, meridional (%) | 0.83 field, full pupil (%) |
| ------- | ---------------------- | ---------------------- | -------------------------- |
| 72 mm   | 68.6 to 64.8           | 65.6 to 60.4           | 84.2 to 84.2               |
| 105 mm  | 67.0 to 63.1           | 62.5 to 57.3           | 90.2 to 90.2               |
| 194 mm  | 62.5 to 58.4           | 63.5 to 58.3           | 75.4 to 75.4               |

Ending s31 at 12.2 mm costs about 6 points at the corner instead of 4. For comparison, ending s24 at the 12.1 mm the axial ray needs (its land) would cost 2 to 4 points across the whole field (99.5 to 95.7 % at half field at 72 mm).

Clearance on the new rims. A real-ray trace at F/4.1 with chief rays to 21.63 mm (17.22° / 11.60° / 6.21°) shows no clipped axial beam and no blocked chief ray. Largest axial heights against the rims: s1–s8 23.66 / 23.37 / 23.47 / 23.48 / 24.14 / 23.83 / 23.43 / 23.00 mm against 31.0 / 31.0 / 28.4 / 30.2 / 28.9 / 28.9 / 28.1 / 28.1; s12–s16 12.71 / 12.35 / 12.148 / 12.134 / 12.32 against 13.6 / 13.6 / 12.16 / 13.4 / 13.4. The surface audit reports no errors and the render is not trimmed; the image-circle audit reports no undersized circle; field coverage is 100 % at the three stations; the aperture audit finds all three within 3 % of F/4.1. s2 / s3 compared at 28.4 mm: 1.9160 of 2.01 mm, 95.33 %, 0.094 mm of air (28.49 mm is accepted, 28.5 mm refused). s14 / s15 compared at 12.16 mm: unchanged, 95.64 %, 0.103 mm of air; from 12.16 to 13.4 mm s15 runs 0.10 to 0.88 mm clear of L8's edge. The engine half-field went from 20.77° / 14.24° / 8.89° to 21.17° / 14.33° / 8.89°. EFL 71.9858 mm, F/4.1 and the iris radii 13.3201 / 13.3206 / 13.3308 mm are unchanged.

Vignetting before and after. Meridional values are the engine's wide-open geometric transmission; full-pupil values come from a separate three-dimensional trace of a 0.25 mm grid of rays over the whole beam (the share that clears every rim and the iris, relative to the axial beam; a 0.125 mm grid agrees within 0.1 point).

| Station | Field  | Meridional before (%) | Meridional after (%) | Full pupil before (%) | Full pupil after (%) |
| ------- | ------ | --------------------- | -------------------- | --------------------- | -------------------- |
| 72 mm   | 0.67   | 91.7                  | 92.7                 | 94.9                  | 95.5                 |
| 72 mm   | 0.83   | 78.1                  | 80.2                 | 82.2                  | 84.2                 |
| 72 mm   | corner | 63.5                  | 65.6                 | 65.7                  | 68.6                 |
| 105 mm  | 0.67   | 95.8                  | 95.8                 | 99.1                  | 99.5                 |
| 105 mm  | 0.83   | 82.3                  | 83.3                 | 89.0                  | 90.2                 |
| 105 mm  | corner | 61.5                  | 62.5                 | 65.1                  | 67.0                 |
| 194 mm  | 0.5    | 88.5                  | 91.7                 | 89.2                  | 92.5                 |
| 194 mm  | 0.83   | 74.0                  | 75.0                 | 73.1                  | 75.4                 |
| 194 mm  | corner | 63.5                  | 63.5                 | 61.1                  | 62.5                 |

The 72 mm gain comes from L7 and L9 (s12 was the first rim met there), the 105 mm gain from G1X and the 194 mm gain from L3–L4. At 194 mm a ray at three quarters of the pupil radius is now first cut at 61 % of the corner field angle, by s3; it was 56 %, by s5. At 0.6 of the corner angle the rays at ±0.75 and ±0.375 of the pupil radius pass at all three stations; before, the +0.75 ray at 194 mm was cut.

Labels and brackets.

| Field                    | Before                | After                                                           | Evidence                                                                                           |
| ------------------------ | --------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `diagramLabel`           | "1" … "19"            | "L1" … "L19"                                                    | The patent's own designations: L1–L9 lettered in Figure 1 (a), L1–L8 named in ¶0016–0022, legend Li |
| `label`                  | "Element1" …          | "Element 1" …                                                   | The form every other catalog file uses                                                             |
| `varLabels`              | D8, D16, D19          | d8, d16, d19                                                    | Table 2 and ¶0032 print d8, d16, d19; the capitals read as members of the doublet series D1–D5     |
| `groups`                 | G1, G2, G3, G4        | adds "G1Y (focus group)" s5–s8 and "G4Y (stabilizer)" s26–s28   | Figures 1 and 2 bracket G1X / G1Y under G1 and G4X / G4Y / G4Z under G4; ¶0016 and ¶0025           |

G1Y and G4Y are the two sub-groups with a function the reader cannot see from G1–G4; G1X, G4X and G4Z are left unlabelled. On the page the four group names share one row and the two sub-group names sit on the row beneath, under L3–L4 and L15–L16. The label "G1Y (focus)" was tried first and ran into "G1" on the same row. The group-movement panel now lists six rows, the two new ones fixed.

Checked and found correct. Surface ranges of G1 (s1–s8), G2 (s9–s16), G3 (s17–s19) and G4 (s21–s34). Five cemented brackets D1–D5 on s9–s11, s12–s14, s17–s19, s23–s25 and s26–s28, matching the five cemented interfaces s10, s13, s18, s24 and s27 of Table 1. All 19 `type` strings against the signs of the printed radii (L1 +/+ negative meniscus, L2 +/+ positive meniscus as ¶0016 names them, L3 and L4 +/− biconvex, L5 −/− positive meniscus, L6 −/+ biconcave, L7 +/+ negative, L8 +/+ positive, L9 −/+ biconcave, L10 +/− biconvex, L11 −/− negative, L12 +/+ positive, L13 +/+ negative, L14 +/+ positive, L15 −/− positive, L16 −/+ biconcave, L17 +/− biconvex, L18 −/− negative, L19 +/− biconvex). All 19 `role` strings. The stop at s20, 1.5 mm ahead of L12, drawn in Figure 2 as a line at the head of the G4X bracket. No surface is aspherical in Table 1 and none carries an asphere entry or an "A" label. `zoomLabels` Wide / Tele (Table 2 heads its columns wide, middle, tele). Table 1 and Table 2 were read again from the page rasters: all radii, spacings, indices, Abbe numbers and the nine zoom gaps agree with the file.

Tags. `apd: "inferred"` on L3, L4 and L12 is right and "patent" would not be. The patent text never mentions anomalous or low dispersion, partial dispersion or a glass name: a search of its text layer finds none of 異常分散, 部分分散, 低分散 or 蛍石, and the Abbe number appears only as the column アッベ数 vd of the tables (¶0031). Its conditions are Cs2/Cs3, |FG1X/FG1Y|, ndL1 ≥ 1.75 and |FG4Y/FG4| (claim 1, ¶0018–0027); none constrains an Abbe number. Table 1 prints only nd and νd, so the patent offers no further identification of any glass.

Zoom movement, wide → middle → tele, from Table 2 (d8 2.40 / 18.30 / 34.99, d16 26.06 / 19.71 / 1.50, d19 13.86 / 4.31 / 5.82). `zoomPositions` 72 / 105 / 194 ascend and each `var` array lists its stations in that order.

| Group        | 72 → 105 mm        | 105 → 194 mm       | Patent                                                              | Model       |
| ------------ | ------------------ | ------------------ | ------------------------------------------------------------------- | ----------- |
| G1           | 0                  | 0                  | Fixed (vertical line in Figure 1)                                   | Fixed       |
| G2           | 15.90 mm to image  | 16.69 mm to image  | Moves toward the image (¶0021), straight line in Figure 1           | As patent   |
| G3           | 9.55 mm to image   | 1.52 mm to object  | Locus convex toward the image (¶0021), curved line in Figure 1      | As patent   |
| Stop and G4  | 0                  | 0.01 mm to object  | Fixed (vertical line); the 0.01 mm is the printed gap-sum rounding  | As printed  |

The live group-movement panel shows the same: G1 and G4 as points, G2 travelling toward the image (maximum travel read-out 32.60 mm, the 32.59 mm of d8 plus the 0.01 mm of the gap sums), and G3's track running toward the image and ending short of its furthest point.

Focus. Not modelled, by decision. The patent names G1Y as the focus group (¶0016) and prints no travel. The focus slider is disabled and labelled "Not modeled", the page at the far end of the slider is identical to infinity, and the focus view of the movement panel is unavailable.

Aberrations against Figures 3–5 (infinity; d-line; printed prescription, apertures ignored).

| Quantity                                              | 72 mm, traced            | 72 mm, Figure 3         | 105 mm, traced           | 105 mm, Figure 4        | 194 mm, traced           | 194 mm, Figure 5        |
| ----------------------------------------------------- | ------------------------ | ----------------------- | ------------------------ | ----------------------- | ------------------------ | ----------------------- |
| LSA at 0.5 / 0.75 / 1.0 of the F/4.1 pupil (mm)       | −0.22 / −0.46 / −0.78    | −0.09 / −0.14 / −0.06   | −0.15 / −0.30 / −0.47    | −0.06 / −0.06 / +0.09   | −0.02 / −0.04 / −0.10    | −0.02 / −0.02 / +0.08   |
| Sagittal focus at 10.8 / 16.2 / 21.6 mm (mm)          | −0.08 / −0.11 / +0.01    | −0.07 / −0.08 / +0.07   | −0.05 / −0.06 / +0.06    | −0.04 / −0.03 / +0.09   | −0.06 / −0.10 / −0.06    | −0.04 / −0.05 / +0.02   |
| Tangential focus at 10.8 / 16.2 / 21.6 mm (mm)        | −0.09 / −0.14 / −0.11    | 0.00 / 0.00 / −0.03     | −0.02 / −0.05 / −0.12    | 0.00 / −0.01 / −0.14    | −0.04 / −0.11 / −0.23    | 0.00 / −0.02 / −0.22    |
| Distortion at 21.6 mm (%)                             | −3.07                    | −3.0                    | +0.33                    | +0.3                    | +2.52                    | +2.5                    |

Figure readings are good to about 0.01–0.02 mm (0.0054 mm per native pixel). Distortion agrees. The field curves agree in shape and differ by up to 0.14 mm. Spherical aberration does not agree: the printed prescription is under-corrected by 0.78 mm at the pupil edge at 72 mm and 0.47 mm at 105 mm where the figures stay within 0.14 mm and turn positive at the edge. Third-order sums from the prescription are −0.91 / −0.64 / −0.10 mm, built from G1 −0.12 / −0.56 / −6.50, G2 +1.63 / +2.38 / +8.86, G3 −0.94 / −0.99 / −0.98 and G4 −1.48 at every station. The on-axis fans of Figures 9–11 (±0.1 mm scale) stay within about 0.02 mm; the prescription gives 0.09 mm at 72 mm and 0.06 mm at 105 mm at the pupil edge in the paraxial plane. So two sets of the patent's figures agree with each other and not with Table 1.

Search for a misprint. About 3,900 single-value variants were traced (every digit substitution and adjacent transposition of each printed radius, spacing and index, sign changes, and exchanges of neighbouring radii), then about 430 exchanges of spacings, indices and radii, then each radius, spacing and index varied freely on its own. The filter was the three focal lengths within 0.5 mm of 72 / 105 / 194 and the back focus constant within 0.15 mm across the stations. None brings the three spherical curves together: the best single change (d29 from 3.54 to about 2.3) leaves an rms error of 0.16 mm over nine readings against 0.34 mm as printed. A change inside G4 moves all three curves by the same amount, and the shortfall is 0.72 / 0.56 / 0.18 mm at the pupil edge, so no G4 value can be the cause; no change in G1–G3 that keeps the focal lengths and the constant back focus brings the error below 0.30 mm. No candidate turns |FG4Y/FG4| into 0.540 either. The cause is not identified and no value is changed.

Table 3. Cs2/Cs3 = 1.5295 (printed 1.530), |FG1X/FG1Y| = 9.919 (9.919), ndL1 = 1.80518 (1.805), and |FG4Y/FG4| = 48.91 / 89.96 = 0.5437 against the printed 0.540. The `sourceErrata` entry is confirmed.

Proposed, outside this pass's edit list. A second `sourceErrata` entry, status "unresolved": "Figures 3–5 and 9–11 show far less spherical aberration than the printed prescription traces: d-line longitudinal aberration at the F/4.1 pupil edge is −0.78 / −0.47 / −0.10 mm at 72 / 105 / 194 mm against about −0.06 / +0.09 / +0.08 mm drawn. No single printed value accounts for it; no value is changed."

Files. Data file: twelve `sd` values, 19 `diagramLabel` and 19 `label` strings, three `varLabels`, two added `groups` entries, and the header comment (semi-diameter note rewritten, aberration note added). Analysis: the clear-radius, s14–s15 and vignetting paragraphs follow the new rims, and a paragraph on the aberration plots was added to the source-discrepancy section. No R, d, nd, νd, zoom gap, glass label, `gapSagFrac` or iris value changed.

Live page after the edits. Viewed at 72, 105 and 194 mm, at the far end of the focus slider, with the group-movement panel at both ends of the zoom range, and with the inspector open on L2, L3, L12 and L18. L1 is a squared block with L2 nested behind it, its front corner bevelled; L3 and L4 stand just below them; L7 and L9 are square with L8's rear corner bevelled between them. Laid over Figure 2 at matched scale, the outlines of G1 and G2 now fall on the drawn lines. Element labels read L1–L19 in two rows, the gap read-out d8 / d16 / d19, and the inspector shows "Element 3 · L3 · APD (inferred)".

Open. Lands are not modelled, so L1's rear corner stands 0.8 mm deeper than drawn, L18's front corners reach 1.4 mm further toward L17 than drawn, and the model passes light at s24 and s31 that the drawn lands would stop. L2 and L8 carry a bevel where the figure draws their outlines running into the neighbour. Figure 2 shows only the wide end. Focus is not modelled. The printed prescription does not reproduce the patent's spherical-aberration plots, so on-axis sharpness at the wide and middle stations is worse in the model than in the patent's figures.


## 2026-10-14 — Estimated G1Y focus reconstruction

At the maintainer's request, the static infinity model now reconstructs motion of the source's focus group. JP 5857306 B2 ¶0016–0020 identifies G1Y as L3 and L4 and says that group moves along the axis for focus. The captions of Figures 6–8 specify a 1 m object-to-image distance at the three zoom stations; no close-focus spacings are printed. The official Tokina specification and manual identify front internal focus, 1 m minimum distance and 1:3.57 maximum magnification.

Only d4, before G1Y, and d8, after it, receive opposite focus changes. The L3–L4 internal gaps, G1X, G2–G4, the physical iris, image plane and stabilization centering remain fixed at each zoom station. All printed infinity spacings, radii, glasses and rims remain unchanged.

| Zoom, mm | d4 before, mm | d4 at 1 m, mm | d8 before, mm | d8 at 1 m, mm | G1Y travel toward object, mm |
|---|---|---|---|---|---|
| 72 | 15.25 | 1.728168 | 2.40 | 15.921832 | 13.521832 |
| 105 | 15.25 | 1.721602 | 18.30 | 31.828398 | 13.528398 |
| 194 | 15.25 | 1.715534 | 34.99 | 48.524466 | 13.534466 |

Derivation: retain the selected zoom station and the existing 54.66 mm image-side gap; change d4 by Δ and d8 by −Δ. Launch a unit-height paraxial ray from an axial object D = 1000/focusT mm ahead of the image (first-vertex distance D − track), and solve its image-plane height to zero inside −14 < Δ < 0 mm. The solution advances G1Y toward the object monotonically. At 1 m the calculated EFLs are 84.8543 / 119.3307 / 162.9407 mm and magnifications −0.104075 / −0.151834 / −0.280449. Tele magnification 1:3.566 agrees with the manufacturer's 1:3.57 as a separate comparison, not a fitting constraint.

Thirty-three equally spaced inverse-distance samples limit interpolated first-order defocus to 0.015 mm over the modeled range, retaining the existing rounded-source infinity offsets (−0.004402 / −0.001952 / +0.017508 mm). The stored finite keyframes reproduce the conjugates within 0.000001 mm; every gap stays positive and the renderer trims no surface in this motion. These numerical checks establish the authored approximation, not production focus mechanics or aberration performance.

The focusStep=1 placeholder is removed so the estimated focus slider is continuous. Zoom still steps through the three printed stations. Specs and focusDescription identify the reconstruction as ESTIMATED; only infinity zoom stations remain published. No finiteConjugates certificate is added. The existing printed spherical-aberration discrepancy and group-power ratio discrepancy remain unresolved.
