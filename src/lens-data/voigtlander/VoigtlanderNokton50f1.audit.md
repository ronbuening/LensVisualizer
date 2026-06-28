# Audit Log — Voigtländer Nokton 50mm f/1.0

Patent: JP2023-063766 A, Example 1

## 2026-06-23 — Full Voigtländer local-patent sweep

- Local patent source: `patents/JP2023063766A.pdf` (untracked local file).
- Rendered and visually rechecked Example 1, Table 1. The stored R, d, nd, vd, and aspheric coefficients for surfaces 1A, 16A, and 17A match the patent table.
- Updated resolver-friendly glass labels:
  - L1: `LaSF (LASF35 melt)` → `S-LAH93 (OHARA, patent nd/vd match)`.
  - L2: `LaSF family` → `TAFD37A (HOYA, patent nd/vd match)`.
  - L4f: `Dense flint (SF14 family)` → `S-TIH14 (OHARA, patent nd/vd match) / SF14-family dense flint`.
  - L6r: `Standard crown (selected melt)` → `Unmatched (553551 crown; patent nd=1.55298, νd=55.07)`.
  - L7: `LaF/LaSF boundary` → `Unmatched (808406 high-index lanthanum glass; patent nd=1.80835, νd=40.55)`.
- The patent table does not list dPgF, APD, or semidiameter columns. APD remains false for this file, and the SDs remain display/ray-envelope estimates checked against the patent drawing proportions.

## 2026-06-28 — Focal/field and production-spec alignment

- Recomputed the first-order focal data from JP2023063766A Example 1, Table 1. The paraxial trace gives EFL = 49.9977 mm, BFL = 18.7323 mm, and TT = 83.76 mm; the BFL agrees with the patent's 18.74 mm final air gap within table rounding.
- Kept `focalLengthMarketing: 50` but changed `focalLengthDesign` to `49.9977`. The patent prose rounds the embodiment to F = 50 mm / Fno 1.0, but the table trace is more precise.
- Added rectilinear `projection.fullFieldDeg: 47.9` from Cosina's Z-mount product specification. This preserves the production angle of view instead of deriving 46.8° from an ideal 50 mm rectilinear full-frame diagonal.
- Confirmed aperture sizing from the patent model: f/1.0 corresponds to EP SD ≈ 24.999 mm (EP diameter ≈ 49.998 mm). The front group maps that to a physical stop SD ≈ 16.14 mm (`y_ratio ≈ 0.6455`, entrance-pupil magnification ≈ 1.55×).
- Synced production metadata from Cosina specs: 7 groups / 9 elements, 12 aperture blades, F16 minimum aperture, and 0.45 m close focus for the mirrorless variants. The patent does not disclose close-focus variable-spacing tables, so the data file retains the existing BF-only close-focus approximation and documents the limitation.
- Updated the analysis text: corrected the group count from six to seven, adjusted TT/f to 1.6753 and f/f_le to −0.3234, and clarified why the production field angle and patent EFL are both retained.
