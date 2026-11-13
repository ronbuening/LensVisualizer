# Scoped audit — pending independent final review
- Original E2 source visual check and matrix calculations preserved separately Samyang85EF_Diagnostic_20261113; independent source review supports actual Image afterD4.
- PILOT preparation reproducible: python prepare.py.
- Native currentreadonly4caca439: node --import ../LensVisualizer/scripts/ts-js-specifier-hook-register.mjs native.mjs (run fromworkspace withcompletepaths as needed).
- validate.mjs: canonicalgeometryerrors[]. states.mjs preserves bothruntimefocusstates.
- diagnostics.mjs:812samples ×3fields ×2states, fixedsourceplane, actualnearD0. FOCUS=1 fornear.
- endpoint.mjs: chief+8axialfractions throughradius1 passbothstates.
- validate-export.mjs: actualexporterrors[],identicalOptics=true,visiblefalse.
- Independent sourceparity/capparity/noBracketproof pending. No completedlenscount or deliveryauthorization inferred.


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
- `audit:field-coverage --below=1.01`: the hidden original was skipped. A scratch copy differing only in visibility and its type-import path reports 100% coverage, modeled 14.2° reaching 21.65 mm of 21.65 mm, clear corner, 0 unsolved and 0 skipped. The assigned data remains `visible: false`.

Open: move the camera-side plate only when its varying trailing gap can be represented without relocating it; retain source-qualified product identity, inferred rims and the validator’s disclosed off-axis blockage. Names/keys, readable wording, generic element types, glass labels and the rims-versus-figure presentation remain for cleanup. Earlier pending-review lines above are historical; the independent source re-read is documented here. Application/browser checks and remote CI were outside this integration scope. No sandbox refusals occurred.
