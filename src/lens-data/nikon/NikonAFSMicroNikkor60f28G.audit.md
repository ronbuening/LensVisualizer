# Audit Log - Nikon AF-S Micro-Nikkor 60mm f/2.8G ED

Patent: US 7,898,744 B2

## 2026-06-04 - Sweep 1 local patent relabel

- Local patent source: `patents/US7898744.pdf` (untracked local file).
- `pdftotext -layout` extracted the patent prescription table used for this pass.

| Element / row | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L2 / row 3 | 1.63854 / 55.48 | `H-LAK6A (CDGM) or Nikon melt` | `K-SK18 (Sumita, patent nd/vd match) / S-BSM18 (OHARA)` | Sumita K-SK18 is the resolver-friendly catalog match; OHARA S-BSM18 is a close public equivalent. |
| L7 / row 13 | 1.49782 / 82.56 | `S-FPM4 (OHARA) — ED glass` | `J-FKH1 (Hikari, patent nd/vd match) — ED glass` | Hikari J-FKH1 clears the prior S-FPM4 mismatch and preserves ED/APD intent. |

## 2026-05-20 - Patent unavailable disposition

- The requested local patent review could not be completed because the untracked `patents/` folder does not contain a US 7,898,744 B2 PDF.
- No glass labels were changed. Candidate rows remain queued until the patent file is available locally.

## 2026-05-31 - Catalog-mismatch second-batch recheck

- Re-searched the local untracked `patents/` folder for US 7,898,744 B2 / `7898744`; no matching PDF was present.
- No substitute patent was used, no glass labels were changed, and no figure/SD check was possible without the cited patent file.

## 2026-07-29 - Remaining catalog-mismatch audit

- The local source is now present. Rechecked US 7,898,744 B2 Example 2 surface 20; the stored `R`, `d`, `nd=1.80100`, and `νd=34.96` agree with the patent row.
- Relabeled L11 from incorrect HOYA `NBFD3` to Hikari `J-LAF016`, the exact 801349 Nikon/Hikari coordinate.
- Synchronized the element discussion and catalog summary. No prescription geometry changed.

## 2026-09-08 — First-hosted audit, lens 21

- Original local `patents/US7898744.pdf`: title p.1; Figure3 p.4 at600dpi; source equation p.21; Table2 pp.22–23. All22 radii, thicknesses, source glass coordinates and eight polynomial coefficients checked against the original pages.
- Converted source kappa to standard K: S2A −5.3148→−6.3148 and S8A +2.1218→+1.1218. Corrected false conic-domain and manufacturing claims in the analysis.
- Rims inferred from Figure3: L1 14.2, L2 13.4, L3 13.0, G2 doublet13.3/12.8, G3 12.5/12.4mm. Figure tool uses86.99mm axial glass extent including sag; vertex span86.7163mm differs less than0.4%, below adopted0.1mm rim rounding.
- **Follow-up:** Figure-sized L4/G4 candidates failed adjacent-surface clearance (S8A→9 6.99mm versus4.68mm permitted; S19→20 1.91mm versus1.477mm). Retained conservative L4 10.5/10.0mm and G4 11.5mm with S19 11.4mm. Do not treat these as full figure-rim matches. All adopted surfaces render without trimming.
- Independent paraxial matrix: infinity EFL58.01453mm; source middle/near magnifications−0.499955/−0.999979, object-image distances0.229449422/0.177202033m. Updated near slider endpoint and middle focusPosition0.772292348; source four gap arrays retained, including middle0.00137mm track discrepancy. Corrected internal gap17 label BF→D17; trueBF37.45mm fixed. No cover glass or filter appears in this example.
- Qualified every catalog counterpart as inferred (L4 approximate), removed unsupported L7 APD override and branded-ED/manufacturing/production-scaling assertions. All isolated element focal lengths checked; existing0.1mm-rounded values already agree, so retained.
- Source f/2.88 retained; corrected first shortcut2.8→2.88 and removed unreachable22/32. Twelve elements/nine air components/four movement groups retained.
- Live production baseline and local infinity/near/approximately half-size/f16 verified. Near reads18cm with correct opposing group movements; middle23cm and EFL45.34mm; D17 correctly labeled; f16 physical stop4.13mm.
- Four source regressions pass; `audit:surface` passes and `audit:image-circle` finds no undersized lens. Full batch21–30 gates and commit remain pending.
