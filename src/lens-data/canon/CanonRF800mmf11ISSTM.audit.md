# Audit Log - CANON RF 800mm f/11 IS STM

Patent: JP 2020-173349 A, Numerical Example 2 / Figure 2

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 15, Figure 2, at 600 dpi with an explicit optical-axis override and a crop excluding the image plane.
- The compact figure is crossed by DOE, stop, focus, and group annotations, so several automated ENV/RIM rows are contaminated or under-read. High-resolution inspection shows the modeled front-element, DO-pair, focus-element, and rear-group height order matches Figure 2.
- Retained all surface and stop semi-diameters. The one clean nontrivial row, E5, differs by about 20%, below the audit's strong-evidence threshold, and the image-circle floor reports zero undersized surfaces.

### Glass classification

- Numerical Example 2 publishes only nd/νd coordinates, so the eleven elements retain vendor-neutral coordinate classes rather than speculative production-glass identities.
- Existing compatible catalog curves cover all 11/11 elements within the coordinate guards. No catalog addition is justified, and the ambiguity report correctly records the alternate compatible families.

### Identity and metadata

- Verified the display name `CANON RF 800mm f/11 IS STM` against Canon's product identity and the repository's spacing policy.
- Corrected the first inventor from the transcription error `橋谷 真樹` to the front-page spelling `横谷 真樹`, then stored the family-publication romanizations Maki Yokoya and Tomohiro Ino for repository metadata parity.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonRF800mmf11ISSTM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonRF800mmf11ISSTM.data.ts` - passed, 0 undersized.
