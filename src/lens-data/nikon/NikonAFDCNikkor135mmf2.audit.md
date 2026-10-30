# Audit Log — Nikon AF DC-Nikkor 135mm f/2D

Patent: US 4,908,639 A, Example 2 / Figure 4.

## 2026-08-06 — New-lens patent-figure and glass audit

- Rendered patent page 6, rotated Figure 4 to the project orientation, and compared its element envelopes with the stored section. The reliable normalized measurements agree within approximately 14%; no SD change was warranted.
- All stored SDs pass the image-circle floor and surface-geometry checks in every authored focus/DC state.
- Added first-party HIKARI formula-3 records for J-SK16, J-LAF7, J-SF8, and J-LASFH2. Relabeled L7 as a J-LASF017 optical equivalent to patent coordinate `797454`; the production supplier remains unspecified.
- Corrected the display name to Nikon's `NIKON AF DC-NIKKOR 135mm f/2D` designation.

## 2026-08-06 — Screenshot display and element-label audit

- Rechecked the supplied viewer screenshot against Example 2 / Figure 4. The seven element forms, front cemented junction, all-spherical flag, and stored semi-diameters remain source-consistent in every authored focus/DC state; both focused geometry audits pass.
- Added patent identifiers `L1` through `L7` to the diagram and removed the source-foreign displayed `D1` cemented-pair shorthand; the inspector identifies that pair as `L1/L2` without competing with the patent's published distance symbols.
- Reconfirmed `NIKON AF DC-NIKKOR 135mm f/2D` and the romanized inventor name Masaaki Yanagisawa. No unsupported APD classification was introduced.


## 2026-10-29 — F-mount surface and glass reinspection

Fresh direct Figure 4 review: `patents/US4908639.pdf`, PDF page 6, rendered at 600 dpi and rotated. The duplicate local `US4908639-2.pdf` has the same SHA-256 bytes. Native page raster 300 dpi; the approximately 1896 px S1–S13 span at 600 dpi over 97.5882 mm gives about 19.43 px/mm, or 9.71 native px/mm. Every convex/concave face and the front cemented boundary were inspected.

L3’s rear S5 curve continues to the same drawn height as its front S4, without a cap-end stroke. Its inferred sd increases 23.3→26.0 mm to match that full curved outline, with no invented flat seat. This changes an inferred clear aperture, not a source prescription value. S7 has a resolved concave rear seat on L4: its 20.5 mm optical cap stays fixed and an opaque extension reaches the 23.3 mm outer rim. The adopted cap differs slightly from the approximate source curve endpoint, within the existing silhouette/raster qualification. No additional resolved concave air-face break supports another cut; cemented S2 and the remaining faces are retained. Source optics, stop placement, focus/DC controls and geometry policy remain unchanged.

Fresh source glass review: `patents/US4908639.pdf`, Example 2 Table 2 on PDF page 12 and its continuation/four-state spacings on page 13; d-line convention at the top of page 12. All 7 lens-media nd/νd pairs match the source and retain its d-line convention (587.6 nm). No source θgF/partial-dispersion, extra spectral-line indices or glass-dispersion coefficient table is published; no APD flag or spectral datum is inferred from the source. Removed six sets of catalog-only nC/nF/ng/dPgF overrides (L1–L6), allowing the existing compatible coefficient-backed curves to supply spectra. L2’s current S-TIM22 curve differs from the exact native pair and is now labeled a qualified proxy rather than an exact source material; no curve or source nd/νd was changed.

| Medium | Source nd / νd | Current coefficient-backed proxy |
|---|---|---|
| L1 | 1.620409 / 60.14 | J-SK16 |
| L2 | 1.648311 / 33.75 | S-TIM22 |
| L3 | 1.713000 / 53.93 | J-LAK8 |
| L4 | 1.749501 / 35.19 | J-LAF7 |
| L5 | 1.688930 / 31.08 | J-SF8 |
| L6 | 1.766840 / 46.8 | J-LASFH2 |
| L7 | 1.796681 / 45.37 | J-LASF017 |

Coverage: 7/7 modeled media, representing 7 physical lens elements. All available curves remain qualified spectral proxies; source coordinates are authoritative, and supplier/melt identity is unconfirmed. No tolerance is relaxed.

Verification: focused surface/inferred-beam and image-circle audits, aperture census after the S5 clear-cap increase, and actual native SVG shapes/render diagnostics at the nine focus×DC endpoint/midpoint states. No hidden rim trim was observed. Current-label glass resolver, `assertCatalogConsistent()` and the shared dispersion/partial-dispersion suites pass (2 files, 93 tests). Full repository gates are recorded by the coordinator at commit time.
