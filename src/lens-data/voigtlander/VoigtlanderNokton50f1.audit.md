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

## 2026-08-07 — Near-complete glass opportunity

- Visually rechecked Example 1, Table 1 in local `patents/JP2023063766A.pdf`; L6r is `nd=1.55298`, `νd=55.07`, code 553551.
- Relabeled L6r to coefficient-backed HIKARI J-KZFH4, whose public catalog row is the exact 553551 coordinate.
- The label is a spectral catalog equivalent and leaves Cosina's production supplier unspecified. L7 remains explicitly unmatched because the nearby 808409 catalog row does not reproduce the patent's 808406 dispersion closely enough.
- Synchronized the analysis. No geometry or authored patent constants changed.

## 2026-08-07 — L-LAH84 catalog recovery

- Visually rechecked Example 1 in local `patents/JP2023063766A.pdf`; L7 remains `1.80835 / 40.55`, code 808406.
- OHARA's 2026-07-01 catalog publishes low-softening L-LAH84 at `1.808350 / 40.548503` with vendor Sellmeier coefficients.
- Relabeled L7 as an L-LAH84 catalog equivalent while leaving Cosina's production supplier unspecified. This supersedes the earlier no-match disposition; no geometry changed.

## 2026-09-08 — First-hosted diagram audit, lens 3 (verification in progress)

- Primary source: local `patents/JP2023063766A.pdf`, Example 1, Tables 1–2 (PDF p6), Figure 1 (PDF p10). Visually checked all R/d/nd/vd and asphere rows; no transcription changes required.
- Rendered Figure 1 at 600 dpi. First-to-last vertex scale: 65.02 mm / approximately 1468 pixels = 0.0443 mm/pixel. Optical rims, excluding mechanical shoulders and leader lines, support L5 ~18 mm, L6 cemented interface ~15.5 mm, L7 ~13 mm.
- Changed SDs: surface 11 16.5→18; 12 16→18; 14 13.5→15.5; 15 13→12.2; 16A 12→13; 17A 11→13 mm. Surface 15 is below the ~12.5–13 mm drawn optical rim to preserve the validator's 10% gap-clearance margin. Trials at 13 and 12.5 failed that margin; 12.2 passes. Front apertures retain existing ray-envelope allowances above schematic rims. These are inferred clear apertures, not patent dimensions.
- Corrected the explicitly inferred unit-focus endpoint. The old BF increase 3.85 mm did not focus a paraxial object at the labeled 450 mm object-to-image distance. Independent reduced-angle propagation solves an increase of 7.394899232679075 mm, giving final gap 26.134899232679075 mm. All surfaces and stop move equally objectward in the fixed-camera frame. Patent has no finite-focus schedule; actual production floating paths remain unavailable.
- Rechecked production metadata against Cosina's official Nikon Z product page (https://www.cosina.co.jp/voigtlander/en/z-mount/nokton-50mm-f1-aspherical/): 9/7, f/1–16, 47.9°, 12 blades, 0.45 m, floating mechanism and ground-aspherical front element. These product specifications are not patent-derived movement evidence.
- Label BF as modeled; explain the whole-unit approximation and its limitations. Normalize glass labels to catalog equivalents with production suppliers unspecified. Original nd/vd and catalog selections retained; no new APD assertion.
- Replaced speculative supplier/manufacturing and prior-art claims in the surfaced analysis with an explicit source/model account, corrected aspheric departures at displayed rims, and removed obsolete spherical-only rendering comments.
- Production infinity view inspected before edits. Post-edit browser inspection pending: CUA reports the Mac is locked; user asked to unlock. Do not count this lens complete until live verification and required gates finish.
- Surface and image-circle validators pass (0 undersized). Independent finite-conjugate, fixed-camera motion and hidden-trim regression tests pass (3). Full typecheck, format check, lint, 2,774 tests across 301 files, and build pass (1,267 prerendered routes). Glass reports regenerated; 15 report tests pass. Remaining gate: post-edit live visual check.

- Live review resumed after manual unlock: localhost:5175 Nokton viewed at focus 0, 0.5 and 1; BF readouts 18.74, 22.44 and 26.13 mm. Motion chart shows both groups moving objectward with 7.39 mm maximum travel. Aperture endpoint f/16 displays a 2.08 mm stop diameter while correctly retaining the wide-open EP label. Revised rear optical profiles show no overlaps. Lens review complete; commit deferred to lenses 3–10 batch per revised user instruction.
