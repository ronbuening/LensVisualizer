# Audit Log — Olympus Zuiko MC Auto-W 28mm f/2.8

Patent: US 4,352,544, sole example / claim 1

## Earlier source review and construction

The complete patent and repeated claim table established twelve spherical radii, eleven intervals and six n/ν pairs, normalized to f = 1 and scaled uniformly by 28. The nominal-f residual of −0.000933597711 normalized units was retained. No printed iris location, clear diameter, terminal image gap, Seidel table or finite-focus prescription was found. Figure 2 provides the contextual d/F/g/C wavelength convention and distinguishes the 27.8° coma plot from the 37.5° design half-field.

The 1985 catalog supports a probable 6/6 production association. The undated leaflet says 7/6 in all four languages; the 0181 MC leaflet says 6/6 but illustrates a conflicting Gauss-like section. Neither a typo nor an undocumented production revision was inferred. The MW2828 parts sheet, imprint 1181, supplies mechanical context only. The 32 mm barrel length and 49 mm filter do not determine optical track or clear apertures.

Initial R7–R10 semi-diameters of 7.5 mm produced a genuine R8–R9 gap-sag fraction of 1.15176766. Minimal outward 0.01 mm nominal axial-beam floors gave R7 = 6.68 mm, R8 = 6.64 mm and shared L5 rims of 6.85 mm, reducing the fraction to 0.89993554 without an override. R4 retains the reduced powered arc below the mechanical shoulder. Source radii, thicknesses and glasses were unchanged; the tapered L4 rim was included in physical containment checks.

An early rear-group calculation omitted half the stop interval when removing the iris row. Restoring the full interval gave +24.491002697 mm; the complete-system calculation was unaffected. Earlier unspaced patent metadata was normalized to US 4352544 A. Separate exact-surface and paraxial calculations agreed, while printed-precision interval overlap remained an enclosure rather than proof of hidden exact source values.

Earlier infinity ray and material checks found ordinary clipping with no unexplained failures. The nominal marginal beam passes axially, while the larger paraxial viewer pupil is partially iris-clipped at f/2.8. These are different launch conventions. Gaussian-plane and best-axial MTF remain distinct; convergence through 50 lp/mm does not authenticate production performance. The original focus model had no movement and offered no finite-distance MTF.

## 2026-10-22 — Deployment validation and fix-up pass

The sole-example table (PDF page 4, columns 1–2) and claim repeat (PDF page 5, columns 3–4) were re-read. All twelve radii, eleven physical intervals and six n/ν pairs match after ×28 scaling, allowing only floating-point representation below 1e-13 mm. The 0.091 normalized d6 remains split into two 1.274 mm intervals around the inferred midpoint stop. All surfaces are spherical; no aspheric coefficients occur. No transcription mismatch or source correction was found.

Patent f = 1 implies a nominal 28 mm scale; the unchanged literal model EFL is 27.973859264088 mm, normalized 0.999066402289. Infinity BFD is 36.701321864014 mm and first-to-last vertex span is 37.828 mm; BFD is derived, not printed. The front/rear component EFLs are −32.454727 / +24.491003 mm, ratios −1.160180531 / +0.875496029 versus the printed −1.161 / +0.88. Total infinity track/EFL is 2.664248832 versus the printed 2.66. Nominal aperture remains f/2.8; the inferred marginal-calibrated stop radius remains 6.762649472961 mm, with paraxial stop-limited f-number 2.665284875.

The MC leaflet explicitly names ZUIKO MC AUTO-W, lists 6 elements / 6 groups, a straight helicoid and 0.3 m minimum focus. The 1985 catalog abbreviates the same specification to Zuiko 28mm F2.8; the full MC leaflet name is retained in repository caps style. Neither source describes floating elements for this lens. Its MC section is Gauss-like and conflicts with the retrofocus patent; the undated 7/6 leaflet's section is more consistent in overall retrofocus form but cannot establish six-singlet identity. Figure 1's L4/L5 rims are about 10% taller than the retained model interpretation. They were not widened, as the nominal axial-beam floors already pass and larger guessed rims conflict with the thin neighboring gap.

Unit focus is inferred from the maker's straight-helicoid specification. For the air-space ray matrix between first and last vertices, A = 1.311986362608545, B = 27.428177214772153 mm, C = −0.035747659647511484 /mm and D = 0.014868185166125685. With rear gap q and object-to-film distance 300 mm, solve (A + qC)(300 − 37.828 − q) + B + qD = 0. The physical root is q = 40.2338651096151 mm: extension 3.5325432456011 mm and first-vertex object distance 221.938134890385 mm. Only the rear gap varies; all powered intervals, source cells and semi-diameters remain fixed. This calculated state is not marked as source-published and does not certify finite-distance MTF.

| Field | Before | After |
|---|---|---|
| name | OLYMPUS ZUIKO 28mm f/2.8 (Six-singlet patent) | OLYMPUS ZUIKO MC AUTO-W 28mm f/2.8 |
| subtitle | US4352544A sole embodiment; probable 1985 6/6 catalog target, not all-version identity | US 4,352,544, Sole Example — qualified production correlation |
| patentNumber | US 4352544 A | US 4,352,544 |
| catalog.specs | Probable 1985 catalog 6/6 Zuiko 28 mm f/2.8 association, not authenticated unchanged factory coordinates; Undated maker leaflet says 7/6; the separate 0181 MC leaflet says 6/6 but has an inconsistent section drawing. No typo or revision is inferred; Uniform conditional 28 mm scaling of normalized source f=1; literal computed EFL is not renormalized; Manufacturer 75 degree full field and 0.3 m minimum focus are retained; finite optical motion is not recovered; 32 mm mechanical barrel length and 49 mm filter are not optical track or clear apertures | 6 ELEMENTS / 6 GROUPS; DESIGN f = 27.97 mm; DESIGN F/2.80; ALL SPHERICAL |
| visible | false | true |
| L1–L6 labels | Glass element 1–6 | Element 1–6, matching neighboring Olympus entries |
| L1–L6 glass | Unidentified historical melt; catalog equivalents not adopted | Unidentified historical melt; no catalog substitution |
| Surface 12 image gap | fixed d = 36.701321864014034 mm | d omitted; gaps["12"] named BF, values [[36.701321864014034, 40.2338651096151]] mm |
| focus.description | NO_INTERNAL_RECONSTRUCTION. Manufacturer minimum focus 0.3 m and straight-helicoid prose are metadata, not an identified internal component movement law. Only the declared infinity baseline is modeled. | Unit focus with a straight helicoid; the whole lens moves toward the object to focus at 0.3 m. Close-focus travel is calculated from the infinity prescription. |
| Header | infinity-only MFD caveat and unspaced patent number | normalized patent number; straight-helicoid unit-focus inference and explicit film-plane conjugate calculation; all source, scale, stop, rim and source-conflict facts retained |
| L1 role | Positive front meniscus in the net-divergent front pair. | Positive front meniscus |
| L2 role | Negative meniscus; source drawing has a reduced rear powered cap below the outer mechanical shoulder. | Negative front meniscus |
| L3 role | Strong positive singlet at the front of the net-convergent rear component. | Positive rear-component singlet |
| L4 role | Biconcave negative singlet after the inferred iris. | Negative singlet after the iris |
| L5 role | Positive meniscus, air-spaced from both neighbors. | Air-spaced positive meniscus |
| L6 role | Rear biconvex positive singlet. | Rear positive singlet |

The analysis title and patent metadata now match the data. Its focus section changes from infinity-only to the qualified unit-focus calculation. The former first-order checks heading now describes optical properties. Public source citations, optical values, spectral limitations, iris/pupil distinctions and MTF values are retained; process terminology, hidden-status text, helper identifiers, ray/segment tallies and file-production narrative are removed. The earlier audit is condensed to source findings, rejected geometry and substantive calculation decisions.

Open: production-to-patent identity remains probable; the 7/6 text and MC illustration conflict remain unresolved. The scale, stop and clear apertures remain inferred, and historical melt spectra remain unidentified. Larger viewer-pupil axial transmission is incomplete. Close travel is a paraxial unit-focus calculation, not maker-published spacing or certified finite-distance MTF; interpolation does not reproduce a measured helicoid law.

## 2026-10-22 — Semi-diameter pass against the patent figure

Source: the local `US4352544A.pdf`, Fig. 1, measured on the front-page copy (PDF page 1). The formal sheet copy (PDF page 2) was used as a cross-check. Both are 1-bit scans at 72 ppi with page coordinates 2320 × 3408 px, and the front-page copy was profiled at 288 dpi. The dash-dot axis is at page y ≈ 2122.5 px (72 dpi scale). Heights are line centres averaged above and below the axis, because the drawn axis sits about 4 px off the element centres.

Scale: the r1 to r12 vertex crossings span 884 px for the 37.828 mm first-to-last-vertex distance, giving 23.37 px/mm. The four elements already judged to match the figure give 23.3 to 23.6 px/mm: L1 393 px for 16.7 mm, L2 front 341 px for 14.5 mm, L3 233 px for 10 mm and L6 224 px for 9.5 mm. The heights below use 23.45 px/mm. The interior axial spacings are drawn only approximately; L3 is drawn about 15% thinner than 8.4 mm. The radial scale was therefore taken from the four matching rims.

| Surface | Before (mm) | Figure (mm) | After (mm) | Evidence |
|---|---|---|---|---|
| 1, 2 (L1) | 16.7 | 16.8 | 16.7 | within noise |
| 3 (L2 front) | 14.5 | 14.5 | 14.5 | agrees |
| 4 (L2 rear arc) | 9.7 | ≈9.7 at the step | 9.7 | agrees; outer shoulder is mechanical |
| 5, 6 (L3) | 10 | 9.9 | 10 | agrees |
| 7 (L4 front) | 6.68 | 6.5 where the curve meets the chamfer | 6.68 | axial-beam floor 6.68 governs |
| 8 (L4 rear) | 6.64 | 6.6 where the curve meets the chamfer | 6.64 | agrees |
| 9, 10 (L5) | 6.85 | 7.5, square-cut | 7.5 | figure; raised 9.5% |
| 11, 12 (L6) | 9.5 | 9.6 | 9.5 | agrees |

L4 is drawn on a 7.5 mm blank with chamfers on both corners. Its two curved faces end where the chamfers begin, at about 6.5 mm (r7) and 6.6 mm (r8). The blank above that is mechanical, so the stored axial-beam floors already follow the optical extent. The catalog's "beveled lens edges" remark is consistent with this. L5 is drawn as a square-cut element at the same 7.5 mm height as the L4 blank, in both copies of Fig. 1. The L5/L3 height ratio is 0.755 on page 1 and 0.751 on page 2.

At the prescription's curvatures the r8 and r9 faces meet at h ≈ 6.995 mm, where their combined sags equal the 1.456 mm gap. L4 therefore cannot reach the drawn 7.5 mm blank as an optical surface, and the figure draws r9 flatter than R = −43.624 mm implies. With L4 retained, the shared r8/r9 band stays at 6.64 mm. The gap-sag fraction therefore stays 0.8999 under the 0.9 default, and no override is needed. L5's front corner at 7.5 mm lies 0.86 mm outside L4's rim and 0.004 mm behind L4's rear corner, so the outlines do not overlap. At 7.5 mm the L5 edge thickness is 0.91 mm, and the r10/r11 gap opens outward.

Clearance results: the surface validator reports no errors with the new values. The image-circle floor reports nothing undersized. Traced corner coverage is 100% (38.2°, 21.65 mm of 21.65 mm, unclipped). The real-ray trace at Y = 21.63 mm shows no axial or chief-ray clipping at infinity or at 0.3 m, and axial marginal heights are 6.66 mm at r9 and 6.85 mm at r10. Engine half-field is unchanged at 35.46°, the f-number at f/2.8 and the stop radius at 6.763 mm. Geometric transmission rises slightly at small fields (98.4% to 99.5% at 5.9° to 14.7°). It is unchanged at 35.3° (95.3%) and 38.2° (85.4%), because L4 remains the limiting middle rim. The live render at infinity and at 0.3 m shows L5's corner standing just behind and outside L4's rear rim, as Fig. 1 draws it.

Maker diagrams: the 1985 catalog pages carry no section drawing. The undated AUTO-W leaflet's section is retrofocus, with a stepped-shoulder L2 like Fig. 1 and rear elements drawn roughly as wide as L3. It is a 72 ppi raster and is too coarse to count the rear elements or to measure them. The MC leaflet's section remains Gauss-like. Neither marks special glass or aspheres. The patent figure governs.

Open: the L4 chamfered blank is not drawn by the renderer, so L4 appears smaller than L5. That is the optical extent, not a defect.

## 2026-10-22 — Glass classification and metadata pass

Source: US 4,352,544, sole numerical embodiment / claim 1. All six printed nd/νd pairs are retained. Catalog-minus-patent residuals below use the catalog row values; the adopted labels select dispersion curves without identifying production suppliers or melts.

| Element | Glass label old → new | Vendor catalog nd / νd | Δnd / Δνd |
|---|---|---|---|
| L1 | Unidentified historical melt → S-LAM52 (OHARA coordinate equivalent; supplier unconfirmed) | OHARA S-LAM52: 1.720000 / 43.689812 | 0 / −0.010188 |
| L2 | Unidentified historical melt → S-BSM16 (OHARA coordinate equivalent; supplier unconfirmed) | OHARA S-BSM16: 1.620411 / 60.289582 | +0.000001 / +0.019582 |
| L3 | Unidentified historical melt → S-LAH63 (OHARA coordinate equivalent; supplier unconfirmed) | OHARA S-LAH63: 1.804398 / 39.586200 | −0.000002 / −0.033800 |
| L4 | Unidentified historical melt → FD110 (HOYA coordinate equivalent; supplier unconfirmed) | HOYA FD110: 1.784720 / 25.720000 | 0 / +0.010000 |
| L5 | Unidentified historical melt → S-BSM16 (OHARA coordinate equivalent; supplier unconfirmed) | OHARA S-BSM16: 1.620411 / 60.289582 | +0.000001 / +0.019582 |
| L6 | Unidentified historical melt → BSM4 (OHARA coordinate equivalent; supplier unconfirmed) | OHARA BSM4: 1.612716 / 58.749129 | −0.000004 / −0.000871 |

L6 uses the newly added discontinued OHARA BSM4 formula-1 row from `OHARA_260701.AGF`, which rounds to the printed 1.61272 / 58.75 pair. The former BACD4 comparison, 1.61272 / 58.58, has residuals 0 / −0.17 and is rejected by the Δνd ≤ 0.1 criterion. No elements remain unmatched. Catalog dispersion coverage is resolved for L1–L6; the earlier production-identity and historical-melt uncertainties remain open. The earlier no-substitution table row records the prior state and is superseded by these labels.

The specification line changes from `DESIGN f = 27.97 mm` to `DESIGN f = 28.00 mm`: DESIGN f states the patent's nominal f = 1 scaled ×28, consistent with the existing `catalog.focalLengthMm.design = 28`. The traced EFL remains 27.973859264 mm (27.974 mm rounded). The prescription is not renormalized; source radii, thicknesses and printed nd/νd are unchanged. The analysis retains that distinction and now identifies each adopted catalog equivalent while leaving production melts unconfirmed.

Element `focalLengthMm` values were added in this pass: thick-lens focal lengths in air computed from each element's printed radii, thickness and nd (the same standalone values the analysis quotes), so the element inspector shows them.
