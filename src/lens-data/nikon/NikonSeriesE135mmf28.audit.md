# Audit Log — Nikon Series E 135mm f/2.8

Patent: US 4,303,314, Embodiment 3 / Claim 4

## 2026-06-19 — Local patent and glass review

- Local patent source: `patents/US4303314.pdf` (untracked local file).
- Rendered page images and `pdftotext -layout` output were checked for Embodiment 3, Claim 4, and Fig. 1.

### Correction

| Element | Before | After | Reason |
|---|---|---|---|
| L1 | `vd: 60.29`, SK16/S-BSM16 class with line indices | `vd: 58.6`, `620586` patent crown glass | The patent prints `nd = 1.62041`, `νd = 58.6`; no certificate correction changes that value. |
| L2 | `vd: 60.29`, SK16/S-BSM16 class with line indices | `vd: 58.6`, `620586` patent crown glass | Same printed glass pair as L1; no verified coefficient-backed catalog match was found. |
| L4 | SF56A catalog-style label and `vd: 26.08` | `785261` dense flint label and `vd: 26.1` | The patent prints `nd = 1.78470`, `νd = 26.1`; line-index backfill remains useful, but the authored Abbe value now matches the patent. |

### Prescription and layout

- Embodiment 3 was matched surface-by-surface against the data file after the 1.35x production scaling: radii, thicknesses, indices, Abbe numbers, and back-focus agree with the patent table.
- Fig. 1 supports the same positive-positive-negative-stop-positive structure used for both Series E entries.
- The stop remains an inferred split of `d6` between L3 and L4; the printed optical spacing total is preserved.

### Semi-diameters

- The patent does not publish clear semi-diameters.
- The selected SDs remain plausible against Fig. 1 after scaling. The front element is close to the 52 mm front-aperture limit but does not require impossible edge thickness.

### Glass disposition

- L1/L2 intentionally remain Abbe-only unresolved `620586` entries until a coefficient-backed glass source is added.
- L4 uses a code-based dense-flint label with line-index backfill rather than claiming a verified Nikon/SCHOTT procurement source.
- `npm run generate:glass-reports` passed with these entries recorded as unresolved code coverage, not catalog mismatches.
