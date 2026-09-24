# Audit Log - Zeiss ZX1 Distagon T* 35mm f/2

Patent: US 2018/0180842 A1, Example 1  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L5 / AF9-AF10 | `apd`, `dPgF`, `apdNote` | unset | `apd: "inferred"`, `dPgF: 0.0123` | Patent Table 1 names S-FPM2 (OHARA). The patent does not publish partial-dispersion constants, but this maker folder already treats catalog S-FPM2 as inferred APD with `dPgF: 0.0123` in the Touit file. |
| L7 / AF13-AF14 | `apd`, `dPgF`, `apdNote` | unset | `apd: "inferred"`, `dPgF: 0.0123` | Same S-FPM2 material and same catalog-inferred APD convention as L5. |
| All elements | `glass`, `nd`, `vd`, line indices | Existing OHARA catalog values | Retained | US 2018/0180842 A1 Table 1 names OHARA glass trade names but does not print numeric `nd`/`vd`; the current data uses OHARA catalog values and has full trusted Sellmeier coverage in generated reports. |

### Phase 2 - Retained-information audit

- Rechecked Table 1 surface radii, thicknesses, glass names, and semi-diameters against the data file. The stored SDs are patent-listed values, unlike the inferred SDs used by the older lenses in this folder.
- Confirmed the AF17-AF20 BK7 filter plates are intentionally folded into an air-equivalent final BFD rather than represented as lens elements, matching the patent's exclusion of the filter stack from the camera lens.
- Rechecked focus-variable gaps AF7, AF10, and AF14 against Table 2; no spacing edit was needed.

### Phase 3 - Spectral / metadata enrichment

- Added inferred APD metadata to L5 and L7 to match the catalog S-FPM2 convention already used in `ZeissTouit50mmf28Macro.data.ts`.
- High-index status for S-TIH6, S-NPH1, S-TIH1, S-LAH59, and L-LAM69 remains represented in catalog glass labels, line indices, and role prose.

### Phase 4 - Analysis sync

- Updated `ZeissZX1Distagon35mmf2.analysis.md` so the L5/L7 prose, glass table, and chromatic-correction summary describe S-FPM2 as catalog-inferred APD rather than merely low-dispersion glass.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 on PDF page 21 (printed page 7) at 160 dpi: AF16 d = 0.50000 (not focus-variable in Table 2); AF17 1.20000 BK7_Schott (SD 20.17427 / AF18 20.46500); AF18 0.50000 air; AF19 0.80000 BK7_Schott (SD 20.66304 / AF20 20.86325); AF20 2.00000 to the image. ¶0064 excludes these filters 60 from the camera lens but says their thickness and index are used in the design.
- Surface 14A (AF16) now stores the physical 0.5 mm gap, with two unlabelled `rearPlates` (gapAfter 0.5 and 2.0 mm, `sd` = the larger printed face SD of each plate). The patent names the glass but prints no nd/νd, so the plates use catalog N-BK7 (1.51680 / 64.17, `glass: "N-BK7 (Schott)"`), the same index the legacy fold used and the same trade-name-to-catalog convention as the OHARA elements.
- Paraxial check against the previous data: EFL identical and defocus unchanged at both focus keyframes (worst |Δ| 8e-10 mm; the old 4.3185654 mm fold was exact). Physical track grows by 0.681 mm, so the stored AF2-to-image length now equals the patent's 57.000 mm.
