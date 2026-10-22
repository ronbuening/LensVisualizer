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
