# Qualified integration handoff audit, 2026-11-12

- Recovered original November 9 qualified checkpoint; all 118 manifest hashes passed.
- Data TS unchanged; source 32 rows and 96 numeric comparisons independently preserved/rechecked.
- Added connected Phillip Reeve section and exact URL as evidence, retained 400×265 resolution limit.
- Owner assumption: “If the shapes match the patent well enough, we'll assume that there's a misprint in the diagrams and go ahead and ready it for integration. Make sure to include that diagram as evidence when you do so.” This authorizes qualified association/handoff, not proof that a diagram is erroneous. Verified contradiction remains prose L9/L11 vs table L10/L12. All values unchanged.
- Source facts, inferred 97% clear caps, approximate dispersion,132.1055 mm EFL, infinity-only and clipping disclosures retained.
- Fresh native construction and canonical geometry: passed. Fresh field trace/MTF: completed, all outcomes logged, clipping not filtered. See checks/.
- Historical 6,110 tests not rerun. Full app regression/current-main integration/browser QA deferred to integration per owner. No publication. Visible false at this checkpoint (closed: coordinator later set visibility true).

- Prominent limitation: 590/812 rays (72.66%) blocked at 9.328° in the aimed-stop geometric diagnostic; model sampling, not measured retail illumination. The 0.568% additional axial iris-normalized clipping metric has a different denominator/method. No claim of perfect transmission.

## 2026-11-13 — Deployment validation

The independent validator's `v-a135/report.md` records a re-read of the patent page images: all 32 Table 1 rows (60 radius/spacing values and 32 index/Abbe values), the stop, three cemented pairs, Figures 1–7, and the bibliographic information. No transcription mismatch was found. Codex checked the assigned integration edits, the CN author-name convention, the catalog field types and the audit results below; the validator's source measurements were retained without re-fitting.

Verdict: valid with notes. The validator finds a strong product association from the maker's own sole-example patent, the matching 16/13 construction, six ED/five high-index positions and matching ordered shapes in the [published maker optical diagram](https://phillipreeve.net/blog/wp-content/uploads/2026/05/7Artisans-AF135mm-F1.8-FF-Lens-construction.jpg); this does not establish exact manufactured prescription identity.

Changes:

- S26, S27, S28, S29 and S30 `sd`: 17 → 17.4 mm, the assigned minimum common value that clears the corner chief ray. The validator estimates Figure 1 at about 19.1 mm, but the S28/S29 crossing caps these rims near 18.0 mm; 17.4 mm passes without approaching that cap.
- `focus.closeFocusM`: 0.68 → 1e15, marking the infinity-only model. `catalog.closeFocusM`: absent → `{ "marketing": 0.68 }`, retaining the marketed minimum distance separately. The shape matches `CatalogV2Input` and the existing KMZ Zenitar 35 mm f/1 entry.
- `source.authors`: Changjia Liu / Xiangshi Luo / Xijing Yang → Liu Changjia / Luo Xiangshi / Yang Xijing. Existing CN Viltrox entries use family-name-first Chinese names. The matching Inventors line in the analysis now uses the same order.
- Header source wording: “user-provided original” → “CN 122469500 A, Table 1”. Added the required explicit scale factor 1, millimetre units/no conversion, tabulated stop position and back focus, inferred stop radius and figure-based rims, and the 17.4 mm corner-clearance choice.
- `source.example` was already present as `{ "label": "Sole example", "id": null }` and is retained under the assignment's “if missing” condition. The three mount ids, `135-full-frame` format, `visible: false`, `const LENS_DATA` and its type import were retained at this checkpoint (closed: coordinator later set visibility true). No other prescription number changed.

After these edits, `built.mjs` reports EFL 132.10552845338597 mm, FOPEN 1.7940979019491947, built stop radius 20.299857229885482 mm and total track 147.806791 mm. The infinity-only close-focus sentinel is 1000000000000000.

Checks, run from the main checkout against the absolute worktree file:

- `audit:surface`: OK — no validation errors.
- `audit:aperture`: one lens/one station within the standard 3% tolerance; rim 0, trace 0, iris 0, failed 0. The detailed result is f/1.7940979019491945 → f/1.7992747979338315 (+0.2886%), diagnosis `ok`. Its physical next-ray limiter remains S7, consistent with the validator's existing S7/S8 limitation; zero diagnosed rim-limit stations does not mean zero marginal clipping.
- `clearap.mjs --Y 21.7`: chief image height 21.700 mm, field about 9.25°, no `BLOCKS-CHIEF`. Required chief heights at S26–S30 are 17.16, 16.95, 16.57, 16.57 and 17.27 mm, all below 17.4 mm. The probe still flags the existing axial marginal clipping elsewhere and cannot find its upper full-bundle ray; no complete bundle-transmission claim is made.
- `audit:image-circle --all`: one checked, zero undersized, zero skipped.
- `audit:field-coverage --below=1.01 --all`: 100%, modeled 9.2° → 21.65 mm of 21.65 mm, corner clear; one station `ok`, zero unsolved/skipped. The image-format corner is distinct from the 21.70 mm patent-height check above.
- Prettier check: all three assigned files passed, including this appended validation section.

Open at that checkpoint (cleanup wording and labels closed by the section below): names/keys, generic element type labels, glass labels, subtitle/specs wording and analysis process notes/voice. The figure's approximately 19.1 mm rear rims remain larger than the geometrically permitted model rims; this is disclosed rather than repaired. The historical analysis sampling counts describe the earlier 17 mm caps and have not been recomputed (closed: stale sampling passages removed from the public analysis). The standard aperture audit accepts the small existing S7/S8 restriction, while the separate clear-aperture probe retains its axial/full-bundle limitations. Full application tests and viewer checks were outside this integration assignment.

## 2026-11-13 — Cleanup and wording pass

The validator and integration reports, the retained patent-table transcription and the maker diagram were reviewed. The official product page confirms 16 elements in 13 groups, six ED and five high-index elements, f/1.8–16, twelve blades, 0.68 m minimum focus and E/Z/L mounts. Existing catalog mounts, format, focus distances, names/key, visibility and all optical dimensions were preserved.

The subtitle now reads “CN 122469500 A, Table 1 — the maker's own application”. Specs replace the erroneous “PATENT EFL” with the maker's ED/high-index count, all-spherical construction, aperture range and minimum focus. The header and focus description use plain wording; the focus sentinel remains 1e15 and catalog marketing distance remains 0.68 m. All sixteen element types now follow their surface signs, with specific roles. C1 joins L2/L3, C2 joins L5/L6 and C3 joins L14/L15: both members carry `cemented`, and each pair has a `doublets` bracket spanning its outer surfaces. No mechanical group or focusing motion was added. Inferred ED tags appear only on L2/L5/L10/L12/L15/L16, following the maker diagram and consistent nd/νd values.

All former generic Unmatched element labels were reviewed. Catalog row minus printed patent values (Δnd / Δνd):

- L1/L6/L9/L14 → CDGM H-ZF52: 0 / 0.
- L2/L10/L12 → CDGM H-FK61: 0 / 0.
- L3 → Hoya E-FD13: 0 / −0.000063.
- L4 → CDGM H-ZF6: 0 / 0.
- L5 → Unmatched (nd 1.4378 / V 94.523389): no exact catalog row.
- L7 → Schott N-LAK8: 0 / −0.002974.
- L8 → Hoya C12: +0.000003 / +0.000411.
- L11 → CDGM H-ZF4A: 0 / 0.
- L13 → Ohara S-LAH79: 0 / −0.043005.
- L15 → Schott N-PSK53A: 0 / −0.002702.
- L16 → CDGM H-ZPK5: 0 / −0.002024.
- Camera-side plate, previously unlabeled → CDGM H-K9L: 0 / +0.001268.

Every catalog label resolves with `trylabel.mjs`; `glasscheck.mjs` confirms compatibility for all fifteen labeled elements. L5 retains the index/Abbe dispersion fallback. No copied C/F/g indices were present to remove. Catalog curves supply spectral behavior without establishing supplier or melt identity; chromatic results therefore change, while the reference-index geometry is unchanged.

The analysis retains the patent/maker citations, architecture, source graph wavelengths and spatial frequencies, focus limitation and aperture uncertainties. It removes authorization, diagram-misprint assumptions, release/test/commit prose, stale sampling counts and broken spacing; one sentence preserves the prose-versus-table ED ordinal discrepancy. The model-scope section gives the unchanged paraxial values and source comparison. Historical audit sections, including Deployment validation, are retained with stale visibility/cleanup status marked closed in place.

Before → after: EFL 132.10552845338597 → 132.10552845338597 mm; FOPEN 1.7940979019491947 → 1.7940979019491947; half-field 9.328251114305486 → 9.328251114305486°; stop radius 20.299857229885482 → 20.299857229885482 mm; BFD 1.0101 → 1.0101 mm; total track 147.806791 → 147.806791 mm. Full `built.mjs` and `probe.mjs` outputs are identical, including their focus-keyframe summaries. Direct comparison also confirms unchanged surfaces, indices/Abbe numbers, aperture, projection and plate dimensions.

The surface audit reports OK with no errors. The aperture audit has one station within 3%, zero rim/trace/iris/failed diagnoses; the pre-existing small S7/S8 restriction remains. Field coverage reports one station at ≥99%, zero unsolved and zero skipped. Prettier was skipped as directed. The requested screenshot helper produced no PNG and emitted macOS thermal-notification and DNS-watch errors; rendered-page review could not be completed. No command or edit was denied, and no retry was made.

Open: L5 has no exact catalog glass; the patent's ED ordinals disagree with its table; exact manufactured prescription and glass identity remain unproven. No finite-focus configuration is tabulated despite the stated 0–17 mm L7 travel. Figure 1's rear rims are about 19.1 mm versus the retained 17.4 mm model radii and approximately 18.0 mm geometric ceiling. S7/S8 retain their small marginal restriction; the prior clear-aperture probe's axial/full-bundle limitations remain. Historical 17 mm-cap transmission numbers are not current-model results. Rendered-page review remains outstanding after the screenshot helper failed; full application tests were excluded from this pass.
