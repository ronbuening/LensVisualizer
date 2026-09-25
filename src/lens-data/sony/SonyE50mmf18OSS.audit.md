# Audit Log - Sony E 50mm F1.8 OSS

Patent: JP 2012-242690 A, Example 2

## 2026-08-13 - Initial patent-figure, identity, and glass audit

- Reviewed ignored local `patents/JP2012242690A.pdf`, especially Example 2 Figure 8, against the new data and analysis sidecar.
- Corrected the inventor metadata to the required romanized names, Toshihide Hayashi and Naoki Miyagawa. This was the root cause of the failing patent-metadata test.
- Figure 8 showed that the initial L211 and L212 envelopes were materially oversized. Tightened surfaces 1-2 from 15.7/14.9 mm to 10.7/10.1 mm and surfaces 3-4 from 14.2/12.2 mm to 9.8/8.4 mm, preserving each element's internal rim taper.
- Confirmed the display name `SONY E 50mm f/1.8 OSS` and SEL50F18 production correlation.
- All nine physical glass media already resolve to trusted catalog curves, so no glass-catalog addition or relabel was needed.

## 2026-08-13 - Screenshot-led diagram and catalog-completeness review

- Re-rendered Example 2 Figure 8 from the ignored patent PDF and compared its oriented silhouette directly with the supplied site screenshot.
- Retained the first-element 10.7/10.1 mm envelope, revised L212 to 10.0/9.6 mm, tightened L213 and L214 to 9.0 mm, L215-L216 to 9.6 mm, L221 to 8.5 mm, and L232 to 9.8 mm. These are conservative figure-matching changes that still contain the f/1.85 and focus/OSS ray envelopes.
- Added the patent's L211-L216, L221, and L231-L232 identifiers to the diagram, plus an explicit OSS annotation over L214. The displayed name remains the verified `SONY E 50mm f/1.8 OSS`.
- Replaced opaque coordinate-only inspector text with the resolver-selected S-LAH55, TAFD35, H-ZF4A, NBFD15, J-SF03, J-SK16, TAC8, and J-SF6 catalog equivalents. Every one of the nine media remains covered by an existing trusted curve; supplier wording remains explicitly non-production-specific.
- Added no catalog glass: the current catalog already covers every medium, and the patent supplies no evidence for APD/ED tags or authored partial dispersion.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Re-read Example 2 on PDF page 11 (¶0057 table): d18 = 5, cover glass CG d19 = 2 with nd10 = 1.5168 / νd10 = 64.2, d20 = 9.15 to the image plane, fixed across all three focus rows. Surface 18 now stores the physical 5.0 mm (legacy 15.468565 = 5 + 2/1.5168 + 9.15) and the plate is a `rearPlates` entry labeled CG with the N-BK7 catalog equivalent, which resolves compatibly for 1.5168 / 64.2.
- Plate check against the folded version: EFL identical and paraxial defocus unchanged to ≤ 1e-6 mm at infinity, 0.025×, and 0.142×; the physical track grows by 0.681435 mm (= 2.0 × (1 − 1/1.5168)) to 75.8016 mm.
- `closeFocusM` moves from 0.457 to 0.458 m because it was the traced air-equivalent conjugate (456.98 mm); the physical object-to-image distance is about 457.66 mm. Surface and image-circle audits pass with no undersized surfaces.

## 2026-09-25 — MTF image-plane census

Visually checked `patents/JP2012242690A.pdf`, Example 2 ¶0057–0059, PDF pp. 10–11. Every one of the 17 powered radii, all thicknesses/gaps, nine lens nd/νd pairs and the CG plate match. No scale or aspheres. Infinity D12=1.796, D14=11.829; middle 2.630/10.994 and closest 6.599/7.027 are correctly retained. Rear path is d18=5, CG t=2 / nd=1.5168 / νd=64.2, d20=9.15 to image S21, already in rearPlates.

Independent EFL=51.299977306 agrees with source 51.30. Air BFL=15.514218449 versus reduced rear distance 5+2/1.5168+9.15=15.468565401 leaves +0.045653049 mm. No transcription error or supported plate-distance correction found. The source describes infinity longitudinal/transverse aberrations but does not explicitly label the image surface as designer best focus. Reference-index axial geometric MTF (32 grid, 812 rays, 10/20/40 lp/mm) prefers +0.021446 mm, score .926139→.990901. That supports a finite-aperture/rounding possibility but cannot establish full-field designer intent.

**Cause/action:** small published-image/paraxial discrepancy; document uncertainty and preserve source values. Offset **+0.045653 → +0.045653 mm**; Section E row deleted, no numerical change/changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
