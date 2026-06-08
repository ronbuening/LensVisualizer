# Mount Diagrams — architecture

The mount-diagram subsystem renders **camera/lens mount interface** diagrams (the physical bayonet/
thread interface — throat, flange, bayonet lugs/slots, lock pin/notch, electrical contacts,
mechanical couplings, axial register) as inline SVG, from structured per-mount data. It is separate
from the lens cross-section engine: lens diagrams are profile-based side views; mount diagrams are
polar/annular front and rear views plus an axial register schematic.

Diagrams appear on the `/mounts/:id` pages (live, SSR-prerendered) and as a committed static
reference artifact. It implements the Lens Mount SVG Specification Package, schema version **1.3**.

## Where things live

| Concern | Location |
|---|---|
| Per-mount data (`satisfies MountSpecInput`) | `src/mounts/<mount-id>.mount.ts` |
| Registry barrel (`MOUNT_SPECS`) | `src/mounts/index.ts` |
| TypeScript contract | `src/types/mount.ts` (`MountSpec` / `MountSpecInput`) |
| Published JSON Schema | `src/mounts/lens-mount.schema.json` |
| Authoring guide | `src/mounts/MOUNT_SVG_SPEC.md` |
| Pure geometry + renderer | `src/optics/mount/` (no React) |
| React components | `src/components/mount/` (`MountDiagram`, `MountDiagramPanel`) |
| Page cross-link sidebars | `src/components/content/LinkListSidebar.tsx` (maker→mounts, mount→makers) |
| Report generator | `__tests__/src/optics/mount/mountSvgSpecificationsReport.test.ts` |
| Generated artifacts (committed) | `agent_docs/generated/lens-mount-svg-specifications.md`, `agent_docs/generated/mounts/*.svg` |

Mount ids are the canonical `LensMountId` values from `src/utils/catalog/lensTaxonomy.ts` (the same
ids lens data uses in `lensMounts`). `mountId` is typed as `LensMountId`, so an invalid id fails to
compile.

## Data contract (types ↔ schema)

`src/types/mount.ts` is the in-repo, enforced contract; `lens-mount.schema.json` is the published
artifact. They are the same contract twice and **must be edited together** — there is no codegen.
The project does **not** run ajv: conformance is guaranteed because the emitted JSON block is derived
from the typed object, and relational rules are enforced by `src/optics/mount/validateMountSpec.ts`
(profile-id discipline, base/variant model, source-ref resolution, the "every live URL has an
archived snapshot + ISO date" rule, numeric ranges). Every numeric dimension is a value envelope
`{ value, status, sourceRefs }`; enum *values* are snake_case, object keys camelCase.

## Engine (`src/optics/mount/`)

Pure, deterministic, returns drawable output (mirrors the "geometry returns strings, React renders
them" split used by the lens engine):

- `polar.ts` — polar/annular path builders (12 o'clock = 0°, clockwise positive).
- `mirror.ts` — the lens-rear transform `θ → (360 − θ) mod 360`, the single source of truth.
- `round.ts` — `fmt()`; all coordinates funnel through it (3-decimal, deterministic).
- `viewBox.ts` — bounding box + 0.1 margin, rounded outward to whole mm.
- `category.ts` — feature-category color palette (drives element color).
- `style.ts` — status → stroke dash (provenance).
- `layers.ts` — fixed layer order + feature→layer classification.
- `axialSection.ts` — the z/r register schematic (sensor plane at `z = −flangeFocalDistance`).
- `value.ts` / `defaults.ts` / `authoring.ts` — envelope readers, `normalizeMountSpec()`, authoring
  helpers (`v`, `unknownV`, `naV`, `dirV`, `degListV`).
- `renderMount.ts` — `buildMountSvgDoc(spec, profileId, view)` → a renderer-agnostic `MountSvgDoc`.
- `toSvgString.ts` — `mountSvgDocToString(doc)` → a deterministic standalone `<svg>` string.
- `emitMountJson.ts` — serializes the spec to the schema's machine block.

`buildMountSvgDoc` is the single computation behind both the static string serializer and the React
component, so the committed SVG and the on-page SVG match.

## Conventions

- **Coordinates:** mm + degrees; `z = 0` at the flange datum; `+z` toward the lens; `0°` at 12
  o'clock from the camera front, clockwise positive. ALL angles (body and lens) are stored in the
  camera-front frame; the lens-rear view applies the mirror at render time and never writes mirrored
  angles back. The transform is validated against the Nikon F mounting index (left-right reflection)
  in the test suite (package §4.1 gate).
- **Determinism:** 1 SVG user unit = 1 mm (no rescale); layers emit in fixed order; features sort by
  `[centerAngle, featureId]`; coordinates rounded to 3 decimals → byte-identical regeneration.
- **Color vs provenance:** feature *category* drives color (theme-independent palette, so the live
  and static figures match); value *status* drives the stroke dash (dotted = photo-scaled/unknown).
- **Base/variant profiles:** evolved mounts keep an invariant `<id>/base` plus named variant overlays
  (e.g. `nikon-f/ai-s`); features carry a `profileId` and the renderer draws base + the selected
  variant. Geometry is never averaged across eras. Non-evolved mounts declare `base_only`.

## UI

- `src/components/mount/MountDiagram.tsx` consumes a `MountSvgDoc` and renders JSX (inline styles,
  color from category, dash from status).
- `src/components/mount/MountDiagramPanel.tsx` owns the camera-front / lens-rear view tiles, the
  base/variant profile selector, and the feature-category legend. It is rendered by
  `src/pages/MountPage.tsx` when `MOUNT_SPECS[mountId]` exists (graceful: pages without a spec show
  no panel). The axial view is computed by the engine but not shown on the page.
- `src/components/content/LinkListSidebar.tsx` is a small cross-link panel reused on two pages:
  `/makers/:maker` lists the mounts that maker's lenses use (deduplicated `lensMounts`), and
  `/mounts/:id` lists the makers with lenses for that mount. It reuses the `ArticleTOC` panel format and
  renders the panel only. `src/components/content/SidebarLayout.tsx` places it: a sticky column beside
  the content on wide viewports (≥1200 px) and stacked above the content on narrow ones. The stacked
  layout is the SSR/first-client-render default, so the links are always SSR-rendered and crawlable.

## Generator + serving

- `npm run generate:mount-svgs` runs the report test, which renders every spec × view and writes the
  committed `lens-mount-svg-specifications.md` + per-view `.svg` files. Deterministic (no volatile
  timestamps), so regeneration yields clean diffs. These are documentation artifacts — nothing in the
  app imports or serves them.
- The **live** `/mounts/:id` diagrams are not served from any file: the React components render from
  `MOUNT_SPECS` at runtime and `prerender.mjs` bakes the SVG inline into the page HTML.

## Adding a mount

1. Author `src/mounts/<mount-id>.mount.ts` (`satisfies MountSpecInput`; mount id from
   `lensTaxonomy.ts`) — see `src/mounts/MOUNT_SVG_SPEC.md` and copy an existing file.
2. Source every numeric dimension (value envelope + archived citation); use `photo_scaled`/`unknownV`
   for what you can't confirm rather than guessing, and record gaps in `openQuestions`.
3. Register it in `src/mounts/index.ts`.
4. `npm run typecheck && npm run test` (the cross-mount suite validates every spec, including the
   mirror gate), then `npm run generate:mount-svgs` to refresh the committed artifacts.

Edit `src/types/mount.ts` and `src/mounts/lens-mount.schema.json` together when changing the contract.
