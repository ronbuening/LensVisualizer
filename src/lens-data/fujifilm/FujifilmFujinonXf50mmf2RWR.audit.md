# FujifilmFujinonXf50mmf2RWR — patent and glass audit

## 2026-09-14 — Patent outlines, glass, and metadata

Source: `US10168507.pdf, p. 3, Fig. 4; Example 4`.

Retained all SDs: the 600 dpi figure ratios are 0.95–1.17 and preserve the same relative taper; no strong outline discrepancy warrants a change. L21 now names the S-FSL5 coordinate-compatible proxy rather than the non-resolving 48770x token, bringing coverage to 9/9. Supplier remains unspecified. Published infinity/1 m focus states and the explicitly reconstructed 0.39 m endpoint remain distinguished.

Structured assignee spelling follows the current catalog canonical name `Fujifilm Corporation`; the publication capitalization remains a source spelling, not a separate entity.

The local-site color audit adds inferred APD to L14: its compatible H-FK61 curve gives ΔPgF ≈ +0.0315, and the sole aspherical element correlates with the [manufacturer’s ED asphere](https://www.fujifilm-x.com/ja-jp/products/lenses/xf50mmf2-r-wr/specifications/). This is not a patent APD designation or glass-supplier identification. The focus caption now distinguishes published states from the reconstructed endpoint without displaying solver precision. G2 is labeled FOCUS; it moves monotonically 5.66457 mm imageward from infinity to 0.39 m while G1/G3 remain fixed. The patent-rim comparison still supports the existing SDs.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 4 Table 10 on PDF page 16 (col. 16) at 200 dpi: surface 17 d = 20.28; surfaces 18–19 are the
  plane-parallel member PP, 2.85 mm, nd 1.51742, νd 52.4; 19 → IMG is 1.10 mm. Surface 17 now stores 20.28 mm, with
  `rearPlates` PP (OHARA S-NSL36, 1.51742 / 52.43, catalog-compatible) and gapAfter 1.10 mm.
- Paraxial check against the previous data: EFL identical and defocus unchanged (< 1e-14 mm) at infinity, 1 m and the
  reconstructed 0.39 m keyframe, since the old 23.258187976960897 mm was the exact fold. Physical track grows by
  0.972 mm. The 0.39 m endpoint's DD[12]/DD[14] were solved against the folded track and are left unchanged; the
  resulting sensor-plane distance shift is under 1 mm.
