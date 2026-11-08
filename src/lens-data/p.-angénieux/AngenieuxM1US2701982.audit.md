# M1 integration preparation: metadata complete, application acceptance held

## Completed changes

The existing private M1 model now records `source.example: { label: "Sole example", id: null }`. US 2,701,982 contains one unnumbered numerical table on PDF page 2, repeated in claim 4 on page 3; that repetition is not another example. The inventor, 1955 grant year and empty organizational assignee list remain source-supported. The canonical maker is `P. Angénieux`, matching the existing catalog category.

The display title is **P. ANGÉNIEUX M1 FAMILY 25mm f/1 (conditional patent model)**. Conditional identity is in the title and the first specification because the structured patent attribution replaces the free-text subtitle in the actual header, while specifications can be collapsed. The new analysis companion is rendered by the description component; the audit alone is not a viewer description.

The patent explicitly labels its indices as belonging to the **D line**, without a numerical wavelength. Every element now carries an index-reference note explaining that the unchanged values are used with the engine's helium-d convention at 587.5618 nm. No D-to-d conversion, catalog glass, measured partial dispersion or manufacturer identity has been invented. All eight glass dispersions remain Abbe estimates. This corrects the earlier report's incomplete account of the source wavelength label while retaining every optical number.

The source remains f/1 at a uniform 0.25 dimensional scale, with the separate marketed M1 f/0.95 identified as a product fact. The frozen inferred stop, clear caps, straight bevels, 16-mm diagnostic field, printed 14 mm image distance and justified 94% allowance are unchanged. The finite-focus sentinel is not a product MFD; no focus motion is invented. Visibility remains false and the stable key is unchanged. No publication timestamp, commit, push or deployment was created.

## Current-main binding and deduplication

The inspected current main was **563081b4218efecc25fde9e6e0fe6a3774b69847**, “Add six lenses from the November 6 package (#955),” committed at 2026-11-06 00:44:40 UTC. Connector comparison establishes exactly one commit beyond 25f65d4b4213a21392cbae92680134906049b2ad, with 25 changed files. A private snapshot was reconstructed from the exact parent Git tree plus that commit's patch, then all 25 changed Git blob hashes were independently checked against the connector.

Those six new main lenses are Minolta AF 135/2.8, Olympus E.Zuiko 200/4, Olympus Zuiko 180/2.8, Pentax Super-Takumar 50/1.4 eight-element, Voigtländer Dynaron 100/4.5 and Skoparon 35/3.5. They are not the frozen active-six integration set. No engine or UI source changed in this main update. M1 remains a new hidden local addition in this snapshot; no release or reserve-delivery count follows.

Metadata generation initially refused the historyless exported snapshot. Using the existing exact parent repository's read-only Git history with the private working tree supplied the genuine older publication history and allowed generation to complete. This is a content-current snapshot with parent-history provenance, not a newly checked-out Git object at the current head. No freshness guards were disabled and no dates were manually fabricated. The metadata has 1,075 total lenses, 1,059 visible lenses and 1,848 routes. M1 is present exactly once with its corrected example and hidden status; it adds no public route or visible lens.

## Verified checks

- The final authored data module passes strict standalone ES2023 TypeScript checking, targeted Prettier checking and targeted ESLint. These are not whole-repository passes.
- Five native entrypoints compile strictly against the current snapshot into 201 files. Of these, 199 match the previous compiled dependencies exactly; only the generated lens summaries and client metadata differ, as expected after current-main additions and the hidden M1 metadata. Engine source code is unchanged.
- The revised model's 15 serializable runtime surfaces, 75 sampled sag/slope evaluations, EFL, source image plane and all four supported spectral-channel values for all eight glasses agree exactly with the previous validated model. All eight materials resolve as Abbe estimates. Nonzero stale focus coordinates produce the same numeric geometry.
- The complete 198-field MTF matrix and 75-case pupil sweep were rerun with this freshly compiled current-snapshot engine. Their complete numerical result arrays exactly equal the prior verified checkpoint. All 198 fields converge through 50 lp/mm without applied refocus, and failed/unaimed pupil cells remain zero. Prior independent material-path and ray validation therefore retains its stated optical-input scope; it was not reclassified as independent MTF verification.
- **44 actual-component SSR cases pass:** 16 header configurations, 16 control configurations, eight element inspectors and four full analysis-description renders. Coverage spans four themes, compact/wide parameters, expanded/collapsed states and source focus versus stale focus coordinates. Conditional identity stays in the title, the sole-example attribution renders, source-index notes render, all eight glass estimates remain visible and the marketed f/0.95 is distinct from modeled f/1.
- **16 React/jsdom interaction cases pass:** 48 repeated disclosure toggles and 72 aperture-preset clicks, across four themes and stale-focus states. The focus slider is disabled, its label remains “Not modeled,” its callback is not invoked and its large schema sentinel is not exposed as a distance. This is DOM simulation using the real components, not actual-browser execution or a full-viewer interaction test.
- The existing whole-corpus analysis-structure suite passes **6/6 assertions** with the new analysis present.

The first DOM driver expected “f/1” while the existing formatter correctly labels the preset “f/1.0”; the driver was corrected to use the real formatter. A separate invariance driver originally compared function identity in generated surface profiles; it was corrected to compare serializable values and actual sag/slope outputs. Neither issue required an optical or application-source change.

## Gates that remain open

The combined focused metadata/analysis test run was terminated with exit 137 before producing a pass. One materially different attempt using the repository's previously successful isolated-fork configuration also exited 137. Both logs are retained. Only the separately completed six analysis-structure assertions are counted as passing; no full patent-metadata corpus, full test suite or whole-app acceptance is claimed.

Whole-repository typecheck/lint, complete production build and prerender, actual browser layout/viewer/Worker checks and final release review remain unverified. Previously documented browser socket restrictions were not retried or bypassed. The current bounded SSR and jsdom checks establish useful component behavior without asserting those blocked outcomes. The frozen active-six work remains higher priority if a supported integration route becomes available.

Scientific qualifications also remain: conditional M1 production association, unknown factory stop and clear apertures, inferred bevel convention and diagnostic field, estimated spectral dispersion, and no independent diffraction/MTF implementation.

## Reproduction and evidence

This package includes the final data/analysis/audit trio, exact inputs, metadata patch, source evidence, complete 198-field and 75-case outputs, 201 compiled numerical dependencies, a minimal source closure for rebuilding the numerical engine and checked components, rendered HTML, build logs, failed-attempt logs and a root manifest. Original repository scripts and source dependencies are retained without engine/UI edits. Scratch drivers live outside the maintained test tree.

Run `DEPS_DIR=/absolute/path/to/matching/node_modules sh replay_preparation.sh` with the dependencies pinned by the included package-lock.json already installed. The replay recompiles the numerical core and authored input, reruns the native checks, rebuilds/reruns the three component harnesses, and checks exact deterministic results. It does not install packages, access a network, launch a browser or run the whole application suite. The retained corpus-test log requires a complete checkout at the bound source state to reproduce, and is not disguised as a complete-corpus test inside the reduced source closure.

The prior independently validated optical checkpoint remains preserved at https://drive.google.com/file/d/1i8EwD1UkuzGJ4u_cvEonKRnIt8g6-dBU/view . The original patent is https://patentimages.storage.googleapis.com/2f/75/dd/b76ccb73bc0f44/US2701982.pdf . Its SHA-256 is 4d77506b226df82d14000a4473ab00357ce6ba65ff8e4170a668d320f55a0675. The analysis lists the qualified commercial and historical sources.
