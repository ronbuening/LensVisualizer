# Improvement Suggestions for src/optics/first-order

These notes were created while mapping imports, exports, and file relationships for this folder.

## Import cycles make this area harder to reason about

- Evidence: src/optics/first-order/fNumber.ts -> src/optics/first-order/aperture.ts -> src/optics/layout.ts
- Implementation overview: Move shared constants/types into a lower-level helper, invert UI-to-domain dependencies through function arguments, or introduce a narrow adapter module so each cycle has a clear direction.
- Upstream considerations: Breaking cycles can change initialization order, so preserve exported values and avoid moving side-effectful code without a regression check.
- Downstream considerations: Consumers may rely on barrel exports that currently hide the cycle; keep those barrels stable until imports have migrated.
