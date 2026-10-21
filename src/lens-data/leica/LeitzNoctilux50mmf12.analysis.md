# Original Noctilux 50 mm f/1.2 association: the US3459468A reconstruction

## Current individual-package correction and governing validation scope

This version incorporates the previously verified per-lens viewer-coverage correction into the individual package. It supersedes any older blanket actual-viewer full-pupil claim based on a nominal EFL/(2 f-number) or epAtZoom launch. The optical prescription, geometry, iris and focus controls, and all original source/production qualifications are unchanged. Historical numerical results below remain evidence only for their recorded inputs.

Using the pinned viewer helper launch, actual aperture control mapping and physical iris convention, 0 sampled aperture/zoom settings pass and 8 retain full-pupil FAIL from ordinary clipping. Clipped marginal rays have not been relabeled as passed, and qualified construction does not assert a fully transmitted pupil. Actual viewer helper pupil and iris; actual quick-stop logarithmic slider mapping;33 nonnegative axial radial samples including the full current viewer launch radius. Infinity only, rotationally symmetric unchanged model. Ordinary clips remain FAIL; no toleranced conversion of clip to pass.

The correction evidence includes exact public-helper versus physical-ray parity, the per-lens material scope and native raw failure classifications, and reference/photopic MTF availability or nonconvergence. It does not turn a ghost/display path into physical transmission, extend a finite-focus or source-field claim, or assert universal ray coverage. The machine-readable individualPackageRevision record contains the exact corrected per-lens counts, retained failures, source hashes, executable replay and final audit binding.

The retained strict implicit-surface boundary residual FAIL of approximately 4.08e-8 remains visible; no tolerance change is used to rewrite that observation.

## Patent Reference and Design Identification

**Publication:** US 3,459,468, “Two-aspherical-surfaced, high speed photographic objective lens”  
**Inventors:** Helmut Marx and Paul Sindel  
**Assignee:** Ernst Leitz, G.m.b.H., Wetzlar, Germany  
**US filing:** 19 April 1965, application 449,192  
**Claimed German priority:** 25 April 1964, L 47,701  
**Publication:** 5 August 1969  
**Selected source:** The sole description table, sole unnumbered drawing and repeated claim 1.

All three pages of the original US publication control this model. The drawing is not visibly numbered; “Figure 1” in older research is shorthand, not an additional source figure. Claim 1 repeats the same prescription and implicit asphere definitions. Related national aliases are not additional embodiments and have not been used to silently substitute numerical cells.

The association to the **original 1966 Noctilux 50 mm f/1.2** is strong but qualified. Leica's 4 October 2016 manufacturer anniversary account identifies Helmut Marx, the photokina 1966 introduction, six elements in four groups and aspherical first and last elements. Patent ownership, inventor, chronology, speed and this distinctive topology agree. The maker does not publish the patent number, authenticate each factory radius or identify all six historical melts. The 1975 spherical f/1 successor, 2008 f/0.95 floating-group lens and later recreation are not this selected numerical model.

The patent's prose explicitly describes **52 mm** and a **24×36 mm** image. The table is normalized to f=1; its heading says f/1.2 and 2×22.5°=45°. Every source length here is scaled by 52, not forced to the marketed 50 mm name or to an exactly calculated 52 mm EFL. The name retains the production association while the implementation and catalog design field expose the source scale. This is not a 4% rescaling chosen to match the product label.

## Optical Architecture and Source Conventions

The four physical groups are L1 | L2+L3 | L4+L5 | L6: positive front singlet, negative cemented front component, negative cemented rear component and positive rear singlet. There are six glass bodies, eight glass-air interfaces, two shared glass-to-glass boundaries and ten physical refracting surfaces. S4 and S7 each occur once; an inferred computational iris adds no glass.

Source d is the distance **to the preceding surface**, not the interval after the current row. The first d1=−0.722 is explicitly the signed first-vertex distance from the entrance pupil. It is not negative glass, an object distance or an extra translation. The nine physical intervals after S1–S9 are 0.130, 0.004, 0.226, 0.042, 0.270, 0.031, 0.181, 0.001 and 0.117. Their sum 1.002 becomes a 52.104 mm first-to-last vertex span.

Only S1 and S10 are aspherical. The patent does not say that both faces of each outside element are aspherical. Its two near-contact group gaps, 0.004 and 0.001, remain 0.208 and 0.052 mm respectively. They are not replaced by cemented interfaces or enlarged for convenient tracing.

The selected literal-curvature branch gives EFL 52.021736786 mm and Gaussian BFD 27.668265797 mm. The last interval is not printed; this derived infinity plane gives a first-vertex-to-image track of 79.772265797 mm. It is not a flange register, a product mechanical measurement or a source aberration-optimized film plane. The layout is a modified double-Gauss family, not a reverse-telephoto prescription or a short-total-track telephoto.

## The Implicit Aspheres and Their Native Representation

The source defines chord L, sag c and radial coordinate y by L²=y²+c² and b=L²/2. Both surfaces obey c=P(b), with six printed coefficients. For S1 those coefficients are 0.869, −0.188, 0.2, 0, −16 and 100. For S10 they are −0.932, 1.889, −12, 0, 233 and 1670. The last comma in the source is a thousands separator. These are coefficients in powers of b, not conventional coefficients in powers of y, not derivatives, and not already millimetre-based native A terms.

The continuous root connected to c=0 at y=0 is solved from the original equation. Its slope follows implicit differentiation: dc/dy=P′(b)y/[1−P′(b)c]. Root regularity and the denominator are checked; the sag is not generated by picking an arbitrary polynomial root independently at each height.

The source also calls c1 the vertex curvature, but independently rounded entries are not exactly reciprocal. Printed R1=1.151 and R10=−1.073 differ from 1/0.869 and 1/−0.932. Both source branches remain in the evidence. The implementation explicitly adopts **literal c1 curvature**, giving native vertex radii +59.838895282 and −55.793991416 mm. The printed-radius branch instead gives EFL 52.023969041 mm and BFD 27.676738807 mm. The approximately 0.002232 mm EFL and 0.008473 mm BFD differences are disclosed, not “repaired” by tuning a source cell.

Native V2 supports a conic plus radial polynomial, not this implicit chord equation directly. The delivered K=−1 base carries the exact selected vertex curvature. Nine fitted even terms A4 through A20 approximate the remaining sag on the **actual stored clear radii**, 26.5 mm for S1 and 16.5 mm for S10. They are explicitly derived representation coefficients, not falsely attributed to the patent. Physical scaling follows A_n(mm)=A_n(normalized)/52^(n−1). No direct coefficient copying or unqualified finite Taylor truncation is used.

The author fit uses an 80-digit implicit solution and Chebyshev interpolation of the divided h⁴ residual. Separate residual-polynomial calculations bound the actual stored binary64 coefficients, rather than idealized unrounded fit values. The independent certificate uses exact rational coefficient conversion, outward-rounded Bernstein subdivision and a common implicit-root box. It bounds whole-clear-disk sag errors by approximately **9.754×10⁻⁹ mm** and **6.375×10⁻¹¹ mm**, and slope errors by **1.217×10⁻⁷** and **1.276×10⁻⁹** respectively. These are representation errors relative to the printed implicit equation, not claims of comparable source precision, manufactured surface accuracy or factory tolerances.

A finite source-versus-native ray comparison is also retained. Identical launches through the fitted and original implicit surfaces give maximum surviving image-position difference about 3.330×10⁻⁶ mm and final outgoing-direction vector-norm difference 1.060×10⁻⁷ in the author grid (not the largest intermediate-surface direction difference). Strict equality of every hard-stop classification does **not** pass: twelve axial f/1.2 circle-grid edge rays pass the fitted marginal-calibrated iris but lie about 4.08×10⁻⁸ mm outside that same iris when traced through the exact source surface. The native model and iris are unchanged. That applicable strict-equality failure remains visible as boundary sensitivity of a finite representation, not hidden as identical transmission. A separately source-calibrated diagnostic gives matching sampled classifications without being adopted as a new physical iris or replacing the same-iris result.

## Element-by-Element Analysis

### L1: positive front aspherical meniscus

n_e=1.821, ν_e=45.2. Glass: unidentified historical high-index material; no catalog melt is assigned. Standalone EFL is approximately +95.766661 mm.

Its selected-curvature front asphere and spherical rear R2=4.571 form a positive meniscus. The 0.130-unit centre thickness becomes 6.760 mm. The outside asphere has strong off-axis leverage, but its high-order coefficients are not independently interpreted as a complete chromatic solution. The modeled 26.5 mm equal rims follow the original schematic's broad front component, not an assumed filter thread. A modern TAFD10 or TAF5 coordinate analogy does not authenticate Leica's special historical glass.

### L2: positive front member of the front cemented component

n_e=1.900, ν_e=40.5. Glass: unidentified high-index crown-region material; the bounded retained catalog query does not establish a compatible exact equivalent. Standalone EFL is approximately +41.129565 mm.

The source radii 0.575 and 2.434 form a positive meniscus, 11.752 mm thick at ×52. S4 is shared with L3, so this standalone in-air power is not the net power of the installed compound group. The high source index is retained rather than changed to a modern high-index candidate with different Abbe number.

### L3: negative rear member of the front cemented component

n_e=1.792, ν_e=25.9. Glass: unidentified flint; SF56A and PBH23 are coordinate analogues, not historical identities. Standalone EFL is approximately −26.989938 mm.

The positive radii 2.434 and 0.349 create a negative meniscus. Its 2.184 mm axial thickness and strongly curved rear surface outweigh L2's positive contribution, producing a net front cemented group EFL of −219.964428 mm. The source schematic has a reduced inner powered arc and a wider outer shoulder. The modeled 23.5 mm cemented rim and 14.0 mm rear clear arc preserve that distinction, represented by the runtime's declared conical join rather than a recovered mechanical shoulder.

### L4: biconcave negative front member of the rear cemented component

n_e=1.844, ν_e=30.0. Glass: unidentified high-index flint; no defensible exact melt is adopted. Standalone EFL is approximately −20.765479 mm.

Its negative front radius −0.450 and positive rear radius +1.385 make it biconcave, not a generic negative meniscus. The centre thickness is 1.612 mm. The inner 12.5 mm front cap and wider 20.4 mm cemented interface are schematic clear-aperture hypotheses. This negative member faces the central iris and is not assigned the 2008 lens's floating-focus role.

### L5: biconvex positive rear member of the rear cemented component

n_e=1.900, ν_e=40.5. Glass: the same printed coordinate pair as L2, without proof that production used an identical melt batch. Standalone EFL is approximately +27.091471 mm.

The positive +1.385 shared front radius and negative −0.665 rear radius form a biconvex element, 9.412 mm thick. L4+L5 nevertheless remains a net negative component at −258.246964 mm. The 0.052 mm air separation after S8 is literal and retained; opposite signed sags make its finite-height gap expand rather than imply a collision from vertex spacing alone.

### L6: positive rear singlet with an outside asphere

n_e=1.694, ν_e=54.6. Glass: unidentified historical crown; S-LAL9 and K-LaK9 are close e-line coordinate analogues only. Standalone and group EFL are approximately +43.022508 mm.

The spherical positive front radius 1.180 and selected-curvature negative rear asphere produce a biconvex positive singlet. Its 6.084 mm thickness and modeled 16.5 mm equal rims leave positive material thickness. The original S10 implicit equation is checked throughout that clear disk; a broad-aperture Taylor series from an unrelated radius is not substituted. The rear asphere is geometrically distinct from the source's spherical front face S9.

## Glass Map and Spectral Scope

The original explicitly uses e-line n and Abbe data. All six pairs are retained, including their modest printed precision. The V2 `indexReference: e` marker is used without an uncertainty note that would relabel the inspector as an unknown spectral source. No silent conversion to d-line coordinates occurs.

The bounded native query uses the correct e-reference compatibility calculation across the retained catalog, with full vendor provenance and residuals. SF56A differs from L3 by about −0.00020103 in n_e and −0.02651 in ν_e; S-LAL9 differs from L6 by +0.00000627 and −0.00949. L1 has only looser TAFD10/TAF5 analogies. The L2/L5 and L4 pairs remain unidentified within the stated search. Catalog proximity is not a unique supplier, historical melt, anomalous-dispersion curve or production-glass assignment.

Reference MTF runs at the native e-line 546.074 nm. An actual photopic support probe returns spectral-data-unavailable because no full material dispersion is adopted. That is an honest unavailable result, not evidence of poor chromatic performance or permission to relabel the source as d-line. No measured coating, transmission or factory polychromatic result is asserted.

## Focus Mechanism and Stop Reconstruction

**NO_INTERNAL_RECONSTRUCTION.** The retained original and maker account do not provide a 1966 finite-focus movement law or verified minimum-focus value. The floating last-group description in the maker document explicitly belongs to the 2008 f/0.95 generation and is not imported here.

The schema requires closeFocusM. The hidden value 10 m is explicitly a **nonphysical UI compatibility placeholder**, not a manufacturer MFD, authored conjugate or modeled travel. All 101 native focus states are identical, and an actual focusT=1 MTF support probe returns finite-conjugate-unavailable. Integration must not display the placeholder as a product specification.

The source entrance-pupil relation places the pupil +0.722 normalized units, or +37.544 mm, from the first vertex. For the front subsystem matrix [A B; C D] through S5, the central stop offset is derived as t=(EP·A−B)/(D−EP·C). It is 0.158448704852 normalized units after S5 and 0.111551295148 before S6, preserving the full 0.270 gap. Thus the physical split is approximately 8.239332652+5.800667348 mm. It is a pupil-derived stop position, not a directly printed midpoint or an arbitrary paraxial image fit.

The exact native marginal calibration gives iris radius 12.687279345 mm. Its paraxial entrance-pupil radius is 21.857915267 mm and Gaussian f-number approximately 1.189997677, distinct from the exact marginal f/1.2 convention. The exit pupil is approximately −29.064163247 mm from the last vertex. Stopped-down controls f/2 through f/16 are adopted validation controls, not extra source prescriptions. Both physical UI scaling from the wide-open iris and per-f-number marginal recalibration are separately identified.

## Geometry, Aperture and Field Validation

No numerical clear diameters are printed. The adopted S1–S10 semi-diameters are 26.5, 26.5, 23.5, 23.5, 14.0, 12.5, 20.4, 18.8, 16.5 and 16.5 mm. They are source-schematic hypotheses with reduced inner caps, not factory measurements. They were not expanded to force off-axis transmission, hide internal failures or fit MTF. All 33 historical nominal-launch axial radius samples passed at all eight controls, and the nominal 317-point axial grid passed the native model. All eight current actual-viewer full-pupil tests retain ordinary clipping FAILs.

Analytic spherical and polynomial/spherical critical-point checks give minimum shared-band glass thickness 1.357980962 mm, maximum rim angle 51.808921641° and maximum physical-gap sag fraction 0.613226443. Every native render trim is zero. The original tiny gaps remain unchanged, and no gap-sag override is needed. The modeled rim joins are actual tested solids, not assumed identical to undocumented factory barrel geometry.

The 22.5° source half-field gives an exact modeled chief height about 21.024298517 mm. The geometrically exact 24×36 mm corner has radius 21.633307653 mm and requires approximately 23.156551468°. The native format catalog uses a rounded 43.3 mm diagonal, or radius 21.65 mm, whose exact chief inversion is approximately 23.174686451°; the native numerical solver differs by roughly 2.2×10⁻⁵°. These are explicitly separate tests. The lens-object halfField value 24.528123237° and prepared-state field-geometry boundary 24.528116324° are slightly different API results. Both are broader numerical diagnostics, not additional source field claims; the author and independent grids retain their respective values.

At f/1.2 the sampled native surviving counts are 317/317 on axis, 111/317 at the source 22.5° limit, 95/317 at the exact frame corner and 61/317 at the runtime diagnostic boundary. Stopping down increases admitted coverage. All sampled required and diagnostic bundles retain valid rays; the fractions are geometric launch-grid fractions, not photometric throughput.

The historical independent nominal-launch/UI-iris grid checks 17,752 rays and 15,998 surviving paths across seven field references and eight apertures. It partitions 95,988 glass and 95,988 air segments against the intended and unintended solids and finds no surviving-material violation or internal noBracket event. Its 312 first-surface noBracket outcomes are independently shown to have no intersection within the actual first clear cap. The author's separately marginal-calibrated 17,752-launch grid also agrees with the native runtime in every fitted-surface survival decision. The two iris conventions and their small field-API differences remain distinct. Ordinary allowed clipping remains visible, and finite samples are not a continuum proof of every possible ray.

## First-Order, Source Conditions and Performance

Reduced-angle matrices and separately accumulated scalar rays agree on both printed-radius and literal-curvature branches. The selected branch has principal-plane offsets H1=+41.863546983 mm from the first vertex and H2=−24.353470989 mm from the last. Its Petzval sum is approximately 0.005255681192 mm⁻¹. Aspheric high-order terms do not replace the declared vertex-curvature choice in this first-order calculation.

The general prose defines modified surface power p and Seidel distance t, not a second numerical prescription. Per-surface values are retained. The compound-component interpretation of the described positive singlet / negative cemented component / stop / negative cemented component / positive singlet sequence gives a=u=2, V=[S1,S3] and H=[S8,S10]. The literal-curvature half-spreads are approximately 0.000253413 and 0.079322795, below the stated approximate 0.15 limit; the printed-radius branch also passes. This mapping follows the prose and independently negative compound powers, but V/H labels are not printed on the drawing. It is identified as an interpretation, not invented source table labels. General permitted redesign variations are not applied to this literal model.

Reference diffraction MTF tests both iris conventions, the authored Gaussian and separately best-axial planes, the native rounded format, the exact frame corner and the source angular limit. All 128 reference fields converge with zero failed rays. The requested frequencies are 0, 20, 40 and 50 lp/mm, within the actual 50 lp/mm convergence band. At f/1.2 the authored on-axis model gives approximately 0.7953 at 20 lp/mm, 0.4219 at 40 and 0.2823 at 50. The separate best-axial shift is approximately +0.023001 mm and is not written into the main image interval.

The patent's night-light and image-aberration statements and the manufacturer's anniversary praise are source claims, not measured MTF specifications reproduced here. This file is a qualified, numerically tested reconstruction with disclosed source rounding, polynomial approximation, pupil-edge sensitivity, inferred clear apertures and unavailable finite/polychromatic scope. It is not an exact factory performance certificate.

## Sources

1. Complete original [US3459468A](https://patents.google.com/patent/US3459468A/en), SHA-256 a5d7b6b7cd55af5da28f289312b37dffcc4c4a47ee9bb8b667c83f13d944ebee. PDF page 1: unnumbered schematic; page 2: bibliographic context, 52 mm/24×36 example, component definitions and chord convention; page 3: sole table, two coefficient rows and repeated claim 1. [Retained private original](https://drive.google.com/file/d/1Hulh14xWlTk1KlAPDYqVlufE_u_OI1h-/view).
2. [Leica Camera AG, “50 Years of Leica Noctilux-M,” 4 October 2016](https://leica-camera.com/sites/default/files/downloads/135192/Press%20Information_50%20Years_Leica%20Noctilux%20M.pdf), complete three-page manufacturer original, SHA-256 de4057e9782c066dca6ca18d26d3ddf8dadb278f371216a8c02cba8dd907ad73. Original 1966 account spans pages 1–2; later 1975 and 2008 generation descriptions are kept separate.
3. Exact selected intake card and its retained historical text; fresh original-source baseline and separately authored source/representation/material audits; full bounded catalog-coordinate provenance; conversion code and raw failed strict-boundary comparison are preserved in the dossier evidence. The later explicit batch authorization, not historical administrative card holds, governs construction.
