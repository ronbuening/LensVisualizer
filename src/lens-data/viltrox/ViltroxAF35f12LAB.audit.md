# Scoped audit
- Actual native export validates with errors[], optics identical to PILOT; visiblefalse.
-140 scalar comparisons against independent A/B-verified E2 source pass, including both gap stations/filter/finalimage gap and all asphere coefficients.
- Native prepared geometry passes with default90%; authored/runtime caps identical at both states.
- Independent reviewer reports exact full axial marginal radius1 passes at both states and whole-line proof190infinity+34near firstsurface cap misses. Final independent report confirms qualified scoped PASS,166 source/runtime checks and full JSON rerun parity.
- Source-critical originals, connected manufacturer manual diagram and independent source review must accompany archive. Keep exact sources rather than only citations.
- No fabricated factory identity, catalog novelty or historical no-duplicate claim; parent owns historical reconciliation.
- Endpoint-only focus: printed variable gap pairs[2.332,8.483],[14.868,8.717],[7.857,2.791],[1.901,6.967]. Actual near numerical datum interpretation disclosed, not source-certified.
- Strong field clipping82.51% edge at infinity and62.81% near sampled stop lattice is prominent, not suppressed.
- No original source value tuning, stop-down, source filter omission, image-plane replacement or engine edit.
- No full-app/current-main/browser completion claim. These remain integration-side.

Reproduction from workspace root:
python lens_recovery_20261112/Viltrox35LAB_Feasibility_20261113/prepare.py
python lens_recovery_20261112/Viltrox35LAB_Feasibility_20261113/make_handoff.py
python lens_recovery_20261112/Viltrox35LAB_Feasibility_20261113/parity.py
node --import ./lens_recovery_20261112/LensVisualizer/scripts/ts-js-specifier-hook-register.mjs lens_recovery_20261112/Viltrox35LAB_Feasibility_20261113/validate-export.mjs
FOCUS=0 node --import ./lens_recovery_20261112/LensVisualizer/scripts/ts-js-specifier-hook-register.mjs lens_recovery_20261112/Viltrox35LAB_Feasibility_20261113/diagnostics.mjs
FOCUS=1 node --import ./lens_recovery_20261112/LensVisualizer/scripts/ts-js-specifier-hook-register.mjs lens_recovery_20261112/Viltrox35LAB_Feasibility_20261113/diagnostics.mjs
FOCUS=1 OBJECT=206 node --import ./lens_recovery_20261112/LensVisualizer/scripts/ts-js-specifier-hook-register.mjs lens_recovery_20261112/Viltrox35LAB_Feasibility_20261113/diagnostics.mjs


## 2026-11-13 — Deployment validation

The independent v-viltrox35 validator re-read the patent page images: A pp. 10–11 and B pp. 11–13 for all 28 surfaces, 16 nd/Vd pairs, four conics, 20 polynomial coefficients and all eight D1–D4 endpoint values; Figure 2-1 for the 15-element/10-group arrangement, five cemented pairs, stop after L8 and aspheres on L4/L15. The integration agent also inspected A p. 11 and B p. 12 for the focus table, aspheres and fixed pre-GL spacing. CN 115826211 B, granted 2023-05-19, prints the same Example 2 tables as A. Scale is s=1; source dimensions are already in millimetres, with no units conversion.

Verdict: the submitted prescription is faithful, and these changes resolve the focus-distance and camera-plate contract errors without retuning the optics. The maker's FE/Z pages and construction diagram support the LAB family association through 35 mm f/1.2, 15/10 construction, five ED/three HR/two UA elements in matching positions and 0.34 m minimum focus; they do not uniquely identify Example 2 as the retail prescription.

Changes:

- `focus.closeFocusM`: 0.206 → 0.341084 m, the calculated object-to-image distance focused by the printed near row. The source's 0.206 m datum remains unspecified; its interpretation as a front-vertex distance is plausible, not proved.
- `catalog.closeFocusM.marketing`: absent → 0.34 m, the maker's separate FE/Z minimum focus distance.
- GL: drawn element 16 and surfaces 27–28 → one `rearPlates` entry, labelled GL and cited to Example 2 Table 4. The source physical distances remain 15.575 mm before / 2.500 mm glass / 0.500 mm after, with nd 1.517, Vd 64.199 and d-line reference. S26.d=15.575 is fixed at both focus endpoints: only D1–D4 vary. The existing glass label and inferred 23 mm plate semi-diameter are retained; no glass or rim was changed.
- `source.assignees`: Shenzhen Leiying Optoelectronics Technology Co., Ltd. → Shenzhen Leiying Photoelectric Technology Co., Ltd., matching the corpus. `source.authors` already reads Chen Baofeng, the family-name-first corpus form, and remains unchanged.
- `catalog.lensMounts`: [sony-fe] → [sony-fe, nikon-z], matching the maker's two versions. `imageFormat` remains 135-full-frame and `visible` remains false.
- Header: abbreviated handoff note → one JSDoc stating source/example, scale, units, physical plate placement and inferred rims/iris/conjugate/back focus. The existing type-only import, const and satisfies/export form remain intact.
- Analysis: explicitly identify GL as a rear plate, distinguish the calculated focus endpoint from marketing MFD, and acknowledge the maker's FE/Z offerings with the Z source link. Other wording is reserved for cleanup.

After the changes, `built.mjs` is OK: EFL 34.502313485 mm, f/1.2, iris semi-diameter 17.343540796 mm, total track 136.068 mm and half-field 32.1°. `probe.mjs` before/after gives infinity EFL/BFD 34.5023/0.4547 mm and near EFL/BFD 35.4959/−5.4212 mm, with BFD measured from the plate rear. Full-precision comparison finds zero change at both endpoints in EFL, BFD, physical track and literal-plane conjugate/magnification; all 28 expanded surface prescriptions and rims are identical. BFD from the last lens vertex is 18.529742165 mm at infinity and 12.653785708 mm for collimated light at the near configuration; the latter is not the finite-object image distance. At the literal near image plane, object-to-image is 341.084025185 mm and magnification −0.166814075. The stock probe instead shifts that plane to the infinity best-focus offset and reports 342.68 mm; that diagnostic shift does not define the authored endpoint. The source's 0.500 mm final air and 0.045257835 mm infinity defocus are retained.

Audits: `audit:surface` prints OK with no validation errors. `audit:aperture` reports one station within 3% of the stated f-number, zero rim/trace/iris limits and zero failures. `audit:image-circle` checks one lens with zero undersized rims and zero skips. `audit:field-coverage --below=1.01` skips the hidden production file; on a scratch copy with only visible=true it checks one station, reaches 21.52 mm of the 21.65 mm full-frame semi-diagonal (99.4%) at 32.1°, and finds the 32.2° corner chief ray clear, with zero skips. Image-circle also passes on that scratch copy. These chief-ray results do not establish full-pupil corner transmission.

Open: cleanup still owns names/keys, subtitle/specs wording, element type and glass labels, public analysis voice, and numerical rims versus the patent figure. Inferred-cap infinity edge blockage remains 82.51%; the earlier near finite-object sampling differs from the current native launch convention and must not be presented as current-main parity. Exact retail Example 2 attribution, the source near-distance datum, intermediate focus cam and historical glass identities remain unproved. Full-app and browser validation remain outside this assignment; no tests, generators, builds, servers or state-changing git commands were run. No sandbox denial occurred.
