# Scoped audit — independent final review completed
- Original E2 source visual check and matrix calculations preserved separately Samyang85EF_Diagnostic_20261113; independent source review supports actual Image afterD4.
- PILOT preparation reproducible: python prepare.py.
- Native currentreadonly4caca439: node --import ../LensVisualizer/scripts/ts-js-specifier-hook-register.mjs native.mjs (run fromworkspace withcompletepaths as needed).
- validate.mjs: canonicalgeometryerrors[]. states.mjs preserves bothruntimefocusstates.
- diagnostics.mjs:812samples ×3fields ×2states, fixedsourceplane, actualnearD0. FOCUS=1 fornear.
- endpoint.mjs: chief+8axialfractions throughradius1 passbothstates.
- validate-export.mjs: actualexporterrors[],identicalOptics=true,visiblefalse (historical; visibility is now true).
- Independent sourceparity/capparity/noBracketproof pending — closed by the independent source and clipping review recorded below. No completedlenscount or deliveryauthorization inferred.


## 2026-11-13 — Deployment validation

The independent samyang85 validator re-read the patent page images: Tables 4–6 on PDF pages 12–13 (20 surface rows, 11 nd/Vd pairs, the conic and five asphere coefficients, and both endpoints of D1–D4), the asphere equation on page 11, Figure 3 on page 18, and the front-page bibliography. No transcription mismatches were found. Verdict: valid with notes as a qualified Example 2 patent model; the maker’s EF specifications and construction diagram support the 9-glass/7-group, hybrid-L8 association, without proving exact production identity. The 11/8 FE product is a different construction; the validator’s product evidence is the [maker’s EF page](https://www.lksamyang.com/ko/product/product-view.php?seq=379) and [EF construction diagram](https://www.lksamyang.com/upload/editor/1559813077).

Changes by the samyang85 integration agent:

- `source.patentNumber`: `KR 102213072 B1` → `KR 10-2213072 B1`, the required house form.
- `focus.closeFocusM`: 0.9 → 0.926326 m, the validator’s object-to-image distance for the printed near state. Printed first-vertex distance 813.676935 mm plus physical image track 112.649447 mm gives 926.326382 mm; this is distinct from the calculated paraxial conjugate of approximately 0.92647534 m.
- `catalog.closeFocusM.marketing`: absent → 0.9 m, preserving the maker’s minimum-focus specification separately.
- Data header: abbreviated description → one source/Example 2 comment stating scale factor 1, source millimetres with no conversion, inferred stop/rims, literal back-focus gaps, the plate limitation below, and the non-propagated D5 note.
- Analysis: added the explicit 0.926326 m versus 0.9 m distinction and the reason the plate remains explicit. Other wording, names, keys, specs, element types and glass labels are reserved for the cleanup pass.

Plate decision: no migration was made. The source has a 37.3/37.3 mm gap D3 before the 2.5 mm, nd 1.5168 / Vd 64.2 plate, and a varying D4 of 0.507836/0.687847 mm after it. The Rear Plates spec, `RearPlateData` type and ViltroxAF35mmf18FE precedent provide only scalar `gapAfterMm`; generated plate surfaces cannot carry an authored variable gap. Fixing D4 and moving its 0.180011 mm difference into D3 would relocate the near-state plate rather than preserve the physical source gaps. Under the assignment’s exact-representation exception, the delivered plate, both gap rows and all source optical values remain unchanged. D5 after Image remains metadata and is excluded from propagation.

Verification from the main checkout against the assigned data file:

- `built.mjs`: OK. EFL 84.54865074703312 mm, f/1.479, stop semi-diameter 15.090708515822355 mm, physical track 112.469436 mm, half-field 14.239°.
- `probe.mjs`, before and after the metadata edits: identical output at both states. Infinity EFL 84.5487 mm and after-filter BFD 0.5094 mm; near EFL 84.2393 mm, BFD −8.4999 mm and magnification −0.1091. Its near output holds the image at the infinity best-focus offset; that convention is not the literal source D0 calculation above. The plate was not moved, and exact comparison confirms elements, surfaces, gaps and aperture are unchanged, so these optical quantities have zero change.
- `audit:surface`: OK — no validation errors.
- `audit:aperture --raise`: no rim limit; zero deficient surfaces, zero flagged lenses and zero proposed raises.
- `audit:image-circle`: 1 checked, 0 undersized, 0 skipped, with `135-full-frame` retained.
- `audit:field-coverage --below=1.01`: the hidden original was skipped. A scratch copy differing only in visibility and its type-import path reports 100% coverage, modeled 14.2° reaching 21.65 mm of 21.65 mm, clear corner, 0 unsolved and 0 skipped. The assigned data remains `visible: false` (historical; closed by the coordinator's visibility change to true).

Open: move the camera-side plate only when its varying trailing gap can be represented without relocating it; retain source-qualified product identity, inferred rims and the validator’s disclosed off-axis blockage. Names/keys, readable wording, generic element types, glass labels and the rims-versus-figure presentation remain for cleanup (closed by the coordinator and the cleanup section below; no rim changes). Earlier pending-review lines above are historical; the independent source re-read is documented here. Application/browser checks and remote CI were outside this integration scope. No sandbox refusals occurred.

## 2026-11-14 — Cleanup and wording pass

Only this lens's data, analysis and audit companions were edited. The coordinator's identity, visibility, mount, image format, marketing focus distance and optical geometry were retained. The header, element labels, shape types, roles, focus description and source-erratum prose now use plain technical wording. The new subtitle is “KR 10-2213072 B1, Example 2 — the EF version's 9/7 construction.” Specs now state 9 ELEMENTS / 7 GROUPS, 1 HYBRID ASPHERICAL ELEMENT, F/1.4–16 and MINIMUM FOCUS 0.9 m. The aperture list retains its 1.479 opening and adds the maker's endpoint of 16. The [maker's EF specifications](https://www.lksamyang.com/ko/product/product-view.php?seq=379) were re-read for these construction, aperture and focus values; the maker publishes no ED positions, so no anomalous-partial-dispersion tags were added.

Every previous glass string was “Published nd/Vd, unassigned catalogue glass; approximate dispersion.” Hoya catalog labels now resolve through the repository's glass resolver. At catalog-row precision, Δnd = 0 for all ten glass/filter entries; Δνd = +0.01 for TAF1 at L1, L4 and L8, and 0 for all other matches. Relabels: L1/L4/L8 → TAF1 (HOYA); L2 → NBF1 (HOYA); L3 → E-FD10 (HOYA); L5 → NBFD15 (HOYA); L6 → E-FEL1 (HOYA); L7 → NBFD11 (HOYA); L9 → E-FD2 (HOYA); rear filter → BSC7 (HOYA). These are dispersion equivalents, not proof of supplier or melt identity. The hybrid layer remains “Unmatched resin (nd 1.517 / νd 52).” No catalog-copied spectral indices were present to remove, and no printed indices were changed.

Both members of L6–L7 are tagged C1, and both glass members of L8–L9 are tagged C2. Two doublet brackets span surfaces 12–14 and 16–18. The separately drawn 0.130 mm resin layer is excluded from C2, so the two-glass doublet is not labeled a triplet. The camera-side filter is a Plane-Parallel Plate and remains drawn with its unchanged focus-dependent trailing gap.

Analysis changes: normalized the title and element/glass descriptions; retained the separate 11/8, all-spherical WO-family FE comparison, source contradictions, focus distances, asphere coefficients and numerical optical limitations; replaced the verification heading with “Model Scope and Limitations”; removed review history, ray-grid counts, stale visibility and application-process prose. The front-page image confirms registration/grant on 2021-02-01 and B1 publication on 2021-02-08; the analysis previously used the latter for both events. Historical audit entries remain, with stale pending/visibility/cleanup statements marked closed in place.

Engine before → after: EFL 84.54865074703312 → 84.54865074703312 mm; FOPEN 1.479 → 1.479; halfField 14.239 → 14.239°; stop semi-diameter 15.090708515822355 → 15.090708515822355 mm; physical image track 112.469436 → 112.469436 mm. Probe output is identical at both focus keys: infinity EFL 84.5487 / BFD 0.5094 mm / f-number 1.479, near EFL 84.2393 / BFD −8.4999 mm / infinity-equivalent f-number 1.264 / magnification −0.1091. The near probe retains its infinity best-focus offset convention; 1.264 is not the finite working f-number. Surfaces, gaps, indices, reference lines, nominal aperture and focus keyframes also compare equal to the independently validated prescription. Surface audit: OK, no errors. Aperture audit: no rim limit, no trace/iris failures, one station within 3% of the stated f-number. Field coverage with --all: one station ≥99%, zero unsolved, zero skipped.

Figure 3 and the stored maker diagram were viewed again. They support the front-to-rear taper, two glass doublets and hybrid layer; they do not establish absolute clear rims or a maker-marked iris. No radii, thicknesses, gaps, aspheres, rims or stop values changed.

Open:
- Absolute rim calibration and production edge illumination remain unestablished; the 30 mm front cap and substantial source-field clipping warrant the separate rim pass. The current aperture audit reports no axial rim limit.
- The rear-plate format needs variable trailing-gap support before the filter can move out of the drawn elements without relocating it. D3 is fixed; D4 changes by 0.180011 mm. D5's purpose after Image remains unresolved.
- The source's focal-length, air-back-focus and overall-length summaries disagree with the prescription; its 0.9 m near heading and f/1.584 near claim differ from the stated geometry and fixed-iris result. No numerical reconciliation or refocus was applied.
- Exact production identity, glass suppliers and resin chemistry remain unproven; the finite-focus cam between the two published endpoints is unspecified.
- The required headless page-view attempt produced thermal/DNS diagnostic errors and no screenshot; rendered-page review remains incomplete. Full application checks and remote CI were not run in this scope.

Denial: a mistaken backup-copy destination in the main checkout was refused with “Operation not permitted.” That backup change was stopped without retry or alternate copy. No lens edit or optical audit was refused. Formatting commands were skipped as directed by the addendum.
