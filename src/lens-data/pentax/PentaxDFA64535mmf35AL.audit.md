# Audit Log - Pentax HD D FA645 35mm f/3.5 AL [IF]

Patent: US 2001/0007512 A1, Embodiment 4

## 2026-07-28 - Integration, semi-diameter, and glass audit

### Patent evidence

- Reviewed the ignored local source `patents/US20010007512A1.pdf`.
- Compared the prescription with Figure 13 on PDF page 8.
- The patent does not publish clear-aperture values, glass names, line indices, or partial-dispersion data.

### Identity correction

- Normalized the display name from `PENTAX HD PENTAX-D ...` to the repository form
  `PENTAX HD D FA645 35mm f/3.5 AL [IF]`.

### Semi-diameter corrections

| Surface set | Before | After | Justification |
|---|---|---|---|
| 1 / 2 | 20.0 / 16.6 mm | 26.8 / 20.8 mm | Restores the large front negative meniscus in Figure 13; surface 2 remains below the rim-slope limit. |
| 3 / 4 / 5A | 14.0 / 12.6 / 12.6 mm | 20.3 / 18.3 / 13.4 mm | Restores the hybrid substrate outline while capping 5A below its K=+1 conic and rim-slope limits. |
| 6-12 | 12.5-13.2 mm | 17.5-18.8 mm | Restores the broad fixed front group and its patent-figure taper. |
| 13-15 | 12.3 mm | 12.4 mm | Small outline alignment for the first moving doublet. |
| 16 / 17 / 18 / 19A | 9.7 / 9.7 / 9.7 / 10.0 mm | 10.5 / 10.5 / 10.2 / 10.5 mm | Aligns the compact rear pair with Figure 13. |

The revised surfaces pass the conic-domain, rim-slope, element-edge, cross-gap, render-trim, and image-circle gates at
both authored focus endpoints.

### Glass disposition

- The catalog resolver covers 9/11 material layers.
- The bonded synthetic resin remains intentionally Abbe-modeled.
- L10 at 1.58636 / 60.9 remains explicitly unmatched. Nearby barium-crown catalog rows are not exact enough to justify
  a coefficient-backed identity.


## 2026-10-27 — Rimmer localization audit (asphere data)

### Source evidence

- US 2001/0007512 A1, Embodiment 4: PDF p.14 (printed p.5), Table 4, every surface row and focus column; paragraph 0078, both coefficient-table sections, rows 5 and 19; Table 5, Embodiment 4 column.
- PDF p.12 (printed p.3), paragraph 0057 and definitions 0058–0066: standard `(1+K)` conic, even powers h⁴/h⁶/h⁸/h¹⁰, no normalization or scale conversion. The 0.400 mm, nd=1.52700, vd=43.7 resin at row 4 exits at aspherical row 5, exactly as authored; paragraph 0068 identifies the bonded rear resin layer.
- PDF p.8, Figure 13 and Figures 14A/C/D: f/3.6, y=34.85 mm; spherical/astigmatism ticks ±0.5 mm, distortion ticks ±3%. The d-line spherical edge is about +0.04 mm; the edge astigmatism curves end near T=−0.22 and S=−0.10 mm; distortion ends near −2.6%.
- Table 4 gives f=36.00 mm, fB=57.80 mm and w=44.8°. The corrected 44.8° chief reaches 34.819 mm, consistent with the source's rounded field angle; the printed signs reach only 24.280 mm. The paraxial EFL/BFD do not distinguish these sign alternatives.

### Source-backed changes

| Surface / field | Before | After | Evidence |
|---|---:|---:|---|
| 5A `K` | +1 | −1 | Printed sign-block erratum, isolated by Figures 14A/C/D; source-summary accepts the restored field mapping. |
| 5A `A6` | +2.868×10⁻⁹ | −2.868×10⁻⁹ | Same sign block; mantissa and exponent retained. |
| 5A `A8` | +1.268×10⁻¹¹ | −1.268×10⁻¹¹ | Same sign block; mantissa and exponent retained. |
| 5A `A10` | +4.817×10⁻¹⁶ | −4.817×10⁻¹⁶ | Same sign block; retaining positive A10 gives edge T=+0.086 mm, opposite the source plot. |
| 5A `sd` | 13.4 mm | 17.0 mm | Corrected corner chief reaches 15.33 mm; Figure 13 optical curve endpoint is approximately 16.9–17.0 mm, excluding the outer flat rim. |

The baseline was reproduced. Rays show a smooth prescription error, not a turnover or discontinuous surface jump. Every stored R, d, medium nd/vd, coefficient magnitude and exponent matches the rendered print, including both asphere locations. Surface 19A is unchanged. No odd terms are published.

A single-slip search checked sign, ×10, /10 and zero on every nonzero asphere term, a conic-column swap and an asphere-row swap. K=−1 alone reduces full-pupil LSA to +0.092 mm but leaves edge T=+31.087 mm and distortion −7.013%, so that isolated edit was rejected. All 32 sign combinations of the surface-5 K/A4/A6/A8/A10 block were then evaluated. Figures 14A/C/D isolate `−,+,−,−,−`: positive A10 with the other three corrected gives edge T=+0.086 mm, while negative A10 gives −0.218 mm and matches the drawn negative meridional endpoint and curve. The independent source-summary field mapping rejects the printed block and accepts this restored block. This satisfies the block-erratum rule; no coefficient was fitted. Four `corrected` source.errata entries identify the evidence kinds, together with inline and header notes. Review added a third kind, `sibling-example`: the rendered tables of Embodiment 1 (PDF p.13, paragraph 0069) and Embodiment 2 (paragraph 0072), whose basic arrangement is Embodiment 1's, print the same surface 5 as K −1.00, A4 positive and A6/A8 negative, and Embodiment 2 also prints A10 negative (Embodiment 1 has no A10 column). The correction was made under the errata standard without the JP Hei 11-354772 print, which closes the `sd-audit-queue.md` Section F row that waited for it.

### Optical rim

Figure 13 was measured at 600 dpi with crop `0.23,0.20,0.76,0.42`, axis `0.302`: glass span 1138–3447 px maps to 101.198 mm, or 43.83 μm/px. The tool's hybrid ENV/RIM readings near 20.0 mm follow the flat outer blank, not the curved optical endpoint. A 400 dpi zoom (`x=920,y=1030,W=250,H=760`) separates the endpoints: approximately y=1097 and y=1611 on the full rendered page give about 16.9 mm optical semi-height. The 17.0 mm choice is inferred, rounded at figure precision, and clears the source corner chief. The adjacent surface-4 rim stays 18.3 mm; the drawing has a real outer step. Other elements agree with the existing outline within the procedure's noise band. No other rim changed.

At h=17.0 mm, surface 5A has sag 7.2151506 mm, signed sphere departure −1.9902561 mm, and rim angle 39.7°. No turnover lies within the authored rim. The former +1 conic-domain cap is obsolete. Surface 19A retains +0.1098550 mm departure at h=10.5 mm.

### Localization outcome

| Quantity | Before | After |
|---|---:|---:|
| Full-pupil / half-pupil axial LSA, mm | +5.102 / +0.991 | +0.042 / −0.025 |
| Edge close-ray T / S shifts, mm | +960.599 / +31.824 | −0.218 / −0.101 |
| Edge chief height magnitude, mm | 24.280 | 34.819 |
| Edge distortion | −32.081% | −2.602% |
| Edge max referred deviation | 0.0998 | 0.0020 |
| Edge relative illumination | unavailable: rays-not-localized | 0.210 |

At infinity the complete sampled field now returns relative illumination, with no localization refusal. The chief reaches the format corner without clipping. The clear-aperture model still clips portions of off-axis bundles; its RI is inferred rather than patent-measured. Surface validation finds no geometry error, the f/3.6 axial beam passes, and image-circle and traced field-coverage checks are clear. The analysis table, signed rim departures, stop-radius wording, and obsolete cap statements were synchronized.

### Follow-up

The optional close-focus helper run returns RI at each sampled finite field but reports an axial close-ray focus offset of −7.388 mm. A direct ray from the source-derived object plane (177.054 mm before surface 1 at the published endpoint gaps) instead has near-axis image-plane residual +0.000012 mm; h=1/2.5/5 mm rays give −0.0072/−0.0328/+0.0940 mm. This indicates a finite-launch/helper inconsistency for the coordinator to investigate, not evidence to alter the source gaps or closeFocusM. The source endpoint and interpolation remain unchanged. Broad repository gates and delivery are reserved for the coordinator under the playbook.
