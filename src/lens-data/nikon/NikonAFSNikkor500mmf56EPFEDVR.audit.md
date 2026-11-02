# Nikon AF-S NIKKOR 500mm f/5.6E PF ED VR — Patent Audit

**Audit date:** 2026-08-03
**Patent:** JP 2018-017857 A
**Embodiment:** Example 2 / OL2
**Figure:** Figure 3
**Data file:** `NikonAFSNikkor500mmf56EPFEDVR.data.ts`

## Source and identity

Example 2 was checked against Tables 5–8 and Figures 3–4 of the retained Japanese publication. Its element/group
count, PF and ED arrangement, internal-focus and VR grouping, field, close-focus state, and filing date support the
production correlation without asserting that Nikon published the released factory prescription. The display name was
corrected from `f/5.6 E` to Nikon's official `f/5.6E` styling.

## Semi-diameter audit

The patent does not tabulate clear apertures. Figure 3 was rendered at 600 dpi and measured on the drawing's 7.5 px/mm
axial scale. Groups were revised only when the stored envelope differed from the figure by approximately 15% or more.
Values remain visualization semi-diameters rather than manufacturer clear-aperture specifications.

| Surfaces | Optical section | Before (mm) | After (mm) |
|---|---|---|---|
| 10 / 11 / 12 | L15 / L16 | 34.0 / 33.0 / 31.0 | 24.2 / 23.5 / 22.1 |
| 13 / 14 / 15 | G2 focus doublet | 24.0 / 24.0 / 23.0 | 19.2 / 19.2 / 18.4 |
| 17 / 18 / 19 | C31 | 15.0 / 14.25 / 14.25 | 12.3 / 11.7 / 11.7 |
| 21 / 22 / 23 | VR1 cemented pair | 15.0 / 15.0 / 12.2 | 12.6 / 12.6 / 10.2 |
| 26 / 27 / 28 | CL31 | 15.5 / 15.5 / 15.5 | 13.1 / 13.1 / 13.1 |

The front G1/PF stack, L35, CL32, and CL33 stayed within the figure-reading threshold and were retained. The
11.78466 mm stop semi-diameter was not derived from the silhouette; it remains the pupil solution for the published
F/5.75019 design.

## Glass and APD audit

The patent supplies nd, νd, and θgF but no glass-maker names. Coordinate comparison against Hikari's retained June
2025 catalog identified seven missing public curves: J-KZFH1, J-LASF08A, J-SF2, J-LASF09A, J-F2, J-LF7, and J-LF5.
Adding those vendor power-series rows raises the audited Hikari-name prescription from 10/21 to 19/21 strict Sellmeier
coverage; the direct line indices already supplied 19/21 trusted coverage. Relative to the pre-audit committed
prescription, both strict and trusted coverage rise from 17/21 to 19/21. The two bonded PF materials remain explicitly
unmatched and use patent-derived Abbe plus partial-dispersion data.

The previous draft set `apd: "patent"` on all 21 modeled media merely because θgF was available. The corrected
classification applies the APD badge only to the anomalous PF material GDa and the three production-correlated ED
elements L34, L35, and L37. The remaining 17 entries retain their ΔPgF values for tracing and set `apd: false`.

## Retained sources

- JP 2018-017857 A, Example 2, Tables 5–8, Figures 3–4.
- Nikon Imaging, official AF-S NIKKOR 500mm f/5.6E PF ED VR specifications.
- Hikari Glass Co., Ltd., *Optical Glass Catalog*, June 2025.

## 2026-09-23 — Inventor romanization

- The JP 2018-017857 A front page names 三輪 哲史 at Nikon, the same Nikon inventor as the US front pages of US 2010/0220400 A1, US 2018/0031811 A1, and US 2021/0026133 A1, which all publish `Satoshi Miwa`. Normalized the inventor from Tetsushi Miwa to the corpus-canonical Satoshi Miwa in lens metadata and analysis prose.

## 2026-10-29 — Fresh F-mount source, rim, and glass reinspection

- Directly inspected original `patents/JP2018017857A.pdf`: Example 2 Fig. 3 on PDF p. 31 at 600 dpi (upright complete crop), Table 5 p. 20 and diffractive/focus Tables 6–7 p. 21; source d-line convention is established in the table definitions ¶0094. Every convex/concave face and compound boundary was checked. No separately resolved air-facing concave-end land supports a new cut or extension. The three-medium PF stack and ordinary cemented steps cannot acquire invented interface lands. The fresh aperture census found S10 limiting f/5.75 to f/6.39. The source Fig. 3 first-surface-to-image scale is about 7.5 working px/mm (150 dpi native image, about 1.875 native px/mm, one native pixel ≈0.53 mm). L15/L16 outer radii read roughly 28/26 mm; the old 24.2/23.5/22.1 mm caps were smaller than that envelope. Following the stated-beam floor rule, raised only the three clipping curved caps S10/S11/S12 to 26.9/24.7/23.7 mm (maximum +11.2%); these conservative beam floors stay inside the source compound outer outline, with no invented flat land. R/d, phase coefficients, stop, and focus rows are retained. Focused aperture rerun clears the stated beam.
- Freshly checked **19 physical lens glasses plus two bonded PF media** against all 21 source nd/vd/θgF rows. All source values and existing converted `dPgF` are retained: every deviation agrees after six-decimal rounding with `θgF − (0.6438 − 0.001682νd)`. Most ratios have four printed decimals (±0.00005); L13/L39 0.564 and L35 0.544 have only three (±0.0005). Conversion digits do not imply extra precision. Removed **57 catalog-only C/F/g index copies** and qualified all ordinary catalog annotations as current proxies; no source-backed partial dispersion is removed.
- Current curves cover 19/21 media (all 19 physical substrate/ordinary glasses); GDa 1.52780/33.41 and GDb 1.55710/49.74 remain unresolved bonded materials with source Abbe/partial-dispersion anchors and no invented supplier or resin chemistry. Retained source-supported GDa APD and inference-qualified production ED correlations; other badge absences do not assert zero anomaly. Synchronized all affected public glass/spectral and aperture-limit prose.
- Actual verification: focused surface and image-circle audits pass all three candidates (zero undersized/skipped); aperture audit passes all three stated axial beams after the PF cap correction. Native SVG output was inspected at nine focus/zoom states per lens (27 total), with zero renderer trims. Current resolver/catalog consistency passes. Shared dispersion/partial-dispersion suites were already run in this candidate wave (93 passing tests); no engine changes or per-lens tests were added.

## 2026-10-30 — Spectral reference regression check

The 57 removed C/F/g values were rounded catalog copies. Their removal selects the current coefficient curves, anchored at the authored d-line index. For the shared golden probe at entrance height29.8076mm, the red/blue slopes change by approximately−1.15e−8/+1.006e−6; green is unchanged. An explicit-index clone computed from the coefficients and source partial ratios bypasses catalog resolution and reproduces the current R/G/B/V traces. Restoring the old line indices on the current geometry reproduces the old RGB values, isolating the cause from the separately reviewed SD raises. Source θ affects V among the default channels and is not the cause of the RGB change. All channels remain unclipped; this probe's RGB image residuals are0.364/1.199/−1.391µm. Updated the existing shared golden references with the same eight-digit tolerance; no trace-engine or phase coefficients changed. These are model regression values, not measured production performance.
