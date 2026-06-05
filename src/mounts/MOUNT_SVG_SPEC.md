# Mount SVG Specification — authoring guide

How to author a camera/lens **mount** SVG specification (`*.mount.ts`). This is the companion to
[`LENS_DATA_SPEC.md`](../lens-data/LENS_DATA_SPEC.md) for the mount-diagram system, which renders three views per
mount (camera-side front, lens-side rear, axial/register) from structured per-mount data. It implements
the Lens Mount SVG Specification Package, schema version **1.3**.

## Source of truth & the co-edit rule

- **TypeScript types** — [`src/types/mount.ts`](../types/mount.ts) (`MountSpec` / `MountSpecInput`). This is
  the contract the codebase compiles against.
- **JSON Schema** — [`lens-mount.schema.json`](./lens-mount.schema.json), the published, external-facing
  contract. It is **not** linted by ajv in CI; the project enforces the contract through TypeScript
  (`satisfies MountSpecInput` + [`validateMountSpec.ts`](../optics/mount/validateMountSpec.ts)), and the JSON
  block is emitted from the typed object so it conforms by construction.
- **Co-edit rule:** the two files are the same contract expressed twice. Edit `src/types/mount.ts` and
  `lens-mount.schema.json` **together** — there is no codegen between them.
- Mount IDs are owned by [`src/utils/catalog/lensTaxonomy.ts`](../utils/catalog/lensTaxonomy.ts); `mountId`
  is typed as `LensMountId`, so an invalid id fails to compile. Never free-type labels.

## Coordinate convention (fixed)

- Units mm + degrees. `z = 0` at the flange datum; **+z points toward the lens**; the sensor/film plane is
  drawn at `z = −flangeFocalDistance`.
- Angle `0°` at 12 o'clock as viewed from the **camera front**, **clockwise positive**.
- **All** angles — body and lens — are stored in this single camera-front world frame. The lens-rear view
  is produced at render time by the mirror `θ → (360 − θ) mod 360` ([`mirror.ts`](../optics/mount/mirror.ts)).
  Never store mirrored angles. Sectors reverse start/end under the mirror; the renderer handles this.
- Angular span is the clockwise sweep from `start` to `end`, mod 360 (so `350 → 10` is a 20° feature across
  top dead center).

## Value envelopes

Every numeric dimension is an envelope `{ value, status, sourceRefs }` where `value` is a number,
`"unknown"`, or `"not_applicable"`. Use the [`authoring.ts`](../optics/mount/authoring.ts) helpers:

```ts
import { v, unknownV, naV, dirV, degListV } from "../optics/mount/authoring.js";
flangeFocalDistanceMm: v(46.5, "secondary", ["nf-1"]),   // sourced number
startAngleDeg: unknownV(["nf-1"]),                        // labeled placeholder
depthMm: naV(),                                           // not applicable
lockRotationDirection: dirV("counterclockwise", "secondary", ["nf-1"]),
centerAnglesDeg: degListV([30, 102, 174], "photo_scaled", ["nf-1"]),
```

Status tokens (package Section 10): `official`, `measured`, `service_manual`, `secondary`, `patent`,
`photo_scaled`, `conflicting`, `unknown`, `not_applicable`. A value with a provenance token must cite at
least one `sourceRefs` id. Do **not** invent dimensions — use `unknownV`/`photo_scaled` and record the gap
in `openQuestions`.

## Status → stroke language

The drawn stroke encodes status, so figures are self-documenting (legend baked into each SVG):
solid = `official`/`measured`; lighter solid = `service_manual`/`secondary`; long-dash = `photo_scaled`;
dotted placeholder = `unknown`; dash-dot = `conflicting`.

## Base / variant model

For evolved mounts, the base profile (`<id>/base`) holds only **invariant** geometry; named variants
(`<id>/ai-s`, `<id>/kaf2`, …) overlay era-specific features. **Geometry is never averaged across eras.**
Every feature carries a `profileId`; the renderer draws features whose `profileId` is the base or the
selected variant. Declare a non-evolved mount `base_only` with `selectedMvpProfileId === baseProfileId`
(e.g. Canon EF). See [`canon-ef.mount.ts`](./canon-ef.mount.ts) (base-only),
[`nikon-f.mount.ts`](./nikon-f.mount.ts) and [`pentax-k.mount.ts`](./pentax-k.mount.ts)
(base + variants).

## Sources

IEEE-numbered `sourceRefs`. **Every live URL must carry an archived snapshot + ISO-8601 capture date**
(package Section 3) — `validateMountSpec` enforces this. Use the Wayback availability API to get a real
snapshot: `http://archive.org/wayback/available?url=<page>`.

## Determinism

1 user unit = 1 mm (no per-mount rescale). Each viewBox is the feature bounding box + a 0.1 margin, rounded
outward to whole mm. Coordinates are rounded to 3 decimals; layers emit in the fixed order; features sort by
`[centerAngle, featureId]`. Identical input → byte-identical SVG.

## Authoring checklist

1. Copy an existing `*.mount.ts` in this folder ([`src/mounts/`](./)) and set `mountId` (must be a `LensMountId`).
2. Fill `coreDimensions`, `lockGeometry`, `cameraSideFeatures`, `lensSideFeatures`, `axialStack`, and any
   `contacts` / `mechanicalCouplings` / `screwsGasketsBaffles`, each as value envelopes.
3. Number bayonet instances clockwise from the one nearest 12 o'clock (`body-slot-1`, `lens-lug-1`, …) and
   set `matesWith` to the opposite-side feature id.
4. Define the `mvp.profileModel` (base + variants) and set `selectedMvpProfileId`.
5. Add `sourceRefs` (with archived snapshots) and `openQuestions` for any photo-scaled/unknown values.
6. Register the spec in [`index.ts`](./index.ts).
7. Run `npm run typecheck` and `npm run test` (the cross-mount suite validates every spec), then
   `npm run generate:mount-svgs` to refresh `agent_docs/generated/lens-mount-svg-specifications.md` and the
   per-view SVGs.
