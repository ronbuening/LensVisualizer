# Pentax 30mm Example 2 bounded pilot audit

Status: HIDDEN QUALIFIED V2 DRAFT. Native construction now passes; full-field chief clipping and unavailable edge bundle prevent full acceptance.

## Historical v1 construction failure (superseded only by the additive v2 result below)

Fresh strict TypeScript program passed with zero diagnostics. Root-level ../types/lensDataV2.js import and transpilation passed; diagnostic input equals transcribed data.

Native buildLens rejected surface 4: authored schematic semi-diameter15mm exceeds its absolute scaled spherical radius12.939mm, producing a reported rim slope1159285.88 (90°), above the default2.06 (64.2°) guard. No override was used. No ray trace or EFL from the native engine was therefore produced. FIELD_DIAGNOSIS.json has zero fields and the construction error; this is NOT an all-rays-pass result.

The initial caps were inferred from whole mechanical-looking rims in patent Fig3 using first-to-last axis scale. This failing surface shows that an outline extent cannot be treated as that spherical optical cap's usable clear aperture. Literal radii/gaps and all glass values remain untouched. Do not simply increase a geometry allowance or fit an aperture to a desired ray result.

Next step: independent surface-specific figure/cap review, distinguishing steep negative-meniscus edge/rim geometry from its usable spherical optical zone. A source-supported smaller optical cap may be considered with explicit evidence, or the draft stays held. No cap change has been made after this result.

The manuscript source-plane discrepancy remains independent: scaled published BFL37.2mm versus paraxial37.2550125436mm. No refocus. Raw E2 scalar EFL29.9968299658mm is inherited from the admission replay, not fresh successful native construction. Native sodium-D is explicit in the primary source.

Primary full-source provenance, source/production qualification, and fresh current-main/open-PR/room screening are in the adjacent source-screen checkpoint. Those checks do not imply complete global archive content dedup. Full integration, compiled viewer, mesh/render comparisons, and detailed field/MTF validation have not run. No factory-identity or final-readiness claim.


## Additive R4 face-boundary review
The original v1 assigned the whole L2 mechanical shoulder radius15mm to both faces and failed the native R4 spherical-domain guard. Figure3 independently shows the R4 curved face ending at the bevel near pixels(466,344) and(465,535), axis437. The smaller93pixel extent at0.11691495mm/pixel gives10.8731mm, conservatively rounded down to10.8mm. Only R4 optical semi-diameter changes in v2; R3 retains15mm. This is a schematic optical-face inference with about±0.35mm plus drawing distortion, not a printed factory dimension or ray-fitted cap. All R/d/nV, sourceimageplane and stop remain unchanged, with no override. The failed v1 remains preserved. Fresh bounded results are recorded separately; no further aperture tuning is permitted in this pass.

Fresh v2 strict TypeScript and native construction pass without overrides. Bounded25-pupil-plus-chief samples: axis26pass;18°19pass/7clip;27°15pass/11clip;36°9pass/17clip. At36° the chief itself clips at runtime surface index12 and the bundle adapter returns unavailable. This is a material full-field limitation, not successful edge acceptance; no further caps are tuned. R4_ONLY_CHANGE_RECEIPT.json records exact invariants and native aperture. Full corpus, compiled viewer and MTF remain unrun.
