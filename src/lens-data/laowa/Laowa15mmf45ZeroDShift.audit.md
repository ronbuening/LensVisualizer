# CN110955036B E1 source/static audit

Status: UNFINISHED, hidden, zero ready-count increase. Baseline9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 commits. Original packet preserved. No common-engine changes, no install work, no native/MTF/typecheck/full-test/build execution.

Original physical pages5–7 visually inspected in this task. All29 surface records, stop S15, D4/D14/D29 endpoint rows, four K/A4–A12 rows, d-line definition and literal image row verified against retained images. E2 not mixed. Maker section inspected; probable family only.

Rebuilder maps each of the17 glass intervals to one element and preserves all literal radii, thicknesses, indices, Abbe values, aspheres and source gap endpoints. Gaps are authored once; fixed surfaces have d. No phantom plate. Glass IDs deliberately unmatched. Native stop will derive from nominal4.6; no printed iris dimension exists.

Caps S1–S29: [20, 19, 16, 16, 11, 11, 8.5, 8.5, 8.5, 8, 8, 8, 7, 7, None, 6.5, 6.5, 6.5, 6.5, 7, 7, 7, 8.5, 8.5, 9, 9, 9, 9, 9]. Inferred, not measured or traced clear apertures; no claim of off-axis sufficiency. Qualitative front-large/rear-small section shape guided the initial caps, not a dimensional manufacturer measurement. Initial failed hypothesis S2=20mm violated sampled rim-slope bound. Only S2 reduced to19mm; prescription unchanged. Sampled static geometry checks all glass thicknesses and adjacent air gaps excluding the nonmaterial stop at infinity and finite states, using90% air-gap allowance. Analytic/native checks remain pending;257 samples do not prove global extrema.

Local baseline publication/Laowa15Shift alias screen found no collision before authoring. Source dedup.json retains prior1095-file scaled first-six screen. Opaque/private archives not universally excluded.

See static_report.json for scalar results and PENDING_CHECKS.txt for release gates. This is an unfinished custody checkpoint, not a qualified delivery package.

## Native preflight metadata derivative

Publication display normalized to CN 110955036 B and inventor to canonical Dayong Li, following baseline LaowaArgus45mmf095FF precedent. Source Chinese identity remains in original evidence and analysis. Original literal assignee retained unchanged as instructed. Optical object excluding source is byte-equivalent under canonical JSON; no optical, cap, focus, iris, field or plane change.

## Bounded native checkpoint v2: not delivery-qualified

Native geometry passed using unchanged provisional caps and default90% gap-sag allowance. No rim-angle exception, cuts, extensions or hidden trim. Both printed endpoint layouts have zero rendered trim. Source plane z145.8582mm at infinity and145.8509mm finite retained. EFL15.490484956350366mm; derived stop radius5.727628424923961mm. The official aperture census at literalF4.6 returns4.599999995547843, limiter STO, diagnosis ok. Adjacent full-cap sampled iris-plane clearance remains positive: S14→STO4.7930/4.4451mm and STO→S16 at least1.5000mm.

Bounded d-line geometric MTF, source infinity plane: axial converged through40lp/mm at32grid,812valid rays,0blocked/failed/unaimed. Axial MTF at10/20/30/40lp/mm is0.986822/0.947997/0.885604/0.802952. Best-axial diagnostic shifts0.044465385mm and gives0.998002/0.992029/0.982142/0.968441; this diagnostic does not move the authored plane. Source-plane residual remains−0.000933853425mm.

Coverage HOLD: provisional caps' modeled edge is19.449022mm at51.282835°, with chief edge17.999200mm at49.095091°. Both the real36×24mm corner21.633308mm and source ymax31.3mm return outside-modeled-field. Exact source63.66° pupil probe returns unavailable. This is a limitation of the unfinished aperture hypothesis, not evidence disproving the source or retail lens. The in-memory62.6mm image-circle value used only to normalize diagnostic targets to source ymax was never authored into the model and is not coverage proof. Caps were not enlarged blindly; source/ray-backed rim reconstruction remains necessary.

Broadband/CDF/photopic unavailable because Vd81.61 glasses lack partial-dispersion data. No fabricated glass identity or dispersion. Diffraction MTF, native finite-conjugate certification, retail20cm, shift mechanics and retail image circle remain unvalidated. No full suite/build/typecheck run. No qualification or ready-count increase. Only one native process at a time, Node heap cap1536MiB; all native work stopped after bounded findings.

## Bounded unshifted infinity follow-up v3: integration pending

The v2 field-edge HOLD was partly caused by provisional apertures, not a proof of the literal prescription's coverage. Native checked rays identify S1 as the first limiter: at51° the chief meets radius20.823566mm outside the original20mm cap. The only adopted geometry change is inferred S1 semi-diameter20→23mm. No radii, thicknesses, indices, Abbe values, aspheres, focus gaps, stop location/nominalF4.6, printed plane or common engine changed. This larger first face is qualitatively supported by original Figure1 (physical page10), whose front face is much taller than the following groups; the figure was not treated as a dimensioned mechanical drawing. Original failedS2=20mm rim-slope hypothesis remains retained. Default90% gap-sag and default rim angle remain unchanged.

Both printed gap states pass native geometry with zero render trim. Official aperture census remains stated4.6/traced4.5999999955, limiterSTO. No cuts, extensions, iris override or re-tuned focus. Native measured chief heights at the printed infinity plane: half-frame10.816653377mm at34.877613926° and corner21.633214563mm at54.249665384°, versus requested actual36×24mm corner21.633307653mm. The height residual is0.00009309mm. Source half-angle63.66°, source ymax31.3mm and the actual full-frame corner are separate quantities.

At axis/half/corner, reference d-line geometric and diffraction MTF converge through40lp/mm. Axis geometric/diffraction uses32grid; half geometric64 and diffraction32; corner both require256grid. Corner geometric maxDelta0.00169797 and diffraction0.00184596. Corner9600valid/41868blocked/0failed/0unaimed/0unresolved-in-beam rays. Failed/unconverged64 and128grid cases are retained. All results use the printed image plane, no authored best-focus shift. Earlier best-axial values remain diagnostic only.

Native vignetting/Rimmer simulation at128grid: axis1/1, half-frame pupil-transmission0.868910953 and relative illumination0.791165553, corner pupil-transmission0.185851691 and relative illumination0.117370008. At64grid the corresponding half/corner relative illuminations are0.789498251/0.118997013; no failed or unaimed rays or Rimmer unavailable reason in either run. These are calculated values for inferred clear apertures, not measured retail irradiance, measured coatings or manufactured barrel vignetting. Strong modeled corner falloff is disclosed, not corrected by inventing source dimensions.

The updated model's API edge is23.596359mm at56.622013°, with chief edge22.130861mm at54.875675°. It does NOT establish source31.3mm or shift coverage. Source63.66° still lacks a standard chief/pupil solve. Additional nonauthored cap probes show sequential limitations: S3 radius16.4421mm exceeds16mm at56°; at58° S2 requires19.31435mm, S5 requires11.56352mm and S7 requires8.59642mm. A diagnostic S2=19.38mm (still default-slope-valid), S1=28mm/S3=19mm probe lets unchecked rays/root searches reach59°/25.799054mm and60°/26.807235mm, but those rays need S2 radii19.537866/19.750650mm exceeding that cap and the default spherical rim limit of approximately19.38258mm. The standard chief solve and intersection accessibility depend on cap search bounds; an API failure is not proof of an impossible optical source. No S2 rim-angle exception has enough dimensional evidence here. These broader cap probes were NOT adopted. Source-field and shifted-use qualifications remain HOLD.

Diagnostic image-circle normalization (62.6mm for source targets,43.266615mm for actual-frame targets) was confined to in-memory copies. No image-circle, shift mechanism or format-coverage metadata has been added merely from normalization. The model stays hidden. A future explicitly unshifted infinity/full-frame qualification may be useful after independent review and aggregate gates. Broadband remains blocked by missing partial dispersion forVd81.61; native finite performance/conjugate certification, retail20cm, retailF4.5, factory-prescription identity and shift mechanics are not established. No full suite/build/typecheck executed. No ready-count increase. Exclusive native slot released after the bounded follow-up.

## 2026-11-10 — Deployment validation

Independent check against CN 110955036 B Embodiment 1 (PDF pp. 5–7 page images): 29 surfaces (R, d, nd, νd), the
stop, five cemented interfaces, four aspheres (K, A4–A12) and three variable gaps at both states agree. Engine EFL
15.4905 (printed 15.4908), F/4.6, BF 51.762 (printed 51.763); conditions (1)–(4) reproduce. Front page: 安徽长庚光学科技
有限公司 (Anhui Changgeng Optics Technology Co., Ltd.), inventor 李大勇 (Dayong Li). Attribution strong: 17 elements in 11
groups, aspheres on L2 and L17 and νd 81.6 glass on L3/L14/L16 match Venus Optics' published construction (two
aspherical, three ED elements). `audit:aperture` passes.

Deployment change: assignee in the corpus's English form; `catalog.lensMounts` (the nine mounts on the Venus Optics
specification table), `imageFormat` "135-full-frame" and `closeFocusM.marketing` 0.2 added.

Open: inferred rims are 20–35 % under the patent figure, which limits shift to about 0.9 mm; widen to the figure,
then declare `perspectiveControl` (±11 mm) and the 65 mm image circle. "Unmatched" glass labels on exact HOYA codes;
key, name, subtitle, specs and prose wording.
