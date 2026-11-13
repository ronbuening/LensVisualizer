# Qualified integration handoff audit, 2026-11-12

- Recovered original November 9 qualified checkpoint; all 118 manifest hashes passed.
- Data TS unchanged; source 32 rows and 96 numeric comparisons independently preserved/rechecked.
- Added connected Phillip Reeve section and exact URL as evidence, retained 400×265 resolution limit.
- Owner assumption: “If the shapes match the patent well enough, we'll assume that there's a misprint in the diagrams and go ahead and ready it for integration. Make sure to include that diagram as evidence when you do so.” This authorizes qualified association/handoff, not proof that a diagram is erroneous. Verified contradiction remains prose L9/L11 vs table L10/L12. All values unchanged.
- Source facts, inferred 97% clear caps, approximate dispersion,132.1055 mm EFL, infinity-only and clipping disclosures retained.
- Fresh native construction and canonical geometry: passed. Fresh field trace/MTF: completed, all outcomes logged, clipping not filtered. See checks/.
- Historical 6,110 tests not rerun. Full app regression/current-main integration/browser QA deferred to integration per owner. No publication. Visible false.

- Prominent limitation: 590/812 rays (72.66%) blocked at 9.328° in the aimed-stop geometric diagnostic; model sampling, not measured retail illumination. The 0.568% additional axial iris-normalized clipping metric has a different denominator/method. No claim of perfect transmission.

## 2026-11-13 — Deployment validation

The independent validator's `v-a135/report.md` records a re-read of the patent page images: all 32 Table 1 rows (60 radius/spacing values and 32 index/Abbe values), the stop, three cemented pairs, Figures 1–7, and the bibliographic information. No transcription mismatch was found. Codex checked the assigned integration edits, the CN author-name convention, the catalog field types and the audit results below; the validator's source measurements were retained without re-fitting.

Verdict: valid with notes. The validator finds a strong product association from the maker's own sole-example patent, the matching 16/13 construction, six ED/five high-index positions and matching ordered shapes in the [published maker optical diagram](https://phillipreeve.net/blog/wp-content/uploads/2026/05/7Artisans-AF135mm-F1.8-FF-Lens-construction.jpg); this does not establish exact manufactured prescription identity.

Changes:

- S26, S27, S28, S29 and S30 `sd`: 17 → 17.4 mm, the assigned minimum common value that clears the corner chief ray. The validator estimates Figure 1 at about 19.1 mm, but the S28/S29 crossing caps these rims near 18.0 mm; 17.4 mm passes without approaching that cap.
- `focus.closeFocusM`: 0.68 → 1e15, marking the infinity-only model. `catalog.closeFocusM`: absent → `{ "marketing": 0.68 }`, retaining the marketed minimum distance separately. The shape matches `CatalogV2Input` and the existing KMZ Zenitar 35 mm f/1 entry.
- `source.authors`: Changjia Liu / Xiangshi Luo / Xijing Yang → Liu Changjia / Luo Xiangshi / Yang Xijing. Existing CN Viltrox entries use family-name-first Chinese names. The matching Inventors line in the analysis now uses the same order.
- Header source wording: “user-provided original” → “CN 122469500 A, Table 1”. Added the required explicit scale factor 1, millimetre units/no conversion, tabulated stop position and back focus, inferred stop radius and figure-based rims, and the 17.4 mm corner-clearance choice.
- `source.example` was already present as `{ "label": "Sole example", "id": null }` and is retained under the assignment's “if missing” condition. The three mount ids, `135-full-frame` format, `visible: false`, `const LENS_DATA` and its type import are retained. No other prescription number changed.

After these edits, `built.mjs` reports EFL 132.10552845338597 mm, FOPEN 1.7940979019491947, built stop radius 20.299857229885482 mm and total track 147.806791 mm. The infinity-only close-focus sentinel is 1000000000000000.

Checks, run from the main checkout against the absolute worktree file:

- `audit:surface`: OK — no validation errors.
- `audit:aperture`: one lens/one station within the standard 3% tolerance; rim 0, trace 0, iris 0, failed 0. The detailed result is f/1.7940979019491945 → f/1.7992747979338315 (+0.2886%), diagnosis `ok`. Its physical next-ray limiter remains S7, consistent with the validator's existing S7/S8 limitation; zero diagnosed rim-limit stations does not mean zero marginal clipping.
- `clearap.mjs --Y 21.7`: chief image height 21.700 mm, field about 9.25°, no `BLOCKS-CHIEF`. Required chief heights at S26–S30 are 17.16, 16.95, 16.57, 16.57 and 17.27 mm, all below 17.4 mm. The probe still flags the existing axial marginal clipping elsewhere and cannot find its upper full-bundle ray; no complete bundle-transmission claim is made.
- `audit:image-circle --all`: one checked, zero undersized, zero skipped.
- `audit:field-coverage --below=1.01 --all`: 100%, modeled 9.2° → 21.65 mm of 21.65 mm, corner clear; one station `ok`, zero unsolved/skipped. The image-format corner is distinct from the 21.70 mm patent-height check above.
- Prettier check: all three assigned files passed, including this appended validation section.

Open: the later cleanup pass still needs to review names/keys, generic element type labels, glass labels, subtitle/specs wording and analysis process notes/voice. The figure's approximately 19.1 mm rear rims remain larger than the geometrically permitted model rims; this is disclosed rather than repaired. The historical analysis sampling counts describe the earlier 17 mm caps and have not been recomputed. The standard aperture audit accepts the small existing S7/S8 restriction, while the separate clear-aperture probe retains its axial/full-bundle limitations. Full application tests and viewer checks were outside this integration assignment.
