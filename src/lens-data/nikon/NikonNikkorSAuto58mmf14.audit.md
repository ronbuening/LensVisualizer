# Audit Log — NIKON NIKKOR-S AUTO 5.8cm f/1.4

Patent: JP 1966-017177 B, Embodiment 1 / Figure 1.

## 2026-07-26 — Figure-matched SDs, identity, glass review, and inferred focus

### Patent and identity evidence

- Reviewed the local publication `patents/JPB 1966017177-000000.pdf`.
- Measured Figure 1 on PDF page 3 after applying the normalized prescription's scale of 58.
- Nikon's official historical title uses **Nikkor-S Auto 5.8cm f/1.4**. The display name now preserves that period
  focal-length style.

### Semi-diameter audit

The patent has no clear-aperture table. Figure measurements were rounded to 0.1 mm and checked with the surface
validator. `STO` was not changed.

| Surfaces | Before `sd` (mm) | After `sd` (mm) | Disposition |
|---|---|---|---|
| 1–4 | 23.5, 23.5, 21.0, 21.0 | 20.5, 20.5, 19.9, 19.9 | Matched the two front meniscus envelopes. |
| 5–8 | 19.3, 19.3, 18.0, 13.5 | 18.4, 18.4, 18.4, 12.5 | Matched the front central pair and stop-side taper. |
| 9–11 | 16.5, 16.5, 16.5 | 15.5, 15.5, 15.5 | Matched the rear cemented pair. |
| 12–13 | 18.3, 18.3 | 15.2, 15.2 | Matched the rear singlet envelope. |

### Glass audit

All seven elements already resolve to coefficient-backed catalog entries. No catalog or element-label changes were
needed for this lens.

### Focus audit

- The patent publishes only the infinity prescription and keeps all internal spacings rigid.
- Nikon documents linear-helicoid focusing for the early F-system barrel, supporting an inferred rigid-unit model.
- A finite-conjugate paraxial solve changes only final BF: 37.005824101 mm at infinity to 43.853986686 mm at 0.6 m, an
  inferred extension of 6.848162585 mm.
- The data and analysis explicitly label this state **inferred unit focus**.

## 2026-10-30 — Fresh original-figure and glass reinspection

- Directly viewed all three pages of `patents/JPB 1966017177-000000.pdf`: original sole prescription with all seven media on PDF 2; d-line definition/prose PDF 1; Figure 1 and paired f/1.4 plot PDF 3, optical figure cropped at 600 dpi. Source pairs (including L1ν41.3) are retained, with R/d scaled exactly×58. The source has no numeric C/F/g anchors or θgF. It labels n as d-line without a numerical wavelength; no e-line reinterpretation is introduced.
- Figure 1 resolves shortened concave ends at S8/S9. Native352×353ppi scan, local scale≈20.6 nativepx/mm from the54.404 mm first/last vertex span. Measured q≈.680±.0045 (S8, native edge≈381px) and .780±.006 (S9,≈318px), using ±(1+q)/edgePx. Source endpoints alone clip the final f/1.4 beams; adopted cuts move outward under the authoring rule:

| Face | Outer sd | Depth | Adopted cap / q | Beam reach | Cap minus reach | Required margin |
|---|---:|---:|---:|---:|---:|---:|
| S8 |19.0|6.52|13.297458 / .699866|13.241300|.056158|.050|
| S9 |15.8|4.27|12.865878 / .814296|12.810713|.055165|.050|

- Every full-focus/field inferred-cut guard passes with 0 untraced fields; depths 6.51/4.26 each fail. Both lands exceed.1 mm, and their depths clear the unchanged inferred iris spacings7.26856/6.70944 mm. No source-depth flag or tolerance exemption.
- The old S8 cap 12.5 limited the stated aperture to aboutf/1.50. Source-f/1.4 minimum rim floors, with continuous common outlines, now give S1/2=21.2, S3/4=20.5, S5/6/7=19, S9/10/11=15.8 and S12/13=15.4 mm. Largest growth3.4% versus the old figure envelope; this is explicitly a source-FNO beam adjustment, not a one-pixel measurement claim. Both cut guards were rerun after the final openings. No radius, spacing, stop or aperture control changed.
- All seven source pairs and current catalog curves remain unchanged, with complete coefficient coverage. L1’s S-TIL27 remains deliberately nonidentical (native 1.575006/41.505207 versus source 1.5750/41.3). Data labels now name actual qualified current proxies rather than an inconsistent575415 source-code implication. No supplier, melt or source-measured APD is inferred.
- Focused surface/image-circle/aperture/field checks pass, including f/1.4 and centered FX field≥99%; nine actual SVG states have zero automatic trim. Catalog consistency passes7/7; all source R/d, every nd/νd pair/APD flag and the original inferred rigid-unit focus/stop controls remain unchanged.
