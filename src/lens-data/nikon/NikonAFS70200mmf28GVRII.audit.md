# Nikon AF-S NIKKOR 70-200mm f/2.8G ED VR II Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US8416506.pdf`, Example 6 / Table 6 and FIGS. 26-30.

### Prescription, Zoom, Focus, And VR

- The data file remains aligned to Example 6: `f = 71.40 / 135.00 / 196.00 mm`, `FNO = 2.89`, and the five-group `G1(+), G2(-), G3(+), G4(-), G5(+)` architecture.
- Table 6 confirms the stored infinity variable distances for `d1`, `d2`, `d3`, `d4`, fixed `Bf = 53.787 mm`, and `TL = 246.275 mm`.
- The patent describes G3 as the preferred focusing group but does not publish finite-conjugate variable gaps for Example 6. The close-focus values remain paraxial reconstruction values constrained by Nikon's published 1.4 m minimum focus distance.
- The patent identifies G5b as the negative vibration-reduction subgroup and gives the Example 6 VR coefficient values already summarized in the analysis. The current G5b grouping remains appropriate.

### Glass And APD

- L11 was clarified as `J-LAFH3 (HIKARI; 795287, coefficients unavailable)`. The patent row is `nd=1.795041`, `νd=28.69`; no coefficient-backed public catalog entry was verified in this pass, so it remains an Abbe-only glass for runtime coverage.
- The seven `nd=1.49782`, `νd=82.52` ED rows remain catalog-identified as HIKARI J-FKH1. Their `apd: "inferred"` status is correct because Nikon's patent table gives only `nd`/`νd`; the anomalous partial-dispersion behavior comes from the catalog-class match and Nikon's seven-ED-element product specification.
- L54 remains a barium light-flint class row. Its `N-BALF4` token resolves to the existing Schott catalog entry, so it does not need a relabel.
- The patent has no `θgF`, `Pg,F`, `dPgF`, `nC`, `nF`, or `ng` table for Example 6.

### Semi-Diameters

- US 8,416,506 does not publish per-surface clear apertures or effective diameters for Example 6.
- Current SDs remain documented renderer clear-aperture estimates. They make rational sense against FIG. 26 and the production 77 mm filter constraint: a large front collector, tightened variator and focus groups, a stop at `sd = 16.59 mm`, and moderate rear relay diameters through the G5a/G5b/G5c assembly.
- The stop SD is derived from the f/2.89 aperture geometry; the other SDs remain constrained by paraxial ray envelopes, edge thickness, and sag clearance rather than patent-published aperture data.

### Verification

- Pending batch verification after the current Nikon audit pass.
