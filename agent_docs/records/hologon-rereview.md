# Hologon 15 mm f/8 Enablement

## Summary

- Flip `ZeissHologon15mmf8` to `visible: true` and add the lens-data primitives the design requires.
- Two unusual properties drove the supporting work: (1) the aperture stop is physically inside the central
  glass element, and (2) it is a 120° rectilinear ultrawide whose paraxial chief-ray bisector under-counts
  the published coverage.

## Changes

- **Types** ([src/types/optics.ts](../../src/types/optics.ts)): added optional `SurfaceData.stopPlacement`,
  optional `ElementData.fromSurface` / `toSurface`, and optional `fullFieldDeg` / `maxTraceFieldDeg` on
  `RectilinearProjectionConfig`. All fields are additive and ignored for ordinary lenses.
- **Build** ([src/optics/buildLens.ts](../../src/optics/buildLens.ts),
  [src/optics/internal/lensState.ts](../../src/optics/internal/lensState.ts)): preserve authored stop SD when
  `STO.stopPlacement === "inside-element"`; build element spans from explicit `fromSurface`/`toSurface`
  endpoints when supplied (require both fields together — partial input falls through to the legacy
  first-matching-elemId path).
- **Projection** ([src/optics/projection.ts](../../src/optics/projection.ts)): new
  `rectilinearProjectionMaxTraceField()` helper; returns `undefined` unless a rectilinear lens declares
  `maxTraceFieldDeg` or `fullFieldDeg`. `buildLens` and `computeFieldGeometryAtState` consume it via
  `helper(projection) ?? halfFieldBisected`, so ordinary rectilinear lenses still use the bisected value.
- **Chief-ray solver** ([src/optics/fieldGeometry.ts](../../src/optics/fieldGeometry.ts)): on
  initial-bracket failure the object-plane solver now scans outward in four doubling attempts (96 samples
  each) mirroring the existing bounding-sphere scan, and tracks `fLo` through bisection so sign flips inside
  the bracket are honored.
- **Validation** ([src/optics/validateLensData.ts](../../src/optics/validateLensData.ts)): rectilinear
  `fullFieldDeg`/`maxTraceFieldDeg` ranges (`fullFieldDeg < 180`, `maxTraceFieldDeg < 89`,
  `maxTraceFieldDeg ≤ fullFieldDeg / 2`); explicit element spans must be ordered, single-`elemId`, and
  contain only flagged internal stops; embedded `STO` must be flat with `nd`/`elemId` matching the
  containing glass; edge-thickness check accumulates `centerThickness` across the span so multi-surface
  elements remain consistent.
- **Lens data**
  ([src/lens-data/carl-zeiss-oberkochen/ZeissHologon15mmf8.data.ts](../../src/lens-data/carl-zeiss-oberkochen/ZeissHologon15mmf8.data.ts)):
  rewrote L_II as one element spanning surfaces 3-4 across an internal flat STO with the f/8 physical
  aperture (0.9375 mm); rebuilt SDs from a patent redraw; corrected `var.6` close-focus from subtractive to
  additive (`4.545 → 5.7612` mm = `15²/(200−15)`); added `maxRimAngleDeg: 84`; added `projection: { kind:
  "rectilinear", fullFieldDeg: 120, maxTraceFieldDeg: 60 }`.
- **Docs**: [LENS_DATA_SPEC.md](../../src/lens-data/LENS_DATA_SPEC.md) and
  [TEMPLATE.data.ts.template](../../src/lens-data/TEMPLATE.data.ts.template) document the new fields;
  [architecture/optics-engine.md](../architecture/optics-engine.md) and
  [adding_a_lens.md](../adding_a_lens.md) reference the rectilinear-coverage override and embedded-stop
  rules; the user-facing changelog gets a single `lens` entry for 2026-05-21.
- **Tests**: production-lens validator suite includes Hologon; new tests cover Hologon build (SDs,
  close-focus shift, half-field, vd table), chief-ray convergence at 30°/35°, diagram element-span
  rendering, and explicit-stop validator accept/reject paths.

## Verification

- `npm run typecheck` — passed
- `npm run lint` — passed
- `npm run format:check` — to run pre-commit
- `npm run test` — 137 files / 1747 tests passed
- One-off validator pass across all 241 lens data files — 0 failures (confirms no production lens trips
  the new STO `nd !== 1.0` guard).

## Follow-ups

- None blocking. If another lens with an internal stop is added later, reuse the same
  `stopPlacement: "inside-element"` + element-span pattern documented in `LENS_DATA_SPEC.md`.
