# Continuous-zoom review, 2026-10-23

Status: candidate awaiting independent repository integration and verified cloud delivery. Not deployed or manufacturer-validated.

JP2008003195A Example2 ¶0083 requires increasing G1–G2 separation, decreasing G2–G3 and G3–G4 separations. These remain monotonic throughout the inferred path; it does not require monotonic absolute G2 position. Keep G1/G3/G4 piecewise-linear and solve paired D5/D14 G2 translation. Infinity is the original explicitly inferred conjugate convention, not a newly discovered source label. Separate conservative aperture correction: source rim was inferred; S1 semi-diameter reduced30→28mm to agree with bonded S2/S3 common28mm boundary. No radius, thickness, index, glass or source gap changes. This eliminates an unphysical first clip inside the cemented pair without widening any surface.

All added zoom nodes are explicitly unpublished. Native source stations, fixed radii, thicknesses, glass/media and asphere coefficients are retained, as are native image-plane residuals. Interpolating those residuals does not erase source rounding or claim perfect manufacture. Piecewise path slopes may have corners; this is a continuous visualization reconstruction, not a mechanically C1 factory cam. Intermediate EFL labels use the computed prescription EFL.

Full diffraction MTF uses the unmodified engine with maxGridSize256, five fields and requested0–100lp/mm at21 zoom states, plus five off-node zoom states. Returned per-field trustworthy bandwidths govern; no blanket100lp/mm claim. Photopic and finite-conjugate unavailability is retained where the source cannot support them. Exterior aperture clipping is not a failed cemented interface. Raw diagnostics accompany this review.

The original analysis/audit below records the historical source-station-only model. Its linear-interpolation limitations are superseded ONLY by this explicitly inferred variant and the current test outputs; source identity and uncertainty statements remain applicable.

## Patent Reference and Design Identification

**Patent:** JP 2008-003195 A
**Application Number:** JP 2006-171066
**Filed:** 2006-06-21
**Published:** 2008-01-10
**Inventors:** Yuichi Muramatsu; Akio Arakawa
**Applicant:** Tamron Co., Ltd.
**Title:** High variable magnification zoom lens
**Example details:** Example 2, Figure 5; numerical paragraphs 0081-0095

The candidate preserves the selected Japanese A-publication, including its PAJ wrapper. No grant, translated counterpart or alternate example supplies replacement numbers. This is a patent reconstruction associated with the Tamron AF18-250mm F/3.5-6.3 Di II LD Aspherical [IF] MACRO (Model A18) by convergent construction evidence, not a manufacturer-confirmed factory prescription.

1. The selected table gives 16 physical substrates in 13 air-separated components. Two additional 0.20 mm optical films are represented explicitly, making 18 computational media.
2. Four functional groups contain 3+4+5+4 substrates. The manufacturer diagrams agree with the bonded substrate pairs L1-L2, L8-L9 and L15-L16.
3. The two hybrid-film positions correlate with the maker's L4/L13 hybrid positions; low-dispersion positions L2/L11 and the AD-labelled L3 also agree structurally. These are product-diagram correlations, not patent spectral specifications.
4. The native 18.43-241.83 mm and F3.47-6.35 range is compatible with the marketed 18-250 mm F3.5-6.3 identity without rescaling either endpoint.
5. Both the source and product describe inner focusing. The numerical table gives no near-focus state, so the marketed 0.45 m minimum distance and 1:3.5 reproduction ratio are not reconstructed.

The official archive records release in 2007; the Japanese launch brochure specifies a planned 2007-02-22 introduction. An English brochure timeline says 2006. These statements are retained as different publication/launch contexts rather than substituted for the patent's 2008 publication date. The original card also records an older generic instruction-sheet claim of 14 groups/16 elements with a placeholder hood. The model-specific archive and both launch diagrams give 13/16; the generic document was not newly authenticated in this pass.

Production metadata uses the Canon EF, Nikon F, Sony A and Pentax K mount families, APS-C format, seven diaphragm blades and a 62 mm filter thread. The filter thread is only a mechanical outer constraint, not the diameter of any optical surface. The modeled 29 mm field-reference diameter is inferred by doubling the source plots' 14.5 mm image-height label. It is not a separately published clear-image-circle measurement or an assertion that the printed angular field maps to that exact distorted chief height.

## Optical Architecture

The four functional groups have positive-negative-positive-positive power. Their computed standalone focal lengths are:

| Group | Source surface span | Physical substrates | Computed focal length (mm) |
|---|---|---:|---:|
| LG1 | r1-r5 | 3 | +95.468902 |
| LG2 | r6-r14 | 4 | -12.712700 |
| LG3 | r16-r24 | 5 | +43.768108 |
| LG4 | r25-r32 | 4 | +46.214504 |

The negative second group carries the qualitative inner-focus motion. The stop is source r15, exactly 1.00 mm ahead of r16 and the third group. G3 contains a negative-positive bonded pair, a positive meniscus, another positive lens and a terminal negative lens. Paragraphs 0054-0058 and 0082 connect this three-positive-lens strategy to controlling aberrations at high zoom ratios and avoiding excessive sensitivity. Individual-element aberration contributions were not decomposed here.

The actual table retains every source medium, including both thin films. No sensor-cover plate, optional filter, invented glue layer, stabilization group or mechanical barrel is added. The 13 air-separated components are distinct from the four moving functional groups.

At the wide station the first-to-last-vertex span is 89.245 mm and first-vertex-to-image track is 128.828 mm. At tele these are 117.476 mm and 206.860 mm. The wide BFD exceeds EFL, while tele total track/EFL is below one; those state-specific relations support a wide retrofocus and telephoto-end interpretation, without assigning either relation to every intermediate state.

## Element-by-Element Analysis

All focal lengths below are standalone thick-element powers in air, recomputed from the final data file. They are not additive in-system contributions. The film entries are optical media bonded to physical substrates; they do not increase the manufacturer's element count. Glass identity is unresolved even where a catalog coordinate is nearby. The modest role statements below are architectural interpretations unless a patent paragraph is cited.

### L1: Negative Meniscus
nd = 1.84666, νd = 23.78. Glass: Unmatched (source nd=1.84666, vd=23.78; supplier and melt unverified). f = -209.5853 mm.
This negative meniscus is the high-index, low-Abbe front member of the bonded L1-L2 pair. Its opposite power to L2 supplies a first-order achromatizing opportunity; no supplier or measured residual chromatic correction is inferred.

### L2: Biconvex Positive
nd = 1.49700, νd = 81.61. Glass: Unmatched (source nd=1.49700, vd=81.61; supplier and melt unverified). f = +120.9032 mm.
The positive, high-Abbe member completes the front bonded pair and meets the patent's preferred low-dispersion role in G1. Its position correlates with a production LD designation. That correlation does not provide partial-dispersion coefficients.

### L3: Positive Meniscus
nd = 1.62299, νd = 58.15. Glass: Unmatched (source nd=1.62299, vd=58.15; supplier and melt unverified). f = +139.8826 mm.
The separate positive meniscus completes G1. Its nd meets condition (6), and its Abbe number lies within condition (5). The manufacturer diagram labels this production position AD, but the numerical example supplies no nC/nF/ng or anomalous-partial-dispersion value.

### L4f: Hybrid aspheric film (material unconfirmed)
nd = 1.51460, νd = 49.96. Glass: Unmatched (source nd=1.51460, vd=49.96; supplier and melt unverified). f = -374.7135 mm.
This 0.20 mm medium is on the object-facing side of L4. Its outer surface r6 is aspherical; the r7 interface remains spherical. The hybrid interpretation follows the explicit thin medium and matching manufacturer construction, without identifying a resin chemistry.

### L4: Negative Meniscus
nd = 1.80400, νd = 46.58. Glass: Unmatched (source nd=1.80400, vd=46.58; supplier and melt unverified). f = -21.0989 mm.
This strong negative meniscus is the substrate behind r6's film. Its rear r8 is the strongly curved boundary adjoining the 5.40 mm air gap; that gap constrains modeled semi-diameter and outer-field passage.

### L5: Biconcave Negative
nd = 1.83481, νd = 42.72. Glass: Unmatched (source nd=1.83481, vd=42.72; supplier and melt unverified). f = -25.0969 mm.
The biconcave negative substrate maintains the negative power of G2. It is separated from the hybrid by the published air gap and is not bonded to it.

### L6: Biconvex Positive
nd = 1.84666, νd = 23.78. Glass: Unmatched (source nd=1.84666, vd=23.78; supplier and melt unverified). f = +16.7286 mm.
This positive substrate balances the negative lenses within G2. Its high index and low Abbe number make the local chromatic power balance distinct from the higher-Abbe negative members. No isolated aberration-control coefficient is assigned.

### L7: Biconcave Negative
nd = 1.88300, νd = 40.78. Glass: Unmatched (source nd=1.88300, vd=40.78; supplier and melt unverified). f = -22.3737 mm.
The final biconcave negative substrate completes G2 before the variable gap to the stop. Its medium and two radii are retained exactly; r12-r13's adjacent 0.42 mm air space is a tight geometric constraint.

### L8: Negative Meniscus
nd = 1.80400, νd = 46.58. Glass: Unmatched (source nd=1.80400, vd=46.58; supplier and melt unverified). f = -93.5116 mm.
The negative front member of the G3 bonded pair is source lens 231 (paragraph 0082). It is followed immediately by the positive L9 at the shared r17 interface.

### L9: Biconvex Positive
nd = 1.58913, νd = 61.18. Glass: Unmatched (source nd=1.58913, vd=61.18; supplier and melt unverified). f = +38.2366 mm.
The positive bonded partner is source lens 232. Together L8-L9 constitute one component, not an air-separated pair. Standalone element powers should not be confused with the net cemented-component power.

### L10: Positive Meniscus
nd = 1.48749, νd = 70.21. Glass: Unmatched (source nd=1.48749, vd=70.21; supplier and melt unverified). f = +66.8668 mm.
This positive meniscus is source lens 233, with the larger radius on the image side as described in paragraph 0082. It is one of the three positive substrates central to the patent's G3 architecture.

### L11: Positive Meniscus
nd = 1.49700, νd = 81.61. Glass: Unmatched (source nd=1.49700, vd=81.61; supplier and melt unverified). f = +49.7084 mm.
This positive high-Abbe substrate is source lens 234 and meets condition (4), vd >= 80. Its position matches a production LD element; no secondary-spectrum or APO claim follows from nd/vd alone.

### L12: Biconcave Negative
nd = 1.83400, νd = 37.17. Glass: Unmatched (source nd=1.83400, vd=37.17; supplier and melt unverified). f = -29.2111 mm.
The biconcave negative rear member is source lens 235. Its r23 entry and the preceding thin air gap limit the modeled full-field peripheral bundle. The final variable gap separates G3 and G4.

### L13f: Hybrid aspheric film (material unconfirmed)
nd = 1.51460, νd = 49.96. Glass: Unmatched (source nd=1.51460, vd=49.96; supplier and melt unverified). f = +67340.6619 mm.
This second 0.20 mm film begins at r25. The r25 asphere and spherical r26 share the same paraxial radius, so the film has a very weak standalone paraxial power while its higher-order sag departure is substantial.

### L13: Biconvex Positive
nd = 1.48749, νd = 70.21. Glass: Unmatched (source nd=1.48749, vd=70.21; supplier and melt unverified). f = +42.9163 mm.
The positive substrate bonded to the r25 film begins the rear group. Film and substrate remain separately indexed optical media with one shared boundary, rather than one asphere pasted onto an unmodified glass element.

### L14: Biconvex Positive
nd = 1.48749, νd = 70.21. Glass: Unmatched (source nd=1.48749, vd=70.21; supplier and melt unverified). f = +54.2126 mm.
This positive substrate has a very weakly curved object surface and a stronger image-side curvature. Its front is finite (8369.5957 mm), not a plane; the native table value is retained.

### L15: Biconcave Negative
nd = 1.80400, νd = 46.58. Glass: Unmatched (source nd=1.80400, vd=46.58; supplier and melt unverified). f = -22.4617 mm.
The negative member of the final bonded pair has a high index and a shared r31 interface with L16. The pair's combined power is computed separately in the dossier.

### L16: Positive Meniscus
nd = 1.54072, νd = 47.23. Glass: Unmatched (source nd=1.54072, vd=47.23; supplier and melt unverified). f = +42.3977 mm.
The positive final member exits at r32. The source D32 distance is measured from this last refracting vertex to the image. There is no separately specified cover stack to insert or air-equivalent plate conversion to perform.

## Glass Identification and Selection

The selected example explicitly defines d-line nd and νd in paragraph 0092. Every distinct source pair was compared with actual shared manufacturer-catalog bytes from HOYA, OHARA, SCHOTT, SUMITA, HIKARI and CDGM. The exact catalog hashes, retained nearest rows and residuals appear in the evidence file. The initial snapshots were freshly parsed for this lens. The source-first independent review additionally retrieved primary catalogs from all six makers; historical and current editions differ, so the table provides comparison leads rather than an exhaustive current nearest-rank certificate. OHARA legacy, S- and L-prefix distinctions were preserved.

The catalog comparison candidates below are only audit leads. They are not assigned as production materials in the data file, whose explicit unresolved labels keep all non-air media on the current engine's Abbe approximation. The two film entries do not identify a commercial resin. Source coordinates are never replaced by these candidates.

| Native nd / νd | Model entries | Comparison catalog coordinate | Δnd | Δνd |
|---|---|---|---:|---:|
| 1.48749 / 70.21 | L10/L13/L14 | OHARA FSL5 | +0.000000 | +0.000 |
| 1.49700 / 81.61 | L2/L11 | HOYA FCD1 | +0.000000 | +0.000 |
| 1.51460 / 49.96 | L4f/L13f | SUMITA KF8 | -0.003420 | +0.940 |
| 1.54072 / 47.23 | L16 | CDGM H-QF8 | +0.000000 | +0.000 |
| 1.58913 / 61.18 | L9 | OHARA BAL35 | +0.000000 | +0.002 |
| 1.62299 / 58.15 | L3 | OHARA BSM15 | +0.000002 | -0.007 |
| 1.80400 / 46.58 | L4/L8/L15 | OHARA S-LAH65V | -0.000001 | +0.003 |
| 1.83400 / 37.17 | L12 | OHARA S-LAH60MQ | -0.000001 | +0.002 |
| 1.83481 / 42.72 | L5 | HOYA TAFD5G | +0.000000 | +0.000 |
| 1.84666 / 23.78 | L1/L6 | HOYA FDS90-SG | +0.000000 | +0.000 |
| 1.88300 / 40.78 | L7 | OHARA LAH58 | -0.000003 | -0.001 |

The dispersion contrast in L1-L2 and the high-Abbe positive L11 are consistent with a conventional chromatic-balancing strategy. This is an architectural inference supported by the source's material conditions, not a computed production color-correction guarantee. No nC, nF, ng or ΔPgF is fabricated; anomalous-partial-dispersion and APO performance remain unverified. The surface-by-surface d-line Petzval sum is +0.0011363224 mm⁻¹. That first-order sum is not the exact sagittal or tangential image shell.

## Focus Mechanism and Zoom Motion

The focus disposition is NO_INTERNAL_RECONSTRUCTION. Paragraph 0083 describes G2 moving toward the object to focus, but publishes no quantitative close-focus displacement, object distance or near-state spacings. The table does not explicitly identify the object conjugate. An infinity-conjugate convention is adopted for this reconstruction because the independently computed BFD closely matches D32 at all three states; this is an inference and must not be called a published infinity label.

The schema's two focus slots contain identical source gaps. The marketed closeFocusM of 0.45 m is metadata for the interface. Moving that slider does not supply a physically focused near prescription, and no finiteConjugates certificate is authored. Native finite-object probes intentionally leave the internal optics fixed and are diagnostic only.

The published zoom spacing schedule is preserved:

| Gap (mm) | Wide | Intermediate | Tele |
|---|---:|---:|---:|
| D5 | 1.766 | 30.152 | 59.613 |
| D14 | 25.227 | 11.984 | 1.411 |
| D24 | 7.782 | 3.768 | 1.982 |
| D32 | 39.583 | 67.213 | 89.384 |

D5 widens while D14 and D24 narrow. In a fixed-image-plane reference, the first vertices of G1/G2/G3/G4 move objectward by 78.032/20.185/44.001/49.801 mm between wide and tele. No reversal is resolved by the three published stations. This is calculated from all table gaps and final image distances, not an independently measured barrel-motion law.

Continuous piecewise-linear interpolation is retained, as required by the current schema. It is not the real cam law and is not forced parfocal. At normalized zoomT=0.25 the computed BFD minus the authored image gap is -4.057276 mm; at 0.75 it is +11.080165 mm. The nine-point probe reaches +14.195750 mm at 0.875. These are sampled interpolation diagnostics, not extrema proven over a continuum. The source stations themselves retain their rounded source image gaps.

## Aspherical Surfaces

The source equation is

x = (H²/r) / [1 + sqrt(1 - A(H/r)²)] + A4 H⁴ + A6 H⁶ + A8 H⁸ + A10 H¹⁰.

Source A=1 corresponds to conventional K=A-1=0. The displayed equation, rather than an informal conic name, governs the conversion. H and x are in mm, and each Ap has units mm^(1-p). There is no scale conversion and no odd-order term in this example.

| Model surface | Physical association | K | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|
| 6A | L4f outer film surface | 0 | 6.08226e-06 | 3.27658e-09 | -8.68205e-11 | 4.65488e-13 |
| 25A | L13f outer film surface | 0 | -4.66282e-05 | 6.30079e-09 | -1.16447e-11 | -4.36431e-14 |

At the inferred modeled semi-diameters, r6A at 13.5 mm has +0.219667 mm polynomial departure from its spherical base; r25A at 10.5 mm has -0.560756 mm departure. These are modeled-aperture evaluations, not published aperture measurements. Positive departure at r6 increases axial sag relative to its base; negative departure at r25 reduces it. Neither sign alone proves a particular system aberration is corrected.

The r25 modeled aperture is retained before the full-profile slope turns over. Both 0.20 mm films remain positive in thickness over their common physical bands. No generic source repair or geometry exception is used to accommodate them.

## Conditional Expressions

The first three published ratios are reproduced independently from the unchanged prescription:

| Condition | Required interval | Calculated ratio | Printed summary |
|---|---|---:|---:|
| f1/ft | 0.35 to 0.45 | 0.39476118 | 0.3948 |
| abs(f2)/fw | 0.5 to 0.8 | 0.68969541 | 0.6897 |
| f3/ft | 0.15 to 0.3 | 0.18097987 | 0.1810 |

The preferred upper limit 0.25 on f3/ft also holds. L11 supplies the positive G3 lens with νd >= 80 required by condition (4). Positive G1 substrates satisfy condition (5)'s 55 <= νd <= 95 range, and L3 satisfies condition (6)'s nd >= 1.55. This evaluates the stated conditions; it does not establish all qualitative performance outcomes discussed around them.

## Verification Summary and Limitations

| Source station | Computed EFL (mm) | Printed EFL (mm) | Computed BFD (mm) | Printed D32 (mm) |
|---|---:|---:|---:|---:|
| Wide | 18.432340 | 18.43 | 39.582603 | 39.583 |
| Intermediate | 57.803991 | 57.80 | 67.215076 | 67.213 |
| Tele | 241.839642 | 241.83 | 89.389024 | 89.384 |

Reduced-angle ABCD and independently implemented scalar refraction agree. The final parsed candidate reproduces every table radius, distance and medium under the declared air/plane conventions. Standalone element/group powers, Petzval, pupils and movements are recomputed from that final file.

Physical iris diameter is unpublished. The current from-nominal-fno model derives station radii 7.634617/7.630823/7.627753 mm from the source F-numbers. Between them it linearly interpolates. Independent exact-Snell calibration agrees with the unchanged current engine. Calibration agreement is not proof of a physical iris mechanism. A fixed-iris diagnostic is also retained; it is not silently used as the main candidate.

All clear semi-diameters are inferred. The set combines physically stop-aimed source/reference-field rays, physically reached 14.5 mm corner chiefs, the source/production optical sections and source-constrained positive thickness/gap geometry. Uniform 10% padding is not possible at every front boundary without violating the printed center thickness. The model retains explicit full-field peripheral losses rather than enlarging surfaces past a valid shape. The minimum sampled edge thickness is 0.075794 mm; the narrowest margin against the default 0.90 gap-intrusion policy is 0.010369 mm. Actual current production render diagnostics show zero hidden trim at all five tested states.

The physical ray checks cover five zoom coordinates: 0, 0.25, 0.5, 0.75 and 1. Source half-fields are used at source stations; intermediate probes use atan(14.5/computed EFL) as a declared reference. The meridional core includes 0 and 0.6 field with stop fractions through ±0.83. Forty native skew-core and fifty f/22 rays pass. Independent and native exact tracers agree on 113 physically successful meridional rays. Full-field outer-pupil misses/clips remain in the record; no loss-free full pupil or production vignetting pattern is certified.

The angular-field/plot-height mapping remains a source-reference limitation. At the printed half-fields 38.2/14.1/3.45°, exact chief intercepts are 13.565859/15.063565/14.900105 mm, while the plots label a 14.5 mm height reference. These have not been forced into a single exact-chief assertion. Independently and natively aimed physical chiefs reach 14.5 mm at 40.000373/13.631859/3.361361°, without clipping. The original numerical table is unchanged, and the published aberration curves are not claimed reproduced.

The current bounded UI field helper cannot return the wide 14.5 mm corner even though both physical solvers reach it. Current UI estimated fields and EP-offset launch rays form a distinct diagnostic set and may clip. These unavailable/failing observations are preserved separately from source-field physical containment. Passing source geometry is not a claim of complete UI field equivalence.

Actual unchanged current buildLens/validateLensData, exact tracing, dispersion initialization and production shape/trim modules ran under Node 24.19.0 against main 709dda72a0ddead8ee77b8306347429031f8b379. Imported source bytes are hash-verified. This is targeted execution, not a TypeScript typecheck, formatter/lint run, corpus test, full production build or mounted-browser test. Those remain integration checks. The source-first independent audit additionally checked nine zoom samples, 162 physical core/skew rays and nine directly solved 14.5 mm chief intercepts. Dense 1001-point radial checks reproduced the minimum edge thickness and gap-policy margin above. These remain finite samples. The independent audit is complete within the disclosed source-faithful reconstruction scope; repository integration remains INTEGRATION_PENDING.

## Sources and References

- [Selected original JP2008003195A publication](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP002008003195A): complete original PDF included in the dossier. PDF14-16 contain Example2; PDF18 has Figure5 and plots6-8.
- [Tamron A18 official model archive](https://www.tamron.com/jp/consumer/lenses/data/af-lens/a18.html): production identity, counts, mounts, aperture, focus and release specifications.
- [Tamron Japanese A18 launch brochure](https://w5.fuji.com.tw/pdf/a18.pdf): model-specific construction on page2 and planned launch date on page1.
- [Tamron English A18 launch brochure](https://cdn.thomasnet.com/ccp/20083835/136652.pdf): construction and production specifications on page2; promotional timeline differs from the archive release year.
- Manufacturer glass catalog snapshots and exact residual excerpts are identified in the accompanying evidence file. They support coordinate comparison only.


Current frozen-candidate results: 2005 dense geometry states, zero geometry failures or image-plane inconsistency flags. 5555 default UI rays, 25 clips, all remaining clips on exterior surfaces; sphere-root proofs distinguish out-of-rim misses from in-aperture intersection failures. Maximum engine image-plane offset 0.05433827550615433mm (source/runtime spectral conventions retained). Full/reference and off-node outcomes are in VALIDATION_SUMMARY.json; only returned bands are trustworthy.
