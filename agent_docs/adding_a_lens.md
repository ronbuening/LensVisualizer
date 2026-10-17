# Adding a New Lens

## Quick Steps

1. Copy `src/lens-data/TEMPLATE.data.ts.template` to `src/lens-data/<YourLens>.data.ts`
2. Keep `schema: 2` and fill in the data following the template and `src/lens-data/LENS_DATA_SPEC.md`
3. Optionally add `src/lens-data/<YourLens>.analysis.md` beside the data file for the description panel
4. Run `npm run generate:metadata`; the organizer moves the root-level data/analysis pair into the derived maker folder
   and rewrites the `LensDataV2Input` import for the nested path (`npm run build` does the same)
5. Run `npm run typecheck && npm run format:check && npm run test` to verify types, formatting, and validation
6. Done — the lens pipeline auto-registers every `src/lens-data/**/*.data.ts` file. No manual imports, catalog edits, or
   per-lens tests are needed

The organizer files root-level `.data.ts` and `.teleconverter.ts` files, and a lens's same-stem `.analysis.md`.
Create or relocate an `.audit.md` log separately in the final maker folder. If authoring directly inside a maker folder, import from
`../../types/lensDataV2.js` instead of the template's root-level `../types/lensDataV2.js`.

For an archived V1 lens or teleconverter, drop the file into `src/lens-data/`, run
`npm run organize:lens-data`, review the conversion report, and commit the resulting V2 file. The organizer also
converts V1 files already inside maker folders in place. A conversion refusal stops organization and leaves the
source unchanged. Metadata generation refuses V1 files and names the organizer command; it never converts them.
For old audit field names, see [Reading V1 Audits](../src/lens-data/LENS_DATA_SPEC.md#reading-v1-audits).

On `npm run build`, every visible lens is also eligible for `/feeds/lenses.xml` (the 50 newest by publication date, normally derived from Git; `visible: false` fixtures are excluded). See `agent_docs/architecture/routing-and-content.md`.

## Reference Documents

- **Full data-file format specification:** `src/lens-data/LENS_DATA_SPEC.md` — the authoritative field reference; the
  sections below only route into it
- **Companion analysis-file format:** `src/lens-data/LENS_ANALYSIS_SPEC.md` — required skeleton, conditional sections,
  voice and conventions for `*.analysis.md`
- **AI construction/integration handoff:** [lens-data-integration-handoff.md](lens-data-integration-handoff.md) —
  compact process and recurring issues from recent lens batches
- **Annotated template:** `src/lens-data/TEMPLATE.data.ts.template` (includes the semi-diameter guidelines)
- **Shared defaults:** `src/optics/prescription/defaults.ts` (the schema defaults canonical ingest applies)
- **Mirror/folded reference fixtures:** `src/lens-data/reference/*.data.ts` — hidden synthetic examples listed under
  [Reference fixtures](../src/lens-data/LENS_DATA_SPEC.md#reference-fixtures) in the spec; regenerate
  `agent_docs/generated/mirror-fixtures.generated.md` with `npm run generate:mirror-reports` after changing them
- **Mount/format backfill status:** [lens-mount-format-backfill.md](lens-mount-format-backfill.md)
- **Re-auditing an existing lens against its patent:** [lens-patent-audit.md](lens-patent-audit.md) — for data files
  already in the catalog, not for authoring a new one

## Key Details

### Auto-Registration

`src/utils/catalog/lensCatalog.ts` uses `import.meta.glob` to discover all `*.data.ts` files anywhere under
`src/lens-data/`. Each file must default-export a `LENS_DATA` object with a unique `key` and use
`satisfies LensDataV2Input` for compile-time type checking. Analysis files are matched by the same relative stem path with
a `.analysis.md` suffix. Set `visible: false` in the data object to hide a lens from the UI.

### Field Semantics

`src/lens-data/LENS_DATA_SPEC.md` is the single home for field meaning and validation rules. The sections you will need
most often while authoring:

- **Schema defaults** — [Schema defaults](../src/lens-data/LENS_DATA_SPEC.md#schema-defaults): ingest supplies omitted
  defaults; overrides use `layout.*`, `rays.*` and `checks.*` (e.g. `layout.svgW`, `checks.maxRimAngleDeg`).
- **`maker`** — [Identity](../src/lens-data/LENS_DATA_SPEC.md#identity): explicit, inferred and unconfirmed makers.
- **`name`** — [Display Name Convention](../src/lens-data/LENS_DATA_SPEC.md#display-name-convention): normalized
  manufacturer, line and camera-body naming.
- **`perspectiveControl`** — [Perspective Control](../src/lens-data/LENS_DATA_SPEC.md#perspective-control): real
  tilt/shift mechanisms and their required catalog metadata.
- **Mirror, telescope, and folded lenses** — [Folded Paths](../src/lens-data/LENS_DATA_SPEC.md#folded-paths) and
  [Reference fixtures](../src/lens-data/LENS_DATA_SPEC.md#reference-fixtures): choose the closest path pattern.
- **Diffractive PF / DO / kinoform surfaces** —
  [Diffractive phase surfaces](../src/lens-data/LENS_DATA_SPEC.md#diffractive-phase-surfaces-diffractive):
  `surfaces[].diffractive`, its coefficient convention and the model's limits.
- **Soft-focus / SA-control rings** —
  [Aberration control](../src/lens-data/LENS_DATA_SPEC.md#aberration-control-aberrationcontrol): `aberrationControl.gaps`.
- **Zoom lenses** — [States](../src/lens-data/LENS_DATA_SPEC.md#states) and
  [Zoom-specific sourcing](../src/lens-data/LENS_DATA_SPEC.md#zoom-specific-sourcing): `zoom.stations[]`,
  `focus.keyframes`, `gaps` and station `nominalFNumber` values. Start from the V2
  [Examples](../src/lens-data/LENS_DATA_SPEC.md#examples). Catalog examples include
  `src/lens-data/nikon/NikonNikkorZ70200f28.data.ts` (constant aperture) and
  `src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts` (variable aperture); read any V1 file through the field map above.
  When a patent omits close-focus rows, follow the inference rule in `agent_docs/gotchas.md`.
- **Source-tabulated stations** — [Published Stations](../src/lens-data/LENS_DATA_SPEC.md#published-stations):
  `zoom.stations[].published` / `.publishedFocus` and `focus.published` drive patent-positions mode.
- **Line indices (`nC` / `nF` / `ng` / `dPgF`)** —
  [Elements](../src/lens-data/LENS_DATA_SPEC.md#elements-elements) spectral-data notes: fields on `ElementV2Input`.
  The backlog is [proprietary-glass-backfill.md](proprietary-glass-backfill.md).

### Mount And Image Format Fields

Use `catalog.lensMounts` and `catalog.imageFormat` when the production system and coverage are clear. Use canonical ids
from `src/utils/catalog/lensTaxonomy.ts` (see `src/lens-data/LENS_MOUNT_FORMAT_OPTIONS.md`); never free-type display labels.

```typescript
catalog: {
  lensMounts: ["nikon-z"],
  imageFormat: "135-full-frame",
},
```

A lens may declare multiple mount ids but only one image-format id. Leave ambiguous historical variants unset and add a
note to [lens-mount-format-backfill.md](lens-mount-format-backfill.md) instead of guessing.

### Semi-Diameter Troubleshooting

Surface `sd` values are the most common source of validation and rendering failures. If validation fails on an SD check
(edge thickness, rim slope, cross-gap overlap, conic height), read the semi-diameter guidelines in
`src/lens-data/TEMPLATE.data.ts.template` and the [Validation Rules](../src/lens-data/LENS_DATA_SPEC.md#validation-rules) and
[Data Sourcing Checklist](../src/lens-data/LENS_DATA_SPEC.md#data-sourcing-checklist), which
define the slope-based rim check, the SD-ratio sanity limit, the `checks.gapSagFrac` cross-gap rule, and the hidden-trim limit
that production render tests enforce.

After the SDs validate, compare the rendered silhouette against any published optical section from the maker. If the
prescription still reads too flat or stretched, use per-lens layout tuning (`layout.scFill`, `layout.yScFill`,
and only when truly needed `layout.maxAspectRatio` or `layout.lensShiftFrac`) to match the published proportions. Never use layout tuning to hide bad
surface data or invalid SDs.

### Validation

`buildLens()` is the author-facing validation/build entry point; it ingests and validates the prescription and throws a
descriptive error listing every issue. Lens files never gain engine-selection or trace-mode fields. The complete check
list is in [Validation Rules](../src/lens-data/LENS_DATA_SPEC.md#validation-rules); embedded stops
(`stopPlacement: "inside-element"` with an element `span`) follow
[Stop and Aperture](../src/lens-data/LENS_DATA_SPEC.md#stop-and-aperture).

Corpus tests add policy checks beyond the runtime validator: cross-lens author and assignee spelling, the
analysis-file metadata/section floor, catalog integrity, and production render diagnostics
([Corpus sweeps](../src/lens-data/LENS_DATA_SPEC.md#corpus-sweeps)). Per-lens patent metadata rules are the
validator's. Passing a single `buildLens()` call is therefore necessary but not the complete integration gate;
`npm run test` is.

Those corpus sweeps are the only tests a new lens needs — see "Per-Lens And Audit Test Retention" in
[architecture/testing.md](architecture/testing.md) before adding any test file.
