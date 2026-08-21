# Audit Log - CANON EF 600mm f/4 L IS II USM

Patent: US 2011/0090576 A1, Third Numerical Embodiment / Figure 5

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 4, Figure 5, at 600 dpi:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonEF600mmf4LISIIUSM.data.ts patents/US20110090576A1.pdf 4 0.18,0.24,0.70,0.46 --dpi=600`.
- Reliable front optical rims reproduce the patent's tabulated effective diameters: L11 is about 73.45 mm versus
  72.845 mm, L12 is 59.83 mm versus 59.735 mm, L13 is 59.11 mm versus 58.48 mm, and L15 is 41.58 mm versus
  40.385 mm.
- Labels, unit brackets, and the separate rear `G` plate contaminate automated rear measurements. The authored SDs are
  direct halves of the patent's effective-diameter column and remain stronger evidence than those rows.
- Retained all surface and stop semi-diameters. The image-circle floor reports zero undersized surfaces and the surface
  validator reports no geometry errors.

### Glass classification

- Replaced three closed `Unmatched` annotations with vendor-neutral patent coordinate classes: two `835427` elements
  and one `720502` element.
- Existing S-LAH55 and S-LAL10 coefficient-backed curves are coordinate-compatible modeling equivalents. The patent's
  authored `dPgF` values remain authoritative, so no production supplier or exact melt identity is inferred.
- The lens improves from 12/15 to 15/15 strict Sellmeier and trusted-chromatic coverage with no coordinate mismatch.

### Identity and metadata

- Verified the display name `CANON EF 600mm f/4 L IS II USM` against Canon's official product identity and the
  repository's spacing policy.
- Normalized the structured assignee and subtitle to the repository-wide `Canon Inc.` spelling; the analysis retains the
  patent's printed Canon Kabushiki Kaisha wording.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonEF600mmf4LISIIUSM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonEF600mmf4LISIIUSM.data.ts` - passed, 0 undersized.
- `npm run generate:glass-reports` - passed, 8 files / 15 tests.

## 2026-08-21 - Diagram-label and movement follow-up

### Patent-figure review

- Re-inspected Figure 5 at 600 dpi against the site screenshot. The authored semi-diameters remain direct halves of the
  patent's effective-diameter column and are stronger evidence than contaminated figure rows, so no SD changed.
- Replaced numeric element tags with the patent's L11–L25 identifiers, using `a`/`b` only to distinguish physical members
  of cemented patent groups.

### Focus annotation root cause

- The prescription's infinity-to-close gap order was correct, but the diagram's single `LF` annotation combined fixed
  L11–L15 with moving L16. Movement analysis therefore averaged the two and displayed only half the real shift.
- Split the display spans into fixed LF, imageward-moving `L16 FOCUS (−)`, and fixed LR. L16 now reports its full
  +20.112105825 mm imageward translation. This prime lens has no zoom travel.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonEF600mmf4LISIIUSM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonEF600mmf4LISIIUSM.data.ts` - passed, 0 undersized.
