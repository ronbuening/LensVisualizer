# Adding a New Lens

## Quick Steps

1. Copy `src/lens-data/TEMPLATE.data.js.template` to `src/lens-data/YourLens.data.js`
2. Fill in the lens data following the template's inline field documentation
3. Optionally add `src/lens-data/YourLens.analysis.md` for the description panel
4. Run `npm run test` to verify validation passes
5. Done — `import.meta.glob` auto-registers all `src/lens-data/*.data.js` files

No manual imports or catalog edits required.

## Reference Documents

- **Full format specification:** `src/lens-data/LENS_DATA_SPEC.md`
- **Annotated template:** `src/lens-data/TEMPLATE.data.js.template`
- **Shared defaults:** `src/lens-data/defaults.js`

## Key Details

### Auto-Registration

`src/utils/lensCatalog.js` uses `import.meta.glob` to discover all `*.data.js` files in `src/lens-data/`. Each file must default-export a `LENS_DATA` object with a unique `key` field. Analysis files are matched by `*.analysis.md` glob.

### Defaults Merge

Shared defaults from `src/lens-data/defaults.js` are merged automatically under each lens. Only override values in your `.data.js` that differ from defaults (e.g., `svgW`, `svgH`, `maxRimAngleDeg`).

### Naming Conventions

- Lens data: `*.data.js` (required for auto-registration)
- Analysis: `*.analysis.md` (optional, matched by name prefix)
- Set `visible: false` in the data object to hide a lens from the UI

### Semi-Diameter Troubleshooting

Surface `sd` values are the most common source of rendering bugs. If validation fails on SD-related checks (edge thickness, SD consistency, sd/|R| ratio, cross-gap overlap, conic height limits), see the Semi-Diameter Guidelines section in `src/lens-data/TEMPLATE.data.js.template` for detailed constraints and examples.

### Validation

`buildLens()` calls `validateLensData()` internally. Malformed data throws descriptive errors listing all issues. The validator checks: required fields, surface label uniqueness, element ID references, STO surface presence, edge thickness, SD consistency, sd/|R| ratio (max 0.90), cross-gap overlap, and conic height limits (K > 0).
