# SamyangAF50mmf14FE audit

## 2026-09-09 — patent rims, metadata, and dispersion

Source: exact local `patents/KR101825708B1.pdf, PDF page 15, Figure 1, Example 1`. Inspected at 600 dpi; axial screening scale approximately 60.78 µm/pixel. Optical curve endpoints, not mechanical flanges or leader lines, determine the comparison. Native prescription scale and the calibrated stop are retained.

| Surface | Before (mm) | After (mm) | Evidence |
|---|---|---|---|
| All | Existing | Retained | Most differences are within 15%; enlarging L4 fails gap clearance. |

L8 uses SUMITA K-VC80(M) as a qualified dispersion proxy, improving coverage from 6/9 to 7/9. The source spectral ambiguity and rejection of L-LAL15 as an identity remain explicit. L3/L7 (1.684 / 31.3) remain unmatched. A surface-7 trial of 19.4 mm failed the 6A→7 gap rule (13.00 mm versus 9.703 mm allowed).

Display name reviewed against the authored manufacturer references and the existing Samyang naming convention: retained the correct AF/XP, focal length, f-number, and FE designation. Canonicalized decimal-aperture keys and patent/inventor metadata without renaming the marketed product.

Validation: `audit:surface` and `audit:image-circle` pass. The project's SVG shape builder was rendered and visually compared with the patent; no surface trimming occurs at infinity. For changed prescriptions, temporary exact-ray comparisons sampled published focus rows plus 0.25/0.5/0.75, on-axis pupil fractions ±1/±0.75/0 and ±0.60 half-field pupil fractions ±0.75/±0.375/0. The retained changes introduce no additional clipping relative to the supplied data. Existing full-edge clipping is not claimed to be repaired. No per-lens snapshot test was retained.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 and Table 2 (PDF page 10, native text layer): S18 D3 = 19.5; S19–S20 optical filter OF,
  2.5 mm, nd 1.51680, νd 64.20; infinity D4 = 1.02158 to IMG (D5 = 0.00192 is post-IMG and stays excluded). The
  patent close row's D4 = 1.15459 is not used because the file's close state is a fixed-image-plane reconstruction.
- Surface 18 now stores the printed 19.5 mm, with `rearPlates` OF (N-BK7; 1.51680 / 64.2 is the N-BK7 class) and
  gapAfter 1.02158 mm. Paraxial check against the previous data: EFL identical and defocus unchanged at both focus
  states (the old 22.1697867511 was the exact fold). Physical track grows by 0.852 mm, and the close state's
  object-to-IMG distance is now the physical 450.000 mm that `closeFocusM` 0.45 already quoted.
