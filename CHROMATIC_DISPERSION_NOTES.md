# Chromatic Dispersion Notes

## Summary

The LCA inset and overlay now compute chromatic spread for both axial and off-axis ray fans. For lenses such as the
Voigtlander APO-Lanthar 50mm f/2, the widget can show a much larger LCA value than comparable Leica APO lenses even
though the lens is marketed as apochromatic.

The discrepancy is primarily a modeling limitation, not a rendering bug. The current chromatic trace derives red and
blue refractive indices from only the d-line index (`nd`) and Abbe number (`vd`). That Abbe-only approximation cannot
represent anomalous partial dispersion behavior, which is exactly what APO lenses use to bring a third wavelength closer
to the C/F correction pair.

## Why The Voigtlander Case Looks High

- Several APO-Lanthar glasses are proprietary or inferred in the data file, so the model has incomplete spectral data.
- The runtime dispersion path does not use partial dispersion (`PgF`, `dPgF`) or measured line indices (`nC`, `nF`,
  `ng`).
- The LCA readout is based on real marginal ray traces, so it includes spherochromatism at the selected pupil ray height.
- Leica APO data currently happens to cancel better under the simplified Abbe-only model, but that does not mean the
  simplified model is equally faithful across all APO prescriptions.

## Potential Resolutions

1. Add optional per-element spectral indices such as `nC`, `nd`, `nF`, and ideally `ng`.
2. Prefer those measured line indices in `wavelengthNd()` when present, falling back to the current Abbe approximation
   only for lenses without richer data.
3. Add optional partial-dispersion metadata (`PgF` or `dPgF`) for APD glasses and use it to improve the blue-channel
   estimate when full line indices are unavailable.
4. Mark the LCA readout as approximate when any traced glass lacks full spectral data.
5. Add regression lenses with known APD metadata so future chromatic changes can be tested against more realistic
   C/d/F or C/d/g behavior.

## Current Recommendation

Keep the current UI behavior, but treat APO-to-APO LCA comparisons as qualitative until the lens data schema and
chromatic trace support richer spectral glass data.
