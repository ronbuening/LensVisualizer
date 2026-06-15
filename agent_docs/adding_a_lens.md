# Adding a New Lens

## Quick Steps

1. Copy `src/lens-data/TEMPLATE.data.ts.template` to `src/lens-data/YourLens.data.ts`
2. Fill in the lens data following the template's inline field documentation
3. Optionally add `src/lens-data/YourLens.analysis.md` beside the data file for the description panel
4. Run `npm run typecheck && npm run format:check && npm run test` to verify types, formatting, and validation pass
5. Done — the lens pipeline auto-registers all `src/lens-data/**/*.data.ts` files
6. `npm run generate:metadata` and `npm run build` automatically move any root-level lens files into the correct maker folder and rewrite the `LensDataInput` import for the nested path

No manual imports or catalog edits required.

## Reference Documents

- **Full data-file format specification:** `src/lens-data/LENS_DATA_SPEC.md`
- **Companion analysis-file format:** `src/lens-data/LENS_ANALYSIS_SPEC.md` — required skeleton, conditional sections, voice and conventions for `*.analysis.md`.
- **Annotated template:** `src/lens-data/TEMPLATE.data.ts.template`
- **Shared defaults:** `src/lens-data/defaults.ts`
- **Mirror/folded reference fixtures:** `src/lens-data/reference/*.data.ts` — hidden synthetic examples for first-surface mirrors, annular obstructions, Mangin-style second-surface mirrors, Newtonian side focus, Cassegrain/Gregorian/Maksutov-style folded paths, and annular blocker behavior.
- **Mirror fixture authoring report:** `agent_docs/generated/mirror-fixtures.generated.md` — regenerate with `npm run generate:mirror-reports` after changing hidden mirror/telescope fixtures.
- **Mount/format backfill status:** [lens-mount-format-backfill.md](lens-mount-format-backfill.md)
- **Re-auditing an existing lens against its patent:** [lens-patent-audit.md](lens-patent-audit.md) — use this when revisiting a data file already in the catalog, not when authoring a new one.

## Key Details

### Auto-Registration

`src/utils/catalog/lensCatalog.ts` uses `import.meta.glob` to discover all `*.data.ts` files anywhere under `src/lens-data/`. Each file must default-export a `LENS_DATA` object with a unique `key` field and use `satisfies LensDataInput` for compile-time type checking. Analysis files are matched by the same relative stem path with a `.analysis.md` suffix.

### Defaults Merge

Shared defaults from `src/lens-data/defaults.ts` are merged automatically under each lens. Only override values in your `.data.ts` that differ from defaults (e.g., `svgW`, `svgH`, `maxRimAngleDeg`).

### Maker Field

Set `maker` to the manufacturer name (e.g. `"Nikon"`, `"Voigtländer"`, `"Carl Zeiss"`). This is used for maker pages (`/makers/:slug`) and SEO metadata. If omitted, `lensMetadata.ts` derives the maker from the lens `name` via prefix matching against `MAKER_PREFIXES`. Explicit `maker` is preferred for accuracy — especially for lenses whose `name` doesn't start with a recognized prefix.

### Display Name

Set `name` to the normalized UI title, not a raw source-title copy. Start with the public-facing manufacturer in all caps,
then the all-caps lens branding or optical line, then separated mount/system tokens, focal length, aperture, and
characteristics:

```typescript
name: "NIKON NIKKOR Z 50mm f/1.8 S",
name: "FUJIFILM FUJINON XF 23mm f/2 R WR",
name: "CANON RF 24-105mm f/2.8 L IS USM Z",
```

Avoid run-together forms such as `XF23mmF2`, `RF24-105mm`, `f/2.8L`, or `F1.4`. For fixed-lens cameras, keep the
lens name first and put the camera body in parentheses:

```typescript
name: "FUJIFILM SUPER EBC FUJINON 60mm f/4 (Fujifilm GA645 Professional)",
```

### Mount And Image Format Fields

Use `lensMounts` and `imageFormat` when the production system and coverage are clear. Values must be canonical ids from
`src/utils/catalog/lensTaxonomy.ts`; see `src/lens-data/LENS_MOUNT_FORMAT_OPTIONS.md` for the available options and do not
free-type display labels.

```typescript
lensMounts: ["nikon-z"],
imageFormat: "135-full-frame",
```

A lens may declare multiple mount ids, but only one image-format id. Leave ambiguous historical variants unset and add a
note to [lens-mount-format-backfill.md](lens-mount-format-backfill.md) instead of guessing.

### Naming Conventions

- Lens data: `*.data.ts` (required for auto-registration, typed with `satisfies LensDataInput`)
- Analysis: `*.analysis.md` (optional, matched by the same relative stem path as the `.data.ts` file)
- Set `visible: false` in the data object to hide a lens from the UI

### Perspective-Control Lenses

Only real tilt/shift or perspective-control lenses should declare `perspectiveControl`. Ordinary lenses omit the field
and default to no SHIFT/TILT controls.

```typescript
perspectiveControl: {
  shiftRangeMm: [-11.5, 11.5],
  tiltRangeDeg: [-8.5, 8.5],
  shiftStepMm: 0.1,
  tiltStepDeg: 0.1,
},
```

Ranges must be finite, ascending, and include zero. Use official manufacturer sources when available and leave the source
URL in a nearby comment. The v1 movement layer is a 2D meridional visualization: it shifts/tilts rendered geometry and
rays relative to the fixed IMG plane, while analysis drawer diagnostics remain centered-lens calculations.

### Mirror, Telescope, And Folded Lenses

Ordinary refractive camera lenses should omit `opticalPath`, `interaction`, and `innerSd`. Add those fields only when a
surface actually reflects, blocks, uses an annular active aperture, repeats in the ray path, or images onto a non-default
plane.

Use `src/lens-data/LENS_DATA_SPEC.md` as the source of truth, and start from the reference fixture closest to the design:

- `ReferenceSphericalPrimaryMirror.data.ts` for a first-surface primary and front image plane.
- `ReferenceAnnularObscuredMirror.data.ts` for annular clear apertures and central obstruction-aware sampling.
- `ReferenceManginSecondSurfaceMirror.data.ts` for a second-surface mirror with an explicit repeated hit order.
- `ReferenceNewtonianSideFocus.data.ts` for automatic next-surface selection, a tilted diagonal secondary, and a side image plane.
- `ReferenceCassegrainBackFocus.data.ts` for obstruction plus folded back-focus behavior.
- `ReferenceGregorianSecondary.data.ts` for Gregorian secondary behavior and declared back focus.
- `ReferenceMaksutovCassegrainMeniscus.data.ts` for refractive meniscus plus folded mirror path.
- `ReferenceAnnularRingBlocker.data.ts` for annular blocker behavior.

Authoring rules that matter most:

- Keep `surfaces` in physical axial order. Use `opticalPath.surfaceOrder` when the ray hit order is known and not the same as the list order; labels may repeat.
- Use `opticalPath.mode: "auto"` only when nearest-valid-surface selection is required. Set a conservative `maxInteractions` so an invalid folded path cannot loop; for explicit `surfaceOrder`, it must still cover every listed hit plus image-plane termination.
- Put `opticalPath.imagePlane` wherever the design really images. For side focus, set both `y` and a non-axial `normal` such as `{ z: 0, y: 1 }`.
- Use `interaction.normal` for tilted flat fold mirrors. Put the same normal on the passive backing plane so the SVG element renders at the physical angle.
- Use `mirrorKind: "second-surface"` for substrate-backed coatings. The diagram draws those coating surfaces as dashed accents, but ray behavior still comes entirely from `interaction.type`, `incidentSide`, and the resolved optical path.
- Use `innerSd` for annular active surfaces. Keep paired mirror/backing `innerSd` values consistent, and use a separate `interaction: { type: "block" }` surface for a solid central obstruction.
- Do not hand-tune `rayFractions` or pupil constants to compensate for a folded path. Folded off-axis rays now solve stop and image-plane geometry through the generalized tracer; fix the physical path metadata instead.
- Run `npm run generate:mirror-reports` after adding or materially changing a hidden mirror fixture so the generated authoring matrix stays current.
- Expect analysis guardrails: mirror-safe spherical aberration and related blur helpers can run, while tabs that still assume a sequential front-to-rear paraxial model are hidden for folded systems.

### Aberration-Control Lenses

For lenses with a real soft-focus or spherical-aberration-control ring, declare `aberrationControl` instead of folding
that motion into focus `var`. The field is a normalized slider from 0 to 1 with lens-specific labels and one or more
controlled surface spacings:

```typescript
aberrationControl: {
  label: "SOFT",
  minLabel: "0",
  maxLabel: "3",
  var: {
    "9": [2.074, 6.962],
    "11": [64.427, 53.951],
  },
  varLabels: [
    ["9", "D(B0)"],
    ["11", "BF"],
  ],
},
```

Use this only for an independent optical control, not for ordinary floating focus. The base surface table should match
the minimum/sharp setting, and every controlled surface's first value must match its surface `d`.

### Semi-Diameter Troubleshooting

Surface `sd` values are the most common source of rendering bugs. If validation fails on SD-related checks (edge thickness, rim slope, cross-gap overlap, conic height limits), see the Semi-Diameter Guidelines section in `src/lens-data/TEMPLATE.data.ts.template` for detailed constraints and examples. The rim slope check uses actual aspherical slope at the SD (via `sagSlopeRaw`), not the old spherical `sd/|R|` proxy — aspherical surfaces (especially K near −1) can use larger SDs. Cross-gap overlap is checked against the two boundary surfaces that face each other: combined sag intrusion must not exceed `gapSagFrac × gap` (`gapSagFrac` defaults to 0.90 and must be ≤ 1), leaving visible clearance. Rendering uses the same rim-slope and cross-gap policy as validation, and production tests fail if `computeElementRenderDiagnostics()` would hide more than 0.25 mm of a surface.

After the SDs validate, compare the rendered silhouette against any published optical section from the maker. If the prescription still reads too flat or stretched, use per-lens layout tuning (`scFill`, `yScFill`, and only when truly needed `maxAspectRatio` or `lensShiftFrac`) to match the published proportions. Do not use layout tuning to hide bad surface data or invalid SDs.

### Validation

`buildLens()` is still the author-facing validation/build entry point. It now routes through the Optics 2 compatibility
builder, but lens files do not gain any new engine-selection fields or trace-mode settings. Malformed data throws
descriptive errors listing all issues. The validator checks: required fields, canonical mount/format ids when present,
surface label uniqueness, element ID references, STO surface presence, edge thickness, SD ratio (max 3.0 sanity check),
rim slope (actual aspherical slope at SD, threshold 64.2°), cross-gap overlap (at all zoom positions for zoom lenses),
and conic height limits (K > 0). Rare designs with the aperture stop physically inside a glass element use
`stopPlacement: "inside-element"` on `STO` and `fromSurface`/`toSurface` on the containing element; see
`src/lens-data/LENS_DATA_SPEC.md` for the embedded-stop rules.

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

**File header:** Document which gaps are zoom-only vs zoom+focus, and note any non-monotonic (reversing) groups. See the header in `src/lens-data/nikon/NikonNikkorZ70200f28.data.ts` for an example.

**Variable-aperture zooms:** If the lens has a variable maximum aperture (e.g., f/4.5-5.6), set `nominalFno` to an array with one value per zoom position:
```typescript
zoomPositions: [103.09, 388.17],
nominalFno:    [4.5,    5.76],    // f/4.5 at wide, f/5.76 at tele
```
For constant-aperture zooms (e.g., f/2.8), keep `nominalFno` as a single number. See `src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts` for a working variable-aperture example.

**Zoom-specific validation:**
- `zoomPositions` must be monotonically increasing finite numbers
- `var` pair count must match `zoomPositions.length`
- `nominalFno` array length (if array) must match `zoomPositions.length`
- Surface `d` must match `var[label][0][0]` (first zoom position, infinity focus)
- Cross-gap overlap is checked at every zoom position

**References:** Zoom Lens Fields section in `src/lens-data/LENS_DATA_SPEC.md`, zoom fields section in the template, `src/lens-data/nikon/NikonNikkorZ70200f28.data.ts` (constant-aperture zoom), and `src/lens-data/nikon/NikonNikkorZ100400f4556.data.ts` (variable-aperture zoom).

## Capturing nC / nF / ng during authoring

When the patent embodiment lists per-element line indices (typically `nC`, `nF`, sometimes `ng`) alongside the standard `nd`/`vd`, capture them on the matching `ElementData.spectral` block:

```typescript
spectral: {
  nC: 1.49234,   // C-line (656.3 nm)
  nF: 1.49978,   // F-line (486.1 nm)
  ng: 1.50387,   // g-line (435.8 nm) — optional but recommended for APO designs
  dPgF: 0.0376,  // anomalous partial dispersion deviation (also recorded by the codemod)
}
```

This matters for **proprietary glasses** that won't resolve to the public Sellmeier catalog (Sumita unidentified melts, "phosphate crown ED" placeholders, etc.). The dispersion engine cascade in `src/optics/dispersion.ts` then routes the surface to the `lineIndices` quality tier instead of falling back to the Abbe approximation, and the LCA inset's quality badge reflects the upgrade.

For catalog-resolvable glass strings (`S-FPL51`, `N-BK7`, etc.) you don't need to populate `spectral` — the engine reaches Sellmeier quality directly from the catalog.

The prioritized list of lenses still needing patent line-index backfill lives in [agent_docs/proprietary-glass-backfill.md](proprietary-glass-backfill.md).
