# Patent and viewer audit

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 on PDF page 12 of `patents/US20150168694A1.pdf` at 160 dpi: surface 18 d = 11.46; surfaces
  19–20 are the plane-parallel member PP, 2.80 mm, nd 1.51680, νd 64.2, with no spacing printed after surface 20 (the
  plate lies on the image plane; BF = 13.30 = 11.46 + 2.80/1.51680). Glass label N-BK7 (1.51680 / 64.2 class,
  resolves compatible); gapAfter 0.
- The file previously kept its image plane at the recomputed Gaussian air BFD 13.3054559007 mm rather than the printed
  fold (13.3059915612 mm). That choice is kept: surface 18 now stores 13.3054559007 − 2.80/1.51680 = 11.4594643395 mm
  at infinity and 13.2398845915 mm at the reconstructed 0.18 m state (G3 travel unchanged).
- Paraxial check against the previous data: EFL identical and defocus unchanged at both focus keyframes (worst
  difference 1e-15 mm). Physical track grows by 0.954 mm (2.80 × (1 − 1/1.51680)).
