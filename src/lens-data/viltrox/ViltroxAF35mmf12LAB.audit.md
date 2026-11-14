# Scoped audit
- Actual native export validates with errors[], optics identical to PILOT; visiblefalse at that time (closed: the coordinator subsequently set visible=true).
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
- `catalog.lensMounts`: [sony-fe] → [sony-fe, nikon-z], matching the maker's two versions. `imageFormat` remains 135-full-frame and `visible` remains false at this stage (closed: the coordinator subsequently set visible=true).
- Header: abbreviated handoff note → one JSDoc stating source/example, scale, units, physical plate placement and inferred rims/iris/conjugate/back focus. The existing type-only import, const and satisfies/export form remain intact.
- Analysis: explicitly identify GL as a rear plate, distinguish the calculated focus endpoint from marketing MFD, and acknowledge the maker's FE/Z offerings with the Z source link. Other wording is reserved for cleanup.

After the changes, `built.mjs` is OK: EFL 34.502313485 mm, f/1.2, iris semi-diameter 17.343540796 mm, total track 136.068 mm and half-field 32.1°. `probe.mjs` before/after gives infinity EFL/BFD 34.5023/0.4547 mm and near EFL/BFD 35.4959/−5.4212 mm, with BFD measured from the plate rear. Full-precision comparison finds zero change at both endpoints in EFL, BFD, physical track and literal-plane conjugate/magnification; all 28 expanded surface prescriptions and rims are identical. BFD from the last lens vertex is 18.529742165 mm at infinity and 12.653785708 mm for collimated light at the near configuration; the latter is not the finite-object image distance. At the literal near image plane, object-to-image is 341.084025185 mm and magnification −0.166814075. The stock probe instead shifts that plane to the infinity best-focus offset and reports 342.68 mm; that diagnostic shift does not define the authored endpoint. The source's 0.500 mm final air and 0.045257835 mm infinity defocus are retained.

Audits: `audit:surface` prints OK with no validation errors. `audit:aperture` reports one station within 3% of the stated f-number, zero rim/trace/iris limits and zero failures. `audit:image-circle` checks one lens with zero undersized rims and zero skips. `audit:field-coverage --below=1.01` skips the hidden production file; on a scratch copy with only visible=true it checks one station, reaches 21.52 mm of the 21.65 mm full-frame semi-diagonal (99.4%) at 32.1°, and finds the 32.2° corner chief ray clear, with zero skips. Image-circle also passes on that scratch copy. These chief-ray results do not establish full-pupil corner transmission.

Open (wording items closed by the cleanup section below; names/keys were already set by the coordinator): cleanup still owns subtitle/specs wording, element type and glass labels, public analysis voice, and numerical rims versus the patent figure. Inferred-cap infinity edge blockage remains 82.51%; the earlier near finite-object sampling differs from the current native launch convention and must not be presented as current-main parity. Exact retail Example 2 attribution, the source near-distance datum, intermediate focus cam and historical glass identities remain unproved. Full-app and browser validation remain outside this assignment; no tests, generators, builds, servers or state-changing git commands were run. No sandbox denial occurred.

## 2026-11-14 — Cleanup and wording pass

Only this lens's data, analysis and audit files changed. The coordinator's name, key, visibility, mounts, format, marketing minimum focus distance, patent metadata, index references, focus settings, stop and rear-plate geometry are retained. All surface radii, thicknesses, rims, aspheric terms, material nd/νd and D1–D4 values are unchanged. The addendum supersedes the formatting step; no formatter, generator, full test suite, build, server or state-changing git command was run.

Fields changed: the header now describes the source and limits in plain technical language. Subtitle changed from “CN115826211A/B Example2 representative; literal filter and two focus stations” to “CN 115826211 A, Example 2 — Viltrox AF 35mm f/1.2 LAB construction”. The old specs (“15 ELEMENTS / 10 GROUPS PLUS PUBLISHED FILTER”, “TWO PUBLISHED FOCUS ENDPOINTS”, “INFERRED CLEAR APERTURES”) became “15 ELEMENTS / 10 GROUPS”, “5 ED / 3 HIGH-REFRACTIVE / 2 ASPHERICAL”, “F/1.2–16”, “MINIMUM FOCUS 0.34 m”. The maker's [FE](https://viltrox.com/products/af-35mm-f1-2-fe) and [Z](https://viltrox.com/products/af-35mm-f1-2-z) pages state f/1.2–16, so aperture.fStops changed from [1.2] to [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16]. No other catalog metadata was added.

Focus.closeFocusM remains 0.341084 m and marketing close focus remains 0.34 m. The focus description replaces run-together distances and process wording with the two printed states, G2's 6.151 mm imageward travel, G4's 5.066 mm objectward travel, the calculated 0.205016 m first-vertex and 0.341084 m object-to-image distances, and the patent's 0.206 m distance with unspecified origin. The intermediate cam remains unknown. Source errata now express the same source limits without process vocabulary.

All 15 element labels are now “Element N”, with shape types from the surface-radius signs and specific group roles. The five cemented pairs have matching cemented tags on both members and doublet brackets C1 = L2/L3, C2 = L5/L6, C3 = L7/L8, C4 = L10/L11 and C5 = L13/L14. The five functional groups have fixed/floating labels. D1–D4 remain the variable-gap labels. No extra element or false triplet was introduced.

The [maker construction diagram](https://cdn.shopify.com/s/files/1/0104/0380/7298/files/AF_35mm_F1.2_LAB_FE_-MTF.jpg?v=1744770040) was inspected again: its ED positions L1/L7/L9/L10/L13 agree with the low-dispersion printed coordinates. Those five elements now have apd="inferred" and a one-line note; the three HR positions receive no apd tag. The exploded drawing supports the broad-front/narrow-rear arrangement but supplies no numerical clear apertures.

Every old glass string was “Literal rounded nd/Vd; unmatched glass, approximate dispersion”. The replacements below all resolve with trylabel.mjs. Δ values are catalog-row minus patent values, not changes to authored optical constants. A Table 4 image confirms that every nd is printed to three decimals; all catalog nd values round to the printed value, so Δnd at printed precision is zero. All |Δνd| are below 0.15. Catalog curves are spectral proxies, not evidence of production supplier identity; several vendors offer matching rounded coordinates. No catalog-copied nC/nF/ng fields were present to remove.

| Elements | New glass label | Raw Δnd | Δνd |
| --- | --- | ---: | ---: |
| L1 | FC5 (Hoya) | +0.000490 | +0.010000 |
| L2/L11/L14 | FDS90 (Hoya) | −0.000340 | −0.005000 |
| L3 | TAFD30 (Hoya) | 0 | −0.005000 |
| L4/L15 | D-ZLaF52LA (CDGM) | 0 | −0.000137 |
| L5/L12 | H-ZF88 (CDGM) | −0.000050 | −0.000036 |
| L6 | E-F5 (Hoya) | +0.000420 | −0.001000 |
| L7/L9/L13 | FCD515 (Hoya) | −0.000180 | +0.006000 |
| L8 | E-FD8 (Hoya) | −0.000070 | −0.001000 |
| L10 | K-GFK70 (Sumita) | +0.000070 | −0.004000 |
| GL | H-K9L (CDGM) | −0.000200 | +0.001000 |

The analysis keeps the section skeleton, citations, source tables, aspheric coefficients, focus distances, source-plane residual and product-identity limits. Its glass discussion follows these catalog labels and distinguishes them from factory identities. Process sections, hidden/pending status, default-gap-sag discussion and ray-lattice counts were removed or restated as optical limits. Heavy corner vignetting remains explicit; the finite-object near calculation is distinguished from collimated field-angle illumination. The scope heading now reads “Model Scope and Limitations”. Historical deployment decisions above are retained, with stale visibility/wording items marked closed.

Before → after built.mjs: EFL 34.50231348501969 → 34.50231348501969 mm; FOPEN 1.2 → 1.2; halfField 32.1 → 32.1°; stop radius 17.34354079551212 → 17.34354079551212 mm; physical total track 136.068 → 136.068 mm. Probe.mjs is identical at both focus keys [0, 1]: infinity EFL/BFD 34.5023/0.4547 mm and near EFL/BFD 35.4959/−5.4212 mm. The probe's near TL 136.0227 mm and object-to-image 342.68 mm use its diagnostic infinity-focus image-plane shift, not the authored 136.068 mm track or 341.084025185 mm near conjugate. A direct comparison also confirms identical optical constants, surfaces, rear-plate geometry, gaps, focus keyframes and coordinator metadata.

Surface audit: OK — no validation errors. Aperture audit: one station within 3% of the stated f-number, zero rim/trace/iris limits and zero failures. Field coverage with --all: one station at ≥99%, zero unsolved and zero skipped. The screenshot helper produced thermal-notification and DNS-watch errors and no PNG, so rendered-page confirmation was not obtained. No sandbox refusal was reported; the screenshot was not retried.

Open: compare the inferred front optical rim and resulting corner vignetting against the maker's connected diagram and patent Figure 2-1; numerical rim changes belong to a separate pass. Exact retail Example 2 attribution, the patent's near-distance origin, intermediate focus cam and historical supplier/melt identities remain unknown. The retained 0.045257835 mm infinity focus residual and small source condition-table discrepancies are not repaired. Near finite-object transmission is not a reproduction of the application's collimated launch. Rendered-page confirmation and full-application regression remain unestablished in this pass.
