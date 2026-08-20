# Audit Log - CANON RF 600mm f/11 IS STM

Patent: JP 2020-173349 A, Numerical Example 1 / Figure 1

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 15, Figure 1, at 600 dpi with an explicit axis override to exclude the unit brackets and focus annotation.
- The calibrated scale was 160.70 µm/px. The front DO pair measures about 26.4 mm versus 29.0 mm, and the rear L3 group measures about 8.4 mm versus 8.2-8.3 mm, so both were retained.
- E3 measures 12.2 mm against the initial 16.5 mm model, and E4 is bracketed at about 10.9-12.7 mm against 15.8 mm. The high-resolution optical outlines support tightening E3 to 12.2 mm and E4 conservatively to 12.7 mm.

| Surfaces | Element | Before | After | Evidence |
|---|---|---:|---:|---|
| 4 / 5 | E3 | 16.5 mm | 12.2 mm | Figure 1 RIM and ENV agree at 12.2 mm |
| 6 / 7 | E4 | 15.8 mm | 12.7 mm | Figure 1 optical envelope; RIM under-reads the thin edge at 10.9 mm |

The pupil-calibrated stop remains 8.31053 mm. The revised prescription passes the surface validator and image-circle floor.

### Glass classification

- The patent publishes nd/νd coordinates but no vendor names or line indices. The ten elements therefore retain their six-digit patent coordinates and now identify the compatible catalog material used as each spectral proxy.
- Existing compatible full-coefficient catalog curves cover all 10/10 elements without relaxing the Δn ±0.003 / Δν ±2 guards; production suppliers remain explicitly unspecified.
- No new catalog row is supported or needed, and the lens has no coordinate mismatch.

### Identity and metadata

- Verified the display name `CANON RF 600mm f/11 IS STM` against Canon's product identity and the repository's spacing policy.
- Verified the front-page inventors 横谷 真樹 and 井野 友裕 and stored the family-publication romanizations Maki Yokoya and Tomohiro Ino.
- Normalized the front diffractive pair's diagram/cemented label to `DOE`, matching the patent terminology while retaining Canon's product-level `DO` wording in the analysis sources.
- Verified the Figure 1 focus arrow and paragraph 0036 against the runtime motion profile: only L2 moves, by -14.94 mm objectward; the lens has no zoom travel.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonRF600mmf11ISSTM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonRF600mmf11ISSTM.data.ts` - passed, 0 undersized.
