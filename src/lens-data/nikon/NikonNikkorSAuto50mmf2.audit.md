# Audit Log — NIKON NIKKOR-S AUTO 5cm f/2

Patent: JP 1964-025754 B, Embodiment 1 / Figure 1.

## 2026-07-26 — Figure-matched SDs, identity, glass review, and inferred focus

### Patent and identity evidence

- Reviewed the local publication `patents/JPB 1964025754-000000.pdf`.
- Measured Figure 1 on PDF page 4 after applying the prescription's 0.5 scale.
- Nikon's official historical title uses **NIKKOR-S Auto 5cm f/2**. The display name now preserves that period
  focal-length style.

### Semi-diameter audit

The patent has no clear-aperture table. Figure measurements were rounded to 0.1 mm and checked with the surface
validator. `STO` was not changed.

| Surfaces | Before `sd` (mm) | After `sd` (mm) | Disposition |
|---|---|---|---|
| 1–4 | 15.2, 15.0, 14.7, 13.3 | 12.4, 12.2, 12.4, 11.2 | Reduced the oversized front envelopes to the Figure 1 silhouette. |
| 5–7 | 13.0, 11.8, 10.0 | 11.5, 11.5, 11.5 | Matched the front cemented pair near the stop. |
| 8–10 | 9.0, 11.3, 11.1 | 9.5, 10.1, 10.1 | Matched the rear cemented pair; surface 8 stays below its 10.1 mm direct figure estimate to avoid hidden SVG trim across the strongly curved stop gap. |
| 11–12 | 11.5, 11.7 | 10.5, 10.5 | Matched the rear singlet envelope. |

### Glass audit

All seven elements already resolve to coefficient-backed catalog entries. No catalog or element-label changes were
needed for this lens.

### Focus audit

- The patent publishes only the infinity prescription.
- Nikon's history places the early Nikkor Auto barrel on a linear helicoid, supporting rigid-unit focus rather than an
  invented internal or floating group.
- A finite-conjugate paraxial solve changes only final BF: 37.562468604 mm at infinity to 42.591705543 mm at 0.6 m, an
  inferred extension of 5.029236939 mm.
- The data and analysis explicitly label this state **inferred unit focus**.

## 2026-10-30 — Fresh original-figure and glass reinspection

- Directly viewed `patents/JPB 1964025754-000000.pdf`, all four original pages: sole prescription and seven glass pairs on PDF 2–3, d-line definitions on PDF 1–2, Figure 1 on PDF 4 at 600 dpi. Retained the exact seven source nd/νd pairs and all uniformly scaled R/d (×0.5). No numeric wavelength, C/F/g indices or partial-dispersion ratio is supplied; the source names the d-line without an e-line convention.
- Figure 1 resolves shortened concave caps at S7/S8 beside the iris; the beveled mechanical edge beyond the endpoint is not a refracting surface. Native scan352×353ppi, local scale≈22.4 nativepx/mm from the30.5 mm first/last vertex span. Measured q: S7≈.750±.007 (native edge≈257px), S8≈.835±.008 (≈227px); ranges use ±(1+q)/edgePx. Adopted cuts move outward from those schematic endpoints to clear the final full beams:

| Face | Outer sd | Depth | Adopted cap / q | Beam reach | Cap minus reach | Required margin |
|---|---:|---:|---:|---:|---:|---:|
| S7 |11.5|3.50|8.944831 / .777811|8.884160|.060671|.050|
| S8 |10.1|3.16|8.624755 / .853936|8.571144|.053611|.050|

- These are inferred numeric cuts, with no source-depth bypass. Every full-focus/field guard passes, with 0 untraced fields; .01 mm shallower depths 3.49/3.15 fail. Both lands exceed.1 mm and stay in front of the unchanged midpoint iris. S2/S4 continuous caps grow to 12.4 mm, and S8’s drawn outer rim returns to 10.1 mm; the guard was recomputed after those openings. Other faces retain their source-like continuous outlines; no extra cement-interface land.
- All seven existing coefficient curves remain unchanged qualified proxies. In particular, SF2 is nonidentical to L4 (source 1.6483/33.8; native 1.64769/33.85), not an exact melt. Public inventory now reports the actual BACD4/SK9/SF2/S-TIH13/LAF2 curves and native coordinates. Source partial dispersion is unestablished; no anomaly or line-index override is invented.
- Focused surface/image-circle/aperture/field checks pass; centered FX field≥99%. Nine actual SVG states have zero automatic trim. Catalog/resolver consistency passes7/7. Source R/d, all nd/νd pairs, APD flags, stop placement and inferred unit-focus schedule remain unchanged.
