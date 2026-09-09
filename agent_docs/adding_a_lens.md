# Adding a New Lens

## Quick Steps

1. Copy `src/lens-data/TEMPLATE.data.ts.template` to `src/lens-data/<YourLens>.data.ts`
2. Fill in the lens data following the template's inline field documentation and `src/lens-data/LENS_DATA_SPEC.md`
3. Optionally add `src/lens-data/<YourLens>.analysis.md` beside the data file for the description panel
4. Run `npm run generate:metadata`; the organizer moves the root-level data/analysis pair into the derived maker folder
   and rewrites the `LensDataInput` import for the nested path (`npm run build` does the same)
5. Run `npm run typecheck && npm run format:check && npm run test` to verify types, formatting, and validation
6. Done — the lens pipeline auto-registers every `src/lens-data/**/*.data.ts` file. No manual imports, catalog edits, or
   per-lens tests are needed

The organizer moves only the root-level `.data.ts` file and its same-stem `.analysis.md`; create or relocate an
`.audit.md` log separately in the final maker folder. If authoring directly inside a maker folder, import from
`../../types/optics.js` instead of the template's root-level `../types/optics.js`.

On `npm run build`, every visible lens is also eligible for `/feeds/lenses.xml` (the 50 newest by git-derived
publication date; `visible: false` fixtures are excluded). See `agent_docs/architecture/routing-and-content.md`.

## Reference Documents

- **Full data-file format specification:** `src/lens-data/LENS_DATA_SPEC.md` — the authoritative field reference; the
  sections below only route into it
- **Companion analysis-file format:** `src/lens-data/LENS_ANALYSIS_SPEC.md` — required skeleton, conditional sections,
  voice and conventions for `*.analysis.md`
- **AI construction/integration handoff:** [lens-data-integration-handoff.md](lens-data-integration-handoff.md) —
  compact process and recurring issues from recent lens batches
- **Annotated template:** `src/lens-data/TEMPLATE.data.ts.template` (includes the semi-diameter guidelines)
- **Shared defaults:** `src/lens-data/defaults.ts`
- **Mirror/folded reference fixtures:** `src/lens-data/reference/*.data.ts` — hidden synthetic examples listed under
  "Reference Fixtures" in the spec; regenerate `agent_docs/generated/mirror-fixtures.generated.md` with
  `npm run generate:mirror-reports` after changing them
- **Mount/format backfill status:** [lens-mount-format-backfill.md](lens-mount-format-backfill.md)
- **Re-auditing an existing lens against its patent:** [lens-patent-audit.md](lens-patent-audit.md) — for data files
  already in the catalog, not for authoring a new one

## Key Details

### Auto-Registration

`src/utils/catalog/lensCatalog.ts` uses `import.meta.glob` to discover all `*.data.ts` files anywhere under
`src/lens-data/`. Each file must default-export a `LENS_DATA` object with a unique `key` and use
`satisfies LensDataInput` for compile-time type checking. Analysis files are matched by the same relative stem path with
a `.analysis.md` suffix. Set `visible: false` in the data object to hide a lens from the UI.

### Field Semantics

`src/lens-data/LENS_DATA_SPEC.md` is the single home for field meaning and validation rules. The sections you will need
most often while authoring:

- **Shared defaults merge** — "Required but have defaults (from `defaults.ts`)": defaults are merged under each lens, so
  override only values that differ (e.g. `svgW`, `svgH`, `maxRimAngleDeg`).
- **`maker`** — "Optional" top-level fields: set it explicitly; when omitted it is derived from `name` by prefix matching.
- **`name`** — "Display Name Convention": normalized all-caps manufacturer and line, separated tokens, and the camera body
  in parentheses for fixed-lens cameras.
- **`perspectiveControl`** — "Perspective Control Movement (`perspectiveControl`)": only real tilt/shift lenses declare
  it; ordinary lenses omit the field.
- **Mirror, telescope, and folded lenses** — "Folded And Mirror Optical Paths (`opticalPath`)" and "Reference Fixtures":
  ordinary refractive lenses omit `opticalPath`, `interaction`, and `innerSd`; start from the reference fixture closest
  to the design.
- **Diffractive PF / DO / kinoform surfaces** — "Diffractive Phase Surfaces (`diffractive`)": keep the published
  polynomial on the surface; never convert it to aspheric sag or fold it into an index. The companion analysis must
  separate geometric tracing of the authored order from unmodeled efficiency, multi-order flare, and wave-optics behavior.
- **Soft-focus / SA-control rings** — "Aberration Control (`aberrationControl`)": an independent optical control, never a
  stand-in for ordinary floating focus.
- **Zoom lenses** — "Variable Air Spacings (`var`)", "Zoom Lens Fields", and "Zoom-Specific Sourcing": `zoomPositions`,
  per-position `var` pairs, `nominalFno` arrays for variable-aperture zooms, and the zoom validation rules. Worked
  examples: `src/lens-data/nikon/NikonNikkorZ70200f28.data.ts` (constant aperture) and
  `src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts` (variable aperture). When a patent omits close-focus rows, follow
  the inference rule in `agent_docs/gotchas.md`.
- **Line indices (`nC` / `nF` / `ng` / `dPgF`)** — "Element Object" spectral-data notes: capture them directly on
  `ElementData` (there is no `spectral` wrapper). They matter for proprietary glasses that will not resolve to the
  Sellmeier catalog; the backlog is [proprietary-glass-backfill.md](proprietary-glass-backfill.md).

### Mount And Image Format Fields

Use `lensMounts` and `imageFormat` when the production system and coverage are clear. Values must be canonical ids from
`src/utils/catalog/lensTaxonomy.ts` (see `src/lens-data/LENS_MOUNT_FORMAT_OPTIONS.md`); never free-type display labels.

```typescript
lensMounts: ["nikon-z"],
imageFormat: "135-full-frame",
```

A lens may declare multiple mount ids but only one image-format id. Leave ambiguous historical variants unset and add a
note to [lens-mount-format-backfill.md](lens-mount-format-backfill.md) instead of guessing.

### Semi-Diameter Troubleshooting

Surface `sd` values are the most common source of validation and rendering failures. If validation fails on an SD check
(edge thickness, rim slope, cross-gap overlap, conic height), read the semi-diameter guidelines in
`src/lens-data/TEMPLATE.data.ts.template` and the "Validation" and "Data Sourcing Checklist" sections of the spec, which
define the slope-based rim check, the SD-ratio sanity limit, the `gapSagFrac` cross-gap rule, and the hidden-trim limit
that production render tests enforce.

After the SDs validate, compare the rendered silhouette against any published optical section from the maker. If the
prescription still reads too flat or stretched, use per-lens layout tuning (`scFill`, `yScFill`, and only when truly
needed `maxAspectRatio` or `lensShiftFrac`) to match the published proportions. Never use layout tuning to hide bad
surface data or invalid SDs.

### Validation

`buildLens()` is the author-facing validation/build entry point; it calls `validateLensData()` internally and throws a
descriptive error listing every issue. Lens files never gain engine-selection or trace-mode fields. The complete check
list, including the embedded-stop rules (`stopPlacement: "inside-element"` with `fromSurface`/`toSurface`), is the
"Validation" section of the spec.

Corpus tests add policy checks beyond the runtime validator: structured patent metadata, the analysis-file
metadata/section floor, catalog integrity, and production render diagnostics. Passing a single `buildLens()` call is
therefore necessary but not the complete integration gate; `npm run test` is.

Those corpus sweeps are the only tests a new lens needs — see "Per-Lens And Audit Test Retention" in
[architecture/testing.md](architecture/testing.md) before adding any test file.
