# FujifilmFujinonXf18mmf14RLMWR — patent and glass audit

## 2026-09-14 — Patent outlines, glass, and metadata

Source: `US20220011542A1.pdf, p. 2, Fig. 1; Example 1`.

Retained all SDs. At 600 dpi the automated G2 envelope measures the group bracket, not the glass. Manual inspection places those optical rims around 11–12 mm; the existing values retain ray clearance and the front/rear taper. The front element differs by about 22%, below the strong-evidence threshold. All fifteen elements resolve to coefficient-backed curves; high index alone is not an ED/APD claim. Published G2 focusing remains intact.

Structured assignee spelling follows the current catalog canonical name `Fujifilm Corporation`; the publication capitalization remains a source spelling, not a separate entity.

Corrected L13 from lanthanum crown to high-index lanthanum flint: its 1.89190/37.13 coordinate resolves to the existing S-LAH92 family. This classification does not assert a production supplier.

The second local-site review identifies L21 as the ED element correlated with [Fujifilm’s optical construction](https://www.fujifilm-x.com/global/products/lenses/xf18mmf14-r-lm-wr/specifications/), with an inferred APD tag and supplier-neutral FCD515 proxy label. L25 also gains inferred APD: the compatible E-FDS2 curve gives ΔPgF ≈ +0.0338; this high-dispersion glass is not ED. Neither inference is promoted to patent-listed APD. The caption distinguishes the 110 mm front-vertex object distance from the production 0.2 m focus specification. G2 moves monotonically 2.50 mm objectward, with G1/G3 fixed. Optical rims, excluding front mounting flanges and the rear group bracket, do not justify further SD changes.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 on PDF page 22 at 200 dpi: surface 25 d = 8.4141; surfaces 26–27 are the optical member PP,
  2.8500 mm, nd 1.51680, νd 64.20; 27 → Sim is 1.1000 mm. The gap is not focus-variable.
- Surface 25 now stores the patent's 8.4141 mm, with `rearPlates` PP (N-BK7 class; the patent names no supplier) and
  gapAfter 1.1000 mm. Paraxial check against the previous data: EFL identical and defocus unchanged at both focus
  states (the old 11.3930556962 was the exact fold).
- Physical first-surface-to-image track grows by 0.971 mm to the patent's 91.0641 mm.
