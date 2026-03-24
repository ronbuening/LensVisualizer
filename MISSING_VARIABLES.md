# Missing Variables — Features One Data Field Away

Features that cannot be computed from existing lens data but would become possible with the addition of a single variable per element or per lens. Each entry lists the missing field, where it could be sourced, and what it would unlock.

---

| # | Feature | Missing Variable | Type | Where to Source | What It Enables |
|---|---------|-----------------|------|----------------|-----------------|
| 1 | **Lens Weight Estimate** | `density` — glass density (g/cm³) per element | `number` on `ElementData` | Glass manufacturer catalogs (Schott, Ohara, Hoya) keyed by the existing `glass` field. Typical range: 2.2–6.3 g/cm³. | Compute each element's volume from semi-diameters and thickness (cylindrical approximation with sag correction), multiply by density. Sum for total optical glass weight. |
| 2 | **Sensor Format Coverage** | `sensorFormat` — sensor dimensions (width × height, mm) | `[number, number]` on `LensData` or user-selectable dropdown | User selection from standard formats: Full-Frame (36×24), APS-C (23.5×15.6), Micro 4/3 (17.3×13), APS-H (28.7×19), Medium Format (43.8×32.9). | Show sensor rectangle overlay on image circle, compute format-specific diagonal angle of view, corner illumination, and whether the image circle fully covers the sensor. |
| 3 | **Full Spectral Dispersion Curve** | `sellmeier` — Sellmeier coefficients (B1, B2, B3, C1, C2, C3) per glass | `object` on `ElementData` | Glass catalog datasheets. Every optical glass has published Sellmeier coefficients. Could be looked up automatically from `glass` name. | Replace the current 2-point Abbe dispersion approximation with the exact Sellmeier equation: `n²(λ) = 1 + Σ Bᵢλ² / (λ² - Cᵢ)`. Enables accurate polychromatic ray tracing at any wavelength, secondary spectrum analysis, and partial dispersion plotting. |
| 4 | **Thermal Focus Shift** | `dndt` — thermo-optic coefficient (dn/dT, 1/°C) per glass | `number` on `ElementData` | Glass catalog datasheets. Published for all optical glasses. Typical range: -6 to +12 × 10⁻⁶ /°C. | Predict how much the focal point shifts per degree Celsius. Sum `Σ (φᵢ × dnᵢ/dT) / φ_total` across elements for the system thermal sensitivity. |
| 5 | **Transmission Estimate** | `coatingReflectance` — per-surface reflectance (%) or coating type identifier | `number` or `string` on `SurfaceData` | Lens manufacturer specs, or assume standard multi-coating (~0.2–0.5% per air-glass interface). | Compute total light transmission: `T = Π (1 - R_surface)` across all air-glass boundaries. Typically 16–40 air-glass surfaces depending on element count. Also enables T-stop calculation: `T-stop = f-number / √T`. |
| 6 | **Bokeh Character** | `bladeCount` — number of aperture blades | `number` on `LensData` | Published in lens specifications. Common values: 7, 9, 11 blades. | Model the shape of out-of-focus highlights (polygonal vs. circular). Combined with the existing vignetting/clipping data, can simulate cat's-eye bokeh at frame edges and mechanical vignetting of the highlight shape. |
| 7 | **Reproduction Ratio at Close Focus** | `sensorHeight` — image sensor height (mm) or specified maximum image height | `number` on `LensData` or user-selectable | Standard sensor formats or lens spec sheets. | Compute exact magnification ratio at close focus: `m = image_height / object_height`. Currently we can compute magnification optically but need the sensor constraint to express it as a reproduction ratio (e.g., 1:4, 1:2, 1:1). |
| 8 | **Diffraction-Limited Resolution** | `wavelength` — design wavelength (nm) | `number` constant (could default to 550 nm) | Trivial — the standard photopic peak is 550 nm. Could be user-selectable. | Airy disk diameter = `2.44 × λ × f-number`. Enables comparison of geometric blur (from spot diagram) to the diffraction limit, showing whether the lens is diffraction-limited at a given aperture. Nearly free to implement once the constant exists. |
| 9 | **Ghost / Flare Analysis** | `coatingReflectance` — per-surface reflectance (same as #5) | `number` on `SurfaceData` | Same as #5 | Model double-bounce ghost reflections: for each pair of surfaces (i, j), trace a ray that reflects at surface j, propagates back to surface i, reflects again, and continues to the image plane. Predict ghost image positions and relative brightness. N surfaces produce N×(N-1)/2 ghost pairs. |

---

## Notes

- **Items #5 and #9** share the same missing variable (`coatingReflectance`). Adding it unlocks both transmission estimation and ghost analysis.
- **Item #8** is borderline — a wavelength constant could simply be hardcoded at 550 nm with minimal effort. It's listed here because making it user-selectable would be more useful.
- **Item #3** (Sellmeier coefficients) would be the highest-impact addition, as it improves the accuracy of all chromatic analysis already in the app. If the `glass` field is populated, coefficients could be auto-looked-up from a bundled glass catalog database.
- **Item #2** (sensor format) could be implemented as a user dropdown rather than a per-lens data field, making it even simpler to add.
