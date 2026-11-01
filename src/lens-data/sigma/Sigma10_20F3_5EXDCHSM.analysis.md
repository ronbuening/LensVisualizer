# SIGMA 10–20mm f/3.5 EX DC HSM: Example 4 source-preserving reconstruction

## Patent Reference and Design Identification

**Patent:** JP 2010-243737 A  
**Application Number:** JP 2009-091645  
**Filed:** April 6, 2009  
**Published:** October 28, 2010  
**Inventors:** Noriyuki Ogasawara; Yutaka Kamimura (the original PAJ cover prints OGASAWARA NORIYUKI and KAMIMURA YUTAKA)  
**Assignee:** Sigma Corporation  
**Title:** 変倍結像光学系 / Variable Imaging Optical System  
**Example details:** Numerical Example 4, paragraph0044, Figure22, three published infinity stations;26 numbered rows including stop10.

The official discontinued Sigma product page identifies the **10–20mm F3.5 EX DC HSM**, not the separate f/4–5.6 design. Its original optical section supports13 bulk lenses in10 components, four aspherical bulk positions1/2/3/13, blue SLD position7 and green ELD positions10/12. The source resolves two additional thin aspheric pre-pieces,0.200mm at r5 and0.150mm at r24, so the numerical model correctly contains15 optical media while catalog.elementCount remains the maker's13. Neither layer is dropped, folded into another spacing, nor assigned an unproved polymer chemistry. Architecture and date context support a probable production-design association, not an authenticated factory prescription.

The retained official page lists APS-C/DC coverage, seven diaphragm blades, minimum f/22,24cm minimum focus distance,1:6.6 maximum magnification,82mm filter,87.3×88.2mm dimensions and520g, with specifications stated for SigmaSA. The length is filter-surface to mount, not vertex track. Available mount variants are SigmaSA, CanonEF, NikonF, Pentax and SonyA. The current109.7–70.7° field range is mount/sensor-dependent; Sigma explicitly warns that DC crop factors vary1.5/1.6/1.7. It is not an exact match to the patent109.838–72.167°, and no introduction year is inferred from the patent or today's discontinued status. No numerical focus movement or factory clear apertures follow from the product specifications.

## Source Prescription and Architecture

Four functional groups have signs negative–positive–negative–positive. G1 contains four bulk lenses, including the first thin pre-piece bonded to its third bulk lens. G2 contains a cemented doublet and a positive singlet; G3 a cemented doublet; G4 a positive singlet, a cemented negative/positive doublet and a final positive meniscus with the second thin pre-piece. Source stop10 is immediately before G2, with a literal1.400mm interval to r11. G1–G4 positions all change with zoom, and the source drawing gives G1 a reversal. There are25 refracting interfaces plus the stop, four aspherical interfaces and no inferred rear filter or sensor plate.

The source defines nd and νd explicitly in paragraph0037; the claims specify the d-line at587.6nm. All native indices, Abbe numbers, radii, thicknesses and aspheric coefficients are retained. Material coordinates have only the printed precision, notably three decimals for refractive index. Modern catalog proximity is not historical melt identification, and an ELD/SLD marking is not a named glass. The bounded679-entry/eight-vendor query is retained, with compatible alternatives deliberately not substituted.

The three printed focal lengths are10.355,14.992 and19.299mm; calculated first-order EFLs from the literal cells are10.341712660,14.969458871 and19.264917688mm. The printed image gaps are38.240,43.030 and48.881mm, while Gaussian BFLs are38.158707135,42.928613218 and48.752762131mm. Thus the printed-plane residuals are−0.081292865,−0.101386782 and−0.128237869mm. These exceed the last printed place and remain explicit source-consistency FAILs. A separate independent printed-precision feasibility test found one shared13-value nd witness, tying duplicate printed nd/νd pairs across all stations, that reproduces all three printed EFL and BF values while staying strictly inside every ±0.0005 nd rounding cell; its maximum nd shift is0.0004471165435. Exact-rational ABCD verifies that witness. It establishes compatibility with omitted source precision, not recovered factory values, and none of those fitted witness values is adopted. All six literal point-value FAILs remain. The primary keeps the printed planes. Neither the index cells nor the final gaps are silently fitted to improve focus, and no exact factory back-focus claim is made.

Independent ordinary-slope and reduced-angle matrix propagation agree. The isolated group EFLs are−15.436078454,+30.324156868,−43.036654521 and+35.437688780mm. The actual-interface Petzval sum is+0.007426538325mm⁻¹, distinct from powers computed with artificial air boundaries for individual elements. The literal wide Gaussian BFD/EFL is3.689786053, while the printed-label BF/f is3.692901980; both satisfy the relevant retrofocus claim bound and are not interchangeable source cells. A complete non-Petzval Seidel decomposition is not reproduced; the source gives longitudinal/lateral aberration plots, and the functional interpretations below are qualitative.

## Element-by-Element Analysis

The13 maker bulk elements are named L1–L13. H1 and H2 identify separate modeled thin optical pre-pieces, not extra maker-counted bulk lenses. Each stated isolated focal length uses its two vertex curvatures and an air boundary on each side; an asphere's higher-order terms do not alter paraxial vertex power.

### L1 — Aspheric Negative Meniscus

nd = 1.691, νd = 53.052. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = -29.113633601mm. Closest queried coordinate candidate: K-VC80-M (Sumita), not adopted.

The large negative front asphere establishes the retrofocus entrance. Its inferred front28mm and rear17mm clear radii form a disclosed straight rim-join approximation to the section, not published mechanical dimensions. The first even polynomial moderates the strongly off-axis front-group bundle.

### L2 — Aspheric Negative Meniscus

nd = 1.769, νd = 49.428. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = -89.697843150mm. Closest queried coordinate candidate: MC-TAF101-100 (Hoya), not adopted.

The second negative meniscus continues the negative lead. Its independent aspheric polynomial is retained throughA12 rather than copied from the first surface. The bulk remains a separate air-spaced element.

### H1 — Aspheric Thin Negative Pre-piece

nd = 1.518, νd = 52.095. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = -932.069052500mm. Closest queried coordinate candidate: E-CF6 (Hoya), not adopted.

This0.200mm thin negative pre-piece carries source surface5A and is bonded to L3 at r6. Its chemistry is unspecified. At the adopted12.8mm common rim the positive thickness is only0.068727866mm, an explicit inferred-clearance limitation, not a source-provided fabrication tolerance.

### L3 — Negative Meniscus

nd = 1.804, νd = 46.502. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = -38.163558802mm. Closest queried coordinate candidate: S-LAH65VS (Ohara), not adopted.

The underlying negative meniscus shares r6 with H1. Keeping both indices and the actual cemented interface preserves the source optical path; combining the two entries would change power and aspheric placement.

### L4 — Positive Meniscus

nd = 1.699, νd = 30.050. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = +50.685565600mm. Closest queried coordinate candidate: E-FD15 (Hoya), not adopted.

This positive meniscus completes negative G1, supplying opposite power and a higher-dispersion contribution. Its source4.383mm center thickness is literal; an initial author4.389 misread was corrected from the original pixels and retained in the correction history.

### L5 — Negative Meniscus

nd = 1.904, νd = 31.315. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = -21.897889610mm. Closest queried coordinate candidate: TAFD25L (Hoya), not adopted.

The thin negative meniscus starts G2 behind the stop. Its literal nd1.904 is high; the initial author1.804 misread was rejected before any candidate construction. It is cemented to L6.

### L6 — Biconvex Positive

nd = 1.673, νd = 32.170. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = +20.933630040mm. Closest queried coordinate candidate: H-ZF2 (CDGM), not adopted.

The positive partner supplies the greater positive power of the G2 doublet. The real r12 interface uses both actual source indices, not the air-boundary contrast used for the isolated focal-length diagnostic.

### L7 — Biconvex Positive

nd = 1.497, νd = 81.607. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = +34.242981584mm. Closest queried coordinate candidate: FCD1 (Hoya), not adopted.

This low-dispersion positive singlet completes G2 and corresponds to the maker SLD-marked bulk position7. A catalog-compatible fluor-crown coordinate is not proof of the manufactured melt.

### L8 — Biconcave Negative

nd = 1.713, νd = 53.938. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = -17.507408448mm. Closest queried coordinate candidate: LAC8 (Hoya), not adopted.

The negative member starts net-negative G3 and is cemented to the higher-index positive L9. Their spacing remains fixed while the group translates in the reconstructed zoom.

### L9 — Positive Meniscus

nd = 1.847, νd = 23.784. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = +29.344010187mm. Closest queried coordinate candidate: FDS90 (Hoya), not adopted.

The positive meniscus balances L8, leaving net-negative G3. The source does not publish a finite-focus movement for this group; no such law is inferred from its zoom motion.

### L10 — Biconvex Positive

nd = 1.459, νd = 90.279. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = +39.476827905mm. Closest queried coordinate candidate: FCD10A (Hoya), not adopted.

The positive biconvex singlet begins G4 and corresponds to the first maker ELD marking. Its source index is1.459, not the rejected author1.458 reading. The literal high Abbe coordinate is retained without modern-glass replacement.

### L11 — Negative Meniscus

nd = 2.001, νd = 25.458. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = -23.245426717mm. Closest queried coordinate candidate: TAFD40 (Hoya), not adopted.

This high-index, high-dispersion negative meniscus begins the strongly dispersive G4 cemented pair. Its front radius is+693.975mm; the initial author+593.975 reading is explicitly rejected. This is an author transcription correction, not a patent erratum.

### L12 — Biconvex Positive

nd = 1.459, νd = 90.279. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = +29.265078265mm. Closest queried coordinate candidate: FCD10A (Hoya), not adopted.

The positive ELD-marked partner is cemented to L11 at r22. The pair is the natural source Lc witness for the ν ratio, index ratio and cemented-radius conditions. Source coordinates1.459/90.279 remain unchanged.

### H2 — Aspheric Thin Positive Pre-piece

nd = 1.518, νd = 52.095. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = +483.412230687mm. Closest queried coordinate candidate: E-CF6 (Hoya), not adopted.

This0.150mm aspheric pre-piece is bonded to L13 at r25 and carries24A. The minimum thickness occurs inside the radial band, not at its rim: a separate dense author profile gives an approximate0.08921756mm. The independent stationary-point solution refines this to0.0892171289563mm at radial height7.6033990916mm. An edge-only thickness test would miss that minimum.

### L13 — Positive Meniscus

nd = 1.487, νd = 70.440. Glass/material: unidentified historical material; catalog substitutes not adopted. Isolated f = +104.025615848mm. Closest queried coordinate candidate: FC5 (Hoya), not adopted.

The final positive meniscus completes G4. H2 and L13 are retained as two optical media despite one maker-counted aspherical bulk component. The final distance is the printed source BF, not a calculated best-focus substitute.

## Aspheric Surface Convention

The patent equation uses conic vertex radius plus even powersA4–A12; K=0 for all four source aspheres. The V2 convention is identical, so no coefficient scaling or sign conversion is needed. Nonzero coefficients are copied literally. Surface3A A12 is+3.72158×10⁻¹⁵, not the initially misread9.72158×10⁻¹⁵; the original high-resolution crop and rejected initial extraction are retained. Surface5A omits no nonzero terms: A10 andA12 are printed zero. Surface24A A12 is zero. Coefficients are in native millimetre powers, not normalized focal-length units.

Two aspheres are bulk entrance faces, while two are front faces of thin pre-pieces. Separate sag/slope profiles and comparison to each base sphere are required. A spherical replacement is a diagnostic perturbation only, never the adopted prescription. The actual native tracer must use both the aspheric sag and its derivative for surface normals.

## Source Conditions and Numerical Discrepancies

The literal source computes βwr=−0.669970206, β2w/β4w=4.529520321, νp/νn=3.546193731, |RLc/(ndLcn−ndLcp)|=41.512915129, ndLcp/ndLcn=0.729135432 and printed BFw/fw=3.692901980. All six stated inequalities pass. Their printed summaries are−0.671,4.508,3.546,41.506,0.729 and3.693. Differences are retained, particularly the group-magnification and cemented-ratio values; a condition passing does not imply numerical agreement within the last printed place. Claim1 says the combined G2–G4 refractive power stays positive, while surrounding prose also discusses their magnifications; these are distinct properties and are not conflated.

Initial author misreadings of R21,D8,n6,n11 and surface3A A12 were found and corrected by high-resolution rereading before construction. The rejected arrays/calculations remain archived. This history is not evidence that the patent changed, nor permission to harmonize the source with a named glass or another example.

## Reconstructed Zoom, Aperture and Focus

The129-node cam contains all three literal source stations, marked published only at t=0,0.5,1. Between them, G1–G3 image-relative positions are piecewise linearly interpolated. G4 is a unique positive-gap quadratic compensator, solved against a separately interpolated Gaussian target. The actual terminal gap instead retains the interpolated source printed-plane residual. This maintains a connected geometric zoom without silently substituting Gaussian image planes. Staged32/64/128-interval tests give maximum Gaussian-target interpolation errors0.00540615/0.00138762/0.000351606mm on the stated off-midpoint grids. The last is below0.001mm; the much larger source printed-plane discrepancy is not hidden by this cam-accuracy result.

G1 moves imageward from wide to middle and objectward from middle to long; G2–G4 move objectward in image-relative coordinates. The adopted G1 reversal is a positional corner at the middle anchor, not a recovered smooth factory cam. All positions are continuous; derivatives need not be. The completed 8,193-state native sweep verifies the actual piecewise-linear runtime interpolation, not only disconnected stations; its maximum interpolation difference from station EFL labels is0.0001772255mm, while the actual printed-plane residual reaches0.1283038453mm. These are different quantities.

The stop is the literal row10,1.400mm before r11. The apertureModel is from-nominal-fno, with a reconstructed iris schedule and no authored STO.sd. Source nominal values3.611/3.631/3.597 remain distinct from the marketingf/3.5. Exact marginal launch calibration and the viewer's paraxial entrance-pupil helper are separately tested. Initial source-anchor iris radii from an independent vector-Snell calculation are5.242876023,6.039944409 and6.888192125mm. These use the literal-table calculated EFL, not the rounded printed focal labels. A printed-label launch instead gives5.249671323,6.049179904 and6.900681140mm. Both are derived diagnostics, not published factory iris dimensions. Ordinary marginal STO clipping in the actual-viewer beam remains an applicable FAIL, not N/A or a reason to enlarge physical rims.

Clear apertures are drawing-compatible reconstructions limited by literal geometry. The first front/rear radii28/17mm are unequal; every other lens uses its stated paired rim, including both thin layers. Default gap-sag allowance0.9 is retained. Completed common-band geometry has minimum positive thickness0.068727866mm, maximum gap-sag fraction0.893535713 and maximum surface edge angle59.673628°; the default angle limit is asin(0.9)=64.158067°. The first lens physical straight rim-join angle to the axis is64.2092282°, distinct from its first aspheric surface edge slope49.1525873° and the system maximum surface slope59.673628°. The surface-angle policy is not a sidewall-taper limit. The separate complete-solid material survey includes the front unequal-rim join, all four polynomial aspheres and both thin layers. A finite radial/ray survey is not a continuum manufacturing certificate.

Primary focus status is NO_INTERNAL_RECONSTRUCTION. The24cm maker MFD is inactive UI metadata, not an authored optical state. Both focus columns are identical at every zoom, with no focus.conjugates. Native finite MTF must refuse nonzero focus. No exact movement law or published finite configuration is invented from a single distance specification.

## Validation Scope and Current Gate

The initial bounded native probe tested five zooms with197-ray disks at axial,60% source angle and exact source angle. It reported zero render trim and no native noBracket/TIR. All off-axis probe rays transmitted; four axial marginal rays per bundle clipped the derived stop under the actual-viewer pupil. This is preliminary evidence, not the final dense-field or full-material audit.

The completed author validation uses the actual viewer entrance-pupil helper and linear iris stopdown, not epAtZoom as a substitute. Across33 sampled zooms, all238 full33-radius axial beam settings retain an applicable marginal STO-clipping FAIL. Separately, exact-nominal marginal calibration is checked in the portable replay. Across952 dense3,209-ray field bundles there are28,624 ordinary clips and zero native failed/noBracket/TIR rays. Source-angle coverage and clipping counts remain recorded per bundle rather than presented as unvignetted performance.

The separate material audit checks28,368 actual-viewer launches at five zooms, all applicable f-stops, and axial/60% source/source/105% stress angles. Its26,905 surviving rays have726,644 exact boundary-partitioned intervals against all15 complete solids, including launch-to-first and last-to-image air, with zero wrong-material intervals. The polynomial-asphere intersection implementation isolates derivative critical points and filters squared-equation roots against the original sag. Its author self-tests are included; they are distinct from the fresh independent construction audit reported below. The initial self-test assertion omitted the segment-domain filter for an infinite-line sphere primitive; that assertion was corrected without changing the actual checker, and both outcomes remain preserved.

The normal viewer MTF run contains34 reference-wavelength field cases over five zooms at source nominal and f/8. All converge through at least40lp/mm with zero failed rays; several f/8 center cases do not establish80lp/mm convergence. Five photopic requests remain spectral-data-unavailable, and five finite-focus requests remain finite-conjugate-unavailable. These are genuine unavailable scopes, not successful full-spectrum/finite tests.

All three printed source half-angles lie slightly beyond the native14.175mm APS-C reference: their actual image heights are14.189134153,14.188422966 and14.182160871mm. The public MTF call refuses the corresponding fractions1.000997118,1.000946946 and1.000505176 as invalid-input, and its outsideModel flags are retained. A separately labeled diagnostic exposes the unchanged native traceField helper by import rebasing and one export only, without physics/guard edits or axis widening. Six exact-source-angle reference cases, nominal and f/8 at each anchor, converge through80lp/mm with zero failed rays. Three corresponding photopic requests remain unavailable. This diagnostic is not normal viewer-format certification.

Actual TypeScript5.9.3 passes. All1,025 zoom geometry states with three identical focus samples have zero hidden render trim. The three native cross sections were rendered and visually inspected; their caption explicitly gives unequal horizontal5px/mm and vertical4px/mm diagnostic scales, so they are not used as a uniform-scale manufacturing drawing. The source focal/printed-BF consistency FAILs remain visible. Photopic dispersion, factory illumination, finite focusing and the complete patent aberration plots are not certified. The fresh independent source/cam comparison and separate native audit have completed:99,648 actual-viewer/helper/APS-C/source rays include98,041 survivors and1,607 physical clips, with zero native failures and2,647,107 clean surviving material intervals. The actual default helper fan is360/360; axial transmission is13,896/14,184 with288 ordinary iris clips. Of70 converged chief solves,69 are admitted; the one clipped chief is only the wide105% stress case atsurface2, and the maximum admitted stop residual is7.88e−8mm. All96 independent normal reference fields converge through at least40lp/mm, six exact source-angle cases through80, and all24 photopic/finite guards remain unavailable. The independent exact frozen packet, final narrative and sealed-archive binding are still pending; these substantive checks are not yet a final Stage4 archive approval. Integration remains pending.

## Sources and Reproducibility

1. Complete retained JP2010243737A,24PDF pages including English PAJ cover. Example4 table/coefficients/conditions: PDF11/printed10; Figure22 and23: PDF18/printed17; subsequent Example4 plots: PDF19–20. Explicit d-line definition: paragraph0037,PDF8. Asphere equation: PDF9.
2. Unchanged exact intake card, with output stem Sigma10_20F3_5EXDCHSM. Its brevity is not a substitute for original extraction.
3. Sigma official discontinued product page, https://www.sigma-global.com/en/lenses/10_20_35/, and its original construction image, https://www.sigma-global.com/lenses/10_20_35_specification_01.jpg. Raw bytes, exact URLs and acquisition hashes are retained. Current product facts are not a date-stamped historical launch specification.
4. Read-only pinned V2 runtime and CHAT1 protocol. No corpus metadata generation, integration, build/prerender or source-toolchain modification is performed.
