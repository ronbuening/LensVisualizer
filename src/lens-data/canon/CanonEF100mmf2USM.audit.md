# Source and numerical audit

Representative probable-family prescription; source literal millimetres retained.

- Native model SHA256: `9785d4a44a3a42355e2e9e3e3a473ee887a93dd697d6954e3d295c6efc2d7645`.
- Source archive SHA256: `be7734708703eb5334b869da0dd97236a28ee2226bd5953c30b4a616c76a5062`.
- Source CSV LF separator-only transport hash retained separately from original bytes.
- First-order methods agree; source/computed image-plane distinction retained.
- Geometry and all24 native format-reference fields pass at every advertised aperture; max delta0.0099008619.
- All raw clipping and0 aim-blocked engine failures remain in the evidence. No applied refocus or optical tuning.
- Type checking, corpus and compiled-viewer receipts are produced by the separate final integration run; this source writer does not assert those results. (Closed: the list above describes the Example 2 file as received, replaced by the section below.)

## 2026-11-02 — Deployment validation and wording pass

**Change of example.** The package modeled Numerical Example 2 and said its positive-first rear doublet agreed better with Canon's section than Examples 1 and 3. That was backwards. Canon's section draws a thin negative meniscus in front of a thick biconvex element, with the cemented face moving imageward 7 px by the rim (R about +48 mm). Examples 1 and 3 have that order; Example 2 reverses it. Uniform-scale fit to 14 surfaces of the section (about 2.47 px/mm): Example 1 1.48 px rms, Example 3 1.86, Example 2 2.45; rear doublet alone 0.52, 1.28, 3.92. The section's flat surface 2 favours Example 2 by under 1.6 px. The file was rebuilt from Example 1.

| Value | Example 2 (received) | Example 1 (now) |
| --- | ---: | ---: |
| R14, mm | −47.69 | +43.71 |
| L7 / L8 | biconvex / negative meniscus | negative meniscus / biconvex |
| EFL, mm | 99.989 | 100.016 |
| BF, mm (computed) | 41.455 | 39.602 |
| TL, mm (computed) | 118.165 | 115.662 |
| Iris radius, mm | 14.737 | 14.681 |
| D9 at infinity, near | 2.81, none | 2.66, 16.487 |
| D12 at infinity, near | 25.15, none | 24.99, 11.163 |
| `closeFocusM` | 1e15 | 0.9 |

**Source re-read.** Example 1 at 500 dpi: 15 R rows with the stop, 14 D, 8 N, 8 ν, against the data file: no mismatches. Example 2 had also matched exactly, so the change is a choice of example, not a transcription fix. The 1998 amendment adds claims 2 and 3 and corrects group 3 to positive in ¶0008; no table value or example number changes.

**Patent against model.** F 100 / 100.016, FNO 2 / 2.000, 2ω 24.4° / 24.4°. Table 1: f12/f 2.75 / 2.752, 1/ν3N − 1/ν3P 0.017 / 0.0167, |f2|/f 0.717 / 0.717, f3/|f2| 0.944 / 0.945. BF and TL are not printed. Fig. 4(A): LSA −0.069 mm at 0.7 pupil (about −0.06), distortion +0.54% at 12° (about +0.7%).

**Near state.** Solved, unpublished: 900.00 mm object to image, −0.1393×, defocus −0.00007 mm, stop fixed; Canon states 0.14×. The same solve at 1 m from the image plane gives D9 14.683, D12 12.967, f/2.27, +2.81% distortion and LSA peak −0.22 mm, against f/2.3, about +2.8% and about −0.22 mm in Fig. 4(B). A stop moving with group 2 gives f/1.84, which the plot excludes.

**Colour.** g−d against Fig. 4 (infinity paraxial, infinity top of pupil, 1 m paraxial, 1 m top): plot about 0, +0.20, +0.09, +0.45 mm; SF6 on L5/L7 −0.120, +0.081, −0.034, +0.332; S-TIH6 −0.120, +0.081, −0.034, +0.333. The two labels are indistinguishable. Both ran about 0.12 mm short while L4 had normal-line ng. L4 now carries `dPgF` +0.018978 from OHARA TPH55 (AGF PgF 0.62056, nd 1.755502, νd 25.066, tagged discontinued; no row in the repo catalog), which gives −0.034, +0.175, +0.071, +0.451 with SF6 and +0.452 at the last point with S-TIH6. `built.mjs` and `probe.mjs` output did not change.

**Rims.** Carried by element from the Example 2 model; within about 1 mm of Canon's section. Surface 8 takes `rimCutDepthMm` 9.0 (cut radius 19.27 mm, beams reach 15.97 mm) because its rim passed the stop plane by 0.59 mm. Field clipping is unchanged in kind: 46% geometric illumination at 12.2° and f/2.

**Fields changed in this pass.** Header, `subtitle`, `specs`, element `role` and `indexReferenceNote`, `focus.description` wording; analysis rewritten for Example 1, with "Verification Summary" replaced by "Model Scope and Limitations". `specs` uses INNER FOCUS: the corpus keeps REAR FOCUS for a complete rear group, and this group has group 3 fixed behind it.

Closed: L4's missing partial dispersion; with the TPH55 value g−d agrees with Fig. 4 within about 0.03 mm. Open: Canon's section draws the surface 8 land near radius 16 mm, but the beams need about 16.0 mm plus margin; the figure land is left for the rim pass.
