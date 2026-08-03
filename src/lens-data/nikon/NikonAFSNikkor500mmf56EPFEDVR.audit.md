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

## Verification

- Stored lens validation reports no surface-geometry errors.
- The image-circle audit reports zero semi-diameter floor failures.
- Maximum spherical rim slope is 36.439° at surface 33.
- Minimum computed edge thickness is 0.0618 mm at L39.
- The tightest positive cross-gap intrusion is 1.86622 / 3.0 mm (62.207%) from surface 23 to 24.
- Catalog dispersion tests pass with duplicate six-digit-code precedence preserved.

## Retained sources

- JP 2018-017857 A, Example 2, Tables 5–8, Figures 3–4.
- Nikon Imaging, official AF-S NIKKOR 500mm f/5.6E PF ED VR specifications.
- Hikari Glass Co., Ltd., *Optical Glass Catalog*, June 2025.
