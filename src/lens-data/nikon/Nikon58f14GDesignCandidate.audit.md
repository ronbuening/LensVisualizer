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
