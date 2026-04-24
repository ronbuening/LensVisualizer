# Hologon Modeling Proposals

## Goal

Model the Carl Zeiss Hologon 15 mm f/8 with a silhouette that matches the
patent section more closely, without weakening validation for the rest of the
catalog.

## Current blockers

### 1. `sd` is doing two jobs

Today each surface `sd` acts as both:

- the optical clear semi-diameter used for tracing and validation
- the rendered outline limit used to draw the glass body

That works for most lenses, but the Hologon patent drawing is more of a
mechanical section than a pure clear-aperture diagram. Its outer shells want a
larger rendered body than the current optical `sd` limits allow.

### 2. The embedded stop is modeled as a fake split element

The Hologon stop sits inside the center element. The current model represents
that by splitting the positive element into `L_IIa` and `L_IIb` around `STO`.
This is good enough for tracing, but it makes validation treat the two halves
as ordinary physical elements, which constrains how broad the center shoulders
can be.

### 3. The rim-slope limit is conservative for extreme menisci

The validator rejects surfaces whose rim slope exceeds the global threshold in
`src/optics/internal/surfaceMath.ts`. On the Hologon, the inner meniscus
surfaces hit that limit almost immediately, especially `r2`.

### 4. Render diagnostics trim to validation-safe geometry

Even when a larger silhouette would be acceptable visually, the renderer trims
surfaces back to the validation-safe envelope. That keeps the catalog robust,
but it prevents intentionally oversized body outlines for a lens like the
Hologon.

## Recommended changes

### Option 1. Separate optical and render semi-diameters

Add an optional render-only field, for example:

- `sd`: optical clear semi-diameter used for tracing and validation
- `renderSD`: body outline semi-diameter used only by the SVG renderer

This would be the cleanest way to match patent drawings that show fuller
mechanical glass outlines than the modeled optical aperture.

### Option 2. Treat stop-split halves as one physical element in validation

Teach the validator to recognize an internal-stop split and skip or relax the
front/rear SD-ratio sanity check across `STO` when both halves are marked as
belonging to the same physical element.

That would let the Hologon's center lens keep a narrow physical stop while
still having broad rendered shoulders.

### Option 3. Add a per-lens rim-angle override

The default rim-slope ceiling is a sensible catalog-wide guardrail, but the
Hologon is an edge case by design. A per-lens override such as
`maxRimAngleDeg` already exists; we could allow selected lenses to opt into a
slightly higher value after targeted testing.

This is the smallest code change, but it is also the least principled if used
alone.

### Option 4. Add mechanical outline metadata

If we want to match patent sections more literally, we could add optional
mechanical-profile hints such as:

- flat truncation planes
- render-only shoulder widths
- per-element body scaling

This would let the Hologon's patent drawing be reproduced faithfully without
pretending the full drawn silhouette is the optical clear aperture.

## Suggested implementation order

1. Add `renderSD` support to the renderer and diagnostics.
2. Relax validation across internal-stop element splits.
3. Revisit whether the Hologon still needs a per-lens rim-angle override.
4. Only add richer mechanical outline metadata if `renderSD` is not enough.

## Why this order

The first two steps solve the actual modeling mismatch while keeping the rest
of the catalog strict. They also generalize well to other lenses with embedded
stops, unusually thick menisci, or patent drawings that emphasize the glass
body more than the clear aperture.
