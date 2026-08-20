# Audit Log - CANON RF 800mm f/11 IS STM

Patent: JP 2020-173349 A, Numerical Example 2 / Figure 2

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 15, Figure 2, at 600 dpi with an explicit optical-axis override and a crop excluding the image plane.
- The compact figure is crossed by DOE, stop, focus, and group annotations, so several automated ENV/RIM rows are contaminated or under-read. High-resolution inspection shows the modeled front-element, DOE-pair, focus-element, and rear-group height order matches Figure 2.
- The clean E5 row measures about 16.14 mm against the initial 13.5 mm model. Surfaces 8/9 were increased to 16.1 mm to follow the patent rim more closely; all contaminated rows and the pupil-calibrated stop were retained.

| Surfaces | Element | Before | After | Evidence |
|---|---|---:|---:|---|
| 8 / 9 | E5 focus element | 13.5 mm | 16.1 mm | Figure 2 clean ENV/RIM row at about 16.14 mm |

The revised prescription passes the surface validator and image-circle floor.

### Glass classification

- Numerical Example 2 publishes only nd/νd coordinates, so the eleven elements retain their six-digit patent coordinates and now identify the compatible catalog material used as each spectral proxy.
- Existing compatible full-coefficient catalog curves cover all 11/11 elements within the coordinate guards. Production suppliers remain explicitly unspecified; no catalog addition is justified.

### Identity and metadata

- Verified the display name `CANON RF 800mm f/11 IS STM` against Canon's product identity and the repository's spacing policy.
- Corrected the first inventor from the transcription error `橋谷 真樹` to the front-page spelling `横谷 真樹`, then stored the family-publication romanizations Maki Yokoya and Tomohiro Ino for repository metadata parity.
- Normalized the front diffractive pair's diagram/cemented label to `DOE` and the site spec to `S4 DIFFRACTIVE PHASE SURFACE`.
- Verified the Figure 2 focus arrow and paragraph 0036 against the runtime motion profile: only L2 moves, by -17.177214630 mm objectward; the lens has no zoom travel.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonRF800mmf11ISSTM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonRF800mmf11ISSTM.data.ts` - passed, 0 undersized.
