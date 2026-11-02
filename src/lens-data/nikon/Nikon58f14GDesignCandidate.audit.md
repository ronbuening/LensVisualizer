# Audit Log - Nikon AF-S NIKKOR 58mm f/1.4G

Patent: JP2013-019993A

## 2026-06-04 - Sweep 1 local patent relabel

- Local patent source: `patents/JP2013019993A.pdf` (untracked local file).
- `pdftotext -layout` extracted the patent prescription tables; Example 2 is the current design-candidate embodiment.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| Lb1p / row 3 | 1.75500 / 52.34 | `S-LAL14 / N-LAK12 (lanthanum crown)` | `J-LASKH2 (Hikari, patent nd/vd match) / N-LAK33B` | Hikari J-LASKH2 and Schott N-LAK33B round-trip the stored patent pair. |
| Lb2 / row 6 | 1.68893 / 31.16 | `S-TIH4 / N-SF8 (dense flint)` | `E-FD8 (HOYA, patent nd/vd match) / S-TIM28` | HOYA E-FD8 clears the prior S-TIH4 mismatch. |
| Lcn / row 9 | 1.72825 / 28.46 | `S-TIH11 / N-SF10 (dense flint)` | `H-ZF4A (CDGM, patent nd/vd match) / S-TIH10` | CDGM H-ZF4A is the exact resolver candidate; S-TIH10 is the OHARA family equivalent. |

## 2026-05-20 - Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a JP2013-019993A PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - First-10 mismatch queue recheck

- Rechecked the local untracked `patents/` folder for JP2013-019993A / `019993`; no matching local PDF is present.
- `JP2013003324A.pdf` is a different Nikon large-aperture lens patent and was not used to override the data.
- No glass or SD changes made. Patent figure/table review remains blocked until the source PDF or a verified local family equivalent is added.

## 2026-09-08 — First-hosted audit, lens 23

- Original `patents/JP2013019993A.pdf`: title p.1; paragraph75 p.12 (unit focus); equation(a) p.13; Tables4–5 p.17; Figure3 p.23 at600dpi. All source radii/thicknesses, nd/vd and polynomial coefficients agree; both existing K=kappa−1 conversions are correct and retained.
- Source f58.0216/FNO1.450/full field41.72° now match numerical metadata and aperture shortcuts. Nine elements/five air-separated components/four optical groups retained; removed unsupported production doublet-splitting claim and surfaced design-candidate status. Corrected source surface count:15 including stop.
- Manual optical-rim check against53.5038mm vertex span gives La23.5, Lb1 19.8, Lb2 16.9 and both rear assemblies16.8mm. Adopted these inferred rims. Automated ENV/RIM values across Gb–Gd were contaminated by labels/brackets; not adopted. Surface/image-circle checks and untrimmed-render regression pass.
- Source unit motion retained. Finite BF46.003 and0.58m endpoint explicitly reconstructed: independent matrix gives EFL58.021613mm, near distance0.579976m and magnification−0.125866. All surfaces and stop move7.303mm objectward. No example-specific finite station or SWM helicoid is claimed.
- Source has no cover/filter rows; original BF38.7mm retained. The other patent examples' rear plates are not imported into Example2.
- Qualified catalog counterparts; Ldn1.53172/48.78 now uses compatible inferred J-LLF6 instead of unmatched KZFS2-type label. Removed unsupported positive-APD inference. La/Ldp2 remain unidentified; Ldp1 S-LAH58 is approximate in Abbe number. All isolated focal lengths reproduce stored precision.
- Live production and local infinity/near/half/f16 checked: source f1.45, candidate label, near58cm/BF46.00, half1.16m/BF42.35; f16 stop2.58mm. Four source tests pass. Full21–30 batch gates/commit pending.

## 2026-10-01 — Production construction and label review

- Display name changed from `NIKON AF-S NIKKOR 58mm f/1.4 G` to `NIKON 58mm f/1.45 (patent design candidate)`; replaced the vague subtitle's `NEAR MATCH` with the exact example and inferred AF-S product association. The existing catalog key remains stable.
- Rechecked Example 2 Table 4/5, local PDF p. 17: all 15 modeled surface radii, gaps, glass indices, element Abbe values and both asphere coefficient sets agree with the source, including the existing K=κ−1 conversion. Figure 3, p. 23, retains the front doublet, post-stop doublet and rear triplet. No prescription correction is justified.
- Compared all four patent layouts (Figs. 1/3/5/7, pp. 22–24) with Nikon's [global product diagram](https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/normal/af-s_nikkor58mmf_14g/) and [Japanese specifications/diagram](https://nij.nikon.com/products/lineup/nikkor/fmount/af-s_nikkor_58mm_f14g/spec.html). Production is nine elements/six air-separated components, with E5 and E6 separated and aspheres marked on E1/E6. Example 2 is nine/five, with E5/E6 cemented and aspheres on E1/E9. The general silhouette is related, but the cementing and asphere positions are materially different.
- None of the other examples supplies the production combination: Examples 1/4 preserve the post-stop pair and rear triplet, with E3/E9 aspheres; Example 3 has eight elements; Example 4 is 51.6mm. Do not split a doublet or move an asphere to imitate the retail drawing without a numerical source.
- Retained the source prescription, inferred optical rims, unresolved glass identities and reconstructed 0.58m focus endpoint. Surface and image-circle audits pass; these geometry checks do not establish production identity.

## 2026-10-29 — Nikon F-mount figure and fresh glass review

- Directly reopened original `patents/JP2013019993A.pdf`, Example 2: Figure 3 on PDF p. 23 at 600 dpi, plus Table 4/5 on p. 17. All nine media and every air/cemented face were checked. `pdfimages` confirms a native 300 ppi raster; the approximately 710 native-pixel first/last vertex span over 53.5038 mm gives 13.27 native px/mm. Callout leaders, group brackets and other examples were excluded.
- The rear concave air faces S5/S7 and post-stop concave front S9 have separate vertical cap-end lands. Their native cap/edge measurements are approximately 235/264, 220/227 and 199/224 px: q=0.890±0.0072, 0.969±0.0087 and 0.888±0.0084, using ±(1+q)/edge for one native pixel. Adopt inferred cut depths 3.84, 4.57 and 3.86 mm (clear radii 17.63489, 16.37887 and 14.92576 mm), with lands to unchanged outer SDs 19.8, 16.9 and 16.8 mm. All pass the complete inferred-cut beam sweep without moving beyond the source bands. The shortest land is 0.521 mm; no source numerical depth is claimed. No other resolved cap break warrants a land, and cemented interfaces remain intact.
- Fresh table check retains all source d-line nd/νd pairs: La/Ldp2 1.74443/49.53; Lb1p 1.75500/52.34; Lb1n 1.48749/70.31; Lb2 1.68893/31.16; Lcn 1.72825/28.46; Lcp 1.88300/40.77; Ldp1 1.88300/40.66; Ldn 1.53172/48.78. Seven media resolve compatible catalog curves; La/Ldp2 remain explicitly unidentified despite broad nearby candidates. The approximate S-LAH58 Abbe counterparts remain qualified. No source partial-dispersion or extra line-index values are supplied, and none is invented; `apd: false` denotes no source classification, not measured zero anomaly.
- No R/d, coefficient, K=κ−1 conversion, source plate disposition, fixed iris or focus control changes. Both aspheric clear caps remain unchanged, so their modeled departures/domain statements remain current. Production correlation remains a related patent candidate: the source/retail component and asphere-position differences are not concealed.
- Focused surface/inferred-beam and image-circle checks pass; aperture remains within 3% with no rim limiter. Actual SVG paths are finite and have zero hidden trim over focus/zoom 0, 0.5, 1; the nine-state montage was inspected. Catalog consistency and selected-proxy coordinate checks pass. Parent records full gates at the triad commit.
