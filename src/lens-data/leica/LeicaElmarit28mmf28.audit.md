# Audit Log - Leica Elmarit-R 28mm f/2.8

Patent: US 3,591,257

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US3591257.pdf`; local text confirms the repeated nd=1.81265, vd=25.24 rows.
- Public catalog lookup did not find a defensible exact coefficient-backed match for the historical high-index flint pair.
- Converted both repeated `SF6 (SCHOTT)` annotations to code-only `813252` patent-glass labels to avoid resolving to the wrong modern catalog glass.

## 2026-06-24 — Folder audit recheck

- Rechecked local `patents/US3591257.pdf` OCR for Example 3. The repeated L4/L7 row remains nd=1.81265, vd=25.24.
- Synced the companion analysis and L7 role text so they no longer describe L4/L7 as resolved SF6 catalog glass.
- Rechecked APD/high-index status: no partial-dispersion data or APO claim are present, so all elements remain non-APD. L3, L4/L7, and L6 remain high-index/high-dispersion historical glass roles based on the patent constants.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain inferred from f/2.8 ray envelopes and the patent drawing's relative element apertures.

## 2026-07-29 - E-line catalog-mismatch disposition

- Rechecked Example 3 in local `patents/US3591257.pdf`; stored R, d, ne, and νe remain unchanged.
- S5 `LaF21 (SCHOTT)` -> explicit unmatched LaF21-class e-line glass at 1.79227 / 47.15.
- S13 `F2 (SCHOTT)` -> explicit unmatched F2-class e-line glass at 1.62408 / 36.11.
- The modern N-LAF21 and F2 d-line rows remain useful comparisons but are not assigned as spectral identities.
  Synchronized the companion analysis accordingly.

## 2026-07-30 - Reference-line metadata

- Added `indexReference: "e"` to all eight elements because the stored `nd` / `vd` slots preserve patent
  `ne` / `νe` values.
- The runtime and generated reports now reject d-line catalog substitution structurally rather than relying on annotation wording.
- No source values or prescription geometry changed.

## 2026-08-11 — Phase 95 F2 e-line recovery

- Re-rendered Example 3 on local patent PDF page 13 and confirmed L8 at `ne = 1.62408`, `νe = 36.11`.
- The legacy Schott F2 curve reproduces `1.624080 / 36.108`, so the old reference-line workaround is no longer
  needed for L8.
- Strict coverage rises by one surface. The N-LAF21-class row remains unmatched; no source values or geometry
  changed.

## 2026-08-21 — Near/close glass-candidate review

- Evaluated US 3,591,257's L6 coordinate on its authored e-line reference and assigned S-BAH28 as a
  supplier-neutral LaF10-class spectral proxy.
- L3, L4, and L7 remain unresolved because their e-line/high-index coordinates do not uniquely identify d-line
  catalog materials.

## 2026-09-23 — First-added diagram audit, lens 83

Source: local `patents/US3591257.pdf`, 14 pages. The pages used were:

- p. 2: Fig. 3, the Example 3 section.
- p. 5: Figs. 3a–3d.
- p. 9: Figs. 6c and 6e.
- p. 11, cols. 3–4: the Example 3 table.
- p. 12, cols. 5–6: the claim-4 restatement of Example 3.
- p. 13: Example 4.
- p. 14: the certificate of correction.

All pages were rendered and read from the images, not from the OCR layer.

**Re-verified and retained**

- **Front-page fields.** `patentNumber`, the authors (Walter Mandler, Garry Edwards, Erich Wagner), the assignee (Ernst Leitz GmbH), the year (1971) and the subtitle (Example 3) are correct. Example 3 is the only f/2.8 ±37° embodiment, so it is the right example for a 28 mm lens on 24×36.
- **Prescription rows.** Every R, d, nₑ and νₑ row except a₁ matches the table × 0.28, including the stop gaps a₃₁ = 2.14 and a₃₂ = 8.35, which are patent values. Claim 4 prints r₁ = +98.70 against the example's +98.79. The example value is kept; the effect on EFL is below 0.01.
- **Element focal lengths.** The stored element `fl` values match thick-lens values to 0.1 mm. Element `type` strings agree with the R signs.
- **Aperture.** `nominalFno` 2.8 is the patent's relative opening.
- **Metadata.** `lensMounts` `leica-r` and `imageFormat` `135-full-frame` are canonical ids.
- **Groups and certificate.** The group labels f₂ ≈ +20 and f₃ ≈ −105 match the patent's f₂ and f₃ × 0.28. The certificate of correction (signed Dec. 14, 1971) changes only Example 6's claim-1 f₁. The analysis previously dated it Dec. 11.

**Changes**

| Item | Before | After | Evidence |
|---|---|---|---|
| a₁ (S2 gap) | 2.761 (printed 9.86) | 5.561 (19.86 × 0.28) | See the a₁ note below. |
| r2 sd | 12.4 | 13.5 | The old 0.77\|R\| cap came from the misprinted 2.8 mm gap. At 13.5 the 28° bundle clears r2 (12.96 needed), which removes a 16% clip. The engine's paraxial half-field rises from 31.4° to 33.6°. The figure shows the L1 rim at about 16.1 mm. |
| r6 / r7 sd | 7.7 / 6.2 | 8.7 / 8.7 | Figs. 6c and 3 draw the L3/L4 doublet as a near-cylinder with a rim of about 8.7 mm, rear face included. The old r7 was 29% below the figure, and the old r6 clipped the 28° bundle by 13%. |
| r10 sd | 6.7 | 7.3 | The L6/L7 rim is drawn at about 8.0 mm. The cemented r11 is limited to about 7.4 mm by the L6 edge, so r10 now matches r11. |
| r13 / r14 sd | 7.4 / 7.8 | 8.2 / 9.0 | See the L8 note below. |
| STO sd | 5.7 | 5.9 | Real-ray iris radius for f/2.8 at the corrected scale is 5.88 mm. |
| Close BF | 21.278 | 21.964 | Unit-focus extension recalculated at 3.57 mm (m ≈ −0.127) for a 300 mm object-to-image distance, and labelled as calculated. |
| `fstopSeries` / `maxFstop` | ended at f/22 with default max 16 | ends at f/16, `maxFstop: 16` | The old series listed an unreachable f/22. f/16 is the production aperture-ring minimum. |
| L1/L2/L5, L8 glass | `SK16 (SCHOTT)`, `F2 (Schott; …)` | Schott catalog-equivalent wording with patent nₑ / νₑ | The patent names no glass or supplier. Resolution is unchanged (N-SK16 and F2 are OK-compatible). |
| L4/L7 glass | `813252` code (no match) | `SF6 (Schott catalog equivalent; …)` | The repo's Schott SF6 Sellmeier gives nₑ 1.81265 and νₑ 25.24 exactly. Glass resolution now marks the row OK-compatible. |
| Header, specs and group label | "e-line trace ≈ 29.2 mm", f₁ ≈ −36 | f = 28 mm, f₁ ≈ −35; `focalLengthDesign: 28` added | These followed from the a₁ correction. |

- **a₁ misprint.** The printed a₁ = 9.86 traces to f 104.20, s′ 67.03, f₁ −128.97 and f₁,₂ +82.46. The patent states 100, 65.70, −126.5 and +79.3. a₁ = 19.86 traces to 100.05, 65.64, −126.63 and +79.42. Changing any other single row fits only EFL, never all four values. Sister Example 4 prints a₁ = 19.88 and traces to f 99.87. In Figs. 6c and 3, the drawn a₁/a₂ is 0.36 and 0.32; 19.86/51.20 = 0.39, while 9.86/51.20 = 0.19. The old "d-line vs e-line 4% shift" explanation is withdrawn.
- **L8 rim (r13 / r14).** The figure shows L8 as the largest rear element, about 9.7 mm. It is drawn flatter than R13 = −9.69 allows, so r13 is held at sd/\|R\| = 0.85. The full-field clip at r14 falls from 92% to 54% of the upper half-bundle, and the 28° bundle is now unclipped.
- **Kept sizes.** r1 (15.4 against the figure's 16.1), r3/r4 (14.0/13.2 against 13.4), L5 (6.0/6.4 against 6.9) and r12 (7.4 against 8.0) are all within about 15% of the figure and were kept. r5 was kept at 10.4 even though the figure shows 8.7, because the 20° and 28° bundles need 9.4 and 10.0 mm there.

**Checks on the result**

- **Paraxial.** EFL is 28.013 mm and BFD 18.378 mm. The stored BF of 18.396 is patent s′ × 0.28, which leaves 0.018 mm of defocus. Total track is 72.44 mm.
- **Field and aperture.** The chief ray reaches the 21.6 mm corner at 37.7° (patent ±37°). No surface clips the f/2.8 axial beam, and no surface blocks the full-field chief ray.
- **Validators.** The surface validator and the image-circle floor both pass. The renderer shows no rim trims. The engine reports EFL 28.01 mm, half-field 33.6°, stop radius 5.88 mm and max f/16.
- **Glass.** Seven of eight elements resolve OK-compatible. L3 stays unresolved by design.
- **Close focus.** The close keyframe focuses at 299.98 mm object-to-image.
- **Live view.** A headless render of the local page at infinity and at 0.30 m, with the focus-movement overlay, shows L1 and L2 clearly separated as in Fig. 6c, D1 as a near-cylinder and L8 as the tallest rear element. All three groups move together by 3.57 mm. Off-axis rays were not exercised. The production baseline still shows the old compressed L1–L2 gap and a 29.17 mm EFL.

**Open limitations**

- The patent publishes no semi-diameters, close-focus state or iris diameter. The stop radius and close-focus travel are derived.
- The L3 coordinate (nₑ 1.79227 / νₑ 47.15) remains unmatched. N-LAF21 gives nₑ 1.79195 / νₑ 47.25.
- The analysis §1 claims about the production 8-element / 8-group air-spaced version and the Wetzlar designer credit were not re-sourced in this pass.
