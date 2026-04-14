# Adding a New Lens

## Quick Steps

1. Copy `src/lens-data/TEMPLATE.data.ts.template` to `src/lens-data/YourLens.data.ts`
2. Fill in the lens data following the template's inline field documentation
3. Optionally add `src/lens-data/YourLens.analysis.md` for the description panel
4. Run `npm run typecheck && npm run format:check && npm run test` to verify types, formatting, and validation pass
5. Done — `import.meta.glob` auto-registers all `src/lens-data/*.data.ts` files

No manual imports or catalog edits required.

## Reference Documents

- **Full format specification:** `src/lens-data/LENS_DATA_SPEC.md`
- **Annotated template:** `src/lens-data/TEMPLATE.data.ts.template`
- **Shared defaults:** `src/lens-data/defaults.ts`

## Key Details

### Auto-Registration

`src/utils/lensCatalog.ts` uses `import.meta.glob` to discover all `*.data.ts` files in `src/lens-data/`. Each file must default-export a `LENS_DATA` object with a unique `key` field and use `satisfies LensDataInput` for compile-time type checking. Analysis files are matched by `*.analysis.md` glob.

### Defaults Merge

Shared defaults from `src/lens-data/defaults.ts` are merged automatically under each lens. Only override values in your `.data.ts` that differ from defaults (e.g., `svgW`, `svgH`, `maxRimAngleDeg`).

### Maker Field

Set `maker` to the manufacturer name (e.g. `"Nikon"`, `"Voigtländer"`, `"Carl Zeiss"`). This is used for maker pages (`/makers/:slug`) and SEO metadata. If omitted, `lensMetadata.ts` derives the maker from the lens `name` via prefix matching against `MAKER_PREFIXES`. Explicit `maker` is preferred for accuracy — especially for lenses whose `name` doesn't start with a recognized prefix.

### Naming Conventions

- Lens data: `*.data.ts` (required for auto-registration, typed with `satisfies LensDataInput`)
- Analysis: `*.analysis.md` (optional, matched by name prefix)
- Set `visible: false` in the data object to hide a lens from the UI

### Semi-Diameter Troubleshooting

Surface `sd` values are the most common source of rendering bugs. If validation fails on SD-related checks (edge thickness, rim slope, cross-gap overlap, conic height limits), see the Semi-Diameter Guidelines section in `src/lens-data/TEMPLATE.data.ts.template` for detailed constraints and examples. The rim slope check uses actual aspherical slope at the SD (via `sagSlopeRaw`), not the old spherical `sd/|R|` proxy — aspherical surfaces (especially K near −1) can use larger SDs.

After the SDs validate, compare the rendered silhouette against any published optical section from the maker. If the prescription still reads too flat or stretched, use per-lens layout tuning (`scFill`, `yScFill`, and only when truly needed `maxAspectRatio` or `lensShiftFrac`) to match the published proportions. Do not use layout tuning to hide bad surface data or invalid SDs.

### Validation

`buildLens()` calls `validateLensData()` internally. Malformed data throws descriptive errors listing all issues. The validator checks: required fields, surface label uniqueness, element ID references, STO surface presence, edge thickness, SD ratio (max 3.0 sanity check), rim slope (actual aspherical slope at SD, threshold 64.2°), cross-gap overlap (at all zoom positions for zoom lenses), and conic height limits (K > 0).

### Zoom Lenses

If the patent describes a variable focal-length lens with spacing tables at multiple focal lengths, add zoom fields:

**Required zoom fields:**
- `zoomPositions`: Array of focal lengths in mm (at least 2, monotonically increasing) from the patent's variable spacing table column headers — e.g., `[71.5, 135, 196]`
- `var` format change: Each value becomes an array of `[d_inf, d_close]` pairs, one per zoom position (instead of a single pair for primes)

**Optional zoom fields:**
- `zoomStep`: Zoom slider step size (default `0.004`)
- `zoomLabels`: Endpoint labels — e.g., `["Wide", "Tele"]`

**Zoom-only vs zoom+focus gaps:**
- Gaps that only change with zoom (no focus variation): use identical inf/close values — e.g., `[[1.0, 1.0], [3.0, 3.0]]`
- Gaps that change with both zoom and focus: use different inf/close values at each position

**If the patent omits close-focus rows:**
- Keep the zoom-only gaps identical inf/close as usual
- For the actual focusing gaps, it is acceptable to infer close-focus pairs from production MFD or a traced calibration when the patent only publishes infinity data
- Preserve the mechanism constraint described by the optical layout; for a single translating group, that usually means the adjacent-gap sum stays constant at each zoom position
- Document the approximation in the file header and `focusDescription`, and explain it in the `.analysis.md` when the focus model matters to the write-up

**File header:** Document which gaps are zoom-only vs zoom+focus, and note any non-monotonic (reversing) groups. See the header in `src/lens-data/NikonNikkorZ70200f28.data.ts` for an example.

**Variable-aperture zooms:** If the lens has a variable maximum aperture (e.g., f/4.5-5.6), set `nominalFno` to an array with one value per zoom position:
```typescript
zoomPositions: [103.09, 388.17],
nominalFno:    [4.5,    5.76],    // f/4.5 at wide, f/5.76 at tele
```
For constant-aperture zooms (e.g., f/2.8), keep `nominalFno` as a single number. See `src/lens-data/NikonZ100400f4556.data.ts` for a working variable-aperture example.

**Zoom-specific validation:**
- `zoomPositions` must be monotonically increasing finite numbers
- `var` pair count must match `zoomPositions.length`
- `nominalFno` array length (if array) must match `zoomPositions.length`
- Surface `d` must match `var[label][0][0]` (first zoom position, infinity focus)
- Cross-gap overlap is checked at every zoom position

**References:** Zoom Lens Fields section in `src/lens-data/LENS_DATA_SPEC.md`, zoom fields section in the template, `src/lens-data/NikonNikkorZ70200f28.data.ts` (constant-aperture zoom), and `src/lens-data/NikonZ100400f4556.data.ts` (variable-aperture zoom).
